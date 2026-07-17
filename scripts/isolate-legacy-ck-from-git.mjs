#!/usr/bin/env node
/** Exact restore for the reviewed immutable archive; never reconstructs from sourceCommit. */
import { execFileSync } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { constants } from 'node:fs';
import {
  link, lstat, mkdir, open, rename, rm, unlink, writeFile,
} from 'node:fs/promises';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';
import {
  ARCHIVE_TREE,
  ISOLATION_COMMIT,
  collectFilesystemTree,
  collectGitTree,
  firstTreeDifference,
  gitObjectExists,
} from './legacy-archive-integrity.mjs';

function parseArgs(argv) {
  const options = {
    repo: fileURLToPath(new URL('..', import.meta.url)),
    commit: null,
    check: false,
    action: 'restore',
    injectFailure: null,
  };
  const actionFlags = [];
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--repo') options.repo = resolve(argv[++index]);
    else if (argument === '--archive-commit') options.commit = argv[++index];
    else if (argument === '--check') options.check = true;
    else if (argument === '--resume') actionFlags.push('resume');
    else if (argument === '--rollback') actionFlags.push('rollback');
    else if (argument === '--inject-failure') options.injectFailure = argv[++index];
    else if (argument === '--source-commit') throw new Error('--source-commit is unsupported; source provenance is never a restore input');
    else throw new Error(`unsupported option or positional input: ${argument}`);
  }
  if (actionFlags.length > 1) throw new Error('resume/rollback action flags are mutually exclusive');
  if (actionFlags.length === 1) options.action = actionFlags[0];
  if (options.action !== 'restore' && options.check) throw new Error('--check cannot be combined with resume or rollback');
  if (options.action !== 'restore' && options.commit) throw new Error('--archive-commit cannot be combined with resume or rollback');
  if (options.action === 'restore' && !options.commit) throw new Error('--archive-commit is required');
  if (options.commit && options.commit !== ISOLATION_COMMIT) {
    throw new Error(`refusing archive commit ${options.commit}; reviewed isolation commit is ${ISOLATION_COMMIT}`);
  }
  if (![
    'before-swap',
    'after-backup',
    'after-backup-rename',
    'after-swap-rename',
    'after-destination-trash-rename',
    'after-bootstrap-journal',
    'while-locked',
    null,
  ].includes(options.injectFailure)) {
    throw new Error('unsupported failure injection point');
  }
  return options;
}

function git(repo, args, encoding = 'utf8') {
  return execFileSync('git', args, {
    cwd: repo,
    encoding,
    maxBuffer: 64 * 1024 * 1024,
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

async function assertNoSymlinkAncestors(repo, destination) {
  let current = resolve(repo);
  for (const segment of destination.slice(current.length + 1).split(sep)) {
    current = join(current, segment);
    try {
      const stat = await lstat(current);
      if (stat.isSymbolicLink()) throw new Error(`symlink ancestor is forbidden: ${current}`);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      break;
    }
  }
}

async function extractReviewedTree(repo, commit, staging) {
  const raw = git(repo, ['ls-tree', '-rz', '--full-tree', commit, ARCHIVE_TREE], 'buffer');
  const records = raw.toString('utf8').split('\0').filter(Boolean);
  if (!records.length) throw new Error(`missing ${commit}:${ARCHIVE_TREE}`);
  for (const record of records) {
    const match = record.match(/^(\d+)\s+(\w+)\s+([0-9a-f]+)\t(.+)$/);
    if (!match) throw new Error(`unparseable archive tree record: ${record}`);
    const [, mode, type, oid, path] = match;
    if (type !== 'blob' || mode !== '100644' || !path.startsWith(`${ARCHIVE_TREE}/`)) {
      throw new Error(`unsupported archive entry: ${record}`);
    }
    const relativePath = path.slice(`${ARCHIVE_TREE}/`.length);
    const target = resolve(staging, relativePath);
    if (!target.startsWith(`${resolve(staging)}${sep}`)) throw new Error(`archive path escape: ${path}`);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, git(repo, ['cat-file', 'blob', oid], 'buffer'), { mode: 0o644, flag: 'wx' });
  }
}

function assertMatchingTree(actual, expected, label) {
  const changed = firstTreeDifference(actual.entries, expected.entries);
  if (changed || actual.rootSha256 !== expected.rootSha256 || actual.lineCount !== expected.lineCount) {
    throw new Error(`${label} differs from reviewed archive${changed ? `; first changed path: ${changed}` : ''}`);
  }
}

const RECOVERY_SCHEMA_VERSION = 1;
const OPERATION_ID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const JOURNAL_KEYS = ['backup', 'commit', 'destination', 'operationId', 'schemaVersion', 'staging', 'state'];
const LOCK_KEYS = ['operationId', 'schemaVersion'];
const EXECUTION_LOCK_KEYS = ['operationId', 'pid', 'schemaVersion'];

class SimulatedPowerLoss extends Error {}

function exactKeys(value, expected) {
  return value && typeof value === 'object' && !Array.isArray(value)
    && JSON.stringify(Object.keys(value).sort()) === JSON.stringify([...expected].sort());
}

async function readRegularJson(path, label) {
  const stat = await lstat(path);
  if (!stat.isFile() || stat.isSymbolicLink()) throw new Error(`${label} must be a regular, non-symlink file`);
  const handle = await open(path, constants.O_RDONLY | constants.O_NOFOLLOW);
  try {
    return JSON.parse(await handle.readFile('utf8'));
  } finally {
    await handle.close();
  }
}

async function syncDirectory(path) {
  const handle = await open(path, constants.O_RDONLY);
  try {
    await handle.sync();
  } finally {
    await handle.close();
  }
}

async function syncDirectories(paths) {
  for (const path of [...new Set(paths)]) await syncDirectory(path);
}

async function renameDurably(source, destination) {
  await rename(source, destination);
  await syncDirectories([dirname(source), dirname(destination)]);
}

async function writeRegularJson(path, value, create = false) {
  const parent = dirname(path);
  const temporaryPath = `${path}.tmp-${randomUUID()}`;
  const handle = await open(
    temporaryPath,
    constants.O_CREAT | constants.O_EXCL | constants.O_WRONLY | constants.O_NOFOLLOW,
    0o600,
  );
  try {
    await handle.writeFile(`${JSON.stringify(value, null, 2)}\n`);
    await handle.sync();
  } finally {
    await handle.close();
  }
  try {
    if (create) {
      await link(temporaryPath, path);
      await syncDirectory(parent);
      await unlink(temporaryPath);
      await syncDirectory(parent);
    } else {
      const stat = await lstat(path);
      if (!stat.isFile() || stat.isSymbolicLink()) throw new Error(`refusing non-regular journal update: ${path}`);
      await rename(temporaryPath, path);
      await syncDirectory(parent);
    }
  } catch (error) {
    await rm(temporaryPath, { force: true });
    throw error;
  }
}

function processIsAlive(pid) {
  if (!Number.isSafeInteger(pid) || pid <= 0) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    if (error.code === 'EPERM') return true;
    if (error.code === 'ESRCH') return false;
    throw error;
  }
}

async function acquireExecutionLock(repo) {
  const path = resolve(repo, '.legacy-archive-restore.execution.lock');
  const token = {
    schemaVersion: RECOVERY_SCHEMA_VERSION,
    operationId: randomUUID(),
    pid: process.pid,
  };
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      await writeRegularJson(path, token, true);
      return { path, token };
    } catch (error) {
      if (error.code !== 'EEXIST') throw error;
    }
    let existing;
    try {
      existing = await readRegularJson(path, 'execution lock');
    } catch (error) {
      if (error.code === 'ENOENT') continue;
      throw error;
    }
    if (!exactKeys(existing, EXECUTION_LOCK_KEYS)
      || existing.schemaVersion !== RECOVERY_SCHEMA_VERSION
      || !OPERATION_ID_PATTERN.test(existing.operationId)
      || !Number.isSafeInteger(existing.pid)
      || existing.pid <= 0) {
      throw new Error('execution lock has an invalid schema');
    }
    if (processIsAlive(existing.pid)) {
      throw new Error(`another legacy archive recovery process holds the execution lock (pid ${existing.pid})`);
    }
    const stalePath = `${path}.stale-${token.operationId}`;
    try {
      await renameDurably(path, stalePath);
    } catch (error) {
      if (error.code === 'ENOENT') continue;
      throw error;
    }
    await rm(stalePath, { force: true });
    await syncDirectory(dirname(stalePath));
  }
  throw new Error('could not acquire the legacy archive execution lock after stale-lock recovery');
}

async function releaseExecutionLock(lock) {
  const existing = await readRegularJson(lock.path, 'execution lock');
  if (!exactKeys(existing, EXECUTION_LOCK_KEYS) || existing.operationId !== lock.token.operationId) {
    throw new Error('refusing to release an execution lock owned by another operation');
  }
  await rm(lock.path);
  await syncDirectory(dirname(lock.path));
}

async function managedDirectoryPresent(path, label) {
  try {
    const stat = await lstat(path);
    if (stat.isSymbolicLink() || !stat.isDirectory()) throw new Error(`${label} must be a non-symlink directory`);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') return false;
    throw error;
  }
}

async function regularFilePresent(path) {
  try {
    const stat = await lstat(path);
    if (!stat.isFile() || stat.isSymbolicLink()) throw new Error(`managed metadata must be a regular, non-symlink file: ${path}`);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') return false;
    throw error;
  }
}

function recoveryManagedPaths(repo, operationId) {
  return {
    destination: resolve(repo, ARCHIVE_TREE),
    staging: resolve(repo, `.legacy-ck.restore-${operationId}`),
    backup: resolve(repo, `.legacy-ck.backup-${operationId}`),
    destinationTrash: resolve(repo, `.legacy-ck.trash-destination-${operationId}`),
    stagingTrash: resolve(repo, `.legacy-ck.trash-staging-${operationId}`),
    backupTrash: resolve(repo, `.legacy-ck.trash-backup-${operationId}`),
  };
}

async function assertManagedTreeIdentity(repo, path, expected, label) {
  const present = await managedDirectoryPresent(path, label);
  if (!present) return false;
  assertMatchingTree(await collectFilesystemTree(repo, relative(repo, path)), expected, label);
  return true;
}

async function readValidatedRecovery(repo, journalPath, lockPath, expected) {
  const journal = await readRegularJson(journalPath, 'recovery journal');
  if (!exactKeys(journal, JOURNAL_KEYS)) throw new Error('recovery journal has an invalid schema');
  if (journal.schemaVersion !== RECOVERY_SCHEMA_VERSION || !OPERATION_ID_PATTERN.test(journal.operationId)) {
    throw new Error('recovery journal schema or operation identity is invalid');
  }
  if (![
    'staged', 'backing-up', 'backed-up', 'swapping', 'swapped',
    'rolling-back', 'rolled-back', 'cleaning', 'cleaned',
  ].includes(journal.state)) {
    throw new Error('recovery journal state is invalid');
  }
  if (journal.commit !== ISOLATION_COMMIT) throw new Error('recovery journal commit is not the reviewed isolation commit');

  const managedPaths = recoveryManagedPaths(repo, journal.operationId);
  for (const key of ['destination', 'staging', 'backup']) {
    if (journal[key] !== managedPaths[key]) throw new Error(`recovery journal ${key} is outside the managed path contract`);
  }
  for (const path of Object.values(managedPaths)) await assertNoSymlinkAncestors(repo, path);

  const lockPresent = await regularFilePresent(lockPath);
  let bootstrapLockMissing = false;
  if (lockPresent) {
    const lock = await readRegularJson(lockPath, 'recovery lock');
    if (!exactKeys(lock, LOCK_KEYS)
      || lock.schemaVersion !== RECOVERY_SCHEMA_VERSION
      || lock.operationId !== journal.operationId) {
      throw new Error('recovery journal operation identity does not match its lock');
    }
  } else if (journal.state === 'staged') {
    bootstrapLockMissing = true;
  } else if (journal.state !== 'cleaned') {
    throw new Error('recovery lock is missing before cleanup completed');
  }

  const presence = {};
  for (const [key, path] of Object.entries(managedPaths)) {
    presence[key] = await managedDirectoryPresent(path, `recovery ${key}`);
  }
  const trashPresent = presence.destinationTrash || presence.stagingTrash || presence.backupTrash;
  const ordinary = {
    staged: presence.destination && presence.staging && !presence.backup && !trashPresent,
    'backed-up': !presence.destination && presence.staging && presence.backup && !trashPresent,
    swapped: presence.destination && !presence.staging && presence.backup && !trashPresent,
  };
  let normalizedState = journal.state;
  if (journal.state === 'backing-up') {
    if (ordinary.staged) normalizedState = 'staged';
    else if (ordinary['backed-up']) normalizedState = 'backed-up';
  } else if (journal.state === 'swapping') {
    if (ordinary['backed-up']) normalizedState = 'backed-up';
    else if (ordinary.swapped) normalizedState = 'swapped';
  } else if (journal.state === 'rolling-back') {
    const beforeDestinationTrash = presence.destination && presence.backup && !presence.destinationTrash && !presence.staging;
    const backedUpOnly = !presence.destination && presence.backup && !presence.destinationTrash && presence.staging;
    const destinationTrashed = !presence.destination && presence.backup && presence.destinationTrash && !presence.staging;
    const backupRestored = presence.destination && !presence.backup
      && (presence.destinationTrash || presence.staging) && !presence.stagingTrash && !presence.backupTrash;
    if (!(beforeDestinationTrash || backedUpOnly || destinationTrashed || backupRestored)) {
      throw new Error('recovery filesystem state is inconsistent with rolling-back journal state');
    }
    if (backupRestored) normalizedState = 'rolled-back';
  } else if (journal.state === 'rolled-back') {
    if (!presence.destination || presence.backup || presence.stagingTrash || presence.backupTrash) {
      throw new Error('recovery filesystem state is inconsistent with rolled-back journal state');
    }
  } else if (journal.state === 'cleaning') {
    if (!presence.destination
      || (presence.staging && presence.stagingTrash)
      || (presence.backup && presence.backupTrash)) {
      throw new Error('recovery filesystem state is inconsistent with cleaning journal state');
    }
  } else if (journal.state === 'cleaned') {
    if (!presence.destination || presence.staging || presence.backup || trashPresent) {
      throw new Error('recovery filesystem state is inconsistent with cleaned journal state');
    }
  } else if (!ordinary[journal.state]) {
    throw new Error(`recovery filesystem state is inconsistent with journal state ${journal.state}`);
  }

  if (normalizedState !== journal.state) {
    journal.state = normalizedState;
    await writeRegularJson(journalPath, journal);
  }
  for (const [label, path] of [
    ['recovery destination', journal.destination],
    ['recovery staging', journal.staging],
    ['recovery backup', journal.backup],
  ]) {
    if (await managedDirectoryPresent(path, label)) await assertManagedTreeIdentity(repo, path, expected, label);
  }
  if (bootstrapLockMissing) {
    await writeRegularJson(lockPath, {
      schemaVersion: RECOVERY_SCHEMA_VERSION,
      operationId: journal.operationId,
    }, true);
  }
  return { journal, managedPaths };
}

async function removeDisposableTree(repo, source, trash, expected, label) {
  if (source === trash) {
    if (await managedDirectoryPresent(trash, `${label} trash`)) {
      await rm(trash, { recursive: true, force: true });
      await syncDirectory(dirname(trash));
    }
    return;
  }
  const sourcePresent = await managedDirectoryPresent(source, `${label} source`);
  const trashPresent = await managedDirectoryPresent(trash, `${label} trash`);
  if (sourcePresent && trashPresent) throw new Error(`${label} source and trash cannot both exist`);
  if (sourcePresent) {
    await assertManagedTreeIdentity(repo, source, expected, `${label} source`);
    await renameDurably(source, trash);
  }
  if (await managedDirectoryPresent(trash, `${label} trash`)) {
    await rm(trash, { recursive: true, force: true });
    await syncDirectory(dirname(trash));
  }
}

async function cleanup(repo, journalPath, lockPath, journal, expected, managedPaths) {
  if (journal.state !== 'cleaned') {
    if (journal.state !== 'cleaning') {
      journal.state = 'cleaning';
      await writeRegularJson(journalPath, journal);
    }
    await removeDisposableTree(repo, managedPaths.destinationTrash, managedPaths.destinationTrash, expected, 'cleanup destination trash');
    await removeDisposableTree(repo, journal.backup, managedPaths.backupTrash, expected, 'cleanup backup');
    await removeDisposableTree(repo, journal.staging, managedPaths.stagingTrash, expected, 'cleanup staging');
    journal.state = 'cleaned';
    await writeRegularJson(journalPath, journal);
  }
  await rm(lockPath, { force: true });
  await syncDirectory(dirname(lockPath));
  await rm(journalPath, { force: true });
  await syncDirectory(dirname(journalPath));
}

async function rollback(repo, journalPath, lockPath, journal, expected, managedPaths, injectFailure = null) {
  if (['cleaning', 'cleaned'].includes(journal.state)) {
    throw new Error('rollback is unavailable after durable cleanup has started; use --resume');
  }
  if (['staged', 'backing-up'].includes(journal.state)) {
    journal.state = 'rolled-back';
    await writeRegularJson(journalPath, journal);
  } else if (!['rolling-back', 'rolled-back'].includes(journal.state)) {
    journal.state = 'rolling-back';
    await writeRegularJson(journalPath, journal);
  }
  if (journal.state === 'rolling-back') {
    const backupPresent = await assertManagedTreeIdentity(repo, journal.backup, expected, 'rollback backup');
    if (backupPresent) {
      if (await managedDirectoryPresent(journal.destination, 'rollback destination')) {
        await assertManagedTreeIdentity(repo, journal.destination, expected, 'rollback destination');
        if (await managedDirectoryPresent(managedPaths.destinationTrash, 'rollback destination trash')) {
          throw new Error('rollback destination and destination trash cannot both exist');
        }
        await renameDurably(journal.destination, managedPaths.destinationTrash);
        if (injectFailure === 'after-destination-trash-rename') {
          throw new SimulatedPowerLoss('injected power loss after-destination-trash-rename');
        }
      }
      await renameDurably(journal.backup, journal.destination);
    }
    await assertManagedTreeIdentity(repo, journal.destination, expected, 'rolled-back destination');
    journal.state = 'rolled-back';
    await writeRegularJson(journalPath, journal);
  }
  await cleanup(repo, journalPath, lockPath, journal, expected, managedPaths);
}

async function swap(repo, journalPath, lockPath, journal, expected, injectFailure) {
  try {
    if (journal.state === 'staged') {
      journal.state = 'backing-up';
      await writeRegularJson(journalPath, journal);
      await renameDurably(journal.destination, journal.backup);
      if (injectFailure === 'after-backup-rename') throw new SimulatedPowerLoss('injected power loss after-backup-rename');
      journal.state = 'backed-up';
      await writeRegularJson(journalPath, journal);
      if (injectFailure === 'after-backup') throw new Error('injected failure after-backup');
    }
    if (journal.state === 'backed-up') {
      journal.state = 'swapping';
      await writeRegularJson(journalPath, journal);
      await renameDurably(journal.staging, journal.destination);
      if (injectFailure === 'after-swap-rename') throw new SimulatedPowerLoss('injected power loss after-swap-rename');
      journal.state = 'swapped';
      await writeRegularJson(journalPath, journal);
    }
    assertMatchingTree(await collectFilesystemTree(repo), expected, 'restored destination');
    const managedPaths = recoveryManagedPaths(repo, journal.operationId);
    await cleanup(repo, journalPath, lockPath, journal, expected, managedPaths);
  } catch (error) {
    if (error instanceof SimulatedPowerLoss) throw error;
    const recoverable = await readValidatedRecovery(repo, journalPath, lockPath, expected);
    if (['cleaning', 'cleaned'].includes(recoverable.journal.state)) {
      await cleanup(repo, journalPath, lockPath, recoverable.journal, expected, recoverable.managedPaths);
    } else {
      await rollback(repo, journalPath, lockPath, recoverable.journal, expected, recoverable.managedPaths);
    }
    throw error;
  }
}

async function main(options) {
  const repo = resolve(options.repo);
  const destination = resolve(repo, ARCHIVE_TREE);
  const journalPath = resolve(repo, '.legacy-archive-restore.json');
  const lockPath = resolve(repo, '.legacy-archive-restore.lock');
  if (options.action !== 'restore') {
    const expected = collectGitTree(repo, ISOLATION_COMMIT);
    const recovery = await readValidatedRecovery(repo, journalPath, lockPath, expected);
    if (options.action === 'rollback' || ['rolling-back', 'rolled-back'].includes(recovery.journal.state)) {
      await rollback(
        repo,
        journalPath,
        lockPath,
        recovery.journal,
        expected,
        recovery.managedPaths,
        options.injectFailure,
      );
      return { ok: true, action: 'rollback' };
    }
    if (['cleaning', 'cleaned'].includes(recovery.journal.state)) {
      await cleanup(repo, journalPath, lockPath, recovery.journal, expected, recovery.managedPaths);
    } else {
      await swap(repo, journalPath, lockPath, recovery.journal, expected, options.injectFailure);
    }
    return { ok: true, action: 'resume', rootSha256: expected.rootSha256 };
  }

  if (!gitObjectExists(repo, options.commit)) throw new Error(`missing reviewed archive Git object ${options.commit}`);
  await assertNoSymlinkAncestors(repo, destination);
  const expected = collectGitTree(repo, options.commit);
  assertMatchingTree(await collectFilesystemTree(repo), expected, 'current destination');
  const operationId = randomUUID();
  const staging = resolve(repo, `.legacy-ck.restore-${operationId}`);
  const backup = resolve(repo, `.legacy-ck.backup-${operationId}`);
  await extractReviewedTree(repo, options.commit, staging);
  const staged = await collectFilesystemTree(repo, relative(repo, staging));
  assertMatchingTree(staged, expected, 'staged destination');
  if (options.injectFailure === 'before-swap') {
    await rm(staging, { recursive: true, force: true });
    throw new Error('injected failure before-swap');
  }
  if (options.check) {
    await rm(staging, { recursive: true, force: true });
    return { ok: true, action: 'check', commit: options.commit, fileCount: expected.fileCount, rootSha256: expected.rootSha256 };
  }

  const journal = {
    schemaVersion: RECOVERY_SCHEMA_VERSION,
    operationId,
    state: 'staged',
    destination,
    staging,
    backup,
    commit: options.commit,
  };
  try {
    await writeRegularJson(journalPath, journal, true);
  } catch (error) {
    await rm(staging, { recursive: true, force: true });
    throw error;
  }
  if (options.injectFailure === 'after-bootstrap-journal') {
    throw new SimulatedPowerLoss('injected power loss after-bootstrap-journal');
  }
  try {
    await writeRegularJson(lockPath, { schemaVersion: RECOVERY_SCHEMA_VERSION, operationId }, true);
  } catch (error) {
    await rm(journalPath, { force: true });
    await syncDirectory(dirname(journalPath));
    await rm(staging, { recursive: true, force: true });
    await syncDirectory(dirname(staging));
    throw error;
  }
  await swap(repo, journalPath, lockPath, journal, expected, options.injectFailure);
  return { ok: true, action: 'restore', commit: options.commit, fileCount: expected.fileCount, rootSha256: expected.rootSha256 };
}

async function runWithExecutionLock(options) {
  const lock = await acquireExecutionLock(resolve(options.repo));
  try {
    if (options.injectFailure === 'while-locked') {
      await delay(1_500);
      throw new Error('injected failure while-locked');
    }
    return await main(options);
  } finally {
    await releaseExecutionLock(lock);
  }
}

try {
  const options = parseArgs(process.argv.slice(2));
  console.log(JSON.stringify(await runWithExecutionLock(options), null, 2));
} catch (error) {
  console.error(`Legacy archive restore failed: ${error.message}`);
  process.exitCode = 1;
}

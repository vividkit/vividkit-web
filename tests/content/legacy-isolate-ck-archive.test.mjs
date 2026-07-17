import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { cp, lstat, mkdir, mkdtemp, readFile, rename, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { promisify } from 'node:util';
import test from 'node:test';
import { forbiddenArchiveImports } from '../../scripts/check-legacy-archive-boundary.mjs';

const execFileAsync = promisify(execFile);
const root = new URL('../..', import.meta.url);
const rootPath = new URL('../..', import.meta.url).pathname;
const sourceCommit = '56524c98dbdd4d27632ffbcb9da96c77f936ab67';
const isolationCommit = '7d5ab60e9e706ba612a6202f3024685cfa32bea6';

async function run(script, args = [], cwd = rootPath) {
  return execFileAsync(process.execPath, [script, ...args], {
    cwd,
    encoding: 'utf8',
    maxBuffer: 32 * 1024 * 1024,
  });
}

async function runFailure(script, args = [], cwd = rootPath) {
  try {
    await run(script, args, cwd);
    assert.fail(`${script} unexpectedly succeeded`);
  } catch (error) {
    assert.notEqual(error.code, 'ERR_ASSERTION');
    return error;
  }
}

test('archive provenance pins source and isolation identities outside expected digests', async () => {
  const source = await readFile(new URL('../../src/data/guides/legacy-archive-provenance.ts', import.meta.url), 'utf8');
  assert.match(source, new RegExp(sourceCommit));
  assert.match(source, new RegExp(isolationCommit));
  assert.match(source, /2026-07-08/);
  assert.match(source, /2026-07-13/);
  assert.match(source, /fileCount:\s*208/);
  assert.match(source, /lineCount:\s*72_777/);
  assert.doesNotMatch(source, /expected[A-Z].*Digest/);

  const catalog = await readFile(new URL('../../src/data/guides/legacy-guide-catalog.ts', import.meta.url), 'utf8');
  assert.match(catalog, /provenanceId/);
});

test('committed proof verifies current CK tree in auto and proof-only modes', async () => {
  for (const mode of ['auto', 'proof']) {
    const { stdout } = await run('scripts/verify-legacy-archive-provenance.mjs', [
      '--repo', rootPath,
      '--mode', mode,
      '--json',
    ]);
    const result = JSON.parse(stdout);
    assert.equal(result.ok, true);
    assert.equal(result.current.fileCount, 208);
    assert.equal(result.current.lineCount, 72777);
    assert.equal(result.proof.isolationCommit, isolationCommit);
    assert.equal(result.networkFetchAttempted, false);
  }
});

test('full-history lane verifies the reviewed Git object and ancestry', async () => {
  const { stdout } = await run('scripts/verify-legacy-archive-provenance.mjs', [
    '--repo', rootPath,
    '--mode', 'full-history',
    '--json',
  ]);
  const result = JSON.parse(stdout);
  assert.equal(result.ok, true);
  assert.equal(result.lane, 'full-history');
  assert.equal(result.gitObjectVerified, true);
  assert.equal(result.ancestryVerified, true);
});

test('proof-only source export works without .git and refuses symlinks', async (t) => {
  const temp = await mkdtemp(join(tmpdir(), 'vk-legacy-proof-'));
  t.after(async () => import('node:fs/promises').then(({ rm }) => rm(temp, { recursive: true, force: true })));
  await cp(new URL('../../src/legacy-ck', import.meta.url), join(temp, 'src/legacy-ck'), { recursive: true });
  await cp(new URL('../fixtures/legacy-archive', import.meta.url), join(temp, 'tests/fixtures/legacy-archive'), { recursive: true });

  const { stdout } = await run(new URL('../../scripts/verify-legacy-archive-provenance.mjs', import.meta.url).pathname, [
    '--repo', temp,
    '--mode', 'auto',
    '--json',
  ], temp);
  assert.equal(JSON.parse(stdout).lane, 'proof-only');

  const target = join(temp, 'src/legacy-ck/data/guides/commands-types.ts');
  const original = await readFile(target);
  await import('node:fs/promises').then(({ rm }) => rm(target));
  await symlink('/tmp', target);
  const error = await runFailure(new URL('../../scripts/verify-legacy-archive-provenance.mjs', import.meta.url).pathname, [
    '--repo', temp,
    '--mode', 'proof',
  ], temp);
  assert.match(`${error.stderr}${error.stdout}`, /symlink|unsupported entry/i);
  assert.equal((await lstat(target)).isSymbolicLink(), true);
  assert.ok(original.length > 0);
});

test('expected digest sidecar is excluded from measured closure and cannot self-attest', async () => {
  const { stdout } = await run('scripts/check-legacy-archive-boundary.mjs', [
    '--repo', rootPath,
    '--check',
    '--json',
  ]);
  const result = JSON.parse(stdout);
  assert.equal(result.ok, true);
  assert.equal(result.closurePaths.includes('tests/fixtures/legacy-archive/expected-archive-digests.json'), false);
  assert.equal(result.measuredExpectedDigestFieldCount, 0);
  assert.equal(result.liveToArchiveViolations.length, 0);
  assert.equal(result.archiveToLiveFactViolations.length, 0);
});

test('source boundary fails closed on AgentKit facts, mutable i18n, escapes and dynamic imports', () => {
  const path = 'src/components/guides/legacy/example/deep.astro';
  const source = [
    "import facts from '@/data/guides/agentkit/agentkit-cli-facts';",
    "import { useTranslations } from '@/i18n/utils';",
    "import escaped from '../../../../data/guides/live-facts';",
    'const module = import(runtimePath);',
  ].join('\n');
  assert.deepEqual(forbiddenArchiveImports(path, source), [
    '@/data/guides/agentkit/agentkit-cli-facts',
    '@/i18n/utils',
    '../../../../data/guides/live-facts',
    '<indeterminate-dynamic-import>',
  ]);
});

test('archive boundary rejects every unreviewed alias even when it is not an AgentKit path', () => {
  const path = 'src/components/guides/legacy/example/deep.astro';
  assert.deepEqual(forbiddenArchiveImports(path, [
    "import arbitrary from '@/data/guides/unreviewed-live-facts';",
    "import allowed from '@/data/guides/legacy-guide-catalog';",
  ].join('\n')), [
    '@/data/guides/unreviewed-live-facts',
  ]);
});

test('legacy banner is fixed, immutable and marks normalized historical main', async () => {
  const layout = await readFile(new URL('../../src/layouts/LegacyGuidesLayout.astro', import.meta.url), 'utf8');
  assert.match(layout, /legacy-archive\.css/);
  assert.match(layout, /data-legacy-archive-banner/);
  assert.match(layout, /position:\s*fixed|fixed/);
  assert.match(layout, /data-legacy-snapshot/);
  assert.match(layout, /noindex,follow/);
  assert.match(layout, /LEGACY_ARCHIVE_PROVENANCE/);
});

test('restore requires exact isolation commit and refuses historical source or ambiguous flags before mutation', async () => {
  const before = await run('scripts/verify-legacy-archive-provenance.mjs', ['--repo', rootPath, '--mode', 'proof', '--json']);
  for (const args of [
    ['--archive-commit', sourceCommit, '--check'],
    ['--source-commit', isolationCommit, '--check'],
    ['--archive-commit', 'deadbeef', '--check'],
    ['--resume', '--rollback'],
    ['--archive-commit', isolationCommit, '--check', '--rollback'],
  ]) {
    const error = await runFailure('scripts/isolate-legacy-ck-from-git.mjs', args);
    assert.match(`${error.stderr}${error.stdout}`, /refus|isolation|archive-commit|unsupported|exclusive|cannot/i);
  }
  const after = await run('scripts/verify-legacy-archive-provenance.mjs', ['--repo', rootPath, '--mode', 'proof', '--json']);
  assert.deepEqual(JSON.parse(after.stdout).current, JSON.parse(before.stdout).current);
});

test('restore missing object and injected pre-swap failure leave destination untouched', async () => {
  const before = await run('scripts/verify-legacy-archive-provenance.mjs', ['--repo', rootPath, '--mode', 'proof', '--json']);
  const error = await runFailure('scripts/isolate-legacy-ck-from-git.mjs', [
    '--archive-commit', isolationCommit,
    '--check',
    '--inject-failure', 'before-swap',
  ]);
  assert.match(`${error.stderr}${error.stdout}`, /injected failure/i);
  const after = await run('scripts/verify-legacy-archive-provenance.mjs', ['--repo', rootPath, '--mode', 'proof', '--json']);
  assert.deepEqual(JSON.parse(after.stdout).current, JSON.parse(before.stdout).current);
});

test('restore swap, injected rollback, explicit resume and rollback are idempotent in a disposable clone', async (t) => {
  const tempParent = await mkdtemp(join(tmpdir(), 'vk-legacy-restore-'));
  const clone = join(tempParent, 'repo');
  t.after(async () => import('node:fs/promises').then(({ rm }) => rm(tempParent, { recursive: true, force: true })));
  await execFileAsync('git', ['clone', '--shared', '--quiet', rootPath, clone]);
  await cp(new URL('../fixtures/legacy-archive', import.meta.url), join(clone, 'tests/fixtures/legacy-archive'), { recursive: true });
  const restoreScript = new URL('../../scripts/isolate-legacy-ck-from-git.mjs', import.meta.url).pathname;
  const verifyScript = new URL('../../scripts/verify-legacy-archive-provenance.mjs', import.meta.url).pathname;

  const bootstrapPowerLoss = await runFailure(restoreScript, [
    '--repo', clone,
    '--archive-commit', isolationCommit,
    '--inject-failure', 'after-bootstrap-journal',
  ], clone);
  assert.match(`${bootstrapPowerLoss.stderr}${bootstrapPowerLoss.stdout}`, /power loss after-bootstrap-journal/i);
  const bootstrapJournal = JSON.parse(await readFile(join(clone, '.legacy-archive-restore.json'), 'utf8'));
  assert.equal((await lstat(bootstrapJournal.staging)).isDirectory(), true);
  await assert.rejects(lstat(join(clone, '.legacy-archive-restore.lock')), /ENOENT/);
  assert.equal(JSON.parse((await run(restoreScript, ['--repo', clone, '--resume'], clone)).stdout).action, 'resume');
  await run(verifyScript, ['--repo', clone, '--mode', 'proof', '--json'], clone);

  const injected = await runFailure(restoreScript, [
    '--repo', clone,
    '--archive-commit', isolationCommit,
    '--inject-failure', 'after-backup',
  ], clone);
  assert.match(`${injected.stderr}${injected.stdout}`, /injected failure after-backup/i);
  await run(verifyScript, ['--repo', clone, '--mode', 'proof', '--json'], clone);

  const restored = await run(restoreScript, ['--repo', clone, '--archive-commit', isolationCommit], clone);
  assert.equal(JSON.parse(restored.stdout).action, 'restore');
  await run(verifyScript, ['--repo', clone, '--mode', 'proof', '--json'], clone);

  for (const [failurePoint, recoveryAction] of [
    ['after-backup-rename', '--resume'],
    ['after-swap-rename', '--rollback'],
  ]) {
    const powerLoss = await runFailure(restoreScript, [
      '--repo', clone,
      '--archive-commit', isolationCommit,
      '--inject-failure', failurePoint,
    ], clone);
    assert.match(`${powerLoss.stderr}${powerLoss.stdout}`, new RegExp(`power loss ${failurePoint}`));
    let recovered;
    if (failurePoint === 'after-swap-rename') {
      const rollbackPowerLoss = await runFailure(restoreScript, [
        '--repo', clone,
        '--rollback',
        '--inject-failure', 'after-destination-trash-rename',
      ], clone);
      assert.match(`${rollbackPowerLoss.stderr}${rollbackPowerLoss.stdout}`, /power loss after-destination-trash-rename/i);
      recovered = await run(restoreScript, ['--repo', clone, '--resume'], clone);
      assert.equal(JSON.parse(recovered.stdout).action, 'rollback');
    } else {
      recovered = await run(restoreScript, ['--repo', clone, recoveryAction], clone);
      assert.equal(JSON.parse(recovered.stdout).action, recoveryAction.slice(2));
    }
    await run(verifyScript, ['--repo', clone, '--mode', 'proof', '--json'], clone);
  }

  const destination = join(clone, 'src/legacy-ck');
  const operationId = '11111111-1111-4111-8111-111111111111';
  const backup = join(clone, `.legacy-ck.backup-${operationId}`);
  const staging = join(clone, `.legacy-ck.restore-${operationId}`);
  await cp(destination, staging, { recursive: true });
  await rename(destination, backup);
  await writeFile(join(clone, '.legacy-archive-restore.lock'), JSON.stringify({ schemaVersion: 1, operationId }));
  await writeFile(join(clone, '.legacy-archive-restore.json'), JSON.stringify({
    schemaVersion: 1,
    operationId,
    state: 'backed-up',
    destination,
    staging,
    backup,
    commit: isolationCommit,
  }));
  const resumed = await run(restoreScript, ['--repo', clone, '--resume'], clone);
  assert.equal(JSON.parse(resumed.stdout).action, 'resume');
  await run(verifyScript, ['--repo', clone, '--mode', 'proof', '--json'], clone);

  await cp(destination, staging, { recursive: true });
  await rename(destination, backup);
  await writeFile(join(clone, '.legacy-archive-restore.lock'), JSON.stringify({ schemaVersion: 1, operationId }));
  await writeFile(join(clone, '.legacy-archive-restore.json'), JSON.stringify({
    schemaVersion: 1,
    operationId,
    state: 'backed-up',
    destination,
    staging,
    backup,
    commit: isolationCommit,
  }));
  const rolledBack = await run(restoreScript, ['--repo', clone, '--rollback'], clone);
  assert.equal(JSON.parse(rolledBack.stdout).action, 'rollback');
  await run(verifyScript, ['--repo', clone, '--mode', 'proof', '--json'], clone);
});

test('recovery journal updates are atomic and directory renames are durably ordered', async () => {
  const source = await readFile(new URL('../../scripts/isolate-legacy-ck-from-git.mjs', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /O_TRUNC/);
  assert.match(source, /handle\.sync\(\)/);
  assert.match(source, /link\(temporaryPath, path\)/);
  assert.match(source, /rename\(temporaryPath, path\)/);
  assert.match(source, /async function syncDirectory/);
  assert.match(source, /async function renameDurably/);
  assert.match(source, /journal\.state = 'backing-up'[\s\S]+writeRegularJson[\s\S]+renameDurably\(journal\.destination/);
  assert.match(source, /journal\.state = 'swapping'[\s\S]+writeRegularJson[\s\S]+renameDurably\(journal\.staging/);
});

test('rollback refuses a tampered managed backup before deleting or renaming trees', async (t) => {
  const tempParent = await mkdtemp(join(tmpdir(), 'vk-legacy-tampered-backup-'));
  const clone = join(tempParent, 'repo');
  t.after(async () => import('node:fs/promises').then(({ rm }) => rm(tempParent, { recursive: true, force: true })));
  await execFileAsync('git', ['clone', '--shared', '--quiet', rootPath, clone]);

  const destination = join(clone, 'src/legacy-ck');
  const operationId = '33333333-3333-4333-8333-333333333333';
  const backup = join(clone, `.legacy-ck.backup-${operationId}`);
  const staging = join(clone, `.legacy-ck.restore-${operationId}`);
  await cp(destination, staging, { recursive: true });
  await rename(destination, backup);
  await writeFile(join(backup, 'data/guides/commands-types.ts'), '\n// tampered recovery tree\n', { flag: 'a' });
  await writeFile(join(clone, '.legacy-archive-restore.lock'), JSON.stringify({ schemaVersion: 1, operationId }));
  await writeFile(join(clone, '.legacy-archive-restore.json'), JSON.stringify({
    schemaVersion: 1,
    operationId,
    state: 'backed-up',
    destination,
    staging,
    backup,
    commit: isolationCommit,
  }));

  const error = await runFailure(new URL('../../scripts/isolate-legacy-ck-from-git.mjs', import.meta.url).pathname, [
    '--repo', clone,
    '--rollback',
  ], clone);
  assert.match(`${error.stderr}${error.stdout}`, /differs from reviewed archive|changed path/i);
  await assert.rejects(lstat(destination), /ENOENT/);
  assert.equal((await lstat(backup)).isDirectory(), true);
  assert.equal((await lstat(staging)).isDirectory(), true);
});

test('resume completes partial trash cleanup and a cleaned journal without its marker lock', async (t) => {
  const tempParent = await mkdtemp(join(tmpdir(), 'vk-legacy-cleanup-resume-'));
  const clone = join(tempParent, 'repo');
  t.after(async () => import('node:fs/promises').then(({ rm }) => rm(tempParent, { recursive: true, force: true })));
  await execFileAsync('git', ['clone', '--shared', '--quiet', rootPath, clone]);
  await cp(new URL('../fixtures/legacy-archive', import.meta.url), join(clone, 'tests/fixtures/legacy-archive'), { recursive: true });
  const restoreScript = new URL('../../scripts/isolate-legacy-ck-from-git.mjs', import.meta.url).pathname;
  const verifyScript = new URL('../../scripts/verify-legacy-archive-provenance.mjs', import.meta.url).pathname;
  const destination = join(clone, 'src/legacy-ck');
  const operationId = '44444444-4444-4444-8444-444444444444';
  const staging = join(clone, `.legacy-ck.restore-${operationId}`);
  const backup = join(clone, `.legacy-ck.backup-${operationId}`);
  const backupTrash = join(clone, `.legacy-ck.trash-backup-${operationId}`);
  const journalPath = join(clone, '.legacy-archive-restore.json');
  const lockPath = join(clone, '.legacy-archive-restore.lock');
  const journal = {
    schemaVersion: 1,
    operationId,
    state: 'cleaning',
    destination,
    staging,
    backup,
    commit: isolationCommit,
  };

  await mkdir(join(backupTrash, 'partial'), { recursive: true });
  await writeFile(join(backupTrash, 'partial', 'torn-delete.txt'), 'partial');
  await writeFile(lockPath, JSON.stringify({ schemaVersion: 1, operationId }));
  await writeFile(journalPath, JSON.stringify(journal));
  assert.equal(JSON.parse((await run(restoreScript, ['--repo', clone, '--resume'], clone)).stdout).action, 'resume');
  await assert.rejects(lstat(backupTrash), /ENOENT/);
  await run(verifyScript, ['--repo', clone, '--mode', 'proof', '--json'], clone);

  await writeFile(journalPath, JSON.stringify({ ...journal, state: 'cleaned' }));
  assert.equal(JSON.parse((await run(restoreScript, ['--repo', clone, '--resume'], clone)).stdout).action, 'resume');
  await assert.rejects(lstat(journalPath), /ENOENT/);
  await assert.rejects(lstat(lockPath), /ENOENT/);
});

test('execution lock serializes recovery and safely reclaims a dead owner', async (t) => {
  const tempParent = await mkdtemp(join(tmpdir(), 'vk-legacy-execution-lock-'));
  const clone = join(tempParent, 'repo');
  t.after(async () => import('node:fs/promises').then(({ rm }) => rm(tempParent, { recursive: true, force: true })));
  await execFileAsync('git', ['clone', '--shared', '--quiet', rootPath, clone]);
  const restoreScript = new URL('../../scripts/isolate-legacy-ck-from-git.mjs', import.meta.url).pathname;
  const executionLock = join(clone, '.legacy-archive-restore.execution.lock');

  const holder = runFailure(restoreScript, [
    '--repo', clone,
    '--archive-commit', isolationCommit,
    '--check',
    '--inject-failure', 'while-locked',
  ], clone);
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      await lstat(executionLock);
      break;
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      await delay(25);
    }
  }
  assert.equal((await lstat(executionLock)).isFile(), true);
  const contender = await runFailure(restoreScript, [
    '--repo', clone,
    '--archive-commit', isolationCommit,
    '--check',
  ], clone);
  assert.match(`${contender.stderr}${contender.stdout}`, /another legacy archive recovery process holds the execution lock/i);
  assert.match(`${(await holder).stderr}`, /injected failure while-locked/i);

  await writeFile(executionLock, JSON.stringify({
    schemaVersion: 1,
    operationId: '55555555-5555-4555-8555-555555555555',
    pid: 2_147_483_647,
  }), { flag: 'wx' });
  const reclaimed = await run(restoreScript, [
    '--repo', clone,
    '--archive-commit', isolationCommit,
    '--check',
  ], clone);
  assert.equal(JSON.parse(reclaimed.stdout).action, 'check');
  await assert.rejects(lstat(executionLock), /ENOENT/);
});

test('recovery refuses a poisoned journal before deleting or renaming any path', async (t) => {
  const tempParent = await mkdtemp(join(tmpdir(), 'vk-legacy-poison-'));
  const clone = join(tempParent, 'repo');
  const sentinel = join(tempParent, 'must-survive');
  t.after(async () => import('node:fs/promises').then(({ rm }) => rm(tempParent, { recursive: true, force: true })));
  await execFileAsync('git', ['clone', '--shared', '--quiet', rootPath, clone]);
  await writeFile(sentinel, 'sentinel');
  const operationId = '22222222-2222-4222-8222-222222222222';
  await writeFile(join(clone, '.legacy-archive-restore.lock'), JSON.stringify({ schemaVersion: 1, operationId }));
  await writeFile(join(clone, '.legacy-archive-restore.json'), JSON.stringify({
    schemaVersion: 1,
    operationId,
    state: 'backed-up',
    destination: sentinel,
    staging: join(clone, `.legacy-ck.restore-${operationId}`),
    backup: join(clone, `.legacy-ck.backup-${operationId}`),
    commit: isolationCommit,
  }));
  const error = await runFailure(new URL('../../scripts/isolate-legacy-ck-from-git.mjs', import.meta.url).pathname, [
    '--repo', clone,
    '--rollback',
  ], clone);
  assert.match(`${error.stderr}${error.stdout}`, /journal|destination|refus|invalid/i);
  assert.equal(await readFile(sentinel, 'utf8'), 'sentinel');
});

test('archive scripts are not executable package hooks', async () => {
  const packageJson = JSON.parse(await readFile(new URL('../../package.json', import.meta.url), 'utf8'));
  const hooks = Object.entries(packageJson.scripts)
    .filter(([name]) => /^(pre|post)/.test(name))
    .map(([, command]) => command)
    .join('\n');
  assert.doesNotMatch(hooks, /isolate-legacy-ck-from-git/);
  assert.doesNotMatch(hooks, /src\/legacy-ck/);
});

test('batch B/C routers import isolated @legacy-ck trees, not live AK guides', async () => {
  for (const file of [
    'src/components/guides/legacy/LegacyBatchBGuideBody.astro',
    'src/components/guides/legacy/LegacyBatchCGuideBody.astro',
  ]) {
    const source = await readFile(new URL(`../../${file}`, import.meta.url), 'utf8');
    assert.match(source, /@legacy-ck\/components\/guides\//);
    assert.equal(source.includes("from '@/components/guides/"), false);
    assert.equal(source.includes('from "@/components/guides/'), false);
  }
});

test('legacy-ck commands catalog stays CK-prefixed', async () => {
  const kit = await readFile(new URL('../../src/legacy-ck/data/guides/commands-engineer-kit.ts', import.meta.url), 'utf8');
  assert.match(kit, /\/ck:/);
  assert.doesNotMatch(kit, /\/ak:/);
});

test('legacy mechanics uses isolated CK i18n utils', async () => {
  const guide = await readFile(new URL('../../src/components/guides/legacy/LegacyClaudeMechanicsGuide.astro', import.meta.url), 'utf8');
  assert.match(guide, /@legacy-ck\/i18n\/utils/);
  const subtitle = await readFile(new URL('../../src/legacy-ck/i18n/en/guides.ts', import.meta.url), 'utf8');
  assert.match(subtitle, /ClaudeKit configures your project/);
  assert.doesNotMatch(subtitle, /AgentKit onboards a project/);
});

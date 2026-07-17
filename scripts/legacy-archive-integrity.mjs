import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { lstat, opendir, readFile } from 'node:fs/promises';
import { join, relative, resolve, sep } from 'node:path';

export const SOURCE_COMMIT = '56524c98dbdd4d27632ffbcb9da96c77f936ab67';
export const ISOLATION_COMMIT = '7d5ab60e9e706ba612a6202f3024685cfa32bea6';
export const ARCHIVE_TREE = 'src/legacy-ck';
export const PROOF_PATH = 'tests/fixtures/legacy-archive/ck-source-snapshot-proof.json';
export const DIGEST_SIDECAR_PATH = 'tests/fixtures/legacy-archive/expected-archive-digests.json';

export function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

function canonicalMode(stat) {
  return stat.mode & 0o111 ? '100755' : '100644';
}

function countLines(bytes) {
  let lines = 0;
  for (const byte of bytes) if (byte === 10) lines += 1;
  return lines;
}

export function treeRoot(entries) {
  const hash = createHash('sha256');
  for (const entry of [...entries].sort((a, b) => a.path.localeCompare(b.path))) {
    const leaf = Buffer.from(`${entry.path}\0${entry.type}\0${entry.mode}\0${entry.sha256}`, 'utf8');
    const size = Buffer.allocUnsafe(4);
    size.writeUInt32BE(leaf.length);
    hash.update(size).update(leaf);
  }
  return hash.digest('hex');
}

function assertContained(root, path) {
  const resolvedRoot = resolve(root);
  const resolvedPath = resolve(path);
  if (resolvedPath !== resolvedRoot && !resolvedPath.startsWith(`${resolvedRoot}${sep}`)) {
    throw new Error(`canonical escape outside archive: ${path}`);
  }
}

export async function collectFilesystemTree(repo, tree = ARCHIVE_TREE) {
  const treeRootPath = resolve(repo, tree);
  const entries = [];
  let lineCount = 0;

  async function visit(directory) {
    assertContained(treeRootPath, directory);
    const directoryStat = await lstat(directory);
    if (!directoryStat.isDirectory() || directoryStat.isSymbolicLink()) {
      throw new Error(`unsupported entry at archive root: ${directory}`);
    }
    const children = [];
    for await (const child of await opendir(directory)) children.push(child.name);
    children.sort();
    for (const name of children) {
      const absolute = join(directory, name);
      assertContained(treeRootPath, absolute);
      const stat = await lstat(absolute);
      if (stat.isSymbolicLink()) throw new Error(`symlink is forbidden in archive: ${relative(repo, absolute)}`);
      if (stat.isDirectory()) {
        await visit(absolute);
      } else if (stat.isFile()) {
        const bytes = await readFile(absolute);
        lineCount += countLines(bytes);
        entries.push({
          path: relative(treeRootPath, absolute).split(sep).join('/'),
          type: 'file',
          mode: canonicalMode(stat),
          sha256: sha256(bytes),
        });
      } else {
        throw new Error(`unsupported entry type in archive: ${relative(repo, absolute)}`);
      }
    }
  }

  await visit(treeRootPath);
  return { entries, fileCount: entries.length, lineCount, rootSha256: treeRoot(entries) };
}

function git(repo, args, options = {}) {
  return execFileSync('git', args, {
    cwd: repo,
    encoding: options.encoding ?? 'utf8',
    maxBuffer: 64 * 1024 * 1024,
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

export function gitObjectExists(repo, commit = ISOLATION_COMMIT) {
  try {
    git(repo, ['cat-file', '-e', `${commit}^{commit}`]);
    return true;
  } catch {
    return false;
  }
}

export function collectGitTree(repo, commit = ISOLATION_COMMIT, tree = ARCHIVE_TREE) {
  const raw = git(repo, ['ls-tree', '-rz', '--full-tree', commit, tree], { encoding: 'buffer' });
  const entries = [];
  let lineCount = 0;
  for (const record of raw.toString('utf8').split('\0').filter(Boolean)) {
    const match = record.match(/^(\d+)\s+(\w+)\s+([0-9a-f]+)\t(.+)$/);
    if (!match) throw new Error(`unparseable git tree record: ${record}`);
    const [, mode, type, oid, fullPath] = match;
    if (type !== 'blob') throw new Error(`unsupported Git entry ${type}: ${fullPath}`);
    const bytes = git(repo, ['cat-file', 'blob', oid], { encoding: 'buffer' });
    lineCount += countLines(bytes);
    entries.push({
      path: fullPath.slice(`${tree}/`.length),
      type: 'file',
      mode,
      sha256: sha256(bytes),
    });
  }
  return { entries, fileCount: entries.length, lineCount, rootSha256: treeRoot(entries) };
}

export function gitCommitDate(repo, commit) {
  return git(repo, ['show', '-s', '--format=%cs', commit]).trim();
}

export function isAncestor(repo, ancestor, descendant) {
  try {
    git(repo, ['merge-base', '--is-ancestor', ancestor, descendant]);
    return true;
  } catch {
    return false;
  }
}

export async function readJson(repo, path) {
  return JSON.parse(await readFile(resolve(repo, path), 'utf8'));
}

export function firstTreeDifference(actual, expected) {
  const actualMap = new Map(actual.map((entry) => [entry.path, entry]));
  const expectedMap = new Map(expected.map((entry) => [entry.path, entry]));
  for (const path of [...new Set([...actualMap.keys(), ...expectedMap.keys()])].sort()) {
    if (JSON.stringify(actualMap.get(path)) !== JSON.stringify(expectedMap.get(path))) return path;
  }
  return null;
}

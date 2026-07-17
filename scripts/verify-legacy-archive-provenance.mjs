#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  ARCHIVE_TREE,
  ISOLATION_COMMIT,
  PROOF_PATH,
  SOURCE_COMMIT,
  collectFilesystemTree,
  collectGitTree,
  firstTreeDifference,
  gitCommitDate,
  gitObjectExists,
  isAncestor,
  readJson,
} from './legacy-archive-integrity.mjs';

function parseArgs(argv) {
  const options = { repo: fileURLToPath(new URL('..', import.meta.url)), mode: 'auto', json: false, refresh: false };
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--repo') options.repo = resolve(argv[++index]);
    else if (argument === '--mode') options.mode = argv[++index];
    else if (argument === '--json') options.json = true;
    else if (argument === '--refresh-proof') options.refresh = true;
    else throw new Error(`unsupported option: ${argument}`);
  }
  if (!['auto', 'proof', 'full-history'].includes(options.mode)) throw new Error(`unsupported mode: ${options.mode}`);
  if (options.refresh && options.mode !== 'full-history') throw new Error('--refresh-proof requires --mode full-history');
  return options;
}

function proofDocument(tree) {
  return {
    schemaVersion: 1,
    algorithm: 'sha256-length-prefixed-path-null-type-null-mode-null-sha256',
    isolationCommit: ISOLATION_COMMIT,
    archiveTree: ARCHIVE_TREE,
    sourceCommit: SOURCE_COMMIT,
    sourceDate: '2026-07-08',
    isolationDate: '2026-07-13',
    fileCount: tree.fileCount,
    lineCount: tree.lineCount,
    rootSha256: tree.rootSha256,
    entries: tree.entries,
  };
}

function assertTreeMatches(actual, expected, label) {
  const mismatch = firstTreeDifference(actual.entries, expected.entries);
  if (
    mismatch
    || actual.fileCount !== expected.fileCount
    || actual.lineCount !== expected.lineCount
    || actual.rootSha256 !== expected.rootSha256
  ) {
    throw new Error(`${label} does not match immutable proof${mismatch ? `; first changed path: ${mismatch}` : ''}`);
  }
}

export async function verifyLegacyArchive(options) {
  const hasIsolationObject = gitObjectExists(options.repo, ISOLATION_COMMIT);
  const lane = options.mode === 'auto' ? (hasIsolationObject ? 'full-history' : 'proof-only') : options.mode === 'proof' ? 'proof-only' : 'full-history';
  if (lane === 'full-history' && !hasIsolationObject) throw new Error(`missing reviewed Git object ${ISOLATION_COMMIT}; use proof-only mode for source exports`);

  let proof;
  let gitTree;
  if (options.refresh) {
    gitTree = collectGitTree(options.repo);
    proof = proofDocument(gitTree);
    const proofFile = resolve(options.repo, PROOF_PATH);
    await mkdir(dirname(proofFile), { recursive: true });
    await writeFile(proofFile, `${JSON.stringify(proof, null, 2)}\n`, { flag: 'w' });
  } else {
    proof = await readJson(options.repo, PROOF_PATH);
  }

  if (proof.isolationCommit !== ISOLATION_COMMIT || proof.sourceCommit !== SOURCE_COMMIT || proof.archiveTree !== ARCHIVE_TREE) {
    throw new Error('snapshot proof identity does not match reviewed provenance');
  }
  const current = await collectFilesystemTree(options.repo);
  assertTreeMatches(current, proof, 'current archive tree');

  let ancestryVerified = false;
  let gitObjectVerified = false;
  if (lane === 'full-history') {
    if (!gitObjectExists(options.repo, SOURCE_COMMIT)) throw new Error(`missing historical source Git object ${SOURCE_COMMIT}`);
    if (gitCommitDate(options.repo, SOURCE_COMMIT) !== proof.sourceDate) throw new Error('source commit date mismatch');
    if (gitCommitDate(options.repo, ISOLATION_COMMIT) !== proof.isolationDate) throw new Error('isolation commit date mismatch');
    ancestryVerified = isAncestor(options.repo, SOURCE_COMMIT, ISOLATION_COMMIT);
    if (!ancestryVerified) throw new Error('source commit is not an ancestor of isolation commit');
    gitTree ??= collectGitTree(options.repo);
    assertTreeMatches(gitTree, proof, 'reviewed Git tree');
    gitObjectVerified = true;
  }

  return {
    ok: true,
    lane,
    current: { fileCount: current.fileCount, lineCount: current.lineCount, rootSha256: current.rootSha256 },
    proof: { isolationCommit: proof.isolationCommit, rootSha256: proof.rootSha256 },
    gitObjectVerified,
    ancestryVerified,
    networkFetchAttempted: false,
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    const options = parseArgs(process.argv.slice(2));
    const result = await verifyLegacyArchive(options);
    console.log(options.json ? JSON.stringify(result) : `Legacy archive provenance OK (${result.lane}, ${result.current.fileCount} files)`);
  } catch (error) {
    console.error(`Legacy archive provenance failed: ${error.message}`);
    process.exitCode = 1;
  }
}

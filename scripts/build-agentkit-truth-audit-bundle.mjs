import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { AGENTKIT_TRUTH_AUDITED_SOURCE_PATHS } from './agentkit-truth-audit-source-manifest.mjs';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
const DEFAULT_OUTPUT = resolve(ROOT, 'scripts/dist/agentkit-truth-audit.bundle.mjs');
const STABLE_FIXTURE = resolve(ROOT, 'tests/fixtures/agentkit-release/stable-v2.3.0.json');
const BETA_FIXTURE = resolve(ROOT, 'tests/fixtures/agentkit-release/beta-v2.3.1-beta.1.json');
const OWNER_DECISIONS = resolve(ROOT, 'docs/agentkit-lifecycle-owner-decisions.json');
const SANITIZER_SOURCE = resolve(ROOT, 'src/data/guides/agentkit/agentkit-report-sanitizer.mjs');

function canonicalize(value) {
  if (Array.isArray(value)) return value.map(canonicalize);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, canonicalize(value[key])]));
  }
  return value;
}

function canonicalJson(value) {
  return JSON.stringify(canonicalize(value));
}

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

function inlineSanitizer(source) {
  return source
    .replace(/^export const /gm, 'const ')
    .replace(/^export function /gm, 'function ')
    .trim();
}

export async function buildAgentKitTruthAuditBundleSource() {
  const [stable, beta, ownerDecisions, sanitizerSource] = await Promise.all([
    readFile(STABLE_FIXTURE, 'utf8').then(JSON.parse),
    readFile(BETA_FIXTURE, 'utf8').then(JSON.parse),
    readFile(OWNER_DECISIONS, 'utf8').then(JSON.parse),
    readFile(SANITIZER_SOURCE, 'utf8'),
  ]);
  const fixtures = { stable, beta };
  const sourceEntries = await Promise.all(AGENTKIT_TRUTH_AUDITED_SOURCE_PATHS.map(async (relativePath) => (
    [relativePath, await readFile(resolve(ROOT, relativePath), 'utf8')]
  )));
  const sourceContents = Object.fromEntries(sourceEntries);
  const sourceDigests = Object.fromEntries(sourceEntries.map(([relativePath, source]) => (
    [relativePath, sha256(source)]
  )));
  const embeddedFixtureRoot = sha256(canonicalJson(fixtures));
  const embeddedBuildInputRoot = sha256(canonicalJson({
    fixtures,
    ownerDecisions,
    sourceContents,
  }));

  return `#!/usr/bin/env node
const EMBEDDED_RELEASE_FIXTURES = ${canonicalJson(fixtures)};
const EMBEDDED_OWNER_DECISIONS = ${canonicalJson(ownerDecisions)};
const EMBEDDED_SOURCE_DIGESTS = ${canonicalJson(sourceDigests)};
const EMBEDDED_FIXTURE_ROOT = '${embeddedFixtureRoot}';
const EMBEDDED_BUILD_INPUT_ROOT = '${embeddedBuildInputRoot}';

${inlineSanitizer(sanitizerSource)}

const fs = process.getBuiltinModule('node:fs');
const path = process.getBuiltinModule('node:path');
const crypto = process.getBuiltinModule('node:crypto');
const TOOL = { name: 'agentkit-truth-audit', version: '1.0.0' };
const MAX_AUDITED_SOURCE_BYTES = 2 * 1024 * 1024;
const CANDIDATE_PATHS = {
  stable: 'tests/fixtures/agentkit-release/stable-v2.3.0.json',
  beta: 'tests/fixtures/agentkit-release/beta-v2.3.1-beta.1.json',
};

function canonicalize(value) {
  if (Array.isArray(value)) return value.map(canonicalize);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, canonicalize(value[key])]));
  }
  return value;
}

function canonicalJson(value) {
  return JSON.stringify(canonicalize(value));
}

function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function parseArgs(argv) {
  const parsed = { repo: null, channel: 'stable', format: 'human', check: false };
  const seen = new Set();
  for (let index = 0; index < argv.length; index += 1) {
    const option = argv[index];
    if (option === '--check') {
      if (seen.has(option)) throw new Error('duplicate-check');
      seen.add(option);
      parsed.check = true;
      continue;
    }
    if (!['--repo', '--channel', '--format'].includes(option) || seen.has(option)) {
      throw new Error('invalid-option');
    }
    seen.add(option);
    const value = argv[index + 1];
    if (!value || value.startsWith('--')) throw new Error('missing-option-value');
    index += 1;
    if (option === '--repo') parsed.repo = value;
    if (option === '--channel') parsed.channel = value;
    if (option === '--format') parsed.format = value;
  }
  if (!parsed.repo || !path.isAbsolute(parsed.repo)) throw new Error('absolute-repo-required');
  if (!['stable', 'beta'].includes(parsed.channel)) throw new Error('invalid-channel');
  if (!['human', 'json'].includes(parsed.format)) throw new Error('invalid-format');
  return parsed;
}

function requestedFormat(argv) {
  const index = argv.indexOf('--format');
  return index >= 0 && argv[index + 1] === 'json' ? 'json' : 'human';
}

function readRegularFileNoFollow(repo, relativePath, maxBytes = 1024 * 1024) {
  const rootStat = fs.lstatSync(repo);
  if (rootStat.isSymbolicLink() || !rootStat.isDirectory()) throw new Error('repo-not-regular-directory');
  const segments = relativePath.split('/');
  let current = repo;
  for (let index = 0; index < segments.length; index += 1) {
    current = path.join(current, segments[index]);
    const candidate = fs.lstatSync(current);
    if (candidate.isSymbolicLink()) throw new Error('symlink-refused');
    if (index < segments.length - 1 && !candidate.isDirectory()) throw new Error('ancestor-not-directory');
    if (index === segments.length - 1 && !candidate.isFile()) throw new Error('candidate-not-file');
  }
  const before = fs.lstatSync(current);
  if (before.size > maxBytes) throw new Error('candidate-too-large');
  const noFollow = fs.constants.O_NOFOLLOW ?? 0;
  const descriptor = fs.openSync(current, fs.constants.O_RDONLY | noFollow);
  try {
    const opened = fs.fstatSync(descriptor);
    if (!opened.isFile() || opened.dev !== before.dev || opened.ino !== before.ino) {
      throw new Error('candidate-identity-changed');
    }
    return fs.readFileSync(descriptor, 'utf8');
  } finally {
    fs.closeSync(descriptor);
  }
}

function safeJson(value) {
  try {
    return JSON.parse(value);
  } catch {
    throw new Error('invalid-json-contract');
  }
}

function render(report, options, exitCode, extras = {}) {
  const safe = sanitizeAgentKitReport({ ...report, tool: TOOL });
  if (options.format === 'json') {
    const output = {
      schemaVersion: 1,
      ok: exitCode === 0,
      ...safe,
      ...extras,
    };
    process.stdout.write(JSON.stringify(output) + '\\n');
  } else {
    const stream = exitCode === 0 ? process.stdout : process.stderr;
    stream.write((exitCode === 0 ? 'PASS' : 'REFUSE') + ' [' + safe.incidentId + '] ' + safe.actualSummary + '\\n');
  }
  process.exitCode = exitCode;
}

function refuse(options, exitCode, incidentId, category, stage, actualCode) {
  render({
    category,
    stage,
    expectedCode: 'reviewed-truth-contract',
    actualCode,
    incidentId,
  }, options, exitCode);
}

function main() {
  const argv = process.argv.slice(2);
  let options;
  try {
    options = parseArgs(argv);
  } catch {
    refuse({ format: requestedFormat(argv) }, 2, 'AK-USAGE-001', 'repository-context', 'preflight', 'usage-refused');
    return;
  }

  if (process.env.NODE_OPTIONS || process.env.NODE_PATH) {
    refuse(options, 2, 'AK-ENV-001', 'repository-context', 'preflight', 'environment-refused');
    return;
  }

  let packageJson;
  try {
    packageJson = safeJson(readRegularFileNoFollow(options.repo, 'package.json'));
  } catch {
    refuse(options, 3, 'AK-REPO-001', 'repository-context', 'preflight', 'repo-unavailable');
    return;
  }
  if (packageJson.name !== 'tender-transit') {
    refuse(options, 3, 'AK-REPO-002', 'repository-context', 'preflight', 'repo-mismatch');
    return;
  }

  let ownerDecisions;
  try {
    ownerDecisions = safeJson(readRegularFileNoFollow(options.repo, 'docs/agentkit-lifecycle-owner-decisions.json'));
  } catch {
    refuse(options, 4, 'AK-CONTRACT-001', 'owner-decisions', 'contract', 'owner-unavailable');
    return;
  }
  if (canonicalJson(ownerDecisions) !== canonicalJson(EMBEDDED_OWNER_DECISIONS)) {
    refuse(options, 4, 'AK-CONTRACT-002', 'owner-decisions', 'contract', 'owner-drift');
    return;
  }

  for (const [relativePath, expectedDigest] of Object.entries(EMBEDDED_SOURCE_DIGESTS)) {
    let candidateSource;
    try {
      candidateSource = readRegularFileNoFollow(options.repo, relativePath, MAX_AUDITED_SOURCE_BYTES);
    } catch {
      refuse(options, 4, 'AK-SOURCE-001', 'source-truth', 'contract', 'source-drift');
      return;
    }
    if (sha256(candidateSource) !== expectedDigest) {
      refuse(options, 5, 'AK-SOURCE-001', 'source-truth', 'contract', 'source-drift');
      return;
    }
  }

  let candidateFixture;
  try {
    candidateFixture = safeJson(readRegularFileNoFollow(options.repo, CANDIDATE_PATHS[options.channel]));
  } catch {
    refuse(options, 4, 'AK-FIXTURE-001', 'release-channel', 'fixtures', 'fixture-unavailable');
    return;
  }
  if (canonicalJson(candidateFixture) !== canonicalJson(EMBEDDED_RELEASE_FIXTURES[options.channel])) {
    refuse(options, 5, 'AK-FIXTURE-002', 'release-channel', 'fixtures', 'fixture-drift');
    return;
  }
  if (candidateFixture.channel !== options.channel) {
    refuse(options, 5, 'AK-FIXTURE-003', 'release-channel', 'fixtures', 'fixture-channel-mismatch');
    return;
  }
  if (sha256(canonicalJson(EMBEDDED_RELEASE_FIXTURES)) !== EMBEDDED_FIXTURE_ROOT) {
    refuse(options, 5, 'AK-BUNDLE-001', 'bundle-integrity', 'fixtures', 'bundle-root-mismatch');
    return;
  }

  render({
    category: 'source-truth',
    stage: 'complete',
    expectedCode: 'reviewed-source-and-owner',
    actualCode: 'truth-match',
    incidentId: 'AK-TRUTH-OK',
  }, options, 0, {
    channel: options.channel,
    releaseVersion: candidateFixture.version,
    embeddedFixtureRoot: EMBEDDED_FIXTURE_ROOT,
  });
}

void EMBEDDED_BUILD_INPUT_ROOT;
main();
`;
}

function parseBuilderArgs(argv) {
  if (argv.length === 0) return { check: false, output: DEFAULT_OUTPUT };
  if (argv.length === 1 && argv[0] === '--check') return { check: true, output: DEFAULT_OUTPUT };
  if (argv.length === 2 && argv[0] === '--output') {
    return { check: false, output: resolve(argv[1]) };
  }
  throw new Error('Usage: build-agentkit-truth-audit-bundle.mjs [--check | --output <path>]');
}

async function main() {
  const options = parseBuilderArgs(process.argv.slice(2));
  const expected = await buildAgentKitTruthAuditBundleSource();
  if (options.check) {
    const current = await readFile(options.output, 'utf8').catch(() => null);
    if (current !== expected) {
      process.stderr.write('AgentKit truth audit bundle is missing or stale.\n');
      process.exitCode = 1;
    }
    return;
  }
  await mkdir(dirname(options.output), { recursive: true });
  await writeFile(options.output, expected, 'utf8');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await main();
}

#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { constants } from 'node:fs';
import { lstat, open, realpath } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const RELEASE_DRIFT_SOURCE_URL = 'https://agentkit.best/changelog';

const SCRIPT_REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FIXTURES = [
  {
    channel: 'stable',
    policyDigestField: 'stableFixtureSha256',
    fixtureChannel: 'stable',
    path: 'tests/fixtures/agentkit-release/stable-v2.4.0.json',
    version: '2.4.0',
    factSha256: '83dc4f2b886707d57853a80bca17b439d754c8064e091b0aa942a68f75477370',
    fileSha256: 'd9a57b1c393bc047676ecc9ea426cc08864a7d8515575239511b5e18cedd682b',
  },
  {
    channel: 'prerelease',
    policyDigestField: 'prereleaseFixtureSha256',
    fixtureChannel: 'beta',
    path: 'tests/fixtures/agentkit-release/prerelease-v2.5.0-beta.1.json',
    version: '2.5.0-beta.1',
    factSha256: '4297c3803c1af714beeb51a193118830b28a8797d078e4797a69a9f9d32a544d',
    fileSha256: '1b2be9f0c6306d0c5a006b2bc5c38152276f1ae916012870673e76f3e041224c',
  },
];
const MAX_RESPONSE_BYTES = 1024 * 1024;
const DEFAULT_TIMEOUT_MS = 10_000;
const RETENTION_DAYS = 7;

class ReleaseDriftError extends Error {
  constructor(incidentId) {
    super(`AgentKit release drift check refused [${incidentId}]`);
    this.name = 'ReleaseDriftError';
    this.incidentId = incidentId;
  }
}

function refuse(incidentId) {
  throw new ReleaseDriftError(incidentId);
}

function compareVersions(left, right) {
  const parts = (value) => value.match(/\d+/g).map(Number);
  const leftParts = parts(left);
  const rightParts = parts(right);
  for (let index = 0; index < Math.max(leftParts.length, rightParts.length); index += 1) {
    const delta = (leftParts[index] ?? 0) - (rightParts[index] ?? 0);
    if (delta !== 0) return delta;
  }
  return 0;
}

function newest(matches) {
  return [...new Set(matches)].sort(compareVersions).at(-1) ?? null;
}

function releaseText(body) {
  return body
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<\/(?:div|h[1-6]|li|p|section)>|<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractReleaseVersions(body) {
  const candidates = [];
  const articles = [...body.matchAll(/<article\b[^>]*>([\s\S]*?)<\/article>/gi)];
  if (articles.length === 0) refuse('AK-RELEASE-PAYLOAD');

  for (const [, article] of articles) {
    const text = releaseText(article);
    if (!/\bAgentKit CLI\b/i.test(text)) continue;
    const versions = [...new Set(
      [...article.matchAll(/<h[1-3]\b[^>]*>([\s\S]*?)<\/h[1-3]>/gi)]
        .map((match) => releaseText(match[1]))
        .map((heading) => heading.match(/^v?(\d+\.\d+\.\d+(?:-beta\.\d+)?)$/i)?.[1]?.toLowerCase())
        .filter(Boolean),
    )];
    if (versions.length !== 1) refuse('AK-RELEASE-PAYLOAD');
    candidates.push(versions[0]);
  }

  const prerelease = newest(candidates.filter((version) => version.includes('-beta.')));
  const stable = newest(candidates.filter((version) => !version.includes('-beta.')));
  if (!stable || !prerelease) refuse('AK-RELEASE-PAYLOAD');
  return { stable, prerelease };
}

function releaseCore(version) {
  return version.split('-')[0];
}

function releaseState({ stable, prerelease }) {
  const prereleaseCore = releaseCore(prerelease);
  const coreComparison = compareVersions(prereleaseCore, stable);
  const promotedFromPrerelease = prereleaseCore === stable ? prerelease : null;
  const activeBetaVersion = coreComparison > 0 ? prerelease : null;
  return {
    latestStable: stable,
    latestPrerelease: prerelease,
    promotedFromPrerelease,
    activeBetaVersion,
    hasActiveBeta: activeBetaVersion !== null,
  };
}

function validReleaseState(value, observations) {
  if (!exactKeys(value, [
    'latestStable',
    'latestPrerelease',
    'promotedFromPrerelease',
    'activeBetaVersion',
    'hasActiveBeta',
  ])) return false;
  const stable = observations.find(({ channel }) => channel === 'stable')?.observedVersion;
  const prerelease = observations.find(({ channel }) => channel === 'prerelease')?.observedVersion;
  if (!stable || !prerelease) return false;
  return JSON.stringify(value) === JSON.stringify(releaseState({ stable, prerelease }));
}

async function readRegularFileNoFollow(repo, relativePath, maxBytes = 1024 * 1024) {
  let current = repo;
  const segments = relativePath.split('/');
  for (let index = 0; index < segments.length; index += 1) {
    current = path.join(current, segments[index]);
    const candidate = await lstat(current);
    if (candidate.isSymbolicLink()) refuse('AK-RELEASE-FIXTURE');
    if (index < segments.length - 1 && !candidate.isDirectory()) refuse('AK-RELEASE-FIXTURE');
    if (index === segments.length - 1 && !candidate.isFile()) refuse('AK-RELEASE-FIXTURE');
  }
  const before = await lstat(current);
  if (before.size > maxBytes) refuse('AK-RELEASE-FIXTURE');
  const descriptor = await open(current, constants.O_RDONLY | (constants.O_NOFOLLOW ?? 0));
  try {
    const opened = await descriptor.stat();
    if (!opened.isFile() || opened.dev !== before.dev || opened.ino !== before.ino) {
      refuse('AK-RELEASE-FIXTURE');
    }
    return await descriptor.readFile('utf8');
  } finally {
    await descriptor.close();
  }
}

async function expectedVersions(repo) {
  const values = {};
  for (const fixtureContract of FIXTURES) {
    let source;
    try { source = await readRegularFileNoFollow(repo, fixtureContract.path); } catch { refuse('AK-RELEASE-FIXTURE'); }
    if (createHash('sha256').update(source).digest('hex') !== fixtureContract.fileSha256) {
      refuse('AK-RELEASE-FIXTURE');
    }
    let fixture;
    try { fixture = JSON.parse(source); } catch { refuse('AK-RELEASE-FIXTURE'); }
    if (fixture.channel !== fixtureContract.fixtureChannel
      || fixture.version !== fixtureContract.version
      || fixture.normalizedFactSha256 !== fixtureContract.factSha256) {
      refuse('AK-RELEASE-FIXTURE');
    }
    values[fixtureContract.channel] = fixture.version;
  }
  return values;
}

async function readBoundedResponseBody(response, signal) {
  if (!response.body?.getReader) refuse('AK-RELEASE-PAYLOAD');
  const reader = response.body.getReader();
  const chunks = [];
  let bytes = 0;
  let abortListener;
  const aborted = new Promise((_, reject) => {
    abortListener = () => reject(new ReleaseDriftError('AK-RELEASE-TIMEOUT'));
    if (signal.aborted) abortListener();
    else signal.addEventListener('abort', abortListener, { once: true });
  });
  try {
    while (true) {
      const { done, value } = await Promise.race([reader.read(), aborted]);
      if (done) break;
      const chunk = Buffer.from(value);
      bytes += chunk.byteLength;
      if (bytes > MAX_RESPONSE_BYTES) refuse('AK-RELEASE-PAYLOAD');
      chunks.push(chunk);
    }
  } finally {
    signal.removeEventListener('abort', abortListener);
    try {
      Promise.resolve(reader.cancel()).catch(() => {});
    } catch {
      // Cancellation is best-effort; it must never extend the lifecycle deadline.
    }
  }
  return Buffer.concat(chunks).toString('utf8');
}

async function fetchObservation(fetchImpl, timeoutMs) {
  const controller = new AbortController();
  let timer;
  try {
    const timeout = new Promise((_, reject) => {
      timer = setTimeout(() => {
        controller.abort();
        reject(new ReleaseDriftError('AK-RELEASE-TIMEOUT'));
      }, timeoutMs);
    });
    const operation = (async () => {
      const response = await fetchImpl(RELEASE_DRIFT_SOURCE_URL, {
        method: 'GET',
        redirect: 'manual',
        signal: controller.signal,
        headers: { accept: 'text/html,application/json;q=0.9' },
      });
      if (response.redirected) refuse('AK-RELEASE-REDIRECT');
      if (response.url !== RELEASE_DRIFT_SOURCE_URL) refuse('AK-RELEASE-ORIGIN');
      if (response.status >= 300 && response.status < 400) refuse('AK-RELEASE-REDIRECT');
      if (!response.ok || response.status !== 200) refuse('AK-RELEASE-HTTP');
      const contentType = response.headers?.get?.('content-type') ?? '';
      if (!/^(?:text\/html|application\/json)(?:;|$)/i.test(contentType)) refuse('AK-RELEASE-PAYLOAD');
      const declaredLength = Number(response.headers?.get?.('content-length'));
      if (Number.isFinite(declaredLength) && declaredLength > MAX_RESPONSE_BYTES) refuse('AK-RELEASE-PAYLOAD');
      const body = await readBoundedResponseBody(response, controller.signal);
      return extractReleaseVersions(body);
    })();
    return await Promise.race([operation, timeout]);
  } catch (error) {
    if (controller.signal.aborted) refuse('AK-RELEASE-TIMEOUT');
    if (error instanceof ReleaseDriftError) throw error;
    refuse('AK-RELEASE-NETWORK');
  } finally {
    clearTimeout(timer);
  }
}

async function canonicalRepo(repo) {
  if (!path.isAbsolute(repo)) refuse('AK-RELEASE-REPO');
  const root = await realpath(repo).then((canonical) => {
    if (canonical !== path.resolve(repo)) refuse('AK-RELEASE-REPO');
    return canonical;
  }).catch((error) => {
    if (error instanceof ReleaseDriftError) throw error;
    refuse('AK-RELEASE-REPO');
  });
  let packageJson;
  try { packageJson = JSON.parse(await readRegularFileNoFollow(root, 'package.json')); } catch { refuse('AK-RELEASE-REPO'); }
  if (packageJson.name !== 'tender-transit' || packageJson.type !== 'module') refuse('AK-RELEASE-REPO');
  let publicationPolicy;
  try {
    publicationPolicy = await readRegularFileNoFollow(
      root,
      'src/data/guides/agentkit/agentkit-publication-policy.ts',
    );
  } catch { refuse('AK-RELEASE-REPO'); }
  for (const fixture of FIXTURES) {
    if (!publicationPolicy.includes(`${fixture.policyDigestField}: '${fixture.factSha256}'`)) {
      refuse('AK-RELEASE-REPO');
    }
  }
  return root;
}

export async function runAgentKitReleaseDriftCheck({
  repo = SCRIPT_REPO,
  fetchImpl = globalThis.fetch,
  now = () => new Date(),
  timeoutMs = DEFAULT_TIMEOUT_MS,
} = {}) {
  if (typeof fetchImpl !== 'function') refuse('AK-RELEASE-NETWORK');
  const root = await canonicalRepo(repo);
  const expected = await expectedVersions(root);
  const observed = await fetchObservation(fetchImpl, timeoutMs);
  const capturedAt = now().toISOString();
  const expiresAt = new Date(new Date(capturedAt).getTime() + RETENTION_DAYS * 86400_000).toISOString();
  const observations = ['stable', 'prerelease'].map((channel) => ({
    channel,
    expectedVersion: expected[channel],
    observedVersion: observed[channel],
    status: expected[channel] === observed[channel] ? 'match' : 'drift',
  }));
  const outcome = observations.every(({ status }) => status === 'match') ? 'match' : 'drift';

  return {
    schemaVersion: 1,
    tool: { name: 'agentkit-release-drift', version: '1.0.0' },
    source: { origin: 'https://agentkit.best', path: '/changelog', retrieval: 'https-get-no-redirect' },
    capturedAt,
    retention: { classification: 'access-controlled', expiresAt, disposition: 'delete-after-expiry' },
    outcome,
    incidentId: outcome === 'match' ? 'AK-RELEASE-MATCH' : 'AK-RELEASE-DRIFT',
    observations,
    releaseState: releaseState(observed),
  };
}

function exactKeys(value, expected) {
  return value && typeof value === 'object' && !Array.isArray(value)
    && JSON.stringify(Object.keys(value).sort()) === JSON.stringify([...expected].sort());
}

function isCanonicalIsoTimestamp(value) {
  if (typeof value !== 'string') return false;
  const milliseconds = Date.parse(value);
  return Number.isFinite(milliseconds) && new Date(milliseconds).toISOString() === value;
}

function normalizeReleaseReport(report) {
  const topLevel = [
    'schemaVersion',
    'tool',
    'source',
    'capturedAt',
    'retention',
    'outcome',
    'incidentId',
    'observations',
    'releaseState',
  ];
  if (!exactKeys(report, topLevel) || report.schemaVersion !== 1) refuse('AK-RELEASE-REPORT');
  if (!exactKeys(report.tool, ['name', 'version'])
    || report.tool.name !== 'agentkit-release-drift' || report.tool.version !== '1.0.0') refuse('AK-RELEASE-REPORT');
  if (!exactKeys(report.source, ['origin', 'path', 'retrieval'])
    || report.source.origin !== 'https://agentkit.best'
    || report.source.path !== '/changelog'
    || report.source.retrieval !== 'https-get-no-redirect') refuse('AK-RELEASE-REPORT');
  if (!exactKeys(report.retention, ['classification', 'expiresAt', 'disposition'])
    || report.retention.classification !== 'access-controlled'
    || report.retention.disposition !== 'delete-after-expiry') refuse('AK-RELEASE-REPORT');
  if (!isCanonicalIsoTimestamp(report.capturedAt)
    || !isCanonicalIsoTimestamp(report.retention.expiresAt)
    || report.retention.expiresAt !== new Date(
      Date.parse(report.capturedAt) + RETENTION_DAYS * 86400_000,
    ).toISOString()) {
    refuse('AK-RELEASE-REPORT');
  }
  if (!['match', 'drift'].includes(report.outcome)
    || report.incidentId !== (report.outcome === 'match' ? 'AK-RELEASE-MATCH' : 'AK-RELEASE-DRIFT')) {
    refuse('AK-RELEASE-REPORT');
  }
  if (!Array.isArray(report.observations) || report.observations.length !== FIXTURES.length) {
    refuse('AK-RELEASE-REPORT');
  }
  const observations = report.observations.map((observation, index) => {
    const fixture = FIXTURES[index];
    if (!exactKeys(observation, ['channel', 'expectedVersion', 'observedVersion', 'status'])
      || observation.channel !== fixture.channel
      || observation.expectedVersion !== fixture.version
      || !/^\d+\.\d+\.\d+(?:-beta\.\d+)?$/.test(observation.observedVersion)
      || observation.status !== (observation.expectedVersion === observation.observedVersion ? 'match' : 'drift')) {
      refuse('AK-RELEASE-REPORT');
    }
    return { ...observation };
  });
  if ((observations.every(({ status }) => status === 'match') ? 'match' : 'drift') !== report.outcome) {
    refuse('AK-RELEASE-REPORT');
  }
  if (!validReleaseState(report.releaseState, observations)) refuse('AK-RELEASE-REPORT');
  return {
    schemaVersion: 1,
    tool: { ...report.tool },
    source: { ...report.source },
    capturedAt: report.capturedAt,
    retention: { ...report.retention },
    outcome: report.outcome,
    incidentId: report.incidentId,
    observations,
    releaseState: { ...report.releaseState },
  };
}

export async function writeReleaseDriftReport({ repo = SCRIPT_REPO, reportPath, report }) {
  const root = await canonicalRepo(repo);
  if (!path.isAbsolute(reportPath ?? '') || path.extname(reportPath) !== '.json') refuse('AK-RELEASE-REPORT');
  const output = path.resolve(reportPath);
  const relative = path.relative(root, output);
  if (relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative))) refuse('AK-RELEASE-REPORT');
  const parent = path.dirname(output);
  const canonicalParent = await realpath(parent).catch(() => refuse('AK-RELEASE-REPORT'));
  if (canonicalParent !== parent) refuse('AK-RELEASE-REPORT');
  const safeReport = normalizeReleaseReport(report);

  let descriptor;
  try {
    descriptor = await open(output, 'wx', 0o600);
    await descriptor.writeFile(`${JSON.stringify(safeReport, null, 2)}\n`, 'utf8');
    await descriptor.sync();
  } catch (error) {
    if (error instanceof ReleaseDriftError) throw error;
    refuse('AK-RELEASE-REPORT');
  } finally {
    await descriptor?.close();
  }
}

function parseArguments(argv) {
  const options = { online: false, repo: process.cwd(), reportPath: null };
  const seen = new Set();
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (seen.has(argument)) refuse('AK-RELEASE-USAGE');
    seen.add(argument);
    if (argument === '--online') options.online = true;
    else if (argument === '--repo' || argument === '--report') {
      const value = argv[++index];
      if (!value || value.startsWith('--')) refuse('AK-RELEASE-USAGE');
      if (argument === '--repo') options.repo = value;
      else options.reportPath = value;
    } else refuse('AK-RELEASE-USAGE');
  }
  if (!options.online || !options.reportPath || !path.isAbsolute(options.repo)) refuse('AK-RELEASE-USAGE');
  return options;
}

async function main() {
  try {
    const options = parseArguments(process.argv.slice(2));
    const report = await runAgentKitReleaseDriftCheck({ repo: options.repo });
    await writeReleaseDriftReport({ repo: options.repo, reportPath: options.reportPath, report });
    process.stdout.write(`${JSON.stringify({ schemaVersion: 1, outcome: report.outcome, incidentId: report.incidentId })}\n`);
    if (report.outcome === 'drift') process.exitCode = 1;
  } catch (error) {
    const incidentId = error instanceof ReleaseDriftError ? error.incidentId : 'AK-RELEASE-INTERNAL';
    process.stderr.write(`${JSON.stringify({ schemaVersion: 1, outcome: 'error', incidentId })}\n`);
    process.exitCode = 1;
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();

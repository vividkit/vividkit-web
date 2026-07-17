import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import {
  access,
  copyFile,
  mkdir,
  mkdtemp,
  readFile,
  realpath,
  rm,
  stat,
  symlink,
  writeFile,
} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import {
  RELEASE_DRIFT_SOURCE_URL,
  runAgentKitReleaseDriftCheck,
  writeReleaseDriftReport,
} from '../../scripts/check-agentkit-release-drift.mjs';

const repo = path.resolve(new URL('../..', import.meta.url).pathname);
const script = path.join(repo, 'scripts/check-agentkit-release-drift.mjs');
const now = () => new Date('2026-07-17T01:30:00.000Z');

function response(body, overrides = {}) {
  const encoded = new TextEncoder().encode(body);
  let emitted = false;
  return {
    ok: true,
    status: 200,
    redirected: false,
    url: RELEASE_DRIFT_SOURCE_URL,
    headers: { get: () => 'text/html; charset=utf-8' },
    body: {
      getReader: () => ({
        read: async () => {
          if (emitted) return { done: true };
          emitted = true;
          return { done: false, value: encoded };
        },
        cancel: async () => {},
      }),
    },
    text: async () => { throw new Error('unbounded text reader used'); },
    ...overrides,
  };
}

function changelog(stable = '2.3.0', beta = '2.3.1-beta.1') {
  return `
    <article><h2>v${beta}</h2><p>v${beta} Pre-release</p><p>AgentKit CLI</p></article>
    <article><h2>v2.20.1-beta.10</h2><p>v2.20.1-beta.10 Pre-release</p><p>Engineer Kit</p></article>
    <article><h2>v2024.11.0</h2><p>v2024.11.0</p><p>Marketing Kit</p></article>
    <article><h2>v${stable}</h2><p>v${stable}</p><p>AgentKit CLI</p></article>
  `;
}

test('matching official observation emits only the bounded release schema', async () => {
  let request;
  const report = await runAgentKitReleaseDriftCheck({
    repo,
    fetchImpl: async (url, options) => {
      request = { url, options };
      return response(changelog());
    },
    now,
  });

  assert.deepEqual(Object.keys(report).sort(), [
    'capturedAt', 'incidentId', 'observations', 'outcome', 'retention', 'schemaVersion', 'source', 'tool',
  ]);
  assert.equal(report.outcome, 'match');
  assert.equal(report.incidentId, 'AK-RELEASE-MATCH');
  assert.deepEqual(report.observations.map(({ channel, expectedVersion, observedVersion }) => (
    [channel, expectedVersion, observedVersion]
  )), [
    ['stable', '2.3.0', '2.3.0'],
    ['beta', '2.3.1-beta.1', '2.3.1-beta.1'],
  ]);
  assert.deepEqual(report.retention, {
    classification: 'access-controlled',
    expiresAt: '2026-07-24T01:30:00.000Z',
    disposition: 'delete-after-expiry',
  });
  assert.equal(request.url, RELEASE_DRIFT_SOURCE_URL);
  assert.equal(request.options.redirect, 'manual');
  assert.equal(request.options.signal instanceof AbortSignal, true);
});

test('multi-product changelog parsing ignores kit versions and date-like semvers', async () => {
  const report = await runAgentKitReleaseDriftCheck({
    repo,
    fetchImpl: async () => response(changelog()),
    now,
  });
  assert.equal(report.outcome, 'match');
  assert.deepEqual(report.observations.map(({ observedVersion }) => observedVersion), [
    '2.3.0',
    '2.3.1-beta.1',
  ]);
});

test('newer observation reports sanitized drift and never mutates release fixtures', async () => {
  const stable = path.join(repo, 'tests/fixtures/agentkit-release/stable-v2.3.0.json');
  const beta = path.join(repo, 'tests/fixtures/agentkit-release/beta-v2.3.1-beta.1.json');
  const before = await Promise.all([readFile(stable), readFile(beta)]);
  const report = await runAgentKitReleaseDriftCheck({
    repo,
    fetchImpl: async () => response(changelog('2.4.0', '2.4.1-beta.2')),
    now,
  });

  assert.equal(report.outcome, 'drift');
  assert.equal(report.incidentId, 'AK-RELEASE-DRIFT');
  assert.deepEqual(report.observations.map(({ observedVersion }) => observedVersion), ['2.4.0', '2.4.1-beta.2']);
  const after = await Promise.all([readFile(stable), readFile(beta)]);
  assert.deepEqual(after, before);
  assert.doesNotMatch(JSON.stringify(report), /raw|body|stdout|stderr|\/Users\//i);
});

test('redirect, untrusted origin, malformed payload and raw adapter errors collapse to safe codes', async () => {
  const cases = [
    [async () => response(changelog(), { redirected: true }), 'AK-RELEASE-REDIRECT'],
    [async () => response(changelog(), { ok: false, status: 302 }), 'AK-RELEASE-REDIRECT'],
    [async () => response(changelog(), { url: 'https://example.invalid/changelog' }), 'AK-RELEASE-ORIGIN'],
    [async () => response(changelog(), { ok: false, status: 503 }), 'AK-RELEASE-HTTP'],
    [async () => response(changelog(), { headers: { get: () => 'text/plain' } }), 'AK-RELEASE-PAYLOAD'],
    [async () => response(changelog(), { headers: { get: (key) => key === 'content-length' ? String(2 * 1024 * 1024) : 'text/html' } }), 'AK-RELEASE-PAYLOAD'],
    [async () => response('no release markers'), 'AK-RELEASE-PAYLOAD'],
    [async () => { throw new Error('SECRET token=abc /Users/private/repo'); }, 'AK-RELEASE-NETWORK'],
  ];

  for (const [fetchImpl, incidentId] of cases) {
    await assert.rejects(
      runAgentKitReleaseDriftCheck({ repo, fetchImpl, now }),
      (error) => {
        assert.equal(error.incidentId, incidentId);
        assert.doesNotMatch(String(error.message), /SECRET|token=|\/Users\//);
        return true;
      },
    );
  }
});

test('chunked responses stop at the byte cap without calling unbounded text()', async () => {
  let index = 0;
  const chunks = [new Uint8Array(600_000), new Uint8Array(600_000)];
  await assert.rejects(
    runAgentKitReleaseDriftCheck({
      repo,
      fetchImpl: async () => response('', {
        body: {
          getReader: () => ({
            read: async () => index < chunks.length
              ? { done: false, value: chunks[index++] }
              : { done: true },
            cancel: async () => {},
          }),
        },
        text: async () => { throw new Error('unbounded text reader used'); },
      }),
      now,
    }),
    (error) => error.incidentId === 'AK-RELEASE-PAYLOAD',
  );
});

test('timeout is bounded and emits no adapter details', async () => {
  await assert.rejects(
    runAgentKitReleaseDriftCheck({ repo, fetchImpl: async () => new Promise(() => {}), now, timeoutMs: 5 }),
    (error) => {
      assert.equal(error.incidentId, 'AK-RELEASE-TIMEOUT');
      assert.doesNotMatch(String(error.message), /fetch|socket|path|token/i);
      return true;
    },
  );
});

test('timeout bounds stalled body reads and reports timeout even when abort surfaces adapter errors', async () => {
  for (const abortAware of [false, true]) {
    const startedAt = Date.now();
    await assert.rejects(
      runAgentKitReleaseDriftCheck({
        repo,
        fetchImpl: async (_url, { signal }) => response('', {
          body: {
            getReader: () => ({
              read: async () => new Promise((_, reject) => {
                if (abortAware) signal.addEventListener('abort', () => reject(new Error('SECRET socket path')), { once: true });
              }),
              cancel: async () => {},
            }),
          },
        }),
        now,
        timeoutMs: 5,
      }),
      (error) => error.incidentId === 'AK-RELEASE-TIMEOUT',
    );
    assert.ok(Date.now() - startedAt < 250, 'stalled body read exceeded bounded timeout');
  }
});

test('timeout does not await a stalled reader cancellation', async () => {
  const startedAt = Date.now();
  await assert.rejects(
    runAgentKitReleaseDriftCheck({
      repo,
      fetchImpl: async () => response('', {
        body: {
          getReader: () => ({
            read: async () => new Promise(() => {}),
            cancel: async () => new Promise(() => {}),
          }),
        },
      }),
      now,
      timeoutMs: 5,
    }),
    (error) => error.incidentId === 'AK-RELEASE-TIMEOUT',
  );
  assert.ok(Date.now() - startedAt < 250, 'stalled cancellation exceeded bounded timeout');
});

test('response adapters without a readable stream are refused without calling text()', async () => {
  let textCalled = false;
  await assert.rejects(
    runAgentKitReleaseDriftCheck({
      repo,
      fetchImpl: async () => response('', {
        body: null,
        text: async () => {
          textCalled = true;
          return 'x'.repeat(2 * 1024 * 1024);
        },
      }),
      now,
    }),
    (error) => error.incidentId === 'AK-RELEASE-PAYLOAD',
  );
  assert.equal(textCalled, false);
});

test('report writer requires a new private absolute path outside the repository', async () => {
  const temporary = await realpath(await mkdtemp(path.join(os.tmpdir(), 'agentkit-release-report-')));
  const report = await runAgentKitReleaseDriftCheck({
    repo,
    fetchImpl: async () => response(changelog()),
    now,
  });
  try {
    await assert.rejects(writeReleaseDriftReport({ repo, reportPath: 'report.json', report }), /absolute|report/i);
    await assert.rejects(writeReleaseDriftReport({ repo, reportPath: path.join(repo, 'report.json'), report }), /outside|report/i);
    const output = path.join(temporary, 'report.json');
    await writeReleaseDriftReport({ repo, reportPath: output, report });
    assert.deepEqual(JSON.parse(await readFile(output, 'utf8')), report);
    assert.equal((await stat(output)).mode & 0o777, 0o600);
    await assert.rejects(writeReleaseDriftReport({ repo, reportPath: output, report }), /exist|report/i);

    const unsafe = path.join(temporary, 'unsafe.json');
    await assert.rejects(
      writeReleaseDriftReport({
        repo,
        reportPath: unsafe,
        report: { ...report, stderr: 'SECRET token=abc', nested: { home: '/Users/private/repo' } },
      }),
      /report/i,
    );
    await assert.rejects(access(unsafe));

    const timestampMutations = [
      { ...report, retention: { ...report.retention, expiresAt: '2099-01-01T00:00:00.000Z' } },
      { ...report, retention: { ...report.retention, expiresAt: '2026-07-23T01:30:00.000Z' } },
      { ...report, retention: { ...report.retention, expiresAt: 1784856600000 } },
      { ...report, capturedAt: '2026-07-17T01:30:00Z' },
      { ...report, capturedAt: null },
    ];
    for (const [index, mutatedReport] of timestampMutations.entries()) {
      const mutatedOutput = path.join(temporary, `timestamp-mutation-${index}.json`);
      await assert.rejects(
        writeReleaseDriftReport({ repo, reportPath: mutatedOutput, report: mutatedReport }),
        /report/i,
      );
      await assert.rejects(access(mutatedOutput));
    }
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
});

test('repository and fixture trust boundary refuses symlinked or unreviewed inputs', async () => {
  const external = await realpath(await mkdtemp(path.join(os.tmpdir(), 'agentkit-release-external-')));
  const symlinkedRepo = await realpath(await mkdtemp(path.join(os.tmpdir(), 'agentkit-release-symlinked-')));
  const driftedRepo = await realpath(await mkdtemp(path.join(os.tmpdir(), 'agentkit-release-drifted-')));
  const fixturePaths = [
    'tests/fixtures/agentkit-release/stable-v2.3.0.json',
    'tests/fixtures/agentkit-release/beta-v2.3.1-beta.1.json',
  ];
  try {
    for (const root of [symlinkedRepo, driftedRepo]) {
      await writeFile(path.join(root, 'package.json'), '{"name":"tender-transit","type":"module"}\n');
      await mkdir(path.join(root, 'tests/fixtures/agentkit-release'), { recursive: true });
      await mkdir(path.join(root, 'src/data/guides/agentkit'), { recursive: true });
      await copyFile(
        path.join(repo, 'src/data/guides/agentkit/agentkit-publication-policy.ts'),
        path.join(root, 'src/data/guides/agentkit/agentkit-publication-policy.ts'),
      );
    }
    for (const relativePath of fixturePaths) {
      const externalPath = path.join(external, path.basename(relativePath));
      await copyFile(path.join(repo, relativePath), externalPath);
      await symlink(externalPath, path.join(symlinkedRepo, relativePath));
      await copyFile(path.join(repo, relativePath), path.join(driftedRepo, relativePath));
    }
    const stablePath = path.join(driftedRepo, fixturePaths[0]);
    await writeFile(stablePath, `${await readFile(stablePath, 'utf8')}\n`);

    for (const root of [symlinkedRepo, driftedRepo]) {
      let fetched = false;
      await assert.rejects(
        runAgentKitReleaseDriftCheck({
          repo: root,
          fetchImpl: async () => { fetched = true; return response(changelog()); },
          now,
        }),
        (error) => error.incidentId === 'AK-RELEASE-FIXTURE',
      );
      assert.equal(fetched, false);
    }
  } finally {
    await Promise.all([external, symlinkedRepo, driftedRepo].map((root) => rm(root, { recursive: true, force: true })));
  }
});

test('CLI usage refusal is sanitized and canary stays outside build and truth-bundle entrypoints', async () => {
  const result = spawnSync(process.execPath, [script, '--online'], { encoding: 'utf8', cwd: repo });
  assert.equal(result.status, 1);
  assert.equal(result.stdout, '');
  assert.deepEqual(JSON.parse(result.stderr), {
    schemaVersion: 1,
    outcome: 'error',
    incidentId: 'AK-RELEASE-USAGE',
  });

  const packageJson = JSON.parse(await readFile(path.join(repo, 'package.json'), 'utf8'));
  for (const name of ['build', 'postbuild', 'verify:agentkit']) {
    assert.doesNotMatch(packageJson.scripts[name], /release-drift/);
  }
  const bundleManifest = await readFile(path.join(repo, 'scripts/agentkit-truth-audit-source-manifest.mjs'), 'utf8');
  assert.doesNotMatch(bundleManifest, /release-drift/);
});

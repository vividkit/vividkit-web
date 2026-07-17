import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import {
  cpSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { AGENTKIT_TRUTH_AUDITED_SOURCE_PATHS } from '../../scripts/agentkit-truth-audit-source-manifest.mjs';

const ROOT = fileURLToPath(new URL('../../', import.meta.url));
const AUDIT = join(ROOT, 'scripts/audit-agentkit-truth.mjs');
const BUILDER = join(ROOT, 'scripts/build-agentkit-truth-audit-bundle.mjs');
const BUNDLE = join(ROOT, 'scripts/dist/agentkit-truth-audit.bundle.mjs');
const MINIMAL_ENV = {
  PATH: process.env.PATH,
  LANG: 'C',
};

function runAudit(args, options = {}) {
  return spawnSync(process.execPath, [options.bundle ?? AUDIT, ...args], {
    cwd: ROOT,
    env: MINIMAL_ENV,
    encoding: 'utf8',
  });
}

function createAuditRepo() {
  const repo = mkdtempSync(join(tmpdir(), 'agentkit-truth-audit-'));
  for (const relativePath of [
    'docs/agentkit-lifecycle-owner-decisions.json',
    'tests/fixtures/agentkit-release/stable-v2.3.0.json',
    'tests/fixtures/agentkit-release/beta-v2.3.1-beta.1.json',
    ...AGENTKIT_TRUTH_AUDITED_SOURCE_PATHS,
  ]) {
    const destination = join(repo, relativePath);
    mkdirSync(dirname(destination), { recursive: true });
    cpSync(join(ROOT, relativePath), destination);
  }
  cpSync(join(ROOT, 'package.json'), join(repo, 'package.json'));
  return repo;
}

test('audit CLI accepts explicit worktree/channel/format/check and emits allowlisted JSON only', () => {
  for (const channel of ['stable', 'beta']) {
    const result = runAudit(['--repo', ROOT, '--channel', channel, '--format', 'json', '--check']);
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stderr, '');
    const output = JSON.parse(result.stdout);
    assert.deepEqual(Object.keys(output), [
      'schemaVersion',
      'ok',
      'category',
      'stage',
      'tool',
      'expectedSummary',
      'actualSummary',
      'incidentId',
      'channel',
      'releaseVersion',
      'embeddedFixtureRoot',
    ]);
    assert.equal(output.ok, true);
    assert.equal(output.channel, channel);
    assert.match(output.embeddedFixtureRoot, /^[a-f0-9]{64}$/);
    assert.equal(output.releaseVersion, channel === 'stable' ? '2.3.0' : '2.3.1-beta.1');
  }
});

test('audit CLI refuses unknown options, relative repos, dirty preload/path env, and wrong repositories', () => {
  const unknown = runAudit(['--repo', ROOT, '--wat']);
  assert.equal(unknown.status, 2);
  assert.doesNotMatch(unknown.stderr, /\n\s+at\s/);

  const relative = runAudit(['--repo', '.', '--check']);
  assert.equal(relative.status, 2);

  const dirtyEnv = spawnSync(process.execPath, [AUDIT, '--repo', ROOT, '--format', 'json', '--check'], {
    cwd: ROOT,
    env: { ...MINIMAL_ENV, NODE_PATH: '/tmp/untrusted-modules' },
    encoding: 'utf8',
  });
  assert.notEqual(dirtyEnv.status, 0);
  assert.doesNotMatch(`${dirtyEnv.stdout}${dirtyEnv.stderr}`, /untrusted-modules|\n\s+at\s/);

  const wrongRepo = mkdtempSync(join(tmpdir(), 'agentkit-wrong-repo-'));
  try {
    writeFileSync(join(wrongRepo, 'package.json'), '{"name":"not-vividkit"}\n');
    const wrong = runAudit(['--repo', wrongRepo, '--format', 'json', '--check']);
    assert.equal(wrong.status, 3);
    assert.doesNotMatch(`${wrong.stdout}${wrong.stderr}`, /not-vividkit|\n\s+at\s/);
  } finally {
    rmSync(wrongRepo, { recursive: true, force: true });
  }
});

test('audit refuses missing/mismatched contracts and symlinked allowlisted inputs without following them', () => {
  const missing = createAuditRepo();
  const drifted = createAuditRepo();
  const symlinked = createAuditRepo();
  try {
    rmSync(join(missing, 'docs/agentkit-lifecycle-owner-decisions.json'));
    const missingResult = runAudit(['--repo', missing, '--format', 'json', '--check'], { bundle: BUNDLE });
    assert.equal(missingResult.status, 4);

    const betaPath = join(drifted, 'tests/fixtures/agentkit-release/beta-v2.3.1-beta.1.json');
    const beta = JSON.parse(readFileSync(betaPath, 'utf8'));
    beta.version = '9.9.9-beta.1';
    writeFileSync(betaPath, `${JSON.stringify(beta, null, 2)}\n`);
    const stableAgainstBetaDrift = runAudit([
      '--repo', drifted, '--channel', 'stable', '--format', 'json', '--check',
    ], { bundle: BUNDLE });
    assert.equal(stableAgainstBetaDrift.status, 0, stableAgainstBetaDrift.stderr);
    const driftedResult = runAudit(['--repo', drifted, '--channel', 'beta', '--format', 'json', '--check'], { bundle: BUNDLE });
    assert.equal(driftedResult.status, 5);

    const stablePath = join(symlinked, 'tests/fixtures/agentkit-release/stable-v2.3.0.json');
    const targetPath = `${stablePath}.target`;
    cpSync(stablePath, targetPath);
    rmSync(stablePath);
    symlinkSync(targetPath, stablePath);
    const symlinkResult = runAudit(['--repo', symlinked, '--format', 'json', '--check'], { bundle: BUNDLE });
    assert.equal(symlinkResult.status, 4);

    const representativeSourceDriftPaths = [
      'package.json',
      'tailwind.config.mjs',
      'scripts/agentkit-truth-audit-source-manifest.mjs',
      'scripts/audit-agentkit-truth.mjs',
      'scripts/build-agentkit-truth-audit-bundle.mjs',
      'src/data/guides/agentkit/agentkit-publication-policy.ts',
      'src/data/guides/how-ck-works/workflow-visualizer-scenarios.ts',
    ];
    for (const relativePath of representativeSourceDriftPaths) {
      assert.ok(AGENTKIT_TRUTH_AUDITED_SOURCE_PATHS.includes(relativePath), relativePath);
      const sourceDrift = createAuditRepo();
      try {
        const sourcePath = join(sourceDrift, relativePath);
        if (relativePath === 'package.json') {
          const packageJson = JSON.parse(readFileSync(sourcePath, 'utf8'));
          packageJson.unreviewedDriftProbe = true;
          writeFileSync(sourcePath, `${JSON.stringify(packageJson, null, 2)}\n`);
        } else {
          writeFileSync(sourcePath, `${readFileSync(sourcePath, 'utf8')}\n// unreviewed drift\n`);
        }
        const sourceDriftResult = runAudit([
          '--repo', sourceDrift, '--format', 'json', '--check',
        ], { bundle: BUNDLE });
        assert.equal(sourceDriftResult.status, 5, relativePath);
        assert.equal(JSON.parse(sourceDriftResult.stdout).incidentId, 'AK-SOURCE-001', relativePath);
      } finally {
        rmSync(sourceDrift, { recursive: true, force: true });
      }
    }
  } finally {
    rmSync(missing, { recursive: true, force: true });
    rmSync(drifted, { recursive: true, force: true });
    rmSync(symlinked, { recursive: true, force: true });
  }
});

test('reviewed bundle is byte-reproducible, current, self-contained, and import-free', () => {
  const temp = mkdtempSync(join(tmpdir(), 'agentkit-bundle-build-'));
  try {
    const first = join(temp, 'first.mjs');
    const second = join(temp, 'second.mjs');
    execFileSync(process.execPath, [BUILDER, '--output', first], { cwd: ROOT, env: MINIMAL_ENV });
    execFileSync(process.execPath, [BUILDER, '--output', second], { cwd: ROOT, env: MINIMAL_ENV });
    assert.equal(readFileSync(first, 'utf8'), readFileSync(second, 'utf8'));
    execFileSync(process.execPath, [BUILDER, '--check'], { cwd: ROOT, env: MINIMAL_ENV });

    const source = readFileSync(BUNDLE, 'utf8');
    for (const forbidden of [
      /(?:^|\n)\s*import\s/m,
      /\bimport\s*\(/,
      /\brequire\s*\(/,
      /createRequire/,
      /module\.createRequire/,
      /child_process/,
      /\bfetch\s*\(/,
      /https?\.request\s*\(/,
      /writeFile|appendFile|rmSync|unlinkSync|renameSync/,
      /tests\/fixtures[^'"\n]*\.json['"]\s*\)/,
    ]) {
      assert.doesNotMatch(source, forbidden);
    }
    assert.match(source, /embeddedFixtureRoot/);
  } finally {
    rmSync(temp, { recursive: true, force: true });
  }
});

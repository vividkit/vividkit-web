import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import {
  diagnosticFingerprint,
  evaluateTypeDelta,
  matchesScope,
  parseAstroCheckOutput,
} from '../../scripts/check-agentkit-type-delta.mjs';

const ROOT = new URL('../../', import.meta.url);

test('Astro output parser is ANSI-safe and rejects incomplete summaries', () => {
  const output = [
    '\u001b[96msrc/data/guides/agentkit/example.ts\u001b[0m:\u001b[93m3\u001b[0m:\u001b[93m7\u001b[0m - \u001b[91merror\u001b[0m\u001b[90m ts(2322): \u001b[0mType mismatch.',
    '',
    'Result (425 files): ',
    '- 1 error',
  ].join('\n');
  const parsed = parseAstroCheckOutput(output);
  assert.equal(parsed.errorCount, 1);
  assert.deepEqual(parsed.diagnostics[0], {
    file: 'src/data/guides/agentkit/example.ts',
    line: 3,
    column: 7,
    source: 'ts',
    code: '2322',
    message: 'Type mismatch.',
  });
  assert.throws(() => parseAstroCheckOutput('Astro failed before reporting a result.'));
  assert.throws(() => parseAstroCheckOutput('Result (1 files):\n- 1 error'));
});

test('type delta scope covers AgentKit data, routes, i18n, and migrated consumers', async () => {
  const baseline = JSON.parse(await readFile(new URL('scripts/agentkit-type-baseline.json', ROOT), 'utf8'));
  for (const file of [
    'src/data/guides/agentkit/agentkit-cli-facts.ts',
    'src/i18n/en/agentkit.ts',
    'src/components/guides/agentkit/agentkit-kit-targets.astro',
    'src/components/guides/CkWithCodexGuide.astro',
    'src/components/guides/CoexistenceGuide.astro',
    'src/components/guides/cli-guide/AgentKitCliSetup.astro',
    'src/components/guides/migrate/agentkit-target-matrix.astro',
    'src/pages/vi/guides/agentkit.astro',
  ]) {
    assert.ok(baseline.scope.some((entry) => matchesScope(file, entry)), `${file} must be scoped`);
  }
  assert.deepEqual(baseline.allowedScopedFingerprints, []);
  assert.equal(baseline.observedRepoWideErrors, 271);
});

test('type delta permits unrelated baseline errors and fails every new scoped diagnostic', () => {
  const baseline = {
    scope: ['src/data/guides/agentkit/**'],
    allowedScopedFingerprints: [],
  };
  const unrelated = {
    file: 'src/scripts/legacy.ts', line: 1, column: 1, source: 'ts', code: '1', message: 'old',
  };
  const scoped = {
    file: 'src/data/guides/agentkit/new.ts', line: 2, column: 4, source: 'ts', code: '2', message: 'new',
  };
  assert.deepEqual(evaluateTypeDelta({ diagnostics: [unrelated] }, baseline).unexpected, []);
  assert.deepEqual(evaluateTypeDelta({ diagnostics: [unrelated, scoped] }, baseline).unexpected, [scoped]);

  const allowedBaseline = { ...baseline, allowedScopedFingerprints: [diagnosticFingerprint(scoped)] };
  assert.deepEqual(evaluateTypeDelta({ diagnostics: [scoped] }, allowedBaseline).unexpected, []);
  assert.deepEqual(evaluateTypeDelta({ diagnostics: [scoped, scoped] }, allowedBaseline).unexpected, [scoped]);
});

test('package scripts run every AgentKit suite and make verification part of build', async () => {
  const packageJson = JSON.parse(await readFile(new URL('package.json', ROOT), 'utf8'));
  assert.equal(packageJson.scripts['test:agentkit-content'], 'node --test tests/**/*.test.mjs');
  assert.match(packageJson.scripts['verify:agentkit'], /test:agentkit-content/);
  assert.match(packageJson.scripts['verify:agentkit'], /check:agentkit-content/);
  assert.match(packageJson.scripts['verify:agentkit'], /check:agentkit-types/);
  assert.match(packageJson.scripts.build, /^npm run verify:agentkit && astro build$/);
});

test('migrated target consumers import the canonical adapter instead of hardcoding resolved facts', async () => {
  for (const file of [
    'src/components/guides/CkWithCodexGuide.astro',
    'src/components/guides/CoexistenceGuide.astro',
    'src/components/guides/migrate/agentkit-target-matrix.astro',
    'src/components/guides/cli-guide/AgentKitCliSetup.astro',
  ]) {
    const source = await readFile(new URL(file, ROOT), 'utf8');
    assert.match(source, /agentkit-target-capabilities/);
    assert.doesNotMatch(source, /ak kit (?:init|install) engineer --target/);
    assert.doesNotMatch(source, /['"]\/?\$?ak:\*['"]/);
    assert.doesNotMatch(source, /Verified stable targets · 2026-07-12/);
  }
});

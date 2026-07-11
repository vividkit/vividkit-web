import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { agentkit as en } from '../../src/i18n/en/agentkit.ts';
import { agentkit as vi } from '../../src/i18n/vi/agentkit.ts';
import {
  AGENTKIT_CLI_FACTS,
} from '../../src/data/guides/agentkit/agentkit-cli-facts.ts';
import {
  AGENTKIT_MIGRATION_MAPPING_BY_LOCALE,
} from '../../src/data/guides/agentkit/agentkit-migration-mapping.ts';
import {
  AGENTKIT_MIGRATION_OPERATIONAL_FACTS,
} from '../../src/data/guides/agentkit/agentkit-migration-operational-facts.ts';
import {
  AGENTKIT_TARGET_CAPABILITIES,
} from '../../src/data/guides/agentkit/agentkit-target-capabilities.ts';
import {
  isSafeCopyPayload,
  toOperationalCommandView,
  toCommandView,
  viewsForPlatforms,
} from '../../src/components/guides/agentkit/agentkit-command-view.ts';

const COMPONENT_ROOT = new URL('../../src/components/guides/', import.meta.url);

test('English and Vietnamese AgentKit keys have structural parity', () => {
  assert.deepEqual(Object.keys(vi).sort(), Object.keys(en).sort());
});

test('the migration journey exposes exactly ten stable step ids', async () => {
  const source = await readFile(new URL('agentkit/agentkit-migration-checklist.astro', COMPONENT_ROOT), 'utf8');
  const ids = [...source.matchAll(/id: 'step-(\d{2})-[^']+'/g)].map((match) => match[1]);
  assert.deepEqual(ids, ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']);
});

test('canonical commands can render macOS, Linux, and Windows views', () => {
  const doctor = AGENTKIT_CLI_FACTS.find((fact) => fact.id === 'doctor');
  assert.ok(doctor);
  const platforms = new Set(viewsForPlatforms(doctor).map((command) => command.platform));
  assert.deepEqual([...platforms].sort(), ['linux', 'macos', 'windows']);
});

test('copyable command payloads exactly match display and reject controls', () => {
  for (const fact of AGENTKIT_CLI_FACTS.filter((candidate) => !candidate.mutatesDisk)) {
    const command = toCommandView(fact, 'macos', 'zsh');
    assert.equal(command.copyPayload, command.display, command.id);
    assert.equal(isSafeCopyPayload(command), true, command.id);
    assert.doesNotMatch(command.copyPayload, /[\u0000-\u001F\u007F]/u, command.id);
  }
});

test('remote installers and legacy removal are never blindly copyable', () => {
  for (const id of ['install-unix', 'install-windows']) {
    const fact = AGENTKIT_CLI_FACTS.find((candidate) => candidate.id === id);
    assert.ok(fact);
    assert.equal(toCommandView(fact, 'macos', 'zsh').copyable, false);
  }

  const removalFacts = AGENTKIT_MIGRATION_OPERATIONAL_FACTS.filter((fact) => fact.stage === 'legacy-removal');
  assert.equal(removalFacts.length, 3);
  assert.ok(removalFacts.every((fact) => !toOperationalCommandView(fact).copyable));
});

test('operational stages preserve platform parity and staged removal safety', () => {
  for (const stage of ['preflight', 'verify-install', 'collision-check', 'legacy-removal']) {
    const facts = AGENTKIT_MIGRATION_OPERATIONAL_FACTS.filter((fact) => fact.stage === stage);
    assert.deepEqual(facts.map((fact) => fact.platform).sort(), ['linux', 'macos', 'windows'], stage);
  }
});

test('legacy mappings resolve explicitly and Codex never uses Claude slash syntax', () => {
  const mapping = AGENTKIT_MIGRATION_MAPPING_BY_LOCALE.en;
  assert.ok(mapping.length > 0);
  assert.ok(mapping.every((row) => ['replace', 'compatibility', 'new-capability'].includes(row.status)));

  const codex = AGENTKIT_TARGET_CAPABILITIES.find((target) => target.target === 'codex');
  assert.ok(codex);
  assert.equal(codex.invocationMode, 'skill-reference');
  assert.equal(codex.invocationPrefix, '$ak:');
});

test('stable authentication commands do not retain the removed auth namespace', () => {
  const commands = AGENTKIT_CLI_FACTS.filter((fact) => ['login-license', 'login-email', 'login-api-key', 'whoami', 'licenses'].includes(fact.id));
  assert.ok(commands.length >= 5);
  assert.ok(commands.every((fact) => !fact.command.startsWith('ak auth ')));
});

test('AgentKit components use escaped interpolation instead of set:html', async () => {
  const files = [
    'AgentKitGuide.astro',
    'agentkit/agentkit-hero-and-path-selector.astro',
    'agentkit/agentkit-migration-checklist.astro',
    'agentkit/agentkit-command-mapping.astro',
    'agentkit/agentkit-kit-targets.astro',
    'agentkit/agentkit-compatibility-and-troubleshooting.astro',
    'agentkit/agentkit-platform-command-switcher.astro',
  ];

  for (const file of files) {
    const source = await readFile(new URL(file, COMPONENT_ROOT), 'utf8');
    assert.ok(!source.includes('set:html'), file);
  }
});

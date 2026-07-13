import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import {
  AGENTKIT_KIT_STRUCTURE_BY_TARGET,
  AGENTKIT_MECHANICS_TEACHING_STEPS,
  AGENTKIT_PROJECT_ONBOARDING,
  AGENTKIT_STRUCTURE_PROBE,
} from '../../src/data/guides/claude-mechanics/agentkit-structure-facts.ts';

test('structure probe metadata points at committed fixtures', async () => {
  assert.equal(AGENTKIT_STRUCTURE_PROBE.verifiedAt, '2026-07-13');
  assert.match(AGENTKIT_STRUCTURE_PROBE.akVersion, /^\d+\.\d+\.\d+/);
  const meta = JSON.parse(await readFile(new URL('../../docs/fixtures/agentkit-mechanics/META.json', import.meta.url), 'utf8'));
  assert.match(meta.ak_version, new RegExp(AGENTKIT_STRUCTURE_PROBE.akVersion.replace(/\./g, '\\.')));
});

test('project onboarding facts do not claim kit skill install', () => {
  assert.equal(AGENTKIT_PROJECT_ONBOARDING.newCommand.startsWith('ak new'), true);
  assert.equal(AGENTKIT_PROJECT_ONBOARDING.initCommand, 'ak init');
  assert.ok(AGENTKIT_PROJECT_ONBOARDING.creates.includes('.agentkit/ownership.json'));
  assert.doesNotMatch(AGENTKIT_PROJECT_ONBOARDING.note, /\bck\s+init\b/);
});

test('claude-code kit structure matches build-only probe shape', () => {
  const claude = AGENTKIT_KIT_STRUCTURE_BY_TARGET['claude-code'];
  assert.deepEqual([...claude.topLevelEntries], [
    '.claude-plugin/',
    '.agentkit/',
    'agents/',
    'hooks/',
    'rules/',
    'skills/',
  ]);
  assert.equal(claude.counts.skills, 91);
  assert.equal(claude.counts.agents, 16);
  assert.equal(claude.pluginPackageName, 'ak-engineer');
});

test('teaching steps keep project onboarding before kit install', () => {
  assert.deepEqual(
    AGENTKIT_MECHANICS_TEACHING_STEPS.map((step) => step.id),
    ['project', 'kit', 'refresh'],
  );
});

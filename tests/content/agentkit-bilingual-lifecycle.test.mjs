import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { agentkit as en } from '../../src/i18n/en/agentkit.ts';
import { agentkit as vi } from '../../src/i18n/vi/agentkit.ts';

const COMPONENT_ROOT = new URL('../../src/components/guides/', import.meta.url);

test('EN and VI lifecycle keys preserve exact structure and seven-stage coverage', () => {
  assert.deepEqual(Object.keys(vi).sort(), Object.keys(en).sort());
  const stageKeys = Object.keys(en).filter((key) => /^agentkit\.lifecycle\.stage\.[^.]+\.title$/.test(key));
  assert.equal(stageKeys.length, 7);
  assert.ok(stageKeys.every((key) => typeof vi[key] === 'string' && vi[key].trim().length > 0));
});

test('both locales carry the lifecycle policy semantic anchors', () => {
  const enText = Object.values(en).join('\n');
  const viText = Object.values(vi).join('\n');

  assert.match(enText, /3[–-]7 days/i);
  assert.match(viText, /3[–-]7 ngày/i);
  assert.match(enText, /closed-beta/i);
  assert.match(viText, /closed-beta/i);
  assert.match(enText, /support-assisted/i);
  assert.match(viText, /support-assisted/i);
  assert.match(enText, /advisory-only/i);
  assert.match(viText, /chỉ.*tham khảo|advisory-only/i);
  assert.match(enText, /sanitize/i);
  assert.match(viText, /làm sạch|sanitize/i);
});

test('active bilingual lifecycle copy rejects stale and over-broad guarantees', () => {
  const active = `${Object.values(en).join('\n')}\n${Object.values(vi).join('\n')}`;
  assert.doesNotMatch(active, /stage `?ak`? beside `?ck`?/i);
  assert.doesNotMatch(active, /stage `?ak`? song song/i);
  assert.doesNotMatch(active, /same-scope coexistence is (?:safe|supported)/i);
  assert.doesNotMatch(active, /doctor (?:green|passes?).*(?:proves?|guarantees?).*(?:safe|correct)/i);
  assert.doesNotMatch(active, /migrate.*apply by default/i);
});

test('the lifecycle journey is static and has no ephemeral evaluator contract', async () => {
  const guide = await readFile(new URL('AgentKitGuide.astro', COMPONENT_ROOT), 'utf8');
  const checklist = await readFile(new URL('agentkit/agentkit-migration-checklist.astro', COMPONENT_ROOT), 'utf8');
  assert.doesNotMatch(guide, /advanced-path-evaluator|operator-attestation|agentkit-lifecycle-guide-controller/);
  assert.doesNotMatch(checklist, /<form|<input|completedStages|data-agentkit-stage-state/);
  assert.match(checklist, /<details/);
  assert.doesNotMatch(checklist, /data-agentkit-stage-command-panel[^>]*hidden|hidden[^>]*data-agentkit-stage-command-panel/);
  assert.ok(Object.keys(en).every((key) => !key.startsWith('agentkit.router.') && !key.startsWith('agentkit.attestation.')));
  assert.ok(Object.keys(vi).every((key) => !key.startsWith('agentkit.router.') && !key.startsWith('agentkit.attestation.')));
});

test('support and removal UI refuses destructive actions when manager evidence is unknown', async () => {
  const source = await readFile(new URL('agentkit/agentkit-legacy-skill-cleanup.astro', COMPONENT_ROOT), 'utf8');
  assert.match(source, /sanitizeAgentKitLifecycleReport/);
  assert.match(source, /AGENTKIT_SUPPORT_CONTACTS/);
  assert.match(source, /AGENTKIT_CK_OWNERSHIP_PROBES/);
  assert.match(source, /data-agentkit-ownership-probe={probe\.packageManager}/);
  assert.match(source, /unknown[\s\S]*sanitize-and-escalate/);
  assert.doesNotMatch(source, /data-agentkit-removal-details[^>]*hidden|hidden[^>]*data-agentkit-removal-details/);
  assert.doesNotMatch(source, /data-agentkit-removal-policy=\{policy\.packageManager\}[^>]*hidden/);
  assert.match(source, /includeStage7Details/);
  assert.doesNotMatch(source, /data-agentkit-copy/);
});

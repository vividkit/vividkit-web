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

test('operator declaration is ephemeral, advisory-only, and resets blocked without JavaScript', async () => {
  const router = await readFile(new URL('agentkit/agentkit-advanced-path-evaluator.astro', COMPONENT_ROOT), 'utf8');
  const source = await readFile(new URL('agentkit/agentkit-operator-attestation.astro', COMPONENT_ROOT), 'utf8');
  const controller = await readFile(new URL('../../src/scripts/agentkit-lifecycle-guide-controller.ts', import.meta.url), 'utf8');
  assert.match(source, /data-agentkit-eligibility="blocked"/);
  assert.match(source, /type="datetime-local"/);
  assert.match(source, /aria-live="polite"/);
  assert.match(source, /unverified-operator-declaration/);
  assert.doesNotMatch(source, /localStorage|sessionStorage|document\.cookie|history\.|URLSearchParams|CustomEvent/);
  assert.doesNotMatch(controller, /localStorage|sessionStorage|document\.cookie|history\.|URLSearchParams|CustomEvent/);
  assert.match(controller, /window\.addEventListener\('pageshow'/);
  assert.match(controller, /attestationForm\.reset\(\)/);
  assert.match(controller, /awaitingCanaryDeclaration/);
  assert.match(controller, /routerForm\.addEventListener\('input', invalidateRouterEvaluation\)/);
  assert.match(controller, /routerForm\.addEventListener\('change', invalidateRouterEvaluation\)/);
  assert.match(controller, /attestationForm\.addEventListener\('input', invalidateAttestation\)/);
  assert.match(controller, /attestationForm\.addEventListener\('change', invalidateAttestation\)/);
  assert.match(controller, /clearCompletionFrom\(root, 'verify-canary'\)/);
  assert.match(controller, /router-input-changed/);
  assert.match(router, /type="button"[^>]*data-agentkit-router-evaluate|data-agentkit-router-evaluate[^>]*type="button"/);
  assert.match(router, /<noscript>[\s\S]*agentkit\.router\.javascriptRequired/);
  assert.doesNotMatch(router, /type="submit"[^>]*data-agentkit-router-evaluate|data-agentkit-router-evaluate[^>]*type="submit"/);
  assert.match(controller, /routerEvaluateButton\.addEventListener\('click'/);
  assert.match(controller, /routerEvaluateButton\.disabled = false/);
  assert.doesNotMatch(source, />[^<]*(?:verified|authorized)[^<]*</i);
});

test('support and removal UI refuses destructive actions when manager evidence is unknown', async () => {
  const source = await readFile(new URL('agentkit/agentkit-legacy-skill-cleanup.astro', COMPONENT_ROOT), 'utf8');
  const controller = await readFile(new URL('../../src/scripts/agentkit-lifecycle-guide-controller.ts', import.meta.url), 'utf8');
  assert.match(source, /sanitizeAgentKitLifecycleReport/);
  assert.match(source, /AGENTKIT_SUPPORT_CONTACTS/);
  assert.match(source, /AGENTKIT_CK_OWNERSHIP_PROBES/);
  assert.match(source, /data-agentkit-ownership-probe={probe\.packageManager}/);
  assert.match(source, /unknown[\s\S]*sanitize-and-escalate/);
  assert.match(source, /data-agentkit-removal-details hidden/);
  assert.match(source, /data-agentkit-removal-policy={policy\.packageManager} hidden/);
  assert.match(controller, /result\.removalPackageManager/);
  assert.match(controller, /dataset\.agentkitRemovalPolicy === result\.removalPackageManager/);
  assert.doesNotMatch(source, /data-agentkit-copy/);
});

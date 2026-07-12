import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { whatIsClaudeKit as en } from '../../src/i18n/en/what-is-claudekit.ts';
import { whatIsClaudeKit as vi } from '../../src/i18n/vi/what-is-claudekit.ts';
import {
  WHAT_IS_CLAUDEKIT_FACTS,
  WHAT_IS_CLAUDEKIT_SCOPE_FACTS,
  WHAT_IS_CLAUDEKIT_SOURCES,
} from '../../src/data/guides/agentkit/what-is-claudekit-facts.ts';
import {
  getAgentKitSkillInvocation,
  getAgentKitTargetViews,
} from '../../src/data/guides/agentkit/agentkit-target-capabilities.ts';
import { GUIDE_ROUTE_MANIFEST } from '../../src/data/guides/guide-route-manifest.ts';
import { guideSections } from '../../src/data/guides-llms-index.mjs';

const COMPONENT_ROOT = new URL('../../src/components/guides/', import.meta.url);
const PAGE_ROOT = new URL('../../src/pages/', import.meta.url);

test('ClaudeKit explainer facts preserve official successor and source boundaries', () => {
  assert.equal(WHAT_IS_CLAUDEKIT_FACTS.productStatus, 'legacy-predecessor');
  assert.equal(WHAT_IS_CLAUDEKIT_FACTS.currentSuccessor, 'agentkit');
  assert.equal(WHAT_IS_CLAUDEKIT_FACTS.legacyBinary, 'ck');
  assert.equal(WHAT_IS_CLAUDEKIT_FACTS.currentBinary, 'ak');
  assert.equal(WHAT_IS_CLAUDEKIT_FACTS.exactCountsPolicy, 'omit-volatile-counts');
  assert.equal(WHAT_IS_CLAUDEKIT_FACTS.modelSubscriptionIncluded, false);
  assert.deepEqual(WHAT_IS_CLAUDEKIT_FACTS.currentTargets, ['claude-code', 'codex']);
  assert.deepEqual(WHAT_IS_CLAUDEKIT_SOURCES.map(({ channel }) => channel), ['stable', 'legacy', 'legacy']);
  assert.ok(WHAT_IS_CLAUDEKIT_SOURCES.every(({ verifiedAt }) => verifiedAt === '2026-07-13'));
  assert.deepEqual(WHAT_IS_CLAUDEKIT_SCOPE_FACTS.map(({ path }) => path), ['.claude/', '~/.claude/']);
});

test('English and Vietnamese explainer copy has exact structural parity', () => {
  assert.deepEqual(Object.keys(vi).sort(), Object.keys(en).sort());
  assert.match(en['what_is_ck.hero.title'], /ClaudeKit.*AgentKit/);
  assert.match(vi['what_is_ck.hero.title'], /ClaudeKit.*AgentKit/);
});

test('the legacy slug composes four current fact-backed primer sections', async () => {
  const shell = await readFile(new URL('WhatIsClaudeKitGuide.astro', COMPONENT_ROOT), 'utf8');
  const files = [
    'what-is-claudekit/what-is-claudekit-intro-and-metaphors.astro',
    'what-is-claudekit/what-is-claudekit-pillars-and-process-flow.astro',
    'what-is-claudekit/what-is-claudekit-before-after-comparison.astro',
    'what-is-claudekit/what-is-claudekit-commands-and-summary.astro',
  ];

  for (const name of [
    'WhatIsClaudeKitIntro',
    'WhatIsClaudeKitPillarsAndFlow',
    'WhatIsClaudeKitBeforeAfter',
    'WhatIsClaudeKitCommandsAndSummary',
  ]) assert.match(shell, new RegExp(`<${name} lang=\\{currentLang\\} \\/>`));

  for (const file of files) {
    const source = await readFile(new URL(file, COMPONENT_ROOT), 'utf8');
    assert.ok(!source.includes('set:html'), file);
    assert.doesNotMatch(source, /\/(?:ck|ckm):/i, file);
    assert.doesNotMatch(source, /discount|20% off|purchase ClaudeKit/i, file);
  }
});

test('target examples resolve through canonical AgentKit adapters', () => {
  const views = getAgentKitTargetViews();
  assert.deepEqual(views.map(({ target }) => target), ['claude-code', 'codex']);
  assert.equal(getAgentKitSkillInvocation('claude-code', 'cook'), '/ak:cook');
  assert.equal(getAgentKitSkillInvocation('codex', 'cook'), '$ak:cook');
});

test('EN and VI route wrappers preserve legacy identity with locale-correct canonicals', async () => {
  const enPage = await readFile(new URL('guides/what-is-claudekit.astro', PAGE_ROOT), 'utf8');
  const viPage = await readFile(new URL('vi/guides/what-is-claudekit.astro', PAGE_ROOT), 'utf8');
  assert.match(enPage, /canonicalPath="\/guides\/what-is-claudekit"/);
  assert.match(viPage, /canonicalPath="\/vi\/guides\/what-is-claudekit"/);
  assert.match(enPage, /title=\{t\('what_is_ck\.meta\.title'\)\}/);
  assert.match(viPage, /title=\{t\('what_is_ck\.meta\.title'\)\}/);

  const route = GUIDE_ROUTE_MANIFEST.find(({ id }) => id === 'what-is-claudekit');
  assert.ok(route);
  assert.equal(route.compatibilityPolicy, 'legacy-slug');
  assert.equal(route.enPath, '/guides/what-is-claudekit');
  assert.equal(route.viPath, '/vi/guides/what-is-claudekit');
});

test('LLM discovery describes the compatibility primer instead of current ClaudeKit setup', () => {
  const link = guideSections.flatMap(({ links }) => links)
    .find(({ path }) => path === '/guides/what-is-claudekit');
  assert.ok(link);
  assert.equal(link.title, 'What is ClaudeKit? From CK to AgentKit');
  assert.match(link.desc, /legacy concepts/);
  assert.match(link.desc, /AgentKit as its successor/);
  assert.doesNotMatch(`${link.title} ${link.desc}`, /(?:\/|\$)(?:ck|ckm):/i);
  assert.doesNotMatch(link.desc, /\bck\s+(?:new|init|update|setup|skills|agents|doctor|versions|config|migrate|uninstall)\b/i);
});

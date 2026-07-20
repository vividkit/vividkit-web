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
  AGENTKIT_CK_EXECUTABLE_DETECTORS,
  AGENTKIT_CK_REMOVAL_POLICIES,
  AGENTKIT_LIFECYCLE_STAGE_FACTS,
  AGENTKIT_SUPPORT_CONTACTS,
} from '../../src/data/guides/agentkit/agentkit-lifecycle-policy.ts';
import {
  AGENTKIT_TARGET_CAPABILITIES,
} from '../../src/data/guides/agentkit/agentkit-target-capabilities.ts';
import {
  AGENTKIT_APP_FACTS,
  AGENTKIT_APP_SOURCES,
} from '../../src/data/guides/agentkit/agentkit-app-facts.ts';
import {
  isSafeCopyPayload,
  toCommandView,
  viewsForPlatforms,
} from '../../src/components/guides/agentkit/agentkit-command-view.ts';
import {
  AGENTKIT_READER_LANES,
} from '../../src/components/guides/agentkit/agentkit-reader-lanes.ts';

const COMPONENT_ROOT = new URL('../../src/components/guides/', import.meta.url);

test('English and Vietnamese AgentKit keys have structural parity', () => {
  assert.deepEqual(Object.keys(vi).sort(), Object.keys(en).sort());
});

test('Desktop App facts preserve unresolved official availability boundaries', () => {
  const product = AGENTKIT_APP_SOURCES.find(({ id }) => id === 'product-page');
  const changelog = AGENTKIT_APP_SOURCES.find(({ id }) => id === 'stable-changelog');
  assert.equal(product?.channel, 'pre-release');
  assert.equal(product?.status, 'paid-waitlist');
  assert.equal(changelog?.channel, 'stable');
  assert.equal(changelog?.status, 'stable-release-notes');
  assert.equal(changelog?.releaseVersion, '2.0.0');
  assert.ok(AGENTKIT_APP_SOURCES.every(({ verifiedAt }) => verifiedAt === '2026-07-12'));
  assert.equal(AGENTKIT_APP_FACTS.status, 'public-availability-not-established');
  assert.equal(AGENTKIT_APP_FACTS.publicDownloadStatus, 'not-verified');
  assert.equal(AGENTKIT_APP_FACTS.cliRelationship, 'separate-auth-sessions-app-license-gated-shell');
  assert.equal(AGENTKIT_APP_FACTS.linuxStatus, 'gui-asset-documented-download-not-verified');
  assert.equal(AGENTKIT_APP_FACTS.appReleaseNotes, 'documented-in-stable-cli-changelog');
  assert.equal(AGENTKIT_APP_FACTS.paymentRequiredToReserve, true);
  assert.equal(AGENTKIT_APP_FACTS.confirmationMethod, 'email');
  assert.equal(AGENTKIT_APP_FACTS.activationMethod, 'invite');
  assert.equal(AGENTKIT_APP_FACTS.deviceRegistrationDocumented, true);
  assert.equal(AGENTKIT_APP_FACTS.shortOfflineContinuityDocumented, true);
  assert.deepEqual(AGENTKIT_APP_FACTS.marketedPlatforms, ['windows', 'macos']);
  assert.deepEqual(AGENTKIT_APP_FACTS.releaseAssetPlatforms, ['macos', 'linux', 'windows']);
  assert.match(product?.sourceUrl, /^https:\/\/agentkit\.best\/agentkit-app$/);
  assert.match(changelog?.sourceUrl, /^https:\/\/agentkit\.best\/changelog$/);
  assert.match(AGENTKIT_APP_FACTS.ctaUrl, /^https:\/\/agentkit\.best\/agentkit-app#pricing$/);
});

test('Continuity FAQ renders before Desktop App and answers entitlement confusion', async () => {
  const guide = await readFile(new URL('agentkit/agentkit-advanced-references.astro', COMPONENT_ROOT), 'utf8');
  const source = await readFile(new URL('agentkit/agentkit-continuity-faq.astro', COMPONENT_ROOT), 'utf8');

  assert.match(guide, /<AgentKitContinuityFaq lang=\{lang\} \/>/);
  assert.ok(guide.indexOf('AgentKitContinuityFaq') < guide.indexOf('AgentKitDesktopAppOverview'));
  assert.match(guide, /id="continuity"/);
  assert.match(en['agentkit.continuity.desktop.body'], /optional/i);
  assert.match(en['agentkit.continuity.kits.body'], /two kits/i);
  assert.match(en['agentkit.continuity.boundary.body'], /App waitlist|license-key/i);
  assert.match(en['agentkit.continuity.entitlements.body'], /`ak licenses`/);
  assert.match(en['agentkit.continuity.kits.body'], /`ak kit init engineer`/);
  assert.match(en['agentkit.continuity.kits.body'], /`ak kit init marketing`/);
  assert.match(vi['agentkit.continuity.kits.body'], /`ak kit init engineer`/);
  assert.match(vi['agentkit.continuity.kits.body'], /`ak kit init marketing`/);
  assert.match(source, /renderInlineCode/);
  assert.match(source, /set:html=\{renderInlineCode\(/);
});

test('Desktop App section keeps canonical links and rendered structure explicit', async () => {
  const guide = await readFile(new URL('agentkit/agentkit-advanced-references.astro', COMPONENT_ROOT), 'utf8');
  const source = await readFile(new URL('agentkit/agentkit-desktop-app-overview.astro', COMPONENT_ROOT), 'utf8');

  assert.match(guide, /<AgentKitDesktopAppOverview lang=\{lang\} \/>/);
  assert.match(source, /id="desktop-app"/);
  assert.match(source, /href=\{`\$\{prefix\}\/guides\/cli`\}/);
  assert.match(source, /href=\{AGENTKIT_APP_FACTS\.ctaUrl\}/);
  assert.match(source, /AGENTKIT_APP_SOURCES\.map/);
  assert.match(source, /role="note"/);
  assert.match(source, /throw new Error\(`Unsupported AgentKit App fact state/);
  assert.match(source, /rel="noopener noreferrer"/);
  assert.match(source, /renderInlineCode/);
});

test('legacy cleanup section renders detector-first support and fail-closed removal boundaries', async () => {
  const guide = await readFile(new URL('agentkit/agentkit-advanced-references.astro', COMPONENT_ROOT), 'utf8');
  const source = await readFile(new URL('agentkit/agentkit-legacy-skill-cleanup.astro', COMPONENT_ROOT), 'utf8');

  assert.match(guide, /<AgentKitLegacySkillCleanup lang=\{lang\} includeStage7Details=\{includeStage7Details\} \/>/);
  assert.match(source, /id="legacy-skill-cleanup"/);
  assert.match(source, /AGENTKIT_CK_EXECUTABLE_DETECTORS/);
  assert.match(source, /AGENTKIT_CK_REMOVAL_POLICIES/);
  assert.match(source, /AGENTKIT_SUPPORT_CONTACTS/);
  assert.match(source, /role="note"/);
  assert.match(source, /rel="noopener noreferrer"/);
  assert.match(source, /includeStage7Details/);
  assert.match(source, /data-agentkit-stage-seven-unavailable/);
  assert.ok(!source.includes('rm -rf'));
  assert.ok(!source.includes('data-agentkit-copy'));
  assert.match(source, /renderInlineCode/);
});

test('the migration journey renders exactly seven canonical stages in order', async () => {
  const source = await readFile(new URL('agentkit/agentkit-migration-checklist.astro', COMPONENT_ROOT), 'utf8');
  assert.match(source, /AGENTKIT_LIFECYCLE_STAGE_FACTS\.map/);
  assert.match(source, /includeStage7Details/);
  assert.doesNotMatch(source, /completedStages|data-agentkit-stage-state|data-agentkit-stage-label/);
  assert.doesNotMatch(source, /data-agentkit-stage-command-panel[^>]*hidden|hidden[^>]*data-agentkit-stage-command-panel/);
  assert.deepEqual(
    AGENTKIT_LIFECYCLE_STAGE_FACTS.map(({ id }) => id),
    [
      'backup',
      'cleanup-ck-ownership',
      'confirm-clean-scope',
      'install-ak',
      'verify-canary',
      'observe',
      'remove-ck-control-plane',
    ],
  );
  assert.ok(AGENTKIT_LIFECYCLE_STAGE_FACTS.every((stage) => (
    typeof stage.prerequisite === 'string'
      && typeof stage.expectedSignal === 'string'
      && typeof stage.failureAction === 'string'
  )));
});

test('Hub leads with a compact channel status, static decision flow, clean cutover, recovery, and collapsed references', async () => {
  const guide = await readFile(new URL('AgentKitGuide.astro', COMPONENT_ROOT), 'utf8');
  const hero = await readFile(new URL('agentkit/agentkit-hero-and-path-selector.astro', COMPONENT_ROOT), 'utf8');
  const readerNavigation = await readFile(new URL('agentkit/agentkit-reader-decision-navigation.astro', COMPONENT_ROOT), 'utf8');
  const references = await readFile(new URL('agentkit/agentkit-advanced-references.astro', COMPONENT_ROOT), 'utf8');
  const mapping = await readFile(new URL('agentkit/agentkit-command-mapping.astro', COMPONENT_ROOT), 'utf8');

  const composition = [
    'AgentKitHeroAndPathSelector',
    'AgentKitChannelSwitcher',
    'AgentKitReaderDecisionNavigation',
    'AgentKitMigrationChecklist',
    'AgentKitRecoveryAndSupport',
    'AgentKitAdvancedReferences',
  ];
  for (let index = 1; index < composition.length; index += 1) {
    assert.ok(
      guide.indexOf(`<${composition[index - 1]}`) < guide.indexOf(`<${composition[index]}`),
      `${composition[index - 1]} must render before ${composition[index]}`,
    );
  }

  assert.doesNotMatch(hero, /data-agentkit-lifecycle-router|<form/);
  assert.doesNotMatch(guide, /AgentKitAdvancedPathEvaluator|AgentKitOperatorAttestation|initializeAgentKitLifecycleGuides|data-agentkit-lifecycle-guide/);
  assert.match(guide, /data-stage-seven-details=\{includeStage7Details \? 'published' : 'hold'\}/);
  assert.match(readerNavigation, /<nav[^>]*aria-labelledby=/);
  assert.match(readerNavigation, /<ol/);
  assert.match(readerNavigation, /<li/);
  assert.match(readerNavigation, /focus-visible:/);
  assert.match(readerNavigation, /scroll-mt-40/);
  assert.match(readerNavigation, /lg:scroll-mt-28/);
  assert.match(readerNavigation, /min-w-0/);
  assert.match(readerNavigation, /break-words/);
  assert.match(readerNavigation, /motion-reduce:transition-none/);
  assert.match(readerNavigation, /data-agentkit-reader-lane=/);
  assert.match(readerNavigation, /data-agentkit-route-group="primary"/);
  assert.match(readerNavigation, /data-agentkit-route-group="exception"/);
  assert.match(references, /<details[^>]*data-agentkit-advanced-references/);
  assert.doesNotMatch(references, /<details[^>]*\sopen(?:[=\s>])/);
  assert.match(references, /motion-reduce:transition-none/);
  assert.doesNotMatch(mapping, /data-agentkit-downstream-actions[^>]*hidden|hidden[^>]*data-agentkit-downstream-actions/);
});

test('reader navigation exposes exactly five localized, JS-free destination links', async () => {
  const source = await readFile(new URL('agentkit/agentkit-reader-decision-navigation.astro', COMPONENT_ROOT), 'utf8');
  const destinationModule = await readFile(new URL('agentkit/agentkit-reader-lanes.ts', COMPONENT_ROOT), 'utf8');

  const expected = [
    ['/guides/cli#install', '/vi/guides/cli#install'],
    ['/guides/agentkit#clean-cutover', '/vi/guides/agentkit#clean-cutover'],
    ['/guides/coexistence#pilot-steps', '/vi/guides/coexistence#pilot-steps'],
    ['/guides/agentkit#recovery', '/vi/guides/agentkit#recovery'],
    ['/guides/agentkit#support', '/vi/guides/agentkit#support'],
  ];

  assert.match(destinationModule, /satisfies ReadonlyArray<AgentKitReaderLane>/);
  assert.equal(AGENTKIT_READER_LANES.length, 5);
  for (const [index, [english, vietnamese]] of expected.entries()) {
    assert.equal(AGENTKIT_READER_LANES[index]?.href.en, english);
    assert.equal(AGENTKIT_READER_LANES[index]?.href.vi, vietnamese);
  }

  assert.match(source, /primaryLanes\.map/);
  assert.match(source, /exceptionLanes\.map/);
  assert.match(source, /href=\{lane\.href\[lang\]\}/);
  assert.doesNotMatch(source, /onclick=|data-agentkit-router-evaluate/);
  assert.equal(AGENTKIT_READER_LANES.filter(({ group }) => group === 'primary').length, 3);
  assert.equal(AGENTKIT_READER_LANES.filter(({ group }) => group === 'exception').length, 2);
});

test('all reader destinations exist once and provide fixed-header scroll clearance', async () => {
  const migration = await readFile(new URL('agentkit/agentkit-migration-checklist.astro', COMPONENT_ROOT), 'utf8');
  const coexistence = await readFile(new URL('CoexistenceGuide.astro', COMPONENT_ROOT), 'utf8');
  const recoveryAndSupport = await readFile(new URL('agentkit/agentkit-recovery-and-support.astro', COMPONENT_ROOT), 'utf8');
  const sources = `${migration}\n${coexistence}\n${recoveryAndSupport}`;

  for (const id of ['clean-cutover', 'pilot-steps', 'recovery', 'support']) {
    assert.equal((sources.match(new RegExp(`id="${id}"`, 'g')) ?? []).length, 1, id);
  }
  assert.equal((migration.match(/id="migration-journey"/g) ?? []).length, 1);
  assert.match(migration, /id="migration-journey"[^>]*scroll-mt-40[^>]*lg:scroll-mt-28/);
  assert.match(migration, /id="clean-cutover"[^>]*scroll-mt-40[^>]*lg:scroll-mt-28/);
  assert.match(coexistence, /id="pilot-steps"[^>]*scroll-mt-40[^>]*lg:scroll-mt-28/);
  assert.match(recoveryAndSupport, /id="recovery"[^>]*scroll-mt-40[^>]*lg:scroll-mt-28/);
  assert.match(recoveryAndSupport, /id="support"[^>]*scroll-mt-40[^>]*lg:scroll-mt-28/);

  assert.match(coexistence, /id="pilot-steps"[\s\S]*<ol/);
  assert.ok(coexistence.indexOf('id="pilot-steps"') < coexistence.indexOf('data-agentkit-coexistence-topology'));
  assert.ok(coexistence.indexOf('id="pilot-steps"') < coexistence.indexOf('data-agentkit-coexistence-eligibility'));
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

test('remote installers and CK executable removal are never blindly copyable', () => {
  for (const id of ['install-unix', 'install-windows']) {
    const fact = AGENTKIT_CLI_FACTS.find((candidate) => candidate.id === id);
    assert.ok(fact);
    assert.equal(toCommandView(fact, 'macos', 'zsh').copyable, false);
  }

  assert.ok(AGENTKIT_CK_REMOVAL_POLICIES.every((fact) => !fact.copyable));
});

test('detector-first removal covers supported managers and refuses unknown ownership', () => {
  assert.deepEqual(
    AGENTKIT_CK_EXECUTABLE_DETECTORS.map(({ platform }) => platform).sort(),
    ['linux', 'macos', 'windows'],
  );
  assert.deepEqual(
    AGENTKIT_CK_REMOVAL_POLICIES.map(({ packageManager }) => packageManager),
    ['bun', 'npm', 'pnpm', 'yarn', 'unknown'],
  );
  assert.deepEqual(
    Object.fromEntries(AGENTKIT_CK_REMOVAL_POLICIES.map((policy) => [policy.packageManager, policy.command])),
    {
      bun: 'bun remove -g claudekit-cli',
      npm: 'npm uninstall -g claudekit-cli',
      pnpm: 'pnpm remove -g claudekit-cli',
      yarn: 'yarn global remove claudekit-cli',
      unknown: null,
    },
  );
  assert.ok(AGENTKIT_CK_REMOVAL_POLICIES.every(({ copyable }) => copyable === false));
  assert.ok(AGENTKIT_CK_REMOVAL_POLICIES.every(({ packageManager }) => packageManager !== 'homebrew'));
  assert.equal(
    AGENTKIT_CK_REMOVAL_POLICIES.find(({ packageManager }) => packageManager === 'unknown')?.action,
    'sanitize-and-escalate',
  );
});

test('support lane has both official contacts and a sanitize-before-sharing contract', () => {
  assert.deepEqual(AGENTKIT_SUPPORT_CONTACTS, [
    {
      id: 'claudekit-discord',
      url: 'https://discord.com/invite/x7SwTSf3wc',
      sharePolicy: 'sanitized-allowlist-only',
    },
    {
      id: 'agentkit-support',
      url: 'https://github.com/bestagentkits/agentkit-support',
      sharePolicy: 'sanitized-allowlist-only',
    },
  ]);
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
  const commands = AGENTKIT_CLI_FACTS.filter((fact) => ['login-email', 'login-api-key', 'login-license', 'whoami', 'licenses'].includes(fact.id));
  assert.ok(commands.length >= 5);
  assert.ok(commands.every((fact) => !fact.command.startsWith('ak auth ')));
});

test('AgentKit set:html prose always routes through escaping renderInlineCode', async () => {
  const { renderInlineCode } = await import('../../src/components/guides/agentkit/inline-code.ts');
  assert.match(renderInlineCode('Install `ak` now'), /<code[^>]*>ak<\/code>/);
  assert.match(renderInlineCode('Avoid <script>alert(1)</script> and `ck`'), /&lt;script&gt;/);
  assert.doesNotMatch(renderInlineCode('Avoid <script>alert(1)</script>'), /<script>/);

  const files = [
    'AgentKitGuide.astro',
    'agentkit/agentkit-hero-and-path-selector.astro',
    'agentkit/agentkit-migration-checklist.astro',
    'agentkit/agentkit-command-mapping.astro',
    'agentkit/agentkit-kit-targets.astro',
    'agentkit/agentkit-legacy-skill-cleanup.astro',
    'agentkit/agentkit-compatibility-and-troubleshooting.astro',
    'agentkit/agentkit-desktop-app-overview.astro',
    'agentkit/agentkit-continuity-faq.astro',
    'agentkit/agentkit-platform-command-switcher.astro',
  ];

  for (const file of files) {
    const source = await readFile(new URL(file, COMPONENT_ROOT), 'utf8');
    if (!source.includes('set:html')) continue;
    assert.match(source, /from ['"]\.\/inline-code['"]/, file);
    assert.match(source, /set:html=\{renderInlineCode\(/, file);
    assert.ok(!/set:html=\{(?!renderInlineCode\()/.test(source), file);
  }
});

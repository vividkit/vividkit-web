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

test('What is AgentKit owns continuity + desktop; migration hub stays cutover-only', async () => {
  const [guide, whatIs, cli, faq] = await Promise.all([
    readFile(new URL('AgentKitGuide.astro', COMPONENT_ROOT), 'utf8'),
    readFile(new URL('WhatIsAgentKitGuide.astro', COMPONENT_ROOT), 'utf8'),
    readFile(new URL('CLIGuide.astro', COMPONENT_ROOT), 'utf8'),
    readFile(new URL('agentkit/agentkit-continuity-faq.astro', COMPONENT_ROOT), 'utf8'),
  ]);

  assert.match(whatIs, /<AgentKitContinuityFaq lang=\{currentLang\} \/>/);
  assert.match(whatIs, /<AgentKitDesktopAppOverview lang=\{currentLang\} \/>/);
  assert.ok(whatIs.indexOf('<AgentKitContinuityFaq') < whatIs.indexOf('<AgentKitDesktopAppOverview'));
  assert.doesNotMatch(guide, /AgentKitContinuityFaq|AgentKitDesktopAppOverview|AgentKitQuickStart|AgentKitCompatibilityAndTroubleshooting/);
  assert.match(cli, /AgentKitQuickStart/);
  assert.match(cli, /AgentKitCompatibilityAndTroubleshooting/);
  assert.ok(cli.indexOf('<AgentKitQuickStart') < cli.indexOf('<AgentKitCompatibilityAndTroubleshooting'));
  assert.match(guide, /AgentKitMigrationChecklist/);
  assert.match(guide, /AgentKitCommandMapping/);
  assert.match(guide, /AgentKitLegacySkillCleanup/);
  assert.ok(guide.indexOf('<AgentKitHero') < guide.indexOf('<AgentKitHubNav'));
  assert.ok(guide.indexOf('<AgentKitHubNav') < guide.indexOf('<AgentKitMigrationChecklist'));
  assert.ok(guide.indexOf('<AgentKitMigrationChecklist') < guide.indexOf('<AgentKitCommandMapping'));
  assert.ok(guide.indexOf('<AgentKitCommandMapping') < guide.indexOf('<AgentKitLegacySkillCleanup'));
  assert.match(faq, /id="continuity"/);
  assert.match(faq, /guides\/cli#quick-start/);
  assert.match(faq, /guides\/agentkit#migration-journey/);
  assert.match(en['agentkit.continuity.desktop.body'], /optional/i);
  assert.match(en['agentkit.continuity.kits.body'], /two kits/i);
  assert.match(en['agentkit.continuity.boundary.body'], /App waitlist|license-key/i);
  assert.match(en['agentkit.continuity.entitlements.body'], /`ak licenses`/);
  assert.match(faq, /renderInlineCode/);
  assert.match(faq, /set:html=\{renderInlineCode\(/);
});

test('Desktop App section keeps canonical links and rendered structure explicit', async () => {
  const whatIs = await readFile(new URL('WhatIsAgentKitGuide.astro', COMPONENT_ROOT), 'utf8');
  const source = await readFile(new URL('agentkit/agentkit-desktop-app-overview.astro', COMPONENT_ROOT), 'utf8');

  assert.match(whatIs, /<AgentKitDesktopAppOverview lang=\{currentLang\} \/>/);
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
  const guide = await readFile(new URL('AgentKitGuide.astro', COMPONENT_ROOT), 'utf8');
  const source = await readFile(new URL('agentkit/agentkit-legacy-skill-cleanup.astro', COMPONENT_ROOT), 'utf8');

  assert.match(guide, /<AgentKitLegacySkillCleanup lang=\{currentLang\} includeStage7Details=\{includeStage7Details\} \/>/);
  assert.match(guide, /import\.meta\.env\.AGENTKIT_INCLUDE_STAGE7_DETAILS/);
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

test('lifecycle guidance and commands render without a reader-facing decision router', async () => {
  const guide = await readFile(new URL('AgentKitGuide.astro', COMPONENT_ROOT), 'utf8');
  const hero = await readFile(new URL('agentkit/agentkit-hero.astro', COMPONENT_ROOT), 'utf8');
  const nav = await readFile(new URL('agentkit/agentkit-hub-nav.astro', COMPONENT_ROOT), 'utf8');
  const checklist = await readFile(new URL('agentkit/agentkit-migration-checklist.astro', COMPONENT_ROOT), 'utf8');
  const mapping = await readFile(new URL('agentkit/agentkit-command-mapping.astro', COMPONENT_ROOT), 'utf8');

  assert.ok(guide.indexOf('<AgentKitHero') < guide.indexOf('<AgentKitHubNav'));
  assert.ok(guide.indexOf('<AgentKitHubNav') < guide.indexOf('<AgentKitMigrationChecklist'));
  assert.doesNotMatch(guide, /AgentKitOperatorAttestation|initializeAgentKitLifecycleGuides/);
  assert.doesNotMatch(guide, /AgentKitPathLanes|AgentKitScenarioCommandGuide|AgentKitKitTargets|AgentKitQuickStart|AgentKitContinuityFaq/);
  assert.doesNotMatch(hero, /data-agentkit-lifecycle-router|data-agentkit-router-|agentkit\.router\./);
  assert.doesNotMatch(nav, /<form|name="|data-agentkit-lifecycle-router|data-agentkit-router-/);
  assert.match(nav, /href: '#migration-journey'/);
  assert.match(nav, /href: '#command-mapping'/);
  assert.match(nav, /href: '#legacy-skill-cleanup'/);
  assert.match(hero, /href="#migration-journey"/);
  assert.match(hero, /guides\/cli/);
  assert.match(hero, /guides\/what-is-agentkit/);
  for (const name of [
    'goal',
    'legacyOwnershipState',
    'metadataHealth',
    'scopeRelationship',
    'cleanupPreviewResult',
    'packageManagerEvidence',
    'dataCriticality',
    'pilotOptIn',
  ]) assert.doesNotMatch(hero, new RegExp(`name="${name}"`));
  assert.doesNotMatch(checklist, /data-agentkit-stage-command-panel hidden|name="completedStages"|data-agentkit-stage-label/);
  assert.doesNotMatch(mapping, /data-agentkit-downstream-actions hidden/);
  assert.doesNotMatch(mapping, /<th scope="col" class="w-12[^>]*>[\s\S]*agentkit\.mapping\.current/);
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
    'WhatIsAgentKitGuide.astro',
    'CLIGuide.astro',
    'agentkit/agentkit-hero.astro',
    'agentkit/agentkit-hub-nav.astro',
    'agentkit/agentkit-quick-start.astro',
    'agentkit/agentkit-migration-checklist.astro',
    'agentkit/agentkit-command-mapping.astro',
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

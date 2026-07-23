import assert from 'node:assert/strict';
import test from 'node:test';

import {
  AGENTKIT_SOURCE_SNAPSHOT,
  AGENTKIT_CREDENTIAL_TRANSPORTS,
  PUBLIC_AGENTKIT_RELEASE_CHANNELS,
  canClaimVerifiedInstall,
} from '../../src/data/guides/agentkit/agentkit-source-contract.ts';
import {
  AGENTKIT_CLI_FACTS,
  AGENTKIT_CLI_RELEASE_CATALOGS,
  createAgentKitCliFactIndex,
  getAgentKitCliCatalog,
  getStableAgentKitCliFacts,
} from '../../src/data/guides/agentkit/agentkit-cli-facts.ts';
import {
  AGENTKIT_MIGRATION_MAPPING_BY_LOCALE,
} from '../../src/data/guides/agentkit/agentkit-migration-mapping.ts';
import {
  AGENTKIT_CK_EXECUTABLE_DETECTORS,
  AGENTKIT_CK_REMOVAL_POLICIES,
  AGENTKIT_LEGACY_PROVIDER_CLEANUP_POLICIES,
  AGENTKIT_LIFECYCLE_COMMANDS,
  AGENTKIT_LIFECYCLE_STAGE_FACTS,
} from '../../src/data/guides/agentkit/agentkit-lifecycle-policy.ts';
import {
  AGENTKIT_KIT_SNAPSHOT_PROVENANCE,
  AGENTKIT_SKILL_FACTS,
} from '../../src/data/guides/agentkit/agentkit-skill-facts.ts';
import {
  AGENTKIT_TARGET_CAPABILITIES,
  getAgentKitSkillInvocation,
  getAgentKitTargetViews,
} from '../../src/data/guides/agentkit/agentkit-target-capabilities.ts';
import { cliCommandsCheatsheet } from '../../src/data/guides/cli-commands-cheatsheet.ts';

const REQUIRED_STABLE_CLI_IDS = [
  'install-unix',
  'install-windows',
  'new',
  'init',
  'update',
  'setup',
  'skills',
  'agents',
  'doctor',
  'versions',
  'config',
  'uninstall',
  'login-email',
  'login-api-key',
  'login-license',
  'whoami',
  'licenses',
  'logout',
  'kit-init',
  'kit-init-global',
  'kit-install',
  'kit-install-global',
  'kit-list',
  'kit-refresh',
  'migrate',
  'self-update',
  'audit',
  'gui',
];

test('source snapshot and every CLI fact carry stable audit metadata', () => {
  assert.equal(AGENTKIT_SOURCE_SNAPSHOT.verifiedAt, '2026-07-21');
  assert.equal(AGENTKIT_SOURCE_SNAPSHOT.releaseVersion, '2.4.0');
  assert.equal(AGENTKIT_SOURCE_SNAPSHOT.activeBetaVersion, '2.5.0-beta.1');
  assert.equal(AGENTKIT_SOURCE_SNAPSHOT.hasActiveBeta, true);
  assert.deepEqual(PUBLIC_AGENTKIT_RELEASE_CHANNELS, ['stable', 'beta']);
  assert.match(AGENTKIT_SOURCE_SNAPSHOT.sourceUrl, /^https:\/\//);

  for (const fact of AGENTKIT_CLI_FACTS) {
    assert.ok(fact.channel, `${fact.id} missing channel`);
    assert.match(fact.verifiedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.match(fact.sourceUrl, /^https:\/\//);
    assert.ok(fact.command.length > 0);
    assert.ok(Array.isArray(fact.flags));
    assert.equal(fact.evidenceClass, 'official-docs');
    assert.equal(fact.artifactKind, 'agentkit-cli');
    assert.equal(fact.artifactVersion, '2.4.0');
    assert.equal(fact.legacyStatus, 'current');
  }
});

test('stable and beta CLI catalogs are independent and never fall through across channels', () => {
  const stableFacts = getStableAgentKitCliFacts();
  const stableIds = new Set(stableFacts.map(({ id }) => id));

  for (const id of REQUIRED_STABLE_CLI_IDS) assert.ok(stableIds.has(id), `missing ${id}`);
  assert.ok(stableFacts.every(({ channel }) => channel === 'stable'));
  assert.equal(AGENTKIT_CLI_FACTS.filter(({ channel }) => channel === 'beta').length, 0);
  assert.equal(getAgentKitCliCatalog('stable'), AGENTKIT_CLI_RELEASE_CATALOGS.stable);
  assert.equal(getAgentKitCliCatalog('beta'), AGENTKIT_CLI_RELEASE_CATALOGS.beta);
  assert.equal(AGENTKIT_CLI_RELEASE_CATALOGS.stable.artifactVersion, '2.4.0');
  assert.equal(AGENTKIT_CLI_RELEASE_CATALOGS.beta.artifactVersion, '2.5.0-beta.1');
  assert.equal(AGENTKIT_CLI_RELEASE_CATALOGS.beta.fixtureId, 'agentkit-cli-beta-2.5.0-beta.1');
  assert.equal(AGENTKIT_CLI_RELEASE_CATALOGS.beta.facts.length, 0);
  assert.notEqual(AGENTKIT_CLI_RELEASE_CATALOGS.stable.facts, AGENTKIT_CLI_RELEASE_CATALOGS.beta.facts);

  const kitList = AGENTKIT_CLI_FACTS.find(({ id }) => id === 'kit-list');
  assert.equal(kitList?.command, 'ak kit list-kits');

  const migrate = AGENTKIT_CLI_FACTS.find(({ id }) => id === 'migrate');
  assert.equal(migrate?.command, 'ak migrate --from=ck');
  assert.ok(migrate?.flags.includes('--dry-run'));
  assert.ok(!migrate?.flags.includes('--apply'));

  const refresh = AGENTKIT_CLI_FACTS.find(({ id }) => id === 'kit-refresh');
  assert.equal(refresh?.command, 'ak kit refresh <kit> --yes');
  assert.ok(!refresh?.flags.includes('--apply'));
});

test('canonical CLI fact index rejects divergent duplicate channel/id facts', () => {
  const canonical = AGENTKIT_CLI_FACTS.find(({ id }) => id === 'doctor');
  assert.throws(() => createAgentKitCliFactIndex([
    canonical,
    { ...canonical, command: 'ak doctor --different' },
  ]), /divergent duplicate/i);
});

test('real CLI cheatsheet duplicates remain normalized to canonical facts', () => {
  const normalizedFlags = (flags = []) => flags.map((flag) => flag.split(/\s+/)[0]);
  const expectedOverlapIds = [
    'agents',
    'audit',
    'config',
    'doctor',
    'gui',
    'init',
    'kit-init',
    'licenses',
    'login-email',
    'migrate',
    'new',
    'self-update',
    'setup',
    'skills',
    'uninstall',
    'update',
    'versions',
    'whoami',
  ];
  const publicDuplicates = cliCommandsCheatsheet.flatMap((view) => {
    const fact = AGENTKIT_CLI_FACTS.find(({ id, channel }) => (
      id === view.id && channel === view.channel
    ));
    return fact ? [{ view, fact }] : [];
  });

  assert.deepEqual(publicDuplicates.map(({ view }) => view.id).sort(), expectedOverlapIds);
  for (const { view, fact } of publicDuplicates) {
    assert.equal(view.name, fact.command, `${view.id} command drift`);
    assert.equal(view.mutatesDisk, fact.mutatesDisk, `${view.id} mutatesDisk drift`);
    assert.deepEqual(normalizedFlags(view.keyFlags), [...fact.flags], `${view.id} flags drift`);
    assert.equal(view.channel, fact.channel, `${view.id} channel drift`);
    assert.equal(view.sourceUrl, fact.sourceUrl, `${view.id} source drift`);
    assert.equal(view.verifiedAt, fact.verifiedAt, `${view.id} verification drift`);
  }
});

test('installer integrity policy never overclaims an unpinned latest artifact', () => {
  assert.equal(canClaimVerifiedInstall('official-installer-latest'), false);
});

test('credential transports encode the three official login methods and lifecycle safety', () => {
  assert.deepEqual(
    AGENTKIT_CREDENTIAL_TRANSPORTS.map(({ id }) => id).sort(),
    ['api-key', 'email-otp', 'license-key'],
  );

  for (const transport of AGENTKIT_CREDENTIAL_TRANSPORTS) {
    assert.ok(transport.masking);
    assert.ok(transport.leastPrivilege);
    assert.ok(transport.forkPullRequestIsolation);
    assert.ok(transport.rotationAndRevocation);
    assert.ok(transport.exposureNotes);
    assert.ok(transport.ciHandling);
  }

  const license = AGENTKIT_CREDENTIAL_TRANSPORTS.find(({ id }) => id === 'license-key');
  assert.match(license.officialMethod, /Desktop App/i);
  const email = AGENTKIT_CREDENTIAL_TRANSPORTS.find(({ id }) => id === 'email-otp');
  assert.match(email.officialMethod, /CLI registry session/i);
});

test('EN and VI migration mappings have identical executable structure', () => {
  const normalize = (rows) => rows.map(({ id, category, legacy, agentkit, status, copyPolicy }) => ({
    id,
    category,
    legacy,
    agentkit,
    status,
    copyPolicy,
  }));

  assert.deepEqual(
    normalize(AGENTKIT_MIGRATION_MAPPING_BY_LOCALE.en),
    normalize(AGENTKIT_MIGRATION_MAPPING_BY_LOCALE.vi),
  );

  const commandPairs = new Map(
    AGENTKIT_MIGRATION_MAPPING_BY_LOCALE.en.map(({ legacy, agentkit }) => [legacy, agentkit]),
  );
  assert.equal(commandPairs.get('ck init'), 'ak init');
  assert.equal(commandPairs.get('/ck:*'), '/ak:*');
  assert.equal(commandPairs.get('/ckm:*'), '/ak:*');
  assert.equal(commandPairs.get('GitHub PAT authentication'), 'ak login --email <account-email>');
  const migrate = AGENTKIT_MIGRATION_MAPPING_BY_LOCALE.en.find(({ id }) => id === 'migrate');
  assert.equal(migrate.copyPolicy, 'preview-only');
  assert.equal(migrate.defaultCta, 'ak migrate --from=ck');
  assert.doesNotMatch(migrate.defaultCta, /apply|dry-run=false|--yes/);
});

test('lifecycle operations keep detector and verification read-only before manual removal', () => {
  assert.deepEqual(AGENTKIT_LIFECYCLE_STAGE_FACTS.map(({ id }) => id), [
    'backup',
    'cleanup-ck-ownership',
    'confirm-clean-scope',
    'install-ak',
    'verify-canary',
    'observe',
    'remove-ck-control-plane',
  ]);
  assert.deepEqual(AGENTKIT_CK_EXECUTABLE_DETECTORS.map(({ platform }) => platform), ['macos', 'linux', 'windows']);
  assert.ok(AGENTKIT_CK_EXECUTABLE_DETECTORS.every(({ copyable }) => copyable));
  assert.ok(AGENTKIT_LIFECYCLE_COMMANDS
    .filter(({ stage }) => ['cleanup-ck-ownership', 'confirm-clean-scope', 'verify-canary'].includes(stage))
    .every(({ safety, copyable, sourceUrl }) => safety === 'read-only' && copyable && /^https:\/\//.test(sourceUrl)));
  assert.ok(AGENTKIT_CK_REMOVAL_POLICIES.every(({ copyable }) => copyable === false));
  assert.equal(AGENTKIT_CK_REMOVAL_POLICIES.find(({ packageManager }) => packageManager === 'unknown').command, null);
  assert.ok(AGENTKIT_CK_REMOVAL_POLICIES.every(({ packageManager }) => packageManager !== 'homebrew'));
});

test('legacy skill cleanup gates provider removal behind inventory and verification', () => {
  const cleanup = AGENTKIT_LIFECYCLE_COMMANDS.filter(({ stage }) => stage === 'cleanup-ck-ownership');
  assert.ok(cleanup.length > 0);
  assert.ok(cleanup.every(({ safety, copyable, command }) => (
    safety === 'read-only' && copyable && !command.includes('rm -rf')
  )));

  assert.deepEqual(
    AGENTKIT_LEGACY_PROVIDER_CLEANUP_POLICIES.map(({ target }) => target),
    ['claude-code', 'codex'],
  );
  assert.ok(AGENTKIT_LEGACY_PROVIDER_CLEANUP_POLICIES
    .every(({ automaticBulkRemovalDocumented }) => automaticBulkRemovalDocumented === false));
  assert.ok(AGENTKIT_LEGACY_PROVIDER_CLEANUP_POLICIES
    .find(({ target }) => target === 'codex')
    .legacyDestinationEvidence.includes('.agents/skills/source-command-*/SKILL.md'));
});

test('core skill facts are reproducible and use target-native invocation syntax', () => {
  const ids = new Set(AGENTKIT_SKILL_FACTS.map(({ id }) => id));
  for (const id of ['ak:ask', 'ak:plan', 'ak:cook', 'ak:fix', 'ak:test']) {
    assert.ok(ids.has(id), `missing ${id}`);
  }

  for (const fact of AGENTKIT_SKILL_FACTS) {
    assert.match(fact.upstreamSha256, /^[a-f0-9]{64}$/);
    assert.equal(fact.snapshotProvenance, 'agentkit-install-manifest');
    assert.equal(fact.snapshotKitVersion, '0.2.0');
    assert.match(fact.sourceUrl, /^https:\/\//);
    assert.match(fact.invocations.claudeCode, /^\/ak:/);
    assert.match(fact.invocations.codex, /^\$ak:/);
    assert.ok(!fact.invocations.codex.startsWith('/'));
    assert.equal(fact.evidenceClass, 'implementation-audit');
    assert.equal(fact.artifactKind, 'engineer-kit');
    assert.equal(fact.artifactVersion, fact.snapshotKitVersion);
  }
  assert.equal(AGENTKIT_KIT_SNAPSHOT_PROVENANCE.engineer.artifactVersion, '0.2.0');
  assert.equal(AGENTKIT_KIT_SNAPSHOT_PROVENANCE.marketing.artifactVersion, null);
  assert.equal(
    AGENTKIT_KIT_SNAPSHOT_PROVENANCE.marketing.evidenceStatus,
    'reviewed-snapshot-unavailable',
  );
});

test('Claude Code and Codex target capabilities remain stable and syntax-specific', () => {
  assert.deepEqual(
    AGENTKIT_TARGET_CAPABILITIES.map(({ target }) => target).sort(),
    ['claude-code', 'codex'],
  );

  const claudeCode = AGENTKIT_TARGET_CAPABILITIES.find(({ target }) => target === 'claude-code');
  const codex = AGENTKIT_TARGET_CAPABILITIES.find(({ target }) => target === 'codex');
  assert.equal(claudeCode.invocationMode, 'slash-command');
  assert.equal(claudeCode.invocationPrefix, '/ak:');
  assert.equal(codex.invocationMode, 'skill-reference');
  assert.equal(codex.invocationPrefix, '$ak:');
  assert.ok(!codex.invocationPrefix.startsWith('/'));
});

test('target views resolve install commands and invocations from canonical facts', () => {
  const views = getAgentKitTargetViews();
  const claudeCode = views.find(({ target }) => target === 'claude-code');
  const codex = views.find(({ target }) => target === 'codex');

  assert.equal(claudeCode.installScope, 'project-local');
  assert.equal(claudeCode.installCommand, 'ak kit init engineer --target claude-code');
  assert.equal(claudeCode.invocationWildcard, '/ak:*');
  assert.equal(claudeCode.installCopyable, false);
  assert.equal(codex.installScope, 'project-local');
  assert.equal(codex.installCommand, 'ak kit install engineer --target codex');
  assert.equal(codex.invocationWildcard, '$ak:*');
  assert.equal(codex.installCopyable, false);
  assert.equal(getAgentKitSkillInvocation('codex', 'plan'), '$ak:plan');
  assert.equal(getAgentKitSkillInvocation('claude-code', 'plan'), '/ak:plan');
  assert.ok(views.every(({ channel, status }) => channel === 'stable' && status === 'supported'));

  const globalViews = getAgentKitTargetViews('engineer', 'global');
  assert.equal(globalViews.find(({ target }) => target === 'claude-code').installCommand, 'ak kit init engineer --target claude-code --global');
  assert.equal(globalViews.find(({ target }) => target === 'codex').installCommand, 'ak kit install engineer --target codex --global');
});

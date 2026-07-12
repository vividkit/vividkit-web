import assert from 'node:assert/strict';
import test from 'node:test';

import {
  AGENTKIT_SOURCE_SNAPSHOT,
  AGENTKIT_CREDENTIAL_TRANSPORTS,
  canClaimVerifiedInstall,
} from '../../src/data/guides/agentkit/agentkit-source-contract.ts';
import {
  AGENTKIT_CLI_FACTS,
  getStableAgentKitCliFacts,
} from '../../src/data/guides/agentkit/agentkit-cli-facts.ts';
import {
  AGENTKIT_MIGRATION_MAPPING_BY_LOCALE,
} from '../../src/data/guides/agentkit/agentkit-migration-mapping.ts';
import {
  AGENTKIT_MIGRATION_OPERATIONAL_FACTS,
  getMigrationOperationalFact,
} from '../../src/data/guides/agentkit/agentkit-migration-operational-facts.ts';
import {
  AGENTKIT_LEGACY_CLEANUP_COMMANDS,
  AGENTKIT_LEGACY_CLEANUP_SOURCES,
  AGENTKIT_LEGACY_PROVIDER_CLEANUP_POLICIES,
} from '../../src/data/guides/agentkit/agentkit-legacy-cleanup-facts.ts';
import { AGENTKIT_SKILL_FACTS } from '../../src/data/guides/agentkit/agentkit-skill-facts.ts';
import {
  AGENTKIT_TARGET_CAPABILITIES,
  getAgentKitSkillInvocation,
  getAgentKitTargetViews,
} from '../../src/data/guides/agentkit/agentkit-target-capabilities.ts';

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
  'login-license',
  'login-email',
  'login-api-key',
  'whoami',
  'licenses',
  'logout',
  'kit-init',
  'kit-install',
  'kit-list',
  'self-update',
];

test('source snapshot and every CLI fact carry stable audit metadata', () => {
  assert.equal(AGENTKIT_SOURCE_SNAPSHOT.verifiedAt, '2026-07-12');
  assert.match(AGENTKIT_SOURCE_SNAPSHOT.sourceUrl, /^https:\/\//);

  for (const fact of AGENTKIT_CLI_FACTS) {
    assert.ok(fact.channel, `${fact.id} missing channel`);
    assert.match(fact.verifiedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.match(fact.sourceUrl, /^https:\/\//);
    assert.ok(fact.command.length > 0);
    assert.ok(Array.isArray(fact.flags));
  }
});

test('stable CLI selector covers documented commands and excludes local beta additions', () => {
  const stableFacts = getStableAgentKitCliFacts();
  const stableIds = new Set(stableFacts.map(({ id }) => id));

  for (const id of REQUIRED_STABLE_CLI_IDS) assert.ok(stableIds.has(id), `missing ${id}`);
  assert.ok(stableFacts.every(({ channel }) => channel === 'stable'));
  assert.ok(!stableIds.has('migrate'));
  assert.ok(!stableIds.has('kit-refresh'));

  const betaFacts = AGENTKIT_CLI_FACTS.filter(({ channel }) => channel === 'beta');
  assert.deepEqual(betaFacts.map(({ id }) => id).sort(), ['kit-refresh', 'migrate']);
  assert.ok(betaFacts.every(({ releaseVersion }) => releaseVersion === '1.2.0-beta.1'));
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
});

test('EN and VI migration mappings have identical executable structure', () => {
  const normalize = (rows) => rows.map(({ id, category, legacy, agentkit, status }) => ({
    id,
    category,
    legacy,
    agentkit,
    status,
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
  assert.equal(commandPairs.get('GitHub PAT authentication'), 'ak login');
});

test('migration operations stage safe preflight before non-copyable destructive removal', () => {
  for (const platform of ['macos', 'linux', 'windows']) {
    const preflight = getMigrationOperationalFact('preflight', platform);
    const verifyInstall = getMigrationOperationalFact('verify-install', platform);
    const collisionCheck = getMigrationOperationalFact('collision-check', platform);
    const removal = getMigrationOperationalFact('legacy-removal', platform);
    assert.equal(preflight.safety, 'read-only');
    assert.equal(preflight.copyable, true);
    assert.equal(preflight.copyGate, 'safe');
    assert.equal(verifyInstall.command, 'ak --version');
    assert.equal(verifyInstall.copyable, true);
    assert.equal(collisionCheck.command, 'ak doctor --check ck_shim_collision');
    assert.equal(collisionCheck.copyable, true);
    assert.equal(removal.command, 'npm uninstall -g claudekit-cli');
    assert.equal(removal.safety, 'destructive');
    assert.equal(removal.copyable, false);
    assert.equal(removal.copyGate, 'explicit-consent-after-agentkit-verification');
  }

  for (const fact of AGENTKIT_MIGRATION_OPERATIONAL_FACTS) {
    assert.equal(fact.channel, 'stable');
    assert.match(fact.sourceUrl, /^https:\/\//);
    assert.equal(fact.verifiedAt, '2026-07-12');
  }
});

test('legacy skill cleanup gates provider removal behind inventory and verification', () => {
  assert.deepEqual(
    AGENTKIT_LEGACY_CLEANUP_SOURCES.map(({ id, channel }) => [id, channel]),
    [
      ['agentkit-docs', 'stable'],
      ['claudekit-migrate', 'legacy'],
      ['claudekit-uninstall', 'legacy'],
    ],
  );
  assert.ok(AGENTKIT_LEGACY_CLEANUP_SOURCES.every(({ verifiedAt }) => verifiedAt === '2026-07-12'));

  const stageOrder = [...new Set(AGENTKIT_LEGACY_CLEANUP_COMMANDS.map(({ stage }) => stage))];
  assert.deepEqual(stageOrder, [
    'discover-providers',
    'verify-agentkit',
    'preview-source-cleanup',
    'remove-ck-source',
  ]);
  assert.equal(AGENTKIT_LEGACY_CLEANUP_COMMANDS[0].command, 'ck migrate --dry-run');
  assert.equal(AGENTKIT_LEGACY_CLEANUP_COMMANDS[1].command, 'ak kit list');
  assert.ok(AGENTKIT_LEGACY_CLEANUP_COMMANDS
    .filter(({ stage }) => stage === 'remove-ck-source')
    .every(({ safety, copyable, renderPolicy }) => (
      safety === 'destructive'
      && copyable === false
      && renderPolicy === 'source-record-only'
    )));
  assert.ok(AGENTKIT_LEGACY_CLEANUP_COMMANDS
    .filter(({ safety }) => safety === 'read-only')
    .every(({ renderPolicy }) => renderPolicy === 'guide-command'));
  assert.ok(AGENTKIT_LEGACY_CLEANUP_COMMANDS.every(({ command }) => !command.includes('rm -rf')));

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
  }
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

  assert.equal(claudeCode.installCommand, 'ak kit init engineer --target claude-code --global');
  assert.equal(claudeCode.invocationWildcard, '/ak:*');
  assert.equal(claudeCode.installCopyable, false);
  assert.equal(codex.installCommand, 'ak kit install engineer --target codex --global');
  assert.equal(codex.invocationWildcard, '$ak:*');
  assert.equal(codex.installCopyable, false);
  assert.equal(getAgentKitSkillInvocation('codex', 'plan'), '$ak:plan');
  assert.equal(getAgentKitSkillInvocation('claude-code', 'plan'), '/ak:plan');
  assert.ok(views.every(({ channel, status }) => channel === 'stable' && status === 'supported'));
});

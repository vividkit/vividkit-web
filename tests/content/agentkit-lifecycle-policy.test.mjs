import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { copyFile, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import test from 'node:test';

import {
  AGENTKIT_CK_OWNERSHIP_PROBES,
  AGENTKIT_LIFECYCLE_STAGES,
  AGENTKIT_LIFECYCLE_STAGE_IDS,
  routeAgentKitLifecycle,
  validateOperatorAttestation,
} from '../../src/data/guides/agentkit/agentkit-lifecycle-policy.ts';
import {
  AGENTKIT_PUBLICATION_RECORD,
  evaluateAgentKitPublicationRecord,
} from '../../src/data/guides/agentkit/agentkit-publication-policy.ts';
import {
  AGENTKIT_PUBLICATION_SOURCE_CLOSURE,
  canonicalizeAgentKitPublicationRecord,
  canonicalizeAgentKitPublicationSource,
  collectAgentKitTailwindScanRoots,
  collectAgentKitTailwindScanRootsFromGit,
  computeAgentKitPublicationKnownSourceClosure,
  computeAgentKitPublicationRecordDigest,
  computeAgentKitPublicationSourceClosure,
} from '../../scripts/agentkit-publication-source-closure.mjs';

const ROOT = new URL('../../', import.meta.url);

function normalizedReleasePayload(fixture) {
  return {
    schemaVersion: fixture.schemaVersion,
    id: fixture.id,
    product: fixture.product,
    channel: fixture.channel,
    version: fixture.version,
    releaseStatus: fixture.releaseStatus,
    verifiedAt: fixture.verifiedAt,
    sourceUrl: fixture.sourceUrl,
    sourceObservationId: fixture.sourceObservationId,
    evidenceClass: fixture.evidenceClass,
    claims: fixture.claims,
  };
}

function digestNormalizedFixture(relativePath) {
  const fixture = JSON.parse(readFileSync(new URL(relativePath, ROOT), 'utf8'));
  return createHash('sha256').update(JSON.stringify(normalizedReleasePayload(fixture))).digest('hex');
}

const actualBuildInputs = {
  stableFixtureSha256: digestNormalizedFixture('tests/fixtures/agentkit-release/stable-v2.3.0.json'),
  betaFixtureSha256: digestNormalizedFixture('tests/fixtures/agentkit-release/beta-v2.3.1-beta.1.json'),
  sourceClosureSha256: await computeAgentKitPublicationSourceClosure(),
  publicationRecordSha256: await computeAgentKitPublicationRecordDigest(),
};
const reviewedBuildInputs = {
  ...actualBuildInputs,
  publicationRecordSha256: 'b'.repeat(64),
  reviewedVividKitSha: AGENTKIT_PUBLICATION_RECORD.vividKitSha,
  reviewedSourceClosureSha256: actualBuildInputs.sourceClosureSha256,
  reviewedApprovalRevisionSha: 'a'.repeat(40),
  reviewedPublicationRecordSha256: 'b'.repeat(64),
};

const completeAttestation = {
  startedAt: '2026-07-10T00:00:00Z',
  endedAt: '2026-07-13T00:00:00Z',
  reviewedAt: '2026-07-14T00:00:00Z',
  canaryResult: 'pass',
  incidentStatus: 'none',
  acknowledgedAdvisoryOnly: true,
};

const baseInput = {
  publicReleaseChannel: 'stable',
  goal: 'cutover',
  legacyOwnershipState: 'clean-single-scope',
  metadataHealth: 'healthy',
  scopeRelationship: 'ck-global-ak-project-local',
  cleanupPreviewResult: 'clean',
  packageManagerEvidence: 'npm',
  dataCriticality: 'standard',
  pilotOptIn: false,
  canaryOutcome: 'not-run',
  observationEvidence: null,
  completedStages: [],
};

test('detector sequence includes read-only package ownership probes before removal selection', () => {
  assert.deepEqual(AGENTKIT_CK_OWNERSHIP_PROBES.map(({ packageManager }) => packageManager), [
    'bun',
    'npm',
    'pnpm',
    'yarn',
  ]);
  for (const probe of AGENTKIT_CK_OWNERSHIP_PROBES) {
    assert.ok(probe.commands.length > 0, probe.packageManager);
    assert.ok(probe.commands.every((command) => command.safety === 'read-only'));
    assert.ok(probe.commands.every((command) => !/\b(?:remove|uninstall|rm)\b/i.test(command.command)));
    assert.match(probe.sourceUrl, /^https:\/\/(?:bun\.sh|docs\.npmjs\.com|pnpm\.io|classic\.yarnpkg\.com)\//);
  }
  assert.ok(
    AGENTKIT_CK_OWNERSHIP_PROBES
      .find(({ packageManager }) => packageManager === 'bun')
      .commands.some(({ command }) => /bun pm ls -g claudekit-cli/.test(command)),
    'Bun must prove package identity, not only the global bin directory',
  );
});

test('fresh install starts with a mandatory backup and cannot jump directly to install', () => {
  const fresh = {
    ...baseInput,
    goal: 'install',
    legacyOwnershipState: 'absent',
    scopeRelationship: 'none',
    cleanupPreviewResult: 'not-applicable',
    packageManagerEvidence: 'none',
  };
  assert.deepEqual(routeAgentKitLifecycle(fresh).stageStates.map(({ state }) => state), [
    'advisory-ready',
    'not-applicable',
    'not-applicable',
    'blocked',
    'blocked',
    'blocked',
    'not-applicable',
  ]);
  assert.deepEqual(routeAgentKitLifecycle({ ...fresh, completedStages: ['backup'] }).stageStates.map(({ state }) => state), [
    'completed',
    'not-applicable',
    'not-applicable',
    'advisory-ready',
    'blocked',
    'blocked',
    'not-applicable',
  ]);
  const observed = routeAgentKitLifecycle({
    ...fresh,
    canaryOutcome: 'pass',
    observationEvidence: completeAttestation,
    completedStages: ['backup', 'install-ak', 'verify-canary', 'observe'],
  });
  assert.deepEqual(observed.stageStates.map(({ state }) => state), [
    'completed',
    'not-applicable',
    'not-applicable',
    'completed',
    'completed',
    'completed',
    'not-applicable',
  ]);
  assert.equal(observed.eligibility, 'advisory-ready');
});

test('publication closure measures lifecycle/removal code and separately binds the complete authority record', () => {
  for (const path of [
    'src/components/guides/agentkit/agentkit-legacy-skill-cleanup.astro',
    'src/components/guides/agentkit/agentkit-migration-checklist.astro',
    'src/components/guides/agentkit/agentkit-advanced-references.astro',
    'src/data/guides/agentkit/agentkit-lifecycle-guide-facts.ts',
    'src/data/guides/agentkit/agentkit-lifecycle-policy.ts',
    'src/i18n/en/agentkit.ts',
    'src/i18n/vi/agentkit.ts',
    'src/components/guides/cli-guide/AgentKitCliSetup.astro',
    'src/components/guides/cli-guide/AgentKitCliLifecycle.astro',
    'src/components/guides/cli-commands/cli-commands-cheatsheet.astro',
    'src/components/guides/TerminalSnippet.astro',
    'src/pages/guides/agentkit.astro',
    'src/pages/vi/guides/agentkit.astro',
    'src/pages/guides/cli.astro',
    'src/pages/vi/guides/cli.astro',
    'src/pages/guides/cli-commands.astro',
    'src/pages/vi/guides/cli-commands.astro',
    'src/pages/guides/coexistence.astro',
    'src/pages/vi/guides/coexistence.astro',
    'src/pages/llms.txt.ts',
    'scripts/generate-llms-full.mjs',
    'src/styles/global.css',
    'src/pages/guides/commands.astro',
    'src/components/guides/CommandsGuide.astro',
    'src/components/guides/commands/commands-categories-grid.astro',
    'tailwind.config.mjs',
    'src/pages/guides/promotions.astro',
  ]) assert.ok(AGENTKIT_PUBLICATION_SOURCE_CLOSURE.includes(path), path);

  const recordPath = 'src/data/guides/agentkit/agentkit-publication-policy.ts';
  const source = readFileSync(new URL(recordPath, ROOT), 'utf8');
  const closureCanonical = canonicalizeAgentKitPublicationSource(recordPath, source);
  const recordCanonical = canonicalizeAgentKitPublicationRecord(source);
  assert.notEqual(closureCanonical, source);
  assert.equal(
    canonicalizeAgentKitPublicationRecord(source.replace('approvalRevisionSha: null', `approvalRevisionSha: '${'a'.repeat(40)}'`)),
    recordCanonical,
  );
  assert.notEqual(
    canonicalizeAgentKitPublicationRecord(source.replace("status: 'hold'", "status: 'published'")),
    recordCanonical,
    'publication status must remain bound to the reviewed record',
  );
  assert.notEqual(
    canonicalizeAgentKitPublicationRecord(source.replace('reviewer: null', "reviewer: 'forged'")),
    recordCanonical,
    'review authority fields must remain bound to the reviewed record',
  );
});

test('every enumerated publication source mutation changes the closure', async (t) => {
  const temp = await mkdtemp(join(tmpdir(), 'agentkit-publication-closure-'));
  t.after(() => rm(temp, { recursive: true, force: true }));
  for (const relativePath of AGENTKIT_PUBLICATION_SOURCE_CLOSURE) {
    const destination = join(temp, relativePath);
    await mkdir(dirname(destination), { recursive: true });
    await copyFile(new URL(relativePath, ROOT), destination);
  }
  const baseline = await computeAgentKitPublicationKnownSourceClosure(temp);
  for (const relativePath of AGENTKIT_PUBLICATION_SOURCE_CLOSURE) {
    const target = join(temp, relativePath);
    const original = await readFile(target);
    if (relativePath === 'vercel.json') {
      const config = JSON.parse(original);
      await writeFile(target, `${JSON.stringify({ platformMetadata: true, ...config })}\n`);
      assert.equal(
        await computeAgentKitPublicationKnownSourceClosure(temp),
        baseline,
        'platform-added Vercel metadata must not rewrite the reviewed install contract',
      );
      await writeFile(target, `${JSON.stringify({ ...config, installCommand: 'npm install' })}\n`);
      await assert.rejects(
        computeAgentKitPublicationKnownSourceClosure(temp),
        /reviewed npm ci install contract/,
      );
      await writeFile(target, original);
      continue;
    }
    await writeFile(target, Buffer.concat([original, Buffer.from('\n// publication-closure-mutation\n')]));
    assert.notEqual(await computeAgentKitPublicationKnownSourceClosure(temp), baseline, relativePath);
    await writeFile(target, original);
  }
});

test('publication graph follows new literal imports and refuses indeterminate runtime imports', async (t) => {
  const temp = await mkdtemp(join(tmpdir(), 'agentkit-publication-import-graph-'));
  t.after(() => rm(temp, { recursive: true, force: true }));
  for (const relativePath of AGENTKIT_PUBLICATION_SOURCE_CLOSURE) {
    const destination = join(temp, relativePath);
    await mkdir(dirname(destination), { recursive: true });
    await copyFile(new URL(relativePath, ROOT), destination);
  }
  const dependencyPath = join(temp, 'src/scripts/publication-extra-dependency.mjs');
  await writeFile(dependencyPath, 'export const publicationExtra = 1;\n');
  const layoutPath = join(temp, 'src/layouts/MainLayout.astro');
  const layout = await readFile(layoutPath, 'utf8');
  await writeFile(
    layoutPath,
    layout.replace('---\n', "---\nimport '../scripts/publication-extra-dependency.mjs';\n"),
  );
  const baseline = await computeAgentKitPublicationSourceClosure(temp);
  await writeFile(dependencyPath, 'export const publicationExtra = 2;\n');
  assert.notEqual(await computeAgentKitPublicationSourceClosure(temp), baseline);
  await writeFile(dependencyPath, "const runtimePath = './runtime-selected.mjs';\nvoid import(runtimePath);\n");
  await assert.rejects(
    computeAgentKitPublicationSourceClosure(temp),
    /indeterminate dynamic import/,
  );
});

test('reviewed Tailwind inventory comes from the reviewed Git tree, not the current worktree', async (t) => {
  const temp = await mkdtemp(join(tmpdir(), 'agentkit-tailwind-reviewed-tree-'));
  t.after(() => rm(temp, { recursive: true, force: true }));
  await mkdir(join(temp, 'src/legacy-ck'), { recursive: true });
  await writeFile(join(temp, 'src/keep.ts'), "export const keep = 'block';\n");
  await writeFile(join(temp, 'src/delete-after-review.ts'), "export const reviewed = 'block';\n");
  await writeFile(join(temp, 'src/legacy-ck/excluded.ts'), "export const legacy = 'block';\n");
  execFileSync('git', ['init', '--quiet'], { cwd: temp });
  execFileSync('git', ['add', '.'], { cwd: temp });
  execFileSync('git', [
    '-c', 'user.name=VividKit Test',
    '-c', 'user.email=vividkit-test@example.invalid',
    'commit', '--quiet', '-m', 'test fixture',
  ], { cwd: temp });
  const revision = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: temp, encoding: 'utf8' }).trim();
  await rm(join(temp, 'src/delete-after-review.ts'));

  assert.deepEqual(collectAgentKitTailwindScanRoots(temp), ['src/keep.ts']);
  assert.deepEqual(await collectAgentKitTailwindScanRootsFromGit(revision, temp), [
    'src/delete-after-review.ts',
    'src/keep.ts',
  ]);
});

test('router keeps the seven lifecycle stage IDs stable and ordered', () => {
  assert.deepEqual(AGENTKIT_LIFECYCLE_STAGE_IDS, [
    'backup',
    'cleanup-ck-ownership',
    'confirm-clean-scope',
    'install-ak',
    'verify-canary',
    'observe',
    'remove-ck-control-plane',
  ]);

  const result = routeAgentKitLifecycle(baseInput);
  assert.deepEqual(result.stageStates.map(({ id }) => id), AGENTKIT_LIFECYCLE_STAGE_IDS);
  assert.equal(result.stageStates.at(-1).state, 'blocked');
  assert.equal(result.eligibility, 'blocked');
});

test('router exposes canonical predecessor facts and blocks every skipped successor', () => {
  assert.deepEqual(AGENTKIT_LIFECYCLE_STAGES, [
    { id: 'backup', predecessor: null },
    { id: 'cleanup-ck-ownership', predecessor: 'backup' },
    { id: 'confirm-clean-scope', predecessor: 'cleanup-ck-ownership' },
    { id: 'install-ak', predecessor: 'confirm-clean-scope' },
    { id: 'verify-canary', predecessor: 'install-ak' },
    { id: 'observe', predecessor: 'verify-canary' },
    { id: 'remove-ck-control-plane', predecessor: 'observe' },
  ]);

  for (let index = 0; index < AGENTKIT_LIFECYCLE_STAGE_IDS.length; index += 1) {
    const completedStages = AGENTKIT_LIFECYCLE_STAGE_IDS.slice(0, index);
    const result = routeAgentKitLifecycle({
      ...baseInput,
      completedStages,
      canaryOutcome: completedStages.includes('verify-canary') ? 'pass' : 'not-run',
      observationEvidence: completedStages.includes('observe') ? completeAttestation : null,
    });
    for (const [stageIndex, stage] of result.stageStates.entries()) {
      const expected = stageIndex < index
        ? 'completed'
        : stageIndex === index ? 'advisory-ready' : 'blocked';
      assert.equal(stage.state, expected, `${stage.id} when ${completedStages.join(',')}`);
    }
  }
});

test('claimed completion cannot bypass canary or observation semantics', () => {
  const noCanary = routeAgentKitLifecycle({
    ...baseInput,
    completedStages: AGENTKIT_LIFECYCLE_STAGE_IDS,
  });
  assert.deepEqual(noCanary.stageStates.map(({ state }) => state), [
    'completed',
    'completed',
    'completed',
    'completed',
    'blocked',
    'blocked',
    'blocked',
  ]);

  const noObservation = routeAgentKitLifecycle({
    ...baseInput,
    canaryOutcome: 'pass',
    completedStages: AGENTKIT_LIFECYCLE_STAGE_IDS,
  });
  assert.deepEqual(noObservation.stageStates.map(({ state }) => state), [
    'completed',
    'completed',
    'completed',
    'completed',
    'completed',
    'blocked',
    'blocked',
  ]);

  const validCompletion = routeAgentKitLifecycle({
    ...baseInput,
    canaryOutcome: 'pass',
    observationEvidence: completeAttestation,
    completedStages: AGENTKIT_LIFECYCLE_STAGE_IDS,
  });
  assert.ok(validCompletion.stageStates.every(({ state }) => state === 'completed'));
  assert.equal(validCompletion.removalPackageManager, 'npm');

  const unknownManager = routeAgentKitLifecycle({
    ...baseInput,
    packageManagerEvidence: 'unknown',
  });
  assert.equal(unknownManager.removalPackageManager, null);
});

test('router classifies self-service, support-assisted, recovery, and closed-beta boundaries', () => {
  const scenarios = [
    {
      name: 'fresh clean install',
      input: {
        ...baseInput,
        goal: 'install',
        legacyOwnershipState: 'absent',
        scopeRelationship: 'none',
        cleanupPreviewResult: 'not-applicable',
        packageManagerEvidence: 'none',
      },
      lane: 'fresh-install',
      supportLevel: 'self-service',
      copyPolicy: 'safe-setup',
    },
    {
      name: 'clean cutover',
      input: baseInput,
      lane: 'clean-cutover',
      supportLevel: 'self-service',
      copyPolicy: 'stage-gated',
    },
    {
      name: 'closed beta pilot',
      input: {
        ...baseInput,
        publicReleaseChannel: 'beta',
        goal: 'coexistence',
        pilotOptIn: true,
      },
      lane: 'clean-coexistence-pilot',
      supportLevel: 'self-service',
      copyPolicy: 'closed-beta-only',
    },
    {
      name: 'failed canary',
      input: { ...baseInput, canaryOutcome: 'fail' },
      lane: 'recovery',
      supportLevel: 'support-assisted',
      copyPolicy: 'recovery-only',
    },
  ];

  for (const scenario of scenarios) {
    const result = routeAgentKitLifecycle(scenario.input);
    assert.equal(result.lane, scenario.lane, scenario.name);
    assert.equal(result.supportLevel, scenario.supportLevel, scenario.name);
    assert.equal(result.copyPolicy, scenario.copyPolicy, scenario.name);
  }
});

test('mixed/custom ownership, unhealthy metadata, unsafe preview, critical data, and unknown manager fail closed', () => {
  const unsafeInputs = [
    { legacyOwnershipState: 'mixed' },
    { legacyOwnershipState: 'custom' },
    { metadataHealth: 'corrupt' },
    { metadataHealth: 'missing' },
    { cleanupPreviewResult: 'dirty' },
    { cleanupPreviewResult: 'unknown' },
    { dataCriticality: 'critical' },
    { packageManagerEvidence: 'unknown' },
  ];

  for (const override of unsafeInputs) {
    const result = routeAgentKitLifecycle({ ...baseInput, ...override });
    assert.equal(result.lane, 'support-assisted', JSON.stringify(override));
    assert.equal(result.supportLevel, 'support-assisted', JSON.stringify(override));
    assert.equal(result.copyPolicy, 'no-destructive-copy', JSON.stringify(override));
    assert.equal(result.copyableDestructiveCommands.length, 0, JSON.stringify(override));
  }
  assert.equal(
    routeAgentKitLifecycle({ ...baseInput, packageManagerEvidence: 'homebrew' }).lane,
    'support-assisted',
  );

  for (const override of [
    { legacyOwnershipState: 'mixed', canaryOutcome: 'fail' },
    { legacyOwnershipState: 'custom', canaryOutcome: 'fail' },
    { metadataHealth: 'corrupt', canaryOutcome: 'fail' },
    { metadataHealth: 'missing', canaryOutcome: 'fail' },
  ]) {
    assert.equal(routeAgentKitLifecycle({ ...baseInput, ...override }).lane, 'support-assisted');
  }

  assert.equal(routeAgentKitLifecycle({
    ...baseInput,
    goal: 'install',
    legacyOwnershipState: 'absent',
    scopeRelationship: 'none',
    cleanupPreviewResult: 'not-applicable',
    packageManagerEvidence: 'unknown',
  }).lane, 'support-assisted');

  assert.equal(routeAgentKitLifecycle({
    ...baseInput,
    scopeRelationship: 'unknown',
    packageManagerEvidence: 'none',
  }).lane, 'support-assisted');
});

test('coexistence requires beta opt-in, exact CK-global/AK-local scope, and clean project state', () => {
  const valid = routeAgentKitLifecycle({
    ...baseInput,
    publicReleaseChannel: 'beta',
    goal: 'coexistence',
    pilotOptIn: true,
  });
  assert.equal(valid.lane, 'clean-coexistence-pilot');

  for (const override of [
    { publicReleaseChannel: 'stable' },
    { pilotOptIn: false },
    { scopeRelationship: 'same-scope' },
    { scopeRelationship: 'other-separate' },
    { cleanupPreviewResult: 'dirty' },
  ]) {
    const result = routeAgentKitLifecycle({
      ...baseInput,
      publicReleaseChannel: 'beta',
      goal: 'coexistence',
      pilotOptIn: true,
      ...override,
    });
    assert.equal(result.lane, 'support-assisted', JSON.stringify(override));
    assert.equal(result.copyPolicy, 'no-destructive-copy', JSON.stringify(override));
  }
});

test('operator attestation is syntax/range validation only and never verification or authorization', () => {
  const valid = validateOperatorAttestation(completeAttestation, 'pass');
  assert.deepEqual(valid, {
    eligibility: 'advisory-ready',
    limitation: 'unverified-operator-declaration',
    reason: null,
  });
  assert.notEqual(valid.eligibility, 'verified');
  assert.equal('authorized' in valid, false);
  assert.equal('enforced' in valid, false);

  const routed = routeAgentKitLifecycle({
    ...baseInput,
    completedStages: AGENTKIT_LIFECYCLE_STAGE_IDS.slice(0, -1),
    canaryOutcome: 'pass',
    observationEvidence: completeAttestation,
  });
  assert.equal(routed.eligibility, 'advisory-ready');
  assert.equal(routed.stageStates.at(-1).state, 'advisory-ready');
  assert.equal(routed.copyPolicy, 'stage-gated');
});

test('reload/no input, incomplete/range-invalid declarations, failed canary, and incidents remain blocked', () => {
  const invalid = [
    null,
    { ...completeAttestation, acknowledgedAdvisoryOnly: false },
    { ...completeAttestation, endedAt: '2026-07-12T23:59:59Z' },
    { ...completeAttestation, endedAt: '2026-07-17T00:00:01Z' },
    { ...completeAttestation, reviewedAt: '2026-07-17T00:00:01Z' },
    { ...completeAttestation, reviewedAt: '2026-07-21T00:00:01Z' },
    { ...completeAttestation, canaryResult: 'fail' },
    { ...completeAttestation, incidentStatus: 'unacknowledged' },
    { ...completeAttestation, incidentStatus: 'unexpected' },
    { ...completeAttestation, startedAt: 'not-a-date' },
    { ...completeAttestation, startedAt: '2026-07-10T00:00:00' },
  ];

  for (const declaration of invalid) {
    const result = validateOperatorAttestation(declaration, declaration?.canaryResult ?? 'not-run');
    assert.equal(result.eligibility, 'blocked', JSON.stringify(declaration));
    assert.equal(result.limitation, 'unverified-operator-declaration');
  }
});

test('publication record is build-time authority; query state cannot publish beta payload or stage-7 detail', () => {
  const hold = evaluateAgentKitPublicationRecord(AGENTKIT_PUBLICATION_RECORD, { queryChannel: 'beta' });
  assert.equal(hold.valid, true);
  assert.equal(hold.status, 'hold');
  assert.equal(hold.includeBetaPayload, false);
  assert.equal(hold.includeStage7Details, false);
  assert.equal(hold.deploymentAudience, 'stable-public');

  const stagingRecord = {
    ...AGENTKIT_PUBLICATION_RECORD,
    approvalRevisionSha: 'a'.repeat(40),
    status: 'staging',
    pilotStartedAt: '2026-07-10T00:00:00Z',
    reviewer: 'VividKit reviewer',
  };
  const staging = evaluateAgentKitPublicationRecord(stagingRecord, {
    buildInputs: reviewedBuildInputs,
  });
  assert.equal(staging.valid, true);
  assert.equal(staging.includeBetaPayload, true);
  assert.equal(staging.deploymentAudience, 'protected-staging');

  const incompletePublished = evaluateAgentKitPublicationRecord({
    ...AGENTKIT_PUBLICATION_RECORD,
    status: 'published',
    reviewer: '',
  }, { buildInputs: actualBuildInputs });
  assert.equal(incompletePublished.valid, false);
  assert.equal(incompletePublished.includeBetaPayload, false);
  assert.equal(incompletePublished.deploymentAudience, 'stable-public');

  const publishedRecord = {
    ...AGENTKIT_PUBLICATION_RECORD,
    approvalRevisionSha: 'a'.repeat(40),
    pilotStartedAt: '2026-07-10T00:00:00Z',
    pilotEndedAt: '2026-07-14T00:00:00Z',
    reviewer: 'VividKit reviewer',
    approver: 'VividKit owner',
    status: 'published',
  };
  const published = evaluateAgentKitPublicationRecord(publishedRecord, {
    queryChannel: 'stable',
    buildInputs: reviewedBuildInputs,
  });
  assert.equal(published.valid, true);
  assert.equal(published.includeBetaPayload, true);
  assert.equal(published.includeStage7Details, true);
  assert.equal(published.deploymentAudience, 'public');

  const shapeOnlyForgery = evaluateAgentKitPublicationRecord({
    ...AGENTKIT_PUBLICATION_RECORD,
    vividKitSha: 'a'.repeat(40),
    stableFixtureSha256: 'b'.repeat(64),
    betaFixtureSha256: 'c'.repeat(64),
    sourceClosureSha256: 'd'.repeat(64),
    approvalRevisionSha: 'a'.repeat(40),
    pilotStartedAt: '2026-07-10T00:00:00Z',
    pilotEndedAt: '2026-07-14T00:00:00Z',
    reviewer: 'VividKit reviewer',
    approver: 'VividKit owner',
    status: 'published',
  }, { buildInputs: reviewedBuildInputs });
  assert.equal(shapeOnlyForgery.valid, false);
  assert.equal(shapeOnlyForgery.includeBetaPayload, false);
  assert.equal(shapeOnlyForgery.deploymentAudience, 'stable-public');

  const missingBuildContext = evaluateAgentKitPublicationRecord(publishedRecord);
  assert.equal(missingBuildContext.valid, false);
  assert.equal(missingBuildContext.includeBetaPayload, false);
  assert.equal(missingBuildContext.deploymentAudience, 'stable-public');

  const driftedActualBuild = evaluateAgentKitPublicationRecord(publishedRecord, {
    buildInputs: { ...reviewedBuildInputs, sourceClosureSha256: 'f'.repeat(64) },
  });
  assert.equal(driftedActualBuild.valid, false);
  assert.ok(driftedActualBuild.errors.includes('build-source-closure-mismatch'));
  assert.equal(driftedActualBuild.includeBetaPayload, false);

  const unboundRevision = evaluateAgentKitPublicationRecord(publishedRecord, {
    buildInputs: actualBuildInputs,
  });
  assert.equal(unboundRevision.valid, false);
  assert.ok(unboundRevision.errors.includes('reviewed-vividkit-revision-missing'));

  const driftedReviewedRevision = evaluateAgentKitPublicationRecord(publishedRecord, {
    buildInputs: { ...reviewedBuildInputs, reviewedVividKitSha: 'f'.repeat(40) },
  });
  assert.equal(driftedReviewedRevision.valid, false);
  assert.ok(driftedReviewedRevision.errors.includes('reviewed-vividkit-revision-mismatch'));

  const driftedReviewedClosure = evaluateAgentKitPublicationRecord(publishedRecord, {
    buildInputs: { ...reviewedBuildInputs, reviewedSourceClosureSha256: 'f'.repeat(64) },
  });
  assert.equal(driftedReviewedClosure.valid, false);
  assert.ok(driftedReviewedClosure.errors.includes('reviewed-vividkit-source-mismatch'));

  const driftedApprovalRevision = evaluateAgentKitPublicationRecord(publishedRecord, {
    buildInputs: { ...reviewedBuildInputs, reviewedApprovalRevisionSha: 'f'.repeat(40) },
  });
  assert.equal(driftedApprovalRevision.valid, false);
  assert.ok(driftedApprovalRevision.errors.includes('reviewed-approval-revision-mismatch'));

  const driftedReviewedRecord = evaluateAgentKitPublicationRecord(publishedRecord, {
    buildInputs: { ...reviewedBuildInputs, reviewedPublicationRecordSha256: 'f'.repeat(64) },
  });
  assert.equal(driftedReviewedRecord.valid, false);
  assert.ok(driftedReviewedRecord.errors.includes('reviewed-publication-record-mismatch'));

  const unknownStatus = evaluateAgentKitPublicationRecord({
    ...publishedRecord,
    status: 'unknown',
  }, { buildInputs: reviewedBuildInputs });
  assert.equal(unknownStatus.valid, false);
  assert.equal(unknownStatus.includeBetaPayload, false);
  assert.equal(unknownStatus.deploymentAudience, 'stable-public');
});

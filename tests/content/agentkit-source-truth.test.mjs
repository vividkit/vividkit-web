import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import {
  AGENTKIT_SOURCE_SNAPSHOT,
  AGENTKIT_TRUSTED_SOURCE_ORIGINS,
  PUBLIC_AGENTKIT_RELEASE_CHANNELS,
} from '../../src/data/guides/agentkit/agentkit-source-contract.ts';

const FIXTURE_ROOT = new URL('../fixtures/agentkit-release/', import.meta.url);
const SOURCE_RECORD = new URL('../../docs/agentkit-lifecycle-policy-source-record.md', import.meta.url);
const OWNER_RECORD = new URL('../../docs/agentkit-lifecycle-owner-decisions.md', import.meta.url);
const OWNER_SEMANTIC_RECORD = new URL(
  '../../docs/agentkit-lifecycle-owner-decisions.json',
  import.meta.url,
);

const RELEASE_FIXTURES = [
  'stable-v2.3.0.json',
  'beta-v2.3.1-beta.1.json',
];

const SHA256_PATTERN = /^[a-f0-9]{64}$/;
const ISO_INSTANT_PATTERN = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;
const SEMVER_PATTERN = /^\d+\.\d+\.\d+(?:-beta\.\d+)?$/;

const EXPECTED_OBSERVATION_URLS = {
  'agentkit-changelog-stable-v2.3.0-2026-07-17': 'https://agentkit.best/changelog',
  'agentkit-changelog-beta-v2.3.1-beta.1-2026-07-17': 'https://agentkit.best/changelog',
  'agentkit-docs-migrate-2026-07-17': 'https://agentkit.best/docs',
  'agentkit-support-discord-2026-07-17': 'https://discord.com/invite/x7SwTSf3wc',
  'agentkit-support-github-2026-07-17': 'https://github.com/bestagentkits/agentkit-support',
};

const EXPECTED_OWNER_DECISIONS = [
  {
    id: 'O1-CHANNEL-SCOPE',
    status: 'approved',
    betaQuerySurfaces: ['agentkit-hub', 'cli-guide', 'cli-commands', 'coexistence-guide'],
    persistence: 'bounded-group-only',
    outsideGroup: 'drop',
  },
  {
    id: 'O2-LLM-EXPORT',
    status: 'approved',
    llmArtifacts: ['llms.txt', 'llms-full.txt'],
    channel: 'stable',
    betaArtifact: false,
  },
  {
    id: 'O3-SKILL-OWNERSHIP',
    status: 'approved',
    visibility: 'personal-private',
    duration: 'through-pilot',
    canonicalRepository: 'thieung-os',
    linkScope: 'project-local-only',
    publicTeamFeature: false,
  },
  {
    id: 'O4-LEGACY-SKILLS',
    status: 'approved',
    action: 'deactivate-unlink',
    legacySkillCount: 6,
    moveOrDelete: false,
    archiveMetadataSkills: [
      'vk-add-scenario',
      'vk-audit-ck-cli',
      'vk-audit-ck-hooks',
      'vk-audit-skill',
      'vk-changelog-sync',
    ],
    cleanRoomBacklogSkills: ['vk-audit-ccs'],
  },
];

const EXPECTED_OWNER_RECORD = {
  schemaVersion: 1,
  status: 'approved',
  approvedAt: '2026-07-17T02:25:25+07:00',
  approvalSourceSha256: '16c117d15e4e3daf1409d8eb70ba850e932da97fc7eadcb760a8ff1d5ec0d69f',
  decisionPayloadSha256: '99d58124d3b15654b8800ad5f4c67fc163d82a4b0c54d107bee1ccf57f7cf968',
  decisions: EXPECTED_OWNER_DECISIONS,
};

async function readJson(url) {
  return JSON.parse(await readFile(url, 'utf8'));
}

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

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

function digestNormalizedRelease(fixture) {
  return sha256(JSON.stringify(normalizedReleasePayload(fixture)));
}

function validateReleaseFixture(fixture, observations) {
  assert.equal(fixture.schemaVersion, 1, 'unsupported fixture schema');
  assert.match(fixture.id, /^agentkit-cli-(?:stable|beta)-/, 'missing fixture identity');
  assert.equal(fixture.product, 'agentkit-cli');
  assert.ok(PUBLIC_AGENTKIT_RELEASE_CHANNELS.includes(fixture.channel));
  assert.match(fixture.version, SEMVER_PATTERN);
  assert.equal(fixture.verifiedAt, '2026-07-17');
  assert.equal(fixture.evidenceClass, 'public-release');
  assert.match(fixture.normalizedFactSha256, SHA256_PATTERN);
  assert.equal(fixture.normalizedFactSha256, digestNormalizedRelease(fixture));

  if (fixture.channel === 'stable') {
    assert.equal(fixture.releaseStatus, 'stable');
    assert.doesNotMatch(fixture.version, /-/);
  } else {
    assert.equal(fixture.releaseStatus, 'pre-release');
    assert.match(fixture.version, /-beta\.\d+$/);
  }

  const sourceUrl = new URL(fixture.sourceUrl);
  assert.equal(sourceUrl.protocol, 'https:');
  assert.ok(AGENTKIT_TRUSTED_SOURCE_ORIGINS.includes(sourceUrl.origin));
  assert.ok(fixture.sourceObservationId, 'missing independent provenance observation');

  const observation = observations.find(({ id }) => id === fixture.sourceObservationId);
  assert.ok(observation, 'missing independent source observation');
  assert.match(observation.retrievedAt, ISO_INSTANT_PATTERN);
  assert.equal(observation.retrievalMethod, 'HTTPS GET without redirects');
  assert.ok(observation.reviewer);
  assert.match(observation.rawResponseSha256, SHA256_PATTERN);
  assert.notEqual(observation.rawResponseSha256, fixture.normalizedFactSha256);
  assert.equal(observation.httpStatus, 200);
  assert.equal(observation.redirectCount, 0);
  assert.equal(new URL(observation.requestedUrl).origin, 'https://agentkit.best');
  assert.equal(new URL(observation.effectiveUrl).origin, 'https://agentkit.best');
  assert.equal(fixture.sourceUrl, observation.requestedUrl);
  assert.equal(observation.requestedUrl, observation.effectiveUrl);
  assert.equal(observation.observedMarker, fixture.version);

  for (const claim of fixture.claims) {
    assert.ok(claim.id);
    assert.equal(claim.evidenceClass, 'public-release');
    assert.notEqual(claim.kind, 'internal-issue-status');
  }

  const serialized = JSON.stringify(fixture);
  assert.doesNotMatch(serialized, /\/Users\//);
  assert.doesNotMatch(serialized, /gh[pousr]_[A-Za-z0-9]{36,}/);
  assert.doesNotMatch(serialized, /ak_(?:license|live)_[A-Za-z0-9_-]{16,}/);
}

test('stable and beta release fixtures are independently observed and normalized', async () => {
  const observations = await readJson(new URL('source-observations-2026-07-17.json', FIXTURE_ROOT));
  const fixtures = await Promise.all(
    RELEASE_FIXTURES.map((file) => readJson(new URL(file, FIXTURE_ROOT))),
  );

  for (const fixture of fixtures) validateReleaseFixture(fixture, observations.observations);
  assert.deepEqual(fixtures.map(({ channel, version }) => [channel, version]), [
    ['stable', '2.3.0'],
    ['beta', '2.3.1-beta.1'],
  ]);
  assert.notEqual(fixtures[0].sourceObservationId, fixtures[1].sourceObservationId);
  assert.notEqual(fixtures[0].normalizedFactSha256, fixtures[1].normalizedFactSha256);
});

test('every source observation is an exact-URL reviewer attestation with offline-safe metadata', async () => {
  const document = await readJson(new URL('source-observations-2026-07-17.json', FIXTURE_ROOT));
  assert.equal(document.schemaVersion, 1);
  assert.match(document.capturedAt, ISO_INSTANT_PATTERN);
  assert.equal(new Set(document.observations.map(({ id }) => id)).size, document.observations.length);
  assert.deepEqual(
    Object.fromEntries(document.observations.map(({ id, requestedUrl }) => [id, requestedUrl])),
    EXPECTED_OBSERVATION_URLS,
  );

  for (const observation of document.observations) {
    assert.match(observation.id, /^agentkit-/);
    assert.equal(new URL(observation.requestedUrl).protocol, 'https:');
    assert.equal(observation.effectiveUrl, observation.requestedUrl);
    assert.match(observation.retrievedAt, ISO_INSTANT_PATTERN);
    assert.equal(observation.retrievalMethod, 'HTTPS GET without redirects');
    assert.match(observation.retrievalClient, /^curl \d/);
    assert.equal(observation.httpStatus, 200);
    assert.equal(observation.redirectCount, 0);
    assert.match(observation.rawResponseSha256, SHA256_PATTERN);
    assert.ok(observation.observedMarker);
    assert.ok(observation.reviewer);
  }
});

test('public release contract excludes development and legacy channels', () => {
  assert.deepEqual(PUBLIC_AGENTKIT_RELEASE_CHANNELS, ['stable', 'beta']);
  assert.deepEqual(AGENTKIT_TRUSTED_SOURCE_ORIGINS, ['https://agentkit.best']);
  assert.equal(AGENTKIT_SOURCE_SNAPSHOT.releaseVersion, '2.3.0');
  assert.equal(AGENTKIT_SOURCE_SNAPSHOT.betaReleaseVersion, '2.3.1-beta.1');
  assert.equal(AGENTKIT_SOURCE_SNAPSHOT.verifiedAt, '2026-07-17');
});

test('release validator fails closed on provenance, origin, channel, digest, and claim violations', async () => {
  const observationsDocument = await readJson(
    new URL('source-observations-2026-07-17.json', FIXTURE_ROOT),
  );
  const stable = await readJson(new URL(RELEASE_FIXTURES[0], FIXTURE_ROOT));
  const clone = (value) => structuredClone(value);
  const withDigest = (fixture) => ({
    ...fixture,
    normalizedFactSha256: digestNormalizedRelease(fixture),
  });

  const missingProvenance = clone(stable);
  delete missingProvenance.sourceObservationId;
  assert.throws(
    () => validateReleaseFixture(withDigest(missingProvenance), observationsDocument.observations),
    /provenance|observation/i,
  );

  const untrustedSource = withDigest({ ...clone(stable), sourceUrl: 'https://example.com/changelog' });
  assert.throws(
    () => validateReleaseFixture(untrustedSource, observationsDocument.observations),
    /false|origin|include/i,
  );

  for (const wrongSameOriginUrl of [
    'https://agentkit.best/docs',
    'https://agentkit.best/changelog?channel=stable',
    'https://reviewer@agentkit.best/changelog',
  ]) {
    const wrongPath = withDigest({ ...clone(stable), sourceUrl: wrongSameOriginUrl });
    assert.throws(
      () => validateReleaseFixture(wrongPath, observationsDocument.observations),
      /strictly equal/i,
    );
  }

  const redirectedObservations = clone(observationsDocument.observations);
  const redirected = redirectedObservations.find(({ id }) => id === stable.sourceObservationId);
  redirected.effectiveUrl = 'https://cdn.example.com/changelog';
  redirected.redirectCount = 1;
  assert.throws(
    () => validateReleaseFixture(stable, redirectedObservations),
    /origin|strictly equal|1 !== 0/i,
  );

  const betaOnStable = withDigest({ ...clone(stable), version: '2.3.1-beta.1' });
  assert.throws(() => validateReleaseFixture(betaOnStable, observationsDocument.observations));

  const developmentChannel = withDigest({ ...clone(stable), channel: 'dev' });
  assert.throws(() => validateReleaseFixture(developmentChannel, observationsDocument.observations));

  const selfAttestedObservations = clone(observationsDocument.observations);
  selfAttestedObservations.find(({ id }) => id === stable.sourceObservationId).rawResponseSha256 = (
    stable.normalizedFactSha256
  );
  assert.throws(
    () => validateReleaseFixture(stable, selfAttestedObservations),
    /strictly unequal/i,
  );

  const internalIssueClaim = clone(stable);
  internalIssueClaim.claims.push({
    id: 'AK-ISSUE-932',
    kind: 'internal-issue-status',
    evidenceClass: 'public-release',
    statement: 'Internal issue is publicly confirmed open.',
  });
  assert.throws(
    () => validateReleaseFixture(withDigest(internalIssueClaim), observationsDocument.observations),
    /internal-issue-status|strict equal/i,
  );

  const privatePath = withDigest({ ...clone(stable), reviewerNotes: '/Users/example/private.txt' });
  assert.throws(
    () => validateReleaseFixture(privatePath, observationsDocument.observations),
    /Users/i,
  );

  const credential = ['gh', 'p_', 'A'.repeat(40)].join('');
  const credentialLeak = withDigest({ ...clone(stable), reviewerNotes: credential });
  assert.throws(
    () => validateReleaseFixture(credentialLeak, observationsDocument.observations),
    /match the regular expression/i,
  );
});

test('tracked source record classifies claims without leaking private evidence paths', async () => {
  const record = await readFile(SOURCE_RECORD, 'utf8');
  const observationsDocument = await readJson(
    new URL('source-observations-2026-07-17.json', FIXTURE_ROOT),
  );
  const fixtures = await Promise.all(
    RELEASE_FIXTURES.map((file) => readJson(new URL(file, FIXTURE_ROOT))),
  );
  assert.doesNotMatch(record, /\/Users\//);
  for (const evidenceClass of [
    'public-release',
    'official-docs',
    'implementation-audit',
    'support-policy',
    'legacy-snapshot',
    'governance-prototype',
  ]) {
    assert.ok(record.includes('| `' + evidenceClass + '` |'));
  }

  for (const fixture of fixtures) {
    const observation = observationsDocument.observations.find(
      ({ id }) => id === fixture.sourceObservationId,
    );
    const expectedRow = [
      `| \`${fixture.claims[0].id}\``,
      fixture.channel,
      `\`${fixture.version}\``,
      `\`${observation.retrievedAt}\`, HTTPS GET, no redirects, reviewed`,
      `[changelog](${fixture.sourceUrl})`,
      `\`${observation.rawResponseSha256}\``,
      `\`${fixture.normalizedFactSha256}\` |`,
    ].join(' | ');
    assert.ok(record.includes(expectedRow), `source ledger drift for ${fixture.id}`);
  }

  for (const observationId of [
    'agentkit-docs-migrate-2026-07-17',
    'agentkit-support-discord-2026-07-17',
    'agentkit-support-github-2026-07-17',
  ]) {
    const observation = observationsDocument.observations.find(({ id }) => id === observationId);
    assert.ok(record.includes(observation.id));
    assert.ok(record.includes(observation.requestedUrl));
    assert.ok(record.includes(observation.retrievedAt));
    assert.ok(record.includes(observation.rawResponseSha256));
  }

  assert.match(record, /56524c98dbdd4d27632ffbcb9da96c77f936ab67/);
  assert.match(record, /7d5ab60e9e706ba612a6202f3024685cfa32bea6/);
  assert.match(record, /208 files/);
  assert.match(record, /72,777 lines/);
  assert.match(record, /\.claude\/workflows/);
  assert.match(record, /\.Codex\/workflows/);
  assert.match(record, /cryptographic authenticity proof[^.]*not independently verified/i);
  assert.match(record, /reviewer attestation, not an offline-reproducible preimage proof/i);
});

test('tracked owner decisions preserve the approved O1 through O4 gate exactly', async () => {
  const record = await readFile(OWNER_RECORD, 'utf8');
  const semanticRecord = await readJson(OWNER_SEMANTIC_RECORD);
  assert.deepEqual(semanticRecord, EXPECTED_OWNER_RECORD);
  assert.equal(
    sha256(JSON.stringify(semanticRecord.decisions)),
    semanticRecord.decisionPayloadSha256,
    'owner decision payload changed; explicit re-approval is required',
  );

  assert.match(record, /status: "approved"/);
  assert.ok(record.includes(`approvedAt: "${semanticRecord.approvedAt}"`));
  assert.ok(record.includes(`approvalSourceSha256: "${semanticRecord.approvalSourceSha256}"`));
  assert.ok(record.includes(`decisionPayloadSha256: "${semanticRecord.decisionPayloadSha256}"`));
  assert.match(record, /machine-readable decision snapshot/);
  for (const { id } of semanticRecord.decisions) assert.ok(record.includes(`\`${id}\``));
  assert.doesNotMatch(record, /\/Users\//);
});

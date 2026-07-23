// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import {
  AGENTKIT_PUBLICATION_RECORD,
  evaluateAgentKitPublicationRecord,
} from './src/data/guides/agentkit/agentkit-publication-policy.ts';
import { AGENTKIT_SOURCE_SNAPSHOT } from './src/data/guides/agentkit/agentkit-source-contract.ts';
import { CANONICAL_SITE_ORIGIN } from './src/data/site-origin.mjs';
import {
  computeAgentKitPublicationSourceClosure,
  computeAgentKitPublicationSourceClosureFromGit,
  computeAgentKitPublicationRecordDigest,
  computeAgentKitPublicationRecordDigestFromGit,
} from './scripts/agentkit-publication-source-closure.mjs';

const PUBLICATION_FIXTURES = new Set(['hold', 'published']);

/** @param {Record<string, unknown>} fixture */
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

/** @param {string} path */
async function fixtureDigest(path) {
  const fixture = JSON.parse(await readFile(new URL(path, import.meta.url), 'utf8'));
  return createHash('sha256').update(JSON.stringify(normalizedReleasePayload(fixture))).digest('hex');
}

async function resolvePublicationBuild() {
  const fixtureName = process.env.AGENTKIT_PUBLICATION_FIXTURE;
  if (fixtureName && process.env.NODE_ENV !== 'test') {
    throw new Error('AGENTKIT_PUBLICATION_FIXTURE is allowed only when NODE_ENV=test.');
  }
  if (fixtureName && !PUBLICATION_FIXTURES.has(fixtureName)) {
    throw new Error('Unsupported AgentKit publication fixture.');
  }
  const record = fixtureName
    ? JSON.parse(await readFile(new URL(`./tests/fixtures/agentkit-publication/${fixtureName}.json`, import.meta.url), 'utf8'))
    : AGENTKIT_PUBLICATION_RECORD;
  const reviewedSourceClosureSha256 = record.status === 'hold'
    ? undefined
    : fixtureName
      ? record.sourceClosureSha256
      : await computeAgentKitPublicationSourceClosureFromGit(record.vividKitSha);
  const publicationRecordSha256 = await computeAgentKitPublicationRecordDigest();
  const reviewedPublicationRecordSha256 = record.status === 'hold'
    ? undefined
    : fixtureName
      ? publicationRecordSha256
      : await computeAgentKitPublicationRecordDigestFromGit(record.approvalRevisionSha);
  const buildInputs = {
    stableFixtureSha256: await fixtureDigest('./tests/fixtures/agentkit-release/stable-v2.4.0.json'),
    prereleaseFixtureSha256: await fixtureDigest('./tests/fixtures/agentkit-release/prerelease-v2.5.0-beta.1.json'),
    sourceClosureSha256: await computeAgentKitPublicationSourceClosure(),
    ...(record.status === 'hold' ? {} : {
      reviewedVividKitSha: record.vividKitSha,
      reviewedSourceClosureSha256,
      reviewedApprovalRevisionSha: record.approvalRevisionSha,
      publicationRecordSha256,
      reviewedPublicationRecordSha256,
    }),
  };
  const evaluation = evaluateAgentKitPublicationRecord(record, { buildInputs });
  if (!evaluation.valid) {
    throw new Error(`Invalid AgentKit publication record: ${evaluation.errors.join(',')}`);
  }
  return evaluation;
}

const publication = await resolvePublicationBuild();
const betaLoader = publication.includeBetaPayload
  ? './src/scripts/agentkit-beta-loader-published.mjs'
  : './src/scripts/agentkit-beta-loader-hold.mjs';

// https://astro.build/config
export default defineConfig({
  site: CANONICAL_SITE_ORIGIN,
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    routing: {
      prefixDefaultLocale: false // English at /, Vietnamese at /vi/
    }
  },
  vite: {
    plugins: [tailwindcss()],
    define: {
      'import.meta.env.AGENTKIT_INCLUDE_STAGE7_DETAILS': JSON.stringify(String(publication.includeStage7Details)),
      'import.meta.env.AGENTKIT_PUBLICATION_STATUS': JSON.stringify(publication.status),
      'import.meta.env.AGENTKIT_HAS_ACTIVE_BETA': JSON.stringify(String(AGENTKIT_SOURCE_SNAPSHOT.hasActiveBeta)),
    },
    resolve: {
      alias: [
        {
          find: /^@agentkit-beta-loader$/,
          replacement: fileURLToPath(new URL(betaLoader, import.meta.url)),
        },
        {
          find: '@legacy-ck',
          replacement: fileURLToPath(new URL('./src/legacy-ck', import.meta.url)),
        },
      ],
    },
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks: undefined // Prevent code-splitting bloat
        }
      }
    }
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  redirects: {
    '/guides/resume': '/guides/session-recovery',
    '/vi/guides/resume': '/vi/guides/session-recovery',
    '/guides/mobile-coding': '/guides/remote-control',
    '/vi/guides/mobile-coding': '/vi/guides/remote-control'
  }
});

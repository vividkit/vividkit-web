import assert from 'node:assert/strict';
import { access, readdir } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import test from 'node:test';

import {
  AGENTKIT_ROUTE_IDENTITIES,
  BASELINE_ROUTE_IDENTITIES,
  GUIDE_ROUTE_MANIFEST,
  LEGACY_ARCHIVE_ROUTE_IDENTITIES,
  llmsRouteIdentities,
  requiredBuildRouteIdentities,
  sitemapRouteIdentities,
} from '../../src/data/guides/guide-route-manifest.ts';
import { LEGACY_GUIDE_CATALOG } from '../../src/data/guides/legacy-guide-catalog.ts';
import { LEGACY_ARCHIVE_PROVENANCE } from '../../src/data/guides/legacy-archive-provenance.ts';
import { guideSections, optionalLinks } from '../../src/data/guides-llms-index.mjs';

const projectRoot = new URL('../..', import.meta.url).pathname;

async function collectHtmlFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectHtmlFiles(path));
    if (entry.isFile() && entry.name.endsWith('.html')) files.push(path);
  }
  return files;
}

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

function routeFromBuiltFile(file) {
  const built = relative(join(projectRoot, 'dist'), file).split(sep).join('/');
  if (built === 'index.html') return '/';
  if (built === '404.html') return '/404';
  return `/${built.replace(/\/index\.html$/, '')}`;
}

test('route manifest preserves 132 required identities and query channels add no route identity', () => {
  assert.equal(BASELINE_ROUTE_IDENTITIES.length, 72);
  assert.equal(new Set(BASELINE_ROUTE_IDENTITIES).size, BASELINE_ROUTE_IDENTITIES.length);
  assert.deepEqual(AGENTKIT_ROUTE_IDENTITIES, ['/guides/agentkit', '/vi/guides/agentkit']);

  const manifestPaths = GUIDE_ROUTE_MANIFEST.flatMap(({ enPath, viPath }) => (
    viPath ? [enPath, viPath] : [enPath]
  ));
  assert.deepEqual(
    [...manifestPaths].sort(),
    [...BASELINE_ROUTE_IDENTITIES, ...AGENTKIT_ROUTE_IDENTITIES, ...LEGACY_ARCHIVE_ROUTE_IDENTITIES].sort(),
  );
  assert.equal(requiredBuildRouteIdentities.length, 132);
  assert.equal(new Set(requiredBuildRouteIdentities).size, 132);
  assert.equal(requiredBuildRouteIdentities.some((route) => route.includes('?channel=')), false);
});

test('legacy archive catalog is bilingual, excluded from sitemap/llms, and required to build', () => {
  assert.equal(LEGACY_GUIDE_CATALOG.length, 28);
  // index + 28 content pages, EN+VI
  assert.equal(LEGACY_ARCHIVE_ROUTE_IDENTITIES.length, 58);
  assert.ok(LEGACY_ARCHIVE_ROUTE_IDENTITIES.includes('/legacy/guides'));
  assert.ok(LEGACY_ARCHIVE_ROUTE_IDENTITIES.includes('/vi/legacy/guides'));
  assert.ok(LEGACY_ARCHIVE_ROUTE_IDENTITIES.includes('/legacy/guides/claude-mechanics'));
  assert.ok(LEGACY_ARCHIVE_ROUTE_IDENTITIES.includes('/legacy/guides/migrate'));
  assert.equal(LEGACY_ARCHIVE_ROUTE_IDENTITIES.some((route) => route.includes('/promotions')), false);
  assert.equal(LEGACY_ARCHIVE_ROUTE_IDENTITIES.some((route) => route.includes('/agentkit')), false);

  for (const entry of GUIDE_ROUTE_MANIFEST.filter(({ compatibilityPolicy }) => compatibilityPolicy === 'legacy-archive')) {
    assert.equal(entry.includeInSitemap, false);
    assert.equal(entry.includeInLlms, false);
    assert.equal(entry.requiredBuild, true);
  }

  assert.equal(sitemapRouteIdentities.some((route) => route.startsWith('/legacy/')), false);
  assert.equal(sitemapRouteIdentities.some((route) => route.includes('/legacy/')), false);

  const frozen = LEGACY_GUIDE_CATALOG.filter((entry) => entry.freezeStatus === 'isolated' || entry.freezeStatus === 'frozen').map((entry) => entry.suffix).sort();
  assert.equal(frozen.length, LEGACY_GUIDE_CATALOG.length);
  assert.equal(LEGACY_GUIDE_CATALOG.every((entry) => entry.freezeStatus === 'isolated'), true);
  assert.deepEqual([...new Set(LEGACY_GUIDE_CATALOG.map((entry) => entry.provenanceId))], [LEGACY_ARCHIVE_PROVENANCE.id]);
  assert.ok(frozen.includes('migrate'));
  assert.ok(frozen.includes('ccs'));
  assert.ok(frozen.includes('hooks'));
  assert.ok(frozen.includes('claude-mechanics'));
});

test('current build preserves every required identity and contains no unmanifested route', async (context) => {
  const dist = join(projectRoot, 'dist');
  if (!(await exists(dist))) {
    context.skip('dist is verified by the mandatory postbuild route gate');
    return;
  }

  const files = await collectHtmlFiles(dist);
  const builtRoutes = files.map(routeFromBuiltFile).sort();
  const manifestRoutes = new Set([
    ...BASELINE_ROUTE_IDENTITIES,
    ...AGENTKIT_ROUTE_IDENTITIES,
    ...LEGACY_ARCHIVE_ROUTE_IDENTITIES,
  ]);
  const builtRouteSet = new Set(builtRoutes);
  // Prebuild may see a stale dist while new required routes are added.
  // Full required-identity coverage is mandatory on postbuild only.
  if (process.env.npm_lifecycle_event === 'test:agentkit-postbuild') {
    for (const route of requiredBuildRouteIdentities) assert.ok(builtRouteSet.has(route), `missing ${route}`);
    for (const route of AGENTKIT_ROUTE_IDENTITIES) assert.ok(builtRouteSet.has(route), `missing ${route}`);
    for (const route of LEGACY_ARCHIVE_ROUTE_IDENTITIES) assert.ok(builtRouteSet.has(route), `missing ${route}`);
  }
  assert.deepEqual(builtRoutes.filter((route) => !manifestRoutes.has(route)), []);
});

test('all bilingual guide entries preserve EN/VI suffix parity', () => {
  for (const entry of GUIDE_ROUTE_MANIFEST.filter(({ viPath }) => viPath)) {
    assert.equal(entry.viPath, `/vi${entry.enPath === '/' ? '' : entry.enPath}`);
    assert.ok(entry.compatibilityPolicy);
    assert.equal(typeof entry.includeInSitemap, 'boolean');
    assert.equal(typeof entry.includeInLlms, 'boolean');
  }
});

test('sitemap consumer receives the exact manifest-classified route identities', () => {
  const expected = GUIDE_ROUTE_MANIFEST
    .filter(({ includeInSitemap }) => includeInSitemap)
    .flatMap(({ enPath, viPath }) => viPath ? [enPath, viPath] : [enPath]);
  assert.deepEqual(sitemapRouteIdentities, expected);
  assert.ok(sitemapRouteIdentities.includes('/guides/agentkit'));
  assert.ok(sitemapRouteIdentities.includes('/vi/guides/agentkit'));
});

test('LLM index paths exactly match manifest-classified English identities', () => {
  const indexedPaths = [
    ...guideSections.flatMap(({ links }) => links.map(({ path }) => path)),
    ...optionalLinks.map(({ path }) => path),
  ];
  assert.equal(new Set(indexedPaths).size, indexedPaths.length);
  assert.deepEqual(
    [...indexedPaths].sort(),
    llmsRouteIdentities.filter((route) => !route.startsWith('/vi/')).sort(),
  );
});

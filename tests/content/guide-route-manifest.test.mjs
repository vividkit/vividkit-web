import assert from 'node:assert/strict';
import { access, readdir } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import test from 'node:test';

import {
  AGENTKIT_ROUTE_IDENTITIES,
  BASELINE_ROUTE_IDENTITIES,
  GUIDE_ROUTE_MANIFEST,
  requiredBuildRouteIdentities,
  sitemapRouteIdentities,
} from '../../src/data/guides/guide-route-manifest.ts';

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

test('route manifest preserves the exact 72-page baseline and adds bilingual AgentKit routes', () => {
  assert.equal(BASELINE_ROUTE_IDENTITIES.length, 72);
  assert.equal(new Set(BASELINE_ROUTE_IDENTITIES).size, BASELINE_ROUTE_IDENTITIES.length);
  assert.deepEqual(AGENTKIT_ROUTE_IDENTITIES, ['/guides/agentkit', '/vi/guides/agentkit']);

  const manifestPaths = GUIDE_ROUTE_MANIFEST.flatMap(({ enPath, viPath }) => (
    viPath ? [enPath, viPath] : [enPath]
  ));
  assert.deepEqual(
    [...manifestPaths].sort(),
    [...BASELINE_ROUTE_IDENTITIES, ...AGENTKIT_ROUTE_IDENTITIES].sort(),
  );
});

test('current build preserves every required identity and contains no unmanifested route', async (context) => {
  const dist = join(projectRoot, 'dist');
  if (!(await exists(dist))) {
    context.skip('dist is verified by the mandatory postbuild route gate');
    return;
  }

  const files = await collectHtmlFiles(dist);
  const builtRoutes = files.map(routeFromBuiltFile).sort();
  const manifestRoutes = new Set([...BASELINE_ROUTE_IDENTITIES, ...AGENTKIT_ROUTE_IDENTITIES]);
  const builtRouteSet = new Set(builtRoutes);
  for (const route of requiredBuildRouteIdentities) assert.ok(builtRouteSet.has(route), `missing ${route}`);
  assert.deepEqual(builtRoutes.filter((route) => !manifestRoutes.has(route)), []);

  for (const route of AGENTKIT_ROUTE_IDENTITIES) assert.ok(builtRouteSet.has(route), `missing ${route}`);
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

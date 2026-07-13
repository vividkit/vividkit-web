import assert from 'node:assert/strict';
import { access, readFile, readdir } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import test from 'node:test';

import {
  AGENTKIT_ROUTE_IDENTITIES,
  BASELINE_ROUTE_IDENTITIES,
  GUIDE_ROUTE_MANIFEST,
  LEGACY_ARCHIVE_ROUTE_IDENTITIES,
  requiredBuildRouteIdentities,
  sitemapRouteIdentities,
} from '../../src/data/guides/guide-route-manifest.ts';
import { LEGACY_GUIDE_CATALOG } from '../../src/data/guides/legacy-guide-catalog.ts';

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
    [...BASELINE_ROUTE_IDENTITIES, ...AGENTKIT_ROUTE_IDENTITIES, ...LEGACY_ARCHIVE_ROUTE_IDENTITIES].sort(),
  );
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

test('LLM full export retains the AgentKit App and legacy cleanup safety boundaries', async (context) => {
  if (process.env.npm_lifecycle_event !== 'test:agentkit-postbuild') {
    context.skip('postbuild-only LLM assertion');
    return;
  }
  const output = join(projectRoot, 'dist', 'llms-full.txt');
  assert.equal(await exists(output), true, 'postbuild llms-full.txt missing');

  const text = await readFile(output, 'utf8');
  assert.match(text, /Public availability is not established/);
  assert.match(text, /CLI registry and Desktop App use separate sessions/);
  assert.match(text, /linked release was unavailable when verified/);
  assert.match(text, /No documented bulk cleanup for every migrated provider/);
  assert.match(text, /Never delete an entire provider skills directory/);
  assert.match(text, /ck uninstall does not document bulk removal there/);
  assert.match(text, /ClaudeKit is historical context, not the current install path/);
  assert.match(text, /One skill identity, target-correct syntax/);
  assert.match(text, /ClaudeKit was the original toolkit/);

  const primerStart = text.indexOf('## What is ClaudeKit? From CK to AgentKit');
  const primerEnd = text.indexOf('\n## ', primerStart + 3);
  assert.notEqual(primerStart, -1, 'what-is-claudekit LLM section missing');
  const primer = text.slice(primerStart, primerEnd === -1 ? undefined : primerEnd);
  assert.doesNotMatch(primer, /(?:\/|\$)(?:ck|ckm):/i);
  assert.doesNotMatch(primer, /\bck\s+(?:new|init|update|setup|skills|agents|doctor|versions|config|migrate|uninstall)\b/i);
});

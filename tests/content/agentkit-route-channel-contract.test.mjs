import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import test from 'node:test';

const ROOT = new URL('../../', import.meta.url);

const ROUTES = [
  ['src/pages/guides/agentkit.astro', '/guides/agentkit'],
  ['src/pages/vi/guides/agentkit.astro', '/vi/guides/agentkit'],
  ['src/pages/guides/cli.astro', '/guides/cli'],
  ['src/pages/vi/guides/cli.astro', '/vi/guides/cli'],
  ['src/pages/guides/cli-commands.astro', '/guides/cli-commands'],
  ['src/pages/vi/guides/cli-commands.astro', '/vi/guides/cli-commands'],
  ['src/pages/guides/coexistence.astro', '/guides/coexistence'],
  ['src/pages/vi/guides/coexistence.astro', '/vi/guides/coexistence'],
];

test('channel selection adds no route, redirect, or query canonical identity', async () => {
  const pageFiles = [
    ...await readdir(new URL('../../src/pages/guides/', import.meta.url)),
    ...await readdir(new URL('../../src/pages/vi/guides/', import.meta.url)),
  ];
  assert.deepEqual(pageFiles.filter((name) => /beta|channel/i.test(name)), []);

  for (const [file, canonical] of ROUTES) {
    const text = await readFile(new URL(file, ROOT), 'utf8');
    assert.doesNotMatch(text, /Astro\.redirect|searchParams|channel=beta/, file);
    assert.match(text, new RegExp(`canonicalPath=["']${canonical.replaceAll('/', '\\/')}["']`), file);
  }

  const layout = await readFile(new URL('src/layouts/GuidesLayout.astro', ROOT), 'utf8');
  assert.match(layout, /canonical=\{canonicalPath \|\|/);
  assert.doesNotMatch(layout, /Astro\.url\.(?:search|searchParams)/);
});

test('only the dedicated route-channel contract owns query identity assertions', async () => {
  const archiveRouteTest = await readFile(
    new URL('tests/content/guide-route-manifest.test.mjs', ROOT),
    'utf8',
  );
  assert.doesNotMatch(archiveRouteTest, /agentkit-beta-loader|channel=beta|agentkit-channel-controller/);
});

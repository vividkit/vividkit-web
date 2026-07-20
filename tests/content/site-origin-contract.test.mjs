import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const projectRoot = new URL('../../', import.meta.url);

test('every public URL producer shares one environment-independent vividkit.dev origin', async () => {
  const [siteOrigin, astroConfig, mainLayout, sitemap, robots, llms, llmsFull, archivePostbuild, envExample] = await Promise.all([
    import(new URL('src/data/site-origin.mjs', projectRoot)),
    readFile(new URL('astro.config.mjs', projectRoot), 'utf8'),
    readFile(new URL('src/layouts/MainLayout.astro', projectRoot), 'utf8'),
    readFile(new URL('src/pages/sitemap.xml.ts', projectRoot), 'utf8'),
    readFile(new URL('src/pages/robots.txt.ts', projectRoot), 'utf8'),
    readFile(new URL('src/pages/llms.txt.ts', projectRoot), 'utf8'),
    readFile(new URL('scripts/generate-llms-full.mjs', projectRoot), 'utf8'),
    readFile(new URL('scripts/legacy-archive-postbuild.mjs', projectRoot), 'utf8'),
    readFile(new URL('.env.example', projectRoot), 'utf8'),
  ]);

  assert.equal(siteOrigin.CANONICAL_SITE_ORIGIN, 'https://vividkit.dev');

  const producers = [astroConfig, mainLayout, sitemap, robots, llms, llmsFull, archivePostbuild];
  for (const source of producers) {
    assert.match(source, /CANONICAL_SITE_ORIGIN/);
    assert.doesNotMatch(source, /PUBLIC_SITE_URL/);
    assert.doesNotMatch(source, /https:\/\/vividkit\.com/);
  }
  assert.doesNotMatch(envExample, /PUBLIC_SITE_URL/);
  assert.match(astroConfig, /site:\s*CANONICAL_SITE_ORIGIN/);
  assert.ok(archivePostbuild.includes('`rel="canonical" href="${CANONICAL_SITE_ORIGIN}${route}"`'));
});

import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { LEGACY_FROZEN_SUFFIXES } from '../../src/data/guides/legacy-guide-catalog.ts';

const root = new URL('../..', import.meta.url);

test('batch A freeze wires full CK composers for mechanics, coexistence, and ck-with-codex', async () => {
  for (const suffix of ['claude-mechanics', 'coexistence', 'ck-with-codex']) {
    assert.ok(LEGACY_FROZEN_SUFFIXES.includes(suffix), `batch A missing ${suffix}`);
  }

  const enSlugPage = await readFile(new URL('src/pages/legacy/guides/[...slug].astro', root), 'utf8');
  assert.match(enSlugPage, /LegacyClaudeMechanicsGuide/);
  assert.match(enSlugPage, /LegacyCoexistenceGuide/);
  assert.match(enSlugPage, /LegacyCkWithCodexGuide/);

  const mechanics = await readFile(new URL('src/components/guides/legacy/claude-mechanics/mechanics-ck-init-tree.astro', root), 'utf8');
  assert.match(mechanics, /ck init/);

  const coexistence = await readFile(new URL('src/components/guides/legacy/LegacyCoexistenceGuide.astro', root), 'utf8');
  assert.match(coexistence, /CoexistenceFreshWarning/);
  assert.match(coexistence, /CoexistenceRecipes/);

  const codex = await readFile(new URL('src/components/guides/legacy/LegacyCkWithCodexGuide.astro', root), 'utf8');
  assert.match(codex, /ck-with-codex-setup/);
  assert.match(codex, /ck-with-codex-prerequisites/);
});

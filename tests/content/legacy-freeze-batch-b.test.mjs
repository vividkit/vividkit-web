import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import {
  LEGACY_BATCH_B_SUFFIXES,
  LEGACY_FROZEN_SUFFIXES,
} from '../../src/data/guides/legacy-guide-catalog.ts';

const root = new URL('../..', import.meta.url);

test('batch B freezes cli/commands/workflows/how-ck-works/inside-* via isolated @legacy-ck router', async () => {
  assert.equal(LEGACY_BATCH_B_SUFFIXES.length, 13);
  for (const suffix of LEGACY_BATCH_B_SUFFIXES) {
    assert.ok(LEGACY_FROZEN_SUFFIXES.includes(suffix), `missing frozen/isolated mark for ${suffix}`);
  }

  const body = await readFile(new URL('src/components/guides/legacy/LegacyBatchBGuideBody.astro', root), 'utf8');
  assert.match(body, /@legacy-ck\/components\/guides\/CLIGuide/);
  assert.match(body, /@legacy-ck\/components\/guides\/CommandsGuide/);
  assert.match(body, /HowCkWorksGuide/);
  assert.match(body, /InsideClaudeKitPlanModesArticle/);

  const enSlugPage = await readFile(new URL('src/pages/legacy/guides/[...slug].astro', root), 'utf8');
  assert.match(enSlugPage, /LegacyBatchBGuideBody/);
  assert.match(enSlugPage, /LEGACY_BATCH_B_SUFFIXES/);
});

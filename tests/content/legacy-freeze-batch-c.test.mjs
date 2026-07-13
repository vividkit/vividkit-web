import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import {
  LEGACY_BATCH_C_SUFFIXES,
  LEGACY_FROZEN_SUFFIXES,
  LEGACY_GUIDE_CATALOG,
} from '../../src/data/guides/legacy-guide-catalog.ts';

const root = new URL('../..', import.meta.url);

test('batch C freezes remaining catalog stubs and completes the archive', async () => {
  assert.equal(LEGACY_BATCH_C_SUFFIXES.length, 12);
  assert.equal(LEGACY_GUIDE_CATALOG.every((entry) => entry.freezeStatus === 'frozen'), true);
  assert.equal(LEGACY_FROZEN_SUFFIXES.length, LEGACY_GUIDE_CATALOG.length);

  for (const suffix of LEGACY_BATCH_C_SUFFIXES) {
    assert.ok(LEGACY_FROZEN_SUFFIXES.includes(suffix), `missing frozen mark for ${suffix}`);
  }

  const body = await readFile(new URL('src/components/guides/legacy/LegacyBatchCGuideBody.astro', root), 'utf8');
  assert.match(body, /CCSGuide/);
  assert.match(body, /CustomHooksGuide/);
  assert.match(body, /MigrateGuide/);
  assert.match(body, /FixLogsGuide/);

  const enSlugPage = await readFile(new URL('src/pages/legacy/guides/[...slug].astro', root), 'utf8');
  assert.match(enSlugPage, /LegacyBatchCGuideBody/);
  assert.match(enSlugPage, /LEGACY_BATCH_C_SUFFIXES/);
});

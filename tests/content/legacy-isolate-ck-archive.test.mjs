import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../..', import.meta.url);

test('batch B/C routers import isolated @legacy-ck trees, not live AK guides', async () => {
  for (const file of [
    'src/components/guides/legacy/LegacyBatchBGuideBody.astro',
    'src/components/guides/legacy/LegacyBatchCGuideBody.astro',
  ]) {
    const source = await readFile(new URL(file, root), 'utf8');
    assert.match(source, /@legacy-ck\/components\/guides\//);
    assert.equal(source.includes("from '@/components/guides/"), false);
    assert.equal(source.includes('from "@/components/guides/'), false);
  }
});

test('legacy-ck commands catalog stays CK-prefixed', async () => {
  const kit = await readFile(new URL('src/legacy-ck/data/guides/commands-engineer-kit.ts', root), 'utf8');
  assert.match(kit, /\/ck:/);
  assert.doesNotMatch(kit, /\/ak:/);
});

test('legacy mechanics uses isolated CK i18n utils', async () => {
  const guide = await readFile(new URL('src/components/guides/legacy/LegacyClaudeMechanicsGuide.astro', root), 'utf8');
  assert.match(guide, /@legacy-ck\/i18n\/utils/);
  const subtitle = await readFile(new URL('src/legacy-ck/i18n/en/guides.ts', root), 'utf8');
  assert.match(subtitle, /ClaudeKit configures your project/);
  assert.doesNotMatch(subtitle, /AgentKit onboards a project/);
});

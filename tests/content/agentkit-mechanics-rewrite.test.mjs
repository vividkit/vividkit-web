import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../../', import.meta.url);

test('live claude-mechanics teaches AgentKit structure facts, not ck init trees', async () => {
  const guide = await readFile(new URL('src/components/guides/ClaudeMechanicsGuide.astro', root), 'utf8');
  const structure = await readFile(
    new URL('src/components/guides/claude-mechanics/mechanics-agentkit-structure.astro', root),
    'utf8',
  );
  const kitVs = await readFile(
    new URL('src/components/guides/claude-mechanics/mechanics-kit-vs-your-config.astro', root),
    'utf8',
  );

  assert.match(guide, /MechanicsAgentkitStructure/);
  assert.doesNotMatch(guide, /MechanicsCkInitTree/);

  assert.match(structure, /agentkit-structure-facts/);
  assert.match(structure, /agentkit-target-capabilities/);
  assert.match(structure, /AGENTKIT_MECHANICS_TEACHING_STEPS/);
  assert.doesNotMatch(structure, /\bck\s+init\b/);
  assert.doesNotMatch(structure, /ak kit (?:init|install) engineer --target/);

  assert.match(kitVs, /agentkit-structure-facts/);
  assert.doesNotMatch(kitVs, /\.claude\/skills\/\*/);
});

test('legacy archive still freezes the CK ck-init tree copy', async () => {
  const legacyTree = await readFile(
    new URL('src/components/guides/legacy/claude-mechanics/mechanics-ck-init-tree.astro', root),
    'utf8',
  );
  assert.match(legacyTree, /\bck\s+init\b/);
});

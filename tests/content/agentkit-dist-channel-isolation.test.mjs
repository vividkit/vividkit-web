import assert from 'node:assert/strict';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';

import {
  scanAgentKitDistChannelIsolation,
} from '../../scripts/check-agentkit-dist-channel-isolation.mjs';

const SURFACES = [
  'guides/agentkit',
  'vi/guides/agentkit',
  'guides/cli',
  'vi/guides/cli',
  'guides/cli-commands',
  'vi/guides/cli-commands',
  'guides/coexistence',
  'vi/guides/coexistence',
];

async function fixture(expectation) {
  const root = await mkdtemp(join(tmpdir(), 'agentkit-dist-channel-'));
  for (const surface of SURFACES) {
    const directory = join(root, 'dist', surface);
    await mkdir(directory, { recursive: true });
    await writeFile(
      join(directory, 'index.html'),
      '<link rel="canonical" href="https://vividkit.dev/' + surface + '"><main data-agentkit-channel-root data-agentkit-active-channel="stable">stable shell</main>',
    );
  }
  await mkdir(join(root, 'dist', '_astro'), { recursive: true });
  await writeFile(
    join(root, 'dist', '_astro', 'agentkit-channel.js'),
    expectation === 'hold'
      ? 'agentkit-beta-hold-v1 Beta preview is unavailable in this build.'
      : 'agentkit-beta-published-loader-v1 import("./agentkit-beta-view.js")',
  );
  if (expectation === 'published') {
    await writeFile(
      join(root, 'dist', '_astro', 'agentkit-beta-view.js'),
      'agentkit-public-beta-view-v1 2.3.1-beta.1 public early-access channel',
    );
  }
  return root;
}

test('hold scan accepts a stable shell with a visible unavailable loader and rejects any published closure token', async () => {
  const root = await fixture('hold');
  try {
    assert.deepEqual((await scanAgentKitDistChannelIsolation({ root, expect: 'hold' })).diagnostics, []);
    await writeFile(
      join(root, 'dist', '_astro', 'leaked.js'),
      'agentkit-public-beta-view-v1 2.3.1-beta.1',
    );
    const result = await scanAgentKitDistChannelIsolation({ root, expect: 'hold' });
    assert.ok(result.diagnostics.some(({ id }) => id === 'hold-beta-token'));
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('published scan requires a publicly fetchable beta chunk marker and reviewed beta version', async () => {
  const root = await fixture('published');
  try {
    assert.deepEqual((await scanAgentKitDistChannelIsolation({ root, expect: 'published' })).diagnostics, []);
    await writeFile(join(root, 'dist', '_astro', 'agentkit-channel.js'), 'stable only');
    const result = await scanAgentKitDistChannelIsolation({ root, expect: 'published' });
    assert.ok(result.diagnostics.some(({ id }) => id === 'published-beta-token-missing'));
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('published scan rejects an inlined beta payload or a stable HTML eager reference', async () => {
  const root = await fixture('published');
  try {
    await writeFile(
      join(root, 'dist', '_astro', 'agentkit-channel.js'),
      'agentkit-beta-published-loader-v1 agentkit-public-beta-view-v1 2.3.1-beta.1',
    );
    await rm(join(root, 'dist', '_astro', 'agentkit-beta-view.js'));
    let result = await scanAgentKitDistChannelIsolation({ root, expect: 'published' });
    assert.ok(result.diagnostics.some(({ id }) => id === 'published-beta-view-in-loader-chunk'));
    assert.ok(result.diagnostics.some(({ id }) => id === 'published-beta-lazy-chunk-missing'));

    await writeFile(
      join(root, 'dist', '_astro', 'agentkit-channel.js'),
      'agentkit-beta-published-loader-v1 import("./agentkit-beta-view.js")',
    );
    await writeFile(
      join(root, 'dist', '_astro', 'agentkit-beta-view.js'),
      'agentkit-public-beta-view-v1 2.3.1-beta.1',
    );
    await writeFile(
      join(root, 'dist', 'guides', 'agentkit', 'index.html'),
      '<script src="/_astro/agentkit-beta-view.js"></script>',
    );
    result = await scanAgentKitDistChannelIsolation({ root, expect: 'published' });
    assert.ok(result.diagnostics.some(({ id }) => id === 'published-beta-chunk-eager-reference'));
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('scanner rejects unsupported expectation and missing surface outputs', async () => {
  const root = await fixture('hold');
  try {
    await assert.rejects(
      scanAgentKitDistChannelIsolation({ root, expect: 'unknown' }),
      /hold or published/,
    );
    await rm(join(root, 'dist', 'guides', 'cli'), { recursive: true, force: true });
    const result = await scanAgentKitDistChannelIsolation({ root, expect: 'hold' });
    assert.ok(result.diagnostics.some(({ id }) => id === 'surface-output-missing'));
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

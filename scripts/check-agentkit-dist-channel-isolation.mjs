#!/usr/bin/env node

import { access, lstat, readFile, readdir } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const PROJECT_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUTPUT_ROOTS = ['dist', '.vercel/output/static'];
const SURFACE_OUTPUTS = [
  'guides/agentkit/index.html',
  'vi/guides/agentkit/index.html',
  'guides/cli/index.html',
  'vi/guides/cli/index.html',
  'guides/cli-commands/index.html',
  'vi/guides/cli-commands/index.html',
  'guides/coexistence/index.html',
  'vi/guides/coexistence/index.html',
];
const HOLD_MARKER = 'agentkit-beta-hold-v1';
const PUBLISHED_MARKERS = [
  'agentkit-beta-published-loader-v1',
  'agentkit-public-beta-view-v1',
  '2.3.1-beta.1',
];
const PUBLISHED_LOADER_MARKER = PUBLISHED_MARKERS[0];
const PUBLISHED_VIEW_MARKER = PUBLISHED_MARKERS[1];
const PUBLISHED_VERSION = PUBLISHED_MARKERS[2];
const PROMOTED_PRERELEASE_TOKENS = [
  '2.4.0-beta.7',
  'AK-RELEASE-PRERELEASE-2.4.0-BETA.7',
];
const HOLD_FORBIDDEN = [
  ...PUBLISHED_MARKERS,
  ...PROMOTED_PRERELEASE_TOKENS,
  'AK-RELEASE-BETA-2.3.1-BETA.1',
  'agentkit-beta-view.mjs',
  'agentkit-beta-loader-published.mjs',
];

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function collectFiles(path, files, diagnostics) {
  const info = await lstat(path);
  if (info.isSymbolicLink()) {
    diagnostics.push({ id: 'output-symlink-refused', file: path });
    return;
  }
  if (info.isFile()) {
    files.push(path);
    return;
  }
  if (!info.isDirectory()) return;
  for (const entry of await readdir(path)) await collectFiles(join(path, entry), files, diagnostics);
}

function contains(buffer, token) {
  return buffer.includes(Buffer.from(token));
}

export async function scanAgentKitDistChannelIsolation({ root = PROJECT_ROOT, expect } = {}) {
  if (expect !== 'hold' && expect !== 'published') {
    throw new Error('Channel isolation expectation must be hold or published.');
  }

  const resolvedRoot = resolve(root);
  const diagnostics = [];
  const files = [];
  const outputRoots = [];
  for (const outputRoot of OUTPUT_ROOTS) {
    const absolute = join(resolvedRoot, outputRoot);
    if (await exists(absolute)) {
      outputRoots.push(absolute);
      await collectFiles(absolute, files, diagnostics);
    }
  }
  if (outputRoots.length === 0) diagnostics.push({ id: 'output-root-missing' });

  for (const surface of SURFACE_OUTPUTS) {
    const candidates = outputRoots.map((outputRoot) => join(outputRoot, surface));
    if (!(await Promise.all(candidates.map(exists))).some(Boolean)) {
      diagnostics.push({ id: 'surface-output-missing', file: surface });
    }
  }

  const entries = await Promise.all(files.map(async (file) => ({
    file,
    relativeFile: relative(resolvedRoot, file).split('\\').join('/'),
    body: await readFile(file),
  })));
  const tokenExists = (token) => entries.some(({ relativeFile, body }) => (
    relativeFile.includes(token) || contains(body, token)
  ));

  if (expect === 'hold') {
    if (!tokenExists(HOLD_MARKER)) diagnostics.push({ id: 'hold-marker-missing' });
    for (const token of HOLD_FORBIDDEN) {
      for (const entry of entries) {
        if (entry.relativeFile.includes(token) || contains(entry.body, token)) {
          diagnostics.push({ id: 'hold-beta-token', file: entry.relativeFile, token });
        }
      }
    }
  } else {
    for (const token of PUBLISHED_MARKERS) {
      if (!tokenExists(token)) diagnostics.push({ id: 'published-beta-token-missing', token });
    }

    const javaScriptChunks = entries.filter(({ relativeFile }) => (
      /(?:^|\/)_(?:astro)\/.*\.js$/.test(relativeFile)
    ));
    const publishedLoaderChunks = javaScriptChunks.filter(({ body }) => (
      contains(body, PUBLISHED_LOADER_MARKER)
    ));
    const publishedViewChunks = javaScriptChunks.filter(({ body }) => (
      !contains(body, PUBLISHED_LOADER_MARKER)
      && contains(body, PUBLISHED_VIEW_MARKER)
      && contains(body, PUBLISHED_VERSION)
    ));
    if (publishedLoaderChunks.length === 0) {
      diagnostics.push({ id: 'published-loader-chunk-missing' });
    }
    if (publishedViewChunks.length === 0) {
      diagnostics.push({ id: 'published-beta-lazy-chunk-missing' });
    }
    for (const entry of publishedLoaderChunks) {
      if (contains(entry.body, PUBLISHED_VIEW_MARKER) || contains(entry.body, PUBLISHED_VERSION)) {
        diagnostics.push({ id: 'published-beta-view-in-loader-chunk', file: entry.relativeFile });
      }
    }

    const surfaceHtmlEntries = entries.filter(({ relativeFile }) => (
      SURFACE_OUTPUTS.some((surface) => relativeFile.endsWith(surface))
    ));
    for (const entry of surfaceHtmlEntries) {
      if (contains(entry.body, PUBLISHED_VIEW_MARKER) || contains(entry.body, PUBLISHED_VERSION)) {
        diagnostics.push({ id: 'published-beta-view-in-stable-html', file: entry.relativeFile });
      }
      for (const betaChunk of publishedViewChunks) {
        const chunkName = betaChunk.relativeFile.split('/').at(-1);
        if (chunkName && contains(entry.body, chunkName)) {
          diagnostics.push({
            id: 'published-beta-chunk-eager-reference',
            file: entry.relativeFile,
            chunk: betaChunk.relativeFile,
          });
        }
      }
    }
  }

  for (const entry of entries.filter(({ relativeFile }) => /(?:^|\/)llms(?:-full)?\.txt$/.test(relativeFile))) {
    for (const token of [
      ...PUBLISHED_MARKERS,
      ...PROMOTED_PRERELEASE_TOKENS,
      'AK-RELEASE-BETA-2.3.1-BETA.1',
    ]) {
      if (contains(entry.body, token)) diagnostics.push({ id: 'llm-beta-token', file: entry.relativeFile, token });
    }
  }

  return { expectation: expect, scannedFiles: entries.length, outputRoots, diagnostics };
}

function parseArguments(argv) {
  const options = { root: PROJECT_ROOT };
  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] === '--root') options.root = argv[++index];
    else if (argv[index] === '--expect') options.expect = argv[++index];
    else throw new Error('Unsupported channel-isolation option.');
  }
  return options;
}

async function detectExpectation(root) {
  const candidates = [];
  for (const expectation of ['hold', 'published']) {
    const result = await scanAgentKitDistChannelIsolation({ root, expect: expectation });
    if (result.diagnostics.length === 0) candidates.push({ expectation, result });
  }
  if (candidates.length !== 1) throw new Error('Built output does not identify exactly one channel publication mode.');
  return candidates[0].result;
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  const result = options.expect
    ? await scanAgentKitDistChannelIsolation(options)
    : await detectExpectation(options.root);
  if (result.diagnostics.length > 0) {
    for (const diagnostic of result.diagnostics) console.error(`[agentkit-channel] ${JSON.stringify(diagnostic)}`);
    process.exitCode = 1;
    return;
  }
  console.log(`[agentkit-channel] ${result.expectation} pass (${result.scannedFiles} files)`);
}

const isCli = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isCli) main().catch((error) => {
  console.error(`[agentkit-channel] ${error.message}`);
  process.exitCode = 1;
});

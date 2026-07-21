#!/usr/bin/env node
import { lstat, mkdir, opendir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, posix, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DIGEST_SIDECAR_PATH, sha256, treeRoot } from './legacy-archive-integrity.mjs';
import { postbuildEvidence } from './legacy-archive-postbuild.mjs';

const ARCHIVE_ROOTS = [
  'src/legacy-ck',
  'src/components/guides/legacy',
  'src/pages/legacy',
  'src/pages/vi/legacy',
];
const CLOSURE_FILES = [
  'src/layouts/LegacyGuidesLayout.astro',
  'src/data/guides/legacy-guide-catalog.ts',
  'src/data/guides/legacy-archive-provenance.ts',
  'src/data/guides/legacy-archive-coexistence-recipes.ts',
  'src/i18n/legacy-archive-utils.ts',
  'src/i18n/index.ts',
  'src/styles/legacy-archive.css',
  'src/styles/global.css',
  'tailwind.config.mjs',
  'astro.config.mjs',
  'package.json',
  'package-lock.json',
  'src/components/ui/animated-terminal-demo.astro',
  'src/components/ui/LLMProviderIcon.astro',
  'src/data/constants.ts',
  'scripts/sync-legacy-archive-assets.mjs',
  'public/guides/ccs_dashboard_dark.png',
  'public/guides/ccs_dashboard_light.png',
  'public/guides/claudekit-5-pillars.png',
  'public/guides/claudekit-5-pillars-vi.png',
  'public/guides/claudekit-comparison.png',
  'public/guides/claudekit-comparison-vi.png',
  'public/guides/claudekit-team-metaphor.png',
  'public/guides/claudekit-team-metaphor-vi.png',
  'public/guides/claudekit-workflow.png',
  'public/guides/claudekit-workflow-vi.png',
  'public/guides/hooks/claudekit-hooks-guardrails-flow.svg',
  'public/guides/hooks/claudekit-hooks-guardrails-flow-dark.svg',
];

const ARCHIVE_EXTERNAL_IMPORT_ALLOWLIST = new Map([
  ['@/i18n', { target: 'src/i18n/index.ts', owner: 'legacy archive', reason: 'frozen language/path helpers' }],
  ['@/i18n/legacy-archive-utils', { target: 'src/i18n/legacy-archive-utils.ts', owner: 'legacy archive', reason: 'archive-only translations' }],
  ['@/layouts/LegacyGuidesLayout.astro', { target: 'src/layouts/LegacyGuidesLayout.astro', owner: 'legacy archive', reason: 'archive shell' }],
  ['@/data/guides/legacy-guide-catalog', { target: 'src/data/guides/legacy-guide-catalog.ts', owner: 'legacy archive', reason: 'archive routing catalog' }],
  ['@/data/guides/legacy-archive-coexistence-recipes', { target: 'src/data/guides/legacy-archive-coexistence-recipes.ts', owner: 'legacy archive', reason: 'archive coexistence copy' }],
  ['@/components/ui/LLMProviderIcon.astro', { target: 'src/components/ui/LLMProviderIcon.astro', owner: 'legacy archive', reason: 'measured shared presentation primitive' }],
  ['@/components/ui/animated-terminal-demo.astro', { target: 'src/components/ui/animated-terminal-demo.astro', owner: 'legacy archive', reason: 'measured shared presentation primitive' }],
  ['@/data/constants', { target: 'src/data/constants.ts', owner: 'legacy archive', reason: 'measured site identity constant' }],
  ['lucide-astro', { target: 'package-lock.json', owner: 'legacy archive', reason: 'locked icon runtime' }],
  ['alpinejs', { target: 'package-lock.json', owner: 'legacy archive', reason: 'locked archived interaction runtime' }],
]);

function safeSha256(value) {
  return typeof value === 'string' && /^[a-f0-9]{64}$/.test(value) ? value : 'invalid';
}

function safeByteDelta(expected, actual) {
  if (!Number.isSafeInteger(expected) || expected < 0 || !Number.isSafeInteger(actual) || actual < 0) return 'invalid';
  const delta = actual - expected;
  return delta >= 0 ? `+${delta}` : String(delta);
}

export function legacyArchivePostbuildMismatchSummary(expected, actual) {
  const expectedDigest = safeSha256(expected?.renderedBody?.rootSha256);
  const actualDigest = safeSha256(actual?.renderedBody?.rootSha256);
  const expectedLiveCssBytes = expected?.cssBudget?.liveReachableBytes;
  const actualLiveCssBytes = actual?.cssBudget?.liveReachableBytes;
  return [
    'archive rendered-body or CSS budget mismatch:',
    `renderedBody.rootSha256 expected=${expectedDigest} actual=${actualDigest};`,
    `cssBudget.liveReachableBytes delta=${safeByteDelta(expectedLiveCssBytes, actualLiveCssBytes)}`,
  ].join(' ');
}

function isInsideArchiveRoot(path) {
  return ARCHIVE_ROOTS.some((root) => path === root || path.startsWith(`${root}/`));
}

function archiveInternalTarget(path, specifier) {
  if (specifier.startsWith('.')) return posix.normalize(posix.join(posix.dirname(path), specifier));
  if (specifier.startsWith('@legacy-ck/')) return posix.normalize(`src/legacy-ck/${specifier.slice('@legacy-ck/'.length)}`);
  if (specifier.startsWith('@/components/guides/legacy/')) return posix.normalize(`src/${specifier.slice(2)}`);
  return null;
}

function parseArgs(argv) {
  const options = { repo: fileURLToPath(new URL('..', import.meta.url)), json: false, postbuild: false, refresh: null };
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--repo') options.repo = resolve(argv[++index]);
    else if (argument === '--json') options.json = true;
    else if (argument === '--postbuild') options.postbuild = true;
    else if (argument === '--refresh-source') options.refresh = 'source';
    else if (argument === '--refresh-postbuild') options.refresh = 'postbuild';
    else if (argument !== '--check') throw new Error(`unsupported option: ${argument}`);
  }
  return options;
}

async function walk(repo, path) {
  const absolute = resolve(repo, path);
  const stat = await lstat(absolute);
  if (stat.isSymbolicLink()) throw new Error(`symlink is forbidden in archive closure: ${path}`);
  if (stat.isFile()) return [path.split(sep).join('/')];
  if (!stat.isDirectory()) throw new Error(`unsupported archive closure entry: ${path}`);
  const names = [];
  for await (const entry of await opendir(absolute)) names.push(entry.name);
  const files = [];
  for (const name of names.sort()) files.push(...await walk(repo, join(path, name)));
  return files;
}

async function closure(repo) {
  const paths = [];
  for (const root of ARCHIVE_ROOTS) paths.push(...await walk(repo, root));
  paths.push(...CLOSURE_FILES);
  const unique = [...new Set(paths)].sort();
  if (unique.includes(DIGEST_SIDECAR_PATH)) throw new Error('expected digest sidecar cannot join measured closure');
  const entries = [];
  let measuredExpectedDigestFieldCount = 0;
  for (const path of unique) {
    const absolute = resolve(repo, path);
    const stat = await lstat(absolute);
    if (!stat.isFile() || stat.isSymbolicLink()) throw new Error(`unsupported measured entry: ${path}`);
    const bytes = await readFile(absolute);
    measuredExpectedDigestFieldCount += (bytes.toString('utf8').match(/expected[A-Z]\w*Digest/g) || []).length;
    entries.push({ path, type: 'file', mode: stat.mode & 0o111 ? '100755' : '100644', sha256: sha256(bytes) });
  }
  if (measuredExpectedDigestFieldCount) throw new Error('measured archive payload contains an expected digest field');
  return { paths: unique, rootSha256: treeRoot(entries), fileCount: entries.length, measuredExpectedDigestFieldCount };
}

function importSpecifiers(source) {
  const specs = [];
  for (const match of source.matchAll(/(?:import|export)\s+(?:[\s\S]*?\s+from\s+)?["']([^"']+)["']/g)) specs.push(match[1]);
  for (const match of source.matchAll(/import\(\s*["']([^"']+)["']\s*\)/g)) specs.push(match[1]);
  if (/import\(\s*[^"'\s]/.test(source) || /import\.meta\.glob\(\s*[^"']/.test(source)) specs.push('<indeterminate-dynamic-import>');
  return specs;
}

export function forbiddenArchiveImports(path, source) {
  return importSpecifiers(source).filter((specifier) => {
    if (specifier === '<indeterminate-dynamic-import>') return true;
    const internalTarget = archiveInternalTarget(path, specifier);
    if (internalTarget) return !isInsideArchiveRoot(internalTarget);
    return !ARCHIVE_EXTERNAL_IMPORT_ALLOWLIST.has(specifier);
  });
}

async function sourceBoundaries(repo, closurePaths) {
  for (const [specifier, entry] of ARCHIVE_EXTERNAL_IMPORT_ALLOWLIST) {
    if (!entry.owner || !entry.reason || !closurePaths.includes(entry.target)) {
      throw new Error(`invalid archive external import allowlist entry: ${specifier}`);
    }
  }
  const archiveToLiveFactViolations = [];
  for (const path of closurePaths.filter((item) => ARCHIVE_ROOTS.some((root) => item === root || item.startsWith(`${root}/`)))) {
    if (!/\.(astro|[cm]?[jt]sx?)$/.test(path)) continue;
    const source = await readFile(resolve(repo, path), 'utf8');
    for (const specifier of forbiddenArchiveImports(path, source)) archiveToLiveFactViolations.push(`${path} -> ${specifier}`);
  }

  const liveToArchiveViolations = [];
  const sourceFiles = await walk(repo, 'src');
  for (const path of sourceFiles) {
    if (closurePaths.includes(path)) continue;
    if (!/\.(astro|[cm]?[jt]sx?)$/.test(path)) continue;
    const source = await readFile(resolve(repo, path), 'utf8');
    for (const specifier of importSpecifiers(source)) {
      if (specifier.startsWith('@legacy-ck/')) liveToArchiveViolations.push(`${path} -> ${specifier}`);
    }
  }
  return { archiveToLiveFactViolations: archiveToLiveFactViolations.sort(), liveToArchiveViolations: liveToArchiveViolations.sort() };
}

async function readSidecar(repo) {
  return JSON.parse(await readFile(resolve(repo, DIGEST_SIDECAR_PATH), 'utf8'));
}

async function writeSidecar(repo, value) {
  const path = resolve(repo, DIGEST_SIDECAR_PATH);
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, `${JSON.stringify(value, null, 2)}\n`);
}

export async function checkLegacyArchive(options) {
  const measured = await closure(options.repo);
  const boundaries = await sourceBoundaries(options.repo, measured.paths);
  if (boundaries.archiveToLiveFactViolations.length || boundaries.liveToArchiveViolations.length) {
    throw new Error(`archive import boundary failed:\n${[...boundaries.archiveToLiveFactViolations, ...boundaries.liveToArchiveViolations].join('\n')}`);
  }
  let sidecar = options.refresh ? await readSidecar(options.repo).catch(() => ({ schemaVersion: 1 })) : await readSidecar(options.repo);
  const sourceClosure = { algorithm: 'sha256-length-prefixed-source-closure-v1', fileCount: measured.fileCount, rootSha256: measured.rootSha256 };
  if (options.refresh === 'source') {
    sidecar = { ...sidecar, sourceClosure };
    await writeSidecar(options.repo, sidecar);
  } else if (JSON.stringify(sidecar.sourceClosure) !== JSON.stringify(sourceClosure)) {
    throw new Error('archive source closure digest mismatch');
  }

  let generated = null;
  if (options.postbuild || options.refresh === 'postbuild') {
    generated = await postbuildEvidence(options.repo);
    if (options.refresh === 'postbuild') {
      sidecar = { ...sidecar, ...generated };
      await writeSidecar(options.repo, sidecar);
    } else if (
      JSON.stringify(sidecar.renderedBody) !== JSON.stringify(generated.renderedBody)
      || generated.cssBudget.liveReachableBytes > sidecar.cssBudget.liveReachableBytes
      || generated.cssBudget.sentinel !== sidecar.cssBudget.sentinel
    ) throw new Error(legacyArchivePostbuildMismatchSummary(sidecar, generated));
  }
  return {
    ok: true,
    closurePaths: measured.paths,
    closureRootSha256: measured.rootSha256,
    measuredExpectedDigestFieldCount: measured.measuredExpectedDigestFieldCount,
    ...boundaries,
    generated,
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    const options = parseArgs(process.argv.slice(2));
    const result = await checkLegacyArchive(options);
    console.log(options.json ? JSON.stringify(result) : `Legacy archive boundary OK (${result.closurePaths.length} measured files)`);
  } catch (error) {
    console.error(`Legacy archive boundary failed: ${error.message}`);
    process.exitCode = 1;
  }
}

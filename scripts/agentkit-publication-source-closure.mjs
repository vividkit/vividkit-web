import { createHash } from 'node:crypto';
import { execFile } from 'node:child_process';
import { existsSync, lstatSync, readFileSync, readdirSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { dirname, posix, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import ts from 'typescript';
import { guideSections } from '../src/data/guides-llms-index.mjs';

const PROJECT_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const execFileAsync = promisify(execFile);
const RECORD_START = '// agentkit-publication-record:start';
const RECORD_END = '// agentkit-publication-record:end';
const LOCAL_MULTI_TARGET_ALIASES = new Map([
  ['@agentkit-beta-loader', [
    'src/scripts/agentkit-beta-loader-hold.mjs',
    'src/scripts/agentkit-beta-loader-published.mjs',
  ]],
]);
const TAILWIND_SCAN_EXCLUSIONS = [
  'src/legacy-ck',
  'src/components/guides/legacy',
  'src/pages/legacy',
  'src/pages/vi/legacy',
  'src/layouts/LegacyGuidesLayout.astro',
];

function isTailwindExcluded(relativePath) {
  return TAILWIND_SCAN_EXCLUSIONS.some((excluded) => (
    relativePath === excluded || relativePath.startsWith(`${excluded}/`)
  ));
}

export function collectAgentKitTailwindScanRoots(root = PROJECT_ROOT, relativeDirectory = 'src') {
  const roots = [];
  const visit = (relativeDirectoryPath) => {
    for (const entry of readdirSync(resolve(root, relativeDirectoryPath), { withFileTypes: true })) {
      const relativePath = posix.join(relativeDirectoryPath, entry.name);
      if (isTailwindExcluded(relativePath)) continue;
      if (entry.isSymbolicLink()) throw new Error(`Tailwind publication scan refuses symlink: ${relativePath}`);
      if (entry.isDirectory()) visit(relativePath);
      else if (entry.isFile() && /\.(?:astro|css|mjs|ts)$/.test(relativePath)) roots.push(relativePath);
    }
  };
  visit(relativeDirectory);
  return roots.sort();
}

export const AGENTKIT_TAILWIND_SCAN_ROOTS = collectAgentKitTailwindScanRoots();

export async function collectAgentKitTailwindScanRootsFromGit(revision, root = PROJECT_ROOT) {
  if (!/^[a-f0-9]{40}$/.test(revision)) throw new Error('reviewed VividKit revision must be a full lowercase SHA');
  const { stdout } = await execFileAsync('git', [
    'ls-tree', '-rz', '--full-tree', '-r', revision, '--', 'src',
  ], { cwd: root, encoding: 'buffer', maxBuffer: 64 * 1024 * 1024 });
  const roots = [];
  for (const record of stdout.toString('utf8').split('\0').filter(Boolean)) {
    const match = record.match(/^(\d+)\s+(\w+)\s+[0-9a-f]+\t(.+)$/);
    if (!match) throw new Error(`unparseable reviewed Tailwind source record: ${record}`);
    const [, mode, type, relativePath] = match;
    if (isTailwindExcluded(relativePath) || !/\.(?:astro|css|mjs|ts)$/.test(relativePath)) continue;
    if (mode !== '100644' || type !== 'blob') {
      throw new Error(`reviewed Tailwind source must be a regular blob: ${relativePath}`);
    }
    roots.push(relativePath);
  }
  return roots.sort();
}

function llmPageRoot(path) {
  const base = `src/pages${path}`;
  const candidates = [`${base}.astro`, `${base}/index.astro`];
  const resolved = candidates.find((candidate) => existsSync(resolve(PROJECT_ROOT, candidate)));
  if (!resolved) throw new Error(`LLM build input route has no source page: ${path}`);
  return resolved;
}

export const AGENTKIT_LLM_BUILD_INPUT_ROOTS = guideSections
  .flatMap(({ links }) => links)
  .filter(({ interactive }) => !interactive)
  .map(({ path }) => llmPageRoot(path))
  .sort();

const AGENTKIT_PUBLICATION_IMPORT_ROOTS = [
  'astro.config.mjs',
  'tailwind.config.mjs',
  'package.json',
  'package-lock.json',
  'scripts/generate-llms-full.mjs',
  'scripts/agentkit-publication-source-closure.mjs',
  'scripts/check-agentkit-dist-channel-isolation.mjs',
  'src/components/guides/AgentKitGuide.astro',
  'src/components/guides/CLIGuide.astro',
  'src/components/guides/CLICommandsGuide.astro',
  'src/components/guides/CoexistenceGuide.astro',
  'src/data/guides-llms-index.mjs',
  'src/pages/guides/agentkit.astro',
  'src/pages/guides/cli.astro',
  'src/pages/guides/cli-commands.astro',
  'src/pages/guides/coexistence.astro',
  'src/pages/llms.txt.ts',
  'src/pages/vi/guides/agentkit.astro',
  'src/pages/vi/guides/cli.astro',
  'src/pages/vi/guides/cli-commands.astro',
  'src/pages/vi/guides/coexistence.astro',
  ...AGENTKIT_LLM_BUILD_INPUT_ROOTS,
  'src/scripts/agentkit-beta-loader-hold.mjs',
  'src/scripts/agentkit-beta-loader-published.mjs',
  'src/scripts/agentkit-channel-controller.mjs',
  'tsconfig.json',
];

export const AGENTKIT_PUBLICATION_ROOTS = [
  ...new Set([...AGENTKIT_PUBLICATION_IMPORT_ROOTS, ...AGENTKIT_TAILWIND_SCAN_ROOTS]),
];

const SOURCE_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.astro', '.json', '.css'];

function validateLocalAliasConfigSource(source) {
  if (!/find:\s*\/\^@agentkit-beta-loader\$\//.test(source)) {
    throw new Error('publication closure requires the exact @agentkit-beta-loader alias contract');
  }
  const configuredTargets = [...source.matchAll(/["']\.\/(src\/scripts\/agentkit-beta-loader-[^"']+\.mjs)["']/g)]
    .map((match) => match[1])
    .sort();
  const expectedTargets = [...LOCAL_MULTI_TARGET_ALIASES.get('@agentkit-beta-loader')].sort();
  if (JSON.stringify(configuredTargets) !== JSON.stringify(expectedTargets)) {
    throw new Error('publication closure alias targets differ from the reviewed multi-target contract');
  }
}

function validateTailwindSourceContract(source) {
  const configuredSources = [...source.matchAll(/^@source\s+([^;]+);$/gm)]
    .map((match) => match[1].trim());
  const expectedSources = [
    '"../"',
    'not "../legacy-ck"',
    'not "../components/guides/legacy"',
    'not "../pages/legacy"',
    'not "../pages/vi/legacy"',
    'not "../layouts/LegacyGuidesLayout.astro"',
  ];
  if (JSON.stringify(configuredSources) !== JSON.stringify(expectedSources)
    || !/^@config\s+"\.\.\/\.\.\/tailwind\.config\.mjs";$/m.test(source)) {
    throw new Error('publication closure Tailwind source/config contract changed without a resolver update');
  }
}

function executableSource(relativePath, source) {
  if (!relativePath.endsWith('.astro')) return source;
  const blocks = [];
  if (source.startsWith('---')) {
    const end = source.indexOf('\n---', 3);
    if (end !== -1) blocks.push(source.slice(3, end));
  }
  for (const match of source.matchAll(/<script(?![^>]*\/>)(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) blocks.push(match[1]);
  return blocks.join('\n');
}

function importSpecifiers(relativePath, source) {
  if (relativePath.endsWith('.css')) {
    const specifiers = [];
    for (const match of source.matchAll(/^@(?:import|config)\s+["']([^"']+)["']/gm)) specifiers.push(match[1]);
    return specifiers;
  }
  if (!/\.(?:[cm]?[jt]sx?|astro)$/.test(relativePath)) return [];
  const executable = executableSource(relativePath, source);
  const sourceFile = ts.createSourceFile(
    relativePath,
    executable,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  if (sourceFile.parseDiagnostics.length) {
    const first = sourceFile.parseDiagnostics[0];
    throw new Error(`publication source cannot be parsed: ${relativePath}:${first.start ?? 0} ${first.messageText}`);
  }
  const specifiers = new Set();
  const visit = (node) => {
    if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node))
      && node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) {
      specifiers.add(node.moduleSpecifier.text);
    }
    if (ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.ImportKeyword) {
      if (node.arguments.length !== 1 || !ts.isStringLiteral(node.arguments[0])) {
        throw new Error(`publication source has an indeterminate dynamic import: ${relativePath}`);
      }
      specifiers.add(node.arguments[0].text);
    }
    if (ts.isCallExpression(node) && node.expression.getText(sourceFile).startsWith('import.meta.glob')) {
      throw new Error(`publication source has an unsupported import.meta.glob input: ${relativePath}`);
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  return [...specifiers];
}

function localImportCandidateGroups(importer, specifier) {
  const aliasTargets = LOCAL_MULTI_TARGET_ALIASES.get(specifier);
  if (aliasTargets) return aliasTargets.map((target) => [target]);
  let target;
  if (specifier.startsWith('@/')) target = `src/${specifier.slice(2)}`;
  else if (specifier.startsWith('.')) target = posix.normalize(posix.join(posix.dirname(importer), specifier));
  else return [];
  if (posix.isAbsolute(target) || target === '..' || target.startsWith('../')) {
    throw new Error(`publication import escapes repository: ${importer} -> ${specifier}`);
  }
  if (posix.extname(target)) return [[target]];
  return [[
    ...SOURCE_EXTENSIONS.map((extension) => `${target}${extension}`),
    ...SOURCE_EXTENSIONS.map((extension) => `${target}/index${extension}`),
  ]];
}

function resolveCurrentImports(importer, specifier) {
  const candidateGroups = localImportCandidateGroups(importer, specifier);
  const dependencies = [];
  for (const candidates of candidateGroups) {
    let dependency = null;
    for (const candidate of candidates) {
      const absolute = resolve(PROJECT_ROOT, candidate);
      if (!existsSync(absolute)) continue;
      const stat = lstatSync(absolute);
      if (stat.isSymbolicLink()) throw new Error(`publication closure refuses symlink: ${candidate}`);
      if (stat.isFile()) {
        dependency = candidate;
        break;
      }
    }
    if (!dependency) throw new Error(`publication local import cannot be resolved: ${importer} -> ${specifier}`);
    dependencies.push(dependency);
  }
  return dependencies;
}

function currentTransitiveClosure() {
  validateLocalAliasConfigSource(readFileSync(resolve(PROJECT_ROOT, 'astro.config.mjs'), 'utf8'));
  validateTailwindSourceContract(readFileSync(resolve(PROJECT_ROOT, 'src/styles/global.css'), 'utf8'));
  const queue = [
    ...AGENTKIT_PUBLICATION_IMPORT_ROOTS.map((relativePath) => ({ relativePath, traverseImports: true })),
    ...AGENTKIT_TAILWIND_SCAN_ROOTS.map((relativePath) => ({ relativePath, traverseImports: false })),
  ];
  const visited = new Set();
  const traversed = new Set();
  while (queue.length) {
    const { relativePath, traverseImports } = queue.shift();
    if (visited.has(relativePath) && (!traverseImports || traversed.has(relativePath))) continue;
    const absolute = resolve(PROJECT_ROOT, relativePath);
    const stat = lstatSync(absolute);
    if (!stat.isFile() || stat.isSymbolicLink()) throw new Error(`unsupported publication source: ${relativePath}`);
    visited.add(relativePath);
    if (!traverseImports) continue;
    traversed.add(relativePath);
    const source = readFileSync(absolute, 'utf8');
    for (const specifier of importSpecifiers(relativePath, source)) {
      for (const dependency of resolveCurrentImports(relativePath, specifier)) {
        if (!traversed.has(dependency)) queue.push({ relativePath: dependency, traverseImports: true });
      }
    }
  }
  return [...visited].sort();
}

export const AGENTKIT_PUBLICATION_SOURCE_CLOSURE = currentTransitiveClosure();

export function canonicalizeAgentKitPublicationSource(relativePath, source) {
  if (relativePath !== 'src/data/guides/agentkit/agentkit-publication-policy.ts') return source;
  const start = source.indexOf(RECORD_START);
  const end = source.indexOf(RECORD_END);
  if (start === -1 || end === -1 || end <= start) {
    throw new Error('publication record canonicalization markers are missing or invalid');
  }
  return `${source.slice(0, start)}${RECORD_START}\n/* publication data is independently bound to an approval revision */\n${source.slice(end)}`;
}

export function canonicalizeAgentKitPublicationRecord(source) {
  const start = source.indexOf(RECORD_START);
  const end = source.indexOf(RECORD_END);
  if (start === -1 || end === -1 || end <= start) {
    throw new Error('publication record canonicalization markers are missing or invalid');
  }
  const record = source.slice(start, end + RECORD_END.length);
  const matches = [...record.matchAll(/approvalRevisionSha:\s*(?:null|'[a-f0-9]{40}')/g)];
  if (matches.length !== 1) throw new Error('publication record must contain exactly one approvalRevisionSha field');
  return record.replace(matches[0][0], 'approvalRevisionSha: <approval-revision-self-reference>');
}

function publicationRecordDigest(source) {
  return createHash('sha256').update(canonicalizeAgentKitPublicationRecord(source)).digest('hex');
}

async function transitiveClosureFromReader(readSource, tailwindScanRoots) {
  validateLocalAliasConfigSource(await readSource('astro.config.mjs'));
  validateTailwindSourceContract(await readSource('src/styles/global.css'));
  const queue = [
    ...AGENTKIT_PUBLICATION_IMPORT_ROOTS.map((relativePath) => ({ relativePath, traverseImports: true })),
    ...tailwindScanRoots.map((relativePath) => ({ relativePath, traverseImports: false })),
  ];
  const visited = new Set();
  const traversed = new Set();
  while (queue.length) {
    const { relativePath, traverseImports } = queue.shift();
    if (visited.has(relativePath) && (!traverseImports || traversed.has(relativePath))) continue;
    const source = await readSource(relativePath);
    visited.add(relativePath);
    if (!traverseImports) continue;
    traversed.add(relativePath);
    for (const specifier of importSpecifiers(relativePath, source)) {
      const candidateGroups = localImportCandidateGroups(relativePath, specifier);
      for (const candidates of candidateGroups) {
        let dependency = null;
        for (const candidate of candidates) {
          try {
            await readSource(candidate);
            dependency = candidate;
            break;
          } catch {
            // Try the next exact extension/index candidate from the reviewed revision.
          }
        }
        if (!dependency) throw new Error(`publication local import cannot be resolved: ${relativePath} -> ${specifier}`);
        if (!traversed.has(dependency)) queue.push({ relativePath: dependency, traverseImports: true });
      }
    }
  }
  return [...visited].sort();
}

async function computeClosure(readSource, relativePaths = AGENTKIT_PUBLICATION_SOURCE_CLOSURE) {
  const hash = createHash('sha256');
  for (const relativePath of relativePaths) {
    const source = canonicalizeAgentKitPublicationSource(relativePath, await readSource(relativePath));
    hash.update(relativePath);
    hash.update('\0');
    hash.update(source);
    hash.update('\0');
  }
  return hash.digest('hex');
}

export async function computeAgentKitPublicationSourceClosure(root = PROJECT_ROOT) {
  const readSource = (relativePath) => readFile(resolve(root, relativePath), 'utf8');
  const relativePaths = await transitiveClosureFromReader(
    readSource,
    collectAgentKitTailwindScanRoots(root),
  );
  return computeClosure(readSource, relativePaths);
}

export async function computeAgentKitPublicationKnownSourceClosure(root = PROJECT_ROOT) {
  return computeClosure(
    (relativePath) => readFile(resolve(root, relativePath), 'utf8'),
    AGENTKIT_PUBLICATION_SOURCE_CLOSURE,
  );
}

export async function computeAgentKitPublicationSourceClosureFromGit(revision, root = PROJECT_ROOT) {
  if (!/^[a-f0-9]{40}$/.test(revision)) throw new Error('reviewed VividKit revision must be a full lowercase SHA');
  await execFileAsync('git', ['merge-base', '--is-ancestor', revision, 'HEAD'], { cwd: root });
  const cache = new Map();
  const readGitSource = async (relativePath) => {
    if (cache.has(relativePath)) return cache.get(relativePath);
    const { stdout } = await execFileAsync('git', ['show', `${revision}:${relativePath}`], {
      cwd: root,
      encoding: 'utf8',
      maxBuffer: 10 * 1024 * 1024,
    });
    cache.set(relativePath, stdout);
    return stdout;
  };
  const relativePaths = await transitiveClosureFromReader(
    readGitSource,
    await collectAgentKitTailwindScanRootsFromGit(revision, root),
  );
  return computeClosure(readGitSource, relativePaths);
}

export async function computeAgentKitPublicationRecordDigest(root = PROJECT_ROOT) {
  return publicationRecordDigest(await readFile(
    resolve(root, 'src/data/guides/agentkit/agentkit-publication-policy.ts'),
    'utf8',
  ));
}

export async function computeAgentKitPublicationRecordDigestFromGit(revision, root = PROJECT_ROOT) {
  if (!/^[a-f0-9]{40}$/.test(revision)) throw new Error('approval revision must be a full lowercase SHA');
  await execFileAsync('git', ['merge-base', '--is-ancestor', revision, 'HEAD'], { cwd: root });
  const { stdout } = await execFileAsync('git', [
    'show',
    `${revision}:src/data/guides/agentkit/agentkit-publication-policy.ts`,
  ], { cwd: root, encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
  return publicationRecordDigest(stdout);
}

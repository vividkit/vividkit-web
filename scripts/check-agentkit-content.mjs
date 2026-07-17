#!/usr/bin/env node

import { randomUUID } from 'node:crypto';
import { access, mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

import { AGENTKIT_LEGACY_ALLOWLIST } from '../tests/content/agentkit-legacy-allowlist.mjs';

const SCRIPT_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE_INCLUDES = ['src', 'README.md', 'README.vi.md', 'AGENTS.md', 'CLAUDE.md', 'docs'];
const POSTBUILD_INCLUDES = ['dist', '.vercel/output/static'];
const SCANNABLE_SOURCE_EXTENSIONS = new Set([
  '.astro', '.cjs', '.html', '.js', '.json', '.jsx', '.md', '.mdx', '.mjs', '.ts', '.tsx', '.txt', '.xml',
]);
const SCANNABLE_GENERATED_EXTENSIONS = new Set(['.html', '.json', '.map', '.txt', '.xml']);
const EXCLUDED_SEGMENTS = new Set(['.git', '.astro', 'archive', 'node_modules', 'plans', 'reference']);
const CURRENT_PUBLIC_DOCS = new Set([
  'README.md',
  'README.vi.md',
  'AGENTS.md',
  'CLAUDE.md',
  'docs/project-overview-pdr.md',
  'docs/codebase-summary.md',
  'docs/agentkit-migration-validation.md',
  'docs/agentkit-legacy-skill-cleanup-source-record.md',
]);

export const CONTENT_DETECTORS = [
  {
    id: 'legacy-cli-install',
    category: 'legacy-recommendation',
    modes: ['agentkit-active'],
    pattern: /npm\s+(?:install|i)\s+-g\s+claudekit-cli/gi,
  },
  {
    id: 'legacy-cli-command',
    category: 'legacy-recommendation',
    modes: ['agentkit-active'],
    pattern: /\bck\s+(?:new|init|update|setup|skills|agents|doctor|versions|config|migrate|uninstall)\b/gi,
  },
  {
    id: 'legacy-slash-command',
    category: 'legacy-recommendation',
    modes: ['agentkit-active'],
    pattern: /\/(?:ck|ckm):(?:[a-z][a-z0-9-]*|\*)/gi,
  },
  {
    id: 'legacy-dollar-command',
    category: 'legacy-recommendation',
    modes: ['agentkit-active'],
    pattern: /\$(?:ck|ckm):(?:[a-z][a-z0-9-]*|\*)/gi,
  },
  {
    id: 'stale-ten-step',
    category: 'stale-doc-claim',
    modes: ['public-docs'],
    pattern: /\b(?:10-step|10 step|ten-step|ten ordered stages|10 bước)\b/gi,
  },
  {
    id: 'stale-agentkit-version',
    category: 'stale-doc-claim',
    modes: ['public-docs'],
    pattern: /\b(?:AgentKit|ak)(?: CLI)?(?: v| )?2\.1\.0\b/gi,
  },
  {
    id: 'stale-route-count',
    category: 'stale-doc-claim',
    modes: ['public-docs'],
    pattern: /\b(?:74-route|74 routes?|74 pages?|74-page|74 trang|72-route baseline)\b/gi,
  },
  {
    id: 'stale-broad-coexistence',
    category: 'stale-doc-claim',
    modes: ['public-docs'],
    pattern: /\b(?:stage|run)?\s*`?(?:ak|AgentKit)`?\s+(?:alongside|beside|side-by-side with|song song (?:với|cùng))\s+`?(?:ck|ClaudeKit)`?(?:\s+in the same scope)?/gi,
  },
  {
    id: 'local-maintainer-skill-claim',
    category: 'stale-doc-claim',
    modes: ['public-docs'],
    pattern: /\/(?:project:)?vk:(?:[a-z][a-z0-9-]*|\*)/gi,
  },
  {
    id: 'dangling-governance-workflow',
    category: 'stale-doc-claim',
    modes: ['public-docs'],
    pattern: /\.(?:Codex|claude)\/workflows\//g,
  },
  {
    id: 'default-migrate-apply',
    category: 'stale-doc-claim',
    modes: ['public-docs'],
    pattern: /\bak\s+migrate\s+--apply\b|\bmigrate[^\n]{0,40}\bapply by default\b/gi,
  },
  {
    id: 'unconditional-legacy-npm-uninstall',
    category: 'stale-doc-claim',
    modes: ['public-docs'],
    pattern: /\bnpm\s+uninstall\s+-g\s+claudekit-cli\b/gi,
  },
  {
    id: 'unconditional-agentkit-global-install',
    category: 'stale-doc-claim',
    modes: ['public-docs'],
    pattern: /\b(?:npm|pnpm|yarn|bun)\s+(?:install|add)\s+(?:--global|-g)\s+[^\n]*agentkit[^\n]*/gi,
  },
  {
    id: 'github-token',
    category: 'credential',
    modes: ['agentkit-active', 'legacy-backlog', 'public-docs'],
    pattern: /gh[pousr]_[A-Za-z0-9]{36,}/g,
  },
  {
    id: 'openai-token',
    category: 'credential',
    modes: ['agentkit-active', 'legacy-backlog', 'public-docs'],
    pattern: /sk-[A-Za-z0-9]{24,}/g,
  },
  {
    id: 'google-api-key',
    category: 'credential',
    modes: ['agentkit-active', 'legacy-backlog', 'public-docs'],
    pattern: /AIza[0-9A-Za-z_-]{35}/g,
  },
  {
    id: 'aws-access-key',
    category: 'credential',
    modes: ['agentkit-active', 'legacy-backlog', 'public-docs'],
    pattern: /AKIA[0-9A-Z]{16}/g,
  },
  {
    id: 'agentkit-credential',
    category: 'credential',
    modes: ['agentkit-active', 'legacy-backlog', 'public-docs'],
    pattern: /ak_(?:license|live)_[A-Za-z0-9_-]{16,}/g,
  },
  {
    id: 'private-key',
    category: 'credential',
    modes: ['agentkit-active', 'legacy-backlog', 'public-docs'],
    pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g,
  },
];

const DETECTOR_BY_ID = new Map(CONTENT_DETECTORS.map((detector) => [detector.id, detector]));

function normalizePath(path) {
  return path.split(sep).join('/').replace(/^\.\//, '');
}

function extensionOf(path) {
  const name = path.slice(path.lastIndexOf('/') + 1);
  const dot = name.lastIndexOf('.');
  return dot >= 0 ? name.slice(dot).toLowerCase() : '';
}

function isPrivateEnvironmentFile(path) {
  const name = path.slice(path.lastIndexOf('/') + 1).toLowerCase();
  return name === '.env' || name.startsWith('.env.') || name.endsWith('.pem') || name.endsWith('.key');
}

function isExcludedSourcePath(path) {
  const segments = normalizePath(path).split('/');
  return segments.some((segment) => EXCLUDED_SEGMENTS.has(segment)) || isPrivateEnvironmentFile(path);
}

function sourceMode(file) {
  if (CURRENT_PUBLIC_DOCS.has(file)) return 'public-docs';
  return (
    file.startsWith('src/data/guides/agentkit/')
    || file.startsWith('src/components/guides/agentkit/')
    || file.startsWith('src/components/guides/what-is-claudekit/')
    || file.startsWith('src/data/guides/how-ck-works/')
    || file.startsWith('src/components/guides/how-ck-works/')
    || file.startsWith('src/data/guides/claude-mechanics/')
    || (file.startsWith('src/components/guides/claude-mechanics/') && !file.includes('/legacy/'))
    || file === 'src/components/guides/ClaudeMechanicsGuide.astro'
    || file === 'src/components/guides/WhatIsClaudeKitGuide.astro'
    || file === 'src/pages/guides/agentkit.astro'
    || file === 'src/pages/vi/guides/agentkit.astro'
    || file === 'src/pages/guides/what-is-claudekit.astro'
    || file === 'src/pages/vi/guides/what-is-claudekit.astro'
    || file === 'src/i18n/en/what-is-claudekit.ts'
    || file === 'src/i18n/vi/what-is-claudekit.ts'
    || file === 'src/pages/guides/how-ck-works.astro'
    || file === 'src/pages/vi/guides/how-ck-works.astro'
    || file === 'src/pages/guides/claude-mechanics.astro'
    || file === 'src/pages/vi/guides/claude-mechanics.astro'
  ) ? 'agentkit-active' : 'legacy-backlog';
}

function generatedMode(file) {
  if (file.includes('/legacy/guides/')) return 'legacy-backlog';
  return (
    file.includes('/guides/agentkit/')
    || file.includes('/guides/what-is-claudekit/')
    || file.includes('/guides/how-ck-works/')
    || file.includes('/guides/claude-mechanics/')
  ) ? 'agentkit-active' : 'legacy-backlog';
}

export function validateAllowlist(allowlist) {
  for (const entry of allowlist) {
    const detector = DETECTOR_BY_ID.get(entry?.detector);
    const exactFile = typeof entry?.file === 'string'
      && !isAbsolute(entry.file)
      && !/[?*\[\]]/.test(entry.file)
      && !entry.file.split('/').includes('..');
    const exactPattern = detector?.pattern.source === entry?.pattern;
    const bounded = Number.isInteger(entry?.maxCount) && entry.maxCount > 0;
    const documented = typeof entry?.owner === 'string' && entry.owner.trim().length > 0
      && typeof entry?.reason === 'string' && entry.reason.trim().length > 0;
    const allowlistable = detector?.category === 'legacy-recommendation';
    if (!exactFile || !exactPattern || !bounded || !documented || !allowlistable) {
      throw new Error('Invalid allowlist entry; exact bounded legacy exceptions are required.');
    }
  }
}

function allowedCountFor(file, detector, allowlist) {
  return allowlist.find((entry) => (
    entry.file === file
    && entry.detector === detector.id
    && entry.pattern === detector.pattern.source
  ))?.maxCount ?? 0;
}

function lineAt(text, index) {
  let line = 1;
  for (let cursor = 0; cursor < index; cursor += 1) {
    if (text.charCodeAt(cursor) === 10) line += 1;
  }
  return line;
}

export function scanText({ file, mode, text, allowlist = AGENTKIT_LEGACY_ALLOWLIST }) {
  validateAllowlist(allowlist);
  const diagnostics = [];

  for (const detector of CONTENT_DETECTORS) {
    if (!detector.modes.includes(mode)) continue;
    const pattern = new RegExp(detector.pattern.source, detector.pattern.flags);
    const matches = [];
    for (const match of text.matchAll(pattern)) matches.push(match.index);
    const allowed = allowedCountFor(file, detector, allowlist);

    for (const index of matches.slice(allowed)) {
      diagnostics.push({
        detector: detector.id,
        category: detector.category,
        file,
        line: lineAt(text, index),
        incidentId: randomUUID(),
      });
    }
  }

  return diagnostics;
}

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function collectFiles(path, root, extensions, sourceScan) {
  if (!(await exists(path))) return [];
  const info = await stat(path);
  if (info.isFile()) {
    const file = normalizePath(relative(root, path));
    if (sourceScan && isExcludedSourcePath(file)) return [];
    return extensions.has(extensionOf(file)) ? [file] : [];
  }

  const files = [];
  for (const entry of await readdir(path, { withFileTypes: true })) {
    const child = join(path, entry.name);
    const file = normalizePath(relative(root, child));
    if (sourceScan && isExcludedSourcePath(file)) continue;
    if (entry.isDirectory() || entry.isFile()) {
      files.push(...await collectFiles(child, root, extensions, sourceScan));
    }
  }
  return files;
}

async function scanFiles({ root, includes, extensions, modeForFile, sourceScan, allowlist }) {
  const files = new Set();
  for (const include of includes) {
    for (const file of await collectFiles(join(root, include), root, extensions, sourceScan)) files.add(file);
  }

  const diagnostics = [];
  for (const file of [...files].sort()) {
    const text = await readFile(join(root, file), 'utf8');
    diagnostics.push(...scanText({ file, mode: modeForFile(file), text, allowlist }));
  }
  return { files: files.size, diagnostics };
}

export async function runAudit({
  root = SCRIPT_ROOT,
  scanSource = true,
  scanPostbuild = false,
  allowlist = AGENTKIT_LEGACY_ALLOWLIST,
} = {}) {
  validateAllowlist(allowlist);
  const resolvedRoot = resolve(root);
  let scannedFiles = 0;
  const diagnostics = [];

  if (scanSource) {
    const result = await scanFiles({
      root: resolvedRoot,
      includes: SOURCE_INCLUDES,
      extensions: SCANNABLE_SOURCE_EXTENSIONS,
      modeForFile: sourceMode,
      sourceScan: true,
      allowlist,
    });
    scannedFiles += result.files;
    diagnostics.push(...result.diagnostics);
  }

  if (scanPostbuild) {
    const result = await scanFiles({
      root: resolvedRoot,
      includes: POSTBUILD_INCLUDES,
      extensions: SCANNABLE_GENERATED_EXTENSIONS,
      modeForFile: generatedMode,
      sourceScan: false,
      allowlist,
    });
    scannedFiles += result.files;
    diagnostics.push(...result.diagnostics);
  }

  return { scannedFiles, diagnostics };
}

export function createAuditReport(diagnostics, scannedFiles = 0) {
  return {
    version: 1,
    status: diagnostics.length === 0 ? 'pass' : 'fail',
    scannedFiles,
    diagnosticCount: diagnostics.length,
    diagnostics,
  };
}

export function renderDiagnostics(diagnostics) {
  return diagnostics.map(({ category, detector, file, line, incidentId }) => (
    `[${category}] ${detector} ${file}:${line} incident=${incidentId}`
  )).join('\n');
}

function parseArguments(argv) {
  const options = { root: SCRIPT_ROOT, scanSource: true, scanPostbuild: false, json: false };
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--root') options.root = resolve(argv[++index]);
    else if (argument === '--report') options.report = argv[++index];
    else if (argument === '--json') options.json = true;
    else if (argument === '--postbuild') {
      options.scanSource = false;
      options.scanPostbuild = true;
    } else if (argument === '--with-postbuild') {
      options.scanSource = true;
      options.scanPostbuild = true;
    } else if (argument !== '--source') {
      throw new Error('Unsupported audit option.');
    }
  }
  return options;
}

function safeReportPath(root, report) {
  if (!report || isAbsolute(report) || report.split(/[\\/]/).includes('..')) {
    throw new Error('Audit report path must be relative to the project root.');
  }
  return resolve(root, report);
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  const result = await runAudit(options);
  const report = createAuditReport(result.diagnostics, result.scannedFiles);

  if (options.report) {
    const reportPath = safeReportPath(options.root, options.report);
    await mkdir(dirname(reportPath), { recursive: true });
    await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
  }

  if (options.json) console.log(JSON.stringify(report));
  else if (result.diagnostics.length > 0) console.log(renderDiagnostics(result.diagnostics));
  else console.log(`[agentkit-content] pass (${result.scannedFiles} files scanned)`);

  if (result.diagnostics.length > 0) {
    console.error(`[agentkit-content] failed (${result.diagnostics.length} incident(s))`);
    process.exitCode = 1;
  }
}

const isCli = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isCli) {
  main().catch(() => {
    const incidentId = randomUUID();
    console.error(`[agentkit-content] audit error incident=${incidentId}`);
    process.exitCode = 1;
  });
}

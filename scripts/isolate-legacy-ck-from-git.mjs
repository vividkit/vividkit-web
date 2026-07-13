#!/usr/bin/env node
/**
 * Restore CK-era guide trees from a git commit into src/legacy-ck/
 * and rewrite imports to @legacy-ck/* so /legacy/guides can render without live AK bleed.
 *
 * Usage: node scripts/isolate-legacy-ck-from-git.mjs [commit]
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, existsSync, readdirSync, statSync, readFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const COMMIT = process.argv[2] || '56524c9';
const DEST = join(ROOT, 'src/legacy-ck');

const PATHS = [
  // L0 mechanics i18n slice handled separately — components already under legacy/
  // L1 commands pathway
  'src/components/guides/CommandsGuide.astro',
  'src/components/guides/commands',
  'src/data/guides/commands-engineer-kit.ts',
  'src/data/guides/commands-marketing-kit.ts',
  'src/data/guides/commands-migration.ts',
  'src/data/guides/commands-types.ts',
  'src/data/guides/commands-styles.ts',
  'src/data/guides/commands-definitions.ts',
  'src/i18n/en/commands.ts',
  'src/i18n/vi/commands.ts',
  // L1 workflows
  'src/components/guides/WorkflowsGuide.astro',
  'src/components/guides/workflows',
  'src/data/guides/workflows.ts',
  'src/data/guides/workflows-data',
  'src/data/vi/guides/workflows.ts',
  'src/data/vi/guides/workflows-data',
  'src/i18n/en/workflows.ts',
  'src/i18n/vi/workflows.ts',
  // L1 flowchart
  'src/components/guides/FlowchartGuide.astro',
  'src/components/guides/FlowchartInteractive.astro',
  'src/components/guides/FlowchartInteractiveMarketing.astro',
  'src/components/guides/flowchart',
  'src/data/guides/flowchart.ts',
  'src/data/guides/flowchart-index.ts',
  'src/data/guides/flowchart-engineer-data.ts',
  'src/data/guides/flowchart-marketing-data.ts',
  'src/data/guides/flowchart-legacy-data.ts',
  'src/data/guides/flowchart-types.ts',
  // L1 finding-unknowns
  'src/components/guides/FindingUnknownsGuide.astro',
  'src/components/guides/finding-unknowns',
  // L2 cli
  'src/components/guides/CLIGuide.astro',
  'src/components/guides/cli-guide',
  'src/i18n/en/cli.ts',
  'src/i18n/vi/cli.ts',
  // L2 cli-commands
  'src/components/guides/CLICommandsGuide.astro',
  'src/components/guides/cli-commands',
  'src/data/guides/cli-commands-cheatsheet.ts',
  // L2 how-ck-works
  'src/components/guides/how-ck-works',
  'src/data/guides/how-ck-works',
  // L2 what-is
  'src/components/guides/WhatIsClaudeKitGuide.astro',
  'src/components/guides/what-is-claudekit',
  'src/i18n/en/what-is-claudekit.ts',
  'src/i18n/vi/what-is-claudekit.ts',
  // L3
  'src/components/guides/CustomHooksGuide.astro',
  'src/components/guides/custom-hooks',
  'src/data/guides/custom-hooks',
  'src/components/guides/UIReviewGateGuide.astro',
  'src/components/guides/ui-review-gate',
  'src/components/guides/MigrateGuide.astro',
  'src/components/guides/migrate',
  'src/components/guides/FixLogsGuide.astro',
  'src/components/guides/UIUXGuide.astro',
  'src/components/guides/uiux',
  'src/i18n/en/uiux.ts',
  'src/i18n/vi/uiux.ts',
  // L4 inside
  'src/components/guides/InsideClaudeKitGuide.astro',
  'src/components/guides/inside-claudekit',
  // L4 neutrals
  'src/components/guides/PermissionsGuide.astro',
  'src/components/guides/CCSGuide.astro',
  'src/components/guides/ccs',
  'src/components/guides/HappyCCSGuide.astro',
  'src/components/guides/CodexAppGuide.astro',
  'src/components/guides/IDEConfigGuide.astro',
  'src/components/guides/RemoteControlGuide.astro',
  'src/components/guides/SessionRecoveryGuide.astro',
  // shared snippet used by finding-unknowns
  'src/components/guides/TerminalSnippet.astro',
];

function gitShow(path) {
  try {
    return execFileSync('git', ['show', `${COMMIT}:${path}`], { cwd: ROOT, encoding: 'buffer', maxBuffer: 50 * 1024 * 1024 });
  } catch {
    return null;
  }
}

function listGitTree(path) {
  try {
    const out = execFileSync('git', ['ls-tree', '-r', '--name-only', COMMIT, path], { cwd: ROOT, encoding: 'utf8' });
    return out.split('\n').filter(Boolean);
  } catch {
    return [];
  }
}

function destPath(srcPath) {
  // src/foo/bar -> src/legacy-ck/foo/bar
  return join(DEST, srcPath.replace(/^src\//, ''));
}

function rewriteContent(content, srcPath) {
  let text = content;
  // Point @/data/guides/... and @/components/guides/... and @/i18n/... at legacy-ck mirrors
  text = text.replaceAll("@/data/guides/", "@legacy-ck/data/guides/");
  text = text.replaceAll('@/data/guides/', '@legacy-ck/data/guides/');
  text = text.replaceAll("@/data/vi/guides/", "@legacy-ck/data/vi/guides/");
  text = text.replaceAll('@/data/vi/guides/', '@legacy-ck/data/vi/guides/');
  text = text.replaceAll("@/components/guides/", "@legacy-ck/components/guides/");
  text = text.replaceAll('@/components/guides/', '@legacy-ck/components/guides/');
  // Relative imports inside guides that go to sibling components stay relative — OK
  // Switch useTranslations to legacy CK dictionary when importing from i18n/utils
  if (srcPath.includes('/components/guides/') || srcPath.includes('/components/guides')) {
    text = text.replace(
      /from\s+['"]@\/i18n\/utils['"]/g,
      "from '@legacy-ck/i18n/utils'",
    );
    text = text.replace(
      /from\s+['"]@\/i18n['"]/g,
      "from '@/i18n'",
    );
  }
  // Direct i18n module imports for commands/cli/etc
  text = text.replaceAll("@/i18n/en/", "@legacy-ck/i18n/en/");
  text = text.replaceAll('@/i18n/en/', '@legacy-ck/i18n/en/');
  text = text.replaceAll("@/i18n/vi/", "@legacy-ck/i18n/vi/");
  text = text.replaceAll('@/i18n/vi/', '@legacy-ck/i18n/vi/');
  return text;
}

const written = [];
const missing = [];

for (const path of PATHS) {
  const files = path.endsWith('.ts') || path.endsWith('.astro') || path.endsWith('.mjs') || path.endsWith('.js')
    ? [path]
    : listGitTree(path);

  if (files.length === 0) {
    missing.push(path);
    continue;
  }

  for (const file of files) {
    const buf = gitShow(file);
    if (!buf) {
      missing.push(file);
      continue;
    }
    let out = buf;
    if (/\.(astro|ts|tsx|mjs|js)$/.test(file)) {
      out = Buffer.from(rewriteContent(buf.toString('utf8'), file), 'utf8');
    }
    const dest = destPath(file);
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, out);
    written.push(relative(ROOT, dest));
  }
}

console.log(JSON.stringify({ commit: COMMIT, written: written.length, missing }, null, 2));

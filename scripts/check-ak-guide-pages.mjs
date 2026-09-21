#!/usr/bin/env node
/**
 * Operational owner for top-level /guides/agentkit pages except skills + workflows.
 * 1) Registry must match walked identities.
 * 2) Backing files must exist (EN page + component; extra data files).
 * 3) CLI cheatsheet `ak <cmd>` names must be root (or root+child) cobra Uses
 *    on ak-cli origin/main. Does not fetch. Does not claim migrate/safety copy.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { git, showFile, resolveRef } from './lib/ak-kit-sources.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const OWNED_ELSEWHERE = new Set([
  '/guides/agentkit/skills',
  '/guides/agentkit/skills/[kit]/[skill]',
  '/guides/agentkit/workflows',
]);

/** identity → backing files relative to repo root */
const REGISTRY = [
  {
    identity: '/guides/agentkit',
    files: [
      'src/pages/guides/agentkit/index.astro',
      'src/pages/vi/guides/agentkit/index.astro',
      'src/components/guides/agentkit/WhatIsAgentKitGuide.astro',
    ],
  },
  {
    identity: '/guides/agentkit/building-blocks',
    files: [
      'src/pages/guides/agentkit/building-blocks.astro',
      'src/components/guides/agentkit/AgentKitBuildingBlocksGuide.astro',
    ],
  },
  {
    identity: '/guides/agentkit/clean-cutover-from-claudekit',
    files: [
      'src/pages/guides/agentkit/clean-cutover-from-claudekit.astro',
      'src/components/guides/agentkit/CleanCutoverCkToAkGuide.astro',
    ],
  },
  {
    identity: '/guides/agentkit/clean-reinstall',
    files: [
      'src/pages/guides/agentkit/clean-reinstall.astro',
      'src/components/guides/agentkit/AgentKitCleanReinstallGuide.astro',
    ],
  },
  {
    identity: '/guides/agentkit/cli-commands',
    files: [
      'src/pages/guides/agentkit/cli-commands.astro',
      'src/components/guides/agentkit/AkCliCommandsGuide.astro',
      'src/data/guides/agentkit-cli-cheatsheet.ts',
    ],
    cliCheatsheet: true,
  },
  {
    identity: '/guides/agentkit/configuration',
    files: [
      'src/pages/guides/agentkit/configuration.astro',
      'src/components/guides/agentkit/AgentKitConfigurationGuide.astro',
    ],
  },
  {
    identity: '/guides/agentkit/desktop-app',
    files: [
      'src/pages/guides/agentkit/desktop-app.astro',
      'src/components/guides/agentkit/AgentKitDesktopAppGuide.astro',
    ],
  },
  {
    identity: '/guides/agentkit/getting-started',
    files: [
      'src/pages/guides/agentkit/getting-started.astro',
      'src/components/guides/agentkit/AgentKitGettingStartedGuide.astro',
    ],
  },
  {
    identity: '/guides/agentkit/helper',
    files: [
      'src/pages/guides/agentkit/helper.astro',
      'src/components/guides/agentkit/AgentKitHelperGuide.astro',
    ],
  },
  {
    identity: '/guides/agentkit/how-it-works',
    files: [
      'src/pages/guides/agentkit/how-it-works.astro',
      'src/components/guides/agentkit/HowAgentKitWorksGuide.astro',
    ],
  },
  {
    identity: '/guides/agentkit/runtime-support',
    files: [
      'src/pages/guides/agentkit/runtime-support.astro',
      'src/components/guides/agentkit/AgentKitRuntimeSupportGuide.astro',
    ],
  },
  {
    identity: '/guides/agentkit/statusline',
    files: [
      'src/pages/guides/agentkit/statusline.astro',
      'src/components/guides/agentkit/AgentKitStatuslineGuide.astro',
    ],
  },
  {
    identity: '/guides/agentkit/troubleshooting',
    files: [
      'src/pages/guides/agentkit/troubleshooting.astro',
      'src/components/guides/agentkit/AgentKitTroubleshootingGuide.astro',
    ],
  },
  {
    identity: '/guides/agentkit/updating',
    files: [
      'src/pages/guides/agentkit/updating.astro',
      'src/components/guides/agentkit/AgentKitUpdatingGuide.astro',
    ],
  },
];

function parseArgs(argv) {
  const out = { kitRoot: process.env.AK_CLI || '', stableRef: 'origin/main', repo: ROOT };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--kit-root') out.kitRoot = argv[++i] || '';
    else if (a === '--stable-ref') out.stableRef = argv[++i] || out.stableRef;
    else if (a === '--repo') out.repo = argv[++i] || out.repo;
  }
  return out;
}

function walkAstro(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walkAstro(p, acc);
    else if (name.endsWith('.astro')) acc.push(p);
  }
  return acc;
}

function fileToRoute(repo, file) {
  const rel = file.slice(join(repo, 'src/pages').length).replace(/\\/g, '/').replace(/^\//, '');
  let route = `/${rel.replace(/\.astro$/, '')}`;
  route = route.replace(/\/index$/, '') || '/';
  return route;
}

function identityOf(route) {
  return route.startsWith('/vi/') ? route.slice(3) : route;
}

function listCobraUses(kitRoot, ref) {
  const uses = new Set();
  let listing = '';
  try {
    listing = git(kitRoot, ['ls-tree', '-r', '--name-only', ref, 'apps/cli/internal/commands']);
  } catch {
    return uses;
  }
  for (const path of listing.split('\n').filter((p) => p.endsWith('.go'))) {
    const text = showFile(kitRoot, ref, path);
    if (!text) continue;
    for (const m of text.matchAll(/(?:Use:\s+|\.Use\s*=\s*)"([^"]+)"/g)) {
      const first = m[1].trim().split(/\s+/)[0];
      if (first && first !== 'ak') uses.add(first);
    }
  }
  return uses;
}

function cheatsheetCommands(repo) {
  const src = readFileSync(join(repo, 'src/data/guides/agentkit-cli-cheatsheet.ts'), 'utf8');
  const names = [...src.matchAll(/name:\s*"ak ([^"]+)"/g)].map((m) => m[1].trim());
  return names;
}

function main(argv) {
  const opts = parseArgs(argv);
  const repo = resolve(opts.repo);
  const enDir = join(repo, 'src/pages/guides/agentkit');
  if (!existsSync(enDir)) {
    process.stderr.write(`check-ak-guide-pages: not a VividKit root: ${repo}\n`);
    process.exit(2);
  }
  if (!opts.kitRoot) {
    process.stderr.write('check-ak-guide-pages: --kit-root or AK_CLI is required\n');
    process.exit(2);
  }
  const kitRoot = resolve(opts.kitRoot);
  if (!resolveRef(kitRoot, opts.stableRef)) {
    process.stderr.write(`check-ak-guide-pages: missing git ref ${opts.stableRef}\n`);
    process.exit(2);
  }

  const walked = [
    ...new Set(
      walkAstro(enDir)
        .map((f) => identityOf(fileToRoute(repo, f)))
        .filter((id) => !OWNED_ELSEWHERE.has(id)),
    ),
  ].sort();
  const registered = REGISTRY.map((r) => r.identity).sort();
  const problems = [];

  const walkSet = new Set(walked);
  const regSet = new Set(registered);
  for (const id of walked) {
    if (!regSet.has(id)) problems.push(`unregistered ${id}`);
  }
  for (const id of registered) {
    if (!walkSet.has(id)) problems.push(`registry-stale ${id} (no EN page)`);
  }

  for (const row of REGISTRY) {
    for (const rel of row.files) {
      if (!existsSync(join(repo, rel))) problems.push(`missing-file ${row.identity} ${rel}`);
    }
  }

  const uses = listCobraUses(kitRoot, opts.stableRef);
  if (uses.size === 0) {
    problems.push(`no cobra Use strings at ${opts.stableRef}:apps/cli/internal/commands`);
  } else {
    for (const name of cheatsheetCommands(repo)) {
      const root = name.split(/\s+/)[0];
      if (!uses.has(root)) problems.push(`cheatsheet unknown-root ak ${name} (no cobra Use ${root})`);
    }
  }

  process.stdout.write(
    `ak-guide-pages identities=${registered.length} walked=${walked.length} ` +
      `cobraUses=${uses.size} ${opts.stableRef}\n`,
  );
  if (problems.length) {
    process.stderr.write(`Drift (${problems.length})\n`);
    for (const p of problems) process.stderr.write(`  ${p}\n`);
    process.exit(1);
  }
  process.stdout.write('clean\n');
}

main(process.argv.slice(2));

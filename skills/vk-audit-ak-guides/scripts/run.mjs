#!/usr/bin/env node
/**
 * Public AgentKit guide-page audit.
 * Discovers EN+VI routes, requires parity, runs each owner checker,
 * fails while any identity has no operational owner.
 */
import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SKILL_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function parseArgs(argv) {
  const out = { cmd: 'check', repo: '', kitRoot: '', akDocs: '' };
  const rest = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--repo') out.repo = argv[++i] || '';
    else if (a === '--kit-root') out.kitRoot = argv[++i] || '';
    else if (a === '--ak-docs') out.akDocs = argv[++i] || '';
    else if (a === '--help' || a === '-h') out.cmd = 'help';
    else rest.push(a);
  }
  if (rest[0]) out.cmd = rest[0].replace(/^--/, '');
  if (!out.kitRoot) out.kitRoot = process.env.AK_CLI || '';
  return out;
}

function findRepo(start) {
  let dir = resolve(start);
  for (let i = 0; i < 8; i++) {
    if (existsSync(join(dir, 'src/pages/guides/agentkit'))) return dir;
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return resolve(start);
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
  const rel = relative(join(repo, 'src/pages'), file).replace(/\\/g, '/');
  let route = `/${rel.replace(/\.astro$/, '')}`;
  route = route.replace(/\/index$/, '') || '/';
  return route;
}

function identityOf(route) {
  return route.startsWith('/vi/') ? route.slice(3) : route;
}

function classify(identity) {
  if (identity === '/guides/agentkit/skills') {
    return { owner: 'vk:audit-ak-skills', checker: 'inventory', kind: 'skills-cheatsheet' };
  }
  if (identity === '/guides/agentkit/skills/[kit]/[skill]') {
    return { owner: 'vk:audit-ak-skills', checker: 'inventory+details', kind: 'skills-detail' };
  }
  if (identity === '/guides/agentkit/workflows') {
    return { owner: 'vk:audit-ak-workflows', checker: 'workflows', kind: 'workflows' };
  }
  return { owner: '(none)', checker: 'none', kind: 'untracked' };
}

function runNode(repo, args) {
  const r = spawnSync(process.execPath, args, { cwd: repo, encoding: 'utf8' });
  return { code: r.status ?? 1, stdout: r.stdout || '', stderr: r.stderr || '' };
}

function runInventory(repo, kitRoot) {
  const script = join(repo, 'scripts/check-ak-kit-skill-inventory.mjs');
  if (!existsSync(script)) return { code: 2, stdout: '', stderr: 'missing check-ak-kit-skill-inventory.mjs' };
  return runNode(repo, [script, '--kit-root', kitRoot]);
}

function runSkillDetails(repo, kitRoot, akDocs) {
  const script = join(repo, 'skills/vk-audit-ak-skill-details/scripts/run.mjs');
  if (!existsSync(script)) return { code: 2, stdout: '', stderr: 'missing vk:audit-ak-skills runner' };
  const args = [script, 'check', '--repo', repo, '--kit-root', kitRoot, '--kit', 'all'];
  if (akDocs) args.push('--ak-docs', akDocs);
  return runNode(repo, args);
}

function runWorkflows(repo, kitRoot) {
  const candidates = [
    join(repo, '.claude/skills/vk-audit-ak-workflows/scripts/detect-workflow-skill-drift.cjs'),
    join(repo, '.agents/skills/vk-audit-ak-workflows/scripts/detect-workflow-skill-drift.cjs'),
  ];
  const script = candidates.find((p) => existsSync(p));
  if (!script) return { code: 2, stdout: '', stderr: 'missing vk:audit-ak-workflows checker' };
  return runNode(repo, [script, '--check', '--repo', repo, '--kit-root', kitRoot]);
}

function main(argv) {
  const args = parseArgs(argv);
  if (args.cmd === 'help') {
    process.stdout.write(
      `Usage: node ${join(SKILL_DIR, 'scripts/run.mjs')} check --kit-root <ak-cli> [--ak-docs <ak-docs>] [--repo <vividkit>]\n`,
    );
    process.exit(0);
  }
  if (args.cmd !== 'check') {
    process.stderr.write(`vk:audit-ak-guides: only check is implemented; got ${args.cmd}\n`);
    process.exit(2);
  }

  const repo = resolve(args.repo || findRepo(SKILL_DIR));
  const enDir = join(repo, 'src/pages/guides/agentkit');
  const viDir = join(repo, 'src/pages/vi/guides/agentkit');
  if (!existsSync(enDir) || !existsSync(viDir)) {
    process.stderr.write(`Not a VividKit root with EN+VI AgentKit pages: ${repo}\n`);
    process.exit(2);
  }
  if (!args.kitRoot) {
    process.stderr.write('Missing --kit-root (or AK_CLI)\n');
    process.exit(2);
  }
  const kitRoot = resolve(args.kitRoot);

  const enIds = walkAstro(enDir).map((f) => identityOf(fileToRoute(repo, f))).sort();
  const viIds = walkAstro(viDir).map((f) => identityOf(fileToRoute(repo, f))).sort();
  const onlyEn = enIds.filter((r) => !viIds.includes(r));
  const onlyVi = viIds.filter((r) => !enIds.includes(r));
  if (onlyEn.length || onlyVi.length) {
    process.stderr.write('EN↔VI route parity failed\n');
    for (const r of onlyEn) process.stderr.write(`  en-only ${r}\n`);
    for (const r of onlyVi) process.stderr.write(`  vi-only ${r}\n`);
    process.exit(1);
  }

  const inventory = runInventory(repo, kitRoot);
  const details = runSkillDetails(repo, kitRoot, args.akDocs);
  const workflows = runWorkflows(repo, kitRoot);

  const rows = enIds.map((identity) => {
    const cls = classify(identity);
    let status = 'uncovered';
    if (cls.kind === 'skills-cheatsheet') {
      status = inventory.code === 0 ? 'owned' : inventory.code === 2 ? 'uncovered' : `owned-fail:${inventory.code}`;
    } else if (cls.kind === 'skills-detail') {
      if (details.code === 2) status = 'uncovered';
      else if (details.code === 0) status = 'owned';
      else status = `owned-fail:${details.code}`;
    } else if (cls.kind === 'workflows') {
      if (workflows.code === 2) status = 'uncovered';
      else if (workflows.code === 0) status = 'owned';
      else status = `owned-fail:${workflows.code}`;
    }
    return { route: identity, vi: `/vi${identity}`, ...cls, status };
  });

  process.stdout.write(`vk:audit-ak-guides check  identities=${rows.length}  en=vi parity ok\n`);
  process.stdout.write(`${'status'.padEnd(16)} ${'owner'.padEnd(24)} ${'en'}\n`);
  for (const row of rows) {
    process.stdout.write(`${row.status.padEnd(16)} ${row.owner.padEnd(24)} ${row.route}\n`);
  }

  const dump = (title, result) => {
    process.stdout.write(`\n--- ${title} ---\n`);
    process.stdout.write(result.stdout || '');
    if (result.stderr) process.stderr.write(result.stderr);
    process.stdout.write(`${title} exit ${result.code}\n`);
  };
  dump('inventory', inventory);
  dump('skill-details', details);
  dump('workflows', workflows);

  const uncovered = rows.filter((r) => r.status === 'uncovered');
  const failedOwned = rows.filter((r) => r.status.startsWith('owned-fail'));
  if (uncovered.length) {
    process.stderr.write(
      `\nUNCOVERED ${uncovered.length}/${rows.length} AgentKit identities (no operational owner). ` +
        'vk-sync-ak-guides / vk-audit-ak are not in this project.\n',
    );
  }
  if (failedOwned.length) {
    process.stderr.write(`OWNED-FAIL ${failedOwned.length} identities (checker red).\n`);
  }

  if (uncovered.length || failedOwned.length) process.exit(1);
  process.exit(0);
}

main(process.argv.slice(2));

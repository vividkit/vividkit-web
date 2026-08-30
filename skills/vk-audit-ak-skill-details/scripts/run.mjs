#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SKILL_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function parseArgs(argv) {
  const out = { cmd: 'check', repo: '', kitRoot: '', akDocs: '', kit: 'all' };
  const rest = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--repo') out.repo = argv[++i] || '';
    else if (a === '--kit-root') out.kitRoot = argv[++i] || '';
    else if (a === '--ak-docs') out.akDocs = argv[++i] || '';
    else if (a === '--kit') out.kit = argv[++i] || 'all';
    else if (a === '--help' || a === '-h') out.cmd = 'help';
    else if (!a.startsWith('-') && rest.length === 0) rest.push(a);
    else {
      process.stderr.write(`Unknown arg ${a}\n`);
      process.exit(2);
    }
  }
  if (rest[0]) out.cmd = rest[0].replace(/^--/, '');
  return out;
}

function findRepo(start) {
  let dir = resolve(start);
  for (let i = 0; i < 8; i++) {
    if (existsSync(join(dir, 'scripts/check-ak-skill-details.mjs'))) return dir;
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return resolve(start);
}

function run(nodeArgs, cwd) {
  const r = spawnSync(process.execPath, nodeArgs, { cwd, encoding: 'utf8' });
  if (r.stdout) process.stdout.write(r.stdout);
  if (r.stderr) process.stderr.write(r.stderr);
  return r.status ?? 1;
}

function kits(kit) {
  return kit === 'all' ? ['engineer', 'marketing'] : [kit];
}

function main(argv) {
  const args = parseArgs(argv);
  if (args.cmd === 'help') {
    process.stdout.write(`Usage: node ${join(SKILL_DIR, 'scripts/run.mjs')} check|report|update [options]
  --repo <vividkit-root>
  --kit-root <ak-cli>
  --ak-docs <ak-docs>
  --kit engineer|marketing|all
`);
    process.exit(0);
  }
  if (args.cmd === 'update') {
    process.stdout.write(
      'update is an authoring workflow. Re-author dirty src/data/guides/agentkit-skill-details files, then re-run check. See references/authoring.md.\n',
    );
    process.exit(0);
  }

  const repo = resolve(args.repo || findRepo(SKILL_DIR));
  if (!existsSync(join(repo, 'scripts/check-ak-skill-details.mjs'))) {
    process.stderr.write(`Not a VividKit root: ${repo}\n`);
    process.exit(2);
  }
  if ((args.cmd === 'check' || args.cmd === 'report') && !args.kitRoot) {
    process.stderr.write('Missing --kit-root\n');
    process.exit(2);
  }

  const logs = [];
  const steps = [
    ['scripts/check-ak-skill-detail-principles.mjs', '--self-test'],
    ['scripts/check-ak-skill-detail-principles.mjs'],
  ];
  if (args.kitRoot) {
    steps.push(['scripts/check-ak-skill-details.mjs', '--kit-root', args.kitRoot]);
    steps.push(['scripts/check-ak-skill-detail-claims.mjs', '--self-test']);
    for (const k of kits(args.kit)) {
      steps.push(['scripts/check-ak-skill-detail-claims.mjs', '--kit-root', args.kitRoot, '--kit', k]);
    }
  }
  if (args.akDocs) {
    steps.push(['scripts/check-ak-skill-detail-ak-docs.mjs', '--self-test']);
    steps.push(['scripts/check-ak-skill-detail-ak-docs.mjs', '--ak-docs', args.akDocs, '--kit', args.kit]);
  }

  let failed = 0;
  for (const step of steps) {
    const code = run(step, repo);
    logs.push({ step: step.join(' '), code });
    if (code !== 0) {
      failed = code;
      if (args.cmd === 'check') process.exit(code);
    }
  }

  if (args.cmd === 'report') {
    const dir = join(repo, 'reference/changelog-reports');
    mkdirSync(dir, { recursive: true });
    const day = new Date().toISOString().slice(0, 10);
    const out = join(dir, `${day}-ak-skill-details-audit.md`);
    writeFileSync(
      out,
      [
        `# AgentKit skill-detail audit ${day}`,
        '',
        ...logs.map((l) => `- \`${l.step}\` → exit ${l.code}`),
        '',
        'Re-author dirty `src/data/guides/agentkit-skill-details/` files, then `--write-lock`.',
        '',
      ].join('\n'),
    );
    process.stdout.write(`wrote ${out}\n`);
  }

  process.exit(failed);
}

main(process.argv.slice(2));

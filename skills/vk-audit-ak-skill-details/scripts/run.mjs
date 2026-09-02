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
  const stdout = r.stdout || '';
  const stderr = r.stderr || '';
  if (stdout) process.stdout.write(stdout);
  if (stderr) process.stderr.write(stderr);
  return { code: r.status ?? 1, stdout, stderr };
}

function parseDirty(text) {
  const dirty = [];
  const missing = [];
  for (const line of String(text).split('\n')) {
    const miss = line.match(/^missing-docs\s+(\S+)/);
    if (miss) missing.push(miss[1]);
    const id = line.match(/^(?:engineer|marketing)\/ak-[a-z0-9-]+$/);
    if (id) dirty.push(id[0]);
    const bare = line.match(/^ak-[a-z0-9-]+$/);
    if (bare) dirty.push(bare[0]);
  }
  return { dirty: [...new Set(dirty)], missing: [...new Set(missing)] };
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

  const repo = resolve(args.repo || findRepo(SKILL_DIR));
  if (!existsSync(join(repo, 'scripts/check-ak-skill-details.mjs'))) {
    process.stderr.write(`Not a VividKit root: ${repo}\n`);
    process.exit(2);
  }
  if (!args.kitRoot) {
    process.stderr.write('Missing --kit-root\n');
    process.exit(2);
  }

  const claims = [
    'scripts/check-ak-skill-detail-claims.mjs',
    '--kit-root',
    args.kitRoot,
    '--kit',
    args.kit,
  ];
  if (args.akDocs) claims.push('--ak-docs', args.akDocs);

  const steps = [
    ['scripts/check-ak-kit-skill-inventory.mjs', '--kit-root', args.kitRoot],
    ['scripts/check-ak-skill-detail-principles.mjs', '--self-test'],
    ['scripts/check-ak-skill-detail-principles.mjs'],
    ['scripts/check-ak-skill-details.mjs', '--kit-root', args.kitRoot],
    ['scripts/check-ak-skill-detail-claims.mjs', '--self-test'],
    claims,
  ];
  if (args.akDocs && args.cmd !== 'check') {
    steps.push(['scripts/check-ak-skill-detail-ak-docs.mjs', '--self-test']);
    steps.push([
      'scripts/check-ak-skill-detail-ak-docs.mjs',
      '--ak-docs',
      args.akDocs,
      '--kit',
      args.kit,
    ]);
  }

  const logs = [];
  let failed = 0;
  let dirty = [];
  let missing = [];
  for (const step of steps) {
    const result = run(step, repo);
    const parsed = parseDirty(`${result.stdout}\n${result.stderr}`);
    dirty.push(...parsed.dirty);
    missing.push(...parsed.missing);
    logs.push({ step: step.join(' '), code: result.code, dirty: parsed.dirty, missing: parsed.missing });
    if (result.code !== 0) {
      failed = result.code;
      if (args.cmd === 'check') process.exit(result.code);
    }
  }
  dirty = [...new Set(dirty)];
  missing = [...new Set(missing)];

  if (args.cmd === 'report' || args.cmd === 'update') {
    const dir = join(repo, 'reference/changelog-reports');
    mkdirSync(dir, { recursive: true });
    const day = new Date().toISOString().slice(0, 10);
    const out = join(dir, `${day}-ak-skill-details-audit.md`);
    writeFileSync(
      out,
      [
        `# AgentKit skill-detail audit ${day}`,
        '',
        '## Checker exits',
        ...logs.map((l) => `- \`${l.step}\` → exit ${l.code}`),
        '',
        '## Review candidates (advisory)',
        'Do not author every ID below. Treat table/locale deltas as review, then patch only verified skill-level wrong/missed facts.',
        ...(dirty.length ? dirty.map((id) => `- ${id}`) : ['- none']),
        '',
        '## Missing same-kit MDX',
        ...(missing.length ? missing.map((id) => `- ${id}`) : ['- none']),
        '',
      ].join('\n'),
    );
    process.stdout.write(`wrote ${out}\n`);
    process.stdout.write(`review-candidates ${dirty.length}; missing-mdx ${missing.length}\n`);
    if (args.cmd === 'update') {
      process.stdout.write(
        dirty.length
          ? `Review candidates (not a wholesale author list):\n${dirty.map((id) => `- ${id}`).join('\n')}\n`
          : 'No review candidates from checkers.\n',
      );
    }
  }

  process.exit(failed);
}

main(process.argv.slice(2));

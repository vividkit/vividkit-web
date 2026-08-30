#!/usr/bin/env node
/**
 * Fail when engineer skill-detail prompts/flags invent commands the SKILL.md
 * does not document. Parses detail .ts as text (no TypeScript compiler).
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DETAILS = join(ROOT, 'src/data/guides/agentkit-skill-details');
const FLAG_RE = /^--[a-z0-9][a-z0-9-]*$/;
const INVOKE_RE = /^[/$@]*ak[:\-]/i;

function parseArgs(argv) {
  const out = {
    kitRoot: '',
    akDocs: '',
    kit: 'engineer',
    selfTest: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--kit-root') out.kitRoot = argv[++i] || '';
    else if (a === '--ak-docs') out.akDocs = argv[++i] || '';
    else if (a === '--kit') out.kit = argv[++i] || 'engineer';
    else if (a === '--self-test') out.selfTest = true;
    else if (a === '--help' || a === '-h') {
      process.stdout.write(
        'Usage: check-ak-skill-detail-claims --kit-root <ak-cli> [--ak-docs <ak-docs>] [--kit engineer|marketing|all] [--self-test]\n',
      );
      process.exit(0);
    }
  }
  return out;
}

function extractFrontmatter(text) {
  if (!text.startsWith('---')) return { argumentHint: '', name: '' };
  const end = text.indexOf('\n---', 3);
  const raw = end === -1 ? text.slice(3) : text.slice(3, end);
  const get = (key) => {
    const re = new RegExp(`^${key}:\\s*(.*)$`, 'm');
    const m = raw.match(re);
    if (!m) return '';
    let v = m[1].trim();
    if (v === '>' || v === '>-' || v === '|' || v === '|-') {
      const lines = [];
      const after = raw.slice(m.index + m[0].length);
      for (const line of after.split('\n').slice(1)) {
        if (/^[A-Za-z0-9_-]+:/.test(line) && !line.startsWith(' ')) break;
        lines.push(line.replace(/^\s{2}/, ''));
      }
      v = lines.join(' ').trim();
    }
    return v.replace(/^["']|["']$/g, '');
  };
  return { argumentHint: get('argument-hint'), name: get('name') };
}

function resolveSource(kitRoot, pageKit, id) {
  const order =
    pageKit === 'marketing'
      ? ['marketing', 'core', 'engineer']
      : ['engineer', 'core', 'marketing'];
  for (const kit of order) {
    const rel = `kits/${kit}/skills/${id}/SKILL.md`;
    const abs = join(kitRoot, rel);
    if (existsSync(abs)) return { rel, abs };
  }
  return null;
}

function extractFlagsFromText(text) {
  const flags = new Set();
  const re = /--[a-z0-9][a-z0-9-]*/g;
  let m;
  while ((m = re.exec(text))) flags.add(m[0]);
  return flags;
}

function extractAllowedFlags(argumentHint, skillMd) {
  const flags = extractFlagsFromText(argumentHint || '');
  for (const line of String(skillMd || '').split('\n')) {
    if (
      /\b(refuse|forbidden|non-goals?|must not|do not|don't|never)\b/i.test(line) &&
      !/\bunless\b/i.test(line)
    ) {
      continue;
    }
    for (const f of extractFlagsFromText(line)) flags.add(f);
  }
  return flags;
}

function extractDocTableFlags(mdx) {
  const flags = new Set();
  const tables = String(mdx || '').match(/(?:^|\n)(?:\|.*\|\n)+/g) || [];
  for (const table of tables) {
    const header = table.split('\n').find((line) => line.includes('|')) || '';
    if (
      !/\b(options?|flags?|modes?|inputs?|controls?|operations?|arguments?)\b/i.test(
        header,
      )
    ) {
      continue;
    }
    for (const f of extractFlagsFromText(table)) flags.add(f);
  }
  return flags;
}

function extractSubcommands(argumentHint, skillMd) {
  const subs = new Set();
  const hint = argumentHint || '';
  const or = hint.match(/OR\s*\[([^\]]+)\]/i);
  if (or) {
    const parts = or[1].split('|').map((p) => p.trim());
    if (parts.length > 1 && parts.every((p) => /^[a-z][a-z0-9-]*$/.test(p))) {
      for (const p of parts) subs.add(p);
    }
  }
  const heading = /^#{2,3}\s+`?\/ak:[a-z0-9-]+\s+([a-z0-9][a-z0-9-]*)`?/gim;
  let m;
  while ((m = heading.exec(skillMd))) subs.add(m[1]);
  return subs;
}

function objectSlice(src, key) {
  const re = new RegExp(`["']?${key}["']?\\s*:\\s*\\{`);
  const m = re.exec(src);
  if (!m) return '';
  let depth = 0;
  for (let i = m.index + m[0].length - 1; i < src.length; i++) {
    const ch = src[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) return src.slice(m.index, i + 1);
    }
  }
  return '';
}

function tokenizeCommand(command) {
  const head = String(command).split(/\r?\n/)[0];
  return head
    .replace(/[“”]/g, '"')
    .split(/\s+/)
    .map((t) => t.replace(/^['"]+|['"]+$/g, ''))
    .filter(Boolean);
}

function extractQuotedFields(src, field) {
  const out = [];
  const re = new RegExp(
    `["']?${field}["']?\\s*:\\s*(['"\`])((?:\\\\.|(?!\\1).)*)\\1`,
    'g',
  );
  let m;
  while ((m = re.exec(src))) out.push(m[2].replace(/\\(['"\`])/g, '$1'));
  return out;
}

function extractDetailCommands(src) {
  const commands = [];
  for (const field of ['command', 'exampleCommand', 'promptEn']) {
    for (const value of extractQuotedFields(src, field)) commands.push(value);
  }
  return commands;
}

function extractDetailFlags(src) {
  const flags = [];
  for (const value of extractQuotedFields(src, 'flag')) {
    for (const token of String(value).split(/[\s,|]+/)) {
      if (FLAG_RE.test(token)) flags.push(token);
    }
  }
  return flags;
}

function extractDeclaredCommand(src) {
  const m = src.match(/["']?command["']?\s*:\s*['"`](\/ak:[a-z0-9-]+)['"`]/);
  return m ? m[1] : '';
}

function extractPromptCommands(src, expectedCmd) {
  const all = extractQuotedFields(src, 'command');
  let skippedHeader = false;
  const prompts = [];
  for (const c of all) {
    if (!skippedHeader && c === expectedCmd) {
      skippedHeader = true;
      continue;
    }
    prompts.push(c);
  }
  return prompts;
}

function isUserFacing(skillMd) {
  if (/disable-model-invocation:\s*true/.test(skillMd)) return false;
  return /user-invocable:\s*true/.test(skillMd);
}

function slugFromId(id) {
  return id.replace(/^ak-/, '');
}

function allowedInvokes(id) {
  const slug = slugFromId(id);
  return new Set([
    `/ak:${slug}`,
    `$ak:${slug}`,
    `ak:${slug}`,
    `ak-${slug}`,
    `ak ${slug}`,
  ]);
}
function firstInvoke(tokens) {
  for (const t of tokens) {
    const m = String(t).match(/^[/$@]*ak:[a-z0-9-]+/i);
    if (m) return `/${m[0].replace(/^[/$@]+/, '').replace(/^ak:/i, 'ak:')}`;
    if (INVOKE_RE.test(t) || t === 'ak') return t;
  }
  return '';
}

function checkFile({ id, kit, src, skillMd, argumentHint, extraAllowedFlags }) {
  const violations = [];
  const slug = slugFromId(id);
  const declared = extractDeclaredCommand(src);
  const expectedCmd = `/ak:${slug}`;
  if (declared && declared !== expectedCmd) {
    violations.push(`command field ${declared} !== ${expectedCmd}`);
  }

  const allowedFlags = extractAllowedFlags(argumentHint, skillMd);
  for (const f of extraAllowedFlags || []) allowedFlags.add(f);
  const allowedSubs = extractSubcommands(argumentHint, skillMd);
  const invokes = allowedInvokes(id);
  const commands = [
    ...extractDetailCommands(src),
    ...extractQuotedFields(src, 'syntax'),
  ];

  for (const flag of extractDetailFlags(src)) {
    if (!allowedFlags.has(flag)) {
      violations.push(`invented flag field ${flag}`);
    }
  }
  for (const token of extractQuotedFields(src, 'token')) {
    if (FLAG_RE.test(token) && !allowedFlags.has(token)) {
      violations.push(`invented invocation token ${token}`);
    }
  }

  const slice = objectSlice(src, 'invocation');
  if (slice) {
    for (const name of extractQuotedFields(slice, 'name')) {
      if (/^[a-z][a-z0-9-]*$/.test(name) && allowedSubs.size && !allowedSubs.has(name)) {
        violations.push(`invented subcommand ${name}`);
      }
    }
  }

  for (const command of commands) {
    const tokens = tokenizeCommand(command);
    const invoke = firstInvoke(tokens);
    if (invoke) {
      const joined =
        invoke === 'ak' && tokens[1] && !tokens[1].startsWith('-')
          ? `ak ${tokens[1]}`
          : invoke;
      const ok =
        invokes.has(invoke) ||
        invokes.has(joined) ||
        invoke === expectedCmd ||
        invoke === `$ak:${slug}`;
      if (!ok && (INVOKE_RE.test(invoke) || joined.startsWith('ak '))) {
        violations.push(`wrong-skill invoke in \`${command}\``);
      }
    }
    for (const token of tokens) {
      if (!FLAG_RE.test(token)) continue;
      if (!allowedFlags.has(token)) {
        violations.push(`invented flag ${token} in \`${command}\``);
      }
    }
    if (invoke && (invokes.has(invoke) || invoke === expectedCmd)) {
      const rest = tokens.filter((t) => t !== invoke && t !== 'ak');
      const maybeSub = rest[0] || '';
      if (
        /^[a-z][a-z0-9-]*$/.test(maybeSub) &&
        allowedSubs.size &&
        !allowedSubs.has(maybeSub) &&
        ['validate', 'red-team', 'archive'].includes(maybeSub)
      ) {
        violations.push(`unknown subcommand ${maybeSub} in \`${command}\``);
      }
    }
  }

  if (isUserFacing(skillMd) && kit !== 'marketing') {
    const prompts = extractPromptCommands(src, expectedCmd);
    if (prompts.length < 2) {
      violations.push(`user-facing skill needs >=2 promptExamples, found ${prompts.length}`);
    }
    const expecteds = extractQuotedFields(src, 'expectedEn');
    for (const [i, ex] of expecteds.entries()) {
      if (ex.trim().length < 48) {
        violations.push(`prompt expectedEn[${i}] too thin: ${ex}`);
      }
    }
    if (!/["']?invocation["']?\s*:/.test(src)) {
      violations.push('user-facing skill needs an invocation block (syntax, arguments, options, subcommands)');
    }
  }

  return violations;
}

function selfTest() {
  const skillMd = `---
name: ak:plan
user-invocable: true
argument-hint: "[task] [--fast|--html] OR [archive|validate]"
---
# Plan
--fast and --html are real.
`;
  const good = `
const data = {
  id: 'ak-plan',
  command: '/ak:plan',
  invocation: { syntax: '/ak:plan [task] [--fast|--html] OR /ak:plan validate <plan.md>' },
  promptExamples: [
    { command: '/ak:plan Rename settings route --fast', expectedEn: 'Focused plan.md and phase files without research overhead for a small rename.' },
    { command: '/ak:plan validate plans/x/plan.md', expectedEn: 'Critical questions against the existing plan and updates or unresolved blockers.' },
  ],
  outputFlags: [{ flag: '--html', exampleCommand: '/ak:plan flow --html' }],
};
`;
  const invented = good.replace(
    '/ak:plan Rename settings route --fast',
    '/ak:plan Rename settings route --not-a-real-flag',
  );
  const wrongSkill = good.replace('/ak:plan Rename', '/ak:cook Rename');
  const jsonInvented = `{
  "id": "ak-plan",
  "command": "/ak:plan",
  "promptExamples": [
    { "command": "/ak:plan Rename settings route --not-a-real-flag" },
    { "command": "/ak:plan validate plans/x/plan.md" }
  ]
}`;

  const a = checkFile({
    id: 'ak-plan',
    kit: 'engineer',
    src: invented,
    skillMd,
    argumentHint: '[task] [--fast|--html] OR [archive|validate]',
  });
  const b = checkFile({
    id: 'ak-plan',
    kit: 'engineer',
    src: wrongSkill,
    skillMd,
    argumentHint: '[task] [--fast|--html] OR [archive|validate]',
  });
  const c = checkFile({
    id: 'ak-plan',
    src: good,
    skillMd,
    argumentHint: '[task] [--fast|--html] OR [archive|validate]',
  });
  const d = checkFile({
    id: 'ak-plan',
    src: jsonInvented,
    skillMd,
    argumentHint: '[task] [--fast|--html] OR [archive|validate]',
  });
  const invOpt = good.replace(
    "syntax: '/ak:plan [task] [--fast|--html] OR /ak:plan validate <plan.md>'",
    "syntax: '/ak:plan [task]', options: [{ token: '--not-a-real-flag', titleEn: 'x', titleVi: 'x', descEn: 'long enough description for the option token.', descVi: 'mo ta option du dai.' }]",
  );
  const invSub = good.replace(
    "syntax: '/ak:plan [task] [--fast|--html] OR /ak:plan validate <plan.md>'",
    "syntax: '/ak:plan validate x', subcommands: [{ name: 'explode', syntax: '/ak:plan explode x', titleEn: 'x', titleVi: 'x', descEn: 'x', descVi: 'x', outcomeEn: 'x', outcomeVi: 'x' }]",
  );
  const e = checkFile({
    id: 'ak-plan',
    src: invOpt,
    skillMd,
    argumentHint: '[task] [--fast|--html] OR [archive|validate]',
  });
  const f = checkFile({
    id: 'ak-plan',
    src: invSub,
    skillMd,
    argumentHint: '[task] [--fast|--html] OR [archive|validate]',
  });

  const fail = [];
  if (!a.some((v) => v.includes('--not-a-real-flag'))) fail.push('invented-flag case');
  if (!b.some((v) => v.includes('wrong-skill'))) fail.push('wrong-skill case');
  if (c.length) fail.push(`allowed case had ${c.join('; ')}`);
  if (!d.some((v) => v.includes('--not-a-real-flag'))) fail.push('json-style invented-flag case');
  if (!e.some((v) => v.includes('--not-a-real-flag'))) fail.push('invented invocation option');
  if (!f.some((v) => v.includes('explode'))) fail.push('invented subcommand');
  if (fail.length) {
    process.stderr.write(`self-test failed: ${fail.join(', ')}\n`);
    process.exit(1);
  }
  process.stdout.write('self-test ok\n');
}

function warnAkDocs(akDocs, id, flags) {
  if (!akDocs) return [];
  const slug = slugFromId(id);
  const mdx = join(
    akDocs,
    'content/docs/stable/kits/engineer/skills',
    `${slug}.en.mdx`,
  );
  if (!existsSync(mdx)) return [`warn ${id}: no ak-docs ${slug}.en.mdx`];
  const text = readFileSync(mdx, 'utf8');
  const docsFlags = extractFlagsFromText(text);
  const extra = [];
  for (const f of flags) {
    if (!docsFlags.has(f)) extra.push(`warn ${id}: flag ${f} missing from ak-docs mdx`);
  }
  return extra;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.selfTest) {
    selfTest();
    return;
  }
  if (!args.kitRoot) {
    process.stderr.write('Missing --kit-root\n');
    process.exit(2);
  }
  const kitList = args.kit === 'all' ? ['engineer', 'marketing'] : [args.kit];
  const rows = [];
  let fileCount = 0;
  for (const kit of kitList) {
    const dir = join(DETAILS, kit);
    if (!existsSync(dir)) {
      process.stderr.write(`No details dir ${dir}\n`);
      process.exit(2);
    }
    const files = readdirSync(dir)
      .filter((n) => n.startsWith('ak-') && n.endsWith('.ts'))
      .sort();
    fileCount += files.length;
    for (const name of files) {
      const id = name.slice(0, -3);
      const src = readFileSync(join(dir, name), 'utf8');
      const skill = resolveSource(args.kitRoot, kit, id);
      if (!skill) {
        rows.push({ id: `${kit}/${id}`, violations: ['missing SKILL.md'] });
        continue;
      }
      const skillMd = readFileSync(skill.abs, 'utf8');
      const fm = extractFrontmatter(skillMd);
      const extraAllowedFlags = new Set();
      if (args.akDocs) {
        const mdx = join(
          args.akDocs,
          'content/docs/stable/kits',
          kit,
          'skills',
          `${slugFromId(id)}.en.mdx`,
        );
        if (existsSync(mdx)) {
          for (const f of extractDocTableFlags(readFileSync(mdx, 'utf8'))) extraAllowedFlags.add(f);
        }
      }
      const violations = checkFile({
        id,
        kit,
        src,
        skillMd,
        argumentHint: fm.argumentHint,
        extraAllowedFlags,
      });
      if (violations.length) rows.push({ id: `${kit}/${id}`, violations });
    }
  }

  if (!rows.length) {
    process.stdout.write(`ok ${fileCount} ${args.kit} skill-detail files\n`);
    return;
  }
  process.stdout.write(`${rows.length} files with claim violations\n`);
  for (const row of rows) {
    process.stdout.write(`\n${row.id}\n`);
    for (const v of row.violations) process.stdout.write(`  - ${v}\n`);
  }
  process.exit(1);
}

main();

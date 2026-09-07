#!/usr/bin/env node
/**
 * Fail when engineer skill-detail prompts/flags invent commands the SKILL.md
 * does not document. Parses detail .ts as text (no TypeScript compiler).
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { selfTestWrapCommandTokens } from './wrap-command-tokens.mjs';
import {
  buildSnapshot,
  resolvePageSkill,
  selfTestSourceChannel,
  showFileRaw,
} from './lib/ak-kit-sources.mjs';




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
    stableRef: 'origin/main',
    betaRef: 'origin/dev',
    akDocsStableRef: 'origin/main',
    akDocsBetaRef: 'origin/dev',
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--kit-root') out.kitRoot = argv[++i] || '';
    else if (a === '--ak-docs') out.akDocs = argv[++i] || '';
    else if (a === '--kit') out.kit = argv[++i] || 'engineer';
    else if (a === '--stable-ref') out.stableRef = argv[++i] || out.stableRef;
    else if (a === '--beta-ref') out.betaRef = argv[++i] || out.betaRef;
    else if (a === '--ak-docs-stable-ref') out.akDocsStableRef = argv[++i] || out.akDocsStableRef;
    else if (a === '--ak-docs-beta-ref') out.akDocsBetaRef = argv[++i] || out.akDocsBetaRef;
    else if (a === '--self-test') out.selfTest = true;
    else if (a === '--help' || a === '-h') {
      process.stdout.write(
        'Usage: check-ak-skill-detail-claims --kit-root <ak-cli> [--ak-docs <ak-docs>] [--kit engineer|marketing|all] [--stable-ref] [--beta-ref] [--ak-docs-stable-ref] [--ak-docs-beta-ref] [--self-test]\n',
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

function readDocsMdx(akDocs, channel, kit, slug, refs) {
  if (!akDocs) return '';
  const rel = `content/docs/${channel}/kits/${kit}/skills/${slug}.en.mdx`;
  const ref = channel === 'beta' ? refs.beta : refs.stable;
  if (existsSync(join(akDocs, '.git')) && ref) {
    const raw = showFileRaw(akDocs, ref, rel);
    return raw ? raw.toString('utf8') : '';
  }
  const abs = join(akDocs, rel);
  if (existsSync(abs)) return readFileSync(abs, 'utf8');
  return '';
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

function takesFollowOnPrompt(src, argumentHint, skillMd) {
  if (extractAllowedFlags(argumentHint, skillMd).size) return true;
  if (extractSubcommands(argumentHint, skillMd).size) return true;
  if (extractQuotedFields(blockSlice(src, 'arguments'), 'token').length) return true;
  if (extractQuotedFields(blockSlice(src, 'options'), 'token').length) return true;
  if (extractQuotedFields(blockSlice(src, 'subcommands'), 'name').length) return true;
  if (extractQuotedFields(blockSlice(src, 'workflowModes'), 'flag').some((f) => /^--/.test(String(f).trim()))) {
    return true;
  }
  const syntax = extractQuotedFields(src, 'syntax')[0] || '';
  if (/\[|</.test(syntax)) return true;
  return /\[[^\]]+\]|<[a-z]/.test(argumentHint || '');
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

function blockSlice(src, key) {
  const re = new RegExp(`["']?${key}["']?\\s*:\\s*`);
  const m = re.exec(src);
  if (!m) return '';
  let i = m.index + m[0].length;
  while (i < src.length && /\s/.test(src[i])) i++;
  const open = src[i];
  if (open !== '{' && open !== '[') return '';
  const start = i;
  let braces = 0;
  let brackets = 0;
  let quote = '';
  let escape = false;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (quote) {
      if (escape) {
        escape = false;
        continue;
      }
      if (ch === '\\') {
        escape = true;
        continue;
      }
      if (ch === quote) quote = '';
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
      continue;
    }
    if (ch === '{') braces++;
    else if (ch === '}') braces--;
    else if (ch === '[') brackets++;
    else if (ch === ']') brackets--;
    if (open === '{' && braces === 0) return src.slice(start, i + 1);
    if (open === '[' && brackets === 0) return src.slice(start, i + 1);
  }
  return '';
}

function expandModeSequences(raw) {
  const text = String(raw).trim();
  const op = text.match(/^([a-zA-Z][a-zA-Z0-9]*)\s*\(/);
  if (op) return [{ kind: 'operation', token: op[1] }];
  const out = [];
  const re = /(--[a-z0-9][a-z0-9-]*)(?:\s+([a-z0-9][a-z0-9.|-]*))?/gi;
  let m;
  while ((m = re.exec(text))) {
    const flag = m[1];
    const rest = m[2] || '';
    if (rest.includes('|')) {
      for (const alt of rest.split('|').filter(Boolean)) {
        out.push({ kind: 'mode', seq: [flag, alt], label: `${flag} ${alt}` });
      }
      continue;
    }
    if (rest && !/^[A-Z][A-Z0-9]*$/.test(rest) && rest !== 'N') {
      out.push({ kind: 'mode', seq: [flag, rest], label: `${flag} ${rest}` });
      continue;
    }
    out.push({ kind: 'mode', seq: [flag], label: flag });
  }
  return out;
}

function requiredPromptCoverage(src, allowedSubs = new Set()) {
  const required = [];
  for (const raw of extractQuotedFields(blockSlice(src, 'workflowModes'), 'flag')) {
    required.push(...expandModeSequences(raw));
  }
  const authored = [];
  for (const name of extractQuotedFields(blockSlice(src, 'subcommands'), 'name')) {
    if (!/^[a-z][a-z0-9-]*$/.test(name)) continue;
    if (allowedSubs.size && !allowedSubs.has(name)) continue;
    authored.push(name);
  }
  if (authored.length <= 6) {
    for (const name of authored) required.push({ kind: 'subcommand', token: name });
  }
  return required;
}

function commandHasSequence(parts, seq) {
  const hay = parts.map((t) => t.toLowerCase());
  const needle = seq.map((t) => t.toLowerCase());
  if (!needle.length) return false;
  for (let i = 0; i <= hay.length - needle.length; i++) {
    if (needle.every((t, j) => hay[i + j] === t)) return true;
  }
  return false;
}

function promptCoversRequired(required, prompts, labels) {
  const tokenized = prompts.map((command) => tokenizeCommand(command));
  const afterInvoke = new Set();
  for (const parts of tokenized) {
    let seenInvoke = false;
    for (const token of parts) {
      if (!seenInvoke) {
        if (/^[/$@]*ak[:\-]/i.test(token) || token === 'ak') seenInvoke = true;
        continue;
      }
      if (token.startsWith('-')) continue;
      afterInvoke.add(token.toLowerCase());
      break;
    }
  }
  const blob = `${prompts.join('\n')}\n${labels.join('\n')}`.toLowerCase();
  const misses = [];
  for (const item of required) {
    if (item.kind === 'operation') {
      const key = item.token;
      const spaced = key.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
      const withoutGet = spaced.replace(/^get /, '');
      const ok = [key.toLowerCase(), spaced, withoutGet, withoutGet.replace(/\s+/g, '')].some(
        (k) => k && blob.includes(k),
      );
      if (!ok) misses.push(`promptExamples miss documented operation ${key}`);
      continue;
    }
    if (item.kind === 'mode') {
      const ok = tokenized.some((parts) => commandHasSequence(parts, item.seq));
      if (!ok) misses.push(`promptExamples miss documented mode ${item.label}`);
      continue;
    }
    const token = item.token.toLowerCase();
    const inRun = tokenized.some((parts) => (parts[0] || '').toLowerCase() === `/${token}`);
    if (!(afterInvoke.has(token) || inRun)) {
      misses.push(`promptExamples miss documented subcommand ${item.token}`);
    }
  }
  return misses;
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

  const hasPrompts = /["']?promptExamples["']?\s*:/.test(src);
  if (hasPrompts) {
    const prompts = extractPromptCommands(src, expectedCmd);
    const promptStart = src.search(/["']?promptExamples["']?\s*:/);
    const promptSlice = promptStart >= 0 ? src.slice(promptStart) : src;
    if (isUserFacing(skillMd)) {
      const minPrompts = takesFollowOnPrompt(src, argumentHint, skillMd) ? 2 : 1;
      if (prompts.length < minPrompts) {
        violations.push(`user-facing skill needs >=${minPrompts} promptExamples, found ${prompts.length}`);
      }
      for (const field of ['expectedEn', 'expectedVi']) {
        const values = extractQuotedFields(promptSlice, field);
        for (const [i, ex] of values.entries()) {
          if (ex.trim().split(/\s+/).filter(Boolean).length < 12) {
            violations.push(`prompt ${field}[${i}] too thin: ${ex}`);
          }
        }
      }
    }
    const rec = (promptSlice.match(/recommended:\s*true/g) || []).length;
    if (rec > 1) {
      violations.push(`promptExamples need at most one recommended: true, found ${rec}`);
    }
    const labels = [
      ...extractQuotedFields(promptSlice, 'labelEn'),
      ...extractQuotedFields(promptSlice, 'labelVi'),
    ];
    violations.push(...promptCoversRequired(requiredPromptCoverage(src, allowedSubs, argumentHint), prompts, labels));
    if (kit !== 'marketing' && isUserFacing(skillMd) && !/["']?invocation["']?\s*:/.test(src)) {
      violations.push('user-facing skill needs an invocation block (syntax, arguments, options, subcommands)');
    }
  } else if (isUserFacing(skillMd) && kit !== 'marketing') {
    const minPrompts = takesFollowOnPrompt(src, argumentHint, skillMd) ? 2 : 1;
    violations.push(`user-facing skill needs >=${minPrompts} promptExamples, found 0`);
  }

  return violations;
}
function selfTest() {
  selfTestWrapCommandTokens();
  const nestedSubs = `subcommands: [
  { name: 'codebase', syntax: '/ak:code-review codebase [--ultra]' },
  { name: 'pr-diff', syntax: '/ak:code-review pr' },
]`;
  const nestedSlice = blockSlice(nestedSubs, 'subcommands');
  if (!nestedSlice.includes('pr-diff')) {
    process.stderr.write('self-test failed: blockSlice truncated on ] inside syntax string\n');
    process.exit(1);
  }
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
    { command: '/ak:plan Rename settings route --fast', expectedEn: 'A compact plan.md and phase files with research skipped for this already-understood rename, and no implementation code.', recommended: true },
    { command: '/ak:plan validate plans/x/plan.md', expectedEn: 'Critical questions against the existing plan, then file updates or an explicit list of unresolved blockers.' },
    { command: '/ak:plan archive plans/x/plan.md', expectedEn: 'Moves the completed plan into the archive location and records the archived path without editing implementation code.' },
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

  const missingMode = good.replace(
    'outputFlags:',
    "workflowModes: [{ flag: '--html', modeEn: 'html brief' }],\n  outputFlags:",
  );
  const missingSub = good
    .replace(
      "    { command: '/ak:plan archive plans/x/plan.md', expectedEn: 'Moves the completed plan into the archive location and records the archived path without editing implementation code.' },\n",
      '',
    )
    .replace(
      'invocation: { syntax:',
      "invocation: { subcommands: [{ name: 'archive', syntax: '/ak:plan archive x', titleEn: 'x', titleVi: 'x', descEn: 'x', descVi: 'x', outcomeEn: 'x', outcomeVi: 'x' }], syntax:",
    );
  const g = checkFile({
    id: 'ak-plan',
    src: missingMode,
    skillMd,
    argumentHint: '[task] [--fast|--html] OR [archive|validate]',
  });
  const h = checkFile({
    id: 'ak-plan',
    src: missingSub,
    skillMd,
    argumentHint: '[task] [--fast|--html] OR [archive|validate]',
  });
  const prMd = `---
name: ak:code-review
user-invocable: true
argument-hint: "[target] [--pending]"
---
# Review
--pending
`;
  const prSrc = `
const data = {
  id: 'ak-code-review',
  command: '/ak:code-review',
  invocation: { syntax: '/ak:code-review pr', subcommands: [{ name: 'pr', syntax: '/ak:code-review pr [--ultra]', titleEn: 'x', titleVi: 'x', descEn: 'x', descVi: 'x', outcomeEn: 'x', outcomeVi: 'x' }] },
  promptExamples: [
    { command: '/ak:code-review project --pending', expectedEn: 'Reviews the project branch and writes findings with evidence for each issue found in the current diff.', recommended: true },
    { command: '/ak:code-review --pending', expectedEn: 'Reviews pending local changes and writes findings with evidence for each issue found in the current diff.' },
  ],
};
`;
  const prHit = checkFile({
    id: 'ak-code-review',
    src: prSrc,
    skillMd: prMd,
    argumentHint: '[target] [--pending]',
  });
  const artistMd = `---
name: ak:ai-artist
user-invocable: true
argument-hint: "[task] [--mode]"
---
# Artist
--mode
`;
  const artistSrc = `
const data = {
  id: 'ak-ai-artist',
  command: '/ak:ai-artist',
  invocation: { syntax: '/ak:ai-artist [task] [--mode]' },
  workflowModes: [{ flag: '--mode search|creative|wild|all', modeEn: 'generation mode' }],
  promptExamples: [
    { command: '/ak:ai-artist "wallet" --mode search', expectedEn: 'Generates one search-mode image from the brief and writes the artifact path plus the selected prompt match.', recommended: true },
    { command: '/ak:ai-artist "wallet" --mode creative', expectedEn: 'Generates one creative-mode image from the brief and writes the artifact path plus the remix notes.' },
  ],
};
`;
  const modeHit = checkFile({
    id: 'ak-ai-artist',
    src: artistSrc,
    skillMd: artistMd,
    argumentHint: '[task] [--mode]',
  });
  const broMd = `---
name: ak:bro
user-invocable: true
---
# Bro
`;
  const broOne = `
const data = {
  id: 'ak-bro',
  command: '/ak:bro',
  invocation: { syntax: '/ak:bro' },
  promptExamples: [
    { command: '/ak:bro', expectedEn: 'Uses only the previous assistant message and returns a shorter restatement without adding analysis or actions.', recommended: true },
  ],
};
`;
  const broHit = checkFile({
    id: 'ak-bro',
    src: broOne,
    skillMd: broMd,
    argumentHint: '',
  });
  const planOne = good.replace(
    "    { command: '/ak:plan validate plans/x/plan.md', expectedEn: 'Critical questions against the existing plan, then file updates or an explicit list of unresolved blockers.' },\n    { command: '/ak:plan archive plans/x/plan.md', expectedEn: 'Moves the completed plan into the archive location and records the archived path without editing implementation code.' },\n",
    '',
  );
  const planOneHit = checkFile({
    id: 'ak-plan',
    src: planOne,
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
  if (!g.some((v) => v.includes('mode --html'))) fail.push('missing-mode coverage');
  if (!h.some((v) => v.includes('subcommand archive'))) fail.push('missing-subcommand coverage');
  if (!prHit.some((v) => v.includes('subcommand pr'))) fail.push('pr vs project substring');
  if (!modeHit.some((v) => v.includes('mode --mode wild'))) fail.push('--mode search vs wild');
  if (broHit.length) fail.push(`no-arg one prompt: ${broHit.join('; ')}`);
  if (!planOneHit.some((v) => /needs >=2 promptExamples/.test(v))) fail.push('flag skill still needs 2 prompts');
  fail.push(...selfTestSourceChannel());
  const hintFlags = extractFlagsFromText('[--ship] [--ultra] <github-issue-url>');
  if (!hintFlags.has('--ultra') || hintFlags.has('--git-dir')) {
    fail.push('beta-delta contract flags come from argument-hint only');
  }
  const bodyScan = extractAllowedFlags('[--ultra]', 'run git rev-parse --git-dir --git-common-dir');
  if (!bodyScan.has('--git-dir')) fail.push('canonical claims still parse SKILL body flags');
  if (readDocsMdx('', 'beta', 'engineer', 'vibe', { stable: 'origin/main', beta: 'origin/dev' })) {
    fail.push('readDocsMdx empty akDocs must be empty');
  }

  if (fail.length) {
    process.stderr.write(`self-test failed: ${fail.join(', ')}\n`);
    process.exit(1);
  }
  process.stdout.write('self-test ok\n');
}


function collectBetaDelta(kitRoot, snapshot, kit, id, src, akDocs, docsRefs) {
  const resolved = resolvePageSkill(snapshot, kit, id);
  if (resolved.channel !== 'stable' || !resolved.stableRec || !resolved.betaRec) return null;
  if ((resolved.stableRec.stable?.skillMd || null) === (resolved.betaRec.beta?.skillMd || null)) return null;
  const stablePath = resolved.stableRec.gitPath?.stable;
  const betaPath = resolved.betaRec.gitPath?.beta;
  if (!stablePath || !betaPath) return null;
  const stableMd = showFileRaw(kitRoot, snapshot.stableRef, `${stablePath}/SKILL.md`);
  const betaMd = showFileRaw(kitRoot, snapshot.betaRef, `${betaPath}/SKILL.md`);
  if (!stableMd || !betaMd) return null;
  const sText = stableMd.toString('utf8');
  const bText = betaMd.toString('utf8');
  const sFm = extractFrontmatter(sText);
  const bFm = extractFrontmatter(bText);
  const sFlags = extractFlagsFromText(sFm.argumentHint);
  const bFlags = extractFlagsFromText(bFm.argumentHint);

  const pageFlags = new Set(extractDetailFlags(src));
  const onlyBeta = [...bFlags].filter((f) => !sFlags.has(f)).sort();
  const onlyStable = [...sFlags].filter((f) => !bFlags.has(f)).sort();
  const pageMissed = onlyBeta.filter((f) => !pageFlags.has(f));
  const lines = [
    `beta-delta ${kit}/${id} kit-stable=${snapshot.stableRef} kit-beta=${snapshot.betaRef}`,
  ];
  if ((sFm.argumentHint || '') !== (bFm.argumentHint || '')) {
    lines.push(`  hint stable: ${sFm.argumentHint || '(none)'}`);
    lines.push(`  hint beta:   ${bFm.argumentHint || '(none)'}`);
  }
  if (onlyBeta.length) lines.push(`  flags only-beta: ${onlyBeta.join(' ')}`);
  if (onlyStable.length) lines.push(`  flags only-stable: ${onlyStable.join(' ')}`);
  if (pageMissed.length) lines.push(`  page missed vs beta SKILL.md: ${pageMissed.join(' ')}`);
  if (akDocs) {
    const betaMdx = readDocsMdx(akDocs, 'beta', kit, slugFromId(id), docsRefs);
    if (betaMdx) {
      const table = extractDocTableFlags(betaMdx);
      const extras = [...table].filter((f) => !pageFlags.has(f)).sort();
      if (extras.length) lines.push(`  docs-beta table vs page missed: ${extras.join(' ')}`);
    } else {
      lines.push(`  docs-beta: no mdx at ${docsRefs.beta} content/docs/beta/kits/${kit}/skills/${slugFromId(id)}.en.mdx`);
    }
  }
  if (lines.length === 1) lines.push('  blob differs; no argument-hint/flag delta');
  return lines;
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
  const kitRoot = resolve(args.kitRoot);
  let snapshot;
  try {
    snapshot = buildSnapshot(args, kitRoot);
  } catch (err) {
    process.stderr.write(`check-ak-skill-detail-claims: ${err.message}\n`);
    process.exit(2);
  }
  const docsRefs = { stable: args.akDocsStableRef, beta: args.akDocsBetaRef };
  const kitList = args.kit === 'all' ? ['engineer', 'marketing'] : [args.kit];
  const rows = [];
  const betaDeltas = [];
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
      const resolved = resolvePageSkill(snapshot, kit, id);
      const delta = collectBetaDelta(kitRoot, snapshot, kit, id, src, args.akDocs, docsRefs);
      if (delta) betaDeltas.push(delta);

      if (!resolved.skillPath || !resolved.ref) {
        rows.push({ id: `${kit}/${id}`, violations: [`missing SKILL.md channel=${resolved.channel || 'none'}`] });

        continue;
      }
      const raw = showFileRaw(kitRoot, resolved.ref, resolved.skillPath);
      if (!raw) {
        rows.push({ id: `${kit}/${id}`, violations: [`missing SKILL.md channel=${resolved.channel || 'none'}`] });

        continue;
      }
      const skillMd = raw.toString('utf8');
      const fm = extractFrontmatter(skillMd);
      const extraAllowedFlags = new Set();
      if (args.akDocs && resolved.channel) {
        const text = readDocsMdx(args.akDocs, resolved.channel, kit, slugFromId(id), docsRefs);
        if (text) {
          for (const f of extractDocTableFlags(text)) extraAllowedFlags.add(f);
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

  if (betaDeltas.length) {
    process.stdout.write(`beta-delta ${betaDeltas.length} shared pages (advisory, not gated)\n`);
    for (const lines of betaDeltas) {
      for (const line of lines) process.stdout.write(`${line}\n`);
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

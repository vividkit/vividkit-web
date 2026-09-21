#!/usr/bin/env node
/**
 * Operational owner for top-level /guides/agentkit pages except skills + workflows.
 * 1) Registry must match walked identities.
 * 2) Backing files must exist (EN page + component; extra data files).
 * 3) CLI cheatsheet `ak <cmd>` names must be cobra commands registered under ak.
 *    A multi-word name walks that parent/child chain. Each entry's subcommands
 *    must be direct children of the named command. Does not fetch.
 *    Does not claim migrate/safety copy.
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

function skipString(src, i) {
  const q = src[i];
  if (q === '`') {
    const j = src.indexOf('`', i + 1);
    return j < 0 ? src.length : j;
  }
  let j = i + 1;
  while (j < src.length) {
    if (src[j] === '\\') { j += 2; continue; }
    if (src[j] === '"') return j;
    j++;
  }
  return src.length;
}

function skipSpace(src, i) {
  while (i < src.length && /\s/.test(src[i])) i++;
  return i;
}

function skipDelim(src, i, open, close) {
  let depth = 0;
  for (let j = i; j < src.length; j++) {
    if (src[j] === '"' || src[j] === '`') { j = skipString(src, j); continue; }
    if (src[j] === open) depth++;
    else if (src[j] === close) {
      depth--;
      if (depth === 0) return j + 1;
    }
  }
  return src.length;
}

function splitTop(src, sep) {
  const parts = [];
  let start = 0;
  let paren = 0;
  let brace = 0;
  let bracket = 0;
  for (let i = 0; i < src.length; i++) {
    if (src[i] === '"' || src[i] === '`') { i = skipString(src, i); continue; }
    if (src[i] === '(') paren++;
    else if (src[i] === ')') paren--;
    else if (src[i] === '{') brace++;
    else if (src[i] === '}') brace--;
    else if (src[i] === '[') bracket++;
    else if (src[i] === ']') bracket--;
    else if (src[i] === sep && paren === 0 && brace === 0 && bracket === 0) {
      parts.push(src.slice(start, i));
      start = i + 1;
    }
  }
  parts.push(src.slice(start));
  return parts.map((s) => s.trim()).filter((s) => s.length);
}

function stripGoComments(src) {
  let out = '';
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (c === '"' || c === '`') {
      const end = skipString(src, i);
      out += src.slice(i, end + 1);
      i = end;
      continue;
    }
    if (c === '/' && src[i + 1] === '/') {
      const j = src.indexOf('\n', i);
      i = j < 0 ? src.length : j;
      out += '\n';
      continue;
    }
    if (c === '/' && src[i + 1] === '*') {
      const j = src.indexOf('*/', i + 2);
      i = j < 0 ? src.length : j + 1;
      continue;
    }
    out += c;
  }
  return out;
}

function parseFuncs(src, pkg) {
  const out = [];
  for (let i = 0; i < src.length; i++) {
    if (src[i] === '"' || src[i] === '`') { i = skipString(src, i); continue; }
    if (src.slice(i, i + 4) !== 'func') continue;
    if (i > 0 && /[A-Za-z0-9_]/.test(src[i - 1])) continue;
    if (/[A-Za-z0-9_]/.test(src[i + 4] || '')) continue;
    let p = skipSpace(src, i + 4);
    if (src[p] === '(') {
      p = skipDelim(src, p, '(', ')');
      p = skipSpace(src, p);
    }
    const nameM = /^([A-Za-z0-9_]+)/.exec(src.slice(p));
    if (!nameM) continue;
    p = skipSpace(src, p + nameM[1].length);
    if (src[p] === '[') p = skipDelim(src, p, '[', ']');
    p = skipSpace(src, p);
    if (src[p] !== '(') continue;
    const paramsStart = p;
    p = skipDelim(src, p, '(', ')');
    const paramsRaw = src.slice(paramsStart + 1, p - 1);
    p = skipSpace(src, p);
    const brace = src.indexOf('{', p);
    if (brace < 0 || brace - p > 400) continue;
    const end = skipDelim(src, brace, '{', '}');
    const body = src.slice(brace + 1, end - 1);
    const paramNames = splitTop(paramsRaw, ',').map((part) => {
      const t = part.trim();
      if (!t || t.startsWith('func')) return null;
      const id = t.match(/^([A-Za-z0-9_]+)/);
      return id ? id[1] : null;
    }).filter(Boolean);
    out.push({ name: nameM[1], paramNames, body, pkg });
    i = end;
  }
  return out;
}

function parseCall(src, i) {
  const m = /^([A-Za-z0-9_]+)(?:\.([A-Za-z0-9_]+))?(?:\[[^\]]*\])?\s*\(/.exec(src.slice(i));
  if (!m) return null;
  const open = i + m[0].length - 1;
  const end = skipDelim(src, open, '(', ')');
  return {
    pkgAlias: m[2] ? m[1] : '',
    funcName: m[2] || m[1],
    args: splitTop(src.slice(open + 1, end - 1), ','),
    end,
  };
}

function parseCompositeUse(src, i) {
  const brace = src.indexOf('{', i);
  if (brace < 0) return null;
  let depth = 0;
  let use = null;
  for (let j = brace; j < src.length; j++) {
    if (src[j] === '"' || src[j] === '`') { j = skipString(src, j); continue; }
    if (src[j] === '{') depth++;
    else if (src[j] === '}') {
      depth--;
      if (depth === 0) return { use, end: j + 1 };
    }
    if (depth !== 1) continue;
    const slice = src.slice(j);
    let m;
    if ((m = /^Use\s*:\s*"([^"]+)"/.exec(slice))) use = { lit: m[1] };
    else if ((m = /^Use\s*:\s*string\s*\(\s*([A-Za-z0-9_]+)\s*\)/.exec(slice))) use = { param: m[1] };
    else if ((m = /^Use\s*:\s*([A-Za-z0-9_]+)/.exec(slice)) && m[1] !== 'string') use = { param: m[1] };
  }
  return null;
}

function scanDepth0(body) {
  const events = [];
  let depth = 0;
  for (let i = 0; i < body.length; i++) {
    const c = body[i];
    if (c === '"' || c === '`') { i = skipString(body, i); continue; }
    if (c === '{') { depth++; continue; }
    if (c === '}') { depth = Math.max(0, depth - 1); continue; }
    if (i > 0 && /[A-Za-z0-9_]/.test(body[i - 1])) continue;
    const rest = body.slice(i);
    let m;
    if (depth !== 0) {
      if ((m = /^([A-Za-z0-9_]+)\.AddCommand\s*\(/.exec(rest))) {
        const open = i + m[0].length - 1;
        const end = skipDelim(body, open, '(', ')');
        events.push({ kind: 'add', recv: m[1], args: splitTop(body.slice(open + 1, end - 1), ',') });
        i = end - 1;
      }
      continue;
    }
    if ((m = /^([A-Za-z0-9_]+)\s*:=\s*/.exec(rest))) {
      const rhs = body.slice(i + m[0].length);
      if (!rhs.startsWith('range')) events.push({ kind: 'assign', name: m[1], rhsAt: i + m[0].length });
      continue;
    }
    if ((m = /^([A-Za-z0-9_]+)\.Use\s*=\s*"([^"]+)"/.exec(rest))) {
      events.push({ kind: 'useset', name: m[1], use: m[2] });
      i += m[0].length - 1;
      continue;
    }
    if ((m = /^([A-Za-z0-9_]+)\.AddCommand\s*\(/.exec(rest))) {
      const open = i + m[0].length - 1;
      const end = skipDelim(body, open, '(', ')');
      events.push({ kind: 'add', recv: m[1], args: splitTop(body.slice(open + 1, end - 1), ',') });
      i = end - 1;
      continue;
    }
    if ((m = /^addGrouped\s*\(/.exec(rest))) {
      const open = i + m[0].length - 1;
      const end = skipDelim(body, open, '(', ')');
      events.push({ kind: 'grouped', args: splitTop(body.slice(open + 1, end - 1), ',') });
      i = end - 1;
      continue;
    }
    if ((m = /^return\b/.exec(rest))) {
      events.push({ kind: 'return', at: i + m[0].length });
    }
  }
  return events;
}

function asCmd(value) {
  const name = String(value || '').trim().split(/\s+/)[0];
  return /^[a-z_][a-z0-9_-]*$/.test(name) ? name : '';
}

function rangeConstValues(body, ident, consts) {
  const re = new RegExp(
    `for\\s+[^\\n]*\\b${ident}\\s*:=\\s*range\\s+\\[\\][A-Za-z0-9_.]+\\s*\\{([^}]*)\\}`,
  );
  const m = re.exec(body);
  if (!m) return [];
  const vals = [];
  for (const id of m[1].match(/[A-Za-z_][A-Za-z0-9_]*/g) || []) {
    if (consts.has(id)) vals.push(consts.get(id));
  }
  return vals;
}

function loadStringConsts(kitRoot, ref) {
  const map = new Map();
  let text = '';
  try {
    text = git(kitRoot, [
      'grep', '-h', '-E',
      '^[[:space:]]*[A-Z][A-Za-z0-9_]+[[:space:]]+[A-Za-z0-9_.]+[[:space:]]*=[[:space:]]*"[^"]*"',
      ref, '--', 'apps/cli',
    ]);
  } catch {
    text = '';
  }
  for (const line of text.split('\n')) {
    const m = line.match(/([A-Z][A-Za-z0-9_]*)\s+[A-Za-z0-9_.]+\s*=\s*"([^"]*)"/);
    if (m && !map.has(m[1])) map.set(m[1], m[2]);
  }
  return map;
}

function buildCobraTree(kitRoot, ref) {
  let listing = '';
  try {
    listing = git(kitRoot, ['ls-tree', '-r', '--name-only', ref, 'apps/cli/internal/commands', 'apps/cli/internal/cmdtree']);
  } catch {
    return { roots: new Set(), children: new Map() };
  }
  const funcs = [];
  for (const path of listing.split('\n')) {
    if (!path.endsWith('.go') || path.endsWith('_test.go')) continue;
    const text = showFile(kitRoot, ref, path);
    if (!text) continue;
    const pkg = path.split('/').slice(0, -1).join('/');
    funcs.push(...parseFuncs(stripGoComments(text), pkg));
  }
  const consts = loadStringConsts(kitRoot, ref);
  const children = new Map();
  function addEdge(parent, child) {
    const p = asCmd(parent);
    const c = asCmd(child);
    if (!p || !c || p === c) return;
    if (!children.has(p)) children.set(p, new Set());
    children.get(p).add(c);
  }
  function lookup(pkgAlias, funcName, callerPkg) {
    let hits = funcs.filter((f) => f.name === funcName);
    if (pkgAlias) hits = hits.filter((f) => f.pkg.endsWith('/' + pkgAlias));
    else if (callerPkg) {
      const same = hits.filter((f) => f.pkg === callerPkg);
      if (same.length) hits = same;
    }
    return hits.length === 1 ? hits[0] : null;
  }
  function exprUses(expr, caller, lits, locals) {
    const text = String(expr || '').trim();
    if (!text) return [];
    if (locals && locals.has(text)) return locals.get(text);
    if (text.startsWith('"')) {
      const m = /^"([^"]*)"/.exec(text);
      return m ? [m[1]] : [];
    }
    if (/^[A-Za-z0-9_]+$/.test(text)) {
      const idx = caller ? caller.paramNames.indexOf(text) : -1;
      if (idx >= 0 && lits[idx]) return [String(lits[idx])];
      if (caller) return rangeConstValues(caller.body, text, consts);
      return [];
    }
    if (text.startsWith('&cobra.Command')) {
      const parsed = parseCompositeUse(text, 0);
      if (!parsed || !parsed.use) return [];
      if (parsed.use.lit) return [parsed.use.lit];
      if (parsed.use.param && caller) {
        const idx = caller.paramNames.indexOf(parsed.use.param);
        if (idx >= 0 && lits[idx]) return [String(lits[idx])];
      }
      return [];
    }
    const call = parseCall(text, 0);
    if (!call) return [];
    return callUses(call, caller, lits, locals, new Set());
  }
  function callUses(call, caller, lits, locals, stack) {
    const target = lookup(call.pkgAlias, call.funcName, caller && caller.pkg);
    if (!target) return [];
    const lists = target.paramNames.map((_, idx) => {
      const vals = call.args[idx] == null ? [] : exprUses(call.args[idx], caller, lits, locals);
      return vals.length ? vals : [''];
    });
    const combos = lists.length ? cartesian(lists) : [[]];
    const out = [];
    for (const combo of combos) {
      const sig = target.pkg + ':' + target.name + ':' + JSON.stringify(combo);
      if (stack.has(sig)) continue;
      stack.add(sig);
      out.push(...returnedUses(target, combo, stack));
      stack.delete(sig);
    }
    return [...new Set(out)];
  }
  function returnedUses(fn, lits, stack) {
    const locals = new Map();
    let returned = [];
    for (const ev of scanDepth0(fn.body)) {
      if (ev.kind === 'assign') {
        const rhs = fn.body.slice(ev.rhsAt).trimStart();
        locals.set(ev.name, rhs.startsWith('func') ? [] : exprUses(rhs, fn, lits, locals));
      } else if (ev.kind === 'useset') {
        locals.set(ev.name, [ev.use]);
      } else if (ev.kind === 'add') {
        for (const parent of locals.get(ev.recv) || []) {
          for (const arg of ev.args) {
            for (const child of exprUses(arg, fn, lits, locals)) addEdge(parent, child);
          }
        }
      } else if (ev.kind === 'grouped') {
        for (const parent of locals.get('root') || []) {
          for (const arg of ev.args.slice(1)) {
            for (const child of exprUses(arg, fn, lits, locals)) addEdge(parent, child);
          }
        }
      } else if (ev.kind === 'return') {
        const line = fn.body.slice(ev.at).trim().split('\n')[0];
        returned = exprUses(line, fn, lits, locals);
      }
    }
    return returned.map(asCmd).filter(Boolean);
  }
  for (const fn of funcs) returnedUses(fn, [], new Set());
  return { roots: new Set(children.get('ak') || []), children };
}

function cartesian(lists) {
  let acc = [[]];
  for (const list of lists) {
    const next = [];
    for (const row of acc) for (const value of list) next.push([...row, value]);
    acc = next;
  }
  return acc;
}

function cheatsheetEntries(repo) {
  const src = readFileSync(join(repo, 'src/data/guides/agentkit-cli-cheatsheet.ts'), 'utf8');
  const blocks = [...src.matchAll(/name:\s*"ak ([^"]+)"([\s\S]*?)(?=\n  \{\n    name:|\n\];)/g)];
  return blocks.map((m) => {
    const sub = m[2].match(/subcommands:\s*\[([^\]]*)\]/);
    const subs = sub ? [...sub[1].matchAll(/"([^"]+)"/g)].map((x) => x[1].trim()) : [];
    return { name: m[1].trim(), subs };
  });
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

  const tree = buildCobraTree(kitRoot, opts.stableRef);
  const edgeCount = [...tree.children.values()].reduce((n, set) => n + set.size, 0);
  if (tree.roots.size === 0) {
    problems.push(`no cobra commands registered under ak at ${opts.stableRef}`);
  } else {
    for (const entry of cheatsheetEntries(repo)) {
      const parts = entry.name.split(/\s+/).map((part) => part.split(/[<\[]/)[0]).filter(Boolean);
      if (!parts.length || !tree.roots.has(parts[0])) {
        problems.push(`cheatsheet unknown-root ak ${entry.name} (not registered under ak)`);
        continue;
      }
      let cur = parts[0];
      let broken = false;
      for (let i = 1; i < parts.length; i++) {
        const kids = tree.children.get(cur) || new Set();
        if (!kids.has(parts[i])) {
          problems.push(`cheatsheet unknown-child ak ${entry.name} (${parts[i]} is not a child of ${cur})`);
          broken = true;
          break;
        }
        cur = parts[i];
      }
      if (broken) continue;
      for (const sub of entry.subs) {
        const child = sub.split(/\s+/)[0];
        const kids = tree.children.get(cur) || new Set();
        if (!kids.has(child)) {
          problems.push(`cheatsheet unknown-subcommand ak ${entry.name} ${sub} (not a child of ${cur})`);
        }
      }
    }
  }

  process.stdout.write(
    `ak-guide-pages identities=${registered.length} walked=${walked.length} ` +
      `cobraRoots=${tree.roots.size} cobraEdges=${edgeCount} ${opts.stableRef}\n`,
  );
  if (problems.length) {
    process.stderr.write(`Drift (${problems.length})\n`);
    for (const p of problems) process.stderr.write(`  ${p}\n`);
    process.exit(1);
  }
  process.stdout.write('clean\n');
}

main(process.argv.slice(2));

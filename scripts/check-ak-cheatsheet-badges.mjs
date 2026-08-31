#!/usr/bin/env node
/**
 * Pin + re-apply editorial NEW/COMMON badges on the AgentKit skills cheatsheet.
 * Authority: reference/ak-docs-skills-meta/cheatsheet-badges.json
 * Does not invent badges from kit SKILL.md.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PIN_PATH = join(ROOT, 'reference/ak-docs-skills-meta/cheatsheet-badges.json');
const CHEATSHEET = join(ROOT, 'src/data/guides/agentkit-skills-cheatsheet.ts');
const ENGINEER_END = 'export const akMarketingSkills';

function parseArgs(argv) {
  return { write: argv.includes('--write') };
}

function loadPin() {
  const pin = JSON.parse(readFileSync(PIN_PATH, 'utf8'));
  const neu = new Set(pin.new || []);
  const common = new Set(pin.common || []);
  const overlap = [...neu].filter((id) => common.has(id));
  if (overlap.length) {
    throw new Error(`cheatsheet-badges.json overlap: ${overlap.join(', ')}`);
  }
  return { pin, neu, common };
}

function engineerSlice(src) {
  const end = src.indexOf(ENGINEER_END);
  if (end < 0) throw new Error('engineer array terminator not found');
  return { head: src.slice(0, end), tail: src.slice(end), end };
}

function expected(id, neu, common) {
  if (neu.has(id)) return 'new';
  if (common.has(id)) return 'common';
  return null;
}

function current(block) {
  const isNew = /^\s*isNew:\s*true,?$/m.test(block);
  const isCommon = /^\s*isCommon:\s*true,?$/m.test(block);
  if (isNew && isCommon) return 'both';
  if (isNew) return 'new';
  if (isCommon) return 'common';
  return null;
}

function stripBadges(block) {
  return block.replace(/^\s*isNew:\s*true,?\n/gm, '').replace(/^\s*isCommon:\s*true,?\n/gm, '');
}

function insertBadge(block, kind) {
  if (!kind) return block;
  const line = kind === 'new' ? '    isNew: true,\n' : '    isCommon: true,\n';
  const withCategory = block.replace(/^(\s*category:\s*"[^"]+",\n)/m, `$1${line}`);
  if (withCategory !== block) return withCategory;
  throw new Error('category line missing; cannot insert badge');
}

function main() {
  const { write } = parseArgs(process.argv.slice(2));
  const { pin, neu, common } = loadPin();
  const src = readFileSync(CHEATSHEET, 'utf8');
  const { head, tail } = engineerSlice(src);

  const idRe = /\n  \{\n    id: "(ak-[^"]+)"/g;
  const ids = [];
  let m;
  while ((m = idRe.exec(head))) ids.push({ id: m[1], index: m.index + 1 });

  const seen = new Set();
  const drift = [];
  let next = head;

  for (let i = ids.length - 1; i >= 0; i--) {
    const { id, index } = ids[i];
    seen.add(id);
    const end = i + 1 < ids.length ? ids[i + 1].index : head.length;
    const block = next.slice(index, end);
    const want = expected(id, neu, common);
    const have = current(block);
    if (have === 'both') drift.push(`${id}: has both isNew and isCommon`);
    else if (want !== have) drift.push(`${id}: want ${want || 'none'} have ${have || 'none'}`);
    if (write) {
      const applied = insertBadge(stripBadges(block), want);
      next = next.slice(0, index) + applied + next.slice(end);
    }
  }

  for (const id of [...neu, ...common]) {
    if (!seen.has(id)) drift.push(`${id}: pinned but missing from engineer cheatsheet`);
  }

  if (!write) {
    if (drift.length) {
      process.stderr.write(`cheatsheet badges drift (${drift.length})\n`);
      for (const line of drift) process.stderr.write(`  ${line}\n`);
      process.stderr.write('Re-apply: node scripts/check-ak-cheatsheet-badges.mjs --write\n');
      process.exit(1);
    }
    process.stdout.write(
      `clean new=${pin.new.length} common=${pin.common.length} engineer=${ids.length}\n`,
    );
    return;
  }
  const out = `${next}${tail}`;
  if (out === src) {
    process.stdout.write(
      `unchanged new=${pin.new.length} common=${pin.common.length} engineer=${ids.length}\n`,
    );
    return;
  }
  writeFileSync(CHEATSHEET, out);
  process.stdout.write(`wrote ${CHEATSHEET} new=${pin.new.length} common=${pin.common.length}\n`);
}

main();

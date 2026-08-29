#!/usr/bin/env node
/**
 * Track AgentKit skill-detail pages against kit SKILL.md.
 *
 * Lockfile: reference/ak-docs-skills-meta/skill-details-lock.json
 *
 *   node scripts/check-ak-skill-details.mjs --kit-root <agentkit-checkout>
 *   node scripts/check-ak-skill-details.mjs --kit-root <path> --write-lock
 *
 * Exit 1 when inventory or SKILL.md sha256 diverges from the lock.
 * Does not rewrite guide prose. Re-author the listed detail TS files, then --write-lock.
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const LOCK_DIR = join(ROOT, 'reference/ak-docs-skills-meta');
const LOCK_PATH = join(LOCK_DIR, 'skill-details-lock.json');
const DETAILS = join(ROOT, 'src/data/guides/agentkit-skill-details');

const KIT_COMMIT = '405ea37ecb6b3e6f6de895bca4d7a132b6dfce04';
const KIT_VERSION = '2.14.0';

function parseArgs(argv) {
  const out = { writeLock: false, kitRoot: '' };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--write-lock') out.writeLock = true;
    else if (a === '--kit-root') out.kitRoot = argv[++i] || '';
    else if (a === '--help' || a === '-h') {
      process.stdout.write(
        'Usage: check-ak-skill-details --kit-root <agentkit-checkout> [--write-lock]\n',
      );
      process.exit(0);
    }
  }
  return out;
}

function sha256(buf) {
  return createHash('sha256').update(buf).digest('hex');
}

function listDetailIds() {
  const pages = [];
  for (const kit of ['engineer', 'marketing']) {
    const dir = join(DETAILS, kit);
    if (!existsSync(dir)) continue;
    for (const name of readdirSync(dir).sort()) {
      if (!name.startsWith('ak-') || !name.endsWith('.ts')) continue;
      pages.push({ kit, id: name.slice(0, -3) });
    }
  }
  return pages;
}

function extractFrontmatter(text) {
  if (!text.startsWith('---')) return { description: '', argumentHint: '' };
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
  return {
    description: get('description'),
    argumentHint: get('argument-hint'),
  };
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

function buildEntries(kitRoot) {
  const pages = listDetailIds();
  const entries = [];
  for (const page of pages) {
    const src = resolveSource(kitRoot, page.kit, page.id);
    const detailFile = `src/data/guides/agentkit-skill-details/${page.kit}/${page.id}.ts`;
    const route = `/guides/agentkit/skills/${page.kit}/${page.id}`;
    if (!src) {
      entries.push({
        kit: page.kit,
        id: page.id,
        route,
        detailFile,
        source: null,
        sourceSha256: null,
        argumentHint: null,
        descriptionSha256: null,
        missingSource: true,
      });
      continue;
    }
    const bytes = readFileSync(src.abs);
    const fm = extractFrontmatter(bytes.toString('utf8'));
    entries.push({
      kit: page.kit,
      id: page.id,
      route,
      detailFile,
      source: src.rel,
      sourceSha256: sha256(bytes),
      argumentHint: fm.argumentHint || null,
      descriptionSha256: fm.description ? sha256(fm.description) : null,
      missingSource: false,
    });
  }
  return entries;
}

function loadLock() {
  if (!existsSync(LOCK_PATH)) return null;
  return JSON.parse(readFileSync(LOCK_PATH, 'utf8'));
}

function keyOf(e) {
  return `${e.kit}/${e.id}`;
}

function diffLocks(prev, next) {
  const oldMap = new Map((prev?.entries || []).map((e) => [keyOf(e), e]));
  const newMap = new Map(next.entries.map((e) => [keyOf(e), e]));
  const added = [];
  const removed = [];
  const changed = [];
  for (const [k, e] of newMap) {
    if (!oldMap.has(k)) added.push(e);
    else {
      const o = oldMap.get(k);
      if (o.sourceSha256 !== e.sourceSha256 || o.source !== e.source || o.argumentHint !== e.argumentHint) {
        changed.push({ id: k, from: o.sourceSha256, to: e.sourceSha256, source: e.source, argumentHint: e.argumentHint });
      }
    }
  }
  for (const [k, e] of oldMap) {
    if (!newMap.has(k)) removed.push(e);
  }
  return { added, removed, changed };
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (!opts.kitRoot) {
    process.stderr.write('check-ak-skill-details: --kit-root is required\n');
    process.exit(2);
  }
  const kitRoot = resolve(opts.kitRoot);
  if (!existsSync(join(kitRoot, 'kits'))) {
    process.stderr.write(`check-ak-skill-details: no kits/ under ${kitRoot}\n`);
    process.exit(2);
  }

  const entries = buildEntries(kitRoot);
  const snapshot = {
    kitVersion: KIT_VERSION,
    kitCommit: KIT_COMMIT,
    generatedAt: new Date().toISOString(),
    kitRootHint: relative(ROOT, kitRoot) || kitRoot,
    pageCount: entries.length,
    entries,
  };

  if (opts.writeLock) {
    mkdirSync(LOCK_DIR, { recursive: true });
    writeFileSync(LOCK_PATH, `${JSON.stringify(snapshot, null, 2)}\n`);
    process.stdout.write(`wrote ${LOCK_PATH} (${entries.length} pages)\n`);
    return;
  }

  const prev = loadLock();
  if (!prev) {
    process.stderr.write(`check-ak-skill-details: missing lock at ${LOCK_PATH}; run with --write-lock\n`);
    process.exit(2);
  }

  const { added, removed, changed } = diffLocks(prev, snapshot);
  const missingSource = entries.filter((e) => e.missingSource);

  process.stdout.write(
    `lock ${prev.kitVersion}@${String(prev.kitCommit).slice(0, 7)} pages=${prev.pageCount}\n` +
      `now  ${snapshot.kitVersion} pages=${snapshot.pageCount}\n` +
      `added ${added.length} removed ${removed.length} changed ${changed.length} missingSource ${missingSource.length}\n`,
  );
  for (const e of added) process.stdout.write(`  + ${e.kit}/${e.id}\n`);
  for (const e of removed) process.stdout.write(`  - ${e.kit}/${e.id}\n`);
  for (const e of changed) process.stdout.write(`  ~ ${e.id} ${e.source}\n`);
  for (const e of missingSource) process.stdout.write(`  ? ${e.kit}/${e.id} no SKILL.md\n`);

  if (added.length || removed.length || changed.length || missingSource.length) {
    process.stderr.write(
      'Drift. Re-author src/data/guides/agentkit-skill-details/{kit}/{id}.ts then --write-lock.\n',
    );
    process.exit(1);
  }
  process.stdout.write('clean\n');
}

main();

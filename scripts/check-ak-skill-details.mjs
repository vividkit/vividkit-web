#!/usr/bin/env node
/**
 * Track AgentKit skill-detail pages against kit SKILL.md at the page's
 * sourceChannel ref (beta-only → origin/dev; shared/stable-only → origin/main).
 * Fingerprint: git blob OID of SKILL.md. Does not fetch.
 */
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  ROOT,
  buildSnapshot,
  resolvePageSkill,
  selfTestSourceChannel,
  showFileRaw,
} from './lib/ak-kit-sources.mjs';

const LOCK_DIR = join(ROOT, 'reference/ak-docs-skills-meta');
const LOCK_PATH = join(LOCK_DIR, 'skill-details-lock.json');
const DETAILS = join(ROOT, 'src/data/guides/agentkit-skill-details');

function parseArgs(argv) {
  const out = {
    writeLock: false,
    kitRoot: '',
    stableRef: 'origin/main',
    betaRef: 'origin/dev',
    selfTest: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--write-lock') out.writeLock = true;
    else if (a === '--kit-root') out.kitRoot = argv[++i] || '';
    else if (a === '--stable-ref') out.stableRef = argv[++i] || out.stableRef;
    else if (a === '--beta-ref') out.betaRef = argv[++i] || out.betaRef;
    else if (a === '--self-test') out.selfTest = true;
    else if (a === '--help' || a === '-h') {
      process.stdout.write(
        'Usage: check-ak-skill-details --kit-root <agentkit-checkout> [--stable-ref] [--beta-ref] [--write-lock] [--self-test]\n',
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

function buildEntries(kitRoot, snapshot) {
  const pages = listDetailIds();
  const entries = [];
  const betaDeltas = [];
  for (const page of pages) {
    const resolved = resolvePageSkill(snapshot, page.kit, page.id);
    const detailFile = `src/data/guides/agentkit-skill-details/${page.kit}/${page.id}.ts`;
    const route = `/guides/agentkit/skills/${page.kit}/${page.id}`;
    const rec = resolved.rec;
    if (
      resolved.channel === 'stable' &&
      resolved.stableRec &&
      resolved.betaRec &&
      (resolved.stableRec.stable?.skillMd || null) !== (resolved.betaRec.beta?.skillMd || null)
    ) {
      betaDeltas.push(`${page.kit}/${page.id}`);
    }

    if (!resolved.channel || !resolved.skillPath || !resolved.ref) {
      entries.push({
        kit: page.kit,
        id: page.id,
        route,
        detailFile,
        sourceChannel: resolved.channel,
        sourceRef: resolved.ref,
        sourceCommit: resolved.commit,
        source: null,
        sourceBlob: null,
        sourceSha256: null,
        argumentHint: null,
        descriptionSha256: null,
        missingSource: true,
      });
      continue;
    }
    const bytes = showFileRaw(kitRoot, resolved.ref, resolved.skillPath);
    if (!bytes) {
      entries.push({
        kit: page.kit,
        id: page.id,
        route,
        detailFile,
        sourceChannel: resolved.channel,
        sourceRef: resolved.ref,
        sourceCommit: resolved.commit,
        source: resolved.skillPath,
        sourceBlob: rec?.[resolved.channel]?.skillMd || null,
        sourceSha256: null,
        argumentHint: null,
        descriptionSha256: null,
        missingSource: true,
      });
      continue;
    }
    const text = bytes.toString('utf8');
    const fm = extractFrontmatter(text);
    entries.push({
      kit: page.kit,
      id: page.id,
      route,
      detailFile,
      sourceChannel: resolved.channel,
      sourceRef: resolved.ref,
      sourceCommit: resolved.commit,
      source: resolved.skillPath,
      sourceBlob: rec?.[resolved.channel]?.skillMd || null,
      sourceSha256: sha256(bytes),
      argumentHint: fm.argumentHint || null,
      descriptionSha256: fm.description ? sha256(fm.description) : null,
      missingSource: false,
    });
  }
  return { entries, betaDeltas };
}

function loadLock() {
  if (!existsSync(LOCK_PATH)) return null;
  return JSON.parse(readFileSync(LOCK_PATH, 'utf8'));
}

function keyOf(e) {
  return `${e.kit}/${e.id}`;
}

function sameFingerprint(a, b) {
  if (a.sourceBlob && b.sourceBlob) return a.sourceBlob === b.sourceBlob;
  if (a.sourceSha256 && b.sourceSha256) return a.sourceSha256 === b.sourceSha256;
  return false;
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
      const sameFp = sameFingerprint(o, e);
      const sameSource = (o.source || null) === (e.source || null);
      const sameHint = (o.argumentHint || null) === (e.argumentHint || null);
      if (!sameFp || !sameSource || !sameHint) {
        changed.push({
          id: k,
          from: o.sourceBlob || o.sourceSha256 || null,
          to: e.sourceBlob || e.sourceSha256 || null,
          source: e.source,
          sourceChannel: e.sourceChannel,
          argumentHint: e.argumentHint,
        });
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
  if (opts.selfTest) {
    const fail = selfTestSourceChannel();
    if (fail.length) {
      process.stderr.write(`self-test failed: ${fail.join(', ')}\n`);
      process.exit(1);
    }
    process.stdout.write('self-test ok\n');
    return;
  }
  if (!opts.kitRoot) {
    process.stderr.write('check-ak-skill-details: --kit-root is required\n');
    process.exit(2);
  }
  const kitRoot = resolve(opts.kitRoot);
  if (!existsSync(join(kitRoot, 'kits')) || !existsSync(join(kitRoot, '.git'))) {
    process.stderr.write(`check-ak-skill-details: ${kitRoot} is not an ak-cli git checkout\n`);
    process.exit(2);
  }

  let snapshot;
  try {
    snapshot = buildSnapshot(opts, kitRoot);
  } catch (err) {
    process.stderr.write(`check-ak-skill-details: ${err.message}\n`);
    process.exit(2);
  }

  const { entries, betaDeltas } = buildEntries(kitRoot, snapshot);
  const snapshotLock = {
    schemaVersion: 2,
    kitVersion: snapshot.stableVersion || snapshot.betaVersion || '',
    kitCommit: snapshot.stableCommit,
    stableRef: snapshot.stableRef,
    betaRef: snapshot.betaRef,
    stableCommit: snapshot.stableCommit,
    betaCommit: snapshot.betaCommit,
    generatedAt: new Date().toISOString(),
    kitRootHint: relative(ROOT, kitRoot) || kitRoot,
    pageCount: entries.length,
    entries,
  };

  if (opts.writeLock) {
    mkdirSync(LOCK_DIR, { recursive: true });
    writeFileSync(LOCK_PATH, `${JSON.stringify(snapshotLock, null, 2)}\n`);
    process.stdout.write(`wrote ${LOCK_PATH} (${entries.length} pages)\n`);
    return;
  }

  const prev = loadLock();
  if (!prev) {
    process.stderr.write(`check-ak-skill-details: missing lock at ${LOCK_PATH}; run with --write-lock\n`);
    process.exit(2);
  }

  const { added, removed, changed } = diffLocks(prev, snapshotLock);
  const missingSource = entries.filter((e) => e.missingSource);

  process.stdout.write(
    `lock ${prev.kitVersion}@${String(prev.kitCommit).slice(0, 7)} pages=${prev.pageCount}\n` +
      `now  ${snapshotLock.kitVersion}@${String(snapshotLock.kitCommit).slice(0, 7)} ` +
      `${snapshot.stableRef}/${snapshot.betaRef} pages=${snapshotLock.pageCount}\n` +
      `added ${added.length} removed ${removed.length} changed ${changed.length} missingSource ${missingSource.length}\n`,
  );
  for (const e of added) process.stdout.write(`  + ${e.kit}/${e.id} channel=${e.sourceChannel || 'none'}\n`);
  for (const e of removed) process.stdout.write(`  - ${e.kit}/${e.id}\n`);
  for (const e of changed) process.stdout.write(`  ~ ${e.id} ${e.sourceChannel || ''} ${e.source}\n`);
  for (const e of missingSource) process.stdout.write(`  ? ${e.kit}/${e.id} no SKILL.md channel=${e.sourceChannel || 'none'}\n`);
  if (betaDeltas.length) {
    process.stdout.write(`beta-delta ${betaDeltas.length} shared pages (advisory, not gated)\n`);
    for (const id of betaDeltas) process.stdout.write(`  beta-delta ${id}\n`);
  }

  if (added.length || removed.length || changed.length || missingSource.length) {
    process.stderr.write(
      'Drift. Re-author src/data/guides/agentkit-skill-details/{kit}/{id}.ts then --write-lock.\n',
    );
    process.exit(1);
  }
  process.stdout.write('clean\n');
}

main();

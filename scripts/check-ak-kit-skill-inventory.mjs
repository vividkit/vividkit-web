#!/usr/bin/env node
/**
 * Track AgentKit skill inventory + package fingerprints from ak-cli kit.yaml.
 *
 * Authority: local git refs (default origin/main = stable, origin/dev = beta).
 * Does not fetch. New remote commits are invisible until `git fetch` on --kit-root.
 *
 *   core:      exports.skills
 *   engineer:  core ∪ appends.skills  (no overrides.skills)
 *   marketing: overrides.skills replaces core; new core skills are NOT inherited
 *
 * Fingerprints (deduped by source kit + id, impact routed to every effective surface):
 *   skillMd = git blob OID of SKILL.md     → contract-updated
 *   tree    = git tree OID of skill dir    → package-updated (references/scripts/assets)
 *
 *   node scripts/check-ak-kit-skill-inventory.mjs --kit-root <ak-cli>
 *   AK_CLI=<ak-cli> node scripts/check-ak-kit-skill-inventory.mjs
 *   node scripts/check-ak-kit-skill-inventory.mjs --kit-root <ak-cli> --write-lock
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  CHANNELS,
  ROOT,
  SURFACES,
  buildSnapshot,
  uniqueSorted,
} from './lib/ak-kit-sources.mjs';

const LOCK_DIR = join(ROOT, 'reference/ak-docs-skills-meta');
const LOCK_PATH = join(LOCK_DIR, 'kit-tree-inventory.json');
const CHEATSHEET = join(ROOT, 'src/data/guides/agentkit-skills-cheatsheet.ts');

function parseArgs(argv) {
  const out = {
    kitRoot: process.env.AK_CLI || process.env.AK_CLI_ROOT || '',
    stableRef: 'origin/main',
    betaRef: 'origin/dev',
    writeLock: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--write-lock') out.writeLock = true;
    else if (a === '--kit-root') out.kitRoot = argv[++i] || '';
    else if (a === '--stable-ref') out.stableRef = argv[++i] || out.stableRef;
    else if (a === '--beta-ref') out.betaRef = argv[++i] || out.betaRef;
  }
  return out;
}

function sliceCheatsheet(src) {
  const engStart = src.indexOf('export const akEngineerSkills');
  const mktStart = src.indexOf('export const akMarketingSkills');
  const previewStart = src.indexOf('export const akEngineerBetaPreview');
  const mktPreview = src.indexOf('export const akMarketingBetaPreview');
  const engCount = src.indexOf('export const akEngineerSkillCount');
  if (engStart < 0 || mktStart < 0 || previewStart < 0 || mktPreview < 0) {
    throw new Error('cheatsheet missing engineer/marketing/preview exports');
  }
  return {
    engineer: src.slice(engStart, mktStart),
    marketing: src.slice(mktStart, previewStart),
    engineerPreview: src.slice(previewStart, mktPreview),
    marketingPreview: src.slice(mktPreview, engCount < 0 ? src.length : engCount),
  };
}

function idsIn(text) {
  return [...text.matchAll(/\n\s*id:\s*"(ak-[^"]+)"/g)].map((m) => m[1]);
}

function betaFlagIds(text) {
  const ids = [];
  const re = /\n  \{\n    id: "(ak-[^"]+)"([\s\S]*?)\n  \},/g;
  let m;
  while ((m = re.exec(text))) {
    if (/\n\s*isBeta:\s*true/.test(m[2])) ids.push(m[1]);
  }
  return ids;
}

function sameSet(a, b) {
  if (a.length !== b.length) return false;
  const sb = new Set(b);
  return a.every((x) => sb.has(x));
}

function loadLock() {
  if (!existsSync(LOCK_PATH)) return null;
  return JSON.parse(readFileSync(LOCK_PATH, 'utf8'));
}

function impactLabel(rec, channel) {
  const surfaces = rec?.surfaces?.[channel] || [];
  return surfaces.length ? surfaces.join(',') : 'none';
}

function fingerprintDrift(prev, next) {
  const lines = [];
  if (!prev?.fingerprints) return ['missing fingerprints (run --write-lock)'];
  const oldKeys = Object.keys(prev.fingerprints).sort();
  const newKeys = Object.keys(next.fingerprints).sort();
  const oldSet = new Set(oldKeys);
  const newSet = new Set(newKeys);
  for (const key of newKeys) {
    if (!oldSet.has(key)) {
      const rec = next.fingerprints[key];
      lines.push(
        `added ${key} impact stable=[${impactLabel(rec, 'stable')}] beta=[${impactLabel(rec, 'beta')}]`,
      );
    }
  }
  for (const key of oldKeys) {
    if (!newSet.has(key)) {
      const rec = prev.fingerprints[key];
      lines.push(
        `removed ${key} impact stable=[${impactLabel(rec, 'stable')}] beta=[${impactLabel(rec, 'beta')}]`,
      );
    }
  }
  for (const key of newKeys) {
    if (!oldSet.has(key)) continue;
    const before = prev.fingerprints[key];
    const after = next.fingerprints[key];
    for (const channel of CHANNELS) {
      const b = before[channel] || {};
      const a = after[channel] || {};
      const impact = impactLabel(after, channel);
      if (after.surfaces[channel].length && b.tree && !a.tree) {
        lines.push(`missing-package ${key} ${channel} path=${after.gitPath?.[channel] || after.gitPath} impact=[${impact}]`);
      }
      if ((b.skillMd || null) !== (a.skillMd || null)) {
        lines.push(`contract-updated ${key} ${channel} impact=[${impact}]`);
      }
      if ((b.tree || null) !== (a.tree || null)) {
        lines.push(`package-updated ${key} ${channel} impact=[${impact}]`);
      }
    }
  }
  return lines;
}

function lockDrift(prev, next) {
  const lines = [];
  if (!prev) return ['missing lock'];
  if (prev.stableRef !== next.stableRef || prev.betaRef !== next.betaRef) {
    lines.push(`refs ${prev.stableRef}/${prev.betaRef} -> ${next.stableRef}/${next.betaRef}`);
  }
  for (const surface of SURFACES) {
    const a = prev.surfaces?.[surface] || {};
    const b = next.surfaces[surface];
    if (!sameSet(a.betaOnly || [], b.betaOnly)) {
      lines.push(
        `${surface} beta-only lock=[${(a.betaOnly || []).join(', ') || 'none'}] ` +
          `now=[${b.betaOnly.join(', ') || 'none'}]`,
      );
    }
    if (!sameSet(a.stableOnly || [], b.stableOnly)) {
      lines.push(
        `${surface} stable-only lock=[${(a.stableOnly || []).join(', ') || 'none'}] ` +
          `now=[${b.stableOnly.join(', ') || 'none'}]`,
      );
    }
  }
  lines.push(...fingerprintDrift(prev, next));
  return lines;
}

function cheatsheetDrift(snapshot) {
  const src = readFileSync(CHEATSHEET, 'utf8');
  const slices = sliceCheatsheet(src);
  const lines = [];
  for (const surface of SURFACES) {
    const s = snapshot.surfaces[surface];
    const kit = uniqueSorted([...s.stable, ...s.beta]);
    const catalog = uniqueSorted(idsIn(slices[surface]));
    const flagged = betaFlagIds(slices[surface]);
    const preview = uniqueSorted(idsIn(slices[`${surface}Preview`]));
    const catalogSet = new Set(catalog);
    const kitSet = new Set(kit);
    const onlyKit = kit.filter((id) => !catalogSet.has(id));
    const onlyCatalog = catalog.filter((id) => !kitSet.has(id));
    const wantBeta = s.betaOnly;
    if (onlyKit.length) {
      lines.push(`${surface} onlyKit (in ak-cli, not cheatsheet): ${onlyKit.join(', ')}`);
    }
    if (onlyCatalog.length) {
      lines.push(`${surface} onlyCatalog (in cheatsheet, not ak-cli): ${onlyCatalog.join(', ')}`);
    }
    if (!sameSet(preview, wantBeta)) {
      lines.push(
        `${surface} Beta Preview [${preview.join(', ') || 'none'}] != kit beta-only [${wantBeta.join(', ') || 'none'}]`,
      );
    }
    if (!sameSet(flagged, wantBeta)) {
      lines.push(
        `${surface} isBeta [${flagged.join(', ') || 'none'}] != kit beta-only [${wantBeta.join(', ') || 'none'}]`,
      );
    }
  }
  return lines;
}

function printSummary(snapshot) {
  process.stdout.write(
    `kit ${snapshot.stableRef}@${snapshot.stableCommit.slice(0, 7)} ` +
      `${snapshot.betaRef}@${snapshot.betaCommit.slice(0, 7)} (local refs, no fetch)\n`,
  );
  for (const surface of SURFACES) {
    const s = snapshot.surfaces[surface];
    process.stdout.write(
      `${surface} ${s.merge} stable=${s.stable.length} beta=${s.beta.length} ` +
        `beta-only=${s.betaOnly.join(', ') || 'none'} ` +
        `stable-only=${s.stableOnly.join(', ') || 'none'}\n`,
    );
  }
  const fps = Object.values(snapshot.fingerprints || {});
  let missing = 0;
  for (const rec of fps) {
    for (const channel of CHANNELS) {
      if (rec.surfaces[channel].length && !rec[channel].tree) missing += 1;
    }
  }
  process.stdout.write(`fingerprints ${fps.length} missing-package ${missing}\n`);
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (!opts.kitRoot) {
    process.stderr.write('check-ak-kit-skill-inventory: --kit-root or AK_CLI is required\n');
    process.exit(2);
  }
  const kitRoot = resolve(opts.kitRoot);
  if (!existsSync(join(kitRoot, 'kits')) || !existsSync(join(kitRoot, '.git'))) {
    process.stderr.write(`check-ak-kit-skill-inventory: ${kitRoot} is not an ak-cli git checkout\n`);
    process.exit(2);
  }

  let snapshot;
  try {
    snapshot = buildSnapshot(opts, kitRoot);
  } catch (err) {
    process.stderr.write(`check-ak-kit-skill-inventory: ${err.message}\n`);
    process.exit(2);
  }

  printSummary(snapshot);

  if (opts.writeLock) {
    mkdirSync(LOCK_DIR, { recursive: true });
    writeFileSync(LOCK_PATH, `${JSON.stringify(snapshot, null, 2)}\n`);
    process.stdout.write(`wrote ${LOCK_PATH}\n`);
  }

  const sheet = cheatsheetDrift(snapshot);
  const lock = opts.writeLock ? [] : lockDrift(loadLock(), snapshot);
  const problems = [...lock, ...sheet];
  if (problems.length) {
    process.stderr.write(`Drift (${problems.length})\n`);
    for (const line of problems) process.stderr.write(`  ${line}\n`);
    process.stderr.write(
      'git fetch on ak-cli if refs may be stale. Dual-list catalog/isBeta from kit.yaml, then --write-lock.\n',
    );
    process.exit(1);
  }
  process.stdout.write('clean\n');
}

main();

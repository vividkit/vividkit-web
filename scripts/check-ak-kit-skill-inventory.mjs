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
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const LOCK_DIR = join(ROOT, 'reference/ak-docs-skills-meta');
const LOCK_PATH = join(LOCK_DIR, 'kit-tree-inventory.json');
const CHEATSHEET = join(ROOT, 'src/data/guides/agentkit-skills-cheatsheet.ts');
const SURFACES = ['engineer', 'marketing'];
const CHANNELS = ['stable', 'beta'];

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

function git(repo, args, input) {
  return execFileSync('git', ['-C', repo, ...args], {
    encoding: 'utf8',
    input,
    stdio: ['pipe', 'pipe', 'pipe'],
  }).trim();
}

function resolveRef(repo, ref) {
  try {
    return git(repo, ['rev-parse', '--verify', `${ref}^{commit}`]);
  } catch {
    return null;
  }
}

function showFile(repo, ref, path) {
  try {
    return git(repo, ['show', `${ref}:${path}`]);
  } catch {
    return '';
  }
}

function parseKitSkillSections(text) {
  const result = { exports: [], appends: [], overrides: [] };
  let section = null;
  let inSkills = false;
  let skillsIndent = 0;
  for (const raw of text.split('\n')) {
    const trimmed = raw.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const indent = raw.length - raw.trimStart().length;
    if (inSkills && indent <= skillsIndent) inSkills = false;
    const sectionMatch = /^(exports|appends|overrides):\s*$/.exec(trimmed);
    if (sectionMatch && indent === 0) {
      section = sectionMatch[1];
      inSkills = false;
      continue;
    }
    if (section != null && indent === 0) {
      section = null;
      inSkills = false;
    }
    if (section && /^skills:\s*$/.test(trimmed)) {
      inSkills = true;
      skillsIndent = indent;
      continue;
    }
    if (!inSkills || !section) continue;
    const nameM = trimmed.match(/^- name:\s+(\S+)/);
    if (nameM) {
      result[section].push({ name: nameM[1], path: '' });
      continue;
    }
    const pathM = trimmed.match(/^path:\s+(\S+)/);
    if (pathM && result[section].length) {
      const last = result[section][result[section].length - 1];
      if (!last.path) last.path = pathM[1].replace(/\/+$/, '');
    }
  }
  return result;
}

function uniqueSorted(ids) {
  return [...new Set(ids)].sort();
}

function namesOf(entries) {
  return uniqueSorted(entries.map((e) => e.name));
}

function effectiveEntries(coreSections, kitSections, kitName) {
  if (kitSections.overrides.length) {
    return kitSections.overrides.map((e) => ({ ...e, sourceKit: kitName }));
  }
  return [
    ...coreSections.exports.map((e) => ({ ...e, sourceKit: 'core' })),
    ...kitSections.appends.map((e) => ({ ...e, sourceKit: kitName })),
  ];
}

function effectiveSkills(coreSections, kitSections, kitName) {
  return namesOf(effectiveEntries(coreSections, kitSections, kitName));
}

function diff(stable, beta) {
  const s = new Set(stable);
  return {
    betaOnly: beta.filter((id) => !s.has(id)),
    stableOnly: stable.filter((id) => !new Set(beta).has(id)),
  };
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

function loadKitYaml(repo, ref, kit) {
  return parseKitSkillSections(showFile(repo, ref, `kits/${kit}/kit.yaml`));
}

function dirName(entry) {
  return (entry.path || `skills/${entry.name}`).replace(/\/+$/, '').split('/').pop();
}

function skillDirSet(repo, ref, kit) {
  try {
    const out = git(repo, ['ls-tree', '-d', '--name-only', `${ref}:kits/${kit}/skills`]);
    return new Set(
      out
        .split('\n')
        .map((line) => line.trim().split('/').pop())
        .filter(Boolean),
    );
  } catch {
    return new Set();
  }
}

function resolveEntry(trees, entry) {
  const dir = dirName(entry);
  if (trees[entry.sourceKit]?.has(dir)) {
    return { sourceKit: entry.sourceKit, gitPath: `kits/${entry.sourceKit}/skills/${dir}` };
  }
  if (trees.core?.has(dir)) {
    return { sourceKit: 'core', gitPath: `kits/core/skills/${dir}` };
  }
  if (dir !== entry.name && trees.core?.has(entry.name)) {
    return { sourceKit: 'core', gitPath: `kits/core/skills/${entry.name}` };
  }
  return null;
}

function sourceKey(sourceKit, id) {
  return `${sourceKit}/${id}`;
}

function batchOids(repo, specs) {
  const map = new Map();
  if (!specs.length) return map;
  const out = git(repo, ['cat-file', '--batch-check'], `${specs.join('\n')}\n`);
  const lines = out ? out.split('\n') : [];
  for (let i = 0; i < specs.length; i++) {
    const line = lines[i] || '';
    if (!line || line.endsWith(' missing')) map.set(specs[i], null);
    else map.set(specs[i], line.split(' ')[0]);
  }
  return map;
}

function collectSources(repo, refs, parsed) {
  const trees = {};
  for (const channel of CHANNELS) {
    trees[channel] = {
      core: skillDirSet(repo, refs[channel], 'core'),
      engineer: skillDirSet(repo, refs[channel], 'engineer'),
      marketing: skillDirSet(repo, refs[channel], 'marketing'),
    };
  }
  const byKey = new Map();
  const unresolved = [];
  for (const channel of CHANNELS) {
    for (const surface of SURFACES) {
      const entries = effectiveEntries(parsed[channel].core, parsed[channel][surface], surface);
      for (const entry of entries) {
        const resolved = resolveEntry(trees[channel], entry);
        if (!resolved) {
          unresolved.push(
            `${channel} ${surface} ${entry.name} declared=kits/${entry.sourceKit}/skills/${dirName(entry)}`,
          );
          continue;
        }
        const key = sourceKey(resolved.sourceKit, entry.name);
        if (!byKey.has(key)) {
          byKey.set(key, {
            id: entry.name,
            sourceKit: resolved.sourceKit,
            gitPath: { stable: null, beta: null },
            surfaces: { stable: [], beta: [] },
          });
        }
        const rec = byKey.get(key);
        rec.gitPath[channel] = resolved.gitPath;
        if (!rec.surfaces[channel].includes(surface)) rec.surfaces[channel].push(surface);
      }
    }
  }
  for (const rec of byKey.values()) {
    rec.surfaces.stable.sort();
    rec.surfaces.beta.sort();
  }
  return {
    sources: [...byKey.entries()].sort(([a], [b]) => a.localeCompare(b)),
    unresolved: unresolved.sort(),
  };
}

function buildFingerprints(repo, refs, sources) {
  const specs = [];
  for (const [, rec] of sources) {
    for (const channel of CHANNELS) {
      const path = rec.gitPath[channel];
      if (!path) continue;
      specs.push(`${refs[channel]}:${path}`);
      specs.push(`${refs[channel]}:${path}/SKILL.md`);
    }
  }
  const oids = batchOids(repo, specs);
  const fingerprints = {};
  for (const [key, rec] of sources) {
    const fp = {
      id: rec.id,
      sourceKit: rec.sourceKit,
      gitPath: rec.gitPath,
      surfaces: rec.surfaces,
      stable: { tree: null, skillMd: null },
      beta: { tree: null, skillMd: null },
    };
    for (const channel of CHANNELS) {
      const path = rec.gitPath[channel];
      if (!path) continue;
      fp[channel] = {
        tree: oids.get(`${refs[channel]}:${path}`) || null,
        skillMd: oids.get(`${refs[channel]}:${path}/SKILL.md`) || null,
      };
    }
    fingerprints[key] = fp;
  }
  return fingerprints;
}

function buildSnapshot(opts, kitRoot) {
  const stableSha = resolveRef(kitRoot, opts.stableRef);
  const betaSha = resolveRef(kitRoot, opts.betaRef);
  if (!stableSha) throw new Error(`missing git ref ${opts.stableRef}`);
  if (!betaSha) throw new Error(`missing git ref ${opts.betaRef}`);

  const refs = { stable: opts.stableRef, beta: opts.betaRef };
  const parsed = {};
  for (const channel of CHANNELS) {
    parsed[channel] = {
      core: loadKitYaml(kitRoot, refs[channel], 'core'),
      engineer: loadKitYaml(kitRoot, refs[channel], 'engineer'),
      marketing: loadKitYaml(kitRoot, refs[channel], 'marketing'),
    };
  }

  const kits = {};
  for (const kit of ['core', 'engineer', 'marketing']) {
    kits[kit] = {
      stableExports: namesOf(parsed.stable[kit].exports),
      stableAppends: namesOf(parsed.stable[kit].appends),
      stableOverrides: namesOf(parsed.stable[kit].overrides),
      betaExports: namesOf(parsed.beta[kit].exports),
      betaAppends: namesOf(parsed.beta[kit].appends),
      betaOverrides: namesOf(parsed.beta[kit].overrides),
    };
  }

  const surfaces = {};
  for (const surface of SURFACES) {
    const stable = effectiveSkills(parsed.stable.core, parsed.stable[surface], surface);
    const beta = effectiveSkills(parsed.beta.core, parsed.beta[surface], surface);
    const merge =
      parsed.beta[surface].overrides.length || parsed.stable[surface].overrides.length
        ? 'overrides.skills (replaces core)'
        : 'core.exports.skills ∪ appends.skills';
    surfaces[surface] = { merge, stable, beta, ...diff(stable, beta) };
  }

  const { sources, unresolved } = collectSources(kitRoot, refs, parsed);
  if (unresolved.length) {
    throw new Error(`unresolved skill trees (no declared-kit or core dir):\n${unresolved.join('\n')}`);
  }
  const fingerprints = buildFingerprints(kitRoot, refs, sources);
  for (const [key, rec] of Object.entries(fingerprints)) {
    for (const channel of CHANNELS) {
      if (rec.surfaces[channel].length && !rec[channel].tree) {
        throw new Error(`missing tree after resolve: ${key} ${channel} ${rec.gitPath[channel]}`);
      }
    }
  }

  return {
    schemaVersion: 2,
    authority: 'ak-cli kit.yaml (local git refs; no fetch)',
    kitRootHint: relative(ROOT, kitRoot) || kitRoot,
    stableRef: opts.stableRef,
    betaRef: opts.betaRef,
    stableCommit: stableSha,
    betaCommit: betaSha,
    kits,
    surfaces,
    fingerprints,
  };
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

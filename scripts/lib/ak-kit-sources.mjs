/**
 * Shared ak-cli git snapshot: kit.yaml effective skills + SKILL.md paths.
 * Inventory, lock, and claims import this. Does not run a CLI.
 */
import { execFileSync } from 'node:child_process';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
export const SURFACES = ['engineer', 'marketing'];
export const CHANNELS = ['stable', 'beta'];

export function git(repo, args, input) {
  return execFileSync('git', ['-C', repo, ...args], {
    encoding: 'utf8',
    input,
    stdio: ['pipe', 'pipe', 'pipe'],
  }).trim();
}

export function resolveRef(repo, ref) {
  try {
    return git(repo, ['rev-parse', '--verify', `${ref}^{commit}`]);
  } catch {
    return null;
  }
}

export function showFile(repo, ref, path) {
  try {
    return git(repo, ['show', `${ref}:${path}`]);
  } catch {
    return '';
  }
}

export function showFileRaw(repo, ref, path) {
  try {
    return execFileSync('git', ['-C', repo, 'show', `${ref}:${path}`], {
      stdio: ['pipe', 'pipe', 'pipe'],
    });
  } catch {
    return null;
  }
}


export function parseKitSkillSections(text) {
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

export function uniqueSorted(ids) {
  return [...new Set(ids)].sort();
}

export function namesOf(entries) {
  return uniqueSorted(entries.map((e) => e.name));
}

export function effectiveEntries(coreSections, kitSections, kitName) {
  if (kitSections.overrides.length) {
    return kitSections.overrides.map((e) => ({ ...e, sourceKit: kitName }));
  }
  return [
    ...coreSections.exports.map((e) => ({ ...e, sourceKit: 'core' })),
    ...kitSections.appends.map((e) => ({ ...e, sourceKit: kitName })),
  ];
}

export function effectiveSkills(coreSections, kitSections, kitName) {
  return namesOf(effectiveEntries(coreSections, kitSections, kitName));
}

export function diff(stable, beta) {
  const s = new Set(stable);
  return {
    betaOnly: beta.filter((id) => !s.has(id)),
    stableOnly: stable.filter((id) => !new Set(beta).has(id)),
  };
}

export function loadKitYaml(repo, ref, kit) {
  return parseKitSkillSections(showFile(repo, ref, `kits/${kit}/kit.yaml`));
}

export function dirName(entry) {
  return (entry.path || `skills/${entry.name}`).replace(/\/+$/, '').split('/').pop();
}

export function skillDirSet(repo, ref, kit) {
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

export function resolveEntry(trees, entry) {
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


export function sourceKey(sourceKit, id) {
  return `${sourceKit}/${id}`;
}

export function batchOids(repo, specs) {
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

export function collectSources(repo, refs, parsed) {
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

export function buildFingerprints(repo, refs, sources) {
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

export function kitVersionAt(repo, ref) {
  const raw = showFile(repo, ref, 'package.json');
  if (!raw) return '';
  try {
    return JSON.parse(raw).version || '';
  } catch {
    return '';
  }
}

export function buildSnapshot(opts, kitRoot) {
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
  for (const rec of Object.values(fingerprints)) {
    for (const channel of CHANNELS) {
      if (rec.surfaces[channel].length && !rec[channel].tree) {
        throw new Error(`missing tree after resolve: ${rec.sourceKit}/${rec.id} ${channel} ${rec.gitPath[channel]}`);
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
    stableVersion: kitVersionAt(kitRoot, opts.stableRef),
    betaVersion: kitVersionAt(kitRoot, opts.betaRef),
    kits,
    surfaces,
    fingerprints,
  };
}

export function sourceChannelOf(surface, id) {
  if (!surface) return null;
  if ((surface.betaOnly || []).includes(id)) return 'beta';
  if ((surface.stable || []).includes(id)) return 'stable';
  if ((surface.beta || []).includes(id)) return 'beta';
  return null;
}

export function fingerprintFor(snapshot, surface, id, channel) {
  if (!channel) return null;
  const fps = snapshot.fingerprints || {};
  for (const rec of Object.values(fps)) {
    if (rec.id !== id) continue;
    if ((rec.surfaces[channel] || []).includes(surface)) return rec;
  }
  return null;
}


export function resolvePageSkill(snapshot, surface, id) {
  const channel = sourceChannelOf(snapshot.surfaces[surface], id);
  const rec = fingerprintFor(snapshot, surface, id, channel);
  const stableRec = fingerprintFor(snapshot, surface, id, 'stable');
  const betaRec = fingerprintFor(snapshot, surface, id, 'beta');
  const ref = channel === 'beta' ? snapshot.betaRef : channel === 'stable' ? snapshot.stableRef : null;
  const commit = channel === 'beta' ? snapshot.betaCommit : channel === 'stable' ? snapshot.stableCommit : null;
  const gitPath = channel && rec?.gitPath?.[channel] ? rec.gitPath[channel] : null;
  return {
    channel,
    rec,
    stableRec,
    betaRec,
    ref,
    commit,
    gitPath,
    skillPath: gitPath ? `${gitPath}/SKILL.md` : null,
  };
}


export function selfTestSourceChannel() {
  const fail = [];
  const surface = {
    stable: ['ak-vibe', 'ak-security', 'ak-security-scan'],
    beta: ['ak-vibe', 'ak-security', 'ak-webmcp'],
    betaOnly: ['ak-webmcp'],
    stableOnly: ['ak-security-scan'],
  };
  if (sourceChannelOf(surface, 'ak-webmcp') !== 'beta') fail.push('beta-only → beta');
  if (sourceChannelOf(surface, 'ak-security-scan') !== 'stable') fail.push('stable-only → stable');
  if (sourceChannelOf(surface, 'ak-vibe') !== 'stable') fail.push('shared → stable');
  if (sourceChannelOf(surface, 'ak-missing') !== null) fail.push('unknown → null');
  return fail;
}

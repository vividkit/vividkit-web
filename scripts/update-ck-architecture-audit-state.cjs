#!/usr/bin/env node
/**
 * Update docs/ck-architecture/.audit-state.json after a How-CK-Works sync.
 *
 * This is intentionally narrow: it records upstream/reference source hashes
 * and generated architecture doc hashes for selected scenario ids. It does not
 * replace the upstream skill audit state under reference/.
 */

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const ROOT = path.resolve(__dirname, '..');
const STATE_FILE = path.join(ROOT, 'docs/ck-architecture/.audit-state.json');
const GUIDE_FILE = 'src/data/guides/how-ck-works/workflow-visualizer-scenarios.ts';
const REFERENCE_SKILL_ROOTS = [
  'reference/stable/claude/skills',
  'reference/marketing-stable/claude/skills',
  'reference/beta/claude/skills',
  'reference/marketing-beta/claude/skills',
].map(root => path.join(ROOT, root));
const CLI_INIT_SOURCE_FILES = [
  'reference/claudekit-cli/src/cli/command-registry.ts',
  'reference/claudekit-cli/src/domains/help/commands/init-command-help.ts',
  'reference/claudekit-cli/src/commands/init.ts',
  'reference/claudekit-cli/src/commands/init/init-command.ts',
].map(file => path.join(ROOT, file));

const argv = process.argv.slice(2);
const targets = [];
let status = 'pass';
let note = 'How-CK-Works custom command updated this scenario.';
let date = new Date().toISOString().slice(0, 10);

for (let i = 0; i < argv.length; i += 1) {
  const arg = argv[i];
  if (arg === '--target' && argv[i + 1]) {
    targets.push(argv[i + 1]);
    i += 1;
  } else if (arg.startsWith('--target=')) {
    targets.push(arg.slice('--target='.length));
  } else if (arg === '--status' && argv[i + 1]) {
    status = argv[i + 1];
    i += 1;
  } else if (arg.startsWith('--status=')) {
    status = arg.slice('--status='.length);
  } else if (arg === '--note' && argv[i + 1]) {
    note = argv[i + 1];
    i += 1;
  } else if (arg.startsWith('--note=')) {
    note = arg.slice('--note='.length);
  } else if (arg === '--date' && argv[i + 1]) {
    date = argv[i + 1];
    i += 1;
  } else if (arg.startsWith('--date=')) {
    date = arg.slice('--date='.length);
  }
}

if (targets.length === 0) {
  console.error('Usage: node scripts/update-ck-architecture-audit-state.cjs --target <id> [--target <id>...] [--status pass|warn|fail] [--date YYYY-MM-DD] [--note "..."]');
  process.exit(1);
}

const normalizeTarget = (value) => String(value || '')
  .trim()
  .replace(/^\/+/, '')
  .replace(/^(ck|ckm):/, '')
  .replace(/:\*$/, '')
  .replace(/:.+$/, '');

const hashFile = (filePath) => {
  const buffer = fs.readFileSync(filePath);
  return `sha256:${crypto.createHash('sha256').update(buffer).digest('hex')}`;
};

const relative = (filePath) => path.relative(ROOT, filePath).replaceAll(path.sep, '/');

const readJson = (filePath) => {
  if (!fs.existsSync(filePath)) return {};
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const walkFiles = (dir) => {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(entryPath));
    } else if (entry.isFile()) {
      files.push(entryPath);
    }
  }
  return files.sort();
};

const readSkillName = (skillPath) => {
  const source = fs.readFileSync(skillPath, 'utf8');
  return source.match(/^name:\s*([^\n]+)/m)?.[1]?.replace(/["']/g, '').trim() || null;
};

const buildSkillIndex = (roots) => {
  const index = new Map();
  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    for (const skillPath of walkFiles(root).filter(filePath => path.basename(filePath) === 'SKILL.md')) {
      const name = readSkillName(skillPath);
      if (!name || index.has(name)) continue;
      index.set(name, skillPath);
    }
  }
  return index;
};

const referenceSourceIndex = buildSkillIndex(REFERENCE_SKILL_ROOTS);

const candidateSkillNames = (id) => {
  const normalized = normalizeTarget(id);
  return [
    `ck:${normalized}`,
    `ckm:${normalized}`,
    `ck:${normalized.replace(/^ck-/, '')}`,
    `ckm:${normalized.replace(/^ckm-/, '')}`,
  ];
};

const findSourceSkill = (id, index) => {
  const normalized = normalizeTarget(id);
  for (const candidate of candidateSkillNames(id)) {
    if (index.has(candidate)) return index.get(candidate);
  }

  for (const [name, skillPath] of index.entries()) {
    if (normalizeTarget(name) === normalized) return skillPath;
  }

  return null;
};

const resolveExistingFile = (baseDir, maybeRelative) => {
  const cleaned = String(maybeRelative || '').trim();
  if (!cleaned || cleaned.includes('*')) return null;
  const resolved = path.resolve(baseDir, cleaned);
  return fs.existsSync(resolved) && fs.statSync(resolved).isFile() ? resolved : null;
};

const collectSkillSourceFiles = (skillPath) => {
  const skillDir = path.dirname(skillPath);
  const files = new Set([skillPath]);

  const readmePath = path.join(skillDir, 'README.md');
  if (fs.existsSync(readmePath)) files.add(readmePath);

  const referencesDir = path.join(skillDir, 'references');
  for (const filePath of walkFiles(referencesDir)) {
    if (filePath.endsWith('.md')) files.add(filePath);
  }

  const skillSource = fs.readFileSync(skillPath, 'utf8');
  const referencePatterns = [
    /(?:\.\.\/)?(?:_shared\/)?references\/[A-Za-z0-9_.\/-]+\.md/g,
    /`([^`]+\.md)`/g,
  ];
  for (const pattern of referencePatterns) {
    for (const match of skillSource.matchAll(pattern)) {
      const reference = match[1] || match[0];
      const filePath = resolveExistingFile(skillDir, reference);
      if (filePath) files.add(filePath);
    }
  }

  return [...files].sort();
};

const hashFiles = (filePaths, labeler) => Object.fromEntries(
  filePaths
    .filter(filePath => fs.existsSync(filePath) && fs.statSync(filePath).isFile())
    .map(filePath => [labeler(filePath), hashFile(filePath)])
);

const collectReferenceSourceHashes = (id) => {
  const normalized = normalizeTarget(id);
  if (normalized === 'shared-hooks-agents') {
    const sourceFiles = [
      path.join(ROOT, 'reference/stable/claude/settings.json'),
      path.join(ROOT, 'docs/ck-architecture/shared-concepts.md'),
    ];
    return hashFiles(sourceFiles, relative);
  }

  if (normalized === 'ck-init') {
    return hashFiles(CLI_INIT_SOURCE_FILES, relative);
  }

  const referenceSkill = findSourceSkill(id, referenceSourceIndex);
  if (!referenceSkill) return {};
  return hashFiles(collectSkillSourceFiles(referenceSkill), relative);
};

const findArchitectureDoc = (id) => {
  const normalized = normalizeTarget(id);
  const candidates = [
    ...(normalized === 'shared-hooks-agents'
      ? [path.join(ROOT, 'docs/ck-architecture/shared-concepts.md')]
      : []),
    path.join(ROOT, `docs/ck-architecture/${normalized}.md`),
    path.join(ROOT, `docs/ck-architecture/ck-${normalized}.md`),
    path.join(ROOT, `docs/ck-architecture/ckm-${normalized}.md`),
  ];
  return candidates.find(filePath => fs.existsSync(filePath)) || null;
};

const state = readJson(STATE_FILE);
state.lastAuditDate = date;
state.guide = state.guide || GUIDE_FILE;
state.notes = Array.isArray(state.notes) ? state.notes : [];
if (note && !state.notes.includes(note)) state.notes.push(note);
state.auditedScenarios = state.auditedScenarios || {};

const updated = [];
const missing = [];

for (const rawTarget of targets) {
  const id = normalizeTarget(rawTarget);
  const architectureDoc = findArchitectureDoc(id);

  if (!architectureDoc) {
    missing.push({ id, reason: 'missing architecture doc' });
    continue;
  }

  const previousEntry = state.auditedScenarios[id] || {};
  const collectedReferenceSourceHashes = collectReferenceSourceHashes(id);
  const referenceSourceHashes = Object.keys(collectedReferenceSourceHashes).length > 0
    ? collectedReferenceSourceHashes
    : previousEntry.referenceSourceHashes || {};
  const previousGuideHashes = previousEntry.guideHashes || {};

  state.auditedScenarios[id] = {
    date,
    status,
    source: Object.keys(referenceSourceHashes).length > 0 ? 'reference' : 'architecture-doc-only',
    referenceSourceHashes,
    guideHashes: {
      ...previousGuideHashes,
      [relative(architectureDoc)]: hashFile(architectureDoc),
    },
  };
  if (previousEntry.status && previousEntry.status !== status) {
    state.auditedScenarios[id].previousStatus = previousEntry.status;
  }
  if (previousEntry.date && previousEntry.date !== date) {
    state.auditedScenarios[id].previousAuditDate = previousEntry.date;
  }
  updated.push(id);
}

const scenarioStatuses = Object.values(state.auditedScenarios)
  .map(entry => entry?.status)
  .filter(Boolean);
state.status = scenarioStatuses.includes('fail')
  ? 'fail'
  : scenarioStatuses.includes('warn')
    ? 'warn'
    : status;
state.lastHowCkWorksSync = {
  date,
  status,
  targets: updated,
  note,
};

fs.writeFileSync(STATE_FILE, `${JSON.stringify(state, null, 2)}\n`);

console.log(JSON.stringify({ updated, missing, stateFile: relative(STATE_FILE) }, null, 2));
if (missing.length > 0) process.exitCode = 2;

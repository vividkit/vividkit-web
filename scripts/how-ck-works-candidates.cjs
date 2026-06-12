#!/usr/bin/env node
/**
 * Rank How-CK-Works scenarios for full guide upgrades.
 *
 * Read-only helper for `.Codex/commands/vk/update-how-ck-works.md`.
 * It prioritizes skills with large command surfaces: flags, modes,
 * subcommands, prompt examples, complex process flows, and generic quick refs.
 */

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const DATA_FILES = [
  'src/data/guides/how-ck-works/skill-infographics.ts',
  'src/data/guides/how-ck-works/skill-infographics-additional.ts',
];
const SCENARIOS_FILE = 'src/data/guides/how-ck-works/workflow-visualizer-scenarios.ts';
const WIRING_FILE = 'src/components/guides/how-ck-works/workflow-skill-infographic.astro';
const SELECTOR_FILE = 'src/components/guides/how-ck-works/workflow-scenario-selector.astro';
const LOCAL_SKILL_ROOT = path.join(process.env.HOME || '', '.agents/skills');

const argv = process.argv.slice(2);
const args = new Set(argv);
const getArgValue = (name, fallback) => {
  const prefixed = argv.find(arg => arg.startsWith(`${name}=`));
  if (prefixed) return prefixed.slice(name.length + 1);
  const index = argv.indexOf(name);
  return index >= 0 && argv[index + 1] ? argv[index + 1] : fallback;
};

const limitRaw = getArgValue('--limit', '12');
const limit = Number.parseInt(limitRaw, 10);
const json = args.has('--json');
const all = args.has('--all');
const genericOnly = args.has('--generic-only');
const bespokeOnly = args.has('--bespoke-only');
const missingPromptsOnly = args.has('--missing-prompts-only');
const includeLocalMissing = args.has('--include-local-missing');
const target = getArgValue('--target', '');

const read = (relativePath) => fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
const entryRegex = /^  \{\n    id: '([^']+)'[\s\S]*?\n  \},/gm;

const extractArrayProperty = (block, propName) => {
  const propIndex = block.indexOf(`${propName}:`);
  if (propIndex === -1) return '';
  const openIndex = block.indexOf('[', propIndex);
  if (openIndex === -1) return '';

  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let i = openIndex; i < block.length; i += 1) {
    const char = block[i];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      continue;
    }
    if (char === '[') depth += 1;
    if (char === ']') {
      depth -= 1;
      if (depth === 0) return block.slice(openIndex, i + 1);
    }
  }

  return '';
};

const uniqueMatches = (value, regex) => [...new Set([...value.matchAll(regex)].map(match => match[1] || match[0]))];
const countObjects = (arrayText) => (arrayText.match(/\{\s*(?:\n|\w)/g) || []).length;
const countPromptRows = (arrayText) => (arrayText.match(/\n\s{4}\[/g) || []).length;
const extractModeFlags = (value) => uniqueMatches(value, /flag:\s*'(--[a-z][a-z0-9-]*)'/gi).sort();
const normalizeTarget = (value) => String(value || '')
  .trim()
  .replace(/^\/+/, '')
  .replace(/^(ck|ckm):/, '')
  .replace(/:\*$/, '')
  .replace(/:.+$/, '');

const getPromptRegistryKey = (block) => block.match(/promptExamples:\s*promptExamplesById\.([A-Za-z0-9_]+)/)?.[1] || '';

const getPromptRegistryCount = (source, key) => {
  if (!key) return 0;
  const propIndex = source.indexOf(`${key}: prompts(`);
  if (propIndex === -1) return 0;
  const openIndex = source.indexOf('[', propIndex);
  if (openIndex === -1) return 0;

  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let i = openIndex; i < source.length; i += 1) {
    const char = source[i];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      continue;
    }
    if (char === '[') depth += 1;
    if (char === ']') {
      depth -= 1;
      if (depth === 0) return countPromptRows(source.slice(openIndex, i + 1));
    }
  }

  return 0;
};

const wiring = fs.existsSync(path.join(ROOT, WIRING_FILE)) ? read(WIRING_FILE) : '';
const selector = fs.existsSync(path.join(ROOT, SELECTOR_FILE)) ? read(SELECTOR_FILE) : '';
const scenariosSource = fs.existsSync(path.join(ROOT, SCENARIOS_FILE)) ? read(SCENARIOS_FILE) : '';
const scenarioIds = new Set(uniqueMatches(scenariosSource, /\n\s*id:\s*'([^']+)'/g));
const bespokeIds = new Set(uniqueMatches(wiring, /scenarioId === '([^']+)'/g));
if (/scenarioId === 'cook' \|\| scenarioId === 'fix'/.test(wiring)) {
  bespokeIds.add('cook');
  bespokeIds.add('fix');
}
const visibleGuideIds = new Set(uniqueMatches(selector, /^\s*'([^']+)',/gm));

const rows = [];

for (const relativePath of DATA_FILES) {
  const fullPath = path.join(ROOT, relativePath);
  if (!fs.existsSync(fullPath)) continue;

  const source = read(relativePath);
  for (const match of source.matchAll(entryRegex)) {
    const [block, id] = match;
    const command = block.match(/command:\s*'([^']+)'/)?.[1] || id;
    const kit = block.match(/kit:\s*'([^']+)'/)?.[1] || 'unknown';
    const hardGate = /hardGate:\s*\{/.test(block);
    const processFlowText = extractArrayProperty(block, 'processFlow');
    const workflowModesText = extractArrayProperty(block, 'workflowModes');
    const promptRegistryKey = getPromptRegistryKey(block);
    const promptExamplesText = extractArrayProperty(block, 'promptExamples');
    const specialOperationsText = extractArrayProperty(block, 'specialOperations');
    const processSteps = countObjects(processFlowText);
    const workflowModes = countObjects(workflowModesText);
    const promptExamples = countObjects(promptExamplesText) || getPromptRegistryCount(source, promptRegistryKey);
    const specialOperations = countObjects(specialOperationsText);
    const flags = extractModeFlags(workflowModesText);
    const subcommands = uniqueMatches(block, /\/(?:ck|ckm):[a-z0-9-]+:([a-z][a-z0-9-]*)/gi).sort();
    const wildcardSubcommands = command.includes(':*');
    const quickRef = bespokeIds.has(id) ? 'bespoke' : 'generic';
    const visibleInGuide = visibleGuideIds.has(id);
    const missingPromptCoverage = quickRef === 'generic' &&
      (workflowModes + flags.length + subcommands.length + (wildcardSubcommands ? 1 : 0)) > 0 &&
      promptExamples === 0;
    const score = (
      workflowModes * 5 +
      subcommands.length * 4 +
      flags.length * 3 +
      promptExamples * 2 +
      specialOperations * 2 +
      Math.min(processSteps, 10) +
      (wildcardSubcommands ? 10 : 0) +
      (quickRef === 'generic' ? 8 : 0) +
      (missingPromptCoverage ? 6 : 0) +
      (visibleInGuide ? 0 : 12) +
      (hardGate ? 3 : 0)
    );

    rows.push({
      id,
      command,
      kit,
      score,
      quickRef,
      hardGate,
      processSteps,
      workflowModes,
      promptExamples,
      specialOperations,
      flags,
      subcommands,
      wildcardSubcommands,
      missingPromptCoverage,
      visibleInGuide,
      source: relativePath,
      reasons: [
        visibleInGuide ? null : 'not visible in guide selector',
        workflowModes ? `${workflowModes} modes` : null,
        flags.length ? `${flags.length} flags` : null,
        subcommands.length || wildcardSubcommands ? `${subcommands.length || 'wildcard'} subcommands` : null,
        promptExamples ? `${promptExamples} prompt examples` : null,
        missingPromptCoverage ? 'missing prompt coverage' : null,
        processSteps ? `${processSteps} process steps` : null,
        specialOperations ? `${specialOperations} special ops` : null,
        quickRef === 'generic' ? 'generic quick-ref' : 'bespoke quick-ref',
        hardGate ? 'has hard gate' : null,
      ].filter(Boolean),
    });
  }
}

const existingIds = new Set(rows.map(row => row.id));
if ((target || includeLocalMissing) && fs.existsSync(LOCAL_SKILL_ROOT)) {
  const wanted = normalizeTarget(target);
  for (const dir of fs.readdirSync(LOCAL_SKILL_ROOT)) {
    const skillPath = path.join(LOCAL_SKILL_ROOT, dir, 'SKILL.md');
    if (!fs.existsSync(skillPath)) continue;

    const source = fs.readFileSync(skillPath, 'utf8');
    const name = source.match(/^name:\s*([^\n]+)/m)?.[1]?.replace(/["']/g, '').trim();
    if (!name?.startsWith('ck:') && !name?.startsWith('ckm:')) continue;

    const id = name.replace(/^(ck|ckm):/, '').replace(/^(ck|ckm)-/, '');
    if (target && normalizeTarget(id) !== wanted && normalizeTarget(name) !== wanted) continue;
    if (existingIds.has(id)) continue;

    const hint = source.match(/^argument-hint:\s*([^\n]+)/m)?.[1]?.replace(/["']/g, '').trim() || '';
    const kit = name.startsWith('ckm:') ? 'marketer' : 'engineer';
    const flags = uniqueMatches(hint, /(--[a-z][a-z0-9-]*)/gi).sort();
    const subcommands = uniqueMatches(hint, /(?:^|\s)([a-z][a-z0-9-]*(?=\|))/gi).sort();
    const hasScenario = scenarioIds.has(id);
    const visibleInGuide = visibleGuideIds.has(id);
    const missingScenario = !hasScenario;
    const missingScore = (
      flags.length * 3 +
      subcommands.length * 4 +
      (hasScenario ? 30 : 60) +
      (visibleInGuide ? 0 : 12)
    );

    rows.push({
      id,
      command: `/${name}`,
      kit,
      score: missingScore,
      quickRef: hasScenario ? 'missing-infographic' : 'missing-scenario',
      hardGate: /gate|approval|approve|challenge|security boundary/i.test(source),
      processSteps: (source.match(/^###?\s+\d+\.\s+/gm) || []).length,
      workflowModes: flags.length,
      promptExamples: 0,
      specialOperations: 0,
      flags,
      subcommands,
      wildcardSubcommands: false,
      missingPromptCoverage: true,
      visibleInGuide,
      source: skillPath,
      reasons: [
        visibleInGuide ? null : 'not visible in guide selector',
        hasScenario ? 'missing infographic data' : 'missing scenario/doc',
        flags.length ? `${flags.length} flags` : null,
        subcommands.length ? `${subcommands.length} subcommands` : null,
        missingScenario ? 'local skill missing from guide' : 'new guide target',
      ].filter(Boolean),
    });
  }
}

let output = rows
  .filter(row => all || row.score > 0)
  .filter(row => {
    if (!target) return true;
    const wanted = normalizeTarget(target);
    return normalizeTarget(row.id) === wanted || normalizeTarget(row.command) === wanted;
  })
  .filter(row => !genericOnly || row.quickRef === 'generic')
  .filter(row => !bespokeOnly || row.quickRef === 'bespoke')
  .filter(row => !missingPromptsOnly || row.missingPromptCoverage)
  .sort((a, b) => b.score - a.score || a.command.localeCompare(b.command));

if (!Number.isNaN(limit) && limit > 0 && !all) {
  output = output.slice(0, limit);
}

if (json) {
  process.stdout.write(`${JSON.stringify(output, null, 2)}\n`);
  process.exit(0);
}

const pad = (value, width) => String(value).padEnd(width, ' ');
const rowsForWidths = output.map(row => ({
  id: row.id,
  command: row.command,
  score: row.score,
  quickRef: row.quickRef,
  counts: `p:${row.processSteps} m:${row.workflowModes} f:${row.flags.length} s:${row.subcommands.length}${row.wildcardSubcommands ? '+' : ''} e:${row.promptExamples}`,
  reasons: row.reasons.join(', '),
}));

const widths = {
  score: Math.max(5, ...rowsForWidths.map(row => String(row.score).length)),
  id: Math.max(2, ...rowsForWidths.map(row => row.id.length)),
  command: Math.max(7, ...rowsForWidths.map(row => row.command.length)),
  quickRef: Math.max(8, ...rowsForWidths.map(row => row.quickRef.length)),
  counts: Math.max(6, ...rowsForWidths.map(row => row.counts.length)),
};

console.log([
  pad('score', widths.score),
  pad('id', widths.id),
  pad('command', widths.command),
  pad('quickRef', widths.quickRef),
  pad('counts', widths.counts),
  'reasons',
].join('  '));
console.log([
  '-'.repeat(widths.score),
  '-'.repeat(widths.id),
  '-'.repeat(widths.command),
  '-'.repeat(widths.quickRef),
  '-'.repeat(widths.counts),
  '-------',
].join('  '));

for (const row of rowsForWidths) {
  console.log([
    pad(row.score, widths.score),
    pad(row.id, widths.id),
    pad(row.command, widths.command),
    pad(row.quickRef, widths.quickRef),
    pad(row.counts, widths.counts),
    row.reasons,
  ].join('  '));
}

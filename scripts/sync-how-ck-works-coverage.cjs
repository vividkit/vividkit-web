#!/usr/bin/env node
/**
 * Bulk-fill How-CK-Works coverage from reference/skills-registry.json.
 *
 * This intentionally generates conservative generic entries only for missing
 * skills/command roots. Existing curated scenarios and quick refs are left as-is.
 */

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');

const FILES = {
  registry: 'reference/skills-registry.json',
  scenarios: 'src/data/guides/how-ck-works/workflow-visualizer-scenarios.ts',
  infographics: 'src/data/guides/how-ck-works/skill-infographics-additional.ts',
  selector: 'src/components/guides/how-ck-works/workflow-scenario-selector.astro',
  guide: 'src/components/guides/how-ck-works/HowCkWorksGuide.astro',
  index: 'docs/ck-architecture/claudekit-architecture.md',
};

const COLORS = [
  'teal',
  'cyan',
  'sky',
  'indigo',
  'violet',
  'fuchsia',
  'rose',
  'orange',
  'lime',
  'emerald',
  'amber',
  'blue',
  'purple',
  'pink',
  'slate',
  'stone',
  'zinc',
];

const ICONS = {
  input: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
  hook: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
  scout: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  agent: '<path d="M12 2a10 10 0 0 0-7 17.12"/><path d="M12 2a10 10 0 0 1 7 17.12"/><path d="M2 12h20"/><path d="M12 2c2.5 2.8 4 6.2 4 10s-1.5 7.2-4 10"/><path d="M12 2c-2.5 2.8-4 6.2-4 10s1.5 7.2 4 10"/>',
  output: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
};

const read = (file) => fs.readFileSync(path.join(ROOT, file), 'utf8');
const write = (file, value) => fs.writeFileSync(path.join(ROOT, file), value);
const exists = (file) => fs.existsSync(path.join(ROOT, file));

const registry = JSON.parse(read(FILES.registry));
const localDeprecatedEngineerCoverage = new Set(['ck:plans-kanban', 'ck:project-organization']);

const scenarioSource = read(FILES.scenarios);
const infographicSource = read(FILES.infographics);
const selectorSource = read(FILES.selector);
const guideSource = read(FILES.guide);

const scenarioIds = new Set([...scenarioSource.matchAll(/^  \{\n    id:\s*'([^']+)'/gm)].map((m) => m[1]));
const scenarioKitById = new Map(
  [...scenarioSource.matchAll(/^  \{\n    id:\s*'([^']+)'[\s\S]*?\n    kit:\s*'([^']+)'/gm)]
    .map((m) => [m[1], m[2]])
);
const infographicIds = new Set([
  ...infographicSource.matchAll(/\n\s*id:\s*'([^']+)'/g),
  ...read('src/data/guides/how-ck-works/skill-infographics.ts').matchAll(/\n\s*id:\s*'([^']+)'/g),
].map((m) => m[1]));
const visibleIds = new Set([...selectorSource.matchAll(/^\s*'([^']+)',/gm)].map((m) => m[1]));
const quickRefIds = new Set([...guideSource.matchAll(/^\s*'([^']+)',/gm)].map((m) => m[1]));

const toTitle = (slug) => slug
  .split(/[-:]/)
  .filter(Boolean)
  .map((part) => part.length <= 3 ? part.toUpperCase() : part[0].toUpperCase() + part.slice(1))
  .join(' ');

const escapeString = (value) => String(value || '')
  .replace(/\\/g, '\\\\')
  .replace(/'/g, "\\'")
  .replace(/\r?\n/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const normalizeNameId = (name) => {
  if (name === 'excalidraw') return 'excalidraw';
  return name.replace(/^(ck|ckm):/, '').replace(/:.+$/, '');
};

const commandFromSkillName = (name) => {
  if (name === 'excalidraw') return '/excalidraw';
  return `/${name}`;
};

const commandRoot = (name) => name.replace(/^ckm:/, '').split(':')[0];

const architectureDocPath = (id, command) => {
  if (id === 'excalidraw') return 'docs/ck-architecture/excalidraw.md';
  if (command.startsWith('/ckm:') || id.startsWith('ckm-')) {
    return `docs/ck-architecture/ckm-${id.replace(/^ckm-/, '')}.md`;
  }
  return `docs/ck-architecture/ck-${id}.md`;
};

const hasArchitectureDoc = (id, command) => exists(architectureDocPath(id, command));

const walkFiles = (dir) => {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(full));
    else out.push(full);
  }
  return out.sort();
};

const parseFrontmatter = (source) => {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  const frontmatter = match ? match[1] : source.slice(0, 1000);
  const get = (key) => {
    const line = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1];
    if (!line) return '';
    return line.replace(/^["']|["']$/g, '').trim();
  };
  const description = get('description') || source.match(/^description:\s*>-\n((?:\s{2}.+\n)+)/m)?.[1]?.replace(/\n\s*/g, ' ').trim() || '';
  return {
    name: get('name'),
    description,
    argumentHint: get('argument-hint'),
    version: frontmatter.match(/^\s+version:\s*["']?([^"'\n]+)["']?/m)?.[1] || '',
  };
};

const skillSourceFiles = walkFiles(path.join(ROOT, 'reference'))
  .filter((file) => file.endsWith('/SKILL.md'))
  .filter((file) => !file.includes('/document-skills/') && !file.includes('/__fixtures__/'));

const skillByName = new Map();
for (const file of skillSourceFiles) {
  const source = fs.readFileSync(file, 'utf8');
  const name = parseFrontmatter(source).name;
  if (!name) continue;
  const relative = path.relative(ROOT, file).replaceAll(path.sep, '/');
  const rank = relative.includes('/stable/') || relative.includes('/marketing-stable/') ? 0 : 1;
  const previous = skillByName.get(name);
  if (!previous || rank < previous.rank) skillByName.set(name, { file, relative, source, rank, meta: parseFrontmatter(source) });
}

const commandSourceFiles = walkFiles(path.join(ROOT, 'reference'))
  .filter((file) => file.includes('/claude/commands/ckm/') && file.endsWith('.md'));

const commandByName = new Map();
for (const file of commandSourceFiles) {
  const relative = path.relative(ROOT, file).replaceAll(path.sep, '/');
  const after = relative.split('/claude/commands/')[1].replace(/\.md$/, '');
  const name = after.replaceAll('/', ':');
  const rank = relative.includes('/marketing-stable/') ? 0 : 1;
  const source = fs.readFileSync(file, 'utf8');
  const previous = commandByName.get(name);
  if (!previous || rank < previous.rank) commandByName.set(name, { file, relative, source, rank, meta: parseFrontmatter(source) });
}

const extractFlags = (hint = '', source = '') => [...new Set([
  ...hint.matchAll(/--[a-z][a-z0-9-]*/gi),
  ...source.matchAll(/`(--[a-z][a-z0-9-]*)`/gi),
].map((m) => m[1] || m[0]))].slice(0, 8);

const sourceSummary = (name, fallback = '') => {
  const hit = skillByName.get(name);
  if (!hit) return { description: fallback, hint: '', source: '', path: '' };
  return {
    description: hit.meta.description || fallback,
    hint: hit.meta.argumentHint || '',
    source: hit.source,
    path: hit.relative,
  };
};

const commandSummary = (name, fallback = '') => {
  const hit = commandByName.get(name);
  if (!hit) return { description: fallback, hint: '', source: '', path: '' };
  return {
    description: hit.meta.description || fallback,
    hint: hit.meta.argumentHint || '',
    source: hit.source,
    path: hit.relative,
  };
};

const hasGate = (text) => /hard gate|approval|approve|confirm|must|do not|never|security|privacy|verify|validation/i.test(text || '');
const hasSubAgent = (text) => /sub-?agent|spawn|parallel agent|Task tool|researcher|planner|reviewer|tester/i.test(text || '');

const makeSteps = ({ id, command, kit, title, description, flags, kind, commandNames }) => {
  const prefix = id.replace(/^ckm-/, 'mkt').split('-').map((p) => p[0]).join('').slice(0, 3) || 'wf';
  const names = commandNames?.length ? commandNames.slice(0, 8) : [command];
  const commandList = names.map((item) => `// - /${item.replace(/^\/+/, '')}`).join('\n');
  const flagList = flags.length ? flags.join(', ') : 'default route';
  const kitLabel = kit === 'marketer' ? 'Marketing Kit' : 'Engineer Kit';
  return [
    {
      id: `${prefix}-input`,
      type: 'user-input',
      name: command,
      descEn: `Invoke ${command} with a concrete ${kind === 'command-root' ? 'command route' : 'task brief'}`,
      descVi: `Gọi ${command} với ${kind === 'command-root' ? 'route command' : 'brief task'} cụ thể`,
      explainEn: `${command} starts the ${title} flow. The user provides the target, constraints, and expected artifact so the agent can route the work without guessing.\n\nPrimary surface: ${description}`,
      explainVi: `${command} bắt đầu flow ${title}. User đưa target, ràng buộc, và artifact mong đợi để agent route công việc không phải đoán.\n\nBề mặt chính: ${description}`,
      codeSnippet: kind === 'command-root' ? `${commandList}\n\n// Pick the route that matches the needed output` : `> ${command} "${title} for this project"\n\n// Include target, constraints, and desired artifact`,
      icon: ICONS.input,
      color: 'purple',
    },
    {
      id: `${prefix}-context`,
      type: 'hook',
      name: 'Context + Guardrails',
      descEn: 'Project rules, active plans, permissions, and safety constraints are loaded',
      descVi: 'Load project rules, plan đang active, permissions, và ràng buộc an toàn',
      explainEn: `Before the ${kitLabel} work starts, hooks and project instructions provide the operating boundary: current repo context, privacy checks, active plans, and validation expectations.\n\nThis keeps the flow tied to the real workspace instead of producing generic advice.`,
      explainVi: `Trước khi ${kitLabel} bắt đầu, hooks và instruction project cung cấp boundary: context repo hiện tại, privacy check, active plans, và kỳ vọng validation.\n\nNhờ vậy flow bám workspace thật thay vì sinh lời khuyên chung chung.`,
      codeSnippet: '// UserPromptSubmit → project context + active plan\n// PreToolUse → permission/privacy checks\n// Skill rules → route-specific guardrails',
      icon: ICONS.hook,
      color: 'blue',
    },
    {
      id: `${prefix}-audit`,
      type: 'agent',
      name: 'Audit Source + Scope',
      descEn: 'Read relevant files, docs, inputs, and route options before action',
      descVi: 'Đọc files, docs, input, và route options liên quan trước khi làm',
      explainEn: `The agent audits the request against local files and the command surface. Important flags or routes are captured before execution: ${flagList}.\n\nFor broad tasks, it narrows scope and lists the exact output expected before creating artifacts.`,
      explainVi: `Agent audit request với local files và bề mặt command. Flags hoặc routes quan trọng được chốt trước khi chạy: ${flagList}.\n\nVới task rộng, agent thu scope và liệt kê output cụ thể trước khi tạo artifact.`,
      codeSnippet: `// Audit checklist:\n// - locate relevant project files\n// - identify route/options: ${flagList}\n// - confirm output format and save path\n// - avoid unrelated edits`,
      icon: ICONS.scout,
      color: 'green',
      isSubAgent: false,
    },
    {
      id: `${prefix}-execute`,
      type: 'agent',
      name: 'Execute Workflow',
      descEn: 'Run the selected workflow path and produce the requested artifact',
      descVi: 'Chạy workflow path đã chọn và tạo artifact yêu cầu',
      explainEn: `The main agent executes the selected ${command} path. It may use specialist skills, local tools, or sub-agents when the source workflow requires research, review, testing, design, or generation.\n\nThe work stays scoped to the selected route and records assumptions when data is unavailable.`,
      explainVi: `Main agent thực thi path ${command} đã chọn. Nó có thể dùng specialist skills, local tools, hoặc sub-agent khi workflow cần research, review, test, design, hoặc generation.\n\nCông việc giữ đúng scope route đã chọn và ghi assumptions khi thiếu dữ liệu.`,
      codeSnippet: '// Execute selected route\n// Use specialist skill/tool only when needed\n// Record assumptions and unavailable data\n// Keep changes/artifacts scoped',
      icon: ICONS.agent,
      color: 'green',
      isSubAgent: kind === 'skill' && hasSubAgent(description),
    },
    {
      id: `${prefix}-output`,
      type: 'output',
      name: 'Validate + Deliver',
      descEn: 'Check the result, summarize artifacts, and hand off next action',
      descVi: 'Kiểm tra kết quả, tóm tắt artifact, và bàn giao bước tiếp theo',
      explainEn: `The final step validates the output against the requested scope. The report names changed files or generated assets, calls out skipped checks, and gives the next concrete action only when useful.\n\nIf validation cannot run, the limitation is reported explicitly.`,
      explainVi: `Bước cuối validate output với scope đã yêu cầu. Report nêu files đã sửa hoặc assets đã tạo, nói rõ checks bị skip, và đưa bước tiếp theo cụ thể khi hữu ích.\n\nNếu không chạy được validation, limitation được ghi rõ.`,
      codeSnippet: '// Final report:\n// - artifact paths / changed files\n// - validation performed\n// - skipped checks and why\n// - next command if follow-up is needed',
      icon: ICONS.output,
      color: 'amber',
    },
  ];
};

const js = (value, indent = 4) => JSON.stringify(value, null, 2)
  .split('\n')
  .map((line, index) => (index === 0 ? line : `${' '.repeat(indent)}${line}`))
  .join('\n');

const makeScenario = (target, colorIndex) => {
  const color = COLORS[colorIndex % COLORS.length];
  const title = target.title;
  const steps = makeSteps({ ...target, title });
  return `  // ─── ${target.command} — ${title} ─────────────────────────────\n  {\n    id: '${target.id}',\n    command: '${target.command}',\n    kit: '${target.kit}',\n    titleEn: '${escapeString(title)}',\n    titleVi: '${escapeString(title)}',\n    descEn: '${escapeString(target.description)}',\n    descVi: '${escapeString(target.description)}',\n    icon: '${ICONS.agent}',\n    accentColor: '${color}',\n    steps: ${js(steps, 4)},\n  },\n`;
};

const makeInfographic = (target) => {
  const flags = target.flags.length ? target.flags : ['default'];
  const workflowModes = flags.slice(0, 8).map((flag) => ({
    flag,
    modeEn: flag === 'default' ? 'Default route' : `${flag} route`,
    modeVi: flag === 'default' ? 'Route mặc định' : `Route ${flag}`,
    research: 'scope',
    redTeam: target.gate ? 'gate' : 'review',
    validation: 'artifact check',
  }));
  const promptExamples = (target.examples.length ? target.examples : [target.command]).slice(0, 8).map((command, index) => ({
    labelEn: index === 0 ? 'Default' : toTitle(command.split(':').slice(-1)[0]),
    labelVi: index === 0 ? 'Mặc định' : toTitle(command.split(':').slice(-1)[0]),
    command,
    whenEn: index === 0 ? 'Use the primary route for the requested task.' : 'Use this route for a narrower output.',
    whenVi: index === 0 ? 'Dùng route chính cho task được yêu cầu.' : 'Dùng route này cho output hẹp hơn.',
    expectedEn: 'Scoped artifact plus validation summary.',
    expectedVi: 'Artifact đúng scope kèm tóm tắt validation.',
    recommended: index === 0,
  }));

  return `  {\n    id: '${target.id}',\n    command: '${target.command}',\n    kit: '${target.kit}',\n    header: {\n      titleEn: '${target.command}',\n      titleVi: '${target.command}',\n      taglineEn: '${escapeString(target.description)}',\n      taglineVi: '${escapeString(target.description)}',\n    },\n    ${target.gate ? `hardGate: {\n      type: 'warning',\n      titleEn: 'VERIFY BEFORE DELIVERY',\n      titleVi: 'VERIFY TRƯỚC KHI GIAO',\n      contentEn: 'Keep the route scoped, verify available artifacts, and report unavailable data or skipped checks explicitly.',\n      contentVi: 'Giữ route đúng scope, verify artifacts có thể kiểm tra, và nói rõ data unavailable hoặc checks bị skip.',\n    },\n    ` : ''}processFlow: [\n      { number: 1, titleEn: 'Invoke', titleVi: 'Gọi lệnh', descEn: 'Command, target, constraints', descVi: 'Command, target, constraints' },\n      { number: 2, titleEn: 'Context', titleVi: 'Context', descEn: 'Rules, docs, files, active plans', descVi: 'Rules, docs, files, active plans' },\n      { number: 3, titleEn: 'Route', titleVi: 'Route', descEn: 'Pick mode, flag, or subcommand', descVi: 'Chọn mode, flag, hoặc subcommand' },\n      { number: 4, titleEn: 'Execute', titleVi: 'Thực thi', descEn: 'Run workflow and create artifact', descVi: 'Chạy workflow và tạo artifact' },\n      { number: 5, titleEn: 'Validate', titleVi: 'Validate', descEn: 'Check output and report limits', descVi: 'Kiểm tra output và nêu giới hạn' },\n    ],\n    workflowModes: ${js(workflowModes, 4)},\n    promptExamples: ${js(promptExamples, 4)},\n    corePrinciplesEn: ['Scope first', 'Use real project context', 'Prefer explicit routes', 'Validate artifacts', 'Report limits'],\n    corePrinciplesVi: ['Scope trước', 'Dùng context project thật', 'Ưu tiên route rõ', 'Validate artifacts', 'Nêu rõ giới hạn'],\n    expertiseAreasEn: ['Routing', 'Context audit', 'Artifact generation', 'Validation', 'Handoff'],\n    expertiseAreasVi: ['Routing', 'Audit context', 'Tạo artifact', 'Validation', 'Handoff'],\n    skillStack: [\n      { name: '${target.command.replace(/^\//, '')}', type: 'skill' },\n      { name: 'repo search', type: 'tool' },\n      { name: 'validation command', type: 'tool' },\n    ],\n    reportOutput: {\n      titleEn: 'Workflow Output',\n      titleVi: 'Workflow Output',\n      patternEn: 'Artifact path or inline result + validation summary + skipped checks',\n      patternVi: 'Artifact path hoặc kết quả inline + tóm tắt validation + checks bị skip',\n      descEn: 'The guide models the command as a scoped pipeline: route, execute, validate, then summarize artifacts and limitations.',\n      descVi: 'Guide model command như pipeline đúng scope: route, execute, validate, rồi tóm tắt artifacts và limitations.',\n    },\n    deepDiveLink: commonLink,\n  },\n`;
};

const makeArchitectureDoc = (target) => `# ${target.command} — ${target.title}\n+\n+Source: ${target.sourcePath ? `\`${target.sourcePath}\`` : 'command registry and VividKit command catalog'}\n+\n+## Authoritative Flow\n+\n+1. Invoke ${target.command} with a concrete target, constraints, and expected output.\n+2. Load project context, active plans, permissions, and guide rules before acting.\n+3. Audit relevant files, docs, and command routes; select the correct mode/flag/subcommand.\n+4. Execute the scoped workflow with specialist skills, tools, or sub-agents only when needed.\n+5. Validate the artifact, report skipped checks, and hand off the next concrete action.\n+\n+## Skills Activated\n+\n+| Type | Skill |\n+|------|-------|\n+| Mandatory | ${target.command.replace(/^\//, '')} |\n+| Conditional | repo search, validation tools, specialist sub-agents |\n+| Optional | docs update, report generation, follow-up workflow |\n+\n+## Sub-agents\n+\n+The main agent owns routing and final synthesis. Sub-agents are conditional: use them for research, review, testing, design, media, or parallel execution only when the source workflow calls for it.\n+\n+## Mode Selection\n+\n+${target.flags.length ? `Supported route markers: ${target.flags.join(', ')}.` : 'None captured in the registry; use the default command route and ask for missing scope when needed.'}\n+\n+## Complexity Routing\n+\n+Small requests stay main-agent-led. Multi-file, research-heavy, design-heavy, or validation-heavy requests should split into specialist lanes and return a concise artifact report.\n+\n+## Hard Gate\n+\n+${target.gate ? 'Verify scope, source data, and output before delivery. Report unavailable data and skipped checks explicitly.' : 'No special hard gate beyond normal project permissions, scope control, and validation reporting.'}\n+`;

const targets = [];

for (const skill of registry.skills.filter((s) => !s.deprecated || localDeprecatedEngineerCoverage.has(s.name))) {
  const baseId = normalizeNameId(skill.name);
  const needsPrefix = skill.kit === 'marketer' && registry.skills.some((s) => s.kit === 'engineer' && !s.deprecated && normalizeNameId(s.name) === baseId);
  const id = needsPrefix ? `ckm-${baseId}` : baseId;
  const command = commandFromSkillName(skill.name);
  if (scenarioIds.has(id) && infographicIds.has(id) && visibleIds.has(id) && quickRefIds.has(id) && hasArchitectureDoc(id, command)) continue;
  const summary = sourceSummary(skill.name, skill.name);
  const flags = extractFlags(summary.hint, summary.source);
  targets.push({
    id,
    command,
    kit: skill.kit === 'marketer' ? 'marketer' : 'engineer',
    title: toTitle(baseId),
    description: summary.description || `${command} workflow`,
    flags,
    examples: [command, ...flags.slice(0, 4).map((flag) => `${command} ${flag} "project task"`)],
    gate: hasGate(summary.source),
    kind: 'skill',
    sourcePath: summary.path,
  });
}

const commandRoots = new Map();
for (const command of registry.commands.filter((c) => !c.deprecated && c.kit === 'marketer')) {
  const root = commandRoot(command.name);
  const bucket = commandRoots.get(root) || [];
  bucket.push(command.name);
  commandRoots.set(root, bucket);
}

for (const [root, names] of [...commandRoots.entries()].sort(([a], [b]) => a.localeCompare(b))) {
  const existingIds = new Set([...scenarioIds, ...targets.map((t) => t.id)]);
  const command = names.length > 1 ? `/ckm:${root}:*` : `/ckm:${root}`;
  if (
    (scenarioKitById.get(root) === 'marketer' || targets.some((target) => target.id === root && target.kit === 'marketer')) &&
    infographicIds.has(root) &&
    visibleIds.has(root) &&
    quickRefIds.has(root) &&
    hasArchitectureDoc(root, command)
  ) continue;
  const id = scenarioKitById.get(root) === 'marketer' || targets.some((target) => target.id === root && target.kit === 'marketer')
    ? root
    : existingIds.has(root)
      ? `ckm-${root}`
      : root;
  if (scenarioIds.has(id) && infographicIds.has(id) && visibleIds.has(id) && quickRefIds.has(id) && hasArchitectureDoc(id, command)) continue;
  const rootName = `ckm:${root}`;
  const summary = commandSummary(rootName, `${rootName} command family`);
  const examples = names.sort().map((name) => `/${name}`);
  const flags = [...new Set(names.map((name) => name.replace(rootName, '').replace(/^:/, '')).filter(Boolean).map((part) => `:${part}`))].slice(0, 8);
  targets.push({
    id,
    command,
    kit: 'marketer',
    title: `${toTitle(root)} Commands`,
    description: summary.description || `${rootName} command family`,
    flags,
    examples,
    gate: hasGate(summary.source),
    kind: 'command-root',
    sourcePath: summary.path,
    commandNames: names,
  });
}

const scenarioAdds = [];
const infographicAdds = [];
const architectureAdds = [];
const newEngineerIds = [];
const newMarketerIds = [];

targets.forEach((target, index) => {
  if (!scenarioIds.has(target.id)) scenarioAdds.push(makeScenario(target, index));
  if (!infographicIds.has(target.id)) infographicAdds.push(makeInfographic(target));

  const docPath = architectureDocPath(target.id, target.command);
  if (!exists(docPath)) {
    write(docPath, makeArchitectureDoc(target).replace(/^\+/gm, ''));
    architectureAdds.push({ docPath, target });
  }
  if (target.kit === 'engineer') newEngineerIds.push(target.id);
  else newMarketerIds.push(target.id);
});

if (scenarioAdds.length) {
  const next = scenarioSource.replace(/\n\];\s*$/, `\n${scenarioAdds.join('\n')}];\n`);
  write(FILES.scenarios, next);
}

if (infographicAdds.length) {
  const next = infographicSource.replace(/\n\] satisfies Record<string, PromptExample\[]>;/, '\n] satisfies Record<string, PromptExample[]>;')
    .replace(/\n\];\s*$/, `\n${infographicAdds.join('\n')}];\n`);
  write(FILES.infographics, next);
}

const insertIds = (source, arrayName, ids) => {
  const unique = ids.filter((id, index) => ids.indexOf(id) === index);
  if (!unique.length) return source;
  const arrayMatch = source.match(new RegExp(`const ${arrayName} = \\[[\\s\\S]*?\\];`, 'm'));
  if (!arrayMatch) throw new Error(`Cannot find ${arrayName}`);
  const current = new Set([...arrayMatch[0].matchAll(/'([^']+)'/g)].map((m) => m[1]));
  const missing = unique.filter((id) => !current.has(id));
  if (!missing.length) return source;
  const block = missing.map((id) => `  '${id}',`).join('\n');
  return source.replace(new RegExp(`(const ${arrayName} = \\[[\\s\\S]*?)(\\n\\](?:\\.filter\\(hasInfographic\\))?;)`, 'm'), `$1\n${block}$2`);
};

let nextSelector = selectorSource;
nextSelector = insertIds(nextSelector, 'visibleEngineerSkills', newEngineerIds);
nextSelector = insertIds(nextSelector, 'visibleMarketerSkills', newMarketerIds);
if (nextSelector !== selectorSource) write(FILES.selector, nextSelector);

let nextGuide = guideSource;
nextGuide = insertIds(nextGuide, 'engineerQuickRefIds', newEngineerIds);
nextGuide = insertIds(nextGuide, 'marketerQuickRefIds', newMarketerIds);
if (nextGuide !== guideSource) write(FILES.guide, nextGuide);

if (architectureAdds.length) {
  let indexSource = read(FILES.index);
  const existing = new Set([...indexSource.matchAll(/\(([^)]+\.md)\)/g)].map((m) => m[1]));
  const lines = architectureAdds
    .filter(({ docPath }) => !existing.has(path.basename(docPath)))
    .map(({ docPath, target }) => `- [${path.basename(docPath)}](${path.basename(docPath)}) — ${target.command} ${target.description}`);
  if (lines.length) {
    indexSource = indexSource.replace(/\n## Shared\n/, `\n${lines.join('\n')}\n\n## Shared\n`);
    write(FILES.index, indexSource);
  }
}

console.log(JSON.stringify({
  targets: targets.length,
  scenariosAdded: scenarioAdds.length,
  infographicsAdded: infographicAdds.length,
  architectureDocsAdded: architectureAdds.length,
  engineerVisibleAdded: newEngineerIds.length,
  marketerVisibleAdded: newMarketerIds.length,
  ids: targets.map((target) => target.id),
}, null, 2));

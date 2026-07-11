import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import test from "node:test";
import ts from "typescript";

const root = resolve(import.meta.dirname, "../..");

async function source(path) {
  return readFile(resolve(root, path), "utf8");
}

async function importTypescript(path) {
  try {
    return await import(pathToFileURL(resolve(root, path)).href);
  } catch (error) {
    if (error?.code !== "ERR_MODULE_NOT_FOUND") throw error;
  }
  const code = await source(path);
  const output = ts.transpileModule(code, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  return import(`data:text/javascript;base64,${Buffer.from(output).toString("base64")}`);
}

const activeCatalogFiles = [
  "src/data/guides/commands-engineer-kit.ts",
  "src/data/guides/commands-marketing-kit.ts",
  "src/data/guides/workflows-data/workflows-stable.ts",
  "src/data/guides/workflows-data/workflows-beta-additions.ts",
  "src/data/guides/workflows-data/workflows-marketing-kit.ts",
  "src/data/vi/guides/workflows-data/workflows-stable.ts",
  "src/data/vi/guides/workflows-data/workflows-beta-additions.ts",
  "src/data/vi/guides/workflows-data/workflows-marketing-kit.ts",
  "src/data/guides/flowchart-engineer-data.ts",
  "src/data/guides/flowchart-marketing-data.ts",
  "src/data/guides/flowchart-index.ts",
];

const activeUiFiles = [
  "src/components/guides/CommandsGuide.astro",
  "src/components/guides/FlowchartInteractive.astro",
  "src/components/guides/commands/commands-categories-grid.astro",
  "src/components/guides/commands/commands-docs-note.astro",
  "src/components/guides/commands/commands-hero-banner.astro",
  "src/components/guides/commands/commands-symbols-legend.astro",
  "src/components/guides/workflows/workflows-pro-tips-and-navigation.astro",
  "src/components/guides/workflows/workflows-workflow-card.astro",
  "src/components/guides/flowchart/flowchart-common-workflows-section.astro",
  "src/components/guides/flowchart/flowchart-pro-tips-and-complexity-section.astro",
  "src/components/guides/flowchart/flowchart-summary-and-help-section.astro",
  "src/components/guides/flowchart/flowchart-marketing-workflows-section.astro",
];

test("active core catalogs and copy use the unified /ak namespace", async () => {
  for (const path of [...activeCatalogFiles, ...activeUiFiles]) {
    const text = await source(path);
    assert.doesNotMatch(text, /\/ckm?:/i, `${path} contains an active legacy invocation`);
  }
});

test("command migration rows are explicit legacy mappings to AgentKit", async () => {
  const migration = await importTypescript("src/data/guides/commands-migration.ts");
  const rows = [
    ...migration.engineerMigrationAlways,
    ...migration.engineerMigrationExtra,
    ...migration.marketingMigrationAlways,
    ...migration.marketingMigrationExtra,
    ...migration.marketingRenamedMkt,
    ...migration.marketingRenamedShared,
  ];

  assert.ok(rows.length > 0);
  for (const row of rows) {
    assert.equal(row.legacy, true, `${row.old} must carry legacy metadata`);
    assert.match(row.new, /^\/ak:/, `${row.old} must map to /ak:*`);
    assert.ok(row.compatibilityNote, `${row.old} needs a compatibility note`);
  }
});

function workflowShape(items) {
  return items.map((workflow, index) => ({
    id: workflow.id ?? `workflow-${index}`,
    category: workflow.category,
    level: workflow.level,
    commands: workflow.steps.map((step) => step.command ?? null),
  }));
}

for (const [name, file, exportName] of [
  ["stable", "workflows-stable.ts", "stableWorkflows"],
  ["beta", "workflows-beta-additions.ts", "betaOnlyWorkflows"],
  ["marketing", "workflows-marketing-kit.ts", "marketingKitWorkflows"],
]) {
  test(`EN/VI ${name} workflows preserve id, order, command, category and level parity`, async () => {
    const en = await importTypescript(`src/data/guides/workflows-data/${file}`);
    const vi = await importTypescript(`src/data/vi/guides/workflows-data/${file}`);
    assert.deepEqual(workflowShape(vi[exportName]), workflowShape(en[exportName]));
  });
}

test("command scenario resolver supports AgentKit display commands and legacy scenario commands", async () => {
  const { createScenarioResolver } = await importTypescript(
    "src/data/guides/commands-scenario-resolver.ts",
  );
  const scenarios = [
    { id: "plan", command: "/ck:plan", kit: "engineer" },
    { id: "marketing-plan", command: "/ckm:plan", kit: "marketing" },
  ];
  const resolver = createScenarioResolver(scenarios, { kit: "engineer" });
  const marketingResolver = createScenarioResolver(scenarios, { kit: "marketing" });

  assert.equal(resolver("/ak:plan --fast"), "plan");
  assert.equal(resolver("/ck:plan"), "plan");
  assert.equal(marketingResolver("/ak:plan"), "marketing-plan");
});

test("fact-backed command adapters use canonical Claude Code invocations", async () => {
  const { AGENTKIT_SKILL_FACTS } = await importTypescript(
    "src/data/guides/agentkit/agentkit-skill-facts.ts",
  );
  const { agentKitClaudeCodeInvocation } = await importTypescript(
    "src/data/guides/commands-agentkit-facts.ts",
  );

  for (const fact of AGENTKIT_SKILL_FACTS) {
    assert.equal(agentKitClaudeCodeInvocation(fact.id), fact.invocations.claudeCode);
  }
});

test("flowchart identities and references remain valid after prefix normalization", async () => {
  const { engineerFlowchartData, marketingFlowchartData, getPathByCommand } = await importTypescript(
    "src/data/guides/flowchart-index.ts",
  );

  for (const data of [engineerFlowchartData, marketingFlowchartData]) {
    for (const collection of [data.nodes, data.edges, data.paths]) {
      const ids = collection.map(({ id }) => id);
      assert.equal(new Set(ids).size, ids.length, "flowchart IDs must be unique");
    }
    const nodeIds = new Set(data.nodes.map(({ id }) => id));
    const edgeIds = new Set(data.edges.map(({ id }) => id));
    for (const edge of data.edges) {
      assert.ok(nodeIds.has(edge.from), `${edge.id} has an unknown source node`);
      assert.ok(nodeIds.has(edge.to), `${edge.id} has an unknown destination node`);
    }
    for (const path of data.paths) {
      assert.ok(path.nodes.every((id) => nodeIds.has(id)), `${path.id} contains an unknown node`);
      assert.ok(path.edges.every((id) => edgeIds.has(id)), `${path.id} contains an unknown edge`);
    }
  }

  assert.equal(getPathByCommand("/ck:plan")?.command, "/ak:plan");
});

test("Beta Preview uses AgentKit syntax and mirrors beta-only command cards", async () => {
  const categoriesModule = await importTypescript("src/data/guides/commands-engineer-kit.ts");
  const betaCommands = categoriesModule
    .getEngineerKitCategories((key) => key)
    .flatMap((category) => category.commands)
    .filter((command) => command.isBeta)
    .map((command) => command.command);
  const preview = await source("src/components/guides/commands/commands-categories-grid.astro");

  assert.doesNotMatch(preview, /cmd:\s*["']\/ckm?:/);
  for (const command of betaCommands) {
    assert.match(preview, new RegExp(`cmd:\\s*["']${command.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`));
  }
});

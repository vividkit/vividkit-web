/**
 * Audit `src/config/schemas/*.ts` — the source-of-truth for `ccs config` shape.
 * Each schema corresponds to a config-subcommand surface or a config-file section
 * users see in the dashboard or `~/.ccs/config.yaml`.
 */

const fs = require("fs");
const path = require("path");

const SCHEMAS_DIR = "src/config/schemas";

// Schema file → guide section keyword(s) it should be reflected in.
const SCHEMA_KEYWORDS = {
  "unified-config.ts": ["config", "configuration"],
  "channels.ts": ["channels", "config channels"],
  "websearch.ts": ["websearch", "web search"],
  "thinking.ts": ["thinking", "config thinking"],
  "providers.ts": ["provider", "providers"],
  "browser.ts": ["browser", "Browser Attach"],
  "quota.ts": ["quota"],
  "proxy-server.ts": ["proxy", "proxy server"],
  "version.ts": [],
  "auth.ts": ["auth", "config auth"],
  "logging.ts": ["log", "logging"],
  "copilot-cursor.ts": ["copilot", "cursor"],
};

function listSchemas(ccsDir) {
  const dir = path.join(ccsDir, SCHEMAS_DIR);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".ts") && f !== "index.ts")
    .sort();
}

function scanSchema(ccsDir, name) {
  const fp = path.join(ccsDir, SCHEMAS_DIR, name);
  const text = fs.readFileSync(fp, "utf8");
  const lines = text.split("\n");
  // Count exports (rough but useful as drift signal).
  const exports = [...text.matchAll(/^export\s+(?:const|type|interface|function)\s+(\w+)/gm)].map(
    (m) => m[1]
  );
  return {
    file: name,
    relPath: `${SCHEMAS_DIR}/${name}`,
    lines: lines.length,
    exports,
    keywords: SCHEMA_KEYWORDS[name] || [],
  };
}

function buildCoverage(schemas, guideText) {
  return schemas.map((s) => {
    let documented = false;
    if (s.keywords.length === 0) {
      documented = false;
    } else {
      documented = s.keywords.some((k) =>
        new RegExp(`\\b${k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(guideText)
      );
    }
    return { ...s, documented };
  });
}

function renderReport(coverage, meta) {
  const date = new Date().toISOString().split("T")[0];
  const lines = [];
  lines.push(`# CCS Config Schemas Audit — ${date}`);
  lines.push("");
  lines.push(`- **Source**: \`${SCHEMAS_DIR}/\``);
  lines.push(`- **Repo**: ${meta.repo}`);
  lines.push(`- **Schemas**: ${coverage.length}`);
  lines.push("");

  lines.push("## Schema Coverage");
  lines.push("");
  lines.push("| Schema | Lines | Exports | Documented in Guide | Keywords |");
  lines.push("|---|---|---|---|---|");
  for (const s of coverage) {
    const expSummary = s.exports.length === 0 ? "—" : s.exports.length <= 3 ? s.exports.map((e) => `\`${e}\``).join(", ") : `${s.exports.length} symbols`;
    const docCol = s.keywords.length === 0 ? "(internal)" : s.documented ? "yes" : "**no**";
    const kwCol = s.keywords.length ? s.keywords.map((k) => `\`${k}\``).join(", ") : "—";
    lines.push(`| \`${s.relPath}\` | ${s.lines} | ${expSummary} | ${docCol} | ${kwCol} |`);
  }
  lines.push("");

  // Suggestions
  const missing = coverage.filter((s) => s.keywords.length > 0 && !s.documented);
  lines.push("## Suggestions");
  lines.push("");
  if (missing.length) {
    lines.push(`- **${missing.length} schema(s) with user-facing surface missing from guide**:`);
    for (const s of missing) {
      lines.push(`  - \`${s.relPath}\` — keywords: ${s.keywords.map((k) => `\`${k}\``).join(", ")}`);
    }
  } else {
    lines.push("_All user-facing schemas have keyword presence in guide._");
  }
  lines.push("");

  return lines.join("\n");
}

function validateDrift(coverage) {
  const issues = [];
  const missing = coverage.filter((s) => s.keywords.length > 0 && !s.documented);
  if (missing.length) {
    issues.push(
      `schemas: ${missing.length} user-facing config schema(s) missing keyword in VK guide: ${missing.map((s) => s.file).join(", ")}`
    );
  }
  return issues;
}

module.exports = {
  listSchemas,
  scanSchema,
  buildCoverage,
  renderReport,
  validateDrift,
};

/**
 * Audit CCS CLI command surface from `src/commands/command-catalog.ts`.
 *
 * Extracts ROOT_COMMAND_CATALOG (23 commands), all *_SUBCOMMANDS (auth/api/cliproxy/
 * config/docker/proxy/cursor-completion/copilot-completion), all *_FLAGS, help topics,
 * provider shortcuts, and aliases. Cross-checks coverage in VK CCS guide files.
 */

const fs = require("fs");
const path = require("path");
const {
  readFileOrNull,
  extractStringArray,
  extractObjectArray,
} = require("./ts-source-parser.cjs");

const CATALOG_FILE = "src/commands/command-catalog.ts";

function parseCatalog(ccsDir) {
  const fp = path.join(ccsDir, CATALOG_FILE);
  const src = readFileOrNull(fs, fp);
  if (!src) return null;

  return {
    rootCommands: extractObjectArray(src, "ROOT_COMMAND_CATALOG"),
    helpTopics: extractObjectArray(src, "ROOT_HELP_TOPICS"),
    profileExamples: extractObjectArray(src, "ROOT_PROFILE_EXAMPLES"),
    aliasExamples: extractObjectArray(src, "ROOT_COMPATIBLE_ALIAS_EXAMPLES"),
    rootFlags: extractStringArray(src, "ROOT_COMMAND_FLAGS"),
    authSubcommands: extractStringArray(src, "AUTH_SUBCOMMANDS"),
    apiSubcommands: extractStringArray(src, "API_SUBCOMMANDS"),
    cliproxySubcommands: extractStringArray(src, "CLIPROXY_SUBCOMMANDS"),
    configSubcommands: extractStringArray(src, "CONFIG_SUBCOMMANDS"),
    dockerSubcommands: extractStringArray(src, "DOCKER_SUBCOMMANDS"),
    proxySubcommands: extractStringArray(src, "PROXY_SUBCOMMANDS"),
    tokensFlags: extractStringArray(src, "TOKENS_FLAGS"),
    migrateFlags: extractStringArray(src, "MIGRATE_FLAGS"),
    cleanupFlags: extractStringArray(src, "CLEANUP_FLAGS"),
    providerFlags: extractStringArray(src, "PROVIDER_FLAGS"),
    cursorCompletionSubcommands: extractStringArray(src, "CURSOR_COMPLETION_SUBCOMMANDS"),
    copilotCompletionSubcommands: extractStringArray(src, "COPILOT_COMPLETION_SUBCOMMANDS"),
    sourceFile: CATALOG_FILE,
  };
}

// Build mention regex for a token like "auth", "--effort", "ccs-droid".
// Allow surrounding markdown/HTML/code so a guide entry like
// `<code>ccs auth create</code>` or `\`--effort high\`` counts.
function isMentioned(token, text) {
  const esc = token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const patterns = [
    // `ccs <cmd>` or `ccs <cmd> <subcmd>`
    new RegExp(`\\bccs\\s+${esc}\\b`, "i"),
    // Subcommand inline: `cliproxy create`, `auth list`
    new RegExp(`\\b${esc}\\b`, "i"),
  ];
  // Stricter check: must appear in a CLI-y context (avoid noise).
  // For tokens that are common English words ("list", "show", "create"),
  // require they appear adjacent to a CCS-ish keyword.
  const COMMON_WORDS = new Set([
    "list", "show", "create", "remove", "default", "start", "stop", "status",
    "doctor", "sync", "update", "down", "up", "logs", "config", "help",
    "version", "import", "export", "copy", "discover", "backup", "edit",
    "routing", "catalog", "quota", "restart", "pause", "resume", "activate",
    "channels", "auth", "thinking", "image-analysis", "reset-default",
  ]);
  if (COMMON_WORDS.has(token)) {
    const ctxRe = new RegExp(
      `(?:\\bccs\\b[^\\n]{0,80}?\\b${esc}\\b|\\b${esc}\\b[^\\n]{0,40}?\\bccs\\b|--${esc}\\b|\`${esc}\`|>${esc}<)`,
      "i"
    );
    return ctxRe.test(text);
  }
  return patterns.some((re) => re.test(text));
}

function buildCoverage(catalog, guideText) {
  const out = {
    rootCommands: [],
    subcommands: {},
    flags: {},
    helpTopics: [],
    aliases: [],
    providerShortcuts: [],
  };

  for (const cmd of catalog.rootCommands) {
    const documented = isMentioned(cmd.name, guideText);
    out.rootCommands.push({
      name: cmd.name,
      summary: cmd.summary,
      group: cmd.group,
      visibility: cmd.visibility,
      aliases: cmd.aliases || [],
      documented,
    });
  }

  const subcommandSets = [
    ["auth", catalog.authSubcommands],
    ["api", catalog.apiSubcommands],
    ["cliproxy", catalog.cliproxySubcommands],
    ["config", catalog.configSubcommands],
    ["docker", catalog.dockerSubcommands],
    ["proxy", catalog.proxySubcommands],
  ];
  for (const [parent, subs] of subcommandSets) {
    out.subcommands[parent] = subs.map((s) => ({
      name: s,
      documented: isMentioned(`${parent} ${s}`, guideText) || isMentioned(s, guideText),
    }));
  }

  const flagSets = [
    ["root", catalog.rootFlags],
    ["provider", catalog.providerFlags],
    ["tokens", catalog.tokensFlags],
    ["migrate", catalog.migrateFlags],
    ["cleanup", catalog.cleanupFlags],
  ];
  for (const [scope, flags] of flagSets) {
    out.flags[scope] = flags.map((f) => ({
      name: f,
      documented: guideText.includes(f),
    }));
  }

  for (const t of catalog.helpTopics) {
    out.helpTopics.push({
      name: t.name,
      summary: t.summary,
      documented: isMentioned(t.name, guideText),
    });
  }

  for (const ex of catalog.aliasExamples) {
    const aliases = (ex.name || "").split(/\s*\/\s*/).map((a) => a.trim()).filter(Boolean);
    for (const alias of aliases) {
      // Strip leading flag dashes for grep, but check raw too
      const documented = guideText.includes(alias);
      out.aliases.push({ name: alias, summary: ex.summary, documented });
    }
  }

  return out;
}

function renderReport(coverage, catalog, meta) {
  const date = new Date().toISOString().split("T")[0];
  const lines = [];
  lines.push(`# CCS CLI Command Surface Audit — ${date}`);
  lines.push("");
  lines.push(`- **Source**: \`${catalog.sourceFile}\``);
  lines.push(`- **Repo**: ${meta.repo}`);
  lines.push("");

  // Root commands
  const rc = coverage.rootCommands;
  const publicCmds = rc.filter((c) => c.visibility === "public");
  const hiddenCmds = rc.filter((c) => c.visibility === "hidden");
  lines.push("## Root Commands");
  lines.push("");
  lines.push(`Total ${rc.length} (${publicCmds.length} public, ${hiddenCmds.length} hidden).`);
  lines.push("");
  lines.push("| Command | Group | Visibility | Aliases | Documented | Summary |");
  lines.push("|---|---|---|---|---|---|");
  for (const c of rc) {
    const aliasCol = c.aliases.length ? c.aliases.map((a) => `\`${a}\``).join(", ") : "—";
    lines.push(
      `| \`${c.name}\` | ${c.group || "—"} | ${c.visibility} | ${aliasCol} | ${c.documented ? "yes" : "**no**"} | ${c.summary || ""} |`
    );
  }
  lines.push("");

  // Subcommands
  lines.push("## Subcommands");
  lines.push("");
  for (const [parent, subs] of Object.entries(coverage.subcommands)) {
    lines.push(`### \`ccs ${parent} <subcommand>\` (${subs.length})`);
    lines.push("");
    lines.push("| Subcommand | Documented |");
    lines.push("|---|---|");
    for (const s of subs) {
      lines.push(`| \`${s.name}\` | ${s.documented ? "yes" : "**no**"} |`);
    }
    lines.push("");
  }

  // Flags
  lines.push("## Flags");
  lines.push("");
  for (const [scope, flags] of Object.entries(coverage.flags)) {
    lines.push(`### ${scope} flags (${flags.length})`);
    lines.push("");
    lines.push("| Flag | Documented |");
    lines.push("|---|---|");
    for (const f of flags) {
      lines.push(`| \`${f.name}\` | ${f.documented ? "yes" : "**no**"} |`);
    }
    lines.push("");
  }

  // Help topics
  lines.push("## Help Topics");
  lines.push("");
  lines.push("Reachable via `ccs help <topic>` — content lives in `src/commands/help-command.ts` topic dispatch.");
  lines.push("");
  lines.push("| Topic | Documented in Guide | Summary |");
  lines.push("|---|---|---|");
  for (const t of coverage.helpTopics) {
    lines.push(`| \`${t.name}\` | ${t.documented ? "yes" : "**no**"} | ${t.summary || ""} |`);
  }
  lines.push("");

  // Aliases (binary names)
  lines.push("## Binary Aliases");
  lines.push("");
  lines.push("| Alias | Documented | Purpose |");
  lines.push("|---|---|---|");
  for (const a of coverage.aliases) {
    lines.push(`| \`${a.name}\` | ${a.documented ? "yes" : "**no**"} | ${a.summary || ""} |`);
  }
  lines.push("");

  // Suggestions
  const missingPublic = publicCmds.filter((c) => !c.documented);
  const missingTopics = coverage.helpTopics.filter((t) => !t.documented);
  const missingAliases = coverage.aliases.filter((a) => !a.documented);

  lines.push("## Suggestions");
  lines.push("");
  if (missingPublic.length) {
    lines.push(`- **Add ${missingPublic.length} undocumented public command(s)** to VK guide:`);
    for (const c of missingPublic) lines.push(`  - \`ccs ${c.name}\` — ${c.summary}`);
  }
  if (missingTopics.length) {
    lines.push(`- **Surface ${missingTopics.length} help topic(s)** in decision tree / overview:`);
    for (const t of missingTopics) lines.push(`  - \`ccs help ${t.name}\` — ${t.summary}`);
  }
  if (missingAliases.length) {
    lines.push(`- **Document ${missingAliases.length} runtime alias(es)** in features section:`);
    for (const a of missingAliases) lines.push(`  - \`${a.name}\` — ${a.summary}`);
  }
  if (!missingPublic.length && !missingTopics.length && !missingAliases.length) {
    lines.push("_All public commands, help topics, and aliases are mentioned in guide._");
  }
  lines.push("");

  return lines.join("\n");
}

function validateDrift(coverage) {
  const issues = [];
  const missingPublic = coverage.rootCommands.filter(
    (c) => c.visibility === "public" && !c.documented
  );
  if (missingPublic.length) {
    issues.push(
      `commands: ${missingPublic.length} public root command(s) missing from VK guide: ${missingPublic.map((c) => c.name).join(", ")}`
    );
  }
  const missingAliases = coverage.aliases.filter((a) => !a.documented);
  if (missingAliases.length) {
    issues.push(
      `commands: ${missingAliases.length} runtime alias(es) missing from VK guide: ${missingAliases.map((a) => a.name).join(", ")}`
    );
  }
  // Surface helpTopic gaps as warnings (not failures) — converted to warnings in main.
  return issues;
}

module.exports = {
  parseCatalog,
  buildCoverage,
  renderReport,
  validateDrift,
};

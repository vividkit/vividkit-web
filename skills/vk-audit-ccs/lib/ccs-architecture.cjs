/**
 * Audit CCS subsystem architecture by enumerating `src/<subsystem>/` directories.
 * For each subsystem: count files, peek module header for one-line summary,
 * cross-check whether the subsystem is mentioned in VK CCS guide.
 */

const fs = require("fs");
const path = require("path");

// Subsystem dir → keyword(s) to search in VK guide. Multi-keyword = OR match.
// Also includes a "user-visible" flag — internal-only modules don't need guide coverage.
const SUBSYSTEM_KEYWORDS = {
  cliproxy: { keywords: ["cliproxy", "CLIProxy", "CLI Proxy"], userVisible: true },
  copilot: { keywords: ["copilot", "Copilot", "GHCP", "ghcp"], userVisible: true },
  cursor: { keywords: ["cursor", "Cursor"], userVisible: true },
  targets: { keywords: ["target", "Target", "claude-adapter", "codex-adapter", "droid-adapter"], userVisible: true },
  bin: { keywords: ["ccs-droid", "ccsd", "ccs-codex", "ccsx", "ccsxp"], userVisible: true },
  auth: { keywords: ["auth", "OAuth", "account profile"], userVisible: true },
  api: { keywords: ["api", "API profile", "api create"], userVisible: true },
  config: { keywords: ["config", "configuration", "schema"], userVisible: true },
  commands: { keywords: ["command", "subcommand"], userVisible: true },
  "web-server": { keywords: ["dashboard", "web server", "Web Server", "config server"], userVisible: true },
  channels: { keywords: ["channel", "websearch", "thinking"], userVisible: true },
  proxy: { keywords: ["proxy server", "proxy start", "Local proxy", "ccs proxy", "proxy activate"], userVisible: true },
  dispatcher: { keywords: ["dispatcher", "request flow"], userVisible: false },
  services: { keywords: ["service"], userVisible: false },
  glmt: { keywords: ["glmt", "GLMT"], userVisible: true }, // deprecated but historically mentioned
  delegation: { keywords: ["delegation"], userVisible: false },
  management: { keywords: ["repair", "doctor", "health check"], userVisible: true },
  utils: { keywords: ["utility", "helper"], userVisible: false },
  errors: { keywords: ["error"], userVisible: false },
  shared: { keywords: [], userVisible: false },
  types: { keywords: [], userVisible: false },
  docker: { keywords: ["docker", "Docker", "container"], userVisible: true },
};

function readModuleHeader(fp) {
  if (!fs.existsSync(fp)) return null;
  const text = fs.readFileSync(fp, "utf8");
  // Look for top JSDoc /** ... */ block in first 80 lines.
  const head = text.split("\n").slice(0, 80).join("\n");
  const jsdoc = head.match(/\/\*\*([\s\S]*?)\*\//);
  if (jsdoc) {
    return jsdoc[1]
      .split("\n")
      .map((l) => l.replace(/^\s*\*\s?/, "").trim())
      .filter(Boolean)
      .slice(0, 3)
      .join(" ")
      .slice(0, 220);
  }
  // Fallback: first non-import comment or descriptive `// ...` line.
  const comment = head.match(/^\/\/\s*(.+)$/m);
  if (comment) return comment[1].slice(0, 220);
  return null;
}

function countFilesRecursively(dir) {
  let count = 0;
  if (!fs.existsSync(dir)) return 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) {
      // Skip __tests__ and __snapshots__ from the headline count (we report tests separately).
      if (e.name.startsWith("__")) continue;
      count += countFilesRecursively(fp);
    } else if (e.isFile() && /\.(ts|tsx|js|cjs|mjs)$/.test(e.name)) {
      count++;
    }
  }
  return count;
}

function enumerateSubsystems(ccsDir) {
  const srcDir = path.join(ccsDir, "src");
  if (!fs.existsSync(srcDir)) return [];
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  const subsystems = [];
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    if (e.name.startsWith(".") || e.name.startsWith("__")) continue;
    const subPath = path.join(srcDir, e.name);
    const indexFp = path.join(subPath, "index.ts");
    const summary = readModuleHeader(indexFp);
    const cfg = SUBSYSTEM_KEYWORDS[e.name] || { keywords: [], userVisible: false };
    subsystems.push({
      name: e.name,
      path: `src/${e.name}/`,
      fileCount: countFilesRecursively(subPath),
      hasIndex: fs.existsSync(indexFp),
      summary,
      keywords: cfg.keywords,
      userVisible: cfg.userVisible,
    });
  }
  return subsystems.sort((a, b) => a.name.localeCompare(b.name));
}

function buildCoverage(subsystems, guideText) {
  return subsystems.map((s) => {
    let documented = false;
    if (s.keywords.length === 0) {
      documented = false; // no keywords ⇒ never expected in guide
    } else {
      documented = s.keywords.some((k) => {
        const re = new RegExp(`\\b${k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
        return re.test(guideText);
      });
    }
    return { ...s, documented };
  });
}

function renderReport(coverage, meta) {
  const date = new Date().toISOString().split("T")[0];
  const lines = [];
  lines.push(`# CCS Architecture Audit — ${date}`);
  lines.push("");
  lines.push(`- **Repo**: ${meta.repo}`);
  lines.push(`- **Subsystems found**: ${coverage.length}`);
  lines.push("");

  const userVisible = coverage.filter((s) => s.userVisible);
  const internal = coverage.filter((s) => !s.userVisible);

  lines.push("## User-Visible Subsystems");
  lines.push("");
  lines.push("Subsystems that produce CLI commands, dashboards, or runtime adapters users see directly.");
  lines.push("");
  lines.push("| Subsystem | Files | Has index.ts | Documented in Guide | Summary |");
  lines.push("|---|---|---|---|---|");
  for (const s of userVisible) {
    lines.push(
      `| \`${s.path}\` | ${s.fileCount} | ${s.hasIndex ? "yes" : "—"} | ${s.documented ? "yes" : "**no**"} | ${s.summary || "—"} |`
    );
  }
  lines.push("");

  lines.push("## Internal Subsystems");
  lines.push("");
  lines.push("Lower-level modules — not expected to surface in user guide.");
  lines.push("");
  lines.push("| Subsystem | Files | Has index.ts | Summary |");
  lines.push("|---|---|---|---|");
  for (const s of internal) {
    lines.push(`| \`${s.path}\` | ${s.fileCount} | ${s.hasIndex ? "yes" : "—"} | ${s.summary || "—"} |`);
  }
  lines.push("");

  // Suggestions
  const missing = userVisible.filter((s) => !s.documented);
  lines.push("## Suggestions");
  lines.push("");
  if (missing.length) {
    lines.push(`- **${missing.length} user-visible subsystem(s) missing from guide**:`);
    for (const s of missing) {
      lines.push(`  - \`${s.path}\` — keywords: ${s.keywords.map((k) => `\`${k}\``).join(", ")}`);
    }
  } else {
    lines.push("_All user-visible subsystems are mentioned in guide._");
  }
  lines.push("");

  return lines.join("\n");
}

function validateDrift(coverage) {
  const issues = [];
  const missing = coverage.filter((s) => s.userVisible && !s.documented);
  if (missing.length) {
    issues.push(
      `architecture: ${missing.length} user-visible subsystem(s) missing from VK guide: ${missing.map((s) => s.name).join(", ")}`
    );
  }
  return issues;
}

module.exports = {
  enumerateSubsystems,
  buildCoverage,
  renderReport,
  validateDrift,
  SUBSYSTEM_KEYWORDS,
};

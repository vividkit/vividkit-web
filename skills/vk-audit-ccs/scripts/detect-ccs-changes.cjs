#!/usr/bin/env node

/**
 * vk:audit-ccs — detect upstream CCS (kaitranntt/ccs) changes since last VividKit sync.
 *
 * Audit passes (each writes its own report file under reference/changelog-reports/):
 *   --inventory      profile coverage matrix vs base-*.settings.json
 *   --commands       CLI command surface from src/commands/command-catalog.ts
 *   --architecture   subsystem map enumerated from src/<subsystem>/
 *   --capabilities   CLIProxy provider capability matrix from src/cliproxy/provider-capabilities.ts
 *   --schemas        config schema files from src/config/schemas/
 *
 * Diff modes:
 *   --check          summary diff vs last marker
 *   --report         categorized diff + ALL audit passes (one file per pass)
 *   --sync           fetch latest + report + update marker + snapshot artifact
 *   --validate       CI drift gate — non-zero exit on any drift across all passes
 *
 * Add --no-fetch to skip git fetch (use already-pulled state).
 *
 * Snapshot artifact (gitignored): reference/ccs-provider-snapshots.json
 * Editorial overlay (committed):  reference/ccs-provider-editorial.json
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const commandCatalog = require("../lib/ccs-command-catalog.cjs");
const architecture = require("../lib/ccs-architecture.cjs");
const capabilities = require("../lib/ccs-capabilities.cjs");
const schemas = require("../lib/ccs-schemas.cjs");

const REPO_URL = "https://github.com/kaitranntt/ccs";
const BRANCH = "main";

const REFERENCE_DIR = findReferenceDir();
const CCS_DIR = path.join(REFERENCE_DIR, "ccs");
const LAST_SYNC_FILE = path.join(REFERENCE_DIR, ".last-sync-ccs");
const REPORTS_DIR = path.join(REFERENCE_DIR, "changelog-reports");
const SNAPSHOT_FILE = path.join(REFERENCE_DIR, "ccs-provider-snapshots.json");
const EDITORIAL_FILE = path.join(REFERENCE_DIR, "ccs-provider-editorial.json");
const PROJECT_ROOT = path.dirname(REFERENCE_DIR);

// Hardcoded constants extracted from upstream source — bumped only when those upstream symbols change.
// Source: src/cliproxy/config/port-manager.ts (CLIPROXY_DEFAULT_PORT)
//         src/cliproxy/config/generator.ts  (CCS_INTERNAL_API_KEY)
const UPSTREAM_FACTS = {
  cliproxyDefaultPort: 8317,
  internalApiKey: "ccs-internal-managed",
};

// Per-profile auth-mode override when heuristic alone would misclassify.
// Most profiles route through CLIProxyAPI (managed-oauth); these go through dedicated bridges.
const AUTH_MODE_OVERRIDES = {
  ghcp: "github-oauth",       // backed by src/copilot/
  cursor: "cursor-bridge",    // backed by src/cursor/
  ollama: "local-runtime",
  "ollama-cloud": "api-key",
  llamacpp: "local-runtime",
};

// Per-profile runtime adapter location. Profiles not in map default to src/cliproxy/ (proxy-only).
const RUNTIME_ADAPTER_MAP = {
  claude: "src/targets/claude-adapter.ts",
  codex: "src/targets/codex-adapter.ts",
  droid: "src/targets/droid-adapter.ts",
  ghcp: "src/copilot/",
  cursor: "src/cursor/",
};

// Guide files audited for profile coverage during inventory.
const GUIDE_FILES = [
  "src/components/guides/CCSGuide.astro",
  "src/components/guides/FlowchartInteractiveCCS.astro",
  "src/components/guides/ccs/ccs-overview-section.astro",
  "src/components/guides/ccs/ccs-key-features-section.astro",
  "src/components/guides/ccs/ccs-configure-providers-section.astro",
  "src/components/guides/ccs/ccs-provider-configuration-section.astro",
  "src/components/guides/ccs/ccs-decision-tree-section.astro",
  "src/components/guides/ccs/ccs-features-and-integration-section.astro",
  "src/components/guides/ccs/ccs-cheatsheet-section.astro",
  "src/components/guides/ccs/ccs-workflows-section.astro",
  "src/components/guides/ccs/ccs-dashboard-section.astro",
  "src/components/guides/ccs/ccs-dashboard-and-resources-section.astro",
  "src/data/guides/ccs-cheatsheet-data.ts",
  "src/data/guides/ccs-decision-tree-data.ts",
  "src/data/guides/ccs-decision-tree-types.ts",
  "src/i18n/en/ccs.ts",
  "src/i18n/vi/ccs.ts",
];

// Known explicit deprecation source files. Add to this list as upstream evolves.
const DEPRECATION_SIGNALS = [
  { file: "src/utils/glmt-deprecation.ts", profile: "glmt" },
  { file: "src/cursor/constants.ts", profile: "cursor", marker: "LEGACY_CURSOR_PROFILE_NAME" },
];

// CCS path patterns -> VividKit guide files affected. Order matters — first match wins.
// Most specific patterns first (e.g. command-catalog before generic commands/* glob).
const IMPACT_MAP = [
  // Profile templates → provider configuration
  {
    match: /^config\/base-.+\.settings\.json$/,
    category: "profile-templates",
    files: [
      "src/components/guides/ccs/ccs-provider-configuration-section.astro",
      "src/i18n/en/ccs.ts",
      "src/i18n/vi/ccs.ts",
    ],
  },
  // CLI surface — single source of truth for command shape
  {
    match: /^src\/commands\/command-catalog\.ts$/,
    category: "cli-surface",
    files: [
      "src/components/guides/CCSGuide.astro",
      "src/components/guides/ccs/ccs-decision-tree-section.astro",
      "src/components/guides/ccs/ccs-features-and-integration-section.astro",
      "src/components/guides/ccs/ccs-cheatsheet-section.astro",
      "src/data/guides/ccs-cheatsheet-data.ts",
      "src/data/guides/ccs-decision-tree-data.ts",
      "src/i18n/en/ccs.ts",
      "src/i18n/vi/ccs.ts",
    ],
  },
  // Deprecation signals
  {
    match: /^src\/utils\/.*deprecation.*\.ts$|^src\/cursor\/constants\.ts$|^src\/cliproxy\/(?:ai-providers\/)?managed-model-prefixes\.ts$/,
    category: "deprecation-utils",
    files: [
      "src/components/guides/ccs/ccs-provider-configuration-section.astro",
      "src/i18n/en/ccs.ts",
      "src/i18n/vi/ccs.ts",
    ],
  },
  // Provider capabilities (auth flows, callback ports, refresh ownership)
  {
    match: /^src\/cliproxy\/provider-capabilities\.ts$/,
    category: "provider-capabilities",
    files: [
      "src/components/guides/ccs/ccs-provider-configuration-section.astro",
      "src/components/guides/ccs/ccs-features-and-integration-section.astro",
      "src/i18n/en/ccs.ts",
      "src/i18n/vi/ccs.ts",
    ],
  },
  // Model prefix routing
  {
    match: /^src\/cliproxy\/ai-providers\/managed-model-prefixes\.ts$/,
    category: "model-routing",
    files: ["src/components/guides/ccs/ccs-provider-configuration-section.astro"],
  },
  // Config schemas — what `ccs config` exposes
  {
    match: /^src\/config\/schemas\//,
    category: "config-schemas",
    files: [
      "src/components/guides/ccs/ccs-features-and-integration-section.astro",
      "src/components/guides/ccs/ccs-provider-configuration-section.astro",
    ],
  },
  // Other config layer changes (loader, migration, feature-flags)
  {
    match: /^src\/config\//,
    category: "config-loader",
    files: ["src/components/guides/ccs/ccs-features-and-integration-section.astro"],
  },
  // Command implementations (per-command files)
  {
    match: /^src\/commands\//,
    category: "commands",
    files: [
      "src/components/guides/ccs/ccs-features-and-integration-section.astro",
      "src/components/guides/ccs/ccs-decision-tree-section.astro",
    ],
  },
  // Provider integrations
  {
    match: /^src\/copilot\//,
    category: "copilot",
    files: ["src/components/guides/ccs/ccs-provider-configuration-section.astro"],
  },
  {
    match: /^src\/cursor\//,
    category: "cursor-bridge",
    files: ["src/components/guides/ccs/ccs-provider-configuration-section.astro"],
  },
  {
    match: /^src\/cliproxy\//,
    category: "cliproxy",
    files: [
      "src/components/guides/ccs/ccs-provider-configuration-section.astro",
      "src/components/guides/ccs/ccs-features-and-integration-section.astro",
    ],
  },
  {
    match: /^src\/targets\//,
    category: "targets",
    files: [
      "src/components/guides/ccs/ccs-provider-configuration-section.astro",
      "src/components/guides/ccs/ccs-features-and-integration-section.astro",
    ],
  },
  // Architecture-core (request flow internals)
  {
    match: /^src\/dispatcher\/|^src\/proxy\/|^src\/channels\//,
    category: "architecture-core",
    files: ["src/components/guides/ccs/ccs-features-and-integration-section.astro"],
  },
  // Auth + account management
  {
    match: /^src\/auth\//,
    category: "auth",
    files: [
      "src/components/guides/ccs/ccs-provider-configuration-section.astro",
      "src/components/guides/ccs/ccs-features-and-integration-section.astro",
    ],
  },
  // Health, repair, and operational checks
  {
    match: /^src\/management\//,
    category: "management",
    files: ["src/components/guides/ccs/ccs-features-and-integration-section.astro"],
  },
  // Runtime aliases / alt entrypoints
  {
    match: /^src\/bin\//,
    category: "runtime-aliases",
    files: [
      "src/components/guides/ccs/ccs-provider-configuration-section.astro",
      "src/components/guides/ccs/ccs-features-and-integration-section.astro",
    ],
  },
  // Dashboard + UI
  {
    match: /^src\/web-server\/|^ui\//,
    category: "web-server-ui",
    files: ["src/components/guides/ccs/ccs-dashboard-and-resources-section.astro"],
  },
  {
    match: /^src\/api\/|^src\/services\//,
    category: "services",
    files: ["src/components/guides/ccs/ccs-features-and-integration-section.astro"],
  },
  // Install / docker / scripts
  {
    match: /^bin\/|^scripts\/|^docker\//,
    category: "install-bin",
    files: ["src/components/guides/ccs/ccs-overview-section.astro"],
  },
  // Package metadata
  {
    match: /^package\.json$/,
    category: "package",
    files: [
      "src/components/guides/ccs/ccs-overview-section.astro",
      "src/components/guides/ccs/ccs-cheatsheet-section.astro",
      "src/i18n/en/ccs.ts",
      "src/i18n/vi/ccs.ts",
    ],
  },
  {
    match: /^CHANGELOG\.md$/,
    category: "changelog",
    files: [
      "src/components/guides/ccs/ccs-overview-section.astro",
      "src/components/guides/ccs/ccs-features-and-integration-section.astro",
    ],
  },
  {
    match: /^(README\.md|docs\/)/,
    category: "docs",
    files: [
      "src/components/guides/ccs/ccs-overview-section.astro",
      "src/i18n/en/ccs.ts",
      "src/i18n/vi/ccs.ts",
    ],
  },
];

// --- Helpers ---
function findReferenceDir() {
  let dir = process.cwd();
  for (let i = 0; i < 8; i++) {
    const candidate = path.join(dir, "reference");
    if (fs.existsSync(path.join(candidate, "ccs"))) return candidate;
    if (fs.existsSync(candidate) && fs.existsSync(path.join(dir, "package.json"))) return candidate;
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return path.join(process.cwd(), "reference");
}

function sh(cmd, opts = {}) {
  return execSync(cmd, { encoding: "utf8", ...opts }).trim();
}

function safeShOrNull(cmd, opts = {}) {
  try {
    return sh(cmd, opts);
  } catch {
    return null;
  }
}

function readLastSync() {
  if (!fs.existsSync(LAST_SYNC_FILE)) return null;
  return fs.readFileSync(LAST_SYNC_FILE, "utf8").trim() || null;
}

function writeLastSync(sha) {
  fs.writeFileSync(LAST_SYNC_FILE, sha + "\n");
}

function fetchLatest() {
  if (!fs.existsSync(path.join(CCS_DIR, ".git"))) {
    console.log(`Cloning ${REPO_URL} -> ${CCS_DIR}`);
    fs.mkdirSync(path.dirname(CCS_DIR), { recursive: true });
    sh(`git clone --branch ${BRANCH} --depth 100 ${REPO_URL} "${CCS_DIR}"`);
    return;
  }
  console.log(`Fetching origin/${BRANCH}...`);
  sh(`git fetch origin ${BRANCH}`, { cwd: CCS_DIR });
  sh(`git reset --hard origin/${BRANCH}`, { cwd: CCS_DIR });
}

function currentHead() {
  return sh(`git rev-parse HEAD`, { cwd: CCS_DIR });
}

function diffNameStatus(fromSha, toSha) {
  const out = safeShOrNull(`git diff --name-status ${fromSha}..${toSha}`, { cwd: CCS_DIR });
  if (!out) return [];
  return out.split("\n").filter(Boolean).map((line) => {
    const [status, ...rest] = line.split(/\s+/);
    return { status, file: rest.join(" ") };
  });
}

function commitLog(fromSha, toSha) {
  const out = safeShOrNull(`git log --oneline --no-merges ${fromSha}..${toSha}`, { cwd: CCS_DIR });
  return out ? out.split("\n") : [];
}

function categorize(changes) {
  const buckets = {};
  const unmapped = [];
  for (const c of changes) {
    let matched = false;
    for (const rule of IMPACT_MAP) {
      if (rule.match.test(c.file)) {
        if (!buckets[rule.category]) buckets[rule.category] = { files: rule.files, changes: [] };
        buckets[rule.category].changes.push(c);
        matched = true;
        break;
      }
    }
    if (!matched) unmapped.push(c);
  }
  return { buckets, unmapped };
}

function readVersion(sha) {
  const out = safeShOrNull(`git show ${sha}:package.json`, { cwd: CCS_DIR });
  if (!out) return null;
  try {
    return JSON.parse(out).version || null;
  } catch {
    return null;
  }
}

function readChangelogTop(sha, lines = 30) {
  const out = safeShOrNull(`git show ${sha}:CHANGELOG.md`, { cwd: CCS_DIR });
  if (!out) return null;
  return out.split("\n").slice(0, lines).join("\n");
}

// --- Phase 0: inventory ---
function listSourceProfiles() {
  const configDir = path.join(CCS_DIR, "config");
  if (!fs.existsSync(configDir)) return [];
  return fs.readdirSync(configDir)
    .filter((f) => /^base-.+\.settings\.json$/.test(f))
    .map((f) => f.replace(/^base-/, "").replace(/\.settings\.json$/, ""))
    .sort();
}

function detectDeprecatedProfiles() {
  const flagged = new Map();
  const knownFiles = new Set();
  for (const sig of DEPRECATION_SIGNALS) {
    const fp = path.join(CCS_DIR, sig.file);
    if (fs.existsSync(fp)) {
      flagged.set(sig.profile, sig.file);
      knownFiles.add(sig.file);
    }
  }
  // Scan source for additional `is...Deprecated...` / `LEGACY_*_PROFILE_NAME` symbols.
  // Only flag NEW signal files not already covered by DEPRECATION_SIGNALS.
  const grepCmd = `grep -rEln "isDeprecated[A-Za-z]*Profile|LEGACY_[A-Z_]+_PROFILE_NAME" src/ 2>/dev/null || true`;
  const out = safeShOrNull(grepCmd, { cwd: CCS_DIR });
  if (out) {
    for (const file of out.split("\n").filter(Boolean)) {
      if (!knownFiles.has(file)) flagged.set(`signal:${file}`, file);
    }
  }
  return flagged;
}

function readGuideText() {
  let combined = "";
  for (const rel of GUIDE_FILES) {
    const fp = path.join(PROJECT_ROOT, rel);
    if (fs.existsSync(fp)) combined += "\n" + fs.readFileSync(fp, "utf8");
  }
  return combined;
}

// Brand-alias map: source profile code → guide brand label(s) commonly used in i18n.
const PROFILE_ALIASES = {
  mm: ["minimax"],
  km: ["kimi"],
  agy: ["antigravity"],
  ghcp: ["copilot", "github-copilot"],
};

// Precise profile-mention detection: avoid substring false-positives like
// "mm" matching every "command". Look for CCS-specific patterns only.
function isProfileMentioned(profile, text) {
  const candidates = [profile, ...(PROFILE_ALIASES[profile] || [])];
  return candidates.some((name) => {
    const esc = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const patterns = [
      new RegExp(`ccs\\.guide\\.${esc}_`, "i"),
      new RegExp(`\\bccs\\s+${esc}\\b`, "i"),
      new RegExp(`base-${esc}\\.settings`, "i"),
      new RegExp(`['"\`]${esc}['"\`]\\s*:`, ""),
      new RegExp(`provider:\\s*['"\`]${esc}['"\`]`, "i"),
      new RegExp(`>\\s*${esc}\\s*<`, "i"),
    ];
    return patterns.some((re) => re.test(text));
  });
}

function buildInventoryMatrix() {
  const profiles = listSourceProfiles();
  const deprecated = detectDeprecatedProfiles();
  const guideText = readGuideText();
  const rows = [];
  for (const p of profiles) {
    const inGuide = isProfileMentioned(p, guideText);
    const isDeprecated = deprecated.has(p);
    let status;
    if (isDeprecated) status = inGuide ? "deprecated (in guide — verify banner)" : "deprecated (missing)";
    else status = inGuide ? "documented" : "missing";
    rows.push({ profile: p, inGuide, isDeprecated, status });
  }
  return { profiles, deprecated, rows };
}

function listOrphans(profiles) {
  // Profiles mentioned in guide via classic profile-namespaced i18n shapes
  // but no longer shipping in source. Tight pattern to avoid false positives.
  const guideText = readGuideText();
  // Exclude known non-profile prefixes: workflow (ClaudeKit integration), solution, intro, feature
  const NON_PROFILE_PREFIXES = new Set(["workflow", "solution", "intro", "feature", "option"]);
  const PROFILE_KEY_SHAPE = /ccs\.guide\.([a-z][a-z0-9-]*)_(?:step\d+|api_key|paid_note|coding_plan|setup|browser_login|verify|logout|multiaccount)\b/gi;
  const guideProfiles = new Set();
  let m;
  while ((m = PROFILE_KEY_SHAPE.exec(guideText)) !== null) {
    const prefix = m[1].toLowerCase();
    if (!NON_PROFILE_PREFIXES.has(prefix)) guideProfiles.add(prefix);
  }
  const sourceSet = new Set(profiles.map((p) => p.toLowerCase()));
  // Reverse alias: guide brand → source profile code.
  const REVERSE_ALIAS = {};
  for (const [code, brands] of Object.entries(PROFILE_ALIASES)) {
    for (const b of brands) REVERSE_ALIAS[b] = code;
  }
  const orphans = [];
  for (const gp of guideProfiles) {
    const aliased = REVERSE_ALIAS[gp];
    if (sourceSet.has(gp) || (aliased && sourceSet.has(aliased))) continue;
    orphans.push(gp);
  }
  return orphans;
}

function renderInventoryReport({ rows, deprecated, orphans }) {
  const date = new Date().toISOString().split("T")[0];
  const lines = [];
  lines.push(`# CCS Guide Inventory — ${date}`);
  lines.push("");
  lines.push(`- **Source repo**: ${REPO_URL} (\`${BRANCH}\`)`);
  lines.push(`- **Local clone**: \`${path.relative(PROJECT_ROOT, CCS_DIR)}\``);
  lines.push(`- **Profiles in source**: ${rows.length}`);
  lines.push(`- **Documented in guide**: ${rows.filter((r) => r.inGuide && !r.isDeprecated).length}`);
  lines.push(`- **Missing from guide**: ${rows.filter((r) => !r.inGuide && !r.isDeprecated).length}`);
  lines.push(`- **Deprecated**: ${rows.filter((r) => r.isDeprecated).length}`);
  lines.push(`- **Orphan i18n keys** (profile no longer ships): ${orphans.length}`);
  lines.push("");

  lines.push("## Profile Coverage Matrix");
  lines.push("");
  lines.push("| Profile | In Guide | Deprecated | Status | Suggestion |");
  lines.push("|---------|----------|------------|--------|------------|");
  for (const r of rows) {
    let suggestion = "—";
    if (!r.inGuide && !r.isDeprecated) {
      suggestion = "ADD provider block + i18n keys (EN + VI)";
    } else if (r.isDeprecated && r.inGuide) {
      suggestion = "ADD deprecation banner / migration tip";
    } else if (r.isDeprecated && !r.inGuide) {
      suggestion = "OK if intentionally hidden; else add historical note";
    }
    lines.push(`| \`${r.profile}\` | ${r.inGuide ? "yes" : "no"} | ${r.isDeprecated ? "yes" : "no"} | ${r.status} | ${suggestion} |`);
  }
  lines.push("");

  if (deprecated.size) {
    lines.push("## Deprecation Signals Detected");
    lines.push("");
    for (const [profile, file] of deprecated.entries()) {
      lines.push(`- \`${profile}\` → \`${file}\``);
    }
    lines.push("");
  }

  if (orphans.length) {
    lines.push("## Orphan i18n References");
    lines.push("");
    lines.push("Profiles referenced in `src/i18n/{en,vi}/ccs.ts` keys but no `base-*.settings.json` in source:");
    lines.push("");
    for (const o of orphans) lines.push(`- \`${o}\` — REMOVE i18n keys + provider block`);
    lines.push("");
  }

  lines.push("## Audited Guide Files");
  lines.push("");
  for (const f of GUIDE_FILES) lines.push(`- \`${f}\``);
  lines.push("");

  lines.push("## Next Steps");
  lines.push("");
  lines.push("- Run `--check` or `--report` to layer git-diff change detection on top of this baseline.");
  lines.push("- Run `--sync` to fetch latest upstream and update the marker.");
  lines.push("");

  return lines.join("\n");
}

function saveInventory(content) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  const date = new Date().toISOString().split("T")[0];
  const file = path.join(REPORTS_DIR, `${date}-ccs-inventory.md`);
  fs.writeFileSync(file, content);
  return file;
}

// --- Diff-mode proposals ---
function listProfileFileChanges(changes, status) {
  return changes
    .filter((c) => c.status === status && /^config\/base-.+\.settings\.json$/.test(c.file))
    .map((c) => c.file.replace(/^config\/base-/, "").replace(/\.settings\.json$/, ""));
}

function buildProposals({ fromSha, toSha, changes, buckets, inventory }) {
  const proposals = [];
  const oldVer = readVersion(fromSha);
  const newVer = readVersion(toSha);
  if (oldVer && newVer && oldVer !== newVer) {
    proposals.push(
      `**Version bump** \`${oldVer}\` → \`${newVer}\`: refresh version badge in \`ccs-overview-section.astro\` + i18n install snippets.`
    );
  }
  const added = listProfileFileChanges(changes, "A");
  if (added.length) {
    proposals.push(
      `**New profiles** (${added.length}): ${added.map((p) => `\`${p}\``).join(", ")} — add provider block in \`ccs-provider-configuration-section.astro\` + \`ccs.guide.<name>_*\` i18n keys (EN + VI).`
    );
  }
  const removed = listProfileFileChanges(changes, "D");
  if (removed.length) {
    proposals.push(
      `**Removed profiles** (${removed.length}): ${removed.map((p) => `\`${p}\``).join(", ")} — purge provider block + orphan i18n keys. Cross-check commit log for renames before deleting.`
    );
  }
  if (buckets["deprecation-utils"]) {
    proposals.push(
      `**Deprecation signals changed** in \`src/utils/*deprecation*.ts\` / \`src/cursor/constants.ts\` / \`src/cliproxy/managed-model-prefixes.ts\` — re-run \`--inventory\` and add/remove deprecation banners accordingly.`
    );
  }
  if (buckets["web-server-ui"]) {
    proposals.push(
      `**Dashboard UI changes** — re-verify screenshots + copy in \`ccs-dashboard-and-resources-section.astro\`.`
    );
  }
  if (buckets["install-bin"]) {
    proposals.push(
      `**Installer / docker / scripts changes** — re-verify install commands in \`ccs-overview-section.astro\` and \`ccs-cheatsheet-section.astro\`.`
    );
  }
  if (buckets.changelog) {
    const top = readChangelogTop(toSha, 25);
    if (top) {
      proposals.push(
        `**CHANGELOG updated** — surface highlights in \`ccs-overview-section.astro\` "What's New":\n\n\`\`\`\n${top}\n\`\`\``
      );
    }
  }
  if (inventory) {
    if (inventory.rows.some((r) => !r.inGuide && !r.isDeprecated)) {
      const missing = inventory.rows.filter((r) => !r.inGuide && !r.isDeprecated).map((r) => r.profile);
      proposals.push(
        `**Inventory gap** — profiles ship in source but not in guide: ${missing.map((p) => `\`${p}\``).join(", ")}. Add provider blocks.`
      );
    }
    if (inventory.orphans && inventory.orphans.length) {
      proposals.push(
        `**Orphan i18n** — guide references vanished profiles: ${inventory.orphans.map((p) => `\`${p}\``).join(", ")}. Remove keys.`
      );
    }
  }
  return proposals;
}

function renderReport({ fromSha, toSha, commits, changes, buckets, unmapped, proposals, inventory }) {
  const date = new Date().toISOString().split("T")[0];
  const lines = [];
  lines.push(`# CCS Audit — ${date}`);
  lines.push("");
  lines.push(`- **Repo**: ${REPO_URL} (\`${BRANCH}\`)`);
  lines.push(`- **From**: \`${fromSha || "(no marker)"}\``);
  lines.push(`- **To**:   \`${toSha}\``);
  lines.push(`- **Commits**: ${commits.length}`);
  lines.push(`- **Files changed**: ${changes.length}`);
  lines.push("");

  if (inventory) {
    lines.push("## Phase 0 — Guide Coverage Snapshot");
    lines.push("");
    lines.push(`- Profiles in source: ${inventory.rows.length}`);
    lines.push(`- Documented: ${inventory.rows.filter((r) => r.inGuide && !r.isDeprecated).length}`);
    lines.push(`- Missing from guide: ${inventory.rows.filter((r) => !r.inGuide && !r.isDeprecated).length}`);
    lines.push(`- Deprecated: ${inventory.rows.filter((r) => r.isDeprecated).length}`);
    lines.push(`- Orphan i18n: ${inventory.orphans.length}`);
    lines.push("");
    lines.push("See companion inventory report for full matrix.");
    lines.push("");
  }

  if (commits.length) {
    lines.push("## Commits");
    lines.push("");
    lines.push("```");
    lines.push(commits.slice(0, 60).join("\n"));
    if (commits.length > 60) lines.push(`... (+${commits.length - 60} more)`);
    lines.push("```");
    lines.push("");
  }

  lines.push("## Changes by Category");
  lines.push("");
  for (const [cat, data] of Object.entries(buckets)) {
    lines.push(`### ${cat} (${data.changes.length})`);
    lines.push("");
    lines.push("**Changed files:**");
    data.changes.slice(0, 30).forEach((c) => lines.push(`- \`${c.status}\` ${c.file}`));
    if (data.changes.length > 30) lines.push(`- … (+${data.changes.length - 30} more)`);
    lines.push("");
    lines.push("**VividKit guide files to review:**");
    data.files.forEach((f) => lines.push(`- \`${f}\``));
    lines.push("");
  }

  if (unmapped.length) {
    lines.push(`## Unmapped Changes (${unmapped.length})`);
    lines.push("");
    unmapped.slice(0, 25).forEach((c) => lines.push(`- \`${c.status}\` ${c.file}`));
    if (unmapped.length > 25) lines.push(`- … (+${unmapped.length - 25} more)`);
    lines.push("");
  }

  lines.push("## Actionable Update Proposals");
  lines.push("");
  if (proposals.length === 0) {
    lines.push("_No high-confidence proposals — review categorized changes above._");
  } else {
    proposals.forEach((p) => lines.push(`- ${p}`));
  }
  lines.push("");

  return lines.join("\n");
}

function saveReport(content) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  const date = new Date().toISOString().split("T")[0];
  const file = path.join(REPORTS_DIR, `${date}-ccs-changelog.md`);
  fs.writeFileSync(file, content);
  return file;
}

// --- Multi-pass audit helpers (commands / architecture / capabilities / schemas) ---
function saveTo(name, content) {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  const date = new Date().toISOString().split("T")[0];
  const file = path.join(REPORTS_DIR, `${date}-ccs-${name}.md`);
  fs.writeFileSync(file, content);
  return file;
}

function reportMeta() {
  return { repo: REPO_URL };
}

function runCommandsPass(guideText) {
  const catalog = commandCatalog.parseCatalog(CCS_DIR);
  if (!catalog) return null;
  const coverage = commandCatalog.buildCoverage(catalog, guideText);
  const md = commandCatalog.renderReport(coverage, catalog, reportMeta());
  const file = saveTo("commands", md);
  return { catalog, coverage, file };
}

function runArchitecturePass(guideText) {
  const subs = architecture.enumerateSubsystems(CCS_DIR);
  const coverage = architecture.buildCoverage(subs, guideText);
  const md = architecture.renderReport(coverage, reportMeta());
  const file = saveTo("architecture", md);
  return { subsystems: subs, coverage, file };
}

function runCapabilitiesPass(profilesShipped, guideText) {
  const parsed = capabilities.parseCapabilities(CCS_DIR);
  const modelPrefixes = capabilities.parseModelPrefixes(CCS_DIR);
  const matrix = capabilities.buildMatrix(parsed, modelPrefixes, profilesShipped, guideText);
  const md = capabilities.renderReport(matrix, parsed, modelPrefixes, reportMeta());
  const file = saveTo("capabilities", md);
  return { parsed, modelPrefixes, matrix, file };
}

function runSchemasPass(guideText) {
  const names = schemas.listSchemas(CCS_DIR);
  const items = names.map((n) => schemas.scanSchema(CCS_DIR, n));
  const coverage = schemas.buildCoverage(items, guideText);
  const md = schemas.renderReport(coverage, reportMeta());
  const file = saveTo("schemas", md);
  return { schemas: items, coverage, file };
}

// --- Per-provider snapshot ---
function loadEditorial() {
  if (!fs.existsSync(EDITORIAL_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(EDITORIAL_FILE, "utf8"));
  } catch (err) {
    console.warn(`⚠️  Failed to parse ${path.relative(PROJECT_ROOT, EDITORIAL_FILE)}: ${err.message}`);
    return {};
  }
}

function deriveAuthMode(profile, env) {
  if (AUTH_MODE_OVERRIDES[profile]) return AUTH_MODE_OVERRIDES[profile];
  const token = env.ANTHROPIC_AUTH_TOKEN || "";
  const baseUrl = env.ANTHROPIC_BASE_URL || "";
  const isInternal = /127\.0\.0\.1|localhost/.test(baseUrl);
  if (token === UPSTREAM_FACTS.internalApiKey && isInternal) return "cliproxy-managed-oauth";
  if (/YOUR_.*_KEY_HERE|<your_api_key>/i.test(token)) return "api-key";
  return "unknown";
}

function deriveBaseUrlClass(env) {
  const url = env.ANTHROPIC_BASE_URL || "";
  if (/127\.0\.0\.1|localhost/.test(url)) return "internal-cliproxy";
  if (url) return "external-direct";
  return "unknown";
}

function readProfileEnv(profile) {
  const fp = path.join(CCS_DIR, "config", `base-${profile}.settings.json`);
  if (!fs.existsSync(fp)) return {};
  try {
    const data = JSON.parse(fs.readFileSync(fp, "utf8"));
    return data.env || {};
  } catch {
    return {};
  }
}

function buildSnapshot() {
  const ccsPkgPath = path.join(CCS_DIR, "package.json");
  let pkgName = null;
  let pkgVersion = null;
  if (fs.existsSync(ccsPkgPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(ccsPkgPath, "utf8"));
      pkgName = pkg.name || null;
      pkgVersion = pkg.version || null;
    } catch {}
  }
  const editorial = loadEditorial();
  const profiles = listSourceProfiles();
  const deprecated = detectDeprecatedProfiles();
  const providers = {};
  for (const p of profiles) {
    const env = readProfileEnv(p);
    const ed = editorial[p] || {};
    providers[p] = {
      settingsFile: `config/base-${p}.settings.json`,
      env,
      authMode: deriveAuthMode(p, env),
      baseUrlClass: deriveBaseUrlClass(env),
      runtimeAdapter: RUNTIME_ADAPTER_MAP[p] || "src/cliproxy/",
      deprecation: deprecated.has(p) ? { file: deprecated.get(p) } : null,
      setupCommands: Array.isArray(ed.setupCommands) ? ed.setupCommands : [],
      caveats: Array.isArray(ed.caveats) ? ed.caveats : [],
    };
  }
  return {
    _meta: {
      ccsPackageName: pkgName,
      ccsVersion: pkgVersion,
      cliproxyDefaultPort: UPSTREAM_FACTS.cliproxyDefaultPort,
      internalApiKey: UPSTREAM_FACTS.internalApiKey,
      lastSyncSha: safeShOrNull(`git rev-parse HEAD`, { cwd: CCS_DIR }),
      generatedAt: new Date().toISOString(),
    },
    providers,
  };
}

function saveSnapshot(snapshot) {
  fs.mkdirSync(REFERENCE_DIR, { recursive: true });
  fs.writeFileSync(SNAPSHOT_FILE, JSON.stringify(snapshot, null, 2) + "\n");
  return SNAPSHOT_FILE;
}

// Path to single-source-of-truth file holding CCS_SYNCED_VERSION / CCS_SYNCED_DATE
// + structured cheatsheet command catalog.
const CHEATSHEET_DATA_FILE = "src/data/guides/ccs-cheatsheet-data.ts";

// Extract the set of root command names appearing in the cheatsheet's structured
// `cmd:` literals. Captures both `ccs <name>` and `ccs --<name>` forms (some
// commands like `version` are conventionally invoked via flag). Skips binary
// aliases (ccs-droid, ccsd, ...) since those are runtime variants, not roots.
function extractCheatsheetRootCommands() {
  const fp = path.join(PROJECT_ROOT, CHEATSHEET_DATA_FILE);
  if (!fs.existsSync(fp)) return null;
  const src = fs.readFileSync(fp, "utf8");
  const cmds = new Set();
  const re = /cmd:\s*["']ccs\s+(?:--)?([a-z][a-z0-9-]*)/gi;
  let m;
  while ((m = re.exec(src)) !== null) {
    cmds.add(m[1]);
  }
  return cmds;
}

// Patch CCS_SYNCED_VERSION + CCS_SYNCED_DATE in the cheatsheet data file so the
// VK guide always reflects the just-synced upstream package version + date.
// Returns { changed, version, date } or null if file missing.
function bumpCheatsheetConstants(snapshot) {
  const fp = path.join(PROJECT_ROOT, CHEATSHEET_DATA_FILE);
  if (!fs.existsSync(fp)) return null;
  let src = fs.readFileSync(fp, "utf8");
  // Local date (not UTC) — VK guide displays this to users, so should match
  // operator's wall-clock calendar.
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const ver = snapshot._meta.ccsVersion;
  let changed = false;
  if (ver) {
    const verRe = /(CCS_SYNCED_VERSION\s*=\s*")([^"]+)(")/;
    const vm = src.match(verRe);
    if (vm && vm[2] !== ver) {
      src = src.replace(verRe, `$1${ver}$3`);
      changed = true;
    }
  }
  const dateRe = /(CCS_SYNCED_DATE\s*=\s*")([^"]+)(")/;
  const dm = src.match(dateRe);
  if (dm && dm[2] !== today) {
    src = src.replace(dateRe, `$1${today}$3`);
    changed = true;
  }
  if (changed) fs.writeFileSync(fp, src);
  return { changed, version: ver, date: today };
}

// --- Drift validation ---
// Compares snapshot facts against literals in VividKit guide source files and
// returns an array of drift issues. Empty array == no drift.
function validateAgainstVKSources(snapshot) {
  const issues = [];
  const expectedPkg = snapshot._meta.ccsPackageName;
  const expectedPort = String(snapshot._meta.cliproxyDefaultPort);

  // 1. Package name drift: every "npm install -g <pkg>/ccs" must match upstream.
  const pkgScanFiles = [
    "src/components/guides/ccs/ccs-overview-section.astro",
    "src/components/guides/ccs/ccs-cheatsheet-section.astro",
    "src/data/guides/ccs-cheatsheet-data.ts",
    "src/components/guides/ccs/ccs-provider-configuration-section.astro",
    "src/data/guides/ccs-decision-tree-data.ts",
    "src/i18n/en/ccs.ts",
    "src/i18n/vi/ccs.ts",
  ];
  if (expectedPkg) {
    const re = /npm install -g (@?[a-z0-9_/-]+)/gi;
    for (const rel of pkgScanFiles) {
      const fp = path.join(PROJECT_ROOT, rel);
      if (!fs.existsSync(fp)) continue;
      const text = fs.readFileSync(fp, "utf8");
      let m;
      while ((m = re.exec(text)) !== null) {
        const found = m[1];
        if (found.endsWith("/ccs") && found !== expectedPkg) {
          issues.push(`${rel}: found "${found}" — upstream package is "${expectedPkg}"`);
        }
      }
    }
  }

  // 2. CLIProxy port drift: any hardcoded "8XXX" port near "cliproxy" / "ANTHROPIC_BASE_URL"
  // that doesn't match upstream port → flag.
  const portScanFile = path.join(PROJECT_ROOT, "src/components/guides/ccs/ccs-provider-configuration-section.astro");
  if (fs.existsSync(portScanFile)) {
    const text = fs.readFileSync(portScanFile, "utf8");
    const portRe = /127\.0\.0\.1:(\d+)/g;
    let m;
    const seen = new Set();
    while ((m = portRe.exec(text)) !== null) {
      const port = m[1];
      if (port !== expectedPort && !seen.has(port)) {
        issues.push(`ccs-provider-configuration-section.astro: 127.0.0.1:${port} ≠ upstream cliproxy port ${expectedPort}`);
        seen.add(port);
      }
    }
  }

  // 3. External-direct provider URL drift: every external BASE_URL should appear in provider section.
  const provFile = path.join(PROJECT_ROOT, "src/components/guides/ccs/ccs-provider-configuration-section.astro");
  if (fs.existsSync(provFile)) {
    const text = fs.readFileSync(provFile, "utf8");
    for (const [name, prov] of Object.entries(snapshot.providers)) {
      if (prov.deprecation) continue;
      if (prov.baseUrlClass !== "external-direct") continue;
      const url = prov.env.ANTHROPIC_BASE_URL;
      if (url && !text.includes(url)) {
        issues.push(`ccs-provider-configuration-section.astro: missing BASE_URL "${url}" for profile "${name}"`);
      }
    }
  }

  // 4. CCS_SYNCED_VERSION drift: pinned version in cheatsheet data must equal upstream package.json version.
  const expectedVer = snapshot._meta.ccsVersion;
  const cheatsheetFp = path.join(PROJECT_ROOT, CHEATSHEET_DATA_FILE);
  if (expectedVer && fs.existsSync(cheatsheetFp)) {
    const text = fs.readFileSync(cheatsheetFp, "utf8");
    const m = text.match(/CCS_SYNCED_VERSION\s*=\s*"([^"]+)"/);
    if (m && m[1] !== expectedVer) {
      issues.push(
        `${CHEATSHEET_DATA_FILE}: CCS_SYNCED_VERSION="${m[1]}" ≠ upstream "${expectedVer}" (run --sync to bump)`
      );
    }
  }

  return issues;
}

// Drift check: every public root command in upstream catalog must appear as a
// `cmd: "ccs <name>"` entry in the cheatsheet data file.
function validateCheatsheetCoverage(catalog) {
  const issues = [];
  if (!catalog) return issues;
  const documented = extractCheatsheetRootCommands();
  if (!documented) return issues;
  const missing = catalog.rootCommands.filter(
    (c) => c.visibility === "public" && !documented.has(c.name)
  );
  if (missing.length) {
    issues.push(
      `cheatsheet: ${missing.length} public root command(s) missing from ${CHEATSHEET_DATA_FILE}: ${missing.map((c) => c.name).join(", ")}`
    );
  }
  return issues;
}

// --- Main ---
function pickMode(args) {
  if (args.includes("--validate")) return "validate";
  if (args.includes("--inventory")) return "inventory";
  if (args.includes("--commands")) return "commands";
  if (args.includes("--architecture")) return "architecture";
  if (args.includes("--capabilities")) return "capabilities";
  if (args.includes("--schemas")) return "schemas";
  if (args.includes("--sync")) return "sync";
  if (args.includes("--report")) return "report";
  return "check";
}

function aggregateDrift(snapshot, guideText, profilesShipped) {
  const issues = [];
  // Existing checks (package name / port / external base URLs)
  for (const it of validateAgainstVKSources(snapshot)) issues.push(it);

  // Commands pass drift
  const cat = commandCatalog.parseCatalog(CCS_DIR);
  if (cat) {
    const cov = commandCatalog.buildCoverage(cat, guideText);
    for (const it of commandCatalog.validateDrift(cov)) issues.push(it);
    // Structured cheatsheet coverage (parses ccs-cheatsheet-data.ts directly)
    for (const it of validateCheatsheetCoverage(cat)) issues.push(it);
  }

  // Architecture pass drift
  const subs = architecture.enumerateSubsystems(CCS_DIR);
  const subCov = architecture.buildCoverage(subs, guideText);
  for (const it of architecture.validateDrift(subCov)) issues.push(it);

  // Capabilities pass drift
  const parsed = capabilities.parseCapabilities(CCS_DIR);
  const modelPrefixes = capabilities.parseModelPrefixes(CCS_DIR);
  const matrix = capabilities.buildMatrix(parsed, modelPrefixes, profilesShipped, guideText);
  for (const it of capabilities.validateDrift(matrix)) issues.push(it);

  // Schemas pass drift
  const schemaNames = schemas.listSchemas(CCS_DIR);
  const schemaItems = schemaNames.map((n) => schemas.scanSchema(CCS_DIR, n));
  const schemaCov = schemas.buildCoverage(schemaItems, guideText);
  for (const it of schemas.validateDrift(schemaCov)) issues.push(it);

  return issues;
}

function main() {
  const args = process.argv.slice(2);
  const mode = pickMode(args);
  const noFetch = args.includes("--no-fetch");

  if (!fs.existsSync(CCS_DIR) && !noFetch) fetchLatest();
  if (mode === "sync" && !noFetch) fetchLatest();

  if (!fs.existsSync(path.join(CCS_DIR, ".git"))) {
    console.error(`Error: ${CCS_DIR} is not a git repo. Run with --sync (without --no-fetch) to clone.`);
    process.exit(1);
  }

  // Pre-load shared context (used by multiple passes).
  const guideText = readGuideText();
  const profilesShipped = listSourceProfiles();

  if (mode === "validate") {
    const snapshot = buildSnapshot();
    const issues = aggregateDrift(snapshot, guideText, profilesShipped);
    if (issues.length === 0) {
      console.log(`✅ Validate: no drift between VK sources and upstream.`);
      console.log(
        `   ccs ${snapshot._meta.ccsPackageName}@${snapshot._meta.ccsVersion} | ${Object.keys(snapshot.providers).length} profiles`
      );
      return;
    }
    console.error(`❌ Validate: ${issues.length} drift issue(s) detected.\n`);
    for (const it of issues) console.error(`  - ${it}`);
    console.error(`\nFix VividKit sources to match upstream, or update editorial overlay.`);
    process.exit(1);
  }

  // Standalone single-pass modes — no marker / diff required.
  if (mode === "commands") {
    const out = runCommandsPass(guideText);
    if (!out) {
      console.error(`Error: cannot parse ${commandCatalog.parseCatalog ? "" : ""}command-catalog.ts`);
      process.exit(1);
    }
    const missing = out.coverage.rootCommands.filter((c) => c.visibility === "public" && !c.documented);
    console.log(`📋 Commands: ${out.file}`);
    console.log(
      `Root: ${out.coverage.rootCommands.length} | Public missing: ${missing.length} | Topics: ${out.coverage.helpTopics.length} | Aliases: ${out.coverage.aliases.length}`
    );
    return;
  }

  if (mode === "architecture") {
    const out = runArchitecturePass(guideText);
    const userVisible = out.coverage.filter((s) => s.userVisible);
    const missing = userVisible.filter((s) => !s.documented);
    console.log(`📋 Architecture: ${out.file}`);
    console.log(
      `Subsystems: ${out.coverage.length} | User-visible: ${userVisible.length} | Missing: ${missing.length}`
    );
    return;
  }

  if (mode === "capabilities") {
    const out = runCapabilitiesPass(profilesShipped, guideText);
    const missing = out.matrix.filter((r) => !r.inGuide);
    console.log(`📋 Capabilities: ${out.file}`);
    console.log(
      `CLIProxy providers: ${out.matrix.length} | Missing in guide: ${missing.length}`
    );
    return;
  }

  if (mode === "schemas") {
    const out = runSchemasPass(guideText);
    const missing = out.coverage.filter((s) => s.keywords.length > 0 && !s.documented);
    console.log(`📋 Schemas: ${out.file}`);
    console.log(`Schemas: ${out.coverage.length} | User-facing missing: ${missing.length}`);
    return;
  }

  // Inventory pass — always available, doesn't need a marker.
  const inventoryRows = buildInventoryMatrix();
  const orphans = listOrphans(inventoryRows.profiles);
  const inventory = { ...inventoryRows, orphans };

  if (mode === "inventory") {
    const report = renderInventoryReport(inventory);
    const file = saveInventory(report);
    console.log(`📋 Inventory: ${file}`);
    console.log(
      `Profiles: ${inventory.rows.length} | Missing: ${inventory.rows.filter((r) => !r.inGuide && !r.isDeprecated).length} | Deprecated: ${inventory.rows.filter((r) => r.isDeprecated).length} | Orphans: ${inventory.orphans.length}`
    );
    return;
  }

  const head = currentHead();
  const lastSync = readLastSync();
  const fromSha = lastSync || `${head}~1`;

  if (lastSync === head && mode === "check") {
    console.log(`✅ Up to date — last sync ${head.slice(0, 8)} matches HEAD.`);
    return;
  }

  const changes = diffNameStatus(fromSha, head);
  const commits = commitLog(fromSha, head);
  const { buckets, unmapped } = categorize(changes);

  if (mode === "check") {
    console.log(`📋 CCS Changes`);
    console.log(`From: ${fromSha.slice(0, 8)} → To: ${head.slice(0, 8)}`);
    console.log(`Commits: ${commits.length} | Files changed: ${changes.length}`);
    console.log("");
    console.log("Categories:");
    for (const [cat, data] of Object.entries(buckets)) {
      console.log(`  - ${cat}: ${data.changes.length} files`);
    }
    if (unmapped.length) console.log(`  - (unmapped): ${unmapped.length} files`);
    console.log("");
    console.log(
      `Inventory baseline: ${inventory.rows.length} profiles | ${inventory.rows.filter((r) => !r.inGuide && !r.isDeprecated).length} missing | ${inventory.orphans.length} orphans`
    );
    console.log("");
    console.log(
      `More: --commands | --architecture | --capabilities | --schemas | --inventory | --report | --sync`
    );
    return;
  }

  // --report / --sync: write all passes (separate files), plus diff + inventory.
  const proposals = buildProposals({ fromSha, toSha: head, changes, buckets, inventory });
  const diffReport = renderReport({
    fromSha,
    toSha: head,
    commits,
    changes,
    buckets,
    unmapped,
    proposals,
    inventory,
  });
  const diffFile = saveReport(diffReport);
  console.log(`📄 Diff report:    ${diffFile}`);

  const invFile = saveInventory(renderInventoryReport(inventory));
  console.log(`📋 Inventory:      ${invFile}`);

  const cmdsOut = runCommandsPass(guideText);
  if (cmdsOut) console.log(`📋 Commands:       ${cmdsOut.file}`);

  const archOut = runArchitecturePass(guideText);
  console.log(`📋 Architecture:   ${archOut.file}`);

  const capOut = runCapabilitiesPass(profilesShipped, guideText);
  console.log(`📋 Capabilities:   ${capOut.file}`);

  const schOut = runSchemasPass(guideText);
  console.log(`📋 Schemas:        ${schOut.file}`);

  if (mode === "sync") {
    writeLastSync(head);
    console.log(`✅ Marker updated: ${LAST_SYNC_FILE} → ${head.slice(0, 8)}`);
    const snapshot = buildSnapshot();
    const snapFile = saveSnapshot(snapshot);
    console.log(`📦 Snapshot artifact: ${snapFile}`);
    // Auto-bump CCS_SYNCED_VERSION + CCS_SYNCED_DATE in cheatsheet data file
    // so the VK guide pins always reflect the just-synced upstream package + date.
    const bump = bumpCheatsheetConstants(snapshot);
    if (bump && bump.changed) {
      console.log(
        `🔄 Bumped ${CHEATSHEET_DATA_FILE}: CCS_SYNCED_VERSION=${bump.version}, CCS_SYNCED_DATE=${bump.date}`
      );
    } else if (bump) {
      console.log(`✔  ${CHEATSHEET_DATA_FILE} pins already match (v${bump.version}, ${bump.date})`);
    }
    const driftIssues = aggregateDrift(snapshot, guideText, profilesShipped);
    if (driftIssues.length) {
      console.log(`⚠️  ${driftIssues.length} drift issue(s) detected vs VK sources:`);
      for (const it of driftIssues) console.log(`  - ${it}`);
    }
  }
}

main();

#!/usr/bin/env node

/**
 * ClaudeKit Changelog Sync - Detect changes since last VividKit docs update.
 * Supports both Engineer Kit (stable/beta) and Marketing Kit (marketing-stable/marketing-beta).
 *
 * Usage: node detect-changes.cjs [--check | --report | --sync] [--branch stable|beta|both] [--kit engineer|marketing|all]
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const { analyzeGuideImpact, formatActionableReport } = require("./semantic-guide-analyzer.cjs");

// --- Config ---
const REFERENCE_DIR = findReferenceDir();
const LAST_SYNC_FILE = path.join(REFERENCE_DIR, ".last-sync");
const REPORTS_DIR = path.join(REFERENCE_DIR, "changelog-reports");

// Kit definitions: directory names and Makefile targets
const KITS = {
  engineer: {
    label: "Engineer Kit",
    stable: "stable",
    beta: "beta",
    fetchStable: "fetch-stable",
    fetchBeta: "fetch-beta",
  },
  marketing: {
    label: "Marketing Kit",
    stable: "marketing-stable",
    beta: "marketing-beta",
    fetchStable: "mkt-fetch-stable",
    fetchBeta: "mkt-fetch-beta",
  },
};

// Impact mapping: ClaudeKit path patterns -> VividKit guide files affected
const IMPACT_MAP = {
  ".claude/skills/": [
    "src/data/guides/workflows.ts",
    "src/components/guides/CommandsGuide.astro",
    "src/components/guides/WorkflowsGuide.astro",
  ],
  ".claude/agents/": [
    "src/data/guides/workflows.ts",
    "src/components/guides/WorkflowsGuide.astro",
  ],
  ".claude/hooks/": [
    "src/components/guides/CustomHooksGuide.astro",
    "src/data/guides/workflows.ts",
    "src/components/guides/session-recovery/session-recovery-hero-and-auto-state.astro",
    "src/i18n/en/session-recovery.ts",
    "src/i18n/vi/session-recovery.ts",
  ],
  ".claude/rules/": [
    "src/components/guides/WorkflowsGuide.astro",
    "src/components/guides/WhatIsClaudeKitGuide.astro",
  ],
  ".claude/settings.json": [
    "src/components/guides/PermissionsGuide.astro",
    "src/components/guides/CLIGuide.astro",
  ],
  ".claude/schemas/": ["src/components/guides/IDEConfigGuide.astro"],
  ".claude/commands/": [
    "src/data/commands-engineer-kit.ts",
    "src/data/commands-marketing-kit.ts",
    "src/components/guides/CommandsGuide.astro",
  ],
  ".claude/workflows/": [
    "src/components/guides/WorkflowsGuide.astro",
  ],
  "CLAUDE.md": [
    "src/components/guides/WhatIsClaudeKitGuide.astro",
    "src/components/guides/CLIGuide.astro",
  ],
};

// --- Helpers ---

function findReferenceDir() {
  let dir = process.cwd();
  for (let i = 0; i < 10; i++) {
    const candidate = path.join(dir, "reference");
    if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
      return candidate;
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return path.join(process.cwd(), "reference");
}

function run(cmd, cwd) {
  try {
    return execSync(cmd, { cwd, encoding: "utf8", timeout: 30000 }).trim();
  } catch {
    return "";
  }
}

function getLastSync() {
  if (!fs.existsSync(LAST_SYNC_FILE)) {
    return { stable: null, beta: null, "marketing-stable": null, "marketing-beta": null, date: null };
  }
  try {
    const data = JSON.parse(fs.readFileSync(LAST_SYNC_FILE, "utf8"));
    // Ensure marketing keys exist for backward compatibility
    if (!data["marketing-stable"]) data["marketing-stable"] = null;
    if (!data["marketing-beta"]) data["marketing-beta"] = null;
    return data;
  } catch {
    return { stable: null, beta: null, "marketing-stable": null, "marketing-beta": null, date: null };
  }
}

function saveLastSync(data) {
  fs.writeFileSync(LAST_SYNC_FILE, JSON.stringify(data, null, 2));
}

function getCurrentSha(dirName) {
  const dir = path.join(REFERENCE_DIR, dirName);
  if (!fs.existsSync(path.join(dir, ".git"))) return null;
  return run("git rev-parse HEAD", dir);
}

function getCurrentVersion(dirName) {
  const dir = path.join(REFERENCE_DIR, dirName);
  if (!fs.existsSync(path.join(dir, ".git"))) return "not cloned";
  return run("git log --oneline -1", dir);
}

function getFileCount(dirName) {
  const dir = path.join(REFERENCE_DIR, dirName);
  if (!fs.existsSync(dir)) return 0;
  const output = run("find . -not -path '*/\\.git/*' -type f | wc -l", dir);
  return parseInt(output) || 0;
}

function categorizeFile(filePath) {
  // Support both .claude/ and claude/ paths (post-rename)
  if (filePath.includes("/skills/") || filePath.startsWith("claude/skills/")) return "skills";
  if (filePath.includes("/agents/") || filePath.startsWith("claude/agents/")) return "agents";
  if (filePath.includes("/hooks/") || filePath.startsWith("claude/hooks/")) return "hooks";
  if (filePath.includes("/rules/") || filePath.startsWith("claude/rules/")) return "rules";
  if (filePath.includes("/schemas/") || filePath.startsWith("claude/schemas/")) return "schemas";
  if (filePath.includes("/scripts/") || filePath.startsWith("claude/scripts/")) return "scripts";
  if (filePath.includes("/commands/") || filePath.startsWith("claude/commands/")) return "commands";
  if (filePath.includes("/workflows/") || filePath.startsWith("claude/workflows/")) return "workflows";
  if (filePath.includes("CLAUDE.md")) return "config";
  if (filePath.includes("settings.json") || filePath.includes("settings")) return "config";
  if (filePath.includes(".ck.json") || filePath.includes("metadata")) return "config";
  if (filePath.includes("docs/")) return "docs";
  if (filePath.includes("tests/") || filePath.includes("__tests__/")) return "tests";
  return "other";
}

function getDiffFiles(dirName) {
  const branchDir = path.join(REFERENCE_DIR, dirName);
  const lastSync = getLastSync();
  const lastSha = lastSync[dirName];

  if (!lastSha) {
    const output = run("find . -not -path '*/\\.git/*' -type f", branchDir);
    return output
      ? output.split("\n").map((f) => ({ file: f.replace("./", ""), status: "A" }))
      : [];
  }

  run("git fetch --unshallow origin 2>/dev/null || true", branchDir);
  const output = run(`git diff --name-status ${lastSha}..HEAD`, branchDir);
  if (!output) return [];

  return output.split("\n").map((line) => {
    const [status, ...fileParts] = line.split("\t");
    return { file: fileParts.join("\t"), status: status.charAt(0) };
  });
}

function getFileDiff(dirName, filePath, lastSha) {
  if (!lastSha) return null;
  const branchDir = path.join(REFERENCE_DIR, dirName);
  return run(`git diff ${lastSha}..HEAD -- "${filePath}"`, branchDir) || null;
}

function getFileContentSummary(dirName, filePath, maxLines = 50) {
  const fullPath = path.join(REFERENCE_DIR, dirName, filePath);
  if (!fs.existsSync(fullPath)) return null;
  try {
    const content = fs.readFileSync(fullPath, "utf8");
    const lines = content.split("\n");
    if (lines.length <= maxLines) return content;
    return lines.slice(0, maxLines).join("\n") + `\n... (${lines.length - maxLines} more lines)`;
  } catch {
    return null;
  }
}

function isKeyFile(filePath) {
  return (
    filePath.endsWith("SKILL.md") ||
    (filePath.endsWith(".md") && filePath.includes("references/")) ||
    (filePath.includes("agents/") && filePath.endsWith(".md"))
  );
}

function extractSkillInfo(content) {
  const lines = content.split("\n");
  const result = [];
  let inSection = null;
  let sectionContent = [];

  for (const line of lines) {
    if (line.startsWith("# ")) result.push(line);
    if (result.length === 1 && !inSection && line.trim() && !line.startsWith("#")) {
      result.push(line);
    }
    if (line.match(/^##\s+(Usage|Arguments|Modes|Options|Examples)/i)) {
      if (inSection && sectionContent.length) {
        result.push(...sectionContent.slice(0, 10));
      }
      inSection = line;
      sectionContent = [line];
    } else if (inSection) {
      if (line.startsWith("## ")) {
        result.push(...sectionContent.slice(0, 10));
        inSection = null;
        sectionContent = [];
      } else {
        sectionContent.push(line);
      }
    }
  }
  if (inSection && sectionContent.length) {
    result.push(...sectionContent.slice(0, 10));
  }
  return result.join("\n");
}

function getStableBetaDiff(stableDir, betaDir) {
  const stablePath = path.join(REFERENCE_DIR, stableDir);
  const betaPath = path.join(REFERENCE_DIR, betaDir);
  if (!fs.existsSync(stablePath) || !fs.existsSync(betaPath)) return [];

  const output = run(`diff -rq "${stablePath}" "${betaPath}" --exclude='.git'`, REFERENCE_DIR);
  if (!output) return [];

  const results = [];
  for (const line of output.split("\n")) {
    if (line.startsWith("Only in") && line.includes(betaDir)) {
      const match = line.match(/Only in (.+): (.+)/);
      if (match) {
        const relPath = match[1].replace(betaPath, "").replace(/^\//, "") + "/" + match[2];
        results.push({ file: relPath, status: "A" });
      }
    } else if (line.startsWith("Only in") && line.includes(stableDir)) {
      const match = line.match(/Only in (.+): (.+)/);
      if (match) {
        const relPath = match[1].replace(stablePath, "").replace(/^\//, "") + "/" + match[2];
        results.push({ file: relPath, status: "D" });
      }
    } else if (line.includes("differ")) {
      const match = line.match(/Files (.+) and (.+) differ/);
      if (match) {
        const relPath = match[1].replace(stablePath + "/", "");
        results.push({ file: relPath, status: "M" });
      }
    }
  }
  return results;
}

function buildImpactAnalysis(categories) {
  const impacted = new Set();
  for (const cat of Object.keys(categories)) {
    if (categories[cat].length === 0) continue;
    for (const [pattern, guides] of Object.entries(IMPACT_MAP)) {
      const patternCat = categorizeFile(pattern);
      if (patternCat === cat || pattern.includes(cat)) {
        guides.forEach((g) => impacted.add(g));
      }
    }
  }
  return [...impacted].sort();
}

// Resolve which directories to process based on kit + branch selection
function resolveTargets(kitNames, branchNames) {
  const targets = [];
  for (const kitName of kitNames) {
    const kit = KITS[kitName];
    if (!kit) continue;
    for (const branch of branchNames) {
      const dirName = kit[branch];
      const fetchTarget = branch === "stable" ? kit.fetchStable : kit.fetchBeta;
      targets.push({ kitName, kitLabel: kit.label, branch, dirName, fetchTarget });
    }
  }
  return targets;
}

// --- Commands ---

function cmdCheck(targets) {
  const lastSync = getLastSync();
  console.log("# ClaudeKit Changelog - Quick Check\n");
  console.log(`Last sync: ${lastSync.date || "never"}\n`);

  let currentKit = null;
  for (const t of targets) {
    if (t.kitLabel !== currentKit) {
      currentKit = t.kitLabel;
      console.log(`---\n## ${currentKit}\n`);
    }

    const version = getCurrentVersion(t.dirName);
    const sha = getCurrentSha(t.dirName);
    const lastSha = lastSync[t.dirName];
    const fileCount = getFileCount(t.dirName);

    console.log(`### ${t.branch}`);
    console.log(`  Version: ${version}`);
    console.log(`  Files: ${fileCount}`);
    console.log(`  Current SHA: ${sha ? sha.substring(0, 8) : "N/A"}`);
    console.log(`  Last sync SHA: ${lastSha ? lastSha.substring(0, 8) : "never"}`);
    console.log(`  Status: ${sha === lastSha ? "UP TO DATE" : "CHANGES DETECTED"}\n`);
  }
}

function cmdReport(targets) {
  const lastSync = getLastSync();
  const lines = [];

  lines.push("# ClaudeKit Changelog Report");
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Last sync: ${lastSync.date || "never"}`);
  lines.push("");

  const allImpacted = new Set();
  const allChangesByTarget = {};

  let currentKit = null;
  for (const t of targets) {
    if (t.kitLabel !== currentKit) {
      currentKit = t.kitLabel;
      lines.push(`---\n## ${currentKit}\n`);
    }

    const version = getCurrentVersion(t.dirName);
    lines.push(`### ${t.branch} (${version})\n`);

    const branchDir = path.join(REFERENCE_DIR, t.dirName);
    let diff;

    if (!lastSync[t.dirName]) {
      // First time — compare stable vs beta if same kit has both
      const kit = KITS[t.kitName];
      const peerBranch = t.branch === "beta" ? "stable" : "beta";
      const peerDir = kit[peerBranch];
      const peerTarget = targets.find((x) => x.kitName === t.kitName && x.branch === peerBranch);

      if (t.branch === "beta" && peerTarget) {
        diff = getStableBetaDiff(peerDir, t.dirName);
        lines.push("*Comparing against stable (first sync)*\n");
      } else {
        lines.push("*First sync - all files listed*\n");
        diff = getDiffFiles(t.dirName);
      }
    } else {
      diff = getDiffFiles(t.dirName);
    }

    // Categorize
    const categories = {};
    for (const d of diff) {
      const cat = categorizeFile(d.file);
      if (!categories[cat]) categories[cat] = [];
      categories[cat].push(d);
    }

    const statusLabel = { A: "Added", M: "Modified", D: "Removed" };
    const lastSha = lastSync[t.dirName];

    for (const [cat, files] of Object.entries(categories).sort()) {
      lines.push(`#### ${cat} (${files.length} changes)`);

      for (const f of files) {
        lines.push(`- [${statusLabel[f.status] || f.status}] ${f.file}`);

        if (isKeyFile(f.file)) {
          if (f.status === "A") {
            const content = getFileContentSummary(t.dirName, f.file, 40);
            if (content) {
              const extracted = f.file.endsWith("SKILL.md") ? extractSkillInfo(content) : content;
              if (extracted.trim()) {
                lines.push("", "```markdown", extracted, "```", "");
              }
            }
          } else if (f.status === "M" && lastSha) {
            const fileDiff = getFileDiff(t.dirName, f.file, lastSha);
            if (fileDiff && fileDiff.length < 2000) {
              lines.push("", "<details>", `<summary>View diff</summary>`, "", "```diff", fileDiff, "```", "", "</details>", "");
            } else if (fileDiff) {
              lines.push(`  *(diff too large: ${fileDiff.length} chars)*`);
            }
          }
        }
      }
      lines.push("");
    }

    // Per-kit impact
    const impacted = buildImpactAnalysis(categories);
    if (impacted.length > 0) {
      lines.push(`#### VividKit Guides Impact (${t.kitLabel} ${t.branch})`);
      for (const guide of impacted) {
        lines.push(`- [ ] ${guide}`);
        allImpacted.add(guide);
      }
      lines.push("");
    }

    // Store categorized changes for semantic analysis
    allChangesByTarget[t.dirName] = categories;
  }

  // Combined impact summary
  if (allImpacted.size > 0) {
    lines.push("---\n## Combined Impact Summary\n");
    for (const guide of [...allImpacted].sort()) {
      lines.push(`- [ ] ${guide}`);
    }
    lines.push("");
  }

  // Semantic guide analysis — actionable items per guide
  try {
    const projectRoot = path.resolve(REFERENCE_DIR, "..");
    const actionableItems = analyzeGuideImpact(projectRoot, REFERENCE_DIR, targets, allChangesByTarget);
    const actionableReport = formatActionableReport(actionableItems);
    if (actionableReport) {
      lines.push("---");
      lines.push(actionableReport);
    }
  } catch (err) {
    lines.push(`\n> Semantic analysis skipped: ${err.message}\n`);
  }

  const report = lines.join("\n");
  console.log(report);

  // Save report
  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const kitStr = [...new Set(targets.map((t) => t.kitName))].join("-");
  const branchStr = [...new Set(targets.map((t) => t.branch))].join("-");
  const reportPath = path.join(REPORTS_DIR, `${dateStr}-${kitStr}-${branchStr}-changelog.md`);
  fs.writeFileSync(reportPath, report);
  console.log(`\nReport saved: ${reportPath}`);

  return report;
}

function cmdSync(targets) {
  console.log("# Syncing reference codebases...\n");

  for (const t of targets) {
    console.log(`Fetching ${t.kitLabel} ${t.branch}...`);
    const output = run(`make ${t.fetchTarget}`, REFERENCE_DIR);
    console.log(output || "Done");
    console.log("");
  }

  // Generate report
  cmdReport(targets);

  // Update marker
  const syncData = getLastSync();
  syncData.date = new Date().toISOString();
  for (const t of targets) {
    syncData[t.dirName] = getCurrentSha(t.dirName);
  }
  saveLastSync(syncData);
  console.log(`\nSync marker updated: ${LAST_SYNC_FILE}`);
}

// --- CLI ---

function main() {
  const args = process.argv.slice(2);

  let command = "check";
  let branchArg = "both";
  let kitArg = "all";

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--check") command = "check";
    else if (args[i] === "--report") command = "report";
    else if (args[i] === "--sync") command = "sync";
    else if (args[i] === "--branch" && args[i + 1]) branchArg = args[++i];
    else if (args[i] === "--kit" && args[i + 1]) kitArg = args[++i];
  }

  const branches = branchArg === "both" ? ["stable", "beta"] : [branchArg];
  const kitNames = kitArg === "all" ? ["engineer", "marketing"] : [kitArg];
  const targets = resolveTargets(kitNames, branches);

  // Validate
  if (!fs.existsSync(REFERENCE_DIR)) {
    console.error(`Reference directory not found: ${REFERENCE_DIR}`);
    console.error("Run: make all-fetch (in reference/ directory)");
    process.exit(1);
  }

  switch (command) {
    case "check": cmdCheck(targets); break;
    case "report": cmdReport(targets); break;
    case "sync": cmdSync(targets); break;
  }
}

main();

/**
 * Semantic Guide Analyzer — cross-references ClaudeKit reference changes
 * with VividKit guide data to produce actionable update items.
 *
 * Reads VividKit src/ files to know what's already documented,
 * reads reference/ dirs to know what currently exists in ClaudeKit,
 * and diffs them to produce ADD/UPDATE/REMOVE actions per guide.
 */

const fs = require("fs");
const path = require("path");

/**
 * Extract skill names referenced in workflow TS data files.
 * Looks for `command: '/ck:skillName'` or `command: '/ckm:commandName'` patterns.
 */
function extractDocumentedSkills(projectRoot) {
  const dataDir = path.join(projectRoot, "src/data/guides/workflows-data");
  const skills = new Set();
  const commands = new Set();

  if (!fs.existsSync(dataDir)) return { skills, commands };

  for (const file of fs.readdirSync(dataDir).filter((f) => f.endsWith(".ts"))) {
    const content = fs.readFileSync(path.join(dataDir, file), "utf8");
    // Match /ck:skillName patterns
    for (const m of content.matchAll(/command:\s*['"`]\/ck:([^'"`\s]+)/g)) {
      skills.add(m[1]);
    }
    // Match /ckm:commandName patterns
    for (const m of content.matchAll(/command:\s*['"`]\/ckm:([^'"`\s]+)/g)) {
      commands.add(m[1]);
    }
  }
  return { skills, commands };
}

/**
 * Extract skills marked with isBeta: true in workflow data files.
 * Returns array of { file, skillCommand } for each isBeta occurrence.
 */
function extractBetaFlaggedSkills(projectRoot) {
  const dataDir = path.join(projectRoot, "src/data/guides/workflows-data");
  const results = [];

  if (!fs.existsSync(dataDir)) return results;

  for (const file of fs.readdirSync(dataDir).filter((f) => f.endsWith(".ts"))) {
    const content = fs.readFileSync(path.join(dataDir, file), "utf8");
    const lines = content.split("\n");
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes("isBeta: true")) {
        // Look backwards for the command field
        for (let j = i - 1; j >= Math.max(0, i - 10); j--) {
          const cmdMatch = lines[j].match(/command:\s*['"`]([^'"`]+)/);
          if (cmdMatch) {
            results.push({ file, command: cmdMatch[1], line: i + 1 });
            break;
          }
        }
      }
    }
  }
  return results;
}

/**
 * Extract category names from a section astro file's categoryMeta map.
 */
function extractCategoriesFromSection(filePath) {
  const categories = new Set();
  if (!fs.existsSync(filePath)) return categories;

  const content = fs.readFileSync(filePath, "utf8");
  for (const m of content.matchAll(/'([^']+)':\s*\{\s*icon:/g)) {
    categories.add(m[1]);
  }
  return categories;
}

/**
 * Extract documented categories from both engineer and marketing section files.
 */
function extractDocumentedCategories(projectRoot) {
  const engineerCats = extractCategoriesFromSection(
    path.join(projectRoot, "src/components/guides/workflows/workflows-engineer-section.astro")
  );
  const marketingCats = extractCategoriesFromSection(
    path.join(projectRoot, "src/components/guides/workflows/workflows-marketing-section.astro")
  );
  // Merge all documented categories
  return { engineer: engineerCats, marketing: marketingCats, all: new Set([...engineerCats, ...marketingCats]) };
}

/**
 * Extract categories used in workflow data files, grouped by source file.
 * Returns { engineer: Set, marketing: Set } based on filename patterns.
 */
function extractUsedCategories(projectRoot) {
  const dataDir = path.join(projectRoot, "src/data/guides/workflows-data");
  const engineer = new Set();
  const marketing = new Set();

  if (!fs.existsSync(dataDir)) return { engineer, marketing };

  for (const file of fs.readdirSync(dataDir).filter((f) => f.endsWith(".ts"))) {
    const content = fs.readFileSync(path.join(dataDir, file), "utf8");
    const isMarketing = file.includes("marketing");
    for (const m of content.matchAll(/category:\s*['"`]([^'"`]+)/g)) {
      if (isMarketing) marketing.add(m[1]);
      else engineer.add(m[1]);
    }
  }
  return { engineer, marketing };
}

/**
 * List skill directories in a reference codebase.
 * Returns array of skill names (directory names under claude/skills/).
 */
function listReferenceSkills(referenceDir, branchDir) {
  const skillsDir = path.join(referenceDir, branchDir, "claude/skills");
  if (!fs.existsSync(skillsDir)) return [];

  return fs.readdirSync(skillsDir).filter((name) => {
    const fullPath = path.join(skillsDir, name);
    return (
      fs.statSync(fullPath).isDirectory() &&
      !name.startsWith("_") &&
      !name.startsWith(".") &&
      name !== "common"
    );
  });
}

/**
 * List hook files in a reference codebase.
 * Returns array of hook basenames (e.g. 'session-state', 'privacy-block').
 */
function listReferenceHooks(referenceDir, branchDir) {
  const hooksDir = path.join(referenceDir, branchDir, "claude/hooks");
  if (!fs.existsSync(hooksDir)) return [];

  return fs
    .readdirSync(hooksDir)
    .filter((f) => f.endsWith(".cjs") && !f.startsWith("."))
    .map((f) => f.replace(".cjs", ""));
}

/**
 * List agent files in a reference codebase.
 */
function listReferenceAgents(referenceDir, branchDir) {
  const agentsDir = path.join(referenceDir, branchDir, "claude/agents");
  if (!fs.existsSync(agentsDir)) return [];

  return fs
    .readdirSync(agentsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(".md", ""));
}

/**
 * List command directories in a reference codebase (Marketing Kit).
 */
function listReferenceCommands(referenceDir, branchDir) {
  const commandsDir = path.join(referenceDir, branchDir, "claude/commands");
  if (!fs.existsSync(commandsDir)) return [];

  return fs.readdirSync(commandsDir).filter((name) => {
    const fullPath = path.join(commandsDir, name);
    return fs.statSync(fullPath).isDirectory() && !name.startsWith(".");
  });
}

/**
 * Extract SKILL.md description (first non-heading paragraph) for a skill.
 */
function extractSkillDescription(referenceDir, branchDir, skillName) {
  const skillMd = path.join(referenceDir, branchDir, "claude/skills", skillName, "SKILL.md");
  if (!fs.existsSync(skillMd)) return null;

  const content = fs.readFileSync(skillMd, "utf8");
  const lines = content.split("\n");
  // Skip frontmatter and heading, find first content paragraph
  let pastHeading = false;
  for (const line of lines) {
    if (line.startsWith("# ")) { pastHeading = true; continue; }
    if (pastHeading && line.trim() && !line.startsWith("#") && !line.startsWith("---")) {
      return line.trim().substring(0, 200);
    }
  }
  return null;
}

/**
 * Extract version from the latest SKILLS.yaml or package.json in reference dir.
 */
function extractReferenceVersion(referenceDir, branchDir) {
  const pkgPath = path.join(referenceDir, branchDir, "package.json");
  if (!fs.existsSync(pkgPath)) return null;
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
    return pkg.version || null;
  } catch {
    return null;
  }
}

/**
 * Main analysis: cross-reference ClaudeKit reference with VividKit guides.
 * Returns actionable items grouped by guide file.
 *
 * @param {string} projectRoot - VividKit project root
 * @param {string} referenceDir - reference/ directory path
 * @param {Array} targets - array of { kitName, branch, dirName } from detect-changes
 * @param {Object} changesByTarget - map of dirName -> categorized diff files
 * @returns {Array<{guide: string, actions: Array<{type: string, detail: string}>}>}
 */
function analyzeGuideImpact(projectRoot, referenceDir, targets, changesByTarget) {
  const actions = {};
  const addAction = (guide, type, detail) => {
    if (!actions[guide]) actions[guide] = [];
    // Deduplicate
    const key = `${type}:${detail}`;
    if (!actions[guide].some((a) => `${a.type}:${a.detail}` === key)) {
      actions[guide].push({ type, detail });
    }
  };

  const documented = extractDocumentedSkills(projectRoot);
  const documentedCats = extractDocumentedCategories(projectRoot);
  const usedCats = extractUsedCategories(projectRoot);

  for (const t of targets) {
    const changes = changesByTarget[t.dirName] || {};
    const isEngineer = t.kitName === "engineer";
    const isMarketing = t.kitName === "marketing";

    // --- 1. Skills analysis — only flag NEW/MODIFIED skills from the diff ---
    if (isEngineer && changes.skills?.length > 0) {
      const addedSkills = changes.skills.filter((f) => f.status === "A");
      const modifiedSkillMds = changes.skills.filter(
        (f) => f.status === "M" && f.file.endsWith("SKILL.md")
      );

      for (const s of addedSkills) {
        // Extract skill name from path like claude/skills/stitch/scripts/foo.ts
        const parts = s.file.split("/");
        const skillIdx = parts.indexOf("skills");
        if (skillIdx < 0 || skillIdx + 1 >= parts.length) continue;
        const skillName = parts[skillIdx + 1];
        if (skillName.startsWith("_") || skillName.startsWith(".")) continue;

        if (!documented.skills.has(skillName)) {
          const desc = extractSkillDescription(referenceDir, t.dirName, skillName);
          addAction(
            "src/data/guides/workflows-data/",
            "REVIEW",
            `New skill file in "${skillName}" (${t.branch}) — not referenced in workflow data` +
              (desc ? ` — ${desc}` : "")
          );
        }
      }

      for (const s of modifiedSkillMds) {
        const parts = s.file.split("/");
        const skillIdx = parts.indexOf("skills");
        if (skillIdx < 0 || skillIdx + 1 >= parts.length) continue;
        const skillName = parts[skillIdx + 1];

        if (documented.skills.has(skillName)) {
          addAction(
            "src/data/guides/workflows-data/",
            "REVIEW",
            `Skill "${skillName}" SKILL.md modified in ${t.branch} — verify workflow description is still accurate`
          );
        }
      }
    }

    // --- 2. New/modified hooks ---
    if (changes.hooks?.length > 0) {
      const addedHooks = changes.hooks.filter((f) => f.status === "A");
      const modifiedHooks = changes.hooks.filter((f) => f.status === "M");

      for (const h of addedHooks) {
        // Only top-level hooks, not lib/ or tests/
        const basename = path.basename(h.file, ".cjs");
        if (
          h.file.match(/^(claude\/)?hooks\/[^/]+\.cjs$/) ||
          h.file.match(/^\.claude\/hooks\/[^/]+\.cjs$/)
        ) {
          addAction(
            "src/components/guides/CustomHooksGuide.astro",
            "ADD",
            `New hook "${basename}" — document purpose, trigger event, and configuration`
          );
        }
      }

      for (const h of modifiedHooks) {
        const basename = path.basename(h.file, ".cjs");
        if (
          h.file.match(/^(claude\/)?hooks\/[^/]+\.cjs$/) ||
          h.file.match(/^\.claude\/hooks\/[^/]+\.cjs$/)
        ) {
          addAction(
            "src/components/guides/CustomHooksGuide.astro",
            "UPDATE",
            `Hook "${basename}" modified — verify guide description is still accurate`
          );
        }
      }

      // New hook libraries (lib/)
      const addedLibs = addedHooks.filter((h) => h.file.includes("/lib/") && !h.file.includes("test"));
      if (addedLibs.length > 0) {
        const libNames = addedLibs.map((h) => path.basename(h.file, ".cjs")).join(", ");
        addAction(
          "src/components/guides/CustomHooksGuide.astro",
          "ADD",
          `New hook libraries: ${libNames} — consider mentioning in architecture section`
        );
      }
    }

    // --- 3. Category gaps — check per section (engineer vs marketing) ---
    if (isEngineer) {
      for (const cat of usedCats.engineer) {
        if (!documentedCats.engineer.has(cat)) {
          addAction(
            "src/components/guides/workflows/workflows-engineer-section.astro",
            "ADD",
            `Category "${cat}" used in EK data but missing from engineer categoryMeta — add icon and color`
          );
        }
      }
    }
    if (isMarketing) {
      for (const cat of usedCats.marketing) {
        if (!documentedCats.marketing.has(cat)) {
          addAction(
            "src/components/guides/workflows/workflows-marketing-section.astro",
            "ADD",
            `Category "${cat}" used in MK data but missing from marketing categoryMeta — add icon and color`
          );
        }
      }
    }

    // --- 3b. Stale isBeta flags — skills marked beta but already in stable ---
    if (isEngineer && t.branch === "stable") {
      const betaFlagged = extractBetaFlaggedSkills(projectRoot);
      const stableSkills = listReferenceSkills(referenceDir, t.dirName);
      const stableSet = new Set(stableSkills);

      for (const { file, command, line } of betaFlagged) {
        // Extract skill name from command like /ck:autoresearch → ck-autoresearch
        const skillName = command.replace(/^\/ck:/, "ck-").replace(/^\/ckm:/, "");
        if (stableSet.has(skillName)) {
          addAction(
            `src/data/guides/workflows-data/${file}`,
            "UPDATE",
            `"${command}" has isBeta:true (line ${line}) but skill is already in stable — remove beta badge`
          );
        }
      }
    }

    // --- 4. Config/settings changes ---
    if (changes.config?.length > 0) {
      const version = extractReferenceVersion(referenceDir, t.dirName);
      if (version) {
        addAction(
          "src/components/guides/commands/commands-categories-grid.astro",
          "UPDATE",
          `${t.kitLabel} version badge → ${version} (${t.branch})`
        );
      }

      for (const f of changes.config) {
        if (f.file.includes("settings.json") && f.status === "M") {
          addAction(
            "src/components/guides/PermissionsGuide.astro",
            "REVIEW",
            `settings.json modified in ${t.branch} — check if permission defaults changed`
          );
          addAction(
            "src/components/guides/CLIGuide.astro",
            "REVIEW",
            `settings.json modified in ${t.branch} — check if CLI config options changed`
          );
        }
        if (f.file.includes("CLAUDE.md") && f.status === "M") {
          addAction(
            "src/components/guides/WhatIsClaudeKitGuide.astro",
            "REVIEW",
            `CLAUDE.md modified — verify "What Is ClaudeKit" guide reflects current setup instructions`
          );
        }
      }
    }

    // --- 5. Schema changes ---
    if (changes.schemas?.length > 0) {
      addAction(
        "src/components/guides/IDEConfigGuide.astro",
        "REVIEW",
        `Schema file(s) changed in ${t.branch} — verify schema URL and field descriptions`
      );
    }

    // --- 6. Marketing Kit commands ---
    if (isMarketing && changes.commands?.length > 0) {
      const addedCmds = changes.commands.filter((f) => f.status === "A");
      const removedCmds = changes.commands.filter((f) => f.status === "D");

      for (const c of addedCmds) {
        const cmdName = c.file.split("/").find((p, i, a) => a[i - 1] === "commands") || path.basename(c.file);
        addAction(
          "src/data/commands-marketing-kit.ts",
          "ADD",
          `New MK command "${cmdName}" — add to commands data`
        );
      }
      for (const c of removedCmds) {
        const cmdName = c.file.split("/").find((p, i, a) => a[i - 1] === "commands") || path.basename(c.file);
        addAction(
          "src/data/commands-marketing-kit.ts",
          "REMOVE",
          `MK command "${cmdName}" removed — remove from commands data`
        );
      }
    }

    // --- 7. Rules/workflows changes ---
    if (changes.rules?.length > 0) {
      const modifiedRules = changes.rules.filter((f) => f.status === "M");
      if (modifiedRules.length > 0) {
        const ruleNames = modifiedRules.map((f) => path.basename(f.file, ".md")).join(", ");
        addAction(
          "src/components/guides/WorkflowsGuide.astro",
          "REVIEW",
          `Rules modified: ${ruleNames} — verify workflow descriptions match current rules`
        );
      }
    }

    if (changes.workflows?.length > 0) {
      addAction(
        "src/components/guides/WorkflowsGuide.astro",
        "REVIEW",
        `Workflow definitions changed in ${t.branch} — verify guide accuracy`
      );
    }

    // --- 8. Agent changes ---
    if (changes.agents?.length > 0) {
      const addedAgents = changes.agents.filter((f) => f.status === "A");
      const modifiedAgents = changes.agents.filter((f) => f.status === "M");

      for (const a of addedAgents) {
        const name = path.basename(a.file, ".md");
        addAction(
          "src/data/guides/workflows-data/",
          "ADD",
          `New agent "${name}" — consider adding workflow using this agent`
        );
      }
      for (const a of modifiedAgents) {
        const name = path.basename(a.file, ".md");
        addAction(
          "src/data/guides/workflows-data/",
          "REVIEW",
          `Agent "${name}" modified — verify workflow descriptions are still accurate`
        );
      }
    }
  }

  // Convert to sorted array
  return Object.entries(actions)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([guide, items]) => ({ guide, actions: items }));
}

/**
 * Format actionable items as markdown for the report.
 */
function formatActionableReport(items) {
  if (items.length === 0) return "";

  const lines = ["## Actionable Guide Updates\n"];
  const typeIcons = { ADD: "+", UPDATE: "~", REMOVE: "-", REVIEW: "?" };

  for (const { guide, actions } of items) {
    lines.push(`### ${guide}`);
    for (const { type, detail } of actions) {
      lines.push(`- [${typeIcons[type] || " "}] **${type}**: ${detail}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

module.exports = {
  analyzeGuideImpact,
  formatActionableReport,
  extractDocumentedSkills,
  extractDocumentedCategories,
  extractUsedCategories,
  listReferenceSkills,
  listReferenceHooks,
  listReferenceAgents,
};

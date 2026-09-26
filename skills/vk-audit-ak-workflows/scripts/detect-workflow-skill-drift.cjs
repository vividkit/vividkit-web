#!/usr/bin/env node
/**
 * vk:audit-ak-workflows — reverse index + fingerprint drift for skills used in
 * AgentKit Workflows guide data.
 *
 * Modes: --rebuild-index | --check | --report | --sync
 * Fingerprint source, first hit wins:
 *   1. ak-cli checkout (--kit-root or AK_CLI): SKILL.md from local git refs
 *      origin/main (stable) / origin/dev (beta), resolved through kit.yaml the
 *      same way as scripts/check-ak-kit-skill-inventory.mjs. Does not fetch.
 *   2. Plain skills dir as --kit-root: {kit-root}/ak-{slug}/SKILL.md
 *   3. Repo-installed kit: .agents/skills/ak-{slug}, .claude/skills/ak-{slug}
 *   4. Cheatsheet row
 * NEVER writes under src/.
 *
 * Usage:
 *   node detect-workflow-skill-drift.cjs --rebuild-index [--repo <path>] [--kit-root <path>]
 *   node detect-workflow-skill-drift.cjs --check
 *   node detect-workflow-skill-drift.cjs --report
 *   node detect-workflow-skill-drift.cjs --sync
 */

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

const WORKFLOW_REL = "src/data/guides/agentkit-workflows/engineer.ts";
const MARKETING_REL = "src/data/guides/agentkit-workflows/marketing.ts";
const CHEATSHEET_REL = "src/data/guides/agentkit-skills-cheatsheet.ts";
const INDEX_REL = "reference/ak-workflow-skill-index.json";
const PINS_REL = "reference/ak-workflow-skill-pins";
const REPORTS_REL = "reference/changelog-reports";

const IMPACT_PATHS = [
  "src/data/guides/agentkit-workflows/engineer.ts",
  "src/data/guides/agentkit-workflows/marketing.ts",
  "src/data/guides/agentkit-workflows/index.ts",
  "src/components/guides/agentkit/AkWorkflowsGuide.astro",
  "src/pages/guides/agentkit/workflows.astro",
  "src/pages/vi/guides/agentkit/workflows.astro",
];

const ADVICE_SKILLS = new Set(["brainstorm", "plan", "cook", "fix", "vibe"]);

// ─── CLI ─────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const out = {
    mode: null,
    repo: null,
    kitRoot: null,
    help: false,
  };
  const args = argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "-h" || a === "--help") out.help = true;
    else if (a === "--rebuild-index" || a === "rebuild-index") out.mode = "rebuild-index";
    else if (a === "--check" || a === "check") out.mode = "check";
    else if (a === "--report" || a === "report") out.mode = "report";
    else if (a === "--sync" || a === "sync") out.mode = "sync";
    else if (a === "--repo" || a === "--repo-root") out.repo = args[++i];
    else if (a === "--kit-root") out.kitRoot = args[++i];
    else {
      console.error(`Unknown argument: ${a}`);
      out.help = true;
      out.badArg = true;
    }
  }
  if (!out.kitRoot && process.env.AK_CLI) out.kitRoot = process.env.AK_CLI;
  return out;
}

function usage() {
  return `Usage: node detect-workflow-skill-drift.cjs --rebuild-index | --check | --report | --sync
  [--repo <vividkit-root>] [--kit-root <ak-cli checkout | skills dir>]  (default: $AK_CLI)

Modes:
  --rebuild-index  Parse workflow data → reference/ak-workflow-skill-index.json
  --check          Exit 1 on drift or unknown skill refs (no src writes)
  --report         Write reference/changelog-reports/{date}-ak-workflows-audit.md
  --sync           Update pins from current fingerprints (after human review)

Fingerprint: ak-cli git refs → --kit-root skills dir → installed kit → cheatsheet.
Never edits src/.
`;
}

// ─── Paths ───────────────────────────────────────────────────────────────────

function findRepoRoot(explicit) {
  if (explicit) {
    const abs = path.resolve(explicit);
    if (!fs.existsSync(abs)) {
      console.error(`--repo path not found: ${abs}`);
      process.exit(2);
    }
    return abs;
  }
  let dir = process.cwd();
  for (let i = 0; i < 10; i++) {
    if (
      fs.existsSync(path.join(dir, "package.json")) &&
      fs.existsSync(path.join(dir, "src/data/guides"))
    ) {
      return dir;
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return process.cwd();
}

function sha256(text) {
  return crypto.createHash("sha256").update(text, "utf8").digest("hex");
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

// ─── Parse workflows (engineer.ts) ───────────────────────────────────────────

function unescapeTsString(s) {
  return s
    .replace(/\\n/g, "\n")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, "\\");
}

function extractQuotedStrings(block, field) {
  const re = new RegExp(`${field}:\\s*"((?:\\\\.|[^"\\\\])*)"`, "g");
  const out = [];
  let m;
  while ((m = re.exec(block))) out.push(unescapeTsString(m[1]));
  return out;
}

function extractFirstQuoted(block, field) {
  const arr = extractQuotedStrings(block, field);
  return arr[0] || null;
}

function parseWorkflowFile(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const ts = fs.readFileSync(filePath, "utf8");
  const idRe = /id:\s*"([A-Z][A-Z0-9]*)"/g;
  const matches = [...ts.matchAll(idRe)];
  const workflows = [];

  for (let i = 0; i < matches.length; i++) {
    const id = matches[i][1];
    const start = matches[i].index;
    const end = i + 1 < matches.length ? matches[i + 1].index : ts.length;
    const block = ts.slice(start, end);
    const title = extractFirstQuoted(block, "title") || id;
    const featuredMatch = block.match(/featured:\s*(true|false)/);
    const featured = featuredMatch ? featuredMatch[1] === "true" : false;
    const category = extractFirstQuoted(block, "category") || "";

    /** @type {{ number: number, command: string }[]} */
    const steps = [];
    // number before command in same step object (generated layout)
    const stepRe =
      /number:\s*(\d+)[\s\S]*?(?:command:\s*"((?:\\.|[^"\\])*)")?/g;
    // More reliable: walk command fields and nearest preceding number
    const cmdRe = /command:\s*"((?:\\.|[^"\\])*)"/g;
    let cm;
    while ((cm = cmdRe.exec(block))) {
      const cmd = unescapeTsString(cm[1]);
      const before = block.slice(0, cm.index);
      const nums = [...before.matchAll(/number:\s*(\d+)/g)];
      const number = nums.length ? Number(nums[nums.length - 1][1]) : 0;
      // Only count commands inside steps / adviceVariant — skip if in tip prose without field
      steps.push({ number, command: cmd });
    }

    // adviceVariant.commands array
    const adviceBlock = block.match(
      /adviceVariant:\s*\{[\s\S]*?commands:\s*\[([\s\S]*?)\]/,
    );
    const adviceCommands = [];
    if (adviceBlock) {
      const strRe = /"((?:\\.|[^"\\])*)"/g;
      let sm;
      while ((sm = strRe.exec(adviceBlock[1]))) {
        adviceCommands.push(unescapeTsString(sm[1]));
      }
    }

    // free-text tips may mention /ak: — secondary refs (stepNumbers empty)
    const tip = extractFirstQuoted(block, "tip") || "";
    const tipSlugs = [...tip.matchAll(/[/\$]ak:([a-z0-9-]+)/gi)].map((m) =>
      m[1].toLowerCase(),
    );

    workflows.push({
      id,
      title,
      featured,
      category,
      steps,
      adviceCommands,
      tipSlugs,
      sourceFile: path.relative(process.cwd(), filePath).replace(/\\/g, "/"),
    });
  }
  return workflows;
}

function slugFromCommand(cmd) {
  if (!cmd || typeof cmd !== "string") return null;
  const m = cmd.match(/[/\$]ak:([a-z0-9-]+)/i);
  return m ? m[1].toLowerCase() : null;
}

function buildReverseIndex(workflows, sourceFiles) {
  /** @type {Record<string, { workflows: any[], commands: Set<string> }>} */
  const skills = {};

  function ensure(slug) {
    if (!skills[slug]) skills[slug] = { workflows: [], commands: new Set() };
    return skills[slug];
  }

  for (const w of workflows) {
    /** @type {Map<string, { stepNumbers: Set<number>, commands: Set<string>, sources: Set<string> }>} */
    const perSkill = new Map();

    function touch(slug, stepNumber, command, source) {
      if (!slug) return;
      if (!perSkill.has(slug)) {
        perSkill.set(slug, {
          stepNumbers: new Set(),
          commands: new Set(),
          sources: new Set(),
        });
      }
      const entry = perSkill.get(slug);
      if (stepNumber > 0) entry.stepNumbers.add(stepNumber);
      if (command) entry.commands.add(command);
      entry.sources.add(source);
    }

    for (const s of w.steps) {
      const slug = slugFromCommand(s.command);
      touch(slug, s.number, s.command, "step.command");
    }
    for (const c of w.adviceCommands) {
      const slug = slugFromCommand(c);
      touch(slug, 0, c, "adviceVariant");
    }
    for (const slug of w.tipSlugs) {
      touch(slug, 0, null, "tip");
    }

    for (const [slug, data] of perSkill) {
      const bucket = ensure(slug);
      bucket.workflows.push({
        id: w.id,
        title: w.title,
        featured: w.featured,
        category: w.category,
        stepNumbers: [...data.stepNumbers].sort((a, b) => a - b),
        commands: [...data.commands].sort(),
        sources: [...data.sources].sort(),
      });
      for (const c of data.commands) bucket.commands.add(c);
    }
  }

  const skillsOut = {};
  for (const slug of Object.keys(skills).sort()) {
    const s = skills[slug];
    skillsOut[slug] = {
      workflows: s.workflows.sort((a, b) => a.id.localeCompare(b.id)),
      commands: [...s.commands].sort(),
    };
  }

  return {
    generatedAt: new Date().toISOString(),
    sourceFiles,
    skillCount: Object.keys(skillsOut).length,
    workflowCount: workflows.length,
    skills: skillsOut,
  };
}

// ─── Cheatsheet inventory ────────────────────────────────────────────────────

function parseCheatsheet(filePath) {
  /** @type {Map<string, object>} */
  const bySlug = new Map();
  if (!fs.existsSync(filePath)) return bySlug;
  const text = fs.readFileSync(filePath, "utf8");
  // engineer skills only — stop at marketing export if present
  const eng = text.split("export const akMarketingSkills")[0] || text;
  const blockRe = /\{\s*id:\s*"(ak-[^"]+)"[\s\S]*?\n\s*\}(?=,\s*\n\s*\{|\s*\n\];)/g;
  // Simpler: split on id: "ak-
  const parts = eng.split(/(?=id:\s*"ak-)/);
  for (const part of parts) {
    const idM = part.match(/^id:\s*"(ak-[^"]+)"/);
    if (!idM) continue;
    const id = idM[1];
    const slug = id.replace(/^ak-/, "");
    const command = extractFirstQuoted(part, "command") || `/ak:${slug}`;
    const description = extractFirstQuoted(part, "description") || "";
    const argumentHint = extractFirstQuoted(part, "argumentHint") || "";
    const flagsMatch = part.match(/flags:\s*\[([^\]]*)\]/);
    const flags = flagsMatch
      ? [...flagsMatch[1].matchAll(/"([^"]+)"/g)].map((m) => m[1])
      : [];
    const subMatch = part.match(/subcommands:\s*\[([^\]]*)\]/);
    const subcommands = subMatch
      ? [...subMatch[1].matchAll(/"([^"]+)"/g)].map((m) => m[1])
      : [];
    bySlug.set(slug, {
      id,
      command,
      description,
      argumentHint,
      flags,
      subcommands,
    });
  }
  return bySlug;
}

// ─── Kit fingerprint ─────────────────────────────────────────────────────────

function parseFrontmatter(md) {
  const m = md.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const fm = {};
  const lines = m[1].split(/\r?\n/);
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!kv) {
      i++;
      continue;
    }
    const key = kv[1];
    let val = kv[2].trim();
    if (val.startsWith('"') && val.endsWith('"')) {
      val = val.slice(1, -1).replace(/\\"/g, '"');
      fm[key] = val;
    } else if (val === "" || val === "|" || val === ">") {
      // skip multiline for simplicity
      fm[key] = val;
    } else if (key === "metadata" && val === "") {
      // nested metadata: indented key: value
      i++;
      const meta = {};
      while (i < lines.length && /^\s+\S/.test(lines[i])) {
        const mk = lines[i].match(/^\s+([A-Za-z0-9_-]+):\s*(.*)$/);
        if (mk) {
          let mv = mk[2].trim();
          if (mv.startsWith('"') && mv.endsWith('"')) mv = mv.slice(1, -1);
          meta[mk[1]] = mv;
        }
        i++;
      }
      fm.metadata = meta;
      continue;
    } else {
      fm[key] = val.replace(/^["']|["']$/g, "");
    }
    i++;
  }
  return fm;
}

function findKitSkillMd(slug, repoRoot, kitRoot) {
  const candidates = [];
  if (kitRoot) {
    candidates.push(path.join(kitRoot, `ak-${slug}`, "SKILL.md"));
    candidates.push(path.join(kitRoot, slug, "SKILL.md"));
  }
  candidates.push(
    path.join(repoRoot, ".agents", "skills", `ak-${slug}`, "SKILL.md"),
    path.join(repoRoot, ".claude", "skills", `ak-${slug}`, "SKILL.md"),
    path.join(repoRoot, ".agents", "skills", slug, "SKILL.md"),
    path.join(repoRoot, ".claude", "skills", slug, "SKILL.md"),
  );
  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

// ─── ak-cli source (git refs) ────────────────────────────────────────────────

/**
 * Load the shared kit.yaml resolver when --kit-root is an ak-cli checkout.
 * Returns null for any other root so callers fall back to installed copies.
 */
async function loadAkCliSource(repoRoot, kitRoot) {
  if (!kitRoot) return null;
  const root = path.resolve(kitRoot);
  if (!fs.existsSync(path.join(root, "kits"))) return null;
  const libPath = path.join(repoRoot, "scripts/lib/ak-kit-sources.mjs");
  if (!fs.existsSync(libPath)) return null;
  try {
    const lib = await import(pathToFileURL(libPath).href);
    const snapshot = lib.buildSnapshot({ stableRef: "origin/main", betaRef: "origin/dev" }, root);
    return { lib, snapshot, root };
  } catch (err) {
    console.error(
      `ak-cli refs unavailable (${String(err.message).split("\n")[0]}); falling back to installed kit copies`,
    );
    return null;
  }
}

/** SKILL.md text for `ak-{slug}` at the channel the kit ships it on (stable first). */
function readAkCliSkillMd(akCli, slug) {
  if (!akCli) return null;
  for (const surface of ["engineer", "marketing"]) {
    const hit = akCli.lib.resolvePageSkill(akCli.snapshot, surface, `ak-${slug}`);
    if (!hit.skillPath) continue;
    const md = akCli.lib.showFile(akCli.root, hit.ref, hit.skillPath);
    if (md) return { md, path: `ak-cli@${hit.ref}:${hit.skillPath}` };
  }
  return null;
}

function kitFingerprint(md, sourcePath) {
  const fm = parseFrontmatter(md);
  const payload = {
    source: "kit",
    path: sourcePath,
    name: fm.name || null,
    description: fm.description || null,
    when_to_use: fm.when_to_use || fm["when-to-use"] || null,
    argument_hint: fm["argument-hint"] || fm.argumentHint || null,
    version: (fm.metadata && fm.metadata.version) || fm.version || null,
  };
  return { ...payload, hash: sha256(JSON.stringify(payload)) };
}

function fingerprintSkill(slug, repoRoot, kitRoot, cheatsheet, akCli) {
  const fromAkCli = readAkCliSkillMd(akCli, slug);
  if (fromAkCli) return kitFingerprint(fromAkCli.md, fromAkCli.path);

  const kitPath = akCli ? findKitSkillMd(slug, repoRoot, null) : findKitSkillMd(slug, repoRoot, kitRoot);
  if (kitPath) {
    return kitFingerprint(
      fs.readFileSync(kitPath, "utf8"),
      path.relative(repoRoot, kitPath).replace(/\\/g, "/"),
    );
  }

  const row = cheatsheet.get(slug);
  if (row) {
    const payload = {
      source: "cheatsheet",
      id: row.id,
      command: row.command,
      description: row.description || null,
      argumentHint: row.argumentHint || null,
      flags: row.flags || [],
      subcommands: row.subcommands || [],
    };
    return { ...payload, hash: sha256(JSON.stringify(payload)) };
  }

  return {
    source: "missing",
    path: null,
    hash: null,
  };
}

// ─── Pins ────────────────────────────────────────────────────────────────────

function pinPath(repoRoot, slug) {
  return path.join(repoRoot, PINS_REL, `${slug}.json`);
}

function readPin(repoRoot, slug) {
  const p = pinPath(repoRoot, slug);
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

function writePin(repoRoot, slug, fingerprint) {
  const p = pinPath(repoRoot, slug);
  ensureDir(path.dirname(p));
  const body = {
    slug,
    hash: fingerprint.hash,
    source: fingerprint.source,
    path: fingerprint.path || null,
    pinnedAt: new Date().toISOString(),
    snapshot: {
      name: fingerprint.name || null,
      description: fingerprint.description || null,
      when_to_use: fingerprint.when_to_use || null,
      argument_hint: fingerprint.argument_hint || fingerprint.argumentHint || null,
      version: fingerprint.version || null,
      flags: fingerprint.flags || undefined,
      subcommands: fingerprint.subcommands || undefined,
    },
  };
  fs.writeFileSync(p, JSON.stringify(body, null, 2) + "\n", "utf8");
}

// ─── Modes ───────────────────────────────────────────────────────────────────

function loadOrBuildIndex(repoRoot, rebuild) {
  const engPath = path.join(repoRoot, WORKFLOW_REL);
  const mktPath = path.join(repoRoot, MARKETING_REL);
  const sourceFiles = [WORKFLOW_REL];
  if (fs.existsSync(mktPath)) sourceFiles.push(MARKETING_REL);

  if (!rebuild) {
    const indexPath = path.join(repoRoot, INDEX_REL);
    if (fs.existsSync(indexPath)) {
      try {
        return JSON.parse(fs.readFileSync(indexPath, "utf8"));
      } catch {
        /* fall through */
      }
    }
  }

  const workflows = [
    ...parseWorkflowFile(engPath),
    ...parseWorkflowFile(mktPath),
  ];
  return buildReverseIndex(workflows, sourceFiles);
}

function writeIndex(repoRoot, index) {
  const indexPath = path.join(repoRoot, INDEX_REL);
  ensureDir(path.dirname(indexPath));
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2) + "\n", "utf8");
  return indexPath;
}

function analyze(repoRoot, kitRoot, index, akCli) {
  const cheatsheet = parseCheatsheet(path.join(repoRoot, CHEATSHEET_REL));
  const slugs = Object.keys(index.skills || {});
  const unknown = [];
  const missingFp = [];
  const drift = [];
  const unpinned = [];
  const ok = [];
  const fingerprints = {};

  for (const slug of slugs) {
    if (!cheatsheet.has(slug)) {
      unknown.push({
        slug,
        workflows: index.skills[slug].workflows.map((w) => w.id),
      });
    }
    const fp = fingerprintSkill(slug, repoRoot, kitRoot, cheatsheet, akCli);
    fingerprints[slug] = fp;
    if (!fp.hash) {
      missingFp.push({ slug, workflows: index.skills[slug].workflows.map((w) => w.id) });
      continue;
    }
    const pin = readPin(repoRoot, slug);
    if (!pin) {
      unpinned.push({ slug, hash: fp.hash, source: fp.source });
      continue;
    }
    if (pin.hash !== fp.hash) {
      drift.push({
        slug,
        source: fp.source,
        pinHash: pin.hash,
        currentHash: fp.hash,
        pinSource: pin.source,
        path: fp.path,
        argument_hint: fp.argument_hint || fp.argumentHint || null,
        pinArgumentHint: pin.snapshot?.argument_hint || null,
        workflows: index.skills[slug].workflows,
        adviceRelevant: ADVICE_SKILLS.has(slug),
      });
    } else {
      ok.push(slug);
    }
  }

  return { cheatsheet, fingerprints, unknown, missingFp, drift, unpinned, ok };
}

function modeRebuildIndex(repoRoot) {
  const index = loadOrBuildIndex(repoRoot, true);
  const p = writeIndex(repoRoot, index);
  console.log(`Wrote ${path.relative(repoRoot, p)} (${index.skillCount} skills, ${index.workflowCount} workflows)`);
  return 0;
}

function modeCheck(repoRoot, kitRoot, akCli) {
  const index = loadOrBuildIndex(repoRoot, true);
  writeIndex(repoRoot, index); // keep index fresh for check
  const a = analyze(repoRoot, kitRoot, index, akCli);

  let failed = false;
  if (a.unknown.length) {
    failed = true;
    console.error(`FAIL: ${a.unknown.length} workflow skill(s) missing from cheatsheet:`);
    for (const u of a.unknown) {
      console.error(`  - ${u.slug} (workflows: ${u.workflows.join(", ")})`);
    }
  }
  if (a.missingFp.length) {
    failed = true;
    console.error(`FAIL: ${a.missingFp.length} skill(s) have no kit + no cheatsheet fingerprint:`);
    for (const m of a.missingFp) {
      console.error(`  - ${m.slug}`);
    }
  }
  if (a.drift.length) {
    failed = true;
    console.error(`FAIL: ${a.drift.length} skill fingerprint drift(s) vs pins:`);
    for (const d of a.drift) {
      console.error(
        `  - ${d.slug} [${d.source}] pin=${d.pinHash.slice(0, 12)}… current=${d.currentHash.slice(0, 12)}… → ${d.workflows.map((w) => w.id).join(", ")}`,
      );
    }
  }
  if (a.unpinned.length) {
    // unpinned is a soft fail for first run — treat as fail so baseline is explicit
    failed = true;
    console.error(`FAIL: ${a.unpinned.length} skill(s) unpinned (run --sync after review):`);
    for (const u of a.unpinned) {
      console.error(`  - ${u.slug} [${u.source}]`);
    }
  }

  if (!failed) {
    console.log(
      `OK: ${a.ok.length} pinned skills match; ${Object.keys(index.skills).length} indexed; 0 unknown refs`,
    );
    return 0;
  }
  return 1;
}

function modeReport(repoRoot, kitRoot, akCli) {
  const index = loadOrBuildIndex(repoRoot, true);
  writeIndex(repoRoot, index);
  const a = analyze(repoRoot, kitRoot, index, akCli);
  const date = new Date().toISOString().split("T")[0];
  const reportsDir = path.join(repoRoot, REPORTS_REL);
  ensureDir(reportsDir);
  const outPath = path.join(reportsDir, `${date}-ak-workflows-audit.md`);

  const lines = [];
  lines.push(`# AgentKit Workflows skill drift audit — ${date}`);
  lines.push("");
  lines.push("Generated by `vk:audit-ak-workflows` / `detect-workflow-skill-drift.cjs --report`.");
  lines.push("**Never auto-edits `src/`** — proposals for human review only.");
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`| Metric | Count |`);
  lines.push(`| --- | --- |`);
  lines.push(`| Indexed skills | ${Object.keys(index.skills).length} |`);
  lines.push(`| Workflows parsed | ${index.workflowCount} |`);
  lines.push(`| Fingerprint OK (pinned match) | ${a.ok.length} |`);
  lines.push(`| Drift vs pins | ${a.drift.length} |`);
  lines.push(`| Unpinned | ${a.unpinned.length} |`);
  lines.push(`| Unknown (not in cheatsheet) | ${a.unknown.length} |`);
  lines.push(`| Missing fingerprint | ${a.missingFp.length} |`);
  lines.push("");
  lines.push("## Fingerprint policy");
  lines.push("");
  lines.push("1. ak-cli checkout (`--kit-root` / `AK_CLI`): `SKILL.md` at local `origin/main` / `origin/dev` via kit.yaml");
  lines.push("2. `--kit-root` as a plain skills dir: `{kit-root}/ak-{slug}/SKILL.md`");
  lines.push("3. Repo-installed kit (`.agents/skills/ak-{slug}/`, `.claude/skills/ak-{slug}/`)");
  lines.push("4. Cheatsheet row fallback (`agentkit-skills-cheatsheet.ts`)");
  lines.push("");

  if (a.unknown.length) {
    lines.push("## Broken references (hard fail)");
    lines.push("");
    for (const u of a.unknown) {
      lines.push(`- **${u.slug}** — workflows: \`${u.workflows.join("`, `")}\``);
    }
    lines.push("");
    lines.push("**Action:** remove or replace steps in workflow data; skill not in engineer cheatsheet inventory.");
    lines.push("");
  }

  if (a.drift.length) {
    lines.push("## Fingerprint drift");
    lines.push("");
    for (const d of a.drift) {
      lines.push(`### \`${d.slug}\` (${d.source})`);
      lines.push("");
      lines.push(`- Pin hash: \`${d.pinHash.slice(0, 16)}…\``);
      lines.push(`- Current: \`${d.currentHash.slice(0, 16)}…\``);
      if (d.path) lines.push(`- Kit path: \`${d.path}\``);
      if (d.argument_hint || d.pinArgumentHint) {
        lines.push(`- Pin argument-hint: \`${d.pinArgumentHint || "(none)"}\``);
        lines.push(`- Current argument-hint: \`${d.argument_hint || "(none)"}\``);
      }
      if (d.adviceRelevant) {
        lines.push("- **Advice-relevant skill** — re-check L1–L5 / `--advice` compose copy");
      }
      lines.push("- Workflows:");
      for (const w of d.workflows) {
        const steps =
          w.stepNumbers && w.stepNumbers.length
            ? ` steps ${w.stepNumbers.join(",")}`
            : "";
        lines.push(`  - **${w.id}** ${w.title}${steps}`);
        if (w.commands?.length) {
          lines.push(`    - commands: ${w.commands.map((c) => `\`${c}\``).join(", ")}`);
        }
      }
      lines.push("- Review targets:");
      for (const p of IMPACT_PATHS) lines.push(`  - \`${p}\``);
      lines.push("");
    }
  }

  if (a.unpinned.length) {
    lines.push("## Unpinned skills (baseline needed)");
    lines.push("");
    lines.push("Run `--sync` after reviewing that current fingerprints are acceptable.");
    lines.push("");
    for (const u of a.unpinned) {
      const wfs = index.skills[u.slug]?.workflows?.map((w) => w.id).join(", ") || "?";
      lines.push(`- **${u.slug}** [${u.source}] → ${wfs}`);
    }
    lines.push("");
  }

  // Source mix
  const bySource = { kit: 0, cheatsheet: 0, missing: 0 };
  for (const fp of Object.values(a.fingerprints)) {
    bySource[fp.source] = (bySource[fp.source] || 0) + 1;
  }
  lines.push("## Fingerprint source mix");
  lines.push("");
  lines.push(`| Source | Count |`);
  lines.push(`| --- | --- |`);
  lines.push(`| kit SKILL.md | ${bySource.kit || 0} |`);
  lines.push(`| cheatsheet fallback | ${bySource.cheatsheet || 0} |`);
  lines.push(`| missing | ${bySource.missing || 0} |`);
  lines.push("");

  // Advice skills special note
  lines.push("## Composable `--advice` skills");
  lines.push("");
  for (const slug of [...ADVICE_SKILLS].sort()) {
    if (!index.skills[slug]) {
      lines.push(`- \`${slug}\` — not referenced in workflows index`);
      continue;
    }
    const fp = a.fingerprints[slug];
    const pin = readPin(repoRoot, slug);
    const status = !fp?.hash
      ? "missing fp"
      : !pin
        ? "unpinned"
        : pin.hash !== fp.hash
          ? "DRIFT"
          : "ok";
    lines.push(
      `- **${slug}** [${fp?.source || "?"}] status=\`${status}\` workflows=${index.skills[slug].workflows.map((w) => w.id).join(", ")}`,
    );
    if (fp?.argument_hint || fp?.argumentHint) {
      lines.push(`  - argument-hint: \`${fp.argument_hint || fp.argumentHint}\``);
    }
  }
  lines.push("");
  lines.push("## Cadence");
  lines.push("");
  lines.push("1. After kit update: `--report` → review → fix guide data if needed → `--sync`");
  lines.push("2. After editing `agentkit-workflows/**`: `--rebuild-index` then `--check`");
  lines.push("3. Full AgentKit site: `/vk:audit-ak-guides --check`. Inventory/skill pages: `/vk:audit-ak-skills`");
  lines.push("");

  fs.writeFileSync(outPath, lines.join("\n"), "utf8");
  console.log(`Wrote ${path.relative(repoRoot, outPath)}`);
  return a.unknown.length || a.drift.length || a.missingFp.length ? 1 : 0;
}

function modeSync(repoRoot, kitRoot, akCli) {
  const index = loadOrBuildIndex(repoRoot, true);
  writeIndex(repoRoot, index);
  const a = analyze(repoRoot, kitRoot, index, akCli);
  let n = 0;
  for (const slug of Object.keys(index.skills).sort()) {
    const fp = a.fingerprints[slug];
    if (!fp || !fp.hash) {
      console.error(`Skip pin ${slug}: no fingerprint`);
      continue;
    }
    writePin(repoRoot, slug, fp);
    n++;
  }
  console.log(`Synced ${n} pins under ${PINS_REL}/ (src/ untouched)`);
  return 0;
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const opts = parseArgs(process.argv);
  if (opts.help || !opts.mode) {
    process.stdout.write(usage());
    process.exit(opts.badArg || !opts.mode ? 2 : 0);
  }

  const repoRoot = findRepoRoot(opts.repo);
  process.chdir(repoRoot);

  if (!fs.existsSync(path.join(repoRoot, WORKFLOW_REL))) {
    console.error(`Missing workflow data: ${WORKFLOW_REL}`);
    process.exit(2);
  }

  const akCli = opts.mode === "rebuild-index" ? null : await loadAkCliSource(repoRoot, opts.kitRoot);

  let code = 0;
  switch (opts.mode) {
    case "rebuild-index":
      code = modeRebuildIndex(repoRoot);
      break;
    case "check":
      code = modeCheck(repoRoot, opts.kitRoot, akCli);
      break;
    case "report":
      code = modeReport(repoRoot, opts.kitRoot, akCli);
      break;
    case "sync":
      code = modeSync(repoRoot, opts.kitRoot, akCli);
      break;
    default:
      process.stdout.write(usage());
      code = 2;
  }
  process.exit(code);
}

main().catch((err) => {
  console.error(err && err.stack ? err.stack : String(err));
  process.exit(2);
});

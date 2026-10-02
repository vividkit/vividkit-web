---
name: vk:audit-skill
description: "Audit upstream ClaudeKit skill changes, generate infographic data, sync skills registry, and auto-add scenarios for new skills. Use when syncing how-ck-works guide with upstream changes."
argument-hint: "[--check | --report | --sync | --sync-registry] [--force-docs] [--kit engineer|marketer|all] [--branch stable|beta]"
metadata:
  author: vividkit
  version: "1.1.0"
---

# VK Audit Skill

Detect changes in ClaudeKit reference repos, generate infographic data for the how-ck-works guide, and **auto-chain** to `/vk:add-scenario` for newly added skills.

## Arguments

| Argument | Description |
|----------|-------------|
| `--check` | Quick: report change count since last audit (no writes) |
| `--report` | Detailed: generate markdown audit report |
| `--sync` | Full: extract metadata + generate infographics + add scenarios |
| `--sync-registry` | Rebuild `reference/skills-registry.json` (source-of-truth for VividKit Guides UI) |
| `--force-docs` | Combine with `--sync`: regenerate `docs/ck-architecture/ck-*.md` for ALL modified skills (default: docs only regenerated for Added skills) |
| `--kit` | Filter: `engineer`, `marketer`, or `all` (default: `all`) |
| `--branch` | Filter: `stable`, `beta`, or `all` (default: `stable`) |

## Reference Paths

| Kit | Branch | Path | Skills Location |
|-----|--------|------|-----------------|
| Engineer | stable | `reference/stable/` | `claude/skills/` |
| Engineer | beta | `reference/beta/` | `claude/skills/` |
| Marketer | stable | `reference/marketing-stable/` | `.claude/skills/` (note leading dot) |
| Marketer | beta | `reference/marketing-beta/` | `claude/skills/` |

**IMPORTANT:** Layout is inconsistent across upstream branches. `marketing-stable` uses the hidden `.claude/` directory while the other three use plain `claude/`. Hard-code these paths — do not assume uniform layout.

## Workflow

### Step 1: Read Baseline State

Read existing state files:
```
reference/.skill-audit-state.json   # This skill's own state (SHAs + metadata)
```

**IMPORTANT:** Do NOT read or write `reference/.last-sync` — that file belongs to `/vk:changelog-sync`. Using it would break changelog-sync's ability to detect non-skill changes (hooks, rules, agents, etc.).

If `.skill-audit-state.json` doesn't exist, create with empty state and use `HEAD~20` as baseline for first run.

### Step 2: Detect Changes

For each reference repo (filtered by --kit and --branch):

1. Check if repo exists at path
2. Get current HEAD SHA
3. Compare with SHA from `.skill-audit-state.json` (or `HEAD~20` if first run)
4. Run git diff to detect SKILL.md changes:
   ```bash
   cd reference/{branch}
   git diff {base_sha}..HEAD --name-status -- 'claude/skills/**/SKILL.md'
   ```

Categorize changes:
- **Added (A)**: New skill files
- **Modified (M)**: Updated skill files
- **Deleted (D)**: Removed skill files
- **Renamed (R)**: Skill directory renamed — git shows `R<similarity>  <old-path>  <new-path>`. Treat as: (a) the new path is M for VividKit purposes (content likely changed); (b) any UI files referencing the old slug (e.g. `infographic-<slug>-quick-ref.astro`, scenario IDs, anchors in `HowCkWorksGuide.astro`) MUST be flagged for manual rename. Do NOT auto-rename UI files — too risky without user review.

**IMPORTANT — skill-name vs directory-name mismatch.** Skill `name:` in frontmatter does NOT always match its directory. Examples in engineer-stable:
- `ck:plan` lives at `claude/skills/ck-plan/` (not `plan/`)
- `ck:cook` lives at `claude/skills/cook/`
- `ck:code-review` lives at `claude/skills/ck-code-review/` (renamed from `code-review/` in 2026-05)
- `ck:fix` lives at `claude/skills/fix/`

Build the mapping by reading `name:` from each `SKILL.md` frontmatter — never assume `<slug>/` matches `ck:<slug>`. When the user requests `--check <skill-name>`, resolve the directory by grepping `name: <skill-name>` across the branch, not by string-matching the slug to a directory name. This bug bit the May 2026 audit run (cf. `reference/.skill-audit-state.json` notes for ck:plan v1.1.0).

### Step 3: Extract Metadata (for --report and --sync)

For each changed SKILL.md file:

1. Read file content
2. Parse YAML frontmatter:
   - `name`, `description`, `argument-hint`
   - `metadata.version`, `metadata.author`
3. Extract sections:
   - Process flow (numbered steps or mermaid)
   - When to Use / Workflow
   - Core principles / Expertise areas
   - Skill stack (agents, tools, skills used)
4. Map to `SkillInfographic` schema

### Step 4: Generate Infographic Data (for --sync)

For each extracted skill, generate entry matching `SkillInfographic` interface:

```typescript
{
  id: string;           // skill name
  command: string;      // /ck:<name> or /ckm:<name>
  kit: 'engineer' | 'marketer';
  header: { titleEn, titleVi, taglineEn, taglineVi };
  hardGate?: { type, titleEn, titleVi, contentEn, contentVi };
  processFlow: Array<{ number, titleEn, titleVi, descEn, descVi }>;
  corePrinciples: string[];
  expertiseAreas: string[];
  workflowModes?: Array<{ flag, modeEn, modeVi, research, redTeam, validation, cookFlag }>;  // mode-style flags
  outputFlags?: Array<{ flag, titleEn, titleVi, descEn, descVi, exampleCommand? }>;          // output/publish flags: --html/--github/--wiki
  skillStack: Array<{ name, type: 'agent'|'tool'|'skill' }>;
  reportOutput?: { titleEn, titleVi, patternEn, patternVi, descEn, descVi };
}
```

**Flag/arg additions (MANDATORY enrichment):** when a skill's `argument-hint` gains a flag/arg/sub-command, do NOT stop at the version bump. Mode-style flags → `workflowModes` row + `promptExamples`. Output/publish flags (`--html`/`--github`/`--wiki`) → `outputFlags` entry (rendered by every quick-ref + the fallback). New hard gate/step → bump `hardGate` `(N)` + `processFlow`. **Also enrich the matching scenario PIPELINE** in `workflow-visualizer-scenarios.ts`: update the relevant `steps[]` entry's `descEn/Vi`, `explainEn/Vi`, `codeSnippet` (output flags belong in the terminal `output` step, after the gates). EN field added → natural-Vietnamese twin required.

Update `src/data/guides/how-ck-works/skill-infographics.ts`:
- Add new entries
- Update modified entries
- Remove deleted entries (mark deprecated or comment out)

**IMPORTANT — quick-ref components also need an audit pass.** `skill-infographics.ts` is data only; the actual user-facing copy in How-CK-Works is rendered by per-skill astro components that HARD-CODE mode descriptions, prompts, and rule cards:

| Skill | Quick-ref component | Hard-coded content to verify |
|-------|---------------------|------------------------------|
| `ck:brainstorm` | `infographic-brainstorm-quick-ref.astro` | hardGateBody, artifactDesc, prompts, guardrail (Anti-Rationalization) thoughts |
| `ck:plan`       | `infographic-plan-quick-ref.astro`       | mode table for `--auto/--fast/--hard/--deep/--parallel/--two`, `--tdd`/`--no-tasks` flag cards, tddCombos, handoff text |
| `ck:cook` + `ck:fix` | `infographic-execution-quick-ref.astro` | mode tables (both skills), ruleCards, guardrails, prompts |
| `ck:team` | `infographic-team-quick-ref.astro` | 3 hard-gate cards (TeamCreate-first / env+CLI lock / Opus 4.6 lock), 4 template cards (research/cook/review/debug) with default N + sample prompts + use-when + output, principles grid |

For every Modified skill that has a quick-ref component, **grep the component for any strings that contradict the new SKILL.md** (mode flag descriptions, score thresholds, hard-gate language, references to artifacts/validators). Patch in place. Without this step, `skill-infographics.ts` and `docs/ck-architecture/*.md` can be perfectly in sync while the rendered guide page still shows obsolete content (the May 2026 cook sync missed `score >= 9.5` in the quick-ref this way).

#### Canonical Quick-Ref styling & structure (NON-NEGOTIABLE for new components)

Every per-skill Quick Ref component MUST follow the same visual language and section order so the guide reads consistently across skills. Use `infographic-brainstorm-quick-ref.astro` and `infographic-plan-quick-ref.astro` as the structural reference; `infographic-team-quick-ref.astro` is the most recent example for multi-template skills.

**Required section order (top → bottom):**

1. **Header card** — `rounded-2xl border border-slate-200 bg-white dark:bg-slate-950/55` with the gradient top hairline, dotted grid mask, and a `xl:grid-cols-[minmax(0,1fr)_330px]` (or `_360px`) split. Left column = eyebrow pill (`Quick Ref / <command intent>`) + context pill + `<h2>` command in `font-mono text-3xl/4xl` + 1-line summary + 4-chip hero flow grid. Right column = `<aside>` for hard gate(s) using the skill's accent tone (amber for warning, rose for critical). Header may close with a 3-column rule-card row when the skill has flat invariants (see brainstorm/plan); skip the row if hard-gate aside already lists the gates as cards (see team).
2. **Execution Map section** — `rounded-2xl` card titled with `text-xs font-semibold uppercase tracking-wider text-slate-500`, body split into 2-5 lane groups (`processGroup`) where each lane has a vertical rail (`h-10 w-1.5 ... lg:h-12 lg:w-2`), numeric chip `0X`, label, kicker, and `<ol class="grid gap-3 sm:grid-cols-2">` of `processFlow` steps with `2.25rem` number bubble.
3. **Skill-specific surface** — depends on the skill's primary affordance:
    - Mode-driven skills (plan/cook/fix) → modes table card + composable-flags card + `--tdd` combo callout (violet accent).
    - Template-driven skills (team) → templates grid (2×N) with flag badge, default N pill, sample prompt code block, use-when / output blocks.
    - Workflow-driven skills (brainstorm) → sample prompts card with "Same session / Fresh session" variants and `Recommended` ribbon.
4. **Report Output** — single article card with title, location pill (emerald), full pattern code block, and either a `divide-y` list of report sections or a 2-column grid of bullets parsed from `reportOutput.descEn` by `•`.
5. **Stack sidebar** — aside with `text-xs uppercase` heading and `flex flex-wrap gap-2` of pill badges from `data.skillStack`. Either co-located in a `lg:grid-cols-[minmax(0,1fr)_330px]` section with Report Output (plan/team) or as a standalone card (brainstorm).
6. **Optional guardrails / principles** — card with 2-column grid of accent-colored items (Anti-Rationalization thoughts for brainstorm, Core Principles for team). Cycle through `rose / amber / sky / violet / emerald` accent classes.
7. **Optional Deep-Dive CTA** — full-width `<a>` link in sky tones with command-flag badges on the right (see plan).

**Required Tailwind tokens (do not invent new shades):**

- Surfaces: `bg-white dark:bg-slate-950/45`, `bg-slate-50/80 dark:bg-white/[0.03]`, `bg-white/70 dark:bg-slate-950/35`.
- Borders: `border-slate-200 dark:border-white/10`. Accent borders use `-200` light / `-800/50` dark.
- Tone families (pick one per section group): sky (orient/setup), amber (research/spawn), rose (stress/coordinate/critical), violet (deep/review), emerald (handoff/close/recommended).
- Code blocks: `rounded-lg bg-slate-100 px-3 py-2 font-mono text-xs leading-5 text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800/90 dark:text-slate-200 dark:ring-white/10`. Command highlights add `text-purple-600 dark:text-purple-400`.

**Wiring contract:**

- Add `import InfographicXxxQuickRef from './infographic/infographic-<slug>-quick-ref.astro';` to `workflow-skill-infographic.astro`.
- Add a branch in the `scenarioId === '<id>' ?` ladder before the fallback. The fallback layout is acceptable for first-pass scenarios but every command-level skill (anything with hardGate + processFlow ≥ 5 + skillStack) MUST graduate to a purpose-built Quick Ref.
- Localize all copy through `text = { ... }` with `isVi ? viCopy : enCopy` — never inline string literals in JSX.

When auditing a Modified skill, verify the Quick Ref still matches this contract; flag drift in the report summary even if no other content changed.

### Step 5: Auto-Chain to add-scenario (for NEW skills only)

**IMPORTANT:** For each **Added (A)** skill detected:

1. Check if scenario already exists in `workflow-visualizer-scenarios.ts`
2. If NOT exists, auto-run `/vk:add-scenario <skill-name>` logic:
   - Generate architecture doc in `docs/ck-architecture/`
   - Add `WorkflowScenario` entry to `workflow-visualizer-scenarios.ts`
3. Log action: `[AUTO-CHAIN] Added scenario for <skill-name>`

**Modified (M) skills**: Only update infographic, do NOT regenerate scenario (preserve manual edits).

### Step 5b: Force-Regenerate Architecture Docs (when --force-docs)

**Only runs when `--force-docs` is passed with `--sync`.**

For each **Modified (M)** skill detected, re-generate `docs/ck-architecture/ck-<skill-slug>.md`:

1. Read current `reference/{branch}/claude/skills/<skill>/SKILL.md`
2. Extract authoritative flow, mode table, skills/sub-agents activated, hard gates, references
3. Map to existing architecture doc template (see `ck-bootstrap.md` as reference format)
4. Overwrite `docs/ck-architecture/ck-<skill-slug>.md`
5. Log action: `[FORCE-DOCS] Regenerated ck-<skill-slug>.md`

**Slug mapping:**
- Skill name `ck:plan` → file `ck-plan.md`
- Skill name `ck:cook` → file `ck-cook.md`
- Marketer prefix: `ckm:<name>` → `ckm-<name>.md`

**Preservation rules:**
- If the existing architecture doc has a `## Notes (manual)` section at the bottom, preserve it verbatim
- If unsure, ask user via `AskUserQuestion` before overwriting large custom additions (>50 LOC drift)

**Without `--force-docs`:** modified skills' architecture docs remain untouched (preserves manual edits). Only Added (A) skills get fresh docs via the auto-chain in Step 5.

### Step 5c: Sync Registry (when --sync-registry)

**Runs as a standalone mode OR alongside `--sync`.** Updates `reference/skills-registry.json` — the source-of-truth used to verify VividKit Guides UI content (commands grid, beta-preview section, workflow cards) against upstream. Tracks **three asset types**: skills, commands (legacy slash-commands, marketer-only), and agents.

#### CRITICAL: Context-bloat protocol

The full registry is ~8000 lines. **Never `Read` it into LLM context.** Two files exist:

| File | Size | Purpose | When to Read |
|------|------|---------|--------------|
| `reference/skills-registry-index.json` | ~280 lines | Slim index: SHAs, summary, flat name lists | Always — load this into context |
| `reference/skills-registry.json` | ~8000 lines | Full entries with channels, args, flags | NEVER `Read` — query via `jq` only |

**Audit-cycle guarantees:**
1. Always start by reading the **index file** to get cached SHAs and the asset name set.
2. Diff upstream against cached SHAs with `git -C reference/<branch> diff <cached-sha>..HEAD --name-only -- 'claude/skills/**/SKILL.md' '.claude/skills/**/SKILL.md' 'claude/commands/**' '.claude/commands/**' 'claude/agents/**' '.claude/agents/**'`. This returns a small file list — only those files need inspecting.
3. For each changed file: `Read` the new SKILL.md/command/agent file directly (small, single-file). Do NOT consult the full registry to "see what was there" — git diff already tells you.
4. To get a specific existing entry's details when needed: `jq '.skills[] | select(.name=="ck:plan")' reference/skills-registry.json` via Bash. Returns ~30 lines, not 8000.
5. To regenerate after changes: `python3 scripts/build-skills-registry.py`. Script reads filesystem authoritatively and overwrites both files. No registry-mutation logic in LLM context — script is idempotent.

**Anti-patterns** (do not do these):
- `Read reference/skills-registry.json` with no offset/limit → bloats context.
- Manually editing `skills-registry.json` → next script run will revert.
- Using the registry as input source for diff detection → use git SHAs from the index instead, then diff filesystems.

#### Procedure

1. **Spawn 4 parallel `Explore` (haiku) scouts** — one per branch (filtered by `--branch` if set):
   - Each scout reads every `SKILL.md` under its branch's skills directory (paths from the table above — note marketing-stable's hidden `.claude/`)
   - Each scout extracts per-skill: `name`, `argumentHint` (verbatim), `version`, `description` (first sentence), `deprecated` (bool), `args` (bracketed positional from argument-hint), `flags` (raw `--flag` patterns)
   - Each scout writes to `plans/reports/scout-{date}-{time}-skills-{branch}.json` as a pure JSON array
   - Skip `_shared/`, `common/`, `document-skills/` subdirs

2. **Run merge script:** `python3 scripts/build-skills-registry.py`
   - **Skills:** merges per-branch scout JSONs. Re-parses flags **only from `argument-hint`** (body flags are noise from code examples).
   - **Commands:** walks `commands/**/*.md` directly (no scout needed). Name suffix-mapped from path: `commands/ckm/plan/archive.md` → `ckm:plan:archive` with `parent: "ckm:plan"`. Reads `description` + `argument-hint` from frontmatter.
   - **Agents:** walks `agents/*.md` directly. Reads `name`, `description`, `tools`, `model`, `memory` from frontmatter. Deduped by `(kit, name)` — same agent name can exist in both engineer and marketer kits independently.
   - All three: merges branches into per-asset `channels: { stable | beta | marketing-stable | marketing-beta }` map.
   - `kit`: skills/commands inferred from `ckm:` prefix; agents inferred from branch name.
   - Captures upstream SHAs for each branch.
   - Writes `reference/skills-registry.json`.

3. **Verify drift vs UI data files** (read-only):
   - Compare registry skill list against `src/data/guides/commands-engineer-kit.ts` and `commands-marketing-kit.ts`
   - Flag missing/extra skills, version drift, missing flags in UI
   - Output drift report to `plans/reports/registry-drift-{date}.md`

4. **Do NOT auto-fix UI files.** Drift report is advisory — manual fixes preserve curated descriptions/translations.

#### Registry schema

```json
{
  "lastBuilt": "2026-04-29T08:17:00Z",
  "upstreamShas": { "stable": "<sha>", "beta": "<sha>", "marketing-stable": "<sha>", "marketing-beta": "<sha>" },
  "summary": {
    "totalSkills": 131, "engineerSkills": 82, "marketerSkills": 49, "deprecatedSkills": 7,
    "totalCommands": 78, "engineerCommands": 0, "marketerCommands": 78,
    "totalAgents": 45, "engineerAgents": 14, "marketerAgents": 31
  },
  "skills":   [ { "name": "ck:plan",          "kit": "engineer", "deprecated": false, "channels": { ... } } ],
  "commands": [ { "name": "ckm:plan:archive", "kit": "marketer", "parent": "ckm:plan", "deprecated": false, "channels": { ... } } ],
  "agents":   [ { "name": "code-reviewer",    "kit": "engineer", "channels": { "stable": { "description": "...", "model": null, "memory": "project", "tools": [...] } } } ]
}
```

**Channel rule:** an asset present in only some channels has only those keys in `channels`. Use channel keys to determine where each `args`/`flags` set lives — STABLE, BETA, or both.

**Asset shape differences:**
- **skills:** include `version`, `argumentHint`, `args`, `flags`, `deprecated`, `description` per channel.
- **commands:** include `argumentHint`, `args`, `flags`, `description` per channel; top-level `parent` (null for root commands like `ckm:plan`, set to namespace for nested ones like `ckm:plan:archive`).
- **agents:** include `description`, `model`, `memory`, `tools[]` per channel. No args/flags (agents don't take CLI args).

**Naming:**
- Skills: `<kit-prefix>:<name>` — `ck:plan`, `ckm:campaign`.
- Commands: full colon-path from filesystem — `ckm:plan:archive`, `ckm:write:blog:youtube`.
- Agents: bare frontmatter `name:` field, no prefix — `code-reviewer`, `campaign-manager`. Same agent name can exist in both kits as separate entries (deduped by `(kit, name)`).

### Step 6: Update Audit State

Write to `reference/.skill-audit-state.json` (separate from `.last-sync`):
```json
{
  "lastAudit": "2026-04-13T03:20:00Z",
  "branches": {
    "stable": { "sha": "abc123", "skillCount": 20 },
    "marketing-stable": { "sha": "def456", "skillCount": 8 }
  },
  "skills": {
    "brainstorm": { "version": "2.16.0", "lastModified": "2026-04-10" },
    ...
  }
}
```

### Step 7: Compile Check

```bash
npx astro check 2>&1 | head -30
```

Fix any TypeScript errors before completing.

**Pre-existing noise:** the repo has ~23k pre-existing TS errors (mostly `deals-scheduled-draw-state.ts` and similar untyped lookup helpers). Don't try to fix them — just confirm none of the newly reported errors point at files you touched in this run. If `head -30` shows your edits clean and the bulk count matches roughly the pre-existing baseline, that's a pass.

### Step 8: Report Summary

Output summary:
```
VK Audit Complete
─────────────────
Branch: stable
Changes detected: 3 (2 modified, 1 added)

Modified:
  - brainstorm (infographic updated)
  - plan (infographic updated)

Added:
  - ship (infographic + scenario created) [AUTO-CHAIN]

Deleted: 0

Files updated:
  - src/data/guides/how-ck-works/skill-infographics.ts
  - src/data/guides/how-ck-works/workflow-visualizer-scenarios.ts
  - docs/ck-architecture/ck-ship.md
```

## Output Modes

| Mode | Reads | Writes |
|------|-------|--------|
| `--check` | `.skill-audit-state.json`, reference repos | None (stdout only) |
| `--report` | Above + SKILL.md files | `plans/reports/audit-*.md` |
| `--sync` | All above | `skill-infographics.ts`, `workflow-visualizer-scenarios.ts`, `docs/ck-architecture/*.md` (Added only), `.skill-audit-state.json` |
| `--sync --force-docs` | All above | Same as `--sync` PLUS `docs/ck-architecture/*.md` for every Modified skill |
| `--sync-registry` | Index file + changed upstream files (via git diff) | `reference/skills-registry.json`, `reference/skills-registry-index.json`, `plans/reports/registry-drift-*.md` |

**Note:** Does NOT touch `reference/.last-sync` — that file belongs to `/vk:changelog-sync`.

## Error Handling

- **Reference repo not found**: Skip with warning, continue others
- **SKILL.md parse error**: Log warning, skip skill, continue
- **TypeScript compile error**: Report error, suggest manual fix
- **add-scenario fails**: Log error, continue with remaining skills

## Security

- Read-only access to reference repos (no git push)
- Only writes to `src/data/`, `docs/ck-architecture/`, `reference/.audit-state.json`
- Never modifies source SKILL.md files in reference repos
- Never modifies `~/.claude/settings.json`

## Related Skills

- `/vk:add-scenario` — Manual scenario addition (auto-chained for new skills)
- `/vk:changelog-sync` — Broad changelog sync (all categories: skills, hooks, rules, etc.)

### State File Separation

| Skill | State File | Purpose |
|-------|------------|---------|
| `vk:changelog-sync` | `reference/.last-sync` | Track all ClaudeKit changes |
| `vk:audit-skill` | `reference/.skill-audit-state.json` | Track skill-specific changes + metadata |

**Why separate?** changelog-sync needs to detect ALL changes (hooks, rules, agents). If audit-skill updated `.last-sync`, changelog-sync would miss non-skill changes.

## Examples

```bash
# Quick check for changes
/vk:audit-skill --check

# Detailed report without writes
/vk:audit-skill --report --kit engineer

# Full sync with auto-chain
/vk:audit-skill --sync

# Sync only marketer kit stable branch
/vk:audit-skill --sync --kit marketer --branch stable

# Full sync + regenerate architecture docs for ALL modified skills
/vk:audit-skill --sync --force-docs --kit engineer

# Rebuild source-of-truth skills registry (used to verify Guides UI vs upstream)
/vk:audit-skill --sync-registry
```

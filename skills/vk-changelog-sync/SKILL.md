---
name: vk:changelog-sync
description: Auto-detect ClaudeKit changelog since last VividKit docs update. Syncs reference codebase, generates diff report, identifies guide impacts. Use when updating VividKit guides to match latest ClaudeKit versions.
version: 2.0.0
argument-hint: "[--check | --sync | --report] [--branch stable|beta|both] [--kit engineer|marketing|all]"
---

# ClaudeKit Changelog Sync

Auto-detect changes in ClaudeKit Engineer Kit and Marketing Kit since last VividKit guides update.

## ⚠️ Stable-First Principle

**VividKit Guides primarily document STABLE versions.** Beta is a forward-looking supplement, not the source of truth.

### Universal Beta-Badge Rule

Apply to any skill, command, sub-command, flag, argument, or hook surfaced anywhere in the guides:

| Upstream presence | VividKit Guide treatment |
|---|---|
| **In stable (any version)** | NO beta badge. Document as a normal stable entry. Remove any pre-existing `isBeta: true` flag. |
| **Only in beta branch** | Dual-list: (a) add stable-group entry with `isBeta: true` flag — renders purple BETA badge inline so the skill is discoverable in its natural category; (b) also surface in Beta Preview section as forward-looking signal. On graduation to stable, drop both: remove `isBeta: true` AND remove Beta Preview entry. |
| **Still in stable, removed from beta** | Stable card: keep AS IS (still functional for stable users). Beta Preview: add entry with `badge: "deprecated"` (signal: scheduled for removal in next stable). When stable also removes it, delete both. |
| **Deprecated/superseded in stable** | `deprecated: true` on the stable card. Do NOT also list in Beta Preview as "deprecated". |

**Trigger on every sync:** for each item that changed status upstream, flip the corresponding VividKit flag. The decision is mechanical — does it ship in current stable? If yes → no badge. If only beta → badge.

### Status Tracking Table

The dated per-item status log lives in [references/status-tracking.md](references/status-tracking.md). Read it before adding or removing a beta badge, and append a dated row whenever an item crosses the stable/beta boundary. Items not in the log follow the Universal rule directly from upstream presence.

If the log contradicts the upstream changelog (e.g. upstream still labels an item beta but the log says promoted), trust the log — it records the latest verified release state.

### Beta → stable promotion checklist

Run every step on each promotion (`✗ | ✓ beta` → `✓ X.Y.Z | ✓`), even when no flags changed. Step 3 is the one most often missed, because beta-era stable wording usually understates the shipped feature.

1. Remove `isBeta: true` everywhere the item appears: `commands-engineer-kit.ts`, `workflows-stable.ts` (EN + VI), `workflows-marketing-kit.ts` (EN + VI), `flowchart-index.ts`, `custom-hooks-data.ts`.
2. Remove the Beta Preview entry from the `<!-- Beta preview card -->` block in `commands-categories-grid.astro` and drop its now-unused i18n keys (`commands.beta_*.desc`/`.detail`).
3. Refresh stable `desc`/`detail` in both `src/i18n/en/commands.ts` and `src/i18n/vi/commands.ts` to match the upstream stable SKILL.md `description`. Plain text only — stable `detail` renders without HTML.
4. Add newly shipped flags/subcommands to the stable card's `flags`/`subcommands` in `commands-engineer-kit.ts`.
5. Bump the stable version badge in `commands-categories-grid.astro` when the promotion ships with a stable release.
6. Append a dated row to the status log.

### Beta Preview Section Semantics (CommandsGuide only)

The "Beta Preview" card in `commands-categories-grid.astro` exists ONLY to surface what is **net-new in the latest BETA** that has NOT yet shipped to stable. The category cards below it reflect the current STABLE release.

**Rules:**
- Beta Preview = forward-looking only. Once an item ships to stable, REMOVE its entry from Beta Preview.
- "Enhanced" entries (new flags, new sub-commands) belong in Beta Preview ONLY while still beta-exclusive. After release, drop them.
- Two "deprecated" scenarios — do not conflate:
  - **(A) Already deprecated in stable** (stable still ships it but it's superseded, e.g. `/ck:autoresearch`): mark stable card `deprecated: true`. NOT in Beta Preview — historical signage doesn't belong there.
  - **(B) Still in stable, removed from beta** (forward-looking signal that next stable will drop it): keep stable card AS IS. Add entry to Beta Preview with `badge: "deprecated"` to warn users of upcoming removal. See Universal Beta-Badge Rule.
- Post-release audit: Beta Preview card should shrink down to genuinely new beta-only items + still-beta-exclusive enhancements.

### Inline Beta Badge (WorkflowsGuide)

WorkflowsGuide has 2 tabs only (EK, MK). NO "Beta Preview" section. Beta items marked inline at 3 levels:

| Level | Field path | Badge color |
|---|---|---|
| Workflow-level | `workflow.isBeta` | purple, next to level chip |
| Step-level | `step.isBeta` (inside `workflow.steps`) | purple, next to step command |
| Flag-level | `f.isBeta` (inside `workflow.cookFlags` / `planFlags`) | amber |

**Migration trigger:** when an item changes status upstream, flip `isBeta` at every level it appears. `workflows-beta-additions.ts` should remain empty unless there's a net-new beta-only workflow that doesn't fit any existing stable pattern.

## Progressive Disclosure Levels

### Level 1: Quick Check (default, no args)
What changed since last sync? Returns summary only.

```bash
node skills/vk-changelog-sync/scripts/detect-changes.cjs --check
```

### Level 2: Detailed Report (`--report`)
Generate categorized changelog with guide impact analysis.

```bash
node skills/vk-changelog-sync/scripts/detect-changes.cjs --report
```

### Level 3: Full Sync (`--sync`)
Fetch latest codebase, generate report, update last-sync marker.

```bash
node skills/vk-changelog-sync/scripts/detect-changes.cjs --sync
```

## Kit Selection

- `--kit engineer` - Only Engineer Kit (stable/beta)
- `--kit marketing` - Only Marketing Kit (marketing-stable/marketing-beta)
- `--kit all` - Both kits (default)

## Branch Selection

- `--branch stable` - Only stable branches
- `--branch beta` - Only beta/dev branches
- `--branch both` - Both branches (default)

## Examples

```bash
# Quick: what changed across all kits?
node skills/vk-changelog-sync/scripts/detect-changes.cjs --check

# Full sync: fetch + report + update marker (all kits, all branches)
node skills/vk-changelog-sync/scripts/detect-changes.cjs --sync

# Report for Engineer Kit stable only
node skills/vk-changelog-sync/scripts/detect-changes.cjs --report --kit engineer --branch stable

# Report for Marketing Kit only
node skills/vk-changelog-sync/scripts/detect-changes.cjs --report --kit marketing
```

## How It Works

1. **Marker file**: `reference/.last-sync` stores last synced commit SHAs for all 4 directories
2. **Fetch**: Runs Makefile targets (`fetch-stable`, `mkt-fetch-stable`, etc.)
3. **Diff**: Compares current HEAD vs last-sync SHA using git diff
4. **Categorize**: Groups changes into: skills, agents, hooks, rules, commands, workflows, config, scripts, schemas
5. **Impact map**: Maps each category to VividKit guide files that need updating
6. **Report**: Generates markdown report with per-kit impacts + combined summary

## Directory Mapping

| Kit | Stable Dir | Beta Dir | Makefile Targets |
|-----|-----------|---------|-----------------|
| Engineer | `reference/stable/` | `reference/beta/` | `fetch-stable`, `fetch-beta` |
| Marketing | `reference/marketing-stable/` | `reference/marketing-beta/` | `mkt-fetch-stable`, `mkt-fetch-beta` |

## Impact Mapping

| ClaudeKit Category | VividKit Guide Files |
|---|---|
| `.claude/skills/*` | `workflows.ts`, `CommandsGuide.astro`, `WorkflowsGuide.astro` |
| `.claude/agents/*` | `workflows.ts`, `WorkflowsGuide.astro` |
| `.claude/hooks/*` | `CustomHooksGuide.astro`, `workflows.ts`, `session-recovery-hero-and-auto-state.astro`, `session-recovery.ts` (i18n) |
| `.claude/rules/*` | `WorkflowsGuide.astro`, `WhatIsClaudeKitGuide.astro` |
| `.claude/commands/*` | `commands-engineer-kit.ts`, `commands-marketing-kit.ts`, `CommandsGuide.astro` |
| `.claude/workflows/*` | `WorkflowsGuide.astro` |
| `.claude/settings.json` | `PermissionsGuide.astro`, `CLIGuide.astro` |
| `.claude/schemas/*` | `IDEConfigGuide.astro` |
| `CLAUDE.md` | `WhatIsClaudeKitGuide.astro`, `CLIGuide.astro` |
| `.claude/skills/*` (new/changed) | `workflow-visualizer-scenarios.ts` (scenario card), `skill-infographics-additional.ts` (infographic detail) |

## Semantic Guide Analysis

The report includes an **Actionable Guide Updates** section that cross-references ClaudeKit changes with VividKit guide data:

- **ADD**: New hooks, categories, agents, or commands need to be added to guides
- **UPDATE**: Existing content needs revision (version bumps, modified descriptions)
- **REMOVE**: Deprecated items should be removed from guides
- **REVIEW**: Content may be outdated — verify and update if needed

Analysis covers: category gaps in section components, new/modified hooks and skills, config/schema changes, version updates, and command additions/removals.

## How CK Works Guide Sync

Each skill on `/guides/how-ck-works` has **2 data entries** that must stay in sync:

| Layer | File | Fields |
|-------|------|--------|
| Scenario (card outside) + **pipeline** | `src/data/guides/how-ck-works/workflow-visualizer-scenarios.ts` | `titleEn/Vi`, `descEn/Vi`, `steps[]` (= the rendered pipeline: each step has `name`, `descEn/Vi`, `explainEn/Vi`, `codeSnippet`), icon |
| Infographic / info card (detail inside) | `src/data/guides/how-ck-works/skill-infographics.ts` (core: brainstorm/plan/cook/fix/team) or `skill-infographics-additional.ts` (everything else) | `taglineEn/Vi`, `promptExamples`, `processFlow`, `workflowModes`, **`outputFlags`** (`--html`/`--github`/`--wiki`-style flags), `guardrails`, `modeCards`, `hardGate` |

Core command-level skills also have a purpose-built quick-ref astro component (`src/components/guides/how-ck-works/infographic/infographic-<slug>-quick-ref.astro`) that renders the info card — flag changes must reach it too (it reads the data above, but section copy/`text={}` may need new labels).

### When to update

| Upstream change | Action |
|-----------------|--------|
| **New skill added** | `/vk:add-scenario` — creates both entries |
| **Skill gains a new flag / arg / sub-command** | **Enrich info card AND pipeline** (see rule below) — do NOT stop at the version bump |
| **Skill desc changed** (1-2 fields) | Edit infographic data directly |
| **Batch updates** (5+ skills) | `/vk:audit-skill` — sweeps both layers |
| **Skill removed** | Delete from both files |
| **Periodic drift check** | `/vk:audit-skill` every few versions |

### Flag / arg additions → enrich info card + pipeline

When a SKILL.md `argument-hint` gains a new flag, positional arg, or sub-command (detect via the registry diff or `git diff` on the frontmatter), updating the version is NOT enough. Both how-ck-works layers must reflect the new capability:

1. **Info card (infographic data):**
   - Mode-style flags (change pipeline behaviour, e.g. `--deep`/`--parallel`) → add a `workflowModes` row + a `promptExamples` entry.
   - Output/publish flags (produce/ship an extra artifact, e.g. `--html`/`--github`/`--wiki`) → add an `outputFlags` entry (`flag`, `titleEn/Vi`, `descEn/Vi`, `exampleCommand`). Both `infographic-<slug>-quick-ref.astro` and the fallback already render `data.outputFlags`.
   - New hard gate / mandatory step → update `hardGate` (bump the `(N)` count) and `processFlow`.
2. **Pipeline (scenario `steps`):** enrich the relevant step's `descEn/Vi`, `explainEn/Vi`, and `codeSnippet` so the flow text mentions the new flag and where it runs (e.g. an output flag belongs in the terminal `output` step, after the gates). Do NOT leave the pipeline describing only the pre-flag behaviour.
3. **i18n:** every added EN field needs a natural-Vietnamese twin (see i18n rule).
4. **Verify:** `npx astro check` clean for touched files; grep the slug's quick-ref component for stale flag/mode copy that now contradicts the SKILL.

For 5+ skills changing at once, delegate the sweep to `/vk:audit-skill` instead of hand-editing.

### i18n rule
`descVi` (scenario) and `taglineVi` (infographic) are **separate fields in separate files** — both must be natural Vietnamese, never English copies.

## CommandsGuide Update Workflow

### New Skills (Beta)
When a new skill is added in Beta (either kit):

1. **Beta Preview section** (the `<!-- Beta preview card -->` block in `commands-categories-grid.astro`):
   - Add entry with `badge: "new"`
   - Add i18n translations in BOTH `en/commands.ts` AND `vi/commands.ts`: keys `commands.beta_{skill}.desc` and `commands.beta_{skill}.detail`

2. **Group cards** (stable categories below):
   - Consider adding to appropriate category with `isBeta: true`
   - Shows purple "beta" badge in UI

### Enhanced Skills (Beta)
When an existing stable skill gains a new flag, sub-command, or feature in Beta:

1. **Beta Preview section only**:
   - Add entry with `badge: "enhanced"`
   - Add i18n translations in BOTH `en/commands.ts` AND `vi/commands.ts` (don't duplicate the full skill description — focus on the specific enhancement)
   - Do NOT add to group cards — existing stable entry is sufficient
   - Once the enhancement ships to stable, REMOVE this Beta Preview entry and update the Status Tracking Table

### Beta → Stable Promotion
Follow the promotion checklist under Stable-First Principle.

### Files to Update

| Change Type | Files |
|-------------|-------|
| Beta Preview entries | `commands-categories-grid.astro` |
| Group card entries | `commands-engineer-kit.ts`, `commands-marketing-kit.ts` |
| i18n translations | `src/i18n/en/commands.ts`, `src/i18n/vi/commands.ts` |
| Version badge | `commands-categories-grid.astro` (stable badge) |

## Sample Prompts

### Full sync + visual report (recommended for periodic updates)
```
/vk:changelog-sync make fetch latest then sync and create visual report
```

### Quick check only
```
/vk:changelog-sync
```

### Sync + analyze + update guides
```
/vk:changelog-sync sync all kits, analyze changes, then update VividKit guides for impacted areas
```

### Engineer Kit stable only
```
/vk:changelog-sync --report --kit engineer --branch stable
```

### After manually pulling reference repos
```
/vk:changelog-sync I already pulled latest for all reference repos, just run report and suggest guide updates
```

## Output Location

Reports saved to: `reference/changelog-reports/{date}-{kit}-{branch}-changelog.md`

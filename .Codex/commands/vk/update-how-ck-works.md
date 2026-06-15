---
description: Update How ClaudeKit Works pages with detailed explanations, graphic quick refs, and pipeline views for skill commands.
argument-hint: "[--limit N] [--target <scenario-id|command>] [--generic-only] [--missing-prompts-only] [--include-local-missing] [--dry-run]"
---

# Update How-CK-Works

Upgrade `guides/how-ck-works` entries so each selected skill has the same quality as the completed quick refs (`ck-brainstorm`, `ck-plan`, `ck-cook`, `ck-fix`, `ck-code-review`): detailed explanation, visual pipeline, prompt examples, flags/subcommands coverage, hard gates, artifacts, and polished UI.

This command orchestrates the existing VividKit maintainer skills. It must activate `$vk:audit-skill` for source truth and must activate `$vk:add-scenario` when a selected skill is missing its scenario/doc or when a new skill is being added.

## Arguments

Read `$ARGUMENTS`.

- `--limit N` — max skills to process. Default: `3`.
- `--target <id|command>` — process one scenario, for example `preview`, `/ck:preview`, `write`, `/ckm:write:*`.
- `--generic-only` — prioritize scenarios still using `infographic-generic-command-quick-ref.astro`.
- `--missing-prompts-only` — prioritize skills whose flags/subcommands exist but prompt examples are missing.
- `--include-local-missing` — include installed local `/ck:*` and `/ckm:*` skills that have no How-CK-Works scenario/infographic yet. Use this when the goal is to cover all CK skills, not only polish existing entries.
- `--dry-run` — inventory and report only; do not edit.

## Required Context

Before planning or edits:

1. Read `README.md`.
2. Read `AGENTS.md` and `CLAUDE.md` if present.
3. Activate and read the relevant repo-specific skills:
   - `$vk:audit-skill` from `.agents/skills/vk-audit-skill/SKILL.md`
   - `$vk:add-scenario` from `.agents/skills/vk-add-scenario/SKILL.md`
4. Check `git status --short`; leave unrelated worktree changes alone.
5. Run candidate inventory:

```bash
node scripts/how-ck-works-candidates.cjs --limit 12
```

Useful filters:

```bash
node scripts/how-ck-works-candidates.cjs --generic-only --limit 12
node scripts/how-ck-works-candidates.cjs --missing-prompts-only --limit 12
node scripts/how-ck-works-candidates.cjs --include-local-missing --limit 12
node scripts/how-ck-works-candidates.cjs --json --limit 12
```

## Skill Activation Contract

This custom command must not reimplement the VividKit maintainer workflows from memory.

- Always start with `$vk:audit-skill` semantics to refresh the source-of-truth view: upstream/reference skill body, argument hints, flags, subcommands, modes, hard gates, agents/tools, report artifacts, and registry drift.
- Use `$vk:add-scenario` semantics when the target has no `docs/ck-architecture/ck-<id>.md` / `ckm-<id>.md` or no `WorkflowScenario` entry, or when adding a new skill to How-CK-Works.
- For existing curated scenarios, do not run the add-scenario generation path blindly. Preserve manual quick-ref/layout work and use audit findings to patch only stale or missing sections.
- If a skill script or helper fails, fix the failure or continue with the documented fallback path; do not stop at the first script error.

## Target Selection

If `--target` is provided, process exactly that target.

For a target that exists as a local installed skill but is not in How-CK-Works yet, the candidate inventory should return `quickRef: "missing-scenario"`. Treat that as the `$vk:add-scenario` path: create the architecture doc, scenario entry, infographic data, and quick-ref/nav wiring before running UI verification.

If the candidate inventory returns `visibleInGuide: false`, the scenario exists in data but is not visible on the page. Treat this as an incomplete How-CK-Works update and wire it into the curated selector list before reporting success.

If the goal is to cover all CK skills, run inventory with `--include-local-missing`. Missing local skills receive high priority and should go through the `$vk:add-scenario` path before polish work on existing generic entries.

Inventory output is not completion. It is only the work queue. For every selected row, the command must continue through the update pipeline and leave visible UI changes in `guides/how-ck-works`. Do not report success after only running `scripts/how-ck-works-candidates.cjs`.

Otherwise select by:

1. Highest inventory score.
2. More `workflowModes`, flags, route variants, or wildcard/subcommands (`/ckm:write:*`, `/ckm:seo:*`, etc.).
3. Missing prompt examples for supported flags/subcommands.
4. Generic quick-ref before bespoke, unless a bespoke component is stale or missing sections.
5. Has `hardGate` or complex report/artifact output.

Default batch: top `--limit` candidates. For high-risk UI work, process one skill at a time.

## Mandatory Per-Skill Scouts

Spawn one sub-agent per selected skill. Each sub-agent owns one skill only.

Scout prompt:

```text
Scout How-CK-Works update for <scenario-id>.

Use active $vk:audit-skill findings as source truth.
Invoke $vk:add-scenario workflow only if the architecture doc or scenario entry is missing.
Read only relevant source/context:
- docs/ck-architecture/ck-<scenario-id>.md or docs/ck-architecture/ckm-<scenario-id>.md when present
- docs/ck-architecture/shared-concepts.md
- src/data/guides/how-ck-works/workflow-visualizer-scenarios.ts
- src/data/guides/how-ck-works/skill-infographics.ts
- src/data/guides/how-ck-works/skill-infographics-additional.ts
- src/components/guides/how-ck-works/workflow-skill-infographic.astro
- existing src/components/guides/how-ck-works/infographic/infographic-<scenario-id>-quick-ref.astro if present

If local docs are stale or missing, inspect the matching reference skill/command source via the path rules from vk:audit-skill/vk:add-scenario.

Return:
- source of truth files used
- full supported flags/subcommands/modes
- missing prompt examples
- authoritative process/pipeline steps
- hard gates and required approvals
- report/artifact output pattern
- stack/sub-agents/tools involved
- whether the existing UI should stay generic or become bespoke
- exact files to patch
- verification anchors

Do not propose visible UI text that mentions SKILL.md or internal source filenames.
```

## Update Pipeline

For each selected skill:

1. **Audit source**
   - Activate `$vk:audit-skill` and follow its source-truth rules for upstream/reference skill changes.
   - Activate `$vk:add-scenario` only when a scenario/doc is missing or a new skill must be added.
   - Do not mutate upstream reference repos.

2. **Architecture doc**
   - Ensure `docs/ck-architecture/ck-<id>.md` or `ckm-<id>.md` exists and is current.
   - Include authoritative flow, modes/subcommands, activated stack, sub-agents, hard gates, artifacts.
   - Preserve manual notes if present.

3. **Pipeline graphic data**
   - Update `src/data/guides/how-ck-works/workflow-visualizer-scenarios.ts`.
   - Steps should form a clear pipeline: input/route -> context/scout -> execution lanes -> validation/gates -> output.
   - Use realistic code snippets and bilingual explanations.
   - Mark true sub-agent steps with `isSubAgent: true`.

4. **Infographic data**
   - Update `skill-infographics.ts` or `skill-infographics-additional.ts`.
   - Cover:
     - `hardGate`
     - `processFlow`
     - `workflowModes`
     - `promptExamples` for every supported flag/subcommand or important route
     - `skillStack`
     - `specialOperations` when useful
     - `reportOutput`
     - `deepDiveLink`

5. **Quick-ref UI**
   - If generic is enough, make sure `infographic-generic-command-quick-ref.astro` renders it well.
   - If the skill has many flags/subcommands or needs custom grouping, create/update `infographic-<id>-quick-ref.astro`.
   - Wire bespoke components in `workflow-skill-infographic.astro`.

6. **Page visibility wiring**
   - Add the scenario id to the appropriate curated list in `src/components/guides/how-ck-works/workflow-scenario-selector.astro`:
     - `visibleEngineerSkills` for `/ck:*`.
     - `visibleMarketerSkills` for `/ckm:*`.
   - Add the scenario id to the appropriate quick-ref nav group in `src/components/guides/how-ck-works/HowCkWorksGuide.astro`.
   - Re-run `node scripts/how-ck-works-candidates.cjs --target <id> --json`; success requires `visibleInGuide: true`.

7. **Architecture audit state**
   - After the architecture doc and visible UI update are complete for a target, update `docs/ck-architecture/.audit-state.json`.
   - Use the helper so state updates stay deterministic:

     ```bash
     node scripts/update-ck-architecture-audit-state.cjs --target <id> --status pass --note "How-CK-Works custom command synced visible guide/UI."
     ```

   - This state file is separate from `$vk:audit-skill`'s upstream state (`reference/.skill-audit-state.json`). Do not update `reference/.last-sync`.
   - Each `auditedScenarios.<id>` entry must include structured hash groups:
     - `referenceSourceHashes` for upstream/reference skill files and `references/*.md`,
     - `guideHashes` for generated VividKit architecture docs.
   - Do not record installed local skill paths; How-CK-Works staleness checks must point at reference sources.
   - If a target is intentionally report-only or partially blocked, use `--status warn` and write a specific note.

8. **Design requirements**
   - Match the UI grammar already used by `ck-brainstorm`, `ck-plan`, `ck-cook`, `ck-fix`, `ck-code-review`.
   - Use full-width, dense-but-readable sections.
   - Prompt examples are one row per card, not cramped columns.
   - Hard gates use amber numbered cards.
   - Inline code uses slate/neutral code styling, not amber-on-amber.
   - Do not show internal source names like `SKILL.md` in visible UI.

9. **Completion gate**
   - The selected skill is not complete until:
     - it has `WorkflowScenario` data,
     - it has infographic data,
     - it is visible in `workflow-scenario-selector.astro`,
     - it is present in the quick-ref nav group in `HowCkWorksGuide.astro`,
     - `docs/ck-architecture/.audit-state.json` has an `auditedScenarios.<id>` entry updated for this run with `referenceSourceHashes` and `guideHashes`,
     - `node scripts/how-ck-works-candidates.cjs --target <id> --json` returns `visibleInGuide: true`,
     - Puppeteer confirms the card/button and quick-ref content render on EN and VI routes.

## Canonical Sections

A complete How-CK-Works quick ref should include, in order:

1. Header card with command name, context, summary, 4-step hero flow, and hard gate aside.
2. Execution/Pipeline map grouped into 3-5 lanes.
3. Mode / flag / subcommand section with supported routes.
4. Prompt mẫu / Sample Prompt section, one row per flag/subcommand/route.
5. Artifact/report output section.
6. Stack/sub-agent/tool section.
7. Optional guardrails, templates, principles, or deep-dive CTA.

## Verification

After edits:

```bash
npm run build
rg -n "SKILL\\.md" src/components/guides/how-ck-works dist/guides/how-ck-works/index.html dist/vi/guides/how-ck-works/index.html
git diff --check -- src/components/guides/how-ck-works src/data/guides/how-ck-works docs/ck-architecture
node scripts/update-ck-architecture-audit-state.cjs --target <id> --status pass --note "How-CK-Works custom command synced visible guide/UI."
```

The `rg "SKILL\\.md"` command should return no UI/dist matches.

Run Puppeteer smoke for each changed anchor on English and Vietnamese routes:

- `/guides/how-ck-works#ck-<id>` or `/guides/how-ck-works#ckm-<id>`
- `/vi/guides/how-ck-works#ck-<id>` or `/vi/guides/how-ck-works#ckm-<id>`

Check:

- target command heading is visible,
- target command card/button is visible in the Individual Skills selector,
- pipeline/process section is visible,
- prompt examples exist for each major flag/subcommand,
- gate cards render when `hardGate` exists,
- no text/container overflow at `1440x1100` and `390x900`,
- no visible `SKILL.md` text.

## Final Report

Report:

- selected skills and why,
- sub-agent scout summary per skill,
- files changed,
- flags/subcommands covered,
- anchors verified,
- skills still remaining by priority,
- unresolved questions, if any.

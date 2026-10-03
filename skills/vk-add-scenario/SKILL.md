---
name: vk:add-scenario
description: "Add new ClaudeKit command scenario to the How-CK-Works guide. Reads source SKILL.md, generates architecture doc + scenario data. Use when adding a new /ck:* command to the interactive guide."
argument-hint: "<command> (e.g. ship, test, code-review)"
metadata:
  author: vividkit
  version: "1.0.0"
---

# Add Scenario to How-CK-Works Guide

Read a ClaudeKit `/ck:<command>` source SKILL.md, generate architecture doc in `docs/ck-architecture/`, and add scenario entry to the guide's workflow visualizer data.

## Arguments

- `<command>` (REQUIRED) — the ClaudeKit command name (e.g. `ship`, `test`, `code-review`)
- `--doc-only` — only generate architecture doc, skip scenario data
- `--scenario-only` — only add scenario data, skip architecture doc (assumes doc exists)

## Workflow

### Step 1: Read Source Skill

Read the source skill from the reference clones — the same files Step 9 hashes for staleness:
```
reference/<branch>/claude/skills/<dir>/SKILL.md
reference/<branch>/claude/skills/<dir>/references/*.md   (all, if present)
```

Resolve `<dir>` via the lookup in "Mapping: Command Name → Skill Directory" below. If no clone has the skill, stop and report the error.

### Step 2: Read Existing Guide Context

Read these files for structure/pattern reference:
```
src/data/guides/how-ck-works/workflow-visualizer-types.ts    # TypeScript interfaces
src/data/guides/how-ck-works/workflow-visualizer-scenarios.ts # Existing scenarios
docs/ck-architecture/claudekit-architecture.md               # Architecture index
docs/ck-architecture/shared-concepts.md                      # Shared agent/hook/skill info
docs/ck-architecture/.audit-state.json                       # auditedScenarios marker
```

Pick ONE existing scenario closest in nature to the new command as a template.

### Step 3: Read Hooks Config

```
reference/<branch>/claude/settings.json → hooks section
```

These are the kit's own hook registrations. Identify which hooks are relevant to this command's flow.

### Step 4: Generate Architecture Doc

Create `docs/ck-architecture/ck-<command>.md` following the established pattern:

```markdown
# /ck:<command> — <Short Description>

Source: `reference/<branch>/claude/skills/<dir>/SKILL.md`

## Authoritative Flow

```
Step 1: ...
Step 2: ...
...
```

## Skills Activated

| Type | Skill |
|------|-------|
| Mandatory | ... |
| Conditional | ... |
| Optional | ... |

## Sub-agents

List which agents are spawned via Task/Agent tool, vs which run on main agent.

## Mode Selection

Describe modes if the command has multiple (e.g. auto/review/quick).
If single mode, state "None — single mode."

## Complexity Routing

Describe how complexity affects the workflow, if applicable.

## Hard Gate

State any hard gates (e.g. "no code until plan approved").
```

**Rules:**
- Extract flow from SKILL.md mermaid diagrams or numbered steps
- Cross-reference with `shared-concepts.md` for agent/hook names
- Keep under 80 lines

### Step 5: Update Architecture Index

Add entry to `docs/ck-architecture/claudekit-architecture.md` under `## Commands/Workflows`:
```markdown
- [ck-<command>.md](ck-<command>.md) — /ck:<command> <short description>
```

### Step 6: Generate Scenario Data (unless --doc-only)

Add a new `WorkflowScenario` entry to `src/data/guides/how-ck-works/workflow-visualizer-scenarios.ts`.

**Rules for each WorkflowStep:**

1. **id**: `{2-3 letter prefix}-{step-name}` (e.g. `sh-input`, `sh-hooks`, `sh-scout`)
2. **type**: Must be one of: `user-input` | `hook` | `agent` | `output`
   - First step = `user-input` (the /ck: command invocation)
   - Hooks step = `hook`
   - Any agent/skill work = `agent`
   - Final result = `output`
3. **name**: Short label (English)
4. **descEn/descVi**: 1-line description (bilingual)
5. **explainEn/explainVi**: Detailed multi-line explanation. Use `\n\n` for paragraphs, `\n` for line breaks within paragraphs. Include:
   - What happens in this step
   - Which tools/skills are used
   - Whether sub-agents are spawned
6. **codeSnippet**: Show realistic tool calls or commands. Use `//` comments for structure
7. **icon**: Lucide-compatible SVG path data (pick from existing steps or Lucide icons)
8. **color**: `purple` for input, `blue` for hooks, `green` for agents, `amber` for output/decisions
9. **isSubAgent**: `true` only if the step spawns sub-agents via Agent/Task tool
10. **kit**: Match to appropriate kit (`engineer` or `marketer`)
11. **accentColor**: Pick a Tailwind color that's not already used by nearby scenarios

**Step count guidance:**
- Match the number of steps to the SKILL.md authoritative flow
- Merge trivially small steps (e.g. "git add" + "git commit" = one "Finalize" step)
- Don't add phantom steps not in source
- Typical range: 5-10 steps

### Step 7: Flag Quick-Ref Graduation Need

After the scenario data lands, the new skill renders through the **fallback layout** in `src/components/guides/how-ck-works/workflow-skill-infographic.astro` (header + processFlow + twoColumn + modes + skillStack + specialOps + reportOutput). The fallback is acceptable for low-surface scenarios but command-level skills MUST graduate to a purpose-built `infographic-<slug>-quick-ref.astro`.

**Graduation criteria** (any one triggers):
- Skill has a `hardGate` with critical / non-trivial gate copy
- `processFlow` has ≥ 5 steps that naturally cluster into 3-4 lanes
- Skill has `workflowModes` (mode-driven) OR ≥ 3 `specialOperations` (template-driven)
- Skill is referenced by the primary workflow (brainstorm/plan/cook/fix/team tier)

If the new skill meets graduation criteria, **do not stop after Step 6**. Either:
1. Create the Quick Ref component now following the canonical structure (see `vk:audit-skill` → "Canonical Quick-Ref styling & structure" section + the existing components `infographic-brainstorm-quick-ref.astro`, `infographic-plan-quick-ref.astro`, `infographic-team-quick-ref.astro` as references), OR
2. Add an entry to `plans/reports/quick-ref-backlog-<date>.md` noting which scenario needs the bespoke component, why it qualifies, and what sections it should host (modes / templates / sample prompts / guardrails).

When creating the component, also add the `scenarioId === '<id>'` branch + import in `workflow-skill-infographic.astro` so it actually renders.

### Step 8: Compile Check

Run the project's compile/typecheck command to verify no TypeScript errors:
```bash
npx astro check 2>&1 | head -30
```

If errors, fix them before completing.

### Step 9: Update Architecture Audit State

After the architecture doc, scenario data, and any Quick Ref wiring compile cleanly, update the How-CK-Works architecture audit marker:

```bash
node scripts/update-ck-architecture-audit-state.cjs --target <command> --status pass --note "How-CK-Works add-scenario synced architecture/scenario/UI."
```

**Rules:**
- Normalize `<command>` the same way the guide does (`ck:plan`, `/ck:plan`, and `plan` all record under `auditedScenarios.plan`).
- Use `--status pass` only when the scenario is visible in the guide and the compile check passed.
- Use `--status warn` if the scenario exists but still uses fallback UI despite meeting Quick-Ref graduation criteria, or if only doc/scenario partial work was requested.
- Do not hand-edit `.audit-state.json` unless the helper is missing or broken; fix the helper instead when possible.
- Verify the updated entry exists:
  ```bash
  node -e "const s=require('./docs/ck-architecture/.audit-state.json'); console.log(s.auditedScenarios['<normalized-id>'])"
  ```

The new/updated entry must use the structured hash schema:
- `referenceSourceHashes` — upstream/reference files that can make the guide stale when ClaudeKit changes.
- `guideHashes` — generated VividKit architecture docs used by the visible guide.

Do not record installed local skill paths in this marker; How-CK-Works staleness checks must point at reference sources.

For a skill with `references/*.md`, the helper must capture those reference files too, not only the main skill file. This is what lets later upstream audits identify exactly which source changed.

### Step 10: Summary

Report what was created:
- Architecture doc path
- Scenario id and step count
- Quick-Ref status (created / backlog'd / fallback-OK)
- `auditedScenarios.<id>` status
- Any decisions made (merged steps, icon choices, etc.)

## Mapping: Command Name → Skill Directory

Directory names don't reliably match command names (`ck:plan` lives in `ck-plan/`, `ck:cook` in `cook/`), so resolve by frontmatter, not by slug:

```bash
grep -l '^name: ck:<command>$' reference/{stable,beta}/claude/skills/*/SKILL.md
grep -l '^name: ckm:<command>$' reference/marketing-{stable,beta}/claude/skills/*/SKILL.md
```

Prefer the stable clone over beta. A hit under `marketing-*` sets `kit: 'marketer'`; otherwise `engineer`.

### Kit Detection from Command Prefix

If user passes command with prefix:
- `/ck:fix` or `ck:fix` → strip prefix, search as `fix`, kit = `engineer`
- `/ckm:copywriting` or `ckm:copywriting` → strip prefix, search as `copywriting`, kit = `marketer`
- `fix` (no prefix) → use resolution order above

## Security

- Only reads source SKILL.md files (no modifications to source skills)
- Only writes to `docs/ck-architecture/` (including `.audit-state.json`) and `src/data/guides/how-ck-works/`
- Refuses to modify `~/.claude/settings.json` or any source skill files

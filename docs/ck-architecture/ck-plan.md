# /ck:plan — Implementation Planning

Source: `reference/beta/claude/skills/ck-plan/SKILL.md` (v1.0.0) + `references/`

## Authoritative Flow

```
Pre-Creation Check  → active / suggested / no plan context
Cross-Plan Scan     → detect blockedBy/blocks relationships (bidirectional update)
Scope Challenge     → Step 0 scope questions (skip if --fast or trivial)
Mode Detection      → auto | fast | hard | deep | parallel | two
Research Phase      → spawn researcher sub-agents (skip in fast)
Codebase Analysis   → read docs, scout if stale
Plan Creation       → ck CLI scaffolds plan.md + phase-XX-*.md; planner writes content
Red Team Review     → 2-4 code-reviewer agents (hard/deep/parallel/two)
Verification Pass   → verify plan content accuracy
Validation Interview → critical questions (hard/deep/parallel/two)
Task Hydration      → TaskCreate per phase + critical steps (default on)
Output Cook Command → absolute path, mode-specific flags (MANDATORY)
Journal             → /ck:journal
```

## Prerequisites

- **ck CLI required** — `npm install -g claudekit`. CLI owns plan file scaffolding + phase state mutations.
- Use `ck plan create --title … --phases … --dir …` — do NOT hand-edit CLI-managed structure.
- Phase status changes via `ck plan check/uncheck <phase-id>`.
- Dashboard: `ck config ui --port 3456` → `http://localhost:3456/plans`.
- **Read-before-Write** on phase stubs (Claude Code enforces; skipping Read rejects the Write).

## Scope Selection

| Scope | When | Plans root |
|-------|------|------------|
| Project (default) | Has `.git`, `package.json`, or `CLAUDE.md` in ancestors | `./plans/` |
| Global | Explicit `--global` flag, or no project context | `~/.claude/plans/` (default) |

## Cross-Plan Dependency Detection

During pre-creation scan, detect blocking relationships:

1. **Scan** unfinished plans (status != completed/cancelled)
2. **Compare scope** — overlapping files, shared deps, same feature area
3. **Classify:** new needs existing → `blockedBy`; new changes what existing depends on → reverse + `blocks`; mutual → both
4. **Bidirectional update** — update BOTH plan.md frontmatters
5. **Ambiguous?** → `AskUserQuestion` header "Plan Dependency"

Frontmatter fields:
```yaml
blockedBy: [260301-1200-auth-system]             # Same-scope
blockedBy: [global:260301-1200-auth-system]      # Cross-scope
blocks: [project:260228-0900-user-dashboard]     # Explicit project
```

## Canonical Phase File Template

Loaded once with skill — no per-file Read needed to learn it:

```yaml
---
phase: <N>
title: "<Phase Name>"
status: pending         # pending | in-progress | completed
priority: P2            # P1 | P2 | P3
effort: ""              # "4h", "2d"
dependencies: []        # phase IDs this blocks on
---
```

Sections: Overview · Requirements (Functional/Non-functional) · Architecture · Related Code Files (Create/Modify/Delete) · Implementation Steps · Success Criteria · Risk Assessment.

## Mode Selection

| Flag | Mode | Research | Red Team | Validation | Cook Flag |
|------|------|----------|----------|------------|-----------|
| `--auto` | Auto-detect | Follows mode | Follows mode | Follows mode | Follows mode |
| `--fast` | Fast | Skip | Skip | Skip | `--auto` |
| `--hard` | Hard | 2 researchers | Yes | Optional | — |
| `--deep` | Deep | 2-3 researchers + per-phase scout | Yes | Yes | — |
| `--parallel` | Parallel | 2 researchers | Yes | Optional | `--parallel` |
| `--two` | Two approaches | 2+ researchers | After selection | After selection | — |

Composable flags (combine with any mode):
- `--tdd` — tests-first structure per phase
- `--no-tasks` — skip task hydration

## Subcommands

| Subcommand | Reference | Purpose |
|------------|-----------|---------|
| `/ck:plan archive` | `references/archive-workflow.md` | Archive plans + journal |
| `/ck:plan red-team` | `references/red-team-workflow.md` | Adversarial review with hostile reviewers |
| `/ck:plan validate` | `references/validate-workflow.md` | Critical questions interview |

## Skills Activated

| Type | Skill |
|------|-------|
| Mandatory | /ck:project-organization |
| Conditional | ck:scout (if stale), ck:sequential-thinking, ck:docs-seeker |
| End-of-flow | /ck:journal |

## Sub-agents Spawned

| Phase | Agent | Condition |
|-------|-------|-----------|
| Research | researcher ×2-3 | hard/deep/parallel/two |
| Plan Creation | planner | Always |
| Red Team | code-reviewer ×2-4 | hard/deep/parallel/two |
| Verification | verifier | After red-team |

Red Team scaling: 1-2 phases → 2 reviewers · 3-5 phases → 3 · 6+ → 4.

## Task Hydration

- **Default:** ON. Skip with `--no-tasks`.
- **3-Task Rule:** <3 phases → skip task creation.
- **Fallback:** CLI-only tools. If `TaskCreate` errors (VSCode extension), use `TodoWrite`.
- Per-phase TaskCreate with `addBlockedBy` chain.
- Critical/high-risk steps get separate tasks with `riskLevel` metadata.
- Metadata: phase · priority · effort · planDir · phaseFile.

## Output (MANDATORY)

Output cook command with absolute path:
- Fast:     `/ck:cook --auto {abs-path}/plan.md`
- Hard/Deep: `/ck:cook {abs-path}/plan.md`
- Parallel: `/ck:cook --parallel {abs-path}/plan.md`
- Two:      `/ck:cook {abs-path}/plan.md`

## Hard Gates

- **No code implementation** — ck:plan only creates plans.
- **Plans root must be allowed:** project CWD (project scope) or configured global root (global scope). Never arbitrary user directories.
- **CLI-only scaffold** — hand-editing phase status is forbidden when CLI is available.

## Workflow Position

**Typically follows:** /ck:brainstorm, /ck:scout
**Typically precedes:** /ck:cook
**Related:** /ck:brainstorm, /ck:cook

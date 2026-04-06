# /ck:plan — Implementation Planning

Source: `~/.claude/skills/ck-plan/SKILL.md` + `references/`

## Authoritative Flow

```
Pre-Creation Check → active/suggested/no plan context
Cross-Plan Scan → detect blockedBy/blocks relationships
Step 0: Scope Challenge (skip if --fast or trivial)
Mode Detection → fast | hard | parallel | two
Codebase Analysis → read docs, scout if stale (hard/parallel/two only)
Plan Creation → planner subagent writes plan.md + phase-XX.md
Red Team Review → 2-4 code-reviewer agents (hard/parallel/two only)
Validation → interview with critical questions (hard/parallel/two only)
Task Hydration → TaskCreate per phase + critical steps
Output Cook Command → absolute path, mode-specific flags (MANDATORY)
Journal → /ck:journal
```

## Mode Selection

Auto-detection or manual flags:

| Mode | Flag | Research | Red Team | Validate | Task Hydrate |
|------|------|----------|----------|----------|-------------|
| Fast | --fast | Skip | Skip | Skip | Phase-level |
| Hard | --hard | 2 researchers | 2-4 reviewers | Yes | Phase + steps |
| Parallel | --parallel | 2 researchers | 2-4 reviewers | Yes | + ownership matrix |
| Two | --two | 2 researchers | 2-4 reviewers | Yes | Selected approach |

## Skills Activated

| Type | Skill |
|------|-------|
| Mandatory | /ck:project-organization |
| Conditional | ck:scout (if docs stale), ck:sequential-thinking, ck:docs-seeker |
| End-of-flow | /ck:journal |

## Sub-agents Spawned

| Phase | Agent | Condition |
|-------|-------|-----------|
| Research | 2x researcher | hard/parallel/two only |
| Plan Creation | planner | Always |
| Red Team | 2-4x code-reviewer | hard/parallel/two only |

Red Team scaling:
- 1-2 phases → 2 reviewers
- 3-5 phases → 3 reviewers
- 6+ phases → 4 reviewers

## Task Hydration

- ON by default, skip with --no-tasks or <3 phases
- TaskCreate per phase with dependencies (addBlockedBy)
- Critical steps get separate tasks with riskLevel metadata

## Output

MANDATORY: output cook command with absolute path
- Fast: `/ck:cook --auto {path}/plan.md`
- Hard: `/ck:cook {path}/plan.md`
- Parallel: `/ck:cook --parallel {path}/plan.md`

## Hard Gate

No code implementation — ck:plan only creates plans.

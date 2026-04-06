# /ck:cook — Build Feature Pipeline

Source: `~/.claude/skills/cook/SKILL.md` + `references/`

## Authoritative Flow

```
Step 0: Intent Detection → mode routing
Step 1: Research (skip if fast/code) → [Review Gate 1]
Step 2: Planning → plan.md + phase-XX.md → [Review Gate 2]
Step 3: Implementation → execute phase tasks → [Review Gate 3]
Step 4: Testing (skip if no-test) → tester subagent, 100% pass → [Review Gate 4]
Step 5: Code Review → code-reviewer subagent, fix/approve cycle → [Review Gate 5]
Step 6: Finalize (MANDATORY) → project-manager + docs-manager + git-manager + journal
```

## Mode Selection

| Mode | Flag/Trigger | Research | Test | Review Gates | Parallel |
|------|-------------|----------|------|-------------|----------|
| interactive | Default | Yes | Yes | Stops for approval | No |
| auto | --auto | Yes | Yes | Skip (auto-approve ≥9.5) | Yes |
| fast | --fast | Skip | Yes | Stops | No |
| parallel | --parallel / 3+ features | Yes | Yes | Stops | Yes |
| no-test | --no-test | Yes | Skip | Stops | No |
| code | Path to plan.md | Skip | Yes | Per plan | Per plan |

Detection priority: explicit flags → plan path → keywords → feature count → default interactive.

## Skills Activated

| Type | Skill |
|------|-------|
| Entry | ck:cook (self-activates before every feature/fix/plan) |
| Step 1 | ck:scout (codebase search) |
| Step 2 | ck:plan (generate plan files) |
| Step 6 | /ck:journal |

## Sub-agents Spawned

| Phase | Agent | Mandatory |
|-------|-------|-----------|
| Research | researcher | Optional (not in fast/code) |
| Planning | planner | Optional (not in code) |
| UI Work | ui-ux-designer | Conditional (if frontend) |
| Testing | tester | Yes (except no-test) |
| Debug | debugger | Conditional (if tests fail) |
| Code Review | code-reviewer | Yes |
| Finalize | project-manager | Yes |
| Finalize | docs-manager | Yes |
| Finalize | git-manager | Yes |

Step 6 incomplete without ALL 3 finalize subagents.

## Review Cycle

- Max 3 fix cycles before escalate to user
- Auto-approve threshold: score ≥9.5 AND 0 critical issues
- 100% test pass required before code review (except no-test)

## Hard Gate

No implementation without approved plan (unless user overrides with "just code it").

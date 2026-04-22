# /ck:cook — Smart Feature Implementation Pipeline

Source: `reference/beta/claude/skills/cook/SKILL.md` (v2.1.1) + `references/`

## Authoritative Flow

```
Step 0: Intent Detection → mode routing (plan path / keywords / feature count)
Step 1: Research        → researcher sub-agents (skip in fast/code) → [Review Gate]
Step 2: Plan            → planner sub-agent writes plan.md + phase-XX-*.md → [Review Gate]
Step 3: Implement       → execute phase tasks via Task tool
Step 3b: Conditional Simplify → on signal only (code-simplifier agent)
Step 4: Review Gate     → post-implementation approval
Step 5: Test            → tester sub-agent, 100% pass (skip if --no-test) → [Review Gate]
Step 6: Code Review     → code-reviewer sub-agent, fix/approve cycle → [Review Gate]
Step 7: Finalize (MANDATORY) → project-manager + docs-manager + git-manager + /ck:journal
```

## Usage

```
/ck:cook <natural-language-task | plan-path> [flags]
```

## Mode Selection

| Mode | Flag / Trigger | Research | Test | Review Gates | Parallel |
|------|----------------|----------|------|--------------|----------|
| interactive (default) | `--interactive` | ✓ | ✓ | **User approval each step** | No |
| auto | `--auto` | ✓ | ✓ | Auto if score ≥9.5 | All at once |
| fast | `--fast`, "fast"/"quick" | ✗ | ✓ | User approval | No |
| parallel | `--parallel`, 3+ features | Optional | ✓ | User approval | Parallel groups |
| no-test | `--no-test` | ✓ | ✗ | User approval | No |
| code | path to plan.md / phase-*.md | ✗ | ✓ | Per plan | Per plan |

Detection priority: **explicit flag → plan path → keywords → feature count → default interactive**.

Composable flags:
- `--tdd` — tests-first per phase (write tests for current behavior, refactor, verify)

## Smart Intent Detection

| Input Pattern | Mode |
|---------------|------|
| Path to `plan.md` or `phase-*.md` | code |
| "fast", "quick" | fast |
| "trust me", "auto" | auto |
| 3+ features OR "parallel" | parallel |
| "no test", "skip test" | no-test |
| Default | interactive |

## Anti-Rationalization (enforce HARD-GATE)

| Thought | Reality |
|---------|---------|
| "Too simple to plan" | Simple tasks hide complexity. Plan = 30s. |
| "I know how to do this" | Knowing ≠ planning. Write it down. |
| "Just start coding" | Undisciplined action wastes tokens. |
| "User wants speed" | Fastest = plan → implement → done. |
| "Plan as I go" | That's hoping, not planning. |
| "Just this once" | No exceptions. |

## Blocking Gates (Non-Auto Mode)

Human review required (skipped with `--auto`):
- **Post-Research** — review findings before planning
- **Post-Plan** — approve plan before implementation
- **Post-Implementation** — approve code before testing
- **Post-Testing** — 100% pass + approve before finalize

Always enforced (all modes):
- **Testing:** 100% pass required (unless `--no-test`)
- **Code Review:** user approval OR auto-approve (score ≥9.5, 0 critical)

## Finalize Step (MANDATORY — never skip)

1. `project-manager` sub-agent → **full plan sync-back** (ALL completed tasks/steps across ALL `phase-XX-*.md`, not only current phase), then update `plan.md` status/progress
2. `docs-manager` sub-agent → update `./docs` if changes warrant
3. `TaskUpdate` → mark all Claude Tasks complete after sync-back verification (skip if Task tools unavailable)
4. Ask user to commit via `git-manager` sub-agent
5. Run `/ck:journal` for concise technical journal entry

## Skills Activated

| Phase | Skill |
|-------|-------|
| Entry | ck:cook (self-activates before every feature/fix/plan) |
| Step 1 | ck:scout |
| Step 2 | ck:plan (generate plan files) |
| Step 7 | /ck:journal |

## Sub-agents Spawned (MANDATORY)

| Phase | Sub-agent | Requirement |
|-------|-----------|-------------|
| Research | researcher | Optional (not in fast/code) |
| Scout | ck:scout | Optional (not in code) |
| Plan | planner | Optional (not in code) |
| UI Work | ui-ux-designer | Conditional (frontend) |
| Simplify | code-simplifier | Signal-based (Step 3b) |
| Testing | tester, debugger | **MUST** spawn (except no-test) |
| Review | code-reviewer | **MUST** spawn |
| Finalize | project-manager, docs-manager, git-manager | **MUST** spawn all 3 |

**CRITICAL ENFORCEMENT:** Steps 4-7 MUST use `Task` tool to spawn sub-agents. If workflow ends with 0 Task calls → INCOMPLETE.

## Claude Tasks

Use `TaskCreate`, `TaskUpdate`, `TaskGet`, `TaskList` during implementation.
**Fallback:** CLI-only tools — unavailable in VSCode extension. If they error, use `TodoWrite` for progress tracking.

## Review Cycle

- Max 3 fix cycles before escalate to user
- Auto-approve threshold: score ≥9.5 AND 0 critical issues
- 100% test pass required before code review (except `--no-test`)

## Hard Gate

**Do NOT write implementation code until a plan exists and has been reviewed.**
Applies regardless of simplicity. `--fast` skips research but still requires a plan step.
**User override:** explicit "just code it" or "skip planning" respected.

## Workflow Position

**Typically follows:** /ck:plan (execute plan), /ck:brainstorm (implement agreed solution)
**Typically precedes:** /ck:code-review, /ck:test
**Related:** /ck:fix (bug fixes), /ck:plan (create plan before cooking)

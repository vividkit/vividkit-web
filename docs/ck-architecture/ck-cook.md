# /ck:cook — Smart Feature Implementation

Source: `reference/stable/claude/skills/cook/SKILL.md` (v2.2.0) + `references/`

End-to-end implementation with automatic workflow detection. Principles: YAGNI · KISS · DRY · token efficiency · concise reports.

## Authoritative Flow (Mermaid)

```
Intent Detection
  ├── plan path? → Load Plan → Review Gate → Implement → Simplify? → Review Gate → Test? → Finalize
  └── no plan
       ├── --fast → Scout → Plan → Code path
       └── interactive / auto
            → Scout Codebase (MANDATORY)
            → Summarize findings to user (3-6 bullets)
            → Exact-requirements loop (AskUser): output, acceptance, scope, constraints, touchpoints
            → Research → Review Gate → Plan → Review Gate
            → Implement → Conditional Simplify → Review Gate
            → Test (unless --no-test) → Finalize (project-mgmt → docs → git → journal)
```

The mermaid diagram in SKILL.md is the authoritative source. Prose below details each node.

## Mode Selection

| Mode | Trigger | Research | Test | Review Gates | Phase Progression |
|------|---------|----------|------|--------------|-------------------|
| interactive | Default (no flag) | Yes | Yes | User approval each step | One at a time |
| auto | `--auto`, "trust me", "auto" | Yes | Yes | Auto-approve only when review artifacts pass; high-risk stops for human approval | All low-risk phases continuously |
| fast | `--fast`, "fast", "quick" | Skip | Yes | User approval each step | One at a time |
| parallel | `--parallel`, lists 3+ features | Optional | Yes | User approval each step | Parallel groups |
| no-test | `--no-test`, "no test", "skip test" | Yes | Skip | User approval each step | One at a time |
| code | Path to `plan.md` / `phase-*.md` | Skip | Yes | User approval each step | Per plan |

`--tdd` composes with any mode: tests-first per phase — write tests for current behavior before refactoring, then verify they still pass after the implementation step.

Detection priority: explicit flag → plan path → keyword in prompt → feature count ≥ 3 → default interactive.

## Hard Gates (4)

1. **HARD-GATE plan-first** — No implementation until a plan exists & has been reviewed. Applies even to "simple" tasks. `--fast` skips research but still requires a plan step. User override: "just code it" / "skip planning" respected.
2. **HARD-GATE-SCOUT-FIRST** — Before planning OR clarifying questions, scan the codebase. Mandatory scout outputs:
   1. Project type, language(s), framework(s)
   2. Existing modules/files relevant to the task
   3. Current patterns/conventions for similar features
   4. Existing docs in `./docs/` and in-flight plans in `./plans/`
   5. Public APIs, schemas, contracts affected
   State a 3-6 bullet codebase-context summary before any AskUser question. Skip ONLY when input is a `plan.md` / `phase-*.md` path.
3. **HARD-GATE-EXACT-REQUIREMENTS** — Before producing a plan, MUST answer all 5 in one concrete sentence each via `AskUserQuestion`:
   1. **Expected output** — concrete artifact(s) the user sees at the end (file paths, feature behavior, UI screen, API endpoint + payload, CLI command + flags).
   2. **Acceptance criteria** — specific behaviors / inputs → outputs / edge cases.
   3. **Scope boundary** — what is explicitly OUT of scope this round.
   4. **Non-negotiable constraints** — stack, file locations, naming, backward compatibility, deadlines, performance.
   5. **Touchpoints** — which existing files/modules will be modified; which contracts must stay stable.
   Every `AskUser` option must be grounded in scout findings. Skip ONLY when input is a plan path.
4. **HARD-GATE-NO-SIDE-EFFECTS** — Implementation is NOT done until proven side-effect-free. Code-review + test must verify:
   1. New behavior matches every acceptance criterion.
   2. All tests pass — including tests in modules sharing files/contracts with the change.
   3. No regression in business logic; walk every touchpoint and any caller of changed functions.
   4. No new lint/type/build errors anywhere in the repo.
   5. Public contracts unchanged unless intentional and called out.
   `--no-test` downgrades item 2 to a warning surfaced in the finalize `AskUserQuestion`. Items 1, 3, 4, 5 remain enforceable via `code-reviewer`. If a side effect surfaces → STOP → `AskUserQuestion` with 2-4 options (revert, propagate contract change, add compat shim, accept regression).

## Anti-Rationalization

| Thought | Reality |
|---------|---------|
| "This is too simple to plan" | Simple tasks have hidden complexity. Plan takes 30 seconds. |
| "I already know how to do this" | Knowing ≠ planning. Write it down. |
| "Let me just start coding" | Undisciplined action wastes tokens. Plan first. |
| "The user wants speed" | Fastest path = plan → implement → done. Not implement → debug → rewrite. |
| "I'll plan as I go" | That's not planning, that's hoping. |
| "Just this once" | Every skip is "just this once." No exceptions. |

## Blocking Gates (non-auto modes)

- **Post-Research** — Review findings before planning
- **Post-Plan** — Approve plan before implementation
- **Post-Implementation** — Approve code before testing
- **Post-Testing** — 100% pass + approve before finalize

**Always enforced (every mode):**
- **Testing** — 100% pass required (unless `--no-test`)
- **Code Review** — MUST spawn `code-reviewer` with explicit 5-check brief (acceptance, regression to touchpoints/blast-radius, public contracts, scout-pattern fit, lint/type/build). Pass scout summary + acceptance criteria as context. User approval OR artifact-gated auto approval. Score is advisory; it never approves by itself. If reviewer flags side effects → trigger no-side-effects gate.
- **Finalize** — MUST execute all four:
  1. Activate `/ck:project-management` skill → full plan sync-back across **all** `phase-XX-*.md` (not only current), update `plan.md` status/progress, hydrate Claude Tasks, generate progress report
  2. `docs-manager` subagent → update `./docs` if changes warrant
  3. `TaskUpdate` → mark all Claude Tasks complete after sync-back verification (skip if Task tools unavailable)
  4. Ask user about commit via `git-manager` subagent
  5. Run `/ck:journal` for a concise technical journal entry

## Required Subagents (MANDATORY)

| Phase | Subagent | Requirement |
|-------|----------|-------------|
| Research | `researcher` | Optional in `--fast` / code mode |
| Scout | `ck:scout` | Optional in code mode |
| Plan | `planner` | Optional in code mode |
| UI Work | `ui-ux-designer` | Conditional (frontend work) |
| Testing | `tester`, `debugger` | MUST spawn (unless `--no-test`) |
| Review | `code-reviewer` | MUST spawn |
| Finalize | `/ck:project-management` skill + `docs-manager`, `git-manager` subagents | MUST invoke all |

**Enforcement:** if the workflow ends with 0 `Task` tool calls, it is INCOMPLETE. Steps 4 (test), 5 (review), 6 (finalize) MUST delegate via `Task(subagent_type=..., prompt=..., description=...)`.

## Skills Activated

| Type | Skill | Role |
|------|-------|------|
| Entry | `ck:cook` | Self-activates before every feature/fix/plan |
| Scout | `ck:scout` | Codebase scan, contracts, patterns |
| Plan | `ck:plan` (via planner agent) | Generate `plan.md` + phase files |
| Finalize | `/ck:project-management` | Plan sync-back across all phases, hydrate tasks |
| Finalize | `/ck:journal` | Concise technical journal entry |

## References

- `references/intent-detection.md` — Detection rules and routing logic
- `references/workflow-steps.md` — Detailed step definitions for all modes
- `references/review-cycle.md` — Interactive and auto review processes
- `references/subagent-patterns.md` — Subagent invocation patterns
- `../_shared/references/workflow-artifacts.md` — Review artifact schema and validator contract

## Workflow Position

- **Typically follows:** `/ck:plan` (execute a plan), `/ck:brainstorm` (implement agreed solution)
- **Typically precedes:** `/ck:code-review`, `/ck:test`
- **Related:** `/ck:fix` (alternative for bug fixes), `/ck:plan` (create plan before cooking)

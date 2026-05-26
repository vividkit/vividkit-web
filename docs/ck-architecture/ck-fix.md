# /ck:fix — Bug & Failure Fix Pipeline

Source: `reference/stable/claude/skills/fix/SKILL.md` · v2.1.0 · category `utilities`

## Authoritative Flow

```
0.  Mode Selection — AskUserQuestion (unless "auto" in request OR --auto/--review/--quick/--parallel)
                    • Autonomous (default) — auto-approve only when review artifacts + validator pass
                    • Human-in-the-loop Review — pause for approval each step
                    • Quick — fast scout→diagnose→fix→review cycle for trivial issues
                    • Parallel — route to parallel fullstack-developer agents per independent issue
1.  Scout (MANDATORY) — ck:scout OR 2-3 parallel Explore subagents
                       collect: project type, affected files + callers, related tests,
                                recent commits (git log --oneline -20), existing patterns
                       → state 3-6 bullet codebase-context summary before any question
2.  Diagnose (MANDATORY) — capture pre-fix state verbatim (errors, traces, logs)
                          ck:debug + ck:sequential-thinking — structured hypothesis formation
                          parallel Explore agents test each hypothesis vs codebase
                          if 2+ hypotheses fail → ck:problem-solving auto-activates
                          → diagnosis report: confirmed root cause + evidence chain + scope
3.  Complexity Assessment & Task Orchestration
                          Simple   (single file, type/lint)   → workflow-quick.md
                          Moderate (multi-file, RC unclear)   → workflow-standard.md
                          Complex  (system-wide, arch impact) → workflow-deep.md
                          Parallel (2+ independent issues)    → parallel fullstack-developer
                          Moderate+: TaskCreate upfront with addBlockedBy dependency chain
                                     (fallback to TodoWrite when Task tools unavailable in VSCode ext.)
4.  Fix Implementation — root cause only (never symptom), minimal changes, follow existing patterns
5.  Verify + Prevent (MANDATORY) — five steps, NO claims without fresh evidence
                          (a) Re-run EXACT pre-fix repro from Step 2 → compare before/after
                          (b) Regression test (must fail without fix, pass with it)
                          (c) Blast-radius sweep — run tests on every dependent code path
                                                    confirm public contracts unchanged
                                                    (signatures, response shapes, DB schemas, env vars)
                          (d) code-reviewer subagent — passed scout summary + diagnosis as context
                                                       verifies root cause addressed, no broken business
                                                       logic in blast radius, no new failure modes,
                                                       pattern adherence
                          (e) Prevention gate — defense-in-depth (validation, type guards, assertions)
                          parallel Bash agents: typecheck + lint + build + test
                          on ANY side effect → STOP and AskUser with 2-4 concrete options
                          fail 3 times → question architecture, discuss with user
6.  Finalize (MANDATORY) — 5-step chain, workflow INCOMPLETE if any step skipped
                          (a) Report summary: confidence score, root cause, changes, files,
                              prevention measures, side-effect sweep results
                          (b) /ck:project-management (MANDATORY, every fix) — sync plan/task
                              status, hydrate Claude Tasks, generate progress report
                          (c) docs-manager subagent (NON-OPTIONAL) — update ./docs if warranted
                          (d) TaskUpdate → mark ALL Claude Tasks completed
                              (skip only if Task tools unavailable in VSCode extension)
                          (e) git-manager subagent — AskUser to commit via conventional commit
                          (f) /ck:journal — concise technical entry
```

The mermaid `flowchart TD` in SKILL.md is the authoritative source. Prose conflicts → follow the diagram.

## Hard Gates (4)

| # | Gate | Effect |
|---|------|--------|
| 1 | `HARD-GATE` | No fix proposed or implemented before Steps 1-2 (Scout + Diagnose) complete. Symptom fixes = failure. 3+ failed attempts → STOP and question architecture with user. `--quick` override permits fast cycle for trivial issues only (lint, type errors). |
| 2 | `HARD-GATE-SCOUT-FIRST` | Mandatory codebase scan BEFORE any clarifying question or hypothesis. Collect (1) project type, language, framework, (2) exact files where symptom surfaces + direct callers/dependents, (3) related tests, (4) recent commits touching scouted files, (5) existing patterns/conventions. State 3-6 bullet summary to user before asking questions. |
| 3 | `HARD-GATE-EXACT-ROOT-CAUSE` | No fix proposed until ALL 6 items answered in one concrete sentence each: (1) Exact symptom (copy verbatim), (2) Reproduction steps, (3) Expected vs actual, (4) Root cause with file:line citation (not "probably"), (5) Why now (recent commit/data/env/dep), (6) Blast radius — every code path depending on the broken behaviour. Any vague item → AskUserQuestion grounded in scout findings, never abstract. |
| 4 | `HARD-GATE-NO-SIDE-EFFECTS` | Fix not done until Step 5 proves: (1) original symptom no longer reproduces, (2) all tests in modified files + transitively-affected modules pass, (3) no business-logic regression in blast radius, (4) no new lint/type/build errors anywhere, (5) public API contracts unchanged OR change intentional and called out. Any regression → STOP, AskUser with concrete options (revert, narrow scope, update dependents, accept). Never silently patch. |

## Artifact Gate (Step 5, stable v2.1.0+)

Step 5 now includes an `Artifact gate` (promoted from beta): write review artifacts per `_shared/references/workflow-artifacts.md`, then run `node claude/hooks/workflow-artifact-gate.cjs --stage finalize --artifact-dir <artifact-dir>` before Prevention gate and Finalize. Score is advisory; it never approves by itself.

## Skills Activated

| Type | Skill | Role |
|------|-------|------|
| Mandatory (all workflows) | `ck:scout` | Step 1 — understand before diagnosing |
| Mandatory (all workflows) | `ck:debug` | Step 2 — systematic root cause investigation |
| Mandatory (all workflows) | `ck:sequential-thinking` | Step 2 — structured hypothesis formation, NOT guessing |
| Mandatory (every fix) | `ck:project-management` | Step 6 — sync-back, plan/task hydration, progress report |
| Mandatory (closing) | `ck:journal` | Step 6 — concise technical entry |
| Conditional | `ck:problem-solving` | Auto-triggers when 2+ hypotheses fail in Step 2 |
| Conditional | `ck:brainstorm` | Multiple valid approaches, architecture decision (Deep workflow only) |
| Conditional | `ck:context-engineering` | Fixing AI/LLM/agent code |
| Tool | `AskUserQuestion` | Mode selection, exact-root-cause clarification, side-effect decision |
| Tool | `TaskCreate` / `TaskUpdate` | Moderate+ task orchestration (CLI-only; fallback to TodoWrite) |

## Sub-agents

| Agent | Use |
|-------|-----|
| `debugger` | Deep root-cause analysis in isolated context (Step 2) |
| `code-reviewer` | Step 5 final review — passed scout summary + diagnosis as context |
| `tester` | Regression test + blast-radius sweep execution (Step 5) |
| `fullstack-developer` | Parallel mode — one per independent issue |
| `docs-manager` | Step 6 — `./docs` updates (NON-OPTIONAL when warranted) |
| `git-manager` | Step 6 — conventional commit + push (AskUser) |
| `researcher` / `planner` | Deep workflow only — research alternatives + plan refactor |
| `Explore` × N | Parallel scouting (Step 1) + parallel hypothesis verification (Step 2) |
| `Bash` × N | Parallel typecheck/lint/build/test verification (Step 5) |

## Mode Selection

| Mode | Flag | Behaviour |
|------|------|-----------|
| Autonomous | `--auto` (default) | Auto-approve only when review artifacts and validator pass. High-risk fixes still stop for human approval before finalize/commit. |
| Human-in-the-loop Review | `--review` | Pause for approval at each step. For critical/production code. |
| Quick | `--quick` | Fast scout → diagnose → fix → review cycle. Lighter review, single pass. For trivial issues (lint, type errors). |
| Parallel | `--parallel` | Route to parallel `fullstack-developer` agents per independent issue. Separate task trees per issue. |

## Anti-Rationalization Table

The skill ships an explicit table to override common shortcuts. Every reframe is treated as a fix-blocker:

| Thought | Reality |
|---------|---------|
| "I can see the problem, let me fix it" | Seeing symptoms ≠ understanding root cause. Scout first. |
| "Quick fix for now, investigate later" | "Later" never comes. Fix properly now. |
| "Just try changing X" | Random fixes waste time and create new bugs. Diagnose first. |
| "It's probably X" | "Probably" = guessing. Use structured diagnosis. Verify first. |
| "One more fix attempt" (after 2+) | 3+ failures = wrong approach. Question architecture. |
| "Emergency, no time for process" | Systematic diagnosis is FASTER than guess-and-check. |
| "I already know the codebase" | Knowledge decays. Scout to verify assumptions before acting. |
| "The fix is done, tests pass" | Without prevention, same bug class will recur. Add guards. |

## Workflow Differences (per complexity tier)

### Quick (Simple)
1. Scout (minimal — file + direct deps only)
2. Diagnose (abbreviated — ck:debug + ck:sequential-thinking)
3. Fix + Verify (combined step, parallel Bash for typecheck+lint)
4. Review (code-reviewer subagent) + Prevention (abbreviated)
5. Complete (git-manager if autonomous)

### Standard (Moderate) — 6 Task Phases
1. Scout → ck:scout OR parallel Explore subagents
2. Diagnose → ck:debug + ck:sequential-thinking + debugger subagent + parallel Explore
3. Implement fix
4. Verify + Prevent → tester subagent + blast-radius sweep + parallel Bash (typecheck/lint/build/test)
5. Code Review → code-reviewer subagent (scout + diagnosis context passed)
6. Finalize → ck:project-management + docs-manager + git-manager + ck:journal

### Deep (Complex) — 9 Task Phases
1-2-3. Scout + Diagnose + Research (PARALLEL) → researcher subagent
4. Brainstorm → ck:brainstorm skill
5. Plan → planner subagent
6. Implement fix
7. Verify + Prevent → tester + blast-radius sweep + parallel Bash
8. Code Review → code-reviewer subagent
9. Finalize → ck:project-management + docs-manager + git-manager + ck:journal

### Parallel — multi-tree
- One `fullstack-developer` agent per independent issue
- Separate `TaskCreate` task tree per issue
- Cross-issue conflicts surfaced via main agent

## Output Format

Unified step markers (printed to user on completion):

```
✓ Step 0: [Mode] selected
✓ Step 1: Scouted - [N] files, [M] deps
✓ Step 2: Diagnosed - Root cause: [summary]
✓ Step 3: [Complexity] detected - [workflow] selected
✓ Step 4: Fixed - [N] files changed
✓ Step 5: Verified + Prevented - [tests added], [guards added]
✓ Step 6: Complete - [action taken]
```

## References (loaded as needed)

- `references/mode-selection.md` — AskUserQuestion format for mode
- `references/diagnosis-protocol.md` — Structured diagnosis methodology
- `references/prevention-gate.md` — Prevention requirements after fix
- `references/complexity-assessment.md` — Classification criteria
- `references/task-orchestration.md` — Native Claude Task patterns for moderate+ workflows
- `references/workflow-quick.md` / `workflow-standard.md` / `workflow-deep.md` — Per-complexity workflows
- `references/review-cycle.md` — Review logic (autonomous vs HITL)
- `references/skill-activation-matrix.md` — When to activate each skill
- `references/parallel-exploration.md` — Parallel Explore/Bash/Task coordination patterns
- `references/workflow-ci.md` / `workflow-logs.md` / `workflow-test.md` / `workflow-types.md` / `workflow-ui.md` — Specialised workflows
- `../_shared/references/workflow-artifacts.md` — Review artifact schema and validator contract

## Critical Constraints

- Fix the ROOT CAUSE, never the symptom.
- Evidence-based throughout — no "probably", no "I think", no abstract AskUser options.
- Side-effect-free or STOP — never silently patch around regressions.
- `/ck:project-management` is MANDATORY in Step 6 for every fix (not "if part of a plan").
- `docs-manager` Step 6 update is NON-OPTIONAL when changes warrant it.

## Workflow Position

- Typically follows: `/ck:debug` (after root cause analysis), `/ck:scout` (after locating affected code).
- Typically precedes: `/ck:code-review` (review the fix), `/ck:test` (validate the fix).
- Related: `/ck:cook` (alternative for feature work), `/ck:debug` (diagnose before fixing).

## Notes (manual)

VividKit Guide design decisions (preserved across audit cycles):

1. Workflow visualiser pipeline shows the **Standard workflow** as default (most representative).
2. Complexity Routing is NOT shown as a separate visual step — implicit after Diagnose in the scenario.
3. Mode Selection is part of the user input step (flags + interactive prompt) in the visualiser.
4. Steps that spawn sub-agents are visually indented with "spawned by main agent" label.
5. Deep/Parallel workflow details surfaced in Diagnose explain text (not separate UI branches).
6. Conditional skills (`ck:context-engineering`, `ck:ai-multimodal`) not shown — too edge-case for overview.

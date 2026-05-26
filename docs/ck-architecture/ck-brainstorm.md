# /ck:brainstorm — Solution Brainstorming

Source: `reference/stable/claude/skills/brainstorm/SKILL.md` · v2.2.1 · category `utilities`

## Authoritative Flow

```
1.  Scout (MANDATORY) — map project type, modules, patterns, docs/, plans/, constraints
                        → summarise 3-6 bullets to user before any question
2.  Discovery — AskUserQuestion loop, grounded in scout findings
                must extract 5 EXACT items:
                  • expected output  • acceptance criteria  • scope boundary
                  • non-negotiable constraints  • touchpoints
3.  Scope Assessment — if request spans 3+ independent subsystems
                       → decompose into sub-projects (each gets own cycle)
4.  Research — planner agent + WebSearch + ck:docs-seeker + ck:ai-multimodal
5.  Analysis — evaluate 2-3 viable approaches via YAGNI / KISS / DRY
6.  Debate — brutal honesty, challenge user preferences, present trade-offs
7.  Consensus — align on chosen approach
8.  Documentation — markdown summary report
                    via ck:project-organization for path
9.  Finalize (Plan Handoff) — only when ALL hold:
       (a) user explicitly approved proposal
       (b) no open clarifying questions
       (c) design doc/report written
     AskUserQuestion with three options:
       • /ck:plan --tdd   (Recommended for refactors / critical logic / strong existing tests)
       • /ck:plan         (default — standard new feature)
       • End session      (plan later)
     On selection: invoke chosen command with brainstorm summary path as argument.
10. Journal — /ck:journal (concise technical entry)
```

The mermaid `flowchart TD` in SKILL.md is the authoritative source. Prose conflicts → follow the diagram.

## Hard Gates (3)

| # | Gate | Effect |
|---|------|--------|
| 1 | `HARD-GATE` | No implementation skill / no code / no scaffold / no action until design presented AND user approves. Applies to every session regardless of perceived simplicity. |
| 2 | `HARD-GATE-SCOUT-FIRST` | Mandatory codebase scan before ANY clarifying question. Output: project type, relevant modules, existing patterns, related docs/plans, constraints. Brief findings to user (3-6 bullets) before Discovery. |
| 3 | `HARD-GATE-EXACT-REQUIREMENTS` | Discovery must extract EXACT, CONCRETE answers for: expected output, acceptance criteria, scope boundary, non-negotiable constraints, touchpoints. Loop until concrete — no hand-wavy "make it better". Ground options in scout findings. |

## Skills Activated

| Type | Skill / Tool | Role |
|------|--------------|------|
| Mandatory | `ck:scout` (or Glob/Grep) | Scout phase before any question |
| Mandatory | `AskUserQuestion` tool | Discovery loop + brutal-honesty feedback + handoff picker |
| Mandatory | `ck:project-organization` | Decide report path |
| Conditional | `/ck:plan` / `/ck:plan --tdd` | Plan handoff after consensus |
| Conditional | `/ck:journal` | Final journal entry |
| Optional | `ck:sequential-thinking` | Structured multi-step analysis |
| Optional | `ck:docs-seeker` | Latest docs of external plugins/packages |
| Optional | `ck:ai-multimodal` | Analyze visual materials / mockups |
| Optional | `WebSearch` | Industry best practices |
| Optional | `psql` | Inspect existing DB structure |

## Sub-agents

| Agent | Use |
|-------|-----|
| `planner` | Research industry best practices, proven solutions |
| `docs-manager` | Understand existing project implementation & constraints |

No agents are spawned via Task tool — main agent consults them inline. No dedicated worktree.

## Mode Selection

None — single mode (brutal-honesty brainstorming). Behaviour adapts only via:
- **Scope routing** — 3+ independent subsystems forces decomposition before deep dive.
- **Plan handoff picker** — `--tdd` vs default vs end-session, recommended based on whether solution refactors existing behaviour or touches critical logic with existing test coverage.

## Anti-Rationalization Table

The skill ships an explicit table to override common shortcuts. Every reframe is treated as a brainstorm-blocker:

| Thought | Reality |
|---------|---------|
| "Too simple to need a design" | Simple projects = most wasted work from unexamined assumptions. |
| "I already know the solution" | Then writing it down takes 30 seconds. Do it. |
| "User wants action, not talk" | Bad action wastes more time than good planning. |
| "Let me explore the code first" | Brainstorming tells you HOW to explore. Follow the process. |
| "I'll just prototype quickly" | Prototypes become production code. Design first. |

## Critical Constraints

- DOES NOT implement solutions — only brainstorms and advises.
- Must validate feasibility before endorsing any approach.
- Prioritises long-term maintainability over short-term convenience.
- Balances technical excellence with business pragmatism.

## Report Output

- Path: from `ck:project-organization` skill (typically under `plans/reports/`).
- Naming: per `## Naming` injected context (date + slug).
- Contents: problem statement · evaluated approaches with pros/cons · final recommendation with rationale · implementation considerations & risks · success metrics · next steps & dependencies.
- Style: sacrifice grammar for concision.

## Workflow Position

- Typically follows: `/ck:debug` (brainstorm solutions for diagnosed issues), `/ck:scout` (brainstorm after discovery).
- Typically precedes: `/ck:plan` (plan the agreed solution).
- Related: `/ck:plan`, `/ck:debug`.

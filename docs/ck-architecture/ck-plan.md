# /ck:plan — Implementation Planning

Source: `reference/stable/claude/skills/ck-plan/SKILL.md` (v1.1.0) + `references/`

## Authoritative Flow

```
Pre-Creation Check        → active / suggested / no plan context
Cross-Plan Scan           → detect blockedBy / blocks across unfinished plans
Scope Challenge           → step-0 scope questions (skip if --fast or trivial)
Mode Detection            → --auto / --fast / --hard / --deep / --parallel / --two
Research Phase            → spawn researcher agents (skip in fast)
Codebase Analysis         → read docs, scout if stale, no scout if reports provided
Plan Creation             → planner subagent writes plan.md + phase-XX-*.md via `ck plan create`
Red Team Review           → 2-4 code-reviewer agents (hard / deep / parallel / two)
Verification Pass         → verification-roles pipeline before validate interview
Validation Interview      → critical questions (deep forces; hard / parallel / two optional)
Whole-Plan Consistency    → mandatory sweep after every validate / red-team edit
HTML Artifact             → if --html: activate /ck:frontend-design, write final reviewed plan.html
Task Hydration            → TaskCreate per phase + critical steps (skip --no-tasks or <3 phases)
GitHub Issue              → if --github: create/update issue + `ready to review` label
AgentWiki Publish         → if --wiki: publish reviewed docs or plan.html via AgentWiki CLI/MCP
Boundary Reminder         → present optional next-step commands with absolute path
Post-Plan Handoff         → AskUserQuestion: validate / red-team / /ck:cook / end
Journal                   → /ck:journal entry on completion
```

Output/publish phases (HTML / GitHub / AgentWiki) run AFTER red-team + validate gates so they reflect the final reviewed plan.

The mermaid diagram in SKILL.md (`## Process Flow (Authoritative)`) is the source of truth. Skip rules for red-team / validate options track Workflow Process Steps 6-7.

## CLI Integration (v1.1.0+)

ClaudeKit CLI owns plan file scaffolding and phase state mutations whenever `ck` is available. The skill orchestrates, the CLI mutates.

| Command | Purpose |
|---------|---------|
| `ck plan create --title ... --phases ... --dir ... --source skill` | Scaffold project-scope `plan.md` + `phase-*.md` |
| `ck plan create --global ...` | Scaffold under global plan root |
| `ck plan check <phase-id> --start` | Mark phase in-progress |
| `ck plan check <phase-id>` | Mark phase completed |
| `ck plan uncheck <phase-id>` | Revert phase status |
| `ck plan status /abs/path/to/plan.md` | Authoritative inspection surface |
| `ck config ui --port 3456` | Open dashboard at `localhost:3456/plans` |

Rules:
- Default scope is project-local (`./plans/`). Global scope only when user requests `--global` or no project context exists (no `.git`, `package.json`, `CLAUDE.md` in ancestor chain).
- Never hand-edit the phases table for status toggles or structural updates when the CLI is available.
- **Mandatory generated-file read pass:** After `ck plan create`, before composing any long Write/Edit — enumerate `plan.md` + every `phase-*.md` stub, read them all, then write content. A directory listing is not enough. Claude Code rejects Write calls to existing files that were not read first in the current session; skipping any stub wastes the full Write payload on a rejected call.
- Stub fill-in must follow the canonical phase template embedded in SKILL.md.

## Default (No Arguments)

If invoked without a task or with unclear intent, `AskUserQuestion` (header "Planning Operation") offers:

| Operation | Description |
|-----------|-------------|
| `(default)` | Create implementation plan for a task |
| `archive` | Write journal entry & archive plans |
| `red-team` | Adversarial plan review |
| `validate` | Critical questions interview |

## Mode Selection

| Mode | Flag | Research | Red Team | Validate | Cook Flag |
|------|------|----------|----------|----------|-----------|
| Auto-detect | `--auto` | Follows mode | Follows mode | Follows mode | Follows mode |
| Fast | `--fast` | Skip | Skip | Skip | — |
| Hard | `--hard` | 2 researchers | Yes | Optional | — |
| Deep | `--deep` | 2-3 researchers + per-phase scout | Yes | Yes | — |
| Parallel | `--parallel` | 2 researchers | Yes | Optional | `--parallel` |
| Two approaches | `--two` | 2+ researchers | After selection | After selection | — |

Composable flags (combine with any mode):

| Flag | Effect |
|------|--------|
| `--tdd` | Add tests-first structure to each phase for regression-safe refactors |
| `--no-tasks` | Skip task hydration |

## Output & Publish Flags

Conditional, compose with any mode. All run after red-team + validate so they reflect the final reviewed plan.

| Flag | Effect |
|------|--------|
| `--html` | Activate `/ck:frontend-design` and write a self-contained editorial interactive `plan.html` (inline CSS/JS, no build/network). Main page shows a concise outline per phase (title, status, priority, dependencies, objective, key bullets, related files, success criteria, validation gate); each outline opens a detail modal rendering the full phase markdown. Optional 1-3 watercolor/technical-sketch raster illustrations embedded as data URIs (source under `{plan-dir}/assets/`). Falls back to CSS-only diagrams if image gen unavailable. `plan.html` becomes the authoritative deliverable; markdown kept only for CLI/gate compatibility. |
| `--github` | After validation/red-team, create or update a GitHub issue with: branch (`git branch --show-current`), plan summary, repo-relative link to `plan.md` (and `plan.html` when `--html`), brainstorm report link (or "None found"), open questions (or "None"), acceptance criteria. Required label `ready to review` (created if missing). Update existing issue for the same plan/branch instead of duplicating. Repo-relative links only; redact secrets. Stop and report on `gh` failure. |
| `--wiki` | Publish the final reviewed plan to AgentWiki. CLI first (`agentwiki whoami` auth check → `doc upload`/`doc publish` for a combined `wiki-publish.md`; `sites upload` for `plan.html`), MCP document/static-site tools as fallback, else `AgentWiki publish skipped` with the exact missing capability. Never blocks plan creation. Redact secrets; publish only final reviewed artifacts. If `--github` also present, comment the wiki URL on the issue. |

**Combined `--html --github`:** `plan.html` is authoritative; a short companion `plan.md` index is created only to satisfy the issue's stable `plan.md` link. Issue includes both relative links.

## Cross-Plan Dependency Detection

Run during pre-creation scan:

1. Scan `plan.md` frontmatter of every unfinished plan (`status != completed/cancelled`).
2. Compare scope — overlapping files, shared dependencies, same feature area.
3. Classify relationship:
   - New plan needs existing output → new `blockedBy: [existing-plan-dir]`
   - New plan changes existing dependency → existing `blockedBy: [new-plan-dir]`, new `blocks: [...]`
   - Cross-scope dependency → `global:` / `project:` prefixes
   - Mutual dependency → both reference each other
4. Bidirectional update both `plan.md` files.
5. Ambiguous? `AskUserQuestion` header "Plan Dependency".

Frontmatter:
```yaml
blockedBy: [260301-1200-auth-system]            # same-scope
blockedBy: [global:260301-1200-auth-system]     # cross-scope
blocks: [project:260228-0900-user-dashboard]    # explicit project ref
```

## Skills Activated

| Type | Skill | Condition |
|------|-------|-----------|
| Mandatory | `/ck:project-organization` | Organize outputs |
| Conditional | `ck:scout` | If docs / codebase context stale |
| Conditional | `ck:sequential-thinking` | Multi-step reasoning |
| Conditional | `ck:docs-seeker` | When library / framework docs needed |
| Conditional | `/ck:frontend-design` (→ `ck:ui-ux-pro-max`) | `--html` — compose the `plan.html` artifact |
| Conditional | `agentwiki` CLI / AgentWiki MCP | `--wiki` — publish reviewed docs or `plan.html` |
| Conditional | `gh` CLI | `--github` — create/update issue + `ready to review` label |
| End-of-flow | `/ck:journal` | After plan finalized |

## Sub-agents Spawned

| Phase | Agent | Count | Condition |
|-------|-------|-------|-----------|
| Research | researcher | 2 (hard / parallel) • 2-3 + per-phase scout (deep) • 2+ (two) | Modes other than `--fast` |
| Plan Creation | planner | 1 | Always |
| Red Team | code-reviewer | 2-4 (scales with phase count) | Hard / deep / parallel / two |

Red-team scaling:
- 1-2 phases → 2 reviewers
- 3-5 phases → 3 reviewers
- 6+ phases → 4 reviewers

## Task Hydration

- Default: ON. Skip with `--no-tasks` or when plan has <3 phases.
- `TaskCreate` per phase with `addBlockedBy` chain.
- `TaskCreate` for critical / high-risk steps inside phases.
- Metadata: `phase`, `priority`, `planDir`, `phaseFile`.
- Cook picks up via `TaskList` (same session) or re-hydrates from plan files (new session).
- Fallback: if `TaskCreate` / `TaskUpdate` errors (VSCode extension), drop to `TodoWrite`. Plan files remain source of truth.

## Whole-Plan Consistency Gate

Mandatory after every `/ck:plan validate` or `/ck:plan red-team` edit. Re-read `plan.md` and every `phase-*.md`. Search for:
- Stale terms from rejected assumptions
- Renamed APIs / files / fields
- Superseded decisions
- Duplicate embedded drafts / contracts

Reconcile contradictions across the entire plan, not only the edited phase. Do not recommend `/ck:cook` until the sweep reports zero unresolved contradictions.

## Subcommands

| Subcommand | Reference file | Purpose |
|------------|----------------|---------|
| `/ck:plan archive` | `references/archive-workflow.md` | Archive plans + write journal |
| `/ck:plan red-team` | `references/red-team-workflow.md` | Adversarial review with hostile reviewers; report artifacts use plan-scoped descriptive filenames |
| `/ck:plan validate` | `references/validate-workflow.md` | Critical questions interview |

## Post-Plan Handoff (MANDATORY)

After `plan.md` + phase files are written and user-approved, `AskUserQuestion` offers the appropriate next step. Recommended option listed FIRST and labelled "(Recommended)".

| Option | Recommend When | Why |
|--------|----------------|-----|
| `/ck:plan validate` | Moderate-to-complex plan; user wants critical-questions gate | Cheapest gate — surfaces unspecified assumptions |
| `/ck:plan red-team` | Plan touches security, auth, payments, data integrity, public APIs, infra, high blast radius | Adversarial stress-test |
| `/ck:cook <plan-path>` | Plan is small / well-understood / low-risk | Skip extra gates |
| End session | User wants to review / share plan first | Stop with plan path returned |

Skip the entire handoff when invocation IS already a subcommand (`validate`, `red-team`, `archive`) — those have their own terminal handoff — or when the user explicitly said "just plan, don't suggest next step".

Skip an individual option when the active mode already auto-ran the gate:
- Omit `red-team` for `--hard`, `--deep`, `--parallel`, `--two`
- Omit `validate` for `--deep`
- If both already ran → only `/ck:cook` and `End session` remain.

## Hard Gate

- No code implementation — `/ck:plan` only creates plans.
- Plans must live under project scope (`./plans/`) or global scope (`~/.claude/plans/` default). Never arbitrary user directories.
- CLI-owned scaffolding — never hand-edit the phases table when `ck` is available.

## Workflow Position

**Typically follows:** `/ck:brainstorm` (after option exploration) • `/ck:scout` (after codebase discovery)
**May precede:** `/ck:cook` after user approval
**Related:** `/ck:brainstorm`, `/ck:cook`, `/ck:journal`

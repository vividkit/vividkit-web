# /ck:team — Agent Teams Orchestration Engine

Source: `reference/stable/claude/skills/team/SKILL.md` (v3.0.0) + `references/`

Coordinate multiple independent Claude Code sessions in parallel. Each teammate has own context window, loads project context (CLAUDE.md, skills, agents), communicates via shared task list and messaging. CK-native orchestration — wraps `/ck:research`, `/ck:cook`, `/ck:code-review`, `/ck:fix` with multi-session execution.

## Authoritative Flow

```
Pre-flight (mandatory)
  └── TeamCreate → success? continue : ABORT (no fallback to subagents)

Template Dispatch (immediate, no confirmation)
  ├── research <topic>   → derive N angles → spawn researchers → synthesize
  ├── cook <plan-or-desc>→ parse plan/N tasks → spawn devs (worktree iso) → tester → merge → docs sync
  ├── review <scope>     → derive N focuses → spawn reviewers → dedupe + prioritize
  └── debug <issue>      → generate N hypotheses → spawn debuggers (adversarial) → converge

Per Template (common shape)
  1. Derive N work items from input (default N=3)
  2. TeamCreate(team_name)
  3. TaskCreate × N (+ tester for cook)
  4. Spawn teammates via Agent tool (model: opus, run_in_background: true)
  5. Monitor via TaskCompleted hook events (60s TaskList fallback)
  6. Read reports + synthesize
  7. SendMessage shutdown_request × N
  8. TeamDelete (no params)
  9. Report to user
  10. Run /ck:journal
```

## Pre-flight Requirements (HARD-GATE)

1. **Env flag** — `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` in `settings.json` env.
2. **CLI terminal only** — `TaskCreate`/`TaskUpdate`/`TaskGet`/`TaskList` + `TeamCreate`/`TeamDelete` are **disabled in VSCode extension** (`isTTY` check). Agent Teams CANNOT run in VSCode.
3. **Model lock** — all teammates MUST run Opus 4.6.
4. **TeamCreate-first** — Step 2 of every template calls `TeamCreate` without pre-check. Success → continue. Error/unrecognized → STOP, tell user env flag missing. **No fallback to subagents.**

## Templates

| Template | Wraps | Default N | Subagent Type | Output |
|----------|-------|-----------|---------------|--------|
| `research` | `/ck:research` | 3 angles (architecture / alternatives / risks) | `researcher` | `research-summary-<slug>.md` |
| `cook` | `/ck:cook` | 4 devs + 1 tester | `fullstack-developer` + `tester` | merged branches + docs sync |
| `review` | `/ck:code-review` | 3 focuses (security / performance / coverage) | `code-reviewer` | `review-<slug>.md` (severity-rated) |
| `debug` | `/ck:fix` | 3 hypotheses | `debugger` | `debug-<slug>.md` (root cause + disproven theories) |

## Flags

| Flag | Purpose |
|------|---------|
| `--devs N` / `--researchers N` / `--reviewers N` / `--debuggers N` | Team size override |
| `--plan-approval` / `--no-plan-approval` | Plan gate per teammate (default ON for cook) |
| `--delegate` | Lead only coordinates — never touches code |
| `--worktree` | Git worktree isolation (default ON for cook) |

### --delegate Mode

- Lead enters delegate mode (`Shift+Tab` after `TeamCreate`)
- Lead ONLY: spawns teammates, manages tasks, sends messages, synthesizes reports
- Lead NEVER: edits files, runs tests, executes git commands directly
- Cook Step 6 MERGE: spawn dedicated merge teammate instead of lead doing it

## Tool Reference

### Agent Tool (spawn teammates)

```
Agent(
  subagent_type: "researcher" | "fullstack-developer" | "code-reviewer" | "debugger" | "tester",
  description: "short task summary",
  prompt: "full instructions + CK Context Block",
  model: "opus",
  run_in_background: true,
  isolation: "worktree"   # cook devs only
)
```

`Task` → `Agent` renamed in v2.1.63. Both work; prefer `Agent` for new code.

### Team Management Tools

| Tool | Purpose | Key Params |
|------|---------|------------|
| `TeamCreate` | Create team + task list | `team_name`, `description` |
| `TeamDelete` | Remove team resources | *none — just call it* |
| `TaskCreate` | Create work item | `subject`, `description`, `priority`, `addBlockedBy`, `addBlocks` |
| `TaskUpdate` | Claim/complete task | `taskId`, `status`, `owner` |
| `TaskGet` | Full task details | `taskId` |
| `TaskList` | All tasks (minimal) | *none* |
| `SendMessage` | Inter-agent messaging | `type`, `recipient`, `message` |

### SendMessage Types

| Type | Purpose | Requires |
|------|---------|----------|
| `message` | DM to one teammate | `recipient` |
| `broadcast` | All teammates (sparingly) | — |
| `shutdown_request` | Ask teammate to exit | — |
| `shutdown_response` | Approve/reject shutdown | `request_id` |
| `plan_approval_response` | Lead approves/rejects plan | `request_id` |

## CK Context Block (Mandatory in Every Spawn Prompt)

```
CK Context:
- Work dir: {CK_PROJECT_ROOT or CWD}
- Reports: {CK_REPORTS_PATH or "plans/reports/"}
- Plans: {CK_PLANS_PATH or "plans/"}
- Branch: {CK_GIT_BRANCH or current branch}
- Naming: {CK_NAME_PATTERN or "YYMMDD-HHMM"}
- Active plan: {CK_ACTIVE_PLAN or "none"}
- Commits: conventional (feat:, fix:, docs:, refactor:, test:, chore:)
- Refer to teammates by NAME, not agent ID
```

## When to Use Agent Teams vs Subagents

| Scenario | Subagents | Agent Teams |
|----------|-----------|-------------|
| Focused task (test, lint, single review) | **Yes** | Overkill |
| Sequential chain (plan → code → test) | **Yes** | No |
| 3+ independent parallel workstreams | Maybe | **Yes** |
| Competing debug hypotheses | No | **Yes** |
| Cross-layer work (FE + BE + tests) | Maybe | **Yes** |
| Workers must discuss/challenge findings | No | **Yes** |
| Token budget tight | **Yes** | No (high cost) |

## Token Budget

| Template | Estimated Tokens | Notes |
|----------|-----------------|-------|
| Research (3) | ~150K–300K | Read-only, moderate |
| Cook (4) | ~400K–800K | Highest — code generation |
| Review (3) | ~100K–200K | Read-only, moderate |
| Debug (3) | ~200K–400K | Mixed read/execute |

## Cook Template Specifics

- File ownership boundaries declared per dev task — NO overlap between devs
- Tester task `addBlockedBy` all dev task IDs (sequential after impl)
- `isolation: "worktree"` per dev = isolated dir + branch + staging
- Merge phase (Step 6): `git merge <dev-branch> --no-ff` sequentially, resolve conflicts on shared files manually, `git worktree remove` per worktree
- **Docs sync eval (mandatory):** state `Docs impact: [none|minor|major]` + `Action: …`

## Agent Memory

Teammates with `memory: project` in agent definition retain learnings across team sessions. Persists in `.claude/agent-memory/<name>/` (gitignored). Survives `TeamDelete` — memory is per-agent-name, not per-team. Useful for:

- `code-reviewer` → project conventions
- `debugger` → past failure patterns
- `tester` → flaky tests + coverage gaps
- `researcher` → domain knowledge

## Error Recovery

1. **Check status** — `Shift+Up/Down` (in-process) or click pane (split)
2. **Redirect** — direct `SendMessage` with corrective instructions
3. **Replace** — shutdown failed teammate, spawn replacement for same task
4. **Reassign** — `TaskUpdate` stuck task to unblock dependents

## Abort

```
Shut down all teammates. Then call TeamDelete (no parameters).
```

If unresponsive: close terminal / kill session. Clean orphaned configs at `~/.claude/teams/` manually.

## Display Modes

| Mode | Behavior |
|------|----------|
| `auto` (default) | Split panes if in tmux, otherwise in-process |
| `in-process` | All in one terminal — `Shift+Up/Down` navigate, `Ctrl+T` task list |
| `tmux` / `split` | Each teammate own pane — requires tmux or iTerm2 |

## Critical Rules

- DO NOT fall back to subagents if `TeamCreate` fails — abort instead
- DO NOT skip CK Context Block in spawn prompts — teammates need it to find reports/plans
- DO NOT use VSCode — Agent Teams tools are disabled there
- Teammates referred by NAME (not agent ID) in `recipient` and `owner` fields
- After every template: `TeamDelete` (no params) → `/ck:journal`

## References

- `.claude/rules/team-coordination-rules.md` — teammate behavior rules
- Upstream `references/` under `reference/stable/claude/skills/team/references/`

## Workflow Position

- **Typically follows:** any task needing 3+ parallel workstreams
- **Typically precedes:** `/ck:journal` (final entry)
- **Related:** `/ck:research`, `/ck:cook`, `/ck:code-review`, `/ck:fix` (each is the single-session equivalent)

> v3.0.0: Agent tool migration, worktree isolation for cook devs, `run_in_background` spawning, Opus 4.6 requirement.

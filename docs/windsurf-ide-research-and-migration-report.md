# Windsurf IDE Research And ClaudeKit Migration Report

Date: 2026-05-25
Scope: Windsurf IDE only. Plugin ecosystem is out of scope for the first guide.

## Goal

Build a source-backed VividKit guide that helps readers at all levels understand how Windsurf IDE works, what each component does, how the components interact, and how to use the latest supported features effectively.

Secondary goal: document whether `ck migrate -a windsurf` fits the current Windsurf IDE ecosystem, then define a path for a custom completion script for missing migration coverage. If the script works reliably, it can become an upstream ClaudeKit CLI contribution.

## Source Base

Primary official Windsurf docs:

- Documentation index: https://docs.windsurf.com/llms.txt
- Getting started: https://docs.windsurf.com/windsurf/getting-started
- Cascade: https://docs.windsurf.com/windsurf/cascade/cascade
- Skills: https://docs.windsurf.com/windsurf/cascade/skills
- Workflows: https://docs.windsurf.com/windsurf/cascade/workflows
- Memories and Rules: https://docs.windsurf.com/windsurf/cascade/memories
- AGENTS.md: https://docs.windsurf.com/windsurf/cascade/agents-md
- Cascade Hooks: https://docs.windsurf.com/windsurf/cascade/hooks
- Worktrees: https://docs.windsurf.com/windsurf/cascade/worktrees
- MCP: https://docs.windsurf.com/windsurf/cascade/mcp
- Terminal: https://docs.windsurf.com/windsurf/terminal
- Agent Command Center: https://docs.windsurf.com/windsurf/agent-command-center
- Spaces: https://docs.windsurf.com/windsurf/spaces
- Adaptive: https://docs.windsurf.com/windsurf/adaptive

Practical external references reviewed:

- DeployHQ Windsurf guide: https://www.deployhq.com/guides/windsurf
  - Useful pattern: connect Cascade work to a shipping loop: implement, review diff, commit, push, branch-based deployment, verify logs/rollback.
  - Caveat: it still references legacy `.windsurfrules`; VividKit guide should prefer the current official `.windsurf/rules/*.md` format.
- Paradigma Digital Cascade guide: https://en.paradigmadigital.com/dev/windsurf-cascade-guide-best-practices/
  - Useful pattern: treat Cascade as multiple work modes: research, refactor, debug, implementation, review.
  - Useful pattern: keep written plans in the repo for complex tasks and iterate from those plans instead of relying only on chat history.

Local verification:

- `ck --version`: `CLI Version: 4.3.1`, `Global Kit Version: engineer@v2.19.1-beta.10`
- `ck migrate -a windsurf --dry-run --yes`
- Installed CLI bundle: `/Users/thieunv/.bun/install/global/node_modules/claudekit-cli/dist/index.js`
- Source checkout referenced by scout: `/Users/thieunv/projects/personal/vividkit-web/reference/claudekit-cli`

## Windsurf Mental Model

Windsurf IDE is best explained as a ladder of interaction surfaces:

1. Tab / Autocomplete: passive inline suggestions and navigation hints.
2. Command: targeted edit surface for cursor or selected code.
3. Chat: explanation and code-understanding surface.
4. Cascade: agentic work surface with code editing, planning, terminal use, tool use, context retrieval, checkpoints, lint awareness, MCP, web/docs search, and worktrees.
5. Agent Command Center / Spaces: orchestration surface for local Cascade sessions and cloud Devin sessions.

Supporting layers:

- Context Awareness and Fast Context: retrieval and codebase understanding.
- Adaptive and model picker: model routing/control plane.
- Rules, AGENTS.md, Memories, Workflows, Skills: customization and persistence.
- MCP: external tool bridge.
- Terminal: command execution and safety policy.
- Worktrees: parallel task isolation.
- Hooks: governance, validation, logging, and workflow automation around Cascade actions.

## Component Map

| Component | Reader-facing explanation | Best visual |
| --- | --- | --- |
| Tab / Autocomplete | Fast assist while typing. Lowest friction. | Small inline editor strip |
| Command | Ask for a focused edit at a specific location. | Selection-to-edit flow |
| Chat | Ask questions, discuss code, insert snippets. | Conversation panel |
| Cascade | Agent that can plan, edit, run tools, use terminal, and recover with checkpoints. | Full task lifecycle |
| Context / Fast Context | Retrieves relevant code and context before acting. | Retrieval pipeline |
| Adaptive | Picks the right model for each request. | Router card |
| Rules | Durable behavior instructions with activation modes. | Intent matrix |
| AGENTS.md | Directory-scoped project instructions fed into the same Rules engine. | Folder tree overlay |
| Memories | Local auto-generated context across conversations. | Local memory drawer |
| Workflows | Manual slash-command procedures. | Slash command recipe |
| Skills | Multi-step task bundles with `SKILL.md` and supporting files. | Folder bundle |
| MCP | External tools and services. | Tool bridge |
| Terminal | Command mode, auto-execution, allow/deny lists, team caps. | Safety slider |
| Worktrees | Isolated git workspaces for parallel Cascade sessions. | Branch/worktree board |
| Hooks | Pre/post shell commands around Cascade actions. | Event bus |
| Agent Command Center / Spaces | Kanban-style multi-agent organization. | Task board |

## Guide Architecture

Recommended guide cluster:

1. `/guides/windsurf`
   - Flagship all-level guide.
   - Explains the full system with visual maps.
   - Starts with practical "when should I use what?" decisions.

2. `/guides/windsurf/cascade`
   - Deeper Cascade guide.
   - Covers modes, context, terminal, MCP, checkpoints, worktrees, review/deploy flows.

3. `/guides/windsurf/customization`
   - Rules vs AGENTS.md vs Memories vs Workflows vs Skills vs Hooks.
   - Useful for teams and power users.

4. `/guides/windsurf/migration`
   - ClaudeKit to Windsurf IDE.
   - Covers `ck migrate -a windsurf`, current fit, limitations, and custom hook migration path.

MVP recommendation: implement `/guides/windsurf` first, then split deeper sections into dedicated pages only after the main mental model is stable.

## Visual Direction

Primary visuals:

- Surface ladder: Tab -> Command -> Chat -> Cascade -> Agent Command Center.
- Context stack: repo, open files, rules, memories, AGENTS.md, Fast Context -> Cascade -> model/router -> tools.
- Customization matrix: Rules, AGENTS.md, Memories, Workflows, Skills, Hooks.
- Cascade event bus: pre/post read, write, command, MCP, prompt, response, worktree setup.
- Migration compatibility card: source ClaudeKit artifacts -> Windsurf destination paths -> missing coverage.

Tone:

- Practical, not marketing.
- All-level friendly: every advanced feature gets a simple "use this when..." explanation.
- Keep the first page usable without requiring the reader to know Claude Code, ClaudeKit, or MCP.

## Practical Guide Enhancements Added

The deep-dive pages should not stop at conceptual explanation. The current implementation adds a "hands-on playbook" layer to each Windsurf subpage:

### `/guides/windsurf/cascade`

Added paste-ready prompts:

- Universal task brief: goal, scope, constraints, plan gate, verification, final response.
- Debug prompt: reproduce, trace root cause, apply minimal fix, rerun same command.
- Worktree prompt: isolate risky migrations/refactors and make merge/no-merge decision explicit.
- Ship loop prompt: inspect diff, run verification, draft PR notes, and avoid push/deploy unless asked.

Research basis:

- Official Cascade docs: Cascade is an agentic assistant with tool use, checkpoints, terminal, and context awareness.
- Paradigma: written plans help keep complex work organized and reduce hallucination.
- DeployHQ: productive flow is not just code generation; it closes with diff review, commit, branch deployment, and verification.

### `/guides/windsurf/customization`

Added reference setup:

- `.windsurf/` folder layout with rules, workflows, skills, and hooks.
- Workspace rule example using official `trigger: glob` frontmatter.
- Workflow example for `/review-diff`, matching official manual-only workflow behavior.
- Hook config example using official top-level `"hooks"` object and events such as `pre_write_code`, `post_write_code`, `pre_run_command`, and `post_setup_worktree`.

Research basis:

- Official Memories & Rules docs: Rules belong in `.windsurf/rules/*.md`, support activation modes, and are better than auto memories for shared durable knowledge.
- Official Workflows docs: workflows are markdown files, manual-only, invoked via `/[workflow-name]`, and stored in `.windsurf/workflows/*.md`.
- Official Skills docs: skills are folders with `SKILL.md` and supporting files, invoked by model decision or `@mention`.
- Official Hooks docs: hooks live at system/user/workspace levels, merge system -> user -> workspace, and can block pre-actions with exit code 2.

### `/guides/windsurf/migration`

Added migration kit:

- Dry-run capture commands for `ck migrate -a windsurf`.
- Event mapping sketch for ClaudeKit hooks -> Windsurf hook events.
- Fixture layout for testing generated `.windsurf/hooks.json`.
- Upstream PR checklist for claudekit-cli.

Research basis:

- Current local dry-run shows `ck migrate -a windsurf` maps core folders but reports hooks unsupported.
- Official Hooks docs now define enough native event surface to design a separate hook bridge.

## `ck migrate -a windsurf` Fit Check

Verdict: mostly fits the core Windsurf IDE customization ecosystem, but not complete for the newest Windsurf ecosystem because native Cascade Hooks are not migrated.

Verified dry run:

```text
ck migrate -a windsurf --dry-run --yes
```

Observed destinations:

| ClaudeKit source | Windsurf destination | Status |
| --- | --- | --- |
| agents | `.windsurf/rules` | Supported |
| skills | `.windsurf/skills` | Supported |
| config / `CLAUDE.md` | `.windsurf/rules/rules.md` | Supported |
| rules | `.windsurf/rules` | Supported |
| commands | `.windsurf/workflows` in provider registry; dry run had no command items in current source set | Supported by provider |
| hooks | unsupported | Gap |

Dry-run result in this worktree:

- Source: `13 agents`, `82 skills`, `12 rules`, `8 hooks`, `config`.
- Would change: `108 item(s)`.
- Hooks are discovered from `~/.claude/hooks`, but reported as unsupported for Windsurf.

Current source/provider mapping matches official Windsurf paths for the core artifacts:

- Workspace skills: `.windsurf/skills/<skill-name>/SKILL.md`
- Global skills: `~/.codeium/windsurf/skills/<skill-name>/SKILL.md`
- Workspace workflows: `.windsurf/workflows/*.md`
- Global workflows: `~/.codeium/windsurf/global_workflows/*.md`
- Workspace rules: `.windsurf/rules/*.md`
- Global rules: `~/.codeium/windsurf/memories/global_rules.md`
- AGENTS.md: discovered in workspace directories and fed into the Rules engine.

Known docs issue in this repo:

- `src/components/guides/MigrateGuide.astro` still mentions `.windsurfrules`.
- Current Windsurf docs and ClaudeKit provider source use `.windsurf/rules`, not `.windsurfrules`.

## Cascade Hooks Research

Yes, Cascade Hooks were researched from the official Windsurf docs.

Current Windsurf IDE Hooks support:

- System-level config:
  - macOS: `/Library/Application Support/Windsurf/hooks.json`
  - Linux/WSL: `/etc/windsurf/hooks.json`
  - Windows: `C:\ProgramData\Windsurf\hooks.json`
- User-level config:
  - Windsurf IDE: `~/.codeium/windsurf/hooks.json`
  - JetBrains plugin: `~/.codeium/hooks.json`
- Workspace-level config:
  - `.windsurf/hooks.json`

Hooks are merged in order:

1. system
2. user
3. workspace

Hook command fields:

- `command`: macOS/Linux command, run through `bash -c`.
- `powershell`: Windows command, run through `powershell -Command`.
- `show_output`: show stdout/stderr in Cascade UI where applicable.
- `working_directory`: optional; defaults to workspace or repo root.

Supported Cascade hook events:

- `pre_read_code`
- `post_read_code`
- `pre_write_code`
- `post_write_code`
- `pre_run_command`
- `post_run_command`
- `pre_mcp_tool_use`
- `post_mcp_tool_use`
- `pre_user_prompt`
- `post_cascade_response`
- `post_cascade_response_with_transcript`
- `post_setup_worktree`

Blocking behavior:

- Only pre-hooks can block.
- Blocking uses exit code `2`.
- Post-hooks cannot block because the action already happened.

Important privacy/security note:

- `post_cascade_response` can contain sensitive repo or conversation data.
- `post_cascade_response_with_transcript` writes detailed JSONL transcripts under `~/.windsurf/transcripts/{trajectory_id}.jsonl`.
- Transcript files include file contents, command output, tool arguments, and applied rules. Treat them as sensitive.

Why this matters for ClaudeKit:

- ClaudeKit CLI currently marks Windsurf `hooks: null`.
- Windsurf IDE now has native hooks with a clear JSON config format.
- Therefore the migration guide must say: core migration works, hook migration is currently not supported by `ck migrate -a windsurf`.

## Custom Hook Migration Script Proposal

Goal:

- Convert ClaudeKit/Claude Code hook registrations into Windsurf `.windsurf/hooks.json`.
- Keep it separate from upstream CLI first.
- Verify against a local Windsurf workspace.
- If reliable, propose upstream support in `claudekit-cli`.

Proposed script name:

- `scripts/migrate-claudekit-hooks-to-windsurf.mjs`

Inputs:

- Claude/ClaudeKit hook config and hook directory:
  - project: `.claude/settings.json`, `.claude/hooks/`
  - global: `~/.claude/settings.json`, `~/.claude/hooks/`
- Optional output scope:
  - project: `.windsurf/hooks.json`
  - user: `~/.codeium/windsurf/hooks.json`

Output:

- A Windsurf-compatible `hooks.json` with this shape:

```json
{
  "hooks": {
    "pre_write_code": [
      {
        "command": "node .claude/hooks/example.cjs",
        "show_output": true
      }
    ]
  }
}
```

Mapping strategy:

| Claude/ClaudeKit intent | Windsurf event candidate | Notes |
| --- | --- | --- |
| before file read | `pre_read_code` | direct if source event exists |
| after file read | `post_read_code` | direct if source event exists |
| before file edit/write | `pre_write_code` | direct if source event exists |
| after file edit/write | `post_write_code` | direct if source event exists |
| before shell command | `pre_run_command` | direct if source event exists |
| after shell command | `post_run_command` | direct if source event exists |
| before MCP tool | `pre_mcp_tool_use` | direct if source event exists |
| after MCP tool | `post_mcp_tool_use` | direct if source event exists |
| before user prompt | `pre_user_prompt` | direct if source event exists |
| after agent response / transcript | `post_cascade_response` or `post_cascade_response_with_transcript` | requires privacy review |
| worktree setup | `post_setup_worktree` | Windsurf-specific; no generic Claude equivalent unless custom convention exists |

Risks:

- Claude hook schema and Windsurf hook schema are similar in concept but not guaranteed to be structurally identical.
- Some ClaudeKit hooks may assume Claude-specific environment variables, paths, or stdin payloads.
- Generated-context/session hooks may not make sense in Windsurf.
- Transcript hooks can expose sensitive data.

Validation plan:

1. Build script in dry-run mode first.
2. Read current Claude/ClaudeKit hook config.
3. Produce a proposed `.windsurf/hooks.json` without writing by default.
4. Add `--write` only after diff review.
5. Run in a disposable test workspace.
6. Verify at least:
   - `pre_run_command` can block with exit code `2`.
   - `post_write_code` receives file edit payload.
   - `post_setup_worktree` can copy `.env` into a worktree.
7. Document any hook that cannot be safely mapped.

Upstream contribution criteria:

- Source schema parser is deterministic.
- Dry-run and write modes are tested.
- Existing user `.windsurf/hooks.json` is merged, not overwritten.
- Hook command paths are rewritten safely for project/global scope.
- Unsupported hooks are reported clearly.
- Privacy-sensitive response/transcript hooks require explicit opt-in.

## Proposed Guide Copy Positioning

Use this public wording:

> `ck migrate -a windsurf` already maps ClaudeKit agents, rules, workflows, skills, and project config into Windsurf's native customization folders. Hooks are the important exception: Windsurf now supports Cascade Hooks, but ClaudeKit CLI does not migrate them to `.windsurf/hooks.json` yet. Treat hook migration as a separate manual or scripted step.

Avoid saying:

- "Windsurf does not support hooks."
- "Everything migrates with one command."
- ".windsurfrules" as the current destination.

## Next Implementation Steps

1. Fix stale `.windsurfrules` wording in the migrate guide.
2. Add a Windsurf-specific limitation card to the migrate guide.
3. Draft `/guides/windsurf` page with the visual ladder and component map.
4. Build the standalone hook migration script in dry-run mode.
5. Validate script against a disposable workspace.
6. If successful, prepare an upstream `claudekit-cli` provider/hooks PR.

## Unresolved Questions

- Should the first published guide be EN only first, or EN + VI together?
- Should the custom hook migration script live in this repo as a VividKit helper, or in a separate ClaudeKit upstream branch from day one?
- Which ClaudeKit hooks should be intentionally excluded from Windsurf migration because they are Claude/Codex runtime-specific?

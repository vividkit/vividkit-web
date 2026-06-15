# ClaudeKit Shared Concepts

## CK Agent List

Source: `github.com/claudekit/claudekit-engineer/claude/agents/`

brainstormer, code-reviewer, code-simplifier, debugger, docs-manager,
fullstack-developer, git-manager, journal-writer,
planner, project-manager, researcher, tester, ui-ux-designer

## Skills vs Agents vs Built-in Subagent Types

- **Skills** (ck:scout, ck:debug, ck:sequential-thinking, etc.) = prompt templates activated in main agent context
- **Agents** (debugger, tester, code-reviewer, etc.) = sub-agents spawned via Task tool in isolated context
- **Built-in subagent types** (Explore, Bash) = Claude Code native, not CK-specific

## Hooks Lifecycle (from settings.json — complete)

Hooks fire at different lifecycle events, NOT all at UserPromptSubmit:

| Event | Hook | Purpose |
|-------|------|---------|
| SessionStart | session-init.cjs | Project detection, config load |
| SessionStart | session-state.cjs | Session state tracking |
| SessionStart | usage-quota-cache-refresh.cjs | Refresh usage/quota cache |
| UserPromptSubmit | dev-rules-reminder.cjs | Inject coding standards, plan context |
| UserPromptSubmit | usage-quota-cache-refresh.cjs | Refresh usage/quota cache |
| PreToolUse (Bash/Read/Edit/etc.) | privacy-block.cjs | Block access to .env, credentials |
| PreToolUse (Bash/Read/Edit/etc.) | scout-block.cjs | Scout mode enforcement |
| PreToolUse (Write) | descriptive-name.cjs | Enforce kebab-case file naming |
| SubagentStart (*) | subagent-init.cjs | Inject context for sub-agents |
| SubagentStart (*) | team-context-inject.cjs | Team coordination context |
| SubagentStart (*) | approval-workflow.cjs | Plan approval flow |
| SubagentStop (Plan) | cook-after-plan-reminder.cjs | Remind to cook after planning |
| SubagentStop (*) | session-state.cjs | Update session state |
| PostToolUse (Edit/Write) | post-edit-simplify-reminder.cjs | Code simplification reminder |
| PostToolUse (Edit/Write) | plan-format-kanban.cjs | Format plan files as kanban |
| PostToolUse (Bash/Edit/Write/etc.) | usage-quota-cache-refresh.cjs | Refresh usage/quota cache |
| Stop (*) | (stop hook) | Session cleanup |

## Skills Used in /ck:fix (complete list from skill-activation-matrix.md)

### Always (all workflows)
- ck:scout, ck:debug, ck:sequential-thinking

### Auto-triggered
- ck:problem-solving (when 2+ hypotheses refuted)

### Conditional
- ck:brainstorm (Deep only — multiple valid approaches)
- ck:context-engineering (fixing AI/LLM/agent code)
- ck:ai-multimodal (UI/visual bugs, screenshots)
- ck:project-management (Moderate+ — task sync, progress tracking)
- ck:code-review (Step 5 — via code-reviewer subagent)
- /ck:journal (Step 6 — journal entry)

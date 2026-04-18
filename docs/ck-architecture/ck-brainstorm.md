# /ck:brainstorm — Solution Brainstorming

Source: `~/.claude/skills/brainstorm/SKILL.md`

## Authoritative Flow

```
1. Scout — ck:scout to discover project context
2. Clarify — AskUserQuestion for requirements
3. Scope Assessment — 3+ subsystems? → decompose into sub-projects
4. Research — gather info from agents + external sources
5. Analysis — evaluate 2-3 viable approaches with pros/cons
6. Debate — present options, challenge user preferences (brutal honesty)
7. Consensus — align on chosen approach
8. Documentation — create comprehensive markdown summary report
9. Finalize — ask if user wants implementation plan
   → Yes: run /ck:plan
   → No: end session
10. Journal — /ck:journal
```

## Skills Activated

| Type | Skill |
|------|-------|
| Mandatory | ck:scout |
| Conditional | /ck:plan (if user approves → plan), /ck:journal |
| Optional | ck:sequential-thinking, ck:docs-seeker, ck:ai-multimodal |

## Sub-agents

No dedicated sub-agents spawned. Main agent handles all phases directly.
Consults planner and docs-manager agents but doesn't spawn them via Task tool.

## Mode Selection

None — single mode (brutal honesty brainstorming).

## Complexity Routing

Scope-based only:
- 3+ independent subsystems → decompose into sub-projects
- Each sub-project gets independent brainstorm → plan → implement cycle

## Hard Gate

No implementation until design presented and approved.

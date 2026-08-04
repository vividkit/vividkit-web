# /ck:handoff — Conversation-state handoff (not git status)

Source: `reference/beta/claude/skills/handoff/SKILL.md`

## Authoritative Flow

```
1. Focus: Optional next-session focus
2. Read Context: Instructions, plans, previous handoff
3. Capture State: Goal, decisions, blockers, verification
4. Redact Secrets: Strip tokens, private data
5. Markdown Handoff: Fenced block + plans/reports file
```

## Hard Gate

Preserve decisions and blockers — not a command list. Distinct from /ck:watzup (git-derived).

## Skills / Tools Activated

| Type | Name |
|------|------|
| tool | `Read` |
| tool | `plans/reports` |

## Mode Selection

See argument-hint and flags on the CommandsGuide card.

## Complexity Routing

None — single primary path with optional flags.

## Artifacts

plans/reports/handoff-YYYYMMDD-HHmm-<slug>.md

# /ck:goal-warmup — Outcome-locked preflight before long-run goals

Source: `reference/beta/claude/skills/goal-warmup/SKILL.md`

## Authoritative Flow

```
1. Goal + Mode: Quoted goal text; optional --fast
2. Outcome Contract: Interview to locked, measurable end-state
3. Preflight Matrix: Blockers, env presence, decision forks
4. Ready / Blocked / Decision: Exactly one terminal status
5. Handoff Report: Contract + matrix + next command suggestion
```

## Hard Gate

Never auto-starts /goal or long-run sessions. Ends in exactly one of Ready, Blocked, or Decision required.

## Skills / Tools Activated

| Type | Name |
|------|------|
| skill | `ck:advise` |
| skill | `ck:codex-goal` |
| tool | `Read` |

## Mode Selection

See argument-hint and flags on the CommandsGuide card.

## Complexity Routing

None — single primary path with optional flags.

## Artifacts

In-session report; optional files under plans/ when flags request them.

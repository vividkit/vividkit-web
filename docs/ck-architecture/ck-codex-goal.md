# /ck:codex-goal — Codex-native /goal with verifiable stop

Source: `reference/beta/claude/skills/codex-goal/SKILL.md`

## Authoritative Flow

```
1. Objective Draft: Objective or rough goal wording
2. Availability Check: Confirm /goal enabled in Codex
3. Use Test: Long, mechanical, verifiable stop
4. Goal Contract: Draft stop condition + validation loop
5. Ready Goal Text: Copy-pasteable /goal line
```

## Hard Gate

Not a safety boundary or unbounded backlog runner. Use only when stop condition is verifiable.

## Skills / Tools Activated

| Type | Name |
|------|------|
| skill | `ck:goal-warmup` |
| tool | `codex` |

## Mode Selection

See argument-hint and flags on the CommandsGuide card.

## Complexity Routing

None — single primary path with optional flags.

## Artifacts

In-session report; optional files under plans/ when flags request them.

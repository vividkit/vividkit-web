# /ck:fable-thinking — Evidence-grounded reasoning protocol

Source: `reference/beta/claude/skills/fable-thinking/SKILL.md`

## Authoritative Flow

```
1. Task or Question: Debug, review, architecture, contested claim
2. The Floor: Goal + follow-through + counterexample
3. Proportionality: Direct vs Constraint vs Full Five Moves
4. Five Moves: Hypotheses → evidence → simulate → adversarial → calibrate
5. Self-Review Gate: Binary gate before sending
6. Calibrated Answer: Outcome-first with uncertainty marked
```

## Hard Gate

Floor checks (goal, follow-through, counterexample) run before EVERY answer — never skipped.

## Skills / Tools Activated

| Type | Name |
|------|------|
| tool | `Read` |
| tool | `Grep` |
| tool | `WebSearch` |

## Mode Selection

See argument-hint and flags on the CommandsGuide card.

## Complexity Routing

None — single primary path with optional flags.

## Artifacts

In-session report; optional files under plans/ when flags request them.

# /ck:coding-agent-orchestration — Multi coding-agent workflow orchestration

Source: `reference/beta/claude/skills/coding-agent-orchestration/SKILL.md`

## Authoritative Flow

```
1. Task + Mode: Task/workflow + execution shape flag
2. Classify Task: Feature, bug, refactor, review, release…
3. Choose Shape: single / sequential / parallel / review-loop
4. Ownership + Handoffs: File ownership and evidence requirements
5. Execute + Reconcile: Run agents; reconcile on repo truth
6. Integrator Result: One plan/patch/review package
```

## Hard Gate

One final integrator. Explicit file ownership before parallel work. Evidence gates before completion.

## Skills / Tools Activated

| Type | Name |
|------|------|
| tool | `Claude Code` |
| tool | `Codex` |
| tool | `OpenCode` |
| tool | `Cursor` |
| skill | `ck:code-review` |
| skill | `ck:test` |

## Mode Selection

See argument-hint and flags on the CommandsGuide card.

## Complexity Routing

None — single primary path with optional flags.

## Artifacts

In-session report; optional files under plans/ when flags request them.

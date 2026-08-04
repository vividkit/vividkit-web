# /ck:research-prompt — Write the research assignment, not the research

Source: `reference/beta/claude/skills/research-prompt/SKILL.md`

## Authoritative Flow

```
1. Topic or Decision: Research topic or decision to inform
2. Gather Context: Decision, audience, facts, constraints
3. Shape Brief: One question + 3-6 sub-questions
4. Single Paragraph: Exactly one paragraph — no headings
```

## Hard Gate

Writes the brief only — does not perform the research.

## Skills / Tools Activated

| Type | Name |
|------|------|
| tool | `Read` |
| skill | `ck:research` |

## Mode Selection

See argument-hint and flags on the CommandsGuide card.

## Complexity Routing

None — single primary path with optional flags.

## Artifacts

In-session report; optional files under plans/ when flags request them.

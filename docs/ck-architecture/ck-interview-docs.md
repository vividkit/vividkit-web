# /ck:interview-docs — User-answer-driven documentation

Source: `reference/beta/claude/skills/interview-docs/SKILL.md`

## Authoritative Flow

```
1. Topic: Vision, document path, or topic
2. Select Mode: Vision vs structured-doc
3. Read Existing: README and docs/adr first
4. Interview Batches: Five high-variety questions; patch after each answer
5. Living Docs: Updated README / ADRs / structured docs
```

## Hard Gate

Content comes from user answers — not AI invention or code scanning.

## Skills / Tools Activated

| Type | Name |
|------|------|
| tool | `Read` |
| tool | `Write` |

## Mode Selection

See argument-hint and flags on the CommandsGuide card.

## Complexity Routing

None — single primary path with optional flags.

## Artifacts

README.md, docs/adr/*.md, or target structured document path.

# /ck:issue-to-plan — Audited issue-to-plan pipeline (planning only)

Source: `reference/beta/claude/skills/issue-to-plan/SKILL.md`

## Authoritative Flow

```
1. Issue Ref: Issue URL/number + optional repo/label flags
2. Read + Classify: Fetch issue, classify type, extract requirements
3. Scout + Verify: ck:scout verifies issue is real and in scope
4. Audit / Brainstorm Gate: Hard gate — only plan if issue passes
5. Plan + Validate + Red-Team: Generate plan, validate, red-team, consistency sweep
6. Plan Branch + Issue Handoff: Pushed plan branch and issue comment
```

## Hard Gate

Hard audit/brainstorm gate BEFORE any planning. Planning-only — stops before cook/ship/PR.

## Skills / Tools Activated

| Type | Name |
|------|------|
| skill | `ck:scout` |
| skill | `ck:brainstorm` |
| skill | `ck:plan` |
| tool | `gh` |
| skill | `ck:worktree` |

## Mode Selection

See argument-hint and flags on the CommandsGuide card.

## Complexity Routing

None — single primary path with optional flags.

## Artifacts

plans/ branch with plan.md + phases; GitHub issue comment; optional HTML/wiki plan.

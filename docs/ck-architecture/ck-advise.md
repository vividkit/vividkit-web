# /ck:advise — Honest advisory interview before planning

Source: `reference/beta/claude/skills/advise/SKILL.md`

## Authoritative Flow

```
1. Prompt or URL: Raw idea, problem, or GitHub/spec URL
2. Analyze Input: Extract stated vs implied problem
3. Scout If Needed: Parallel Explore when codebase matters
4. Interview Loop: One question until requirements are exact
5. Honest Advice: Do / avoid / alternatives / trade-offs
6. Reports + Flags: Markdown default; optional publish flags
```

## Hard Gate

Advisory only — does not implement code or execute the advice it produces. Present analysis before every AskUserQuestion.

## Skills / Tools Activated

| Type | Name |
|------|------|
| agent | `Explore` |
| tool | `gh` |
| tool | `WebFetch` |
| agent | `kongming` |

## Mode Selection

See argument-hint and flags on the CommandsGuide card.

## Complexity Routing

None — single primary path with optional flags.

## Artifacts

Optional HTML/MD reports; AgentWiki page; GitHub comment on source issue.

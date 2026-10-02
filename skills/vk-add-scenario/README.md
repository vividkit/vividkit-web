# vk:add-scenario

Add a ClaudeKit `/ck:<command>` scenario to the How-CK-Works guide.

## Usage

```
/vk:add-scenario ship
/vk:add-scenario test
/vk:add-scenario code-review --doc-only
```

## Arguments

| Arg | What it does |
|---|---|
| `<command>` | Required. e.g. `ship`, `test`, `code-review` |
| `--doc-only` | Architecture doc only |
| `--scenario-only` | Scenario data only (doc must already exist) |

## What it writes

- `docs/ck-architecture/ck-<command>.md`
- Scenario entry in `src/data/guides/how-ck-works/workflow-visualizer-scenarios.ts`

Reads source `SKILL.md` from `~/.claude/skills/` or `reference/{stable,beta,marketing-*}/`.

Does not modify upstream skill files or `~/.claude/settings.json`.

## Related

- Auto-chained from `/vk:audit-skill --sync` for newly added skills

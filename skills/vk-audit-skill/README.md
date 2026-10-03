# vk:audit-skill

Audit upstream ClaudeKit skill changes, infographic data, skills registry, and auto-add How-CK-Works scenarios.

## Usage

```
/vk:audit-skill --check
/vk:audit-skill --report
/vk:audit-skill --sync
```

## Commands

| Flag | What it does |
|---|---|
| `--check` | Change count since last audit (no writes) |
| `--report` | Markdown audit report |
| `--sync` | Metadata + infographics + chain `/vk:add-scenario` for new skills |
| `--sync-registry` | Rebuild `reference/skills-registry.json` |
| `--force-docs` | With `--sync`: regen architecture docs for all modified skills |
| `--kit engineer\|marketer\|all` | Filter (default `all`) |
| `--branch stable\|beta\|all` | Filter (default `stable`) |

## State

Uses `reference/.skill-audit-state.json` only.  
Do **not** touch `reference/.last-sync` (owned by `/vk:changelog-sync`).

## Related

- New scenarios: `/vk:add-scenario`
- Broad CK changelog: `/vk:changelog-sync`

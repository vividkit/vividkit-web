# vk:audit-ak-workflows

Audit AgentKit skills **used in Workflows guide cards**. Fingerprint drift vs pins. Never edits `src/`.

## Usage

```
/vk:audit-ak-workflows --check
/vk:audit-ak-workflows --report
```

Or:

```bash
SCRIPT=skills/vk-audit-ak-workflows/scripts/detect-workflow-skill-drift.cjs

node $SCRIPT --rebuild-index
node $SCRIPT --check
node $SCRIPT --report
node $SCRIPT --sync
```

Runtimes discover skills from `.claude/skills/` and `.agents/skills/` (gitignored). After a fresh clone, once:

```bash
ln -sfn ../../skills/vk-audit-ak-workflows .claude/skills/vk-audit-ak-workflows
ln -sfn ../../skills/vk-audit-ak-workflows .agents/skills/vk-audit-ak-workflows
```

## Commands

| Flag | What it does |
|---|---|
| `--rebuild-index` | Parse workflow data → `reference/ak-workflow-skill-index.json` |
| `--check` | CI gate: fail on drift or unknown skill refs (exit 1) |
| `--report` | Markdown proposals under `reference/changelog-reports/` |
| `--sync` | Refresh pins after human review. Still never writes `src/` |
| `--kit-root <path>` | Extra tree for kit `SKILL.md` |
| `--repo <path>` | VividKit root (default: walk from cwd) |

## Cadence

1. After workflow data edits: `--rebuild-index` then `--check`
2. After kit/skill updates: `--report` → review → `--sync` → `--check`

## Related

- Full site: `/vk:audit-ak-guides`
- Inventory / skill pages: `/vk:audit-ak-skills`
- Data: `src/data/guides/agentkit-workflows/`

# vk:audit-ccs

Audit upstream CCS (`kaitranntt/ccs`) vs the VividKit CCS Guide.

## Usage

```
/vk:audit-ccs
/vk:audit-ccs --report
/vk:audit-ccs --sync
```

Or:

```bash
SCRIPT=skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs

node $SCRIPT --check
node $SCRIPT --report
node $SCRIPT --sync
node $SCRIPT --inventory
```

## Commands

| Flag | What it does |
|---|---|
| `--check` | Quick HEAD vs last-sync (default) |
| `--report` | Categorized changelog + guide impact |
| `--sync` | Fetch main, report, update marker |
| `--inventory` | Profile coverage matrix, no diff |
| `--commands` | CLI command-surface audit |
| `--architecture` | Subsystem directory audit |
| `--capabilities` | Per-provider capability matrix |
| `--schemas` | Config schema audit |
| `--validate` | Aggregate drift gate across dimensions |
| `--no-fetch` | Use current clone, skip git fetch |

## Config

| Item | Value |
|---|---|
| Upstream | `kaitranntt/ccs` `main` |
| Clone | `reference/ccs/` |
| Reports | `reference/changelog-reports/` |

Does not auto-apply guide edits.

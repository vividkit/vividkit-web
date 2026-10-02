# ClaudeKit Changelog Sync (v2.0.0)

Auto-detect changes in ClaudeKit Engineer Kit and Marketing Kit since last VividKit guides update.

## Setup

Requires a `reference/` folder in the VividKit project root with cloned repos:

```bash
cd /path/to/vividkit-web/reference
make fetch-all      # Engineer Kit: stable (main) + beta (dev)
make mkt-fetch-all  # Marketing Kit: marketing-stable + marketing-beta
```

## Usage

Activate via skill:

```
/vk:changelog-sync --sync
/vk:changelog-sync --check
/vk:changelog-sync --report --kit marketing
```

Or run directly:

```bash
node .claude/skills/claudekit-changelog-sync/scripts/detect-changes.cjs --sync
```

## Options

| Flag | Description |
|------|-------------|
| `--check` | Quick summary (default) |
| `--report` | Categorized changelog + guide impact |
| `--sync` | Fetch + report + update sync marker |
| `--kit engineer` | Engineer Kit only |
| `--kit marketing` | Marketing Kit only |
| `--kit all` | Both kits (default) |
| `--branch stable` | Stable only |
| `--branch beta` | Beta only |
| `--branch both` | Both branches (default) |

## Directory Mapping

| Kit | Stable | Beta | Fetch Targets |
|-----|--------|------|---------------|
| Engineer | `reference/stable/` | `reference/beta/` | `fetch-stable`, `fetch-beta` |
| Marketing | `reference/marketing-stable/` | `reference/marketing-beta/` | `mkt-fetch-stable`, `mkt-fetch-beta` |

## How It Works

1. **Marker**: `reference/.last-sync` stores last synced commit SHAs for all 4 directories
2. **Fetch**: Runs Makefile targets to pull latest code
3. **Diff**: Compares current HEAD vs last-sync SHA
4. **Categorize**: Groups into skills, agents, hooks, rules, commands, workflows, config, scripts, schemas
5. **Impact map**: Maps categories to VividKit guide files needing updates
6. **Report**: Saves to `reference/changelog-reports/`

## File Structure

```
claudekit-changelog-sync/
├── README.md
├── SKILL.md              # Skill definition (Progressive Disclosure)
└── scripts/
    └── detect-changes.cjs # Main detection script
```

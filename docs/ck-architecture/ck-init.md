# ck init - Initialize or Update ClaudeKit

Source: `reference/claudekit-cli/src/cli/command-registry.ts` + `reference/claudekit-cli/src/domains/help/commands/init-command-help.ts`

## Authoritative Flow

```
1. Input - user runs ck init with project, kit, version, mode, or filter flags.
2. Auth / Source - choose GitHub API, git clone, local archive, or local kit path.
3. Download / Load Kit - resolve release or local source and stage kit files.
4. Copy Files - install CLAUDE.md, AGENTS.md, .claude/*, skills, hooks, agents, rules, scripts.
5. Merge Settings - preserve user config by default; selective merge settings.json.
6. Optional Setup - install skill dependencies and system packages when requested.
7. Output - local or global ClaudeKit install is ready for Claude Code.
```

## Key Flags

| Group | Flags |
|-------|-------|
| Mode | `-y`, `--yes`, `--use-git`, `--sync`, `--archive`, `--kit-path` |
| Project | `--dir`, `--kit`, `--release`, `--global`, `--fresh`, `--force` |
| Filter | `--exclude`, `--only`, `--beta`, `--refresh` |
| Install | `--install-skills`, `--with-sudo`, `--prefix`, `--skip-setup`, `--dry-run` |
| Override | `--force-overwrite`, `--force-overwrite-settings` |

## Skills Activated

| Type | Skill |
|------|-------|
| CLI | `claudekit-cli` init command |
| Content | Engineer / Marketing kit payload |

## Sub-agents

None. This is a CLI command flow, not a Claude Code skill. The guide scenario visualizes the installer pipeline.

## Mode Selection

- Project-local install by default.
- Global install with `--global`.
- Full reset with `--fresh`.
- Non-interactive install/update with `--yes`.
- Source override with `--use-git`, `--archive`, or `--kit-path`.

## Hard Gate

- Default init preserves existing user config and merges settings.
- `--fresh`, `--force-overwrite`, and `--force-overwrite-settings` are destructive override modes.
- `--dry-run` previews changes without applying them.

## Artifacts

- `CLAUDE.md`, `AGENTS.md`
- `.claude/.ck.json`, `.claude/settings.json`
- `.claude/skills/`, `.claude/hooks/`, `.claude/agents/`, `.claude/rules/`, `.claude/scripts/`
- Optional dependency installs for skills and system packages

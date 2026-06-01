# CLI Commands Catalog — Source of Truth

**Generated:** 2026-05-11
**Scope:** CCS CLI (`@kaitranntt/ccs`) + ClaudeKit CLI (`claudekit-cli`)
**Focus:** Binary CLI commands only. Slash commands/skills NOT included.

This document is the single source of truth for VividKit Guides.

---

## Part A — CCS CLI (`ccs`)

Package: `@kaitranntt/ccs` | Source: `reference/ccs/src/commands/command-catalog.ts`

### A1. Root Commands (20 public + 4 hidden)

| # | Command | Aliases | Group | Description |
|---|---------|---------|-------|-------------|
| 1 | `ccs setup` | `--setup` | start | First-time interactive wizard |
| 2 | `ccs doctor` | `--doctor` | start | Health check; `--fix` auto-repairs |
| 3 | `ccs version` | `--version`, `-v` | start | Version banner + profile readiness |
| 4 | `ccs help [topic]` | `--help`, `-h` | start | Multi-tier grouped help |
| 5 | `ccs config` | — | start | Dashboard + config subcommands |
| 6 | `ccs migrate` | `--migrate` | manage | v1→v2 config migration |
| 7 | `ccs sync` | `--sync` | operations | Refresh `~/.claude/{commands,skills,agents}` symlinks |
| 8 | `ccs update` | `--update` | operations | Update to latest (`--force`, `--beta`/`--dev`) |
| 9 | `ccs cleanup` | `--cleanup` | operations | Remove old logs |
| 10 | `ccs env <profile>` | — | manage | Export profile env as shell exports or IDE JSON |
| 11 | `ccs persist <profile>` | — | manage | Write profile to `~/.claude/settings.json` |
| 12 | `ccs tokens` | — | manage | Manage CLIProxy auth tokens |
| 13 | `ccs auth` | — | manage | Account profile management |
| 14 | `ccs api` | — | manage | API profile management |
| 15 | `ccs cliproxy` | — | runtime | CLIProxy variant lifecycle + install |
| 16 | `ccs cursor` | — | runtime | Cursor provider bridge |
| 17 | `ccs copilot` | — | runtime | GitHub Copilot bridge |
| 18 | `ccs browser` | — | runtime | Browser Attach lane management |
| 19 | `ccs proxy` | — | runtime | OpenAI-compatible local proxy daemon |
| 20 | `ccs docker` | — | runtime | Docker stack (Dashboard + CLIProxy) |
| — | `ccs --install` | — | operations | Post-install bootstrap hook (inert) |
| — | `ccs --uninstall` | — | operations | Post-uninstall cleanup hook |
| — | `ccs --shell-completion` | `-sc` | operations | Install shell completion |
| — | `ccs __complete` | — | operations | Hidden shell completion backend |

### A2. Subcommands

#### `ccs auth <sub>` (8 subs)
| Sub | Key Flags | Description |
|-----|-----------|-------------|
| `create <profile>` | `--force`, `--bare`, `--share-context`, `--context-group`, `--deeper-continuity` | Create isolated account profile |
| `backup <profile|default>` | `--json` | Snapshot continuity artifacts |
| `list` | `--verbose`, `--json` | List all account profiles |
| `show <profile>` | `--json` | Detailed profile view |
| `resources` | — | List account resources |
| `remove <profile>` | `--yes`/`-y` | Delete profile + instance |
| `default <profile>` | — | Set default profile |
| `reset-default` | — | Clear custom default |

#### `ccs api <sub>` (7 subs)
| Sub | Key Flags | Description |
|-----|-----------|-------------|
| `create [name]` | `--preset`, `--cliproxy-provider`, `--base-url`, `--api-key`, `--model`, `--extra-models`, `--target`, `--1m`, `--no-1m` | Create API profile |
| `list` | — | Tabular profile display |
| `discover` | `--register`, `--target`, `--json`, `--force` | Scan orphan `*.settings.json` |
| `copy <src> <dst>` | `--target`, `--force`, `--yes` | Duplicate profile |
| `export <name>` | `--out`, `--include-secrets` | Serialize to `*.ccs-profile.json` |
| `import <file>` | `--name`, `--target`, `--force`, `--yes` | Import profile bundle |
| `remove [name]` | `--yes`/`-y` | Delete profile |

**API Presets (14):** `openrouter`, `alibaba-coding-plan` (`alibaba`, `acp`), `ollama`, `llamacpp`, `anthropic`, `huggingface` (`hf`), `glm` (`glmt` deprecated), `km` (`kimi`), `foundry`, `mm`, `deepseek`, `qwen`, `ollama-cloud`, `novita`

#### `ccs cliproxy <sub>` (16 subs)
| Sub | Key Flags | Description |
|-----|-----------|-------------|
| `create [name]` | `--provider`, `--model`, `--account`, `--target`, `--composite`, `--backend` | Create variant |
| `edit [name]` | `--target`, `--backend` | Edit variant |
| `list` | — | List built-in + custom variants |
| `remove [name]` | `--yes`/`-y` | Delete variant |
| `sync` | `--dry-run`, `--verbose` | Reconcile API profiles to CLIProxy config |
| `quota` | `--provider`, `--verbose` | Aggregate live quota |
| `start` | `--verbose` | Spawn CLIProxy daemon |
| `restart` | `--verbose` | Stop + start |
| `status` | — | Show PID, port, sessions |
| `stop` | — | SIGTERM daemon |
| `doctor` | `--verbose` | Deep diagnostics (Antigravity) |
| `default <account>` | `--provider` | Set default-for-rotation |
| `pause <account>` | `--provider` | Skip account in rotation |
| `resume <account>` | `--provider` | Re-enable account |
| `routing` | `set <round-robin|fill-first>`, `explain`, `affinity on|off [--ttl 1h]` | Routing strategy |
| `catalog` | `refresh`, `reset`, `--json` | Model catalog |

**Bare `ccs cliproxy` flags:** `--install <ver>`, `--latest`, `--update`, `--backend <original|plus>`

#### `ccs cursor <sub>` (8 subs)
`auth`, `status`, `probe`, `models`, `start`, `stop`, `enable`, `disable`

#### `ccs copilot <sub>` (8 subs)
`auth`, `status`, `models`, `usage`, `start`, `stop`, `enable`, `disable`

#### `ccs browser <sub>` (6 subs)
| Sub | Key Flags | Description |
|-----|-----------|-------------|
| `setup`, `status`, `doctor` | — | Browser lane management |
| `policy` | `--all`, `--claude`, `--codex` (values: `auto`|`manual`) | Set browser policy |
| `enable <lane>` | `--browser`, `--no-browser` | Enable lane |
| `disable <lane>` | — | Disable lane |

#### `ccs proxy <sub>` (4 subs)
| Sub | Key Flags | Description |
|-----|-----------|-------------|
| `start <profile>` | `--port`, `--host`, `--insecure` | Start proxy daemon |
| `stop [profile]` | — | Stop proxy |
| `status [profile]` | — | Check status |
| `activate [profile]` | `--shell`, `--fish` | Activate profile env |

#### `ccs docker <sub>` (6 subs)
| Sub | Key Flags | Description |
|-----|-----------|-------------|
| `up` | `--host`, `--port`, `--proxy-port` | Start Docker stack |
| `down` | `--host` | Stop + remove |
| `status` | `--host` | Compose `ps` + supervisor |
| `update` | `--host` | In-place refresh |
| `logs` | `--host`, `--follow`, `--service` | Tail container logs |
| `config` | `--host` | Read-only summary |

#### `ccs config <sub>` (4 subs)
| Sub | Sub-subcommands | Description |
|-----|-----------------|-------------|
| `config auth` | `setup`, `show` (`status`), `disable` | Dashboard auth |
| `config channels` | `--set`, `--clear`, `--enable`, `--disable`, `--set-token`, `--clear-token` | Notification channels |
| `config image-analysis` | `--enable`/`--disable`, `--timeout`, `--set-model`, `--set-fallback`, `--set-profile-backend`, `--clear-profile-backend` | Vision-model routing |
| `config thinking` | `--mode`, `--override`, `--clear-override`, `--tier`, `--provider-override`, `--clear-provider-override` | Thinking-budget defaults |

### A3. Provider Shortcuts (`ccs <provider>`) — 13

| Command | Provider |
|---------|----------|
| `ccs gemini` | Google Gemini |
| `ccs codex` | OpenAI Codex |
| `ccs agy` | Antigravity |
| `ccs qwen` | Qwen Code |
| `ccs iflow` | iFlow |
| `ccs kiro` | Kiro |
| `ccs ghcp` | GitHub Copilot |
| `ccs claude` | Claude |
| `ccs kimi` | Kimi |
| `ccs cursor` | Cursor |
| `ccs gitlab` | GitLab Duo |
| `ccs codebuddy` | CodeBuddy |
| `ccs kilo` | Kilo AI |

All support flags: `--auth`, `--add`, `--paste-callback`, `--accounts`, `--use`, `--config`, `--thinking`, `--effort`, `--1m`, `--no-1m`, `--browser`, `--no-browser`, `--logout`, `--headless`, `--port-forward`

### A4. Runtime Binary Aliases
`ccs-droid` / `ccsd` (Droid runtime) · `ccs-codex` / `ccsx` / `ccsxp` (Codex runtime)

### A5. Help Topics
`profiles` · `providers` · `kiro` · `targets` · `browser` · `completion`

---

## Part B — ClaudeKit CLI (`ck`)

Package: `claudekit-cli` | Source: `reference/claudekit-cli/src/cli/command-registry.ts`

### B1. Binary Commands (19)

| # | Command | Sub-actions / Key Flags | Description |
|---|---------|------------------------|-------------|
| 1 | `ck new` | `--kit`, `--release`, `--force`, `--exclude`, `--opencode`, `--gemini`, `--install-skills`, `--with-sudo`, `--prefix`, `--beta`, `--refresh`, `-y`, `--use-git`, `--archive`, `--kit-path` | Bootstrap new ClaudeKit project |
| 2 | `ck init` | `--kit`, `--release`, `--exclude`, `--only`, `--global`, `--fresh`, `--force`, `--install-skills`, `--with-sudo`, `--prefix`, `--beta`, `--refresh`, `--dry-run`, `--force-overwrite`, `--force-overwrite-settings`, `--skip-setup`, `-y`, `--sync`, `--use-git`, `--archive`, `--kit-path` | Initialize or update ClaudeKit project |
| 3 | `ck update` | `--release`, `--check`, `-y`, `--dev`, `--beta`, `--registry` | Update ClaudeKit CLI itself |
| 4 | `ck versions` | `--kit`, `--limit`, `--all` | List available ClaudeKit versions |
| 5 | `ck doctor` | `--report`, `--fix`, `--check-only`, `--json`, `--full` | Comprehensive health check |
| 6 | `ck uninstall` | `-y`, `--local`, `--global`, `--all`, `--kit`, `--dry-run`, `--force-overwrite` | Remove ClaudeKit installations |
| 7 | `ck backups` | `--list`, `--restore`, `--prune`, `--dry-run` *(see `registerBackupsCommand`)* | Manage backups |
| 8 | `ck setup` | `--global`, `--skip-packages`, `--dir` | Configure API keys + optional packages |
| 9 | `ck config` | `[action] [key] [value]`, `-g`, `-l`, `--json`, `--port`, `--host`, `--no-open`, `--dev` | Manage configuration + dashboard |
| 10 | `ck projects` | *(subcommands via `registerProjectsCommand`)* | Project management |
| 11 | `ck skills` | `-n`, `-a`, `-g`, `-l`, `--installed`, `--all`, `-u`, `--force`, `--sync`, `-y`, `--catalog`, `--regenerate`, `--search`, `--json`, `--limit`, `--validate` | Install skills to other coding agents |
| 12 | `ck agents` | `-n`, `-a`, `-g`, `-l`, `--installed`, `--all`, `-u`, `--force`, `--sync`, `-y` | Install agents to other providers |
| 13 | `ck commands` | `-n`, `-a`, `-g`, `-l`, `--installed`, `--all`, `-u`, `--force`, `--sync`, `-y` | Install commands to other providers |
| 14 | `ck plan` | `[action] [target]`, `--json`, `--strict`, `--port`, `--no-open`, `--dev`, `-g`, `--title`, `--phases`, `--dir`, `--priority`, `--issue`, `--after`, `--start`, `--source`, `--session-id` | Plan management: parse, validate, status, kanban, create |
| 15 | `ck api` | `[action] [service] [path]`, `--method`, `--body`, `--query`, `--key`, `--force`, `--json`, `--locale`, `--max-results`, `--second`, `--order`, `--format`, `--max-length`, `--instructions`, `--template`, `--type`, `--country` | Interact with ClaudeKit API and proxy services |
| 16 | `ck migrate` | `-a`, `-g`, `--all`, `-y`, `--only-*`, `--skip-*`, `--config`, `--rules`, `--hooks`, `--source`, `--dry-run`, `-f`, `--install`, `--reconcile`, `--reinstall-empty-dirs`, `--respect-deletions` | Migrate agents, commands, skills, config, rules, hooks to other providers |
| 17 | `ck content` | `[action] [id]` — `start`, `stop`, `status`, `logs`, `setup`, `queue`, `approve`, `reject`, `--dry-run`, `--verbose`, `--force`, `--tail`, `--reason` | Multi-channel content automation |
| 18 | `ck watch` | `--interval`, `--dry-run`, `--force`, `--verbose` | Watch GitHub issues and auto-respond |
| 19 | `ck easter-egg` | — | Easter egg (Code Hunt 2025) |

---

## Part C — Change Tracking

### Baseline Commit Markers

| CLI | Repo | Last Audited |
|-----|------|-------------|
| CCS CLI | `kaitranntt/ccs` | *(see `reference/.last-sync-ccs`)* |
| ClaudeKit CLI | `mrgoonie/claudekit-cli` | `f6ef005f` |

### Source Files

| CLI | Extract From |
|-----|-------------|
| CCS CLI | `reference/ccs/src/commands/command-catalog.ts` |
| ClaudeKit CLI | `reference/claudekit-cli/src/cli/command-registry.ts` |

### Skills That Maintain This Catalog

| Skill | Purpose |
|-------|---------|
| `vk:cli-commands-tracker` | Consolidated command enumeration + change detection |
| `vk:audit-ccs` | Deep CCS audit (capabilities, schemas, architecture) |
| `vk:audit-ck-cli` | ClaudeKit CLI-specific audit (init, hooks, config) |

---

## Summary

| CLI | Root Commands | Total Subcommands | Provider Shortcuts | Aliases |
|-----|--------------|-------------------|-------------------|---------|
| CCS CLI | 20 (+4 hidden) | ~60+ | 13 | 5 (runtime + hidden) |
| ClaudeKit CLI | 19 | ~10+ | — | — |

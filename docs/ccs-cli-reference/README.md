# CCS CLI Reference

Source: [`reference/ccs/`](../../reference/ccs/) — package `@kaitranntt/ccs`. This reference documents every shipped `ccs` command surface with synopsis, behavior, flow, flags, and step-by-step user guides. Generated 2026-05-08 from a 9-scout parallel audit.

## What CCS Is

A multi-provider profile/runtime manager for Claude Code, Factory Droid, and Codex CLI. It manages four orthogonal things:

1. **API profiles** (`<name>.settings.json`) — direct API-key based providers (GLM, Kimi, OpenRouter, custom).
2. **CLIProxy variants** — alias `provider × model × account × target`; backed by a local proxy binary that adapts upstream CLI-AI providers (Gemini, Codex, Antigravity, Copilot, Qwen, etc.) into Anthropic-compatible HTTP.
3. **Account profiles** (`profiles.json` / unified `accounts:`) — isolated `CLAUDE_CONFIG_DIR` instances; each has its own login.
4. **Compatible runtimes** — Cursor (legacy), GitHub Copilot, browser tooling, OpenAI-compatible local proxy.

## Profile Mechanism Priority

Per `reference/ccs/CLAUDE.md` runtime resolution:

| Tier | What | Where |
|---|---|---|
| 1 | Hardcoded CLIProxy profiles | `gemini`, `codex`, `agy`, `qwen`, `copilot`, `kiro`, ghcp |
| 2 | CLIProxy variants | `cliproxy.variants` in unified config |
| 3 | Settings-based API profiles | `<name>.settings.json` + `config.profiles[name]` |
| 4 | Account profiles | `profiles.json` / `accounts:` + per-instance `CLAUDE_CONFIG_DIR` |

## Storage Layout

All paths resolve via `getCcsDir()` (respects `CCS_HOME` env for test isolation). Default: `~/.ccs/`.

```
~/.ccs/
├── config.yaml              # unified config (preferred)
├── config.json              # legacy v1 root (migrate via `ccs migrate`)
├── profiles.json            # legacy account registry
├── <name>.settings.json     # per-API-profile env (one file per profile)
├── instances/<name>/        # per-account isolated CLAUDE_CONFIG_DIR
├── shared/{commands,skills,agents}/  # shared symlink targets
├── cliproxy/
│   ├── sessions.json        # per-port lifecycle lock
│   └── logs/                # CLIProxy logs
├── backups/                 # auth profile snapshots
├── logs/                    # CCS native logs
└── .claude/                 # internal copy of npm package payload
```

`ccs persist` is the **only** path that mutates `~/.claude/settings.json` automatically. All other commands are non-invasive by default.

## Command Groups

| Group | Doc | Coverage |
|---|---|---|
| Basic / lifecycle | [basic-commands.md](basic-commands.md) | `setup`, `doctor`, `version`, `help`, `--install`, `--uninstall`, `migrate` |
| Auth profiles | [auth.md](auth.md) | `ccs auth` × 7 subs (create/backup/list/show/remove/default/reset-default) |
| API profiles | [api.md](api.md) | `ccs api` × 7 subs (create/list/discover/copy/export/import/remove) + 14 presets |
| CLIProxy core | [cliproxy-core.md](cliproxy-core.md) | variants + lifecycle + binary install + OAuth (14 subs) |
| CLIProxy quota / routing / catalog | [cliproxy-quota-routing.md](cliproxy-quota-routing.md) | `quota`, `doctor`, `default`, `pause`, `resume`, `routing`, `catalog` |
| Compatible runtimes | [runtime.md](runtime.md) | `cursor`, `copilot`, `browser`, `proxy` |
| Docker stack | [docker.md](docker.md) | integrated single-container stack (6 subs) |
| Operations | [operations.md](operations.md) | `env`, `persist`, `sync`, `update`, `cleanup`, `tokens` |
| Configuration | [config.md](config.md) | dashboard + `config auth/channels/image-analysis/thinking` |

## Routing

Single source of truth: `src/commands/command-catalog.ts` (`ROOT_COMMAND_CATALOG`).
Dispatch: `src/commands/root-command-router.ts` resolves `args[0]` (or alias) → dynamic-import handler.
Every handler calls `initUI()` first (ASCII-only output, NO emojis per project rule).

## Common Patterns

- **Help**: every command supports `--help` / `-h`. `ccs help <topic>` for grouped discovery.
- **Idempotence**: most commands are idempotent (sync, persist with same input, cleanup of empty dirs).
- **Confirmation**: destructive ops default to NO; opt-in with `--yes` / `-y`.
- **Atomic writes**: `persist` and config writes use `proper-lockfile` + tmp rename + `O_NOFOLLOW`.
- **Process exits**: many handlers `process.exit` directly (doctor, version, install/uninstall, proxy, tokens, copilot) — short-circuits anything after.

## Unresolved Questions

- `cli-argument-parser` (`bootstrapAndParseEarlyCli`) flag pre-consumption order vs router resolution.
- Exact on-disk path of CLIProxy OAuth tokens (`auth-token-manager.ts` not deeply read).
- Whether `ccs cliproxy --target <t>` standalone (without `create`) has any effect — appears advertised but only consumed by variant subcommand.

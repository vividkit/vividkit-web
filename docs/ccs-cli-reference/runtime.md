# Compatible Runtimes

Source: `reference/ccs/src/commands/`. Four runtime surfaces: `cursor` (legacy), `copilot`, `browser`, `proxy`. Each manages a daemon or a Chrome lane; all use `mutateConfig()` for unified config persistence.

---

## `ccs cursor` — Cursor IDE Bridge (legacy)

```
ccs cursor                          # help / deprecation notice
ccs legacy cursor <subcommand>      # active legacy path
ccs cursor --auth | --accounts | --config   # CLIProxy-backed (preferred)
```

The `ccs cursor` namespace was reassigned to the **CLIProxy Cursor provider**. The reverse-engineered local bridge moved to `ccs legacy cursor` (every subcommand prints a deprecation notice).

### What

Imports a Cursor IDE auth token (access token + machine ID) from Cursor's SQLite state DB, runs a local daemon translating between OpenAI/Anthropic schemas and Cursor's protobuf-over-HTTP wire protocol, exposes Anthropic routes on `127.0.0.1:<port>`.

### Subcommands (`ccs legacy cursor`)

| Subcommand | Action |
|---|---|
| `auth` | Auto-detect SQLite tokens; `--manual --token <t> --machine-id <id>` for manual |
| `status` | Render integration / auth / daemon table + URLs |
| `probe` | Live authenticated round-trip |
| `models` | List Cursor models + default |
| `start` | Spawn daemon (gated on enabled + auth not expired) |
| `stop` | Stop daemon |
| `enable` | `cursor.enabled = true` |
| `disable` | `cursor.enabled = false` |
| `help`/`--help`/`-h` | Help |

### Auth Flag Details

| Flag | Notes |
|---|---|
| `--manual` | Switches off auto-detect |
| `--token <t>` / `--access-token <t>` | Cursor IDE access token |
| `--machine-id <id>` / `--machineId <id>` | Cursor machine identifier |

Auto-detect failures: `db_not_found` (lists checked paths), `sqlite_unavailable` (suggests `sqlite3`), `db_query_failed` (close Cursor IDE).

### CLIProxy Bridge

Help in `cursor-command-display.ts` redirects users to:
- `ccs cursor --auth` (CLIProxy OAuth) — preferred.
- `ccs config -> CLIProxy -> Cursor` (dashboard).

Both paths can coexist; status labels them distinctly:
- `Supported auth: ccs cursor --auth`
- `Legacy auth: ccs legacy cursor auth`

### Step-by-step (legacy)

1. `ccs legacy cursor enable`.
2. `ccs legacy cursor auth` (SQLite auto-detect or `--manual`).
3. `ccs legacy cursor start`.
4. `ccs legacy cursor probe`.
5. `ccs legacy cursor status`.

### Internals

- Routes: `http://127.0.0.1:<port>/v1/chat/completions`, `/v1/messages`, `/v1/models`.
- Settings: `<ccs-dir>/cursor.settings.json`.
- Daemon enforces: enabled + authenticated + not-expired + ghost_mode honored.

---

## `ccs copilot` — GitHub Copilot Bridge

```
ccs copilot <auth|status|models|usage|start|stop|enable|disable> [--help]
ccs copilot --auth | --status | --models | --usage | --start | --stop | --enable | --disable
```

Subcommand and `--<sub>` flag are equivalent (`COPILOT_FLAG_ALIASES` in `src/copilot/constants.ts`).

### What

Wraps the third-party `copilot-api` daemon: GitHub OAuth device flow + lifecycle + quota/usage + model listing.

### Subcommands

| Sub | Flag alias | Action |
|---|---|---|
| `auth` | `--auth` | GitHub OAuth device-code flow via `startAuthFlow()` |
| `status` | `--status` | Integration / auth / daemon + config table |
| `models` | `--models` | Models + live limits (prompt / context / output tokens) |
| `usage` | `--usage` | Premium / chat / completions quota with reset date |
| `start` | `--start` | Spawn `copilot-api` on configured port |
| `stop` | `--stop` | Kill daemon |
| `enable` | `--enable` | `copilot.enabled = true` |
| `disable` | `--disable` | `copilot.enabled = false` |
| `help`/`--help`/`-h` | — | Help |

`COPILOT_SUBCOMMANDS`: `['auth','status','models','usage','start','stop','enable','disable']`.

### Auth Mechanics

- Pre-flight: `isCopilotApiInstalled()` — bails with `Install with: npm install -g copilot-api` when missing.
- `startAuthFlow()` runs GitHub device-code flow against Copilot's API.
- `normalizeCopilotConfigWithWarnings()` returns warnings for invalid model/account values.

### Status Fields

```
Integration / Authentication / Daemon  (each [OK] or [X])
Configuration:
  Port:          <port>
  Model:         <model id>
  Account Type:  <individual|business|enterprise>
  Auto-start:    Yes/No
  Rate Limit:    <n>s
```

### Usage Fields

| Field | Meaning |
|---|---|
| `Plan` | Copilot plan tier |
| `Quota Reset` | Local-time reset date |
| `Premium Interactions` / `Chat` / `Completions` | `used/entitlement (X% used, Y% remaining)` or `Unlimited` |

Compact token formatter: `1.5K`, `2M`.

### Step-by-step

```bash
npm install -g copilot-api          # external prerequisite
ccs copilot auth                    # GitHub OAuth device flow
ccs copilot enable
ccs copilot start
ccs copilot usage                   # verify quota visible
```

### Internals

- Daemon is **external** (`copilot-api` package); CCS only orchestrates lifecycle.
- Models endpoint: `http://127.0.0.1:<port>/...`. Daemon down → empty list + restart nudge.
- `usage` requires running daemon; fails fast with `Start daemon first: ccs copilot start`.

---

## `ccs browser` — Browser Tooling Manager

```
ccs browser <setup|status|doctor|policy|enable|disable> [--help|-h]
ccs browser policy [--all|--claude|--codex] <auto|manual>
ccs browser enable  <claude|codex|all>
ccs browser disable <claude|codex|all>
```

Per-launch overrides for other `ccs <provider>` commands: `--browser` / `--no-browser`.

### What

Manages two independent **browser lanes**:

1. **Claude Browser Attach** — reuses local Chrome via remote-debugging port for Claude-target launches (binds user-data-dir + DevTools port).
2. **Codex Browser Tools** — injects managed Playwright MCP overrides into Codex-target launches via `--config` overrides.

New installs without saved browser settings keep both lanes **off + manual** by default. Enabling a lane does not auto-expose tooling unless policy is `auto`.

### Subcommands

| Sub | Action | Side effects |
|---|---|---|
| `setup` | Configure Claude Attach, print platform-specific Chrome launch cmd, ensure user-data dir, register managed MCP | Mutates browser config; rejects `--no-launch` |
| `status` | Both lanes state + URLs + DevTools endpoint + Codex binary detection | read-only |
| `doctor` | Status + health summary (`ready`/`partial`/`action required`); exit 1 if action; rejects `--fix` | read-only |
| `policy` | Show or update launch policy (`auto`/`manual`) per lane | mutates config when args supplied |
| `enable <lane>` | Lane(s) on | mutates `enabled` |
| `disable <lane>` | Lane(s) off | mutates `enabled` |
| `help`/`--help`/`-h` | Help | — |

`BrowserLane = 'claude' | 'codex' | 'all'`. `BrowserToolPolicy = 'auto' | 'manual'`.

### Policy Flag Arity

| Flag | Value |
|---|---|
| `--all` | `auto` \| `manual` |
| `--claude` | `auto` \| `manual` |
| `--codex` | `auto` \| `manual` |

Args parsed as `[flag] [value]`; missing/unknown → error + `exitCode = 1`.

### Status Payload (Claude Lane)

| Field | Source |
|---|---|
| `state` | enabled+ready / enabled+misconfigured / disabled |
| `policy` | auto/manual |
| `source` | defaults / file / env override |
| `User data dir` | resolved Chrome profile path |
| `DevTools port` | remote-debugging port |
| `Managed MCP` / `Managed path` | MCP server name + binary |
| `DevTools endpoint` | `CCS_BROWSER_DEVTOOLS_HTTP_URL` if set |
| `Launch command` | platform-specific Chrome launch with `--user-data-dir` + `--remote-debugging-port` |

### Status Payload (Codex Lane)

`serverName`, `supportsConfigOverrides`, `binaryPath`, `version` (when detected).

### Step-by-step — Claude Attach

```bash
ccs browser setup                              # config + print Chrome launch cmd
# Run printed launch command in a separate shell to start Chrome with debug port
ccs browser enable claude
ccs browser policy --claude auto               # optional auto-expose
ccs browser status                             # confirm state=ready
ccs glm "inspect the page"                     # tooling auto-attached
ccs glm --no-browser "..."                     # opt out per-run
```

### Step-by-step — Codex Tools

```bash
ccs browser enable codex
ccs browser policy --codex auto
ccs browser status                             # check supportsConfigOverrides=yes
ccs codex --browser "navigate to ..."
```

### Internals

- `--no-launch` and `doctor --fix` are **explicitly rejected**: setup is config-only, doctor is read-only.
- `summarizeBrowserHealth()`: Claude misconfig → `action required` (exit 1); Codex disabled but expected → `partial` (exit 0).
- All writes via `mutateConfig()` — read current → merge selected lane.

---

## `ccs proxy` — OpenAI-Compatible Local Proxy

```
ccs proxy <start|stop|status|activate> [profile]
          [--port <n>] [--host <addr>] [--insecure]
          [--shell <name>] [--fish] [--help|-h]
```

### What

Local Anthropic-compatible HTTP server that translates Claude Code's Anthropic-shaped requests into OpenAI-compatible upstream calls (HuggingFace, OpenRouter, Together, etc.). Lets users keep Claude Code as client while routing to any OpenAI-compatible provider via a CCS profile.

`ccs api create --preset hf` registers the profile; `ccs hf` auto-launches the proxy via the profile mechanism. Manual control under `ccs proxy`.

### Subcommands

| Sub | Required arg | Optional flags | Action |
|---|---|---|---|
| `start <profile>` | profile | `--port`, `--host`, `--insecure` | Resolve profile from settings, spawn daemon, return port |
| `stop [profile]` | optional | — | Stop one or all proxies |
| `status [profile]` | optional | — | Single status or list of all running daemons |
| `activate [profile]` | optional (required if multiple running) | `--shell <name>`, `--fish` | Print shell `export` lines |
| `help`/`--help`/`-h` | — | — | Help |

### Flags

| Flag | Applies to | Notes |
|---|---|---|
| `--port <n>` | start | Pin local port; integer 1-65535 |
| `--host <addr>` | start | Default `127.0.0.1`; affects `NO_PROXY` |
| `--insecure` | start | Disables upstream TLS verification |
| `--shell <name>` | activate | `auto`\|`bash`\|`zsh`\|`fish`\|`powershell` |
| `--fish` | activate | Shorthand for `--shell fish` (checked **before** `--shell`) |

### Activation Eval Pattern

`ccs proxy activate` writes shell `export` lines to stdout — designed for `eval` / `source`:

```bash
# Bash / Zsh
eval "$(ccs proxy activate)"

# Fish
ccs proxy activate --fish | source

# PowerShell
ccs proxy activate --shell powershell | Invoke-Expression
```

Shell auto-detected via `detectShell()`. Multiple proxies running + bare `activate` → error: `Multiple proxies are running. Specify a profile: ccs proxy activate <profile>`.

### Exported Env Vars (`buildOpenAICompatProxyEnv`)

| Variable | Value |
|---|---|
| `ANTHROPIC_BASE_URL` | `http://<host>:<port>` |
| `ANTHROPIC_AUTH_TOKEN` | runtime token issued by daemon |
| `DISABLE_TELEMETRY` | `1` |
| `DISABLE_COST_WARNINGS` | `1` |
| `API_TIMEOUT_MS` | `600000` |
| `NO_PROXY` | `127.0.0.1,localhost` (extended when host != `127.0.0.1`) |
| `ANTHROPIC_MODEL` | profile.model |
| `ANTHROPIC_DEFAULT_OPUS_MODEL` | profile.opusModel |
| `ANTHROPIC_DEFAULT_SONNET_MODEL` | profile.sonnetModel |
| `ANTHROPIC_DEFAULT_HAIKU_MODEL` + `ANTHROPIC_SMALL_FAST_MODEL` | profile.haikuModel |
| `CLAUDE_CONFIG_DIR` | optional override |

### Status Output

| Field | When |
|---|---|
| Running banner | always |
| `Host` / `Local URL` | host+port known |
| `Profile` | daemon resolved a profile |
| `Base URL` | upstream OpenAI-compatible URL |
| `Model` | active model |
| `PID` | running daemon PID |

Bare `status` (no profile) lists all running proxies via `listOpenAICompatProxyStatuses()`.

### Step-by-step

```bash
ccs api create --preset hf              # profile registered
ccs proxy start hf                      # daemon up; prints port
ccs proxy activate --fish | source      # shell env populated
claude "task"                           # Claude Code routes via proxy
ccs proxy stop hf
```

### Port Resolution

| Constant | Value | Source |
|---|---|---|
| `OPENAI_COMPAT_PROXY_LEGACY_DEFAULT_PORT` | `3456` | `proxy-daemon-paths.ts` |
| `OPENAI_COMPAT_PROXY_DEFAULT_PORT` | adaptive | derived from profile name |

Order: explicit `--port` → profile-pinned port → shared default (legacy `3456` triggers adaptive remapping per profile to avoid collisions) → adaptive per-profile slot.

### Internals

- Profile resolution: `resolveOpenAICompatProfileConfig(profileName, settingsPath, settings.env)` — fails if profile is not OpenAI-compatible.
- Daemon owns issued `authToken` (random per-run); surfaced via `getOpenAICompatProxyStatus()` so `activate` re-emits it.
- `--insecure` for self-hosted endpoints with bad certs.

---

## Cross-Command Summary

| Command | Daemon owner | Default loopback | Auth model |
|---|---|---|---|
| `cursor` (legacy) | local Node daemon | configurable port | Cursor SQLite token + machine ID |
| `copilot` | external `copilot-api` npm pkg | configured port | GitHub OAuth device flow |
| `browser` | n/a (config + Chrome) | DevTools port | Chrome session reuse |
| `proxy` | local Node daemon | adaptive (legacy `3456`) | per-run random token |

All four use `mutateConfig()` / unified config; all four expose enable/disable parity (`browser` is per-lane, not all-or-nothing).

## Unresolved Questions

1. CLIProxy `--accounts` / `--config` flags for `ccs cursor` referenced in legacy help — concrete handler likely under `src/commands/config-channels-command.ts` or CLIProxy router (out of scope here).
2. Cursor `port` default in `DEFAULT_CURSOR_CONFIG` (`unified-config-types.ts`); not surfaced in scoped files.
3. Copilot `port` default in `DEFAULT_COPILOT_CONFIG` (not in `copilot/constants.ts`).
4. Exact slot algorithm in `resolveOpenAICompatProxyAdaptivePort()` for legacy 3456 collision avoidance.

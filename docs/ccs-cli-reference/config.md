# `ccs config` — Dashboard + Subcommands

Source: `reference/ccs/src/commands/config-*` + `reference/ccs/src/web-server/`. Covers dashboard launch + 4 subcommands (`auth`, `channels`, `image-analysis`, `thinking`).

All subcommands persist to `~/.ccs/config.yaml` via `updateConfig` / `mutateConfig`. All show a status panel even with no mutation. ASCII-only output ([OK]/[i]/[!]/[x]), respects `NO_COLOR`.

---

## `ccs config` — Dashboard Launch

```
ccs config [--port PORT] [--host HOST] [--dev] [--help]
ccs config <subcommand> [...]
```

**What** — Launches a local Express + WebSocket dashboard for managing providers, profiles, channels, image-analysis, thinking, analytics, IDE extensions. Auto-opens browser. Routes to subcommand if first arg matches `auth|channels|image-analysis|thinking`.

**How**
1. Args inspected → resolves subcommand via `resolveNamedCommand` → dispatch.
2. Else `parseConfigCommandArgs`.
3. `ensureCliproxyService(resolveLifecyclePort(), verbose)` — boots CLIProxy daemon (required for Control Panel/Stats; dashboard still loads if CLIProxy fails, with warning).
4. Port: explicit `--port` or `getPort({port: [3000, 3001, 3002, 8000, 8080]})` (probe list).
5. `startServer({port, host?, dev})` — `src/web-server/index.ts`:
   - Express + `http.createServer` + `WebSocketServer({path: '/ws', maxPayload: 1MB, perMessageDeflate: false})`.
   - Middleware: `express.json` (with malformed-JSON 400) → `requestLoggingMiddleware` → `createSessionMiddleware` → `authMiddleware`.
   - Routes: `/api/cliproxy-local` (reverse proxy to local CLIProxy), `/api`, `/api/shared`, `/api/overview`, `/api/usage`.
   - **Dev**: Vite middleware mode, HMR reuses dashboard HTTP server (no separate Vite port).
   - **Prod**: `express.static(dist/ui)` + SPA fallback to `index.html`.
6. `setupGracefulShutdown(server, wss, cleanup)` — SIGINT/SIGTERM cleanup.
7. `resolveDashboardUrls(bindHost, port)` (config-dashboard-host.ts):
   - Loopback (`localhost`/`127.0.0.1`/`::1`) → single `browserUrl`.
   - Wildcard (`0.0.0.0`/`::`) → `localhost` browser URL + non-internal IPv4 from `os.networkInterfaces()`.
   - Specific host → bracketize IPv6, build `http://host:port`.
8. Non-loopback bind → warn user + suggest `ccs config auth setup` if dashboard auth disabled.
9. `open(url, {wait: false})` — auto-launch browser; falls back to text URL.
10. `console.log('Press Ctrl+C to stop')`.

**Flags**

| Flag | Alias | Type | Default | Notes |
|---|---|---|---|---|
| `--port` | `-p` | int (1-65535) | auto-probe `[3000,3001,3002,8000,8080]` | Rejects `<=0 \|\| >=65536` |
| `--host` | `-H` | string | system default | Strips `[...]` for IPv6 |
| `--dev` | — | bool | false | Vite HMR mode |
| `--help` | `-h` | bool | — | Help |

**Step-by-step**
1. `ccs config` → CLIProxy ensured → dashboard picks free port → opens `http://localhost:<port>`.
2. Browser shows SPA. No auth by default (warn if `--host` exposes to LAN).
3. To protect: `Ctrl+C` → `ccs config auth setup` → re-run `ccs config`.
4. Use Settings tabs (Channels / Image Analysis / Thinking / IDE Extension) — same surface as CLI subcommands.

**Internals**
- Port discovery via `get-port` package, deterministic probe list.
- Dev mode: Vite is NOT a separate process; runs as Express middleware on the same port. `hmr.server = server` reuses HTTP server for WS upgrade. No CORS proxy.
- Auth on localhost is optional; non-loopback bind without auth → warning, server still starts.
- WebSocket: single `/ws`, 1MB payload cap, no compression (DoS hardening).

---

## `ccs config auth` — Dashboard HTTP Basic Auth

Bcrypt password hash + session cookie. NOT TLS, NOT OAuth.

### `setup`

```
ccs config auth setup
```

**What** — Interactive wizard: username + password → bcrypt(rounds=10) → write `dashboard_auth` to `~/.ccs/config.yaml`.

**Validation**
- Username: starts with letter, `[a-zA-Z0-9_-]+`, ≥3 chars.
- Password: ≥8 chars, requires confirm match.

**Internals** — `InteractivePrompt.input/password/confirm` → `bcrypt.hash(pw, 10)` → `mutateConfig(c => c.dashboard_auth = {enabled:true, username, password_hash, session_timeout_hours:24})`.

**Env warnings** — If `CCS_DASHBOARD_AUTH_ENABLED` / `CCS_DASHBOARD_USERNAME` / `CCS_DASHBOARD_PASSWORD_HASH` set, warns these will override config.

### `show` (alias `status`)

```
ccs config auth show
```

**What** — Prints state: enabled? configured? username, session timeout, env-var overrides.

**Internals** — `getDashboardAuthConfig()` + `process.env.*` detection.

### `disable`

```
ccs config auth disable
```

**What** — Confirmation prompt → `dashboard_auth.enabled = false`. Preserves credentials for later re-enable.

**Notes** — Early-out if already disabled. Warns about LAN exposure. Default `confirm` = `false` (safe). If `CCS_DASHBOARD_AUTH_ENABLED` set, notes config flip won't matter.

### Config & Env Vars (auth)

- File: `~/.ccs/config.yaml` → `dashboard_auth: {enabled, username, password_hash, session_timeout_hours}`.
- Env overrides (priority): `CCS_DASHBOARD_AUTH_ENABLED`, `CCS_DASHBOARD_USERNAME`, `CCS_DASHBOARD_PASSWORD_HASH`.
- Routing: `config-auth/index.ts` uses `dispatchNamedCommand` over `CONFIG_AUTH_ROUTES`. Each route calls `ensureNoConfigAuthArgs` (zero positional args).
- Docs URL: `https://ccs.kaitran.ca/features/dashboard-auth`.

---

## `ccs config channels` — Official Channels (Telegram/Discord/iMessage)

```
ccs config channels [--set <csv|all>] [--clear]
                    [--enable | --disable]            (legacy: Discord on/off)
                    [--unattended | --no-unattended]
                    [--set-token <channel>=<token>]
                    [--clear-token [<channel>]]
                    [--help|-h]
```

**What** — Selects which official channels CCS auto-enables at runtime when launching a profile. Stores Telegram/Discord bot tokens in Claude channel-state file. Adds `--dangerously-skip-permissions` if `--unattended`.

**Flags**

| Flag | Behavior |
|---|---|
| `--set <csv\|all>` | Replace selection: `telegram,discord,imessage` or `all` (every supported) |
| `--clear` | Clear selection (`selected=[]`) |
| `--enable` | Legacy: add `discord` |
| `--disable` | Legacy: remove `discord` |
| `--unattended` / `--no-unattended` | Toggle `unattended` flag → `--dangerously-skip-permissions` runtime arg |
| `--set-token <ch>=<tok>` | Store bot token (e.g. `telegram=abc:xyz`). Bare value → Discord token |
| `--clear-token [<ch>]` | No arg → clear all; with arg → clear one |

**How**
1. Parse via `extractOption` + `hasAnyFlag`. `parseTokenAssignment` splits at first `=`.
2. Build `nextConfig` from `config.channels ?? DEFAULT_OFFICIAL_CHANNELS_CONFIG`.
3. `resolveNextSelection` → `expandOfficialChannelSelection` resolves `'all'`.
4. Mutation → `updateConfig({channels: nextConfig})`.
5. Token writes: `setConfiguredOfficialChannelToken(channelId, token)` → persists to Claude channel state.
6. Always renders `showStatus()`: state (`ready|limited|disabled`), launch preview (what `ccs adds`), per-channel rows (selected, token source, env-key status), bun installed check, Claude version eligibility, auth state, supported profiles, manual setup commands.

**Step-by-step**
1. `ccs config channels` → see status.
2. `ccs config channels --set telegram,discord` → select.
3. `ccs config channels --set-token telegram=123:abc` → save token.
4. `ccs` (run a profile) → auto-injects channel runtime args.

**Internals**
- Token sources: `saved_env` (channel-state file), `process_env` (current shell), `none`.
- macOS-specific iMessage caveats via `getOfficialChannelMacOSHelp()`.
- Compatibility computed at runtime from `official-channels-runtime`.

---

## `ccs config image-analysis` — Vision-Model Image/PDF Routing

```
ccs config image-analysis [--enable | --disable]
                          [--timeout <10-600>]
                          [--set-model <provider> <model>]
                          [--set-fallback <backend>]
                          [--set-profile-backend <profile> <backend>]
                          [--clear-profile-backend <profile>]
                          [--help|-h]
```

**What** — Pre-processing hook: when Claude's `Read` targets `.jpg/.jpeg/.png/.gif/.webp/.heic/.bmp/.tiff/.pdf`, CCS hook intercepts → sends to CLIProxy vision API of selected provider → returns text. Claude sees the description, not raw bytes. Reduces token spend; enables vision on non-vision profiles.

**Flags**

| Flag | Validation | Default |
|---|---|---|
| `--enable`/`--disable` | mutually exclusive | — |
| `--timeout <s>` | 10..600 | (config) |
| `--set-model <p> <m>` | provider via `mapExternalProviderName`; model non-empty | `agy → gemini-3-1-flash-preview`, `gemini → gemini-3-flash-preview` |
| `--set-fallback <backend>` | must exist in `provider_models` | `none` |
| `--set-profile-backend <p> <b>` | profile non-empty, backend in `provider_models` | — |
| `--clear-profile-backend <p>` | — | — |

**How**
1. `parseArgs` reads positional pairs via `args.indexOf` (multi-value).
2. Loads `~/.ccs/config.yaml` `image_analysis` section (default from `DEFAULT_IMAGE_ANALYSIS_CONFIG`).
3. Mutations stage in `imageConfig` then `updateConfig({image_analysis: imageConfig})`.
4. Provider IDs from `CLIPROXY_PROVIDER_IDS` + aliases from `PROVIDER_CAPABILITIES[*].aliases`. `mapExternalProviderName` canonicalises (e.g. `gem → gemini`).
5. `normalizeImageAnalysisBackendId` resolves backend strings.
6. `showStatus()`: enabled/disabled, timeout, provider→model table, fallback, profile→backend mappings, config file path.

**Step-by-step**
1. `ccs config image-analysis` → status.
2. `ccs config image-analysis --enable`.
3. `ccs config image-analysis --set-model agy gemini-2.5-pro`.
4. `ccs config image-analysis --set-profile-backend kiro gemini`.
5. Read an image in Claude → CCS hook intercepts → vision result returned.

**Notes**
- Hook lives in CCS hooks system (`utils/hooks.ts` / `normalizeImageAnalysisBackendId`).
- `--enable` + `--disable` together → error.

---

## `ccs config thinking` — Extended Thinking / Reasoning Effort

```
ccs config thinking [--mode auto|off|manual]
                    [--override <level>]
                    [--clear-override]
                    [--tier <opus|sonnet|haiku> <level>]
                    [--provider-override <provider> <tier> <level>]
                    [--clear-provider-override <provider> [<tier>]]
                    [--help|-h]
```

**What** — Configures three layers of thinking-budget defaults:
1. **Mode** — `auto` (CCS picks per request), `off` (disabled), `manual` (use override).
2. **Tier defaults** — per Claude tier (`opus`/`sonnet`/`haiku`) → level.
3. **Provider overrides** — `provider × tier → level` (e.g. `codex.opus = xhigh`).

**Levels** — `minimal`(512 tok), `low`(1K), `medium`(8K), `high`(24K), `xhigh`(32K), `max`(adaptive ceiling), `auto`, `off`. Numeric budget also accepted for `--override` (`THINKING_BUDGET_MIN..MAX`).

**Flags**

| Flag | Args | Validation |
|---|---|---|
| `--mode` | 1 | `auto\|off\|manual` |
| `--override` | 1 | level OR off-alias OR integer in budget range |
| `--clear-override` | 0 | — |
| `--tier` | 2 | tier ∈ `{opus,sonnet,haiku}`, level ∈ `VALID_THINKING_LEVELS` |
| `--provider-override` | 3 | provider non-empty, tier valid, level valid |
| `--clear-provider-override` | 1-2 | provider required; tier optional → clear single tier or whole provider |

**How**
- Parser (`config-thinking-parser.ts`): manual loop, `requireValue(i)` skips dash-prefixed values; `parseThinkingOverrideInput` chain (off-aliases → enumerated levels → numeric budget); `clearProviderOverride` returns `{nextOverrides, changed}` immutably.
- Command: parse → fail-fast → load config → base on `config.thinking ?? {mode:'auto', tier_defaults:{...}, show_warnings:true}` → apply each option (mode → override → clearOverride → tier → providerOverride → clearProviderOverride) → `updateConfig({thinking: thinkingConfig})` if mutated.
- `showStatus`: mode, override, warnings, tier defaults table, provider-overrides table, config file path, env-var hint if `CCS_THINKING` active.

### Priority

| Layer | Source |
|---|---|
| Per-invocation | `--thinking` / `--effort` provider flags |
| Per-session | `CCS_THINKING` env |
| Persistent | `ccs config thinking` |

**Priority** — flag > env > config.

**Step-by-step**
1. `ccs config thinking` → status.
2. `--mode auto` → CCS auto-picks.
3. `--mode manual --override high` → always high.
4. `--tier opus xhigh` → opus tier default.
5. `--provider-override codex opus xhigh` → codex+opus only.
6. `--clear-provider-override codex` → wipe codex overrides.

---

## Cross-Cutting

- All persist to `~/.ccs/config.yaml` via `updateConfig`/`mutateConfig` from `config-loader-facade`.
- All show a status panel even with no mutation (read-only).
- All respect `getCcsDir()` for test isolation (`CCS_HOME`).
- Help handlers per file (no central `showHelp`).
- Web dashboard provides UI parity for all four subcommands.
- `reference/ccs/ui/` = Vite + React app; `dist/ui/` is the built bundle served by Express in prod.

## Unresolved Questions

- None.

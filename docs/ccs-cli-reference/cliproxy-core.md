# `ccs cliproxy` — Core (Variants + Lifecycle + Install + Auth)

Source: `reference/ccs/src/commands/cliproxy/` + `reference/ccs/src/cliproxy/`. Covers `create`, `edit`, `list`, `remove`, `sync`, `start`, `restart`, `status`, `stop`, `doctor`, `default`, `pause`, `resume`, `install`. Quota / routing / catalog live in [cliproxy-quota-routing.md](cliproxy-quota-routing.md).

## What CLIProxy Is

A local HTTP proxy binary, downloaded/managed by CCS, that adapts upstream CLI-AI providers (Gemini Code Assist, Codex, Antigravity, Qwen, GLM, Copilot, etc.) into an Anthropic-compatible API surface. Claude Code / Factory Droid talks to the proxy; the proxy talks to upstream. CCS handles binary lifecycle + OAuth + variant aliasing.

## Profile Layers

| Layer | What | Example |
|---|---|---|
| Hardcoded built-in profiles | OAuth-based, zero-config, baked into `CLIPROXY_PROFILES` | `gemini`, `codex`, `agy`, `qwen`, `copilot`, `kiro`, `ghcp` |
| CLIProxy variants (user-defined) | Named alias = `provider × model × account × target` | `g3 → {provider: gemini, model: gemini-2.5-pro, account: x@y.com, target: claude}` |
| Composite variants | One name maps Opus/Sonnet/Haiku to *different* providers | `pro → opus=codex, sonnet=gemini, haiku=qwen` |

Persistence: unified → `~/.ccs/config.yaml` `cliproxy.variants`; legacy → JSON shards. Composite variants require unified config.

Backends: `original` (default) vs `plus` (community fork with extra providers). Selected by `--backend` flag or `getStoredConfiguredBackend()`.

---

## `create`

```
ccs cliproxy create [name]
                    [--provider <p>] [--model <m>] [--account <a>]
                    [--target claude|droid]
                    [--composite]
                    [--force] [-y|--yes] [--verbose]
                    [--backend original|plus]
```

**What** — Wizard-driven if flags absent; flag-driven if all present. Validates name → `variantExists()` → optional `triggerOAuth()` if no accounts → catalog-aware model picker → `createVariant()` / `createCompositeVariant()` → writes `cliproxy.variants` to `config.yaml`.

**Flags**

| Flag | Purpose |
|---|---|
| `[name]` | Variant slug (e.g. `g3`, `flash`) |
| `--provider` | Built-in profile name |
| `--model` | Provider-specific model id |
| `--account` | Account ID for that provider |
| `--target` | Default exec target: `claude` (default) or `droid` |
| `--composite` | Multi-tier (Opus/Sonnet/Haiku) mode |
| `--force` | Overwrite existing |
| `--yes`/`-y` | Skip target confirmation |
| `--verbose` | OAuth/routing diagnostics |

**Step-by-step (interactive)**
1. Prompt name.
2. Composite branch → loop tiers (Opus/Sonnet/Haiku) for provider+auth+model + default tier.
3. Single branch → provider → account select / `[+ Add new account]` → OAuth if needed → model picker via `getProviderCatalog()`.
4. Target prompt.
5. Write yaml + print Usage box.

**Internals**
- Account fetch: `getProviderAccounts(provider)`.
- OAuth: `triggerOAuth(provider, {add: true})`.
- Model list augmented with `getCatalogRoutingSnapshot().routing` recommended IDs.
- `ensureManagedModelPrefixes()` repairs short prefixes.
- Composite path validated by `composite-validator.ts`.
- Auto-allocates a port for the variant in unified mode (`result.variant.port`).

---

## `edit`

```
ccs cliproxy edit [name] [--target ...] [--backend ...]
```

**What** — Mutates existing variant; branches by type.

**Single-provider flow**
1. Show current.
2. Confirm change-provider; if changed, model is forced changed.
3. Confirm change-model.
4. Confirm change-target.
5. `updateVariant()` (lazy import from `variant-service`).

**Composite flow**
1. Show tier table.
2. Loop Opus/Sonnet/Haiku — confirm per-tier edit.
3. Confirm change-default-tier.
4. Confirm change-target.
5. `updateCompositeVariant()`.

**Notes** — Cancelled OAuth aborts edit. `updateVariant` cannot mutate composite tier-set directly — remove + recreate or hand-edit yaml.

---

## `list` (alias `ls`)

```
ccs cliproxy list
```

**What** — Two-section listing.

**How**
- **Built-in Profiles**: `getAllAuthStatus()` → authenticated/not + lastAuth.
- **Custom Variants**: `listVariants()` → table `Variant | Provider | Target | Port | Settings`. Composite shown with `provider=composite`.

Footer hints: `ccs <provider> --auth`, `ccs cliproxy create`.

---

## `remove` (aliases `delete`, `rm`)

```
ccs cliproxy remove [name] [-y|--yes]
```

**What** — Interactive picker if name omitted → confirm → `removeVariant(name)` deletes from yaml/legacy json.

**Flags**

| Flag | Purpose |
|---|---|
| `[name]` | Variant to remove |
| `--yes`/`-y` | Skip confirmation |

Shows full variant detail (composite tiers, port, target, settings) before delete prompt.

---

## `sync`

```
ccs cliproxy sync [--dry-run] [--verbose]
```

**What** — Reconciles API profiles → local CLIProxy `cliproxy.yaml` (binary's own config, not CCS unified).

**How** — Delegated to `cliproxy-sync-handler.ts:handleSync()`: read API profiles → produce diff → write or dry-run.

**Flags**

| Flag | Purpose |
|---|---|
| `--dry-run` | Show diff, no write |
| `--verbose` | Detailed sync log |

---

## `start`

```
ccs cliproxy start [--verbose]
```

**What** — Spawn CLIProxy binary as detached background process bound to lifecycle port (default `8317`, configurable via `resolveLifecyclePort()`).

**How** — `startProxy(port, verbose)` → `ensureCliproxyService(port, verbose)` in `service-manager.ts`.
- Already running → returns `{started:true, alreadyRunning:true, configRegenerated?}`.
- Config changed mid-run → warns "restart to apply".
- Otherwise: regenerate `cliproxy.yaml` from CCS unified config → `spawn(binaryPath, proxyArgs, {detached:true,...})` → write session lock to `~/.ccs/cliproxy/sessions.json` (port-scoped via `proper-lockfile`).

**Output** — `CLIProxy started on port 8317` / `already running on port X` / `Config updated - restart`.

---

## `restart`

```
ccs cliproxy restart [--verbose]
```

**What** — `stopProxy(port)` → `startProxy(port)`. No prior session → fresh start. Stop fails → still attempts start.

---

## `status`

```
ccs cliproxy status
```

**What** — Reads session lock; falls back to socket probe.

**Detection chain**
1. `getProxyStatus(port)` reads `~/.ccs/cliproxy/sessions.json` → `{running, pid, port, sessionCount, startedAt}`.
2. Lock missing/stale → `detectRunningProxy(port)` (TCP probe + PID lookup) catches orphans.
3. Both fail → "Not running" + hint that proxy auto-starts on `ccs gemini` etc.

**Fields** — Status, PID, Port, Sessions (active count), Started timestamp.

---

## `stop`

```
ccs cliproxy stop
```

**What** — `stopProxy(port)` reads sessions.json → SIGTERM → reports disconnected session count.

Returns `{stopped:true, pid, sessionCount}` or `{stopped:false, error}`. Error `'No active CLIProxy session found'` is treated as benign by `restart`.

---

## `doctor` (alias `diag`)

```
ccs cliproxy doctor [--verbose]
```

**What** — Quota diagnostics specifically for **Antigravity (`agy`)** accounts + shared-project detection. Narrower than the name suggests — NOT general health-check.

**Steps**
1. `getProviderAccounts('agy')`.
2. `fetchAllProviderQuotas('agy', verbose)`.
3. Per-account: project-id, per-model quota bars, isUnprovisioned warning.
4. Group by `projectId` → flag shared projects ("failover will NOT help — same quota pool").
5. Summary: healthy-accounts ratio + shared-project count.

---

## `default`

```
ccs cliproxy default <account> [--provider <name>]
```

**What** — Mark account as default-for-rotation within its provider.

**How** — `findAccountByQuery(provider, query)` (matches email/nickname/id) → `setDefaultAccount(provider, accountId)`. `--provider` defaults to `agy` (consistent with quota commands).

Errors list available accounts with `(current default)` badge.

---

## `pause`

```
ccs cliproxy pause <account> [--provider <name>]
```

**What** — Set `account.paused=true` + `pausedAt=ISO-now` so quota rotation skips it.

**Notes** — Idempotent (warns if already paused). Does NOT stop the proxy or revoke OAuth.

---

## `resume`

```
ccs cliproxy resume <account> [--provider <name>]
```

**What** — Inverse of pause. `resumeAccount(provider, id)` clears flags. Warn-no-op if not paused.

---

## `install` (binary)

Binary install is *flag-driven on bare `ccs cliproxy`*, not a subcommand keyword.

| Invocation | Action |
|---|---|
| `ccs cliproxy` | `showStatus(verbose, backend)` — installed? version? pinned? latest? |
| `ccs cliproxy --install <version>` | `handleInstallVersion(v)` — download + pin |
| `ccs cliproxy --latest` | `handleInstallLatest()` — install latest, no pin |
| `ccs cliproxy --update` | Same as `--latest` (unpin + update) |
| `ccs cliproxy --backend plus --install ...` | Targets the `plus` fork |

**`handleInstallVersion`** — Strips leading `v`, calls `installVersion(version, verbose, backend)` → writes binary into CCS-managed dir, sets pinned-version marker. Failure prints causes + GitHub releases URL `BACKEND_CONFIG[backend].repo`.

**`handleInstallLatest`** — `checkLatestVersion()` → `installLatest()`. "Already up to date" path if no new version.

**`showStatus`** — Backend, Installed Yes/No, Version (with `(pinned)` badge), Binary path, Latest comparison, hint commands. If not installed → footer "Run `ccs gemini` or any provider to auto-install".

---

## Lifecycle State Machine

```
                 +-----------------+
                 |   not running   |
                 | (no sessions    |
                 |  + port closed) |
                 +--------+--------+
                          |
       start / first      |   ccs gemini, codex, etc.
       ccs <provider>     |   (auto-spawn)
                          v
                 +-----------------+
   ccs cliproxy  |     running     |<--+ already running
   start         |  PID + port +   |   |  (idempotent start)
                 |  sessions.json  |---+
                 +--------+--------+
                          |
         +----------------+----------------+
         |                |                |
   stop / SIGTERM    restart           config regen
         |                |                | (sync changed)
         v                v                v
   not running     running (fresh)   running + warn
                                     "restart to apply"
```

**Detection sources**
1. Primary: `~/.ccs/cliproxy/sessions.json` (per-port lock, `proper-lockfile`-guarded).
2. Fallback: `detectRunningProxy(port)` — TCP probe + PID lookup. Catches orphans (manual `nohup`, crashed CCS without graceful stop).

**Pause/Resume operate on accounts, not the proxy process** — orthogonal: paused account skipped in rotation, proxy stays up.

**Auto-start trigger** — any `ccs <provider>` invocation calls `ensureCliproxyService()` before forwarding.

**Config regen** — sync writing new `cliproxy.yaml` while proxy is up flows back `configRegenerated:true`; user must `restart` (no hot reload).

---

## OAuth Flow

`triggerOAuth(provider, {add, verbose})` in `cliproxy/auth/oauth-handler.ts`. Three modes:

**1. Standard (local-callback)**
- CCS spawns binary in `--auth` mode.
- Binary returns auth URL; CCS prints + opens browser.
- Binary listens on callback port; on redirect exchanges code → tokens.
- Tokens land in CLIProxy-managed credential store (per provider, typically under `~/.ccs/cliproxy/<provider>/...`, maintained by `auth-token-manager.ts` + `token-refresh-worker.ts`).

**2. Paste-callback (VPS / headless)**
- Binary spawned `--no-browser`.
- User opens URL in own browser, redirects to localhost-style URL, copies full URL back.
- 10-min timeout → "Timed out waiting for callback URL".

**3. Device-code** (Copilot, Qwen, GitLab PAT path)
- No callback server; user shown code + URL, polls.

**Browser open** — `triggerOAuth` prints URL; user opens (or terminal auto-detects). VPS detection offers interactive choice `[1] Paste-callback` / `[2] Port forwarding`.

**Token refresh** — background `token-refresh-worker.ts` started inside `ensureCliproxyService`. Logout via `ccs <provider> --logout`.

**Within `cliproxy create`** — if no accounts exist, wizard asks "Authenticate with X now?" → `triggerOAuth({add:true})` → returned `account.id` wired into new variant.

---

## Files of Interest

- `commands/cliproxy/index.ts` — router
- `commands/cliproxy/variant-subcommand.ts` — create/edit/remove (wizard)
- `commands/cliproxy/proxy-lifecycle-subcommand.ts` — start/restart/status/stop
- `commands/cliproxy/install-subcommand.ts` — `--install`/`--latest`/status
- `commands/cliproxy/auth-subcommand.ts` — list (`ls`)
- `commands/cliproxy/quota-subcommand.ts` — doctor, default, pause, resume
- `cliproxy/services/variant-service.ts` — yaml/legacy persistence
- `cliproxy/services/proxy-lifecycle-service.ts` — start/stop/status thin wrappers
- `cliproxy/service-manager.ts` — `ensureCliproxyService` (spawn detached)
- `cliproxy/session-tracker.ts` — `~/.ccs/cliproxy/sessions.json` lock
- `cliproxy/config/port-manager.ts` — `CLIPROXY_DEFAULT_PORT=8317`, `resolveLifecyclePort()`
- `cliproxy/auth/oauth-handler.ts` — `triggerOAuth` paste/forward/device modes

## Unresolved Questions

- Exact on-disk path of OAuth token files — likely `~/.ccs/cliproxy/<provider>/tokens.json` but `auth-token-manager.ts` not deeply read.
- Whether `ccs cliproxy --target <t>` standalone (no `create`) has any effect — appears advertised in help but only consumed by variant subcommand args.

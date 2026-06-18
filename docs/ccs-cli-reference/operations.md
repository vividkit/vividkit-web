# Operations: env / persist / sync / update / cleanup / tokens / bar

Source: `reference/ccs/src/commands/`. Covers six ops commands.

**Cross-cutting rule** — CCS is **non-invasive** by default; it never modifies `~/.claude/settings.json` automatically. **`ccs persist` is the explicit opt-in exception.**

---

## `ccs env` — Export profile env for third-party tools

```
ccs env <profile> [--format <fmt>] [--shell <sh>] [--ide <host>] [--help|-h]
```

**What** — Resolves a CCS profile and prints shell-evaluable `export KEY=VALUE` lines (or IDE-JSON snippet). Read-only. No filesystem writes. No network. Designed for `eval $(ccs env <p> --format openai)` workflows.

**How**
- `resolveClaudeExtensionSetup(profile)` returns `extensionEnv` + `removeEnvKeys` + `warnings`.
- `--format claude-extension`: `renderClaudeExtensionSettingsJson(setup, ide)` — IDE-keyed JSON.
- Shell formats: `formatExportLine(shell, key, value)` (single-quoted, embedded-quote-safe).
- Validates env-key regex `/^[A-Za-z_][A-Za-z0-9_]*$/`; skips invalid keys.
- Idempotent (read-only). Output IS the preview.

**Flags**

| Flag | Values | Default | Effect |
|---|---|---|---|
| `--format <fmt>` | `openai`, `anthropic`, `raw`, `claude-extension` | `anthropic` | Output transform |
| `--shell <sh>` | `auto`, `bash`, `zsh`, `fish`, `powershell` | `auto` (from `$SHELL` / win32) | Export syntax. `zsh` collapses to `bash`. |
| `--ide <host>` | `vscode`, `cursor`, `windsurf` | `vscode` | Only with `--format claude-extension` |
| `--help`/`-h` | | | Help |

**Format details**

| Format | Behavior |
|---|---|
| `openai` | Maps `ANTHROPIC_BASE_URL` → `OPENAI_BASE_URL` + `LOCAL_ENDPOINT`; `ANTHROPIC_AUTH_TOKEN`/`ANTHROPIC_API_KEY` → `OPENAI_API_KEY`; `ANTHROPIC_MODEL` → `OPENAI_MODEL` |
| `anthropic` | Filter to `ANTHROPIC_*` keys only |
| `raw` | Every effective env var as resolved |
| `claude-extension` | IDE settings JSON (not shell exports) |

**IDE host map** (`src/shared/claude-extension-hosts.ts`)

| `--ide` | Settings key | Notes |
|---|---|---|
| `vscode` | `claudeCode.environmentVariables` | Anthropic VS Code ext, camelCase |
| `cursor` | `claudeCode.environmentVariables` | VS Code-compatible |
| `windsurf` | `claude-code.environmentVariables` | legacy kebab-case |

**Common usage**
```bash
eval "$(ccs env gemini --format openai)"                  # OpenCode/Cursor session
ccs env codex --format anthropic                          # ANTHROPIC_* exports
ccs env work --format claude-extension --ide vscode       # paste into VS Code settings.json
ccs env default --format claude-extension --ide windsurf  # clear/replace Windsurf overrides
```

Help nudges users toward `ccs persist` for shared `~/.claude/settings.json` setup.

---

## `ccs persist` — Write profile to `~/.claude/settings.json`

```
ccs persist <profile> [--yes|-y] [--permission-mode <mode>]
                      [--dangerously-skip-permissions | --auto-approve]
ccs persist --list-backups
ccs persist --restore [timestamp] [--yes]
ccs persist --help
```

**What** — The opt-in non-invasive exception. Writes a profile's resolved env (and optional `permissions.defaultMode`) directly into `~/.claude/settings.json` so native Claude Code (CLI + IDE extension) picks it up without any CCS shim. Auto-creates timestamped backups.

**Why** — CCS profiles normally inject env per-process via `ccs <profile>`. Claude Code, the official extension, and IDE integrations read `~/.claude/settings.json` directly. `persist` flattens the resolved profile into that file so Claude Code uses the chosen profile *by default* — no wrapper required.

**What is persisted** (resolved via `resolveClaudeExtensionSetup`):
- `env`: profile's `extensionEnv` (typically `ANTHROPIC_BASE_URL`, `ANTHROPIC_AUTH_TOKEN`, `ANTHROPIC_MODEL`; account profiles add `CLAUDE_CONFIG_DIR`).
- Stale managed keys in `removeEnvKeys` are **deleted** before write (prevents cross-profile bleed).
- `permissions.defaultMode` if `--permission-mode` or `--dangerously-skip-permissions` set.
- All other existing settings (hooks, etc.) preserved.

**How**
1. `ProfileDetector.detectProfileType()`. Fail w/ profile list if missing.
2. `resolveClaudeExtensionSetup(profile)`.
3. Print preview (sensitive keys masked w/ `4...4` rule via `isSensitiveEnvKey`).
4. With `proper-lockfile` lock (10s stale, 5 retries):
   - Optional backup → `settings.json.backup.YYYYMMDD_HHMMSS` (mode 0600). Rotates to keep newest 10.
   - Read existing `settings.json` (rejects symlinks via `O_NOFOLLOW`).
   - Merge: `existing.env` minus `clearEnvKeys` plus `resolved.env`.
   - Atomic write: tmp file `settings.json.tmp-<nonce>` (mode 0600, `O_EXCL|O_NOFOLLOW`) → `fs.rename`.
   - Chmod 0600.
5. Failure with backup → rollback by re-writing backup contents.

**Flags**

| Flag | Default | Effect |
|---|---|---|
| `--yes`/`-y` | off | Skip backup-prompt + proceed-prompt; auto-creates backup |
| `--permission-mode <m>` | unset | `default` / `plan` / `acceptEdits` / `bypassPermissions` |
| `--dangerously-skip-permissions` | off | Sets `permissions.defaultMode = bypassPermissions`. Conflicts with non-`bypassPermissions` `--permission-mode` |
| `--auto-approve` | off | Alias of above |
| `--list-backups` | — | List backups (newest first), exit |
| `--restore [ts]` | — | Restore from backup `ts` (default: latest). Creates rollback backup of current first. |
| `--help`/`-h` | | Help |

**Supported profile types** — API profiles (glm, km, custom), CLIProxy (gemini, codex, agy, qwen, kiro, ghcp), Copilot, account profiles (`work/personal/client` → persists `CLAUDE_CONFIG_DIR`), `default` (clears CCS overrides).

**Idempotence** — yes (re-running same profile produces same merge). **Dry-run** — no flag, but proceed-prompt acts as confirmation gate.

**Common scenarios**
```bash
ccs persist glm --yes                      # auto-confirm + auto-backup
ccs persist work                           # account profile → persists CLAUDE_CONFIG_DIR
ccs persist default --yes                  # clear CCS overrides, return to native Claude
ccs persist --list-backups
ccs persist --restore 20260110_205324
```

**Internals**
- Symlink-refusal at every read/write step (`ELOOP`) — defends against TOCTOU.
- Sensitive key detector splits camelCase + non-alphanum, matches `TOKEN/KEY/SECRET/PASSWORD/AUTH/CREDENTIAL/ACCESS/REFRESH/PRIVATE/APIKEY`.

---

## `ccs sync` — Sync delegation commands & skills

```
ccs sync          (alias: ccs --sync)
```

**What** — Refreshes the CCS-managed subset of `~/.claude/{commands,skills,agents}/` and verifies per-instance MCP server config. Run after `ccs update`, after profile changes, or when symlinks break (Claude CLI's atomic writes occasionally orphan them — e.g. after toggling thinking mode).

**Source of synced content** — NOT pulled from a remote repo. The `.claude/` payload **ships inside the npm package** (`@kaitranntt/ccs`). `ClaudeDirInstaller` resolves `packageDir = path.join(__dirname, '..', '..')` then copies `<package>/.claude/` → `~/.ccs/.claude/`. So "syncing" = re-copying from the installed package. (`ccs update` ships new commands/skills; `ccs sync` propagates them into `~/.claude/`.)

**How** (5 sequential steps)
1. **`ClaudeDirInstaller.install()`** — `fs.cpSync(packageDir/.claude, ~/.ccs/.claude, {recursive:true})`. Removes old `~/.ccs/.claude/` first. Reports file/dir count.
2. **`installer.cleanupDeprecated()`** — removes legacy artifacts (e.g. `agents/ccs-delegator.md` deprecated v4.3.2).
3. **`ClaudeSymlinkManager.install(false)`** — symlinks selected items from `~/.ccs/.claude/` into `~/.claude/`.
4. **`SharedManager.ensureSharedDirectories()`** — repairs `~/.ccs/shared/{commands,skills,agents}` → `~/.claude/{...}` symlinks (per-instance shared layer).
5. **MCP sync** — `InstanceManager.syncMcpServers()` reads global `~/.claude.json` MCP config into each non-bare instance dir. Reports count.

**Idempotence** — yes by design. Safe to repeat. **Dry-run** — none. **Network** — none.

**Files touched**
- Reads: `<npm_package>/.claude/`, `~/.claude.json`, profile registry.
- Writes: `~/.ccs/.claude/`, `~/.ccs/shared/*`, `~/.claude/{commands,skills,agents}/<symlinks>`, instance MCP config.

---

## `ccs update` — Update CCS to latest version

```
ccs update [--force] [--beta|--dev] [--help|-h]    (alias: ccs --update)
```

**What** — Detects current install (npm/yarn/pnpm/bun), checks npm registry for newer version on chosen tag, runs the appropriate global install command.

**How**
1. `detectCurrentInstall()` — package manager + install path.
2. **Network**: `checkForUpdates(currentVersion, true, 'npm', tag)` (`utils/update-checker.ts`) — hits npm registry. Returns `update_available | no_update | check_failed` + `latest`.
3. `--force` → skip check, resolve target version, reinstall regardless.
4. Downgrade detected (stable user → older `@dev` base) → warn explicitly.
5. Cache clear (`npm cache clean --force` / `yarn cache clean` / `pnpm store prune` / win32 `bun remove -g @kaitranntt/ccs`).
6. Spawn `<pm> <install-cmd> -g @kaitranntt/ccs@<tag>` with `buildPackageManagerEnv(currentInstall)` (preserves prefix/registry).
7. **Verify** — re-read installed version, compare to `expectedVersion`. Still old → "current install path didn't change; another package manager likely updated a different copy" + `--force` re-run command.

**Flags**

| Flag | Effect |
|---|---|
| `--force` | Skip update check, reinstall current channel |
| `--beta` / `--dev` | Switch channel: tag `dev` instead of `latest` |
| `--help`/`-h` | Help |

Channel mapping:
- (default) → `npm install -g @kaitranntt/ccs@latest`
- `--beta` / `--dev` → `npm install -g @kaitranntt/ccs@dev`

Switching back to stable: just `ccs update` — installs `@latest` over `@dev`.

**Idempotence** — yes. **Dry-run** — none.

```bash
ccs update              # latest stable
ccs update --beta       # dev/beta channel
ccs update --force      # repair broken install
```

---

## `ccs cleanup` — Remove old CCS & CLIProxy logs

```
ccs cleanup [--errors] [--days=N] [--dry-run] [--force] [--help|-h]
```

Aliased `ccs --cleanup`. Whitelist `CLEANUP_FLAGS = ['--errors', '--days=', '--dry-run', '--force', '--help', '-h']`.

**Modes**

| Mode | Trigger | Targets |
|---|---|---|
| Main log cleanup | default (no `--errors`) | ALL regular files in `getNativeLogsDir()`, `getLogArchiveDir()`, `getCliproxyDir()/logs` |
| Error-log cleanup | `--errors` | ONLY `error-*.log` in CLIProxy logs dir, age-filtered by `--days=N` (default 7) |

Reports per-target file count + size, prompts (unless `--force`), bulk-deletes regular files only (skips symlinks).

**Flags**

| Flag | Default | Effect |
|---|---|---|
| `--errors` | off | Switch to error-log mode |
| `--days=N` | `7` | Age threshold in days (Mode B only). Positive int. |
| `--dry-run` | off | Preview only |
| `--force` | off | Skip y/N prompt |
| `--help`/`-h` | | Help |

**Idempotence** — yes (empty dirs no-op). **Network** — none.

**Common scenarios**
```bash
ccs cleanup --errors --dry-run         # preview error-log cleanup
ccs cleanup --errors --days=3 --force  # batch-delete error logs older than 3d
ccs cleanup --force                    # nuke all logs (CI usage)
ccs cleanup                            # interactive default
```

**Safety** — only deletes `stats.isFile() && !stats.isSymbolicLink()` regular files at top level. No recursion. Symlinks preserved.

---

## `ccs tokens` — Manage CLIProxyAPI auth tokens

```
ccs tokens [--show] [--api-key <key>] [--secret <key>] [--regenerate-secret]
           [--variant <name>] [--reset] [--help|-h]
```

Whitelist `TOKENS_FLAGS = ['--show', '--api-key', '--secret', '--regenerate-secret', '--variant', '--reset', '--help', '-h']`.

**What** — Reads/writes the CLIProxy auth pair — global API key + management secret — plus per-variant API key overrides. Default invocation prints masked tokens. Any mutation triggers `regenerateConfig()` (rewrites CLIProxy config). Always warns: restart CLIProxy to apply.

**Flags**

| Flag | Effect |
|---|---|
| (none) | Show masked tokens + status (`(custom)` vs `(default)`) |
| `--show` | Same, unmasked + warning to not share |
| `--api-key <k>` | Set global API key. With `--variant <n>`: per-variant. |
| `--secret <k>` | Set management secret (explicit value) |
| `--regenerate-secret` | Generate cryptographically random 32-char (`generateSecureToken(32)`) → `setGlobalManagementSecret(newSecret)`. Cannot combine with `--secret`. |
| `--variant <n>` | Scope `--api-key` to a CLIProxy variant. Errors if variant unknown. |
| `--reset` | `resetAuthToDefaults()` + regenerate config |
| `--help`/`-h` | Help |

**Side effects** — every successful mutation calls `regenerateConfig()` and prints `Restart CLIProxy to apply: ccs cliproxy restart`.

**Idempotence** — yes for read; mutations last-write-wins. **Network** — none.

```bash
ccs tokens                                       # check current state
ccs tokens --regenerate-secret                   # rotate management secret
ccs tokens --api-key sk-... --variant my-gemini  # per-variant override
ccs tokens --reset                               # back to defaults
ccs cliproxy restart                             # apply
```

---

## `ccs bar` — macOS menu-bar app (live quota & spend)

```
ccs bar [launch|serve|stop|status|install|uninstall|version] [--help|-h]
```

Subcommand dispatcher in `src/commands/bar/index.ts`. Bare `ccs bar` → `launch`. macOS-only feature (8.3.0+). The app talks only to a localhost CCS web-server.

**What** — Native Swift menu-bar app surfacing live subscription quota, reset countdowns, and 7/30-day spend without opening the dashboard. The CLI side manages the app bundle + the detached local server it reads from.

**Subcommands**

| Sub | Effect |
|---|---|
| `launch` (default) | Spawn the menu-bar app; reuse a running server or start one detached |
| `serve` | Long-lived server host (`--port N`); the process `launch` spawns detached and the Swift app spawns via launch.json |
| `stop` | Stop the detached server (reads `server.pid`) |
| `status` | Report whether the server is running + reachable at `GET /api/bar/summary` |
| `install` | Download `CCS Bar.app` from the floating `ccs-bar-latest` GitHub release into `~/Applications`; pins bundle version to `~/.ccs/bar/.version` |
| `uninstall` | Remove `CCS Bar.app` and the version pin |
| `version` / `--version` | Show installed CCS Bar version |

**Network** — `install` only: GitHub release download (host-allowlisted: github.com → objects.githubusercontent.com) + a single post-install compat probe `GET {baseUrl}/api/bar/summary` (200 ok, 404 server-too-old warning, else soft-warn). Other subcommands: localhost only.

**Notes** — `install` uses a FLOATING release tag so the Swift app ships independently of CLI semver; real version is read from the bundle `Info.plist` (`CFBundleShortVersionString`).

```bash
ccs bar install   # download & install into ~/Applications
ccs bar           # launch (starts/reuses local server)
ccs bar status    # is the background server up?
ccs bar stop      # stop the background server
ccs bar uninstall # remove the app + version pin
```

---

## Summary Table

| Command | Mutates filesystem | Network | Dry-run | Idempotent | Notable |
|---|---|---|---|---|---|
| `env` | no | no | n/a (output is preview) | yes | Single resolver feeds shell + IDE JSON |
| `persist` | `~/.claude/settings.json` | no | no (proceed prompt) | yes | Lockfile + atomic rename + symlink refusal |
| `sync` | `~/.ccs/.claude`, `~/.claude/*` symlinks | no | no | yes | Source = npm package payload, not remote |
| `update` | global node_modules | npm registry | no | yes | `--beta` ↔ `@dev` tag toggle |
| `cleanup` | log dirs only | no | yes (`--dry-run`) | yes | Two modes: main vs error-only |
| `tokens` | CLIProxy config file | no | no | yes | All mutations trigger config regen |
| `bar` | `~/Applications`, `~/.ccs/bar/` (install) | install only (GitHub release) | no | yes | macOS-only menu-bar app + detached localhost server |

## Unresolved Questions

- `update`'s update-checker (`utils/update-checker.ts`) channel logic ('npm' vs 'direct') inferred from call sites — verify exact registry URL queried (`registry.npmjs.org/@kaitranntt%2Fccs`) if guides need to claim it verbatim.

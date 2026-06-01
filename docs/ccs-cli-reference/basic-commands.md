# Basic Commands

Source: `reference/ccs/src/commands/`. Routing: `root-command-router.ts` resolves `args[0]` (or alias) → dynamic-imports handler.

Covers: `setup`, `doctor`, `version`, `help`, `--install`, `--uninstall`, `migrate`.

---

## `ccs setup`

```
ccs setup [--force|-f] [--help|-h]
```
Aliases: `--setup`.

**What** — Interactive first-time wizard. Configures CLIProxy mode (Local / Remote / Skip), remote-proxy connection details, seeds API-profile guidance. Writes `setup_completed: true` to unified config.

**How**
- `handleSetupCommand` → `runSetupWizard(force)`.
- `isFirstTimeInstall()` checks: unified `config.yaml` (`hasUnifiedConfig` + `setup_completed` flag + presence of profiles/accounts/variants/oauth_accounts/remote-proxy), legacy `config.json`, legacy `profiles.json`. Any positive → exits unless `--force`.
- `readline` prompts; `UserCancelledError` on Ctrl+C.
- Branches by `proxyMode`:
  - `local` → `cliproxy_server.local.auto_start=true`, remote disabled.
  - `remote` → `configureRemoteProxy` strips protocol/trailing-slashes, asks HTTPS/HTTP, port (1-65535), auth-token (default `ccs-internal-managed`); writes remote enabled + local `auto_start=false` + fallback enabled.
  - `skip` → no `cliproxy_server` mutation.
- Persists via `mutateConfig` (sets `setup_completed=true`).

**Flags**

| Flag | Effect |
|---|---|
| `--force`, `-f` | Run even if already configured |
| `--help`, `-h` | Show usage and exit |

**Step-by-step**
1. Run `ccs setup`.
2. Choose `1) Local`, `2) Remote Server`, or `3) Skip CLIProxy`.
3. If Remote: enter host, pick HTTPS/HTTP, port, auth-token (default `ccs-internal-managed`).
4. Choose API profile setup (prints copy-paste commands; does NOT create profile).
5. Verify `setup_completed: true` in `~/.ccs/config.yaml`.

**Notes**
- API-profile section is purely informational.
- Corrupted `config.yaml` does NOT trigger first-time prompt; warns and suggests `--force` or `ccs doctor`.
- Ctrl+C during prompt → graceful exit, no partial write.

---

## `ccs doctor`

```
ccs doctor [--fix|-f] [--help|-h]
```
Aliases: `--doctor`.

**What** — Read-only health check; with `--fix`, attempts auto-repair. Inspects config files, CLIProxy install/process, OAuth port availability (8085, 1455, 51121), symlink integrity, profile validity. Exits 0 healthy / 1 unhealthy.

**How**
- Dynamic-imports `../management/doctor` (default class `Doctor`).
- `doctor.runAllChecks()` registers stage logs (`intake` → `route`).
- `--fix` → `doctor.fixIssues()` may kill zombie CLIProxy procs, free OAuth ports, regenerate CLIProxy config, restore symlinks.
- `process.exit(doctor.isHealthy() ? 0 : 1)`.

**Flags**

| Flag | Effect |
|---|---|
| `--fix`, `-f` | Auto-fix detected issues |
| `--help`, `-h` | Help |

**Step-by-step**
1. `ccs doctor` → review pass/fail rows.
2. If failures → `ccs doctor --fix`.
3. Re-run `ccs doctor`; verify `echo $?` is 0.

**Notes**
- Always `process.exit` — terminates Node immediately.
- `--fix` is destructive (process kill, config regen) — not dry-run aware.

---

## `ccs version`

```
ccs version
ccs --version
ccs -v
```

**What** — Prints CCS version banner, install paths, configured profile readiness, delegation status.

**How** (no args)
- Reads: `getVersion()`, `process.argv[1]`, `getCcsDir()`, `getActiveConfigPath()`, `~/.ccs/profiles.json`, `~/.ccs/delegation-sessions.json`.
- Loops `['glm','km']`: tries `getProfileLookupCandidates(profile)` against `<candidate>.settings.json`; reads `env.ANTHROPIC_AUTH_TOKEN`; rejects placeholder patterns `YOUR_*_API_KEY_HERE` / `sk-test*`; valid → `readyProfiles`.
- Delegation enabled if delegation-sessions file exists OR any ready profile.
- Always `process.exit(0)`.

**Step-by-step**
1. `ccs --version`.
2. Confirm version, install location, CCS directory, config path.
3. Check "Delegation: Enabled / Not configured" line.
4. "Delegation Ready" lists delegate-able profiles.

**Notes**
- Filters fake keys to avoid false positives.
- Hardcoded check list `['glm','km']`.

---

## `ccs help [topic]`

```
ccs help
ccs help <topic>
ccs --help
ccs -h
```

**What** — Multi-tier help. Root → grouped tables. Topic → bespoke renderer (`profiles`, `providers`, `kiro`, `targets`, `browser`, `completion`) or routes to a command's `--help` (api, auth, cleanup, cliproxy, copilot, cursor, proxy, docker, migrate, setup, tokens).

**How** (`handleHelpRoute`)
- No `args[0]` → `handleHelpCommand` prints groups from `ROOT_COMMAND_CATALOG` (`start`, `manage`, `runtime`, `operations`), `BUILTIN_PROVIDER_SHORTCUTS`, `ROOT_PROFILE_EXAMPLES`, `ROOT_COMPATIBLE_ALIAS_EXAMPLES`.
- Topic match → bespoke renderer.
- Else look up `commandHandlers` map → delegates via `await import('./<cmd>')` calling its `--help` printer.
- Unknown topic → red "Unknown help topic" + lists available + `process.exitCode = 1`.

| Topic | Renders |
|---|---|
| (none) | Root grouped help |
| `profiles` | Profile types + examples |
| `providers` | OAuth provider shortcuts + GitLab Duo flags |
| `kiro` | Builder ID / IDC / social OAuth flows |
| `targets` | Target routing (claude/droid/codex) |
| `browser`, `completion` | Delegated to subcommand help |
| `api`, `auth`, `cleanup`, `cliproxy`, `copilot`, `cursor`, `proxy`, `docker`, `migrate`, `setup`, `tokens` | Each command's own help |

**Notes**
- `getPublicRootCommands()` filters catalog (some entries hidden from root help).
- Delegated handlers may `process.exit` (proxy, copilot, tokens).
- `ccs help api` ≡ `ccs api --help`.

---

## `ccs --install` / `ccs --uninstall`

```
ccs --install
ccs --uninstall
```
Only long-flag forms route here (no bare `install`).

**What**
- `--install`: stub. Prints "Feature not available" — `.claude/` integration WIP.
- `--uninstall`: removes managed integrations: WebSearch hook + MCP runtime, Image Analysis hook + MCP runtime, `~/.claude/` symlinks. Preserves `~/.ccs/` data dir.

**How** (`--uninstall`)
1. `uninstallWebSearchHook()` — removes hook file + migration marker (does NOT touch global `settings.json`).
2. `uninstallWebSearchMcp()` — removes managed MCP runtime/config.
3. `uninstallImageAnalyzerHook()` + `uninstallImageAnalysisMcp()`.
4. `new ClaudeSymlinkManager().uninstall()` — clears `~/.claude/` symlinks.
5. Tally + print "Uninstall complete!" or "Nothing to uninstall".
6. `process.exit(0)`.

**Step-by-step**
1. `ccs --uninstall`.
2. Verify `~/.claude/` no longer has CCS symlinks (`ls -la ~/.claude/`).
3. `~/.ccs/` intact — reinstall via `npm install -g @kaitranntt/ccs --force`.

**Notes**
- Idempotent: every helper returns boolean; second run prints "Nothing to uninstall".
- Does NOT mutate `~/.claude/settings.json` (non-invasive rule).
- `--install` is intentionally inert.

---

## `ccs migrate`

```
ccs migrate
ccs migrate --dry-run
ccs migrate --rollback <backup-path>
ccs migrate --list-backups
ccs migrate --help
```
Aliases: `--migrate`. Help via `ccs help migrate`.

**What** — Migrates legacy v1 (`config.json` + `profiles.json`) to v2 unified `config.yaml`. Supports preview, rollback, backup listing. Creates timestamped backup before mutation.

**How**
- `--list-backups` → `getBackupDirectories()` → numbered list.
- `--rollback <path>` → `rollback(path)`; missing path → exit 1.
- Else `hasUnifiedConfig() && !needsMigration()` → "Already using unified config".
- `!needsMigration()` → "No migration needed".
- `--dry-run` → preview banner.
- `migrate(dryRun)` returns `{ success, backupPath, migratedFiles[], warnings[], error? }`.
- Failure → exit 1 + partial-list.

**Flags**

| Flag | Effect |
|---|---|
| `--dry-run` | Preview, no writes |
| `--rollback <path>` | Restore from backup dir |
| `--list-backups` | List backups (newest first) |
| `--help` | Help |

**Step-by-step**
1. `ccs migrate --dry-run` — preview file count + warnings.
2. `ccs migrate` — apply; note printed `Backup: <path>`.
3. `ccs migrate --list-backups` — confirm.
4. If broken: `ccs migrate --rollback <path>`.

**Notes**
- Backups timestamped (e.g. `~/.ccs/backup-v1-2025-01-15`).
- Exits 1 on failure (CI-friendly); 0 on success / no-op.
- Warnings printed but not fatal.

---

## Cross-cutting

- `ROOT_COMMAND_ROUTES` array (`root-command-router.ts`) is single source of truth — name + aliases + lazy `handle`. `tryHandleRootCommand` resolves via `resolveNamedCommand`.
- All handlers dynamic-import their module → reduces cold-start cost.
- Several handlers `process.exit` (doctor, version, install, uninstall, proxy, tokens, copilot) — short-circuits anything after `tryHandleRootCommand`.
- `initUI()` called at top of every handler → ensures ASCII palette/TTY detection (NO emojis in CLI output).

## Unresolved Questions

- `cli-argument-parser` (`bootstrapAndParseEarlyCli`) may pre-consume some flags before routing.
- `migrate` doesn't surface in root-help groups; intentional?
- `setup` first-time auto-prompt trigger lives in `runPreDispatchHandlers` (not deeply traced).

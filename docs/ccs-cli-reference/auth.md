# `ccs auth` — Account Profile Management

Source: `reference/ccs/src/auth/`. Manages **account-based profiles** — the most isolated tier (priority 4 in profile resolution). Each profile is an independent Claude Code instance with its own login, isolated `CLAUDE_CONFIG_DIR`, and independent shared/symlink layout.

Router: `auth-commands.ts`'s `route()` switches on `args[0]`. Deprecated alias: `save → create`. Removed: `current`, `cleanup` (warn).

## Profile Model

| Aspect | Value |
|---|---|
| Storage (legacy) | `~/.ccs/profiles.json` (+ `default_profile`) |
| Storage (unified) | `config.yaml` `accounts:` (`isUnifiedMode()` switch) |
| Per-profile dir | `~/.ccs/instances/<sanitized-name>/` (used as `CLAUDE_CONFIG_DIR`) |
| Shared dirs | `~/.ccs/shared/{commands,skills,agents}` symlinked unless `--bare` |
| Profile-specific | `settings.json`, `sessions/`, `session-env/`, `todolists/`, `logs/` |
| Profile name regex | `^[a-zA-Z][a-zA-Z0-9_-]*$` |
| Sanitized fs name | lowercase, non-alnum→`-` (collision-checked) |
| Path access | All paths via `getCcsDir()` (respects `CCS_HOME` for tests) |

**Context policy** (`account-context.ts`): `{ context_mode: 'isolated' | 'shared', context_group?: string, continuity_mode?: 'standard' | 'deeper' }`. Shared groups normalized (trim/lowercase/spaces→`-`), max 64 chars, must match `^[a-zA-Z][a-zA-Z0-9_-]*$`.

**Default resolution**: `getDefaultUnified() ?? getDefaultProfile()`. When unset, plain `ccs` uses primary `~/.claude/` lane.

**Spawn isolation**: `CLAUDE_CONFIG_DIR=<instance>` + `stripClaudeCodeEnv` (`CLAUDE_*` leakage) + `stripAmbientProviderCredentials` (inherited provider keys). Windows uses shell + `escapeShellArg`.

---

## `create`

```
ccs auth create <profile> [--force] [--bare]
                          [--share-context] [--context-group <name>]
                          [--deeper-continuity]
```

**What** — Creates new profile entry, builds isolated instance dir, then spawns `claude` inside that dir so user logs in. Metadata persisted only on success (rollback on non-zero exit).

**How**
1. Validate name via `isValidAccountProfileName`; reject duplicate (unless `--force`); reject sanitized-name collisions.
2. Resolve context policy (`resolveCreateAccountContext`). Errors:
   - `--context-group` without `--share-context` → reject.
   - `--deeper-continuity` without shared → reject.
3. `claude-detector.getClaudeCliInfo()` — abort `BINARY_ERROR` if Claude CLI missing.
4. `instanceMgr.ensureInstance(name, policy, { bare })` — creates `~/.ccs/instances/<name>/`, syncs project-context + continuity artifacts via `SharedManager`, links shared symlinks unless `bare`.
5. Persist metadata: `createAccountUnified()` (unified) or `createProfile()` (legacy).
6. `child_process.spawn(claude, [], { stdio:'inherit', env: stripped + CLAUDE_CONFIG_DIR })`.
7. Exit 0 → print "Profile Created" box + Set-as-Default hint. Non-zero → `rollbackFailedCreate()`: revert metadata, delete instance dir if newly created, restore previous context.

**Flags**

| Flag | Effect |
|---|---|
| `--force` | Overwrite existing profile |
| `--bare` | No shared `commands/skills/agents` symlinks |
| `--share-context` | Profile shares project workspace with same-group |
| `--context-group <name>` | Named group (default `default`); requires `--share-context` |
| `--deeper-continuity` | Also sync `session-env/file-history/todos/shell-snapshots`; requires shared |

**Step-by-step**
1. `ccs auth create work` → opens Claude → user logs in.
2. On exit, prints summary box + hint to `ccs auth default work`.

**Notes**
- Stamps `--bare` into metadata; preserves prior `bare` if profile pre-existed.
- Stripped env prevents inheriting current shell's credentials.
- Rollback is best-effort (silent failures swallowed).

---

## `backup`

```
ccs auth backup <profile|default> [--json]
```

**What** — Snapshots local "continuity" artifacts (resume-lane data) for an account or for the plain `ccs` lane (`default`) into `~/.ccs/backups/...`.

**How**
1. `default` → `resolveRuntimePlainCcsResumeLane()` returns the runtime config dir + label (`default` or `default-<account>`); uses `getContinuityArtifactNames('default')`.
2. Else: profile must exist and be `type: 'account'`; resolve context policy; `instanceMgr.ensureInstance` → `CLAUDE_CONFIG_DIR`; uses `getContinuityArtifactNames('account')`.
3. Backup root: `getAuthBackupRoot()/<label>/<timestamp>/` (mode 0700).
4. For each artifact name: `fs.cpSync(src, dst, { recursive: true, dereference: true, force: false })`. Tracks `copied` vs `skipped`.
5. Writes `manifest.json` (mode 0600) with `target`, `source_config_dir`, `created_at`, `copied`, `skipped`.

**Flags** — `--json` (machine output: `target`, `backup_path`, `copied`, `skipped`).

**Step-by-step**
- `ccs auth backup work` → timestamped snapshot of work account.
- `ccs auth backup default` → snapshots plain `ccs` lane.

**Notes** — dereferences symlinks; permissions hardened (0700/0600); only `account` profiles supported.

---

## `list`

```
ccs auth list [--verbose] [--json]
```

**What** — Lists all account profiles merged from legacy + unified config.

**How**
1. Merge `getAllProfiles()` + `getAllAccountsUnified()` (unified takes precedence).
2. Resolve default via `getDefaultUnified() ?? getDefaultProfile()`.
3. Sort: default → `last_used` desc → alphabetical.
4. JSON: full per-profile dump with `instance_path`.
5. Human: `Profile / Type / Status` table; `--verbose` adds `Last Used / Context` (via `formatAccountContextPolicy`).

---

## `show`

```
ccs auth show <profile> [--json]
```

**What** — Detailed view of one profile.

**How**
1. Lookup via `getAllProfilesMerged()`; abort `PROFILE_ERROR` if missing.
2. Resolve default + context policy + instance path.
3. Count sessions: read `<instancePath>/session-env/*.json`.
4. Print Type, Instance path, Created, Last Used, Context, optional `Bare`, Sessions count.

**Flags** — `--json` (adds `bare` only if true).

---

## `remove`

```
ccs auth remove <profile> [--yes|-y]
```

**What** — Permanently deletes profile metadata + instance directory.

**How**
1. Existence check (legacy + unified).
2. Show impact: instance path + session count.
3. Confirm via `InteractivePrompt.confirm` (default **NO**) unless `--yes`.
4. `instanceMgr.deleteInstance` removes `~/.ccs/instances/<name>/`.
5. Remove from unified config (if present) AND legacy `profiles.json` (if present).

**Notes** — Safe default (No). Sessions counted from `session-env/*.json`.

---

## `default`

```
ccs auth default <profile>
```

**What** — Sets profile as default (consumed by `ccs` with no arg).

**How** — `setDefaultUnified(name)` if unified, else `setDefaultProfile(name)`. Registry validates profile exists.

---

## `reset-default`

```
ccs auth reset-default
```

**What** — Clears the custom default; plain `ccs` reverts to user's primary `~/.claude/` lane.

**How** — `clearDefaultUnified()` if unified, else `clearDefaultProfile()`.

---

## Subcommand Catalog Mapping

`AUTH_SUBCOMMANDS` (in `command-catalog.ts`): `create`, `backup`, `list`, `show`, `remove`, `default`, `reset-default`. Deprecated `save`, removed `current`/`cleanup` are NOT in catalog.

## Cross-cutting

| Concern | Mechanism |
|---|---|
| Path safety | All paths via `getCcsDir()`; tests set `CCS_HOME` |
| Env isolation | `CLAUDE_CONFIG_DIR` + `stripClaudeCodeEnv` + `stripAmbientProviderCredentials` |
| Dual-mode | `isUnifiedMode()` switches; `getAllProfilesMerged()` reads both |
| Shared symlinks | `SharedManager` (`commands/skills/agents`); skipped when `--bare`; Windows falls back to copies |
| Continuity artifacts | `getContinuityArtifactNames('account'\|'default')` |
| Rollback (create) | Best-effort metadata revert + instance cleanup + prior context restore |
| Confirmation safety | `remove` defaults to NO; `create` overwrite gated by `--force` |

## Unresolved Questions

- Exact root for `getAuthBackupRoot()` (probable `~/.ccs/backups/auth/`).
- Exact contents of `getContinuityArtifactNames('account')` vs `'default')` — `--deeper-continuity` syncs `session-env/file-history/todos/shell-snapshots`, but standard backup list not enumerated in scout.

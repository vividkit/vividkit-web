---
name: vk:audit-ccs
description: Deeply audit upstream CCS (kaitranntt/ccs) — CLI command surface, subsystem architecture, per-provider capabilities, config schemas, and provider profiles — vs the VividKit CCS Guide. Inventories current guide coverage, fetches latest from main, compares against last-sync commit, categorizes diff, and proposes concrete updates. Use when checking if CCS Guide is stale, after a new ccs release, or before publishing CCS doc updates.
version: 2.0.0
argument-hint: "[--inventory | --check | --report | --sync | --validate | --commands | --architecture | --capabilities | --schemas] [--no-fetch]"
---

# CCS Guide Audit

Track upstream `kaitranntt/ccs` changes and propose VividKit CCS Guide updates.

v2 expands beyond per-provider profile snapshots: it now also audits the **CLI command surface**, **subsystem architecture**, **per-provider runtime capabilities** (OAuth flow, callback ports, model-prefix routing, quota tracking), and **config schemas**. Each pass produces its own report; `--validate` aggregates drift across every dimension into a single CI gate.

## Audit Dimensions

| Dimension | Source-of-truth in upstream | Audit module |
|---|---|---|
| Provider profile templates | `config/base-<id>.settings.json` | `scripts/detect-ccs-changes.cjs` (inline) |
| CLI command catalog | `src/commands/command-catalog.ts` | `lib/ccs-command-catalog.cjs` |
| Subsystem architecture | `src/<subsystem>/` directories | `lib/ccs-architecture.cjs` |
| Provider capabilities | `src/cliproxy/provider-capabilities.ts` + `src/cliproxy/ai-providers/managed-model-prefixes.ts` | `lib/ccs-capabilities.cjs` |
| Config schemas | `src/config/schemas/*.ts` | `lib/ccs-schemas.cjs` |

A lightweight TS source parser (`lib/ts-source-parser.cjs`) extracts `as const` literals (records, arrays, nested objects) from the upstream TypeScript files without running the TS compiler.

## Modes

### `--inventory` — Guide coverage baseline (no diff)

Profile-only audit of current state. No git diff, no marker writes.

```bash
node skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs --inventory
```

Output: matrix of every `base-*.settings.json` profile × guide-coverage status (`documented` / `missing` / `orphan`) + deprecation signal flags.

### `--commands` — CLI command-surface audit

Enumerate every root command, subcommand, flag, help topic, and binary alias from `command-catalog.ts`; cross-check each against guide coverage.

```bash
node skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs --commands
```

Output: `reference/changelog-reports/{date}-ccs-commands.md` with public/hidden split, per-subcommand documented flags, and suggestions for missing public commands + runtime aliases.

### `--architecture` — Subsystem architecture audit

Walk `src/<subsystem>/` directories, count files, peek module headers, classify user-visible vs internal, and check guide coverage by keyword.

```bash
node skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs --architecture
```

Output: `reference/changelog-reports/{date}-ccs-architecture.md` with subsystem table + suggestions for missing user-visible subsystems.

### `--capabilities` — Per-provider capability matrix

Parse `PROVIDER_CAPABILITIES` (OAuth flow, callback port, refresh ownership, auth file prefixes, token type values, aliases, display name) + `QUOTA_SUPPORTED_PROVIDER_IDS` + model-prefix routing rules; cross-check each provider in the guide and against shipped `base-<id>.settings.json` profiles.

```bash
node skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs --capabilities
```

Output: `reference/changelog-reports/{date}-ccs-capabilities.md` with capability matrix + per-provider detail sections + suggestions for providers declared in capabilities but missing from the guide.

### `--schemas` — Config schema audit

List `src/config/schemas/*.ts`, count exports, classify user-facing vs internal-only, and check guide coverage by keyword.

```bash
node skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs --schemas
```

Output: `reference/changelog-reports/{date}-ccs-schemas.md`.

### `--check` — Quick diff summary (default)

Compare current cloned HEAD vs stored last-sync hash. Summary only.

```bash
node skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs --check
```

### `--report` — Detailed diff + impact map + proposals

Categorized diff + impact map + actionable update proposals. **Also runs all 4 audit passes above** and writes them to dated reports (commands / architecture / capabilities / schemas / inventory). Auto-runs inventory section when no marker exists.

```bash
node skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs --report
```

### `--sync` — Fetch latest + report + update marker + bump pins

Fetches `main`, runs `--report`, refreshes per-provider snapshot artifact (`reference/ccs-provider-snapshots.json`), writes the new last-sync SHA, **and auto-bumps `CCS_SYNCED_VERSION` + `CCS_SYNCED_DATE` literals** in `src/data/guides/ccs-cheatsheet-data.ts` so the VK cheatsheet header/overview pill always reflect the just-synced upstream package + date.

```bash
node skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs --sync
```

### `--validate` — CI drift gate (no fetch, no marker writes)

Builds the provider snapshot in-memory and aggregates drift checks across every audit dimension. Exits non-zero on any drift.

```bash
node skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs --validate
```

Drift checks (10 categories):

1. **Package name** — every `npm install -g ...` line in editorial overlay must use `@kaitranntt/ccs`
2. **Port** — VK provider section must hardcode `8317` (CLIPROXY default)
3. **External-direct base URLs** — every provider with `baseUrlClass === "external-direct"` must have its `BASE_URL` mentioned in `ccs-provider-configuration-section.astro`
4. **Public commands** — every undocumented public root command flagged
5. **Runtime aliases** — `--target`, `ccs-droid`, `ccsd`, `ccs-codex`, `ccsx`, `ccsxp` must be documented
6. **User-visible subsystems** — every subsystem flagged `userVisible: true` must appear in guide
7. **CLIProxy providers** — every provider in `PROVIDER_CAPABILITIES` must appear in guide
8. **User-facing schemas** — every config schema with declared keywords must appear in guide
9. **CCS_SYNCED_VERSION pin** — literal in `ccs-cheatsheet-data.ts` must equal upstream `package.json` version (run `--sync` to bump)
10. **Cheatsheet coverage (structured)** — every public root command from upstream catalog must appear as a `cmd: "ccs <name>"` entry in the cheatsheet data file (parses TS literal directly, not keyword grep)

Add `--no-fetch` to any command to skip git fetch (use already-pulled state).

## How It Works

1. **Marker file**: `reference/.last-sync-ccs` stores last audited commit SHA
2. **Fetch** (sync mode): `git fetch origin main && git reset --hard origin/main` inside `reference/ccs/`
3. **Inventory** (Phase 0): enumerate `config/base-*.settings.json` → grep each profile in guide → classify
4. **CLI catalog parse**: regex-extract `ROOT_COMMAND_CATALOG`, `ROOT_HELP_TOPICS`, `ROOT_PROFILE_EXAMPLES`, `ROOT_COMPATIBLE_ALIAS_EXAMPLES`, all `*_SUBCOMMANDS`, all `*_FLAGS` from `command-catalog.ts`
5. **Architecture walk**: enumerate `src/*/`, count files (excluding `__tests__`/`__snapshots__`), peek `index.ts` JSDoc header
6. **Capability parse**: regex-extract `PROVIDER_CAPABILITIES` record + `QUOTA_SUPPORTED_PROVIDER_IDS` + model prefix routing
7. **Schema scan**: list `src/config/schemas/*.ts`, count exports, lookup by keyword in guide
8. **Diff** (`--report`/`--sync`): `git diff <last-sync>..HEAD --name-status` + commit log
9. **Categorize**: groups changed paths into 22 buckets (cli-surface, provider-capabilities, model-routing, config-schemas, profile-templates, deprecation-utils, cliproxy, targets, copilot, cursor-bridge, web-server-ui, package, changelog, docs, scripts, …)
10. **Snapshot** (`--sync`/`--validate`): builds per-provider config matrix combining auto-derived fields (env, authMode, baseUrlClass, runtimeAdapter) from upstream + editorial overlay (setupCommands, caveats) from `reference/ccs-provider-editorial.json`

## Per-Provider Snapshot

Tracks each supported provider with this schema:

| Field | Source | Example |
|---|---|---|
| `env` | upstream `config/base-<p>.settings.json` | `{ "ANTHROPIC_AUTH_TOKEN": "ccs-internal-managed", "ANTHROPIC_BASE_URL": "http://127.0.0.1:8317/cliproxy/v1" }` |
| `authMode` | derived heuristic + overrides | `cliproxy-managed-oauth` / `api-key` / `github-oauth` / `cursor-bridge` / `local-runtime` |
| `baseUrlClass` | derived from BASE_URL pattern | `internal-cliproxy` / `external-direct` / `unknown` |
| `runtimeAdapter` | overlay map | `src/targets/claude-adapter.ts`, `src/copilot/`, ... |
| `setupCommands` | editorial overlay | `["npm install -g @kaitranntt/ccs", "ccs", "ccs doctor"]` |
| `caveats` | editorial overlay | `["OAuth managed by CLIProxyAPI on port 8317", ...]` |

## Layout

```
skills/vk-audit-ccs/
├── SKILL.md                              # this file
├── scripts/
│   └── detect-ccs-changes.cjs            # CLI entry point + profile inventory + diff
└── lib/
    ├── ts-source-parser.cjs              # regex-based TS literal extractor
    ├── ccs-command-catalog.cjs           # CLI surface audit (commands/flags/topics/aliases)
    ├── ccs-architecture.cjs              # subsystem architecture audit
    ├── ccs-capabilities.cjs              # per-provider capability matrix audit
    └── ccs-schemas.cjs                   # config schemas audit
```

## Artifacts

| File | Committed? | Purpose |
|---|---|---|
| `reference/.last-sync-ccs` | ✅ | Last audited commit SHA |
| `reference/ccs/` | ❌ gitignored | Upstream mirror clone |
| `reference/ccs-provider-snapshots.json` | ❌ gitignored | Auto-built provider matrix (regenerate with `--sync`) |
| `reference/ccs-provider-editorial.json` | ✅ | User-curated `setupCommands` + `caveats` overlay |
| `reference/changelog-reports/{date}-ccs-changelog.md` | ✅ | Diff report |
| `reference/changelog-reports/{date}-ccs-inventory.md` | ✅ | Profile coverage matrix |
| `reference/changelog-reports/{date}-ccs-commands.md` | ✅ | CLI surface coverage |
| `reference/changelog-reports/{date}-ccs-architecture.md` | ✅ | Subsystem coverage |
| `reference/changelog-reports/{date}-ccs-capabilities.md` | ✅ | Per-provider capability matrix |
| `reference/changelog-reports/{date}-ccs-schemas.md` | ✅ | Config schema coverage |

## Impact Mapping

| ccs Path | VividKit Guide Files |
|---|---|
| `src/commands/command-catalog.ts`, `src/commands/help-command.ts` | `ccs-installation-and-quickstart-section.astro`, `ccs-features-and-integration-section.astro`, `src/i18n/{en,vi}/ccs.ts` |
| `src/cliproxy/provider-capabilities.ts` | `ccs-provider-configuration-section.astro`, `ccs-features-and-integration-section.astro` |
| `src/cliproxy/ai-providers/managed-model-prefixes.ts` | `ccs-provider-configuration-section.astro` (model→provider routing) |
| `src/config/schemas/**` | `ccs-features-and-integration-section.astro`, `ccs-provider-configuration-section.astro`, i18n |
| `src/config/loader/**`, `src/config/index.ts` | `ccs-features-and-integration-section.astro` |
| `config/base-*.settings.json` | `ccs-provider-configuration-section.astro`, i18n |
| `src/utils/*deprecation*.ts`, `src/cursor/constants.ts` (`LEGACY_CURSOR_PROFILE_NAME`) | `ccs-provider-configuration-section.astro` (deprecation banners), i18n |
| `src/cliproxy/**` | `ccs-provider-configuration-section.astro`, `ccs-features-and-integration-section.astro` |
| `src/targets/**` | `ccs-provider-configuration-section.astro`, `ccs-features-and-integration-section.astro` |
| `src/copilot/**` | `ccs-provider-configuration-section.astro` (`ghcp` profile block) |
| `src/cursor/**` | `ccs-provider-configuration-section.astro` (`cursor` profile block) |
| `src/auth/**` | `ccs-features-and-integration-section.astro` (account profiles) |
| `src/api/**`, `src/services/**` | `ccs-features-and-integration-section.astro` |
| `src/web-server/**`, `ui/**` | `ccs-dashboard-and-resources-section.astro` |
| `src/management/**` | `ccs-features-and-integration-section.astro` (doctor / repair) |
| `src/channels/**` | `ccs-features-and-integration-section.astro` (channels / websearch / thinking) |
| `bin/**`, `scripts/**`, `docker/**` | `ccs-installation-and-quickstart-section.astro` |
| `package.json` (version) | `ccs-installation-and-quickstart-section.astro`, i18n install snippets |
| `CHANGELOG.md` | `ccs-overview-section.astro`, `ccs-features-and-integration-section.astro` |
| `README.md`, `docs/**` | `ccs-overview-section.astro`, i18n |

## Profile Status Vocabulary

| Status | Meaning |
|---|---|
| `documented` | Source ships `base-<name>.settings.json` AND guide has a provider block + i18n keys |
| `missing` | Source ships profile but guide has no provider block (gap to close) |
| `orphan` | Guide references profile that no longer ships (cleanup target) |
| `deprecated` | Source ships profile but a deprecation file/symbol explicitly marks it (e.g. `glmt`, legacy `cursor`) — guide should show banner |
| `supported` | Source ships profile with no deprecation signal — normal documented entry |

## Config

| Item | Value |
|---|---|
| Repo URL | `https://github.com/kaitranntt/ccs` |
| Branch | `main` |
| Local clone | `reference/ccs/` |
| Marker file | `reference/.last-sync-ccs` |
| Reports dir | `reference/changelog-reports/` |
| Snapshot artifact | `reference/ccs-provider-snapshots.json` (gitignored) |
| Editorial overlay | `reference/ccs-provider-editorial.json` (committed) |

## Examples

```bash
# Phase 0: profile coverage baseline (no marker needed)
node skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs --inventory

# Audit CLI command surface only
node skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs --commands

# Audit subsystem architecture only
node skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs --architecture

# Audit per-provider capability matrix only
node skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs --capabilities

# Audit config schemas only
node skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs --schemas

# What changed since last sync?
node skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs --check

# Detailed report — runs ALL 4 audit passes + diff + inventory
node skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs --report

# Fetch latest + full report + update marker + refresh snapshot
node skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs --sync

# Already pulled manually — just report
node skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs --report --no-fetch

# CI drift gate — exits non-zero on any of the 8 drift categories
node skills/vk-audit-ccs/scripts/detect-ccs-changes.cjs --validate
```

## Sample Prompts

```
/vk:audit-ccs inventory current guide coverage
/vk:audit-ccs audit CLI command surface
/vk:audit-ccs audit subsystem architecture
/vk:audit-ccs audit per-provider capabilities
/vk:audit-ccs audit config schemas
/vk:audit-ccs sync latest ccs and propose CCS Guide updates
/vk:audit-ccs validate (CI drift gate)
```

## Output Files (per `--report` / `--sync` run)

- `reference/changelog-reports/{date}-ccs-changelog.md` — diff + impact map + proposals
- `reference/changelog-reports/{date}-ccs-inventory.md` — profile coverage matrix
- `reference/changelog-reports/{date}-ccs-commands.md` — CLI surface
- `reference/changelog-reports/{date}-ccs-architecture.md` — subsystem map
- `reference/changelog-reports/{date}-ccs-capabilities.md` — provider capability matrix
- `reference/changelog-reports/{date}-ccs-schemas.md` — config schema coverage

Marker is updated to current `HEAD` SHA only on `--sync`.

## Security

Read-only against `reference/ccs/` upstream mirror — script only fetches/resets, never writes back.
Never modifies CCS Guide source files; report-only output for human review.
Refuses requests to auto-apply guide updates or bypass the marker workflow.

# `ccs cliproxy` — Quota / Routing / Catalog

Source: `reference/ccs/src/commands/cliproxy/{quota,routing,catalog}-subcommand.ts`. Quota commands are dispatched as **sibling top-level cliproxy commands** (not nested under `quota`).

---

## `quota`

```
ccs cliproxy quota [--provider <name>|all] [-v|--verbose]
```

**What** — Aggregate live quota/usage across authenticated accounts per provider. Live-fetched every call; CCS does not persist usage.

**Supported providers** (`QUOTA_SUPPORTED_PROVIDER_IDS`): `agy`, `codex`, `claude`, `gemini`, `ghcp`.

**Flags**

| Flag | Purpose |
|---|---|
| `--provider <p>` | Canonical id, alias (via `mapExternalProviderName`), or `all` (default) |
| `--verbose`/`-v` | Verbose fetch output |

**How**
- Per requested provider, parallel `Promise.all` to provider-specific fetcher in `cliproxy/quota/`:
  - `agy` → `fetchAllProviderQuotas('agy')`
  - `codex` → `fetchAllCodexQuotas`
  - `claude` → `fetchAllClaudeQuotas`
  - `gemini` → `fetchAllGeminiCliQuotas`
  - `ghcp` → `fetchAllGhcpQuotas`
- Each hits upstream HTTP using stored OAuth tokens (paths via `getCcsDir()`); normalizes into `{success, windows|buckets|models|snapshots, ...}`.
- ASCII-only display: `formatQuotaBar` (`█`/`▓`/`░` width 20), `formatResetTime` (now/Ns/Nm/Nh/Nd).

### Per-provider rendering

| Provider | Renderer | Key fields | Window/bucket model |
|---|---|---|---|
| `agy` | `displayAntigravityQuotaSection` | default mark, label, tier, avg-quota%, status (PAUSED/COOLDOWN) | per-model `models[].percentage` |
| `codex` | `displayCodexQuotaSection` | plan badge, `coreUsage.fiveHour` + `weekly`, all `windows` | category=`usage|code-review|additional`, cadence=`5h|weekly`; legacy fallback via `getCodexWindowKind` + `inferCodeReviewCadence` |
| `claude` | `displayClaudeQuotaSection` | windows by `rateLimitType` | `five_hour`, `seven_day`, `seven_day_opus/sonnet/oauth_apps/cowork`, `overage`; weekly via `pickMostRestrictiveClaudeWeeklyWindow` |
| `gemini` | `displayGeminiCliQuotaSection` | projectId, tierLabel, rawTierId, creditBalance | `buckets[]` with `tokenType`, `remainingAmount`, `resetTime` |
| `ghcp` | `displayGhcpQuotaSection` | planType, `quotaResetDate` | `snapshots.{premiumInteractions,chat,completions}` filtered by `reported !== false` |

Failures via `displayQuotaFailure` → `getQuotaFailureDisplayEntries`: error → actionHint → `HTTP <s> | Code: <c> | Retryable` → optional Detail.

---

## `doctor` (alias `diag`)

```
ccs cliproxy doctor [-v|--verbose]
```

**What** — **Antigravity-only** deep diagnostic. Per-account model bars + shared GCP project warning + healthy-account summary.

**How** — `quotaResult.projectGroups` flags accounts sharing a project (failover useless when quota pooled).

---

## `default`

```
ccs cliproxy default <account> [--provider <provider>]
```

**What** — `setDefaultAccount(provider, id)` — provider defaults to `agy`. Account resolution via `findAccountByQuery` (id/email/nickname/substring).

---

## `pause`

```
ccs cliproxy pause <account> [--provider <provider>]
```

**What** — `pauseAccount`: sets `paused=true`, stamps `pausedAt`. Idempotent: warns if already paused.

---

## `resume`

```
ccs cliproxy resume <account> [--provider <provider>]
```

**What** — `resumeAccount`: clears paused state.

---

## Quota Persistence Model

CCS stores **only account state**, never usage:

| Concept | Owner | Storage |
|---|---|---|
| Window remaining % / reset | Upstream provider | Live HTTP each call |
| Manual pause / default / nickname / tier | CCS | Account JSON via `account-manager` (under `getCcsDir()`) |
| Cooldown (transient skip) | CCS runtime | `quota-manager` |
| Routing strategy | CLIProxy live + CCS config | HTTP PUT + `cliproxy.routing.strategy` |
| Session affinity (local only) | CCS config | `cliproxy.routing.session_affinity{,_ttl}` |
| Catalog merge | CCS service | `services/catalog-cache` |

**`resolveDisplayedTier`** prefers live `quota.entitlement.normalizedTier` over stored `account.tier`.

**Auto-rotation triggers** owned by CLIProxy itself. CCS knobs: `routing set`, `pause`, `resume`, `default`. Status icon thresholds (`>50% ok`, `>10% warn`, else fail) are cosmetic.

**Step-by-step — promote/sideline**
1. `ccs cliproxy quota` → identify red account.
2. `ccs cliproxy pause spam@gmail.com --provider agy`.
3. `ccs cliproxy default fresh@gmail.com --provider agy`.
4. Later: `ccs cliproxy resume spam@gmail.com --provider agy`.

---

## `routing`

```
ccs cliproxy routing                                # status
ccs cliproxy routing set <round-robin|fill-first>   # aliases: rr|roundrobin, ff|fillfirst
ccs cliproxy routing explain                        # static guide
ccs cliproxy routing affinity                       # affinity status
ccs cliproxy routing affinity <on|off> [--ttl 1h]
ccs cliproxy routing affinity --help
```

**What** — Single proxy-wide selector strategy + optional session-pinning for prompt-cache locality.

### Sub-actions

| Sub | Handler | Behavior |
|---|---|---|
| (default) | `handleRoutingStatus` | Strategy (live → fallback config) + affinity in parallel |
| `set <strategy>` | `handleRoutingSet` | `normalizeCliproxyRoutingStrategy` (rejects → exit 1 + guide); `applyCliproxyRoutingStrategy` |
| `explain` | `handleRoutingExplain` | Static printout |
| `affinity` | `handleRoutingAffinityStatus` | Affinity-only status |
| `affinity on\|off` | `handleRoutingAffinitySet` | Normalizes truthy values; `applyCliproxySessionAffinitySettings` |
| `affinity --help` | `handleRoutingAffinityHelp` | Usage + TTL examples |

### State Model — Local vs Remote

| Target | Strategy read | Strategy write | Affinity |
|---|---|---|---|
| Local | live HTTP → fallback `cliproxy.routing.strategy` | `mutateConfig` + `regenerateConfig` + best-effort live PUT (`applied: live-and-config` or `config-only`) | Config (`cliproxy.routing.session_affinity{,_ttl}`) |
| Remote | live HTTP only (no fallback) | live PUT only (`applied: live`) | **Unsupported** (upstream management API only exposes strategy) |

`getCliproxyRoutingTarget()` decides; HTTP details in `routing-strategy-http.ts`.

### Strategy Semantics

- `round-robin` — spread requests across matching accounts; even, predictable.
- `fill-first` — drain one available account before moving on; backups stay cold.

"Matching accounts" = upstream-filtered set (after paused/cooldown). CCS does not enumerate.

### Session Affinity

- TTL grammar: Go-duration via `GO_DURATION_PATTERN` (`ns|us|µs|μs|ms|s|m|h`); ≥1 positive segment.
- Recognition heuristics (text-only — upstream-runtime-dependent):
  1. Explicit session/thread id (Claude session UUID, `X-Session-ID`, provider thread id).
  2. Fallback: `metadata.user_id`, `conversation_id`.
  3. Last resort: stable key from opening prompt history.

### Routing Rule Grammar

| Field | Type | Origin | Default |
|---|---|---|---|
| `cliproxy.routing.strategy` | `'round-robin' \| 'fill-first'` | unified config | `round-robin` |
| `cliproxy.routing.session_affinity` | boolean | unified config | `false` |
| `cliproxy.routing.session_affinity_ttl` | Go duration | unified config | `1h` |

**Step-by-step — switch to fill-first**
1. `ccs cliproxy routing` → confirm current.
2. `ccs cliproxy routing set fill-first` (or `ff`).
3. Reads `Applied: live-and-config` if proxy is up.

**Step-by-step — pin chat for cache locality**
1. `ccs cliproxy routing affinity on --ttl 1h`.
2. Verify: `ccs cliproxy routing affinity`.
3. Disable: `ccs cliproxy routing affinity off`.

**Diagnose unreachable proxy** — Status shows `Source: saved startup default` + warning → CLIProxy down or not started.

---

## `catalog`

```
ccs cliproxy catalog [--json] [-v|--verbose]   # status (default)
ccs cliproxy catalog refresh [-v|--verbose]
ccs cliproxy catalog reset
ccs cliproxy catalog --json                    # priority over refresh/reset
```

**What** — Browses merged static-plus-live model catalog per provider. Refreshes from running CLIProxy management API. Emits JSON for downstream tools.

**Flags**

| Flag | Purpose |
|---|---|
| `--json` | Print resolved catalog as JSON; **takes priority over `refresh`/`reset`** (checked first) |
| `--verbose`/`-v` | Verbose: proxy target URL on `refresh`; per-model routing hints on status |

### Sub-actions

| Sub | Handler | Behavior |
|---|---|---|
| (default) | `handleCatalogStatus` | Cache age + per-provider count (+ `prefix X, N shadowed, N prefix-only`) |
| `refresh` | `handleCatalogRefresh` | `refreshCatalogFromProxy()`; prints `<live> -> <merged>` per provider + total |
| `reset` | `handleCatalogReset` | `clearCatalogCache()` — wipes live cache, falls back to static |
| (flag) `--json` | `handleCatalogJson` | `getAllResolvedCatalogs()` → `{provider: CatalogJsonModel[]}` |

### How

- `SYNCABLE_PROVIDERS` defines iteration order.
- Cache lives in `services/catalog-cache` (path not in scout — likely under `getCcsDir()`).
- Merge: static catalog (in repo) + live catalog (CLIProxy management API at resolved proxy target) → resolved catalog.
- Routing snapshot via `getCatalogRoutingSnapshot()` joins each model with `CliproxyProviderRoutingHints`: `prefix`, `shadowedCount`, `prefixOnlyCount`, per-model `pinnedAvailable`, `recommendedModelId`, `unprefixedStatus` (`safe` | `shadowed` | not advertised), `effectiveDisplayName`.
- Special note for `gemini`/`agy`: short prefix stays backend-pinned when unprefixed names overlap.

### `CatalogJsonModel` Shape

```ts
{
  id: string,
  name: string,
  tier?: 'free' | 'pro' | 'ultra',
  description?: string,
  deprecated?: boolean,
  deprecationReason?: string,
  broken?: boolean,
  issueUrl?: string,
  thinking?: ThinkingSupport,
  extendedContext?: boolean,
  nativeImageInput?: boolean,
}
```

Output: `{ [provider]: CatalogJsonModel[] }`. Optional fields omitted.

**Step-by-step**
- Browse: `ccs cliproxy catalog` → `-v` for ids + routing hints.
- "Cache: static only (no sync)" → `ccs cliproxy catalog refresh`.
- Programmatic: `ccs cliproxy catalog --json | jq '.codex'`.
- Force re-pull: `reset` → `refresh`.

---

## Window Cadence by Provider (Quota)

| Provider | Cadence |
|---|---|
| Codex | `5h` + `weekly` core; plus `code-review` and `additional` (GPT-5.3 Codex Spark) |
| Claude | `five_hour` + 7-day variants (`opus`, `sonnet`, `oauth_apps`, `cowork`) + `overage` |
| Gemini CLI | Buckets by `tokenType` with `resetTime` |
| Antigravity | Per-model percentages, no explicit reset |
| GHCP | 3 snapshots (premium interactions, chat, completions) with monthly `quotaResetDate` |

## Unresolved Questions

1. On-disk path of `services/catalog-cache` (vs in-memory).
2. Per-provider/account override of proxy-wide strategy — code suggests global only.
3. `parseProfileArgs` accepts `--model`, `--name`, `--force`, `--yes`/`-y` but quota/default/pause/resume never read them — dead args or shared with variant subcommand?
4. Remote CLIProxy session-affinity gap — roadmap status unknown.

# `ccs api` — API Profile Management

Source: `reference/ccs/src/commands/api-command/`. Manages **settings-based API profiles** (priority 3): direct API-key based providers (GLM, Kimi, OpenRouter, Anthropic direct, custom).

Router (`handler.ts`): `dispatchNamedCommand` over `create`, `list`, `discover`, `copy`, `export`, `import`, `remove` (aliases `delete`, `rm`).

## Profile Storage Model

| Layer | File | Purpose |
|---|---|---|
| Metadata | `~/.ccs/config.yaml` (unified) or `config.json` (legacy) | name, target, base URL, model mapping, refs |
| Per-profile env | `~/.ccs/<name>.settings.json` | `ANTHROPIC_BASE_URL`, `ANTHROPIC_AUTH_TOKEN`, `ANTHROPIC_MODEL`, etc. (all values strings — PowerShell parity) |

Three flavors surfaced in `list`:
1. **Settings-based profiles** (`config.profiles`) — `--preset` or fully manual. Backed by `<name>.settings.json`.
2. **CLIProxy bridge / variants** (`config.cliproxy`) — `--cliproxy-provider`. CCS does NOT store creds; CLIProxy owns them.
3. **CLIProxy hardcoded** (gemini, codex, agy) — discovered, not created via this command tree.

Lifecycle: `create` writes settings + config. `syncToLocalConfig()` mirrors to CLIProxy local config. `remove` deletes both. `copy` clones both. `export` serializes to `*.ccs-profile.json`. `import` validates + recreates.

## Available Presets

Source: `src/shared/provider-preset-catalog.ts` (`PROVIDER_PRESET_IDS`).

### Recommended

| ID | Base URL | Default Model | Auth | Notes |
|---|---|---|---|---|
| `openrouter` | `openrouter.ai/api` | `anthropic/claude-opus-4.5` | `sk-or-...` | Interactive model picker |
| `alibaba-coding-plan` | `coding-intl.dashscope.aliyuncs.com/apps/anthropic` | `qwen3-coder-plus` | `sk-sp-...` | Aliases `alibaba`, `acp` |
| `ollama` | `http://localhost:11434` | `qwen3-coder` | none | Placeholder key `ollama` |
| `llamacpp` | `http://127.0.0.1:8080` | `llama3-8b` | none | Placeholder key `llamacpp` |
| `anthropic` | `''` (native) | `claude-sonnet-4-5-20250929` | `sk-ant-api03-...` | Auto-strips api.anthropic.com |

### Alternative

| ID | Base URL | Default Model | Default Target | Special |
|---|---|---|---|---|
| `huggingface` (`hf`) | `router.huggingface.co/v1` | `openai/gpt-oss-120b:fastest` | **`droid`** | OpenAI-compatible |
| `glm` (`glmt` deprecated) | `api.z.ai/api/anthropic` | `glm-5` | claude | `glmt` warns + auto-maps |
| `km` (`kimi`) | `api.kimi.com/coding/` | `kimi-k2-thinking-turbo` | claude | `alwaysThinkingEnabled: true` |
| `foundry` | `<resource>.services.ai.azure.com/api/anthropic` | `claude-sonnet-4-5` | claude | Azure |
| `mm` (Minimax) | `api.minimax.io/anthropic` | `MiniMax-M2.1` | claude | 1M context |
| `deepseek` | `api.deepseek.com/anthropic` | `deepseek-chat` | claude | |
| `qwen` | `dashscope-intl.aliyuncs.com/apps/anthropic` | `qwen3-coder-plus` | claude | |
| `ollama-cloud` | `ollama.com` | `glm-5:cloud` | claude | |
| `novita` | `api.novita.ai/anthropic` | `deepseek/deepseek-v3.2` | claude | |

### Aliases (auto-mapped)

`glmt → glm`, `kimi → km`, `alibaba → alibaba-coding-plan`, `acp → alibaba-coding-plan`, `hf → huggingface`.

### CLIProxy providers (`--cliproxy-provider <id>`)

From `PROVIDER_CAPABILITIES`: `gemini`, `codex`, `agy`, `qwen`, `iflow`, `kiro`, `ghcp`, `claude`, `kimi`, `cursor`, `gitlab`, `codebuddy`, `kilo`.

---

## `create`

```
ccs api create [name]
              [--preset <id> | --cliproxy-provider <id>]
              [--base-url <url>] [--api-key <key>] [--model <model>]
              [--extra-models <m1,m2,...>]
              [--target claude|droid]
              [--1m | --no-1m]
              [--force] [--yes|-y]
```

**What** — Three modes: (1) Preset, (2) CLIProxy bridge, (3) Manual (interactive prompts).

**How** — Writes `<name>.settings.json` + config entry via `createApiProfile()` or `createCliproxyBridgeProfile()`. Then `syncToLocalConfig()` mirrors to CLIProxy local config (failure tolerated with `[i]`).

Validation: `validateApiName`, `validateUrl`, name-conflict check unless `--force`. Anthropic direct strips base URL.

**Flags**

| Flag | Purpose |
|---|---|
| `[name]` | Profile name (positional). Falls back to `preset.defaultProfileName` |
| `--preset <id>` | From catalog. Mutually exclusive with `--cliproxy-provider` |
| `--cliproxy-provider <id>` | Route through CLIProxy. Cannot combine with `--base-url`/`--api-key`/`--model`/`--preset` |
| `--base-url <url>` | API endpoint (manual mode) |
| `--api-key <key>` | Token. Optional for `requiresApiKey: false` presets |
| `--model <model>` | Default `ANTHROPIC_MODEL`. Allows dash values |
| `--extra-models <csv>` | Extra models exposed alongside `--model` |
| `--target claude\|droid` | Default runtime target |
| `--1m` | Append `[1m]` suffix to compatible Claude model IDs |
| `--no-1m` | Strip `[1m]` suffix |
| `--force` | Overwrite existing |
| `--yes`/`-y` | Skip interactive prompts |

`--1m` and `--no-1m` together → error.

**Step-by-step (preset path)**
1. `ccs api create --preset glm`
2. Resolve preset → name → conflict check → base URL.
3. Prompt for API key (using preset's `apiKeyHint`).
4. Resolve model (preset default; OpenRouter triggers picker).
5. Detect Claude mappings → `[1m]` opt-in (unless `--yes` or already set).
6. Resolve target (preset's `defaultTarget` if set, else `claude` under `--yes`, else prompt).
7. `createApiProfile()` → `syncToLocalConfig()`.
8. Print boxed summary + usage hints.

**Notes**
- `--1m` / `--no-1m` via `applyClaudeExtendedContextPreference`. Only mutates Claude IDs (`isClaudeModelId` + `likelySupportsClaudeExtendedContext`). CCS only writes the suffix; provider entitlement still gates 429s.
- OpenRouter: `pickOpenRouterModel()` returns `{model, tierMapping}` for Opus/Sonnet/Haiku.
- `glmt` preset prints deprecation warning + auto-maps to `glm`.
- Custom model mapping prompt offers per-tier (Opus/Sonnet/Haiku) when non-default + not `--yes`.
- Anthropic direct: if `baseUrl` contains `api.anthropic.com` and no preset → URL emptied for native auth.
- `applyRepeatedOption` allows flag to appear multiple times (last wins).

---

## `list`

```
ccs api list
```

**What** — Tabular display of settings-based profiles + CLIProxy variants.

**How** — `listApiProfiles()` returns `{profiles, variants}`. Renders two tables: profiles (Name | Target | Settings/Config | Status) and CLIProxy variants (Variant | Provider | Target | Settings).

**Notes**
- Header for column 3 toggles "Config" (unified) / "Settings File" (legacy).
- Column widths shrink under unified config.
- Rejects positionals + unknown flags.

---

## `discover`

```
ccs api discover [--register] [--target <cli>] [--json] [--force]
```

**What** — Scans `~/.ccs/` for orphan `*.settings.json` files (settings file present, no config registration). Optionally registers them.

**How** — `discoverApiProfileOrphans()` returns orphan list with validation. With `--register`, calls `registerApiProfileOrphans({target, force})`.

**Flags**

| Flag | Purpose |
|---|---|
| `--register` | Register orphans (otherwise dry-run) |
| `--target <cli>` | Default target for registered profiles (default `claude`) |
| `--json` | Machine-readable output |
| `--force` | Bypass validation when registering |

**Notes** — JSON mode prints raw discovery result (skips header/table render).

---

## `copy`

```
ccs api copy <source> <destination> [--target <cli>] [--force] [--yes|-y]
```

**What** — Duplicates an API profile (settings.json + config entry).

**How** — `copyApiProfile(source, dest, {target, force})`. Both source and dest are positionals.

**Step-by-step**
1. `ccs api copy glm glm-backup`
2. Confirm prompt unless `--yes`.
3. Writes new settings + config entry.

---

## `export`

```
ccs api export <name> [--out <file>] [--include-secrets]
```

**What** — Serializes profile to portable JSON bundle. Token redacted by default.

**How** — `exportApiProfile(name, includeSecrets)` returns `{bundle, redacted}`. Writes to `--out` or `<name>.ccs-profile.json` in cwd. `mkdirSync(recursive)` ensures parent.

**Flags**

| Flag | Purpose |
|---|---|
| `--out <file>` | Custom output path. Allows leading dashes |
| `--include-secrets` | Include `ANTHROPIC_AUTH_TOKEN` (else redacted) |

---

## `import`

```
ccs api import <file> [--name <new>] [--target <cli>] [--force] [--yes|-y]
```

**What** — Imports an exported `*.ccs-profile.json`. Validates schema, registers profile, writes settings.json.

**How** — `fs.readFileSync` + `JSON.parse`. Confirmation prompt unless `--yes`. `importApiProfileBundle(bundle, {name, target, force})`. Validation issues rendered with `[X]`/`[!]`.

**Flags**

| Flag | Purpose |
|---|---|
| `<file>` | Required path |
| `--name <new>` | Override on import (rename) |
| `--target` | Override target |
| `--force` | Bypass validation / overwrite |
| `--yes`/`-y` | Skip confirm |

---

## `remove` (aliases `delete`, `rm`)

```
ccs api remove [name] [--yes|-y]
```

**What** — Deletes profile from config + removes `<name>.settings.json`.

**How** — If no name, lists APIs and prompts. Confirmation unless `--yes`. `removeApiProfile(name)` performs deletion.

---

## Cross-Cutting

**`--1m` extended context**
- Implemented in `shared.ts` + `extended-context-utils`. Only meaningful for Claude model IDs.
- Modes: enable (write `[1m]`), disable (strip), unset (preserve).
- Conflict `--1m --no-1m` → error.
- CCS controls only the saved suffix; provider entitlement still applies.

**Thinking / effort**
- No `--thinking`/`--effort` at `api` command level.
- Some presets carry `alwaysThinkingEnabled: true` (only `km`).
- Preset schema allows `extraEnv` and `alwaysThinkingEnabled` but no current preset uses `extraEnv`.

**Browser / OAuth**
- `api` does not open browser. CLIProxy provider OAuth lives under `ccs cliproxy login` / `ccs <provider> --auth`.

**Env-export interplay**
- Profile env in `<name>.settings.json` is consumed by runtime spawn via `ccs <name> ...`.
- `ccs env` handles env-export — see [operations.md](operations.md).

**Target adapter**
- `parseTargetValue` validates against `isPersistedTargetType`.
- Persisted targets: `claude`, `droid`. Codex is runtime-only via `--target codex` (not persisted).

## Unresolved Questions

- `extraEnv` field exists on preset schema but no current preset populates it — likely a hook for future thinking/effort env injection.

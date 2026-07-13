# AgentKit mechanics probe summary

**Probed with:** `ak 2.2.0-beta.17` (beta) on 2026-07-13  
**Purpose:** Evidence for rewriting `/guides/claude-mechanics` — do **not** treat CK-era `ck init` project trees as AgentKit truth.

## Ownership model (confirmed)

| Step | Command | What appears on disk |
|------|---------|----------------------|
| Greenfield project | `ak new <name>` | `.agentkit/ownership.json`, `.agentkit/project.yaml`, stub `README.md` |
| Adopt existing dir | `ak init` | `.agentkit/ownership.json` (may track 0 files if empty) |
| Kit content | `ak kit init <kit> --target …` | Adapter plugin/output tree — **not** the old CK “dump into `./.claude/skills`” layout |

`ak init` / `ak new` do **not** install Engineer/Marketing kit skills. Kit install is a separate lifecycle.

## Claude Code kit output (scenario F, `--build-only`)

Verified via remote build (no home mutation):

```text
ak-engineer/
  .claude-plugin/plugin.json   # name: ak-engineer, version 0.2.0
  .agentkit/                   # schemas, scripts, output-styles
  agents/                      # 16 agent defs
  hooks/                       # hooks.json + *.cjs
  rules/                       # 7 workflow rules
  skills/ak-*/                 # 91 skills
```

- `filesWritten`: 1404  
- Requires paid remote kit + `ak login` + `--remote` on this channel  
- Canonical install-path helper reports: `~/.claude/plugins/ak-engineer` (user/global plugin layout)

## Codex kit output (scenario E, `--build-only`)

```text
engineer/
  .codex-plugin/plugin.json
  .codex/                      # AGENTS.md, config.toml, agents/, hooks/
  .agentkit/
  .agents/skills/…             # also mirrored under skills/ in build out
  skills/ak-*/
```

- `filesWritten`: 2747, `skillsSelected`: 91

## Gaps / machine-specific

1. **Project-scoped Claude Code install** previewed `./ak-engineer` but failed: native engineer already active at **user** scope — needs intentional `--switch-to-plugin` (not run in probe).
2. **Global install** not re-executed (avoid mutating `~/.claude`).
3. **`ak new --template engineer`** not captured as a primary fixture; treat as secondary shortcut in docs only.

## Docs implications for `/guides/claude-mechanics`

1. Teach **two steps**: project onboarding (`ak new` / `ak init`) then kit install (`ak kit init … --target …`).
2. Show **plugin-shaped** kit trees (agents / hooks / rules / skills), not CK-era root `CLAUDE.md` + `.claude/skills` from `ck init`.
3. Keep CLAUDE.md / config-hierarchy sections as Claude Code mechanics; separate from AgentKit ownership.
4. Point destructive/refresh guidance at `ak kit refresh` + coexistence — not CK `--fresh`.
5. Archive the old `ck init` tree under `/legacy/guides/claude-mechanics` (later PR).

## Source artifacts

- `META.json` — version, commands, gaps  
- `SUMMARY.json` — machine-readable scenario status  
- `scenarios/*/tree*.txt` + slim `envelope.json`

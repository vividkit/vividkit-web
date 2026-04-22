# /ck:agentize — Codebase to Agent-Tool Converter

Source: `reference/beta/claude/skills/agentize/SKILL.md` (v1.0.0)

## Authoritative Flow

```
Phase 0: Track      → /ck:project-management creates plan + tasks
Phase 1: Scout      → /ck:scout maps entry points, capabilities, secrets
Phase 2: Analyze    → Build Agentization Map (capability × value matrix)
Phase 3: Decide     → Resolve mode (both/mcp/cli) + tool/command list
Phase 4: Scaffold   → Create monorepo layout (core/ cli/ mcp/)
Phase 5: Wrap       → Extract core, add CLI + MCP adapters
Phase 6: Harden     → Tests, CI, docs, companion skill, security pass
Phase 7: Package    → Handoff release checklist + decision record
```

## Mode Selection

| Dim | Flag | Output |
|-----|------|--------|
| Surface | `--both` (default) / `--mcp` / `--cli` | What to build |
| Interaction | `--auto` (default) / `--ask` | Autonomous vs challenge-user |

Intent detection: "MCP only" → `--mcp` · "CLI only" → `--cli` · "ask me" → `--ask` · else → `--both --auto`.

## Hard Gates

- Phase 0 must run before Phase 1 (no work without tracked plan)
- Phase 1 must complete before Phase 2 (no invented behavior)
- Phase 3 must resolve output mode before Phase 4

## Skills Activated

| Phase | Skill |
|-------|-------|
| 0 | ck:project-management |
| 1 | ck:scout |
| 6 | ck:test, ck:docs, ck:skill-creator |

## Deliverables

| Artifact | Location |
|----------|----------|
| Monorepo | `packages/{core,cli,mcp}/` |
| Decision record | `plans/reports/agentize-decisions-<slug>.md` |
| Release checklist | `plans/<plan-dir>/release-checklist.md` |
| Companion skill | `claude/skills/<tool-name>/` (marketplace-ready) |
| Docs | `docs/{cli,mcp,architecture,contributing}.md` |
| CI | `.github/workflows/{ci,release}.yml` |

## MCP Transports

stdio (local) · SSE (legacy HTTP) · Streamable HTTP (remote/PaaS). Select via `--transport` or `MCP_TRANSPORT` env.

## Credentials Resolution (CLI + stdio MCP)

1. `--api-key` flag (never logged)
2. Process env
3. `.env.local` → `.env.<NODE_ENV>` → `.env`
4. XDG user config (`~/.config/<tool>/config.json`)
5. Project config (`./.<tool>rc.json`)
6. OS keychain (`keytar` after `login`)

SSE/HTTP MCP: bearer token required, reject unauth.

## Exit Codes (CLI)

`0` ok · `1` user error · `2` auth · `3` network · `4` runtime

## Critical Rules

- Build workflows, not endpoint mirrors (consolidate multi-step flows)
- Optimize output for limited agent context (concise by default, `--detailed` opt-in)
- Actionable errors (teach agent how to recover)
- Redact secrets in all logs; `doctor` reports resolution layer without values
- Tool name = verb-noun snake_case (`list_x`, `create_y`)
- Mark mutating vs read-only tools in description
- `provenance: true` on npm publish, no postinstall scripts

## Error Recovery

- Nothing exposable → propose refactor target first
- Core can't extract cleanly → scope to one module
- Browser-only → drop CLI, ship MCP Streamable HTTP only
- No side effects → drop MCP, CLI only
- Unclear credentials in `--auto` → switch that axis to `--ask`

## Workflow Position

Typically follows `/ck:scout` (after codebase discovery). Typically precedes `/ck:cook` (for remaining impl). Related: `/ck:mcp-builder` (from-scratch MCP), `/ck:skill-creator` (companion skill).

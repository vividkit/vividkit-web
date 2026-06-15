# /ck:agentize - Codebase to CLI/MCP Wrapper

Source: local `ck:agentize` skill.

## Authoritative Flow

1. Track: create plan folder, task state, active context, and invocation args.
2. Scout: map entry points, capabilities, I/O, side effects, config, credentials, runtime, deps, and tests.
3. Analyze: write an agentization map and keep only high-value CLI/MCP capabilities.
4. Decide: resolve output mode, command/tool names, transports, deploy targets, and package metadata.
5. Scaffold: create monorepo or single-package layout with a shared core boundary.
6. Wrap: extract core behavior, then add thin CLI and/or MCP adapters.
7. Harden: run tests, CI, docs, companion skill, and security pass.
8. Package: deliver publishable packages, docs, CI, companion skill, and release checklist.

## Skills Activated

| Type | Skill |
|------|-------|
| Mandatory | `ck:project-management`, `ck:scout` |
| Mandatory hardening | `ck:test`, `ck:docs`, `ck:skill-creator` |
| Conditional | `ck:deploy`, `ck:security`, `ck:mcp-builder` |

## Sub-agents

No fixed sub-agent is mandatory. Researcher or planner roles may be delegated when discovery or package design needs isolated analysis.

## Mode Selection

| Mode | Meaning |
|------|---------|
| `--both` | Default. Build shared core plus CLI and MCP packages. |
| `--mcp` | Build MCP server only. |
| `--cli` | Build CLI package only. |
| `--auto` | Default. Decide and proceed, recording decisions. |
| `--ask` | Analyze first, then block for clarifying/challenge answers. |

Intent text can imply modes: "MCP only" routes to `--mcp`, "CLI only" routes to `--cli`, and "ask me" routes to `--ask`.

## Hard Gate

- No wrapping before tracking and scouting.
- Do not invent behavior not read from source.
- Output mode must be resolved before scaffolding.
- `--ask` blocks for user answers.
- Unclear credentials in `--auto` switch only that axis to ask mode.
- Harden phase is mandatory: tests, CI, docs, companion skill, and security pass.
- Stop if there is nothing exposable, scope down if core cannot be extracted cleanly, and block release if marketplace metadata is incomplete.

## Artifacts

- `plans/<dated-plan>/plan.md`
- `plans/reports/agentize-decisions-<slug>.md`
- `plans/<plan-dir>/release-checklist.md`
- `packages/core`, `packages/cli`, `packages/mcp` for `--both`
- `docs/cli.md`, `docs/mcp.md`, `docs/architecture.md`, `docs/contributing.md`
- `.github/workflows/ci.yml`, `.github/workflows/release.yml`
- Companion skill and optional deploy files such as `wrangler.toml`, `Dockerfile`, or compose samples.

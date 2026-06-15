# /ck:docs - Project Documentation Management

Source: local `ck:docs` skill.

## Authoritative Flow

1. Default or unclear args ask the user to choose `init`, `update`, or `summarize`.
2. `init`: scan existing dirs and LOC, activate scout, merge reports, spawn docs-manager, create/update README and core docs, then size check.
3. `update`: scan dirs and LOC, read existing docs in parallel when needed, spawn docs-manager, update docs, size check, and run hallucination validation.
4. `summarize`: activate scout, update `docs/codebase-summary.md`, and return summary. Full codebase scan only when explicit.

## Skills Activated

| Type | Skill / Agent |
|------|---------------|
| Mandatory | `ck:project-organization`, `ck:scout` |
| Agent | `docs-manager` |
| Optional diagrams | `ck:tech-graph`, `ck:preview --diagram` |
| Validation | `wc -l`, docs validation script |

## Sub-agents

`docs-manager` is mandatory for `init` and `update`. The main agent may spawn doc readers for larger existing docs sets; sub-agents cannot spawn sub-agents.

## Mode Selection

| Mode | Meaning |
|------|---------|
| default | Ask which operation to run. |
| `init` | Create or refresh README and core docs. |
| `update` | Update existing project docs from current codebase. |
| `summarize` | Update `docs/codebase-summary.md`. |
| `summarize <topic> true` | Focused summary with explicit full scan. |

## Hard Gate

- Docs only; no implementation.
- `docs-manager` is required for init/update.
- Oversized docs require user choice: split now or accept.
- Validation warnings are non-blocking.
- Output path/layout decisions use project organization rules.

## Artifacts

- `README.md`.
- `docs/project-overview-pdr.md`.
- `docs/codebase-summary.md`.
- `docs/code-standards.md`.
- `docs/system-architecture.md`.
- `docs/project-roadmap.md`.
- Optional `docs/deployment-guide.md` and `docs/design-guidelines.md`.

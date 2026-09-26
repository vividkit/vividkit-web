---
name: vk:audit-ak-workflows
description: >
  Audit AgentKit skills USED in VividKit Workflows guide cards. Rebuilds the
  reverse skill→workflow index, fingerprints kit SKILL.md (cheatsheet fallback),
  detects drift vs pins, writes proposals. Never edits src/. Module of
  /vk:audit-ak-guides for the /guides/agentkit/workflows route.
user-invocable: true
when_to_use: "After AgentKit kit/skill updates, after editing agentkit-workflows data, or when vk:audit-ak-guides flags the workflows route."
argument-hint: "[--rebuild-index | --check | --report | --sync] [--kit-root <path>] [--repo <path>]"
metadata:
  author: vividkit
  version: "1.1.0"
---

# vk:audit-ak-workflows

Owns the **skill-in-workflow graph** for `/guides/agentkit/workflows`
(`src/data/guides/agentkit-workflows/`). Detects when frontmatter (flags,
argument-hint, description) drifts for skills in recommended chains.

Does **not** own full kit inventory, skill-detail pages, or top-level AgentKit
install/CLI pages. Never edits `src/**`.

| Skill | Owns |
| --- | --- |
| `vk:audit-ak-guides` | Public umbrella; this module covers `/workflows` |
| `vk:audit-ak-skills` | Cheatsheet + skill-detail pages |
| **this skill** | Skills **used in workflow cards** → fingerprint drift |

## New session

Claude: `/vk:audit-ak-workflows --check`  
Codex: `$vk:audit-ak-workflows --check`

```text
/vk:audit-ak-workflows --check

--repo /Users/thieunv/projects/personal/vividkit-web
--kit-root /Users/thieunv/projects/contribution/agentkit/ak-cli

git fetch ak-cli first if fingerprinting kit SKILL.md.
Do not --sync until the report is reviewed. Never edit src/.
```

`--report`:

```text
/vk:audit-ak-workflows --report
--repo <vividkit-root> --kit-root <ak-cli>
Write reference/changelog-reports/{date}-ak-workflows-audit.md.
Do not --sync. Do not edit src/.
```

`--rebuild-index` after workflow data edits; `--sync` only after human review of the report.

Same via pnpm: `AK_CLI=<ak-cli> pnpm run audit:ak-workflows` (`--check` only; without `AK_CLI` it fingerprints the installed kit).

Script (either discovery copy):

```bash
node skills/vk-audit-ak-workflows/scripts/detect-workflow-skill-drift.cjs --check --repo <vividkit> --kit-root <ak-cli>
```

## Modes

| Flag | Meaning | Exit |
| --- | --- | --- |
| `--rebuild-index` | Parse workflow data → `reference/ak-workflow-skill-index.json` | |
| `--check` | Fail on drift / unknown refs (no `src/` writes) | 0 ok, 1 drift/broken refs, 2 usage |
| `--report` | Write `reference/changelog-reports/{YYYY-MM-DD}-ak-workflows-audit.md` | |
| `--sync` | Refresh `reference/ak-workflow-skill-pins/{slug}.json` after review. Never `src/` | |
| `--kit-root <path>` | Extra root for kit `SKILL.md` trees | |
| `--repo <path>` | VividKit root (default: walk from cwd) | |

## Fingerprint source

First hit wins:

1. ak-cli checkout (`--kit-root` or `AK_CLI`): `SKILL.md` from local git refs `origin/main` (stable) / `origin/dev` (beta), resolved through `kit.yaml` like the inventory checker. Does not fetch — `git fetch` ak-cli first.
2. `--kit-root` pointing at a plain skills dir: `{kit-root}/ak-{slug}/SKILL.md`.
3. Repo-installed kit (`.agents/skills/ak-{slug}/`, `.claude/skills/ak-{slug}/`) when no ak-cli root is given. This measures the local install, not ak-cli.
4. Cheatsheet fallback: `src/data/guides/agentkit-skills-cheatsheet.ts`

Fields: `name`, `description`, `when_to_use`, `argument-hint`, `version` (kit) **or** `description` + `argumentHint` + `flags` + `subcommands` (cheatsheet).

## Artifacts

| Path | Role |
| --- | --- |
| `reference/ak-workflow-skill-index.json` | Reverse index skill → workflows |
| `reference/ak-workflow-skill-pins/` | Last-reviewed fingerprints |
| `reference/changelog-reports/*-ak-workflows-audit.md` | Proposals |

## Cadence

1. After workflow data edits: `--rebuild-index` then `--check`
2. After kit updates: `--report` → review → `--sync` → `--check`
3. Full AgentKit site: `/vk:audit-ak-guides --check` (this module is step 4)

## Stop

Never write `src/**`. Never `git reset --hard`. Never `--sync` without a reviewed report.

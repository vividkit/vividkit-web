---
name: vk:audit-ak-skills
description: >
  Audit VividKit AgentKit skill guides: cheatsheet vs ak-cli kit.yaml,
  SKILL.md fingerprints, and /guides/agentkit/skills detail pages vs kit
  SKILL.md and same-kit ak-docs. Use after AgentKit kit/docs updates, or
  when the cheatsheet, Beta Preview, or a skill page looks stale or wrong.
user-invocable: false
when_to_use: "Internal module of /vk:audit-ak-guides. Do not use as the public AgentKit guide audit."
argument-hint: "[--check | --report | --update] [--kit engineer|marketing|all] [--kit-root <ak-cli>] [--ak-docs <ak-docs>] [--repo <vividkit-root>]"
metadata:
  author: vividkit
  version: "1.1.0"
---

# vk:audit-ak-skills


Owns **visual skill-detail pages** at
`/guides/agentkit/skills/{engineer|marketing}/{id}` authored in
`src/data/guides/agentkit-skill-details/`.

`--check` also runs kit-tree inventory first (cheatsheet vs ak-cli `kit.yaml`
+ fingerprints). Inventory authority:
`reference/ak-docs-skills-meta/README.md`.

Does **not** own workflow cards or top-level AgentKit install/CLI pages.

| Skill | Owns |
| --- | --- |
| `vk:audit-ak-guides` | Public umbrella for every AgentKit guide route |
| `vk:audit-ak-workflows` | Skills used in workflow cards |
| **this skill** | Detail pages + kit inventory / cheatsheet dual-list |

Read [references/authority.md](references/authority.md) before judging a flag
or safety claim. Read [references/authoring.md](references/authoring.md) before
editing a detail TS file.

## New session

Runtimes discover this skill from `.claude/skills/` and `.agents/skills/`, not
from `skills/` alone. Those dirs are gitignored. After clone, once:

```bash
ln -sfn ../../skills/vk-audit-ak-skill-details .claude/skills/vk-audit-ak-skill-details
ln -sfn ../../skills/vk-audit-ak-skill-details .agents/skills/vk-audit-ak-skill-details
```

Restart Claude Code / Codex. Then:

| Runtime | Invoke |
| --- | --- |
| Claude Code / Cursor | `/vk:audit-ak-skills --check` |
| Codex | `$vk:audit-ak-skills --check` |

Required in the same turn (edit paths):

```text
/vk:audit-ak-skills --check

git fetch the ak-cli checkout first (this skill does not fetch).
--kit-root /Users/thieunv/projects/contribution/agentkit/ak-cli
--ak-docs /Users/thieunv/projects/contribution/agentkit/ak-docs

Do not --write-lock until I review onlyKit / contract-updated / package-updated.
If later claim checkers fail on unrelated pages, stop after inventory.
```

`--report` (continues after checker failures). `--ak-docs` optional: without it, skips the ak-docs table checker (reduced coverage).

```text
/vk:audit-ak-skills --report --kit all

git fetch ak-cli first.
--kit-root /Users/thieunv/projects/contribution/agentkit/ak-cli
--ak-docs /Users/thieunv/projects/contribution/agentkit/ak-docs
--repo /Users/thieunv/projects/personal/vividkit-web

Write reference/changelog-reports/{date}-ak-skill-details-audit.md.
Do not author every review candidate. Do not --write-lock.
```

`--update` (same paths; only patch verified wrong/missed):

```text
/vk:audit-ak-skills --update --kit all

git fetch ak-cli first.
--kit-root /Users/thieunv/projects/contribution/agentkit/ak-cli
--ak-docs /Users/thieunv/projects/contribution/agentkit/ak-docs
--kit engineer|marketing|all

Re-author only verified wrong/missed from kit SKILL.md + same-kit ak-docs.
Follow references/authoring.md. Never invent helper-CLI flags.
Then --check and pnpm run build. --write-lock only after that is clean.
```

Codex: replace `/vk:audit-ak-skills` with `$vk:audit-ak-skills`.
Narrow one kit with `--kit engineer` or `--kit marketing`.

Inventory-only (no detail-page claims):

```text
git fetch ak-cli, then AK_CLI=<ak-cli> npm run audit:ak-kit-inventory
Report onlyKit, onlyCatalog, beta-only, contract-updated, package-updated.
Do not write the lock.
```

## Paths

| Flag | Meaning |
| --- | --- |
| `--kit-root` | **Required.** ak-cli **git** checkout with `origin/main` (stable) and `origin/dev` (beta) |
| `--ak-docs` | Optional. Without it, `--report`/`--update` skip `check-ak-skill-detail-ak-docs.mjs`; claims skip docs Option/Mode tables |
| `--kit` | `engineer` \| `marketing` \| `all` (default `all`) |
| `--repo` | VividKit root (default: walk from cwd) |

`--kit-root` working tree can sit on `main`; inventory reads **git refs**, not the dirty tree.

## Commands

### `--check` (default)

Fails on the first non-zero. Does not write `src/` or locks.

1. `scripts/check-ak-kit-skill-inventory.mjs --kit-root <ak-cli>`
2. `scripts/check-ak-skill-detail-principles.mjs`
3. `scripts/check-ak-skill-details.mjs --kit-root <ak-cli>`
4. `scripts/check-ak-skill-detail-claims.mjs --kit-root <ak-cli> [--ak-docs] --kit <kit>`

Known: claims currently fail on ~13 pre-existing pages. That is not inventory drift.

### `--report`

Runs `--check` checkers plus `scripts/check-ak-skill-detail-ak-docs.mjs`, continues after failures, writes
`reference/changelog-reports/{YYYY-MM-DD}-ak-skill-details-audit.md`.
Do not author every review candidate wholesale.

### `--update`

Runs `--report`. Re-author only verified `wrong` / `missed` skill-level facts
([references/authoring.md](references/authoring.md)). Then `--check` and `pnpm run build`.

Flags only from kit `argument-hint` ∪ same-kit ak-docs Option/Mode tables.
Never fall back Marketing onto Engineer docs.

```bash
node scripts/check-ak-skill-details.mjs --kit-root <ak-cli> --write-lock
node scripts/check-ak-kit-skill-inventory.mjs --kit-root <ak-cli> --write-lock
pnpm run build
```

Browser-sample one 3-principle, one 4-principle, one 5-principle page in EN and VI,
plus composable-flags.

## Inventory drift → action

Full table: `reference/ak-docs-skills-meta/README.md`.

| Line | Do |
| --- | --- |
| `onlyKit` | Add cheatsheet row. `isBeta` only if beta-only |
| `onlyCatalog` | Drop from cheatsheet |
| `contract-updated` | Sync cheatsheet hint/flags; re-author detail page if it exists |
| `package-updated` | Tree-only (`references/`/scripts/assets); edit the page only if reader contract changed |
| `missing-package` | Broken kit path. Do not lock a null tree |

`--write-lock` only after the cheatsheet/pages match the report.

## Trigger examples

- "run skill tracking" / cheatsheet vs ak-cli
- "fact-check skill detail pages against ak-docs"
- "sync skill-detail guides with upstream"
- after bumping AgentKit kits or `git fetch` on ak-cli / ak-docs

## Stop

Never commit, push, open a PR, merge, or deploy unless the user asked.
Never publish generated prose as the page. Never cross Stable/Beta or kit
when resolving a source file.

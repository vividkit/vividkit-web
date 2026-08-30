---
name: vk-audit-ak-skill-details
description: >
  Track and update VividKit AgentKit skill-detail guide pages against upstream
  AgentKit SKILL.md and same-kit ak-docs. Use when the user asks to audit,
  fact-check, sync, or refresh /guides/agentkit/skills pages, invocation cards,
  hard gates, or skill-detail copy vs ak-cli kits or ak-docs; after an AgentKit
  kit or docs release; or when skill-detail pages look stale, missing, or wrong.
user-invocable: true
when_to_use: "After AgentKit kit/docs updates, or when skill-detail guide pages must match upstream."
argument-hint: "[--check | --report | --update] [--kit engineer|marketing|all] [--kit-root <ak-cli>] [--ak-docs <ak-docs>] [--repo <vividkit-root>]"
metadata:
  author: vividkit
  version: "1.0.0"
---

# vk-audit-ak-skill-details

Owns **visual skill-detail pages** at
`/guides/agentkit/skills/{engineer|marketing}/{id}` authored in
`src/data/guides/agentkit-skill-details/`.

This skill does **not** own CLI help snapshots, workflow-card graphs, or
channel capture/receipts.

| Skill | Owns |
| --- | --- |
| `vk-sync-ak-guides` / `vk-audit-ak` | Channel facts, cheatsheet meta, receipts |
| `vk-audit-ak-workflows` | Skills used in workflow cards |
| **this skill** | Per-skill visual detail pages vs kit `SKILL.md` + same-kit ak-docs |

Read [references/authority.md](references/authority.md) before judging a flag
or safety claim. Read [references/authoring.md](references/authoring.md) before
editing a detail TS file or the shared infographic renderer.

## Resolve paths

Require the VividKit repo root. Default `--repo` = walk from cwd.
`--kit-root` = AgentKit `ak-cli` checkout. `--ak-docs` = AgentKit `ak-docs` checkout.

```bash
node <skill-dir>/scripts/run.mjs check \
  --repo <vividkit-root> \
  --kit-root <ak-cli> \
  --ak-docs <ak-docs> \
  --kit all
```

## Commands

### `--check`

CI-friendly. Runs, in order, and fails on the first non-zero:

1. `scripts/check-ak-skill-details.mjs --kit-root <ak-cli>` — inventory/lock vs kit `SKILL.md`
2. `scripts/check-ak-skill-detail-principles.mjs` — EN/VI principle counts, no dummy copy
3. `scripts/check-ak-skill-detail-claims.mjs --kit-root <ak-cli> --kit <kit>` — invented flags vs `SKILL.md`
4. `scripts/check-ak-skill-detail-ak-docs.mjs --ak-docs <ak-docs> --kit <kit>` — same-kit structured docs tables

Does not write `src/`. Does not `--write-lock`.

### `--report`

Same checkers as `--check`, continue after failures, write
`reference/changelog-reports/{YYYY-MM-DD}-ak-skill-details-audit.md`
with dirty ids, missing same-kit mdx, and suggested review files.

Coverage snapshot (187 ids): `scripts/ak-docs-skill-detail-coverage.json`.

### `--update`

Only after `--check` or `--report` named dirty pages. Re-author those
`src/data/guides/agentkit-skill-details/{kit}/ak-*.ts` files using
[references/authoring.md](references/authoring.md). Then:

```bash
node <vividkit-root>/scripts/check-ak-skill-details.mjs --kit-root <ak-cli> --write-lock
node <vividkit-root>/scripts/check-ak-skill-detail-principles.mjs
node <vividkit-root>/scripts/check-ak-skill-detail-claims.mjs --kit-root <ak-cli> --kit all
npm run build
```

Browser-sample at least one 3-principle, one 4-principle, and one 5-principle
page in EN and VI, plus the composable-flags section.

Do not invent helper-script CLI flags as skill options. Do not fallback
Marketing pages onto Engineer docs.

## Trigger examples

- "fact-check skill detail pages against ak-docs"
- "sync skill-detail guides with upstream"
- "ak-plan page is missing flags / hard gate"
- after bumping AgentKit kits or pulling `ak-docs`

## Stop

Never commit, push, open a PR, merge, or deploy unless the user asked.
Never publish generated prose as the page. Never cross Stable/Beta or kit
when resolving a source file.

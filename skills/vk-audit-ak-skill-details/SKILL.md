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

CI-friendly. Fails on the first non-zero:

1. `scripts/check-ak-skill-detail-principles.mjs`
2. `scripts/check-ak-skill-details.mjs --kit-root <ak-cli>`
3. `scripts/check-ak-skill-detail-claims.mjs --kit-root <ak-cli> --ak-docs <ak-docs> --kit all`

Allowed invocation tokens = kit `SKILL.md` ∪ same-kit ak-docs Option/Mode/Input tables.
Marketing pages without an `invocation` block are report-only until those pages gain one.

Does not write `src/`. Does not `--write-lock`. Same-kit table *missed* tokens are `--report` only (helper CLIs stay off skill pages).

### `--report`

Runs `--check` checkers plus `scripts/check-ak-skill-detail-ak-docs.mjs`, continues after failures, writes
`reference/changelog-reports/{YYYY-MM-DD}-ak-skill-details-audit.md`
with checker exits, **review candidates** (advisory table/locale deltas), and **missing same-kit MDX**.
Do not author every review candidate wholesale.

Coverage snapshot: `scripts/ak-docs-skill-detail-coverage.json`.

### `--update`

Runs `--report` and prints review candidates. Re-author only verified `wrong`/`missed` skill-level facts using
[references/authoring.md](references/authoring.md). After edits, re-run `--check` and `npm run build`.


```bash
node <vividkit-root>/scripts/check-ak-skill-details.mjs --kit-root <ak-cli> --write-lock
node skills/vk-audit-ak-skill-details/scripts/run.mjs check --kit-root <ak-cli> --ak-docs <ak-docs> --kit all
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

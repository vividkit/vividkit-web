---
name: vk:audit-ak-guides
description: >
  Public umbrella audit for every VividKit AgentKit guide page. Discovers EN+VI
  /guides/agentkit routes, requires parity, runs kit inventory + skill-detail
  + workflow checkers, and fails while any identity has no operational owner.
  Use for a comprehensive AgentKit guide audit after a kit bump, or before
  claiming guides are in sync.
user-invocable: true
when_to_use: "Comprehensive audit of AgentKit guide pages; after kit/docs updates."
argument-hint: "[--check] [--kit-root <ak-cli>] [--ak-docs <ak-docs>] [--repo <vividkit-root>]"
metadata:
  author: vividkit
  version: "1.1.0"
---

# vk:audit-ak-guides

Public entry for **all** `/guides/agentkit` pages (EN identity + VI twin).
Modules do the owned checkers. This skill **fails if any identity is uncovered
or an owned checker is red**.

Only `--check` exists. No `--write-lock`. Does not fetch.

| Identity | Owner | Checker |
| --- | --- | --- |
| `/guides/agentkit/skills` | `vk:audit-ak-skills` | kit.yaml inventory + fingerprints |
| `/guides/agentkit/skills/[kit]/[skill]` | `vk:audit-ak-skills` | inventory **and** detail/claims runner |
| `/guides/agentkit/workflows` | `vk:audit-ak-workflows` | workflow index + pins (`--repo --kit-root`) |
| Every other `/guides/agentkit/*` | `(none)` | **uncovered** |

`vk-audit-ak` / `vk-sync-ak-guides` are not owners in this project.

Last live shape: 17 identities, EN↔VI parity ok, 14 uncovered, skill-detail
often `owned-fail` (pre-existing claims). Exit 1 is expected.

## New session

```bash
ln -sfn ../../skills/vk-audit-ak-guides .claude/skills/vk-audit-ak-guides
ln -sfn ../../skills/vk-audit-ak-guides .agents/skills/vk-audit-ak-guides
```

Restart Claude / Codex.

```text
/vk:audit-ak-guides --check

git fetch ak-cli first (does not fetch).
--kit-root /Users/thieunv/projects/contribution/agentkit/ak-cli
--ak-docs /Users/thieunv/projects/contribution/agentkit/ak-docs

Expect exit 1 while any identity is uncovered or owned-fail.
Do not --write-lock. Do not claim the AgentKit guides audit is complete.
```

Codex: `$vk:audit-ak-guides --check`.

```bash
git -C "$AK_CLI" fetch
AK_CLI="$AK_CLI" npm run audit:ak-guides
```

## `--check`

1. Walk `src/pages/guides/agentkit` and `src/pages/vi/guides/agentkit`. Fail on EN↔VI identity mismatch.
2. `scripts/check-ak-kit-skill-inventory.mjs --kit-root` (cheatsheet vs kit.yaml + fingerprints).
3. `skills/vk-audit-ak-skill-details/scripts/run.mjs check` (principles, SKILL.md lock, claims). Not inventory alone.
4. `vk:audit-ak-workflows --check --repo --kit-root`.
5. Identities with owner `(none)` stay **uncovered**.
6. Exit 1 if uncovered or owned-fail.

`--kit-root` required (or `AK_CLI`). `--ak-docs` optional; forwarded to the detail runner. `--repo` optional (walk from cwd).

## Stop

Never commit/push/PR unless asked. Never `git reset --hard` reference clones.
Never report the audit complete while uncovered or owned-fail identities remain.

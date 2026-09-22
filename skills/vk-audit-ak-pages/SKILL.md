---
name: vk:audit-ak-pages
description: >
  Operational owner for top-level /guides/agentkit pages except skills and
  workflows: index, install/CLI/config/update, cutover, desktop, helper,
  statusline, troubleshooting. Checks identity registry, backing files, and
  CLI cheatsheet command names vs ak-cli cobra Use tree. Module of
  /vk:audit-ak-guides.
user-invocable: false
when_to_use: "Internal module of /vk:audit-ak-guides for non-skills AgentKit guide routes."
argument-hint: "[--check] [--kit-root <ak-cli>] [--repo <vividkit-root>]"
metadata:
  author: vividkit
  version: "1.0.0"
---

# vk:audit-ak-pages

Owns every `/guides/agentkit/*` identity **except** skills cheatsheet, skill
detail, and workflows.

Does **not** fact-check migrate/cutover safety prose, Desktop App purchase
copy, or community Helper TUI internals. Those pages are owned for
**registry + file presence**; CLI command existence is checked on the
cheatsheet data file.

| Skill | Owns |
| --- | --- |
| `vk:audit-ak-guides` | Public umbrella |
| `vk:audit-ak-skills` | `/skills` and `/skills/[kit]/[skill]` |
| `vk:audit-ak-workflows` | `/workflows` |
| **this skill** | Remaining AgentKit guide identities |

## `--check`

```bash
node scripts/check-ak-guide-pages.mjs --kit-root <ak-cli> [--repo <vividkit>]
```

`--kit-root` or `AK_CLI`. Reads local `origin/main` cobra `Use:` strings. Does
not fetch. Does not write `src/`.

Exit 0 clean, 1 drift, 2 usage.

## Stop

Never claim the umbrella audit is complete solely because this checker is
green if skills or workflows are red. Never invent CLI flags from page prose.

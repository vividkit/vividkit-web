# AgentKit skills meta (VividKit)

Locks for **kit inventory + skill fingerprints** vs the cheatsheet, and for
**skill-detail pages** vs kit `SKILL.md`. Locks do not publish copy.

| File | Role |
| --- | --- |
| `kit-tree-inventory.json` | Effective exports from ak-cli `kit.yaml` (local `origin/main` = stable, `origin/dev` = beta) plus per-source `SKILL.md` blob / skill-dir tree OIDs |
| `skill-details-lock.json` | Per-page source path + sha256 of the `SKILL.md` used to author `/guides/agentkit/skills/{engineer\|marketing}/{id}` |
| `cheatsheet-badges.json` | Editorial NEW / COMMON ids for `agentkit-skills-cheatsheet.ts` (not kit facts) |

Guide prose: `src/data/guides/agentkit-skill-details/`.
Cheatsheet: `src/data/guides/agentkit-skills-cheatsheet.ts`.
Invoked check: `skills/vk-audit-ak-skill-details/scripts/run.mjs` (inventory is step 1).

ak-docs `pages[]` is docs nav, not kit inventory.

## AgentKit guide coverage

Public audit: **`/vk:audit-ak-guides --check`**. Fails while any identity is
uncovered or owned-fail. Skills/workflows are modules.

| Pages | Owner | Status |
| --- | --- | --- |
| `/guides/agentkit/skills` | `vk:audit-ak-skills` | Inventory + fingerprints |
| `/guides/agentkit/skills/:kit/:skill` | `vk:audit-ak-skills` | Inventory **and** detail/claims runner |
| `/guides/agentkit/workflows` | `vk:audit-ak-workflows` | Operational if the module is linked |
| All other `/guides/agentkit/*` | `(none)` | **Uncovered** |

Do not treat a skills-only check as a complete AgentKit guide audit.



## How to run skill tracking

On-demand against **local git refs**. Does not fetch or watch GitHub. Run
`git fetch` in the ak-cli checkout first, or new remote skills/edits stay
invisible.

```bash
AK_CLI=/path/to/ak-cli
git -C "$AK_CLI" fetch

# Inventory + fingerprints only
AK_CLI="$AK_CLI" npm run audit:ak-kit-inventory
# same:
node scripts/check-ak-kit-skill-inventory.mjs --kit-root "$AK_CLI"

# Full gate this repo actually invokes (inventory first, then detail pages)
node skills/vk-audit-ak-skill-details/scripts/run.mjs check --kit-root "$AK_CLI"
```

`--kit-root` must be an ak-cli **git** checkout that has `origin/main` and
`origin/dev`. After a clean review, pin the new OIDs:

```bash
node scripts/check-ak-kit-skill-inventory.mjs --kit-root "$AK_CLI" --write-lock
```

## New session (slash command)

Runtimes discover project skills from `.claude/skills/` (Claude) and
`.agents/skills/` (Codex), not from `skills/` alone. Those dirs are gitignored.
This machine already has relative links; after a fresh clone:

```bash
ln -sfn ../../skills/vk-audit-ak-skill-details .claude/skills/vk-audit-ak-skill-details
ln -sfn ../../skills/vk-audit-ak-skill-details .agents/skills/vk-audit-ak-skill-details
```

Restart Claude Code / Codex after linking. Then invoke:

| Runtime | Command |
| --- | --- |
| Claude Code / Cursor | `/vk:audit-ak-skills --check` |
| Codex | `$vk:audit-ak-skills --check` |

Paste this with the next message (edit the two paths):

```text
/vk:audit-ak-skills --check

git fetch the ak-cli checkout first (checker does not fetch).
--kit-root <ak-cli git checkout with origin/main and origin/dev>
Optional --ak-docs <ak-docs> if also fact-checking detail pages.

Inventory authority: reference/ak-docs-skills-meta/README.md
Do not --write-lock until I review onlyKit / contract-updated / package-updated.
Stop after inventory if later claim checkers fail for unrelated pages.
```

Inventory-only (no detail-page claims):

```text
Run skill tracking against ak-cli kit.yaml.
git fetch <ak-cli>, then:
AK_CLI=<ak-cli> npm run audit:ak-kit-inventory
Report onlyKit, onlyCatalog, beta-only, contract-updated, package-updated.
Do not write the lock.
```


## Merge semantics

Do not `core ∪ every kit`.

| Kit | Effective skills |
| --- | --- |
| core | `exports.skills` |
| engineer | `core.exports.skills ∪ appends.skills` (no `overrides.skills`) |
| marketing | `overrides.skills` **replaces** core. A new core skill is marketing beta-only only if that override lists it |

Fingerprint path: declared kit dir, then Core if that dir is missing. One Core
source is stored once; `surfaces` lists every kit that exports it.

## Drift lines

| Line | Meaning | What to do |
| --- | --- | --- |
| `onlyKit` | In ak-cli, not cheatsheet | Add the skill to `agentkit-skills-cheatsheet.ts` |
| `onlyCatalog` | In cheatsheet, not ak-cli | Remove or stop listing it |
| `beta-only` / `isBeta` / Beta Preview mismatch | Channel membership | Dual-list: `isBeta: true` + Beta Preview. Do not set `isBeta` for skills on both channels |
| `added` / `removed` | Source kit+id appeared or left | Same as onlyKit / onlyCatalog, then `--write-lock` |
| `contract-updated` | `SKILL.md` blob changed | Update cheatsheet hint/flags from frontmatter; re-author detail page if one exists |
| `package-updated` | Skill-dir tree changed (`references/`, scripts, assets) | Read the tree diff; update the page only if reader-facing contract changed |
| `missing-package` | Export still listed but tree disappeared | Broken kit path; do not `--write-lock` over a null tree |

Commit SHA moving with identical fingerprints is not a fail. Fetch, then rerun.

## After an AgentKit kit bump

1. `git fetch` the ak-cli checkout (`origin/main` + `origin/dev`).
2. Run `audit:ak-kit-inventory`. Dual-list beta-only skills; add `onlyKit` rows.
3. For `contract-updated` skills that have a detail page:

```bash
node scripts/check-ak-skill-details.mjs --kit-root "$AK_CLI"
```

4. Re-author dirty `src/data/guides/agentkit-skill-details/{kit}/{id}.ts` from
   `SKILL.md` (do not invent flags). Then `--write-lock` on that script.
5. Re-apply editorial badges after hint/flag rewrites:

```bash
node scripts/check-ak-cheatsheet-badges.mjs --write
```

6. Inventory pin after the cheatsheet matches:

```bash
node scripts/check-ak-kit-skill-inventory.mjs --kit-root "$AK_CLI" --write-lock
```

Current skill-details lock: AgentKit **2.14.0** (`405ea37`).

# Authority

Resolve sources **same-kit only**. Engineer detail pages map to
`ak-cli/kits/{engineer,core}/skills/<id>/SKILL.md` then
`ak-docs/content/docs/stable/kits/engineer/skills/<slug>.en.mdx` (+ `.vi.mdx`).
Marketing pages map to marketing kit then
`ak-docs/.../kits/marketing/skills/<slug>.{en,vi}.mdx`. Never fall back across kits.

## Precedence

1. **Kit `SKILL.md` argument-hint and Commands headings** — skill invocation tokens
   the runtime actually accepts. Keep these on the page even if ak-docs tables omit them
   (`docs-omit`). Do not delete `--skip-journal` / `--debate` solely because docs tables
   skipped them.
2. **ak-docs Option / Mode / Input-or-flag tables and Callouts** — reader-facing
   modes, artifact flags, and safety gates. Add missing hardGates from Callouts.
   Fix copy that contradicts Callouts (false product surface, fake routes, invented
   quality claims).
3. **In-run operations** (`/case`, `/sweep`) are not `/ak:<skill> --flag` tokens.
   Document them as subcommands or workspace ops, not skill flags.
4. **Helper CLI flags** (create-next-app, ads APIs, ffmpeg, `ak config --json`)
   stay off skill invocation unless argument-hint lists them.

## Issue kinds

| Kind | Meaning | Action |
| --- | --- | --- |
| `wrong` | Vivid claim contradicts SKILL.md or ak-docs Callout/table | Patch Vivid |
| `missed` | Docs/SKILL.md document a skill-level gate, path, or option the page lacks | Add to Vivid |
| `docs-omit` | Vivid has a SKILL.md token ak-docs tables omit | Keep Vivid; do not fail the page |
| `no-docs` | No same-kit mdx | Coverage only |

Status labels on batch reports are not authority. Any `wrong` or `missed` is
actionable even if the row said `ok`.

## Locks and checkers

| Script | Source | Fail on |
| --- | --- | --- |
| `scripts/check-ak-skill-details.mjs` | kit `SKILL.md` sha + inventory | missing/extra pages, hash drift |
| `scripts/check-ak-skill-detail-claims.mjs` | kit `SKILL.md` | invented flags/subcommands |
| `scripts/check-ak-skill-detail-principles.mjs` | detail TS + renderer | EN/VI count mismatch, dummy copy, sliced principles |
| `scripts/check-ak-skill-detail-ak-docs.mjs` | same-kit structured tables | table-token drift (advisory vs claims) |

Lock file: `reference/ak-docs-skills-meta/skill-details-lock.json`.
Coverage snapshot: `scripts/ak-docs-skill-detail-coverage.json`.

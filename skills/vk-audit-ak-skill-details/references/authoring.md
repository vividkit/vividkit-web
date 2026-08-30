# Authoring

Edit `src/data/guides/agentkit-skill-details/{engineer|marketing}/ak-<id>.ts`.
Shared renderer:
`src/components/guides/how-ck-works/infographic/infographic-generic-command-quick-ref.astro`.

## Required fields

- `header.titleEn/Vi`, `taglineEn/Vi` — title short; tagline may be long
- `processFlow[]` — every step has `titleEn`, `titleVi`, `descEn`, `descVi`
- `corePrinciplesEn` and `corePrinciplesVi` — **same length**, no empty strings
- User-facing skills: `invocation.syntax` plus arguments/options/subcommands as documented
- EN and VI copy must stay semantically equivalent on safety and destructive steps

## Invocation

- Flags only from kit `argument-hint` plus ak-docs Option/Mode tables
- `[task]` in brackets is optional unless docs say required
- Subcommands from `OR [a|b|c]` hints or `## /ak:skill name` headings
- `promptExamples` ≥ 2 for user-facing skills; `expectedEn` must be a full outcome sentence

## Hard gates

Map ak-docs `<Callout>` titles into `hardGate`. Do not invent a generic
"keeps the command inside its intended workflow boundary" line.

Renderer shows **every** `corePrinciples*` string as `Rule NN` / `Nguyên tắc NN`
plus the string as body. Do not slice. Do not pair principles with `expertiseAreas`.

## Composable flags

Keep `composableFlagsEn` / `composableFlagsVi` as source prose. The renderer
splits on `.` / `;` / ` · ` and wraps `--flag`, `-v`, `/ak:…` as `<code>` chips
after HTML escaping. Do not add a second chip row that repeats those tokens.
Do not hand-split dozens of data files for display.

Code chips: `bg-slate-100 dark:bg-slate-800/90`,
`text-purple-600 dark:text-purple-400`.

## After edits

1. Re-run the four checkers from the skill `--check` path
2. `npm run build` when many TS files changed
3. Browser EN+VI on a 3/4/5-principle page and one composable-flags page
4. `--write-lock` only after the dirty inventory is re-authored

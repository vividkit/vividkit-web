# AgentKit Migration Validation

## Overview

Release evidence for the bilingual ClaudeKit-to-AgentKit guide migration and its focused follow-ups. See the [AgentKit Desktop App source record](./agentkit-desktop-app-source-record.md), [legacy provider-skill cleanup source record](./agentkit-legacy-skill-cleanup-source-record.md), and [“What Is ClaudeKit?” source record](./agentkit-what-is-claudekit-source-record.md) for claim-level evidence and explicit source boundaries.

## 2026-07-13 accuracy + continuity follow-up

Verified against stable `ak 2.1.0` (temp install) and [agentkit.best/docs](https://agentkit.best/docs):

- `ak kit list` is **not** an alias; canonical command is `ak kit list-kits`
- `ak migrate` / `ak kit refresh` are stable with `--dry-run` / `--yes` (not `--apply`)
- CLI auth: email/API key open CLI sessions; `--license-key` is Desktop App device activation only
- Continuity FAQ (`#continuity`) renders **before** `#desktop-app` and answers Desktop optional / two kits / App license ≠ kit entitlement
- Desktop App primary CTA is “Continue with the ak CLI”; waitlist is secondary

Gates: `npm run test:agentkit-content` 58/58 (+1 postbuild skip); `npm run check:agentkit-content` 612 files; `npm run check:agentkit-types` 0 scoped AgentKit delta.

The original migration release baseline and the later cleanup addendum have separate verification scopes. Results below identify which evidence was rerun.

## Migration Release Baseline

These results predate the legacy provider-skill cleanup addendum:

| Gate | Final result |
|---|---|
| AgentKit contract, content, catalog, hub, and CI tests | 47/47 pass |
| Source content audit | 598 files pass |
| Scoped Astro diagnostic delta | 0 migration diagnostics |
| Repository-wide Astro baseline | 271 existing errors, explicitly not claimed green |
| Static production build | 74 pages |
| Generated artifact audit | 156 files pass |
| Plan sync | 8/8 phases, 103/103 tasks |

## Legacy Provider-Skill Cleanup Addendum

Run on 2026-07-12 against the final cleanup facts, component, generated artifacts, and rendered routes:

```bash
npm run build
```

| Gate | Result |
|---|---|
| AgentKit suite during prebuild | 52 tests: 50 pass + 2 expected postbuild-only skips |
| Source content audit | 605 files pass |
| Scoped AgentKit diagnostic delta | 0 new diagnostics |
| Repository-wide Astro baseline | 271 existing errors, unchanged |
| Static production build | 74 pages |
| Generated artifact audit | 156 files pass |
| Postbuild route and LLM checks | 5/5 pass |
| Cleanup browser matrix | 8/8 pass |

The contracts verify the three-source metadata set, four-stage safety order, destructive-command copy gating, Claude Code/Codex target boundary, Codex `source-command-*` destination evidence, source-link rendering, escaped component output, and LLM safety boundary.

## Compatibility Primer Addendum

Run on 2026-07-12 against the refreshed EN/VI `what-is-claudekit` primer, typed facts, route/LLM contracts, generated output, and static browser preview:

| Gate | Result |
|---|---|
| Focused primer, audit, and route contracts | 21 pass + 1 expected postbuild-only skip |
| Full AgentKit suite during prebuild | 57 pass + 1 expected postbuild-only skip |
| Source content audit | 611 files pass |
| Scoped AgentKit diagnostic delta | 0 new diagnostics |
| Repository-wide Astro baseline | 267 existing errors; not claimed green |
| Static production build | 74 pages |
| Generated artifact audit | 156 files pass |
| Postbuild route and LLM checks | 5/5 pass |
| Primer browser matrix | 8/8 pass |

The browser matrix covered EN/VI, light/dark, and 375×812/1440×900. Every case rendered one locale-correct H1, correct document language and canonical, no horizontal overflow, Claude Code `/ak:cook`, Codex `$ak:cook`, visible keyboard focus, and the three official source links. No browser errors were reported. Route identity remains `legacy-slug`; rendered guidance is current AgentKit compatibility content.

## Migration Browser Matrix

System Chrome tested the migration baseline static build after the responsive fix. These results were not rerun for the cleanup addendum:

| Surface | Coverage | Result |
|---|---|---|
| AgentKit hub EN | 375×812 + 1440×900; light/dark; JS on/off | 8/8 pass |
| AgentKit hub VI | 375×812 + 1440×900; light/dark; JS on/off | 8/8 pass |
| How AgentKit Works EN/VI | mobile overflow and legacy-prefix delta | 2/2 pass |
| AgentKit Desktop App section EN/VI | 375×812 + 1440×900; light/dark; focus and overflow | 8/8 pass |
| Legacy skill cleanup EN/VI | 375×812 + 1440×900; light/dark; focus, 44 px links, overflow, provider invocations, destructive-copy boundary | 8/8 pass |

The final mobile document measured `375 / 375` scroll/client width; `#kit-targets` measured `343 / 343`. Desktop measured `1440 / 1440` and `848 / 848`. Each case rendered one H1 with the correct language.

## Interaction and Accessibility Checks

- Platform radios respond to keyboard navigation and retain a usable selected panel with JavaScript disabled.
- Copy payloads equal displayed commands. Remote installers, credential placeholders, global-impact actions, and legacy removal remain non-copyable.
- Keyboard copy activation reports success/failure through an ARIA live status instead of failing silently.
- Language switching preserves `#migration-journey` and changes the document language.
- Canonical and EN/VI/x-default hreflang links are present.
- EN/VI How AgentKit Works pages have no active `/ck:*` or `/ckm:*` invocations.
- Desktop App source links, localized CLI links, 44 px CTAs, and visible keyboard focus pass in all eight representative cases.
- Legacy cleanup renders four ordered steps with target invocations before previews, three official-source links, `/ak:cook` and `$ak:cook`, no recursive-delete command, and no destructive apply command in all eight representative cases.

## Baseline Exclusions

- Vercel Insights returns 404 under a plain local static server because the production platform injects it.
- The shared pre-existing logo component duplicates the `vkGradient` SVG ID; the migration does not introduce or modify it.
- Two CK slash tokens in the hub are labeled mapping examples and pass the bounded allowlist.

## Closed Browser Defect

The first run found a 155 px mobile overflow in the AgentKit target grid. Intrinsic min-content width widened the page. Direct grid children and nested command wrappers now use bounded shrink/scroll behavior; the final regression matrix passed 18/18.

## UI/UX Consistency Follow-up

System Chrome re-audited the migration-touched guide surface after PR review feedback. The tracked runner is `scripts/check-agentkit-guide-ui.mjs`; it covers 19 rendered guide families in EN/VI at 375×812 and 1440×900 in light and dark themes, plus the disabled frontend-design compatibility redirects.

| Follow-up check | Result |
|---|---|
| Changed-guide responsive/theme smoke matrix | 152/152 render cases + 2/2 compatibility redirects pass |
| AgentKit + CLI focused width matrix | 16/16 pass; every document measured viewport width exactly |
| Theme, keyboard, focus, and anchor interactions | Theme persistence toggled both ways; Linux radio selected by keyboard; focus ring visible; linked step landed 123 px below viewport top |
| AgentKit source/content/type gates | 47/47 pass; 0 scoped diagnostics |
| Production build and postbuild route gate | 74 pages; 4/4 route tests pass |

The interaction row was verified separately in system Chrome; the matrix runner covers rendering, theme selection, language, page errors, and document overflow rather than claiming pixel-diff or automated accessibility coverage.

Closed migration-owned issues:

- Replaced near-black light-theme step tiles with purple-tinted semantic surfaces; retained high-contrast dark-theme tiles.
- Replaced the inverted “continue” panel with paired purple–slate gradient surfaces for light and dark themes.
- Removed mobile overflow from AgentKit CLI install cards.
- Added sticky-header offsets, visible focus/hover/active states, and clear disabled-copy styling.
- Restored Vietnamese navigation/table labels and readable mobile migration-table widths.
- Normalized inline-code borders, backgrounds, and text colors to project conventions.

Browser screenshots and the JSON matrix are generated under the gitignored `artifacts/agentkit-ui/` directory.

## Unresolved Questions

Desktop product-page and stable-changelog availability signals remain inconsistent; the guide surfaces both. Stable AgentKit documentation still does not establish automatic cleanup for legacy provider destinations. Repository-wide type debt (271 existing diagnostics), existing missing H1s on several legacy guides, and shared interaction/layout baselines remain separate maintenance work.

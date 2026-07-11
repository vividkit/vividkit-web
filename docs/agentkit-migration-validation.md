# AgentKit Migration Validation

## Overview

Release evidence for the bilingual ClaudeKit-to-AgentKit guide migration. Detailed working notes remain plan-scoped; this tracked record preserves the gates required to review the PR.

## Automated Gates

| Gate | Final result |
|---|---|
| AgentKit contract, content, catalog, hub, and CI tests | 47/47 pass |
| Source content audit | 598 files pass |
| Scoped Astro diagnostic delta | 0 migration diagnostics |
| Repository-wide Astro baseline | 271 existing errors, explicitly not claimed green |
| Static production build | 74 pages |
| Generated artifact audit | 156 files pass |
| Plan sync | 8/8 phases, 103/103 tasks |

## Browser Matrix

System Chrome tested the final static build after the responsive fix:

| Surface | Coverage | Result |
|---|---|---|
| AgentKit hub EN | 375×812 + 1440×900; light/dark; JS on/off | 8/8 pass |
| AgentKit hub VI | 375×812 + 1440×900; light/dark; JS on/off | 8/8 pass |
| How AgentKit Works EN/VI | mobile overflow and legacy-prefix delta | 2/2 pass |

The final mobile document measured `375 / 375` scroll/client width; `#kit-targets` measured `343 / 343`. Desktop measured `1440 / 1440` and `848 / 848`. Each case rendered one H1 with the correct language.

## Interaction and Accessibility Checks

- Platform radios respond to keyboard navigation and retain a usable selected panel with JavaScript disabled.
- Copy payloads equal displayed commands. Remote installers, credential placeholders, global-impact actions, and legacy removal remain non-copyable.
- Keyboard copy activation reports success/failure through an ARIA live status instead of failing silently.
- Language switching preserves `#migration-journey` and changes the document language.
- Canonical and EN/VI/x-default hreflang links are present.
- EN/VI How AgentKit Works pages have no active `/ck:*` or `/ckm:*` invocations.

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
- Replaced the inverted light-theme “continue” panel with theme-native slate surfaces.
- Removed mobile overflow from AgentKit CLI install cards.
- Added sticky-header offsets, visible focus/hover/active states, and clear disabled-copy styling.
- Restored Vietnamese navigation/table labels and readable mobile migration-table widths.
- Normalized inline-code borders, backgrounds, and text colors to project conventions.

Browser screenshots and the JSON matrix are generated under the gitignored `artifacts/agentkit-ui/` directory.

## Unresolved Questions

None for this migration. Repository-wide type debt (271 existing diagnostics), existing missing H1s on several legacy guides, and shared interaction/layout baselines remain separate maintenance work.

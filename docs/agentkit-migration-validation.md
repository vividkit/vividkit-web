# AgentKit Migration Validation

## Overview

Release evidence for the bilingual ClaudeKit-to-AgentKit guide migration. Detailed working notes remain plan-scoped; this tracked record preserves the gates required to review the PR.

## Automated Gates

| Gate | Final result |
|---|---|
| AgentKit contract, content, catalog, hub, and CI tests | 47/47 pass |
| Source content audit | 597 files pass |
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

## Unresolved Questions

None for this migration. Repository-wide type debt and shared layout baselines remain separate maintenance work.

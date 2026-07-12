# AgentKit “What Is ClaudeKit?” Source Record

## Overview

Evidence boundary for the bilingual compatibility primer rendered at the retained ClaudeKit-named routes. Verified 2026-07-12 against first-party pages, repository implementation, tests, and generated output.

## First-Party Sources

| Source | Channel | Status | Use in primer |
|---|---|---|---|
| [AgentKit documentation](https://agentkit.best/docs) | Stable | Current successor guidance | Establishes `ak` as the successor to legacy `ck`, current installation path, kits, and Claude Code/Codex targets. |
| [ClaudeKit documentation](https://docs.claudekit.cc) | Legacy | First-party historical reference | Establishes legacy concepts and project/global `.claude/` scope. |
| [ClaudeKit CLI repository](https://github.com/mrgoonie/claudekit-cli) | Legacy | First-party historical reference | Establishes the retired CLI lineage; not a current install recommendation. |

All three URLs were reachable and reviewed on 2026-07-12. The typed record is `src/data/guides/agentkit/what-is-claudekit-facts.ts`; it stores each URL, channel, status, and verification date. Volatile capability counts are intentionally omitted.

## Architecture Decision

Preserve `/guides/what-is-claudekit` and `/vi/guides/what-is-claudekit` as `legacy-slug` route identities. Replace their rendered meaning with a current compatibility primer instead of redirecting or reviving ClaudeKit setup guidance.

Consequences:

- Existing links and search identities remain valid.
- ClaudeKit appears only as historical/migration context.
- Current examples resolve through canonical target adapters: Claude Code `/ak:cook`; Codex `$ak:cook`.
- EN and VI share the same fact model and structurally matched translation keys.
- Both routes use locale-correct canonical URLs and remain in sitemap/LLM discovery contracts.

## Verification Evidence

Run on 2026-07-12:

| Gate | Result |
|---|---|
| Focused primer, audit, and route contracts | 21 pass, 1 expected postbuild-only skip |
| Full AgentKit prebuild suite | 57 pass, 1 expected postbuild-only skip |
| Source content audit | 611 files pass |
| Scoped AgentKit type delta | 0 new diagnostics |
| Repository-wide Astro baseline | 267 existing errors; not claimed green |
| Static build | 74 pages |
| Generated artifact audit | 156 files pass |
| Postbuild route/LLM contracts | 5/5 pass |

Browser checks used the generated static build:

| Surface | Viewport | Result |
|---|---:|---|
| EN compatibility primer | 375×812 | `lang=en`; one English H1; locale-correct canonical; `375/375` scroll/client width; both target syntaxes and all three official links present; no browser errors reported. |
| VI compatibility primer | 1440×900 | `lang=vi`; one Vietnamese H1; locale-correct canonical; `1440/1440` scroll/client width; both target syntaxes and all three official links present; no browser errors reported. |

## Maintenance Boundary

Update this record and `src/data/guides/agentkit/what-is-claudekit-facts.ts` together when source status, successor terminology, verified targets, or route policy changes. Do not turn legacy sources into current setup instructions.

## Unresolved Questions

None for this refresh.

---
title: "Guard Rails Inside ClaudeKit Article"
date: "2026-06-10"
type: journal
---

# Guard Rails Inside ClaudeKit Article

## Context

The `inside-blog` project already had a complete 4-locale guard-rails post. The ask was to mirror it into vividkit-web's own **Inside ClaudeKit** guides section (`/guides/inside-claudekit`), which hosts bilingual vi/en infographic deep-dives — a distinct surface from the blog.

## What Happened

- Distilled the 634-line source markdown (`inside-blog/.../assets/raw/guard-rails-in-claude-code-and-claudekit.md`) into a bilingual infographic article matching the existing `InsideClaudeKitPlanModesArticle` pattern: 4 guard layers, tool-call flow, exit-code semantics, 7 guard-rail groups, hook spotlight, 3-label hook taxonomy, 8 known gaps, trust checklist.
- Added a new amber **Safety** track to the hub (`trackMeta` + `track.safety` i18n in en/vi) — first track beyond planning/design/foundations.
- Wired the new tab id `inside-claudekit-guard-rails` across `TabNavigation.astro` + `GuidesLayout.astro` (type unions + arrays), added `topic_4` i18n keys, and created en + vi routes.
- Verified via `astro build` (66 pages, both locales) and a code-reviewer pass (no blocking issues).
- Committed 8 files (`59648b3`), pushed to `main`.

## Decisions

- New "Safety" track instead of reusing "foundations" — guard rails is a distinct security topic and the hub is built to scale tracks.
- Published live (not coming-soon) per user choice; card auto-surfaces on hub + Guides home.
- Folded the source's `2.19.2-beta` hook-removal note into the version note for freshness (reviewer's optional flag).

## Debugging — "bể layout"

User reported broken layout on their running dev server (port 4321). Puppeteer screenshots showed `.article-content-col` with `max-width: none` (full-bleed) on 4321, but `896px` (56rem, correct) on a fresh server (4323) and in the production build. Both pages carry the same scoped `data-astro-cid` as the working plan-modes article.

**Root cause:** Astro dev HMR scoped-`<style>` staleness — when a new route imports an already-loaded scoped-style component (`InsideClaudeKitArticleShell`) while the dev server is running, the `data-astro-cid` association does not re-attach for the new page, dropping the scoped `max-width`. Fix is a dev-server restart, not a code change.

## Verification

- `astro build`: pass, both `/guides/inside-claudekit/guard-rails` and `/vi/...` generated.
- Fresh dev server renders the centered 56rem column; production CSS contains the scoped rule.
- i18n keys present in both en and vi; no raw-key render risk.

## Unresolved Questions

None.

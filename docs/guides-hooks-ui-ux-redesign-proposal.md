# Guides Hooks UI/UX Redesign Notes

Date: 2026-06-02

Scope: `/guides/hooks` and `/vi/guides/hooks`.

## Goal

Make the hooks guide readable for all levels:

- beginner can understand what a hook is before seeing a catalog;
- intermediate reader can follow the lifecycle flow before reading hook names;
- advanced reader can expand technical details only when needed.

## Implemented Direction

The page is now learning-first, catalog-second.

1. Visual introduction
   - One real `h1`.
   - Plain-language guard-rails explanation.
   - Inline stats only, not large stat cards.
   - Generated SVG/PNG tech graph sits in one full-width row for readability.

2. Mental model section
   - Uses a 4-step sequence: moment -> JSON context -> rule check -> result.
   - Explains that hooks are not prompt templates.
   - Shows four possible outcomes: allow, block, inject, remember.
   - Mobile order is text -> full-width diagram -> flow cards -> outcomes.

3. Hook list
   - Reader-path cards were removed.
   - Search/filter toolbar was removed.
   - Hooks are shown directly by role/category.
   - Rows are single-column and quieter.
   - Each row starts with a plain-language explanation.
   - Triggers and technical notes are hidden until the row is expanded.

4. Mobile
   - No horizontal overflow at 390px or 320px.
   - Diagram stays within the first viewport.
   - Mobile guide nav has edge fades and safer hit targets.

## Validation

- `npm run build` passed.
- `git diff --check` passed.
- Puppeteer checks passed for:
  - EN light desktop 1440x1100
  - EN dark desktop 1440x1100
  - EN light mobile 390x900
  - VI light mobile 390x900
- Filter/search/reader-path UI is absent.
- Light/dark diagram switching works.
- Diagram loads, all 18 hooks render, and Details expands with a simple example.

## Unresolved Questions

None.

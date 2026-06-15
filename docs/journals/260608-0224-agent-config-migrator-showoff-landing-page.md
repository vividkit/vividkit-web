---
title: "Agent Config Migrator Show-off Landing Page"
date: "2026-06-08"
type: journal
plan: "260607-1729-universal-agent-config-migration-cli"
---

# Agent Config Migrator Show-off Landing Page

## Context

The completed Universal Agent Config Migration CLI plan needed a polished `ck:show-off` landing page artifact for presentation and section image capture.

## What Happened

- Created bilingual content source under `assets/showoff/universal-agent-config-migration-cli/content.md`.
- Built a self-contained technical landing page under `assets/showoff/universal-agent-config-migration-cli/index.html`.
- Used a restrained instrument-panel visual direction: grid, terminal preview, migration pipeline, adapter map, command matrix, release safety report.
- Captured 21 PNG images across horizontal, square, and vertical ratios.
- Synced progress and PM report back into the source plan folder.

## Decisions

- Kept the artifact outside `src/` because this is a static showcase, not a routed VividKit guide page.
- Used local plan/repo docs as source of truth, with public docs only for fact-checking agent configuration concepts.
- Described Gemini/OpenCode/Cursor/Windsurf as roadmap adapters only.
- Skipped publish step because `agentwiki` was not available on PATH.

## Verification

- `npm run build`: passed.
- Capture script: 21/21 images generated.
- Dimension check: horizontal `3840 x 2160`, square `2160 x 2160`, vertical `2160 x 3840`.
- DOM overflow check: passed for horizontal, square, vertical viewports.

## Next

- Publish through `agentwiki` when the CLI is available.
- Optionally wire the static artifact into a VividKit route if this needs to become public site content.

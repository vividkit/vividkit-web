---
date: 2026-07-13 02:45
---

# AgentKit accuracy + continuity follow-up

**Date**: 2026-07-13 02:45

## Context

PR #28 shipped CK→AK migration guidance, but users still confused Desktop App vs rebrand vs old Engineer/Marketing kits. Local review also found CLI/docs drift vs stable `ak 2.1.0`.

## Changes

- Canonical kit discovery: `ak kit list-kits`
- Promote `ak migrate` / `ak kit refresh` to stable facts with correct flags
- Auth copy: email/API for CLI; license-key for Desktop App only
- Continuity FAQ before Desktop App; App CTA hierarchy CLI-primary
- Primer + CLI FAQ/README entry copy updates

## Verification

- `npm run test:agentkit-content` — pass
- `npm run check:agentkit-content` — 612 files
- `npm run check:agentkit-types` — 0 scoped delta

## Unresolved

- Official commercial transfer rule for historical CK purchases → AK entitlements (guide directs to account/support, no auto-transfer claim)

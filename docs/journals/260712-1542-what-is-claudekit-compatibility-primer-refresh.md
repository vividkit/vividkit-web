---
date: 2026-07-12
session: what-is-claudekit-compatibility-primer-refresh
---

# What Is ClaudeKit Compatibility Primer Refresh

**Date**: 2026-07-12 15:42
**Severity**: Medium
**Component**: Bilingual guide content, route discovery, AgentKit audit contracts
**Status**: Resolved

## Context

The retained `/guides/what-is-claudekit` and VI route still matter to old links and search traffic, but their content could no longer present ClaudeKit as the current product. This refresh turns both into a compatibility primer without breaking the legacy slug.

## What Happened

The guide was rebuilt around typed facts in `src/data/guides/agentkit/what-is-claudekit-facts.ts`, structurally matched EN/VI translation modules, and canonical target adapters. Current claims come from AgentKit documentation; ClaudeKit docs and CLI repository are explicitly legacy historical sources. Examples now use target-native syntax: Claude Code `/ak:cook`, Codex `$ak:cook`.

Review caught three real holes. The content audit detected `/ck:*` but missed `$ck:*`; `legacy-dollar-command` now closes that escape route. The LLM export guard had to isolate the primer section before rejecting legacy commands, otherwise unrelated compatibility material could poison the assertion. The legacy route also carried the duplicate/competing SEO framing `What is AgentKit? - Kits, CLI & Coding-Agent Targets`; it now owns the accurate localized title `What is ClaudeKit? From CK to AgentKit` and locale-correct canonical.

## The Brutal Truth

The first pass looked polished while still leaving machine-readable discovery and Codex syntax under-protected. That is frustrating because visual correctness would have hidden the exact regression most likely to survive into generated output. We were one narrow regex away from publishing stale `$ck` recommendations.

## Decisions Made

| Decision | Rejected alternative | Why |
|---|---|---|
| Retain the legacy slug | Redirect/delete it | Preserve backlinks and search identity. |
| Separate current and legacy official sources | Treat all first-party pages as current | Prevent historical docs becoming install advice. |
| Share typed facts and enforce EN/VI key parity | Duplicate facts inside components | Make drift fail tests. |
| Resolve syntax through target adapters | Hand-write commands | Keep Claude Code and Codex conventions native. |

## Verification

Focused contracts: 21 pass, 1 expected postbuild skip. Full prebuild AgentKit suite: 57 pass, 1 expected skip. Source audit: 610 files pass. Build: 74 pages; generated audit: 156 files pass; postbuild route/LLM contracts: 5/5. Scoped type delta: zero new diagnostics. Repository-wide Astro remains at 267 existing errors, so claiming a globally green typecheck would be dishonest.

## Reflection

The relief comes from making compatibility measurable instead of trusting prose review. The lesson: audit every target’s native syntax and test generated discovery output, not only source components.

## Next Steps

- VividKit maintainers: update the source record and typed facts together whenever successor status, targets, or route policy changes; review at the next AgentKit docs sync.
- Content reviewers: keep EN/VI structural parity and rerun source plus postbuild audits before merge.

## Unresolved Questions

None.

# AgentKit Legacy Provider-Skill Cleanup Source Record

## Overview

Claim-level source record for the legacy provider-skill cleanup section in the bilingual AgentKit migration hub. Sources were verified on 2026-07-12. Re-check them before changing command availability, provider coverage, destination paths, or removal behavior.

The guide deliberately separates three operations:

1. inventory destinations previously written by ClaudeKit;
2. verify replacement AgentKit skills in a fresh target session;
3. remove only content proven to be ClaudeKit-owned.

## Official Sources

| Source | Status in this guide | Verified claims | Explicit limit |
|---|---|---|---|
| [AgentKit documentation](https://agentkit.best/docs) | Current stable AgentKit guidance | `ak kit list-kits`; kit installation for Claude Code and Codex; target-native invocation; legacy CLI deprecation and binary migration guidance | Documents `ak migrate`; does not document automatic removal of every legacy provider copy |
| [ClaudeKit `ck migrate`](https://docs.claudekit.cc/docs/cli/migrate/) | Deprecated first-party CLI reference | `ck migrate --dry-run` previews without writes; detects providers; reports source/destination and `WHERE / WHAT / NEXT`; Codex command conversion uses `source-command-*` skill destinations | Describes migration/reconciliation, not a bulk removal workflow for every destination previously written |
| [ClaudeKit `ck uninstall`](https://docs.claudekit.cc/docs/cli/uninstall/) | Deprecated first-party CLI reference | Local/global scope, dry-run preview, ownership tracking, scoped backup, and preservation of detected customizations | Does not guarantee its legacy ownership model distinguishes AgentKit files installed later into the same `.claude` paths; apply commands are therefore not rendered |

The ClaudeKit pages remain useful as first-party evidence for existing legacy installations, but they are not current AgentKit lifecycle recommendations.

## Supported Boundary

Only Claude Code and Codex are verified AgentKit targets in the current stable source and repository target contract.

| Target | AgentKit verification example | Legacy destination evidence | Cleanup policy |
|---|---|---|---|
| Claude Code | `/ak:cook` in a fresh session | Project `.claude/` or global `~/.claude/` | Use the matching uninstall dry-run only as inventory; retain every co-located or ambiguous candidate and remove only individual entries proven legacy-only |
| Codex | `$ak:cook` in a fresh session | Project `.agents/skills/source-command-*/SKILL.md` or global `~/.agents/skills/source-command-*/SKILL.md` | Use the saved migration destination summary to inventory entries; remove only entries independently proven to be ClaudeKit-owned |

The legacy migration reference lists additional providers. This guide does not infer AgentKit support or a safe cleanup workflow for them. Their copies remain out of scope until first-party AgentKit documentation and repository tests establish an equivalent target contract.

## Safety Model

The rendered flow is intentionally fail-closed:

```text
legacy dry-run inventory
  -> stable AgentKit kit inventory
  -> fresh-session skill invocation
  -> scope-specific uninstall preview
  -> candidate-level ownership proof
  -> individual cleanup and fresh-session re-verification
```

- `ck migrate --dry-run` is inventory evidence only. Do not apply another migration as cleanup.
- `ak kit list-kits` confirms installed kits, but a fresh-session skill invocation is the functional gate.
- `ck uninstall --local --dry-run` and `ck uninstall --global --dry-run` preview separate source scopes.
- Destructive uninstall apply commands are retained only as source-record facts and are not rendered in the guide.
- A successful AgentKit invocation before cleanup does not prove shared `.claude` candidates are safe to delete; every ambiguous or co-located candidate stays.
- The guide does not emit recursive-delete commands and does not authorize deleting an entire provider skills directory.
- No source documents one command that removes every migrated provider destination.

## Repository Architecture

| File | Responsibility |
|---|---|
| `src/data/guides/agentkit/agentkit-legacy-cleanup-facts.ts` | Canonical sources, staged commands, scope, safety, copyability, and target cleanup policies |
| `src/data/guides/agentkit/agentkit-target-capabilities.ts` | Verified Claude Code/Codex target set and target-native invocation syntax |
| `src/components/guides/agentkit/agentkit-legacy-skill-cleanup.astro` | Bilingual rendering from typed facts; verification precedes previews; external source links; destructive apply commands are not rendered |
| `src/i18n/en/agentkit.ts` and `src/i18n/vi/agentkit.ts` | Structurally matched English and Vietnamese cleanup copy |
| `tests/content/agentkit-contract.test.mjs` | Source metadata, stage order, destructive-command gating, provider boundary, and Codex destination contract |
| `tests/agentkit-hub/agentkit-hub-contract.test.mjs` | Section composition, escaped rendering, source links, and absence of blind-copy/destructive-delete patterns |
| `tests/content/agentkit-legacy-allowlist.mjs` | Bounded exceptions for labeled legacy commands used by the cleanup guide |

The source record supports the implementation; executable facts remain centralized in the typed data modules rather than copied into component prose.

## Verification Evidence

Run on 2026-07-12 after the cleanup implementation:

```bash
npm run build
```

Results:

- AgentKit suite: 52 tests, 50 pass plus two expected postbuild-only skips;
- source content audit: 605 files pass;
- scoped AgentKit diagnostic delta: zero new diagnostics against the unchanged 271-error repository baseline;
- static production build: 74 pages;
- generated artifact audit: 156 files pass;
- postbuild route/LLM checks: 5/5 pass;
- System Chrome: 8/8 EN/VI, light/dark, 375×812 and 1440×900 cases pass with no document or section overflow.

## Maintenance Rules

- Keep the stable AgentKit source separate from deprecated ClaudeKit references.
- Do not promote `ak migrate` or automatic legacy provider cleanup without a stable first-party source.
- Do not expand the AgentKit target list from the provider list in `ck migrate`.
- Re-verify Codex destination patterns before changing inventory guidance.
- Preserve the inventory → verification → preview → candidate-level proof → re-verification order.
- Update this record, typed facts, EN/VI copy, and both focused contract files together.

## Unresolved Questions

1. Will a stable AgentKit release document migration or ownership-aware cleanup for provider destinations?
2. Will AgentKit publish verified target contracts beyond Claude Code and Codex?

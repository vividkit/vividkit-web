---
date: 2026-07-12 10:39
session: agentkit-legacy-provider-skill-cleanup
severity: high
component: agentkit-migration-guide
status: resolved
---

# AgentKit Cleanup Guidance Nearly Became a Deletion Trap

**Date**: 2026-07-12 10:39
**Severity**: High
**Component**: AgentKit migration guide
**Status**: Resolved

## What Happened

The first guide treated removing the global ClaudeKit npm CLI and cleaning provider-copied skills as one cleanup step. That was wrong. CLI removal does not establish ownership of files already copied into Claude Code or Codex destinations. Initial review blocked the change because the proposed apply path could delete AgentKit content sharing `.claude/` with legacy CK files.

## The Brutal Truth

This was maddening because polished migration copy was close to turning an unproven ownership assumption into destructive user guidance. We had confused “the old binary is obsolete” with “every file the old tool sees is disposable.” Those are not remotely equivalent. The block was frustrating, but shipping the shortcut would have been reckless.

## Technical Details

Official evidence was split across current [AgentKit docs](https://agentkit.best/docs), legacy [`ck migrate`](https://docs.claudekit.cc/docs/cli/migrate/), and legacy [`ck uninstall`](https://docs.claudekit.cc/docs/cli/uninstall/). `ck migrate --dry-run` exposes provider destinations, including Codex `.agents/skills/source-command-*/SKILL.md`. `ck uninstall --local --dry-run` and `--global --dry-run` preview `.claude/` scopes, but no source proves their ownership tracking distinguishes later AgentKit files co-located there.

Final evidence: 52 AgentKit tests yielded 50 passes plus two expected postbuild skips; 605 source files and 156 generated files passed audits; build emitted 74 pages; postbuild checks passed 5/5; browser coverage passed 8/8. Scoped diagnostics added zero errors against the honest 271-error repository baseline.

## What We Tried

- Rejected a combined “uninstall CK” step: it conflated package removal with provider cleanup.
- Rejected rendered destructive apply commands and recursive deletion: target ownership was not proven.
- Kept apply facts only in `agentkit-legacy-cleanup-facts.ts` as non-copyable, source-record-only evidence.

## Root Cause Analysis

We designed from desired workflow simplicity before proving source semantics. The documentation model collapsed binary lifecycle, migration inventory, provider destinations, and file ownership into one verb: cleanup.

## Lessons Learned

Inventory first, verify each target in a fresh session second, preview third, then remove only candidate-level legacy content. A successful install is not replacement proof; `/ak:cook` and `$ak:cook` must work before any preview appears.

## Next Steps

- Guide owner, before release: preserve inventory → target verification → dry-run preview ordering and the destructive-copy contract tests.
- AgentKit source owner, each stable release: check for an ownership-safe cleanup API and verified targets beyond Claude Code/Codex.
- Maintainer, before expanding coverage: prove destination ownership per target; otherwise leave files untouched.

Unresolved: no stable AgentKit cleanup API or broader target-coverage contract exists yet.

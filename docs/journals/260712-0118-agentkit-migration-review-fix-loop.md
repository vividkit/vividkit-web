---
date: 2026-07-12 01:18
session: agentkit-migration-review-fix-loop
severity: high
component: vividkit-guides
status: completed
---

# AgentKit Migration Survived the Review Loop

## Context

VividKit had AgentKit guidance scattered across duplicated command catalogs, bilingual data, legacy routes, and thousands of How-CK-Works examples. The root problem was blunt: volatile CK facts were copied everywhere, so a global rename would have produced confident but wrong migration advice. We needed one bilingual AgentKit journey without erasing compatibility context or silently presenting beta CLI behavior as stable.

## What Happened

We made stable public docs and stable-channel CLI help canonical. Local `1.2.0-beta.1` facts such as `ak migrate` and `ak kit refresh` remain explicitly beta. Migration now stages preflight and AgentKit verification before legacy removal; destructive removal and remote installers are deliberately not one-click copy actions. Content gates also scan source and generated artifacts, reject unsafe raw rendering, and report credential incidents without reproducing detected bytes.

The first implementation pass was not enough. Review exposed leftover namespace drift, forcing a fix loop that normalized 2,721 How-CK-Works command references and added regression coverage instead of hand-waving the scale away. The focused suite now passes 47/47 tests. Route identity checks preserve the 72-route baseline and add the EN/VI AgentKit pair: 74 routes total. EN/VI command, workflow, mapping, section, and route parity are enforced.

Type status needs honesty: `check:agentkit-types` reports `scoped pass (0 allowed, 0 baseline fingerprint(s))`, while repository-wide Astro check still reports 271 pre-existing errors. This is a clean migration delta, not a globally green repository.

## Reflection

This was exhausting because a documentation migration turned into a data-integrity and security migration. The painful lesson is that prose duplication is executable risk: one stale command can become a destructive copy button. Relief came only after the reviewer found the broad normalization gap and the fix was locked behind tests. Claiming “build green” here would be dishonest.

## Decisions Made

| Decision | Rejected alternative | Why |
|---|---|---|
| Stable facts are canonical; beta stays labeled | Promote newer local beta help | Newer does not mean released |
| Verify AK before removing CK | Copyable uninstall-first flow | Avoids stranding users |
| Preserve legacy slugs and exact route identities | Rename routes during migration | Protects backlinks and separates cleanup risk |
| Gate only new scoped type diagnostics | Claim repo-wide type success | The 271-error baseline is real |

## Next Steps

- Migration owner: completed the System Chrome visual/accessibility matrix and closed the mobile overflow regression; final delta passed 18/18.
- Reviewer: reran the 47 tests, content/security gates, scoped type delta, and 74-route build check after the fix.
- Maintainer: track the 271 baseline errors separately; do not bury them in this migration.
- Release owner: measure backlinks before any legacy-route redirect work.
- Unresolved questions: none.

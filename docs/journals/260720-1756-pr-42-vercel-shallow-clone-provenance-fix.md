---
date: 2026-07-20 17:56
session: PR #42 Vercel shallow-clone provenance fix
severity: high
component: legacy archive provenance verification
status: ongoing
---

# Journal: 2026-07-20 — PR #42 Vercel shallow-clone provenance fix

## Context

PR #42's initial Vercel preview ran `npm run check:legacy-archive` in a shallow Git clone. The committed archive proof and reviewed isolation object were available, but historical source commit `56524c98dbdd4d27632ffbcb9da96c77f936ab67` was not.

## What Happened

`scripts/verify-legacy-archive-provenance.mjs --mode auto` treated isolation-object presence as sufficient for full-history verification. It then failed with `Legacy archive provenance failed: missing historical source Git object 56524c98dbdd4d27632ffbcb9da96c77f936ab67`. Root cause: lane selection tested only isolation commit `7d5ab60e9e706ba612a6202f3024685cfa32bea6`; it did not test whether the source object needed by that lane existed.

TDD captured the exact topology: a real `--depth 1` clone, isolation object fetched, source object proven absent. Before the implementation change, `auto` entered full-history and reproduced the failure. After changing capability detection to require both objects, `node --test tests/content/legacy-isolate-ck-archive.test.mjs` passed 11/11, including proof-only auto selection and explicit full-history refusal.

## Reflection

The verifier confused partial evidence with complete capability. Deployment identity was irrelevant; object availability was the actual contract. GitHub Actions run `29735004189` had already passed the exact Node `22.21.1` / npm `10.9.4` toolchain on commit `57c53c3` before this follow-up, so it is not validation of the new provenance behavior.

## Decisions

| Decision | Rationale | Impact |
|---|---|---|
| Make `auto` capability-based | Full-history is possible only when isolation and source objects both exist | Incomplete history uses committed proof-only verification |
| Keep explicit `full-history` fail-closed | Explicit assurance must not silently weaken | Missing source history remains a hard failure |
| Run full-history directly after GitHub `fetch-depth: 0` | That workflow deliberately has complete history | Exact-toolchain CI preserves ancestry and Git-tree assurance |
| Reject a `VERCEL` environment bypass and network fetch | Platform identity proves nothing; network acquisition adds nondeterminism and hidden credentials/state | Verification stays portable, offline, and evidence-driven |

## Next

- PR owner: push the follow-up, then trigger Vercel revalidation immediately.
- Reviewer: confirm the Vercel preview passes and review the new exact-toolchain full-history step before release closure.
- Current state: Vercel follow-up revalidation pending; no preview pass recorded.
- Unresolved questions: none.

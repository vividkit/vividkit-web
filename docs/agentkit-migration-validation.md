# AgentKit Migration Validation

## Status

This document records the current AgentKit 2.4 guide validation and retains the historical Phase 8 snapshot plus the schema required for a later operational release review. It does not claim production deployment, public beta publication, a closed-beta coexistence pilot, 3–7 day observation, or final Product/Tooling GO.

The pre-commit offline validation snapshot evaluated the implementation delta against base revision `7d5ab60e9e706ba612a6202f3024685cfa32bea6`. That SHA is the historical base identity, not the local checkpoint commit created after review; final release evidence must use the reviewed checkpoint revision.

Related evidence boundaries:

- [Lifecycle policy source record](./agentkit-lifecycle-policy-source-record.md)
- [Legacy cleanup source record](./agentkit-legacy-skill-cleanup-source-record.md)
- [Project overview and PDR](./project-overview-pdr.md)
- [Codebase summary](./codebase-summary.md)

## Observed Refresh Snapshot — 2026-07-20

### Release and publication truth

| Gate | Observed result |
|---|---|
| Live drift canary | `AK-RELEASE-MATCH` at `2026-07-20T09:09:40.260Z`: stable `2.4.0`, latest prerelease/promoted source `2.4.0-beta.7`, no active beta |
| Full AgentKit verification in final build | 184 total; 183 pass; 0 fail; 1 intentional skip; content audit pass across 879 files |
| Type scope | AgentKit scoped pass, 0 allowed and 0 baseline fingerprints; repository-wide Astro check remains red at 559 errors, +74 versus the reviewed 485-error snapshot because preserved untracked `engineer/` sources are scanned |
| Static output | `npm run build` exit 0; 132 pages; postbuild content audit pass across 272 files; route/LLM suite 8/8 |
| Hold build graph | 540 generated files; no current beta payload; stable HTML and LLM exports remain beta/archive-free |
| Archive | 208 full-history provenance files; 268 source-boundary files; Astro 7 rendered body/CSS budgets reconciled to reviewed deterministic evidence; final postbuild boundary pass |
| Truth audit | stable `2.4.0` and prerelease-provenance channel `2.4.0-beta.7` both returned `AK-TRUTH-OK`; this does not make beta active or published |
| Security audit | `npm audit --omit=dev`: 0 vulnerabilities across 311 production dependencies, 543 total dependencies |
| Exact toolchain | Verifier contract tests 8/8 pass and pin Node `22.21.1` / npm `10.9.4`; GitHub Actions run [`29735004189`](https://github.com/vividkit/vividkit-web/actions/runs/29735004189) passed every step in 2m16s on commit `57c53c3`, while the observed Node `26.4.0` / npm 11 host remains correctly refused |

The first Astro 7 postbuild exposed an expected archive rendered-body/CSS sidecar mismatch. Review against the repository's existing Astro 7 migration evidence showed the exact same 58-route rendered root and CSS budgets; only the sidecar was updated, archive source stayed unchanged, and the complete build then passed. The tracked publication record remains `hold`. Stage 7 is still a build-time gate; the 3–7 day range remains a per-user advisory after cutover.

The initial PR #42 Vercel preview failed in its shallow clone because the reviewed isolation object was present but the historical source object was absent. The unpushed follow-up makes `auto` capability-based: incomplete reviewed history uses proof-only verification, while explicit `full-history` remains fail-closed and is called directly by the exact-toolchain workflow after `fetch-depth: 0`. Vercel revalidation remains pending until that follow-up commit is pushed; no preview pass is recorded.

### Current source identity

| Evidence | SHA-256 |
|---|---|
| Stable normalized fact | `83dc4f2b886707d57853a80bca17b439d754c8064e091b0aa942a68f75477370` |
| Prerelease normalized fact | `075a4fd1d8c024eba1ce4e550e8bdf88bb61f769e923e54755aa47f910cfea44` |
| Stable fixture file | `d9a57b1c393bc047676ecc9ea426cc08864a7d8515575239511b5e18cedd682b` |
| Prerelease fixture file | `8ce13fe8ae26f868268a6408285e9a479385fd97ba87400822432841018a9bcb` |
| Publication source closure | `9a2804dd06ef0c20bd125898ddaad21c05cdedceea095774d8ff7e45cf2f7b0b` |
| Truth-audit bundle | `bcb010dc44efbf48d1f0224816933ea4eca872de53c93278d80accbda1a254e3` |
| Embedded fixture root | `df646d98d5e6da12bc6cb040e738a346193b0bb5b416899b3daf91d648c543e6` |

### Current release holds

- Stable guide output and its publication closure pass the scoped product gates, but final publication remains REVISE/HOLD pending review of the clean exact-toolchain pass and Vercel revalidation of the provenance follow-up.
- Public beta remains HOLD because beta.7 was promoted into stable and there is no active beta newer than stable. Query state cannot publish a channel.
- Migration apply/rollback for important data remains support-assisted because immutable reviewed-plan execution merged after v2.4.0.
- Product coexistence remains HOLD because no eligible noncritical pilot or 3–7 day observation was executed.

No production deploy, public beta publication, real coexistence pilot, migration apply, or binary removal was performed.

## Historical Offline Snapshot — 2026-07-17

### Product functional gates

| Gate | Observed result |
|---|---|
| Full AgentKit verification | 165 total; 164 pass; 0 fail; 1 intentional postbuild-only skip |
| Content/type scope | 876 source files; AgentKit type delta 0 allowed / 0 new; repository-wide checker remains red at the reviewed 485-error snapshot |
| Static output | 132 pages; zero query-created route identities; postbuild 8/8 |
| Hold build graph | 540 generated files; beta module/token absent; exact beta query shows the unavailable fallback |
| Published test graph | 542 generated files; beta loader/chunk present only with the explicit `NODE_ENV=test` publication fixture |
| Archive | 208 full-history provenance files; 268 rendered-boundary files; no live archive import/bundle leak |
| Truth audit | stable `2.3.0` and beta `2.3.1-beta.1` both returned `AK-TRUTH-OK` |
| Hold browser matrix | Fresh pre-commit run 274/274 pass; local access-controlled artifact expires `2026-07-24T06:53:26.044Z` |
| Published browser matrix | 274/274 pass; local access-controlled artifact expires `2026-07-24T02:58:33.505Z` |
| Hold recovery matrix | published-to-hold rebuild and full graph scan pass; 120/120 browser checks; artifact expires `2026-07-24T03:03:16.889Z` |

The browser matrix covered English/Vietnamese, Hub/CLI/CLI Commands/Coexistence, stable/exact-beta/invalid/repeated/case-variant/no-JavaScript requests, mobile/desktop, light/dark, keyboard/focus, history and channel-link cleanup. The tracked publication record remained `hold`; the published result above is test evidence, not public release approval.

### Source identity

| Evidence | SHA-256 |
|---|---|
| Stable normalized fixture | `89d582555208a790379f1f40a325375933265438288bf2c6ecbe9c6fe1646a12` |
| Beta normalized fixture | `0772e9421526fa7cd62929153517b222d9b88c9d05be7136ff85567fc68cf8d5` |
| Publication source closure | `1efc8393088d05dbd3cb5d50f8b9fee636f6c208e1fec7c3f1f35858aae25eab` |
| Truth-audit bundle | `8db4f4c3a210db50e16ea87c1a1cc762f02af697edb5d1325ba9e8f330a8addb` |
| Embedded fixture root | `2dd3d878eafbd8e524b734f27ebc75f7717fae19d6141677cd8fb37eca2954b4` |

### Release holds

- Production-tree dependency audit reported 16 advisories: 1 critical, 8 high, 6 moderate and 1 low. Direct `astro@6.0.2` remains in reviewed [XSS](https://github.com/advisories/GHSA-8hv8-536x-4wqp) and [SSRF](https://github.com/advisories/GHSA-2pvr-wf23-7pc7) affected ranges; the critical `basic-ftp@5.0.5` path is transitive through Puppeteer's browser downloader ([reviewed advisory](https://github.com/advisories/GHSA-5rq4-664w-9x2c)). Static output and the system-Chrome test path narrow observed exposure, but do not constitute a dependency remediation or security risk acceptance.
- Product functional/offline readiness is green. Product GO — stable remains HOLD pending dependency-security disposition, reviewed final revision and release authority.
- Product GO — beta docs remains HOLD because only a test-only published fixture was checked; the tracked record remains hold.
- Product coexistence remains HOLD because no real clean/noncritical pilot or minimum 72-hour observation occurred.
- Maintainer-tooling offline tests are green, but Tooling GO remains HOLD pending independent vault review/commit and separately authorized real runtime link/restart/discovery.

No dependency fix, production deploy, public beta publication, online release-drift report, real coexistence pilot, or real maintainer-runtime activation was performed.

## Phase 8 Result Record Schema

### 1. Validation Identity

Record one immutable identity block for the product gate.

| Field | Required evidence |
|---|---|
| Validation window | Actual start/end instants with timezone |
| VividKit revision | Exact reviewed Git revision |
| Worktree state | Status summary showing the evaluated scope |
| Stable fixture | File identity and normalized digest actually checked |
| Beta fixture | File identity and normalized digest actually checked |
| Publication source closure | Digest actually checked |
| Truth-audit bundle | Interface version and digest actually executed |
| Reviewer | Named release reviewer or approved automation identity |

Do not include an absolute developer path, private remote, credential, or raw environment dump.

### 2. Product Verification Gate

Create one row per command actually executed.

| Field | Meaning |
|---|---|
| Gate ID | Stable identifier used by this report |
| Exact command | Verbatim command after secrets and machine paths are removed |
| Started/ended | Actual timestamps |
| Exit status | Observed process result |
| Pass/fail/skip | Totals parsed from the command's structured output |
| Artifact class | Access-controlled CI artifact, public build artifact, or no retained artifact |
| Retention/expiry | Required for every non-public artifact |
| Notes | Sanitized deviations only |

The product gate must cover contract tests, source audit, type-delta review, truth-bundle verification, archive provenance/boundary checks, static build, and postbuild checks. Record exact totals only from observed output.

### 3. Stable/Hold Build Graph

Record evidence that the stable build remains independently deployable and the held beta closure is absent.

| Required observation | Result to record after execution |
|---|---|
| Publication mode identified as hold | pass/fail plus artifact reference |
| All four EN/VI surface pairs render stable fallback | observed matrix result |
| Exact beta query shows unavailable/fallback behavior | observed browser result |
| Full generated output contains no beta view/version/claim token | scan result and scope |
| Stable LLM artifacts contain no beta or archive material | scan result and artifact digest |
| Canonical and sitemap identities remain query-neutral | route/postbuild result |

### 4. Published Beta Build Graph

Populate only if a reviewed published fixture/build is actually evaluated.

| Required observation | Result to record after execution |
|---|---|
| Publication mode identified as published | pass/fail plus artifact reference |
| Beta view is lazy-loaded, not embedded in stable HTML | build-graph result |
| Exact single beta query selects the reviewed beta claim | browser result |
| Invalid, repeated, and case-variant queries remain stable | browser result |
| Channel propagation stays inside Hub, CLI, CLI Commands, and Coexistence | navigation result |
| Links outside the group drop channel state | navigation result |
| LLM artifacts remain stable-only | output scan result |

If no published build is run, mark the section not executed with the reason. Do not infer a pass from source inspection.

### 5. Route, LLM, and Archive Gate

Record derived values from the current manifest and generated output.

| Contract | Evidence required |
|---|---|
| Required route identities | Manifest-derived expected total and postbuild observed total |
| Query identity delta | Confirmed route-identity delta |
| EN/VI parity | Paired-route result |
| Sitemap | Exact manifest-classified consumer result |
| LLM | Stable-only and archive-exclusion result |
| Archive provenance | Source/isolation identity and proof mode used |
| Archive closure | Digest and import-boundary result |
| Rendered archive | noindex, asset reachability, and live-bundle exclusion result |

### 6. Browser and Accessibility Matrix

Record each evaluated dimension rather than one aggregate claim.

| Dimension | Values to capture |
|---|---|
| Locale | English, Vietnamese |
| Channel request | stable, exact beta, invalid, no JavaScript |
| Viewport | exact dimensions actually tested |
| Theme | light, dark |
| Interaction | keyboard, focus, history, channel link propagation |
| Layout | document and critical-section overflow measurements |
| Console/page | sanitized error category and incident ID only |

Retain screenshots and machine-readable matrix output only under the approved artifact policy. Do not publish local filesystem paths in this record.

### 7. Closed-Beta Canary and Observation

This operational record is distinct from the public beta query.

| Field | Required evidence |
|---|---|
| Topology | CK global + AK project-local in one clean, noncritical project |
| Eligibility | Clean ownership, healthy metadata, clean preview, exact package evidence |
| Backup | Restorable pre-AgentKit recovery point, referenced without raw manifest |
| Canary | Expected artifact categories and real workflow outcome |
| Observation | Operator-attested start/end/review instants and acknowledged incident IDs |
| Stop conditions | Collision, scope drift, data mismatch, new metadata class, or archive leak |
| Exit review | Continue/hold/rollback decision and reviewer |

The 3–7 day range is an operator attestation checked for shape and range. It is not site enforcement, independent verification, or removal authorization.

### 8. Recovery Drills

Record each drill independently:

- publication hold rebuild and beta-asset removal;
- failed-canary restoration to known-good state;
- project-local coexistence rollback without CK global mutation;
- archive boundary/digest recovery;
- deployment rollback to the recorded VividKit revision.

For each drill, capture the trigger, sanitized procedure category, observed outcome, retained artifact class, expiry, and unresolved incident IDs. CK executable removal must not be used as a rollback step.

### 9. Evidence Sanitization and Retention

Every retained private artifact must state:

- access classification;
- owner/reviewer;
- capture instant;
- expiry instant;
- deletion disposition;
- allowlisted schema version;
- incident IDs.

Reject artifacts containing raw stdout/stderr, stack traces, usernames, home paths, repository remotes, credentials or credentialed URLs, account/license identifiers, proprietary names/content, nested errors, or raw backup manifests.

### 10. Product Release Decision

Record exactly one final state after evidence review:

| State | Meaning |
|---|---|
| Product GO — stable | Hold/stable gates are green and stable output is isolated from beta |
| Product GO — beta docs | Published beta build graph and query controller are green |
| Product HOLD — coexistence | Scope, observation, support, or canary evidence is incomplete |
| Product ROLLBACK | Data, collision, boundary, security, or recovery failure requires known-good restore |

Include reviewer, decision instant, evaluated revision/digests, blocking incident IDs, and recovery target. Do not combine maintainer-tooling status with this decision.

### 11. Independent Maintainer-Tooling Decision

Record the private maintainer-tooling gate separately from Product GO.

| Field | Required evidence |
|---|---|
| Tooling revision | Reviewed tooling revision |
| Pinned product bundle | VividKit bundle digest/interface checked by the runner |
| Manifest/linker | Schema validation and disposable worktree link/check/unlink result |
| Trust boundary | Hostile-environment, symlink, hardlink, import, and context-drift refusals |
| Runtime discovery | Restart/discovery result if separately authorized |
| Decision | Tooling GO, HOLD, or ROLLBACK |

A tooling failure rolls back or holds the local tooling only; it does not change an otherwise valid VividKit Product decision.

## Evidence Entry Rules

1. Record observed facts after execution, never expected plan values.
2. Preserve exact revision and digest identity without publishing private paths or remotes.
3. Separate hold and published build results.
4. Separate public beta docs from closed-beta coexistence enrollment.
5. Separate Product and maintainer-tooling decisions.
6. Use pass/fail/skip totals from structured output; do not estimate.
7. Add an incident ID for every failure or deviation.
8. State artifact access and expiry; do not retain raw logs.

## Superseded Validation Appendix

Validation records dated July 11–13, 2026 covered the earlier migration foundation, provider-copy cleanup, compatibility primer, and UI follow-ups. Their route totals, journey totals, release observations, suite totals, generated-file totals, and browser aggregates describe those historical snapshots only.

Those figures are intentionally removed from the current-state sections because the lifecycle router, route manifest, release fixtures, channel build graph, and archive boundary changed afterward. Use the Phase 8 schema above for the next release decision; do not cite the former figures as current evidence.

## Unresolved Questions

1. Who will review GitHub Actions run `29735004189` and the Vercel revalidation after the provenance follow-up is pushed?
2. Which clean disposable/noncritical project and operator will own the 3–7-day coexistence pilot?
3. Who will review the final revision and tracked publication record for a later release decision?
4. The retention location and expiry for final sanitized pilot artifacts must still be selected during release review.

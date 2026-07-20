# VividKit Web — Project Overview and Product Development Requirements

**Last updated:** July 20, 2026

**Document version:** 2.0

**Implementation state:** Static reader journey implemented and verified offline; operational release review pending

## Executive Summary

VividKit Web is a statically generated, bilingual product site and visual guide hub for AgentKit (`ak`), Claude Code, Codex, and related workflows. AgentKit succeeds ClaudeKit (`ck`). Current guidance is AgentKit-first; isolated ClaudeKit pages remain available as noindex historical material.

The current product contract uses five static decision links and seven ordered, independently expandable lifecycle stages. Stable AgentKit `2.3.0` is the default. Beta `2.3.1-beta.1` is a separately reviewed fact set available only through an exact, bounded query after publication approval. Mixed or unverifiable ownership is directed to support; the static guide does not evaluate evidence or authorize an action.

## Product Vision

Turn verified command behavior and conservative lifecycle policy into visual guidance that helps users adopt AgentKit without confusing release channels, agent targets, installation scopes, or ownership boundaries.

### Users

- Developers installing AgentKit for the first time.
- Existing CK users planning a clean migration or recovery.
- Claude Code and Codex users who need target-correct invocation syntax.
- CI and automation owners handling credentials and non-interactive setup.
- Maintainers validating source truth, routes, generated artifacts, and archive isolation.

### Value

- **Evidence-backed facts:** release, command, target, and provenance metadata live in typed modules.
- **Decision before action:** three primary and two exception links route readers to fresh install, clean cutover, coexistence, recovery, or support guidance.
- **Ordered safety:** cleanup, installation, observation, and removal cannot be presented as interchangeable steps.
- **Target clarity:** Claude Code uses `/ak:*`; Codex uses `$ak:*`.
- **Bilingual parity:** executable facts remain shared while English and Vietnamese prose is localized.
- **Historical containment:** the ClaudeKit archive stays buildable without entering current discovery surfaces.

## Current Scope

### Public Surfaces

- Product pages at `/` and `/vi`.
- AgentKit Hub at `/guides/agentkit` and `/vi/guides/agentkit`.
- AgentKit CLI, CLI Commands, Commands, Workflows, targets, coexistence, permissions, recovery, and troubleshooting guides.
- Compatibility routes whose slugs retain ClaudeKit names while live guidance is AgentKit-oriented.
- Noindex archive routes under `/legacy/guides` and `/vi/legacy/guides`.
- Sitemap plus stable-only `/llms.txt` and `/llms-full.txt` exports.

### Out of Scope

- Static-site verification of a user's filesystem, ownership evidence, elapsed observation time, or authority.
- Same-scope CK/AK coexistence.
- Automatic deletion of legacy provider copies or CK control-plane data.
- Public or team delivery of local maintainer skills.
- Beta command claims that do not exist in the reviewed beta fact set.

## Lifecycle Contract

### Static Decision Navigation

The Hub does not run an evaluator, attestation form, or lifecycle controller. It presents ordinary links that work without JavaScript:

| Group | Choice | Exact English destination |
|---|---|---|
| Primary | Fresh install | `/guides/cli#install` |
| Primary | Clean cutover | `/guides/agentkit#clean-cutover` |
| Primary | Coexistence pilot | `/guides/coexistence#pilot-steps` |
| Exception | Recovery | `/guides/agentkit#recovery` |
| Exception | Support | `/guides/agentkit#support` |

Vietnamese destinations add `/vi` before `/guides`. Channel query state cannot evaluate eligibility or unlock held guidance.

### Seven Ordered Stages

| Order | Stage ID | Gate |
|---:|---|---|
| 1 | `backup` | Record a restorable backup outside the final project scope |
| 2 | `cleanup-ck-ownership` | Preview and classify CK-owned, shared, custom, and unknown project content |
| 3 | `confirm-clean-scope` | Refuse mixed/custom/corrupt/missing/unknown ownership before install |
| 4 | `install-ak` | Install AgentKit only after reviewing the installer trust boundary |
| 5 | `verify-canary` | Inspect expected artifacts and run a real workflow in a reversible target |
| 6 | `observe` | Record a 3–7 day observation externally; the page does not collect or validate it |
| 7 | `remove-ck-control-plane` | Resolve every `ck` executable first; require exact package ownership before any manual removal review |

Each stage is static documentation in an independent `<details>` disclosure. The page has no completion checkboxes, hidden command gate, persisted progress, or observation form. It does not verify evidence, enforce elapsed time, or authorize removal.

### Migration and Removal Policy

- `ak migrate` is a stable command. VividKit keeps it preview/smoke-first and exposes no default apply CTA for important data.
- Project content, CK executable ownership, and CK control-plane data are separate boundaries.
- Path detectors provide location evidence only. Separate read-only Bun/npm/pnpm/Yarn Classic probes must also match the global bin/root and direct `claudekit-cli` package entry; mismatch or symlink ambiguity fails to `unknown`.
- Bun, npm, pnpm, and Yarn Classic removal rows remain manual and condition-labeled when Stage 7 detail is published; the page does not select a row from reader input.
- Unknown, conflicting, symlinked, or unowned paths produce no uninstall command.
- Stage 7 detail is controlled by the build-time publication record; a query cannot unlock held content.

## Release Channel Contract

| Concern | Stable | Beta |
|---|---|---|
| Version | `2.3.0` | `2.3.1-beta.1` |
| Selection | Default, including invalid or repeated query values | Exact single `?channel=beta` only |
| Surfaces | All current guidance | AgentKit Hub, CLI Guide, CLI Commands, Coexistence Guide |
| Commands | Reviewed stable command catalog | No reviewed beta command facts in the current snapshot |
| LLM export | Included | Excluded |
| Canonical identity | Path only | Same path; query creates no route identity |

Leaving the four-surface group drops beta state. A deployed beta query is public early access, not access control or closed-beta enrollment. The current tracked publication record is `hold`; only a separately reviewed published build whose complete record matches its committed approval revision may include the beta payload and detailed Stage 7 content.

## Route and Archive Contract

The manifest requires **132 identities = 72 preserved live identities + 2 AgentKit Hub identities + 58 legacy archive identities**.

- Query parameters add zero identities.
- All 58 archive identities are required to build.
- Archive entries are bilingual and noindex.
- Archive entries are excluded from sitemap and LLM exports.
- The archive source snapshot is isolated under `src/legacy-ck`; live code may not import it as current facts.
- The manifest, built HTML, sitemap consumer, and postbuild checks must agree.

## Functional Requirements

| ID | Requirement | Priority | Implementation evidence |
|---|---|---:|---|
| FR-1 | Render static, responsive product and guide pages | P0 | Astro pages and layouts |
| FR-2 | Maintain English/Vietnamese route and executable-fact parity | P0 | Astro i18n and bilingual contract tests |
| FR-3 | Provide five JavaScript-independent decision links in a 3+2 primary/exception flow | P0 | reader-lane data, navigation component, and browser contract |
| FR-4 | Preserve the exact seven-stage predecessor order | P0 | lifecycle facts and policy tests |
| FR-5 | Direct mixed/custom/corrupt/missing/unknown cases to support without presenting a guessed destructive action | P0 | lifecycle policy, support copy, and content audit |
| FR-6 | Limit coexistence to CK global + AK project-local in a clean closed-beta project | P0 | lifecycle and coexistence contracts |
| FR-7 | Keep stable default and exact beta query behavior bounded to four surfaces | P0 | channel policy/controller tests |
| FR-8 | Keep both LLM artifacts stable-only | P0 | route and postbuild assertions |
| FR-9 | Preserve all 132 required identities while excluding archive discovery | P0 | route manifest and archive tests |
| FR-10 | Present `ak migrate` as stable but preview/smoke-first | P0 | canonical CLI fact and lifecycle copy |
| FR-11 | Gate CK removal behind detector and exact ownership evidence | P0 | lifecycle guide facts and removal UI |
| FR-12 | Provide official escalation links and sanitized support guidance | P0 | support contacts and report sanitizer |
| FR-13 | Audit source, build graph, generated output, release drift, and archive boundary without automatic fact mutation | P0 | package scripts, audit scripts, and tests |

## Non-Functional Requirements

| ID | Category | Requirement |
|---|---|---|
| NFR-1 | Accuracy | Executable facts must carry reviewed source, version/channel, and verification metadata |
| NFR-2 | Safety | Network, credential, global-write, and destructive actions remain review-gated |
| NFR-3 | Fail-closed behavior | Ambiguous evidence never selects a destructive command |
| NFR-4 | Localization | EN/VI executable structures and lifecycle keys remain equivalent |
| NFR-5 | Security | Reports drop raw stdout/stderr, stacks, nested errors, paths, remotes, identities, and credentials |
| NFR-6 | Accessibility | Controls remain semantic, keyboard reachable, focus-visible, and safe without JavaScript |
| NFR-7 | Performance | Public pages remain statically generated; beta loads lazily only in an approved published build |
| NFR-8 | Discoverability | Current routes enter sitemap/LLM only through explicit classification; archive never does |
| NFR-9 | Recoverability | Backup and recovery precede mutation; CK removal is never a rollback step |
| NFR-10 | Maintainability | Route, channel, source, archive, and bilingual contracts are executable tests |

## Security and Support

Official escalation targets:

- [ClaudeKit Discord](https://discord.com/invite/x7SwTSf3wc)
- [AgentKit Support](https://github.com/bestagentkits/agentkit-support)

Before sharing evidence, remove usernames/home paths, repository remotes, credentials and credentialed URLs, account/license identifiers, proprietary filenames/content, raw backup manifests, stack traces, and nested error objects. The lifecycle sanitizer emits only tool/version, channel, detector category, lifecycle stage, fixed expected/actual summaries, and an allowlisted incident ID.

## Acceptance Criteria

### Implemented Contract

- [x] Static navigation exposes fresh install, clean cutover, coexistence pilot, recovery, and support destinations in a 3+2 flow.
- [x] Lifecycle stages expand independently, show their available commands without progress gates, and keep advanced references collapsed by default.
- [x] Stage IDs and predecessors match the seven-stage contract.
- [x] Mixed/custom ownership and unhealthy/missing metadata fail closed.
- [x] Stable/beta facts remain independent; the beta catalog does not borrow stable commands.
- [x] Exact beta query propagation is bounded to four EN/VI surface pairs.
- [x] Route manifest contains 132 required identities and no query identity.
- [x] Archive identities are build-required but sitemap/LLM-excluded.
- [x] Removal UI is detector-first and renders no destructive copy button.
- [x] Support output is allowlist-sanitized.

### Phase 8 Release Evidence Required

- [ ] Record exact Product GO commands, revision/digests, pass/fail/skip totals, and retained artifact references after execution.
- [ ] Verify hold and published build graphs independently.
- [ ] Run EN/VI stable/beta/invalid/no-JavaScript browser matrices.
- [ ] Record closed-beta canary, observation, exit review, and recovery drill evidence.
- [ ] Decide Product GO/HOLD/ROLLBACK without coupling it to maintainer-tooling status.

See [AgentKit migration validation](./agentkit-migration-validation.md) for the observed offline snapshot and the remaining Phase 8 release-result schema.

## Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Beta facts leak into stable HTML or LLM output | Build alias, full-dist isolation scan, stable-only LLM assertions |
| Query appears to grant pilot access | Copy states that query is public selection only; publication remains a build-time decision |
| User treats observation prose as enforcement | Static copy states that the declaration is external and cannot verify or authorize removal |
| Incorrect CK package manager is guessed | Detector-first path evidence and manual exact-ownership condition |
| Historical archive leaks into live bundles | Provenance digest, import boundary, postbuild JS/CSS reachability checks |
| Support artifacts disclose private data | Fixed schema, allowlisted summaries, no raw child output |
| Documentation drifts back to former claims | Public-doc content detectors and code-backed docs checks |

## Success Metrics

- Required build identity preservation: **132/132**.
- Query-created route identities: **0**.
- Static reader destinations: **5/5**, grouped as three primary and two exception paths.
- Lifecycle stage identities: **7/7** in predecessor order.
- Supported target syntax contracts: **2/2**.
- Archive discovery exposure: **0** sitemap identities and **0** LLM identities.
- Releasable source/build/postbuild safety diagnostics: **0**.
- Final release totals: recorded only after Phase 8 executes.

## References

- [AgentKit documentation](https://agentkit.best/docs)
- [AgentKit changelog](https://agentkit.best/changelog)
- [Lifecycle policy source record](./agentkit-lifecycle-policy-source-record.md)
- [Legacy cleanup source record](./agentkit-legacy-skill-cleanup-source-record.md)
- [Codebase summary](./codebase-summary.md)

## Unresolved Questions

1. Will official AgentKit guidance document ownership-aware cleanup for every legacy provider destination?
2. When will a reviewed beta command fact set contain more than the independent release claim?
3. What retention policy will govern sanitized Phase 8 pilot artifacts?

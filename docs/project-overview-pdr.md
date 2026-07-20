# VividKit Web — Project Overview and Product Development Requirements

**Last updated:** July 20, 2026

**Document version:** 2.0

**Implementation state:** Lifecycle follow-up implemented in the current worktree; Phase 8 release evidence pending

## Executive Summary

VividKit Web is a statically generated, bilingual product site and visual guide hub for AgentKit (`ak`), Claude Code, Codex, and related workflows. AgentKit succeeds ClaudeKit (`ck`). Current guidance is AgentKit-first; isolated ClaudeKit pages remain available as noindex historical material.

The current product contract replaces a fixed migration checklist with an evidence-driven decision router and seven ordered lifecycle stages. Stable AgentKit `2.4.0` is the default. Prerelease `2.4.0-beta.7` is retained as promotion provenance, not advertised as an active beta because it was promoted from the same source commit and no newer beta existed at the 2026-07-20 observation. Mixed or unverifiable ownership fails closed to support.

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
- **Decision before action:** the router selects self-service, recovery, closed-beta, or support-assisted handling from stated evidence.
- **Ordered safety:** cleanup, installation, observation, and removal cannot be presented as interchangeable steps.
- **Target clarity:** Claude Code uses `/ak:*`; Codex uses `$ak:*`.
- **Bilingual parity:** executable facts remain shared while English and Vietnamese prose is localized.
- **Historical containment:** the ClaudeKit archive stays buildable without entering current discovery surfaces.

## Current Scope

### Public Surfaces

- Product pages at `/` and `/vi`.
- AgentKit Hub at `/guides/agentkit` and `/vi/guides/agentkit`.
- AgentKit CLI, CLI Commands, Commands, Workflows, targets, coexistence, permissions, recovery, and troubleshooting guides.
- A curated scenario command guide for high-value safe journeys, with AgentKit Official Docs as the full reference destination.
- Compatibility routes whose slugs retain ClaudeKit names while live guidance is AgentKit-oriented.
- Noindex archive routes under `/legacy/guides` and `/vi/legacy/guides`.
- Sitemap plus stable-only `/llms.txt` and `/llms-full.txt` exports.

### Out of Scope

- Static-site verification of a user's filesystem, ownership evidence, elapsed observation time, or authority.
- Same-scope CK/AK coexistence.
- Automatic deletion of legacy provider copies or CK control-plane data.
- Public or team delivery of local maintainer skills.
- Beta command claims that do not exist in the reviewed beta fact set.
- A mirrored 120-path CLI catalog, command search route, or duplicated full flag reference.

## Lifecycle Contract

### Decision Router

The router evaluates goal, legacy ownership, metadata health, scope relationship, cleanup preview, package-manager evidence, data criticality, pilot opt-in, canary outcome, observation declaration, and completed stages.

| Lane | Eligible case | Boundary |
|---|---|---|
| `fresh-install` | No CK content in the selected scope | Apply only install, verify, and observation stages |
| `clean-cutover` | Single-scope ownership, healthy metadata, clean preview, known package evidence | Follow every applicable stage in order |
| `clean-coexistence-pilot` | Beta opt-in; CK global + AK project-local; clean, noncritical project | Closed-beta operational pilot only |
| `recovery` | Explicit recovery goal or failed canary | Restore known-good state; keep CK removal blocked |
| `support-assisted` | Mixed/custom ownership, corrupt/missing metadata, dirty/unknown preview, unknown manager, critical data, or inconsistent scope | No destructive copy action |

The query channel cannot override lifecycle eligibility.

### Seven Ordered Stages

| Order | Stage ID | Gate |
|---:|---|---|
| 1 | `backup` | Record a restorable backup outside the final project scope |
| 2 | `cleanup-ck-ownership` | Preview and classify CK-owned, shared, custom, and unknown project content |
| 3 | `confirm-clean-scope` | Refuse mixed/custom/corrupt/missing/unknown ownership before install |
| 4 | `install-ak` | Install AgentKit only after reviewing the installer trust boundary |
| 5 | `verify-canary` | Inspect expected artifacts and run a real workflow in a reversible target |
| 6 | `observe` | Accept an ephemeral 3–7 day operator declaration as advisory input only |
| 7 | `remove-ck-control-plane` | Resolve every `ck` executable first; require exact package ownership before any manual removal review |

The observation form validates declaration shape and range in memory. It does not persist, verify, enforce, or authorize anything. Reload and no-JavaScript states remain advisory-blocked.

### Migration and Removal Policy

- `ak migrate` is a stable command. VividKit keeps it preview/smoke-first and exposes no default apply CTA for important data.
- Project content, CK executable ownership, and CK control-plane data are separate boundaries.
- Path detectors provide location evidence only. Separate read-only Bun/npm/pnpm/Yarn Classic probes must also match the global bin/root and direct `claudekit-cli` package entry; mismatch or symlink ambiguity fails to `unknown`.
- Bun, npm, pnpm, and Yarn Classic removal rows remain manual and condition-labeled, and only the exact router-matched row is revealed at Stage 7.
- Unknown, conflicting, symlinked, or unowned paths produce no uninstall command.
- Stage 7 detail is controlled by the build-time publication record; a query cannot unlock held content.

## Release Channel Contract

| Concern | Stable | Beta |
|---|---|---|
| Version | `2.4.0` | None active; `2.4.0-beta.7` is promoted provenance |
| Selection | Default, including invalid or repeated query values | Exact single `?channel=beta` falls back to stable with an availability notice |
| Surfaces | All current guidance | No current beta payload is rendered |
| Commands | Reviewed stable curated command facts | Empty current-beta command facts |
| LLM export | Included | Excluded |
| Canonical identity | Path only | Same path; query creates no route identity |

Leaving the four-surface group drops beta state. A future deployed beta query would be public early access, not access control or closed-beta enrollment. The current tracked publication record is `hold`; query state cannot manufacture an active beta, include a held payload, or unlock detailed Stage 7 content.

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
| FR-3 | Route users by lifecycle evidence before showing staged actions | P0 | `routeAgentKitLifecycle` and router UI |
| FR-4 | Preserve the exact seven-stage predecessor order | P0 | lifecycle facts and policy tests |
| FR-5 | Fail mixed/custom/corrupt/missing/unknown cases to support-assisted | P0 | router refusal matrix |
| FR-6 | Limit coexistence to CK global + AK project-local in a clean closed-beta project | P0 | lifecycle and coexistence contracts |
| FR-7 | Keep stable default and exact beta query behavior bounded to four surfaces | P0 | channel policy/controller tests |
| FR-8 | Keep both LLM artifacts stable-only | P0 | route and postbuild assertions |
| FR-9 | Preserve all 132 required identities while excluding archive discovery | P0 | route manifest and archive tests |
| FR-10 | Present `ak migrate` as stable but preview/smoke-first | P0 | canonical CLI fact and lifecycle copy |
| FR-11 | Gate CK removal behind detector and exact ownership evidence | P0 | lifecycle guide facts and removal UI |
| FR-12 | Provide official escalation links and sanitized support guidance | P0 | support contacts and report sanitizer |
| FR-13 | Audit source, build graph, generated output, release drift, and archive boundary without automatic fact mutation | P0 | package scripts, audit scripts, and tests |
| FR-14 | Publish scenario-first safe recipes while delegating complete flags/reference coverage to AgentKit Official Docs | P0 | curated command facts, bilingual scenario component, tracked scenario guide |

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

- [x] Router exposes fresh-install, clean-cutover, closed-beta pilot, recovery, and support-assisted lanes.
- [x] Stage IDs and predecessors match the seven-stage contract.
- [x] Mixed/custom ownership and unhealthy/missing metadata fail closed.
- [x] Stable, prerelease provenance, and active-beta state remain distinct; empty current-beta facts never borrow stable commands.
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
| Query appears to grant pilot access | Copy states that query is public selection only; router independently checks opt-in and scope |
| User treats operator declaration as enforcement | Ephemeral state, advisory labels, reload reset, no verified/authorized state |
| Incorrect CK package manager is guessed | Detector-first path evidence and manual exact-ownership condition |
| Historical archive leaks into live bundles | Provenance digest, import boundary, postbuild JS/CSS reachability checks |
| Support artifacts disclose private data | Fixed schema, allowlisted summaries, no raw child output |
| Documentation drifts back to former claims | Public-doc content detectors and code-backed docs checks |

## Success Metrics

- Required build identity preservation: **132/132**.
- Query-created route identities: **0**.
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

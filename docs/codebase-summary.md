# VividKit Web — Codebase Summary

**Last updated:** July 20, 2026

**Framework:** Astro 7.1.0, static output

**Language:** TypeScript 5.9.3, strict configuration

**Compaction:** `repomix-output.xml`, generated with Repomix 1.9.1 from the current worktree

## Snapshot

The July 17 compaction contains 711 text files and approximately 3.13 million tokens. Repomix reported no suspicious files; local SQLite state was recognized as binary and excluded from content. The compaction is ignored by Git and used only as a read-only analysis snapshot.

VividKit Web is a bilingual static site and guide system for AgentKit (`ak`). English routes are unprefixed; Vietnamese routes use `/vi`. Current guide facts are AgentKit-first. A frozen ClaudeKit source tree is isolated under `src/legacy-ck` and rendered only through explicit archive routes.

## Technology

| Concern | Verified implementation |
|---|---|
| Rendering | Astro 7.1.0 with `output: 'static'` |
| Language | TypeScript 5.9.3; Astro strict config |
| Styling | Tailwind CSS 4.3.3 through Vite; LightningCSS minification |
| Interactivity | Alpine.js 3.15.2 and local browser controllers |
| Images | Astro Sharp service |
| Deployment | `@astrojs/vercel` 11.0.3 with Web Analytics |
| Localization | Astro i18n; English default, Vietnamese `/vi` |
| Tests | Node test runner plus browser/UI scripts |

## Repository Structure

```text
src/
├── components/
│   ├── guides/agentkit/       # Static lifecycle stages, channel UI, targets, cleanup
│   ├── guides/                # Current guide shells and topic components
│   ├── layout/                # Header, footer, navigation, shared chrome
│   ├── sections/              # Product-page sections
│   └── ui/                    # Reusable UI primitives
├── data/
│   ├── guides/agentkit/       # Source, release, lifecycle, channel, publication facts
│   ├── guides/                # Route, command, workflow, and LLM catalogs
│   └── vi/                    # Vietnamese data mirrors where data-backed
├── i18n/en/                   # English copy modules
├── i18n/vi/                   # Vietnamese copy modules
├── legacy-ck/                 # Isolated historical ClaudeKit source snapshot
├── layouts/                   # Main, guide, and legacy archive layouts
├── pages/                     # Static EN/VI and archive routes
├── scripts/                   # Browser-side channel/lifecycle controllers
├── styles/                    # Global and archive styles
└── types/                     # Shared TypeScript declarations

scripts/
├── dist/agentkit-truth-audit.bundle.mjs
├── check-agentkit-*.mjs       # Content, type, channel, UI, release checks
├── *legacy-archive*.mjs       # Archive provenance, boundary, sync, postbuild logic
└── generate-llms-full.mjs     # Stable full-text LLM export

tests/
├── agentkit-catalogs/         # Catalog namespace and parity contracts
├── agentkit-hub/              # Shared hub/rendering contracts
├── content/                   # Source, lifecycle, channel, route, audit, archive tests
└── fixtures/                  # Reviewed release, publication, and archive fixtures
```

## AgentKit Source-of-Truth Model

The site does not treat component prose as command truth. Typed facts flow into presentation and tests:

```text
reviewed official observations + owner decisions + archive provenance
  -> typed release, CLI, lifecycle, target, and publication facts
  -> stable/beta selectors + internal lifecycle policy
  -> shared EN/VI static guide components
  -> static HTML + lazy channel asset when publication permits
  -> source, build-graph, postbuild, route, LLM, and archive checks
```

### Canonical AgentKit Modules

| Module | Current responsibility |
|---|---|
| `agentkit-source-contract.ts` | Trusted origin, stable release, prerelease promotion, active-beta state, evidence metadata, credential policy |
| `agentkit-official-links.mjs` | Central AgentKit Official Docs and changelog destinations for active source |
| `agentkit-cli-facts.ts` | Stable curated scenario facts, empty current-beta facts, fact lookup by channel |
| `agentkit-skill-facts.ts` | Verified skill identities and Claude Code/Codex invocation pairs |
| `agentkit-target-capabilities.ts` | Claude Code and Codex install scopes, default project scope, invocation mode |
| `agentkit-lifecycle-guide-facts.ts` | Seven stage IDs, predecessor facts, detector commands, manual removal conditions, support contacts |
| `agentkit-lifecycle-policy.ts` | Internal evidence-driven lane policy, sequential stage state, and unverified observation-declaration shape/range validation |
| `agentkit-channel-policy.mjs` | Exact channel normalization and four-surface propagation boundary |
| `agentkit-beta-channel-facts.mjs` | Current active-beta state only; promotion provenance remains in the source snapshot |
| `agentkit-publication-policy.ts` | Hold/staging/published build decision and digest validation |
| `agentkit-report-sanitizer.mjs` | Fixed support/audit output schemas that discard raw and nested input |
| `guide-route-manifest.ts` | Required build, sitemap, LLM, compatibility, and archive classifications |
| `legacy-archive-provenance.ts` | Pinned source/isolation commits plus archive file/line identity |

The previously separate operational and legacy-cleanup fact modules are no longer current sources. Lifecycle and cleanup behavior now lives in `agentkit-lifecycle-guide-facts.ts` plus `agentkit-lifecycle-policy.ts`.

## Internal Lifecycle Policy and Seven Stages

`routeAgentKitLifecycle` returns one of five lanes:

- `fresh-install`
- `clean-cutover`
- `clean-coexistence-pilot`
- `support-assisted`
- `recovery`

Mixed/custom ownership, corrupt/missing metadata, dirty/unknown cleanup preview, critical data, unknown package manager, or inconsistent scope fails closed to support-assisted handling.

The ordered stage IDs are:

```text
backup
  -> cleanup-ck-ownership
  -> confirm-clean-scope
  -> install-ak
  -> verify-canary
  -> observe
  -> remove-ck-control-plane
```

Fresh install uses only install, canary, and observation. Clean cutover follows all applicable stages. Coexistence additionally requires beta, explicit pilot opt-in, clean single-scope evidence, and CK global with AK project-local. A failed canary enters recovery.

The 3–7 day form is ephemeral advisory input. The policy checks user-supplied timestamps and acknowledgment shape, but the site cannot verify the evidence, enforce time, or authorize removal.

## Stable and Beta Architecture

### Facts

- Stable: AgentKit 2.4.0; default SSR and curated command facts.
- Latest prerelease: AgentKit 2.4.0-beta.7; promoted into stable from the same source commit.
- Active beta: none at the 2026-07-20 observation; current beta command fact count is zero.
- `ak migrate` is stable. Its fact remains preview-first and public copy does not offer default apply.

### Query Controller

`normalizeAgentKitChannel` recognizes one exact `channel=beta` request, but selection also requires a reviewed active beta. With no active beta, it resolves to stable and may show an availability notice. Missing, empty, repeated, conflicting, case-variant, or unsupported values resolve to stable.

Beta propagation is limited to these locale-neutral paths and their `/vi` mirrors:

- `/guides/agentkit`
- `/guides/cli`
- `/guides/cli-commands`
- `/guides/coexistence`

Links leaving that group lose the channel parameter. Canonical routes never include the query.

### Publication Build Graph

`astro.config.mjs` evaluates the tracked publication record against stable fixture, beta fixture, and source-closure digests. The closure starts from all EN/VI channel route entries and every stable `llms-full` HTML input route, then resolves their complete local import graphs with a syntax parser that includes side-effect imports and refuses indeterminate dynamic inputs. The beta-loader alias is an explicit two-target contract. For non-hold builds, the complete record is independently matched to a committed approval revision; only that revision field is canonicalized as a self-reference. It aliases `@agentkit-beta-loader` to one of two disjoint loaders:

- hold loader: no beta view/version reference;
- published loader: dynamically imports the beta view.

The current tracked record is `hold`. Test-only fixture override is rejected outside `NODE_ENV=test`. The full-dist isolation scanner verifies both modes and rejects beta tokens in LLM output. Channel activation uses a request generation guard so a stale beta import cannot overwrite a newer stable navigation.

## Migration and Removal Safety

- The VividKit default for stable `ak migrate` is preview/smoke-first.
- Project content cleanup occurs before AgentKit install; CK executable/control-plane review stays last.
- `which -a ck` and `Get-Command ck -All` are path-evidence detectors, not ownership proof.
- Read-only Bun/npm/pnpm/Yarn Classic probes then compare the resolved path with the manager's global bin/root and direct `claudekit-cli` package entry; any mismatch or symlink ambiguity becomes `unknown`.
- Package-manager removal actions are manual and non-copyable. Detailed Stage 7 rows remain publication-held until an exact-ownership selection boundary is separately reviewed.
- Unknown ownership maps to sanitization and support, not a guessed command.
- Detailed Stage 7 removal rows are build-time publication-gated; query/DOM state cannot unlock them.
- Claude Code `/ak:*` and Codex `$ak:*` remain separate target contracts.

Support targets are [ClaudeKit Discord](https://discord.com/invite/x7SwTSf3wc) and [AgentKit Support](https://github.com/bestagentkits/agentkit-support). The lifecycle report sanitizer retains only allowlisted tool/version, channel, detector category, stage, fixed summaries, and incident ID.

## Route, Sitemap, LLM, and Archive Contracts

The route manifest requires **132 identities**:

| Group | Count | Discovery policy |
|---|---:|---|
| Preserved live identities | 72 | Manifest-classified sitemap/LLM behavior |
| AgentKit Hub EN/VI | 2 | Sitemap and stable LLM entry points |
| Legacy archive | 58 | Required build; excluded from sitemap and LLM |

Queries add zero route identities. The archive group is the EN/VI index plus 28 content pairs. Its source provenance pins 208 files and 72,777 lines at the isolation baseline.

`src/pages/sitemap.xml.ts` consumes manifest classifications. `src/data/guides-llms-index.mjs` feeds curated `/llms.txt` and generated `/llms-full.txt`; both stay stable-only and do not export archive content.

## Internationalization

- `astro.config.mjs` sets English as default and Vietnamese under `/vi`.
- Shared components derive language from the URL or receive it explicitly.
- `src/i18n/en/agentkit.ts` and `src/i18n/vi/agentkit.ts` must expose identical lifecycle keys.
- Executable facts are shared rather than translated.
- Workflow `category` and `level` remain English lookup keys; display prose is translated.
- Channel state propagates equally across the four EN/VI surface pairs.

## Verification Pipeline

The current package scripts enforce:

```text
npm run build
  -> npm run verify:agentkit
     -> all Node contract tests
     -> source content audit
     -> scoped type-delta check
     -> truth-bundle reproducibility check
     -> archive provenance and source-boundary checks
  -> Astro static build
  -> postbuild
     -> archive asset sync
     -> llms-full generation
     -> generated-content audit
     -> route/LLM postbuild tests
     -> full-dist channel isolation
     -> rendered archive boundary check
```

Focused commands:

```bash
npm run verify:agentkit
npm run check:agentkit-content
npm run check:agentkit-types
npm run check:agentkit-truth-bundle
npm run check:legacy-archive
```

The online release-drift checker is deliberately outside build and verification scripts. It performs an explicit no-redirect observation, writes only an access-controlled expiring JSON report outside the repository, and never mutates source facts.

## Maintainer Tooling Boundary

Private maintainer tooling and product delivery are independent. The public repository does not track repository-local workflow files or a local skill runtime. The six former VividKit maintainer skill mirrors are not canonical public capabilities; their disposition is recorded in [the legacy cleanup source record](./agentkit-legacy-skill-cleanup-source-record.md). Product GO must not depend on local skill activation.

## Maintenance Rules

- Change source metadata and fixtures only through reviewed source observations.
- Never fall back from empty current-beta facts to stable commands labeled as beta.
- Keep the UI and tracked command guide curated by scenario; do not mirror the exact-release 120-path audit inventory.
- Update lifecycle policy facts, static lifecycle UI, EN/VI copy, and contract tests together.
- Keep observation evidence outside VividKit; the guide is advisory, never verification or enforcement.
- Detect all CK paths before selecting any manual removal condition.
- Preserve archive provenance and import boundaries; do not use archive modules as live facts.
- Update manifest, sitemap, LLM, EN/VI routes, and postbuild tests together.
- Retain only sanitized, access-controlled release/pilot artifacts with explicit expiry.
- Record final release counts only after the Phase 8 gates run.

## References

- [Project overview and PDR](./project-overview-pdr.md)
- [Lifecycle policy source record](./agentkit-lifecycle-policy-source-record.md)
- [Legacy cleanup source record](./agentkit-legacy-skill-cleanup-source-record.md)
- [Migration validation schema](./agentkit-migration-validation.md)

## Unresolved Questions

1. Will AgentKit document automatic ownership-aware cleanup for provider destinations beyond the current target evidence?
2. Which later tagged release will first include immutable reviewed-plan execution from post-2.4.0 work?
3. Which historical compatibility routes will eventually redirect or retire instead of remaining live?

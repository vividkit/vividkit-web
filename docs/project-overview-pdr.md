# VividKit Web - Project Overview & Product Development Requirements

**Last Updated:** July 12, 2026
**Version:** 1.2.0
**Status:** Active Development

---

## Executive Summary

VividKit Web is the marketing site for VividKit Desktop and the bilingual guide hub for **AgentKit (`ak`)**, the successor to ClaudeKit (`ck`). The site teaches the native AgentKit CLI, Engineer and Marketing kits, Claude Code, Codex, and cross-tool workflows. Existing ClaudeKit route identities stay available for compatibility while active recommendations move to AgentKit.

The AgentKit migration release adds a dedicated English/Vietnamese hub, canonical typed command facts, explicit stable/beta policy, a 74-route preservation contract, and source/postbuild audits that prevent legacy recommendations or credentials from leaking into active guidance.

## Product Vision

Make agentic coding systems easier to adopt by turning verified CLI behavior into visual, safe, target-aware guidance. Readers should be able to migrate from CK to AK without losing project content, choose the correct coding-agent target, and distinguish current commands from legacy or beta material.

### Audience

- Developers installing AgentKit for the first time.
- Existing ClaudeKit users migrating projects, scripts, and habits.
- Claude Code and Codex users who need target-native invocation examples.
- CI and automation owners handling non-interactive authentication and rollout safety.
- Product stakeholders evaluating the future VividKit Desktop experience.

### Value Propositions

- **Verified guidance:** Commands originate from typed facts with source, date, channel, and safety metadata.
- **Safe migration:** Installation and verification happen before legacy removal; rollback guidance preserves project content.
- **Target clarity:** Claude Code uses `/ak:*`; Codex uses `$ak:*`.
- **Bilingual parity:** English and Vietnamese routes share executable facts and structural contracts.
- **Compatibility without ambiguity:** Legacy slugs and mappings remain discoverable but are labeled as compatibility/history.
- **Static delivery:** Astro generates fast, indexable pages with no content CMS dependency.

## Current Product Scope

### Public Experiences

- Product landing pages at `/` and `/vi`.
- AgentKit migration hubs at `/guides/agentkit` and `/vi/guides/agentkit`.
- AgentKit CLI, commands, workflows, flowchart, Codex, coexistence, session recovery, permissions, and troubleshooting guides.
- Retained ClaudeKit deep dives and route slugs for migration or historical context.
- Curated `/llms.txt`, generated `/llms-full.txt`, and bilingual sitemap entries.

### AgentKit Migration Journey

The shared hub implements ten ordered stages:

1. Choose first-install, legacy-migration, or CI lane.
2. Define the binary/account/kit/project boundary.
3. Inventory every legacy `ck` location and automation reference.
4. Stage `ak` alongside the working legacy install.
5. Verify the binary and diagnostics.
6. Authenticate and confirm entitlements.
7. Install the kit for Claude Code or Codex.
8. Translate binary commands and skill invocations.
9. Remove only the legacy global CLI after verification.
10. Check collisions, run a real workflow, and retain rollback evidence.

Remote installers, credential-bearing commands, global writes, and destructive removal are deliberately not blind-copy actions.

## Product Requirements

### Functional Requirements

| ID | Requirement | Priority | Implementation evidence |
|---|---|---|---|
| FR-1 | Render responsive product and documentation pages | P0 | Astro pages and shared layouts |
| FR-2 | Provide English and Vietnamese route mirrors | P0 | Astro i18n plus EN/VI page and translation modules |
| FR-3 | Provide a dedicated bilingual CK-to-AK migration hub | P0 | `/guides/agentkit`, `/vi/guides/agentkit` |
| FR-4 | Present platform-correct macOS, Linux, and Windows commands | P0 | Typed operational facts and platform switcher |
| FR-5 | Separate Claude Code slash syntax from Codex skill-reference syntax | P0 | Target capabilities and skill invocation facts |
| FR-6 | Preserve the 72-route baseline and add two AgentKit routes | P0 | Typed manifest and 74-route contract tests |
| FR-7 | Keep legacy slugs available while labeling legacy/current mappings | P0 | `legacy-slug` policy and explicit migration rows |
| FR-8 | Exclude beta-only CLI facts from stable guidance | P0 | Channel selectors; beta contract tests |
| FR-9 | Generate sitemap and LLM indexes from classified guide inventories | P1 | Route manifest and shared LLM index |
| FR-10 | Audit active content before build and generated artifacts after build | P0 | `check-agentkit-content.mjs` build gates |
| FR-11 | Prevent credential values from appearing in diagnostics or reports | P0 | Redaction contract tests |
| FR-12 | Preserve executable parity across English/Vietnamese catalogs | P0 | i18n and workflow parity tests |
| FR-13 | Present optional AgentKit Desktop App guidance while preserving unresolved official availability signals | P1 | Typed App sources, bilingual hub section, and source record |

### Non-Functional Requirements

| ID | Category | Requirement |
|---|---|---|
| NFR-1 | Accuracy | Every executable AgentKit fact carries source URL, verification date, and release channel |
| NFR-2 | Safety | Destructive, credential, network-exec, and global-write commands require manual review |
| NFR-3 | Compatibility | Existing required route identities remain buildable until an approved migration removes them |
| NFR-4 | Localization | EN/VI executable structures remain identical even when prose differs |
| NFR-5 | Security | Credentials are scanned in active and legacy content and never re-disclosed by the audit |
| NFR-6 | Type safety | TypeScript strict mode remains enabled |
| NFR-7 | Accessibility | Interactive controls remain keyboard reachable and use semantic labels |
| NFR-8 | Performance | Public pages remain statically generated and client JavaScript stays progressive |
| NFR-9 | Discoverability | Sitemap, `/llms.txt`, and `/llms-full.txt` include current AgentKit entry points |
| NFR-10 | Maintainability | Stable/beta promotion updates all catalogs, bilingual mirrors, and tests together |
| NFR-11 | Source integrity | Volatile App sources retain typed source-level metadata; the source record preserves claim-level provenance and unresolved availability gaps |

## Acceptance Criteria

### Migration Hub

- [x] English and Vietnamese AgentKit routes build.
- [x] Both routes use the shared guide component and structurally matched i18n keys.
- [x] Exactly ten stable migration step IDs render in order.
- [x] macOS, Linux, and Windows views exist for canonical commands.
- [x] Legacy removal is staged after `ak` verification and is never blindly copyable.
- [x] Claude Code examples use `/ak:*`; Codex examples use `$ak:*`.
- [x] AgentKit components use escaped interpolation rather than `set:html`.

### Facts and Release Channels

- [x] CLI, skill, target, credential, and migration facts have typed contracts.
- [x] Stable selectors exclude `ak migrate` and `ak kit refresh <kit>`.
- [x] `ak migrate` and `ak kit refresh` are promoted to stable facts verified against `ak 2.1.0`.
- [x] Core skill facts carry reproducible SHA-256 values and target-native invocations.
- [x] The latest installer is not described as a pinned verified artifact when required integrity evidence is absent.
- [x] Desktop App product-page and stable-changelog claims keep separate channel/status metadata.
- [x] Paid-waitlist, stable GUI-asset, Linux, and public-download signals remain explicit instead of being silently reconciled.
- [x] EN/VI render the same optional section and preserve the CLI/App authentication boundary.

### Compatibility and Routes

- [x] The 72-route baseline remains unique and unchanged.
- [x] `/guides/agentkit` and `/vi/guides/agentkit` bring the required total to 74.
- [x] Every required built HTML identity is present and no unmanifested HTML route is emitted.
- [x] Manifested EN/VI suffixes remain paired.
- [x] ClaudeKit-named legacy slugs are classified, not silently repurposed or removed.

### Content Audit

- [x] Active AgentKit content rejects legacy npm, `ck` lifecycle, and `/ck:*` or `/ckm:*` recommendations.
- [x] Intentional migration examples use exact bounded allowlist entries with owner and reason.
- [x] Legacy backlog remains classified while credential scanning stays active.
- [x] Audit diagnostics and reports never contain the detected credential value.
- [x] Normal build runs both source and postbuild audits.

## Technical Architecture

### Stack

| Layer | Technology |
|---|---|
| Framework | Astro 6.0.2, static output |
| Language | TypeScript 5.9.3, strict config |
| Styling | Tailwind CSS 4.1.17, LightningCSS |
| Interactivity | Alpine.js 3.15.2 plus local scripts |
| Deployment | Vercel adapter 10.0.0 and Web Analytics |
| Localization | Astro i18n, English default and Vietnamese `/vi` prefix |

### Source-of-Truth Flow

```text
AgentKit source metadata + installed-kit snapshot
  -> typed CLI/skill/target/migration facts
  -> stable selectors and catalog adapters
  -> shared bilingual Astro components
  -> static EN/VI routes
  -> source audit + build + postbuild audit
```

### Key Modules

| Path | Responsibility |
|---|---|
| `src/data/guides/agentkit/` | Canonical AgentKit facts and localized migration mapping |
| `src/components/guides/AgentKitGuide.astro` | Shared hub composition |
| `src/components/guides/agentkit/` | Journey, command safety, targets, mapping, troubleshooting |
| `src/i18n/en/agentkit.ts` | English hub copy |
| `src/i18n/vi/agentkit.ts` | Vietnamese hub copy |
| `src/data/guides/guide-route-manifest.ts` | Required routes, sitemap/LLM inclusion, compatibility policy |
| `scripts/check-agentkit-content.mjs` | Source/generated content and credential audit |
| `tests/agentkit-hub/` | Hub and command-view contracts |
| `tests/agentkit-catalogs/` | Active catalog and bilingual parity contracts |
| `tests/content/` | Facts, route manifest, allowlist, and audit contracts |

## Content Governance

### Stable vs Beta

- Render stable facts by explicit channel selection.
- Keep beta-only facts labeled with observed version and preview/apply behavior.
- Never infer stable status from local availability.
- Promote only after upstream stable verification; remove beta markers from commands, workflows, flowcharts, and EN/VI mirrors in one change.

### Legacy Material

- Preserve `legacy-slug` routes until a removal/redirect decision is approved.
- Keep CK syntax only in labeled migration comparisons, compatibility resolution, or historical prose.
- Do not recommend legacy installers or active `/ck:*`/`/ckm:*` invocations in AgentKit-active content.
- Keep project `.claude` content outside the global CLI removal step.

### Command Safety

- Executable copy must come from canonical facts.
- Network installers are trust-boundary references, not blind-copy buttons.
- Credential examples use placeholders and documented masking/rotation rules.
- Global writes and destructive actions require explicit review.
- Copy payload must exactly equal displayed text and contain no control characters.

## Roadmap

### Completed: AgentKit Migration Foundation (July 2026)

- [x] Add bilingual `/guides/agentkit` hub.
- [x] Normalize active command/workflow/flowchart catalogs to `/ak:*`.
- [x] Add Claude Code `/ak:*` and Codex `$ak:*` target contracts.
- [x] Add canonical typed facts with provenance and release channels.
- [x] Add 74-route manifest and preservation tests.
- [x] Add source and generated-output content audits.
- [x] Preserve legacy slugs and scenario aliases.
- [x] Include AgentKit in sitemap, `/llms.txt`, and `/llms-full.txt` workflows.

### Next

- [ ] Promote beta commands only when an upstream stable release is verified.
- [ ] Audit remaining ClaudeKit historical prose and classify each page as migrate, retain, redirect, or retire.
- [ ] Add release-source automation that refreshes fact provenance without bypassing review.
- [ ] Add browser-level tests for platform switching, copy gating, language switching, and legacy deep links.
- [ ] Define a formal deprecation window for `legacy-slug` routes.

### Future Product

- [ ] Launch VividKit Desktop MVP with visual catalog, run history, and dashboards.
- [ ] Expand feedback and analytics for guide completion and migration success.
- [ ] Add further languages only with executable-parity checks equivalent to EN/VI.

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Beta command presented as stable | Users run unsupported lifecycle operations | Typed channels, stable selectors, promotion tests |
| Claude syntax copied into Codex | Skill invocation fails or misleads | Target capability facts and syntax-specific tests |
| Legacy recommendation returns to active copy | Migration regresses | Prebuild and postbuild detectors with bounded exceptions |
| Credential appears in content or audit output | Secret exposure | Credential detectors and non-redisclosure reports |
| Route cleanup breaks saved links | User and SEO loss | Manifested 72-route baseline and `legacy-slug` policy |
| EN/VI executable drift | One locale renders unsafe or invalid commands | Shared facts and structural parity tests |
| Remote installer trust is overstated | Supply-chain risk | Integrity contract refuses verified-install claim without pinned evidence |

## Success Metrics

- Required build-route preservation: **74/74**.
- AgentKit migration locales: **2/2** with structural key parity.
- Stable migration steps: **10/10** in contract order.
- Target syntax contracts: **2/2** (Claude Code and Codex).
- Source and postbuild audit diagnostics: **0** for a releasable build.
- Active AgentKit legacy recommendation violations: **0**, excluding bounded labeled migration rows.

## References

- AgentKit documentation: https://agentkit.best/docs
- AgentKit changelog: https://agentkit.best/changelog
- VividKit: https://vividkit.dev
- Astro documentation: https://docs.astro.build

## Unresolved Questions

1. What official source will document automatic CK purchase → AK entitlement transfer, if any?
2. What deprecation window should apply to routes classified as `legacy-slug`?
3. Which migration-success events can be measured without collecting command content or credentials?

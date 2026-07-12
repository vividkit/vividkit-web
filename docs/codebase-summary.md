# VividKit Web - Codebase Summary

**Last Updated:** July 12, 2026
**Framework:** Astro 6.0.2 (static output)
**Language:** TypeScript 5.9.3 (strict mode)
**Generated from:** `repomix-output.xml` (449 files; source snapshot reviewed July 12, 2026)

---

## Overview

VividKit Web is a statically generated product site and bilingual documentation hub for AgentKit (`ak`), the successor to ClaudeKit (`ck`). English routes use the root path; Vietnamese mirrors use `/vi`. Existing ClaudeKit-named guide slugs remain available where compatibility or historical context requires them, while active setup and skill guidance uses AgentKit terminology and target-native syntax.

The current build contract contains **74 route identities**: the exact 72-route baseline plus `/guides/agentkit` and `/vi/guides/agentkit`. `src/data/guides/guide-route-manifest.ts` is the typed route inventory used to verify required build output, sitemap inclusion, LLM inclusion, and compatibility policy.

## Repository Structure

```text
src/
├── components/
│   ├── guides/                 # Guide shells and topic sections
│   │   └── agentkit/           # AgentKit migration hub sections and command views
│   ├── layout/                 # Header, footer, and shared site chrome
│   ├── sections/               # Product landing-page sections
│   └── ui/                     # Reusable UI primitives
├── data/
│   ├── guides/                 # Typed guide catalogs and route manifest
│   │   └── agentkit/           # Canonical AgentKit facts and migration mappings
│   └── vi/                     # Vietnamese data mirrors where content is data-backed
├── i18n/
│   ├── en/                     # English translation modules
│   └── vi/                     # Vietnamese translation modules
├── layouts/                    # MainLayout and guide layouts
├── pages/                      # Astro file routes, including EN/VI guide mirrors
├── scripts/                    # Browser-side interaction modules
├── styles/                     # Global Tailwind styles
└── types/                      # Shared TypeScript types

scripts/
├── check-agentkit-content.mjs  # Source and generated-output content audit
└── generate-llms-full.mjs      # Postbuild full-text guide export

tests/
├── agentkit-catalogs/          # Active catalog namespace/parity contracts
├── agentkit-hub/               # Migration hub rendering and safety contracts
└── content/                    # Facts, routes, audit, and allowlist contracts
```

## AgentKit Guide Architecture

### Bilingual Migration Hub

The dedicated hub is rendered at:

- `/guides/agentkit` from `src/pages/guides/agentkit.astro`
- `/vi/guides/agentkit` from `src/pages/vi/guides/agentkit.astro`

Both pages compose `src/components/guides/AgentKitGuide.astro`. The shared component renders a ten-step migration journey, an optional source-qualified Desktop App section, platform-specific commands for macOS/Linux/Windows, kit targets, explicit legacy-to-current mappings, compatibility guidance, CI safety, troubleshooting, and rollback guidance. Copy comes from structurally matched `src/i18n/en/agentkit.ts` and `src/i18n/vi/agentkit.ts` modules.

### Canonical Typed Facts

AgentKit executable and product facts live under `src/data/guides/agentkit/` and are passed into components instead of being duplicated in prose:

| Module | Verified responsibility |
|---|---|
| `agentkit-source-contract.ts` | Release channels, source metadata, artifact integrity, and credential transport policy |
| `agentkit-app-facts.ts` | Product-page and stable-changelog sources, unresolved availability signals, platform sets, capabilities, and CLI/App boundary |
| `agentkit-cli-facts.ts` | CLI commands, scope, mutation behavior, flags, write targets, and stable/beta channel |
| `agentkit-skill-facts.ts` | Core skill IDs, source hashes, kit snapshot provenance, and target-native invocations |
| `agentkit-target-capabilities.ts` | Claude Code and Codex target/install/invocation contracts |
| `agentkit-migration-operational-facts.ts` | Platform preflight, install verification, collision checks, and gated legacy removal |
| `agentkit-migration-mapping.ts` | Localized CK-to-AK binary, skill-prefix, authentication, and kit lifecycle mappings |
| `agentkit-legacy-cleanup-facts.ts` | Legacy cleanup sources, inventory/verification/preview/removal stages, scope, copyability, and provider boundaries |
| `what-is-claudekit-facts.ts` | Current/legacy source status, successor boundary, historical concepts, scope paths, and volatile-count omission policy for the compatibility primer |

The rendering flow is:

```text
official product/docs/changelog metadata + installed-kit snapshot
  -> typed AgentKit facts
  -> stable/beta selectors and catalog adapters
  -> bilingual guide components
  -> Astro static pages
  -> source audit + build + generated-output audit
```

### Target-Native Invocation Syntax

Claude Code and Codex share AgentKit skill identities but not invocation syntax:

| Target | Install target | Invocation mode | Example |
|---|---|---|---|
| Claude Code | `claude-code` | Slash command | `/ak:cook` |
| Codex | `codex` | Skill reference | `$ak:cook` |

The target-capability module encodes these differences. The skill-facts module stores both forms per skill. Tests reject Claude slash syntax in the Codex path.

### Stable and Beta Policy

Every AgentKit CLI fact carries a `channel`. UI intended for current use selects stable facts explicitly. As of the verified July 12 snapshot:

- Stable facts drive installation, authentication, project lifecycle, kit lifecycle, diagnostics, audit, and GUI guidance.
- `ak migrate` and `ak kit refresh <kit>` are recorded as local `1.2.0-beta.1` observations with preview/apply behavior; they are excluded from stable selectors and must not be presented as stable.
- Beta command cards remain discoverable with `isBeta` metadata and must be mirrored by the Beta Preview section.
- Promotion to stable requires removing beta metadata across commands, workflows, flowcharts, and bilingual mirrors only after upstream stable verification.

### Legacy Compatibility

Legacy identifiers are preserved only where they serve compatibility or explicit migration context:

- The route manifest marks ClaudeKit-named paths such as `/guides/ck-with-codex`, `/guides/how-ck-works`, `/guides/inside-claudekit/*`, and `/guides/what-is-claudekit` as `legacy-slug`.
- Active command, workflow, and flowchart catalogs render the unified `/ak:*` namespace.
- Scenario resolution accepts old `/ck:*` and `/ckm:*` identifiers so saved links and legacy data can resolve to current AgentKit cards.
- Migration comparison rows carry explicit legacy metadata and a compatibility note; legacy syntax is not treated as a current recommendation.

The retained `/guides/what-is-claudekit` and `/vi/guides/what-is-claudekit` pair now renders a fact-backed compatibility primer. Four shared sections explain historical ClaudeKit concepts, the AgentKit successor architecture, project/global scope, target-native Claude Code and Codex syntax, and next-guide routing. EN/VI copy lives in matched `what-is-claudekit.ts` translation modules. The content audit classifies both source and generated primer paths as active AgentKit guidance while the route manifest preserves their `legacy-slug` identity. See the [primer source record](./agentkit-what-is-claudekit-source-record.md).

### Legacy Provider-Skill Cleanup

The migration hub includes a fail-closed cleanup gate for content previously copied by `ck migrate`:

```text
legacy provider/destination inventory
  -> stable AgentKit kit inventory
  -> fresh-session target invocation
  -> scope-specific ownership-aware uninstall preview
  -> manual, non-copyable source removal
```

`src/data/guides/agentkit/agentkit-legacy-cleanup-facts.ts` keeps current AgentKit evidence separate from deprecated ClaudeKit migration and uninstall references. Stable AgentKit documentation does not establish `ak migrate` or automatic bulk deletion of legacy provider destinations. The guide therefore uses `ck migrate --dry-run` only to recover provider and destination evidence, and limits `ck uninstall` guidance to its documented local `.claude/` and global `~/.claude/` ownership scopes.

Claude Code and Codex are the only verified AgentKit targets. Codex command conversions can exist under project or global `.agents/skills/source-command-*/SKILL.md` destinations; the legacy uninstaller does not document bulk removal there. Destructive source-removal commands remain source-record-only and are not rendered because the legacy ownership model is not proven safe for AgentKit files co-located in `.claude`. No recursive-delete command is rendered. See the [cleanup source record](./agentkit-legacy-skill-cleanup-source-record.md) for claim-level evidence and test scope.

## Route, Sitemap, and LLM Contracts

`src/data/guides/guide-route-manifest.ts` separates four concerns for each route: required build presence, sitemap visibility, LLM visibility, and compatibility policy. Its tests enforce:

- 72 unique baseline route identities remain unchanged.
- Two bilingual AgentKit identities are added, producing 74 total required identities.
- Every built HTML route is manifested; no required identity is missing.
- English/Vietnamese suffixes remain paired.
- Sitemap consumers receive the exact manifest-classified identities.

`src/pages/sitemap.xml.ts` consumes the manifest for bilingual hreflang entries. `src/data/guides-llms-index.mjs` is the shared human-curated index for `/llms.txt` and postbuild `/llms-full.txt`; both exports describe active AgentKit guidance while labeling retained ClaudeKit material.

## Content Audit Pipeline

`scripts/check-agentkit-content.mjs` scans source before the Astro build and generated output after the build.

| Mode | Scope | Enforced behavior |
|---|---|---|
| `agentkit-active` | AgentKit data, components, and bilingual hub pages | Reject legacy npm install commands, `ck` lifecycle recommendations, and `/ck:*` or `/ckm:*` recommendations |
| `legacy-backlog` | Remaining source documentation and guide content | Permit classified legacy prose while still scanning for credentials |
| Postbuild | `dist` and Vercel static output | Re-run detectors against generated HTML, XML, text, JSON, maps, and reports |

The allowlist accepts only exact files, known detector patterns, positive bounded counts, an owner, and a reason. Current exceptions cover the intentional migration comparison rows and their generated hub output. Credential diagnostics contain detector/category/file/line/incident ID only; detected values are never re-emitted to stdout, stderr, JSON reports, or error messages.

The build scripts make the audit non-optional:

```text
npm run build
  -> source content audit
  -> astro build
  -> llms-full generation
  -> generated-output audit
```

Useful focused checks:

```bash
npm run check:agentkit-content
npm run test:agentkit-content
```

## Internationalization

Astro i18n config defines English as the unprefixed default and Vietnamese as `/vi`. Guide pages usually share component logic and switch copy through `useTranslations(lang)`.

AgentKit migration content adds two stricter parity contracts:

- English and Vietnamese translation modules expose the same keys.
- Localized workflow catalogs inherit canonical IDs, command strings, categories, and levels from the English contract so translated display copy cannot change executable syntax or break lookup keys.

## Build and Deployment

| Concern | Implementation |
|---|---|
| Rendering | Astro static output |
| Styling | Tailwind CSS 4.1.17 via Vite; LightningCSS minification |
| Interactivity | Alpine.js 3.15.2 and small local scripts |
| Images | Astro Sharp service |
| Deployment | `@astrojs/vercel` 10.0.0 with Web Analytics |
| Type safety | TypeScript strict Astro config and seven `@/` path aliases |

Primary commands:

```bash
npm run dev
npm run build
npm run preview
npm run check:agentkit-content
npm run test:agentkit-content
```

## Safety and Maintenance Rules

- Treat the typed AgentKit facts as executable-content source of truth; do not hand-copy commands into components.
- Add source URL, verification date, and channel to new facts.
- Do not expose a remote installer, credential-bearing command, global write, or destructive removal as a blind copy action.
- Inventory and verify each legacy provider destination before cleanup; never infer bulk-removal coverage from `ck uninstall`.
- Keep Claude Code `/ak:*` and Codex `$ak:*` examples separate.
- Keep stable and beta data separate until upstream stable verification.
- Preserve manifested legacy slugs unless a deliberate redirect/removal migration is approved.
- Update route manifest, sitemap/LLM classifications, EN/VI content, and contract tests together.

## References

- `src/data/guides/agentkit/`
- `src/components/guides/AgentKitGuide.astro`
- `src/data/guides/guide-route-manifest.ts`
- `scripts/check-agentkit-content.mjs`
- `tests/agentkit-hub/`
- `tests/agentkit-catalogs/`
- `tests/content/`
- `docs/agentkit-legacy-skill-cleanup-source-record.md`
- `docs/agentkit-what-is-claudekit-source-record.md`

## Unresolved Questions

1. When will `ak migrate` and `ak kit refresh` graduate from beta, and which upstream stable release will be the promotion source?
2. Should remaining ClaudeKit historical guides receive a formal retirement schedule beyond the current `legacy-slug` classification?
3. Will AgentKit publish ownership-aware cleanup for migrated provider destinations and verify additional targets?

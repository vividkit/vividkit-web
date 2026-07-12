# AgentKit Desktop App Source Record

## Overview

Official-source record for AgentKit Desktop App content in the bilingual AgentKit migration hub. Verified 2026-07-12. Re-check all sources before changing availability, platform, authentication, or licensing copy.

## Source Precedence

- Use the [AgentKit App product page](https://agentkit.best/agentkit-app) for current commercial access and marketed platform claims.
- Use the [AgentKit changelog](https://agentkit.best/changelog) for implementation, release-note, and named-asset claims.
- Use [AgentKit Docs](https://agentkit.best/docs) for the stable `ak` CLI lifecycle.
- Do not treat a named asset as publicly downloadable until its release URL and artifact can be verified.

## Verified Claims

| Claim | Channel / status | Official source | Verified |
|---|---|---|---|
| Desktop control center for coding-agent skills, plugins, configuration, tokens, plans, and security scans | Pre-release / paid waitlist | [Product page](https://agentkit.best/agentkit-app) | 2026-07-12 |
| Windows and macOS are marketed desktop platforms | Pre-release / paid waitlist | [Product page](https://agentkit.best/agentkit-app) | 2026-07-12 |
| Claude Code, Codex, and other coding agents are named targets | Pre-release / paid waitlist | [Product page](https://agentkit.best/agentkit-app) | 2026-07-12 |
| Paid reservation, email confirmation, invite activation, device registration, and short-outage continuity are described | Pre-release / paid waitlist | [Product page](https://agentkit.best/agentkit-app) | 2026-07-12 |
| CLI registry and Desktop App use separate sessions; desktop shell is gated by an App license | Stable / v2.0.0 release notes | [Changelog](https://agentkit.best/changelog) | 2026-07-12 |
| macOS zip, Linux AppImage, and Windows zip GUI assets are named with SHA-256 | Stable / v2.0.0 release notes | [Changelog](https://agentkit.best/changelog) | 2026-07-12 |
| `ak` remains the documented CLI for installation, authentication, kits, and diagnostics | Stable documentation | [Docs](https://agentkit.best/docs) | 2026-07-12 |

Prices, discounts, bundle values, and remaining waitlist slots are intentionally omitted because they can change without a release event.

## Public-Availability Gap

The product page presents paid waitlist access and markets Windows/macOS. The stable v2.0.0 changelog documents an app-license-gated desktop shell and names macOS/Linux/Windows GUI assets. Its linked GitHub release returned 404 when verified. Together, these sources do not establish one verified public-availability or Linux end-user-support state.

The guide shows both signals instead of choosing one silently.

## Architecture Decision

Add one focused section to `/guides/agentkit` and `/vi/guides/agentkit` after the primary migration checklist. Do not add a route.

- The existing hub owns onboarding, bilingual discovery, sitemap, hreflang, and legacy backlink stability.
- The optional app section follows the CLI migration action path and does not replace it.
- Canonical facts own source-level URLs, channels/status, verification date, capability IDs, CLI relationship, and the two platform sets. The claim-level mapping remains in this record's evidence table. Fact-gated view selection chooses the corresponding localized availability and boundary copy.
- The existing LLM index entry expands its scope once; no fragment URL duplicates full-text output.
- Guide Home, primary navigation, CLI onboarding, route manifest, and sitemap need no duplicate destination.

## Unverified or Deferred

- Working public desktop installer or downloadable release artifact.
- Linux end-user support beyond the named v2.0.0 AppImage asset.
- Whether `ak gui` launches the licensed desktop shell in every supported environment.
- Exact subscription renewal, device-limit, and refund behavior for Desktop App access.
- Independent verification of runtime capability claims.
- Dedicated app-only release feed; app changes currently appear in the shared AgentKit changelog.

## Update Contract

Update `src/data/guides/agentkit/agentkit-app-facts.ts`, this record's claim table, and EN/VI copy together. Preserve source-level metadata in code and claim-level provenance in the table.

## Validation

- `npm run test:agentkit-content`: 48 pass plus two expected postbuild skips before a build; 50/50 with current built output.
- `npm run check:agentkit-content`: 601 source files pass.
- `npm run check:agentkit-types`: zero new scoped diagnostics; repository baseline unchanged at 271 existing errors.
- `npm run build`: 74 routes; generated audit 156 files; postbuild route/LLM checks pass.
- System Chrome: EN/VI, light/dark, 375×812 and 1440×900; 8/8 cases pass.
- Browser assertions: no horizontal overflow, localized links, official CTA target, visible keyboard focus, 44 px minimum CTA height, canonical and alternate metadata.

## Unresolved Questions

- When will the official product page, changelog, and downloadable release surface converge on one availability and platform statement?
- Is the inaccessible v2.0.0 release private, removed, or temporarily unavailable?

---
title: "AgentKit lifecycle policy source record"
verifiedAt: "2026-07-20"
status: "active"
---

# AgentKit lifecycle policy source record

This record freezes the evidence boundary for the lifecycle-policy follow-up. It is a provenance ledger, not user-facing migration instructions. Public copy may use only the claims and official URLs classified here; private audit conclusions remain policy inputs rather than upstream guarantees.

## Evidence classes

| Evidence class | Allowed use | Current source |
|---|---|---|
| `public-release` | Exact point-in-time stable or beta release facts | [AgentKit changelog](https://agentkit.best/changelog) |
| `official-docs` | Documented command interface and support wording | [AgentKit documentation](https://agentkit.best/docs) |
| `implementation-audit` | Test design and conservative verification language; never an upstream promise | Sanitized internal claim IDs `E1-C06`, `E2-C03`, `E2-C06` |
| `support-policy` | VividKit refusal, escalation and output-sanitization policy | Decision `D-SUPPORT-01`, informed by `E4-C02` |
| `legacy-snapshot` | Immutable archive identity and isolation checks | Repository objects listed below |
| `governance-prototype` | Maintainer-tooling design input only; not a public/team capability | Decision `D-GOV-01`, informed by `E4-C03..C08` |

## Release observations

Stable, prerelease provenance, and active-beta availability are separate facts. Stable is the default. A historical prerelease tag does not create an active public beta channel, and there is no public `dev` release channel in this product contract.

| Claim ID | Channel | Version | Observation | Official source | Raw response SHA-256 | Normalized fact SHA-256 |
|---|---|---|---|---|---|---|
| `AK-RELEASE-STABLE-2.4.0` | stable | `2.4.0` | `2026-07-20T08:09:38Z`, HTTPS GET, no redirects, reviewed | [signed stable catalog](https://releases.agentkit.best/channels/stable/release-catalog.json) | `8f82fb0adbc1ccc0343752a9895ba378ae5d7a7e1bc40e30baebbffa247e8229` | `83dc4f2b886707d57853a80bca17b439d754c8064e091b0aa942a68f75477370` |
| `AK-RELEASE-PRERELEASE-2.4.0-BETA.7` | prerelease provenance | `2.4.0-beta.7` | `2026-07-20T08:09:38Z`, HTTPS GET, no redirects, reviewed | [signed beta catalog](https://releases.agentkit.best/channels/beta/release-catalog.json) | `6a1bbdff9a54e5e3dd106c2e9d4057876a4194cce78ddc113ce30e04df5c5097` | `075a4fd1d8c024eba1ce4e550e8bdf88bb61f769e923e54755aa47f910cfea44` |
| `AK-RELEASE-STABLE-2.3.0` | stable | `2.3.0` | `2026-07-16T19:39:47Z`, HTTPS GET, no redirects, reviewed | [changelog](https://agentkit.best/changelog) | `86171db83beeb43a926e9519c3eb36eda3c659761ece97ce2d087f645e9b5914` | `89d582555208a790379f1f40a325375933265438288bf2c6ecbe9c6fe1646a12` |
| `AK-RELEASE-BETA-2.3.1-BETA.1` | beta | `2.3.1-beta.1` | `2026-07-16T19:39:48Z`, HTTPS GET, no redirects, reviewed | [changelog](https://agentkit.best/changelog) | `de38d5ee7cc37832bf5c59857336ace814d9fed4dcc95a4de086a2d27847f916` | `0772e9421526fa7cd62929153517b222d9b88c9d05be7136ff85567fc68cf8d5` |

The 2.3 rows are immutable historical observations. The current pointer selects the 2.4 fixtures without rewriting that history. The normalized digests cover only allowlisted fixture fields and exclude the digest field itself. Each fixture also requires a separate raw-response observation. The catalog bytes are intentionally not vendored, so each response digest is a reviewer attestation, not an offline-reproducible preimage proof. The catalogs contain Ed25519 signatures, but VividKit did not independently validate those signatures in this review.

Both current catalogs identify source commit `c8183754418b8bfd7be56155081394f85a340edb`; the stable changelog identifies it as the promoted source and stable snapshot `a3a1407fc94415139af679a5014856bf58e4c6d7`. Therefore `2.4.0-beta.7` is promotion provenance and `hasActiveBeta` is false. Exact-tag evidence was read from `v2.4.0`, not development HEAD: `INSTALL.md` SHA-256 `a923544591a3dfdeeb0528492e228ace662bc44cf22e968ea30e777aa506bbf7`, 120-path parity manifest `198c9e4957b8f445496ed3714901a599f45c84667fdb0a6bb1a3f3c6b4e88c4c`, command tree `b52eb55bfaf508ae362771f67858d9191b3a5d35e4ec13917f4206e12f394baf`, runtime matrix YAML `fbe63f9d50904c56884a7fbf33e5aa0d26834bc7c2d4ddbfa1cbecae29646d85`, and generated Markdown `95ce4b8cf00e5aeca72b3d4fb76d13064b4640f2864f218bfa7764d0c97ea139`.

The bounded online changelog canary was rerun at `2026-07-20T08:47:38.356Z` and returned `AK-RELEASE-MATCH` for the same stable/prerelease relationship. The reviewed live HTML response SHA-256 was `eaa1e511e38154c6487d274e2711cb270a7b19592be74a313d5c87849f01d2e7`. Current release cards include older version strings inside provenance copy, so the fail-closed parser now binds each version to its exact release heading; a live-shaped regression test covers that payload without relaxing missing or ambiguous-heading refusals.

The historical `agentkit-docs-migrate-2026-07-17` observation used [AgentKit documentation](https://agentkit.best/docs), retrieved at `2026-07-16T19:39:49Z` by HTTPS GET without redirects, HTTP 200, raw response SHA-256 `95f00c22c9dc809bcd5953989cffc350af5f1f348dcb4575f0bab820a9896f3b`. Current guidance uses the same URL, live-verified on 2026-07-20 as HTTP 200 without redirects, raw response SHA-256 `469159f1e4f8bf5fe3cd8ac9a7f9868931e1263d9c715d108b28ea32e407bc7b`. It is currently a Getting Started page, not a complete 120-command reference. Its portable examples omit the exact-release `--build-only --out` boundary and it presents migration apply as a normal CI flow. Those linked statements are upstream documentation dependencies, not VividKit truth; VividKit keeps the exact-release/support-safe recipes.

The catalog and tag observations establish point-in-time release identity, but cryptographic authenticity proof was not independently verified. Their raw-response digests remain reviewer attestation, not an offline-reproducible preimage proof.

## Lifecycle and command truth boundaries

| Claim or decision | Evidence class | Allowed statement |
|---|---|---|
| `D-MIGRATE-01` / `E1-C05` / `agentkit-docs-migrate-2026-07-17` | `official-docs` + `support-policy` | Official docs describe `ak migrate` as read-only by default and document apply/rollback interfaces. VividKit still presents migration as preview/smoke-only for important data and provides no default apply CTA. |
| `AK-2.4-1075` / `AK-POST-2.4-1081` | `public-release` + `implementation-audit` | Stable 2.4.0 contains content-evidence migration binding. Immutable reviewed-plan execution merged after the tag, so apply/rollback for important data remains support-assisted. |
| `ADR-0031` versus `v2.4.0` | `governance-prototype` + `public-release` | The owner decision defines `--fresh` semantics, but the stable CLI does not ship the flag. Public guidance must not render it or emulate it through broad deletion. |
| `D-LC-01` / `E1-C02` | `implementation-audit` + `support-policy` | Use backup → CK ownership cleanup → clean-scope confirmation → AK install → verify/canary → 3–7 day observation → CK executable removal. This order is VividKit policy, not an upstream guarantee. |
| `D-ROUTER-01` / `E1-C03` | `implementation-audit` + `support-policy` | Fresh and clean single-owner cases may be self-service. Mixed, custom, corrupt, missing-metadata or unknown-manager cases must refuse destructive commands and escalate. |
| `D-COEX-01` / `E1-C04` | `support-policy` | Coexistence is limited to a low-risk closed-beta pilot with CK global and AK project-local in a clean project; same-scope coexistence is not promoted. |
| `doctor` exit behavior and audit limitations / `E2-C06` | `implementation-audit` | Public copy may describe observed outcomes only. It must not promise `doctor --exit-on-fail` or complete audit coverage without new official evidence. |
| Internal references `#932`, `#933`, `#873` / `E1-C10` | `implementation-audit` | Treat as private or unverified-public references. Do not link them or publish open/fixed status unless an official public source is independently verified. |

## Current changed consumers

The 2026-07-20 observation changes the current-release pointer, stable and prerelease fixtures, source snapshot, CLI facts, beta availability facts, publication evaluation, online drift parser, truth bundle inputs, generated-output isolation tokens, bilingual AgentKit Hub recipes, LLM assertions, and publication source closure. Historical 2.3 fixtures remain immutable. The exact-release 120-path inventory is audit evidence only; the tracked and rendered product artifact is the curated [scenario command guide](./agentkit-scenario-command-guide.md).

## Support boundary

- ClaudeKit community escalation: [ClaudeKit Discord](https://discord.com/invite/x7SwTSf3wc), observation `agentkit-support-discord-2026-07-17`, retrieved `2026-07-16T19:57:49Z`, HTTP 200 without redirects, raw response SHA-256 `c536eb9a382b3b1f48027b09980ff3c0cbfd098e892723a1ff875b37c029e4d7` (reviewer attestation).
- Product support: [AgentKit Support](https://github.com/bestagentkits/agentkit-support), observation `agentkit-support-github-2026-07-17`, retrieved `2026-07-16T19:57:49Z`, HTTP 200 without redirects, raw response SHA-256 `342d94a419bd9f1d0392dd164a1eb7a8a91c7ee174d34da87161c7aa817a0d9f` (reviewer attestation).
- Before sharing output, remove usernames and home paths, repository remotes, tokens/keys, account identifiers, proprietary filenames/content, and raw backup manifests. Share the minimum command, version, detector classification and redacted error needed to reproduce.

## Legacy archive provenance

| Boundary | Commit | Date | Meaning |
|---|---|---|---|
| Source snapshot | `56524c98dbdd4d27632ffbcb9da96c77f936ab67` | 2026-07-08 | Exact source tree restored for the archive snapshot |
| Isolation/archive commit | `7d5ab60e9e706ba612a6202f3024685cfa32bea6` | 2026-07-13 | Commit that isolates the archive under `src/legacy-ck` |

At the isolation baseline, `src/legacy-ck` contains 208 files and 72,777 lines. Earlier scout counts are superseded observations, not alternate archive identities.

## Governance gaps and recovery

- At the isolation baseline, root governance pointed to `.claude/workflows` and `.Codex/workflows`, but neither directory existed. Phase 7 removed those dangling pointers; the missing historical trees remain a recorded gap and no placeholder or invented workflow is authorized.
- If an official release changes, add a new dated observation and fixture with explicit supersession. Never silently rewrite a historical digest.
- If private evidence IDs need more detail, review the local evidence index under the implementation plan. Do not copy private source text or machine-specific paths into tracked docs.

## Unresolved questions

None for the Phase 1 evidence boundary. Later release drift requires a new reviewed observation, not reinterpretation of this record.

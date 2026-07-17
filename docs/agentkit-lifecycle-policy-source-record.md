---
title: "AgentKit lifecycle policy source record"
verifiedAt: "2026-07-17"
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

Stable and beta are independent fact sets. Stable is the default; beta requires explicit opt-in. There is no public `dev` release channel in this product contract.

| Claim ID | Channel | Version | Observation | Official source | Raw response SHA-256 | Normalized fact SHA-256 |
|---|---|---|---|---|---|---|
| `AK-RELEASE-STABLE-2.3.0` | stable | `2.3.0` | `2026-07-16T19:39:47Z`, HTTPS GET, no redirects, reviewed | [changelog](https://agentkit.best/changelog) | `86171db83beeb43a926e9519c3eb36eda3c659761ece97ce2d087f645e9b5914` | `89d582555208a790379f1f40a325375933265438288bf2c6ecbe9c6fe1646a12` |
| `AK-RELEASE-BETA-2.3.1-BETA.1` | beta | `2.3.1-beta.1` | `2026-07-16T19:39:48Z`, HTTPS GET, no redirects, reviewed | [changelog](https://agentkit.best/changelog) | `de38d5ee7cc37832bf5c59857336ace814d9fed4dcc95a4de086a2d27847f916` | `0772e9421526fa7cd62929153517b222d9b88c9d05be7136ff85567fc68cf8d5` |

The normalized digests cover only allowlisted fixture fields and exclude the digest field itself. Each fixture also requires a separate raw-response observation. The raw page bytes are intentionally not vendored, so each response digest is a reviewer attestation, not an offline-reproducible preimage proof. The public changelog links to release tags and a provenance artifact, but those GitHub URLs returned HTTP 404 during unauthenticated verification on 2026-07-17. Cryptographic authenticity proof was therefore not independently verified; the fixtures record the reviewed official-origin response at the stated time without claiming cryptographic or offline replay proof.

Official command guidance uses the separate `agentkit-docs-migrate-2026-07-17` observation: [AgentKit documentation](https://agentkit.best/docs), retrieved at `2026-07-16T19:39:49Z` by HTTPS GET without redirects, HTTP 200, reviewer `VividKit maintainer evidence capture`, raw response SHA-256 `95f00c22c9dc809bcd5953989cffc350af5f1f348dcb4575f0bab820a9896f3b`.

## Lifecycle and command truth boundaries

| Claim or decision | Evidence class | Allowed statement |
|---|---|---|
| `D-MIGRATE-01` / `E1-C05` / `agentkit-docs-migrate-2026-07-17` | `official-docs` + `support-policy` | Official docs describe `ak migrate` as read-only by default and document apply/rollback interfaces. VividKit still presents migration as preview/smoke-only for important data and provides no default apply CTA. |
| `D-LC-01` / `E1-C02` | `implementation-audit` + `support-policy` | Use backup → CK ownership cleanup → clean-scope confirmation → AK install → verify/canary → 3–7 day observation → CK executable removal. This order is VividKit policy, not an upstream guarantee. |
| `D-ROUTER-01` / `E1-C03` | `implementation-audit` + `support-policy` | Fresh and clean single-owner cases may be self-service. Mixed, custom, corrupt, missing-metadata or unknown-manager cases must refuse destructive commands and escalate. |
| `D-COEX-01` / `E1-C04` | `support-policy` | Coexistence is limited to a low-risk closed-beta pilot with CK global and AK project-local in a clean project; same-scope coexistence is not promoted. |
| `doctor` exit behavior and audit limitations / `E2-C06` | `implementation-audit` | Public copy may describe observed outcomes only. It must not promise `doctor --exit-on-fail` or complete audit coverage without new official evidence. |
| Internal references `#932`, `#933`, `#873` / `E1-C10` | `implementation-audit` | Treat as private or unverified-public references. Do not link them or publish open/fixed status unless an official public source is independently verified. |

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

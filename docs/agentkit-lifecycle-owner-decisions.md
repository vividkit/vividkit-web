---
type: "agentkit-lifecycle-owner-decisions"
status: "approved"
approvedAt: "2026-07-17T02:25:25+07:00"
scope: "O1-CHANNEL-SCOPE,O2-LLM-EXPORT,O3-SKILL-OWNERSHIP,O4-LEGACY-SKILLS"
approvalSourceSha256: "16c117d15e4e3daf1409d8eb70ba850e932da97fc7eadcb760a8ff1d5ec0d69f"
decisionPayloadSha256: "99d58124d3b15654b8800ad5f4c67fc163d82a4b0c54d107bee1ccf57f7cf968"
---

# AgentKit lifecycle owner decisions

This tracked record materializes the four approved owner decisions that gate the lifecycle-policy follow-up. The [machine-readable decision snapshot](./agentkit-lifecycle-owner-decisions.json) is the fail-closed semantic source; this table is its human-readable view. Any semantic change requires a new explicit owner approval and a Phase 4/6/7 impact sweep.

| Decision ID | Status | Locked decision | Implementation effect |
|---|---|---|---|
| `O1-CHANNEL-SCOPE` | approved | Preserve exact `?channel=beta` only across AgentKit Hub, CLI Guide, CLI Commands and Coexistence Guide; drop it when leaving this group. | Four-surface allowlist; no site-global query persistence. |
| `O2-LLM-EXPORT` | approved | LLM exports remain stable-only. | `llms.txt` and `llms-full.txt` must reject beta facts and beta build assets. |
| `O3-SKILL-OWNERSHIP` | approved | The thin maintainer skill remains personal/private through pilot, canonical in the private vault and linked project-locally only. | Tooling GO is independent; public README/docs cannot claim a team feature. |
| `O4-LEGACY-SKILLS` | approved | Deactivate/unlink all six legacy skills; do not move/delete. Create archive metadata for five CK-era skills and a clean-room backlog for `vk-audit-ccs`. | Unlink/deactivate only after ownership/refusal checks; keep existing payloads untouched. |

## Gate semantics

- Phase 2 may start only after automated tests deep-compare the machine-readable snapshot and verify both the approval-source and canonical decision-payload digests.
- O1 changes reopen Phase 4 architecture; O2 changes reopen Phase 4 and Phase 7 export gates.
- O3 or O4 changes reopen Phase 6 ownership, refusal, unlink and recovery design.
- Product GO remains independent from the private maintainer-tooling delivery.

## Unresolved questions

None. O1 through O4 are approved and locked for this follow-up.

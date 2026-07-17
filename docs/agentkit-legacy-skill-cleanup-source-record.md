# AgentKit Legacy Cleanup Source Record

**Verified:** July 17, 2026

**Status:** Active source boundary; Phase 8 release evidence remains separate

## Purpose

This record separates two operations that share legacy skill names but have different owners, risks, and evidence:

1. **Product/provider-copy cleanup:** user-facing guidance for content that CK previously wrote into Claude Code, Codex, or other provider destinations.
2. **Maintainer skill disposition:** owner-approved deactivation of six local VividKit maintenance skill mirrors.

The second operation is not a migration instruction and must not be used as evidence that provider copies are safe to delete.

## A. Product and Provider-Copy Cleanup

### Official Sources

| Source | Allowed claim | Limit |
|---|---|---|
| [AgentKit documentation](https://agentkit.best/docs) | Current AgentKit CLI, stable migration interface, kit targets, target-native invocation | Does not document automatic deletion of every provider copy previously written by CK |
| [ClaudeKit migration reference](https://docs.claudekit.cc/docs/cli/migrate/) | Legacy dry-run inventory can report provider and destination evidence; Codex conversions may use `source-command-*` destinations | Deprecated lifecycle source; inventory evidence only |
| [ClaudeKit uninstall reference](https://docs.claudekit.cc/docs/cli/uninstall/) | Local/global preview, ownership tracking, backup, and customization preservation behavior | Does not prove that co-located AgentKit files are CK-owned or that every migrated provider target is covered |

`ak migrate` is stable in AgentKit 2.3.0. VividKit still presents it preview/smoke-first and provides no default apply CTA for important data. It is not treated as an automatic provider-cleanup command.

### Verified AgentKit Targets

Only Claude Code and Codex have current AgentKit target contracts in this repository.

| Target | Fresh-session check | Legacy destination evidence | Cleanup boundary |
|---|---|---|---|
| Claude Code | `/ak:cook` | Project `.claude/` or global `~/.claude/` | Keep shared/custom/ambiguous candidates; do not promote same-scope CK/AK coexistence |
| Codex | `$ak:cook` | Project `.agents/skills/source-command-*/SKILL.md` or global `~/.agents/skills/source-command-*/SKILL.md` | Use saved destination evidence; no documented bulk removal exists for these conversions |

The legacy migration tool recognized additional providers. That historical list does not establish current AgentKit support or a safe cleanup workflow. Retain those copies until first-party AgentKit documentation and repository tests establish a target-specific contract.

### Lifecycle Placement

Provider-copy cleanup is split across the seven-stage lifecycle:

```text
backup
  -> cleanup-ck-ownership
  -> confirm-clean-scope
  -> install-ak
  -> verify-canary
  -> observe
  -> remove-ck-control-plane
```

- **Stage 2** inventories and classifies project content before AgentKit installation. `ck migrate --dry-run` and `ck uninstall --local --dry-run` are read-only evidence aids, not bulk-delete authorization.
- **Stage 3** requires a clean final AgentKit scope. Mixed/custom ownership and corrupt/missing metadata are support-assisted.
- **Stages 4–6** install AgentKit, verify a reversible canary, and collect an advisory operator declaration.
- **Stage 7** addresses CK executable/control-plane review only after observation; it does not retroactively authorize deletion of provider copies.

### Detector-First Removal

The active lifecycle facts use `which -a ck` on macOS/Linux and `Get-Command ck -All` on Windows. These commands provide path evidence only.

1. Detect every resolved CK executable.
2. Match each path to exact Bun, npm, pnpm, or Yarn Classic package ownership.
3. If ownership is unknown, conflicting, symlinked, or unowned, select no uninstall command.
4. Keep removal actions manual and non-copyable.
5. Re-run the AgentKit canary before considering CK control-plane data.

Detailed Stage 7 removal rows are build-time publication-gated. Query or DOM state cannot unlock held content.

### Support and Output Sanitization

- [ClaudeKit Discord](https://discord.com/invite/x7SwTSf3wc)
- [AgentKit Support](https://github.com/bestagentkits/agentkit-support)

Do not paste raw stdout/stderr, stack traces, credentials, usernames, home paths, repository remotes, account/license identifiers, private filenames/content, credentialed URLs, or backup manifests. The support sanitizer retains only:

- tool name/version;
- stable/beta/unknown channel;
- Bun/npm/pnpm/Yarn/unknown detector category;
- lifecycle stage;
- fixed expected and actual summaries;
- allowlisted incident ID.

## B. Maintainer Skill Disposition

### Ownership Boundary

The six former VividKit maintainer skills were ignored local provider copies. They are **not tracked by this repository, are not canonical public capabilities, and are not a supported team feature**. Their disposition is private maintainer governance and remains independent from VividKit Product GO.

The approved `O4-LEGACY-SKILLS` decision required deactivation/unlink without moving or deleting any skill directory or payload.

### Five Archive-Metadata Skills

These CK-era skills receive archive metadata only:

1. `vk-add-scenario`
2. `vk-audit-ck-cli`
3. `vk-audit-ck-hooks`
4. `vk-audit-skill`
5. `vk-changelog-sync`

Archive metadata records origin and disposition; it does not make the skill canonical, public, installable, or executable.

### Clean-Room Backlog

`vk-audit-ccs` is recorded separately as clean-room backlog. Its topic may remain useful, but the former payload includes behavior that must not be adopted by copying or reactivating it. Any future implementation requires a new contract and independent clean-room review.

### O4A Reversible Deactivation

The owner-approved `O4A-REVERSIBLE-CONTRACT-RENAME` operation renamed exactly 12 discovery contracts across two existing runtime mirrors:

```text
SKILL.md -> SKILL.md.disabled
```

Verified target state:

- active discovery contracts: zero;
- disabled contracts: 12;
- receipt entries/completions: 12/12;
- skill directories removed: zero;
- payload files removed: zero.

The transaction checked preimage tree/file identity, file mode and size, authenticated receipt completion, interruption resume, stale-lock handling, refusal cases, and rollback behavior. Rollback exists but was not applied to the real target because that would re-enable discovery and needs separate authority.

This physical deactivation is not provider-copy cleanup. It proves only that the named maintainer skill contracts no longer use the discovery filename in the two governed mirrors.

## Repository Implementation

| File | Responsibility |
|---|---|
| `src/data/guides/agentkit/agentkit-lifecycle-guide-facts.ts` | Seven stages, read-only preview/detector commands, manual removal conditions, provider boundaries, support contacts |
| `src/data/guides/agentkit/agentkit-lifecycle-policy.ts` | Lane routing, support refusals, stage ordering, advisory declaration handling |
| `src/data/guides/agentkit/agentkit-target-capabilities.ts` | Claude Code/Codex target and syntax contracts |
| `src/data/guides/agentkit/agentkit-report-sanitizer.mjs` | Fixed allowlisted support/audit output |
| `src/components/guides/agentkit/agentkit-legacy-skill-cleanup.astro` | Detector-first rendering, held Stage 7 details, support CTAs |
| `tests/content/agentkit-lifecycle-policy.test.mjs` | Router, seven-stage, support, coexistence, and advisory-attestation contracts |
| `tests/content/agentkit-report-sanitizer.test.mjs` | Raw/nested output exclusion and fixed schema |
| `docs/agentkit-lifecycle-owner-decisions.json` | Machine-readable O4 disposition decision |

The former `agentkit-legacy-cleanup-facts.ts` module is no longer the current implementation source.

## Maintenance Rules

- Keep product/provider cleanup and maintainer disposition in separate sections and evidence chains.
- Do not infer bulk provider removal from `ak migrate`, legacy migration inventory, or legacy uninstall scope.
- Do not expand supported AgentKit targets from a historical provider list.
- Route mixed/custom/corrupt/missing/unknown evidence to support-assisted handling.
- Keep detector output non-authoritative until exact package ownership is proven.
- Never publish a blind recursive delete or unconditional global uninstall action.
- Do not reactivate, link, copy, or advertise the six maintainer skill payloads from this record.
- Any O4A rollback or future clean-room implementation requires separate authority and validation.

## Phase 8 Boundary

This record contains source and disposition facts only. Final Product and maintainer-tooling commands, timestamps, counts, artifacts, observation outcomes, and GO/HOLD decisions belong in [the Phase 8 validation record](./agentkit-migration-validation.md) after execution.

## Unresolved Questions

1. Will AgentKit publish ownership-aware cleanup for provider destinations beyond current Claude Code and Codex evidence?
2. Will a future clean-room CCS audit capability receive separate owner, threat model, and public/private scope approval?

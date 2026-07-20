# AgentKit 2.4 Scenario Command Guide

## Purpose

The AgentKit Hub renders a bilingual, scenario-first subset of stable 2.4 CLI commands. It helps an operator choose a safe starting command without duplicating the full CLI Commands guide.

The rendered source is `src/components/guides/agentkit/agentkit-scenario-command-guide.astro`. Command strings and safety metadata come from `src/data/guides/agentkit/agentkit-cli-facts.ts`; English and Vietnamese prose stays in the matching AgentKit translation modules.

## Curated scenarios

| Scenario | Safe default | Boundary |
|---|---|---|
| Install and verify | Review the official platform installer, open a fresh shell, then run the version check | Installer writes the binary; verification is read-only |
| Account session | Login by email OTP, then check identity and licenses | Login changes session state; checks are read-only |
| Kit lifecycle | Use Engineer or Marketing, project-local scope, and an explicit Claude Code or Codex target | Global is explicit; removal begins with preview |
| Diagnostics | Run doctor and audit without repair flags | Default doctor is read-only; fix mode mutates |
| Offline/cache | Inspect local versions and run offline diagnostics | Cold offline without a verified cache is unsupported; warm cache does not imply latest |
| Recovery | List, verify, and preview a backup before recovery | Recovery writes project state |
| CK migration | Use preview/smoke-first handling and stop on ambiguous or important data | No migration execution CTA; support-assisted boundary remains |
| Maintenance | Check self-update availability and preview project uninstall | Project uninstall does not remove the binary |
| Portable output | Build the exact Engineer portable bundle into a named output directory | Writes only the selected build output |

## Command policy

- Stable kit installation is remote-first; normal Claude Code and Codex examples omit `--remote`.
- Public kit choices are `engineer` and `marketing`. Do not teach a generic core product.
- `--force` preserves unselected extra files, but overwrites selected AgentKit-owned paths and collision paths.
- Do not teach removed `--fresh` behavior.
- `ak setup` writes AgentKit configuration only by behavior. It has neither a dry-run flag nor a config-only flag, so it is not promoted in the scenario cards.
- Kit uninstall begins with its preview form. A confirmed `--yes` run requires deliberate review of the selected project, plugin mode, and paths.
- Project uninstall concerns AgentKit-owned project content. Binary removal must follow proven installer or package ownership.
- Never present deletion of an AgentKit runtime home as a binary-removal shortcut.
- `ak versions --local-only` and `ak doctor --offline` are read-only readiness checks, not an offline install promise.

## Source links

All active source consumers import `AGENTKIT_OFFICIAL_LINKS` from `src/data/guides/agentkit/agentkit-official-links.mjs`. The map is the only active-source location that stores the official docs and changelog URL literals.

## Maintenance checklist

1. Update stable CLI facts from observed official release evidence.
2. Keep English and Vietnamese scenario copy aligned.
3. Preserve scenario, safe-default, scope, warning, and official-source fields on every card.
4. Keep the component inside stable SSR facts and keep beta payload loading isolated.
5. Run the focused curated guide test and the repository AgentKit content/type checks.

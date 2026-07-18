# VividKit — Visual Guides for AgentKit

> AgentKit (`ak`) succeeds ClaudeKit (`ck`). Existing CK users should begin with the [CK → AgentKit guide](https://vividkit.dev/guides/agentkit).

VividKit is an English/Vietnamese visual guide hub for AgentKit, Claude Code, Codex, and related workflows. The current web product helps readers install AgentKit, choose a safe migration lane, use target-correct skill syntax, and preserve access to isolated ClaudeKit history.

The VividKit Desktop App is planned separately. It is not the AgentKit Desktop App documented at agentkit.best.

> 🇻🇳 Tiếng Việt: [README.vi.md](./README.vi.md)

## Current Product Scope

- Bilingual product and guide pages: English at root paths, Vietnamese under `/vi`.
- Decision-router guidance for fresh install, clean cutover, closed-beta coexistence, recovery, and support-assisted cases.
- A seven-stage CK → AK lifecycle: backup → CK ownership cleanup → clean-scope confirmation → AK install → canary verification → observation → CK control-plane removal review.
- AgentKit CLI, CLI Commands, workflows, targets, coexistence, permissions, recovery, and troubleshooting guides.
- Claude Code `/ak:*` and Codex `$ak:*` invocation examples.
- An isolated, noindex ClaudeKit archive retained for historical access but excluded from sitemap and LLM exports.

## Release and Safety Policy

- Stable AgentKit `2.3.0` is the default public fact set.
- Beta `2.3.1-beta.1` is selected only by the exact `?channel=beta` query on AgentKit Hub, CLI Guide, CLI Commands, and Coexistence Guide. Invalid, repeated, or out-of-group channel state falls back to stable.
- A published beta query is public early-access content, not closed-beta enrollment or execution authorization. The tracked publication record can hold the beta payload before review.
- `/llms.txt` and `/llms-full.txt` remain stable-only.
- The route manifest preserves 132 query-neutral identities; query parameters add no route or canonical identity.
- `ak migrate` is stable, but VividKit presents it preview/smoke-first and does not provide a default apply action.
- Mixed/custom ownership, corrupt/missing metadata, unknown package ownership, or critical data routes to support-assisted handling.
- The only coexistence pilot topology is CK global plus AK project-local in one clean, noncritical project.
- The 3–7 day observation input is an ephemeral operator declaration. The static site does not verify evidence, enforce elapsed time, or authorize removal.
- CK removal is detector-first. Unknown ownership means no uninstall command.

Before sharing support output, remove usernames and home paths, repository remotes, credentials, account identifiers, proprietary filenames/content, and raw backup manifests. Share only the minimum version, detector classification, command category, and redacted error needed to reproduce.

Support:

- [ClaudeKit Discord](https://discord.com/invite/x7SwTSf3wc)
- [AgentKit Support](https://github.com/bestagentkits/agentkit-support)

## Guides

| Guide | Purpose |
|---|---|
| [CK → AgentKit](https://vividkit.dev/guides/agentkit) | Decision router, seven-stage lifecycle, target setup, rollback, and support boundaries |
| [CLI Guide](https://vividkit.dev/guides/cli) | Stable AgentKit setup and lifecycle |
| [CLI Commands](https://vividkit.dev/guides/cli-commands) | Canonical command facts and safety metadata |
| [Commands](https://vividkit.dev/guides/commands) | Engineer and Marketing skill catalog |
| [Workflows](https://vividkit.dev/guides/workflows) | AgentKit workflow patterns |
| [AgentKit × Codex](https://vividkit.dev/guides/ck-with-codex) | Codex installation and `$ak:*` invocation |
| [Coexistence](https://vividkit.dev/guides/coexistence) | Closed-beta scope boundary and recovery policy |
| [Session Recovery](https://vividkit.dev/guides/session-recovery) | Session continuation and recovery |

## Technology

- Astro `7.1.0` with static output
- TypeScript `5.9.3` in strict mode
- Tailwind CSS `4.3.3` and LightningCSS
- Alpine.js `3.15.2` plus small local controllers
- Vercel adapter `11.0.3` and Web Analytics
- Astro i18n with English default and Vietnamese `/vi` routes
- Hosted Vercel builds use Vercel-managed Node `22.x` and npm `10.x`. Local/CI release evidence uses the exact Node `22.21.1` + npm `10.9.4` pair through `.nvmrc`, `packageManager`, and the explicit verifier below.

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

Focused verification:

```bash
npm run verify:agentkit
npm run check:agentkit-content
npm run check:legacy-archive
npm run verify:exact-toolchain
```

The exact-toolchain verifier is an explicit reproducibility gate. It is not part of install, `build`, or the hosted Vercel path.

`npm run build` runs the AgentKit verification suite before Astro and the generated-output checks after the build.

## Project Structure

```text
vividkit-web/
├── src/
│   ├── components/          # Shared Astro UI and guide sections
│   ├── data/                # Typed guide, channel, route, and provenance facts
│   ├── i18n/                # English and Vietnamese copy
│   ├── legacy-ck/           # Isolated historical ClaudeKit source snapshot
│   ├── pages/               # Static routes
│   ├── scripts/             # Browser-side controllers
│   └── styles/              # Tailwind and archive styles
├── scripts/                 # Build, audit, release, LLM, and archive checks
├── tests/                   # Contract and regression tests
├── docs/                    # Project and source records
└── public/                  # Static assets
```

See [project overview](./docs/project-overview-pdr.md), [codebase summary](./docs/codebase-summary.md), and [migration validation](./docs/agentkit-migration-validation.md).

## Links

- [VividKit](https://vividkit.dev)
- [AgentKit documentation](https://agentkit.best/docs)
- [AgentKit changelog](https://agentkit.best/changelog)
- [Claude Code](https://claude.ai/code)

---

*VividKit — making agentic development easier to see and safer to operate.*

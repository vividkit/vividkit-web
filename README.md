# VividKit

> **Status:** in development. The beta of the VividKit desktop app is planned for **October 2026**; it is not released yet and there is no download. [Join the waitlist](https://vividkit.dev/#waitlist) to get an email when it ships.

> 🇻🇳 Tiếng Việt: see [README.vi.md](./README.vi.md)

This repository is the source of **[vividkit.dev](https://vividkit.dev)**: the landing page for the VividKit desktop app, plus a separate set of free-to-read guides for AgentKit and ClaudeKit users.

## 🖥️ VividKit desktop app

VividKit is a desktop app for builders who want to ship apps with AI coding agents without living in a terminal. You say what you want; a team of AI teammates works in a private copy of your project, VividKit collects evidence for each criterion, and the work is done only when you accept it.

**How a change travels**

1. **Tell Cora** what you want in plain words. Cora sorts it and opens an issue.
2. **Confirm the Requirement.** Ada asks what is unclear and turns it into criteria you can check.
3. **The team works** in a relay, in a private copy of the project. Watch or Stop at any time.
4. **Review evidence:** screenshots at phone and desktop size and check results per criterion. Accept or send back.
5. **Apply and publish** through a separate confirmation window. Undo and roll back stay possible.

**Where it is today**

| | |
|---|---|
| Works in development builds | The full loop for web apps, including Publish through Cloudflare Pages. Workflows: Bug fix, Quick fix, New feature, New project, Take over a project, Restructure. Nine coding-agent CLIs tested on real issues. Test builds run on Linux, an Apple silicon Mac and Windows 11. |
| Planned for the beta (October 2026) | First public build `0.1.0-beta.1`: Linux (`.deb`, AppImage), macOS on Apple silicon and Windows x64, unsigned. Waitlist email when ready. |
| After the beta | Investigation and Improvement workflows, more skill packs (so AgentKit is no longer required), publishing apps that are not websites. |

The date is a plan, not a promise.

**What it is built on**

- **Claude Code** does the work: each teammate runs as a Claude Code session on your machine, signed in with your own Pro or Max plan. Required for the beta.
- **AgentKit** (Engineer Kit license) provides the skill pack for stages such as planning, testing and code review. AgentKit is a separate product from another team.
- **Other runtimes** (Codex, OpenCode, GitHub Copilot CLI, Cursor Agent, Grok, Oh My Pi, Pi, Antigravity) can run individual teammates.

VividKit does not call the Claude API itself and does not resell model access. It is an independent project, not affiliated with, sponsored or endorsed by Anthropic, AgentKit or ClaudeKit. Claude and Claude Code are trademarks of Anthropic.

**Who builds it**

- **Thieu Nguyen**, Founder — [GitHub](https://github.com/thieung)
- Contact: [hello@vividkit.dev](mailto:hello@vividkit.dev) · [github.com/vividkit](https://github.com/vividkit)

---

## 📚 Guides (separate resource)

Free-to-read guides and best practices for AgentKit users and the vibe coding community, in English and Vietnamese. They are not part of the app, and reading them does not give access to it.

| Guide | Description |
|-------|-------------|
| [Guides home](https://vividkit.dev/guides) | All guides |
| [AgentKit](https://vividkit.dev/guides/agentkit) | Getting started, building blocks, configuration, migrating from ClaudeKit |
| [Commands](https://vividkit.dev/guides/commands) | Commands and skills reference |
| [Workflows](https://vividkit.dev/guides/workflows) | Best practices and patterns |
| [CCS](https://vividkit.dev/guides/ccs) | Claude Code Switcher for multi-model delegation |
| [UI/UX](https://vividkit.dev/guides/uiux) | Design skills and styling |
| [Session recovery](https://vividkit.dev/guides/session-recovery) | Resuming and continuing sessions |
| [Permissions](https://vividkit.dev/guides/permissions) | Permission modes (auto, bypass, granular rules) |
| [Fix Logs](https://vividkit.dev/guides/fix-logs) | Debugging strategies |

Some guides link to AgentKit with a referral code.

---

## 🛠️ Tech Stack (This Website)

- **Framework**: Astro 6 with Static Site Generation (SSG)
- **Styling**: Tailwind CSS v4; the landing page uses the VividKit app's design tokens (`src/styles/vk-tokens.css`)
- **Type Safety**: TypeScript with strict mode and path aliasing
- **Interactivity**: React islands on the landing page (run console, team bots); Alpine.js on the guides
- **i18n**: Built-in Astro i18n with English (default) and Vietnamese
- **Waitlist**: Web3Forms (`PUBLIC_WEB3FORMS_KEY`)
- **Deployment**: Vercel with integrated analytics
- **Performance**: Sharp for image optimization, LightningCSS for CSS minification

Landing page copy lives in `src/data/landing-content.ts` (EN + VI). Product facts there must match the VividKit app docs; do not add claims without evidence.

## 🤖 VividKit Maintainer Skills & Commands (`/vk:*`)

Repo-specific skills that keep VividKit guides in sync with upstream ClaudeKit. Invoke via Claude Code using the `/vk:` prefix.

> 🇻🇳 Tiếng Việt: see [README.vi.md](./README.vi.md)

| Skill | When to use | Example |
|-------|-------------|---------|
| `/vk:changelog-sync` | Detect new ClaudeKit changelog entries and sync Commands/Hooks/Workflows guides + i18n strings | `/vk:changelog-sync` |
| `/vk:audit-ck-cli` | Compare upstream `claudekit-cli` against the CLI/Migrate guides; propose updates per command (`ck migrate`, `ck init`, …) | `/vk:audit-ck-cli` or `/vk:audit-ck-cli page=guides/migrate command=migrate` |
| `/vk:audit-skill` | Audit upstream ClaudeKit skill changes against the skill catalog rendered on the site | `/vk:audit-skill <skill-name>` |
| `/vk:add-scenario` | Add a new scenario entry for a ClaudeKit command into the guides | `/vk:add-scenario` |
| `/project:vk:update-how-ck-works` | Project custom command: orchestrates `/vk:audit-skill` + `/vk:add-scenario` to update How-CK-Works pages with detailed explanation, graphic quick refs, pipeline data, and prompt examples; use `--include-local-missing` to cover CK skills not yet on the guide | `/project:vk:update-how-ck-works --include-local-missing --limit 3` |

### Quick usage

1. **Quick check** — no fetch, just compare current marker:
   ```
   /vk:audit-ck-cli
   ```
2. **Detailed report** — categorized diff + impact map + update proposals:
   ```
   /vk:audit-ck-cli report
   ```
3. **Full sync** — fetch latest, generate report, update marker:
   ```
   /vk:audit-ck-cli sync
   ```
4. **Target a specific page/command** — pass args as `page=<guide-slug> command=<ck-command>`:
   ```
   /vk:audit-ck-cli page=guides/migrate command=migrate
   ```

### Conventions

- **Tracked skills** live in `skills/` (and `commands/vk/`); runtimes read them through symlinks. After a fresh clone, link each one once, e.g. `ln -sfn ../../skills/vk-changelog-sync .claude/skills/vk-changelog-sync` and `ln -sfn ../../../commands/vk/update-how-ck-works.md .claude/commands/vk/update-how-ck-works.md`.
- **Reference repos** are cloned under `reference/` (claudekit, claudekit-cli) — not committed; treated as source of truth during audits.
- **Marker files** (`reference/.last-sync*`) store the commit SHA of the last successful sync.
- **Reports** are written to `reference/changelog-reports/` (skill-generated).
- Skills only **propose** changes — always review before applying them to `src/components/guides/*` or `src/data/guides/*`.

See `skills/vk-*/SKILL.md` for per-skill details (`vk-audit-ck-cli` and `vk-audit-ck-hooks` still live in `.claude/skills/`).

---

## 🧞 Development Commands

| Command | Action |
|---------|--------|
| `pnpm install` | Install dependencies |
| `pnpm run dev` | Start local dev server at `localhost:4321` |
| `pnpm run build` | Build production site to `./dist/` |
| `pnpm run preview` | Preview build locally |

## 📁 Project Structure

```
vividkit-web/
├── src/                    # Source code
│   ├── components/         # Astro components (UI, sections, layouts, guides)
│   ├── layouts/           # Page layouts (MainLayout, GuidesLayout)
│   ├── pages/             # File-based routing (English + Vietnamese)
│   ├── data/              # Content data (guides, features, navigation)
│   ├── i18n/              # Translation utilities (en, vi)
│   ├── scripts/           # JavaScript utilities
│   ├── styles/            # Global styles and design system
│   └── types/             # TypeScript type definitions
├── docs/                  # Documentation files
├── public/                # Static assets
└── dist/                  # Build output
```

## 🔗 Links

- [vividkit.dev](https://vividkit.dev) - Landing page and beta waitlist
- [Guides](https://vividkit.dev/guides) - AgentKit and ClaudeKit guides
- [AgentKit docs](https://docs.agentkit.best/en/stable) - Skill pack used by the app
- [Claude Code](https://claude.ai/code) - Anthropic's coding agent, required for the beta
- Contact: [hello@vividkit.dev](mailto:hello@vividkit.dev)

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

## 🤖 VividKit Maintainer Skills (`/vk:*`)

Repo-specific skills that check VividKit guides against their upstream sources. Invoke them in Claude Code with the `/vk:` prefix (Codex: `$vk:`).

> 🇻🇳 Tiếng Việt: see [README.vi.md](./README.vi.md)

| Skill | When to use | Example |
|-------|-------------|---------|
| `/vk:audit-ak-guides` | Audit every `/guides/agentkit` page (EN + VI) against ak-cli and ak-docs after an AgentKit update. Fails while any page has no owner or an owner check is red | `/vk:audit-ak-guides --check` |
| `/vk:audit-ak-skills` | Report or fix drift in the AgentKit skills cheatsheet and skill-detail pages | `/vk:audit-ak-skills --report --kit all` |
| `/vk:audit-ak-workflows` | Check the AgentKit skills used in workflow cards against reviewed pins | `/vk:audit-ak-workflows --report` |
| `vk:audit-ak-pages` | Internal module: every other AgentKit page, plus the CLI cheatsheet against the ak cobra command tree | run through `/vk:audit-ak-guides` |
| `/vk:audit-ccs` | Compare upstream `kaitranntt/ccs` against the CCS guide | `/vk:audit-ccs --check` |

ClaudeKit guides are frozen: they stay on the site but are no longer synced with upstream, and the ClaudeKit sync skills were removed.

### Conventions

- **Tracked skills** live in `skills/`; runtimes read them through symlinks. After a fresh clone, link each one once (see each skill's `README.md`), e.g. `ln -sfn ../../skills/vk-audit-ak-guides .claude/skills/vk-audit-ak-guides`.
- **Upstream sources**: AgentKit audits read local ak-cli / ak-docs git checkouts (`--kit-root`, `--ak-docs`; `git fetch` them first). The CCS audit clones into `reference/ccs/` (not committed).
- **Reviewed state** that must survive a fresh clone is committed under `reference/ak-docs-skills-meta/` and `reference/ak-workflow-skill-*`. Sync markers and reports under `reference/` stay local.
- Skills only **propose** changes or write locks after review — always review before applying them to `src/components/guides/*` or `src/data/guides/*`.

See `skills/vk-*/SKILL.md` for per-skill details.

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

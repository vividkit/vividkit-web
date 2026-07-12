# VividKit - Visual Guides for AgentKit

> **AgentKit (`ak`) is the successor to ClaudeKit (`ck`).** Existing CK users should start with the [step-by-step migration guide](https://vividkit.dev/guides/agentkit). Legacy route names remain available for compatibility while their rendered guidance moves to AgentKit.

> 🚧 **VividKit Desktop App Coming Soon!** Join our [early access waiting list](https://vividkit.dev) to be notified when we launch.

VividKit turns AgentKit skills and workflows into an intuitive visual layer for Claude Code and Codex. While the VividKit Desktop App is in development, use these guides to install `ak`, migrate from `ck`, and keep Engineer and Marketing kits working.

## 🖥️ VividKit Desktop App (Coming Soon)

**Visual Intelligence Layer for AgentKit**

VividKit Desktop complements the AgentKit CLI (`ak`) with persistent visual dashboards and GUI-driven interactions. It is separate from the optional AgentKit Desktop App on agentkit.best.

### Key Features (MVP)

#### 1. Visual Catalog & Discovery
- Browse all agents, skills, and commands in a visual interface
- No more digging through markdown files
- Searchable, filterable capability explorer

#### 2. Persistent Visual Dashboards
- Live execution monitoring with graphs and timelines
- Token usage visualization across runs
- Agent performance metrics and trends
- Progress tracking that persists after terminal closes

#### 3. Run History & Comparison
- Archive of all past agent executions
- Side-by-side run comparisons
- Pattern recognition across multiple sessions
- Execution timeline visualization

#### 4. Syntax-Free Interaction
- GUI-driven agent launching (no command memorization)
- Visual parameter configuration
- Point-and-click workflow building

#### 5. Non-Technical Accessibility
- Stakeholder-friendly interface for PMs/designers
- Read-only views for team members
- Visual summaries of agent capabilities and results

#### 6. Auto-Update ClaudeKit Projects
- Automatic sync with latest ClaudeKit updates
- No manual `update/init` commands required daily
- Background updates with changelog notifications

#### 7. Integrated CCS Delegation
- Built-in [CCS (Claude Code Switcher)](https://github.com/kaitranntt/ccs) integration
- Switch between Claude, Gemini, Codex & custom AI profiles instantly
- Multi-account management with visual profile selector
- One-click task delegation to save Claude API costs

*"ClaudeKit's power, now with eyes."*

**[→ Join the Waiting List](https://vividkit.dev)**

---

## 📚 AgentKit with Claude Code and Codex

While waiting for VividKit Desktop, install AgentKit, migrate existing CK projects, and learn the Engineer/Marketing kits:

| Guide | Description |
|-------|-------------|
| [CK → AgentKit](https://vividkit.dev/guides/agentkit) | Step-by-step migration for macOS, Linux, Windows, Claude Code, Codex, and CI |
| [CLI Guide](https://vividkit.dev/guides) | Installation and setup |
| [Commands](https://vividkit.dev/guides/commands) | All 60+ commands reference |
| [Workflows](https://vividkit.dev/guides/workflows) | Best practices and patterns |
| [CCS](https://vividkit.dev/guides/ccs) | Claude Code Switcher for multi-model delegation |
| [UI/UX](https://vividkit.dev/guides/uiux) | Design skills and styling |
| [Resume](https://vividkit.dev/guides/resume) | Session recovery and continuation |
| [Permissions](https://vividkit.dev/guides/permissions) | Permission modes (auto, bypass, granular rules) |
| [Fix Logs](https://vividkit.dev/guides/fix-logs) | Debugging strategies |

---

## 🛠️ Tech Stack (This Website)

- **Framework**: Astro 5.x with Static Site Generation (SSG)
- **Styling**: Tailwind CSS v4 with custom glassmorphism design system
- **Type Safety**: TypeScript with strict mode and comprehensive path aliasing
- **Interactivity**: Alpine.js 3.15.2 for lightweight client-side interactions
- **i18n**: Built-in Astro i18n with English (default) and Vietnamese support
- **Deployment**: Vercel with integrated analytics
- **Performance**: Sharp for image optimization, LightningCSS for CSS minification
- **Design System**: Custom glassmorphism UI with three-font typography system

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

- **Reference repos** are cloned under `reference/` (claudekit, claudekit-cli) — not committed; treated as source of truth during audits.
- **Marker files** (`reference/.last-sync*`) store the commit SHA of the last successful sync.
- **Reports** are written to `reference/changelog-reports/` (skill-generated).
- Skills only **propose** changes — always review before applying them to `src/components/guides/*` or `src/data/guides/*`.

See `.agents/skills/vk-*/SKILL.md` for per-skill details.

---

## 🧞 Development Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |

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

- [VividKit Website](https://vividkit.dev) - Join the waiting list
- [ClaudeKit CLI](https://github.com/mrgoonie/claudekit-cli) - Source repository
- [Claude Code](https://claude.ai/code) - Anthropic's official CLI

---

*VividKit - Making AI coding crystal clear*

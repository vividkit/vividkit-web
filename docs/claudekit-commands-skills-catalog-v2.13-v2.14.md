# ClaudeKit Engineer — Commands & Skills Catalog

> **Stable:** v2.13.0 · **Beta:** v2.14.0-beta.14 · **Updated:** 2026-03-12

All commands use `ck:` namespace as Claude Code plugins. Both `/cook` and `ck:cook` work identically.

---

## Complexity Legend

Token estimates based on SKILL.md file size (~4 chars/token). Higher complexity = more context consumed per invocation.

| Symbol | Level | Tokens | Context Impact |
|--------|-------|--------|----------------|
| ⚡ | Minimal | <1K | Always safe, negligible context cost |
| ⚡⚡ | Low | 1K–3K | Lightweight, can stack many |
| ⚡⚡⚡ | Medium | 3K–5K | Standard load, 2-3 simultaneous OK |
| ⚡⚡⚡⚡ | High | 5K–10K | Heavy load, use selectively |
| ⚡⚡⚡⚡⚡ | Very High | 10K+ | Significant context, avoid stacking |

---

## Skills (66 in Stable · 71 in Beta)

### 🔧 Core Workflow Skills

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:cook` | `/cook [task\|plan-path] [--interactive\|--fast\|--parallel\|--auto\|--no-test]` | All-in-one feature implementation: research → plan → implement → test → review. Uses Claude Tasks for orchestration |
| `ck:plan` | `/plan [task] OR archive\|red-team\|validate` | Create detailed implementation plans with research, validation, and archival modes |
| `ck:fix` | `/fix [issue] --auto\|--review\|--quick\|--parallel` | Smart bug fixing with routing to specialized fix commands. Parallel mode available |
| `ck:debug` | `/debug [error or issue description]` | Systematic root cause analysis before fixes. Call stack tracing, multi-layer validation |
| `ck:test` | `/test [context] OR ui [url]` | Run tests locally and UI tests on websites with detailed reports |
| `ck:code-review` | `/code-review [context] OR codebase [parallel]` | Review code quality with scout-based edge case detection and Task pipeline orchestration |

### 🚀 Project & Documentation

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:bootstrap` | `/bootstrap` | Full project initialization from scratch with tech stack, planning, design |
| `ck:docs` | `/docs init\|update\|summarize` | Analyze codebase and manage project documentation |
| `ck:docs-seeker` | `/docs-seeker [library-name] [topic]` | Search library/framework documentation via llms.txt (context7.com) |
| `ck:scout` | `/scout [search-target] [ext]` | Fast codebase scouting using parallel agents for file discovery |
| `ck:watzup` | `/watzup` | Review recent changes and wrap up the current work session |
| `ck:project-management` | `/project-management [task: status, hydrate, sync, report]` | Track progress, manage Claude Tasks, generate reports, coordinate docs |

### 🎨 Design & Frontend

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:frontend-design` | `/frontend-design` | Create polished frontend interfaces from designs/screenshots/videos |
| `ck:frontend-development` | `/frontend-development [component or feature]` | Build React/TypeScript frontends with modern patterns, MUI v7, TanStack |
| `ck:ui-styling` | `/ui-styling [component or layout]` | Style UIs with shadcn/ui (Radix UI + Tailwind CSS). Dark mode, design systems |
| `ck:ui-ux-pro-max` | `/ui-ux-pro-max` | 50+ styles, 161 palettes, 57 font pairings, 161 product types, 99 UX guidelines, 25 charts, 10 stacks |
| `ck:web-design-guidelines` | `/web-design-guidelines [file-or-pattern]` | Review UI code for Web Interface Guidelines compliance |
| `ck:threejs` | `/threejs [3D scene or feature]` | Build 3D web apps with Three.js (WebGL/WebGPU). 556 examples, 60 API classes |
| `ck:remotion` | `/remotion [video or component]` | Programmatic video creation in React |
| `ck:shader` | `/shader [effect or pattern]` | Write GLSL fragment shaders for procedural graphics, generative art |
| `ckm:design` | `/design [design-type] [context]` | **[NEW]** Comprehensive design: logo (55 styles), CIP (50 deliverables), slides (Chart.js), banners (22 styles), icons (15 styles, SVG), social photos. Gemini AI powered |

### 🔗 Git & Version Control

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:git` | `/git cm\|cp\|pr\|merge [args]` | Git operations with conventional commits. Auto-splits by type/scope. Security scans |
| `ck:worktree` | `/worktree [feature-description] OR [project] [feature]` | Create isolated git worktree for parallel development in monorepos |

### 🧠 AI & Thinking

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:brainstorm` | `/brainstorm` | Brainstorm solutions with trade-off analysis and brutal honesty |
| `ck:sequential-thinking` | `/sequential-thinking [problem to analyze]` | Step-by-step analysis for complex problems with revision capability |
| `ck:problem-solving` | `/problem-solving [problem description]` | Systematic problem-solving techniques for complexity spirals, blocks |
| `ck:ask` | `/ask` | Answer technical and architectural questions with expert consultation |
| `ck:research` | `/research` | Technical research: technology evaluation, best practices, solution design |
| `ck:context-engineering` | `/context-engineering [topic]` | Check context usage, monitor limits, optimize token consumption |

### 🤖 AI Generation & Multimodal

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:ai-artist` | `/ai-artist [concept] [--mode search\|creative\|wild\|all] [--skip]` | Generate images via Nano Banana with 129 curated prompts. Mandatory validation |
| `ck:ai-multimodal` | `/ai-multimodal [file-path] [prompt]` | Analyze images/audio/video with Gemini API. Generate images (Imagen 4, Nano Banana 2, MiniMax), videos (Veo 3, Hailuo), speech (MiniMax TTS), music (MiniMax) |
| `ck:media-processing` | `/media-processing [input-file] [operation]` | FFmpeg (video/audio), ImageMagick (images), RMBG (AI background removal) |

### 🌐 Web & Backend

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:web-frameworks` | `/web-frameworks [framework] [feature]` | Next.js (App Router, RSC, SSR, ISR), Turborepo monorepos |
| `ck:web-testing` | `/web-testing [test-type] [target]` | Playwright, Vitest, k6. E2E/unit/integration/load/security/visual/a11y |
| `ck:backend-development` | `/backend-development` | Node.js, Python, Go APIs (NestJS, FastAPI, Django). REST/GraphQL/gRPC |
| `ck:databases` | `/databases [query or schema task]` | MongoDB, PostgreSQL, SQL/NoSQL queries, aggregation, indexes, migrations |
| `ck:deploy` | `/deploy [platform] [environment]` | **[NEW]** Deploy to 15 platforms with auto-detection: Vercel, Netlify, Cloudflare, Railway, Fly.io, Render, Heroku, TOSE, GitHub Pages, AWS, GCP, DigitalOcean, Vultr, Coolify, Dokploy |
| `ck:devops` | `/devops` | Cloudflare (Workers, R2, D1), Docker, GCP (Cloud Run), Kubernetes |
| `ck:better-auth` | `/better-auth [auth-method or feature]` | Better Auth (TypeScript): OAuth, 2FA/MFA, passkeys/WebAuthn, RBAC |
| `ck:tanstack` | `/tanstack [framework] [feature]` | TanStack Start, TanStack Form, TanStack AI (streaming/chat) |
| `ck:react-best-practices` | `/react-best-practices [component or pattern]` | React/Next.js performance optimization from Vercel Engineering |

### 📱 Mobile & Platforms

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:mobile-development` | `/mobile-development` | React Native, Flutter, Swift/SwiftUI, Kotlin/Jetpack Compose |
| `ck:shopify` | `/shopify [extension-type] [feature]` | Shopify apps, Polaris UI, Liquid templates, checkout customization |
| `ck:mintlify` | `/mintlify` | Documentation sites with Mintlify: MDX components, themes, OpenAPI |

### 🔌 MCP & Integration

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:mcp-builder` | `/mcp-builder [service or API to integrate]` | Build MCP servers: FastMCP (Python), MCP SDK (Node/TypeScript) |
| `ck:mcp-management` | `/mcp-management [task or server-name]` | Discover, analyze, execute MCP tools/prompts/resources |
| `ck:use-mcp` | `/use-mcp [task]` | Utilize MCP server tools with intelligent discovery and execution |
| `ck:payment-integration` | `/payment-integration [provider] [task]` | SePay (VietQR), Polar, Stripe, Paddle, Creem.io |

### 🛠️ Utilities & Tools

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:ck-help` | `/ck-help [category\|command\|task description]` | ClaudeKit usage guide — discover commands, skills, workflows |
| `ck:coding-level` | `/coding-level [0-5]` | Set coding experience level for tailored explanations |
| `ck:preview` | `/preview [path] OR --explain\|--slides\|--diagram\|--ascii [topic]` | View files/directories OR generate visual explanations, slides, diagrams |
| `ck:kanban` | `/kanban [dir]` | AI agent orchestration board for task visualization |
| `ck:plans-kanban` | `/plans-kanban [plans-dir]` | Plans dashboard with progress tracking and timeline |
| `ck:journal` | `/journal` | Write journal entries analyzing changes and reflections |
| `ck:repomix` | `/repomix [path] [--style xml\|markdown\|plain\|json]` | Pack repositories into AI-friendly files for LLM context |
| `ck:markdown-novel-viewer` | `/markdown-novel-viewer [file-or-directory]` | Calm, book-like reading experience via HTTP server |
| `ck:mermaidjs-v11` | `/mermaidjs-v11 [diagram-type or description]` | Flowcharts, sequence/class/ER/state diagrams, Gantt, timelines |
| `ck:security-scan` | `/security-scan [scope] [--secrets-only\|--deps-only\|--full]` | **[NEW]** Scan for vulnerabilities, hardcoded secrets, dependency issues, OWASP patterns. No external deps |
| `ck:project-organization` | `/project-organization [directories or files]` | **[NEW]** Organize files, directories, naming conventions, markdown templates for any project type |
| `ck:copywriting` | `/copywriting [copy-type] [context]` | Headlines, email copy, CTAs, landing pages, writing styles |
| `ck:google-adk-python` | `/google-adk-python [agent or feature]` | Build AI agents with Google ADK Python. A2A protocol, MCP tools |
| `ck:agent-browser` | `/agent-browser [url or task]` | AI-optimized browser automation CLI with context-efficient snapshots |
| `ck:chrome-devtools` | `/chrome-devtools [url or task]` | Puppeteer automation: screenshots, performance, network, scraping |

### 🏗️ Advanced

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:team` | `/team <template> <context> [--devs\|--researchers\|--reviewers N] [--delegate]` | Orchestrate Agent Teams for parallel multi-session collaboration |
| `ck:skill-creator` | `/skill-creator [skill-name or description]` | Create/update Claude skills optimized for Skillmark benchmarks |
| `ck:find-skills` | `/find-skills [capability or task description]` | Discover and install skills from the ecosystem |
| `ck:gkg` | `/gkg` | Semantic code analysis with GitLab Knowledge Graph |

### 📄 Document Generation

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:document-skills` | — | Sub-skills: `docx`, `pdf`, `pptx`, `xlsx` for document generation |

### 🧰 Internal

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:common` | — | Common utilities shared across skills |
| `ck:template-skill` | — | Skill template for creating new skills |

---

## Skill Arguments & Flags Reference

Detailed breakdown of arguments and flags for each skill. Use this section to understand **when to use which flag**.

### `/cook`

| Argument | Example | When to Use |
|----------|---------|-------------|
| `[task]` | `/cook add dark mode toggle` | Describe what to build in natural language |
| `[plan-path]` | `/cook @plan.md` | Implement an existing plan file. Use after `/plan` → `/clear` |
| `--interactive` | `/cook add auth --interactive` | You want to approve each phase (research, plan, code, test) |
| `--fast` | `/cook fix typos --fast` | Small/obvious tasks — skip research, go straight to code |
| `--parallel` | `/cook refactor api --parallel` | Large tasks — run phases in parallel. Faster but less safe |
| `--auto` | `/cook add pagination --auto` | Fully autonomous — no user input, AI decides everything |
| `--no-test` | `/cook add footer --no-test` | Skip test runs — use for UI-only or non-critical changes |

### `/plan`

| Argument | Example | When to Use |
|----------|---------|-------------|
| `[task]` | `/plan add user authentication` | Create a detailed implementation plan for a feature |
| `archive` | `/plan archive` | Done with current plans — write journal and archive them |
| `red-team` | `/plan red-team` | Stress-test your plan — adversarial review for weaknesses |
| `validate` | `/plan validate` | Interview-style validation — critical questions to check plan quality |

### `/fix`

| Argument | Example | When to Use |
|----------|---------|-------------|
| `[issue]` | `/fix login button not responding` | Describe the bug you want fixed |
| `--auto` | `/fix --auto` | Let AI auto-detect and fix without asking — for obvious bugs |
| `--review` | `/fix auth bug --review` | Fix the bug, then run a code review afterwards |
| `--quick` | `/fix typo in header --quick` | Minimal analysis — fastest possible fix attempt |
| `--parallel` | `/fix complex race condition --parallel` | Spawn multiple parallel fixers — for complex multi-file issues |

> **`/debug` vs `/fix`:** Use `/debug` when you **don't know** what's wrong (it investigates). Use `/fix` when you **already know** the issue (it applies the fix directly).

### `/test`

| Argument | Example | When to Use |
|----------|---------|-------------|
| *(no args)* | `/test` | Run the full test suite |
| `[context]` | `/test auth module` | Run tests for a specific module or area only |
| `ui [url]` | `/test ui http://localhost:3000` | Run visual UI tests on a live website |

### `/code-review`

| Argument | Example | When to Use |
|----------|---------|-------------|
| `[context]` | `/code-review auth refactor` | Review specific recent changes only |
| `codebase` | `/code-review codebase` | Full codebase scan — thorough but slower |
| `codebase parallel` | `/code-review codebase parallel` | Full scan with multiple scout agents — fastest for large repos |

### `/docs`

| Argument | Example | When to Use |
|----------|---------|-------------|
| `init` | `/docs init` | First time — analyze entire codebase and create docs from scratch |
| `update` | `/docs update` | Code changed — sync existing docs with latest changes |
| `summarize` | `/docs summarize` | Need a quick overview — generate concise summary |

### `/git`

| Argument | Example | When to Use |
|----------|---------|-------------|
| `cm` | `/git cm` | Commit only — auto-generates conventional commit message |
| `cp` | `/git cp` | Commit + push in one step |
| `pr` | `/git pr` | Create a pull request from current branch |
| `merge` | `/git merge` | Merge branches |

### `/ai-artist`

| Argument | Example | When to Use |
|----------|---------|-------------|
| `[concept]` | `/ai-artist cyberpunk cityscape` | Describe the image you want to generate |
| `--mode search` | `/ai-artist sunset --mode search` | Find best matching style from 129 curated prompts |
| `--mode creative` | `/ai-artist logo --mode creative` | AI-enhanced prompt — more creative interpretation |
| `--mode wild` | `/ai-artist abstract --mode wild` | Experimental — unpredictable, surprising results |
| `--mode all` | `/ai-artist cat --mode all` | Try all modes and compare — pick your favorite |
| `--skip` | `/ai-artist sunset --skip` | Skip the validation interview — faster, less refined |

### `/team`

| Argument | Example | When to Use |
|----------|---------|-------------|
| `<template> <context>` | `/team research react-server-components` | Launch a team. Templates: `research`, `implement`, `review`, `debug` |
| `--devs N` | `/team implement auth --devs 3` | Set number of developer agents (for `implement` template) |
| `--researchers N` | `/team research api --researchers 4` | Set number of researcher agents (for `research` template) |
| `--reviewers N` | `/team review codebase --reviewers 2` | Set number of reviewer agents (for `review` template) |
| `--delegate` | `/team implement feature --delegate` | Fully autonomous — auto-delegate without user oversight |

### `/preview`

| Argument | Example | When to Use |
|----------|---------|-------------|
| `[path]` | `/preview src/components` | View file or directory contents |
| `--explain [topic]` | `/preview --explain oauth2 flow` | Generate a visual explanation of a concept |
| `--slides [topic]` | `/preview --slides project-overview` | Generate presentation slides |
| `--diagram [topic]` | `/preview --diagram auth architecture` | Generate architectural diagram |
| `--ascii [topic]` | `/preview --ascii database schema` | ASCII art visualization |

### `/repomix`

| Argument | Example | When to Use |
|----------|---------|-------------|
| `[path]` | `/repomix src/` | Pack a specific directory into AI-friendly file |
| `--style xml` | `/repomix src/ --style xml` | XML format — default, best for most LLMs |
| `--style markdown` | `/repomix --style markdown` | Markdown format — human-readable |
| `--style plain` | `/repomix --style plain` | Plain text — minimal overhead |
| `--style json` | `/repomix --style json` | JSON format — structured/parseable |

### `/deploy`

| Argument | Example | When to Use |
|----------|---------|-------------|
| `[platform]` | `/deploy vercel` | Specify target platform directly |
| `[environment]` | `/deploy vercel production` | Specify environment (staging, production) |
| *(no args)* | `/deploy` | Auto-detect platform from config files and project structure |

### `/security-scan`

| Argument | Example | When to Use |
|----------|---------|-------------|
| `[scope]` | `/security-scan src/` | Scan specific directory only |
| `--secrets-only` | `/security-scan --secrets-only` | Only check for hardcoded secrets/API keys |
| `--deps-only` | `/security-scan --deps-only` | Only check dependency vulnerabilities |
| `--full` | `/security-scan --full` | Full scan: secrets + deps + OWASP patterns |

### `/design`

| Argument | Example | When to Use |
|----------|---------|-------------|
| `[design-type]` | `/design logo` | Types: `logo`, `cip`, `slides`, `banner`, `icon`, `social-photos` |
| `[context]` | `/design logo tech startup` | Describe brand/project context |

### Other Skills — Quick Reference

| Skill | Usage | Notes |
|-------|-------|-------|
| `/debug [error]` | `/debug API returns 500` | Describe symptom — finds root cause for you |
| `/scout [target] [ext]` | `/scout auth .ts` | Target = what to find, ext = file extension filter |
| `/docs-seeker [lib] [topic]` | `/docs-seeker react hooks` | Search official docs via context7.com |
| `/coding-level [0-5]` | `/coding-level 3` | 0 = beginner (very verbose) → 5 = expert (concise) |
| `/ck-help [query]` | `/ck-help how to deploy` | Category, command name, or natural language question |
| `/worktree [feature]` | `/worktree dark-mode` | Or `/worktree [project] [feature]` for monorepos |
| `/project-management [task]` | `/project-management status` | Tasks: `status`, `hydrate`, `sync`, `report` |
| `/mcp-management [task]` | `/mcp-management list-tools brave-search` | Task or server name for MCP operations |
| `/ai-multimodal [file] [prompt]` | `/ai-multimodal img.png describe UI` | File path + what to analyze |
| `/payment-integration [provider] [task]` | `/payment-integration stripe checkout` | Provider name + specific task |
| `/web-frameworks [framework] [feature]` | `/web-frameworks nextjs api-routes` | Framework + feature to implement |
| `/web-testing [type] [target]` | `/web-testing e2e login-flow` | Test type + target area |
| `/threejs [scene]` | `/threejs spinning globe with markers` | Describe 3D scene to build |
| `/skill-creator [name]` | `/skill-creator vue-testing` | Skill name or description |
| `/find-skills [capability]` | `/find-skills database migration` | Describe capability you need |
| `/deploy [platform]` | `/deploy vercel` | Auto-detect or specify platform |
| `/security-scan [scope]` | `/security-scan --full` | Scan for secrets, vulns, deps |
| `/design [type] [context]` | `/design logo fintech app` | Logo, CIP, slides, banner, icon, social |
| `/project-organization [paths]` | `/project-organization src/` | Standardize file structure and naming |
| `/llms [path\|url]` | `/llms docs/ --full` | Generate llms.txt for LLM-friendly index |

---

## Agents (14)

| Agent | File Size | Description |
|-------|-----------|-------------|
| `brainstormer` | 7.5K | Brainstorm solutions with trade-off analysis |
| `code-reviewer` | 4.6K | Review code quality with technical rigor |
| `code-simplifier` | 3.4K | Simplify code for clarity and maintainability |
| `debugger` | 9.6K | Debug issues, analyze logs, diagnose problems |
| `docs-manager` | 11K | Manage technical documentation and standards |
| `fullstack-developer` | 4.4K | Execute implementation phases from plans |
| `git-manager` | 1.1K | Stage, commit, push with conventional commits |
| `journal-writer` | 7.9K | Document technical difficulties and failures |
| `mcp-manager` | 4.2K | Manage MCP server integrations |
| `planner` | 7.5K | Research and create implementation plans |
| `project-manager` | 2.8K | Project oversight and coordination |
| `researcher` | 5.2K | Research on software development topics |
| `tester` | 7.7K | Validate code through testing |
| `ui-ux-designer` | 15K | UI/UX design, wireframes, design systems |

---

## Beta Changes (v2.14.0-beta.14 vs v2.13.0 Stable)

### 🆕 New in Beta (5 skills)

| Item | Type | Description |
|------|------|-------------|
| `ck:deploy` | New Skill | Deploy to 15 platforms with auto-detection (Vercel, Netlify, Cloudflare, Railway, Fly.io, Render, Heroku, TOSE, GitHub Pages, AWS, GCP, DigitalOcean, Vultr, Coolify, Dokploy). Cost-optimized recommendations |
| `ckm:design` | New Skill | Comprehensive design: logo gen (55 styles, Gemini AI), CIP (50 deliverables + mockups), HTML slides (Chart.js), banners (22 styles), icons (15 styles, SVG, Gemini 3.1 Pro), social photos. Uses `ckm:` namespace |
| `ck:security-scan` | New Skill | Lightweight security scanner: vulnerabilities, hardcoded secrets, dependency issues, OWASP patterns. No external deps. Flags: `--secrets-only`, `--deps-only`, `--full` |
| `ck:project-organization` | New Skill | Organize files, directories, naming conventions, markdown body templates. Reference files for directory patterns and conventions |
| `ck:llms` | New Skill | Generate `llms.txt` files from docs or codebase. Follows llmstxt.org spec. Flags: `--full`, `--output` |

### 📝 Major Modifications

| Category | Changes | Details |
|----------|---------|---------|
| **ai-multimodal** | +38/-36 lines | Added MiniMax integration: TTS speech, music gen, video gen, image gen. New `minimax-generation.md` reference + Python scripts |
| **ui-ux-pro-max** | Data expansion | 161 color palettes (was ~21), 57 font pairings (was ~50), 161 product types, 99 UX guidelines, 25 chart types, 10 stacks. New CSV data files |
| **skill-creator** | +84/-53 lines | 3 new sub-agents (analyzer, comparator, grader). Eval infrastructure: run_eval, run_loop, aggregate_benchmark, improve_description scripts. HTML eval viewer |
| **frontend-design** | +81/-77 lines | Added `magicui-components.md` reference for Magic UI component library |
| **plan** | +37/-7 lines | Enhanced planning workflow, new shared `plan-table-parser.cjs` utility |
| **cook** | +9/-6 lines | Workflow step refinements, intent detection updates |
| **project-management** | +15/-1 lines | Expanded task management capabilities |
| **copywriting** | +8/-1 lines | New references: `workflow-cro.md`, `writing-styles.md` |
| **scout** | +8/-3 lines | Enhanced parallel agent scouting |
| **plans-kanban** | +9/-5 lines | New `plan-format-kanban.cjs` hook for plan table formatting |
| **Agents** | Minor updates | `brainstormer`, `code-reviewer`, `debugger`, `fullstack-developer` — minor definition refinements |

### 🏗️ Infrastructure Changes

| Item | Description |
|------|-------------|
| Session state management | New `session-state-manager.cjs`, `session-state.cjs` hooks + `.claude/session-state/` directory |
| Plan format kanban hook | `plan-format-kanban.cjs` — auto-format plan tables as kanban boards |
| Shared utilities | `_shared/lib/plan-table-parser.cjs` — reusable plan table parsing |
| Statusline tests | New `statusline-scenarios.test.cjs`, `statusline-suite.cjs` test infrastructure |

### ⚠️ No Breaking Changes

Beta maintains full backward compatibility with stable. No skills removed, no arguments changed. Note: `design` skill uses `ckm:` namespace (not `ck:`).

---

## Architecture Notes

### Directory Structure (v2.13.0+)

```
.claude/
├── agents/             # 14 agent definitions (.md)
├── skills/             # 71 skill directories (SKILL.md + references/ + scripts/)
├── command-archive/    # Deprecated commands preserved
├── hooks/              # Event hooks
├── output-styles/      # 8 output format definitions
├── rules/              # Behavior rules
├── schemas/            # JSON schemas
├── scripts/            # 19+ utility scripts
├── metadata.json       # Version info, deletions
├── settings.json       # Configuration
└── statusline.*        # Status display (sh, cjs, ps1)
```

### Skill Plugin Structure

Each skill follows the Claude Code plugin format:

```
skills/<skill-name>/
├── SKILL.md            # Main definition (YAML frontmatter + markdown instructions)
├── references/         # Reference documentation files
└── scripts/            # Helper scripts and utilities
```

**YAML Frontmatter:**
```yaml
---
name: ck:<skill-name>           # Namespace prefix
description: "Short description" # Auto-discovery hint
argument-hint: "[args]"          # Usage hint shown to user
---
```

### Key Migration Notes (from pre-v2.13.0)

| Old (Commands) | New (Skills) | Notes |
|----------------|-------------|-------|
| `/code` | `/cook` | All-in-one implementation |
| `/code:no-test` | `/cook --no-test` | Flag-style arguments |
| `/code:parallel` | `/cook --parallel` | Flag-style arguments |
| `/fix:types` | `/fix` | Unified fix skill with smart routing |
| `/design:screenshot` | `/frontend-design` | Dedicated design skill |
| `/review:codebase` | `/code-review codebase` | Argument-style subcommands |
| `/git:cm` | `/git cm` | Argument-style subcommands |
| `/git:pr` | `/git pr` | Argument-style subcommands |
| `/docs:init` | `/docs init` | Argument-style subcommands |
| commands/ directory | skills/ directory | All commands are now skills |

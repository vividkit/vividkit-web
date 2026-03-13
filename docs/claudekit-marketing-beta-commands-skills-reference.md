# ClaudeKit Marketing Beta — Built-in Commands & Skills Reference

> **Source:** `marketing-beta/.claude/` · **Scanned:** 2026-03-13
> **Skills:** 102 SKILL.md files (100 skill directories + 4 document sub-skills)
> **Commands:** 74 command .md files (29 top-level + 45 subcommands)

Tài liệu này ghi lại kết quả scan chi tiết tất cả built-in commands và skills trong ClaudeKit Marketing Beta, bao gồm **tên đăng ký (name)**, **mô tả (description)**, **argument-hint** từ YAML frontmatter, và **slash command format** chính xác.

---

## Table of Contents

1. [Commands Reference](#commands-reference)
2. [Skills — Marketing-Exclusive (ckm:)](#skills--marketing-exclusive-ckm)
3. [Skills — Shared with Engineer Kit (ck:)](#skills--shared-with-engineer-kit-ck)
4. [Skills — Infrastructure & Utility](#skills--infrastructure--utility)
5. [Skills — Document Sub-skills](#skills--document-sub-skills)
6. [Slash Command Quick Reference](#slash-command-quick-reference)

---

## Commands Reference

Commands live in `.claude/commands/ckm/`. Format: `/ckm:<command>` hoặc `/ckm:<command> <subcommand>`.

### Command Tree (29 commands, 74 total files)

| # | Command | Slash Format | Subcommands | Files |
|---|---------|-------------|-------------|-------|
| 1 | `analyze` | `/ckm:analyze` | `report` | `analyze.md`, `analyze/report.md` |
| 2 | `ask` | `/ckm:ask` | — | `ask.md` |
| 3 | `brand` | `/ckm:brand` | `update` | `brand.md`, `brand/update.md` |
| 4 | `campaign` | `/ckm:campaign` | `create`, `status`, `analyze`, `email` | `campaign.md`, `campaign/{create,status,analyze,email}.md` |
| 5 | `ck-help` | `/ckm:ck-help` | — | `ck-help.md` |
| 6 | `competitor` | `/ckm:competitor` | — | `competitor.md` |
| 7 | `dashboard` | `/ckm:dashboard` | `check` | `dashboard.md`, `dashboard/check.md` |
| 8 | `docs` | `/ckm:docs` | `init`, `llms`, `summarize`, `update` | 5 files |
| 9 | `email` | `/ckm:email` | `flow`, `sequence` | `email.md`, `email/{flow,sequence}.md` |
| 10 | `funnel` | `/ckm:funnel` | — | `funnel.md` |
| 11 | `hub` | `/ckm:hub` | — | `hub.md` |
| 12 | `init` | `/ckm:init` | — | `init.md` |
| 13 | `journal` | `/ckm:journal` | — | `journal.md` |
| 14 | `kanban` | `/ckm:kanban` | — | `kanban.md` |
| 15 | `persona` | `/ckm:persona` | — | `persona.md` |
| 16 | `plan` | `/ckm:plan` | `archive`, `ci`, `cro`, `fast`, `hard`, `parallel`, `two`, `validate` | 9 files |
| 17 | `preview` | `/ckm:preview` | — | `preview.md` |
| 18 | `seo` | `/ckm:seo` | `audit`, `keywords`, `pseo` | 4 files |
| 19 | `skill` | `/ckm:skill` | `add`, `create`, `fix-logs`, `optimize` (+ `auto`), `plan`, `update` | 7 files |
| 20 | `slides` | `/ckm:slides` | `create` | 2 files |
| 21 | `social` | `/ckm:social` | `schedule` | 2 files |
| 22 | `storage` | `/ckm:storage` | `list`, `sync`, `upload`, `url` | 5 files |
| 23 | `test` | `/ckm:test` | `ui`, `workflow` | 3 files |
| 24 | `use-mcp` | `/ckm:use-mcp` | — | `use-mcp.md` |
| 25 | `video` | `/ckm:video` | `create`, `script`, `storyboard` | 4 files |
| 26 | `watzup` | `/ckm:watzup` | — | `watzup.md` |
| 27 | `worktree` | `/ckm:worktree` | — | `worktree.md` |
| 28 | `write` | `/ckm:write` | `audit`, `blog`, `cro`, `enhance`, `fast`, `formula`, `good`, `publish` | 9 files |
| 29 | `youtube` | `/ckm:youtube` | `blog`, `infographic`, `social` | 4 files |

### Command Subcommand Details

#### `/ckm:write` — Content Writing (8 subcommands)

| Subcommand | Slash Format | Purpose |
|------------|-------------|---------|
| `audit` | `/ckm:write audit` | Audit existing content |
| `blog` | `/ckm:write blog [topic]` | Blog post from scratch |
| `cro` | `/ckm:write cro [page-url]` | CRO-focused landing page content |
| `enhance` | `/ckm:write enhance [file]` | Improve existing content |
| `fast` | `/ckm:write fast [topic]` | Quick draft, minimal research |
| `formula` | `/ckm:write formula [type]` | Apply copywriting formula |
| `good` | `/ckm:write good [topic]` | High-quality with research |
| `publish` | `/ckm:write publish [file]` | Finalize for publication |

#### `/ckm:plan` — Plan Creation (8 subcommands)

| Subcommand | Slash Format | Purpose |
|------------|-------------|---------|
| `archive` | `/ckm:plan archive` | Archive completed plans |
| `ci` | `/ckm:plan ci` | CI/CD plan |
| `cro` | `/ckm:plan cro [page]` | CRO planning mode |
| `fast` | `/ckm:plan fast [task]` | Quick plan |
| `hard` | `/ckm:plan hard [task]` | Deep analysis plan |
| `parallel` | `/ckm:plan parallel [task]` | Parallel execution plan |
| `two` | `/ckm:plan two [task]` | Two-phase plan |
| `validate` | `/ckm:plan validate [plan]` | Validate plan completion |

#### `/ckm:campaign` — Campaign Management (4 subcommands)

| Subcommand | Slash Format | Purpose |
|------------|-------------|---------|
| `create` | `/ckm:campaign create [name]` | Create new campaign |
| `status` | `/ckm:campaign status` | Check active campaigns |
| `analyze` | `/ckm:campaign analyze [period]` | Performance analysis |
| `email` | `/ckm:campaign email [series]` | Campaign email component |

#### `/ckm:seo` — SEO Optimization (3 subcommands)

| Subcommand | Slash Format | Purpose |
|------------|-------------|---------|
| `audit` | `/ckm:seo audit [url]` | Full SEO audit |
| `keywords` | `/ckm:seo keywords [query]` | Keyword research |
| `pseo` | `/ckm:seo pseo [template]` | Programmatic SEO |

#### `/ckm:email` — Email Marketing (2 subcommands)

| Subcommand | Slash Format | Purpose |
|------------|-------------|---------|
| `flow` | `/ckm:email flow [type]` | Automation flow |
| `sequence` | `/ckm:email sequence [type]` | Multi-email sequence |

#### `/ckm:video` — Video Production (3 subcommands)

| Subcommand | Slash Format | Purpose |
|------------|-------------|---------|
| `create` | `/ckm:video create [topic]` | Full video production |
| `script` | `/ckm:video script [topic]` | Video script writing |
| `storyboard` | `/ckm:video storyboard [topic]` | Visual storyboard |

#### `/ckm:youtube` — YouTube Repurposing (3 subcommands)

| Subcommand | Slash Format | Purpose |
|------------|-------------|---------|
| `blog` | `/ckm:youtube blog [url]` | Video → blog post |
| `infographic` | `/ckm:youtube infographic [url]` | Video → infographic |
| `social` | `/ckm:youtube social [url]` | Video → social posts |

#### Other Multi-Subcommand Commands

| Command | Subcommands |
|---------|-------------|
| `/ckm:docs` | `init`, `llms`, `summarize`, `update` |
| `/ckm:storage` | `list`, `sync`, `upload`, `url` |
| `/ckm:skill` | `add`, `create`, `fix-logs`, `optimize` (+ `auto`), `plan`, `update` |
| `/ckm:test` | `ui`, `workflow` |
| `/ckm:slides` | `create` |
| `/ckm:social` | `schedule` |
| `/ckm:brand` | `update` |
| `/ckm:dashboard` | `check` |
| `/ckm:analyze` | `report` |

---

## Skills — Marketing-Exclusive (ckm:)

Skills live in `.claude/skills/<folder>/SKILL.md`. Data extracted from YAML frontmatter.

### Marketing Strategy & Planning (9 skills)

| # | Folder | Registered Name | Slash Command | Argument Hint | Description |
|---|--------|----------------|--------------|---------------|-------------|
| 1 | `marketing-planning` | `ckm:marketing-planning` | `/marketing-planning` | `[goal or timeframe]` | Plan strategies using RACE, SOSTAC, STP frameworks |
| 2 | `marketing-research` | `ckm:marketing-research` | `/marketing-research` | `[topic or market]` | Research market trends, competitors, audience insights |
| 3 | `marketing-ideas` | `ckm:marketing-ideas` | `/marketing-ideas` | `[product or niche]` | 140 proven marketing approaches |
| 4 | `marketing-psychology` | `ckm:marketing-psychology` | `/marketing-psychology` | `[principle or tactic]` | 70+ mental models: cognitive biases, persuasion |
| 5 | `launch-strategy` | `ckm:launch-strategy` | `/launch-strategy` | `[product or feature]` | Product launch, Product Hunt, go-to-market |
| 6 | `pricing-strategy` | `ckm:pricing-strategy` | `/pricing-strategy` | `[product or tier]` | Pricing tiers, freemium, Van Westendorp |
| 7 | `free-tool-strategy` | `ckm:free-tool-strategy` | `/free-tool-strategy` | `[tool-idea or niche]` | Engineering-as-marketing: free tools for lead gen |
| 8 | `gamification-marketing` | `ckm:gamification-marketing` | `/gamification-marketing` | `[mechanic or campaign]` | Points, badges, leaderboards, streaks |
| 9 | `init` | `ckm:init` | `/init` | `[prompt]` | Initialize marketing project |

### Campaign & Analytics (5 skills)

| # | Folder | Registered Name | Slash Command | Argument Hint | Description |
|---|--------|----------------|--------------|---------------|-------------|
| 1 | `campaign` | `ckm:campaign` | `/campaign` | `[create\|status\|analyze\|email] [name]` | Marketing campaign management |
| 2 | `analytics` | `ckm:analytics` | `/analytics` | `[metric or report-type]` | KPI tracking, dashboards, attribution, ROI |
| 3 | `analyze` | `ckm:analyze` | `/analyze` | `[type]` | Analytics and performance reports |
| 4 | `ab-test-setup` | `ckm:ab-test-setup` | `/ab-test-setup` | `[page or feature]` | Plan, design, implement A/B tests |
| 5 | `competitor` | `ckm:competitor` | `/competitor` | `[analyze\|content\|seo\|alternatives\|list] [url]` | Competitive analysis & battlecards |

### Content Creation & Copywriting (4 skills)

| # | Folder | Registered Name | Slash Command | Argument Hint | Description |
|---|--------|----------------|--------------|---------------|-------------|
| 1 | `write` | `ckm:write` | `/write` | `[audit\|blog\|blog-youtube\|cro\|enhance\|fast\|good\|publish] [args]` | Creative copy, blog posts, CRO content (8 subcommands) |
| 2 | `content-marketing` | `ckm:content-marketing` | `/content-marketing` | `[content-type] [topic]` | Content strategy, editorial calendars |
| 3 | `creativity` | `ckm:creativity` | `/creativity` | `[style or medium]` | 55 styles, 18 platforms, 12 voiceover types |
| 4 | `content-hub` | `ckm:content-hub` | `/content-hub` | `[action: open\|browse\|search]` | Browser-based asset gallery |

### Email & Social (3 skills)

| # | Folder | Registered Name | Slash Command | Argument Hint | Description |
|---|--------|----------------|--------------|---------------|-------------|
| 1 | `email` | `ckm:email` | `/email` | `[flow\|sequence\|newsletter\|cold\|launch\|nurture] [args]` | Email campaigns, drip sequences, A/B testing |
| 2 | `social` | `ckm:social` | `/social` | `[platform] [type] OR [schedule]` | Multi-platform social: X, Facebook, LinkedIn, TikTok |
| 3 | `elevenlabs` | `ckm:elevenlabs` | `/elevenlabs` | `[action: speak\|clone\|sfx] [text-or-file]` | ElevenLabs TTS, voice cloning, sound effects |

### SEO & Ads (3 skills)

| # | Folder | Registered Name | Slash Command | Argument Hint | Description |
|---|--------|----------------|--------------|---------------|-------------|
| 1 | `seo` | `ckm:seo` | `/seo` | `[audit\|keywords\|pseo\|optimize\|schema] [target]` | SEO audits, keyword research, pSEO, JSON+LD |
| 2 | `ads-management` | `ckm:ads-management` | `/ads-management` | `[platform] [campaign-type]` | Google, Meta, LinkedIn, TikTok Ads. AI creative gen |
| 3 | `paid-ads` | `ckm:paid-ads` | `/paid-ads` | `[platform] [campaign-type]` | PPC strategy, ad copy, ROAS optimization |

### Brand & Identity (2 skills)

| # | Folder | Registered Name | Slash Command | Argument Hint | Description |
|---|--------|----------------|--------------|---------------|-------------|
| 1 | `brand` | `ckm:brand` | `/brand` | `[update\|review\|create] [args]` | Brand voice, visual identity, messaging |
| 2 | `persona` | `ckm:persona` | `/persona` | `[action]` | Customer persona management |

### Design & Visual (7 skills)

| # | Folder | Registered Name | Slash Command | Argument Hint | Description |
|---|--------|----------------|--------------|---------------|-------------|
| 1 | `design` | `ckm:design` | `/design` | `[design-type] [context]` | Umbrella: logo, CIP, banners, icons, social photos |
| 2 | `logo-design` | `ckm:logo-design` | `/logo-design` | `[brand-name] [style]` | 55 styles, 30 palettes, 25 industries, Gemini AI |
| 3 | `cip-design` | `ckm:cip-design` | `/cip-design` | `[deliverable or brand-element]` | Corporate Identity: cards, letterhead, signage, apparel |
| 4 | `banner-design` | `ckm:banner-design` | `/banner-design` | `[platform] [style] [dimensions]` | 22+ styles, multi-platform banners |
| 5 | `slides` | `ckm:slides` | `/slides` | `[topic] [slide-count]` | HTML presentations with Chart.js, design tokens |
| 6 | `design-system` | `ckm:design-system` | `/design-system` | `[component or token]` | Three-layer design tokens, CSS variables |
| 7 | `assets-organizing` | `ckm:assets-organizing` | `/assets-organizing` | `[directory or asset-type]` | Organize outputs by topics, date, slugs |

### Video & Audio (2 skills)

| # | Folder | Registered Name | Slash Command | Argument Hint | Description |
|---|--------|----------------|--------------|---------------|-------------|
| 1 | `video` | `ckm:video` | `/video` | `[create\|script-create\|storyboard-create] [topic]` | Video marketing, scripts, storyboards, Veo 3.1 |
| 2 | `youtube` | `ckm:youtube` | `/youtube` | `[blog\|infographic\|social] [youtube-url]` | YouTube → blog/infographic/social via VidCap API |

### Conversion & Growth (6 skills)

| # | Folder | Registered Name | Slash Command | Argument Hint | Description |
|---|--------|----------------|--------------|---------------|-------------|
| 1 | `funnel` | `ckm:funnel` | `/funnel` | `[action] [type]` | Funnel design and optimization |
| 2 | `form-cro` | `ckm:form-cro` | `/form-cro` | `[form-url or description]` | Optimize lead capture, contact, demo forms |
| 3 | `onboarding-cro` | `ckm:onboarding-cro` | `/onboarding-cro` | `[flow-url or description]` | Post-signup activation, first-run experience |
| 4 | `affiliate-marketing` | `ckm:affiliate-marketing` | `/affiliate-marketing` | `[program or strategy]` | SaaS affiliate programs, KOL/KOC, fraud prevention |
| 5 | `referral-program-building` | `ckm:referral-program-building` | `/referral-program-building` | `[product or program-type]` | Viral loops, two-sided rewards |
| 6 | `marketing-dashboard` | `ckm:marketing-dashboard` | `/marketing-dashboard` | *(no argument-hint)* | Local-first command center for solopreneurs |

### Marketing Infrastructure (5 skills)

| # | Folder | Registered Name | Slash Command | Argument Hint | Description |
|---|--------|----------------|--------------|---------------|-------------|
| 1 | `dashboard` | `ckm:dashboard` | `/dashboard` | `[subcommand] [args]` | Marketing Dashboard launcher |
| 2 | `hub` | `ckm:hub` | `/hub` | `[--stop\|--scan]` | Content Hub + Marketing Dashboard combo |
| 3 | `storage` | `ckm:storage` (folder: `storage`) | `/storage` | *(see ckm-storage)* | S3-compatible storage: R2, AWS S3, MinIO, B2 |
| 4 | `ckm-storage` | `ckm:storage` (folder: `ckm-storage`) | `/ckm-storage` | `[list\|sync\|upload\|url] [args]` | S3 storage operations shortcut |
| 5 | `kit-builder` | `ckm:kit-builder` | `/kit-builder` | `[component-type] [name]` | Build Marketing Kit components |

### Marketing Dev & Debug (2 skills)

| # | Folder | Registered Name | Slash Command | Argument Hint | Description |
|---|--------|----------------|--------------|---------------|-------------|
| 1 | `debugging` | `ckm:debugging` | `/debugging` | `[error or issue description]` | Marketing-specific debugging framework |
| 2 | `claude-code` | `ckm:claude-code` | `/claude-code` | *(no argument-hint)* | Claude Code guide (marketing-customized) |

### **ckm: Skills Total: 48 skills**

---

## Skills — Shared with Engineer Kit (ck:)

### Core Workflow (6 skills)

| # | Folder | Registered Name | Slash Command | Argument Hint |
|---|--------|----------------|--------------|---------------|
| 1 | `cook` | `ck:cook` | `/cook` | `[task\|plan-path] [--interactive\|--fast\|--parallel\|--auto\|--no-test]` |
| 2 | `plan` | `ck:plan` | `/plan` | `[archive\|ci\|cro\|fast\|hard\|parallel\|two\|validate] [task]` |
| 3 | `fix` | `ck:fix` | `/fix` | `[issue] --auto\|--review\|--quick\|--parallel` |
| 4 | `test` | `ck:test` | `/test` | `[ui\|workflow] [target]` |
| 5 | `code-review` | `ck:code-review` | `/code-review` | `[context] OR codebase [parallel]` |
| 6 | `ask` | `ck:ask` | `/ask` | `[technical-question]` |

### AI & Multimodal (3 skills)

| # | Folder | Registered Name | Slash Command | Argument Hint |
|---|--------|----------------|--------------|---------------|
| 1 | `ai-artist` | `ck:ai-artist` | `/ai-artist` | `[concept] [--mode search\|creative\|wild\|all] [--skip]` |
| 2 | `ai-multimodal` | `ck:ai-multimodal` | `/ai-multimodal` | `[file-path] [prompt]` |
| 3 | `media-processing` | `ck:media-processing` | `/media-processing` | `[input-file] [operation]` |

### Thinking & Problem Solving (4 skills)

| # | Folder | Registered Name | Slash Command | Argument Hint |
|---|--------|----------------|--------------|---------------|
| 1 | `brainstorm` | `ck:brainstorm` | `/brainstorm` | `[topic or problem]` |
| 2 | `sequential-thinking` | `ck:sequential-thinking` | `/sequential-thinking` | `[problem to analyze step-by-step]` |
| 3 | `problem-solving` | `ck:problem-solving` | `/problem-solving` | `[problem description]` |
| 4 | `context-engineering` | `ck:context-engineering` | `/context-engineering` | `[topic]` |

### Web & Backend (10 skills)

| # | Folder | Registered Name | Slash Command | Argument Hint |
|---|--------|----------------|--------------|---------------|
| 1 | `frontend-design` | `ck:frontend-design` | `/frontend-design` | *(no argument-hint)* |
| 2 | `frontend-development` | `ck:frontend-development` | `/frontend-development` | `[component or feature]` |
| 3 | `ui-styling` | `ck:ui-styling` | `/ui-styling` | `[component or layout]` |
| 4 | `ui-ux-pro-max` | `ck:ui-ux-pro-max` | `/ui-ux-pro-max` | *(no argument-hint)* |
| 5 | `web-design-guidelines` | `ck:web-design-guidelines` | `/web-design-guidelines` | `[file-or-pattern]` |
| 6 | `web-frameworks` | `ck:web-frameworks` | `/web-frameworks` | `[framework] [feature]` |
| 7 | `backend-development` | `ck:backend-development` | `/backend-development` | `[framework] [task]` |
| 8 | `databases` | `ck:databases` | `/databases` | `[query or schema task]` |
| 9 | `better-auth` | `ck:better-auth` | `/better-auth` | `[auth-method or feature]` |
| 10 | `payment-integration` | `ck:payment-integration` | `/payment-integration` | `[provider] [task]` |

### Git & Version Control (2 skills)

| # | Folder | Registered Name | Slash Command | Argument Hint |
|---|--------|----------------|--------------|---------------|
| 1 | `git` | `ck:git` | `/git` | `cm\|cp\|pr\|merge [args]` |
| 2 | `worktree` | `ck:worktree` | `/worktree` | `[feature] OR [project] [feature]` |

### MCP & Integration (3 skills)

| # | Folder | Registered Name | Slash Command | Argument Hint |
|---|--------|----------------|--------------|---------------|
| 1 | `mcp-builder` | `ck:mcp-builder` | `/mcp-builder` | `[service or API to integrate]` |
| 2 | `mcp-management` | `ck:mcp-management` | `/mcp-management` | `[task or server-name]` |
| 3 | `use-mcp` | `ck:use-mcp` | `/use-mcp` | `[task]` |

### Utilities & Tools (14 skills)

| # | Folder | Registered Name | Slash Command | Argument Hint |
|---|--------|----------------|--------------|---------------|
| 1 | `ck-help` | `ck:ck-help` | `/ck-help` | `[category\|command\|task description]` |
| 2 | `preview` | `ck:preview` | `/preview` | `[path] OR --explain\|--slides\|--diagram\|--ascii [topic]` |
| 3 | `scout` | `ck:scout` | `/scout` | `[search-target] [ext]` |
| 4 | `docs` | `ck:docs` | `/docs` | `[init\|llms\|summarize\|update] [args]` |
| 5 | `docs-seeker` | `ck:docs-seeker` | `/docs-seeker` | `[library-name] [topic]` |
| 6 | `repomix` | `ck:repomix` | `/repomix` | `[path] [--style xml\|markdown\|plain\|json]` |
| 7 | `journal` | `ck:journal` | `/journal` | *(no argument-hint)* |
| 8 | `watzup` | `ck:watzup` | `/watzup` | *(no argument-hint)* |
| 9 | `kanban` | `ck:kanban` | `/kanban` | *(no argument-hint)* |
| 10 | `plans-kanban` | `ck:plans-kanban` | `/plans-kanban` | `[plans-dir]` |
| 11 | `markdown-novel-viewer` | `ck:markdown-novel-viewer` | `/markdown-novel-viewer` | `[file-or-directory]` |
| 12 | `mermaidjs-v11` | `ck:mermaidjs-v11` | `/mermaidjs-v11` | `[diagram-type or description]` |
| 13 | `chrome-devtools` | `ck:chrome-devtools` | `/chrome-devtools` | `[url or task]` |
| 14 | `skill-creator` | `ck:skill-creator` | `/skill-creator` | `[skill-name or description]` |

### Specialized (7 skills)

| # | Folder | Registered Name | Slash Command | Argument Hint |
|---|--------|----------------|--------------|---------------|
| 1 | `copywriting` | `ck:copywriting` | `/copywriting` | `[copy-type] [context]` |
| 2 | `devops` | `ck:devops` | `/devops` | `[platform] [task]` |
| 3 | `shopify` | `ck:shopify` | `/shopify` | `[extension-type] [feature]` |
| 4 | `remotion` | `ck:remotion` | `/remotion` | `[video or component]` |
| 5 | `shader` | `ck:shader` | `/shader` | `[effect or pattern]` |
| 6 | `threejs` | `ck:threejs` | `/threejs` | `[3D scene or feature]` |
| 7 | `google-adk-python` | `ck:google-adk-python` | `/google-adk-python` | `[agent or feature]` |

### **ck: Skills Total: 49 skills**

---

## Skills — Infrastructure & Utility

| # | Folder | Registered Name | Description |
|---|--------|----------------|-------------|
| 1 | `template-skill` | `ck:template-skill` | Internal skill template |
| 2 | `common` | *(shared utilities)* | Common references/scripts used by other skills |

---

## Skills — Document Sub-skills

| # | Folder | Registered Name | Description |
|---|--------|----------------|-------------|
| 1 | `document-skills/docx` | `ck:document-skills/docx` | Generate DOCX documents |
| 2 | `document-skills/pdf` | `ck:document-skills/pdf` | Generate PDF documents |
| 3 | `document-skills/pptx` | `ck:document-skills/pptx` | Generate PPTX presentations |
| 4 | `document-skills/xlsx` | `ck:document-skills/xlsx` | Generate XLSX spreadsheets |

---

## Slash Command Quick Reference

### All `/ckm:` Commands (via `.claude/commands/ckm/`)

```
/ckm:analyze [report]
/ckm:ask [question]
/ckm:brand [update]
/ckm:campaign [create|status|analyze|email] [name]
/ckm:ck-help [category|command]
/ckm:competitor [url]
/ckm:dashboard [check]
/ckm:docs [init|llms|summarize|update]
/ckm:email [flow|sequence] [type]
/ckm:funnel [action] [type]
/ckm:hub
/ckm:init [prompt]
/ckm:journal
/ckm:kanban
/ckm:persona [action]
/ckm:plan [archive|ci|cro|fast|hard|parallel|two|validate] [task]
/ckm:preview [path]
/ckm:seo [audit|keywords|pseo] [target]
/ckm:skill [add|create|fix-logs|optimize|plan|update]
/ckm:slides [create] [topic]
/ckm:social [schedule] [platform]
/ckm:storage [list|sync|upload|url]
/ckm:test [ui|workflow]
/ckm:use-mcp [task]
/ckm:video [create|script|storyboard] [topic]
/ckm:watzup
/ckm:worktree [feature]
/ckm:write [audit|blog|cro|enhance|fast|formula|good|publish] [topic]
/ckm:youtube [blog|infographic|social] [url]
```

### All `ckm:` Skills (via `.claude/skills/`)

```
/ckm:ab-test-setup [page or feature]
/ckm:ads-management [platform] [campaign-type]
/ckm:affiliate-marketing [program or strategy]
/ckm:analytics [metric or report-type]
/ckm:analyze [type]
/ckm:assets-organizing [directory or asset-type]
/ckm:banner-design [platform] [style] [dimensions]
/ckm:brand [update|review|create] [args]
/ckm:campaign [create|status|analyze|email] [name]
/ckm:cip-design [deliverable or brand-element]
/ckm:claude-code [question]
/ckm:competitor [analyze|content|seo|alternatives|list] [url]
/ckm:content-hub [action: open|browse|search]
/ckm:content-marketing [content-type] [topic]
/ckm:creativity [style or medium]
/ckm:dashboard [subcommand] [args]
/ckm:debugging [error or issue]
/ckm:design [design-type] [context]
/ckm:design-system [component or token]
/ckm:elevenlabs [speak|clone|sfx] [text-or-file]
/ckm:email [flow|sequence|newsletter|cold|launch|nurture] [args]
/ckm:form-cro [form-url or description]
/ckm:free-tool-strategy [tool-idea or niche]
/ckm:funnel [action] [type]
/ckm:gamification-marketing [mechanic or campaign]
/ckm:hub [--stop|--scan]
/ckm:init [prompt]
/ckm:kit-builder [component-type] [name]
/ckm:launch-strategy [product or feature]
/ckm:logo-design [brand-name] [style]
/ckm:marketing-dashboard
/ckm:marketing-ideas [product or niche]
/ckm:marketing-planning [goal or timeframe]
/ckm:marketing-psychology [principle or tactic]
/ckm:marketing-research [topic or market]
/ckm:onboarding-cro [flow-url or description]
/ckm:paid-ads [platform] [campaign-type]
/ckm:persona [action]
/ckm:pricing-strategy [product or tier]
/ckm:referral-program-building [product or program-type]
/ckm:seo [audit|keywords|pseo|optimize|schema] [target]
/ckm:slides [topic] [slide-count]
/ckm:social [platform] [type] OR [schedule]
/ckm:storage [list|sync|upload|url] [args]
/ckm:video [create|script-create|storyboard-create] [topic]
/ckm:write [audit|blog|blog-youtube|cro|enhance|fast|good|publish] [args]
/ckm:youtube [blog|infographic|social] [youtube-url]
```

### All `ck:` Skills (shared with Engineer Kit)

```
/ck:ai-artist [concept] [--mode search|creative|wild|all] [--skip]
/ck:ai-multimodal [file-path] [prompt]
/ck:ask [technical-question]
/ck:backend-development [framework] [task]
/ck:better-auth [auth-method or feature]
/ck:brainstorm [topic or problem]
/ck:chrome-devtools [url or task]
/ck:ck-help [category|command|task description]
/ck:code-review [context] OR codebase [parallel]
/ck:context-engineering [topic]
/ck:cook [task|plan-path] [--interactive|--fast|--parallel|--auto|--no-test]
/ck:copywriting [copy-type] [context]
/ck:databases [query or schema task]
/ck:devops [platform] [task]
/ck:docs [init|llms|summarize|update] [args]
/ck:docs-seeker [library-name] [topic]
/ck:fix [issue] --auto|--review|--quick|--parallel
/ck:frontend-design
/ck:frontend-development [component or feature]
/ck:git cm|cp|pr|merge [args]
/ck:google-adk-python [agent or feature]
/ck:kanban
/ck:markdown-novel-viewer [file-or-directory]
/ck:mcp-builder [service or API to integrate]
/ck:mcp-management [task or server-name]
/ck:media-processing [input-file] [operation]
/ck:mermaidjs-v11 [diagram-type or description]
/ck:payment-integration [provider] [task]
/ck:plans-kanban [plans-dir]
/ck:preview [path] OR --explain|--slides|--diagram|--ascii [topic]
/ck:problem-solving [problem description]
/ck:remotion [video or component]
/ck:repomix [path] [--style xml|markdown|plain|json]
/ck:scout [search-target] [ext]
/ck:sequential-thinking [problem to analyze step-by-step]
/ck:shader [effect or pattern]
/ck:shopify [extension-type] [feature]
/ck:skill-creator [skill-name or description]
/ck:test [ui|workflow] [target]
/ck:threejs [3D scene or feature]
/ck:ui-styling [component or layout]
/ck:ui-ux-pro-max
/ck:use-mcp [task]
/ck:watzup
/ck:web-design-guidelines [file-or-pattern]
/ck:web-frameworks [framework] [feature]
/ck:worktree [feature] OR [project] [feature]
```

---

## Totals

| Category | Count |
|----------|-------|
| Commands (top-level) | 29 |
| Command subcommands | 45 |
| Total command files | 74 |
| Skills `ckm:` (marketing-exclusive) | 48 |
| Skills `ck:` (shared) | 49 |
| Skills infrastructure/utility | 2 |
| Document sub-skills | 4 |
| **Total SKILL.md files** | **102** |
| **Total skills (unique directories)** | **100** |

> **Note:** `ckm-storage` folder registers as `ckm:storage` (same name as `storage` folder) — these are 2 different skills with the same registered name. `ckm-storage` is the operations shortcut, `storage` is the integration config.

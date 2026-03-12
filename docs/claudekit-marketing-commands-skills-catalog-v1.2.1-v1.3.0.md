# ClaudeKit Marketing — Commands & Skills Catalog

> **Stable:** v1.2.1 · **Beta:** v1.3.0-beta.8 · **Updated:** 2026-03-12

Marketing Kit sử dụng **2 hệ thống plugin** song song: **Commands** (`.claude/commands/mkt/`) và **Skills** (`.claude/skills/`). Cả hai đều hoạt động qua slash commands trong Claude Code.

- **Commands**: Lightweight slash commands (`.md` files), hỗ trợ subcommands qua directories. Invoked trực tiếp bằng `/mkt:<name>`.
- **Skills**: Full plugin format (`SKILL.md` + `references/` + `scripts/`), auto-discovered bởi Claude Code. Dùng namespace `ck:` (shared) hoặc `ckm:` (marketing-exclusive).

---

## Namespace Convention

| Prefix | Meaning | Stable Count | Beta Count | Example |
|--------|---------|-------------|------------|---------|
| `ck:` | Shared with Engineer Kit | ~41 skills | ~48 skills | `ck:cook`, `ck:git`, `ck:brainstorm` |
| `ckm:` | Marketing Kit exclusive | ~37 skills | ~48 skills | `ckm:seo-optimization`, `ckm:campaign-management` |
| `mkt:` | Commands namespace | 29 commands | 29 commands | `/mkt:campaign`, `/mkt:write`, `/mkt:seo` |

### Dual-Install Mode (Engineer Kit + Marketing Kit cùng 1 project)

Khi install cả 2 Kit vào cùng 1 project, `ck:` skills **được chia sẻ chung** — chỉ cần 1 bản duy nhất, không bị duplicate. Marketing Kit tự detect và reuse các `ck:` skills đã có từ Engineer Kit.

**Lợi ích:**
- **Không trùng lặp:** `ck:` skills chỉ load 1 lần, tiết kiệm context
- **Nhất quán:** `/cook`, `/git`, `/plan`, `/fix` hoạt động giống nhau bất kể gọi từ workflow nào
- **Mở rộng tự nhiên:** Marketing Kit thêm `ckm:` skills chuyên biệt bên cạnh shared core

**Lưu ý khi dual-install:**
- Nếu 2 Kit có version khác nhau của cùng 1 `ck:` skill, version mới hơn sẽ được ưu tiên
- `ckm:` skills có thể gọi `ck:` skills nội bộ (vd: `ckm:write` dùng `ck:copywriting`, `ckm:seo` dùng `ck:scout`)
- Agent definitions cũng chia sẻ: 11 shared agents (`code-reviewer`, `debugger`, `planner`...) dùng chung

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

## Commands (29 in Stable)

Commands live in `.claude/commands/mkt/`. Single-file (`.md`) commands handle simple tasks; directory-based commands support subcommands.

| Command | Subcommands | Description |
|---------|-------------|-------------|
| `/mkt:analyze` | `report` | Analytics and performance reports |
| `/mkt:ask` | — | Expert consultation (marketing context) |
| `/mkt:brand` | `update` | Brand guidelines management |
| `/mkt:campaign` | `create`, `status`, `analyze`, `email` | Campaign management |
| `/mkt:ck-help` | — | ClaudeKit usage guide |
| `/mkt:competitor` | — | Competitive analysis |
| `/mkt:dashboard` | `check` | Marketing Dashboard launcher |
| `/mkt:docs` | `init`, `llms`, `summarize`, `update` | Documentation management |
| `/mkt:email` | `flow`, `sequence` | Email marketing campaigns |
| `/mkt:funnel` | — | Funnel design and optimization |
| `/mkt:hub` | — | Content Hub + Dashboard combo |
| `/mkt:init` | — | Initialize marketing project |
| `/mkt:journal` | — | Write journal entries |
| `/mkt:kanban` | — | Agent orchestration board |
| `/mkt:persona` | — | Customer persona management |
| `/mkt:plan` | `archive`, `ci`, `cro`, `fast`, `hard`, `parallel`, `two`, `validate` | Plan creation |
| `/mkt:preview` | — | View files/visual explanations |
| `/mkt:seo` | `audit`, `keywords`, `pseo` | SEO optimization |
| `/mkt:skill` | `add`, `create`, `fix-logs`, `optimize`, `plan`, `update` | Skill management |
| `/mkt:slides` | `create` | Presentation creation |
| `/mkt:social` | `schedule` | Social media management |
| `/mkt:storage` | `list`, `sync`, `upload`, `url` | S3 storage operations |
| `/mkt:test` | `ui`, `workflow` | Run tests |
| `/mkt:use-mcp` | — | MCP tool discovery & execution |
| `/mkt:video` | `create`, `script`, `storyboard` | Video production |
| `/mkt:watzup` | — | Review recent changes |
| `/mkt:worktree` | — | Git worktree management |
| `/mkt:write` | `audit`, `blog`, `cro`, `enhance`, `fast`, `formula`, `good`, `publish` | Content writing (8 modes) |
| `/mkt:youtube` | `blog`, `infographic`, `social` | YouTube content repurposing |

---

## Skills (78 in Stable · 96 in Beta)

> Skills marked with 🆕 are new in Beta. Skills marked with 📝 were renamed from Stable.
> In Stable, skills use original names (e.g., `campaign-management`, `seo-optimization`). Beta renames shown with 📝.

### 🎯 Core Workflow Skills (Shared)

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:cook` | `/cook [task\|plan-path] [--interactive\|--fast\|--parallel\|--auto\|--no-test]` | All-in-one feature implementation: research → plan → implement → test → review |
| `ck:plan` | `/plan [archive\|ci\|cro\|fast\|hard\|parallel\|two\|validate] [task]` | Intelligent plan creation with prompt enhancement. Marketing adds `cro` mode |
| `fixing` | `/fix [issue] --auto\|--review\|--quick\|--parallel` | 📝 *Beta: `ck:fix`*. Smart bug fixing with routing to specialized fix commands |
| `Debugging` | `/debugging [error or issue description]` | 📝 *Beta: `ckm:debugging`*. Marketing-specific debugging with campaign/funnel context |
| `test-orchestrator` | `/test-orchestrator [ui\|workflow] [target]` | 📝 *Beta: `ck:test`*. Run tests. Marketing adds `workflow` for validating commands/agents/skills |
| `ck:code-review` | `/code-review [context] OR codebase [parallel]` | Review code quality with scout-based edge case detection |

### 📢 Marketing Strategy & Planning

| Skill | Usage | Description |
|-------|-------|-------------|
| `ckm:marketing-planning` | `/marketing-planning [goal or timeframe]` | Plan strategies using RACE, SOSTAC, STP frameworks. Activates marketing-research |
| `ckm:marketing-research` | `/marketing-research [topic or market]` | Research market trends, competitors, audience insights |
| `ckm:marketing-ideas` | `/marketing-ideas [product or niche]` | 140 proven marketing approaches organized by category |
| `ckm:marketing-psychology` | `/marketing-psychology [principle or tactic]` | 70+ mental models for marketing: cognitive biases, persuasion, consumer behavior |
| `ckm:launch-strategy` | `/launch-strategy [product or feature]` | Product launch, Product Hunt, go-to-market, beta launch, waitlist |
| `ckm:pricing-strategy` | `/pricing-strategy [product or tier]` | Pricing tiers, freemium, Van Westendorp, packaging strategy |
| `ckm:free-tool-strategy` | `/free-tool-strategy [tool-idea or niche]` | Engineering-as-marketing: build free tools for lead gen & SEO |
| `ckm:gamification-marketing` | `/gamification-marketing [mechanic or campaign]` | Points, badges, leaderboards, streaks for loyalty & engagement |
| 🆕 `ckm:init` | `/init [prompt]` | Initialize marketing project with full setup |

### 📊 Campaign & Analytics

| Skill | Usage | Description |
|-------|-------|-------------|
| `ckm:campaign-management` | `/campaign-management [action] [name]` | 📝 *Beta: `ckm:campaign`*. End-to-end campaign management |
| `ckm:analytics` | `/analytics [metric or report-type]` | KPI tracking, reporting dashboards, attribution, ROI analysis |
| 🆕 `ckm:analyze` | `/analyze [type]` | Analytics and performance reports (Beta only) |
| `ckm:ab-test-setup` | `/ab-test-setup [page or feature]` | Plan, design, implement A/B tests and experiments |
| `ckm:competitor-alternatives` | `/competitor-alternatives [url or competitor]` | 📝 *Beta: `ckm:competitor` with 5 subcommands*. Competitive analysis & battlecards |

### ✍️ Content Creation & Copywriting

| Skill | Usage | Description |
|-------|-------|-------------|
| 🆕 `ckm:write` | `/write [audit\|blog\|blog-youtube\|cro\|enhance\|fast\|good\|publish] [args]` | Creative copy, blog posts, CRO content. 8 subcommands |
| `ck:copywriting` | `/copywriting [copy-type] [context]` | Conversion formulas, headlines, email copy, landing pages, CTAs |
| `ckm:content-marketing` | `/content-marketing [content-type] [topic]` | Content strategy, editorial calendars, content pillar mapping |
| `ckm:creativity` | `/creativity [style or medium]` | 55 styles, 18 platforms, 12 voiceover types, 30 campaign categories |

### 📬 Email & Social

| Skill | Usage | Description |
|-------|-------|-------------|
| `ckm:email-marketing` | `/email-marketing [flow\|sequence] [args]` | 📝 *Beta: `ckm:email` with 6 subcommands*. Email campaigns, drip sequences, A/B testing |
| `ckm:social-media` | `/social-media [platform] [type]` | 📝 *Beta: `ckm:social`*. Multi-platform: X, Facebook, LinkedIn, TikTok, YouTube |

### 🔍 SEO & Ads

| Skill | Usage | Description |
|-------|-------|-------------|
| `ckm:seo-optimization` | `/seo-optimization [target]` | 📝 *Beta: `ckm:seo` with 5 subcommands*. Keyword research (ReviewWeb.site API), GSC API, pSEO, JSON+LD |
| `ckm:ads-management` | `/ads-management [platform] [campaign-type]` | Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads. AI creative generation |
| `ckm:paid-ads` | `/paid-ads [platform] [campaign-type]` | PPC strategy, ad copy, ROAS optimization, retargeting |

### 🎨 Brand & Identity

| Skill | Usage | Description |
|-------|-------|-------------|
| `ckm:brand-guidelines` | `/brand-guidelines [args]` | 📝 *Beta: `ckm:brand` with subcommands*. Brand voice, visual identity, messaging, asset management |
| 🆕 `ckm:persona` | `/persona [action]` | Customer persona management (Beta only) |

### 🎬 Design & Visual

| Skill | Usage | Description |
|-------|-------|-------------|
| `ckm:design` | `/design [design-type] [context]` | Comprehensive: logo (55 styles), CIP (50 deliverables), banners, icons, social photos |
| `ckm:logo-design` | `/logo-design [brand-name] [style]` | 55 styles, 30 color palettes, 25 industries. Gemini Nano Banana AI |
| `ckm:cip-design` | `/cip-design [deliverable or brand-element]` | Corporate Identity Program: business cards, letterhead, signage, apparel |
| 🆕 `ckm:banner-design` | `/banner-design [platform] [style] [dimensions]` | Social/ads/web/print banners. 22+ styles. Multi-platform sizing (Beta only) |
| `ckm:slides-design` | `/slides-design [topic] [slide-count]` | 📝 *Beta: `ckm:slides`*. HTML presentations with Chart.js, design tokens |
| `ckm:design-system` | `/design-system [component or token]` | Three-layer design tokens (primitive→semantic→component), CSS variables |
| `ckm:content-hub` | `/content-hub [open\|browse\|search]` | Browser-based asset gallery with filter/search, brand context, R2-ready |
| `ckm:assets-organizing` | `/assets-organizing [directory or asset-type]` | Organize outputs by topics, date format, slugs |

### 🎥 Video & Audio

| Skill | Usage | Description |
|-------|-------|-------------|
| `ckm:video-production` | `/video-production [topic]` | 📝 *Beta: `ckm:video` with 3 subcommands*. Video marketing, scripts, storyboards, Veo 3.1 |
| `ckm:youtube-handling` | `/youtube-handling [youtube-url]` | 📝 *Beta: `ckm:youtube` with 3 subcommands*. Convert YouTube → blog/infographic/social via VidCap.xyz API |
| 🆕 `ckm:elevenlabs` | `/elevenlabs [speak\|clone\|sfx] [text-or-file]` | ElevenLabs TTS, voice cloning, sound effects & music generation |

### 🔄 Conversion & Growth

| Skill | Usage | Description |
|-------|-------|-------------|
| 🆕 `ckm:funnel` | `/funnel [action] [type]` | Funnel design and optimization (Beta only) |
| `ckm:form-cro` | `/form-cro [form-url or description]` | Optimize lead capture, contact, demo request forms |
| `ckm:onboarding-cro` | `/onboarding-cro [flow-url or description]` | Post-signup activation, first-run experience, empty states |
| `ckm:affiliate-marketing` | `/affiliate-marketing [program or strategy]` | SaaS affiliate programs, KOL/KOC, fraud prevention, 20-40% commissions |
| `ckm:referral-program-building` | `/referral-program-building [product or program-type]` | Viral loops, two-sided rewards, platform selection (Rewardful, Viral Loops) |

### 🤖 AI & Multimodal (Shared)

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:ai-artist` | `/ai-artist [concept] [--mode search\|creative\|wild\|all] [--skip]` | Image generation via Nano Banana. 129 curated prompts, 3 modes |
| `ck:ai-multimodal` | `/ai-multimodal [file-path] [prompt]` | Gemini API: analyze images/audio/video. Generate via Imagen 4, Veo 3 |
| `ck:media-processing` | `/media-processing [input-file] [operation]` | FFmpeg, ImageMagick, RMBG. 100+ formats, hardware acceleration |

### 🧠 Thinking & Problem Solving (Shared)

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:brainstorm` | `/brainstorm [topic or problem]` | Trade-off analysis with brutal honesty |
| `ck:sequential-thinking` | `/sequential-thinking [problem to analyze]` | Step-by-step analysis with revision capability |
| `ck:problem-solving` | `/problem-solving [problem description]` | Systematic techniques: simplification cascades, inversion, meta-patterns |
| `ck:ask` | `/ask [technical-question]` | Expert consultation on technical/architectural questions |
| `ck:context-engineering` | `/context-engineering [topic]` | Check context usage, monitor limits, optimize tokens |

### 🌐 Web & Backend (Shared)

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:frontend-design` | `/frontend-design` | Create polished interfaces from designs/screenshots/videos |
| `ck:frontend-development` | `/frontend-development [component or feature]` | React/TypeScript, MUI v7, TanStack Router |
| `ck:ui-styling` | `/ui-styling [component or layout]` | shadcn/ui (Radix UI + Tailwind CSS), dark mode, design systems |
| `ck:ui-ux-pro-max` | `/ui-ux-pro-max` | 50+ styles, 161 palettes, 57 font pairings, 25 chart types |
| `ck:web-design-guidelines` | `/web-design-guidelines [file-or-pattern]` | Web Interface Guidelines compliance review |
| `ck:web-frameworks` | `/web-frameworks [framework] [feature]` | Next.js, Turborepo, RemixIcon |
| `ck:backend-development` | `/backend-development [framework] [task]` | Node.js, Python, Go. REST/GraphQL/gRPC |
| `ck:databases` | `/databases [query or schema task]` | MongoDB, PostgreSQL, SQL/NoSQL |
| `ck:devops` | `/devops [platform] [task]` | Cloudflare, Docker, GCP, Kubernetes |
| `ck:better-auth` | `/better-auth [auth-method or feature]` | OAuth, 2FA, passkeys, RBAC |
| `ck:payment-integration` | `/payment-integration [provider] [task]` | SePay, Polar, Stripe |
| `ck:shopify` | `/shopify [extension-type] [feature]` | Apps, Polaris UI, Liquid, checkout |

### 🔗 Git & Version Control (Shared)

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:git` | `/git cm\|cp\|pr\|merge [args]` | Conventional commits, auto-split, security scans |
| `ck:worktree` | `/worktree [feature] OR [project] [feature]` | Isolated git worktree for parallel development |

### 🔌 MCP & Integration (Shared)

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:mcp-builder` | `/mcp-builder [service or API]` | Build MCP servers: FastMCP (Python), MCP SDK (Node) |
| `ck:mcp-management` | `/mcp-management [task or server-name]` | Discover, analyze, execute MCP tools/prompts/resources |
| `ck:use-mcp` | `/use-mcp [task]` | Utilize MCP server tools with intelligent discovery |

### 🛠️ Utilities & Tools

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:ck-help` | `/ck-help [category\|command\|task description]` | ClaudeKit usage guide |
| `ckm:claude-code` | `/claude-code [question or topic]` | Claude Code guide (marketing-customized triggers) |
| `ck:preview` | `/preview [path] OR --explain\|--slides\|--diagram\|--ascii [topic]` | View files/generate visual explanations |
| `ck:scout` | `/scout [search-target] [ext]` | Fast codebase scouting with parallel agents |
| `ck:docs` | `/docs [init\|llms\|summarize\|update] [args]` | Project documentation management |
| `ck:docs-seeker` | `/docs-seeker [library-name] [topic]` | Search docs via llms.txt (context7.com) |
| `ck:repomix` | `/repomix [path] [--style xml\|markdown\|plain\|json]` | Pack repos into AI-friendly files |
| `ck:journal` | `/journal` | Write journal entries |
| `ck:watzup` | `/watzup` | Review recent changes, wrap up session |
| `ck:kanban` | `/kanban` | AI agent orchestration board |
| `ck:plans-kanban` | `/plans-kanban [plans-dir]` | Plans dashboard with progress tracking |
| `ck:markdown-novel-viewer` | `/markdown-novel-viewer [file-or-directory]` | Calm book-like reading via HTTP server |
| `ck:mermaidjs-v11` | `/mermaidjs-v11 [diagram-type or description]` | Mermaid.js v11 diagrams (24+ types) |
| `ck:remotion` | `/remotion [video or component]` | Programmatic video in React |
| `ck:shader` | `/shader [effect or pattern]` | GLSL fragment shaders for procedural graphics |
| `ck:threejs` | `/threejs [3D scene or feature]` | Three.js (WebGL/WebGPU). 556 examples |
| `ck:google-adk-python` | `/google-adk-python [agent or feature]` | Build AI agents with Google ADK |
| `ck:chrome-devtools` | `/chrome-devtools [url or task]` | Puppeteer browser automation |
| `ck:skill-creator` | `/skill-creator [skill-name or description]` | Create/update Claude skills |

### 🏗️ Marketing Infrastructure

| Skill | Usage | Description |
|-------|-------|-------------|
| 🆕 `ckm:dashboard` | `/dashboard [subcommand] [args]` | Launch Marketing Dashboard command center |
| 🆕 `ckm:marketing-dashboard` | `/marketing-dashboard` | Local-first command center for solopreneurs |
| 🆕 `ckm:hub` | `/hub [--stop\|--scan]` | Open Content Hub + Marketing Dashboard together |
| 🆕 `ckm:storage` | `/storage` | S3-compatible storage: R2, AWS S3, MinIO, B2, DigitalOcean |
| 🆕 `ckm:ckm-storage` | `/ckm-storage [list\|sync\|upload\|url] [args]` | S3 storage operations shortcut (Beta only) |
| `ckm:kit-builder` | `/kit-builder [component-type] [name]` | Build Marketing Kit components: skills, agents, workflows |

### 🧰 Internal

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:template-skill` | — | Skill template for creating new skills |
| `ck:copywriting` | — | Also used internally by `write`, `email`, `social` |

### 📄 Document Generation (Sub-skills)

| Skill | Usage | Description |
|-------|-------|-------------|
| `ck:document-skills/docx` | — | Generate DOCX documents |
| `ck:document-skills/pdf` | — | Generate PDF documents |
| `ck:document-skills/pptx` | — | Generate PPTX presentations |
| `ck:document-skills/xlsx` | — | Generate XLSX spreadsheets |

---

## Skill Arguments & Flags Reference

### `/write` (Marketing-Exclusive)

| Subcommand | Example | When to Use |
|------------|---------|-------------|
| `audit` | `/write audit` | Audit existing content for quality & conversions |
| `blog` | `/write blog [topic]` | Write a blog post from scratch |
| `blog-youtube` | `/write blog-youtube [youtube-url]` | Convert YouTube video into blog post |
| `cro` | `/write cro [page-url]` | Write CRO-focused content for landing pages |
| `enhance` | `/write enhance [file]` | Improve existing content |
| `fast` | `/write fast [topic]` | Quick draft — minimal research |
| `good` | `/write good [topic]` | High-quality content with research |
| `publish` | `/write publish [file]` | Finalize and publish-ready content |

### `/campaign`

| Subcommand | Example | When to Use |
|------------|---------|-------------|
| `create` | `/campaign create summer-sale` | Create new campaign with goals & timeline |
| `status` | `/campaign status` | Check all active campaign statuses |
| `analyze` | `/campaign analyze Q1` | Analyze campaign performance |
| `email` | `/campaign email welcome-series` | Create email component of campaign |

### `/seo`

| Subcommand | Example | When to Use |
|------------|---------|-------------|
| `audit` | `/seo audit https://example.com` | Full SEO audit of a URL |
| `keywords` | `/seo keywords "marketing automation"` | Keyword research via ReviewWeb.site API |
| `pseo` | `/seo pseo [template]` | Programmatic SEO page generation |
| `optimize` | `/seo optimize [page]` | On-page optimization recommendations |
| `schema` | `/seo schema [page]` | Generate JSON+LD structured data |

### `/competitor`

| Subcommand | Example | When to Use |
|------------|---------|-------------|
| `analyze` | `/competitor analyze competitor.com` | Deep competitive analysis |
| `content` | `/competitor content competitor.com` | Analyze competitor's content strategy |
| `seo` | `/competitor seo competitor.com` | SEO gap analysis |
| `alternatives` | `/competitor alternatives` | Generate alternatives page content |
| `list` | `/competitor list` | List known competitors |

### `/email`

| Subcommand | Example | When to Use |
|------------|---------|-------------|
| `flow` | `/email flow onboarding` | Design email automation flow |
| `sequence` | `/email sequence nurture` | Build multi-email sequence |
| `newsletter` | `/email newsletter march` | Create newsletter edition |
| `cold` | `/email cold outreach` | Cold email templates |
| `launch` | `/email launch product-v2` | Launch announcement emails |
| `nurture` | `/email nurture trial-users` | Nurture sequence for leads |

### `/social`

| Argument | Example | When to Use |
|----------|---------|-------------|
| `[platform] [type]` | `/social twitter thread` | Create platform-specific content |
| `schedule` | `/social schedule` | Plan content calendar |
| Platforms | `twitter`, `facebook`, `linkedin`, `tiktok`, `youtube`, `instagram`, `threads` | All major platforms supported |

### `/brand`

| Subcommand | Example | When to Use |
|------------|---------|-------------|
| `update` | `/brand update voice` | Update brand guidelines |
| `review` | `/brand review content.md` | Review content for brand compliance |
| `create` | `/brand create style-guide` | Create new brand assets |

### `/video`

| Subcommand | Example | When to Use |
|------------|---------|-------------|
| `create` | `/video create product-demo` | Full video production workflow |
| `script-create` | `/video script-create explainer` | Write video script |
| `storyboard-create` | `/video storyboard-create ad` | Generate visual storyboard |

### `/youtube`

| Subcommand | Example | When to Use |
|------------|---------|-------------|
| `blog` | `/youtube blog https://youtu.be/xxx` | Convert video → blog post |
| `infographic` | `/youtube infographic [url]` | Convert video → infographic |
| `social` | `/youtube social [url]` | Convert video → social posts |

### `/elevenlabs` 🆕

| Subcommand | Example | When to Use |
|------------|---------|-------------|
| `speak` | `/elevenlabs speak "Hello world"` | Text-to-speech generation |
| `clone` | `/elevenlabs clone voice.mp3` | Clone a voice from audio sample |
| `sfx` | `/elevenlabs sfx "ocean waves"` | Generate sound effects |

### `/ads-management`

| Argument | Example | When to Use |
|----------|---------|-------------|
| `[platform]` | `/ads-management google search` | Platform: `google`, `meta`, `linkedin`, `tiktok` |
| `[campaign-type]` | `/ads-management meta retargeting` | Type: `search`, `display`, `video`, `retargeting`, `awareness` |

### `/design`

| Argument | Example | When to Use |
|----------|---------|-------------|
| `logo` | `/design logo TechBrand` | Logo generation (55 styles) |
| `cip` | `/design cip business-card` | Corporate identity deliverables |
| `banner` | `/design banner facebook` | Banner for any platform |
| `icon` | `/design icon settings` | SVG icon design (15 styles) |
| `social` | `/design social instagram-post` | Social media images |

### Other Skills — Quick Reference

| Skill | Usage | Notes |
|-------|-------|-------|
| `/cook [task] --fast` | `/cook fix typos --fast` | Skip research, go straight to code |
| `/plan cro [page]` | `/plan cro landing-page` | Marketing-specific CRO planning mode |
| `/hub --scan` | `/hub --scan` | Scan and index all marketing assets |
| `/dashboard` | `/dashboard` | Launch local marketing dashboard |
| `/init` | `/init "SaaS product"` | Bootstrap marketing project structure |
| `/kit-builder skill seo-tools` | `/kit-builder skill seo-tools` | Create new marketing skill |
| `/assets-organizing` | `/assets-organizing images/` | Organize output assets by topic/date |
| `/funnel [action] [type]` | `/funnel design saas-trial` | Funnel design & optimization |
| `/form-cro [url]` | `/form-cro /contact` | Optimize non-signup forms |
| `/onboarding-cro [url]` | `/onboarding-cro /welcome` | Optimize post-signup activation |
| `/marketing-psychology` | `/marketing-psychology scarcity` | Apply behavioral science to copy |
| `/gamification-marketing` | `/gamification-marketing loyalty` | Design gamified campaigns |
| `/referral-program-building` | `/referral-program-building saas` | Build viral referral loops |
| `/affiliate-marketing` | `/affiliate-marketing program` | Design affiliate programs |
| `/pricing-strategy` | `/pricing-strategy freemium` | Pricing tiers & packaging |
| `/free-tool-strategy` | `/free-tool-strategy calculator` | Build free tools for leads |
| `/launch-strategy` | `/launch-strategy beta` | Plan product launch |
| `/content-marketing` | `/content-marketing blog seo` | Content strategy & calendars |
| `/ab-test-setup` | `/ab-test-setup pricing-page` | Plan & implement A/B tests |
| `/analytics` | `/analytics campaign-roi` | KPI dashboards & attribution |

---

## Agents (31)

### Marketing-Specific Agents (20)

| Agent | Description |
|-------|-------------|
| `analytics-analyst` | Marketing analytics, KPI tracking, attribution analysis |
| `attraction-specialist` | SEO, content marketing, inbound lead generation |
| `campaign-debugger` | Debug campaign issues: deliverability, tracking, attribution |
| `campaign-manager` | End-to-end campaign orchestration & optimization |
| `community-manager` | Community engagement, user-generated content, advocacy |
| `content-creator` | Blog posts, articles, guides, thought leadership |
| `content-reviewer` | Content quality, brand voice compliance, fact-checking |
| `continuity-specialist` | Brand consistency across channels and campaigns |
| `copywriter` | Conversion copy, headlines, CTAs, email sequences |
| `email-wizard` | Email campaigns, automation flows, deliverability |
| `funnel-architect` | Funnel design, CRO, conversion optimization |
| `lead-qualifier` | Lead scoring, qualification criteria, nurture routing |
| `sale-enabler` | Sales collateral, battlecards, demo scripts |
| `scout-external` | External market research, trend analysis |
| `seo-specialist` | Technical SEO, keyword strategy, link building |
| `social-media-manager` | Multi-platform social content & scheduling |
| `upsell-maximizer` | Upsell/cross-sell strategies, expansion revenue |
| `database-admin` | Marketing database management, segmentation |
| `scout` | Fast internal codebase scouting |
| `researcher` | Deep marketing research across multiple sources |

### Shared Agents (11)

| Agent | Description |
|-------|-------------|
| `code-reviewer` | Code quality review with technical rigor |
| `debugger` | Systematic debugging, root cause analysis |
| `docs-manager` | Technical documentation management |
| `fullstack-developer` | Execute implementation phases from plans |
| `git-manager` | Stage, commit, push with conventional commits |
| `journal-writer` | Document technical difficulties & failures |
| `mcp-manager` | MCP server integration management |
| `planner` | Research and create implementation plans |
| `project-manager` | Project oversight & coordination |
| `tester` | Validate code through testing |
| `ui-ux-designer` | UI/UX design, wireframes, design systems |

---

## Beta Changes (v1.3.0-beta.8 vs v1.2.1 Stable)

### 🆕 New in Beta

| Skill | Type | Description |
|------|------|-------------|
| `ckm:write` | New Skill | Consolidated writing skill with 8 subcommands (audit, blog, cro, enhance, fast, good, publish, blog-youtube) |
| `ckm:analyze` | New Skill | Analytics and performance reports |
| `ckm:banner-design` | New Skill | Social/ads/web/print banners, 22+ styles |
| `ckm:dashboard` | New Skill | Marketing Dashboard launcher |
| `ckm:marketing-dashboard` | New Skill | Local-first marketing command center |
| `ckm:hub` | New Skill | Combined Content Hub + Dashboard |
| `ckm:storage` | New Skill | S3-compatible storage integration |
| `ckm:ckm-storage` | New Skill | S3 storage operations shortcut |
| `ckm:elevenlabs` | New Skill | ElevenLabs TTS, voice cloning, SFX |
| `ckm:init` | New Skill | Marketing project initialization |
| `ckm:persona` | New Skill | Customer persona management |
| `ckm:funnel` | New Skill | Funnel design and optimization |
| `ck:docs` (llms mode) | Enhanced | Added `llms` subcommand for llms.txt generation |
| `ck:plan` (cro mode) | Enhanced | Added `cro` subcommand for marketing CRO planning |

### 📝 Renamed in Beta

| Stable Name | Beta Name | Notes |
|-------------|-----------|-------|
| `campaign-management` | `campaign` | Shorter, with `ckm:` prefix |
| `brand-guidelines` | `brand` | Shorter, with subcommands |
| `competitor-alternatives` | `competitor` | Shorter, 5 subcommands |
| `email-marketing` | `email` | Shorter, 6 subcommands |
| `seo-optimization` | `seo` | Shorter, 5 subcommands |
| `social-media` | `social` | Shorter with platform routing |
| `slides-design` | `slides` | Shorter |
| `video-production` | `video` | Shorter, 3 subcommands |
| `youtube-handling` | `youtube` | Shorter, 3 subcommands |
| `test-orchestrator` | `test` | Aligned with Engineer Kit naming |
| `fixing` | `fix` | Shorter name |
| `Debugging` | `debugging` | Standardized naming (lowercase) |
| `Problem-Solving Techniques` | `problem-solving` | Standardized naming |
| `frontend-dev-guidelines` | `frontend-development` | Standardized naming |

### ✅ No Breaking Changes

Beta maintains full backward compatibility. No skills removed, no arguments changed.

---

## Architecture Notes

### Directory Structure (v1.3.0-beta.8)

```
.claude/
├── agents/             # 31 agent definitions (.md)
├── commands/mkt/       # 29 slash commands (.md + directories with subcommands)
├── skills/             # 78 stable / 96 beta skill directories (SKILL.md + references/ + scripts/)
├── hooks/              # Event hooks
├── workflows/          # Behavior rules & workflows
├── schemas/            # JSON schemas
├── scripts/            # Utility scripts
├── output-styles/      # Output formatting
├── metadata.json       # Version info
├── settings.json       # Configuration
└── CLAUDE.md           # Root instructions
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
name: ckm:<skill-name>          # ckm: for marketing, ck: for shared
description: "Short description"  # Auto-discovery hint
argument-hint: "[args]"           # Usage hint shown to user
---
```

### Key Differences from Engineer Kit

| Aspect | Engineer Kit | Marketing Kit |
|--------|-------------|---------------|
| Prefix | `ck:` only | `ck:` (shared) + `ckm:` (marketing) |
| Focus | Code, testing, deployment | Content, campaigns, analytics, SEO |
| Agents | 14 (dev-focused) | 31 (20 marketing + 11 shared) |
| Skills | 67 (beta) | 78 stable / 96 beta |
| Commands | — | 29 commands in `commands/mkt/` |
| Unique features | — | `/write`, `/seo`, `/campaign`, `/email`, `/social`, `/competitor`, `/brand`, `/video`, `/youtube`, `/elevenlabs`, `/design`, `/funnel`, CRO skills |

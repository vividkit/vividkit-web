# ClaudeKit Skills & Commands Catalog

Complete reference for ClaudeKit v2.9.0 skills and commands with complexity indicators.

**Source:** `https://github.com/claudekit/claudekit-engineer/tree/v2.9.0-beta.9`
**Version:** 2.9.0-beta.9 | **Updated:** 2026-02-01

---

## Complexity Legend

| Symbol | Level | Tokens | Description |
|--------|-------|--------|-------------|
| ⚡ | Minimal | <5K | Always safe |
| ⚡⚡ | Low | 5K-20K | Lightweight |
| ⚡⚡⚡ | Medium | 20K-50K | Standard load |
| ⚡⚡⚡⚡ | High | 50K-100K | Heavy load |

---

## Commands (27 Active)

### Bootstrap

| Command | Complexity | Description |
|---------|------------|-------------|
| `/bootstrap` | ⚡⚡⚡⚡⚡ | Bootstrap a new project step by step |
| `/bootstrap:auto` | ⚡⚡⚡⚡ | Bootstrap a new project automatically |
| `/bootstrap:auto:fast` | ⚡⚡⚡ | Quickly bootstrap a new project automatically |
| `/bootstrap:auto:parallel` | ⚡⚡⚡⚡⚡ | Bootstrap project with parallel execution |

### Planning

| Command | Complexity | Description |
|---------|------------|-------------|
| `/plan` | ⚡⚡⚡ | Intelligent plan creation with prompt enhancement |
| `/plan:fast` | ⚡⚡ | No research. Only analyze and create plan |
| `/plan:hard` | ⚡⚡⚡ | Research, analyze, and create implementation plan |
| `/plan:parallel` | ⚡⚡⚡ | Create detailed plan with parallel-executable phases |
| `/plan:two` | ⚡⚡⚡⚡ | Research & create plan with 2 approaches |
| `/plan:validate` | - | Validate plan with critical questions interview |
| `/plan:ci` | - | Analyze Github Actions logs and provide fix plan |
| `/plan:cro` | - | Create a CRO plan for the given content |
| `/plan:archive` | - | Write journal entries and archive plans |

### Documentation

| Command | Complexity | Description |
|---------|------------|-------------|
| `/docs:init` | ⚡⚡⚡⚡ | Analyze codebase and create initial documentation |
| `/docs:update` | ⚡⚡⚡ | Analyze codebase and update documentation |
| `/docs:summarize` | ⚡ | Summarize documentation content |

### Testing

| Command | Complexity | Description |
|---------|------------|-------------|
| `/test` | ⚡ | Run tests locally and analyze summary report |
| `/test:ui` | ⚡⚡ | Run UI tests on a website & generate detailed report |

### Review

| Command | Complexity | Description |
|---------|------------|-------------|
| `/review:codebase` | ⚡⚡⚡ | Scan & analyze the codebase |
| `/review:codebase:parallel` | ⚡⚡⚡ | Ultrathink edge cases, parallel verify with code-reviewers |

### Utilities

| Command | Complexity | Description |
|---------|------------|-------------|
| `/ask` | ⚡ | Answer technical and architectural questions |
| `/ck-help` | - | ClaudeKit usage guide - just type naturally |
| `/coding-level` | - | Set coding experience level for tailored explanations |
| `/journal` | ⚡ | Write some journal entries |
| `/kanban` | - | AI agent orchestration board |
| `/preview` | - | Path to markdown file, plan directory, or plans collection |
| `/use-mcp` | - | Utilize tools of Model Context Protocol (MCP) servers |
| `/watzup` | ⚡ | Review recent changes and wrap up the work |
| `/worktree` | - | Create isolated git worktree for parallel development |

---

## Agents (14 Active)

| Agent | Description |
|-------|-------------|
| `brainstormer` | Brainstorm solutions with trade-off analysis |
| `code-reviewer` | Review code quality, receive feedback |
| `code-simplifier` | Simplify code for clarity and maintainability |
| `debugger` | Debug issues, analyze logs, diagnose problems |
| `docs-manager` | Manage technical documentation |
| `fullstack-developer` | Execute implementation phases from plans |
| `git-manager` | Stage, commit, and push with conventional commits |
| `journal-writer` | Document technical difficulties and failures |
| `mcp-manager` | Manage MCP server integrations |
| `planner` | Research and create implementation plans |
| `project-manager` | Comprehensive project oversight and coordination |
| `researcher` | Conduct research on software development topics |
| `tester` | Validate code through testing |
| `ui-ux-designer` | UI/UX design work, wireframes, design systems |

---

## Skills (49 Active)

### ⚡⚡⚡⚡ High (50K-100K tokens)

| Skill | Tokens | Use Case |
|-------|--------|----------|
| `ai-artist` | 98K | Midjourney, DALL-E, Stable Diffusion prompts (v2.8: mandatory validation) |

### ⚡⚡⚡ Medium (20K-50K tokens)

| Skill | Tokens | Use Case |
|-------|--------|----------|
| `document-skills` | 37K | Documentation generation, PDRs |
| `threejs` | 37K | 3D web apps, WebGL/WebGPU, VR/XR |
| `databases` | 34K | MongoDB, PostgreSQL, SQL/NoSQL |
| `frontend-development` | 33K | React/TypeScript, TanStack, MUI v7 |
| `react-best-practices` | 33K | React/Next.js performance patterns |
| `backend-development` | 32K | Node.js, Python, Go APIs |
| `mcp-builder` | 29K | Build MCP servers (FastMCP) |
| `payment-integration` | 26K | SePay (VietQR), Polar (SaaS) |
| `mobile-development` | 25K | React Native, Flutter, Swift |
| `devops` | 22K | Cloudflare, Docker, GCP, CI/CD |
| `web-frameworks` | 22K | Next.js App Router, RSC, Turborepo |
| `frontend-design` | 22K | Polished UI from designs |
| `ai-multimodal` | 22K | Gemini vision, Imagen 4, Veo 3 |
| `chrome-devtools` | 22K | Puppeteer automation, screenshots |
| `agent-browser` | ~20K | AI-optimized browser automation |

### ⚡⚡ Low (5K-20K tokens)

| Skill | Tokens | Use Case |
|-------|--------|----------|
| `media-processing` | 19K | FFmpeg, ImageMagick, RMBG AI |
| `ui-styling` | 19K | shadcn/ui, Radix UI, Tailwind |
| `remotion` | 17K | Programmatic video creation |
| `web-testing` | 15K | E2E testing, Playwright |
| `better-auth` | 11K | TypeScript auth (OAuth, 2FA) |
| `copywriting` | 10K | Headlines, email copy, CTAs |
| `shopify` | 10K | Shopify apps, Polaris, Liquid |
| `context-engineering` | 8K | Token optimization, memory |
| `mermaidjs-v11` | 7K | Flowcharts, sequence, ER diagrams |
| `skill-creator` | 7K | Create/update Claude skills |
| `shader` | ~7K | GLSL fragment shaders |
| `problem-solving` | 6K | Systematic problem techniques |
| `fix` | 6K | Bug fixing with flags: --auto, --review, --quick, --parallel |
| `sequential-thinking` | 6K | Step-by-step analysis |
| `mcp-management` | 6K | MCP server discovery |
| `repomix` | 5K | Pack repos for LLM context |
| `debug` | 5K | Root cause analysis |

### ⚡ Minimal (<5K tokens)

| Skill | Tokens | Use Case |
|-------|--------|----------|
| `planning` | 5K | Implementation planning |
| `code-review` | 5K | Code quality review |
| `cook` | 4K | Feature implementation workflow (v2.9: native Claude Tasks) |
| `git` | 4K | Git operations, commits |
| `docs-seeker` | 4K | Search docs via llms.txt |
| `ui-ux-pro-max` | 3K | 50 styles, 21 palettes |
| `gkg` | 2K | GitLab Knowledge Graph |
| `scout` | 2K | Codebase file search |
| `markdown-novel-viewer` | 2K | Book-like markdown viewer |
| `google-adk-python` | 2K | Google ADK agents (v2.9: updated to v1.0.0+) |
| `research` | 2K | Technical research |
| `brainstorm` | 1K | Ideation, trade-offs |
| `plans-kanban` | 1K | Plans dashboard |
| `common` | 1K | Common utilities |
| `web-design-guidelines` | <1K | UI review guidelines |
| `template-skill` | <1K | Skill template |

---

## Version Changes Summary

### v2.9.0 (2026-01-31)
- **Feature:** `/cook` uses native Claude Tasks (`TaskCreate/TaskUpdate/TaskGet/TaskList`)
- **Feature:** `/fix --parallel` flag for explicit parallel mode
- **Feature:** `google-adk-python` skill update to v1.0.0+ with 7 reference files
- **Feature:** `find-skills` skill to discover/install skills from ecosystem
- **Feature:** `skill-creator` plugin marketplace support
- **Feature:** Stripe best practices & API upgrade references
- **Fix:** Gemini model IDs (`gemini-2.5-flash` default, `gemini-3-flash-preview`)
- **Fix:** `/fix` syntax change: `/fix:parallel` → `/fix --parallel`
- **Fix:** `plan:validate` enriched validation log template

### v2.8.1 (2026-01-27)
- **Fix:** Allow Python venv creation in hooks
- **Fix:** Skip paths after --exclude flags in path-extractor

### v2.8.0 (2026-01-27)
- **Feature:** ai-artist mandatory validation workflow
- **Fix:** Deprecate commands/fix.md in favor of global fix skill

### v2.7.0 (2026-01-26)
- **Feature:** `shader` skill - GLSL fragment shaders
- **Feature:** Improved git commit standards

### v2.6.0 (2026-01-26)
- **Feature:** `agent-browser` skill - AI-optimized browser automation
- **Feature:** Hooks config toggle for enabling/disabling
- **Feature:** Statusline configurable display modes
- **Feature:** Metadata deletions array for cleanup
- **Breaking:** Many commands archived → replaced by skills
- **Breaking:** 4 agents removed (copywriter, database-admin, scout, scout-external)

---

## Context Budget (v2.8)

**Subagent Context Window:** 200K tokens

| Strategy | Tokens | % Context | Verdict |
|----------|--------|-----------|---------|
| All active commands | ~20K | 10% | ✅ Optimal |
| 1 HIGH skill | 98K | 49% | ✅ Safe |
| 2 MEDIUM skills | ~60K | 30% | ✅ Safe |
| 3 MEDIUM skills | ~90K | 45% | ✅ Safe |
| 5 LOW skills | ~50K | 25% | ✅ Optimal |
| 10 MINIMAL skills | ~25K | 13% | ✅ Optimal |

---

## Directory Structure

```
.claude/
├── agents/             # 14 agent definitions
├── commands/           # 27 active slash commands
├── commands-archived/  # Deprecated commands (still usable)
├── hooks/              # 15+ hooks
├── output-styles/      # 8 output formats
├── rules/              # 6+ rules
├── schemas/            # JSON schemas
├── scripts/            # 19+ utility scripts
├── skills/             # 49 agent skills
├── metadata.json       # Version info & deletions
├── settings.json       # Configuration
└── statusline.*        # Status display scripts
```

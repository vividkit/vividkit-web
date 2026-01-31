# ClaudeKit Engineer v2.5.0 Changelog

> Comparison: v2.4.0 (stable) → v2.5.0 (stable)
> Source: https://github.com/claudekit/claudekit-engineer/compare/v2.4.0...v2.5.0
> Date: January 2026 | Commits: 79 | Files Changed: 300

## Overview

Major release with architectural shift from commands to skills, comprehensive web testing, improved worktree management, native Claude Code Tasks API integration, and chrome-devtools auth features. Many commands archived in favor of skill-based workflows.

---

## Breaking Changes

### Commands Removed (use built-in git skill)

| Command | Status | Replacement |
|---------|--------|-------------|
| `/git:cm` | Removed | Use `git` skill or `git add && git commit` |
| `/git:cp` | Removed | Use `git` skill or `git commit && git push` |
| `/git:merge` | Removed | Use `git` skill |
| `/git:pr` | Removed | Use `gh pr create` via `git` skill |
| `/integrate/polar` | Removed | Use `payment-integration` skill |
| `/integrate/sepay` | Removed | Use `payment-integration` skill |

### Commands Archived (still functional, use skills preferred)

These commands are moved to `commands-archived/` and will be deprecated:

**Implementation Commands:**
- `/code`, `/code:auto`, `/code:no-test`, `/code:parallel`
- `/cook`, `/cook:auto`, `/cook:auto:fast`, `/cook:auto:parallel`

**Fix Commands:**
- `/fix:ci`, `/fix:fast`, `/fix:hard`, `/fix:logs`
- `/fix:parallel`, `/fix:test`, `/fix:types`, `/fix:ui`

**Design Commands:**
- `/design:3d`, `/design:describe`, `/design:fast`
- `/design:good`, `/design:screenshot`, `/design:video`

**Content Commands:**
- `/content:cro`, `/content:enhance`, `/content:fast`, `/content:good`

**Skill Commands:**
- `/skill:add`, `/skill:create`, `/skill:fix-logs`
- `/skill:optimize`, `/skill:optimize:auto`, `/skill:plan`, `/skill:update`

**Scout Commands:**
- `/scout`, `/scout:ext`

**Brainstorm:**
- `/brainstorm` → Now use `brainstorm` skill

---

## New Skills Added

### 1. web-testing
Comprehensive web testing automation skill with Playwright integration.

**Features:**
- E2E testing with Playwright
- Component testing
- Visual regression testing
- Accessibility testing (WCAG)
- Performance testing (Core Web Vitals)
- Security testing (XSS, CSRF, SQL injection)
- API contract testing
- CI/CD testing workflows

**References (21 files):**
- Core: `e2e-testing-playwright.md`, `component-testing.md`, `unit-integration-testing.md`
- Quality: `accessibility-testing.md`, `visual-regression.md`, `performance-core-web-vitals.md`
- Security: `security-testing-overview.md`, `security-checklists.md`, `vulnerability-payloads.md`
- API: `api-testing.md`, `contract-testing.md`, `database-testing.md`
- Advanced: `load-testing-k6.md`, `shadow-dom-testing.md`, `mobile-gesture-testing.md`
- Strategy: `testing-pyramid-strategy.md`, `test-data-management.md`, `test-flakiness-mitigation.md`
- CI/CD: `ci-cd-testing-workflows.md`, `pre-release-checklist.md`
- Other: `cross-browser-checklist.md`, `functional-testing-checklist.md`, `interactive-testing-patterns.md`, `playwright-component-testing.md`

**Scripts:**
- `init-playwright.js` - Project setup
- `analyze-test-results.js` - Result analysis

### 2. cook
Task orchestration skill for all-in-one feature implementation.

**Features:**
- Intent detection
- Subagent patterns
- Review cycle management
- Workflow step coordination

**References:**
- `intent-detection.md`
- `review-cycle.md`
- `subagent-patterns.md`
- `workflow-steps.md`

### 3. scout
Codebase file discovery skill with internal and external scouting.

**Features:**
- Internal scouting (local file search)
- External scouting (using external agentic tools)

**References:**
- `internal-scouting.md`
- `external-scouting.md`

### 4. gkg (GitLab Knowledge Graph)
Semantic code analysis skill.

**Features:**
- CLI commands
- HTTP API integration
- Language support
- MCP tools

**References:**
- `cli-commands.md`
- `http-api.md`
- `language-support.md`
- `mcp-tools.md`

### 5. remotion
React-based video creation skill.

**Features:**
- Video/audio composition
- Animations and transitions
- 3D graphics
- Text animations
- Captions and subtitles
- GIF support
- Lottie animations

**Rules/References (23 files):**
- Core: `compositions.md`, `sequencing.md`, `timing.md`, `assets.md`
- Media: `audio.md`, `videos.md`, `images.md`, `gifs.md`, `lottie.md`
- Text: `text-animations.md`, `display-captions.md`, `import-srt-captions.md`, `transcribe-captions.md`, `fonts.md`, `measuring-text.md`
- Visual: `animations.md`, `transitions.md`, `3d.md`, `charts.md`, `tailwind.md`
- Utils: `trimming.md`, `extract-frames.md`, `calculate-metadata.md`, `can-decode.md`, `get-audio-duration.md`, `get-video-dimensions.md`, `get-video-duration.md`, `measuring-dom-nodes.md`
- Assets: TypeScript example components (bar charts, typewriter, word-highlight)

---

## Enhanced Skills

### devops
Added comprehensive Kubernetes documentation.

**New References:**
- `kubernetes-basics.md`
- `kubernetes-helm.md`, `kubernetes-helm-advanced.md`
- `kubernetes-kubectl.md`
- `kubernetes-security.md`, `kubernetes-security-advanced.md`
- `kubernetes-troubleshooting.md`, `kubernetes-troubleshooting-advanced.md`
- `kubernetes-workflows.md`, `kubernetes-workflows-advanced.md`

### ai-artist
Enhanced with Nano Banana prompts and data assets.

**New Features:**
- Prompt generation scripts (`core.py`, `generate.py`, `search.py`)
- Data assets (styles, techniques, platforms, use-cases CSV files)
- Awesome prompts database (3500+ prompts)

### threejs
Major documentation update for Three.js development.

**New References:**
- `00-fundamentals.md` - Core concepts
- `11-materials.md` - Material system
- `17-shader.md` - Custom shaders
- `18-geometry.md` - Geometry creation

**New Features:**
- API reference data
- Examples database (550+ examples)
- Search capabilities

### chrome-devtools
Added authentication and cookie management capabilities.

**New Scripts:**
- `connect-chrome.js` - Persistent browser session management
- `import-cookies.js` - Cookie-based authentication injection

### skill-creator
Improved quality criteria documentation.

**New References:**
- `metadata-quality-criteria.md`
- `script-quality-criteria.md`
- `structure-organization-criteria.md`
- `token-efficiency-criteria.md`
- `validation-checklist.md`

### frontend-design
Added workflow references for different design scenarios.

**New References:**
- `workflow-3d.md`
- `workflow-describe.md`
- `workflow-immersive.md`
- `workflow-quick.md`
- `workflow-screenshot.md`
- `workflow-video.md`

---

## Command Enhancements

### /plan:fast, /plan:hard, /plan:validate
- Added mandatory `/clear` reminder after planning workflow
- Improved planning instructions

### /use-mcp
- Enhanced MCP manager agent integration
- Better CLI integration support

### /worktree
- **Major Overhaul:**
  - Consistent location via superproject detection
  - `--worktree-root` flag for Claude-driven decisions
  - Validation and safety limits
  - Comprehensive edge case tests

---

## New Features

### 1. Mandatory /clear After Planning
After completing `/plan` workflows, users are now reminded to run `/clear` before starting `/code` to free up context.

### 2. OpenCode Compatibility
- Commands and agents renamed to plural folder names (`.opencode/agents/`, `.opencode/commands/`, `.opencode/skills/`)
- Enables compatibility with OpenCode and other AI coding assistants

### 3. Configuration Schema
- Added `.ck.json` schema (`schemas/ck-config.schema.json`)
- 323+ lines of JSON schema for configuration validation

### 4. Native Claude Code Tasks API
- Integrate native Claude Code Tasks API for task management
- Replaces short-lived Beads integration (added in beta.7, reverted in beta.9)
- PR #362

### 5. Chrome DevTools Auth & Cookie Management
- New `connect-chrome.js` script for persistent browser sessions
- New `import-cookies.js` script for cookie-based authentication
- Enhanced browser automation capabilities for authenticated pages

### 6. Skill Renames
- `brainstorming` → `brainstorm`
- `fixing` → `fix`

### 7. Git Manager Agent Simplified
- Streamlined git-manager agent prompt for better performance

---

## Migration Guide

### From v2.4.0 to v2.5.0

1. **Git Commands:** Replace `/git:*` commands with `git` skill
   ```
   # Old
   /git:cm

   # New
   Just tell Claude: "commit my changes"
   (Claude will use git skill automatically)
   ```

2. **Brainstorm:** Use skill instead of command
   ```
   # Old
   /brainstorm "feature idea"

   # New
   "brainstorm ideas for [feature]"
   (Activates brainstorm skill)
   ```

3. **Testing:** Use new `web-testing` skill
   ```
   # New capability
   "set up Playwright tests for my app"
   "run accessibility tests"
   "check performance metrics"
   ```

4. **Video Creation:** Use new `remotion` skill
   ```
   "create a video with React/Remotion"
   "add captions to video"
   "create animated text"
   ```

---

## Files Changed Summary

| Type | Count | Lines Added | Lines Deleted |
|------|-------|-------------|---------------|
| Modified | 35 | - | - |
| Added | 121 | - | - |
| Removed | 9 | - | - |
| Renamed | 135 | - | - |
| **Total** | **300** | **+28,236** | **-1,426** |

---

## Upgrade Recommendations

1. **Update workflows** - Many commands now route through skills
2. **Check git workflows** - `/git:*` commands removed, use `git` skill
3. **Explore new skills** - `web-testing`, `remotion`, `gkg`, `cook`, `scout` offer new capabilities
4. **Run `/clear` after planning** - Mandatory for optimal context usage
5. **Skill renames** - Update references: `brainstorming`→`brainstorm`, `fixing`→`fix`
6. **Chrome DevTools** - New auth capabilities available for browser automation

---

## Explicit Flags & Arguments Analysis

### Overview

v2.5.0 introduces CLI-style flag/argument system for commands and skills, enabling explicit parameter passing and AI-driven decisions.

---

### Commands Directory Structure

```
.claude/commands/
├── ask.md
├── bootstrap/
│   ├── auto.md
│   └── auto/
├── bootstrap.md
├── ck-help.md
├── coding-level.md
├── debug.md
├── docs/
├── fix.md              # Intelligent routing
├── journal.md
├── kanban.md
├── plan/
│   ├── archive.md
│   ├── ci.md
│   ├── cro.md
│   ├── fast.md
│   ├── hard.md
│   ├── parallel.md
│   ├── two.md
│   └── validate.md
├── plan.md             # Routes to plan:fast or plan:hard
├── preview.md
├── review/
├── test/
│   └── ui.md
├── test.md
├── use-mcp.md
├── watzup.md
└── worktree.md
```

---

### Skills Directory Structure

```
.claude/skills/
├── ai-artist/
├── ai-multimodal/
├── backend-development/
├── better-auth/
├── brainstorm/
├── chrome-devtools/
├── code-review/
├── context-engineering/
├── cook/               # NEW - Task orchestration
├── copywriting/
├── databases/
├── debugging/
├── devops/
├── docs-seeker/
├── fix/                # NEW - Intelligent routing (renamed from fixing)
├── frontend-design/
├── frontend-development/
├── git/                # NEW - Unified git operations
├── gkg/                # NEW - GitLab Knowledge Graph
├── google-adk-python/
├── markdown-novel-viewer/
├── mcp-builder/
├── mcp-management/
├── media-processing/
├── mermaidjs-v11/
├── mobile-development/
├── payment-integration/
├── planning/
├── plans-kanban/
├── problem-solving/
├── react-best-practices/
├── remotion/           # NEW - Video creation
├── repomix/
├── research/
├── scout/              # NEW - Codebase scouting
├── sequential-thinking/
├── shopify/
├── skill-creator/
├── threejs/
├── ui-styling/
├── ui-ux-pro-max/
├── web-design-guidelines/
├── web-frameworks/
└── web-testing/        # NEW - Comprehensive testing
```

---

### Commands/Skills Supporting Explicit Flags

#### 1. `/cook` Skill - Smart Feature Implementation

| Flag | Description | Trigger Keywords |
|------|-------------|------------------|
| `--fast` | Skip research, scout→plan→code | "fast", "quick" |
| `--parallel` | Multi-agent execution | "parallel", 3+ features |
| `--no-test` | Skip testing step | "no test", "skip test" |
| `--auto` | Auto-approve all steps | "trust me", "auto" |

**Smart Intent Detection:**
| Input Pattern | Detected Mode |
|---------------|---------------|
| Path to `plan.md` | `code` mode |
| Contains "fast", "quick" | `fast` mode |
| Contains "trust me", "auto" | `auto` mode |
| Lists 3+ features | `parallel` mode |
| Contains "no test" | `no-test` mode |
| Default | `interactive` mode |

**Usage:**
```bash
/cook add user authentication --fast
/cook implement features A, B, C --parallel
/cook fix login bug --auto
```

#### 2. `/worktree` Command - Git Worktree Management

| Flag | Syntax | Description | Default |
|------|--------|-------------|---------|
| `--prefix` | `--prefix <type>` | Branch type prefix | `feat` |
| `--json` | `--json` | Output JSON for LLM parsing | `false` |
| `--dry-run` | `--dry-run` | Preview without executing | `false` |
| `--env` | `--env <files>` | Comma-separated .env files (legacy) | `[]` |
| `--worktree-root` | `--worktree-root <path>` | **NEW** Override detection | auto-detect |

**Prefix Values:** `feat` | `fix` | `refactor` | `docs` | `test` | `chore` | `perf`

**Priority Order:**
```
0. --worktree-root flag (Claude's decision) ← NEW
1. WORKTREE_ROOT env var
2. Superproject detection
3. Monorepo internal worktrees/
4. Sibling worktrees/
```

#### 3. `/preview` Command - Markdown Viewer

| Flag | Description |
|------|-------------|
| `--stop` | Stop running server |
| `--dir <path>` | Browse directory |
| `--file <path>` | View markdown file |
| `--host <ip>` | Server host (default: 0.0.0.0) |
| `--open` | Auto-open in browser |
| `--foreground` | Keep process alive |

**Usage:**
```bash
/preview plans/my-plan/plan.md     # View file
/preview plans/                    # Browse directory
/preview --stop                    # Stop server
```

#### 4. `/git` Skill - Git Operations

| Argument | Description |
|----------|-------------|
| `cm` | Stage files & create commits |
| `cp` | Stage, commit and push |
| `pr [to] [from]` | Create Pull Request |
| `merge [to] [from]` | Merge branches |

**Usage:**
```bash
/git cm                    # Stage & commit
/git cp                    # Stage, commit & push
/git pr main feature-x     # Create PR
/git merge main develop    # Merge branches
```

#### 5. `/scout` Skill - Codebase Scouting

| Argument | Description |
|----------|-------------|
| (none) | Internal scouting with Explore subagents |
| `ext` | External scouting with Gemini/OpenCode CLI |

**Usage:**
```bash
/scout find all payment files
/scout ext analyze authentication system
```

#### 6. `validate-docs.cjs` Script

| Flag | Syntax | Description |
|------|--------|-------------|
| `--src` | `--src dir1,dir2` | Source directories to scan |

---

### Intelligent Routing Commands

#### `/fix` - Issue Router

Routes to specialized fix commands based on keywords:

| Keywords | Routes to | Description |
|----------|-----------|-------------|
| type, typescript, tsc | `/fix:types` | Type errors |
| ui, ux, design, layout | `/fix:ui` | UI/UX issues |
| github actions, ci/cd | `/fix:ci` | CI/CD issues |
| test, spec, jest | `/fix:test` | Test failures |
| logs, error logs | `/fix:logs` | Log analysis |
| 2+ unrelated issues | `/fix:parallel` | Parallel fixes |
| complex, architecture | `/fix:hard` | Complex issues |
| Default (simple) | `/fix:fast` | Quick fixes |

#### `/plan` - Plan Router

Routes based on complexity:
- Simple tasks → `/plan:fast`
- Complex tasks → `/plan:hard`

#### `/fix` Skill - Mode Selection (renamed from `/fixing`)

| Mode | When to Use | Behavior |
|------|-------------|----------|
| **Autonomous** | Simple/moderate | Auto-approve if score >= 9.5 |
| **Human-in-the-loop** | Critical code | Pause for approval |
| **Quick** | Type errors, lint | Fast debug → fix → review |

---

### Design Philosophy: Hybrid AI Approach

The flag system enables **AI-driven decisions with explicit overrides**:

1. **Claude gathers context** - reads git info, analyzes project
2. **Claude makes decision** - applies rules to decide parameters
3. **Script executes** - receives explicit values via flags
4. **Fallback preserved** - auto-detect when no flag provided

**Benefits:**
- Deterministic execution (same inputs → same outputs)
- Testable behavior (flags can be mocked)
- Backward compatibility
- LLM-friendly JSON output (`--json`)

---

### Error Codes (Worktree Script)

| Code | Meaning |
|------|---------|
| `INVALID_WORKTREE_ROOT` | Invalid path for --worktree-root |
| `MISSING_ARGS` | Missing project/feature for monorepo |
| `MISSING_FEATURE` | No feature name (standalone) |
| `PROJECT_NOT_FOUND` | Project not in .gitmodules |
| `BRANCH_CHECKED_OUT` | Branch in use elsewhere |
| `WORKTREE_EXISTS` | Path already exists |

---

### Safety Features

- Path validation for `--worktree-root`
- Iteration limit (MAX_SUPERPROJECT_DEPTH=10)
- 40 comprehensive tests
- Security scan before git commits

---

## Known Issues

- None reported for this release

---

## Feedback

Report issues at: https://github.com/claudekit/claudekit-engineer/issues

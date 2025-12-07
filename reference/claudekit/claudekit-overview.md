# ClaudeKit Overview

**ClaudeKit** is a comprehensive framework for extending Claude Code with custom agents, commands, skills, workflows, and hooks. It transforms Claude into a powerful development automation platform with specialized capabilities for planning, coding, testing, debugging, and documentation.

## Table of Contents

- [Core Concepts](#core-concepts)
- [Directory Structure](#directory-structure)
- [System Components](#system-components)
- [Configuration](#configuration)
- [Getting Started](#getting-started)

## Core Concepts

ClaudeKit is built around five main pillars:

### 1. **Agents** - Specialized AI Personas
Agents are task-specific AI personas with specialized knowledge and capabilities. Each agent has:
- A dedicated markdown file defining its role and expertise
- Specific model preferences (e.g., `opus`, `sonnet`)
- Access to relevant skills and tools
- Clear responsibilities and workflows

### 2. **Commands** - User-Facing Slash Commands
Commands are user-invokable workflows triggered via slash commands (e.g., `/bootstrap`, `/fix`, `/plan`). They:
- Provide a simple interface for complex workflows
- Can have arguments and hints
- Orchestrate multiple agents and skills
- Support nested sub-commands for organization

### 3. **Skills** - Reusable Capabilities
Skills are modular, self-contained capabilities that teach Claude how to perform specific tasks:
- Defined in `SKILL.md` files with YAML frontmatter
- Can include scripts, dependencies, and resources
- Dynamically loaded based on task requirements
- Range from design systems to database management

### 4. **Workflows** - Structured Processes
Workflows define step-by-step procedures for common development tasks:
- Written in Markdown with YAML frontmatter
- Can be auto-executed with `// turbo` annotations
- Ensure consistency across the development lifecycle
- Cover planning, implementation, testing, and documentation

### 5. **Hooks** - Event-Driven Automation
Hooks trigger actions at specific points in the development process:
- `UserPromptSubmit` - Before processing user requests
- `PreToolUse` - Before specific tool usage
- `Stop` - When main session completes
- `SubagentStop` - When subagent tasks finish
- `PostToolUse` - After tool execution

## Directory Structure

```
.claude/
├── agents/               # Specialized AI personas
│   ├── planner.md
│   ├── code-reviewer.md
│   ├── debugger.md
│   ├── tester.md
│   ├── ui-ux-designer.md
│   └── ... (17 total)
│
├── commands/            # Slash commands
│   ├── bootstrap.md     # Project bootstrapping
│   ├── code.md         # Code generation
│   ├── fix.md          # Bug fixing
│   ├── plan.md         # Planning
│   ├── design/         # Design commands
│   ├── git/            # Git operations
│   └── ... (60+ total)
│
├── skills/             # Reusable capabilities
│   ├── README.md
│   ├── ui-ux-pro-max/  # Advanced UI/UX design
│   ├── ai-multimodal/  # Image/video generation
│   ├── chrome-devtools/
│   ├── databases/
│   ├── frontend-development/
│   └── ... (40+ skills)
│
├── workflows/          # Development workflows
│   ├── primary-workflow.md
│   ├── development-rules.md
│   ├── documentation-management.md
│   └── orchestration-protocol.md
│
├── hooks/              # Event triggers
│   ├── README.md
│   ├── dev-rules-reminder.cjs
│   ├── scout-block.cjs
│   ├── discord_notify.sh
│   └── telegram_notify.sh
│
├── scripts/            # Utility scripts
│   ├── ck-help.py      # Command catalog
│   ├── scan_commands.py
│   ├── scan_skills.py
│   └── resolve_env.py
│
├── settings.json       # Main configuration
├── .env.example        # Environment variables
├── metadata.json       # Cached metadata
└── statusline.sh       # Custom status display
```

## System Components

### Agents (17 Total)

| Agent | Model | Purpose |
|-------|-------|---------|
| **planner** | opus | Research, analyze, create implementation plans |
| **code-reviewer** | sonnet | Review code quality, standards compliance |
| **debugger** | sonnet | Analyze errors, identify root causes |
| **tester** | sonnet | Run tests, analyze results |
| **ui-ux-designer** | opus | Design interfaces, create wireframes |
| **fullstack-developer** | sonnet | Full-stack implementation |
| **git-manager** | sonnet | Git operations, commit management |
| **docs-manager** | sonnet | Documentation creation and updates |
| **project-manager** | sonnet | Project roadmaps, progress tracking |
| **researcher** | sonnet | Technical research, best practices |
| **scout** | sonnet | Codebase exploration, analysis |
| **scout-external** | sonnet | External resource investigation |
| **brainstormer** | opus | Idea generation, creative solutions |
| **copywriter** | sonnet | Content writing, messaging |
| **database-admin** | sonnet | Database design, migrations |
| **journal-writer** | sonnet | Development journal entries |
| **mcp-manager** | sonnet | MCP server configuration |

### Command Categories

**Bootstrap & Setup** (5 commands)
- `/bootstrap` - Full project setup with planning
- `/bootstrap/auto` - Automated bootstrap
- `/bootstrap/auto/fast` - Fast automated setup
- `/bootstrap/auto/parallel` - Parallel execution
- `/ck-help` - Command reference

**Development** (10+ commands)
- `/code` - Code implementation
- `/code/parallel` - Parallel coding
- `/code/no-test` - Code without tests
- `/fix` - Bug fixing
- `/fix/fast`, `/fix/hard`, `/fix/ci`, `/fix/test`, `/fix/ui`, `/fix/types`
- `/debug` - Debugging assistance

**Planning** (7 commands)
- `/plan` - Create implementation plans
- `/plan/fast`, `/plan/hard` - Different detail levels
- `/plan/parallel` - Parallel planning
- `/plan/ci` - CI/CD planning
- `/plan/cro` - Conversion rate optimization
- `/plan/two` - Two-phase planning

**Design** (6 commands)
- `/design/3d` - 3D design
- `/design/screenshot` - Screenshot to design
- `/design/describe` - Design description
- `/design/video` - Video design
- `/design/fast`, `/design/good` - Speed vs quality

**Git Operations** (5 commands)
- `/git/cm` - Commit
- `/git/cp` - Commit and push
- `/git/merge` - Merge branches
- `/git/pr` - Pull request

**Documentation** (3 commands)
- `/docs/init` - Initialize docs
- `/docs/update` - Update documentation
- `/docs/summarize` - Create summaries

**Content** (4 commands)
- `/content/fast`, `/content/good` - Content generation
- `/content/enhance` - Improve content
- `/content/cro` - Conversion optimization

**Testing & Quality** (Multiple)
- `/test` - Run tests
- `/review` - Code review
- `/scout` - Explore codebase

### Key Skills

**Design & Frontend**
- `ui-ux-pro-max` - 50 UI styles, 21 color palettes, 50 font pairings
- `aesthetic` - Design aesthetics and principles
- `frontend-design`, `frontend-design-pro` - Advanced frontend design
- `ui-styling` - CSS and styling systems
- `threejs` - 3D graphics with Three.js

**AI & Multimodal**
- `ai-multimodal` - Image generation, video analysis, document extraction
- `repomix` - Repository context generation
- `skill-creator` - Create custom skills

**Development**
- `frontend-development` - React, Vue, Svelte, Next.js
- `backend-development` - Server-side development
- `web-frameworks` - Framework-specific patterns
- `mobile-development` - Mobile app development

**DevOps & Infrastructure**
- `devops` - CI/CD, deployment
- `chrome-devtools` - Browser automation
- `databases` - Database design and queries

**Integration**
- `mcp-builder`, `mcp-management` - MCP server development
- `better-auth` - Authentication systems
- `payment-integration` - Payment systems
- `shopify` - E-commerce integration

**Tools & Utilities**
- `debugging` - Debugging strategies
- `code-review` - Review best practices
- `sequential-thinking` - Problem-solving
- `planning` - Project planning

## Configuration

### settings.json

The main configuration file controls:
- **Status Line**: Custom status display with git, model, usage info
- **Hooks**: Event-driven automation
- **Co-Authored By**: Git commit attribution

```json
{
  "includeCoAuthoredBy": false,
  "statusLine": {
    "type": "command",
    "command": "node .claude/statusline.cjs",
    "padding": 0
  },
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [{
          "type": "command",
          "command": "node .claude/hooks/dev-rules-reminder.cjs"
        }]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Bash|Glob|Grep|Read|Edit|Write",
        "hooks": [{
          "type": "command",
          "command": "node .claude/hooks/scout-block.cjs"
        }]
      }
    ]
  }
}
```

### Environment Variables

Environment variables follow a priority hierarchy:

1. **process.env** (highest priority)
2. `.claude/skills/<skill>/.env` - Skill-specific
3. `.claude/skills/.env` - Shared across skills
4. `.claude/.env` - Global defaults (lowest priority)

**Key Variables:**
```bash
# AI Services
GEMINI_API_KEY=              # Google Gemini API
OPENAI_API_KEY=              # OpenAI API
ANTHROPIC_API_KEY=           # Claude API

# Notifications
DISCORD_WEBHOOK_URL=         # Discord notifications
TELEGRAM_BOT_TOKEN=          # Telegram bot
TELEGRAM_CHAT_ID=            # Telegram chat

# Configuration
NODE_ENV=development
DEBUG=false
LOG_LEVEL=info
```

### Status Line Features

The custom status line displays:
- 📁 Current directory
- 🌿 Git branch
- 🤖 Model name
- 🏷️ Model version
- ⌛ Session time remaining
- 💵 API cost (USD)
- 📝 Lines changed (+/-)

## Getting Started

### 1. Installation

Install ClaudeKit CLI:
```bash
npm install -g claudekit-cli
```

Initialize in your project:
```bash
ck init
```

This creates the `.claude/` directory structure.

### 2. Configure Environment

Copy and edit the environment file:
```bash
cp .claude/.env.example .claude/.env
```

Add your API keys and configuration.

### 3. Install Skill Dependencies

For skills requiring external tools:
```bash
# Linux/macOS
cd .claude/skills
./install.sh

# Windows (PowerShell as Admin)
cd .claude\skills
.\install.ps1
```

### 4. Use Commands

Start using slash commands:
```
/bootstrap "Create a SaaS dashboard with authentication"
/plan "Add payment integration"
/design/screenshot "Analyze this design mockup"
/code "Implement the login flow"
/test "Run all tests"
```

### 5. Create Custom Skills

Use the skill creator:
```
/skill "Create a custom skill for API testing"
```

Or manually:
```bash
mkdir -p .claude/skills/my-skill
```

Create `SKILL.md`:
```markdown
---
name: my-skill
description: What this skill does and when to use it
---

# My Skill

Instructions for Claude to follow when this skill is active.

## Examples
- Example usage 1
- Example usage 2

## Guidelines
- Guideline 1
- Guideline 2
```

## Core Workflows

### Primary Workflow

The main development workflow follows these phases:

1. **Planning** - Delegate to `planner` agent
2. **Research** - Multiple `researcher` agents in parallel
3. **Implementation** - Follow plan with appropriate agents
4. **Testing** - Use `tester` agent to validate
5. **Code Review** - `code-reviewer` checks quality
6. **Documentation** - `docs-manager` updates docs

### Development Principles

ClaudeKit operates on three core principles:

- **YAGNI** (You Aren't Gonna Need It) - Build only what's necessary
- **KISS** (Keep It Simple, Stupid) - Simplicity over complexity
- **DRY** (Don't Repeat Yourself) - Reuse and modularize

### Token Efficiency

- Sacrifice grammar for concision in reports
- Keep research reports ≤150 lines
- Use targeted searches instead of full file reads
- List unresolved questions at end of reports

## Hooks System

### Available Hooks

**UserPromptSubmit** - Runs before processing user input
```json
{
  "hooks": [{
    "type": "command",
    "command": "node .claude/hooks/dev-rules-reminder.cjs"
  }]
}
```

**PreToolUse** - Runs before specific tools
```json
{
  "matcher": "Bash|Glob|Grep|Read|Edit|Write",
  "hooks": [{
    "type": "command",
    "command": "node .claude/hooks/scout-block.cjs"
  }]
}
```

**Stop / SubagentStop** - Runs when sessions complete
```json
{
  "hooks": [{
    "type": "command",
    "command": "${CLAUDE_PROJECT_DIR}/.claude/hooks/discord_notify.sh"
  }]
}
```

### Hook Features

**Scout Block** - Prevents accessing heavy directories
- Blocks: `node_modules`, `.git`, `__pycache__`, `dist`, `build`
- Cross-platform (Windows PowerShell, Linux/macOS Bash)
- Configurable via `.claude/.ckignore`

**Dev Rules Reminder** - Injects development rules
- Reminds Claude of project standards
- Non-blocking execution
- Helps maintain consistency

**Notification Hooks**
- **Discord**: Rich embeds with session details
- **Telegram**: Markdown-formatted updates
- Track tool usage, files modified, session time

## Advanced Features

### Parallel Execution

Many commands support parallel execution:
- `/bootstrap/auto/parallel` - Parallel project setup
- `/code/parallel` - Parallel code generation
- `/plan/parallel` - Parallel planning
- `/fix/parallel` - Parallel bug fixes

### Turbo Mode

Workflows can auto-execute with annotations:
- `// turbo` - Auto-run single step
- `// turbo-all` - Auto-run all steps

### Active Plan Management

Planner creates structured plan directories:
```
plans/
└── YYYYMMDD-HHmm-plan-name/
    ├── plan.md
    ├── phase-01-phase-name.md
    ├── phase-02-phase-name.md
    └── ...
```

Each phase includes:
- Context links
- Overview with date/priority/status
- Key insights
- Requirements
- Architecture
- Implementation steps
- TODO list
- Success criteria
- Risk assessment
- Security considerations

### Skill System

**Skill Structure:**
```
skill-name/
├── SKILL.md              # Main skill definition
├── scripts/              # Helper scripts
├── .env.example          # Environment template
└── README.md             # Documentation
```

**Skill Frontmatter:**
```yaml
---
name: skill-name
description: Complete description for skill activation
---
```

**Skill Discovery:**
- Commands scan `.claude/skills/*/SKILL.md`
- Auto-generated catalogs for fast lookup
- Dynamic loading based on keywords

## Best Practices

### For Users

1. **Start with Planning** - Use `/plan` before implementation
2. **Leverage Agents** - Let specialized agents handle their domains
3. **Review Plans** - Always review and approve plans before execution
4. **Test Thoroughly** - Don't skip testing to "just pass the build"
5. **Document Changes** - Keep docs updated with `/docs/update`

### For Developers

1. **Modular Code** - Keep files under 200 LOC
2. **No Fake Data** - Tests should use real scenarios
3. **Follow Standards** - Respect `./docs/code-standards.md`
4. **Token Efficiency** - Be concise in reports
5. **Incremental Commits** - Commit working changes regularly

### For Designers

1. **Use ui-ux-pro-max** - Leverage built-in design intelligence
2. **Search Multiple Domains** - Product, style, typography, color
3. **No Emoji Icons** - Use SVG icons (Heroicons, Lucide)
4. **Test Both Modes** - Verify light and dark mode
5. **Accessibility First** - 4.5:1 contrast minimum

## Troubleshooting

### Common Issues

**"Node.js not found"**
- Install Node.js ≥18.0.0 from [nodejs.org](https://nodejs.org)
- Verify: `node --version`

**"Environment variable not set"**
- Check `.env` file exists
- Verify file format (no quotes needed)
- Reload shell: `source ~/.bashrc`

**"Hook not triggering"**
- Verify `settings.json` configuration
- Check hook script has execute permissions
- Test manually: `echo '{}' | node .claude/hooks/scout-block.cjs`

**"Skill not loading"**
- Ensure `SKILL.md` has valid YAML frontmatter
- Check skill description is comprehensive
- Regenerate catalogs: `python3 .claude/scripts/scan_skills.py`

**"Command not found"**
- List commands: `/ck-help`
- Check `.claude/commands/` directory
- Verify command markdown has proper frontmatter

### Getting Help

- Check individual `README.md` files in each directory
- Review documentation in `./docs/`
- Examine example skills in `.claude/skills/`
- Test commands with `--help` or verbose flags

## Additional Resources

- [Skills Documentation](https://support.claude.com/en/articles/12512176-what-are-skills)
- [Creating Custom Skills](https://support.claude.com/en/articles/12512198-creating-custom-skills)
- [Claude Code Documentation](https://docs.claude.com/claude-code)
- [Agent Skills Engineering Post](https://anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)

---

**Last Updated:** 2025-12-03
**Version:** Based on ClaudeKit analysis from `.claude` directory

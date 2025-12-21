---
description: Comprehensive Claude Code CLI & ClaudeKit workflow guide for vibe coders
---

# Claude Code CLI & ClaudeKit Workflow Guide 🚀

> **For New Vibe Coders**: A complete decision tree to help you choose the right command for every coding scenario.

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Command Decision Tree](#command-decision-tree)
3. [Use Case Workflows](#use-case-workflows)
4. [Slash Commands Reference](#slash-commands-reference)
5. [ClaudeKit Enhanced Commands](#claudekit-enhanced-commands)
6. [Pro Tips](#pro-tips)

---

## 🏁 Quick Start

### Installation

```bash
# Native Install (Recommended for macOS/Linux)
curl -fsSL https://claude.ai/install.sh | bash

# Homebrew (macOS)
brew install --cask claude-code

# NPM (requires Node.js 18+)
npm install -g @anthropic-ai/claude-code

# Windows
irm https://claude.ai/install.ps1 | iex
```

### First Run

```bash
cd your-project
claude
```

### Check & Update

```bash
# Check version
claude --version

# Update to latest
claude update

# Check installation health
claude doctor
```

---

## 🌳 Command Decision Tree

Use this flowchart to decide which command to use:

```
START HERE: What do you want to do?
│
├─► "I'm starting a NEW project"
│   └─► Use: claude → then /init
│
├─► "I want to UNDERSTAND existing code"
│   ├─► Quick overview → claude "explain this project"
│   ├─► Find specific code → claude "find files that handle X"
│   └─► Deep dive (interactive) → claude → ask questions
│
├─► "I want to BUILD a feature"
│   ├─► Interactive mode → claude → describe what you want
│   └─► Quick one-off → claude "add user authentication"
│
├─► "I need to FIX a bug"
│   ├─► With error message → claude "I'm seeing this error: [error]"
│   └─► Investigate issue → claude → paste error → ask for fix
│
├─► "I want to REFACTOR code"
│   └─► claude → "refactor X to use Y"
│
├─► "I want to CONTINUE previous work"
│   ├─► Last session → claude -c
│   └─► Specific session → claude -r "session-name"
│
├─► "I want to RUN a script/automation"
│   └─► claude -p "query" (non-interactive, exits after)
│
└─► "I want to PIPE data through Claude"
    └─► cat file.txt | claude -p "analyze this"
```

---

## 📚 Use Case Workflows

### Use Case 1: 🆕 Starting a New Project

**When**: You're beginning a fresh project and want Claude to understand your setup.

```bash
# Step 1: Navigate to project
cd my-project

# Step 2: Start Claude
claude

# Step 3: Initialize project context
/init

# Step 4: Start building
> create a basic Express server with TypeScript
```

**Commands used:**
- `claude` - Start interactive session
- `/init` - Create CLAUDE.md memory file

---

### Use Case 2: 🔍 Understanding an Existing Codebase

**When**: You've joined a project or working with unfamiliar code.

```bash
# Quick overview (non-interactive)
claude "give me an overview of this codebase"

# OR interactive exploration
claude
> explain the main architecture patterns used here
> what are the key data models?
> how is authentication handled?
> find the files that handle user authentication
> trace the login process from front-end to database
```

**Commands used:**
- `claude "query"` - Start with initial query
- Natural language questions for exploration

---

### Use Case 3: 🐛 Debugging & Fixing Bugs

**When**: You encounter errors or bugs that need fixing.

```bash
# Option A: Paste error directly
claude "I'm seeing this error when I run npm test: [paste error]"

# Option B: Interactive debugging
claude
> I'm seeing an error when I run npm test
> [let Claude analyze and suggest fixes]
> suggest a few ways to fix this
> update the file with the null check you suggested

# Option C: Pipe logs through Claude
cat error.log | claude -p "explain these errors and suggest fixes"
```

**Commands used:**
- `claude "query"` - Quick bug description
- Piping `|` for log analysis
- `-p` flag for non-interactive processing

---

### Use Case 4: ✨ Building New Features

**When**: You want to add functionality to your project.

```bash
# Interactive feature building
claude
> add user authentication with JWT tokens
> [Claude writes the code]
> now add password reset functionality
> run tests to verify everything works

# Quick feature (non-interactive with exit)
claude -p "add a dark mode toggle to the settings page"
```

**Commands used:**
- `claude` - Interactive mode for complex features
- `claude -p` - Non-interactive for simple changes

---

### Use Case 5: 🔄 Resuming Previous Work

**When**: You want to continue where you left off.

```bash
# Resume the most recent session
claude -c

# Resume with additional context
claude -c -p "Check for type errors"

# Resume a specific named session
claude -r "auth-refactor"

# Resume and add a new task
claude -r "auth-refactor" "Finish this PR"

# List and pick from recent sessions
claude
/resume
```

**Commands used:**
- `-c` (--continue) - Resume last session
- `-r` (--resume) - Resume specific session
- `/resume` - Interactive session picker

---

### Use Case 6: 📝 Code Review & PR Creation

**When**: You want to review code or create pull requests.

```bash
# Interactive review
claude
/review  # Review current changes
> summarize the changes I've made to the authentication module
> create a pr
> enhance the PR description with more context

# Security-focused review
claude
/security-review
```

**Commands used:**
- `/review` - Review code changes
- `/security-review` - Security-focused audit
- Natural language for PR creation

---

### Use Case 7: 🧪 Working with Tests

**When**: You need to write, run, or fix tests.

```bash
claude
> find functions in NotificationsService.swift that are not covered by tests
> add tests for the notification service
> add test cases for edge conditions
> run the new tests and fix any failures
```

---

### Use Case 8: 📖 Documentation

**When**: You need to document your code.

```bash
claude
> find functions without proper JSDoc comments in the auth module
> add JSDoc comments to the undocumented functions
> check if the documentation follows our project standards
```

---

### Use Case 9: 🔧 Automation & CI/CD Integration

**When**: You want to use Claude in scripts or pipelines.

```bash
# One-off commands in scripts
claude -p "explain this function" < code.js

# Pipe input and get structured output
cat logs.txt | claude -p "summarize errors" --output-format json

# CI/CD integration example
claude -p "If there are new text strings, translate them into French and raise a PR"

# Monitor logs in real-time
tail -f app.log | claude -p "Slack me if you see any anomalies"
```

**Commands used:**
- `-p` (--print) - Non-interactive SDK mode
- `--output-format json` - Structured output
- Piping for data processing

---

### Use Case 10: 🔀 Parallel Development with Git Worktrees

**When**: You want multiple Claude sessions working on different tasks.

```bash
# Create worktrees for different features
git worktree add ../project-feature-a -b feature-a
git worktree add ../project-bugfix bugfix-123

# Run Claude in each (separate terminals)
cd ../project-feature-a && claude
cd ../project-bugfix && claude

# Clean up when done
git worktree list
git worktree remove ../project-feature-a
```

---

## 📌 Slash Commands Reference

### Session Management

| Command | Description | When to Use |
|---------|-------------|-------------|
| `/help` | List all commands | First time or when stuck |
| `/init` | Create CLAUDE.md | New project setup |
| `/clear` | Reset session context | Start fresh conversation |
| `/compact` | Summarize to save tokens | Long conversations |
| `/resume` | Pick from recent sessions | Continue previous work |
| `/exit` | Exit Claude Code | Done for now |

### Project & Context

| Command | Description | When to Use |
|---------|-------------|-------------|
| `/add-dir` | Add directories to context | Multi-folder projects |
| `/context` | View current context | Debugging context issues |
| `/memory` | View CLAUDE.md contents | Check project memory |
| `/config` | View/edit settings | Customize behavior |

### Code & Review

| Command | Description | When to Use |
|---------|-------------|-------------|
| `/review` | Review code changes | Before committing |
| `/security-review` | Security audit | Sensitive code changes |
| `/todos` | List TODO comments | Track pending work |

### Agents & Tools

| Command | Description | When to Use |
|---------|-------------|-------------|
| `/agents` | View available subagents | Specialized tasks |
| `/bashes` | View bash history | Debug commands |
| `/hooks` | View automation hooks | Custom workflows |
| `/mcp` | Manage MCP connections | External integrations |

### Account & System

| Command | Description | When to Use |
|---------|-------------|-------------|
| `/login` | Log in to account | Switch accounts |
| `/logout` | Log out | Security/switching |
| `/usage` | View token usage | Cost management |
| `/cost` | View cost details | Budget tracking |
| `/bug` | Report bugs | Found an issue |
| `/doctor` | Check installation | Troubleshooting |
| `/release-notes` | View latest changes | After updates |

### UI & Output

| Command | Description | When to Use |
|---------|-------------|-------------|
| `/model` | Select AI model | Performance needs |
| `/output-style [style]` | Change output format | Preference tuning |
| `/vim` | Toggle vim mode | Vi keybindings |
| `/statusline` | Toggle status line | UI preference |

---

## 🛠 ClaudeKit Enhanced Commands

> **Note**: ClaudeKit extends Claude Code with specialized AI agents and workflows.

### Installation

```bash
npm install -g claudekit-cli
```

### Development Workflows

| Command | Description | When to Use |
|---------|-------------|-------------|
| `ck new` | Create new project | Starting from scratch |
| `/bootstrap` | Spec-driven project init | Formal project setup |
| `/cook "feature"` | Develop features | Building functionality |
| `/plan [task]` | Create implementation plan | Complex tasks |
| `/brainstorm` | Explore feasibility | New ideas |

### Debugging & Quality

| Command | Description | When to Use |
|---------|-------------|-------------|
| `/fix` | Fix general issues | Quick repairs |
| `/debug` | Investigate problems | Deep debugging |
| `/test` | Run test suite | Validation |

### Git Operations

| Command | Description | When to Use |
|---------|-------------|-------------|
| `/git:cm` | Smart commit | Committing changes |
| `/git:status` | Git analysis | Check state |
| `/git:checkout [branch]` | Branch management | Switching work |

---

## 💡 Pro Tips

### 1. Create Custom Commands

```bash
# Personal command (available everywhere)
mkdir -p ~/.claude/commands
echo "Review this code for security vulnerabilities:" > ~/.claude/commands/sec-check.md

# Project command (team-shared)
mkdir -p .claude/commands
echo "Run all linters and fix issues:" > .claude/commands/lint-fix.md

# Usage
/sec-check
/lint-fix
```

### 2. Set Up CLAUDE.md for Best Results

Create a `CLAUDE.md` in your project root with:

```markdown
# Project Context

## Tech Stack
- Frontend: React + TypeScript
- Backend: Node.js + Express
- Database: PostgreSQL

## Coding Standards
- Use functional components
- Always use TypeScript strict mode
- Write tests for all new features

## Common Commands
- `npm run dev` - Start development server
- `npm test` - Run tests
- `npm run build` - Production build

## Project Structure
- `/src` - Source code
- `/tests` - Test files
- `/docs` - Documentation
```

### 3. Use Thinking Mode for Complex Tasks

```bash
# Trigger deep thinking with keywords
claude
> ultrathink about the architecture for a real-time notification system
```

### 4. Integrate with Your Tools via MCP

```bash
# Configure MCP servers
claude mcp

# Use external tools (Google Drive, Figma, Jira, etc.)
> read the design from Figma and implement it
```

### 5. Output Formats for Automation

```bash
# JSON output for scripting
claude -p "list all API endpoints" --output-format json

# Stream JSON for real-time processing
claude -p "analyze logs" --output-format stream-json
```

### 6. Custom System Prompts

```bash
# Override system prompt completely
claude --system-prompt "You are a Python expert who only writes type-annotated code"

# Add to existing prompt (safer)
claude --append-system-prompt "Always use TypeScript and include JSDoc comments"

# Load from file
claude -p --system-prompt-file ./prompts/security-review.txt "Review this PR"
```

### 7. Permission Modes

```bash
# Plan mode (read-only analysis)
claude --permission-mode plan

# Safe for code exploration without changes
```

---

## 🎯 Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════╗
║                    CLAUDE CODE CLI CHEATSHEET                 ║
╠═══════════════════════════════════════════════════════════════╣
║  BASIC                                                        ║
║  claude               → Start interactive session             ║
║  claude "query"       → Start with initial prompt             ║
║  claude -p "query"    → Non-interactive (for scripts)         ║
║                                                               ║
║  SESSIONS                                                     ║
║  claude -c            → Continue last session                 ║
║  claude -r "name"     → Resume specific session               ║
║  claude update        → Update to latest version              ║
║                                                               ║
║  PIPING                                                       ║
║  cat file | claude -p → Pipe file content                     ║
║  --output-format json → Get JSON output                       ║
║                                                               ║
║  COMMON SLASH COMMANDS                                        ║
║  /init    → Create CLAUDE.md                                  ║
║  /clear   → Reset context                                     ║
║  /compact → Summarize conversation                            ║
║  /review  → Review code changes                               ║
║  /help    → Show all commands                                 ║
║  /resume  → Pick from sessions                                ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## 📚 Official Resources

- [Claude Code Documentation](https://code.claude.com/docs/en/overview)
- [GitHub Repository](https://github.com/anthropics/claude-code)
- [Discord Community](https://anthropic.com/discord)
- [ClaudeKit](https://claudekit.cc)

---

*Last updated: December 2024*
*Claude Code Version: 2.0.74+*

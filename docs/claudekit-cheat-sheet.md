# ClaudeKit Commands Cheat Sheet

> Complete guide for everyone - developers and non-developers alike.
> Last updated: 2026-01-03 | Total: 74 commands (excluding `ct:` prefix)

---

## Quick Reference: Common Workflows

```
New Feature:   /plan → /code → /test → /git:pr
Bug Fix:       /debug → /fix → /test → /git:cm
Quick Impl:    /cook (does everything in one go)
Code Review:   /scout → /review → /watzup
```

---

## Token Consumption Guide

| ⚡ Level | Cost | Description |
|----------|------|-------------|
| ⚡ | Low | Quick tasks, minimal processing |
| ⚡⚡ | Medium | Standard operations, some analysis |
| ⚡⚡⚡ | High | Deep research, multi-agent coordination |
| ⚡⚡⚡⚡ | Very High | Complex planning, parallel execution |
| ⚡⚡⚡⚡⚡ | Ultra High | Full project setup, extensive research |

---

## 1. Getting Started

**For when you're starting something new.**

| Command | ⚡ Tokens | What It Does | When to Use |
|---------|----------|--------------|-------------|
| `/bootstrap` | ⚡⚡⚡⚡⚡ | Start a new project step-by-step with guidance | You want to create a project and prefer interactive guidance |
| `/bootstrap:auto` | ⚡⚡⚡⚡ | Start a new project automatically | You trust Claude to set up a standard project for you |
| `/bootstrap:auto:fast` | ⚡⚡⚡ | Quick setup, no research | You need a basic project structure fast |
| `/bootstrap:auto:parallel` | ⚡⚡⚡⚡⚡ | Setup with parallel execution (faster, more tokens) | Large project, you want speed and have token quota |

---

## 2. Planning & Research

**Think before you code. Figure out the best approach.**

| Command | ⚡ Tokens | What It Does | When to Use |
|---------|----------|--------------|-------------|
| `/plan` | ⚡⚡⚡ | Create an implementation plan with smart enhancement | Complex feature, need to figure out how to build it |
| `/plan:fast` | ⚡⚡ | Quick plan, no research (analyze existing code only) | Simple feature, you know the codebase well |
| `/plan:hard` | ⚡⚡⚡ | Deep research + detailed plan | Complex feature, new tech, or unfamiliar codebase |
| `/plan:two` | ⚡⚡⚡⚡ | Get 2 different approaches with trade-offs | You want options before deciding |
| `/plan:parallel` | ⚡⚡⚡ | Plan with parallel-executable phases | Large feature that can be split into independent parts |
| `/plan:validate` | | Interview you to confirm plan decisions | Before coding, make sure assumptions are correct |
| `/plan:ci` | | Fix GitHub Actions failures | CI/CD is broken, need a fix plan |
| `/plan:cro` | | Create conversion rate optimization plan | Want to improve content for better conversions |
| `/plan:archive` | | Write journal + archive old plans | Project done, want to document learnings |
| `/scout` | ⚡⚡ | Find files/code in your codebase | "Where is X located?" or "Show me all Y files" |
| `/ask` | ⚡ | Get technical/architectural answers | "How does Z work?" or "Best practice for W?" |
| `/brainstorm` | ⚡⚡ | Explore ideas for a feature | Early stage, want creative options |

---

## 3. Implementation

**Actually writing the code based on a plan.**

| Command | ⚡ Tokens | What It Does | When to Use |
|---------|----------|--------------|-------------|
| `/code` | ⚡⚡⚡ | Execute an existing plan (with testing) | You have a plan in `plans/` folder, ready to build |
| `/code:auto` | ⚡⚡⚡ | Execute plan automatically ("trust me") | You have a plan, want Claude to just build it |
| `/code:no-test` | ⚡⚡ | Execute plan without running tests | You'll test manually later |
| `/code:parallel` | ⚡ | Execute parallel phases from plan | Plan has parallel phases, want speed |
| `/code:session` | ⚡ | Resume a specific session | Paused work, want to continue from session-breakdown.md |
| `/cook` | ⚡⚡⚡ | Implement feature step-by-step (one command) | Want planning + coding in one flow (standalone) |
| `/cook:auto` | ⚡⚡ | Implement feature automatically | Trust Claude to handle everything |
| `/cook:auto:fast` | ⚡ | Quick implement, no research | Simple feature, just build it |
| `/cook:auto:parallel` | ⚡⚡⚡ | Plan parallel + execute with agents | Complex feature, want parallel execution |

---

## 4. Debugging & Testing

**When things break or you need to verify quality.**

| Command | ⚡ Tokens | What It Does | When to Use |
|---------|----------|--------------|-------------|
| `/fix` | ⚡⚡ | Analyze and fix issues (smart routing) | Something's broken, need to diagnose and fix |
| `/fix:fast` | ⚡ | Quick fix for small issues | Minor bug, obvious problem |
| `/fix:hard` | ⚡⚡⚡ | Use subagents for complex issues | Tough bug, need deep investigation |
| `/fix:parallel` | ⚡⚡ | Fix with parallel fullstack agents | Multiple issues or complex system |
| `/fix:ci` | ⚡ | Fix GitHub Actions failures | CI/CD pipeline broken |
| `/fix:logs` | ⚡ | Analyze logs and fix issues | Have error logs, need to find root cause |
| `/fix:test` | ⚡⚡ | Run tests and fix failures | Tests failing, make them pass |
| `/fix:types` | ⚡ | Fix TypeScript/type errors | Type checking errors everywhere |
| `/fix:ui` | ⚡⚡ | Fix UI/visual issues | Something looks wrong on screen |
| `/debug` | ⚡⚡ | Debug technical issues (deeper analysis) | Stuck on a bug, need detailed investigation |
| `/test` | ⚡ | Run tests and analyze results | Want to check if everything works |
| `/test:ui` | ⚡⚡ | Run UI tests on website | Need to test visual/user interactions |

---

## 5. Git Workflow

**Version control - saving and sharing your work.**

| Command | ⚡ Tokens | What It Does | When to Use |
|---------|----------|--------------|-------------|
| `/git:cm` | | Stage all files + create commit | You made changes, ready to save locally |
| `/git:cp` | | Stage + commit + push all at once | Ready to save AND upload to remote |
| `/git:pr` | | Create a pull request | Ready for code review and merge |
| `/git:merge` | | Merge one branch into another | Combine work from different branches |
| `/worktree` | | Create isolated git worktree | Work on multiple features simultaneously without stashing |

---

## 6. Documentation

**Keeping your project documented.**

| Command | ⚡ Tokens | What It Does | When to Use |
|---------|----------|--------------|-------------|
| `/docs:init` | ⚡⚡⚡⚡ | Analyze codebase + create initial docs | New project or no docs exist yet |
| `/docs:update` | ⚡⚡⚡ | Analyze codebase + update existing docs | Code changed, docs need to catch up |
| `/docs:summarize` | ⚡ | Analyze + summarize in docs | Want high-level overview documentation |

---

## 7. Design

**Creating UI/UX designs.**

| Command | ⚡ Tokens | What It Does | When to Use |
|---------|----------|--------------|-------------|
| `/design:fast` | | Create a quick design | Need UI fast, prototype or simple page |
| `/design:good` | | Create an immersive/polished design | Production-ready UI, want high quality |
| `/design:screenshot` | | Recreate design from screenshot | Have reference image, want to replicate |
| `/design:video` | | Recreate design from video | Have video reference, want to capture flow |
| `/design:describe` | | Describe what's in a screenshot/video | Want to understand a design before building |
| `/design:3d` | | Create interactive 3D designs (Three.js) | Need 3D graphics/visualizations |

---

## 8. Content Creation

**Writing marketing copy and content.**

| Command | ⚡ Tokens | What It Does | When to Use |
|---------|----------|--------------|-------------|
| `/content:fast` | | Write creative copy quickly | Need content ASAP, blog/social post |
| `/content:good` | | Write high-quality creative copy | Important content, want polish and impact |
| `/content:cro` | | Optimize content for conversions | Landing page or sales copy, improve results |
| `/content:enhance` | | Fix and improve existing copy | Content exists but underperforming |

---

## 9. Integration

**Connecting to external services.**

| Command | ⚡ Tokens | What It Does | When to Use |
|---------|----------|--------------|-------------|
| `/integrate:polar` | ⚡⚡ | Add Polar.sh payment integration | SaaS product, need subscriptions/payments |
| `/integrate:sepay` | ⚡⚡ | Add SePay.vn payment integration | Vietnam market, QR/bank transfer payments |

---

## 10. Code Quality

**Reviewing and improving code quality.**

| Command | ⚡ Tokens | What It Does | When to Use |
|---------|----------|--------------|-------------|
| `/review:codebase` | ⚡⚡⚡ | Scan and analyze entire codebase | Want code health check or architectural review |
| `/review:codebase:parallel` | ⚡⚡⚡ | Deep analysis with parallel verification | Large codebase, thorough review needed |

---

## 11. Skills & Tools

**Extend Claude's capabilities.**

| Command | ⚡ Tokens | What It Does | When to Use |
|---------|----------|--------------|-------------|
| `/skill:create` | | Create a new agent skill | Want custom AI agent with specialized knowledge |
| `/skill:plan` | | Plan to create a new skill | Complex skill, need to design it first |
| `/skill:optimize` | | Improve existing skill | Skill not working well, want to enhance it |
| `/skill:optimize:auto` | | Auto-optimize existing skill | Quick improvement, let Claude handle it |
| `/skill:add` | | Add files/scripts to existing skill | Skill exists, want to add more references |
| `/skill:fix-logs` | | Fix skill based on logs.txt | Skill failed, have error logs to diagnose |
| `/ccs` | | Delegate task with intelligent agent selection | Want Claude to pick the right agent for the job |

---

## 12. Utilities

**Helper commands for various needs.**

| Command | ⚡ Tokens | What It Does | When to Use |
|---------|----------|--------------|-------------|
| `/ck-help` | | Show this help guide | Need command reference or forgot something |
| `/journal` | ⚡ | Write technical journal entries | Document failures, lessons learned, project wrap-up |
| `/kanban` | | Open AI orchestration dashboard | Visualize plan progress, agent activity |
| `/preview` | | View markdown/files in beautiful reader | Want to read plans/docs in nice UI |
| `/watzup` | ⚡ | Review recent changes + wrap up | End of session, see what was done |
| `/use-mcp` | | Use tools from MCP servers | Have MCP servers configured, want to use their tools |

---

## Tips for Non-Developers

### What's a "command"?
Think of it like a voice command to a super-smart assistant. Type `/something` and Claude does a complex task for you.

### What's "Git"?
Git is like a time machine for your code. It saves every version so you can go back if something breaks.

### What's "Deployment"?
Putting your code on the internet so others can use it.

### What's "Integration"?
Connecting your app to other services (like payment processors, APIs, databases).

### What's "Testing"?
Checking if your code works correctly before showing it to users.

### What's "Token Consumption"?
Think of tokens like "credits" that Claude uses to think and write. More complex tasks = more tokens needed. Commands with ⚡⚡⚡⚡⚡ use the most credits but give the most thorough results.

### Common Questions

**Q: Which command should I use first?**
A: If starting new → `/bootstrap`. If adding feature → `/plan` or `/cook`. If fixing bug → `/fix`.

**Q: What's the difference between `/plan` and `/cook`?**
A: `/plan` creates a blueprint first (you review it, then `/code` executes it). `/cook` does both in one go (faster but less control).

**Q: Do I need to be a developer?**
A: No, but technical context helps. Claude will guide you through each step.

**Q: Can I undo mistakes?**
A: Yes! Use Git (`/git:cm` saves your work) and Claude will warn before destructive actions.

**Q: How do I save tokens?**
A: Use `:fast` variants when you know what you're doing. Use `:parallel` only for large projects where speed matters more than cost.

---

## Command Modifiers Explained

| Modifier | Meaning | Token Impact | Example |
|----------|---------|--------------|---------|
| `:fast` | Skip research, quick execution | Lower | `/plan:fast`, `/cook:auto:fast` |
| `:hard` | Deep analysis, thorough | Higher | `/fix:hard`, `/plan:hard` |
| `:auto` | Trust Claude, less interaction | Same | `/cook:auto`, `/code:auto` |
| `:parallel` | Use multiple agents (faster, more tokens) | Higher | `/fix:parallel`, `/code:parallel` |
| `:two` | Get 2 options/approaches | Higher | `/plan:two` |

---

## Getting Help

- **Stuck?** Type `/ck-help` anytime
- **Need ideas?** Try `/brainstorm` before planning
- **Review progress?** Run `/watzup` to see what's done
- **Something broken?** Start with `/debug` or `/fix`
- **Watch your tokens?** Check the ⚡ column before running commands

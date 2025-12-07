# Built-in Slash Commands Reference

This document provides a comprehensive reference of all built-in slash commands available in the `.claude/commands/` directory.

## Summary

**Total Commands: 62** organized across **14 categories**

- **Core Commands**: 14 (including `/ask`, `/bootstrap`, `/code`, `/cook`, `/plan`, `/fix`, etc.)
- **Bootstrap Sub-commands**: 1
- **Code Sub-commands**: 2 (including new `/code:no-test`)
- **Content Sub-commands**: 4
- **Cook Sub-commands**: 1
- **Design Sub-commands**: 6
- **Docs Sub-commands**: 3
- **Fix Sub-commands**: 8
- **Git Sub-commands**: 4
- **Integrate Sub-commands**: 2
- **Plan Sub-commands**: 6
- **Review Sub-commands**: 1
- **Scout Sub-commands**: 1
- **Skill Sub-commands**: 4

---

## Core Commands

### `/ask` ⚡
Answer technical and architectural questions.
- **Usage**: `/ask [technical-question]`
- **Description**: Provides expert consultation and architectural guidance through specialized advisors (Systems Designer, Technology Strategist, Scalability Consultant, Risk Analyst)

### `/bootstrap` ⚡⚡⚡⚡⚡
Bootstrap a new project step by step
- **Usage**: `/bootstrap [user-requirements]`
- **Description**: Complete project initialization including research, tech stack selection, planning, wireframe & design, implementation, testing, code review, and documentation

### `/brainstorm` ⚡⚡
Brainstorm a feature
- **Usage**: `/brainstorm [question]`
- **Description**: Collaborate on solutions with brutal honesty about feasibility and trade-offs, following YAGNI, KISS, and DRY principles

### `/ck-help`
ClaudeKit usage guide - just type naturally
- **Usage**: `/ck-help [category|command|task description]`
- **Description**: All-in-one ClaudeKit guide. Provides interactive help for commands, categories, and workflows. Supports natural language search and automatically translates non-English queries

### `/code` ⚡
Start coding & testing an existing plan
- **Usage**: `/code [plan]`
- **Description**: Execute implementation plan with structured workflow: analysis, implementation, testing, code review, user approval, and finalization

### `/cook` ⚡⚡⚡
Implement a feature step by step
- **Usage**: `/cook [tasks]`
- **Description**: Complete feature implementation workflow including research, planning, implementation, testing, code review, and documentation

### `/debug` ⚡⚡
Debugging technical issues and providing solutions
- **Usage**: `/debug [issues]`
- **Description**: Uses debugger subagent to find root cause without implementing fixes automatically

### `/fix` ⚡⚡
Analyze and fix issues with intelligent routing
- **Usage**: `/fix [issues]`
- **Description**: Smart router that analyzes issues and delegates to specialized fix commands based on issue type

### `/journal` ⚡
Write journal entries
- **Usage**: `/journal`
- **Description**: Uses journal-writer subagent to explore memories and recent code changes

### `/plan` ⚡⚡⚡
Intelligent plan creation with prompt enhancement
- **Usage**: `/plan [task]`
- **Description**: Creates implementation plans with active plan detection and routes to `/plan:fast` or `/plan:hard`

### `/scout` ⚡⚡
Scout given directories to respond to requests
- **Usage**: `/scout [user-prompt] [scale]`
- **Description**: Fast, token-efficient codebase search to find files needed for tasks

### `/test` ⚡
Run tests locally and analyze summary report
- **Usage**: `/test`
- **Description**: Uses tester subagent to run and analyze test results

### `/use-mcp`
Utilize Model Context Protocol (MCP) server tools
- **Usage**: `/use-mcp [task]`
- **Description**: Execute MCP operations via Gemini CLI or mcp-manager subagent

### `/watzup` ⚡
Review recent changes and wrap up work
- **Usage**: `/watzup`
- **Description**: Reviews current branch and recent commits with detailed impact analysis

---

## Bootstrap Sub-commands

### `/bootstrap:auto`
Auto-bootstrap with enhanced workflow
- **Usage**: `/bootstrap:auto [requirements]`

---

## Code Sub-commands

### `/code:no-test` ⚡⚡
Start coding an existing plan (no testing)
- **Usage**: `/code:no-test [plan]`
- **Description**: Execute implementation plan without testing phase. Workflow includes: analysis, implementation, code review, user approval, and finalization (skips Step 3: Testing)

### `/code:parallel`
Parallel implementation of multiple plan phases
- **Usage**: `/code:parallel [plan]`

---

## Content Sub-commands

### `/content:cro`
Content optimization with Conversion Rate Optimization
- **Usage**: `/content:cro [content-details]`

### `/content:enhance`
Enhance existing content
- **Usage**: `/content:enhance [content]`

### `/content:fast`
Quick content generation
- **Usage**: `/content:fast [requirements]`

### `/content:good`
High-quality content creation
- **Usage**: `/content:good [requirements]`

---

## Cook Sub-commands

### `/cook:auto`
Auto-cook with enhanced workflow
- **Usage**: `/cook:auto [tasks]`

---

## Design Sub-commands

### `/design:3d`
Generate 3D designs and mockups
- **Usage**: `/design:3d [requirements]`

### `/design:describe`
Describe design requirements and specifications
- **Usage**: `/design:describe [design-details]`

### `/design:fast`
Quick design generation
- **Usage**: `/design:fast [requirements]`

### `/design:good`
High-quality design creation
- **Usage**: `/design:good [requirements]`

### `/design:screenshot`
Capture and analyze screenshots
- **Usage**: `/design:screenshot [details]`

### `/design:video`
Video design and storyboarding
- **Usage**: `/design:video [requirements]`

---

## Docs Sub-commands

### `/docs:init`
Initialize project documentation
- **Usage**: `/docs:init`

### `/docs:summarize`
Summarize documentation or codebase
- **Usage**: `/docs:summarize [target]`

### `/docs:update`
Update existing documentation
- **Usage**: `/docs:update [changes]`

---

## Fix Sub-commands

### `/fix:ci`
Fix CI/CD issues (GitHub Actions, pipelines, workflows)
- **Usage**: `/fix:ci [github-actions-url-or-description]`

### `/fix:fast`
Quick fixes for simple/straightforward issues
- **Usage**: `/fix:fast [description]`

### `/fix:hard`
Complex fixes (architecture, refactors, system-wide changes)
- **Usage**: `/fix:hard [description]`

### `/fix:logs`
Analyze and fix log-related issues
- **Usage**: `/fix:logs [description]`

### `/fix:parallel`
Fix multiple independent issues in parallel
- **Usage**: `/fix:parallel [description]`

### `/fix:test`
Fix test failures
- **Usage**: `/fix:test [description]`

### `/fix:types`
Fix TypeScript type errors
- **Usage**: `/fix:types`

### `/fix:ui`
Fix UI/UX issues (design, layout, style, components)
- **Usage**: `/fix:ui [description]`

---

## Git Sub-commands

### `/git:cm`
Git commit with conventional messages
- **Usage**: `/git:cm [message]`

### `/git:cp`
Cherry-pick commits
- **Usage**: `/git:cp [commit-hash]`

### `/git:merge`
Merge branches with conflict resolution
- **Usage**: `/git:merge [branch]`

### `/git:pr`
Create pull requests
- **Usage**: `/git:pr [details]`

---

## Integrate Sub-commands

### `/integrate:polar`
Integrate Polar payment system
- **Usage**: `/integrate:polar`

### `/integrate:sepay`
Integrate SePay payment system
- **Usage**: `/integrate:sepay`

---

## Plan Sub-commands

### `/plan:ci`
Plan CI/CD implementation
- **Usage**: `/plan:ci [requirements]`

### `/plan:cro`
Plan Conversion Rate Optimization
- **Usage**: `/plan:cro [objectives]`

### `/plan:fast`
Fast planning for simple tasks
- **Usage**: `/plan:fast [task-description]`

### `/plan:hard`
Comprehensive planning for complex tasks
- **Usage**: `/plan:hard [task-description]`

### `/plan:parallel`
Parallel planning for multiple features
- **Usage**: `/plan:parallel [features]`

### `/plan:two`
Two-phase planning approach
- **Usage**: `/plan:two [requirements]`

---

## Review Sub-commands

### `/review:codebase`
Comprehensive codebase review
- **Usage**: `/review:codebase [scope]`

---

## Scout Sub-commands

### `/scout:ext`
Extended scouting with enhanced search
- **Usage**: `/scout:ext [prompt] [scale]`

---

## Skill Sub-commands

### `/skill:add`
Add new skills to the catalog
- **Usage**: `/skill:add [skill-details]`

### `/skill:create`
Create custom skills
- **Usage**: `/skill:create [requirements]`

### `/skill:fix-logs`
Fix skill logging issues
- **Usage**: `/skill:fix-logs`

### `/skill:optimize`
Optimize skill performance
- **Usage**: `/skill:optimize [skill-name]`

---

## Command Intensity Legend

- ⚡ - Standard complexity
- ⚡⚡ - Medium complexity, requires subagent coordination
- ⚡⚡⚡ - High complexity, full workflow orchestration
- ⚡⚡⚡⚡⚡ - Maximum complexity, complete project lifecycle

---

## Notes

- Most commands follow the holy trinity of software engineering: **YAGNI** (You Aren't Gonna Need It), **KISS** (Keep It Simple, Stupid), and **DRY** (Don't Repeat Yourself)
- Commands utilize various subagents (researcher, planner, tester, debugger, code-reviewer, ui-ux-designer, etc.)
- Many commands integrate with skills catalog and MCP servers
- Commands prioritize token efficiency while maintaining quality
- Reports sacrifice grammar for concision

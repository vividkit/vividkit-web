# ClaudeKit Commands Reference

Comprehensive guide to all built-in slash commands. Commands are organized by category with complexity indicators.

## Quick Reference

| Complexity | Meaning |
|------------|---------|
| ⚡ | Fast/Simple - minimal subagent usage |
| ⚡⚡ | Medium - some subagent orchestration |
| ⚡⚡⚡ | Complex - full workflow with multiple subagents |
| ⚡⚡⚡⚡ | Ultra - intensive research + parallel agents |

---

## Core Workflow Commands

### `/cook` - Implement Features

Full-featured command for implementing tasks with complete workflow.

| Variant | Description | Use When |
|---------|-------------|----------|
| `/cook [tasks]` | ⚡⚡⚡ Step-by-step with Q&A | Need clarification, complex features |
| `/cook:auto [tasks]` | ⚡⚡ "Trust me bro" mode | Simple features, trust the AI |
| `/cook:auto:fast [tasks]` | ⚡ Scout + plan + implement | Fast, no research needed |
| `/cook:auto:parallel [tasks]` | ⚡⚡⚡ Parallel agent execution | Multiple independent components |

**Workflow:**
1. Questions → Research → Plan → Implement → Test → Review → Docs → Git

---

### `/code` - Execute Plans

Implement from existing plans or create new implementation.

| Variant | Description | Use When |
|---------|-------------|----------|
| `/code [plan-path]` | ⚡⚡⚡ Execute with parallel/sequential detection | Have a plan ready |
| `/code:auto [plan-path]` | ⚡⚡ Auto execution | Trust the plan |
| `/code:no-test [plan-path]` | ⚡⚡ Skip testing phase | Prototyping |
| `/code:parallel [plan-path]` | ⚡⚡⚡ Force parallel execution | Independent phases |

---

### `/bootstrap` - Initialize Projects

Fast project setup with auto-detection.

| Variant | Description |
|---------|-------------|
| `/bootstrap` | ⚡ Interactive setup |
| `/bootstrap:auto` | ⚡ "Trust me bro" mode |
| `/bootstrap:auto:fast` | ⚡ Fastest setup |
| `/bootstrap:auto:parallel` | ⚡⚡ Parallel initialization |

---

## Planning Commands

### `/plan` - Create Implementation Plans

| Variant | Description | Output |
|---------|-------------|--------|
| `/plan [task]` | ⚡⚡⚡ Smart routing (fast/hard) | Plan directory |
| `/plan:fast [task]` | ⚡⚡ Scout + plan only | Quick plan |
| `/plan:hard [task]` | ⚡⚡⚡ Research + plan | Detailed plan |
| `/plan:parallel [task]` | ⚡⚡⚡ Parallel-executable phases | Phase dependency graph |
| `/plan:two [task]` | ⚡⚡⚡⚡ Two approaches comparison | Trade-offs analysis |
| `/plan:validate [plan-path]` | Validate with interview | Confirmed decisions |
| `/plan:ci [github-url]` | ⚡ Plan CI fix | CI-focused plan |
| `/plan:cro [issues]` | ⚡⚡⚡ CRO optimization plan | Conversion plan |
| `/plan:archive [path]` | Archive completed plans | Clean plans dir |

**Plan Structure:**
```
{plan-dir}/
├── plan.md              # Overview with YAML frontmatter
├── phase-01-*.md        # Phase details
├── phase-02-*.md
├── research/            # Research reports
├── reports/             # Additional reports
└── scout/               # Scout findings
```

---

## Debugging & Fixing Commands

### `/fix` - Intelligent Issue Resolution

Routes to specialized fix commands based on issue type.

| Variant | Description | Keywords |
|---------|-------------|----------|
| `/fix [issues]` | ⚡⚡ Smart routing | Auto-detects type |
| `/fix:fast [issues]` | ⚡ Quick fix | Simple bugs |
| `/fix:hard [issues]` | ⚡⚡⚡ Full investigation | Complex issues |
| `/fix:types` | ⚡ TypeScript errors | tsc, type errors |
| `/fix:ui [issue]` | ⚡⚡ UI/UX issues | layout, style, responsive |
| `/fix:ci [github-url]` | ⚡ CI/CD failures | github actions, pipeline |
| `/fix:test [issues]` | ⚡⚡ Test failures | jest, vitest, spec |
| `/fix:logs [issue]` | ⚡ Log analysis | stack trace, error logs |
| `/fix:parallel [issues]` | ⚡⚡ Multiple issues | Independent bugs |

### `/debug [issues]`
⚡⚡ Analyze issues without implementing fix. Uses `debugger` subagent to find root cause.

---

## Design Commands

### `/design` - UI/UX Design

| Variant | Description | Input |
|---------|-------------|-------|
| `/design:fast [tasks]` | Quick design | Text prompt |
| `/design:good [tasks]` | Immersive design | Text prompt |
| `/design:screenshot [path]` | Replicate from screenshot | Image file |
| `/design:video [path]` | Replicate from video | Video file |
| `/design:describe [path]` | Describe design details | Screenshot/video |
| `/design:3d [tasks]` | Three.js immersive | 3D requirements |

**Required Skills:** `ui-ux-pro-max`, `aesthetic`, `frontend-design`

---

## Git Commands

### `/git` - Version Control

| Command | Description |
|---------|-------------|
| `/git:cm` | Stage all + commit (no push) |
| `/git:cp` | Stage + commit + push |
| `/git:pr [to] [from]` | Create pull request |
| `/git:merge [to] [from]` | Merge branches |

**PR Workflow:**
1. Sync remote
2. Analyze REMOTE diff (not local!)
3. Generate PR content
4. Create via `gh pr create`

---

## Documentation Commands

### `/docs` - Documentation Management

| Command | Description |
|---------|-------------|
| `/docs:init` | ⚡⚡⚡⚡ Create initial docs |
| `/docs:update [topics]` | ⚡⚡⚡ Update all docs |
| `/docs:summarize [topics] [scan?]` | ⚡ Quick summary |

**Generated Files:**
- `docs/project-overview-pdr.md`
- `docs/codebase-summary.md`
- `docs/code-standards.md`
- `docs/system-architecture.md`
- `docs/project-roadmap.md`

---

## Codebase Navigation

### `/scout` - Search Codebase

| Variant | Description | Agents |
|---------|-------------|--------|
| `/scout [prompt] [scale]` | ⚡⚡ Internal scout | `Explore` subagents |
| `/scout:ext [prompt] [scale]` | ⚡ External tools | Gemini CLI, OpenCode |

**Scale:** Number of parallel scouts (default: 3)

---

## Testing Commands

### `/test` - Run Tests

| Command | Description |
|---------|-------------|
| `/test` | ⚡ Run test suite |
| `/test:ui [url] [options]` | ⚡⚡ Full UI testing |

**UI Testing Options:**
- `--headless` - No browser UI
- `--mobile` - Mobile viewport
- `--auth` - Protected routes (requires manual login first)

---

## Content Commands

### `/content` - Copywriting

| Variant | Description |
|---------|-------------|
| `/content:fast [request]` | Quick copy |
| `/content:good [request]` | Research-backed copy |
| `/content:enhance [issues]` | Improve existing copy |
| `/content:cro [issues]` | Conversion optimization |

**CRO Framework:** 25 principles including 4-U Headlines, PAS Copy, Cognitive Bias Stack.

---

## Integration Commands

### `/integrate` - Third-party Integrations

| Command | Description |
|---------|-------------|
| `/integrate:polar [tasks]` | ⚡⚡ Polar.sh payments |
| `/integrate:sepay [tasks]` | ⚡⚡ SePay.vn payments |

---

## Skill Management

### `/skill` - Agent Skills

| Command | Description |
|---------|-------------|
| `/skill:create [prompt]` | Create new skill |
| `/skill:add [name] [prompt]` | Add to existing skill |
| `/skill:optimize [name]` | Optimize skill |
| `/skill:optimize:auto [name]` | Auto-optimize |
| `/skill:plan [name]` | Plan skill creation |
| `/skill:fix-logs [path]` | Fix from logs.txt |

---

## Review Commands

### `/review:codebase [prompt]`
⚡⚡⚡ Full codebase scan with research + code review + improvement plan.

### `/watzup`
⚡ Review recent changes. Summarize current branch commits.

---

## Utility Commands

### `/ask [question]`
Ask questions about the codebase or task.

### `/brainstorm [topic]`
Brainstorm ideas and solutions.

### `/coding-level [0-5]`
Set explanation detail level:
- 0: ELI5 (zero experience)
- 1: Junior (0-2 years)
- 2: Mid-Level (3-5 years)
- 3: Senior (5-8 years)
- 4: Tech Lead (8-10 years)
- 5: God Mode (default)

### `/preview [path]`
Render markdown files or browse directories in novel-reader UI.
- `/preview plans/` - Browse plans
- `/preview file.md` - View markdown
- `/preview --stop` - Stop server

### `/kanban [dir]`
AI agent orchestration board (dashboard for plans).

### `/journal`
⚡ Write journal entries documenting changes and decisions.

### `/use-mcp [task]`
Execute MCP operations via Gemini CLI.

### `/ck-help`
ClaudeKit help and documentation.

---

## Command Patterns

### Argument Syntax
- `$ARGUMENTS` - All arguments
- `$1`, `$2` - Positional arguments
- `$N` - Nth argument

### Common Workflows

**Feature Implementation:**
```
/plan:hard [feature description]
→ /code [plan-path]
→ /git:pr
```

**Quick Fix:**
```
/fix:fast [bug description]
→ /git:cm
```

**Full Feature (with research):**
```
/cook [feature description]
→ Follow prompts
→ /git:cp
```

**Parallel Implementation:**
```
/plan:parallel [multi-component feature]
→ /code:parallel [plan-path]
```

---

## Configuration

### `.claude/.ck.json`
```json
{
  "codingLevel": 5,
  "validationMode": "prompt",
  "validationQuestions": "3-8"
}
```

### Plan Context (Injected)
- `Plan:` - Active plan path or "none"
- `Suggested:` - Branch-matched plan hint
- `Validation:` - mode + question count

---

## Best Practices

1. **Start with `/plan`** for complex features
2. **Use `:fast` variants** for speed
3. **Use `:parallel` variants** for independent work
4. **Always verify** with `/test` before `/git:cp`
5. **Keep docs updated** with `/docs:update`

## See Also

- [Development Rules](../development-rules.md)
- [Skills Catalog](.claude/skills/)
- [Workflows](.claude/workflows/)

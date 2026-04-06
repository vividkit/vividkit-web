# /ck:test — Testing & Quality Assurance

Source: `~/.claude/skills/test/SKILL.md`

## Authoritative Flow

```
1. Mode Select — AskUserQuestion: code tests vs UI tests (skip if arg provided)
2. Hooks Fire — context injection (session-init, dev-rules-reminder, subagent-init)
3. Typecheck — run typecheck/analyze to catch syntax errors first
4. Execute Tests — run appropriate test suite (Jest/Vitest/pytest/go test/etc.)
5. Analyze Results — focus on failures, identify root causes
6. Coverage Report — generate coverage metrics (Istanbul/c8/pytest-cov/go cover)
7. UI Tests (conditional) — ck:chrome-devtools for screenshots, a11y, responsive
8. Screenshot Analysis (conditional) — ck:ai-multimodal for visual regression
9. Debug (conditional) — ck:debug for complex test failure investigation
10. QA Report — structured summary with metrics & recommendations
11. Organize — /ck:project-organization for output placement
```

## Skills Activated

| Type | Skill |
|------|-------|
| Mandatory | (none — test runners invoked via Bash) |
| Conditional | ck:chrome-devtools (UI tests), ck:ai-multimodal (screenshot analysis) |
| Conditional | ck:debug (failure investigation), ck:sequential-thinking (complex analysis) |
| Conditional | /ck:project-organization (report output) |

## Sub-agents

No dedicated sub-agents spawned by default. Main agent runs test commands directly.
For UI testing, ck:chrome-devtools skill may spawn browser automation sub-agents.

## Mode Selection

Two modes selected via AskUserQuestion (or argument):
- **Code tests** (default) — unit/integration/e2e via test runners
- **UI tests** (`ui` arg) — browser-based visual testing via ck:chrome-devtools

## Hard Gates

- **NEVER ignore failing tests** — fix root causes, not symptoms
- **No mocks/cheats/tricks** to pass builds
- **All critical paths** must have test coverage
- **Test isolation** — no interdependencies between tests
- **Deterministic & reproducible** — tests must be repeatable

## Supported Runners

JS/TS: Jest, Vitest, Mocha | Python: pytest | Go: go test | Rust: cargo test | Flutter: flutter test

## Report Format

Structured QA report: test results overview, coverage metrics, failed tests detail,
performance data, build status, recommendations.

## Team Mode

When operating as teammate: claim tasks via TaskList/TaskUpdate, respect file ownership
(test files only), wait for implementation tasks to complete before testing.

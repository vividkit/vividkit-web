# /ck:code-review — Evidence-Based Code Review

Source: `reference/stable/claude/skills/ck-code-review/SKILL.md` (v2.0.0) + `references/`

## Authoritative Flow

```
1. Input Resolution — auto-detect mode from arguments (PR#, commit, --pending, codebase, default)
   → If ambiguous/no args: AskUserQuestion to select review target
2. Diff Acquisition — fetch diff via gh pr diff / git show / git diff per mode
3. Stage 1: Spec Compliance — does code match what was requested? (references/spec-compliance-review.md)
   → Check each requirement: PASS / MISSING / EXTRA
   → MUST pass before Stage 2 (FAIL → fix → re-review Stage 1)
4. Edge Case Scouting — invoke /ck:scout with edge-case focus (affected files, data flows, error paths, boundaries)
5. Stage 2: Code Quality — spawn code-reviewer sub-agent (standards, security, performance, edge cases)
6. Final Verification — re-run relevant tests/build/lint or manual reproduction
   → Verify accepted findings are fixed, no new regression introduced
   → Confirm 0 failures before any completion claim
7. Output — review report with findings + severity; critical findings block merge until fixed and re-verified
```

## Skills Activated

| Type | Skill |
|------|-------|
| Mandatory | ck:scout (edge case scouting) |
| Conditional | ck:sequential-thinking (complex reasoning) |
| Optional | ck:docs-seeker (library API verification) |

## Sub-agents

| Agent | When | Purpose |
|-------|------|---------|
| code-reviewer | Stage 2 | Code quality review (standards, security, performance) |
| Parallel code-reviewers | Multi-file (3+) | Scoped reviewers for independent file groups (e.g. backend + frontend) |

## Input Modes

| Input | Mode | What Gets Reviewed |
|-------|------|--------------------|
| `#123` or PR URL | PR | Full PR diff via `gh pr diff` |
| `abc1234` (7+ hex) | Commit | Single commit diff via `git show` |
| `--pending` | Pending | Staged + unstaged via `git diff` |
| *(no args)* | Default | Recent changes in context |
| `codebase` | Codebase | Full codebase scan |
| `codebase parallel` | Codebase+ | Parallel multi-reviewer audit |

## Hard Gates

1. **Spec compliance MUST pass** before code quality review (Stage 1 → Stage 2).
2. **Final Verification runs AFTER Stage 2 passes** — re-run tests/build/lint before any claim.
3. **NO completion claims without fresh verification evidence** — tests pass, build succeeds, original symptom resolved.
4. **Critical findings block merge** — must fix and re-verify before proceeding.
5. **Re-review cycle limit: 3** — escalate to user after 3 failed cycles.

## Task-Managed Pipeline (3+ files)

```
scout → review → fix → verify
```
Each step is a Task with dependency chain. Parallel scoped reviewers for independent file groups. Fix task blocks on all reviewers completing.
Fallback: Task tools are CLI-only — if unavailable (VSCode extension), use TodoWrite and run sequentially.

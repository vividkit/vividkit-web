# /ck:code-review — Adversarial Code Review

Source: `~/.claude/skills/code-review/SKILL.md`

## Authoritative Flow

```
1. Input Resolution — auto-detect mode from arguments (PR#, commit, --pending, codebase, default)
   → If ambiguous/no args: AskUserQuestion to select review target
2. Diff Acquisition — fetch diff via gh pr diff / git show / git diff per mode
3. Stage 1: Spec Compliance — does code match what was requested? (references/spec-compliance-review.md)
   → MUST pass before Stage 2
4. Edge Case Scouting — invoke /ck:scout with edge-case focus
5. Stage 2: Code Quality — spawn code-reviewer sub-agent (standards, security, performance)
6. Stage 3: Adversarial Review — spawn adversarial reviewer sub-agent (references/adversarial-review.md)
   → Scope gate: skip if ≤2 files, ≤30 lines, no security files
   → Red-team: security holes, false assumptions, race conditions, resource exhaustion
   → Verdicts per finding: Accept (must fix) / Reject (false positive) / Defer (GitHub issue)
7. Verification Gates — run build/test commands, confirm 0 failures before any completion claim
8. Output — review report with findings, severity, verdicts; critical findings block merge
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
| adversarial-reviewer | Stage 3 | Red-team analysis to actively break code |
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
2. **Adversarial review runs on EVERY review** — no exceptions (scope gate exempts trivial changes).
3. **NO completion claims without fresh verification evidence** — tests pass, build succeeds, original symptom resolved.
4. **Critical findings block merge** — must fix before proceeding.
5. **Re-review cycle limit: 3** — escalate to user after 3 failed cycles.

## Task-Managed Pipeline (3+ files)

```
scout → review → adversarial → fix → verify
```
Each step is a Task with dependency chain. Parallel scoped reviewers for independent file groups. Fix task blocks on all reviewers completing.

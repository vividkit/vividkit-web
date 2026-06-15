# /ck:vibe — Autonomous Issue-to-PR Pipeline

Source: reference/beta/claude/skills/vibe/SKILL.md

## Authoritative Flow

1. Parse and analyze request: strip `--ship`/`--beta`; treat a GitHub issue URL/number as source of truth (never duplicate), or natural language as a feature request. Resolve repo via `gh repo view`; for issue URLs compare `OWNER/REPO` and stop if it differs. Extract outcome, acceptance criteria, scope, constraints, blockers, touched surfaces. Classify route (feature vs bugfix) and detect a reusable existing plan. Ask before worktree creation only if ambiguity changes implementation.
2. Create isolated worktree and branch via `/ck:worktree`; descriptive branch name; reuse a clean matching worktree if present. Never work on `main`, `master`, `dev`, `beta`, or `develop`.
3. Plan intake and gates: reuse a valid existing `plan.md` (skip `/ck:plan --tdd`), else `/ck:plan --tdd "<source>"`. Always run `/ck:plan validate` and `/ck:plan red-team`, plus the whole-plan consistency sweep. Do not implement while validation failures, accepted red-team findings, or contradictions remain.
4. Create or update GitHub issue: ensure labels exist (`ready to cook`, `in progress`, `ready to ship stable`, `ready to ship beta`). Update/comment source issue or create one for natural-language input with branch, route, summary, relative plan link, ship mode, acceptance criteria. Add `ready to cook`; clear stale ship labels.
5. Implement or fix: flip issue to `in progress` (remove `ready to cook`). Bugfix route → `/ck:fix --auto <plan.md>`; feature route → `/ck:cook --tdd --auto <plan.md>`. Honor every hard gate. Stop and update the issue on any user/business blocker.
6. Review local implementation via `/ck:code-review --pending`; fix Critical and Important findings; re-validate.
7. Ship PR: `/ck:ship beta` (with `--beta`) or `/ck:ship official`. Capture PR URL/number.
8. Review/fix/reply PR: `/ck:review-pr <pr> --fix --reply`. Do not continue until findings resolved or an external blocker is recorded; checks must be terminal and green.
9. Apply ready label (`ready to ship beta` or `ready to ship stable`) on both issue and PR; remove `ready to cook` and `in progress`.
10. Optional merge and CI convergence (only with `--ship`): merge per repo convention/branch protection (prefer `gh pr merge --auto` when checks pending), never force-push or direct-push protected branches. Watch target-branch CI for the merge commit; on a deterministic repo-fixable failure, branch from target, `/ck:fix --auto` with exact error, re-ship, re-review, merge, re-watch. Stop when CI is green, an external blocker remains, or the same blocker survives 3 fix attempts.

## Skills Activated

| Type | Skill / Tooling |
|------|-----------------|
| Worktree | `/ck:worktree` |
| Planning | `/ck:plan --tdd`, `/ck:plan validate`, `/ck:plan red-team` |
| Implementation | `/ck:cook --tdd --auto` (feature), `/ck:fix --auto` (bugfix) |
| Review | `/ck:code-review --pending`, `/ck:review-pr --fix --reply` |
| Ship | `/ck:ship official` / `/ck:ship beta` |
| GitHub | `gh` (repo/issue/label/PR/merge/run) |

## Flags

| Flag | Effect |
|------|--------|
| `--beta` | Ship to beta/dev via `/ck:ship beta`; final label `ready to ship beta`. |
| no `--beta` | Ship stable via `/ck:ship official`; final label `ready to ship stable`. |
| `--ship` | After review/fix/reply, merge the PR and watch/fix CI until success or a true external blocker. |
| no `--ship` | Stop after PR is reviewed, fixed, replied, and labeled ready. |

## Hard Gates

- Does NOT bypass underlying skills' approval gates, tests, code-review blockers, branch protections, or security policies.
- Never works on protected branches; never force-push or direct-push to protected targets.
- Plan validation + red-team + consistency sweep must pass before implementation.
- Critical/Important code-review findings fixed before ship; PR checks terminal and green unless an external blocker is recorded.
- Never write secrets/tokens/customer data into issues, PRs, comments, plans, or logs; redact sensitive output.
- If `gh` lacks permission, or CI fails on missing secrets/services/required human approval, record an external blocker; do not weaken tests.

## Artifacts

- GitHub issue (created or updated) with Outcome / Implementation / Acceptance Criteria / Pipeline State sections.
- PR with review iterations and ready-to-ship label.
- Completion report: source, branch/worktree, plan path, issue URL, PR URL, mode, route, review outcome, merge status, CI status.

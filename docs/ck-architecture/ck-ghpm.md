# /ck:ghpm — GitHub project management for humans and AI agents

Source: reference/beta/claude/skills/ghpm/SKILL.md

Use GitHub as the single source of truth (SSOT) for project work shared by humans and AI agents: task intake, triage, issue/project schemas, status updates, handoff logs, and `gh`/API/Actions automation. Does NOT replace product judgment, private planning, secrets management, or code review.

## Authoritative Flow

1. Orient: read repo, auth, projects, and open issues (`git remote -v`, `gh repo view`, `gh auth status`, `gh project list`, `gh issue list`).
2. Choose operating mode: Bootstrap, Intake, Execute, Handoff, or Audit.
3. Load only needed references: `schema-and-taxonomy.md` (labels/fields/issue contract), `command-cookbook.md` (`gh`/GraphQL/REST/Actions), `skill-pipelines.md` (chained skill workflows).
4. Update GitHub first, then local artifacts: issue/project/comment for task state, link PR/branch/checks for code, keep canonical task state in GitHub.
5. Report from evidence: cite issue/PR/project URLs, check names, branch names, timestamps.

## Skills Activated

| Type | Skill / Tooling |
|------|-----------------|
| GitHub CLI | `gh` (issue, pr, project, run, workflow, label, api) |
| GraphQL/REST | `gh api graphql` for precise Projects field reads/writes (node IDs, single-select options) |
| Version control | `git` (remote, branch, status) |
| Automation | GitHub Actions workflows for triage, reminders, stale checks, status reports |
| Pipelines | ck:scout, ck:research, ck:plan, ck:cook, ck:test, ck:code-review, ck:git, ck:ship, review-pr, ck:watzup, ck:project-management |

## Sub-agents

No fixed persona. GHPM coordinates work by chaining other skills around GitHub as the handoff ledger (intake→plan, plan→code, bugfix, release, human handoff pipelines).

## Mode Selection

| Mode | Meaning |
|------|---------|
| Bootstrap | Create minimal labels, project fields, issue templates, automation. |
| Intake | Turn request/plan/chat/TODOs into GitHub issues with the task contract. |
| Execute | Link branch/PR/checks to issues; advance one mutually-exclusive status. |
| Handoff | Write current state, blockers, exact commands run, and next owner/action. |
| Audit | Compare GitHub state against local repo, plans, and CI. |

## Complexity Routing

- `gh` first for normal operations; `gh api graphql` only when Projects fields need node IDs or typed updates.
- Prefer Projects `Status` field for live state; fall back to `status:*` labels when no Project exists.
- Extend label taxonomy minimally — inspect existing labels before creating new ones.

## Hard Gate

- Never paste secrets into issues, project fields, PR bodies, workflow logs, or comments.
- Treat public repos as public evidence ledgers; redact customer data and credentials.
- Least-privilege tokens; verify `project` scope before Projects edits (`gh auth status`).
- Prefer `GH_TOKEN` in Actions; never write PATs into workflow files.
- Keep statuses mutually exclusive; record blockers as both field/label and a comment with owner + unblock condition.

## Artifacts

- GitHub issues structured by the Task Contract (Outcome, Context, Acceptance Criteria, Dependencies, Handoff Log, Skill Chain, Evidence).
- Append-only handoff comments (`### Handoff` template) as the chronological decision trail.
- Project board state (Status, Owner, Lane, Priority, Iteration, Target, Risk, Next Action).
- Evidence-based GHPM Status summary citing issue/PR/project URLs, checks, and next owner/action.

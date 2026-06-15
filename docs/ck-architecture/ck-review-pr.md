# /ck:review-pr — Review GitHub PRs with optional fix loop and reply

Source: reference/beta/claude/skills/review-pr/SKILL.md

## Authoritative Flow

1. Acquire PR: derive `PR_REF` from `$ARGUMENTS` (strip `--fix`/`--reply`), pull metadata, diff, CI checks, and diff stat via `gh`.
2. Mandatory gates: duplicate / prior implementation, project standards, strategic necessity. These can produce findings even when the code is correct.
3. Analyze diff: read every changed file (full file for context), check alignment with stated PR purpose.
4. Check issues: correctness, security, breaking changes, code quality (anti-slop checklist), project-specific compliance, testing.
5. AI-slop detection: load `references/anti-ai-slop.md` when diff > 300 lines, ≥2 inline flags fire, > 2 new dumping-ground files, or judgment is unclear.
6. Summarize: risk level, gate results, findings by severity (Critical / Important / Suggestion), verdict (Approve / Request changes / Comment).

## Modes

| Mode | Meaning |
|------|---------|
| Review-only (default) | Review and print findings to chat. No edit/commit/push. Exception: may create a local `docs/code-standards.md` if none exists, reported not pushed. |
| `--fix` | Review, fix actionable findings, resolve conflicts, commit+push to PR head, watch CI to terminal, then re-review. Loops until clean or a true external blocker remains. |
| `--reply` | After review (or after the fix loop converges), post the final review to GitHub via `gh pr review`. |
| `--fix --reply` | Fix loop, then post only the final re-review. Flag order does not matter. |

## Severity Rule (anti-slop)

- **Structural** slop (dumping-ground file, parallel reimplementation, abstraction with one caller, schema change without migration, large file growth) → **Important**.
- **Micro** slop (over-comments, defensive paranoia, one-line wrappers) → **Suggestion**.
- This keeps `--fix` from churning the diff with cosmetic rewrites the author won't recognize.

## Fix Loop (`--fix`)

1. Build the blocking set: gate blockers + Critical/Important findings + concrete low-risk Suggestions + merge conflicts + CI failures/pending.
2. Check out and verify the PR head (`gh pr checkout`; fork → read-only fetch of head SHA). Confirm `git rev-parse HEAD` matches `headRefOid`.
3. Fix via `ck:fix --auto` with full evidence (do not bypass its hard gates).
4. Resolve merge conflicts in real files; never complete while `mergeStateStatus` shows conflicts.
5. `ck:git cp` to commit+push, then watch all checks to terminal (30-min ceiling per head SHA).
6. Re-review and repeat. Stop success when no findings, no conflicts, all required CI green. Stop blocked on a true external blocker or the same blocker surviving 3 attempts.

## Reply (`--reply`)

- Pre-flight: `gh` installed + authenticated; on failure fall back to printing locally, never fail the skill.
- Build body (summary, gates, risk, findings, verdict) + traceability footer. Length cap ~60k chars with truncation marker.
- Verdict → flag: Approve `--approve`, Request changes `--request-changes`, Comment `--comment`. Body piped via stdin.
- Self-PR fallback: GitHub blocks self-approve (HTTP 422) → retry as `--comment`, note the downgrade.
- With `--fix`: post only the final re-review. V1 does not dedupe re-posts.

## Skills / Tooling

| Type | Skill / Tooling |
|------|-----------------|
| Acquisition | `gh pr view/list/diff/checks`, `gh issue list`, `gh api`, `gh run view/watch/rerun`, `git log/diff/fetch` |
| Remediation | `ck:fix --auto`, `ck:git cp`, `git checkout/merge/rebase` |
| Review | `code-reviewer` agent, anti-ai-slop + project-rules references |
| Posting | `gh pr review --approve/--request-changes/--comment` |

## Final Output

Verdict, duplicate/standards/strategic-necessity results, iteration count and commits pushed (if `--fix`), whether `--reply` succeeded/fell back/printed-locally, remaining findings or blockers, unresolved questions.

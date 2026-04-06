# /ck:ship — Unified Ship Pipeline

Source: `~/.claude/skills/ship/SKILL.md` + `references/`

## Authoritative Flow (from SKILL.md)

```
Step 1:  Pre-flight       → Branch check, mode detection, diff analysis
Step 2:  Link Issues       → Find/create GitHub issues for traceability
Step 3:  Merge target      → Fetch + merge origin/<target-branch>
Step 4:  Run tests         → Auto-detect test runner, delegate to tester subagent
Step 5:  Pre-landing review→ Two-pass checklist (critical + informational) via code-reviewer
Step 6:  Version bump      → Auto-detect version file, bump patch/minor (conditional)
Step 7:  Changelog         → Auto-generate from commits + diff (conditional)
Step 8:  Journal           → Write technical journal via ck:journal (background)
Step 9:  Docs update       → Update project docs via ck:docs (official only, background)
Step 10: Commit            → Conventional commit with security scan
Step 11: Push              → git push -u origin <branch> (never force push)
Step 12: Create PR         → gh pr create with linked issues
```

## Mode Selection

| Argument | Target Branch | Pipeline |
|----------|--------------|----------|
| `official` | main/master (auto-detect) | Full: tests + review + version + changelog + journal + docs |
| `beta` | dev/beta/develop (auto-detect) | Lighter: skips docs update (Step 9) |
| (none) | Infer from branch name | feature/* hotfix/* → official; dev/* beta/* → beta; unclear → AskUserQuestion |

## Skills Activated

- `ck:journal` — technical journal entry (Step 8, background)
- `ck:docs update` — project docs sync (Step 9, official only, background)

## Sub-agents Spawned

| Step | Sub-agent | Type | Notes |
|------|-----------|------|-------|
| Step 4 | tester | CK agent | Runs auto-detected test suite |
| Step 5 | code-reviewer | CK agent | Two-pass: critical (security/auth) + informational |
| Step 8 | journal-writer | CK agent | Background, non-blocking |
| Step 9 | docs-manager | CK agent | Background, official mode only |

## Hard Gates (pipeline stops)

1. **On target branch** — abort immediately
2. **Merge conflicts** (non-trivial) — stop, show conflicts
3. **Test failures** — stop, show failures
4. **Critical review issues** — AskUserQuestion per issue (fix/acknowledge/skip)
5. **Secrets in staged diff** — stop, warn user
6. **Major/minor version bump** — AskUserQuestion

## Auto-continue (no user input needed)

- Uncommitted changes → always included
- Patch version bump → auto-decide
- Changelog/commit message → auto-generate
- No version file / no changelog → skip silently
- Push rejected → suggest rebase, retry once

## Token Efficiency

- Steps 4+5: delegated to subagents (not inlined)
- Steps 8+9: run in background (non-blocking)
- Step 2: single gh command batch
- Beta mode auto-skips Step 9
- Skip flags reduce pipeline length

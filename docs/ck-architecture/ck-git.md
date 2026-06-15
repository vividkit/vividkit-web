# /ck:git — Guarded Git Delivery

## Authoritative Flow

```text
Step 1: Choose operation from args or ask when no args.
Step 2: Stage and inspect changed files, stats, and logical groups.
Step 3: Run staged secret scan before any commit.
Step 4: Decide single vs split commits by type, scope, deps/config, and file set.
Step 5: Commit with conventional message.
Step 6: Push only when explicitly requested.
Step 7: For PR, compare remote base/head and create GitHub PR.
Step 8: For merge, fetch/pull target, merge remote source, resolve conflicts, push.
```

## Skills Activated

| Type | Skill |
|------|-------|
| Mandatory | ck:context-engineering |
| Conditional | ck:git |
| Optional | none |

## Sub-agents

`git-manager` handles verbose Git execution. Main agent owns user-facing gates, split decisions, and final summary.

## Mode Selection

| Mode | Trigger | Behavior |
|------|---------|----------|
| Interactive | `/ck:git` | Ask for cm, cp, pr, or merge |
| Commit | `cm` | Stage, scan, split if needed, commit |
| Commit + Push | `cp` | Commit flow plus upstream push |
| Pull Request | `pr [to] [from]` | Push source if needed, create PR from remote diff |
| Merge | `merge [to] [from]` | Merge remote source into target and push target |

## Complexity Routing

Mixed change types, dependency/config changes mixed with code, large unrelated sets, or multiple scopes trigger split commits.

## Hard Gate

Secret scan blocks commits. Push only when asked. Never force-push protected branches. Destructive operations require explicit confirmation. PR and merge use remote branches, not local uncommitted work.

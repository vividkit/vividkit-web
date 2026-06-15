# /ck:retro - Data-Driven Retrospective

Source: local `ck:retro` skill.

## Authoritative Flow

1. Parse timeframe into `SINCE` / `UNTIL`; ask for sprint start if needed.
2. Gather raw git metrics: commits/day, total commits, LOC, hotspots, commit types, authors, active days, changed files, and test file changes.
3. Compute derived metrics: commit frequency, test-to-code ratio, churn rate, active day ratio, and plan completion rate.
4. Scan `plans/` for modified plan files and checkbox completion.
5. Generate report from real data only.
6. If HTML format is selected, wrap output as self-contained HTML.

## Skills Activated

| Type | Tool |
|------|------|
| Required | `git`, shell, `awk`, `sed`, `sort`, `uniq`, `cut`, `wc`, `grep`, `find`, `date`, `head` |
| Optional | `gh` CLI for issue completion metrics |
| Data source | `plans/` checkbox fallback |

## Sub-agents

None. The command is a read-only local analysis flow.

## Mode Selection

| Mode | Meaning |
|------|---------|
| default / `7d` | Last seven days. |
| `2w` | Last two weeks. |
| `1m` | Last month. |
| `sprint` | Sprint range; asks for start when not inferable. |
| `YYYY-MM-DD:YYYY-MM-DD` | Explicit date range. |
| `--compare` | Compare against previous equal-length period. |
| `--team` | Include per-author breakdown. |
| `--format md` | Markdown output. |
| `--format html` | Self-contained HTML output. |

## Hard Gate

- Read-only: no commit, push, or source mutation.
- No invented metrics. Empty data becomes `0` or `N/A`.
- Metrics come from git history plus optional issue data.
- If `gh` is unavailable, issue-based plan completion is `N/A`.
- Keep report under 200 lines or split.
- Sprint timeframe asks user for sprint start if not inferable.

## Artifacts

- `plans/reports/retro-{YYMMDD}-{slug}.md`
- `plans/reports/retro-{YYMMDD}-{slug}.html`
- Sections: Velocity, Code Health, Commit Distribution, File Hotspots, Plan Progress, optional Team Breakdown, Highlights, and Recommendations.

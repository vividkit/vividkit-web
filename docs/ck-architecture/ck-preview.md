# /ck:preview - Visual Preview and Explanation

Source: `~/.agents/skills/preview/SKILL.md`

## Authoritative Flow

```
1. Input - path, generation flag, or no-args operation picker.
2. Route - --stop exits, --html sets output mode, generation flags load generation refs, paths load view mode.
3. Plan Context - active plan writes to {plan_dir}/visuals/, otherwise plans/visuals/.
4. Generate / View - render file preview, explanation, diagram, slides, ASCII, diff, plan review, or recap.
5. Mermaid / HTML Rules - Mermaid uses ck:mermaidjs-v11; HTML outputs must include theme toggle.
6. Open Output - markdown opens through viewer; HTML opens directly in browser.
```

## Skills Activated

| Type | Skill |
|------|-------|
| Conditional | ck:markdown-novel-viewer |
| Conditional | ck:mermaidjs-v11 |
| Conditional | ck:tech-graph |

## Sub-agents

No mandatory sub-agent. Main agent resolves mode, reads files/history/plans, and generates the artifact. Publish-grade diagrams may be handed to `ck:tech-graph`.

## Mode Selection

| Mode | Trigger | Output |
|------|---------|--------|
| View | `/ck:preview <path>` | Browser file/directory preview |
| Markdown generation | `--explain`, `--diagram`, `--slides`, `--ascii` | Markdown / terminal artifact |
| HTML generation | `--html` plus generation flag | Self-contained `.html` |
| HTML review | `--diff`, `--plan-review`, `--recap` | Review-grade HTML |
| Stop | `--stop` | Stops preview server |

## Hard Gate

- `--html --ascii` is unsupported; suggest `--html --diagram`.
- `--diff` requires git context.
- `--plan-review` requires explicit or active plan.
- HTML pages must include a light/dark theme toggle.

## Artifacts

- `{plan_dir}/visuals/{slug}.md` or `.html`
- `plans/visuals/{slug}.md` or `.html` fallback

## Relationships

Typically follows `ck:plan`, `ck:debug`, `ck:ask`, or review work where a visual explanation helps handoff.

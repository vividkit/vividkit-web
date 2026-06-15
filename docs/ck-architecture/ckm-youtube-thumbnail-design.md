# /ckm:youtube-thumbnail-design — Youtube Thumbnail Design

Source: `reference/marketing-stable/claude/skills/youtube-thumbnail-design/SKILL.md`

## Authoritative Flow

1. Invoke /ckm:youtube-thumbnail-design with a concrete target, constraints, and expected output.
2. Load project context, active plans, permissions, and guide rules before acting.
3. Audit relevant files, docs, and command routes; select the correct mode/flag/subcommand.
4. Execute the scoped workflow with specialist skills, tools, or sub-agents only when needed.
5. Validate the artifact, report skipped checks, and hand off the next concrete action.

## Skills Activated

| Type | Skill |
|------|-------|
| Mandatory | ckm:youtube-thumbnail-design |
| Conditional | repo search, validation tools, specialist sub-agents |
| Optional | docs update, report generation, follow-up workflow |

## Sub-agents

The main agent owns routing and final synthesis. Sub-agents are conditional: use them for research, review, testing, design, media, or parallel execution only when the source workflow calls for it.

## Mode Selection

Supported route markers: --brand, --brand-colors.

## Complexity Routing

Small requests stay main-agent-led. Multi-file, research-heavy, design-heavy, or validation-heavy requests should split into specialist lanes and return a concise artifact report.

## Hard Gate

Verify scope, source data, and output before delivery. Report unavailable data and skipped checks explicitly.

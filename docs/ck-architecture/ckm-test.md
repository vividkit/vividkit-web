# /ckm:test:* — Test Commands

Source: command registry and VividKit command catalog

## Authoritative Flow

1. Invoke /ckm:test:* with a concrete target, constraints, and expected output.
2. Load project context, active plans, permissions, and guide rules before acting.
3. Audit relevant files, docs, and command routes; select the correct mode/flag/subcommand.
4. Execute the scoped workflow with specialist skills, tools, or sub-agents only when needed.
5. Validate the artifact, report skipped checks, and hand off the next concrete action.

## Skills Activated

| Type | Skill |
|------|-------|
| Mandatory | ckm:test:* |
| Conditional | repo search, validation tools, specialist sub-agents |
| Optional | docs update, report generation, follow-up workflow |

## Sub-agents

The main agent owns routing and final synthesis. Sub-agents are conditional: use them for research, review, testing, design, media, or parallel execution only when the source workflow calls for it.

## Mode Selection

Supported route markers: :ui, :workflow.

## Complexity Routing

Small requests stay main-agent-led. Multi-file, research-heavy, design-heavy, or validation-heavy requests should split into specialist lanes and return a concise artifact report.

## Hard Gate

No special hard gate beyond normal project permissions, scope control, and validation reporting.

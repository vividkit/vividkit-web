# /ckm:persona — Customer Persona Management

Source: `reference/marketing-stable/.claude/skills/persona/SKILL.md`

## Authoritative Flow

```
Step 1: Input — user invokes /ckm:persona <action>
Step 2: Parse Action — route to create|analyze|update|list workflow
Step 3: Hooks Fire — session-init, dev-rules-reminder, subagent-init
Step 4: Gather Data — AskUserQuestion collects demographics, pain points, goals, buying behavior, channels
Step 5: Agent Work — lead-qualifier defines persona; researcher validates market fit
Step 6: Skills — content-marketing frameworks, assets-organizing for output paths
Step 7: Output — ICP Profile saved to assets/leads/icp-profiles/{persona}.md
```

## Actions (4 variants)

| Action | Purpose | Key Agents/Skills | Complexity |
|--------|---------|-------------------|------------|
| `create` | New persona from scratch | lead-qualifier, researcher, content-marketing | Heavy |
| `analyze` | Audience data analysis | lead-qualifier, analytics-analyst | Medium |
| `update [name]` | Revise existing persona | lead-qualifier (load + validate) | Light |
| `list` | List all personas | Main agent only | Light |

## Agents Used

| Agent | Used By |
|-------|---------|
| lead-qualifier | create, analyze, update |
| researcher | create (market validation) |
| analytics-analyst | analyze (behavior data) |

## Skills Activated

| Skill | Purpose |
|-------|---------|
| content-marketing | Persona frameworks & templates |
| assets-organizing | Standardized output paths |

## Data Gathering (Create Flow)

AskUserQuestion collects 5 dimensions:
1. Demographics (age, role, industry)
2. Pain points and challenges
3. Goals and motivations
4. Buying behavior
5. Preferred channels

## Output

- ICP Profiles → `assets/leads/icp-profiles/{persona}.md`

## Analyze Workflow Detail

- lead-qualifier performs audience analysis
- analytics-analyst processes behavior data
- Identifies segments and patterns
- Generates insights report

## Hard Gate

- `create`: All 5 data dimensions must be gathered before persona generation
- `update`: Existing persona must be loaded and validated before changes

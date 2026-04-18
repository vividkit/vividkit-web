# /ckm:campaign:* — Campaign Planning & Execution

Source: `reference/marketing-stable/.claude/skills/campaign/SKILL.md`

## Authoritative Flow

```
Step 1: Input — user invokes /ckm:campaign:<action> <name>
Step 2: Route — parse subcommand (create|status|analyze|email), load references/<subcommand>.md
Step 3: Brand Context — inject-brand-context.cjs reads user's docs/brand-guidelines.md
Step 4: Execute action-specific workflow (varies by subcommand)
Step 5: Output — campaign assets to assets/campaigns/{date}-{slug}/
```

## Subcommands (4 actions)

| Subcommand | Purpose | Key Agents | Complexity |
|------------|---------|------------|------------|
| `create` | Create comprehensive campaign | campaign-manager, funnel-architect | Heavy |
| `status` | Track campaign progress | analytics-analyst | Light |
| `analyze` | Performance analysis + diagnostics | analytics-analyst, campaign-debugger | Medium |
| `email` | Email campaign management | campaign-manager | Medium |

## Campaign Types Supported

Product Launch, Seasonal/Promotional, Brand Awareness, Lead Generation, Re-engagement

## Agents Used

| Agent | Used By |
|-------|---------|
| campaign-manager | create, email |
| funnel-architect | create |
| analytics-analyst | status, analyze |
| campaign-debugger | analyze |

## Skills Activated

| Type | Skill | Used By |
|------|-------|---------|
| Always | brand-guidelines (inject-brand-context.cjs) | All subcommands |
| Conditional | analytics | status, analyze |
| Conditional | content-marketing | create, email |

## Output Paths

- Campaign briefs → `assets/campaigns/{date}-{slug}/briefs/`
- Campaign creatives → `assets/campaigns/{date}-{slug}/creatives/`
- Campaign reports → `assets/campaigns/{date}-{slug}/reports/`
- Analysis reports → `assets/diagnostics/campaign-audits/{date}-{name}.md`

## Create Subcommand Detail (Heaviest Flow)

```
User → parse args → inject brand context
  → campaign-manager agent (requirements gathering, brief creation)
  → funnel-architect agent (funnel design, channel strategy)
  → output briefs + creatives to assets/campaigns/
```

## Analyze Subcommand Detail

```
User → read campaign files from assets/campaigns/
  → analytics-analyst agent (performance metrics)
  → campaign-debugger agent (issue diagnosis)
  → output audit report to assets/diagnostics/
```

## References (Knowledge Base)

| Topic | File |
|-------|------|
| Campaign Brief | `references/campaign-brief.md` |
| Launch Checklist | `references/launch-checklist.md` |
| Budget Allocation | `references/budget-allocation.md` |
| Optimization Framework | `references/optimization-framework.md` |

# /ckm:email:* — Email Content & Automation

Source: `reference/marketing-stable/.claude/skills/email/SKILL.md`

## Authoritative Flow

```
Step 1: Input — user invokes /ckm:email:<action> <args>
Step 2: Route — parse subcommand (flow|sequence), load references/<subcommand>.md
Step 3: Brand Context — inject-brand-context.cjs reads user's docs/brand-guidelines.md
Step 4: Gather Context — AskUserQuestion for audience, message, CTA
Step 5: Agent Execution — email-wizard + copywriter generate content
Step 6: Output — emails to assets/copy/emails/{date}-{type}-{slug}.md
```

## Subcommands (2 actions)

| Subcommand | Purpose | Key Agents | Complexity |
|------------|---------|------------|------------|
| `flow` | Email automation sequence with branches | email-wizard, copywriter | Heavy |
| `sequence` | Drip sequence with full copy | email-wizard, copywriter | Medium |

## Email Types Supported

newsletter, cold, followup, launch, nurture, welcome, winback

## Flow Types (flow subcommand)

welcome, cart, onboarding, nurture, re-engagement, upsell, renewal, webinar, custom

## Sequence Types (sequence subcommand)

welcome, onboarding, nurture, abandon, winback, launch

## Agents Used

| Agent | Used By |
|-------|---------|
| email-wizard | flow, sequence |
| copywriter | flow, sequence |

## Skills Activated

| Type | Skill | Used By |
|------|-------|---------|
| Always | brand-guidelines (inject-brand-context.cjs) | All subcommands |
| Always | email-marketing | flow, sequence |
| Always | copywriting | flow, sequence |
| Conditional | assets-organizing | flow |

## Output Paths

- Single emails → `assets/copy/emails/{date}-{type}-{slug}.md`
- Flow sequences → `assets/emails/flows/{flow-type}-{date}.md`
- Drip sequences → `assets/copy/emails/{date}-{type}-sequence/`

## Flow Subcommand Detail (Heaviest)

```
User → parse flow type → inject brand context
  → load automation-flows.md + subject-line-formulas.md
  → email-wizard agent (sequence structure, timing, branches)
  → copywriter agent (subject lines, body copy, CTAs)
  → output flow + ASCII diagram + implementation notes
```

## References (Knowledge Base)

| Topic | File |
|-------|------|
| Automation Flows | `references/automation-flows.md` |
| Subject Line Formulas | `references/subject-line-formulas.md` |
| Email Templates | `references/email-templates.md` |
| Deliverability Checklist | `references/deliverability-checklist.md` |

# /ckm:write:* — Creative Copy & Content Writing

Source: `reference/marketing-stable/.claude/skills/write/SKILL.md`

## Authoritative Flow

```
Step 1: Input — user invokes /ckm:write:<variant> <args>
Step 2: Route — parse subcommand, load references/<subcommand>.md
Step 3: Brand Context — inject-brand-context.cjs reads user's docs/brand-guidelines.md
Step 4: Execute subcommand workflow (varies by variant)
Step 5: Output — deliver content (copy, blog, audit report, etc.)
```

## Subcommands (9 variants)

| Subcommand | Purpose | Key Agents/Skills | Complexity |
|------------|---------|-------------------|------------|
| `fast` | Quick creative copy | copywriter agent, ai-multimodal | Light |
| `good` | Thorough creative copy | researcher agents (parallel), planner, copywriter, creativity skill, ckm:design | Heavy |
| `blog` | SEO blog article | seo-specialist, planner, copywriter, seo skill, content-marketing skill | Heavy |
| `blog-youtube` | Blog from YouTube video | youtube skill, researcher, copywriter, seo skill | Heavy |
| `formula` | Copy from formulas (AIDA, PAS, BAB, 4Ps, ACCA, FAB) | copywriter agent | Medium |
| `cro` | Conversion rate optimization | Main agent (no sub-agents), 15-point CRO framework | Medium |
| `enhance` | Fix/improve existing copy | copywriter agent, ai-multimodal, scout | Medium |
| `audit` | Score content quality (0-10) | Main agent, 4 dimensions (Copywriting 40%, SEO 30%, Platform 20%, Brand 10%) | Light |
| `publish` | Audit → auto-fix → publish-ready | Combines audit + auto-fix pipeline | Medium |

## Agents Used

| Agent | Used By |
|-------|---------|
| copywriter | fast, good, blog, blog-youtube, formula, enhance |
| seo-specialist | blog |
| planner | good, blog |
| researcher (parallel) | good, blog-youtube |

## Skills Activated

| Type | Skill | Used By |
|------|-------|---------|
| Conditional | ai-multimodal | fast, good, enhance (screenshot/video input) |
| Conditional | seo | blog, blog-youtube |
| Conditional | content-marketing | blog |
| Conditional | youtube | blog-youtube |
| Conditional | creativity | good |
| Conditional | ckm:design | good (post-writing illustrations) |

## Brand Context Injection

All variants receive dynamic brand context via `inject-brand-context.cjs`:
- Reads user's `docs/brand-guidelines.md`
- Injects brand voice, colors, tone into prompts
- Graceful fallback if no brand docs exist

## Variant Complexity Tiers

- **Light** (fast, audit): Single agent or main agent only, minimal research
- **Medium** (formula, cro, enhance, publish): Focused workflow, 1-2 agents
- **Heavy** (good, blog, blog-youtube): Multi-agent parallel research → plan → write → illustrate

## Hard Gate

- `publish`: Content must pass audit threshold before output
- `good`: Plan must be created before copywriter writes

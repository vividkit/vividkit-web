# /ckm:seo:* — SEO Audits, Keyword Research & Optimization

Source: `reference/marketing-stable/.claude/skills/seo/SKILL.md`

## Authoritative Flow

```
Step 1: Input — user invokes /ckm:seo:<subcommand> <target>
Step 2: Hooks — session-init, dev-rules-reminder inject project + brand context
Step 3: Route — parse subcommand from args, load references/<subcommand>.md
Step 4: Execute subcommand workflow (audit, keywords, pseo, optimize, schema)
Step 5: Output — reports, schema files, or pSEO pages
```

## Subcommands (5 variants)

| Subcommand | Purpose | Key Agents/Skills | Complexity |
|------------|---------|-------------------|------------|
| `audit` | Technical SEO audit + Core Web Vitals | seo-specialist, audit-core-web-vitals.cjs | Heavy |
| `keywords` | Keyword research via ReviewWeb.site API | attraction-specialist, analyze-keywords.cjs | Medium |
| `pseo` | Programmatic SEO template generation | seo-specialist, pseo-generator.cjs | Heavy |
| `optimize` | On-page SEO optimization | seo-specialist, meta-tag-templates ref | Medium |
| `schema` | JSON+LD structured data generation | seo-specialist, generate-schema.cjs, validate-schema.cjs | Light |

## Agents Used

| Agent | Used By |
|-------|---------|
| seo-specialist | audit, pseo, optimize, schema |
| attraction-specialist | keywords |

## Skills Activated

| Type | Skill | Purpose |
|------|-------|---------|
| Core | seo | SEO domain knowledge + scripts |
| Conditional | brand-guidelines | Brand context injection for content |
| Conditional | scout | Codebase scan for existing SEO setup |

## External APIs

| API | Used By | Purpose |
|-----|---------|---------|
| ReviewWeb.site | keywords | Keyword volume, difficulty, CPC data |
| Google Search Console | audit, keywords | Queries, clicks, impressions, CTR, position |
| PageSpeed Insights | audit | Core Web Vitals measurement |

## Scripts

| Script | Purpose |
|--------|---------|
| `gsc-auth.cjs` | OAuth2 auth for Google Search Console |
| `gsc-query.cjs` | Query GSC analytics, sitemaps, URL inspection |
| `analyze-keywords.cjs` | Keyword research via ReviewWeb.site API |
| `audit-core-web-vitals.cjs` | Core Web Vitals measurement |
| `generate-sitemap.cjs` | XML sitemap generation |
| `generate-schema.cjs` | JSON+LD schema generator |
| `validate-schema.cjs` | JSON-LD validation |
| `pseo-generator.cjs` | Programmatic SEO page generation |

## Output Locations

- Audit reports → `assets/reports/seo/{date}-{domain}-audit.md`
- Keyword reports → `assets/reports/seo/{date}-{topic}-keywords.md`
- CWV reports → `assets/reports/seo/{date}-{domain}-cwv.md`
- Schema files → `assets/seo/schemas/{page}-schema.json`
- pSEO pages → generated from templates via pseo-generator.cjs

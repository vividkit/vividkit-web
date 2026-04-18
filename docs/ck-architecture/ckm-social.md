# /ckm:social:* — Social Media Content & Scheduling

Source: `reference/marketing-stable/.claude/skills/social/SKILL.md`

## Authoritative Flow

```
Step 1: Input — user invokes /ckm:social <platform> <type> OR /ckm:social:schedule
Step 2: Route — parse platform + content type from arguments; load references/<subcommand>.md
Step 3: Platform Agent — social-media-manager agent applies platform best practices
Step 4: Content Creation — content-creator + copywriter agents draft copy
Step 5: Formatting — platform-specific formatting, hashtag research, character limits
Step 6: Output — deliver to assets/posts/{platform}/{date}-{slug}.md
```

## Subcommands

| Subcommand | Purpose | Key Agents | Complexity |
|------------|---------|------------|------------|
| *(default)* | Create social post/thread/carousel/reel | social-media-manager, content-creator, copywriter | Medium |
| `schedule` | Schedule posts via API | social-media-manager, schedule-post.js script | Light |

## Platforms Supported

`twitter`/`x`, `linkedin`, `instagram`, `tiktok`, `youtube`, `facebook`, `threads`

## Content Types

`post`, `thread`, `carousel`, `story`, `reel`

## Agents Used

| Agent | Role |
|-------|------|
| social-media-manager | Platform best practices, posting guidelines |
| content-creator | Content ideation and structure |
| copywriter | Final copy writing and hook optimization |

## References (Knowledge Base)

| Topic | File |
|-------|------|
| Platform Specs | `references/platform-specs.md` |
| Hook Writing | `references/hook-writing.md` |
| Engagement Templates | `references/engagement-templates.md` |
| Thread Templates | `references/thread-templates.md` |
| Posting Best Practices | `references/posting-best-practices.md` |
| Rate Limits & Errors | `references/rate-limits-errors.md` |
| Unified API Services | `references/unified-api-services.md` |
| Platform Workflows | `references/x-twitter-workflow.md`, `linkedin-workflow.md`, etc. |

## Scripts

| Script | Purpose |
|--------|---------|
| `scripts/schedule-post.js` | Schedule posts via API |
| `scripts/validate-post-content.js` | Validate content against platform rules |

## Routing

1. Parse subcommand from arguments (first word)
2. Load corresponding `references/{subcommand}.md`
3. Execute with remaining arguments

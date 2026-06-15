# ClaudeKit Architecture Notes

Reference docs for VividKit "How ClaudeKit Works" guide accuracy.

## Commands/Workflows

- [ck-brainstorm.md](ck-brainstorm.md) — /ck:brainstorm solution brainstorming with brutal honesty
- [ck-plan.md](ck-plan.md) — /ck:plan implementation planning (Fast/Hard/Parallel/Two modes)
- [ck-cook.md](ck-cook.md) — /ck:cook full build pipeline (Interactive/Auto/Fast/Parallel/Code modes)
- [ck-fix.md](ck-fix.md) — /ck:fix bug fix pipeline (Standard/Quick/Deep/Parallel workflows)
- [ck-frontend-design.md](ck-frontend-design.md) — /ck:frontend-design polished frontend interfaces from designs/screenshots/videos
- [ck-ship.md](ck-ship.md) — /ck:ship automated ship pipeline (merge, test, review, commit, push, PR)
- [ck-code-review.md](ck-code-review.md) — /ck:code-review evidence-based review: spec compliance → code quality → final verification
- [ck-test.md](ck-test.md) — /ck:test testing & QA pipeline (unit/integration/e2e/UI)
- [ck-deploy.md](ck-deploy.md) — /ck:deploy auto-detect platform deploy with cost optimization
- [ck-predict.md](ck-predict.md) — /ck:predict 5-persona impact analysis before implementation
- [ck-bootstrap.md](ck-bootstrap.md) — /ck:bootstrap end-to-end project scaffolding (full/auto/fast/parallel)
- [ck-autoresearch.md](ck-autoresearch.md) — /ck:autoresearch family router for bounded autonomous iteration
- [ck-backend-development.md](ck-backend-development.md) — /ck:backend-development backend capability router
- [ck-better-auth.md](ck-better-auth.md) — /ck:better-auth TypeScript authentication setup
- [ck-context-engineering.md](ck-context-engineering.md) — /ck:context-engineering context budget and degradation diagnostics
- [ck-docs-seeker.md](ck-docs-seeker.md) — /ck:docs-seeker current documentation lookup and fallback routing
- [ck-ai-artist.md](ck-ai-artist.md) — /ck:ai-artist AI image generation with validation and provider routing
- [ck-agentize.md](ck-agentize.md) — /ck:agentize wrap existing code as CLI, MCP server, or both
- [ck-cti-expert.md](ck-cti-expert.md) — /ck:cti-expert CTI and OSINT investigation workflow
- [ck-retro.md](ck-retro.md) — /ck:retro data-driven retrospective from git and plans
- [ck-graphify.md](ck-graphify.md) — /ck:graphify queryable knowledge graph for code and docs
- [ck-git.md](ck-git.md) — /ck:git guarded commit, push, PR, and merge workflow
- [ck-debug.md](ck-debug.md) — /ck:debug root-cause investigation before fixes
- [ck-agent-browser.md](ck-agent-browser.md) — /ck:agent-browser browser automation and QA evidence workflow
- [ck-ai-multimodal.md](ck-ai-multimodal.md) — /ck:ai-multimodal media analysis and generation routes
- [ck-ask.md](ck-ask.md) — /ck:ask technical and architecture consultation
- [ck-security.md](ck-security.md) — /ck:security STRIDE + OWASP security audit with optional red-team/fix modes
- [ck-repomix.md](ck-repomix.md) — /ck:repomix package repositories into AI-ready context
- [ck-llms.md](ck-llms.md) — /ck:llms generate llms.txt documentation indexes
- [ck-scenario.md](ck-scenario.md) — /ck:scenario generate edge cases and test scenarios
- [ck-docs.md](ck-docs.md) — /ck:docs initialize, update, and summarize project documentation
- [ck-xia.md](ck-xia.md) — /ck:xia feature extraction, comparison, and porting from another repo
- [ck-security-scan.md](ck-security-scan.md) — /ck:security STRIDE + OWASP security audit with auto-fix
- [ck-team.md](ck-team.md) — /ck:team Agent Teams multi-session orchestration (research / cook / review / debug)
- [ck-preview.md](ck-preview.md) — /ck:preview file viewer and visual explanation generator
- [ck-init.md](ck-init.md) — ck init project/global ClaudeKit installation flow
- [ck-vibe.md](ck-vibe.md) — /ck:vibe autonomous issue-to-PR pipeline (plan → cook/fix → ship → review → merge)
- [ck-review-pr.md](ck-review-pr.md) — /ck:review-pr GitHub PR review with optional fix loop and reply
- [ck-ghpm.md](ck-ghpm.md) — /ck:ghpm GitHub project management for humans and AI agents
- [ck-tech-graph.md](ck-tech-graph.md) — /ck:tech-graph publish-grade SVG+PNG diagrams across 8 styles
- [ck-html-video.md](ck-html-video.md) — /ck:html-video HTML/CSS/JS templates rendered to local MP4

- [ckm-ab-test-setup.md](ckm-ab-test-setup.md) — /ckm:ab-test-setup When the user wants to plan, design, or implement an A/B test or experiment. Also use when the user mentions "A/B test," "split test," "experiment," "test this change," "variant copy," "multivariate test," or "hypothesis." For tracking implementation, see analytics-tracking.
- [ckm-ads-management.md](ckm-ads-management.md) — /ckm:ads-management Activate for paid advertising campaigns on Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads. Includes ad copywriting, audience targeting, budget optimization, A/B testing, ROAS tracking, and AI creative asset generation (images & videos) with ai-multimodal and ai-artist skills using Gemini Nano Banana Pro and Veo 3.1.
- [ckm-affiliate-marketing.md](ckm-affiliate-marketing.md) — /ckm:affiliate-marketing Build high-converting SaaS affiliate programs with 20-40% commissions, KOL/KOC partnerships, and fraud prevention. Covers platform selection (PartnerStack, FirstPromoter, Rewardful), commission structures (recurring vs one-time, tiered), influencer outreach strategies, FTC/GDPR compliance, risk management, and case studies (Dropbox 3900%, PayPal 100M users). Use for designing affiliate programs, recruiting partners, optimizing conversion rates, preventing fraud, or scaling referral revenue.
- [ckm-analytics.md](ckm-analytics.md) — /ckm:analytics Activate for marketing analytics, KPI tracking, reporting dashboards, attribution analysis, and performance optimization. Use when analyzing campaign data, creating reports, or measuring marketing ROI.
- [ckm-analyze.md](ckm-analyze.md) — /ckm:analyze 💡💡 Analytics and performance reports
- [ckm-assets-organizing.md](ckm-assets-organizing.md) — /ckm:assets-organizing Organize all outputs from slash commands and subagents in assets/ directory by topics, date format, and slugs.
- [ckm-banner-design.md](ckm-banner-design.md) — /ckm:banner-design Design banners for social media, ads, website heroes, creative assets, and print. Multiple art direction options with AI-generated visuals. Actions: design, create, generate banner. Platforms: Facebook, Twitter/X, LinkedIn, YouTube, Instagram, Google Display, website hero, print. Styles: minimalist, gradient, bold typography, photo-based, illustrated, geometric, retro, glassmorphism, 3D, neon, duotone, editorial, collage. Uses ui-ux-pro-max, frontend-design, ai-artist, ai-multimodal skills.
- [ckm-brand.md](ckm-brand.md) — /ckm:brand Brand voice, visual identity, messaging frameworks, asset management, brand consistency. Activate for branded content, tone of voice, marketing assets, brand compliance, style guides.
- [ckm-cip-design.md](ckm-cip-design.md) — /ckm:cip-design Corporate Identity Program design with 50 deliverables, 20 styles, 20 industries. Generate CIP mockups with Gemini Nano Banana (Flash/Pro). Actions: design, create, generate brand identity. Deliverables: business card, letterhead, signage, vehicle, apparel, packaging. Styles: corporate, luxury, minimal, modern.
- [ckm-claude-code.md](ckm-claude-code.md) — /ckm:claude-code Activate when users ask about Claude Code installation, slash commands (/plan, /fix, /content, /docs, /design, /git), creating/managing Agent Skills, configuring MCP servers, setting up hooks/plugins, IDE integration (VS Code, JetBrains), CI/CD workflows, enterprise deployment (SSO, RBAC, sandboxing), troubleshooting authentication/performance issues, or advanced features (extended thinking, caching, checkpointing).
- [ckm-competitor.md](ckm-competitor.md) — /ckm:competitor Competitive analysis, alternative pages, vs comparisons, SEO competitor content, market positioning, and battlecard generation.
- [ckm-content-hub.md](ckm-content-hub.md) — /ckm:content-hub Browser-based asset gallery for managing marketing assets. Visual grid with filter/search, brand context sidebar, and actions (preview, edit, generate). R2-ready manifest for future cloud sync. Use when browsing assets, managing content library, or generating new assets with brand context.
- [ckm-content-marketing.md](ckm-content-marketing.md) — /ckm:content-marketing Activate for content strategy, editorial calendars, content pillar mapping, blog planning, and content audit. Use when planning content programs, creating editorial workflows, or building topic clusters.
- [ckm-creativity.md](ckm-creativity.md) — /ckm:creativity Creative direction intelligence. 55 styles, 18 platforms, 12 voiceover types, 17 music genres, 30 campaign categories. Actions: create, design, plan, direct, brief creative campaigns. Projects: ads, videos, social content, commercials, brand films. Styles: minimalist, maximalist, nostalgic, cinematic, UGC, luxury, futuristic, emotional. Topics: visual style, platform specs, voiceover, music, color palette, audience targeting.
- [ckm-dashboard.md](ckm-dashboard.md) — /ckm:dashboard Launch and manage the Marketing Dashboard
- [ckm-debugging.md](ckm-debugging.md) — /ckm:debugging Systematic debugging framework ensuring root cause investigation before fixes. Includes four-phase debugging process, backward call stack tracing, multi-layer validation, and verification protocols. Use when encountering bugs, test failures, unexpected behavior, performance issues, or before claiming work complete. Prevents random fixes, masks over symptoms, and false completion claims.
- [ckm-design-system.md](ckm-design-system.md) — /ckm:design-system Token architecture, component specifications, and slide generation. Three-layer tokens (primitive→semantic→component), CSS variables, spacing/typography scales, component specs, strategic slide creation. Use for design tokens, systematic design, brand-compliant presentations.
- [ckm-elevenlabs.md](ckm-elevenlabs.md) — /ckm:elevenlabs Generate speech, clone voices, create sound effects & music with ElevenLabs API. TTS, voice design, audio generation, conversational AI agents.
- [ckm-form-cro.md](ckm-form-cro.md) — /ckm:form-cro When the user wants to optimize any form that is NOT signup/registration — including lead capture forms, contact forms, demo request forms, application forms, survey forms, or checkout forms. Also use when the user mentions "form optimization," "lead form conversions," "form friction," "form fields," "form completion rate," or "contact form." For signup/registration forms, see signup-flow-cro. For popups containing forms, see popup-cro.
- [ckm-free-tool-strategy.md](ckm-free-tool-strategy.md) — /ckm:free-tool-strategy When the user wants to plan, evaluate, or build a free tool for marketing purposes — lead generation, SEO value, or brand awareness. Also use when the user mentions "engineering as marketing," "free tool," "marketing tool," "calculator," "generator," "interactive tool," "lead gen tool," "build a tool for leads," or "free resource." This skill bridges engineering and marketing — useful for founders and technical marketers.
- [ckm-funnel.md](ckm-funnel.md) — /ckm:funnel 💡💡 Funnel design and optimization
- [ckm-gamification-marketing.md](ckm-gamification-marketing.md) — /ckm:gamification-marketing Design gamified marketing campaigns using points, badges, leaderboards, streaks, challenges. Use for loyalty programs, referral campaigns, onboarding flows, engagement boosts, email gamification. Provides mechanics selection, psychology alignment, strategy docs, templates, KPIs.
- [ckm-hub.md](ckm-hub.md) — /ckm:hub Open Content Hub + Marketing Dashboard
- [ckm-init.md](ckm-init.md) — /ckm:init 💡💡💡💡 Initialize marketing project
- [ckm-kit-builder.md](ckm-kit-builder.md) — /ckm:kit-builder Build ClaudeKit Marketing components - skills, agents, commands, workflows. Use when creating new automation, extending marketing capabilities, or understanding kit structure. Includes templates, examples, and init scripts.
- [ckm-launch-strategy.md](ckm-launch-strategy.md) — /ckm:launch-strategy When the user wants to plan a product launch, feature announcement, or release strategy. Also use when the user mentions 'launch,' 'Product Hunt,' 'feature release,' 'announcement,' 'go-to-market,' 'beta launch,' 'early access,' 'waitlist,' or 'product update.' This skill covers phased launches, channel strategy, and ongoing launch momentum.
- [ckm-logo-design.md](ckm-logo-design.md) — /ckm:logo-design Logo design intelligence with 55 styles, 30 color palettes, 25 industries. Generate logos with Gemini Nano Banana model, search styles/colors/industries. Actions: design, create, generate logo. Industries: tech, healthcare, finance, food, fashion, fitness. Styles: minimalist, vintage, luxury, geometric, abstract, mascot, emblem. Features: AI prompt generation, design briefs, color psychology.
- [ckm-marketing-dashboard.md](ckm-marketing-dashboard.md) — /ckm:marketing-dashboard Local-first marketing command center for solopreneurs. Manage campaigns, content, and assets with Claude Code AI automation.
- [ckm-marketing-ideas.md](ckm-marketing-ideas.md) — /ckm:marketing-ideas When the user needs marketing ideas, inspiration, or strategies for their SaaS or software product. Also use when the user asks for 'marketing ideas,' 'growth ideas,' 'how to market,' 'marketing strategies,' 'marketing tactics,' 'ways to promote,' or 'ideas to grow.' This skill provides 140 proven marketing approaches organized by category.
- [ckm-marketing-planning.md](ckm-marketing-planning.md) — /ckm:marketing-planning Plan marketing strategies, campaigns, content calendars, and initiatives using proven frameworks (RACE, SOSTAC, STP). Activates marketing-research for data-driven insights.
- [ckm-marketing-psychology.md](ckm-marketing-psychology.md) — /ckm:marketing-psychology When the user wants to apply psychological principles, mental models, or behavioral science to marketing. Also use when the user mentions 'psychology,' 'mental models,' 'cognitive bias,' 'persuasion,' 'behavioral science,' 'why people buy,' 'decision-making,' or 'consumer behavior.' This skill provides 70+ mental models organized for marketing application.
- [ckm-marketing-research.md](ckm-marketing-research.md) — /ckm:marketing-research Research market trends, competitors, audience insights, and marketing best practices. Use before marketing-planning for data-driven strategy.
- [ckm-onboarding-cro.md](ckm-onboarding-cro.md) — /ckm:onboarding-cro When the user wants to optimize post-signup onboarding, user activation, first-run experience, or time-to-value. Also use when the user mentions "onboarding flow," "activation rate," "user activation," "first-run experience," "empty states," "onboarding checklist," "aha moment," or "new user experience." For signup/registration optimization, see signup-flow-cro. For ongoing email sequences, see email-sequence.
- [ckm-paid-ads.md](ckm-paid-ads.md) — /ckm:paid-ads When the user wants help with paid advertising campaigns on Google Ads, Meta (Facebook/Instagram), LinkedIn, Twitter/X, or other ad platforms. Also use when the user mentions 'PPC,' 'paid media,' 'ad copy,' 'ad creative,' 'ROAS,' 'CPA,' 'ad campaign,' 'retargeting,' or 'audience targeting.' This skill covers campaign strategy, ad creation, audience targeting, and optimization.
- [ckm-play.md](ckm-play.md) — /ckm:play >
- [ckm-pricing-strategy.md](ckm-pricing-strategy.md) — /ckm:pricing-strategy When the user wants help with pricing decisions, packaging, or monetization strategy. Also use when the user mentions 'pricing,' 'pricing tiers,' 'freemium,' 'free trial,' 'packaging,' 'price increase,' 'value metric,' 'Van Westendorp,' 'willingness to pay,' or 'monetization.' This skill covers pricing research, tier structure, and packaging strategy.
- [ckm-referral-program-building.md](ckm-referral-program-building.md) — /ckm:referral-program-building Build referral programs for SaaS/digital products. Covers reward structures (two-sided, tiered, multi-step), platform selection (Rewardful, ReferralCandy, Viral Loops, FirstPromoter), technical implementation (tracking, attribution, API patterns), fraud prevention, email templates, and KPI metrics. Use for designing viral growth loops, implementing refer-a-friend features, or optimizing existing referral systems.
- [ckm-slides.md](ckm-slides.md) — /ckm:slides Create strategic HTML presentations with Chart.js, design tokens, responsive layouts, copywriting formulas, and contextual slide strategies.
- [ckm-storage.md](ckm-storage.md) — /ckm:storage S3 storage operations - upload, sync, list, get URLs
- [ckm-youtube.md](ckm-youtube.md) — /ckm:youtube Convert YouTube videos to blog posts, infographics, social content. Download video/audio, get captions/transcripts, generate AI summaries, analyze comments via VidCap.xyz API.
- [ckm-youtube-thumbnail-design.md](ckm-youtube-thumbnail-design.md) — /ckm:youtube-thumbnail-design Design YouTube thumbnails with 17 styles, niche-specific guides, and CTR optimization. Generate complete thumbnails with text using Gemini Nano Banana Pro (4K text rendering). Actions: design, create, generate thumbnail. Niches: tech, gaming, education, cooking, fitness, business. Styles: facecam, before-after, listicle, diagram, whiteboard, bold-text, mystery, dark-dramatic. Features: AI generation with text baked in, brand identity, reference face, arrows, Google Font support.

- [ckm-kanban.md](ckm-kanban.md) — /ckm:kanban AI agent orchestration board (Coming Soon)
- [ckm-skill.md](ckm-skill.md) — /ckm:skill:* ckm:skill command family
- [ckm-use-mcp.md](ckm-use-mcp.md) — /ckm:use-mcp Utilize tools of Model Context Protocol (MCP) servers

- [ck-plans-kanban.md](ck-plans-kanban.md) — /ck:plans-kanban Plans dashboard server with progress tracking and timeline visualization.
- [ck-project-organization.md](ck-project-organization.md) — /ck:project-organization Organize files, directories, and content structure in any project. Use when creating files, determining output paths, organizing existing assets, or standardizing project layout.

## Shared

- [shared-concepts.md](shared-concepts.md) — Agent list, Skills vs Agents, Hooks lifecycle

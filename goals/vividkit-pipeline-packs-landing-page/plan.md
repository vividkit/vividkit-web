# VividKit Pipeline Packs Landing Page Plan

## Solution Approach

Create a separate VividKit Pipeline Packs project outside `vividkit-web`, using Astro for the landing site and Cloudflare Worker for future integration points. The first featured offer is the Workflow Optimization Pipeline implementation kit: cmux + NotebookLM + Obsidian + Codex/Claude Code. Keep the first release static and pre-sell/waitlist oriented; do not build checkout, accounts, entitlement checks, gated content, or Discord automation.

## Ordered Steps

1. Create the separate project shell.
   - Target path: `/Users/thieunv/projects/personal/vividkit-pipeline-packs`.
   - Scaffold as a small Astro project.
   - Include Cloudflare Worker/Pages compatibility from the start, either through the Astro Cloudflare adapter or a minimal Worker entry for later form/payment/entitlement integration.
   - Reuse VividKit visual identity at a lightweight level: typography feel, dark/light support, polished product-page sections, and brand naming.
   - Do not add code to `vividkit-web` for the page itself.
   - Verification: new project has its own `package.json`, Astro source tree, build command, and Cloudflare deployment/config surface.

2. Build the landing page.
   - Implement a bilingual EN/VI landing page inside the new project.
   - Use a practical product-page structure: hero, pipeline map, included artifacts, step-by-step operating flow, early access price, support boundary, future pack teasers, FAQ, and CTA.
   - Hero must sell implementation kit value, not generic premium content.
   - Include these concrete pack contents: playbook, setup guide, templates, artifact examples, failure modes, operating rhythm, pack updates, private buyer Discord for shared Q&A and artifact issue reports.
   - State clearly: no 1:1 setup/debug support is included.
   - Verification: built HTML contains `Workflow Optimization Pipeline`, `cmux`, `NotebookLM`, `Obsidian`, `Codex`, `Claude Code`, `$9`, `private buyer`, and `1:1`.

3. Add bilingual copy structure.
   - Keep copy data in the new project, either as typed locale files or simple page-local constants.
   - Keep EN copy crisp and product-like.
   - Keep VI copy natural and practical; avoid over-polished marketing tone.
   - Do not use literal backticks in rendered prose unless the component renders real `<code>` elements.
   - Verification: built EN and VI pages show localized title, price, CTA, support boundary, and no missing translation keys/text placeholders.

4. Define cross-site entry strategy without implementing it in this first pass.
   - Record the eventual entry points from `vividkit-web`: Guides home card, footer resource link, or header CTA.
   - Treat those as a later integration after the separate landing project exists.
   - Do not replace existing Promotions/Deals behavior.
   - Verification for this goal: plan/spec documents the desired source-site links, but no `vividkit-web` code changes are required.

5. Implement pre-sell/waitlist CTA behavior.
   - Use a static CTA to join early access, either anchoring to an on-page form or linking to the existing waitlist form.
   - If using a form, include page-specific subject/message context such as `Pipeline Packs Early Access`.
   - Do not add real checkout or payment provider logic.
   - Verification: page CTA is visible on desktop/mobile and does not point to checkout/paywall.

6. Validate UI and content.
   - Run the new project's build command.
   - Run built HTML assertions for:
     - English landing page output.
     - Vietnamese landing page output.
   - Browser-check desktop and mobile viewports if a dev server is started during implementation.

## Verification Matrix

| Fact | Verification |
|---|---|
| Sells implementation kits, not premium articles | Built page hero and section copy contains Pipeline Packs / implementation kit framing and avoids premium article framing |
| First featured pack is Workflow Optimization Pipeline | Built EN/VI pages contain the pipeline name and toolchain |
| Audience is automation builders / AI power users | Hero/subhero explicitly addresses repeatable operating workflow pain |
| Page promise includes playbook, steps, templates, artifacts, failures, operating rhythm | Included-artifacts and workflow sections list these items |
| CTA is pre-sell/waitlist | CTA text and href do not use checkout/payment routes |
| $9 early access per pack | Pricing section states $9 early access as first-cohort pack price |
| Discord boundary | Support section states private buyer Discord is for shared Q&A, updates, and artifact issue reports |
| No 1:1 support | Support section explicitly excludes 1:1 setup/debug support |
| Separate project | Implementation target is `/Users/thieunv/projects/personal/vividkit-pipeline-packs`, not `vividkit-web` |
| Astro + Cloudflare Worker stack | Project uses Astro and includes Cloudflare Worker/Pages deployment readiness |
| Scope excludes checkout/paywall | No new payment/auth/entitlement routes, scripts, or dependencies |
| Practical visual direction | Page uses dense pipeline/artifact sections instead of generic SaaS hero copy |
| VividKit brand retained | Page title/copy uses VividKit Pipeline Packs or VividKit Automation Lab |

## Risks and Open Questions

- Domain purchase is not part of first implementation. Deploy/preview can use a temporary Cloudflare URL until the user buys the domain.
- The current generic VividKit waitlist form may not capture page-specific intent unless the new project adds a hidden subject/message context or a dedicated lightweight form.
- If the page is made too guide-like, buyers may perceive it as free content. Keep the copy focused on deliverables and implementation artifacts.

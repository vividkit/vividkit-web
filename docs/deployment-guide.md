# VividKit Deployment Guide

## Platform

VividKit deploys as a static Astro site on Cloudflare Pages.

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `24`
- Production domain: `https://vividkit.dev`

The site uses `output: 'static'` in `astro.config.mjs`, so it does not need a Cloudflare adapter. Add the Astro Cloudflare adapter only when the app needs on-demand rendering, sessions, server actions, or other runtime-only features.

## Environment Variables

Configure these in Cloudflare Pages project settings for production and preview environments.

| Variable | Required | Purpose |
|---|---:|---|
| `PUBLIC_SITE_URL` | Yes | Canonical site URL for SEO metadata, sitemap, and robots.txt. Use `https://vividkit.dev` in production. |
| `PUBLIC_WEB3FORMS_KEY` | Yes | Web3Forms access key for the waitlist form. |
| `PUBLIC_CLAUDEKIT_REFERRAL_URL` | Yes | ClaudeKit referral destination. |
| `PUBLIC_GIVEAWAY_API_URL` | Yes | Existing Cloudflare Worker base URL for CK coupon/deals flows. No trailing slash. |
| `PUBLIC_TURNSTILE_SITE_KEY` | Yes | Cloudflare Turnstile site key for claim forms. |
| `PUBLIC_CLAUDEKIT_COUPON_END_AT` | Yes | Coupon deadline displayed by the deals page. |
| `PUBLIC_DEALS_CAMPAIGN_ENDED` | No | Set `true` to show the ended-campaign layout. |
| `PUBLIC_DEALS_CAMPAIGN_CLAIMED` | No | Ended-banner claimed count override. |
| `PUBLIC_DEALS_CAMPAIGN_TOTAL` | No | Ended-banner total count override. |
| `PUBLIC_GA_ID` | No | Google Analytics 4 measurement ID. |
| `PUBLIC_FB_PIXEL_ID` | No | Facebook/Meta Pixel ID. |

The giveaway/coupon backend remains a separate Cloudflare Worker. Migrating the static site does not change that Worker, its Durable Objects, or its environment variables.

## Redirects

Cloudflare Pages reads redirects from `public/_redirects`, which is copied to `dist/_redirects` during the Astro build.

Current legacy redirects:

```text
/guides/resume /guides/session-recovery 301
/vi/guides/resume /vi/guides/session-recovery 301
/guides/mobile-coding /guides/remote-control 301
/vi/guides/mobile-coding /vi/guides/remote-control 301
```

Keep route migrations here unless a future Workers/Pages Functions route owns the same path. Cloudflare Pages applies `_redirects` only to static asset responses, not to matching Pages Functions.

## DNS Cutover

1. Create or select the Cloudflare Pages project for this repository.
2. Set production branch and build settings.
3. Add production environment variables.
4. Deploy a preview and verify the checklist below.
5. Add `vividkit.dev` as the custom domain in Cloudflare Pages.
6. Move DNS records to the Cloudflare Pages target only after preview verification passes.
7. Keep the old Vercel project available until the Cloudflare production URL passes smoke checks.

## Verification

Run locally before deploy:

```bash
npm install
npm run build
```

Verify build output:

```bash
test -f dist/index.html
test -f dist/guides/index.html
test -f dist/vi/index.html
test -f dist/robots.txt
test -f dist/sitemap.xml
test -f dist/404.html
test -f dist/_redirects
```

Verify deployed production or preview:

```bash
curl -I https://vividkit.dev/
curl -I https://vividkit.dev/robots.txt
curl -I https://vividkit.dev/sitemap.xml
curl -I https://vividkit.dev/guides/resume
curl -I https://vividkit.dev/vi/guides/mobile-coding
```

Expected:

- Home, English guides, and Vietnamese guides return `200`.
- Old guide URLs return `301` to their current routes.
- `robots.txt` references `https://vividkit.dev/sitemap.xml`.
- Sitemap, canonical links, and hreflang links use `https://vividkit.dev`.
- Waitlist form still posts to Web3Forms when `PUBLIC_WEB3FORMS_KEY` is set.
- Deals/coupon UI still calls `PUBLIC_GIVEAWAY_API_URL`.
- Turnstile still loads on claim flows.
- GA/FB scripts render only when their public IDs are configured.
- No Vercel Analytics script appears in generated HTML.

## Rollback

If Cloudflare production verification fails after DNS cutover:

1. Repoint the domain to the previous Vercel deployment.
2. Keep Cloudflare Pages preview active for debugging.
3. Fix and redeploy Cloudflare.
4. Repeat the verification checklist before cutting over again.

Do not change public routes or content during rollback unless a separate incident fix requires it.

## Future Premium Content

Static hosting is not enough for premium content protection. If VividKit later needs payment-gated content, introduce Cloudflare Workers or Pages Functions for the protected slice only.

Trigger conditions:

- Auth/session handling.
- Payment provider webhooks.
- Entitlement checks.
- Server-rendered protected pages.
- Non-public premium content responses.

Keep public docs and marketing pages static unless they need runtime access control.

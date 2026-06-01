# From Coupon Claim to a Clocked Draw

**Date**: 2026-05-18 22:45
**Severity**: Medium
**Component**: `vividkit-web` + `vividkit-giveaway-api`
**Status**: Resolved

## What Happened

The ClaudeKit lucky draw stopped being a loose claim-time flow and became a scheduled draw with server-owned timing, daily seats, and explicit reveal/claim windows. The backend now computes raffle state from env-driven schedule config, exposes `/raffle/config` and `/raffle/results`, persists registrations, winners, claims, and rollover seats, and adds admin draw/rollover routes. The frontend now renders the scheduled-draw UI, countdown, eligibility states, hidden admin surface, and the claim-proof handoff.

## The Brutal Truth

The painful part was the same one reviewers kept catching: if the client is allowed to infer draw state, it lies. We would have shipped a brittle raffle that flashed the wrong state, collided with the existing GitHub callback flow, or exposed admin actions without proving the browser path actually worked. That would have been a dumb production bug.

## Technical Details

- Backend schedule engine: `src/durable-objects/raffle-schedule.ts` parses `RAFFLE_TIMEZONE`, `RAFFLE_*_TIME`, `RAFFLE_*_SEATS`, computes UTC campaign windows, and derives `before_open` / `registration_open` / `registration_closed` / `draw_ready`.
- Backend routing: `src/durable-objects/giveaway-manager.ts` now serves `/do/raffle/register`, `/do/raffle/results`, `/do/raffle/claim-prize`, `/do/admin/raffle/run-draw`, and `/do/admin/raffle/rollover-expired`.
- OAuth scope split: `src/auth/github-oauth.ts` now accepts `raffle_register` and `raffle_claim_prize`; `src/index.ts` carries `vk_action` and `vk_nonce` through the callback instead of reusing the generic claim path.
- Frontend: `src/components/guides/deals/deals-lucky-draw-section.astro`, `src/components/guides/deals/deals-lucky-draw-widget.astro`, and `src/scripts/deals-scheduled-draw-state.ts` handle the countdown, session token, Turnstile, registration, winner proof, and public results.
- Reviewer blocker fixes: `src/components/guides/deals/deals-claim-widget.astro` stopped consuming the lucky-draw callback as a generic `code` return, `src/styles/global.css` added `[x-cloak] { display: none !important; }`, and the backend now gates registration/draw by the exact campaign window, returns a generic pre-reveal claim error, and runs a second 22:20 ICT cron for post-reveal rollover.
- Validation: backend `npm run typecheck` passed; backend `npm test` passed `126` tests across `16` files; frontend `npm run build` passed with `63` pages built; backend `npm run deploy:dry` passed with the existing Wrangler multi-environment warning. I also hit one self-inflicted false start, `CACError: Unknown option --runInBand`, before rerunning Vitest the right way.

## What We Tried

- Kept the manual paid-order allowlist import instead of pretending an upstream order-check API existed.
- Kept draw eligibility server-side in the Durable Object instead of letting the browser decide.
- Kept admin secrets in session storage and admin pages hidden behind explicit routes, not casual UI links.

## Root Cause Analysis

The original model was coupon-only and event-agnostic. That was the wrong abstraction for a scheduled raffle. Once the feature needed time windows, deterministic reveal order, and rollover handling, the server had to own the schedule and the state machine. Anything else would have drifted under real traffic.

## Lessons Learned

- One page can host multiple OAuth-backed flows only if each flow is namespaced (`vk_action`, `vk_nonce`); generic `code` callbacks are a trap.
- Client UI should render schedule state, not author it.
- If browser-based admin actions need headers like `Admin-Secret`, verify CORS and secret handling before calling the UI done.

## Next Steps

- Keep manual paid-order import as the source of truth until an upstream order-check API is real.
- Leave `RAFFLE_NOW` as a staging-only override.
- Treat `Admin-Secret` as a temporary operational control until a stronger admin auth path replaces it.

## Files

| File | What |
|---|---|
| `/Users/thieunv/projects/personal/vividkit-giveaway-api/src/auth/github-oauth.ts` | Added raffle OAuth actions. |
| `/Users/thieunv/projects/personal/vividkit-giveaway-api/src/durable-objects/giveaway-manager.ts` | Routed the new raffle/admin DO endpoints. |
| `/Users/thieunv/projects/personal/vividkit-giveaway-api/src/durable-objects/raffle-helpers.ts` | Extended raffle state shape for registrations, draws, claims, and rollover. |
| `/Users/thieunv/projects/personal/vividkit-giveaway-api/src/durable-objects/raffle-logic.ts` | Implemented scheduled-draw logic, public results, and claim proof. |
| `/Users/thieunv/projects/personal/vividkit-giveaway-api/src/durable-objects/raffle-schedule.ts` | Added schedule parsing and phase computation. |
| `/Users/thieunv/projects/personal/vividkit-giveaway-api/src/index.ts` | Plumbed raffle routes and action-scoped OAuth callback state. |
| `/Users/thieunv/projects/personal/vividkit-giveaway-api/src/types.ts` | Added raffle schedule and draw types. |
| `/Users/thieunv/projects/personal/vividkit-giveaway-api/tests/integration/routes-admin-raffle.test.ts` | Covered admin import/dump/draw/rollover behavior. |
| `/Users/thieunv/projects/personal/vividkit-giveaway-api/tests/integration/routes-raffle.test.ts` | Covered claimant flow, registration, results, and rate limiting. |
| `/Users/thieunv/projects/personal/vividkit-giveaway-api/tests/raffle-logic.test.ts` | Covered raffle state transitions and draw logic. |
| `/Users/thieunv/projects/personal/vividkit-giveaway-api/tests/raffle-schedule.test.ts` | Covered schedule parsing and phase boundaries. |
| `/Users/thieunv/projects/personal/vividkit-giveaway-api/wrangler.toml` | Added raffle env/config knobs. |
| `/Users/thieunv/projects/personal/vividkit-web/src/components/guides/DealsGuide.astro` | Inserted the lucky-draw section into the deals page. |
| `/Users/thieunv/projects/personal/vividkit-web/src/components/guides/deals/deals-claim-widget.astro` | Fixed claim-flow callback handling so it does not swallow raffle auth. |
| `/Users/thieunv/projects/personal/vividkit-web/src/components/guides/deals/deals-lucky-draw-admin.astro` | Added the hidden admin UI. |
| `/Users/thieunv/projects/personal/vividkit-web/src/components/guides/deals/deals-lucky-draw-result.astro` | Added the winner-result template. |
| `/Users/thieunv/projects/personal/vividkit-web/src/components/guides/deals/deals-lucky-draw-section.astro` | Added the public schedule/countdown section. |
| `/Users/thieunv/projects/personal/vividkit-web/src/components/guides/deals/deals-lucky-draw-widget.astro` | Added the interactive lucky-draw widget. |
| `/Users/thieunv/projects/personal/vividkit-web/src/i18n/en/deals.ts` | Added English raffle/admin strings. |
| `/Users/thieunv/projects/personal/vividkit-web/src/i18n/vi/deals.ts` | Added Vietnamese raffle/admin strings. |
| `/Users/thieunv/projects/personal/vividkit-web/src/pages/guides/deals-admin.astro` | Exposed the hidden admin page. |
| `/Users/thieunv/projects/personal/vividkit-web/src/pages/vi/guides/deals-admin.astro` | Exposed the Vietnamese admin page. |
| `/Users/thieunv/projects/personal/vividkit-web/src/scripts/deals-scheduled-draw-state.ts` | Implemented the Alpine state machine for scheduled draws. |
| `/Users/thieunv/projects/personal/vividkit-web/src/styles/global.css` | Added `x-cloak` handling for hydration safety. |

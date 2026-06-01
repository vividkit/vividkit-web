---
date: 2026-05-18
topic: claudekit-paid-lucky-draw
plan: plans/260518-0130-claudekit-paid-lucky-draw/plan.md
---

# ClaudeKit Paid Lucky Draw

## Context

Implemented the validated ClaudeKit paid lucky draw plan across VividKit web and the separate giveaway Worker API.

## What Happened

- Added backend raffle state under the existing Durable Object: paid refs, bindings, daily spins, winners, budgets, and config.
- Added user routes: `/raffle/config`, `/raffle/status`, `/raffle/verify-order`, `/raffle/spin`.
- Added admin routes: `/admin/paid-orders/import`, `/admin/raffle/dump`.
- Added action-scoped GitHub OAuth with `vk_action` and per-action `vk_nonce`.
- Added public EN/VI lucky draw UI plus hidden EN/VI admin pages.
- Patched claim widget to ignore raffle OAuth returns.
- Added backend tests for raffle logic, routes, admin import, OAuth action state, nonce, CORS, rate limits, and status after spin.

## Decisions

- Manual paid-order allowlist remains source of truth until upstream order-check API exists.
- Raffle anti-spam uses both existing KV buckets and DO-owned atomic buckets for raffle operations.
- `/raffle/status.qualified` now means can spin now, not only generally eligible.
- Admin dump exposes full CK order refs for fulfillment proof, but no prize delivery secrets are stored.

## Verification

- Backend `npm run typecheck`: pass.
- Backend `npm run test`: pass, 109 tests.
- Backend `npm run deploy:dry`: pass with Wrangler multi-env warning only.
- Frontend `npm run build`: pass, 63 pages.

## Unresolved Questions

- Admin routes still rely on `Admin-Secret` rather than origin/rate-limit enforcement. Accept unless stricter browser-only admin policy is needed.

---
date: 2026-07-12 09:58
session: agentkit-desktop-app-follow-up
severity: medium
component: agentkit-guide-desktop-section
status: resolved
---

# AgentKit Desktop Follow-up: Evidence Before Marketing

## What Happened

We added one optional bilingual AgentKit Desktop App section immediately after the migration checklist. No new route was created. The official product page supports only a paid waitlist and Windows/macOS availability. The official v2.0.0 changelog documents separate CLI/App sessions, an App-license-gated shell, and macOS/Linux/Windows GUI assets. Its linked release returned `404`, so we did not present that dead link as independent evidence.

## The Brutal Truth

We nearly turned fragmented upstream marketing into confident product documentation. That is sloppy and dangerous. The maddening part is that the changelog sounds authoritative while its release link is dead and its platform claims exceed the current product page. Without hard fact gates, polished copy would have hidden weak evidence behind good prose.

## Technical Details

Content now uses typed source records and fact-gated copy. The LLM postbuild safety contract prevents unsupported claims from surviving generation.

- Build: 74 routes
- Tests after build: 50/50 passed
- Postbuild checks: 5/5 passed
- Scoped diagnostics: zero, against 271 baseline diagnostics
- System Chrome matrix: 8/8 passed

## What We Tried

We cross-checked the product page, v2.0.0 changelog, and linked release. The release lookup failed with `404`. We rejected a standalone Desktop route because the evidence does not justify expanding information architecture. We also rejected inferred availability, pricing, and Linux support copy because upstream sources do not agree.

## Root Cause Analysis

The root cause was treating upstream release messaging as a coherent source of truth when it is not. The product page, changelog, and dead release link describe different slices of reality. Our previous approach lacked typed provenance and allowed copy to outrun evidence.

## Lessons Learned

Every product claim needs a source and an explicit confidence boundary. A changelog is not proof of current availability. Dead links are evidence failures, not minor editorial defects. Postbuild validation must cover generated claims, not merely HTML shape.

## Next Steps

- Documentation owner: recheck the product page and v2.0.0 release link within seven days.
- Engineering owner: keep typed-source and LLM safety tests mandatory on every guide change.
- Release owner: update or remove claims immediately when upstream availability changes.
- Localization owner: verify EN/VI factual parity before the next release.

## Unresolved Questions

- When will product-page access, changelog assets, and the downloadable release surface converge?
- Is the inaccessible v2.0.0 release private, removed, or temporarily unavailable?

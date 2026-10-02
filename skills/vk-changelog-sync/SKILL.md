---
name: vk:changelog-sync
description: Auto-detect ClaudeKit changelog since last VividKit docs update. Syncs reference codebase, generates diff report, identifies guide impacts. Use when updating VividKit guides to match latest ClaudeKit versions.
version: 2.0.0
argument-hint: "[--check | --sync | --report] [--branch stable|beta|both] [--kit engineer|marketing|all]"
---

# ClaudeKit Changelog Sync

Auto-detect changes in ClaudeKit Engineer Kit and Marketing Kit since last VividKit guides update.

## ⚠️ Stable-First Principle

**VividKit Guides primarily document STABLE versions.** Beta is a forward-looking supplement, not the source of truth.

### Universal Beta-Badge Rule

Apply to any skill, command, sub-command, flag, argument, or hook surfaced anywhere in the guides:

| Upstream presence | VividKit Guide treatment |
|---|---|
| **In stable (any version)** | NO beta badge. Document as a normal stable entry. Remove any pre-existing `isBeta: true` flag. |
| **Only in beta branch** | Dual-list: (a) add stable-group entry with `isBeta: true` flag — renders purple BETA badge inline so the skill is discoverable in its natural category; (b) also surface in Beta Preview section as forward-looking signal. On graduation to stable, drop both: remove `isBeta: true` AND remove Beta Preview entry. |
| **Still in stable, removed from beta** | Stable card: keep AS IS (still functional for stable users). Beta Preview: add entry with `badge: "deprecated"` (signal: scheduled for removal in next stable). When stable also removes it, delete both. |
| **Deprecated/superseded in stable** | `deprecated: true` on the stable card. Do NOT also list in Beta Preview as "deprecated". |

**Trigger on every sync:** for each item that changed status upstream, flip the corresponding VividKit flag. The decision is mechanical — does it ship in current stable? If yes → no badge. If only beta → badge.

### Status Tracking Table

Maintain this table to record the current authoritative status of items recently migrated or commonly mis-flagged. Update on every `--sync` whenever an item crosses the stable/beta boundary. Items NOT in this table follow the Universal rule directly from upstream presence.

| Item | Type | EK Stable | EK Beta | VK Marker | Last change |
|---|---|---|---|---|---|
| `/ck:tech-graph` | skill | ✓ 2.18.0 | ✓ | none | promoted 2026-05-13 |
| `/ck:cook --tdd` | flag | ✓ 2.17.0 | ✓ | none | promoted 2026-04-29 |
| `/ck:cook` simplify gate (Step 3.S) | feature | ✓ 2.17.0 | ✓ | none | promoted 2026-04-29 |
| `/ck:plan --deep` | flag | ✓ 2.17.0 | ✓ | none | promoted 2026-04-29 |
| `/ck:plan --tdd` | flag | ✓ 2.17.0 | ✓ | none | promoted 2026-04-29 |
| `/ck:autoresearch` | skill | ✓ 2.18.0 (reframed as router) | ✓ | none (stable desc updated) | reframe promoted 2026-05-13 |
| `agentize`, `excalidraw`, `xia`, `show-off`, `ai-artist`, `ck-plan`, `cti-expert`, `plans-kanban` | skills | ✓ 2.17.0+ | ✓ | none | promoted 2026-04-29 |
| `/ck:chrome-devtools` | skill | removed 2.18.0 | removed beta.12 | card deleted | removed 2026-05-13 |
| `/ck:mcp-management` | skill | removed 2.18.0 (→ use-mcp) | removed beta.8 | card deleted | removed 2026-05-13 |
| `/ck:kanban` | skill | removed 2.18.0 (→ plans-kanban) | removed beta.8 | card deleted | removed 2026-05-13 |
| `/ck:graphify` → `/ck:ck-graphify` | skill | ✓ 2.18.0 (renamed) | ✓ | command updated | renamed 2026-05-13 |
| `/ck:scenario --saturation` (+ `--iterations N`) | flag | ✓ 2.18.0 | ✓ | flags added to stable card | promoted 2026-05-13 |
| `/ck:security --red-team` (+ `--fix`, `--iterations`) | flag | ✓ 2.18.0 | ✓ | flags added to stable card | promoted 2026-05-13 |
| `/ck:predict --chain reason` (+ `--chain probe`) | flags | ✓ 2.18.0 | ✓ | flags added to stable card | promoted 2026-05-13 |
| `/ck:bootstrap` modes | feature | ✓ 2.18.0 (default=full) | ✓ | stable desc updated | promoted 2026-05-13 |
| `/ck:brainstorm` hard gates | feature | ✓ 2.19.0 | ✓ | none | promoted 2026-05-13 |
| `/ck:cook` hard gates (scout-first + exact-requirements + no-side-effects + `--no-test` override) | feature | ✓ 2.19.0 | ✓ | none | promoted 2026-05-13 |
| `/ck:fix` hard gates (side-effect sweep across blast radius) | feature | ✓ 2.19.0 | ✓ | none | promoted 2026-05-13 |
| `/ck:ck-plan` post-plan handoff (gate-skip per mode) | feature | ✓ 2.19.0 | ✓ | none | promoted 2026-05-13 |
| `claude/rules/review-audit-self-decision.md` | rule | ✓ 2.19.0 | ✓ | none | added 2026-05-13 |
| `workflow-artifact-gate` | hook | ✓ 2.19.1 | ✓ | none | promoted 2026-05-26 |
| `/ck:cook` auto-mode risk-gating (low-risk-only continuous + artifact validator) | feature | ✓ 2.19.1 | ✓ | none | promoted 2026-05-26 |
| `/ck:fix` prevention-gate artifact validation (verification.json + review-decision.json + risk-gate.json) | feature | ✓ 2.19.1 | ✓ | none | promoted 2026-05-26 |
| `/ck:ck-plan` generated-file mandatory Read-pass + red-team descriptive filenames | feature | ✓ 2.19.1 | ✓ | none | promoted 2026-05-26 |
| `/ck:chrome-profile` | skill | ✓ 2.19.1 | ✓ | none (stable card retained, beta badge removed) | promoted 2026-05-26 |
| `ck-code-review` red-team removal (Stage 3 + `adversarial-review.md` deleted; protocol reduced to Spec → Quality → Verify; description reframed to "evidence-based rigor") | refactor | ✓ (main, pre-2.19.1; skill dir renamed `code-review` → `ck-code-review`, command name stays `/ck:code-review`) | ✓ | stable card desc/detail refreshed to evidence-based framing; orphan `code_review.beta_note` dropped | promoted 2026-05-26 |
| `/ck:cti-expert` `/github-osint` sub-command | sub-command | ✗ | ✓ 2.19.2-beta.6 | Beta Preview entry added (enhanced) | added beta 2026-06-04 |
| `/ck:tech-graph` Style 8 "Dark Luxury" | style | ✗ | ✓ 2.19.2-beta.6 | Beta Preview entry added (enhanced); stable card unchanged (still 7 styles) | added beta 2026-06-04 |
| `/ck:html-video` | skill | ✗ | ✓ 2.19.2-beta.8 | dual-listed: Beta Preview entry (new) + Media stable card with `isBeta: true` | added beta 2026-06-07 |
| `/ck:chrome-profile` live DevTools MCP probe (claude-in-chrome bridge dropped, `--force` for proven doctor false-negatives) | feature | ✗ | ✓ 2.19.2-beta.7 | Beta Preview entry added (enhanced); stable card unchanged (still documents claude-in-chrome — accurate for stable 2.19.1) | added beta 2026-06-07 |
| `/ck:chrome-profile` exact tab binding (`open --json` → `bind_selector`/`cdp-open=<token>`, `--no-activate`, fail-closed on ambiguous keys; profile-blind MCP guidance propagated to agent-browser/ck-debug/test/use-mcp) | feature | ✗ | ✓ 2.19.2-beta.9 | merged into existing chrome-profile Beta Preview entry (enhanced, desc/detail refreshed, subcommand `open --json` + flag `--no-activate` shown); stable card unchanged | added beta 2026-06-07 |
| `task-completed-handler.cjs`, `teammate-idle-handler.cjs` | hooks | ✓ 2.19.1 | removed beta.10 | CustomHooks stable cards kept AS IS (still ship in stable 2.19.1); team orchestration moved skill-local upstream | removed from beta 2026-06-09 |
| always-loaded rules compaction (`skill-domain-routing.md` + `skill-workflow-routing.md` removed, content moved to skill-local references: cook/find-skills/docs/preview) | refactor | ✗ (still in stable as standalone rules) | ✓ 2.19.2-beta.11 (#807) | no guide impact — internal CK context architecture, not a VividKit-documented surface | beta refactor 2026-06-09 |
| diff-based content lint (`scripts/lint-content.cjs` + fixtures) | tooling | ✗ | ✓ 2.19.2-beta.12 (#809) | no guide impact — internal CK dev tooling | added beta 2026-06-10 |
| `managed-hooks.json` manifest (CLI self-heal reads it to detect missing hook registrations; lists 11 already-shipped hooks, no new hook) | tooling | ✗ | ✓ 2.19.2-beta.13 (#811) | no guide impact — manifest of existing hooks, not a new documented surface | added beta 2026-06-10 |
| MK diff-based content lint (`scripts/lint-content.cjs` + fixtures) | tooling | ✗ | ✓ MK 1.4.0-beta.4 | no guide impact — internal CK dev tooling | added beta 2026-06-10 |
| `/ck:chrome-profile` bridge probe refinement (`chrome_devtools_mcp_auto_connect` + `runtime_probe_required` states, `--force` guidance update) | feature | ✗ | ✓ 2.19.2-beta.14 (#813) | merged into existing chrome-profile Beta Preview entry (no desc change needed — existing detail already covers live probe + auto-connect) | refined beta 2026-06-12 |
| statusline quota color defaults (`quotaLow: green`, `quotaHigh: red` in DEFAULT_THEME; simplified render logic) | hook fix | ✗ | ✓ 2.19.2-beta.15 | no guide impact — internal statusline color defaults, not a user-documented surface | added beta 2026-06-12 |
| `/ck:show-off` persisted workflow preferences (`screenshots`, `publishing`, `languages` via `preferences.js` helper at `~/.claude/show-off/preferences.json`) | feature | ✗ | ✓ 2.19.2-beta.16 | Beta Preview entry added (enhanced); stable card unchanged | added beta 2026-06-12 |
| `/ck:ghpm` | skill | ✗ | ✓ 2.19.2-beta.17 | dual-listed: Beta Preview entry (new) + Utilities stable card with `isBeta: true` | added beta 2026-06-12 |
| `/ck:vibe` | skill | ✗ | ✓ 2.19.2-beta.18 | dual-listed: Beta Preview entry (new) + Build & Ship stable card with `isBeta: true` | added beta 2026-06-12 |
| `/ck:review-pr` `--fix` convergence loop (resolve conflicts, watch CI to green, rerun transient failures, fork PR handling) | feature | ✗ | ✓ 2.19.2-beta.19 | Beta Preview entry updated (new → enhanced, desc refreshed to reflect CI convergence); stable card N/A (review-pr still beta-only) | enhanced beta 2026-06-12 |
| `fix(rules)` present visible analysis before AskUserQuestion (brainstorm + ck-plan validate-workflow) | rule fix | ✗ | ✓ 2.19.2-beta.22 (#825) | no guide impact — internal interview-protocol rule, not a VividKit-documented surface | added beta 2026-06-15 |
| `/ck:plan` `--html` + `--github` output modes | flags | ✗ | ✓ 2.19.2-beta.23 (#827) | Beta Preview entry added (enhanced, flags `--html`/`--github`); stable card unchanged | added beta 2026-06-15 |
| `/ck:review-pr` duplicate / project-standards / strategic-necessity gates | feature | ✗ | ✓ 2.19.2-beta.24 (#828) | existing review-pr Beta Preview entry desc/detail refreshed to lead with the 3 new gates (keeps CI-convergence mention); stable card N/A (still beta-only) | enhanced beta 2026-06-15 |
| `/ck:git merge-pr` sub-command (review-fix-reply → label `ready to ship` → merge → watch CI) | sub-command | ✗ | ✓ 2.19.2-beta.25 (#829) | Beta Preview entry added (enhanced, subcommand `merge-pr`); stable card unchanged | added beta 2026-06-15 |
| `/ck:ship` Step 8 journal AgentWiki publish (detect `agentwiki` CLI → AgentWiki MCP, skip silently if absent) | feature | ✗ | ✓ 2.19.2-beta.26 (#831) | Beta Preview entry added (enhanced); stable card unchanged | added beta 2026-06-15 |
| `/ck:plan --html` editorial output refine | flag | ✗ | ✓ 2.19.2-beta.27 (#835) | merged into existing plan Beta Preview entry (no flag change — already lists `--html`) | refined beta 2026-06-17 |
| `/ck:brainstorm --html` + `--wiki` + problem-first inversion | feature | ✗ | ✓ 2.19.2-beta.28 | Beta Preview entry added (enhanced, flags `--html`/`--wiki`); stable card unchanged | added beta 2026-06-17 |
| `/ck:plan --wiki` AgentWiki publish flag | flag | ✗ | ✓ 2.19.2-beta.29 (#839) | added `--wiki` to existing plan Beta Preview entry; desc/detail refreshed | added beta 2026-06-17 |
| `frontend-design` upstream design guidance | refactor | ✗ | ✓ 2.19.2-beta.30 (#841) | no guide impact — internal skill content, no documented surface change | beta refactor 2026-06-17 |
| `/ck:plan` remove time estimates | refactor | ✗ | ✓ 2.19.2-beta.31 (#843) | no guide impact — internal plan output wording, not a VividKit-documented surface | beta refactor 2026-06-17 |
| `shopify` skill modernization (v1.0.0→v1.1.0: GraphQL-first Admin API, embedded-apps reference, CLI wrapper flag alignment) | refactor | ✗ (stable still v1.0.0) | ✓ 2.19.2-beta.32/33 (#844, #845) | no guide impact — beta-only content modernization; documented scope unchanged (apps/extensions/themes/CLI/GraphQL/Polaris/Liquid/webhooks/billing). Re-check stable card desc if shopify v1.1.0 graduates | beta refactor 2026-06-17 |
| skill helper reference fixes (deploy/devops/skill-creator/web-frameworks snake_case script paths) + `check-skill-cross-refs.js` tooling | tooling | ✗ | ✓ 2.19.2-beta.32 (#845) | no guide impact — internal CK helper paths + dev tooling, not a documented surface | added beta 2026-06-17 |
| **🎉 EK 2.20.0 stable: entire 2.19.2-beta.* backlog graduated** (beta now 2.19.2-beta.35 = main synced into dev, no net-new beta-only items) | release | ✓ 2.20.0 | ✓ 2.19.2-beta.35 | EK Beta Preview section emptied → friendly empty-state; EK version badges v2.19.1→v2.20.0 + beta.33→beta.35. (MK had NO changes this sync — see separate MK drift-cleanup row below) | promoted 2026-06-18 |
| `/ck:vibe` | skill | ✓ 2.20.0 | ✓ | isBeta dropped from Build & Ship stable card; Beta Preview entry removed | promoted 2026-06-18 |
| `/ck:ghpm` | skill | ✓ 2.20.0 | ✓ | isBeta dropped from Utilities stable card; Beta Preview entry removed | promoted 2026-06-18 |
| `/ck:html-video` | skill | ✓ 2.20.0 | ✓ | isBeta dropped from Media stable card (+args added); Beta Preview entry removed | promoted 2026-06-18 |
| `/ck:review-pr` | skill | ✓ 2.20.0 | ✓ | new stable card added (testDebug category, `--fix`/`--reply`, args); Beta Preview entry removed; stable.review_pr.desc/detail added (EN+VI) | promoted 2026-06-18 |
| `/ck:plan` `--html` + `--github` + `--wiki` | flags | ✓ 2.20.0 | ✓ | flags added to both plan stable cards; plan desc/detail refreshed (EN+VI); Beta Preview entry removed | promoted 2026-06-18 |
| `/ck:brainstorm` `--html` + `--wiki` + problem-first inversion | feature | ✓ 2.20.0 | ✓ | flags added to both brainstorm stable cards; desc/detail refreshed (EN+VI); Beta Preview entry removed | promoted 2026-06-18 |
| `/ck:git merge-pr` sub-command | sub-command | ✓ 2.20.0 | ✓ | `merge-pr` added to git stable card flags; desc/detail refreshed; Beta Preview entry removed | promoted 2026-06-18 |
| `/ck:ship` AgentWiki journal publish | feature | ✓ 2.20.0 | ✓ | ship.detail refreshed (AgentWiki); Beta Preview entry removed | promoted 2026-06-18 |
| `/ck:show-off` persisted workflow preferences | feature | ✓ 2.20.0 | ✓ | show_off.detail refreshed (preferences.json); Beta Preview entry removed | promoted 2026-06-18 |
| `/ck:chrome-profile` DevTools-MCP-only + exact tab binding (`open --json`/`--no-activate`, fail-closed) | feature | ✓ 2.20.0 | ✓ | subcommands/flags added to chrome-profile stable card; detail refreshed (claude-in-chrome dropped); Beta Preview entry removed | promoted 2026-06-18 |
| `/ck:cti-expert` `/github-osint` sub-command | sub-command | ✓ 2.20.0 | ✓ | `/github-osint` subcommand added to cti-expert stable card; detail refreshed; Beta Preview entry removed | promoted 2026-06-18 |
| `/ck:tech-graph` Style 8 "Dark Luxury" | style | ✓ 2.20.0 | ✓ | tech_graph.detail refreshed (7→8 styles); Beta Preview entry removed | promoted 2026-06-18 |
| `/ck:code-review` hardened AI-slop posture | feature | ✓ 2.20.0 | ✓ | already evidence-based on stable card; Beta Preview entry removed | promoted 2026-06-18 |
| MK `ckm:design poster` sub-skill (DRIFT CLEANUP — NOT part of EK 2.20.0; MK unchanged this sync) | sub-skill | ✓ MK 1.4.0 (shipped 2026-05-27) | ✓ | stale Beta Preview "enhanced" entry removed (poster already in stable since 1.4.0, should've been cleaned an earlier sync); mkt_beta.design_poster i18n keys dropped (EN+VI); MK Beta Preview → empty-state | drift cleaned 2026-06-18 |
| gemini CLI → Antigravity (`agy`) CLI migration (EK: ai-multimodal, use-mcp, scout external-scouting, agent-browser; MK: marketing agents + ckm/use-mcp; use-mcp `description` reworded "Gemini CLI"→"agy (Antigravity) CLI", `gemini-cli-integration.md` deleted → `agy-cli-integration.md` + `mcp-proxy-contract.md` added) | refactor | ✗ | ✓ EK 2.20.1-beta.6 / ✓ MK 1.4.0-beta.5 | no guide impact — internal CLI tooling; use-mcp/agent-browser/scout not VividKit-documented surfaces (grep-confirmed: no refs in src/data or src/i18n) | beta refactor 2026-06-27 |
| `design` skill namespace rename `ckm:design` → `ck:design` | rename | ✗ | ✓ EK 2.20.1-beta.6 | no guide impact — design skill not listed in VividKit commands/scenarios (grep-confirmed); beta-only, stable still ships as MK `ckm:design` | renamed beta 2026-06-27 |
| `agent-browser` desc enhancement (+Slack automation, exploratory QA, bug hunts) + subagent namespace prefixing (`journal-writer`→`ck:journal-writer`, `code-reviewer`→`ck:code-reviewer` in ck-plan refs) | refactor | ✗ | ✓ EK 2.20.1-beta.6 | no guide impact — agent-browser not VividKit-documented; namespace prefixes internal | beta refactor 2026-06-27 |
| EK/MK beta version badges (EK 2.19.2-beta.35 → 2.20.1-beta.6; MK 1.4.0-beta.4 → 1.4.0-beta.5) | version | n/a | n/a | `commands-categories-grid.astro` beta badges + EK panel comment bumped; stable badges unchanged (EK 2.20.0 / MK 1.4.0 — no stable release this sync) | bumped 2026-06-27 |
| `task-completed-handler.cjs`, `teammate-idle-handler.cjs` — STABLE removal catch-up (drift missed at 2026-06-18 sync) | hooks | removed 2.20.0 | removed beta.10 | per Universal Rule (stable also removed → delete both): removed both entries from `custom-hooks-data.ts` (totalHooks auto-recounts) + orphan keys from `custom-hooks-ui.ts` (hookDescriptions + hookExamples); GuardRails `versionNote` bumped @2.19.1→@2.20.0 (prediction realized); how-ck-works team layer de-hooked — `skill-infographics.ts` (step 5 + expertise) + `workflow-visualizer-scenarios.ts` (tm-coordinate + init-merge) + `infographic-team-quick-ref.astro` reworded to TaskList-polling + SendMessage (team SKILL.md: handlers "not shipped by default") | stable cleanup 2026-06-27 |
| `/ck:coding-agent-orchestration` | skill | ✗ | ✓ EK 2.20.1-beta.9 (#863) | dual-listed: Beta Preview entry (new, args `[task or workflow]` + flags `--single`/`--sequential`/`--parallel`/`--review-loop`) + Utilities stable card with `isBeta: true`; stable+beta i18n desc/detail added (EN+VI) | added beta 2026-07-07 |
| `/ck:review-pr` GitLab MR support (auto-detect `gh` vs `glab` from git remotes; argument-hint `<PR/MR number or URL>`) | feature | ✗ | removed beta.13–.14 (GitHub-only again) | superseded — Beta Preview no longer claims GitLab; see `--merge` row (2026-08-04) | withdrawn beta 2026-08-04 |
| EK beta version badge (2.20.1-beta.6 → 2.20.1-beta.9) | version | n/a | n/a | `commands-categories-grid.astro` beta badge + panel comment bumped; stable badge unchanged (EK 2.20.0 — no stable release this sync); MK unchanged (stable 1.4.0 / beta 1.4.0-beta.5, zero MK changes) | bumped 2026-07-07 |
| mass helper-path refactor (`${CLAUDE_PLUGIN_ROOT:-.claude}` replaces hardcoded `.claude` across ~17 skills #861; JS package-manager install fixes #862; PreToolUse blocker hardening + `pretooluse-output.cjs` lib #860; code-reviewer complexity-only lens + `minimal implementation ladder` rule) | refactor | ✗ | ✓ EK 2.20.1-beta.7-9 | no guide impact — internal path portability, hook hardening, agent-prompt lens, and dev rules; grep-confirmed none are VividKit-documented surfaces | beta refactor 2026-07-07 |
| `/ck:advise` | skill | ✗ | ✓ EK 2.20.1-beta.12 | dual-listed: Beta Preview (new) + Plan & Research stable card `isBeta: true` (moved from Utilities — pre-plan advisory fits planResearch); EN+VI i18n | category fix 2026-08-04 |
| `/ck:fable-thinking` | skill | ✗ | ✓ EK 2.20.1-beta.12 | dual-listed: Beta Preview (new) + Plan & Research stable card `isBeta: true`; EN+VI i18n | added beta 2026-08-03 |
| `/ck:issue-to-plan` | skill | ✗ | ✓ EK 2.20.1-beta.12 | dual-listed: Beta Preview (new) + Plan & Research stable card `isBeta: true`; EN+VI i18n | added beta 2026-08-03 |
| `/ck:goal-warmup` | skill | ✗ | ✓ EK 2.20.1-beta.12 | dual-listed: Beta Preview (new) + Plan & Research stable card `isBeta: true`; EN+VI i18n | added beta 2026-08-03 |
| `/ck:codex-goal` | skill | ✗ | ✓ EK 2.20.1-beta.12 | dual-listed: Beta Preview (new) + Utilities stable card `isBeta: true`; EN+VI i18n | added beta 2026-08-03 |
| `/ck:handoff` | skill | ✗ | ✓ EK 2.20.1-beta.12 | dual-listed: Beta Preview (new) + Session Mgmt stable card `isBeta: true`; EN+VI i18n | added beta 2026-08-03 |
| `/ck:interview-docs` | skill | ✗ | ✓ EK 2.20.1-beta.12 | dual-listed: Beta Preview (new) + Docs & Content stable card `isBeta: true`; EN+VI i18n | added beta 2026-08-03 |
| `/ck:folder-context` | skill | ✗ | ✓ EK 2.20.1-beta.12 | dual-listed: Beta Preview (new) + Utilities stable card `isBeta: true`; EN+VI i18n | added beta 2026-08-03 |
| `/ck:research-prompt` | skill | ✗ | ✓ EK 2.20.1-beta.12 | dual-listed: Beta Preview (new) + Plan & Research stable card `isBeta: true`; EN+VI i18n | added beta 2026-08-03 |
| `/ck:document-skills` (router SKILL.md; nested docx/pdf/pptx/xlsx already in stable) | skill | ✗ (router only in beta) | ✓ EK 2.20.1-beta.12 | dual-listed: Beta Preview (new) + AI Multimodal stable card `isBeta: true`; EN+VI i18n | added beta 2026-08-03 |
| `kongming` agent | agent | ✗ | ✓ EK 2.20.1-beta.12 | no CommandsGuide card (agent, not skill); used by advise `--agent` | added beta 2026-08-03 |
| EK beta version badge (2.20.1-beta.9 → 2.20.1-beta.12) | version | n/a | n/a | `commands-categories-grid.astro` beta badge + panel comment bumped; stable unchanged (EK 2.20.0 / MK 1.4.0) | bumped 2026-08-03 |
| `/ck:review-pr` `--merge` + drop GitLab/glab surface (beta.13–.14 divergent refresh) | feature | ✗ (stable still `--fix`/`--reply` GitHub-only) | ✓ EK 2.20.1-beta.14 | Beta Preview entry refreshed: GitLab-MR wording removed; flags `--fix`/`--reply`/`--merge`; args `<PR number or URL>` | enhanced beta 2026-08-04 |
| `/ck:cook` `--advice` + `--auto` = all steps + brainstorm-first hard gate | feature | ✗ (stable: low-risk-only `--auto`, no `--advice`) | ✓ EK 2.20.1-beta.14 | Beta Preview entry added (enhanced); stable cook card unchanged | enhanced beta 2026-08-04 |
| EK beta version badge (2.20.1-beta.12 → 2.20.1-beta.14) | version | n/a | n/a | `commands-categories-grid.astro` beta badge + panel comment bumped; stable unchanged (EK 2.20.0 / MK 1.4.0) | bumped 2026-08-04 |
| `design` skill poster expansion + `frontend-design` / Multix `ai-multimodal` / portable-capability refactors across cook/fix/team/scout/ship… | refactor | ✗ | ✓ EK 2.20.1-beta.13–.14 | no CommandsGuide surface for design/frontend-design/ai-multimodal Multix pin; how-ck-works stays stable-first (do not reword stable `--auto` until promote) | beta refactor 2026-08-04 |

**How to use this table:**
- Before adding/removing a beta badge during a sync, check the table.
- If table contradicts upstream changelog (e.g. upstream still labels item as beta but table says promoted) → trust the table. The table reflects the latest verified release state.
- Add a new row whenever an item changes status. Date it.

**🚨 MANDATORY when row flips beta-only → stable (`✗ | ✓ beta` → `✓ X.Y.Z | ✓`):**

Three actions on EVERY promotion — never skip step 2 even if no flags changed:

1. Remove the Beta Preview entry from `commands-categories-grid.astro` + drop unused i18n keys (`commands.beta_*.desc`/`.detail`).
2. **Refresh stable `desc`/`detail`** in BOTH `src/i18n/en/commands.ts` AND `src/i18n/vi/commands.ts` to match upstream SKILL.md frontmatter `description`. Beta-era stable wording usually understates the now-shipped feature. ← **easy to forget, audit every sync**
3. Add new flags/subcommands shipped with the promotion to the stable card's `flags`/`subcommands` in `commands-engineer-kit.ts`.

Then update this table row, dated.

### Beta Preview Section Semantics (CommandsGuide only)

The "Beta Preview" card in `commands-categories-grid.astro` exists ONLY to surface what is **net-new in the latest BETA** that has NOT yet shipped to stable. The category cards below it reflect the current STABLE release.

**Rules:**
- Beta Preview = forward-looking only. Once an item ships to stable, REMOVE its entry from Beta Preview.
- "Enhanced" entries (new flags, new sub-commands) belong in Beta Preview ONLY while still beta-exclusive. After release, drop them.
- Two "deprecated" scenarios — do not conflate:
  - **(A) Already deprecated in stable** (stable still ships it but it's superseded, e.g. `/ck:autoresearch`): mark stable card `deprecated: true`. NOT in Beta Preview — historical signage doesn't belong there.
  - **(B) Still in stable, removed from beta** (forward-looking signal that next stable will drop it): keep stable card AS IS. Add entry to Beta Preview with `badge: "deprecated"` to warn users of upcoming removal. See Universal Beta-Badge Rule.
- Post-release audit: Beta Preview card should shrink down to genuinely new beta-only items + still-beta-exclusive enhancements.

### Inline Beta Badge (WorkflowsGuide)

WorkflowsGuide has 2 tabs only (EK, MK). NO "Beta Preview" section. Beta items marked inline at 3 levels:

| Level | Field path | Badge color |
|---|---|---|
| Workflow-level | `workflow.isBeta` | purple, next to level chip |
| Step-level | `step.isBeta` (inside `workflow.steps`) | purple, next to step command |
| Flag-level | `f.isBeta` (inside `workflow.cookFlags` / `planFlags`) | amber |

**Migration trigger:** when an item changes status upstream, flip `isBeta` at every level it appears. `workflows-beta-additions.ts` should remain empty unless there's a net-new beta-only workflow that doesn't fit any existing stable pattern.

### Beta → Stable Promotion: Description & Flag Update

When a skill/flag is promoted from beta to stable, do NOT just remove the beta badge — also:
1. **Refresh stable `desc`/`detail`** in both `en/commands.ts` and `vi/commands.ts` to match the upstream stable SKILL.md description. Beta-era wording often understates the shipped feature.
2. **Add newly shipped flags/subcommands** to the stable card's `flags`/`subcommands` arrays in `commands-engineer-kit.ts`.
3. **Cross-page isBeta audit**: `isBeta` flags exist in multiple data files — check ALL: `commands-engineer-kit.ts`, `workflows-stable.ts` (EN + VI), `workflows-marketing-kit.ts` (EN + VI), `flowchart-index.ts`, `custom-hooks-data.ts`.

## Progressive Disclosure Levels

### Level 1: Quick Check (default, no args)
What changed since last sync? Returns summary only.

```bash
node skills/vk-changelog-sync/scripts/detect-changes.cjs --check
```

### Level 2: Detailed Report (`--report`)
Generate categorized changelog with guide impact analysis.

```bash
node skills/vk-changelog-sync/scripts/detect-changes.cjs --report
```

### Level 3: Full Sync (`--sync`)
Fetch latest codebase, generate report, update last-sync marker.

```bash
node skills/vk-changelog-sync/scripts/detect-changes.cjs --sync
```

## Kit Selection

- `--kit engineer` - Only Engineer Kit (stable/beta)
- `--kit marketing` - Only Marketing Kit (marketing-stable/marketing-beta)
- `--kit all` - Both kits (default)

## Branch Selection

- `--branch stable` - Only stable branches
- `--branch beta` - Only beta/dev branches
- `--branch both` - Both branches (default)

## Examples

```bash
# Quick: what changed across all kits?
node skills/vk-changelog-sync/scripts/detect-changes.cjs --check

# Full sync: fetch + report + update marker (all kits, all branches)
node skills/vk-changelog-sync/scripts/detect-changes.cjs --sync

# Report for Engineer Kit stable only
node skills/vk-changelog-sync/scripts/detect-changes.cjs --report --kit engineer --branch stable

# Report for Marketing Kit only
node skills/vk-changelog-sync/scripts/detect-changes.cjs --report --kit marketing
```

## How It Works

1. **Marker file**: `reference/.last-sync` stores last synced commit SHAs for all 4 directories
2. **Fetch**: Runs Makefile targets (`fetch-stable`, `mkt-fetch-stable`, etc.)
3. **Diff**: Compares current HEAD vs last-sync SHA using git diff
4. **Categorize**: Groups changes into: skills, agents, hooks, rules, commands, workflows, config, scripts, schemas
5. **Impact map**: Maps each category to VividKit guide files that need updating
6. **Report**: Generates markdown report with per-kit impacts + combined summary

## Directory Mapping

| Kit | Stable Dir | Beta Dir | Makefile Targets |
|-----|-----------|---------|-----------------|
| Engineer | `reference/stable/` | `reference/beta/` | `fetch-stable`, `fetch-beta` |
| Marketing | `reference/marketing-stable/` | `reference/marketing-beta/` | `mkt-fetch-stable`, `mkt-fetch-beta` |

## Impact Mapping

| ClaudeKit Category | VividKit Guide Files |
|---|---|
| `.claude/skills/*` | `workflows.ts`, `CommandsGuide.astro`, `WorkflowsGuide.astro` |
| `.claude/agents/*` | `workflows.ts`, `WorkflowsGuide.astro` |
| `.claude/hooks/*` | `CustomHooksGuide.astro`, `workflows.ts`, `session-recovery-hero-and-auto-state.astro`, `session-recovery.ts` (i18n) |
| `.claude/rules/*` | `WorkflowsGuide.astro`, `WhatIsClaudeKitGuide.astro` |
| `.claude/commands/*` | `commands-engineer-kit.ts`, `commands-marketing-kit.ts`, `CommandsGuide.astro` |
| `.claude/workflows/*` | `WorkflowsGuide.astro` |
| `.claude/settings.json` | `PermissionsGuide.astro`, `CLIGuide.astro` |
| `.claude/schemas/*` | `IDEConfigGuide.astro` |
| `CLAUDE.md` | `WhatIsClaudeKitGuide.astro`, `CLIGuide.astro` |
| `.claude/skills/*` (new/changed) | `workflow-visualizer-scenarios.ts` (scenario card), `skill-infographics-additional.ts` (infographic detail) |

## Semantic Guide Analysis

The report includes an **Actionable Guide Updates** section that cross-references ClaudeKit changes with VividKit guide data:

- **ADD**: New hooks, categories, agents, or commands need to be added to guides
- **UPDATE**: Existing content needs revision (version bumps, modified descriptions)
- **REMOVE**: Deprecated items should be removed from guides
- **REVIEW**: Content may be outdated — verify and update if needed

Analysis covers: category gaps in section components, new/modified hooks and skills, config/schema changes, version updates, and command additions/removals.

## How CK Works Guide Sync

Each skill on `/guides/how-ck-works` has **2 data entries** that must stay in sync:

| Layer | File | Fields |
|-------|------|--------|
| Scenario (card outside) + **pipeline** | `src/data/guides/how-ck-works/workflow-visualizer-scenarios.ts` | `titleEn/Vi`, `descEn/Vi`, `steps[]` (= the rendered pipeline: each step has `name`, `descEn/Vi`, `explainEn/Vi`, `codeSnippet`), icon |
| Infographic / info card (detail inside) | `src/data/guides/how-ck-works/skill-infographics.ts` (core: brainstorm/plan/cook/fix/team) or `skill-infographics-additional.ts` (everything else) | `taglineEn/Vi`, `promptExamples`, `processFlow`, `workflowModes`, **`outputFlags`** (`--html`/`--github`/`--wiki`-style flags), `guardrails`, `modeCards`, `hardGate` |

Core command-level skills also have a purpose-built quick-ref astro component (`src/components/guides/how-ck-works/infographic/infographic-<slug>-quick-ref.astro`) that renders the info card — flag changes must reach it too (it reads the data above, but section copy/`text={}` may need new labels).

### When to update

| Upstream change | Action |
|-----------------|--------|
| **New skill added** | `/vk:add-scenario` — creates both entries |
| **Skill gains a new flag / arg / sub-command** | **Enrich info card AND pipeline** (see rule below) — do NOT stop at the version bump |
| **Skill desc changed** (1-2 fields) | Edit infographic data directly |
| **Batch updates** (5+ skills) | `/vk:audit-skill` — sweeps both layers |
| **Skill removed** | Delete from both files |
| **Periodic drift check** | `/vk:audit-skill` every few versions |

### 🚩 Flag / arg additions → enrich info card + pipeline (MANDATORY)

When a SKILL.md `argument-hint` gains a new flag, positional arg, or sub-command (detect via the registry diff or `git diff` on the frontmatter), updating the version is NOT enough. Both how-ck-works layers must reflect the new capability:

1. **Info card (infographic data):**
   - Mode-style flags (change pipeline behaviour, e.g. `--deep`/`--parallel`) → add a `workflowModes` row + a `promptExamples` entry.
   - Output/publish flags (produce/ship an extra artifact, e.g. `--html`/`--github`/`--wiki`) → add an `outputFlags` entry (`flag`, `titleEn/Vi`, `descEn/Vi`, `exampleCommand`). Both `infographic-<slug>-quick-ref.astro` and the fallback already render `data.outputFlags`.
   - New hard gate / mandatory step → update `hardGate` (bump the `(N)` count) and `processFlow`.
2. **Pipeline (scenario `steps`):** enrich the relevant step's `descEn/Vi`, `explainEn/Vi`, and `codeSnippet` so the flow text mentions the new flag and where it runs (e.g. an output flag belongs in the terminal `output` step, after the gates). Do NOT leave the pipeline describing only the pre-flag behaviour.
3. **i18n:** every added EN field needs a natural-Vietnamese twin (see i18n rule).
4. **Verify:** `npx astro check` clean for touched files; grep the slug's quick-ref component for stale flag/mode copy that now contradicts the SKILL.

For 5+ skills changing at once, delegate the sweep to `/vk:audit-skill` instead of hand-editing.

### i18n rule
`descVi` (scenario) and `taglineVi` (infographic) are **separate fields in separate files** — both must be natural Vietnamese, never English copies.

## CommandsGuide Update Workflow

### New Skills (Beta)
When a new skill is added in Beta (either kit):

1. **Beta Preview section** (`commands-categories-grid.astro` lines ~99-127):
   - Add entry with `badge: "new"`
   - Add i18n translations in BOTH `en/commands.ts` AND `vi/commands.ts`: keys `commands.beta_{skill}.desc` and `commands.beta_{skill}.detail`

2. **Group cards** (stable categories below):
   - Consider adding to appropriate category with `isBeta: true`
   - Shows purple "beta" badge in UI

### Enhanced Skills (Beta)
When an existing stable skill gains a new flag, sub-command, or feature in Beta:

1. **Beta Preview section only**:
   - Add entry with `badge: "enhanced"`
   - Add i18n translations in BOTH `en/commands.ts` AND `vi/commands.ts` (don't duplicate the full skill description — focus on the specific enhancement)
   - Do NOT add to group cards — existing stable entry is sufficient
   - Once the enhancement ships to stable, REMOVE this Beta Preview entry and update the Status Tracking Table

### Beta → Stable Promotion
When beta version releases as stable:

1. **Group cards**:
   - Remove `isBeta: true` from the skill entry
   - Beta badge disappears from UI

2. **Beta Preview section**:
   - Remove the skill entry entirely
   - Remove associated i18n translations if no longer needed

3. **Version badge** (`commands-categories-grid.astro` line ~76):
   - Update stable version number (e.g., `v2.16.0 Stable`)

### Files to Update

| Change Type | Files |
|-------------|-------|
| Beta Preview entries | `commands-categories-grid.astro` |
| Group card entries | `commands-engineer-kit.ts`, `commands-marketing-kit.ts` |
| i18n translations | `src/i18n/en/commands.ts`, `src/i18n/vi/commands.ts` |
| Version badge | `commands-categories-grid.astro` (stable badge) |

## Sample Prompts

### Full sync + visual report (recommended for periodic updates)
```
/vk:changelog-sync make fetch latest then sync and create visual report
```

### Quick check only
```
/vk:changelog-sync
```

### Sync + analyze + update guides
```
/vk:changelog-sync sync all kits, analyze changes, then update VividKit guides for impacted areas
```

### Engineer Kit stable only
```
/vk:changelog-sync --report --kit engineer --branch stable
```

### After manually pulling reference repos
```
/vk:changelog-sync I already pulled latest for all reference repos, just run report and suggest guide updates
```

## Output Location

Reports saved to: `reference/changelog-reports/{date}-{kit}-{branch}-changelog.md`

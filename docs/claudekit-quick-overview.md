# ClaudeKit — Quick Overview (for new-session brainstorming)

> **Versions (current):**
> - Engineer Kit: stable `v2.17.0` · beta `v2.17.0-beta.19`
> - Marketing Kit: stable `v1.3.2` · beta `v1.3.1-beta.4`
>
> **Source:** `/Users/thieunv/projects/personal/vividkit-web/reference/stable/` + `/Users/thieunv/projects/personal/vividkit-web/reference/skills-registry.json`
> **Purpose:** Self-contained primer to attach to a fresh Claude session (any project) before brainstorming a new product on top of ClaudeKit.
> **Registry built:** 2026-04-29 · **Doc generated:** 2026-05-08

---

## 1. What ClaudeKit Is

ClaudeKit is a **boilerplate / framework layered on top of Claude Code** (Anthropic's CLI). It turns a vanilla Claude Code install into an opinionated, multi-agent software-development system with:

- **Slash-command skills** (`/ck:*`, `/ckm:*`) → invocable workflows
- **Specialized sub-agents** (planner, tester, reviewer, etc.) → delegated tasks with own context window
- **Hooks** → deterministic JS-based event handlers attached to tool calls / session lifecycle
- **Output-styles** → per-session coding-level personas (ELI5 → God-tier senior)
- **Rules** → markdown policies auto-injected as system reminders

It is distributed as:
- A **boilerplate repo** (this `reference/stable/`)
- The **`claudekit-cli`** (`ck` binary) → `ck new`, `ck init`, `ck migrate -a opencode`
- Two flavors: **Engineer Kit** (`ck:*` skills) and **Marketing Kit** (`ckm:*` skills, `mkt:*` commands)

---

## 2. Headline Numbers (registry-derived)

| Item | Engineer | Marketer | Total |
|---|---:|---:|---:|
| Skills (registered) | 82 | 49 | **131** |
| Skills (active in stable) | 76 | 49 | 125 |
| Skills (active in beta) | 79 | 49 | 128 |
| Commands (top-level / total) | 0 / 0 | 33 / 78 | 33 / 78 |
| Agents | 14 | 31 | 45 |
| Deprecated skills | 7 | 0 | 7 |

Channels: `stable`, `beta`, `marketing-stable`, `marketing-beta`. Most `ck:*` skills cross-published into marketing channels for dual-install (47 in marketing-stable, 46 in marketing-beta). 11 agents shared across both kits.

---

## 3. Repo Layout (`reference/stable/`)

```
.claude/
├── agents/          14 .md sub-agent definitions
├── command-archive/ legacy commands
├── hooks/           ~20 .cjs hook scripts (session, tool, notifications)
├── output-styles/   6 coding-level personas
├── rules/           workflow + routing rules (auto-injected)
├── schemas/         JSON schemas
├── scripts/         install + maintenance scripts
├── skills/          92 SKILL.md folders (the meat)
├── settings.json    plugin config
├── statusline.cjs   custom statusline renderer
└── metadata.json    manifest (with deletions[] for upgrades)
docs/                project docs (PDR, code-standards, etc.)
guide/SKILLS.md      end-user skill reference
plans/               implementation plans + reports/
```

---

## 4. The Agent Roster (Engineer Kit)

14 sub-agents, each with a focused tool allowlist:

| Agent | Role |
|---|---|
| **planner** | research-driven plan files in `plans/`, spawns parallel `researcher`s |
| **researcher** | deep-dive on one technical topic, reports back |
| **fullstack-developer** | implement a phase from a plan (file-ownership boundaries) |
| **tester** | run tests, coverage, validate fixes |
| **code-reviewer** | quality / security / edge-case review |
| **code-simplifier** | refactor for clarity, no behavior change |
| **debugger** | logs, CI failures, perf bottlenecks, root-cause |
| **docs-manager** | sync `docs/` with code, write PDRs |
| **git-manager** | conventional commits, branch hygiene |
| **journal-writer** | record incidents, lessons, blockers |
| **project-manager** | progress, roadmap, milestone tracking |
| **mcp-manager** | manage MCP servers |
| **ui-ux-designer** | design specs, prototypes |
| **brainstormer** | trade-off analysis before implementation |

Marketing Kit adds 31 more (campaign-manager, copywriter, seo-specialist, funnel-architect, lead-qualifier, ...). 11 agents are shared across both kits.

---

## 5. Skill Catalog (high-level groupings)

### 5.1 Core Workflow (`/ck:*`)
`plan` · `cook` · `fix` · `debug` · `test` · `code-review` · `scout` · `ship` · `git` · `journal` · `retro` · `docs` · `watzup` · `worktree` · `team`

Canonical chain: `/ck:plan → /ck:cook → /ck:test → /ck:code-review → /ck:ship → /ck:journal`.

### 5.2 Domain — Frontend / Design
`frontend-design` · `frontend-development` · `ui-styling` · `ui-ux-pro-max` · `web-design-guidelines` · `react-best-practices` · `stitch` · `threejs` · `shader` · `remotion` · `excalidraw`

### 5.3 Domain — Backend / Infra
`backend-development` · `databases` · `better-auth` · `payment-integration` · `deploy` · `devops` · `web-frameworks` · `tanstack` · `mobile-development` · `shopify` · `golang-development` (beta)

### 5.4 Codebase Intelligence
`scout` · `repomix` · `gkg` · `graphify` · `tech-graph` · `find-skills`

### 5.5 AI / Context Engineering
`context-engineering` · `llms` · `ai-multimodal` · `ai-artist` · `google-adk-python` · `mcp-builder` · `use-mcp` · `agentize` · `claude-api`

### 5.6 Testing / Browser
`test` · `web-testing` · `agent-browser` · `chrome-devtools`

### 5.7 Security
`security` · `security-scan` · `cti-expert`

### 5.8 Docs / Content / Diagrams
`docs` · `docs-seeker` · `mintlify` · `mermaidjs-v11` · `markdown-novel-viewer` · `preview` · `copywriting`

### 5.9 Cognitive / Meta
`brainstorm` · `ask` · `sequential-thinking` · `problem-solving` · `coding-level` · `skill-creator` · `template-skill` · `ck-scenario` · `ck-predict` · `ck-autoresearch` · `loop` · `xia`

### 5.10 Marketing Kit (`/ckm:*`, `/mkt:*`) — selected
`brand` · `campaign` · `seo` · `email` · `funnel` · `paid-ads` · `social` · `content-marketing` · `marketing-research` · `persona` · `pricing-strategy` · `launch-strategy` · `referral-program-building` · `gamification-marketing` · `affiliate-marketing` · `cip-design` · `logo-design` · `banner-design` · `slides` · `video` (with `:script:create`, `:storyboard:create`) · `write` (with `:blog`, `:cro`, `:fast`, `:formula`, `:enhance`, `:audit`, `:publish`) · `youtube` (`:blog`, `:infographic`, `:social`) · `analytics` · `ads-management` · `ab-test-setup` · `dashboard` · `kit-builder` · `storage` (`:list/sync/upload/url`) · `elevenlabs` · `marketing-psychology` · `marketing-ideas`

Marketing skills are heavily **hierarchical** (parent/child), e.g. `ckm:write:blog:youtube`.

### 5.11 Namespace Rules
- `ck:` — Engineer Kit (also exposed in marketing channels for dual-install)
- `ckm:` — Marketing-exclusive
- `mkt:` — Commands (lightweight `.md` slash entries) under `.claude/commands/mkt/`
- Frontmatter `name: ck:debug` registers as `debug` → reference is `/ck:debug` (not `/ck:ck-debug`). CI enforces.

---

## 6. Hooks (event-driven, deterministic)

Files: `.claude/hooks/*.cjs`. Notable ones:

| Hook | Trigger | Job |
|---|---|---|
| `session-init.cjs` | SessionStart | inject prior session state, paths, naming conventions |
| `session-state.cjs` | tool/turn | persist state for resume |
| `subagent-init.cjs` | sub-agent spawn | seed subagent with reports/plans paths |
| `dev-rules-reminder.cjs` | UserPromptSubmit | re-inject `development-rules.md` |
| `cook-after-plan-reminder.cjs` | post-plan | nudge to run `/ck:cook` |
| `descriptive-name.cjs` | file create | enforce kebab-case + descriptive names |
| `simplify-gate.cjs` | post-edit | route through `code-simplifier` |
| `skill-dedup.cjs` | skill load | prevent dual-install duplicate |
| `scout-block.cjs` | tool use | gate large reads through `scout` |
| `usage-context-awareness.cjs` | tool/turn | warn on context bloat |
| `usage-quota-cache-refresh.cjs` | quota | refresh quota cache for statusline |
| `privacy-block.cjs` | file read | block secret-bearing files unless approved |
| `task-completed-handler.cjs` | TaskUpdate done | post-task wiring (docs sync, etc.) |
| `team-context-inject.cjs` | team mode | inject teammate roster + ownership rules |
| `teammate-idle-handler.cjs` | team msg | wake idle teammates |
| `plan-format-kanban.cjs` | plan write | enforce kanban-friendly plan format |
| `notifications/*` | various | Telegram/Discord/Slack with throttling |

---

## 7. Output Styles (coding-level personas)

`coding-level-{0..5}-{eli5,junior,mid,senior,lead,god}.md` — switchable via `/ck:coding-level`. Adjusts Claude's communication register: ELI5 explanations → tradeoff-heavy senior dialect → terse god-tier.

---

## 8. Rules Files (auto-injected to context)

In `.claude/rules/`:
- `primary-workflow.md` — the canonical plan→cook→test→review→ship loop
- `development-rules.md` — YAGNI/KISS/DRY, file-naming, modularization, pre-commit hygiene
- `orchestration-protocol.md` — sub-agent delegation, status protocol (`DONE | DONE_WITH_CONCERNS | BLOCKED | NEEDS_CONTEXT`), context-isolation principle
- `documentation-management.md` — `docs/` structure, when to update roadmap/changelog
- `skill-workflow-routing.md` — *which* core skill to start a workflow with
- `skill-domain-routing.md` — *which* domain skill (frontend/backend/auth/payments/...) to pick
- `team-coordination-rules.md` — multi-session collab (file ownership, git safety, comm protocol)

---

## 9. Plans / Reports Convention

```
plans/{YYMMDD-HHMM}-{slug}/
├── plan.md                       overview, <80 lines
├── phase-01-*.md … phase-NN-*.md detailed phase files
├── research/                     researcher reports
├── reports/                      agent-to-agent comm
└── visuals/                      preview/diagram outputs
```

Reports filename: `{type}-{date}-{slug}.md` under `plans/reports/`.

---

## 10. Distribution & Update Mechanics

- `claudekit-cli` (`ck`) installs into `.claude/`, syncs from upstream channel.
- `claude/metadata.json` carries a `deletions[]` array → installer can remove orphaned files on upgrade.
- CI script `scripts/check-skill-cross-refs.js` validates every `/ck:*` reference resolves to a registered frontmatter `name:`.
- MCP servers configured in `.claude/.mcp.json` (Context7, Human MCP, Chrome DevTools MCP, ...).

---

## 11. Mental Model — Why It Matters for a New Product

ClaudeKit is essentially **"a packageable, opinionated agent OS for Claude Code"**. Three layers:

1. **Knowledge layer** — skills (markdown SKILL.md), agents (markdown defs), rules (markdown policies) — all data, all version-controlled.
2. **Control layer** — hooks (deterministic JS) intercept lifecycle events, enforce invariants, inject context.
3. **Distribution layer** — the CLI, the registry, the metadata manifest, the cross-ref validator.

Anything that wants to ride on top of Claude Code (or compete with / extend ClaudeKit) usually slots into one of:
- **More skills** in a kit (cheapest, just markdown)
- **A new kit** (e.g. data-science-kit, devops-kit) sharing `ck:*` core
- **A new control surface** — visual UI for skill/agent/run discovery (this is what **VividKit Desktop** is doing)
- **A new distribution channel** — alt CLI, alt provider (OpenCode etc. via `ck migrate`)
- **Adjacent runtime** — MCP server that ClaudeKit skills consume

---

## 12. Pointers (absolute paths — usable from any project)

> Repo root: `/Users/thieunv/projects/personal/vividkit-web/`

**Registry (machine-readable, source of truth):**
- Full: `/Users/thieunv/projects/personal/vividkit-web/reference/skills-registry.json`
- Slim index (LLM-attachable): `/Users/thieunv/projects/personal/vividkit-web/reference/skills-registry-index.json`

**Catalogs (human-readable):**
- **Current combined catalog (this doc's companion):** `/Users/thieunv/projects/personal/vividkit-web/docs/claudekit-catalog-current.md` — *fresh, EK 2.17.0 / MK 1.3.2*
- Older / archival: `/Users/thieunv/projects/personal/vividkit-web/docs/claudekit-commands-skills-catalog-v2.13-v2.14.md`, `/Users/thieunv/projects/personal/vividkit-web/docs/claudekit-marketing-commands-skills-catalog-v1.2.1-v1.3.0.md`, `/Users/thieunv/projects/personal/vividkit-web/docs/claudekit-marketing-beta-commands-skills-reference.md`

**Channel snapshots (full source trees):**
- Engineer stable: `/Users/thieunv/projects/personal/vividkit-web/reference/stable/`
- Engineer beta: `/Users/thieunv/projects/personal/vividkit-web/reference/beta/`
- Marketing stable: `/Users/thieunv/projects/personal/vividkit-web/reference/marketing-stable/`
- Marketing beta: `/Users/thieunv/projects/personal/vividkit-web/reference/marketing-beta/`
- CCS (Claude Code Switcher): `/Users/thieunv/projects/personal/vividkit-web/reference/ccs/`
- ClaudeKit CLI: `/Users/thieunv/projects/personal/vividkit-web/reference/claudekit-cli/`

**Engineer Kit internals (pick from `reference/stable/.claude/`):**
- Skills: `/Users/thieunv/projects/personal/vividkit-web/reference/stable/.claude/skills/<name>/SKILL.md`
- Agents: `/Users/thieunv/projects/personal/vividkit-web/reference/stable/.claude/agents/*.md`
- Hooks: `/Users/thieunv/projects/personal/vividkit-web/reference/stable/.claude/hooks/*.cjs`
- Output styles: `/Users/thieunv/projects/personal/vividkit-web/reference/stable/.claude/output-styles/*.md`
- Rules: `/Users/thieunv/projects/personal/vividkit-web/reference/stable/.claude/rules/*.md`
- Manifest: `/Users/thieunv/projects/personal/vividkit-web/reference/stable/.claude/metadata.json`

**Audits / analysis:**
- Skill complexity audit: `/Users/thieunv/projects/personal/vividkit-web/reference/skill-complexity-audit.md`
- Stable-channel analysis: `/Users/thieunv/projects/personal/vividkit-web/reference/stable-analysis.md`
- Editorial reference (CCS): `/Users/thieunv/projects/personal/vividkit-web/reference/ccs-provider-editorial.json`

**VividKit product framing (for the brainstorming side):**
- `/Users/thieunv/projects/personal/vividkit-web/docs/WHAT_IS_VIVIDKIT.md`
- `/Users/thieunv/projects/personal/vividkit-web/docs/project-overview-pdr.md`
- `/Users/thieunv/projects/personal/vividkit-web/docs/UPCOMING_ENHANCEMENTS.md`

---

## 13. Open Questions for Brainstorming

1. Which layer is the highest-leverage to extend — knowledge, control, or distribution?
2. Is the next product a **kit** (more skills), a **surface** (GUI/dashboard), or a **runtime** (MCP/agent host)?
3. Who is the user — engineer, PM, marketer, or non-technical stakeholder consuming agent output?
4. Does the product need parity with both Engineer + Marketing kits, or just one?
5. How will the product handle the channel split (stable vs beta)?

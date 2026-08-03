# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Role & Responsibilities

Your role is to analyze user requirements, delegate tasks to appropriate sub-agents, and ensure cohesive delivery of features that meet specifications and architectural standards.

## Workflows

- Primary workflow: `./.claude/workflows/primary-workflow.md`
- Development rules: `./.claude/workflows/development-rules.md`
- Orchestration protocols: `./.claude/workflows/orchestration-protocol.md`
- Documentation management: `./.claude/workflows/documentation-management.md`
- And other workflows: `./.claude/workflows/*`

**IMPORTANT:** Analyze the skills catalog and activate the skills that are needed for the task during the process.
**IMPORTANT:** You must follow strictly the development rules in `./.claude/workflows/development-rules.md` file.
**IMPORTANT:** Before you plan or proceed any implementation, always read the `./README.md` file first to get context.
**IMPORTANT:** Sacrifice grammar for the sake of concision when writing reports.
**IMPORTANT:** In reports, list any unresolved questions at the end, if any.

## Python Scripts (Skills)

When running Python scripts from `.claude/skills/`, use the venv Python interpreter:
- **Linux/macOS:** `.claude/skills/.venv/bin/python3 scripts/xxx.py`
- **Windows:** `.claude\skills\.venv\Scripts\python.exe scripts\xxx.py`

This ensures packages installed by `install.sh` (google-genai, pypdf, etc.) are available.

## UI/Styling Conventions

- **Code snippet boxes**: Always support both light and dark mode
  - Background: `bg-slate-100 dark:bg-slate-800/90`
  - Text: `text-slate-700 dark:text-slate-200`
  - Command highlights: `text-purple-600 dark:text-purple-400`
  - Secondary text: `text-slate-500 dark:text-slate-400`
- **Inline code in prose**: Text wrapped in backticks inside rendered guide copy must become a real `<code>` element, not visible literal backticks. Style it for both light and dark mode, e.g. `bg-slate-100 dark:bg-slate-800/90`, `text-slate-800 dark:text-slate-100`, and a subtle border.
- **Paths / commands in guide body**: Prefer real `<code>` chips (not bare monospace spans). For AgentKit pages use `AkInlineCode` / `akCode()` from `src/components/guides/agentkit/`.

## AgentKit Guides (dual-track IA)

AgentKit and ClaudeKit both ship on VividKit Guides. **Do not deprecate or redirect CK URLs.** New setups are steered to AgentKit; CK stays a first-class track.

### Positioning
- AgentKit = next-gen of ClaudeKit (multi-runtime, `ak` CLI, kits). Not a copy-paste of CK docs.
- Conceptual AK pages are rewritten for AK reality; CK Methods / inventory pages stay CK-specific.
- Migration (CK→AK) is backup-first and non-shaming; coexistence is allowed.

### File layout
| Layer | Location |
|-------|----------|
| Guide components | `src/components/guides/agentkit/` (`Ak*` primitives + `*Guide.astro`) |
| EN routes | `src/pages/guides/agentkit/*`, migrate: `src/pages/guides/migrate-claudekit-to-agentkit.astro` |
| VI routes | `src/pages/vi/guides/agentkit/*`, migrate mirror under `vi/` |
| Cheatsheet data | `src/data/guides/agentkit-cli-cheatsheet.ts`, `agentkit-skills-cheatsheet.ts` |
| Sidebar tabs | `src/components/guides/TabNavigation.astro` + `src/types/guides.ts` |
| Layout map | `src/layouts/GuidesLayout.astro` (`agentkit-*` → path) |
| i18n | `src/i18n/en/guides.ts`, `src/i18n/vi/guides.ts` (`guides.agentkit.*`) |
| LLM index | `src/data/guides-llms-index.mjs` |
| CK banner on CK pages | `src/components/guides/CkSetupNotice.astro` |

New AK page checklist: EN page + VI page + guide component + TabNavigation entry + GuidesLayout path + `GuideActiveTab` type + EN/VI i18n title+description + llms index entry.

### Visual direction (AK track)
- **Brand accent**: teal/cyan for AgentKit; **Marketing kit** accents fuchsia/pink when kit-scoped (skills/CLI kit tabs). Keep CK greens where CK-only.
- **Reuse primitives** — do not reinvent cards/callouts/code: `AkPageHero`, `AkSection`, `AkCallout`, `AkCodeBlock`, `AkFeatureGrid`, `AkStepRail`, `AkCompare`, `AkNextLinks`, `AkInlineCode`.
- **Callouts**: Lucide icons (`AkCallout`), not plain letter “i” / emoji-only headers.
- **Code blocks** (`AkCodeBlock`): dark shell (traffic lights + Copy). **Comments (`#…`) must contrast** from commands — muted slate vs purple command text. Prefer one command (or one labeled group) per readable block; multi-command summaries use one row/list item per command.
- **Skills / CLI chips** (match CommandsGuide legend): subcommand purple, arg slate, flag teal.
- **Landing cards**: equal height (`flex` + `h-full` on card roots). Avoid loud “NEW/BETA” pill badges in sidebar — section tone + copy only.
- **Always light + dark** on every surface (borders, gradients, chips).

### Content / fact sources
- Prefer live kit truth under `~/.agentkit/cache/kits/**` + `ak --help` / pinned CLI notes over guessing. Do not invent flags.
- **Update matrix**: `ak self-update` = binary; `ak update` = AgentKit-owned kit content (wizard may include CLI); `ak kit refresh <kit>` = force re-emit one kit. Never collapse these into one command.
- **Statusline**: Claude Code only (`statusline.cjs` + `statuslineLayout`). Not Codex/Cursor status surface.
- **Skills cheatsheet**: bilingual `description` + `descriptionVi`; surface `argumentHint`, `subcommands`, `args`, `flags` from kit `SKILL.md`. Do **not** assume 1:1 with `/ck:*`.
- Invocation: Claude Code / Cursor `/ak:<skill>`; Codex `$ak:<skill>`.
- **Do not commit** local `.agentkit/` install trees or kit cache into this repo.

### Skills / CLI cheatsheet refresh
When kit or CLI surface changes:
1. Re-extract from latest Engineer + Marketing kit `SKILL.md` / CLI help.
2. Update `agentkit-skills-cheatsheet.ts` / `agentkit-cli-cheatsheet.ts` (flags, args, subcommands, VI copy).
3. Keep card UI chips + legend in sync with CommandsGuide color language.

## VividKit Guides - Changelog Sync

When running `/vk:changelog-sync`, update these locations:

### CommandsGuide (`src/components/guides/commands/`)
1. **Version badges**: `commands-categories-grid.astro` - EK/MK version labels
2. **Beta Preview section**: `commands-categories-grid.astro` lines ~99-122 - NEW/ENHANCED/DEPRECATED skills
3. **Commands data**: `src/data/guides/commands-engineer-kit.ts`, `commands-marketing-kit.ts`
4. **i18n strings**: `src/i18n/en/commands.ts`, `src/i18n/vi/commands.ts`

### How CK Works Guide (`src/components/guides/how-ck-works/`, `src/data/guides/how-ck-works/`)

Each skill has **2 data entries** that must stay in sync:

| Layer | File | Content |
|-------|------|---------|
| Scenario (card) | `workflow-visualizer-scenarios.ts` | `titleEn/Vi`, `descEn/Vi`, `steps`, `icon`, `accentColor` |
| Infographic (detail) | `skill-infographics-additional.ts` | `taglineEn/Vi`, `promptExamples`, `processFlow`, `workflowModes`, `guardrails`, `modeCards` |

**During changelog-sync:**
- **New skill** → use `/vk:add-scenario` (creates both scenario + infographic entries)
- **Skill updated** (desc/flags/modes changed) → edit infographic data directly for 1-2 fields; use `/vk:audit-skill` for batch (5+ skills)
- **Skill removed** → delete from both `workflow-visualizer-scenarios.ts` AND `skill-infographics-additional.ts`
- **Periodic sweep** → `/vk:audit-skill` every few versions to catch drift across both layers

**i18n rules:** `descVi` (scenario) and `taglineVi` (infographic) are separate — both need natural Vietnamese, not English copies.

### Other Guides
- **Flowchart versions**: `flowchart-marketing-v12-data.ts`, `flowchart-marketing-summary-section.astro`
- **Hooks data**: `src/data/guides/custom-hooks/custom-hooks-data.ts`
- **Workflows data**: `src/data/guides/workflows-data/workflows-stable.ts`, `workflows-beta-additions.ts`

### Workflows - Bilingual Files
When adding new workflow cards, update BOTH:
- **EN**: `src/data/guides/workflows-data/workflows-*.ts`
- **VI**: `src/data/vi/guides/workflows-data/workflows-*.ts`

**VI translation convention for workflow entries:**
- **Translate to Vietnamese:** `title`, `bestFor`, `description` (in steps), `tip`, `features`, `typeLabel`, time unit in `duration` (e.g. `phút` instead of `min`)
- **Keep in English (verbatim):** `category`, `level` — these are matched against English-keyed lookup tables (`categoryOrder`, `categoryMeta` in `workflows-engineer-section.astro`). Translating them causes the workflow to silently disappear from the rendered page.
- All other technical fields (`command`, `color`, `icon`, `gradientHeader`, etc.) stay verbatim.

**IMPORTANT:** Beta Preview section is separate from main commands grid - don't forget to update both!

### Beta-Only Skills - Dual Listing Convention
When a skill is **beta-exclusive** (exists in beta branch only, not yet in stable), list it in BOTH places:
1. **Beta Preview section** (`commands-categories-grid.astro` beta array) — surfaces the forward-looking signal
2. **Stable category group** (`commands-engineer-kit.ts`) with `isBeta: true` flag — renders a purple BETA badge inline next to the command name, keeping it discoverable in its natural category

When the skill graduates to stable: remove `isBeta: true` flag AND remove the Beta Preview entry. See `.claude/skills/vk-changelog-sync/SKILL.md` → "Universal Beta-Badge Rule" for the full decision matrix.

### Beta → Stable Promotion Checklist

🚨 **MANDATORY when removing a Beta Preview entry** — never just delete the beta card. Three actions every promotion:

1. **Update stable descriptions** (MOST FORGOTTEN): Refresh `desc` and `detail` in i18n (`en/commands.ts`, `vi/commands.ts`) to reflect the upstream stable SKILL.md description — beta-era wording often understates the now-shipped feature. Use PLAIN TEXT only (no `<code>` tags) since stable `detail` field renders via `{cmd.detail}` not `set:html`.
2. **Add newly promoted flags/subcommands**: If the beta added new `--flags` or subcommands, add them to the stable card's `flags`/`subcommands` arrays in `commands-engineer-kit.ts`.
3. **Cross-page isBeta audit**: `isBeta` flags exist in multiple data files beyond CommandsGuide — check ALL:
   - `src/data/guides/commands-engineer-kit.ts` (command cards)
   - `src/data/guides/workflows-data/workflows-stable.ts` (workflow-level, step-level, flag-level)
   - `src/data/guides/workflows-data/workflows-marketing-kit.ts` (step-level)
   - `src/data/vi/guides/workflows-data/workflows-stable.ts` (VI mirror)
   - `src/data/vi/guides/workflows-data/workflows-marketing-kit.ts` (VI mirror)
   - `src/data/guides/flowchart-index.ts` (flowchart nodes/edges/paths)
   - `src/data/guides/custom-hooks/custom-hooks-data.ts` (hooks)

### HTML in Detail Fields
- **Stable commands** (`commands-engineer-kit.ts`): Uses `{cmd.detail}` → **NO HTML rendering** → don't use `<br/>`
- **Beta Preview** (`commands-categories-grid.astro`): Uses `set:html` → **renders HTML** → can use `<br/>`

## Documentation Management

We keep all important docs in `./docs` folder and keep updating them, structure like below:

```
./docs
├── project-overview-pdr.md
├── code-standards.md
├── codebase-summary.md
├── design-guidelines.md
├── deployment-guide.md
├── system-architecture.md
└── project-roadmap.md
```

**IMPORTANT:** *MUST READ* and *MUST COMPLY* all *INSTRUCTIONS* in project `./CLAUDE.md`, especially *WORKFLOWS* section is *CRITICALLY IMPORTANT*, this rule is *MANDATORY. NON-NEGOTIABLE. NO EXCEPTIONS. MUST REMEMBER AT ALL TIMES!!!*
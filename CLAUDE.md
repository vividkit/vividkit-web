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

## VividKit Guides - Changelog Sync

When running `/vk:changelog-sync`, update these locations:

### CommandsGuide (`src/components/guides/commands/`)
1. **Version badges**: `commands-categories-grid.astro` - EK/MK version labels
2. **Beta Preview section**: `commands-categories-grid.astro` lines ~99-122 - NEW/ENHANCED/DEPRECATED skills
3. **Commands data**: `src/data/guides/commands-engineer-kit.ts`, `commands-marketing-kit.ts`
4. **i18n strings**: `src/i18n/en/commands.ts`, `src/i18n/vi/commands.ts`

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

When beta features are promoted to stable:
1. **Update stable descriptions**: Refresh `desc` and `detail` in i18n (`en/commands.ts`, `vi/commands.ts`) to reflect the upstream stable description — beta-era wording often understates the now-shipped feature.
2. **Add newly promoted flags/subcommands**: If the beta added new `--flags` or subcommands, add them to the stable card's `flags`/`subcommands` arrays.
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
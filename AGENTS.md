# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Role & Responsibilities

Your role is to analyze user requirements, delegate tasks to appropriate sub-agents, and ensure cohesive delivery of features that meet specifications and architectural standards.

## Workflows

- Primary workflow: `./.Codex/workflows/primary-workflow.md`
- Development rules: `./.Codex/workflows/development-rules.md`
- Orchestration protocols: `./.Codex/workflows/orchestration-protocol.md`
- Documentation management: `./.Codex/workflows/documentation-management.md`
- And other workflows: `./.Codex/workflows/*`

**IMPORTANT:** Analyze the skills catalog and activate the skills that are needed for the task during the process.
**IMPORTANT:** You must follow strictly the development rules in `./.Codex/workflows/development-rules.md` file.
**IMPORTANT:** Before you plan or proceed any implementation, always read the `./README.md` file first to get context.
**IMPORTANT:** Sacrifice grammar for the sake of concision when writing reports.
**IMPORTANT:** In reports, list any unresolved questions at the end, if any.

## Python Scripts (Skills)

When running Python scripts from `.Codex/skills/`, use the venv Python interpreter:
- **Linux/macOS:** `.Codex/skills/.venv/bin/python3 scripts/xxx.py`
- **Windows:** `.Codex\skills\.venv\Scripts\python.exe scripts\xxx.py`

This ensures packages installed by `install.sh` (google-genai, pypdf, etc.) are available.

## UI/Styling Conventions

- **Code snippet boxes**: Always support both light and dark mode
  - Background: `bg-slate-100 dark:bg-slate-800/90`
  - Text: `text-slate-700 dark:text-slate-200`
  - Command highlights: `text-purple-600 dark:text-purple-400`
  - Secondary text: `text-slate-500 dark:text-slate-400`
- **Inline code in prose**: Text wrapped in backticks inside rendered guide copy must become a real `<code>` element, not visible literal backticks. Style it for both light and dark mode, e.g. `bg-slate-100 dark:bg-slate-800/90`, `text-slate-800 dark:text-slate-100`, and a subtle border.

## AgentKit / Guide Writing Conventions

When editing AgentKit guides under `src/components/guides/agentkit/` (and related i18n/nav), follow these rules so copy stays clear for low-tech readers and stays accurate for power users.

### Plain language first

- Prefer **short lead + bullets/cards** over a single dense paragraph for safety or multi-concept callouts (backup rules, path choice, “what this command does”).
- Avoid CLI-internal jargon in **reader-facing** VI/EN prose unless immediately explained: e.g. TTY, pin scope, preflight, preserve-only, manifest-backed, provenance, neutralize, classify, hard-gate, bit-exact, field hiếm.
- Prefer concrete verbs: *sao lưu / copy tay*, *xem trước (dry-run)*, *ghi thật (--yes)*, *gỡ hẳn*, *chuyển dần* — not calques like “Rời ClaudeKit sạch”, “Update all (wizard)”, “Khác nữa trong schema”.
- Do **not** invent vague labels. Instead of “field hiếm”, say **keys not listed in the table above** / **key không liệt kê hết ở bảng trên**.
- When a flag **narrows scope**, say what it does **and** what it does **not** (e.g. `ak update --global` refreshes machine kits only — **does not** upgrade CLI ak; use `ak self-update` for that). Put that as a short muted hint under the relevant card/command.

### Terminology (keep consistent)

| Concept | VI | EN |
| --- | --- | --- |
| The `ak` executable / program | **CLI ak** | **ak CLI** |
| Soft leave CK | **Chuyển dần** (soft migrate) | Soft migrate / move gradually |
| Hard leave CK | **Gỡ hẳn ClaudeKit** (clean cutover) | Clean cutover / remove fully |

- Do **not** mix “tool ak”, “chương trình ak”, and “binary ak” for the same idea in user-facing copy. Use **CLI ak** / **ak CLI**. “Binary” only when distinguishing the executable file from kit content in a technical note.
- EN product jargon (clean cutover, dry-run) may appear as a gloss in parentheses after natural VI; do not force broken VI calques.

### Code blocks in bilingual guides

- **Commands, flags, paths, package names**: always English / verbatim (copy-pasteable).
- **`#` comments** in snippets on the VI page: **translate to Vietnamese** so readers can follow.
- **Runtime strings inside code** (`echo`, `throw`, `Write-Host`, exit messages): **keep English** — only comments change by locale.
- Prefer `isVi ? \`...\` : \`...\`` (or shared message vars for EN-only runtime strings) so EN/VI snippets stay in sync structurally.

### UI patterns for command lists

- In “quick pick” / comparison cards: render **commands** as mono/code chips; render **or / hoặc**, arrows, and parenthetical notes in **non-mono muted** text — never style “or” like part of the shell command.

### Safety & accuracy claims

- Do not claim “always preserves user files” for uninstall/migrate unless the **manifest-backed** path applies; always give a **stop** condition for legacy / missing metadata / whole-directory deletes.
- Soft migrate vs clean cutover: soft = usually keeps customized files by classification, not a full wipe; clean = multi-step remove + fresh install. Do not promise paid-kit soft migrate apply success on stable without the known caveat (and label beta fixes as beta).
- Avoid pinning **exact** product versions (e.g. AgentKit v2.7.0) in hero/subtitle unless the page is explicitly version-scoped; put version authority in **internal source comments** if needed for maintainers.
- EN and VI must stay **semantically equivalent** on safety, ownership, and destructive steps.

### Layout preference for dense topics

- Prefer: hero short subtitle → scannable cards (do / don’t / path A vs B) → detailed phases with code.
- Dense technical detail (manifest ownership, residual checks) can stay, but lead with plain “what you do / what you see / what not to do”.

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

When the skill graduates to stable: remove `isBeta: true` flag AND remove the Beta Preview entry. See `.Codex/skills/vk-changelog-sync/SKILL.md` → "Universal Beta-Badge Rule" for the full decision matrix.

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

**IMPORTANT:** *MUST READ* and *MUST COMPLY* all *INSTRUCTIONS* in project `./AGENTS.md`, especially *WORKFLOWS* section is *CRITICALLY IMPORTANT*, this rule is *MANDATORY. NON-NEGOTIABLE. NO EXCEPTIONS. MUST REMEMBER AT ALL TIMES!!!*
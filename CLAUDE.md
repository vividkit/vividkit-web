# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Workflows

**IMPORTANT:** Analyze the skills catalog and activate the skills that are needed for the task during the process.
**IMPORTANT:** Before you plan or proceed any implementation, always read the `./README.md` file first to get context.
**IMPORTANT:** Sacrifice grammar for the sake of concision when writing reports.
**IMPORTANT:** In reports, list any unresolved questions at the end, if any.

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
- **No internal maintainer notes in UI copy.** Never surface audit/sync jargon to readers: `ak-docs`, `meta.json`, `pages[]`, channel delta, dual-list, SKILL metadata, snapshot, Fumadocs, “curated for docs”. Put that only in `reference/`, data-file comments, or skill instructions. Reader-facing empty states should say plain outcomes, e.g. *Stable and beta currently ship the same skills* / *Stable và beta đang có cùng bộ skill* — not *ak-docs stable/beta cùng pages[]*. Keep product terms **stable** / **beta** in VI copy (do not calque as “bản ổn định”).
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

## Guide Maintenance Skills

- **AgentKit guides** (`/guides/agentkit/*`): run `/vk:audit-ak-guides --check` after an ak-cli / ak-docs update. Its modules are `/vk:audit-ak-skills` (skills cheatsheet + skill-detail pages), `/vk:audit-ak-workflows` (workflow cards), and `vk:audit-ak-pages` (every other AgentKit page). Skill sources and helper-flag rules: `skills/vk-audit-ak-skills/references/authority.md`.
- **CCS guide**: `/vk:audit-ccs`.
- **ClaudeKit guides are frozen** (commands, how-ck-works, workflows, hooks, cli, cli-commands, migrate, flowchart). There is no upstream sync and the CK sync skills were removed; edit them only to fix bugs. When you do:
  - VI workflow entries in `src/data/vi/guides/workflows-data/` keep `category` and `level` in English. They are lookup keys, and translating them silently hides the card.
  - Stable `detail` in `commands-engineer-kit.ts` renders as plain text (`{cmd.detail}`), so no HTML. The Beta Preview block in `commands-categories-grid.astro` uses `set:html`.

## Documentation Management

We keep all important docs in `./docs` and keep them updated.

**IMPORTANT:** *MUST READ* and *MUST COMPLY* all *INSTRUCTIONS* in project `./CLAUDE.md`, especially *WORKFLOWS* section is *CRITICALLY IMPORTANT*, this rule is *MANDATORY. NON-NEGOTIABLE. NO EXCEPTIONS. MUST REMEMBER AT ALL TIMES!!!*

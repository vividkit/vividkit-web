# AGENTS.md

Repository guidance for Codex contributors.

## Start Here

1. Read `README.md` before planning or implementation.
2. Inspect the actual source, package scripts, and tests before documenting behavior.
3. Use the skills available in the active Codex runtime when they fit the task.

This repository does not track a `.Codex/` workflow directory, repository-local skill runtime, or skill virtual environment. Do not create workflow stubs or infer commands from missing local files.

## Working Rules

- Preserve unrelated changes in a dirty worktree.
- Delegate only bounded work with explicit file ownership.
- Verify paths, commands, route identities, and configuration against current code.
- Keep reports concise and list unresolved questions last.
- Keep important evergreen documentation under `docs/`; update related docs when code contracts change.
- Do not present private or local maintainer tooling as a public VividKit capability.

## UI and Styling

- Code snippet boxes must support light and dark modes:
  - background: `bg-slate-100 dark:bg-slate-800/90`
  - text: `text-slate-700 dark:text-slate-200`
  - command highlight: `text-purple-600 dark:text-purple-400`
  - secondary text: `text-slate-500 dark:text-slate-400`
- Inline backtick content in rendered guide prose must become a real `<code>` element, not visible literal backticks. Use light/dark background, readable text, and a subtle border.
- Interactive controls must remain keyboard reachable, focus-visible, and usable without JavaScript where the page defines a fallback.

## Bilingual Guide Contracts

- Update English and Vietnamese guide data together.
- For workflow entries, translate `title`, `bestFor`, step `description`, `tip`, `features`, `typeLabel`, and duration units.
- Keep workflow `category` and `level` in English because the renderers match English-keyed lookup tables.
- Keep executable fields such as `command`, `color`, `icon`, and `gradientHeader` identical across locales.
- AgentKit lifecycle translation modules must expose matching keys. Claude Code uses `/ak:*`; Codex uses `$ak:*`.
- Beta channel state is bounded to AgentKit Hub, CLI Guide, CLI Commands, and Coexistence Guide; stable remains the default.

## Guide Data Synchronization

When changing command or workflow catalogs, inspect every existing consumer:

- command presentation: `src/components/guides/commands/commands-categories-grid.astro`
- command data: `src/data/guides/commands-engineer-kit.ts`, `src/data/guides/commands-marketing-kit.ts`
- command copy: `src/i18n/en/commands.ts`, `src/i18n/vi/commands.ts`
- workflow data: `src/data/guides/workflows-data/`, `src/data/vi/guides/workflows-data/`
- flowchart data: `src/data/guides/flowchart-index.ts`
- hooks data: `src/data/guides/custom-hooks/custom-hooks-data.ts`

Stable command detail fields render as plain text; do not insert HTML such as `<br/>`. Any beta-only metadata must stay channel-qualified and mirrored across all active consumers.

## Documentation

Core project docs:

- `docs/project-overview-pdr.md`
- `docs/codebase-summary.md`
- `docs/code-standards.md`
- `docs/design-guideline.md`
- `docs/design-system.md`
- `docs/agentkit-migration-validation.md`

Run the repository’s documented verification commands after relevant changes. Record only observed results; never pre-fill release evidence.

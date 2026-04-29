// EN translations - coexistence namespace
// Guide page: how ClaudeKit coexists with your existing Claude Code setup.
export const coexistence = {
  // Hero
  'coexistence.hero.title': 'Will ClaudeKit break my existing Claude Code setup?',
  'coexistence.hero.tldr':
    "Short answer: **no, not by default.** ClaudeKit installs into `./.claude/` for the current project, preserves existing project config, and selectively merges `settings.json`. The command to treat with care is `ck init --fresh`.",
  'coexistence.hero.q1.title': 'Will it touch my global config?',
  'coexistence.hero.q1.body': 'No, unless you add `--global`. Default kit content installs inside this project.',
  'coexistence.hero.q2.title': 'Will it overwrite my CLAUDE.md?',
  'coexistence.hero.q2.body': 'No on normal updates if it already exists. `CLAUDE.md` is treated as user config and skipped.',
  'coexistence.hero.q3.title': 'What about my custom skills?',
  'coexistence.hero.q3.body': 'They survive a normal install. `--fresh` can remove CK-tracked or legacy kit folders.',
  'coexistence.hero.q4.title': 'What if this project already has .claude/?',
  'coexistence.hero.q4.body': 'Normal `ck init` scans project-local `.claude/` files, protects custom files, and merges `.claude/settings.json`.',
  'coexistence.hero.verified': 'Facts verified against ClaudeKit CLI v3.41.4.',

  // Section A — Install scope (two-card layout)
  'coexistence.installScope.heading': 'Where does ClaudeKit live after install?',
  'coexistence.installScope.intro':
    "By default, ClaudeKit only installs into the project you are currently opening. It does not change the shared Claude Code settings on your machine.",
  'coexistence.installScope.project.title': 'Project install (default)',
  'coexistence.installScope.project.tag': 'Recommended',
  'coexistence.installScope.project.command': 'ck init',
  'coexistence.installScope.project.location': 'Lives in: ./.claude/ (this folder only)',
  'coexistence.installScope.project.point1': 'Writes kit files into `./.claude/` for *this* project',
  'coexistence.installScope.project.point2': 'Existing project `CLAUDE.md` and user config files are preserved',
  'coexistence.installScope.project.point3': 'Existing `./.claude/settings.json` is selectively merged',
  'coexistence.installScope.project.point4': 'Your `~/.claude/` global setup stays untouched',
  'coexistence.installScope.global.title': 'Global install (opt-in)',
  'coexistence.installScope.global.tag': 'Only when you ask',
  'coexistence.installScope.global.command': 'ck init --global',
  'coexistence.installScope.global.location': 'Lives in: ~/.claude/ (your home)',
  'coexistence.installScope.global.point1': 'Uses `~/.claude/` by default, or `CLAUDE_CONFIG_DIR` when set',
  'coexistence.installScope.global.point2': 'Global `settings.json` is selectively merged; existing `CLAUDE.md` is preserved',
  'coexistence.installScope.global.point3': 'Affects every project you open',
  'coexistence.installScope.notice.title': 'How does Claude read global and local CLAUDE.md?',
  'coexistence.installScope.notice.body':
    'Claude can load both global and project `CLAUDE.md` files. They are concatenated, not simply replaced.',
  'coexistence.installScope.notice.link': 'Read Claude Mechanics',

  // Section B — Conflict resolution
  'coexistence.conflict.heading': 'How ClaudeKit avoids clobbering your setup',
  'coexistence.conflict.intro':
    'When you run `ck init` in a project that already has Claude Code config, ClaudeKit does not make you choose what to do with every file one by one. It protects important project config files, merges `settings.json`, and only asks for confirmation if other files may be overwritten.',
  'coexistence.conflict.option.protectedConfig.label': 'Protected user config',
  'coexistence.conflict.option.protectedConfig.behavior': 'Existing `.gitignore`, `.mcp.json`, `.ck.json`, `.ckignore`, `.repomixignore`, and `CLAUDE.md` are preserved. Project-local `.claude/` files that are not part of the kit are scanned and protected too.',
  'coexistence.conflict.option.protectedConfig.when': 'Default behavior for normal `ck init` and updates.',
  'coexistence.conflict.option.settingsMerge.label': 'Selective settings merge',
  'coexistence.conflict.option.settingsMerge.behavior':
    '`settings.json` merges hooks and MCP servers, deduplicates commands, and preserves user-only entries.',
  'coexistence.conflict.option.settingsMerge.when': 'Skipped only when `--force-overwrite-settings` is active; `--fresh` enables that flag.',
  'coexistence.conflict.option.conflictConfirm.label': 'Overwrite confirmation',
  'coexistence.conflict.option.conflictConfirm.behavior': 'For other existing files, interactive mode lists conflicts and asks whether to continue.',
  'coexistence.conflict.option.conflictConfirm.when': '`--yes`, CI, or non-interactive runs skip prompts; protected files and `settings.json` still follow their special rules, while other conflicts can be overwritten.',
  'coexistence.conflict.tracking.heading': 'How ClaudeKit knows what it installed',
  'coexistence.conflict.tracking.body':
    'ClaudeKit records installed files in `metadata.json` and tracks installed hooks/MCP servers separately. That metadata powers selective updates, uninstall, and `--fresh` analysis.',
  'coexistence.conflict.example.heading': 'Example: tracked files and merged settings',
  'coexistence.conflict.example.yours': 'User-owned — preserved',
  'coexistence.conflict.example.ck': 'ClaudeKit-tracked — refreshable',

  // Section C — Fresh warning (redesigned: clear danger box + 3-step safe usage)
  'coexistence.fresh.heading': 'The command that deserves a backup',
  'coexistence.fresh.intro':
    '`ck init --fresh` is a full reset. With current `metadata.json`, it removes ClaudeKit-owned and ClaudeKit-modified files while preserving tracked user-created files. Without usable metadata, it falls back to removing these kit folders: `commands/`, `agents/`, `skills/`, `rules/`, `hooks/`. There is no automatic backup.',
  'coexistence.fresh.dangerCard.title': 'What can get removed',
  'coexistence.fresh.dangerCard.body': 'Legacy or metadata-less installs can lose everything in these folders. Current tracked installs remove CK-owned/modified files from them.',
  'coexistence.fresh.dangerCard.folders': 'commands/ · agents/ · skills/ · rules/ · hooks/',
  'coexistence.fresh.dangerCard.note': 'The `-y` flag does not make `--fresh` safer; treat it as destructive until you have a backup.',
  'coexistence.fresh.safe.heading': 'Safe way to use `--fresh`',
  'coexistence.fresh.safe.step1.title': 'Back up first',
  'coexistence.fresh.safe.step1.body': 'Copy your `.claude/` folder to a timestamped backup. Takes 2 seconds.',
  'coexistence.fresh.safe.step2.title': 'Run `--fresh` aware',
  'coexistence.fresh.safe.step2.body': 'You now have a safety net, so any missing custom file can be restored manually.',
  'coexistence.fresh.safe.step3.title': 'Restore what you need',
  'coexistence.fresh.safe.step3.body': 'Copy your custom files back from the backup, one folder at a time.',
  'coexistence.fresh.tip':
    "Only need to refresh kit content? Use `ck init --yes`. Use `ck update -y` when you want to update the CLI package; after that, ClaudeKit may refresh kit content for detected local/global installs and will skip it when content is already latest.",

  // Section D — Migrate
  'coexistence.migrate.heading': 'Moving to a different agentic IDE?',
  'coexistence.migrate.intro':
    "`ck migrate` reconciles agents, commands, skills, config, rules, and hooks from Claude Code into selected target providers such as Codex, Cursor, Gemini CLI, OpenCode, and others. Source Claude Code files stay in place.",
  'coexistence.migrate.notMigrate': 'Not what you need? `ck migrate` is for **switching tools**, not version upgrades.',
  'coexistence.migrate.col.provider': 'Tool',
  'coexistence.migrate.col.target': 'Where it ends up',
  'coexistence.migrate.note':
    'Paths verified against `src/commands/portable/provider-registry.ts` at CLI v3.41.4.',

  // Section E — Recipes
  'coexistence.recipes.heading': 'Recipes: Bring Your Own Workflow',
  'coexistence.recipes.intro': 'Three concrete recipes for living with both your custom setup and ClaudeKit.',
  'coexistence.recipe.customStatusline.title': 'Keep your global Claude Code setup untouched',
  'coexistence.recipe.customStatusline.desc':
    'Run `ck init` (no `--global`). Project install writes into `./.claude/`, so global Claude Code files under `~/.claude/` are out of scope.',
  'coexistence.recipe.customHookMerge.title': 'Merge custom hooks via selective settings merge',
  'coexistence.recipe.customHookMerge.desc':
    '`settings.json` is selectively merged by default. ClaudeKit adds or refreshes tracked hooks while preserving user-only hook entries.',
  'coexistence.recipe.manualBackup.title': 'Manual backup before `--fresh`',
  'coexistence.recipe.manualBackup.desc':
    'Always snapshot before destructive ops. Restore from the timestamped folder if anything is missing afterwards.',

  // FAQ
  'coexistence.faq.heading': 'FAQ',
  'coexistence.faq.q1': 'Does ClaudeKit overwrite my CLAUDE.md?',
  'coexistence.faq.a1':
    'Normal `ck init` preserves an existing `CLAUDE.md` because it is listed as user config. In global mode, a missing `~/.claude/CLAUDE.md` can be copied; with `--fresh`, global `CLAUDE.md` can be replaced.',
  'coexistence.faq.q2': 'What happens to my custom commands and skills?',
  'coexistence.faq.a2':
    'Standard `ck init` scans for custom `.claude` files and protects them. The exception is `--fresh`: it removes CK-owned/modified files, and legacy installs without metadata fall back to deleting the kit component directories.',
  'coexistence.faq.q3': 'Can I uninstall ClaudeKit?',
  'coexistence.faq.a3':
    'Use `ck uninstall`. It supports `--local`, `--global`, `--all`, `--dry-run`, `--yes`, and preserves user-created or modified files by default. Use `--force-overwrite` only when you really want full removal.',
  'coexistence.faq.q4': 'How do I update ClaudeKit safely?',
  'coexistence.faq.a4':
    "`ck init --yes` only refreshes kit content; it does not update the CLI package. `ck update -y` updates the CLI package first, then may refresh kit content for local/global installs when content is not already latest. Avoid `--fresh` for routine updates.",
} as const;

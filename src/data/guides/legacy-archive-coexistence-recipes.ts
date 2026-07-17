/** Frozen ClaudeKit coexistence data for the immutable archive. */

interface LegacyConflictOption {
  id: 'protectedConfig' | 'settingsMerge' | 'conflictConfirm';
  labelKey: string;
  behaviorKey: string;
  whenKey: string;
  isDefault?: boolean;
}

export const conflictOptions: readonly LegacyConflictOption[] = [
  {
    id: 'protectedConfig',
    labelKey: 'coexistence.conflict.option.protectedConfig.label',
    behaviorKey: 'coexistence.conflict.option.protectedConfig.behavior',
    whenKey: 'coexistence.conflict.option.protectedConfig.when',
    isDefault: true,
  },
  {
    id: 'settingsMerge',
    labelKey: 'coexistence.conflict.option.settingsMerge.label',
    behaviorKey: 'coexistence.conflict.option.settingsMerge.behavior',
    whenKey: 'coexistence.conflict.option.settingsMerge.when',
  },
  {
    id: 'conflictConfirm',
    labelKey: 'coexistence.conflict.option.conflictConfirm.label',
    behaviorKey: 'coexistence.conflict.option.conflictConfirm.behavior',
    whenKey: 'coexistence.conflict.option.conflictConfirm.when',
  },
] as const;

export const migrateProviders = [
  { id: 'cursor', name: 'Cursor', type: 'skill', from: '.claude/skills', to: 'project .cursor/skills, global ~/.cursor/skills', since: '3.41.4' },
  { id: 'codex', name: 'Codex', type: 'mixed', from: '.claude/agents, .claude/skills, CLAUDE.md', to: '.codex/agents, .agents/skills, AGENTS.md', since: '3.41.4' },
  { id: 'gemini-cli', name: 'Gemini CLI', type: 'mixed', from: '.claude/commands, .claude/skills, CLAUDE.md', to: '.gemini/commands, .agents/skills, GEMINI.md', since: '3.41.4' },
  { id: 'windsurf', name: 'Windsurf', type: 'mixed', from: '.claude/commands, .claude/skills, .claude/rules', to: '.windsurf/workflows, .windsurf/skills, .windsurf/rules', since: '3.41.4' },
  { id: 'opencode', name: 'OpenCode', type: 'mixed', from: '.claude/agents, .claude/commands, .claude/skills', to: '.opencode/agents, .opencode/commands, .opencode/skills', since: '3.41.4' },
] as const;

export const coexistenceRecipes = [
  {
    id: 'customStatusline',
    titleKey: 'coexistence.recipe.customStatusline.title',
    descKey: 'coexistence.recipe.customStatusline.desc',
    codeBlocks: [{
      lang: 'bash',
      code: `# Default project install — your global Claude Code setup is untouched
ck init

# Verify project-local install files
find ./.claude -maxdepth 2 -type f | head`,
    }],
  },
  {
    id: 'customHookMerge',
    titleKey: 'coexistence.recipe.customHookMerge.title',
    descKey: 'coexistence.recipe.customHookMerge.desc',
    codeBlocks: [
      {
        lang: 'bash',
        code: `# settings.json is selectively merged by default.
# User hooks are preserved; ClaudeKit hooks are deduplicated and tracked.
ck init`,
      },
      {
        lang: 'json',
        code: `// .claude/settings.json after selective merge
{
  "hooks": {
    "UserPromptSubmit": [
      { "command": "your-custom-hook.sh" }
    ]
  }
}`,
      },
    ],
  },
  {
    id: 'manualBackup',
    titleKey: 'coexistence.recipe.manualBackup.title',
    descKey: 'coexistence.recipe.manualBackup.desc',
    codeBlocks: [{
      lang: 'bash',
      code: `# Snapshot project-local state
cp -r ./.claude "./.claude.bak.$(date +%s)"

# Or for global
cp -r ~/.claude "$HOME/.claude.bak.$(date +%s)"

# Then run --fresh fully aware of the reset
ck init --fresh

# Restore selectively from backup
cp -r ./.claude.bak.<timestamp>/skills/my-skill ./.claude/skills/`,
    }],
  },
] as const;

export const faqEntries = [
  { id: 'q1', questionKey: 'coexistence.faq.q1', answerKey: 'coexistence.faq.a1' },
  { id: 'q2', questionKey: 'coexistence.faq.q2', answerKey: 'coexistence.faq.a2' },
  { id: 'q3', questionKey: 'coexistence.faq.q3', answerKey: 'coexistence.faq.a3' },
  { id: 'q4', questionKey: 'coexistence.faq.q4', answerKey: 'coexistence.faq.a4' },
] as const;

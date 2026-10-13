# vk:audit-ak-skills — setup

Runtimes discover skills from `.claude/skills/` and `.agents/skills/` (gitignored), not from `skills/`. After a fresh clone, once:

```bash
ln -sfn ../../skills/vk-audit-ak-skills .claude/skills/vk-audit-ak-skills
ln -sfn ../../skills/vk-audit-ak-skills .agents/skills/vk-audit-ak-skills
```

Restart Claude Code / Codex.

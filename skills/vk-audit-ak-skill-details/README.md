# vk:audit-ak-skills — setup

Runtimes discover skills from `.claude/skills/` and `.agents/skills/` (gitignored), not from `skills/`. After a fresh clone, once:

```bash
ln -sfn ../../skills/vk-audit-ak-skill-details .claude/skills/vk-audit-ak-skill-details
ln -sfn ../../skills/vk-audit-ak-skill-details .agents/skills/vk-audit-ak-skill-details
```

Restart Claude Code / Codex.

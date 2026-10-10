# vk:audit-ak-pages — setup

Runtimes discover skills from `.claude/skills/` and `.agents/skills/` (gitignored), not from `skills/`. After a fresh clone, once:

```bash
ln -sfn ../../skills/vk-audit-ak-pages .claude/skills/vk-audit-ak-pages
ln -sfn ../../skills/vk-audit-ak-pages .agents/skills/vk-audit-ak-pages
```

Restart Claude Code / Codex.

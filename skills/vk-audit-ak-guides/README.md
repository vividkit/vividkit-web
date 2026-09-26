# vk:audit-ak-guides — setup

Runtimes discover skills from `.claude/skills/` and `.agents/skills/` (gitignored), not from `skills/`. After a fresh clone, once:

```bash
ln -sfn ../../skills/vk-audit-ak-guides .claude/skills/vk-audit-ak-guides
ln -sfn ../../skills/vk-audit-ak-guides .agents/skills/vk-audit-ak-guides
```

Restart Claude Code / Codex.

# AgentKit skills meta (VividKit)

Lock for **skill detail visual pages** vs kit `SKILL.md`.
Agent skill: `/vk:sync-ak-skill-details`.

| File | Role |
| --- | --- |
| `skill-details-lock.json` | Per-page source path + sha256 of the SKILL.md used to author `/guides/agentkit/skills/{engineer\|marketing}/{id}` |
Guide prose lives in `src/data/guides/agentkit-skill-details/`. The lock does not publish copy.

## After an AgentKit kit bump

1. Point `--kit-root` at the agentkit checkout (directory that contains `kits/`).
2. Run:

```bash
node scripts/check-ak-skill-details.mjs --kit-root /path/to/agentkit
```

3. For each `~ kit/id` line, re-author that detail TS file from the new `SKILL.md` (do not invent flags).
4. Re-run with `--write-lock`.

Current lock: AgentKit **2.14.0** (`405ea37`).

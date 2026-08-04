# /ck:folder-context — Subfolder-scoped CLAUDE.md / AGENTS.md

Source: `reference/beta/claude/skills/folder-context/SKILL.md`

## Authoritative Flow

```
1. Target Folder: Subfolder path only
2. Inspect Folder: Source, config, local markdown
3. Sanity Gate: Skip static or discoverable-on-demand folders
4. Propose Outline: Grouped outline; wait for confirmation
5. CLAUDE.md + AGENTS.md: Compact CLAUDE.md; AGENTS.md symlink/pointer
```

## Hard Gate

Never edits root CLAUDE.md or AGENTS.md. Sanity gate skips static/reference folders.

## Skills / Tools Activated

| Type | Name |
|------|------|
| tool | `Read` |
| tool | `Write` |

## Mode Selection

See argument-hint and flags on the CommandsGuide card.

## Complexity Routing

None — single primary path with optional flags.

## Artifacts

<target>/CLAUDE.md and <target>/AGENTS.md

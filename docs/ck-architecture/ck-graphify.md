# /ck:graphify - Queryable Knowledge Graph

Source: local `ck:graphify` skill.

## Authoritative Flow

1. Input: user gives repo/path plus optional flag.
2. Build graph from code, docs, papers, images, audio, and video.
3. Extract code locally with tree-sitter AST; transcribe media locally with Whisper.
4. Extract semantics for docs/images with configured model provider when needed.
5. Tag relationships as `EXTRACTED`, `INFERRED`, or `AMBIGUOUS`.
6. Write graph artifacts under `graphify-out/`.
7. Optionally serve `graphify-out/graph.json` through MCP tools.
8. Use report/graph before planning, often with `ck:scout` for narrower file discovery.

## Skills Activated

| Type | Skill / Tool |
|------|--------------|
| Required | `graphify` CLI, tree-sitter |
| Media | Whisper |
| Optional | MCP server, Neo4j, Leiden, PDF/video/office extras |
| Related | `ck:scout`, `ck:repomix`, `ck:gkg`, `ck:plan` |

## Sub-agents

LLM sub-agents can process docs, papers, and images in parallel during semantic extraction.

## Mode Selection

| Mode | Meaning |
|------|---------|
| default | Build graph from current directory. |
| `[path]` | Build graph from a specific folder. |
| `--watch` | Rebuild incrementally on file changes. |
| `--report` | Generate/use graph report. |
| `--mcp` | Expose graph JSON through MCP server tools. |

## Hard Gate

- Code stays local.
- Audio/video transcription is local.
- Docs and images may use configured model provider for semantic extraction.
- Do not use this command as a CK installer.
- Python 3.10+ is required.
- MCP, PDF/video/office, Neo4j, and Leiden features require optional installs.

## Artifacts

- `graphify-out/graph.html`
- `graphify-out/GRAPH_REPORT.md`
- `graphify-out/graph.json`
- `graphify-out/cache/`

# /ck:repomix - AI Context Package

Source: local `ck:repomix` skill.

## Authoritative Flow

1. Assess target repo/path, output format, and sensitive-data risk.
2. Configure include/ignore patterns and optional comment removal.
3. Execute Repomix with selected options.
4. Validate generated output for secrets, completeness, and token budget.
5. Deliver packaged context with token summary, warnings, and caveats.

## Skills Activated

| Type | Tool |
|------|------|
| Required | `repomix` or `npx repomix` |
| Filtering | `.gitignore`, `.repomixignore`, include/ignore patterns |
| Safety | Secretlint/security checks |
| Optional | Clipboard output, MCP server |

## Sub-agents

None. This is a packaging and reporting tool.

## Mode Selection

| Mode | Meaning |
|------|---------|
| default | Pack current directory as XML. |
| `[path]` | Pack a local target path. |
| `--remote` | Pack a remote repo/URL/commit target. |
| `--style` | Choose `xml`, `markdown`, `json`, or `plain`. |
| `--include` / `-i` | Focus or ignore paths. |
| `--copy` | Copy output to clipboard. |

## Hard Gate

- Review output before sharing.
- Resolve Secretlint warnings or explicitly accept risk.
- Define filters before packing broad or third-party repos.
- Check token size before using output as LLM context.
- Clone private remotes locally rather than relying on remote fetch.

## Artifacts

- `repomix-output.xml` by default.
- Custom `-o output.md|xml|json|txt`.
- `repomix.config.json`.
- `.repomixignore`.
- Token-count tree and security warnings.

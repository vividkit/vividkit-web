# /ck:llms - LLM-Friendly Documentation Index

Source: local `ck:llms` skill.

## Authoritative Flow

1. Gather local docs with `ck:scout`, or fetch a docs URL.
2. Analyze H1 titles, descriptions, categories, and core vs optional docs.
3. Generate output with the generator or manual llmstxt fallback.
4. Structure result with H1, optional blockquote summary, H2 groups, links, and `## Optional` last.
5. Validate H1 presence, links, concise descriptions, optional placement, and jargon level.

## Skills Activated

| Type | Skill / Tool |
|------|--------------|
| Required | `ck:scout` |
| URL source | WebFetch |
| Generation | Bash/Python generator or manual llmstxt fallback |
| Filesystem | Read/write docs index artifacts |

## Sub-agents

No dedicated sub-agent is required. `ck:scout` may use Explore sub-agents depending on scope.

## Mode Selection

| Mode | Meaning |
|------|---------|
| default | Scan current project `./docs`. |
| `<path>` | Scan target directory; file-shaped input uses fallback/spec route. |
| `<url>` | Fetch docs structure from URL. |
| `--full` | Also generate `llms-full.txt`. |
| `--output <path>` | Write outputs outside project root. |
| `--url <base>` | Use base URL for generated links. |

## Hard Gate

- Generates documentation index files only.
- Does not publish, deploy, update SEO assets, robots, or sitemap files.
- Do not expose env vars, private/internal config, system prompts, or personal data.
- Privacy approval still applies if source scanning hits sensitive files.

## Artifacts

- `llms.txt`.
- Optional `llms-full.txt`.
- Custom output directory with `--output`.

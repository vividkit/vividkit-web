# /ck:docs-seeker - Current Documentation Lookup

## Authoritative Flow

1. Parse library, topic, version, language, plugin, or repository signal.
2. Classify query as topic-specific or general.
3. Fetch documentation through the scripted Context7/llms path.
4. If topic lookup fails, fall back to general docs.
5. If multiple URLs return, prioritize critical, important, and supplementary sources.
6. Fan out broad docs exploration when useful.
7. If docs coverage is missing, fall back to repository analysis with packed context.
8. Return concise answer with sources, caveats, and confidence.

## Skills Activated

| Type | Skill / Tool |
|------|--------------|
| Mandatory | ck:docs-seeker |
| Fallback | ck:repomix, ck:scout |
| Tools | docs detector, docs fetcher, llms analyzer, WebFetch/WebSearch |
| Conditional agents | Explorer or researcher agents for broad docs fanout |

## Sub-agents

No mandatory sub-agent is required for narrow topic lookups. Broad documentation sets can be distributed to explorer/researcher agents after URL prioritization.

## Mode Selection

| Route | Behavior |
|------|----------|
| topic-search | Specific feature, component, or API |
| library-search | Broad documentation sweep |
| repo-analysis | Fallback when docs are missing |
| version-specific | Versioned docs or explicit caveat |
| multi-language | Try requested language, then fallback |
| plugin-focused | Narrow broad ecosystem scope |

## Complexity Routing

Use direct fetch for 1-3 high-priority URLs. Use parallel exploration for broad docs. Use repository fallback only when docs/llms coverage is absent or insufficient.

## Hard Gate

Use the scripted docs path first and avoid manual URL guessing. Prefer official/current docs and label code-inferred findings. Do not present tutorials as primary documentation.

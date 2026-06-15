# /ck:ai-artist - AI Image Generation

Source: local `ck:ai-artist` skill.

## Authoritative Flow

1. Parse concept, mode, provider, and skip flag.
2. Unless skipped, ask validation questions for style, mood, colors, and aspect ratio.
3. Ask dynamic follow-up when the concept implies banner, poster, thumbnail, product, or showcase output.
4. Build prompt from concept plus chosen visual constraints and avoid watermark language.
5. Preview prompt and ask for generation confirmation, edit, or restart.
6. Build mode prompt: best match, creative remix, wild transform, or all variants.
7. Route image rendering through `ck:ai-multimodal`.
8. Save PNG output; `all` writes one file per mode.

## Skills Activated

| Type | Skill / Tool |
|------|--------------|
| Mandatory | `AskUserQuestion`, `ck:ai-multimodal` |
| Prompting | BM25 prompt search, curated prompt database |
| Providers | Google image API, OpenRouter-backed Google route |
| Scripts | Python generation/search scripts |

## Sub-agents

None. The command runs on the main agent with validation questions before rendering.

## Mode Selection

| Mode | Meaning |
|------|---------|
| `--mode search` | Default. Pick best prompt from curated prompts. |
| `--mode creative` | Remix top matching prompts. |
| `--mode wild` | Apply a random strong visual transformation. |
| `--mode all` | Run search, creative, and wild; save one file per mode. |
| `--provider auto` | Use configured provider preference. |
| `--provider google` | Direct Google route. |
| `--provider openrouter` | OpenRouter-backed Google route. |
| `--skip` | Bypass interview and use defaults. |

## Hard Gate

- Validation interview is mandatory unless `--skip` is used.
- Prompt preview and generation confirmation happen before image generation.
- Edit prompt loops before generation.
- Start over returns to the interview.
- Missing API key blocks generation with setup instructions.
- Model errors suggest retrying with a different model route.

## Artifacts

- Generated PNG image.
- For `--mode all`: `-search`, `-creative`, and `-wild` PNG variants.
- Prompt preview text before approval.
- Optional dry-run/show-prompt output.
- Final status with output path, style, mood, and aspect ratio.

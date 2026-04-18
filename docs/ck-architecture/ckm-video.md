# /ckm:video — Video Production Skill

Source: `reference/marketing-stable/.claude/skills/video/SKILL.md`

## Authoritative Flow

```
Step 1: Input — user invokes /ckm:video <subcommand> <topic>
Step 2: Route — parse subcommand (create | script-create | storyboard-create)
Step 3: Brand Context — inject-brand-context.cjs reads docs/brand-guidelines.md
Step 4: Execute subcommand workflow (varies by type)
Step 5: AI Generation — Veo 3.1 / Imagen 4 / Nano Banana for visuals
Step 6: Quality Review Gates — AI reviews at each production stage
Step 7: Assembly — FFmpeg post-production + platform export
Step 8: Output — video assets, scripts, storyboards to assets/videos/
```

## Subcommands

| Subcommand | Description | Key Flow |
|------------|-------------|----------|
| `create` | Full Veo 3.1 video pipeline | Script → Storyboard → Frames → Video → Assembly |
| `script-create` | Production-ready script | Research → Brief → Brand align → Write script |
| `storyboard-create` | START/END frame pairs | Parse script → Character portraits → Frames → Review |

## Skills Activated

| Type | Skill | Used By |
|------|-------|---------|
| Core | video | All subcommands (references, templates) |
| Core | creativity | Style templates, color psychology, audio trends |
| Core | ai-multimodal | Veo 3.1 / Imagen 4 / Nano Banana generation |
| Conditional | media-processing | FFmpeg assembly + platform exports |
| Conditional | assets-organizing | Output path conventions |
| Conditional | brand | Brand alignment for scripts |
| Conditional | content-marketing | Funnel mapping for scripts |
| Conditional | ai-artist | Character portraits in storyboards |

## Agents Used

| Agent | Used By | Purpose |
|-------|---------|---------|
| Main agent | All subcommands | Route, execute, coordinate |
| Researcher sub-agents | script-create | Parallel research for video brief |

## AI Models

| Model | Used By |
|-------|---------|
| Veo 3.1 | Video clip generation (create) |
| Imagen 4 / Nano Banana Flash | START/END frame generation |
| Gemini 3 Pro Image | Character portrait generation (storyboard) |
| Gemini TTS | Voiceover generation |
| Lyria | Background music generation |

## Quality Review Gates

5 review gates in full pipeline: script, storyboard, audio, frames (score >= 8), video clips

## Platform Support

YouTube (16:9), TikTok (9:16), Reels (9:16), YouTube Shorts (9:16), Instagram (1:1), LinkedIn (16:9)

## Scripts

| Script | Purpose |
|--------|---------|
| `generate-video.cjs` | AI video generation |
| `create-storyboard.cjs` | Storyboard generation |
| `analyze-video.cjs` | Video analysis |
| `extract-captions.cjs` | Caption extraction |
| `optimize-for-platform.cjs` | Platform optimization |

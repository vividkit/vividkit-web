# /ckm:design — Unified Design Skill

Source: `reference/marketing-stable/.claude/skills/design/SKILL.md`

## Authoritative Flow

```
Step 1: Input — user invokes /ckm:design <design-type> <context>
Step 2: Route — parse space-arg, match sub-skill from routing table
Step 3: Brand Context — inject-brand-context.cjs reads user's docs/brand-guidelines.md
Step 4: Execute sub-skill workflow (varies by design type)
Step 5: Output — deliver design assets (images, HTML, SVG, presentations)
```

## Sub-skills (9 design types)

| Design Type | Route Target | Key Tools | Output |
|------------|--------------|-----------|--------|
| `brand` | External skill (ckm:brand) | brand skill | Brand identity, voice, assets |
| `design-system` | External skill (ckm:design-system) | design-system skill | Tokens, CSS vars, specs |
| `ui-styling` | External skill | ui-styling skill | shadcn/ui + Tailwind config |
| `logo` | Built-in | Gemini AI (generate.py), search.py | Logo images (55 styles, 30 palettes) |
| `cip` | Built-in | Gemini Flash/Pro (generate.py), render-html.py | CIP mockups (50+ deliverables) |
| `slides` | Built-in | Chart.js, HTML templates | HTML presentations |
| `banner` | Built-in | frontend-design, ai-artist, chrome-devtools | PNG banners (22 styles) |
| `social photos` | Built-in | ui-ux-pro-max, chrome-devtools, Playwright | Multi-platform social images |
| `icon` | Built-in | Gemini 3.1 Pro (generate.py) | SVG icons (15 styles) |

## Skills Activated

| Type | Skill | Used By |
|------|-------|---------|
| Core | brand | brand identity sub-skill |
| Core | design-system | tokens sub-skill |
| Core | ui-styling | UI styling sub-skill |
| Conditional | ai-artist | banner (visual generation) |
| Conditional | ai-multimodal | banner, social photos (image gen) |
| Conditional | frontend-design | banner, social photos (HTML/CSS) |
| Conditional | ui-ux-pro-max | social photos, logo (HTML preview) |
| Conditional | chrome-devtools | banner, social photos (screenshot export) |
| Conditional | project-management | social photos (TODO orchestration) |
| Conditional | assets-organizing | social photos (file organization) |

## Agents Used

| Agent | Used By | Purpose |
|-------|---------|---------|
| Main agent | All types | Route, execute, coordinate |
| Parallel sub-agents | social photos | Independent design per platform/idea |

## Platforms Supported

Facebook, Twitter/X, LinkedIn, YouTube, Instagram, Pinterest, TikTok, Threads, Google Ads

## AI Models

| Model | Used By |
|-------|---------|
| gemini-2.5-flash-image | Logo gen (default), CIP gen (default) |
| gemini-3-pro-image-preview | CIP gen (pro mode, 4K text) |
| gemini-3.1-pro-preview | Icon gen (SVG text output) |

## Workflows

- **Complete Brand Package**: Logo → CIP → Slides presentation
- **New Design System**: Brand → Tokens → Tailwind/shadcn implementation

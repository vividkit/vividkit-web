# /ck:frontend-design — Polished Frontend Interface Creation

Source: `~/.claude/skills/frontend-design/SKILL.md`

## Authoritative Flow

```
Step 1: Input — user provides design brief, screenshot, video, or description
Step 2: Workflow Selection — route to appropriate workflow based on input type
         (screenshot | video | describe | 3D | quick | immersive | redesign | from-scratch)
Step 3: Activate ck:ui-ux-pro-max — design intelligence (mandatory for all workflows)
Step 4: Analyze — if screenshot/video: ck:ai-multimodal extracts colors, fonts, spacing, effects
Step 5: Design Thinking — bold aesthetic direction (tone, purpose, differentiation)
         Configure Design Dials: DESIGN_VARIANCE(8), MOTION_INTENSITY(6), VISUAL_DENSITY(4)
Step 6: Plan — ui-ux-designer sub-agent creates phased implementation plan
Step 7: Implement — production-grade code with anti-slop checks
Step 8: Verify — compare to original/brief, run anti-slop checklist
Step 9: Document — update docs/design-guidelines.md if approved
```

## Skills Activated

| Type | Skill |
|------|-------|
| Mandatory | ck:ui-ux-pro-max (design intelligence, activated FIRST) |
| Mandatory | ck:ai-multimodal (asset generation via Imagen/Nano Banana, visual analysis via Gemini) |
| Optional | ck:media-processing (image optimization, format conversion) |
| Optional | ck:threejs (for 3D/WebGL workflow) |

## Sub-agents

- **ui-ux-designer** — spawned for phased implementation planning
- Main agent handles implementation directly (no fullstack-developer sub-agent)

## Workflow Selection (7 workflows)

| Input | Workflow | Key difference |
|-------|----------|----------------|
| Screenshot | workflow-screenshot.md | Pixel-perfect replication |
| Video | workflow-video.md | Replication + animations |
| Describe only | workflow-describe.md | Document for devs, no code |
| 3D/WebGL | workflow-3d.md | Three.js immersive experience |
| Quick task | workflow-quick.md | Rapid implementation |
| Complex/award | workflow-immersive.md | Full immersive, max quality |
| Existing upgrade | redesign-audit-checklist.md | Audit + improve existing |

## Design Dials

Three configurable parameters driving design decisions:
- `DESIGN_VARIANCE` (default 8) — symmetry vs asymmetry
- `MOTION_INTENSITY` (default 6) — hover states vs spring physics
- `VISUAL_DENSITY` (default 4) — art gallery vs cockpit density

## Hard Gate

Anti-slop checklist MUST pass before delivery. Forbidden: Inter/Roboto fonts, AI purple gradients, 3-column equal cards, "John Doe" content, neon glows.

## Key References

- `anti-slop-rules.md` — forbidden AI patterns
- `premium-design-patterns.md` — quality benchmarks
- `magicui-components.md` — 80+ component library
- `bento-motion-engine.md` — SaaS dashboard patterns
- `performance-guardrails.md` — animation/blur perf limits

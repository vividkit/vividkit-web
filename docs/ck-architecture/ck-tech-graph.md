# /ck:tech-graph — Publish-grade SVG+PNG diagrams

Source: `reference/beta/claude/skills/tech-graph/SKILL.md`

Vendored from upstream `fireworks-tech-graph` (yizhiyanhua-ai, MIT). Generates production-quality SVG diagrams and exports PNG via `rsvg-convert` (`librsvg`, installed by `claude/skills/install.sh`). Pairs with `/ck:preview --diagram` for visual self-review and `/ck:mermaidjs-v11` for inline-doc diagrams; this skill is the publish-grade output mode.

## Authoritative Flow

1. Classify the diagram type and extract structure (layers, nodes, edges, flows, semantic groups) from the user description.
2. Plan layout per the type's rules, load the chosen style reference for exact color tokens, and check `references/icons.md` for known product icons.
3. Write the SVG (mandatory Python list method to avoid truncation/syntax errors), mapping concepts to the shared shape vocabulary and arrow semantics.
4. Validate syntax: `rsvg-convert file.svg -o /dev/null`; then export PNG: `rsvg-convert -w 1920 file.svg -o file.png`.
5. Optional visual self-review: if the runtime can read images, load the PNG back, inspect for collisions/overlaps, revise and re-export until clean.
6. Report generated SVG + PNG paths.

## Diagram Types

Architecture, Data Flow, Flowchart / Process, Agent Architecture, Memory Architecture, Sequence, Comparison / Feature Matrix, Timeline / Gantt, Mind Map / Concept Map, Class (UML), Use Case (UML), State Machine (UML), ER, and Network Topology. A UML Coverage Map maps all 14 UML diagram types onto these supported types.

## Mode Selection — Visual Styles

| # | Style | Background | Best For |
|---|-------|------------|----------|
| 1 | Flat Icon (default) | White | Blogs, docs, presentations |
| 2 | Dark Terminal | `#0f0f1a` | GitHub, dev articles |
| 3 | Blueprint | `#0a1628` | Formal architecture/UML docs |
| 4 | Notion Clean | White, minimal | Inline/Notion-embedded docs |
| 5 | Glassmorphism | Dark gradient | Product sites, keynotes |
| 6 | Claude Official | Cream `#f8f6f3` | Anthropic-style diagrams |
| 7 | OpenAI Official | White `#ffffff` | OpenAI-style diagrams |
| 8 | Dark Luxury (AI-authored) | Black `#0a0a0a` | Premium editorial; hand-craft SVG (no template generator) |

Default is Style 1. `references/style-diagram-matrix.md` maps each style's suitability per diagram type. Output paths/style chosen via `--output /path/` and style flag; PNG export defaults to 1920px (2x retina).

## Skills / Tooling Activated

| Type | Tooling |
|------|---------|
| Render | `rsvg-convert` (librsvg) — SVG validate + PNG export |
| Helper scripts | `generate-from-template.py`, `generate-diagram.sh`, `validate-svg.sh`, `test-all-styles.sh` |
| Self-review | `/ck:preview --diagram` for visual inspection |

## Sub-agents

Single-agent skill. No sub-agents; the agent classifies, lays out, writes, validates, and renders directly.

## Hard Gate

Validate SVG syntax before PNG export. When image reading is available, visually verify the rendered PNG (arrows not crossing box interiors, no label/lifeline collisions, no overlapping boxes, legend off content) and revise until clean. Error recovery is bounded: first error → targeted fix, second → switch generation method, third → stop and report. Never retry the same failing command.

## Artifacts

- `./[derived-name].svg` and `./[derived-name].png` (or `--output` path).

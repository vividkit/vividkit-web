# /ck:html-video — HTML/CSS/JS → Local MP4 Video

Source: reference/beta/claude/skills/html-video/SKILL.md

## Authoritative Flow

1. Brief: pin audience, goal, duration, aspect ratio, source assets/URLs, template preference, output path, and whether the final is a draft proof or polished export.
2. Setup: prefer a published `html-video` binary; otherwise use a source checkout (do not vendor the engine). Upstream declares Node `>=20`, pnpm `>=9`, `pnpm@9.15.0`. Run `doctor` and `list-engines` first.
3. Discover: `search-templates --intent ... --aspect ... --top N`, then `inspect-template <id>`. Some templates expose CLI variables; others only theme through Studio.
4. Project: `project-create` / `project-list` / `project-show`, then `project-set-template`, `project-add-asset`, and `project-set-var(s)` when a variable schema exists.
5. Preview: `project-preview` returns an `html_path` to open; launch `studio --port 3071` for agent-assisted rewrite, layout tuning, and empty-schema templates.
6. Render + verify: `project-render --output ... --stream-progress`, then confirm with `ffprobe`. The MP4 is not done until ffprobe reports nonzero duration and expected dimensions.

## Skills Activated

| Type | Skill / Tooling |
|------|-----------------|
| Engine | `nexu-io/html-video` CLI + Studio (pnpm monorepo) |
| Rendering | Headless Chromium via Playwright (`adapter-hyperframes`), ffmpeg encode |
| Diagnostics | `html_video doctor`, `list-engines`, ffprobe verification |
| Editing | html-video Studio UI for layout/copy, agent-assisted rewrite |

## Sub-agents

No fixed persona. Route adjacent work out: `/ck:remotion` for React/Remotion compositions, `/ck:media-processing` for pure encode/trim/transcode, `/ck:preview` or `/ck:show-off` for static HTML, `/ck:agent-browser` to drive Studio without real Chrome state, `/ck:chrome-profile` only when logged-in browser state is required.

## Mode Selection

The skill is CLI-subcommand driven, not flag-mode driven. Key surfaces:

| Surface | Meaning |
|---------|---------|
| `doctor` / `list-engines` | Diagnostics: verify Chromium, ffmpeg, and available engines. |
| `search-templates` / `inspect-template` | Discover templates and read variable schemas. |
| `project-create` / `set-template` / `add-asset` / `set-var(s)` | Build and configure a project. |
| `project-preview` / `studio` | HTML preview and interactive editing. |
| `project-render --output --stream-progress` | Render the final MP4 locally. |

Global flags: defaults to JSON output; add `--no-color` for logs and `--cwd <path>` to render projects outside the current directory.

## Hard Gate

- Local render only: rendering needs a working Chromium (Playwright) and ffmpeg; `doctor` must pass first.
- Source checkout, not vendoring: install a global binary or set `HTML_VIDEO_HOME` to a built checkout; never copy the upstream engine into the user's project.
- The MP4 proof is incomplete until `ffprobe` reports nonzero duration and expected video dimensions.
- Do not commit large generated MP4 files unless the user explicitly wants them versioned.

## Artifacts

- `assets/videos/<slug>.mp4` — finished local exports.
- `plans/<plan-slug>/visuals/<slug>.mp4` — implementation proof artifacts.
- `tmp/html-video/<slug>/` — disposable preview/Studio scratch state.
- `ffprobe` JSON — duration/dimension verification of the rendered MP4.

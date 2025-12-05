# ClaudeKit Reference Integration Plan

**Plan ID:** 251205-1608-claudekit-integration
**Created:** 2025-12-05
**Status:** Ready for Implementation
**Author:** Claude Opus 4.5

---

## Executive Summary

Integrate 4 ClaudeKit reference HTML mockups into the VividKit landing page as new section components. This involves extracting content from mockups, creating Astro components adhering to the existing design system, and seamlessly integrating them into the landing page structure.

**Scope:** 4 reference mockups -> 4 landing page sections
**Est. Duration:** 4-6 hours implementation
**Risk Level:** Low (well-defined patterns, existing architecture)

---

## Reference Mockups Overview

| Mockup | File | Lines | Theme | Purpose |
|--------|------|-------|-------|---------|
| mockup-00 | claudekit-cli-guide.html | ~750 | Emerald/Green | CLI Getting Started Guide |
| mockup-07 | recommended-workflows.html | ~625 | Purple/Blue | Workflow Cards |
| mockup-08 | slash-commands-guide.html | ~800 | Blue/Purple | Command Reference |
| mockup-09 | uiux-promax-guide.html | ~800+ | Indigo/Purple | Design System Docs |

---

## Phase Overview

| Phase | Name | Status | Progress | Est. Time | Completed |
|-------|------|--------|----------|-----------|-----------|
| 1 | Setup & Preparation | ✅ Completed | 100% | 30 min | 2025-12-05 |
| 2 | CLI Guide Integration | ✅ Completed | 100% | 45 min | 2025-12-05 |
| 3 | Workflows Integration | pending | 0% | 45 min | - |
| 4 | Slash Commands Integration | pending | 0% | 60 min | - |
| 5 | UI/UX Guide Integration | pending | 0% | 60 min | - |
| 6 | Landing Page Integration | pending | 0% | 30 min | - |
| 7 | Testing & Refinement | pending | 0% | 30 min | - |

---

## Architecture Overview

### Current Landing Page Structure
```
index.astro
  |-- AmbientBackground
  |-- Header
  |-- main
  |   |-- Hero
  |   |-- Problem
  |   |-- Features
  |   |-- Pricing
  |   |-- ClaudeKit (existing section)
  |   |-- Commands (existing section)
  |   |-- WaitlistForm
  |-- Footer
```

### Target Structure After Integration
```
index.astro
  |-- AmbientBackground
  |-- Header
  |-- main
  |   |-- Hero
  |   |-- Problem
  |   |-- Features
  |   |-- ClaudeKitCLIGuide (NEW - from mockup-00)
  |   |-- RecommendedWorkflows (NEW - from mockup-07)
  |   |-- SlashCommandsGuide (NEW - from mockup-08)
  |   |-- UIUXProMax (NEW - from mockup-09)
  |   |-- Pricing
  |   |-- WaitlistForm
  |-- Footer
```

### New File Structure
```
src/
  components/
    sections/
      ClaudeKitCLIGuide.astro      # NEW
      RecommendedWorkflows.astro    # NEW
      SlashCommandsGuide.astro      # NEW
      UIUXProMax.astro              # NEW
  data/
    guides/
      cli-steps-landing.ts          # NEW (content data)
      workflows-landing.ts          # NEW (content data)
      commands-landing.ts           # NEW (content data)
      uiux-landing.ts               # NEW (content data)
  styles/
    global.css                      # MODIFY (add terminal, workflow styles)
```

---

## Design System Mapping

### Color Mapping (Mockup -> Landing Page)
| Mockup Color | Landing Page Equivalent |
|--------------|------------------------|
| `bg-[#0D0D0D]` | `bg-surface-950` |
| `emerald-400` | `emerald-400` (retain) |
| `cyan-400` | `cyan-400` (retain) |
| `purple-400/500` | `purple-400/500` (retain) |
| `indigo-400/500` | `indigo-400/500` (retain) |
| `slate-900/50` | `bg-surface-900/60` |

### Typography Mapping
| Mockup Font | Landing Page Font |
|-------------|-------------------|
| JetBrains Mono | Fira Code (mono) |
| IBM Plex Sans | DM Sans (body) |
| Fira Code | Fira Code (mono) |
| Fira Sans | DM Sans (body) |
| Poppins | Space Grotesk (headings) |
| Open Sans | DM Sans (body) |

### Component Pattern Mapping
| Mockup Pattern | Landing Page Pattern |
|----------------|---------------------|
| `.bg-slate-900/50` cards | `.glass-card` |
| Hover border effects | `.feature-card` hover |
| Gradient headers | Existing gradient patterns |
| Step indicators | Create `.step-indicator` class |
| Flow arrows | Create `.flow-arrow` animation |

---

## Key Design Decisions

1. **Condensed Content:** Landing page sections will be condensed versions (highlights only), full content remains on guides page
2. **Dark Mode First:** Sections designed primarily for dark mode, with light mode support
3. **Consistent Spacing:** Use landing page spacing (`py-24`, `gap-6`, `max-w-6xl`)
4. **Animation Reuse:** Use existing `fade-in-up`, `pulse-glow` animations
5. **Data Separation:** Extract content to data files for maintainability

---

## Success Criteria

- [x] Phase 01: Foundation setup complete (CSS classes, TypeScript interfaces) - ✅ DONE 2025-12-05
- [x] Phase 02: CLI Guide Integration - ✅ DONE 2025-12-05
- [ ] All 4 new sections render correctly
- [ ] Responsive on mobile/tablet/desktop
- [ ] Dark mode compatible
- [ ] Light mode readable
- [ ] Animations smooth (60fps)
- [ ] No TypeScript errors
- [ ] Build completes successfully (824ms, 0 errors)
- [ ] Lighthouse accessibility > 90
- [ ] Code follows established patterns (Code Review: 0 critical issues)

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Content overflow | Low | Medium | Truncate with "View More" links |
| Style conflicts | Low | Low | Scope styles to components |
| Performance impact | Low | Medium | Lazy load animations |
| Dark/light mode issues | Medium | Low | Test both modes thoroughly |

---

## Dependencies

- No new npm packages required
- Uses existing lucide-astro icons
- Uses existing Tailwind CSS v4 setup
- Alpine.js optional (not required for landing sections)

---

## Phase Files

1. [Phase 01: Setup & Preparation](./phase-01-setup-preparation.md)
2. [Phase 02: CLI Guide Integration](./phase-02-cli-guide.md)
3. [Phase 03: Workflows Integration](./phase-03-workflows.md)
4. [Phase 04: Slash Commands Integration](./phase-04-slash-commands.md)
5. [Phase 05: UI/UX Guide Integration](./phase-05-uiux-guide.md)
6. [Phase 06: Landing Page Integration](./phase-06-landing-integration.md)
7. [Phase 07: Testing & Refinement](./phase-07-testing.md)

---

## Quick Start

```bash
# Navigate to project
cd /Users/thieunv/projects/personal/vividkit-web

# Start dev server
npm run dev

# Begin with Phase 01
# Follow phase-01-setup-preparation.md
```

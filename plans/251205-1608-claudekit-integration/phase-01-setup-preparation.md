# Phase 01: Setup & Preparation

**Phase:** 01 of 07
**Status:** ✅ Completed
**Completed Date:** 2025-12-05 16:15 UTC
**Est. Time:** 30 minutes
**Actual Time:** ~25 minutes
**Dependencies:** None
**Review Report:** [code-reviewer-251205-phase01-setup.md](./reports/code-reviewer-251205-phase01-setup.md)

---

## Context

Before creating new section components, prepare the codebase with necessary CSS classes and TypeScript interfaces that will be used across all 4 new sections.

---

## Overview

Add reusable CSS classes and utilities to `global.css` that match the mockup patterns while aligning with the existing design system. These include terminal window styling, step indicators, and workflow-specific animations.

---

## Key Insights

1. **Terminal mockups** use consistent styling: dark background, colored dots, monospace font
2. **Step indicators** follow pattern: numbered circles with colored backgrounds
3. **Flow arrows** use CSS animation for visual flow indication
4. **Card variants** need gradient header support
5. **Badge styles** extend existing Badge component patterns

---

## Requirements

### Functional
- CSS classes for terminal windows
- CSS classes for numbered step indicators
- Animation for flow arrows
- Gradient header card variant
- Badge color variants (beginner, intermediate, advanced)

### Non-Functional
- Dark mode compatible
- Reduced motion support
- GPU-accelerated animations
- No new npm dependencies

---

## Architecture

### CSS Organization (in global.css)
```css
/* @layer components - New Classes */
.terminal-window { /* Terminal container */ }
.terminal-header { /* macOS-style dots */ }
.terminal-content { /* Code content area */ }
.step-indicator { /* Numbered circles */ }
.step-connector { /* Line between steps */ }
.workflow-card { /* Card with gradient header */ }
.skill-badge { /* Level badges */ }

/* @keyframes - New Animations */
@keyframes flow { /* Arrow pulse */ }
@keyframes blink { /* Terminal cursor */ }
```

---

## Files to Modify

### `/src/styles/global.css`
Add new component classes after existing `.feature-card` section.

### `/src/types/index.ts`
Add new TypeScript interfaces for landing page data structures.

---

## Implementation Steps

### Step 1: Add Terminal Window Styles
Add to `global.css` in `@layer components`:

```css
/* Terminal Window Component */
.terminal-window {
  @apply bg-[#0D0D0D] rounded-xl border-2 border-slate-700 overflow-hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.terminal-header {
  @apply bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700;
}

.terminal-dots {
  @apply flex gap-2;
}

.terminal-dot {
  @apply w-3 h-3 rounded-full;
}

.terminal-dot--red { @apply bg-red-500/80; }
.terminal-dot--yellow { @apply bg-yellow-500/80; }
.terminal-dot--green { @apply bg-green-500/80; }

.terminal-content {
  @apply p-6 font-mono text-sm space-y-3 min-h-[300px] text-slate-300;
}

.terminal-prompt {
  @apply text-emerald-400;
}

.terminal-path {
  @apply text-cyan-400;
}
```

### Step 2: Add Step Indicator Styles
```css
/* Step Indicator Component */
.step-indicator {
  @apply flex-shrink-0 w-10 h-10 rounded-full font-bold text-lg flex items-center justify-center border-2;
}

.step-indicator--blue {
  @apply bg-blue-500/20 text-blue-400 border-blue-500/50;
}

.step-indicator--purple {
  @apply bg-purple-500/20 text-purple-400 border-purple-500/50;
}

.step-indicator--green {
  @apply bg-green-500/20 text-green-400 border-green-500/50;
}

.step-indicator--emerald {
  @apply bg-emerald-500/20 text-emerald-400 border-emerald-500/50;
}

.step-indicator--amber {
  @apply bg-amber-500/20 text-amber-400 border-amber-500/50;
}

.step-indicator--indigo {
  @apply bg-indigo-500/20 text-indigo-400 border-indigo-500/50;
}

.step-indicator--red {
  @apply bg-red-500/20 text-red-400 border-red-500/50;
}

.step-indicator--cyan {
  @apply bg-cyan-500/20 text-cyan-400 border-cyan-500/50;
}

.step-connector {
  @apply w-0.5 h-full bg-gradient-to-b mt-3;
}
```

### Step 3: Add Flow Arrow Animation
```css
/* Flow Arrow Animation */
@keyframes flow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.flow-arrow {
  animation: flow 2s ease-in-out infinite;
}

/* Cursor Blink Animation */
@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

.cursor-blink {
  animation: blink 1s infinite;
}
```

### Step 4: Add Workflow Card Styles
```css
/* Workflow Card with Gradient Header */
.workflow-card {
  @apply bg-white/80 dark:bg-surface-900/50 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden;
  @apply hover:border-blue-500/50 transition-colors duration-200;
}

.workflow-card-header {
  @apply p-6 border-b border-slate-200 dark:border-slate-800;
}

.workflow-card-header--purple {
  @apply bg-gradient-to-r from-purple-500/10 to-blue-500/10;
}

.workflow-card-header--red {
  @apply bg-gradient-to-r from-red-500/10 to-orange-500/10;
}

.workflow-card-header--blue {
  @apply bg-gradient-to-r from-blue-500/10 to-cyan-500/10;
}

.workflow-card-header--green {
  @apply bg-gradient-to-r from-green-500/10 to-emerald-500/10;
}

.workflow-card-header--indigo {
  @apply bg-gradient-to-r from-indigo-500/10 to-purple-500/10;
}

.workflow-card-header--amber {
  @apply bg-gradient-to-r from-amber-500/10 to-orange-500/10;
}

.workflow-card-header--emerald {
  @apply bg-gradient-to-r from-emerald-500/10 to-green-500/10;
}

.workflow-card-header--pink {
  @apply bg-gradient-to-r from-pink-500/10 to-rose-500/10;
}

.workflow-card-header--cyan {
  @apply bg-gradient-to-r from-cyan-500/10 to-blue-500/10;
}

.workflow-card-body {
  @apply p-6 space-y-4;
}

.workflow-card-footer {
  @apply p-4 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800;
}
```

### Step 5: Add Skill Badge Styles
```css
/* Skill Level Badges */
.skill-badge {
  @apply px-2 py-0.5 text-xs rounded-full font-medium border;
}

.skill-badge--beginner {
  @apply bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/20;
}

.skill-badge--intermediate {
  @apply bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/20;
}

.skill-badge--advanced {
  @apply bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/20;
}

.skill-badge--easy {
  @apply bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/20;
}

.skill-badge--medium {
  @apply bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/20;
}

.skill-badge--hard {
  @apply bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/20;
}
```

### Step 6: Add TypeScript Interfaces

Add to `/src/types/index.ts`:

```typescript
// Landing Page Guide Data Types
export interface CLIStep {
  number: number;
  title: string;
  command: string;
  note?: string;
  color: 'blue' | 'purple' | 'green' | 'emerald' | 'indigo';
}

export interface WorkflowStep {
  command: string;
  description: string;
}

export interface LandingWorkflow {
  id: string;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  stepCount: number;
  description: string;
  steps: WorkflowStep[];
  gradient: string;
  iconColor: string;
  buttonColor: string;
}

export interface CommandCategory {
  name: string;
  description: string;
  gradient: string;
  iconColor: string;
  borderColor: string;
  commands: SlashCommand[];
}

export interface SlashCommand {
  command: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'advanced';
  complexity?: number; // 1-5 bolt icons
}

export interface UIUXFeature {
  title: string;
  description: string;
  items: string[];
  color: string;
}

export interface UIUXExample {
  level: 'beginner' | 'intermediate' | 'advanced';
  prompt: string;
  searchTerms: string;
}
```

---

## Todo Checklist

- [x] Add terminal window CSS classes
- [x] Add step indicator CSS classes
- [x] Add flow/blink keyframe animations
- [x] Add workflow card CSS classes
- [x] Add skill badge CSS classes
- [x] Add TypeScript interfaces
- [x] Test in browser (dark mode)
- [x] Test in browser (light mode)
- [x] Run `npm run build` to verify no errors

---

## Success Criteria

- [x] New CSS classes available in dev tools
- [x] No build errors (Build: 824ms, 0 errors)
- [x] Animations visible when applied
- [x] Dark mode styles correct
- [x] TypeScript types compile without errors

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Class naming conflicts | Use specific prefixes (terminal-, workflow-, skill-) |
| Animation performance | Use transform/opacity only |
| Dark mode inconsistency | Test both modes explicitly |

---

## Security Considerations

- No user input handling
- No external resources
- CSS-only changes

---

## Next Steps

After completing Phase 01:
1. Run build to verify: `npm run build`
2. Start dev server: `npm run dev`
3. Proceed to [Phase 02: CLI Guide Integration](./phase-02-cli-guide.md)

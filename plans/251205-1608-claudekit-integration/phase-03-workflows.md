# Phase 03: Workflows Integration

**Phase:** 03 of 07
**Status:** Pending
**Est. Time:** 45 minutes
**Dependencies:** Phase 01 complete

---

## Context

Create a Recommended Workflows section for the landing page based on `mockup-07-recommended-workflows.html`. This section showcases popular development workflows with step-by-step command sequences.

---

## Overview

Extract workflow patterns from the mockup into a visual card-based section:
- Hero banner explaining workflows concept
- 4 workflow cards (Feature Development, Bug Fixing, Project Setup, Design Implementation)
- Each card shows command sequence with numbered steps
- Level badges (Beginner/Intermediate/Advanced)

---

## Key Insights from Mockup Analysis

1. **Hero Banner:** Purple/blue gradient, explains workflow concept
2. **Workflow Cards:** Grid layout, gradient headers by category
3. **Level System:** Color-coded badges (green=beginner, amber=intermediate, red=advanced)
4. **Command Steps:** Sequential commands with descriptions
5. **Visual Elements:** Duration, step count, flow arrows

---

## Requirements

### Content Extraction
- 4 key workflows (condensed from mockup)
- Command sequences per workflow
- Level and duration metadata
- Short descriptions

### Visual Requirements
- Purple/blue color theme
- Grid layout (2x2 on desktop)
- Gradient header per workflow type
- Level badges

---

## Architecture

### Component Structure
```
RecommendedWorkflows.astro
  |-- Section Header (title, description)
  |-- Workflow Grid
  |   |-- WorkflowCard x 4
  |       |-- Gradient Header
  |       |-- Level Badge
  |       |-- Duration & Step Count
  |       |-- Command Steps
  |-- CTA (link to /guides#workflows)
```

### Data Structure
```typescript
// src/data/guides/workflows-landing.ts
export interface LandingWorkflow {
  id: string;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  stepCount: number;
  description: string;
  steps: { command: string; description: string }[];
  gradient: string;
  iconColor: string;
}
```

---

## Files to Create/Modify

### New Files
- `/src/components/sections/RecommendedWorkflows.astro`
- `/src/data/guides/workflows-landing.ts`

---

## Implementation Steps

### Step 1: Create Data File

Create `/src/data/guides/workflows-landing.ts`:

```typescript
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
  borderColor: string;
}

export const landingWorkflows: LandingWorkflow[] = [
  {
    id: 'feature-development',
    title: 'Feature Development',
    level: 'intermediate',
    duration: '15-30 min',
    stepCount: 4,
    description: 'Build complete features from planning to implementation with AI assistance.',
    steps: [
      { command: '/brainstorm', description: 'Explore feature ideas' },
      { command: '/plan', description: 'Create implementation plan' },
      { command: '/code', description: 'Implement the plan' },
      { command: '/test', description: 'Verify implementation' }
    ],
    gradient: 'workflow-card-header--purple',
    iconColor: 'text-purple-400',
    borderColor: 'border-purple-500/30'
  },
  {
    id: 'bug-fixing',
    title: 'Bug Fixing',
    level: 'beginner',
    duration: '5-15 min',
    stepCount: 3,
    description: 'Diagnose and fix issues quickly with intelligent debugging.',
    steps: [
      { command: '/debug', description: 'Find root cause' },
      { command: '/fix', description: 'Apply smart fix' },
      { command: '/test', description: 'Verify fix works' }
    ],
    gradient: 'workflow-card-header--red',
    iconColor: 'text-red-400',
    borderColor: 'border-red-500/30'
  },
  {
    id: 'project-bootstrap',
    title: 'Project Setup',
    level: 'advanced',
    duration: '30-60 min',
    stepCount: 4,
    description: 'Create complete projects from scratch with best practices built-in.',
    steps: [
      { command: 'ck init', description: 'Initialize ClaudeKit' },
      { command: '/bootstrap', description: 'Create project structure' },
      { command: '/docs:init', description: 'Generate documentation' },
      { command: '/cook', description: 'Build first feature' }
    ],
    gradient: 'workflow-card-header--blue',
    iconColor: 'text-blue-400',
    borderColor: 'border-blue-500/30'
  },
  {
    id: 'design-implementation',
    title: 'Design Implementation',
    level: 'intermediate',
    duration: '10-20 min',
    stepCount: 3,
    description: 'Transform ideas into beautiful, production-ready UI components.',
    steps: [
      { command: '/design:good', description: 'Create design system' },
      { command: '/cook:auto', description: 'Implement design' },
      { command: '/fix:ui', description: 'Polish interactions' }
    ],
    gradient: 'workflow-card-header--pink',
    iconColor: 'text-pink-400',
    borderColor: 'border-pink-500/30'
  }
];

export const workflowsHeroContent = {
  title: 'Recommended Workflows',
  description: 'Follow proven command sequences to maximize productivity. Each workflow combines AI-powered commands for specific development tasks.',
  highlight: 'Pro tip: Start with Bug Fixing to learn the basics, then progress to Feature Development!'
};
```

### Step 2: Create Component

Create `/src/components/sections/RecommendedWorkflows.astro`:

```astro
---
import { Workflow, Clock, List, ArrowRight, Zap, Bug, Rocket, Palette } from 'lucide-astro';
import { landingWorkflows, workflowsHeroContent } from '@/data/guides/workflows-landing';

const levelBadgeClasses: Record<string, string> = {
  beginner: 'skill-badge--beginner',
  intermediate: 'skill-badge--intermediate',
  advanced: 'skill-badge--advanced'
};

const iconMap: Record<string, any> = {
  'feature-development': Zap,
  'bug-fixing': Bug,
  'project-bootstrap': Rocket,
  'design-implementation': Palette
};
---

<section id="workflows" class="section py-24 bg-gradient-to-b from-transparent to-purple-500/5">
  <div class="max-w-6xl mx-auto px-6">

    <!-- Section Header -->
    <div class="text-center mb-16 fade-in-up">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
        <Workflow class="w-5 h-5 text-purple-500" />
        <span class="text-sm font-medium text-purple-600 dark:text-purple-400">Proven Patterns</span>
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
        {workflowsHeroContent.title}
      </h2>
      <p class="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-6">
        {workflowsHeroContent.description}
      </p>

      <!-- Pro Tip Banner -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
        <Zap class="w-4 h-4 text-amber-500" />
        <span class="text-sm text-amber-600 dark:text-amber-400">{workflowsHeroContent.highlight}</span>
      </div>
    </div>

    <!-- Workflow Grid -->
    <div class="grid md:grid-cols-2 gap-6 mb-12">
      {landingWorkflows.map((workflow, index) => {
        const IconComponent = iconMap[workflow.id] || Workflow;
        return (
          <div
            class={`workflow-card border ${workflow.borderColor} fade-in-up`}
            style={`animation-delay: ${0.1 + index * 0.1}s`}
          >
            <!-- Header -->
            <div class={`workflow-card-header ${workflow.gradient}`}>
              <div class="flex items-start justify-between">
                <div class="flex items-center gap-3">
                  <div class={`w-10 h-10 rounded-lg bg-white/10 dark:bg-slate-900/50 flex items-center justify-center`}>
                    <IconComponent class={`w-5 h-5 ${workflow.iconColor}`} />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
                      {workflow.title}
                    </h3>
                    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {workflow.description}
                    </p>
                  </div>
                </div>
                <span class={`skill-badge ${levelBadgeClasses[workflow.level]}`}>
                  {workflow.level}
                </span>
              </div>
            </div>

            <!-- Body -->
            <div class="workflow-card-body">
              <!-- Meta info -->
              <div class="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 pb-3 border-b border-slate-200 dark:border-slate-800">
                <span class="flex items-center gap-1">
                  <Clock class="w-4 h-4" />
                  {workflow.duration}
                </span>
                <span class="flex items-center gap-1">
                  <List class="w-4 h-4" />
                  {workflow.stepCount} steps
                </span>
              </div>

              <!-- Steps -->
              <ol class="space-y-3 mt-4">
                {workflow.steps.map((step, stepIndex) => (
                  <li class="flex items-start gap-3">
                    <span class="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-medium text-slate-600 dark:text-slate-400">
                      {stepIndex + 1}
                    </span>
                    <div class="flex-1 flex items-center gap-2 flex-wrap">
                      <code class="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-mono text-slate-700 dark:text-slate-300">
                        {step.command}
                      </code>
                      <span class="text-sm text-slate-600 dark:text-slate-400">
                        {step.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        );
      })}
    </div>

    <!-- Visual Flow Diagram (Simplified) -->
    <div class="glass-card rounded-xl p-8 mb-12 fade-in-up" style="animation-delay: 0.5s">
      <h3 class="text-xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
        From Idea to Code in 3 Steps
      </h3>
      <div class="flex items-center justify-center gap-4 flex-wrap">
        <div class="text-center">
          <div class="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-2">
            <span class="text-2xl">&#128161;</span>
          </div>
          <span class="text-sm text-slate-600 dark:text-slate-400">Idea</span>
        </div>

        <ArrowRight class="w-6 h-6 text-slate-400 flow-arrow" />

        <div class="text-center">
          <div class="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-2">
            <span class="text-2xl">&#128221;</span>
          </div>
          <span class="text-sm text-slate-600 dark:text-slate-400">Plan</span>
        </div>

        <ArrowRight class="w-6 h-6 text-slate-400 flow-arrow" style="animation-delay: 0.3s" />

        <div class="text-center">
          <div class="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-2">
            <span class="text-2xl">&#128187;</span>
          </div>
          <span class="text-sm text-slate-600 dark:text-slate-400">Code</span>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center fade-in-up" style="animation-delay: 0.6s">
      <a
        href="/guides#workflows"
        class="cta-button inline-flex items-center gap-2 px-8 py-4 text-white rounded-xl font-semibold text-lg"
      >
        Explore All Workflows
        <ArrowRight class="w-5 h-5" />
      </a>
    </div>

  </div>
</section>
```

---

## Todo Checklist

- [ ] Create `/src/data/guides/workflows-landing.ts`
- [ ] Create `/src/components/sections/RecommendedWorkflows.astro`
- [ ] Verify workflow card styling
- [ ] Test level badges display correctly
- [ ] Test responsive layout (mobile/tablet/desktop)
- [ ] Test dark mode
- [ ] Test light mode
- [ ] Verify flow arrow animation

---

## Success Criteria

- [ ] Component renders without errors
- [ ] 4 workflow cards display correctly
- [ ] Level badges show correct colors
- [ ] Duration/step count visible
- [ ] Command steps numbered correctly
- [ ] Responsive on all breakpoints
- [ ] Flow diagram animates smoothly

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Cards uneven height | Use min-height or grid auto-rows |
| Long command names wrap | Use overflow handling |
| Badge colors inconsistent | Use skill-badge classes |

---

## Security Considerations

- No user input
- Static content only
- No external resources

---

## Next Steps

After completing Phase 03:
1. Test component in isolation
2. Proceed to [Phase 04: Slash Commands Integration](./phase-04-slash-commands.md)

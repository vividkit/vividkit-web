# Phase 02: CLI Guide Integration

**Phase:** 02 of 07
**Status:** Pending
**Est. Time:** 45 minutes
**Dependencies:** Phase 01 complete

---

## Context

Create a condensed CLI Getting Started section for the landing page based on `mockup-00-claudekit-cli-guide.html`. This section highlights the 3-step setup process with a terminal mockup preview.

---

## Overview

Extract key content from the 750-line mockup into a focused landing page section:
- Hero banner explaining ClaudeKit CLI
- Terminal mockup showing real workflow
- 3-step quick start guide
- CTA to view full documentation

---

## Key Insights from Mockup Analysis

1. **Hero Banner:** Gradient background (emerald/green/teal), icon, description, quick workflow code block
2. **Terminal Mockup:** macOS-style window with interactive session example
3. **Quick Start:** 3 numbered steps (Install, Initialize, Start)
4. **Command Reference Cards:** 3 cards summarizing setup steps
5. **CCS Section:** Optional tool, can be mentioned but not detailed

---

## Requirements

### Content Extraction
- Hero description of ClaudeKit CLI
- Terminal session example (condensed)
- 3 installation steps
- Link to full guides page

### Visual Requirements
- Emerald/green color theme
- Terminal window component
- Step indicators
- Responsive grid layout

---

## Architecture

### Component Structure
```
ClaudeKitCLIGuide.astro
  |-- Section Header (title, description)
  |-- Hero Banner (gradient, icon, text)
  |-- Terminal Preview (condensed)
  |-- Quick Start Steps (3 cards)
  |-- CTA (link to /guides#cli-guide)
```

### Data Structure
```typescript
// src/data/guides/cli-steps-landing.ts
export const cliHeroContent = {
  title: string;
  description: string;
  quickWorkflow: { command: string; comment: string }[];
};

export const cliTerminalPreview = {
  lines: { type: string; content: string }[];
};

export const cliQuickSteps = CLIStep[];
```

---

## Files to Create/Modify

### New Files
- `/src/components/sections/ClaudeKitCLIGuide.astro`
- `/src/data/guides/cli-steps-landing.ts`

### Modified Files
- None in this phase (integration in Phase 06)

---

## Implementation Steps

### Step 1: Create Data File

Create `/src/data/guides/cli-steps-landing.ts`:

```typescript
export const cliHeroContent = {
  title: 'ClaudeKit CLI',
  subtitle: 'Command line interface for power users',
  description: 'ClaudeKit CLI helps you set up ClaudeKit in your projects, then you use Claude Code to get AI assistance. Install ClaudeKit, run claude, and leverage powerful skills like UI/UX Pro Max — all from your terminal!',
  quickWorkflow: [
    { command: 'ck init', comment: 'Set up ClaudeKit in your project' },
    { command: 'claude', comment: 'Start Claude Code CLI' }
  ]
};

export const cliTerminalPreview = {
  title: 'Terminal — bash — 80x24',
  lines: [
    { type: 'prompt', path: '~/projects', command: 'claude' },
    { type: 'output', content: 'Starting Claude Code CLI...' },
    { type: 'hint', content: 'Type your message (or /help for commands)' },
    { type: 'user', content: 'Using ui-ux-pro-max skill, create a yoga studio landing page' },
    { type: 'thinking', content: 'ClaudeKit AI is thinking...' },
    { type: 'search', items: [
      { label: 'Searching product domain:', value: 'beauty/wellness' },
      { label: 'Style guide:', value: 'minimalist + elegant' },
      { label: 'Typography:', value: 'Playfair Display + Inter' },
      { label: 'Color palette:', value: 'soft pastels (#E8E5F2)' }
    ]},
    { type: 'complete', content: 'Design Complete!' },
    { type: 'result', items: [
      'Created: yoga-studio-landing.html',
      'Calming lavender color palette',
      'Elegant Playfair Display typography',
      'Responsive mobile-first design',
      'WCAG AA accessible'
    ]}
  ]
};

export const cliQuickSteps = [
  {
    number: 1,
    title: 'Install ClaudeKit CLI',
    command: 'npm install -g claudekit-cli',
    note: 'Or use: bun add -g claudekit-cli',
    color: 'indigo' as const
  },
  {
    number: 2,
    title: 'Initialize Your Project',
    command: 'ck init',
    note: 'Requires GitHub CLI authentication (gh auth login)',
    color: 'purple' as const
  },
  {
    number: 3,
    title: 'Start Claude Code',
    command: 'claude',
    note: 'Chat with AI to build beautiful UIs instantly!',
    color: 'emerald' as const
  }
];

export const cliCommandCards = [
  {
    number: 1,
    title: 'Setup Project',
    command: 'ck init',
    description: 'Initialize ClaudeKit in your project (one-time setup)',
    color: 'emerald' as const
  },
  {
    number: 2,
    title: 'Start Claude Code',
    command: 'claude',
    description: 'Open interactive AI assistant - chat and iterate',
    color: 'purple' as const
  },
  {
    number: 3,
    title: 'Use Skills',
    command: 'Using ui-ux-pro-max skill...',
    description: 'Inside Claude, activate powerful design intelligence',
    color: 'cyan' as const
  }
];
```

### Step 2: Create Component

Create `/src/components/sections/ClaudeKitCLIGuide.astro`:

```astro
---
import { Terminal, ArrowRight, Check, Info } from 'lucide-astro';
import {
  cliHeroContent,
  cliTerminalPreview,
  cliQuickSteps,
  cliCommandCards
} from '@/data/guides/cli-steps-landing';

const stepColors: Record<string, string> = {
  indigo: 'step-indicator--indigo',
  purple: 'step-indicator--purple',
  emerald: 'step-indicator--emerald',
  blue: 'step-indicator--blue',
  green: 'step-indicator--green',
  cyan: 'step-indicator--cyan'
};

const cardColors: Record<string, { bg: string; text: string; border: string }> = {
  emerald: {
    bg: 'bg-emerald-500/20',
    text: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-500/30'
  },
  purple: {
    bg: 'bg-purple-500/20',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-500/30'
  },
  cyan: {
    bg: 'bg-cyan-500/20',
    text: 'text-cyan-600 dark:text-cyan-400',
    border: 'border-cyan-500/30'
  }
};
---

<section id="cli-guide" class="section py-24 bg-gradient-to-b from-transparent to-emerald-500/5">
  <div class="max-w-6xl mx-auto px-6">

    <!-- Section Header -->
    <div class="text-center mb-16 fade-in-up">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
        <Terminal class="w-5 h-5 text-emerald-500" />
        <span class="text-sm font-medium text-emerald-600 dark:text-emerald-400">Command Line Interface</span>
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
        {cliHeroContent.title}
      </h2>
      <p class="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
        {cliHeroContent.description}
      </p>
    </div>

    <!-- Hero Banner with Quick Workflow -->
    <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/10 via-green-500/10 to-teal-500/10 border border-emerald-500/30 p-8 mb-12 fade-in-up" style="animation-delay: 0.1s">
      <div class="relative z-10 max-w-2xl">
        <p class="text-slate-600 dark:text-slate-300 text-lg mb-4">
          <strong class="text-emerald-600 dark:text-emerald-400">Quick Workflow:</strong>
        </p>
        <div class="bg-surface-950 rounded-lg p-4 font-mono text-sm space-y-2">
          {cliHeroContent.quickWorkflow.map((item) => (
            <div class="flex items-start gap-2">
              <span class="text-emerald-400">$</span>
              <span class="text-slate-300">{item.command}</span>
              <span class="text-slate-500 text-xs ml-auto"># {item.comment}</span>
            </div>
          ))}
        </div>
        <p class="text-sm text-slate-500 mt-3 flex items-center gap-2">
          <ArrowRight class="w-4 h-4 text-emerald-400" />
          Then chat with AI to build beautiful UIs instantly!
        </p>
      </div>
      <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-green-500/10 rounded-full blur-3xl"></div>
    </div>

    <!-- Terminal Preview (Condensed) -->
    <div class="terminal-window mb-12 fade-in-up" style="animation-delay: 0.2s">
      <div class="terminal-header">
        <div class="terminal-dots">
          <div class="terminal-dot terminal-dot--red"></div>
          <div class="terminal-dot terminal-dot--yellow"></div>
          <div class="terminal-dot terminal-dot--green"></div>
        </div>
        <div class="flex-1 text-center">
          <span class="text-xs text-slate-400 font-mono">{cliTerminalPreview.title}</span>
        </div>
      </div>
      <div class="terminal-content">
        <!-- Start command -->
        <div class="flex items-start gap-2">
          <span class="terminal-prompt">&#10148;</span>
          <span class="terminal-path">~/projects</span>
          <span class="text-slate-300">claude</span>
        </div>

        <div class="pl-4 text-cyan-400 text-xs mt-2">
          <div>Starting Claude Code CLI...</div>
          <div class="text-slate-500 mt-1">Type your message (or /help for commands)</div>
        </div>

        <div class="pl-4 mt-3">
          <div class="flex items-start gap-2">
            <span class="text-emerald-400">You:</span>
            <span class="text-slate-300">Using ui-ux-pro-max skill, create a yoga studio landing page</span>
          </div>
        </div>

        <!-- Search results -->
        <div class="pl-4 mt-3 space-y-1 text-xs">
          <div class="flex items-center gap-2 text-emerald-400">
            <Check class="w-3 h-3" />
            <span class="text-slate-400">Style guide: <span class="text-slate-300">minimalist + elegant</span></span>
          </div>
          <div class="flex items-center gap-2 text-emerald-400">
            <Check class="w-3 h-3" />
            <span class="text-slate-400">Color palette: <span class="text-slate-300">soft pastels</span></span>
          </div>
        </div>

        <!-- Result -->
        <div class="mt-4 p-3 bg-slate-900/50 border border-emerald-500/30 rounded">
          <div class="text-emerald-400 text-sm mb-2">&#10004; Design Complete!</div>
          <div class="text-slate-400 text-xs">
            Created: <span class="text-cyan-400">yoga-studio-landing.html</span>
          </div>
        </div>

        <!-- Cursor -->
        <div class="flex items-start gap-2 mt-4">
          <span class="terminal-prompt">&#10148;</span>
          <span class="terminal-path">~/projects</span>
          <span class="text-slate-300 cursor-blink">&#9608;</span>
        </div>
      </div>
    </div>

    <!-- Quick Start Steps -->
    <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center fade-in-up" style="animation-delay: 0.3s">
      Get Started in 3 Steps
    </h3>

    <div class="grid md:grid-cols-3 gap-6 mb-12">
      {cliQuickSteps.map((step, index) => (
        <div
          class="glass-card feature-card rounded-xl p-6 fade-in-up"
          style={`animation-delay: ${0.3 + index * 0.1}s`}
        >
          <div class="flex items-center gap-3 mb-4">
            <div class={`step-indicator ${stepColors[step.color]}`}>
              {step.number}
            </div>
            <h4 class="text-lg font-semibold text-slate-900 dark:text-white">
              {step.title}
            </h4>
          </div>

          <div class="bg-slate-100 dark:bg-slate-800/50 rounded-lg p-3 font-mono text-sm mb-3">
            <code class="text-emerald-600 dark:text-emerald-400">{step.command}</code>
          </div>

          {step.note && (
            <p class="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
              <Info class="w-4 h-4 mt-0.5 flex-shrink-0" />
              {step.note}
            </p>
          )}
        </div>
      ))}
    </div>

    <!-- Command Reference Cards -->
    <div class="grid md:grid-cols-3 gap-4 mb-12 fade-in-up" style="animation-delay: 0.6s">
      {cliCommandCards.map((card) => (
        <div class={`p-4 rounded-lg bg-white/60 dark:bg-slate-900/50 border ${cardColors[card.color].border}`}>
          <div class="flex items-center gap-2 mb-3">
            <div class={`w-8 h-8 rounded ${cardColors[card.color].bg} flex items-center justify-center`}>
              <span class={`text-sm font-bold ${cardColors[card.color].text}`}>{card.number}</span>
            </div>
            <h5 class="text-sm font-semibold text-slate-900 dark:text-white">{card.title}</h5>
          </div>
          <code class={`text-xs ${cardColors[card.color].text} font-mono block bg-slate-100 dark:bg-surface-950 p-2 rounded mb-2`}>
            {card.command}
          </code>
          <p class="text-xs text-slate-600 dark:text-slate-400">{card.description}</p>
        </div>
      ))}
    </div>

    <!-- CTA -->
    <div class="text-center fade-in-up" style="animation-delay: 0.7s">
      <a
        href="/guides#cli-guide"
        class="cta-button inline-flex items-center gap-2 px-8 py-4 text-white rounded-xl font-semibold text-lg"
      >
        View Full CLI Guide
        <ArrowRight class="w-5 h-5" />
      </a>
    </div>

  </div>
</section>
```

---

## Todo Checklist

- [ ] Create `/src/data/guides/cli-steps-landing.ts`
- [ ] Create `/src/components/sections/ClaudeKitCLIGuide.astro`
- [ ] Verify imports work correctly
- [ ] Test terminal window rendering
- [ ] Test step indicators
- [ ] Test responsive layout (mobile/tablet/desktop)
- [ ] Test dark mode
- [ ] Test light mode
- [ ] Verify animations work

---

## Success Criteria

- [ ] Component renders without errors
- [ ] Terminal mockup displays correctly
- [ ] 3 quick start steps visible
- [ ] CTA links to /guides#cli-guide
- [ ] Responsive on all breakpoints
- [ ] Dark/light mode compatible
- [ ] Animations smooth

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Terminal content overflow | Set min-height, use overflow-auto |
| Long commands wrap poorly | Use text wrapping, horizontal scroll on mobile |
| Color contrast issues | Test with accessibility tools |

---

## Security Considerations

- No user input
- Static content only
- No external resources

---

## Next Steps

After completing Phase 02:
1. Test component in isolation
2. Proceed to [Phase 03: Workflows Integration](./phase-03-workflows.md)

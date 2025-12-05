# Phase 05: UI/UX Guide Integration

**Phase:** 05 of 07
**Status:** Pending
**Est. Time:** 60 minutes
**Dependencies:** Phase 01 complete

---

## Context

Create a UI/UX Pro Max Guide section for the landing page based on `mockup-09-uiux-promax-guide.html`. This showcases the powerful design intelligence system and its capabilities.

---

## Overview

Extract key value propositions from the mockup:
- Hero banner explaining the UI/UX Pro Max skill
- "For Whom" audience cards (Everyone, Developers, Designers)
- "How It Works" 3-step process
- "What You Can Build" showcase
- Design styles preview
- ClaudeKit integration instructions

---

## Key Insights from Mockup Analysis

1. **Hero Banner:** Indigo/purple gradient, floating icon animation
2. **Feature Stats:** 50 Styles, 21 Palettes, 50 Font Pairings, 20 Charts
3. **Audience Cards:** 3 cards (Everyone=emerald, Developers=blue, Designers=purple)
4. **Process Steps:** 3 steps (Tell AI, Search, Get Code)
5. **Build Types:** Landing Pages, Dashboards, Portfolios, Mobile Apps
6. **Style Preview:** Grid showing 8 style types
7. **Integration:** Magic phrase syntax with examples

---

## Requirements

### Content Extraction (Condensed)
- Hero with feature stats
- 3 audience cards
- 3-step process (simplified)
- 4 "What You Can Build" types
- 8 style previews
- ClaudeKit magic phrase

### Visual Requirements
- Indigo/purple color theme
- Floating animation on hero icon
- 3-column audience grid
- 4-column styles grid
- Process step indicators

---

## Architecture

### Component Structure
```
UIUXProMax.astro
  |-- Section Header (title, stats banner)
  |-- Audience Cards (Everyone, Developers, Designers)
  |-- How It Works (3 steps)
  |-- What You Can Build (4 cards)
  |-- Style Showcase (8 style chips)
  |-- Magic Phrase (integration syntax)
  |-- CTA (link to /guides#uiux)
```

### Data Structure
```typescript
// src/data/guides/uiux-landing.ts
export const uiuxStats = Stat[];
export const audiences = Audience[];
export const processSteps = ProcessStep[];
export const buildTypes = BuildType[];
export const designStyles = DesignStyle[];
```

---

## Files to Create/Modify

### New Files
- `/src/components/sections/UIUXProMax.astro`
- `/src/data/guides/uiux-landing.ts`

---

## Implementation Steps

### Step 1: Create Data File

Create `/src/data/guides/uiux-landing.ts`:

```typescript
export interface Stat {
  value: string;
  label: string;
  color: string;
}

export interface AudienceItem {
  icon: string;
  title: string;
  description: string;
}

export interface Audience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  gradient: string;
  borderColor: string;
  items: AudienceItem[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  color: string;
  details: string[];
}

export interface BuildType {
  id: string;
  title: string;
  description: string;
  examples: string[];
  color: string;
  gradient: string;
}

export interface DesignStyle {
  name: string;
  description: string;
  color: string;
}

// Hero Content
export const uiuxHeroContent = {
  title: 'UI/UX Pro Max',
  subtitle: 'Your AI-Powered Design Intelligence System',
  description: 'Think of it as your personal design expert - instantly get professional color palettes, font pairings, UI styles, and best practices. No design degree needed, just ask and AI creates beautiful interfaces for you!'
};

// Feature Stats
export const uiuxStats: Stat[] = [
  { value: '50', label: 'UI Styles', color: 'indigo' },
  { value: '21', label: 'Color Palettes', color: 'purple' },
  { value: '50', label: 'Font Pairings', color: 'pink' },
  { value: '20', label: 'Chart Types', color: 'cyan' }
];

// Audience Sections
export const audiences: Audience[] = [
  {
    id: 'everyone',
    title: 'For Everyone',
    subtitle: 'No coding needed!',
    description: 'Perfect if you\'re building landing pages, portfolios, or want beautiful designs without technical knowledge',
    color: 'emerald',
    gradient: 'from-emerald-500/10 to-green-500/10',
    borderColor: 'border-emerald-500/30',
    items: [
      { icon: 'users', title: 'Business Owners', description: 'Create stunning websites easily' },
      { icon: 'video', title: 'Content Creators', description: 'Design beautiful landing pages' },
      { icon: 'rocket', title: 'Entrepreneurs', description: 'Launch professional products fast' }
    ]
  },
  {
    id: 'developers',
    title: 'For Developers',
    subtitle: 'Speed up your workflow!',
    description: 'Get design systems, code-ready color palettes, and stack-specific best practices instantly',
    color: 'blue',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'border-blue-500/30',
    items: [
      { icon: 'code', title: 'Frontend Devs', description: 'Skip design research, copy code' },
      { icon: 'layers', title: 'Fullstack Devs', description: 'Focus on logic, not design' },
      { icon: 'zap', title: 'Indie Hackers', description: 'Ship MVPs 10x faster' }
    ]
  },
  {
    id: 'designers',
    title: 'For Designers',
    subtitle: 'Get inspiration fast!',
    description: 'Discover curated design systems, explore trending styles, and maintain consistency across projects',
    color: 'purple',
    gradient: 'from-purple-500/10 to-pink-500/10',
    borderColor: 'border-purple-500/30',
    items: [
      { icon: 'palette', title: 'UI Designers', description: 'Find perfect color + font combos' },
      { icon: 'target', title: 'UX Designers', description: 'Access best practice guidelines' },
      { icon: 'package', title: 'Product Designers', description: 'Industry-specific recommendations' }
    ]
  }
];

// How It Works
export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Tell AI What You Want',
    description: 'Just describe your project in plain English! No technical jargon needed.',
    color: 'cyan',
    details: ['AI understands: product type, industry, style needed']
  },
  {
    number: 2,
    title: 'AI Searches Design Database',
    description: 'Behind the scenes, AI searches 8 design domains to build your perfect design system',
    color: 'blue',
    details: ['Style Guide', 'Colors', 'Typography', 'Layout', 'UX Rules', 'Accessibility']
  },
  {
    number: 3,
    title: 'Get Beautiful Code',
    description: 'AI creates complete HTML/CSS with all design choices perfectly implemented',
    color: 'indigo',
    details: ['Professional colors', 'Beautiful fonts', 'Responsive design', 'Smooth animations']
  }
];

// What You Can Build
export const buildTypes: BuildType[] = [
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'Create stunning landing pages for any business',
    examples: ['SaaS Products', 'E-commerce Stores', 'Healthcare Services', 'Beauty & Wellness'],
    color: 'pink',
    gradient: 'from-pink-500/10 to-rose-500/10'
  },
  {
    id: 'dashboards',
    title: 'Dashboards',
    description: 'Build data-rich dashboards with perfect charts',
    examples: ['Analytics Dashboards', 'Admin Panels', 'Business Intelligence', 'Monitoring Tools'],
    color: 'cyan',
    gradient: 'from-cyan-500/10 to-blue-500/10'
  },
  {
    id: 'portfolios',
    title: 'Portfolios',
    description: 'Showcase your work with beautiful portfolios',
    examples: ['Designer Portfolios', 'Developer Showcases', 'Creative Work', 'Photography Sites'],
    color: 'purple',
    gradient: 'from-purple-500/10 to-indigo-500/10'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    description: 'Design mobile apps for any platform',
    examples: ['React Native', 'Flutter', 'SwiftUI', 'Progressive Web Apps'],
    color: 'orange',
    gradient: 'from-orange-500/10 to-amber-500/10'
  }
];

// Design Styles Preview
export const designStyles: DesignStyle[] = [
  { name: 'Glassmorphism', description: 'Frosted glass effect', color: 'indigo' },
  { name: 'Minimalism', description: 'Clean & simple', color: 'purple' },
  { name: 'Aurora UI', description: 'Vibrant gradients', color: 'pink' },
  { name: 'Dark Mode', description: 'Professional darkness', color: 'cyan' },
  { name: 'Neumorphism', description: 'Soft shadows', color: 'emerald' },
  { name: 'Brutalism', description: 'Raw & bold', color: 'amber' },
  { name: 'Claymorphism', description: '3D clay effect', color: 'rose' },
  { name: '...and 43 more!', description: 'Explore all styles', color: 'blue' }
];

// Magic Phrase
export const magicPhrase = {
  syntax: 'Using ui-ux-pro-max skill, <your request>',
  example: 'Using ui-ux-pro-max skill, create a beautiful landing page for my yoga studio. I want calming, peaceful colors and elegant fonts.'
};

// Time Saved
export const timeSaved = {
  traditional: '6-8 hours',
  withSkill: '2-5 minutes'
};
```

### Step 2: Create Component

Create `/src/components/sections/UIUXProMax.astro`:

```astro
---
import {
  Sparkles,
  ArrowRight,
  Users,
  Video,
  Rocket,
  Code,
  Layers,
  Zap,
  Palette,
  Target,
  Package,
  Check,
  Layout,
  BarChart3,
  Briefcase,
  Smartphone
} from 'lucide-astro';
import {
  uiuxHeroContent,
  uiuxStats,
  audiences,
  processSteps,
  buildTypes,
  designStyles,
  magicPhrase,
  timeSaved
} from '@/data/guides/uiux-landing';

const statColors: Record<string, string> = {
  indigo: 'text-indigo-400',
  purple: 'text-purple-400',
  pink: 'text-pink-400',
  cyan: 'text-cyan-400'
};

const colorClasses: Record<string, { text: string; bg: string; border: string }> = {
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/20', border: 'border-emerald-500/30' },
  blue: { text: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/30' },
  purple: { text: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-500/30' },
  cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/20', border: 'border-cyan-500/30' },
  indigo: { text: 'text-indigo-400', bg: 'bg-indigo-500/20', border: 'border-indigo-500/30' },
  pink: { text: 'text-pink-400', bg: 'bg-pink-500/20', border: 'border-pink-500/30' },
  orange: { text: 'text-orange-400', bg: 'bg-orange-500/20', border: 'border-orange-500/30' },
  amber: { text: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/30' },
  rose: { text: 'text-rose-400', bg: 'bg-rose-500/20', border: 'border-rose-500/30' }
};

const stepColors: Record<string, string> = {
  cyan: 'step-indicator--cyan',
  blue: 'step-indicator--blue',
  indigo: 'step-indicator--indigo'
};

const audienceIcons: Record<string, any> = {
  users: Users,
  video: Video,
  rocket: Rocket,
  code: Code,
  layers: Layers,
  zap: Zap,
  palette: Palette,
  target: Target,
  package: Package
};

const buildIcons: Record<string, any> = {
  'landing-pages': Layout,
  'dashboards': BarChart3,
  'portfolios': Briefcase,
  'mobile-apps': Smartphone
};
---

<section id="uiux-pro-max" class="section py-24 bg-gradient-to-b from-transparent to-indigo-500/5">
  <div class="max-w-6xl mx-auto px-6">

    <!-- Section Header -->
    <div class="text-center mb-16 fade-in-up">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
        <Sparkles class="w-5 h-5 text-indigo-500" />
        <span class="text-sm font-medium text-indigo-600 dark:text-indigo-400">Design Intelligence</span>
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
        {uiuxHeroContent.title}
      </h2>
      <p class="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
        {uiuxHeroContent.description}
      </p>

      <!-- Stats Banner -->
      <div class="inline-flex flex-wrap justify-center gap-4 p-4 rounded-xl bg-white/60 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
        {uiuxStats.map((stat) => (
          <div class="flex items-center gap-2 px-4">
            <span class={`text-2xl font-bold ${statColors[stat.color]}`}>{stat.value}</span>
            <span class="text-sm text-slate-600 dark:text-slate-400">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>

    <!-- Audience Cards -->
    <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center fade-in-up" style="animation-delay: 0.1s">
      Who Is It For?
    </h3>
    <div class="grid md:grid-cols-3 gap-6 mb-16">
      {audiences.map((audience, index) => (
        <div
          class={`glass-card feature-card rounded-xl overflow-hidden border ${audience.borderColor} fade-in-up`}
          style={`animation-delay: ${0.1 + index * 0.1}s`}
        >
          <div class={`p-5 bg-gradient-to-br ${audience.gradient} border-b border-slate-200 dark:border-slate-800`}>
            <div class="flex items-center gap-3 mb-2">
              <div class={`w-10 h-10 rounded-lg ${colorClasses[audience.color].bg} flex items-center justify-center`}>
                <Users class={`w-5 h-5 ${colorClasses[audience.color].text}`} />
              </div>
              <div>
                <h4 class={`text-lg font-bold ${colorClasses[audience.color].text}`}>{audience.title}</h4>
                <p class="text-xs text-slate-500">{audience.subtitle}</p>
              </div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">{audience.description}</p>
          </div>
          <div class="p-4 space-y-2">
            {audience.items.map((item) => {
              const IconComp = audienceIcons[item.icon] || Users;
              return (
                <div class="p-3 rounded-lg bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                  <p class={`text-xs ${colorClasses[audience.color].text} font-medium mb-1`}>
                    <Check class="w-3 h-3 inline mr-1" />
                    {item.title}
                  </p>
                  <p class="text-xs text-slate-500">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>

    <!-- How It Works -->
    <div class="glass-card rounded-xl p-8 mb-16 fade-in-up" style="animation-delay: 0.4s">
      <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        How It Works (3 Simple Steps)
      </h3>

      <div class="space-y-6 mb-8">
        {processSteps.map((step, index) => (
          <div class="flex items-start gap-4">
            <div class="flex flex-col items-center flex-shrink-0">
              <div class={`step-indicator ${stepColors[step.color]}`}>
                {step.number}
              </div>
              {index < processSteps.length - 1 && (
                <div class="step-connector h-16 from-cyan-500/50 to-blue-500/50"></div>
              )}
            </div>
            <div class="flex-1">
              <h4 class={`text-lg font-semibold ${colorClasses[step.color].text} mb-2`}>
                {step.title}
              </h4>
              <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">{step.description}</p>
              <div class="flex flex-wrap gap-2">
                {step.details.map((detail) => (
                  <span class={`px-2 py-1 rounded text-xs ${colorClasses[step.color].bg} ${colorClasses[step.color].text}`}>
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <!-- Time Saved -->
      <div class="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center">
        <div class="flex items-center justify-center gap-8">
          <div>
            <span class="text-sm text-slate-500">Traditional way:</span>
            <span class="text-red-400 font-medium ml-2">{timeSaved.traditional}</span>
          </div>
          <ArrowRight class="w-5 h-5 text-slate-400" />
          <div>
            <span class="text-sm text-slate-500">With UI/UX Pro Max:</span>
            <span class="text-emerald-400 font-medium ml-2">{timeSaved.withSkill}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- What You Can Build -->
    <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center fade-in-up" style="animation-delay: 0.5s">
      What You Can Build
    </h3>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
      {buildTypes.map((buildType, index) => {
        const IconComp = buildIcons[buildType.id] || Layout;
        return (
          <div
            class={`glass-card feature-card rounded-xl overflow-hidden border ${colorClasses[buildType.color].border} fade-in-up`}
            style={`animation-delay: ${0.5 + index * 0.1}s`}
          >
            <div class={`p-4 bg-gradient-to-r ${buildType.gradient} border-b border-slate-200 dark:border-slate-800`}>
              <div class="flex items-center gap-3">
                <div class={`w-8 h-8 rounded-lg ${colorClasses[buildType.color].bg} flex items-center justify-center`}>
                  <IconComp class={`w-4 h-4 ${colorClasses[buildType.color].text}`} />
                </div>
                <h4 class={`font-semibold ${colorClasses[buildType.color].text}`}>{buildType.title}</h4>
              </div>
            </div>
            <div class="p-4">
              <p class="text-xs text-slate-600 dark:text-slate-400 mb-3">{buildType.description}</p>
              <div class="space-y-1">
                {buildType.examples.slice(0, 3).map((example) => (
                  <div class="flex items-center gap-2 text-xs text-slate-500">
                    <span class={colorClasses[buildType.color].text}>&#8226;</span>
                    <span>{example}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>

    <!-- Design Styles Preview -->
    <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center fade-in-up" style="animation-delay: 0.9s">
      50 UI Styles to Choose From
    </h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16 fade-in-up" style="animation-delay: 0.9s">
      {designStyles.map((style) => (
        <div class={`p-3 rounded-lg bg-white/60 dark:bg-slate-900/50 border ${colorClasses[style.color].border} hover:border-opacity-80 transition-colors cursor-pointer`}>
          <div class={`text-sm font-medium ${colorClasses[style.color].text} mb-1`}>{style.name}</div>
          <div class="text-xs text-slate-500">{style.description}</div>
        </div>
      ))}
    </div>

    <!-- Magic Phrase (ClaudeKit Integration) -->
    <div class="glass-card rounded-xl p-8 mb-12 border-2 border-indigo-500/30 fade-in-up" style="animation-delay: 1s">
      <div class="flex items-start gap-4 mb-6">
        <div class="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0 float">
          <Zap class="w-6 h-6 text-indigo-400" />
        </div>
        <div>
          <h3 class="text-2xl font-bold text-indigo-400 mb-2">How to Use with ClaudeKit</h3>
          <p class="text-slate-600 dark:text-slate-400">Just add this magic phrase to activate the design intelligence system!</p>
        </div>
      </div>

      <div class="bg-surface-950 rounded-lg p-4 border border-indigo-500/20 mb-4">
        <code class="text-lg text-indigo-300 font-mono">{magicPhrase.syntax}</code>
        <p class="text-xs text-slate-500 mt-2">That's it! AI will automatically search design databases and create beautiful code for you.</p>
      </div>

      <div class="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
        <p class="text-sm text-slate-400 mb-2"><strong class="text-indigo-400">Example Prompt:</strong></p>
        <code class="text-sm text-indigo-300 font-mono block leading-relaxed">
          {magicPhrase.example}
        </code>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center fade-in-up" style="animation-delay: 1.1s">
      <a
        href="/guides#uiux"
        class="cta-button inline-flex items-center gap-2 px-8 py-4 text-white rounded-xl font-semibold text-lg"
      >
        Explore UI/UX Pro Max
        <ArrowRight class="w-5 h-5" />
      </a>
    </div>

  </div>
</section>

<style>
  .float {
    animation: float 3s ease-in-out infinite;
  }
</style>
```

---

## Todo Checklist

- [ ] Create `/src/data/guides/uiux-landing.ts`
- [ ] Create `/src/components/sections/UIUXProMax.astro`
- [ ] Test stats banner
- [ ] Test audience cards
- [ ] Test process steps flow
- [ ] Test build types grid
- [ ] Test design styles grid
- [ ] Test magic phrase section
- [ ] Test responsive layout (mobile/tablet/desktop)
- [ ] Test dark mode
- [ ] Test light mode
- [ ] Test floating animation

---

## Success Criteria

- [ ] Component renders without errors
- [ ] Stats display correctly
- [ ] 3 audience cards with items
- [ ] 3-step process visualized
- [ ] 4 build type cards
- [ ] 8 style chips
- [ ] Magic phrase highlighted
- [ ] Responsive on all breakpoints
- [ ] Floating animation smooth

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Too many cards | Limit to key showcases |
| Complex layout | Use consistent grid patterns |
| Stats overflow | Use flex-wrap |

---

## Security Considerations

- No user input
- Static content only
- No external resources

---

## Next Steps

After completing Phase 05:
1. Test component in isolation
2. Proceed to [Phase 06: Landing Page Integration](./phase-06-landing-integration.md)

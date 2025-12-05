# Phase 04: Slash Commands Integration

**Phase:** 04 of 07
**Status:** Pending
**Est. Time:** 60 minutes
**Dependencies:** Phase 01 complete

---

## Context

Create a Slash Commands Guide section for the landing page based on `mockup-08-slash-commands-guide.html`. This is the most content-rich mockup (~800 lines) and needs careful condensation for landing page use.

---

## Overview

Extract command categories and highlights from the mockup:
- Hero banner explaining slash commands concept
- Skill level quick-start cards (Beginner/Intermediate/Advanced)
- Command categories grid with top commands per category
- "Your Coding Journey" 3-step visual guide
- Tips for beginners

---

## Key Insights from Mockup Analysis

1. **Hero Banner:** Blue/purple gradient, explains "magic shortcuts" concept
2. **Skill Levels:** 3 cards (Beginner=green, Intermediate=amber, Advanced=red)
3. **Categories:** Planning, Fixing, Testing, Navigation, Design, Git
4. **Command Cards:** Command name, difficulty badge, short description
5. **Journey Steps:** Idea -> Plan -> Build flow visualization
6. **Legend:** Difficulty levels and complexity indicators (bolt icons)

---

## Requirements

### Content Extraction (Condensed)
- 3 skill level cards with top 3 commands each
- 4 category groups with top 3 commands each (vs 6 in mockup)
- Simplified 3-step journey
- Key tips for beginners

### Visual Requirements
- Blue/purple color theme
- 3-column skill level cards
- Responsive command grid
- Difficulty badges

---

## Architecture

### Component Structure
```
SlashCommandsGuide.astro
  |-- Section Header (title, description)
  |-- Hero Banner (what are slash commands)
  |-- Skill Level Cards (Beginner/Intermediate/Advanced)
  |-- Command Categories (4 groups)
  |-- Coding Journey (3 steps)
  |-- Tips Section
  |-- CTA (link to /guides#commands)
```

### Data Structure
```typescript
// src/data/guides/commands-landing.ts
export const skillLevels = SkillLevel[];
export const commandCategories = CommandCategory[];
export const journeySteps = JourneyStep[];
export const beginnerTips = Tip[];
```

---

## Files to Create/Modify

### New Files
- `/src/components/sections/SlashCommandsGuide.astro`
- `/src/data/guides/commands-landing.ts`

---

## Implementation Steps

### Step 1: Create Data File

Create `/src/data/guides/commands-landing.ts`:

```typescript
export interface SlashCommand {
  command: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'advanced';
  complexity?: number; // 1-5 for bolt icons
}

export interface SkillLevel {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  gradient: string;
  borderColor: string;
  commands: SlashCommand[];
}

export interface CommandCategory {
  name: string;
  description: string;
  gradient: string;
  iconColor: string;
  borderColor: string;
  commands: SlashCommand[];
}

export interface JourneyStep {
  number: number;
  title: string;
  description: string;
  color: string;
  command: string;
  result: string;
}

export interface BeginnerTip {
  icon: string;
  title: string;
  description: string;
  color: string;
}

// Hero Content
export const commandsHeroContent = {
  title: 'Slash Commands Guide',
  subtitle: 'Your AI assistant speaks slash - here\'s your dictionary',
  description: 'Think of slash commands as magic shortcuts - just type /command and let AI do the heavy lifting! No coding required, just tell ClaudeKit what you want.',
  example: {
    command: '/cook "add a login button"',
    result: 'AI builds the entire feature for you!'
  }
};

// Skill Levels with Top Commands
export const skillLevels: SkillLevel[] = [
  {
    id: 'beginner',
    title: 'Beginner',
    subtitle: 'Start here!',
    description: 'Perfect for your first steps with AI coding',
    color: 'green',
    gradient: 'from-green-500/10 to-emerald-500/10',
    borderColor: 'border-green-500/30',
    commands: [
      { command: '/ask', description: 'Ask technical questions', difficulty: 'easy' },
      { command: '/brainstorm', description: 'Explore ideas together', difficulty: 'easy' },
      { command: '/fix', description: 'Fix bugs automatically', difficulty: 'easy' }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate',
    subtitle: 'Level up!',
    description: 'Build complete features with ease',
    color: 'amber',
    gradient: 'from-amber-500/10 to-orange-500/10',
    borderColor: 'border-amber-500/30',
    commands: [
      { command: '/plan', description: 'Create step-by-step plans', difficulty: 'medium', complexity: 3 },
      { command: '/code', description: 'Implement your plans', difficulty: 'medium', complexity: 2 },
      { command: '/cook', description: 'All-in-one feature builder', difficulty: 'medium', complexity: 3 }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced',
    subtitle: 'Pro mode!',
    description: 'Build entire projects from scratch',
    color: 'red',
    gradient: 'from-red-500/10 to-pink-500/10',
    borderColor: 'border-red-500/30',
    commands: [
      { command: '/bootstrap', description: 'Create complete projects', difficulty: 'advanced', complexity: 5 },
      { command: '/scout', description: 'Explore your codebase', difficulty: 'advanced', complexity: 2 },
      { command: '/watzup', description: 'Review recent changes', difficulty: 'advanced' }
    ]
  }
];

// Command Categories (condensed)
export const commandCategories: CommandCategory[] = [
  {
    name: 'Planning & Development',
    description: 'Build features from scratch',
    gradient: 'workflow-card-header--blue',
    iconColor: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    commands: [
      { command: '/plan', description: 'Create detailed plans', difficulty: 'medium', complexity: 3 },
      { command: '/code', description: 'Implement plans with tests', difficulty: 'easy' },
      { command: '/cook', description: 'All-in-one: plan + code + test', difficulty: 'medium', complexity: 3 }
    ]
  },
  {
    name: 'Fixing & Debugging',
    description: 'Solve problems and fix bugs',
    gradient: 'workflow-card-header--red',
    iconColor: 'text-red-400',
    borderColor: 'border-red-500/30',
    commands: [
      { command: '/fix', description: 'Smart auto-fix for any issue', difficulty: 'medium', complexity: 2 },
      { command: '/debug', description: 'Find root cause of issues', difficulty: 'medium', complexity: 2 },
      { command: '/fix:test', description: 'Fix failing tests', difficulty: 'easy' }
    ]
  },
  {
    name: 'Testing & Quality',
    description: 'Ensure your code works perfectly',
    gradient: 'workflow-card-header--green',
    iconColor: 'text-green-400',
    borderColor: 'border-green-500/30',
    commands: [
      { command: '/test', description: 'Run tests and analyze results', difficulty: 'easy' },
      { command: '/review:codebase', description: 'Comprehensive code review', difficulty: 'medium', complexity: 2 },
      { command: '/watzup', description: 'Review recent changes', difficulty: 'easy' }
    ]
  },
  {
    name: 'Design & Content',
    description: 'Create beautiful designs',
    gradient: 'workflow-card-header--pink',
    iconColor: 'text-pink-400',
    borderColor: 'border-pink-500/30',
    commands: [
      { command: '/design:fast', description: 'Quick design generation', difficulty: 'easy' },
      { command: '/design:good', description: 'High-quality designs', difficulty: 'medium', complexity: 2 },
      { command: '/content:enhance', description: 'Improve existing content', difficulty: 'easy' }
    ]
  }
];

// Journey Steps
export const journeySteps: JourneyStep[] = [
  {
    number: 1,
    title: 'Start with an Idea',
    description: 'Have an idea? Just talk to ClaudeKit like you would to a friend!',
    color: 'purple',
    command: '/brainstorm',
    result: 'AI helps you explore different approaches'
  },
  {
    number: 2,
    title: 'Create a Plan',
    description: 'AI creates a detailed roadmap for building your feature',
    color: 'blue',
    command: '/plan',
    result: 'Step-by-step instructions generated'
  },
  {
    number: 3,
    title: 'AI Builds It!',
    description: 'Sit back and watch AI write the code, test it, and make it perfect!',
    color: 'green',
    command: '/code @plan.md',
    result: 'Complete implementation with tests'
  }
];

// Beginner Tips
export const beginnerTips: BeginnerTip[] = [
  {
    icon: 'message',
    title: 'Talk Like a Human',
    description: 'No need for technical jargon! Explain what you want in plain English.',
    color: 'cyan'
  },
  {
    icon: 'file',
    title: 'Use @ to Reference Files',
    description: 'Type @filename to tell AI which files to work with',
    color: 'purple'
  },
  {
    icon: 'check',
    title: 'Start Small',
    description: 'Begin with /ask or /brainstorm to get comfortable',
    color: 'green'
  },
  {
    icon: 'refresh',
    title: "Don't Be Afraid to Experiment",
    description: 'AI helps you learn as you go. Try different commands!',
    color: 'amber'
  }
];
```

### Step 2: Create Component

Create `/src/components/sections/SlashCommandsGuide.astro`:

```astro
---
import {
  Layers,
  ArrowRight,
  MessageSquare,
  FileText,
  Check,
  RefreshCw,
  Zap,
  Code,
  Wrench,
  TestTube,
  Palette
} from 'lucide-astro';
import {
  commandsHeroContent,
  skillLevels,
  commandCategories,
  journeySteps,
  beginnerTips
} from '@/data/guides/commands-landing';

const levelColors: Record<string, { text: string; bg: string; border: string }> = {
  green: { text: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/30' },
  amber: { text: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/30' },
  red: { text: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/30' }
};

const difficultyClasses: Record<string, string> = {
  easy: 'skill-badge--easy',
  medium: 'skill-badge--medium',
  advanced: 'skill-badge--advanced'
};

const stepColors: Record<string, string> = {
  purple: 'step-indicator--purple',
  blue: 'step-indicator--blue',
  green: 'step-indicator--green'
};

const categoryIcons: Record<string, any> = {
  'Planning & Development': Code,
  'Fixing & Debugging': Wrench,
  'Testing & Quality': TestTube,
  'Design & Content': Palette
};

const tipIcons: Record<string, any> = {
  message: MessageSquare,
  file: FileText,
  check: Check,
  refresh: RefreshCw
};

// Helper to render complexity bolts
const renderComplexity = (count: number) => {
  return Array(count).fill('&#9889;').join('');
};
---

<section id="slash-commands" class="section py-24 bg-gradient-to-b from-transparent to-blue-500/5">
  <div class="max-w-6xl mx-auto px-6">

    <!-- Section Header -->
    <div class="text-center mb-16 fade-in-up">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
        <Layers class="w-5 h-5 text-blue-500" />
        <span class="text-sm font-medium text-blue-600 dark:text-blue-400">Magic Shortcuts</span>
      </div>
      <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
        {commandsHeroContent.title}
      </h2>
      <p class="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
        {commandsHeroContent.description}
      </p>
    </div>

    <!-- Hero Example -->
    <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/30 p-8 mb-12 fade-in-up" style="animation-delay: 0.1s">
      <div class="relative z-10">
        <p class="text-slate-600 dark:text-slate-300 text-lg mb-4">
          <strong class="text-blue-600 dark:text-blue-400">Example:</strong>
        </p>
        <div class="flex items-center gap-3 flex-wrap">
          <code class="px-3 py-2 rounded bg-surface-950 text-green-400 font-mono text-sm">
            {commandsHeroContent.example.command}
          </code>
          <span class="text-slate-500">&rarr;</span>
          <span class="text-sm text-slate-400">{commandsHeroContent.example.result}</span>
        </div>
      </div>
      <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>

    <!-- Skill Level Cards -->
    <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center fade-in-up" style="animation-delay: 0.2s">
      Pick Your Level
    </h3>
    <div class="grid md:grid-cols-3 gap-6 mb-16">
      {skillLevels.map((level, index) => (
        <div
          class={`glass-card feature-card rounded-xl overflow-hidden border ${level.borderColor} fade-in-up`}
          style={`animation-delay: ${0.2 + index * 0.1}s`}
        >
          <div class={`p-5 bg-gradient-to-br ${level.gradient} border-b border-slate-200 dark:border-slate-800`}>
            <div class="flex items-center gap-3 mb-2">
              <div class={`w-10 h-10 rounded-lg ${levelColors[level.color].bg} flex items-center justify-center`}>
                <Check class={`w-5 h-5 ${levelColors[level.color].text}`} />
              </div>
              <div>
                <h4 class={`text-lg font-bold ${levelColors[level.color].text}`}>{level.title}</h4>
                <p class="text-xs text-slate-500">{level.subtitle}</p>
              </div>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">{level.description}</p>
          </div>
          <div class="p-4 space-y-2">
            {level.commands.map((cmd) => (
              <div class="p-3 rounded-lg bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-colors cursor-pointer">
                <code class={`text-sm ${levelColors[level.color].text} font-mono`}>{cmd.command}</code>
                <p class="text-xs text-slate-500 mt-1">{cmd.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <!-- Command Categories Grid -->
    <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center fade-in-up" style="animation-delay: 0.5s">
      Commands by Category
    </h3>
    <div class="grid md:grid-cols-2 gap-6 mb-16">
      {commandCategories.map((category, index) => {
        const IconComponent = categoryIcons[category.name] || Code;
        return (
          <div
            class={`workflow-card border ${category.borderColor} fade-in-up`}
            style={`animation-delay: ${0.5 + index * 0.1}s`}
          >
            <div class={`workflow-card-header ${category.gradient}`}>
              <div class="flex items-center gap-3">
                <IconComponent class={`w-5 h-5 ${category.iconColor}`} />
                <div>
                  <h4 class="text-lg font-semibold text-slate-900 dark:text-white">{category.name}</h4>
                  <p class="text-xs text-slate-500">{category.description}</p>
                </div>
              </div>
            </div>
            <div class="p-4 grid grid-cols-1 gap-2">
              {category.commands.map((cmd) => (
                <div class="p-3 rounded-lg bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-colors">
                  <div class="flex items-start justify-between mb-1">
                    <code class={`text-sm ${category.iconColor} font-mono`}>
                      {cmd.command}
                      {cmd.complexity && (
                        <span class="ml-1 text-amber-400" set:html={renderComplexity(cmd.complexity)}></span>
                      )}
                    </code>
                    <span class={`skill-badge ${difficultyClasses[cmd.difficulty]}`}>
                      {cmd.difficulty === 'easy' ? 'Easy' : cmd.difficulty === 'medium' ? 'Medium' : 'Advanced'}
                    </span>
                  </div>
                  <p class="text-xs text-slate-500">{cmd.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>

    <!-- Your Coding Journey -->
    <div class="glass-card rounded-xl p-8 mb-16 fade-in-up" style="animation-delay: 0.9s">
      <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
        Your Coding Journey in 3 Steps
      </h3>

      <div class="space-y-6">
        {journeySteps.map((step, index) => (
          <div class="flex items-start gap-4">
            <div class="flex flex-col items-center flex-shrink-0">
              <div class={`step-indicator ${stepColors[step.color]}`}>
                {step.number}
              </div>
              {index < journeySteps.length - 1 && (
                <div class={`step-connector from-${step.color}-500/50 to-${journeySteps[index + 1].color}-500/50`}></div>
              )}
            </div>
            <div class="flex-1 pb-6">
              <h4 class={`text-lg font-semibold text-${step.color}-600 dark:text-${step.color}-400 mb-2`}>
                {step.title}
              </h4>
              <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">{step.description}</p>
              <div class="flex items-center gap-3">
                <code class={`px-2 py-1 rounded bg-${step.color}-500/10 text-${step.color}-400 font-mono text-sm`}>
                  {step.command}
                </code>
                <span class="text-xs text-slate-500">&rarr; {step.result}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <!-- Pro Tip -->
      <div class="mt-6 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
        <div class="flex items-start gap-3">
          <Zap class="w-6 h-6 text-amber-400 flex-shrink-0" />
          <div>
            <h5 class="text-sm font-bold text-amber-400 mb-1">Pro Tip: Skip Steps with /cook</h5>
            <p class="text-xs text-slate-400">
              Want it even faster? Use <code class="px-1 py-0.5 rounded bg-slate-900/50 text-amber-400 font-mono">/cook</code> to do all 3 steps at once!
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Tips for Beginners -->
    <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center fade-in-up" style="animation-delay: 1s">
      Tips for Beginners
    </h3>
    <div class="grid md:grid-cols-2 gap-4 mb-12">
      {beginnerTips.map((tip, index) => {
        const TipIcon = tipIcons[tip.icon] || MessageSquare;
        return (
          <div
            class="flex items-start gap-3 p-4 rounded-lg glass-card fade-in-up"
            style={`animation-delay: ${1 + index * 0.1}s`}
          >
            <TipIcon class={`w-6 h-6 text-${tip.color}-400 mt-0.5 flex-shrink-0`} />
            <div>
              <h5 class="text-sm font-medium text-slate-900 dark:text-slate-200 mb-1">{tip.title}</h5>
              <p class="text-xs text-slate-600 dark:text-slate-400">{tip.description}</p>
            </div>
          </div>
        );
      })}
    </div>

    <!-- CTA -->
    <div class="text-center fade-in-up" style="animation-delay: 1.4s">
      <p class="text-sm text-slate-500 mb-4">62 commands across 14 categories</p>
      <a
        href="/guides#commands"
        class="cta-button inline-flex items-center gap-2 px-8 py-4 text-white rounded-xl font-semibold text-lg"
      >
        Explore All Commands
        <ArrowRight class="w-5 h-5" />
      </a>
    </div>

  </div>
</section>
```

---

## Todo Checklist

- [ ] Create `/src/data/guides/commands-landing.ts`
- [ ] Create `/src/components/sections/SlashCommandsGuide.astro`
- [ ] Test skill level cards
- [ ] Test command category grid
- [ ] Test journey steps flow
- [ ] Test tips section
- [ ] Test responsive layout (mobile/tablet/desktop)
- [ ] Test dark mode
- [ ] Test light mode

---

## Success Criteria

- [ ] Component renders without errors
- [ ] 3 skill level cards display correctly
- [ ] 4 category cards with commands
- [ ] 3-step journey visualized
- [ ] 4 beginner tips displayed
- [ ] Difficulty badges correct colors
- [ ] Responsive on all breakpoints

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Too much content | Keep top 3 commands per section |
| Complex grid layout | Use flexbox fallbacks |
| Dynamic color classes | Ensure all colors in safelist |

---

## Security Considerations

- No user input
- Static content only
- No external resources

---

## Next Steps

After completing Phase 04:
1. Test component in isolation
2. Proceed to [Phase 05: UI/UX Guide Integration](./phase-05-uiux-guide.md)

# Code Standards & Development Guidelines

**Document Version:** 1.3
**Last Updated:** 2025-12-08
**Status:** Phase 06 Complete (Landing Page Integration with PWA Support)

## Table of Contents

1. [TypeScript Standards](#typescript-standards)
2. [Component Development](#component-development)
3. [Styling Guidelines](#styling-guidelines)
4. [File Organization](#file-organization)
5. [Naming Conventions](#naming-conventions)
6. [Performance Best Practices](#performance-best-practices)
7. [Accessibility Standards](#accessibility-standards)
8. [Testing Standards](#testing-standards)

## TypeScript Standards

### Configuration

- **Mode:** Strict mode enabled (extends `astro/tsconfigs/strict`)
- **Target:** ES2020+
- **Module Resolution:** Node
- **Path Aliases:** Required for all imports

### Type Definitions

#### Path Aliases (Required)

```typescript
// CORRECT
import Button from '@/components/ui/Button.astro';
import type { SEOMeta } from '@/types';
import { initThemeToggle } from '@/scripts/theme-toggle';

// INCORRECT
import Button from '../../../components/ui/Button.astro';
import type { SEOMeta } from '../types';
```

#### Interface Conventions

```typescript
// Use PascalCase for interface names
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

// Use semantic property names
export interface FeatureCard {
  icon: string;
  iconColor: 'blue' | 'purple' | 'green' | 'red' | 'amber' | 'orange' | 'emerald' | 'cyan' | 'pink';
  title: string;
  description: string;
  href?: string;
}

// Discriminated unions for variants
export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

// Phase 01 ClaudeKit Interfaces
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

// Phase 04 - Slash Commands Interfaces
export interface SlashCommand {
  command: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'advanced';
  complexity?: number; // 1-5 bolt icons
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

// Phase 06 - Guide Pages Interfaces
export interface GuideSection {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface DailyRoutine {
  time: string;
  tasks: string[];
  commands: string[];
}

export interface CommandExample {
  command: string;
  description: string;
  output?: string;
}

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  command?: string;
  code?: string;
}

export interface UIUXStyle {
  name: string;
  description: string;
  preview: string;
}

export interface DesignToken {
  name: string;
  value: string;
  description: string;
}
```

### Error Handling

```typescript
// Use explicit error handling
try {
  const result = await someAsyncOperation();
  return result;
} catch (error) {
  console.error('Operation failed:', error);
  throw new Error('Descriptive error message');
}

// Prefer null/undefined checks over falsy checks
if (value === null || value === undefined) {
  // Handle missing value
}
```

## Component Development

### Astro Component Structure

All components follow this structure:

```astro
---
// 1. Import statements
import type { ComponentProps } from '@/types';
import '@/styles/component.css'; // if needed

// 2. Define Props interface
interface Props extends AstroComponentProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
}

// 3. Extract and set defaults
const {
  variant = 'primary',
  size = 'md',
  class: className = ''
} = Astro.props;

// 4. Build class strings
const baseClasses = 'flex items-center justify-center';
const variantClasses = { /* ... */ };
const sizeClasses = { /* ... */ };
const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
---

<!-- Component template -->
<div class={classes}>
  <slot />
</div>
```

### Component Variants

Use discriminated unions for component variations:

```astro
---
interface Props {
  variant: 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md';
}

const { variant, size = 'sm' } = Astro.props;

const config = {
  success: { bg: 'bg-green-500/20', text: 'text-green-600' },
  warning: { bg: 'bg-amber-500/20', text: 'text-amber-600' },
  // ...
};

const { bg, text } = config[variant];
---
```

### Prop Passing

```astro
---
// Accept spread props for flexibility
interface Props {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  class?: string;
  [key: string]: any; // Allow additional attributes
}

const { href, type = 'button', class: className = '', ...attrs } = Astro.props;
---

{href ? (
  <a href={href} class={className} {...attrs}>
    <slot />
  </a>
) : (
  <button type={type} class={className} {...attrs}>
    <slot />
  </button>
)}
```

### Composition

```astro
---
// Always import from path aliases
import Button from '@/components/ui/Button.astro';
import GlassCard from '@/components/ui/GlassCard.astro';
---

<GlassCard variant="default" padding="md">
  <Button variant="primary" size="lg">Click me</Button>
</GlassCard>
```

### Alpine.js Integration

```astro
---
// Guide page with tab navigation
interface Props {
  sections: GuideSection[];
}
---

<div x-data="{ activeTab: 'cli' }" x-init="$watch('activeTab', value => window.location.hash = value)">
  <!-- Tab navigation -->
  <nav class="sticky top-0 z-10">
    <template x-for="section in sections" :key="section.id">
      <button
        @click="activeTab = section.id"
        :class="{ 'active': activeTab === section.id }"
        x-text="section.title">
      </button>
    </template>
  </nav>

  <!-- Tab content -->
  <div x-show="activeTab === 'cli'">
    <slot name="cli-content" />
  </div>
</div>
```

## Styling Guidelines

### Tailwind CSS v4

**Core Principle:** Utility-first CSS with @theme for design tokens

### Design Tokens (@theme)

```css
@theme {
  --font-heading: 'Space Grotesk', sans-serif;
  --font-sans: 'DM Sans', sans-serif;
  --font-mono: 'Fira Code', monospace;

  --color-surface-50: #f8fafc;
  --color-surface-100: #f1f5f9;
  --color-surface-800: #1e293b;
  --color-surface-900: #0f172a;
  --color-surface-950: #020617;
}
```

### Utilities Organization

```css
@layer components {
  /* Component classes for reusable patterns */
  .glass-card {
    @apply bg-white/80 dark:bg-surface-900/60;
    @apply border border-slate-200 dark:border-white/10;
    @apply backdrop-blur-2xl;
  }
}

@layer utilities {
  /* Helper utilities */
  .fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }
}
```

### Responsive Design

```tailwind
<!-- Mobile-first, extend with md:, lg:, xl: prefixes -->
<div class="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

<!-- Grid example -->
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- items -->
</div>
```

### Dark Mode

```tailwind
<!-- Use dark: prefix for dark mode styles -->
<div class="bg-white dark:bg-slate-900">
  <p class="text-slate-900 dark:text-slate-100">
    Text adapts to theme
  </p>
</div>
```

### Animations

```css
/* Define keyframes in global.css */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Use in components via utility classes */
<div class="fade-in-up">Content</div>
```

### Glassmorphism Pattern

```tailwind
<!-- Base glass effect -->
<div class="bg-white/80 dark:bg-surface-900/60 border border-slate-200 dark:border-white/10 backdrop-blur-2xl rounded-2xl">
  Content with glassmorphism
</div>

<!-- Interactive glass with glow -->
<div class="glass-card glow-border hover:glass-card-hover">
  Hover to interact
</div>
```

## File Organization

### Correct Structure

```
src/
├── components/
│   ├── ui/              # Base UI components
│   │   ├── Button.astro
│   │   ├── GlassCard.astro
│   │   ├── Badge.astro
│   │   └── Input.astro
│   ├── layout/          # Layout components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── AmbientBackground.astro
│   ├── sections/        # Landing page sections
│   │   ├── Hero.astro
│   │   ├── Problem.astro
│   │   ├── Features.astro
│   │   ├── Pricing.astro
│   │   ├── ClaudeKitCLIGuide.astro
│   │   ├── RecommendedWorkflows.astro
│   │   ├── SlashCommandsGuide.astro
│   │   ├── UIUXProMax.astro
│   │   └── WaitlistForm.astro
│   └── guides/          # Guide page components
│       ├── TabNavigation.astro
│       ├── CLIGuide.astro
│       ├── CommandsGuide.astro
│       ├── WorkflowsGuide.astro
│       ├── UIUXGuide.astro
│       ├── CCSGuide.astro
│       ├── FixLogsGuide.astro
│       ├── PermissionsGuide.astro
│       └── ResumeGuide.astro
├── layouts/
│   ├── MainLayout.astro
│   └── BlogLayout.astro
├── pages/
│   ├── index.astro
│   ├── features.astro
│   └── blog/
│       └── [slug].astro
├── scripts/
│   ├── theme-toggle.ts
│   ├── form-handler.ts
│   ├── intersection-observer.ts
│   ├── smooth-scroll.ts
│   └── nav-scroll-highlight.ts
├── styles/
│   ├── global.css
│   └── components.css
├── types/
│   └── index.ts
└── data/
    └── navigation.ts
```

### Naming Conventions

```
components/
  ui/Button.astro           # Component name = filename
  ui/GlassCard.astro
  ui/FormInput.astro        # Avoid generic names like Input

layouts/
  MainLayout.astro
  BlogLayout.astro

pages/
  index.astro               # Root page
  guides/                   # Guide pages
    index.astro            # Guides overview
    cli.astro              # CLI guide
    commands.astro         # Commands guide
    workflows.astro        # Workflows guide
    uiux.astro             # UI/UX guide
    ccs.astro              # CCS guide
    fix-logs.astro         # Fix logs guide
    permissions.astro      # Permissions guide
    resume.astro           # Resume guide

scripts/
  theme-toggle.ts           # kebab-case for files
  form-validation.ts

styles/
  global.css                # Global styles
  components.css            # Component-specific styles

types/
  index.ts                  # Centralized types
```

## Naming Conventions

### Files & Folders

```
// Components: PascalCase.astro
Button.astro
GlassCard.astro
MainLayout.astro

// Scripts/styles: kebab-case.ts/.css
theme-toggle.ts
form-validation.ts
global.css

// Folders: kebab-case
src/components/ui/
src/scripts/
src/styles/

// Dynamic routes: [param].astro
[slug].astro
[...path].astro
```

### Variables & Functions

```typescript
// camelCase for variables and functions
const userData = {...};
const isLoading = true;
function handleClick() {}

// UPPERCASE for constants
const MAX_ATTEMPTS = 3;
const API_ENDPOINT = 'https://api.example.com';

// PascalCase for types and interfaces
interface ButtonProps {}
type Variant = 'primary' | 'secondary';

// underscore prefix for private methods
function _internalHelper() {}
```

### CSS Classes

```css
/* kebab-case for CSS classes */
.glass-card { }
.glass-card-light { }
.nav-link { }
.cta-button { }

/* Block-Element-Modifier (BEM) for complex components */
.component { }
.component__element { }
.component--modifier { }

/* ClaudeKit Phase 01 - New CSS Components */
.terminal-window { }           /* Terminal emulator container */
.terminal-header { }           /* Terminal top bar with dots */
.terminal-content { }          /* Terminal display area */
.step-indicator { }            /* Step numbers (8 color variants) */
.workflow-card { }             /* Workflow documentation cards */
.workflow-card-header { }      /* Card header with gradient (9 variants) */
.skill-badge { }               /* Difficulty badges (6 variants) */

/* Phase 04 - Slash Commands CSS Classes */
.step-connector { }            /* Visual connector between journey steps */
.feature-card { }              /* Enhanced glass card for features */
```

## Performance Best Practices

### Code Splitting

```typescript
// Lazy load heavy modules
const handleFeature = async () => {
  const module = await import('./heavy-module');
  module.doSomething();
};
```

### Image Optimization

```astro
---
import { Image } from 'astro:assets';
import heroImage from '@/assets/hero.jpg';
---

<Image
  src={heroImage}
  alt="Hero section"
  widths={[200, 400, 600, 800]}
  sizes="(max-width: 400px) 100vw, (max-width: 800px) 50vw, 800px"
/>
```

### CSS Optimization

```css
/* Use @layer for proper cascade */
@layer base {
  /* Base styles */
}

@layer components {
  /* Reusable component classes */
}

@layer utilities {
  /* Utility classes */
}
```

### Script Loading

```astro
---
// Load scripts only when needed
---

<script>
  import { expensiveFunction } from './module';
</script>

<!-- Or use is:inline for critical scripts -->
<script is:inline>
  // Critical theme detection
</script>
```

## Accessibility Standards

### HTML Semantics

```astro
---
// Use semantic HTML
---

<nav role="navigation" aria-label="Main navigation">
  <a href="/" aria-current="page">Home</a>
</nav>

<main>
  <section aria-labelledby="section-title">
    <h2 id="section-title">Features</h2>
  </section>
</main>

<button aria-label="Toggle theme">
  <Sun class="w-5 h-5 dark:hidden" />
  <Moon class="w-5 h-5 hidden dark:block" />
</button>
```

### Color Contrast

```css
/* Ensure sufficient contrast ratios */
/* WCAG AA: 4.5:1 for normal text, 3:1 for large text */
color: #0f172a;        /* 900 on light background */
color: #f1f5f9;        /* 100 on dark background */
```

### Focus Management

```tailwind
<!-- Always include focus states -->
<input class="focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
<button class="focus-visible:ring-2 focus-visible:ring-offset-2" />
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Progressive Web App (PWA) Standards

### Web Manifest
```json
{
  "name": "VividKit",
  "short_name": "VividKit",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

### Icon Requirements
- Provide multiple sizes: 192x192, 512x512
- Use PNG format for better compatibility
- Ensure icons work on both light and dark backgrounds
- Test on various devices and platforms

### Service Worker Guidelines
- Cache static assets for offline functionality
- Implement cache-first strategy for HTML/CSS/JS
- Use network-first for API calls when online
- Provide offline fallback page

### App-like Experience
- Use standalone display mode
- Implement smooth transitions between pages
- Add loading states for better perceived performance
- Ensure touch-friendly interface elements

## Testing Standards

### Component Testing

```typescript
// Example test structure (to be implemented)
describe('Button component', () => {
  it('renders with primary variant', () => {
    // Test implementation
  });

  it('supports size variations', () => {
    // Test implementation
  });

  it('handles click events', () => {
    // Test implementation
  });
});
```

### Manual Testing Checklist

- [ ] Light mode rendering
- [ ] Dark mode rendering
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Touch interactions
- [ ] Cross-browser compatibility

## Code Review Checklist

- [ ] Uses path aliases (@/)
- [ ] Type safe (no `any` types)
- [ ] Follows naming conventions
- [ ] Uses semantic HTML
- [ ] Responsive design considered
- [ ] Accessibility considered
- [ ] Performance optimized
- [ ] No console errors/warnings
- [ ] Dark mode supported
- [ ] Documentation added

## Common Patterns

### Theme Detection

```typescript
function getTheme(): 'light' | 'dark' {
  const stored = localStorage.getItem('theme');
  if (stored) return stored as 'light' | 'dark';

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}
```

### Event Handling in Astro

```astro
---
// Props interface for interactive features
interface Props {
  onSubmit?: (data: FormData) => void;
}
---

<form>
  <!-- Handled by Alpine.js or client:load scripts -->
</form>
```

### Conditional Rendering

```astro
---
const isProduction = import.meta.env.PROD;
const isDevelopment = import.meta.env.DEV;
---

{isDevelopment && (
  <div class="p-4 bg-yellow-100 border border-yellow-400">
    Development mode active
  </div>
)}
```

---

**Document Status:** Updated for Phase 06 (PWA Support and Guide Pages)
**Next Review:** Phase 07 completion

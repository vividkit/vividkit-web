# Code Standards & Development Guidelines

**Document Version:** 1.0
**Last Updated:** 2025-12-04
**Status:** Phase 01 Complete

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
│   │   └── Navigation.astro
│   └── features/        # Feature-specific components
│       ├── HeroSection.astro
│       └── PricingCard.astro
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
│   └── analytics.ts
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
  features.astro            # Top-level route
  blog/
    [slug].astro            # Dynamic route

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

**Document Status:** Complete for Phase 01
**Next Review:** Phase 02 completion

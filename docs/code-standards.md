# VividKit Web - Code Standards & Development Guidelines

**Last Updated:** December 10, 2025
**Version:** 1.1.0
**Enforced by:** TypeScript strict mode + Astro type checking

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Naming Conventions](#naming-conventions)
3. [TypeScript Usage](#typescript-usage)
4. [Component Patterns](#component-patterns)
5. [i18n Standards](#i18n-standards)
6. [Performance Practices](#performance-practices)
7. [Code Style & Formatting](#code-style--formatting)
8. [Testing Conventions](#testing-conventions)
9. [Accessibility Standards](#accessibility-standards)
10. [Common Anti-Patterns](#common-anti-patterns)

---

## Project Structure

### Directory Organization
```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Header, Footer, global UI
│   ├── sections/       # Homepage sections (Hero, Features, etc.)
│   ├── guides/         # Guide page components
│   └── ui/             # Atomic UI components (Button, Badge, ThemeToggle, etc.)
├── data/               # Content & configuration
│   ├── constants.ts    # Site config
│   ├── navigation.ts   # Nav structure
│   ├── features.ts     # Marketing content
│   ├── guides/         # Guide content
│   └── vi/             # Vietnamese translations
├── i18n/               # Internationalization
│   ├── index.ts        # i18n setup
│   ├── utils.ts        # Helper functions
│   └── locales/        # en.ts, vi.ts
├── layouts/            # Page layouts (MainLayout, GuidesLayout, GuideLayout)
├── pages/              # Astro routes (auto-routed)
│   ├── index.astro     # / route
│   ├── guides/         # /guides/* routes
│   └── vi/             # /vi/* routes
├── scripts/            # Client-side utilities
├── styles/             # Global CSS
└── types/              # TypeScript interfaces
```

### Rationale
- **Colocation:** Related files grouped together
- **Scalability:** Easy to add new sections/guides
- **Clarity:** Obvious where to find/add code
- **i18n-ready:** Bilingual structure baked in

---

## Naming Conventions

### File Names

| Type | Convention | Example | Location |
|------|------------|---------|----------|
| **Components** | PascalCase | Button.astro, Header.astro | components/ |
| **Pages** | kebab-case (route) | [slug].astro | pages/ |
| **Data** | camelCase | features.ts, navigation.ts | data/ |
| **Scripts** | kebab-case | form-handler.ts | scripts/ |
| **Styles** | kebab-case | globals.css | styles/ |
| **Types** | camelCase | index.ts | types/ |

### Examples
```
✓ src/components/Button.astro
✓ src/data/features.ts
✓ src/scripts/theme-toggle.ts
✗ src/components/button.astro          (should be PascalCase)
✗ src/data/navigationLinks.ts          (should be camelCase)
✗ src/scripts/theme_toggle.ts          (should be kebab-case)
```

### Component Props
```typescript
// ✓ CORRECT: Descriptive, camelCase
interface Props {
  isActive: boolean;
  href: string;
  onClickHandler?: () => void;
}

// ✗ WRONG: Abbreviated, confusing
interface Props {
  act: boolean;
  h: string;
  click?: () => void;
}
```

### Variables & Constants
```typescript
// ✓ CORRECT
const MAX_ITEMS = 10;           // Constants: UPPER_SNAKE_CASE
const currentUser = user;        // Variables: camelCase
let activeItem = null;           // Mutable: camelCase

// ✗ WRONG
const maxItems = 10;             // Constants should be UPPER_SNAKE_CASE
const CurrentUser = user;        // Variables shouldn't be PascalCase
let ACTIVE_ITEM = null;          // Non-constants shouldn't be UPPER_SNAKE_CASE
```

### Translation Keys
```typescript
// ✓ CORRECT: Nested, descriptive
t('nav.home')
t('header.lang.en')
t('guide.cli.installationTitle')

// ✗ WRONG: Flat, unclear
t('home')
t('lang')
t('installTitle')
```

---

## TypeScript Usage

### Strict Mode Enabled
```typescript
// tsconfig.json enforces:
{
  "compilerOptions": {
    "strict": true,              // All strict checks enabled
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitAny": true
  }
}
```

### Type Definitions

**Always define types explicitly:**
```typescript
// ✓ CORRECT
function getUser(id: string): User | null {
  return users.find(u => u.id === id) ?? null;
}

// ✗ WRONG: Implicit any
function getUser(id) {
  return users.find(u => u.id === id);
}
```

### Interface vs Type
```typescript
// ✓ USE INTERFACES for:
// - Object shapes that extend/implement
// - Structural typing requirements
interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

// ✓ USE TYPES for:
// - Union types, tuples, primitives
// - Complex utility types
type Difficulty = 'easy' | 'medium' | 'advanced';
type CommandCategory = 'planning' | 'implementation' | 'debugging';
```

### Null Safety
```typescript
// ✓ CORRECT: Handle null explicitly
function processCommand(cmd: Command | null): void {
  if (!cmd) return;
  console.log(cmd.name);
}

// ✓ CORRECT: Use optional chaining
const title = command?.title ?? 'Untitled';

// ✗ WRONG: Assume non-null
function processCommand(cmd: Command): void {
  console.log(cmd.name);  // Runtime error if cmd is null
}
```

### Generics
```typescript
// ✓ CORRECT: Reusable generic component
function CardList<T extends { id: string }>(items: T[]): T[] {
  return items.filter(item => item.id);
}

// ✗ WRONG: Hardcoded type
function CardList(items: Command[]): Command[] {
  return items.filter(item => item.id);
}
```

---

## Component Patterns

### Astro Component Structure
```astro
---
// 1. Imports first
import Button from '@/components/ui/Button.astro';
import type { FeatureCard } from '@/types';

// 2. Props definition
interface Props {
  title: string;
  cards: FeatureCard[];
  isLoading?: boolean;
}

// 3. Destructure props
const { title, cards, isLoading = false } = Astro.props;

// 4. Logic/computations
const validCards = cards.filter(c => c.title && c.description);
const cardCount = validCards.length;

// 5. Helper functions
function formatTitle(input: string): string {
  return input.toUpperCase();
}
---

<!-- 6. Template -->
<section class="space-y-4">
  <h2>{formatTitle(title)}</h2>
  {isLoading ? (
    <div>Loading...</div>
  ) : (
    <div class="grid gap-4">
      {validCards.map(card => (
        <Button href={card.href}>{card.title}</Button>
      ))}
    </div>
  )}
</section>

<style>
  /* 7. Component-scoped styles */
</style>
```

### Props Best Practices
```astro
---
// ✓ CORRECT: Explicit types, destructuring
interface Props {
  title: string;
  description?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const { title, description, variant = 'primary', onClick } = Astro.props;

// ✗ WRONG: Any types, implicit
interface Props {
  [key: string]: any;
}

const props = Astro.props;
---
```

### Slots Usage
```astro
---
// Parent uses slots for flexible composition
interface Props {
  title: string;
  footer?: boolean;
}

const { title, footer = false } = Astro.props;
---

<div class="card">
  <h3>{title}</h3>
  <slot />  <!-- Default slot for content -->
  {footer && <slot name="footer" />}  <!-- Named slot -->
</div>

---

<!-- Usage -->
<Card title="My Card">
  <p>Content here</p>
  <p slot="footer">Footer content</p>
</Card>
```

---

## i18n Standards

### Translation Key Structure
```typescript
// ✓ CORRECT: Nested, hierarchical
{
  nav: {
    home: 'Home',
    features: 'Features',
    guides: 'Guides'
  },
  header: {
    lang: {
      en: 'EN',
      vi: 'VI'
    }
  },
  guide: {
    cli: {
      title: 'CLI Guide',
      steps: {
        install: 'Installation'
      }
    }
  }
}

// ✗ WRONG: Flat structure
{
  navHome: 'Home',
  navFeatures: 'Features',
  headerLangEn: 'EN'
}
```

### Data Files (Bilingual)
```
src/data/
├── features.ts             (English)
├── navigation.ts           (English)
└── vi/
    ├── features.ts         (Vietnamese)
    └── navigation.ts       (Vietnamese)
```

### Using Translations in Components
```astro
---
import { useTranslations, getLangFromUrl } from '@/i18n/utils';

// Get current language from URL
const lang = getLangFromUrl(Astro.url);

// Get translation function
const t = useTranslations(lang);
---

<nav>
  <a href="/">{t('nav.home')}</a>
  <a href="/guides">{t('nav.guides')}</a>
</nav>
```

### Translation Validation
```typescript
// TypeScript ensures keys exist
const key = 'nav.home';  // ✓ Valid key
const key = 'invalid.key';  // ✗ Type error (if implemented)
```

### Vietnamese Translation Quality
- Use native speakers for translations
- Maintain consistent terminology across documents
- Test Vietnamese rendering (RTL/LTR compatibility)
- Review cultural appropriateness

---

## Performance Practices

### Static Generation Only
```typescript
// ✓ CORRECT: Data available at build time
export const staticContent = [
  { id: 1, title: 'Guide 1' },
  { id: 2, title: 'Guide 2' }
];

// ✗ WRONG: Runtime data fetching (not supported)
export async function getContent() {
  const res = await fetch('https://api.example.com/content');
  return res.json();
}
```

### Asset Optimization
```astro
---
// ✓ CORRECT: Import local images (optimized)
import logo from '@/assets/logo.png';

// Use imported images
---
<img src={logo.src} alt="Logo" width={logo.width} height={logo.height} />

<!-- ✗ WRONG: External URLs (not optimized) -->
<img src="https://example.com/logo.png" alt="Logo" />
```

### CSS Best Practices
```css
/* ✓ CORRECT: Utility-first with Tailwind */
<div class="flex items-center gap-4 p-6 rounded-lg bg-white dark:bg-slate-900">
  Content
</div>

/* ✗ WRONG: Custom CSS (prevents optimization) */
<style>
  .custom-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
  }
</style>
```

### Script Loading
```astro
---
// ✓ CORRECT: Defer non-critical scripts
import formHandler from '@/scripts/form-handler.ts';
---

<form on:submit={formHandler}>
  <!-- form fields -->
</form>

<!-- ✗ WRONG: Blocking scripts -->
<script>
  // Heavy computation here blocks rendering
</script>
```

### Bundle Optimization
```typescript
// ✓ CORRECT: Single Alpine.js instance
export default {
  theme: 'light',
  toggle() { this.theme = this.theme === 'dark' ? 'light' : 'dark'; }
};

// ✗ WRONG: Multiple scripts in components
<script>
  // Script duplicated in multiple components
</script>
```

---

## Code Style & Formatting

### Indentation & Spacing
```typescript
// ✓ CORRECT: 2-space indentation
function processCommands(commands: Command[]): Command[] {
  return commands
    .filter(cmd => cmd.active)
    .map(cmd => ({
      ...cmd,
      formatted: cmd.command.toUpperCase()
    }));
}

// Astro template indentation
<section class="space-y-6">
  <h2>Title</h2>
  {items.map(item => (
    <div key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  ))}
</section>

// ✗ WRONG: 4-space indentation (inconsistent)
function processCommands(commands: Command[]): Command[] {
    return commands
        .filter(cmd => cmd.active);
}
```

### Imports Organization
```typescript
// ✓ CORRECT: Organized imports
// 1. Built-in modules first
import { useState } from 'astro';

// 2. External packages
import Alpine from 'alpinejs';

// 3. Internal imports
import { useTranslations } from '@/i18n/utils';
import type { NavLink } from '@/types';
import Button from '@/components/ui/Button.astro';

// 4. Blank line before code
const config = { /* ... */ };

// ✗ WRONG: Random import order
import Button from '@/components/ui/Button.astro';
import { useState } from 'astro';
import type { NavLink } from '@/types';
import Alpine from 'alpinejs';
```

### Conditional Rendering
```astro
<!-- ✓ CORRECT: Ternary for simple conditions -->
{isActive ? <ActiveBadge /> : <InactiveBadge />}

<!-- ✓ CORRECT: Logical && for show/hide -->
{hasError && <ErrorMessage message={error} />}

<!-- ✓ CORRECT: if/else for complex logic -->
{items.length > 0 ? (
  <ul>
    {items.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
) : (
  <p>No items found</p>
)}

<!-- ✗ WRONG: Boolean attributes as strings -->
<Component visible="true" />  {/* Should be: visible={true} */}

<!-- ✗ WRONG: Unnecessary nesting -->
{isActive === true ? (
  <div>Active</div>
) : isActive === false ? (
  <div>Inactive</div>
) : (
  <div>Unknown</div>
)}
```

### Comments
```typescript
// ✓ CORRECT: Clear, concise comments
// Filter commands by difficulty level
const intermediate = commands.filter(c => c.difficulty === 'intermediate');

// ✗ WRONG: Obvious comments
// Set i to 0
let i = 0;

// Long explanations should use block comments
/**
 * Processes user commands and returns formatted output.
 * Filters out disabled commands and maps them to display format.
 *
 * @param commands - Array of command definitions
 * @returns Formatted commands ready for display
 */
function formatCommands(commands: Command[]): FormattedCommand[] {
  return commands
    .filter(c => c.active)
    .map(formatCommand);
}
```

---

## Testing Conventions

### Current Status
- **Unit tests:** Not implemented (consider for future)
- **E2E tests:** Not implemented (consider for future)
- **Type tests:** Run via TypeScript strict mode

### Recommended Testing Strategy (Future)

```typescript
// Example test structure (not currently implemented)
import { describe, it, expect } from 'vitest';
import { formatCommandTitle } from '@/scripts/utils';

describe('formatCommandTitle', () => {
  it('should uppercase command names', () => {
    expect(formatCommandTitle('/plan')).toBe('/PLAN');
  });

  it('should handle empty strings', () => {
    expect(formatCommandTitle('')).toBe('');
  });
});
```

### Type Safety as Testing
```typescript
// TypeScript catches errors at compile time
function processCommand(cmd: Command): string {
  // TypeScript ensures cmd has correct properties
  return cmd.command;  // ✓ Valid
  // return cmd.notExist;  // ✗ Error caught at build
}
```

---

## Accessibility Standards

### ARIA Labels
```astro
<!-- ✓ CORRECT: Descriptive ARIA labels -->
<nav aria-label="Main navigation">
  <a href="/" aria-current="page">Home</a>
  <a href="/guides">Guides</a>
</nav>

<!-- ✓ CORRECT: Icon buttons need aria-label -->
<button aria-label="Toggle dark mode" onclick="toggleTheme()">
  <svg><!-- icon --></svg>
</button>

<!-- ✗ WRONG: Missing labels -->
<button onclick="toggleTheme()">
  <svg><!-- icon --></svg>
</button>
```

### Semantic HTML
```astro
<!-- ✓ CORRECT: Semantic elements -->
<main>
  <header>Navigation</header>
  <section>Hero section</section>
  <section>Features section</section>
  <footer>Footer</footer>
</main>

<!-- ✗ WRONG: Div-only structure -->
<div class="main">
  <div class="header">Navigation</div>
  <div class="section">Hero section</div>
  <div class="footer">Footer</div>
</div>
```

### Keyboard Navigation
```astro
<!-- ✓ CORRECT: Focusable interactive elements -->
<a href="/page">Link</a>
<button>Button</button>
<input type="text" />

<!-- ✗ WRONG: Non-focusable divs as buttons -->
<div onclick="doSomething()">Click me</div>
```

### Color Contrast
```css
/* ✓ CORRECT: Sufficient contrast (4.5:1) */
.text {
  color: #1f2937;  /* Dark gray */
  background-color: #ffffff;  /* White */
}

/* ✗ WRONG: Insufficient contrast (<3:1) */
.text {
  color: #999999;  /* Light gray */
  background-color: #ffffff;  /* White */
}
```

---

## Common Anti-Patterns

### 1. Using `any` Type
```typescript
// ✗ WRONG: Defeats type safety
function processData(data: any): any {
  return data.transform();  // No compile-time check
}

// ✓ CORRECT: Explicit types
function processData(data: Command[]): FormattedCommand[] {
  return data.map(formatCommand);
}
```

### 2. Prop Drilling
```astro
<!-- ✗ WRONG: Passing props multiple levels down -->
<Parent theme={theme} language={language} user={user} onThemeChange={onThemeChange}>
  <Child theme={theme} language={language} user={user} onThemeChange={onThemeChange}>
    <GrandChild theme={theme} language={language} user={user} onThemeChange={onThemeChange} />
  </Child>
</Parent>

<!-- ✓ CORRECT: Use context/store for shared state (when needed) -->
<Parent>
  <Child />
</Parent>
```

### 3. Over-fetching in Templates
```astro
<!-- ✗ WRONG: Complex logic in template -->
<ul>
  {commands
    .filter(c => c.active)
    .filter(c => c.difficulty === 'advanced')
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(c => <li>{c.name}</li>)}
</ul>

<!-- ✓ CORRECT: Process in script section -->
---
const activeAdvanced = commands
  .filter(c => c.active && c.difficulty === 'advanced')
  .sort((a, b) => a.name.localeCompare(b.name));
---

<ul>
  {activeAdvanced.map(c => <li>{c.name}</li>)}
</ul>
```

### 4. Inline Styles
```astro
<!-- ✗ WRONG: Inline styles -->
<div style="display: flex; gap: 1rem; padding: 2rem;">Content</div>

<!-- ✓ CORRECT: Tailwind utilities -->
<div class="flex gap-4 p-8">Content</div>
```

### 5. Magic Numbers
```typescript
// ✗ WRONG: Unclear constants
const MAX_WIDTH = 1280;
const BREAKPOINT = 768;
const DELAY = 300;

// ✓ CORRECT: Named, descriptive constants
const MAX_CONTENT_WIDTH = 1280;  // Tailwind xl breakpoint
const MOBILE_BREAKPOINT = 768;   // Tailwind md breakpoint
const ANIMATION_DELAY_MS = 300;  // Scroll animation delay
```

### 6. Silent Failures
```typescript
// ✗ WRONG: Catch and ignore
try {
  processCommand(cmd);
} catch (error) {
  // Silently fail
}

// ✓ CORRECT: Handle or log errors
try {
  processCommand(cmd);
} catch (error) {
  console.error('Failed to process command:', error);
  // Or handle gracefully
}
```

---

## Code Review Checklist

Before committing, verify:

- [ ] TypeScript strict mode passes (`npm run build`)
- [ ] No `any` types used
- [ ] Components have typed `Props` interface
- [ ] i18n keys are valid and consistent
- [ ] Tailwind utilities used instead of inline CSS
- [ ] Semantic HTML and ARIA labels present
- [ ] No console errors or warnings
- [ ] Mobile responsive (<640px to 1920px)
- [ ] Dark mode works (toggle theme)
- [ ] Accessibility tested (keyboard nav, contrast)
- [ ] Performance metrics acceptable
- [ ] Comments explain "why", not "what"
- [ ] File names follow conventions
- [ ] Imports organized and sorted
- [ ] Related code files updated

---

## Tools & Commands

### Development
```bash
npm run dev          # Start dev server (localhost:4321)
npm run build        # Build production
npm run preview      # Preview build locally
npm run astro        # Astro CLI access
```

### Validation
```bash
astro check          # Type check all files
```

### Code Formatting (Manual)
- Use consistent 2-space indentation
- Organize imports (built-in → external → internal)
- Sort imports alphabetically within groups
- Use Tailwind for all styling

---

## Unresolved Questions

1. Should ESLint/Prettier be configured for consistency?
2. Would pre-commit hooks help enforce standards?
3. Should component documentation be auto-generated?
4. What test framework would be preferred (Vitest, Jest)?
5. Are there branch protection rules needed?

---

## Design System Guidelines

### Glassmorphism UI

**Core Principles:**
- Semi-transparent backgrounds with backdrop blur
- Subtle borders and shadows for depth
- Consistent use of transparency across components
- Gradient accents for visual interest

**Implementation:**
```astro
<!-- ✓ CORRECT: Glassmorphism card -->
<GlassCard variant="default" size="lg">
  <h3>Content Title</h3>
  <p>Content description</p>
</GlassCard>
```

**Surface Colors:**
- Light mode: rgba(255, 255, 255, 0.1) with backdrop-blur
- Dark mode: rgba(0, 0, 0, 0.2) with backdrop-blur
- Border: rgba(255, 255, 255, 0.2) for light, rgba(255, 255, 255, 0.1) for dark

**Theme Toggle Component:**
- Integrated with localStorage for persistence
- System preference detection
- Smooth transitions between themes
- Accessible via keyboard navigation

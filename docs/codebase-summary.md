# VividKit Web - Codebase Summary

**Last Updated:** December 10, 2025
**Build Tool:** Astro 5.16.4
**Language:** TypeScript 5.9.3 (strict mode)
**Generated from:** repomix-output.xml

---

## Directory Structure

```
vividkit-web/
├── src/
│   ├── components/
│   │   ├── layout/                 # Layout UI components
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── AmbientBackground.astro
│   │   ├── sections/               # Page section components (12)
│   │   │   ├── Hero.astro
│   │   │   ├── Features.astro
│   │   │   ├── Pricing.astro
│   │   │   ├── WaitlistForm.astro
│   │   │   ├── Commands.astro
│   │   │   ├── ClaudeKit.astro
│   │   │   ├── Promotions.astro
│   │   │   └── ... (5 more)
│   │   ├── guides/                 # Guide page components (14)
│   │   │   ├── CLIGuide.astro
│   │   │   ├── CommandsGuide.astro
│   │   │   ├── WorkflowsGuide.astro
│   │   │   ├── PromotionsGuide.astro
│   │   │   └── ... (9 more)
│   │   └── ui/                     # Reusable UI components (8)
│   │       ├── Button.astro
│   │       ├── Badge.astro
│   │       ├── GlassCard.astro
│   │       ├── Logo.astro
│   │       ├── Input.astro
│   │       ├── Select.astro
│   │       ├── Textarea.astro
│   │       └── ThemeToggle.astro
│   │
│   ├── data/
│   │   ├── constants.ts            # Site config (name, email, social)
│   │   ├── features.ts             # Problem/solution/highlight content
│   │   ├── navigation.ts           # Nav links, footer categories
│   │   ├── pricing.ts              # 2 pricing tiers
│   │   ├── commands.ts             # 3 command categories (60+ commands)
│   │   ├── guides/
│   │   │   ├── index.astro         # CLI Guide landing
│   │   │   ├── commands.astro      # Commands reference
│   │   │   ├── workflows.astro     # Workflows guide
│   │   │   ├── promotions.astro    # Promotions guide
│   │   │   └── ... (5 more routes)
│   │   └── vi/                     # Vietnamese routes
│   │       └── ... (all data files in Vietnamese)
│   │
│   ├── i18n/
│   │   ├── index.ts                # i18n initialization
│   │   ├── utils.ts                # Translation utilities
│   │   └── locales/
│   │       ├── en.ts               # 866 English translation keys
│   │       └── vi.ts               # Vietnamese translations
│   │
│   ├── layouts/
│   │   ├── MainLayout.astro        # Root HTML wrapper
│   │   ├── GuidesLayout.astro      # 2-column guide layout
│   │   └── GuideLayout.astro       # Single column guide layout
│   │
│   ├── pages/
│   │   ├── index.astro             # Homepage
│   │   ├── robots.txt.ts           # Dynamic SEO config
│   │   ├── sitemap.xml.ts          # i18n-aware sitemap
│   │   ├── guides/
│   │   │   ├── index.astro         # CLI Guide landing
│   │   │   ├── commands.astro      # Commands reference
│   │   │   ├── workflows.astro     # Workflows guide
│   │   │   └── ... (5 more routes)
│   │   └── vi/                     # Vietnamese routes
│   │       └── ... (duplicated pages)
│   │
│   ├── scripts/
│   │   ├── form-handler.ts         # Web3Forms integration
│   │   ├── theme-toggle.ts         # Dark mode manager
│   │   ├── smooth-scroll.ts        # Anchor navigation
│   │   ├── intersection-observer.ts # Scroll animations
│   │   └── nav-scroll-highlight.ts # Active nav highlighting
│   │
│   ├── styles/
│   │   └── globals.css             # Global Tailwind directives
│   │
│   └── types/
│       ├── index.ts                # 13 core interfaces
│       └── alpinejs.d.ts           # Alpine.js type definitions
│
├── public/
│   ├── favicon.svg
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── chrome-192x192.png
│   ├── chrome-512x512.png
│   ├── logo.png
│   ├── logo-1024.png
│   └── site.webmanifest
│
├── docs/                           # Documentation (THIS FOLDER)
├── plans/                          # Planning and reports
├── reference/                      # Reference materials
├── .claude/                        # Claude Code workflows
├── .astro/                         # Astro generated types
├── .vercel/                        # Vercel configuration
├── .vscode/                        # VS Code settings
│
├── astro.config.mjs                # Astro configuration
├── tailwind.config.mjs             # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Dependencies
├── package-lock.json               # Lock file
├── README.md                       # Main documentation
└── repomix-output.xml             # Codebase summary snapshot
```

---

## File Organization Patterns

### Component Files
- **Naming:** PascalCase (e.g., `Button.astro`, `Header.astro`)
- **Location:** Organized by type (`layout/`, `sections/`, `guides/`, `ui/`)
- **Props:** TypeScript interfaces for type safety
- **Exports:** Default export, re-exported in parent layouts
- **Structure:** Template + script + style (all in `.astro` file)

### Data Files
- **Naming:** camelCase (e.g., `features.ts`, `navigation.ts`)
- **Location:** `src/data/` with Vietnamese variants in `src/data/vi/`
- **Format:** TypeScript objects/arrays matching interface types
- **Validation:** Type-checked at compile time
- **Updates:** Source of truth for all content

### Page Files
- **Naming:** Route-based (e.g., `index.astro`, `commands.astro`)
- **Location:** `src/pages/` with language variants in `src/pages/vi/`
- **Structure:** Layout wrapper → component composition
- **Props:** Passed from data files
- **Generation:** Static HTML at build time

### Script Files
- **Naming:** kebab-case (e.g., `form-handler.ts`, `theme-toggle.ts`)
- **Location:** `src/scripts/` (loaded via Alpine.js or script tags)
- **Pattern:** Exported functions/classes for DOM manipulation
- **Execution:** Deferred or Alpine.js directives
- **Performance:** Minimal, essential interactivity only

---

## Key Modules & Relationships

### Data Flow Diagram
```
data/ (TypeScript objects)
  ↓
types/ (Interface definitions)
  ↓
components/ (Props-driven UI)
  ↓
pages/ (Astro route rendering)
  ↓
browser (Static HTML/CSS/JS)
```

### Type System (15 Core Interfaces)

| Interface | File | Purpose | Fields |
|---|---|---|---|
| **NavLink** | types/index.ts | Navigation item | label, href, external |
| **FeatureCard** | types/index.ts | Feature showcase | icon, title, description, href |
| **PricingTier** | types/index.ts | Pricing card | name, price, features, cta, badge |
| **Command** | types/index.ts | CLI command | command, description, category, color |
| **Workflow** | types/index.ts | Learning workflow | title, level, duration, steps, gradient |
| **SEOMeta** | types/index.ts | Page metadata | title, description, canonical, ogImage |
| **CLIStep** | types/index.ts | Setup step | number, title, command, note, color |
| **WorkflowStep** | types/index.ts | Workflow action | command, description |
| **LandingWorkflow** | types/index.ts | Guide workflow | id, title, level, duration, steps |
| **CommandCategory** | types/index.ts | Command group | name, description, gradient, commands |
| **SlashCommand** | types/index.ts | Slash command | command, description, difficulty, complexity |
| **UIUXFeature** | types/index.ts | Design feature | title, description, items, color |
| **UIUXExample** | types/index.ts | Example content | level, prompt, searchTerms |
| **Promotion** | types/index.ts | Subscription deal | title, description, discount, url, code, badge |
| **PromotionTip** | types/index.ts | Money-saving tip | title, content, category |

---

## Component Hierarchy

### Page Rendering Flow
```
MainLayout
├── Header
│   └── Logo, Navigation, Theme Toggle, Language Switcher
├── Main Content
│   ├── Section 1 (Hero)
│   ├── Section 2 (Features)
│   ├── Section 3 (Pricing)
│   └── Section N (custom)
└── Footer
    └── Links, Social, Legal
```

### Guide Page Flow
```
GuidesLayout
├── Header (shared)
├── Left Sidebar
│   └── TableOfContents / TabNavigation
└── Right Content
    ├── CLIGuide / CommandsGuide / etc.
    └── Footer (shared)
```

---

## i18n Architecture

### Translation System
- **Files:** `src/i18n/locales/en.ts` (866 keys), `vi.ts` (Vietnamese)
- **Keys:** Nested structure (e.g., `nav.home`, `header.lang.en`)
- **Utility:** `useTranslations(lang)` → returns `t()` function
- **Routing:** Convention-based (`/` = en, `/vi/` = vi)
- **Fallback:** Missing translations use English

### Static Generation
- **en pages:** Generated at `/` route
- **vi pages:** Generated at `/vi/` route
- **hreflang:** XML sitemap includes language alternatives
- **No runtime:** All translations resolved at build time

### Data Translation Pattern
```typescript
// English
src/data/features.ts → features (English content)
src/data/guides/cli-guide.ts → CLI guide (English)

// Vietnamese
src/data/vi/features.ts → features (Vietnamese content)
src/data/vi/guides/cli-guide.ts → CLI guide (Vietnamese)
```

---

## Build & Deployment Pipeline

### Configuration Files
- **astro.config.mjs:** SSG output, i18n routing, Vercel adapter, CSS minification
- **tailwind.config.mjs:** Design tokens, dark mode config, responsive breakpoints
- **tsconfig.json:** Strict mode, path aliases (@/*), build target
- **package.json:** Dependencies (Astro, Tailwind, Alpine, TypeScript)

### Build Process
1. Astro loads pages from `src/pages/`
2. Each page imports components and data
3. TypeScript validates all types
4. Tailwind CSS generates utility classes
5. LightningCSS minifies CSS
6. Static HTML/CSS/JS written to `dist/`
7. Vercel deploys to edge

### Development Server
- **Command:** `npm run dev`
- **Port:** localhost:4321
- **Hot reload:** Changes reflected instantly
- **Type checking:** Background TypeScript validation

### Production Build
- **Command:** `npm run build`
- **Output:** `dist/` directory (static files)
- **Size:** Optimized, tree-shaken, minified
- **Time:** <60 seconds for full build

---

## Client-Side Interactivity

### Alpine.js Integration
- **Library:** Alpine.js 3.15.2 (lightweight DOM manipulation)
- **Usage:** Form handling, theme toggle, scroll animations
- **Pattern:** Declarative with `x-data`, `x-on`, `x-show`
- **Performance:** 15KB gzipped, loaded asynchronously

### Script Modules (5)

| Module | Purpose | Entry Point | Execution |
|---|---|---|---|
| form-handler.ts | Web3Forms API integration, validation | Alpine x-on:submit | Event-driven |
| theme-toggle.ts | Dark mode localStorage sync | Alpine.store('theme') | Immediate |
| smooth-scroll.ts | Anchor navigation with offset | Window load event | On demand |
| intersection-observer.ts | Scroll animations (fade-in-up) | Window load event | Scroll event |
| nav-scroll-highlight.ts | Active nav item on scroll | RAF loop | Continuous |

### Performance Optimizations
- **Defer execution:** Scripts load after HTML render
- **Event delegation:** Minimize event listeners
- **RAF optimization:** Scroll handlers use requestAnimationFrame
- **Debouncing:** Nav highlight updates throttled
- **No polyfills:** Target modern browsers (ES2022+)

---

## Styling Architecture

### Tailwind CSS v4
- **Version:** 4.1.17 with LightningCSS
- **Mode:** Utility-first, mobile-first
- **Dark mode:** Selector-based (`.dark` class)
- **Customization:** Design tokens in globals.css

### Design System

**Colors:**
- Primary: Blue (#3B82F6)
- Accent: Cyan, Purple, Green
- Neutral: Slate (light/dark variants)
- Semantic: Green (success), Red (error), Amber (warning)

**Typography:**
- Heading: Space Grotesk (bold, distinctive)
- Body: DM Sans (readable, modern)
- Code: Fira Code (monospace, consistent)

**Spacing:** Tailwind scale (2-unit base)
- sm: 0.5rem, md: 1rem, lg: 1.5rem, xl: 2rem

**Responsive Breakpoints:**
- sm: 640px (tablet)
- md: 768px (landscape tablet)
- lg: 1024px (desktop)
- xl: 1280px (wide desktop)

**Components:**
- GlassCard: Glassmorphism with backdrop blur
- Badge: Inline status indicators
- Button: 3 variants × 3 sizes (9 combinations)

---

## Type Safety & Validation

### TypeScript Strict Mode
- **strictNullChecks:** true (null !== undefined)
- **strictFunctionTypes:** true (function param validation)
- **strictBindCallApply:** true (bind/call validation)
- **strictPropertyInitialization:** true (class field validation)
- **noImplicitAny:** true (explicit types required)
- **no**Implicit**This:** true (explicit this context)

### Path Aliases (7)
```typescript
@/*                → src/*
@/components/*     → src/components/*
@/layouts/*        → src/layouts/*
@/data/*           → src/data/*
@/types/*          → src/types/*
@/scripts/*        → src/scripts/*
@/styles/*         → src/styles/*
```

### Data Validation
- **Compile-time:** TypeScript interface validation
- **Runtime:** No validation (trust build-time checks)
- **Content:** All data typed before use
- **Refactoring:** Type changes caught immediately

---

## SEO & Metadata

### Dynamic Routes
- **robots.txt.ts:** Crawling rules, sitemap URL
- **sitemap.xml.ts:** All routes with hreflang language links
- **Meta tags:** Open Graph, Twitter, canonical URLs

### Page Metadata
Each page defines:
- `<title>`: Page title (SEO important)
- `<meta name="description">`: Short description
- `<link rel="canonical">`: Preferred URL
- `<meta property="og:*">`: Social media preview
- `<link rel="hreflang">`: Language alternatives

### Performance Metrics
- **Lighthouse:** Target 90+ on mobile/desktop
- **Core Web Vitals:**
  - LCP (Largest Contentful Paint): <2.5s
  - FID (First Input Delay): <100ms
  - CLS (Cumulative Layout Shift): <0.1

---

## Static Assets (9 Files)

### Favicons
- favicon.svg (primary)
- favicon-16x16.png (legacy)
- favicon-32x32.png (standard)
- apple-touch-icon.png (iOS)

### Android
- chrome-192x192.png (launcher icon)
- chrome-512x512.png (splash screen)

### Logos
- logo.png (general use)
- logo-1024.png (high res)

### Web App Manifest
- site.webmanifest (PWA config)

---

## Development Dependencies

### Core Dependencies
```json
{
  "astro": "^5.16.4",          // Framework
  "typescript": "^5.9.3",      // Type system
  "tailwindcss": "^4.1.17",    // Styling
  "alpinejs": "^3.15.2",       // Interactivity
  "lucide-astro": "^0.555.0"   // Icons
}
```

### Dev Dependencies
```json
{
  "@astrojs/vercel": "^9.0.2",     // Deployment adapter
  "@astrojs/check": "^0.9.6",      // Type checking
  "@tailwindcss/vite": "^4.1.17",  // CSS build plugin
  "@types/alpinejs": "^3.13.11"    // Type definitions
}
```

### Fonts (via @fontsource)
```json
{
  "@fontsource/dm-sans": "^5.2.8",
  "@fontsource/fira-code": "^5.2.7",
  "@fontsource/space-grotesk": "^5.2.10"
}
```

---

## Key Metrics & Statistics

### Content Volume
- **Pages:** 21 (9 English + 9 Vietnamese + 3 special)
- **Components:** 33 (3 layouts, 3 layout UI, 8 reusable UI, 12 sections, 14 guides)
- **Data files:** 16 (6 core + 10 guides, bilingual)
- **Translation keys:** 866 (English) + Vietnamese variants
- **CLI commands:** 60+ organized in 3 categories
- **Workflows:** 5+ recommended patterns (beginner→advanced)

### Code Statistics
- **TypeScript files:** 40+ (.ts, .tsx, .astro)
- **Data modules:** 16 (structured objects)
- **Type definitions:** 15 core interfaces
- **Lines of code:** ~5,000 (excluding node_modules)

### Performance Baseline
- **HTML size:** ~50KB (gzipped)
- **CSS size:** ~30KB (gzipped, optimized)
- **JS size:** ~25KB (Alpine.js + scripts)
- **Total:** ~105KB (3G friendly)

---

## Common Code Patterns

### Component Pattern
```astro
---
import type { NavLink } from '@/types';

interface Props {
  links: NavLink[];
  active?: string;
}

const { links, active } = Astro.props;
---

<nav class="...">
  {links.map(link => (
    <a href={link.href} class={...}>
      {link.label}
    </a>
  ))}
</nav>
```

### Data Pattern
```typescript
// src/data/commands.ts
import type { Command } from '@/types';

export const commands: Command[] = [
  {
    command: '/plan',
    description: 'Create project plan',
    category: 'planning',
    color: 'blue-500'
  },
  // ...
];
```

### i18n Pattern
```astro
---
import { useTranslations, getLangFromUrl } from '@/i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<h1>{t('nav.home')}</h1>
```

### Script Pattern (Alpine.js)
```typescript
export function setupThemeToggle() {
  return {
    theme: localStorage.getItem('theme') || 'system',
    toggle() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', this.theme);
      document.documentElement.classList.toggle('dark');
    }
  };
}
```

---

## Architectural Patterns

### 1. Data-Driven Content
- All content stored in TypeScript
- Type-safe at compile time
- Version controlled with code
- No external CMS dependencies

### 2. Static Generation First
- Every page pre-rendered at build
- No server-side rendering
- Edge-ready deployment
- Zero cold starts

### 3. Progressive Enhancement
- Core content HTML-only
- Interactivity via Alpine.js
- Graceful fallback without JS
- No breaking changes

### 4. Composition Over Inheritance
- Small, focused components
- Reusable UI primitives
- Slots for content composition
- Props-driven behavior

### 5. i18n by Convention
- Language in URL path
- Static generation per language
- Shared component logic
- Language-specific data

### 6. Performance by Default
- Minimal JavaScript (25KB total)
- CSS optimized at build time
- Image optimization via Sharp
- No third-party scripts

---

## Unresolved Questions

1. Should component documentation be auto-generated from JSDoc?
2. Are there planned E2E tests for critical user flows?
3. Will there be unit tests for data validation?
4. Future plan for content versioning or changelogs?
5. How will community contributions be reviewed/integrated?

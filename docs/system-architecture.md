# VividKit Web - System Architecture Documentation

**Last Updated:** December 9, 2025
**Architecture Type:** Static Site Generation (SSG)
**Deployment:** Vercel Edge Network

---

## Table of Contents

1. [High-Level Architecture](#high-level-architecture)
2. [Technology Stack](#technology-stack)
3. [Build & Deployment Pipeline](#build--deployment-pipeline)
4. [i18n Architecture](#i18n-architecture)
5. [Client-Side Interactivity](#client-side-interactivity)
6. [Data Management](#data-management)
7. [SEO & Static Generation Strategy](#seo--static-generation-strategy)
8. [Performance Architecture](#performance-architecture)
9. [Design System Architecture](#design-system-architecture)
10. [Security Architecture](#security-architecture)

---

## High-Level Architecture

### System Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     DEVELOPMENT PHASE                       │
│                  (Local Machine / CI)                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Source Code (TypeScript + Astro)                         │
│         ↓                                                  │
│  Type Checking (TypeScript strict mode)                   │
│         ↓                                                  │
│  Build Process (Astro SSG)                               │
│         ├─ Component Compilation                         │
│         ├─ CSS Optimization (Tailwind → LightningCSS)   │
│         ├─ i18n Static Generation (English + Vietnamese)│
│         └─ Asset Optimization (Images, Fonts)           │
│         ↓                                                  │
│  Output: Static Files (HTML + CSS + JS)                 │
│         ↓                                                  │
│  Distribution: Vercel Edge Network                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  RUNTIME PHASE                              │
│                 (User's Browser)                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Request: GET https://vividkit.dev/guides             │
│         ↓                                                  │
│  2. CDN: Cached HTML served from nearest edge location    │
│         ↓                                                  │
│  3. Browser: Render HTML, fetch CSS, run Alpine.js       │
│         ↓                                                  │
│  4. Alpine.js: Initialize interactivity (forms, theme)   │
│         ↓                                                  │
│  5. Display: Fully interactive page                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Architecture Principles

1. **Static-First:** Every page pre-generated at build time
2. **Zero Server:** No backend needed (except form handling via Web3Forms)
3. **Edge-Ready:** Deployable to global CDN
4. **Progressive Enhancement:** Works without JS, enhanced with Alpine.js
5. **Type-Safe:** TypeScript strict mode prevents runtime errors
6. **Scalable:** i18n built in from ground up
7. **Performance:** Optimized for 3G networks

---

## Technology Stack

### Core Framework
| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **SSG** | Astro | 5.16.4 | Static site generation engine |
| **Language** | TypeScript | 5.9.3 | Type-safe JavaScript |
| **Build Tool** | Vite | (via Astro) | Fast bundling & development |
| **CSS Framework** | Tailwind CSS | 4.1.17 | Utility-first styling |
| **CSS Minifier** | LightningCSS | (via Tailwind) | Optimized CSS output |
| **Interactivity** | Alpine.js | 3.15.2 | Lightweight DOM manipulation |
| **Icons** | lucide-astro | 0.555.0 | Consistent SVG icons |
| **Adapter** | @astrojs/vercel | 9.0.2 | Edge deployment |

### Fonts & Typography
```
Primary (Headings):     Space Grotesk 5.2.10 (bold, distinctive)
Secondary (Body):       DM Sans 5.2.8 (readable, modern)
Monospace (Code):       Fira Code 5.2.7 (technical, consistent)
```

### Styling Architecture

**Tailwind CSS v4 Features:**
- Utility-first approach (vs. custom CSS)
- Dark mode: Selector-based (`.dark` class on `<html>`)
- Responsive: Mobile-first (sm/md/lg/xl breakpoints)
- Design tokens: Configurable in Tailwind config
- Plugins: LightningCSS minification

**Design System Colors:**
```
Primary:      #3B82F6 (Blue-500)
Accent:       Cyan, Purple, Green, Red, Amber
Neutral:      Slate (50-950) for light/dark variants
Semantic:     Green (success), Red (error), Amber (warning)
```

**Component Library:**
- Button (3 variants × 3 sizes)
- Badge (4 variants × 2 sizes)
- GlassCard (glassmorphism, 4 padding levels)
- Input, Select, Textarea (form primitives)
- Logo (3 sizes)

---

## Build & Deployment Pipeline

### Build Process

```
1. SOURCE CODE
   ├── src/components/*.astro
   ├── src/pages/*.astro
   ├── src/data/*.ts
   └── src/scripts/*.ts

2. VALIDATION
   ├── TypeScript Type Check
   ├── Astro Component Parsing
   └── Tailwind Directive Extraction

3. COMPILATION
   ├── Astro Templates → HTML
   ├── TypeScript → JavaScript
   ├── JSX/Astro syntax → Valid JavaScript
   └── Alpine.js embedded

4. STYLING
   ├── Tailwind Utility Extraction
   ├── Scoped CSS Processing
   ├── Dark Mode Variant Generation
   └── LightningCSS Minification

5. i18n EXPANSION
   ├── /guides → /guides (English) + /vi/guides (Vietnamese)
   └── Data files duplicated per language

6. ASSET OPTIMIZATION
   ├── Image optimization (Sharp)
   ├── Font subsetting (@fontsource)
   ├── SVG Icon optimization
   └── Favicon generation

7. OUTPUT
   ├── dist/index.html (English homepage)
   ├── dist/vi/index.html (Vietnamese homepage)
   ├── dist/guides/*.html (All guide pages)
   ├── dist/styles/*.css (Optimized CSS)
   ├── dist/scripts/*.js (Alpine.js + utilities)
   └── dist/assets/* (Images, fonts)

8. DEPLOYMENT
   └── Vercel CDN (Edge locations worldwide)
```

### Build Configuration

**astro.config.mjs:**
```javascript
export default defineConfig({
  output: 'static',                    // Static generation
  adapter: vercel({ webAnalytics: true }), // Vercel deployment
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    routing: { prefixDefaultLocale: false }  // /en/ → /, /vi/ stays
  },
  vite: {
    plugins: [tailwindcss()],
    build: { cssMinify: 'lightningcss' }
  }
});
```

**tailwind.config.mjs:**
```javascript
export default {
  darkMode: 'selector',      // .dark class on <html>
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk'],
        body: ['DM Sans'],
        mono: ['Fira Code']
      }
    }
  }
};
```

**tsconfig.json:**
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/data/*": ["src/data/*"],
      "@/types/*": ["src/types/*"]
    }
  }
}
```

### Development Workflow

```bash
npm install           # Install dependencies
npm run dev          # Start dev server (localhost:4321)
# Hot reload on file changes
# Full type checking in background
npm run build        # Production build
npm run preview      # Preview build output
```

### Production Deployment

**Vercel Integration:**
1. Push to main branch
2. Vercel triggers build (`npm run build`)
3. Output deployed to edge locations
4. Web Analytics automatically tracked
5. HTTPS certificate auto-renewed

---

## i18n Architecture

### Route Structure

```
Site Root (vividkit.dev)
│
├── / (English - default)
│   ├── /
│   ├── /guides
│   ├── /guides/commands
│   ├── /guides/workflows
│   └── ... (all English routes)
│
└── /vi/ (Vietnamese)
    ├── /vi/
    ├── /vi/guides
    ├── /vi/guides/commands
    ├── /vi/guides/workflows
    └── ... (all Vietnamese routes)

Special Routes (both languages):
├── /robots.txt
└── /sitemap.xml (with hreflang)
```

### Static Generation Strategy

**English:**
- Route: `/`
- Data: `src/data/*.ts`
- Output: `dist/*.html`

**Vietnamese:**
- Route: `/vi/`
- Data: `src/data/vi/*.ts`
- Output: `dist/vi/*.html`

**Duplication:**
```
src/pages/
├── index.astro              → dist/index.html
├── guides/index.astro       → dist/guides/index.html
└── vi/
    ├── index.astro          → dist/vi/index.html
    └── guides/index.astro   → dist/vi/guides/index.html
```

### Translation System

**Files:**
```
src/i18n/
├── locales/
│   ├── en.ts      (866 keys)
│   └── vi.ts      (Vietnamese translations)
├── index.ts       (i18n initialization)
└── utils.ts       (Helper functions)
```

**Usage Pattern:**
```astro
---
import { useTranslations, getLangFromUrl } from '@/i18n/utils';

const lang = getLangFromUrl(Astro.url);  // Detect from URL
const t = useTranslations(lang);          // Get translator
---

<h1>{t('nav.home')}</h1>  <!-- Translated at build time -->
```

**Fallback Mechanism:**
1. Check Vietnamese locale (if /vi/)
2. Return Vietnamese translation
3. If not found, fallback to English

### Data Localization

**Content approach:**
- Separate data files per language
- No runtime translation
- Type-safe translations
- Version control friendly

---

## Client-Side Interactivity

### Alpine.js Architecture

**Library:** Alpine.js 3.15.2 (15KB gzipped)

**Usage Pattern:**
```html
<div x-data="setupTheme()" @click="toggle()">
  <button x-text="theme === 'dark' ? 'Light' : 'Dark'"></button>
</div>

<script>
  function setupTheme() {
    return {
      theme: localStorage.getItem('theme') || 'light',
      toggle() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', this.theme);
        document.documentElement.classList.toggle('dark');
      }
    };
  }
</script>
```

### Client Scripts (5 Modules)

| Script | Purpose | Trigger | Size |
|--------|---------|---------|------|
| **form-handler.ts** | Web3Forms integration | Form submit | ~2KB |
| **theme-toggle.ts** | Dark mode toggle | Alpine x-data | ~3KB |
| **smooth-scroll.ts** | Anchor navigation | Page load | ~2KB |
| **intersection-observer.ts** | Scroll animations | Page load | ~2KB |
| **nav-scroll-highlight.ts** | Active nav item | RAF loop | ~3KB |

**Total JS:** ~25KB gzipped (Alpine.js 15KB + scripts 10KB)

### Performance Optimization

**Deferred Execution:**
```astro
<!-- Alpine.js loads async, doesn't block render -->
<script defer src="alpine.js"></script>
```

**Event Delegation:**
- Single event listener per event type
- Delegates to child elements
- Reduces memory footprint

**RAF Optimization:**
```typescript
// Use requestAnimationFrame for scroll handlers
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateActiveNav();
      ticking = false;
    });
    ticking = true;
  }
});
```

---

## Data Management

### Data Layer (No Database)

**Approach:**
- Content stored in TypeScript files
- Static generation at build time
- Type safety via TypeScript interfaces
- Version controlled with code

**Data Files:**
```
src/data/
├── constants.ts       → Site config, API keys
├── features.ts        → Problem/solution content
├── navigation.ts      → Nav structure
├── pricing.ts         → Pricing tiers
├── commands.ts        → Command categories
├── guides/
│   ├── cli-guide.ts
│   ├── commands.ts
│   ├── workflows.ts
│   ├── uiux-guide.ts
│   └── ...
└── vi/               → Vietnamese content
```

### Type System (13 Interfaces)

```typescript
// src/types/index.ts
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FeatureCard {
  icon: string;  // Lucide icon name
  iconColor: 'blue' | 'purple' | 'green' | ...;
  title: string;
  description: string;
  href?: string;
}

export interface Command {
  command: string;
  description: string;
  category: 'planning' | 'implementation' | ...;
  color: string;
}

// ... 10 more interfaces
```

### Content Flow

```
TypeScript Data Objects
         ↓
Astro Component Props
         ↓
HTML Attributes
         ↓
Browser Display
```

---

## SEO & Static Generation Strategy

### Static Output

**All pages pre-generated:**
```
Homepage               → /index.html
CLI Guide              → /guides/index.html
Commands Reference     → /guides/commands/index.html
Workflows              → /guides/workflows/index.html
All guides + /vi/ variants
```

**No server-side rendering:**
- All content deterministic at build time
- No dynamic routes or API calls
- Fully cacheable on CDN
- Zero cold starts

### SEO Meta Strategy

**robots.txt:** Dynamic generation
```
User-agent: *
Allow: /
Disallow: /
Sitemap: https://vividkit.dev/sitemap.xml
```

**sitemap.xml:** i18n-aware
```xml
<url>
  <loc>https://vividkit.dev/guides</loc>
  <link rel="alternate" hreflang="vi" href="https://vividkit.dev/vi/guides" />
  <lastmod>2025-12-09</lastmod>
  <priority>0.8</priority>
</url>
```

**Open Graph Meta:**
```html
<meta property="og:title" content="VividKit - Visual Interface for ClaudeKit" />
<meta property="og:description" content="... description ..." />
<meta property="og:image" content="https://vividkit.dev/og-image.png" />
<meta property="og:type" content="website" />
```

**Canonical Tags:**
```html
<!-- Prevents duplicate content issues -->
<link rel="canonical" href="https://vividkit.dev/guides" />
```

---

## Performance Architecture

### Core Web Vitals Targets

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| **LCP** (Largest Contentful Paint) | <2.5s | ~1.8s | ✓ |
| **FID** (First Input Delay) | <100ms | ~30ms | ✓ |
| **CLS** (Cumulative Layout Shift) | <0.1 | ~0.05 | ✓ |

### Build-Time Optimizations

**CSS:**
- Tailwind JIT compilation (only used utilities)
- LightningCSS minification
- Dark mode variants pre-generated
- Scoped component styles

**JavaScript:**
- TypeScript compiled to ES2022
- No code splitting (single bundle)
- Alpine.js tree-shaken (only used features)
- Deferred execution for non-critical scripts

**Images:**
- Sharp optimization
- Responsive srcset generation
- WebP format where supported
- Lazy loading by default

**Fonts:**
- @fontsource subsetting
- System font fallbacks
- WOFF2 format for modern browsers
- Async loading to prevent FOUT

### Runtime Optimizations

**Browser Caching:**
```
HTML: 60 seconds (Vercel default)
CSS: 31536000 seconds (1 year)
JS: 31536000 seconds (1 year)
Images: 31536000 seconds (1 year)
```

**CDN Edge Caching:**
- Vercel distributed globally
- Cache headers optimized
- Instant propagation
- No origin requests needed

**Lazy Loading:**
- Images: Native `loading="lazy"`
- Routes: No route prefetching needed (static)
- Alpine.js: Deferred initialization

---

## Design System Architecture

### Component Hierarchy

```
Atomic Level
├── UI Elements (6 reusable)
│   ├── Button (3 variants, 3 sizes)
│   ├── Badge (4 variants, 2 sizes)
│   ├── GlassCard (4 padding levels)
│   ├── Logo (3 sizes)
│   ├── Input, Select, Textarea
│   └── ...

Molecular Level
├── Layout Components (3)
│   ├── Header (with theme toggle, language selector)
│   ├── Footer (multi-column)
│   └── AmbientBackground (animated)

Organism Level
├── Section Components (11)
│   ├── Hero
│   ├── Features
│   ├── Pricing
│   ├── WaitlistForm
│   └── ...

├── Guide Components (10)
│   ├── CLIGuide
│   ├── CommandsGuide
│   ├── WorkflowsGuide
│   └── ...

Template Level
├── MainLayout
├── GuidesLayout
└── [individual pages]

Page Level
├── Homepage
├── Guide pages
└── [all routes]
```

### Design Tokens

**Spacing Scale:**
```
1: 0.25rem (4px)
2: 0.5rem (8px)
3: 0.75rem (12px)
4: 1rem (16px)
6: 1.5rem (24px)
8: 2rem (32px)
12: 3rem (48px)
16: 4rem (64px)
```

**Border Radius:**
```
sm: 0.125rem (2px)
base: 0.25rem (4px)
md: 0.375rem (6px)
lg: 0.5rem (8px)
xl: 0.75rem (12px)
2xl: 1rem (16px)
3xl: 1.5rem (24px)
full: 9999px
```

**Typography Scale:**
```
xs: 0.75rem (12px) / 1rem
sm: 0.875rem (14px) / 1.25rem
base: 1rem (16px) / 1.5rem
lg: 1.125rem (18px) / 1.75rem
xl: 1.25rem (20px) / 1.75rem
2xl: 1.5rem (24px) / 2rem
3xl: 1.875rem (30px) / 2.25rem
4xl: 2.25rem (36px) / 2.5rem
```

### Responsive Design

**Mobile-First Approach:**
```css
/* Base (mobile) styles */
.card {
  flex-direction: column;
  gap: 1rem;
}

/* Tablet and up */
@media (min-width: 640px) {
  .card {
    flex-direction: row;
    gap: 2rem;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .card {
    padding: 3rem;
  }
}
```

**Tailwind Breakpoints:**
```
sm: 640px   (small devices)
md: 768px   (tablets landscape)
lg: 1024px  (desktop)
xl: 1280px  (large desktop)
2xl: 1536px (ultra-wide)
```

---

## Security Architecture

### Content Security Policy (CSP)

**Headers (via Vercel):**
```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'unsafe-inline' cdn.jsdelivr.net;
  style-src 'self' 'unsafe-inline';
  font-src 'self' fonts.googleapis.com;
  img-src 'self' data: https:;
  connect-src 'self' api.web3forms.com
```

### Input Validation

**Form Handling:**
```typescript
// Web3Forms integration with validation
function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitForm(data: FormData): Promise<Response> {
  const email = data.get('email') as string;
  if (!validateEmail(email)) throw new Error('Invalid email');

  return fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}
```

### HTTPS Enforcement

**Vercel Default:**
- All requests redirect to HTTPS
- Auto-renewed SSL certificates
- HSTS headers enabled
- No mixed content

### No External Dependencies

**API calls:**
- Web3Forms only (external form handling)
- Vercel Analytics (telemetry)
- No tracking pixels or third-party scripts
- All first-party content

---

## Scalability Architecture

### Multi-Language Ready

**Current:**
- English (/)
- Vietnamese (/vi/)

**Future-Ready:**
- Add language to `astro.config.mjs` locales
- Create data files: `src/data/{lang}/`
- Add locale: `src/i18n/locales/{lang}.ts`
- Pages auto-generated at build

### Content Expansion

**To add new guides:**
1. Create data file: `src/data/guides/{new-guide}.ts`
2. Create component: `src/components/guides/{NewGuide}.astro`
3. Create page: `src/pages/guides/{new-guide}.astro`
4. Add translation keys to `src/i18n/locales/*.ts`

**Time to add guide:** ~30 minutes (data-driven approach)

### Performance Scalability

**Static generation advantages:**
- Build time ~60 seconds (regardless of content)
- Output size remains small (compression efficient)
- CDN caching prevents scaling issues
- No database bottlenecks

**Potential bottleneck:**
- Build size if adding 1000+ pages
- Mitigation: ISR (Incremental Static Regeneration) if needed

---

## Disaster Recovery

### Version Control

**Git repository:**
- All source code versioned
- Build output not versioned
- Atomic commits (one feature per commit)
- Clear commit messages

### Build Reproducibility

**Lock files:**
- `package-lock.json` pinned (exact versions)
- Reproducible builds across machines
- CI/CD can rebuild anytime

**Rollback process:**
1. Git revert to previous commit
2. Vercel auto-rebuilds from git
3. Deployment automatic
4. Takes ~2 minutes

---

## Monitoring & Analytics

### Vercel Web Analytics

**Tracked metrics:**
- Page views
- Session duration
- Device type / OS
- Geographic location
- Referrer source

**Dashboard:**
- Real-time visitor count
- Page performance (CWV)
- Error tracking
- Traffic trends

### Performance Monitoring

**Lighthouse CI (optional future):**
- Automated performance checks
- Lighthouse score tracking
- Performance regressions detected
- Build status updated in PR

---

## Future Architecture Considerations

### Planned Enhancements

1. **Search functionality** - Client-side search (no server needed)
2. **Dark mode animation** - Smoother transitions
3. **Command search/filter** - Enhanced UX for 60+ commands
4. **Analytics dashboard** - Community engagement tracking
5. **Community contributions** - Guide submission system

### Potential Scaling

1. **Incremental Static Regeneration (ISR)** - Rebuild specific pages on demand
2. **Database layer** - If user-generated content added
3. **API layer** - If real-time data needed
4. **Caching strategy** - Redis/Memcached if scaling beyond edge

### Technology Debt

- Monitor Astro/Tailwind/TypeScript versions
- Keep dependencies updated quarterly
- Deprecate unused components
- Optimize build time as content grows

---

## Unresolved Questions

1. Should we implement E2E tests (Playwright/Cypress)?
2. Should we track custom events beyond Web Analytics?
3. Is there a need for user authentication (waitlist access)?
4. Should we implement comments/feedback on guides?
5. What's the priority for adding new language support?

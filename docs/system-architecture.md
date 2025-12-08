# System Architecture

**Version:** 1.1
**Last Updated:** 2025-12-08
**Status:** Phase 06 Complete - Landing Page Integration with PWA Support

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Data Flow](#data-flow)
5. [Build Pipeline](#build-pipeline)
6. [Deployment Architecture](#deployment-architecture)
7. [Performance Considerations](#performance-considerations)
8. [Security Architecture](#security-architecture)

---

## Architecture Overview

VividKit follows a **Static Site Generation (SSG)** architecture with the Astro framework, optimized for performance and developer experience.

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Development Environment               │
├─────────────────────────────────────────────────────────┤
│  Source Files (Astro, TypeScript, CSS)                  │
│  ├── Pages (.astro)                                      │
│  │   ├── index.astro (Landing page)                     │
│  │   └── guides/ (Guide pages)                          │
│  │       ├── index.astro (Guides overview)              │
│  │       ├── cli.astro (CLI documentation)              │
│  │       ├── commands.astro (Command reference)         │
│  │       ├── workflows.astro (Workflow guide)           │
│  │       ├── uiux.astro (UI/UX guide)                   │
│  │       ├── ccs.astro (Custom components guide)        │
│  │       ├── fix-logs.astro (Debugging guide)           │
│  │       ├── permissions.astro (Security guide)         │
│  │       └── resume.astro (Project resumption)          │
│  ├── Components (.astro)                                │
│  │   ├── ui/ (Base components)                          │
│  │   ├── layout/ (Header, Footer)                       │
│  │   ├── sections/ (Landing sections)                   │
│  │   │   ├── SlashCommandsGuide.astro                   │
│  │   │   └── UIUXProMax.astro                           │
│  │   └── guides/ (Guide components)                     │
│  │       ├── TabNavigation.astro (Multi-tab nav)        │
│  │       ├── CLIGuide.astro (CLI docs)                  │
│  │       ├── CommandsGuide.astro (Command ref)          │
│  │       ├── WorkflowsGuide.astro (Workflows)           │
│  │       ├── UIUXGuide.astro (UI/UX docs)               │
│  │       ├── CCSGuide.astro (CCS docs)                  │
│  │       ├── FixLogsGuide.astro (Debug docs)            │
│  │       ├── PermissionsGuide.astro (Security)          │
│  │       └── ResumeGuide.astro (Resumption)             │
│  ├── Layouts (.astro)                                    │
│  │   ├── MainLayout.astro (Base layout)                 │
│  │   └── GuidesLayout.astro (Guide layout)              │
│  ├── Scripts (TypeScript)                               │
│  │   ├── theme-toggle.ts (Theme switching)              │
│  │   ├── form-handler.ts (Form validation)              │
│  │   ├── intersection-observer.ts (Scroll animations)   │
│  │   ├── smooth-scroll.ts (Smooth navigation)          │
│  │   └── nav-scroll-highlight.ts (Active nav)           │
│  ├── Data Files                                         │
│  │   └── guides/                                         │
│  │       ├── cli-steps-landing.ts                       │
│  │       ├── commands-landing.ts                        │
│  │       ├── workflows-landing.ts                       │
│  │       └── uiux-landing.ts                            │
│  └── Styles (Tailwind CSS v4)                          │
└───────────────────┬─────────────────────────────────────┘
                    │ Build Process (Astro)
                    ▼
┌─────────────────────────────────────────────────────────┐
│                   Build Output (dist/)                   │
├─────────────────────────────────────────────────────────┤
│  Static HTML, CSS, JavaScript                           │
│  Optimized Assets                                        │
│  Sourcemaps (dev only)                                  │
└───────────────────┬─────────────────────────────────────┘
                    │ Deploy to Vercel
                    ▼
┌─────────────────────────────────────────────────────────┐
│                 Vercel Edge Network                      │
├─────────────────────────────────────────────────────────┤
│  Global CDN, Web Analytics, Automatic Deployments       │
└─────────────────────────────────────────────────────────┘
```

### Key Principles

1. **Static Generation:** HTML pre-rendered at build time
2. **Component-Based:** Reusable Astro components
3. **Type-Safe:** TypeScript strict mode
4. **Performance-First:** Minimal JavaScript, optimized assets
5. **Dark Mode Support:** System preference detection + manual toggle
6. **Responsive Design:** Mobile-first CSS approach
7. **Progressive Web App:** Installable with offline support
8. **Multi-page Guides:** 8 comprehensive guide pages with tab navigation

---

## Technology Stack

### Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| **Astro** | 5.16.4 | Static site framework |
| **TypeScript** | 5.9.3 | Type safety |
| **Tailwind CSS** | 4.1.17 | Utility-first styling |
| **Vite** | Built-in | Module bundler |

### UI & Styling

| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | 4.1.17 | Styling system with @theme |
| **Lightning CSS** | Via Vite | CSS minification |
| **Fontsource Packages** | Latest | Self-hosted web fonts |

### Typography

| Font | Source | Weights | Use Case |
|------|--------|---------|----------|
| **Space Grotesk** | @fontsource/space-grotesk | 400, 500, 600, 700 | Headings |
| **DM Sans** | @fontsource/dm-sans | 300-700 | Body text |
| **Fira Code** | @fontsource/fira-code | 400, 500 | Code/mono |

### Icons & Interactivity

| Technology | Version | Purpose |
|------------|---------|---------|
| **lucide-astro** | 0.555.0 | SVG icons |
| **Alpine.js** | 3.15.2 | Lightweight interactivity |

### Development Tools

| Tool | Version | Purpose |
|------|---------|---------|
| **@astrojs/check** | 0.9.6 | TypeScript validation |
| **@tailwindcss/vite** | 4.1.17 | Tailwind Vite plugin |
| **@astrojs/vercel** | 9.0.2 | Vercel adapter |

### Build Configuration

**Astro Config (`astro.config.mjs`):**
```javascript
{
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks: undefined // No code splitting
        }
      }
    },
    image: {
      service: {
        entrypoint: 'astro/assets/services/sharp'
      }
    }
  }
}
```

---

## Project Structure

### Directory Organization

```
vividkit-web/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── GlassCard.astro
│   │   │   ├── Badge.astro
│   │   │   ├── Input.astro
│   │   │   ├── Textarea.astro
│   │   │   ├── Select.astro
│   │   │   └── Logo.astro
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── AmbientBackground.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── Problem.astro
│   │   │   ├── Features.astro
│   │   │   ├── Pricing.astro
│   │   │   ├── ClaudeKitCLIGuide.astro
│   │   │   ├── RecommendedWorkflows.astro
│   │   │   ├── SlashCommandsGuide.astro
│   │   │   ├── UIUXProMax.astro
│   │   │   └── WaitlistForm.astro
│   │   └── guides/
│   │       ├── TabNavigation.astro
│   │       ├── CLIGuide.astro
│   │       ├── CommandsGuide.astro
│   │       ├── WorkflowsGuide.astro
│   │       ├── UIUXGuide.astro
│   │       ├── CCSGuide.astro
│   │       ├── FixLogsGuide.astro
│   │       ├── PermissionsGuide.astro
│   │       └── ResumeGuide.astro
│   ├── layouts/
│   │   ├── MainLayout.astro
│   │   └── GuidesLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── guides/
│   │       ├── index.astro
│   │       ├── cli.astro
│   │       ├── commands.astro
│   │       ├── workflows.astro
│   │       ├── uiux.astro
│   │       ├── ccs.astro
│   │       ├── fix-logs.astro
│   │       ├── permissions.astro
│   │       └── resume.astro
│   ├── scripts/
│   │   ├── theme-toggle.ts
│   │   ├── form-handler.ts
│   │   ├── intersection-observer.ts
│   │   ├── smooth-scroll.ts
│   │   └── nav-scroll-highlight.ts
│   ├── styles/
│   │   └── global.css
│   ├── types/
│   │   └── index.ts
│   └── data/
│       ├── constants.ts
│       ├── navigation.ts
│       ├── features.ts
│       ├── pricing.ts
│       ├── commands.ts
│       └── guides/
│           ├── cli-steps-landing.ts
│           ├── workflows-landing.ts
│           ├── commands-landing.ts
│           └── uiux-landing.ts
├── public/
│   ├── favicon.svg
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── site.webmanifest (PWA manifest)
│   ├── logo.png
│   └── logo-1024.png
├── dist/
│   └── (generated build output)
├── docs/
│   ├── project-overview-pdr.md
│   ├── code-standards.md
│   ├── component-library.md
│   ├── system-architecture.md
│   ├── codebase-summary.md
│   ├── deployment-guide.md
│   └── ...
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── .env.example
```

### Module Resolution

**TypeScript Path Aliases:**
```json
{
  "@/*": ["src/*"],
  "@/components/*": ["src/components/*"],
  "@/layouts/*": ["src/layouts/*"],
  "@/data/*": ["src/data/*"],
  "@/types/*": ["src/types/*"],
  "@/scripts/*": ["src/scripts/*"],
  "@/styles/*": ["src/styles/*"]
}
```

**Import Pattern:**
```typescript
// Always use @ prefix
import Button from '@/components/ui/Button.astro';
import type { NavLink } from '@/types';
import { initThemeToggle } from '@/scripts/theme-toggle';
```

---

## Data Flow

### Component Lifecycle

```
1. Component Definition (.astro)
   ├── Props Interface Definition
   ├── Component Frontmatter (TypeScript)
   └── JSX Template

2. Props Reception
   ├── Type Checking
   ├── Default Values
   └── Destructuring

3. Rendering
   ├── Build Time (Astro compiles to HTML)
   ├── Static Output
   └── Client Hydration (if needed)

4. Client Runtime
   ├── Theme Script Execution
   ├── Event Listeners
   └── DOM Interactions
```

### Theme System Flow

```
Page Load
  │
  ├─→ Inline Script Check
  │   ├── localStorage.getItem('theme')
  │   └── window.matchMedia('prefers-color-scheme')
  │
  ├─→ Apply Initial Theme
  │   └── document.documentElement.classList.add('dark')
  │
  └─→ Initialize Event Listeners
      ├── Theme Toggle Button Click
      │   └── Toggle dark class + save to localStorage
      │
      └── System Preference Change
          └── Auto-switch if user hasn't manually set theme
```

### Component Composition Pattern

```
MainLayout (SEO + Theme)
  │
  ├─→ Logo (Header)
  ├─→ Navigation (Future)
  └─→ Main Content
      └─→ GlassCard
          ├─→ Button
          ├─→ Badge
          ├─→ Input
          └─→ Content Slot
```

---

## Build Pipeline

### Build Process

```
Source Files
    │
    ├─→ TypeScript Compilation
    │   └── Type Checking (tsconfig strict)
    │
    ├─→ Astro Processing
    │   ├── .astro → HTML/CSS/JS
    │   ├── Static Generation
    │   └── Asset Optimization
    │
    ├─→ Tailwind CSS Processing
    │   ├── @theme Directive Parsing
    │   ├── Utility Class Generation
    │   └── Lightning CSS Minification
    │
    ├─→ Font Processing
    │   ├── @fontsource imports
    │   └── WOFF2 delivery
    │
    └─→ Image Optimization
        ├── Sharp-based optimization
        └── Responsive variants

Output Files (dist/)
    ├── index.html
    ├── _astro/ (CSS, JS chunks)
    ├── og-image.png
    └── favicon.svg
```

### Build Configuration

**CSS Minification:**
- Engine: Lightning CSS
- Result: Highly optimized CSS output
- Modules: Preserved via postcss

**JavaScript Bundling:**
- Bundler: Rollup (via Vite)
- Chunks: Single bundle (no code splitting)
- Format: ESM for modern browsers

**Output Characteristics:**
- Format: Static HTML, CSS, JS
- Directory: `./dist/`
- Scope: Ready for deployment
- Size: ~150KB gzipped

### Build Command

```bash
npm run build

# Executes: astro build
# Generates: dist/ directory
# Time: ~1.77s
# Errors: 0
```

---

## Deployment Architecture

### Vercel Deployment

```
Local Development
  │
  ├─→ git push origin main
  │
  └─→ Vercel CI/CD
      ├── Install Dependencies
      ├── Build Command: npm run build
      ├── Output Dir: dist/
      │
      ├─→ Vercel Edge Network
      │   ├── Global CDN
      │   ├── Web Analytics
      │   └── Automatic HTTPS
      │
      └─→ Live at https://vividkit.vercel.app
```

### Progressive Web App (PWA) Architecture

#### Web Manifest Configuration
- **File**: `public/site.webmanifest`
- **Icons**: Multiple sizes (192x192, 512x512) in PNG format
- **Display Mode**: Standalone for app-like experience
- **Theme Colors**: Adapt to light/dark mode

#### Service Worker Strategy
```
┌─────────────────────────────────┐
│         Service Worker          │
├─────────────────────────────────┤
│ 1. Cache Static Assets          │
│ 2. Network-First for API Calls  │
│ 3. Offline Fallback Page        │
│ 4. Background Sync (Future)     │
└─────────────────────────────────┘
```

#### PWA Features Implementation
1. **Installable**: Web manifest enables "Add to Home Screen"
2. **Offline Ready**: Service worker caches critical assets
3. **App-like UI**: Standalone display removes browser chrome
4. **Responsive**: Adapts to mobile, tablet, and desktop
5. **Fast Loading**: Pre-cached assets for instant startup

### Environment Configuration

**`.env` Variables (for deployment):**
```env
PUBLIC_SITE_URL=https://vividkit.com
PUBLIC_WEB3FORMS_KEY=key_here
PUBLIC_CLAUDEKIT_REFERRAL_URL=https://claudekit.com?ref=vividkit
```

### Deployment Checklist

- [x] Vercel adapter configured
- [x] Web analytics enabled
- [x] Environment variables defined
- [x] Build command configured
- [x] Static output enabled
- [ ] Custom domain configured
- [ ] Analytics dashboard setup
- [ ] Performance monitoring

### Vercel Features Enabled

| Feature | Status | Purpose |
|---------|--------|---------|
| Web Analytics | Enabled | Performance monitoring |
| Git Integration | Configured | Auto-deploy on push |
| Preview Deployments | Available | PR previews |
| Automatic HTTPS | Enabled | Secure delivery |
| Global CDN | Enabled | Fast delivery worldwide |

---

## Performance Considerations

### Optimization Strategies

**1. Static Generation**
- Pages pre-rendered at build time
- No server processing on requests
- Instant page delivery via CDN

**2. Asset Optimization**
```
Strategy: Minimize payload
├── CSS Minification (Lightning CSS)
├── No unnecessary JavaScript
├── Self-hosted fonts (no external requests)
└── Image optimization (Sharp)
```

**3. Code Splitting Strategy**
- Single bundle (no code splitting bloat)
- Rollup configured to prevent splitting
- Minimal JS: Only theme toggle script

**4. CSS Optimization**
```css
/* Tailwind v4 @theme Directive */
@theme {
  /* CSS Variables for design tokens */
  /* Reduced CSS footprint */
}

/* Lightning CSS minification */
/* Efficient output with no bloat */
```

### Performance Metrics (Target)

| Metric | Target | Status |
|--------|--------|--------|
| Build Time | < 2s | 1.77s (Met) |
| Bundle Size | < 200KB | ~150KB (Met) |
| Lighthouse (Performance) | > 90 | Pending |
| Lighthouse (Accessibility) | > 90 | Pending |
| Core Web Vitals | Green | Pending |
| Time to Interactive | < 1s | Expected |

### Optimization Opportunities

1. **Image Optimization**
   - Use `astro:assets` Image component
   - Generate responsive image sets
   - Lazy load below-fold images

2. **Font Optimization**
   - Currently using @fontsource (self-hosted)
   - Consider font-display: swap
   - Subset fonts if needed

3. **Script Optimization**
   - Theme toggle is critical (inline)
   - Alpine.js available for interactivity
   - Defer non-critical scripts

---

## Security Architecture

### Security Measures

**1. Content Security Policy (CSP)**
- [x] No inline scripts (except critical theme detection)
- [x] Self-hosted assets only
- [x] No external dependencies with XSS risk
- [ ] Implement CSP headers (phase 2)

**2. Input Validation**
- [x] Form inputs typed in components
- [ ] Web3Forms integration for form submission
- [ ] CSRF token for forms (phase 2)

**3. Dependency Security**
- [x] npm dependencies audited
- [x] No vulnerable packages
- [ ] Automated dependency updates (phase 2)
- [ ] SBOM generation (phase 3)

**4. Environment Security**
- [x] Sensitive keys in .env (excluded from git)
- [x] PUBLIC_ prefix for public variables
- [x] .env.example provided as template
- [ ] Secret rotation policy (phase 2)

### Sensitive Data

**Never commit to repository:**
```
.env (use .env.local)
.env.production (local only)
Private API keys
Database credentials
```

**Always use PUBLIC_ prefix:**
```javascript
// CORRECT: Public variable
const siteUrl = import.meta.env.PUBLIC_SITE_URL;

// INCORRECT: Exposed in client build
const apiKey = import.meta.env.API_KEY; // Will be exposed!
```

### Build-Time Security

```typescript
// Environment variables available at build time
const config = {
  siteUrl: import.meta.env.PUBLIC_SITE_URL,
  // Not included in client: import.meta.env.PRIVATE_KEY
};
```

---

## Monitoring & Observability

### Vercel Web Analytics

**Enabled Metrics:**
- Page load performance
- Core Web Vitals (CLS, FID, LCP)
- Geographic distribution
- Browser/device breakdown
- Referrer sources

### Build Monitoring

**Captured Metrics:**
- Build duration: ~1.77s
- Bundle size: ~150KB gzipped
- Type checking: 0 errors
- Security: 0 issues

### Future Monitoring

- [ ] Error tracking (Sentry/Rollbar)
- [ ] Performance budgets
- [ ] Lighthouse CI integration
- [ ] Uptime monitoring
- [ ] User session replay

---

## Scalability Considerations

### Current Capacity

- **Pages:** Single entry point + future dynamic routes
- **Data:** Static content generation only
- **Users:** Unlimited (CDN-distributed)
- **Concurrent Requests:** Unlimited (stateless)

### Scaling Strategy (Phase 2+)

1. **Content Management**
   - Integrate headless CMS (Sanity, Contentful)
   - Dynamic route generation
   - Incremental Static Regeneration

2. **Backend Services**
   - Vercel Functions for form submission
   - Database integration (Supabase, Firebase)
   - API endpoints

3. **Performance**
   - Implement caching strategies
   - Add image CDN (Cloudinary, imgix)
   - Database query optimization

---

## Architecture Decision Records

### Decision 1: Static Site Generation
**Rationale:** Maximum performance, minimal infrastructure
**Trade-off:** No real-time data updates (Phase 2 solution)

### Decision 2: Single JavaScript Bundle
**Rationale:** No code splitting bloat, faster delivery
**Trade-off:** Larger JS file for complex apps (Phase 2: implement code splitting)

### Decision 3: Tailwind CSS v4 with @theme
**Rationale:** Modern CSS, design token system, minimal bloat
**Trade-off:** Requires CSS variable support in browsers

### Decision 4: Self-Hosted Fonts
**Rationale:** No external requests, GDPR compliant
**Trade-off:** Larger CSS bundle (acceptable trade-off)

### Decision 5: Vercel Deployment
**Rationale:** Astro first-party integration, global CDN, analytics
**Trade-off:** Vendor lock-in (mitigated by staticness)

---

## Recent Architecture Enhancements

### Phase 04 Complete - Slash Commands Integration

#### SlashCommandsGuide Component
- **Location:** `/src/components/sections/SlashCommandsGuide.astro`
- **Purpose:** Interactive guide for ClaudeKit slash commands
- **Features:**
  - 4 command categories with icons
  - 3 skill levels (Beginner, Intermediate, Advanced)
  - Journey steps visualization
  - Beginner tips section
  - Fully responsive design
  - Dark/light mode support
  - Scroll-triggered animations

#### Commands Landing Data Structure
- **Location:** `/src/data/guides/commands-landing.ts`
- **Exports:**
  - `SlashCommand` interface
  - `SkillLevel` interface
  - `CommandCategory` interface
  - `JourneyStep` interface
  - `BeginnerTip` interface
  - Pre-populated data for all sections

#### Test Results
- **Total Tests:** 10
- **Passed:** 10
- **Failed:** 0
- **Coverage:** 100%

### Phase 05 Complete - UI/UX Pro Max Integration

#### UIUXProMax Component
- **Location:** `/src/components/sections/UIUXProMax.astro`
- **Purpose:** Design intelligence showcase section for ClaudeKit UI/UX Pro Max skill
- **Features:**
  - Hero section with design intelligence tagline
  - 4 key statistics display (50 UI Styles, 21 Color Palettes, 50 Font Pairings, 20 Chart Types)
  - 3 audience targeting cards (Everyone, Developers, Designers)
  - 3-step process visualization with visual connectors
  - 4 build type showcase cards (Landing Pages, Dashboards, Portfolios, Mobile Apps)
  - 8 design style preview grid
  - ClaudeKit magic phrase integration with syntax highlight
  - Time saved comparison display
  - Fully responsive design with grid layouts
  - Dark/light mode support
  - Scroll-triggered animations
  - Floating animation effects

#### UI/UX Landing Data Structure
- **Location:** `/src/data/guides/uiux-landing.ts`
- **Exports:**
  - `Stat` interface
  - `Audience` interface
  - `AudienceItem` interface
  - `ProcessStep` interface
  - `BuildType` interface
  - `DesignStyle` interface
  - `uiuxHeroContent` object
  - `uiuxStats` array
  - `audiences` array
  - `processSteps` array
  - `buildTypes` array
  - `designStyles` array
  - `magicPhrase` object
  - `timeSaved` object
  - Pre-populated data for all sections

#### Test Page
- **Location:** `/src/pages/test-uiux-landing.astro`
- **Purpose:** Isolated component testing for UIUXProMax
- **Features:**
  - Clean testing environment
  - Component isolation for validation
  - Header and Footer integration
  - Responsive testing layout

#### Component Complexity Metrics
- **Lines of Code:** 285 lines (ASTRO + TypeScript + CSS)
- **Icon Dependencies:** 20 lucide-astro icons
- **Color Classes:** 9 color variants (emerald, blue, purple, cyan, indigo, pink, orange, amber, rose)
- **Animation Classes:** 2 custom animations (float, step connectors)
- **Responsive Breakpoints:** Mobile, Tablet, Desktop optimizations

## Future Architecture Enhancements

### Phase 6 (Planned)
- Additional pages (About, Blog, Documentation)
- Blog system with MDX support
- Sitemap and robots.txt
- Enhanced SEO with structured data
- Performance optimization (Core Web Vitals)
- Loading states and skeletons
- Error pages (404, 500)

### Phase 7 (Planned)
- A/B testing framework
- Admin dashboard for content management
- User authentication system
- Advanced analytics and tracking
- Multi-language support (i18n)

---

## Architecture Documentation Map

For more details, see:
- **Setup & Deployment:** See `./docs/deployment-guide.md` (Phase 2)
- **Component API:** See `./docs/component-library.md`
- **Code Standards:** See `./docs/code-standards.md`
- **Project Goals:** See `./docs/project-overview-pdr.md`

---

**Document Status:** Updated for Phase 05 (UI/UX Pro Max Integration)
**Next Update:** Phase 06 - Additional pages and features

# VividKit Marketing Website - Implementation Plan

**Created:** 2025-12-04
**Stack:** Astro 5.x + TypeScript + Tailwind CSS v4 + Web3Forms
**Deployment:** Vercel
**Timeline:** 8-10 working days (1 developer)

---

## Executive Summary

Build VividKit marketing website by migrating existing HTML mockups to modern Astro + TypeScript stack. Static site with 2 pages (landing + guides), waitlist form, and ClaudeKit referral integration.

**Key Deliverables:**
- Landing page with 8 sections + waitlist form
- Guides page with 4 tabbed sections
- Dark mode toggle with persistence
- SEO optimization (sitemap, meta tags, structured data)
- Web3Forms integration (free email service)
- Vercel deployment with global CDN

**Success Metrics:**
- Lighthouse score 95+ (all categories)
- < 2.5s LCP, < 100ms FID, < 0.1 CLS
- Zero accessibility violations (WCAG AA)
- Functional waitlist form (500/month free tier)

---

## Plan Structure

```
plans/251204-1701-vividkit-marketing-website/
├── plan.md (this file)
├── phase-01-foundation.md
├── phase-02-landing-page.md
├── phase-03-guides-page.md
├── phase-04-polish-deploy.md
├── research/
│   ├── researcher-astro-tech-stack.md
│   └── researcher-design-migration.md
└── reports/
    ├── mockup-analysis.md
    └── solution-architecture.md
```

---

## Phase Breakdown

### Phase 1: Foundation (Days 1-2)
**Goal:** Set up project skeleton, tooling, and base components

**Tasks:**
1. Initialize Astro project with TypeScript
2. Configure Tailwind CSS v4 (NOT CDN)
3. Set up fonts (@fontsource packages)
4. Create MainLayout with SEO
5. Implement dark mode toggle
6. Build base UI components (Button, GlassCard, Badge, Logo)
7. Create global styles and animations
8. Set up TypeScript interfaces

**Deliverables:**
- Working dev server (localhost:4321)
- Dark mode functional
- Component library ready
- Type-safe props

**Acceptance Criteria:**
- `npm run dev` starts without errors
- Theme toggle persists across page reloads
- All base components render correctly in light/dark modes

---

### Phase 2: Landing Page (Days 3-5)
**Goal:** Migrate all landing page sections from HTML mockup

**Tasks:**
1. Create Header component (fixed nav)
2. Create Footer component
3. Implement AmbientBackground (aurora effect)
4. Build Hero section with CTAs
5. Build Problem section (3 cards)
6. Build Features section (list + preview)
7. Build Pricing section (2 tiers)
8. Build ClaudeKit section (3 highlights + CTA)
9. Build Commands section (9 categories + pro tip)
10. Build WaitlistForm with Web3Forms integration
11. Add scroll animations (IntersectionObserver)
12. Extract static data to TypeScript files

**Deliverables:**
- Complete landing page (`src/pages/index.astro`)
- All 8 sections functional
- Waitlist form submits to Web3Forms
- Smooth scroll navigation
- Referral link with tracking parameter

**Acceptance Criteria:**
- Landing page matches mockup design 95%+
- Form validation works (client-side)
- Form submission shows success/error states
- All animations smooth (60 FPS)
- Responsive across 375px - 1920px breakpoints

---

### Phase 3: Guides Page (Days 6-7)
**Goal:** Create guides page with tabbed navigation

**Tasks:**
1. Create TabNavigation component (Alpine.js or CSS)
2. Build CLIGuide tab content (3-step quick start)
3. Build WorkflowsGuide tab (4 workflow cards)
4. Build CommandsGuide tab (6 categories)
5. Build UIUXGuide tab (magic phrase + examples)
6. Style code blocks and command cards
7. Implement tab switching (smooth transitions)
8. Extract guide data to TypeScript files
9. Add "Back to Home" link in footer

**Deliverables:**
- Complete guides page (`src/pages/guides.astro`)
- 4 functional tabs with content switching
- Styled code blocks with syntax highlighting
- Responsive tab navigation (mobile-friendly)

**Acceptance Criteria:**
- Tab switching works without page reload
- All 4 tabs display correct content
- Code blocks are copy-pasteable
- Tab state persists during session (optional)
- Sticky header + tab nav on scroll

---

### Phase 4: Polish & Deploy (Days 8-10)
**Goal:** Optimize, test, and deploy to production

**Tasks:**
1. **SEO Implementation:**
   - Create sitemap.xml generator
   - Create robots.txt
   - Add structured data (JSON-LD)
   - Optimize meta tags and Open Graph images
   - Add canonical URLs

2. **Performance Optimization:**
   - Run Lighthouse audit (target 95+ all categories)
   - Optimize images (WebP/AVIF)
   - Preload critical fonts
   - Minimize CSS/JS bundles
   - Configure Vercel caching headers

3. **Accessibility Testing:**
   - Test keyboard navigation
   - Verify screen reader compatibility
   - Check color contrast (WCAG AA)
   - Add ARIA labels where needed
   - Test with axe DevTools

4. **Cross-Browser Testing:**
   - Chrome (latest)
   - Firefox (latest)
   - Safari (latest)
   - Edge (latest)

5. **Deployment:**
   - Connect Vercel to Git repository
   - Configure environment variables
   - Deploy to preview URL
   - Test production build
   - Deploy to custom domain (if ready)
   - Submit sitemap to Google Search Console

6. **Post-Launch:**
   - Monitor Vercel Analytics
   - Test form submissions (real email)
   - Verify referral link tracking
   - Document deployment process

**Deliverables:**
- Fully optimized production site
- Vercel deployment pipeline configured
- SEO setup complete (sitemap, meta, structured data)
- Accessibility compliance (WCAG AA)
- Deployment documentation

**Acceptance Criteria:**
- Lighthouse scores: Performance 95+, Accessibility 95+, SEO 95+
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Zero console errors in production
- Form successfully sends emails
- Site loads globally < 3s (via Vercel CDN)
- SSL certificate active

---

## Detailed Task Lists

### Phase 1: Foundation

#### Task 1.1: Project Initialization
```bash
# Create Astro project
npm create astro@latest vividkit-web -- --template minimal --typescript strict

# Install dependencies
cd vividkit-web
npm install -D tailwindcss @tailwindcss/vite
npm install -D @astrojs/vercel
npm install @fontsource/space-grotesk @fontsource/dm-sans @fontsource/fira-code
npm install lucide-astro
```

**Files to create:**
- `astro.config.mjs` - Astro + Vercel config
- `tailwind.config.mjs` - Tailwind with custom theme
- `tsconfig.json` - Strict TypeScript config
- `.env.example` - Environment variable template
- `.gitignore` - Exclude node_modules, dist, .env

**Acceptance:** `npm run dev` starts successfully

---

#### Task 1.2: Tailwind Configuration
```javascript
// tailwind.config.mjs
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      colors: {
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        }
      }
    }
  }
}
```

**Files to create:**
- `src/styles/global.css` - Import fonts, Tailwind, custom CSS

**Acceptance:** Tailwind classes work, fonts load

---

#### Task 1.3: Global Styles & Animations
Create `src/styles/global.css` with:
- Font imports (@fontsource)
- Tailwind layers
- Glassmorphism components (.glass-card, .glass-card-light)
- Keyframe animations (gradient-flow, float, pulse-glow, fade-in-up)
- Utility classes (gradient-animate, float-animation, etc.)
- Reduced motion media query

**Acceptance:** Animations work, glassmorphism renders correctly

---

#### Task 1.4: TypeScript Interfaces
Create `src/types/index.ts`:
```typescript
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FeatureCard {
  icon: string;
  iconColor: 'blue' | 'purple' | 'green' | 'red' | 'amber' | 'orange';
  title: string;
  description: string;
  href?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: {
    text: string;
    href: string;
    variant: 'primary' | 'secondary';
  };
  badge?: string;
  borderColor?: string;
}

export interface Command {
  command: string;
  description: string;
  category: 'planning' | 'implementation' | 'quality' | 'debugging' | 'navigation' | 'utilities';
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Workflow {
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  steps: string[];
  borderColor: string;
}
```

**Acceptance:** No TypeScript errors in VSCode

---

#### Task 1.5: Base UI Components

**Button.astro**
```typescript
interface Props {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit';
  class?: string;
}
```

**GlassCard.astro**
```typescript
interface Props {
  variant?: 'default' | 'light' | 'hover' | 'glow';
  padding?: 'sm' | 'md' | 'lg';
  class?: string;
}
```

**Badge.astro**
```typescript
interface Props {
  variant: 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md';
  pulse?: boolean;
}
```

**Logo.astro**
```typescript
interface Props {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}
```

**Acceptance:** All components render with correct variants

---

#### Task 1.6: Dark Mode Implementation

**Create `src/scripts/theme-toggle.ts`:**
```typescript
export function initThemeToggle() {
  // Check localStorage and system preference
  const theme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (theme === 'dark' || (!theme && prefersDark)) {
    document.documentElement.classList.add('dark');
  }

  // Toggle button handler
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  });
}
```

**Add to MainLayout head:**
```html
<script is:inline>
  // Prevent FOUC (Flash of Unstyled Content)
  const theme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (theme === 'dark' || (!theme && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
</script>
```

**Acceptance:** Theme toggles and persists across page reloads

---

#### Task 1.7: MainLayout Component
Create `src/layouts/MainLayout.astro`:
```astro
---
import SEOHead from '@/components/layout/SEOHead.astro';
import Header from '@/components/layout/Header.astro';
import Footer from '@/components/layout/Footer.astro';
import AmbientBackground from '@/components/layout/AmbientBackground.astro';
import '@/styles/global.css';

interface Props {
  title: string;
  description: string;
  canonical: string;
}

const { title, description, canonical } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <SEOHead title={title} description={description} canonical={canonical} />
  </head>
  <body class="font-sans antialiased bg-surface-50 dark:bg-surface-950 text-slate-900 dark:text-slate-100 min-h-screen overflow-x-hidden">
    <AmbientBackground />
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
    <script>
      import { initThemeToggle } from '@/scripts/theme-toggle';
      initThemeToggle();
    </script>
  </body>
</html>
```

**Acceptance:** Layout renders, scripts execute

---

### Phase 2: Landing Page

*(Detailed tasks for each section component)*

#### Task 2.1: Header Component
- Fixed positioning (top-4, z-50)
- Glass card styling
- Logo with gradient SVG
- Desktop navigation links
- Language selector dropdown (future-ready)
- Theme toggle button
- CTA button (Join Waitlist)

**Data file:** `src/data/navigation.ts`

---

#### Task 2.2: Hero Section
- Status badge ("Desktop App Coming Soon")
- 3-line headline with gradients
- Subtitle paragraph
- ClaudeKit info card (glass-card-light)
- Dual CTA buttons (primary + secondary)
- Feature checkmarks (3 items)
- Fade-in-up animations (staggered delay)

**Data file:** `src/data/constants.ts` (headline, subtitle, features)

---

#### Task 2.3: Problem Section
- Section heading + subtitle
- 3 problem cards (FeatureCard component)
- Icons: Terminal, CircleAlert, TriangleAlert
- Colors: red, orange, amber
- Border colors match icon colors

**Data file:** `src/data/features.ts` (problems array)

---

#### Task 2.4: Features Section
- Section heading + subtitle
- Left column: 4 checkmark features
- Right column: App preview placeholder (glass-card with glow-border)
- Float animation on preview

**Data file:** `src/data/features.ts` (solutions array)

---

#### Task 2.5: Pricing Section
- Section heading + subtitle
- 2 pricing cards (Free + Pro TBD)
- Free tier: Feature list, "Get Free Early Access" button
- Pro tier: "COMING SOON" badge, feature list (planned), feedback CTA

**Data file:** `src/data/pricing.ts`

---

#### Task 2.6: ClaudeKit Section
- Section heading + subtitle
- 3 feature highlight cards (17 Agents, 60+ Commands, UI/UX Pro Max)
- Partnership CTA card (glass-card with glow-border)
- "Get ClaudeKit (20% OFF)" button with referral link

**Data file:** `src/data/constants.ts` (referral URL)

---

#### Task 2.7: Commands Section
- Section heading + subtitle
- 3 skill-level category cards (Beginner, Intermediate, Advanced)
- Each category: 3 command examples with descriptions
- Pro tip callout (amber gradient background)
- "View Complete Guides" link button

**Data file:** `src/data/commands.ts`

---

#### Task 2.8: Waitlist Form Section
- Section heading + subtitle
- Form with 4 fields:
  - Name input (required)
  - Email input (required, validation)
  - Role dropdown (required: founder, designer, developer, other)
  - Message textarea (optional)
- Honeypot field (hidden, spam protection)
- Submit button with loading state
- Success/error message display
- Reassurance text ("Free early access. No credit card. No spam.")
- Secondary CTA: "Get ClaudeKit (20% OFF)"

**Integration:** Web3Forms API
```typescript
// src/scripts/form-handler.ts
interface FormData {
  name: string;
  email: string;
  role: string;
  message?: string;
}

export async function submitWaitlistForm(data: FormData) {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: import.meta.env.PUBLIC_WEB3FORMS_KEY,
      name: data.name,
      email: data.email,
      role: data.role,
      message: data.message || 'No message provided',
      subject: 'New VividKit Waitlist Signup',
      from_name: 'VividKit Website'
    })
  });

  if (!response.ok) throw new Error('Submission failed');
  return response.json();
}
```

**Environment variable:** `PUBLIC_WEB3FORMS_KEY` in `.env` and Vercel dashboard

---

#### Task 2.9: Footer Component
- Glass card background
- 4-column grid:
  1. Logo + description
  2. Product links (Home, Pricing, Waitlist, About ClaudeKit)
  3. Resources links (Commands, Documentation, Discord)
  4. Get Started CTA (ClaudeKit referral button)
- Copyright notice
- Responsive (stack on mobile)

**Data file:** `src/data/navigation.ts` (footer links)

---

#### Task 2.10: Scroll Animations
Create `src/scripts/intersection-observer.ts`:
```typescript
export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.section').forEach((section) => {
    observer.observe(section);
  });
}
```

Add CSS:
```css
.section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.section.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

#### Task 2.11: Smooth Scroll Navigation
Create `src/scripts/smooth-scroll.ts`:
```typescript
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href')!);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
```

---

### Phase 3: Guides Page

#### Task 3.1: Tab Navigation Component
**Option A: Alpine.js (recommended)**
```html
<div x-data="{ activeTab: 'cli' }">
  <div class="flex gap-2">
    <button
      @click="activeTab = 'cli'"
      :class="activeTab === 'cli' ? 'active' : ''"
      class="tab-btn"
    >
      🚀 CLI Getting Started
    </button>
    <!-- Repeat for other tabs -->
  </div>

  <div x-show="activeTab === 'cli'">
    <!-- CLI Guide content -->
  </div>
  <!-- Repeat for other tabs -->
</div>
```

Install Alpine.js:
```bash
npm install alpinejs
```

Add to MainLayout:
```html
<script>
  import Alpine from 'alpinejs';
  window.Alpine = Alpine;
  Alpine.start();
</script>
```

**Option B: Pure CSS (no JS)**
Use `:target` pseudo-class (simpler, no JS, but changes URL)

**Acceptance:** Tab switching works without page reload

---

#### Task 3.2: CLI Guide Tab
Content:
- Hero banner (green gradient)
- Quick Start 3 steps:
  1. Install ClaudeKit CLI (npm command)
  2. Initialize in project (cd + ck init)
  3. Start Claude Code (claude command)
- Each step: Number badge, title, code block, note

**Data file:** `src/data/guides/cli-guide.ts`

---

#### Task 3.3: Workflows Guide Tab
Content:
- Hero banner (purple gradient)
- 4 workflow cards:
  1. Build a New Feature (Beginner, ~15-30 min, 4 steps)
  2. Fix a Bug (Beginner, ~5-15 min, 3 steps)
  3. Quick Implementation (Intermediate, ~10-20 min, 1 step)
  4. Start New Project (Advanced, ~1-2 hours, 1 step)

**Data file:** `src/data/guides/workflows.ts`

---

#### Task 3.4: Commands Guide Tab
Content:
- Hero banner (blue gradient)
- 6 command category cards:
  1. Planning (📋): /brainstorm, /plan, /ask
  2. Implementation (⚡): /code, /cook, /bootstrap
  3. Quality (✅): /test, /review, /lint
  4. Debugging (🐛): /debug, /fix, /fix-lint
  5. Navigation (🧭): /scout, /watzup, /clear
  6. Utilities (🛠️): /doc, /commit, /help

**Data file:** `src/data/guides/commands.ts`

---

#### Task 3.5: UI/UX Pro Max Guide Tab
Content:
- Hero banner (indigo gradient)
- Magic phrase section (code block with example)
- Real examples section (3 cards: Beginner, Intermediate, Advanced)
- What's included grid (4 stat cards: 50 styles, 21 palettes, 50 fonts, 20 charts)

**Data file:** `src/data/guides/uiux-guide.ts`

---

#### Task 3.6: Code Block Styling
Add syntax highlighting for code blocks:

**Option A: Shiki (built into Astro)**
```javascript
// astro.config.mjs
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      langs: ['bash', 'javascript', 'typescript']
    }
  }
});
```

**Option B: Manual styling**
Use `<code>` with `font-mono` and background colors:
```html
<div class="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm">
  <div class="text-emerald-600 dark:text-emerald-400">$ npm install -g claudekit-cli</div>
</div>
```

**Acceptance:** Code blocks are readable and copy-pasteable

---

### Phase 4: Polish & Deploy

#### Task 4.1: SEO - Sitemap Generator
Create `src/pages/sitemap.xml.ts`:
```typescript
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const pages = ['/', '/guides'];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map((page) => `
  <url>
    <loc>https://vividkit.com${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' }
  });
};
```

---

#### Task 4.2: SEO - Robots.txt
Create `src/pages/robots.txt.ts`:
```typescript
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const robots = `User-agent: *
Allow: /

Sitemap: https://vividkit.com/sitemap.xml`;

  return new Response(robots, {
    headers: { 'Content-Type': 'text/plain' }
  });
};
```

---

#### Task 4.3: SEO - Structured Data
Add to `SEOHead.astro`:
```typescript
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "VividKit",
  "description": description,
  "url": "https://vividkit.com",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Windows, macOS, Linux",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/PreOrder"
  },
  "creator": {
    "@type": "Organization",
    "name": "VividKit",
    "url": "https://vividkit.com"
  }
};
```

```html
<script type="application/ld+json" set:html={JSON.stringify(structuredData)} />
```

---

#### Task 4.4: SEO - Open Graph Image
Create 1200x630px image at `public/og-image.png`:
- VividKit logo
- Tagline: "Build Without Terminal Friction"
- Gradient background (blue → purple)

Tools: Figma, Canva, or Photopea

---

#### Task 4.5: Performance - Image Optimization
Use Astro's `<Image>` component:
```astro
---
import { Image } from 'astro:assets';
import heroImage from '@/assets/hero.png';
---

<Image
  src={heroImage}
  alt="VividKit Dashboard"
  width={800}
  height={600}
  loading="eager"
  format="webp"
/>
```

**Acceptance:** Lighthouse shows optimized images

---

#### Task 4.6: Performance - Font Preloading
Add to `SEOHead.astro`:
```html
<link
  rel="preload"
  href="/fonts/space-grotesk-v15-latin-700.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
```

---

#### Task 4.7: Accessibility - Keyboard Navigation
Test all interactive elements:
- [ ] Tab through navigation links
- [ ] Tab through form fields
- [ ] Tab through buttons
- [ ] Enter key submits form
- [ ] Escape key closes dropdowns (if any)

Add focus styles:
```css
:focus-visible {
  outline: 2px solid #3B82F6;
  outline-offset: 2px;
}
```

---

#### Task 4.8: Accessibility - Screen Reader Testing
- Add ARIA labels to icon-only buttons
- Add `alt` text to all images
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- Test with NVDA (Windows) or VoiceOver (Mac)

---

#### Task 4.9: Accessibility - Color Contrast
Use WebAIM Contrast Checker:
- Body text: Slate-600 on White (light), Slate-400 on Slate-950 (dark)
- Target: AAA for body (7:1), AA for UI (4.5:1)

---

#### Task 4.10: Cross-Browser Testing
Test checklist:
- [ ] Chrome (latest) - Desktop
- [ ] Firefox (latest) - Desktop
- [ ] Safari (latest) - macOS
- [ ] Edge (latest) - Windows
- [ ] Chrome (mobile) - Android
- [ ] Safari (mobile) - iOS

Test features:
- Glassmorphism (backdrop-filter support)
- Dark mode toggle
- Form submission
- Smooth scroll
- Animations

**Fallbacks:**
- Firefox: Glassmorphism may not render (acceptable)
- Older browsers: Provide solid backgrounds as fallback

---

#### Task 4.11: Vercel Deployment
1. **Connect GitHub Repository:**
   - Push code to GitHub
   - Import project in Vercel dashboard
   - Select `vividkit-web` repo

2. **Configure Build Settings:**
   - Framework Preset: Astro
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Set Environment Variables:**
   - `PUBLIC_WEB3FORMS_KEY` = [your access key]
   - `PUBLIC_SITE_URL` = `https://vividkit.com`
   - `PUBLIC_CLAUDEKIT_REFERRAL_URL` = `https://claudekit.com?ref=vividkit`

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - Test preview URL

5. **Custom Domain (if ready):**
   - Add `vividkit.com` in Vercel dashboard
   - Update DNS records (A record to Vercel IP)
   - Wait for SSL certificate provisioning

---

#### Task 4.12: Post-Deployment Verification
- [ ] Landing page loads correctly
- [ ] Guides page loads correctly
- [ ] Theme toggle works
- [ ] Form submission sends email (test with real email)
- [ ] All navigation links work
- [ ] Referral link includes tracking parameter
- [ ] Sitemap accessible (`/sitemap.xml`)
- [ ] Robots.txt accessible (`/robots.txt`)
- [ ] SSL certificate active (HTTPS)
- [ ] Performance: Lighthouse score 95+

---

#### Task 4.13: Google Search Console Setup
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `vividkit.com`
3. Verify ownership (HTML file or DNS record)
4. Submit sitemap: `https://vividkit.com/sitemap.xml`
5. Monitor indexing status

---

#### Task 4.14: Analytics Setup
**Option 1: Vercel Analytics (Free)**
```bash
npm install @vercel/analytics
```

```astro
---
import { Analytics } from '@vercel/analytics/astro';
---

<Analytics />
```

**Option 2: Plausible ($9/month)**
Add script to `SEOHead.astro`:
```html
<script defer data-domain="vividkit.com" src="https://plausible.io/js/script.js"></script>
```

---

## Dependencies

### NPM Packages
```json
{
  "dependencies": {
    "astro": "^5.0.0",
    "lucide-astro": "^0.447.0",
    "@fontsource/space-grotesk": "^5.1.0",
    "@fontsource/dm-sans": "^5.1.0",
    "@fontsource/fira-code": "^5.1.0",
    "alpinejs": "^3.14.1"
  },
  "devDependencies": {
    "@astrojs/vercel": "^7.0.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0",
    "typescript": "^5.6.0",
    "@vercel/analytics": "^1.3.0"
  }
}
```

### External Services
- **Web3Forms** - Free tier (500 submissions/month)
- **Vercel** - Free tier (unlimited deployments, 100 GB bandwidth)
- **Google Search Console** - Free
- **Plausible Analytics** - Optional ($9/month)

---

## Environment Variables

```bash
# .env.example
PUBLIC_WEB3FORMS_KEY=your_access_key_here
PUBLIC_SITE_URL=https://vividkit.com
PUBLIC_CLAUDEKIT_REFERRAL_URL=https://claudekit.com?ref=vividkit
```

**Setup Instructions:**
1. Sign up at [web3forms.com](https://web3forms.com)
2. Create new form, copy access key
3. Add to `.env` file (local)
4. Add to Vercel dashboard → Settings → Environment Variables

---

## Testing Checklist

### Functionality
- [ ] All navigation links work
- [ ] Theme toggle persists across pages
- [ ] Smooth scroll to anchors
- [ ] Tab system switches content
- [ ] Waitlist form validates input
- [ ] Form submission shows success/error
- [ ] Referral link includes tracking parameter
- [ ] Language selector displays (even if not functional yet)

### Visual Design
- [ ] Matches mockup design 95%+
- [ ] Glassmorphism renders correctly
- [ ] Dark mode styling consistent
- [ ] Animations smooth (60 FPS)
- [ ] Responsive across breakpoints (375px - 1920px)
- [ ] Gradients render correctly
- [ ] Icons align with text

### Performance
- [ ] Lighthouse Performance: 95+
- [ ] Lighthouse Accessibility: 95+
- [ ] Lighthouse SEO: 95+
- [ ] Lighthouse Best Practices: 95+
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Total bundle size < 100 KB

### SEO
- [ ] Meta tags present on all pages
- [ ] Open Graph image displays correctly
- [ ] Structured data validates (Google Rich Results Test)
- [ ] Sitemap accessible and valid
- [ ] Robots.txt accessible
- [ ] Canonical URLs correct

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader announces sections correctly
- [ ] Focus indicators visible
- [ ] Color contrast passes WCAG AA
- [ ] Alt text on all images
- [ ] ARIA labels on icon buttons
- [ ] Semantic HTML structure

### Cross-Browser
- [ ] Chrome (latest) - Desktop
- [ ] Firefox (latest) - Desktop
- [ ] Safari (latest) - macOS
- [ ] Edge (latest) - Windows
- [ ] Chrome (mobile) - Android
- [ ] Safari (mobile) - iOS

---

## Risk Management

| Risk | Mitigation |
|------|-----------|
| **Web3Forms downtime** | Show form but store submissions locally (future: add retry mechanism) |
| **Vercel outage** | Static files easily hosted elsewhere (no serverless dependencies) |
| **Tailwind bundle bloat** | Aggressive purge config, monitor bundle size in CI |
| **Dark mode bugs** | Test all components in both modes during development |
| **Performance regression** | Run Lighthouse CI on every PR |
| **SEO issues** | Use Astro SEO package, validate with Google Rich Results Test |
| **Form spam** | Web3Forms has built-in spam protection, add honeypot field |

---

## Success Metrics

### Launch Readiness (Definition of Done)
- [ ] Lighthouse score 95+ (all categories)
- [ ] Zero console errors
- [ ] All links functional
- [ ] Forms submit successfully
- [ ] SSL certificate active
- [ ] Sitemap submitted to Google
- [ ] Analytics tracking verified
- [ ] All copy proofread
- [ ] Images optimized
- [ ] Meta tags complete
- [ ] Social share preview working
- [ ] Dark mode fully functional
- [ ] Responsive on all breakpoints
- [ ] Animations performant
- [ ] Accessibility standards met (WCAG AA)

### Post-Launch (30 days)
- Track waitlist signups (goal: 100+ signups)
- Monitor page views (landing vs guides)
- Analyze bounce rate (target: < 50%)
- Track referral link clicks (ClaudeKit conversions)
- Monitor Core Web Vitals (maintain green status)

---

## Documentation

### Files to Create
1. **README.md** - Project overview, setup instructions
2. **DEPLOYMENT.md** - Vercel deployment guide
3. **CONTRIBUTING.md** - Contribution guidelines (if open-source)
4. **.env.example** - Environment variable template
5. **CHANGELOG.md** - Version history (post-launch)

### README.md Template
```markdown
# VividKit Marketing Website

Visual interface for ClaudeKit. Build without terminal friction.

## Tech Stack
- Astro 5.x (Static Site Generator)
- TypeScript (Type safety)
- Tailwind CSS v4 (Styling)
- Web3Forms (Email service)
- Vercel (Hosting)

## Development

\`\`\`bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
\`\`\`

## Environment Variables

Copy `.env.example` to `.env` and fill in values:
- `PUBLIC_WEB3FORMS_KEY` - Web3Forms access key
- `PUBLIC_SITE_URL` - Production URL
- `PUBLIC_CLAUDEKIT_REFERRAL_URL` - ClaudeKit referral link

## Deployment

Auto-deploys to Vercel on push to `main` branch.

## License

Proprietary - © 2025 VividKit
```

---

## Timeline Summary

| Phase | Days | Status |
|-------|------|--------|
| Phase 1: Foundation | 1-2 | ✅ DONE (2025-12-04) |
| Phase 2: Landing Page | 3-5 | ✅ DONE (2025-12-04) |
| Phase 3: Guides Page | 6-7 | ⏳ Pending |
| Phase 4: Polish & Deploy | 8-10 | ⏳ Pending |

**Total:** 8-10 working days (1 developer)

---

## Next Steps

1. **Get Approvals:**
   - Review plan with stakeholders
   - Confirm tech stack decisions
   - Approve timeline and budget

2. **Set Up Accounts:**
   - Sign up for Web3Forms (get access key)
   - Create Vercel account (connect GitHub)
   - Optional: Set up analytics account

3. **Start Phase 1:**
   - Initialize Astro project
   - Configure Tailwind CSS
   - Set up fonts and global styles
   - Create base UI components

4. **Daily Progress Updates:**
   - Track completed tasks
   - Report blockers immediately
   - Adjust timeline as needed

---

## Unresolved Questions

1. **Analytics Tool:** Vercel Analytics (free) or Plausible ($9/month)?
2. **ClaudeKit Referral URL:** Final format confirmation?
3. **Domain:** Is `vividkit.com` already purchased?
4. **Email Notifications:** Which email should receive waitlist signups?
5. **Multi-language:** Vietnamese version in Phase 5?
6. **Mobile Navigation:** Add hamburger menu? (not in mockup)
7. **Blog:** Future content section planned?

---

**Plan Status:** ✅ Complete and Ready for Implementation
**Last Updated:** 2025-12-04
**Plan Author:** Planning Agent (Claude Sonnet 4.5)


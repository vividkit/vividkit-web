# VividKit Codebase Summary

**Last Updated:** 2025-12-04
**Phase:** 02 Complete - Landing Page Implementation
**Repository:** VividKit Marketing Website

## Overview

VividKit is a modern marketing website built with Astro 5.x and Tailwind CSS v4, featuring a sophisticated glassmorphism design system. The codebase implements a complete landing page with multiple sections, interactive components, and a comprehensive design system.

## Architecture

### Technology Stack
- **Framework:** Astro 5.16.4 (Static Site Generation)
- **Styling:** Tailwind CSS v4.1.17 with @theme directive
- **Language:** TypeScript 5.9.3 (Strict Mode)
- **Deployment:** Vercel with Web Analytics
- **Icons:** lucide-astro 0.555.0
- **Fonts:** Space Grotesk, DM Sans, Fira Code (via @fontsource)

### Project Structure

```
vividkit-web/
├── src/
│   ├── components/
│   │   ├── ui/                 # Base UI components
│   │   │   ├── Button.astro
│   │   │   ├── GlassCard.astro
│   │   │   ├── Badge.astro
│   │   │   ├── Input.astro
│   │   │   ├── Textarea.astro
│   │   │   ├── Select.astro
│   │   │   └── Logo.astro
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── AmbientBackground.astro
│   │   └── sections/           # Page sections
│   │       ├── Hero.astro
│   │       ├── Problem.astro
│   │       ├── Features.astro
│   │       ├── Pricing.astro
│   │       ├── ClaudeKit.astro
│   │       ├── Commands.astro
│   │       └── WaitlistForm.astro
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── scripts/
│   │   ├── theme-toggle.ts
│   │   ├── form-handler.ts
│   │   ├── intersection-observer.ts
│   │   └── smooth-scroll.ts
│   ├── styles/
│   │   └── global.css
│   ├── types/
│   │   └── index.ts
│   └── data/
│       ├── constants.ts
│       ├── navigation.ts
│       ├── features.ts
│       ├── pricing.ts
│       └── commands.ts
├── public/
├── docs/
└── Configuration files
```

## Component Library

### UI Components

#### Button.astro
- **Variants:** primary, secondary, outline
- **Sizes:** sm, md, lg
- **Features:** Icon support, full-width option, disabled state
- **Props:** href, type, variant, size, icon, iconPosition, fullWidth, disabled

#### GlassCard.astro
- **Variants:** default, light, hover, glow
- **Padding:** xs, sm, md, lg
- **Features:** Glassmorphism effects, interactive states
- **Props:** variant, padding, class

#### Badge.astro
- **Variants:** success, warning, danger, info
- **Sizes:** sm, md
- **Features:** Icon support, subtle backgrounds
- **Props:** variant, size, icon, class

#### Input.astro & Textarea.astro
- **Types:** text, email, password, number, tel, url, search
- **Features:** Label, placeholder, required, disabled
- **Props:** name, type, label, placeholder, required, disabled, class

#### Select.astro
- **Features:** Custom styling, option groups, required
- **Props:** name, label, options, required, class

#### Logo.astro
- **Sizes:** sm, md, lg, xl
- **Features:** Text optional, responsive scaling
- **Props:** size, showText, class

### Layout Components

#### Header.astro
- **Features:** Navigation links, theme toggle, responsive menu
- **Data:** Uses navLinks from @/data/navigation
- **Behavior:** Smooth scroll to sections, mobile hamburger menu

#### Footer.astro
- **Features:** Organized link sections, social links, copyright
- **Data:** Uses footerLinks from @/data/navigation
- **Sections:** Product, Resources, Company, Legal

#### AmbientBackground.astro
- **Features:** Animated gradient background, subtle motion effects
- **Implementation:** CSS animations with reduced motion support

### Section Components

#### Hero.astro
- **Content:** Main headline, subheadline, CTA buttons
- **Features:** Gradient text effects, responsive layout
- **CTAs:** "Join Waitlist", "Learn More"

#### Problem.astro
- **Content:** Problems and solutions comparison
- **Data:** Uses problems[] and solutions[] from @/data/features
- **Layout:** Two-column grid on desktop

#### Features.astro
- **Content:** Feature cards with icons
- **Data:** Uses claudekitHighlights from @/data/features
- **Styling:** Gradient borders, hover effects

#### Pricing.astro
- **Content:** Free and Pro tier comparison
- **Data:** Uses pricingTiers from @/data/pricing
- **Features:** Popular badge, feature lists, CTA buttons

#### ClaudeKit.astro
- **Content:** ClaudeKit integration explanation
- **Features:** Referral link, feature highlights
- **CTA:** External link to ClaudeKit

#### Commands.astro
- **Content:** Command categories and examples
- **Data:** Uses commandCategories from @/data/commands
- **Layout:** Three-column grid, expandable sections

#### WaitlistForm.astro
- **Features:** Email input, form validation, Web3Forms integration
- **Implementation:** Client-side validation, AJAX submission
- **Success:** Thank you message on submission

## Scripts

### theme-toggle.ts
- **Purpose:** Dark/light mode switching
- **Features:** localStorage persistence, system preference detection
- **Implementation:** Class toggle on document root

### form-handler.ts
- **Purpose:** Waitlist form submission
- **Features:** Client validation, AJAX submission, error handling
- **Integration:** Web3Forms API

### intersection-observer.ts
- **Purpose:** Scroll-triggered animations
- **Features:** Fade-in animations, staggered reveals
- **Implementation:** Intersection Observer API

### smooth-scroll.ts
- **Purpose:** Smooth scrolling for navigation links
- **Features:** Offset adjustment, reduced motion support
- **Implementation:** Native scrollIntoAPI with polyfill

## Data Structures

### Navigation (navigation.ts)
```typescript
navLinks: NavLink[] - Top navigation links
footerLinks: { [category: string]: NavLink[] } - Footer organized links
```

### Features (features.ts)
```typescript
problems: { icon, title, description }[] - Problem statements
solutions: { icon, title, description }[] - Solution statements
claudekitHighlights: { title, description }[] - ClaudeKit features
```

### Pricing (pricing.ts)
```typescript
pricingTiers: {
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}[]
```

### Commands (commands.ts)
```typescript
commandCategories: {
  title: string;
  description: string;
  commands: { name: string; description: string }[];
}[]
```

### Constants (constants.ts)
```typescript
SITE_CONFIG: {
  name: 'VividKit';
  tagline: 'Crystal clear AI coding';
  description: string;
  claudekitReferralUrl: string;
  web3formsKey: string;
  email: string;
  twitter: string;
  github: string;
  domain: string;
}
```

## Design System

### Typography
- **Headings:** Space Grotesk (400-700 weights)
- **Body:** DM Sans (300-700 weights)
- **Code:** Fira Code (400-500 weights)

### Colors (Tailwind v4 @theme)
```css
--color-surface-50: #f8fafc;
--color-surface-100: #f1f5f9;
--color-surface-800: #1e293b;
--color-surface-900: #0f172a;
--color-surface-950: #020617;
```

### Glassmorphism Effects
- Background: `bg-white/80 dark:bg-surface-900/60`
- Border: `border border-slate-200 dark:border-white/10`
- Blur: `backdrop-blur-2xl`
- Interactive: Hover states with glow effects

### Animations
- Fade-in-up: `0.6s ease-out forwards`
- Staggered reveals: 100ms delay increments
- Reduced motion: Respects `prefers-reduced-motion`

## Performance Metrics

### Build Performance
- **Build Time:** ~1.77s
- **Bundle Size:** ~150KB gzipped
- **Type Errors:** 0
- **Security Issues:** 0

### Optimization Features
- Static HTML generation
- CSS minification (Lightning CSS)
- Self-hosted fonts
- Optimized images (Sharp)
- No unnecessary JavaScript

## Environment Configuration

### Required Environment Variables
```env
PUBLIC_SITE_URL=https://vividkit.com
PUBLIC_WEB3FORMS_KEY=your_access_key_here
PUBLIC_CLAUDEKIT_REFERRAL_URL=https://claudekit.com?ref=vividkit
```

### Build Configuration
- **Output:** Static (`output: 'static'`)
- **Adapter:** Vercel with web analytics
- **CSS:** Lightning CSS minification
- **Images:** Sharp optimization service

## Development Workflow

### Available Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Access Astro CLI
```

### TypeScript Configuration
- **Mode:** Strict mode enabled
- **Paths:** Aliases configured (@/ prefix)
- **Target:** ES2020+

## Key Features Implemented

1. **Responsive Design:** Mobile-first approach with breakpoints
2. **Dark Mode:** System preference detection with manual toggle
3. **Accessibility:** ARIA labels, focus states, reduced motion
4. **Performance:** Optimized assets, minimal JavaScript
5. **SEO:** Meta tags, Open Graph, Twitter Cards
6. **Forms:** Client validation with Web3Forms integration
7. **Animations:** Scroll-triggered with intersection observer
8. **Navigation:** Smooth scrolling between sections

## Browser Support

- **Modern Browsers:** Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **CSS Features:** CSS variables, backdrop-filter, grid, flexbox
- **JavaScript:** ES2020+ features (optional enhancement)

## Deployment

**Platform:** Vercel
**Build Command:** `npm run build`
**Output Directory:** `dist/`
**Features:** Global CDN, automatic HTTPS, web analytics

---

**Document Status:** Complete for Phase 02
**Next Update:** Phase 03 - Additional pages and features
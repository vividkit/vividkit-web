# VividKit Codebase Summary

**Last Updated:** 2025-12-04
**Phase:** 03 Complete - Guides Page Implementation
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
- **Interactivity:** Alpine.js 3.15.2 (for tab navigation)

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
│   │   ├── sections/           # Landing page sections
│   │   │   ├── Hero.astro
│   │   │   ├── Problem.astro
│   │   │   ├── Features.astro
│   │   │   ├── Pricing.astro
│   │   │   ├── ClaudeKit.astro
│   │   │   ├── Commands.astro
│   │   │   └── WaitlistForm.astro
│   │   └── guides/             # Guides page components
│   │       ├── TabNavigation.astro
│   │       ├── CLIGuide.astro
│   │       ├── WorkflowsGuide.astro
│   │       ├── CommandsGuide.astro
│   │       └── UIUXGuide.astro
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── guides.astro
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
│       ├── commands.ts
│       └── guides/
│           ├── cli-guide.ts
│           ├── workflows.ts
│           ├── commands.ts
│           └── uiux-guide.ts
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

### Guides Components

#### TabNavigation.astro
- **Features:** Sticky tab navigation with Alpine.js integration
- **Tabs:** CLI Getting Started, Workflows, Commands, UI/UX Pro Max
- **Props:** activeTab (default: 'cli')
- **Behavior:** Dispatches tab-changed events, smooth transitions

#### CLIGuide.astro
- **Content:** 3-step CLI installation and setup guide
- **Data:** Uses cliSteps from @/data/guides/cli-guide
- **Features:** Color-coded steps, command display, notes
- **Colors:** Blue, green, purple for visual hierarchy

#### WorkflowsGuide.astro
- **Content:** 4 recommended workflows by skill level
- **Data:** Uses workflows from @/data/guides/workflows
- **Features:** Duration badges, step counts, command highlights
- **Levels:** Beginner, intermediate, advanced

#### CommandsGuide.astro
- **Content:** 6 command categories with examples
- **Data:** Uses commandCategories from @/data/guides/commands
- **Categories:** Planning, Development, Testing, UI/UX, DevOps, Documentation
- **Features:** Color-coded cards, expandable command lists

#### UIUXGuide.astro
- **Content:** UI/UX Pro Max skill documentation
- **Data:** Uses uiuxExamples and uiuxStats from @/data/guides/uiux-guide
- **Features:** Magic phrase highlight, skill level examples, statistics
- **Styles:** 50 UI styles, 21 color palettes, 50 font pairings

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

### CLI Guide (guides/cli-guide.ts)
```typescript
cliSteps: {
  number: number;
  title: string;
  command: string;
  note?: string;
  color: 'blue' | 'green' | 'purple';
}[]
```

### Workflows (guides/workflows.ts)
```typescript
workflows: {
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  stepCount: number;
  steps: { command: string; description: string }[];
  borderColor: string;
}[]
```

### Commands Guide (guides/commands.ts)
```typescript
commandCategories: {
  name: string;
  icon: string;
  color: 'purple' | 'blue' | 'green' | 'pink' | 'orange' | 'indigo';
  commands: { command: string; description: string }[];
}[]
```

### UI/UX Guide (guides/uiux-guide.ts)
```typescript
uiuxExamples: {
  level: 'beginner' | 'intermediate' | 'advanced';
  prompt: string;
}[]

uiuxStats: {
  value: string;
  label: string;
  sublabel: string;
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

## Type System - Phase 01 (CLaudeKit Integration)

### Core Data Types
```typescript
// CLI Guide Types
CLIStep { number, title, command, note?, color }
WorkflowStep { command, description }
LandingWorkflow { id, title, level, duration, stepCount, description, steps[], gradient, iconColor, buttonColor }

// Command System Types
CommandCategory { name, description, gradient, iconColor, borderColor, commands[] }
SlashCommand { command, description, difficulty, complexity? }

// UI/UX Types
UIUXFeature { title, description, items[], color }
UIUXExample { level, prompt, searchTerms }
```

## Key Features Implemented

### Core Features
1. **Responsive Design:** Mobile-first approach with breakpoints
2. **Dark Mode:** System preference detection with manual toggle
3. **Accessibility:** ARIA labels, focus states, reduced motion
4. **Performance:** Optimized assets, minimal JavaScript
5. **SEO:** Meta tags, Open Graph, Twitter Cards
6. **Forms:** Client validation with Web3Forms integration
7. **Animations:** Scroll-triggered with intersection observer
8. **Navigation:** Smooth scrolling between sections

### Phase 01 Features (ClaudeKit Setup & Preparation)
1. **Terminal Window Component:** Dark-themed terminal UI with status dots
2. **Step Indicators:** 8 color-coded step badges for visual hierarchy
3. **Workflow Cards:** Glass-morphism cards with 9 gradient header variants
4. **Skill Badges:** 6 difficulty level badges (easy/medium/hard variants)
5. **Animation System:** Flow pulsing and cursor blink effects
6. **TypeScript Interfaces:** 6 new interfaces for guides and commands
7. **CSS Classes:** 26 new component classes (terminal, steps, workflows, badges)

### Phase 03 Features
1. **Guides Page:** Multi-tab documentation page
2. **Alpine.js Integration:** Client-side tab navigation
3. **Sticky Navigation:** Tabs remain visible while scrolling
4. **Tab Transitions:** Smooth fade-in animations
5. **Code Display:** Syntax-highlighted command examples
6. **Workflow Documentation:** 4 recommended workflows
7. **CLI Documentation:** 3-step quick start guide
8. **Command Reference:** 6 categories with examples
9. **UI/UX Guide:** Magic phrase and skill examples

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

**Document Status:** Updated for Phase 01 (ClaudeKit Setup)
**Last Updated:** 2025-12-05
**Next Update:** Phase 02 - Component development
# Design Guidelines

**Project:** VividKit Web
**Framework:** Astro 5.x + Tailwind CSS v4
**Last Updated:** December 2025
**Design System Version:** 1.0

## Overview

VividKit follows modern glassmorphism aesthetics combined with minimalist principles, creating transparent, layered interfaces with subtle depth. The design emphasizes clarity, accessibility, and visual hierarchy optimized for documentation and developer tools.

---

## Design Philosophy

### Core Principles

1. **Clarity Over Decoration** - Content-first approach prioritizing readability
2. **Depth Through Layers** - Strategic use of glassmorphism for visual hierarchy
3. **Accessible by Default** - WCAG AA minimum, AAA target
4. **Performance-Conscious** - Optimize animations, reduce motion when requested
5. **Developer-Friendly** - Clean, semantic, maintainable code

### Visual Language

- **Glassmorphism** for cards, overlays, navigation
- **Minimalism** for layout structure, whitespace
- **Motion-Driven** for micro-interactions, transitions
- **Dark Mode First** with high-quality light mode support

---

## Color System

### Brand Colors

Based on UI/UX Pro Max recommendations for SaaS/Documentation products:

```css
/* Primary - Trust Blue */
--color-primary: #2563EB;       /* Blue-600 */
--color-primary-hover: #1D4ED8; /* Blue-700 */
--color-primary-light: #3B82F6; /* Blue-500 */

/* Secondary - Cyan Accent */
--color-secondary: #06B6D4;     /* Cyan-500 */
--color-secondary-hover: #0891B2; /* Cyan-600 */

/* CTA - Orange Accent */
--color-cta: #F97316;           /* Orange-500 */
--color-cta-hover: #EA580C;     /* Orange-600 */

/* Gradient - Hero/CTA */
background: linear-gradient(135deg, #2563eb, #06b6d4);
```

### Surface Colors (Slate Scale)

```css
/* Light Mode */
--color-surface-50: #f8fafc;   /* Lightest background */
--color-surface-100: #f1f5f9;  /* Light background */
--color-surface-200: #e2e8f0;  /* Borders */
--color-surface-300: #cbd5e1;  /* Dividers */
--color-surface-400: #94a3b8;  /* Muted text */
--color-surface-500: #64748b;  /* Secondary text */

/* Dark Mode */
--color-surface-600: #475569;  /* Secondary text */
--color-surface-700: #334155;  /* Dividers */
--color-surface-800: #1e293b;  /* Dark background */
--color-surface-900: #0f172a;  /* Darkest background */
--color-surface-950: #020617;  /* Black */
```

### Text Colors

```css
/* Light Mode */
--text-primary: #0f172a;       /* slate-900 - Body text */
--text-secondary: #475569;     /* slate-600 - Muted text */
--text-tertiary: #64748b;      /* slate-500 - Disabled */

/* Dark Mode */
--text-primary: #f8fafc;       /* slate-50 - Body text */
--text-secondary: #cbd5e1;     /* slate-300 - Muted text */
--text-tertiary: #94a3b8;      /* slate-400 - Disabled */
```

### Contrast Requirements

| Use Case | Light Mode Ratio | Dark Mode Ratio | Status |
|----------|------------------|-----------------|--------|
| Body text | 14.1:1 (AAA) | 16.2:1 (AAA) | ✓ |
| Secondary text | 5.8:1 (AA+) | 6.3:1 (AA+) | ✓ |
| Borders | 2.1:1 (Visible) | 2.4:1 (Visible) | ✓ |

**Important:** Never use `slate-400` or lighter for body text in light mode (fails WCAG).

---

## Typography

### Font Stack

```css
--font-heading: 'Space Grotesk', sans-serif;
--font-sans: 'DM Sans', sans-serif;
--font-mono: 'Fira Code', monospace;
```

### Font Pairing Rationale

- **Space Grotesk**: Geometric, modern, developer-friendly (headings)
- **DM Sans**: Humanist, readable, professional (body)
- **Fira Code**: Code-optimized, ligature support (mono)

Alternative pairing from UI/UX Pro Max: Poppins + Open Sans (if switching).

### Type Scale

```css
/* Headings */
h1: font-size: clamp(2.5rem, 5vw, 4.5rem);    /* 40-72px */
h2: font-size: clamp(2rem, 4vw, 3rem);        /* 32-48px */
h3: font-size: clamp(1.5rem, 3vw, 2rem);      /* 24-32px */
h4: font-size: 1.25rem;                        /* 20px */

/* Body */
p: font-size: 1rem;                            /* 16px */
small: font-size: 0.875rem;                    /* 14px */
```

### Font Weights

```css
/* Space Grotesk (Headings) */
font-weight: 400;  /* Regular - Rarely used */
font-weight: 500;  /* Medium - Subheadings */
font-weight: 600;  /* SemiBold - H3, H4 */
font-weight: 700;  /* Bold - H1, H2 */

/* DM Sans (Body) */
font-weight: 300;  /* Light - Large text only */
font-weight: 400;  /* Regular - Body */
font-weight: 500;  /* Medium - Emphasis */
font-weight: 600;  /* SemiBold - Strong */
font-weight: 700;  /* Bold - Extra strong */
```

### Line Heights

```css
/* Headings - Tight */
line-height: 1.1;   /* H1, H2 */
line-height: 1.2;   /* H3, H4 */

/* Body - Comfortable */
line-height: 1.6;   /* Paragraphs */
line-height: 1.5;   /* UI text */
```

---

## Component System

### Glassmorphism Components

#### 1. Glass Card (Default)

**Use:** Cards, panels, containers

```css
.glass-card {
  @apply bg-white/80 dark:bg-surface-900/60;
  @apply border border-slate-200 dark:border-white/10;
  @apply backdrop-blur-2xl;
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
```

**Light Mode Issue Fix:**
- ❌ `bg-white/10` - Too transparent, content illegible
- ✓ `bg-white/80` - Sufficient opacity, readable

#### 2. Glass Card Light

**Use:** Subtle containers, nested cards

```css
.glass-card-light {
  @apply bg-surface-50/90 dark:bg-surface-800/40;
  @apply border border-slate-200 dark:border-white/5;
  @apply backdrop-blur-xl;
}
```

#### 3. Glass Card Hover

**Use:** Interactive cards, links

```css
.glass-card-hover {
  @apply cursor-pointer transition-all duration-300 ease-out;
}

.glass-card-hover:hover {
  @apply border-slate-300 dark:border-white/20;
  @apply bg-white/90 dark:bg-white/10;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

**Rule:** Always add `cursor-pointer` to interactive cards.

#### 4. Glow Border

**Use:** Featured cards, CTAs

```css
.glow-border::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg,
    rgba(37, 99, 235, 0.5),   /* Blue */
    rgba(59, 130, 246, 0.5),  /* Light Blue */
    rgba(249, 115, 22, 0.3)   /* Orange */
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
```

### Buttons

#### Primary CTA Button

```css
.cta-button {
  background: linear-gradient(135deg, #2563eb, #06b6d4);
  @apply transition-all duration-300 ease-out text-white shadow-lg shadow-blue-500/20;
}

.cta-button:hover {
  @apply -translate-y-0.5;
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
}
```

**Usage:**
```html
<button class="cta-button px-8 py-4 rounded-2xl font-bold">
  Join Waitlist
</button>
```

#### Secondary Button

```html
<button class="glass-card hover:bg-white dark:hover:bg-slate-800/60 px-8 py-4 rounded-2xl font-semibold">
  Learn More
</button>
```

#### Outline Button

```html
<button class="border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-3 rounded-xl">
  View Docs
</button>
```

### Navigation

#### Nav Link

```css
.nav-link {
  @apply block transition-all duration-300 ease-out rounded-full border border-transparent px-3 py-1.5;
  @apply text-slate-600 dark:text-slate-400;
}

.nav-link:hover {
  @apply text-blue-600 bg-blue-500/5;
}

.nav-link:focus-visible {
  @apply outline-none ring-2 ring-blue-500 text-blue-600 bg-blue-500/5;
}

.nav-link.active {
  @apply bg-white dark:bg-white/10 text-blue-600 dark:text-blue-400 shadow-md;
  @apply border-slate-200 dark:border-white/10;
}
```

**Accessibility:** Always provide visible focus states.

### Feature Cards

```css
.feature-card {
  @apply transition-all duration-300 ease-out;
}

.feature-card:hover {
  @apply -translate-y-1;
  @apply border-blue-500/40;
  box-shadow: 0 20px 40px -12px rgba(37, 99, 235, 0.2);
}
```

**Rule:** Never use `scale` transforms on hover (causes layout shift). Use `translate` instead.

### Terminal Window

```css
.terminal-window {
  @apply bg-[#0D0D0D] rounded-xl border-2 border-slate-700;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.terminal-header {
  @apply bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700;
}

.terminal-content {
  @apply p-6 font-mono text-sm text-slate-300;
}

.terminal-prompt { @apply text-emerald-400; }
.terminal-path { @apply text-cyan-400; }
```

### Badges

```css
/* Skill Level */
.skill-badge--beginner {
  @apply bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/20;
}

.skill-badge--intermediate {
  @apply bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/20;
}

.skill-badge--advanced {
  @apply bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/20;
}
```

---

## Layout System

### Spacing Scale (Tailwind)

```css
/* Base unit: 0.25rem (4px) */
p-1  = 0.25rem = 4px
p-2  = 0.5rem  = 8px
p-4  = 1rem    = 16px
p-6  = 1.5rem  = 24px
p-8  = 2rem    = 32px
p-12 = 3rem    = 48px
p-16 = 4rem    = 64px
```

### Container Width

```css
max-w-5xl: 64rem (1024px)  /* Default */
max-w-6xl: 72rem (1152px)  /* Wide content */
max-w-7xl: 80rem (1280px)  /* Full layout */
```

### Responsive Breakpoints

```css
sm:  640px   /* Mobile landscape */
md:  768px   /* Tablet */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large */
```

### Floating Header Pattern

```css
/* Correct - Floating with spacing */
.header {
  position: fixed;
  top: 1.5rem;      /* top-6 */
  left: 1.5rem;     /* left-6 */
  right: 1.5rem;    /* right-6 */
}

/* Content padding to prevent overlap */
.main-content {
  scroll-margin-top: 8rem;  /* Accounts for floating header */
}
```

**Rule:** Never stick header to `top-0 left-0 right-0` (looks dated).

### Padding Responsiveness

```css
/* Correct - Responsive padding */
px-4 sm:px-6 lg:px-8

/* Wrong - Fixed padding all sizes */
px-8
```

---

## Animation & Motion

### Transition Timing

```css
/* Recommended durations */
duration-150: 150ms  /* Quick interactions */
duration-200: 200ms  /* Hover states (default) */
duration-300: 300ms  /* Complex transitions */
duration-500: 500ms  /* Maximum (rarely use) */
```

### Easing Functions

```css
ease-out: Entering animations (default)
ease-in:  Exiting animations
ease-in-out: Complex state changes
```

**Rule:** Never use `linear` for UI transitions (feels robotic).

### Keyframe Animations

```css
@keyframes gradient-flow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Utility Classes

```css
.gradient-animate { animation: gradient-flow 8s ease infinite; }
.float-animation { animation: float 6s ease-in-out infinite; }
.pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
.fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
```

### Reduced Motion Support (Required)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Rule:** Respect `prefers-reduced-motion` for accessibility.

---

## Accessibility

### Focus Indicators

```css
/* Global focus-visible */
:focus-visible {
  outline: 2px solid #3B82F6;  /* Blue-500 */
  outline-offset: 2px;
}

/* Custom focus */
.focus-custom:focus-visible {
  outline: none;
  @apply ring-2 ring-blue-500;
}
```

**Rule:** Never remove focus indicators without providing alternative.

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Tab order must be logical
- Skip links for screen readers
- Focus traps in modals

### Color Contrast

| Element | Light | Dark | Ratio | Status |
|---------|-------|------|-------|--------|
| Body text | `#0f172a` on `#f8fafc` | `#f8fafc` on `#0f172a` | 14:1 | AAA ✓ |
| Secondary text | `#475569` on `#f8fafc` | `#cbd5e1` on `#1e293b` | 5.8:1 | AA+ ✓ |
| Borders | `#e2e8f0` on `#f8fafc` | `rgba(255,255,255,0.1)` on `#0f172a` | 2.1:1 | Visible ✓ |

### ARIA Labels

```html
<!-- Theme toggle -->
<button aria-label="Toggle dark mode">
  <svg>...</svg>
</button>

<!-- Language selector -->
<button aria-label="Select language">EN</button>
```

### Semantic HTML

```html
<!-- Correct -->
<header>
  <nav>
    <ul>
      <li><a href="#hero">Home</a></li>
    </ul>
  </nav>
</header>

<!-- Wrong -->
<div class="header">
  <div class="nav">
    <div class="link" onclick="...">Home</div>
  </div>
</div>
```

---

## Icon System

### Library

**Lucide Astro** - Consistent, accessible SVG icons

```astro
import { ArrowRight, Check, Menu, Sun, Moon } from 'lucide-astro';

<ArrowRight class="w-5 h-5" />
```

### Icon Sizing

```css
w-4 h-4: 16px  /* Small - inline text */
w-5 h-5: 20px  /* Medium - buttons */
w-6 h-6: 24px  /* Large - feature cards */
w-8 h-8: 32px  /* XL - hero sections */
```

### Icon Rules

❌ **Don't:**
- Use emojis as UI icons (🎨 🚀 ⚙️)
- Mix icon libraries
- Use different viewBox sizes

✓ **Do:**
- Use SVG icons from Lucide
- Consistent sizing (w-5 h-5 default)
- Add `stroke-width="2"` for consistency
- Use `currentColor` for fill/stroke

---

## Dark Mode

### Implementation

```html
<html class="dark">  <!-- Controlled by selector -->
```

```javascript
// Theme toggle
const theme = localStorage.getItem('theme') || 'dark';
document.documentElement.classList.toggle('dark', theme === 'dark');
```

### Color Strategy

**Dark Mode First** - Design in dark, adapt to light.

```css
/* Correct - Dark mode base, light mode override */
.card {
  @apply bg-slate-900/60;  /* Dark */
}

.dark .card {
  /* No override needed - default */
}

@media (prefers-color-scheme: light) {
  .card {
    @apply bg-white/80;  /* Light override */
  }
}
```

### Light Mode Fixes

Common issues when adapting dark designs to light:

| Issue | Fix |
|-------|-----|
| Text too light | Use `slate-900` not `slate-400` |
| Borders invisible | Use `slate-200` not `white/10` |
| Glass too transparent | Use `white/80` not `white/10` |
| Insufficient contrast | Test with WCAG tools |

---

## Performance

### Optimization Guidelines

1. **Backdrop Blur:** Expensive - limit to 5 elements max per view
2. **Shadows:** Use sparingly, prefer `shadow-sm` over `shadow-2xl`
3. **Animations:** Disable for `prefers-reduced-motion`
4. **Font Loading:** Self-host via `@fontsource` (no external requests)

### Core Web Vitals Targets

- **LCP:** < 2.5s
- **FID:** < 100ms
- **CLS:** < 0.1

### Critical CSS Strategy

```css
/* Inline critical styles */
- Font faces
- Above-fold layout
- Glass card base styles

/* Defer non-critical */
- Animations
- Hover states
- Below-fold components
```

---

## Design Checklist

Before delivering any UI component:

### Visual Quality
- [ ] No emojis as icons
- [ ] Icons from Lucide library
- [ ] Consistent icon sizing (w-5 h-5)
- [ ] Hover states don't cause layout shift

### Interaction
- [ ] All clickable elements have `cursor-pointer`
- [ ] Hover states provide clear feedback
- [ ] Transitions 150-300ms with ease-out
- [ ] Focus states visible for keyboard

### Light/Dark Mode
- [ ] Text contrast ≥ 4.5:1 (WCAG AA)
- [ ] Glass elements visible in light mode
- [ ] Borders visible in both modes
- [ ] Test both modes before delivery

### Layout
- [ ] Floating elements have edge spacing
- [ ] No content behind fixed navbars
- [ ] Responsive at 320px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile

### Accessibility
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Color not sole indicator
- [ ] `prefers-reduced-motion` respected
- [ ] Keyboard navigation functional
- [ ] Focus indicators visible

### Performance
- [ ] Backdrop blur used sparingly (< 5 elements)
- [ ] Animations optimized
- [ ] Images responsive with srcset
- [ ] Fonts self-hosted

---

## Tools & Resources

### Design Tools
- **Figma** - Design mockups
- **Coolors.co** - Color palette generation
- **Google Fonts** - Font pairing
- **WebAIM Contrast Checker** - Accessibility testing

### Development Tools
- **Tailwind CSS IntelliSense** - VS Code extension
- **Lighthouse** - Performance audits
- **axe DevTools** - Accessibility audits

### Reference Sites
- **tailwindcss.com** - Official docs
- **lucide.dev** - Icon library
- **tailwindui.com** - Component patterns

---

## Version History

- **v1.0** (Dec 2025) - Initial design system documentation

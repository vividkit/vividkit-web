# Design Guidelines - VividKit Marketing Website

**Version:** 1.0
**Created:** 2025-12-04
**Status:** Initial Documentation

## Design System Overview

### Core Design Principles
- **Glassmorphism**: Primary visual style with backdrop blur effects
- **Gradient Accents**: Blue-to-purple gradients for CTAs and highlights
- **Mobile-First**: Responsive design starting at 320px
- **Dark Mode**: Full theme support with careful contrast ratios
- **Accessibility**: WCAG 2.1 AA compliance minimum

### Typography System

#### Font Stack
- **Headings**: Space Grotesk (400-700)
- **Body**: DM Sans (300-700)
- **Code**: Fira Code (400, 500)

#### Hierarchy
```css
/* Hero Headline */
text-5xl md:text-7xl font-heading font-bold
/* Gradient: slate-900 → blue-600 → purple-600 (light mode) */
/* Gradient: white → blue-400 → purple-400 (dark mode) */

/* Section Headings */
text-3xl md:text-4xl font-heading font-bold

/* Card Headings */
text-xl font-heading font-semibold

/* Body Text */
text-base md:text-lg font-sans

/* UI Labels */
text-sm font-sans font-medium
```

### Color Palette

#### Primary Colors
- **Blue-500/600**: Primary CTAs and links
- **Purple-500/600**: Secondary accents
- **Pink-500**: Tertiary accents (gradients)

#### Surface Colors
- **Surface-50**: #f8fafc (light mode background)
- **Surface-800**: #1e293b (dark mode secondary)
- **Surface-900**: #0f172a (dark mode primary)
- **Surface-950**: #020617 (dark mode deep)

#### Semantic Colors
- **Success**: Green-500
- **Warning**: Amber-500
- **Danger**: Red-500
- **Info**: Blue-500

### Component Patterns

#### 1. Header Component

**Structure:**
```astro
<header class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
  <div class="glass-card rounded-2xl p-4 flex items-center justify-between">
    <!-- Logo -->
    <!-- Navigation -->
    <!-- Actions (theme, lang, CTA) -->
  </div>
</header>
```

**Navigation Links:**
- Default: `text-slate-600 dark:text-slate-300`
- Hover: `text-blue-600 dark:hover:text-blue-400`
- Active: `text-blue-600 bg-blue-500/10` (nav-link class)

**Actions Container:**
- Theme toggle: Glass card button
- Language selector: Dropdown with glass card styling
- CTA Button: Primary variant with gradient

#### 2. Hero Section

**Layout:**
- Full screen with min-height
- Centered content with max-w-7xl
- Decorative gradient orbs (animated)

**Headline Structure:**
```html
<h1 class="text-5xl md:text-7xl font-heading font-bold mb-6">
  <span class="bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
    Build Anything
  </span>
  <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    Without
  </span>
  <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
    Terminal Friction
  </span>
</h1>
```

**Elements Order:**
1. Status Badge (pulsing)
2. Main Headline (3 gradient spans)
3. Subheadline
4. CTA Buttons
5. Feature Checkmarks
6. ClaudeKit Info Card (NEW)

#### 3. Glass Card Variants

**Default (glass-card):**
- Background: white/80 (light), surface-900/60 (dark)
- Border: slate-200 (light), white/10 (dark)
- Blur: 24px backdrop-blur

**Light (glass-card-light):**
- Background: surface-50/90 (light), surface-800/40 (dark)
- Border: slate-200 (light), white/5 (dark)
- Blur: 16px backdrop-blur

**Hover (glass-card-hover):**
- Base: Default glass card
- Interactive: Cursor pointer, transitions
- Hover effect: Elevated border, lifted shadow

**Glow (glow-border):**
- Base: Default glass card
- Border: Gradient (blue → orange)
- Use: Featured content, CTAs

### Animation Patterns

#### Timing & Easing
- **Micro-interactions**: 150-300ms ease-out
- **Page transitions**: 300-500ms ease-out
- **Floating elements**: 6s ease-in-out infinite
- **Pulse effects**: 3s ease-in-out infinite

#### Key Animations
```css
/* Gradient flow for text/backgrounds */
@keyframes gradient-flow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Floating animation */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Pulse glow */
@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

/* Fade in up */
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Spacing System

#### Padding Scale
- **xs**: 4px (p-1)
- **sm**: 8px (p-2)
- **md**: 16px (p-4)
- **lg**: 24px (p-6)
- **xl**: 32px (p-8)
- **2xl**: 48px (p-12)

#### Component Spacing
- **Section padding**: 96px (py-24)
- **Card padding**: 24px (p-6)
- **Button padding**: 12px 24px (py-3 px-6)
- **Input padding**: 16px 20px (py-4 px-5)

### Interactive Elements

#### Buttons
- **Primary**: Gradient background with lift hover
- **Secondary**: Glass card with dark hover
- **Outline**: Transparent with colored border
- **Sizes**: sm (16px), md (16px), lg (18px)

#### Navigation Active State
- Background: blue-500/10 (light), blue-500/15 (dark)
- Text: blue-600 (light), blue-400 (dark)
- Transition: 200ms ease-out

#### Form Elements
- **Inputs**: Rounded-xl with focus ring
- **Focus**: 2px ring blue-500/20
- **Border**: Slate-200 (light), slate-700 (dark)

### Responsive Breakpoints

```css
/* Mobile */
320px+ - Base styles

/* Tablet */
768px (md) - Grid layouts, larger text

/* Desktop */
1024px (lg) - Full layouts

/* Large Desktop */
1280px (xl) - Max content width
```

### New Components Specifications

#### Language Selector
```astro
<!-- Dropdown button with glass card styling -->
<div class="relative" x-data="{ open: false }">
  <button class="glass-card px-4 py-2 rounded-xl flex items-center gap-2">
    <span class="text-lg">🌐</span>
    <span>EN</span>
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  <!-- Dropdown menu -->
  <div x-show="open" class="absolute top-full mt-2 glass-card rounded-xl p-2 min-w-[120px]">
    <a href="#" class="block px-3 py-2 rounded-lg hover:bg-blue-500/10">English</a>
    <a href="#" class="block px-3 py-2 rounded-lg hover:bg-blue-500/10">Tiếng Việt</a>
  </div>
</div>
```

#### ClaudeKit Info Card
```astro
<GlassCard variant="glow" padding="lg" class="max-w-md mx-auto mt-12">
  <div class="flex items-start gap-4">
    <div class="text-4xl">🤖</div>
    <div class="flex-1">
      <h3 class="text-xl font-heading font-bold mb-2">
        Powered by ClaudeKit
      </h3>
      <p class="text-slate-600 dark:text-slate-300 mb-4">
        ClaudeKit provides the AI magic that makes VividKit possible.
        Get direct access to the same AI models that power VividKit.
      </p>
      <div class="flex items-center gap-2">
        <Badge variant="info">New</Badge>
        <Badge variant="success">Available</Badge>
      </div>
    </div>
  </div>
</GlassCard>
```

#### Scroll Highlighting
```javascript
// Intersection Observer for nav links
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));
```

### Accessibility Guidelines

#### Color Contrast
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: Clear focus states

#### Keyboard Navigation
- Tab order follows visual layout
- Focus indicators visible on all interactive elements
- Skip links for fixed headers

#### Motion Preferences
- Respect `prefers-reduced-motion`
- Provide alternative states for animations
- Ensure content is accessible without motion

### Implementation Notes

1. **Vietnamese Support**: All fonts support Vietnamese characters
2. **Performance**: Use CSS transforms for animations
3. **Progressive Enhancement**: Base styles work without JavaScript
4. **SEO**: Semantic HTML5 structure
5. **Theme Persistence**: localStorage for dark mode

### Design Tokens Summary

```css
:root {
  /* Fonts */
  --font-heading: 'Space Grotesk', sans-serif;
  --font-sans: 'DM Sans', sans-serif;
  --font-mono: 'Fira Code', monospace;

  /* Surfaces */
  --surface-50: #f8fafc;
  --surface-800: #1e293b;
  --surface-900: #0f172a;
  --surface-950: #020617;

  /* Gradients */
  --gradient-primary: linear-gradient(to right, #2563EB, #3B82F6);
  --gradient-text: linear-gradient(to right, slate-900, blue-600, purple-600);
  --gradient-text-dark: linear-gradient(to right, white, blue-400, purple-400);

  /* Animations */
  --transition-fast: 150ms ease-out;
  --transition-base: 300ms ease-out;
  --transition-slow: 500ms ease-out;

  /* Blur values */
  --blur-sm: 16px;
  --blur-md: 24px;
  --blur-lg: 32px;
}
```

---

This document serves as the single source of truth for all design decisions and implementations across the VividKit marketing website.
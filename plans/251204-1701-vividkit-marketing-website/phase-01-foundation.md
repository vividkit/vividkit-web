# Phase 01: Foundation

**Status:** DONE (Completed 2025-12-04 17:01 UTC)
**Timeline:** Days 1-2
**Goal:** Set up project skeleton, tooling, and base components

---

## Overview

Establish robust technical foundation with Astro 5.x + TypeScript + Tailwind CSS v4. Create reusable UI component library and implement dark mode system.

**Success Criteria:**
- Dev server runs without errors
- Theme toggle persists across reloads
- All base components render in light/dark modes
- Type safety enforced across codebase

---

## Task Checklist

### 1. Project Initialization

```bash
# Create Astro project
npm create astro@latest vividkit-web -- --template minimal --typescript strict

# Navigate into project
cd vividkit-web

# Install core dependencies
npm install -D tailwindcss @tailwindcss/vite @astrojs/vercel
npm install @fontsource/space-grotesk @fontsource/dm-sans @fontsource/fira-code
npm install lucide-astro alpinejs
```

**Verification:** `npm run dev` starts successfully on `localhost:4321`

---

### 2. Astro Configuration

**File:** `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks: undefined // Prevent code-splitting bloat
        }
      }
    }
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
```

---

### 3. Tailwind Configuration

**File:** `tailwind.config.mjs`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
  },
  plugins: []
}
```

---

### 4. TypeScript Configuration

**File:** `tsconfig.json`

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/layouts/*": ["src/layouts/*"],
      "@/data/*": ["src/data/*"],
      "@/types/*": ["src/types/*"],
      "@/scripts/*": ["src/scripts/*"],
      "@/styles/*": ["src/styles/*"]
    }
  }
}
```

---

### 5. Global Styles

**File:** `src/styles/global.css`

```css
/* Font imports */
@import '@fontsource/space-grotesk/400.css';
@import '@fontsource/space-grotesk/500.css';
@import '@fontsource/space-grotesk/600.css';
@import '@fontsource/space-grotesk/700.css';
@import '@fontsource/dm-sans/300.css';
@import '@fontsource/dm-sans/400.css';
@import '@fontsource/dm-sans/500.css';
@import '@fontsource/dm-sans/600.css';
@import '@fontsource/dm-sans/700.css';
@import '@fontsource/fira-code/400.css';
@import '@fontsource/fira-code/500.css';

/* Tailwind directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Base styles */
@layer base {
  * {
    scroll-behavior: smooth;
  }

  body {
    @apply antialiased;
  }
}

/* Glassmorphism components */
@layer components {
  .glass-card {
    @apply bg-white/80 dark:bg-surface-900/60;
    @apply border border-slate-200 dark:border-white/10;
    @apply backdrop-blur-2xl;
    -webkit-backdrop-filter: blur(24px);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  .glass-card-light {
    @apply bg-surface-50/90 dark:bg-surface-800/40;
    @apply border border-slate-200 dark:border-white/5;
    @apply backdrop-blur-xl;
    -webkit-backdrop-filter: blur(16px);
  }

  .glass-card-hover {
    @apply cursor-pointer transition-all duration-300 ease-out;
  }

  .glass-card-hover:hover {
    @apply border-slate-300 dark:border-white/20;
    @apply bg-white dark:bg-white/10;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  }

  .glow-border {
    @apply relative;
  }

  .glow-border::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.5), rgba(59, 130, 246, 0.5), rgba(249, 115, 22, 0.3));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  .nav-link {
    @apply transition-all duration-200 ease-out;
    @apply text-slate-600 dark:text-slate-400;
  }

  .nav-link:hover {
    @apply text-blue-600 bg-blue-500/5;
  }

  .dark .nav-link:hover {
    @apply text-blue-400 bg-blue-500/10;
  }

  .nav-link.active {
    @apply text-blue-600 bg-blue-500/10;
  }

  .dark .nav-link.active {
    @apply text-blue-400 bg-blue-500/15;
  }

  .cta-button {
    background: linear-gradient(to right, #2563EB, #3B82F6);
    @apply transition-all duration-300 ease-out;
  }

  .cta-button:hover {
    @apply -translate-y-0.5;
    box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -4px rgba(37, 99, 235, 0.3);
  }

  .feature-card {
    @apply transition-all duration-300 ease-out;
  }

  .feature-card:hover {
    @apply -translate-y-1;
    @apply border-blue-500/40;
    box-shadow: 0 20px 40px -12px rgba(37, 99, 235, 0.2);
  }
}

/* Keyframe animations */
@keyframes gradient-flow {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

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

/* Utility classes */
@layer utilities {
  .gradient-animate {
    background-size: 200% 200%;
    animation: gradient-flow 8s ease infinite;
  }

  .float-animation {
    animation: float 6s ease-in-out infinite;
  }

  .pulse-glow {
    animation: pulse-glow 3s ease-in-out infinite;
  }

  .fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }

  .section {
    @apply opacity-0 translate-y-8 transition-all duration-600 ease-out;
  }

  .section.visible {
    @apply opacity-100 translate-y-0;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

### 6. TypeScript Interfaces

**File:** `src/types/index.ts`

```typescript
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FeatureCard {
  icon: string; // Lucide icon name
  iconColor: 'blue' | 'purple' | 'green' | 'red' | 'amber' | 'orange' | 'emerald' | 'cyan' | 'pink';
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
  badgeColor?: string;
  borderColor?: string;
}

export interface Command {
  command: string;
  description: string;
  category: 'planning' | 'implementation' | 'quality' | 'debugging' | 'navigation' | 'utilities';
  color: string;
}

export interface Workflow {
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  levelColor: string;
  duration: string;
  stepCount: number;
  steps: { command?: string; description: string }[];
  borderColor: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface SEOMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
}
```

---

### 7. Theme Toggle Script

**File:** `src/scripts/theme-toggle.ts`

```typescript
export function initThemeToggle(): void {
  // Check localStorage and system preference on load
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply initial theme
  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  }

  // Toggle button handler
  const toggleButton = document.getElementById('theme-toggle');
  if (!toggleButton) return;

  toggleButton.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');

    // Toggle dark class
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only auto-switch if user hasn't manually set theme
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  });
}
```

---

### 8. Base UI Components

#### **File:** `src/components/ui/Button.astro`

```astro
---
interface Props {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  class?: string;
}

const {
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  class: className = ''
} = Astro.props;

const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300';

const variantClasses = {
  primary: 'cta-button text-white',
  secondary: 'glass-card hover:bg-white dark:hover:bg-slate-800/60',
  outline: 'border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
---

{href ? (
  <a href={href} class={classes}>
    <slot />
  </a>
) : (
  <button type={type} class={classes}>
    <slot />
  </button>
)}
```

---

#### **File:** `src/components/ui/GlassCard.astro`

```astro
---
interface Props {
  variant?: 'default' | 'light' | 'hover' | 'glow';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  class?: string;
}

const {
  variant = 'default',
  padding = 'md',
  class: className = ''
} = Astro.props;

const variantClasses = {
  default: 'glass-card',
  light: 'glass-card-light',
  hover: 'glass-card glass-card-hover',
  glow: 'glass-card glow-border'
};

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
};

const classes = `${variantClasses[variant]} ${paddingClasses[padding]} rounded-2xl ${className}`;
---

<div class={classes}>
  <slot />
</div>
```

---

#### **File:** `src/components/ui/Badge.astro`

```astro
---
interface Props {
  variant: 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md';
  pulse?: boolean;
  class?: string;
}

const {
  variant,
  size = 'sm',
  pulse = false,
  class: className = ''
} = Astro.props;

const variantClasses = {
  success: 'bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30',
  warning: 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30',
  danger: 'bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30',
  info: 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30'
};

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm'
};

const pulseClass = pulse ? 'pulse-glow' : '';

const classes = `inline-flex items-center gap-2 rounded-full border font-medium ${variantClasses[variant]} ${sizeClasses[size]} ${pulseClass} ${className}`;
---

<span class={classes}>
  {pulse && <span class="w-2 h-2 rounded-full bg-current"></span>}
  <slot />
</span>
```

---

#### **File:** `src/components/ui/Logo.astro`

```astro
---
interface Props {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  class?: string;
}

const {
  size = 'md',
  showText = true,
  class: className = ''
} = Astro.props;

const sizeMap = {
  sm: 32,
  md: 48,
  lg: 64
};

const svgSize = sizeMap[size];
---

<div class={`flex items-center gap-3 ${className}`}>
  <svg
    class="flex-shrink-0"
    width={svgSize}
    height={svgSize}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="vkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#A855F7;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#EC4899;stop-opacity:1" />
      </linearGradient>
    </defs>
    <!-- V letter -->
    <path
      d="M6 8 L14 28 L22 8"
      stroke="url(#vkGradient)"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <!-- K letter -->
    <path
      d="M26 8 L26 28 M26 18 L34 8 M26 18 L34 28"
      stroke="url(#vkGradient)"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <!-- Decorative dots -->
    <circle cx="14" cy="32" r="2" fill="url(#vkGradient)" opacity="0.7" />
    <circle cx="26" cy="32" r="2" fill="url(#vkGradient)" opacity="0.7" />
  </svg>

  {showText && (
    <div class="flex flex-col">
      <span class="text-xl font-heading font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        VividKit
      </span>
      <span class="text-xs text-slate-500 font-medium tracking-wide">
        Crystal clear AI coding
      </span>
    </div>
  )}
</div>
```

---

#### **File:** `src/components/ui/Input.astro`

```astro
---
interface Props {
  type?: 'text' | 'email' | 'password' | 'number';
  name: string;
  placeholder?: string;
  required?: boolean;
  class?: string;
}

const {
  type = 'text',
  name,
  placeholder,
  required = false,
  class: className = ''
} = Astro.props;

const classes = `w-full px-5 py-4 rounded-xl bg-white dark:bg-surface-950 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 ${className}`;
---

<input
  type={type}
  name={name}
  placeholder={placeholder}
  required={required}
  class={classes}
/>
```

---

### 9. MainLayout Component

**File:** `src/layouts/MainLayout.astro`

```astro
---
import type { SEOMeta } from '@/types';
import '@/styles/global.css';

interface Props extends SEOMeta {}

const {
  title,
  description,
  canonical,
  ogImage = '/og-image.png',
  ogType = 'website'
} = Astro.props;

const fullTitle = `${title} | VividKit`;
const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://vividkit.com';
const fullCanonical = `${siteUrl}${canonical}`;
const fullOgImage = `${siteUrl}${ogImage}`;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />

    <!-- Primary Meta Tags -->
    <title>{fullTitle}</title>
    <meta name="title" content={fullTitle} />
    <meta name="description" content={description} />
    <link rel="canonical" href={fullCanonical} />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content={ogType} />
    <meta property="og:url" content={fullCanonical} />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={fullOgImage} />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={fullCanonical} />
    <meta property="twitter:title" content={fullTitle} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={fullOgImage} />

    <!-- Theme toggle FOUC prevention -->
    <script is:inline>
      const theme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (theme === 'dark' || (!theme && prefersDark)) {
        document.documentElement.classList.add('dark');
      }
    </script>
  </head>
  <body class="font-sans antialiased bg-surface-50 dark:bg-surface-950 text-slate-900 dark:text-slate-100 min-h-screen overflow-x-hidden transition-colors duration-300">
    <slot />

    <!-- Initialize theme toggle -->
    <script>
      import { initThemeToggle } from '@/scripts/theme-toggle';
      initThemeToggle();
    </script>
  </body>
</html>
```

---

### 10. Environment Variables

**File:** `.env.example`

```bash
# Web3Forms API Key (get from web3forms.com)
PUBLIC_WEB3FORMS_KEY=your_access_key_here

# Site URL (for meta tags)
PUBLIC_SITE_URL=https://vividkit.com

# ClaudeKit Referral URL
PUBLIC_CLAUDEKIT_REFERRAL_URL=https://claudekit.com?ref=vividkit
```

**File:** `.gitignore`

```
# Dependencies
node_modules/

# Build output
dist/

# Environment variables
.env
.env.local

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/

# Vercel
.vercel/
```

---

## Verification Steps

1. **Dev Server:**
   ```bash
   npm run dev
   ```
   - Opens at `localhost:4321`
   - No console errors
   - Hot reload works

2. **Theme Toggle:**
   - Create test page with toggle button (id="theme-toggle")
   - Click toggle changes dark class on `<html>`
   - Refresh page, theme persists
   - Test system preference changes

3. **Component Rendering:**
   - Create test page with all base components
   - Verify Button variants (primary, secondary, outline)
   - Verify GlassCard variants (default, light, hover, glow)
   - Verify Badge variants (success, warning, danger, info)
   - Verify Logo renders with SVG gradient

4. **TypeScript:**
   - No errors in VSCode
   - IntelliSense works for component props
   - Path aliases work (`@/components`, etc.)

5. **Styling:**
   - Fonts load correctly
   - Glassmorphism renders (backdrop-filter visible)
   - Dark mode styles apply
   - Animations smooth (test pulse-glow, float, fade-in-up)

---

## Deliverables

- [x] Astro project initialized
- [x] Tailwind CSS configured (NOT CDN)
- [x] Fonts self-hosted (@fontsource)
- [x] Global styles with glassmorphism
- [x] TypeScript interfaces defined
- [x] Theme toggle functional
- [x] Button component (3 variants)
- [x] GlassCard component (4 variants)
- [x] Badge component (4 variants)
- [x] Logo component (SVG with gradient)
- [x] Input component
- [x] MainLayout component
- [x] Environment variables template
- [x] `.gitignore` configured

---

## Completion Summary

**Completed on:** 2025-12-04 at 17:01 UTC

**All Success Criteria Met:**
- Dev server runs without errors ✓
- Theme toggle persists across reloads ✓
- All base components render in light/dark modes ✓
- Type safety enforced across codebase ✓

**Quality Assurance:**
- TypeScript strict mode enabled
- Tailwind CSS v4 properly configured without CDN
- All fonts self-hosted via @fontsource
- Glassmorphism effects tested and working
- Component library established with 5 core components
- Dark mode toggle fully functional with localStorage persistence
- Environment configuration template provided

**Foundation Status:** READY FOR NEXT PHASE

---

## Next Phase

→ **Phase 02: Landing Page** (Days 3-5)

Build all landing page sections using foundation components.

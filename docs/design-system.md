# VividKit Design System

**Framework:** Astro 7.1.0 + Tailwind CSS 4.3.3
**Version:** 1.0
**Updated:** July 2026

---

## Quick Reference

### Brand Colors

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Primary | `#2563EB` | `blue-600` | CTAs, links, primary actions |
| Secondary | `#06B6D4` | `cyan-500` | Accents, highlights |
| CTA | `#F97316` | `orange-500` | Call-to-action emphasis |

### Fonts

```css
--font-heading: 'Space Grotesk'  /* Headings */
--font-sans: 'DM Sans'           /* Body text */
--font-mono: 'Fira Code'         /* Code blocks */
```

### Key Classes

```html
<!-- Cards -->
<div class="glass-card"></div>
<div class="glass-card glass-card-hover"></div>

<!-- Buttons -->
<button class="cta-button"></button>
<button class="cta-button-emerald"></button>

<!-- Terminal -->
<div class="terminal-window"></div>
```

---

## 1. Color System

### Surface Colors (Slate Scale)

```css
@theme {
  --color-surface-50: #f8fafc;   /* Lightest */
  --color-surface-100: #f1f5f9;
  --color-surface-200: #e2e8f0;
  --color-surface-300: #cbd5e1;
  --color-surface-400: #94a3b8;
  --color-surface-500: #64748b;
  --color-surface-600: #475569;
  --color-surface-700: #334155;
  --color-surface-800: #1e293b;
  --color-surface-900: #0f172a;
  --color-surface-950: #020617;  /* Darkest */
}
```

**Usage:**
- `surface-50` to `surface-200`: Light mode backgrounds
- `surface-700` to `surface-950`: Dark mode backgrounds

### Brand Gradients

```css
/* Primary CTA Gradient */
background: linear-gradient(135deg, #2563eb, #06b6d4);

/* Emerald Gradient */
background: linear-gradient(135deg, #059669, #14b8a6);

/* Glow Border Gradient */
background: linear-gradient(135deg,
  rgba(37, 99, 235, 0.5),
  rgba(59, 130, 246, 0.5),
  rgba(249, 115, 22, 0.3)
);
```

### Text Colors

| Context | Light Mode | Dark Mode |
|---------|------------|-----------|
| Primary | `slate-900` | `white` / `slate-50` |
| Secondary | `slate-600` | `slate-300` / `slate-400` |
| Muted | `slate-500` | `slate-400` |

### Contrast Requirements (WCAG)

| Element | Light Ratio | Dark Ratio | Status |
|---------|-------------|------------|--------|
| Body text | 14.1:1 | 16.2:1 | AAA |
| Secondary | 5.8:1 | 6.3:1 | AA+ |
| Borders | 2.1:1 | 2.4:1 | Visible |

---

## 2. Typography

### Font Stack

```css
@theme {
  --font-heading: 'Space Grotesk', sans-serif;
  --font-sans: 'DM Sans', sans-serif;
  --font-mono: 'Fira Code', monospace;
}
```

### Font Imports (@fontsource)

```css
/* Space Grotesk: 400, 500, 600, 700 */
@import '@fontsource/space-grotesk/400.css';
@import '@fontsource/space-grotesk/500.css';
@import '@fontsource/space-grotesk/600.css';
@import '@fontsource/space-grotesk/700.css';

/* DM Sans: 300, 400, 500, 600, 700 */
@import '@fontsource/dm-sans/300.css';
@import '@fontsource/dm-sans/400.css';
@import '@fontsource/dm-sans/500.css';
@import '@fontsource/dm-sans/600.css';
@import '@fontsource/dm-sans/700.css';

/* Fira Code: 400, 500 */
@import '@fontsource/fira-code/400.css';
@import '@fontsource/fira-code/500.css';
```

### Type Scale

```html
<h1 class="text-6xl font-bold font-heading">H1</h1>
<h2 class="text-5xl font-bold font-heading">H2</h2>
<h3 class="text-4xl font-bold font-heading">H3</h3>
<h4 class="text-3xl font-bold font-heading">H4</h4>
<h5 class="text-2xl font-bold font-heading">H5</h5>
<h6 class="text-xl font-bold font-heading">H6</h6>
```

### Line Heights

| Context | Value |
|---------|-------|
| H1, H2 | `1.1` |
| H3, H4 | `1.2` |
| Body | `1.6` |
| UI text | `1.5` |

---

## 3. Component Classes

### Glass Cards

```css
/* Standard glass card */
.glass-card {
  @apply bg-white/80 dark:bg-surface-900/60;
  @apply border border-slate-200 dark:border-white/10;
  @apply backdrop-blur-2xl;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

/* Light variant */
.glass-card-light {
  @apply bg-surface-50/90 dark:bg-surface-800/40;
  @apply border border-slate-200 dark:border-white/5;
  @apply backdrop-blur-xl;
}

/* Interactive variant */
.glass-card-hover {
  @apply cursor-pointer transition-all duration-300 ease-out;
}
.glass-card-hover:hover {
  @apply border-slate-300 dark:border-white/20;
  @apply bg-white/90 dark:bg-white/10;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

**Usage:**

```html
<div class="glass-card p-6 rounded-2xl">Static card</div>
<div class="glass-card glass-card-hover p-6 rounded-2xl">Clickable card</div>
<div class="glass-card-light p-4 rounded-xl">Subtle card</div>
```

### Glow Border

```css
.glow-border {
  @apply relative;
}
.glow-border::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg,
    rgba(37, 99, 235, 0.5),
    rgba(59, 130, 246, 0.5),
    rgba(249, 115, 22, 0.3)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}
```

### CTA Buttons

```css
/* Primary: Blue-Cyan gradient */
.cta-button {
  background: linear-gradient(135deg, #2563eb, #06b6d4);
  @apply text-white shadow-lg shadow-blue-500/20;
}
.cta-button:hover {
  @apply -translate-y-0.5;
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
}

/* Emerald variant */
.cta-button-emerald {
  background: linear-gradient(135deg, #059669, #14b8a6);
  @apply text-white shadow-lg shadow-emerald-500/20;
}
```

**Usage:**

```html
<button class="cta-button px-8 py-4 rounded-2xl font-bold">
  Primary CTA
</button>
<button class="cta-button-emerald px-6 py-3 rounded-full font-semibold">
  Emerald CTA
</button>
```

### Navigation Links

```css
.nav-link {
  @apply block transition-all duration-300 ease-out rounded-full;
  @apply border border-transparent px-3 py-1.5;
  @apply text-slate-600 dark:text-slate-400;
}
.nav-link:hover {
  @apply text-blue-600 bg-blue-500/5;
}
.nav-link.active {
  @apply bg-white dark:bg-white/10 text-blue-600 dark:text-blue-400;
  @apply border-slate-200 dark:border-white/10 shadow-md;
}
```

### Terminal Window

```css
.terminal-window {
  @apply bg-[#0D0D0D] rounded-xl border-2 border-slate-700 overflow-hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
.terminal-header {
  @apply bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700;
}
.terminal-content {
  @apply p-6 font-mono text-sm space-y-3 min-h-[300px] text-slate-300;
}
.terminal-prompt { @apply text-emerald-400; }
.terminal-path { @apply text-cyan-400; }
```

**Usage:**

```html
<div class="terminal-window">
  <div class="terminal-header">
    <div class="terminal-dots">
      <div class="terminal-dot terminal-dot--red"></div>
      <div class="terminal-dot terminal-dot--yellow"></div>
      <div class="terminal-dot terminal-dot--green"></div>
    </div>
    <div class="text-xs text-slate-400 font-mono ml-2">bash</div>
  </div>
  <div class="terminal-content">
    <span class="terminal-prompt">$</span>
    <span class="terminal-path">~/project</span>
    <span>npm run dev</span>
  </div>
</div>
```

### Step Indicators

```css
.step-indicator {
  @apply flex-shrink-0 w-10 h-10 rounded-full font-bold text-lg;
  @apply flex items-center justify-center border-2;
}
.step-indicator--blue { @apply bg-blue-500/20 text-blue-400 border-blue-500/50; }
.step-indicator--purple { @apply bg-purple-500/20 text-purple-400 border-purple-500/50; }
.step-indicator--green { @apply bg-green-500/20 text-green-400 border-green-500/50; }
.step-indicator--emerald { @apply bg-emerald-500/20 text-emerald-400 border-emerald-500/50; }
.step-indicator--amber { @apply bg-amber-500/20 text-amber-400 border-amber-500/50; }
.step-indicator--red { @apply bg-red-500/20 text-red-400 border-red-500/50; }
.step-indicator--cyan { @apply bg-cyan-500/20 text-cyan-400 border-cyan-500/50; }
.step-indicator--indigo { @apply bg-indigo-500/20 text-indigo-400 border-indigo-500/50; }
```

**Usage:**

```html
<div class="step-indicator step-indicator--blue">1</div>
<div class="step-indicator step-indicator--purple">2</div>
<div class="step-indicator step-indicator--green">3</div>
```

### Skill Badges

```css
.skill-badge {
  @apply px-2 py-0.5 text-xs rounded-full font-medium border;
}
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

**Usage:**

```html
<span class="skill-badge skill-badge--beginner">Beginner</span>
<span class="skill-badge skill-badge--intermediate">Intermediate</span>
<span class="skill-badge skill-badge--advanced">Advanced</span>
```

### Workflow Cards

```css
.workflow-card {
  @apply bg-white/80 dark:bg-surface-900/50 rounded-xl;
  @apply border border-slate-200 dark:border-slate-800 overflow-hidden;
  @apply hover:border-blue-500/50 transition-colors duration-200;
}
.workflow-card-header {
  @apply p-6 border-b border-slate-200 dark:border-slate-800;
}
.workflow-card-body { @apply p-6 space-y-4; }
.workflow-card-footer {
  @apply p-4 bg-slate-50/50 dark:bg-slate-900/50;
  @apply border-t border-slate-200 dark:border-slate-800;
}

/* Header color variants */
.workflow-card-header--purple { @apply bg-gradient-to-r from-purple-500/10 to-blue-500/10; }
.workflow-card-header--red { @apply bg-gradient-to-r from-red-500/10 to-orange-500/10; }
.workflow-card-header--blue { @apply bg-gradient-to-r from-blue-500/10 to-cyan-500/10; }
.workflow-card-header--green { @apply bg-gradient-to-r from-green-500/10 to-emerald-500/10; }
.workflow-card-header--amber { @apply bg-gradient-to-r from-amber-500/10 to-orange-500/10; }
.workflow-card-header--emerald { @apply bg-gradient-to-r from-emerald-500/10 to-green-500/10; }
.workflow-card-header--pink { @apply bg-gradient-to-r from-pink-500/10 to-rose-500/10; }
.workflow-card-header--cyan { @apply bg-gradient-to-r from-cyan-500/10 to-blue-500/10; }
.workflow-card-header--indigo { @apply bg-gradient-to-r from-indigo-500/10 to-purple-500/10; }
```

---

## 4. Animations

### Keyframes

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

@keyframes flow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}
```

### Utility Classes

| Class | Animation | Duration |
|-------|-----------|----------|
| `.gradient-animate` | `gradient-flow` | 8s |
| `.float-animation` | `float` | 6s |
| `.pulse-glow` | `pulse-glow` | 3s |
| `.fade-in-up` | `fade-in-up` | 0.6s |
| `.flow-arrow` | `flow` | 2s |
| `.cursor-blink` | `blink` | 1s |

### Transition Durations

| Class | Duration | Use Case |
|-------|----------|----------|
| `duration-150` | 150ms | Quick interactions |
| `duration-200` | 200ms | Hover states (default) |
| `duration-300` | 300ms | Complex transitions |
| `duration-500` | 500ms | Maximum (rarely) |

### Reduced Motion Support

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

---

## 5. Layout

### Container Widths

| Class | Width | Usage |
|-------|-------|-------|
| `max-w-5xl` | 1024px | Default content |
| `max-w-6xl` | 1152px | Wide content |
| `max-w-7xl` | 1280px | Full layout |

### Responsive Breakpoints

| Prefix | Min Width |
|--------|-----------|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

### Spacing Scale (Base: 4px)

| Class | Size |
|-------|------|
| `p-1` | 4px |
| `p-2` | 8px |
| `p-4` | 16px |
| `p-6` | 24px |
| `p-8` | 32px |
| `p-12` | 48px |
| `p-16` | 64px |

### Border Radius

| Class | Radius |
|-------|--------|
| `rounded` | 4px |
| `rounded-lg` | 8px |
| `rounded-xl` | 12px |
| `rounded-2xl` | 16px |
| `rounded-full` | 9999px |

### Floating Header Pattern

```css
.header {
  position: fixed;
  top: 1.5rem;    /* top-6 */
  left: 1.5rem;   /* left-6 */
  right: 1.5rem;  /* right-6 */
}

/* Content scroll margin */
section[id], h1[id], h2[id], h3[id] {
  scroll-margin-top: 8rem;  /* 128px */
}
```

---

## 6. Dark Mode

### Implementation

```html
<html class="dark">  <!-- Toggle via selector -->
```

```javascript
// Theme toggle
const theme = localStorage.getItem('theme') || 'dark';
document.documentElement.classList.toggle('dark', theme === 'dark');
```

### Color Strategy

Design dark-first, adapt to light:

```html
<!-- Pattern -->
<div class="bg-slate-900/60 dark:bg-slate-900/60 text-white">
  <!-- Dark mode is default -->
</div>

<div class="bg-white/80 dark:bg-slate-900/60 text-slate-900 dark:text-white">
  <!-- Light mode override -->
</div>
```

### Light Mode Fixes

| Issue | Fix |
|-------|-----|
| Text too light | Use `slate-900` not `slate-400` |
| Borders invisible | Use `slate-200` not `white/10` |
| Glass too transparent | Use `white/80` not `white/10` |

---

## 7. Accessibility

### Focus Indicators

```css
:focus-visible {
  outline: 2px solid #3B82F6;  /* Blue-500 */
  outline-offset: 2px;
}

.focus-custom:focus-visible {
  outline: none;
  @apply ring-2 ring-blue-500;
}
```

### ARIA Labels

```html
<button aria-label="Toggle dark mode">
  <svg>...</svg>
</button>

<button aria-label="Select language">EN</button>
```

### Keyboard Navigation

- All interactive elements keyboard accessible
- Logical tab order
- Skip links for screen readers
- Focus traps in modals

---

## 8. Icons

### Library

**Lucide Astro** - Consistent, accessible SVG icons

```astro
import { ArrowRight, Check, Menu, Sun, Moon } from 'lucide-astro';

<ArrowRight class="w-5 h-5" />
```

### Sizing

| Class | Size | Usage |
|-------|------|-------|
| `w-4 h-4` | 16px | Inline text |
| `w-5 h-5` | 20px | Buttons (default) |
| `w-6 h-6` | 24px | Feature cards |
| `w-8 h-8` | 32px | Hero sections |

### Rules

- Use SVG icons from Lucide only
- Add `stroke-width="2"` for consistency
- Use `currentColor` for fill/stroke
- No emojis as UI icons

---

## 9. UI Components

### Astro Components

| Component | Path |
|-----------|------|
| Button | `src/components/ui/Button.astro` |
| GlassCard | `src/components/ui/GlassCard.astro` |
| Badge | `src/components/ui/Badge.astro` |
| Input | `src/components/ui/Input.astro` |
| Select | `src/components/ui/Select.astro` |
| Textarea | `src/components/ui/Textarea.astro` |
| Logo | `src/components/ui/Logo.astro` |

### Layout Components

| Component | Path |
|-----------|------|
| MainLayout | `src/layouts/MainLayout.astro` |
| GuidesLayout | `src/layouts/GuidesLayout.astro` |
| Header | `src/components/layout/Header.astro` |
| Footer | `src/components/layout/Footer.astro` |
| AmbientBackground | `src/components/layout/AmbientBackground.astro` |

---

## 10. Checklist

### Before Shipping

**Visual Quality**
- [ ] Icons from Lucide (no emojis)
- [ ] Consistent icon sizing (w-5 h-5)
- [ ] Hover states don't cause layout shift
- [ ] `cursor-pointer` on clickables

**Light/Dark Mode**
- [ ] Text contrast >= 4.5:1 (WCAG AA)
- [ ] Glass elements visible in light mode
- [ ] Borders visible in both modes

**Accessibility**
- [ ] Focus indicators visible
- [ ] ARIA labels on icon-only buttons
- [ ] `prefers-reduced-motion` respected

**Performance**
- [ ] Backdrop blur < 5 elements per view
- [ ] Animations optimized
- [ ] Fonts self-hosted (@fontsource)

---

## Files Reference

| File | Purpose |
|------|---------|
| `src/styles/global.css` | Theme variables, components, animations |
| `tailwind.config.mjs` | Tailwind configuration |
| `docs/design-guideline.md` | Detailed design philosophy |
| `docs/brand-concept.md` | Brand identity & voice |
| `docs/STYLE_GUIDE.md` | Component usage examples |

---

## Version History

- **v1.0** (Jan 2026) - Consolidated design system documentation

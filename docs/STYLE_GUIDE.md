# VividKit Design System & Style Guide

This document outlines the core design elements, components, and utility classes used in the VividKit project.

## Typography

### Font Families
*   **Heading**: `Space Grotesk` (via `--font-heading`)
*   **Body**: `DM Sans` (via `--font-sans`)
*   **Monospace**: `Fira Code` (via `--font-mono`)

### Headings
```html
<h1 class="text-6xl font-bold font-heading">Heading 1</h1>
<h2 class="text-5xl font-bold font-heading">Heading 2</h2>
<h3 class="text-4xl font-bold font-heading">Heading 3</h3>
<h4 class="text-3xl font-bold font-heading">Heading 4</h4>
<h5 class="text-2xl font-bold font-heading">Heading 5</h5>
<h6 class="text-xl font-bold font-heading">Heading 6</h6>
```

## Colors

### Surface Colors
The design system uses a palette of surface colors ranging from 50 to 950.
*   `bg-surface-50` to `bg-surface-950`

### Brand Gradients
*   **Blue - Cyan**: `bg-gradient-to-r from-blue-600 to-cyan-500`
*   **Purple - Pink**: `bg-gradient-to-r from-purple-600 to-pink-500`
*   **Emerald - Teal**: `bg-gradient-to-r from-emerald-500 to-teal-400`

## Buttons

### Primary CTA
```html
<button class="cta-button px-8 py-3 rounded-full font-semibold text-lg">
  Primary CTA
</button>
```

### Emerald CTA
```html
<button class="cta-button-emerald px-8 py-3 rounded-full font-semibold text-lg">
  Emerald CTA
</button>
```

### Secondary Outline
```html
<button class="px-8 py-3 rounded-full font-semibold text-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
  Secondary Outline
</button>
```

## Cards

### Glass Card
Standard glassmorphism card.
```html
<div class="glass-card p-6 rounded-2xl">...</div>
```

### Light Glass Card
Lighter, more subtle variation.
```html
<div class="glass-card-light p-6 rounded-2xl">...</div>
```

### Hover Card
Interactive card with hover effects.
```html
<div class="glass-card glass-card-hover p-6 rounded-2xl">...</div>
```

## Components

### Terminal Window
Window component for simulated CLI interfaces.
```html
<div class="terminal-window">
   <div class="terminal-header">
      <div class="terminal-dots">
         <div class="terminal-dot terminal-dot--red"></div>
         <div class="terminal-dot terminal-dot--yellow"></div>
         <div class="terminal-dot terminal-dot--green"></div>
      </div>
      <div class="text-xs text-slate-400 font-mono ml-2">bash — 80x24</div>
   </div>
   <div class="terminal-content">
      ...
   </div>
</div>
```

### Step Indicators
Circular number indicators for guides.
```html
<div class="step-indicator step-indicator--blue">1</div>
<div class="step-indicator step-indicator--purple">2</div>
<div class="step-indicator step-indicator--green">3</div>
<div class="step-indicator step-indicator--red">4</div>
```

### Skill Badges
Badges for indicating difficulty or skill level.
```html
<span class="skill-badge skill-badge--beginner">Beginner</span>
<span class="skill-badge skill-badge--intermediate">Intermediate</span>
<span class="skill-badge skill-badge--advanced">Advanced</span>
```

## Animations

### Utility Classes
*   `.float-animation`: Gently floats the element up and down.
*   `.pulse-glow`: Adds a pulsing opacity effect.
*   `.gradient-animate`: Animates the background position of a gradient.
*   `.fade-in-up`: Fades element in while moving upwards (used with JS observer).

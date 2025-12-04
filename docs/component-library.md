# Component Library Documentation

**Version:** 1.0
**Last Updated:** 2025-12-04
**Status:** Phase 01 Complete

## Table of Contents

1. [Button](#button)
2. [GlassCard](#glasscard)
3. [Badge](#badge)
4. [Input](#input)
5. [Logo](#logo)
6. [MainLayout](#mainlayout)

---

## Button

A versatile button component supporting multiple variants and sizes.

**Location:** `src/components/ui/Button.astro`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `href` | `string` | `undefined` | If provided, renders as anchor instead of button |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `class` | `string` | `''` | Additional Tailwind classes |

### Variants

#### Primary
```astro
<Button variant="primary">Primary Button</Button>
```
- Background: Linear gradient (blue-600 to blue-500)
- Text: White
- Effect: Lift on hover with shadow

#### Secondary
```astro
<Button variant="secondary">Secondary Button</Button>
```
- Background: Glass card effect
- Text: Inherited
- Effect: Subtle hover with darker background

#### Outline
```astro
<Button variant="outline">Outline Button</Button>
```
- Background: Transparent
- Border: 2px slate-200 / slate-700
- Effect: Light background on hover

### Sizes

```astro
<!-- Small: 16px font, 4px 16px padding -->
<Button size="sm">Small</Button>

<!-- Medium: 16px font, 12px 24px padding (default) -->
<Button size="md">Medium</Button>

<!-- Large: 18px font, 16px 32px padding -->
<Button size="lg">Large</Button>
```

### Usage Examples

```astro
---
import Button from '@/components/ui/Button.astro';
---

<!-- Basic button -->
<Button variant="primary">Click me</Button>

<!-- Button as link -->
<Button variant="primary" href="/features">Learn more</Button>

<!-- Submit button in form -->
<form>
  <Button variant="primary" type="submit" size="lg">
    Submit
  </Button>
</form>

<!-- With icon -->
<Button variant="secondary">
  <CheckIcon />
  Verified
</Button>

<!-- Custom styling -->
<Button variant="primary" class="w-full">Full width button</Button>
```

### Accessibility

- Semantic `<button>` or `<a>` elements
- Clear focus states via Tailwind focus styles
- Proper type attributes on buttons
- Supports ARIA attributes via spread props

### CSS Classes Used

- Base: `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300`
- Primary: `cta-button text-white` (custom gradient)
- Secondary: `glass-card hover:bg-white dark:hover:bg-slate-800/60`
- Outline: `border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800`

---

## GlassCard

Container component with glassmorphism effects.

**Location:** `src/components/ui/GlassCard.astro`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'light' \| 'hover' \| 'glow'` | `'default'` | Visual variant |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Interior padding |
| `class` | `string` | `''` | Additional Tailwind classes |

### Variants

#### Default
```astro
<GlassCard variant="default">
  Standard glassmorphism effect
</GlassCard>
```
- Background: White/80% light, surface-900/60% dark
- Border: Thin slate-200 / white-10%
- Blur: 24px backdrop blur
- Use: General content containers

#### Light
```astro
<GlassCard variant="light">
  Subtle glassmorphism
</GlassCard>
```
- Background: Surface-50/90% light, surface-800/40% dark
- Border: Thin slate-200 / white-5%
- Blur: 16px backdrop blur
- Use: Secondary containers, subtle backgrounds

#### Hover
```astro
<GlassCard variant="hover">
  Interactive card
</GlassCard>
```
- Base: Default glass card
- Interactive: Cursor pointer, smooth transitions
- Hover: Elevated border, lifted shadow
- Use: Clickable cards, interactive content

#### Glow
```astro
<GlassCard variant="glow">
  Featured content
</GlassCard>
```
- Base: Default glass card
- Border: Gradient glow (blue to orange)
- Use: Highlight featured content, CTAs

### Padding

```astro
<!-- No padding -->
<GlassCard padding="none">Content</GlassCard>

<!-- Small: 16px -->
<GlassCard padding="sm">Content</GlassCard>

<!-- Medium: 24px (default) -->
<GlassCard padding="md">Content</GlassCard>

<!-- Large: 32px -->
<GlassCard padding="lg">Content</GlassCard>
```

### Usage Examples

```astro
---
import GlassCard from '@/components/ui/GlassCard.astro';
import Button from '@/components/ui/Button.astro';
---

<!-- Simple container -->
<GlassCard variant="default" padding="md">
  <h3>Card Title</h3>
  <p>Card content here</p>
</GlassCard>

<!-- Grid of cards -->
<div class="grid md:grid-cols-2 gap-4">
  <GlassCard variant="default">Feature 1</GlassCard>
  <GlassCard variant="default">Feature 2</GlassCard>
</div>

<!-- Interactive card -->
<GlassCard variant="hover" padding="lg">
  <div class="flex items-center justify-between">
    <div>
      <h3 class="font-semibold">Title</h3>
      <p class="text-sm text-slate-600">Description</p>
    </div>
    <Button variant="secondary" size="sm">Action</Button>
  </div>
</GlassCard>

<!-- Featured section -->
<GlassCard variant="glow" padding="lg">
  <div class="text-center">
    <h2 class="text-2xl font-bold mb-2">Special Offer</h2>
    <p class="mb-4">Limited time feature</p>
    <Button variant="primary">Get Started</Button>
  </div>
</GlassCard>
```

### Accessibility

- Semantic container element
- Proper heading hierarchy when used with text
- Sufficient color contrast maintained
- Works with screen readers (heading hierarchy)

### CSS Classes Used

- Base: `rounded-2xl`
- Default: `glass-card`
- Light: `glass-card-light`
- Hover: `glass-card glass-card-hover`
- Glow: `glass-card glow-border`

---

## Badge

Small label component for status indicators and tags.

**Location:** `src/components/ui/Badge.astro`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'success' \| 'warning' \| 'danger' \| 'info'` | Required | Badge color variant |
| `size` | `'sm' \| 'md'` | `'sm'` | Badge size |
| `pulse` | `boolean` | `false` | Animated pulsing effect |
| `class` | `string` | `''` | Additional Tailwind classes |

### Variants

#### Success
```astro
<Badge variant="success">Active</Badge>
```
- Background: Green-500/20
- Text: Green-600 (light), green-400 (dark)
- Border: Green-500/30
- Use: Approved, active, online status

#### Warning
```astro
<Badge variant="warning">Pending</Badge>
```
- Background: Amber-500/20
- Text: Amber-600 (light), amber-400 (dark)
- Border: Amber-500/30
- Use: Caution, pending, experimental

#### Danger
```astro
<Badge variant="danger">Error</Badge>
```
- Background: Red-500/20
- Text: Red-600 (light), red-400 (dark)
- Border: Red-500/30
- Use: Error, failed, critical

#### Info
```astro
<Badge variant="info">New</Badge>
```
- Background: Blue-500/20
- Text: Blue-600 (light), blue-400 (dark)
- Border: Blue-500/30
- Use: Information, new, featured

### Sizes

```astro
<!-- Small: 12px font, 2px 8px padding -->
<Badge variant="success" size="sm">Small</Badge>

<!-- Medium: 14px font, 4px 12px padding -->
<Badge variant="success" size="md">Medium</Badge>
```

### With Pulse Animation

```astro
<!-- Indicator with animated pulse -->
<Badge variant="success" pulse>Live</Badge>
<Badge variant="warning" pulse>Processing</Badge>
```

Pulse animation:
- Opacity oscillates 0.5 to 1.0
- Duration: 3s continuous loop
- Respects `prefers-reduced-motion`

### Usage Examples

```astro
---
import Badge from '@/components/ui/Badge.astro';
---

<!-- Status indicators -->
<div class="flex items-center gap-2">
  <span>Server Status:</span>
  <Badge variant="success" pulse>Online</Badge>
</div>

<!-- Feature tags -->
<div class="flex flex-wrap gap-2">
  <Badge variant="info">New</Badge>
  <Badge variant="success">Available</Badge>
  <Badge variant="warning">Beta</Badge>
</div>

<!-- In cards -->
<div class="flex items-center justify-between">
  <span>API v2.0</span>
  <Badge variant="success" size="md">Stable</Badge>
</div>

<!-- With multiple badges -->
<div class="space-y-2">
  <Badge variant="success">Passed</Badge>
  <Badge variant="warning">Reviewed</Badge>
  <Badge variant="info" pulse>In Progress</Badge>
</div>
```

### Accessibility

- Semantic `<span>` element
- Clear color-independent indicators (use text)
- Pulse animation respects system motion preferences
- Proper ARIA labels when used as status indicators

### CSS Classes Used

- Base: `inline-flex items-center gap-2 rounded-full border font-medium`
- Success: `bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30`
- Warning: `bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30`
- Danger: `bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30`
- Info: `bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30`

---

## Input

Form input component with consistent styling.

**Location:** `src/components/ui/Input.astro`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'text' \| 'email' \| 'password' \| 'number'` | `'text'` | Input type |
| `name` | `string` | Required | Input name attribute |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `required` | `boolean` | `false` | HTML required attribute |
| `class` | `string` | `''` | Additional Tailwind classes |

### Input Types

```astro
<!-- Text input -->
<Input type="text" name="username" placeholder="Enter username" />

<!-- Email input -->
<Input type="email" name="email" placeholder="your@email.com" required />

<!-- Password input -->
<Input type="password" name="password" placeholder="Enter password" />

<!-- Number input -->
<Input type="number" name="age" placeholder="Enter age" />
```

### Usage Examples

```astro
---
import Input from '@/components/ui/Input.astro';
import Button from '@/components/ui/Button.astro';
---

<!-- Simple form -->
<form class="space-y-4">
  <Input type="text" name="name" placeholder="Your name" />
  <Input type="email" name="email" placeholder="your@email.com" required />
  <Button variant="primary" type="submit">Subscribe</Button>
</form>

<!-- Complex form -->
<form class="space-y-6">
  <div>
    <label for="username" class="block text-sm font-medium mb-2">
      Username
    </label>
    <Input
      type="text"
      name="username"
      id="username"
      placeholder="Choose a username"
      required
    />
  </div>

  <div class="grid md:grid-cols-2 gap-4">
    <Input type="text" name="firstName" placeholder="First name" />
    <Input type="text" name="lastName" placeholder="Last name" />
  </div>

  <div>
    <label for="email" class="block text-sm font-medium mb-2">
      Email
    </label>
    <Input
      type="email"
      name="email"
      id="email"
      placeholder="your@email.com"
      required
    />
  </div>

  <Button variant="primary" type="submit" size="lg" class="w-full">
    Create Account
  </Button>
</form>
```

### Styling

**Default State:**
- Background: White (light), surface-950 (dark)
- Border: Slate-200 (light), slate-700 (dark)
- Text: Slate-900 (light), white (dark)
- Placeholder: Slate-400 (light), slate-500 (dark)

**Focus State:**
- Border: Blue-500
- Ring: Blue-500/20 (2px)
- Outline: None (handled by ring)

**Full Width:**
```astro
<Input type="text" name="search" placeholder="Search..." class="w-full" />
```

### Accessibility

- Proper `name` attribute for form submission
- Support for `required` attribute
- Clear focus indicators (2px ring)
- Associated labels recommended
- Semantic form structure

### CSS Classes Used

```css
w-full px-5 py-4 rounded-xl
bg-white dark:bg-surface-950
border border-slate-200 dark:border-slate-700
focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
outline-none
transition-all
text-slate-900 dark:text-white
placeholder-slate-400 dark:placeholder-slate-500
```

---

## Logo

VividKit logo component with responsive sizing.

**Location:** `src/components/ui/Logo.astro`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Logo size |
| `showText` | `boolean` | `true` | Display brand text |
| `class` | `string` | `''` | Additional Tailwind classes |

### Sizes

```astro
<!-- Small: 32px logo -->
<Logo size="sm" showText={false} />

<!-- Medium: 48px logo (default) -->
<Logo size="md" showText={true} />

<!-- Large: 64px logo -->
<Logo size="lg" showText={true} />
```

### With/Without Text

```astro
<!-- Logo only -->
<Logo size="md" showText={false} />

<!-- Logo with branding -->
<Logo size="md" showText={true} />
<!-- Renders:
  VividKit (gradient text)
  Crystal clear AI coding (tagline)
-->
```

### Usage Examples

```astro
---
import Logo from '@/components/ui/Logo.astro';
---

<!-- Header/Navigation -->
<header>
  <Logo size="sm" showText={true} />
</header>

<!-- Hero Section -->
<section class="text-center">
  <Logo size="lg" showText={true} />
  <h1>Welcome to VividKit</h1>
</section>

<!-- Footer -->
<footer>
  <Logo size="sm" showText={false} />
  <p>Crystal clear AI coding with ClaudeKit</p>
</footer>

<!-- Favicon replacement -->
<Logo size="sm" showText={false} class="w-8 h-8" />
```

### Design

**Logo Elements:**
- **V Letter:** Stroke path with gradient
- **K Letter:** Stroke path with gradient
- **Decorative Dots:** Bottom ornament
- **Gradient:** Blue (0%) → Purple (50%) → Pink (100%)

**Text:**
- **VividKit:** Space Grotesk, 20px, bold, gradient text
- **Tagline:** 12px, medium weight, tracking-wide, slate-500

### Accessibility

- Decorative SVG (no role needed in logo-only mode)
- When with text, acts as brand identifier
- Recommended in `<a>` tags for navigation

### CSS Classes Used

- Container: `flex items-center gap-3`
- SVG: `flex-shrink-0`
- Text: `text-xl font-heading font-bold bg-gradient-to-r ... bg-clip-text text-transparent`
- Tagline: `text-xs text-slate-500 font-medium tracking-wide`

---

## MainLayout

Base layout component with SEO optimization and theme support.

**Location:** `src/layouts/MainLayout.astro`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | Required | Page title |
| `description` | `string` | Required | Meta description |
| `canonical` | `string` | Required | Canonical URL path |
| `ogImage` | `string` | `'/og-image.png'` | Open Graph image |
| `ogType` | `'website' \| 'article'` | `'website'` | OG type |

### Features

**SEO Optimization:**
- Proper title tags with site name
- Meta description
- Canonical URLs
- Open Graph tags (Facebook, LinkedIn)
- Twitter card tags

**Theme Support:**
- FOUC prevention (Flash Of Unstyled Content)
- Dark mode class detection
- localStorage persistence
- System preference fallback

**Global Styles:**
- Tailwind CSS
- Global animations
- Theme color variables
- Font stack configuration

### Usage

```astro
---
import MainLayout from '@/layouts/MainLayout.astro';
---

<MainLayout
  title="Features"
  description="Explore VividKit features and capabilities"
  canonical="/features"
>
  <!-- Page content -->
</MainLayout>
```

### SEO Example

```astro
---
import MainLayout from '@/layouts/MainLayout.astro';
---

<MainLayout
  title="Pricing Plans"
  description="Simple, transparent pricing for VividKit products"
  canonical="/pricing"
  ogImage="/pricing-og.jpg"
  ogType="website"
>
  <!-- Pricing page content -->
</MainLayout>
```

### Generated Tags

For page with title "Features":
- `<title>Features | VividKit</title>`
- `<meta name="description" content="..."`
- `<link rel="canonical" href="https://vividkit.com/features">`
- `<meta property="og:title" content="Features | VividKit">`
- `<meta property="og:image" content="https://vividkit.com/pricing-og.jpg">`
- `<meta property="twitter:card" content="summary_large_image">`

### Theme Toggle

Theme toggle button automatically initialized:
- Checks localStorage for stored preference
- Falls back to system preference
- Listens for system preference changes
- Maintains state across page reloads

### Accessibility

- Proper HTML structure
- Semantic landmarks (nav, main)
- Theme toggle with aria-label
- Keyboard accessible theme button

### Environment Variables

Requires in `.env`:
```env
PUBLIC_SITE_URL=https://vividkit.com
```

---

## Component Variants Summary

| Component | Variants | Sizes | Key Feature |
|-----------|----------|-------|-------------|
| Button | primary, secondary, outline | sm, md, lg | Link or button capability |
| GlassCard | default, light, hover, glow | - | Padding control |
| Badge | success, warning, danger, info | sm, md | Optional pulse animation |
| Input | text, email, password, number | - | Focus ring styling |
| Logo | - | sm, md, lg | Optional text display |
| MainLayout | - | - | SEO + theme support |

## Design System Tokens

**Colors Used:**
- Primary: Blue-600 / Blue-500
- Secondary: Slate-200 / Slate-700
- Accent: Purple-500, Pink-500
- Success: Green-500
- Warning: Amber-500
- Danger: Red-500
- Info: Blue-500

**Typography:**
- Headings: Space Grotesk (400-700)
- Body: DM Sans (300-700)
- Mono: Fira Code (400, 500)

**Effects:**
- Blur: 16px, 24px
- Shadow: Custom glass-card shadows
- Radius: 8px (input), 12px (button), 16px (card)
- Duration: 300ms (transitions), 6s+ (animations)

---

**Document Status:** Complete for Phase 01
**Next Update:** Phase 02 - Additional components

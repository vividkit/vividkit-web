# Phase 02: Landing Page

**Timeline:** Days 3-5
**Goal:** Migrate all landing page sections from HTML mockup

---

## Overview

Build complete landing page with 8 sections, waitlist form with Web3Forms integration, and scroll animations.

**Success Criteria:**
- Landing page matches mockup 95%+
- Form validates and submits successfully
- Smooth scroll navigation works
- Responsive 375px - 1920px
- All animations 60 FPS

---

## Components to Create

### Layout Components
1. **Header.astro** - Fixed nav, theme toggle, language selector, CTA
2. **Footer.astro** - 4-column links, logo, copyright
3. **AmbientBackground.astro** - Aurora gradient effect (fixed positioning)

### Section Components
4. **Hero.astro** - Headline, CTAs, status badge, feature checkmarks
5. **Problem.astro** - 3 problem cards (CLI barriers)
6. **Features.astro** - Solution list + app preview
7. **Pricing.astro** - Free + Pro tier cards
8. **ClaudeKit.astro** - 3 highlights + partnership CTA
9. **Commands.astro** - 9 command categories + pro tip
10. **WaitlistForm.astro** - 4 fields + Web3Forms integration

### UI Components (if needed)
11. **FeatureCard.astro** - Icon + title + description
12. **Select.astro** - Form dropdown
13. **Textarea.astro** - Form textarea

---

## Data Files to Create

**`src/data/navigation.ts`**
```typescript
export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'ClaudeKit', href: '#claudekit' },
  { label: 'Commands', href: '#commands' }
];

export const footerLinks = {
  product: [/* ... */],
  resources: [/* ... */],
  // ...
};
```

**`src/data/features.ts`**
```typescript
export const problems = [/* 3 problem cards */];
export const solutions = [/* 4 solution features */];
export const claudekitHighlights = [/* 3 highlights */];
```

**`src/data/pricing.ts`**
```typescript
export const pricingTiers = [/* Free + Pro */];
```

**`src/data/commands.ts`**
```typescript
export const commandCategories = [/* Beginner, Intermediate, Advanced */];
```

**`src/data/constants.ts`**
```typescript
export const SITE_CONFIG = {
  name: 'VividKit',
  tagline: 'Crystal clear AI coding',
  claudekitReferralUrl: import.meta.env.PUBLIC_CLAUDEKIT_REFERRAL_URL,
  // ...
};
```

---

## Web3Forms Integration

**`src/scripts/form-handler.ts`**
```typescript
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
      ...data,
      subject: 'New VividKit Waitlist Signup',
      from_name: 'VividKit Website'
    })
  });

  if (!response.ok) throw new Error('Submission failed');
  return response.json();
}
```

**WaitlistForm.astro client script:**
```typescript
const form = document.getElementById('waitlist-form');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  // Show loading state
  // Call submitWaitlistForm()
  // Show success/error message
});
```

---

## Scroll Animations

**`src/scripts/intersection-observer.ts`**
```typescript
export function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach((section) => {
    observer.observe(section);
  });
}
```

**`src/scripts/smooth-scroll.ts`**
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

## Page Structure

**`src/pages/index.astro`**
```astro
---
import MainLayout from '@/layouts/MainLayout.astro';
import Header from '@/components/layout/Header.astro';
import Footer from '@/components/layout/Footer.astro';
import AmbientBackground from '@/components/layout/AmbientBackground.astro';
import Hero from '@/components/sections/Hero.astro';
import Problem from '@/components/sections/Problem.astro';
// ... other sections
---

<MainLayout
  title="Build Anything Without Terminal Friction"
  description="VividKit brings the power of AI coding to everyone. No terminal commands. No technical barriers."
  canonical="/"
>
  <AmbientBackground />
  <Header />
  <main>
    <Hero />
    <Problem />
    <Features />
    <Pricing />
    <ClaudeKit />
    <Commands />
    <WaitlistForm />
  </main>
  <Footer />

  <script>
    import { initScrollAnimations } from '@/scripts/intersection-observer';
    import { initSmoothScroll } from '@/scripts/smooth-scroll';

    initScrollAnimations();
    initSmoothScroll();
  </script>
</MainLayout>
```

---

## Testing Checklist

- [ ] All sections render correctly
- [ ] Header fixed at top-4, z-50
- [ ] Footer links functional
- [ ] Ambient background animates smoothly
- [ ] Hero CTAs scroll to correct sections
- [ ] Problem cards show correct icons/colors
- [ ] Features section responsive (stacks on mobile)
- [ ] Pricing cards show correct features
- [ ] ClaudeKit referral link includes tracking param
- [ ] Commands section shows all 9 categories
- [ ] Waitlist form validates input
- [ ] Form submission sends email (test with real email)
- [ ] Form shows success/error states
- [ ] Smooth scroll works for all # links
- [ ] Scroll animations trigger on viewport entry
- [ ] Responsive 375px - 1920px

---

## Deliverables

- [ ] Complete landing page (`src/pages/index.astro`)
- [ ] Header component with theme toggle
- [ ] Footer component with 4-column links
- [ ] AmbientBackground component
- [ ] All 8 section components
- [ ] FeatureCard component (reusable)
- [ ] Form components (Input, Select, Textarea)
- [ ] WaitlistForm with Web3Forms integration
- [ ] All data files (navigation, features, pricing, commands)
- [ ] Form handler script
- [ ] Scroll animation scripts
- [ ] Smooth scroll script

---

## Next Phase

→ **Phase 03: Guides Page** (Days 6-7)

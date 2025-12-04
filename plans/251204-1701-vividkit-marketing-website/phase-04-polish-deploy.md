# Phase 04: Polish & Deploy

**Timeline:** Days 8-10
**Goal:** Optimize, test, and deploy to production

---

## Overview

Complete SEO implementation, run performance/accessibility audits, cross-browser testing, and deploy to Vercel with custom domain.

**Success Criteria:**
- Lighthouse scores: Performance 95+, Accessibility 95+, SEO 95+
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Zero console errors in production
- Form sends real emails successfully
- Site loads globally < 3s via Vercel CDN

---

## Task Categories

### 1. SEO Implementation

#### Create `src/pages/sitemap.xml.ts`
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

#### Create `src/pages/robots.txt.ts`
```typescript
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  return new Response(`User-agent: *
Allow: /

Sitemap: https://vividkit.com/sitemap.xml`, {
    headers: { 'Content-Type': 'text/plain' }
  });
};
```

#### Add Structured Data to SEOHead.astro
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
    "priceCurrency": "USD"
  }
};
```

#### Create Open Graph Image
- Size: 1200x630px
- VividKit logo + tagline
- Gradient background (blue → purple)
- Save as `public/og-image.png`

---

### 2. Performance Optimization

#### Image Optimization
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

#### Font Preloading
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

#### Bundle Size Optimization
```javascript
// astro.config.mjs
export default defineConfig({
  vite: {
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks: undefined // Prevent code-splitting bloat
        }
      }
    }
  }
});
```

#### Run Lighthouse Audit
```bash
npm run build
npm run preview
# Open Chrome DevTools → Lighthouse → Run audit
```

**Target Scores:**
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

---

### 3. Accessibility Testing

#### Keyboard Navigation
- Tab through all interactive elements
- Enter key submits form
- Escape closes dropdowns (if any)

#### Add Focus Styles
```css
:focus-visible {
  outline: 2px solid #3B82F6;
  outline-offset: 2px;
}
```

#### Screen Reader Testing
- Add ARIA labels to icon-only buttons
- Add alt text to all images
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- Test with NVDA (Windows) or VoiceOver (Mac)

#### Color Contrast
- Use WebAIM Contrast Checker
- Target: AAA for body text (7:1), AA for UI (4.5:1)

---

### 4. Cross-Browser Testing

Test on:
- [ ] Chrome (latest) - Desktop
- [ ] Firefox (latest) - Desktop
- [ ] Safari (latest) - macOS
- [ ] Edge (latest) - Windows
- [ ] Chrome (mobile) - Android
- [ ] Safari (mobile) - iOS

Test features:
- Glassmorphism (backdrop-filter)
- Dark mode toggle
- Form submission
- Smooth scroll
- Animations

---

### 5. Vercel Deployment

#### Connect GitHub Repository
1. Push code to GitHub
2. Import project in Vercel dashboard
3. Select `vividkit-web` repo

#### Configure Build Settings
- Framework Preset: Astro
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

#### Set Environment Variables
Add in Vercel dashboard:
- `PUBLIC_WEB3FORMS_KEY` = [your access key]
- `PUBLIC_SITE_URL` = `https://vividkit.com`
- `PUBLIC_CLAUDEKIT_REFERRAL_URL` = `https://claudekit.com?ref=vividkit`

#### Deploy
1. Click "Deploy"
2. Wait for build to complete
3. Test preview URL
4. Deploy to production

#### Custom Domain (if ready)
1. Add `vividkit.com` in Vercel dashboard
2. Update DNS records (A record to Vercel IP)
3. Wait for SSL certificate provisioning

---

### 6. Post-Deployment Verification

- [ ] Landing page loads correctly
- [ ] Guides page loads correctly
- [ ] Theme toggle works
- [ ] Form submission sends email (test with real email)
- [ ] All navigation links work
- [ ] Referral link includes tracking parameter
- [ ] Sitemap accessible (`/sitemap.xml`)
- [ ] Robots.txt accessible (`/robots.txt`)
- [ ] SSL certificate active (HTTPS)
- [ ] Lighthouse score 95+

---

### 7. Google Search Console Setup

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `vividkit.com`
3. Verify ownership (HTML file or DNS record)
4. Submit sitemap: `https://vividkit.com/sitemap.xml`
5. Monitor indexing status

---

### 8. Analytics Setup

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
Add to `SEOHead.astro`:
```html
<script defer data-domain="vividkit.com" src="https://plausible.io/js/script.js"></script>
```

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

### Visual Design
- [ ] Matches mockup design 95%+
- [ ] Glassmorphism renders correctly
- [ ] Dark mode styling consistent
- [ ] Animations smooth (60 FPS)
- [ ] Responsive 375px - 1920px

### Performance
- [ ] Lighthouse Performance: 95+
- [ ] Lighthouse Accessibility: 95+
- [ ] Lighthouse SEO: 95+
- [ ] LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] Total bundle size < 100 KB

### SEO
- [ ] Meta tags present on all pages
- [ ] Open Graph image displays correctly
- [ ] Structured data validates (Google Rich Results Test)
- [ ] Sitemap accessible and valid
- [ ] Robots.txt accessible

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Focus indicators visible
- [ ] Color contrast passes WCAG AA
- [ ] Alt text on all images

### Cross-Browser
- [ ] Chrome, Firefox, Safari, Edge (desktop)
- [ ] Chrome, Safari (mobile)

---

## Deliverables

- [ ] SEO setup complete (sitemap, robots.txt, structured data)
- [ ] Open Graph image created
- [ ] Performance optimizations applied
- [ ] Accessibility standards met (WCAG AA)
- [ ] Cross-browser testing complete
- [ ] Vercel deployment pipeline configured
- [ ] Custom domain connected (if ready)
- [ ] Analytics tracking verified
- [ ] Google Search Console setup
- [ ] README.md documentation
- [ ] DEPLOYMENT.md guide

---

## Launch Checklist

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

---

## Post-Launch (30 Days)

Track:
- Waitlist signups (goal: 100+ signups)
- Page views (landing vs guides)
- Bounce rate (target: < 50%)
- Referral link clicks (ClaudeKit conversions)
- Core Web Vitals (maintain green status)

---

**Phase Complete!** 🎉

Website ready for production launch.

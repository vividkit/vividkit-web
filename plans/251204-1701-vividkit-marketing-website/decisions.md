# Project Decisions & Answers

**Date:** 2025-12-04
**Status:** Confirmed

---

## Resolved Questions

### 1. Analytics Tool
**Decision:** Vercel Analytics (Free)
- Free tier: 10K events/month
- Zero configuration needed
- Built-in Web Vitals tracking

**Implementation:**
```bash
npm install @vercel/analytics
```

```astro
---
import { Analytics } from '@vercel/analytics/astro';
---
<Analytics />
```

---

### 2. ClaudeKit Referral URL
**Decision:** `https://claudekit.cc/?ref=OMG49S8R`

**Environment Variable:**
```bash
PUBLIC_CLAUDEKIT_REFERRAL_URL=https://claudekit.cc/?ref=OMG49S8R
```

**Usage:**
- All "Get ClaudeKit" buttons
- Partnership CTA sections
- Footer CTA

---

### 3. Domain
**Decision:** `vividkit.app` (to be purchased)

**Update all references:**
- `PUBLIC_SITE_URL=https://vividkit.app`
- Meta tags canonical URLs
- Sitemap.xml domain
- Open Graph URLs
- Structured data

**DNS Configuration (when ready):**
- Vercel dashboard → Add domain `vividkit.app`
- Update domain registrar DNS:
  - A record → Vercel IP
  - CNAME www → vividkit.app

---

### 4. Email Notifications
**Clarification:** Web3Forms will send waitlist submissions to the email you configure in your Web3Forms account dashboard.

**Setup Steps:**
1. Sign up at web3forms.com
2. Create new form
3. Configure notification email in dashboard
4. Copy access key
5. Add to `.env`: `PUBLIC_WEB3FORMS_KEY=your_key`

**Form Data Sent:**
- Name
- Email
- Role (founder/designer/developer/other)
- Message (optional)
- Timestamp
- Source: VividKit Website

---

### 5. Multi-language (Vietnamese)
**Decision:** Add Phase 5 for Vietnamese version

**Implementation Strategy:**
- Use Astro's i18n routing (`/vi/` routes)
- Share components, separate content files
- Language switcher in header (functional)
- Translation files: `src/i18n/vi.ts`, `src/i18n/en.ts`

**See:** `phase-05-vietnamese-version.md`

---

### 6. Mobile Navigation
**Decision:** Yes, add hamburger menu for mobile

**Implementation:**
- Show hamburger icon on screens < 768px (md breakpoint)
- Hide desktop nav links on mobile
- Slide-in menu panel (Alpine.js)
- Overlay backdrop when open
- Close on link click or outside click

**Component:** `src/components/layout/MobileMenu.astro`

---

### 7. Blog Section
**Decision:** Not in current scope, but design for future

**Phase 1-4:**
- No blog implementation
- Add "Blog" link in footer (disabled/coming soon)

**Future Phase 6 (Post-Launch):**
- `/blog` route with MDX content
- Blog listing page
- Individual post pages
- Categories/tags
- RSS feed

---

## Updated Environment Variables

```bash
# .env (local) and Vercel (production)

# Web3Forms API Key
PUBLIC_WEB3FORMS_KEY=your_access_key_here

# Site URL (updated to .app domain)
PUBLIC_SITE_URL=https://vividkit.app

# ClaudeKit Referral URL (confirmed)
PUBLIC_CLAUDEKIT_REFERRAL_URL=https://claudekit.cc/?ref=OMG49S8R
```

---

## Implementation Impact

### Phase 1 (Foundation)
- Update `SITE_CONFIG` constant with `vividkit.app`
- Update all meta tag base URLs

### Phase 2 (Landing Page)
- Header: Add mobile menu toggle button (hidden on desktop)
- Create MobileMenu component
- Update ClaudeKit referral links to confirmed URL
- Test referral tracking parameter

### Phase 3 (Guides Page)
- Mobile menu works on guides page
- Language switcher visible (links to Phase 5 implementation)

### Phase 4 (Polish & Deploy)
- Vercel Analytics integration
- Update all SEO references to `vividkit.app`
- Test mobile menu across all breakpoints
- Verify referral link tracking

### Phase 5 (Vietnamese Version)
- **NEW:** Full Vietnamese translation
- i18n routing setup
- Language switcher functional
- Separate content files for VI/EN

---

**Decisions Confirmed:** ✅ All questions resolved
**Plan Updated:** ✅ Phase 5 added
**Ready for Implementation:** ✅ Yes

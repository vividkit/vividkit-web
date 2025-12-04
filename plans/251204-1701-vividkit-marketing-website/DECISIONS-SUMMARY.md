# Quick Decisions Summary

**Date:** 2025-12-04
**Status:** ✅ All Confirmed

---

## Key Updates

1. **Domain:** `vividkit.app` (not .com)
2. **ClaudeKit Referral:** `https://claudekit.cc/?ref=OMG49S8R`
3. **Analytics:** Vercel Analytics (free)
4. **Mobile Menu:** Yes (hamburger for < 768px)
5. **Vietnamese Version:** Phase 5 (Days 11-13)
6. **Blog:** Not in scope (future Phase 6)

---

## Environment Variables

```bash
PUBLIC_WEB3FORMS_KEY=your_key_here
PUBLIC_SITE_URL=https://vividkit.app
PUBLIC_CLAUDEKIT_REFERRAL_URL=https://claudekit.cc/?ref=OMG49S8R
```

---

## Updated Timeline

**Total:** 8-13 working days

- Phase 1: Foundation (Days 1-2)
- Phase 2: Landing Page (Days 3-5) 
- Phase 3: Guides Page (Days 6-7)
- Phase 4: Polish & Deploy (Days 8-10)
- Phase 5: Vietnamese i18n (Days 11-13)

---

## Implementation Notes

### Header Component
- Add mobile hamburger menu
- Language switcher functional (EN/VI)

### All URLs
- Update from vividkit.com → vividkit.app
- ClaudeKit referral uses confirmed URL

### Phase 2 Additions
- MobileMenu.astro component
- Responsive nav (hidden desktop links on mobile)

### Phase 5 (Vietnamese)
- i18n routing: `/` (EN), `/vi/` (VI)
- Separate content files: `src/data/en/*`, `src/data/vi/*`
- Translation files: `src/i18n/en.ts`, `src/i18n/vi.ts`
- All components accept `lang` prop
- SEO with `hreflang` tags

---

See full details in:
- `decisions.md` - Complete decision documentation
- `phase-05-vietnamese-version.md` - Vietnamese implementation guide

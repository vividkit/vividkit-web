# Phase 07: Testing & Refinement

**Phase:** 07 of 07
**Status:** Pending
**Est. Time:** 30 minutes
**Dependencies:** Phase 06 complete

---

## Context

Final testing phase to ensure all integrated components work correctly across devices, browsers, and color modes. Also includes performance optimization and accessibility checks.

---

## Overview

Comprehensive testing checklist covering:
- Visual rendering
- Responsive behavior
- Dark/light mode
- Animations
- Accessibility
- Performance
- Build verification

---

## Testing Checklist

### 1. Visual Rendering Tests

#### Desktop (1920x1080)
- [ ] CLI Guide section renders correctly
- [ ] Terminal mockup displays properly
- [ ] Workflows grid aligns correctly
- [ ] Slash Commands cards display
- [ ] UI/UX Pro Max section complete
- [ ] All icons render (no broken images)
- [ ] Gradients display correctly

#### Tablet (768x1024)
- [ ] Grids collapse to 2-column where appropriate
- [ ] Cards stack properly
- [ ] Terminal mockup responsive
- [ ] Journey steps readable
- [ ] No horizontal overflow

#### Mobile (375x812)
- [ ] All grids collapse to single column
- [ ] Text readable without zoom
- [ ] Touch targets adequate (44px minimum)
- [ ] Terminal content scrollable
- [ ] Stats wrap correctly

### 2. Dark/Light Mode Tests

#### Dark Mode
- [ ] Background colors correct
- [ ] Text contrast sufficient
- [ ] Glass cards visible
- [ ] Terminal window styled
- [ ] Gradient overlays visible
- [ ] All badges readable

#### Light Mode
- [ ] Background colors correct
- [ ] Text contrast sufficient
- [ ] Cards have proper shadows/borders
- [ ] Terminal has contrast
- [ ] Gradients appropriate
- [ ] No invisible text

### 3. Animation Tests

- [ ] fade-in-up triggers on scroll
- [ ] Stagger delays work correctly
- [ ] flow-arrow animates
- [ ] cursor-blink works in terminal
- [ ] Floating animation smooth
- [ ] pulse-glow subtle
- [ ] No janky transitions
- [ ] Animations respect prefers-reduced-motion

### 4. Accessibility Tests

#### WCAG AA Compliance
- [ ] Color contrast 4.5:1 minimum for text
- [ ] Interactive elements have focus states
- [ ] Skip links work (if present)
- [ ] Headings follow hierarchy (h2, h3, h4)
- [ ] Code blocks accessible to screen readers
- [ ] Images have alt text (icons excluded)
- [ ] Links are distinguishable

#### Keyboard Navigation
- [ ] Tab order logical
- [ ] Focus visible on all interactive elements
- [ ] No keyboard traps
- [ ] CTA buttons focusable

#### Screen Reader Test
- [ ] Section headings announced
- [ ] Code blocks readable
- [ ] Badge content accessible

### 5. Performance Tests

#### Lighthouse Audit
- [ ] Performance > 90
- [ ] Accessibility > 90
- [ ] Best Practices > 90
- [ ] SEO > 90

#### Core Web Vitals
- [ ] LCP < 2.5s (Largest Contentful Paint)
- [ ] FID < 100ms (First Input Delay)
- [ ] CLS < 0.1 (Cumulative Layout Shift)

#### Asset Size Check
- [ ] Total CSS reasonable (< 100KB)
- [ ] No unused CSS (Tailwind purges)
- [ ] Icons use lucide-astro (optimized)
- [ ] No large images

### 6. Build & Deploy Tests

```bash
# Clean build
npm run build

# Preview production build
npm run preview

# Type check
npm run typecheck
```

- [ ] Build completes without errors
- [ ] No TypeScript errors
- [ ] Preview runs correctly
- [ ] All pages render in production mode

### 7. Cross-Browser Tests

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] iOS Safari
- [ ] Chrome Android

---

## Common Issues & Fixes

### Issue: Text contrast too low in light mode
**Fix:** Add `dark:` variant for text colors or use darker base colors

### Issue: Grid items different heights
**Fix:** Use `items-stretch` or set min-height

### Issue: Animation janky
**Fix:** Use `transform` and `opacity` only, add `will-change`

### Issue: Terminal overflow on mobile
**Fix:** Add `overflow-x-auto` to terminal content

### Issue: Stats wrap poorly
**Fix:** Use `flex-wrap` with appropriate gap

### Issue: Icons missing
**Fix:** Verify lucide-astro import, check icon names

---

## Refinement Tasks

Based on testing results, common refinements may include:

1. **Spacing Adjustments:** Fine-tune padding/margins for visual balance
2. **Color Tweaks:** Adjust opacity values for better contrast
3. **Typography:** Increase/decrease font sizes for readability
4. **Animation Timing:** Adjust delays/durations for smoother feel
5. **Border Radius:** Consistency across cards
6. **Shadow Depth:** Light mode shadow visibility

---

## Performance Optimization

### If Performance < 90

1. **Lazy Load Animations:**
```astro
<div class="fade-in-up" data-animate>
  <!-- Content -->
</div>
```

2. **Defer Non-Critical CSS:**
```html
<link rel="preload" href="/styles/animations.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

3. **Optimize Images:**
```astro
import { Image } from 'astro:assets';
<Image src={myImage} alt="..." loading="lazy" />
```

4. **Check Bundle Size:**
```bash
npm run build -- --stats
```

---

## Accessibility Fixes

### Color Contrast Tool
Use browser DevTools or WebAIM Contrast Checker

### Focus States
```css
:focus-visible {
  @apply outline-2 outline-offset-2 outline-blue-500;
}
```

### Skip Link (if missing)
```astro
<a href="#main-content" class="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

---

## Todo Checklist

- [ ] Desktop visual test
- [ ] Tablet visual test
- [ ] Mobile visual test
- [ ] Dark mode test
- [ ] Light mode test
- [ ] Animation test
- [ ] WCAG contrast test
- [ ] Keyboard navigation test
- [ ] Lighthouse audit
- [ ] Build test
- [ ] Chrome test
- [ ] Firefox test
- [ ] Safari test
- [ ] Apply refinements
- [ ] Final build verification

---

## Success Criteria

- [ ] All visual tests pass
- [ ] Dark/light modes both work
- [ ] Animations smooth
- [ ] Lighthouse > 90 all categories
- [ ] No accessibility violations
- [ ] Build successful
- [ ] Cross-browser compatible

---

## Sign-Off Checklist

Before marking integration complete:

- [ ] All 4 sections integrated
- [ ] Responsive on all devices
- [ ] Both color modes tested
- [ ] Animations working
- [ ] Accessibility compliant
- [ ] Performance optimized
- [ ] Build successful
- [ ] No TypeScript errors
- [ ] Code follows project patterns

---

## Post-Integration Notes

Document any:
- Deviations from original mockups
- Compromises made for performance
- Known issues for future improvement
- Recommended follow-up tasks

---

## Completion

Once all tests pass and refinements are applied, the integration is complete. Update the main `plan.md` status to "Completed" and document any remaining issues or recommendations.

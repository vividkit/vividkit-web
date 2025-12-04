# Theme Toggle Debug Report

**Date:** 2025-12-05
**Issue:** Theme toggle button does not switch between light/dark mode
**Severity:** Medium - UI functionality broken

---

## Root Cause Analysis

### Primary Issue: Duplicate Script Implementation

**Critical conflict identified:** Two separate theme toggle implementations exist and conflict with each other:

1. **Inline script in Header.astro** (lines 120-183)
   - Implements full theme toggle with event listener
   - Manages localStorage persistence
   - Controls icon visibility

2. **External module theme-toggle.ts**
   - Called via MainLayout.astro (line 75)
   - Only initializes theme from storage/system prefs
   - **Does NOT attach click handler**
   - **Does NOT include toggle logic**

### The Fatal Flaw

**theme-toggle.ts is incomplete.** It:
- ✅ Reads theme from localStorage/system prefs
- ✅ Applies initial theme class to `<html>`
- ✅ Updates icons on load
- ✅ Listens for system theme changes
- ❌ **MISSING:** Click event listener for `#theme-toggle` button
- ❌ **MISSING:** Toggle logic to switch themes on button click

### Execution Flow Problem

```
1. MainLayout.astro loads theme-toggle.ts (line 75)
   └─> initThemeToggle() runs
       └─> Sets initial theme ✓
       └─> Updates icons ✓
       └─> NO CLICK HANDLER ✗

2. Header.astro inline script loads (lines 120-183)
   └─> Attaches click handler to #theme-toggle ✓
   └─> BUT this script loads AFTER theme-toggle.ts
   └─> Script execution order causes race condition
```

### Script Loading Conflict

**MainLayout.astro (lines 67-91):**
```javascript
Promise.all([
  import('/src/scripts/theme-toggle.ts'),  // Loads first
  import('/src/scripts/intersection-observer.ts'),
  import('/src/scripts/nav-scroll-highlight.ts')
]).then(([{ initThemeToggle }, ...]) => {
  initThemeToggle();  // Runs immediately
  ...
})
```

**Header.astro (lines 120-183):**
```javascript
<script is:inline>
  // This runs later when Header component loads
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    // Toggle logic here
  });
</script>
```

**Race condition:** If `theme-toggle.ts` runs after Header's inline script, the inline script's handlers may be overwritten or fail to attach properly.

---

## Secondary Issues

### 1. Code Duplication
Both scripts contain nearly identical:
- Icon update logic (`updateThemeIcons()` vs `updateIcons()`)
- Theme detection logic
- MutationObserver for class changes

### 2. Potential Icon Flashing
Two separate processes updating same icons could cause flashing/inconsistent state.

### 3. No Console Errors (Likely)
Scripts don't throw errors - button just silently fails because:
- `theme-toggle.ts` initializes theme correctly
- Header inline script attaches listener
- But conflicts prevent proper execution

---

## Evidence

### File Analysis

**theme-toggle.ts (48 lines):**
- Function: `initThemeToggle()`
- Features: Initial theme setup, icon updates, system preference listener
- **Missing:** Click event handler, toggle logic

**Header.astro inline script (63 lines, starting line 120):**
- Mobile menu toggle ✓
- Theme toggle click handler ✓
- Icon update function ✓
- MutationObserver ✓

**MainLayout.astro:**
- Calls `initThemeToggle()` on line 75
- FOUC prevention script (lines 50-61) works correctly
- Theme initialization happens twice (FOUC script + theme-toggle.ts)

### Tailwind Config
```javascript
darkMode: 'selector'  // Correct - uses .dark class
```
✓ CSS framework configured properly

### CSS Implementation
- 172 `dark:` variants across 22 files
- Classes like `dark:bg-surface-950`, `dark:text-slate-100` present
- ✓ Styles exist and work when class applied manually

---

## Recommended Solutions

### Option A: Complete theme-toggle.ts (Preferred)
Move all logic to `theme-toggle.ts`, remove Header inline script.

**Pros:**
- Single source of truth
- Cleaner architecture
- Easier to maintain
- No race conditions

**Implementation:**
1. Add click handler to `theme-toggle.ts`
2. Export toggle function
3. Remove Header inline script (lines 120-183)
4. Keep mobile menu handler separate

### Option B: Remove theme-toggle.ts
Use only Header inline script.

**Pros:**
- Simpler - everything in one place
- No module loading complexity
- Guaranteed execution order

**Cons:**
- Less modular
- Harder to reuse across pages

### Option C: Coordinate Both Scripts
Keep both but ensure no conflicts.

**Pros:**
- Minimal changes needed

**Cons:**
- Still maintains duplication
- Complex debugging
- Risk of future conflicts

---

## Verification Steps

To confirm diagnosis:

1. **Test inline script isolation:**
   ```javascript
   // Add to Header inline script
   console.log('Header script loaded');
   themeToggle.addEventListener('click', () => {
     console.log('Toggle clicked');
   });
   ```

2. **Test theme-toggle.ts:**
   ```javascript
   // Add to initThemeToggle()
   console.log('initThemeToggle called');
   ```

3. **Manual theme test:**
   ```javascript
   // Console command
   document.documentElement.classList.toggle('dark');
   ```
   Expected: Theme switches immediately
   Confirms CSS/class system works

4. **Check event listeners:**
   ```javascript
   // Console command
   getEventListeners(document.getElementById('theme-toggle'));
   ```
   Should show click listeners attached

---

## Unresolved Questions

1. Why was `theme-toggle.ts` created incomplete?
2. Was Header inline script added as hotfix?
3. Are there other pages using theme-toggle.ts that work differently?
4. Performance impact of duplicate MutationObservers?

---

## Related Files

- `/Users/thieunv/projects/personal/vividkit-web/src/components/layout/Header.astro` (lines 76-89, 120-183)
- `/Users/thieunv/projects/personal/vividkit-web/src/scripts/theme-toggle.ts`
- `/Users/thieunv/projects/personal/vividkit-web/src/layouts/MainLayout.astro` (lines 50-61, 67-91)
- `/Users/thieunv/projects/personal/vividkit-web/tailwind.config.mjs` (line 3)
- `/Users/thieunv/projects/personal/vividkit-web/src/styles/global.css`

---

## Next Steps

1. Choose implementation approach (recommend Option A)
2. Implement solution
3. Test across all pages
4. Verify no console errors
5. Test FOUC prevention still works
6. Verify system preference changes still detected
7. Test localStorage persistence

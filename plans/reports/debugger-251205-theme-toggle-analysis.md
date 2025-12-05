# Theme Toggle Issue Report

## Root Cause Analysis

The theme toggle functionality is implemented using `localStorage` and `document.documentElement.classList` modification. The `initThemeToggle` function correctly handles toggling the `dark` class on the `<html>` element and persisting the preference to `localStorage`.

However, the observed issue where "theme switching does not change effect or colors" (despite the class toggling correctly) is likely due to Tailwind CSS v4 configuration.

The project is using Tailwind CSS v4 (indicated by `@import 'tailwindcss'` and `@theme` block in `global.css`).
In `tailwind.config.mjs`, the configuration includes:
```javascript
export default {
  darkMode: 'selector',
  // ...
}
```

But in Tailwind v4, the configuration mechanism has changed significantly. The `tailwind.config.mjs` file is often used for backward compatibility or specific plugin configurations, but v4 largely relies on CSS-first configuration.

The critical issue is likely in how the `dark:` variant is being detected by Tailwind v4.

1.  **Tailwind v4 Dark Mode:** By default, Tailwind v4 uses `media` strategy (prefers-color-scheme). To use the `class` strategy (which this project implements via the `dark` class on `html`), you must explicitly enable it in the CSS configuration if you are using the new system, OR rely on the JS config if it's properly picked up.

2.  **Missing CSS Config for Dark Mode:** In `src/styles/global.css`, there is no explicit configuration telling Tailwind to use the selector strategy for dark mode. While `tailwind.config.mjs` has `darkMode: 'selector'`, if the build process is using the new Lightning CSS engine (common in v4 setups) without fully respecting the legacy config for this specific property, or if there's a conflict, it might default to system preference.

3.  **Potential Conflict:** The `global.css` uses `@theme` to define variables. It does NOT seem to be using the legacy `@config` directive to point to the JS config, nor does it have a `darkMode` setting in the CSS itself.

**Hypothesis:** The `darkMode: 'selector'` in `tailwind.config.mjs` is not being correctly applied or respected by the Tailwind v4 compiler in this Astro setup, causing Tailwind to default to `media` strategy. This means checking `prefers-color-scheme` instead of the `class="dark"` on the HTML element.

## Verification Steps (Simulated)

If we were to test this:
1.  Clicking the toggle adds `class="dark"` to `<html>`.
2.  The `localStorage` updates to `dark`.
3.  BUT the styles (e.g., `dark:bg-surface-950`) do not apply if the OS system theme is Light.

## Proposed Fix

We need to ensure Tailwind v4 knows we are using the selector strategy.

**Option 1: Force Selector Strategy in CSS (Recommended for v4)**
Add the custom variant definition or ensure the configuration is loaded. However, the standard way in v4 to force class-based dark mode is often just ensuring the config is correct or adding a specific variant.

In Tailwind v4, you can specify the dark mode strategy in the CSS directly if you are moving away from JS config, but since we have a JS config, we should ensure it's linked.

However, the simplest fix that aligns with the current codebase structure (using `tailwind.config.mjs`) is to verify the content paths and ensure the config is actually being used.

A more robust fix for v4's purely CSS approach would be adding this to `src/styles/global.css` inside the `@custom-variant` if it existed, but v4 usually detects `darkMode: 'selector'` from the config if linked.

Wait, looking at `src/styles/global.css`:
```css
@import 'tailwindcss';

@theme {
  /* ... */
}
```

It does NOT import the config. In Tailwind v4, you often need to explicitly link the config in the CSS file if you want it to be respected, using `@config`.

**Correction:** The `tailwind.config.mjs` might be ignored by the CSS-native `@import 'tailwindcss'` unless explicitly referenced.

**Fix Action:**
Add `@config "../../tailwind.config.mjs";` to `src/styles/global.css`.

## Implementation

I will modify `src/styles/global.css` to explicitly include the Tailwind configuration file. This ensures the `darkMode: 'selector'` setting is respected.

```css
/* src/styles/global.css */
@import 'tailwindcss';
@config "../../tailwind.config.mjs"; /* Add this line */

@theme {
  /* ... */
}
```

This connects the CSS processing with the JS configuration that defines the dark mode strategy.

## Additional Observation
The commit `c38c2d9` improved the JS logic but didn't touch the CSS configuration which handles the *application* of those styles.

Let's apply the fix.

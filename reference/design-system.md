# VividKit Design System & Guidelines

This document outlines the design system, visual language, and component guidelines for the VividKit application and documentation. It is based on the implementation in `vividkit-app.html` and `guides.html`.

## 1. Typography

We use a three-font stack to differentiate between headings, body text, and code.

### Font Families

| Type | Font Family | Tailwind Class | Weights Used |
|------|-------------|----------------|--------------|
| **Headings** | `Space Grotesk`, sans-serif | `font-heading` | 400, 500, 600, 700 |
| **Body** | `DM Sans`, sans-serif | `font-sans` | 300, 400, 500, 600, 700 |
| **Code** | `Fira Code`, monospace | `font-mono` | 400, 500 |

### Usage Guidelines

*   **Headings:** Use `font-heading` for all `h1` through `h6` elements.
*   **Body:** Use `font-sans` for paragraphs, lists, and general UI text.
*   **Code:** Use `font-mono` for code blocks, inline code snippets, and terminal outputs.

---

## 2. Color Palette

The design uses a refined slate palette for surfaces and text, with vibrant gradients for branding and accents.

### Surface Colors (Custom Tailwind Config)

| Name | Hex | Usage |
|------|-----|-------|
| `surface-50` | `#f8fafc` | Light mode background |
| `surface-100` | `#f1f5f9` | Light mode secondary backgrounds |
| `surface-800` | `#1e293b` | Dark mode secondary elements |
| `surface-900` | `#0f172a` | Dark mode cards/sections |
| `surface-950` | `#020617` | Dark mode main background |

### Brand Gradients

*   **VividKit Primary:** `bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500`
    *   *Usage:* Logo text, main brand accents.
*   **Hero Gradient 1:** `bg-gradient-to-r from-blue-500 to-purple-500`
*   **Hero Gradient 2:** `bg-gradient-to-r from-purple-500 to-pink-500`

### Semantic Colors

| Role | Color Family | Tailwind Classes (Light/Dark) |
|------|--------------|-------------------------------|
| **Primary Action** | Blue | `text-blue-600` / `text-blue-400` |
| **Success / Beginner** | Green | `text-green-600` / `text-green-400` |
| **Warning / Intermediate** | Amber/Orange | `text-amber-600` / `text-amber-400` |
| **Danger / Advanced** | Red | `text-red-600` / `text-red-400` |
| **Planning** | Purple | `text-purple-600` / `text-purple-400` |
| **Text Primary** | Slate | `text-slate-900` / `text-slate-100` |
| **Text Secondary** | Slate | `text-slate-600` / `text-slate-400` |
| **Text Muted** | Slate | `text-slate-500` |

---

## 3. Glassmorphism & Cards

The core visual style relies heavily on glassmorphism to create depth and a modern feel.

### Glass Card Classes

**`.glass-card`**
*   **Light:** White (0.8 opacity), Blur 24px, Border Slate-200
*   **Dark:** Slate-900 (0.6 opacity), Blur 24px, Border White (0.1 opacity)

**`.glass-card-light`** (Subtler version)
*   **Light:** Slate-50 (0.9 opacity), Blur 16px
*   **Dark:** Slate-800 (0.4 opacity), Blur 16px

**`.glass-card-hover`**
*   Adds hover effects: Scale, Border lighten, Shadow increase.

### CSS Implementation

```css
/* Dark Mode Glass Cards */
.dark .glass-card {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Light Mode Glass Cards */
.glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(226, 232, 240, 1);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
```

---

## 4. UI Components

### Buttons (CTA)

*   **Style:** Gradient background, rounded corners, shadow on hover.
*   **Class:** `.cta-button`
*   **CSS:**
    ```css
    .cta-button {
      background: linear-gradient(to right, #2563EB, #3B82F6);
      transition: all 0.3s ease-out;
    }
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
    }
    ```

### Form Inputs

*   **Style:** Large padding, rounded corners, subtle border.
*   **Classes:**
    ```html
    class="w-full px-5 py-4 rounded-xl bg-white dark:bg-surface-950 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
    ```

### Navigation Links

*   **Normal:** Slate-500 (Light) / Slate-400 (Dark)
*   **Hover:** Blue-600 + Light Blue Background tint
*   **Active:** Blue-600 + Blue Background tint (stronger)
*   **CSS:**
    ```css
    .nav-link:hover { color: #2563eb; background: rgba(37, 99, 235, 0.05); }
    .nav-link.active { color: #2563eb; background: rgba(37, 99, 235, 0.1); }
    ```

### Feature Cards

*   **Structure:** Icon (in colored container) + Title + Description.
*   **Hover:** `transform: translateY(-4px)` and colored border/shadow glow matching the feature color.

---

## 5. Effects & Animations

### Keyframes

1.  **`gradient-flow`**: Animates background position for gradients (used in aurora backgrounds).
2.  **`float`**: Gentle vertical floating for hero images/icons.
3.  **`pulse-glow`**: Opacity pulse for status indicators.
4.  **`fade-in-up`**: Entry animation for sections and hero elements.

### Utility Classes

*   `.gradient-animate`: Applies `gradient-flow` (8s infinite).
*   `.float-animation`: Applies `float` (6s infinite).
*   `.pulse-glow`: Applies `pulse-glow` (3s infinite).
*   `.fade-in-up`: Applies `fade-in-up` (0.6s forwards).

---

## 6. Layout & Spacing

*   **Page Container:** `max-w-6xl mx-auto px-6`
*   **Section Spacing:** `py-24` (96px)
*   **Element Spacing:**
    *   Cards: `p-6` or `p-8`
    *   Grid Gaps: `gap-6`, `gap-8`, `gap-12`
*   **Border Radius:**
    *   Cards: `rounded-2xl` or `rounded-3xl`
    *   Buttons/Inputs: `rounded-xl`
    *   Small Elements: `rounded-lg`

## 7. Implementation Checklist

When creating new pages or components, ensure:

1.  [ ] **Dark Mode Support:** All colors must have `dark:` variants (especially text and borders).
2.  [ ] **Font Consistency:** Use `font-heading` for titles and `font-sans` for body.
3.  [ ] **Glassmorphism:** Use `.glass-card` for main containers to maintain depth.
4.  [ ] **Accessibility:** Ensure sufficient contrast for text (Slate-500 minimum for small text).
5.  [ ] **Motion:** Add `fade-in-up` to main sections for smooth entry.

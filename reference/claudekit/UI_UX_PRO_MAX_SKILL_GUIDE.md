# UI/UX Pro Max - Complete Guide

## Overview

The **UI/UX Pro Max** skill is a comprehensive design intelligence system that provides instant access to:

- 🎨 **50 UI Styles** - From glassmorphism to brutalism
- 🌈 **21 Color Palettes** - Industry-specific color schemes
- ✍️ **50 Font Pairings** - Google Fonts combinations with imports
- 📊 **20 Chart Types** - Dashboard and analytics components
- 🏗️ **8 Tech Stacks** - React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, HTML/Tailwind
- 📄 **Landing Page Structures** - Proven page layouts and CTA strategies
- ♿ **UX Guidelines** - Best practices and anti-patterns

This skill uses a **BM25 search engine** to intelligently match your design requirements with curated design systems, ensuring professional, accessible, and beautiful UI/UX.

---

## Using with ClaudeKit

### How to Activate the Skill

Simply mention the skill in your prompt using natural language:

```
Using ui-ux-pro-max skill, <your request>
```

### Example ClaudeKit Prompts

#### 1. **Create a Complete Landing Page**

```
Using ui-ux-pro-max skill, create a landing page for a luxury skincare spa.
Make it elegant, minimal, and professional.
```

**What happens:**
- Claude will automatically search relevant domains (product, style, typography, color, landing, ux)
- Apply the design system to create a complete HTML page
- Follow all best practices and accessibility guidelines

#### 2. **Design with a Specific Style**

```
Using ui-ux-pro-max skill, build a SaaS dashboard with glassmorphism style.
Include charts for analytics.
```

**What happens:**
- Searches glassmorphism style guide
- Gets SaaS color palette
- Recommends appropriate chart types
- Implements with proper effects and contrast

#### 3. **Get Design Recommendations**

```
Using ui-ux-pro-max skill, I'm building an e-commerce site for luxury watches.
What design approach should I use?
```

**What happens:**
- Searches product domain for luxury e-commerce
- Suggests appropriate styles (minimalism, elegance)
- Recommends color palettes and typography
- Provides landing page structure advice

#### 4. **Fix UI/UX Issues**

```
Using ui-ux-pro-max skill, review my landing page and improve it.
Make sure it follows modern UI/UX best practices.
```

**What happens:**
- Checks against UX guidelines database
- Verifies accessibility compliance
- Suggests improvements based on style guides
- Fixes common anti-patterns (emojis, contrast, hover states)

### ClaudeKit Workflow

When you mention the skill in your prompt, here's what Claude does:

1. **Analyzes Your Request** → Extracts product type, style preferences, industry
2. **Searches Multiple Domains** → Automatically queries relevant databases
3. **Synthesizes Design System** → Combines style + typography + color + structure
4. **Implements Code** → Creates production-ready HTML/CSS/JS
5. **Validates Quality** → Checks against pre-delivery checklist

### Smart Defaults

- **Stack**: Defaults to `html-tailwind` unless you specify React, Vue, Next.js, etc.
- **Search Depth**: Automatically determines how many domains to search
- **Results**: Gets top 3 recommendations per domain (optimal for quality)

### Usage Examples by Request Type

| Your Request | What Claude Does | Domains Searched |
|--------------|------------------|------------------|
| "Create a landing page for X" | Full design + implementation | product → style → typography → color → landing → ux |
| "Use glassmorphism style" | Apply specific style guide | style → color → ux |
| "Make it accessible" | Check accessibility patterns | ux (accessibility) |
| "Add a dashboard with charts" | Get chart recommendations | chart → style → ux |
| "Build with React" | Use React-specific patterns | --stack react |

### Tips for Better Results

✅ **Be Specific About Your Product**
```
❌ "Create a website"
✅ "Create a landing page for a healthcare telemedicine app"
```

✅ **Mention Style Preferences**
```
❌ "Make it look good"
✅ "Use minimalist design with elegant typography"
```

✅ **Specify Your Tech Stack**
```
❌ Generic implementation
✅ "Build with Next.js and Tailwind"
```

✅ **Combine Multiple Requirements**
```
Using ui-ux-pro-max skill, create a dark mode dashboard for a fintech SaaS.
Include trend analysis charts. Use glassmorphism style. Build with React.
```


---

## Quick Start

### Prerequisites

Ensure Python 3 is installed:

```bash
python3 --version
```

If not installed:

**macOS:**
```bash
brew install python3
```

**Ubuntu/Debian:**
```bash
sudo apt update && sudo apt install python3
```

**Windows:**
```powershell
winget install Python.Python.3.12
```

---

## How to Use This Skill

### Basic Command Structure

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]
```

**Parameters:**
- `<keyword>` - Your search query (e.g., "elegant minimal", "healthcare dashboard")
- `--domain` or `-d` - Search domain (style, color, typography, etc.)
- `--stack` or `-s` - Technology stack (html-tailwind, react, nextjs, etc.)
- `--max-results` or `-n` - Number of results (default: 3)
- `--json` - Output as JSON format

---

## Available Domains

### 1. **Product** (`--domain product`)
**Use for:** Get style recommendations based on product type and industry

**Example keywords:**
- `"SaaS dashboard"`
- `"e-commerce luxury"`
- `"healthcare app"`
- `"beauty spa wellness"`
- `"fintech banking"`
- `"education platform"`

**Returns:** Recommended styles, color palettes, suitable UI patterns

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "healthcare SaaS" --domain product
```

---

### 2. **Style** (`--domain style`)
**Use for:** Get detailed style guides with colors, effects, and frameworks

**Example keywords:**
- `"glassmorphism"`
- `"minimalism"`
- `"dark mode"`
- `"brutalism"`
- `"neumorphism"`
- `"claymorphism"`
- `"bento grid"`

**Returns:**
- Visual characteristics
- Recommended color schemes
- CSS effects and techniques
- Best use cases
- Accessibility notes
- Framework compatibility ratings

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "glassmorphism modern" --domain style
```

---

### 3. **Typography** (`--domain typography`)
**Use for:** Get professional font pairings with Google Fonts imports

**Example keywords:**
- `"elegant luxury"`
- `"modern professional"`
- `"playful friendly"`
- `"tech startup"`
- `"editorial classic"`

**Returns:**
- Heading + Body font pairs
- Google Fonts share link
- CSS `@import` statement
- Tailwind config snippet
- Use case recommendations

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "modern professional" --domain typography
```

---

### 4. **Color** (`--domain color`)
**Use for:** Get complete color palettes for specific product types

**Example keywords:**
- `"saas"`
- `"ecommerce"`
- `"healthcare"`
- `"beauty spa"`
- `"fintech"`
- `"luxury brand"`

**Returns:**
- Primary color (HEX)
- Secondary color (HEX)
- CTA/Accent color (HEX)
- Background color (HEX)
- Text color (HEX)
- Border color (HEX)
- Usage notes

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "healthcare wellness" --domain color
```

---

### 5. **Landing** (`--domain landing`)
**Use for:** Get proven landing page structures and conversion strategies

**Example keywords:**
- `"hero-centric"`
- `"product showcase"`
- `"testimonial social-proof"`
- `"pricing comparison"`
- `"feature-rich"`

**Returns:**
- Page structure layout
- Section order
- CTA placement strategies
- Conversion optimization tips
- Visual hierarchy

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "hero-centric saas" --domain landing
```

---

### 6. **Chart** (`--domain chart`)
**Use for:** Get chart type recommendations for dashboards and analytics

**Example keywords:**
- `"trend analysis"`
- `"comparison"`
- `"timeline progress"`
- `"funnel conversion"`
- `"pie distribution"`

**Returns:**
- Recommended chart libraries
- Chart type specifications
- Best use cases
- Data visualization tips

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "trend analysis dashboard" --domain chart
```

---

### 7. **UX** (`--domain ux`)
**Use for:** Get best practices and avoid anti-patterns

**Example keywords:**
- `"animation"`
- `"accessibility"`
- `"z-index"`
- `"loading states"`
- `"error handling"`
- `"form validation"`

**Returns:**
- Do's and Don'ts
- Accessibility guidelines
- Performance tips
- Common pitfalls to avoid

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "animation micro-interactions" --domain ux
```

---

### 8. **Stack Guidelines** (`--stack <stack_name>`)
**Use for:** Get technology-specific implementation best practices

**Available stacks:**
- `html-tailwind` - Tailwind utilities, responsive design, accessibility (DEFAULT)
- `react` - State management, hooks, performance patterns
- `nextjs` - SSR, routing, images, API routes
- `vue` - Composition API, Pinia stores, Vue Router
- `svelte` - Runes, stores, SvelteKit
- `swiftui` - Views, State, Navigation, Animation
- `react-native` - Components, Navigation, FlatList
- `flutter` - Widgets, State management, Layout, Theming

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "responsive layout" --stack html-tailwind
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "state management" --stack react
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "animation" --stack svelte
```

---

## ClaudeKit Complete Example

### Scenario: User Request via ClaudeKit

**User's Prompt:**
```
Using ui-ux-pro-max skill, create a modern landing page for my AI-powered
project management SaaS. I want a clean, professional look with dark mode support.
```


### Behind the Scenes: What Claude Does

#### Step 1: Extract Requirements
- **Product**: SaaS (AI-powered project management)
- **Style**: Modern, clean, professional
- **Features**: Dark mode support
- **Stack**: Not specified → defaults to `html-tailwind`

#### Step 2: Search Design Intelligence

```bash
# Product recommendations
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "saas project management" --domain product

# Style guide
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "modern clean professional" --domain style

# Typography
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "modern professional tech" --domain typography

# Color palette for SaaS
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "saas" --domain color

# Landing page structure
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "hero-centric feature-rich" --domain landing

# Dark mode best practices
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "dark mode" --domain style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "accessibility contrast" --domain ux

# HTML/Tailwind patterns
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "dark mode toggle responsive" --stack html-tailwind
```

#### Step 3: Synthesize Design System

Based on search results, Claude would get:

**Typography:**
- Heading: `Inter` or `Space Grotesk`
- Body: `DM Sans` or `Inter`
- Google Fonts import ready

**Colors:**
- Primary: `#2563EB` (Trust blue)
- Secondary: `#3B82F6`
- CTA: `#F97316` (Orange accent)
- Background Light: `#F8FAFC`
- Background Dark: `#0F172A`
- Text Light: `#1E293B`
- Text Dark: `#F1F5F9`

**Style Characteristics:**
- Clean minimalist design
- Smooth transitions (200-300ms)
- Subtle shadows and borders
- Glassmorphic elements (optional)
- Responsive grid layouts

**Landing Structure:**
- Hero section with clear value proposition
- Feature showcase (3-4 key features)
- Social proof / testimonials
- Pricing section
- CTA throughout

#### Step 4: Implementation

Claude creates a complete HTML file with:
- ✅ Semantic HTML5 structure
- ✅ Tailwind CSS with custom theme
- ✅ Dark mode toggle with persistence
- ✅ Responsive design (mobile-first)
- ✅ SVG icons (Heroicons)
- ✅ Smooth animations
- ✅ Accessibility attributes (ARIA)
- ✅ Modern best practices

#### Step 5: Quality Check

Before delivery, validates against checklist:
- No emoji icons ✅
- Proper cursor pointers ✅
- Light/dark contrast 4.5:1+ ✅
- No layout shift on hover ✅
- Keyboard navigation works ✅
- Mobile responsive ✅

### Result: Production-Ready Code

The user receives a complete, professional landing page that:
- Matches their requirements exactly
- Follows industry best practices
- Is fully accessible (WCAG AA)
- Works across all devices
- Includes dark mode
- Has beautiful, smooth interactions

### Time Saved

**Without UI/UX Pro Max:**
- Research design trends: 1-2 hours
- Find color palettes: 30 mins
- Choose fonts: 30 mins
- Plan layout: 1 hour
- Implement: 2-3 hours
- Fix accessibility: 1 hour
- **Total: 6-8 hours**

**With UI/UX Pro Max:**
- Prompt with `@[.claude/skills/ui-ux-pro-max]`
- Get complete implementation
- **Total: 2-5 minutes**

---

## Complete Workflow Example

### Scenario: Create a Landing Page for a Professional Skincare Service

**Step 1: Analyze Requirements**
- Product: Beauty/Spa service
- Style: Elegant, professional, minimal
- Target: Skincare professionals
- Stack: HTML + Tailwind (default)

**Step 2: Search Domains**

```bash
# 1. Search product type
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness service" --domain product

# 2. Search style recommendations
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "elegant minimal soft" --domain style

# 3. Get typography
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "elegant luxury" --domain typography

# 4. Get color palette
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness" --domain color

# 5. Get landing page structure
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "hero-centric social-proof" --domain landing

# 6. Check UX guidelines
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "animation" --domain ux
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "accessibility" --domain ux

# 7. Get stack-specific guidelines
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "layout responsive" --stack html-tailwind
```

**Step 3: Synthesize Results**
- Use the recommended color palette in your CSS variables
- Import the suggested Google Fonts
- Apply the style guide's visual characteristics
- Structure the landing page based on the layout recommendations
- Follow UX best practices for animations and accessibility
- Implement using stack-specific patterns

---

## Creating Designs with Variant UI Styles

### Example 1: Glassmorphism Dashboard

```bash
# Search style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "glassmorphism" --domain style -n 1

# Get SaaS colors
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "saas dashboard" --domain color -n 1

# Get modern typography
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "modern tech" --domain typography -n 1

# React implementation patterns
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "component state" --stack react
```

**Result:** You'll get everything needed to create a modern glassmorphic SaaS dashboard with proper colors, fonts, and React patterns.

---

### Example 2: Brutalist Portfolio

```bash
# Search brutalism style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "brutalism" --domain style -n 1

# Get portfolio structure
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "portfolio showcase" --domain landing

# Bold typography
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "bold editorial" --domain typography

# Check interaction patterns
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "hover transitions" --domain ux
```

**Result:** Raw, unpolished brutalist portfolio with high-contrast, bold typography, and minimal transitions.

---

### Example 3: Minimalist E-commerce

```bash
# Minimalism style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "minimalism clean" --domain style

# E-commerce colors
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "ecommerce luxury" --domain color

# Elegant fonts
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "elegant minimal" --domain typography

# Product page layout
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "product showcase" --domain landing

# Next.js patterns
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "image optimization" --stack nextjs
```

**Result:** Clean, minimalist e-commerce with luxury aesthetic, optimal Next.js patterns.

---

### Example 4: Dark Mode Dashboard

```bash
# Dark mode style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "dark mode" --domain style

# Dashboard colors
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "dashboard analytics" --domain color

# Professional typography
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "professional clean" --domain typography

# Chart recommendations
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "trend analysis" --domain chart

# Accessibility for dark mode
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "accessibility contrast" --domain ux

# Vue implementation
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "composition api state" --stack vue
```

**Result:** Accessible dark mode dashboard with proper contrast, charts, and Vue patterns.

---

## Pro Tips for Better Results

### 1. **Be Specific with Keywords**
❌ Bad: `"app"`
✅ Good: `"healthcare SaaS dashboard"`

### 2. **Search Multiple Times**
Different keywords reveal different insights:
```bash
# General search
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "modern" --domain style

# More specific
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "modern minimalist clean" --domain style
```

### 3. **Combine Domains**
Build a complete design system:
1. Start with **product** (get recommendations)
2. Then **style** (visual direction)
3. Then **typography** (fonts)
4. Then **color** (palette)
5. Finally **landing** or **chart** (structure)

### 4. **Always Check UX**
Search these before delivering:
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "animation" --domain ux
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "accessibility" --domain ux
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "z-index" --domain ux
```

### 5. **Use Stack Flag for Implementation**
Get technology-specific best practices:
```bash
# For HTML/Tailwind projects
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "responsive" --stack html-tailwind

# For React projects
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "hooks optimization" --stack react
```

### 6. **Iterate on Search**
If first search doesn't match, try different keywords:
```bash
# Try 1
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "corporate" --domain style

# Try 2 (more specific)
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "corporate professional clean" --domain style
```

---

## Common Rules for Professional UI

### Icons & Visual Elements

| ✅ Do | ❌ Don't |
|-------|----------|
| Use SVG icons (Heroicons, Lucide, Simple Icons) | Use emojis like 🎨 🚀 ⚙️ as UI icons |
| Use color/opacity transitions on hover | Use scale transforms that shift layout |
| Research official SVG from Simple Icons | Guess or use incorrect logo paths |
| Use fixed viewBox (24x24) with w-6 h-6 | Mix different icon sizes randomly |

### Interaction & Cursor

| ✅ Do | ❌ Don't |
|-------|----------|
| Add `cursor-pointer` to all clickable/hoverable cards | Leave default cursor on interactive elements |
| Provide visual feedback (color, shadow, border) | No indication element is interactive |
| Use `transition-colors duration-200` | Instant state changes or too slow (>500ms) |

### Light/Dark Mode Contrast

| ✅ Do | ❌ Don't |
|-------|----------|
| Use `bg-white/80` or higher opacity (light mode) | Use `bg-white/10` (too transparent) |
| Use `#0F172A` (slate-900) for text | Use `#94A3B8` (slate-400) for body text |
| Use `#475569` (slate-600) minimum for muted | Use gray-400 or lighter |
| Use `border-gray-200` in light mode | Use `border-white/10` (invisible) |

### Layout & Spacing

| ✅ Do | ❌ Don't |
|-------|----------|
| Add `top-4 left-4 right-4` spacing (floating navbar) | Stick navbar to `top-0 left-0 right-0` |
| Account for fixed navbar height | Let content hide behind fixed elements |
| Use same `max-w-6xl` or `max-w-7xl` | Mix different container widths |

---

## Pre-Delivery Checklist

### ✅ Visual Quality
- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] Brand logos are correct (verified from Simple Icons)
- [ ] Hover states don't cause layout shift

### ✅ Interaction
- [ ] All clickable elements have `cursor-pointer`
- [ ] Hover states provide clear visual feedback
- [ ] Transitions are smooth (150-300ms)
- [ ] Focus states visible for keyboard navigation

### ✅ Light/Dark Mode
- [ ] Light mode text has sufficient contrast (4.5:1 minimum)
- [ ] Glass/transparent elements visible in light mode
- [ ] Borders visible in both modes
- [ ] Test both modes before delivery

### ✅ Layout
- [ ] Floating elements have proper spacing from edges
- [ ] No content hidden behind fixed navbars
- [ ] Responsive at 320px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile

### ✅ Accessibility
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Color is not the only indicator
- [ ] `prefers-reduced-motion` respected

---

## FAQ

### Q: What if I don't specify a stack?
**A:** The skill defaults to `html-tailwind` - pure HTML with Tailwind CSS utilities.

### Q: Can I search multiple domains at once?
**A:** No, search one domain at a time. However, you should search multiple domains in sequence to build a complete design system.

### Q: How many results should I request?
**A:** Default is 3. Use `-n 1` for focused results, `-n 5` for more options.

### Q: What's the difference between `style` and `product` domain?
**A:**
- `product` gives you style **recommendations** based on industry/product type
- `style` gives you **detailed implementation guides** for specific visual styles

### Q: Can I use this for mobile app design?
**A:** Yes! Use stacks like `swiftui`, `react-native`, or `flutter` for mobile-specific guidance.

### Q: Where can I see all available data?
**A:** Check the CSV files in `.claude/skills/ui-ux-pro-max/data/`:
- `styles.csv` - 50 UI styles
- `colors.csv` - 21 color palettes
- `typography.csv` - 50 font pairings
- `landing.csv` - Landing page structures
- `charts.csv` - Chart types
- `products.csv` - Product recommendations
- `ux-guidelines.csv` - UX best practices
- `stacks/*.csv` - Stack-specific guidelines

---

## Examples by Use Case

### SaaS Landing Page
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "saas" --domain product
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "modern minimalist" --domain style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "professional clean" --domain typography
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "saas" --domain color
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "hero-centric" --domain landing
```

### E-commerce Product Page
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "ecommerce luxury" --domain product
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "minimalism" --domain style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "elegant" --domain typography
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "ecommerce luxury" --domain color
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "product showcase" --domain landing
```

### Analytics Dashboard
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "dashboard" --domain product
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "dark mode" --domain style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "modern tech" --domain typography
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "dashboard analytics" --domain color
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "trend analysis" --domain chart
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "accessibility" --domain ux
```

### Portfolio Website
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "portfolio" --domain product
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "brutalism" --domain style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "bold editorial" --domain typography
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "portfolio showcase" --domain landing
```

---

## Summary

The **UI/UX Pro Max** skill is your complete design intelligence system. Instead of guessing colors, fonts, or layouts, you can:

1. **Search** for proven design patterns
2. **Get** professional recommendations instantly
3. **Implement** with confidence using stack-specific best practices
4. **Deliver** accessible, beautiful, and performant UI/UX

**Remember:** Always search multiple domains (product → style → typography → color → structure → ux) to build a complete, cohesive design system!

---

## ClaudeKit Quick Reference

### Activation Syntax

```
@[.claude/skills/ui-ux-pro-max] <your request>
```

### Common ClaudeKit Prompts

| What You Want | Example Prompt |
|---------------|----------------|
| **Landing Page** | `@[.claude/skills/ui-ux-pro-max] Create a landing page for [product/service]. Use [style] design.` |
| **Dashboard** | `@[.claude/skills/ui-ux-pro-max] Build a [industry] dashboard with [chart types]. Use [framework].` |
| **Specific Style** | `@[.claude/skills/ui-ux-pro-max] Design a [product] using glassmorphism/minimalism/brutalism style.` |
| **Design Review** | `@[.claude/skills/ui-ux-pro-max] Review and improve this landing page for accessibility and UX.` |
| **Color Palette** | `@[.claude/skills/ui-ux-pro-max] What colors should I use for a [industry] [product type]?` |
| **Typography** | `@[.claude/skills/ui-ux-pro-max] Recommend professional fonts for a [style] [product].` |
| **Mobile App** | `@[.claude/skills/ui-ux-pro-max] Create an iOS app for [purpose] using SwiftUI.` |

### Style Keywords Cheat Sheet

**Modern Styles:**
- `glassmorphism` - Frosted glass, blurred backgrounds, transparency
- `minimalism` - Clean, simple, lots of whitespace
- `dark mode` - Dark backgrounds, high contrast
- `bento grid` - Grid-based layouts, card design
- `neumorphism` - Soft shadows, 3D extruded look

**Classic Styles:**
- `brutalism` - Raw, bold, high contrast, no polish
- `skeuomorphism` - Real-world textures and shadows
- `flat design` - 2D, no shadows, bright colors
- `claymorphism` - Smooth, rounded, clay-like

**Industry-Specific:**
- `healthcare` - Clean, trustworthy, accessible
- `fintech` - Professional, secure, data-focused
- `e-commerce luxury` - Elegant, minimal, premium
- `beauty spa` - Soft, elegant, calming
- `saas` - Modern, professional, feature-rich

### Product Type Keywords

- `saas` `dashboard` `analytics` `admin panel`
- `ecommerce` `marketplace` `store` `shop`
- `portfolio` `blog` `personal` `agency`
- `healthcare` `medical` `telemedicine` `wellness`
- `fintech` `banking` `finance` `crypto`
- `education` `learning` `course` `training`
- `gaming` `entertainment` `media` `streaming`
- `real estate` `property` `listing`
- `food delivery` `restaurant` `booking`

### Tech Stack Keywords

Include in your prompt:
- `HTML/Tailwind` (default)
- `React` `Next.js` `Vue` `Svelte`
- `SwiftUI` `React Native` `Flutter`

### ClaudeKit Workflow Patterns

#### Pattern 1: Simple Landing Page
```
@[.claude/skills/ui-ux-pro-max] Create a landing page for [product name].
It's a [industry] [product type]. Make it [style adjectives].
```

#### Pattern 2: Complex Application
```
@[.claude/skills/ui-ux-pro-max] Build a [product type] using [framework].
Include [features]. Use [style] design with [color preferences].
Make sure it's accessible and has dark mode.
```

#### Pattern 3: Design Consultation
```
@[.claude/skills/ui-ux-pro-max] I'm building a [product] for [audience].
What design approach, colors, and typography should I use?
```

#### Pattern 4: Code Review
```
@[.claude/skills/ui-ux-pro-max] Review my code and improve:
- Accessibility
- Modern UI/UX best practices
- Responsive design
- Dark mode support
```

### Remember

✅ **Do:**
- Be specific about your product and audience
- Mention style preferences
- Specify your tech stack
- Ask for accessibility and dark mode

❌ **Don't:**
- Use vague descriptions like "make it nice"
- Forget to mention your target industry
- Skip mentioning framework requirements
- Assume emoji icons are okay (they're not!)

### Quick Tips

1. **Combine requirements** - "Create a glassmorphism SaaS dashboard with React and dark mode"
2. **Be industry-specific** - "healthcare telemedicine" > "health app"
3. **Mention accessibility** - Always mention if you need WCAG compliance
4. **Specify mobile** - "Make it mobile-first" or "iOS app with SwiftUI"
5. **Request charts** - "Include trend analysis and comparison charts"

---

**That's it!** Just mention `@[.claude/skills/ui-ux-pro-max]` in your prompts and Claude will automatically leverage 50 styles, 21 palettes, 50 font pairings, and professional UX guidelines to create pixel-perfect, accessible designs! 🎨✨

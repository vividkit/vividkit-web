# Landing Page Structure & i18n Analysis Report

Date: 241208-1705
Topic: Landing page structure and internationalization setup

## Project Overview
- **Framework**: Astro 5.16.4 with TypeScript
- **Styling**: Tailwind CSS 4.1.17
- **Additional Libraries**: Alpine.js, Lucide icons, FontSource fonts
- **Project Type**: Marketing website for VividKit (desktop app for ClaudeKit)

## Main Landing Page Structure

### 1. Page Structure
- **Main Pages**:
  - `/src/pages/index.astro` - English landing page
  - `/src/pages/vi/index.astro` - Vietnamese landing page
  - `/src/pages/guides/index.astro` - Guides index
  - `/src/pages/vi/guides/index.astro` - Vietnamese guides index

### 2. Landing Page Sections (in order)
1. **Hero** (`/src/components/sections/Hero.astro`)
   - Main headline and CTA
   - Badge: "Desktop App Coming Soon" / "Ứng Dụng Desktop Sắp Ra Mắt"
   - Feature highlights: Visual command palette, Skill browser, Real-time token tracking

2. **Problem** (`/src/components/sections/Problem.astro`)
   - Pain points of terminal usage

3. **Features** (`/src/components/sections/Features.astro`)
   - Solution highlights and benefits

4. **Pricing** (`/src/components/sections/Pricing.astro`)
   - Free and Pro tiers

5. **ClaudeKit** (`/src/components/sections/ClaudeKit.astro`)
   - About ClaudeKit integration

6. **Commands** (`/src/components/sections/Commands.astro`)
   - Commands showcase

7. **WaitlistForm** (`/src/components/sections/WaitlistForm.astro`)
   - Email capture form

### 3. Layout Components
- **MainLayout** (`/src/layouts/MainLayout.astro`) - Base HTML structure
- **Header** (`/src/components/layout/Header.astro`) - Navigation with language switcher
- **Footer** (`/src/components/layout/Footer.astro`) - Footer with links
- **AmbientBackground** (`/src/components/layout/AmbientBackground.astro`) - Background effects

## Internationalization (i18n) Setup

### 1. Configuration Files
- **Types**: `/src/i18n/utils.ts` - Language types and utilities
- **Languages**: English (en) and Vietnamese (vi)
- **Default Language**: English

### 2. Translation System
- **Location**: `/src/i18n/`
  - `index.ts` - Translation loader with fallback to English
  - `utils.ts` - Language detection and path translation utilities
  - `en.ts` - English translations
  - `vi.ts` - Vietnamese translations

### 3. Translation Keys Structure
```typescript
// Site metadata
'site.title', 'site.description'

// Navigation
'nav.home', 'nav.features', 'nav.pricing', etc.

// Hero section
'hero.badge', 'hero.headline.line1', 'hero.headline.line2', etc.

// Features
'feature.problems.*', 'feature.solutions.*', 'feature.highlight*'

// Forms
'form.name', 'form.email', 'form.role.*', etc.

// Pricing
'pricing.title', 'pricing.free.*', 'pricing.pro.*'

// Footer
'footer.tagline', 'footer.copyright', 'footer.links.*'
```

### 4. Language Routing
- English: `/` (root)
- Vietnamese: `/vi/`
- Guides: `/guides/` and `/vi/guides/`

### 5. Language Switcher
- Located in Header component
- Dropdown with flags: 🇺🇸 English, 🇻🇳 Tiếng Việt
- Preserves current page path when switching languages

## Key Implementation Details

1. **Translation Function**: Uses `useTranslations(lang)` which returns a function `t(key)` for translation lookup

2. **Path Translation**: `useTranslatedPath(lang)` utility for generating localized URLs

3. **Language Detection**: `getLangFromUrl(url)` extracts language from URL path

4. **Fallback System**: Missing Vietnamese translations fall back to English

5. **SEO**: hreflang tags properly set in MainLayout for search engines

## Current Vietnamese Translation Coverage
- ✅ Hero section fully translated
- ✅ Navigation items translated
- ✅ Form fields and labels translated
- ✅ Pricing section translated
- ✅ Footer links translated
- ✅ Basic guide translations started

## Unresolved Questions
1. Are there dynamic strings in the Problem, Features, Pricing, ClaudeKit, and Commands sections that need translation?
2. Should the hardcoded English text in Hero component ("Visual command palette", "Skill browser", "Real-time token tracking") be moved to translation files?
3. Is there a plan to add more languages beyond English and Vietnamese?

# Phase 05: Vietnamese Version (i18n)

**Timeline:** Days 11-13
**Goal:** Add Vietnamese language support with i18n routing

---

## Overview

Implement multi-language support using Astro's i18n routing. Create Vietnamese versions of all pages while sharing components and only translating content.

**Success Criteria:**
- `/` (English) and `/vi/` (Vietnamese) routes work
- Language switcher functional in header
- All content translated to Vietnamese
- Shared components, separate content files
- SEO meta tags in both languages

---

## Architecture

### URL Structure
```
/ (English - default)
├── /guides (English)

/vi/ (Vietnamese)
├── /vi/guides (Vietnamese)
```

### File Structure
```
src/
├── i18n/
│   ├── index.ts (i18n utilities)
│   ├── en.ts (English translations)
│   └── vi.ts (Vietnamese translations)
├── pages/
│   ├── index.astro (English landing)
│   ├── guides.astro (English guides)
│   └── vi/
│       ├── index.astro (Vietnamese landing)
│       └── guides.astro (Vietnamese guides)
├── data/
│   ├── en/
│   │   ├── navigation.ts
│   │   ├── features.ts
│   │   ├── pricing.ts
│   │   ├── commands.ts
│   │   └── workflows.ts
│   └── vi/
│       ├── navigation.ts
│       ├── features.ts
│       ├── pricing.ts
│       ├── commands.ts
│       └── workflows.ts
```

---

## Implementation Steps

### 1. Configure Astro i18n

**File:** `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    routing: {
      prefixDefaultLocale: false // English at /, Vietnamese at /vi/
    }
  },
  // ... rest of config
});
```

---

### 2. Create i18n Utilities

**File:** `src/i18n/index.ts`

```typescript
export const languages = {
  en: 'English',
  vi: 'Tiếng Việt'
};

export const defaultLang = 'en';

export type Language = keyof typeof languages;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslatedPath(lang: Language) {
  return function translatePath(path: string, l: Language = lang) {
    return l === defaultLang ? path : `/${l}${path}`;
  };
}
```

---

### 3. English Translations

**File:** `src/i18n/en.ts`

```typescript
export default {
  // Site metadata
  'site.title': 'VividKit - Build Anything Without Terminal Friction',
  'site.description': 'VividKit brings the power of AI coding to everyone. No terminal commands. No technical barriers.',

  // Navigation
  'nav.home': 'Home',
  'nav.features': 'Features',
  'nav.pricing': 'Pricing',
  'nav.claudekit': 'ClaudeKit',
  'nav.commands': 'Commands',
  'nav.guides': 'Guides',

  // Hero section
  'hero.badge': 'Desktop App Coming Soon',
  'hero.headline.line1': 'Build Anything',
  'hero.headline.line2': 'Without Terminal',
  'hero.headline.line3': 'Friction',
  'hero.subtitle': 'VividKit brings the power of AI coding to everyone. No terminal commands. No technical barriers. Just describe what you want, and watch it come to life.',
  'hero.cta.primary': 'Join Waitlist (Free Early Access)',
  'hero.cta.secondary': 'Learn About ClaudeKit',
  'hero.clausekit.info': 'Built on ClaudeKit: The industry-leading AI development framework — now accessible to everyone through VividKit\'s visual interface.',

  // Features
  'feature.no-coding': 'No coding required',
  'feature.visual-workflows': 'Visual workflows',
  'feature.production-ready': 'Production-ready code',

  // Waitlist form
  'form.name': 'Your name',
  'form.email': 'Your email',
  'form.role.label': 'I\'m a...',
  'form.role.founder': 'Non-tech founder',
  'form.role.designer': 'Designer',
  'form.role.developer': 'Developer',
  'form.role.other': 'Other',
  'form.message': 'What would you like to build with VividKit? (optional)',
  'form.submit': 'Join Waitlist',
  'form.assurance': 'Free early access. No credit card. No spam.',
  'form.success': 'Thanks for joining! We\'ll be in touch soon.',
  'form.error': 'Something went wrong. Please try again.',

  // Footer
  'footer.tagline': 'Build anything without terminal friction. Powered by ClaudeKit Framework.',
  'footer.copyright': '© 2025 VividKit. Powered by ClaudeKit Framework.',

  // Common
  'common.loading': 'Loading...',
  'common.error': 'Error',
  'common.back': 'Back',

} as const;
```

---

### 4. Vietnamese Translations

**File:** `src/i18n/vi.ts`

```typescript
export default {
  // Site metadata
  'site.title': 'VividKit - Xây Dựng Mọi Thứ Mà Không Cần Terminal',
  'site.description': 'VividKit mang sức mạnh của AI coding đến với mọi người. Không cần lệnh terminal. Không có rào cản kỹ thuật.',

  // Navigation
  'nav.home': 'Trang Chủ',
  'nav.features': 'Tính Năng',
  'nav.pricing': 'Bảng Giá',
  'nav.claudekit': 'ClaudeKit',
  'nav.commands': 'Lệnh',
  'nav.guides': 'Hướng Dẫn',

  // Hero section
  'hero.badge': 'Ứng Dụng Desktop Sắp Ra Mắt',
  'hero.headline.line1': 'Xây Dựng Mọi Thứ',
  'hero.headline.line2': 'Mà Không Cần',
  'hero.headline.line3': 'Terminal',
  'hero.subtitle': 'VividKit mang sức mạnh của AI coding đến với mọi người. Không cần lệnh terminal. Không có rào cản kỹ thuật. Chỉ cần mô tả những gì bạn muốn và xem nó trở thành hiện thực.',
  'hero.cta.primary': 'Tham Gia Danh Sách Chờ (Miễn Phí)',
  'hero.cta.secondary': 'Tìm Hiểu Về ClaudeKit',
  'hero.clausekit.info': 'Được Xây Dựng Trên ClaudeKit: Framework phát triển AI hàng đầu ngành — giờ đây có thể tiếp cận với mọi người thông qua giao diện trực quan của VividKit.',

  // Features
  'feature.no-coding': 'Không cần lập trình',
  'feature.visual-workflows': 'Quy trình trực quan',
  'feature.production-ready': 'Code sẵn sàng production',

  // Waitlist form
  'form.name': 'Tên của bạn',
  'form.email': 'Email của bạn',
  'form.role.label': 'Tôi là...',
  'form.role.founder': 'Founder không chuyên kỹ thuật',
  'form.role.designer': 'Designer',
  'form.role.developer': 'Developer',
  'form.role.other': 'Khác',
  'form.message': 'Bạn muốn xây dựng gì với VividKit? (tùy chọn)',
  'form.submit': 'Tham Gia Danh Sách Chờ',
  'form.assurance': 'Truy cập sớm miễn phí. Không cần thẻ tín dụng. Không spam.',
  'form.success': 'Cảm ơn bạn đã tham gia! Chúng tôi sẽ liên hệ sớm.',
  'form.error': 'Đã xảy ra lỗi. Vui lòng thử lại.',

  // Footer
  'footer.tagline': 'Xây dựng mọi thứ mà không cần terminal. Được hỗ trợ bởi ClaudeKit Framework.',
  'footer.copyright': '© 2025 VividKit. Được hỗ trợ bởi ClaudeKit Framework.',

  // Common
  'common.loading': 'Đang tải...',
  'common.error': 'Lỗi',
  'common.back': 'Quay lại',

} as const;
```

---

### 5. Translation Helper Function

**File:** `src/i18n/utils.ts`

```typescript
import en from './en';
import vi from './vi';

export const translations = {
  en,
  vi
};

export type TranslationKey = keyof typeof en;

export function useTranslations(lang: keyof typeof translations = 'en') {
  return function t(key: TranslationKey): string {
    return translations[lang][key] || translations['en'][key];
  };
}
```

---

### 6. Update Header Component

**File:** `src/components/layout/Header.astro`

Add functional language switcher:

```astro
---
import { getLangFromUrl, languages, useTranslatedPath } from '@/i18n';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
const translatePath = useTranslatedPath(lang);
---

<!-- Language Selector -->
<div class="relative group">
  <button class="flex items-center gap-1.5 p-2.5 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors cursor-pointer">
    <svg class="w-5 h-5 text-slate-700 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
    </svg>
    <span class="text-sm font-medium text-slate-700 dark:text-slate-200">
      {lang === 'en' ? 'EN' : 'VI'}
    </span>
  </button>

  <div class="absolute top-full right-0 mt-2 w-36 py-1 rounded-xl glass-card shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
    <a
      href={translatePath(Astro.url.pathname, 'en')}
      class={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${lang === 'en' ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}
    >
      <span>🇺🇸</span> English
    </a>
    <a
      href={translatePath(Astro.url.pathname, 'vi')}
      class={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${lang === 'vi' ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}
    >
      <span>🇻🇳</span> Tiếng Việt
    </a>
  </div>
</div>
```

---

### 7. Create Vietnamese Pages

**File:** `src/pages/vi/index.astro`

```astro
---
import MainLayout from '@/layouts/MainLayout.astro';
import Header from '@/components/layout/Header.astro';
// ... import all sections
import { useTranslations } from '@/i18n/utils';

const t = useTranslations('vi');

// Import Vietnamese data
import { navLinks } from '@/data/vi/navigation';
import { problems, solutions } from '@/data/vi/features';
import { pricingTiers } from '@/data/vi/pricing';
// ... etc
---

<MainLayout
  title={t('site.title')}
  description={t('site.description')}
  canonical="/vi/"
>
  <Header lang="vi" />
  <main>
    <Hero lang="vi" />
    <Problem lang="vi" />
    <!-- ... rest of sections -->
  </main>
  <Footer lang="vi" />
</MainLayout>
```

**File:** `src/pages/vi/guides.astro`

Same structure, with Vietnamese content.

---

### 8. Translate Data Files

Create Vietnamese versions of all data files:

**Example:** `src/data/vi/features.ts`

```typescript
import type { FeatureCard } from '@/types';

export const problems: FeatureCard[] = [
  {
    icon: 'Terminal',
    iconColor: 'red',
    title: 'Giao Diện Terminal',
    description: 'Hơn 60 lệnh slash phải nhớ. Lệnh terminal cảm thấy đáng sợ nếu bạn không phải là developer.'
  },
  {
    icon: 'CircleAlert',
    iconColor: 'orange',
    title: 'Đường Cong Học Tập',
    description: 'Quy trình nào? Trình tự lệnh nào? Làm sao kết hợp chúng? Mất thời gian để làm chủ các mẫu CLI.'
  },
  {
    icon: 'TriangleAlert',
    iconColor: 'amber',
    title: 'Không Có Lưới An Toàn',
    description: 'Một lệnh sai có thể mất tiến trình. Không có nút hoàn tác. Không có phản hồi trực quan về điều gì đang xảy ra.'
  }
];

export const solutions: FeatureCard[] = [
  {
    icon: 'Check',
    iconColor: 'green',
    title: 'Quy Trình Trực Quan',
    description: 'Nhấp nút thay vì gõ lệnh. Hướng dẫn từng bước.'
  },
  // ... rest
];
```

Repeat for:
- `src/data/vi/navigation.ts`
- `src/data/vi/pricing.ts`
- `src/data/vi/commands.ts`
- `src/data/vi/workflows.ts`

---

### 9. Update Components to Accept Lang Prop

**Example:** `src/components/sections/Hero.astro`

```astro
---
import { useTranslations } from '@/i18n/utils';
import type { Language } from '@/i18n';

interface Props {
  lang?: Language;
}

const { lang = 'en' } = Astro.props;
const t = useTranslations(lang);
---

<section id="hero" class="relative min-h-screen flex items-center justify-center pt-24 pb-16">
  <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
    <div class="fade-in-up mb-6 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card text-sm font-medium">
      <span class="w-2 h-2 rounded-full bg-green-400 pulse-glow"></span>
      <span class="text-slate-600 dark:text-slate-300">{t('hero.badge')}</span>
    </div>

    <h1 class="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight fade-in-up">
      <span class="block text-slate-900 dark:text-white mb-2">{t('hero.headline.line1')}</span>
      <span class="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
        {t('hero.headline.line2')}
      </span>
      <span class="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        {t('hero.headline.line3')}
      </span>
    </h1>

    <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
      {t('hero.subtitle')}
    </p>

    <!-- ... rest of hero content with t() calls -->
  </div>
</section>
```

Update all section components similarly.

---

### 10. SEO for Vietnamese Pages

**Update:** `src/layouts/MainLayout.astro`

Add `hreflang` tags:

```html
<link rel="alternate" hreflang="en" href={`${siteUrl}/`} />
<link rel="alternate" hreflang="vi" href={`${siteUrl}/vi/`} />
<link rel="alternate" hreflang="x-default" href={`${siteUrl}/`} />
```

**Update Sitemap:**

```typescript
// src/pages/sitemap.xml.ts
const pages = [
  { url: '/', lang: 'en' },
  { url: '/guides', lang: 'en' },
  { url: '/vi/', lang: 'vi' },
  { url: '/vi/guides', lang: 'vi' }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${pages.map((page) => `
  <url>
    <loc>https://vividkit.app${page.url}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://vividkit.app/" />
    <xhtml:link rel="alternate" hreflang="vi" href="https://vividkit.app/vi/" />
  </url>
  `).join('')}
</urlset>`;
```

---

## Testing Checklist

- [ ] English routes work (`/`, `/guides`)
- [ ] Vietnamese routes work (`/vi/`, `/vi/guides`)
- [ ] Language switcher toggles between EN/VI
- [ ] All content displays correctly in both languages
- [ ] Vietnamese fonts render properly (diacritics)
- [ ] Form submissions work in both languages
- [ ] SEO meta tags in correct language
- [ ] `hreflang` tags present
- [ ] Sitemap includes both languages
- [ ] Browser language detection (optional)
- [ ] Navigation links translate correctly
- [ ] All CTAs translate correctly

---

## Deliverables

- [ ] Astro i18n configured
- [ ] i18n utilities (`src/i18n/index.ts`, `src/i18n/utils.ts`)
- [ ] English translations (`src/i18n/en.ts`)
- [ ] Vietnamese translations (`src/i18n/vi.ts`)
- [ ] Vietnamese pages (`/vi/index.astro`, `/vi/guides.astro`)
- [ ] Vietnamese data files (all translated)
- [ ] Language switcher functional in header
- [ ] All components accept `lang` prop
- [ ] SEO updated (`hreflang`, sitemap)
- [ ] Testing complete (both languages)

---

## Translation Guidelines

### Content Translation
- **Headlines:** Keep punchy, adapt idioms
- **CTAs:** Use action verbs in Vietnamese
- **Technical Terms:** Keep English (CLI, terminal, GitHub) or use accepted Vietnamese terms
- **Tone:** Friendly, approachable, professional

### Vietnamese Specifics
- Use proper diacritics (á, ă, â, đ, etc.)
- Capitalize first word only (not title case)
- Space after punctuation (Vietnamese style)
- Use Vietnamese quotation marks: "..." or «...»

### Testing Vietnamese Text
- Test on Windows (Vietnamese font rendering)
- Test on macOS (diacritics display)
- Test on mobile (text wrapping, font size)

---

## Next Steps (Post Phase 5)

### Phase 6: Blog & Content (Future)
- `/blog` route (English + Vietnamese)
- MDX content collections
- Categories/tags
- RSS feed
- Author profiles

### Phase 7: Advanced Features (Future)
- User dashboard (after app launch)
- Affiliate program tracking
- Community forum integration
- Video tutorials section

---

**Phase 5 Complete!** 🇻🇳

Vietnamese version fully localized and SEO-optimized.

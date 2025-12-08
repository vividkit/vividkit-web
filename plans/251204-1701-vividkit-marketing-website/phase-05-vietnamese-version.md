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
├── /guides/                   (CLI Guide - default)
│   ├── /guides/commands       (Commands Guide)
│   ├── /guides/workflows      (Workflows Guide)
│   ├── /guides/uiux           (UI/UX Guide)
│   ├── /guides/ccs            (CCS Guide)
│   ├── /guides/permissions    (Permissions Guide)
│   ├── /guides/fix-logs       (Fix Logs Guide)
│   └── /guides/resume         (Resume Guide)

/vi/ (Vietnamese)
├── /vi/guides/                (Vietnamese CLI Guide)
│   ├── /vi/guides/commands    (Vietnamese Commands Guide)
│   ├── /vi/guides/workflows   (Vietnamese Workflows Guide)
│   ├── /vi/guides/uiux        (Vietnamese UI/UX Guide)
│   ├── /vi/guides/ccs         (Vietnamese CCS Guide)
│   ├── /vi/guides/permissions (Vietnamese Permissions Guide)
│   ├── /vi/guides/fix-logs    (Vietnamese Fix Logs Guide)
│   └── /vi/guides/resume      (Vietnamese Resume Guide)
```

### Current File Structure (to be extended for i18n)
```
src/
├── components/
│   ├── guides/                      # Guide page components
│   │   ├── CCSGuide.astro
│   │   ├── CLIGuide.astro
│   │   ├── CommandsGuide.astro
│   │   ├── FixLogsGuide.astro
│   │   ├── PermissionsGuide.astro
│   │   ├── ResumeGuide.astro
│   │   ├── TabNavigation.astro
│   │   ├── TableOfContents.astro
│   │   ├── UIUXGuide.astro
│   │   └── WorkflowsGuide.astro
│   ├── layout/                      # Layout components
│   │   ├── AmbientBackground.astro
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── sections/                    # Landing page sections
│   │   ├── ClaudeKit.astro
│   │   ├── ClaudeKitCLIGuide.astro
│   │   ├── Commands.astro
│   │   ├── Features.astro
│   │   ├── Hero.astro
│   │   ├── Pricing.astro
│   │   ├── Problem.astro
│   │   ├── RecommendedWorkflows.astro
│   │   ├── SlashCommandsGuide.astro
│   │   ├── UIUXProMax.astro
│   │   └── WaitlistForm.astro
│   └── ui/                          # Reusable UI components
├── data/
│   ├── commands.ts                  # Landing page commands data
│   ├── constants.ts                 # Site constants
│   ├── features.ts                  # Features data
│   ├── navigation.ts                # Navigation data
│   ├── pricing.ts                   # Pricing data
│   └── guides/                      # Guides page data
│       ├── cli-guide.ts
│       ├── cli-steps-landing.ts
│       ├── commands-landing.ts
│       ├── commands.ts
│       ├── uiux-guide.ts
│       ├── uiux-landing.ts
│       ├── workflows-landing.ts
│       └── workflows.ts
├── layouts/
│   ├── GuidesLayout.astro           # Layout for guide pages
│   └── MainLayout.astro             # Main layout
├── pages/
│   ├── index.astro                  # Landing page
│   ├── test-uiux-landing.astro      # Test page
│   └── guides/                      # Guide pages
│       ├── index.astro              # CLI Guide (default)
│       ├── ccs.astro
│       ├── commands.astro
│       ├── fix-logs.astro
│       ├── permissions.astro
│       ├── resume.astro
│       ├── uiux.astro
│       └── workflows.astro
├── scripts/
├── styles/
│   └── index.css
└── types/
```

### File Structure After i18n Implementation
```
src/
├── i18n/
│   ├── index.ts                     # i18n utilities & exports
│   ├── utils.ts                     # Translation helper functions
│   ├── en.ts                        # English translations
│   └── vi.ts                        # Vietnamese translations
├── data/
│   ├── en/                          # English data (move existing files here)
│   │   ├── commands.ts
│   │   ├── constants.ts
│   │   ├── features.ts
│   │   ├── navigation.ts
│   │   ├── pricing.ts
│   │   └── guides/
│   │       ├── cli-guide.ts
│   │       ├── cli-steps-landing.ts
│   │       ├── commands-landing.ts
│   │       ├── commands.ts
│   │       ├── uiux-guide.ts
│   │       ├── uiux-landing.ts
│   │       ├── workflows-landing.ts
│   │       └── workflows.ts
│   └── vi/                          # Vietnamese data (translated copies)
│       ├── commands.ts
│       ├── constants.ts
│       ├── features.ts
│       ├── navigation.ts
│       ├── pricing.ts
│       └── guides/
│           ├── cli-guide.ts
│           ├── cli-steps-landing.ts
│           ├── commands-landing.ts
│           ├── commands.ts
│           ├── uiux-guide.ts
│           ├── uiux-landing.ts
│           ├── workflows-landing.ts
│           └── workflows.ts
├── pages/
│   ├── index.astro                  # English landing
│   ├── guides/                      # English guides
│   │   ├── index.astro
│   │   ├── ccs.astro
│   │   ├── commands.astro
│   │   ├── fix-logs.astro
│   │   ├── permissions.astro
│   │   ├── resume.astro
│   │   ├── uiux.astro
│   │   └── workflows.astro
│   └── vi/                          # Vietnamese pages
│       ├── index.astro              # Vietnamese landing
│       └── guides/                  # Vietnamese guides
│           ├── index.astro
│           ├── ccs.astro
│           ├── commands.astro
│           ├── fix-logs.astro
│           ├── permissions.astro
│           ├── resume.astro
│           ├── uiux.astro
│           └── workflows.astro
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

#### 7a. Vietnamese Landing Page

**File:** `src/pages/vi/index.astro`

```astro
---
import MainLayout from '@/layouts/MainLayout.astro';
import Header from '@/components/layout/Header.astro';
import Footer from '@/components/layout/Footer.astro';
import AmbientBackground from '@/components/layout/AmbientBackground.astro';

// Import all section components
import Hero from '@/components/sections/Hero.astro';
import Problem from '@/components/sections/Problem.astro';
import Features from '@/components/sections/Features.astro';
import ClaudeKit from '@/components/sections/ClaudeKit.astro';
import ClaudeKitCLIGuide from '@/components/sections/ClaudeKitCLIGuide.astro';
import Commands from '@/components/sections/Commands.astro';
import SlashCommandsGuide from '@/components/sections/SlashCommandsGuide.astro';
import RecommendedWorkflows from '@/components/sections/RecommendedWorkflows.astro';
import UIUXProMax from '@/components/sections/UIUXProMax.astro';
import Pricing from '@/components/sections/Pricing.astro';
import WaitlistForm from '@/components/sections/WaitlistForm.astro';

import { useTranslations } from '@/i18n/utils';

const t = useTranslations('vi');
---

<MainLayout
  title={t('site.title')}
  description={t('site.description')}
  canonical="/vi/"
  lang="vi"
>
  <AmbientBackground />
  <Header lang="vi" />
  <main>
    <Hero lang="vi" />
    <Problem lang="vi" />
    <Features lang="vi" />
    <ClaudeKit lang="vi" />
    <ClaudeKitCLIGuide lang="vi" />
    <Commands lang="vi" />
    <SlashCommandsGuide lang="vi" />
    <RecommendedWorkflows lang="vi" />
    <UIUXProMax lang="vi" />
    <Pricing lang="vi" />
    <WaitlistForm lang="vi" />
  </main>
  <Footer lang="vi" />
</MainLayout>
```

#### 7b. Vietnamese Guide Pages

Create Vietnamese guide pages under `src/pages/vi/guides/`:

**File:** `src/pages/vi/guides/index.astro` (CLI Guide - default)

```astro
---
import GuidesLayout from '@/layouts/GuidesLayout.astro';
import CLIGuide from '@/components/guides/CLIGuide.astro';
---

<GuidesLayout lang="vi">
  <CLIGuide lang="vi" />
</GuidesLayout>
```

**File:** `src/pages/vi/guides/commands.astro`

```astro
---
import GuidesLayout from '@/layouts/GuidesLayout.astro';
import CommandsGuide from '@/components/guides/CommandsGuide.astro';
---

<GuidesLayout lang="vi">
  <CommandsGuide lang="vi" />
</GuidesLayout>
```

**File:** `src/pages/vi/guides/workflows.astro`

```astro
---
import GuidesLayout from '@/layouts/GuidesLayout.astro';
import WorkflowsGuide from '@/components/guides/WorkflowsGuide.astro';
---

<GuidesLayout lang="vi">
  <WorkflowsGuide lang="vi" />
</GuidesLayout>
```

**Repeat for all other guide pages:**
- `src/pages/vi/guides/uiux.astro` → Uses `UIUXGuide.astro`
- `src/pages/vi/guides/ccs.astro` → Uses `CCSGuide.astro`
- `src/pages/vi/guides/permissions.astro` → Uses `PermissionsGuide.astro`
- `src/pages/vi/guides/fix-logs.astro` → Uses `FixLogsGuide.astro`
- `src/pages/vi/guides/resume.astro` → Uses `ResumeGuide.astro`

---

### 8. Translate Data Files

Create Vietnamese versions of all data files by copying from English and translating:

#### 8a. Landing Page Data Files

**Create directory:** `src/data/vi/`

**Files to create (translate from English):**
- `src/data/vi/commands.ts` - Landing page commands data
- `src/data/vi/constants.ts` - Translated site constants
- `src/data/vi/features.ts` - Problems/solutions content
- `src/data/vi/navigation.ts` - Navigation labels
- `src/data/vi/pricing.ts` - Pricing tiers content

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

#### 8b. Guides Data Files

**Create directory:** `src/data/vi/guides/`

**Files to create (translate from English `src/data/guides/`):**
- `src/data/vi/guides/cli-guide.ts` - CLI guide content
- `src/data/vi/guides/cli-steps-landing.ts` - CLI steps for landing
- `src/data/vi/guides/commands-landing.ts` - Commands landing data
- `src/data/vi/guides/commands.ts` - Commands guide content
- `src/data/vi/guides/uiux-guide.ts` - UI/UX guide content
- `src/data/vi/guides/uiux-landing.ts` - UI/UX landing data
- `src/data/vi/guides/workflows-landing.ts` - Workflows landing data
- `src/data/vi/guides/workflows.ts` - Workflows guide content

**Example:** `src/data/vi/guides/workflows.ts`

```typescript
export const workflows = [
  {
    id: 'full-project',
    title: 'Xây Dựng Dự Án Đầy Đủ',
    description: 'Từ ý tưởng đến production với hỗ trợ AI',
    difficulty: 'Trung bình',
    timeEstimate: '30-60 phút',
    steps: [
      { command: '/init', description: 'Khởi tạo dự án mới' },
      { command: '/plan', description: 'Tạo kế hoạch thực hiện' },
      // ... rest of translated steps
    ]
  },
  // ... rest of translated workflows
];
```

---

### 9. Update Components to Accept Lang Prop

All components need to be updated to accept a `lang` prop and conditionally load translated content.

#### 9a. Section Components (Landing Page)

Update all components in `src/components/sections/`:

**Components to update:**
- `Hero.astro`
- `Problem.astro`
- `Features.astro`
- `ClaudeKit.astro`
- `ClaudeKitCLIGuide.astro`
- `Commands.astro`
- `SlashCommandsGuide.astro`
- `RecommendedWorkflows.astro`
- `UIUXProMax.astro`
- `Pricing.astro`
- `WaitlistForm.astro`

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

#### 9b. Guide Components

Update all components in `src/components/guides/`:

**Components to update:**
- `CLIGuide.astro`
- `CommandsGuide.astro`
- `WorkflowsGuide.astro`
- `UIUXGuide.astro`
- `CCSGuide.astro`
- `PermissionsGuide.astro`
- `FixLogsGuide.astro`
- `ResumeGuide.astro`
- `TabNavigation.astro` (needs to generate correct URLs for lang)
- `TableOfContents.astro`

**Example:** `src/components/guides/CLIGuide.astro`

```astro
---
import { useTranslations } from '@/i18n/utils';
import type { Language } from '@/i18n';

// Import data based on language
interface Props {
  lang?: Language;
}

const { lang = 'en' } = Astro.props;
const t = useTranslations(lang);

// Dynamic import based on language
const cliData = lang === 'vi'
  ? await import('@/data/vi/guides/cli-guide')
  : await import('@/data/guides/cli-guide');
---

<!-- Guide content using t() and cliData -->
```

#### 9c. Layout Components

Update layout components to pass lang prop:

**Components to update:**
- `Header.astro` - Language switcher + translated nav
- `Footer.astro` - Translated footer content
- `GuidesLayout.astro` - Pass lang to child components
- `MainLayout.astro` - Set HTML lang attribute

---

### 10. SEO for Vietnamese Pages

**Update:** `src/layouts/MainLayout.astro`

Add lang prop and hreflang tags:

```astro
---
interface Props {
  title: string;
  description?: string;
  canonical?: string;
  lang?: 'en' | 'vi';
}

const { title, description, canonical, lang = 'en' } = Astro.props;
const siteUrl = 'https://vividkit.app';
---

<html lang={lang}>
<head>
  <!-- Other meta tags -->

  <!-- hreflang tags for all pages -->
  <link rel="alternate" hreflang="en" href={`${siteUrl}${canonical?.replace('/vi', '') || '/'}`} />
  <link rel="alternate" hreflang="vi" href={`${siteUrl}/vi${canonical?.replace('/vi', '') || '/'}`} />
  <link rel="alternate" hreflang="x-default" href={`${siteUrl}${canonical?.replace('/vi', '') || '/'}`} />
</head>
<body>
  <slot />
</body>
</html>
```

**Update Sitemap:**

```typescript
// src/pages/sitemap.xml.ts
const pages = [
  // English pages
  { url: '/', lang: 'en' },
  { url: '/guides/', lang: 'en' },
  { url: '/guides/commands', lang: 'en' },
  { url: '/guides/workflows', lang: 'en' },
  { url: '/guides/uiux', lang: 'en' },
  { url: '/guides/ccs', lang: 'en' },
  { url: '/guides/permissions', lang: 'en' },
  { url: '/guides/fix-logs', lang: 'en' },
  { url: '/guides/resume', lang: 'en' },
  // Vietnamese pages
  { url: '/vi/', lang: 'vi' },
  { url: '/vi/guides/', lang: 'vi' },
  { url: '/vi/guides/commands', lang: 'vi' },
  { url: '/vi/guides/workflows', lang: 'vi' },
  { url: '/vi/guides/uiux', lang: 'vi' },
  { url: '/vi/guides/ccs', lang: 'vi' },
  { url: '/vi/guides/permissions', lang: 'vi' },
  { url: '/vi/guides/fix-logs', lang: 'vi' },
  { url: '/vi/guides/resume', lang: 'vi' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${pages.map((page) => {
    const enUrl = page.url.replace('/vi', '');
    const viUrl = `/vi${enUrl}`;
    return `
  <url>
    <loc>https://vividkit.app${page.url}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://vividkit.app${enUrl}" />
    <xhtml:link rel="alternate" hreflang="vi" href="https://vividkit.app${viUrl}" />
  </url>`;
  }).join('')}
</urlset>`;
```

---

## Testing Checklist

### English Routes
- [ ] `/` - Landing page works
- [ ] `/guides/` - CLI Guide (default) works
- [ ] `/guides/commands` - Commands Guide works
- [ ] `/guides/workflows` - Workflows Guide works
- [ ] `/guides/uiux` - UI/UX Guide works
- [ ] `/guides/ccs` - CCS Guide works
- [ ] `/guides/permissions` - Permissions Guide works
- [ ] `/guides/fix-logs` - Fix Logs Guide works
- [ ] `/guides/resume` - Resume Guide works

### Vietnamese Routes
- [ ] `/vi/` - Vietnamese landing page works
- [ ] `/vi/guides/` - Vietnamese CLI Guide works
- [ ] `/vi/guides/commands` - Vietnamese Commands Guide works
- [ ] `/vi/guides/workflows` - Vietnamese Workflows Guide works
- [ ] `/vi/guides/uiux` - Vietnamese UI/UX Guide works
- [ ] `/vi/guides/ccs` - Vietnamese CCS Guide works
- [ ] `/vi/guides/permissions` - Vietnamese Permissions Guide works
- [ ] `/vi/guides/fix-logs` - Vietnamese Fix Logs Guide works
- [ ] `/vi/guides/resume` - Vietnamese Resume Guide works

### Functionality
- [ ] Language switcher toggles between EN/VI on all pages
- [ ] Language switcher preserves current page (e.g., `/guides/commands` → `/vi/guides/commands`)
- [ ] All content displays correctly in both languages
- [ ] Vietnamese fonts render properly (diacritics)
- [ ] Form submissions work in both languages
- [ ] Tab navigation works correctly with language switching
- [ ] Table of Contents links work in both languages

### SEO
- [ ] SEO meta tags in correct language
- [ ] `hreflang` tags present on all pages
- [ ] Sitemap includes all pages in both languages
- [ ] Canonical URLs correct for each language
- [ ] HTML `lang` attribute set correctly

### Cross-browser/Device
- [ ] Browser language detection (optional)
- [ ] Navigation links translate correctly
- [ ] All CTAs translate correctly
- [ ] Mobile responsive in both languages

---

## Deliverables

### i18n Setup
- [ ] Astro i18n configured in `astro.config.mjs`
- [ ] i18n utilities (`src/i18n/index.ts`)
- [ ] Translation helper (`src/i18n/utils.ts`)
- [ ] English translations (`src/i18n/en.ts`)
- [ ] Vietnamese translations (`src/i18n/vi.ts`)

### Vietnamese Pages (9 total)
- [ ] `src/pages/vi/index.astro` - Landing page
- [ ] `src/pages/vi/guides/index.astro` - CLI Guide
- [ ] `src/pages/vi/guides/commands.astro`
- [ ] `src/pages/vi/guides/workflows.astro`
- [ ] `src/pages/vi/guides/uiux.astro`
- [ ] `src/pages/vi/guides/ccs.astro`
- [ ] `src/pages/vi/guides/permissions.astro`
- [ ] `src/pages/vi/guides/fix-logs.astro`
- [ ] `src/pages/vi/guides/resume.astro`

### Vietnamese Data Files
- [ ] `src/data/vi/commands.ts`
- [ ] `src/data/vi/constants.ts`
- [ ] `src/data/vi/features.ts`
- [ ] `src/data/vi/navigation.ts`
- [ ] `src/data/vi/pricing.ts`
- [ ] `src/data/vi/guides/cli-guide.ts`
- [ ] `src/data/vi/guides/cli-steps-landing.ts`
- [ ] `src/data/vi/guides/commands-landing.ts`
- [ ] `src/data/vi/guides/commands.ts`
- [ ] `src/data/vi/guides/uiux-guide.ts`
- [ ] `src/data/vi/guides/uiux-landing.ts`
- [ ] `src/data/vi/guides/workflows-landing.ts`
- [ ] `src/data/vi/guides/workflows.ts`

### Component Updates (accept `lang` prop)
- [ ] Section components (11): Hero, Problem, Features, ClaudeKit, ClaudeKitCLIGuide, Commands, SlashCommandsGuide, RecommendedWorkflows, UIUXProMax, Pricing, WaitlistForm
- [ ] Guide components (10): CLIGuide, CommandsGuide, WorkflowsGuide, UIUXGuide, CCSGuide, PermissionsGuide, FixLogsGuide, ResumeGuide, TabNavigation, TableOfContents
- [ ] Layout components (4): Header (with language switcher), Footer, GuidesLayout, MainLayout

### SEO Updates
- [ ] `hreflang` tags in MainLayout
- [ ] Sitemap with all pages in both languages
- [ ] HTML `lang` attribute dynamic

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

## Code Review Completed (2025-12-08)

### Status: 🟡 Partially Complete - Critical Issues Found

A comprehensive code review revealed several critical and high-priority issues that must be addressed:

### Critical Issues (Fix Required)
1. **🚨 Language Switcher Bug**: Creates `/vi/vi/` URLs due to duplicate prefix in `translatePath` function
   - Location: `/src/i18n/index.ts:17-19`
   - Impact: Broken navigation, poor UX
   - Fix: Clean existing prefix before adding new one

2. **🔴 Missing Component Translations**: Guide components have hardcoded English strings
   - Components affected: All guide components, TabNavigation
   - Impact: Mixed languages on Vietnamese pages
   - Fix: Move all strings to translation files

3. **📁 No Vietnamese Data Files**: Data localization incomplete
   - Expected: `/src/data/vi/` directory with translated data
   - Current: All data files in English only
   - Fix: Create Vietnamese versions of all data files

### High Priority Issues
1. **Inconsistent Lang Prop Handling**: Components accept but don't always use `lang` prop
2. **Performance**: No translation caching, dynamic imports not optimized
3. **Missing Translations**: Review all components for untranslated strings

### What's Working ✅
- Astro i18n routing properly configured
- Translation files well-structured and type-safe
- SEO tags (hreflang, canonical) correctly implemented
- Vietnamese pages created and routing works

### Next Steps Required
1. **IMMEDIATE**: Fix the critical URL prefix bug in `translatePath`
2. **URGENT**: Translate all guide components and move hardcoded strings
3. **HIGH**: Create Vietnamese data files for complete localization
4. Add comprehensive testing for language switching

**Phase 5 Status**: Implementation complete but requires fixes before production deployment.

---

**Phase 5 Complete!** 🇻🇳 *With Critical Fixes Needed*

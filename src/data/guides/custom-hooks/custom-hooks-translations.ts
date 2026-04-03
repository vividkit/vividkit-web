/**
 * UI translations for CustomHooksGuide page (EN/VI).
 * Hook-specific descriptions live in custom-hooks-data.ts.
 */

export const customHooksTranslations = {
  en: {
    pageTitle: 'Custom Hooks',
    pageSubtitle: 'ClaudeKit hooks automate your workflow by reacting to Claude Code lifecycle events — session start, tool calls, agent completion, and more.',
    infoBannerTitle: 'What are Custom Hooks?',
    infoBannerDesc: 'Hooks are shell commands configured in',
    infoBannerDescEnd: 'that fire automatically in response to Claude Code events. Each hook receives JSON context via stdin and can inject guidance, block actions, or persist state.',
    hookCountLabel: '16 hooks across 5 categories',
    libCountLabel: '12 shared utility modules',
    lifecycleTitle: 'Hook Lifecycle Events',
    lifecycleDesc: 'Hooks react to these Claude Code events:',
    categoriesTitle: 'Hooks by Category',
    triggerLabel: 'Triggers',
    linesLabel: 'lines',
    deprecatedLabel: 'Deprecated',
    libTitle: 'Shared Utility Library',
    libDesc: 'All hooks share utility modules under hooks/lib/ for common concerns.',
    moreComingSoon: 'More hooks coming soon...',
    moreComingSoonDesc: 'Slack notifications, auto-commit, and more!',
    officialDocsText: 'Learn more about ClaudeKit built-in hooks at',
    officialDocsLink: 'ClaudeKit Documentation',
  },
  vi: {
    pageTitle: 'Custom Hooks',
    pageSubtitle: 'ClaudeKit hooks tự động hóa workflow bằng cách phản ứng với lifecycle events của Claude Code — session start, tool calls, agent completion, và hơn thế.',
    infoBannerTitle: 'Custom Hooks là gì?',
    infoBannerDesc: 'Hooks là shell commands được cấu hình trong',
    infoBannerDescEnd: 'tự động kích hoạt khi có Claude Code events. Mỗi hook nhận JSON context qua stdin và có thể inject guidance, chặn actions, hoặc lưu state.',
    hookCountLabel: '16 hooks trong 5 categories',
    libCountLabel: '12 shared utility modules',
    lifecycleTitle: 'Hook Lifecycle Events',
    lifecycleDesc: 'Hooks phản ứng với các Claude Code events:',
    categoriesTitle: 'Hooks theo Category',
    triggerLabel: 'Triggers',
    linesLabel: 'dòng',
    deprecatedLabel: 'Deprecated',
    libTitle: 'Shared Utility Library',
    libDesc: 'Tất cả hooks dùng chung utility modules trong hooks/lib/ cho các concerns chung.',
    moreComingSoon: 'Thêm hooks sắp ra mắt...',
    moreComingSoonDesc: 'Slack notifications, auto-commit, và nhiều hơn!',
    officialDocsText: 'Tìm hiểu thêm các built-in hooks của ClaudeKit tại',
    officialDocsLink: 'ClaudeKit Documentation',
  },
} as const;

export type CustomHooksLang = keyof typeof customHooksTranslations;

import type { TranslationKey } from '@/i18n/utils';

export type InsideClaudeKitTabId =
  | 'inside-claudekit'
  | 'inside-claudekit-plan-modes'
  | 'inside-claudekit-frontend-design'
  | 'inside-claudekit-getting-started'
  | 'inside-claudekit-guard-rails';

export type InsideClaudeKitTrack = 'planning' | 'design' | 'foundations' | 'safety';

/** A single Inside ClaudeKit deep-dive article entry. i18n keys are typed so `t()` accepts them directly. */
export interface InsideClaudeKitTopic {
  id: InsideClaudeKitTabId;
  slug: string;
  track: InsideClaudeKitTrack;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  navLabelKey: TranslationKey;
  disabled: boolean;
}

/** Per-track display metadata (colors, badge keys) */
export const trackMeta: Record<
  InsideClaudeKitTrack,
  {
    badgeKey: string;
    /** Tailwind border-l color for article cards */
    borderAccent: string;
    /** Tailwind bg color for badge pill */
    badgeBg: string;
    /** Tailwind text color for badge pill */
    badgeText: string;
    /** Active filter pill bg */
    filterActiveBg: string;
    /** Active filter pill text */
    filterActiveText: string;
  }
> = {
  planning: {
    badgeKey: 'guides.inside_claudekit.track.planning',
    borderAccent: 'border-l-blue-500',
    badgeBg: 'bg-blue-50 dark:bg-blue-950/50',
    badgeText: 'text-blue-700 dark:text-blue-300',
    filterActiveBg: 'bg-blue-600 dark:bg-blue-500',
    filterActiveText: 'text-white',
  },
  design: {
    badgeKey: 'guides.inside_claudekit.track.design',
    borderAccent: 'border-l-rose-500',
    badgeBg: 'bg-rose-50 dark:bg-rose-950/50',
    badgeText: 'text-rose-700 dark:text-rose-300',
    filterActiveBg: 'bg-rose-600 dark:bg-rose-500',
    filterActiveText: 'text-white',
  },
  foundations: {
    badgeKey: 'guides.inside_claudekit.track.foundations',
    borderAccent: 'border-l-emerald-500',
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/50',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    filterActiveBg: 'bg-emerald-600 dark:bg-emerald-500',
    filterActiveText: 'text-white',
  },
  safety: {
    badgeKey: 'guides.inside_claudekit.track.safety',
    borderAccent: 'border-l-amber-500',
    badgeBg: 'bg-amber-50 dark:bg-amber-950/50',
    badgeText: 'text-amber-700 dark:text-amber-300',
    filterActiveBg: 'bg-amber-600 dark:bg-amber-500',
    filterActiveText: 'text-white',
  },
};

export const insideClaudeKitTopics: InsideClaudeKitTopic[] = [
  {
    id: 'inside-claudekit-getting-started' as const,
    slug: 'getting-started',
    track: 'foundations' as InsideClaudeKitTrack,
    titleKey: 'guides.home.inside_claudekit.topic_3.title',
    descKey: 'guides.home.inside_claudekit.topic_3.desc',
    navLabelKey: 'guides.inside_claudekit.topic_3.nav',
    disabled: false,
  },
  {
    id: 'inside-claudekit-plan-modes' as const,
    slug: 'plan-modes',
    track: 'planning' as InsideClaudeKitTrack,
    titleKey: 'guides.home.inside_claudekit.topic_1.title',
    descKey: 'guides.home.inside_claudekit.topic_1.desc',
    navLabelKey: 'guides.inside_claudekit.topic_1.nav',
    disabled: false,
  },
  {
    id: 'inside-claudekit-guard-rails' as const,
    slug: 'guard-rails',
    track: 'safety' as InsideClaudeKitTrack,
    titleKey: 'guides.home.inside_claudekit.topic_4.title',
    descKey: 'guides.home.inside_claudekit.topic_4.desc',
    navLabelKey: 'guides.inside_claudekit.topic_4.nav',
    disabled: false,
  },
  {
    id: 'inside-claudekit-frontend-design' as const,
    slug: 'frontend-design',
    track: 'design' as InsideClaudeKitTrack,
    titleKey: 'guides.home.inside_claudekit.topic_2.title',
    descKey: 'guides.home.inside_claudekit.topic_2.desc',
    navLabelKey: 'guides.inside_claudekit.topic_2.nav',
    disabled: true,
  },
];

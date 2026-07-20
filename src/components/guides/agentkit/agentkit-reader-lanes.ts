import type { Language } from '@/i18n';
import type { TranslationKey } from '@/i18n/utils';

type LocalizedDestination = Readonly<Record<Language, string>>;

export interface AgentKitReaderLane {
  id: 'fresh' | 'clean' | 'coexist' | 'recovery' | 'support';
  href: LocalizedDestination;
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
  ctaKey: TranslationKey;
  group: 'primary' | 'exception';
}

export const AGENTKIT_READER_LANES = [
  {
    id: 'fresh',
    href: { en: '/guides/cli#install', vi: '/vi/guides/cli#install' },
    titleKey: 'agentkit.lanes.fresh.title',
    bodyKey: 'agentkit.lanes.fresh.body',
    ctaKey: 'agentkit.lanes.fresh.cta',
    group: 'primary',
  },
  {
    id: 'clean',
    href: { en: '/guides/agentkit#clean-cutover', vi: '/vi/guides/agentkit#clean-cutover' },
    titleKey: 'agentkit.lanes.clean.title',
    bodyKey: 'agentkit.lanes.clean.body',
    ctaKey: 'agentkit.lanes.clean.cta',
    group: 'primary',
  },
  {
    id: 'coexist',
    href: { en: '/guides/coexistence#pilot-steps', vi: '/vi/guides/coexistence#pilot-steps' },
    titleKey: 'agentkit.lanes.coexist.title',
    bodyKey: 'agentkit.lanes.coexist.body',
    ctaKey: 'agentkit.lanes.coexist.cta',
    group: 'primary',
  },
  {
    id: 'recovery',
    href: { en: '/guides/agentkit#recovery', vi: '/vi/guides/agentkit#recovery' },
    titleKey: 'agentkit.lanes.recovery.title',
    bodyKey: 'agentkit.lanes.recovery.body',
    ctaKey: 'agentkit.lanes.recovery.cta',
    group: 'exception',
  },
  {
    id: 'support',
    href: { en: '/guides/agentkit#support', vi: '/vi/guides/agentkit#support' },
    titleKey: 'agentkit.lanes.support.title',
    bodyKey: 'agentkit.lanes.support.body',
    ctaKey: 'agentkit.lanes.support.cta',
    group: 'exception',
  },
] satisfies ReadonlyArray<AgentKitReaderLane>;

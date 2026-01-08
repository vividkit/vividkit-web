/**
 * Subscription promotions data for AI coding services
 * Used by the Promotions guide to display promotional offers
 * Only includes subscriptions with active promotions
 */

export interface SubscriptionPromotion {
  id: string;
  name: string;
  tagline: string;
  promoLinks: { label: string; url: string }[];
  color: 'amber' | 'emerald' | 'purple' | 'blue' | 'cyan' | 'indigo';
  recommended?: boolean;
}

export const subscriptionPromotions: SubscriptionPromotion[] = [
  {
    id: 'claude-pro',
    name: 'Claude Pro',
    tagline: '50% off for the first 3 months ($10/month instead of $20)',
    promoLinks: [
      { label: 'claude.ai/purpose', url: 'http://claude.ai/purpose' },
      { label: 'claude.ai/alex', url: 'https://claude.ai/alex' },
      { label: 'claude.ai/will', url: 'http://claude.ai/will' },
      { label: 'claude.ai/mac', url: 'http://claude.ai/mac' },
      { label: 'claude.ai/jade', url: 'http://claude.ai/jade' },
      { label: 'claude.ai/acquired', url: 'https://claude.ai/acquired' },
    ],
    color: 'amber',
    recommended: true,
  },
  {
    id: 'zai-subscription',
    name: 'Z.AI GLM',
    tagline: 'Christmas 2025: 50% first-purchase + extra 10-20% off + 10% referral bonus',
    promoLinks: [{ label: 'z.ai/subscribe (referral)', url: 'https://z.ai/subscribe?ic=NEYH1LGAKE' }],
    color: 'emerald',
  },
  {
    id: 'minimax-subscription',
    name: 'MiniMax',
    tagline: 'Starter plan: $2 for first month (reg. $10) + 10% referral discount',
    promoLinks: [{ label: 'platform.minimax.io (referral)', url: 'https://platform.minimax.io/subscribe/coding-plan?code=D3YHMfEe2x&source=link' }],
    color: 'purple',
  },

];

export const tips = [
  {
    id: 'use-ccs',
    title: 'Use CCS to switch between providers',
    description: 'Maximize your usage limits by switching between Claude, GLM, Kimi, and other providers using CCS.',
    link: '/guides/ccs',
  },
  {
    id: 'stack-discounts',
    title: 'Stack multiple discounts',
    description: 'Z.AI Christmas deal stacks: 50% first purchase + extra 10-20% + 10% referral = massive savings!',
  },
  {
    id: 'use-promo-links',
    title: 'Use promotion signup links',
    description: 'Claude Pro has special signup links that give you $10/month for the first 3 months.',
  },
  {
    id: 'free-tiers',
    title: 'Maximize free tiers first',
    description: 'Start with free tiers on each platform before subscribing. Many offer generous free usage.',
  },
];

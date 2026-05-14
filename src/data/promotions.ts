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
    id: 'zai-subscription',
    name: 'Z.AI GLM',
    tagline: '10% off quarterly, 30% off yearly + 10% referral bonus',
    promoLinks: [{ label: 'z.ai/subscribe (referral)', url: 'https://z.ai/subscribe?ic=NEYH1LGAKE' }],
    color: 'emerald',
  },
  {
    id: 'minimax-subscription',
    name: 'MiniMax',
    tagline: '10% referral discount',
    promoLinks: [{ label: 'platform.minimax.io (referral)', url: 'https://platform.minimax.io/subscribe/coding-plan?code=D3YHMfEe2x&source=link' }],
    color: 'purple',
  },
  {
    id: 'alibaba-cloud-ai-coding',
    name: 'Alibaba Coding Plan',
    tagline: 'Pro $50/mo — Only plan available',
    promoLinks: [{ label: 'alibabacloud.com/ai-coding (referral)', url: 'https://www.alibabacloud.com/campaign/ai-scene-coding?referral_code=A92LZF' }],
    color: 'cyan',
    recommended: true,
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
    description: 'Z.AI deal stacks: 10-30% subscription discount + 10% referral bonus = extra savings!',
  },
  {
    id: 'free-tiers',
    title: 'Maximize free tiers first',
    description: 'Start with free tiers on each platform before subscribing. Many offer generous free usage.',
  },
];

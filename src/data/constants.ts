const CLAUDEKIT_ARCHIVE_URL = 'https://claudekit.cc';
const CLAUDEKIT_REFERRAL_CODE = 'OMG49S8R';

interface ClaudeKitReferralEnvironment {
  PUBLIC_CLAUDEKIT_REFERRAL_URL?: string;
}

export function resolveLiveClaudeKitReferralUrl(environment: ClaudeKitReferralEnvironment = {}) {
  const fallback = new URL(CLAUDEKIT_ARCHIVE_URL);
  fallback.searchParams.set('ref', CLAUDEKIT_REFERRAL_CODE);

  try {
    const configured = new URL(environment.PUBLIC_CLAUDEKIT_REFERRAL_URL || CLAUDEKIT_ARCHIVE_URL);
    if (configured.protocol !== 'https:') return fallback.toString();
    configured.searchParams.set('ref', CLAUDEKIT_REFERRAL_CODE);
    return configured.toString();
  } catch {
    return fallback.toString();
  }
}

export const LIVE_CLAUDEKIT_REFERRAL_URL = resolveLiveClaudeKitReferralUrl({
  PUBLIC_CLAUDEKIT_REFERRAL_URL: import.meta.env?.PUBLIC_CLAUDEKIT_REFERRAL_URL,
});

export const SITE_CONFIG = {
  name: 'VividKit',
  tagline: 'Crystal clear AI coding',
  description: 'GUI for ClaudeKit CLI that turns complex terminal commands into visual dashboards. Make AI coding accessible to non-technical team members.',
  // Frozen legacy components consume this compatibility field. Keep it independent of deployment environment.
  claudekitReferralUrl: CLAUDEKIT_ARCHIVE_URL,
  web3formsKey: import.meta.env?.PUBLIC_WEB3FORMS_KEY || '',
  email: 'thieunguyen.tech@gmail.com',
  twitter: '@vividkit',
  github: 'vividkit/vividkit-web',
  domain: 'vividkit.dev'
};

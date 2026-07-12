export type AgentKitAppPlatform = 'windows' | 'macos' | 'linux';
export type AgentKitAppTarget = 'claude-code' | 'codex' | 'other-coding-agents';
export type AgentKitAppCapability =
  | 'skills-and-plugins'
  | 'configuration'
  | 'tokens-and-plans'
  | 'secret-scanning';

export interface AgentKitAppSource {
  id: 'product-page' | 'stable-changelog';
  channel: 'pre-release' | 'stable';
  status: 'paid-waitlist' | 'stable-release-notes';
  sourceUrl: string;
  verifiedAt: string;
  releaseVersion?: string;
}

export const AGENTKIT_APP_SOURCES = [
  {
    id: 'product-page',
    channel: 'pre-release',
    status: 'paid-waitlist',
    sourceUrl: 'https://agentkit.best/agentkit-app',
    verifiedAt: '2026-07-12',
  },
  {
    id: 'stable-changelog',
    channel: 'stable',
    status: 'stable-release-notes',
    sourceUrl: 'https://agentkit.best/changelog',
    verifiedAt: '2026-07-12',
    releaseVersion: '2.0.0',
  },
] as const satisfies readonly AgentKitAppSource[];

export const AGENTKIT_APP_FACTS = {
  status: 'public-availability-not-established',
  ctaUrl: 'https://agentkit.best/agentkit-app#pricing',
  releasePageUrl: 'https://github.com/bestagentkits/agentkit/releases/tag/v2.0.0',
  publicDownloadStatus: 'not-verified',
  marketedPlatforms: ['windows', 'macos'],
  releaseAssetPlatforms: ['macos', 'linux', 'windows'],
  targets: ['claude-code', 'codex', 'other-coding-agents'],
  capabilities: [
    'skills-and-plugins',
    'configuration',
    'tokens-and-plans',
    'secret-scanning',
  ],
  paymentRequiredToReserve: true,
  confirmationMethod: 'email',
  activationMethod: 'invite',
  deviceRegistrationDocumented: true,
  shortOfflineContinuityDocumented: true,
  cliRelationship: 'separate-auth-sessions-app-license-gated-shell',
  linuxStatus: 'gui-asset-documented-download-not-verified',
  appReleaseNotes: 'documented-in-stable-cli-changelog',
  releasePageStatus: 'unavailable-when-verified',
} as const;

export function getAgentKitAppSource(id: AgentKitAppSource['id']): AgentKitAppSource {
  const source = AGENTKIT_APP_SOURCES.find((candidate) => candidate.id === id);
  if (!source) throw new Error(`Missing AgentKit App source: ${id}`);
  return source;
}

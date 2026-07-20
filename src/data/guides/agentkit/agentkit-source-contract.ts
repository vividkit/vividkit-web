import { AGENTKIT_OFFICIAL_LINKS } from './agentkit-official-links.mjs';

export const PUBLIC_AGENTKIT_RELEASE_CHANNELS = ['stable', 'beta'] as const;
export const AGENTKIT_TRUSTED_SOURCE_ORIGINS = [
  'https://agentkit.best',
  'https://releases.agentkit.best',
] as const;

export type AgentKitCliReleaseChannel = typeof PUBLIC_AGENTKIT_RELEASE_CHANNELS[number];
export type PublicAgentKitReleaseChannel = AgentKitCliReleaseChannel;
export type AgentKitEvidenceChannel = AgentKitCliReleaseChannel | 'dev' | 'legacy';
export type EvidenceClass =
  | 'public-release'
  | 'official-docs'
  | 'implementation-audit'
  | 'support-policy'
  | 'legacy-snapshot'
  | 'governance-prototype';
export type LegacyStatus = 'current' | 'legacy' | 'archived' | 'not-applicable';
export type ArtifactKind =
  | 'agentkit-cli'
  | 'engineer-kit'
  | 'marketing-kit'
  | 'agentkit-app'
  | 'claudekit-cli'
  | 'vividkit-policy';
export type FactScope = 'binary' | 'project' | 'kit' | 'account' | 'diagnostic';

export interface AgentKitArtifactSourceMetadata {
  sourceUrl: string;
  verifiedAt: string;
  evidenceClass: EvidenceClass;
  artifactKind: ArtifactKind;
  artifactVersion: string;
  legacyStatus: LegacyStatus;
}

export interface AgentKitSourceMetadata extends AgentKitArtifactSourceMetadata {
  channel: AgentKitCliReleaseChannel;
  releaseVersion?: string;
}

export interface AgentKitEvidenceSourceMetadata extends Omit<AgentKitSourceMetadata, 'channel'> {
  channel: AgentKitEvidenceChannel;
}

export interface AgentKitCliFact extends AgentKitSourceMetadata {
  id: string;
  command: string;
  scope: FactScope;
  mutatesDisk: boolean;
  previewDefault?: boolean;
  flags: readonly string[];
  writesTo?: readonly string[];
  integrityFactId?: string;
  note?: string;
}

export interface ArtifactIntegrityFact extends AgentKitSourceMetadata {
  id: string;
  pinned: boolean;
  artifactUrl?: string;
  digest?: string;
  signatureManifestUrl?: string;
  signingIdentity?: string;
  verificationLevel: 'documented-signed-manifest' | 'checksum-only' | 'unverified';
  copyPolicy: 'verified-install' | 'trust-boundary-convenience';
}

export interface CredentialTransport extends AgentKitSourceMetadata {
  id: 'license-key' | 'email-otp' | 'api-key';
  command: string;
  officialMethod: string;
  exposureNotes: string;
  ciHandling: string;
  masking: string;
  leastPrivilege: string;
  forkPullRequestIsolation: string;
  rotationAndRevocation: string;
}

export const AGENTKIT_SOURCE_SNAPSHOT = {
  channel: 'stable',
  sourceUrl: AGENTKIT_OFFICIAL_LINKS.docs,
  changelogUrl: AGENTKIT_OFFICIAL_LINKS.changelog,
  verifiedAt: '2026-07-20',
  releaseVersion: '2.4.0',
  latestPrerelease: '2.4.0-beta.7',
  promotedFromPrerelease: '2.4.0-beta.7',
  activeBetaVersion: null,
  hasActiveBeta: false,
  evidenceClass: 'official-docs',
  artifactKind: 'agentkit-cli',
  artifactVersion: '2.4.0',
  legacyStatus: 'current',
} as const satisfies AgentKitSourceMetadata & {
  changelogUrl: string;
  latestPrerelease: string;
  promotedFromPrerelease: string;
  activeBetaVersion: string | null;
  hasActiveBeta: boolean;
};

export const AGENTKIT_ARTIFACT_INTEGRITY_FACTS = [
  {
    id: 'official-installer-latest',
    channel: 'stable',
    sourceUrl: AGENTKIT_SOURCE_SNAPSHOT.sourceUrl,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
    evidenceClass: AGENTKIT_SOURCE_SNAPSHOT.evidenceClass,
    artifactKind: AGENTKIT_SOURCE_SNAPSHOT.artifactKind,
    artifactVersion: AGENTKIT_SOURCE_SNAPSHOT.artifactVersion,
    legacyStatus: AGENTKIT_SOURCE_SNAPSHOT.legacyStatus,
    pinned: false,
    verificationLevel: 'documented-signed-manifest',
    copyPolicy: 'trust-boundary-convenience',
  },
] as const satisfies readonly ArtifactIntegrityFact[];

export function canClaimVerifiedInstall(integrityFactId: string): boolean {
  const fact: ArtifactIntegrityFact | undefined = AGENTKIT_ARTIFACT_INTEGRITY_FACTS
    .find(({ id }) => id === integrityFactId);
  return Boolean(
    fact?.pinned
    && fact.releaseVersion
    && fact.artifactUrl
    && fact.digest
    && fact.signatureManifestUrl
    && fact.signingIdentity
    && fact.copyPolicy === 'verified-install',
  );
}

const CREDENTIAL_SAFETY = {
  masking: 'Render placeholders only; mask values in terminals, screenshots, logs, and support bundles.',
  leastPrivilege: 'Use the narrowest entitlement and a dedicated automation credential where available.',
  forkPullRequestIsolation: 'Do not expose credentials to untrusted forks or fork-triggered pull request jobs.',
  rotationAndRevocation: 'Revoke or rotate immediately after suspected disclosure; log out shared devices.',
} as const;

function credentialTransport(
  transport: Omit<CredentialTransport, keyof AgentKitSourceMetadata>,
): CredentialTransport {
  return {
    ...transport,
    channel: AGENTKIT_SOURCE_SNAPSHOT.channel,
    sourceUrl: AGENTKIT_SOURCE_SNAPSHOT.sourceUrl,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
    evidenceClass: AGENTKIT_SOURCE_SNAPSHOT.evidenceClass,
    artifactKind: AGENTKIT_SOURCE_SNAPSHOT.artifactKind,
    artifactVersion: AGENTKIT_SOURCE_SNAPSHOT.artifactVersion,
    legacyStatus: AGENTKIT_SOURCE_SNAPSHOT.legacyStatus,
  };
}

export const AGENTKIT_CREDENTIAL_TRANSPORTS = [
  credentialTransport({
    id: 'email-otp',
    command: 'ak login --email <account-email>',
    officialMethod: 'Interactive email one-time-code sign-in for a CLI registry session.',
    exposureNotes: 'The email address is visible in the command; the short-lived OTP is entered interactively.',
    ciHandling: 'Interactive OTP is unsuitable for unattended CI.',
    ...CREDENTIAL_SAFETY,
  }),
  credentialTransport({
    id: 'api-key',
    command: 'ak login --api-key <api-key> --no-interactive',
    officialMethod: 'User API key for a non-interactive CLI registry session and CI use.',
    exposureNotes: 'A command-line argument can be retained by shell history, job logs, or process inspection.',
    ciHandling: 'Inject through a masked CI secret and expand only in the trusted job; never print the command.',
    ...CREDENTIAL_SAFETY,
  }),
  credentialTransport({
    id: 'license-key',
    command: 'ak login --license-key <license-key>',
    officialMethod: 'Desktop App device activation only — does not open a CLI registry session.',
    exposureNotes: 'A command-line argument can be retained by shell history or visible in a process listing.',
    ciHandling: 'Not a CLI authentication method; use the documented non-interactive API-key flow for CI.',
    ...CREDENTIAL_SAFETY,
  }),
] as const satisfies readonly CredentialTransport[];

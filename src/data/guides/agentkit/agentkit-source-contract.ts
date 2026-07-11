export type ReleaseChannel = 'stable' | 'beta' | 'dev' | 'legacy';
export type FactScope = 'binary' | 'project' | 'kit' | 'account' | 'diagnostic';

export interface AgentKitSourceMetadata {
  channel: ReleaseChannel;
  sourceUrl: string;
  verifiedAt: string;
  releaseVersion?: string;
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
  sourceUrl: 'https://agentkit.best/docs',
  changelogUrl: 'https://agentkit.best/changelog',
  verifiedAt: '2026-07-12',
  localBetaVersion: '1.2.0-beta.1',
} as const satisfies AgentKitSourceMetadata & {
  changelogUrl: string;
  localBetaVersion: string;
};

export const AGENTKIT_ARTIFACT_INTEGRITY_FACTS = [
  {
    id: 'official-installer-latest',
    channel: 'stable',
    sourceUrl: AGENTKIT_SOURCE_SNAPSHOT.sourceUrl,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
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
  transport: Omit<CredentialTransport, 'channel' | 'sourceUrl' | 'verifiedAt'>,
): CredentialTransport {
  return {
    ...transport,
    channel: AGENTKIT_SOURCE_SNAPSHOT.channel,
    sourceUrl: AGENTKIT_SOURCE_SNAPSHOT.sourceUrl,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
  };
}

export const AGENTKIT_CREDENTIAL_TRANSPORTS = [
  credentialTransport({
    id: 'license-key',
    command: 'ak login --license-key <license-key>',
    officialMethod: 'Paid-seat device activation with an optional device name.',
    exposureNotes: 'A command-line argument can be retained by shell history or visible in a process listing.',
    ciHandling: 'Not the recommended CI method; prefer the documented non-interactive API-key flow.',
    ...CREDENTIAL_SAFETY,
  }),
  credentialTransport({
    id: 'email-otp',
    command: 'ak login --email <account-email>',
    officialMethod: 'Interactive email one-time-code sign-in.',
    exposureNotes: 'The email address is visible in the command; the short-lived OTP is entered interactively.',
    ciHandling: 'Interactive OTP is unsuitable for unattended CI.',
    ...CREDENTIAL_SAFETY,
  }),
  credentialTransport({
    id: 'api-key',
    command: 'ak login --api-key <api-key> --no-interactive',
    officialMethod: 'User API key for non-interactive and CI use.',
    exposureNotes: 'A command-line argument can be retained by shell history, job logs, or process inspection.',
    ciHandling: 'Inject through a masked CI secret and expand only in the trusted job; never print the command.',
    ...CREDENTIAL_SAFETY,
  }),
] as const satisfies readonly CredentialTransport[];

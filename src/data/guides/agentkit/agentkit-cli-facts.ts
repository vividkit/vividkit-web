import type {
  AgentKitCliFact,
  AgentKitCliReleaseChannel,
  AgentKitSourceMetadata,
} from './agentkit-source-contract.ts';
import { AGENTKIT_SOURCE_SNAPSHOT } from './agentkit-source-contract.ts';

type SourceMetadataKey = keyof AgentKitSourceMetadata;

const stable = (
  fact: Omit<AgentKitCliFact, SourceMetadataKey>,
): AgentKitCliFact => ({
  ...fact,
  channel: 'stable',
  sourceUrl: AGENTKIT_SOURCE_SNAPSHOT.sourceUrl,
  verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
  releaseVersion: AGENTKIT_SOURCE_SNAPSHOT.releaseVersion,
  evidenceClass: 'official-docs',
  artifactKind: 'agentkit-cli',
  artifactVersion: AGENTKIT_SOURCE_SNAPSHOT.releaseVersion,
  legacyStatus: 'current',
});

const STABLE_AGENTKIT_CLI_FACTS = [
  stable({ id: 'install-unix', command: 'curl -fsSL https://agentkit.best/install.sh | sh', scope: 'binary', mutatesDisk: true, flags: ['AK_CHANNEL', 'AK_INSTALL_DIR', 'AK_VERSION'], writesTo: ['~/.local/bin/ak'], integrityFactId: 'official-installer-latest', note: 'Primary installer. Fallback when the product domain is blocked: curl -fsSL https://releases.agentkit.best/install.sh | sh' }),
  stable({ id: 'install-windows', command: 'irm https://agentkit.best/install.ps1 | iex', scope: 'binary', mutatesDisk: true, flags: ['AK_CHANNEL', 'AK_INSTALL_DIR', 'AK_VERSION'], writesTo: ['%USERPROFILE%\\bin\\ak.exe'], integrityFactId: 'official-installer-latest', note: 'Primary installer. Fallback when the product domain is blocked: irm https://releases.agentkit.best/install.ps1 | iex' }),
  stable({ id: 'new', command: 'ak new', scope: 'project', mutatesDisk: true, flags: [] }),
  stable({ id: 'init', command: 'ak init', scope: 'project', mutatesDisk: true, flags: [] }),
  stable({ id: 'update', command: 'ak update', scope: 'project', mutatesDisk: true, flags: ['--dry-run'] }),
  stable({ id: 'setup', command: 'ak setup', scope: 'project', mutatesDisk: true, flags: ['--dry-run'] }),
  stable({ id: 'skills', command: 'ak skills', scope: 'project', mutatesDisk: false, flags: [] }),
  stable({ id: 'agents', command: 'ak agents', scope: 'project', mutatesDisk: false, flags: [] }),
  stable({ id: 'doctor', command: 'ak doctor', scope: 'diagnostic', mutatesDisk: false, flags: ['--check'] }),
  stable({ id: 'versions', command: 'ak versions', scope: 'diagnostic', mutatesDisk: false, flags: [] }),
  stable({ id: 'config', command: 'ak config', scope: 'project', mutatesDisk: true, flags: ['--dry-run'] }),
  stable({ id: 'uninstall', command: 'ak uninstall', scope: 'binary', mutatesDisk: true, flags: ['--dry-run'] }),
  stable({ id: 'login-email', command: 'ak login --email <account-email>', scope: 'account', mutatesDisk: true, flags: ['--email'], note: 'Recommended CLI session method for local use.' }),
  stable({ id: 'login-api-key', command: 'ak login --api-key <api-key> --no-interactive', scope: 'account', mutatesDisk: true, flags: ['--api-key', '--no-interactive'], note: 'Recommended CLI session method for CI.' }),
  stable({ id: 'login-license', command: 'ak login --license-key <license-key>', scope: 'account', mutatesDisk: true, flags: ['--license-key', '--device-name'], note: 'Desktop App device activation only — does not open a CLI registry session.' }),
  stable({ id: 'whoami', command: 'ak whoami', scope: 'account', mutatesDisk: false, flags: [] }),
  stable({ id: 'licenses', command: 'ak licenses', scope: 'account', mutatesDisk: false, flags: [] }),
  stable({ id: 'logout', command: 'ak logout', scope: 'account', mutatesDisk: true, flags: [] }),
  stable({ id: 'kit-init', command: 'ak kit init <kit> --target <agent>', scope: 'kit', mutatesDisk: true, flags: ['--target', '--force', '--yes'] }),
  stable({ id: 'kit-init-global', command: 'ak kit init <kit> --target <agent> --global', scope: 'kit', mutatesDisk: true, flags: ['--target', '--global', '--force', '--yes'] }),
  stable({ id: 'kit-install', command: 'ak kit install <kit> --target <agent>', scope: 'kit', mutatesDisk: true, flags: ['--target', '--skills', '--exclude-skills', '--select-skills', '--force', '--yes'] }),
  stable({ id: 'kit-install-global', command: 'ak kit install <kit> --target <agent> --global', scope: 'kit', mutatesDisk: true, flags: ['--target', '--global', '--skills', '--exclude-skills', '--select-skills', '--force', '--yes'] }),
  stable({ id: 'kit-list', command: 'ak kit list-kits', scope: 'kit', mutatesDisk: false, flags: [], note: 'Stable and beta binaries expose list-kits. Official docs may still say ak kit list; that string is not a working alias.' }),
  stable({ id: 'kit-refresh', command: 'ak kit refresh <kit> --yes', scope: 'kit', mutatesDisk: true, previewDefault: true, flags: ['--yes', '--global', '--target'] }),
  stable({ id: 'migrate', command: 'ak migrate --from=ck', scope: 'project', mutatesDisk: true, previewDefault: true, flags: ['--from', '--dry-run', '--yes', '--no-interactive'], note: 'Preview/smoke is the VividKit default. Apply and rollback remain advanced, support-assisted operations for important data.' }),
  stable({ id: 'self-update', command: 'ak self-update', scope: 'binary', mutatesDisk: true, flags: ['--check', '--yes', '--channel'] }),
  stable({ id: 'audit', command: 'ak audit', scope: 'diagnostic', mutatesDisk: false, flags: [] }),
  stable({ id: 'gui', command: 'ak gui', scope: 'binary', mutatesDisk: false, flags: [] }),
] as const satisfies readonly AgentKitCliFact[];

const BETA_AGENTKIT_CLI_FACTS = [] as const satisfies readonly AgentKitCliFact[];

export interface AgentKitCliReleaseCatalog {
  channel: AgentKitCliReleaseChannel;
  artifactKind: 'agentkit-cli';
  artifactVersion: string;
  evidenceClass: 'public-release';
  fixtureId: string;
  facts: readonly AgentKitCliFact[];
}

export const AGENTKIT_CLI_RELEASE_CATALOGS = {
  stable: {
    channel: 'stable',
    artifactKind: 'agentkit-cli',
    artifactVersion: AGENTKIT_SOURCE_SNAPSHOT.releaseVersion,
    evidenceClass: 'public-release',
    fixtureId: 'agentkit-cli-stable-2.3.0',
    facts: STABLE_AGENTKIT_CLI_FACTS,
  },
  beta: {
    channel: 'beta',
    artifactKind: 'agentkit-cli',
    artifactVersion: AGENTKIT_SOURCE_SNAPSHOT.betaReleaseVersion,
    evidenceClass: 'public-release',
    fixtureId: 'agentkit-cli-beta-2.3.1-beta.1',
    facts: BETA_AGENTKIT_CLI_FACTS,
  },
} as const satisfies Record<AgentKitCliReleaseChannel, AgentKitCliReleaseCatalog>;

export const AGENTKIT_CLI_FACTS = STABLE_AGENTKIT_CLI_FACTS;

export function getAgentKitCliCatalog(channel: AgentKitCliReleaseChannel): AgentKitCliReleaseCatalog {
  return AGENTKIT_CLI_RELEASE_CATALOGS[channel];
}

export function getAgentKitCliFactsByChannel(channel: AgentKitCliReleaseChannel): readonly AgentKitCliFact[] {
  return getAgentKitCliCatalog(channel).facts;
}

export function getStableAgentKitCliFacts(): readonly AgentKitCliFact[] {
  return getAgentKitCliFactsByChannel('stable');
}

export function getAgentKitCliFact(
  id: string,
  channel: AgentKitCliReleaseChannel = 'stable',
): AgentKitCliFact | undefined {
  return getAgentKitCliFactsByChannel(channel).find((fact) => fact.id === id);
}

export function createAgentKitCliFactIndex(
  facts: readonly AgentKitCliFact[],
): ReadonlyMap<string, AgentKitCliFact> {
  const index = new Map<string, AgentKitCliFact>();
  for (const fact of facts) {
    const key = `${fact.channel}:${fact.id}`;
    const existing = index.get(key);
    if (existing && JSON.stringify(existing) !== JSON.stringify(fact)) {
      throw new Error(`Divergent duplicate AgentKit CLI fact: ${key}`);
    }
    index.set(key, fact);
  }
  return index;
}

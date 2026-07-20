import type {
  AgentKitCliFact,
  AgentKitCliReleaseChannel,
  AgentKitSourceMetadata,
} from './agentkit-source-contract.ts';
import { AGENTKIT_SOURCE_SNAPSHOT } from './agentkit-source-contract.ts';
import { AGENTKIT_OFFICIAL_LINKS } from './agentkit-official-links.mjs';

type SourceMetadataKey = keyof AgentKitSourceMetadata;

const stable = (
  fact: Omit<AgentKitCliFact, SourceMetadataKey>,
): AgentKitCliFact => ({
  ...fact,
  channel: 'stable',
  sourceUrl: AGENTKIT_OFFICIAL_LINKS.docs,
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
  stable({ id: 'verify-version', command: 'ak --version', scope: 'diagnostic', mutatesDisk: false, flags: [] }),
  stable({ id: 'new', command: 'ak new', scope: 'project', mutatesDisk: true, flags: [] }),
  stable({ id: 'init', command: 'ak init', scope: 'project', mutatesDisk: true, flags: [] }),
  stable({ id: 'update', command: 'ak update', scope: 'project', mutatesDisk: true, flags: ['--dry-run'] }),
  stable({ id: 'setup', command: 'ak setup', scope: 'project', mutatesDisk: true, flags: [], note: 'Writes AgentKit configuration only. The command has no dry-run or config-only flag; back up the project first.' }),
  stable({ id: 'skills', command: 'ak skills', scope: 'project', mutatesDisk: false, flags: [] }),
  stable({ id: 'agents', command: 'ak agents', scope: 'project', mutatesDisk: false, flags: [] }),
  stable({ id: 'doctor', command: 'ak doctor', scope: 'diagnostic', mutatesDisk: false, flags: ['--fix'], note: 'The default command is read-only. --fix mutates configuration and should be reviewed separately.' }),
  stable({ id: 'doctor-offline', command: 'ak doctor --offline', scope: 'diagnostic', mutatesDisk: false, flags: ['--offline'], note: 'Runs diagnostics without network access; it does not make an uncached install available.' }),
  stable({ id: 'versions', command: 'ak versions', scope: 'diagnostic', mutatesDisk: false, flags: [] }),
  stable({ id: 'versions-local', command: 'ak versions --local-only', scope: 'diagnostic', mutatesDisk: false, flags: ['--local-only'], note: 'Lists local version evidence only. Cached availability does not prove the version is latest.' }),
  stable({ id: 'config', command: 'ak config', scope: 'project', mutatesDisk: true, flags: ['--dry-run'] }),
  stable({ id: 'uninstall', command: 'ak uninstall --dry-run', scope: 'project', mutatesDisk: true, previewDefault: true, flags: ['--dry-run', '--yes'], note: 'The shown form previews removal of AgentKit-owned project content. The uninstall family is treated as mutating and does not remove the ak binary or runtime home.' }),
  stable({ id: 'login-email', command: 'ak login --email <account-email>', scope: 'account', mutatesDisk: true, flags: ['--email'], note: 'Recommended CLI session method for local use.' }),
  stable({ id: 'login-api-key', command: 'ak login --api-key <api-key> --no-interactive', scope: 'account', mutatesDisk: true, flags: ['--api-key', '--no-interactive'], note: 'Recommended CLI session method for CI.' }),
  stable({ id: 'login-license', command: 'ak login --license-key <license-key>', scope: 'account', mutatesDisk: true, flags: ['--license-key', '--device-name'], note: 'Desktop App device activation only — does not open a CLI registry session.' }),
  stable({ id: 'whoami', command: 'ak whoami', scope: 'account', mutatesDisk: false, flags: [] }),
  stable({ id: 'licenses', command: 'ak licenses', scope: 'account', mutatesDisk: false, flags: [] }),
  stable({ id: 'logout', command: 'ak logout', scope: 'account', mutatesDisk: true, flags: [] }),
  stable({ id: 'kit-init', command: 'ak kit init <kit> --target <agent>', scope: 'kit', mutatesDisk: true, flags: ['--target', '--force', '--yes'], note: 'Use engineer or marketing. Stable is remote-first, so --remote is unnecessary. --force preserves extra files but overwrites selected AgentKit-owned or colliding paths.' }),
  stable({ id: 'kit-init-global', command: 'ak kit init <kit> --target <agent> --global', scope: 'kit', mutatesDisk: true, flags: ['--target', '--global', '--force', '--yes'], note: 'Global scope must be explicit. Use only engineer or marketing and an explicit supported target.' }),
  stable({ id: 'kit-init-dual', command: 'ak kit init <kit> --target claude-code,codex', scope: 'kit', mutatesDisk: true, flags: ['--target', '--force', '--yes'], note: 'Installs one entitled engineer or marketing kit for both supported coding-agent targets.' }),
  stable({ id: 'kit-install', command: 'ak kit install <kit> --target <agent>', scope: 'kit', mutatesDisk: true, flags: ['--target', '--skills', '--exclude-skills', '--select-skills', '--force', '--yes'] }),
  stable({ id: 'kit-install-global', command: 'ak kit install <kit> --target <agent> --global', scope: 'kit', mutatesDisk: true, flags: ['--target', '--global', '--skills', '--exclude-skills', '--select-skills', '--force', '--yes'] }),
  stable({ id: 'kit-list', command: 'ak kit list-kits', scope: 'kit', mutatesDisk: false, flags: [], note: 'Use the documented list-kits subcommand; older shorthand is not a working alias.' }),
  stable({ id: 'kit-refresh', command: 'ak kit refresh <kit> --yes', scope: 'kit', mutatesDisk: true, flags: ['--yes', '--global', '--target'], note: 'Refreshes the selected installed kit. Review ownership and back up customizations first.' }),
  stable({ id: 'kit-uninstall', command: 'ak kit uninstall <kit> --dry-run', scope: 'kit', mutatesDisk: false, previewDefault: true, flags: ['--dry-run', '--yes', '--kits-dir', '--plugin-mode', '--project-dir'], note: 'Preview is the safe default. The command resolves manifest-backed ownership and snapshots before writes; omit --dry-run and add --yes only after reviewing every selected path.' }),
  stable({ id: 'backups-list', command: 'ak backups list', scope: 'diagnostic', mutatesDisk: false, flags: [] }),
  stable({ id: 'backups-verify', command: 'ak backups verify <backup-id>', scope: 'diagnostic', mutatesDisk: false, flags: [] }),
  stable({ id: 'backups-restore', command: 'ak backups restore <backup-id> --dry-run', scope: 'project', mutatesDisk: false, previewDefault: true, flags: ['--dry-run', '--yes'], note: 'Inspect the restore preview before any write.' }),
  stable({ id: 'recover', command: 'ak recover --latest --dry-run', scope: 'project', mutatesDisk: false, previewDefault: true, flags: ['--latest', '--dry-run', '--yes'], note: 'Previews recovery from the latest available recovery point. Confirm the identifier before any write.' }),
  stable({ id: 'migrate', command: 'ak migrate --from=ck', scope: 'project', mutatesDisk: true, previewDefault: true, flags: ['--from', '--dry-run', '--yes', '--no-interactive'], note: 'Preview/smoke is the VividKit default. Apply and rollback remain advanced, support-assisted operations for important data.' }),
  stable({ id: 'self-update', command: 'ak self-update', scope: 'binary', mutatesDisk: true, flags: ['--check', '--yes', '--channel'] }),
  stable({ id: 'self-update-check', command: 'ak self-update --check', scope: 'binary', mutatesDisk: false, flags: ['--check'], note: 'Checks availability without replacing the binary.' }),
  stable({ id: 'audit', command: 'ak audit', scope: 'diagnostic', mutatesDisk: false, flags: [] }),
  stable({ id: 'portable-export', command: 'ak kit init engineer --target portable --build-only --out ./agentkit-portable', scope: 'kit', mutatesDisk: true, flags: ['--target', '--build-only', '--out'], writesTo: ['./agentkit-portable'], note: 'Builds an exact portable Engineer bundle in the selected output directory without installing into Claude Code or Codex.' }),
  stable({ id: 'gui', command: 'ak gui', scope: 'binary', mutatesDisk: false, flags: [] }),
] as const satisfies readonly AgentKitCliFact[];

const BETA_AGENTKIT_CLI_FACTS = [] as const satisfies readonly AgentKitCliFact[];

export interface AgentKitCliReleaseCatalog {
  channel: AgentKitCliReleaseChannel;
  artifactKind: 'agentkit-cli';
  artifactVersion: string | null;
  evidenceClass: 'public-release';
  fixtureId: string | null;
  facts: readonly AgentKitCliFact[];
}

export const AGENTKIT_CLI_RELEASE_CATALOGS = {
  stable: {
    channel: 'stable',
    artifactKind: 'agentkit-cli',
    artifactVersion: AGENTKIT_SOURCE_SNAPSHOT.releaseVersion,
    evidenceClass: 'public-release',
    fixtureId: 'agentkit-cli-stable-2.4.0',
    facts: STABLE_AGENTKIT_CLI_FACTS,
  },
  beta: {
    channel: 'beta',
    artifactKind: 'agentkit-cli',
    artifactVersion: AGENTKIT_SOURCE_SNAPSHOT.activeBetaVersion,
    evidenceClass: 'public-release',
    fixtureId: null,
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

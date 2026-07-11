import type { AgentKitCliFact, ReleaseChannel } from './agentkit-source-contract.ts';
import { AGENTKIT_SOURCE_SNAPSHOT } from './agentkit-source-contract.ts';

const stable = (
  fact: Omit<AgentKitCliFact, 'channel' | 'sourceUrl' | 'verifiedAt'>,
): AgentKitCliFact => ({
  ...fact,
  channel: 'stable',
  sourceUrl: AGENTKIT_SOURCE_SNAPSHOT.sourceUrl,
  verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
});

const beta = (
  fact: Omit<AgentKitCliFact, 'channel' | 'sourceUrl' | 'verifiedAt' | 'releaseVersion'>,
): AgentKitCliFact => ({
  ...fact,
  channel: 'beta',
  sourceUrl: AGENTKIT_SOURCE_SNAPSHOT.changelogUrl,
  verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
  releaseVersion: AGENTKIT_SOURCE_SNAPSHOT.localBetaVersion,
});

export const AGENTKIT_CLI_FACTS = [
  stable({ id: 'install-unix', command: 'curl -fsSL https://agentkit.best/install.sh | sh', scope: 'binary', mutatesDisk: true, flags: ['AK_CHANNEL', 'AK_INSTALL_DIR', 'AK_VERSION'], writesTo: ['~/.local/bin/ak'], integrityFactId: 'official-installer-latest' }),
  stable({ id: 'install-windows', command: 'irm https://agentkit.best/install.ps1 | iex', scope: 'binary', mutatesDisk: true, flags: ['AK_CHANNEL', 'AK_INSTALL_DIR', 'AK_VERSION'], writesTo: ['%USERPROFILE%\\bin\\ak.exe'], integrityFactId: 'official-installer-latest' }),
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
  stable({ id: 'login-license', command: 'ak login --license-key <license-key>', scope: 'account', mutatesDisk: true, flags: ['--license-key', '--device-name'] }),
  stable({ id: 'login-email', command: 'ak login --email <account-email>', scope: 'account', mutatesDisk: true, flags: ['--email'] }),
  stable({ id: 'login-api-key', command: 'ak login --api-key <api-key> --no-interactive', scope: 'account', mutatesDisk: true, flags: ['--api-key', '--no-interactive'] }),
  stable({ id: 'whoami', command: 'ak whoami', scope: 'account', mutatesDisk: false, flags: [] }),
  stable({ id: 'licenses', command: 'ak licenses', scope: 'account', mutatesDisk: false, flags: [] }),
  stable({ id: 'logout', command: 'ak logout', scope: 'account', mutatesDisk: true, flags: [] }),
  stable({ id: 'kit-init', command: 'ak kit init <kit> --target <agent> --global', scope: 'kit', mutatesDisk: true, flags: ['--target', '--global', '--dry-run'] }),
  stable({ id: 'kit-install', command: 'ak kit install <kit> --target <agent> --global', scope: 'kit', mutatesDisk: true, flags: ['--target', '--global', '--skills', '--exclude-skills', '--select-skills', '--force', '--dry-run'] }),
  stable({ id: 'kit-list', command: 'ak kit list', scope: 'kit', mutatesDisk: false, flags: [] }),
  stable({ id: 'self-update', command: 'ak self-update', scope: 'binary', mutatesDisk: true, flags: [] }),
  stable({ id: 'audit', command: 'ak audit', scope: 'diagnostic', mutatesDisk: false, flags: [] }),
  stable({ id: 'gui', command: 'ak gui', scope: 'binary', mutatesDisk: false, flags: [] }),
  beta({ id: 'migrate', command: 'ak migrate', scope: 'project', mutatesDisk: true, previewDefault: true, flags: ['--apply', '--rollback'], note: 'Observed in local 1.2.0-beta.1; do not render as stable.' }),
  beta({ id: 'kit-refresh', command: 'ak kit refresh <kit>', scope: 'kit', mutatesDisk: true, previewDefault: true, flags: ['--apply'], note: 'Observed in local 1.2.0-beta.1; do not render as stable.' }),
] as const satisfies readonly AgentKitCliFact[];

export function getAgentKitCliFactsByChannel(channel: ReleaseChannel): readonly AgentKitCliFact[] {
  return AGENTKIT_CLI_FACTS.filter((fact) => fact.channel === channel);
}

export function getStableAgentKitCliFacts(): readonly AgentKitCliFact[] {
  return getAgentKitCliFactsByChannel('stable');
}

export function getAgentKitCliFact(id: string, channel: ReleaseChannel = 'stable'): AgentKitCliFact | undefined {
  return AGENTKIT_CLI_FACTS.find((fact) => fact.id === id && fact.channel === channel);
}

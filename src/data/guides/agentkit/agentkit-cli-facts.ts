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

export const AGENTKIT_CLI_FACTS = [
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
  stable({ id: 'kit-init', command: 'ak kit init <kit> --target <agent> --global', scope: 'kit', mutatesDisk: true, flags: ['--target', '--global', '--force', '--yes'] }),
  stable({ id: 'kit-install', command: 'ak kit install <kit> --target <agent> --global', scope: 'kit', mutatesDisk: true, flags: ['--target', '--global', '--skills', '--exclude-skills', '--select-skills', '--force', '--yes'] }),
  stable({ id: 'kit-list', command: 'ak kit list-kits', scope: 'kit', mutatesDisk: false, flags: [], note: 'Stable and beta binaries expose list-kits. Official docs may still say ak kit list; that string is not a working alias.' }),
  stable({ id: 'kit-refresh', command: 'ak kit refresh <kit> --yes', scope: 'kit', mutatesDisk: true, previewDefault: true, flags: ['--yes', '--global', '--target'] }),
  stable({ id: 'migrate', command: 'ak migrate --from=ck', scope: 'project', mutatesDisk: true, previewDefault: true, flags: ['--from', '--dry-run', '--yes', '--no-interactive'], note: 'Dry-run by default. Apply with --dry-run=false --yes. Roll back with ak migrate rollback.' }),
  stable({ id: 'self-update', command: 'ak self-update', scope: 'binary', mutatesDisk: true, flags: ['--check', '--yes', '--channel'] }),
  stable({ id: 'audit', command: 'ak audit', scope: 'diagnostic', mutatesDisk: false, flags: [] }),
  stable({ id: 'gui', command: 'ak gui', scope: 'binary', mutatesDisk: false, flags: [] }),
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

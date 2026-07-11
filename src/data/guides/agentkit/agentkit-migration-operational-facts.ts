import type { AgentKitSourceMetadata } from './agentkit-source-contract.ts';
import { AGENTKIT_SOURCE_SNAPSHOT } from './agentkit-source-contract.ts';

export type MigrationPlatform = 'macos' | 'linux' | 'windows';
export type MigrationShell = 'zsh' | 'bash' | 'powershell';

export interface AgentKitMigrationOperationalFact extends AgentKitSourceMetadata {
  id: string;
  stage: 'preflight' | 'verify-install' | 'collision-check' | 'legacy-removal';
  platform: MigrationPlatform;
  shell: MigrationShell;
  command: string;
  safety: 'read-only' | 'destructive';
  copyable: boolean;
  copyGate: 'safe' | 'explicit-consent-after-agentkit-verification';
}

const operationalFact = (
  fact: Omit<AgentKitMigrationOperationalFact, 'channel' | 'sourceUrl' | 'verifiedAt'>,
): AgentKitMigrationOperationalFact => ({
  ...fact,
  channel: 'stable',
  sourceUrl: AGENTKIT_SOURCE_SNAPSHOT.sourceUrl,
  verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
});

export const AGENTKIT_MIGRATION_OPERATIONAL_FACTS = [
  operationalFact({ id: 'find-legacy-macos', stage: 'preflight', platform: 'macos', shell: 'zsh', command: 'which -a ck', safety: 'read-only', copyable: true, copyGate: 'safe' }),
  operationalFact({ id: 'find-legacy-linux', stage: 'preflight', platform: 'linux', shell: 'bash', command: 'which -a ck', safety: 'read-only', copyable: true, copyGate: 'safe' }),
  operationalFact({ id: 'find-legacy-windows', stage: 'preflight', platform: 'windows', shell: 'powershell', command: 'Get-Command ck -All', safety: 'read-only', copyable: true, copyGate: 'safe' }),
  operationalFact({ id: 'verify-install-macos', stage: 'verify-install', platform: 'macos', shell: 'zsh', command: 'ak --version', safety: 'read-only', copyable: true, copyGate: 'safe' }),
  operationalFact({ id: 'verify-install-linux', stage: 'verify-install', platform: 'linux', shell: 'bash', command: 'ak --version', safety: 'read-only', copyable: true, copyGate: 'safe' }),
  operationalFact({ id: 'verify-install-windows', stage: 'verify-install', platform: 'windows', shell: 'powershell', command: 'ak --version', safety: 'read-only', copyable: true, copyGate: 'safe' }),
  operationalFact({ id: 'check-collision-macos', stage: 'collision-check', platform: 'macos', shell: 'zsh', command: 'ak doctor --check ck_shim_collision', safety: 'read-only', copyable: true, copyGate: 'safe' }),
  operationalFact({ id: 'check-collision-linux', stage: 'collision-check', platform: 'linux', shell: 'bash', command: 'ak doctor --check ck_shim_collision', safety: 'read-only', copyable: true, copyGate: 'safe' }),
  operationalFact({ id: 'check-collision-windows', stage: 'collision-check', platform: 'windows', shell: 'powershell', command: 'ak doctor --check ck_shim_collision', safety: 'read-only', copyable: true, copyGate: 'safe' }),
  operationalFact({ id: 'remove-legacy-macos', stage: 'legacy-removal', platform: 'macos', shell: 'zsh', command: 'npm uninstall -g claudekit-cli', safety: 'destructive', copyable: false, copyGate: 'explicit-consent-after-agentkit-verification' }),
  operationalFact({ id: 'remove-legacy-linux', stage: 'legacy-removal', platform: 'linux', shell: 'bash', command: 'npm uninstall -g claudekit-cli', safety: 'destructive', copyable: false, copyGate: 'explicit-consent-after-agentkit-verification' }),
  operationalFact({ id: 'remove-legacy-windows', stage: 'legacy-removal', platform: 'windows', shell: 'powershell', command: 'npm uninstall -g claudekit-cli', safety: 'destructive', copyable: false, copyGate: 'explicit-consent-after-agentkit-verification' }),
] as const satisfies readonly AgentKitMigrationOperationalFact[];

export function getMigrationOperationalFact(
  stage: AgentKitMigrationOperationalFact['stage'],
  platform: MigrationPlatform,
): AgentKitMigrationOperationalFact | undefined {
  return AGENTKIT_MIGRATION_OPERATIONAL_FACTS.find((fact) => (
    fact.stage === stage && fact.platform === platform
  ));
}

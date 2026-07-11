import type { AgentKitCliFact } from '@/data/guides/agentkit/agentkit-source-contract';
import type { AgentKitMigrationOperationalFact } from '@/data/guides/agentkit/agentkit-migration-operational-facts';

export type AgentKitPlatform = 'macos' | 'linux' | 'windows';
export type AgentKitShell = 'zsh' | 'bash' | 'powershell';

export interface AgentKitCommandView {
  id: string;
  platform: AgentKitPlatform;
  shell: AgentKitShell;
  display: string;
  copyPayload: string;
  copyable: boolean;
  safety: 'read-only' | 'project-write' | 'network-exec' | 'global-write' | 'destructive' | 'credential';
  sourceUrl: string;
}

export interface AgentKitCommandGroupView {
  id: string;
  commands: AgentKitCommandView[];
}

function commandSafety(fact: AgentKitCliFact): AgentKitCommandView['safety'] {
  if (fact.integrityFactId) return 'network-exec';
  if (fact.id.includes('remove-legacy') || fact.id === 'uninstall') return 'destructive';
  if (fact.scope === 'account' && fact.mutatesDisk) return 'credential';
  if (fact.command.includes('--global') || fact.command.includes('--force')) return 'global-write';
  return fact.mutatesDisk ? 'project-write' : 'read-only';
}

export function toCommandView(
  fact: AgentKitCliFact,
  platform: AgentKitPlatform,
  shell: AgentKitShell,
): AgentKitCommandView {
  const safety = commandSafety(fact);

  return {
    id: `${fact.id}-${platform}`,
    platform,
    shell,
    display: fact.command,
    copyPayload: fact.command,
    copyable: !fact.mutatesDisk && safety === 'read-only',
    safety,
    sourceUrl: fact.sourceUrl,
  };
}

export function viewsForPlatforms(
  unixFact: AgentKitCliFact,
  windowsFact: AgentKitCliFact = unixFact,
): AgentKitCommandView[] {
  return [
    toCommandView(unixFact, 'macos', 'zsh'),
    toCommandView(unixFact, 'linux', 'bash'),
    toCommandView(windowsFact, 'windows', 'powershell'),
  ];
}

export function toOperationalCommandView(
  fact: AgentKitMigrationOperationalFact,
): AgentKitCommandView {
  return {
    id: fact.id,
    platform: fact.platform,
    shell: fact.shell,
    display: fact.command,
    copyPayload: fact.command,
    copyable: fact.copyable && fact.copyGate === 'safe',
    safety: fact.safety,
    sourceUrl: fact.sourceUrl,
  };
}

export function isSafeCopyPayload(command: AgentKitCommandView): boolean {
  if (!command.copyable || command.copyPayload !== command.display) return false;
  return command.copyPayload.length > 0 && !/[\u0000-\u001F\u007F]/u.test(command.copyPayload);
}

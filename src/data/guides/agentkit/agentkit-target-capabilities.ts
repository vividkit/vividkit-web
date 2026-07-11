import type { AgentKitSourceMetadata } from './agentkit-source-contract.ts';
import { AGENTKIT_SOURCE_SNAPSHOT } from './agentkit-source-contract.ts';
import { getAgentKitCliFact } from './agentkit-cli-facts.ts';

export interface AgentKitTargetCapability extends AgentKitSourceMetadata {
  target: 'claude-code' | 'codex';
  status: 'supported' | 'preview' | 'unsupported';
  installCommandId: 'kit-init' | 'kit-install';
  invocationMode: 'slash-command' | 'skill-reference';
  invocationPrefix: '/ak:' | '$ak:';
}

export interface AgentKitTargetView extends AgentKitTargetCapability {
  displayName: 'Claude Code' | 'Codex';
  installCommand: string;
  installCopyable: false;
  invocationWildcard: '/ak:*' | '$ak:*';
  invocationDescription: 'slash command' | 'skill mention';
}

function targetCapability(
  capability: Omit<AgentKitTargetCapability, 'channel' | 'sourceUrl' | 'verifiedAt'>,
): AgentKitTargetCapability {
  return {
    ...capability,
    channel: AGENTKIT_SOURCE_SNAPSHOT.channel,
    sourceUrl: AGENTKIT_SOURCE_SNAPSHOT.sourceUrl,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
  };
}

export const AGENTKIT_TARGET_CAPABILITIES = [
  targetCapability({
    target: 'claude-code',
    status: 'supported',
    installCommandId: 'kit-init',
    invocationMode: 'slash-command',
    invocationPrefix: '/ak:',
  }),
  targetCapability({
    target: 'codex',
    status: 'supported',
    installCommandId: 'kit-install',
    invocationMode: 'skill-reference',
    invocationPrefix: '$ak:',
  }),
] as const satisfies readonly AgentKitTargetCapability[];

const TARGET_DISPLAY_NAMES = {
  'claude-code': 'Claude Code',
  codex: 'Codex',
} as const satisfies Record<AgentKitTargetCapability['target'], AgentKitTargetView['displayName']>;

const INVOCATION_DESCRIPTIONS = {
  'slash-command': 'slash command',
  'skill-reference': 'skill mention',
} as const satisfies Record<AgentKitTargetCapability['invocationMode'], AgentKitTargetView['invocationDescription']>;

function resolveTargetInstallCommand(capability: AgentKitTargetCapability, kit: string): string {
  const fact = getAgentKitCliFact(capability.installCommandId, capability.channel);
  if (!fact || fact.channel !== capability.channel) {
    throw new Error(`Missing ${capability.channel} CLI fact for target ${capability.target}.`);
  }
  if (!fact.mutatesDisk) {
    throw new Error(`Target install fact ${fact.id} must remain a disk-mutating, copy-gated command.`);
  }

  return fact.command
    .replace('<kit>', kit)
    .replace('<agent>', capability.target);
}

export function toAgentKitTargetView(
  capability: AgentKitTargetCapability,
  kit = 'engineer',
): AgentKitTargetView {
  return {
    ...capability,
    displayName: TARGET_DISPLAY_NAMES[capability.target],
    installCommand: resolveTargetInstallCommand(capability, kit),
    installCopyable: false,
    invocationWildcard: `${capability.invocationPrefix}*` as AgentKitTargetView['invocationWildcard'],
    invocationDescription: INVOCATION_DESCRIPTIONS[capability.invocationMode],
  };
}

export function getAgentKitTargetViews(kit = 'engineer'): readonly AgentKitTargetView[] {
  return AGENTKIT_TARGET_CAPABILITIES.map((capability) => toAgentKitTargetView(capability, kit));
}

export function getAgentKitTargetView(
  target: AgentKitTargetCapability['target'],
  kit = 'engineer',
): AgentKitTargetView {
  const capability = AGENTKIT_TARGET_CAPABILITIES.find((candidate) => candidate.target === target);
  if (!capability) throw new Error(`Unknown AgentKit target: ${target}`);
  return toAgentKitTargetView(capability, kit);
}

export function getAgentKitSkillInvocation(
  target: AgentKitTargetCapability['target'],
  skill: string,
): string {
  return `${getAgentKitTargetView(target).invocationPrefix}${skill}`;
}

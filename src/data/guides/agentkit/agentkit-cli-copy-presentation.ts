import type { AgentKitCliFact } from './agentkit-source-contract';

export type AgentKitCliCopySafety =
  | 'read-only'
  | 'dry-run'
  | 'check'
  | 'preview-default'
  | 'manual';

export interface AgentKitCliCopyPresentation {
  rawCommand: string;
  copyPayload: string | null;
  copyable: boolean;
  safety: AgentKitCliCopySafety;
}

type SafeAgentKitCliCopySafety = Exclude<AgentKitCliCopySafety, 'manual'>;

const CONTROL_CHARACTERS = /[\u0000-\u001F\u007F]/u;
const PROMPT_PREFIX = /^\s*[$>#]/u;
const PLACEHOLDER = /<[^>]+>/u;
const CHAINED_SHELL = /&&|\|\||[;`]|\$\(|(?:^|\s)\|(?!\|)/u;
const DESTRUCTIVE_OR_APPLY = /\brm\s+-rf\b|--(?:yes|force|apply)\b|--dry-run=false\b/iu;

export function isSafeAgentKitCliCopyPayload(payload: string): boolean {
  return payload.trim() === payload
    && payload.length > 0
    && !CONTROL_CHARACTERS.test(payload)
    && !PROMPT_PREFIX.test(payload)
    && !PLACEHOLDER.test(payload)
    && !CHAINED_SHELL.test(payload)
    && !DESTRUCTIVE_OR_APPLY.test(payload);
}

function safePayload(payload: string, safety: AgentKitCliCopySafety): AgentKitCliCopyPresentation {
  if (!isSafeAgentKitCliCopyPayload(payload)) {
    return { rawCommand: payload, copyPayload: null, copyable: false, safety: 'manual' };
  }
  return { rawCommand: payload, copyPayload: payload, copyable: true, safety };
}

function manualPresentation(rawCommand: string): AgentKitCliCopyPresentation {
  return { rawCommand, copyPayload: null, copyable: false, safety: 'manual' };
}

function derivedSafePayload(
  fact: AgentKitCliFact,
): { payload: string; safety: SafeAgentKitCliCopySafety } | null {
  if (!fact.mutatesDisk) return { payload: fact.command, safety: 'read-only' };
  if (fact.previewDefault) return { payload: fact.command, safety: 'preview-default' };
  if (fact.id === 'self-update' && fact.flags.includes('--check')) {
    return { payload: `${fact.command} --check`, safety: 'check' };
  }
  if (fact.flags.includes('--dry-run')) {
    return { payload: `${fact.command} --dry-run`, safety: 'dry-run' };
  }
  return null;
}

export function getAgentKitCliCopyPresentation(fact: AgentKitCliFact): AgentKitCliCopyPresentation {
  const safeCopy = derivedSafePayload(fact);
  if (!safeCopy) return manualPresentation(fact.command);

  const presentation = safePayload(safeCopy.payload, safeCopy.safety);
  return { ...presentation, rawCommand: fact.command };
}

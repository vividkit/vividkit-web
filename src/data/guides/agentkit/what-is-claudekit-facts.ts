import type { AgentKitSourceMetadata } from './agentkit-source-contract.ts';
import { AGENTKIT_SOURCE_SNAPSHOT } from './agentkit-source-contract.ts';
import type { AgentKitTargetCapability } from './agentkit-target-capabilities.ts';

export type ClaudeKitConcept = 'agents' | 'commands' | 'skills' | 'workflows' | 'hooks' | 'config-rules';
export type ClaudeKitScope = 'project' | 'global';

export interface ClaudeKitExplainerSource extends AgentKitSourceMetadata {
  id: 'agentkit-docs' | 'claudekit-docs' | 'claudekit-cli';
  status: 'current-successor-guidance' | 'legacy-first-party-reference';
}

export interface ClaudeKitScopeFact extends AgentKitSourceMetadata {
  scope: ClaudeKitScope;
  path: '.claude/' | '~/.claude/';
  role: 'project-specific' | 'shared-user-level';
}

export interface ClaudeKitFacts {
  productStatus: 'legacy-predecessor';
  currentSuccessor: 'agentkit';
  legacyBinary: 'ck';
  currentBinary: 'ak';
  currentTargets: readonly AgentKitTargetCapability['target'][];
  historicalConcepts: readonly ClaudeKitConcept[];
  exactCountsPolicy: 'omit-volatile-counts';
  modelSubscriptionIncluded: false;
}

const CLAUDEKIT_DOCS_URL = 'https://docs.claudekit.cc';
const CLAUDEKIT_CLI_URL = 'https://github.com/mrgoonie/claudekit-cli';

export const WHAT_IS_CLAUDEKIT_SOURCES = [
  {
    id: 'agentkit-docs',
    channel: 'stable',
    sourceUrl: AGENTKIT_SOURCE_SNAPSHOT.sourceUrl,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
    status: 'current-successor-guidance',
  },
  {
    id: 'claudekit-docs',
    channel: 'legacy',
    sourceUrl: CLAUDEKIT_DOCS_URL,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
    status: 'legacy-first-party-reference',
  },
  {
    id: 'claudekit-cli',
    channel: 'legacy',
    sourceUrl: CLAUDEKIT_CLI_URL,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
    status: 'legacy-first-party-reference',
  },
] as const satisfies readonly ClaudeKitExplainerSource[];

export const WHAT_IS_CLAUDEKIT_FACTS = {
  productStatus: 'legacy-predecessor',
  currentSuccessor: 'agentkit',
  legacyBinary: 'ck',
  currentBinary: 'ak',
  currentTargets: ['claude-code', 'codex'],
  historicalConcepts: [
    'agents',
    'commands',
    'skills',
    'workflows',
    'hooks',
    'config-rules',
  ],
  exactCountsPolicy: 'omit-volatile-counts',
  modelSubscriptionIncluded: false,
} as const satisfies ClaudeKitFacts;

export const WHAT_IS_CLAUDEKIT_SCOPE_FACTS = [
  {
    scope: 'project',
    path: '.claude/',
    role: 'project-specific',
    channel: 'legacy',
    sourceUrl: CLAUDEKIT_DOCS_URL,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
  },
  {
    scope: 'global',
    path: '~/.claude/',
    role: 'shared-user-level',
    channel: 'legacy',
    sourceUrl: CLAUDEKIT_DOCS_URL,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
  },
] as const satisfies readonly ClaudeKitScopeFact[];

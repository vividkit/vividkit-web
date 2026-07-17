import type { AgentKitEvidenceSourceMetadata } from './agentkit-source-contract.ts';
import { AGENTKIT_SOURCE_SNAPSHOT } from './agentkit-source-contract.ts';
import type { AgentKitTargetCapability } from './agentkit-target-capabilities.ts';

export type ClaudeKitConcept = 'agents' | 'commands' | 'skills' | 'workflows' | 'hooks' | 'config-rules';
export type ClaudeKitScope = 'project' | 'global';

export interface ClaudeKitExplainerSource extends AgentKitEvidenceSourceMetadata {
  id: 'agentkit-docs' | 'claudekit-docs' | 'claudekit-cli';
  status: 'current-successor-guidance' | 'legacy-first-party-reference';
}

export interface ClaudeKitScopeFact extends AgentKitEvidenceSourceMetadata {
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

const agentKitMetadata = {
  channel: 'stable',
  sourceUrl: AGENTKIT_SOURCE_SNAPSHOT.sourceUrl,
  verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
  evidenceClass: 'official-docs',
  artifactKind: 'agentkit-cli',
  artifactVersion: AGENTKIT_SOURCE_SNAPSHOT.releaseVersion,
  legacyStatus: 'current',
} as const;

const claudeKitMetadata = (sourceUrl: string) => ({
  channel: 'legacy' as const,
  sourceUrl,
  verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
  evidenceClass: 'official-docs' as const,
  artifactKind: 'claudekit-cli' as const,
  artifactVersion: 'legacy-reference',
  legacyStatus: 'legacy' as const,
});

export const WHAT_IS_CLAUDEKIT_SOURCES = [
  {
    id: 'agentkit-docs',
    ...agentKitMetadata,
    status: 'current-successor-guidance',
  },
  {
    id: 'claudekit-docs',
    ...claudeKitMetadata(CLAUDEKIT_DOCS_URL),
    status: 'legacy-first-party-reference',
  },
  {
    id: 'claudekit-cli',
    ...claudeKitMetadata(CLAUDEKIT_CLI_URL),
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
    ...claudeKitMetadata(CLAUDEKIT_DOCS_URL),
  },
  {
    scope: 'global',
    path: '~/.claude/',
    role: 'shared-user-level',
    ...claudeKitMetadata(CLAUDEKIT_DOCS_URL),
  },
] as const satisfies readonly ClaudeKitScopeFact[];

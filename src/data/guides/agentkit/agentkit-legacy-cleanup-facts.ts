import type { AgentKitSourceMetadata } from './agentkit-source-contract.ts';
import { AGENTKIT_SOURCE_SNAPSHOT } from './agentkit-source-contract.ts';

export type LegacyCleanupTarget = 'claude-code' | 'codex';
export type LegacyCleanupScope = 'project' | 'global';

export interface AgentKitLegacyCleanupSource extends AgentKitSourceMetadata {
  id: 'agentkit-docs' | 'claudekit-migrate' | 'claudekit-uninstall';
  status: 'current-agentkit-guidance' | 'deprecated-cli-reference';
}

export interface AgentKitLegacyCleanupCommand extends AgentKitSourceMetadata {
  id: string;
  stage: 'discover-providers' | 'verify-agentkit' | 'preview-source-cleanup' | 'remove-ck-source';
  command: string;
  scope: LegacyCleanupScope | 'all-detected-providers';
  safety: 'read-only' | 'destructive';
  copyable: boolean;
  renderPolicy: 'guide-command' | 'source-record-only';
}

export interface AgentKitLegacyProviderCleanupPolicy extends AgentKitSourceMetadata {
  target: LegacyCleanupTarget;
  cleanupCoverage: 'ownership-aware-claude-source' | 'manual-destination-inventory';
  legacyDestinationEvidence: readonly string[];
  automaticBulkRemovalDocumented: false;
}

const AGENTKIT_DOCS_URL = 'https://agentkit.best/docs';
const CLAUDEKIT_MIGRATE_URL = 'https://docs.claudekit.cc/docs/cli/migrate/';
const CLAUDEKIT_UNINSTALL_URL = 'https://docs.claudekit.cc/docs/cli/uninstall/';

export const AGENTKIT_LEGACY_CLEANUP_SOURCES = [
  {
    id: 'agentkit-docs',
    channel: 'stable',
    sourceUrl: AGENTKIT_DOCS_URL,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
    status: 'current-agentkit-guidance',
  },
  {
    id: 'claudekit-migrate',
    channel: 'legacy',
    sourceUrl: CLAUDEKIT_MIGRATE_URL,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
    status: 'deprecated-cli-reference',
  },
  {
    id: 'claudekit-uninstall',
    channel: 'legacy',
    sourceUrl: CLAUDEKIT_UNINSTALL_URL,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
    status: 'deprecated-cli-reference',
  },
] as const satisfies readonly AgentKitLegacyCleanupSource[];

export const AGENTKIT_LEGACY_CLEANUP_COMMANDS = [
  {
    id: 'discover-migrated-providers',
    stage: 'discover-providers',
    command: 'ck migrate --dry-run',
    scope: 'all-detected-providers',
    safety: 'read-only',
    copyable: true,
    renderPolicy: 'guide-command',
    channel: 'legacy',
    sourceUrl: CLAUDEKIT_MIGRATE_URL,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
  },
  {
    id: 'verify-agentkit-kits',
    stage: 'verify-agentkit',
    command: 'ak kit list',
    scope: 'all-detected-providers',
    safety: 'read-only',
    copyable: true,
    renderPolicy: 'guide-command',
    channel: 'stable',
    sourceUrl: AGENTKIT_DOCS_URL,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
  },
  {
    id: 'preview-local-ck-source',
    stage: 'preview-source-cleanup',
    command: 'ck uninstall --local --dry-run',
    scope: 'project',
    safety: 'read-only',
    copyable: true,
    renderPolicy: 'guide-command',
    channel: 'legacy',
    sourceUrl: CLAUDEKIT_UNINSTALL_URL,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
  },
  {
    id: 'preview-global-ck-source',
    stage: 'preview-source-cleanup',
    command: 'ck uninstall --global --dry-run',
    scope: 'global',
    safety: 'read-only',
    copyable: true,
    renderPolicy: 'guide-command',
    channel: 'legacy',
    sourceUrl: CLAUDEKIT_UNINSTALL_URL,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
  },
  {
    id: 'remove-local-ck-source',
    stage: 'remove-ck-source',
    command: 'ck uninstall --local',
    scope: 'project',
    safety: 'destructive',
    copyable: false,
    renderPolicy: 'source-record-only',
    channel: 'legacy',
    sourceUrl: CLAUDEKIT_UNINSTALL_URL,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
  },
  {
    id: 'remove-global-ck-source',
    stage: 'remove-ck-source',
    command: 'ck uninstall --global',
    scope: 'global',
    safety: 'destructive',
    copyable: false,
    renderPolicy: 'source-record-only',
    channel: 'legacy',
    sourceUrl: CLAUDEKIT_UNINSTALL_URL,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
  },
] as const satisfies readonly AgentKitLegacyCleanupCommand[];

export const AGENTKIT_LEGACY_PROVIDER_CLEANUP_POLICIES = [
  {
    target: 'claude-code',
    cleanupCoverage: 'ownership-aware-claude-source',
    legacyDestinationEvidence: ['.claude/', '~/.claude/'],
    automaticBulkRemovalDocumented: false,
    channel: 'legacy',
    sourceUrl: CLAUDEKIT_UNINSTALL_URL,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
  },
  {
    target: 'codex',
    cleanupCoverage: 'manual-destination-inventory',
    legacyDestinationEvidence: [
      '.agents/skills/source-command-*/SKILL.md',
      '~/.agents/skills/source-command-*/SKILL.md',
    ],
    automaticBulkRemovalDocumented: false,
    channel: 'legacy',
    sourceUrl: CLAUDEKIT_MIGRATE_URL,
    verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
  },
] as const satisfies readonly AgentKitLegacyProviderCleanupPolicy[];

import type { AgentKitArtifactSourceMetadata } from './agentkit-source-contract.ts';
import { AGENTKIT_SOURCE_SNAPSHOT } from './agentkit-source-contract.ts';

export interface AgentKitSkillFact extends AgentKitArtifactSourceMetadata {
  id: `ak:${string}`;
  kit: 'engineer' | 'marketing';
  aliases: readonly string[];
  upstreamVersion: string;
  upstreamSha256: string;
  snapshotProvenance: 'agentkit-install-manifest';
  snapshotKitVersion: string;
  invocations: {
    claudeCode: `/ak:${string}`;
    codex: `$ak:${string}`;
  };
}

export const AGENTKIT_KIT_SNAPSHOT_PROVENANCE = {
  engineer: {
    artifactKind: 'engineer-kit',
    artifactVersion: '0.2.0',
    evidenceStatus: 'captured-install-manifest',
  },
  marketing: {
    artifactKind: 'marketing-kit',
    artifactVersion: null,
    evidenceStatus: 'reviewed-snapshot-unavailable',
  },
} as const;

const skill = (
  id: AgentKitSkillFact['id'],
  upstreamVersion: string,
  upstreamSha256: string,
): AgentKitSkillFact => ({
  id,
  kit: 'engineer',
  aliases: [id.slice(3)],
  upstreamVersion,
  upstreamSha256,
  snapshotProvenance: 'agentkit-install-manifest',
  snapshotKitVersion: AGENTKIT_KIT_SNAPSHOT_PROVENANCE.engineer.artifactVersion,
  sourceUrl: AGENTKIT_SOURCE_SNAPSHOT.sourceUrl,
  verifiedAt: AGENTKIT_SOURCE_SNAPSHOT.verifiedAt,
  evidenceClass: 'implementation-audit',
  artifactKind: AGENTKIT_KIT_SNAPSHOT_PROVENANCE.engineer.artifactKind,
  artifactVersion: AGENTKIT_KIT_SNAPSHOT_PROVENANCE.engineer.artifactVersion,
  legacyStatus: 'current',
  invocations: {
    claudeCode: `/${id}`,
    codex: `$${id}`,
  },
});

export const AGENTKIT_SKILL_FACTS = [
  skill('ak:ask', '1.1.0', '4837b63c83ec0f872a5ea517254df1ad569f168d819272ec8e83b066cfee5998'),
  skill('ak:plan', '1.1.0', '407d26f372b69a857afea8b5b646c09ae2aa1ad9d86df08d5bccef2bc13ab006'),
  skill('ak:cook', '2.2.0', 'f2c2c71ce0d988e250d5470f864fd484395b84c9008926816eda892a703aaa48'),
  skill('ak:fix', '2.1.0', 'eed132d2eda3cf69cfceeabbff3554c0d2ea87ac9680fe54f6ee9cc326f801d8'),
  skill('ak:test', '1.0.0', '333acfab227c307019efd3e32fcd1c84343ebcc1f90b110050c9bae14605478b'),
] as const satisfies readonly AgentKitSkillFact[];

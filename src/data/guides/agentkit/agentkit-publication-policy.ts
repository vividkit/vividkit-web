export type AgentKitPublicationStatus = 'hold' | 'staging' | 'published';

export interface AgentKitPublicationRecord {
  schemaVersion: 1;
  vividKitSha: string;
  stableFixtureSha256: string;
  betaFixtureSha256: string;
  sourceClosureSha256: string;
  approvalRevisionSha: string | null;
  pilotStartedAt: string | null;
  pilotEndedAt: string | null;
  reviewer: string | null;
  approver: string | null;
  status: AgentKitPublicationStatus;
}

// agentkit-publication-record:start
export const AGENTKIT_PUBLICATION_RECORD = {
  schemaVersion: 1,
  vividKitSha: '7d5ab60e9e706ba612a6202f3024685cfa32bea6',
  stableFixtureSha256: '89d582555208a790379f1f40a325375933265438288bf2c6ecbe9c6fe1646a12',
  betaFixtureSha256: '0772e9421526fa7cd62929153517b222d9b88c9d05be7136ff85567fc68cf8d5',
  sourceClosureSha256: '74d382731cc5a4b83b92d371558d7904e0583ee6fb907a08abf022a980fb5a2e',
  approvalRevisionSha: null,
  pilotStartedAt: null,
  pilotEndedAt: null,
  reviewer: null,
  approver: null,
  status: 'hold',
} as const satisfies AgentKitPublicationRecord;
// agentkit-publication-record:end

export interface AgentKitPublicationEvaluation {
  valid: boolean;
  status: AgentKitPublicationStatus;
  includeBetaPayload: boolean;
  includeStage7Details: boolean;
  deploymentAudience: 'stable-public' | 'protected-staging' | 'public';
  errors: readonly string[];
}

export interface AgentKitPublicationBuildContext {
  queryChannel?: string;
  buildInputs?: {
    stableFixtureSha256: string;
    betaFixtureSha256: string;
    sourceClosureSha256: string;
    reviewedVividKitSha?: string;
    reviewedSourceClosureSha256?: string;
    reviewedApprovalRevisionSha?: string;
    publicationRecordSha256?: string;
    reviewedPublicationRecordSha256?: string;
  };
}

function validTimestamp(value: string | null): value is string {
  return typeof value === 'string' && Number.isFinite(Date.parse(value));
}

export function evaluateAgentKitPublicationRecord(
  record: AgentKitPublicationRecord,
  context?: AgentKitPublicationBuildContext,
): AgentKitPublicationEvaluation {
  const errors: string[] = [];
  if (record.schemaVersion !== 1) errors.push('schema-version');
  if (!['hold', 'staging', 'published'].includes(record.status)) errors.push('publication-status');
  if (!/^[a-f0-9]{40}$/.test(record.vividKitSha)) errors.push('vividkit-sha');
  if (!/^[a-f0-9]{64}$/.test(record.stableFixtureSha256)) errors.push('stable-fixture-digest');
  if (!/^[a-f0-9]{64}$/.test(record.betaFixtureSha256)) errors.push('beta-fixture-digest');
  if (!/^[a-f0-9]{64}$/.test(record.sourceClosureSha256)) errors.push('source-closure-digest');
  if (record.approvalRevisionSha !== null && !/^[a-f0-9]{40}$/.test(record.approvalRevisionSha)) {
    errors.push('approval-revision-sha');
  }
  if (record.vividKitSha !== AGENTKIT_PUBLICATION_RECORD.vividKitSha) {
    errors.push('unreviewed-vividkit-sha');
  }
  if (record.stableFixtureSha256 !== AGENTKIT_PUBLICATION_RECORD.stableFixtureSha256) {
    errors.push('unreviewed-stable-fixture');
  }
  if (record.betaFixtureSha256 !== AGENTKIT_PUBLICATION_RECORD.betaFixtureSha256) {
    errors.push('unreviewed-beta-fixture');
  }
  if (record.sourceClosureSha256 !== AGENTKIT_PUBLICATION_RECORD.sourceClosureSha256) {
    errors.push('unreviewed-source-closure');
  }

  if (context?.buildInputs) {
    if (record.stableFixtureSha256 !== context.buildInputs.stableFixtureSha256) {
      errors.push('build-stable-fixture-mismatch');
    }
    if (record.betaFixtureSha256 !== context.buildInputs.betaFixtureSha256) {
      errors.push('build-beta-fixture-mismatch');
    }
    if (record.sourceClosureSha256 !== context.buildInputs.sourceClosureSha256) {
      errors.push('build-source-closure-mismatch');
    }
    if (record.status !== 'hold') {
      if (!context.buildInputs.reviewedVividKitSha
        || !context.buildInputs.reviewedSourceClosureSha256
        || !context.buildInputs.reviewedApprovalRevisionSha
        || !context.buildInputs.publicationRecordSha256
        || !context.buildInputs.reviewedPublicationRecordSha256) {
        errors.push('reviewed-vividkit-revision-missing');
      } else {
        if (record.vividKitSha !== context.buildInputs.reviewedVividKitSha) {
          errors.push('reviewed-vividkit-revision-mismatch');
        }
        if (record.sourceClosureSha256 !== context.buildInputs.reviewedSourceClosureSha256
          || context.buildInputs.sourceClosureSha256 !== context.buildInputs.reviewedSourceClosureSha256) {
          errors.push('reviewed-vividkit-source-mismatch');
        }
        if (record.approvalRevisionSha !== context.buildInputs.reviewedApprovalRevisionSha) {
          errors.push('reviewed-approval-revision-mismatch');
        }
        if (context.buildInputs.publicationRecordSha256
          !== context.buildInputs.reviewedPublicationRecordSha256) {
          errors.push('reviewed-publication-record-mismatch');
        }
      }
    }
  } else if (record.status !== 'hold') {
      errors.push('build-input-context-missing');
  }

  if (record.status === 'staging' || record.status === 'published') {
    if (!validTimestamp(record.pilotStartedAt)) errors.push('pilot-start');
    if (typeof record.reviewer !== 'string' || !record.reviewer.trim()) errors.push('reviewer');
  }
  if (record.status === 'published') {
    if (!validTimestamp(record.pilotEndedAt)) errors.push('pilot-end');
    if (validTimestamp(record.pilotStartedAt) && validTimestamp(record.pilotEndedAt)
      && Date.parse(record.pilotEndedAt) <= Date.parse(record.pilotStartedAt)) errors.push('pilot-range');
    if (typeof record.approver !== 'string' || !record.approver.trim()) errors.push('approver');
  }

  const valid = errors.length === 0;
  const betaIncluded = valid && record.status !== 'hold';
  return {
    valid,
    status: record.status,
    includeBetaPayload: betaIncluded,
    includeStage7Details: betaIncluded,
    deploymentAudience: !valid || record.status === 'hold'
      ? 'stable-public'
      : record.status === 'staging' ? 'protected-staging' : 'public',
    errors,
  };
}

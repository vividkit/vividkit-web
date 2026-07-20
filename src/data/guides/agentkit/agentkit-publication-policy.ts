export type AgentKitPublicationStatus = 'hold' | 'staging' | 'published';

export interface AgentKitPublicationRecord {
  schemaVersion: 1;
  vividKitSha: string;
  stableFixtureSha256: string;
  prereleaseFixtureSha256: string;
  sourceClosureSha256: string;
  approvalRevisionSha: string | null;
  pilotStartedAt: string | null;
  pilotEndedAt: string | null;
  reviewer: string | null;
  approver: string | null;
  status: AgentKitPublicationStatus;
}

export const AGENTKIT_CURRENT_RELEASE_EVIDENCE = {
  latestStable: '2.4.0',
  latestPrerelease: '2.4.0-beta.7',
  promotedFromPrerelease: '2.4.0-beta.7',
  activeBetaVersion: null,
  hasActiveBeta: false,
} as const;

// agentkit-publication-record:start
export const AGENTKIT_PUBLICATION_RECORD = {
  schemaVersion: 1,
  vividKitSha: '7d5ab60e9e706ba612a6202f3024685cfa32bea6',
  stableFixtureSha256: '83dc4f2b886707d57853a80bca17b439d754c8064e091b0aa942a68f75477370',
  prereleaseFixtureSha256: '075a4fd1d8c024eba1ce4e550e8bdf88bb61f769e923e54755aa47f910cfea44',
  sourceClosureSha256: 'b5aa836e4960f218fdda6ccedaabeb8fc1f7e3c0c1c99a19d04518eabaad1028',
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
    prereleaseFixtureSha256: string;
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
  if (!/^[a-f0-9]{64}$/.test(record.prereleaseFixtureSha256)) errors.push('prerelease-fixture-digest');
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
  if (record.prereleaseFixtureSha256 !== AGENTKIT_PUBLICATION_RECORD.prereleaseFixtureSha256) {
    errors.push('unreviewed-prerelease-fixture');
  }
  if (record.sourceClosureSha256 !== AGENTKIT_PUBLICATION_RECORD.sourceClosureSha256) {
    errors.push('unreviewed-source-closure');
  }

  if (context?.buildInputs) {
    if (record.stableFixtureSha256 !== context.buildInputs.stableFixtureSha256) {
      errors.push('build-stable-fixture-mismatch');
    }
    if (record.prereleaseFixtureSha256 !== context.buildInputs.prereleaseFixtureSha256) {
      errors.push('build-prerelease-fixture-mismatch');
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

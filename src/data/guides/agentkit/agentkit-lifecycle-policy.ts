import type { AgentKitCliReleaseChannel } from './agentkit-source-contract.ts';
import {
  AGENTKIT_LIFECYCLE_STAGE_IDS,
  AGENTKIT_LIFECYCLE_STAGES,
  type AgentKitLifecycleStageId,
} from './agentkit-lifecycle-guide-facts.ts';

export * from './agentkit-lifecycle-guide-facts.ts';
export type AgentKitLifecycleLane =
  | 'fresh-install'
  | 'clean-cutover'
  | 'clean-coexistence-pilot'
  | 'support-assisted'
  | 'recovery';
export type AgentKitAdvisoryEligibility = 'blocked' | 'advisory-ready';
export type AgentKitLifecycleStageState = 'blocked' | 'advisory-ready' | 'completed' | 'not-applicable';

export interface AgentKitOperatorAttestation {
  startedAt: string;
  endedAt: string;
  reviewedAt: string;
  canaryResult: 'pass' | 'fail';
  incidentStatus: 'none' | 'acknowledged' | 'unacknowledged';
  acknowledgedAdvisoryOnly: boolean;
}

export interface AgentKitLifecycleInput {
  publicReleaseChannel: AgentKitCliReleaseChannel;
  goal: 'install' | 'cutover' | 'coexistence' | 'recover';
  legacyOwnershipState: 'absent' | 'clean-single-scope' | 'mixed' | 'custom';
  metadataHealth: 'healthy' | 'corrupt' | 'missing';
  scopeRelationship: 'none' | 'ck-global-ak-project-local' | 'same-scope' | 'other-separate' | 'unknown';
  cleanupPreviewResult: 'clean' | 'dirty' | 'unknown' | 'not-applicable';
  packageManagerEvidence: 'bun' | 'npm' | 'pnpm' | 'yarn' | 'unknown' | 'none';
  dataCriticality: 'standard' | 'critical';
  pilotOptIn: boolean;
  canaryOutcome: 'not-run' | 'pass' | 'fail';
  observationEvidence: AgentKitOperatorAttestation | null;
  completedStages: readonly AgentKitLifecycleStageId[];
}

export interface AgentKitAttestationResult {
  eligibility: AgentKitAdvisoryEligibility;
  limitation: 'unverified-operator-declaration';
  reason: string | null;
}

export interface AgentKitLifecycleResult {
  lane: AgentKitLifecycleLane;
  supportLevel: 'self-service' | 'support-assisted';
  stageStates: readonly { id: AgentKitLifecycleStageId; state: AgentKitLifecycleStageState }[];
  blockedReason: string | null;
  copyPolicy: 'safe-setup' | 'stage-gated' | 'closed-beta-only' | 'no-destructive-copy' | 'recovery-only';
  recoveryTarget: 'pre-agentkit-backup' | 'last-known-good-agentkit' | 'support-intake' | null;
  removalPackageManager: 'bun' | 'npm' | 'pnpm' | 'yarn' | null;
  eligibility: AgentKitAdvisoryEligibility;
  attestationLimitation: 'unverified-operator-declaration';
  copyableDestructiveCommands: readonly [];
}

const HOUR_MS = 60 * 60 * 1000;
const MINIMUM_OBSERVATION_MS = 72 * HOUR_MS;
const MAXIMUM_OBSERVATION_MS = 7 * 24 * HOUR_MS;
const ISO_TIMESTAMP_WITH_ZONE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2})$/;

function blockedAttestation(reason: string): AgentKitAttestationResult {
  return {
    eligibility: 'blocked',
    limitation: 'unverified-operator-declaration',
    reason,
  };
}

function removalPackageManager(
  evidence: AgentKitLifecycleInput['packageManagerEvidence'],
): AgentKitLifecycleResult['removalPackageManager'] {
  return evidence === 'bun' || evidence === 'npm' || evidence === 'pnpm' || evidence === 'yarn'
    ? evidence
    : null;
}

export function validateOperatorAttestation(
  declaration: AgentKitOperatorAttestation | null,
  canaryOutcome: AgentKitLifecycleInput['canaryOutcome'],
): AgentKitAttestationResult {
  if (!declaration) return blockedAttestation('operator-attestation-missing');
  if (declaration.acknowledgedAdvisoryOnly !== true) {
    return blockedAttestation('advisory-limitation-not-acknowledged');
  }
  if (declaration.canaryResult !== 'pass' || canaryOutcome !== 'pass') {
    return blockedAttestation('canary-not-declared-pass');
  }
  if (!['none', 'acknowledged'].includes(declaration.incidentStatus)) {
    return blockedAttestation('incident-not-acknowledged');
  }

  if (![declaration.startedAt, declaration.endedAt, declaration.reviewedAt]
    .every((value) => typeof value === 'string' && ISO_TIMESTAMP_WITH_ZONE.test(value))) {
    return blockedAttestation('attestation-timestamp-invalid');
  }

  const startedAt = Date.parse(declaration.startedAt);
  const endedAt = Date.parse(declaration.endedAt);
  const reviewedAt = Date.parse(declaration.reviewedAt);
  if (![startedAt, endedAt, reviewedAt].every(Number.isFinite)) {
    return blockedAttestation('attestation-timestamp-invalid');
  }

  const observationDuration = endedAt - startedAt;
  if (observationDuration < MINIMUM_OBSERVATION_MS) {
    return blockedAttestation('observation-shorter-than-72-hours');
  }
  if (observationDuration > MAXIMUM_OBSERVATION_MS) {
    return blockedAttestation('observation-longer-than-7-days');
  }
  if (reviewedAt < endedAt || reviewedAt - startedAt > MAXIMUM_OBSERVATION_MS) {
    return blockedAttestation('review-outside-7-day-window');
  }

  return {
    eligibility: 'advisory-ready',
    limitation: 'unverified-operator-declaration',
    reason: null,
  };
}

function stageStatesFor(
  lane: AgentKitLifecycleLane,
  attestation: AgentKitAttestationResult,
  completedStages: readonly AgentKitLifecycleStageId[],
  canaryOutcome: AgentKitLifecycleInput['canaryOutcome'],
): AgentKitLifecycleResult['stageStates'] {
  if (lane === 'support-assisted') {
    return AGENTKIT_LIFECYCLE_STAGE_IDS.map((id) => ({ id, state: 'blocked' as const }));
  }
  if (lane === 'recovery') {
    return AGENTKIT_LIFECYCLE_STAGE_IDS.map((id, index) => ({
      id,
      state: index === 0 ? 'advisory-ready' as const : 'blocked' as const,
    }));
  }
  if (lane === 'fresh-install') {
    return sequentialStageStates(
      ['backup', 'install-ak', 'verify-canary', 'observe'],
      completedStages,
      canaryOutcome,
      attestation,
    );
  }
  return sequentialStageStates(
    AGENTKIT_LIFECYCLE_STAGE_IDS,
    completedStages,
    canaryOutcome,
    attestation,
  );
}

function sequentialStageStates(
  applicableStages: readonly AgentKitLifecycleStageId[],
  completedStages: readonly AgentKitLifecycleStageId[],
  canaryOutcome: AgentKitLifecycleInput['canaryOutcome'],
  attestation: AgentKitAttestationResult,
): AgentKitLifecycleResult['stageStates'] {
  const completionClaims = new Set(completedStages);
  const validatedCompleted = new Set<AgentKitLifecycleStageId>();
  return AGENTKIT_LIFECYCLE_STAGE_IDS.map((id) => {
    const applicableIndex = applicableStages.indexOf(id);
    if (applicableIndex === -1) return { id, state: 'not-applicable' as const };

    const predecessorsComplete = applicableStages
      .slice(0, applicableIndex)
      .every((predecessor) => validatedCompleted.has(predecessor));
    if (!predecessorsComplete) return { id, state: 'blocked' as const };
    if (completionClaims.has(id)) {
      if (id === 'verify-canary' && canaryOutcome !== 'pass') {
        return { id, state: 'blocked' as const };
      }
      if ((id === 'observe' || id === 'remove-ck-control-plane')
        && attestation.eligibility !== 'advisory-ready') {
        return { id, state: 'blocked' as const };
      }
      validatedCompleted.add(id);
      return { id, state: 'completed' as const };
    }
    if (id === 'observe' && canaryOutcome !== 'pass') {
      return { id, state: 'blocked' as const };
    }
    if (id === 'remove-ck-control-plane' && attestation.eligibility !== 'advisory-ready') {
      return { id, state: 'blocked' as const };
    }
    return { id, state: 'advisory-ready' as const };
  });
}

function supportAssisted(reason: string): AgentKitLifecycleResult {
  const attestation = blockedAttestation(reason);
  return {
    lane: 'support-assisted',
    supportLevel: 'support-assisted',
    stageStates: stageStatesFor('support-assisted', attestation, [], 'not-run'),
    blockedReason: reason,
    copyPolicy: 'no-destructive-copy',
    recoveryTarget: 'support-intake',
    removalPackageManager: null,
    eligibility: 'blocked',
    attestationLimitation: attestation.limitation,
    copyableDestructiveCommands: [],
  };
}

export function routeAgentKitLifecycle(input: AgentKitLifecycleInput): AgentKitLifecycleResult {
  if (!['bun', 'npm', 'pnpm', 'yarn', 'unknown', 'none'].includes(input.packageManagerEvidence)) {
    return supportAssisted('package-manager-unsupported');
  }
  if (input.metadataHealth !== 'healthy') return supportAssisted(`metadata-${input.metadataHealth}`);
  if (input.legacyOwnershipState === 'mixed' || input.legacyOwnershipState === 'custom') {
    return supportAssisted(`ownership-${input.legacyOwnershipState}`);
  }
  if (input.dataCriticality === 'critical') return supportAssisted('critical-data-support-required');
  if (input.packageManagerEvidence === 'unknown') {
    return supportAssisted('package-manager-unknown');
  }
  if (input.legacyOwnershipState !== 'absent' && input.packageManagerEvidence === 'none') {
    return supportAssisted('package-manager-evidence-missing');
  }
  if (input.legacyOwnershipState === 'absent' && input.scopeRelationship !== 'none') {
    return supportAssisted('fresh-install-scope-inconsistent');
  }
  if (input.legacyOwnershipState !== 'absent'
    && (input.scopeRelationship === 'none' || input.scopeRelationship === 'unknown')) {
    return supportAssisted('legacy-scope-relationship-unknown');
  }
  if (input.cleanupPreviewResult === 'dirty' || input.cleanupPreviewResult === 'unknown') {
    return supportAssisted(`cleanup-preview-${input.cleanupPreviewResult}`);
  }

  if (input.goal === 'recover' || input.canaryOutcome === 'fail') {
    const attestation = blockedAttestation('recovery-required');
    return {
      lane: 'recovery',
      supportLevel: 'support-assisted',
      stageStates: stageStatesFor('recovery', attestation, input.completedStages, input.canaryOutcome),
      blockedReason: 'recovery-required',
      copyPolicy: 'recovery-only',
      recoveryTarget: 'last-known-good-agentkit',
      removalPackageManager: null,
      eligibility: 'blocked',
      attestationLimitation: attestation.limitation,
      copyableDestructiveCommands: [],
    };
  }

  if (input.goal === 'coexistence') {
    if (input.publicReleaseChannel !== 'beta') return supportAssisted('coexistence-beta-only');
    if (!input.pilotOptIn) return supportAssisted('coexistence-pilot-opt-in-required');
    if (input.legacyOwnershipState !== 'clean-single-scope') {
      return supportAssisted('coexistence-clean-ownership-required');
    }
    if (input.scopeRelationship !== 'ck-global-ak-project-local') {
      return supportAssisted('coexistence-scope-boundary-required');
    }
    const attestation = validateOperatorAttestation(input.observationEvidence, input.canaryOutcome);
    return {
      lane: 'clean-coexistence-pilot',
      supportLevel: 'self-service',
      stageStates: stageStatesFor(
        'clean-coexistence-pilot',
        attestation,
        input.completedStages,
        input.canaryOutcome,
      ),
      blockedReason: attestation.reason,
      copyPolicy: 'closed-beta-only',
      recoveryTarget: 'pre-agentkit-backup',
      removalPackageManager: removalPackageManager(input.packageManagerEvidence),
      eligibility: attestation.eligibility,
      attestationLimitation: attestation.limitation,
      copyableDestructiveCommands: [],
    };
  }

  if (input.legacyOwnershipState === 'absent' && input.goal === 'install') {
    const attestation = validateOperatorAttestation(input.observationEvidence, input.canaryOutcome);
    return {
      lane: 'fresh-install',
      supportLevel: 'self-service',
      stageStates: stageStatesFor(
        'fresh-install',
        attestation,
        input.completedStages,
        input.canaryOutcome,
      ),
      blockedReason: attestation.reason,
      copyPolicy: 'safe-setup',
      recoveryTarget: null,
      removalPackageManager: null,
      eligibility: attestation.eligibility,
      attestationLimitation: attestation.limitation,
      copyableDestructiveCommands: [],
    };
  }

  if (input.legacyOwnershipState !== 'clean-single-scope' || input.cleanupPreviewResult !== 'clean') {
    return supportAssisted('clean-cutover-preconditions-not-met');
  }

  const attestation = validateOperatorAttestation(input.observationEvidence, input.canaryOutcome);
  return {
    lane: 'clean-cutover',
    supportLevel: 'self-service',
    stageStates: stageStatesFor(
      'clean-cutover',
      attestation,
      input.completedStages,
      input.canaryOutcome,
    ),
    blockedReason: attestation.reason,
    copyPolicy: 'stage-gated',
    recoveryTarget: 'pre-agentkit-backup',
    removalPackageManager: removalPackageManager(input.packageManagerEvidence),
    eligibility: attestation.eligibility,
    attestationLimitation: attestation.limitation,
    copyableDestructiveCommands: [],
  };
}

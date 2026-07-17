import {
  routeAgentKitLifecycle,
  type AgentKitLifecycleInput,
  type AgentKitLifecycleResult,
  type AgentKitLifecycleStageId,
  type AgentKitOperatorAttestation,
} from '@/data/guides/agentkit/agentkit-lifecycle-policy';

type GuideRoot = HTMLElement & {
  dataset: DOMStringMap & {
    publicReleaseChannel?: string;
    stageSevenDetails?: string;
  };
};

const resetCallbacks = new WeakMap<GuideRoot, () => void>();
let pageShowBound = false;

function requiredValue<T extends string>(data: FormData, name: string): T | null {
  const value = data.get(name);
  return typeof value === 'string' && value.length > 0 ? value as T : null;
}

function toIsoTimestamp(value: string | null): string | null {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isFinite(parsed.getTime()) ? parsed.toISOString() : null;
}

function selectedCompletedStages(root: GuideRoot): AgentKitLifecycleStageId[] {
  return [...root.querySelectorAll<HTMLInputElement>('input[name="completedStages"]:checked')]
    .map((input) => input.value as AgentKitLifecycleStageId);
}

function clearCompletionFrom(root: GuideRoot, boundary: AgentKitLifecycleStageId): void {
  let boundaryReached = false;
  root.querySelectorAll<HTMLInputElement>('input[name="completedStages"]').forEach((input) => {
    if (input.value === boundary) boundaryReached = true;
    if (boundaryReached) input.checked = false;
  });
}

function setRouterField(root: GuideRoot, id: string, visible: boolean): void {
  const field = root.querySelector<HTMLElement>(`[data-agentkit-router-field="${id}"]`);
  if (!field) return;
  field.hidden = !visible;
  field.querySelectorAll<HTMLInputElement | HTMLSelectElement>('input, select').forEach((control) => {
    control.disabled = !visible;
    if (!visible) {
      if (control instanceof HTMLInputElement && control.type === 'checkbox') control.checked = false;
      else control.value = '';
    }
  });
}

function syncProgressiveRouterFields(root: GuideRoot, form: HTMLFormElement): void {
  const ownership = form.elements.namedItem('legacyOwnershipState') as HTMLSelectElement | null;
  const metadata = form.elements.namedItem('metadataHealth') as HTMLSelectElement | null;
  const goal = form.elements.namedItem('goal') as HTMLSelectElement | null;
  const hasCleanCkScope = ownership?.value === 'clean-single-scope';
  const metadataHealthy = hasCleanCkScope && metadata?.value === 'healthy';
  setRouterField(root, 'metadata', hasCleanCkScope);
  setRouterField(root, 'scope', metadataHealthy);
  setRouterField(root, 'preview', metadataHealthy);
  setRouterField(root, 'manager', metadataHealthy);
  setRouterField(root, 'pilot', goal?.value === 'coexistence');
}

function stageLabelClass(state: string): string {
  const base = 'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold';
  if (state === 'completed') return `${base} bg-emerald-100 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200`;
  if (state === 'advisory-ready') return `${base} bg-sky-100 text-sky-900 dark:bg-sky-950/50 dark:text-sky-200`;
  if (state === 'not-applicable') return `${base} bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300`;
  if (state === 'publication-hold') return `${base} bg-rose-100 text-rose-900 dark:bg-rose-950/50 dark:text-rose-200`;
  return `${base} bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200`;
}

function setStageLabel(item: HTMLElement, state: string): void {
  const label = item.querySelector<HTMLElement>('[data-agentkit-stage-label]');
  const text = label?.querySelector<HTMLElement>('[data-agentkit-stage-label-text]');
  if (!label || !text) return;
  const key = state === 'advisory-ready'
    ? 'labelReady'
    : state === 'not-applicable'
      ? 'labelNotApplicable'
      : state === 'publication-hold'
        ? 'labelHold'
        : state === 'completed'
          ? 'labelCompleted'
          : 'labelBlocked';
  text.textContent = label.dataset[key] ?? label.dataset.labelBlocked ?? '';
  label.className = stageLabelClass(state);
}

function openFirstActionableStage(root: GuideRoot, focusTarget = false): void {
  const items = [...root.querySelectorAll<HTMLElement>('[data-agentkit-stage]')];
  const target = items.find((item) => item.dataset.agentkitStageState === 'advisory-ready')
    ?? items.find((item) => item.dataset.agentkitStageState === 'publication-hold')
    ?? items.find((item) => item.dataset.agentkitStageState === 'completed')
    ?? items[0];
  for (const item of items) {
    const details = item.querySelector<HTMLDetailsElement>('[data-agentkit-stage-details]');
    if (details) details.open = item === target;
  }
  if (focusTarget) {
    target?.querySelector<HTMLElement>('[data-agentkit-stage-details] > summary')?.focus();
  }
}

function updateStageUi(
  root: GuideRoot,
  result: AgentKitLifecycleResult,
  canaryOutcome: AgentKitLifecycleInput['canaryOutcome'],
  focusActionable = false,
): void {
  const stageSevenPublished = root.dataset.stageSevenDetails === 'published';
  for (const stage of result.stageStates) {
    const item = root.querySelector<HTMLElement>(`[data-agentkit-stage="${stage.id}"]`);
    if (!item) continue;
    const unavailable = stage.id === 'remove-ck-control-plane' && !stageSevenPublished;
    const state = unavailable ? 'publication-hold' : stage.state;
    item.dataset.agentkitStageState = state;
    setStageLabel(item, state);
    const checkbox = item.querySelector<HTMLInputElement>('input[name="completedStages"]');
    if (checkbox) {
      const awaitingCanaryDeclaration = stage.id === 'verify-canary' && canaryOutcome !== 'pass';
      checkbox.disabled = unavailable
        || awaitingCanaryDeclaration
        || !['advisory-ready', 'completed'].includes(state);
      if (state === 'not-applicable' || state === 'blocked' || unavailable) checkbox.checked = false;
    }
    const commandPanel = item.querySelector<HTMLElement>('[data-agentkit-stage-command-panel]');
    if (commandPanel) commandPanel.hidden = unavailable || !['advisory-ready', 'completed'].includes(state);
  }
  const verifyState = result.stageStates.find(({ id }) => id === 'verify-canary')?.state;
  const removalState = result.stageStates.find(({ id }) => id === 'remove-ck-control-plane')?.state;
  root.querySelectorAll<HTMLElement>('[data-agentkit-downstream-actions]').forEach((section) => {
    section.hidden = verifyState !== 'advisory-ready' && verifyState !== 'completed';
  });
  root.querySelectorAll<HTMLElement>('[data-agentkit-removal-details]').forEach((section) => {
    section.hidden = !stageSevenPublished
      || result.supportLevel !== 'self-service'
      || !['advisory-ready', 'completed'].includes(removalState ?? 'blocked');
  });
  root.querySelectorAll<HTMLElement>('[data-agentkit-removal-policy]').forEach((section) => {
    section.hidden = !(section.dataset.agentkitRemovalPolicy === result.removalPackageManager);
  });
  const attestationSection = root.querySelector<HTMLElement>('[data-agentkit-attestation-section]');
  if (attestationSection) {
    const visible = verifyState === 'advisory-ready' || verifyState === 'completed';
    attestationSection.hidden = !visible;
    attestationSection.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLButtonElement>('input, select, button')
      .forEach((control) => { control.disabled = !visible; });
  }
  openFirstActionableStage(root, focusActionable);
}

function resetStageUi(root: GuideRoot): void {
  const items = [...root.querySelectorAll<HTMLElement>('[data-agentkit-stage]')];
  items.forEach((item, index) => {
    item.dataset.agentkitStageState = 'blocked';
    setStageLabel(item, 'blocked');
    const checkbox = item.querySelector<HTMLInputElement>('input[name="completedStages"]');
    if (checkbox) {
      checkbox.checked = false;
      checkbox.disabled = true;
    }
    const panel = item.querySelector<HTMLElement>('[data-agentkit-stage-command-panel]');
    if (panel) panel.hidden = true;
    const details = item.querySelector<HTMLDetailsElement>('[data-agentkit-stage-details]');
    if (details) details.open = index === 0;
  });
  const attestationSection = root.querySelector<HTMLElement>('[data-agentkit-attestation-section]');
  if (attestationSection) {
    attestationSection.hidden = true;
    attestationSection.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLButtonElement>('input, select, button')
      .forEach((control) => { control.disabled = true; });
  }
  root.querySelectorAll<HTMLElement>('[data-agentkit-downstream-actions], [data-agentkit-removal-details]')
    .forEach((section) => { section.hidden = true; });
  root.querySelectorAll<HTMLElement>('[data-agentkit-removal-policy]')
    .forEach((section) => { section.hidden = true; });
}

function bindExclusiveDetails(root: GuideRoot): void {
  const details = [...root.querySelectorAll<HTMLDetailsElement>('[data-agentkit-stage-details]')];
  details.forEach((current) => {
    current.addEventListener('toggle', () => {
      if (!current.open) return;
      details.forEach((sibling) => {
        if (sibling !== current) sibling.open = false;
      });
    });
  });
}

function bindGuide(root: GuideRoot): void {
  if (root.dataset.agentkitLifecycleBound === 'true') return;
  root.dataset.agentkitLifecycleBound = 'true';

  const routerForm = root.querySelector<HTMLFormElement>('[data-agentkit-router-form]');
  const routerEvaluateButton = root.querySelector<HTMLButtonElement>('[data-agentkit-router-evaluate]');
  const attestationForm = root.querySelector<HTMLFormElement>('[data-agentkit-attestation-form]');
  const routerResult = root.querySelector<HTMLElement>('[data-agentkit-router-result]');
  const laneOutput = root.querySelector<HTMLElement>('[data-agentkit-lane]');
  const supportOutput = root.querySelector<HTMLElement>('[data-agentkit-support-level]');
  const copyOutput = root.querySelector<HTMLElement>('[data-agentkit-copy-policy]');
  const reasonCodeOutput = root.querySelector<HTMLElement>('[data-agentkit-reason-code]');
  const routerMessage = root.querySelector<HTMLElement>('[data-agentkit-router-message]');
  const attestationResult = root.querySelector<HTMLElement>('[data-agentkit-attestation-result]');
  const attestationMessage = root.querySelector<HTMLElement>('[data-agentkit-attestation-message]');
  if (!routerForm || !routerEvaluateButton || !attestationForm || !routerResult || !attestationResult) return;

  let declaration: AgentKitOperatorAttestation | null = null;
  let canaryOutcome: AgentKitLifecycleInput['canaryOutcome'] = 'not-run';
  let routerEvaluationCurrent = false;

  const setAttestationBlocked = (): void => {
    attestationResult.dataset.agentkitEligibility = 'blocked';
    if (attestationMessage) attestationMessage.textContent = attestationResult.dataset.messageBlocked ?? '';
  };

  const setRouterBlocked = (reasonCode: 'router-input-required' | 'router-input-changed'): void => {
    routerResult.dataset.agentkitEligibility = 'blocked';
    routerResult.dataset.agentkitReason = reasonCode;
    if (laneOutput) laneOutput.textContent = 'support-assisted';
    if (supportOutput) supportOutput.textContent = 'support-assisted';
    if (copyOutput) copyOutput.textContent = 'no-destructive-copy';
    if (reasonCodeOutput) reasonCodeOutput.textContent = reasonCode;
    if (routerMessage) {
      routerMessage.textContent = reasonCode === 'router-input-changed'
        ? routerResult.dataset.messageInputChanged ?? routerResult.dataset.messageBlocked ?? ''
        : routerResult.dataset.messageBlocked ?? '';
    }
  };

  const reset = (): void => {
    declaration = null;
    canaryOutcome = 'not-run';
    routerEvaluationCurrent = false;
    routerForm.reset();
    attestationForm.reset();
    syncProgressiveRouterFields(root, routerForm);
    resetStageUi(root);
    setRouterBlocked('router-input-required');
    setAttestationBlocked();
  };
  resetCallbacks.set(root, reset);

  const evaluate = (focusResult: boolean, focusActionable = false): AgentKitLifecycleResult | null => {
    if (!routerForm.checkValidity()) return null;
    const data = new FormData(routerForm);
    const goal = requiredValue<AgentKitLifecycleInput['goal']>(data, 'goal');
    const legacyOwnershipState = requiredValue<AgentKitLifecycleInput['legacyOwnershipState']>(data, 'legacyOwnershipState');
    const dataCriticality = requiredValue<AgentKitLifecycleInput['dataCriticality']>(data, 'dataCriticality');
    if (!goal || !legacyOwnershipState || !dataCriticality) return null;
    const metadataHealth = requiredValue<AgentKitLifecycleInput['metadataHealth']>(data, 'metadataHealth') ?? 'healthy';
    const scopeRelationship = requiredValue<AgentKitLifecycleInput['scopeRelationship']>(data, 'scopeRelationship')
      ?? (legacyOwnershipState === 'absent' ? 'none' : 'unknown');
    const cleanupPreviewResult = requiredValue<AgentKitLifecycleInput['cleanupPreviewResult']>(data, 'cleanupPreviewResult')
      ?? (legacyOwnershipState === 'absent' ? 'not-applicable' : 'unknown');
    const packageManagerEvidence = requiredValue<AgentKitLifecycleInput['packageManagerEvidence']>(data, 'packageManagerEvidence')
      ?? (legacyOwnershipState === 'absent' ? 'none' : 'unknown');

    const result = routeAgentKitLifecycle({
      publicReleaseChannel: root.dataset.publicReleaseChannel === 'beta' ? 'beta' : 'stable',
      goal,
      legacyOwnershipState,
      metadataHealth,
      scopeRelationship,
      cleanupPreviewResult,
      packageManagerEvidence,
      dataCriticality,
      pilotOptIn: data.get('pilotOptIn') === 'on',
      canaryOutcome,
      observationEvidence: declaration,
      completedStages: selectedCompletedStages(root),
    });

    routerEvaluationCurrent = true;
    routerResult.dataset.agentkitEligibility = result.eligibility;
    routerResult.dataset.agentkitReason = result.blockedReason ?? 'none';
    if (laneOutput) laneOutput.textContent = result.lane;
    if (supportOutput) supportOutput.textContent = result.supportLevel;
    if (copyOutput) copyOutput.textContent = result.copyPolicy;
    if (reasonCodeOutput) reasonCodeOutput.textContent = result.blockedReason ?? 'none';
    if (routerMessage) {
      const key = result.lane === 'recovery'
        ? 'messageRecovery'
        : result.supportLevel === 'support-assisted'
          ? 'messageSupportAssisted'
          : 'messageSelfService';
      routerMessage.textContent = routerResult.dataset[key] ?? routerResult.dataset.messageBlocked ?? '';
    }
    updateStageUi(root, result, canaryOutcome, focusActionable);
    if (focusResult) routerResult.focus();
    return result;
  };

  const invalidateRouterEvaluation = (event: Event): void => {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    if (target.name === 'goal' || target.name === 'legacyOwnershipState' || target.name === 'metadataHealth') {
      syncProgressiveRouterFields(root, routerForm);
    }
    if (!routerEvaluationCurrent) return;
    routerEvaluationCurrent = false;
    declaration = null;
    canaryOutcome = 'not-run';
    attestationForm.reset();
    resetStageUi(root);
    setRouterBlocked('router-input-changed');
    setAttestationBlocked();
  };

  const invalidateAttestation = (): void => {
    if (!declaration && canaryOutcome === 'not-run') return;
    declaration = null;
    canaryOutcome = 'not-run';
    clearCompletionFrom(root, 'verify-canary');
    setAttestationBlocked();
    evaluate(false);
  };

  routerForm.addEventListener('input', invalidateRouterEvaluation);
  routerForm.addEventListener('change', invalidateRouterEvaluation);
  routerForm.addEventListener('submit', (event) => {
    event.preventDefault();
  });
  routerEvaluateButton.addEventListener('click', () => {
    if (!routerForm.reportValidity()) return;
    evaluate(true);
  });

  root.querySelectorAll<HTMLInputElement>('input[name="completedStages"]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => evaluate(false, true));
  });

  attestationForm.addEventListener('input', invalidateAttestation);
  attestationForm.addEventListener('change', invalidateAttestation);

  attestationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!attestationForm.reportValidity()) return;
    const data = new FormData(attestationForm);
    const canaryResult = requiredValue<AgentKitOperatorAttestation['canaryResult']>(data, 'canaryResult');
    const incidentStatus = requiredValue<AgentKitOperatorAttestation['incidentStatus']>(data, 'incidentStatus');
    const startedAt = toIsoTimestamp(requiredValue<string>(data, 'startedAt'));
    const endedAt = toIsoTimestamp(requiredValue<string>(data, 'endedAt'));
    if (!canaryResult || !incidentStatus || !startedAt || !endedAt) return;
    canaryOutcome = canaryResult;
    declaration = {
      startedAt,
      endedAt,
      reviewedAt: new Date().toISOString(),
      canaryResult,
      incidentStatus,
      acknowledgedAdvisoryOnly: data.get('acknowledgedAdvisoryOnly') === 'on',
    };
    const result = evaluate(false);
    const eligibility = result?.eligibility ?? 'blocked';
    attestationResult.dataset.agentkitEligibility = eligibility;
    if (attestationMessage) {
      attestationMessage.textContent = eligibility === 'advisory-ready'
        ? attestationResult.dataset.messageReady ?? ''
        : attestationResult.dataset.messageBlocked ?? '';
    }
    attestationResult.focus();
  });

  bindExclusiveDetails(root);
  reset();
}

export function initializeAgentKitLifecycleGuides(): void {
  document.querySelectorAll<GuideRoot>('[data-agentkit-lifecycle-guide]').forEach(bindGuide);
  if (!pageShowBound) {
    pageShowBound = true;
    window.addEventListener('pageshow', () => {
      document.querySelectorAll<GuideRoot>('[data-agentkit-lifecycle-guide]').forEach((root) => {
        resetCallbacks.get(root)?.();
      });
    });
  }
}

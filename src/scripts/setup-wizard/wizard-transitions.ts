// Setup Wizard — Transition helpers (pure functions, no DOM)
// Reuses/wraps functions from wizard-tree-schema where they already exist.

import type { ProviderId } from '@/data/guides/setup-wizard/providers';
import type { Step } from '@/data/guides/setup-wizard/wizard-tree-schema';
import { shouldSuggestCcs, availableTools, nextStep, prevStep } from '@/data/guides/setup-wizard/wizard-tree-schema';
import type { WizardState } from './url-query-sync';

// Re-export schema helpers for convenience
export { shouldSuggestCcs, availableTools, nextStep, prevStep };

/**
 * Determines whether the user can advance past the current step.
 * Returns true when the required selection for that step has been made.
 */
export function canAdvance(state: WizardState): boolean {
  switch (state.step) {
    case 'subscriptions':
      return state.subs.length > 0;
    case 'routing':
      return state.routing !== null;
    case 'tool-type':
      return state.toolType !== null;
    case 'tool-selection':
      return state.tools.length > 0;
    case 'result':
      return false; // terminal step
    default:
      return false;
  }
}

/**
 * Returns the next logical step, auto-skipping 'routing' when
 * only one provider is selected (routing is implicit = 'manual').
 */
export function nextStepWithSkip(state: WizardState): Step | null {
  const next = nextStep(state.step);
  if (!next) return null;

  // Auto-skip routing step when only 1 provider selected
  if (next === 'routing' && state.subs.length === 1) {
    return nextStep('routing');
  }

  return next;
}

/**
 * Returns the previous step, auto-skipping 'routing' in reverse
 * when only one provider is selected.
 */
export function prevStepWithSkip(state: WizardState): Step | null {
  const prev = prevStep(state.step);
  if (!prev) return null;

  // Skip routing step going back when it was auto-skipped going forward
  if (prev === 'routing' && state.subs.length === 1) {
    return prevStep('routing');
  }

  return prev;
}

/**
 * Returns implicit routing when auto-skip applies.
 * Single provider → always 'manual'.
 */
export function impliedRouting(subs: ProviderId[]): 'manual' | null {
  return subs.length === 1 ? 'manual' : null;
}

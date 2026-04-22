// Setup Wizard — URL Query Sync helpers
// Pure functions for serializing/parsing wizard state to/from URL search params.
// No DOM dependencies — importable from Alpine component or test harness.

import type { ProviderId } from '@/data/guides/setup-wizard/providers';
import type { ToolId } from '@/data/guides/setup-wizard/tools';
import type { Step } from '@/data/guides/setup-wizard/wizard-tree-schema';
import { STEPS } from '@/data/guides/setup-wizard/wizard-tree-schema';

export interface WizardState {
  step: Step;
  subs: ProviderId[];
  routing: 'ccs' | 'manual' | null;
  toolType: 'ide' | 'cli' | 'both' | null;
  tools: ToolId[];
}

export const DEFAULT_STATE: WizardState = {
  step: 'subscriptions',
  subs: [],
  routing: null,
  toolType: null,
  tools: [],
};

/** Serialize wizard state to URLSearchParams */
export function serializeState(state: WizardState): URLSearchParams {
  const params = new URLSearchParams();
  if (state.subs.length > 0) params.set('subs', state.subs.join(','));
  if (state.routing) params.set('routing', state.routing);
  if (state.toolType) params.set('tool', state.toolType);
  if (state.tools.length > 0) params.set('tools', state.tools.join(','));
  if (state.step !== 'subscriptions') params.set('step', state.step);
  return params;
}

/** Parse URLSearchParams into partial wizard state */
export function parseURLParams(params: URLSearchParams): Partial<WizardState> {
  const result: Partial<WizardState> = {};

  const subsRaw = params.get('subs');
  if (subsRaw) {
    result.subs = subsRaw.split(',').filter(Boolean) as ProviderId[];
  }

  const routing = params.get('routing');
  if (routing === 'ccs' || routing === 'manual') {
    result.routing = routing;
  }

  const tool = params.get('tool');
  if (tool === 'ide' || tool === 'cli' || tool === 'both') {
    result.toolType = tool;
  }

  const toolsRaw = params.get('tools');
  if (toolsRaw) {
    result.tools = toolsRaw.split(',').filter(Boolean) as ToolId[];
  }

  const step = params.get('step');
  if (step && (STEPS as readonly string[]).includes(step)) {
    result.step = step as Step;
  }

  return result;
}

/** Simple debounce utility */
export function debounce<T extends (...args: unknown[]) => void>(fn: T, ms: number): T {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return ((...args: unknown[]) => {
    if (timer !== null) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  }) as T;
}

// Setup Wizard — Tree schema and step helpers
import type { ProviderId } from './providers';
import type { ToolId } from './tools';
import { PROVIDERS } from './providers';
import { TOOLS } from './tools';

// Ordered wizard steps
export const STEPS = [
  'subscriptions',
  'routing',
  'tool-type',
  'tool-selection',
  'result',
] as const;

export type Step = (typeof STEPS)[number];

/**
 * Returns all tools supported by at least one of the selected providers.
 * Optionally filtered by tool type ('cli' | 'ide').
 */
export function availableTools(
  selectedProviders: ProviderId[],
  type?: 'cli' | 'ide',
): ToolId[] {
  return TOOLS.filter((tool) => {
    const hasProvider = tool.providers.some((p) => selectedProviders.includes(p));
    const matchesType = type ? tool.type === type : true;
    return hasProvider && matchesType;
  }).map((tool) => tool.id);
}

/**
 * Returns true if any of the selected providers are CCS-compatible
 * AND there are multiple providers selected (CCS routing makes sense).
 */
export function shouldSuggestCcs(selectedProviders: ProviderId[]): boolean {
  if (selectedProviders.length < 2) return false;
  return selectedProviders.some((id) => {
    const provider = PROVIDERS.find((p) => p.id === id);
    return provider?.ccs_compatible ?? false;
  });
}

/** Get the next step in the wizard flow */
export function nextStep(current: Step): Step | null {
  const idx = STEPS.indexOf(current);
  return idx >= 0 && idx < STEPS.length - 1 ? STEPS[idx + 1]! : null;
}

/** Get the previous step in the wizard flow */
export function prevStep(current: Step): Step | null {
  const idx = STEPS.indexOf(current);
  return idx > 0 ? STEPS[idx - 1]! : null;
}

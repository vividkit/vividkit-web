// Setup Wizard — Resolve config snippets from WizardState
// Pure function: no side effects, no DOM, no store coupling.

import type { WizardState } from './url-query-sync';
import type { ProviderId } from '@/data/guides/setup-wizard/providers';
import type { ToolId } from '@/data/guides/setup-wizard/tools';
import { getTool } from '@/data/guides/setup-wizard/tools';
import { getProvider } from '@/data/guides/setup-wizard/providers';
import { CONFIG_SNIPPETS } from '@/data/guides/setup-wizard/config-snippets';

/** A resolved snippet ready for rendering */
export interface ResolvedSnippet {
  /** Unique key: `${providerId}:${toolId}` or `ccs:multi` */
  key: string;
  /** Display title shown in the config block header */
  title: string;
  /** Shell commands to display and copy */
  commands: string[];
  /** Optional env vars to set */
  env?: Record<string, string>;
  /** URL to the detailed guide page */
  guide_link: string;
  /** Optional extra notes or warnings */
  notes?: string;
  /** True when no snippet exists for this combo — show "Coming soon" UI */
  missing?: boolean;
}

/**
 * Resolve ordered snippets from wizard state.
 * - CCS routing: single `ccs:multi` snippet
 * - Manual routing: one snippet per tool, matched to a supporting provider
 * - Missing combos: included as placeholder with `missing: true`
 */
export function resolveSnippets(state: WizardState): ResolvedSnippet[] {
  if (state.routing === 'ccs') {
    return [buildCcsSnippet(state.subs)];
  }

  if (state.tools.length === 0) {
    return [];
  }

  return state.tools.map((toolId) => buildToolSnippet(toolId, state.subs));
}

// ── Internal helpers ──────────────────────────────────────────────────────────

function buildCcsSnippet(providers: ProviderId[]): ResolvedSnippet {
  const raw = CONFIG_SNIPPETS['ccs:multi'];
  const providerNames = providers
    .map((id) => getProvider(id)?.name ?? id)
    .join(', ');

  return {
    key: 'ccs:multi',
    title: `CCS — Multi-provider (${providerNames || 'all selected'})`,
    commands: raw?.commands ?? [],
    env: raw?.env,
    guide_link: raw?.guide_link ?? '/guides/ccs',
    notes: raw?.notes,
  };
}

function buildToolSnippet(toolId: ToolId, subs: ProviderId[]): ResolvedSnippet {
  const tool = getTool(toolId);
  const toolName = tool?.name ?? toolId;

  // Find first selected provider that supports this tool
  const matchedProvider = subs.find((sub) =>
    tool?.providers.includes(sub)
  );

  if (!matchedProvider) {
    // No provider in selection supports this tool
    return makeMissingSnippet(toolId, toolName, tool?.guide_path);
  }

  const key = `${matchedProvider}:${toolId}`;
  const raw = CONFIG_SNIPPETS[key];

  if (!raw) {
    // Combo exists logically but no snippet stub yet
    return makeMissingSnippet(toolId, toolName, tool?.guide_path, matchedProvider);
  }

  const providerName = getProvider(matchedProvider)?.name ?? matchedProvider;

  return {
    key,
    title: `${toolName} via ${providerName}`,
    commands: raw.commands,
    env: raw.env,
    guide_link: raw.guide_link,
    notes: raw.notes,
  };
}

function makeMissingSnippet(
  toolId: ToolId,
  toolName: string,
  guidePath?: string,
  providerId?: ProviderId
): ResolvedSnippet {
  const key = providerId ? `${providerId}:${toolId}` : `missing:${toolId}`;
  return {
    key,
    title: toolName,
    commands: [],
    guide_link: guidePath ?? '/guides/cli',
    missing: true,
  };
}

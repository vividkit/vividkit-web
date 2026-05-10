// Shared CCS decision-tree types and reusable helpers
// Split from ccs-decision-tree-data.ts to keep each file <200 LOC.
import type { FlowchartPath, FlowchartData } from "./flowchart-types";

// Localized string: plain string = monolingual; object = pick by lang.
// Used in path-claude / path-claude-pool only (other 22 providers stay EN-only).
export type LocalizedString = string | { en: string; vi: string };

export interface CCSEnvVar {
  name: string;
  value: string;
  note?: LocalizedString;
}

export interface CCSSetupStep {
  title: LocalizedString;
  desc?: LocalizedString;
  cmd?: string;
  // section: true marks a divider/header (no bullet, no cmd box) — used to group steps into named paths
  section?: boolean;
}

export interface CCSUseCase {
  label: LocalizedString;
  cmd: string;
  desc?: LocalizedString;
}

export interface CCSAvailableModel {
  tier: string;
  name: string;
  note?: LocalizedString;
}

// Caveat entry: plain string/LocalizedString = beginner-friendly note shown by default.
// Object with level:'tech' = collapsed under "Show technical details" toggle.
export type CCSCaveat = LocalizedString | { text: LocalizedString; level: 'tech' };

// Per-provider setup payload carried on each FlowchartPath
export interface CCSProviderPayload {
  envVars: CCSEnvVar[];
  caveats: CCSCaveat[];
  banRisk?: 'high' | 'medium';
  costLabel?: LocalizedString;
  authType: 'oauth' | 'api_key' | 'local' | 'device_code';
  configFile: LocalizedString;
  setupSteps: Array<string | CCSSetupStep>;
  availableModels?: CCSAvailableModel[];
  useCases?: CCSUseCase[];
  docsUrl?: string;
}

export type CCSPath = Omit<FlowchartPath, 'name' | 'description'> & {
  name: LocalizedString;
  description: LocalizedString;
  payload?: CCSProviderPayload;
};

export interface CCSDecisionTreeData extends FlowchartData {
  paths: CCSPath[];
}

// CCS-specific S-curve path generator (compact nodes)
export function generateCCSPath(
  from: { x: number; y: number },
  to: { x: number; y: number },
): string {
  const exitY = from.y + 26;
  const enterY = to.y - 26;
  if (Math.abs(from.x - to.x) < 15) {
    return `M ${from.x} ${exitY} L ${to.x} ${enterY}`;
  }
  const cp1Y = exitY + (enterY - exitY) * 0.35;
  const cp2Y = exitY + (enterY - exitY) * 0.65;
  return `M ${from.x} ${exitY} C ${from.x} ${cp1Y}, ${to.x} ${cp2Y}, ${to.x} ${enterY}`;
}

// Group→color mapping for legend / canvas tinting
export const ccsGroupColors = {
  anthropic: 'purple',
  openai: 'cyan',
  google: 'red',
  cloud_ai: 'amber',
  ide: 'blue',
  local: 'green',
} as const;

// Local CLIProxy OAuth base — single source of truth for proxy-routed providers
export const CCS_OAUTH_BASE = 'http://127.0.0.1:8317/api/provider';

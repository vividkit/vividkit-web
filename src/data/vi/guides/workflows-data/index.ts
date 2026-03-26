// Workflows data index (Vietnamese) - re-exports all workflow collections
// Split from the original vi/guides/workflows.ts for maintainability
// NOTE: Engineer Kit workflows now re-export from EN (have category field)

export { stableWorkflows } from './workflows-stable';
export { betaOnlyWorkflows } from './workflows-beta-additions';
export { marketingKitWorkflows } from './workflows-marketing-kit';
export { legacyWorkflows, workflows } from './workflows-legacy';

import { stableWorkflows } from './workflows-stable';
import { betaOnlyWorkflows } from './workflows-beta-additions';

// betaWorkflows = stable + beta-only additions (mirrors original behavior)
export const betaWorkflows = [...stableWorkflows, ...betaOnlyWorkflows];

// engineerKitWorkflows built from VI data (stable + beta-only)
export const engineerKitWorkflows = [...stableWorkflows, ...betaOnlyWorkflows];

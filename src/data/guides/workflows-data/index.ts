// Workflows data index - re-exports all workflow collections
// Split from the original workflows.ts for maintainability

export { stableWorkflows } from './workflows-stable';
export { betaOnlyWorkflows } from './workflows-beta-additions';
export { marketingKitWorkflows } from './workflows-marketing-kit';
export { legacyWorkflows, workflows } from './workflows-legacy';

import { stableWorkflows } from './workflows-stable';
import { betaOnlyWorkflows } from './workflows-beta-additions';

// betaWorkflows = stable + beta-only additions (mirrors original behavior)
export const betaWorkflows = [...stableWorkflows, ...betaOnlyWorkflows];

// engineerKitWorkflows = all engineer workflows (stable + beta)
export const engineerKitWorkflows = [...stableWorkflows, ...betaOnlyWorkflows];

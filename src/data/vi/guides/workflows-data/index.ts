// Workflows data index (Vietnamese) - re-exports all workflow collections
// Split from the original vi/guides/workflows.ts for maintainability

export { stableWorkflows } from './workflows-stable';
export { betaOnlyWorkflows } from './workflows-beta-additions';
export { legacyWorkflows, workflows } from './workflows-legacy';

import { stableWorkflows } from './workflows-stable';
import { betaOnlyWorkflows } from './workflows-beta-additions';

// betaWorkflows = stable + beta-only additions (mirrors original behavior)
export const betaWorkflows = [...stableWorkflows, ...betaOnlyWorkflows];

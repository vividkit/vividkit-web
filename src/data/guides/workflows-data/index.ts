// Workflows data index - re-exports all workflow collections
// Split from the original workflows.ts for maintainability

export { stableWorkflows } from './workflows-stable';
export { betaOnlyWorkflows } from './workflows-beta-additions';
export { marketingKitWorkflows } from './workflows-marketing-kit';
export { legacyWorkflows, workflows } from './workflows-legacy';

import { stableWorkflows } from './workflows-stable';
import { betaOnlyWorkflows } from './workflows-beta-additions';

// betaWorkflows kept for backward compat — beta-additions currently empty,
// so these are equivalent to stableWorkflows. Spread preserved for forward compat
// when net-new beta-only workflows are added.
export const betaWorkflows = [...stableWorkflows, ...betaOnlyWorkflows];

// engineerKitWorkflows = single source of truth for the EK tab
export const engineerKitWorkflows = [...stableWorkflows, ...betaOnlyWorkflows];

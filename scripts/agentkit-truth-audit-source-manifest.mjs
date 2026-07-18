import { AGENTKIT_PUBLICATION_SOURCE_CLOSURE } from './agentkit-publication-source-closure.mjs';

export const AGENTKIT_TRUTH_AUDITED_SOURCE_PATHS = [...new Set([
  'src/data/guides/agentkit/agentkit-source-contract.ts',
  'src/data/guides/agentkit/agentkit-cli-facts.ts',
  'src/data/guides/agentkit/agentkit-app-facts.ts',
  'src/data/guides/agentkit/agentkit-skill-facts.ts',
  'src/data/guides/agentkit/what-is-claudekit-facts.ts',
  'src/data/guides/agentkit/agentkit-lifecycle-guide-facts.ts',
  'src/data/guides/agentkit/agentkit-lifecycle-policy.ts',
  'src/data/guides/agentkit/agentkit-publication-policy.ts',
  'src/data/guides/agentkit/agentkit-channel-policy.mjs',
  'src/data/guides/agentkit/agentkit-target-capabilities.ts',
  'src/data/guides/agentkit/agentkit-migration-mapping.ts',
  'src/data/guides/agentkit/agentkit-report-sanitizer.mjs',
  'src/data/guides/cli-commands-cheatsheet.ts',
  'src/data/guides/cli-command-notes.ts',
  'src/i18n/en/agentkit.ts',
  'src/i18n/vi/agentkit.ts',
  'scripts/agentkit-truth-audit-source-manifest.mjs',
  'scripts/audit-agentkit-truth.mjs',
  'scripts/build-agentkit-truth-audit-bundle.mjs',
  ...AGENTKIT_PUBLICATION_SOURCE_CLOSURE.filter((relativePath) => relativePath !== 'vercel.json'),
])];

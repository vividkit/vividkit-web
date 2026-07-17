const GENERATED_AGENTKIT_MAPPING_FILES = [
  'dist/guides/agentkit/index.html',
  'dist/vi/guides/agentkit/index.html',
  '.vercel/output/static/guides/agentkit/index.html',
  '.vercel/output/static/vi/guides/agentkit/index.html',
];

const GENERATED_AGENTKIT_MAPPING_ALLOWLIST = GENERATED_AGENTKIT_MAPPING_FILES.flatMap((file) => [
  {
    file,
    detector: 'legacy-cli-install',
    pattern: 'npm\\s+(?:install|i)\\s+-g\\s+claudekit-cli',
    maxCount: 1,
    owner: 'AgentKit migration guide',
    reason: 'The labelled legacy/current comparison renders one deprecated installer row.',
  },
  {
    file,
    detector: 'legacy-cli-command',
    pattern: '\\bck\\s+(?:new|init|update|setup|skills|agents|doctor|versions|config|migrate|uninstall)\\b',
    maxCount: 22,
    owner: 'AgentKit migration guide',
    reason: 'The migration guide renders ten mapping rows plus twelve bounded display/copy-payload occurrences for six preview-only lifecycle commands.',
  },
  {
    file,
    detector: 'legacy-slash-command',
    pattern: '\\/(?:ck|ckm):(?:[a-z][a-z0-9-]*|\\*)',
    maxCount: 2,
    owner: 'AgentKit migration guide',
    reason: 'The labelled legacy/current comparison renders one Engineer and one Marketing prefix row.',
  },
]);

export const AGENTKIT_LEGACY_ALLOWLIST = [
  {
    file: 'src/data/guides/agentkit/agentkit-migration-mapping.ts',
    detector: 'legacy-cli-install',
    pattern: 'npm\\s+(?:install|i)\\s+-g\\s+claudekit-cli',
    maxCount: 1,
    owner: 'VividKit guides',
    reason: 'One canonical legacy installer row is required for the migration comparison.',
  },
  {
    file: 'src/data/guides/agentkit/agentkit-migration-mapping.ts',
    detector: 'legacy-cli-command',
    pattern: '\\bck\\s+(?:new|init|update|setup|skills|agents|doctor|versions|config|migrate|uninstall)\\b',
    maxCount: 10,
    owner: 'VividKit guides',
    reason: 'Each documented legacy CLI command appears once in the canonical mapping.',
  },
  {
    file: 'src/data/guides/agentkit/agentkit-lifecycle-guide-facts.ts',
    detector: 'legacy-cli-command',
    pattern: '\\bck\\s+(?:new|init|update|setup|skills|agents|doctor|versions|config|migrate|uninstall)\\b',
    maxCount: 6,
    owner: 'AgentKit migration guide',
    reason: 'The canonical lifecycle facts contain two read-only preview commands for each supported platform; executable removal remains manual-only and package-manager-specific.',
  },
  {
    file: 'src/data/guides/agentkit/agentkit-migration-mapping.ts',
    detector: 'legacy-slash-command',
    pattern: '\\/(?:ck|ckm):(?:[a-z][a-z0-9-]*|\\*)',
    maxCount: 2,
    owner: 'VividKit guides',
    reason: 'The mapping preserves one Engineer and one Marketing prefix migration row.',
  },
  ...GENERATED_AGENTKIT_MAPPING_ALLOWLIST,
];

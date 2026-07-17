export const AGENTKIT_SANITIZED_REPORT_KEYS = [
  'category',
  'stage',
  'tool',
  'expectedSummary',
  'actualSummary',
  'incidentId',
];

export const AGENTKIT_LIFECYCLE_SANITIZED_REPORT_KEYS = [
  'tool',
  'channel',
  'detectorCategory',
  'lifecycleStage',
  'expectedSummary',
  'actualSummary',
  'incidentId',
];

const ALLOWED_CATEGORIES = new Set([
  'source-truth',
  'release-channel',
  'owner-decisions',
  'repository-context',
  'bundle-integrity',
]);

const ALLOWED_STAGES = new Set(['preflight', 'contract', 'fixtures', 'complete']);
const ALLOWED_CHANNELS = new Set(['stable', 'beta', 'unknown']);
const ALLOWED_DETECTOR_CATEGORIES = new Set(['bun', 'npm', 'pnpm', 'yarn', 'unknown']);
const ALLOWED_LIFECYCLE_STAGES = new Set([
  'backup',
  'cleanup-ck-ownership',
  'confirm-clean-scope',
  'install-ak',
  'verify-canary',
  'observe',
  'remove-ck-control-plane',
]);
const ALLOWED_INCIDENT_IDS = new Set([
  'AK-USAGE-001',
  'AK-ENV-001',
  'AK-REPO-001',
  'AK-REPO-002',
  'AK-CONTRACT-001',
  'AK-CONTRACT-002',
  'AK-SOURCE-001',
  'AK-FIXTURE-001',
  'AK-FIXTURE-002',
  'AK-FIXTURE-003',
  'AK-BUNDLE-001',
  'AK-TRUTH-OK',
  'AK-REMOVAL-001',
]);

const EXPECTED_SUMMARIES = {
  'reviewed-truth-contract': 'Reviewed VividKit AgentKit truth contract',
  'reviewed-source-and-owner': 'Reviewed AgentKit source truth and owner decisions',
};

const ACTUAL_SUMMARIES = {
  'diagnostic-redacted': 'Redacted untrusted diagnostic input',
  'usage-refused': 'CLI arguments refused by allowlist',
  'environment-refused': 'Inherited Node preload or module path state refused',
  'repo-unavailable': 'Repository identity unavailable',
  'repo-mismatch': 'Repository identity mismatch',
  'owner-unavailable': 'Owner decision contract unavailable or unsafe',
  'owner-drift': 'Owner decision contract differs from reviewed bundle',
  'source-drift': 'Canonical AgentKit truth source differs from reviewed bundle',
  'fixture-unavailable': 'Selected release fixture unavailable or unsafe',
  'fixture-drift': 'Selected release fixture differs from reviewed bundle',
  'fixture-channel-mismatch': 'Selected release fixture channel mismatch',
  'bundle-root-mismatch': 'Embedded fixture root mismatch',
  'truth-match': 'Selected channel contract matches reviewed bundle',
};

export function sanitizeAgentKitReport(input = {}) {
  const category = ALLOWED_CATEGORIES.has(input.category) ? input.category : 'source-truth';
  const stage = ALLOWED_STAGES.has(input.stage) ? input.stage : 'preflight';
  const tool = input.tool?.name === 'agentkit-truth-audit' && input.tool?.version === '1.0.0'
    ? input.tool
    : { name: 'agentkit-truth-audit', version: '1.0.0' };

  return {
    category,
    stage,
    tool: { name: tool.name, version: tool.version },
    expectedSummary: EXPECTED_SUMMARIES[input.expectedCode]
      ?? EXPECTED_SUMMARIES['reviewed-truth-contract'],
    actualSummary: ACTUAL_SUMMARIES[input.actualCode]
      ?? ACTUAL_SUMMARIES['diagnostic-redacted'],
    incidentId: ALLOWED_INCIDENT_IDS.has(input.incidentId) ? input.incidentId : 'AK-SOURCE-001',
  };
}

export function sanitizeAgentKitLifecycleReport(input = {}) {
  const base = sanitizeAgentKitReport(input);
  return {
    tool: base.tool,
    channel: ALLOWED_CHANNELS.has(input.channel) ? input.channel : 'unknown',
    detectorCategory: ALLOWED_DETECTOR_CATEGORIES.has(input.detectorCategory)
      ? input.detectorCategory
      : 'unknown',
    lifecycleStage: ALLOWED_LIFECYCLE_STAGES.has(input.lifecycleStage)
      ? input.lifecycleStage
      : 'confirm-clean-scope',
    expectedSummary: base.expectedSummary,
    actualSummary: base.actualSummary,
    incidentId: base.incidentId,
  };
}

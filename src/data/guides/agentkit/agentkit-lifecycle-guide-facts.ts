import { AGENTKIT_OFFICIAL_LINKS } from './agentkit-official-links.mjs';

export const AGENTKIT_LIFECYCLE_STAGE_IDS = [
  'backup',
  'cleanup-ck-ownership',
  'confirm-clean-scope',
  'install-ak',
  'verify-canary',
  'observe',
  'remove-ck-control-plane',
] as const;

export type AgentKitLifecycleStageId = typeof AGENTKIT_LIFECYCLE_STAGE_IDS[number];
export type AgentKitLifecyclePlatform = 'macos' | 'linux' | 'windows';
export type AgentKitLifecycleShell = 'zsh' | 'bash' | 'powershell';

export interface AgentKitLifecycleStageFact {
  id: AgentKitLifecycleStageId;
  predecessor: AgentKitLifecycleStageId | null;
  prerequisite: string;
  expectedSignal: string;
  failureAction: string;
  commandIds: readonly string[];
  copyPolicy: 'read-only-after-stage-gate' | 'manual-only' | 'no-command';
}

export interface AgentKitLifecycleCommandFact {
  id: string;
  stage: AgentKitLifecycleStageId;
  platform: AgentKitLifecyclePlatform;
  shell: AgentKitLifecycleShell;
  command: string;
  safety: 'read-only' | 'project-write' | 'network-exec' | 'destructive';
  copyable: boolean;
  sourceUrl: string;
}

export interface AgentKitCkExecutableDetector {
  platform: AgentKitLifecyclePlatform;
  shell: AgentKitLifecycleShell;
  command: string;
  copyable: true;
  classification: 'path-evidence-only';
}

export interface AgentKitCkOwnershipProbe {
  packageManager: 'bun' | 'npm' | 'pnpm' | 'yarn';
  commands: readonly {
    command: string;
    safety: 'read-only';
  }[];
  evidenceRequirement: string;
  fallback: 'unknown';
  sourceUrl: string;
}

export interface AgentKitCkRemovalPolicy {
  packageManager: 'bun' | 'npm' | 'pnpm' | 'yarn' | 'unknown';
  command: string | null;
  copyable: false;
  action: 'manual-after-exact-path-ownership' | 'sanitize-and-escalate';
  evidenceRequirement: string;
  sourceUrl: string | null;
}

export const AGENTKIT_LIFECYCLE_STAGES = AGENTKIT_LIFECYCLE_STAGE_IDS.map((id, index) => ({
  id,
  predecessor: index === 0 ? null : AGENTKIT_LIFECYCLE_STAGE_IDS[index - 1],
})) as readonly {
  id: AgentKitLifecycleStageId;
  predecessor: AgentKitLifecycleStageId | null;
}[];

export const AGENTKIT_LIFECYCLE_STAGE_FACTS = [
  {
    id: 'backup',
    predecessor: null,
    prerequisite: 'Record the selected project scope and a restorable pre-cutover backup.',
    expectedSignal: 'The backup location and restore check are recorded outside the project.',
    failureAction: 'Stop before changing CK or AgentKit state.',
    commandIds: [],
    copyPolicy: 'no-command',
  },
  {
    id: 'cleanup-ck-ownership',
    predecessor: 'backup',
    prerequisite: 'A restorable backup exists and CK ownership is single-scope.',
    expectedSignal: 'Preview output classifies every candidate as CK-owned, shared, custom, or unknown.',
    failureAction: 'Keep ambiguous content and switch to support-assisted handling.',
    commandIds: ['preview-ck-migration', 'preview-ck-project-cleanup'],
    copyPolicy: 'read-only-after-stage-gate',
  },
  {
    id: 'confirm-clean-scope',
    predecessor: 'cleanup-ck-ownership',
    prerequisite: 'Only individually proven CK-owned project content was cleaned.',
    expectedSignal: 'The final AK scope has no mixed, custom, corrupt, or unknown ownership.',
    failureAction: 'Do not install into that scope; sanitize evidence and contact support.',
    commandIds: ['detect-ck-macos', 'detect-ck-linux', 'detect-ck-windows'],
    copyPolicy: 'read-only-after-stage-gate',
  },
  {
    id: 'install-ak',
    predecessor: 'confirm-clean-scope',
    prerequisite: 'The selected scope is clean and the installer trust boundary was reviewed.',
    expectedSignal: 'The expected `ak` executable resolves without changing the CK control plane.',
    failureAction: 'Restore the pre-cutover state and investigate the installer or PATH.',
    commandIds: ['install-ak-unix', 'install-ak-windows'],
    copyPolicy: 'manual-only',
  },
  {
    id: 'verify-canary',
    predecessor: 'install-ak',
    prerequisite: 'AgentKit is installed in a reversible, noncritical target.',
    expectedSignal: 'Expected artifacts and one real target workflow pass; exit zero alone is insufficient.',
    failureAction: 'Stop, restore the last known-good state, and enter recovery.',
    commandIds: ['verify-ak-macos', 'verify-ak-linux', 'verify-ak-windows'],
    copyPolicy: 'read-only-after-stage-gate',
  },
  {
    id: 'observe',
    predecessor: 'verify-canary',
    prerequisite: 'The canary passed artifact and workflow checks.',
    expectedSignal: 'An external observation record covers 3–7 days with incidents acknowledged.',
    failureAction: 'Keep CK executable and control-plane data; extend or restart observation.',
    commandIds: [],
    copyPolicy: 'no-command',
  },
  {
    id: 'remove-ck-control-plane',
    predecessor: 'observe',
    prerequisite: 'Observation is declared complete and every CK executable path has exact ownership evidence.',
    expectedSignal: 'No stale CK executable wins PATH resolution; AgentKit canary still passes.',
    failureAction: 'Do not guess an uninstaller. Sanitize the detector result and escalate.',
    commandIds: ['detect-ck-macos', 'detect-ck-linux', 'detect-ck-windows'],
    copyPolicy: 'manual-only',
  },
] as const satisfies readonly AgentKitLifecycleStageFact[];

const AGENTKIT_DOCS = AGENTKIT_OFFICIAL_LINKS.docs;
const CLAUDEKIT_MIGRATE_DOCS = 'https://docs.claudekit.cc/docs/cli/migrate/';
const CLAUDEKIT_UNINSTALL_DOCS = 'https://docs.claudekit.cc/docs/cli/uninstall/';

export const AGENTKIT_LIFECYCLE_COMMANDS = [
  { id: 'preview-ck-migration', stage: 'cleanup-ck-ownership', platform: 'macos', shell: 'zsh', command: 'ck migrate --dry-run', safety: 'read-only', copyable: true, sourceUrl: CLAUDEKIT_MIGRATE_DOCS },
  { id: 'preview-ck-migration', stage: 'cleanup-ck-ownership', platform: 'linux', shell: 'bash', command: 'ck migrate --dry-run', safety: 'read-only', copyable: true, sourceUrl: CLAUDEKIT_MIGRATE_DOCS },
  { id: 'preview-ck-migration', stage: 'cleanup-ck-ownership', platform: 'windows', shell: 'powershell', command: 'ck migrate --dry-run', safety: 'read-only', copyable: true, sourceUrl: CLAUDEKIT_MIGRATE_DOCS },
  { id: 'preview-ck-project-cleanup', stage: 'cleanup-ck-ownership', platform: 'macos', shell: 'zsh', command: 'ck uninstall --local --dry-run', safety: 'read-only', copyable: true, sourceUrl: CLAUDEKIT_UNINSTALL_DOCS },
  { id: 'preview-ck-project-cleanup', stage: 'cleanup-ck-ownership', platform: 'linux', shell: 'bash', command: 'ck uninstall --local --dry-run', safety: 'read-only', copyable: true, sourceUrl: CLAUDEKIT_UNINSTALL_DOCS },
  { id: 'preview-ck-project-cleanup', stage: 'cleanup-ck-ownership', platform: 'windows', shell: 'powershell', command: 'ck uninstall --local --dry-run', safety: 'read-only', copyable: true, sourceUrl: CLAUDEKIT_UNINSTALL_DOCS },
  { id: 'detect-ck-macos', stage: 'confirm-clean-scope', platform: 'macos', shell: 'zsh', command: 'which -a ck', safety: 'read-only', copyable: true, sourceUrl: CLAUDEKIT_UNINSTALL_DOCS },
  { id: 'detect-ck-linux', stage: 'confirm-clean-scope', platform: 'linux', shell: 'bash', command: 'which -a ck', safety: 'read-only', copyable: true, sourceUrl: CLAUDEKIT_UNINSTALL_DOCS },
  { id: 'detect-ck-windows', stage: 'confirm-clean-scope', platform: 'windows', shell: 'powershell', command: 'Get-Command ck -All', safety: 'read-only', copyable: true, sourceUrl: CLAUDEKIT_UNINSTALL_DOCS },
  { id: 'install-ak-unix', stage: 'install-ak', platform: 'macos', shell: 'zsh', command: 'curl -fsSL https://agentkit.best/install.sh | sh', safety: 'network-exec', copyable: false, sourceUrl: AGENTKIT_DOCS },
  { id: 'install-ak-unix', stage: 'install-ak', platform: 'linux', shell: 'bash', command: 'curl -fsSL https://agentkit.best/install.sh | sh', safety: 'network-exec', copyable: false, sourceUrl: AGENTKIT_DOCS },
  { id: 'install-ak-windows', stage: 'install-ak', platform: 'windows', shell: 'powershell', command: 'irm https://agentkit.best/install.ps1 | iex', safety: 'network-exec', copyable: false, sourceUrl: AGENTKIT_DOCS },
  { id: 'verify-ak-macos', stage: 'verify-canary', platform: 'macos', shell: 'zsh', command: 'ak --version', safety: 'read-only', copyable: true, sourceUrl: AGENTKIT_DOCS },
  { id: 'verify-ak-linux', stage: 'verify-canary', platform: 'linux', shell: 'bash', command: 'ak --version', safety: 'read-only', copyable: true, sourceUrl: AGENTKIT_DOCS },
  { id: 'verify-ak-windows', stage: 'verify-canary', platform: 'windows', shell: 'powershell', command: 'ak --version', safety: 'read-only', copyable: true, sourceUrl: AGENTKIT_DOCS },
] as const satisfies readonly AgentKitLifecycleCommandFact[];

export const AGENTKIT_CK_EXECUTABLE_DETECTORS = [
  { platform: 'macos', shell: 'zsh', command: 'which -a ck', copyable: true, classification: 'path-evidence-only' },
  { platform: 'linux', shell: 'bash', command: 'which -a ck', copyable: true, classification: 'path-evidence-only' },
  { platform: 'windows', shell: 'powershell', command: 'Get-Command ck -All', copyable: true, classification: 'path-evidence-only' },
] as const satisfies readonly AgentKitCkExecutableDetector[];

export const AGENTKIT_CK_OWNERSHIP_PROBES = [
  {
    packageManager: 'bun',
    commands: [
      { command: 'bun pm bin -g', safety: 'read-only' },
      { command: 'bun pm ls -g claudekit-cli', safety: 'read-only' },
    ],
    evidenceRequirement: 'The resolved CK path must be inside Bun global bin and its executable metadata must identify claudekit-cli.',
    fallback: 'unknown',
    sourceUrl: 'https://bun.sh/docs/pm/cli/pm',
  },
  {
    packageManager: 'npm',
    commands: [
      { command: 'npm root --global', safety: 'read-only' },
      { command: 'npm list --global claudekit-cli --depth=0', safety: 'read-only' },
    ],
    evidenceRequirement: 'The resolved CK path must map to the reported npm global root and the direct claudekit-cli package entry.',
    fallback: 'unknown',
    sourceUrl: 'https://docs.npmjs.com/cli/npm-root/',
  },
  {
    packageManager: 'pnpm',
    commands: [
      { command: 'pnpm root --global', safety: 'read-only' },
      { command: 'pnpm list --global claudekit-cli --depth=0', safety: 'read-only' },
    ],
    evidenceRequirement: 'The resolved CK path must map to the reported pnpm global root and the direct claudekit-cli package entry.',
    fallback: 'unknown',
    sourceUrl: 'https://pnpm.io/cli/list',
  },
  {
    packageManager: 'yarn',
    commands: [
      { command: 'yarn global bin', safety: 'read-only' },
      { command: 'yarn global list --pattern claudekit-cli --depth=0', safety: 'read-only' },
    ],
    evidenceRequirement: 'The resolved CK path must map to Yarn Classic global bin and the filtered global list must identify claudekit-cli.',
    fallback: 'unknown',
    sourceUrl: 'https://classic.yarnpkg.com/lang/en/docs/cli/global/',
  },
] as const satisfies readonly AgentKitCkOwnershipProbe[];

export const AGENTKIT_CK_REMOVAL_POLICIES = [
  { packageManager: 'bun', command: 'bun remove -g claudekit-cli', copyable: false, action: 'manual-after-exact-path-ownership', evidenceRequirement: 'The resolved CK executable belongs to Bun global package claudekit-cli.', sourceUrl: 'https://bun.sh/docs/pm/cli/remove' },
  { packageManager: 'npm', command: 'npm uninstall -g claudekit-cli', copyable: false, action: 'manual-after-exact-path-ownership', evidenceRequirement: 'The resolved CK executable belongs to npm global package claudekit-cli.', sourceUrl: 'https://docs.npmjs.com/uninstalling-packages-and-dependencies/' },
  { packageManager: 'pnpm', command: 'pnpm remove -g claudekit-cli', copyable: false, action: 'manual-after-exact-path-ownership', evidenceRequirement: 'The resolved CK executable belongs to pnpm global package claudekit-cli.', sourceUrl: 'https://pnpm.io/cli/remove' },
  { packageManager: 'yarn', command: 'yarn global remove claudekit-cli', copyable: false, action: 'manual-after-exact-path-ownership', evidenceRequirement: 'The resolved CK executable belongs specifically to a Yarn Classic global install.', sourceUrl: 'https://classic.yarnpkg.com/lang/en/docs/cli/global/' },
  { packageManager: 'unknown', command: null, copyable: false, action: 'sanitize-and-escalate', evidenceRequirement: 'Unknown, conflicting, or unowned paths never select an uninstall command.', sourceUrl: null },
] as const satisfies readonly AgentKitCkRemovalPolicy[];

export const AGENTKIT_SUPPORT_CONTACTS = [
  { id: 'claudekit-discord', url: 'https://discord.com/invite/x7SwTSf3wc', sharePolicy: 'sanitized-allowlist-only' },
  { id: 'agentkit-support', url: 'https://github.com/bestagentkits/agentkit-support', sharePolicy: 'sanitized-allowlist-only' },
] as const;

export const AGENTKIT_LEGACY_PROVIDER_CLEANUP_POLICIES = [
  {
    target: 'claude-code',
    legacyDestinationEvidence: ['.claude/', '~/.claude/'],
    automaticBulkRemovalDocumented: false,
  },
  {
    target: 'codex',
    legacyDestinationEvidence: [
      '.agents/skills/source-command-*/SKILL.md',
      '~/.agents/skills/source-command-*/SKILL.md',
    ],
    automaticBulkRemovalDocumented: false,
  },
] as const;

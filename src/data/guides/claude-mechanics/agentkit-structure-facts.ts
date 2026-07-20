/**
 * Structure facts for Claude Mechanics (AgentKit era).
 * Sourced from docs/fixtures/agentkit-mechanics (probe 2026-07-13, ak 2.2.0-beta.17).
 * UI must import this module — do not hardcode kit trees in components.
 */

import { AGENTKIT_OFFICIAL_LINKS } from '../agentkit/agentkit-official-links.mjs';

export const AGENTKIT_STRUCTURE_PROBE = {
  akVersion: '2.2.0-beta.17',
  channel: 'beta' as const,
  verifiedAt: '2026-07-13',
  fixturePath: 'docs/fixtures/agentkit-mechanics',
  sourceUrl: AGENTKIT_OFFICIAL_LINKS.docs,
} as const;

/** Project onboarding only — does not install kit skills. */
export const AGENTKIT_PROJECT_ONBOARDING = {
  newCommand: 'ak new <project-name>',
  initCommand: 'ak init',
  creates: [
    '.agentkit/ownership.json',
    '.agentkit/project.yaml',
    'README.md',
  ] as const,
  note: 'ak new writes ownership + stub README. ak init on an empty directory creates an ownership manifest with zero tracked files until kit content exists.',
} as const;

export type AgentKitTargetStructureId = 'claude-code' | 'codex';

export interface AgentKitKitStructureFact {
  target: AgentKitTargetStructureId;
  /** Documented without embedding a forbidden hard-coded install string in active consumers. */
  buildOnlyFlags: readonly string[];
  pluginPackageName: string;
  pluginVersionProbed: string;
  topLevelEntries: readonly string[];
  counts: {
    agents: number;
    hooksCjs: number;
    rules: number;
    skills: number;
    filesWritten: number;
  };
  installPathHint: string;
  gaps: readonly string[];
}

export const AGENTKIT_KIT_STRUCTURE_BY_TARGET = {
  'claude-code': {
    target: 'claude-code',
    buildOnlyFlags: ['--build-only', '--out', '--remote', '--yes'],
    pluginPackageName: 'ak-engineer',
    pluginVersionProbed: '0.2.0',
    topLevelEntries: [
      '.claude-plugin/',
      '.agentkit/',
      'agents/',
      'hooks/',
      'rules/',
      'skills/',
    ],
    counts: {
      agents: 16,
      hooksCjs: 8,
      rules: 7,
      skills: 91,
      filesWritten: 1404,
    },
    installPathHint: '~/.claude/plugins/ak-engineer',
    gaps: [
      'Project-scoped install may require --switch-to-plugin when a native user-scope engineer install already exists.',
      'Counts are from a remote --build-only probe; live install path can differ by scope.',
    ],
  },
  codex: {
    target: 'codex',
    buildOnlyFlags: ['--build-only', '--out', '--remote', '--yes'],
    pluginPackageName: 'engineer',
    pluginVersionProbed: '0.2.0',
    topLevelEntries: [
      '.codex-plugin/',
      '.codex/',
      '.agentkit/',
      '.agents/',
      'skills/',
    ],
    counts: {
      agents: 0,
      hooksCjs: 0,
      rules: 0,
      skills: 91,
      filesWritten: 2747,
    },
    installPathHint: 'Codex adapter dirs (.codex/, .agents/skills/) — see fixture E',
    gaps: [
      'Agent/hooks counts not enumerated for Codex build in this probe; skillsSelected=91.',
    ],
  },
} as const satisfies Record<AgentKitTargetStructureId, AgentKitKitStructureFact>;

/** Safe teaching order for mechanics UI. */
export const AGENTKIT_MECHANICS_TEACHING_STEPS = [
  {
    id: 'project',
    titleEn: 'Onboard the project',
    titleVi: 'Onboard project',
    bodyEn: 'Use ak new or ak init so AgentKit owns the project via .agentkit/ownership.json.',
    bodyVi: 'Dùng ak new hoặc ak init để AgentKit sở hữu project qua .agentkit/ownership.json.',
  },
  {
    id: 'kit',
    titleEn: 'Install a kit for a target',
    titleVi: 'Cài kit cho một target',
    bodyEn: 'Use ak kit init with an explicit --target. Kit output is adapter plugin content (agents, hooks, rules, skills), not a ClaudeKit-era project dump.',
    bodyVi: 'Dùng ak kit init với --target rõ ràng. Output kit là nội dung plugin theo adapter (agents, hooks, rules, skills), không phải dump project kiểu ClaudeKit cũ.',
  },
  {
    id: 'refresh',
    titleEn: 'Refresh carefully',
    titleVi: 'Refresh cẩn thận',
    bodyEn: 'Prefer ak kit refresh with preview/confirm. Back up before force or mode switches.',
    bodyVi: 'Ưu tiên ak kit refresh có preview/confirm. Backup trước khi force hoặc đổi install mode.',
  },
] as const;

export function getAgentKitKitStructure(target: AgentKitTargetStructureId): AgentKitKitStructureFact {
  return AGENTKIT_KIT_STRUCTURE_BY_TARGET[target];
}

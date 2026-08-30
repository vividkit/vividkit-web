// TypeScript interfaces for the interactive workflow visualizer
// Used by workflow-visualizer-scenarios.ts and how-it-works components

export type StepType = 'user-input' | 'hook' | 'skill' | 'agent' | 'output';

export interface WorkflowStep {
  id: string;
  type: StepType;
  name: string;
  descEn: string;
  descVi: string;
  /** Detailed explanation for drill-down Explain tab */
  explainEn: string;
  explainVi: string;
  /** Optional code snippet for drill-down Code tab */
  codeSnippet?: string;
  /** SVG path data for the step icon */
  icon: string;
  /** Tailwind color name: 'purple' | 'blue' | 'green' | 'amber' */
  color: string;
  /** Whether this is a sub-agent spawned by a parent agent */
  isSubAgent?: boolean;
}

/** Kit identifier for grouping workflows */
export type KitId = 'engineer' | 'marketer';

export interface KitConfig {
  id: KitId;
  labelEn: string;
  labelVi: string;
}

export const kitConfigs: KitConfig[] = [
  { id: 'engineer', labelEn: 'Engineer Kit', labelVi: 'Bộ Engineer' },
  { id: 'marketer', labelEn: 'Marketing Kit', labelVi: 'Bộ Marketing' },
];

export interface WorkflowScenario {
  id: string;
  command: string;
  /** Which kit this workflow belongs to */
  kit: KitId;
  titleEn: string;
  titleVi: string;
  descEn: string;
  descVi: string;
  /** Icon SVG path for scenario card */
  icon: string;
  /** Tailwind color for accent/border */
  accentColor: string;
  steps: WorkflowStep[];
}

/** Color config for step type badges and borders */
export const stepTypeColors: Record<StepType, { bg: string; text: string; label: string; labelVi: string }> = {
  'user-input': {
    bg: 'bg-purple-500/10 dark:bg-purple-500/20',
    text: 'text-purple-600 dark:text-purple-400',
    label: 'Input',
    labelVi: 'Đầu vào',
  },
  hook: {
    bg: 'bg-blue-500/10 dark:bg-blue-500/20',
    text: 'text-blue-600 dark:text-blue-400',
    label: 'Hook',
    labelVi: 'Hook',
  },
  skill: {
    bg: 'bg-amber-500/10 dark:bg-amber-500/20',
    text: 'text-amber-600 dark:text-amber-400',
    label: 'Skill',
    labelVi: 'Skill',
  },
  agent: {
    bg: 'bg-green-500/10 dark:bg-green-500/20',
    text: 'text-green-600 dark:text-green-400',
    label: 'Agent',
    labelVi: 'Agent',
  },
  output: {
    bg: 'bg-amber-500/10 dark:bg-amber-500/20',
    text: 'text-amber-600 dark:text-amber-400',
    label: 'Output',
    labelVi: 'Kết quả',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Workflow Combos — Group multiple scenarios into common workflows
// ─────────────────────────────────────────────────────────────────────────────

/** Workflow combo — a sequence of scenarios that work together */
export interface WorkflowCombo {
  id: string;
  kit: KitId;
  titleEn: string;
  titleVi: string;
  descEn: string;
  descVi: string;
  /** Ordered scenario IDs in this combo */
  scenarios: string[];
  /** Relationship type between scenarios */
  category: 'sequential' | 'parallel' | 'optional';
  /** SVG path data for combo icon */
  icon: string;
  /** Tailwind color for accent/border */
  accentColor: string;
  /** Optional usage tip */
  tipEn?: string;
  tipVi?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Skill Infographics — One-page visual summaries for individual skills
// ─────────────────────────────────────────────────────────────────────────────

/** Process flow step for infographic */
export interface ProcessFlowStep {
  number: number;
  titleEn: string;
  titleVi: string;
  descEn?: string;
  descVi?: string;
}

/** Workflow mode row for flags table */
export interface WorkflowModeRow {
  flag: string;
  modeEn: string;
  modeVi: string;
  research: string;
  redTeam: string;
  validation: string;
  cookFlag?: string;
}

/** Concrete command prompt example for a mode, flag, or subcommand */
export interface PromptExample {
  labelEn: string;
  labelVi: string;
  command: string;
  whenEn: string;
  whenVi: string;
  expectedEn: string;
  expectedVi: string;
  recommended?: boolean;
}

/** Badge type for skill stack */
export type SkillStackType = 'agent' | 'skill' | 'tool';

/** Skill/Agent stack badge */
export interface SkillStackBadge {
  name: string;
  type: SkillStackType;
}

/** Special operation card */
export interface SpecialOpCard {
  id: string;
  titleEn: string;
  titleVi: string;
  descEn: string;
  descVi: string;
  color: string;
}

/** Anti-rationalization guardrail (thought vs reality) */
export interface GuardrailItem {
  thoughtEn: string;
  thoughtVi: string;
  realityEn: string;
  realityVi: string;
  accent: string;
}

/** Output / publish flag card (e.g. --html, --github, --wiki) — conditional, composes with any mode */
export interface OutputFlag {
  flag: string;
  titleEn: string;
  titleVi: string;
  descEn: string;
  descVi: string;
  /** Optional sample command demonstrating the flag */
  exampleCommand?: string;
}

/** One positional argument or generic option on the skill or a subcommand */
export interface InvocationParam {
  token: string;
  titleEn: string;
  titleVi: string;
  descEn: string;
  descVi: string;
  required?: boolean;
  exampleCommand?: string;
}

/** One skill branch with its own syntax, arguments, options, and outcome */
export interface SkillSubcommand {
  name: string;
  syntax: string;
  titleEn: string;
  titleVi: string;
  descEn: string;
  descVi: string;
  arguments?: InvocationParam[];
  options?: InvocationParam[];
  outcomeEn: string;
  outcomeVi: string;
  exampleCommand?: string;
}

/** Reader-facing invocation reference: syntax, arguments, options, subcommands */
export interface SkillInvocation {
  syntax: string;
  arguments?: InvocationParam[];
  options?: InvocationParam[];
  subcommands?: SkillSubcommand[];
}

/** Enriched mode card with inline prompt example */
export interface ModeCardData {
  flag: string;
  titleEn: string;
  titleVi: string;
  descEn: string;
  descVi: string;
  promptEn: string;
  promptVi: string;
  whenEn: string;
  whenVi: string;
  expectedEn: string;
  expectedVi: string;
  accent: string;
}

/** Custom process group label (overrides auto-generated labels) */
export interface ProcessGroupLabel {
  labelEn: string;
  labelVi: string;
  kickerEn: string;
  kickerVi: string;
  stepSlice: [number, number];
}

/** Hard gate warning type */
export type HardGateType = 'warning' | 'critical' | 'info';

/** One-page infographic data for a skill */
export interface SkillInfographic {
  /** Matches scenario ID */
  id: string;
  /** Command name (e.g., /ck:brainstorm) */
  command: string;
  kit: KitId;

  header: {
    titleEn: string;
    titleVi: string;
    taglineEn: string;
    taglineVi: string;
  };

  hardGate?: {
    type: HardGateType;
    titleEn: string;
    titleVi: string;
    contentEn: string;
    contentVi: string;
  };

  processFlow: ProcessFlowStep[];

  corePrinciplesEn?: string[];
  corePrinciplesVi?: string[];
  expertiseAreasEn?: string[];
  expertiseAreasVi?: string[];

  workflowModes?: WorkflowModeRow[];
  promptExamples?: PromptExample[];
  composableFlagsEn?: string;
  composableFlagsVi?: string;
  /** First-class syntax / arguments / options / subcommands for readers */
  invocation?: SkillInvocation;
  /** Conditional output / publish flags (--html, --github, --wiki) */
  outputFlags?: OutputFlag[];

  skillStack?: SkillStackBadge[];

  specialOperations?: SpecialOpCard[];

  guardrails?: GuardrailItem[];
  modeCards?: ModeCardData[];
  processGroupLabels?: ProcessGroupLabel[];

  reportOutput?: {
    titleEn: string;
    titleVi: string;
    patternEn: string;
    patternVi: string;
    locationEn?: string;
    locationVi?: string;
    descEn: string;
    descVi: string;
  };

  deepDiveLink?: {
    hrefEn: string;
    hrefVi: string;
    labelEn: string;
    labelVi: string;
  };
}

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
  { id: 'engineer', labelEn: 'Engineer Kit', labelVi: 'Engineer Kit' },
  { id: 'marketer', labelEn: 'Marketing Kit', labelVi: 'Marketing Kit' },
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

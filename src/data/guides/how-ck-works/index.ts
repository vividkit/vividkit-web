// Re-export all how-ck-works data for convenient imports
export { workflowScenarios } from './workflow-visualizer-scenarios';
export { stepTypeColors, kitConfigs } from './workflow-visualizer-types';
export type { WorkflowScenario, WorkflowStep, StepType, KitId } from './workflow-visualizer-types';

// Workflow combos — group scenarios into common workflows
export { workflowCombos } from './workflow-combos';
export type { WorkflowCombo } from './workflow-visualizer-types';

// Skill infographics — one-page visual summaries
export { skillInfographics, getInfographicById, hasInfographic, getPhaseCount } from './skill-infographics';
export type {
  SkillInfographic,
  PromptExample,
  ProcessFlowStep,
  WorkflowModeRow,
  OutputFlag,
  InvocationParam,
  SkillSubcommand,
  SkillInvocation,
  SkillStackBadge,
  SkillStackType,
  SpecialOpCard,
  HardGateType,
  GuardrailItem,
  ModeCardData,
  ProcessGroupLabel,
  SituationCard,
} from './workflow-visualizer-types';

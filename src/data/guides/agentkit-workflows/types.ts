// AgentKit Workflows data types.
// Authority: plans/260805-1058…/reports/catalog-freeze.md + catalog-matrix.md
// Bilingual pattern matches agentkit-skills-cheatsheet (description + descriptionVi).
// category / level stay English for lookup tables.

/** English category keys — do not translate (UI lookup tables). */
export type AkWorkflowCategory =
  | "Getting Started"
  | "Plan & Research"
  | "Debug & Fix"
  | "Review & Ship"
  | "Security"
  | "Design & Frontend"
  | "Backend & Data"
  | "Docs & Explain"
  | "Parallel"
  | "AI / MCP"
  | "Marketing";

export type AkWorkflowLevel = "Beginner" | "Intermediate" | "Advanced";

export type AkWorkflowRisk = "low" | "elevated" | "high";

/**
 * One step in a skill chain.
 * Put every invocable skill in `command` (parseable by vk:audit-ak-workflows later).
 * Human gates: omit command, set human: true.
 */
export interface AkWorkflowStep {
  number: number;
  /** Structured `/ak:…` command for tracker parseability — not prose-only */
  command?: string;
  typeLabel: string;
  typeLabelVi?: string;
  description: string;
  descriptionVi?: string;
  /** True when command is a real /ak: skill invocation */
  isSkill?: boolean;
  optional?: boolean;
  /** Human gate (review, approve) — no command */
  human?: boolean;
  /**
   * Optional modes/flags annotated under the command chip.
   * Prefer this over baking every flag into `command`.
   */
  optionalModes?: Array<{
    flag: string;
    note: string;
    noteVi?: string;
  }>;
  /** @deprecated Prefer optionalModes — kept for simple single-note cases */
  optionalFlags?: string[];
  optionalFlagsNote?: string;
  optionalFlagsNoteVi?: string;
  /** Optional card accent classes (UI phase) */
  color?: string;
}

export interface AkWorkflowAdviceVariant {
  /** Example compose commands (verbatim English) */
  commands: string[];
  note?: string;
  noteVi?: string;
}

export interface AkWorkflow {
  id: string;
  /** true = primary grid; false = More recipes accordion */
  featured: boolean;
  category: AkWorkflowCategory;
  level: AkWorkflowLevel;
  risk?: AkWorkflowRisk;
  duration: string;
  durationVi?: string;
  title: string;
  titleVi?: string;
  bestFor: string;
  bestForVi?: string;
  tip?: string;
  tipVi?: string;
  /** Structured tip lines — prefer for long tips (UI renders a separate tip box) */
  tipBullets?: string[];
  tipBulletsVi?: string[];
  features?: string[];
  powerUserWarning?: boolean;
  adviceVariant?: AkWorkflowAdviceVariant;
  steps: AkWorkflowStep[];
  /** Convenience; defaults to steps.length when omitted */
  stepCount?: number;
  /** Optional CK-style card chrome (filled in UI phase if needed) */
  gradientHeader?: string;
  hoverBorderColor?: string;
  buttonColor?: string;
  iconColor?: string;
  borderColor?: string;
}

export interface AkWorkflowCategoryMeta {
  key: AkWorkflowCategory;
  order: number;
  labelEn: string;
  labelVi: string;
}

export interface AkWorkflowPageChrome {
  skeleton: {
    titleEn: string;
    titleVi: string;
    bodyEn: string;
    bodyVi: string;
    stagesEn: string;
    stagesVi: string;
  };
  adviseVsAdvice: {
    titleEn: string;
    titleVi: string;
    adviseLabelEn: string;
    adviseLabelVi: string;
    adviseBodyEn: string;
    adviseBodyVi: string;
    adviceLabelEn: string;
    adviceLabelVi: string;
    adviceBodyEn: string;
    adviceBodyVi: string;
    badgeNoteEn: string;
    badgeNoteVi: string;
    whenSkipEn: string;
    whenSkipVi: string;
  };
  adviseAgent: {
    titleEn: string;
    titleVi: string;
    bodyEn: string;
    bodyVi: string;
    inlineCmd: string;
    agentCmd: string;
    inlinePointsEn: string[];
    inlinePointsVi: string[];
    agentPointsEn: string[];
    agentPointsVi: string[];
    whenInlineEn: string;
    whenInlineVi: string;
    whenAgentEn: string;
    whenAgentVi: string;
    footerEn: string;
    footerVi: string;
  };
  router: {
    titleEn: string;
    titleVi: string;
    bodyEn: string;
    bodyVi: string;
  };
  marketingEmpty: {
    titleEn: string;
    titleVi: string;
    bodyEn: string;
    bodyVi: string;
  };
  moreSection: {
    titleEn: string;
    titleVi: string;
    bodyEn: string;
    bodyVi: string;
  };
  antiPatterns: Array<{
    id: string;
    dontEn: string;
    preferEn: string;
    dontVi: string;
    preferVi: string;
  }>;
}

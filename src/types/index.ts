export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FeatureCard {
  icon: string; // Lucide icon name
  iconColor: 'blue' | 'purple' | 'green' | 'red' | 'amber' | 'orange' | 'emerald' | 'cyan' | 'pink';
  title: string;
  description: string;
  href?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: {
    text: string;
    href: string;
    variant: 'primary' | 'secondary';
  };
  badge?: string;
  badgeColor?: string;
  borderColor?: string;
}

export interface Command {
  command: string;
  description: string;
  category: 'planning' | 'implementation' | 'quality' | 'debugging' | 'navigation' | 'utilities';
  color: string;
}

export interface Workflow {
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  levelColor: string;
  duration: string;
  stepCount: number;
  steps: { command?: string; description: string }[];
  borderColor: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface SEOMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
}

// Landing Page Guide Data Types
export interface CLIStep {
  number: number;
  title: string;
  command: string;
  note?: string;
  color: 'blue' | 'purple' | 'green' | 'emerald' | 'indigo';
}

export interface WorkflowStep {
  command: string;
  description: string;
}

export interface LandingWorkflow {
  id: string;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  stepCount: number;
  description: string;
  steps: WorkflowStep[];
  gradient: string;
  iconColor: string;
  buttonColor: string;
}

export interface CommandCategory {
  name: string;
  description: string;
  gradient: string;
  iconColor: string;
  borderColor: string;
  commands: SlashCommand[];
}

export interface SlashCommand {
  command: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'advanced';
  complexity?: number; // 1-5 bolt icons
}

export interface UIUXFeature {
  title: string;
  description: string;
  items: string[];
  color: string;
}

export interface UIUXExample {
  level: 'beginner' | 'intermediate' | 'advanced';
  prompt: string;
  searchTerms: string;
}

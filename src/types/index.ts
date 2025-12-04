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

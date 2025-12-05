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
  borderColor: string;
}

export const landingWorkflows: LandingWorkflow[] = [
  {
    id: 'feature-development',
    title: 'Feature Development',
    level: 'intermediate',
    duration: '15-30 min',
    stepCount: 4,
    description: 'Build complete features from planning to implementation with AI assistance.',
    steps: [
      { command: '/brainstorm', description: 'Explore feature ideas' },
      { command: '/plan', description: 'Create implementation plan' },
      { command: '/code', description: 'Implement the plan' },
      { command: '/test', description: 'Verify implementation' }
    ],
    gradient: 'workflow-card-header--purple',
    iconColor: 'text-purple-400',
    borderColor: 'border-purple-500/30'
  },
  {
    id: 'bug-fixing',
    title: 'Bug Fixing',
    level: 'beginner',
    duration: '5-15 min',
    stepCount: 3,
    description: 'Diagnose and fix issues quickly with intelligent debugging.',
    steps: [
      { command: '/debug', description: 'Find root cause' },
      { command: '/fix', description: 'Apply smart fix' },
      { command: '/test', description: 'Verify fix works' }
    ],
    gradient: 'workflow-card-header--red',
    iconColor: 'text-red-400',
    borderColor: 'border-red-500/30'
  },
  {
    id: 'project-bootstrap',
    title: 'Project Setup',
    level: 'advanced',
    duration: '30-60 min',
    stepCount: 4,
    description: 'Create complete projects from scratch with best practices built-in.',
    steps: [
      { command: 'ck init', description: 'Initialize ClaudeKit' },
      { command: '/bootstrap', description: 'Create project structure' },
      { command: '/docs:init', description: 'Generate documentation' },
      { command: '/cook', description: 'Build first feature' }
    ],
    gradient: 'workflow-card-header--blue',
    iconColor: 'text-blue-400',
    borderColor: 'border-blue-500/30'
  },
  {
    id: 'design-implementation',
    title: 'Design Implementation',
    level: 'intermediate',
    duration: '10-20 min',
    stepCount: 3,
    description: 'Transform ideas into beautiful, production-ready UI components.',
    steps: [
      { command: '/design:good', description: 'Create design system' },
      { command: '/cook:auto', description: 'Implement design' },
      { command: '/fix:ui', description: 'Polish interactions' }
    ],
    gradient: 'workflow-card-header--pink',
    iconColor: 'text-pink-400',
    borderColor: 'border-pink-500/30'
  }
];

export const workflowsHeroContent = {
  title: 'Recommended Workflows',
  description: 'Follow proven command sequences to maximize productivity. Each workflow combines AI-powered commands for specific development tasks.',
  highlight: 'Pro tip: Start with Bug Fixing to learn the basics, then progress to Feature Development!'
};
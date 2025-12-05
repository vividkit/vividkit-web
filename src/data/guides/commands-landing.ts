export interface SlashCommand {
  command: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'advanced';
  complexity?: number; // 1-5 for bolt icons
}

export interface SkillLevel {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  gradient: string;
  borderColor: string;
  commands: SlashCommand[];
}

export interface CommandCategory {
  name: string;
  description: string;
  gradient: string;
  iconColor: string;
  borderColor: string;
  commands: SlashCommand[];
}

export interface JourneyStep {
  number: number;
  title: string;
  description: string;
  color: string;
  command: string;
  result: string;
}

export interface BeginnerTip {
  icon: string;
  title: string;
  description: string;
  color: string;
}

// Hero Content
export const commandsHeroContent = {
  title: 'Slash Commands Guide',
  subtitle: 'Your AI assistant speaks slash - here\'s your dictionary',
  description: 'Think of slash commands as magic shortcuts - just type /command and let AI do the heavy lifting! No coding required, just tell ClaudeKit what you want.',
  example: {
    command: '/cook "add a login button"',
    result: 'AI builds the entire feature for you!'
  }
};

// Skill Levels with Top Commands
export const skillLevels: SkillLevel[] = [
  {
    id: 'beginner',
    title: 'Beginner',
    subtitle: 'Start here!',
    description: 'Perfect for your first steps with AI coding',
    color: 'green',
    gradient: 'from-green-500/10 to-emerald-500/10',
    borderColor: 'border-green-500/30',
    commands: [
      { command: '/ask', description: 'Ask technical questions', difficulty: 'easy' },
      { command: '/brainstorm', description: 'Explore ideas together', difficulty: 'easy' },
      { command: '/fix', description: 'Fix bugs automatically', difficulty: 'easy' }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate',
    subtitle: 'Level up!',
    description: 'Build complete features with ease',
    color: 'amber',
    gradient: 'from-amber-500/10 to-orange-500/10',
    borderColor: 'border-amber-500/30',
    commands: [
      { command: '/plan', description: 'Create step-by-step plans', difficulty: 'medium', complexity: 3 },
      { command: '/code', description: 'Implement your plans', difficulty: 'medium', complexity: 2 },
      { command: '/cook', description: 'All-in-one feature builder', difficulty: 'medium', complexity: 3 }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced',
    subtitle: 'Pro mode!',
    description: 'Build entire projects from scratch',
    color: 'red',
    gradient: 'from-red-500/10 to-pink-500/10',
    borderColor: 'border-red-500/30',
    commands: [
      { command: '/bootstrap', description: 'Create complete projects', difficulty: 'advanced', complexity: 5 },
      { command: '/scout', description: 'Explore your codebase', difficulty: 'advanced', complexity: 2 },
      { command: '/watzup', description: 'Review recent changes', difficulty: 'advanced' }
    ]
  }
];

// Command Categories (condensed)
export const commandCategories: CommandCategory[] = [
  {
    name: 'Planning & Development',
    description: 'Build features from scratch',
    gradient: 'workflow-card-header--blue',
    iconColor: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    commands: [
      { command: '/plan', description: 'Create detailed plans', difficulty: 'medium', complexity: 3 },
      { command: '/code', description: 'Implement plans with tests', difficulty: 'easy' },
      { command: '/cook', description: 'All-in-one: plan + code + test', difficulty: 'medium', complexity: 3 }
    ]
  },
  {
    name: 'Fixing & Debugging',
    description: 'Solve problems and fix bugs',
    gradient: 'workflow-card-header--red',
    iconColor: 'text-red-400',
    borderColor: 'border-red-500/30',
    commands: [
      { command: '/fix', description: 'Smart auto-fix for any issue', difficulty: 'medium', complexity: 2 },
      { command: '/debug', description: 'Find root cause of issues', difficulty: 'medium', complexity: 2 },
      { command: '/fix:test', description: 'Fix failing tests', difficulty: 'easy' }
    ]
  },
  {
    name: 'Testing & Quality',
    description: 'Ensure your code works perfectly',
    gradient: 'workflow-card-header--green',
    iconColor: 'text-green-400',
    borderColor: 'border-green-500/30',
    commands: [
      { command: '/test', description: 'Run tests and analyze results', difficulty: 'easy' },
      { command: '/review:codebase', description: 'Comprehensive code review', difficulty: 'medium', complexity: 2 },
      { command: '/watzup', description: 'Review recent changes', difficulty: 'easy' }
    ]
  },
  {
    name: 'Design & Content',
    description: 'Create beautiful designs',
    gradient: 'workflow-card-header--pink',
    iconColor: 'text-pink-400',
    borderColor: 'border-pink-500/30',
    commands: [
      { command: '/design:fast', description: 'Quick design generation', difficulty: 'easy' },
      { command: '/design:good', description: 'High-quality designs', difficulty: 'medium', complexity: 2 },
      { command: '/content:enhance', description: 'Improve existing content', difficulty: 'easy' }
    ]
  }
];

// Journey Steps
export const journeySteps: JourneyStep[] = [
  {
    number: 1,
    title: 'Start with an Idea',
    description: 'Have an idea? Just talk to ClaudeKit like you would to a friend!',
    color: 'purple',
    command: '/brainstorm',
    result: 'AI helps you explore different approaches'
  },
  {
    number: 2,
    title: 'Create a Plan',
    description: 'AI creates a detailed roadmap for building your feature',
    color: 'blue',
    command: '/plan',
    result: 'Step-by-step instructions generated'
  },
  {
    number: 3,
    title: 'AI Builds It!',
    description: 'Sit back and watch AI write the code, test it, and make it perfect!',
    color: 'green',
    command: '/code @plan.md',
    result: 'Complete implementation with tests'
  }
];

// Beginner Tips
export const beginnerTips: BeginnerTip[] = [
  {
    icon: 'message',
    title: 'Talk Like a Human',
    description: 'No need for technical jargon! Explain what you want in plain English.',
    color: 'cyan'
  },
  {
    icon: 'file',
    title: 'Use @ to Reference Files',
    description: 'Type @filename to tell AI which files to work with',
    color: 'purple'
  },
  {
    icon: 'check',
    title: 'Start Small',
    description: 'Begin with /ask or /brainstorm to get comfortable',
    color: 'green'
  },
  {
    icon: 'refresh',
    title: "Don't Be Afraid to Experiment",
    description: 'AI helps you learn as you go. Try different commands!',
    color: 'amber'
  }
];
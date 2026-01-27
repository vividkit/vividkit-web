// v2.5.0 workflows - skill-based approach
export const v25Workflows = [
  {
    title: 'Build a New Feature',
    level: 'Beginner',
    duration: '~15-30 min',
    stepCount: 4,
    bestFor: 'Adding new functionality to your app',
    gradientHeader: 'from-purple-500/10 to-blue-500/10',
    hoverBorderColor: 'hover:border-purple-500/50',
    buttonColor: 'bg-purple-500 hover:bg-purple-600',
    icon: '<path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/>',
    iconColor: 'text-purple-600 dark:text-purple-400',
    steps: [
      {
        command: '/brainstorm',
        typeLabel: 'Explore ideas (skill)',
        description: 'Use /brainstorm or say "brainstorm ideas for [feature]" to explore possibilities',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/plan',
        typeLabel: 'Create implementation plan',
        description: 'AI creates a detailed step-by-step plan for building your feature',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 2
      },
      {
        typeLabel: 'Review → /clear → Implement',
        description: 'Review plan, run /clear to free context (mandatory in CK engineer@v2.5.0+), then implement',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
      },
      {
        command: '/cook @plan.md',
        typeLabel: 'Implement the plan (skill)',
        description: 'AI writes the code following the plan, runs tests, and reviews the work',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4,
        isSkill: true
      }
    ],
    tip: '⚠️ CK engineer@v2.5.0+: /clear is mandatory after /plan before /cook',
    borderColor: 'border-purple-500/20'
  },
  {
    title: 'Fix a Bug',
    level: 'Beginner',
    duration: '~5-15 min',
    stepCount: 3,
    bestFor: 'Fixing errors and unexpected behavior',
    gradientHeader: 'from-red-500/10 to-orange-500/10',
    hoverBorderColor: 'hover:border-red-500/50',
    buttonColor: 'bg-red-500 hover:bg-red-600',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    iconColor: 'text-red-600 dark:text-red-400',
    steps: [
      {
        command: '/debug',
        typeLabel: 'Investigate the issue',
        description: 'AI analyzes your code to find the root cause of the problem',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 1
      },
      {
        command: '/fix',
        typeLabel: 'Apply the fix (skill)',
        description: 'AI intelligently routes to specialized fix and applies the solution',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/test',
        typeLabel: 'Verify the fix',
        description: 'Run tests to make sure the bug is fixed and nothing else broke',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3
      }
    ],
    tip: '💡 /fix skill: intelligent routing to types, ui, ci, test, logs fixes',
    borderColor: 'border-red-500/20'
  },
  {
    title: 'Quick Implementation',
    level: 'Intermediate',
    duration: '~10-20 min',
    stepCount: 1,
    bestFor: 'Small features when you know what you want',
    gradientHeader: 'from-blue-500/10 to-cyan-500/10',
    hoverBorderColor: 'hover:border-blue-500/50',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
    icon: '<path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/>',
    iconColor: 'text-blue-600 dark:text-blue-400',
    steps: [
      {
        command: '/cook "your task"',
        typeLabel: 'All-in-one skill',
        description: 'AI researches, plans, implements, tests, and reviews the feature automatically',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 1,
        isSkill: true
      }
    ],
    tip: '💡 See mapping table above for migrating from v2.4 variants',
    cookMappings: [
      { old: '/cook:auto', new: '/cook --auto', desc: 'Auto-approve all steps' },
      { old: '/cook:auto:fast', new: '/cook --auto --fast', desc: 'Fast + auto-approve' },
      { old: '/cook:auto:parallel', new: '/cook --auto --parallel', desc: 'Parallel phases + auto' },
      { old: '/code:no-test', new: '/cook --no-test', desc: 'Skip test runs' },
      { old: '/code:parallel', new: '/cook --parallel', desc: 'Run phases in parallel' }
    ],
    features: [
      'Research best approaches and technologies',
      'Create and execute implementation plan',
      'Write and test the code',
      'Review for quality and best practices'
    ],
    borderColor: 'border-blue-500/20'
  },
  {
    title: 'Start New Project',
    level: 'Advanced',
    duration: '~1-2 hours',
    stepCount: 1,
    bestFor: 'Creating a complete app from scratch',
    gradientHeader: 'from-green-500/10 to-emerald-500/10',
    hoverBorderColor: 'hover:border-green-500/50',
    buttonColor: 'bg-green-500 hover:bg-green-600',
    icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
    iconColor: 'text-green-600 dark:text-green-400',
    steps: [
      {
        command: '/bootstrap "describe your app"',
        typeLabel: 'Complete project setup',
        description: 'AI builds your entire project: research, architecture, design, implementation, and documentation',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 1
      }
    ],
    tip: '⚠️ Warning: This uses significant AI tokens',
    features: [
      'Research and tech stack selection',
      'Project structure and architecture',
      'UI/UX design and wireframes',
      'Complete implementation with tests',
      'Comprehensive documentation'
    ],
    borderColor: 'border-green-500/20'
  },
  {
    title: 'Create Video Content',
    level: 'Intermediate',
    duration: '~20-40 min',
    stepCount: 2,
    bestFor: 'Programmatic video creation with React',
    gradientHeader: 'from-pink-500/10 to-rose-500/10',
    hoverBorderColor: 'hover:border-pink-500/50',
    buttonColor: 'bg-pink-500 hover:bg-pink-600',
    icon: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>',
    iconColor: 'text-pink-600 dark:text-pink-400',
    steps: [
      {
        command: '/remotion',
        typeLabel: 'Video creation (skill)',
        description: 'Create videos programmatically with React and Remotion',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 1,
        isSkill: true
      },
      {
        command: 'render',
        typeLabel: 'Render output',
        description: 'Export to MP4, GIF, or image sequences',
        color: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
        number: 2
      }
    ],
    tip: '💡 New in v2.5: Replaces /design:video command',
    features: [
      'Animations and transitions',
      'Text animations and captions',
      '3D graphics integration',
      'Audio synchronization'
    ],
    borderColor: 'border-pink-500/20'
  }
];

// v2.4.0 workflows - command-based approach (stable)
export const v24Workflows = [
  {
    title: 'Build a New Feature',
    level: 'Beginner',
    duration: '~15-30 min',
    stepCount: 4,
    bestFor: 'Adding new functionality to your app',
    gradientHeader: 'from-purple-500/10 to-blue-500/10',
    hoverBorderColor: 'hover:border-purple-500/50',
    buttonColor: 'bg-purple-500 hover:bg-purple-600',
    icon: '<path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/>',
    iconColor: 'text-purple-600 dark:text-purple-400',
    steps: [
      {
        command: '/brainstorm',
        typeLabel: 'Explore ideas (command)',
        description: 'Run /brainstorm "feature idea" to explore possibilities',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 1
      },
      {
        command: '/plan',
        typeLabel: 'Create implementation plan',
        description: 'AI creates a detailed step-by-step plan for building your feature',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 2
      },
      {
        typeLabel: 'Review → Implement',
        description: 'Review plan and proceed to implementation',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
      },
      {
        command: '/code @plan.md',
        typeLabel: 'Implement the plan',
        description: 'AI writes the code following the plan, runs tests, and reviews the work',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4
      }
    ],
    tip: '💡 Tip: /code @plan.md reads and implements your plan',
    borderColor: 'border-purple-500/20'
  },
  {
    title: 'Fix a Bug',
    level: 'Beginner',
    duration: '~5-15 min',
    stepCount: 3,
    bestFor: 'Fixing errors and unexpected behavior',
    gradientHeader: 'from-red-500/10 to-orange-500/10',
    hoverBorderColor: 'hover:border-red-500/50',
    buttonColor: 'bg-red-500 hover:bg-red-600',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    iconColor: 'text-red-600 dark:text-red-400',
    steps: [
      {
        command: '/debug',
        typeLabel: 'Investigate the issue',
        description: 'AI analyzes your code to find the root cause of the problem',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 1
      },
      {
        command: '/fix',
        typeLabel: 'Apply the fix',
        description: 'AI fixes the bug and explains what was wrong and how it was fixed',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 2
      },
      {
        command: '/test',
        typeLabel: 'Verify the fix',
        description: 'Run tests to make sure the bug is fixed and nothing else broke',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3
      }
    ],
    tip: '💡 Tip: Use /fix:types, /fix:ui, /fix:ci for specialized fixes',
    borderColor: 'border-red-500/20'
  },
  {
    title: 'Quick Implementation',
    level: 'Intermediate',
    duration: '~10-20 min',
    stepCount: 1,
    bestFor: 'Small features when you know what you want',
    gradientHeader: 'from-blue-500/10 to-cyan-500/10',
    hoverBorderColor: 'hover:border-blue-500/50',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
    icon: '<path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/>',
    iconColor: 'text-blue-600 dark:text-blue-400',
    steps: [
      {
        command: '/cook "your task"',
        typeLabel: 'All-in-one command',
        description: 'AI researches, plans, implements, tests, and reviews the feature automatically',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 1
      }
    ],
    tip: '💡 See variants table below for different execution modes',
    cookVariants: [
      { command: '/cook', desc: 'Full workflow: research, plan, implement, test, review' },
      { command: '/cook:auto', desc: 'Auto-approve all steps without prompts' },
      { command: '/cook:auto:fast', desc: 'Skip research phase, fast implementation' },
      { command: '/cook:auto:parallel', desc: 'Run implementation phases in parallel' },
      { command: '/code:no-test', desc: 'Skip running tests after coding' },
      { command: '/code:parallel', desc: 'Execute plan phases in parallel' }
    ],
    features: [
      'Research best approaches and technologies',
      'Create and execute implementation plan',
      'Write and test the code',
      'Review for quality and best practices'
    ],
    borderColor: 'border-blue-500/20'
  },
  {
    title: 'Start New Project',
    level: 'Advanced',
    duration: '~1-2 hours',
    stepCount: 1,
    bestFor: 'Creating a complete app from scratch',
    gradientHeader: 'from-green-500/10 to-emerald-500/10',
    hoverBorderColor: 'hover:border-green-500/50',
    buttonColor: 'bg-green-500 hover:bg-green-600',
    icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
    iconColor: 'text-green-600 dark:text-green-400',
    steps: [
      {
        command: '/bootstrap "describe your app"',
        typeLabel: 'Complete project setup',
        description: 'AI builds your entire project: research, architecture, design, implementation, and documentation',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 1
      }
    ],
    tip: '⚠️ Warning: This uses significant AI tokens',
    features: [
      'Research and tech stack selection',
      'Project structure and architecture',
      'UI/UX design and wireframes',
      'Complete implementation with tests',
      'Comprehensive documentation'
    ],
    borderColor: 'border-green-500/20'
  },
  {
    title: 'Design from Screenshot',
    level: 'Intermediate',
    duration: '~15-25 min',
    stepCount: 2,
    bestFor: 'Recreating UI from designs or screenshots',
    gradientHeader: 'from-pink-500/10 to-rose-500/10',
    hoverBorderColor: 'hover:border-pink-500/50',
    buttonColor: 'bg-pink-500 hover:bg-pink-600',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    iconColor: 'text-pink-600 dark:text-pink-400',
    steps: [
      {
        command: '/design:screenshot',
        typeLabel: 'Analyze design',
        description: 'AI analyzes the screenshot and understands the UI components',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 1
      },
      {
        command: '/code',
        typeLabel: 'Implement design',
        description: 'AI generates the code matching the design',
        color: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
        number: 2
      }
    ],
    tip: '💡 Tip: Provide high-quality screenshots for better results',
    borderColor: 'border-pink-500/20'
  }
];

// Legacy export for backwards compatibility
export const workflows = v24Workflows;

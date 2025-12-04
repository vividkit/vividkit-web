export const workflows = [
  {
    title: 'Build a New Feature',
    level: 'beginner',
    duration: '~15-30 min',
    stepCount: 4,
    steps: [
      { command: '/brainstorm', description: 'Explore ideas' },
      { command: '/plan', description: 'Create implementation plan' },
      { command: '/code', description: 'Generate the code' },
      { command: '/test', description: 'Run tests and validate' }
    ],
    borderColor: 'border-purple-500/20'
  },
  {
    title: 'Debug Production Issues',
    level: 'intermediate',
    duration: '~10-20 min',
    stepCount: 3,
    steps: [
      { command: '/debug', description: 'Analyze error logs' },
      { command: '/fix', description: 'Apply targeted fixes' },
      { command: '/test', description: 'Verify the solution' }
    ],
    borderColor: 'border-red-500/20'
  },
  {
    title: 'Optimize Performance',
    level: 'advanced',
    duration: '~20-40 min',
    stepCount: 4,
    steps: [
      { command: '/analyze', description: 'Profile bottlenecks' },
      { command: '/optimize', description: 'Apply optimizations' },
      { command: '/benchmark', description: 'Measure improvements' },
      { command: '/deploy', description: 'Deploy changes safely' }
    ],
    borderColor: 'border-yellow-500/20'
  },
  {
    title: 'Create Documentation',
    level: 'beginner',
    duration: '~10-15 min',
    stepCount: 3,
    steps: [
      { command: '/docs:init', description: 'Initialize documentation' },
      { command: '/docs:update', description: 'Update existing docs' },
      { command: '/docs:summarize', description: 'Create summaries' }
    ],
    borderColor: 'border-blue-500/20'
  }
];
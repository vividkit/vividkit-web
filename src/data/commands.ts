export const commandCategories = [
  {
    title: 'Beginner',
    description: 'Start here!',
    commands: [
      { name: '/ask "how does auth work?"', description: 'Get technical guidance and architectural advice' },
      { name: '/brainstorm "mobile features"', description: 'Generate ideas with AI collaboration' },
      { name: '/fix "search bug"', description: 'Automatically diagnose and repair bugs' }
    ]
  },
  {
    title: 'Intermediate',
    description: 'Level up!',
    commands: [
      { name: '/plan "add user auth"', description: 'Create step-by-step implementation plans' },
      { name: '/code plan.md', description: 'Implement your plans with AI-generated code' },
      { name: '/cook "add dark mode"', description: 'All-in-one: brainstorm → plan → implement' }
    ]
  },
  {
    title: 'Advanced',
    description: 'Pro mode!',
    commands: [
      { name: '/bootstrap "dashboard"', description: 'Generate complete project scaffolding' },
      { name: '/scout "find API endpoints"', description: 'Explore and analyze your codebase' },
      { name: '/watzup', description: 'Review recent changes and git history' }
    ]
  }
];
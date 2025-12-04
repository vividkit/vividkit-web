export const commandCategories = [
  {
    name: 'Planning',
    icon: '📋',
    color: 'purple',
    commands: [
      { command: '/brainstorm', description: 'Explore ideas' },
      { command: '/plan', description: 'Create implementation plan' },
      { command: '/research', description: 'Research technologies' }
    ]
  },
  {
    name: 'Development',
    icon: '💻',
    color: 'blue',
    commands: [
      { command: '/code', description: 'Generate code' },
      { command: '/fix', description: 'Fix issues' },
      { command: '/refactor', description: 'Improve code structure' }
    ]
  },
  {
    name: 'Testing',
    icon: '🧪',
    color: 'green',
    commands: [
      { command: '/test', description: 'Run tests' },
      { command: '/debug', description: 'Debug issues' },
      { command: '/validate', description: 'Validate implementation' }
    ]
  },
  {
    name: 'UI/UX',
    icon: '🎨',
    color: 'pink',
    commands: [
      { command: '/design', description: 'Create designs' },
      { command: '/ui', description: 'Build UI components' },
      { command: '/ux', description: 'Improve user experience' }
    ]
  },
  {
    name: 'DevOps',
    icon: '🚀',
    color: 'orange',
    commands: [
      { command: '/deploy', description: 'Deploy application' },
      { command: '/ci', description: 'Configure CI/CD' },
      { command: '/docker', description: 'Containerize application' }
    ]
  },
  {
    name: 'Documentation',
    icon: '📚',
    color: 'indigo',
    commands: [
      { command: '/docs', description: 'Generate documentation' },
      { command: '/api-docs', description: 'Create API documentation' },
      { command: '/readme', description: 'Generate README' }
    ]
  }
];
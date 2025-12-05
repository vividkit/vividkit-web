export const cliHeroContent = {
  title: 'ClaudeKit CLI',
  subtitle: 'Command line interface for power users',
  description: 'ClaudeKit CLI helps you set up ClaudeKit in your projects, then you use Claude Code to get AI assistance. Install ClaudeKit, run claude, and leverage powerful skills like UI/UX Pro Max — all from your terminal!',
  quickWorkflow: [
    { command: 'ck init', comment: 'Set up ClaudeKit in your project' },
    { command: 'claude', comment: 'Start Claude Code CLI' }
  ]
};

export const cliTerminalPreview = {
  title: 'Terminal — bash — 80x24',
  lines: [
    { type: 'prompt', path: '~/projects', command: 'claude' },
    { type: 'output', content: 'Starting Claude Code CLI...' },
    { type: 'hint', content: 'Type your message (or /help for commands)' },
    { type: 'user', content: 'Using ui-ux-pro-max skill, create a yoga studio landing page' },
    { type: 'thinking', content: 'ClaudeKit AI is thinking...' },
    { type: 'search', items: [
      { label: 'Searching product domain:', value: 'beauty/wellness' },
      { label: 'Style guide:', value: 'minimalist + elegant' },
      { label: 'Typography:', value: 'Playfair Display + Inter' },
      { label: 'Color palette:', value: 'soft pastels (#E8E5F2)' }
    ]},
    { type: 'complete', content: 'Design Complete!' },
    { type: 'result', items: [
      'Created: yoga-studio-landing.html',
      'Calming lavender color palette',
      'Elegant Playfair Display typography',
      'Responsive mobile-first design',
      'WCAG AA accessible'
    ]}
  ]
};

export const cliQuickSteps = [
  {
    number: 1,
    title: 'Install ClaudeKit CLI',
    command: 'npm install -g claudekit-cli',
    note: 'Or use: bun add -g claudekit-cli',
    color: 'indigo' as const
  },
  {
    number: 2,
    title: 'Initialize Your Project',
    command: 'ck init',
    note: 'Requires GitHub CLI authentication (gh auth login)',
    color: 'purple' as const
  },
  {
    number: 3,
    title: 'Start Claude Code',
    command: 'claude',
    note: 'Chat with AI to build beautiful UIs instantly!',
    color: 'emerald' as const
  }
];

export const cliCommandCards = [
  {
    number: 1,
    title: 'Setup Project',
    command: 'ck init',
    description: 'Initialize ClaudeKit in your project (one-time setup)',
    color: 'emerald' as const
  },
  {
    number: 2,
    title: 'Start Claude Code',
    command: 'claude',
    description: 'Open interactive AI assistant - chat and iterate',
    color: 'purple' as const
  },
  {
    number: 3,
    title: 'Use Skills',
    command: 'Using ui-ux-pro-max skill...',
    description: 'Inside Claude, activate powerful design intelligence',
    color: 'cyan' as const
  }
];

export type CLIStep = typeof cliQuickSteps[0];
export type CLICommandCard = typeof cliCommandCards[0];
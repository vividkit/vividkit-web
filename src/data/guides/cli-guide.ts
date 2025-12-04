export const cliSteps = [
  {
    number: 1,
    title: 'Install ClaudeKit CLI',
    command: '$ npm install -g claudekit-cli',
    note: 'Verify: ck --version',
    color: 'blue'
  },
  {
    number: 2,
    title: 'Initialize Your Project',
    command: '$ ck init my-project',
    note: 'Creates project structure',
    color: 'green'
  },
  {
    number: 3,
    title: 'Start Building',
    command: '$ ck generate component MyComponent',
    note: 'Generate components, pages, or features',
    color: 'purple'
  }
];
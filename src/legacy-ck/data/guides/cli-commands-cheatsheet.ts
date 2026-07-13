export interface CliCommand {
  name: string;
  description: string;
  category: 'setup' | 'management' | 'distribution' | 'workflow' | 'integration';
  keyFlags?: string[];
  subcommands?: string[];
  example?: string;
}

export const cliCommandsCheatsheet: CliCommand[] = [
  // --- Setup & Installation ---
  {
    name: 'ck new',
    description: 'Bootstrap a new ClaudeKit project with interactive version selection',
    category: 'setup',
    keyFlags: ['--kit <engineer|marketing>', '-y, --yes', '--beta', '--use-git', '--dir <dir>', '-r, --release <version>'],
    example: 'ck new --kit engineer --yes',
  },
  {
    name: 'ck init',
    description: 'Initialize or update ClaudeKit in an existing project',
    category: 'setup',
    keyFlags: ['--kit <kit>', '-g, --global', '--fresh', '--force', '--install-skills', '-y, --yes', '--beta', '--sync', '-r, --release <version>', '--skip-setup'],
    example: 'ck init -g --kit engineer --yes --install-skills',
  },
  {
    name: 'ck update',
    description: 'Update the ClaudeKit CLI tool itself',
    category: 'setup',
    keyFlags: ['--check', '-y, --yes', '-d, --dev', '-r, --release <version>'],
    example: 'ck update --check',
  },
  {
    name: 'ck setup',
    description: 'Configure API keys and optional packages',
    category: 'setup',
    keyFlags: ['--global', '--skip-packages', '--dir <dir>'],
    example: 'ck setup --global',
  },
  {
    name: 'ck versions',
    description: 'List available ClaudeKit repository versions',
    category: 'setup',
    keyFlags: ['--kit <kit>', '--limit <n>', '--all'],
    example: 'ck versions --kit engineer --limit 10',
  },
  // --- Management ---
  {
    name: 'ck doctor',
    description: 'Comprehensive health check for ClaudeKit installation',
    category: 'management',
    keyFlags: ['--fix', '--report', '--check-only', '--json', '--full'],
    example: 'ck doctor --fix',
  },
  {
    name: 'ck config',
    description: 'Manage configuration and launch dashboard UI',
    category: 'management',
    subcommands: ['ui', 'get', 'set', 'show'],
    keyFlags: ['-g, --global', '-l, --local', '--json', '--port <port>', '--host <host>', '--no-open', '--dev'],
    example: 'ck config ui',
  },
  {
    name: 'ck projects',
    description: 'Manage local project registry entries',
    category: 'management',
    subcommands: ['list', 'add', 'remove'],
    keyFlags: ['--alias <alias>', '--pinned', '--tags <tags>', '--json'],
    example: 'ck projects list',
  },
  {
    name: 'ck backups',
    description: 'List, restore, and prune recovery backups',
    category: 'management',
    subcommands: ['list', 'restore', 'prune'],
    keyFlags: ['--limit <n>', '--keep <n>', '--all', '-y, --yes', '--json'],
    example: 'ck backups list',
  },
  {
    name: 'ck uninstall',
    description: 'Remove ClaudeKit installations safely',
    category: 'management',
    keyFlags: ['-l, --local', '-g, --global', '-A, --all', '-k, --kit <type>', '--dry-run', '--force-overwrite', '-y, --yes'],
    example: 'ck uninstall --local --dry-run',
  },
  // --- Distribution ---
  {
    name: 'ck skills',
    description: 'Install/uninstall skills to coding agents; list active Claude Code skills and registry-managed installations',
    category: 'distribution',
    keyFlags: ['-n, --name <skill>', '-a, --agent <agents>', '-g, --global', '-l, --list', '--installed', '-u, --uninstall', '--search <query>', '--catalog', '--validate', '--sync', '-y, --yes'],
    example: 'ck skills -n ui-ux-pro-max -a cursor --global',
  },
  {
    name: 'ck agents',
    description: 'Install/uninstall agents to coding providers',
    category: 'distribution',
    keyFlags: ['-n, --name <agent>', '-a, --agent <providers>', '-g, --global', '-l, --list', '--all', '--sync', '-y, --yes'],
    example: 'ck agents -l --installed',
  },
  {
    name: 'ck commands',
    description: 'Install/uninstall commands to coding providers',
    category: 'distribution',
    keyFlags: ['-n, --name <cmd>', '-a, --agent <providers>', '-g, --global', '-l, --list', '--all', '--sync', '-y, --yes'],
    example: 'ck commands -l --installed',
  },
  {
    name: 'ck migrate',
    description: 'Migrate agents, commands, skills, config, rules, hooks to other providers',
    category: 'distribution',
    keyFlags: ['-a, --agent <providers>', '--all', '--install', '--reconcile', '--dry-run', '--only-*', '--skip-*', '--config', '--rules', '--hooks', '-g, --global', '-y, --yes', '--force', '--respect-deletions'],
    example: 'ck migrate -a codex --dry-run',
  },
  // --- Workflow ---
  {
    name: 'ck plan',
    description: 'Plan management: parse, validate, status, kanban, create',
    category: 'workflow',
    subcommands: ['parse', 'validate', 'status', 'kanban', 'create', 'check', 'uncheck', 'add-phase'],
    keyFlags: ['--json', '--strict', '-g, --global', '--title', '--phases'],
    example: 'ck plan status',
  },
  {
    name: 'ck content',
    description: 'Multi-channel content automation engine',
    category: 'workflow',
    subcommands: ['start', 'stop', 'status', 'logs', 'setup', 'queue', 'approve', 'reject'],
    keyFlags: ['--dry-run', '--verbose', '--force', '--tail', '--reason <reason>'],
    example: 'ck content status',
  },
  // --- Integration ---
  {
    name: 'ck api',
    description: 'Interact with ClaudeKit API and proxy services',
    category: 'integration',
    subcommands: ['setup', 'status', 'services', 'vidcap', 'reviewweb', 'proxy'],
    keyFlags: ['--json', '--method', '--locale', '--format'],
    example: 'ck api status',
  },
  {
    name: 'ck watch',
    description: 'Watch GitHub issues and auto-respond with AI',
    category: 'integration',
    keyFlags: ['--interval <ms>', '--dry-run', '--force', '--verbose'],
    example: 'ck watch --dry-run --verbose',
  },
];

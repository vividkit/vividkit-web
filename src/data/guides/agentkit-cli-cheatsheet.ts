// Sourced from local `ak help` + per-command --help (stable-first examples)
export const AGENTKIT_CLI_SOURCED_FROM = 'ak dev' as const;
export const AGENTKIT_CLI_CHANNEL = 'stable-canonical' as const;

export interface AgentKitCliCommand {
  name: string;
  description: string;
  category: 'lifecycle' | 'kits' | 'runtime' | 'diagnose';
  keyFlags?: string[];
  example?: string;
}

export const agentkitCliCheatsheet: AgentKitCliCommand[] = [
  // Project lifecycle
  {
    name: 'ak gui',
    description: 'Launch the AgentKit desktop GUI',
    category: 'lifecycle',
    example: 'ak gui',
  },
  {
    name: 'ak init',
    description: 'Initialize an AgentKit project',
    category: 'lifecycle',
    keyFlags: ['--channel stable', '--target claude-code|codex', '--yes', '--json'],
    example: 'ak init --channel stable',
  },
  {
    name: 'ak new',
    description: 'Bootstrap a new AgentKit project',
    category: 'lifecycle',
    keyFlags: ['--channel stable', '--yes', '--json'],
    example: 'ak new --channel stable',
  },
  {
    name: 'ak plan',
    description: 'Manage AgentKit plan directories',
    category: 'lifecycle',
    example: 'ak plan list',
  },
  {
    name: 'ak projects',
    description: 'Manage the global AK project registry',
    category: 'lifecycle',
    example: 'ak projects list',
  },
  {
    name: 'ak self-update',
    description: 'Check or apply signed AgentKit binary updates',
    category: 'lifecycle',
    keyFlags: ['--channel stable|beta', '--yes', '--check'],
    example: 'ak self-update --channel stable',
  },
  {
    name: 'ak setup',
    description: 'Guided first-run configuration wizard',
    category: 'lifecycle',
    example: 'ak setup',
  },
  {
    name: 'ak uninstall',
    description: 'Remove an AK-managed project',
    category: 'lifecycle',
    keyFlags: ['--dry-run', '--yes'],
    example: 'ak uninstall --dry-run',
  },
  {
    name: 'ak update',
    description: 'Preview or apply AgentKit-owned project refreshes',
    category: 'lifecycle',
    keyFlags: ['--yes', '--channel stable'],
    example: 'ak update --yes',
  },
  // Kits, skills & agents
  {
    name: 'ak agents',
    description: 'Per-agent management commands',
    category: 'kits',
    example: 'ak agents list',
  },
  {
    name: 'ak content',
    description: 'Publish content to channels',
    category: 'kits',
    example: 'ak content --help',
  },
  {
    name: 'ak kit',
    description: 'Kit management: list, validate, init, refresh, uninstall',
    category: 'kits',
    keyFlags: ['init', 'list-kits', 'refresh', '--remote', '--target claude-code|codex', '--switch-to-plugin', '--channel stable'],
    example: 'ak kit init engineer --remote --target claude-code --channel stable',
  },
  {
    name: 'ak run',
    description: 'Run a skill via the configured agent adapter',
    category: 'kits',
    example: 'ak run --help',
  },
  {
    name: 'ak skill',
    description: 'Manage per-skill runtime envs',
    category: 'kits',
    example: 'ak skill list',
  },
  {
    name: 'ak skills',
    description: 'Browse and install kit skills',
    category: 'kits',
    example: 'ak skills list',
  },
  // Runtime adapters
  {
    name: 'ak codex-agent-runtime',
    description: 'Codex agent MCP dispatch runtime',
    category: 'runtime',
    example: 'ak codex-agent-runtime --help',
  },
  {
    name: 'ak mcp',
    description: 'Inspect local MCP server configuration',
    category: 'runtime',
    example: 'ak mcp list',
  },
  {
    name: 'ak migrate',
    description: 'Migrate an existing ClaudeKit install to AgentKit',
    category: 'runtime',
    keyFlags: ['--from=ck', '--dry-run', '--yes', '--channel stable'],
    example: 'ak migrate --from=ck --dry-run',
  },
  // Inspect & diagnose
  {
    name: 'ak activity',
    description: 'Inspect the local AgentKit activity feed',
    category: 'diagnose',
    example: 'ak activity',
  },
  {
    name: 'ak audit',
    description: 'Check installed kits for drift',
    category: 'diagnose',
    example: 'ak audit',
  },
  {
    name: 'ak backups',
    description: 'Manage rollback snapshots',
    category: 'diagnose',
    example: 'ak backups list',
  },
  {
    name: 'ak changelog',
    description: 'Show verified CLI, app, and kit release changelogs',
    category: 'diagnose',
    example: 'ak changelog',
  },
  {
    name: 'ak commands',
    description: 'Per-slash-command management commands',
    category: 'diagnose',
    example: 'ak commands list',
  },
  {
    name: 'ak diagnostics',
    description: 'Export redacted support diagnostics',
    category: 'diagnose',
    example: 'ak diagnostics',
  },
  {
    name: 'ak doctor',
    description: 'Run health checks on the AgentKit installation',
    category: 'diagnose',
    keyFlags: ['--fix', '--json'],
    example: 'ak doctor',
  },
];

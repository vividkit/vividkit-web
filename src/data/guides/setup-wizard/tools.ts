// Setup Wizard — Tool definitions
// Each tool lists which providers support it and where its guide lives.
import type { ProviderId } from './providers';

export type ToolId =
  | 'claude-code'
  | 'codex-cli'
  | 'opencode'
  | 'qwen-code'
  | 'kilo-cli'
  | 'gemini-cli'
  | 'cursor'
  | 'cline'
  | 'kilo-code'
  | 'openclaw';

export interface Tool {
  id: ToolId;
  name: string;
  type: 'cli' | 'ide';
  /** Providers that support this tool (reverse lookup from providers.ts) */
  providers: ProviderId[];
  /** Internal guide path, e.g. '/guides/cli' or '/guides/ide-config' */
  guide_path: string;
}

export const TOOLS: Tool[] = [
  {
    id: 'claude-code',
    name: 'Claude Code',
    type: 'cli',
    providers: ['anthropic', 'alibaba', 'minimax', 'zai'],
    guide_path: '/guides/cli',
  },
  {
    id: 'codex-cli',
    name: 'Codex CLI',
    type: 'cli',
    providers: ['openai', 'alibaba'],
    guide_path: '/guides/cli',
  },
  {
    id: 'opencode',
    name: 'OpenCode',
    type: 'cli',
    providers: ['openai', 'gemini', 'alibaba', 'deepseek', 'openrouter', 'ollama'],
    guide_path: '/guides/cli',
  },
  {
    id: 'qwen-code',
    name: 'Qwen Code',
    type: 'cli',
    providers: ['alibaba'],
    guide_path: '/guides/cli',
  },
  {
    id: 'kilo-cli',
    name: 'Kilo CLI',
    type: 'cli',
    providers: ['alibaba'],
    guide_path: '/guides/cli',
  },
  {
    id: 'gemini-cli',
    name: 'Gemini CLI',
    type: 'cli',
    providers: ['gemini', 'alibaba'],
    guide_path: '/guides/cli',
  },
  {
    id: 'cursor',
    name: 'Cursor',
    type: 'ide',
    providers: ['openai', 'gemini', 'alibaba', 'minimax', 'zai', 'deepseek', 'openrouter', 'ollama'],
    guide_path: '/guides/ide-config',
  },
  {
    id: 'cline',
    name: 'Cline',
    type: 'ide',
    providers: ['openai', 'gemini', 'alibaba', 'minimax', 'zai', 'deepseek', 'openrouter', 'ollama'],
    guide_path: '/guides/ide-config',
  },
  {
    id: 'kilo-code',
    name: 'Kilo Code',
    type: 'ide',
    providers: ['alibaba'],
    guide_path: '/guides/ide-config',
  },
  {
    id: 'openclaw',
    name: 'OpenClaw',
    type: 'ide',
    providers: ['alibaba', 'openrouter'],
    guide_path: '/guides/ide-config',
  },
];

/** Look up a tool by ID */
export function getTool(id: ToolId): Tool | undefined {
  return TOOLS.find((t) => t.id === id);
}

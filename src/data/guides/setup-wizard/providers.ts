// Setup Wizard — Provider definitions
// Each provider lists which tools it supports and whether it's CCS-compatible.
import type { ToolId } from './tools';

export type ProviderId =
  | 'anthropic'
  | 'openai'
  | 'gemini'
  | 'alibaba'
  | 'minimax'
  | 'zai'
  | 'deepseek'
  | 'openrouter'
  | 'ollama';

export interface Provider {
  id: ProviderId;
  name: string;
  /** Path to logo asset or icon identifier */
  logo: string;
  /** Subscription tiers available, e.g. ['Pro', 'Max', 'API'] */
  subscription_types: string[];
  /** Tools this provider officially supports */
  tools_supported: ToolId[];
  /** Whether the provider works with CCS (Claude Code Switch) */
  ccs_compatible: boolean;
}

export const PROVIDERS: Provider[] = [
  {
    id: 'anthropic',
    name: 'Anthropic',
    logo: 'anthropic',
    subscription_types: ['Pro', 'Max', 'API'],
    tools_supported: ['claude-code'],
    ccs_compatible: true,
  },
  {
    id: 'openai',
    name: 'OpenAI',
    logo: 'openai',
    subscription_types: ['Plus', 'Pro', 'API'],
    tools_supported: ['codex-cli', 'opencode', 'cursor', 'cline'],
    ccs_compatible: false,
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    logo: 'gemini',
    subscription_types: ['Standard', 'Advanced', 'API'],
    tools_supported: ['gemini-cli', 'opencode', 'cursor', 'cline'],
    ccs_compatible: false,
  },
  {
    id: 'alibaba',
    name: 'Alibaba Cloud (Qwen)',
    logo: 'alibaba',
    subscription_types: ['Free', 'Plus', 'API'],
    // Alibaba unlocks full tool list per brainstorm research
    tools_supported: [
      'claude-code',
      'codex-cli',
      'opencode',
      'qwen-code',
      'kilo-cli',
      'gemini-cli',
      'cursor',
      'cline',
      'kilo-code',
      'openclaw',
    ],
    ccs_compatible: true,
  },
  {
    id: 'minimax',
    name: 'MiniMax',
    logo: 'minimax',
    subscription_types: ['API'],
    tools_supported: ['claude-code', 'cursor', 'cline'],
    ccs_compatible: true,
  },
  {
    id: 'zai',
    name: 'ZAI (Z.AI)',
    logo: 'zai',
    subscription_types: ['API'],
    tools_supported: ['claude-code', 'cursor', 'cline'],
    ccs_compatible: true,
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    logo: 'deepseek',
    subscription_types: ['API'],
    tools_supported: ['opencode', 'cursor', 'cline'],
    ccs_compatible: false,
  },
  {
    id: 'openrouter',
    name: 'OpenRouter',
    logo: 'openrouter',
    subscription_types: ['API'],
    tools_supported: ['opencode', 'cursor', 'cline', 'openclaw'],
    ccs_compatible: false,
  },
  {
    id: 'ollama',
    name: 'Ollama (Local)',
    logo: 'ollama',
    subscription_types: ['Free'],
    tools_supported: ['opencode', 'cursor', 'cline'],
    ccs_compatible: false,
  },
];

/** Look up a provider by ID */
export function getProvider(id: ProviderId): Provider | undefined {
  return PROVIDERS.find((p) => p.id === id);
}

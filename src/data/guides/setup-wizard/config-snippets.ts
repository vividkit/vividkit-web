// Setup Wizard — Config snippets per provider:tool combo
// Key format: `${providerId}:${toolId}` or special keys like `ccs:multi`
// TODO (phase 7): Fill in all verified commands and settings

export interface ConfigSnippet {
  /** Shell commands to run for setup */
  commands: string[];
  /** Environment variables to set */
  env?: Record<string, string>;
  /** settings.json fragment (for IDE tools) */
  settings_json?: object;
  /** Link to detailed guide */
  guide_link: string;
  /** Extra notes or warnings */
  notes?: string;
}

export type SnippetKey = string; // `${providerId}:${toolId}` | 'ccs:multi' | 'generic'

export const CONFIG_SNIPPETS: Record<SnippetKey, ConfigSnippet> = {
  // ── Anthropic ──────────────────────────────────────────────────────────────
  'anthropic:claude-code': {
    commands: ['npm install -g @anthropic-ai/claude-code', 'claude'],
    env: { ANTHROPIC_API_KEY: 'your-api-key' },
    guide_link: '/guides/cli',
    notes: 'Official Anthropic CLI. Requires API key or Pro/Max subscription.',
  },

  // ── OpenAI ─────────────────────────────────────────────────────────────────
  'openai:codex-cli': {
    commands: ['TODO: verify openai codex-cli install command'],
    env: { OPENAI_API_KEY: 'your-api-key' },
    guide_link: '/guides/cli',
  },

  // ── Gemini ─────────────────────────────────────────────────────────────────
  'gemini:gemini-cli': {
    commands: ['TODO: verify gemini-cli install command'],
    env: { GEMINI_API_KEY: 'your-api-key' },
    guide_link: '/guides/cli',
  },

  // ── Alibaba / Qwen ─────────────────────────────────────────────────────────
  'alibaba:qwen-code': {
    commands: ['TODO: verify qwen-code install command'],
    env: { DASHSCOPE_API_KEY: 'your-api-key' },
    guide_link: '/guides/cli',
  },

  // ── CCS multi-provider ─────────────────────────────────────────────────────
  // Special key for when user selects multiple providers and wants CCS routing
  'ccs:multi': {
    commands: [
      'TODO: ccs install/setup commands',
      'TODO: ccs profile switch command',
    ],
    guide_link: '/guides/ccs',
    notes: 'CCS lets you switch between providers without manual config changes.',
  },

  // ── Generic fallback ───────────────────────────────────────────────────────
  // Shown when no specific snippet exists for the selected combo
  generic: {
    commands: ['TODO: provider-specific install command'],
    guide_link: '/guides/cli',
    notes: 'Refer to the provider documentation for exact setup steps.',
  },
};

/**
 * Retrieve a config snippet for a given provider:tool combo.
 * Falls back to the generic snippet if no exact match exists.
 */
export function getConfigSnippet(key: SnippetKey): ConfigSnippet {
  return CONFIG_SNIPPETS[key] ?? CONFIG_SNIPPETS['generic']!;
}

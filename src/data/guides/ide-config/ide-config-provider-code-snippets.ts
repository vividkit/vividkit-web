// IDE Config Guide - provider configuration code snippets for copy buttons

export const agyConfig = `// Antigravity (AGY) via CCS (CLIProxy)
{
  "name": "ANTHROPIC_BASE_URL",
  "value": "http://127.0.0.1:8317/api/provider/agy"
},
{
  "name": "ANTHROPIC_AUTH_TOKEN",
  "value": "ccs-internal-managed"
},
{
  "name": "ANTHROPIC_MODEL",
  "value": "gemini-claude-opus-4-6-thinking"
},
{
  "name": "ANTHROPIC_DEFAULT_OPUS_MODEL",
  "value": "gemini-claude-opus-4-6-thinking"
},
{
  "name": "ANTHROPIC_DEFAULT_SONNET_MODEL",
  "value": "gemini-claude-opus-4-6-thinking"
},
{
  "name": "ANTHROPIC_DEFAULT_HAIKU_MODEL",
  "value": "gemini-claude-sonnet-4-5"
}`;

export const glmConfig = `// GLM (z.ai) API Proxy
{
  "name": "ANTHROPIC_BASE_URL",
  "value": "https://api.z.ai/api/anthropic"
},
{
  "name": "ANTHROPIC_AUTH_TOKEN",
  "value": "<your_glm_api_key>"
},
{
  "name": "ANTHROPIC_MODEL",
  "value": "glm-5"
}`;

export const kimiConfig = `// Kimi (Moonshot AI) API Proxy
{
  "name": "ANTHROPIC_BASE_URL",
  "value": "https://api.kimi.com/coding/"
},
{
  "name": "ANTHROPIC_AUTH_TOKEN",
  "value": "<your_kimi_api_key>"
},
{
  "name": "ANTHROPIC_MODEL",
  "value": "kimi-k2.5"
}`;

export const minimaxConfig = `// MiniMax API Proxy
{
  "name": "ANTHROPIC_BASE_URL",
  "value": "https://api.minimax.io/anthropic"
},
{
  "name": "ANTHROPIC_AUTH_TOKEN",
  "value": "<your_minimax_api_key>"
},
{
  "name": "ANTHROPIC_MODEL",
  "value": "MiniMax-M2.5"
}`;

export const permissionsConfig = `"claudeCode.allowDangerouslySkipPermissions": true,
"claudeCode.initialPermissionMode": "bypassPermissions"`;

export const opus45Config = `"claudeCode.selectedModel": "claude-opus-4-5-20251101"`;

export const schemaConfig = `"json.schemas": [
  {
    "fileMatch": [
      ".ck.json",
      ".claude/settings.local.json"
    ],
    "url": "https://claudekit.cc/schemas/ck-config.schema.json"
  }
]`;

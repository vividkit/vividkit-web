// Script code constants used in DiscordNotificationGuide sub-components
// These are the actual code snippets displayed in code blocks

export const discordNotifyScriptCode = `#!/usr/bin/env node
/**
 * Discord Phase Notification Hook (Minimal Version)
 *
 * Only notifies on high-signal events:
 * 1. /plan command - ExitPlanMode when planning phase completes
 * 2. /code command - Step 5 blocking gate waiting for user approval
 * 3. /code command - Step 6 finalize when phase workflow finishes
 *
 * Location: ~/.claude/custom/hooks/ (survives CK updates)
 * Events: Stop (main session only, not SubagentStop to reduce noise)
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const os = require('os');

// Strict detection patterns - only high-signal events
const PATTERNS = {
  // /plan command: Plan ready for approval (ExitPlanMode tool called)
  planReady: [
    /ExitPlanMode/,
    /exiting\\s+plan\\s+mode/i,
  ],
  // /code command: Step 5 blocking gate - waiting for user approval
  codeApproval: [
    /⏸\\s*Step\\s*5/,
    /Step\\s*5.*WAITING.*user\\s*approval/i,
    /WAITING\\s+for\\s+user\\s+approval/i,
  ],
  // /code command: Step 6 finalize - phase workflow finished
  codeFinalize: [
    /✓\\s*Step\\s*6.*Finalize/,
    /Step\\s*6.*Git\\s*committed/i,
    /Phase\\s+workflow\\s+finished/i,
  ],
};

// Load environment variables (project scope first, then global)
function loadEnv() {
  const cwd = process.cwd();
  const envPaths = [
    // Project scope first
    path.join(cwd, '.claude', '.env'),
    path.join(cwd, '.claude', 'hooks', '.env'),
    // Global scope fallback
    path.join(os.homedir(), '.claude', 'custom', 'hooks', '.env'),
    path.join(os.homedir(), '.claude', 'hooks', '.env'),
    path.join(os.homedir(), '.claude', '.env'),
  ];

  for (const envPath of envPaths) {
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf-8');
      content.split('\\n').forEach(line => {
        const match = line.match(/^([^=]+)=(.*)$/);
        if (match && !process.env[match[1]]) {
          process.env[match[1]] = match[2].replace(/^["']|["']$/g, '');
        }
      });
    }
  }
}

// Send Discord notification (cross-platform using native https)
function sendDiscord(title, message, color = 5763719) {
  return new Promise((resolve) => {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('DISCORD_WEBHOOK_URL not set - skipping notification');
      resolve(false);
      return;
    }

    const cwd = process.cwd();
    const project = path.basename(cwd);
    const timestamp = new Date().toISOString();
    const localTime = new Date().toLocaleTimeString('en-US', { hour12: false });

    const payload = JSON.stringify({
      embeds: [{
        title,
        description: message,
        color,
        timestamp,
        footer: { text: \`\${project} • \${cwd}\` },
        fields: [
          { name: '⏰ Time', value: localTime, inline: true },
          { name: '📂 Project', value: project, inline: true },
        ],
      }],
    });

    try {
      const url = new URL(webhookUrl);
      const options = {
        hostname: url.hostname,
        port: 443,
        path: url.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload),
        },
        timeout: 10000,
      };

      const req = https.request(options, (res) => {
        resolve(res.statusCode >= 200 && res.statusCode < 300);
      });

      req.on('error', (e) => {
        console.error(\`Discord notification failed: \${e.message}\`);
        resolve(false);
      });

      req.on('timeout', () => {
        req.destroy();
        console.error('Discord notification timed out');
        resolve(false);
      });

      req.write(payload);
      req.end();
    } catch (e) {
      console.error(\`Discord notification failed: \${e.message}\`);
      resolve(false);
    }
  });
}

// Detect notification type from text - strict matching
function detectType(text) {
  if (!text) return null;

  // /plan command: ExitPlanMode (plan ready for review)
  for (const pattern of PATTERNS.planReady) {
    if (pattern.test(text)) {
      return { type: 'planReady', title: '📋 /plan Complete', color: 3447003 }; // Blue
    }
  }

  // /code command: Step 6 finalize (phase workflow finished) - check before Step 5
  for (const pattern of PATTERNS.codeFinalize) {
    if (pattern.test(text)) {
      return { type: 'codeFinalize', title: '✅ /code Phase Complete', color: 5763719 }; // Green
    }
  }

  // /code command: Step 5 blocking gate
  for (const pattern of PATTERNS.codeApproval) {
    if (pattern.test(text)) {
      return { type: 'codeApproval', title: '⏸ /code Step 5: Approval Needed', color: 15844367 }; // Yellow
    }
  }

  return null;
}

// Extract relevant context from payload
function extractContext(payload) {
  const parts = [];

  if (payload.stop_reason) {
    parts.push(payload.stop_reason.slice(0, 300));
  }

  return parts.join('\\n') || 'Claude needs your attention';
}

// Main execution
async function main() {
  try {
    loadEnv();

    const stdin = fs.readFileSync(0, 'utf-8').trim();
    if (!stdin) process.exit(0);

    const payload = JSON.parse(stdin);

    const textParts = [
      payload.stop_reason,
      payload.result,
      payload.output,
      payload.message,
    ].filter(Boolean);

    if (payload.transcript_path && fs.existsSync(payload.transcript_path)) {
      try {
        const transcript = fs.readFileSync(payload.transcript_path, 'utf-8');
        textParts.push(transcript.slice(-3000));
      } catch (e) {
        // Ignore
      }
    }

    const fullText = textParts.join(' ');
    const detection = detectType(fullText);

    if (detection) {
      const context = extractContext(payload);
      const sent = await sendDiscord(detection.title, context, detection.color);
      if (sent) {
        console.log(\`Discord: \${detection.title}\`);
      }
    }

    process.exit(0);
  } catch (error) {
    console.error(\`Hook error: \${error.message}\`);
    process.exit(0);
  }
}

main();`;

export const discordSettingsJsonCode = `{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "node $HOME/.claude/custom/hooks/discord-phase-notify.cjs"
          }
        ]
      }
    ]
  }
}`;

export const discordEnvExampleCode = `DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_ID/YOUR_TOKEN`;

// Test command snippets used in Step 6
export const discordTestCodes = {
  planReady: `echo '{"stop_reason": "ExitPlanMode - plan is ready for your review"}' | node ~/.claude/custom/hooks/discord-phase-notify.cjs`,
  planReadyWindows: `'{"stop_reason": "ExitPlanMode - plan is ready for your review"}' | node $env:USERPROFILE\\.claude\\custom\\hooks\\discord-phase-notify.cjs`,
  codeApproval: `echo '{"stop_reason": "⏸ Step 5: WAITING for user approval"}' | node ~/.claude/custom/hooks/discord-phase-notify.cjs`,
  codeApprovalWindows: `'{"stop_reason": "⏸ Step 5: WAITING for user approval"}' | node $env:USERPROFILE\\.claude\\custom\\hooks\\discord-phase-notify.cjs`,
  codeFinalize: `echo '{"stop_reason": "✓ Step 6: Finalize - Status updated - Git committed"}' | node ~/.claude/custom/hooks/discord-phase-notify.cjs`,
  codeFinalizeWindows: `'{"stop_reason": "✓ Step 6: Finalize - Status updated - Git committed"}' | node $env:USERPROFILE\\.claude\\custom\\hooks\\discord-phase-notify.cjs`,
};

// LLM prompt for automated setup
export const discordLlmSetupPrompt = `Set up Discord notifications for Claude Code /plan and /code commands.

Platform: Detect my OS and use appropriate paths/commands.

Requirements:
1. Create the hooks directory:
   - macOS/Linux: ~/.claude/custom/hooks/
   - Windows: %USERPROFILE%\\.claude\\custom\\hooks\\

2. Create \`discord-phase-notify.cjs\` - a Node.js script that:
   - Uses native \`https\` module (no external dependencies)
   - Uses \`os.homedir()\` and \`process.cwd()\` for cross-platform paths
   - Reads hook payload from stdin (JSON with stop_reason, result, output, message fields)
   - Only detects these specific patterns (no generic patterns):
     * /plan command: "ExitPlanMode", "exiting plan mode" → Blue notification
     * /code command: "⏸ Step 5", "WAITING for user approval" → Yellow notification
     * /code command: "✓ Step 6: Finalize", "Git committed", "Phase workflow finished" → Green notification
   - Sends Discord embed with title, project name, directory, timestamp
   - Loads DISCORD_WEBHOOK_URL from project scope first, then global:
     * Project: ./.claude/.env, ./.claude/hooks/.env
     * Global: ~/.claude/custom/hooks/.env, ~/.claude/hooks/.env, ~/.claude/.env
   - Always exits 0 (non-blocking)

3. Update settings.json (only Stop event, not SubagentStop):
   - macOS/Linux: ~/.claude/settings.json with \`node $HOME/.claude/custom/hooks/discord-phase-notify.cjs\`
   - Windows: %USERPROFILE%\\.claude\\settings.json with full path

4. Create .env file with DISCORD_WEBHOOK_URL=<webhook_url_placeholder>

5. Test with these payloads:
   - /plan: {"stop_reason": "ExitPlanMode - plan is ready"}
   - /code Step 5: {"stop_reason": "⏸ Step 5: WAITING for user approval"}
   - /code Step 6: {"stop_reason": "✓ Step 6: Finalize - Git committed"}

The custom/ directory ensures the hook survives ClaudeKit updates.`;

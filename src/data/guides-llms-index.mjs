/**
 * Single source of truth for the LLM-facing guide index.
 *
 * Consumed by:
 *   - src/pages/llms.txt.ts        → curated /llms.txt index (links + descriptions)
 *   - src/integrations/llms-full-txt.mjs → /llms-full.txt (inlines each guide's text)
 *
 * Plain .mjs (no types) so both the Vite/TS route and the Node build-time
 * integration can import it without a build step.
 */

/**
 * @typedef {{ title: string; path: string; desc: string; interactive?: boolean }} GuideLink
 *   `interactive: true` marks a visualizer page whose value is the live UI, not
 *   prose; llms-full.txt links to it instead of dumping its DOM.
 * @typedef {{ heading: string; links: GuideLink[] }} GuideSection
 */

/** Documentation sections mirror the on-site TabNavigation grouping. */
export const guideSections = [
  {
    heading: 'Getting Started',
    links: [
      {
        title: 'Migrate from ClaudeKit to AgentKit',
        path: '/guides/agentkit',
        desc: 'Step-by-step CK-to-AK migration plus the unresolved public-availability signals for AgentKit Desktop App.',
      },
      {
        title: 'What is ClaudeKit? From CK to AgentKit',
        path: '/guides/what-is-claudekit',
        desc: 'Compatibility primer explaining ClaudeKit’s legacy concepts, AgentKit as its successor, project/global scope, target-native Claude Code and Codex syntax, and the correct next guide.',
      },
      {
        title: 'AgentKit CLI Guide',
        path: '/guides/cli',
        desc: 'Install the native ak CLI, authenticate, install kits, and manage binary, project, and kit updates safely.',
      },
    ],
  },
  {
    heading: 'Core Features',
    links: [
      {
        title: 'Command Finder',
        path: '/guides/flowchart',
        desc: 'Interactive decision tree to find the right AgentKit skill for your task.',
      },
      {
        title: 'Commands Cheat Sheet',
        path: '/guides/commands',
        desc: 'AgentKit Engineer and Marketing skill reference with stable and beta metadata.',
      },
      {
        title: 'Workflow Recipes',
        path: '/guides/workflows',
        desc: 'Step-by-step recipes for common AgentKit workflows.',
      },
      {
        title: 'CLI Quick Reference',
        path: '/guides/cli-commands',
        desc: 'Verified AgentKit CLI command groups with lifecycle scope, flags, and safe examples.',
      },
    ],
  },
  {
    heading: 'Configuration',
    links: [
      {
        title: 'Claude Mechanics',
        path: '/guides/claude-mechanics',
        desc: 'How CLAUDE.md works, the config hierarchy, and what ck init creates.',
      },
      {
        title: 'Permission Modes',
        path: '/guides/permissions',
        desc: 'Configure Claude Code permission modes: auto mode with safety classifier and granular allow/ask/deny rules.',
      },
      {
        title: 'ClaudeKit Hooks',
        path: '/guides/hooks',
        desc: 'ClaudeKit hooks as guard rails around Claude Code: when they run, how they inspect context, and how each hook helps.',
      },
      {
        title: 'Coexistence',
        path: '/guides/coexistence',
        desc: 'How AgentKit-managed kit content coexists with Claude Code, Codex, and CCS-owned runtime profiles.',
      },
    ],
  },
  {
    heading: 'Deep Dives',
    links: [
      {
        title: 'How ClaudeKit Works',
        path: '/guides/how-ck-works',
        desc: 'Interactive visualizer of how ClaudeKit orchestrates tools, hooks, and multi-agent workflows.',
        interactive: true,
      },
      {
        title: 'UI Review Gate',
        path: '/guides/ui-review-gate',
        desc: 'Review agent plans and diffs in the browser with Plannotator.',
      },
      {
        title: 'Finding Your Unknowns',
        path: '/guides/finding-unknowns',
        desc: "A prompting method for surfacing what you don't know you don't know, mapped to ClaudeKit commands.",
      },
      {
        title: 'Inside ClaudeKit',
        path: '/guides/inside-claudekit',
        desc: 'Deep dives into ClaudeKit commands, skills, and practical workflows.',
      },
      {
        title: 'Unlocking /ck:plan with --deep and --tdd',
        path: '/guides/inside-claudekit/plan-modes',
        desc: 'When to use --deep, when to add --tdd, and when a lighter approach is enough, with a decision matrix.',
      },
      {
        title: 'Using the /ck:frontend-design skill effectively',
        path: '/guides/inside-claudekit/frontend-design',
        desc: 'When this skill is the right tool, how to prompt it, and how to get stronger UI outcomes.',
      },
      {
        title: 'Getting Started with Claude Code & Engineer Kit',
        path: '/guides/inside-claudekit/getting-started',
        desc: 'Set up ClaudeKit, learn the 7 core commands, and ship features and fix bugs faster.',
      },
      {
        title: 'Guard rails: the brake layer between model and action',
        path: '/guides/inside-claudekit/guard-rails',
        desc: 'The 4 guard layers, 7 guard-rail groups, and the gaps that remain in ClaudeKit.',
      },
    ],
  },
  {
    heading: 'Multi-Provider & Integrations',
    links: [
      {
        title: 'CCS — Claude Code Switch',
        path: '/guides/ccs',
        desc: 'Switch between accounts and models, save on tokens, and optimize your AI workflow.',
      },
      {
        title: 'IDE Extensions',
        path: '/guides/ide-config',
        desc: 'Configure the Claude Code extension and track the upcoming Codex extension setup.',
      },
      {
        title: 'Remote Control',
        path: '/guides/remote-control',
        desc: 'Use Remote Control with Claude Code or Codex, including standalone Codex app-server and optional CLIProxy routing.',
      },
      {
        title: 'Codex App with CLIProxyAPI',
        path: '/guides/codex-app',
        desc: 'Route Codex App requests through CCS CLIProxyAPI with account rotation and config setup.',
      },
      {
        title: 'AgentKit × Codex',
        path: '/guides/ck-with-codex',
        desc: 'Install AgentKit kits for Codex and invoke installed $ak:* skills with Codex-native syntax.',
      },
      {
        title: 'AgentKit Targets & Cross-Tool Migration',
        path: '/guides/migrate',
        desc: 'Distinguish CK-to-AK migration, verified AgentKit targets, legacy provider conversion, and CCS runtime migration.',
      },
      {
        title: 'Happy-CCS Bridge',
        path: '/guides/happy-ccs',
        desc: 'Switch between AI providers (Gemini, GLM, Kimi) while keeping Happy CLI features like mobile control and daemon mode.',
      },
    ],
  },
  {
    heading: 'Troubleshooting',
    links: [
      {
        title: 'Session Recovery',
        path: '/guides/session-recovery',
        desc: 'Recover and continue sessions when hitting rate limits, model errors, or switching providers mid-task.',
      },
      {
        title: 'Fix Logs',
        path: '/guides/fix-logs',
        desc: 'Use /fix:logs to automatically analyze and fix errors in your application logs.',
      },
      {
        title: 'UI/UX Pro Max',
        path: '/guides/uiux',
        desc: 'Define, iterate, and generate beautiful UI/UX designs with ClaudeKit.',
      },
    ],
  },
];

/** "## Optional" is skippable when a shorter context is needed (per llms.txt spec). */
export const optionalLinks = [
  {
    title: 'Guides Home',
    path: '/guides',
    desc: 'Documentation hub with learning pathways for beginners to advanced users.',
  },
  {
    title: 'AI Promotions & Deals',
    path: '/guides/promotions',
    desc: 'Curated AI service deals and promotions to maximize your coding limits.',
  },
  {
    title: 'Support VividKit',
    path: '/guides/donate',
    desc: 'Support VividKit through GitHub Sponsors.',
  },
];

/** Fallback origin when PUBLIC_SITE_URL is not set (matches .env.example). */
export const fallbackSiteUrl = 'https://vividkit.dev';

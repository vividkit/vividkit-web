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
    heading: 'Start Here',
    links: [
      {
        title: 'What Is AgentKit?',
        path: '/guides/agentkit',
        desc: 'Beginner-friendly introduction to AgentKit as the next generation of ClaudeKit.',
      },
      {
        title: 'Get Started with AgentKit',
        path: '/guides/agentkit/getting-started',
        desc: 'Install the ak CLI and onboard a first Kit (recommended for new setups).',
      },
      {
        title: 'What is ClaudeKit?',
        path: '/guides/what-is-claudekit',
        desc: 'Beginner-friendly introduction for existing ClaudeKit setups.',
      },
      {
        title: 'Migrate ClaudeKit to AgentKit',
        path: '/guides/migrate-claudekit-to-agentkit',
        desc: 'Optional, backup-first soft transition from ClaudeKit to AgentKit via ak migrate (usually keeps custom/modified by classification). Dry-run by default; apply with --yes.',
      },
      {
        title: 'Clean Cutover from ClaudeKit',
        path: '/guides/agentkit/clean-cutover-from-claudekit',
        desc: 'Multi-step, backup-first path to leave ClaudeKit and install AgentKit with as little CK residue as possible. Not a one-shot command.',
      },
    ],
  },
  {
    heading: 'AgentKit',
    links: [
      {
        title: 'How AgentKit Works',
        path: '/guides/agentkit/how-it-works',
        desc: 'From verified Kit releases through adapters to reviewed project artifacts.',
      },
      {
        title: 'Kits, Skills, Agents, and Hooks',
        path: '/guides/agentkit/building-blocks',
        desc: 'Building blocks of AgentKit and when to use each one.',
      },
      {
        title: 'Runtime Support',
        path: '/guides/agentkit/runtime-support',
        desc: 'How runtime adapters deliver Kit content without promising full parity.',
      },
      {
        title: 'AgentKit Desktop App',
        path: '/guides/agentkit/desktop-app',
        desc: 'Visual control center for local AgentKit state (does not execute Skills).',
      },
      {
        title: 'AK CLI Quick Reference',
        path: '/guides/agentkit/cli-commands',
        desc: 'AgentKit ak CLI commands cheatsheet — flags, subcommands, and examples.',
      },
      {
        title: 'Skills Cheatsheet',
        path: '/guides/agentkit/skills',
        desc: 'Engineer and Marketing Kit skills with subcommands, args, flags, and bilingual descriptions.',
      },
      {
        title: 'AgentKit Workflows',
        path: '/guides/agentkit/workflows',
        desc: 'Recommended /ak: skill chains (flagship + more recipes) — when and how to combine plan, cook, fix, review, ship, and --advice compose. Marketing tab Coming soon.',
      },
      {
        title: 'Statusline',
        path: '/guides/agentkit/statusline',
        desc: 'Claude Code statusline defaults, statuslineLayout options, and customization.',
      },
      {
        title: 'Configuration (config.yaml)',
        path: '/guides/agentkit/configuration',
        desc: 'AgentKit config.yaml: user vs project scope, settings, defaults, and options.',
      },
      {
        title: 'Updating',
        path: '/guides/agentkit/updating',
        desc: 'Update CLI & Kits: ak self-update vs ak update vs kit refresh — scope of each command.',
      },
      {
        title: 'Troubleshooting',
        path: '/guides/agentkit/troubleshooting',
        desc: 'Common CLI, Desktop, and runtime setup issues.',
      },
    ],
  },
  {
    heading: 'ClaudeKit (existing setups)',
    links: [
      {
        title: 'ClaudeKit CLI Guide',
        path: '/guides/cli',
        desc: 'Install and use the ClaudeKit CLI to supercharge your development workflow.',
      },
      {
        title: 'Command Finder',
        path: '/guides/flowchart',
        desc: 'Interactive decision tree to find the right ClaudeKit command for your task.',
        interactive: true,
      },
      {
        title: 'Commands Cheat Sheet',
        path: '/guides/commands',
        desc: 'Quick reference for ClaudeKit slash commands and skills.',
      },
      {
        title: 'Workflow Recipes',
        path: '/guides/workflows',
        desc: 'Step-by-step recipes for common ClaudeKit workflows.',
      },
      {
        title: 'CLI Quick Reference',
        path: '/guides/cli-commands',
        desc: 'ClaudeKit CLI commands at a glance — flags, subcommands, and quick examples.',
      },
      {
        title: 'Claude Mechanics',
        path: '/guides/claude-mechanics',
        desc: 'How CLAUDE.md works, the config hierarchy, and what ck init creates.',
      },
      {
        title: 'Permission Modes',
        path: '/guides/permissions',
        desc: 'Configure Claude Code permission modes: auto mode and granular allow/ask/deny rules.',
      },
      {
        title: 'ClaudeKit Hooks',
        path: '/guides/hooks',
        desc: 'ClaudeKit hooks as guard rails around Claude Code.',
      },
      {
        title: 'Coexistence',
        path: '/guides/coexistence',
        desc: 'Run ClaudeKit alongside your existing Claude Code setup safely.',
      },
      {
        title: 'ClaudeKit x Codex',
        path: '/guides/ck-with-codex',
        desc: 'Use ClaudeKit workflows with Codex.',
      },
      {
        title: 'Migrate to Other Tools',
        path: '/guides/migrate',
        desc: 'Migrate ClaudeKit content to other tools and providers.',
      },
      {
        title: 'How ClaudeKit Works',
        path: '/guides/how-ck-works',
        desc: 'Interactive visualizer for ClaudeKit skills and workflows.',
        interactive: true,
      },
      {
        title: 'Inside ClaudeKit',
        path: '/guides/inside-claudekit',
        desc: 'Deep dives into ClaudeKit commands, skills, and practical workflows.',
      },
      {
        title: 'UI Review Gate',
        path: '/guides/ui-review-gate',
        desc: 'Review agent plans and diffs in the browser (ClaudeKit-oriented).',
      },
      {
        title: 'Finding Your Unknowns',
        path: '/guides/finding-unknowns',
        desc: 'A prompting method for surfacing what you do not know you do not know.',
      },
      {
        title: 'Session Recovery',
        path: '/guides/session-recovery',
        desc: 'Recover sessions, resume work, and transfer context.',
      },
      {
        title: 'Fix from Logs',
        path: '/guides/fix-logs',
        desc: 'Intelligent debugging with ClaudeKit log analysis workflows.',
      },
      {
        title: 'UI/UX Guide',
        path: '/guides/uiux',
        desc: 'Design and implementation guidelines with ClaudeKit UI skills.',
      },
    ],
  },
  {
    heading: 'AI Tools & Runtimes',
    links: [
      {
        title: 'Accounts Switcher',
        path: '/guides/ccs',
        desc: 'Switch between AI providers and accounts.',
      },
      {
        title: 'IDE Config',
        path: '/guides/ide-config',
        desc: 'Configure Claude Code extension and related IDE setup.',
      },
      {
        title: 'Remote Control',
        path: '/guides/remote-control',
        desc: 'Control coding sessions from remote and mobile setups.',
      },
      {
        title: 'Codex App',
        path: '/guides/codex-app',
        desc: 'Route Codex App requests through CLIProxyAPI with Keychain auth helper.',
      },
    ],
  },
  {
    heading: 'Resources',
    links: [
      {
        title: 'Promotions',
        path: '/guides/promotions',
        desc: 'AI service deals and promotions.',
      },
      {
        title: 'Support VividKit',
        path: '/guides/donate',
        desc: 'Support public VividKit guide maintenance.',
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

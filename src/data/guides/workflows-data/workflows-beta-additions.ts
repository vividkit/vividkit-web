// Beta-only workflow additions (v2.14.0)
// These are combined with stableWorkflows in the index to form betaWorkflows
// New skills: /ship, /deploy, /security-scan, /llms

export const betaOnlyWorkflows = [
  {
    title: 'Ship a Feature',
    level: 'Intermediate',
    duration: '~5-10 min',
    stepCount: 1,
    bestFor: 'Shipping feature branches with automated test, review, and PR creation',
    gradientHeader: 'from-emerald-500/10 to-teal-500/10',
    hoverBorderColor: 'hover:border-emerald-500/50',
    buttonColor: 'bg-emerald-500 hover:bg-emerald-600',
    icon: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    steps: [
      {
        command: '/ship [--skip-tests] [--skip-review]',
        typeLabel: 'Ship pipeline (skill)',
        description: 'Merge main, run tests, pre-landing review, bump version, update changelog, push, create PR',
        color: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
        number: 1,
        isSkill: true
      }
    ],
    tip: '✨ Beta: /ship auto-detects test runner, version file format, and changelog style. Only stops for failures.',
    features: [
      'Merges origin/main before testing',
      'Auto-detects npm/pytest/cargo/go test',
      'Two-pass code review (critical + informational)',
      'Bumps version and updates CHANGELOG.md',
      'Creates PR with summary and test results'
    ],
    borderColor: 'border-emerald-500/20'
  },
  {
    title: 'Deploy Your App',
    level: 'Intermediate',
    duration: '~5-15 min',
    stepCount: 1,
    bestFor: 'Deploying to Vercel, Netlify, Railway, Fly.io, AWS, GCP and more',
    gradientHeader: 'from-orange-500/10 to-amber-500/10',
    hoverBorderColor: 'hover:border-orange-500/50',
    buttonColor: 'bg-orange-500 hover:bg-orange-600',
    icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
    iconColor: 'text-orange-600 dark:text-orange-400',
    steps: [
      {
        command: '/deploy [platform]',
        typeLabel: 'Auto-deploy (skill)',
        description: 'AI detects your project type and deploys to 15+ platforms with zero manual config',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 1,
        isSkill: true
      }
    ],
    tip: '✨ Beta: /deploy auto-detects your stack and handles environment variables, build steps, and platform config',
    features: [
      'Auto-detects project type (Next.js, Astro, Express, etc.)',
      'Supports 15+ platforms out of the box',
      'Handles env vars and build configuration',
      'Vercel, Netlify, Railway, Fly.io, AWS, GCP, Azure'
    ],
    borderColor: 'border-orange-500/20'
  },
  {
    title: 'Security Audit',
    level: 'Intermediate',
    duration: '~10-20 min',
    stepCount: 1,
    bestFor: 'Finding vulnerabilities and exposed secrets before shipping',
    gradientHeader: 'from-rose-500/10 to-red-500/10',
    hoverBorderColor: 'hover:border-rose-500/50',
    buttonColor: 'bg-rose-500 hover:bg-rose-600',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    iconColor: 'text-rose-600 dark:text-rose-400',
    steps: [
      {
        command: '/security-scan --full',
        typeLabel: 'Security audit (skill)',
        description: 'Deep scan for OWASP vulnerabilities, leaked API keys, and insecure patterns',
        color: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
        number: 1,
        isSkill: true
      }
    ],
    tip: '✨ Beta: /security-scan checks OWASP top 10, secrets exposure, auth flaws, and dependency vulnerabilities',
    features: [
      'OWASP Top 10 vulnerability checks',
      'Leaked API keys and secret detection',
      'Authentication and authorization flaws',
      'Dependency vulnerability scanning'
    ],
    borderColor: 'border-rose-500/20'
  },
  {
    title: 'LLMs.txt Generation',
    level: 'Beginner',
    duration: '~5-10 min',
    stepCount: 1,
    bestFor: 'Making your project AI-friendly for LLM consumption',
    gradientHeader: 'from-violet-500/10 to-purple-500/10',
    hoverBorderColor: 'hover:border-violet-500/50',
    buttonColor: 'bg-violet-500 hover:bg-violet-600',
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    iconColor: 'text-violet-600 dark:text-violet-400',
    steps: [
      {
        command: '/llms [path]',
        typeLabel: 'Generate index (skill)',
        description: 'Create llms.txt following llmstxt.org spec — makes your docs AI-readable',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 1,
        isSkill: true
      }
    ],
    tip: '✨ Beta: /llms generates standardized llms.txt so AI tools can quickly understand your codebase',
    features: [
      'Follows llmstxt.org specification',
      'Generates from docs, README, or codebase',
      'Includes reference files and structure overview',
      'Works with any project type'
    ],
    borderColor: 'border-violet-500/20'
  }
];

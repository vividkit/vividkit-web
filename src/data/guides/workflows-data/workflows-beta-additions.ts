// Beta-only workflow additions (v2.14.0)
// These are combined with stableWorkflows in the index to form betaWorkflows
// New skills: /ck:ship, /ck:deploy, /ck:llms

export const betaOnlyWorkflows = [
  {
    title: 'Ship a Feature',
    category: 'Shipping',
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
        command: '/ck:ship [--skip-tests] [--skip-review]',
        typeLabel: 'Ship pipeline (skill)',
        description: 'Merge main, run tests, pre-landing review, bump version, update changelog, push, create PR',
        color: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
        number: 1,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: '/ck:ship auto-detects test runner, version file format, and changelog style',
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
    category: 'Shipping',
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
        command: '/ck:deploy [platform]',
        typeLabel: 'Auto-deploy (skill)',
        description: 'AI detects your project type and deploys to 15+ platforms with zero manual config',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 1,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: '/ck:deploy auto-detects your stack and handles environment variables, build steps, and platform config',
    features: [
      'Auto-detects project type (Next.js, Astro, Express, etc.)',
      'Supports 15+ platforms out of the box',
      'Handles env vars and build configuration',
      'Vercel, Netlify, Railway, Fly.io, AWS, GCP, Azure'
    ],
    borderColor: 'border-orange-500/20'
  },
  {
    title: 'LLMs.txt Generation',
    category: 'Research & Docs',
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
        command: '/ck:llms [path]',
        typeLabel: 'Generate index (skill)',
        description: 'Create llms.txt following llmstxt.org spec — makes your docs AI-readable',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 1,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: '/ck:llms generates standardized llms.txt so AI tools can quickly understand your codebase',
    features: [
      'Follows llmstxt.org specification',
      'Generates from docs, README, or codebase',
      'Includes reference files and structure overview',
      'Works with any project type'
    ],
    borderColor: 'border-violet-500/20'
  }
];

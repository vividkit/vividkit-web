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
        command: '/ck:ship [--official|--beta] [--skip-tests] [--skip-review]',
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
      'Supports official (→main) and beta (→dev) ship modes',
      'Merges origin/main (or dev for beta) before testing',
      'Auto-detects npm/pytest/cargo/go test',
      'Two-pass code review + adversarial review (stage 3)',
      'Bumps version and updates CHANGELOG.md',
      'Creates PR with summary, test results, and linked issues'
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
  },
  {
    title: 'Visual Explanation',
    category: 'Docs & Communication',
    level: 'Beginner',
    duration: '~2-5 min',
    stepCount: 1,
    bestFor: 'Creating publication-quality visual explanations, diagrams, and slide decks as HTML',
    gradientHeader: 'from-rose-500/10 to-pink-500/10',
    hoverBorderColor: 'hover:border-rose-500/50',
    buttonColor: 'bg-rose-500 hover:bg-rose-600',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    iconColor: 'text-rose-600 dark:text-rose-400',
    steps: [
      {
        command: '/ck:preview --html --explain <topic>',
        typeLabel: 'Generate HTML (skill)',
        description: 'Self-contained HTML with theme toggle, Mermaid diagrams, and Chart.js — opens directly in browser',
        color: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
        number: 1,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: 'Use --slides for decks, --diagram for architecture, --diff for visual code review, --recap for project snapshots',
    features: [
      'Publication-quality self-contained HTML output',
      'Modes: --explain, --diagram, --slides, --diff, --plan-review, --recap',
      'Theme toggle (light/dark) built into every page',
      'Mermaid v11 diagrams with deep custom theming',
      'Chart.js data visualizations'
    ],
    borderColor: 'border-rose-500/20'
  }
];

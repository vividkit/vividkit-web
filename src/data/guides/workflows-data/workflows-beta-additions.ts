// Beta-only workflow additions (v2.14.0+)
// These are combined with stableWorkflows in the index to form betaWorkflows
// New beta skills: /ck:autoresearch, /ck:predict, /ck:scenario, /ck:security

export const betaOnlyWorkflows = [
  {
    title: 'Automated Research Loop',
    category: 'Planning & Review',
    level: 'Intermediate',
    duration: '~10-30 min',
    stepCount: 1,
    bestFor: 'Iterative metric optimization with automated experiments',
    gradientHeader: 'from-blue-500/10 to-cyan-500/10',
    hoverBorderColor: 'hover:border-blue-500/50',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
    icon: '<path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>',
    iconColor: 'text-blue-600 dark:text-blue-400',
    steps: [
      {
        command: '/ck:autoresearch',
        typeLabel: 'Research loop (skill)',
        description: 'Run N iterations against a metric, auto-keep/discard changes based on results',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 1,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: 'Set a clear, measurable metric (coverage %, bundle size, latency) for best results',
    features: [
      'Autonomous iteration loop',
      'Git history learning between rounds',
      'Auto-keep/discard based on metric delta',
      'Works with any measurable metric'
    ],
    borderColor: 'border-blue-500/20'
  },
  {
    title: 'Predict Impact Before Coding',
    category: 'Planning & Review',
    level: 'Intermediate',
    duration: '~5-10 min',
    stepCount: 1,
    bestFor: 'Catching architectural, security, and performance issues before implementation',
    gradientHeader: 'from-amber-500/10 to-orange-500/10',
    hoverBorderColor: 'hover:border-amber-500/50',
    buttonColor: 'bg-amber-500 hover:bg-amber-600',
    icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    iconColor: 'text-amber-600 dark:text-amber-400',
    steps: [
      {
        command: '/ck:predict',
        typeLabel: '5-persona debate (skill)',
        description: '5 expert personas debate proposed changes — architect, security, performance, UX, ops',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 1,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: 'Run before major features or risky refactors to catch issues early',
    features: [
      '5 expert personas with distinct viewpoints',
      'Architecture, security, performance analysis',
      'UX and ops impact assessment',
      'Consensus report with risk ratings'
    ],
    borderColor: 'border-amber-500/20'
  },
  {
    title: 'Generate Test Scenarios',
    category: 'Debugging & Fixes',
    level: 'Beginner',
    duration: '~5-10 min',
    stepCount: 1,
    bestFor: 'Comprehensive edge case discovery before implementation or testing',
    gradientHeader: 'from-purple-500/10 to-violet-500/10',
    hoverBorderColor: 'hover:border-purple-500/50',
    buttonColor: 'bg-purple-500 hover:bg-purple-600',
    icon: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    iconColor: 'text-purple-600 dark:text-purple-400',
    steps: [
      {
        command: '/ck:scenario',
        typeLabel: '12-dimension analysis (skill)',
        description: 'Decompose features across 12 dimensions to generate comprehensive test scenarios',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 1,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: 'Use before writing tests to ensure complete coverage of edge cases',
    features: [
      '12-dimension feature decomposition',
      'Edge case and boundary condition discovery',
      'Test scenario generation with priorities',
      'Integration with /ck:test for execution'
    ],
    borderColor: 'border-purple-500/20'
  },
  {
    title: 'STRIDE Security Audit',
    category: 'Debugging & Fixes',
    level: 'Intermediate',
    duration: '~10-20 min',
    stepCount: 1,
    bestFor: 'Comprehensive STRIDE + OWASP security analysis with optional auto-fix',
    gradientHeader: 'from-red-500/10 to-rose-500/10',
    hoverBorderColor: 'hover:border-red-500/50',
    buttonColor: 'bg-red-500 hover:bg-red-600',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
    iconColor: 'text-red-600 dark:text-red-400',
    steps: [
      {
        command: '/ck:security',
        typeLabel: 'STRIDE audit (skill)',
        description: 'STRIDE threat modeling + OWASP scan with severity categorization and optional auto-fix',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 1,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: 'Combine with /ck:security-scan for comprehensive vulnerability + threat coverage',
    features: [
      'STRIDE threat modeling framework',
      'OWASP vulnerability pattern matching',
      'Severity categorization and prioritization',
      'Optional iterative auto-fix using autoresearch pattern'
    ],
    borderColor: 'border-red-500/20'
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
  },
  {
    title: 'Sprint Retrospective',
    category: 'Session & Management',
    level: 'Beginner',
    duration: '~2-5 min',
    stepCount: 1,
    bestFor: 'Data-driven sprint reviews with git metrics, health indicators, and actionable recommendations',
    gradientHeader: 'from-amber-500/10 to-yellow-500/10',
    hoverBorderColor: 'hover:border-amber-500/50',
    buttonColor: 'bg-amber-500 hover:bg-amber-600',
    icon: '<path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>',
    iconColor: 'text-amber-600 dark:text-amber-400',
    steps: [
      {
        command: '/ck:retro [timeframe] [--compare] [--team] [--format html|md]',
        typeLabel: 'Analyze sprint (skill)',
        description: 'Gather git metrics (commits, LOC, hotspots, churn), compute health indicators, generate retrospective report',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 1,
        isSkill: true
      }
    ],
    tip: '/ck:retro 2w --compare --team generates a two-week retro with period comparison and per-author breakdown',
    features: [
      'Git metrics: commits/day, LOC added/removed, file hotspots',
      'Health indicators: churn rate, test ratio, active day ratio',
      'Period comparison with --compare flag',
      'Per-author breakdown with --team flag',
      'HTML or Markdown output format'
    ],
    borderColor: 'border-amber-500/20'
  },
  {
    title: 'AI Design Generation (Stitch)',
    category: 'Design & Frontend',
    level: 'Intermediate',
    duration: '~5-15 min',
    stepCount: 3,
    bestFor: 'Generating high-fidelity UI designs from text prompts via Google Stitch',
    gradientHeader: 'from-sky-500/10 to-indigo-500/10',
    hoverBorderColor: 'hover:border-sky-500/50',
    buttonColor: 'bg-sky-500 hover:bg-sky-600',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    iconColor: 'text-sky-600 dark:text-sky-400',
    steps: [
      {
        command: '/ck:stitch generate "prompt"',
        typeLabel: 'Generate design (skill)',
        description: 'Create UI designs from text prompts using Google Stitch AI',
        color: 'bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400',
        number: 1,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ck:stitch export --format all',
        typeLabel: 'Export assets (skill)',
        description: 'Export as Tailwind/HTML + DESIGN.md spec for implementation',
        color: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
        number: 2,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ck:frontend-design',
        typeLabel: 'Implement components (skill)',
        description: 'Build React components from the exported design spec',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3,
        isSkill: true
      }
    ],
    tip: 'Set up Stitch MCP server in .claude/.mcp.json for direct tool integration',
    features: [
      'Text-to-UI design via Google Stitch API',
      'Export to Tailwind/HTML and DESIGN.md',
      'Design-to-code pipeline with existing skills',
      'Supports mobile, desktop, and tablet layouts',
      'Quota: 200 credits/day (Flash), 50/day (Pro)'
    ],
    borderColor: 'border-sky-500/20'
  }
];

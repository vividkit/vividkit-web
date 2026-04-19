// Beta-only workflow additions
// These are combined with stableWorkflows in the index to form betaWorkflows
// Beta skills: /ck:autoresearch, /ck:predict, /ck:scenario, /ck:security, /excalidraw, /ck:xia, /ck:show-off, /ck:graphify, /ck:agentize

export const betaOnlyWorkflows = [
  {
    title: 'Frontend Design Aesthetics',
    category: 'Design & Frontend',
    level: 'Advanced',
    duration: '~30-60 min',
    stepCount: 4,
    bestFor: 'Creating distinctive, production-grade frontend interfaces that avoid generic AI slop',
    gradientHeader: 'from-fuchsia-500/10 to-pink-500/10',
    hoverBorderColor: 'hover:border-fuchsia-500/50',
    buttonColor: 'bg-fuchsia-500 hover:bg-fuchsia-600',
    icon: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
    iconColor: 'text-fuchsia-600 dark:text-fuchsia-400',
    steps: [
      {
        command: '/ck:ui-ux-pro-max',
        typeLabel: 'Design Intelligence',
        description: 'Activate ui-ux-pro-max logic to formulate styling references',
        color: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
        number: 1,
        isSkill: true
      },
      {
        command: 'Design Thinking',
        typeLabel: 'Mandatory Gate',
        description: 'Commit to a BOLD direction. Define Purpose, Tone, Constraints, and Differentiation.',
        color: 'bg-fuchsia-500/10 dark:bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400',
        number: 2,
        hasIcon: true,
        icon: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'
      },
      {
        command: 'Frontend Aesthetics',
        typeLabel: 'Design Rules',
        description: 'Ensure font size >= 16px for inputs, mobile-first layouts, and Anti-slop Google Fonts.',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M20 7h-7L10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>'
      },
      {
        command: '/ck:frontend-design',
        typeLabel: 'Implement Interface',
        description: 'Execute the spec following the design dials: Motion, Variance, Density.',
        color: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
        number: 4,
        isSkill: true
      }
    ],
    featureCommand: '/ck:frontend-design',
    tip: 'Anti-slop typography demands trending Google Fonts with Vietnamese coverage (e.g. Satoshi, Inter)',
    features: [
      'Design Dials: Variance, Density, Motion Intensity',
      'Mandatory strict Design Thinking gates',
      'Motion rules: CSS for HTML, Motion for React',
      'Production-ready aesthetic choices'
    ],
    borderColor: 'border-fuchsia-500/20'
  },
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
        typeLabel: 'Research loop',
        description: 'Run N iterations against a metric, auto-keep/discard changes based on results',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 1,
        isSkill: true,

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
        typeLabel: '5-persona debate',
        description: '5 expert personas debate proposed changes — architect, security, performance, UX, ops',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 1,
        isSkill: true,

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
        typeLabel: '12-dimension analysis',
        description: 'Decompose features across 12 dimensions to generate comprehensive test scenarios',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 1,
        isSkill: true,

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
        typeLabel: 'STRIDE audit',
        description: 'STRIDE threat modeling + OWASP scan with severity categorization and optional auto-fix',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 1,
        isSkill: true,

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
        typeLabel: 'Analyze sprint',
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
        typeLabel: 'Generate design',
        description: 'Create UI designs from text prompts using Google Stitch AI',
        color: 'bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/ck:stitch export --format all',
        typeLabel: 'Export assets',
        description: 'Export as Tailwind/HTML + DESIGN.md spec for implementation',
        color: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/ck:frontend-design',
        typeLabel: 'Implement components',
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
  },
  {
    title: 'Excalidraw Diagram Generation',
    category: 'Design & Frontend',
    level: 'Intermediate',
    duration: '~5-15 min',
    stepCount: 1,
    bestFor: 'Creating hand-drawn style diagrams that argue visually — shapes mirror meaning',
    gradientHeader: 'from-violet-500/10 to-indigo-500/10',
    hoverBorderColor: 'hover:border-violet-500/50',
    buttonColor: 'bg-violet-500 hover:bg-violet-600',
    icon: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/>',
    iconColor: 'text-violet-600 dark:text-violet-400',
    steps: [
      {
        command: '/excalidraw',
        typeLabel: 'Generate diagram',
        description: 'Generate hand-drawn Excalidraw diagrams from text prompts — architecture, flowcharts, system designs',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 1,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: 'Supports auto-diagram mode: analyze any codebase and generate architecture diagram automatically',
    features: [
      'Hand-drawn style with semantic color palettes',
      'Auto-diagram: zero-config codebase visualization',
      'File-based workflow with Playwright rendering',
      'MCP canvas workflow for live editing'
    ],
    borderColor: 'border-violet-500/20'
  },
  {
    title: 'Extract & Port Features (Xia)',
    category: 'Planning & Review',
    level: 'Advanced',
    duration: '~10-30 min',
    stepCount: 3,
    bestFor: 'Analyzing and porting features from external GitHub repos into your project',
    gradientHeader: 'from-emerald-500/10 to-teal-500/10',
    hoverBorderColor: 'hover:border-emerald-500/50',
    buttonColor: 'bg-emerald-500 hover:bg-emerald-600',
    icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    steps: [
      {
        command: '/ck:xia <repo> --compare',
        typeLabel: 'Analyze source',
        description: 'Compare source repo architecture, patterns, and feature implementation side-by-side',
        color: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
        number: 1,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ck:xia <repo> [feature] --improve',
        typeLabel: 'Port & refactor',
        description: 'Copy feature from source and refactor to fit local codebase patterns',
        color: 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400',
        number: 2,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ck:test',
        typeLabel: 'Validate port',
        description: 'Run tests to verify ported feature works correctly in local context',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3,
        isSkill: true
      }
    ],
    tip: 'Use --compare first to assess architecture compatibility before porting',
    features: [
      'Analyze any GitHub repo or local path',
      'Challenge framework stress-tests decisions',
      'AI auto-generates trade-off matrix and risk scores before coding'
    ],
    xiaModeFlags: [
      { flag: '--compare', desc: 'Side-by-side architectural and pattern analysis only', color: 'blue' },
      { flag: '--copy', desc: 'Code transplant with absolute minimal modifications', color: 'emerald' },
      { flag: '--improve', desc: 'Bring codebase over but refactor to clean up anti-patterns', color: 'teal' },
      { flag: '--port', desc: 'Extract core logic and rewrite idiomatically for local stack (Default)', color: 'purple' }
    ],
    xiaSpeedFlags: [
      { flag: '--fast', desc: 'Skip research and challenge phases, auto-approve immediately', color: 'orange' },
      { flag: '--auto', desc: 'Keep the full workflow, but auto-approve gates', color: 'cyan' },
      { flag: 'Default', desc: 'Full workflow with approval gates', color: 'slate' }
    ],
    borderColor: 'border-emerald-500/20'
  },
  {
    title: 'Knowledge Graph Navigation',
    category: 'Planning & Review',
    level: 'Intermediate',
    duration: '~5-15 min',
    stepCount: 2,
    bestFor: 'Understanding unfamiliar codebases through structural analysis before planning',
    gradientHeader: 'from-cyan-500/10 to-blue-500/10',
    hoverBorderColor: 'hover:border-cyan-500/50',
    buttonColor: 'bg-cyan-500 hover:bg-cyan-600',
    icon: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    steps: [
      {
        command: '/ck:graphify',
        typeLabel: 'Build graph',
        description: 'Analyze codebase with tree-sitter AST, generate interactive visualization + report',
        color: 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400',
        number: 1,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ck:plan',
        typeLabel: 'Plan with context',
        description: 'Use GRAPH_REPORT.md to understand architecture before creating implementation plan',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 2,
        isSkill: true
      }
    ],
    tip: 'Use --watch for incremental updates as you code. MCP mode exposes graph to Claude for direct queries.',
    features: [
      '20+ language support via tree-sitter AST',
      'Interactive HTML visualization with search',
      'God nodes and surprising connections report',
      '71.5x fewer tokens vs raw file context'
    ],
    borderColor: 'border-cyan-500/20'
  },
  {
    title: 'Showcase & Social Media Content',
    category: 'Media & Creative',
    level: 'Beginner',
    duration: '~5-10 min',
    stepCount: 1,
    bestFor: 'Creating polished HTML showcase pages for demos, articles, and social media posts',
    gradientHeader: 'from-pink-500/10 to-rose-500/10',
    hoverBorderColor: 'hover:border-pink-500/50',
    buttonColor: 'bg-pink-500 hover:bg-pink-600',
    icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    iconColor: 'text-pink-600 dark:text-pink-400',
    steps: [
      {
        command: '/ck:show-off',
        typeLabel: 'Generate showcase',
        description: 'Create multi-section HTML page with parallax, theme toggle, bilingual content (VI/EN), and auto-captured screenshots',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 1,
        isSkill: true,
        isBeta: true
      }
    ],
    tip: 'Outputs screenshots in 16:9, 9:16, and 1:1 aspect ratios — ready for social media platforms',
    features: [
      'Scrollable multi-section layout with parallax effects',
      'Auto theme toggle (system/light/dark)',
      'Parallel screenshot capture in multiple aspect ratios'
    ],
    borderColor: 'border-pink-500/20'
  },
  {
    title: 'Agentize Your Codebase',
    category: 'Backend & Infra',
    level: 'Intermediate',
    duration: '~15-30 min',
    stepCount: 3,
    bestFor: 'Converting existing code into AI agent-friendly CLI tools and MCP servers',
    gradientHeader: 'from-indigo-500/10 to-purple-500/10',
    hoverBorderColor: 'hover:border-indigo-500/50',
    buttonColor: 'bg-indigo-500 hover:bg-indigo-600',
    icon: '<path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8m-1 3h2v4h4v2h-4v4h-2v-4H7v-2h4V7z"/>',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    steps: [
      {
        command: '/ck:agentize --both',
        typeLabel: 'Generate CLI + MCP',
        description: 'Wrap codebase as both CLI tool and MCP server with shared core/ module',
        color: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
        number: 1,
        isSkill: true,
        isBeta: true
      },
      {
        command: 'Agent-centric design',
        typeLabel: 'Optimize for AI',
        description: 'Concise outputs, actionable errors, consolidated workflows — designed for LLM consumption',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 2,
        hasIcon: true,
        icon: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>'
      },
      {
        command: '/ck:deploy',
        typeLabel: 'Deploy to cloud',
        description: 'Deploy to Cloudflare Workers, Docker, or any supported platform',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3,
        isSkill: true
      }
    ],
    tip: 'Use --mcp for MCP-only or --cli for CLI-only output. Default --both generates shared core/',
    agentizeFlags: [
      { flag: '--both', desc: 'Generate both CLI and MCP with shared core/ (default)', color: 'indigo' },
      { flag: '--mcp', desc: 'MCP server only — tools exposed via Model Context Protocol', color: 'purple' },
      { flag: '--cli', desc: 'CLI tool only — standard terminal interface', color: 'blue' }
    ],
    features: [
      'Shared core/ module for CLI + MCP',
      'Agent-centric output formatting',
      'Actionable error messages for LLMs',
      'Deploy to Cloudflare Workers or Docker'
    ],
    borderColor: 'border-indigo-500/20'
  }
];

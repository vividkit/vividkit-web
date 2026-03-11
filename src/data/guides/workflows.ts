// v2.13.0 Stable workflows - skill-based approach
// /cook uses native Claude Tasks, /fix supports flags
export const stableWorkflows = [
  {
    title: 'Build a New Feature',
    level: 'Beginner',
    duration: '~15-30 min',
    stepCount: 4,
    bestFor: 'Adding new functionality to your app',
    gradientHeader: 'from-purple-500/10 to-blue-500/10',
    hoverBorderColor: 'hover:border-purple-500/50',
    buttonColor: 'bg-purple-500 hover:bg-purple-600',
    icon: '<path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/>',
    iconColor: 'text-purple-600 dark:text-purple-400',
    steps: [
      {
        command: '/brainstorm',
        typeLabel: 'Explore ideas (skill)',
        description: 'Use /brainstorm or say "brainstorm ideas for [feature]" to explore possibilities',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/plan',
        typeLabel: 'Create implementation plan',
        description: 'AI creates a detailed step-by-step plan for building your feature',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 2
      },
      {
        typeLabel: 'Review → /clear → Implement',
        description: 'Review plan, run /clear to free context (mandatory), then implement',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
      },
      {
        command: '/cook @plan.md',
        typeLabel: 'Implement the plan (skill)',
        description: 'AI writes the code following the plan, runs tests, and reviews the work',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4,
        isSkill: true
      }
    ],
    tip: '⚠️ /clear is mandatory after /plan before /cook',
    borderColor: 'border-purple-500/20'
  },
  {
    title: 'Fix a Bug',
    level: 'Beginner',
    duration: '~5-15 min',
    stepCount: 3,
    bestFor: 'Fixing errors and unexpected behavior',
    gradientHeader: 'from-red-500/10 to-orange-500/10',
    hoverBorderColor: 'hover:border-red-500/50',
    buttonColor: 'bg-red-500 hover:bg-red-600',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    iconColor: 'text-red-600 dark:text-red-400',
    steps: [
      {
        command: '/debug',
        typeLabel: 'Investigate the issue (skill)',
        description: 'AI analyzes your code to find the root cause of the problem',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/fix',
        typeLabel: 'Apply the fix (skill)',
        description: 'AI intelligently routes to specialized fix and applies the solution',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/test',
        typeLabel: 'Verify the fix',
        description: 'Run tests to make sure the bug is fixed and nothing else broke',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3
      }
    ],
    tip: '💡 /debug & /fix skills: intelligent routing with flags --auto, --review, --quick, --parallel',
    fixFlags: [
      { flag: '--auto', desc: 'Autonomous mode (default)', color: 'green' },
      { flag: '--review', desc: 'Human-in-the-loop mode', color: 'amber' },
      { flag: '--quick', desc: 'Fast fix for trivial bugs', color: 'purple' },
      { flag: '--parallel', desc: 'Parallel fullstack agents', color: 'blue' }
    ],
    fixMappings: [
      { old: '/fix:fast', new: '/fix --quick', desc: 'Quick mode for trivial bugs' },
      { old: '/fix:hard', new: '/fix --review', desc: 'Human-in-the-loop mode' },
      { old: '/fix:parallel', new: '/fix --parallel', desc: 'Parallel fullstack agents' }
    ],
    borderColor: 'border-red-500/20'
  },
  {
    title: 'Quick Implementation',
    level: 'Intermediate',
    duration: '~10-20 min',
    stepCount: 1,
    bestFor: 'Small features when you know what you want',
    gradientHeader: 'from-blue-500/10 to-cyan-500/10',
    hoverBorderColor: 'hover:border-blue-500/50',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
    icon: '<path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/>',
    iconColor: 'text-blue-600 dark:text-blue-400',
    steps: [
      {
        command: '/cook "your task"',
        typeLabel: 'All-in-one skill',
        description: 'AI researches, plans, implements, tests, and reviews the feature automatically',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 1,
        isSkill: true
      }
    ],
    tip: '💡 See mapping table above for migrating from legacy variants. --interactive is default, uses native Claude Tasks API.',
    cookMappings: [
      { old: '/cook:auto', new: '/cook --auto', desc: 'Auto-approve all steps' },
      { old: '/cook:auto:fast', new: '/cook --auto --fast', desc: 'Fast + auto-approve' },
      { old: '/cook:auto:parallel', new: '/cook --auto --parallel', desc: 'Parallel phases + auto' },
      { old: '/code:no-test', new: '/cook --no-test', desc: 'Skip test runs' },
      { old: '/code:parallel', new: '/cook --parallel', desc: 'Run phases in parallel' }
    ],
    features: [
      'Research best approaches and technologies',
      'Create and execute implementation plan',
      'Write and test the code',
      'Review for quality and best practices'
    ],
    borderColor: 'border-blue-500/20'
  },
  {
    title: 'Start New Project',
    level: 'Advanced',
    duration: '~1-2 hours',
    stepCount: 1,
    bestFor: 'Creating a complete app from scratch',
    gradientHeader: 'from-green-500/10 to-emerald-500/10',
    hoverBorderColor: 'hover:border-green-500/50',
    buttonColor: 'bg-green-500 hover:bg-green-600',
    icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
    iconColor: 'text-green-600 dark:text-green-400',
    steps: [
      {
        command: '/bootstrap "describe your app"',
        typeLabel: 'Complete project setup',
        description: 'AI builds your entire project: research, architecture, design, implementation, and documentation',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 1
      }
    ],
    tip: '⚠️ Warning: This uses significant AI tokens',
    features: [
      'Research and tech stack selection',
      'Project structure and architecture',
      'UI/UX design and wireframes',
      'Complete implementation with tests',
      'Comprehensive documentation'
    ],
    borderColor: 'border-green-500/20'
  },
  {
    title: 'Create Video Content',
    level: 'Intermediate',
    duration: '~20-40 min',
    stepCount: 2,
    bestFor: 'Programmatic video creation with React',
    gradientHeader: 'from-pink-500/10 to-rose-500/10',
    hoverBorderColor: 'hover:border-pink-500/50',
    buttonColor: 'bg-pink-500 hover:bg-pink-600',
    icon: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>',
    iconColor: 'text-pink-600 dark:text-pink-400',
    steps: [
      {
        command: '/remotion',
        typeLabel: 'Video creation (skill)',
        description: 'Create videos programmatically with React and Remotion',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 1,
        isSkill: true
      },
      {
        command: 'render',
        typeLabel: 'Render output',
        description: 'Export to MP4, GIF, or image sequences',
        color: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
        number: 2
      }
    ],
    tip: '💡 Replaces /design:video command',
    features: [
      'Animations and transitions',
      'Text animations and captions',
      '3D graphics integration',
      'Audio synchronization'
    ],
    borderColor: 'border-pink-500/20'
  },
  {
    title: 'Visual Documentation',
    level: 'Beginner',
    duration: '~10-20 min',
    stepCount: 3,
    bestFor: 'Creating visual explanations and diagrams for your plan',
    gradientHeader: 'from-indigo-500/10 to-violet-500/10',
    hoverBorderColor: 'hover:border-indigo-500/50',
    buttonColor: 'bg-indigo-500 hover:bg-indigo-600',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    steps: [
      {
        command: '/plan',
        typeLabel: 'Create plan first',
        description: 'Create a structured plan — visuals are saved into the plan directory',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 1
      },
      {
        command: '/preview --explain "topic"',
        typeLabel: 'Generate explanation (skill)',
        description: 'Create ASCII + Mermaid diagrams with prose explanation for your topic',
        color: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/preview --diagram "topic"',
        typeLabel: 'Generate focused diagram (skill)',
        description: 'Create a focused Mermaid + ASCII diagram for a specific data flow or architecture',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 3,
        isSkill: true
      }
    ],
    featureCommand: '/preview',
    tip: '💡 /preview generates visual content. Also: --slides, --ascii',
    features: [
      'ASCII + Mermaid diagrams (--explain)',
      'Presentation format (--slides)',
      'Focused diagrams (--diagram)',
      'Terminal-friendly output (--ascii)'
    ],
    borderColor: 'border-indigo-500/20'
  },
  {
    title: 'Code Review with Edge Cases',
    level: 'Intermediate',
    duration: '~20-30 min',
    stepCount: 4,
    bestFor: 'Thorough code review with edge case scouting',
    gradientHeader: 'from-emerald-500/10 to-teal-500/10',
    hoverBorderColor: 'hover:border-emerald-500/50',
    buttonColor: 'bg-emerald-500 hover:bg-emerald-600',
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    steps: [
      {
        command: '/cook @plan.md',
        typeLabel: 'Implement the plan (skill)',
        description: 'AI writes the code following the plan with auto test & review cycles',
        color: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/scout',
        typeLabel: 'Scout edge cases (skill)',
        description: 'AI scouts affected files, data flows, error paths, and boundary conditions',
        color: 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400',
        number: 2,
        isSkill: true
      },
      {
        typeLabel: 'Code-reviewer review',
        description: 'Code-reviewer subagent reviews findings from scout and evaluates code quality',
        color: 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
      },
      {
        command: '/git cm',
        typeLabel: 'Merge & commit',
        description: 'Commit the reviewed code with conventional commit message',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4
      }
    ],
    featureCommand: '/scout',
    tip: '💡 /scout integrates with code-reviewer for edge case detection before review',
    features: [
      'Edge case detection via /scout',
      'Boundary condition analysis',
      'Data flow & error path scouting',
      'Automated code-reviewer integration'
    ],
    borderColor: 'border-emerald-500/20'
  },
  {
    title: 'Plan + Validate + Implement',
    level: 'Intermediate',
    duration: '~20-40 min',
    stepCount: 4,
    bestFor: 'Validated plans with auto-propagated decisions',
    gradientHeader: 'from-sky-500/10 to-blue-500/10',
    hoverBorderColor: 'hover:border-sky-500/50',
    buttonColor: 'bg-sky-500 hover:bg-sky-600',
    icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    iconColor: 'text-sky-600 dark:text-sky-400',
    steps: [
      {
        command: '/plan',
        typeLabel: 'Create plan',
        description: 'AI creates a detailed implementation plan with phases',
        color: 'bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400',
        number: 1
      },
      {
        command: '/plan:validate',
        typeLabel: 'Validate plan decisions',
        description: 'Interview-style validation gate. Decisions auto-propagate to phase files',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 2
      },
      {
        typeLabel: '/clear (mandatory)',
        description: 'Free context before implementation — mandatory',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>'
      },
      {
        command: '/cook @plan.md',
        typeLabel: 'Implement validated plan (skill)',
        description: 'AI implements with validated decisions already propagated to each phase',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4,
        isSkill: true
      }
    ],
    featureCommand: '/plan:validate',
    tip: '💡 /plan:validate decisions auto-propagate to phase files — no manual updates needed',
    features: [
      'Interview-style plan validation',
      'Auto-propagation to phase files',
      'Validated decisions guide implementation',
      'Reduced rework from unclear plan decisions'
    ],
    borderColor: 'border-sky-500/20'
  },
  {
    title: 'Agent Teams (Parallel)',
    level: 'Advanced',
    duration: '~30-60 min',
    stepCount: 2,
    bestFor: 'Large tasks with multiple parallel agents',
    gradientHeader: 'from-cyan-500/10 to-teal-500/10',
    hoverBorderColor: 'hover:border-cyan-500/50',
    buttonColor: 'bg-cyan-500 hover:bg-cyan-600',
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    steps: [
      {
        command: '/plan --hard "feature"',
        typeLabel: 'Create plan with phases',
        description: 'Create a detailed plan with parallelizable phases for team execution',
        color: 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400',
        number: 1
      },
      {
        command: '/team cook @plan',
        typeLabel: 'Parallel team execution (skill)',
        description: 'Spawn parallel dev agents, each handling a phase. Auto test → review → merge',
        color: 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400',
        number: 2,
        isSkill: true
      }
    ],
    tip: '⚠️ Requires CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 in settings.json.',
    features: [
      'Parallel dev agents (--devs N)',
      'Auto test → review → merge pipeline',
      'Event-driven hooks + agent memory',
      'Also: /team research, /team review, /team debug'
    ],
    borderColor: 'border-cyan-500/20'
  },
  {
    title: 'Adversarial Plan Review',
    level: 'Advanced',
    duration: '~10-20 min',
    stepCount: 2,
    bestFor: 'Finding flaws in plans before implementation',
    gradientHeader: 'from-amber-500/10 to-red-500/10',
    hoverBorderColor: 'hover:border-amber-500/50',
    buttonColor: 'bg-amber-500 hover:bg-amber-600',
    icon: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    iconColor: 'text-amber-600 dark:text-amber-400',
    steps: [
      {
        command: '/plan --hard "feature"',
        typeLabel: 'Create plan',
        description: 'Create a detailed plan. Hard/parallel/two modes auto-run red-team after creation',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 1
      },
      {
        command: '/plan:red-team plans/',
        typeLabel: 'Adversarial review (skill)',
        description: 'Spawn hostile reviewers: Security, Failure Mode, Assumption Destroyer, Scope Critic',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 2,
        isSkill: true
      }
    ],
    tip: '💡 Auto-scales reviewers based on plan complexity (2-4 adversarial lenses)',
    features: [
      'Security Adversary (auth bypass, injection, OWASP)',
      'Failure Mode Analyst (race conditions, data loss)',
      'Assumption Destroyer (unstated deps, false claims)',
      'Scope & Complexity Critic (over-engineering, YAGNI)'
    ],
    borderColor: 'border-amber-500/20'
  }
];

// Beta workflows - superset of stable + new skills (deploy, security-scan, llms, project-organization)
export const betaWorkflows = [
  ...stableWorkflows,
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

// Legacy v2.4.x workflows - kept in source for reference, NOT rendered
// These use old command syntax: /code, /git:cm, /design:screenshot, /fix:types
export const legacyWorkflows = [
  {
    title: 'Build a New Feature',
    level: 'Beginner',
    duration: '~15-30 min',
    stepCount: 4,
    bestFor: 'Adding new functionality to your app',
    gradientHeader: 'from-purple-500/10 to-blue-500/10',
    hoverBorderColor: 'hover:border-purple-500/50',
    buttonColor: 'bg-purple-500 hover:bg-purple-600',
    icon: '<path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/>',
    iconColor: 'text-purple-600 dark:text-purple-400',
    steps: [
      {
        command: '/brainstorm',
        typeLabel: 'Explore ideas (command)',
        description: 'Run /brainstorm "feature idea" to explore possibilities',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 1
      },
      {
        command: '/plan',
        typeLabel: 'Create implementation plan',
        description: 'AI creates a detailed step-by-step plan for building your feature',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 2
      },
      {
        typeLabel: 'Review → Implement',
        description: 'Review plan and proceed to implementation',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
      },
      {
        command: '/code @plan.md',
        typeLabel: 'Implement the plan',
        description: 'AI writes the code following the plan, runs tests, and reviews the work',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4
      }
    ],
    tip: '💡 Tip: /code @plan.md reads and implements your plan',
    borderColor: 'border-purple-500/20'
  },
  {
    title: 'Fix a Bug',
    level: 'Beginner',
    duration: '~5-15 min',
    stepCount: 3,
    bestFor: 'Fixing errors and unexpected behavior',
    gradientHeader: 'from-red-500/10 to-orange-500/10',
    hoverBorderColor: 'hover:border-red-500/50',
    buttonColor: 'bg-red-500 hover:bg-red-600',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    iconColor: 'text-red-600 dark:text-red-400',
    steps: [
      {
        command: '/debug',
        typeLabel: 'Investigate the issue',
        description: 'AI analyzes your code to find the root cause of the problem',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 1
      },
      {
        command: '/fix',
        typeLabel: 'Apply the fix',
        description: 'AI fixes the bug and explains what was wrong and how it was fixed',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 2
      },
      {
        command: '/test',
        typeLabel: 'Verify the fix',
        description: 'Run tests to make sure the bug is fixed and nothing else broke',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3
      }
    ],
    tip: '💡 Tip: Use /fix:types, /fix:ui, /fix:ci for specialized fixes',
    borderColor: 'border-red-500/20'
  },
  {
    title: 'Quick Implementation',
    level: 'Intermediate',
    duration: '~10-20 min',
    stepCount: 1,
    bestFor: 'Small features when you know what you want',
    gradientHeader: 'from-blue-500/10 to-cyan-500/10',
    hoverBorderColor: 'hover:border-blue-500/50',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
    icon: '<path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/>',
    iconColor: 'text-blue-600 dark:text-blue-400',
    steps: [
      {
        command: '/cook "your task"',
        typeLabel: 'All-in-one command',
        description: 'AI researches, plans, implements, tests, and reviews the feature automatically',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 1
      }
    ],
    tip: '💡 See variants table below for different execution modes',
    cookVariants: [
      { command: '/cook', desc: 'Full workflow: research, plan, implement, test, review' },
      { command: '/cook:auto', desc: 'Auto-approve all steps without prompts' },
      { command: '/cook:auto:fast', desc: 'Skip research phase, fast implementation' },
      { command: '/cook:auto:parallel', desc: 'Run implementation phases in parallel' },
      { command: '/code:no-test', desc: 'Skip running tests after coding' },
      { command: '/code:parallel', desc: 'Execute plan phases in parallel' }
    ],
    features: [
      'Research best approaches and technologies',
      'Create and execute implementation plan',
      'Write and test the code',
      'Review for quality and best practices'
    ],
    borderColor: 'border-blue-500/20'
  },
  {
    title: 'Start New Project',
    level: 'Advanced',
    duration: '~1-2 hours',
    stepCount: 1,
    bestFor: 'Creating a complete app from scratch',
    gradientHeader: 'from-green-500/10 to-emerald-500/10',
    hoverBorderColor: 'hover:border-green-500/50',
    buttonColor: 'bg-green-500 hover:bg-green-600',
    icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
    iconColor: 'text-green-600 dark:text-green-400',
    steps: [
      {
        command: '/bootstrap "describe your app"',
        typeLabel: 'Complete project setup',
        description: 'AI builds your entire project: research, architecture, design, implementation, and documentation',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 1
      }
    ],
    tip: '⚠️ Warning: This uses significant AI tokens',
    features: [
      'Research and tech stack selection',
      'Project structure and architecture',
      'UI/UX design and wireframes',
      'Complete implementation with tests',
      'Comprehensive documentation'
    ],
    borderColor: 'border-green-500/20'
  },
  {
    title: 'Design from Screenshot',
    level: 'Intermediate',
    duration: '~15-25 min',
    stepCount: 2,
    bestFor: 'Recreating UI from designs or screenshots',
    gradientHeader: 'from-pink-500/10 to-rose-500/10',
    hoverBorderColor: 'hover:border-pink-500/50',
    buttonColor: 'bg-pink-500 hover:bg-pink-600',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    iconColor: 'text-pink-600 dark:text-pink-400',
    steps: [
      {
        command: '/design:screenshot',
        typeLabel: 'Analyze design',
        description: 'AI analyzes the screenshot and understands the UI components',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 1
      },
      {
        command: '/code',
        typeLabel: 'Implement design',
        description: 'AI generates the code matching the design',
        color: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
        number: 2
      }
    ],
    tip: '💡 Tip: Provide high-quality screenshots for better results',
    borderColor: 'border-pink-500/20'
  }
];

// Legacy export for backwards compatibility
export const workflows = legacyWorkflows;

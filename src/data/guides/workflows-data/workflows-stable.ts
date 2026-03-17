// v2.14.0 Stable workflows - skill-based approach with /ck: prefix
// /ck:cook uses native Claude Tasks, /ck:fix supports flags
export const stableWorkflows = [
  {
    title: 'Build a New Feature',
    category: 'Getting Started',
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
        command: '/ck:brainstorm',
        typeLabel: 'Explore ideas (skill)',
        description: 'Use /ck:brainstorm or say "brainstorm ideas for [feature]" to explore possibilities',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/ck:plan',
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
        command: '/ck:cook @plan.md',
        typeLabel: 'Implement the plan (skill)',
        description: 'AI writes the code following the plan, runs tests, and reviews the work',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4,
        isSkill: true
      }
    ],
    tip: '/clear is mandatory after /ck:plan before /ck:cook',
    borderColor: 'border-purple-500/20'
  },
  {
    title: 'Fix a Bug',
    category: 'Debugging & Fixes',
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
        command: '/ck:debug',
        typeLabel: 'Investigate the issue (skill)',
        description: 'AI analyzes your code to find the root cause of the problem',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/ck:fix',
        typeLabel: 'Apply the fix (skill)',
        description: 'AI intelligently routes to specialized fix and applies the solution',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/ck:test',
        typeLabel: 'Verify the fix',
        description: 'Run tests to make sure the bug is fixed and nothing else broke',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3
      }
    ],
    tip: '/ck:debug & /ck:fix: intelligent routing with flags --auto, --review, --quick, --parallel',
    fixFlags: [
      { flag: '--auto', desc: 'Auto-apply fix without confirmation', color: 'green' },
      { flag: '--review', desc: 'Review fix before applying', color: 'purple' },
      { flag: '--quick', desc: 'Fast fix without deep analysis', color: 'orange' },
      { flag: '--parallel', desc: 'Fix multiple issues in parallel', color: 'blue' }
    ],
    borderColor: 'border-red-500/20'
  },
  {
    title: 'Quick Implementation',
    category: 'Getting Started',
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
        command: '/ck:cook "your task"',
        typeLabel: 'All-in-one skill',
        description: 'AI researches, plans, implements, tests, and reviews the feature automatically',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 1,
        isSkill: true
      }
    ],
    tip: '--interactive is default, uses native Claude Tasks API.',
    cookFlags: [
      { flag: '--interactive', desc: 'Step-by-step with approval (default)', color: 'teal' },
      { flag: '--fast', desc: 'Skip research, quick implementation', color: 'purple' },
      { flag: '--parallel', desc: 'Run phases in parallel', color: 'blue' },
      { flag: '--auto', desc: 'Auto-approve all steps', color: 'green' },
      { flag: '--no-test', desc: 'Skip test runs after coding', color: 'orange' }
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
    category: 'Getting Started',
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
        command: '/ck:bootstrap "describe your app"',
        typeLabel: 'Complete project setup',
        description: 'AI builds your entire project: research, architecture, design, implementation, and documentation',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 1
      }
    ],
    tip: 'Warning: This uses significant AI tokens',
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
    category: 'Media & Creative',
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
        command: '/ck:remotion',
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
    tip: 'Creates React-based video compositions',
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
    category: 'Research & Docs',
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
        command: '/ck:plan',
        typeLabel: 'Create plan first',
        description: 'Create a structured plan. Visuals are saved into the plan directory',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 1
      },
      {
        command: '/ck:preview --explain "topic"',
        typeLabel: 'Generate explanation (skill)',
        description: 'Create ASCII + Mermaid diagrams with prose explanation for your topic',
        color: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/ck:preview --diagram "topic"',
        typeLabel: 'Generate focused diagram (skill)',
        description: 'Create a focused Mermaid + ASCII diagram for a specific data flow or architecture',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 3,
        isSkill: true
      }
    ],
    featureCommand: '/ck:preview',
    tip: '/ck:preview generates visual content. Also: --slides, --ascii',
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
    category: 'Planning & Review',
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
        command: '/ck:cook @plan.md',
        typeLabel: 'Implement the plan (skill)',
        description: 'AI writes the code following the plan with auto test & review cycles',
        color: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/ck:scout',
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
        command: '/ck:git cm',
        typeLabel: 'Merge & commit',
        description: 'Commit the reviewed code with conventional commit message',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4
      }
    ],
    featureCommand: '/ck:scout',
    tip: '/ck:scout integrates with code-reviewer for edge case detection before review',
    features: [
      'Edge case detection via /ck:scout',
      'Boundary condition analysis',
      'Data flow & error path scouting',
      'Automated code-reviewer integration'
    ],
    borderColor: 'border-emerald-500/20'
  },
  {
    title: 'Plan + Validate + Implement',
    category: 'Planning & Review',
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
        command: '/ck:plan',
        typeLabel: 'Create plan',
        description: 'AI creates a detailed implementation plan with phases',
        color: 'bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400',
        number: 1
      },
      {
        command: '/ck:plan validate',
        typeLabel: 'Validate plan decisions',
        description: 'Interview-style validation gate. Decisions auto-propagate to phase files',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 2
      },
      {
        typeLabel: '/clear (mandatory)',
        description: 'Free context before implementation. Mandatory step',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>'
      },
      {
        command: '/ck:cook @plan.md',
        typeLabel: 'Implement validated plan (skill)',
        description: 'AI implements with validated decisions already propagated to each phase',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4,
        isSkill: true
      }
    ],
    featureCommand: '/ck:plan validate',
    tip: '/ck:plan validate decisions auto-propagate to phase files',
    planFlags: [
      { flag: '--hard', desc: 'Complex multi-phase plan with red-team review', color: 'red' },
      { flag: '--parallel', desc: 'Plan designed for parallel agent execution', color: 'blue' },
      { flag: '--two', desc: 'Two-phase plan (plan → implement)', color: 'teal' },
      { flag: 'validate', desc: 'Interview-style validation gate', color: 'purple' },
      { flag: 'red-team', desc: 'Spawn adversarial reviewers', color: 'orange' }
    ],
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
    category: 'Advanced',
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
        command: '/ck:plan --hard "feature"',
        typeLabel: 'Create plan with phases',
        description: 'Create a detailed plan with parallelizable phases for team execution',
        color: 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400',
        number: 1
      },
      {
        command: '/ck:team cook @plan',
        typeLabel: 'Parallel team execution (skill)',
        description: 'Spawn parallel dev agents, each handling a phase. Auto test → review → merge',
        color: 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400',
        number: 2,
        isSkill: true
      }
    ],
    tip: 'Requires CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 in settings.json',
    teamFlags: [
      { flag: '--devs N', desc: 'Number of parallel dev agents (default: 2)', color: 'cyan' },
      { flag: '--tester', desc: 'Include dedicated tester agent', color: 'green' },
      { flag: '--reviewer', desc: 'Include code reviewer agent', color: 'purple' },
      { flag: '--worktree', desc: 'Run each agent in isolated git worktree', color: 'blue' }
    ],
    features: [
      'Parallel dev agents (--devs N)',
      'Auto test → review → merge pipeline',
      'Event-driven hooks + agent memory',
      'Also: /ck:team research, /ck:team review, /ck:team debug'
    ],
    borderColor: 'border-cyan-500/20'
  },
  {
    title: 'Adversarial Plan Review',
    category: 'Planning & Review',
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
        command: '/ck:plan --hard "feature"',
        typeLabel: 'Create plan',
        description: 'Create a detailed plan. Hard/parallel/two modes auto-run red-team after creation',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 1
      },
      {
        command: '/ck:plan red-team plans/',
        typeLabel: 'Adversarial review (skill)',
        description: 'Spawn hostile reviewers: Security, Failure Mode, Assumption Destroyer, Scope Critic',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 2,
        isSkill: true
      }
    ],
    tip: 'Auto-scales reviewers based on plan complexity (2-4 adversarial lenses)',
    features: [
      'Security Adversary (auth bypass, injection, OWASP)',
      'Failure Mode Analyst (race conditions, data loss)',
      'Assumption Destroyer (unstated deps, false claims)',
      'Scope & Complexity Critic (over-engineering, YAGNI)'
    ],
    borderColor: 'border-amber-500/20'
  },
  {
    title: 'Research & Documentation',
    category: 'Research & Docs',
    level: 'Beginner',
    duration: '~10-20 min',
    stepCount: 3,
    bestFor: 'Research topics and create technical documentation',
    gradientHeader: 'from-orange-500/10 to-yellow-500/10',
    hoverBorderColor: 'hover:border-orange-500/50',
    buttonColor: 'bg-orange-500 hover:bg-orange-600',
    icon: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    iconColor: 'text-orange-600 dark:text-orange-400',
    steps: [
      {
        command: '/ck:research "topic"',
        typeLabel: 'Deep research (skill)',
        description: 'AI researches the topic thoroughly using web search and documentation',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/ck:docs-seeker "library"',
        typeLabel: 'Search library docs (skill)',
        description: 'Search official documentation via llms.txt for up-to-date API info',
        color: 'bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/ck:docs',
        typeLabel: 'Generate project docs',
        description: 'Create or update project documentation based on codebase analysis',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 3,
        isSkill: true
      }
    ],
    featureCommand: '/ck:research',
    tip: '/ck:docs-seeker uses context7 for latest library documentation',
    features: [
      'Web search and synthesis',
      'Library documentation lookup',
      'Project documentation generation',
      'Technical writing assistance'
    ],
    borderColor: 'border-orange-500/20'
  },
  {
    title: 'Security Audit',
    category: 'Debugging & Fixes',
    level: 'Intermediate',
    duration: '~15-25 min',
    stepCount: 3,
    bestFor: 'Finding security vulnerabilities and secrets',
    gradientHeader: 'from-rose-500/10 to-red-500/10',
    hoverBorderColor: 'hover:border-rose-500/50',
    buttonColor: 'bg-rose-500 hover:bg-rose-600',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
    iconColor: 'text-rose-600 dark:text-rose-400',
    steps: [
      {
        command: '/ck:security-scan',
        typeLabel: 'Scan for vulnerabilities (skill)',
        description: 'Scan codebase for OWASP issues, hardcoded secrets, and dependency vulnerabilities',
        color: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
        number: 1,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ck:code-review --security',
        typeLabel: 'Security-focused review',
        description: 'Deep code review focusing on authentication, authorization, and data handling',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/ck:fix --security',
        typeLabel: 'Apply security fixes',
        description: 'AI applies recommended security fixes with detailed explanations',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3,
        isSkill: true
      }
    ],
    featureCommand: '/ck:security-scan',
    tip: 'Detects SQL injection, XSS, CSRF, and other OWASP Top 10 issues',
    features: [
      'Hardcoded secrets detection',
      'Dependency vulnerability scan',
      'OWASP Top 10 coverage',
      'Security fix recommendations'
    ],
    borderColor: 'border-rose-500/20'
  },
  {
    title: 'Database Operations',
    category: 'Backend & Infra',
    level: 'Intermediate',
    duration: '~15-30 min',
    stepCount: 3,
    bestFor: 'Database schema design and migrations',
    gradientHeader: 'from-violet-500/10 to-purple-500/10',
    hoverBorderColor: 'hover:border-violet-500/50',
    buttonColor: 'bg-violet-500 hover:bg-violet-600',
    icon: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
    iconColor: 'text-violet-600 dark:text-violet-400',
    steps: [
      {
        command: '/ck:databases "schema design"',
        typeLabel: 'Design schema (skill)',
        description: 'Design database schema with relationships, indexes, and constraints',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/ck:plan "migration"',
        typeLabel: 'Plan migration',
        description: 'Create a safe migration plan with rollback strategy',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 2
      },
      {
        command: '/ck:cook @plan.md',
        typeLabel: 'Execute migration',
        description: 'Implement migration with proper error handling and validation',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3,
        isSkill: true
      }
    ],
    featureCommand: '/ck:databases',
    tip: 'Supports MongoDB, PostgreSQL, MySQL, and SQLite',
    features: [
      'Schema design with relationships',
      'Index optimization',
      'Migration script generation',
      'Query performance analysis'
    ],
    borderColor: 'border-violet-500/20'
  },
  {
    title: 'DevOps & Deployment',
    category: 'Shipping',
    level: 'Advanced',
    duration: '~20-40 min',
    stepCount: 3,
    bestFor: 'Setting up CI/CD and deployment pipelines',
    gradientHeader: 'from-slate-500/10 to-zinc-500/10',
    hoverBorderColor: 'hover:border-slate-500/50',
    buttonColor: 'bg-slate-500 hover:bg-slate-600',
    icon: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',
    iconColor: 'text-slate-600 dark:text-slate-400',
    steps: [
      {
        command: '/ck:devops "setup CI/CD"',
        typeLabel: 'Configure DevOps (skill)',
        description: 'Set up CI/CD pipelines for GitHub Actions, GitLab CI, or other platforms',
        color: 'bg-slate-500/10 dark:bg-slate-500/20 text-slate-600 dark:text-slate-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/ck:deploy',
        typeLabel: 'Deploy to platform (skill)',
        description: 'Deploy to Cloudflare, Vercel, GCP, or Kubernetes with auto-detection',
        color: 'bg-zinc-500/10 dark:bg-zinc-500/20 text-zinc-600 dark:text-zinc-400',
        number: 2,
        isSkill: true,
        isBeta: true
      },
      {
        command: '/ck:test --e2e',
        typeLabel: 'Run E2E tests',
        description: 'Verify deployment with end-to-end tests',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3
      }
    ],
    featureCommand: '/ck:devops',
    tip: 'Supports Docker, Kubernetes, serverless, and container deployments',
    features: [
      'CI/CD pipeline generation',
      'Multi-platform deployment',
      'Environment configuration',
      'Rollback and monitoring setup'
    ],
    borderColor: 'border-slate-500/20'
  }
];

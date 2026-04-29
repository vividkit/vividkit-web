// Stable workflows - skill-based approach with /ck: prefix
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
        typeLabel: 'Explore ideas',
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
        typeLabel: 'Implement the plan',
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
    duration: '~10-20 min',
    stepCount: 6,
    bestFor: 'Structured diagnosis and repair of bugs',
    gradientHeader: 'from-red-500/10 to-orange-500/10',
    hoverBorderColor: 'hover:border-red-500/50',
    buttonColor: 'bg-red-500 hover:bg-red-600',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    iconColor: 'text-red-600 dark:text-red-400',
    steps: [
      {
        command: '/ck:fix',
        typeLabel: '6-step pipeline',
        description: 'Runs the full pipeline: Scout → Diagnose → Assess → Fix → Verify → Prevent',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 1,
        isSkill: true
      },
      {
        typeLabel: '① Scout',
        description: 'Gather evidence — logs, stack traces, affected files',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 2,
        hasIcon: true,
        icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'
      },
      {
        typeLabel: '② Diagnose → ③ Assess',
        description: 'Root-cause analysis based on evidence, then severity/impact assessment',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
      },
      {
        typeLabel: '④ Fix',
        description: 'Apply targeted fix based on diagnosed root cause',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 4,
        hasIcon: true,
        icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'
      },
      {
        typeLabel: '⑤ Verify',
        description: 'Run tests to confirm fix works and no regressions',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 5,
        hasIcon: true,
        icon: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
      },
      {
        typeLabel: '⑥ Prevent',
        description: 'Add guards, tests, or documentation to prevent recurrence',
        color: 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400',
        number: 6,
        hasIcon: true,
        icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'
      }
    ],
    tip: '/ck:fix v2.0: evidence-based RCA, no guessing. Flags: --auto, --review, --quick, --parallel',
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
      { flag: '--no-test', desc: 'Skip test runs after coding', color: 'orange' },
      { flag: '--tdd', desc: 'Tests-first per phase, works with any other mode', color: 'cyan' }
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
        typeLabel: 'Video creation',
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
    duration: '~2-10 min',
    stepCount: 3,
    bestFor: 'Creating visual explanations, diagrams, and slide decks as Markdown or self-contained HTML',
    gradientHeader: 'from-indigo-500/10 to-violet-500/10',
    hoverBorderColor: 'hover:border-indigo-500/50',
    buttonColor: 'bg-indigo-500 hover:bg-indigo-600',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    steps: [
      {
        command: '/ck:preview --explain "topic"',
        typeLabel: 'Markdown explanation',
        description: 'Create ASCII + Mermaid diagrams with prose explanation (opens in novel-reader UI)',
        color: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/ck:preview --html --explain "topic"',
        typeLabel: 'HTML explanation',
        description: 'Self-contained HTML with theme toggle, Mermaid v11, and Chart.js — opens directly in browser',
        color: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/ck:preview --html --slides "topic"',
        typeLabel: 'HTML slide deck',
        description: 'Magazine-quality presentation slides as self-contained HTML',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 3,
        isSkill: true
      }
    ],
    featureCommand: '/ck:preview',
    tip: 'Add --html to any mode for publication-quality HTML output. Also: --diagram, --diff, --plan-review, --recap',
    features: [
      'Markdown modes: --explain, --slides, --diagram, --ascii',
      'HTML modes: --html --explain, --html --slides, --html --diagram',
      'HTML-only: --diff, --plan-review, --recap',
      'Theme toggle (light/dark) in every HTML page',
      'Mermaid v11 diagrams + Chart.js data visualizations'
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
        typeLabel: 'Implement the plan',
        description: 'AI writes the code following the plan with auto test & review cycles',
        color: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/ck:scout',
        typeLabel: 'Scout edge cases',
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
        typeLabel: 'Implement validated plan',
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
      { flag: '--deep', desc: 'Deep analysis: file inventory, test scenarios, dependency map per phase', color: 'indigo' },
      { flag: '--parallel', desc: 'Plan designed for parallel agent execution', color: 'blue' },
      { flag: '--two', desc: 'Two-phase plan (plan → implement)', color: 'teal' },
      { flag: '--tdd', desc: 'Tests-first per phase, works with any other flag', color: 'cyan' },
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
        typeLabel: 'Parallel team execution',
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
        typeLabel: 'Adversarial review',
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
        typeLabel: 'Deep research',
        description: 'AI researches the topic thoroughly using web search and documentation',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/ck:docs-seeker "library"',
        typeLabel: 'Search library docs',
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
        typeLabel: 'Scan for vulnerabilities',
        description: 'Scan codebase for OWASP issues, hardcoded secrets, and dependency vulnerabilities',
        color: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
        number: 1,
        isSkill: true
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
        typeLabel: 'Design schema',
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
        typeLabel: 'Configure DevOps',
        description: 'Set up CI/CD pipelines for GitHub Actions, GitLab CI, or other platforms',
        color: 'bg-slate-500/10 dark:bg-slate-500/20 text-slate-600 dark:text-slate-400',
        number: 1,
        isSkill: true
      },
      {
        command: '/ck:deploy',
        typeLabel: 'Deploy to platform',
        description: 'Deploy to Cloudflare, Vercel, GCP, or Kubernetes with auto-detection',
        color: 'bg-zinc-500/10 dark:bg-zinc-500/20 text-zinc-600 dark:text-zinc-400',
        number: 2,
        isSkill: true
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
  },
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
        typeLabel: 'Ship pipeline',
        description: 'Merge main, run tests, pre-landing review, bump version, update changelog, push, create PR',
        color: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
        number: 1,
        isSkill: true
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
        typeLabel: 'Auto-deploy',
        description: 'AI detects your project type and deploys to 15+ platforms with zero manual config',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 1,
        isSkill: true
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
    title: 'Isolated Feature Branching',
    category: 'Advanced',
    level: 'Intermediate',
    duration: '~2-5 min',
    stepCount: 3,
    bestFor: 'Parallel development in monorepos using git worktrees',
    gradientHeader: 'from-orange-500/10 to-amber-500/10',
    hoverBorderColor: 'hover:border-orange-500/50',
    buttonColor: 'bg-orange-500 hover:bg-orange-600',
    icon: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3zm-6 3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3 3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zM6 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3 3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3z"/>',
    iconColor: 'text-orange-600 dark:text-orange-400',
    steps: [
      {
        command: '/ck:worktree info',
        typeLabel: 'Step 1: Get Repo Info',
        description: 'Parse repo type, base branch, and existing projects',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 1,
        isSkill: true
      },
      {
        typeLabel: 'Step 2: Detect Branch Naming Mode',
        description: 'Detect conventional prefix or use --no-prefix for exact Jira keys',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 2
      },
      {
        typeLabel: 'Step 3: Convert to Slug',
        description: 'Format branch name to kebab-case (skipped if --no-prefix is active)',
        color: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
        number: 3,
        hasIcon: true,
        icon: '<path d="M16 3h5v5M4 20L21 3M4 14l7 7M14 4l7 7"/>'
      }
    ],
    featureCommand: '/ck:worktree',
    tip: 'Use --no-prefix to preserve exact branch names for Jira keys (like ND-1377-cleanup-docs).',
    features: [
      'Isolated git worktrees per feature',
      'Preserve exact issue keys (--no-prefix)',
      'Auto-detect branch prefix conventions',
      'Monorepo project scoping support'
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
        typeLabel: 'Generate index',
        description: 'Create llms.txt following llmstxt.org spec — makes your docs AI-readable',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 1,
        isSkill: true
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
        isSkill: true
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
    title: 'Publication Diagrams (tech-graph)',
    category: 'Design & Frontend',
    level: 'Intermediate',
    duration: '~5-15 min',
    stepCount: 1,
    isBeta: true,
    bestFor: 'Generating publication-quality SVG diagrams for docs, slides, blog posts',
    gradientHeader: 'from-purple-500/10 to-fuchsia-500/10',
    hoverBorderColor: 'hover:border-purple-500/50',
    buttonColor: 'bg-purple-500 hover:bg-purple-600',
    icon: '<path d="M3 3h7v7H3z"/><path d="M14 3h7v7h-7z"/><path d="M14 14h7v7h-7z"/><path d="M3 14h7v7H3z"/>',
    iconColor: 'text-purple-600 dark:text-purple-400',
    steps: [
      {
        command: '/ck:tech-graph "<topic or system>"',
        typeLabel: 'Generate SVG diagram',
        description: 'Render publication-grade SVG with 7 design styles (modern, minimal, neon, retro, etc.) and 10 templates (architecture, sequence, ER, flowchart, state-machine, timeline, comparison-matrix, use-case, agent-architecture, data-flow)',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 1,
        isSkill: true
      }
    ],
    tip: 'Pair with /ck:preview --diagram for visual self-review (auto-detects collisions, label overlaps, arrow routing issues)',
    features: [
      '7 design styles: flat-icon, dark-terminal, blueprint, notion-clean, glassmorphism, claude-official, openai',
      '10 diagram templates incl. agent-architecture and data-flow',
      'SVG layout best-practices baked in (spacing, arrow routing, z-index)',
      'Output ready for docs/slides/blog without manual cleanup'
    ],
    borderColor: 'border-purple-500/20'
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
        isSkill: true
      },
      {
        command: '/ck:xia <repo> [feature] --improve',
        typeLabel: 'Port & refactor',
        description: 'Copy feature from source and refactor to fit local codebase patterns',
        color: 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400',
        number: 2,
        isSkill: true
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
        isSkill: true
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
        isSkill: true
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
        isSkill: true
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
  },
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
        isSkill: true
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
        isSkill: true
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
        isSkill: true
      }
    ],
    tip: 'Combine with /ck:security-scan for comprehensive vulnerability + threat coverage',
    features: [
      'STRIDE threat modeling framework',
      'OWASP vulnerability pattern matching',
      'Severity categorization and prioritization',
      'Optional iterative auto-fix using /ck:loop pattern'
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
  }
];

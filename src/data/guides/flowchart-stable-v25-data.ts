// Stable v2.5.0+ flowchart data - skill-based commands (/git skill, /worktree, separated Docs/Designs)
import { type FlowchartNode, type FlowchartEdge, type FlowchartPath, generatePath } from "./flowchart-types";

const stableNodes: FlowchartNode[] = [
  // Start node (centered)
  {
    id: 'start',
    type: 'start',
    label: '🎯 What do you want?',
    position: { x: 700, y: 50 }
  },

  // Level 1 - Main decision branches (8 categories for v2.5.0+)
  {
    id: 'new-project',
    type: 'decision',
    label: 'New project?',
    position: { x: 90, y: 160 }
  },
  {
    id: 'existing-project',
    type: 'decision',
    label: 'Join existing?',
    position: { x: 265, y: 160 }
  },
  {
    id: 'build-feature',
    type: 'decision',
    label: 'Build feature?',
    position: { x: 440, y: 160 }
  },
  {
    id: 'fix-something',
    type: 'decision',
    label: 'Fix something?',
    position: { x: 615, y: 160 }
  },
  {
    id: 'git-ops',
    type: 'decision',
    label: 'Git ops?',
    position: { x: 790, y: 160 }
  },
  {
    id: 'docs-design',
    type: 'decision',
    label: 'Docs?',
    position: { x: 900, y: 160 }
  },
  {
    id: 'designs',
    type: 'decision',
    label: 'Designs?',
    position: { x: 1060, y: 160 }
  },
  {
    id: 'need-help',
    type: 'decision',
    label: 'Need help?',
    position: { x: 1280, y: 160 }
  },

  // Level 2 - Sub-decisions
  {
    id: 'has-docs',
    type: 'decision',
    label: 'Has docs?',
    position: { x: 265, y: 280 }
  },
  {
    id: 'know-what',
    type: 'decision',
    label: 'Know what?',
    position: { x: 440, y: 280 }
  },
  {
    id: 'know-issue',
    type: 'decision',
    label: 'Know issue?',
    position: { x: 615, y: 280 }
  },
  {
    id: 'help-type',
    type: 'decision',
    label: 'What type?',
    position: { x: 1340, y: 280 }
  },

  // Level 3 - Sub-decisions
  {
    id: 'speed-safety',
    type: 'decision',
    label: 'Speed/Safety?',
    position: { x: 520, y: 400 }
  },

  // Command nodes - New Project
  {
    id: 'cmd-bootstrap',
    type: 'command',
    label: '/bootstrap',
    description: 'Full project initialization ⚡⚡⚡⚡⚡',
    position: { x: 90, y: 280 }
  },

  // Command nodes - Existing Project
  {
    id: 'cmd-docs-init',
    type: 'command',
    label: '/docs:init',
    description: 'Analyze codebase, create docs ⚡⚡⚡⚡',
    position: { x: 160, y: 400 }
  },
  {
    id: 'cmd-scout',
    type: 'command',
    label: '/scout',
    description: 'Explore codebase structure',
    position: { x: 270, y: 400 }
  },

  // Command nodes - Build Feature
  {
    id: 'cmd-brainstorm',
    type: 'command',
    label: '/brainstorm',
    description: 'Collaborative ideation ⚡⚡',
    position: { x: 380, y: 400 }
  },
  {
    id: 'cmd-cook',
    type: 'command',
    label: '/cook',
    description: 'All-in-one: research → implement ⚡⚡⚡',
    position: { x: 610, y: 600 }
  },
  {
    id: 'cmd-plan',
    type: 'command',
    label: '/plan',
    description: 'Create detailed plan ⚡⚡⚡',
    position: { x: 500, y: 520 }
  },
  {
    id: 'cmd-cook-plan',
    type: 'command',
    label: '/cook @plan.md',
    description: 'Implement plan step by step ⚡⚡⚡',
    position: { x: 500, y: 640 }
  },

  // Command nodes - Fix Something
  {
    id: 'cmd-debug',
    type: 'command',
    label: '/debug',
    description: 'Find root cause ⚡',
    position: { x: 720, y: 400 }
  },
  {
    id: 'cmd-fix',
    type: 'command',
    label: '/fix',
    description: 'Smart routing to fix commands ⚡⚡',
    position: { x: 650, y: 500 }
  },

  // Command nodes - Git Ops (v2.5.0+ uses /git skill)
  {
    id: 'cmd-git-skill',
    type: 'command',
    label: '/git',
    description: 'Support arguments: cm, cp, pr, merge',
    position: { x: 790, y: 280 }
  },
  {
    id: 'cmd-worktree',
    type: 'command',
    label: '/worktree',
    description: 'Create isolated worktree',
    position: { x: 870, y: 360 }
  },

  // Command nodes - Docs (v2.5.0+ separated)
  {
    id: 'cmd-docs',
    type: 'command',
    label: '/docs:*',
    description: 'Documentation commands',
    position: { x: 900, y: 280 }
  },

  // Command nodes - Designs (v2.5.0+ new separate category)
  {
    id: 'cmd-frontend-design',
    type: 'command',
    label: '/frontend-design',
    description: 'UI/UX design skill',
    position: { x: 990, y: 280 }
  },
  {
    id: 'cmd-remotion',
    type: 'command',
    label: '/remotion',
    description: 'Video design & animation',
    position: { x: 1100, y: 280 }
  },
  {
    id: 'cmd-threejs',
    type: 'command',
    label: '/threejs',
    description: '3D design & visualization',
    position: { x: 1100, y: 360 }
  },

  // Command nodes - Need Help
  {
    id: 'cmd-ck-help',
    type: 'command',
    label: '/ck-help',
    description: 'General ClaudeKit help',
    position: { x: 1170, y: 400 }
  },
  {
    id: 'cmd-ask',
    type: 'command',
    label: '/ask',
    description: 'Architectural advice',
    position: { x: 1280, y: 400 }
  },
  {
    id: 'cmd-coding-level',
    type: 'command',
    label: '/coding-level',
    description: 'Slow down explanations',
    position: { x: 1440, y: 400 }
  }
];

const stableEdges: FlowchartEdge[] = [
  // From start to level 1 decisions
  {
    id: 'e-start-new-project',
    from: 'start',
    to: 'new-project',
    path: generatePath({ x: 700, y: 50 }, { x: 90, y: 160 })
  },
  {
    id: 'e-start-existing-project',
    from: 'start',
    to: 'existing-project',
    path: generatePath({ x: 700, y: 50 }, { x: 265, y: 160 })
  },
  {
    id: 'e-start-build-feature',
    from: 'start',
    to: 'build-feature',
    path: generatePath({ x: 700, y: 50 }, { x: 440, y: 160 })
  },
  {
    id: 'e-start-fix-something',
    from: 'start',
    to: 'fix-something',
    path: generatePath({ x: 700, y: 50 }, { x: 615, y: 160 })
  },
  {
    id: 'e-start-git-ops',
    from: 'start',
    to: 'git-ops',
    path: generatePath({ x: 700, y: 50 }, { x: 790, y: 160 })
  },
  {
    id: 'e-start-docs-design',
    from: 'start',
    to: 'docs-design',
    path: generatePath({ x: 700, y: 50 }, { x: 900, y: 160 })
  },
  {
    id: 'e-start-designs',
    from: 'start',
    to: 'designs',
    path: generatePath({ x: 700, y: 50 }, { x: 1060, y: 160 })
  },
  {
    id: 'e-start-need-help',
    from: 'start',
    to: 'need-help',
    path: generatePath({ x: 700, y: 50 }, { x: 1280, y: 160 })
  },

  // New project branch
  {
    id: 'e-new-project-bootstrap',
    from: 'new-project',
    to: 'cmd-bootstrap',
    path: generatePath({ x: 90, y: 160 }, { x: 90, y: 280 })
  },

  // Existing project branch
  {
    id: 'e-existing-project-hasdocs',
    from: 'existing-project',
    to: 'has-docs',
    path: generatePath({ x: 265, y: 160 }, { x: 265, y: 280 })
  },
  {
    id: 'e-hasdocs-docsinit',
    from: 'has-docs',
    to: 'cmd-docs-init',
    label: 'No',
    path: generatePath({ x: 265, y: 280 }, { x: 160, y: 400 }),
    labelX: 195,
    labelY: 340
  },
  {
    id: 'e-hasdocs-scout',
    from: 'has-docs',
    to: 'cmd-scout',
    label: 'Yes',
    path: generatePath({ x: 265, y: 280 }, { x: 270, y: 400 }),
    labelX: 280,
    labelY: 340
  },

  // Build feature branch
  {
    id: 'e-build-feature-know',
    from: 'build-feature',
    to: 'know-what',
    path: generatePath({ x: 440, y: 160 }, { x: 440, y: 280 })
  },
  {
    id: 'e-know-brainstorm',
    from: 'know-what',
    to: 'cmd-brainstorm',
    label: 'No',
    path: generatePath({ x: 440, y: 280 }, { x: 380, y: 400 }),
    labelX: 390,
    labelY: 340
  },
  {
    id: 'e-brainstorm-plan',
    from: 'cmd-brainstorm',
    to: 'cmd-plan',
    label: 'Ready',
    path: generatePath({ x: 380, y: 400 }, { x: 500, y: 520 }),
    labelX: 440,
    labelY: 460
  },
  {
    id: 'e-know-speed-safety',
    from: 'know-what',
    to: 'speed-safety',
    label: 'Yes',
    path: generatePath({ x: 440, y: 280 }, { x: 520, y: 400 }),
    labelX: 495,
    labelY: 340
  },
  {
    id: 'e-speed-cook',
    from: 'speed-safety',
    to: 'cmd-cook',
    label: 'Speed',
    path: generatePath({ x: 520, y: 400 }, { x: 610, y: 600 }),
    labelX: 580,
    labelY: 500
  },
  {
    id: 'e-safety-plan',
    from: 'speed-safety',
    to: 'cmd-plan',
    label: 'Safety',
    path: generatePath({ x: 520, y: 400 }, { x: 500, y: 520 }),
    labelX: 525,
    labelY: 460
  },
  {
    id: 'e-plan-cook-plan',
    from: 'cmd-plan',
    to: 'cmd-cook-plan',
    label: 'Approve',
    path: generatePath({ x: 500, y: 520 }, { x: 500, y: 640 }),
    labelX: 520,
    labelY: 580
  },

  // Fix something branch
  {
    id: 'e-fix-something-know',
    from: 'fix-something',
    to: 'know-issue',
    path: generatePath({ x: 615, y: 160 }, { x: 615, y: 280 })
  },
  {
    id: 'e-know-debug',
    from: 'know-issue',
    to: 'cmd-debug',
    label: 'No',
    path: generatePath({ x: 615, y: 280 }, { x: 720, y: 400 }),
    labelX: 650,
    labelY: 340
  },
  {
    id: 'e-know-fix',
    from: 'know-issue',
    to: 'cmd-fix',
    label: 'Yes',
    path: generatePath({ x: 615, y: 280 }, { x: 650, y: 500 }),
    labelX: 650,
    labelY: 390
  },
  {
    id: 'e-debug-fix',
    from: 'cmd-debug',
    to: 'cmd-fix',
    label: 'Found',
    path: generatePath({ x: 720, y: 400 }, { x: 650, y: 500 }),
    labelX: 700,
    labelY: 450
  },

  // Git ops branch
  {
    id: 'e-git-skill',
    from: 'git-ops',
    to: 'cmd-git-skill',
    path: generatePath({ x: 790, y: 160 }, { x: 790, y: 280 })
  },
  {
    id: 'e-git-worktree',
    from: 'git-ops',
    to: 'cmd-worktree',
    path: generatePath({ x: 790, y: 160 }, { x: 870, y: 360 })
  },

  // Docs branch
  {
    id: 'e-docs-design-docs',
    from: 'docs-design',
    to: 'cmd-docs',
    path: generatePath({ x: 900, y: 160 }, { x: 900, y: 280 })
  },

  // Designs branch
  {
    id: 'e-designs-frontend',
    from: 'designs',
    to: 'cmd-frontend-design',
    path: generatePath({ x: 1060, y: 160 }, { x: 990, y: 280 })
  },
  {
    id: 'e-designs-remotion',
    from: 'designs',
    to: 'cmd-remotion',
    path: generatePath({ x: 1060, y: 160 }, { x: 1100, y: 280 })
  },
  {
    id: 'e-designs-threejs',
    from: 'designs',
    to: 'cmd-threejs',
    path: generatePath({ x: 1060, y: 160 }, { x: 1100, y: 360 })
  },

  // Need help branch
  {
    id: 'e-help-type',
    from: 'need-help',
    to: 'help-type',
    path: generatePath({ x: 1280, y: 160 }, { x: 1340, y: 280 })
  },
  {
    id: 'e-help-ck',
    from: 'help-type',
    to: 'cmd-ck-help',
    label: 'CK',
    path: generatePath({ x: 1340, y: 280 }, { x: 1170, y: 400 }),
    labelX: 1235,
    labelY: 340
  },
  {
    id: 'e-help-ask',
    from: 'help-type',
    to: 'cmd-ask',
    label: 'Tech',
    path: generatePath({ x: 1340, y: 280 }, { x: 1280, y: 400 }),
    labelX: 1320,
    labelY: 340
  },
  {
    id: 'e-help-coding',
    from: 'help-type',
    to: 'cmd-coding-level',
    label: 'Learn',
    path: generatePath({ x: 1340, y: 280 }, { x: 1440, y: 400 }),
    labelX: 1410,
    labelY: 340
  }
];

const stablePaths: FlowchartPath[] = [
  // New Project path
  {
    id: 'path-bootstrap',
    name: 'Start New Project',
    nodes: ['start', 'new-project', 'cmd-bootstrap'],
    edges: ['e-start-new-project', 'e-new-project-bootstrap'],
    command: '/bootstrap',
    description: 'Full project initialization: git, tech stack, planning, design, implementation',
    color: 'amber'
  },

  // Existing Project paths
  {
    id: 'path-docs-init',
    name: 'Join Undocumented Project',
    nodes: ['start', 'existing-project', 'has-docs', 'cmd-docs-init'],
    edges: ['e-start-existing-project', 'e-existing-project-hasdocs', 'e-hasdocs-docsinit'],
    command: '/docs:init',
    description: 'Analyze existing codebase and create documentation',
    color: 'cyan'
  },
  {
    id: 'path-scout',
    name: 'Explore Documented Project',
    nodes: ['start', 'existing-project', 'has-docs', 'cmd-scout'],
    edges: ['e-start-existing-project', 'e-existing-project-hasdocs', 'e-hasdocs-scout'],
    command: '/scout',
    description: 'Fast parallel codebase search to find relevant files',
    color: 'cyan'
  },

  // Build Feature paths
  {
    id: 'path-cook',
    name: 'Fast Implementation',
    nodes: ['start', 'build-feature', 'know-what', 'speed-safety', 'cmd-cook'],
    edges: ['e-start-build-feature', 'e-build-feature-know', 'e-know-speed-safety', 'e-speed-cook'],
    command: '/cook',
    description: 'All-in-one: research → plan → implement → test → review (speed focus)',
    color: 'emerald'
  },
  {
    id: 'path-plan',
    name: 'Safe Planning',
    nodes: ['start', 'build-feature', 'know-what', 'speed-safety', 'cmd-plan'],
    edges: ['e-start-build-feature', 'e-build-feature-know', 'e-know-speed-safety', 'e-safety-plan'],
    command: '/plan',
    description: 'Plan → Refine & Approve → /clear → /cook @plan.md (safety focus)',
    color: 'purple'
  },
  {
    id: 'path-cook-plan',
    name: 'Implement Plan',
    nodes: ['cmd-plan', 'cmd-cook-plan'],
    edges: ['e-plan-cook-plan'],
    command: '/cook @plan.md',
    description: 'Implement an approved plan step by step (after /clear)',
    color: 'blue'
  },
  {
    id: 'path-brainstorm',
    name: 'Brainstorm Ideas',
    nodes: ['start', 'build-feature', 'know-what', 'cmd-brainstorm', 'cmd-plan'],
    edges: ['e-start-build-feature', 'e-build-feature-know', 'e-know-brainstorm', 'e-brainstorm-plan'],
    command: '/brainstorm',
    description: 'Ideation when you don\'t know what to build (then → /plan → /clear → /cook @plan.md)',
    color: 'violet'
  },

  // Fix Something paths
  {
    id: 'path-debug',
    name: 'Debug Issue',
    nodes: ['start', 'fix-something', 'know-issue', 'cmd-debug'],
    edges: ['e-start-fix-something', 'e-fix-something-know', 'e-know-debug'],
    command: '/debug',
    description: 'Analyze → Find root cause (when you don\'t know what\'s wrong)',
    color: 'orange'
  },
  {
    id: 'path-fix',
    name: 'Fix Known Issue',
    nodes: ['start', 'fix-something', 'know-issue', 'cmd-fix'],
    edges: ['e-start-fix-something', 'e-fix-something-know', 'e-know-fix'],
    command: '/fix',
    description: 'Intelligent router to specialized fix commands (when you know the issue)',
    color: 'red'
  },

  // Git Ops paths
  {
    id: 'path-git-skill',
    name: 'Git Operations',
    nodes: ['start', 'git-ops', 'cmd-git-skill'],
    edges: ['e-start-git-ops', 'e-git-skill'],
    command: '/git',
    description: 'Support arguments: cm, cp, pr, merge',
    color: 'indigo'
  },
  {
    id: 'path-worktree',
    name: 'Parallel Development',
    nodes: ['start', 'git-ops', 'cmd-worktree'],
    edges: ['e-start-git-ops', 'e-git-worktree'],
    command: '/worktree',
    description: 'Create isolated worktree for working on multiple features simultaneously',
    color: 'indigo'
  },

  // Docs path
  {
    id: 'path-docs',
    name: 'Documentation',
    nodes: ['start', 'docs-design', 'cmd-docs'],
    edges: ['e-start-docs-design', 'e-docs-design-docs'],
    command: '/docs:*',
    description: 'Documentation commands: init, summarize, update',
    color: 'amber'
  },

  // Designs paths
  {
    id: 'path-frontend-design',
    name: 'UI/UX Design',
    nodes: ['start', 'designs', 'cmd-frontend-design'],
    edges: ['e-start-designs', 'e-designs-frontend'],
    command: '/frontend-design',
    description: 'Create beautiful UI/UX designs with modern patterns',
    color: 'pink'
  },
  {
    id: 'path-remotion',
    name: 'Video Design',
    nodes: ['start', 'designs', 'cmd-remotion'],
    edges: ['e-start-designs', 'e-designs-remotion'],
    command: '/remotion',
    description: 'Create video animations and motion graphics',
    color: 'pink'
  },
  {
    id: 'path-threejs',
    name: '3D Design',
    nodes: ['start', 'designs', 'cmd-threejs'],
    edges: ['e-start-designs', 'e-designs-threejs'],
    command: '/threejs',
    description: 'Create 3D visualizations and interactive experiences',
    color: 'pink'
  },

  // Need Help paths
  {
    id: 'path-ck-help',
    name: 'ClaudeKit Help',
    nodes: ['start', 'need-help', 'help-type', 'cmd-ck-help'],
    edges: ['e-start-need-help', 'e-help-type', 'e-help-ck'],
    command: '/ck-help',
    description: 'General ClaudeKit documentation and command help',
    color: 'blue'
  },
  {
    id: 'path-ask',
    name: 'Architectural Advice',
    nodes: ['start', 'need-help', 'help-type', 'cmd-ask'],
    edges: ['e-start-need-help', 'e-help-type', 'e-help-ask'],
    command: '/ask',
    description: 'Technical and architectural consultation from expert',
    color: 'blue'
  },
  {
    id: 'path-coding-level',
    name: 'Learning Mode',
    nodes: ['start', 'need-help', 'help-type', 'cmd-coding-level'],
    edges: ['e-start-need-help', 'e-help-type', 'e-help-coding'],
    command: '/coding-level',
    description: 'Slow down explanations for learning and understanding',
    color: 'cyan'
  }
];


export { stableNodes, stableEdges, stablePaths };

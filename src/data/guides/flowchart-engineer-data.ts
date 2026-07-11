// Engineer Kit flowchart data - skill-based commands (/git skill, /worktree, separated Docs/Designs)
import { type FlowchartNode, type FlowchartEdge, type FlowchartPath, generatePath } from "./flowchart-types.ts";

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
    label: '/ak:bootstrap',
    description: 'Full project initialization ⚡⚡⚡⚡⚡',
    position: { x: 90, y: 280 }
  },

  // Command nodes - Existing Project
  {
    id: 'cmd-docs-init',
    type: 'command',
    label: '/ak:docs init',
    description: 'Analyze codebase, create docs ⚡⚡⚡⚡',
    position: { x: 120, y: 400 }
  },
  {
    id: 'cmd-scout',
    type: 'command',
    label: '/ak:scout',
    description: 'Explore codebase structure',
    position: { x: 240, y: 400 }
  },

  // Command nodes - Build Feature
  {
    id: 'cmd-brainstorm',
    type: 'command',
    label: '/ak:brainstorm',
    description: 'Collaborative ideation (--html, --wiki) ⚡⚡',
    position: { x: 380, y: 400 }
  },
  {
    id: 'cmd-cook',
    type: 'command',
    label: '/ak:cook',
    description: 'All-in-one: research → implement ⚡⚡⚡',
    position: { x: 520, y: 600 }
  },
  {
    id: 'cmd-plan',
    type: 'command',
    label: '/ak:plan',
    description: 'Create detailed plan (--html, --github, --wiki) ⚡⚡⚡',
    position: { x: 380, y: 520 }
  },
  {
    id: 'cmd-cook-plan',
    type: 'command',
    label: '/ak:cook @plan.md',
    description: 'Implement plan step by step ⚡⚡⚡',
    position: { x: 380, y: 640 }
  },

  // Command nodes - Fix Something
  {
    id: 'cmd-debug',
    type: 'command',
    label: '/ak:debug',
    description: 'Find root cause ⚡',
    position: { x: 720, y: 400 }
  },
  {
    id: 'cmd-fix',
    type: 'command',
    label: '/ak:fix',
    description: 'Smart routing to fix commands ⚡⚡',
    position: { x: 650, y: 500 }
  },
  {
    id: 'cmd-test',
    type: 'command',
    label: '/ak:test',
    description: 'Run tests to verify fix ⚡⚡',
    position: { x: 650, y: 600 }
  },

  // Command nodes - Git Ops (v2.5.0+ uses /ak:git skill)
  {
    id: 'cmd-git-skill',
    type: 'command',
    label: '/ak:git',
    description: 'Support arguments: cm, cp, pr, merge',
    position: { x: 790, y: 280 }
  },
  {
    id: 'cmd-worktree',
    type: 'command',
    label: '/ak:worktree',
    description: 'Create isolated worktree',
    position: { x: 870, y: 360 }
  },
  {
    id: 'cmd-code-review',
    type: 'command',
    label: '/ak:code-review',
    description: 'Review code & pull requests',
    position: { x: 790, y: 440 }
  },

  // Command nodes - Docs (v2.5.0+ separated)
  {
    id: 'cmd-docs',
    type: 'command',
    label: '/ak:docs',
    description: 'init | update | summarize',
    position: { x: 900, y: 280 }
  },

  // Command nodes - Designs (v2.5.0+ new separate category)
  {
    id: 'cmd-frontend-design',
    type: 'command',
    label: '/ak:frontend-design',
    description: 'UI/UX design skill',
    position: { x: 990, y: 280 }
  },
  {
    id: 'cmd-remotion',
    type: 'command',
    label: '/ak:remotion',
    description: 'Video design & animation',
    position: { x: 1100, y: 280 }
  },
  {
    id: 'cmd-threejs',
    type: 'command',
    label: '/ak:threejs',
    description: '3D design & visualization',
    position: { x: 1100, y: 360 }
  },

  // Command nodes - Workflow pipelines (v2.20.0)
  {
    id: 'cmd-vibe',
    type: 'command',
    label: '/ak:vibe',
    description: 'Full pipeline: issue → plan → implement → review → ship ⚡⚡⚡⚡',
    position: { x: 200, y: 700 }
  },
  {
    id: 'cmd-review-pr',
    type: 'command',
    label: '/ak:review-pr',
    description: 'Review GitHub PRs (standards, security, breaking changes)',
    position: { x: 920, y: 520 }
  },

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
    path: generatePath({ x: 265, y: 280 }, { x: 120, y: 400 }),
    labelX: 175,
    labelY: 340
  },
  {
    id: 'e-hasdocs-scout',
    from: 'has-docs',
    to: 'cmd-scout',
    label: 'Yes',
    path: generatePath({ x: 265, y: 280 }, { x: 240, y: 400 }),
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
    path: generatePath({ x: 380, y: 400 }, { x: 380, y: 520 }),
    labelX: 400,
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
    path: generatePath({ x: 520, y: 400 }, { x: 520, y: 600 }),
    labelX: 540,
    labelY: 500
  },
  {
    id: 'e-safety-plan',
    from: 'speed-safety',
    to: 'cmd-plan',
    label: 'Safety',
    path: generatePath({ x: 520, y: 400 }, { x: 380, y: 520 }),
    labelX: 430,
    labelY: 460
  },
  {
    id: 'e-plan-cook-plan',
    from: 'cmd-plan',
    to: 'cmd-cook-plan',
    label: 'Approve',
    path: generatePath({ x: 380, y: 520 }, { x: 380, y: 640 }),
    labelX: 400,
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
  {
    id: 'e-fix-test',
    from: 'cmd-fix',
    to: 'cmd-test',
    label: 'Verify',
    path: generatePath({ x: 650, y: 500 }, { x: 650, y: 600 }),
    labelX: 670,
    labelY: 550
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
  {
    id: 'e-git-code-review',
    from: 'git-ops',
    to: 'cmd-code-review',
    path: generatePath({ x: 790, y: 160 }, { x: 790, y: 440 })
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

  // Workflow pipeline branches (v2.20.0)
  {
    id: 'e-build-vibe',
    from: 'build-feature',
    to: 'cmd-vibe',
    label: 'Auto',
    path: generatePath({ x: 440, y: 160 }, { x: 200, y: 700 }),
    labelX: 320,
    labelY: 430
  },
  {
    id: 'e-code-review-reviewpr',
    from: 'cmd-code-review',
    to: 'cmd-review-pr',
    label: 'PR',
    path: generatePath({ x: 790, y: 440 }, { x: 920, y: 520 }),
    labelX: 860,
    labelY: 482
  },

];

const stablePaths: FlowchartPath[] = [
  // New Project path
  {
    id: 'path-bootstrap',
    name: 'Start New Project',
    nodes: ['start', 'new-project', 'cmd-bootstrap'],
    edges: ['e-start-new-project', 'e-new-project-bootstrap'],
    command: '/ak:bootstrap',
    description: 'Full project initialization: git, tech stack, planning, design, implementation',
    color: 'amber'
  },

  // Existing Project paths
  {
    id: 'path-docs-init',
    name: 'Join Undocumented Project',
    nodes: ['start', 'existing-project', 'has-docs', 'cmd-docs-init'],
    edges: ['e-start-existing-project', 'e-existing-project-hasdocs', 'e-hasdocs-docsinit'],
    command: '/ak:docs init',
    description: 'Analyze existing codebase and create documentation',
    color: 'cyan'
  },
  {
    id: 'path-scout',
    name: 'Explore Documented Project',
    nodes: ['start', 'existing-project', 'has-docs', 'cmd-scout'],
    edges: ['e-start-existing-project', 'e-existing-project-hasdocs', 'e-hasdocs-scout'],
    command: '/ak:scout',
    description: 'Fast parallel codebase search to find relevant files',
    color: 'cyan'
  },

  // Build Feature paths
  {
    id: 'path-cook',
    name: 'Fast Implementation',
    nodes: ['start', 'build-feature', 'know-what', 'speed-safety', 'cmd-cook'],
    edges: ['e-start-build-feature', 'e-build-feature-know', 'e-know-speed-safety', 'e-speed-cook'],
    command: '/ak:cook',
    description: 'All-in-one: research → plan → implement → test → review (speed focus)',
    color: 'emerald'
  },
  {
    id: 'path-plan',
    name: 'Safe Planning',
    nodes: ['start', 'build-feature', 'know-what', 'speed-safety', 'cmd-plan'],
    edges: ['e-start-build-feature', 'e-build-feature-know', 'e-know-speed-safety', 'e-safety-plan'],
    command: '/ak:plan',
    description: 'Plan → Refine & Approve → /clear → /ak:cook @plan.md (safety focus)',
    color: 'purple'
  },
  {
    id: 'path-cook-plan',
    name: 'Implement Plan',
    nodes: ['cmd-plan', 'cmd-cook-plan'],
    edges: ['e-plan-cook-plan'],
    command: '/ak:cook @plan.md',
    description: 'Implement an approved plan step by step (after /clear)',
    color: 'blue'
  },
  {
    id: 'path-brainstorm',
    name: 'Brainstorm Ideas',
    nodes: ['start', 'build-feature', 'know-what', 'cmd-brainstorm', 'cmd-plan'],
    edges: ['e-start-build-feature', 'e-build-feature-know', 'e-know-brainstorm', 'e-brainstorm-plan'],
    command: '/ak:brainstorm',
    description: 'Ideation when you don\'t know what to build (then → /ak:plan → /clear → /ak:cook @plan.md)',
    color: 'violet'
  },

  // Fix Something paths
  {
    id: 'path-debug',
    name: 'Debug Issue',
    nodes: ['start', 'fix-something', 'know-issue', 'cmd-debug'],
    edges: ['e-start-fix-something', 'e-fix-something-know', 'e-know-debug'],
    command: '/ak:debug',
    description: 'Analyze → Find root cause (when you don\'t know what\'s wrong)',
    color: 'orange'
  },
  {
    id: 'path-fix',
    name: 'Fix Known Issue',
    nodes: ['start', 'fix-something', 'know-issue', 'cmd-fix'],
    edges: ['e-start-fix-something', 'e-fix-something-know', 'e-know-fix'],
    command: '/ak:fix',
    description: 'Intelligent router to specialized fix commands (when you know the issue)',
    color: 'red'
  },
  {
    id: 'path-test',
    name: 'Fix & Test',
    nodes: ['start', 'fix-something', 'know-issue', 'cmd-fix', 'cmd-test'],
    edges: ['e-start-fix-something', 'e-fix-something-know', 'e-know-fix', 'e-fix-test'],
    command: '/ak:fix → /ak:test',
    description: 'Fix issue then verify with tests',
    color: 'green'
  },

  // Git Ops paths
  {
    id: 'path-git-skill',
    name: 'Git Operations',
    nodes: ['start', 'git-ops', 'cmd-git-skill'],
    edges: ['e-start-git-ops', 'e-git-skill'],
    command: '/ak:git',
    description: 'Support arguments: cm, cp, pr, merge',
    color: 'indigo'
  },
  {
    id: 'path-worktree',
    name: 'Parallel Development',
    nodes: ['start', 'git-ops', 'cmd-worktree'],
    edges: ['e-start-git-ops', 'e-git-worktree'],
    command: '/ak:worktree',
    description: 'Create isolated worktree for working on multiple features simultaneously',
    color: 'indigo'
  },
  {
    id: 'path-code-review',
    name: 'PR Code Review',
    nodes: ['start', 'git-ops', 'cmd-code-review'],
    edges: ['e-start-git-ops', 'e-git-code-review'],
    command: '/ak:code-review',
    description: 'Review code & pull requests with scout-based edge case detection',
    color: 'indigo'
  },

  // Docs path
  {
    id: 'path-docs',
    name: 'Documentation',
    nodes: ['start', 'docs-design', 'cmd-docs'],
    edges: ['e-start-docs-design', 'e-docs-design-docs'],
    command: '/ak:docs',
    description: 'Documentation commands: init, update, summarize',
    color: 'amber'
  },

  // Designs paths
  {
    id: 'path-frontend-design',
    name: 'UI/UX Design',
    nodes: ['start', 'designs', 'cmd-frontend-design'],
    edges: ['e-start-designs', 'e-designs-frontend'],
    command: '/ak:frontend-design',
    description: 'Create beautiful UI/UX designs with modern patterns',
    color: 'pink'
  },
  {
    id: 'path-remotion',
    name: 'Video Design',
    nodes: ['start', 'designs', 'cmd-remotion'],
    edges: ['e-start-designs', 'e-designs-remotion'],
    command: '/ak:remotion',
    description: 'Create video animations and motion graphics',
    color: 'pink'
  },
  {
    id: 'path-threejs',
    name: '3D Design',
    nodes: ['start', 'designs', 'cmd-threejs'],
    edges: ['e-start-designs', 'e-designs-threejs'],
    command: '/ak:threejs',
    description: 'Create 3D visualizations and interactive experiences',
    color: 'pink'
  },

  // Workflow pipeline paths (v2.20.0)
  {
    id: 'path-vibe',
    name: 'End-to-End (Vibe)',
    nodes: ['start', 'build-feature', 'cmd-vibe'],
    edges: ['e-start-build-feature', 'e-build-vibe'],
    command: '/ak:vibe',
    description: 'Autonomous full pipeline from a GitHub issue/feature to a shipped PR (worktree, TDD gate, CI watch)',
    color: 'teal'
  },
  {
    id: 'path-review-pr',
    name: 'PR Review',
    nodes: ['start', 'git-ops', 'cmd-code-review', 'cmd-review-pr'],
    edges: ['e-start-git-ops', 'e-git-code-review', 'e-code-review-reviewpr'],
    command: '/ak:review-pr',
    description: 'Review a GitHub PR for project standards, security, breaking changes, and AI-slop (--fix, --reply)',
    color: 'indigo'
  },

];


export { stableNodes, stableEdges, stablePaths };

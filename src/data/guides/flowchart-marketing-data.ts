// Marketing Kit flowchart data - purpose-driven decision tree for marketers
// All commands use /ak: prefix (migration from /mkt: complete)
import { type FlowchartNode, type FlowchartEdge, type FlowchartPath, generatePath } from "./flowchart-types.ts";

const marketingNodes: FlowchartNode[] = [
  // Start node (centered for 1600px canvas)
  {
    id: 'mkt-start',
    type: 'start',
    label: '🎯 Marketing goal?',
    position: { x: 800, y: 50 }
  },

  // Level 1 - Primary decision branches (9 categories, ~160px spacing)
  {
    id: 'mkt-learn',
    type: 'decision',
    label: 'Learn CK?',
    position: { x: 100, y: 160 }
  },
  {
    id: 'mkt-plan',
    type: 'decision',
    label: 'Plan?',
    position: { x: 260, y: 160 }
  },
  {
    id: 'mkt-campaign',
    type: 'decision',
    label: 'Campaign?',
    position: { x: 420, y: 160 }
  },
  {
    id: 'mkt-content',
    type: 'decision',
    label: 'Content?',
    position: { x: 580, y: 160 }
  },
  {
    id: 'mkt-grow',
    type: 'decision',
    label: 'Strategy?',
    position: { x: 740, y: 160 }
  },
  {
    id: 'mkt-analyze',
    type: 'decision',
    label: 'Analyze?',
    position: { x: 900, y: 160 }
  },
  {
    id: 'mkt-design',
    type: 'decision',
    label: 'Analytics?',
    position: { x: 1060, y: 160 }
  },
  {
    id: 'mkt-project',
    type: 'decision',
    label: 'Manage?',
    position: { x: 1240, y: 160 }
  },
  {
    id: 'mkt-help',
    type: 'decision',
    label: 'Help?',
    position: { x: 1420, y: 160 }
  },

  // Level 2 - Sub-decisions (aligned with parent)
  {
    id: 'mkt-campaign-type',
    type: 'decision',
    label: 'Type?',
    position: { x: 420, y: 280 }
  },
  {
    id: 'mkt-content-type',
    type: 'decision',
    label: 'Format?',
    position: { x: 580, y: 280 }
  },
  {
    id: 'mkt-grow-focus',
    type: 'decision',
    label: 'Pick?',
    position: { x: 740, y: 280 }
  },
  {
    id: 'mkt-analyze-type',
    type: 'decision',
    label: 'What?',
    position: { x: 900, y: 280 }
  },

  // Command nodes - Learn AgentKit (Essentials)
  {
    id: 'cmd-mkt-init',
    type: 'command',
    label: '/ak:init',
    description: 'Setup marketing workspace ⚡⚡',
    position: { x: 100, y: 280 }
  },

  // Command nodes - Plan branch (2 separate paths)
  // Path 1: Idea? → /ak:brainstorm → Done → loop back to Plan?
  {
    id: 'cmd-ck-brainstorm',
    type: 'command',
    label: '/ak:brainstorm',
    description: 'Explore campaign angles ⚡',
    position: { x: 180, y: 280 }
  },
  // Path 2: Ready? → /ak:plan → Go → /ak:write:good
  {
    id: 'cmd-mkt-plan',
    type: 'command',
    label: '/ak:plan',
    description: 'Marketing plan creation ⚡⚡⚡',
    position: { x: 340, y: 280 }
  },
  {
    id: 'cmd-mkt-write-good',
    type: 'command',
    label: '/ak:write:good',
    description: 'Execute: Quality content ⚡⚡⚡',
    position: { x: 340, y: 400 }
  },

  // Command nodes - Campaign
  {
    id: 'cmd-mkt-campaign',
    type: 'command',
    label: '/ak:campaign',
    description: 'Multi-channel campaigns ⚡⚡⚡⚡',
    position: { x: 340, y: 520 }
  },
  {
    id: 'cmd-mkt-email',
    type: 'command',
    label: '/ak:email',
    description: 'Email flows & sequences ⚡⚡⚡',
    position: { x: 420, y: 400 }
  },
  {
    id: 'cmd-mkt-social',
    type: 'command',
    label: '/ak:social',
    description: 'Social media campaigns ⚡⚡',
    position: { x: 500, y: 400 }
  },

  // Command nodes - Content
  {
    id: 'cmd-mkt-write',
    type: 'command',
    label: '/ak:write:*',
    description: 'Content creation — 8 modes: good, fast, blog, cro... ⚡⚡⚡',
    position: { x: 500, y: 520 }
  },
  {
    id: 'cmd-mkt-video',
    type: 'command',
    label: '/ak:video',
    description: 'Video scripts & storyboards ⚡⚡⚡',
    position: { x: 580, y: 400 }
  },
  {
    id: 'cmd-mkt-slides',
    type: 'command',
    label: '/ak:slides',
    description: 'Pitch decks & presentations ⚡⚡',
    position: { x: 660, y: 400 }
  },

  // Command nodes - Strategy
  {
    id: 'cmd-ckm-play',
    type: 'command',
    label: '/ak:play',
    description: 'Marketing playbook orchestrator ⚡⚡⚡⚡',
    position: { x: 660, y: 520 }
  },
  {
    id: 'cmd-ckm-persona',
    type: 'command',
    label: '/ak:persona',
    description: 'Customer persona management ⚡⚡',
    position: { x: 740, y: 400 }
  },
  {
    id: 'cmd-ckm-journal',
    type: 'command',
    label: '/ak:journal',
    description: 'Marketing session journal ⚡',
    position: { x: 820, y: 400 }
  },

  // Command nodes - Analyze & Strategy
  {
    id: 'cmd-mkt-competitor',
    type: 'command',
    label: '/ak:competitor',
    description: 'Competitive analysis ⚡⚡⚡',
    position: { x: 820, y: 520 }
  },
  {
    id: 'cmd-mkt-seo',
    type: 'command',
    label: '/ak:seo',
    description: 'SEO audit & keywords ⚡⚡⚡',
    position: { x: 900, y: 400 }
  },
  {
    id: 'cmd-mkt-funnel',
    type: 'command',
    label: '/ak:funnel',
    description: 'Funnel design & optimize ⚡⚡⚡',
    position: { x: 980, y: 400 }
  },

  // Command nodes - Analytics
  {
    id: 'cmd-ckm-analyze',
    type: 'command',
    label: '/ak:analyze',
    description: 'Analytics & performance reports ⚡⚡⚡',
    position: { x: 1000, y: 280 }
  },
  {
    id: 'cmd-ckm-dashboard',
    type: 'command',
    label: '/ak:dashboard',
    description: 'Marketing analytics dashboard ⚡⚡',
    position: { x: 1120, y: 280 }
  },

  // Command nodes - Project Management
  {
    id: 'cmd-mkt-kanban',
    type: 'command',
    label: '/ak:kanban',
    description: 'Task visualization ⚡',
    position: { x: 1180, y: 280 }
  },
  {
    id: 'cmd-mkt-brand',
    type: 'command',
    label: '/ak:brand',
    description: 'Brand management ⚡⚡',
    position: { x: 1300, y: 280 }
  },
  {
    id: 'cmd-mkt-hub',
    type: 'command',
    label: '/ak:hub',
    description: 'Content hub server ⚡',
    position: { x: 1240, y: 400 }
  },

  // Command nodes - Help
  {
    id: 'cmd-mkt-watzup',
    type: 'command',
    label: '/ak:watzup',
    description: 'Session wrap-up ⚡',
    position: { x: 1360, y: 280 }
  },
  {
    id: 'cmd-ck-ask',
    type: 'command',
    label: '/ak:ask',
    description: 'Expert consultation ⚡',
    position: { x: 1480, y: 280 }
  }
];

const marketingEdges: FlowchartEdge[] = [
  // From start to level 1 decisions (start at x:800)
  {
    id: 'e-mkt-start-learn',
    from: 'mkt-start',
    to: 'mkt-learn',
    path: generatePath({ x: 800, y: 50 }, { x: 100, y: 160 })
  },
  {
    id: 'e-mkt-start-plan',
    from: 'mkt-start',
    to: 'mkt-plan',
    path: generatePath({ x: 800, y: 50 }, { x: 260, y: 160 })
  },
  {
    id: 'e-mkt-start-campaign',
    from: 'mkt-start',
    to: 'mkt-campaign',
    path: generatePath({ x: 800, y: 50 }, { x: 420, y: 160 })
  },
  {
    id: 'e-mkt-start-content',
    from: 'mkt-start',
    to: 'mkt-content',
    path: generatePath({ x: 800, y: 50 }, { x: 580, y: 160 })
  },
  {
    id: 'e-mkt-start-grow',
    from: 'mkt-start',
    to: 'mkt-grow',
    path: generatePath({ x: 800, y: 50 }, { x: 740, y: 160 })
  },
  {
    id: 'e-mkt-start-analyze',
    from: 'mkt-start',
    to: 'mkt-analyze',
    path: generatePath({ x: 800, y: 50 }, { x: 900, y: 160 })
  },
  {
    id: 'e-mkt-start-design',
    from: 'mkt-start',
    to: 'mkt-design',
    path: generatePath({ x: 800, y: 50 }, { x: 1060, y: 160 })
  },
  {
    id: 'e-mkt-start-project',
    from: 'mkt-start',
    to: 'mkt-project',
    path: generatePath({ x: 800, y: 50 }, { x: 1240, y: 160 })
  },
  {
    id: 'e-mkt-start-help',
    from: 'mkt-start',
    to: 'mkt-help',
    path: generatePath({ x: 800, y: 50 }, { x: 1420, y: 160 })
  },

  // Learn branch
  {
    id: 'e-mkt-learn-init',
    from: 'mkt-learn',
    to: 'cmd-mkt-init',
    path: generatePath({ x: 100, y: 160 }, { x: 100, y: 280 })
  },

  // Plan branch - 2 separate paths
  // Path 1: Idea? → /ak:brainstorm (standalone endpoint)
  {
    id: 'e-mkt-plan-brainstorm',
    from: 'mkt-plan',
    to: 'cmd-ck-brainstorm',
    label: 'Idea?',
    path: generatePath({ x: 260, y: 160 }, { x: 180, y: 280 }),
    labelX: 200,
    labelY: 220
  },
  // Path 2: Ready? → /ak:plan → Go → /ak:write:good
  {
    id: 'e-mkt-plan-ready',
    from: 'mkt-plan',
    to: 'cmd-mkt-plan',
    label: 'Ready?',
    path: generatePath({ x: 260, y: 160 }, { x: 340, y: 280 }),
    labelX: 315,
    labelY: 220
  },
  {
    id: 'e-mkt-plan-execute',
    from: 'cmd-mkt-plan',
    to: 'cmd-mkt-write-good',
    label: 'Go',
    path: generatePath({ x: 340, y: 280 }, { x: 340, y: 400 }),
    labelX: 360,
    labelY: 340
  },

  // Campaign branch
  {
    id: 'e-mkt-campaign-type',
    from: 'mkt-campaign',
    to: 'mkt-campaign-type',
    path: generatePath({ x: 420, y: 160 }, { x: 420, y: 280 })
  },
  {
    id: 'e-mkt-type-campaign',
    from: 'mkt-campaign-type',
    to: 'cmd-mkt-campaign',
    label: 'Multi',
    path: generatePath({ x: 420, y: 280 }, { x: 340, y: 520 }),
    labelX: 360,
    labelY: 400
  },
  {
    id: 'e-mkt-type-email',
    from: 'mkt-campaign-type',
    to: 'cmd-mkt-email',
    label: 'Email',
    path: generatePath({ x: 420, y: 280 }, { x: 420, y: 400 }),
    labelX: 440,
    labelY: 340
  },
  {
    id: 'e-mkt-type-social',
    from: 'mkt-campaign-type',
    to: 'cmd-mkt-social',
    label: 'Social',
    path: generatePath({ x: 420, y: 280 }, { x: 500, y: 400 }),
    labelX: 475,
    labelY: 340
  },

  // Content branch
  {
    id: 'e-mkt-content-type',
    from: 'mkt-content',
    to: 'mkt-content-type',
    path: generatePath({ x: 580, y: 160 }, { x: 580, y: 280 })
  },
  {
    id: 'e-mkt-format-write',
    from: 'mkt-content-type',
    to: 'cmd-mkt-write',
    label: 'Blog',
    path: generatePath({ x: 580, y: 280 }, { x: 500, y: 520 }),
    labelX: 520,
    labelY: 400
  },
  {
    id: 'e-mkt-format-video',
    from: 'mkt-content-type',
    to: 'cmd-mkt-video',
    label: 'Video',
    path: generatePath({ x: 580, y: 280 }, { x: 580, y: 400 }),
    labelX: 600,
    labelY: 340
  },
  {
    id: 'e-mkt-format-slides',
    from: 'mkt-content-type',
    to: 'cmd-mkt-slides',
    label: 'Slides',
    path: generatePath({ x: 580, y: 280 }, { x: 660, y: 400 }),
    labelX: 635,
    labelY: 340
  },

  // Grow branch
  {
    id: 'e-mkt-grow-focus',
    from: 'mkt-grow',
    to: 'mkt-grow-focus',
    path: generatePath({ x: 740, y: 160 }, { x: 740, y: 280 })
  },
  {
    id: 'e-mkt-focus-launch',
    from: 'mkt-grow-focus',
    to: 'cmd-ckm-play',
    label: 'Play',
    path: generatePath({ x: 740, y: 280 }, { x: 660, y: 520 }),
    labelX: 680,
    labelY: 400
  },
  {
    id: 'e-mkt-focus-pricing',
    from: 'mkt-grow-focus',
    to: 'cmd-ckm-persona',
    label: 'Persona',
    path: generatePath({ x: 740, y: 280 }, { x: 740, y: 400 }),
    labelX: 760,
    labelY: 340
  },
  {
    id: 'e-mkt-focus-cro',
    from: 'mkt-grow-focus',
    to: 'cmd-ckm-journal',
    label: 'Log',
    path: generatePath({ x: 740, y: 280 }, { x: 820, y: 400 }),
    labelX: 795,
    labelY: 340
  },

  // Analyze branch
  {
    id: 'e-mkt-analyze-type',
    from: 'mkt-analyze',
    to: 'mkt-analyze-type',
    path: generatePath({ x: 900, y: 160 }, { x: 900, y: 280 })
  },
  {
    id: 'e-mkt-what-competitor',
    from: 'mkt-analyze-type',
    to: 'cmd-mkt-competitor',
    label: 'Comp.',
    path: generatePath({ x: 900, y: 280 }, { x: 820, y: 520 }),
    labelX: 840,
    labelY: 400
  },
  {
    id: 'e-mkt-what-seo',
    from: 'mkt-analyze-type',
    to: 'cmd-mkt-seo',
    label: 'SEO',
    path: generatePath({ x: 900, y: 280 }, { x: 900, y: 400 }),
    labelX: 920,
    labelY: 340
  },
  {
    id: 'e-mkt-what-funnel',
    from: 'mkt-analyze-type',
    to: 'cmd-mkt-funnel',
    label: 'Funnel',
    path: generatePath({ x: 900, y: 280 }, { x: 980, y: 400 }),
    labelX: 955,
    labelY: 340
  },

  // Analytics branch
  {
    id: 'e-mkt-design-cmd',
    from: 'mkt-design',
    to: 'cmd-ckm-analyze',
    label: 'Report',
    path: generatePath({ x: 1060, y: 160 }, { x: 1000, y: 280 }),
    labelX: 1010,
    labelY: 220
  },
  {
    id: 'e-mkt-analytics-dashboard',
    from: 'mkt-design',
    to: 'cmd-ckm-dashboard',
    label: 'Board',
    path: generatePath({ x: 1060, y: 160 }, { x: 1120, y: 280 }),
    labelX: 1105,
    labelY: 220
  },

  // Project branch
  {
    id: 'e-mkt-project-kanban',
    from: 'mkt-project',
    to: 'cmd-mkt-kanban',
    label: 'Tasks',
    path: generatePath({ x: 1240, y: 160 }, { x: 1180, y: 280 }),
    labelX: 1190,
    labelY: 220
  },
  {
    id: 'e-mkt-project-brand',
    from: 'mkt-project',
    to: 'cmd-mkt-brand',
    label: 'Brand',
    path: generatePath({ x: 1240, y: 160 }, { x: 1300, y: 280 }),
    labelX: 1285,
    labelY: 220
  },
  {
    id: 'e-mkt-project-hub',
    from: 'mkt-project',
    to: 'cmd-mkt-hub',
    label: 'Hub',
    path: generatePath({ x: 1240, y: 160 }, { x: 1240, y: 400 }),
    labelX: 1260,
    labelY: 280
  },

  // Help branch
  {
    id: 'e-mkt-help-watzup',
    from: 'mkt-help',
    to: 'cmd-mkt-watzup',
    label: 'Status',
    path: generatePath({ x: 1420, y: 160 }, { x: 1360, y: 280 }),
    labelX: 1370,
    labelY: 220
  },
  {
    id: 'e-mkt-help-ask',
    from: 'mkt-help',
    to: 'cmd-ck-ask',
    label: 'Expert',
    path: generatePath({ x: 1420, y: 160 }, { x: 1480, y: 280 }),
    labelX: 1465,
    labelY: 220
  }
];

const marketingPaths: FlowchartPath[] = [
  // Learn AgentKit paths
  {
    id: 'mkt-path-learn',
    name: 'Setup Workspace',
    nodes: ['mkt-start', 'mkt-learn', 'cmd-mkt-init'],
    edges: ['e-mkt-start-learn', 'e-mkt-learn-init'],
    command: '/ak:init',
    description: 'Start here: Setup your marketing workspace with brand, personas, templates',
    color: 'green'
  },

  // Plan paths - 2 separate workflows
  // Path 1: Brainstorm (standalone)
  {
    id: 'mkt-path-brainstorm',
    name: 'Brainstorm Ideas',
    nodes: ['mkt-start', 'mkt-plan', 'cmd-ck-brainstorm'],
    edges: ['e-mkt-start-plan', 'e-mkt-plan-brainstorm'],
    command: '/ak:brainstorm',
    description: 'Explore campaign angles and marketing ideas',
    color: 'violet'
  },
  // Path 2: Plan → Execute (for when you know what to do)
  {
    id: 'mkt-path-plan-execute',
    name: 'Plan & Execute',
    nodes: ['mkt-start', 'mkt-plan', 'cmd-mkt-plan', 'cmd-mkt-write-good'],
    edges: ['e-mkt-start-plan', 'e-mkt-plan-ready', 'e-mkt-plan-execute'],
    command: '/ak:plan → /ak:write:good',
    description: 'Know what to do? Create plan then execute with quality content',
    color: 'purple'
  },

  // Campaign paths
  {
    id: 'mkt-path-campaign-multi',
    name: 'Multi-channel Campaign',
    nodes: ['mkt-start', 'mkt-campaign', 'mkt-campaign-type', 'cmd-mkt-campaign'],
    edges: ['e-mkt-start-campaign', 'e-mkt-campaign-type', 'e-mkt-type-campaign'],
    command: '/ak:campaign',
    description: 'Create unified campaigns across email, social, and paid channels',
    color: 'purple'
  },
  {
    id: 'mkt-path-campaign-email',
    name: 'Email Campaign',
    nodes: ['mkt-start', 'mkt-campaign', 'mkt-campaign-type', 'cmd-mkt-email'],
    edges: ['e-mkt-start-campaign', 'e-mkt-campaign-type', 'e-mkt-type-email'],
    command: '/ak:email',
    description: 'Design email flows and nurture sequences',
    color: 'purple'
  },
  {
    id: 'mkt-path-campaign-social',
    name: 'Social Campaign',
    nodes: ['mkt-start', 'mkt-campaign', 'mkt-campaign-type', 'cmd-mkt-social'],
    edges: ['e-mkt-start-campaign', 'e-mkt-campaign-type', 'e-mkt-type-social'],
    command: '/ak:social',
    description: 'Schedule and manage social media content',
    color: 'purple'
  },

  // Content paths
  {
    id: 'mkt-path-content-write',
    name: 'Blog & Articles',
    nodes: ['mkt-start', 'mkt-content', 'mkt-content-type', 'cmd-mkt-write'],
    edges: ['e-mkt-start-content', 'e-mkt-content-type', 'e-mkt-format-write'],
    command: '/ak:write:*',
    description: 'Write blogs, CRO copy, and marketing content — 8 subcommand modes (write:good, write:fast, write:blog...)',
    color: 'pink'
  },
  {
    id: 'mkt-path-content-video',
    name: 'Video Content',
    nodes: ['mkt-start', 'mkt-content', 'mkt-content-type', 'cmd-mkt-video'],
    edges: ['e-mkt-start-content', 'e-mkt-content-type', 'e-mkt-format-video'],
    command: '/ak:video',
    description: 'Create video scripts and storyboards',
    color: 'pink'
  },
  {
    id: 'mkt-path-content-slides',
    name: 'Presentations',
    nodes: ['mkt-start', 'mkt-content', 'mkt-content-type', 'cmd-mkt-slides'],
    edges: ['e-mkt-start-content', 'e-mkt-content-type', 'e-mkt-format-slides'],
    command: '/ak:slides',
    description: 'Build pitch decks and training presentations',
    color: 'pink'
  },

  // Strategy paths
  {
    id: 'mkt-path-grow-launch',
    name: 'Marketing Playbook',
    nodes: ['mkt-start', 'mkt-grow', 'mkt-grow-focus', 'cmd-ckm-play'],
    edges: ['e-mkt-start-grow', 'e-mkt-grow-focus', 'e-mkt-focus-launch'],
    command: '/ak:play',
    description: 'Orchestrate marketing strategy with AI execution & goal tracking',
    color: 'emerald'
  },
  {
    id: 'mkt-path-grow-pricing',
    name: 'Customer Personas',
    nodes: ['mkt-start', 'mkt-grow', 'mkt-grow-focus', 'cmd-ckm-persona'],
    edges: ['e-mkt-start-grow', 'e-mkt-grow-focus', 'e-mkt-focus-pricing'],
    command: '/ak:persona',
    description: 'Create & manage detailed customer personas',
    color: 'emerald'
  },
  {
    id: 'mkt-path-grow-cro',
    name: 'Session Journal',
    nodes: ['mkt-start', 'mkt-grow', 'mkt-grow-focus', 'cmd-ckm-journal'],
    edges: ['e-mkt-start-grow', 'e-mkt-grow-focus', 'e-mkt-focus-cro'],
    command: '/ak:journal',
    description: 'Write journal entries for marketing sessions',
    color: 'emerald'
  },

  // Analyze paths
  {
    id: 'mkt-path-analyze-competitor',
    name: 'Competitor Analysis',
    nodes: ['mkt-start', 'mkt-analyze', 'mkt-analyze-type', 'cmd-mkt-competitor'],
    edges: ['e-mkt-start-analyze', 'e-mkt-analyze-type', 'e-mkt-what-competitor'],
    command: '/ak:competitor',
    description: 'Research competitors, content, and market positioning',
    color: 'blue'
  },
  {
    id: 'mkt-path-analyze-seo',
    name: 'SEO Analysis',
    nodes: ['mkt-start', 'mkt-analyze', 'mkt-analyze-type', 'cmd-mkt-seo'],
    edges: ['e-mkt-start-analyze', 'e-mkt-analyze-type', 'e-mkt-what-seo'],
    command: '/ak:seo',
    description: 'Audit SEO, research keywords, plan pSEO pages',
    color: 'blue'
  },
  {
    id: 'mkt-path-analyze-funnel',
    name: 'Funnel Optimization',
    nodes: ['mkt-start', 'mkt-analyze', 'mkt-analyze-type', 'cmd-mkt-funnel'],
    edges: ['e-mkt-start-analyze', 'e-mkt-analyze-type', 'e-mkt-what-funnel'],
    command: '/ak:funnel',
    description: 'Design, analyze, and optimize conversion funnels',
    color: 'blue'
  },

  // Analytics paths
  {
    id: 'mkt-path-design-create',
    name: 'Analytics Reports',
    nodes: ['mkt-start', 'mkt-design', 'cmd-ckm-analyze'],
    edges: ['e-mkt-start-design', 'e-mkt-design-cmd'],
    command: '/ak:analyze',
    description: 'Generate analytics and performance reports',
    color: 'teal'
  },
  {
    id: 'mkt-path-analytics-dashboard',
    name: 'Marketing Dashboard',
    nodes: ['mkt-start', 'mkt-design', 'cmd-ckm-dashboard'],
    edges: ['e-mkt-start-design', 'e-mkt-analytics-dashboard'],
    command: '/ak:dashboard',
    description: 'Launch local marketing analytics dashboard',
    color: 'teal'
  },

  // Project paths
  {
    id: 'mkt-path-project-kanban',
    name: 'Task Board',
    nodes: ['mkt-start', 'mkt-project', 'cmd-mkt-kanban'],
    edges: ['e-mkt-start-project', 'e-mkt-project-kanban'],
    command: '/ak:kanban',
    description: 'Visualize and manage marketing tasks',
    color: 'cyan'
  },
  {
    id: 'mkt-path-project-brand',
    name: 'Brand Management',
    nodes: ['mkt-start', 'mkt-project', 'cmd-mkt-brand'],
    edges: ['e-mkt-start-project', 'e-mkt-project-brand'],
    command: '/ak:brand',
    description: 'Create, update, and review brand guidelines',
    color: 'cyan'
  },
  {
    id: 'mkt-path-project-hub',
    name: 'Content Hub',
    nodes: ['mkt-start', 'mkt-project', 'cmd-mkt-hub'],
    edges: ['e-mkt-start-project', 'e-mkt-project-hub'],
    command: '/ak:hub',
    description: 'Start local server for content management',
    color: 'cyan'
  },

  // Help paths
  {
    id: 'mkt-path-help-watzup',
    name: 'Session Status',
    nodes: ['mkt-start', 'mkt-help', 'cmd-mkt-watzup'],
    edges: ['e-mkt-start-help', 'e-mkt-help-watzup'],
    command: '/ak:watzup',
    description: 'Review recent changes and wrap up session',
    color: 'indigo'
  },
  {
    id: 'mkt-path-help-ask',
    name: 'Expert Consultation',
    nodes: ['mkt-start', 'mkt-help', 'cmd-ck-ask'],
    edges: ['e-mkt-start-help', 'e-mkt-help-ask'],
    command: '/ak:ask',
    description: 'Get expert advice on marketing strategy',
    color: 'indigo'
  }
];

export { marketingNodes, marketingEdges, marketingPaths };

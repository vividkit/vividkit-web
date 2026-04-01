// Marketing Kit v1.3.1 flowchart data - purpose-driven decision tree for marketers
// All commands use /ckm: prefix (migration from /mkt: complete)
import { type FlowchartNode, type FlowchartEdge, type FlowchartPath, generatePath } from "./flowchart-types";

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
    label: 'Grow?',
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
    label: 'Design?',
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
    label: 'Focus?',
    position: { x: 740, y: 280 }
  },
  {
    id: 'mkt-analyze-type',
    type: 'decision',
    label: 'What?',
    position: { x: 900, y: 280 }
  },

  // Command nodes - Learn ClaudeKit (Essentials)
  {
    id: 'cmd-mkt-ck-help',
    type: 'command',
    label: '/ckm:ck-help',
    description: 'Learn ClaudeKit basics ⚡',
    position: { x: 100, y: 280 }
  },
  {
    id: 'cmd-mkt-init',
    type: 'command',
    label: '/ckm:init',
    description: 'Setup marketing workspace ⚡⚡',
    position: { x: 100, y: 400 }
  },

  // Command nodes - Plan branch (2 separate paths)
  // Path 1: Idea? → /ck:brainstorm → Done → loop back to Plan?
  {
    id: 'cmd-ck-brainstorm',
    type: 'command',
    label: '/ck:brainstorm',
    description: 'Explore campaign angles ⚡',
    position: { x: 180, y: 280 }
  },
  // Path 2: Ready? → /ckm:plan → Go → /ckm:write:good
  {
    id: 'cmd-mkt-plan',
    type: 'command',
    label: '/ckm:plan',
    description: 'Marketing plan creation ⚡⚡⚡',
    position: { x: 340, y: 280 }
  },
  {
    id: 'cmd-mkt-write-good',
    type: 'command',
    label: '/ckm:write:good',
    description: 'Execute: Quality content ⚡⚡⚡',
    position: { x: 340, y: 400 }
  },

  // Command nodes - Campaign
  {
    id: 'cmd-mkt-campaign',
    type: 'command',
    label: '/ckm:campaign',
    description: 'Multi-channel campaigns ⚡⚡⚡⚡',
    position: { x: 340, y: 520 }
  },
  {
    id: 'cmd-mkt-email',
    type: 'command',
    label: '/ckm:email',
    description: 'Email flows & sequences ⚡⚡⚡',
    position: { x: 420, y: 400 }
  },
  {
    id: 'cmd-mkt-social',
    type: 'command',
    label: '/ckm:social',
    description: 'Social media campaigns ⚡⚡',
    position: { x: 500, y: 400 }
  },

  // Command nodes - Content
  {
    id: 'cmd-mkt-write',
    type: 'command',
    label: '/ckm:write',
    description: 'Content creation (8 modes) ⚡⚡⚡',
    position: { x: 500, y: 520 }
  },
  {
    id: 'cmd-mkt-video',
    type: 'command',
    label: '/ckm:video',
    description: 'Video scripts & storyboards ⚡⚡⚡',
    position: { x: 580, y: 400 }
  },
  {
    id: 'cmd-mkt-slides',
    type: 'command',
    label: '/ckm:slides',
    description: 'Pitch decks & presentations ⚡⚡',
    position: { x: 660, y: 400 }
  },

  // Command nodes - Grow & CRO
  {
    id: 'cmd-ckm-launch',
    type: 'command',
    label: '/ckm:launch-strategy',
    description: 'Product go-to-market ⚡⚡⚡⚡',
    position: { x: 660, y: 520 }
  },
  {
    id: 'cmd-ckm-pricing',
    type: 'command',
    label: '/ckm:pricing-strategy',
    description: 'Revenue optimization ⚡⚡⚡',
    position: { x: 740, y: 400 }
  },
  {
    id: 'cmd-ckm-form-cro',
    type: 'command',
    label: '/ckm:form-cro',
    description: 'Conversion optimization ⚡⚡',
    position: { x: 820, y: 400 }
  },

  // Command nodes - Analyze & Strategy
  {
    id: 'cmd-mkt-competitor',
    type: 'command',
    label: '/ckm:competitor',
    description: 'Competitive analysis ⚡⚡⚡',
    position: { x: 820, y: 520 }
  },
  {
    id: 'cmd-mkt-seo',
    type: 'command',
    label: '/ckm:seo',
    description: 'SEO audit & keywords ⚡⚡⚡',
    position: { x: 900, y: 400 }
  },
  {
    id: 'cmd-mkt-funnel',
    type: 'command',
    label: '/ckm:funnel',
    description: 'Funnel design & optimize ⚡⚡⚡',
    position: { x: 980, y: 400 }
  },

  // Command nodes - Design
  {
    id: 'cmd-ckm-design',
    type: 'command',
    label: '/ckm:design',
    description: 'Logo, banner, social ⚡⚡⚡⚡',
    position: { x: 1000, y: 280 }
  },
  {
    id: 'cmd-ckm-design-system',
    type: 'command',
    label: '/ckm:design-system',
    description: 'Brand guidelines ⚡⚡⚡',
    position: { x: 1120, y: 280 }
  },

  // Command nodes - Project Management
  {
    id: 'cmd-mkt-kanban',
    type: 'command',
    label: '/ckm:kanban',
    description: 'Task visualization ⚡',
    position: { x: 1180, y: 280 }
  },
  {
    id: 'cmd-mkt-brand',
    type: 'command',
    label: '/ckm:brand',
    description: 'Brand management ⚡⚡',
    position: { x: 1300, y: 280 }
  },
  {
    id: 'cmd-mkt-hub',
    type: 'command',
    label: '/ckm:hub',
    description: 'Content hub server ⚡',
    position: { x: 1240, y: 400 }
  },

  // Command nodes - Help
  {
    id: 'cmd-mkt-watzup',
    type: 'command',
    label: '/ckm:watzup',
    description: 'Session wrap-up ⚡',
    position: { x: 1360, y: 280 }
  },
  {
    id: 'cmd-ck-ask',
    type: 'command',
    label: '/ck:ask',
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
    id: 'e-mkt-learn-ck-help',
    from: 'mkt-learn',
    to: 'cmd-mkt-ck-help',
    path: generatePath({ x: 100, y: 160 }, { x: 100, y: 280 })
  },
  {
    id: 'e-mkt-ck-help-init',
    from: 'cmd-mkt-ck-help',
    to: 'cmd-mkt-init',
    label: 'Next',
    path: generatePath({ x: 100, y: 280 }, { x: 100, y: 400 }),
    labelX: 120,
    labelY: 340
  },

  // Plan branch - 2 separate paths
  // Path 1: Idea? → /ck:brainstorm (standalone endpoint)
  {
    id: 'e-mkt-plan-brainstorm',
    from: 'mkt-plan',
    to: 'cmd-ck-brainstorm',
    label: 'Idea?',
    path: generatePath({ x: 260, y: 160 }, { x: 180, y: 280 }),
    labelX: 200,
    labelY: 220
  },
  // Path 2: Ready? → /ckm:plan → Go → /ckm:write:good
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
    to: 'cmd-ckm-launch',
    label: 'Launch',
    path: generatePath({ x: 740, y: 280 }, { x: 660, y: 520 }),
    labelX: 680,
    labelY: 400
  },
  {
    id: 'e-mkt-focus-pricing',
    from: 'mkt-grow-focus',
    to: 'cmd-ckm-pricing',
    label: 'Price',
    path: generatePath({ x: 740, y: 280 }, { x: 740, y: 400 }),
    labelX: 760,
    labelY: 340
  },
  {
    id: 'e-mkt-focus-cro',
    from: 'mkt-grow-focus',
    to: 'cmd-ckm-form-cro',
    label: 'CRO',
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

  // Design branch
  {
    id: 'e-mkt-design-cmd',
    from: 'mkt-design',
    to: 'cmd-ckm-design',
    label: 'Create',
    path: generatePath({ x: 1060, y: 160 }, { x: 1000, y: 280 }),
    labelX: 1010,
    labelY: 220
  },
  {
    id: 'e-mkt-design-system',
    from: 'mkt-design',
    to: 'cmd-ckm-design-system',
    label: 'System',
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
  // Learn ClaudeKit paths
  {
    id: 'mkt-path-learn',
    name: 'Learn ClaudeKit',
    nodes: ['mkt-start', 'mkt-learn', 'cmd-mkt-ck-help', 'cmd-mkt-init'],
    edges: ['e-mkt-start-learn', 'e-mkt-learn-ck-help', 'e-mkt-ck-help-init'],
    command: '/ckm:ck-help → /ckm:init',
    description: 'Start here: Learn CK basics then setup your marketing workspace',
    color: 'green'
  },

  // Plan paths - 2 separate workflows
  // Path 1: Brainstorm (standalone)
  {
    id: 'mkt-path-brainstorm',
    name: 'Brainstorm Ideas',
    nodes: ['mkt-start', 'mkt-plan', 'cmd-ck-brainstorm'],
    edges: ['e-mkt-start-plan', 'e-mkt-plan-brainstorm'],
    command: '/ck:brainstorm',
    description: 'Explore campaign angles and marketing ideas',
    color: 'violet'
  },
  // Path 2: Plan → Execute (for when you know what to do)
  {
    id: 'mkt-path-plan-execute',
    name: 'Plan & Execute',
    nodes: ['mkt-start', 'mkt-plan', 'cmd-mkt-plan', 'cmd-mkt-write-good'],
    edges: ['e-mkt-start-plan', 'e-mkt-plan-ready', 'e-mkt-plan-execute'],
    command: '/ckm:plan → /ckm:write:good',
    description: 'Know what to do? Create plan then execute with quality content',
    color: 'purple'
  },

  // Campaign paths
  {
    id: 'mkt-path-campaign-multi',
    name: 'Multi-channel Campaign',
    nodes: ['mkt-start', 'mkt-campaign', 'mkt-campaign-type', 'cmd-mkt-campaign'],
    edges: ['e-mkt-start-campaign', 'e-mkt-campaign-type', 'e-mkt-type-campaign'],
    command: '/ckm:campaign',
    description: 'Create unified campaigns across email, social, and paid channels',
    color: 'purple'
  },
  {
    id: 'mkt-path-campaign-email',
    name: 'Email Campaign',
    nodes: ['mkt-start', 'mkt-campaign', 'mkt-campaign-type', 'cmd-mkt-email'],
    edges: ['e-mkt-start-campaign', 'e-mkt-campaign-type', 'e-mkt-type-email'],
    command: '/ckm:email',
    description: 'Design email flows and nurture sequences',
    color: 'purple'
  },
  {
    id: 'mkt-path-campaign-social',
    name: 'Social Campaign',
    nodes: ['mkt-start', 'mkt-campaign', 'mkt-campaign-type', 'cmd-mkt-social'],
    edges: ['e-mkt-start-campaign', 'e-mkt-campaign-type', 'e-mkt-type-social'],
    command: '/ckm:social',
    description: 'Schedule and manage social media content',
    color: 'purple'
  },

  // Content paths
  {
    id: 'mkt-path-content-write',
    name: 'Blog & Articles',
    nodes: ['mkt-start', 'mkt-content', 'mkt-content-type', 'cmd-mkt-write'],
    edges: ['e-mkt-start-content', 'e-mkt-content-type', 'e-mkt-format-write'],
    command: '/ckm:write',
    description: 'Write blogs, CRO copy, and marketing content (8 modes)',
    color: 'pink'
  },
  {
    id: 'mkt-path-content-video',
    name: 'Video Content',
    nodes: ['mkt-start', 'mkt-content', 'mkt-content-type', 'cmd-mkt-video'],
    edges: ['e-mkt-start-content', 'e-mkt-content-type', 'e-mkt-format-video'],
    command: '/ckm:video',
    description: 'Create video scripts and storyboards',
    color: 'pink'
  },
  {
    id: 'mkt-path-content-slides',
    name: 'Presentations',
    nodes: ['mkt-start', 'mkt-content', 'mkt-content-type', 'cmd-mkt-slides'],
    edges: ['e-mkt-start-content', 'e-mkt-content-type', 'e-mkt-format-slides'],
    command: '/ckm:slides',
    description: 'Build pitch decks and training presentations',
    color: 'pink'
  },

  // Growth paths
  {
    id: 'mkt-path-grow-launch',
    name: 'Product Launch',
    nodes: ['mkt-start', 'mkt-grow', 'mkt-grow-focus', 'cmd-ckm-launch'],
    edges: ['e-mkt-start-grow', 'e-mkt-grow-focus', 'e-mkt-focus-launch'],
    command: '/ckm:launch-strategy',
    description: 'Plan go-to-market strategy for new products',
    color: 'emerald'
  },
  {
    id: 'mkt-path-grow-pricing',
    name: 'Pricing Strategy',
    nodes: ['mkt-start', 'mkt-grow', 'mkt-grow-focus', 'cmd-ckm-pricing'],
    edges: ['e-mkt-start-grow', 'e-mkt-grow-focus', 'e-mkt-focus-pricing'],
    command: '/ckm:pricing-strategy',
    description: 'Optimize pricing tiers and revenue models',
    color: 'emerald'
  },
  {
    id: 'mkt-path-grow-cro',
    name: 'Form CRO',
    nodes: ['mkt-start', 'mkt-grow', 'mkt-grow-focus', 'cmd-ckm-form-cro'],
    edges: ['e-mkt-start-grow', 'e-mkt-grow-focus', 'e-mkt-focus-cro'],
    command: '/ckm:form-cro',
    description: 'Optimize forms for higher conversion rates',
    color: 'emerald'
  },

  // Analyze paths
  {
    id: 'mkt-path-analyze-competitor',
    name: 'Competitor Analysis',
    nodes: ['mkt-start', 'mkt-analyze', 'mkt-analyze-type', 'cmd-mkt-competitor'],
    edges: ['e-mkt-start-analyze', 'e-mkt-analyze-type', 'e-mkt-what-competitor'],
    command: '/ckm:competitor',
    description: 'Research competitors, content, and market positioning',
    color: 'blue'
  },
  {
    id: 'mkt-path-analyze-seo',
    name: 'SEO Analysis',
    nodes: ['mkt-start', 'mkt-analyze', 'mkt-analyze-type', 'cmd-mkt-seo'],
    edges: ['e-mkt-start-analyze', 'e-mkt-analyze-type', 'e-mkt-what-seo'],
    command: '/ckm:seo',
    description: 'Audit SEO, research keywords, plan pSEO pages',
    color: 'blue'
  },
  {
    id: 'mkt-path-analyze-funnel',
    name: 'Funnel Optimization',
    nodes: ['mkt-start', 'mkt-analyze', 'mkt-analyze-type', 'cmd-mkt-funnel'],
    edges: ['e-mkt-start-analyze', 'e-mkt-analyze-type', 'e-mkt-what-funnel'],
    command: '/ckm:funnel',
    description: 'Design, analyze, and optimize conversion funnels',
    color: 'blue'
  },

  // Design paths
  {
    id: 'mkt-path-design-create',
    name: 'Create Designs',
    nodes: ['mkt-start', 'mkt-design', 'cmd-ckm-design'],
    edges: ['e-mkt-start-design', 'e-mkt-design-cmd'],
    command: '/ckm:design',
    description: 'Generate logos, banners, social graphics, and slides',
    color: 'teal'
  },
  {
    id: 'mkt-path-design-system',
    name: 'Design System',
    nodes: ['mkt-start', 'mkt-design', 'cmd-ckm-design-system'],
    edges: ['e-mkt-start-design', 'e-mkt-design-system'],
    command: '/ckm:design-system',
    description: 'Build comprehensive brand guidelines and design tokens',
    color: 'teal'
  },

  // Project paths
  {
    id: 'mkt-path-project-kanban',
    name: 'Task Board',
    nodes: ['mkt-start', 'mkt-project', 'cmd-mkt-kanban'],
    edges: ['e-mkt-start-project', 'e-mkt-project-kanban'],
    command: '/ckm:kanban',
    description: 'Visualize and manage marketing tasks',
    color: 'cyan'
  },
  {
    id: 'mkt-path-project-brand',
    name: 'Brand Management',
    nodes: ['mkt-start', 'mkt-project', 'cmd-mkt-brand'],
    edges: ['e-mkt-start-project', 'e-mkt-project-brand'],
    command: '/ckm:brand',
    description: 'Create, update, and review brand guidelines',
    color: 'cyan'
  },
  {
    id: 'mkt-path-project-hub',
    name: 'Content Hub',
    nodes: ['mkt-start', 'mkt-project', 'cmd-mkt-hub'],
    edges: ['e-mkt-start-project', 'e-mkt-project-hub'],
    command: '/ckm:hub',
    description: 'Start local server for content management',
    color: 'cyan'
  },

  // Help paths
  {
    id: 'mkt-path-help-watzup',
    name: 'Session Status',
    nodes: ['mkt-start', 'mkt-help', 'cmd-mkt-watzup'],
    edges: ['e-mkt-start-help', 'e-mkt-help-watzup'],
    command: '/ckm:watzup',
    description: 'Review recent changes and wrap up session',
    color: 'indigo'
  },
  {
    id: 'mkt-path-help-ask',
    name: 'Expert Consultation',
    nodes: ['mkt-start', 'mkt-help', 'cmd-ck-ask'],
    edges: ['e-mkt-start-help', 'e-mkt-help-ask'],
    command: '/ck:ask',
    description: 'Get expert advice on marketing strategy',
    color: 'indigo'
  }
];

export { marketingNodes, marketingEdges, marketingPaths };

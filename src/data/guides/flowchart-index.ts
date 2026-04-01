// Flowchart data index - assembles unified Engineer Kit and Marketing Kit data
// Beta nodes/edges/paths are merged into stable with isBeta flag for UI badges
import {
  type FlowchartNode,
  type FlowchartEdge,
  type FlowchartPath,
  type FlowchartData,
  generatePath,
  pathColors,
} from './flowchart-types';
import { stableNodes, stableEdges, stablePaths } from './flowchart-stable-v25-data';
import { betaNodes, betaEdges, betaPaths } from './flowchart-legacy-v24-data';
import { marketingNodes, marketingEdges, marketingPaths } from './flowchart-marketing-v12-data';

export type { FlowchartNode, FlowchartEdge, FlowchartPath, FlowchartData };
export { pathColors };

// Engineer Kit uses 1500 width (start at x:700)
const engineerViewBox = '0 0 1500 800';
// Marketing Kit uses 1600 width (start at x:800, 9 branches need more space)
const marketingViewBox = '0 0 1600 720';

// Beta-only nodes (merged into unified data with isBeta flag)
const betaExtraNodes: FlowchartNode[] = [
  {
    id: 'cmd-llms',
    type: 'command',
    label: '/ck:llms',
    description: 'Generate llms.txt files (llmstxt.org)',
    position: { x: 900, y: 440 },

  },
  {
    id: 'cmd-deploy',
    type: 'command',
    label: '/ck:deploy',
    description: 'Auto-detect & deploy to 15+ platforms ⚡⚡',
    position: { x: 790, y: 520 },

  },
  {
    id: 'cmd-security-scan-beta',
    type: 'command',
    label: '/ck:security-scan',
    description: 'Scan for vulnerabilities & secrets ⚡⚡',
    position: { x: 615, y: 440 },

  },
  {
    id: 'cmd-project-org',
    type: 'command',
    label: '/ck:project-organization',
    description: 'Standardize file locations & naming ⚡',
    position: { x: 130, y: 520 },

  }
];

// Beta-only edges
const betaExtraEdges: FlowchartEdge[] = [
  {
    id: 'e-docs-llms',
    from: 'docs-design',
    to: 'cmd-llms',
    label: 'AI index?',
    path: generatePath({ x: 900, y: 160 }, { x: 900, y: 440 }),
    labelX: 920,
    labelY: 300
  },
  {
    id: 'e-git-deploy',
    from: 'git-ops',
    to: 'cmd-deploy',
    label: 'deploy?',
    path: generatePath({ x: 790, y: 160 }, { x: 790, y: 520 }),
    labelX: 810,
    labelY: 340
  },
  {
    id: 'e-fix-security',
    from: 'fix-something',
    to: 'cmd-security-scan-beta',
    label: 'audit?',
    path: generatePath({ x: 615, y: 160 }, { x: 615, y: 440 }),
    labelX: 635,
    labelY: 300
  },
  {
    id: 'e-existing-project-org',
    from: 'existing-project',
    to: 'cmd-project-org',
    label: 'organize?',
    path: generatePath({ x: 265, y: 160 }, { x: 130, y: 520 }),
    labelX: 140,
    labelY: 440
  }
];

// Beta-only paths
const betaExtraPaths: FlowchartPath[] = [
  {
    id: 'path-llms',
    name: 'Docs Index',
    nodes: ['start', 'docs-design', 'cmd-llms'],
    edges: ['e-start-docs-design', 'e-docs-llms'],
    command: '/ck:llms',
    description: 'Generate llms.txt files following llmstxt.org spec for AI-readable documentation',
    color: 'amber',

  },
  {
    id: 'path-deploy',
    name: 'Deploy App',
    nodes: ['start', 'git-ops', 'cmd-deploy'],
    edges: ['e-start-git-ops', 'e-git-deploy'],
    command: '/ck:deploy',
    description: 'Auto-detect project type and deploy to 15+ cloud platforms',
    color: 'orange',

  },
  {
    id: 'path-security-scan-beta',
    name: 'Security Audit',
    nodes: ['start', 'fix-something', 'cmd-security-scan-beta'],
    edges: ['e-start-fix-something', 'e-fix-security'],
    command: '/ck:security-scan',
    description: 'Scan for OWASP vulnerabilities, leaked secrets, and insecure patterns',
    color: 'red',

  },
  {
    id: 'path-project-org',
    name: 'Organize Project',
    nodes: ['start', 'existing-project', 'cmd-project-org'],
    edges: ['e-start-existing-project', 'e-existing-project-org'],
    command: '/ck:project-organization',
    description: 'Standardize file locations, naming conventions, and project structure',
    color: 'teal',

  }
];

// Unified Engineer Kit data (stable + beta merged, beta items flagged with isBeta)
const unifiedNodes: FlowchartNode[] = [...stableNodes, ...betaExtraNodes];
const unifiedEdges: FlowchartEdge[] = [...stableEdges, ...betaExtraEdges];
const unifiedPaths: FlowchartPath[] = [...stablePaths, ...betaExtraPaths];

// Engineer Kit unified flowchart data (v2.13.0 stable + v2.14.0 beta)
export const engineerFlowchartData: FlowchartData = {
  nodes: unifiedNodes,
  edges: unifiedEdges,
  paths: unifiedPaths,
  viewBox: engineerViewBox
};

// Backward compat aliases
export const stableFlowchartData = engineerFlowchartData;
export const betaFlowchartData = engineerFlowchartData;

// Legacy v2.4.x flowchart data - kept for reference, NOT rendered
export const legacyFlowchartData: FlowchartData = {
  nodes: betaNodes,
  edges: betaEdges,
  paths: betaPaths,
  viewBox: engineerViewBox
};

// Marketing Kit v1.2.1 flowchart data
export const marketingFlowchartData: FlowchartData = {
  nodes: marketingNodes,
  edges: marketingEdges,
  paths: marketingPaths,
  viewBox: marketingViewBox
};

// Default export for backward compatibility
export const flowchartData = engineerFlowchartData;

// Kit type for type safety
export type FlowchartKit = 'engineer' | 'marketing';

// Helper to get flowchart data by kit type
export function getFlowchartDataByKit(kit: FlowchartKit): FlowchartData {
  return kit === 'marketing' ? marketingFlowchartData : engineerFlowchartData;
}

// Helper to get path by command name
export function getPathByCommand(command: string, kit: FlowchartKit = 'engineer'): FlowchartPath | undefined {
  const paths = kit === 'marketing' ? marketingPaths : unifiedPaths;
  return paths.find(p => p.command === command || p.command.includes(command));
}

// Helper to get all paths that pass through a node
export function getPathsContainingNode(nodeId: string, kit: FlowchartKit = 'engineer'): FlowchartPath[] {
  const paths = kit === 'marketing' ? marketingPaths : unifiedPaths;
  return paths.filter(p => p.nodes.includes(nodeId));
}

// Helper to get all paths that traverse an edge
export function getPathsContainingEdge(edgeId: string, kit: FlowchartKit = 'engineer'): FlowchartPath[] {
  const paths = kit === 'marketing' ? marketingPaths : unifiedPaths;
  return paths.filter(p => p.edges.includes(edgeId));
}

// Flowchart data index - assembles stable, beta, and legacy FlowchartData objects
// Re-exports all public APIs for consumers (FlowchartInteractive.astro etc.)
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

// Stable (v2.13.0) flowchart data (skill-based approach)
export const stableFlowchartData: FlowchartData = {
  nodes: stableNodes,
  edges: stableEdges,
  paths: stablePaths,
  viewBox: engineerViewBox
};

// Beta flowchart data - superset of stable with new skill nodes
const betaOnlyNodes: FlowchartNode[] = [
  ...stableNodes,
  // Beta-only: /llms skill node
  {
    id: 'cmd-llms',
    type: 'command',
    label: '/llms',
    description: 'Generate llms.txt files (llmstxt.org)',
    position: { x: 1000, y: 280 }
  },
  // Beta-only: /deploy skill node
  {
    id: 'cmd-deploy',
    type: 'command',
    label: '/deploy',
    description: 'Auto-detect & deploy to 15+ platforms ⚡⚡',
    position: { x: 790, y: 280 }
  },
  // Beta-only: /security-scan skill node
  {
    id: 'cmd-security-scan',
    type: 'command',
    label: '/security-scan',
    description: 'Scan for vulnerabilities & secrets ⚡⚡',
    position: { x: 615, y: 520 }
  },
  // Beta-only: /project-organization skill node
  {
    id: 'cmd-project-org',
    type: 'command',
    label: '/project-organization',
    description: 'Standardize file locations & naming ⚡',
    position: { x: 265, y: 520 }
  }
];

const betaOnlyEdges: FlowchartEdge[] = [
  ...stableEdges,
  // Beta-only: edge from docs-design to /llms
  {
    id: 'e-docs-llms',
    from: 'docs-design',
    to: 'cmd-llms',
    label: 'AI index?',
    path: generatePath({ x: 900, y: 160 }, { x: 1000, y: 280 }),
    labelX: 965,
    labelY: 215
  },
  // Beta-only: edge from git-ops to /deploy
  {
    id: 'e-git-deploy',
    from: 'git-ops',
    to: 'cmd-deploy',
    label: 'deploy?',
    path: generatePath({ x: 790, y: 160 }, { x: 790, y: 280 }),
    labelX: 810,
    labelY: 215
  },
  // Beta-only: edge from fix-something to /security-scan
  {
    id: 'e-fix-security',
    from: 'fix-something',
    to: 'cmd-security-scan',
    label: 'audit?',
    path: generatePath({ x: 615, y: 160 }, { x: 615, y: 520 }),
    labelX: 635,
    labelY: 340
  },
  // Beta-only: edge from existing-project to /project-organization
  {
    id: 'e-existing-project-org',
    from: 'existing-project',
    to: 'cmd-project-org',
    label: 'organize?',
    path: generatePath({ x: 265, y: 160 }, { x: 265, y: 520 }),
    labelX: 285,
    labelY: 340
  }
];

const betaOnlyPaths: FlowchartPath[] = [
  ...stablePaths,
  // Beta-only: /llms path
  {
    id: 'path-llms',
    name: 'Docs Index (Beta)',
    nodes: ['start', 'docs-design', 'cmd-llms'],
    edges: ['e-start-docs-design', 'e-docs-llms'],
    command: '/llms',
    description: 'Generate llms.txt files following llmstxt.org spec for AI-readable documentation',
    color: 'amber'
  },
  // Beta-only: /deploy path
  {
    id: 'path-deploy',
    name: 'Deploy App (Beta)',
    nodes: ['start', 'git-ops', 'cmd-deploy'],
    edges: ['e-start-git-ops', 'e-git-deploy'],
    command: '/deploy',
    description: 'Auto-detect project type and deploy to 15+ cloud platforms',
    color: 'orange'
  },
  // Beta-only: /security-scan path
  {
    id: 'path-security-scan',
    name: 'Security Audit (Beta)',
    nodes: ['start', 'fix-something', 'cmd-security-scan'],
    edges: ['e-start-fix-something', 'e-fix-security'],
    command: '/security-scan',
    description: 'Scan for OWASP vulnerabilities, leaked secrets, and insecure patterns',
    color: 'red'
  },
  // Beta-only: /project-organization path
  {
    id: 'path-project-org',
    name: 'Organize Project (Beta)',
    nodes: ['start', 'existing-project', 'cmd-project-org'],
    edges: ['e-start-existing-project', 'e-existing-project-org'],
    command: '/project-organization',
    description: 'Standardize file locations, naming conventions, and project structure',
    color: 'teal'
  }
];

export const betaFlowchartData: FlowchartData = {
  nodes: betaOnlyNodes,
  edges: betaOnlyEdges,
  paths: betaOnlyPaths,
  viewBox: engineerViewBox
};

// Legacy v2.4.x flowchart data - kept for reference, NOT rendered
// Uses old command syntax: /git:cm, /git:pr, /design:*, /code @plan.md
export const legacyFlowchartData: FlowchartData = {
  nodes: betaNodes,
  edges: betaEdges,
  paths: betaPaths,
  viewBox: engineerViewBox
};

// Marketing Kit v1.2.1 flowchart data (purpose-driven for marketers)
// Includes both stable (/mkt:*) and beta (/ckm:*) commands
export const marketingFlowchartData: FlowchartData = {
  nodes: marketingNodes,
  edges: marketingEdges,
  paths: marketingPaths,
  viewBox: marketingViewBox
};

// Default export for backward compatibility
export const flowchartData = stableFlowchartData;

// Kit type for type safety
export type FlowchartKit = 'engineer' | 'marketing';

// Helper to get flowchart data by kit type
export function getFlowchartDataByKit(kit: FlowchartKit): FlowchartData {
  return kit === 'marketing' ? marketingFlowchartData : stableFlowchartData;
}

// Helper to get path by command name
export function getPathByCommand(command: string, kit: FlowchartKit = 'engineer'): FlowchartPath | undefined {
  const paths = kit === 'marketing' ? marketingPaths : stablePaths;
  return paths.find(p => p.command === command || p.command.includes(command));
}

// Helper to get all paths that pass through a node
export function getPathsContainingNode(nodeId: string, kit: FlowchartKit = 'engineer'): FlowchartPath[] {
  const paths = kit === 'marketing' ? marketingPaths : stablePaths;
  return paths.filter(p => p.nodes.includes(nodeId));
}

// Helper to get all paths that traverse an edge
export function getPathsContainingEdge(edgeId: string, kit: FlowchartKit = 'engineer'): FlowchartPath[] {
  const paths = kit === 'marketing' ? marketingPaths : stablePaths;
  return paths.filter(p => p.edges.includes(edgeId));
}

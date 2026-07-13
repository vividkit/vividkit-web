// Flowchart data barrel - re-exports all public APIs for backward compatibility
// Modular files: flowchart-types.ts, flowchart-legacy-data.ts,
//                flowchart-engineer-data.ts, flowchart-marketing-data.ts, flowchart-index.ts
export {
  type FlowchartNode,
  type FlowchartEdge,
  type FlowchartPath,
  type FlowchartData,
  type FlowchartKit,
  pathColors,
  engineerFlowchartData,
  stableFlowchartData,
  betaFlowchartData,
  legacyFlowchartData,
  marketingFlowchartData,
  flowchartData,
  getPathByCommand,
  getPathsContainingNode,
  getPathsContainingEdge,
  getFlowchartDataByKit,
} from './flowchart-index';

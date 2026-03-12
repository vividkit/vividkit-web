// Flowchart data barrel - re-exports all public APIs for backward compatibility
// Modular files: flowchart-types.ts, flowchart-legacy-v24-data.ts,
//                flowchart-stable-v25-data.ts, flowchart-index.ts
export {
  type FlowchartNode,
  type FlowchartEdge,
  type FlowchartPath,
  type FlowchartData,
  pathColors,
  stableFlowchartData,
  betaFlowchartData,
  legacyFlowchartData,
  flowchartData,
  getPathByCommand,
  getPathsContainingNode,
  getPathsContainingEdge,
} from './flowchart-index';

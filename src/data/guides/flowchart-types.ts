// Shared TypeScript interfaces and utilities for flowchart data
// Used by flowchart-legacy-v24-data.ts, flowchart-stable-v25-data.ts, and flowchart-index.ts

export interface FlowchartNode {
  id: string;
  type: 'start' | 'decision' | 'command';
  label: string;
  description?: string;
  position: { x: number; y: number };
}

export interface FlowchartEdge {
  id: string;
  from: string;
  to: string;
  label?: string;
  path: string; // SVG path d attribute
  labelX?: number;
  labelY?: number;
}

export interface FlowchartPath {
  id: string;
  name: string;
  nodes: string[];
  edges: string[];
  command: string;
  description: string;
  color: string;
}

export interface FlowchartData {
  nodes: FlowchartNode[];
  edges: FlowchartEdge[];
  paths: FlowchartPath[];
  viewBox: string;
}

// Generate SVG path between two points with curved lines
export function generatePath(from: { x: number; y: number }, to: { x: number; y: number }): string {
  const midY = (from.y + to.y) / 2;
  return `M ${from.x} ${from.y + 25} C ${from.x} ${midY}, ${to.x} ${midY}, ${to.x} ${to.y - 25}`;
}

// Color mapping for path colors used in interactive flowchart rendering
export const pathColors: Record<string, { bg: string; text: string; glow: string }> = {
  purple: {
    bg: 'rgba(147, 51, 234, 0.2)',
    text: '#A855F7',
    glow: 'rgba(147, 51, 234, 0.6)'
  },
  blue: {
    bg: 'rgba(59, 130, 246, 0.2)',
    text: '#3B82F6',
    glow: 'rgba(59, 130, 246, 0.6)'
  },
  cyan: {
    bg: 'rgba(6, 182, 212, 0.2)',
    text: '#06B6D4',
    glow: 'rgba(6, 182, 212, 0.6)'
  },
  orange: {
    bg: 'rgba(249, 115, 22, 0.2)',
    text: '#F97316',
    glow: 'rgba(249, 115, 22, 0.6)'
  },
  red: {
    bg: 'rgba(239, 68, 68, 0.2)',
    text: '#EF4444',
    glow: 'rgba(239, 68, 68, 0.6)'
  },
  green: {
    bg: 'rgba(34, 197, 94, 0.2)',
    text: '#22C55E',
    glow: 'rgba(34, 197, 94, 0.6)'
  },
  amber: {
    bg: 'rgba(245, 158, 11, 0.2)',
    text: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.6)'
  },
  pink: {
    bg: 'rgba(236, 72, 153, 0.2)',
    text: '#EC4899',
    glow: 'rgba(236, 72, 153, 0.6)'
  },
  indigo: {
    bg: 'rgba(99, 102, 241, 0.2)',
    text: '#6366F1',
    glow: 'rgba(99, 102, 241, 0.6)'
  },
  emerald: {
    bg: 'rgba(16, 185, 129, 0.2)',
    text: '#10B981',
    glow: 'rgba(16, 185, 129, 0.6)'
  },
  violet: {
    bg: 'rgba(139, 92, 246, 0.2)',
    text: '#8B5CF6',
    glow: 'rgba(139, 92, 246, 0.6)'
  }
};

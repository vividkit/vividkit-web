/**
 * Auto-generated UI/UX Pro Max stats
 * DO NOT EDIT - regenerate with: npm run generate:stats
 */

import statsJson from './uiux-stats.json';

export interface UiuxStats {
  styles: number;
  colors: number;
  typography: number;
  charts: number;
  products: number;
  uxGuidelines: number;
  landing: number;
  prompts: number;
  stackGuidelines: number;
  stackCount: number;
  generatedAt: string;
}

export const uiuxStats: UiuxStats = statsJson as UiuxStats;

// Formatted stats for display (with + suffix for marketing)
export const uiuxDisplayStats = [
  { value: `${uiuxStats.styles}`, label: 'UI Styles', color: 'indigo' },
  { value: `${uiuxStats.colors}`, label: 'Color Palettes', color: 'purple' },
  { value: `${uiuxStats.typography}`, label: 'Font Pairings', color: 'pink' },
  { value: `${uiuxStats.charts}`, label: 'Chart Types', color: 'cyan' },
  { value: `${uiuxStats.products}`, label: 'Product Types', color: 'emerald' },
  { value: `${uiuxStats.uxGuidelines}`, label: 'UX Guidelines', color: 'amber' },
] as const;

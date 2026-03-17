/**
 * Auto-generate UI/UX Pro Max stats from CSV data files
 * Run: npx tsx scripts/generate-uiux-stats.ts
 *
 * Reads CSV files from .shared/ui-ux-pro-max/data/ and generates
 * stats JSON for the website to display accurate counts.
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// CSV data sources
const CSV_BASE = join(ROOT, '.shared/ui-ux-pro-max/data');
const STACKS_DIR = join(CSV_BASE, 'stacks');
const OUTPUT_FILE = join(ROOT, 'src/data/generated/uiux-stats.json');

// Count rows in CSV file (excluding header)
function countCsvRows(filePath: string): number {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const lines = content.split('\n').filter(line => line.trim());
    return Math.max(0, lines.length - 1); // Subtract header
  } catch {
    console.warn(`Warning: Could not read ${filePath}`);
    return 0;
  }
}

// Count total rows across all files in directory
function countStacksTotal(dir: string): number {
  try {
    const files = readdirSync(dir).filter(f => f.endsWith('.csv'));
    return files.reduce((total, file) => {
      return total + countCsvRows(join(dir, file));
    }, 0);
  } catch {
    return 0;
  }
}

// Generate stats
function generateStats() {
  const stats = {
    // Main data files
    styles: countCsvRows(join(CSV_BASE, 'styles.csv')),
    colors: countCsvRows(join(CSV_BASE, 'colors.csv')),
    typography: countCsvRows(join(CSV_BASE, 'typography.csv')),
    charts: countCsvRows(join(CSV_BASE, 'charts.csv')),
    products: countCsvRows(join(CSV_BASE, 'products.csv')),
    uxGuidelines: countCsvRows(join(CSV_BASE, 'ux-guidelines.csv')),
    landing: countCsvRows(join(CSV_BASE, 'landing.csv')),
    prompts: countCsvRows(join(CSV_BASE, 'prompts.csv')),

    // Stack guidelines (aggregated)
    stackGuidelines: countStacksTotal(STACKS_DIR),
    stackCount: 8, // html-tailwind, react, nextjs, vue, svelte, swiftui, react-native, flutter

    // Generated timestamp
    generatedAt: new Date().toISOString(),
  };

  // Write output
  writeFileSync(OUTPUT_FILE, JSON.stringify(stats, null, 2));

  console.log('Generated UI/UX stats:');
  console.log(`  - UI Styles: ${stats.styles}`);
  console.log(`  - Color Palettes: ${stats.colors}`);
  console.log(`  - Font Pairings: ${stats.typography}`);
  console.log(`  - Chart Types: ${stats.charts}`);
  console.log(`  - Product Types: ${stats.products}`);
  console.log(`  - UX Guidelines: ${stats.uxGuidelines}`);
  console.log(`  - Landing Patterns: ${stats.landing}`);
  console.log(`  - Stack Guidelines: ${stats.stackGuidelines} (${stats.stackCount} stacks)`);
  console.log(`\nOutput: ${OUTPUT_FILE}`);
}

generateStats();

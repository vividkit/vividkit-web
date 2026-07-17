#!/usr/bin/env node
import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = fileURLToPath(new URL('..', import.meta.url));
const assets = [
  ['public/guides/ccs_dashboard_dark.png', 'legacy/guides/ccs_dashboard_dark.png'],
  ['public/guides/ccs_dashboard_light.png', 'legacy/guides/ccs_dashboard_light.png'],
  ['public/guides/claudekit-5-pillars.png', 'legacy/guides/claudekit-5-pillars.png'],
  ['public/guides/claudekit-5-pillars-vi.png', 'legacy/guides/claudekit-5-pillars-vi.png'],
  ['public/guides/claudekit-comparison.png', 'legacy/guides/claudekit-comparison.png'],
  ['public/guides/claudekit-comparison-vi.png', 'legacy/guides/claudekit-comparison-vi.png'],
  ['public/guides/claudekit-team-metaphor.png', 'legacy/guides/claudekit-team-metaphor.png'],
  ['public/guides/claudekit-team-metaphor-vi.png', 'legacy/guides/claudekit-team-metaphor-vi.png'],
  ['public/guides/claudekit-workflow.png', 'legacy/guides/claudekit-workflow.png'],
  ['public/guides/claudekit-workflow-vi.png', 'legacy/guides/claudekit-workflow-vi.png'],
  ['public/guides/hooks/claudekit-hooks-guardrails-flow.svg', 'legacy/guides/hooks/claudekit-hooks-guardrails-flow.svg'],
  ['public/guides/hooks/claudekit-hooks-guardrails-flow-dark.svg', 'legacy/guides/hooks/claudekit-hooks-guardrails-flow-dark.svg'],
];
const outputs = ['dist', '.vercel/output/static'];

for (const output of outputs) {
  for (const [source, target] of assets) {
    const destination = resolve(repo, output, target);
    await mkdir(dirname(destination), { recursive: true });
    await copyFile(resolve(repo, source), destination);
  }
}

console.log(`[legacy-archive-assets] copied ${assets.length} frozen assets to ${outputs.length} outputs`);

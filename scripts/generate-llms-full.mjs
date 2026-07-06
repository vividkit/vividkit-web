/**
 * Generate llms-full.txt from the built guide HTML.
 *
 * Runs as an npm `postbuild` step (after `astro build`), so the rendered guide
 * pages already exist under dist/. It extracts the readable text of each guide
 * listed in guides-llms-index.mjs and writes a single full-text file to every
 * output root that exists (dist/ for previews, .vercel/output/static/ for the
 * deployed site). Kept in sync with /llms.txt via the shared index module.
 */

import { readFile, writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { guideSections, fallbackSiteUrl } from '../src/data/guides-llms-index.mjs';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const siteUrl = process.env.PUBLIC_SITE_URL || fallbackSiteUrl;

// Output roots where a static file must land to be served. dist/ is the Astro
// build output; .vercel/output/static/ is what the Vercel adapter deploys.
const OUTPUT_ROOTS = ['dist', '.vercel/output/static'];

// Cap per-guide text so an interactive/visualizer page (which dumps its whole
// DOM, e.g. How ClaudeKit Works) cannot dominate the file. Set above the
// longest prose guide so normal pages are never truncated.
const MAX_WORDS_PER_GUIDE = 6000;

/** Decode the handful of HTML entities that survive tag stripping. */
function decodeEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—')
    .replace(/&hellip;/g, '…');
}

/** Extract readable prose from a built guide's HTML, dropping chrome/scripts. */
function htmlToText(html) {
  // Isolate the main content column; fall back to whole doc if absent.
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  let content = mainMatch ? mainMatch[1] : html;

  // Remove non-content blocks (scripts, styles, icons, in-page navigation).
  for (const tag of ['script', 'style', 'svg', 'nav', 'aside', 'button']) {
    content = content.replace(new RegExp(`<${tag}[\\s\\S]*?</${tag}>`, 'gi'), ' ');
  }

  // Turn block-level boundaries into line breaks so structure survives.
  content = content
    .replace(/<\/(h[1-6]|p|li|tr|div|section|article|header)>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, ' ');

  content = decodeEntities(content);

  // Normalize whitespace: trim lines, drop empties.
  const rawLines = content
    .split('\n')
    .map((line) => line.replace(/[ \t ]+/g, ' ').trim())
    .filter(Boolean);

  // Collapse consecutive duplicate lines (desktop/mobile layouts and hidden
  // tabs render the same text twice in the static HTML).
  const lines = rawLines.filter((line, i) => line !== rawLines[i - 1]);

  return lines.join('\n');
}

/** Keep whole lines until the word budget is hit, then flag truncation. */
function capText(text, maxWords, sourceUrl) {
  const lines = text.split('\n');
  const kept = [];
  let count = 0;
  for (const line of lines) {
    const words = line.split(/\s+/).filter(Boolean).length;
    if (count + words > maxWords) {
      kept.push(`[Truncated — this guide is interactive; read the full version at ${sourceUrl}]`);
      break;
    }
    kept.push(line);
    count += words;
  }
  return kept.join('\n');
}

async function pathExists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

/** Map a site path like /guides/hooks to its built index.html under dist/. */
function htmlFileForPath(sitePath) {
  const clean = sitePath.replace(/^\/+/, '').replace(/\/+$/, '');
  return join(projectRoot, 'dist', clean, 'index.html');
}

async function buildFullText() {
  const parts = [
    '# VividKit Guides — Full Text',
    '',
    '> Full-text export of the VividKit ClaudeKit documentation for LLM agents. Each section is one guide, rendered to plain text. See /llms.txt for the curated link index.',
    '',
  ];

  for (const section of guideSections) {
    for (const link of section.links) {
      const sourceUrl = `${siteUrl}${link.path}`;

      // Interactive visualizers have no meaningful prose form — point at them.
      if (link.interactive) {
        parts.push(
          `## ${link.title}`,
          `Source: ${sourceUrl}`,
          '',
          `${link.desc} This is an interactive page; open the URL above for the live experience.`,
          '',
          '---',
          '',
        );
        continue;
      }

      const file = htmlFileForPath(link.path);
      if (!(await pathExists(file))) {
        console.warn(`[llms-full] skip (no build output): ${link.path}`);
        continue;
      }
      const html = await readFile(file, 'utf-8');
      const text = capText(htmlToText(html), MAX_WORDS_PER_GUIDE, sourceUrl);
      parts.push(
        `## ${link.title}`,
        `Source: ${sourceUrl}`,
        '',
        text,
        '',
        '---',
        '',
      );
    }
  }

  return parts.join('\n');
}

async function main() {
  const output = await buildFullText();
  let written = 0;

  for (const root of OUTPUT_ROOTS) {
    const rootPath = join(projectRoot, root);
    if (!(await pathExists(rootPath))) continue;
    await writeFile(join(rootPath, 'llms-full.txt'), output, 'utf-8');
    written += 1;
    console.log(`[llms-full] wrote ${root}/llms-full.txt`);
  }

  if (written === 0) {
    console.warn('[llms-full] no build output directory found; nothing written.');
  }
}

main().catch((err) => {
  console.error('[llms-full] generation failed:', err);
  process.exitCode = 1;
});

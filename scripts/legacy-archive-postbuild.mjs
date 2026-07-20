import { lstat, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { CANONICAL_SITE_ORIGIN } from '../src/data/site-origin.mjs';
import { sha256, treeRoot } from './legacy-archive-integrity.mjs';

const SENTINEL = '--vividkit-legacy-tailwind-boundary:1';
const LIVE_ROUTES = [
  '/guides/agentkit', '/vi/guides/agentkit',
  '/guides/cli', '/vi/guides/cli',
  '/guides/cli-commands', '/vi/guides/cli-commands',
  '/guides/coexistence', '/vi/guides/coexistence',
];

function routeFile(dist, route) {
  return resolve(dist, route.replace(/^\//, ''), 'index.html');
}

function stylesheetPaths(html) {
  return [...html.matchAll(/<link[^>]+href="([^"]+\.css)"[^>]*>/g)].map((match) => match[1]);
}

function javascriptPaths(html) {
  return [...html.matchAll(/(?:src|href)="(\/_astro\/[^"?#]+\.js)"/g)].map((match) => match[1]);
}

async function loadJavascriptGraph(dist, seeds) {
  const graph = new Map();
  const pending = [...seeds];
  while (pending.length) {
    const path = pending.pop().replace(/^\//, '');
    if (graph.has(path)) continue;
    const text = await readFile(resolve(dist, path), 'utf8');
    graph.set(path, text);
    for (const match of text.matchAll(/(?:from\s*|import\(\s*)["']([^"']+\.js)["']/g)) {
      const target = new URL(match[1], `https://archive.invalid/${path}`).pathname;
      if (target.startsWith('/_astro/')) pending.push(target);
    }
  }
  return graph;
}

async function loadRouteAssets(dist, route) {
  const html = await readFile(routeFile(dist, route), 'utf8');
  const css = new Map();
  for (const href of stylesheetPaths(html)) {
    const path = href.replace(/^\//, '');
    css.set(path, await readFile(resolve(dist, path), 'utf8'));
  }
  return { html, css };
}

export async function postbuildEvidence(repo) {
  const { LEGACY_GUIDE_SUFFIXES } = await import(new URL('../src/data/guides/legacy-guide-catalog.ts', import.meta.url));
  const archiveRoutes = ['', ...LEGACY_GUIDE_SUFFIXES].flatMap((suffix) => {
    const tail = suffix ? `/${suffix}` : '';
    return [`/legacy/guides${tail}`, `/vi/legacy/guides${tail}`];
  });
  const dist = resolve(repo, 'dist');
  const renderEntries = [];
  const archiveCss = new Map();
  const archiveJsSeeds = new Set();
  const missingAssets = [];
  for (const route of archiveRoutes) {
    const { html, css } = await loadRouteAssets(dist, route);
    const body = html.match(/<main[^>]*data-legacy-snapshot[^>]*>([\s\S]*?)<\/main>/)?.[0];
    if (!body) throw new Error(`missing normalized legacy main: ${route}`);
    if (!/<meta name="robots" content="noindex,follow"/.test(html)) throw new Error(`archive robots contract failed: ${route}`);
    if (!html.includes(`rel="canonical" href="${CANONICAL_SITE_ORIGIN}${route}"`)) throw new Error(`archive canonical contract failed: ${route}`);
    for (const [path, text] of css) archiveCss.set(path, text);
    for (const path of javascriptPaths(html)) archiveJsSeeds.add(path);
    if (![...css.values()].some((text) => text.includes(SENTINEL))) throw new Error(`archive CSS sentinel unreachable: ${route}`);
    renderEntries.push({ path: route, type: 'rendered-main', mode: 'normalized-v1', sha256: sha256(Buffer.from(body.replace(/>\s+</g, '><').trim())) });
    for (const match of html.matchAll(/(?:src|href)="(\/[^"?#]+\.(?:png|jpe?g|gif|webp|svg|css|js|woff2?))"/g)) {
      try { await lstat(resolve(dist, match[1].slice(1))); } catch { missingAssets.push(`${route} -> ${match[1]}`); }
    }
  }
  if (missingAssets.length) throw new Error(`missing archive assets:\n${[...new Set(missingAssets)].sort().join('\n')}`);

  const liveCss = new Map();
  const liveJsSeeds = new Set();
  for (const route of LIVE_ROUTES) {
    const { html, css } = await loadRouteAssets(dist, route);
    if (/data-legacy-(?:snapshot|archive-banner)/.test(html)) throw new Error(`archive provenance reached live route: ${route}`);
    for (const [path, text] of css) liveCss.set(path, text);
    for (const path of javascriptPaths(html)) liveJsSeeds.add(path);
    if ([...css.values()].some((text) => text.includes(SENTINEL))) throw new Error(`archive CSS reached live route: ${route}`);
  }
  const archiveJs = await loadJavascriptGraph(dist, archiveJsSeeds);
  const liveJs = await loadJavascriptGraph(dist, liveJsSeeds);
  const markerPattern = /claudekit-archive-2026-07-13|data-legacy-snapshot|@legacy-ck/;
  for (const [path, text] of liveJs) if (markerPattern.test(text)) throw new Error(`archive module marker reached live JavaScript: ${path}`);

  const sumBytes = (map) => [...map.values()].reduce((total, text) => total + Buffer.byteLength(text), 0);
  return {
    renderedBody: { algorithm: 'sha256-normalized-main-v1', routeCount: renderEntries.length, rootSha256: treeRoot(renderEntries) },
    cssBudget: {
      sentinel: SENTINEL,
      liveReachableBytes: sumBytes(liveCss),
      archiveReachableBytes: sumBytes(archiveCss),
      liveAssetCount: liveCss.size,
      archiveAssetCount: archiveCss.size,
      liveJsAssetCount: liveJs.size,
      archiveJsAssetCount: archiveJs.size,
    },
  };
}

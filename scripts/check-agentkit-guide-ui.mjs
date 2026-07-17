import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import puppeteer from 'puppeteer';
import {
  createAgentKitUiEvidenceEnvelope,
  runAgentKitChannelUiMatrix,
} from './check-agentkit-channel-ui.mjs';

const BASE_URL = process.env.UI_BASE_URL ?? 'http://127.0.0.1:4321';
const CHROME_PATH = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const EVIDENCE_DIR = resolve('artifacts/agentkit-ui');
const CHANNEL_EXPECTATION = process.env.UI_AGENTKIT_CHANNEL_EXPECT ?? 'published';
const CHANNEL_ONLY = process.env.UI_SCOPE === 'channel';
const EVIDENCE_VARIANT = process.env.UI_EVIDENCE_VARIANT ?? '';

if (!['hold', 'published'].includes(CHANNEL_EXPECTATION)) {
  throw new Error('UI_AGENTKIT_CHANNEL_EXPECT must be hold or published.');
}
if (EVIDENCE_VARIANT && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(EVIDENCE_VARIANT)) {
  throw new Error('UI_EVIDENCE_VARIANT must be a kebab-case artifact suffix.');
}

const changedGuideRoutes = [
  '/guides',
  '/guides/agentkit',
  '/guides/cli',
  '/guides/cli-commands',
  '/guides/commands',
  '/guides/finding-unknowns',
  '/guides/fix-logs',
  '/guides/flowchart',
  '/guides/how-ck-works',
  '/guides/inside-claudekit',
  '/guides/inside-claudekit/getting-started',
  '/guides/inside-claudekit/guard-rails',
  '/guides/inside-claudekit/plan-modes',
  '/guides/migrate',
  '/guides/ui-review-gate',
  '/guides/workflows',
  '/guides/ck-with-codex',
  '/guides/coexistence',
  '/guides/what-is-claudekit',
];

const compatibilityRedirects = [
  { route: '/guides/inside-claudekit/frontend-design', target: '/guides/inside-claudekit' },
  { route: '/vi/guides/inside-claudekit/frontend-design', target: '/vi/guides/inside-claudekit' },
];

const routes = changedGuideRoutes.flatMap((route) => [route, `/vi${route}`]);
const cases = [
  { name: 'mobile-light', width: 375, height: 812, theme: 'light' },
  { name: 'mobile-dark', width: 375, height: 812, theme: 'dark' },
  { name: 'desktop-light', width: 1440, height: 900, theme: 'light' },
  { name: 'desktop-dark', width: 1440, height: 900, theme: 'dark' },
];

await mkdir(EVIDENCE_DIR, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  headless: true,
  args: ['--no-sandbox'],
});

const results = [];

try {
  for (const route of CHANNEL_ONLY ? [] : routes) {
    for (const testCase of cases) {
      const page = await browser.newPage();
      await page.setCacheEnabled(false);
      let consoleErrorCount = 0;
      page.on('pageerror', () => { consoleErrorCount += 1; });
      await page.setViewport({ width: testCase.width, height: testCase.height, deviceScaleFactor: 1 });
      await page.evaluateOnNewDocument((theme) => localStorage.setItem('theme', theme), testCase.theme);

      const response = await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle0', timeout: 30_000 });
      const metrics = await page.evaluate(({ theme, expectedLang }) => {
        const root = document.documentElement;
        const main = document.querySelector('main');
        const bodyStyle = getComputedStyle(document.body);
        return {
          statusTheme: root.classList.contains('dark') ? 'dark' : 'light',
          htmlLang: root.lang,
          expectedLang,
          h1Count: document.querySelectorAll('h1').length,
          scrollWidth: root.scrollWidth,
          clientWidth: root.clientWidth,
          mainScrollWidth: main?.scrollWidth ?? 0,
          mainClientWidth: main?.clientWidth ?? 0,
          bodyBackground: bodyStyle.backgroundColor,
          requestedTheme: theme,
        };
      }, { theme: testCase.theme, expectedLang: route.startsWith('/vi/') ? 'vi' : 'en' });

      const failures = [];
      const status = response?.status() ?? 0;
      if (status < 200 || status >= 400) failures.push(`HTTP ${status || 'unknown'}`);
      if (metrics.statusTheme !== testCase.theme) failures.push(`theme=${metrics.statusTheme}`);
      if (metrics.htmlLang !== metrics.expectedLang) failures.push(`lang=${metrics.htmlLang}`);
      if (metrics.scrollWidth > metrics.clientWidth + 1) failures.push(`document-overflow=${metrics.scrollWidth - metrics.clientWidth}px`);
      if (consoleErrorCount > 0) failures.push(`console-errors=${consoleErrorCount}`);

      results.push({ route, case: testCase.name, ...metrics, consoleErrorCount, failures });
      await page.close();
    }
  }

  for (const redirect of CHANNEL_ONLY ? [] : compatibilityRedirects) {
    const page = await browser.newPage();
    await page.setCacheEnabled(false);
    const response = await page.goto(`${BASE_URL}${redirect.route}`, { waitUntil: 'networkidle0', timeout: 30_000 });
    const refresh = await page.$eval('meta[http-equiv="refresh"]', (meta) => meta.getAttribute('content')).catch(() => null);
    const status = response?.status() ?? 0;
    const failures = [];
    if (status < 200 || status >= 400) failures.push(`HTTP ${status || 'unknown'}`);
    if (!refresh?.includes(redirect.target)) failures.push(`redirect=${refresh ?? 'missing'}`);
    results.push({ route: redirect.route, case: 'compatibility-redirect', status, refresh, failures });
    await page.close();
  }

  for (const theme of CHANNEL_ONLY ? [] : ['light', 'dark']) {
    for (const locale of ['en', 'vi']) {
      const route = locale === 'vi' ? '/vi/guides/agentkit' : '/guides/agentkit';
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
      await page.evaluateOnNewDocument((value) => localStorage.setItem('theme', value), theme);
      await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle0' });
      await page.screenshot({
        path: resolve(EVIDENCE_DIR, `${locale}-${theme}-agentkit.png`),
        fullPage: true,
      });
      await page.close();
    }
  }
  results.push(...await runAgentKitChannelUiMatrix({
    browser,
    baseUrl: BASE_URL,
    evidenceDir: EVIDENCE_DIR,
    expected: CHANNEL_EXPECTATION,
  }));
} finally {
  await browser.close();
}

const failures = results.filter((result) => result.failures.length > 0);
const evidence = createAgentKitUiEvidenceEnvelope({
  baseUrl: BASE_URL,
  channelExpectation: CHANNEL_EXPECTATION,
  results,
});
await writeFile(
  resolve(EVIDENCE_DIR, `matrix-${CHANNEL_EXPECTATION}${EVIDENCE_VARIANT ? `-${EVIDENCE_VARIANT}` : ''}.json`),
  `${JSON.stringify(evidence, null, 2)}\n`,
);

console.log(`[agentkit-ui] ${results.length - failures.length}/${results.length} cases passed`);
for (const failure of failures) {
  console.error(`[agentkit-ui] ${failure.route} ${failure.case}: ${failure.failures.join(', ')}`);
}

if (failures.length > 0) process.exitCode = 1;

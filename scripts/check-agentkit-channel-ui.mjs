import { resolve } from 'node:path';

export const AGENTKIT_CHANNEL_UI_SURFACES = [
  '/guides/agentkit',
  '/guides/cli',
  '/guides/cli-commands',
  '/guides/coexistence',
];
export const AGENTKIT_CHANNEL_UI_FALLBACK_QUERIES = [
  '?channel=dev',
  '?channel=Beta',
  '?channel=BETA',
  '?channel=beta&channel=beta',
];
const SURFACE_PATHS = new Set(AGENTKIT_CHANNEL_UI_SURFACES.flatMap((path) => [path, `/vi${path}`]));
const VIEW_CASES = [
  { name: 'mobile-light', width: 375, height: 812, theme: 'light' },
  { name: 'mobile-dark', width: 375, height: 812, theme: 'dark' },
  { name: 'desktop-light', width: 1440, height: 900, theme: 'light' },
  { name: 'desktop-dark', width: 1440, height: 900, theme: 'dark' },
];
const UI_EVIDENCE_RETENTION_MS = 7 * 86400_000;
const UNSAFE_UI_EVIDENCE = /"(?:consoleErrors|pageErrors|stdout|stderr|stack|raw)"\s*:|\/Users\/|(?:token|password|secret)=|https?:\/\/[^/\s"]+@/i;

export function createAgentKitUiEvidenceEnvelope({
  baseUrl,
  channelExpectation,
  results,
  now = new Date(),
}) {
  if (!['inactive', 'hold', 'published'].includes(channelExpectation) || !Array.isArray(results)) {
    throw new Error('Unsafe UI evidence contract.');
  }
  const capturedAt = now.toISOString();
  const envelope = {
    schemaVersion: 1,
    tool: 'agentkit-guide-ui-matrix',
    capturedAt,
    retention: {
      classification: 'local-access-controlled',
      owner: 'vividkit-maintainer',
      reviewer: 'phase-8-offline-validation',
      expiresAt: new Date(now.getTime() + UI_EVIDENCE_RETENTION_MS).toISOString(),
      disposition: 'delete-after-expiry',
    },
    baseOrigin: new URL(baseUrl).origin,
    channelExpectation,
    results,
  };
  if (UNSAFE_UI_EVIDENCE.test(JSON.stringify(envelope))) {
    throw new Error('Unsafe UI evidence payload.');
  }
  return envelope;
}

function pushFailure(condition, failures, message) {
  if (condition) failures.push(message);
}

async function inspectPage(page, expected, requestPaths) {
  return page.evaluate(({ expected, surfacePaths, requestPaths }) => {
    const root = document.querySelector('[data-agentkit-channel-root]');
    const stableFacts = root?.querySelector('[data-agentkit-stable-facts]');
    const betaView = root?.querySelector('[data-agentkit-beta-view]');
    const notice = root?.querySelector('[data-agentkit-channel-notice]');
    const canonical = document.querySelector('link[rel="canonical"]')?.href ?? '';
    const links = [...document.querySelectorAll('a[href]:not([data-agentkit-channel-choice])')]
      .map((anchor) => new URL(anchor.href, location.href))
      .filter((url) => url.origin === location.origin);
    const surfaceLinks = links.filter((url) => surfacePaths.includes(url.pathname.replace(/\/$/, '')));
    const externalSurfaceLinks = surfaceLinks.filter((url) => url.pathname.replace(/\/$/, '') !== location.pathname.replace(/\/$/, ''));
    const offSurfaceLinks = links.filter((url) => !surfacePaths.includes(url.pathname.replace(/\/$/, '')));
    return {
      requested: root?.dataset.agentkitRequestedChannel ?? 'missing',
      active: root?.dataset.agentkitActiveChannel ?? 'missing',
      status: root?.dataset.agentkitChannelStatus ?? 'missing',
      stableHidden: stableFacts?.hasAttribute('hidden') ?? null,
      betaHidden: betaView?.hasAttribute('hidden') ?? null,
      noticeHidden: notice?.hasAttribute('hidden') ?? null,
      betaClaimVisible: Boolean(betaView?.querySelector('[data-agentkit-beta-view-marker]')),
      betaGuidanceVisible: Boolean(betaView?.querySelector('[data-agentkit-beta-guidance]')),
      canonical,
      path: location.pathname,
      search: location.search,
      theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
      lang: document.documentElement.lang,
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      surfaceLinkCount: externalSurfaceLinks.length,
      surfaceLinksPreserveBeta: externalSurfaceLinks.every((url) => url.searchParams.get('channel') === 'beta'),
      surfaceLinksDropBeta: externalSurfaceLinks.every((url) => !url.searchParams.has('channel')),
      offSurfaceLinksDropBeta: offSurfaceLinks.every((url) => !url.searchParams.has('channel')),
      betaRequests: requestPaths.filter((path) => path.includes('agentkit-beta-view.')),
      expected,
    };
  }, { expected, surfacePaths: [...SURFACE_PATHS], requestPaths });
}

function betaChannelStatus(expected) {
  if (expected === 'published') return 'published';
  if (expected === 'hold' || expected === 'inactive') return 'guidance';
  return 'stable';
}

function isBetaGuidanceExpected(expected) {
  return expected === 'published' || expected === 'hold' || expected === 'inactive';
}

async function runSurfaceCase({ browser, baseUrl, route, testCase, expected }) {
  const page = await browser.newPage();
  const failures = [];
  const requestPaths = [];
  let pageErrorCount = 0;
  page.on('request', (request) => requestPaths.push(new URL(request.url()).pathname));
  page.on('pageerror', () => { pageErrorCount += 1; });
  await page.setCacheEnabled(false);
  await page.setViewport({ width: testCase.width, height: testCase.height, deviceScaleFactor: 1 });
  await page.evaluateOnNewDocument((theme) => localStorage.setItem('theme', theme), testCase.theme);
  const query = expected === 'stable' ? '' : '?channel=beta';
  const response = await page.goto(`${baseUrl}${route}${query}`, { waitUntil: 'domcontentloaded', timeout: 30_000 });
  const expectedStatus = expected === 'stable' ? 'stable' : betaChannelStatus(expected);
  await page.waitForFunction(
    (status) => document.querySelector('[data-agentkit-channel-root]')?.dataset.agentkitChannelStatus === status,
    { timeout: 10_000 },
    expectedStatus,
  );
  const metrics = await inspectPage(page, expected, requestPaths);
  const status = response?.status() ?? 0;
  const betaActive = isBetaGuidanceExpected(expected);
  pushFailure(status < 200 || status >= 400, failures, `HTTP ${status || 'unknown'}`);
  pushFailure(metrics.theme !== testCase.theme, failures, `theme=${metrics.theme}`);
  pushFailure(metrics.lang !== (route.startsWith('/vi/') ? 'vi' : 'en'), failures, `lang=${metrics.lang}`);
  pushFailure(metrics.overflow > 1, failures, `overflow=${metrics.overflow}px`);
  pushFailure(pageErrorCount > 0, failures, `page-errors=${pageErrorCount}`);
  pushFailure(new URL(metrics.canonical).search !== '', failures, 'canonical-query');
  pushFailure(Boolean(metrics.stableHidden), failures, `stableHidden=${metrics.stableHidden}`);
  pushFailure(metrics.betaHidden !== !betaActive, failures, `betaHidden=${metrics.betaHidden}`);
  pushFailure(metrics.active !== (betaActive ? 'beta' : 'stable'), failures, `active=${metrics.active}`);
  pushFailure(metrics.requested !== (expected === 'stable' ? 'stable' : 'beta'), failures, `requested=${metrics.requested}`);
  pushFailure(metrics.betaClaimVisible !== (expected === 'published'), failures, `betaClaimVisible=${metrics.betaClaimVisible}`);
  pushFailure(metrics.betaGuidanceVisible !== betaActive, failures, `betaGuidanceVisible=${metrics.betaGuidanceVisible}`);
  pushFailure(metrics.betaRequests.length !== (expected === 'published' ? 1 : 0), failures, `betaRequests=${metrics.betaRequests.length}`);
  pushFailure(metrics.surfaceLinkCount === 0, failures, 'surface-links-missing');
  if (expected === 'stable') {
    pushFailure(!metrics.surfaceLinksDropBeta, failures, 'stable-surface-link-channel-leak');
  } else {
    pushFailure(!metrics.surfaceLinksPreserveBeta, failures, 'surface-link-channel-drift');
    pushFailure(!metrics.offSurfaceLinksDropBeta, failures, 'off-surface-channel-leak');
  }
  if (betaActive) pushFailure(!metrics.noticeHidden, failures, 'beta-notice-visible');
  await page.close();
  return { route, case: `${testCase.name}-${expected}`, ...metrics, pageErrorCount, failures };
}

async function runNavigationCase({ browser, baseUrl, route, expected }) {
  const page = await browser.newPage();
  const failures = [];
  await page.goto(`${baseUrl}${route}`, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => document.querySelector('[data-agentkit-channel-root]')?.dataset.agentkitChannelStatus === 'stable');
  await page.click('[data-agentkit-channel-choice="beta"]');
  const betaStatus = betaChannelStatus(expected);
  await page.waitForFunction((status) => document.querySelector('[data-agentkit-channel-root]')?.dataset.agentkitChannelStatus === status, {}, betaStatus);
  await page.goBack({ waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => document.querySelector('[data-agentkit-channel-root]')?.dataset.agentkitChannelStatus === 'stable');
  await page.goForward({ waitUntil: 'domcontentloaded' });
  await page.waitForFunction((status) => document.querySelector('[data-agentkit-channel-root]')?.dataset.agentkitChannelStatus === status, {}, betaStatus);
  const state = await page.$eval('[data-agentkit-channel-root]', (root) => ({
    active: root.dataset.agentkitActiveChannel,
    status: root.dataset.agentkitChannelStatus,
    search: location.search,
  }));
  pushFailure(state.search !== '?channel=beta', failures, `history-search=${state.search}`);
  pushFailure(state.status !== betaStatus, failures, `history-status=${state.status}`);
  await page.close();
  return { route, case: `history-${expected}`, ...state, failures };
}

async function runKeyboardCase({ browser, baseUrl, route, expected }) {
  const page = await browser.newPage();
  const failures = [];
  await page.goto(`${baseUrl}${route}`, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => document.querySelector('[data-agentkit-channel-root]')?.dataset.agentkitChannelStatus === 'stable');
  await page.focus('[data-agentkit-channel-choice="stable"]');
  await page.keyboard.press('Tab');
  const beforeActivation = await page.evaluate(() => ({
    choice: document.activeElement?.getAttribute('data-agentkit-channel-choice') ?? 'missing',
    focusVisible: document.activeElement?.matches(':focus-visible') ?? false,
  }));
  pushFailure(beforeActivation.choice !== 'beta', failures, `keyboard-choice=${beforeActivation.choice}`);
  pushFailure(!beforeActivation.focusVisible, failures, 'keyboard-focus-not-visible');

  await page.keyboard.press('Enter');
  const expectedStatus = betaChannelStatus(expected);
  await page.waitForFunction(
    (status) => document.querySelector('[data-agentkit-channel-root]')?.dataset.agentkitChannelStatus === status,
    {},
    expectedStatus,
  );
  const afterActivation = await page.evaluate(() => ({
    status: document.querySelector('[data-agentkit-channel-root]')?.dataset.agentkitChannelStatus ?? 'missing',
    search: location.search,
    focusTarget: document.activeElement?.matches(
      '[data-agentkit-channel-notice], [data-agentkit-beta-view-marker], [data-agentkit-beta-guidance]',
    ) ?? false,
  }));
  pushFailure(afterActivation.status !== expectedStatus, failures, `keyboard-status=${afterActivation.status}`);
  pushFailure(afterActivation.search !== '?channel=beta', failures, `keyboard-search=${afterActivation.search}`);
  pushFailure(!afterActivation.focusTarget, failures, 'keyboard-focus-target-missing');
  await page.close();
  return { route, case: `keyboard-${expected}`, ...beforeActivation, ...afterActivation, failures };
}

async function runFallbackCase({ browser, baseUrl, route, suffix, jsEnabled = true }) {
  const page = await browser.newPage();
  const failures = [];
  await page.setJavaScriptEnabled(jsEnabled);
  const betaRequests = [];
  page.on('request', (request) => {
    if (request.url().includes('agentkit-beta-view.')) betaRequests.push(request.url());
  });
  await page.goto(`${baseUrl}${route}${suffix}`, { waitUntil: 'domcontentloaded' });
  if (jsEnabled) await page.waitForFunction(() => document.querySelector('[data-agentkit-channel-root]')?.dataset.agentkitChannelStatus === 'stable');
  const state = await page.$eval('[data-agentkit-channel-root]', (root) => ({
    active: root.dataset.agentkitActiveChannel,
    status: root.dataset.agentkitChannelStatus ?? 'ssr',
    stableHidden: root.querySelector('[data-agentkit-stable-facts]')?.hasAttribute('hidden'),
    betaHidden: root.querySelector('[data-agentkit-beta-view]')?.hasAttribute('hidden'),
    search: location.search,
  }));
  pushFailure(state.active !== 'stable', failures, `fallback-active=${state.active}`);
  pushFailure(state.stableHidden, failures, 'fallback-stable-hidden');
  pushFailure(!state.betaHidden, failures, 'fallback-beta-visible');
  pushFailure(betaRequests.length > 0, failures, `fallback-beta-requests=${betaRequests.length}`);
  if (jsEnabled) pushFailure(state.search !== '', failures, `normalized-search=${state.search}`);
  await page.close();
  return { route: `${route}${suffix}`, case: jsEnabled ? 'invalid-query' : 'no-js-beta', ...state, failures };
}

export async function runAgentKitChannelUiMatrix({ browser, baseUrl, evidenceDir, expected }) {
  const results = [];
  const allSurfacePaths = [
    ...AGENTKIT_CHANNEL_UI_SURFACES,
    ...AGENTKIT_CHANNEL_UI_SURFACES.map((path) => `/vi${path}`),
  ];
  for (const route of allSurfacePaths) {
    for (const testCase of VIEW_CASES) {
      results.push(await runSurfaceCase({ browser, baseUrl, route, testCase, expected: 'stable' }));
      results.push(await runSurfaceCase({ browser, baseUrl, route, testCase, expected }));
    }
  }
  for (const route of allSurfacePaths) {
    if (expected !== 'inactive') {
      results.push(await runNavigationCase({ browser, baseUrl, route, expected }));
      results.push(await runKeyboardCase({ browser, baseUrl, route, expected }));
    }
    for (const suffix of AGENTKIT_CHANNEL_UI_FALLBACK_QUERIES) {
      results.push(await runFallbackCase({ browser, baseUrl, route, suffix }));
    }
    results.push(await runFallbackCase({ browser, baseUrl, route, suffix: '?channel=beta', jsEnabled: false }));
  }

  for (const locale of ['en', 'vi']) {
    const page = await browser.newPage();
    const route = locale === 'vi' ? '/vi/guides/agentkit' : '/guides/agentkit';
    await page.goto(`${baseUrl}${route}?channel=beta`, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: resolve(evidenceDir, `${locale}-${expected}-agentkit.png`), fullPage: true });
    await page.close();
  }
  return results;
}

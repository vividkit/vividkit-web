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
  '?channel=stable&channel=beta',
];
const SURFACE_PATHS = new Set(AGENTKIT_CHANNEL_UI_SURFACES.flatMap((path) => [path, `/vi${path}`]));
const VIEW_CASES = [
  { name: 'mobile-light', width: 390, height: 844, theme: 'light' },
  { name: 'mobile-dark', width: 390, height: 844, theme: 'dark' },
  { name: 'tablet-768-light', width: 768, height: 1024, theme: 'light' },
  { name: 'tablet-768-dark', width: 768, height: 1024, theme: 'dark' },
  { name: 'tablet-1024-light', width: 1024, height: 768, theme: 'light' },
  { name: 'tablet-1024-dark', width: 1024, height: 768, theme: 'dark' },
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
  if (!['hold', 'published'].includes(channelExpectation) || !Array.isArray(results)) {
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
      noticeRole: notice?.getAttribute('role') ?? 'missing',
      choiceCount: root?.querySelectorAll('[data-agentkit-channel-choice]').length ?? 0,
      publicationState: root?.querySelector('[data-agentkit-publication-state]')?.getAttribute('data-agentkit-publication-state') ?? 'missing',
      betaVersionVisible: betaView?.textContent?.includes('2.3.1-beta.1') ?? false,
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

async function runSurfaceCase({ browser, baseUrl, route, testCase, expected, publicationExpectation }) {
  const page = await browser.newPage();
  const failures = [];
  const requestPaths = [];
  let pageErrorCount = 0;
  page.on('request', (request) => requestPaths.push(new URL(request.url()).pathname));
  page.on('pageerror', () => { pageErrorCount += 1; });
  await page.setCacheEnabled(false);
  await page.setViewport({ width: testCase.width, height: testCase.height, deviceScaleFactor: 1 });
  await page.evaluateOnNewDocument((theme) => localStorage.setItem('theme', theme), testCase.theme);
  const isStableView = expected === 'stable';
  const isPublishedView = expected === 'published';
  const query = isStableView ? '' : '?channel=beta';
  const response = await page.goto(`${baseUrl}${route}${query}`, { waitUntil: 'domcontentloaded', timeout: 30_000 });
  const expectedStatus = isPublishedView ? 'published' : isStableView ? 'stable' : 'unavailable';
  await page.waitForFunction(
    (status) => document.querySelector('[data-agentkit-channel-root]')?.dataset.agentkitChannelStatus === status,
    { timeout: 10_000 },
    expectedStatus,
  );
  const metrics = await inspectPage(page, expected, requestPaths);
  const status = response?.status() ?? 0;
  pushFailure(status < 200 || status >= 400, failures, `HTTP ${status || 'unknown'}`);
  pushFailure(metrics.theme !== testCase.theme, failures, `theme=${metrics.theme}`);
  pushFailure(metrics.lang !== (route.startsWith('/vi/') ? 'vi' : 'en'), failures, `lang=${metrics.lang}`);
  pushFailure(metrics.overflow > 1, failures, `overflow=${metrics.overflow}px`);
  pushFailure(pageErrorCount > 0, failures, `page-errors=${pageErrorCount}`);
  pushFailure(new URL(metrics.canonical).search !== '', failures, 'canonical-query');
  pushFailure(metrics.stableHidden !== isPublishedView, failures, `stableHidden=${metrics.stableHidden}`);
  pushFailure(metrics.betaHidden !== !isPublishedView, failures, `betaHidden=${metrics.betaHidden}`);
  pushFailure(metrics.active !== (isPublishedView ? 'beta' : 'stable'), failures, `active=${metrics.active}`);
  pushFailure(metrics.requested !== (isStableView ? 'stable' : 'beta'), failures, `requested=${metrics.requested}`);
  pushFailure(metrics.betaVersionVisible !== isPublishedView, failures, `betaVersionVisible=${metrics.betaVersionVisible}`);
  pushFailure(metrics.betaRequests.length !== (isPublishedView ? 1 : 0), failures, `betaRequests=${metrics.betaRequests.length}`);
  pushFailure(metrics.choiceCount !== (publicationExpectation === 'hold' ? 0 : 2), failures, `choice-count=${metrics.choiceCount}`);
  pushFailure(metrics.publicationState !== publicationExpectation, failures, `publication-state=${metrics.publicationState}`);
  pushFailure(metrics.noticeRole !== 'status', failures, `notice-role=${metrics.noticeRole}`);
  pushFailure(metrics.surfaceLinkCount === 0, failures, 'surface-links-missing');
  if (expected !== 'stable') {
    pushFailure(isPublishedView && !metrics.surfaceLinksPreserveBeta, failures, 'surface-link-channel-drift');
    pushFailure(!metrics.offSurfaceLinksDropBeta, failures, 'off-surface-channel-leak');
  } else {
    pushFailure(!metrics.surfaceLinksDropBeta, failures, 'stable-surface-link-channel-leak');
  }
  if (expected === 'hold') pushFailure(metrics.noticeHidden, failures, 'hold-notice-hidden');
  await page.close();
  return { route, case: `${testCase.name}-${expected}`, ...metrics, pageErrorCount, failures };
}

async function runNavigationCase({ browser, baseUrl, route, expected }) {
  const page = await browser.newPage();
  const failures = [];
  await page.goto(`${baseUrl}${route}?ref=nav#recovery`, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => document.querySelector('[data-agentkit-channel-root]')?.dataset.agentkitChannelStatus === 'stable');
  if (expected === 'hold') {
    await page.goto(`${baseUrl}${route}?ref=nav&channel=beta#recovery`, { waitUntil: 'domcontentloaded' });
  } else {
    await page.click('[data-agentkit-channel-choice="beta"]');
  }
  const betaStatus = expected === 'published' ? 'published' : 'unavailable';
  await page.waitForFunction((status) => document.querySelector('[data-agentkit-channel-root]')?.dataset.agentkitChannelStatus === status, {}, betaStatus);
  await page.goBack({ waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => document.querySelector('[data-agentkit-channel-root]')?.dataset.agentkitChannelStatus === 'stable');
  await page.goForward({ waitUntil: 'domcontentloaded' });
  await page.waitForFunction((status) => document.querySelector('[data-agentkit-channel-root]')?.dataset.agentkitChannelStatus === status, {}, betaStatus);
  const state = await page.$eval('[data-agentkit-channel-root]', (root) => ({
    active: root.dataset.agentkitActiveChannel,
    status: root.dataset.agentkitChannelStatus,
    search: location.search,
    hash: location.hash,
  }));
  const params = new URLSearchParams(state.search);
  pushFailure(params.get('ref') !== 'nav', failures, `history-ref=${params.get('ref')}`);
  pushFailure(params.get('channel') !== 'beta', failures, `history-channel=${params.get('channel')}`);
  pushFailure(state.hash !== '#recovery', failures, `history-hash=${state.hash}`);
  pushFailure(state.status !== betaStatus, failures, `history-status=${state.status}`);
  await page.close();
  return { route, case: `history-${expected}`, ...state, failures };
}

async function runKeyboardCase({ browser, baseUrl, route, expected }) {
  const page = await browser.newPage();
  const failures = [];
  await page.goto(`${baseUrl}${route}`, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => document.querySelector('[data-agentkit-channel-root]')?.dataset.agentkitChannelStatus === 'stable');
  if (expected === 'hold') {
    await page.keyboard.press('Tab');
    const holdState = await page.evaluate(() => ({
      choiceCount: document.querySelectorAll('[data-agentkit-channel-choice]').length,
      choice: document.activeElement?.getAttribute('data-agentkit-channel-choice') ?? 'missing',
      focusVisible: document.activeElement?.matches(':focus-visible') ?? false,
      status: document.querySelector('[data-agentkit-channel-root]')?.dataset.agentkitChannelStatus ?? 'missing',
      search: location.search,
      focusTarget: false,
    }));
    pushFailure(holdState.choiceCount !== 0, failures, `keyboard-choice-count=${holdState.choiceCount}`);
    pushFailure(holdState.choice !== 'missing', failures, `keyboard-choice=${holdState.choice}`);
    pushFailure(!holdState.focusVisible, failures, 'keyboard-focus-not-visible');
    await page.close();
    return { route, case: 'keyboard-hold', ...holdState, failures };
  }
  await page.focus('[data-agentkit-channel-choice="stable"]');
  await page.keyboard.press('Tab');
  const beforeActivation = await page.evaluate(() => ({
    choice: document.activeElement?.getAttribute('data-agentkit-channel-choice') ?? 'missing',
    focusVisible: document.activeElement?.matches(':focus-visible') ?? false,
  }));
  pushFailure(beforeActivation.choice !== 'beta', failures, `keyboard-choice=${beforeActivation.choice}`);
  pushFailure(!beforeActivation.focusVisible, failures, 'keyboard-focus-not-visible');

  await page.keyboard.press('Enter');
  const expectedStatus = expected === 'published' ? 'published' : 'unavailable';
  await page.waitForFunction(
    (status) => document.querySelector('[data-agentkit-channel-root]')?.dataset.agentkitChannelStatus === status,
    {},
    expectedStatus,
  );
  const afterActivation = await page.evaluate(() => ({
    status: document.querySelector('[data-agentkit-channel-root]')?.dataset.agentkitChannelStatus ?? 'missing',
    search: location.search,
    focusTarget: document.activeElement?.matches(
      '[data-agentkit-channel-notice], [data-agentkit-beta-view-marker]',
    ) ?? false,
  }));
  pushFailure(afterActivation.status !== expectedStatus, failures, `keyboard-status=${afterActivation.status}`);
  pushFailure(afterActivation.search !== '?channel=beta', failures, `keyboard-search=${afterActivation.search}`);
  pushFailure(!afterActivation.focusTarget, failures, 'keyboard-focus-target-missing');
  await page.close();
  return { route, case: `keyboard-${expected}`, ...beforeActivation, ...afterActivation, failures };
}

async function runFallbackCase({ browser, baseUrl, route, suffix, expected, jsEnabled = true }) {
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
    noticeHidden: root.querySelector('[data-agentkit-channel-notice]')?.hasAttribute('hidden'),
    noticeRole: root.querySelector('[data-agentkit-channel-notice]')?.getAttribute('role') ?? 'missing',
    staticHoldNotice: document.querySelector('[data-agentkit-static-hold-notice]')?.textContent?.trim() ?? '',
    choiceCount: root.querySelectorAll('[data-agentkit-channel-choice]').length,
    search: location.search,
  }));
  pushFailure(state.active !== 'stable', failures, `fallback-active=${state.active}`);
  pushFailure(state.stableHidden, failures, 'fallback-stable-hidden');
  pushFailure(!state.betaHidden, failures, 'fallback-beta-visible');
  pushFailure(state.choiceCount !== (expected === 'hold' ? 0 : 2), failures, `fallback-choice-count=${state.choiceCount}`);
  pushFailure(state.noticeRole !== 'status', failures, `fallback-notice-role=${state.noticeRole}`);
  pushFailure(betaRequests.length > 0, failures, `fallback-beta-requests=${betaRequests.length}`);
  if (!jsEnabled && suffix === '?channel=beta' && expected === 'hold') {
    pushFailure(state.status !== 'stable', failures, `fallback-status=${state.status}`);
    pushFailure(!state.staticHoldNotice, failures, 'fallback-static-hold-notice-missing');
  }
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
      results.push(await runSurfaceCase({
        browser,
        baseUrl,
        route,
        testCase,
        expected: 'stable',
        publicationExpectation: expected,
      }));
      results.push(await runSurfaceCase({ browser, baseUrl, route, testCase, expected, publicationExpectation: expected }));
    }
  }
  for (const route of allSurfacePaths) {
    results.push(await runNavigationCase({ browser, baseUrl, route, expected }));
    results.push(await runKeyboardCase({ browser, baseUrl, route, expected }));
    for (const suffix of AGENTKIT_CHANNEL_UI_FALLBACK_QUERIES) {
      results.push(await runFallbackCase({ browser, baseUrl, route, suffix, expected }));
    }
    results.push(await runFallbackCase({
      browser,
      baseUrl,
      route,
      suffix: '?channel=beta',
      expected,
      jsEnabled: false,
    }));
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

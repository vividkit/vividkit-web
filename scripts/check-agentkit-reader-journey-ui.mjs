export const AGENTKIT_READER_JOURNEY_DESTINATIONS = {
  en: [
    '/guides/cli#install',
    '/guides/agentkit#clean-cutover',
    '/guides/coexistence#pilot-steps',
    '/guides/agentkit#recovery',
    '/guides/agentkit#support',
  ],
  vi: [
    '/vi/guides/cli#install',
    '/vi/guides/agentkit#clean-cutover',
    '/vi/guides/coexistence#pilot-steps',
    '/vi/guides/agentkit#recovery',
    '/vi/guides/agentkit#support',
  ],
};

const MOBILE_VIEWPORT = { width: 390, height: 844, deviceScaleFactor: 1 };

async function runInteractiveCase({ browser, baseUrl, locale }) {
  const route = locale === 'vi' ? '/vi/guides/agentkit' : '/guides/agentkit';
  const page = await browser.newPage();
  await page.setViewport(MOBILE_VIEWPORT);
  await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0', timeout: 30_000 });

  const laneSelector = '[data-agentkit-reader-lane]';
  const initial = await page.evaluate((selector) => {
    const lanes = [...document.querySelectorAll(selector)];
    const rects = lanes.map((lane) => lane.getBoundingClientRect());
    const main = document.querySelector('main');
    return {
      laneCount: lanes.length,
      laneIds: lanes.map((lane) => lane.getAttribute('data-agentkit-reader-lane')),
      oneColumn: rects.every((rect) => Math.abs(rect.x - (rects[0]?.x ?? rect.x)) < 1),
      lanesInsideViewport: rects.every((rect) => rect.left >= -1 && rect.right <= document.documentElement.clientWidth + 1),
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      mainScrollWidth: main?.scrollWidth ?? 0,
      mainClientWidth: main?.clientWidth ?? 0,
    };
  }, laneSelector);

  await page.focus('[data-agentkit-reader-lane="fresh"]');
  const focusVisible = await page.$eval('[data-agentkit-reader-lane="fresh"]', (link) => link.matches(':focus-visible'));
  const keyboardOrder = [];
  for (let index = 0; index < 5; index += 1) {
    keyboardOrder.push(await page.evaluate(() => document.activeElement?.getAttribute('data-agentkit-reader-lane')));
    if (index < 4) await page.keyboard.press('Tab');
  }

  const summarySelector = '[data-agentkit-lifecycle-router] > summary';
  await page.focus(summarySelector);
  await page.keyboard.press('Enter');
  const evaluatorOpened = await page.$eval('[data-agentkit-lifecycle-router]', (details) => details.open);
  await page.select('[name="goal"]', 'install');
  await page.select('[name="legacyOwnershipState"]', 'absent');
  await page.click('[name="dataCriticality"][value="standard"]');
  const evaluatorEnabled = await page.$eval('[data-agentkit-router-evaluate]', (button) => !button.disabled);
  await page.click('[data-agentkit-router-evaluate]');
  const evaluatorResult = await page.$eval('[data-agentkit-router-result]', (result) => ({
    visible: !result.hidden,
    focused: document.activeElement === result,
    eligibility: result.getAttribute('data-agentkit-eligibility'),
  }));

  const failures = [];
  if (initial.laneCount !== 5) failures.push(`lane-count=${initial.laneCount}`);
  if (!initial.oneColumn) failures.push('lane-layout=multi-column');
  if (!initial.lanesInsideViewport) failures.push('lane-overflow');
  if (initial.scrollWidth > initial.clientWidth + 1) failures.push(`document-overflow=${initial.scrollWidth - initial.clientWidth}px`);
  if (initial.mainScrollWidth > initial.mainClientWidth + 1) failures.push(`main-overflow=${initial.mainScrollWidth - initial.mainClientWidth}px`);
  if (!focusVisible) failures.push('focus-visible=false');
  if (keyboardOrder.join(',') !== 'fresh,clean,coexist,recovery,support') failures.push(`lane-tab-order=${keyboardOrder.join(',')}`);
  if (!evaluatorOpened) failures.push('evaluator-keyboard-open=false');
  if (!evaluatorEnabled) failures.push('evaluator-enabled=false');
  if (!evaluatorResult.visible || !evaluatorResult.focused) failures.push('evaluator-result-not-visible-focused');

  await page.close();
  return {
    route,
    case: `reader-journey-390-${locale}`,
    ...initial,
    focusVisible,
    keyboardOrder,
    evaluatorOpened,
    evaluatorEnabled,
    evaluatorResult,
    failures,
  };
}

async function runNoJavaScriptDestinationCase({ browser, baseUrl, locale, destination }) {
  const page = await browser.newPage();
  await page.setJavaScriptEnabled(false);
  await page.setViewport(MOBILE_VIEWPORT);
  const sourceRoute = locale === 'vi' ? '/vi/guides/agentkit' : '/guides/agentkit';
  const expectedId = destination.slice(destination.indexOf('#') + 1);
  await page.goto(`${baseUrl}${sourceRoute}`, { waitUntil: 'networkidle0', timeout: 30_000 });

  const linkSelector = `[data-agentkit-reader-lane][href="${destination}"]`;
  const destinationPath = new URL(destination, baseUrl).pathname;
  if (destinationPath === sourceRoute) {
    await page.click(linkSelector);
  } else {
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 30_000 }),
      page.click(linkSelector),
    ]);
  }
  await page.waitForFunction((id) => {
    const rect = document.getElementById(id)?.getBoundingClientRect();
    return Boolean(rect && rect.top < innerHeight && rect.bottom > 0);
  }, { polling: 50, timeout: 3_000 }, expectedId).catch(() => undefined);

  const metrics = await page.evaluate((id) => {
    const target = document.getElementById(id);
    const targetRect = target?.getBoundingClientRect();
    const visibleChromeBottom = [...document.querySelectorAll('body *')]
      .filter((element) => {
        const position = getComputedStyle(element).position;
        const rect = element.getBoundingClientRect();
        return ['fixed', 'sticky'].includes(position) && rect.bottom > 0 && rect.top < innerHeight;
      })
      .reduce((bottom, element) => Math.max(bottom, element.getBoundingClientRect().bottom), 0);
    return {
      hash: location.hash,
      targetCount: document.querySelectorAll(`#${CSS.escape(id)}`).length,
      targetTop: targetRect?.top ?? -1,
      targetBottom: targetRect?.bottom ?? -1,
      viewportHeight: innerHeight,
      visibleChromeBottom,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      laneCount: document.querySelectorAll('[data-agentkit-reader-lane]').length,
    };
  }, expectedId);

  const failures = [];
  if (metrics.hash !== `#${expectedId}`) failures.push(`hash=${metrics.hash}`);
  if (metrics.targetCount !== 1) failures.push(`target-count=${metrics.targetCount}`);
  if (metrics.targetTop + 1 < metrics.visibleChromeBottom) failures.push(`target-covered=${metrics.visibleChromeBottom - metrics.targetTop}px`);
  if (metrics.targetTop >= metrics.viewportHeight || metrics.targetBottom <= metrics.visibleChromeBottom) failures.push('target-outside-visible-viewport');
  if (metrics.scrollWidth > metrics.clientWidth + 1) failures.push(`document-overflow=${metrics.scrollWidth - metrics.clientWidth}px`);
  if (destination.includes('/guides/agentkit') && metrics.laneCount !== 5) failures.push(`no-js-lanes=${metrics.laneCount}`);

  await page.close();
  return {
    route: destination,
    case: `reader-destination-no-js-${locale}`,
    ...metrics,
    failures,
  };
}

export async function runAgentKitReaderJourneyUiMatrix({ browser, baseUrl }) {
  const results = [];
  for (const locale of ['en', 'vi']) {
    results.push(await runInteractiveCase({ browser, baseUrl, locale }));
    for (const destination of AGENTKIT_READER_JOURNEY_DESTINATIONS[locale]) {
      results.push(await runNoJavaScriptDestinationCase({ browser, baseUrl, locale, destination }));
    }
  }
  return results;
}

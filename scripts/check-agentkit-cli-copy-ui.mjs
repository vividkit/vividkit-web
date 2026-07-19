const MOBILE_VIEWPORT = { width: 390, height: 844, deviceScaleFactor: 1 };
const SAFE_PAYLOADS = ['ak update --dry-run', 'ak self-update --check'];

function routeFor(locale) {
  return locale === 'vi' ? '/vi/guides/cli-commands' : '/guides/cli-commands';
}

async function installClipboardProbe(page) {
  await page.evaluate(() => {
    window.clipboardWriteCount = 0;
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async () => {
          window.clipboardWriteCount += 1;
        },
      },
    });
  });
}

async function runInteractiveCase({ browser, baseUrl, locale, theme }) {
  const route = routeFor(locale);
  const page = await browser.newPage();
  await page.setViewport(MOBILE_VIEWPORT);
  await page.evaluateOnNewDocument((value) => localStorage.setItem('theme', value), theme);
  await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0', timeout: 30_000 });
  await installClipboardProbe(page);

  const metrics = await page.evaluate(({ expectedTheme, expectedLocale }) => {
    const buttons = [...document.querySelectorAll('[data-agentkit-copy-button]')];
    const root = document.querySelector('[data-agentkit-cli-copy-root]');
    const status = root?.querySelector('[data-agentkit-copy-status]');
    const payloads = buttons.map((button) => button.getAttribute('data-agentkit-copy-payload'));
    const buttonHeights = buttons.map((button) => button.getBoundingClientRect().height);
    const ariaLabels = buttons.map((button) => button.getAttribute('aria-label') ?? '');
    const strayZeroCount = [...document.querySelectorAll('article[id^="cli-cmd-"]')]
      .filter((article) => [...article.childNodes]
        .some((node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim() === '0'))
      .length;
    return {
      theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
      expectedTheme,
      locale: document.documentElement.lang,
      expectedLocale,
      payloads,
      buttonCount: buttons.length,
      readyCount: buttons.filter((button) => button.getAttribute('data-agentkit-copy-ready') === 'true').length,
      hiddenCount: buttons.filter((button) => button.hidden).length,
      buttonHeight: buttonHeights.length ? Math.min(...buttonHeights) : 0,
      localizedAria: ariaLabels.every((label) => expectedLocale === 'vi'
        ? label.startsWith('Sao chép lệnh an toàn:')
        : label.startsWith('Copy safe command:')),
      strayZeroCount,
      liveRole: status?.getAttribute('role'),
      liveMode: status?.getAttribute('aria-live'),
      liveAtomic: status?.getAttribute('aria-atomic'),
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    };
  }, { expectedTheme: theme, expectedLocale: locale });

  const updateSelector = '[data-agentkit-copy-button][data-agentkit-copy-payload="ak update --dry-run"]';
  const selfUpdateSelector = '[data-agentkit-copy-button][data-agentkit-copy-payload="ak self-update --check"]';
  await page.click(updateSelector);
  await page.waitForFunction(() => window.clipboardWriteCount === 1);
  const successStatus = await page.$eval('[data-agentkit-copy-status]', (status) => status.textContent);

  await page.evaluate(() => {
    document.dispatchEvent(new Event('astro:page-load'));
    document.dispatchEvent(new Event('astro:page-load'));
  });
  await page.click(selfUpdateSelector);
  await page.waitForFunction(() => window.clipboardWriteCount === 2);
  const clipboardWriteCount = await page.evaluate(() => window.clipboardWriteCount);

  await page.evaluate(() => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: async () => { throw new Error('expected copy failure'); } },
    });
  });
  await page.click(updateSelector);
  await page.waitForFunction((language) => {
    const text = document.querySelector('[data-agentkit-copy-status]')?.textContent ?? '';
    return language === 'vi' ? text.startsWith('Không thể sao chép.') : text.startsWith('Copy failed.');
  }, {}, locale);
  const failureStatus = await page.$eval('[data-agentkit-copy-status]', (status) => status.textContent);

  const failures = [];
  if (metrics.theme !== theme) failures.push(`theme=${metrics.theme}`);
  if (metrics.locale !== locale) failures.push(`locale=${metrics.locale}`);
  if (metrics.buttonCount === 0 || metrics.readyCount !== metrics.buttonCount || metrics.hiddenCount > 0) failures.push('copy-controls-not-ready');
  if (metrics.buttonHeight < 44) failures.push(`button-height=${metrics.buttonHeight}`);
  if (!metrics.localizedAria) failures.push('copy-aria-not-localized');
  if (metrics.strayZeroCount > 0) failures.push(`stray-zero-count=${metrics.strayZeroCount}`);
  if (metrics.liveRole !== 'status' || metrics.liveMode !== 'polite' || metrics.liveAtomic !== 'true') failures.push('live-region-contract');
  if (metrics.scrollWidth > metrics.clientWidth + 1) failures.push(`document-overflow=${metrics.scrollWidth - metrics.clientWidth}px`);
  for (const payload of SAFE_PAYLOADS) {
    if (!metrics.payloads.includes(payload)) failures.push(`missing-safe-payload=${payload}`);
  }
  if (metrics.payloads.some((payload) => /(?:^|\s)(?:--yes|--force|--apply)(?:\s|$)/.test(payload ?? ''))) failures.push('unsafe-apply-copy');
  if (clipboardWriteCount !== 2) failures.push(`astro-rebind-write-count=${clipboardWriteCount}`);
  const expectedSuccess = locale === 'vi' ? 'Đã sao chép lệnh an toàn:' : 'Copied safe command:';
  const expectedFailure = locale === 'vi' ? 'Không thể sao chép.' : 'Copy failed.';
  if (!successStatus?.startsWith(expectedSuccess)) failures.push('copy-success-not-localized');
  if (!failureStatus?.startsWith(expectedFailure)) failures.push('copy-failure-not-localized');

  await page.close();
  return {
    route,
    case: `cli-copy-390-${locale}-${theme}`,
    ...metrics,
    clipboardWriteCount,
    successAnnounced: successStatus?.startsWith(expectedSuccess) ?? false,
    failureAnnounced: failureStatus?.startsWith(expectedFailure) ?? false,
    failures,
  };
}

async function runNoJavaScriptCase({ browser, baseUrl, locale }) {
  const route = routeFor(locale);
  const page = await browser.newPage();
  await page.setJavaScriptEnabled(false);
  await page.setViewport(MOBILE_VIEWPORT);
  await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0', timeout: 30_000 });
  const metrics = await page.evaluate(() => {
    const buttons = [...document.querySelectorAll('[data-agentkit-copy-button]')];
    return {
      buttonCount: buttons.length,
      visibleButtonCount: buttons.filter((button) => !button.hidden).length,
      safeCommandVisible: document.body.innerText.includes('ak update --dry-run'),
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    };
  });
  const failures = [];
  if (metrics.buttonCount === 0 || metrics.visibleButtonCount !== 0) failures.push('no-js-copy-controls-visible');
  if (!metrics.safeCommandVisible) failures.push('no-js-command-missing');
  if (metrics.scrollWidth > metrics.clientWidth + 1) failures.push(`document-overflow=${metrics.scrollWidth - metrics.clientWidth}px`);
  await page.close();
  return { route, case: `cli-copy-no-js-${locale}`, ...metrics, failures };
}

export async function runAgentKitCliCopyUiMatrix({ browser, baseUrl }) {
  const results = [];
  for (const locale of ['en', 'vi']) {
    for (const theme of ['light', 'dark']) {
      results.push(await runInteractiveCase({ browser, baseUrl, locale, theme }));
    }
    results.push(await runNoJavaScriptCase({ browser, baseUrl, locale }));
  }
  return results;
}

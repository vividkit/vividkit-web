export const LEGACY_ARCHIVE_UI_ROUTES = [
  '/legacy/guides/cli',
  '/vi/legacy/guides/cli',
];

const LEGACY_ARCHIVE_VIEWPORTS = [
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'desktop-1440', width: 1440, height: 900 },
];

async function runLegacyArchiveCase({ browser, baseUrl, route, viewport }) {
  const page = await browser.newPage();
  await page.setViewport({ ...viewport, deviceScaleFactor: 1 });
  const response = await page.goto(`${baseUrl}${route}`, {
    waitUntil: 'networkidle0',
    timeout: 30_000,
  });

  const metrics = await page.evaluate(() => {
    const documentElement = document.documentElement;
    const notices = [...document.querySelectorAll('[data-legacy-archive-banner]')];
    const notice = notices[0];
    const noticeRect = notice?.getBoundingClientRect();
    const headerRect = document.querySelector('header')?.getBoundingClientRect();
    const snapshot = document.querySelector('[data-legacy-snapshot]');
    return {
      noticeCount: notices.length,
      noticeRole: notice?.getAttribute('role') ?? 'missing',
      noticePosition: notice ? getComputedStyle(notice).position : 'missing',
      noticeTop: noticeRect?.top ?? -1,
      noticeBottom: noticeRect?.bottom ?? -1,
      headerBottom: headerRect?.bottom ?? 0,
      viewportHeight: innerHeight,
      scrollWidth: documentElement.scrollWidth,
      clientWidth: documentElement.clientWidth,
      robots: document.querySelector('meta[name="robots"]')?.getAttribute('content') ?? '',
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? '',
      sourceCommit: snapshot?.getAttribute('data-source-commit') ?? '',
      isolationCommit: snapshot?.getAttribute('data-isolation-commit') ?? '',
      noticeLinkCount: notice?.querySelectorAll('a[href]').length ?? 0,
    };
  });

  const failures = [];
  const status = response?.status() ?? 0;
  if (status < 200 || status >= 400) failures.push(`HTTP ${status || 'unknown'}`);
  if (metrics.noticeCount !== 1) failures.push(`notice-count=${metrics.noticeCount}`);
  if (metrics.noticeRole !== 'note') failures.push(`notice-role=${metrics.noticeRole}`);
  if (['fixed', 'sticky'].includes(metrics.noticePosition)) failures.push(`notice-position=${metrics.noticePosition}`);
  if (metrics.noticeTop + 1 < metrics.headerBottom) failures.push(`header-overlap=${metrics.headerBottom - metrics.noticeTop}px`);
  if (metrics.noticeTop >= metrics.viewportHeight || metrics.noticeBottom <= metrics.headerBottom) failures.push('notice-outside-visible-viewport');
  if (metrics.scrollWidth > metrics.clientWidth + 1) failures.push(`document-overflow=${metrics.scrollWidth - metrics.clientWidth}px`);
  if (metrics.robots !== 'noindex,follow') failures.push(`robots=${metrics.robots}`);
  if (new URL(metrics.canonical).pathname !== route) failures.push('canonical-route');
  if (!/^[a-f0-9]{40}$/.test(metrics.sourceCommit)) failures.push('source-provenance');
  if (!/^[a-f0-9]{40}$/.test(metrics.isolationCommit)) failures.push('isolation-provenance');
  if (metrics.noticeLinkCount < 2) failures.push(`notice-links=${metrics.noticeLinkCount}`);

  await page.close();
  return {
    route,
    case: viewport.name,
    ...metrics,
    failures,
  };
}

export async function runLegacyArchiveUiMatrix({ browser, baseUrl }) {
  const results = [];
  for (const route of LEGACY_ARCHIVE_UI_ROUTES) {
    for (const viewport of LEGACY_ARCHIVE_VIEWPORTS) {
      results.push(await runLegacyArchiveCase({ browser, baseUrl, route, viewport }));
    }
  }
  return results;
}

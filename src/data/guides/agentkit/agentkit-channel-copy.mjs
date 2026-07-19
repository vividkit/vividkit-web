const HOLD_NOTICE_BY_LOCALE = Object.freeze({
  en: Object.freeze({
    title: 'Beta is not published in this build',
    body: 'You are seeing Stable content. The query only requests public content; it does not enroll or grant closed-beta access.',
  }),
  vi: Object.freeze({
    title: 'Beta chưa được xuất bản trong build này',
    body: 'Bạn đang xem nội dung Stable. Query chỉ yêu cầu nội dung công khai; nó không ghi danh hoặc cấp quyền closed-beta.',
  }),
});

const STATIC_HOLD_NOTICE_BY_LOCALE = Object.freeze({
  en: Object.freeze({
    title: 'Stable-only fallback',
    body: 'This static HOLD build contains Stable content only. Without JavaScript, channel queries cannot change the rendered page or grant beta access.',
  }),
  vi: Object.freeze({
    title: 'Chế độ dự phòng chỉ có Stable',
    body: 'Build HOLD tĩnh này chỉ chứa nội dung Stable. Khi không có JavaScript, query channel không thể đổi nội dung hiển thị hoặc cấp quyền beta.',
  }),
});

export function getAgentKitHoldNotice(locale) {
  return HOLD_NOTICE_BY_LOCALE[locale === 'vi' ? 'vi' : 'en'];
}

export function getAgentKitStaticHoldNotice(locale) {
  return STATIC_HOLD_NOTICE_BY_LOCALE[locale === 'vi' ? 'vi' : 'en'];
}

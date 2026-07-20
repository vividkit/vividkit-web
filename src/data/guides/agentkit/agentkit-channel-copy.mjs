const HOLD_NOTICE_BY_LOCALE = Object.freeze({
  en: Object.freeze({
    title: 'Beta is not published',
    body: 'You are viewing Stable content; the URL parameter does not unlock Beta.',
  }),
  vi: Object.freeze({
    title: 'Beta chưa được phát hành',
    body: 'Bạn đang xem nội dung Stable; tham số URL không mở khóa nội dung Beta.',
  }),
});

const STATIC_HOLD_NOTICE_BY_LOCALE = Object.freeze({
  en: Object.freeze({
    title: 'Stable content',
    body: 'Beta is not published. Without JavaScript, the URL parameter cannot change this page or unlock Beta.',
  }),
  vi: Object.freeze({
    title: 'Nội dung Stable',
    body: 'Beta chưa được phát hành. Khi không có JavaScript, tham số URL không thể đổi trang này hoặc mở khóa Beta.',
  }),
});

export function getAgentKitHoldNotice(locale) {
  return HOLD_NOTICE_BY_LOCALE[locale === 'vi' ? 'vi' : 'en'];
}

export function getAgentKitStaticHoldNotice(locale) {
  return STATIC_HOLD_NOTICE_BY_LOCALE[locale === 'vi' ? 'vi' : 'en'];
}

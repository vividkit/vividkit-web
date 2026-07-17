export const AGENTKIT_BETA_LOADER_MARKER = 'agentkit-beta-hold-v1';

export async function activateAgentKitBetaChannel({ root, locale }) {
  const notice = root.querySelector('[data-agentkit-channel-notice]');
  const title = locale === 'vi'
    ? 'Beta chưa được xuất bản trong build này'
    : 'Beta is not published in this build';
  const body = locale === 'vi'
    ? 'Bạn đang xem stable fallback. Query chỉ chọn nội dung công khai; nó không cấp quyền closed-beta.'
    : 'You are seeing the stable fallback. The query selects public content; it does not grant closed-beta enrollment.';

  root.dataset.agentkitBetaLoader = AGENTKIT_BETA_LOADER_MARKER;
  if (notice) {
    notice.hidden = false;
    notice.querySelector('[data-agentkit-channel-notice-title]').textContent = title;
    notice.querySelector('[data-agentkit-channel-notice-body]').textContent = body;
  }
  return { activeChannel: 'stable', status: 'unavailable', focusTarget: notice };
}

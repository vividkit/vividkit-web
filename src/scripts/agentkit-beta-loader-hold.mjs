import { getAgentKitHoldNotice } from '../data/guides/agentkit/agentkit-channel-copy.mjs';

export const AGENTKIT_BETA_LOADER_MARKER = 'agentkit-beta-hold-v1';

export async function activateAgentKitBetaChannel({ root, locale }) {
  const notice = root.querySelector('[data-agentkit-channel-notice]');
  const copy = getAgentKitHoldNotice(locale);

  root.dataset.agentkitBetaLoader = AGENTKIT_BETA_LOADER_MARKER;
  if (notice) {
    const title = notice.querySelector('[data-agentkit-channel-notice-title]');
    const body = notice.querySelector('[data-agentkit-channel-notice-body]');
    if (title.textContent !== copy.title) title.textContent = copy.title;
    if (body.textContent !== copy.body) body.textContent = copy.body;
    if (notice.hidden) notice.hidden = false;
  }
  return { activeChannel: 'stable', status: 'unavailable', focusTarget: notice };
}

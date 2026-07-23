import { AGENTKIT_BETA_CHANNEL_FACTS } from '../data/guides/agentkit/agentkit-beta-channel-facts.mjs';
import { renderAgentKitBetaGuidance } from './agentkit-beta-guidance.mjs';

export const AGENTKIT_BETA_VIEW_MARKER = 'agentkit-public-beta-view-v1';

export function renderAgentKitBetaView({ root, locale, surface, isCurrent }) {
  if (isCurrent && !isCurrent()) return { activeChannel: 'stable', status: 'superseded', focusTarget: null };
  if (!AGENTKIT_BETA_CHANNEL_FACTS.activeBetaVersion) {
    return { activeChannel: 'stable', status: 'unavailable', focusTarget: null };
  }

  const result = renderAgentKitBetaGuidance({
    root,
    locale,
    surface,
    status: 'published',
  });
  const panel = result.focusTarget;
  if (panel instanceof HTMLElement) {
    panel.dataset.agentkitBetaViewMarker = AGENTKIT_BETA_VIEW_MARKER;
  }
  return result;
}

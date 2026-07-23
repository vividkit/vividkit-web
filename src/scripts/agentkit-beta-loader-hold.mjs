import { AGENTKIT_BETA_CHANNEL_FACTS } from '../data/guides/agentkit/agentkit-beta-channel-facts.mjs';
import { renderAgentKitBetaGuidance } from './agentkit-beta-guidance.mjs';

export const AGENTKIT_BETA_LOADER_MARKER = 'agentkit-beta-hold-v1';

export async function activateAgentKitBetaChannel({ root, locale, surface, isCurrent }) {
  if (isCurrent && !isCurrent()) {
    return { activeChannel: 'stable', status: 'superseded', focusTarget: null };
  }
  if (!AGENTKIT_BETA_CHANNEL_FACTS.activeBetaVersion) {
    return { activeChannel: 'stable', status: 'unavailable', focusTarget: null };
  }

  root.dataset.agentkitBetaLoader = AGENTKIT_BETA_LOADER_MARKER;
  return renderAgentKitBetaGuidance({
    root,
    locale,
    surface,
    status: 'guidance',
  });
}

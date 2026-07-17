export const AGENTKIT_BETA_LOADER_MARKER = 'agentkit-beta-published-loader-v1';

const superseded = () => ({ activeChannel: 'stable', status: 'superseded', focusTarget: null });

export async function activateAgentKitBetaChannel(context) {
  if (context.isCurrent && !context.isCurrent()) return superseded();
  const { renderAgentKitBetaView } = await import('./agentkit-beta-view.mjs');
  if (context.isCurrent && !context.isCurrent()) return superseded();
  context.root.dataset.agentkitBetaLoader = AGENTKIT_BETA_LOADER_MARKER;
  return renderAgentKitBetaView(context);
}

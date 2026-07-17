declare module '@agentkit-beta-loader' {
  export const AGENTKIT_BETA_LOADER_MARKER: string;

  export function activateAgentKitBetaChannel(context: {
    root: HTMLElement;
    locale: 'en' | 'vi';
    surface?: string;
    isCurrent?: () => boolean;
  }): Promise<{
    activeChannel: 'stable' | 'beta';
    status: 'unavailable' | 'published' | 'superseded';
    focusTarget?: HTMLElement | null;
  }>;
}

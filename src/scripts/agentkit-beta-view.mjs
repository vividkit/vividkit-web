import { AGENTKIT_BETA_CHANNEL_FACTS } from '../data/guides/agentkit/agentkit-beta-channel-facts.mjs';

export const AGENTKIT_BETA_VIEW_MARKER = 'agentkit-public-beta-view-v1';

const SURFACE_LABELS = {
  hub: { en: 'Migration hub', vi: 'Migration hub' },
  cli: { en: 'CLI guide', vi: 'Hướng dẫn CLI' },
  'cli-commands': { en: 'CLI Commands', vi: 'CLI Commands' },
  coexistence: { en: 'Coexistence pilot', vi: 'Pilot coexistence' },
};

function textElement(tagName, text, className) {
  const element = document.createElement(tagName);
  element.textContent = text;
  element.className = className;
  return element;
}

export function renderAgentKitBetaView({ root, locale, surface, isCurrent }) {
  if (isCurrent && !isCurrent()) return { activeChannel: 'stable', status: 'superseded', focusTarget: null };
  const isVi = locale === 'vi';
  const stableFacts = root.querySelector('[data-agentkit-stable-facts]');
  const container = root.querySelector('[data-agentkit-beta-view]');
  if (!container) throw new Error('AgentKit beta view container is missing.');

  const panel = document.createElement('section');
  panel.dataset.agentkitBetaViewMarker = AGENTKIT_BETA_VIEW_MARKER;
  panel.tabIndex = -1;
  panel.className = 'rounded-3xl border border-violet-300 bg-violet-50 p-6 text-slate-800 dark:border-violet-400/30 dark:bg-violet-950/30 dark:text-slate-100 sm:p-8';
  panel.append(
    textElement('p', `${SURFACE_LABELS[surface]?.[locale] ?? 'AgentKit'} · public early access`, 'text-xs font-bold uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300'),
    textElement('h2', `AgentKit CLI ${AGENTKIT_BETA_CHANNEL_FACTS.version}`, 'mt-3 text-2xl font-bold text-slate-950 dark:text-white'),
    textElement(
      'p',
      isVi
        ? 'Đây là public beta đã được publication record cho phép. Query không phải access control và không tự ghi danh closed-beta pilot.'
        : 'This public beta is enabled by the reviewed publication record. The query is not access control and does not enroll you in the closed-beta pilot.',
      'mt-3 max-w-3xl leading-7 text-slate-700 dark:text-slate-200',
    ),
    textElement(
      'p',
      isVi
        ? 'Snapshot beta hiện chỉ có release claim độc lập; chưa có beta command facts được review. Không dùng stable command list như thể đó là beta.'
        : 'The beta snapshot currently contains an independent release claim only; no beta command facts are reviewed. Stable commands are not relabeled as beta.',
      'mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950 dark:border-amber-400/30 dark:bg-amber-950/30 dark:text-amber-100',
    ),
  );

  stableFacts?.setAttribute('hidden', '');
  container.replaceChildren(panel);
  container.hidden = false;
  return { activeChannel: 'beta', status: 'published', focusTarget: panel };
}

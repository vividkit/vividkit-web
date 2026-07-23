import { AGENTKIT_BETA_CHANNEL_FACTS } from '../data/guides/agentkit/agentkit-beta-channel-facts.mjs';
import { AGENTKIT_OFFICIAL_LINKS } from '../data/guides/agentkit/agentkit-official-links.mjs';

const SURFACE_LABELS = {
  hub: { en: 'Migrate CK → AK', vi: 'Migrate CK → AK' },
  cli: { en: 'CLI install & setup', vi: 'Cài & setup CLI' },
  'cli-commands': { en: 'CLI Commands', vi: 'CLI Commands' },
  coexistence: { en: 'Coexistence', vi: 'Coexistence' },
  'what-is': { en: 'What is AgentKit', vi: 'AgentKit là gì' },
};

function el(tagName, text, className) {
  const node = document.createElement(tagName);
  if (text != null) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function codeBlock(command) {
  const code = el(
    'code',
    command,
    'mt-2 block overflow-x-auto rounded-xl bg-slate-100 p-3 font-mono text-sm text-purple-700 dark:bg-slate-800/90 dark:text-purple-300',
  );
  return code;
}

function step(title, body, command) {
  const item = el('li', null, 'rounded-2xl border border-violet-200/80 bg-white/80 p-4 dark:border-violet-500/20 dark:bg-slate-950/40');
  item.append(
    el('h3', title, 'text-sm font-bold text-slate-950 dark:text-white'),
    el('p', body, 'mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300'),
  );
  if (command) item.append(codeBlock(command));
  return item;
}

/**
 * Public-beta guidance that keeps stable install/setup/migrate content visible.
 * Beta currently has an independent release claim but no separate reviewed command facts,
 * so workflow steps stay on the shared guide while binary channel selection is explicit.
 */
export function renderAgentKitBetaGuidance({ root, locale, surface, status }) {
  const isVi = locale === 'vi';
  const version = AGENTKIT_BETA_CHANNEL_FACTS.activeBetaVersion;
  if (!version) {
    return { activeChannel: 'stable', status: 'unavailable', focusTarget: null };
  }

  const notice = root.querySelector('[data-agentkit-channel-notice]');
  if (notice) notice.hidden = true;

  const container = root.querySelector('[data-agentkit-beta-view]');
  if (!container) throw new Error('AgentKit beta view container is missing.');

  const stableFacts = root.querySelector('[data-agentkit-stable-facts]');
  stableFacts?.removeAttribute('hidden');

  const panel = el(
    'section',
    null,
    'rounded-3xl border border-violet-300 bg-violet-50 p-6 text-slate-800 dark:border-violet-400/30 dark:bg-violet-950/30 dark:text-slate-100 sm:p-8',
  );
  panel.tabIndex = -1;
  panel.dataset.agentkitBetaGuidance = 'true';
  panel.dataset.agentkitBetaStatus = status;

  const surfaceLabel = SURFACE_LABELS[surface]?.[locale] ?? 'AgentKit';
  panel.append(
    el('p', `${surfaceLabel} · public beta ${version}`, 'text-xs font-bold uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300'),
    el(
      'h2',
      isVi ? `Dùng AgentKit ${version}` : `Use AgentKit ${version}`,
      'mt-3 text-2xl font-bold text-slate-950 dark:text-white',
    ),
    el(
      'p',
      isVi
        ? 'Public beta đã quan sát trên upstream. Bên dưới vẫn là install / setup / migrate thực tế — chọn binary beta trước, rồi làm các bước guide như bình thường. Query không phải closed-beta enrollment.'
        : 'This public beta is observed upstream. Keep using the install / setup / migrate steps below — switch the binary to beta first, then follow the same guide workflow. The query is not closed-beta enrollment.',
      'mt-3 max-w-3xl leading-7 text-slate-700 dark:text-slate-200',
    ),
  );

  const list = el('ol', null, 'mt-5 grid gap-3');
  list.append(
    step(
      isVi ? '1. Chọn binary beta' : '1. Switch the binary to beta',
      isVi
        ? 'Empty `--channel` mặc định về beta. Hãy truyền `--channel beta` rõ ràng. Kiểm tra trước, rồi apply khi bạn chấp nhận early-access risk.'
        : 'An empty `--channel` defaults to beta. Pass `--channel beta` explicitly. Check first, then apply when you accept early-access risk.',
      'ak self-update --check --channel beta',
    ),
    step(
      isVi ? '2. Apply bản beta (khi sẵn sàng)' : '2. Apply the beta update when ready',
      isVi
        ? 'Lệnh này ghi binary. Sau khi xong, mở shell mới và verify version trước khi đổi kit hoặc project.'
        : 'This writes the binary. After it finishes, open a fresh shell and verify the version before changing kits or projects.',
      'ak self-update --channel beta --yes',
    ),
    step(
      isVi ? '3. Verify session beta' : '3. Verify the beta session',
      isVi
        ? 'Xác nhận executable resolve đúng, rồi login / licenses như guide CLI. Setup kit và migrate CK→AK dùng cùng checklist bên dưới.'
        : 'Confirm the executable resolves, then follow the CLI guide login / licenses flow. Kit setup and CK→AK migration use the same checklist below.',
      'ak --version',
    ),
  );
  panel.append(list);

  const note = el(
    'p',
    isVi
      ? `Chưa có beta command facts riêng được review (count = ${AGENTKIT_BETA_CHANNEL_FACTS.commandFactCount}). Không đổi nhãn stable command thành beta. Đọc changelog trước khi dùng early-access trên dữ liệu quan trọng.`
      : `No separate beta command facts are reviewed yet (count = ${AGENTKIT_BETA_CHANNEL_FACTS.commandFactCount}). Stable commands are not relabeled as beta. Read the changelog before using early access on important data.`,
    'mt-5 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950 dark:border-amber-400/30 dark:bg-amber-950/30 dark:text-amber-100',
  );
  panel.append(note);

  const link = el('a', isVi ? 'Official changelog →' : 'Official changelog →', 'mt-4 inline-flex text-sm font-semibold text-violet-700 underline-offset-4 hover:underline dark:text-violet-300');
  link.href = AGENTKIT_OFFICIAL_LINKS.changelog;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  panel.append(link);

  container.replaceChildren(panel);
  container.hidden = false;
  return { activeChannel: 'beta', status, focusTarget: panel };
}

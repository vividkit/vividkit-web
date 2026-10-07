import { useEffect, useState } from 'react';
import { Check, Lock } from 'lucide-react';
import { Bot } from './team-list';
import type { Lang } from './team-data';

type Kind = 'search' | 'read' | 'run' | 'result' | 'edit' | 'commit' | 'capture' | 'check' | 'wait';
type Line = { stage: number; kind: Kind; text: string };

const KIND_LABEL: Record<Lang, Record<Kind, string>> = {
  en: {
    search: 'search',
    read: 'read',
    run: 'run',
    result: 'result',
    edit: 'edit',
    commit: 'commit',
    capture: 'capture',
    check: 'check',
    wait: 'you',
  },
  vi: {
    search: 'tìm',
    read: 'đọc',
    run: 'chạy',
    result: 'kết quả',
    edit: 'sửa',
    commit: 'commit',
    capture: 'chụp',
    check: 'kiểm',
    wait: 'bạn',
  },
};

const COPY = {
  en: {
    key: 'KC-12',
    title: 'Contact button is misaligned on phones',
    copy: 'Private copy',
    stages: ['Narrow down', 'Find the cause', 'Fix', 'Check'],
    gate: 'You review · Apply · Publish',
    waiting: 'Waiting on you',
    working: 'Working',
    log: 'Run log',
    evidence: 'Evidence on Change 1',
    criteria: ['On phones, the button fits on screen', 'On computers, the layout looks the same'],
    passed: 'Passed',
    pending: 'Not checked yet',
    lines: [
      { stage: 0, kind: 'search', text: '"contact" in src/ → 3 files' },
      { stage: 0, kind: 'read', text: 'src/components/contact-button.css' },
      { stage: 1, kind: 'run', text: 'npm run build' },
      { stage: 1, kind: 'result', text: 'right: -24px overflows at 390px' },
      { stage: 2, kind: 'edit', text: 'contact-button.css  +3 −2' },
      { stage: 2, kind: 'commit', text: 'fix: keep contact button on small screens' },
      { stage: 3, kind: 'capture', text: '390×844 · 1280×800 · 0 console errors' },
      { stage: 3, kind: 'check', text: 'Button fits on a phone screen → Passed' },
      { stage: 3, kind: 'check', text: 'Computer layout looks the same → Passed' },
      { stage: 4, kind: 'wait', text: 'Ready for your review' },
    ] as Line[],
  },
  vi: {
    key: 'KC-12',
    title: 'Nút Liên hệ trên điện thoại bị lệch',
    copy: 'Bản sao riêng',
    stages: ['Khoanh vùng', 'Tìm nguyên nhân', 'Sửa', 'Kiểm thử'],
    gate: 'Bạn duyệt · Áp dụng · Xuất bản',
    waiting: 'Chờ bạn',
    working: 'Đang làm',
    log: 'Nhật ký lượt chạy',
    evidence: 'Bằng chứng trên Thay đổi 1',
    criteria: ['Trên điện thoại, nút hiện trọn trong màn hình', 'Trên máy tính, bố cục vẫn như cũ'],
    passed: 'Đạt',
    pending: 'Chưa kiểm',
    lines: [
      { stage: 0, kind: 'search', text: '"contact" trong src/ → 3 tệp' },
      { stage: 0, kind: 'read', text: 'src/components/contact-button.css' },
      { stage: 1, kind: 'run', text: 'npm run build' },
      { stage: 1, kind: 'result', text: 'right: -24px tràn ra ngoài ở 390px' },
      { stage: 2, kind: 'edit', text: 'contact-button.css  +3 −2' },
      { stage: 2, kind: 'commit', text: 'fix: keep contact button on small screens' },
      { stage: 3, kind: 'capture', text: '390×844 · 1280×800 · 0 lỗi console' },
      { stage: 3, kind: 'check', text: 'Nút hiện trọn trên điện thoại → Đạt' },
      { stage: 3, kind: 'check', text: 'Bố cục trên máy tính như cũ → Đạt' },
      { stage: 4, kind: 'wait', text: 'Sẵn sàng để bạn duyệt' },
    ] as Line[],
  },
} as const;

const STAGE_OWNER = [
  { name: 'Ben', bot: 'droid', token: 'person-4' },
  { name: 'Ben', bot: 'droid', token: 'person-4' },
  { name: 'Ben', bot: 'droid', token: 'person-4' },
  { name: 'Tess', bot: 'pebble', token: 'person-5' },
] as const;

const STEP_MS = 1150;
const HOLD_STEPS = 4;

/** A replay of one Bug fix run, so visitors see the relay, the log and the evidence move together. */
export function AgentConsole({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const total = t.lines.length;
  const [step, setStep] = useState(total);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Starts from the finished run (what the server rendered), holds, then replays from the top.
    const id = window.setInterval(() => {
      setStep((s) => (s >= total + HOLD_STEPS ? 1 : s + 1));
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, [total]);

  const shown = t.lines.slice(0, Math.min(step, total));
  const current = shown.at(-1)?.stage ?? 0;
  const passedCount = shown.filter((l) => l.kind === 'check').length;
  const waiting = current === 4;

  return (
    <div className="vk-console" aria-hidden>
      <div className="vk-console-bar">
        <span className="vk-console-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="vk-console-key">{t.key}</span>
        <span className="vk-console-title">{t.title}</span>
        <span className="vk-console-copy">{t.copy}</span>
      </div>

      <div className="vk-console-body">
        <ol className="vk-c-relay">
          {t.stages.map((name, i) => {
            const state = i < current ? 'done' : i === current ? 'working' : 'next';
            const owner = STAGE_OWNER[i];
            return (
              <li key={name} data-state={state}>
                {state === 'working' ? (
                  <span className="vk-c-live">
                    <Bot type={owner.bot} token={owner.token} size={28} working />
                    <span>
                      <b>{name}</b>
                      <small>
                        {owner.name} · {t.working}
                      </small>
                    </span>
                  </span>
                ) : (
                  <>
                    <span className="vk-c-glyph">{state === 'done' ? <Check size={10} strokeWidth={3} /> : null}</span>
                    <span>
                      <b>{name}</b>
                      <small>{owner.name}</small>
                    </span>
                  </>
                )}
              </li>
            );
          })}
          <li data-state={waiting ? 'gate-on' : 'gate'}>
            <span className="vk-c-glyph">
              <Lock size={10} strokeWidth={2.5} />
            </span>
            <span>
              <b>{t.gate}</b>
              {waiting ? <small className="vk-c-wait">{t.waiting}</small> : null}
            </span>
          </li>
        </ol>

        <div className="vk-c-side">
          <div className="vk-c-label">{t.log}</div>
          <div className="vk-c-log">
            {shown.map((l, i) => (
              <div key={i} className="vk-c-line" data-kind={l.kind}>
                <span className="vk-c-time">09:41:{String(2 + i * 3).padStart(2, '0')}</span>
                <span className="vk-c-kind">{KIND_LABEL[lang][l.kind]}</span>
                <span className="vk-c-text">{l.text}</span>
              </div>
            ))}
            {!waiting ? <span className="vk-c-caret" /> : null}
          </div>

          <div className="vk-c-label">{t.evidence}</div>
          <div className="vk-c-ev">
            {t.criteria.map((c, i) => {
              const ok = i < passedCount;
              return (
                <div key={c} className="vk-c-ev-row" data-ok={ok}>
                  <span>{c}</span>
                  <span className="vk-c-ev-state">{ok ? t.passed : t.pending}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

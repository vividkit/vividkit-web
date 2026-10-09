import { Ban, FileCheck2, GitBranch, Octagon, ShieldCheck, Square } from 'lucide-react';
import type { Lang } from './team-data';

const COPY = {
  en: {
    copy: ['Private copy per issue', 'The team clones your project and only ever writes there. Your folder changes when you Apply.'],
    evidence: ['Evidence, not promises', 'VividKit screenshots each page at phone and desktop size and checks every criterion.'],
    trusted: ['A separate window for real changes', 'Apply, Undo, Publish and Roll back run only after you confirm the exact files.'],
    stop: ['Stop means stop', 'One press ends the run within three seconds. Nothing already done is lost.'],
    isolation: ['Isolation when Full access is off', 'Claude Code and Codex then run every shell command behind bubblewrap or Seatbelt, away from secrets. Full access is on by default in the beta.'],
    versions: ['Requirements have versions', 'Change your mind mid-way: v2 shows what changed, and v1 evidence turns Stale.'],
    main: 'main',
    issue: 'vk/KC-12',
    applyBtn: 'Apply 2 files',
    stopBtn: 'Stop Ben',
    stopped: 'Stopped · copy, log and evidence kept',
    blocked: ['.env', '~/.ssh', 'Claude sign-in', 'unknown hosts'],
    v: [
      ['Button fits on a phone screen', 'Unchanged'],
      ['Button moves to the page bottom', 'Changed'],
      ['Tapping it opens the contact form', 'New'],
    ],
  },
  vi: {
    copy: ['Mỗi issue một bản sao riêng', 'Đội clone dự án và chỉ ghi ở đó. Thư mục của bạn chỉ đổi khi bạn Áp dụng.'],
    evidence: ['Bằng chứng, không phải lời hứa', 'VividKit chụp từng trang ở cỡ điện thoại và máy tính, kiểm từng tiêu chí.'],
    trusted: ['Cửa sổ riêng cho thay đổi thật', 'Áp dụng, Hoàn tác, Xuất bản, Đổi về bản trước chỉ chạy khi bạn xác nhận đúng từng tệp.'],
    stop: ['Dừng là dừng', 'Một lần bấm, lượt chạy kết thúc trong ba giây. Không mất gì đã làm.'],
    isolation: ['Rào chắn khi tắt Toàn quyền', 'Khi đó Claude Code và Codex chạy mọi lệnh shell sau bubblewrap hoặc Seatbelt, xa các bí mật. Bản beta mặc định bật Toàn quyền.'],
    versions: ['Requirement có phiên bản', 'Đổi ý giữa chừng: v2 cho thấy điều gì đổi, bằng chứng v1 thành Đã cũ.'],
    main: 'main',
    issue: 'vk/KC-12',
    applyBtn: 'Áp dụng 2 tệp',
    stopBtn: 'Dừng Ben',
    stopped: 'Đã dừng · giữ bản sao, nhật ký, bằng chứng',
    blocked: ['.env', '~/.ssh', 'Đăng nhập Claude', 'máy chủ lạ'],
    v: [
      ['Nút hiện trọn trên điện thoại', 'Không đổi'],
      ['Nút chuyển xuống cuối trang', 'Đã đổi'],
      ['Bấm nút thì mở form liên hệ', 'Mới'],
    ],
  },
} as const;

function Cell({
  icon: Icon,
  title,
  body,
  wide,
  full,
  children,
}: {
  icon: typeof GitBranch;
  title: string;
  body: string;
  wide?: boolean;
  /** Spans the whole row, with the text beside the art. */
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <article className="vk-bento-cell" data-wide={wide || undefined} data-full={full || undefined}>
      <div className="vk-bento-art" aria-hidden>
        {children}
      </div>
      <div className="vk-bento-text">
        <Icon size={16} />
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </article>
  );
}

export function HomeBento({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  return (
    <div className="vk-bento">
      <Cell icon={GitBranch} title={t.copy[0]} body={t.copy[1]} wide>
        <svg className="vk-art-git" viewBox="0 0 420 120" fill="none">
          <path d="M20 80 H400" className="vk-art-main" />
          <path d="M90 80 C 130 80, 130 34, 170 34 H330 C 360 34, 360 80, 390 80" className="vk-art-branch" />
          <circle cx="90" cy="80" r="6" className="vk-art-node" />
          <circle cx="210" cy="34" r="6" className="vk-art-node-b" />
          <circle cx="260" cy="34" r="6" className="vk-art-node-b" />
          <circle cx="310" cy="34" r="6" className="vk-art-node-b" />
          <circle cx="390" cy="80" r="7" className="vk-art-node-apply" />
          <text x="20" y="104" className="vk-art-label">
            {t.main}
          </text>
          <text x="200" y="18" className="vk-art-label">
            {t.issue}
          </text>
        </svg>
      </Cell>

      <Cell icon={FileCheck2} title={t.evidence[0]} body={t.evidence[1]}>
        <div className="vk-art-shots">
          <div className="vk-art-desktop">
            <i />
            <i />
            <i />
          </div>
          <div className="vk-art-phone">
            <i />
            <i />
            <b />
          </div>
        </div>
      </Cell>

      <Cell icon={ShieldCheck} title={t.trusted[0]} body={t.trusted[1]}>
        <div className="vk-art-window">
          <div className="vk-art-window-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="vk-art-file" data-op="edit">
            <span>~</span> src/components/contact-button.css
          </div>
          <div className="vk-art-file" data-op="add">
            <span>+</span> tests/contact-button.spec.ts
          </div>
          <div className="vk-art-apply">{t.applyBtn}</div>
        </div>
      </Cell>

      <Cell icon={Octagon} title={t.stop[0]} body={t.stop[1]}>
        <div className="vk-art-stop">
          <span className="vk-art-stop-btn">
            <Square size={12} fill="currentColor" /> {t.stopBtn}
          </span>
          <small>{t.stopped}</small>
        </div>
      </Cell>

      <Cell icon={Ban} title={t.isolation[0]} body={t.isolation[1]}>
        <ul className="vk-art-blocked">
          {t.blocked.map((b) => (
            <li key={b}>
              <Ban size={12} />
              <code>{b}</code>
            </li>
          ))}
        </ul>
      </Cell>

      <Cell icon={FileCheck2} title={t.versions[0]} body={t.versions[1]} full>
        <div className="vk-art-versions">
          <span className="vk-art-ver">v1</span>
          <span className="vk-art-arrow" />
          <span className="vk-art-ver" data-on>
            v2
          </span>
          <ul>
            {t.v.map(([c, s], i) => (
              <li key={c} data-change={i}>
                <span>{c}</span>
                <em>{s}</em>
              </li>
            ))}
          </ul>
        </div>
      </Cell>
    </div>
  );
}

import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-watzup',
  command: '/ak:watzup',
  kit: 'engineer',
  header: {
    titleEn: '/ak:watzup — Evidence-backed project handoff',
    titleVi: '/ak:watzup — Báo cáo bàn giao có bằng chứng',
    taglineEn: 'Generate a short, evidence-backed project handoff from branches, refs, worktrees, unfinished plans, and roadmap docs with priority-ranked next steps.',
    taglineVi: 'Tạo báo cáo bàn giao ngắn có bằng chứng từ branch, ref, worktree, plan dang dở và roadmap, kèm bước tiếp theo xếp theo ưu tiên.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Read-only handoff',
    titleVi: 'Bàn giao chỉ đọc',
    contentEn: 'This skill reports status only. It does not implement, edit, commit, checkout, merge, push, fetch, or mutate the checkout unless the user explicitly requested fresh remote refs.',
    contentVi: 'Skill này chỉ báo cáo trạng thái. Không triển khai, sửa file, commit, checkout, merge, push, fetch hoặc thay đổi checkout, trừ khi người dùng yêu cầu làm mới remote refs.',
  },
  processFlow: [
    { number: 1, titleEn: 'Run scanner', titleVi: 'Chạy scanner', descEn: 'From the project root, run scripts/watzup-scan.cjs with JSON output before writing the report.', descVi: 'Từ root dự án, chạy scripts/watzup-scan.cjs với JSON output trước khi viết báo cáo.' },
    { number: 2, titleEn: 'Read state', titleVi: 'Đọc trạng thái', descEn: 'Capture branch or detached HEAD, dirty/clean state, active worktree, and scanner warnings.', descVi: 'Ghi nhận branch hoặc detached HEAD, trạng thái dirty/clean, worktree đang dùng và cảnh báo của scanner.' },
    { number: 3, titleEn: 'Summarize work', titleVi: 'Tóm tắt việc', descEn: 'Select only the highest-signal recent branches and worktrees instead of dumping every ref.', descVi: 'Chỉ chọn branch và worktree gần đây có tín hiệu cao nhất, không đổ toàn bộ ref vào báo cáo.' },
    { number: 4, titleEn: 'Measure plans', titleVi: 'Đo tiến độ plan', descEn: 'List unfinished plans with X/Y checkbox counts and percentage done across plan.md and phase files.', descVi: 'Liệt kê plan chưa xong với số checkbox X/Y và phần trăm hoàn thành từ plan.md và các phase file.' },
    { number: 5, titleEn: 'Scan roadmap', titleVi: 'Quét roadmap', descEn: 'Include active milestones from roadmap or milestone docs when they exist.', descVi: 'Đưa các milestone đang active từ tài liệu roadmap hoặc milestone vào báo cáo khi có.' },
    { number: 6, titleEn: 'Rank next steps', titleVi: 'Xếp bước tiếp', descEn: 'Use scanner nextSteps priority, rationale, workspace alignment, status, provenance, and momentum signals.', descVi: 'Dựa vào priority, rationale, worktree/branch hiện tại, trạng thái, nguồn dữ liệu và đà tiến độ từ nextSteps của scanner.' },
    { number: 7, titleEn: 'Warn honestly', titleVi: 'Cảnh báo thật', descEn: 'Call out stale remotes, detached HEAD, dirty state, and any scanner failures instead of hiding uncertainty.', descVi: 'Nêu rõ remote có thể cũ, detached HEAD, trạng thái dirty và lỗi scanner thay vì che giấu độ bất định.' },
    { number: 8, titleEn: 'Fallback read-only', titleVi: 'Dự phòng chỉ đọc', descEn: 'If the scanner fails, say so and use minimal read-only Git/worktree/plan/roadmap inspection.', descVi: 'Nếu scanner lỗi, nói rõ rồi dùng các lệnh đọc tối thiểu để xem Git, worktree, plan và roadmap.' },
  ],
  corePrinciplesEn: [
    'Status and handoff only; never turn a wrap-up into implementation.',
    'Evidence-backed summaries beat broad branch dumps.',
    'Priority next steps should explain why they outrank the alternatives.',
    'Do not pretend the full scan succeeded when fallback inspection was used.',
  ],
  corePrinciplesVi: [
    'Chỉ trạng thái và bàn giao; không biến wrap-up thành triển khai.',
    'Tóm tắt có bằng chứng tốt hơn liệt kê tràn lan branch.',
    'Bước tiếp theo theo ưu tiên phải nói rõ vì sao nó đứng trước lựa chọn khác.',
    'Không giả vờ full scan thành công khi thực ra chỉ dùng cách dự phòng.',
  ],
  skillStack: [
    { name: 'scripts/watzup-scan.cjs', type: 'tool' },
    { name: 'Git branches', type: 'tool' },
    { name: 'git worktree', type: 'tool' },
    { name: 'plan checkbox progress', type: 'tool' },
    { name: 'roadmap docs', type: 'tool' },
    { name: 'ak-handoff', type: 'skill' },
  ],
  specialOperations: [
    { id: 'hygiene-first', titleEn: 'Hygiene ranks first', titleVi: 'Vệ sinh repo ưu tiên trước', descEn: 'Dirty worktrees and detached HEAD states outrank normal roadmap work because they can lose context.', descVi: 'Worktree dirty và detached HEAD được xếp trước roadmap vì chúng dễ làm mất ngữ cảnh.', color: 'amber' },
    { id: 'local-by-default', titleEn: 'No network by default', titleVi: 'Mặc định không network', descEn: 'Remote refs stay local unless the user explicitly asks for fresh remote state.', descVi: 'Remote refs chỉ dùng bản local trừ khi người dùng yêu cầu làm mới trạng thái remote.', color: 'sky' },
    { id: 'handoff-not-compaction', titleEn: 'Not conversation compaction', titleVi: 'Không phải nén hội thoại', descEn: 'Use ak-handoff when a fresh agent needs decisions, rationale, and session context.', descVi: 'Dùng ak-handoff khi agent mới cần quyết định, lý do và ngữ cảnh hội thoại.', color: 'violet' },
  ],
  reportOutput: {
    titleEn: 'Brief handoff report',
    titleVi: 'Báo cáo bàn giao ngắn',
    patternEn: 'Current State → Recent Work → Plans → Roadmaps → Next Steps → Warnings',
    patternVi: 'Trạng thái hiện tại → Việc gần đây → Plan → Roadmap → Bước tiếp → Cảnh báo',
    locationEn: 'Terminal response',
    locationVi: 'Trả lời trong terminal',
    descEn: 'Short status with progress annotations and five to six priority-ranked actions.',
    descVi: 'Trạng thái ngắn có chú thích tiến độ và năm đến sáu hành động theo thứ tự ưu tiên.',
  },
  promptExamples: [
    { labelEn: 'End-of-session handoff', labelVi: 'Bàn giao cuối phiên', command: '/ak:watzup', whenEn: 'You need to know what is in flight and what to do next in the current project.', whenVi: 'Cần biết dự án đang dở việc gì và nên làm gì tiếp.', expectedEn: 'Returns a concise status report with prioritized next steps and warnings.', expectedVi: 'Trả về báo cáo ngắn với bước tiếp theo theo ưu tiên và các cảnh báo.', recommended: true },
    { labelEn: 'Fresh checkout orientation', labelVi: 'Định hướng trong checkout mới', command: '/ak:watzup', whenEn: 'You entered a worktree or detached checkout and need the local situation quickly.', whenVi: 'Vừa vào worktree hoặc checkout tách và cần nắm tình hình local nhanh.', expectedEn: 'Highlights branch/worktree state, unfinished plans, and likely highest-value action.' , expectedVi: 'Nêu trạng thái branch/worktree, plan chưa xong và hành động có giá trị cao nhất.' },
  ],
};

export default data;

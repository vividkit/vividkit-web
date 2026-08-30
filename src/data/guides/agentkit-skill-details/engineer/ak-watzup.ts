import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-watzup',
  command: '/ak:watzup',
  kit: 'engineer',
  header: {
    titleEn: '/ak:watzup — Project status handoff',
    titleVi: '/ak:watzup — Bàn giao trạng thái dự án',
    taglineEn: 'Generate a short, evidence-backed handoff from Git refs, worktrees, unfinished plans, and roadmap docs, with prioritized next steps and rationale.',
    taglineVi: 'Tạo báo cáo bàn giao ngắn có bằng chứng từ Git ref, worktree, plan chưa xong và roadmap, kèm bước tiếp theo ưu tiên và lý do.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Status only; fetch only on request',
    titleVi: 'Chỉ báo trạng thái; chỉ fetch khi được yêu cầu',
    contentEn: 'This skill reports status and handoff evidence only. It does not implement, edit, commit, checkout, merge, push, fetch, or mutate the checkout unless the user explicitly asks to refresh remotes.',
    contentVi: 'Skill này chỉ báo cáo trạng thái và bằng chứng bàn giao. Không triển khai, sửa file, commit, checkout, merge, push, fetch hoặc thay đổi checkout, trừ khi người dùng yêu cầu làm mới remote.',
  },
  invocation: {
    syntax: '/ak:watzup [--json] [--fetch] [--since <date>] [--max-branches <n>] [--plan-limit <n>] [--max-plan-refs <n>] [--redact-paths]',
    options: [
      { token: '--json', titleEn: 'Structured evidence', titleVi: 'Bằng chứng có cấu trúc', descEn: 'Emit structured evidence for the handoff. This does not refresh remote refs.', descVi: 'Xuất bằng chứng có cấu trúc cho bản bàn giao. Tùy chọn này không làm mới remote ref.', exampleCommand: '/ak:watzup --json' },
      { token: '--fetch', titleEn: 'Refresh remotes', titleVi: 'Làm mới remote', descEn: 'Run git fetch --all --prune before scanning. This contacts configured remotes and updates/prunes local remote-tracking refs; omit for the default local-only report.', descVi: 'Chạy git fetch --all --prune trước khi quét. Tùy chọn này liên hệ remote đã cấu hình và cập nhật/prune remote-tracking ref local; bỏ qua để dùng báo cáo mặc định chỉ đọc local.', exampleCommand: '/ak:watzup --fetch' },
      { token: '--since <date>', titleEn: 'Commit sample window', titleVi: 'Khoảng lấy mẫu commit', descEn: 'Limit sampled commits per branch. This does not limit plan or roadmap discovery.', descVi: 'Giới hạn commit được lấy mẫu trên mỗi branch. Tùy chọn này không giới hạn discovery plan hoặc roadmap.', exampleCommand: '/ak:watzup --since 2026-08-01' },
      { token: '--max-branches <n>', titleEn: 'Branch summary limit', titleVi: 'Giới hạn tóm tắt branch', descEn: 'Limit branches summarized. Omitted branches still exist.', descVi: 'Giới hạn số branch được tóm tắt. Các branch bị bỏ qua vẫn tồn tại.', exampleCommand: '/ak:watzup --max-branches 20' },
      { token: '--plan-limit <n>', titleEn: 'Short-output plan limit', titleVi: 'Giới hạn plan trong output ngắn', descEn: 'Limit unfinished plans included in short output. This does not prove excluded plans are complete.', descVi: 'Giới hạn số plan chưa xong đưa vào output ngắn. Điều này không chứng minh các plan bị loại đã hoàn tất.', exampleCommand: '/ak:watzup --plan-limit 8' },
      { token: '--max-plan-refs <n>', titleEn: 'Tracked plan ref limit', titleVi: 'Giới hạn ref plan tracked', descEn: 'Limit ranked refs inspected for tracked plan files. A warning records truncation.', descVi: 'Giới hạn số ref đã xếp hạng được kiểm tra để tìm plan file tracked. Warning sẽ ghi lại việc cắt bớt.', exampleCommand: '/ak:watzup --max-plan-refs 40' },
      { token: '--redact-paths', titleEn: 'Redact absolute paths', titleVi: 'Che đường dẫn tuyệt đối', descEn: 'Replace absolute paths with stable labels. This does not redact branch names, commit subjects, or document content.', descVi: 'Thay đường dẫn tuyệt đối bằng nhãn ổn định. Tùy chọn này không che tên branch, tiêu đề commit hoặc nội dung tài liệu.', exampleCommand: '/ak:watzup --redact-paths' },
    ],
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
    { name: 'node scripts/watzup-scan.cjs', type: 'tool' },
    { name: 'git status --short --branch', type: 'tool' },
    { name: 'git worktree list --porcelain', type: 'tool' },
    { name: 'git for-each-ref', type: 'tool' },
    { name: 'plan.md + phase-*.md checkbox scan', type: 'tool' },
    { name: 'docs/*roadmap*.md + docs/*milestones*.md', type: 'tool' },
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
    { labelEn: 'End-of-session handoff', labelVi: 'Bàn giao cuối phiên', command: '/ak:watzup', whenEn: 'You need a short local snapshot of what is in flight and what to do next.', whenVi: 'Cần snapshot local ngắn về việc đang dở và bước tiếp theo.', expectedEn: 'Runs the JSON scanner, reports branch or detached HEAD, dirty state, in-flight plans with checkbox progress, ranked next steps, and warnings.', expectedVi: 'Chạy JSON scanner, báo branch hoặc detached HEAD, dirty state, plan đang dở với tiến độ checkbox, bước tiếp theo theo ưu tiên và warning.', recommended: true },
    { labelEn: 'Refresh remote refs first', labelVi: 'Làm mới remote ref trước', command: '/ak:watzup --fetch', whenEn: 'You explicitly authorize a remote refresh before the handoff because local remote-tracking refs may be stale.', whenVi: 'Bạn cho phép làm mới remote trước báo cáo vì remote-tracking ref local có thể đã cũ.', expectedEn: 'Runs the scanner with fetch enabled, then separates fresh ref evidence from checkout status, plans, roadmap milestones, next steps, and warnings.', expectedVi: 'Chạy scanner có fetch, rồi tách bằng chứng ref mới khỏi trạng thái checkout, plan, milestone roadmap, bước tiếp theo và warning.' },
    { labelEn: 'Fresh worktree orientation', labelVi: 'Định hướng trong worktree mới', command: '/ak:watzup', whenEn: 'You entered a worktree or detached checkout and need the local situation quickly.', whenVi: 'Vừa vào worktree hoặc checkout tách và cần nắm tình hình local nhanh.', expectedEn: 'Highlights the active worktree, branch or detached commit, dirty-tree or detached-HEAD hygiene, unfinished plans, and the highest-ranked action.', expectedVi: 'Nêu worktree hiện tại, branch hoặc detached commit, việc vệ sinh dirty tree hoặc detached HEAD, plan chưa xong và hành động ưu tiên cao nhất.' },
    { labelEn: 'Cross-branch plan scan', labelVi: 'Quét plan qua branch', command: '/ak:watzup', whenEn: 'You want visible worktrees and tracked refs checked for unfinished plans and checklist progress.', whenVi: 'Muốn kiểm tra worktree hiển thị và tracked ref để tìm plan chưa xong cùng tiến độ checklist.', expectedEn: 'Deduplicates visible and tracked plan evidence, counts plan.md plus phase-file checkboxes, and ranks next steps by status, alignment, provenance, and momentum.', expectedVi: 'Khử trùng lặp bằng chứng plan từ worktree và ref, đếm checkbox trong plan.md cùng phase file, rồi xếp bước tiếp theo theo trạng thái, độ khớp, nguồn và đà tiến độ.' },
  ],
};

export default data;

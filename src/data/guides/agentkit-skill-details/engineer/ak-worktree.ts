import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-worktree',
  command: '/ak:worktree',
  kit: 'engineer',
  header: {
    titleEn: '/ak:worktree — Git worktree isolation',
    titleVi: '/ak:worktree — Tách biệt bằng Git worktree',
    taglineEn: 'Create, inspect, and clean isolated git worktrees for parallel feature work, worktree audits, stale metadata cleanup, monorepos, and submodule workflows.',
    taglineVi: 'Tạo, kiểm tra và dọn Git worktree tách biệt cho làm feature song song, audit worktree, dọn metadata stale, monorepo và submodule.',
  },
  processFlow: [
    { number: 1, titleEn: 'Read repo info', titleVi: 'Đọc thông tin repo', descEn: 'Run node scripts/worktree.cjs info --json, then parse repo type, base branch, projects, root location/source, dirty state, and dirty details.', descVi: 'Chạy node scripts/worktree.cjs info --json, rồi đọc loại repo, base branch, project, vị trí/nguồn root, trạng thái dirty và chi tiết dirty.' },
    { number: 2, titleEn: 'Detect exact names', titleVi: 'Nhận dạng tên chính xác', descEn: 'If the caller provides uppercase, issue keys, slashes, or an explicit exact branch name, choose --no-prefix and preserve it as the slug.', descVi: 'Nếu người gọi đưa chữ hoa, mã issue, dấu slash hoặc yêu cầu tên branch chính xác, chọn --no-prefix và giữ nguyên làm slug.' },
    { number: 3, titleEn: 'Infer branch type', titleVi: 'Suy ra loại branch', descEn: 'Otherwise infer fix, refactor, docs, test, chore, or perf from the description, with feat as the default prefix.', descVi: 'Nếu không, suy ra fix, refactor, docs, test, chore hoặc perf từ mô tả, mặc định dùng prefix feat.' },
    { number: 4, titleEn: 'Build the slug', titleVi: 'Tạo slug', descEn: 'Convert the feature description to kebab-case up to 50 characters, skipping this step only when --no-prefix was selected.', descVi: 'Đổi mô tả feature thành kebab-case tối đa 50 ký tự, chỉ bỏ qua bước này khi đã chọn --no-prefix.' },
    { number: 5, titleEn: 'Resolve monorepo project', titleVi: 'Chọn project monorepo', descEn: 'For monorepos without a supplied project, ask the user which project path should receive the worktree.', descVi: 'Với monorepo chưa có project được đưa sẵn, hỏi người dùng project path nào sẽ nhận worktree.' },
    { number: 6, titleEn: 'Execute create', titleVi: 'Chạy tạo worktree', descEn: 'Run scripts/worktree.cjs create with standalone or monorepo arguments plus --prefix, --base, --checkout-submodules, --json, --dry-run, or root overrides as needed.', descVi: 'Chạy scripts/worktree.cjs create với tham số standalone hoặc monorepo cùng --prefix, --base, --checkout-submodules, --json, --dry-run hoặc override root khi cần.' },
    { number: 7, titleEn: 'Install dependencies', titleVi: 'Cài dependency', descEn: 'In the new worktree, install dependencies in the background from the detected lockfile or manifest: bun, pnpm, yarn, npm, poetry, pip, cargo, or go.', descVi: 'Trong worktree mới, cài dependency nền theo lockfile hoặc manifest đã phát hiện: bun, pnpm, yarn, npm, poetry, pip, cargo hoặc go.' },
    { number: 8, titleEn: 'Operate worktrees', titleVi: 'Vận hành worktree', descEn: 'Use info, list, status, remove, and prune for health checks, normalized paths, base-branch divergence, removals, and stale metadata cleanup.', descVi: 'Dùng info, list, status, remove và prune để kiểm sức khỏe, chuẩn hóa path, xem độ lệch base branch, remove và dọn metadata stale.' },
  ],
  corePrinciplesEn: [
    'Start by reading repo metadata with scripts/worktree.cjs info --json.',
    'Use --no-prefix when the user supplied an exact branch name or convention.',
    'Let configured worktree roots resolve by priority; use --worktree-root only for true overrides.',
    'In monorepos, ask for or supply the project before creating the worktree.',
    'Rely on env-template copying and background dependency installation inside the new worktree.',
  ],
  corePrinciplesVi: [
    'Bắt đầu bằng cách đọc metadata repo với scripts/worktree.cjs info --json.',
    'Dùng --no-prefix khi người dùng đã đưa tên branch hoặc quy ước chính xác.',
    'Để root worktree được resolve theo thứ tự cấu hình; chỉ dùng --worktree-root khi thật sự override.',
    'Trong monorepo, hỏi hoặc đưa project trước khi tạo worktree.',
    'Dựa vào việc copy env template và cài dependency nền trong worktree mới.',
  ],
  skillStack: [
    { name: 'scripts/worktree.cjs', type: 'tool' },
    { name: 'ask_user capability', type: 'tool' },
    { name: 'ak config prefs', type: 'tool' },
    { name: 'dependency installers', type: 'tool' },
    { name: 'git submodule update', type: 'tool' },
  ],
  specialOperations: [
    { id: 'exact-name', titleEn: 'Exact branch mode', titleVi: 'Chế độ giữ nguyên tên', descEn: 'Select --no-prefix for Jira-style keys, uppercase branch names, multi-segment branches, or explicit exact-name requests.', descVi: 'Chọn --no-prefix cho mã kiểu Jira, tên branch có chữ hoa, branch nhiều segment hoặc yêu cầu giữ đúng tên.', color: 'sky' },
    { id: 'root-resolution', titleEn: 'Root resolution', titleVi: 'Resolve root', descEn: 'Location priority is CLI --worktree-root, project config, user config, WORKTREE_ROOT, superproject, monorepo, then sibling directory.', descVi: 'Thứ tự vị trí là --worktree-root trên CLI, config project, config user, WORKTREE_ROOT, superproject, monorepo, rồi thư mục sibling.', color: 'violet' },
    { id: 'safe-prune', titleEn: 'Safe prune', titleVi: 'Prune an toàn', descEn: 'Use prune --dry-run as the first pass when auditing stale worktree metadata.', descVi: 'Dùng prune --dry-run làm lượt đầu khi audit metadata worktree stale.', color: 'amber' },
  ],
  promptExamples: [
    { labelEn: 'Create feature worktree', labelVi: 'Tạo worktree feature', command: '/ak:worktree create billing dashboard', whenEn: 'You need an isolated worktree for parallel feature development.', whenVi: 'Cần một worktree tách biệt để phát triển feature song song.', expectedEn: 'Reads repo info, infers feat plus billing-dashboard, creates the checkout, copies env templates, and installs detected dependencies.', expectedVi: 'Đọc thông tin repo, suy ra feat và billing-dashboard, tạo checkout, copy env template rồi cài dependency đã phát hiện.', recommended: true },
    { labelEn: 'Preserve exact branch', labelVi: 'Giữ nguyên branch', command: '/ak:worktree create ND-1377-cleanup-docs', whenEn: 'An issue tracker or team convention already supplied the branch name.', whenVi: 'Issue tracker hoặc quy ước team đã đưa sẵn tên branch.', expectedEn: 'Chooses --no-prefix, preserves uppercase and issue-key characters exactly, and creates the worktree without adding a feat/fix prefix.', expectedVi: 'Chọn --no-prefix, giữ nguyên chữ hoa và ký tự mã issue, rồi tạo worktree mà không thêm prefix feat/fix.' },
    { labelEn: 'Monorepo project', labelVi: 'Project monorepo', command: '/ak:worktree create web fix checkout redirect', whenEn: 'A specific monorepo project should receive the new isolated checkout.', whenVi: 'Một project cụ thể trong monorepo cần checkout tách biệt mới.', expectedEn: 'Uses web as the project, infers a fix branch type, slugs checkout-redirect, then creates and initializes that project worktree.', expectedVi: 'Dùng web làm project, suy ra loại branch fix, tạo slug checkout-redirect, rồi tạo và khởi tạo worktree cho project đó.' },
    { labelEn: 'Inspect worktree health', labelVi: 'Kiểm sức khỏe worktree', command: '/ak:worktree status --json', whenEn: 'You need a worktree audit with normalized paths or base-branch divergence.', whenVi: 'Cần audit worktree với path chuẩn hóa hoặc độ lệch base branch.', expectedEn: 'Runs the status command, returns normalized worktree records, and includes the current checkout health and divergence details.', expectedVi: 'Chạy lệnh status, trả về record worktree đã chuẩn hóa, gồm sức khỏe checkout hiện tại và chi tiết độ lệch.' },
    { labelEn: 'Preview stale cleanup', labelVi: 'Xem trước dọn stale', command: '/ak:worktree prune --dry-run', whenEn: 'Worktree metadata may be stale after manual branch or directory cleanup.', whenVi: 'Metadata worktree có thể stale sau khi dọn branch hoặc thư mục bằng tay.', expectedEn: 'Audits stale metadata safely first, reports prune entries without removing them, and leaves the final cleanup decision explicit.', expectedVi: 'Audit metadata stale một cách an toàn trước, báo các entry prune mà chưa xóa, và để quyết định dọn thật được rõ ràng.' },
  ],
};

export default data;

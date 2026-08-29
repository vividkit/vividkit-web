import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-worktree',
  command: '/ak:worktree',
  kit: 'engineer',
  header: {
    titleEn: '/ak:worktree',
    titleVi: '/ak:worktree',
    taglineEn: 'Create, inspect, and clean isolated Git worktrees for feature isolation, health audits, stale cleanup, monorepos, submodules, and parallel development.',
    taglineVi: 'Tạo, kiểm tra và dọn Git worktree tách biệt cho feature riêng, audit sức khỏe, cleanup stale, monorepo, submodule và phát triển song song.',
  },
  processFlow: [
    { number: 1, titleEn: 'Read repo info', titleVi: 'Đọc thông tin repo', descEn: 'Run the worktree info script and parse repo type, base branch, projects, root source, dirty state, and details.', descVi: 'Chạy script info của worktree và đọc loại repo, base branch, project, nguồn root, trạng thái dirty và chi tiết.' },
    { number: 2, titleEn: 'Detect branch mode', titleVi: 'Nhận dạng tên branch', descEn: 'Preserve exact branch names with uppercase, issue keys, slashes, or explicit exact-name instructions.', descVi: 'Giữ nguyên tên branch có chữ hoa, mã issue, dấu slash hoặc yêu cầu dùng đúng tên.' },
    { number: 3, titleEn: 'Choose prefix', titleVi: 'Chọn prefix', descEn: 'Otherwise infer feat, fix, refactor, docs, test, chore, or perf from the feature description.', descVi: 'Nếu không phải tên branch có sẵn, suy ra feat, fix, refactor, docs, test, chore hoặc perf từ mô tả việc.' },
    { number: 4, titleEn: 'Slug feature', titleVi: 'Tạo slug', descEn: 'Convert the description to a kebab-case slug up to 50 characters unless exact-name mode is active.', descVi: 'Đổi mô tả thành slug kebab-case tối đa 50 ký tự, trừ khi đang dùng chế độ giữ nguyên tên.' },
    { number: 5, titleEn: 'Handle monorepo', titleVi: 'Xử lý monorepo', descEn: 'When the repo is a monorepo and no project was supplied, ask the user to pick one project.', descVi: 'Khi repo là monorepo mà chưa có project, hỏi người dùng chọn một project.' },
    { number: 6, titleEn: 'Create worktree', titleVi: 'Tạo worktree', descEn: 'Call the create script with project, slug, prefix, base branch, submodule checkout, root override, JSON, or dry-run options as needed.', descVi: 'Gọi script create với project, slug, prefix, base branch, checkout submodule, root override, JSON hoặc dry-run khi cần.' },
    { number: 7, titleEn: 'Install deps', titleVi: 'Cài dependency', descEn: 'Use the detected lockfile or language manifest to install dependencies in the new isolated worktree.', descVi: 'Dựa vào lockfile hoặc manifest ngôn ngữ để cài dependency trong worktree tách biệt mới.' },
    { number: 8, titleEn: 'Inspect health', titleVi: 'Kiểm sức khỏe', descEn: 'Use info, list, status, remove, or prune commands for audits, normalized paths, divergence, and stale metadata cleanup.', descVi: 'Dùng info, list, status, remove hoặc prune để audit, chuẩn hóa path, xem độ lệch branch và dọn metadata stale.' },
  ],
  corePrinciplesEn: [
    'Create isolation before implementation skills such as ak:cook or ak:fix.',
    'Preserve exact branch names when the user or issue tracker convention already supplied one.',
    'Let configured worktree roots resolve by priority; use worktree-root only for true overrides.',
    'In monorepos, pick the project deliberately before creating the worktree.',
    'Copy env templates safely and initialize dependencies inside the new worktree.',
  ],
  corePrinciplesVi: [
    'Tạo môi trường tách biệt trước các skill triển khai như ak:cook hoặc ak:fix.',
    'Giữ nguyên tên branch khi người dùng hoặc quy ước issue tracker đã đưa sẵn.',
    'Để root worktree được resolve theo thứ tự cấu hình; chỉ dùng worktree-root khi thật sự override.',
    'Trong monorepo, chọn project có chủ ý trước khi tạo worktree.',
    'Copy env template an toàn và cài dependency ngay trong worktree mới.',
  ],
  skillStack: [
    { name: 'scripts/worktree.cjs', type: 'tool' },
    { name: 'git worktree', type: 'tool' },
    { name: 'ak:cook', type: 'skill' },
    { name: 'ak:fix', type: 'skill' },
    { name: '.agentkit/config.yaml', type: 'tool' },
  ],
  specialOperations: [
    { id: 'exact-name', titleEn: 'Exact branch mode', titleVi: 'Chế độ giữ nguyên tên', descEn: 'Use no-prefix behavior for Jira keys, uppercase names, multi-segment branches, or explicit exact-name requests.', descVi: 'Dùng hành vi no-prefix cho mã Jira, tên có chữ hoa, branch nhiều segment hoặc yêu cầu giữ đúng tên.', color: 'sky' },
    { id: 'root-resolution', titleEn: 'Root resolution', titleVi: 'Resolve root', descEn: 'Root priority is CLI override, project config, user config, WORKTREE_ROOT, superproject, monorepo, then sibling directory.', descVi: 'Thứ tự root: override CLI, config project, config user, WORKTREE_ROOT, superproject, monorepo, rồi thư mục sibling.', color: 'violet' },
    { id: 'safe-prune', titleEn: 'Safe prune', titleVi: 'Prune an toàn', descEn: 'Use dry-run first when auditing stale worktree metadata.', descVi: 'Dùng dry-run trước khi audit metadata worktree stale.', color: 'amber' },
  ],
  promptExamples: [
    { labelEn: 'Create feature worktree', labelVi: 'Tạo worktree feature', command: '/ak:worktree add billing dashboard', whenEn: 'A new feature needs an isolated branch and checkout.', whenVi: 'Một feature mới cần branch và checkout tách biệt.', expectedEn: 'Detects prefix and slug, creates the worktree, and initializes dependencies.', expectedVi: 'Nhận dạng prefix và slug, tạo worktree rồi cài dependency.', recommended: true },
    { labelEn: 'Monorepo feature', labelVi: 'Feature trong monorepo', command: '/ak:worktree web fix checkout redirect', whenEn: 'A specific monorepo project should receive the new worktree.', whenVi: 'Một project cụ thể trong monorepo cần worktree mới.', expectedEn: 'Uses the supplied project name before creating the branch/worktree.', expectedVi: 'Dùng tên project đã đưa trước khi tạo branch/worktree.' },
    { labelEn: 'Inspect status', labelVi: 'Xem trạng thái', command: '/ak:worktree status', whenEn: 'You need worktree health, normalized paths, or base-branch divergence.', whenVi: 'Cần xem sức khỏe worktree, path chuẩn hóa hoặc độ lệch với base branch.', expectedEn: 'Reports normalized worktree records and current checkout health.' , expectedVi: 'Báo các record worktree đã chuẩn hóa và sức khỏe checkout hiện tại.' },
    { labelEn: 'Clean stale metadata', labelVi: 'Dọn metadata stale', command: '/ak:worktree prune', whenEn: 'Worktree metadata may be stale after manual branch or directory cleanup.', whenVi: 'Metadata worktree có thể cũ sau khi dọn branch hoặc thư mục bằng tay.', expectedEn: 'Audits stale entries and cleans them through the documented prune command.', expectedVi: 'Audit entry stale và dọn qua lệnh prune đã được tài liệu hóa.' },
  ],
};

export default data;

import type { Language } from '@/i18n';

const noteText = {
  '--kit': ['Choose engineer, marketing, or all kit content.', 'Chọn bộ engineer, marketing, hoặc all.'],
  '--yes': ['Skip confirmation prompts for scripted runs.', 'Bỏ qua xác nhận khi chạy tự động.'],
  '--global': ['Apply to the user-level ClaudeKit install.', 'Áp dụng cho cài đặt ClaudeKit cấp user.'],
  '--fresh': ['Reinstall cleanly instead of merging existing files.', 'Cài lại sạch thay vì merge file hiện có.'],
  '--install-skills': ['Install bundled skills during setup.', 'Cài kèm các skills trong lúc setup.'],
  '--beta': ['Use beta channel content or release.', 'Dùng nội dung hoặc release beta.'],
  '--sync': ['Sync local ClaudeKit files with the selected kit.', 'Đồng bộ file ClaudeKit local với kit đã chọn.'],
  '--use-git': ['Initialize the new project with Git metadata.', 'Khởi tạo project mới với Git metadata.'],
  '--check': ['Check available updates without applying them.', 'Kiểm tra update nhưng chưa áp dụng.'],
  '--dev': ['Use development channel behavior where supported.', 'Dùng chế độ dev nếu command hỗ trợ.'],
  '--skip-packages': ['Skip optional package setup steps.', 'Bỏ qua bước setup package tùy chọn.'],
  '--dir': ['Run setup against a specific directory.', 'Chạy setup trên một thư mục cụ thể.'],
  '--limit': ['Limit how many entries are returned.', 'Giới hạn số lượng entry được trả về.'],
  '--fix': ['Apply safe automatic repairs when possible.', 'Tự sửa các lỗi an toàn nếu có thể.'],
  '--report': ['Write a diagnostic report instead of only console output.', 'Tạo report chẩn đoán thay vì chỉ in ra terminal.'],
  '--check-only': ['Run checks only; do not repair issues.', 'Chỉ kiểm tra, không tự sửa lỗi.'],
  '--full': ['Run the most complete diagnostic pass.', 'Chạy lượt chẩn đoán đầy đủ nhất.'],
  '--json': ['Return machine-readable JSON output.', 'Trả output dạng JSON để máy đọc được.'],
  '--local': ['Apply to the current project install.', 'Áp dụng cho cài đặt trong project hiện tại.'],
  '--port': ['Choose the local dashboard server port.', 'Chọn port cho dashboard local.'],
  '--restore': ['Restore from an available backup.', 'Khôi phục từ backup có sẵn.'],
  '--prune': ['Remove old or unnecessary backups.', 'Xóa backup cũ hoặc không cần thiết.'],
  '--dry-run': ['Preview changes without writing them.', 'Xem trước thay đổi, không ghi file.'],
  '--all': ['Target every supported item in that command scope.', 'Áp dụng cho toàn bộ item trong phạm vi command.'],
  '--agent': ['Choose destination provider or coding agent.', 'Chọn provider hoặc coding agent đích.'],
  '--name': ['Select one skill, agent, or command by name.', 'Chọn một skill, agent, hoặc command theo tên.'],
  '--list': ['List available or installed items.', 'Liệt kê item có sẵn hoặc đã cài.'],
  '--uninstall': ['Remove installed content from the target.', 'Gỡ nội dung đã cài khỏi target.'],
  '--search': ['Filter catalog results by query text.', 'Lọc catalog theo từ khóa tìm kiếm.'],
  '--catalog': ['Read from the bundled ClaudeKit catalog.', 'Đọc từ catalog ClaudeKit đi kèm.'],
  '--installed': ['Show only installed items.', 'Chỉ hiển thị item đã cài.'],
  '--install': ['Install migrated content on the target provider.', 'Cài nội dung đã migrate vào provider đích.'],
  '--reconcile': ['Compare source and target before changing files.', 'So sánh source và target trước khi sửa file.'],
  '--only-*': ['Limit migration to specific content families.', 'Giới hạn migrate theo nhóm nội dung cụ thể.'],
  '--skip-*': ['Exclude specific content families from migration.', 'Bỏ qua nhóm nội dung cụ thể khi migrate.'],
  '--strict': ['Fail validation on warnings instead of tolerating them.', 'Fail validation khi có warning.'],
  '--title': ['Set the generated plan title.', 'Đặt title cho plan được tạo.'],
  '--phases': ['Set generated plan phase count or names.', 'Đặt số lượng hoặc tên phase của plan.'],
  '--force': ['Bypass soft safeguards where the command allows it.', 'Bỏ qua guard mềm nếu command cho phép.'],
  '--tail': ['Follow live logs instead of printing once.', 'Theo dõi log live thay vì in một lần.'],
  '--verbose': ['Print more detailed runtime output.', 'In output chi tiết hơn khi chạy.'],
  '--method': ['Choose API HTTP method.', 'Chọn HTTP method cho API.'],
  '--locale': ['Choose response language or locale.', 'Chọn ngôn ngữ hoặc locale cho response.'],
  '--format': ['Choose output format.', 'Chọn định dạng output.'],
  '--interval': ['Set polling interval for watchers.', 'Đặt chu kỳ polling cho watcher.'],
  ui: ['Open the interactive configuration dashboard.', 'Mở dashboard cấu hình tương tác.'],
  get: ['Read one config value.', 'Đọc một giá trị config.'],
  set: ['Update one config value.', 'Cập nhật một giá trị config.'],
  show: ['Print the current config snapshot.', 'In snapshot config hiện tại.'],
  list: ['Show saved entries.', 'Hiển thị danh sách đã lưu.'],
  add: ['Register a new entry.', 'Thêm entry mới.'],
  remove: ['Delete an existing entry.', 'Xóa entry hiện có.'],
  pin: ['Mark an entry as preferred.', 'Đánh dấu entry ưu tiên.'],
  parse: ['Read plan files and extract tasks.', 'Đọc plan file và trích xuất task.'],
  validate: ['Check plan structure before execution.', 'Kiểm tra cấu trúc plan trước khi chạy.'],
  status: ['Show current runtime or plan state.', 'Hiển thị trạng thái runtime hoặc plan hiện tại.'],
  kanban: ['Open the visual plan board.', 'Mở bảng plan dạng kanban.'],
  create: ['Create a new plan from CLI input.', 'Tạo plan mới từ input CLI.'],
  check: ['Mark a plan task as complete.', 'Đánh dấu task trong plan là hoàn tất.'],
  uncheck: ['Mark a plan task as incomplete.', 'Đánh dấu task trong plan là chưa hoàn tất.'],
  'add-phase': ['Add another phase to a plan.', 'Thêm phase mới vào plan.'],
  start: ['Start the automation service.', 'Khởi động service automation.'],
  stop: ['Stop the running service.', 'Dừng service đang chạy.'],
  logs: ['Read recent runtime logs.', 'Đọc log runtime gần đây.'],
  setup: ['Prepare required config for this subsystem.', 'Chuẩn bị config cần thiết cho subsystem này.'],
  queue: ['Inspect pending content jobs.', 'Xem các content jobs đang chờ.'],
  approve: ['Approve queued content for publishing.', 'Duyệt content đang chờ để publish.'],
  reject: ['Reject queued content before publishing.', 'Từ chối content đang chờ trước khi publish.'],
  services: ['List API-backed services.', 'Liệt kê services có API hỗ trợ.'],
  vidcap: ['Use video capture or video summary features.', 'Dùng tính năng video capture hoặc video summary.'],
  reviewweb: ['Run web review helpers through the API.', 'Chạy helper review web qua API.'],
  proxy: ['Use the configured proxy service.', 'Dùng proxy service đã cấu hình.'],
  '--release': ['Use a specific version instead of interactive selection.', 'Dùng version cụ thể thay vì chọn tương tác.'],
  '--skip-setup': ['Skip the interactive configuration wizard.', 'Bỏ qua wizard cấu hình tương tác.'],
  '--host': ['Bind dashboard to a specific host address.', 'Bind dashboard vào địa chỉ host cụ thể.'],
  '--no-open': ['Do not auto-open browser when launching dashboard.', 'Không tự mở browser khi khởi động dashboard.'],
  '--alias': ['Set a custom alias for the project entry.', 'Đặt alias tùy chỉnh cho project entry.'],
  '--pinned': ['Pin this project for quick access.', 'Ghim project để truy cập nhanh.'],
  '--tags': ['Assign comma-separated tags to the entry.', 'Gắn tags phân cách bằng dấu phẩy.'],
  '--keep': ['Keep the newest N backups when pruning.', 'Giữ lại N backup mới nhất khi prune.'],
  '--force-overwrite': ['Delete even user-modified managed files.', 'Xóa cả file managed đã bị user chỉnh sửa.'],
  '--validate': ['Validate skill frontmatter fields.', 'Kiểm tra frontmatter trong SKILL.md.'],
  '--config': ['Migrate CLAUDE.md config only.', 'Chỉ migrate config CLAUDE.md.'],
  '--rules': ['Migrate .claude/rules only.', 'Chỉ migrate .claude/rules.'],
  '--hooks': ['Migrate .claude/hooks only.', 'Chỉ migrate .claude/hooks.'],
  '--respect-deletions': ['Preserve deletions — skip auto-reinstall heuristic.', 'Giữ trạng thái đã xóa — bỏ qua auto-reinstall.'],
  '--reason': ['Provide a reason for the rejection.', 'Đưa ra lý do từ chối.'],
  restore: ['Restore a specific backup to its original location.', 'Khôi phục backup cụ thể về vị trí ban đầu.'],
  prune: ['Delete old or unnecessary backups.', 'Xóa backup cũ hoặc không cần thiết.'],
} as const;

const getNoteKey = (raw: string) => {
  const longFlag = raw.match(/--[\w-*]+/)?.[0];
  return longFlag || raw.split(/\s+/)[0];
};

const getNoteDescription = (key: string, lang: Language) => {
  const fallback = lang === 'vi' ? 'Tùy chọn quan trọng của command này.' : 'Important option for this command.';
  const note = noteText[key as keyof typeof noteText];
  return note ? note[lang === 'vi' ? 1 : 0] : fallback;
};

const commandFlagScopes: Record<string, Record<string, string>> = {
  'ck backups': {
    '--limit': 'list',
    '--keep': 'prune',
    '--all': 'prune',
    '--yes': 'restore, prune',
  },
  'ck content': {
    '--tail': 'logs',
    '--reason': 'reject',
    '--force': 'start',
  },
  'ck config': {
    '--port': 'ui',
    '--host': 'ui',
    '--no-open': 'ui',
    '--dev': 'ui',
  },
  'ck projects': {
    '--alias': 'add',
    '--pinned': 'list, add',
    '--tags': 'add',
  },
  'ck plan': {
    '--strict': 'validate',
    '--title': 'create',
    '--phases': 'create',
  },
  'ck api': {
    '--method': 'proxy',
  },
};

const commandFlagOverrides: Record<string, Record<string, [string, string]>> = {
  'ck versions': {
    '--all': ['Include prereleases alongside stable versions.', 'Bao gồm cả bản prerelease cùng bản stable.'],
  },
  'ck backups': {
    '--all': ['Delete all recovery backups.', 'Xoá toàn bộ recovery backups.'],
  },
};

export const getCliCommandNotes = (items: string[], lang: Language, cmdName?: string) =>
  items.map((item) => {
    const key = getNoteKey(item);
    const override = cmdName ? commandFlagOverrides[cmdName]?.[key] : undefined;
    const description = override ? override[lang === 'vi' ? 1 : 0] : getNoteDescription(key, lang);
    const scope = cmdName ? commandFlagScopes[cmdName]?.[key] : undefined;
    return { label: item, description, scope };
  });

const commandNotes: Record<string, [string, string][]> = {
  'ck versions': [
    ['Lists stable releases by default. Use <code>--all</code> to include prereleases.', 'Mặc định chỉ liệt kê bản stable. Dùng <code>--all</code> để bao gồm cả bản prerelease.'],
  ],
  'ck update': [
    ['<code>--beta</code> is deprecated — use <code>-d, --dev</code> instead.', '<code>--beta</code> đã deprecated — dùng <code>-d, --dev</code> thay thế.'],
    ['Updates CLI only. Use <code>ck init</code> to update kit content.', 'Chỉ update CLI. Dùng <code>ck init</code> để update nội dung kit.'],
  ],
  'ck config': [
    ['Bare <code>ck config</code> opens dashboard (= <code>ck config ui</code>).', '<code>ck config</code> không argument sẽ mở dashboard (= <code>ck config ui</code>).'],
  ],
  'ck migrate': [
    ['<code>--install</code> and <code>--reconcile</code> are mutually exclusive.', '<code>--install</code> và <code>--reconcile</code> loại trừ lẫn nhau.'],
    ['Codex commands migrate as skills under <code>.agents/skills/</code>.', 'Codex commands migrate thành skills trong <code>.agents/skills/</code>.'],
  ],
  'ck backups': [
    ['Covers CK-managed files only — not the full <code>~/.claude/</code> directory.', 'Chỉ chứa file do CK quản lý — không phải toàn bộ <code>~/.claude/</code>.'],
  ],
  'ck content': [
    ['<code>approve</code> and <code>reject</code> require a content item <code>&lt;id&gt;</code>.', '<code>approve</code> và <code>reject</code> cần <code>&lt;id&gt;</code> của content item.'],
  ],
  'ck uninstall': [
    ['Preserves user-modified files by default. Use <code>--force-overwrite</code> to override.', 'Mặc định giữ lại file user đã chỉnh sửa. Dùng <code>--force-overwrite</code> để ghi đè.'],
  ],
};

export const getCommandNotes = (cmdName: string, lang: Language): string[] => {
  const notes = commandNotes[cmdName];
  if (!notes) return [];
  return notes.map((n) => n[lang === 'vi' ? 1 : 0]);
};

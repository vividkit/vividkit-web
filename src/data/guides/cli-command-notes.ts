import type { Language } from '@/i18n';

const NOTE_TEXT: Record<string, [string, string]> = {
  '--license-key': ['Activate the Desktop App on this device. Does not open a CLI session.', 'Kích hoạt Desktop App trên thiết bị này. Không mở CLI session.'],
  '--email': ['Open a CLI session with an email OTP (recommended locally).', 'Mở CLI session bằng email OTP (khuyên dùng trên máy local).'],
  '--api-key': ['Open a CLI session with a user API key (recommended for CI).', 'Mở CLI session bằng user API key (khuyên dùng cho CI).'],
  '--no-interactive': ['Disable prompts for CI-safe execution.', 'Tắt prompt để chạy an toàn trong CI.'],
  '--check': ['Inspect without applying a change.', 'Chỉ kiểm tra, không áp dụng thay đổi.'],
  '--json': ['Emit machine-readable output.', 'Xuất dữ liệu dạng máy đọc được.'],
  '--dry-run': ['Preview changes without writing files.', 'Xem trước thay đổi mà không ghi file.'],
  '--channel': ['Select stable or beta explicitly.', 'Chọn rõ stable hoặc beta.'],
  '--yes': ['Apply after review; do not use before checking the preview.', 'Áp dụng sau khi review; không dùng trước khi xem preview.'],
  '--show-diff': ['Show the exact file diff before update.', 'Hiển thị diff file chính xác trước khi update.'],
  '--force': ['Overwrite user-modified managed files after a snapshot.', 'Ghi đè file managed đã chỉnh sửa sau khi tạo snapshot.'],
  '--target': ['Select the target coding agent.', 'Chọn coding agent đích.'],
  '--global': ['Install for the current user across projects.', 'Cài cho user hiện tại trên mọi project.'],
  '--skills': ['Install only the listed skill IDs.', 'Chỉ cài các skill ID được liệt kê.'],
  '--exclude-skills': ['Skip the listed skill IDs.', 'Bỏ qua các skill ID được liệt kê.'],
  init: ['Build or install a kit for a target agent.', 'Build hoặc cài kit cho target agent.'],
  install: ['Install kit content at project or user scope.', 'Cài nội dung kit ở project scope hoặc user scope.'],
  'list-kits': ['List available kits.', 'Liệt kê các kit hiện có.'],
  refresh: ['Refresh an installed kit and remove stale generated files.', 'Refresh kit đã cài và loại bỏ generated files cũ.'],
  validate: ['Validate local kit schemas.', 'Validate schema của kit local.'],
  uninstall: ['Preview kit removal before applying it.', 'Xem trước việc gỡ kit trước khi áp dụng.'],
  create: ['Create a new plan directory.', 'Tạo thư mục plan mới.'],
  'add-phase': ['Append a phase to an existing plan.', 'Thêm phase vào plan hiện có.'],
  status: ['Show plan completion and dependency state.', 'Hiển thị tiến độ và dependency của plan.'],
  check: ['Mark a phase complete.', 'Đánh dấu phase hoàn tất.'],
  uncheck: ['Return a phase to incomplete.', 'Đưa phase về trạng thái chưa hoàn tất.'],
};

const getNoteKey = (raw: string): string => raw.match(/--[\w-]+/)?.[0] ?? raw.split(/\s+/)[0];

export const getCliCommandNotes = (items: string[], lang: Language) => items.map((item) => {
  const note = NOTE_TEXT[getNoteKey(item)];
  return {
    label: item,
    description: note?.[lang === 'vi' ? 1 : 0] ?? (lang === 'vi' ? 'Tùy chọn của lệnh này.' : 'Command option.'),
  };
});

const COMMAND_NOTES: Record<string, [string, string][]> = {
  'ak self-update': [['Updates the CLI binary; it does not refresh project files or installed kits.', 'Cập nhật CLI binary; không refresh project files hoặc kit đã cài.']],
  'ak update': [['Preview first. Applying creates a snapshot and skips user-modified files unless force is explicit.', 'Hãy preview trước. Khi áp dụng, AgentKit tạo snapshot và bỏ qua file user đã sửa trừ khi dùng force.']],
  'ak kit': [['Kit lifecycle is separate from the CLI binary and project update lifecycle.', 'Vòng đời kit tách biệt với CLI binary và project update.']],
  'ak uninstall': [['Keep dry-run enabled until the removal list has been reviewed.', 'Giữ dry-run cho đến khi đã review danh sách file sẽ gỡ.']],
};

export const getCommandNotes = (command: string, lang: Language): string[] =>
  (COMMAND_NOTES[command] ?? []).map((note) => note[lang === 'vi' ? 1 : 0]);

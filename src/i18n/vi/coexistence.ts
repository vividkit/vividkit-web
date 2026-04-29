// VI translations - coexistence namespace
// Style note: keep raw English for awkward technical terms (per project memory).
export const coexistence = {
  // Hero
  'coexistence.hero.title': 'ClaudeKit có làm hỏng setup Claude Code hiện tại của tôi không?',
  'coexistence.hero.tldr':
    'Trả lời ngắn: **không, mặc định không.** ClaudeKit cài vào `./.claude/` của project hiện tại, preserve project config đã có, và merge chọn lọc `settings.json`. Command cần cẩn thận là `ck init --fresh`.',
  'coexistence.hero.q1.title': 'Có đụng global config của tôi không?',
  'coexistence.hero.q1.body': 'Không, trừ khi thêm `--global`. Kit content mặc định cài trong project này.',
  'coexistence.hero.q2.title': 'Có overwrite CLAUDE.md không?',
  'coexistence.hero.q2.body': 'Không trong update thường nếu file đã tồn tại. `CLAUDE.md` được xem là user config và bị skip.',
  'coexistence.hero.q3.title': 'Custom skills của tôi sao?',
  'coexistence.hero.q3.body': 'Còn nguyên với install thường. `--fresh` có thể xóa file CK-tracked hoặc folder kit legacy.',
  'coexistence.hero.q4.title': 'Project đã có .claude/ thì sao?',
  'coexistence.hero.q4.body': '`ck init` thường scan `.claude/` trong project, protect custom files, và merge `.claude/settings.json`.',

  // Section A — Install scope (two-card layout)
  'coexistence.installScope.heading': 'Sau khi cài, ClaudeKit ở đâu?',
  'coexistence.installScope.intro':
    'Mặc định, ClaudeKit chỉ cài vào project bạn đang mở. Nó không thay đổi cài đặt Claude Code dùng chung trên máy bạn.',
  'coexistence.installScope.project.title': 'Project install (mặc định)',
  'coexistence.installScope.project.tag': 'Khuyên dùng',
  'coexistence.installScope.project.command': 'ck init',
  'coexistence.installScope.project.location': 'Ở: ./.claude/ (chỉ folder này)',
  'coexistence.installScope.project.point1': 'Ghi kit files vào `./.claude/` của *project này*',
  'coexistence.installScope.project.point2': '`CLAUDE.md` và user config đã có trong project được preserve',
  'coexistence.installScope.project.point3': '`./.claude/settings.json` đã có được merge chọn lọc',
  'coexistence.installScope.project.point4': '`~/.claude/` global của bạn không bị đụng',
  'coexistence.installScope.global.title': 'Global install (opt-in)',
  'coexistence.installScope.global.tag': 'Chỉ khi bạn yêu cầu',
  'coexistence.installScope.global.command': 'ck init --global',
  'coexistence.installScope.global.location': 'Ở: ~/.claude/ (home của bạn)',
  'coexistence.installScope.global.point1': 'Dùng `~/.claude/` mặc định, hoặc `CLAUDE_CONFIG_DIR` nếu có set',
  'coexistence.installScope.global.point2': 'Global `settings.json` được merge chọn lọc; `CLAUDE.md` đã có được preserve',
  'coexistence.installScope.global.point3': 'Ảnh hưởng mọi project bạn mở',
  'coexistence.installScope.notice.title': 'Claude đọc global và local CLAUDE.md thế nào?',
  'coexistence.installScope.notice.body':
    'Claude có thể load cả global và project `CLAUDE.md`. Các file này được nối vào context, không đơn giản là file sau thay file trước.',
  'coexistence.installScope.notice.link': 'Đọc Claude Mechanics',

  // Section B — Conflict resolution
  'coexistence.conflict.heading': 'ClaudeKit tránh clobber setup của bạn thế nào',
  'coexistence.conflict.intro':
    'Khi chạy `ck init` trong project đã có Claude Code config, ClaudeKit không bắt bạn chọn từng file một. Nó tự bảo vệ các file project config quan trọng, merge `settings.json`, và chỉ hỏi xác nhận nếu có file khác có nguy cơ bị ghi đè.',
  'coexistence.conflict.option.protectedConfig.label': 'Protected user config',
  'coexistence.conflict.option.protectedConfig.behavior': 'Các file đã có như `.gitignore`, `.mcp.json`, `.ck.json`, `.ckignore`, `.repomixignore`, và `CLAUDE.md` được preserve. File project-local trong `.claude/` nhưng không thuộc kit cũng được scan và protect.',
  'coexistence.conflict.option.protectedConfig.when': 'Default cho `ck init` và update thường.',
  'coexistence.conflict.option.settingsMerge.label': 'Selective settings merge',
  'coexistence.conflict.option.settingsMerge.behavior':
    '`settings.json` merge hooks và MCP servers, dedupe commands, preserve entries chỉ của user.',
  'coexistence.conflict.option.settingsMerge.when': 'Chỉ bị bỏ qua khi bật `--force-overwrite-settings`; `--fresh` tự bật flag đó.',
  'coexistence.conflict.option.conflictConfirm.label': 'Overwrite confirmation',
  'coexistence.conflict.option.conflictConfirm.behavior': 'Với file khác đã tồn tại, interactive mode liệt kê conflicts và hỏi có tiếp tục không.',
  'coexistence.conflict.option.conflictConfirm.when': '`--yes`, CI, hoặc non-interactive sẽ skip prompt; protected files và `settings.json` vẫn theo rule riêng, còn conflicts khác có thể bị overwrite.',
  'coexistence.conflict.tracking.heading': 'ClaudeKit biết file nào do nó cài thế nào',
  'coexistence.conflict.tracking.body':
    'ClaudeKit ghi file đã cài vào `metadata.json` và track riêng hooks/MCP servers đã inject. Metadata này dùng cho selective update, uninstall, và phân tích `--fresh`.',
  'coexistence.conflict.example.heading': 'Ví dụ: tracked files và merged settings',
  'coexistence.conflict.example.yours': 'User-owned — preserve',
  'coexistence.conflict.example.ck': 'ClaudeKit-tracked — refresh được',

  // Section C — Fresh warning
  'coexistence.fresh.heading': 'Command nên backup trước khi chạy',
  'coexistence.fresh.intro':
    '`ck init --fresh` là full reset. Khi có `metadata.json` hiện tại, nó xóa file ClaudeKit-owned và ClaudeKit-modified, đồng thời preserve tracked user-created files. Nếu không có metadata dùng được, nó fallback sang xóa các kit folders: `commands/`, `agents/`, `skills/`, `rules/`, `hooks/`. Không có auto-backup.',
  'coexistence.fresh.dangerCard.title': 'Cái gì có thể bị xóa',
  'coexistence.fresh.dangerCard.body': 'Install legacy hoặc thiếu metadata có thể mất mọi thứ trong các folder này. Install hiện tại có tracking sẽ xóa CK-owned/modified files trong đó.',
  'coexistence.fresh.dangerCard.folders': 'commands/ · agents/ · skills/ · rules/ · hooks/',
  'coexistence.fresh.dangerCard.note': 'Flag `-y` không làm `--fresh` an toàn hơn; cứ xem nó là destructive cho tới khi đã backup.',
  'coexistence.fresh.safe.heading': 'Cách dùng `--fresh` an toàn',
  'coexistence.fresh.safe.step1.title': 'Backup trước',
  'coexistence.fresh.safe.step1.body': 'Copy folder `.claude/` sang folder timestamp. Mất 2 giây.',
  'coexistence.fresh.safe.step2.title': 'Chạy `--fresh` có ý thức',
  'coexistence.fresh.safe.step2.body': 'Bạn đã có safety net, nên file custom nào thiếu có thể restore thủ công.',
  'coexistence.fresh.safe.step3.title': 'Restore phần cần',
  'coexistence.fresh.safe.step3.body': 'Copy file custom từ backup ngược trở lại, từng folder một.',
  'coexistence.fresh.tip':
    'Chỉ cần refresh kit content? Dùng `ck init --yes`. Chỉ dùng `ck update -y` khi muốn update CLI package; sau đó ClaudeKit có thể tự refresh kit content cho project/global đã cài, và sẽ bỏ qua nếu content đã latest.',

  // Section D — Migrate
  'coexistence.migrate.heading': 'Đang chuyển sang agentic IDE khác?',
  'coexistence.migrate.intro':
    '`ck migrate` reconcile agents, commands, skills, config, rules, và hooks từ Claude Code sang target providers như Codex, Cursor, Gemini CLI, OpenCode, v.v. File nguồn Claude Code vẫn nằm nguyên.',
  'coexistence.migrate.notMigrate': 'Không phải cái bạn cần? `ck migrate` để **đổi tool**, không phải upgrade version.',
  'coexistence.migrate.col.provider': 'Tool',
  'coexistence.migrate.col.target': 'Sẽ ở đâu',

  // Section E — Recipes
  'coexistence.recipes.heading': 'Recipes: Bring Your Own Workflow',
  'coexistence.recipes.intro': 'Ba recipe cụ thể để sống chung custom setup + ClaudeKit.',
  'coexistence.recipe.customStatusline.title': 'Giữ global Claude Code setup không bị đụng',
  'coexistence.recipe.customStatusline.desc':
    'Chạy `ck init` (không `--global`). Project install chỉ ghi vào `./.claude/`, nên global Claude Code files trong `~/.claude/` không nằm trong scope.',
  'coexistence.recipe.customHookMerge.title': 'Merge custom hooks qua selective settings merge',
  'coexistence.recipe.customHookMerge.desc':
    '`settings.json` được merge chọn lọc mặc định. ClaudeKit thêm hoặc refresh tracked hooks, còn user-only hook entries được preserve.',
  'coexistence.recipe.manualBackup.title': 'Manual backup trước `--fresh`',
  'coexistence.recipe.manualBackup.desc':
    'Luôn snapshot trước destructive ops. Restore từ folder timestamp nếu thiếu file sau đó.',

  // FAQ
  'coexistence.faq.heading': 'FAQ',
  'coexistence.faq.q1': 'ClaudeKit có overwrite CLAUDE.md của tôi không?',
  'coexistence.faq.a1':
    '`ck init` thường preserve `CLAUDE.md` đã có vì file này nằm trong user config. Global mode có thể copy `~/.claude/CLAUDE.md` khi chưa có; với `--fresh`, global `CLAUDE.md` có thể bị replace.',
  'coexistence.faq.q2': 'Custom commands và skills của tôi sao?',
  'coexistence.faq.a2':
    '`ck init` thường scan custom `.claude` files và protect chúng. Ngoại lệ là `--fresh`: nó xóa CK-owned/modified files, và install legacy thiếu metadata sẽ fallback sang xóa component directories.',
  'coexistence.faq.q3': 'Uninstall ClaudeKit thế nào?',
  'coexistence.faq.a3':
    'Dùng `ck uninstall`. Command này hỗ trợ `--local`, `--global`, `--all`, `--dry-run`, `--yes`, và mặc định preserve user-created hoặc modified files. Chỉ dùng `--force-overwrite` khi thật sự muốn full removal.',
  'coexistence.faq.q4': 'Update ClaudeKit an toàn thế nào?',
  'coexistence.faq.a4':
    '`ck init --yes` chỉ refresh kit content, không update CLI package. `ck update -y` update CLI package trước; sau đó có thể tự refresh kit content cho local/global install nếu content chưa latest. Tránh `--fresh` cho update thường.',
} as const;

// VI translations - "ClaudeKit x Codex CLI" guide namespace.
// Page route: /vi/guides/ck-with-codex
export const ck_with_codex = {
  // Hero
  'ckWithCodex.hero.eyebrow': 'Hướng dẫn ClaudeKit + Codex CLI',
  'ckWithCodex.hero.title': 'Workflow ClaudeKit trên Codex CLI',
  'ckWithCodex.hero.tldr':
    'Codex CLI là runtime terminal native của OpenAI. Dùng `ck migrate -a codex` để cài nội dung ClaudeKit vào các vị trí Codex-native, sau đó khởi chạy qua CCS bằng `ccsx`, `ccsx codex`, hoặc `ccsxp` — tất cả mà không cần ghi đè vĩnh viễn config provider của Codex.',

  // Why CCS
  'ckWithCodex.why.heading': 'Vì sao vẫn cần CCS?',
  'ckWithCodex.why.intro':
    'Codex CLI thuần là đủ cho một tài khoản local đơn lẻ. Thêm CCS khi bạn muốn Codex kèm routing tài khoản dùng chung, kiểm tra quota trực tiếp, và một dashboard duy nhất cho lớp runtime.',
  'ckWithCodex.why.reasons.rotation.title': 'Routing tài khoản theo quota',
  'ckWithCodex.why.reasons.rotation.body':
    'Với session Codex routing qua CCS, CLIProxy quản lý rotation runtime. CCS cung cấp các nút điều khiển: `routing set`, `pause`, `resume`, và `default` để bỏ qua tài khoản đã hết quota hoặc đang tạm dừng.',
  'ckWithCodex.why.reasons.quota.title': 'Theo dõi quota Codex trực tiếp',
  'ckWithCodex.why.reasons.quota.body':
    '`ccs cliproxy quota --provider codex` lấy về cửa sổ quota Codex live cho các tài khoản đã xác thực, bao gồm cửa sổ năm tiếng và hàng tuần khi upstream cung cấp.',
  'ckWithCodex.why.reasons.analytics.title': 'Analytics runtime tập trung',
  'ckWithCodex.why.reasons.analytics.body':
    '`ccs config` mở dashboard với thống kê CLIProxy: tổng số request, đếm thành công/thất bại, phân bố model, và tổng token chia thành input và output.',
  'ckWithCodex.why.reasons.control.title': 'Một nơi quản lý cây cầu',
  'ckWithCodex.why.reasons.control.body':
    'Dùng cùng dashboard để quản lý provider, tài khoản OAuth, trạng thái routing, analytics, và cài đặt runtime tương thích Codex thay vì phải sửa các file rải rác.',
  'ckWithCodex.why.caveat':
    'Quan trọng: CCS không tự sinh ra thêm quota. Rotation chỉ hữu ích khi bạn có nhiều tài khoản đủ điều kiện hoặc project với pool quota độc lập — ví dụ, nhiều **tài khoản subscription OpenAI ChatGPT**, mỗi tài khoản có cửa sổ usage Codex riêng. Nếu các tài khoản dùng chung pool quota upstream, failover vẫn sẽ chạm cùng một giới hạn.',
  'ckWithCodex.why.cta.title': 'Lần đầu nghe đến CCS?',
  'ckWithCodex.why.cta.body':
    'Phần cài đặt Codex có hướng dẫn từng bước ngay bên dưới. Muốn tìm hiểu kỹ hơn về CCS — provider, tài khoản OAuth, routing, và dashboard — ghé qua trang hướng dẫn CCS đầy đủ.',
  'ckWithCodex.why.cta.link': 'Xem hướng dẫn CCS',

  // Architecture
  'ckWithCodex.arch.heading': 'Các mảnh ghép khớp với nhau ra sao',
  'ckWithCodex.arch.intro':
    '**Hai nhiệm vụ, không chồng chéo.** `ck migrate -a codex` đọc source ClaudeKit và ghi file Codex-native vào vị trí tương ứng. CCS chỉ khởi chạy Codex với target runtime đúng và override provider tạm thời.<br/><br/>**`-g` scope fix (v4.2.0+):** `-g` hiện đọc SOURCE đúng từ global scope. Trên bản cũ hơn 4.2.0, SOURCE vẫn đọc CWD dù có `-g` — nếu bạn còn dùng pre-4.2.0, `cd ~` trước.',
  'ckWithCodex.arch.lane1.title': 'Project nguồn (./.claude/)',
  'ckWithCodex.arch.lane1.desc': '`ck migrate` tìm file source từ repo hiện tại trước, sau đó fallback về `~/.claude/*` khi loại source thiếu ở local.',
  'ckWithCodex.arch.lane2.title': 'File CK Codex global',
  'ckWithCodex.arch.lane2.desc': 'Với `-g`: ghi `~/.codex/{agents,hooks}` + `~/.agents/skills/` + `~/.codex/AGENTS.md`. Commands được lưu dưới dạng skill `source-command-*`, không phải `~/.codex/prompts/*`.<br/><span class="text-slate-500 dark:text-slate-500">Bỏ `-g` để dùng các phiên bản project-local dưới `.codex/*` và `.agents/skills/*`.</span>',
  'ckWithCodex.arch.lane3.title': 'CLIProxyAPI :8317',
  'ckWithCodex.arch.lane3.desc': 'Proxy HTTP local nhúng trong CCS Runtime.<ul class="list-disc pl-5 mt-2 space-y-1"><li>`ccsx codex` <span class="text-slate-500 dark:text-slate-500">→ qua CCS Runtime, CLIProxy ngầm bên dưới, không cần config thêm</span></li><li>`ccsxp` <span class="text-slate-500 dark:text-slate-500">→ trực tiếp CLIProxy; qua CCS set `CLIPROXY_API_KEY=ccs-internal-managed`, hoặc truyền key riêng nếu tự host</span></li></ul><span class="block mt-2 text-slate-500 dark:text-slate-500">Bỏ qua trong chế độ native auth thuần.</span>',
  'ckWithCodex.arch.lane4.title': 'Runtime Codex CLI',
  'ckWithCodex.arch.lane4.desc': 'Cùng binary `codex` của OpenAI, nhưng được CCS khởi chạy nên kế thừa routing provider và config OAuth — gọi `codex` trực tiếp sẽ bypass CCS. Các entrypoint phổ biến:<ul class="list-disc pl-5 mt-2 space-y-1"><li>`ccsx` <span class="text-slate-500 dark:text-slate-500">(subscription GPT OAuth native)</span></li><li>`ccsx codex` <span class="text-slate-500 dark:text-slate-500">(CCS Runtime + CLIProxy)</span></li><li>`ccsxp` <span class="text-slate-500 dark:text-slate-500">(shortcut CLIProxy trực tiếp)</span></li></ul>',

  // Prerequisites
  'ckWithCodex.prereq.heading': 'Trước khi bắt đầu',
  'ckWithCodex.prereq.intro': 'Bốn thành phần. CCS lo phần nối; bạn lo phần còn lại.',
  'ckWithCodex.prereq.node.title': 'Node.js 18+',
  'ckWithCodex.prereq.node.desc': 'Cần cho cả `ck` và `ccs`. Dùng `nvm` nếu bạn xoay nhiều phiên bản.',
  'ckWithCodex.prereq.codex.title': 'Binary Codex CLI',
  'ckWithCodex.prereq.codex.desc': 'Cài OpenAI Codex CLI theo docs upstream. Cần hỗ trợ flag `-c key=value`.',
  'ckWithCodex.prereq.ccs.title': 'CCS (Claude Code Switch)',
  'ckWithCodex.prereq.ccs.desc': 'Cài qua `npm install -g @kaitranntt/ccs`, sau đó chạy `ccs config`.',
  'ckWithCodex.prereq.ck.title': 'ClaudeKit (`ck`) CLI',
  'ckWithCodex.prereq.ck.desc': 'Provider cấp nội dung project. Chạy `ck init` trong repo bạn muốn có skills.',

  // Setup walkthrough
  'ckWithCodex.setup.heading': 'Setup trong năm phút',
  'ckWithCodex.setup.intro': 'Chạy setup máy một lần. Chạy `ck init` trong từng project, sau đó chạy `ck migrate -a codex` từ project mà bạn muốn copy nội dung ClaudeKit vào các vị trí Codex-native. Không có `-g`, ghi sẽ là project-local (`.codex/*`, `.agents/skills/*`); thêm `-g` để ghi global (`~/.codex/*`, `~/.agents/skills/*`).<br/><br/>**Lưu ý phiên bản:** hướng dẫn này theo `claudekit-cli` `v4.2.0+`. Chạy `ck update -y` để cập nhật.',

  'ckWithCodex.setup.step1.title': 'Cài CCS và ClaudeKit',
  'ckWithCodex.setup.step1.badge': 'một lần',
  'ckWithCodex.setup.step1.desc': 'Đã cài rồi? Cập nhật bằng `ccs update` và `ck update -y`. CCS lo routing; ClaudeKit ship skills và file tương thích prompt cũ.',
  'ckWithCodex.setup.step1.code': 'npm install -g @kaitranntt/ccs\nnpm install -g claudekit-cli',
  'ckWithCodex.setup.step1.hint.label': 'kiểm tra',
  'ckWithCodex.setup.step1.hint.body': '`ccs --version` · `ck --version`',

  'ckWithCodex.setup.step2.title': 'Xác thực Codex qua CCS',
  'ckWithCodex.setup.step2.badge': 'oauth',
  'ckWithCodex.setup.step2.desc': 'Hai cách để nối một hoặc nhiều tài khoản Codex OAuth vào CLIProxyAPI. Chọn cách hợp với workflow của bạn — cả hai đều dẫn về cùng OAuth flow.',
  'ckWithCodex.setup.step2.optionA.label': 'Cách A · Dashboard',
  'ckWithCodex.setup.step2.optionA.title': 'Thêm qua dashboard CLIProxy',
  'ckWithCodex.setup.step2.optionA.body': 'Mở `ccs config` → click **CLIProxy** (`/cliproxy`) → chọn **Codex** → cuộn đến **Accounts** → **Add**. Picker model hiện ra; hoàn tất OAuth trên trình duyệt.',
  'ckWithCodex.setup.step2.optionA.code': 'ccs config\n# → CLIProxy → Codex → Accounts → Add',
  'ckWithCodex.setup.step2.optionB.label': 'Cách B · CLI',
  'ckWithCodex.setup.step2.optionB.title': 'Thêm qua prompt CLI một lần',
  'ckWithCodex.setup.step2.optionB.body': '`ccs codex --auth` báo bạn đã xác thực bao nhiêu tài khoản Codex và hỏi có thêm tài khoản nữa không. Nhấn `y` để mở OAuth flow trên trình duyệt (fallback paste-callback nếu headless).',
  'ckWithCodex.setup.step2.optionB.code': 'ccs codex --auth\n# [i] 1 account(s) already authenticated for Codex\n# [?] Add another account? (y/N): y',

  'ckWithCodex.setup.step3.title': 'Xác nhận cây cầu Codex hoạt động tốt',
  'ckWithCodex.setup.step3.badge': 'kiểm tra',
  'ckWithCodex.setup.step3.desc': 'Chạy `ccs doctor` và xem dòng `Codex Auth`. Thấy `[OK]  Authenticated (DD/MM/YYYY)` nghĩa là cây cầu đã nối xong và bạn có thể đi tiếp. Pipe qua `grep -i codex` để chỉ tập trung vào các dòng Codex.',
  'ckWithCodex.setup.step3.code': 'ccs doctor 2>&1 | grep -i codex\n# Codex Auth │ [OK] │ Authenticated (09/05/2026)',
  'ckWithCodex.setup.step3.hint.label': 'thành công',
  'ckWithCodex.setup.step3.hint.body': 'Dòng `Codex Auth` hiển thị `[OK] Authenticated`',

  'ckWithCodex.setup.step4.title': 'Khởi tạo ClaudeKit, sau đó migrate từ project đó',
  'ckWithCodex.setup.step4.badge': 'migrate',
  'ckWithCodex.setup.step4.desc': '`ck init` đặt layout source ClaudeKit. `ck migrate -a codex` sau đó copy nội dung đó vào các vị trí Codex-native.',
  'ckWithCodex.setup.step4.warning.label': 'quan trọng',
  'ckWithCodex.setup.step4.warning.title': '`-g` scope: đã fix trong v4.2.0+',
  'ckWithCodex.setup.step4.warning.tip': '**v4.2.0+:** `-g` đọc SOURCE đúng từ global scope.<br/>**Pre-4.2.0:** `-g` chỉ đổi destination — chạy `cd ~` trước để căn SOURCE.<br/>Luôn dùng `--dry-run` để xác minh.',
  'ckWithCodex.setup.step4.code': 'cd your-project\nck init',
  'ckWithCodex.setup.step4.init.label': 'init',
  'ckWithCodex.setup.step4.init.body': 'đặt layout source `.claude/*` trong CWD',
  'ckWithCodex.setup.step4.dryRun.label': 'preview',
  'ckWithCodex.setup.step4.dryRun.body': 'In SOURCE và DESTINATION mà không động vào disk. Xác nhận SOURCE đúng cái bạn muốn copy.',
  'ckWithCodex.setup.step4.dryRun.code': 'ck migrate -a codex --dry-run',
  'ckWithCodex.setup.step4.apply.label': 'apply',
  'ckWithCodex.setup.step4.apply.body': 'Ghi file Codex-native thật. Chỉ chạy sau khi `--dry-run` trông đúng.',
  'ckWithCodex.setup.step4.apply.code': 'ck migrate -a codex --yes',

  'ckWithCodex.setup.step5.title': 'Khởi chạy Codex với ClaudeKit sẵn sàng',
  'ckWithCodex.setup.step5.badge': 'launch',
  'ckWithCodex.setup.step5.desc': 'Cả hai entrypoint dưới đây đều mở Codex qua CCS. Chọn interactive cho việc `$ck:*`; chọn `exec` cho prompt một lần và script. Dùng `ccsx codex` khi bạn cụ thể muốn quota routing của CCS Runtime.',
  'ckWithCodex.setup.step5.interactive.label': 'interactive',
  'ckWithCodex.setup.step5.interactive.title': 'Session Codex nhiều lượt',
  'ckWithCodex.setup.step5.interactive.body': 'Mở REPL Codex native. Tốt nhất cho chuỗi `$ck:plan`, `$ck:cook`, và `$ck:review` khi bạn tiếp tục cùng một context.',
  'ckWithCodex.setup.step5.interactive.code': 'ccsx codex\n# alias for: ccs codex --target codex',
  'ckWithCodex.setup.step5.exec.label': 'non-interactive',
  'ckWithCodex.setup.step5.exec.title': 'Một lần qua `codex exec`',
  'ckWithCodex.setup.step5.exec.body': 'Stream một prompt non-interactive, in response, thoát. Dùng cho shell pipeline, hook CI, và sửa nhanh.',
  'ckWithCodex.setup.step5.exec.code': "ccsx codex exec 'draft a $ck:plan for the auth refactor'",

  // Launching (interactive mode + runtime aliases)
  'ckWithCodex.interactive.heading': 'Khởi chạy Codex với CCS',
  'ckWithCodex.interactive.intro':
    'CCS expose nhiều entrypoint runtime cho Codex CLI native. Nếu bạn bỏ qua phần text prompt, CCS sẽ mở session Codex interactive — tốt nhất cho việc `$ck:*` nhiều lượt vì bạn có thể xem plan, tinh chỉnh hướng dẫn, và tiếp tục trong cùng context Codex.',
  'ckWithCodex.interactive.prompt.title': 'Gọi workflow ClaudeKit bằng `$...`',
  'ckWithCodex.interactive.prompt.body':
    'Sau migration, Codex có thể dùng nội dung CK đã cài. Trong chế độ interactive, chạy một workflow tại một thời điểm và để Codex tiếp tục cùng session.',
  'ckWithCodex.interactive.ps.title': 'Prompts vs Skills trong Codex',
  'ckWithCodex.interactive.ps.intro':
    '`ck migrate -a codex` ghi các thư mục skill tái sử dụng và có thể vẫn ghi file prompt tương thích khi phát hiện commands. Coi output prompt là tương thích cũ, không phải bề mặt workflow chính của Codex.',
  'ckWithCodex.interactive.ps.prompt.label': 'file prompt',
  'ckWithCodex.interactive.ps.prompt.title': 'Không còn được ghi',
  'ckWithCodex.interactive.ps.prompt.body':
    'Trước đây ở `~/.codex/prompts/*.md`. OpenAI đã deprecate Codex custom prompts, và `claudekit-cli` cũng theo từ `v4.1.0` — commands giờ được migrate dưới dạng skill có scope. Đường dẫn prompts cũ không còn được ghi.',
  'ckWithCodex.interactive.ps.skill.label': 'thư mục skill',
  'ckWithCodex.interactive.ps.skill.title': 'Playbook workflow',
  'ckWithCodex.interactive.ps.skill.body':
    'Nằm ở `~/.agents/skills/skill-name/SKILL.md`. Skills mang theo các hướng dẫn sâu hơn, references, scripts, và rules mà Codex có thể load khi task khớp.',
  'ckWithCodex.interactive.ps.relationship':
    'Trong Codex CLI hiện tại, `$skill-name` là cách gọi nội dung ClaudeKit đã migrate — đó là bề mặt workflow. `/command-name` được dành riêng cho built-in của Codex CLI (vd. `/init`, `/compact`) và KHÔNG chạy commands CK đã migrate.',
  'ckWithCodex.interactive.ps.agentScope':
    'Agents Codex project và global độc lập với nhau — không merge hay override. Giữ định nghĩa repo-only trong `.codex/agents/agent-name.toml` và rules repo-only trong `AGENTS.md` của project để chúng đi cùng codebase, không đi theo máy của bạn.',

  // YOLO mode
  'ckWithCodex.interactive.yolo.title': 'Chế độ full quyền (`--yolo`)',
  'ckWithCodex.interactive.yolo.body':
    'Flag `--yolo` truyền `--dangerously-bypass-approvals-and-sandbox` cho binary Codex bên dưới. Hoạt động ở mọi entrypoint: `ccsx --yolo`, `ccsx codex --yolo`, `ccsxp --yolo`, hoặc trực tiếp `codex --yolo` mà không cần CCS. Codex tự duyệt mọi tool call — ghi file, chạy shell, cài package — giống hệt `--dangerously-skip-permissions` của Claude Code.',
  'ckWithCodex.interactive.yolo.warning':
    'Không có rào chắn. `--yolo` tắt mọi xác nhận. Codex có thể xóa file, chạy lệnh phá, và cài package mà không hỏi. Chỉ dùng trong môi trường bỏ được hoặc khi bạn tin tưởng scope prompt hoàn toàn.',

  // Aliases reference
  'ckWithCodex.aliases.heading': 'Giải mã các entrypoint runtime',
  'ckWithCodex.aliases.intro': 'CCS expose các target alias Codex native cộng với một shortcut cliproxy. Chọn dựa trên việc bạn muốn routing GPT OAuth thông thường, rotation quota của CCS Runtime, hay CLIProxy trực tiếp.',
  'ckWithCodex.aliases.col.command': 'Lệnh',
  'ckWithCodex.aliases.col.routes': 'Định tuyến qua',
  'ckWithCodex.aliases.col.useWhen': 'Dùng khi',
  'ckWithCodex.aliases.recommended': 'Khuyên dùng',
  'ckWithCodex.aliases.row1.routes': 'Target Codex native với routing GPT/Codex OAuth có sẵn',
  'ckWithCodex.aliases.row1.useWhen': 'Bạn muốn launcher Codex native ngắn nhất và một tài khoản GPT/Codex OAuth là đủ.',
  'ckWithCodex.aliases.row2.routes': 'Profile Codex built-in qua CCS Runtime + CLIProxy',
  'ckWithCodex.aliases.row2.useWhen': 'Bạn muốn rotation quota qua nhiều tài khoản GPT và theo dõi quota trực tiếp qua `ccs cliproxy quota --provider codex`.',
  'ckWithCodex.aliases.row4.routes': 'Override provider CLIProxy trực tiếp',
  'ckWithCodex.aliases.row4.useWhen': 'Bạn muốn đường đi mỏng hơn, bỏ qua CCS Runtime và nói thẳng với CLIProxy. Nếu đi qua CCS thì set `CLIPROXY_API_KEY=ccs-internal-managed`; nếu tự host CLIProxy riêng thì truyền key tùy ý vào `CLIPROXY_API_KEY`. Pin `CODEX_HOME` về `~/.codex` trừ khi đã set `CCSXP_CODEX_HOME`.',

  // Workflows
  'ckWithCodex.workflows.heading': 'Workflow chạy mượt trên Codex như trên Claude Code',
  'ckWithCodex.workflows.intro':
    'Các chuỗi ClaudeKit này hoạt động tốt nhất sau khi `ck migrate -a codex` đã cài skills, agents, rules, prompt cũ, và hooks tương thích Codex.',
  'ckWithCodex.workflows.flow1.label': 'Vòng build',
  'ckWithCodex.workflows.flow1.title': 'Plan → Cook → Test',
  'ckWithCodex.workflows.flow1.desc': 'Vòng build quen thuộc. `$ck:plan` lên design, `$ck:cook` code, `$ck:test` kiểm tra. Codex thường chạy nhanh ở bước cook.',
  'ckWithCodex.workflows.flow2.label': 'Vòng triage',
  'ckWithCodex.workflows.flow2.title': 'Fix → Test → Review',
  'ckWithCodex.workflows.flow2.desc': '`$ck:fix` triage một test hoặc log lỗi, sau đó `$ck:test` chạy lại và `$ck:review` audit diff trước khi commit.',
  'ckWithCodex.workflows.flow3.label': 'Điều tra',
  'ckWithCodex.workflows.flow3.title': 'Scout → Brainstorm → Plan',
  'ckWithCodex.workflows.flow3.desc': '`$ck:scout` khám phá file, `$ck:brainstorm` cân nhắc trade-off, `$ck:plan` chốt hướng đi. Điều tra thuần, không sửa code.',
  'ckWithCodex.workflows.outro.cmdsLabel': 'Tham khảo',
  'ckWithCodex.workflows.outro.cmdsTitle': 'Catalog command đầy đủ',
  'ckWithCodex.workflows.outro.cmdsBody': 'Mọi command `$ck:*`, làm gì, và khi nào nên dùng.',
  'ckWithCodex.workflows.outro.flowsLabel': 'Tham khảo',
  'ckWithCodex.workflows.outro.flowsTitle': 'Tất cả công thức workflow',
  'ckWithCodex.workflows.outro.flowsBody': 'Chuỗi dài hơn: ship, debug, retro, và nhiều hơn.',

  'ckWithCodex.aliases.footnote':
    '**Lưu ý:** `ccsx codex` và `ccsxp` inject `model_provider`, `base_url`, và `env_key` (lần lượt là `CCS_CODEX_API_KEY` và `CLIPROXY_API_KEY`) qua `-c` lúc khởi chạy — chỉ runtime. `ccsx` trần chạy native, không inject override provider nào. Editor dashboard ở `ccs config → Compatible → Codex CLI` hiển thị lớp user đã lưu, không phải các override này.',
} as const;

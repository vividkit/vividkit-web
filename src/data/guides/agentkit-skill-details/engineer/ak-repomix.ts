import type { SkillInfographic, SkillInvocation } from '@/data/guides/how-ck-works';

const invocation: SkillInvocation = {
  syntax: '/ak:repomix [path] [--style xml|markdown|plain|json]',
  arguments: [
    {
      token: '[path]',
      titleEn: 'Repository path',
      titleVi: 'Đường dẫn repo',
      descEn: 'Local repository or folder to pack. Omit it to package the active working directory; use remote options only when the source is not local.',
      descVi: 'Repo hoặc thư mục local cần đóng gói. Bỏ qua để pack working directory hiện hành; chỉ dùng tùy chọn remote khi nguồn không nằm local.',
      exampleCommand: '/ak:repomix packages/auth --style markdown',
          exampleCommandVi: '/ak:repomix packages/auth --style markdown',
    },
  ],
  options: [
    {
      token: '--style xml|markdown|plain|json',
      titleEn: 'Output style',
      titleVi: 'Kiểu đầu ra',
      descEn: 'Selects XML, Markdown, JSON, or plain text. It changes the bundle format, not the source files being included.',
      descVi: 'Chọn XML, Markdown, JSON hoặc plain text. Tùy chọn này đổi định dạng bundle, không đổi tập file nguồn được đưa vào.',
      exampleCommand: '/ak:repomix . --style markdown',
          exampleCommandVi: '/ak:repomix . --style markdown',
    },
    {
      token: '--include <patterns>',
      titleEn: 'Include patterns',
      titleVi: 'Pattern include',
      descEn: 'Narrows the pack to matching files or folders, such as source modules, docs, manifests, or one package in a monorepo.',
      descVi: 'Thu hẹp gói vào file hoặc thư mục khớp pattern, như module source, docs, manifest hoặc một package trong monorepo.',
      exampleCommand: '/ak:repomix . --include "src/**/*.ts,*.md"',
          exampleCommandVi: '/ak:repomix . --include "src/**/*.ts,*.md"',
    },
    {
      token: '-i <patterns>',
      titleEn: 'Extra ignores',
      titleVi: 'Bỏ qua bổ sung',
      descEn: 'Adds ignore patterns for noisy, generated, or sensitive paths. It should not be used to hide unresolved security warnings.',
      descVi: 'Thêm pattern bỏ qua cho path nhiễu, sinh tự động hoặc nhạy cảm. Không dùng để che cảnh báo bảo mật chưa xử lý.',
      exampleCommand: '/ak:repomix . -i "tests/**,*.test.js"',
          exampleCommandVi: '/ak:repomix . -i "tests/**,*.test.js"',
    },
    {
      token: '-o <file>',
      titleEn: 'Output file',
      titleVi: 'File đầu ra',
      descEn: 'Writes the generated bundle to an explicit file instead of the default repomix-output.xml in the working directory.',
      descVi: 'Ghi bundle đã tạo vào file rõ ràng thay vì mặc định repomix-output.xml trong working directory.',
      exampleCommand: '/ak:repomix src -o artifacts/src-context.md --style markdown',
          exampleCommandVi: '/ak:repomix src -o artifacts/src-context.md --style markdown',
    },
    {
      token: '--remote <repo-or-url>',
      titleEn: 'Remote repository',
      titleVi: 'Repo remote',
      descEn: 'Packages a public repository shorthand, URL, or commit through Repomix remote processing. Use an authorized local clone for private code.',
      descVi: 'Đóng gói repository public dạng shorthand, URL hoặc commit qua xử lý remote của Repomix. Với code private, dùng clone local đã được cấp quyền.',
      exampleCommand: '/ak:repomix --remote yamadashy/repomix --style xml',
          exampleCommandVi: '/ak:repomix --remote yamadashy/repomix --style xml',
    },
    {
      token: '--remove-comments',
      titleEn: 'Remove comments',
      titleVi: 'Loại comment',
      descEn: 'Removes supported-language comments to reduce context size, but may discard licenses, rationale, generated-file notices, or safety constraints.',
      descVi: 'Xóa comment của ngôn ngữ được hỗ trợ để giảm kích thước context, nhưng có thể mất license, rationale, ghi chú file sinh tự động hoặc ràng buộc an toàn.',
      exampleCommand: '/ak:repomix src --remove-comments --style markdown',
          exampleCommandVi: '/ak:repomix src --remove-comments --style markdown',
    },
    {
      token: '--copy',
      titleEn: 'Copy to clipboard',
      titleVi: 'Copy vào clipboard',
      descEn: 'Copies the generated bundle to the system clipboard in addition to normal processing. Review sensitive content before using it.',
      descVi: 'Copy bundle đã tạo vào system clipboard ngoài xử lý thông thường. Rà soát nội dung nhạy cảm trước khi dùng.',
      exampleCommand: '/ak:repomix . --copy',
          exampleCommandVi: '/ak:repomix . --copy',
    },
    {
      token: '--init',
      titleEn: 'Create config',
      titleVi: 'Tạo config',
      descEn: 'Creates repomix.config.json for reusable packaging settings. It does not create the repository bundle by itself.',
      descVi: 'Tạo repomix.config.json cho thiết lập đóng gói tái sử dụng. Tùy chọn này không tự tạo bundle repository.',
      exampleCommand: '/ak:repomix --init',
          exampleCommandVi: '/ak:repomix --init',
    },
    {
      token: '--token-count-tree [min]',
      titleEn: 'Token tree',
      titleVi: 'Cây token',
      descEn: 'Shows token-heavy files and directories, optionally above a minimum threshold, so the bundle can be narrowed before sharing.',
      descVi: 'Hiển thị file và thư mục nặng token, có thể lọc theo ngưỡng tối thiểu, để thu hẹp bundle trước khi chia sẻ.',
      exampleCommand: '/ak:repomix . --token-count-tree 1000',
          exampleCommandVi: '/ak:repomix . --token-count-tree 1000',
    },
    {
      token: '--no-security-check',
      titleEn: 'Skip security scan',
      titleVi: 'Bỏ scan bảo mật',
      descEn: 'Disables Secretlint-based scanning. Use only after an explicit risk decision; it is not proof that the bundle is safe to share.',
      descVi: 'Tắt scan dựa trên Secretlint. Chỉ dùng sau quyết định rủi ro rõ ràng; đây không phải bằng chứng bundle an toàn để chia sẻ.',
      exampleCommand: '/ak:repomix . --no-security-check',
          exampleCommandVi: '/ak:repomix . --no-security-check',
    },
  ],
};

const data: SkillInfographic = {
  "id": "ak-repomix",
  "command": "/ak:repomix",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:repomix",
    "titleVi": "/ak:repomix",
    "taglineEn": "Pack local, remote, or third-party repositories into AI-friendly XML, Markdown, JSON, or plain-text context with token counts and security checks.",
    "taglineVi": "Đóng gói repo local, remote hoặc bên thứ ba thành ngữ cảnh XML, Markdown, JSON hoặc plain text thân thiện với AI, có đếm token và kiểm tra bảo mật."
  },
  "hardGate": {
    "type": "warning",
    "titleEn": "Review packed output before sharing",
    "titleVi": "Rà soát gói đầu ra trước khi chia sẻ",
    "contentEn": "Repomix uses Secretlint checks, but the skill still requires manual review of the generated file, token summary, and warnings before you share code with another LLM or auditor.",
    "contentVi": "Repomix dùng kiểm tra Secretlint, nhưng skill vẫn yêu cầu rà thủ công file đã tạo, tóm tắt token và cảnh báo trước khi chia sẻ code cho LLM hoặc người audit khác."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Assess requirements",
      "titleVi": "Đánh giá yêu cầu",
      "descEn": "Identify the local path or remote repository, the intended AI analysis or audit, the output format, and sensitive-data concerns.",
      "descVi": "Xác định path local hoặc repo remote, mục đích phân tích hay audit bằng AI, định dạng đầu ra và rủi ro dữ liệu nhạy cảm."
    },
    {
      "number": 2,
      "titleEn": "Configure filters",
      "titleVi": "Cấu hình bộ lọc",
      "descEn": "Set include and ignore patterns, decide whether to respect .gitignore, and enable comment removal only when it helps the target task.",
      "descVi": "Đặt pattern include và ignore, quyết định có theo .gitignore không và chỉ bật loại bỏ comment khi có ích cho nhiệm vụ đích."
    },
    {
      "number": 3,
      "titleEn": "Execute packaging",
      "titleVi": "Chạy đóng gói",
      "descEn": "Run Repomix locally or with `npx repomix --remote`, choose `--style xml|markdown|plain|json`, and write or copy the output file.",
      "descVi": "Chạy Repomix local hoặc với `npx repomix --remote`, chọn `--style xml|markdown|plain|json`, rồi ghi hoặc copy file đầu ra."
    },
    {
      "number": 4,
      "titleEn": "Validate output",
      "titleVi": "Xác thực đầu ra",
      "descEn": "Review the generated file, token counts or token-count tree, security warnings, and target model context limits before delivery.",
      "descVi": "Rà file đã tạo, số token hoặc cây token, cảnh báo bảo mật và giới hạn context của model đích trước khi bàn giao."
    },
    {
      "number": 5,
      "titleEn": "Deliver context",
      "titleVi": "Bàn giao ngữ cảnh",
      "descEn": "Provide the packaged file, token count summary, selected filters, and any omitted areas, warnings, or security caveats.",
      "descVi": "Cung cấp file đã đóng gói, tóm tắt token, bộ lọc đã chọn và các vùng bị bỏ qua, cảnh báo hoặc lưu ý bảo mật."
    }
  ],
  "corePrinciplesEn": [
    "Package only the repository context the next AI task truly needs",
    "Use include and ignore patterns to keep large codebases focused",
    "Token counts are a delivery gate for the target model context",
    "Security checks and manual output review happen before sharing",
    "Remote repositories can be packed for analysis without cloning"
  ],
  "corePrinciplesVi": [
    "Chỉ đóng gói phần ngữ cảnh repo mà tác vụ AI tiếp theo thật sự cần",
    "Dùng pattern include và ignore để giữ codebase lớn đúng trọng tâm",
    "Đếm token là cổng bàn giao theo context của model đích",
    "Kiểm tra bảo mật và rà thủ công đầu ra trước khi chia sẻ",
    "Có thể đóng gói repo remote để phân tích mà không cần clone"
  ],
  "expertiseAreasEn": [
    "AI-friendly repository snapshots",
    "Remote repository packaging",
    "Include and ignore pattern design",
    "Token-count tree analysis",
    "Secretlint-backed security checks",
    "Comment removal and output formatting"
  ],
  "expertiseAreasVi": [
    "Snapshot repo thân thiện với AI",
    "Đóng gói repo remote",
    "Thiết kế pattern include và ignore",
    "Phân tích cây đếm token",
    "Kiểm tra bảo mật dựa trên Secretlint",
    "Loại bỏ comment và định dạng đầu ra"
  ],
  "invocation": invocation,
  "outputFlags": [
    {
      "flag": "--style xml|markdown|plain|json",
      "titleEn": "Output format",
      "titleVi": "Định dạng đầu ra",
      "descEn": "Selects XML, Markdown, JSON, or plain-text packaging for the intended LLM or human reviewer.",
      "descVi": "Chọn gói XML, Markdown, JSON hoặc plain text theo LLM hoặc người review sẽ đọc.",
      "exampleCommand": "/ak:repomix . --style markdown"
    },
    {
      "flag": "--include patterns",
      "titleEn": "Focused include set",
      "titleVi": "Tập include có trọng tâm",
      "descEn": "Packages only matching files such as source modules, docs, or package folders that matter for the task.",
      "descVi": "Chỉ đóng gói các file khớp pattern như module source, docs hoặc thư mục package liên quan đến nhiệm vụ.",
      "exampleCommand": "/ak:repomix . --include \"src/**/*.ts,*.md\""
    },
    {
      "flag": "-i patterns",
      "titleEn": "Additional ignores",
      "titleVi": "Bỏ qua bổ sung",
      "descEn": "Excludes extra paths beyond the repository defaults, such as tests, generated files, or noisy fixtures.",
      "descVi": "Loại thêm các path ngoài mặc định của repo, như test, file sinh tự động hoặc fixture nhiễu.",
      "exampleCommand": "/ak:repomix . -i \"tests/**,*.test.js\""
    },
    {
      "flag": "--remote owner/repo",
      "titleEn": "Remote repository",
      "titleVi": "Repo remote",
      "descEn": "Processes a GitHub repository, URL, or commit without cloning it into the current workspace.",
      "descVi": "Xử lý repo GitHub, URL hoặc commit mà không cần clone vào workspace hiện tại.",
      "exampleCommand": "/ak:repomix --remote yamadashy/repomix --style xml"
    },
    {
      "flag": "--token-count-tree [min]",
      "titleEn": "Token tree",
      "titleVi": "Cây token",
      "descEn": "Shows token-heavy directories and files so the pack can be narrowed before sharing with an LLM.",
      "descVi": "Hiển thị thư mục và file nặng token để thu hẹp gói trước khi chia sẻ với LLM.",
      "exampleCommand": "/ak:repomix . --token-count-tree 1000"
    },
    {
      "flag": "--remove-comments",
      "titleEn": "Comment removal",
      "titleVi": "Loại bỏ comment",
      "descEn": "Strips supported-language comments when smaller context is more useful than preserving commentary.",
      "descVi": "Loại comment của các ngôn ngữ được hỗ trợ khi ngữ cảnh gọn quan trọng hơn việc giữ chú thích.",
      "exampleCommand": "/ak:repomix src --remove-comments --style markdown"
    }
  ],
  "skillStack": [
    {
      "name": "Repomix CLI",
      "type": "tool"
    },
    {
      "name": "Secretlint security checks",
      "type": "tool"
    },
    {
      "name": ".repomixignore",
      "type": "tool"
    },
    {
      "name": "repomix.config.json",
      "type": "tool"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Default codebase snapshot",
      "labelVi": "Snapshot codebase mặc định",
      "command": "/ak:repomix . --style xml",
      "whenEn": "Use when the whole current repository should become AI-readable context for analysis or planning.",
      "whenVi": "Dùng khi toàn bộ repo hiện tại cần trở thành ngữ cảnh AI đọc được để phân tích hoặc lập kế hoạch.",
      "expectedEn": "Assesses sensitivity and target use, runs a standard XML pack, reviews token counts and security warnings, then returns the output file with caveats.",
      "expectedVi": "Đánh giá độ nhạy và mục đích dùng, chạy gói XML chuẩn, rà số token và cảnh báo bảo mật, rồi trả file đầu ra kèm lưu ý.",
      "recommended": true
    },
    {
      "labelEn": "Focused review pack",
      "labelVi": "Gói review có trọng tâm",
      "command": "/ak:repomix . --include \"src/**/*.ts,*.md\" --remove-comments --style markdown",
      "whenEn": "Use when a human reviewer and an LLM both need a smaller source-and-docs context pack.",
      "whenVi": "Dùng khi cả người review và LLM cần một gói ngữ cảnh source và docs nhỏ hơn.",
      "expectedEn": "Configures include filters, removes supported comments, emits a Markdown pack for inspection, and reports token count plus any omitted or risky areas.",
      "expectedVi": "Cấu hình bộ lọc include, loại comment được hỗ trợ, xuất gói Markdown để đọc và báo số token cùng vùng bị bỏ qua hoặc có rủi ro."
    },
    {
      "labelEn": "Remote library audit",
      "labelVi": "Audit thư viện remote",
      "command": "/ak:repomix --remote vendor/library --style xml -o audit.xml",
      "whenEn": "Use when a third-party GitHub repository needs to be packaged for security audit or library evaluation without cloning.",
      "whenVi": "Dùng khi cần đóng gói repo GitHub bên thứ ba để audit bảo mật hoặc đánh giá thư viện mà không clone.",
      "expectedEn": "Packages the remote repository into audit.xml, keeps Repomix security checks active, reviews the generated summary, and highlights credentials or warnings before handoff.",
      "expectedVi": "Đóng gói repo remote thành audit.xml, giữ kiểm tra bảo mật của Repomix, rà tóm tắt được tạo và nêu credential hoặc cảnh báo trước khi bàn giao."
    },
    {
      "labelEn": "Token-heavy monorepo scan",
      "labelVi": "Scan monorepo nặng token",
      "command": "/ak:repomix . --token-count-tree 1000",
      "whenEn": "Use before packing a large monorepo when the biggest token contributors must be found first.",
      "whenVi": "Dùng trước khi đóng gói monorepo lớn khi cần tìm phần chiếm nhiều token nhất trước.",
      "expectedEn": "Generates a token-count tree filtered to large entries, identifies directories or files to include or ignore, and uses that summary to narrow the final pack.",
      "expectedVi": "Tạo cây đếm token chỉ gồm mục lớn, xác định thư mục hoặc file nên include hoặc ignore và dùng tóm tắt đó để thu hẹp gói cuối."
    }
  ]
};

export default data;

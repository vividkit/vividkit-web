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
      descEn: 'Selects XML, Markdown, JSON, or plain text. It changes the bundle format, not the source files being included. Other Repomix CLI switches come from live CLI help, not this skill argument-hint.',
      descVi: 'Chọn XML, Markdown, JSON hoặc plain text. Tùy chọn này đổi định dạng bundle, không đổi tập file nguồn. Các cờ CLI Repomix khác lấy từ help đang chạy, không nằm trong argument-hint của skill.',
      exampleCommand: '/ak:repomix . --style markdown',
          exampleCommandVi: '/ak:repomix . --style markdown',
    },
  ],
};

const data: SkillInfographic = {
  "id": "ak-repomix",
  "command": "/ak:repomix",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:repomix — AI-ready repo context",
    "titleVi": "/ak:repomix — Ngữ cảnh AI từ repo",
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
      "descEn": "Review the generated file, token counts, security warnings, and target model context limits before delivery.",
      "descVi": "Rà file đã tạo, số token, cảnh báo bảo mật và giới hạn context của model đích trước khi bàn giao."
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
      "labelEn": "Markdown pack",
      "labelVi": "Gói Markdown",
      "command": "/ak:repomix packages/auth --style markdown",
      "whenEn": "Use when a single package should become readable Markdown context instead of XML.",
      "whenVi": "Dùng khi một package cần thành ngữ cảnh Markdown dễ đọc thay vì XML.",
      "expectedEn": "Packs only the requested path as Markdown, reviews the generated file and token summary, and reports security warnings before sharing.",
      "expectedVi": "Đóng gói đúng path được yêu cầu thành Markdown, rà file đã tạo cùng tóm tắt token, và báo cảnh báo bảo mật trước khi chia sẻ."
    }
  ]
};

export default data;

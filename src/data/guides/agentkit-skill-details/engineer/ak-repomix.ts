import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-repomix",
  "command": "/ak:repomix",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:repomix",
    "titleVi": "/ak:repomix",
    "taglineEn": "Pack local or remote repositories into AI-friendly XML, Markdown, JSON, or plain-text context with filters, token counts, and secret checks.",
    "taglineVi": "Đóng gói repo local hoặc remote thành ngữ cảnh XML, Markdown, JSON hoặc plain text thân thiện với AI, có filter, đếm token và kiểm tra bí mật."
  },
  "hardGate": {
    "type": "warning",
    "titleEn": "Review packed output before sharing",
    "titleVi": "Xem lại gói đầu ra trước khi chia sẻ",
    "contentEn": "Repomix can include sensitive files. Review the generated summary and output, avoid .env files, use .repomixignore, and confirm no credentials are exposed.",
    "contentVi": "Repomix có thể gom cả file nhạy cảm. Hãy xem lại tóm tắt và nội dung tạo ra, tránh file .env, dùng .repomixignore và bảo đảm không lộ credential."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Assess context need",
      "titleVi": "Đánh giá nhu cầu ngữ cảnh",
      "descEn": "Identify whether the target is local or remote, the intended LLM use, output format, and sensitivity level.",
      "descVi": "Xác định mục tiêu là local hay remote, mục đích đưa cho LLM, định dạng đầu ra và mức nhạy cảm."
    },
    {
      "number": 2,
      "titleEn": "Select scope",
      "titleVi": "Chọn phạm vi",
      "descEn": "Use include and ignore patterns to keep only relevant modules, docs, packages, or audit targets.",
      "descVi": "Dùng include và ignore pattern để giữ đúng module, tài liệu, package hoặc mục tiêu audit cần thiết."
    },
    {
      "number": 3,
      "titleEn": "Choose style",
      "titleVi": "Chọn định dạng",
      "descEn": "Set `--style xml|markdown|plain|json` based on the consumer and whether humans will inspect the pack.",
      "descVi": "Đặt `--style xml|markdown|plain|json` theo nơi tiêu thụ và việc con người có cần đọc gói đó hay không."
    },
    {
      "number": 4,
      "titleEn": "Optimize tokens",
      "titleVi": "Tối ưu token",
      "descEn": "Run token-count summaries or tree views, narrow large monorepos, and reserve space for instructions, tools, and response.",
      "descVi": "Chạy tóm tắt hoặc cây đếm token, thu hẹp monorepo lớn và chừa chỗ cho instruction, tool và phản hồi."
    },
    {
      "number": 5,
      "titleEn": "Run packaging",
      "titleVi": "Chạy đóng gói",
      "descEn": "Execute Repomix locally or through `npx repomix --remote`, optionally removing comments or copying output.",
      "descVi": "Chạy Repomix local hoặc qua `npx repomix --remote`, có thể bỏ comment hoặc copy đầu ra nếu cần."
    },
    {
      "number": 6,
      "titleEn": "Validate security",
      "titleVi": "Kiểm tra bảo mật",
      "descEn": "Read security warnings, inspect output for secrets, and disable security checks only with a deliberate reason.",
      "descVi": "Đọc cảnh báo bảo mật, kiểm tra nội dung có secret không và chỉ tắt security check khi có lý do rõ ràng."
    },
    {
      "number": 7,
      "titleEn": "Deliver context",
      "titleVi": "Bàn giao ngữ cảnh",
      "descEn": "Provide the output file, token summary, selected filters, and any warnings or omitted areas.",
      "descVi": "Cung cấp file đầu ra, tóm tắt token, filter đã dùng và các cảnh báo hoặc vùng bị bỏ qua."
    }
  ],
  "corePrinciplesEn": [
    "Package only the context the next analysis truly needs",
    "Token count is a review gate, not trivia",
    "Security checks and manual review happen before sharing",
    "Remote repositories can be packed without cloning"
  ],
  "corePrinciplesVi": [
    "Chỉ đóng gói phần ngữ cảnh mà phân tích tiếp theo thật sự cần",
    "Đếm token là cổng kiểm tra, không phải thông tin phụ",
    "Kiểm tra bảo mật và rà thủ công trước khi chia sẻ",
    "Có thể đóng gói repo remote mà không cần clone"
  ],
  "expertiseAreasEn": [
    "AI context files",
    "Remote repository snapshots",
    "Monorepo filtering",
    "Token budgeting",
    "Secretlint-style checks",
    "Comment removal"
  ],
  "expertiseAreasVi": [
    "File ngữ cảnh cho AI",
    "Snapshot repo remote",
    "Lọc trong monorepo",
    "Lập ngân sách token",
    "Kiểm tra kiểu Secretlint",
    "Loại bỏ comment"
  ],
  "outputFlags": [
    {
      "flag": "--style xml|markdown|plain|json",
      "titleEn": "Output style",
      "titleVi": "Định dạng đầu ra",
      "descEn": "Selects the Repomix output representation from the documented argument hint.",
      "descVi": "Chọn dạng đầu ra Repomix theo argument-hint đã ghi.",
      "exampleCommand": "/ak:repomix src --style markdown"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Default pack",
      "labelVi": "Đóng gói mặc định",
      "command": "/ak:repomix . --style xml",
      "whenEn": "Use for a full AI-readable codebase snapshot.",
      "whenVi": "Dùng để tạo snapshot codebase cho AI đọc.",
      "expectedEn": "A packed repository file plus token and security summary.",
      "expectedVi": "Một file repo đã đóng gói kèm tóm tắt token và bảo mật.",
      "recommended": true
    },
    {
      "labelEn": "Markdown review pack",
      "labelVi": "Gói review dạng Markdown",
      "command": "/ak:repomix src --style markdown",
      "whenEn": "Use when humans and LLMs both need to inspect the packed context.",
      "whenVi": "Dùng khi cả người và LLM cần đọc gói ngữ cảnh.",
      "expectedEn": "A filtered Markdown pack suitable for code review or documentation work.",
      "expectedVi": "Gói Markdown đã lọc, phù hợp cho review code hoặc viết tài liệu."
    }
  ]
};

export default data;

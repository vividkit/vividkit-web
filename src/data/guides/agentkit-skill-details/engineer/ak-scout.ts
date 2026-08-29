import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-scout",
  "command": "/ak:scout",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:scout",
    "titleVi": "/ak:scout",
    "taglineEn": "Quickly orient in a codebase with native search, scoped reads, optional Explore agents, external OpenCode probes, and ultra verifier scouting.",
    "taglineVi": "Định vị nhanh trong codebase bằng tìm kiếm gốc, đọc phạm vi hẹp, Explore agent tùy chọn, probe OpenCode bên ngoài và scout có verifier ultra."
  },
  "hardGate": {
    "type": "critical",
    "titleEn": "Do not force delegation",
    "titleVi": "Không ép dùng subagent",
    "contentEn": "Do not spawn subagents merely because the skill mentions Explore. If runtime policy or user request does not permit delegation, scout in the main agent; `--ultra` hard-stops if five read-only candidates cannot run.",
    "contentVi": "Không spawn subagent chỉ vì skill nhắc Explore. Nếu runtime policy hoặc yêu cầu người dùng không cho phép delegation, hãy scout trong agent chính; `--ultra` phải dừng cứng nếu không chạy được năm candidate chỉ đọc."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Parse target",
      "titleVi": "Phân tích mục tiêu",
      "descEn": "Extract search targets, directories, symbols, file types, scale, and likely relationships from the user prompt.",
      "descVi": "Rút ra mục tiêu tìm kiếm, thư mục, symbol, loại file, quy mô và quan hệ có thể có từ yêu cầu người dùng."
    },
    {
      "number": 2,
      "titleEn": "Search portably",
      "titleVi": "Tìm bằng công cụ gốc",
      "descEn": "Use search_files first, then scoped read_file and small run_shell facts for local discovery.",
      "descVi": "Dùng search_files trước, rồi read_file phạm vi hẹp và vài lệnh run_shell nhỏ để khám phá local."
    },
    {
      "number": 3,
      "titleEn": "Decide delegation",
      "titleVi": "Quyết định delegation",
      "descEn": "Only divide work when runtime policy and the user request permit it, and when agent count is more than two.",
      "descVi": "Chỉ chia việc khi runtime policy và yêu cầu người dùng cho phép, và khi số agent lớn hơn hai mới đáng chi phí."
    },
    {
      "number": 4,
      "titleEn": "Divide scopes",
      "titleVi": "Chia phạm vi",
      "descEn": "Split directories or patterns without overlap, maximize coverage, and record concise scout work if task tracking exists.",
      "descVi": "Chia thư mục hoặc pattern không chồng lấn, tối đa hóa độ phủ và ghi việc scout ngắn gọn nếu có bề mặt task tracking."
    },
    {
      "number": 5,
      "titleEn": "Run scouts",
      "titleVi": "Chạy scout",
      "descEn": "Use internal Explore subagents by default or external OpenCode probes only when native/local search is insufficient and permitted.",
      "descVi": "Mặc định dùng Explore subagent nội bộ, hoặc probe OpenCode bên ngoài chỉ khi tìm kiếm local/gốc không đủ và được phép."
    },
    {
      "number": 6,
      "titleEn": "Collect quickly",
      "titleVi": "Thu kết quả nhanh",
      "descEn": "Wait up to three minutes per agent, skip non-responders, and record timed-out scopes honestly.",
      "descVi": "Chờ tối đa ba phút mỗi agent, bỏ qua agent không phản hồi và ghi rõ phạm vi bị timeout."
    },
    {
      "number": 7,
      "titleEn": "Report findings",
      "titleVi": "Báo cáo phát hiện",
      "descEn": "Aggregate relevant files with one-line roles, relationships, and unresolved questions in a concise Scout Report.",
      "descVi": "Gom file liên quan với vai trò một dòng, quan hệ và câu hỏi chưa rõ trong một Scout Report ngắn gọn."
    }
  ],
  "corePrinciplesEn": [
    "Scouting finds context; it does not implement the change",
    "Native search and scoped reads come before agents",
    "Delegation must be permitted and worth the overhead",
    "Reports should list relevant files, relationships, and honest gaps"
  ],
  "corePrinciplesVi": [
    "Scout để tìm ngữ cảnh, không phải triển khai thay đổi",
    "Tìm kiếm gốc và đọc hẹp phải đi trước agent",
    "Delegation phải được phép và đáng chi phí",
    "Báo cáo cần nêu file liên quan, quan hệ và khoảng trống thật"
  ],
  "workflowModes": [
    {
      "flag": "default",
      "modeEn": "Internal scouting",
      "modeVi": "Scout nội bộ",
      "research": "search_files and read_file first",
      "redTeam": "None",
      "validation": "Concise report"
    },
    {
      "flag": "ext",
      "modeEn": "External OpenCode probes",
      "modeVi": "Probe OpenCode bên ngoài",
      "research": "Used when local/native search is insufficient",
      "redTeam": "None",
      "validation": "User-permitted only"
    },
    {
      "flag": "--ultra",
      "modeEn": "Best-of-5 scout",
      "modeVi": "Scout best-of-5",
      "research": "Five candidate reports from one evidence packet",
      "redTeam": "None",
      "validation": "Verifier deduplicates validated paths"
    }
  ],
  "outputFlags": [
    {
      "flag": "--ultra",
      "titleEn": "Verifier scout",
      "titleVi": "Scout có verifier",
      "descEn": "Requires exactly five parallel read-only candidate scouts plus verifier.",
      "descVi": "Cần đúng năm candidate scout chỉ đọc chạy song song và một verifier.",
      "exampleCommand": "/ak:scout auth middleware --ultra"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Find feature files",
      "labelVi": "Tìm file tính năng",
      "command": "/ak:scout payment webhook handlers",
      "whenEn": "Use at the start of a multi-directory feature or bug investigation.",
      "whenVi": "Dùng khi bắt đầu điều tra bug hoặc feature trải nhiều thư mục.",
      "expectedEn": "A compact map of relevant files and unresolved questions.",
      "expectedVi": "Bản đồ ngắn về file liên quan và câu hỏi còn mở.",
      "recommended": true
    },
    {
      "labelEn": "External probe",
      "labelVi": "Probe bên ngoài",
      "command": "/ak:scout ext renderer package boundaries",
      "whenEn": "Use when native/local search is insufficient and external OpenCode probing is allowed.",
      "whenVi": "Dùng khi tìm kiếm local/gốc không đủ và được phép dùng probe OpenCode bên ngoài.",
      "expectedEn": "Scoped external scout summaries merged into one report.",
      "expectedVi": "Tóm tắt scout bên ngoài theo phạm vi, được gộp vào một báo cáo."
    },
    {
      "labelEn": "Verifier scout",
      "labelVi": "Scout có verifier",
      "command": "/ak:scout routing layer --ultra",
      "whenEn": "Use when file discovery is high-stakes and runtime can run five read-only candidates.",
      "whenVi": "Dùng khi tìm file có rủi ro cao và runtime chạy được năm candidate chỉ đọc.",
      "expectedEn": "Validated, deduplicated relevant files with evidence and gaps.",
      "expectedVi": "Danh sách file liên quan đã xác thực và khử trùng lặp, có bằng chứng và khoảng trống."
    }
  ],
  "reportOutput": {
    "titleEn": "Scout Report",
    "titleVi": "Báo cáo Scout",
    "patternEn": "Chat report or organized report path when project-organization is invoked",
    "patternVi": "Báo cáo trong chat hoặc đường dẫn đã sắp xếp khi gọi project-organization",
    "descEn": "Relevant files with roles plus unresolved questions; timed-out scopes are named instead of hidden.",
    "descVi": "File liên quan kèm vai trò và câu hỏi còn mở; phạm vi timeout phải được nêu thay vì giấu đi."
  }
};

export default data;

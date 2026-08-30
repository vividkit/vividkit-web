import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-project-organization",
  "command": "/ak:project-organization",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:project-organization",
    "titleVi": "/ak:project-organization",
    "taglineEn": "Single source of truth for file placement, kebab-case naming, plan/report/doc templates, and safe organize-mode migrations.",
    "taglineVi": "Nguồn chuẩn duy nhất để chọn vị trí file, đặt tên kebab-case, dùng mẫu plan/report/doc và di chuyển cấu trúc dự án an toàn."
  },
  "hardGate": {
    "type": "warning",
    "titleEn": "Confirm before moving files",
    "titleVi": "Phải xác nhận trước khi di chuyển file",
    "contentEn": "Organize mode scans and proposes first; execution happens only after user approval. Never overwrite existing files, touch .git/, node_modules/, or .env files.",
    "contentVi": "Chế độ organize phải quét và đề xuất trước; chỉ thực thi sau khi người dùng đồng ý. Không ghi đè file sẵn có, không chạm vào .git/, node_modules/ hoặc file .env."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Classify artifact",
      "titleVi": "Phân loại đầu ra",
      "descEn": "Decide whether the item is source, test, plan, research, report, doc, asset, script, or config.",
      "descVi": "Xác định đầu ra là mã nguồn, test, kế hoạch, nghiên cứu, báo cáo, tài liệu, tài sản, script hay cấu hình."
    },
    {
      "number": 2,
      "titleEn": "Choose base path",
      "titleVi": "Chọn thư mục gốc",
      "descEn": "Apply the directory categories: docs/, plans/, tests/, scripts/, assets/{type}/, guides/, root, or .config/.",
      "descVi": "Áp dụng nhóm thư mục: docs/, plans/, tests/, scripts/, assets/{type}/, guides/, thư mục gốc hoặc .config/."
    },
    {
      "number": 3,
      "titleEn": "Name by temporality",
      "titleVi": "Đặt tên theo vòng đời",
      "descEn": "Use timestamped names for plans/reports/journals, evergreen slugs for stable docs, and variant suffixes for asset versions.",
      "descVi": "Dùng tên có thời gian cho plan/report/journal, slug ổn định cho tài liệu lâu dài, và hậu tố biến thể cho các phiên bản asset."
    },
    {
      "number": 4,
      "titleEn": "Resolve nesting",
      "titleVi": "Quyết định lồng thư mục",
      "descEn": "Keep single outputs flat; create self-contained folders for multi-file work, parent-scoped reports, platform folders, or variant sets.",
      "descVi": "Giữ đầu ra một file ở dạng phẳng; tạo thư mục riêng cho gói nhiều file, báo cáo theo plan, nền tảng hoặc bộ biến thể."
    },
    {
      "number": 5,
      "titleEn": "Apply markdown shape",
      "titleVi": "Áp dụng khung Markdown",
      "descEn": "For markdown, start with H1, add frontmatter only when tooling consumes it, and use the required section order for the document type.",
      "descVi": "Với Markdown, bắt đầu bằng H1, chỉ thêm frontmatter khi công cụ cần đọc, và giữ đúng thứ tự mục theo loại tài liệu."
    },
    {
      "number": 6,
      "titleEn": "Propose migration",
      "titleVi": "Đề xuất di chuyển",
      "descEn": "When organizing existing files, scan targets, list from→to moves, surface conflicts, then wait for confirmation.",
      "descVi": "Khi sắp xếp file hiện có, quét mục tiêu, liệt kê chuyển từ→đến, nêu xung đột rồi chờ xác nhận."
    },
    {
      "number": 7,
      "titleEn": "Execute and verify",
      "titleVi": "Thực thi và kiểm tra",
      "descEn": "Create needed directories, move approved files without overwriting, then show the final structure and remaining issues.",
      "descVi": "Tạo thư mục cần thiết, di chuyển file đã duyệt mà không ghi đè, rồi báo cấu trúc cuối và vấn đề còn lại."
    }
  ],
  "corePrinciplesEn": [
    "Every file has a category before it has a path",
    "Kebab-case, self-documenting slugs are the default for non-language-specific files",
    "Plans and agent outputs live under plans/, not ad hoc roots",
    "Organize mode is proposal-first and confirmation-gated"
  ],
  "corePrinciplesVi": [
    "Mỗi file phải có nhóm trước khi có đường dẫn",
    "Slug kebab-case, tự mô tả là mặc định cho file không bị ngôn ngữ lập trình chi phối",
    "Kế hoạch và đầu ra của agent nằm trong plans/, không rải ở gốc tùy tiện",
    "Chế độ organize luôn đề xuất trước và chỉ chạy sau khi xác nhận"
  ],
  "expertiseAreasEn": [
    "Directory taxonomy",
    "Timestamped plan/report naming",
    "Markdown body templates",
    "Safe file migration",
    "Cross-skill output paths"
  ],
  "expertiseAreasVi": [
    "Phân loại thư mục",
    "Đặt tên plan/report theo thời gian",
    "Mẫu nội dung Markdown",
    "Di chuyển file an toàn",
    "Đường dẫn đầu ra dùng chung giữa các skill"
  ],
  "workflowModes": [
    {
      "flag": "Advisory",
      "modeEn": "Return path guidance",
      "modeVi": "Trả hướng dẫn đường dẫn",
      "research": "Uses requested artifact type and naming rules",
      "redTeam": "None",
      "validation": "No file moves"
    },
    {
      "flag": "Organize",
      "modeEn": "Scan and migrate after approval",
      "modeVi": "Quét và di chuyển sau khi duyệt",
      "research": "Categorizes target dirs/files",
      "redTeam": "None",
      "validation": "Conflict check before moving"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Choose output paths",
      "labelVi": "Chọn đường dẫn đầu ra",
      "command": "/ak:project-organization where should I save an implementation plan and scout report for the auth refactor?",
      "whenEn": "Use when creating files that need consistent output paths.",
      "whenVi": "Dùng khi tạo file cần đường dẫn đầu ra nhất quán.",
      "expectedEn": "Classifies the artifacts, selects plans/{date-slug}/ and plan-scoped reports/, then explains timestamped naming.",
      "expectedVi": "Phân loại đầu ra, chọn plans/{date-slug}/ và reports/ theo plan, rồi giải thích cách đặt tên có thời gian.",
      "recommended": true
    },
    {
      "labelEn": "Organize targets",
      "labelVi": "Sắp xếp mục tiêu",
      "command": "/ak:project-organization docs/ plans/",
      "whenEn": "Use when organizing existing project files and directories.",
      "whenVi": "Dùng khi sắp xếp file và thư mục hiện có trong dự án.",
      "expectedEn": "Scans the targets, categorizes files, reports naming or placement issues, and proposes a from-to migration table before confirmation.",
      "expectedVi": "Quét mục tiêu, phân loại file, báo lỗi đặt tên hoặc vị trí, và đề xuất bảng chuyển từ-đến trước bước xác nhận."
    },
    {
      "labelEn": "Shape markdown",
      "labelVi": "Định dạng Markdown",
      "command": "/ak:project-organization markdown structure for a technical journal and an ADR",
      "whenEn": "Use when structuring markdown content such as plans, journals, reports, or docs.",
      "whenVi": "Dùng khi cần cấu trúc nội dung Markdown như plan, journal, report hoặc tài liệu.",
      "expectedEn": "Returns the required H1/frontmatter guidance and the correct ordered sections for each requested markdown document type.",
      "expectedVi": "Trả hướng dẫn H1/frontmatter cần thiết và thứ tự mục đúng cho từng loại tài liệu Markdown được yêu cầu."
    },
    {
      "labelEn": "Name assets and scripts",
      "labelVi": "Đặt tên asset và script",
      "command": "/ak:project-organization paths for a dark logo variant and a release helper script",
      "whenEn": "Use when determining where to save assets, scripts, docs, plans, reports, or tests.",
      "whenVi": "Dùng khi xác định nơi lưu asset, script, tài liệu, plan, report hoặc test.",
      "expectedEn": "Applies the asset/script directory categories, kebab-case slug rules, and variant suffix naming without touching existing files.",
      "expectedVi": "Áp dụng nhóm thư mục asset/script, quy tắc slug kebab-case và hậu tố biến thể mà không chạm vào file hiện có."
    }
  ],
  "reportOutput": {
    "titleEn": "Organization guidance",
    "titleVi": "Hướng dẫn tổ chức",
    "patternEn": "src/ or root, tests/ or test/, plans/{date-slug}/, plans/reports/, docs/, docs/decisions/, assets/{type}/, scripts/, guide(s)/, .config/",
    "patternVi": "src/ hoặc gốc, tests/ hoặc test/, plans/{date-slug}/, plans/reports/, docs/, docs/decisions/, assets/{type}/, scripts/, guide(s)/, .config/",
    "descEn": "The deliverable is path and naming guidance, or an organize-mode scan with a proposed migration table that executes only after approval.",
    "descVi": "Đầu ra là hướng dẫn đường dẫn và đặt tên, hoặc bản quét organize-mode kèm bảng đề xuất di chuyển chỉ thực thi sau khi được duyệt."
  }
};

export default data;

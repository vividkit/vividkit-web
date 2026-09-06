import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-project-organization",
  "command": "/ak:project-organization",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:project-organization — File layout and naming",
    "titleVi": "/ak:project-organization — Sắp xếp file và đặt tên",
    "taglineEn": "Single source of truth for file placement, kebab-case naming, plan/report/doc templates, and safe organize-mode migrations.",
    "taglineVi": "Nguồn chuẩn duy nhất để chọn vị trí file, đặt tên kebab-case, dùng mẫu plan/report/doc và di chuyển cấu trúc dự án an toàn."
  },
  "invocation": {
    "syntax": "/ak:project-organization [directories or files to organize]",
    "arguments": [
      {
        "token": "[directories or files to organize]",
        "titleEn": "Targets",
        "titleVi": "Mục tiêu",
        "descEn": "Optional directories or files to organize. Direct targets trigger scan → analyze → propose → confirm → execute → verify; omitted or cross-skill use returns path and naming guidance.",
        "descVi": "Các thư mục hoặc file tùy chọn cần sắp xếp. Mục tiêu trực tiếp kích hoạt quét → phân tích → đề xuất → xác nhận → thực thi → kiểm tra; bỏ trống hoặc dùng từ skill khác thì trả hướng dẫn đường dẫn và đặt tên.",
        "required": false,
        "exampleCommand": "/ak:project-organization docs/ plans/"
      }
    ]
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
      "labelEn": "Path decision",
      "labelVi": "Quyết định đường dẫn",
      "command": "/ak:project-organization plans and reports for the auth refactor",
      "whenEn": "Use when another skill needs the canonical location before writing.",
      "whenVi": "Dùng khi skill khác cần vị trí chuẩn trước khi ghi file.",
      "expectedEn": "Returns the correct category, path pattern, naming mode, and placement rationale before any file is written.",
      "expectedVi": "Trả về nhóm đúng, mẫu đường dẫn, kiểu đặt tên và lý do đặt chỗ trước khi ghi file.",
      "recommended": true
    },
    {
      "labelEn": "Organize folder",
      "labelVi": "Sắp xếp thư mục",
      "command": "/ak:project-organization docs/ plans/",
      "whenEn": "Use when existing files need a proposed migration table.",
      "whenVi": "Dùng khi các file hiện có cần bảng đề xuất di chuyển.",
      "expectedEn": "A scan, violations, from-to plan, approval gate, and final verification after approval.",
      "expectedVi": "Có quét thư mục, lỗi quy ước, kế hoạch từ-đến, bước xin duyệt và kiểm tra cuối sau khi được duyệt."
    }
  ],
  "reportOutput": {
    "titleEn": "Canonical paths",
    "titleVi": "Đường dẫn chuẩn",
    "patternEn": "plans/{date-slug}/, plans/reports/, docs/, assets/{type}/, scripts/",
    "patternVi": "plans/{date-slug}/, plans/reports/, docs/, assets/{type}/, scripts/",
    "descEn": "The deliverable is either path advice or a confirmed migration table with final structure.",
    "descVi": "Đầu ra là hướng dẫn đường dẫn hoặc bảng di chuyển đã được xác nhận kèm cấu trúc cuối."
  }
};

export default data;

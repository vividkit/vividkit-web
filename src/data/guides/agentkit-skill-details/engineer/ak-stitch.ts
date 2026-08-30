import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-stitch",
  "command": "/ak:stitch",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:stitch — Google Stitch Design Generation",
    "titleVi": "/ak:stitch — Sinh thiết kế bằng Google Stitch",
    "taglineEn": "Generates high-fidelity UI designs from text prompts, tracks quota, exports HTML/Tailwind, screenshots, and DESIGN.md, then hands designs to frontend implementation skills.",
    "taglineVi": "Sinh thiết kế UI độ trung thực cao từ prompt, theo dõi quota, export HTML/Tailwind, ảnh và DESIGN.md, rồi bàn giao cho các skill triển khai frontend."
  },
  "hardGate": {
    "type": "warning",
    "titleEn": "Provider, key, and quota boundary",
    "titleVi": "Ranh giới provider, khóa và quota",
    "contentEn": "Stitch generation requires STITCH_API_KEY, sends the prompt to Google Stitch, and depends on current provider quota and API availability; if quota is exhausted, stop generation or use an approved non-provider workflow instead of claiming a run happened.",
    "contentVi": "Generation bằng Stitch cần STITCH_API_KEY, gửi prompt tới Google Stitch và phụ thuộc quota cùng khả dụng API hiện tại của provider; nếu hết quota, dừng generation hoặc dùng workflow không qua provider đã được duyệt thay vì nói rằng đã chạy."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Verify setup",
      "titleVi": "Kiểm tra thiết lập",
      "descEn": "Confirm API key location, SDK install, optional project ID, and MCP setup when native design context is needed.",
      "descVi": "Xác nhận nơi đặt API key, SDK đã cài, project ID tùy chọn và MCP nếu cần ngữ cảnh thiết kế native."
    },
    {
      "number": 2,
      "titleEn": "Check quota",
      "titleVi": "Kiểm tra quota",
      "descEn": "Run the local advisory quota check before generation and explain that provider-side enforcement remains authoritative.",
      "descVi": "Chạy kiểm tra quota local để tham khảo trước khi sinh và giải thích rằng enforcement phía provider vẫn là nguồn quyết định."
    },
    {
      "number": 3,
      "titleEn": "Resolve project",
      "titleVi": "Xác định project",
      "descEn": "Choose project by explicit project ID, project name, environment override, git repo auto-detect, or claudekit-default fallback.",
      "descVi": "Chọn project theo ID rõ ràng, tên project, biến môi trường, tự nhận diện repo git hoặc fallback claudekit-default."
    },
    {
      "number": 4,
      "titleEn": "Generate screen",
      "titleVi": "Sinh màn hình",
      "descEn": "Run the Stitch generation script with the user's design prompt, active plan project name, device, or variant needs.",
      "descVi": "Chạy script sinh Stitch với prompt thiết kế, tên project theo plan đang hoạt động, thiết bị hoặc nhu cầu variant."
    },
    {
      "number": 5,
      "titleEn": "Review image",
      "titleVi": "Review hình ảnh",
      "descEn": "Show the generated design preview and capture user feedback before requesting redesigns or additional variants.",
      "descVi": "Hiển thị preview thiết kế và lấy phản hồi người dùng trước khi yêu cầu redesign hoặc variant bổ sung."
    },
    {
      "number": 6,
      "titleEn": "Export artifacts",
      "titleVi": "Export artifact",
      "descEn": "Export HTML/Tailwind, screenshot, and DESIGN.md so implementation agents can consume concrete design specs.",
      "descVi": "Export HTML/Tailwind, ảnh và DESIGN.md để agent triển khai dùng được đặc tả thiết kế cụ thể."
    },
    {
      "number": 7,
      "titleEn": "Hand off to code",
      "titleVi": "Bàn giao sang code",
      "descEn": "Route DESIGN.md to frontend-design, ui-ux-pro-max, or ui-styling; DESIGN.md wins over text descriptions.",
      "descVi": "Chuyển DESIGN.md cho frontend-design, ui-ux-pro-max hoặc ui-styling; DESIGN.md ưu tiên hơn mô tả bằng lời."
    },
    {
      "number": 8,
      "titleEn": "Track quota",
      "titleVi": "Ghi quota",
      "descEn": "Increment local quota after generation and keep repo-isolated project records for future design sessions.",
      "descVi": "Tăng quota cục bộ sau khi sinh và giữ bản ghi project tách theo repo cho các phiên thiết kế sau."
    }
  ],
  "corePrinciplesEn": [
    "Stitch produces static design, not production React",
    "DESIGN.md is the handoff contract",
    "Group designs by repo or active plan for traceability",
    "Add responsiveness and animation during implementation"
  ],
  "corePrinciplesVi": [
    "Stitch tạo thiết kế tĩnh, không phải React production",
    "DESIGN.md là hợp đồng bàn giao",
    "Nhóm thiết kế theo repo hoặc plan đang hoạt động để truy vết",
    "Responsive và animation được bổ sung ở bước triển khai"
  ],
  "expertiseAreasEn": [
    "AI UI generation",
    "Tailwind export",
    "DESIGN.md handoff",
    "quota tracking",
    "design variants"
  ],
  "expertiseAreasVi": [
    "sinh UI bằng AI",
    "export Tailwind",
    "bàn giao DESIGN.md",
    "theo dõi quota",
    "biến thể thiết kế"
  ],
  "invocation": {
    "syntax": "/ak:stitch [design prompt or action] OR /ak:stitch <generate|export|quota> ...",
    "arguments": [
      {
        "token": "[design prompt or action]",
        "titleEn": "Design prompt or action",
        "titleVi": "Prompt thiết kế hoặc action",
        "descEn": "Natural-language screen brief, constraints, device, content, variant, export, or quota request. Do not include secrets, customer data, or unapproved brand assets.",
        "descVi": "Brief màn hình, ràng buộc, thiết bị, nội dung, variant, export hoặc yêu cầu quota bằng ngôn ngữ tự nhiên. Không đưa secret, dữ liệu khách hàng hoặc brand asset chưa duyệt.",
        "required": true,
        "exampleCommand": "/ak:stitch \"Generate two desktop checkout concepts, show previews, and export the selected screen to ./stitch-exports without implementing it\""
      }
    ],
    "subcommands": [
      {
        "name": "generate",
        "syntax": "/ak:stitch generate <prompt> [--project <id>|--project-name <title>] [--device MOBILE|DESKTOP|TABLET] [--variants <count>]",
        "titleEn": "Generate",
        "titleVi": "Sinh thiết kế",
        "descEn": "Create one Stitch screen or approved variants from a concrete prompt after checking access, quota, and safe content boundaries.",
        "descVi": "Tạo một Stitch screen hoặc các variant đã duyệt từ prompt cụ thể sau khi kiểm tra quyền truy cập, quota và ranh giới nội dung an toàn.",
        "arguments": [
          {
            "token": "<prompt>",
            "titleEn": "Screen brief",
            "titleVi": "Brief màn hình",
            "descEn": "The UI concept to generate, including audience, content, device, and brand constraints. Remove secrets and sensitive data before sending.",
            "descVi": "Concept UI cần sinh, gồm audience, nội dung, thiết bị và ràng buộc brand. Loại secret và dữ liệu nhạy cảm trước khi gửi.",
            "required": true
          }
        ],
        "options": [
          {
            "token": "--project <id>",
            "titleEn": "Project ID",
            "titleVi": "ID project",
            "descEn": "Reuse an exact existing Stitch project ID instead of lookup or auto-create.",
            "descVi": "Dùng lại đúng ID project Stitch hiện có thay vì lookup hoặc tự tạo."
          },
          {
            "token": "--project-name <title>",
            "titleEn": "Project name",
            "titleVi": "Tên project",
            "descEn": "Look up or create a bounded Stitch project name, commonly repo/plan for traceable design sessions.",
            "descVi": "Lookup hoặc tạo tên project Stitch có giới hạn, thường là repo/plan để truy vết phiên thiết kế."
          },
          {
            "token": "--device MOBILE|DESKTOP|TABLET",
            "titleEn": "Device target",
            "titleVi": "Thiết bị đích",
            "descEn": "Ask Stitch for a mobile, desktop, or tablet layout. It does not make the exported HTML production responsive.",
            "descVi": "Yêu cầu Stitch tạo layout mobile, desktop hoặc tablet. Tùy chọn này không biến HTML export thành responsive production."
          },
          {
            "token": "--variants <count>",
            "titleEn": "Variant count",
            "titleVi": "Số variant",
            "descEn": "Request additional design alternatives only when variants are intentionally approved.",
            "descVi": "Chỉ yêu cầu thêm phương án thiết kế khi variant đã được duyệt rõ."
          }
        ],
        "outcomeEn": "Screen ID, project ID, preview image URL, and optional variant IDs for visual review.",
        "outcomeVi": "Screen ID, project ID, URL ảnh preview và variant ID tùy chọn để review visual.",
        "exampleCommand": "/ak:stitch generate \"A desktop checkout page with payment form and cart summary\" --device DESKTOP --variants 2"
      },
      {
        "name": "export",
        "syntax": "/ak:stitch export <screen-id> [--format html|image|all] [--output <dir>]",
        "titleEn": "Export",
        "titleVi": "Export",
        "descEn": "Download an approved generated screen as HTML, image, or both plus a local DESIGN.md handoff.",
        "descVi": "Tải screen đã sinh và được duyệt thành HTML, ảnh hoặc cả hai kèm DESIGN.md bàn giao local.",
        "arguments": [
          {
            "token": "<screen-id>",
            "titleEn": "Screen ID",
            "titleVi": "ID screen",
            "descEn": "Generated Stitch screen to export. Use the project ID or project-name path from generation when needed.",
            "descVi": "Screen Stitch đã sinh cần export. Dùng project ID hoặc project-name từ lần sinh khi cần.",
            "required": true
          }
        ],
        "options": [
          {
            "token": "--format html|image|all",
            "titleEn": "Export format",
            "titleVi": "Định dạng export",
            "descEn": "Choose provider HTML, preview image, or all outputs including derived DESIGN.md.",
            "descVi": "Chọn HTML từ provider, ảnh preview hoặc tất cả output gồm DESIGN.md được suy ra."
          },
          {
            "token": "--output <dir>",
            "titleEn": "Output directory",
            "titleVi": "Thư mục output",
            "descEn": "Directory for design.html, design.png, and DESIGN.md; confirm before overwriting existing exports.",
            "descVi": "Thư mục chứa design.html, design.png và DESIGN.md; xác nhận trước khi ghi đè export có sẵn."
          }
        ],
        "outcomeEn": "Exact exported file paths for design.html, design.png, and DESIGN.md when requested.",
        "outcomeVi": "Đường dẫn file export chính xác cho design.html, design.png và DESIGN.md khi được yêu cầu.",
        "exampleCommand": "/ak:stitch export screen-123 --format all --output ./stitch-exports/"
      },
      {
        "name": "quota",
        "syntax": "/ak:stitch quota <check|increment|reset>",
        "titleEn": "Quota",
        "titleVi": "Quota",
        "descEn": "Read or adjust the local advisory credit counter; provider-side quota remains the authority.",
        "descVi": "Đọc hoặc chỉnh bộ đếm credit local để tham khảo; quota phía provider vẫn là nguồn quyết định.",
        "arguments": [
          {
            "token": "<check|increment|reset>",
            "titleEn": "Quota action",
            "titleVi": "Action quota",
            "descEn": "Use check before generation; do not run increment again after a bundled generation already counted usage.",
            "descVi": "Dùng check trước khi sinh; không chạy increment lần nữa sau khi generation bundle đã tự đếm usage.",
            "required": true
          }
        ],
        "outcomeEn": "Local JSON-style quota summary or an explicit note that provider limits blocked generation.",
        "outcomeVi": "Tóm tắt quota local dạng JSON hoặc ghi chú rõ rằng giới hạn provider đã chặn generation.",
        "exampleCommand": "/ak:stitch quota check"
      }
    ]
  },
  "promptExamples": [
    {
      "labelEn": "Generate and export concept",
      "labelVi": "Sinh và export concept",
      "command": "/ak:stitch generate \"A desktop checkout page with payment form and cart summary\" --device DESKTOP --variants 2 --project-name \"my-saas/checkout\"",
      "whenEn": "You need provider-backed UI generation plus a reviewable handoff artifact before implementation.",
      "whenVi": "Cần sinh UI qua provider và có artifact bàn giao để review trước khi triển khai.",
      "expectedEn": "Checks local quota, resolves the Stitch project, generates two desktop variants, shows preview URLs for review, and prepares the selected screen for HTML/image/DESIGN.md export.",
      "expectedVi": "Kiểm tra quota local, xác định project Stitch, sinh hai variant desktop, hiển thị preview để review và chuẩn bị screen đã chọn cho export HTML/ảnh/DESIGN.md.",
      "recommended": true
    },
    {
      "labelEn": "Generate mobile variants",
      "labelVi": "Sinh variant mobile",
      "command": "/ak:stitch generate \"Mobile onboarding flow for a finance app with three calm trust-building screens\" --device MOBILE --variants 3",
      "whenEn": "You want rapid UI design exploration from a concrete prompt before choosing a direction.",
      "whenVi": "Muốn khám phá thiết kế UI nhanh từ prompt cụ thể trước khi chọn hướng.",
      "expectedEn": "Uses the generation action with the mobile device target, requests only approved variants, and returns screen or variant IDs with preview image URLs for user selection.",
      "expectedVi": "Dùng action generate với target mobile, chỉ yêu cầu variant đã duyệt và trả screen hoặc variant ID cùng URL ảnh preview để người dùng chọn."
    },
    {
      "labelEn": "Export existing screen",
      "labelVi": "Export screen có sẵn",
      "command": "/ak:stitch export screen-123 --format all --output ./stitch-exports/",
      "whenEn": "A generated screen has been approved and should become concrete implementation input.",
      "whenVi": "Một screen đã sinh đã được duyệt và cần trở thành đầu vào triển khai cụ thể.",
      "expectedEn": "Runs the export action for the selected screen and writes design.html, design.png, and DESIGN.md so frontend-design, ui-ux-pro-max, or ui-styling can consume the design spec.",
      "expectedVi": "Chạy action export cho screen đã chọn và ghi design.html, design.png cùng DESIGN.md để frontend-design, ui-ux-pro-max hoặc ui-styling dùng đặc tả thiết kế."
    },
    {
      "labelEn": "Check quota first",
      "labelVi": "Kiểm tra quota trước",
      "command": "/ak:stitch quota check",
      "whenEn": "Before generating concepts, variants, or redesigns when local advisory quota or provider availability may block the run.",
      "whenVi": "Trước khi sinh concept, variant hoặc redesign khi quota local tham khảo hoặc khả dụng provider có thể chặn lần chạy.",
      "expectedEn": "Runs the quota action, reports local advisory usage and remaining state, and stops or chooses an approved non-provider workflow when generation should not continue.",
      "expectedVi": "Chạy action quota, báo usage và trạng thái còn lại theo bộ đếm local tham khảo, rồi dừng hoặc chọn workflow không qua provider đã duyệt khi không nên tiếp tục generation."
    }
  ],
  "specialOperations": [
    {
      "id": "generate",
      "titleEn": "Generate",
      "titleVi": "Sinh thiết kế",
      "descEn": "Turns a text prompt into a screen ID and preview image URL.",
      "descVi": "Biến prompt văn bản thành screen ID và URL ảnh preview.",
      "color": "blue"
    },
    {
      "id": "export",
      "titleEn": "Export",
      "titleVi": "Xuất file",
      "descEn": "Creates design.html, design.png, and DESIGN.md for implementation.",
      "descVi": "Tạo design.html, design.png và DESIGN.md để triển khai.",
      "color": "green"
    },
    {
      "id": "quota",
      "titleEn": "Quota",
      "titleVi": "Quota",
      "descEn": "Tracks a local advisory counter; provider-side quota remains authoritative.",
      "descVi": "Theo dõi bộ đếm local để tham khảo; quota phía provider vẫn là nguồn quyết định.",
      "color": "amber"
    }
  ]
};

export default data;

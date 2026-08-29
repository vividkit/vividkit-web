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
    "titleEn": "Quota and secret handling",
    "titleVi": "Quota và bảo mật khóa",
    "contentEn": "Requires a configured STITCH_API_KEY and respects the free daily quota; when exhausted, use ui-ux-pro-max fallback instead of pretending Stitch ran.",
    "contentVi": "Cần STITCH_API_KEY đã cấu hình và phải tôn trọng quota miễn phí hằng ngày; khi hết quota, dùng ui-ux-pro-max thay thế thay vì giả vờ Stitch đã chạy."
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
      "descEn": "Run the quota check before generation and warn when remaining credits are low or exhausted.",
      "descVi": "Chạy kiểm tra quota trước khi sinh thiết kế và cảnh báo khi credit còn ít hoặc đã hết."
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
      "descEn": "Show the generated design preview and capture user feedback before spending redesign credits.",
      "descVi": "Hiển thị preview thiết kế và lấy phản hồi người dùng trước khi dùng credit redesign."
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
  "promptExamples": [
    {
      "labelEn": "Generate screen",
      "labelVi": "Sinh màn hình",
      "command": "/ak:stitch generate checkout page with payment form and cart summary",
      "whenEn": "You need quick high-fidelity UI exploration from a prompt.",
      "whenVi": "Cần khám phá UI chất lượng cao thật nhanh từ prompt.",
      "expectedEn": "Checks quota, generates a Stitch screen, and returns the screen ID plus preview.",
      "expectedVi": "Kiểm tra quota, sinh màn hình Stitch và trả screen ID cùng preview.",
      "recommended": true
    },
    {
      "labelEn": "Export design",
      "labelVi": "Export thiết kế",
      "command": "/ak:stitch export screen-123",
      "whenEn": "A generated screen should be handed to implementation.",
      "whenVi": "Một màn hình đã sinh cần được bàn giao để triển khai.",
      "expectedEn": "Exports HTML, image, and DESIGN.md for downstream UI work.",
      "expectedVi": "Export HTML, ảnh và DESIGN.md cho bước làm UI tiếp theo."
    },
    {
      "labelEn": "Quota check",
      "labelVi": "Kiểm tra quota",
      "command": "/ak:stitch quota",
      "whenEn": "Before generating variants or redesigns near the daily cap.",
      "whenVi": "Trước khi sinh variant hoặc redesign khi gần chạm quota ngày.",
      "expectedEn": "Reports remaining credits and suggests fallback if exhausted.",
      "expectedVi": "Báo credit còn lại và gợi ý fallback nếu đã hết."
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
      "descEn": "Tracks free daily credits and redesign credit limits.",
      "descVi": "Theo dõi credit miễn phí hằng ngày và giới hạn redesign.",
      "color": "amber"
    }
  ]
};

export default data;

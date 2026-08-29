import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-journal",
  "command": "/ak:journal",
  "kit": "marketer",
  "header": {
    "titleEn": "/ak:journal",
    "titleVi": "/ak:journal",
    "taglineEn": "Chronological technical journal for session reflection, root-cause history, changes, decisions, and next steps stored under plans/journals/.",
    "taglineVi": "Nhật ký kỹ thuật theo thời gian cho phản tư phiên làm việc, lịch sử nguyên nhân gốc, thay đổi, quyết định và bước tiếp theo trong plans/journals/."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Gather events",
      "titleVi": "Gom sự kiện",
      "descEn": "Collect root cause, key changes, impacts, decisions, and next steps from the current session.",
      "descVi": "Gom nguyên nhân gốc, thay đổi chính, tác động, quyết định và bước tiếp theo từ phiên hiện tại."
    },
    {
      "number": 2,
      "titleEn": "Draft concise entry",
      "titleVi": "Soạn entry ngắn",
      "descEn": "Write a short title and markdown body with concrete errors, paths, outcomes, and decisions.",
      "descVi": "Viết tiêu đề ngắn và thân markdown với lỗi, đường dẫn, kết quả và quyết định cụ thể."
    },
    {
      "number": 3,
      "titleEn": "Persist locally",
      "titleVi": "Lưu cục bộ",
      "descEn": "Use the first-class CLI: ak journal create with title, --summary, and stdin body.",
      "descVi": "Dùng CLI chính thức: ak journal create kèm tiêu đề, --summary và nội dung qua stdin."
    },
    {
      "number": 4,
      "titleEn": "Validate if needed",
      "titleVi": "Kiểm tra khi cần",
      "descEn": "Run ak journal validate for a slug or filename stem when validation matters.",
      "descVi": "Chạy ak journal validate với slug hoặc stem tên file khi cần kiểm tra."
    },
    {
      "number": 5,
      "titleEn": "Skip AgentWiki",
      "titleVi": "Bỏ qua AgentWiki",
      "descEn": "Publishing from this skill is deferred; report AgentWiki publish skipped and keep the local file as truth.",
      "descVi": "Publish từ skill này đang hoãn; báo AgentWiki publish skipped và giữ file local làm nguồn đúng."
    },
    {
      "number": 6,
      "titleEn": "Browse history",
      "titleVi": "Xem lịch sử",
      "descEn": "Use ak journal list/show or the dashboard Journals page to review existing entries.",
      "descVi": "Dùng ak journal list/show hoặc trang Journals trên dashboard để xem entry cũ."
    },
    {
      "number": 7,
      "titleEn": "Respect auto skip",
      "titleVi": "Tôn trọng tự động bỏ qua",
      "descEn": "Automatic journal steps honor --skip-journal and journal.auto precedence; explicit /ak:journal remains available.",
      "descVi": "Bước journal tự động tôn trọng --skip-journal và thứ tự journal.auto; /ak:journal gọi trực tiếp vẫn luôn dùng được."
    }
  ],
  "corePrinciplesEn": [
    "Journals preserve work history, not product authority",
    "Prefer concrete errors, paths, outcomes, and decisions",
    "Persist through ak journal create instead of editor flows",
    "Explicit journal creation is always available"
  ],
  "corePrinciplesVi": [
    "Journal lưu lịch sử công việc, không thay tài liệu sản phẩm có thẩm quyền",
    "Ưu tiên lỗi, path, kết quả và quyết định cụ thể",
    "Lưu bằng ak journal create thay vì luồng mở editor",
    "Tạo journal trực tiếp luôn khả dụng"
  ],
  "expertiseAreasEn": [
    "Session reflection",
    "Change analysis",
    "Decision chronology",
    "Local journal persistence",
    "Optional social publishing preparation"
  ],
  "expertiseAreasVi": [
    "Phản tư phiên làm việc",
    "Phân tích thay đổi",
    "Trình tự quyết định",
    "Lưu journal cục bộ",
    "Chuẩn bị nội dung social nếu cần"
  ],
  "promptExamples": [
    {
      "labelEn": "Session reflection",
      "labelVi": "Phản tư phiên",
      "command": "/ak:journal summarize today's checkout refactor and remaining risks",
      "whenEn": "You want a durable chronological record after implementation or debugging.",
      "whenVi": "Khi cần bản ghi theo thời gian sau khi triển khai hoặc sửa lỗi.",
      "expectedEn": "Creates a concise journal entry under plans/journals/ with title, summary, and markdown body.",
      "expectedVi": "Tạo entry ngắn trong plans/journals/ với tiêu đề, summary và thân markdown.",
      "recommended": true
    },
    {
      "labelEn": "Focused topic",
      "labelVi": "Chủ đề hẹp",
      "command": "/ak:journal root cause and fix path for the Stripe webhook failure",
      "whenEn": "A narrow incident or bug fix needs historical context.",
      "whenVi": "Khi một incident hoặc bug fix hẹp cần lưu bối cảnh lịch sử.",
      "expectedEn": "Captures root cause, fix, impact, and next steps without replacing ADRs or current docs.",
      "expectedVi": "Ghi nguyên nhân gốc, cách sửa, tác động và bước tiếp theo mà không thay ADR hay docs hiện hành."
    }
  ],
  "reportOutput": {
    "titleEn": "Chronological journal entry",
    "titleVi": "Entry nhật ký theo thời gian",
    "patternEn": "YYYY-MM-DD-<slug>.md with collision suffixes",
    "patternVi": "YYYY-MM-DD-<slug>.md có hậu tố chống trùng",
    "locationEn": "plans/journals/",
    "locationVi": "plans/journals/",
    "descEn": "What happened • decisions • next steps • concrete paths and outcomes",
    "descVi": "Chuyện đã xảy ra • quyết định • bước tiếp theo • path và kết quả cụ thể"
  }
};

export default data;

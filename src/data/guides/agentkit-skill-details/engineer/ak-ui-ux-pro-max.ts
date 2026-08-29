import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-ui-ux-pro-max",
  "command": "/ak:ui-ux-pro-max",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:ui-ux-pro-max — UI/UX Design Intelligence",
    "titleVi": "/ak:ui-ux-pro-max — Trí tuệ thiết kế UI/UX",
    "taglineEn": "Provides searchable UI/UX guidance for product type, style, palettes, typography, landing structure, charts, accessibility, interaction, responsive behavior, mobile app polish, and stack-specific implementation.",
    "taglineVi": "Cung cấp hướng dẫn UI/UX có thể tìm kiếm cho product type, style, palette, typography, cấu trúc landing, chart, accessibility, tương tác, responsive, độ polish app mobile và triển khai theo stack."
  },
  "hardGate": {
    "type": "critical",
    "titleEn": "Critical UX checks before delivery",
    "titleVi": "Kiểm UX nghiêm trọng trước bàn giao",
    "contentEn": "For interface work, verify accessibility, touch/interaction, performance, layout/responsive, contrast, safe areas, reduced motion, and dynamic text; do not deliver UI quality based on appearance alone.",
    "contentVi": "Với việc liên quan giao diện, phải kiểm accessibility, touch/interaction, hiệu năng, layout/responsive, contrast, safe area, reduced motion và dynamic text; không bàn giao chất lượng UI chỉ dựa vào vẻ ngoài."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Decide activation",
      "titleVi": "Quyết định kích hoạt",
      "descEn": "Use the skill when work changes how an interface looks, feels, moves, is structured, or is interacted with.",
      "descVi": "Dùng skill khi công việc thay đổi cách giao diện nhìn, cảm, chuyển động, có cấu trúc hoặc được tương tác."
    },
    {
      "number": 2,
      "titleEn": "Analyze requirements",
      "titleVi": "Phân tích yêu cầu",
      "descEn": "Extract product type, target audience, usage context, style keywords, platform, and stack.",
      "descVi": "Rút ra product type, đối tượng dùng, bối cảnh sử dụng, từ khóa style, nền tảng và stack."
    },
    {
      "number": 3,
      "titleEn": "Generate design system",
      "titleVi": "Sinh design system",
      "descEn": "Start with the design-system search to combine product, style, color, landing, typography, reasoning rules, and anti-patterns.",
      "descVi": "Bắt đầu bằng tìm kiếm design-system để kết hợp product, style, màu, landing, typography, luật suy luận và anti-pattern."
    },
    {
      "number": 4,
      "titleEn": "Persist hierarchy",
      "titleVi": "Lưu phân cấp",
      "descEn": "When continuity matters, persist MASTER.md and optional page overrides; page files override Master for that page.",
      "descVi": "Khi cần dùng lâu dài, lưu MASTER.md và override theo page nếu có; file page sẽ ưu tiên hơn Master cho page đó."
    },
    {
      "number": 5,
      "titleEn": "Deep-search domains",
      "titleVi": "Tìm sâu theo domain",
      "descEn": "Query product, style, color, typography, chart, UX, google-fonts, landing, react, web, or prompt domains for specific decisions.",
      "descVi": "Truy vấn các domain product, style, color, typography, chart, UX, google-fonts, landing, react, web hoặc prompt cho từng quyết định cụ thể."
    },
    {
      "number": 6,
      "titleEn": "Apply stack guidance",
      "titleVi": "Áp dụng theo stack",
      "descEn": "Use stack-specific guidance such as React Native navigation, list performance, accessibility labels, touch targets, and safe areas.",
      "descVi": "Dùng hướng dẫn theo stack như điều hướng React Native, hiệu năng list, accessibility label, vùng chạm và safe area."
    },
    {
      "number": 7,
      "titleEn": "Implement with rules",
      "titleVi": "Triển khai theo luật",
      "descEn": "Apply priority rules for accessibility, touch, performance, style, layout, typography, animation, forms, navigation, and charts.",
      "descVi": "Áp dụng luật ưu tiên cho accessibility, touch, hiệu năng, style, layout, typography, animation, form, navigation và chart."
    },
    {
      "number": 8,
      "titleEn": "Pre-delivery review",
      "titleVi": "Review trước bàn giao",
      "descEn": "Run UX validation plus critical/high checklist items across small phone, landscape, dark mode, reduced motion, and large dynamic text.",
      "descVi": "Chạy validation UX và các mục critical/high trên điện thoại nhỏ, landscape, dark mode, reduced motion và dynamic text lớn."
    }
  ],
  "corePrinciplesEn": [
    "If it looks, feels, moves, or is interacted with, UI/UX rules apply",
    "Start from a complete design system, then deep-dive domains",
    "Accessibility and touch rules are critical, not polish",
    "Semantic tokens beat raw per-screen hex values"
  ],
  "corePrinciplesVi": [
    "Nếu giao diện được nhìn, cảm, chuyển động hoặc tương tác, luật UI/UX phải được áp dụng",
    "Bắt đầu từ design system đầy đủ rồi mới đào sâu từng domain",
    "Accessibility và touch là yêu cầu nghiêm trọng, không phải polish",
    "Token ngữ nghĩa tốt hơn màu hex rải rác theo từng màn"
  ],
  "expertiseAreasEn": [
    "accessibility",
    "touch interaction",
    "responsive layout",
    "color and typography",
    "animation",
    "forms",
    "navigation",
    "charts",
    "React Native UX"
  ],
  "expertiseAreasVi": [
    "accessibility",
    "tương tác chạm",
    "layout responsive",
    "màu và typography",
    "animation",
    "form",
    "navigation",
    "chart",
    "UX React Native"
  ],
  "promptExamples": [
    {
      "labelEn": "Design a product page",
      "labelVi": "Thiết kế trang sản phẩm",
      "command": "/ak:ui-ux-pro-max design a fintech dashboard with dark mode",
      "whenEn": "A new page needs product-fit style, palette, typography, layout, and anti-pattern guidance.",
      "whenVi": "Trang mới cần style hợp sản phẩm, palette, typography, layout và hướng dẫn anti-pattern.",
      "expectedEn": "Starts with design-system reasoning and returns implementable UI/UX rules.",
      "expectedVi": "Bắt đầu bằng suy luận design-system và trả luật UI/UX có thể triển khai.",
      "recommended": true
    },
    {
      "labelEn": "Review UI quality",
      "labelVi": "Review chất lượng UI",
      "command": "/ak:ui-ux-pro-max review this checkout page for accessibility and trust",
      "whenEn": "An existing interface needs UX, accessibility, hierarchy, and conversion review.",
      "whenVi": "Giao diện hiện có cần review UX, accessibility, phân cấp và độ tin cậy chuyển đổi.",
      "expectedEn": "Checks priority categories and reports concrete issues plus fixes.",
      "expectedVi": "Kiểm các nhóm ưu tiên và báo lỗi cụ thể kèm cách sửa."
    },
    {
      "labelEn": "Improve mobile app polish",
      "labelVi": "Nâng polish app mobile",
      "command": "/ak:ui-ux-pro-max improve the React Native onboarding flow",
      "whenEn": "Mobile interaction, safe areas, touch targets, motion, or dynamic text may be weak.",
      "whenVi": "Tương tác mobile, safe area, vùng chạm, motion hoặc dynamic text có thể chưa tốt.",
      "expectedEn": "Uses app-specific checklists for visual quality, interaction, contrast, layout, and accessibility.",
      "expectedVi": "Dùng checklist app cho chất lượng visual, tương tác, contrast, layout và accessibility."
    },
    {
      "labelEn": "Chart guidance",
      "labelVi": "Hướng dẫn chart",
      "command": "/ak:ui-ux-pro-max recommend charts for realtime analytics",
      "whenEn": "A data-heavy screen needs readable, accessible chart choices.",
      "whenVi": "Màn hình nhiều dữ liệu cần chọn chart dễ đọc và accessible.",
      "expectedEn": "Matches chart types to data tasks and includes legend, tooltip, keyboard, contrast, and empty/error state rules.",
      "expectedVi": "Ghép loại chart với nhiệm vụ dữ liệu và kèm luật legend, tooltip, keyboard, contrast, empty/error state."
    }
  ],
  "modeCards": [
    {
      "flag": "design-system",
      "titleEn": "Design system first",
      "titleVi": "Design system trước",
      "descEn": "Combines product, style, color, landing, typography, reasoning, and anti-patterns into one source of truth.",
      "descVi": "Kết hợp product, style, màu, landing, typography, suy luận và anti-pattern thành một nguồn chuẩn.",
      "promptEn": "Design a wellness booking app",
      "promptVi": "Thiết kế app đặt lịch wellness",
      "whenEn": "Starting a new page or product area.",
      "whenVi": "Khi bắt đầu trang hoặc khu vực sản phẩm mới.",
      "expectedEn": "A complete pattern, style, color, typography, and effects recommendation.",
      "expectedVi": "Khuyến nghị đầy đủ về pattern, style, màu, typography và effect.",
      "accent": "purple"
    },
    {
      "flag": "domain-search",
      "titleEn": "Domain deep dive",
      "titleVi": "Đào sâu domain",
      "descEn": "Targets one dimension such as accessibility, animation, chart, typography, color, product, or React Native implementation.",
      "descVi": "Tập trung vào một chiều như accessibility, animation, chart, typography, màu, product hoặc triển khai React Native.",
      "promptEn": "Check animation accessibility z-index loading",
      "promptVi": "Kiểm animation accessibility z-index loading",
      "whenEn": "A specific UX decision needs more detail.",
      "whenVi": "Khi một quyết định UX cụ thể cần thêm chi tiết.",
      "expectedEn": "Focused rules and anti-patterns for that dimension.",
      "expectedVi": "Luật và anti-pattern tập trung cho chiều đó.",
      "accent": "blue"
    }
  ]
};

export default data;

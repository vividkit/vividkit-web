import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-ui-ux-pro-max",
  "command": "/ak:ui-ux-pro-max",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:ui-ux-pro-max — UI/UX Design Intelligence",
    "titleVi": "/ak:ui-ux-pro-max — Trí tuệ thiết kế UI/UX",
    "taglineEn": "Provides searchable, packaged UI/UX design intelligence for product fit, style, color palettes, typography, landing structure, charts, accessibility, interaction, responsive behavior, app polish, and React Native stack guidance.",
    "taglineVi": "Cung cấp trí tuệ thiết kế UI/UX đóng gói, có thể tìm kiếm cho độ hợp product, style, palette màu, typography, cấu trúc landing, chart, accessibility, tương tác, responsive, polish app và hướng dẫn stack React Native."
  },
  "invocation": {
    "syntax": "/ak:ui-ux-pro-max [UI/UX task brief]",
    "arguments": [
      {
        "token": "[UI/UX task brief]",
        "titleEn": "UI/UX task brief",
        "titleVi": "Brief tác vụ UI/UX",
        "descEn": "Optional natural-language brief describing the visible experience to design, review, fix, improve, or turn into a design system. Include product type, audience, stack, page or component, style keywords, constraints, and desired artifact when known.",
        "descVi": "Brief ngôn ngữ tự nhiên tùy chọn mô tả trải nghiệm hiển thị cần thiết kế, review, sửa, cải thiện hoặc chuyển thành design system. Nên nêu loại sản phẩm, người dùng, stack, page hoặc component, từ khóa phong cách, ràng buộc và artifact mong muốn khi biết.",
        "required": false,
        "exampleCommand": "/ak:ui-ux-pro-max design an accessible mobile-first checkout system for a subscription app with dark mode"
      }
    ]
  },
  "hardGate": {
    "type": "warning",
    "titleEn": "Pre-delivery checklist, not a visual-only pass",
    "titleVi": "Checklist trước bàn giao, không chỉ nhìn bằng mắt",
    "contentEn": "Before delivering UI code, verify visual quality, interaction, light/dark contrast, layout, accessibility, touch targets, safe areas, reduced motion, and dynamic text; a palette or style recommendation is not proof.",
    "contentVi": "Trước khi bàn giao UI code, kiểm visual quality, interaction, contrast light/dark, layout, accessibility, vùng chạm, safe area, reduced motion và dynamic text; palette hoặc style recommendation chưa phải bằng chứng."
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
      "labelEn": "Generate a design system",
      "labelVi": "Sinh design system",
      "command": "/ak:ui-ux-pro-max design an accessible mobile-first checkout system for a subscription app with dark mode, reduced motion, and implementation-ready tokens",
      "whenEn": "Use when a new page or product area needs reasoned style, palette, typography, layout, states, and anti-pattern guidance before code.",
      "whenVi": "Dùng khi trang mới hoặc khu vực product cần style, palette, typography, layout, state và anti-pattern có lý do trước khi viết code.",
      "expectedEn": "Frames product context, starts from the bundled design-system search, and returns selected plus rejected directions, semantic tokens, type and spacing scales, responsive rules, component states, and accessibility requirements.",
      "expectedVi": "Định khung product context, bắt đầu từ search design-system đóng gói, rồi trả hướng được chọn và bị loại, token ngữ nghĩa, thang type/spacing, luật responsive, state component và yêu cầu accessibility.",
      "recommended": true
    },
    {
      "labelEn": "Review an existing UI",
      "labelVi": "Review UI hiện có",
      "command": "/ak:ui-ux-pro-max review this checkout page for accessibility, trust, loading, error, empty states, and mobile interaction",
      "whenEn": "Use when an existing page, component, navigation pattern, form, animation, or mobile interaction needs prioritized UX and accessibility review.",
      "whenVi": "Dùng khi page, component, navigation pattern, form, animation hoặc mobile interaction hiện có cần review UX và accessibility theo mức ưu tiên.",
      "expectedEn": "Applies the priority categories from accessibility and touch through performance, layout, forms, navigation, and charts, then reports concrete anti-patterns, fixes, and evidence still needed.",
      "expectedVi": "Áp dụng các nhóm ưu tiên từ accessibility và touch đến performance, layout, form, navigation và chart, rồi báo anti-pattern cụ thể, cách sửa và bằng chứng còn cần kiểm."
    },
    {
      "labelEn": "Persist approved rules",
      "labelVi": "Lưu rule đã duyệt",
      "command": "/ak:ui-ux-pro-max create a master design system for a wellness booking app and add page-specific checkout overrides",
      "whenEn": "Use when a project needs a reusable master design system and page-specific exceptions instead of one-off terminal guidance.",
      "whenVi": "Dùng khi project cần master design system có thể tái dùng và ngoại lệ theo page thay vì hướng dẫn terminal một lần.",
      "expectedEn": "Uses the persist workflow only for approved rules, explains the MASTER.md plus pages override hierarchy, and calls out names, paths, tokens, and migration risks before writing.",
      "expectedVi": "Chỉ dùng workflow persist cho rule đã duyệt, giải thích phân cấp MASTER.md và override trong pages, đồng thời nêu tên, path, token và rủi ro migration trước khi ghi."
    },
    {
      "labelEn": "Choose chart guidance",
      "labelVi": "Chọn hướng chart",
      "command": "/ak:ui-ux-pro-max recommend accessible charts for realtime analytics with keyboard tooltips, legends, empty states, and failure states",
      "whenEn": "Use when a data-heavy screen needs chart types matched to user tasks, device constraints, and accessibility requirements.",
      "whenVi": "Dùng khi màn hình nhiều dữ liệu cần loại chart khớp task của user, ràng buộc thiết bị và yêu cầu accessibility.",
      "expectedEn": "Matches chart types to trend, comparison, proportion, or funnel tasks and includes responsive simplification, legends, tooltips, keyboard reachability, contrast, table or text alternatives, and error handling.",
      "expectedVi": "Ghép loại chart với task trend, comparison, proportion hoặc funnel và kèm giản lược responsive, legend, tooltip, khả năng dùng bằng keyboard, contrast, bảng hoặc text thay thế và xử lý lỗi."
    }
  ],
  "specialOperations": [
    {
      "id": "bundled-cli-design-system",
      "titleEn": "Bundled CLI design-system search",
      "titleVi": "Search design-system của CLI đóng gói",
      "descEn": "The Skill has no documented top-level mode flags. Its bundled search CLI can combine packaged product, style, color, landing, typography, and reasoning data for a baseline recommendation.",
      "descVi": "Skill không có mode flag top-level được tài liệu hóa. CLI search đi kèm có thể kết hợp dữ liệu product, style, màu, landing, typography và reasoning đóng gói để tạo khuyến nghị baseline.",
      "color": "purple"
    },
    {
      "id": "bundled-cli-domain-search",
      "titleEn": "Bundled CLI focused domains",
      "titleVi": "Domain tập trung của CLI đóng gói",
      "descEn": "Focused searches belong to the packaged CLI datasets such as style, color, typography, chart, ux, react, or web; use them as point-in-time guidance, not live standards.",
      "descVi": "Search tập trung thuộc các dataset CLI đóng gói như style, color, typography, chart, ux, react hoặc web; dùng chúng như hướng dẫn tại một thời điểm, không phải chuẩn live.",
      "color": "blue"
    },
    {
      "id": "bundled-cli-persistence",
      "titleEn": "Approved persistence only",
      "titleVi": "Chỉ persist khi đã duyệt",
      "descEn": "The bundled CLI can persist an approved master design system and page overrides under design-system; review names, paths, tokens, and migration impact before writing.",
      "descVi": "CLI đóng gói có thể persist master design system đã duyệt và override theo page dưới design-system; review tên, path, token và ảnh hưởng migration trước khi ghi.",
      "color": "green"
    },
    {
      "id": "bundled-cli-react-native",
      "titleEn": "React Native dataset boundary",
      "titleVi": "Ranh giới dataset React Native",
      "descEn": "React Native is the only packaged stack-specific dataset in the bundled CLI. Do not infer support for undocumented stacks from the Skill description.",
      "descVi": "React Native là dataset stack-specific duy nhất trong CLI đóng gói. Không suy diễn hỗ trợ các stack chưa được tài liệu hóa từ mô tả Skill.",
      "color": "orange"
    }
  ]
};

export default data;

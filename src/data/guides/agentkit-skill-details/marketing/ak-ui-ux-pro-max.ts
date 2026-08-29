import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-ui-ux-pro-max",
  "command": "/ak:ui-ux-pro-max",
  "kit": "marketer",
  "header": {
    "titleEn": "/ak:ui-ux-pro-max",
    "titleVi": "/ak:ui-ux-pro-max",
    "taglineEn": "Design intelligence for product UI: style systems, color, type, layout, accessibility, interaction states, responsive behavior, forms, charts, and app review.",
    "taglineVi": "Trí tuệ thiết kế cho UI sản phẩm: hệ style, màu, chữ, layout, accessibility, trạng thái tương tác, responsive, form, chart và review app."
  },
  "hardGate": {
    "type": "warning",
    "titleEn": "Use for visible experience changes",
    "titleVi": "Dùng khi trải nghiệm nhìn/thao tác thay đổi",
    "contentEn": "Must be invoked for new pages, components, UI refactors, color/type/layout choices, UX/accessibility review, navigation, animation, responsive work, or product-level design decisions. Skip pure backend, API, infra, or non-visual automation.",
    "contentVi": "Bắt buộc dùng cho page mới, component mới, refactor UI, chọn màu/chữ/layout, review UX/accessibility, navigation, animation, responsive hoặc quyết định thiết kế cấp sản phẩm. Bỏ qua backend thuần, API, hạ tầng hoặc automation không có phần nhìn."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Classify request",
      "titleVi": "Phân loại yêu cầu",
      "descEn": "Confirm the task changes how a feature looks, feels, moves, or is interacted with; otherwise skip this skill.",
      "descVi": "Xác nhận tác vụ làm thay đổi cách tính năng trông, cảm nhận, chuyển động hoặc được thao tác; nếu không thì bỏ qua skill."
    },
    {
      "number": 2,
      "titleEn": "Extract needs",
      "titleVi": "Trích nhu cầu",
      "descEn": "Capture product type, target audience, usage context, style keywords, and stack before choosing design rules.",
      "descVi": "Ghi lại loại sản phẩm, người dùng mục tiêu, bối cảnh sử dụng, từ khóa phong cách và stack trước khi chọn luật thiết kế."
    },
    {
      "number": 3,
      "titleEn": "Design system",
      "titleVi": "Tạo design system",
      "descEn": "Start from a design-system search to combine product, style, color, landing, typography, effects, and anti-pattern reasoning.",
      "descVi": "Bắt đầu bằng tìm kiếm design-system để kết hợp product, style, color, landing, typography, effect và reasoning về anti-pattern."
    },
    {
      "number": 4,
      "titleEn": "Persist if needed",
      "titleVi": "Lưu nếu cần",
      "descEn": "When cross-session consistency matters, persist a master design system and page-level overrides for hierarchical retrieval.",
      "descVi": "Khi cần nhất quán qua nhiều phiên, lưu master design system và override theo page để truy xuất phân cấp."
    },
    {
      "number": 5,
      "titleEn": "Deep search",
      "titleVi": "Tìm sâu",
      "descEn": "Use domain searches for product, style, typography, color, landing, chart, UX, React, web, or prompt details.",
      "descVi": "Dùng tìm kiếm theo domain cho product, style, typography, color, landing, chart, UX, React, web hoặc prompt chi tiết."
    },
    {
      "number": 6,
      "titleEn": "Stack rules",
      "titleVi": "Luật theo stack",
      "descEn": "Add React Native implementation guidance for components, navigation, and lists when building app UI.",
      "descVi": "Bổ sung hướng dẫn React Native cho component, navigation và list khi làm UI app."
    },
    {
      "number": 7,
      "titleEn": "Review priorities",
      "titleVi": "Review ưu tiên",
      "descEn": "Apply rule priority 1→10: accessibility and touch first, then performance, style, layout, typography, motion, forms, nav, charts.",
      "descVi": "Áp dụng ưu tiên 1→10: accessibility và touch trước, rồi performance, style, layout, typography, motion, form, navigation, chart."
    },
    {
      "number": 8,
      "titleEn": "Pre-deliver",
      "titleVi": "Kiểm trước bàn giao",
      "descEn": "Before delivery, verify critical/high checks: contrast, touch targets, small phone, landscape, reduced motion, Dynamic Type, dark mode, and safe areas.",
      "descVi": "Trước khi bàn giao, kiểm các mục critical/high: contrast, touch target, phone nhỏ, landscape, reduced motion, Dynamic Type, dark mode và safe area."
    }
  ],
  "corePrinciplesEn": [
    "Design system first, detail searches second.",
    "Accessibility and touch interaction outrank decorative style.",
    "Professional UI depends on semantic tokens, vector assets, stable states, and consistent spacing.",
    "Review both light and dark modes; never infer one from the other."
  ],
  "corePrinciplesVi": [
    "Design system trước, tìm chi tiết sau.",
    "Accessibility và touch interaction ưu tiên cao hơn style trang trí.",
    "UI chuyên nghiệp dựa trên token ngữ nghĩa, asset vector, state ổn định và spacing nhất quán.",
    "Review cả light và dark mode; không suy đoán theme này từ theme kia."
  ],
  "expertiseAreasEn": [
    "Design systems and visual direction",
    "Accessibility and touch targets",
    "Responsive layout and safe areas",
    "Typography, color, and icon discipline",
    "Charts, forms, navigation, and motion review"
  ],
  "expertiseAreasVi": [
    "Design system và định hướng thị giác",
    "Accessibility và touch target",
    "Responsive layout và safe area",
    "Kỷ luật typography, màu và icon",
    "Review chart, form, navigation và motion"
  ],
  "skillStack": [
    {
      "name": "search.py",
      "type": "tool"
    },
    {
      "name": "ui-reasoning.csv",
      "type": "tool"
    },
    {
      "name": "React Native guidelines",
      "type": "tool"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "New landing page",
      "labelVi": "Landing page mới",
      "command": "/ak:ui-ux-pro-max build a SaaS landing page design system",
      "whenEn": "Use before creating a visible page or product UI direction.",
      "whenVi": "Dùng trước khi tạo page hiển thị hoặc định hướng UI sản phẩm.",
      "expectedEn": "Design-system recommendations with style, colors, typography, effects, and anti-patterns.",
      "expectedVi": "Khuyến nghị design-system gồm style, màu, typography, effect và anti-pattern.",
      "recommended": true
    },
    {
      "labelEn": "UI review",
      "labelVi": "Review UI",
      "command": "/ak:ui-ux-pro-max review this mobile app screen for accessibility and polish",
      "whenEn": "Use when the UI feels unprofessional or needs pre-launch review.",
      "whenVi": "Dùng khi UI chưa đủ chuyên nghiệp hoặc cần review trước launch.",
      "expectedEn": "Prioritized UX, accessibility, responsive, and visual-consistency findings.",
      "expectedVi": "Các phát hiện UX, accessibility, responsive và visual consistency theo mức ưu tiên."
    },
    {
      "labelEn": "Chart guidance",
      "labelVi": "Hướng dẫn chart",
      "command": "/ak:ui-ux-pro-max add an analytics dashboard chart",
      "whenEn": "Use when the task includes data visualization choices.",
      "whenVi": "Dùng khi tác vụ có lựa chọn trực quan hóa dữ liệu.",
      "expectedEn": "Chart type, legend, tooltip, color, accessibility, and responsive guidance.",
      "expectedVi": "Hướng dẫn loại chart, legend, tooltip, màu, accessibility và responsive."
    }
  ],
  "guardrails": [
    {
      "thoughtEn": "A polished style is enough.",
      "thoughtVi": "Style đẹp là đủ.",
      "realityEn": "Critical accessibility, touch, and performance issues rank higher than decoration.",
      "realityVi": "Accessibility, touch và performance cấp critical quan trọng hơn trang trí.",
      "accent": "red"
    },
    {
      "thoughtEn": "Dark mode will work if light mode works.",
      "thoughtVi": "Light mode ổn thì dark mode cũng ổn.",
      "realityEn": "Dark contrast, borders, state colors, and scrims must be checked independently.",
      "realityVi": "Contrast, border, màu state và scrim của dark mode phải được kiểm riêng.",
      "accent": "violet"
    },
    {
      "thoughtEn": "Emoji icons make the UI friendly.",
      "thoughtVi": "Icon emoji làm UI thân thiện.",
      "realityEn": "Structural icons should be consistent SVG/vector assets, not platform-dependent emoji.",
      "realityVi": "Icon cấu trúc nên là SVG/vector nhất quán, không dùng emoji phụ thuộc nền tảng.",
      "accent": "amber"
    }
  ]
};

export default data;

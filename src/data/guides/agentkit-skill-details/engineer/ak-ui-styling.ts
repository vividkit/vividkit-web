import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-ui-styling",
  "command": "/ak:ui-styling",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:ui-styling — shadcn/ui and Tailwind Styling",
    "titleVi": "/ak:ui-styling — Styling bằng shadcn/ui và Tailwind",
    "taglineEn": "Builds accessible React UI with shadcn/ui, Radix primitives, Tailwind utilities, themes, dark mode, responsive layouts, design tokens, canvas-quality visuals, and helper scripts.",
    "taglineVi": "Xây UI React accessible bằng shadcn/ui, primitive Radix, utility Tailwind, theme, dark mode, layout responsive, design token, visual chất lượng canvas và script hỗ trợ."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Confirm UI context",
      "titleVi": "Xác nhận ngữ cảnh UI",
      "descEn": "Use for React frameworks, accessible components, utility styling, responsive layouts, design systems, visual designs, tables, charts, or command palettes.",
      "descVi": "Dùng cho framework React, component accessible, styling bằng utility, layout responsive, design system, visual design, table, chart hoặc command palette."
    },
    {
      "number": 2,
      "titleEn": "Initialize stack",
      "titleVi": "Khởi tạo stack",
      "descEn": "Run shadcn init for component-plus-Tailwind setup, or configure Tailwind-only for projects that do not need shadcn components.",
      "descVi": "Chạy shadcn init cho thiết lập component + Tailwind, hoặc cấu hình Tailwind-only cho dự án không cần component shadcn."
    },
    {
      "number": 3,
      "titleEn": "Add components",
      "titleVi": "Thêm component",
      "descEn": "Use shadcn add or the helper script to install button, card, dialog, form, table, command, and other needed components.",
      "descVi": "Dùng shadcn add hoặc script hỗ trợ để cài button, card, dialog, form, table, command và component cần thiết."
    },
    {
      "number": 4,
      "titleEn": "Compose primitives",
      "titleVi": "Ghép primitive",
      "descEn": "Build complex UI from small, composable Radix/shadcn primitives rather than monolithic custom widgets.",
      "descVi": "Xây UI phức tạp từ các primitive Radix/shadcn nhỏ và ghép được thay vì widget custom nguyên khối."
    },
    {
      "number": 5,
      "titleEn": "Apply utilities",
      "titleVi": "Áp dụng utility",
      "descEn": "Use Tailwind classes for layout, spacing, typography, colors, borders, shadows, responsive variants, and dark mode.",
      "descVi": "Dùng class Tailwind cho layout, spacing, typography, màu, border, shadow, biến thể responsive và dark mode."
    },
    {
      "number": 6,
      "titleEn": "Customize theme",
      "titleVi": "Tùy biến theme",
      "descEn": "Define CSS variables, semantic tokens, palettes, fonts, variants, next-themes integration, and custom utilities.",
      "descVi": "Định nghĩa CSS variable, token ngữ nghĩa, palette, font, variant, tích hợp next-themes và utility tùy chỉnh."
    },
    {
      "number": 7,
      "titleEn": "Check accessibility",
      "titleVi": "Kiểm accessibility",
      "descEn": "Use Radix accessibility, semantic HTML, focus states, keyboard navigation, screen-reader support, and form validation patterns.",
      "descVi": "Dùng accessibility từ Radix, HTML semantic, focus state, điều hướng bàn phím, hỗ trợ screen reader và mẫu validation form."
    },
    {
      "number": 8,
      "titleEn": "Craft visual quality",
      "titleVi": "Nâng chất lượng visual",
      "descEn": "Apply visual hierarchy, consistent tokens, mobile-first responsiveness, dark-mode parity, performance-friendly classes, and canvas design principles.",
      "descVi": "Áp dụng phân cấp thị giác, token nhất quán, responsive mobile-first, tương đương dark mode, class thân thiện hiệu năng và nguyên tắc canvas design."
    }
  ],
  "corePrinciplesEn": [
    "Compose primitives before inventing custom components",
    "Use Tailwind utility classes directly; extract only for real repetition",
    "Design mobile-first and keep dark mode consistent",
    "Accessibility-first means keyboard, focus, labels, and screen-reader behavior"
  ],
  "corePrinciplesVi": [
    "Ghép primitive trước khi tự tạo component custom",
    "Dùng trực tiếp utility Tailwind; chỉ tách component khi lặp thật sự",
    "Thiết kế mobile-first và giữ dark mode nhất quán",
    "Accessibility-first nghĩa là đúng bàn phím, focus, label và screen reader"
  ],
  "expertiseAreasEn": [
    "shadcn/ui",
    "Radix UI",
    "Tailwind CSS",
    "themes",
    "dark mode",
    "responsive design",
    "forms",
    "visual systems"
  ],
  "expertiseAreasVi": [
    "shadcn/ui",
    "Radix UI",
    "Tailwind CSS",
    "theme",
    "dark mode",
    "responsive design",
    "form",
    "hệ visual"
  ],
  "promptExamples": [
    {
      "labelEn": "Accessible form",
      "labelVi": "Form accessible",
      "command": "/ak:ui-styling login form with validation and dark mode",
      "whenEn": "A React form needs shadcn components, Tailwind layout, and accessibility patterns.",
      "whenVi": "Một form React cần component shadcn, layout Tailwind và mẫu accessibility.",
      "expectedEn": "Uses Form/Input/Button composition, validation messages, focus management, responsive spacing, and dark classes.",
      "expectedVi": "Dùng Form/Input/Button, thông báo validation, quản lý focus, spacing responsive và class dark.",
      "recommended": true
    },
    {
      "labelEn": "Theme system",
      "labelVi": "Hệ theme",
      "command": "/ak:ui-styling dashboard theme tokens with next-themes",
      "whenEn": "The UI needs consistent colors, typography, variants, and light/dark behavior.",
      "whenVi": "UI cần màu, typography, variant và hành vi light/dark nhất quán.",
      "expectedEn": "Defines CSS variables, semantic tokens, theme toggle behavior, and component variants.",
      "expectedVi": "Định nghĩa CSS variable, token ngữ nghĩa, hành vi đổi theme và variant component."
    },
    {
      "labelEn": "Responsive layout",
      "labelVi": "Layout responsive",
      "command": "/ak:ui-styling responsive analytics cards and data table",
      "whenEn": "A page needs mobile-first grids, cards, tables, and visual hierarchy.",
      "whenVi": "Một trang cần grid mobile-first, card, table và phân cấp thị giác.",
      "expectedEn": "Builds composable cards/tables with Tailwind breakpoints and accessibility-friendly structure.",
      "expectedVi": "Dựng card/table ghép được với breakpoint Tailwind và cấu trúc thân thiện accessibility."
    }
  ],
  "skillStack": [
    {
      "name": "shadcn/ui",
      "type": "tool"
    },
    {
      "name": "Radix UI",
      "type": "tool"
    },
    {
      "name": "Tailwind CSS",
      "type": "tool"
    },
    {
      "name": "next-themes",
      "type": "tool"
    }
  ]
};

export default data;

import type { SkillInfographic, SkillInvocation } from '@/data/guides/how-ck-works';

const invocation: SkillInvocation = {
  syntax: '/ak:ui-styling [component or layout]',
  arguments: [
    {
      token: '[component or layout]',
      titleEn: 'UI surface or styling request',
      titleVi: 'Bề mặt UI hoặc yêu cầu styling',
      descEn:
        'Component, page, layout, visual artifact, theme, token, responsive behavior, accessibility state, and file boundary to implement or refine. Include protected files, package-change approval, target breakpoints, light/dark expectations, and the checks that prove the UI works.',
      descVi:
        'Component, page, layout, visual artifact, theme, token, hành vi responsive, trạng thái accessibility và ranh giới tệp cần triển khai hoặc tinh chỉnh. Nêu tệp được bảo vệ, quyền đổi package, breakpoint mục tiêu, kỳ vọng light/dark và check chứng minh UI hoạt động.',
      required: true,
      exampleCommand:
        '/ak:ui-styling "Add an accessible account dialog using existing tokens; preserve components.json, support keyboard focus and reduced motion, test light/dark at mobile and desktop, and do not overwrite existing UI files"',
    },
  ],
};

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
  "invocation": invocation,
  "promptExamples": [
    {
      "labelEn": "Accessible dialog form",
      "labelVi": "Form dialog accessible",
      "command": "/ak:ui-styling build an accessible account dialog form with validation, focus return, dark mode, and mobile layout",
      "whenEn": "A React UI needs shadcn/Radix form and dialog primitives styled with Tailwind utilities.",
      "whenVi": "UI React cần primitive form và dialog shadcn/Radix được style bằng utility Tailwind.",
      "expectedEn": "Selects shadcn components, composes Form/Input/Button/Dialog patterns, adds validation messages, keyboard focus behavior, responsive spacing, and dark-mode classes.",
      "expectedVi": "Chọn component shadcn, ghép mẫu Form/Input/Button/Dialog, thêm thông báo validation, hành vi focus bằng bàn phím, spacing responsive và class dark mode.",
      "recommended": true
    },
    {
      "labelEn": "Theme tokens",
      "labelVi": "Token theme",
      "command": "/ak:ui-styling customize dashboard theme tokens, color palette, typography, component variants, and a theme toggle",
      "whenEn": "An interface needs consistent theme customization across colors, fonts, variants, and light/dark behavior.",
      "whenVi": "Giao diện cần tùy biến theme nhất quán cho màu, font, variant và hành vi light/dark.",
      "expectedEn": "Uses the theme guidance to define CSS variables and semantic tokens, wire dark-mode behavior, and keep component variants aligned with the design system.",
      "expectedVi": "Dùng hướng dẫn theme để định nghĩa CSS variable và token ngữ nghĩa, nối hành vi dark mode và giữ variant component khớp design system."
    },
    {
      "labelEn": "Responsive data UI",
      "labelVi": "UI dữ liệu responsive",
      "command": "/ak:ui-styling create responsive analytics cards, a data table, loading states, and command palette styling",
      "whenEn": "A data-heavy screen needs mobile-first Tailwind layout, shadcn display components, and visual hierarchy.",
      "whenVi": "Màn hình nhiều dữ liệu cần layout Tailwind mobile-first, component hiển thị shadcn và phân cấp thị giác.",
      "expectedEn": "Builds cards, tables, and command patterns from composable primitives with Tailwind breakpoints, state styling, accessible structure, and dark-mode parity.",
      "expectedVi": "Dựng card, table và command pattern từ primitive ghép được với breakpoint Tailwind, styling theo state, cấu trúc accessible và dark mode tương đương."
    },
    {
      "labelEn": "Canvas visual system",
      "labelVi": "Hệ visual canvas",
      "command": "/ak:ui-styling design a canvas-based launch poster system with minimal text, refined composition, and reusable visual tokens",
      "whenEn": "The task asks for a polished visual design, poster, brand material, or prototype with immediate visual feedback.",
      "whenVi": "Task cần visual design, poster, brand material hoặc prototype polished với phản hồi visual nhanh.",
      "expectedEn": "Applies the canvas design-system references for philosophy-driven composition, color and spatial systems, minimal text, and presentation-quality visual output.",
      "expectedVi": "Áp dụng reference canvas design-system cho bố cục theo triết lý, hệ màu và không gian, ít chữ và output visual chất lượng trình bày."
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

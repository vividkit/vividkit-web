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
    "syntax": "/ak:ui-ux-pro-max [component|page|design-system] [--style <style>] [--framework <fw>]",
    "arguments": [
      {
        "token": "[component|page|design-system]",
        "titleEn": "UI target",
        "titleVi": "Đối tượng UI",
        "descEn": "Optional target: one component, one page, or a reusable design-system. Omit it to analyze the visible experience from the surrounding brief.",
        "descVi": "Đối tượng tùy chọn: một component, một page, hoặc design-system tái dùng. Bỏ qua để phân tích trải nghiệm hiển thị từ brief xung quanh.",
        "required": false,
        "exampleCommand": "/ak:ui-ux-pro-max page",
        "exampleCommandVi": "/ak:ui-ux-pro-max page"
      }
    ],
    "options": [
      {
        "token": "--style <style>",
        "titleEn": "Style keyword",
        "titleVi": "Từ khóa style",
        "descEn": "Bias packaged style search toward a named look such as minimal, dark-mode, or glassmorphism. It does not skip accessibility or touch checks.",
        "descVi": "Thiên search style đóng gói về một look đã nêu như minimal, dark-mode hoặc glassmorphism. Không bỏ kiểm accessibility hay touch.",
        "exampleCommand": "/ak:ui-ux-pro-max --style dark-mode",
        "exampleCommandVi": "/ak:ui-ux-pro-max --style dark-mode"
      },
      {
        "token": "--framework <fw>",
        "titleEn": "Framework",
        "titleVi": "Framework",
        "descEn": "Prefer stack guidance for a named framework such as react, nextjs, vue, or react-native. It does not invent undocumented stacks.",
        "descVi": "Ưu tiên hướng dẫn stack cho framework đã nêu như react, nextjs, vue hoặc react-native. Không bịa stack chưa được tài liệu hóa.",
        "exampleCommand": "/ak:ui-ux-pro-max --framework react",
        "exampleCommandVi": "/ak:ui-ux-pro-max --framework react"
      }
    ],
    "subcommands": [
      {
        "name": "component",
        "syntax": "/ak:ui-ux-pro-max component [--style <style>] [--framework <fw>]",
        "titleEn": "Component",
        "titleVi": "Component",
        "descEn": "Design or review one UI component: states, tokens, interaction, and accessibility.",
        "descVi": "Thiết kế hoặc review một UI component: state, token, tương tác và accessibility.",
        "options": [
          { "token": "--style <style>", "titleEn": "Style keyword", "titleVi": "Từ khóa style", "descEn": "Bias the component recommendation toward a named style.", "descVi": "Thiên khuyến nghị component về một style đã nêu." },
          { "token": "--framework <fw>", "titleEn": "Framework", "titleVi": "Framework", "descEn": "Prefer component patterns for the named framework.", "descVi": "Ưu tiên pattern component cho framework đã nêu." }
        ],
        "outcomeEn": "Component-level tokens, states, anti-patterns, and accessibility requirements before code.",
        "outcomeVi": "Token, state, anti-pattern và yêu cầu accessibility cấp component trước khi viết code.",
        "exampleCommand": "/ak:ui-ux-pro-max component",
        "exampleCommandVi": "/ak:ui-ux-pro-max component"
      },
      {
        "name": "page",
        "syntax": "/ak:ui-ux-pro-max page [--style <style>] [--framework <fw>]",
        "titleEn": "Page",
        "titleVi": "Page",
        "descEn": "Design or review one page: hierarchy, responsive layout, states, and interaction.",
        "descVi": "Thiết kế hoặc review một page: hierarchy, layout responsive, state và tương tác.",
        "options": [
          { "token": "--style <style>", "titleEn": "Style keyword", "titleVi": "Từ khóa style", "descEn": "Bias page look and density toward a named style.", "descVi": "Thiên look và mật độ page về một style đã nêu." },
          { "token": "--framework <fw>", "titleEn": "Framework", "titleVi": "Framework", "descEn": "Prefer page patterns for the named framework.", "descVi": "Ưu tiên pattern page cho framework đã nêu." }
        ],
        "outcomeEn": "Page structure, responsive rules, component states, and a pre-delivery checklist for that screen.",
        "outcomeVi": "Cấu trúc page, luật responsive, state component và checklist trước bàn giao cho màn đó.",
        "exampleCommand": "/ak:ui-ux-pro-max page",
        "exampleCommandVi": "/ak:ui-ux-pro-max page"
      },
      {
        "name": "design-system",
        "syntax": "/ak:ui-ux-pro-max design-system [--style <style>] [--framework <fw>]",
        "titleEn": "Design system",
        "titleVi": "Design system",
        "descEn": "Generate a reasoned baseline: product fit, style, color, typography, layout, and anti-patterns.",
        "descVi": "Sinh baseline có lý do: độ hợp product, style, màu, typography, layout và anti-pattern.",
        "options": [
          { "token": "--style <style>", "titleEn": "Style keyword", "titleVi": "Từ khóa style", "descEn": "Bias the system search toward a named style family.", "descVi": "Thiên search hệ thống về một họ style đã nêu." },
          { "token": "--framework <fw>", "titleEn": "Framework", "titleVi": "Framework", "descEn": "Prefer token and component guidance for the named framework.", "descVi": "Ưu tiên hướng dẫn token và component cho framework đã nêu." }
        ],
        "outcomeEn": "Selected and rejected directions, semantic tokens, type and spacing scales, and accessibility requirements.",
        "outcomeVi": "Hướng được chọn và bị loại, token ngữ nghĩa, thang type/spacing và yêu cầu accessibility.",
        "exampleCommand": "/ak:ui-ux-pro-max design-system",
        "exampleCommandVi": "/ak:ui-ux-pro-max design-system"
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
      "labelEn": "Default design brief",
      "labelVi": "Brief thiết kế mặc định",
      "command": "/ak:ui-ux-pro-max",
      "whenEn": "A visible experience needs style, tokens, and accessibility guidance before writing UI code.",
      "whenVi": "Một trải nghiệm hiển thị cần hướng dẫn style, token và accessibility trước khi viết UI code.",
      "expectedEn": "Analyzes product context from nearby work, starts from packaged design intelligence, and returns selected directions, semantic tokens, states, and a pre-delivery accessibility checklist.",
      "expectedVi": "Phân tích product context từ việc gần đây, bắt đầu từ trí tuệ thiết kế đóng gói, rồi trả hướng được chọn, token ngữ nghĩa, state và checklist accessibility trước bàn giao.",
      "recommended": true
    },
    {
      "labelEn": "Component with style",
      "labelVi": "Component kèm style",
      "command": "/ak:ui-ux-pro-max component --style minimal",
      "whenEn": "One component needs tokens, states, and interaction rules biased toward a named look.",
      "whenVi": "Một component cần token, state và luật tương tác thiên về một look đã nêu.",
      "expectedEn": "Scopes work to that component, biases packaged style search toward minimal, and still requires contrast, touch targets, and keyboard reachability before delivery.",
      "expectedVi": "Giới hạn việc vào component đó, thiên search style đóng gói về minimal, và vẫn đòi contrast, vùng chạm và khả năng dùng keyboard trước khi bàn giao."
    },
    {
      "labelEn": "Page with framework",
      "labelVi": "Page kèm framework",
      "command": "/ak:ui-ux-pro-max page --framework react",
      "whenEn": "One page needs hierarchy, responsive layout, and stack-specific React guidance.",
      "whenVi": "Một page cần hierarchy, layout responsive và hướng dẫn stack React cụ thể.",
      "expectedEn": "Reviews that page for layout, states, and interaction, then applies React-oriented stack guidance without inventing undocumented frameworks.",
      "expectedVi": "Review page đó về layout, state và tương tác, rồi áp hướng dẫn stack theo React mà không bịa framework chưa được tài liệu hóa."
    },
    {
      "labelEn": "Guideline review",
      "labelVi": "Rà guideline",
      "command": "/ak:ui-ux-pro-max review the checkout form against UI and accessibility guidelines",
      "whenEn": "Existing interface code needs a guideline review rather than a new visual direction.",
      "whenVi": "Khi mã giao diện đã có cần rà guideline, không phải một hướng hình ảnh mới.",
      "expectedEn": "Reviews the existing interface for accessibility, touch targets, labels, and visual consistency, and reports concrete violations instead of inventing a new design system.",
      "expectedVi": "Rà giao diện hiện có về accessibility, vùng chạm, nhãn và sự nhất quán hình ảnh, rồi báo vi phạm cụ thể thay vì bịa một design system mới."
    },
    {
      "labelEn": "Design system",
      "labelVi": "Design system",
      "command": "/ak:ui-ux-pro-max design-system",
      "whenEn": "A product area needs a reusable baseline of style, color, type, and anti-patterns before code.",
      "whenVi": "Một khu vực product cần baseline tái dùng về style, màu, type và anti-pattern trước khi viết code.",
      "expectedEn": "Runs the design-system path, returns selected plus rejected directions, semantic tokens, type and spacing scales, and accessibility requirements that are not proven by palette alone.",
      "expectedVi": "Chạy nhánh design-system, trả hướng được chọn và bị loại, token ngữ nghĩa, thang type/spacing và yêu cầu accessibility mà palette đơn thuần chưa chứng minh."
    }
  ],
  "specialOperations": [
    {
      "id": "bundled-cli-design-system",
      "titleEn": "Bundled CLI design-system search",
      "titleVi": "Search design-system của CLI đóng gói",
      "descEn": "Skill-level flags are only --style and --framework. Bundled search CLI flags stay off the slash command unless those two tokens are used.",
      "descVi": "Flag cấp skill chỉ là --style và --framework. Flag CLI search đóng gói không lên slash command trừ khi dùng đúng hai token đó.",
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

import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-design-system",
  command: "/ak:design-system",
  kit: 'marketer',
  header: {
    titleEn: "Token architecture and slide system",
    titleVi: "Kiến trúc token và hệ thống slide",
    taglineEn: "Builds three-layer design tokens, CSS variables, component specs, Tailwind handoff, and brand-compliant slide presentations with token validation.",
    taglineVi: "Xây design token ba lớp, biến CSS, đặc tả component, handoff Tailwind và slide đúng brand có kiểm tra token.",
  },
  hardGate: {
    type: "critical",
    titleEn: "Slides must be token-compliant",
    titleVi: "Slide bắt buộc tuân thủ token",
    contentEn: "The skill says all slides must import generated design-token CSS, use CSS variables, use Chart.js for charts instead of CSS-only bars, include navigation, center content, and focus on persuasion/conversion.",
    contentVi: "Skill yêu cầu mọi slide phải import CSS token đã tạo, dùng biến CSS, dùng Chart.js cho chart thay vì bar chỉ bằng CSS, có điều hướng, canh giữa nội dung và tập trung vào thuyết phục/chuyển đổi.",
  },
  processFlow: [
    { number: 1, titleEn: "Identify surface", titleVi: "Xác định bề mặt", descEn: "Decide whether the request is tokens, component specs, Tailwind handoff, or slide generation.", descVi: "Xác định yêu cầu là token, đặc tả component, handoff Tailwind hay tạo slide." },
    { number: 2, titleEn: "Load token architecture", titleVi: "Tải kiến trúc token", descEn: "Use the three-layer structure: primitive raw values, semantic purpose aliases, then component-specific tokens.", descVi: "Dùng cấu trúc ba lớp: primitive là giá trị gốc, semantic là alias theo mục đích, rồi token riêng cho component." },
    { number: 3, titleEn: "Generate CSS", titleVi: "Tạo CSS", descEn: "Generate CSS variables from token JSON so components and slides share one source of truth.", descVi: "Tạo biến CSS từ JSON token để component và slide dùng chung một nguồn sự thật." },
    { number: 4, titleEn: "Specify components", titleVi: "Đặc tả component", descEn: "Document default, hover, active, disabled, border, shadow, text, and background behavior.", descVi: "Ghi rõ trạng thái default, hover, active, disabled, border, shadow, text và background." },
    { number: 5, titleEn: "Plan slides", titleVi: "Lập kế hoạch slide", descEn: "For decks, search slide strategies to pick structure, emotion beats, and Duarte-style pattern breaks.", descVi: "Với deck, tìm slide strategy để chọn cấu trúc, nhịp cảm xúc và pattern break kiểu Duarte." },
    { number: 6, titleEn: "Resolve each slide", titleVi: "Giải từng slide", descEn: "For each slide, query layout logic, typography, color emotion, background need, copy formula, chart type, and animation.", descVi: "Với từng slide, tra layout logic, typography, màu theo cảm xúc, nhu cầu background, công thức copy, loại chart và animation." },
    { number: 7, titleEn: "Build HTML", titleVi: "Dựng HTML", descEn: "Generate brand-compliant HTML that imports token CSS, uses var() values, includes Chart.js when charting, and supports navigation.", descVi: "Tạo HTML đúng brand, import CSS token, dùng var(), dùng Chart.js khi có chart và hỗ trợ điều hướng." },
    { number: 8, titleEn: "Validate tokens", titleVi: "Kiểm token", descEn: "Run the slide token validator or token validator to catch hardcoded values and non-compliant slides.", descVi: "Chạy validator cho slide hoặc token để bắt giá trị hardcode và slide không tuân thủ." },
  ],
  corePrinciplesEn: [
    "Primitive → semantic → component tokens keep design flexible and themeable.",
    "Generated CSS variables are the single source of truth for implementation and slides.",
    "Slides are persuasion systems: strategy, emotion, copy, layout, charting, animation, and navigation must work together.",
  ],
  corePrinciplesVi: [
    "Token primitive → semantic → component giúp thiết kế linh hoạt và đổi theme được.",
    "Biến CSS sinh ra là nguồn sự thật duy nhất cho triển khai và slide.",
    "Slide là hệ thống thuyết phục: strategy, cảm xúc, copy, layout, chart, animation và navigation phải phối hợp với nhau.",
  ],
  expertiseAreasEn: ["Primitive tokens", "Semantic tokens", "Component tokens", "CSS variables", "Component states", "Tailwind integration", "Slide strategies", "Chart.js decks", "Token validation"],
  expertiseAreasVi: ["Token primitive", "Token semantic", "Token component", "Biến CSS", "Trạng thái component", "Tích hợp Tailwind", "Chiến lược slide", "Deck Chart.js", "Kiểm tra token"],
  promptExamples: [
    { labelEn: "Token system", labelVi: "Hệ token", command: "/ak:design-system button tokens for SaaS dashboard", whenEn: "Use when component styling needs reusable token layers.", whenVi: "Dùng khi styling component cần các lớp token tái sử dụng được.", expectedEn: "Primitive, semantic, and component token guidance with state specs.", expectedVi: "Hướng dẫn token primitive, semantic, component kèm đặc tả state.", recommended: true },
    { labelEn: "CSS variables", labelVi: "Biến CSS", command: "/ak:design-system CSS variables for brand colors and typography", whenEn: "Use when a design system needs implementation-ready variables.", whenVi: "Dùng khi design system cần biến sẵn sàng để triển khai.", expectedEn: "Token-to-CSS variable structure and validation approach.", expectedVi: "Cấu trúc chuyển token sang biến CSS và cách kiểm tra." },
    { labelEn: "Slide deck", labelVi: "Deck slide", command: "/ak:design-system 10-slide investor pitch for AgentKit Marketing", whenEn: "Use when presentation generation must stay brand-compliant and persuasive.", whenVi: "Dùng khi cần tạo presentation vừa đúng brand vừa có tính thuyết phục.", expectedEn: "Strategy, emotion arc, layouts, token-compliant HTML, Chart.js charts, and navigation.", expectedVi: "Strategy, cung cảm xúc, layout, HTML đúng token, chart Chart.js và điều hướng." },
  ],
  skillStack: [
    { name: "brand", type: "skill" },
    { name: "ui-styling", type: "skill" },
    { name: "ui-ux-designer", type: "agent" },
    { name: "frontend-developer", type: "agent" },
    { name: "Chart.js", type: "tool" },
  ],
  guardrails: [
    { thoughtEn: "A hardcoded hex is fine for one slide.", thoughtVi: "Một mã màu hardcode trong slide cũng được.", realityEn: "Token compliance requires CSS variables as the single source of truth.", realityVi: "Tuân thủ token nghĩa là dùng biến CSS làm nguồn sự thật duy nhất.", accent: "red" },
    { thoughtEn: "CSS-only bars are simpler than a chart library.", thoughtVi: "Bar bằng CSS đơn giản hơn dùng thư viện chart.", realityEn: "The slide requirements explicitly require Chart.js for charts.", realityVi: "Yêu cầu slide ghi rõ phải dùng Chart.js cho chart.", accent: "amber" },
  ],
};

export default data;

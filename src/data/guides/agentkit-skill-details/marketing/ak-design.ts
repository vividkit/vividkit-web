import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-design",
  command: "/ak:design",
  kit: 'marketer',
  header: {
    titleEn: "Unified brand and visual design router",
    titleVi: "Bộ định tuyến thiết kế nhận diện và hình ảnh",
    taglineEn: "Routes brand identity, logos, design systems, CIP, slides, banners, social photos, icons, and posters through the right references, scripts, and quality gates.",
    taglineVi: "Định tuyến brand identity, logo, design system, CIP, slide, banner, social photo, icon và poster qua đúng tài liệu, script và cổng chất lượng.",
  },
  hardGate: {
    type: "critical",
    titleEn: "Real brands require real asset protocol",
    titleVi: "Brand thật bắt buộc dùng quy trình asset thật",
    contentEn: "When a task names a real brand or product, the skill requires loading the brand asset protocol before generating. A missing logo is a stop-and-ask, never a fabrication.",
    contentVi: "Khi task nêu brand hoặc sản phẩm thật, skill bắt buộc tải brand asset protocol trước khi tạo. Không tìm được logo thì dừng hỏi, không được bịa.",
  },
  processFlow: [
    { number: 1, titleEn: "Declare design read", titleVi: "Tuyên bố cách đọc brief", descEn: "State: Reading this as deliverable, audience, and aesthetic direction; ask exactly one clarifying question only if genuinely ambiguous.", descVi: "Nêu: đang đọc brief như hạng mục, audience và hướng thẩm mỹ nào; chỉ hỏi đúng một câu nếu thật sự mơ hồ." },
    { number: 2, titleEn: "Protect real brands", titleVi: "Bảo vệ brand thật", descEn: "For real brands or products, load the brand asset protocol and locate real assets before generation.", descVi: "Với brand hoặc sản phẩm thật, tải brand asset protocol và tìm asset thật trước khi tạo." },
    { number: 3, titleEn: "Route sub-skill", titleVi: "Định tuyến sub-skill", descEn: "Send brand, tokens, UI styling, logo, CIP, slides, banners, social photos, icons, or posters to the matching guide.", descVi: "Đưa brand, token, UI styling, logo, CIP, slide, banner, social photo, icon hoặc poster sang guide phù hợp." },
    { number: 4, titleEn: "Use design workflow", titleVi: "Dùng workflow thiết kế", descEn: "For new, vague, or externally shipped work, follow the batched intake and 4-pass design sequence.", descVi: "Với việc mới, mơ hồ hoặc đem ra ngoài dùng, theo intake theo batch và chuỗi thiết kế 4 pass." },
    { number: 5, titleEn: "Search knowledge", titleVi: "Tra cứu tri thức", descEn: "Use built-in searches for logo styles, CIP deliverables, poster axes, slide layouts, or banner specs as relevant.", descVi: "Dùng tìm kiếm tích hợp cho style logo, hạng mục CIP, trục poster, layout slide hoặc spec banner tùy việc." },
    { number: 6, titleEn: "Generate artifact", titleVi: "Tạo artifact", descEn: "Generate with the appropriate script, skill, AI model, or HTML/CSS screenshot path for the routed deliverable.", descVi: "Tạo bằng script, skill, model AI hoặc luồng HTML/CSS screenshot phù hợp với hạng mục đã định tuyến." },
    { number: 7, titleEn: "Export accurately", titleVi: "Export chính xác", descEn: "For banners and social images, screenshot at exact platform dimensions and device scale.", descVi: "Với banner và social image, chụp screenshot đúng kích thước nền tảng và device scale." },
    { number: 8, titleEn: "Critique quality", titleVi: "Tự critique chất lượng", descEn: "Review against the design critique guide; weak concepts must be fixed before craft polish.", descVi: "Soát theo design critique guide; concept yếu phải sửa trước khi đánh bóng phần craft." },
  ],
  corePrinciplesEn: [
    "Design begins with a clear read of deliverable, audience, and aesthetic direction.",
    "Real brand assets must be located and used; do not fabricate missing logos.",
    "Route to the narrowest design guide so logos, CIP, slides, banners, icons, posters, and social images follow their own rules.",
  ],
  corePrinciplesVi: [
    "Thiết kế bắt đầu bằng cách đọc rõ hạng mục, audience và hướng thẩm mỹ.",
    "Phải tìm và dùng asset thật của brand thật; không bịa logo bị thiếu.",
    "Định tuyến sang guide hẹp nhất để logo, CIP, slide, banner, icon, poster và social image theo đúng luật riêng.",
  ],
  expertiseAreasEn: ["Brand identity", "Design tokens", "Logo generation", "CIP mockups", "Pitch decks", "Banners", "Social photos", "SVG icons", "Posters"],
  expertiseAreasVi: ["Nhận diện thương hiệu", "Design token", "Tạo logo", "Mockup CIP", "Pitch deck", "Banner", "Social photo", "Icon SVG", "Poster"],
  promptExamples: [
    { labelEn: "Brand package", labelVi: "Bộ nhận diện", command: "/ak:design complete brand package for a new fintech", whenEn: "Use when the request spans identity, logo, CIP, and presentation assets.", whenVi: "Dùng khi yêu cầu bao gồm identity, logo, CIP và tài sản trình bày.", expectedEn: "A routed brand package workflow through logo, CIP, and slides with consistent visual direction.", expectedVi: "Workflow bộ nhận diện được định tuyến qua logo, CIP và slide.", recommended: true },
    { labelEn: "Banner", labelVi: "Banner", command: "/ak:design LinkedIn launch banner for SaaS product", whenEn: "Use for platform-specific marketing banners.", whenVi: "Dùng cho banner marketing theo nền tảng cụ thể.", expectedEn: "Requirements intake, reference research, HTML/CSS or image generation, exact-dimension export, and review.", expectedVi: "Intake yêu cầu, nghiên cứu tham chiếu, tạo HTML/CSS hoặc hình ảnh, export đúng kích thước và review." },
    { labelEn: "Poster", labelVi: "Poster", command: "/ak:design poster for AI Conference", whenEn: "Use for event, editorial, marketing, or campaign posters.", whenVi: "Dùng cho poster sự kiện, editorial, marketing hoặc campaign.", expectedEn: "Style, palette, layout, texture, and model-ready prompt direction for the requested visual asset.", expectedVi: "Định hướng style, palette, layout, texture và prompt sẵn cho model theo asset người dùng cần." },
    { labelEn: "Icon set", labelVi: "Bộ icon", command: "/ak:design SVG icons for dashboard navigation", whenEn: "Use for single icons or icon sets.", whenVi: "Dùng cho một icon hoặc bộ icon.", expectedEn: "SVG-oriented icon generation guidance with style, size, proportion, and export choices for reuse.", expectedVi: "Hướng dẫn tạo icon theo SVG với lựa chọn style và size." },
  ],
  skillStack: [
    { name: "brand", type: "skill" },
    { name: "design-system", type: "skill" },
    { name: "ui-styling", type: "skill" },
    { name: "frontend-design", type: "skill" },
    { name: "ui-ux-pro-max", type: "skill" },
    { name: "ai-multimodal", type: "skill" },
    { name: "agent-browser", type: "skill" },
  ],
  guardrails: [
    { thoughtEn: "I can invent a plausible logo for this known brand.", thoughtVi: "Có thể bịa một logo hợp lý cho brand quen thuộc này.", realityEn: "The brand asset protocol is mandatory; missing logo means stop and ask.", realityVi: "Brand asset protocol là bắt buộc; thiếu logo thì dừng và hỏi.", accent: "red" },
    { thoughtEn: "A pretty layout is enough.", thoughtVi: "Layout đẹp là đủ.", realityEn: "The skill requires critique; weak concept quality caps the result no matter how polished.", realityVi: "Skill yêu cầu critique; concept yếu sẽ giới hạn chất lượng dù craft có bóng bẩy.", accent: "amber" },
  ],
};

export default data;

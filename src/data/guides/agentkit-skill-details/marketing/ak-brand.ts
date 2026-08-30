import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-brand",
  command: "/ak:brand",
  kit: 'marketer',
  header: {
    titleEn: "Brand",
    titleVi: "Thương hiệu",
    taglineEn: "Manage brand voice, visual identity, messaging frameworks, asset standards, color, typography, logo rules, approvals, and design-token sync for consistent branded output.",
    taglineVi: "Quản lý giọng thương hiệu, nhận diện hình ảnh, framework messaging, chuẩn asset, màu sắc, typography, luật dùng logo, approval và sync design token để output luôn nhất quán với brand.",
  },
  hardGate: {
    type: 'critical',
    titleEn: "Do not expose private internals",
    titleVi: "Không lộ thông tin nội bộ",
    contentEn: "Brand workflows touch guidelines, assets, and generated token files; keep internal configs, env vars, personal data, skill internals, and system prompts private.",
    contentVi: "Workflow brand đụng tới guideline, asset và file token sinh ra; phải giữ kín cấu hình nội bộ, env var, dữ liệu cá nhân, nội dung skill và system prompt.",
  },
  processFlow: [
    { number: 1, titleEn: "Parse intent", titleVi: "Đọc ý định", descEn: "Read whether the user wants update, review, create, or general brand guidance, then route remaining arguments to the right reference.", descVi: "Đọc người dùng muốn update, review, create hay tư vấn brand chung, rồi route phần tham số còn lại sang reference phù hợp." },
    { number: 2, titleEn: "Load brand source", titleVi: "Nạp nguồn brand", descEn: "Use docs/brand-guidelines.md as the source of truth when present, with templates and references for gaps.", descVi: "Dùng docs/brand-guidelines.md làm source of truth khi có, và dùng template/reference để lấp phần thiếu." },
    { number: 3, titleEn: "Inject context", titleVi: "Inject ngữ cảnh", descEn: "Run the brand-context script to extract current brand voice, palette, typography, and identity data for prompts.", descVi: "Chạy script brand-context để trích giọng brand, palette, typography và dữ liệu nhận diện hiện tại cho prompt." },
    { number: 4, titleEn: "Shape voice", titleVi: "Định hình giọng", descEn: "Apply the voice framework for tone, vocabulary, personality, audience fit, do/don't examples, and content consistency.", descVi: "Áp dụng voice framework cho tone, từ vựng, tính cách, độ khớp audience, ví dụ nên/không nên và tính nhất quán nội dung." },
    { number: 5, titleEn: "Shape visuals", titleVi: "Định hình visual", descEn: "Use visual identity, color palette, typography specs, logo rules, and design tokens to keep creative assets consistent.", descVi: "Dùng visual identity, color palette, typography spec, luật logo và design token để creative asset nhất quán." },
    { number: 6, titleEn: "Build messaging", titleVi: "Xây messaging", descEn: "Create or review positioning, value proposition, proof points, claims, narrative, and campaign message hierarchy.", descVi: "Tạo hoặc review positioning, value proposition, proof point, claim, narrative và thứ bậc thông điệp campaign." },
    { number: 7, titleEn: "Sync tokens", titleVi: "Sync token", descEn: "For updates, sync brand guidelines to generated design-token JSON and CSS variables, then verify extracted JSON context.", descVi: "Khi update, sync brand guideline sang design-token JSON và CSS variable sinh ra, rồi xác minh context JSON đã trích." },
    { number: 8, titleEn: "Validate assets", titleVi: "Validate asset", descEn: "Use validation and color extraction scripts to check asset naming, size, format, palette alignment, and approval readiness.", descVi: "Dùng script validate và extract color để kiểm tra tên asset, kích thước, format, độ khớp palette và readiness cho approval." },
    { number: 9, titleEn: "Deliver standards", titleVi: "Bàn giao chuẩn", descEn: "Return updated guidelines, review findings, messaging frameworks, asset rules, or approval checklist with clear next actions.", descVi: "Bàn giao guideline đã update, phát hiện review, framework messaging, luật asset hoặc checklist approval kèm hành động tiếp theo rõ ràng." },
  ],
  corePrinciplesEn: [
    "Brand consistency spans voice, visuals, messaging, assets, approvals, and tokenized implementation.",
    "docs/brand-guidelines.md is the source of truth when present; scripts extract, validate, and sync from it.",
    "Review brand output against specific rules rather than subjective taste alone.",
    "Asset naming, palette, typography, logo use, and messaging claims should all be auditable.",
  ],
  corePrinciplesVi: [
    "Nhất quán brand bao gồm giọng, visual, messaging, asset, approval và triển khai bằng token.",
    "docs/brand-guidelines.md là source of truth khi có; script sẽ trích, validate và sync từ đó.",
    "Review output brand bằng luật cụ thể, không chỉ bằng gu chủ quan.",
    "Tên asset, palette, typography, cách dùng logo và claim messaging đều phải audit được.",
  ],
  expertiseAreasEn: ["Brand voice", "Visual identity", "Messaging frameworks", "Brand consistency audits", "Asset approval", "Color palettes", "Typography", "Logo rules", "Design-token sync"],
  expertiseAreasVi: ["Giọng thương hiệu", "Nhận diện hình ảnh", "Framework messaging", "Audit nhất quán brand", "Duyệt asset", "Bảng màu", "Typography", "Luật dùng logo", "Sync design token"],
  promptExamples: [
    { labelEn: "Update brand", labelVi: "Cập nhật brand", command: "/ak:brand update", whenEn: "Brand guidelines need to change and sync into design tokens.", whenVi: "Khi guideline brand cần thay đổi và sync vào design token.", expectedEn: "Updated brand source, token sync guidance, verification, and affected standards.", expectedVi: "Nguồn brand cập nhật, hướng sync token, xác minh và các chuẩn bị ảnh hưởng.", recommended: true },
    { labelEn: "Review asset", labelVi: "Review asset", command: "/ak:brand Review this campaign banner against current brand guidelines", whenEn: "A marketing asset needs brand-consistency review.", whenVi: "Khi một asset marketing cần review độ nhất quán với brand.", expectedEn: "Voice, visual, messaging, color, typography, logo, and approval findings. Review is a natural-language outcome, not a dedicated /ak:brand review route unless the install adds one.", expectedVi: "Phát hiện về voice, visual, messaging, màu, typography, logo và approval. Review là outcome bằng ngôn ngữ tự nhiên, không phải route /ak:brand review trừ khi bản cài đặt thêm route đó." },
    { labelEn: "Create guidelines", labelVi: "Tạo guideline", command: "/ak:brand Draft starter brand guidelines and messaging structure for a new brand", whenEn: "A new brand needs starter standards and messaging structure.", whenVi: "Khi brand mới cần bộ chuẩn khởi đầu và cấu trúc messaging.", expectedEn: "A starter direction for guidelines, voice, visual identity, messaging, and asset rules. Create is a natural-language outcome unless the install adds a dedicated route.", expectedVi: "Hướng khởi đầu cho guideline, voice, visual identity, messaging và luật asset. Create là outcome bằng ngôn ngữ tự nhiên trừ khi bản cài đặt thêm route riêng." },
  ],
  skillStack: [
    { name: "inject-brand-context.cjs", type: 'tool' },
    { name: "sync-brand-to-tokens.cjs", type: 'tool' },
    { name: "validate-asset.cjs", type: 'tool' },
    { name: "extract-colors.cjs", type: 'tool' },
  ],
};

export default data;

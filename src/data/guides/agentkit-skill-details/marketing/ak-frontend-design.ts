import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-frontend-design',
  command: '/ak:frontend-design',
  kit: 'marketer',
  header: {
    titleEn: 'Polished Frontend Design',
    titleVi: 'Thiết kế frontend có gu',
    taglineEn: 'Builds distinctive, production-grade interfaces from briefs, screenshots, videos, 3D requests, and prototypes while avoiding generic AI aesthetics.',
    taglineVi: 'Tạo giao diện khác biệt, đủ chất lượng production từ brief, screenshot, video, yêu cầu 3D hoặc prototype, đồng thời tránh vẻ ngoài AI đại trà.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'Craft rules are mandatory',
    titleVi: 'Quy tắc craft là bắt buộc',
    contentEn: 'Decision Procedure, Aesthetic Direction Menu, craft rules, layout discipline, absolute bans, and Self-Review Gate apply to every run. If instinct conflicts, the rule wins.',
    contentVi: 'Decision Procedure, menu định hướng thẩm mỹ, quy tắc craft, kỷ luật layout, danh sách cấm và Self-Review Gate áp dụng cho mọi lần chạy. Nếu trực giác mâu thuẫn, quy tắc thắng.',
  },
  processFlow: [
    { number: 1, titleEn: 'Select workflow', titleVi: 'Chọn workflow', descEn: 'Route screenshot, video, describe-only, 3D, quick, complex, or from-scratch work to the matching reference or decision procedure.', descVi: 'Định tuyến screenshot, video, chỉ mô tả, 3D, quick, phức tạp hoặc làm từ đầu vào tham chiếu hoặc quy trình quyết định phù hợp.' },
    { number: 2, titleEn: 'Read design', titleVi: 'Đọc brief thiết kế', descEn: 'Declare page kind, audience, vibe, and aesthetic leaning before default model habits take over.', descVi: 'Nêu loại trang, audience, vibe và hướng thẩm mỹ trước khi thói quen mặc định của model chen vào.' },
    { number: 3, titleEn: 'Break defaults', titleVi: 'Phá mặc định', descEn: 'Use seeded variation to pick an aesthetic direction, hero archetype, and component patterns that fit the brief.', descVi: 'Dùng seeded variation để chọn hướng thẩm mỹ, kiểu hero và pattern component phù hợp brief.' },
    { number: 4, titleEn: 'State thesis', titleVi: 'Nêu luận điểm thẩm mỹ', descEn: 'Commit to palette, type character, layout signature, memorable element, and the content motif that justifies the form.', descVi: 'Chốt palette, tính cách chữ, chữ ký layout, yếu tố đáng nhớ và motif nội dung giải thích hình thức thiết kế.' },
    { number: 5, titleEn: 'Define tokens', titleVi: 'Đặt token', descEn: 'Create CSS variables for OKLCH colors, fonts, type scale, spacing, radii, shadows, and easing before component values.', descVi: 'Tạo CSS variable cho màu OKLCH, font, thang chữ, spacing, bo góc, shadow và easing trước khi đặt giá trị trong component.' },
    { number: 6, titleEn: 'Escalate one dimension', titleVi: 'Đẩy mạnh một trục', descEn: 'Make exactly one dimension memorable: type scale, color, layout, motion, or density. Keep the rest disciplined.', descVi: 'Làm đúng một trục trở nên đáng nhớ: cỡ chữ, màu, layout, chuyển động hoặc mật độ. Các trục còn lại phải tiết chế.' },
    { number: 7, titleEn: 'Implement states', titleVi: 'Làm đủ trạng thái', descEn: 'Ship real responsive code with hover, focus-visible, active, disabled, loading, error, success, accessibility, and reduced-motion behavior.', descVi: 'Giao mã responsive thật với hover, focus-visible, active, disabled, loading, lỗi, thành công, accessibility và reduced-motion.' },
    { number: 8, titleEn: 'Self-review', titleVi: 'Tự kiểm tra', descEn: 'Run countable, binary, and judgment checks, including mobile width, contrast, motion, banned copy, and template smell.', descVi: 'Chạy các kiểm tra đếm được, nhị phân và đánh giá: mobile, tương phản, motion, copy bị cấm và dấu hiệu template.' },
    { number: 9, titleEn: 'Handoff result', titleVi: 'Bàn giao kết quả', descEn: 'Confirm context fit, implementation safety, verified viewports, asset status, and known limitations if any.', descVi: 'Xác nhận độ khớp bối cảnh, an toàn triển khai, viewport đã kiểm chứng, tình trạng asset và giới hạn còn lại nếu có.' },
  ],
  corePrinciplesEn: [
    'Distinctive design comes from reading the brief, not decorating a default layout.',
    'One memorable extreme is stronger than making every dimension loud.',
    'Tokens first prevents arbitrary colors, spacing, motion, and surface choices.',
    'Self-review is a delivery gate, not a nice-to-have critique.',
  ],
  corePrinciplesVi: [
    'Thiết kế khác biệt đến từ việc đọc brief, không phải trang trí một layout mặc định.',
    'Một trục được đẩy mạnh có chủ đích tốt hơn làm mọi thứ đều ồn ào.',
    'Đặt token trước giúp tránh màu, spacing, motion và bề mặt tùy tiện.',
    'Self-review là cổng bàn giao, không phải phần góp ý tùy chọn.',
  ],
  expertiseAreasEn: ['Screenshot replication', 'Video and motion replication', '3D and WebGL experiences', 'Rapid prototypes', 'Aesthetic direction', 'Design QA'],
  expertiseAreasVi: ['Dựng lại từ screenshot', 'Dựng lại video và motion', 'Trải nghiệm 3D và WebGL', 'Prototype nhanh', 'Định hướng thẩm mỹ', 'QA thiết kế'],
  promptExamples: [
    { labelEn: 'Screenshot rebuild', labelVi: 'Dựng lại screenshot', command: '/ak:frontend-design replicate this pricing page screenshot', whenEn: 'A source image is the fidelity contract.', whenVi: 'Ảnh nguồn là hợp đồng về độ giống.', expectedEn: 'Analyzes the image, plans implementation, matches the source, verifies visually, and documents approved guidelines.', expectedVi: 'Phân tích ảnh, lập kế hoạch triển khai, bám sát nguồn, kiểm chứng thị giác và ghi guideline đã duyệt.', recommended: true },
    { labelEn: 'Polished prototype', labelVi: 'Prototype có polish', command: '/ak:frontend-design landing page for a privacy-first analytics product', whenEn: 'A marketing or product surface needs distinctive design from scratch.', whenVi: 'Một bề mặt marketing hoặc product cần thiết kế khác biệt từ đầu.', expectedEn: 'Runs the decision procedure, chooses an aesthetic thesis, implements real UI states, and self-reviews.', expectedVi: 'Chạy quy trình quyết định, chọn luận điểm thẩm mỹ, làm đủ trạng thái UI và tự kiểm tra.' },
    { labelEn: '3D experience', labelVi: 'Trải nghiệm 3D', command: '/ak:frontend-design immersive 3D product hero for a hardware launch', whenEn: 'The brief asks for an immersive Three.js or WebGL interface.', whenVi: 'Brief yêu cầu giao diện nhập vai bằng Three.js hoặc WebGL.', expectedEn: 'Loads the 3D workflow and applies the same craft, motion, and verification gates.', expectedVi: 'Nạp workflow 3D và vẫn áp dụng cổng craft, motion và kiểm chứng.' },
  ],
  skillStack: [
    { name: 'ak:ai-multimodal', type: 'skill' },
    { name: 'ui-ux-designer', type: 'agent' },
    { name: 'ak:media-processing', type: 'skill' },
    { name: 'references/motion-craft.md', type: 'tool' },
  ],
  guardrails: [
    { thoughtEn: 'A clean centered hero and three cards are safe.', thoughtVi: 'Hero căn giữa và ba card là an toàn.', realityEn: 'That exact template is banned. Use a content-derived layout signature.', realityVi: 'Mẫu đó bị cấm rõ ràng. Phải dùng chữ ký layout suy ra từ nội dung.', accent: 'red' },
    { thoughtEn: 'Animation can hide rough composition.', thoughtVi: 'Animation có thể che bố cục yếu.', realityEn: 'Content must be visible by default and motion must serve hierarchy or state.', realityVi: 'Nội dung phải hiện mặc định và motion phải phục vụ phân cấp hoặc trạng thái.', accent: 'violet' },
    { thoughtEn: 'Design polish is subjective.', thoughtVi: 'Polish thiết kế là cảm tính.', realityEn: 'The skill turns polish into countable checks for typography, spacing, color, states, motion, and contrast.', realityVi: 'Skill biến polish thành kiểm tra đếm được về chữ, spacing, màu, trạng thái, motion và tương phản.', accent: 'blue' },
  ],
};

export default data;

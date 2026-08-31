import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-slides',
  command: '/ak:slides',
  kit: 'marketer',
  header: {
    titleEn: '/ak:slides — Strategic HTML presentations',
    titleVi: '/ak:slides — Presentation HTML chiến lược',
    taglineEn: 'Strategic HTML presentation builder with Chart.js, design tokens, responsive layouts, copywriting formulas, layout patterns, and contextual slide strategy.',
    taglineVi: 'Trình tạo presentation HTML chiến lược với Chart.js, design token, layout responsive, công thức copywriting, pattern bố cục và chiến lược slide theo ngữ cảnh.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'A persuasive layout is not evidence',
    titleVi: 'Bố cục thuyết phục không phải bằng chứng',
    contentEn: 'Do not invent customer quotes, logos, revenue, conversion, market size, pricing, ROI, or performance. A copywriting formula can organize approved evidence, but hosting, sharing, sending, and presenting remain separate approvals.',
    contentVi: 'Không bịa quote khách hàng, logo, doanh thu, conversion, market size, pricing, ROI hoặc performance. Công thức copy chỉ tổ chức bằng chứng đã duyệt; hosting, sharing, sending và presenting vẫn cần duyệt riêng.',
  },
  processFlow: [
    { number: 1, titleEn: 'Read Brief', titleVi: 'Đọc brief', descEn: 'Parse topic, slide count, audience, deck purpose, content type, data needs, and constraints.', descVi: 'Đọc topic, số slide, audience, mục đích deck, loại nội dung, nhu cầu data và ràng buộc.' },
    { number: 2, titleEn: 'Frame Direction', titleVi: 'Định hướng', descEn: 'State the deck purpose, audience, and aesthetic direction; ask exactly one question if ambiguous.', descVi: 'Nêu mục đích deck, audience và hướng thẩm mỹ; nếu mơ hồ thì hỏi đúng một câu.' },
    { number: 3, titleEn: 'Route Create', titleVi: 'Định tuyến create', descEn: 'Load references/create.md and the supporting knowledge base for layout, template, copywriting, and slide strategy.', descVi: 'Nạp references/create.md và knowledge base hỗ trợ về layout, template, copywriting và slide strategy.' },
    { number: 4, titleEn: 'Plan Narrative', titleVi: 'Lập narrative', descEn: 'Choose a strategic slide structure and copywriting formula for the audience and intended persuasion path.', descVi: 'Chọn cấu trúc slide và công thức copywriting phù hợp audience và đường thuyết phục mong muốn.' },
    { number: 5, titleEn: 'Design Layouts', titleVi: 'Thiết kế layout', descEn: 'Apply design tokens, responsive layouts, visual hierarchy, and varied slide patterns.', descVi: 'Áp dụng design token, layout responsive, phân cấp thị giác và pattern slide đa dạng.' },
    { number: 6, titleEn: 'Add Data Viz', titleVi: 'Thêm data viz', descEn: 'Use Chart.js where data-driven slides need charts, metrics, comparisons, or trends.', descVi: 'Dùng Chart.js khi slide cần chart, metric, so sánh hoặc trend dựa trên dữ liệu.' },
    { number: 7, titleEn: 'Quality Preflight', titleVi: 'Preflight chất lượng', descEn: 'Check for generic gradients, template card grids, fake screenshots, decorative clutter, weak content, and one-note palettes.', descVi: 'Kiểm tra gradient chung chung, grid card template, screenshot giả, trang trí dư, nội dung yếu và palette một màu.' },
    { number: 8, titleEn: 'Deliver Deck', titleVi: 'Bàn giao deck', descEn: 'Return a strategic HTML presentation ready for browser review and iteration.', descVi: 'Trả presentation HTML chiến lược sẵn sàng mở browser để review và iterate.' },
  ],
  corePrinciplesEn: [
    'Slides are strategic communication artifacts, not decorative templates.',
    'Audience, purpose, and aesthetic direction must be explicit before production.',
    'Use layout patterns and copywriting formulas to make each slide carry one clear idea.',
    'Quality preflight guards against generic visual filler and fake-looking assets.',
  ],
  corePrinciplesVi: [
    'Slide là artifact truyền thông chiến lược, không phải template trang trí.',
    'Audience, mục đích và hướng thẩm mỹ phải rõ trước khi sản xuất.',
    'Dùng layout pattern và công thức copywriting để mỗi slide mang một ý rõ ràng.',
    'Quality preflight giúp tránh filler visual chung chung và asset nhìn giả.',
  ],
  expertiseAreasEn: ['HTML slide decks', 'Chart.js data visualization', 'Responsive layouts', 'Design tokens', 'Copywriting formulas', 'Pitch narratives', 'Design preflight'],
  expertiseAreasVi: ['Deck HTML', 'Data visualization bằng Chart.js', 'Layout responsive', 'Design token', 'Công thức copywriting', 'Narrative pitch', 'Preflight design'],
  workflowModes: [
    { flag: 'create', modeEn: 'Create strategic presentation slides from a topic and slide count; create must be the first subcommand.', modeVi: 'Tạo slide presentation chiến lược từ topic và số slide; create phải là subcommand đầu tiên.', research: 'Brief', redTeam: 'Generic deck', validation: 'Preflight' },
  ],
  promptExamples: [
    { labelEn: 'Create deck', labelVi: 'Tạo deck', command: '/ak:slides create Product launch narrative 12',
      commandVi: '/ak:slides create câu chuyện ra mắt sản phẩm 12', whenEn: 'You need a strategic HTML deck around a launch story.', whenVi: 'Khi cần deck HTML chiến lược cho câu chuyện launch.', expectedEn: 'Deck direction, narrative, responsive HTML slides, and design preflight.', expectedVi: 'Định hướng deck, narrative, slide HTML responsive và design preflight.', recommended: true },
    { labelEn: 'Topic + count', labelVi: 'Topic + số slide', command: '/ak:slides create Pricing strategy update 8',
      commandVi: '/ak:slides create Cập nhật chiến lược giá 8', whenEn: 'You have a topic and target deck length.', whenVi: 'Khi có topic và độ dài deck mong muốn.', expectedEn: 'Strategic slide plan and HTML presentation.', expectedVi: 'Kế hoạch slide chiến lược và presentation HTML.' },
    { labelEn: 'Data deck', labelVi: 'Deck có data', command: '/ak:slides create Q3 marketing performance 10',
      commandVi: '/ak:slides create Hiệu suất marketing Q3 10', whenEn: 'You need charts, metrics, comparisons, or trends in a presentation.', whenVi: 'Khi cần chart, metric, so sánh hoặc trend trong presentation.', expectedEn: 'Data-driven HTML slides with Chart.js visualizations where useful.', expectedVi: 'Slide HTML dựa trên dữ liệu, dùng Chart.js khi hữu ích.' },
  ],
};

export default data;

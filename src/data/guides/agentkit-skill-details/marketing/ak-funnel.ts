import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-funnel',
  command: '/ak:funnel',
  kit: 'marketer',
  header: {
    titleEn: 'Funnel Design and Optimization',
    titleVi: 'Thiết kế và tối ưu funnel',
    taglineEn: 'Designs, analyzes, and optimizes lead-magnet, webinar, launch, evergreen, and tripwire funnels with stage metrics and prioritized improvements.',
    taglineVi: 'Thiết kế, phân tích và tối ưu funnel lead magnet, webinar, launch, evergreen và tripwire với chỉ số từng giai đoạn và đề xuất ưu tiên.',
  },
  processFlow: [
    { number: 1, titleEn: 'Parse action', titleVi: 'Đọc hành động', descEn: 'Extract design, analyze, or optimize from the request, plus funnel type when designing.', descVi: 'Đọc design, analyze hoặc optimize từ yêu cầu, cùng loại funnel khi đang thiết kế mới.' },
    { number: 2, titleEn: 'Select type', titleVi: 'Chọn loại funnel', descEn: 'Map the design to lead-magnet, webinar, product-launch, evergreen, or tripwire.', descVi: 'Ghép thiết kế với lead-magnet, webinar, product-launch, evergreen hoặc tripwire.' },
    { number: 3, titleEn: 'Architect stages', titleVi: 'Dựng kiến trúc bước', descEn: 'Use funnel-architect and campaign frameworks to define traffic source, landing page, capture, nurture, sales page, checkout, and follow-up.', descVi: 'Dùng funnel-architect và framework campaign để xác định nguồn traffic, landing page, thu lead, nurture, sales page, checkout và follow-up.' },
    { number: 4, titleEn: 'Assign metrics', titleVi: 'Gắn chỉ số', descEn: 'Define conversion, engagement, and drop-off metrics for each funnel stage.', descVi: 'Đặt chỉ số chuyển đổi, tương tác và rớt người dùng cho từng giai đoạn funnel.' },
    { number: 5, titleEn: 'Analyze performance', titleVi: 'Phân tích hiệu suất', descEn: 'Use analytics-analyst to calculate stage conversion rates, identify drop-offs, and compare benchmarks.', descVi: 'Dùng analytics-analyst để tính conversion theo giai đoạn, tìm điểm rớt và so với benchmark.' },
    { number: 6, titleEn: 'Prioritize fixes', titleVi: 'Ưu tiên cải thiện', descEn: 'Use funnel-architect and sale-enabler to rank conversion tactics and A/B test ideas.', descVi: 'Dùng funnel-architect và sale-enabler để xếp hạng chiến thuật tăng chuyển đổi và ý tưởng A/B test.' },
    { number: 7, titleEn: 'Save outputs', titleVi: 'Lưu kết quả', descEn: 'Write designs, audits, or tests to the documented assets/funnels locations.', descVi: 'Lưu thiết kế, audit hoặc test vào các đường dẫn assets/funnels đã quy định.' },
  ],
  corePrinciplesEn: [
    'Every funnel stage needs a purpose, conversion metric, and next action.',
    'Design work starts with architecture before copy or campaign tactics.',
    'Analysis is stage-by-stage so drop-offs become visible.',
    'Optimization recommendations should be priority-ranked and testable.',
  ],
  corePrinciplesVi: [
    'Mỗi giai đoạn funnel cần mục đích, chỉ số chuyển đổi và hành động tiếp theo.',
    'Thiết kế bắt đầu từ kiến trúc trước khi viết copy hoặc chọn tactic campaign.',
    'Phân tích phải theo từng giai đoạn để nhìn rõ điểm rớt.',
    'Đề xuất tối ưu cần được xếp ưu tiên và có thể test.',
  ],
  workflowModes: [
    { flag: 'design', modeEn: 'Design new funnel', modeVi: 'Thiết kế funnel mới', research: 'Audience and offer context', redTeam: 'Stage completeness', validation: 'Metrics per stage defined' },
    { flag: 'analyze', modeEn: 'Analyze existing funnel', modeVi: 'Phân tích funnel hiện có', research: 'Current funnel metrics', redTeam: 'Drop-off diagnosis', validation: 'Benchmarks and conversion math' },
    { flag: 'optimize', modeEn: 'Optimize funnel', modeVi: 'Tối ưu funnel', research: 'Existing stage performance', redTeam: 'Priority ranking', validation: 'A/B test suggestions' },
  ],
  promptExamples: [
    { labelEn: 'Lead magnet funnel', labelVi: 'Funnel lead magnet', command: '/ak:funnel design lead-magnet', whenEn: 'A new gated asset should capture and nurture leads.', whenVi: 'Một tài sản gated mới cần thu và nurture lead.', expectedEn: 'Designs traffic, landing page, capture, nurture, sales, checkout, follow-up, and metrics.', expectedVi: 'Thiết kế traffic, landing page, thu lead, nurture, bán hàng, checkout, follow-up và chỉ số.', recommended: true },
    { labelEn: 'Webinar funnel', labelVi: 'Funnel webinar', command: '/ak:funnel design webinar', whenEn: 'A webinar needs registration, reminders, attendance, and follow-up flow.', whenVi: 'Webinar cần luồng đăng ký, nhắc lịch, tham dự và follow-up.', expectedEn: 'Creates a webinar funnel with stage definitions and measurement.', expectedVi: 'Tạo funnel webinar với từng giai đoạn và cách đo.' },
    { labelEn: 'Analyze funnel', labelVi: 'Phân tích funnel', command: '/ak:funnel analyze', whenEn: 'An existing funnel has metrics but unclear drop-off causes.', whenVi: 'Funnel hiện có có số liệu nhưng chưa rõ nguyên nhân rớt.', expectedEn: 'Calculates conversion by stage and identifies drop-off points.', expectedVi: 'Tính conversion theo giai đoạn và tìm điểm rớt.' },
    { labelEn: 'Optimize funnel', labelVi: 'Tối ưu funnel', command: '/ak:funnel optimize', whenEn: 'You need prioritized conversion improvements and A/B tests.', whenVi: 'Cần cải thiện chuyển đổi có ưu tiên và đề xuất A/B test.', expectedEn: 'Ranks improvements and produces test suggestions.', expectedVi: 'Xếp hạng đề xuất cải thiện và tạo ý tưởng test.' },
  ],
  skillStack: [
    { name: 'funnel-architect', type: 'agent' },
    { name: 'sale-enabler', type: 'agent' },
    { name: 'analytics-analyst', type: 'agent' },
    { name: 'campaign', type: 'skill' },
    { name: 'analytics', type: 'skill' },
  ],
  reportOutput: {
    titleEn: 'Funnel assets',
    titleVi: 'Tài sản funnel',
    patternEn: 'Designs: assets/funnels/designs/{date}-{slug}-funnel.md; audits: assets/funnels/audits/{date}-{funnel}-audit.md; tests: assets/funnels/tests/{date}-{test-name}.md',
    patternVi: 'Thiết kế: assets/funnels/designs/{date}-{slug}-funnel.md; audit: assets/funnels/audits/{date}-{funnel}-audit.md; test: assets/funnels/tests/{date}-{test-name}.md',
    descEn: 'Stores funnel architecture, stage metrics, audit findings, optimization recommendations, and test ideas.',
    descVi: 'Lưu kiến trúc funnel, chỉ số từng giai đoạn, phát hiện audit, đề xuất tối ưu và ý tưởng test.',
  },
};

export default data;

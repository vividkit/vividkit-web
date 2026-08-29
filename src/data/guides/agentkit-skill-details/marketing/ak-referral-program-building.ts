import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-referral-program-building',
  command: '/ak:referral-program-building',
  kit: 'marketer',
  header: {
    titleEn: '/ak:referral-program-building',
    titleVi: '/ak:referral-program-building',
    taglineEn: 'Referral program strategy and implementation for SaaS and digital products: rewards, platform selection, attribution, fraud prevention, email templates, and KPI tracking.',
    taglineVi: 'Chiến lược và triển khai referral program cho SaaS/sản phẩm số: reward, chọn nền tảng, attribution, chống gian lận, email template và theo dõi KPI.',
  },
  processFlow: [
    { number: 1, titleEn: 'Define Program', titleVi: 'Định nghĩa chương trình', descEn: 'Choose program type and reward structure that fit the product, business model, and customer motivation.', descVi: 'Chọn loại chương trình và cấu trúc reward phù hợp sản phẩm, mô hình kinh doanh và động lực khách hàng.' },
    { number: 2, titleEn: 'Design Rewards', titleVi: 'Thiết kế reward', descEn: 'Use two-sided, tiered, multi-step, product-aligned, cash, credit, storage, or commission incentives.', descVi: 'Dùng incentive hai phía, tiered, multi-step, gắn với sản phẩm, tiền mặt, credit, dung lượng hoặc commission.' },
    { number: 3, titleEn: 'Select Platform', titleVi: 'Chọn nền tảng', descEn: 'Compare Rewardful, ReferralCandy, Viral Loops, FirstPromoter, Voucherify, or custom build by scale and integration needs.', descVi: 'So sánh Rewardful, ReferralCandy, Viral Loops, FirstPromoter, Voucherify hoặc tự build theo quy mô và nhu cầu tích hợp.' },
    { number: 4, titleEn: 'Implement Tracking', titleVi: 'Triển khai tracking', descEn: 'Set referral links, attribution, database schema, API flows, analytics events, and reward fulfillment.', descVi: 'Thiết lập link referral, attribution, database schema, API flow, analytics event và quy trình trả thưởng.' },
    { number: 5, titleEn: 'Prevent Fraud', titleVi: 'Chống gian lận', descEn: 'Add validation rules, abuse detection, self-referral prevention, and suspicious pattern review.', descVi: 'Thêm rule kiểm tra, phát hiện abuse, chặn self-referral và review mẫu hình đáng ngờ.' },
    { number: 6, titleEn: 'Launch Messaging', titleVi: 'Ra mắt thông điệp', descEn: 'Prepare intro, reminder, referral ask, and reward fulfillment emails with simple 2–3 bullet explanations.', descVi: 'Chuẩn bị email giới thiệu, nhắc nhở, lời mời referral và trả thưởng với giải thích đơn giản trong 2–3 bullet.' },
    { number: 7, titleEn: 'Measure KPIs', titleVi: 'Đo KPI', descEn: 'Track participation, referral rate, referral CAC, referred CLV, ROI, conversion, and retention.', descVi: 'Theo dõi participation, referral rate, referral CAC, CLV của khách được giới thiệu, ROI, conversion và retention.' },
    { number: 8, titleEn: 'Optimize Loop', titleVi: 'Tối ưu vòng lặp', descEn: 'Soft-launch, compare incentives, refine placement in the product workflow, and iterate from results.', descVi: 'Soft-launch, so sánh incentive, tinh chỉnh vị trí trong workflow sản phẩm và lặp lại theo kết quả.' },
  ],
  corePrinciplesEn: [
    'Two-sided rewards drive stronger participation because both referrer and referee benefit.',
    'Product-aligned rewards are often more scalable than cash because they reinforce product usage.',
    'Referral prompts should live inside the user workflow, not as a detached feature.',
    'If the program cannot be explained in two or three bullets, it is too complex.',
  ],
  corePrinciplesVi: [
    'Reward hai phía thường tăng participation vì cả người giới thiệu và người được giới thiệu đều có lợi.',
    'Reward gắn với sản phẩm thường scale tốt hơn tiền mặt vì củng cố việc dùng sản phẩm.',
    'Referral prompt nên nằm trong workflow người dùng, không phải một feature tách rời.',
    'Nếu chương trình không giải thích được trong hai hoặc ba bullet thì quá phức tạp.',
  ],
  expertiseAreasEn: ['Two-sided rewards', 'Tiered incentives', 'Platform selection', 'Tracking and attribution', 'Fraud prevention', 'Referral emails', 'KPI measurement'],
  expertiseAreasVi: ['Reward hai phía', 'Incentive theo tier', 'Chọn nền tảng', 'Tracking và attribution', 'Chống gian lận', 'Email referral', 'Đo KPI'],
  workflowModes: [
    { flag: 'SaaS referral', modeEn: 'Use Rewardful, FirstPromoter, product credits, storage, or account upgrades for subscription loops.', modeVi: 'Dùng Rewardful, FirstPromoter, product credit, dung lượng hoặc nâng cấp tài khoản cho vòng lặp subscription.', research: 'Pricing model', redTeam: 'Reward abuse', validation: 'Referral CAC' },
    { flag: 'Ecommerce referral', modeEn: 'Use ReferralCandy or voucher-style rewards for purchase-driven programs.', modeVi: 'Dùng ReferralCandy hoặc reward dạng voucher cho chương trình dựa trên mua hàng.', research: 'AOV + margin', redTeam: 'Discount stacking', validation: 'Program ROI' },
    { flag: 'Custom campaign', modeEn: 'Use Viral Loops, Voucherify, or custom API patterns for campaign-specific mechanics.', modeVi: 'Dùng Viral Loops, Voucherify hoặc pattern API tự build cho cơ chế campaign riêng.', research: 'Integration needs', redTeam: 'Attribution gaps', validation: 'Tracking test' },
  ],
  promptExamples: [
    { labelEn: 'SaaS program', labelVi: 'Chương trình SaaS', command: '/ak:referral-program-building B2B SaaS referral program', whenEn: 'You need a referral loop for a subscription product.', whenVi: 'Khi cần referral loop cho sản phẩm subscription.', expectedEn: 'Reward design, platform recommendation, tracking approach, fraud checks, and KPI targets.', expectedVi: 'Thiết kế reward, đề xuất nền tảng, hướng tracking, kiểm tra fraud và target KPI.', recommended: true },
    { labelEn: 'Product-aligned reward', labelVi: 'Reward gắn sản phẩm', command: '/ak:referral-program-building product credit rewards', whenEn: 'You want incentives that reinforce product usage instead of pure cash payouts.', whenVi: 'Khi muốn incentive củng cố việc dùng sản phẩm thay vì chỉ trả tiền mặt.', expectedEn: 'Reward structure, placement in workflow, and launch messaging.', expectedVi: 'Cấu trúc reward, vị trí trong workflow và thông điệp ra mắt.' },
    { labelEn: 'Existing program', labelVi: 'Chương trình hiện có', command: '/ak:referral-program-building optimize existing referral program', whenEn: 'A referral program exists but participation, CAC, CLV, or ROI needs improvement.', whenVi: 'Khi đã có referral program nhưng participation, CAC, CLV hoặc ROI cần cải thiện.', expectedEn: 'Optimization checklist across rewards, UX, tracking, fraud, and metrics.', expectedVi: 'Checklist tối ưu qua reward, UX, tracking, fraud và metric.' },
  ],
  reportOutput: {
    titleEn: 'Referral Program Report',
    titleVi: 'Báo cáo referral program',
    patternEn: 'assets/reports/performance/{date}-referral-program.md',
    patternVi: 'assets/reports/performance/{date}-referral-program.md',
    locationEn: 'assets/reports/performance/',
    locationVi: 'assets/reports/performance/',
    descEn: 'Referral strategy and implementation reports are organized as performance assets.',
    descVi: 'Báo cáo chiến lược và triển khai referral được tổ chức như asset performance.',
  },
};

export default data;

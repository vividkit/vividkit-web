import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-pricing-strategy',
  command: '/ak:pricing-strategy',
  kit: 'marketer',
  header: {
    titleEn: '/ak:pricing-strategy — SaaS pricing strategy',
    titleVi: '/ak:pricing-strategy — Chiến lược giá SaaS',
    taglineEn: 'SaaS and digital-product pricing strategy for packaging, value metrics, tier design, willingness-to-pay research, price increases, pricing pages, and tests.',
    taglineVi: 'Chiến lược pricing cho SaaS và sản phẩm số: packaging, value metric, tier, willingness-to-pay research, tăng giá, pricing page và test.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'A recommendation is not a price change',
    titleVi: 'Khuyến nghị không phải thay đổi giá',
    contentEn: 'The Skill does not authorize billing edits, subscription migration, discounts, sales quotes, customer communication, geographic pricing, taxes, provider access, publication, or rollout; pricing decisions need commercial, finance, legal, product, and operations approval.',
    contentVi: 'Skill không cấp quyền sửa billing, migration subscription, discount, quote bán hàng, giao tiếp khách hàng, giá theo vùng, thuế, provider access, publication hoặc rollout; quyết định pricing cần duyệt từ commercial, finance, legal, product và operations.',
  },
  processFlow: [
    { number: 1, titleEn: 'Gather Context', titleVi: 'Thu thập bối cảnh', descEn: 'Ask for product type, current pricing, market, GTM motion, goals, performance, and constraints.', descVi: 'Hỏi loại sản phẩm, giá hiện tại, thị trường, GTM motion, mục tiêu, hiệu suất và ràng buộc.' },
    { number: 2, titleEn: 'Map Value', titleVi: 'Lập bản đồ giá trị', descEn: 'Compare perceived value, next-best alternative, price, consumer surplus, and cost floor.', descVi: 'So sánh perceived value, lựa chọn thay thế tốt nhất, mức giá, phần giá trị khách giữ lại và cost floor.' },
    { number: 3, titleEn: 'Research WTP', titleVi: 'Research WTP', descEn: 'Choose Van Westendorp, MaxDiff, Gabor-Granger, conjoint, competitor, or persona research as appropriate.', descVi: 'Chọn Van Westendorp, MaxDiff, Gabor-Granger, conjoint, competitor hoặc persona research tùy tình huống.' },
    { number: 4, titleEn: 'Choose Metric', titleVi: 'Chọn metric tính giá', descEn: 'Identify a value metric that scales with customer value: user, usage, record, transaction, project, or revenue share.', descVi: 'Xác định value metric tăng theo giá trị khách nhận: user, usage, record, transaction, project hoặc revenue share.' },
    { number: 5, titleEn: 'Design Tiers', titleVi: 'Thiết kế tier', descEn: 'Build Good-Better-Best or enterprise packaging with feature gates, usage limits, support levels, and access controls.', descVi: 'Dựng packaging Good-Better-Best hoặc enterprise bằng feature gate, usage limit, mức support và quyền truy cập.' },
    { number: 6, titleEn: 'Align Personas', titleVi: 'Căn theo persona', descEn: 'Map features, willingness to pay, buying process, and value perception to each pricing persona.', descVi: 'Gắn feature, willingness to pay, buying process và cách nhìn giá trị cho từng pricing persona.' },
    { number: 7, titleEn: 'Pick Motion', titleVi: 'Chọn motion', descEn: 'Decide freemium, free trial, reverse trial, custom enterprise pricing, or price increase strategy.', descVi: 'Chọn freemium, free trial, reverse trial, custom enterprise pricing hoặc chiến lược tăng giá.' },
    { number: 8, titleEn: 'Validate & Track', titleVi: 'Kiểm chứng & đo lường', descEn: 'Measure conversion, ARPU, revenue, LTV, churn by price, unit economics, and segment sensitivity.', descVi: 'Đo conversion, ARPU, revenue, LTV, churn theo mức giá, unit economics và độ nhạy theo segment.' },
  ],
  corePrinciplesEn: [
    'Price between the next-best alternative and perceived value; cost is a floor, not the basis.',
    'Packaging, pricing metric, and price point are separate decisions that must fit together.',
    'A good value metric is easy to understand, hard to game, and scales with customer success.',
    'Tier design should map to real personas, feature needs, buying processes, and willingness to pay.',
  ],
  corePrinciplesVi: [
    'Đặt giá nằm giữa lựa chọn thay thế tốt nhất và perceived value; cost chỉ là sàn, không phải nền tảng định giá.',
    'Packaging, pricing metric và price point là ba quyết định riêng nhưng phải ăn khớp với nhau.',
    'Value metric tốt phải dễ hiểu, khó lách và tăng cùng mức độ thành công của khách hàng.',
    'Thiết kế tier phải gắn với persona thật, nhu cầu feature, buying process và willingness to pay.',
  ],
  expertiseAreasEn: ['Value-based pricing', 'Van Westendorp', 'MaxDiff packaging', 'Value metrics', 'Good-Better-Best tiers', 'Freemium vs trial', 'Price increases', 'Enterprise pricing'],
  expertiseAreasVi: ['Value-based pricing', 'Van Westendorp', 'MaxDiff cho packaging', 'Value metric', 'Tier Good-Better-Best', 'Freemium vs trial', 'Tăng giá', 'Enterprise pricing'],
  workflowModes: [
    { flag: 'Value metric', modeEn: 'Find what customers should pay for as value grows.', modeVi: 'Tìm đơn vị khách nên trả tiền khi giá trị họ nhận tăng lên.', research: 'Usage + outcomes', redTeam: 'Metric mismatch', validation: 'Retention/expansion correlation' },
    { flag: 'Tier structure', modeEn: 'Design Good-Better-Best or enterprise tiers with clear differentiation.', modeVi: 'Thiết kế tier Good-Better-Best hoặc enterprise với khác biệt rõ.', research: 'Personas', redTeam: 'Decision paralysis', validation: 'Tier clarity' },
    { flag: 'WTP research', modeEn: 'Use Van Westendorp, MaxDiff, Gabor-Granger, or conjoint to estimate willingness to pay.', modeVi: 'Dùng Van Westendorp, MaxDiff, Gabor-Granger hoặc conjoint để ước lượng willingness to pay.', research: 'Survey', redTeam: 'Sample bias', validation: 'Price range' },
    { flag: 'Price increase', modeEn: 'Plan grandfathering, delayed increases, value-tied increases, or plan restructuring.', modeVi: 'Lên kế hoạch grandfather, tăng trễ, tăng gắn với giá trị hoặc tái cấu trúc plan.', research: 'Cohorts', redTeam: 'Churn risk', validation: 'Communication plan' },
    { flag: 'Pricing page', modeEn: 'Apply tier presentation, annual savings, FAQ, trust, and pricing psychology.', modeVi: 'Áp dụng cách trình bày tier, annual saving, FAQ, trust signal và tâm lý pricing.', research: 'Conversion data', redTeam: 'Confusing table', validation: 'Page checklist' },
  ],
  promptExamples: [
    { labelEn: 'New SaaS pricing', labelVi: 'Định giá SaaS mới', command: '/ak:pricing-strategy AI meeting notes app', whenEn: 'You need initial pricing, packaging, and metric decisions.', whenVi: 'Khi cần quyết định pricing, packaging và metric ban đầu.', expectedEn: 'Value metric, tier structure, research plan, and validation checklist.', expectedVi: 'Value metric, cấu trúc tier, kế hoạch research và checklist kiểm chứng.', recommended: true },
    { labelEn: 'Tier redesign', labelVi: 'Thiết kế lại tier', command: '/ak:pricing-strategy Pro tier restructure', whenEn: 'Existing packages are confusing or do not map to customer segments.', whenVi: 'Khi package hiện tại rối hoặc không khớp segment khách hàng.', expectedEn: 'Persona-based packaging and tier differentiation strategy.', expectedVi: 'Packaging theo persona và chiến lược khác biệt giữa tier.' },
    { labelEn: 'Price increase', labelVi: 'Tăng giá', command: '/ak:pricing-strategy price increase for existing customers', whenEn: 'You are considering raising prices and need a low-risk rollout.', whenVi: 'Khi cân nhắc tăng giá và cần rollout giảm rủi ro.', expectedEn: 'Increase strategy, communication plan, cohorts, and metrics to monitor.', expectedVi: 'Chiến lược tăng giá, kế hoạch truyền thông, cohort và chỉ số cần theo dõi.' },
  ],
};

export default data;

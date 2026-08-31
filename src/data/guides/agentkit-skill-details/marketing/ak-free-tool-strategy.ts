import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-free-tool-strategy',
  command: '/ak:free-tool-strategy',
  kit: 'marketer',
  header: {
    titleEn: '/ak:free-tool-strategy — Free Tool Strategy',
    titleVi: '/ak:free-tool-strategy — Chiến lược free tool',
    taglineEn: 'Plans and evaluates engineering-as-marketing tools that create lead generation, SEO value, brand awareness, or product education.',
    taglineVi: 'Lập kế hoạch và đánh giá free tool theo hướng engineering-as-marketing để tạo lead, SEO, nhận diện thương hiệu hoặc giáo dục sản phẩm.',
  },
  processFlow: [
    { number: 1, titleEn: 'Assess business', titleVi: 'Hiểu doanh nghiệp', descEn: 'Clarify core product, target audience, audience problems, current lead generation, resources, timeline, and budget.', descVi: 'Làm rõ sản phẩm chính, audience, vấn đề của họ, cách lấy lead hiện tại, nguồn lực, thời gian và ngân sách.' },
    { number: 2, titleEn: 'Choose goal', titleVi: 'Chọn mục tiêu', descEn: 'Decide whether the tool primarily serves lead generation, SEO traffic, brand awareness, product education, or a mix.', descVi: 'Xác định tool phục vụ chính cho lead gen, traffic SEO, nhận diện thương hiệu, giáo dục sản phẩm hoặc kết hợp.' },
    { number: 3, titleEn: 'Match tool type', titleVi: 'Ghép loại tool', descEn: 'Consider calculators, generators, analyzers, testers, libraries, or interactive educational experiences.', descVi: 'Cân nhắc calculator, generator, analyzer, tester, thư viện tài nguyên hoặc trải nghiệm giáo dục tương tác.' },
    { number: 4, titleEn: 'Validate idea', titleVi: 'Kiểm chứng ý tưởng', descEn: 'Score search demand, uniqueness, buyer match, path to product, build feasibility, maintenance, links, and shareability.', descVi: 'Chấm điểm nhu cầu tìm kiếm, độ khác biệt, độ khớp buyer, đường dẫn tới sản phẩm, khả năng xây, bảo trì, backlink và khả năng chia sẻ.' },
    { number: 5, titleEn: 'Pick build path', titleVi: 'Chọn cách xây', descEn: 'Choose custom build, no-code, or embedded existing tool based on strategic value and capacity.', descVi: 'Chọn tự xây, no-code hoặc nhúng tool có sẵn dựa trên giá trị chiến lược và năng lực triển khai.' },
    { number: 6, titleEn: 'Scope MVP', titleVi: 'Khoanh MVP', descEn: 'Keep one reliable core function, essential UX, mobile support, and basic lead capture. Skip accounts and advanced features initially.', descVi: 'Giữ một chức năng chính chạy ổn, UX thiết yếu, mobile, và lead capture cơ bản. Ban đầu bỏ account và tính năng nâng cao.' },
    { number: 7, titleEn: 'Design capture', titleVi: 'Thiết kế thu lead', descEn: 'Choose fully gated, partially gated, optional capture, or fully ungated based on value and reach tradeoffs.', descVi: 'Chọn gate toàn phần, gate một phần, thu email tùy chọn hoặc mở hoàn toàn theo đánh đổi giữa giá trị và độ phủ.' },
    { number: 8, titleEn: 'Plan promotion', titleVi: 'Lập kế hoạch quảng bá', descEn: 'Launch through owned channels, outreach, SEO content, social examples, product integration, and email follow-up.', descVi: 'Ra mắt qua kênh sở hữu, outreach, nội dung SEO, ví dụ social, tích hợp sản phẩm và email follow-up.' },
    { number: 9, titleEn: 'Measure ROI', titleVi: 'Đo ROI', descEn: 'Track traffic, sources, keyword rankings, completions, shares, email captures, MQLs, pipeline, customers, and payback period.', descVi: 'Theo dõi traffic, nguồn truy cập, ranking keyword, lượt hoàn tất, chia sẻ, email thu được, MQL, pipeline, khách hàng và thời gian hoàn vốn.' },
  ],
  corePrinciplesEn: [
    'A free tool must solve a real audience problem even without the main product.',
    'The best tool sits adjacent to what the company sells and teaches the problem it solves.',
    'Simple, focused, immediate value beats feature breadth.',
    'Investment is justified only when lead value, SEO value, and brand halo exceed build plus maintenance cost.',
  ],
  corePrinciplesVi: [
    'Free tool phải giải quyết vấn đề thật của audience ngay cả khi không dùng sản phẩm chính.',
    'Tool tốt nhất nằm sát thứ công ty bán và giúp thị trường hiểu vấn đề công ty giải quyết.',
    'Đơn giản, tập trung và có giá trị ngay lập tức tốt hơn nhiều tính năng.',
    'Chỉ đáng đầu tư khi giá trị lead, SEO và halo thương hiệu vượt chi phí xây dựng cộng bảo trì.',
  ],
  expertiseAreasEn: ['Engineering as marketing', 'Tool ideation', 'SEO opportunity', 'Lead capture', 'MVP scoping', 'Promotion and ROI'],
  expertiseAreasVi: ['Engineering as marketing', 'Ý tưởng free tool', 'Cơ hội SEO', 'Thu lead', 'Khoanh MVP', 'Quảng bá và ROI'],
  promptExamples: [
    { labelEn: 'Calculator strategy', labelVi: 'Chiến lược calculator', command: '/ak:free-tool-strategy ROI calculator for HR software',
      commandVi: '/ak:free-tool-strategy máy tính ROI cho phần mềm HR', whenEn: 'A numeric decision can become a lead-generating calculator.', whenVi: 'Một quyết định có số liệu có thể trở thành calculator lấy lead.', expectedEn: 'Scores the concept, defines SEO angle, lead capture, MVP, and ROI projection.', expectedVi: 'Chấm điểm ý tưởng, xác định góc SEO, cách thu lead, MVP và dự phóng ROI.', recommended: true },
    { labelEn: 'Generator idea', labelVi: 'Ý tưởng generator', command: '/ak:free-tool-strategy policy generator for small businesses',
      commandVi: '/ak:free-tool-strategy trình tạo chính sách cho doanh nghiệp nhỏ', whenEn: 'The audience repeatedly creates the same asset manually.', whenVi: 'Audience thường xuyên tạo thủ công cùng một loại tài sản.', expectedEn: 'Evaluates usefulness, buyer adjacency, build path, and follow-up sequence.', expectedVi: 'Đánh giá giá trị sử dụng, độ gần với buyer, cách xây và chuỗi follow-up.' },
    { labelEn: 'Interactive resource', labelVi: 'Tài nguyên tương tác', command: '/ak:free-tool-strategy interactive tutorial for developer onboarding',
      commandVi: '/ak:free-tool-strategy hướng dẫn tương tác cho onboarding nhà phát triển', whenEn: 'Product education and authority are stronger goals than direct lead capture.', whenVi: 'Giáo dục sản phẩm và xây dựng uy tín quan trọng hơn lấy lead trực tiếp.', expectedEn: 'Plans an educational tool with SEO, sharing, and product integration.', expectedVi: 'Lập kế hoạch tool giáo dục với SEO, chia sẻ và tích hợp vào sản phẩm.' },
  ],
  specialOperations: [
    { id: 'scorecard', titleEn: 'Idea scorecard', titleVi: 'Bảng điểm ý tưởng', descEn: 'Rates search demand, buyer fit, uniqueness, product path, feasibility, maintenance, link potential, and share-worthiness.', descVi: 'Chấm nhu cầu tìm kiếm, độ khớp buyer, khác biệt, đường tới sản phẩm, khả năng xây, bảo trì, backlink và khả năng chia sẻ.', color: 'amber' },
    { id: 'roi', titleEn: 'ROI projection', titleVi: 'Dự phóng ROI', descEn: 'Estimates leads, lead-to-customer rate, customer value, build cost, maintenance, and payback period.', descVi: 'Ước tính lead, tỷ lệ chuyển thành khách, giá trị khách hàng, chi phí xây, bảo trì và thời gian hoàn vốn.', color: 'emerald' },
  ],
  reportOutput: {
    titleEn: 'Tool strategy document',
    titleVi: 'Tài liệu chiến lược tool',
    patternEn: 'Concept, audience, lead fit, SEO, build approach, capture strategy, metrics, promotion, timeline',
    patternVi: 'Ý tưởng, audience, độ fit lead, SEO, cách xây, thu lead, chỉ số, quảng bá, timeline',
    descEn: 'Produces a decision-ready strategy and optional implementation spec if the concept should move forward.',
    descVi: 'Tạo chiến lược đủ để quyết định và spec triển khai nếu ý tưởng nên được làm tiếp.',
  },
};

export default data;

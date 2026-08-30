import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-email',
  command: '/ak:email',
  kit: 'marketer',
  header: {
    titleEn: 'Email Campaign Builder',
    titleVi: 'Xây dựng chiến dịch email',
    taglineEn: 'Creates newsletters, cold emails, launches, nurture flows, welcome and winback campaigns with subject lines, preview text, body, and CTA.',
    taglineVi: 'Tạo newsletter, cold email, launch, nurture, welcome và winback cùng tiêu đề, preview text, nội dung và CTA.',
  },
  processFlow: [
    { number: 1, titleEn: 'Parse type', titleVi: 'Đọc loại email', descEn: 'Read newsletter, cold, followup, launch, nurture, welcome, winback, flow, or sequence from the first argument.', descVi: 'Đọc newsletter, cold, followup, launch, nurture, welcome, winback, flow hoặc sequence từ tham số đầu.' },
    { number: 2, titleEn: 'Gather context', titleVi: 'Lấy bối cảnh', descEn: 'Ask for audience, message, offer, CTA, timing, and any deliverability constraints.', descVi: 'Hỏi audience, thông điệp, ưu đãi, CTA, thời điểm gửi và ràng buộc deliverability nếu có.' },
    { number: 3, titleEn: 'Load reference', titleVi: 'Nạp tham chiếu', descEn: 'For flow or sequence, load the matching reference; otherwise use the email templates and subject-line formulas.', descVi: 'Với flow hoặc sequence thì nạp đúng tham chiếu; trường hợp khác dùng template email và công thức tiêu đề.' },
    { number: 4, titleEn: 'Draft variants', titleVi: 'Soạn biến thể', descEn: 'Use email-wizard and copywriter patterns to produce the email body and 3 to 5 subject-line options.', descVi: 'Dùng mẫu email-wizard và copywriter để viết thân email cùng 3 đến 5 phương án tiêu đề.' },
    { number: 5, titleEn: 'Add envelope', titleVi: 'Thêm lớp gửi', descEn: 'Attach preview text, CTA, deliverability notes, and A/B test candidates where useful.', descVi: 'Bổ sung preview text, CTA, ghi chú vào inbox và phương án A/B test khi phù hợp.' },
    { number: 6, titleEn: 'Save asset', titleVi: 'Lưu asset', descEn: 'Write single emails, flows, or sequences to their documented email artifact paths.', descVi: 'Lưu email đơn, flow hoặc sequence vào đúng đường dẫn artifact email đã ghi.' },
  ],
  corePrinciplesEn: [
    'Email work starts with audience, message, and CTA, not with a template.',
    'Subject lines need multiple testable variants, not a single best guess.',
    'Deliverability is part of the copy contract when campaigns leave the draft stage.',
    'Flows and sequences require the reference workflow before drafting individual emails.',
  ],
  corePrinciplesVi: [
    'Làm email bắt đầu từ audience, thông điệp và CTA, không bắt đầu từ template.',
    'Tiêu đề cần nhiều biến thể có thể test, không phải một phỏng đoán duy nhất.',
    'Deliverability là một phần của hợp đồng nội dung khi chiến dịch chuẩn bị gửi thật.',
    'Flow và sequence phải nạp workflow tham chiếu trước khi viết từng email.',
  ],
  expertiseAreasEn: ['Newsletters', 'Cold outreach', 'Launch email', 'Nurture sequences', 'Subject-line optimization', 'Deliverability'],
  expertiseAreasVi: ['Newsletter', 'Cold outreach', 'Email launch', 'Chuỗi nurture', 'Tối ưu tiêu đề', 'Khả năng vào hộp thư đến'],
  promptExamples: [
    { labelEn: 'Automation flow', labelVi: 'Luồng tự động', command: '/ak:email flow post-demo nurture for B2B SaaS', whenEn: 'You need a complete email automation sequence.', whenVi: 'Cần một chuỗi email tự động hoàn chỉnh.', expectedEn: 'Loads the flow reference and designs the full automation path.', expectedVi: 'Nạp tham chiếu flow và thiết kế toàn bộ đường đi tự động.', recommended: true },
    { labelEn: 'Drip sequence', labelVi: 'Chuỗi drip', command: '/ak:email sequence 5-day onboarding for trial users', whenEn: 'A multi-email drip needs copy and sequencing.', whenVi: 'Cần chuỗi nhiều email có nội dung và thứ tự gửi.', expectedEn: 'Produces a full sequence with subject lines, body copy, CTAs, and timing.', expectedVi: 'Tạo chuỗi đầy đủ với tiêu đề, nội dung, CTA và nhịp gửi.' },
    { labelEn: 'Newsletter', labelVi: 'Newsletter', command: '/ak:email newsletter monthly product update', whenEn: 'You need one newsletter issue.', whenVi: 'Cần viết một số newsletter.', expectedEn: 'Drafts the newsletter with subject options, preview text, body, and CTA.', expectedVi: 'Soạn newsletter với các tiêu đề, preview text, thân email và CTA.' },
    { labelEn: 'Launch email', labelVi: 'Email ra mắt', command: '/ak:email launch new analytics dashboard', whenEn: 'A product or feature launch needs campaign copy.', whenVi: 'Sản phẩm hoặc tính năng mới cần nội dung email ra mắt.', expectedEn: 'Creates launch-oriented copy and A/B-ready subject-line variants.', expectedVi: 'Tạo nội dung theo mục tiêu ra mắt và các biến thể tiêu đề sẵn sàng A/B test.' },
  ],
  skillStack: [
    { name: 'email-wizard', type: 'agent' },
    { name: 'copywriter', type: 'agent' },
    { name: 'references/automation-flows.md', type: 'tool' },
    { name: 'references/subject-line-formulas.md', type: 'tool' },
  ],
  reportOutput: {
    titleEn: 'Email asset',
    titleVi: 'Asset email',
    patternEn: 'single email → assets/copy/emails/{date}-{type}-{slug}.md; flow → assets/emails/flows/{flow-type}-{date}.md; sequence → assets/copy/emails/{date}-{type}-sequence/',
    patternVi: 'email đơn → assets/copy/emails/{date}-{type}-{slug}.md; flow → assets/emails/flows/{flow-type}-{date}.md; sequence → assets/copy/emails/{date}-{type}-sequence/',
    descEn: 'Stores campaign copy, automation flow plans, or sequence directories with subject variants, preview text, CTA, timing, and deliverability notes.',
    descVi: 'Lưu nội dung chiến dịch, kế hoạch flow tự động hoặc thư mục sequence cùng tiêu đề, preview text, CTA, nhịp gửi và ghi chú deliverability.',
  },
};

export default data;

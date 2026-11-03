import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-form-cro',
  command: '/ak:form-cro',
  kit: 'marketer',
  header: {
    titleEn: '/ak:form-cro — Form Conversion Optimization',
    titleVi: '/ak:form-cro — Tối ưu chuyển đổi form',
    taglineEn: 'Audits and redesigns non-signup forms to increase completion while keeping the data the business actually needs.',
    taglineVi: 'Kiểm tra và thiết kế lại các form không phải đăng ký để tăng tỷ lệ hoàn tất mà vẫn giữ dữ liệu doanh nghiệp thật sự cần.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Less friction must not mean less informed choice',
    titleVi: 'Giảm ma sát không được làm giảm lựa chọn có hiểu biết',
    contentEn: 'Do not remove required disclosures, preselect consent, hide optional status, misrepresent urgency, or make refusal harder than submission. Conversion does not override privacy, accessibility, security, or legal obligations. The skill returns recommendations; code edits, analytics changes, publishing, and production rollout need separate approval.',
    contentVi: 'Không xóa thông tin bắt buộc phải công bố, không chọn sẵn ô đồng ý, không che việc một field là tùy chọn, không tạo cảm giác gấp sai sự thật và không làm việc từ chối khó hơn việc gửi form. Chuyển đổi không đứng trên nghĩa vụ về quyền riêng tư, accessibility, bảo mật hay pháp lý. Skill chỉ đưa đề xuất; sửa code, đổi analytics, publish và triển khai lên production cần được duyệt riêng.',
  },
  processFlow: [
    { number: 1, titleEn: 'Classify form', titleVi: 'Phân loại form', descEn: 'Identify lead capture, contact, demo request, application, survey, checkout, or quote request context.', descVi: 'Xác định đây là form lead capture, liên hệ, demo, ứng tuyển, khảo sát, checkout hay báo giá.' },
    { number: 2, titleEn: 'Capture baseline', titleVi: 'Ghi nhận hiện trạng', descEn: 'Collect field count, completion rate, mobile split, abandonment points, and what happens after submission. Missing analytics is a finding: recommend instrumentation first instead of guessing.', descVi: 'Thu số lượng field, tỷ lệ hoàn tất, tỷ lệ mobile, điểm rớt và quy trình sau khi submit. Thiếu analytics cũng là một phát hiện: đề xuất gắn đo lường trước thay vì đoán.' },
    { number: 3, titleEn: 'Price each field', titleVi: 'Tính chi phí từng field', descEn: 'Challenge every required field: is it needed now or obtainable later? Each proposed removal or deferral names who uses the field downstream, or flags that owner as unknown and to be confirmed before shipping.', descVi: 'Chất vấn từng field bắt buộc: có cần ngay không, hay hỏi sau được? Mỗi đề xuất bỏ hoặc hoãn một field phải nêu ai đang dùng field đó ở bước sau, hoặc ghi rõ chưa biết và phải xác nhận trước khi triển khai.' },
    { number: 4, titleEn: 'Reduce cognitive load', titleVi: 'Giảm tải nhận thức', descEn: 'Simplify labels, group logically, use single-column layout by default, and provide smart defaults.', descVi: 'Đơn giản hóa nhãn, nhóm hợp lý, mặc định dùng một cột và cung cấp giá trị gợi ý thông minh.' },
    { number: 5, titleEn: 'Fix validation', titleVi: 'Sửa validation', descEn: 'Use blur-based inline validation, specific error messages, preserved input, and focus on the first error.', descVi: 'Dùng validation khi rời field, thông báo lỗi cụ thể, giữ dữ liệu đã nhập và đưa focus tới lỗi đầu tiên.' },
    { number: 6, titleEn: 'Strengthen CTA', titleVi: 'Làm rõ CTA', descEn: 'Replace weak submit copy with action plus value, then clarify loading, success, and error states.', descVi: 'Thay chữ submit yếu bằng hành động kèm giá trị nhận được, rồi làm rõ trạng thái loading, thành công và lỗi.' },
    { number: 7, titleEn: 'Add trust', titleVi: 'Thêm niềm tin', descEn: 'Place privacy, response-time, social-proof, or security cues near the form only when relevant and confirmed against the actual policy, data flow, and supplied evidence; never invent them.', descVi: 'Chỉ đặt cam kết riêng tư, thời gian phản hồi, bằng chứng xã hội hoặc dấu hiệu bảo mật gần form khi thật sự liên quan và đã đối chiếu với chính sách, luồng dữ liệu và bằng chứng thật; không bịa ra.' },
    { number: 8, titleEn: 'Define tests', titleVi: 'Đặt giả thuyết test', descEn: 'Prioritize A/B hypotheses for structure, fields, smart forms, copy, trust, and mobile UX, each with the metric that would confirm it.', descVi: 'Ưu tiên giả thuyết A/B cho cấu trúc, field, smart form, copy, niềm tin và trải nghiệm mobile, kèm chỉ số sẽ xác nhận từng giả thuyết.' },
  ],
  corePrinciplesEn: [
    'Field cost depends on intent, qualification needs, and layout, not a generic field-count penalty; cutting a qualifying field can raise submissions and lower pipeline.',
    'The perceived value above the form must exceed the effort below it.',
    'Inline errors should help users recover without losing input.',
    'Success is judged on qualified completions, not raw submissions; each change cites evidence or is labeled a hypothesis.',
  ],
  corePrinciplesVi: [
    'Chi phí của một field tùy vào ý định, nhu cầu sàng lọc và layout, không phạt chung theo số field; bỏ một field dùng để sàng lọc có thể tăng lượt gửi nhưng giảm pipeline.',
    'Giá trị người dùng thấy phía trên form phải lớn hơn công sức họ bỏ ra phía dưới.',
    'Lỗi inline phải giúp người dùng sửa mà không mất dữ liệu đã nhập.',
    'Thành công được đo bằng lượt hoàn tất đủ chất lượng, không phải số lượt gửi thô; mỗi thay đổi phải dẫn bằng chứng hoặc ghi rõ là giả thuyết.',
  ],
  expertiseAreasEn: ['Field reduction', 'Multi-step forms', 'Inline validation', 'CTA copy', 'Trust cues', 'Mobile form UX'],
  expertiseAreasVi: ['Giảm field', 'Form nhiều bước', 'Validation inline', 'Copy CTA', 'Tín hiệu tin cậy', 'UX form trên mobile'],
  promptExamples: [
    { labelEn: 'Demo form audit', labelVi: 'Audit form demo', command: '/ak:form-cro "demo request form with 9 fields"',
      commandVi: '/ak:form-cro "form yêu cầu demo với 9 trường"', whenEn: 'A sales or demo form feels too long or underperforms.', whenVi: 'Form sales hoặc demo quá dài hoặc chuyển đổi kém.', expectedEn: 'Produces issues, impact, fixes, priority, recommended field order, copy, errors, layout, and test ideas.', expectedVi: 'Đưa ra lỗi, tác động, cách sửa, ưu tiên, thứ tự field, copy, thông báo lỗi, layout và ý tưởng test.', recommended: true },
    { labelEn: 'Lead capture', labelVi: 'Lead capture', command: '/ak:form-cro "lead magnet download form"',
      commandVi: '/ak:form-cro "form tải lead magnet"', whenEn: 'A gated-content form needs more submissions without hurting lead quality.', whenVi: 'Form tải tài liệu cần nhiều submission hơn mà không làm giảm chất lượng lead.', expectedEn: 'It balances minimum viable fields, the value proposition, gating, and enrichment options inside the form design.', expectedVi: 'Cân bằng field tối thiểu, lời hứa giá trị, cách gate và phương án làm giàu dữ liệu.' },
    { labelEn: 'Contact form', labelVi: 'Form liên hệ', command: '/ak:form-cro "contact form for agency website"',
      commandVi: '/ak:form-cro "form liên hệ cho website agency"', whenEn: 'A contact form needs clearer expectations and lower friction.', whenVi: 'Form liên hệ cần kỳ vọng rõ hơn và ít ma sát hơn.', expectedEn: 'It recommends essential fields, optional phone, message handling, and response-time copy only where the real response time is confirmed, so submitters know what happens next.', expectedVi: 'Đề xuất field thiết yếu, phone tùy chọn, cách xử lý tin nhắn và copy về thời gian phản hồi chỉ khi thời gian thật đã được xác nhận, để người gửi biết điều gì xảy ra tiếp theo.' },
  ],
  specialOperations: [
    { id: 'audit', titleEn: 'Form audit', titleVi: 'Audit form', descEn: 'Each issue includes what is wrong, the evidence or a hypothesis label, the fix, priority, and a validation metric; expected effects are not promises.', descVi: 'Mỗi vấn đề nêu phần sai, bằng chứng hoặc nhãn giả thuyết, cách sửa, mức ưu tiên và chỉ số để kiểm chứng; tác động dự kiến không phải lời hứa.', color: 'rose' },
    { id: 'design', titleEn: 'Recommended design', titleVi: 'Thiết kế đề xuất', descEn: 'Defines required and optional fields, order, copy, error messages, and layout.', descVi: 'Xác định field bắt buộc và tùy chọn, thứ tự, copy, thông báo lỗi và layout.', color: 'blue' },
    { id: 'experiments', titleEn: 'Test hypotheses', titleVi: 'Giả thuyết test', descEn: 'Turns recommendations into structure, field, copy, trust, and mobile experiments.', descVi: 'Chuyển đề xuất thành thử nghiệm về cấu trúc, field, copy, niềm tin và mobile.', color: 'emerald' },
  ],
};

export default data;

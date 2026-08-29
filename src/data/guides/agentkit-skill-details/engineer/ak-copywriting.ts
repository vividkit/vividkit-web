import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-copywriting',
  command: '/ak:copywriting',
  kit: 'engineer',
  header: {
    titleEn: '/ak:copywriting — Conversion copywriting formulas',
    titleVi: '/ak:copywriting — Công thức copy chuyển đổi',
    taglineEn: 'Conversion copywriting formulas, headline templates, email patterns, landing-page structures, CTA optimization, and writing-style extraction.',
    taglineVi: 'Công thức copy chuyển đổi, mẫu headline, pattern email, cấu trúc landing page, tối ưu CTA và trích xuất phong cách viết.',
  },
  processFlow: [
    { number: 1, titleEn: 'Classify copy', titleVi: 'Phân loại copy', descEn: 'Identify whether the user needs headlines, subject lines, landing page copy, emails, social posts, product descriptions, CTAs, A/B variants, or style transfer.', descVi: 'Xác định người dùng cần headline, subject line, landing page, email, bài social, mô tả sản phẩm, CTA, biến thể A/B hay chuyển phong cách viết.' },
    { number: 2, titleEn: 'Load style', titleVi: 'Nạp phong cách', descEn: 'Use writing-styles reference or extract a named style from supported documents and media when the user provides assets.', descVi: 'Dùng tài liệu writing-styles hoặc trích phong cách từ tài liệu/media được hỗ trợ khi người dùng cung cấp asset.' },
    { number: 3, titleEn: 'Choose formula', titleVi: 'Chọn công thức', descEn: 'Map the job to AIDA, PAS, BAB, 4Ps, 4Us, FAB, or another documented formula.', descVi: 'Gắn nhiệm vụ với AIDA, PAS, BAB, 4Ps, 4Us, FAB hoặc công thức đã ghi phù hợp.' },
    { number: 4, titleEn: 'Draft core message', titleVi: 'Soạn thông điệp chính', descEn: 'Lead with the benefit, match awareness level, make the promise specific, and avoid vague claims.', descVi: 'Mở bằng lợi ích, khớp mức nhận thức của khách hàng, làm lời hứa thật cụ thể và tránh tuyên bố mơ hồ.' },
    { number: 5, titleEn: 'Build channel shape', titleVi: 'Định dạng theo kênh', descEn: 'Apply the right structure: curiosity or urgency for emails, promise→how→CTA→proof for landing pages, and platform-specific social copy.', descVi: 'Áp dụng cấu trúc đúng kênh: tò mò hoặc cấp bách cho email, promise→how→CTA→proof cho landing page, và copy theo từng nền tảng social.' },
    { number: 6, titleEn: 'Optimize CTA', titleVi: 'Tối ưu CTA', descEn: 'Use one clear action per piece, benefit-led wording, and action verbs such as “Start” or “Get”.', descVi: 'Dùng một hành động rõ cho mỗi nội dung, câu chữ dẫn bằng lợi ích và động từ hành động như “Start” hoặc “Get”.' },
    { number: 7, titleEn: 'Polish aloud', titleVi: 'Chỉnh bằng cách đọc', descEn: 'Read the copy aloud, remove awkward phrasing, test headline alternatives first, and organize outputs through project-organization.', descVi: 'Đọc thành tiếng, bỏ câu gượng, ưu tiên thử các headline trước và sắp xếp đầu ra bằng project-organization.' },
  ],
  corePrinciplesEn: ['Lead with benefit, not feature.', 'One CTA per piece.', 'Specificity beats vague claims.', 'Match copy to awareness level.', 'If it sounds awkward aloud, rewrite it.'],
  corePrinciplesVi: ['Dẫn bằng lợi ích, không phải tính năng.', 'Mỗi nội dung chỉ có một CTA.', 'Cụ thể luôn tốt hơn tuyên bố mơ hồ.', 'Copy phải khớp mức nhận thức của khách hàng.', 'Đọc lên thấy gượng thì viết lại.'],
  expertiseAreasEn: ['AIDA, PAS, BAB, 4Ps, 4Us, FAB', 'Headline templates', 'Email subject lines', 'Landing pages and CTAs', 'Power words', 'Writing-style extraction'],
  expertiseAreasVi: ['AIDA, PAS, BAB, 4Ps, 4Us, FAB', 'Mẫu headline', 'Subject line email', 'Landing page và CTA', 'Power words', 'Trích xuất phong cách viết'],
  promptExamples: [
    { labelEn: 'Landing page', labelVi: 'Landing page', command: '/ak:copywriting landing page for an AI bookkeeping app for freelancers', whenEn: 'You need conversion-oriented hero, proof, benefits, and CTA copy.', whenVi: 'Khi cần copy hero, proof, lợi ích và CTA tối ưu chuyển đổi.', expectedEn: 'Formula-driven page copy with a specific promise and one primary CTA.', expectedVi: 'Copy theo công thức, lời hứa cụ thể và một CTA chính.', recommended: true },
    { labelEn: 'Email campaign', labelVi: 'Chiến dịch email', command: '/ak:copywriting email campaign to reactivate trial users', whenEn: 'You need subject lines, body angles, and sequence structure.', whenVi: 'Khi cần subject line, góc viết nội dung và cấu trúc chuỗi email.', expectedEn: 'Benefit-led sequence copy with testable subject-line variants.', expectedVi: 'Chuỗi email dẫn bằng lợi ích với các subject line có thể thử nghiệm.' },
    { labelEn: 'Style transfer', labelVi: 'Chuyển phong cách', command: '/ak:copywriting product description using the uploaded founder-letter style', whenEn: 'User-provided writing assets should shape voice and cadence.', whenVi: 'Khi asset viết của người dùng cần định hướng giọng và nhịp câu.', expectedEn: 'Copy that follows the extracted style while preserving conversion structure.', expectedVi: 'Copy theo phong cách trích xuất nhưng vẫn giữ cấu trúc chuyển đổi.' },
  ],
  skillStack: [{ name: 'writing-styles', type: 'tool' }, { name: 'extract-writing-styles.py', type: 'tool' }, { name: 'project-organization', type: 'skill' }],
};

export default data;

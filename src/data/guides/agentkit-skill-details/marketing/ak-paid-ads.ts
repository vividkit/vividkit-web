import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-paid-ads',
  command: '/ak:paid-ads',
  kit: 'marketer',
  header: {
    titleEn: '/ak:paid-ads — Performance ads strategy',
    titleVi: '/ak:paid-ads — Chiến lược quảng cáo performance',
    taglineEn: 'Performance marketing campaign strategy for Google Ads, Meta, LinkedIn, X, TikTok, and retargeting — from goal, offer, audience, creative, budget, and optimization to weekly reporting.',
    taglineVi: 'Chiến lược performance marketing cho Google Ads, Meta, LinkedIn, X, TikTok và retargeting — từ mục tiêu, offer, audience, creative, ngân sách, tối ưu đến báo cáo hằng tuần.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Strategy does not grant platform authority',
    titleVi: 'Chiến lược không cấp quyền trên nền tảng',
    contentEn: 'Creating audiences, uploading customer lists, installing pixels, creating campaigns, publishing ads, changing bids or budgets, and enabling delivery are separate external mutations that require account, credential, policy, spend, and human approval.',
    contentVi: 'Tạo audience, upload danh sách khách hàng, cài pixel, tạo campaign, publish ads, đổi bid hoặc budget và bật delivery là các mutation bên ngoài riêng, cần duyệt account, credential, policy, spend và con người.',
  },
  processFlow: [
    { number: 1, titleEn: 'Clarify Goal', titleVi: 'Chốt mục tiêu', descEn: 'Identify objective, target CPA or ROAS, budget, compliance, geography, and success definition.', descVi: 'Xác định mục tiêu, CPA hoặc ROAS đích, ngân sách, ràng buộc compliance, khu vực và tiêu chí thành công.' },
    { number: 2, titleEn: 'Frame Offer', titleVi: 'Đóng khung offer', descEn: 'Capture product, landing page, value proposition, promotion, urgency, and post-click expectation.', descVi: 'Ghi rõ sản phẩm, landing page, lời hứa giá trị, ưu đãi, tính khẩn cấp và kỳ vọng sau khi click.' },
    { number: 3, titleEn: 'Select Platform', titleVi: 'Chọn nền tảng', descEn: 'Match intent and audience to Google Search, Meta demand gen, LinkedIn B2B, X, TikTok, YouTube, or display.', descVi: 'Ghép intent và audience với Google Search, Meta demand gen, LinkedIn B2B, X, TikTok, YouTube hoặc display.' },
    { number: 4, titleEn: 'Build Structure', titleVi: 'Dựng cấu trúc', descEn: 'Name campaigns consistently, split audiences/ad sets cleanly, and keep budgets from fragmenting learning.', descVi: 'Đặt tên campaign nhất quán, tách audience/ad set rõ ràng và tránh chia nhỏ ngân sách làm vỡ giai đoạn học.' },
    { number: 5, titleEn: 'Write Ads', titleVi: 'Viết quảng cáo', descEn: 'Create PAS, BAB, social-proof, keyword-benefit, curiosity, and outcome-led copy variants with clear CTAs.', descVi: 'Tạo các biến thể copy theo PAS, BAB, social proof, keyword-benefit, curiosity và outcome với CTA rõ ràng.' },
    { number: 6, titleEn: 'Design Creative', titleVi: 'Thiết kế creative', descEn: 'Plan images, screenshots, short-form video hooks, captions, mobile formats, and one-variable creative tests.', descVi: 'Lên ảnh, screenshot, hook video ngắn, caption, định dạng mobile và test creative từng biến một.' },
    { number: 7, titleEn: 'Target & Track', titleVi: 'Nhắm chọn & đo lường', descEn: 'Set keywords, lookalikes, retargeting windows, exclusions, pixels, conversion tracking, and UTM discipline.', descVi: 'Thiết lập keyword, lookalike, cửa sổ retargeting, loại trừ, pixel, conversion tracking và quy tắc UTM.' },
    { number: 8, titleEn: 'Optimize', titleVi: 'Tối ưu', descEn: 'Review CPA, ROAS, CTR, CPM, fatigue, landing-page conversion, bid strategy, and reallocate budget to winners.', descVi: 'Rà CPA, ROAS, CTR, CPM, fatigue, chuyển đổi landing page, bid strategy và dồn ngân sách cho tổ hợp thắng.' },
  ],
  corePrinciplesEn: [
    'Start with the business objective and conversion value, not ad copy.',
    'Choose channels by demand state: capture existing intent with search, create demand with social, target B2B precisely on LinkedIn.',
    'Tracking, UTMs, exclusions, and landing-page fit are part of the campaign, not afterthoughts.',
    'Test the largest levers first: angle, audience, offer, then hook, visual, body copy, and CTA.',
  ],
  corePrinciplesVi: [
    'Bắt đầu từ mục tiêu kinh doanh và giá trị chuyển đổi, không bắt đầu bằng câu chữ quảng cáo.',
    'Chọn kênh theo trạng thái nhu cầu: search để bắt demand sẵn có, social để tạo demand, LinkedIn để nhắm B2B chính xác.',
    'Tracking, UTM, loại trừ audience và độ khớp landing page là một phần của campaign, không phải việc phụ.',
    'Test đòn bẩy lớn trước: angle, audience, offer, rồi mới đến hook, visual, body copy và CTA.',
  ],
  expertiseAreasEn: ['Platform selection', 'Campaign structure', 'Ad copy frameworks', 'Audience targeting', 'Creative testing', 'Retargeting', 'CPA/ROAS optimization'],
  expertiseAreasVi: ['Chọn nền tảng', 'Cấu trúc campaign', 'Framework ad copy', 'Nhắm chọn audience', 'Test creative', 'Retargeting', 'Tối ưu CPA/ROAS'],
  workflowModes: [
    { flag: 'Google Ads', modeEn: 'High-intent search, Performance Max, Display, YouTube, Demand Gen, and keyword-led acquisition.', modeVi: 'Search intent cao, Performance Max, Display, YouTube, Demand Gen và acquisition theo keyword.', research: 'Keywords', redTeam: 'Negative keywords', validation: 'Conversion tracking' },
    { flag: 'Meta', modeEn: 'Demand generation, visual creative, broad or lookalike audiences, lead forms, conversions, and retargeting.', modeVi: 'Tạo demand, creative trực quan, audience rộng hoặc lookalike, lead form, conversion và retargeting.', research: 'Audience signals', redTeam: 'Ad fatigue', validation: 'Pixel + CAPI' },
    { flag: 'LinkedIn', modeEn: 'B2B decision-maker targeting by role, seniority, company size, industry, matched audiences, and lead gen forms.', modeVi: 'Nhắm B2B theo vai trò, cấp bậc, quy mô công ty, ngành, matched audience và lead gen form.', research: 'ICP', redTeam: 'Tiny audience', validation: 'Insight Tag' },
    { flag: 'Retargeting', modeEn: 'Funnel windows for hot, warm, and cold audiences with customer, converter, bounce, and irrelevant-page exclusions.', modeVi: 'Cửa sổ funnel cho hot, warm, cold audience kèm loại trừ customer, converter, bounce và trang không liên quan.', research: 'Behavior segments', redTeam: 'Over-frequency', validation: 'UTM + GA4' },
  ],
  promptExamples: [
    { labelEn: 'Google Search', labelVi: 'Google Search', command: '/ak:paid-ads Google Search', whenEn: 'You need bottom-of-funnel keyword campaigns for people actively searching.', whenVi: 'Khi cần campaign keyword cuối phễu cho người đang chủ động tìm kiếm.', expectedEn: 'Platform fit, campaign structure, keyword/ad copy approach, tracking, and optimization plan.', expectedVi: 'Độ phù hợp nền tảng, cấu trúc campaign, hướng keyword/ad copy, tracking và kế hoạch tối ưu.', recommended: true },
    { labelEn: 'Meta retargeting', labelVi: 'Retargeting Meta', command: '/ak:paid-ads Meta retargeting', whenEn: 'You have site visitors, engagers, trial users, or abandoned carts to bring back.', whenVi: 'Khi có visitor, người tương tác, trial user hoặc cart abandoner cần kéo quay lại.', expectedEn: 'Audience windows, exclusions, messages by funnel stage, creative tests, and reporting metrics.', expectedVi: 'Cửa sổ audience, loại trừ, thông điệp theo stage, test creative và chỉ số báo cáo.' },
    { labelEn: 'LinkedIn lead gen', labelVi: 'Lead gen LinkedIn', command: '/ak:paid-ads LinkedIn Lead Gen', whenEn: 'You sell B2B and job title, seniority, company size, or industry targeting matters.', whenVi: 'Khi bán B2B và cần nhắm theo chức danh, cấp bậc, quy mô công ty hoặc ngành.', expectedEn: 'Lead Gen Form strategy, audience sizing, realistic CPC assumptions, and conversion setup.', expectedVi: 'Chiến lược Lead Gen Form, sizing audience, giả định CPC thực tế và setup chuyển đổi.' },
  ],
  reportOutput: {
    titleEn: 'Campaign Plan & Review',
    titleVi: 'Kế hoạch & review campaign',
    patternEn: 'Platform strategy, structure, creative variants, targeting, budget, optimization checklist',
    patternVi: 'Chiến lược nền tảng, cấu trúc, biến thể creative, targeting, ngân sách, checklist tối ưu',
    descEn: 'Produces a practical paid media plan or optimization review grounded in goal, platform, audience, creative, measurement, and budget pacing.',
    descVi: 'Tạo kế hoạch paid media hoặc review tối ưu dựa trên mục tiêu, nền tảng, audience, creative, đo lường và nhịp ngân sách.',
  },
};

export default data;

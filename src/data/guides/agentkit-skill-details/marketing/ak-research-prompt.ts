import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-research-prompt',
  command: '/ak:research-prompt',
  kit: 'marketer',
  header: {
    titleEn: '/ak:research-prompt — Self-contained research brief',
    titleVi: '/ak:research-prompt — Research brief tự đủ ngữ cảnh',
    taglineEn: 'Writes one self-contained research brief for a human or AI researcher so the next research pass can produce decision-ready, source-backed findings.',
    taglineVi: 'Viết một research brief tự đủ ngữ cảnh cho người hoặc AI researcher để lượt research tiếp theo tạo kết luận có nguồn và dùng được cho quyết định.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'BRIEF WRITER, NOT RESEARCH RUNNER',
    titleVi: 'VIẾT BRIEF, KHÔNG CHẠY RESEARCH',
    contentEn: 'This skill writes exactly one paragraph. It must not perform the research, manufacture facts, include secrets/private URLs/credentials/personal data, add headings, add a preface, or create a second deliverable.',
    contentVi: 'Skill này viết đúng một đoạn văn. Nó không được tự research, bịa sự thật, đưa secret/private URL/credential/dữ liệu cá nhân, thêm heading, thêm lời dẫn hoặc tạo deliverable thứ hai.',
  },
  processFlow: [
    { number: 1, titleEn: 'Collect Context', titleVi: 'Gom bối cảnh', descEn: 'Gather the decision, audience, deadline, known facts, constraints, and intended use from conversation or files.', descVi: 'Gom quyết định cần hỗ trợ, audience, deadline, facts đã biết, ràng buộc và cách dùng kết quả từ hội thoại hoặc file.' },
    { number: 2, titleEn: 'State Situation', titleVi: 'Nêu tình huống', descEn: 'Write project context and situation for a researcher with no prior conversation history.', descVi: 'Viết bối cảnh dự án và tình huống để researcher không có lịch sử hội thoại vẫn hiểu.' },
    { number: 3, titleEn: 'Define Question', titleVi: 'Định nghĩa câu hỏi', descEn: 'Define one research question and the concrete decision it will inform.', descVi: 'Định nghĩa một câu hỏi research và quyết định cụ thể mà nó sẽ hỗ trợ.' },
    { number: 4, titleEn: 'Add Sub-questions', titleVi: 'Thêm câu hỏi phụ', descEn: 'Add three to six inline numbered sub-questions that cover the decision without mixing unrelated missions.', descVi: 'Thêm 3–6 câu hỏi phụ đánh số inline, bao phủ quyết định nhưng không trộn nhiệm vụ không liên quan.' },
    { number: 5, titleEn: 'Set Evidence Rules', titleVi: 'Đặt luật bằng chứng', descEn: 'Specify source hierarchy, include/avoid constraints, contradiction handling, and gap-round requirements.', descVi: 'Quy định thứ bậc nguồn, điều nên gồm/tránh, cách xử lý mâu thuẫn và yêu cầu vòng kiểm tra gap.' },
    { number: 6, titleEn: 'Define Output Bar', titleVi: 'Định chuẩn output', descEn: 'Require source URL, specific claim, one-line decision relevance for each finding, and one detailed Markdown result.', descVi: 'Yêu cầu mỗi finding có URL nguồn, claim cụ thể, một dòng liên quan tới quyết định và một kết quả Markdown chi tiết.' },
    { number: 7, titleEn: 'Return Paragraph', titleVi: 'Trả về một đoạn', descEn: 'Return exactly one focused paragraph with no headings, preface, or extra deliverable.', descVi: 'Trả đúng một đoạn văn tập trung, không heading, không lời mở đầu, không deliverable phụ.' },
  ],
  corePrinciplesEn: [
    'A good research prompt is self-contained enough to hand off without a follow-up exchange.',
    'The research question must map to a decision; otherwise the researcher cannot prioritize evidence.',
    'Primary sources beat forums and social posts; weak signals must not become factual proof.',
    'The brief must force source URLs, specific claims, decision relevance, contradiction handling, and a gap round.',
  ],
  corePrinciplesVi: [
    'Research prompt tốt phải tự đủ ngữ cảnh để handoff mà không cần hỏi lại.',
    'Câu hỏi research phải gắn với một quyết định; nếu không researcher sẽ không biết ưu tiên bằng chứng.',
    'Nguồn primary mạnh hơn forum và social post; tín hiệu yếu không được biến thành bằng chứng chắc chắn.',
    'Brief phải bắt buộc URL nguồn, claim cụ thể, liên quan tới quyết định, xử lý mâu thuẫn và vòng kiểm tra gap.',
  ],
  expertiseAreasEn: ['Research brief writing', 'Decision framing', 'Evidence hierarchy', 'Source requirements', 'Contradiction handling', 'Gap-round instructions'],
  expertiseAreasVi: ['Viết research brief', 'Đóng khung quyết định', 'Thứ bậc bằng chứng', 'Yêu cầu nguồn', 'Xử lý mâu thuẫn', 'Hướng dẫn gap round'],
  workflowModes: [
    { flag: '<research topic | decision>', modeEn: 'Turn a topic or decision into a handoff-ready research assignment.', modeVi: 'Chuyển topic hoặc quyết định thành research assignment sẵn sàng handoff.', research: 'Context only', redTeam: 'Unclear decision', validation: 'One paragraph' },
  ],
  promptExamples: [
    { labelEn: 'Market decision', labelVi: 'Quyết định thị trường', command: '/ak:research-prompt Should we prioritize LinkedIn Ads or Google Search for a B2B SaaS launch?', whenEn: 'You need a research assignment before choosing a marketing channel.', whenVi: 'Khi cần research assignment trước khi chọn kênh marketing.', expectedEn: 'One paragraph brief with context, decision, sub-questions, source rules, and output requirements.', expectedVi: 'Một đoạn brief có bối cảnh, quyết định, câu hỏi phụ, luật nguồn và yêu cầu output.', recommended: true },
    { labelEn: 'Pricing research', labelVi: 'Research pricing', command: '/ak:research-prompt Evidence needed to choose freemium vs free trial for our developer tool', whenEn: 'A monetization decision needs source-backed research.', whenVi: 'Khi quyết định monetization cần research có nguồn.', expectedEn: 'A handoff-ready research paragraph focused on the decision, evidence needed, and expected output.', expectedVi: 'Đoạn research sẵn sàng handoff và tập trung vào quyết định, evidence cần có, cùng output mong đợi.' },
    { labelEn: 'Competitive research', labelVi: 'Research đối thủ', command: '/ak:research-prompt Compare referral program mechanics used by top PLG SaaS companies', whenEn: 'You want another researcher to collect evidence, not guesses.', whenVi: 'Khi muốn researcher khác thu thập bằng chứng, không đoán.', expectedEn: 'Brief requiring primary sources, contradiction handling, per-finding relevance, and clear citation expectations.', expectedVi: 'Brief yêu cầu nguồn primary, xử lý mâu thuẫn và liên quan từng finding.' },
  ],
};

export default data;

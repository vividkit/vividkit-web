import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-persona',
  command: '/ak:persona',
  kit: 'marketer',
  header: {
    titleEn: '/ak:persona — Customer persona lifecycle',
    titleVi: '/ak:persona — Vòng đời persona khách hàng',
    taglineEn: 'Customer persona lifecycle helper for creating ICP profiles, analyzing audience data, updating existing personas, and listing saved profiles.',
    taglineVi: 'Trợ lý vòng đời persona khách hàng để tạo ICP profile, phân tích audience data, cập nhật persona hiện có và liệt kê hồ sơ đã lưu.',
  },
  processFlow: [
    { number: 1, titleEn: 'Parse Action', titleVi: 'Đọc action', descEn: 'Read create, analyze, update, or list from the invocation and route the workflow.', descVi: 'Đọc create, analyze, update hoặc list từ lệnh gọi và định tuyến workflow.' },
    { number: 2, titleEn: 'Gather Inputs', titleVi: 'Thu thập đầu vào', descEn: 'Ask for demographics, role, industry, pains, goals, motivations, buying behavior, and preferred channels.', descVi: 'Hỏi demographics, vai trò, ngành, pain point, mục tiêu, động lực, hành vi mua và kênh ưa thích.' },
    { number: 3, titleEn: 'Define Persona', titleVi: 'Định nghĩa persona', descEn: 'Use the lead-qualifier agent to turn inputs into an ICP profile and segment hypothesis.', descVi: 'Dùng agent lead-qualifier để chuyển input thành ICP profile và giả thuyết phân khúc.' },
    { number: 4, titleEn: 'Validate Market', titleVi: 'Xác thực thị trường', descEn: 'Bring in researcher support and content-marketing frameworks to validate persona assumptions.', descVi: 'Dùng researcher và framework content-marketing để kiểm chứng giả định persona.' },
    { number: 5, titleEn: 'Analyze Patterns', titleVi: 'Phân tích mẫu hình', descEn: 'For analyze mode, combine lead qualification and behavior analytics to find segments and insights.', descVi: 'Ở chế độ analyze, kết hợp lead qualification và behavior analytics để tìm segment và insight.' },
    { number: 6, titleEn: 'Update Profile', titleVi: 'Cập nhật hồ sơ', descEn: 'For update mode, load the existing persona, incorporate new evidence, and validate the changes.', descVi: 'Ở chế độ update, nạp persona hiện có, thêm bằng chứng mới và kiểm tra thay đổi.' },
    { number: 7, titleEn: 'Save ICP', titleVi: 'Lưu ICP', descEn: 'Write the persona profile to the standardized ICP profile location.', descVi: 'Lưu hồ sơ persona vào vị trí ICP profile chuẩn hóa.' },
  ],
  corePrinciplesEn: [
    'Personas are grounded in audience evidence: demographics, behavior, pains, goals, channels, and buying triggers.',
    'Create and analyze are different jobs: one builds a profile, the other finds patterns in audience data.',
    'Updates must incorporate new data instead of rewriting the persona from scratch.',
    'Persona output is an ICP profile marketers can reuse for content, ads, and lead qualification.',
  ],
  corePrinciplesVi: [
    'Persona phải dựa trên bằng chứng audience: demographics, hành vi, pain, mục tiêu, kênh và buying trigger.',
    'Create và analyze là hai việc khác nhau: một việc dựng hồ sơ, một việc tìm mẫu hình trong dữ liệu audience.',
    'Update phải đưa dữ liệu mới vào persona hiện có thay vì viết lại từ đầu.',
    'Output persona là ICP profile để marketing dùng lại cho content, ads và lead qualification.',
  ],
  expertiseAreasEn: ['ICP profiles', 'Audience analysis', 'Persona updates', 'Lead qualification', 'Market validation', 'Channel preferences'],
  expertiseAreasVi: ['ICP profile', 'Phân tích audience', 'Cập nhật persona', 'Lead qualification', 'Xác thực thị trường', 'Kênh ưa thích'],
  workflowModes: [
    { flag: 'create', modeEn: 'Create a new persona from user-provided customer and market context.', modeVi: 'Tạo persona mới từ bối cảnh khách hàng và thị trường do người dùng cung cấp.', research: 'Ask user', redTeam: 'Missing assumptions', validation: 'Market validation' },
    { flag: 'analyze', modeEn: 'Analyze audience data with lead-qualifier and analytics support to find segments and patterns.', modeVi: 'Phân tích audience data với lead-qualifier và analytics để tìm segment và mẫu hình.', research: 'Audience data', redTeam: 'Weak signal', validation: 'Insights report' },
    { flag: 'update [name]', modeEn: 'Load an existing persona, incorporate new facts, and validate the updated profile.', modeVi: 'Nạp persona hiện có, thêm dữ kiện mới và kiểm tra hồ sơ đã cập nhật.', research: 'Existing profile', redTeam: 'Stale persona', validation: 'Change validation' },
    { flag: 'list', modeEn: 'List available persona profiles for reuse.', modeVi: 'Liệt kê các persona profile có sẵn để dùng lại.', research: 'Saved ICPs', redTeam: '', validation: 'Inventory' },
  ],
  skillStack: [
    { name: 'lead-qualifier', type: 'agent' },
    { name: 'researcher', type: 'agent' },
    { name: 'analytics-analyst', type: 'agent' },
    { name: 'content-marketing', type: 'skill' },
    { name: 'assets-organizing', type: 'skill' },
  ],
  promptExamples: [
    { labelEn: 'Create', labelVi: 'Tạo mới', command: '/ak:persona create', whenEn: 'You need a fresh ICP/persona profile for a market, segment, or campaign.', whenVi: 'Khi cần ICP/persona mới cho một thị trường, phân khúc hoặc campaign.', expectedEn: 'A structured persona built from demographics, pains, goals, motivations, buying behavior, and channels.', expectedVi: 'Persona có cấu trúc dựa trên demographics, pain, mục tiêu, động lực, hành vi mua và kênh.', recommended: true },
    { labelEn: 'Analyze', labelVi: 'Phân tích', command: '/ak:persona analyze', whenEn: 'You have audience behavior or customer data and need segments or insights.', whenVi: 'Khi có dữ liệu hành vi audience hoặc khách hàng và cần segment/insight.', expectedEn: 'Audience analysis report with segments, patterns, and implications.', expectedVi: 'Báo cáo phân tích audience với segment, mẫu hình và hàm ý.' },
    { labelEn: 'Update', labelVi: 'Cập nhật', command: '/ak:persona update "Tech Startup Founder"', whenEn: 'You need to revise a known persona with new evidence.', whenVi: 'Khi cần chỉnh persona đã có bằng bằng chứng mới.', expectedEn: 'Updated ICP profile with incorporated data and validation notes.', expectedVi: 'ICP profile đã cập nhật kèm dữ liệu mới và ghi chú kiểm chứng.' },
    { labelEn: 'List', labelVi: 'Liệt kê', command: '/ak:persona list', whenEn: 'You need to see which personas already exist.', whenVi: 'Khi cần xem các persona đã có.', expectedEn: 'List of available persona profiles.', expectedVi: 'Danh sách persona profile hiện có.' },
  ],
  reportOutput: {
    titleEn: 'ICP Profile Output',
    titleVi: 'Output ICP profile',
    patternEn: 'ICP Profiles → assets/leads/icp-profiles/{persona}.md',
    patternVi: 'ICP Profile → assets/leads/icp-profiles/{persona}.md',
    locationEn: 'assets/leads/icp-profiles/',
    locationVi: 'assets/leads/icp-profiles/',
    descEn: 'Persona profiles are saved as reusable lead and audience assets.',
    descVi: 'Persona profile được lưu thành asset lead/audience để dùng lại.',
  },
};

export default data;

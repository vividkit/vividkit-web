import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-init',
  command: '/ak:init',
  kit: 'marketer',
  header: {
    titleEn: 'Marketing Project Initialization',
    titleVi: 'Khởi tạo dự án marketing',
    taglineEn: 'Onboards a new or existing marketing project through git setup, parallel research, a structured brief interview, minimal documentation, and next actions.',
    taglineVi: 'Onboard dự án marketing mới hoặc hiện có qua kiểm tra git, nghiên cứu song song, brief có cấu trúc, tài liệu tối thiểu và hành động tiếp theo.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Do not skip phases',
    titleVi: 'Không bỏ qua phase',
    contentEn: 'The skill must run every phase and section, preserve existing documentation authority, keep reports concise, and list unresolved questions at the end.',
    contentVi: 'Skill phải chạy đủ mọi phase và mục, giữ cấu trúc thẩm quyền tài liệu hiện có, viết báo cáo gọn và liệt kê câu hỏi còn mở ở cuối.',
  },
  processFlow: [
    { number: 1, titleEn: 'Check git', titleVi: 'Kiểm tra git', descEn: 'Detect whether git is initialized, ask before git init, optionally gather remote repository details, or show the existing remote.', descVi: 'Kiểm tra git đã khởi tạo chưa, hỏi trước khi git init, có thể lấy thông tin remote repo, hoặc hiển thị remote hiện có.' },
    { number: 2, titleEn: 'Research in parallel', titleVi: 'Nghiên cứu song song', descEn: 'Spawn 3 to 4 researchers for product, existing marketing assets, digital presence, and competitive landscape.', descVi: 'Chạy 3 đến 4 researcher cho sản phẩm, asset marketing hiện có, hiện diện số và bối cảnh cạnh tranh.' },
    { number: 3, titleEn: 'Discover authority', titleVi: 'Tìm nguồn thẩm quyền', descEn: 'Read repository instructions, README, documentation navigation, brand/legal constraints, strategy, milestones, and asset guidance.', descVi: 'Đọc hướng dẫn repo, README, điều hướng tài liệu, ràng buộc brand/pháp lý, chiến lược, milestone và hướng dẫn asset.' },
    { number: 4, titleEn: 'Verify context', titleVi: 'Xác nhận bối cảnh', descEn: 'Summarize existing product, audience, brand, objectives, and campaigns, then ask the user whether it is accurate.', descVi: 'Tóm tắt sản phẩm, audience, brand, mục tiêu và campaign hiện có, rồi hỏi người dùng có còn đúng không.' },
    { number: 5, titleEn: 'Interview brief', titleVi: 'Phỏng vấn brief', descEn: 'Collect basic info, products, objectives, target audience, competitors, brand assets, design inputs, social presence, timeline, and budget.', descVi: 'Thu thông tin cơ bản, sản phẩm, mục tiêu, audience, đối thủ, brand asset, nguồn thiết kế, social, timeline và ngân sách.' },
    { number: 6, titleEn: 'Generate docs', titleVi: 'Tạo tài liệu', descEn: 'Use docs-manager to route facts by role and update existing authorities or create only missing purpose-based surfaces.', descVi: 'Dùng docs-manager để đưa dữ kiện vào đúng vai trò và cập nhật nguồn thẩm quyền hiện có hoặc chỉ tạo phần thiếu theo mục đích.' },
    { number: 7, titleEn: 'Offer commit', titleVi: 'Hỏi commit', descEn: 'Ask whether to commit generated documentation, then use /git:cm only if the user agrees.', descVi: 'Hỏi có commit tài liệu đã tạo không, chỉ dùng /git:cm khi người dùng đồng ý.' },
    { number: 8, titleEn: 'Suggest next actions', titleVi: 'Gợi ý bước tiếp theo', descEn: 'Generate the command catalog and recommend 3 to 5 relevant next marketing actions or finish.', descVi: 'Tạo catalog lệnh và đề xuất 3 đến 5 hành động marketing tiếp theo phù hợp hoặc kết thúc.' },
    { number: 9, titleEn: 'Report changed paths', titleVi: 'Báo đường dẫn đã đổi', descEn: 'List actual paths changed, evidence checked, unresolved questions, and token-efficient next-step guidance.', descVi: 'Liệt kê đúng đường dẫn đã đổi, bằng chứng đã kiểm tra, câu hỏi còn mở và hướng dẫn tiếp theo thật gọn.' },
  ],
  corePrinciplesEn: [
    'Initialization is a structured marketing brief, not a generic questionnaire dump.',
    'Existing documentation authority must be preserved and extended minimally.',
    'Researchers split independent discovery so the brief starts from evidence, not guesses.',
    'Unresolved questions are acceptable only when named clearly at the end.',
  ],
  corePrinciplesVi: [
    'Khởi tạo là brief marketing có cấu trúc, không phải một đống câu hỏi chung chung.',
    'Nguồn thẩm quyền tài liệu hiện có phải được giữ và chỉ mở rộng tối thiểu.',
    'Researcher chia các hướng tìm hiểu độc lập để brief bắt đầu từ bằng chứng, không phải suy đoán.',
    'Câu hỏi chưa giải quyết được chấp nhận nếu được nêu rõ ở cuối.',
  ],
  expertiseAreasEn: ['Marketing brief interview', 'Project context discovery', 'Brand constraints', 'Audience and competitors', 'Documentation routing', 'Next-action planning'],
  expertiseAreasVi: ['Phỏng vấn brief marketing', 'Khám phá bối cảnh dự án', 'Ràng buộc brand', 'Audience và đối thủ', 'Định tuyến tài liệu', 'Lập bước tiếp theo'],
  promptExamples: [
    { labelEn: 'New project', labelVi: 'Dự án mới', command: '/ak:init new DTC skincare brand launch', whenEn: 'Starting a marketing project with little existing structure.', whenVi: 'Bắt đầu dự án marketing gần như chưa có cấu trúc.', expectedEn: 'Runs setup, research, interview, minimal docs generation, and next-action suggestions.', expectedVi: 'Chạy setup, nghiên cứu, phỏng vấn, tạo tài liệu tối thiểu và gợi ý bước tiếp theo.', recommended: true },
    { labelEn: 'Existing project', labelVi: 'Dự án hiện có', command: '/ak:init onboard existing B2B SaaS marketing project', whenEn: 'An existing repository or client needs marketing context discovery and confirmation.', whenVi: 'Repo hoặc client hiện có cần khám phá và xác nhận bối cảnh marketing.', expectedEn: 'Researches current authorities, verifies accuracy with the user, and updates only needed surfaces.', expectedVi: 'Nghiên cứu nguồn thẩm quyền hiện có, xác nhận với người dùng và chỉ cập nhật phần cần thiết.' },
    { labelEn: 'Website-based brief', labelVi: 'Brief dựa trên website', command: '/ak:init marketing brief from existing website and brand assets', whenEn: 'Brand and design inputs should be extracted from live or existing materials.', whenVi: 'Cần rút brand và thiết kế từ website hoặc tài liệu hiện có.', expectedEn: 'Includes website extraction, brand asset review, and structured interview follow-up.', expectedVi: 'Bao gồm trích xuất website, xem brand asset và phỏng vấn bổ sung có cấu trúc.' },
  ],
  skillStack: [
    { name: 'researcher', type: 'agent' },
    { name: 'docs-manager', type: 'agent' },
    { name: 'research', type: 'skill' },
    { name: 'chrome-devtools', type: 'skill' },
    { name: 'ai-multimodal', type: 'skill' },
    { name: 'assets-organizing', type: 'skill' },
  ],
  guardrails: [
    { thoughtEn: 'Use standard filenames for the marketing docs.', thoughtVi: 'Dùng bộ tên file marketing chuẩn.', realityEn: 'Preserve the project authority structure and create only missing purpose-based surfaces.', realityVi: 'Giữ cấu trúc thẩm quyền của dự án và chỉ tạo phần thiếu theo mục đích.', accent: 'amber' },
    { thoughtEn: 'Ask every question at once.', thoughtVi: 'Hỏi tất cả câu hỏi một lượt.', realityEn: 'Use progressive disclosure so the interview stays conversational and usable.', realityVi: 'Dùng progressive disclosure để buổi phỏng vấn vẫn tự nhiên và dễ trả lời.', accent: 'blue' },
    { thoughtEn: 'Skipped answers can disappear.', thoughtVi: 'Câu bị bỏ qua có thể bỏ luôn.', realityEn: 'If optional sections are skipped, note them as TBD and list unresolved questions.', realityVi: 'Nếu mục tùy chọn bị bỏ qua, ghi là TBD và liệt kê câu hỏi còn mở.', accent: 'rose' },
  ],
  reportOutput: {
    titleEn: 'Initialization summary',
    titleVi: 'Tóm tắt khởi tạo',
    patternEn: 'Actual paths changed, evidence checked, unresolved questions, and relevant next commands',
    patternVi: 'Đường dẫn đã đổi, bằng chứng đã kiểm tra, câu hỏi còn mở và lệnh tiếp theo phù hợp',
    descEn: 'Reports exactly what changed and where, without imposing a documentation tree.',
    descVi: 'Báo chính xác đã đổi gì và ở đâu, không áp một cây tài liệu cố định.',
  },
};

export default data;

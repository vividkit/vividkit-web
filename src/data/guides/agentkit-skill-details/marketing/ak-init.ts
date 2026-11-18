import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-init',
  command: '/ak:init',
  kit: 'marketer',
  header: {
    titleEn: '/ak:init — Marketing Project Initialization',
    titleVi: '/ak:init — Khởi tạo dự án marketing',
    taglineEn: 'Onboards a new or existing marketing project: reuses the context the project already has, asks only about material gaps, records each fact where it belongs, and reports what changed and what is still unknown.',
    taglineVi: 'Onboard dự án marketing mới hoặc hiện có: dùng lại bối cảnh project đã có, chỉ hỏi phần thiếu quan trọng, ghi từng dữ kiện vào đúng chỗ và báo lại đã đổi gì, còn chưa biết gì.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Project setup is not blanket approval',
    titleVi: 'Thiết lập project không phải là phê duyệt cho mọi việc',
    contentEn: 'Permission to conduct the interview or draft a brief does not authorize `git init`, creation of a GitHub or GitLab repository, documentation writes, a commit, website access, publication, outreach, account changes, or budget allocation. Approve each applicable boundary separately. The skill must run every phase and section, preserve existing documentation authority, keep reports concise, and list unresolved questions at the end.',
    contentVi: 'Được phép phỏng vấn hoặc soạn brief không có nghĩa là được chạy `git init`, tạo repository GitHub hay GitLab, ghi tài liệu, commit, truy cập website, xuất bản, liên hệ bên ngoài, thay đổi tài khoản hay phân bổ ngân sách. Hãy duyệt riêng từng ranh giới liên quan. Skill phải chạy đủ mọi phase và mục, giữ nguyên vai trò nguồn chuẩn của tài liệu hiện có, viết báo cáo gọn và liệt kê câu hỏi còn mở ở cuối.',
  },
  processFlow: [
    { number: 1, titleEn: 'Inspect before interviewing', titleVi: 'Đọc trước khi hỏi', descEn: 'Read repository instructions, README, and documentation navigation, then locate product and business context, audience research, brand and legal constraints, strategy, budget and timing, active campaigns, and reusable assets.', descVi: 'Đọc hướng dẫn repo, README và điều hướng tài liệu, rồi tìm bối cảnh sản phẩm và kinh doanh, nghiên cứu audience, ràng buộc brand và pháp lý, chiến lược, ngân sách và thời gian, campaign đang chạy và asset dùng lại được.' },
    { number: 2, titleEn: 'Verify current evidence', titleVi: 'Kiểm chứng bằng chứng hiện tại', descEn: 'Check relevant claims against current evidence without rescanning unrelated surfaces. For an existing project, update only the context that is missing or changed.', descVi: 'Đối chiếu các nhận định liên quan với bằng chứng hiện tại, không quét lại phần không liên quan. Với dự án có sẵn, chỉ cập nhật phần bối cảnh còn thiếu hoặc đã đổi.' },
    { number: 3, titleEn: 'Keep Git separate', titleVi: 'Tách riêng việc Git', descEn: 'Creating a Git repository or a remote repository is a separate action, done only when you ask for it and never as an onboarding prerequisite.', descVi: 'Tạo Git repository hoặc remote repository là việc riêng, chỉ làm khi bạn yêu cầu và không bao giờ là điều kiện để bắt đầu onboard.' },
    { number: 4, titleEn: 'Fill material gaps', titleVi: 'Bù khoảng trống quan trọng', descEn: 'Reuse answers you already gave and ask only about decisions that cannot be discovered, grouped by topic: offering and pricing model, audience and channels, objective, success metric, budget and timing, brand voice and legal boundaries, and relevant competitors or past campaigns.', descVi: 'Dùng lại câu trả lời bạn đã đưa và chỉ hỏi những quyết định không tự tìm ra được, gom theo chủ đề: sản phẩm và mô hình giá, audience và kênh, mục tiêu, chỉ số thành công, ngân sách và thời gian, giọng brand và ranh giới pháp lý, cùng đối thủ hoặc campaign cũ liên quan.' },
    { number: 5, titleEn: 'Research only what matters', titleVi: 'Chỉ nghiên cứu phần cần thiết', descEn: 'Research only gaps that affect the outcome. Independent research is delegated only when that is available, authorized, and useful, with a concrete question and a clear owner.', descVi: 'Chỉ nghiên cứu những khoảng trống ảnh hưởng tới kết quả. Chỉ giao việc nghiên cứu độc lập cho agent khác khi runtime hỗ trợ, đã được phép và thật sự hữu ích, kèm câu hỏi cụ thể và người phụ trách rõ ràng.' },
    { number: 6, titleEn: 'Record in the actual owners', titleVi: 'Ghi vào đúng nơi sở hữu', descEn: 'Update the existing owner of each fact and keep custom structure and unrelated content. Create a small purpose-based document only when no owner exists, and link it from the current navigation. Editorial site packs (.editorial/) for the article pipeline belong to /ak:seo article setup, not to this skill.', descVi: 'Cập nhật đúng tài liệu đang sở hữu từng dữ kiện, giữ nguyên cấu trúc riêng và nội dung không liên quan. Chỉ tạo tài liệu nhỏ theo mục đích khi chưa có nơi sở hữu, và nối nó vào điều hướng hiện có. Bộ cấu hình site cho quy trình viết bài (.editorial/) thuộc /ak:seo article setup, không thuộc skill này.' },
    { number: 7, titleEn: 'Check the diff', titleVi: 'Kiểm tra diff', descEn: 'Inspect the diff for factual accuracy, brand consistency, source links, and real paths. An onboarding request never implies permission to publish, create accounts, contact prospects, or commit.', descVi: 'Rà diff để kiểm tra độ chính xác, tính nhất quán với brand, link nguồn và đường dẫn thật. Yêu cầu onboard không bao giờ ngầm cho phép xuất bản, tạo tài khoản, liên hệ khách tiềm năng hay commit.' },
    { number: 8, titleEn: 'Report and suggest next', titleVi: 'Báo cáo và gợi ý bước tiếp', descEn: 'Report the context established, files changed, evidence checked, and material unknowns. Suggest a next skill from the installed catalog only when it follows from the objectives; for a pre-product idea, that is the product-discovery playbook in /ak:play rather than campaign or content work.', descVi: 'Báo bối cảnh đã chốt, file đã đổi, bằng chứng đã kiểm tra và những điểm quan trọng còn chưa biết. Chỉ gợi ý skill tiếp theo từ danh mục đã cài khi nó xuất phát từ mục tiêu; với ý tưởng chưa có sản phẩm, đó là playbook product-discovery trong /ak:play thay vì làm campaign hay nội dung.' },
  ],
  corePrinciplesEn: [
    'Initialization is a structured marketing brief, not a generic questionnaire dump.',
    'Existing documentation authority must be preserved and extended minimally.',
    'Research covers only the gaps that affect the outcome, so the brief starts from evidence, not guesses.',
    'Unresolved questions are acceptable only when named clearly at the end.',
  ],
  corePrinciplesVi: [
    'Khởi tạo là brief marketing có cấu trúc, không phải một đống câu hỏi chung chung.',
    'Nguồn thẩm quyền tài liệu hiện có phải được giữ và chỉ mở rộng tối thiểu.',
    'Chỉ nghiên cứu những khoảng trống ảnh hưởng tới kết quả, để brief bắt đầu từ bằng chứng, không phải suy đoán.',
    'Câu hỏi chưa giải quyết được chấp nhận nếu được nêu rõ ở cuối.',
  ],
  expertiseAreasEn: ['Marketing brief interview', 'Project context discovery', 'Brand constraints', 'Audience and competitors', 'Documentation routing', 'Next-action planning'],
  expertiseAreasVi: ['Phỏng vấn brief marketing', 'Khám phá bối cảnh dự án', 'Ràng buộc brand', 'Audience và đối thủ', 'Định tuyến tài liệu', 'Lập bước tiếp theo'],
  promptExamples: [
    { labelEn: 'New project', labelVi: 'Dự án mới', command: '/ak:init new DTC skincare brand launch',
      commandVi: '/ak:init ra mắt thương hiệu chăm sóc da DTC mới', whenEn: 'Starting a marketing project with little existing structure.', whenVi: 'Bắt đầu dự án marketing gần như chưa có cấu trúc.', expectedEn: 'It collects the brief through grouped questions, records the confirmed facts in minimal purpose-based documents, and suggests a next step only when it follows from the objectives.', expectedVi: 'Skill thu brief qua các nhóm câu hỏi, ghi dữ kiện đã xác nhận vào vài tài liệu tối thiểu theo mục đích, và chỉ gợi ý bước tiếp khi nó xuất phát từ mục tiêu.', recommended: true },
    { labelEn: 'Existing project', labelVi: 'Dự án hiện có', command: '/ak:init onboard existing B2B SaaS marketing project',
      commandVi: '/ak:init onboard dự án marketing SaaS B2B hiện có', whenEn: 'An existing repository or client needs marketing context discovery and confirmation.', whenVi: 'Repo hoặc client hiện có cần khám phá và xác nhận bối cảnh marketing.', expectedEn: 'Researches current authorities, verifies accuracy with the user, and updates only needed surfaces.', expectedVi: 'Nghiên cứu nguồn thẩm quyền hiện có, xác nhận với người dùng và chỉ cập nhật phần cần thiết.' },
    { labelEn: 'Website-based brief', labelVi: 'Brief dựa trên website', command: '/ak:init marketing brief from existing website and brand assets',
      commandVi: '/ak:init brief marketing từ website và tài sản thương hiệu hiện có', whenEn: 'Brand and design inputs should be extracted from live or existing materials.', whenVi: 'Cần rút brand và thiết kế từ website hoặc tài liệu hiện có.', expectedEn: 'It reads the supplied website and brand assets as evidence, asks only about what they do not settle, and lists remaining unknowns.', expectedVi: 'Skill đọc website và brand asset được cung cấp làm bằng chứng, chỉ hỏi những gì chúng chưa trả lời được, rồi liệt kê điểm còn chưa biết.' },
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

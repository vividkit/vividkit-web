import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-scout',
  command: '/ak:scout',
  kit: 'marketer',
  header: {
    titleEn: '/ak:scout',
    titleVi: '/ak:scout',
    taglineEn: 'Fast, token-efficient codebase scouting for file discovery, task context gathering, scoped searches, optional external OpenCode probes, and ultra verification.',
    taglineVi: 'Scouting codebase nhanh và tiết kiệm token để tìm file, gom context cho task, search có phạm vi, tùy chọn probe OpenCode bên ngoài và ultra verification.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'DELEGATE ONLY WHEN POLICY ALLOWS',
    titleVi: 'CHỈ DELEGATE KHI POLICY CHO PHÉP',
    contentEn: 'Do not spawn subagents merely because Scout mentions Explore. If the user request or runtime policy does not permit delegation, scout in the main agent. In --ultra mode, hard-stop if five read-only candidates cannot be dispatched; do not degrade to a main-agent run.',
    contentVi: 'Không spawn subagent chỉ vì Scout nhắc Explore. Nếu yêu cầu người dùng hoặc runtime policy không cho phép delegation, scout trong main agent. Với --ultra, hard-stop nếu không dispatch được năm candidate read-only; không degrade về chạy một mình.',
  },
  processFlow: [
    { number: 1, titleEn: 'Analyze Target', titleVi: 'Phân tích mục tiêu', descEn: 'Parse the prompt for search targets, directories, patterns, file types, and expected code relationships.', descVi: 'Đọc prompt để xác định mục tiêu search, thư mục, pattern, loại file và quan hệ code cần tìm.' },
    { number: 2, titleEn: 'Estimate Scale', titleVi: 'Ước lượng quy mô', descEn: 'Use broad search patterns to estimate codebase size and decide whether main-agent scouting is enough.', descVi: 'Dùng pattern search rộng để ước lượng quy mô codebase và quyết định tự scout có đủ không.' },
    { number: 3, titleEn: 'Choose Mode', titleVi: 'Chọn mode', descEn: 'Default to internal scouting, use ext only when permitted external probes are needed, or --ultra for best-of-5 verification.', descVi: 'Mặc định internal scouting, dùng ext khi cần probe ngoài được cho phép, hoặc --ultra để verify kiểu best-of-5.' },
    { number: 4, titleEn: 'Divide Scope', titleVi: 'Chia phạm vi', descEn: 'When delegation is permitted and worthwhile, split directories or patterns with no overlap and clear coverage.', descVi: 'Khi được phép delegate và đáng làm, chia thư mục hoặc pattern không chồng lấn và có coverage rõ.' },
    { number: 5, titleEn: 'Register Work', titleVi: 'Ghi nhận việc', descEn: 'For more than two agents, register concise scoped work items in the available task-management surface or active plan.', descVi: 'Với hơn hai agent, ghi nhận item công việc có scope ngắn gọn vào task-management surface hoặc active plan.' },
    { number: 6, titleEn: 'Run Scouts', titleVi: 'Chạy scout', descEn: 'Use portable search/read capabilities first; dispatch parallel Explore agents only under explicit policy support.', descVi: 'Ưu tiên capability search/read portable; chỉ dispatch Explore agent song song khi policy hỗ trợ rõ ràng.' },
    { number: 7, titleEn: 'Collect Findings', titleVi: 'Gom kết quả', descEn: 'Collect responses with a three-minute timeout per agent, skip non-responders, and note unresolved gaps.', descVi: 'Gom phản hồi với timeout ba phút mỗi agent, bỏ qua agent không phản hồi và ghi gap chưa rõ.' },
    { number: 8, titleEn: 'Report Files', titleVi: 'Báo cáo file', descEn: 'Return a concise Scout Report with relevant files, one-line roles, relationships, and unresolved questions.', descVi: 'Trả Scout Report ngắn gọn với file liên quan, vai trò một dòng, quan hệ và câu hỏi còn mở.' },
  ],
  corePrinciplesEn: [
    'Scout is for orientation and file discovery before bigger work, especially across multiple directories.',
    'Use native/local search and scoped reads before invoking heavier external probes.',
    'Parallel agents are useful only when the scope is large enough and delegation is allowed.',
    'The final report should be dense: relevant files, roles, relationships, and unresolved questions.',
  ],
  corePrinciplesVi: [
    'Scout dùng để định hướng và tìm file trước việc lớn, đặc biệt khi liên quan nhiều thư mục.',
    'Dùng search local/native và đọc có phạm vi trước khi gọi probe ngoài nặng hơn.',
    'Agent song song chỉ hữu ích khi scope đủ lớn và delegation được phép.',
    'Báo cáo cuối phải cô đọng: file liên quan, vai trò, quan hệ và câu hỏi còn mở.',
  ],
  workflowModes: [
    { flag: '[search-target]', modeEn: 'Default internal codebase scouting with native search and optional Explore delegation if allowed.', modeVi: 'Scouting nội bộ mặc định bằng native search và tùy chọn delegate Explore nếu được phép.', research: 'Local search', redTeam: 'Too broad', validation: 'Scout report' },
    { flag: 'ext', modeEn: 'Use user-permitted OpenCode probes when native/local search is insufficient.', modeVi: 'Dùng probe OpenCode được người dùng cho phép khi search local/native không đủ.', research: 'External probe', redTeam: 'Permission', validation: 'Evidence packet' },
    { flag: '--ultra', modeEn: 'Best-of-5 read-only verifier pass with one evidence packet, five candidates, and a verifier union.', modeVi: 'Verifier read-only kiểu best-of-5 với một evidence packet, năm candidate và union do verifier chọn.', research: 'Five candidates', redTeam: 'Fail closed', validation: 'Verified union' },
  ],
  promptExamples: [
    { labelEn: 'Find feature files', labelVi: 'Tìm file feature', command: '/ak:scout checkout flow', whenEn: 'You need to find where a cross-file feature lives before editing.', whenVi: 'Khi cần tìm một feature nằm ở đâu trong nhiều file trước khi sửa.', expectedEn: 'Relevant files with roles, relationships, and unresolved questions.', expectedVi: 'Các file liên quan kèm vai trò, quan hệ và câu hỏi còn mở.', recommended: true },
    { labelEn: 'Extension scope', labelVi: 'Scope theo đuôi file', command: '/ak:scout email templates ts', whenEn: 'You need scoped discovery around a target and file extension.', whenVi: 'Khi cần discovery có scope quanh mục tiêu và loại file.', expectedEn: 'Narrowed file map for the requested target and extension.', expectedVi: 'File map đã thu hẹp theo mục tiêu và đuôi file được yêu cầu.' },
    { labelEn: 'External scouting', labelVi: 'Scouting ngoài', command: '/ak:scout ext authentication module', whenEn: 'Native search is not enough and user-permitted external probes are appropriate.', whenVi: 'Khi native search không đủ và probe ngoài được phép là phù hợp.', expectedEn: 'External-probe-backed scout report.', expectedVi: 'Scout report có hỗ trợ từ probe bên ngoài.' },
    { labelEn: 'Ultra verifier', labelVi: 'Ultra verifier', command: '/ak:scout checkout state --ultra', whenEn: 'You need a fail-closed best-of-5 verification pass.', whenVi: 'Khi cần lượt verify best-of-5 và fail-closed.', expectedEn: 'Evidence-validated, deduplicated union of findings.', expectedVi: 'Union finding đã validate bằng evidence và khử trùng lặp.' },
  ],
  reportOutput: {
    titleEn: 'Scout Report',
    titleVi: 'Scout Report',
    patternEn: 'Relevant Files + Unresolved Questions',
    patternVi: 'File liên quan + Câu hỏi còn mở',
    descEn: 'The report names relevant files with brief roles and ends with unresolved questions or gaps.',
    descVi: 'Báo cáo nêu file liên quan kèm vai trò ngắn và kết thúc bằng câu hỏi hoặc gap còn mở.',
  },
};

export default data;

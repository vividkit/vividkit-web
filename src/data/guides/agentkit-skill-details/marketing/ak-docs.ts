import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-docs',
  command: '/ak:docs',
  kit: 'marketer',
  header: {
    titleEn: 'Documentation Management',
    titleVi: 'Quản lý tài liệu dự án',
    taglineEn: 'Creates, refreshes, summarizes, and audits only the documentation surface the project actually uses, including root agent context files.',
    taglineVi: 'Tạo, cập nhật, tóm tắt và kiểm tra đúng lớp tài liệu dự án đang dùng, bao gồm cả ngữ cảnh agent ở gốc repo.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Docs are not product code',
    titleVi: 'Tài liệu không phải mã sản phẩm',
    contentEn: 'The skill must not implement product code, impose a fixed docs tree, or invent claims. It asks when the operation is empty or unclear.',
    contentVi: 'Skill không được sửa mã sản phẩm, ép một cấu trúc tài liệu cố định, hoặc bịa nội dung. Khi yêu cầu trống hoặc mơ hồ thì phải hỏi lại.',
  },
  processFlow: [
    { number: 1, titleEn: 'Frame intent', titleVi: 'Chốt mục tiêu', descEn: 'Bound the consumer, outcome, proof sources, evergreen versus stateful material, and acceptance criteria.', descVi: 'Xác định người đọc, kết quả cần đạt, nguồn bằng chứng, phần bền vững so với phần tạm thời, và tiêu chí hoàn tất.' },
    { number: 2, titleEn: 'Route command', titleVi: 'Định tuyến lệnh', descEn: 'Parse init, update, summarize, agent-context, agents, llms, or ask the user instead of assuming init.', descVi: 'Đọc init, update, summarize, agent-context, agents, llms; nếu không rõ thì hỏi người dùng thay vì tự chọn init.' },
    { number: 3, titleEn: 'Load rules', titleVi: 'Nạp quy tắc', descEn: 'Load the matching reference workflow plus doc-content or agent-context rules before writing.', descVi: 'Nạp workflow tham chiếu tương ứng cùng quy tắc viết tài liệu hoặc quy tắc ngữ cảnh agent trước khi soạn.' },
    { number: 4, titleEn: 'Discover authority', titleVi: 'Tìm nguồn thẩm quyền', descEn: 'Inspect repo instructions, README, docs navigation, existing docs, source, tests, scripts, and live evidence in order.', descVi: 'Đọc lần lượt hướng dẫn repo, README, điều hướng docs, tài liệu hiện có, mã, test, script và bằng chứng đang chạy.' },
    { number: 5, titleEn: 'Choose owners', titleVi: 'Chọn nơi sở hữu', descEn: 'Update only documents whose contract or evidence changed; link to executable owners instead of duplicating facts.', descVi: 'Chỉ cập nhật tài liệu có hợp đồng hoặc bằng chứng đổi; liên kết đến nơi sở hữu thực thi thay vì chép lại dữ kiện.' },
    { number: 6, titleEn: 'Write thinly', titleVi: 'Viết gọn', descEn: 'Keep docs as navigation, rationale, constraints, decisions, terminology, and rejected alternatives.', descVi: 'Giữ tài liệu như lớp điều hướng, lý do, ràng buộc, quyết định, thuật ngữ và các phương án đã loại.' },
    { number: 7, titleEn: 'Verify claims', titleVi: 'Kiểm chứng tuyên bố', descEn: 'Check every path, command, configuration key, and behavioral claim against current evidence.', descVi: 'Đối chiếu mọi đường dẫn, lệnh, khóa cấu hình và mô tả hành vi với bằng chứng hiện tại.' },
    { number: 8, titleEn: 'Report scope', titleVi: 'Báo phạm vi', descEn: 'Separate evergreen authority from research or audit notes, and state what changed without printing unnecessary bodies.', descVi: 'Tách phần thẩm quyền bền vững khỏi ghi chú nghiên cứu hoặc kiểm tra, rồi báo phần đã đổi mà không dán nội dung dư thừa.' },
  ],
  corePrinciplesEn: [
    'Code owns what and how; documentation owns why and where.',
    'Smallest useful docs beat broad duplicated prose.',
    'A root CLAUDE.md or AGENTS.md is process memory, not a general project handbook.',
    'Current evidence outranks stale documentation and assumed file names.',
  ],
  corePrinciplesVi: [
    'Mã sở hữu phần làm gì và làm thế nào; tài liệu sở hữu lý do và vị trí cần tìm.',
    'Bộ tài liệu nhỏ nhưng dùng được tốt hơn văn bản rộng và trùng lặp.',
    'CLAUDE.md hoặc AGENTS.md ở gốc là bộ nhớ quy trình, không phải sổ tay dự án chung.',
    'Bằng chứng hiện tại quan trọng hơn tài liệu cũ và tên file được đoán trước.',
  ],
  expertiseAreasEn: ['Docs initialization', 'Evidence-backed updates', 'Agent context files', 'History and CI rule mining', 'llms.txt generation'],
  expertiseAreasVi: ['Khởi tạo tài liệu', 'Cập nhật dựa trên bằng chứng', 'File ngữ cảnh agent', 'Rút luật từ lịch sử và CI', 'Tạo llms.txt'],
  promptExamples: [
    { labelEn: 'Initialize docs', labelVi: 'Khởi tạo tài liệu', command: '/ak:docs init', whenEn: 'A repository needs a minimal project-specific documentation route.', whenVi: 'Repo cần tuyến tài liệu tối thiểu theo đúng dự án.', expectedEn: 'Loads the init workflow and establishes only the needed docs surface before writing durable guidance.', expectedVi: 'Nạp workflow init và chỉ lập phần tài liệu thật sự cần.', recommended: true },
    { labelEn: 'Refresh changed docs', labelVi: 'Cập nhật tài liệu đổi', command: '/ak:docs update', whenEn: 'Source, scripts, or project contracts changed and docs may be stale.', whenVi: 'Mã, script hoặc hợp đồng dự án đã đổi nên tài liệu có thể lỗi thời.', expectedEn: 'Reconciles affected documents with current evidence and keeps unrelated documentation surfaces unchanged.', expectedVi: 'Đối chiếu và sửa các tài liệu bị ảnh hưởng theo bằng chứng hiện tại.' },
    { labelEn: 'Audit agent context', labelVi: 'Kiểm tra ngữ cảnh agent', command: '/ak:docs agent-context --audit', whenEn: 'The root CLAUDE.md or AGENTS.md needs a keep, cut, or fix review.', whenVi: 'CLAUDE.md hoặc AGENTS.md ở gốc cần rà soát phần giữ, bỏ hoặc sửa.', expectedEn: 'Runs the agent-context rules and confirms changes one decision at a time.', expectedVi: 'Áp dụng quy tắc agent-context và xác nhận từng quyết định thay đổi.' },
    { labelEn: 'Request advisory context', labelVi: 'Xin cố vấn cho ngữ cảnh agent', command: '/ak:docs agent-context --advice', whenEn: 'A root context change should be reviewed by kongming before a proposed write.', whenVi: 'Thay đổi ngữ cảnh gốc cần kongming góp ý trước khi đề xuất ghi.', expectedEn: 'Gets advisory review for the agent-context proposal while keeping all file writes confirmation-based and scoped.', expectedVi: 'Nhận review cố vấn cho đề xuất agent-context và vẫn chỉ ghi sau xác nhận.' },
    { labelEn: 'Mine recurring failures', labelVi: 'Rút luật từ lỗi lặp lại', command: '/ak:docs agents 30d --source', whenEn: 'Recent git, CI, and source markers should become confirmed DO or DON’T rules.', whenVi: 'Lịch sử git, CI và dấu hiệu trong mã gần đây cần được chuyển thành luật NÊN hoặc KHÔNG NÊN đã xác nhận.', expectedEn: 'Ranks recurring signals, includes the default kongming review, and distills only corroborated rules into root agent context.', expectedVi: 'Xếp hạng tín hiệu lặp lại, kèm review kongming mặc định, và chỉ đưa luật có chứng cứ vào ngữ cảnh agent ở gốc.' },
    { labelEn: 'Dry-run rule mining', labelVi: 'Chạy thử rút luật', command: '/ak:docs agents 30d --dry-run', whenEn: 'You want ranked recurring signals without advisor proposals or file writes.', whenVi: 'Cần xếp hạng tín hiệu lặp lại mà không tạo đề xuất cố vấn hoặc ghi file.', expectedEn: 'Stops after signal ranking, makes no rule proposals, spawns no advisor, and writes no file.', expectedVi: 'Dừng sau bước xếp hạng tín hiệu, không đề xuất luật, không gọi cố vấn và không ghi file.' },
  ],
  skillStack: [
    { name: 'kongming', type: 'agent' },
    { name: 'ak:scout', type: 'skill' },
    { name: 'references/doc-content-rules.md', type: 'tool' },
    { name: 'references/agent-context-rules.md', type: 'tool' },
  ],
  guardrails: [
    { thoughtEn: 'I know the docs folder shape.', thoughtVi: 'Tôi biết sẵn cấu trúc docs.', realityEn: 'Discover the project contract first; there may be no universal docs tree.', realityVi: 'Phải tìm hợp đồng của dự án trước; có thể không hề có cây docs chung.', accent: 'amber' },
    { thoughtEn: 'This behavior should be copied into docs.', thoughtVi: 'Nên chép hành vi này vào tài liệu.', realityEn: 'Prefer linking to the owning script, manifest, source, or generated artifact.', realityVi: 'Ưu tiên liên kết đến script, manifest, mã nguồn hoặc artifact đang sở hữu hành vi đó.', accent: 'blue' },
    { thoughtEn: 'Historical notes can stay in authority docs.', thoughtVi: 'Ghi chú lịch sử có thể nằm trong tài liệu thẩm quyền.', realityEn: 'Stateful evidence, audits, plans, and release notes stay outside evergreen authority paths.', realityVi: 'Bằng chứng tạm thời, audit, kế hoạch và ghi chú phát hành phải nằm ngoài tuyến thẩm quyền bền vững.', accent: 'rose' },
  ],
};

export default data;

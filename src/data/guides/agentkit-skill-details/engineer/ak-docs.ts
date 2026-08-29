import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-docs",
  command: "/ak:docs",
  kit: "engineer",
  header: {
    titleEn: "/ak:docs",
    titleVi: "/ak:docs",
    taglineEn: "Create, refresh, summarize, audit, and optimize project documentation and root agent context from current evidence.",
    taglineVi: "Tạo, làm mới, tóm tắt, audit và tối ưu tài liệu dự án cùng root agent context dựa trên bằng chứng hiện tại.",
  },
  hardGate: {
    type: "warning",
    titleEn: "DOCS HARD GATE",
    titleVi: "CỔNG CHẶN TÀI LIỆU",
    contentEn: "Start with a bounded brainstorm, never assume a universal docs tree, verify every path/command/config/behavioral claim, and do not implement product code during a documentation operation.",
    contentVi: "Bắt đầu bằng brainstorm có phạm vi, không giả định mọi repo đều có cây docs giống nhau, xác minh mọi path/lệnh/config/claim hành vi, và không triển khai product code trong tác vụ tài liệu.",
  },
  processFlow: [
    { number: 1, titleEn: "Bound Intent", titleVi: "Chốt ý định", descEn: "Establish consumers, decisions enabled, proof sources, evergreen vs stateful content, and acceptance criteria.", descVi: "Xác định người đọc, quyết định cần hỗ trợ, nguồn chứng minh, nội dung bền vững so với trạng thái, và tiêu chí chấp nhận." },
    { number: 2, titleEn: "Route Operation", titleVi: "Định tuyến thao tác", descEn: "Parse init, update, summarize, agent-context, agents, llms, or ask when empty/unclear.", descVi: "Đọc thao tác init, update, summarize, agent-context, agents, llms, hoặc hỏi lại khi trống/mơ hồ." },
    { number: 3, titleEn: "Load Rules", titleVi: "Nạp quy tắc", descEn: "Load doc-content-rules for doc writing or agent-context-rules for CLAUDE.md/AGENTS.md work.", descVi: "Nạp doc-content-rules khi viết tài liệu hoặc agent-context-rules khi làm CLAUDE.md/AGENTS.md." },
    { number: 4, titleEn: "Discover Contract", titleVi: "Khám phá contract", descEn: "Read repo instructions, README, docs index, docs files, then source/tests/scripts/generated artifacts/live state that prove claims.", descVi: "Đọc chỉ dẫn repo, README, docs index, file docs, rồi source/test/script/artifact sinh ra/live state để chứng minh claim." },
    { number: 5, titleEn: "Separate Authority", titleVi: "Tách quyền sở hữu", descEn: "Let code own WHAT/HOW; docs own WHY/WHERE, decisions, rejected alternatives, business rules, terminology, and constraints.", descVi: "Để code sở hữu WHAT/HOW; docs sở hữu WHY/WHERE, quyết định, phương án bị loại, business rule, thuật ngữ và ràng buộc." },
    { number: 6, titleEn: "Edit Thinly", titleVi: "Sửa gọn", descEn: "Update only impacted docs, delete stale or duplicate guidance, and link to owning scripts or manifests instead of copying inventories.", descVi: "Chỉ cập nhật docs bị ảnh hưởng, xóa hướng dẫn cũ/trùng, và link đến script hoặc manifest sở hữu thay vì copy danh sách." },
    { number: 7, titleEn: "Handle Agent Context", titleVi: "Xử lý agent context", descEn: "For root CLAUDE.md/AGENTS.md, keep imperative process memory separate from general project documentation.", descVi: "Với root CLAUDE.md/AGENTS.md, giữ trí nhớ quy trình dạng mệnh lệnh tách khỏi tài liệu dự án thông thường." },
    { number: 8, titleEn: "Verify Claims", titleVi: "Xác minh claim", descEn: "Check every path, command, configuration key, and behavioral statement against current evidence before delivery.", descVi: "Kiểm tra mọi path, lệnh, khóa cấu hình và mô tả hành vi bằng bằng chứng hiện tại trước khi bàn giao." },
    { number: 9, titleEn: "Summarize Delta", titleVi: "Tóm tắt thay đổi", descEn: "Report what changed, what was removed, the evidence used, and any stale/stateful material kept outside evergreen authority.", descVi: "Báo cáo phần đã đổi, phần đã xóa, bằng chứng đã dùng và vật liệu tạm thời được giữ ngoài nguồn evergreen." },
  ],
  corePrinciplesEn: [
    "Code owns WHAT and HOW; docs own WHY and WHERE.",
    "Documentation is a thin navigation layer, not a duplicate code inventory.",
    "Do not assume filenames, file counts, or a universal documentation layout.",
    "Delete stale guidance instead of preserving it for history.",
    "Root agent context is process memory, not a project-documentation substitute.",
  ],
  corePrinciplesVi: [
    "Code sở hữu WHAT và HOW; docs sở hữu WHY và WHERE.",
    "Tài liệu là lớp điều hướng mỏng, không phải bản sao danh mục code.",
    "Không giả định tên file, số lượng file hoặc layout docs phổ quát.",
    "Xóa hướng dẫn lỗi thời thay vì giữ lại cho lịch sử.",
    "Root agent context là trí nhớ quy trình, không thay thế tài liệu dự án.",
  ],
  expertiseAreasEn: [
    "Docs init/update/summarize workflows",
    "CLAUDE.md and AGENTS.md authoring, audit, and optimization",
    "Git/CI/source mining for recurring DO/DON'T agent rules",
    "llms.txt and llms-full.txt generation per llmstxt.org",
    "Evidence-backed documentation pruning and navigation design",
  ],
  expertiseAreasVi: [
    "Workflow init/update/summarize tài liệu",
    "Soạn, audit và tối ưu CLAUDE.md cùng AGENTS.md",
    "Khai thác git/CI/source để rút quy tắc DO/DON'T lặp lại cho agent",
    "Tạo llms.txt và llms-full.txt theo llmstxt.org",
    "Cắt gọn tài liệu và thiết kế điều hướng dựa trên bằng chứng",
  ],
  workflowModes: [
    { flag: "init", modeEn: "Create route", modeVi: "Tạo tuyến docs", research: "init-workflow", redTeam: "Avoid fixed layout", validation: "Minimal docs route proven", cookFlag: "init" },
    { flag: "update", modeEn: "Refresh impacted docs", modeVi: "Làm mới docs liên quan", research: "update-workflow", redTeam: "Check stale duplicates", validation: "Changed evidence reconciled", cookFlag: "update" },
    { flag: "summarize", modeEn: "Summarize evidence", modeVi: "Tóm tắt bằng chứng", research: "summarize-workflow", redTeam: "No forced new file", validation: "Summary cites sources", cookFlag: "summarize" },
    { flag: "agent-context", modeEn: "Root agent context", modeVi: "Root agent context", research: "agent-context-rules", redTeam: "Keep imperative only", validation: "Confirmed changes only", cookFlag: "agent-context" },
    { flag: "agents", modeEn: "Mine recurring rules", modeVi: "Khai thác quy tắc lặp", research: "agents-workflow", redTeam: "Corroborate git/CI/source", validation: "Confirmed DO/DON'T rules", cookFlag: "agents" },
    { flag: "llms", modeEn: "llms.txt", modeVi: "llms.txt", research: "llms.md", redTeam: "Check public doc shape", validation: "llms files current", cookFlag: "llms" },
  ],
  specialOperations: [
    { id: "agents-mining", titleEn: "Agents mining bounds", titleVi: "Giới hạn khai thác agents", descEn: "agents accepts a days or commits bound and defaults to the smaller of 90 days or 300 commits plus 200 CI runs.", descVi: "agents nhận giới hạn theo ngày hoặc số commit và mặc định lấy giá trị nhỏ hơn giữa 90 ngày hoặc 300 commit cùng 200 CI run.", color: "violet" },
    { id: "diagram-support", titleEn: "Diagram only when useful", titleVi: "Chỉ vẽ khi hữu ích", descEn: "Use the installed diagram skill only when a visual materially improves understanding, then visually review the output.", descVi: "Chỉ dùng skill sơ đồ khi hình ảnh thật sự giúp hiểu hơn, rồi phải xem lại kết quả bằng mắt." , color: "sky" },
  ],
  skillStack: [
    { name: "kongming", type: "agent" },
    { name: "ak:scout", type: "skill" },
    { name: "ak:diagram", type: "skill" },
    { name: "git history", type: "tool" },
    { name: "CI runs", type: "tool" },
  ],
  promptExamples: [
    { labelEn: "Initialize docs", labelVi: "Khởi tạo docs", command: "/ak:docs init", whenEn: "A project needs a minimal documentation route without assuming a fixed docs tree.", whenVi: "Dự án cần tuyến tài liệu tối thiểu mà không giả định cây docs cố định.", expectedEn: "Discovers the repo contract, loads init workflow, and creates only documentation needed for navigation and decisions.", expectedVi: "Khám phá contract repo, nạp workflow init và chỉ tạo tài liệu cần cho điều hướng cùng quyết định.", recommended: true },
    { labelEn: "Refresh changed docs", labelVi: "Làm mới docs sau thay đổi", command: "/ak:docs update after the auth refactor", whenEn: "Implementation changed behavior or ownership that docs already cover.", whenVi: "Triển khai vừa đổi hành vi hoặc quyền sở hữu mà docs đang mô tả.", expectedEn: "Updates impacted docs, removes stale duplicates, and links to source/script owners.", expectedVi: "Cập nhật docs bị ảnh hưởng, xóa phần trùng/lỗi thời và link về source/script sở hữu." },
    { labelEn: "Agent context", labelVi: "Agent context", command: "/ak:docs agent-context", whenEn: "The root CLAUDE.md or AGENTS.md needs authoring, audit, or optimization.", whenVi: "Root CLAUDE.md hoặc AGENTS.md cần được soạn, audit hoặc tối ưu.", expectedEn: "Uses agent-context-rules and keeps imperative process memory distinct from project docs.", expectedVi: "Dùng agent-context-rules và giữ trí nhớ quy trình dạng mệnh lệnh tách khỏi docs dự án." },
    { labelEn: "Mine agent rules", labelVi: "Khai thác quy tắc agent", command: "/ak:docs agents 30d", whenEn: "Recurring failures in git or CI should become confirmed root agent-context rules.", whenVi: "Lỗi lặp lại trong git hoặc CI cần chuyển thành quy tắc root agent-context đã xác nhận.", expectedEn: "Mines bounded history, ranks signals, confirms rules, and writes only corroborated DO/DON'T guidance.", expectedVi: "Khai thác lịch sử có giới hạn, xếp hạng tín hiệu, xác nhận quy tắc và chỉ viết hướng dẫn DO/DON'T có chứng cứ." },
  ],
};

export default data;

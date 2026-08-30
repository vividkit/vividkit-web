import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-docs",
  command: "/ak:docs",
  kit: "engineer",
  header: {
    titleEn: "/ak:docs — Create and audit project docs",
    titleVi: "/ak:docs — Tạo và audit tài liệu dự án",
    taglineEn: "Create, refresh, summarize, audit, and optimize project documentation and root agent context from current evidence.",
    taglineVi: "Tạo, làm mới, tóm tắt, audit và tối ưu tài liệu dự án cùng root agent context dựa trên bằng chứng hiện tại.",
  },
  hardGate: {
    type: "warning",
    titleEn: "OPENING GATE",
    titleVi: "CỔNG MỞ ĐẦU",
    contentEn: "Start with a bounded brainstorm, establish audience, outcome, evidence, evergreen/stateful boundaries, and acceptance criteria, then avoid product-code changes during docs work.",
    contentVi: "Bắt đầu bằng brainstorm có phạm vi, xác định audience, kết quả, bằng chứng, ranh giới evergreen/stateful và tiêu chí chấp nhận, rồi tránh sửa product code trong tác vụ tài liệu.",
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
    { labelEn: "Initialize docs", labelVi: "Khởi tạo docs", command: "/ak:docs init", whenEn: "A project needs its first coherent documentation route without a fixed template tree.", whenVi: "Project cần tuyến tài liệu mạch lạc đầu tiên mà không áp đặt cây template cố định.", expectedEn: "Confirms the documentation contract, discovers existing authority surfaces, and creates only the smallest evidence-backed route needed for navigation and decisions.", expectedVi: "Xác nhận contract tài liệu, khám phá các bề mặt thẩm quyền hiện có và chỉ tạo tuyến nhỏ nhất dựa trên bằng chứng cho điều hướng cùng quyết định.", recommended: true },
    { labelEn: "Refresh changed docs with advice", labelVi: "Làm mới docs với cố vấn", command: "/ak:docs update --advice \"Reconcile onboarding docs with the current authentication flow\"", whenEn: "Behavior, architecture, configuration, or operating guidance changed and impacted docs must be reconciled.", whenVi: "Hành vi, kiến trúc, cấu hình hoặc hướng dẫn vận hành đã đổi và docs bị ảnh hưởng cần được đối chiếu.", expectedEn: "Runs the bounded contract check, factors in kongming counsel before writing, maps changed claims to current evidence, and removes stale duplication.", expectedVi: "Chạy bước kiểm tra contract có phạm vi, tính đến cố vấn kongming trước khi ghi, ánh xạ claim đã đổi tới bằng chứng hiện tại và xóa phần trùng lặp lỗi thời." },
    { labelEn: "Audit root agent context", labelVi: "Audit root agent context", command: "/ak:docs agent-context --audit", whenEn: "The root CLAUDE.md or AGENTS.md needs a keep, cut, fix, or migrate review before edits.", whenVi: "Root CLAUDE.md hoặc AGENTS.md cần review keep, cut, fix hoặc migrate trước khi sửa.", expectedEn: "Loads agent-context-rules, gets a kongming audit, asks one confirmed decision at a time, excludes secrets, and applies only accepted root-context changes.", expectedVi: "Nạp agent-context-rules, lấy audit từ kongming, hỏi từng quyết định đã xác nhận, loại secret và chỉ áp dụng thay đổi root-context được chấp nhận." },
    { labelEn: "Mine source-backed agent rules", labelVi: "Khai thác quy tắc có source", command: "/ak:docs agents 30d --source", whenEn: "Recurring failures should become root process rules only when git, CI, and source markers corroborate them.", whenVi: "Lỗi lặp lại chỉ nên thành quy tắc process ở root khi git, CI và source marker cùng chứng minh.", expectedEn: "Mines bounded git and CI history, layers read-only ak:scout source-marker mining, applies corroboration gates, and writes only confirmed DO/DON'T rules.", expectedVi: "Khai thác lịch sử git và CI có giới hạn, bổ sung khai thác source marker chỉ đọc bằng ak:scout, áp dụng gate corroboration và chỉ ghi quy tắc DO/DON'T đã xác nhận." },
  ],
};

export default data;

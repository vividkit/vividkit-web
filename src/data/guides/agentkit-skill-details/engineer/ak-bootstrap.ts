import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-bootstrap',
  command: '/ak:bootstrap',
  kit: 'engineer',
  header: {
    titleEn: '/ak:bootstrap — New project from idea to running code',
    titleVi: '/ak:bootstrap — Dự án mới từ ý tưởng tới code chạy được',
    taglineEn:
      'Bootstraps web, mobile, CLI, API, MCP, WebMCP, and library projects from a locked scope straight to implementation via ak:cook, then code review, UX/AX enhancement for web surfaces, and optional release with live verification. There is no separate planning phase.',
    taglineVi:
      'Khởi tạo dự án web, mobile, CLI, API, MCP, WebMCP và thư viện từ scope đã chốt đi thẳng vào triển khai qua ak:cook, rồi code review, nâng cấp UX/AX cho bề mặt web, và tuỳ chọn release kèm xác minh live. Không có bước lập plan riêng.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Default --auto stops only at authorization boundaries',
    titleVi: 'Mặc định --auto chỉ dừng ở ranh giới uỷ quyền',
    contentEn:
      'Without a mode flag, bootstrap decides open gaps itself and records them as assumptions. It stops for a missing secret, a destructive or outward-facing action the brief does not authorize, or spending the brief does not cover. Bootstrap alone never authorizes publication: create a remote repository, deploy, or release only when the brief asks for those targets.',
    contentVi:
      'Khi không có cờ mode, bootstrap tự quyết các chỗ còn hở và ghi lại thành giả định. Nó chỉ dừng khi thiếu secret, khi gặp thao tác phá huỷ hoặc ra bên ngoài mà brief chưa cho phép, hoặc khi phát sinh chi phí brief không bao gồm. Bản thân bootstrap không cấp quyền publish: chỉ tạo repo từ xa, deploy hay release khi brief yêu cầu đúng các đích đó.',
  },
  processFlow: [
    { number: 1, titleEn: 'Lock the contract', titleVi: 'Chốt hợp đồng', descEn: 'Before Git, research, design, or scaffolding, capture outcome, constraints, non-goals, acceptance criteria, and definition of done, checked against the project-brief checklist for each surface. --auto decides gaps as recorded assumptions; --ask interviews through ak:advise until you confirm.', descVi: 'Trước Git, nghiên cứu, thiết kế hay scaffold, chốt kết quả cần đạt, ràng buộc, ngoài phạm vi, tiêu chí nghiệm thu và định nghĩa hoàn thành, đối chiếu với checklist brief cho từng bề mặt. --auto tự quyết chỗ hở và ghi thành giả định; --ask phỏng vấn qua ak:advise tới khi bạn xác nhận.' },
    { number: 2, titleEn: 'Set up the repository', titleVi: 'Chuẩn bị repository', descEn: 'Inspect the destination and Git state, reuse an existing project and its branches, and initialize Git only for a new project when the setup includes it. Create a remote repository through ak:github only when the brief asks.', descVi: 'Kiểm thư mục đích và trạng thái Git, dùng lại project và branch đang có, và chỉ init Git cho project mới khi setup có yêu cầu. Chỉ tạo repo từ xa qua ak:github khi brief yêu cầu.' },
    { number: 3, titleEn: 'Research, stack, design', titleVi: 'Nghiên cứu, stack, thiết kế', descEn: 'Run the mode reference for research and stack choice, routing each surface to its skill. Visual projects use ak:frontend-design when art direction matters; CLI, API, MCP, and library projects design their interface contract instead of wireframes.', descVi: 'Chạy reference của mode để nghiên cứu và chọn stack, chuyển từng bề mặt tới skill phụ trách. Dự án có giao diện dùng ak:frontend-design khi cần định hướng thẩm mỹ; dự án CLI, API, MCP và thư viện thiết kế contract giao diện thay cho wireframe.' },
    { number: 4, titleEn: 'Cook directly', titleVi: 'Cook trực tiếp', descEn: 'Pass the contract, assumptions, and research, stack, and design outputs to /ak:cook with the mode flag. Cook sizes its own plan and runs the tests; bootstrap does not call ak:plan.', descVi: 'Truyền hợp đồng, giả định và kết quả nghiên cứu, stack, thiết kế sang /ak:cook kèm cờ mode. Cook tự lập plan vừa đủ và chạy test; bootstrap không gọi ak:plan.' },
    { number: 5, titleEn: 'Code review', titleVi: 'Code review', descEn: 'Run ak:code-review on the new project (codebase, or --pending, PR, or commits for work in an existing project). Blocking findings go back through cook, then review again with the same flags.', descVi: 'Chạy ak:code-review trên project mới (codebase, hoặc --pending, PR hay commit với phần thêm vào project có sẵn). Lỗi chặn quay lại cook để sửa, rồi review lại với cùng cờ.' },
    { number: 6, titleEn: 'UX and AX for web', titleVi: 'UX và AX cho web', descEn: 'When the project has a website or web app, run ak:enhance-ux-ax --auto after review passes. Projects without a web surface skip this phase.', descVi: 'Khi dự án có website hoặc web app, chạy ak:enhance-ux-ax --auto sau khi review pass. Dự án không có bề mặt web bỏ qua bước này.' },
    { number: 7, titleEn: 'Release and verify live', titleVi: 'Release và xác minh live', descEn: 'When the definition of done names a live target, release there (staging first when defined) and verify the way a real user or client reaches it: browser for web, clean install for a CLI, a real MCP client for a server.', descVi: 'Khi định nghĩa hoàn thành có đích live, release lên đó (staging trước nếu có) và xác minh theo cách người dùng hay client thật tiếp cận: trình duyệt cho web, cài sạch cho CLI, client MCP thật cho server.' },
    { number: 8, titleEn: 'Docs, onboard, report', titleVi: 'Tài liệu, onboarding, báo cáo', descEn: 'Write docs and onboarding, report the outcome with unresolved questions last, and run /ak:journal unless --skip-journal or preferences disable it.', descVi: 'Viết tài liệu và onboarding, báo kết quả với câu hỏi chưa giải quyết đặt cuối, và chạy /ak:journal trừ khi --skip-journal hoặc preference tắt bước này.' },
  ],
  corePrinciplesEn: [
    'Bootstrap orchestrates end to end; it never implements code directly or adds a separate ak:plan phase.',
    'The opening contract is mandatory in every mode; modes change execution and approval behavior only after it is concrete.',
    'Full requested scope is the default; --yagni is the only opt-in to challenge and cut unnecessary scope.',
    'A project is done only when its definition of done is met, including live verification when it names a live target.',
  ],
  corePrinciplesVi: [
    'Bootstrap điều phối đầu-cuối; không tự viết code và không thêm bước ak:plan riêng.',
    'Hợp đồng mở đầu bắt buộc ở mọi mode; mode chỉ đổi cách chạy và cách duyệt sau khi hợp đồng đã cụ thể.',
    'Mặc định làm đủ phạm vi được yêu cầu; chỉ --yagni mới cho phép phản biện và cắt phần không cần thiết.',
    'Dự án chỉ xong khi đạt định nghĩa hoàn thành, gồm cả xác minh live nếu có đích live.',
  ],
  workflowModes: [
    { flag: '--auto', modeEn: 'Automatic (default)', modeVi: 'Tự động (mặc định)', research: 'Automatic research and stack choice', redTeam: 'Authorization boundaries only', validation: 'Cook --auto; code review' },
    { flag: '--full', modeEn: 'Full interactive', modeVi: 'Đầy đủ có tương tác', research: 'Refined requirements, then research', redTeam: 'Missing material decisions', validation: 'Cook interactive; code review' },
    { flag: '--fast', modeEn: 'Quick bootstrap', modeVi: 'Khởi tạo nhanh', research: 'Lean research path', redTeam: 'Missing material decisions', validation: 'Cook --fast; code review' },
    { flag: '--parallel', modeEn: 'Multi-agent', modeVi: 'Nhiều agent song song', research: 'Parallel research', redTeam: 'Missing material decisions', validation: 'Cook --parallel; code review' },
  ],
  promptExamples: [
    { labelEn: 'Default autonomous run', labelVi: 'Chạy tự động mặc định', command: '/ak:bootstrap "MCP server and CLI for our billing API"',
      commandVi: '/ak:bootstrap "MCP server và CLI cho billing API của chúng tôi"', whenEn: 'Use when the brief is clear enough for the agent to decide remaining gaps itself.', whenVi: 'Dùng khi brief đủ rõ để agent tự quyết các chỗ còn hở.', expectedEn: 'Locks the contract with recorded assumptions, designs the CLI commands and MCP tool schemas, cooks with --auto, runs code review, and stops only at authorization boundaries.', expectedVi: 'Chốt hợp đồng kèm các giả định đã ghi, thiết kế lệnh CLI và schema tool MCP, cook với --auto, chạy code review, và chỉ dừng ở ranh giới uỷ quyền.', recommended: true },
    { labelEn: 'Interview first', labelVi: 'Phỏng vấn trước', command: '/ak:bootstrap "Redesign our marketing site" --ask',
      commandVi: '/ak:bootstrap "Thiết kế lại trang marketing của chúng tôi" --ask', whenEn: 'Use when the scope is vague and you want to lock it in an interview before any build.', whenVi: 'Dùng khi scope còn mơ hồ và bạn muốn chốt qua phỏng vấn trước khi làm.', expectedEn: 'Interviews through ak:advise until outcome, scope, and definition of done are confirmed, builds the new site in its requested location without overwriting the old one, then runs review and ak:enhance-ux-ax --auto.', expectedVi: 'Phỏng vấn qua ak:advise tới khi kết quả, scope và định nghĩa hoàn thành được xác nhận, dựng site mới ở vị trí yêu cầu mà không ghi đè site cũ, rồi chạy review và ak:enhance-ux-ax --auto.' },
    { labelEn: 'Fast SaaS scaffold', labelVi: 'Scaffold SaaS nhanh', command: '/ak:bootstrap "Build a SaaS dashboard with auth" --fast',
      commandVi: '/ak:bootstrap "Xây dashboard SaaS có xác thực" --fast', whenEn: 'Use when a new project needs quick setup but still must pass the opening contract and review.', whenVi: 'Dùng khi dự án mới cần setup nhanh nhưng vẫn phải qua hợp đồng mở đầu và review.', expectedEn: 'Captures the contract, asks only about decisions that would change the product, takes the lean research path, cooks with --fast, and runs code review.', expectedVi: 'Chốt hợp đồng, chỉ hỏi các quyết định làm đổi sản phẩm, đi đường nghiên cứu gọn, cook với --fast, và chạy code review.' },
    { labelEn: 'Parallel build', labelVi: 'Xây song song', command: '/ak:bootstrap "E-commerce platform with Stripe" --parallel',
      commandVi: '/ak:bootstrap "Nền tảng thương mại điện tử với Stripe" --parallel', whenEn: 'Use when the project is large enough for multi-agent implementation.', whenVi: 'Dùng khi dự án đủ lớn để triển khai bằng nhiều agent.', expectedEn: 'Keeps the opening contract, runs parallel research, passes the contract to /ak:cook --parallel, and reviews the combined result before UX/AX enhancement.', expectedVi: 'Giữ hợp đồng mở đầu, nghiên cứu song song, truyền hợp đồng sang /ak:cook --parallel, và review kết quả gộp trước khi nâng cấp UX/AX.' },
    { labelEn: 'Full interactive', labelVi: 'Đầy đủ có tương tác', command: '/ak:bootstrap "CLI tool for invoices" --full --skip-journal',
      commandVi: '/ak:bootstrap "Công cụ CLI cho hóa đơn" --full --skip-journal', whenEn: 'Use when you want to approve requirements, stack, and design yourself and skip the automatic journal.', whenVi: 'Dùng khi bạn muốn tự duyệt yêu cầu, stack và thiết kế, và bỏ bước journal tự động.', expectedEn: 'Refines requirements with you, pauses on material decisions, cooks interactively, runs code review, and reports that the journal was skipped by flag.', expectedVi: 'Cùng bạn làm rõ yêu cầu, dừng ở các quyết định quan trọng, cook có tương tác, chạy code review, và báo rằng journal đã được bỏ qua do cờ.' },
    { labelEn: 'Ultra review', labelVi: 'Review ultra', command: '/ak:bootstrap "Internal analytics portal" --auto --ultra --yagni',
      commandVi: '/ak:bootstrap "Cổng phân tích nội bộ" --auto --ultra --yagni', whenEn: 'Use when the code review should use the best-of-5 verifier and scope should be challenged.', whenVi: 'Dùng khi code review cần chế độ verifier best-of-5 và scope cần được phản biện.', expectedEn: 'Cuts scope not needed for the outcome, cooks in --auto mode, and runs /ak:code-review codebase --ultra, including the re-review after UX/AX enhancement.', expectedVi: 'Cắt phần scope không cần cho kết quả, cook ở mode --auto, và chạy /ak:code-review codebase --ultra, gồm cả lần review lại sau khi nâng cấp UX/AX.' },
  ],
  composableFlagsEn: '--ask runs the opening gate as an ak:advise interview, then continues in the selected mode. --ultra makes the code review phase run /ak:code-review codebase --ultra and combines with every mode, including --parallel. --yagni passes through to cook and code review. --skip-journal only affects the final journal step.',
  composableFlagsVi: '--ask chạy bước mở đầu thành phỏng vấn ak:advise, rồi tiếp tục theo mode đã chọn. --ultra khiến pha code review chạy /ak:code-review codebase --ultra và kết hợp được với mọi mode, kể cả --parallel. --yagni được truyền sang cook và code review. --skip-journal chỉ ảnh hưởng bước journal cuối.',
  invocation: {
    syntax: '/ak:bootstrap [requirements] [--auto|--full|--fast|--parallel] [--ask] [--ultra] [--yagni] [--skip-journal]',
    arguments: [
      { token: '[requirements]', titleEn: 'Project requirements', titleVi: 'Yêu cầu project', descEn: 'Natural-language product outcome, surfaces, constraints, non-goals, acceptance criteria, and definition of done, including any live target such as production or a registry.', descVi: 'Kết quả sản phẩm, các bề mặt, ràng buộc, ngoài phạm vi, tiêu chí nghiệm thu và định nghĩa hoàn thành bằng ngôn ngữ tự nhiên, gồm cả đích live như production hay registry nếu có.', required: true, exampleCommand: '/ak:bootstrap "Create a private incident-response dashboard with SSO, an audit log, and no billing in v1"',
          exampleCommandVi: '/ak:bootstrap "Tạo dashboard incident-response riêng tư với SSO, audit log, và không có billing trong v1"' },
    ],
    options: [
      { token: '--auto', titleEn: 'Automatic (default)', titleVi: 'Tự động (mặc định)', descEn: 'Default mode. Decides open gaps as recorded assumptions and continues without routine approval pauses, stopping only at authorization boundaries. Does not grant commits, publication, or deployment the brief does not ask for.', descVi: 'Mode mặc định. Tự quyết chỗ hở và ghi thành giả định, chạy tiếp mà không dừng xin duyệt thường lệ, chỉ dừng ở ranh giới uỷ quyền. Không cấp quyền commit, publish hay deploy mà brief không yêu cầu.' },
      { token: '--full', titleEn: 'Full interactive', titleVi: 'Đầy đủ có tương tác', descEn: 'Refines requirements with you, then research, stack choice, and design with pauses on material decisions before cook.', descVi: 'Cùng bạn làm rõ yêu cầu, rồi nghiên cứu, chọn stack và thiết kế, có dừng ở các quyết định quan trọng trước khi cook.' },
      { token: '--fast', titleEn: 'Fast', titleVi: 'Nhanh', descEn: 'Uses a lean research and design path, then /ak:cook --fast. Does not reduce code review or verification.', descVi: 'Dùng đường nghiên cứu và thiết kế gọn, rồi /ak:cook --fast. Không giảm code review hay bước kiểm chứng.' },
      { token: '--parallel', titleEn: 'Parallel', titleVi: 'Song song', descEn: 'Runs research and implementation with multiple agents through /ak:cook --parallel. Does not make overlapping edits safe.', descVi: 'Chạy nghiên cứu và triển khai bằng nhiều agent qua /ak:cook --parallel. Không làm edit chồng lấn trở nên an toàn.' },
      { token: '--ask', titleEn: 'Interview to lock scope', titleVi: 'Phỏng vấn để chốt scope', descEn: 'Not a mode. Runs the opening gate as an ak:advise interview until outcome, scope, constraints, non-goals, acceptance criteria, and definition of done are confirmed, then continues in the selected mode.', descVi: 'Không phải mode. Chạy bước mở đầu thành phỏng vấn ak:advise tới khi kết quả, scope, ràng buộc, ngoài phạm vi, tiêu chí nghiệm thu và định nghĩa hoàn thành được xác nhận, rồi chạy tiếp theo mode đã chọn.' },
      { token: '--ultra', titleEn: 'Ultra code review', titleVi: 'Code review ultra', descEn: 'Runs the code review phase with the best-of-5 verifier mode (/ak:code-review codebase --ultra). Combines with every mode; bootstrap itself does not fan out.', descVi: 'Chạy pha code review ở chế độ verifier best-of-5 (/ak:code-review codebase --ultra). Kết hợp được với mọi mode; bootstrap không tự tách nhánh agent.' },
      { token: '--yagni', titleEn: 'Cut unneeded scope', titleVi: 'Cắt scope thừa', descEn: 'Challenge and cut requested work that is not needed for the stated outcome. Without this flag, bootstrap builds the full requested scope.', descVi: 'Chất vấn và cắt phần việc đã yêu cầu nhưng không cần cho outcome đã nêu. Khi không có flag này, bootstrap làm đủ phạm vi được yêu cầu.' },
      { token: '--skip-journal', titleEn: 'Skip journal', titleVi: 'Bỏ journal', descEn: 'Skip only the automatic /ak:journal step at completion. Explicit journal commands still work.', descVi: 'Chỉ bỏ bước /ak:journal tự động khi hoàn tất. Lệnh journal được gọi rõ vẫn chạy bình thường.' },
    ],
  },
};

export default data;

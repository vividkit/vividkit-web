import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-bootstrap',
  command: '/ak:bootstrap',
  kit: 'engineer',
  header: {
    titleEn: '/ak:bootstrap — New project from idea to running code',
    titleVi: '/ak:bootstrap — Dự án mới từ ý tưởng tới code chạy được',
    taglineEn:
      'Bootstraps new projects with an opening brainstorm contract, Git setup, optional research, stack and design decisions, planning, delegated implementation, tests, review, docs, onboarding, and final report.',
    taglineVi:
      'Khởi tạo dự án mới bằng hợp đồng brainstorm mở đầu, thiết lập Git, nghiên cứu tùy mode, quyết định stack và thiết kế, lập kế hoạch, giao triển khai, test, review, tài liệu, onboarding và báo cáo cuối.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Fast and automatic modes can change repository state',
    titleVi: 'Mode nhanh và tự động có thể đổi trạng thái repository',
    contentEn:
      'When Git is missing, --auto, --fast, and --parallel initialize it without the dedicated Git-init question used by --full. Choose --full or initialize the repository yourself when that decision needs review; --ultra still cannot combine with --parallel.',
    contentVi:
      'Khi thiếu Git, --auto, --fast và --parallel sẽ khởi tạo mà không có câu hỏi Git-init riêng như --full. Chọn --full hoặc tự khởi tạo repository khi quyết định đó cần được review; --ultra vẫn không thể đi cùng --parallel.',
  },
  processFlow: [
    { number: 1, titleEn: 'Capture contract', titleVi: 'Chốt hợp đồng mở đầu', descEn: 'Before Git, research, design, planning, or scaffolding, capture outcome, constraints, non-goals, and observable acceptance criteria.', descVi: 'Trước Git, nghiên cứu, thiết kế, lập kế hoạch hoặc scaffold, ghi rõ kết quả cần đạt, ràng buộc, ngoài phạm vi và tiêu chí nghiệm thu quan sát được.' },
    { number: 2, titleEn: 'Select mode', titleVi: 'Chọn mode', descEn: 'Default to --full unless --auto, --fast, --parallel, --ultra, --yagni, or --skip-journal changes execution and gates.', descVi: 'Mặc định là --full trừ khi --auto, --fast, --parallel, --ultra, --yagni hoặc --skip-journal thay đổi cách chạy và gate.' },
    { number: 3, titleEn: 'Initialize Git', titleVi: 'Khởi tạo Git', descEn: 'Check if Git exists; --full asks before init, while auto/fast/parallel modes can auto-init via git-manager on main.', descVi: 'Kiểm tra đã có Git chưa; --full hỏi trước khi init, còn auto/fast/parallel có thể tự init qua git-manager trên main.' },
    { number: 4, titleEn: 'Research and decide', titleVi: 'Nghiên cứu và quyết định', descEn: 'Run the mode reference for research, tech-stack, design, and planning depth; --fast uses a lean pre-planning path while /ak:plan --fast skips redundant research, and --parallel prepares multi-agent ownership.', descVi: 'Chạy tham chiếu mode để xác định độ sâu nghiên cứu, stack, thiết kế và kế hoạch; --fast dùng đường tiền-plan gọn còn /ak:plan --fast bỏ nghiên cứu lặp lại, và --parallel chuẩn bị quyền sở hữu nhiều agent.' },
    { number: 5, titleEn: 'Invoke plan', titleVi: 'Gọi plan', descEn: 'Pass the brainstorm contract to /ak:plan with --hard, --auto, --fast, --parallel, or --ultra according to mode rules.', descVi: 'Truyền hợp đồng brainstorm sang /ak:plan với --hard, --auto, --fast, --parallel hoặc --ultra theo quy tắc mode.' },
    { number: 6, titleEn: 'Invoke cook', titleVi: 'Gọi cook', descEn: 'Pass the produced plan path to /ak:cook, using --auto or --parallel only when the bootstrap mode authorizes those execution gates.', descVi: 'Truyền đường dẫn plan đã tạo sang /ak:cook, chỉ dùng --auto hoặc --parallel khi mode bootstrap cho phép các gate thực thi đó.' },
    { number: 7, titleEn: 'Shared phases', titleVi: 'Các pha chung', descEn: 'Implementation through final report includes testing, review, docs, onboarding, concise reporting, and unresolved questions last.', descVi: 'Từ triển khai tới báo cáo cuối gồm test, review, tài liệu, onboarding, báo cáo ngắn gọn và câu hỏi chưa giải quyết đặt cuối.' },
    { number: 8, titleEn: 'Journal decision', titleVi: 'Quyết định journal', descEn: 'Run /ak:journal on completion unless --skip-journal or resolved preferences explicitly disable the automatic journal step.', descVi: 'Chạy /ak:journal khi hoàn tất trừ khi --skip-journal hoặc cấu hình preference đã resolve tắt bước journal tự động.' },
  ],
  corePrinciplesEn: [
    'Bootstrap owns end-to-end orchestration, not direct implementation.',
    'The opening brainstorm contract is mandatory in every mode, including --fast, --parallel, and explicit --auto.',
    'Full requested scope is the default; --yagni is the only opt-in to challenge and cut unnecessary scope.',
    'Mode flags change gates and depth, not the obligation to produce running, verified code.',
  ],
  corePrinciplesVi: [
    'Bootstrap sở hữu điều phối đầu-cuối, không tự triển khai trực tiếp.',
    'Hợp đồng brainstorm mở đầu bắt buộc trong mọi mode, kể cả --fast, --parallel và --auto rõ ràng.',
    'Mặc định làm đủ phạm vi được yêu cầu; chỉ --yagni mới cho phép phản biện và cắt phần không cần thiết.',
    'Cờ mode thay đổi gate và độ sâu, không bỏ nghĩa vụ tạo code chạy được và đã kiểm chứng.',
  ],
  workflowModes: [
    { flag: '--full', modeEn: 'Full interactive', modeVi: 'Đầy đủ có tương tác', research: 'Ultrathink', redTeam: 'User gate at every major phase', validation: 'Plan --hard; cook interactive' },
    { flag: '--auto', modeEn: 'Explicit autonomous', modeVi: 'Tự động khi được cho phép rõ', research: 'Ultrathink', redTeam: 'Design gate only', validation: 'Plan --auto; cook --auto' },
    { flag: '--fast', modeEn: 'Quick bootstrap', modeVi: 'Khởi tạo nhanh', research: 'Think hard; lean research path', redTeam: 'Cook review gates remain', validation: 'Plan --fast; cook interactive' },
    { flag: '--parallel', modeEn: 'Multi-agent', modeVi: 'Nhiều agent song song', research: 'Ultrathink parallel', redTeam: 'Design gate, then parallel cook review gates', validation: 'Plan --parallel; cook --parallel' },
  ],
  promptExamples: [
    { labelEn: 'Fast SaaS scaffold', labelVi: 'Scaffold SaaS nhanh', command: '/ak:bootstrap "Build a SaaS dashboard with auth" --fast',
      commandVi: '/ak:bootstrap "Xây dashboard SaaS có xác thực" --fast', whenEn: 'Use when a new project needs quick setup but still must pass opening contract and cook gates.', whenVi: 'Dùng khi dự án mới cần setup nhanh nhưng vẫn phải qua hợp đồng mở đầu và gate của cook.', expectedEn: 'Captures the contract, runs the fast research/design path, calls /ak:plan --fast to skip redundant research, then cooks interactively with review gates.', expectedVi: 'Chốt hợp đồng, chạy đường nghiên cứu/thiết kế nhanh, gọi /ak:plan --fast để bỏ nghiên cứu lặp lại, rồi cook tương tác với review gate.', recommended: true },
    { labelEn: 'Parallel build', labelVi: 'Xây song song', command: '/ak:bootstrap "E-commerce platform with Stripe" --parallel',
      commandVi: '/ak:bootstrap "Nền tảng thương mại điện tử với Stripe" --parallel', whenEn: 'Use when the project is large enough for planned file ownership and multi-agent execution.', whenVi: 'Dùng khi dự án đủ lớn để cần kế hoạch sở hữu file và thực thi nhiều agent.', expectedEn: 'Keeps the opening contract and design approval, produces a parallel plan with dependency graph and file ownership, then runs /ak:cook --parallel with review gates.', expectedVi: 'Giữ hợp đồng mở đầu và duyệt thiết kế, tạo plan song song có graph phụ thuộc và quyền sở hữu file, rồi chạy /ak:cook --parallel với review gate.' },
    { labelEn: 'Autonomous bootstrap', labelVi: 'Khởi tạo tự động', command: '/ak:bootstrap "Internal analytics portal" --auto --yagni',
      commandVi: '/ak:bootstrap "Cổng phân tích nội bộ" --auto --yagni', whenEn: 'Use when the user explicitly opts into autonomous execution and scope challenge.', whenVi: 'Dùng khi người dùng rõ ràng cho phép tự động thực thi và phản biện scope.', expectedEn: 'Runs research, stack, and design selection automatically until the design approval gate, then passes --auto and --yagni to plan and cook for autonomous implementation.', expectedVi: 'Tự chạy nghiên cứu, chọn stack và thiết kế tới gate duyệt thiết kế, rồi truyền --auto và --yagni sang plan và cook để triển khai tự động.' },
    { labelEn: 'Skip journal', labelVi: 'Bỏ journal', command: '/ak:bootstrap "CLI tool for invoices" --full --skip-journal',
      commandVi: '/ak:bootstrap "Công cụ CLI cho hóa đơn" --full --skip-journal', whenEn: 'Use when bootstrap should not automatically run /ak:journal after completion.', whenVi: 'Dùng khi bootstrap không nên tự chạy /ak:journal sau khi hoàn tất.', expectedEn: 'Runs full interactive bootstrap with user gates at each major phase, delegates through plan and cook, and prints that the journal was skipped by flag.', expectedVi: 'Chạy bootstrap đầy đủ có tương tác với user gate ở mỗi pha lớn, giao qua plan và cook, rồi in rằng journal bị bỏ qua do cờ.' },
  ],
  composableFlagsEn: '--ultra changes only the planning phase to /ak:plan --ultra and cannot combine with --parallel. --yagni passes through to plan and cook. --skip-journal only affects the final journal step.',
  composableFlagsVi: '--ultra chỉ đổi pha lập kế hoạch sang /ak:plan --ultra và không thể đi cùng --parallel. --yagni được truyền sang plan và cook. --skip-journal chỉ ảnh hưởng bước journal cuối.',
  invocation: {
    syntax: '/ak:bootstrap [requirements] [--full|--auto|--fast|--parallel] [--ultra] [--yagni] [--skip-journal]',
    arguments: [
      { token: '[requirements]', titleEn: 'Project requirements', titleVi: 'Yêu cầu project', descEn: 'Natural-language product outcome, constraints, non-goals, and acceptance criteria. The Skill asks for missing decisions before setup work starts.', descVi: 'Outcome sản phẩm, ràng buộc, ngoài phạm vi và tiêu chí chấp nhận bằng ngôn ngữ tự nhiên. Skill hỏi phần quyết định còn thiếu trước khi bắt đầu setup.', required: true, exampleCommand: '/ak:bootstrap "Create a private incident-response dashboard with SSO, an audit log, and no billing in v1" --full',
          exampleCommandVi: '/ak:bootstrap "Create dashboard incident-response riêng tư với SSO, audit log, và không có billing trong v1" --full' },
    ],
    options: [
      { token: '--full', titleEn: 'Full interactive', titleVi: 'Đầy đủ có tương tác', descEn: 'Default mode. Runs requirements refinement, research, stack choice, optional design, detailed planning, and interactive implementation with pauses for major decisions.', descVi: 'Mode mặc định. Chạy làm rõ yêu cầu, research, chọn stack, design tùy chọn, lập plan chi tiết và triển khai có tương tác với các lần dừng ở quyết định lớn.' },
      { token: '--auto', titleEn: 'Automatic', titleVi: 'Tự động', descEn: 'Explicit opt-in for automatic research, stack selection, planning, and implementation after the opening contract. Does not grant unrelated authority such as commits, publication, or deployment.', descVi: 'Opt-in rõ ràng cho research, chọn stack, lập plan và triển khai tự động sau hợp đồng mở đầu. Không cấp thêm quyền ngoài scope như commit, publish hoặc deploy.' },
      { token: '--fast', titleEn: 'Fast', titleVi: 'Nhanh', descEn: 'Uses a lean research and design path before /ak:plan --fast, then keeps normal cook review gates. Does not reduce implementation verification.', descVi: 'Dùng đường research và design gọn trước /ak:plan --fast, rồi giữ review gate bình thường của cook. Không giảm phần kiểm chứng triển khai.' },
      { token: '--parallel', titleEn: 'Parallel', titleVi: 'Song song', descEn: 'Creates a dependency graph and exclusive file ownership for independent implementation streams, then runs parallel cook. Does not make overlapping edits safe.', descVi: 'Tạo graph phụ thuộc và ownership file riêng cho các luồng triển khai độc lập, rồi chạy cook song song. Không làm edit chồng lấn trở nên an toàn.' },
      { token: '--ultra', titleEn: 'Ultra planning', titleVi: 'Plan ultra', descEn: 'Replaces the planning phase with /ak:plan --ultra. Cannot combine with --parallel, and bootstrap itself does not fan out.', descVi: 'Thay pha lập plan bằng /ak:plan --ultra. Không thể đi cùng --parallel, và bootstrap không tự tách nhánh agent.' },
      { token: '--yagni', titleEn: 'Cut unneeded scope', titleVi: 'Cắt scope thừa', descEn: 'Challenge and cut requested work that is not needed for the stated outcome. Without this flag, bootstrap builds the full requested scope.', descVi: 'Chất vấn và cắt phần việc đã yêu cầu nhưng không cần cho outcome đã nêu. Khi không có flag này, bootstrap làm đủ phạm vi được yêu cầu.' },
      { token: '--skip-journal', titleEn: 'Skip journal', titleVi: 'Bỏ journal', descEn: 'Skip only the automatic /ak:journal step at completion. Explicit journal commands still work.', descVi: 'Chỉ bỏ bước /ak:journal tự động khi hoàn tất. Lệnh journal được gọi rõ vẫn chạy bình thường.' },
    ],
  },
};

export default data;

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
    type: 'critical',
    titleEn: '--ultra and --parallel hard-conflict',
    titleVi: '--ultra và --parallel xung đột cứng',
    contentEn:
      'If both flags are present, stop and ask the user to drop one. Bootstrap also does not implement directly; it delegates through plan and cook after the opening contract is concrete.',
    contentVi:
      'Nếu có cả hai cờ, phải dừng và yêu cầu người dùng bỏ một cờ. Bootstrap cũng không tự triển khai trực tiếp; nó giao qua plan và cook sau khi hợp đồng mở đầu đã rõ.',
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
    { labelEn: 'Fast SaaS scaffold', labelVi: 'Scaffold SaaS nhanh', command: '/ak:bootstrap "Build a SaaS dashboard with auth" --fast', whenEn: 'Use when a new project needs quick setup but still must pass opening contract and cook gates.', whenVi: 'Dùng khi dự án mới cần setup nhanh nhưng vẫn phải qua hợp đồng mở đầu và gate của cook.', expectedEn: 'Captures the contract, runs the fast research/design path, calls /ak:plan --fast to skip redundant research, then cooks interactively with review gates.', expectedVi: 'Chốt hợp đồng, chạy đường nghiên cứu/thiết kế nhanh, gọi /ak:plan --fast để bỏ nghiên cứu lặp lại, rồi cook tương tác với review gate.', recommended: true },
    { labelEn: 'Parallel build', labelVi: 'Xây song song', command: '/ak:bootstrap "E-commerce platform with Stripe" --parallel', whenEn: 'Use when the project is large enough for planned file ownership and multi-agent execution.', whenVi: 'Dùng khi dự án đủ lớn để cần kế hoạch sở hữu file và thực thi nhiều agent.', expectedEn: 'Keeps the opening contract and design approval, produces a parallel plan with dependency graph and file ownership, then runs /ak:cook --parallel with review gates.', expectedVi: 'Giữ hợp đồng mở đầu và duyệt thiết kế, tạo plan song song có graph phụ thuộc và quyền sở hữu file, rồi chạy /ak:cook --parallel với review gate.' },
    { labelEn: 'Autonomous bootstrap', labelVi: 'Khởi tạo tự động', command: '/ak:bootstrap "Internal analytics portal" --auto --yagni', whenEn: 'Use when the user explicitly opts into autonomous execution and scope challenge.', whenVi: 'Dùng khi người dùng rõ ràng cho phép tự động thực thi và phản biện scope.', expectedEn: 'Runs research, stack, and design selection automatically until the design approval gate, then passes --auto and --yagni to plan and cook for autonomous implementation.', expectedVi: 'Tự chạy nghiên cứu, chọn stack và thiết kế tới gate duyệt thiết kế, rồi truyền --auto và --yagni sang plan và cook để triển khai tự động.' },
    { labelEn: 'Skip journal', labelVi: 'Bỏ journal', command: '/ak:bootstrap "CLI tool for invoices" --full --skip-journal', whenEn: 'Use when bootstrap should not automatically run /ak:journal after completion.', whenVi: 'Dùng khi bootstrap không nên tự chạy /ak:journal sau khi hoàn tất.', expectedEn: 'Runs full interactive bootstrap with user gates at each major phase, delegates through plan and cook, and prints that the journal was skipped by flag.', expectedVi: 'Chạy bootstrap đầy đủ có tương tác với user gate ở mỗi pha lớn, giao qua plan và cook, rồi in rằng journal bị bỏ qua do cờ.' },
  ],
  composableFlagsEn: '--ultra changes only the planning phase to /ak:plan --ultra and cannot combine with --parallel. --yagni passes through to plan and cook. --skip-journal only affects the final journal step.',
  composableFlagsVi: '--ultra chỉ đổi pha lập kế hoạch sang /ak:plan --ultra và không thể đi cùng --parallel. --yagni được truyền sang plan và cook. --skip-journal chỉ ảnh hưởng bước journal cuối.',
};

export default data;

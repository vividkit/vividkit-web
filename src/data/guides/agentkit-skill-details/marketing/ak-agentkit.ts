import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-agentkit',
  command: '/ak:agentkit',
  kit: 'marketer',
  header: {
    titleEn: '/ak:agentkit — Skill router and workflow chain selector',
    titleVi: '/ak:agentkit — Bộ định tuyến skill và chọn chuỗi workflow',
    taglineEn:
      'Classifies ambiguous or multi-domain work, inventories installed capabilities, chooses the shortest correct skill chain, times subagent use, and applies risk-matched verification without replacing the routed skills. It also operates the ak CLI safely when the next action is an ak subcommand.',
    taglineVi:
      'Phân loại việc mơ hồ hoặc nhiều miền, kiểm kê năng lực đã cài, chọn chuỗi skill ngắn nhất phù hợp, quyết định thời điểm dùng subagent và áp gate kiểm chứng theo rủi ro mà không thay thế skill được định tuyến. Skill cũng vận hành CLI ak an toàn khi bước tiếp theo là một lệnh con của ak.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Route only to installed capabilities',
    titleVi: 'Chỉ định tuyến tới năng lực đã cài',
    contentEn:
      'Never route to a skill or agent you have not confirmed installed. Headless jobs across CLIs or worktrees and coordinated multi-session teams belong to separate Engineer capabilities when installed; otherwise report the gap. A route never grants new permission for secrets, spending, publication, or other external effects.',
    contentVi:
      'Không bao giờ định tuyến tới skill hoặc agent chưa xác nhận đã cài. Job headless qua nhiều CLI hoặc worktree và team nhiều session phối hợp thuộc về các năng lực riêng của Engineer Kit khi đã cài; nếu chưa có thì báo rõ khoảng trống. Việc chọn tuyến không bao giờ cấp thêm quyền dùng secret, chi tiền, xuất bản hay các tác động bên ngoài khác.',
  },
  processFlow: [
    { number: 1, titleEn: 'Proportionality gate', titleVi: 'Gate vừa đủ', descEn: 'Skip ceremony for trivial, single-domain, pure conversation, or user-named skill cases; invoke the obvious owner directly.', descVi: 'Bỏ nghi thức cho việc nhỏ, một miền, chỉ trò chuyện hoặc người dùng đã gọi đúng skill; gọi thẳng chủ sở hữu rõ ràng.' },
    { number: 2, titleEn: 'Classify task', titleVi: 'Phân loại việc', descEn: 'Load the task taxonomy and emit class, size, risk, and domain count before shaping a workflow.', descVi: 'Nạp phân loại task rồi nêu class, kích cỡ, rủi ro và số miền trước khi dựng workflow.' },
    { number: 3, titleEn: 'Inventory installs', titleVi: 'Kiểm kê đã cài', descEn: 'Use the runtime\'s installed skill and agent list; missing capability triggers find-skills when available or an explicit gap report.', descVi: 'Dùng danh sách skill và agent đã cài của runtime; nếu thiếu năng lực thì dùng find-skills khi có hoặc báo rõ khoảng trống.' },
    { number: 4, titleEn: 'Select the chain', titleVi: 'Chọn chuỗi', descEn: 'Prefer the user-named skill, then domain-specific owners, then the shortest understand → decide → execute → verify → deliver chain that actually fits.', descVi: 'Ưu tiên skill người dùng nêu, rồi chủ sở hữu theo miền, rồi chuỗi hiểu → quyết định → thực thi → kiểm chứng → bàn giao ngắn nhất thật sự phù hợp.' },
    { number: 5, titleEn: 'Time subagents', titleVi: 'Định thời subagent', descEn: 'Spawn subagents only when they add fresh context, specialist boundaries, or parallel wall-clock benefit; avoid splitting tiny edits.', descVi: 'Chỉ spawn subagent khi chúng thêm ngữ cảnh mới, ranh giới chuyên môn hoặc lợi ích song song; tránh tách việc sửa nhỏ.' },
    { number: 6, titleEn: 'Apply risk gates', titleVi: 'Áp gate theo rủi ro', descEn: 'Low risk uses executor checks, elevated risk adds verification and self-review, high risk adds independent review and user confirmation for irreversible steps.', descVi: 'Rủi ro thấp dùng check của skill thực thi, rủi ro vừa thêm kiểm chứng và tự review, rủi ro cao thêm reviewer độc lập và xác nhận người dùng cho bước không thể đảo ngược.' },
    { number: 7, titleEn: 'Recover links', titleVi: 'Khôi phục mắt xích', descEn: 'A failed link does not advance; fix, debug, or rescope it, and after two consecutive failures report the precise blocker instead of looping.', descVi: 'Mắt xích lỗi không được đi tiếp; sửa, debug hoặc thu hẹp nó, và sau hai lần lỗi liên tiếp thì báo blocker cụ thể thay vì lặp.' },
    { number: 8, titleEn: 'Operate the ak CLI', titleVi: 'Vận hành CLI ak', descEn: 'When the next action is an ak subcommand or reading its --json output, classify the effect (read-only, mutating, or diagnostic), confirm project versus global scope before any change, inspect with read-only commands first, and treat ak <cmd> --help as the authority.', descVi: 'Khi bước tiếp theo là một lệnh con của ak hoặc đọc output --json của nó, phân loại tác động (chỉ đọc, có thay đổi, hay chẩn đoán), xác nhận phạm vi project hay toàn máy trước mọi thay đổi, kiểm tra bằng lệnh chỉ đọc trước, và lấy ak <cmd> --help làm căn cứ.' },
    { number: 9, titleEn: 'Report route', titleVi: 'Báo tuyến đi', descEn: 'Finish with delivered outcome, links run, agents used, verification evidence, and any remaining capability gaps.', descVi: 'Kết thúc bằng kết quả đã giao, các mắt xích đã chạy, agent đã dùng, bằng chứng kiểm chứng và khoảng trống năng lực còn lại.' },
  ],
  corePrinciplesEn: [
    'This skill decides and dispatches; routed skills and agents own execution.',
    'The best route is often no route: trivial work should not get workflow ceremony.',
    'Installed capability inventory beats memory and wishful routing.',
    'Risk determines verification and review gates; high-risk confidence is not a reason to skip review.',
  ],
  corePrinciplesVi: [
    'Skill này quyết định và điều phối; skill và agent được định tuyến mới sở hữu phần thực thi.',
    'Tuyến tốt nhất nhiều khi là không định tuyến: việc nhỏ không cần nghi thức workflow.',
    'Kiểm kê năng lực đã cài đáng tin hơn trí nhớ và định tuyến theo mong muốn.',
    'Rủi ro quyết định gate kiểm chứng và review; càng tự tin ở việc rủi ro cao càng không được bỏ review.',
  ],
  promptExamples: [
    { labelEn: 'Ambiguous multi-step work', labelVi: 'Việc nhiều bước còn mơ hồ', command: '/ak:agentkit "Add team billing with Stripe and a settings page"',
      commandVi: '/ak:agentkit "Thêm thanh toán nhóm với Stripe và trang cài đặt"', whenEn: 'Use when the task spans several domains and needs the right skill sequence.', whenVi: 'Dùng khi việc trải qua nhiều miền và cần chọn đúng chuỗi skill.', expectedEn: 'Classifies work, inventories capabilities, chooses a chain, times agents, and applies risk gates.', expectedVi: 'Phân loại việc, kiểm kê năng lực, chọn chuỗi, định thời agent và áp gate theo rủi ro.', recommended: true },
    { labelEn: 'Unsure owner', labelVi: 'Chưa rõ chủ sở hữu', command: '/ak:agentkit "Which AgentKit workflow should handle a public API migration?"',
      commandVi: '/ak:agentkit "Workflow AgentKit nào nên xử lý việc di chuyển API công khai?"', whenEn: 'Use when the right skill or route is unclear but the task is not just a pure answer.', whenVi: 'Dùng khi chưa rõ skill hoặc tuyến nào đúng và việc không chỉ là một câu trả lời thuần túy.', expectedEn: 'The router explains the selected installed owner or names the missing capability.', expectedVi: 'Router giải thích chủ sở hữu đã cài được chọn hoặc nêu rõ năng lực còn thiếu.' },
    { labelEn: 'Workflow handoff', labelVi: 'Bàn giao workflow', command: '/ak:agentkit "Plan and execute a docs + frontend launch page refresh"',
      commandVi: '/ak:agentkit "Lập kế hoạch và thực hiện làm mới trang ra mắt docs + frontend"', whenEn: 'Use when multiple domains need sequencing and verification, not when a single skill is obvious.', whenVi: 'Dùng khi nhiều miền cần sắp thứ tự và kiểm chứng, không dùng khi một skill đã rõ ràng.', expectedEn: 'Produces the shortest fitting chain and avoids spawning agents where one skill is enough.', expectedVi: 'Tạo chuỗi ngắn nhất phù hợp và tránh spawn agent khi một skill là đủ.' },
    { labelEn: 'Operate the ak CLI', labelVi: 'Vận hành CLI ak', command: '/ak:agentkit "ak doctor reports a problem with this project install; diagnose it and fix it safely"',
      commandVi: '/ak:agentkit "ak doctor báo lỗi bản cài của project này; chẩn đoán và sửa an toàn"', whenEn: 'Use when the next action is running or interpreting an ak subcommand, such as doctor, update, or recover, rather than routing a marketing task.', whenVi: 'Dùng khi bước tiếp theo là chạy hoặc đọc kết quả một lệnh con của ak, như doctor, update hay recover, thay vì định tuyến một việc marketing.', expectedEn: 'Classifies each ak command as read-only, mutating, or diagnostic, runs read-only checks first, confirms project versus global scope, and asks before any mutation such as a recover or reinstall.', expectedVi: 'Phân loại từng lệnh ak là chỉ đọc, có thay đổi hay chẩn đoán, chạy kiểm tra chỉ đọc trước, xác nhận phạm vi project hay toàn máy, và hỏi trước mọi thao tác thay đổi như recover hay cài lại.' },
  ],
  guardrails: [
    { thoughtEn: 'A big-looking task needs every workflow link.', thoughtVi: 'Việc nhìn lớn thì cần đủ mọi mắt xích.', realityEn: 'Use the collapse rule; each link needs a real entry and exit reason.', realityVi: 'Dùng quy tắc rút gọn; mỗi mắt xích phải có lý do vào và ra thật.', accent: 'blue' },
    { thoughtEn: 'I remember a skill exists.', thoughtVi: 'Tôi nhớ là có skill đó.', realityEn: 'Inventory the current install; missing skills are reported or discovered, not imagined.', realityVi: 'Kiểm kê bản cài hiện tại; skill thiếu thì báo hoặc tìm, không tưởng tượng.', accent: 'amber' },
    { thoughtEn: 'The diff looks clean, so high-risk review can wait.', thoughtVi: 'Diff nhìn sạch nên việc review rủi ro cao để sau cũng được.', realityEn: 'High-risk routes require independent review before delivery or irreversible action.', realityVi: 'Tuyến rủi ro cao cần review độc lập trước khi bàn giao hoặc làm việc không thể đảo ngược.', accent: 'red' },
  ],
};

export default data;

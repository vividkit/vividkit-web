import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-agentkit',
  command: '/ak:agentkit',
  kit: 'engineer',
  header: {
    titleEn: '/ak:agentkit — Skill router and workflow chain selector',
    titleVi: '/ak:agentkit — Bộ định tuyến skill và chọn chuỗi workflow',
    taglineEn:
      'Classifies ambiguous or multi-domain work, inventories installed capabilities, chooses the shortest correct skill chain, times subagent use, and applies risk-matched verification without replacing the routed skills.',
    taglineVi:
      'Phân loại việc mơ hồ hoặc nhiều miền, kiểm kê năng lực đã cài, chọn chuỗi skill ngắn nhất phù hợp, quyết định thời điểm dùng subagent và áp gate kiểm chứng theo rủi ro mà không thay thế skill được định tuyến.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Route only to installed capabilities',
    titleVi: 'Chỉ định tuyến tới năng lực đã cài',
    contentEn:
      'Never route to a skill or agent you have not confirmed installed. If work is explicitly headless, cross-CLI, or multi-worktree orchestration, hand off to ak-orchestrate and stop.',
    contentVi:
      'Không bao giờ định tuyến tới skill hoặc agent chưa xác nhận đã cài. Nếu công việc rõ ràng là orchestration headless, đa CLI hoặc nhiều worktree, chuyển sang ak-orchestrate rồi dừng.',
  },
  processFlow: [
    { number: 1, titleEn: 'Proportionality gate', titleVi: 'Gate vừa đủ', descEn: 'Skip ceremony for trivial, single-domain, pure conversation, or user-named skill cases; invoke the obvious owner directly.', descVi: 'Bỏ nghi thức cho việc nhỏ, một miền, chỉ trò chuyện hoặc người dùng đã gọi đúng skill; gọi thẳng chủ sở hữu rõ ràng.' },
    { number: 2, titleEn: 'Classify task', titleVi: 'Phân loại việc', descEn: 'Load the task taxonomy and emit class, size, risk, and domain count before shaping a workflow.', descVi: 'Nạp phân loại task rồi nêu class, kích cỡ, rủi ro và số miền trước khi dựng workflow.' },
    { number: 3, titleEn: 'Inventory installs', titleVi: 'Kiểm kê đã cài', descEn: 'Use the runtime\'s installed skill and agent list; missing capability triggers find-skills when available or an explicit gap report.', descVi: 'Dùng danh sách skill và agent đã cài của runtime; nếu thiếu năng lực thì dùng find-skills khi có hoặc báo rõ khoảng trống.' },
    { number: 4, titleEn: 'Select the chain', titleVi: 'Chọn chuỗi', descEn: 'Prefer the user-named skill, then domain-specific owners, then the shortest understand → decide → execute → verify → deliver chain that actually fits.', descVi: 'Ưu tiên skill người dùng nêu, rồi chủ sở hữu theo miền, rồi chuỗi hiểu → quyết định → thực thi → kiểm chứng → bàn giao ngắn nhất thật sự phù hợp.' },
    { number: 5, titleEn: 'Time subagents', titleVi: 'Định thời subagent', descEn: 'Spawn subagents only when they add fresh context, specialist boundaries, or parallel wall-clock benefit; avoid splitting tiny edits.', descVi: 'Chỉ spawn subagent khi chúng thêm ngữ cảnh mới, ranh giới chuyên môn hoặc lợi ích song song; tránh tách việc sửa nhỏ.' },
    { number: 6, titleEn: 'Apply risk gates', titleVi: 'Áp gate theo rủi ro', descEn: 'Low risk uses executor checks, elevated risk adds verification and self-review, high risk adds independent review and user confirmation for irreversible steps.', descVi: 'Rủi ro thấp dùng check của skill thực thi, rủi ro vừa thêm kiểm chứng và tự review, rủi ro cao thêm reviewer độc lập và xác nhận người dùng cho bước không thể đảo ngược.' },
    { number: 7, titleEn: 'Recover links', titleVi: 'Khôi phục mắt xích', descEn: 'A failed link does not advance; fix, debug, or rescope it, and after two consecutive failures report the precise blocker instead of looping.', descVi: 'Mắt xích lỗi không được đi tiếp; sửa, debug hoặc thu hẹp nó, và sau hai lần lỗi liên tiếp thì báo blocker cụ thể thay vì lặp.' },
    { number: 8, titleEn: 'Report route', titleVi: 'Báo tuyến đi', descEn: 'Finish with delivered outcome, links run, agents used, verification evidence, and any remaining capability gaps.', descVi: 'Kết thúc bằng kết quả đã giao, các mắt xích đã chạy, agent đã dùng, bằng chứng kiểm chứng và khoảng trống năng lực còn lại.' },
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
  invocation: {
    syntax: '/ak:agentkit [task to route]',
    arguments: [
      {
        token: '[task to route]',
        titleEn: 'Task to route',
        titleVi: 'Việc cần định tuyến',
        descEn:
          'Natural-language work request, outcome, constraints, domains, and authority boundaries. The router uses it to choose installed skills, sequence a short workflow, and match verification to risk.',
        descVi:
          'Yêu cầu công việc bằng ngôn ngữ tự nhiên, outcome, ràng buộc, miền liên quan và ranh giới quyền hạn. Router dùng nội dung này để chọn skill đã cài, sắp workflow ngắn và chọn kiểm chứng theo rủi ro.',
        required: true,
        exampleCommand:
          '/ak:agentkit "Add subscription billing and a settings page; require tests and stop before deployment"',
      },
    ],
  },
  promptExamples: [
    {
      labelEn: 'Ambiguous multi-domain feature',
      labelVi: 'Tính năng nhiều miền còn mơ hồ',
      command: '/ak:agentkit "Add team billing with Stripe and a settings page; require tests and stop before deployment"',
      whenEn: 'Use at the start of multi-step or multi-domain work when the right installed skills and their order are unclear.',
      whenVi: 'Dùng ở đầu việc nhiều bước hoặc nhiều miền khi chưa rõ skill đã cài nào đúng và thứ tự ra sao.',
      expectedEn: 'Emits the route class, size, risk, and domain count, inventories installed owners, then builds a short plan such as payment plus frontend work with verification and high-risk review before irreversible steps.',
      expectedVi: 'Nêu class tuyến, kích cỡ, rủi ro và số miền, kiểm kê owner đã cài, rồi dựng chuỗi ngắn như payment cộng frontend với kiểm chứng và review rủi ro cao trước bước không thể đảo ngược.',
      recommended: true,
    },
    {
      labelEn: 'Unsure owner',
      labelVi: 'Chưa rõ chủ sở hữu',
      command: '/ak:agentkit "Which AgentKit workflow should handle a public API migration?"',
      whenEn: 'Use when several installed skills could apply and the decision needs routing, not just a factual answer.',
      whenVi: 'Dùng khi nhiều skill đã cài có thể phù hợp và cần định tuyến, không chỉ cần một câu trả lời factual.',
      expectedEn: 'Applies the proportionality gate, classifies the migration risk and domains, confirms the installed owner or shortest chain, and names any missing capability instead of inventing one.',
      expectedVi: 'Áp gate vừa đủ, phân loại rủi ro và miền của migration, xác nhận owner đã cài hoặc chuỗi ngắn nhất, và nêu năng lực còn thiếu thay vì tưởng tượng.',
    },
    {
      labelEn: 'Workflow handoff',
      labelVi: 'Bàn giao workflow',
      command: '/ak:agentkit "Plan and execute a docs + frontend launch page refresh"',
      whenEn: 'Use when multiple domains need sequencing, bounded handoffs, and verification, not when one obvious skill owns the whole job.',
      whenVi: 'Dùng khi nhiều miền cần sắp thứ tự, bàn giao có ranh giới và kiểm chứng, không dùng khi một skill rõ ràng sở hữu toàn bộ việc.',
      expectedEn: 'Chooses one owner per link across understand, decide, execute, verify, and deliver stages, spawning subagents only at documented triggers such as broad investigation or completed implementation.',
      expectedVi: 'Chọn một owner cho mỗi mắt xích qua các bước hiểu, quyết định, thực thi, kiểm chứng và bàn giao; chỉ spawn subagent ở trigger được ghi như điều tra rộng hoặc đã triển khai xong.',
    },
    {
      labelEn: 'Collapse obvious work',
      labelVi: 'Rút gọn việc đã rõ',
      command: '/ak:agentkit "Fix the failing CI on this branch"',
      whenEn: 'Use when a task looked like it might need routing but should collapse if one installed skill clearly owns it.',
      whenVi: 'Dùng khi việc tưởng cần định tuyến nhưng nên rút gọn nếu một skill đã cài rõ ràng sở hữu nó.',
      expectedEn: 'Runs the proportionality gate first, recognizes the single-domain obvious owner, routes directly to the fix skill, and avoids an unnecessary multi-link chain or subagent split.',
      expectedVi: 'Chạy gate vừa đủ trước, nhận ra owner rõ ràng cho việc một miền, định tuyến thẳng tới skill fix và tránh chuỗi nhiều mắt xích hoặc chia subagent không cần thiết.',
    },
  ],
  guardrails: [
    { thoughtEn: 'A big-looking task needs every workflow link.', thoughtVi: 'Việc nhìn lớn thì cần đủ mọi mắt xích.', realityEn: 'Use the collapse rule; each link needs a real entry and exit reason.', realityVi: 'Dùng quy tắc rút gọn; mỗi mắt xích phải có lý do vào và ra thật.', accent: 'blue' },
    { thoughtEn: 'I remember a skill exists.', thoughtVi: 'Tôi nhớ là có skill đó.', realityEn: 'Inventory the current install; missing skills are reported or discovered, not imagined.', realityVi: 'Kiểm kê bản cài hiện tại; skill thiếu thì báo hoặc tìm, không tưởng tượng.', accent: 'amber' },
    { thoughtEn: 'The diff looks clean, so high-risk review can wait.', thoughtVi: 'Diff nhìn sạch nên việc review rủi ro cao để sau cũng được.', realityEn: 'High-risk routes require independent review before delivery or irreversible action.', realityVi: 'Tuyến rủi ro cao cần review độc lập trước khi bàn giao hoặc làm việc không thể đảo ngược.', accent: 'red' },
  ],
};

export default data;

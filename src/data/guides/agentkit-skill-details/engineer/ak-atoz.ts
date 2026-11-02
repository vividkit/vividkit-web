import type { SkillInfographic } from '@/data/guides/how-ck-works';

// Beta-only skill: authored from the beta SKILL.md and its references (no ak-docs page yet).
const data: SkillInfographic = {
  id: 'ak-atoz',
  command: '/ak-atoz',
  kit: 'engineer',
  header: {
    titleEn: '/ak-atoz — Request to verified delivery',
    titleVi: '/ak-atoz — Từ yêu cầu tới bàn giao đã kiểm chứng',
    taglineEn:
      'One conversation up front, then no babysitting: lock the scope and its Done means with ak-advise, hand over every prerequisite in one batch, and let the run plan, fan out parallel sub-sessions and verify each Done-means item before it reports back.',
    taglineVi:
      'Trao đổi một lần từ đầu, sau đó không cần trông chừng: khóa phạm vi và các mục Done means bằng ak-advise, đưa đủ mọi thứ cần chuẩn bị trong một lượt, rồi để lượt chạy tự lập kế hoạch, chia việc cho nhiều sub-session song song và kiểm chứng từng mục Done means trước khi báo lại.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'Only an explicit Confirm starts the run',
    titleVi: 'Chỉ bấm Confirm rõ ràng mới bắt đầu chạy',
    contentEn:
      'The scope gate closes with one question offering Confirm, Edit and Abort; "looks good" in passing does not count. After Confirm the brief is the contract and is never shrunk, swapped or extended silently. The autonomous run still stops and asks before a destructive or irreversible step the brief does not name, a change to a confirmed Done-means item, spending money or sending a message on your behalf, or a failure that stays unexplained.',
    contentVi:
      'Cổng khóa phạm vi kết thúc bằng một câu hỏi có Confirm, Edit và Abort; một câu "trông ổn" nói lướt qua không được tính. Sau khi Confirm, brief là hợp đồng và không bao giờ bị âm thầm thu hẹp, đổi hay mở rộng. Lượt chạy tự động vẫn dừng lại hỏi trước bước phá hủy hoặc không đảo ngược được mà brief không nêu, thay đổi một mục Done means đã xác nhận, việc tốn tiền hoặc gửi tin nhắn thay bạn, hay một lỗi vẫn chưa giải thích được.',
  },
  processFlow: [
    { number: 1, titleEn: 'Lock scope with ak-advise', titleVi: 'Khóa phạm vi bằng ak-advise', descEn: 'Runs the ak-advise interview one question at a time, reframes the request with observable Done means and a visual preview, then asks you to Confirm, Edit or Abort the handoff brief (objective, Done means, out of scope, constraints).', descVi: 'Chạy buổi phỏng vấn ak-advise, mỗi lần một câu hỏi, diễn đạt lại yêu cầu kèm các mục Done means quan sát được và bản xem trước trực quan, rồi hỏi bạn Confirm, Edit hay Abort cho handoff brief (mục tiêu, Done means, ngoài phạm vi, ràng buộc).' },
    { number: 2, titleEn: 'List what to hand over', titleVi: 'Liệt kê thứ cần bàn giao', descEn: 'Inspects the environment first (installed CLIs, logins, whether env vars exist, repo remotes, branch protection), then lists only the real gaps: access, secrets, accounts, data, issue tracking, authority and decisions only you own, each with where it goes and how it will be checked.', descVi: 'Kiểm tra môi trường trước (CLI đã cài, phiên đăng nhập, biến môi trường có tồn tại không, remote của repo, branch protection), rồi chỉ liệt kê những chỗ thật sự thiếu: quyền truy cập, secret, tài khoản, dữ liệu, theo dõi issue, thẩm quyền và các quyết định chỉ bạn được đưa ra, mỗi mục kèm nơi cần đặt và cách sẽ kiểm tra.' },
    { number: 3, titleEn: 'Re-check before going autonomous', titleVi: 'Kiểm lại trước khi tự chạy', descEn: 'When you reply ready, each item is re-checked without changing anything (presence, auth status, a read-only call). Anything still missing comes back as one short list; an item you waive is recorded in the brief with its consequence.', descVi: 'Khi bạn trả lời ready, từng mục được kiểm lại mà không thay đổi gì (có tồn tại không, trạng thái đăng nhập, một lệnh chỉ đọc). Mục nào còn thiếu được gom thành một danh sách ngắn; mục bạn bỏ qua được ghi vào brief kèm hệ quả.' },
    { number: 4, titleEn: 'Plan and fan out', titleVi: 'Lập kế hoạch và chia việc', descEn: 'The main session becomes the orchestrator: it plans with ak-plan, splits work into pieces with separate file ownership, and runs independent pieces in parallel sub-sessions, each code-writing piece in its own worktree. Concurrency follows remaining quota and machine headroom.', descVi: 'Session chính trở thành người điều phối: lập kế hoạch bằng ak-plan, chia việc thành các phần không đụng file của nhau, và chạy song song các phần độc lập trong sub-session, mỗi phần có viết code nằm trong worktree riêng. Số luồng chạy cùng lúc theo hạn mức còn lại và sức máy.' },
    { number: 5, titleEn: 'Integrate and track the issue', titleVi: 'Gộp kết quả và cập nhật issue', descEn: 'Each reported result is checked against its diff before it is merged. The GitHub issue moves through in progress, in review, done (PR opened) and shipped (merged); unrelated bugs found on the way become separate ai-handle issues instead of extra fixes.', descVi: 'Mỗi kết quả được báo về đều được đối chiếu với diff trước khi gộp. GitHub issue chuyển qua in progress, in review, done (đã mở PR) và shipped (đã merge); lỗi không liên quan phát hiện dọc đường thành issue ai-handle riêng thay vì sửa thêm.' },
    { number: 6, titleEn: 'Isolated review, then verify', titleVi: 'Review tách biệt rồi kiểm chứng', descEn: 'The final review runs in a fresh sub-session, never in the orchestrator that wrote the code, and repeats until clean. The run finishes only when every Done-means item is verified by its command, number or observable state and nothing it started is left running.', descVi: 'Lượt review cuối chạy trong một sub-session mới, không bao giờ trong session điều phối đã viết code, và lặp lại tới khi sạch lỗi. Lượt chạy chỉ kết thúc khi mọi mục Done means được kiểm chứng bằng lệnh, con số hoặc trạng thái quan sát được, và không còn tiến trình nào nó khởi động bị bỏ lại.' },
  ],
  corePrinciplesEn: [
    'Three gates in order: lock the scope, collect the prerequisites, then execute without check-ins.',
    'Secrets go into your environment or a secret store you control, never pasted into the conversation.',
    'A sub-session report is a claim; the orchestrator verifies the integrated result itself.',
    'Partial delivery is reported as partial, never as done.',
  ],
  corePrinciplesVi: [
    'Ba cổng theo thứ tự: khóa phạm vi, gom đủ thứ cần chuẩn bị, rồi tự chạy không hỏi giữa chừng.',
    'Secret đặt vào môi trường hoặc secret store do bạn quản lý, không bao giờ dán vào cuộc trò chuyện.',
    'Báo cáo của sub-session chỉ là lời khẳng định; người điều phối tự kiểm chứng kết quả đã gộp.',
    'Bàn giao dở dang thì báo là dở dang, không bao giờ báo là xong.',
  ],
  invocation: {
    syntax: '/ak-atoz "<request or URL>" [--yagni]',
    arguments: [
      {
        token: '"<request or URL>"',
        titleEn: 'Request or URL',
        titleVi: 'Yêu cầu hoặc URL',
        descEn: 'What to deliver, in plain words or as a link such as a GitHub issue. The text and linked content are treated as data, not instructions.',
        descVi: 'Việc cần giao, viết bằng lời thường hoặc là một link như GitHub issue. Nội dung yêu cầu và nội dung được link tới được xem là dữ liệu, không phải chỉ thị.',
        required: true,
        exampleCommand: '/ak-atoz "https://github.com/acme/shop/issues/412"',
      },
    ],
    options: [
      {
        token: '--yagni',
        titleEn: 'Cut unneeded scope',
        titleVi: 'Cắt phạm vi không cần',
        descEn: 'Passed through to the ak-advise interview so scope that the stated outcome does not need is challenged before the brief is locked.',
        descVi: 'Được chuyển tiếp vào buổi phỏng vấn ak-advise để phần phạm vi mà kết quả đã nêu không cần tới bị chất vấn trước khi khóa brief.',
        exampleCommand: '/ak-atoz "Add CSV export to the orders page" --yagni',
      },
    ],
  },
  promptExamples: [
    {
      labelEn: 'Deliver a GitHub issue',
      labelVi: 'Giao trọn một GitHub issue',
      command: '/ak-atoz "https://github.com/acme/shop/issues/412"',
      commandVi: '/ak-atoz "https://github.com/acme/shop/issues/412"',
      whenEn: 'Use when you want to answer questions once and then leave a scoped piece of work running unattended.',
      whenVi: 'Dùng khi bạn muốn trả lời câu hỏi một lần rồi để một phần việc đã khóa phạm vi tự chạy mà không cần trông.',
      expectedEn: 'An ak-advise interview ending in a Confirm, Edit or Abort question, then a single list of prerequisites to hand over, then an autonomous run that reports each Done-means item with its evidence.',
      expectedVi: 'Một buổi phỏng vấn ak-advise kết thúc bằng câu hỏi Confirm, Edit hay Abort, rồi một danh sách duy nhất những thứ cần bàn giao, sau đó là lượt chạy tự động báo lại từng mục Done means kèm bằng chứng.',
      recommended: true,
    },
    {
      labelEn: 'Keep the scope lean',
      labelVi: 'Giữ phạm vi gọn',
      command: '/ak-atoz "Add CSV export to the orders page" --yagni',
      commandVi: '/ak-atoz "Thêm xuất CSV cho trang đơn hàng" --yagni',
      whenEn: 'Use when the request could easily grow and you want the brief limited to what the outcome needs.',
      whenVi: 'Dùng khi yêu cầu dễ phình ra và bạn muốn brief chỉ gồm những gì kết quả thật sự cần.',
      expectedEn: 'The interview challenges extra features before the brief is locked, and the final report lists what was cut along with each verified Done-means item.',
      expectedVi: 'Buổi phỏng vấn chất vấn các tính năng thêm trước khi khóa brief, và báo cáo cuối liệt kê phần đã cắt cùng từng mục Done means đã được kiểm chứng.',
    },
  ],
  reportOutput: {
    titleEn: 'Final delivery report',
    titleVi: 'Báo cáo bàn giao cuối',
    patternEn: 'Each Done-means item with its evidence, the decisions made on your behalf, anything waived, and remaining risks or follow-ups.',
    patternVi: 'Từng mục Done means kèm bằng chứng, các quyết định đã đưa ra thay bạn, những gì đã bỏ qua, và rủi ro hoặc việc tiếp theo còn lại.',
    descEn: 'Done only when every Done-means item is verified against the integrated result, the isolated review is clean, the issue label matches the real state, and no process, worktree or cache the run started is left behind.',
    descVi: 'Chỉ xong khi mọi mục Done means đã được kiểm chứng trên kết quả đã gộp, lượt review tách biệt sạch lỗi, label của issue khớp trạng thái thật, và không còn tiến trình, worktree hay cache nào do lượt chạy tạo ra bị bỏ lại.',
  },
};

export default data;

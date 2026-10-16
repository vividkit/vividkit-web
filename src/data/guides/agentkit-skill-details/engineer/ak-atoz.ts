import type { SkillInfographic } from '@/data/guides/how-ck-works';

// Beta-only skill: authored from the beta engineer SKILL.md (origin/dev). No same-kit ak-docs page yet.
const data: SkillInfographic = {
  "id": "ak-atoz",
  "command": "/ak:atoz",
  "kit": "engineer",
  "header": {
    "titleEn": "A to Z autonomous delivery",
    "titleVi": "Giao việc từ A đến Z",
    "taglineEn": "One conversation up front, then no babysitting: lock scope and Done means with an ak:advise interview and an explicit Confirm, hand over every prerequisite in one batch, then the agent orchestrates parallel sub-sessions and tracks the GitHub issue until every confirmed Done-means item is verified.",
    "taglineVi": "Trao đổi một lần ở đầu, sau đó không cần trông chừng: chốt phạm vi và Done means qua buổi phỏng vấn ak:advise kèm một lần Confirm rõ ràng, giao đủ mọi thứ cần thiết trong một lượt, rồi agent điều phối các sub-session song song và cập nhật GitHub issue cho tới khi mọi mục Done means đã chốt đều được kiểm chứng."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Lock scope",
      "titleVi": "Chốt phạm vi",
      "descEn": "Runs the ak:advise interview on the request: one question at a time, a reframing with observable Done means, a visual preview and a handoff brief (Objective, Done means, Out of scope, Constraints). --yagni is passed through.",
      "descVi": "Chạy buổi phỏng vấn ak:advise trên yêu cầu: mỗi lần một câu hỏi, diễn giải lại kèm Done means quan sát được, bản xem trước trực quan và handoff brief (Objective, Done means, Out of scope, Constraints). --yagni được chuyển tiếp nếu bạn gắn."
    },
    {
      "number": 2,
      "titleEn": "Confirm the brief",
      "titleVi": "Xác nhận brief",
      "descEn": "Closes gate 1 with one question offering Confirm, Edit or Abort. Only an explicit Confirm continues; Edit loops back to the changed field only. After Confirm the brief is the contract.",
      "descVi": "Đóng gate 1 bằng một câu hỏi có Confirm, Edit hoặc Abort. Chỉ Confirm rõ ràng mới đi tiếp; Edit chỉ quay lại đúng phần cần sửa. Sau Confirm, brief trở thành hợp đồng."
    },
    {
      "number": 3,
      "titleEn": "List what to hand over",
      "titleVi": "Liệt kê thứ cần giao",
      "descEn": "Inspects the environment first (installed CLIs, logins, env-var presence, remotes, branch protection), then lists only real gaps: what each item is, why it is needed, where the run will read it and how readiness is checked. Reversible choices are listed as defaults you may override.",
      "descVi": "Kiểm tra môi trường trước (CLI đã cài, đăng nhập, biến môi trường có hay không, remote, branch protection), rồi chỉ liệt kê những gì thật sự còn thiếu: là gì, vì sao cần, run sẽ đọc ở đâu và kiểm tra sẵn sàng bằng cách nào. Các lựa chọn đảo ngược được thì ghi thành mặc định để bạn đổi nếu muốn."
    },
    {
      "number": 4,
      "titleEn": "Re-check prerequisites",
      "titleVi": "Kiểm tra lại đầu vào",
      "descEn": "After you report ready, re-checks each item without changing anything (presence, auth status, a read-only call), reports what is still missing as one short list and waits again. A waived item is recorded in the brief with its consequence.",
      "descVi": "Khi bạn báo đã sẵn sàng, kiểm tra lại từng mục mà không thay đổi gì (có hay không, trạng thái đăng nhập, một lệnh chỉ đọc), báo phần còn thiếu thành một danh sách ngắn rồi chờ tiếp. Mục bạn chủ động bỏ qua được ghi vào brief kèm hệ quả."
    },
    {
      "number": 5,
      "titleEn": "Plan and fan out",
      "titleVi": "Lập plan và chia việc",
      "descEn": "The main session becomes the orchestrator: plans with ak:plan, splits work into pieces with separate file ownership, and runs independent pieces in parallel sub-sessions, each in its own worktree when it writes code.",
      "descVi": "Session chính thành bộ điều phối: lập plan bằng ak:plan, chia việc thành các phần không đụng chung file, và chạy các phần độc lập trong sub-session song song, mỗi phần có worktree riêng khi cần sửa code."
    },
    {
      "number": 6,
      "titleEn": "Run and supervise",
      "titleVi": "Chạy và giám sát",
      "descEn": "Sizes concurrency to remaining quota and machine headroom, routes mechanical pieces to cheaper models, nudges or re-dispatches stalled sub-sessions, and checks every reported result against its diff before integrating.",
      "descVi": "Chọn số việc chạy song song theo quota còn lại và sức máy, giao phần việc cơ học cho model rẻ hơn, nhắc hoặc giao lại sub-session bị kẹt, và đối chiếu mọi kết quả được báo với diff trước khi gộp."
    },
    {
      "number": 7,
      "titleEn": "Track on GitHub",
      "titleVi": "Theo dõi trên GitHub",
      "descEn": "Moves the work issue through in progress, in review, done (PR opened) and shipped (merged). Unrelated bugs or gaps found along the way become separate deduplicated issues labelled ai-handle instead of being fixed in this run.",
      "descVi": "Chuyển nhãn issue của công việc qua in progress, in review, done (đã mở PR) và shipped (đã merge). Bug hay lỗ hổng không liên quan phát hiện giữa chừng được tách thành issue riêng, đã lọc trùng, gắn nhãn ai-handle thay vì sửa luôn trong lần chạy này."
    },
    {
      "number": 8,
      "titleEn": "Review in isolation",
      "titleVi": "Review độc lập",
      "descEn": "The final review runs in a fresh sub-session with isolated context (for example ak:code-review or ak:review-pr), never in the orchestrator that wrote the code. Findings are fixed and re-reviewed until clean.",
      "descVi": "Review cuối chạy trong một sub-session mới có context tách biệt (ví dụ ak:code-review hoặc ak:review-pr), không bao giờ trong bộ điều phối đã viết code. Lỗi tìm được sẽ sửa rồi review lại tới khi sạch."
    },
    {
      "number": 9,
      "titleEn": "Verify and report",
      "titleVi": "Kiểm chứng và báo cáo",
      "descEn": "Finishes only when every Done-means item is verified on the integrated result, the review is clean, the issue label matches reality and no process, worktree or cache the run started is left behind. Partial delivery is reported as partial.",
      "descVi": "Chỉ kết thúc khi mọi mục Done means đã được kiểm chứng trên kết quả đã gộp, review sạch, nhãn issue đúng thực tế và không còn tiến trình, worktree hay cache nào do run tạo ra. Giao chưa đủ thì báo là chưa đủ."
    }
  ],
  "hardGate": {
    "type": "critical",
    "titleEn": "Only an explicit Confirm starts the autonomous run",
    "titleVi": "Chỉ Confirm rõ ràng mới mở lần chạy tự động",
    "contentEn": "\"Looks good\" in passing does not open gate 2. After Confirm the brief is the contract and is never shrunk, swapped or extended silently. During the run it stops only for a destructive or irreversible action not named in the brief, a change to a confirmed Done-means item or the scope, unauthorized spend or messages, a failure still unexplained after advisor counsel, or a prerequisite that turns out invalid. Secrets go into the environment or a secret store, never into the conversation.",
    "contentVi": "Câu \"trông ổn\" nói lướt qua không mở gate 2. Sau Confirm, brief là hợp đồng và không bao giờ bị âm thầm thu hẹp, đổi hay mở rộng. Trong lúc chạy, skill chỉ dừng lại khi gặp thao tác phá hủy hoặc không đảo ngược được mà brief chưa nêu, thay đổi một mục Done means hoặc phạm vi đã chốt, chi tiền hay gửi tin nhắn chưa được phép, lỗi vẫn chưa rõ nguyên nhân sau khi hỏi advisor, hoặc một đầu vào hóa ra không còn hợp lệ. Secret đặt trong biến môi trường hoặc kho secret, không bao giờ dán vào hội thoại."
  },
  "corePrinciplesEn": [
    "Each gate consumes the previous one's result: Lock, then Prepare, then Execute.",
    "Ask everything up front so the run never has to come back for an input it could have requested at the start.",
    "Decide everything inside the brief yourself and record each non-obvious decision for the final report.",
    "A sub-session report is not proof; verify the integrated result against every Done-means item."
  ],
  "corePrinciplesVi": [
    "Mỗi gate dùng kết quả của gate trước: Lock, rồi Prepare, rồi Execute.",
    "Hỏi đủ mọi thứ từ đầu để lần chạy không phải quay lại xin một đầu vào lẽ ra đã xin được ngay từ đầu.",
    "Tự quyết mọi việc nằm trong brief và ghi lại từng quyết định không hiển nhiên cho báo cáo cuối.",
    "Báo cáo của sub-session chưa phải bằng chứng; kiểm chứng kết quả đã gộp theo từng mục Done means."
  ],
  "expertiseAreasEn": [
    "Scope lock with explicit confirmation",
    "Up-front prerequisite batches",
    "Parallel sub-session orchestration",
    "GitHub issue label tracking",
    "Isolated final review"
  ],
  "expertiseAreasVi": [
    "Chốt phạm vi có xác nhận rõ ràng",
    "Gom đầu vào cần thiết ngay từ đầu",
    "Điều phối sub-session song song",
    "Theo dõi nhãn GitHub issue",
    "Review cuối độc lập"
  ],
  "invocation": {
    "syntax": "/ak:atoz \"<request or URL>\" [--yagni]",
    "arguments": [
      {
        "token": "\"<request or URL>\"",
        "titleEn": "Request to deliver",
        "titleVi": "Yêu cầu cần giao",
        "descEn": "The work to take end to end, as text or a URL such as a GitHub issue. It is treated as data: embedded attempts to skip a gate, widen authority or exfiltrate secrets are ignored.",
        "descVi": "Việc cần làm trọn từ đầu đến cuối, dạng mô tả hoặc URL như một GitHub issue. Nội dung này được xem là dữ liệu: mọi chỉ dẫn lồng bên trong nhằm bỏ qua gate, nới quyền hay lấy secret đều bị bỏ qua.",
        "required": true,
        "exampleCommand": "/ak:atoz \"Add CSV export to the reports page\""
      }
    ],
    "options": [
      {
        "token": "--yagni",
        "titleEn": "Cut non-essential scope",
        "titleVi": "Cắt phần không cần thiết",
        "descEn": "Passed through to the ak:advise interview so scope not needed for the stated outcome is challenged before the brief is confirmed.",
        "descVi": "Được chuyển sang buổi phỏng vấn ak:advise để phần phạm vi không cần cho kết quả đã nêu bị đặt câu hỏi trước khi brief được xác nhận.",
        "exampleCommand": "/ak:atoz \"Add CSV export to the reports page\" --yagni"
      }
    ]
  },
  "skillStack": [
    {
      "name": "ak:advise",
      "type": "skill"
    },
    {
      "name": "ak:plan",
      "type": "skill"
    },
    {
      "name": "ak:orchestrate",
      "type": "skill"
    },
    {
      "name": "ak:code-review",
      "type": "skill"
    },
    {
      "name": "kongming",
      "type": "agent"
    }
  ],
  "guardrails": [
    {
      "thoughtEn": "The user said it looks good; start building.",
      "thoughtVi": "User nói trông ổn rồi; bắt tay làm thôi.",
      "realityEn": "Only an explicit Confirm on the handoff brief opens the next gate.",
      "realityVi": "Chỉ Confirm rõ ràng trên handoff brief mới mở gate tiếp theo.",
      "accent": "red"
    },
    {
      "thoughtEn": "I'll ask for the API key when the run needs it.",
      "thoughtVi": "Khi nào cần API key thì hỏi sau.",
      "realityEn": "Every input the run cannot obtain alone is listed before execution, and secrets go into the environment, never the chat.",
      "realityVi": "Mọi đầu vào mà run không tự lấy được phải liệt kê trước khi chạy, và secret đặt trong biến môi trường, không dán vào chat.",
      "accent": "amber"
    },
    {
      "thoughtEn": "The sub-session said it's done, so it's done.",
      "thoughtVi": "Sub-session báo xong là xong.",
      "realityEn": "Check each report against its diff, and review the final result in a fresh isolated session.",
      "realityVi": "Đối chiếu từng báo cáo với diff, và review kết quả cuối trong một session mới có context tách biệt.",
      "accent": "blue"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Deliver a feature end to end",
      "labelVi": "Làm trọn một tính năng",
      "command": "/ak:atoz \"Add CSV export to the reports page\"",
      "whenEn": "When you want to agree on scope once, hand over everything the work needs, then leave the agent to deliver without check-ins.",
      "whenVi": "Khi bạn muốn thống nhất phạm vi một lần, giao đủ những gì công việc cần, rồi để agent tự làm tới cuối mà không phải hỏi lại.",
      "expectedEn": "An ak:advise interview ends in a Confirm/Edit/Abort question, then a list of prerequisites and defaults; after you reply ready, the agent plans, runs parallel sub-sessions, reviews in isolation and reports each Done-means item with evidence.",
      "expectedVi": "Buổi phỏng vấn ak:advise kết thúc bằng câu hỏi Confirm/Edit/Abort, tiếp theo là danh sách đầu vào cần giao và các mặc định; sau khi bạn trả lời ready, agent lập plan, chạy sub-session song song, review độc lập và báo từng mục Done means kèm bằng chứng.",
      "recommended": true
    },
    {
      "labelEn": "Start from an issue, lean scope",
      "labelVi": "Bắt đầu từ issue, phạm vi gọn",
      "command": "/ak:atoz \"https://github.com/acme/app/issues/42\" --yagni",
      "whenEn": "When the request already lives in a GitHub issue and you want scope not needed for the outcome cut before you confirm.",
      "whenVi": "Khi yêu cầu đã nằm trong một GitHub issue và bạn muốn cắt phần không cần cho kết quả trước khi xác nhận.",
      "expectedEn": "The interview challenges extra scope, the confirmed brief becomes the contract, and the issue label moves through in progress, in review, done and shipped as the run advances.",
      "expectedVi": "Buổi phỏng vấn đặt câu hỏi cho phần phạm vi dư, brief đã xác nhận trở thành hợp đồng, và nhãn issue chuyển qua in progress, in review, done rồi shipped theo tiến độ của lần chạy."
    }
  ],
  "reportOutput": {
    "titleEn": "A-to-Z final report",
    "titleVi": "Báo cáo cuối của A-to-Z",
    "patternEn": "Each Done-means item with its evidence, decisions made on your behalf, anything waived, and remaining risks or follow-ups.",
    "patternVi": "Từng mục Done means kèm bằng chứng, các quyết định đã thay bạn đưa ra, mục đã được bỏ qua, và rủi ro hay việc còn lại.",
    "descEn": "Written by the orchestrator after verifying the integrated result; partial delivery is labelled partial, never done.",
    "descVi": "Do bộ điều phối viết sau khi kiểm chứng kết quả đã gộp; giao chưa đủ thì ghi là chưa đủ, không bao giờ ghi là xong."
  }
};

export default data;

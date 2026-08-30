import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-goal-warmup",
  "command": "/ak:goal-warmup",
  "kit": "engineer",
  "header": {
    "titleEn": "Goal Warmup Outcome Lock",
    "titleVi": "Khóa mục tiêu trước khi chạy dài",
    "taglineEn": "Prepare an expensive /goal or autonomous run by interviewing to an approved Outcome Contract, planning inside that contract, reviewing drift risks, and ending Ready, Blocked, or Decision required without auto-starting execution.",
    "taglineVi": "Chuẩn bị trước cho /goal hoặc phiên tự động dài bằng Outcome Contract đã được duyệt, plan không lệch hợp đồng, review rủi ro drift và kết thúc Ready, Blocked hoặc Decision required mà không tự chạy."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Parse goal",
      "titleVi": "Đọc mục tiêu",
      "descEn": "Read the quoted goal and --fast request, treating goal text and repo content as untrusted data.",
      "descVi": "Đọc goal trong dấu nháy và yêu cầu --fast nếu có, đồng thời xem goal và nội dung repo là dữ liệu không đáng tin."
    },
    {
      "number": 2,
      "titleEn": "Scout lightly",
      "titleVi": "Scout nhẹ",
      "descEn": "If the goal is repo-relevant, inspect just enough evidence to avoid guessing while keeping preflight non-mutating by default.",
      "descVi": "Nếu goal liên quan repo, inspect vừa đủ bằng chứng để tránh đoán mò, đồng thời giữ preflight mặc định là không mutate."
    },
    {
      "number": 3,
      "titleEn": "Estimate risk",
      "titleVi": "Ước lượng rủi ro",
      "descEn": "Classify local-only versus external dependencies, credentials, deploy, approvals, or multi-service work before choosing assurance level.",
      "descVi": "Phân loại local-only so với external dependency, credential, deploy, approval hoặc multi-service trước khi chọn mức assurance."
    },
    {
      "number": 4,
      "titleEn": "Gate fast path",
      "titleVi": "Chặn hoặc cho fast path",
      "descEn": "If --fast was requested, allow it only after eligibility passes and the user accepts reduced assurance; otherwise continue the full path.",
      "descVi": "Nếu có --fast, chỉ cho phép sau khi đủ điều kiện và user chấp nhận reduced assurance; nếu không thì tiếp tục luồng đầy đủ."
    },
    {
      "number": 5,
      "titleEn": "Interview contract",
      "titleVi": "Phỏng vấn hợp đồng",
      "descEn": "Use advise-style questions or restatement to produce the Outcome Contract: intended result, scope, non-goals, acceptance signals, constraints, substitutions, owner.",
      "descVi": "Dùng câu hỏi kiểu advise hoặc diễn giải lại để tạo Outcome Contract: kết quả mong muốn, phạm vi, ngoài phạm vi, tín hiệu chấp nhận, ràng buộc, thay thế được phép và owner."
    },
    {
      "number": 6,
      "titleEn": "Ask approval",
      "titleVi": "Xin duyệt",
      "descEn": "Do not plan until ask_user returns approve/edit/abort for the contract; free-form “looks good” is insufficient.",
      "descVi": "Không lập kế hoạch cho đến khi ask_user trả approve/edit/abort cho contract; câu “trông ổn” tự do là chưa đủ."
    },
    {
      "number": 7,
      "titleEn": "Plan under lock",
      "titleVi": "Lập plan theo hợp đồng",
      "descEn": "Invoke or emulate ak:plan with the approved contract as a hard constraint and include the required traceability table.",
      "descVi": "Gọi hoặc mô phỏng ak:plan với contract đã duyệt như ràng buộc cứng và có bảng traceability bắt buộc."
    },
    {
      "number": 8,
      "titleEn": "Review drift",
      "titleVi": "Review nguy cơ lệch",
      "descEn": "Classify findings as mitigation-within-contract, preflight-required, blocker, or outcome-change-request before any plan edit.",
      "descVi": "Phân loại finding thành mitigation-within-contract, preflight-required, blocker hoặc outcome-change-request trước khi sửa plan."
    },
    {
      "number": 9,
      "titleEn": "Build preflight matrix",
      "titleVi": "Lập ma trận preflight",
      "descEn": "Inspect every phase and group issues into must-provide, should-decide, or can-defer; prefer unknown + blocking over false Ready.",
      "descVi": "Kiểm tra mọi phase và nhóm vấn đề thành phải có trước, nên quyết trước, hoặc có thể hoãn; ưu tiên unknown + blocking hơn Ready giả."
    },
    {
      "number": 10,
      "titleEn": "Confirm final state",
      "titleVi": "Xác nhận trạng thái cuối",
      "descEn": "Ask for final summary confirmation before Ready, then emit only the handoff packet and scope guard; never auto-start /goal.",
      "descVi": "Xin xác nhận tóm tắt cuối trước khi Ready, rồi chỉ xuất handoff packet và scope guard; không bao giờ tự khởi động /goal."
    }
  ],
  "hardGate": {
    "type": "critical",
    "titleEn": "Approved contract before planning; never auto-start /goal",
    "titleVi": "Phải duyệt contract trước khi plan; không tự chạy /goal",
    "contentEn": "Planning is forbidden before explicit ask_user approval, the approved contract is immutable, and Ready is impossible until the user confirms the final summary. The skill stops at a packet.",
    "contentVi": "Cấm lập plan trước khi ask_user duyệt rõ ràng, contract đã duyệt là bất biến, và không được báo Ready trước khi user xác nhận tóm tắt cuối. Skill chỉ dừng ở packet."
  },
  "corePrinciplesEn": [
    "Lock the observable outcome before spending long-run compute.",
    "Surface blockers and decision points before execution, not after drift happens.",
    "Preserve the contract: mitigations can change implementation, not the promised outcome."
  ],
  "corePrinciplesVi": [
    "Khóa kết quả quan sát được trước khi tốn compute cho phiên chạy dài.",
    "Lộ blocker và điểm cần quyết định trước khi chạy, không đợi đến lúc đã drift.",
    "Giữ nguyên contract: mitigation được đổi cách làm, không đổi kết quả đã hứa."
  ],
  "expertiseAreasEn": [
    "Outcome contracts",
    "Long-run readiness preflight",
    "Contract-preserving review",
    "Codex /goal and Claude long-run handoff packets"
  ],
  "expertiseAreasVi": [
    "Outcome contract",
    "Preflight trước phiên chạy dài",
    "Review giữ nguyên hợp đồng",
    "Packet bàn giao cho Codex /goal và Claude long-run"
  ],
  "invocation": {
    "syntax": "/ak:goal-warmup \"<goal>\" [--fast]",
    "arguments": [
      {
        "token": "\"<goal>\"",
        "titleEn": "Goal to prepare",
        "titleVi": "Goal cần chuẩn bị",
        "descEn": "Natural-language long-run outcome, must-have deliverables, exclusions, acceptance signals, constraints, allowed substitutions, and known dependencies. It is treated as input for a handoff packet, not permission to start /goal.",
        "descVi": "Goal chạy dài bằng ngôn ngữ tự nhiên, gồm deliverable bắt buộc, phần loại trừ, tín hiệu chấp nhận, ràng buộc, thay thế được phép và dependency đã biết. Đây là input cho packet bàn giao, không phải quyền tự bắt đầu /goal.",
        "required": true,
        "exampleCommand": "/ak:goal-warmup \"Migrate billing webhooks without payment regressions\""
      }
    ],
    "options": [
      {
        "token": "--fast",
        "titleEn": "Fast check",
        "titleVi": "Kiểm tra nhanh",
        "descEn": "Requests the reduced review path for small local work only. The skill still requires contract approval, planning, readiness checks, final confirmation, and no auto-start.",
        "descVi": "Yêu cầu nhánh review rút gọn chỉ cho việc nhỏ và local. Skill vẫn bắt buộc duyệt contract, lập plan, kiểm tra sẵn sàng, xác nhận cuối và không tự khởi chạy.",
        "exampleCommand": "/ak:goal-warmup \"Clean up stale internal docs links\" --fast"
      }
    ]
  },
  "outputFlags": [
    {
      "flag": "--fast",
      "titleEn": "Fast eligibility path",
      "titleVi": "Nhánh nhanh có điều kiện",
      "descEn": "Skips expensive adversarial review only after eligibility passes and the user accepts reduced assurance.",
      "descVi": "Chỉ bỏ qua review đối kháng tốn kém khi đủ điều kiện và user chấp nhận mức bảo đảm thấp hơn.",
      "exampleCommand": "/ak:goal-warmup \"Prepare the docs-only release checklist\" --fast"
    }
  ],
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
      "name": "ask_user",
      "type": "tool"
    }
  ],
  "guardrails": [
    {
      "thoughtEn": "The goal is clear enough; start planning.",
      "thoughtVi": "Goal có vẻ đủ rõ; bắt đầu plan thôi.",
      "realityEn": "No planning before explicit Outcome Contract approval.",
      "realityVi": "Chưa được plan trước khi Outcome Contract được duyệt rõ.",
      "accent": "red"
    },
    {
      "thoughtEn": "A reviewer found a better outcome; edit the plan.",
      "thoughtVi": "Reviewer tìm thấy outcome tốt hơn; sửa plan luôn.",
      "realityEn": "Outcome-change-request means Decision required, not silent scope edits.",
      "realityVi": "Outcome-change-request nghĩa là cần quyết định, không được âm thầm đổi scope.",
      "accent": "amber"
    },
    {
      "thoughtEn": "Ready means the plan looks good.",
      "thoughtVi": "Ready là plan trông ổn.",
      "realityEn": "Ready requires no blockers and final ask_user confirmation.",
      "realityVi": "Ready cần không còn blocker và user xác nhận tóm tắt cuối.",
      "accent": "blue"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Full warmup",
      "labelVi": "Warmup đầy đủ",
      "command": "/ak:goal-warmup \"Migrate billing webhooks to the new provider without payment regressions\"",
      "whenEn": "Before an expensive multi-phase long run with dependencies, credentials, and regression risk.",
      "whenVi": "Trước một long run nhiều phase tốn kém có dependency, credential và rủi ro regression.",
      "expectedEn": "Interviews to an approved Outcome Contract, plans with a traceability table, classifies review findings before edits, preflights every phase, asks for final confirmation, then emits a Ready/Blocked/Decision handoff without starting execution.",
      "expectedVi": "Phỏng vấn để có Outcome Contract được duyệt, lập plan kèm bảng traceability, phân loại finding trước khi sửa, preflight mọi phase, xin xác nhận cuối rồi xuất handoff Ready/Blocked/Decision mà không chạy execution.",
      "recommended": true
    },
    {
      "labelEn": "Fast local check",
      "labelVi": "Kiểm tra local nhanh",
      "command": "/ak:goal-warmup \"Clean up stale internal docs links\" --fast",
      "whenEn": "When the work appears small, local-only, and low-risk but still needs an outcome lock before a long run.",
      "whenVi": "Khi việc có vẻ nhỏ, chỉ local, ít rủi ro nhưng vẫn cần khóa outcome trước long run.",
      "expectedEn": "Checks --fast eligibility and reduced-assurance acceptance first; if eligible, skips expensive adversarial reviewers while still requiring contract approval, traceability, lightweight consistency check, whole-plan preflight, final confirmation, and no auto-start.",
      "expectedVi": "Kiểm tra eligibility của --fast và việc chấp nhận reduced assurance trước; nếu đủ điều kiện thì bỏ reviewer đối kháng tốn kém nhưng vẫn bắt buộc duyệt contract, traceability, consistency check nhẹ, preflight toàn plan, xác nhận cuối và không auto-start."
    },
    {
      "labelEn": "Blocked readiness",
      "labelVi": "Readiness bị chặn",
      "command": "/ak:goal-warmup \"Prepare a production deploy run that requires staging credentials and release approval\"",
      "whenEn": "Before long-run execution where credentials, approvals, or deployment prerequisites may block readiness.",
      "whenVi": "Trước long-run execution khi credential, approval hoặc prerequisite deploy có thể chặn readiness.",
      "expectedEn": "Records only secret presence or absence, keeps probes non-mutating, puts unresolved prerequisites into the preflight matrix, and returns Blocked with exact unblock actions instead of a misleading Ready packet.",
      "expectedVi": "Chỉ ghi nhận secret có hay không, giữ probe không mutate, đưa prerequisite chưa giải quyết vào preflight matrix và trả Blocked với action gỡ chặn cụ thể thay vì packet Ready sai."
    },
    {
      "labelEn": "Decision required",
      "labelVi": "Cần quyết định",
      "command": "/ak:goal-warmup \"Replace search infrastructure by Friday while preserving typo tolerance and all ranking behavior\"",
      "whenEn": "When the locked outcome may conflict with schedule, feasibility, or review findings and trade-offs must not be silent.",
      "whenVi": "Khi outcome đã khóa có thể xung đột với deadline, tính khả thi hoặc finding review và trade-off không được âm thầm xử lý.",
      "expectedEn": "Treats any outcome-changing trade-off or infeasible locked scope as Decision required, presents options and consequences for the user, and refuses to weaken acceptance signals or edit the contract silently.",
      "expectedVi": "Xem mọi trade-off đổi outcome hoặc locked scope không khả thi là Decision required, trình bày option và consequence cho user, đồng thời từ chối làm yếu acceptance signal hoặc âm thầm sửa contract."
    }
  ],
  "reportOutput": {
    "titleEn": "Goal-warmup result",
    "titleVi": "Kết quả goal-warmup",
    "patternEn": "State, contract status, plan path/session, blocker count, fast-path status, and next action.",
    "patternVi": "Trạng thái, tình trạng contract, path hoặc session của plan, số blocker, trạng thái fast path và bước kế tiếp.",
    "descEn": "The terminal artifact is a handoff packet for a user-started long-run, not an execution run.",
    "descVi": "Artifact cuối là packet bàn giao cho phiên chạy dài do user khởi động, không phải một lượt execution."
  }
};

export default data;

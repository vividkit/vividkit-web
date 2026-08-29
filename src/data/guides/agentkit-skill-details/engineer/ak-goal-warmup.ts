import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-goal-warmup",
  "command": "/ak:goal-warmup",
  "kit": "engineer",
  "header": {
    "titleEn": "Goal Warmup Outcome Lock",
    "titleVi": "Khóa mục tiêu trước khi chạy dài",
    "taglineEn": "Preflight an expensive /goal or autonomous run by interviewing to an approved Outcome Contract, planning inside that contract, reviewing drift risks, and ending Ready, Blocked, or Decision required without auto-starting execution.",
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
      "descEn": "If the goal is repo-relevant, gather just enough evidence to estimate local-only, external-dependency, credential, deployment, approval, or multi-service risk.",
      "descVi": "Nếu goal liên quan repo, thu thập vừa đủ bằng chứng để ước lượng rủi ro local-only, phụ thuộc ngoài, credential, deploy, approval hoặc nhiều service."
    },
    {
      "number": 3,
      "titleEn": "Gate fast path",
      "titleVi": "Chặn hoặc cho fast path",
      "descEn": "If --fast was requested, check eligibility first; refuse fast when the goal needs external deps or higher assurance, then continue the full path.",
      "descVi": "Nếu có --fast, kiểm tra điều kiện trước; từ chối fast khi goal cần phụ thuộc ngoài hoặc mức bảo đảm cao hơn, rồi tiếp tục luồng đầy đủ."
    },
    {
      "number": 4,
      "titleEn": "Interview contract",
      "titleVi": "Phỏng vấn hợp đồng",
      "descEn": "Use advise-style questions or restatement to produce the Outcome Contract: intended result, scope, non-goals, acceptance signals, constraints, substitutions, owner.",
      "descVi": "Dùng câu hỏi kiểu advise hoặc diễn giải lại để tạo Outcome Contract: kết quả mong muốn, phạm vi, ngoài phạm vi, tín hiệu chấp nhận, ràng buộc, thay thế được phép và owner."
    },
    {
      "number": 5,
      "titleEn": "Ask approval",
      "titleVi": "Xin duyệt",
      "descEn": "Do not plan until ask_user returns approve/edit/abort for the contract; free-form “looks good” is insufficient.",
      "descVi": "Không lập kế hoạch cho đến khi ask_user trả approve/edit/abort cho contract; câu “trông ổn” tự do là chưa đủ."
    },
    {
      "number": 6,
      "titleEn": "Plan under lock",
      "titleVi": "Lập plan theo hợp đồng",
      "descEn": "Invoke or emulate ak:plan with the approved contract as a hard constraint and include the required traceability table.",
      "descVi": "Gọi hoặc mô phỏng ak:plan với contract đã duyệt như ràng buộc cứng và có bảng traceability bắt buộc."
    },
    {
      "number": 7,
      "titleEn": "Review drift",
      "titleVi": "Review nguy cơ lệch",
      "descEn": "Classify findings as mitigation-within-contract, preflight-required, blocker, or outcome-change-request before any plan edit.",
      "descVi": "Phân loại finding thành mitigation-within-contract, preflight-required, blocker hoặc outcome-change-request trước khi sửa plan."
    },
    {
      "number": 8,
      "titleEn": "Build preflight matrix",
      "titleVi": "Lập ma trận preflight",
      "descEn": "Inspect every phase and group issues into must-provide, should-decide, or can-defer; prefer unknown + blocking over false Ready.",
      "descVi": "Kiểm tra mọi phase và nhóm vấn đề thành phải có trước, nên quyết trước, hoặc có thể hoãn; ưu tiên unknown + blocking hơn Ready giả."
    },
    {
      "number": 9,
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
    },
    {
      "name": "preflight matrix",
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
      "whenEn": "A long-running goal has external dependencies and high regression risk.",
      "whenVi": "Khi goal chạy dài có phụ thuộc bên ngoài và rủi ro hồi quy cao.",
      "expectedEn": "Produces an approved contract, constrained plan, preflight matrix, and Ready/Blocked/Decision packet without starting execution.",
      "expectedVi": "Tạo contract đã duyệt, plan bị ràng buộc, preflight matrix và packet Ready/Blocked/Decision mà không khởi chạy.",
      "recommended": true
    },
    {
      "labelEn": "Fast request",
      "labelVi": "Yêu cầu nhanh",
      "command": "/ak:goal-warmup \"Clean up stale internal docs links\" --fast",
      "whenEn": "The goal appears local and low-risk, but still needs an outcome lock.",
      "whenVi": "Khi goal có vẻ local, ít rủi ro nhưng vẫn cần khóa outcome.",
      "expectedEn": "Checks fast eligibility; if eligible, skips expensive adversarial review but keeps contract and final confirmation.",
      "expectedVi": "Kiểm tra điều kiện fast; nếu đạt thì bỏ review đối kháng tốn kém nhưng vẫn giữ contract và xác nhận cuối."
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

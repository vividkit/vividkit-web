import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-loop",
  "command": "/ak:loop",
  "kit": "engineer",
  "header": {
    "titleEn": "Autonomous Metric Loop",
    "titleVi": "Vòng tối ưu theo chỉ số",
    "taglineEn": "Run sequential atomic experiments against a mechanical metric, commit before verifying, keep improvements, revert regressions, log loop-results.tsv, and stop when stuck or unsafe.",
    "taglineVi": "Chạy các thử nghiệm nguyên tử theo chỉ số máy đo, commit trước khi verify, giữ cải thiện, revert hồi quy, ghi loop-results.tsv và dừng khi kẹt hoặc không an toàn."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Confirm metric fit",
      "titleVi": "Xác nhận hợp metric",
      "descEn": "Use ak:loop only for a measurable objective where repeated trials can be judged by one numeric Verify output.",
      "descVi": "Chỉ dùng ak:loop cho mục tiêu đo được, nơi các lần thử lặp lại được chấm bằng một số do Verify in ra."
    },
    {
      "number": 2,
      "titleEn": "Parse or ask config",
      "titleVi": "Parse hoặc hỏi cấu hình",
      "descEn": "Collect required Goal, Scope, and Verify plus optional Guard, Iterations, Noise, Min-Delta, and Direction; ask missing fields in one batched ask_user call.",
      "descVi": "Thu Goal, Scope, Verify bắt buộc cùng Guard, Iterations, Noise, Min-Delta và Direction tùy chọn; hỏi phần thiếu trong một lượt ask_user dạng batch."
    },
    {
      "number": 3,
      "titleEn": "Safety-screen Verify",
      "titleVi": "Sàng lọc Verify",
      "descEn": "Before dry-running Verify, refuse destructive or fetch-and-execute commands and warn or re-prompt for outbound writes, embedded credentials, sudo, chmod 777, or unsafe ownership changes.",
      "descVi": "Trước khi dry-run Verify, từ chối lệnh phá hoại hoặc tải-và-chạy; cảnh báo hoặc hỏi lại với outbound write, credential nhúng, sudo, chmod 777 hoặc đổi owner không an toàn."
    },
    {
      "number": 4,
      "titleEn": "Run preconditions",
      "titleVi": "Chạy tiền điều kiện",
      "descEn": "Abort unless the workspace is a clean git repository on a named branch, has no stale loop lock, Scope matches files, Verify prints a number, Guard passes if present, and baseline metric is logged.",
      "descVi": "Dừng nếu workspace không phải git repo sạch trên branch có tên, còn lock loop cũ, Scope không khớp file, Verify không in số, Guard không pass nếu có, hoặc baseline metric chưa được ghi."
    },
    {
      "number": 5,
      "titleEn": "Review loop memory",
      "titleVi": "Đọc bộ nhớ loop",
      "descEn": "Before each iteration, inspect recent git history, the last diff, and loop-results.tsv to learn which targets helped or failed.",
      "descVi": "Trước mỗi vòng, xem lịch sử git gần đây, diff cuối và loop-results.tsv để học mục tiêu nào hiệu quả hoặc thất bại."
    },
    {
      "number": 6,
      "titleEn": "Ideate one change",
      "titleVi": "Nghĩ một thay đổi",
      "descEn": "Choose exactly one atomic experiment, exploiting successful patterns, avoiding repeated failures, and splitting any idea that needs “and”.",
      "descVi": "Chọn đúng một thử nghiệm nguyên tử, tận dụng pattern đã thắng, tránh lặp thất bại, và tách mọi ý tưởng phải dùng chữ “và”."
    },
    {
      "number": 7,
      "titleEn": "Modify within Scope",
      "titleVi": "Sửa trong Scope",
      "descEn": "Edit only files matched by Scope, never modify files referenced by Guard, and keep the change minimal enough to attribute the metric movement.",
      "descVi": "Chỉ sửa file khớp Scope, không sửa file được Guard tham chiếu, và giữ thay đổi đủ nhỏ để quy được chuyển động metric."
    },
    {
      "number": 8,
      "titleEn": "Commit before Verify",
      "titleVi": "Commit trước Verify",
      "descEn": "Commit the atomic change with a loop(iter-N) message before running Verify because git is the loop’s memory and rollback mechanism.",
      "descVi": "Commit thay đổi nguyên tử bằng message loop(iter-N) trước khi chạy Verify vì git là bộ nhớ và cơ chế rollback của loop."
    },
    {
      "number": 9,
      "titleEn": "Verify, guard, decide",
      "titleVi": "Verify, guard, quyết định",
      "descEn": "Run Verify and optional Guard; keep only Direction/Min-Delta improvements that pass Guard, otherwise prefer git revert and treat crashes, no-number output, and timeouts as failures.",
      "descVi": "Chạy Verify và Guard nếu có; chỉ giữ cải thiện đúng Direction/Min-Delta và pass Guard, còn lại ưu tiên git revert và xem crash, không in số hoặc timeout là thất bại."
    },
    {
      "number": 10,
      "titleEn": "Log and stop",
      "titleVi": "Ghi log và dừng",
      "descEn": "Append iter, timestamp, metric, delta, kept, and description to loop-results.tsv, shift strategy after 5 consecutive discards, and stop after the iteration cap, interruption, timeout, or 10 discards.",
      "descVi": "Ghi iter, timestamp, metric, delta, kept và description vào loop-results.tsv, đổi chiến lược sau 5 lần discard liên tiếp, và dừng khi hết vòng, bị ngắt, timeout hoặc 10 lần discard."
    }
  ],
  "hardGate": {
    "type": "critical",
    "titleEn": "Mechanical metric, safe Verify, clean scoped git",
    "titleVi": "Cần metric máy đo, Verify an toàn, git sạch đúng scope",
    "contentEn": "The loop refuses subjective goals, missing mechanical metrics, unsafe Verify commands, dirty/non-git or detached workspaces, stale loop locks, empty Scope matches, changes outside Scope, Guard-file edits, and Verify commands that do not finish quickly with one number.",
    "contentVi": "Loop từ chối mục tiêu chủ quan, thiếu metric máy đo, lệnh Verify không an toàn, workspace không phải git/chưa sạch/detached, lock loop cũ, Scope không khớp file, sửa ngoài Scope, sửa file thuộc Guard và lệnh Verify không hoàn tất nhanh với một số."
  },
  "corePrinciplesEn": [
    "Constraint + mechanical metric + fast verification enables autonomous improvement.",
    "One atomic change per iteration keeps learning interpretable.",
    "Git commits are loop memory; revert preserves history when a trial loses."
  ],
  "corePrinciplesVi": [
    "Ràng buộc + metric máy đo + verify nhanh giúp tối ưu tự động.",
    "Một thay đổi nguyên tử mỗi vòng giúp việc học dễ hiểu.",
    "Git commit là bộ nhớ của loop; revert giữ lịch sử khi thử nghiệm thua."
  ],
  "expertiseAreasEn": [
    "Coverage, lint, performance, and bundle-size optimization",
    "Metric-driven experiment loops",
    "Git-backed keep/discard decisions",
    "Verify-command safety screening",
    "Stuck detection"
  ],
  "expertiseAreasVi": [
    "Tối ưu coverage, lint, hiệu năng và bundle size",
    "Vòng thử nghiệm theo metric",
    "Quyết định keep/discard dựa trên Git",
    "Sàng lọc an toàn lệnh Verify",
    "Phát hiện kẹt"
  ],
  "guardrails": [
    {
      "thoughtEn": "“Make it cleaner” can be optimized by taste.",
      "thoughtVi": "“Làm sạch hơn” có thể tối ưu bằng gu.",
      "realityEn": "Subjective goals belong to ak:cook or interactive work, not ak:loop.",
      "realityVi": "Mục tiêu chủ quan thuộc ak:cook hoặc làm tương tác, không phải ak:loop.",
      "accent": "red"
    },
    {
      "thoughtEn": "Run Verify first, then commit if it passes.",
      "thoughtVi": "Chạy Verify trước, pass rồi commit.",
      "realityEn": "Commit before Verify so the loop has memory and can revert losing trials.",
      "realityVi": "Commit trước Verify để loop có bộ nhớ và revert được thử nghiệm thua.",
      "accent": "blue"
    },
    {
      "thoughtEn": "Guard files failed; edit them.",
      "thoughtVi": "Guard file fail; sửa chúng.",
      "realityEn": "Guard files are read-only for the loop.",
      "realityVi": "File thuộc Guard là read-only với loop.",
      "accent": "amber"
    }
  ],
  "skillStack": [
    {
      "name": "ask_user capability",
      "type": "tool"
    },
    {
      "name": "search_files Scope patterns",
      "type": "tool"
    },
    {
      "name": "Verify shell command",
      "type": "tool"
    },
    {
      "name": "Guard shell command",
      "type": "tool"
    },
    {
      "name": "git commit/revert",
      "type": "tool"
    },
    {
      "name": "loop-results.tsv",
      "type": "tool"
    }
  ],
  "invocation": {
    "syntax": "/ak:loop [Goal/Metric description] or inline config block",
    "arguments": [
      {
        "token": "Goal:",
        "titleEn": "Goal",
        "titleVi": "Mục tiêu",
        "descEn": "Human-readable metric outcome and target to improve. Subjective cleanup goals are rejected; use ak:cook for those.",
        "descVi": "Outcome metric và target cần cải thiện bằng ngôn ngữ rõ ràng. Mục tiêu dọn dẹp cảm tính bị từ chối; hãy dùng ak:cook cho trường hợp đó.",
        "required": true,
        "exampleCommand": "/ak:loop\nGoal: Reduce TypeScript errors in src/api to zero"
      },
      {
        "token": "Scope:",
        "titleEn": "Editable scope",
        "titleVi": "Phạm vi được sửa",
        "descEn": "Glob or search-files patterns for files the loop may edit. The Skill does not widen this scope or edit files owned by the Guard command.",
        "descVi": "Glob hoặc pattern search-files cho các file loop được phép sửa. Skill không mở rộng phạm vi này hoặc sửa file thuộc lệnh Guard.",
        "required": true,
        "exampleCommand": "/ak:loop\nScope: src/api/**/*.ts"
      },
      {
        "token": "Verify:",
        "titleEn": "Metric command",
        "titleVi": "Lệnh đo metric",
        "descEn": "Shell command that exits successfully and prints exactly one numeric metric quickly enough to run every iteration.",
        "descVi": "Lệnh shell thoát thành công và in đúng một metric dạng số đủ nhanh để chạy ở mỗi iteration.",
        "required": true,
        "exampleCommand": "/ak:loop\nVerify: npx tsc --noEmit 2>&1 | grep -c '^src/api/.*error TS' || true"
      }
    ],
    "options": [
      {
        "token": "Guard:",
        "titleEn": "Regression guard",
        "titleVi": "Guard chống hồi quy",
        "descEn": "Optional command that must exit 0 for a trial to be kept. Its files are treated as read-only for the loop.",
        "descVi": "Lệnh tùy chọn phải thoát 0 để trial được giữ. Các file của lệnh này được xem là read-only với loop.",
        "exampleCommand": "/ak:loop\nGuard: npm test"
      },
      {
        "token": "Iterations:",
        "titleEn": "Iteration cap",
        "titleVi": "Giới hạn iteration",
        "descEn": "Maximum trial count; defaults to 10 when omitted.",
        "descVi": "Số trial tối đa; mặc định là 10 nếu bỏ trống.",
        "exampleCommand": "/ak:loop\nIterations: 12"
      },
      {
        "token": "Direction:",
        "titleEn": "Metric direction",
        "titleVi": "Chiều tốt của metric",
        "descEn": "Whether higher or lower metric values are better; defaults to higher.",
        "descVi": "Cho biết giá trị metric cao hơn hay thấp hơn là tốt hơn; mặc định là higher.",
        "exampleCommand": "/ak:loop\nDirection: lower"
      },
      {
        "token": "Noise:",
        "titleEn": "Measurement noise",
        "titleVi": "Độ nhiễu phép đo",
        "descEn": "Measurement treatment: low, medium, or high. Use it to decide repeat and aggregation behavior, not to hide regressions.",
        "descVi": "Cách xử lý phép đo: low, medium hoặc high. Dùng để quyết định lặp và tổng hợp kết quả, không phải để che hồi quy.",
        "exampleCommand": "/ak:loop\nNoise: low"
      },
      {
        "token": "Min-Delta:",
        "titleEn": "Minimum progress",
        "titleVi": "Mức tiến bộ tối thiểu",
        "descEn": "Smallest improvement that counts as progress; defaults to 0.",
        "descVi": "Mức cải thiện nhỏ nhất được tính là tiến bộ; mặc định là 0.",
        "exampleCommand": "/ak:loop\nMin-Delta: 1"
      }
    ]
  },
  "promptExamples": [
    {
      "labelEn": "Coverage loop",
      "labelVi": "Loop coverage",
      "command": "/ak:loop Goal: Increase test coverage in src/utils from ~60% to 80% Scope: src/utils/**/*.ts Verify: npx jest tests/utils --coverage",
      "whenEn": "Use only when a mechanical metric can drive repeated trials.",
      "whenVi": "Chỉ dùng khi có chỉ số máy đo để chạy thử nghiệm lặp.",
      "expectedEn": "Asks for any missing Goal/Scope/Verify fields, then runs atomic git-backed trials, commits before verify, keeps gains, reverts losses, and appends loop-results.tsv.",
      "expectedVi": "Hỏi các field Goal/Scope/Verify còn thiếu, rồi chạy thử nghiệm nguyên tử trên git, commit trước verify, giữ cải thiện, revert hồi quy và ghi loop-results.tsv.",
      "recommended": true
    },
    {
      "labelEn": "Bundle size",
      "labelVi": "Giảm bundle",
      "command": "/ak:loop Goal: Reduce main bundle size below 200KB Scope: src/**/*.ts Direction: lower",
      "whenEn": "Use when lower is better and Verify can print one number in under 30 seconds.",
      "whenVi": "Dùng khi metric càng thấp càng tốt và Verify in một số trong dưới 30 giây.",
      "expectedEn": "Screens the Verify command for unsafe patterns, refuses dirty/non-git trees, then loops until min-delta, iteration cap, or stuck detection.",
      "expectedVi": "Sàng lọc lệnh Verify cho pattern không an toàn, từ chối tree bẩn/không git, rồi lặp đến min-delta, hết iteration hoặc stuck detection."
    },
    {
      "labelEn": "Lint errors to zero",
      "labelVi": "Đưa lint về 0",
      "command": "/ak:loop Goal: Drive ESLint error count to zero in src/api Scope: src/api/**/*.ts Direction: lower Iterations: 20",
      "whenEn": "Use for countable lint/error metrics inside a declared Scope.",
      "whenVi": "Dùng cho metric lint/error đếm được trong Scope đã khai báo.",
      "expectedEn": "Never edits Guard-scoped files; after 10 consecutive discards it stops and reports findings instead of inventing a subjective cleanup.",
      "expectedVi": "Không sửa file thuộc Guard; sau 10 lần discard liên tiếp thì dừng và báo cáo thay vì dọn dẹp theo cảm tính."
    }
  ],
  "reportOutput": {
    "titleEn": "Loop results",
    "titleVi": "Kết quả loop",
    "patternEn": "loop-results.tsv plus final kept/discarded summary, best metric, blockers, and masked logs.",
    "patternVi": "loop-results.tsv kèm tóm tắt keep/discard cuối, metric tốt nhất, blocker và log đã mask.",
    "locationEn": "loop-results.tsv in the working directory.",
    "locationVi": "loop-results.tsv trong working directory.",
    "descEn": "The report must mask secrets and explain why changes were kept or reverted.",
    "descVi": "Báo cáo phải mask secret và giải thích vì sao thay đổi được giữ hoặc revert."
  }
};

export default data;

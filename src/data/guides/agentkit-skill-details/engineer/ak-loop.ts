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
      "titleEn": "Confirm measurable fit",
      "titleVi": "Xác nhận có chỉ số đo",
      "descEn": "Use only when an objective metric can drive repeated trials, such as coverage, bundle size, ESLint errors, or Lighthouse score.",
      "descVi": "Chỉ dùng khi có metric khách quan để dẫn dắt thử nhiều vòng, như coverage, bundle size, lỗi ESLint hoặc Lighthouse score."
    },
    {
      "number": 2,
      "titleEn": "Collect config",
      "titleVi": "Thu cấu hình",
      "descEn": "Parse Goal, Scope, Verify, and optional Guard, Iterations, Noise, Min-Delta, Direction from the user message.",
      "descVi": "Parse Goal, Scope, Verify và Guard, Iterations, Noise, Min-Delta, Direction tùy chọn từ tin nhắn user."
    },
    {
      "number": 3,
      "titleEn": "Batch missing questions",
      "titleVi": "Hỏi thiếu sót một lần",
      "descEn": "If required fields are missing, ask for Goal, Scope, Verify, and optional Guard in one batched ask_user call.",
      "descVi": "Nếu thiếu field bắt buộc, hỏi Goal, Scope, Verify và Guard tùy chọn trong một lượt ask_user dạng batch."
    },
    {
      "number": 4,
      "titleEn": "Safety-screen verify",
      "titleVi": "Sàng lọc lệnh verify",
      "descEn": "Before dry-running Verify, refuse destructive/fetch-and-execute patterns and warn or re-prompt for risky outbound writes, embedded credentials, sudo, chmod 777, or ownership changes.",
      "descVi": "Trước khi chạy thử Verify, từ chối pattern phá hoại hoặc tải-và-chạy, cảnh báo hoặc hỏi lại với outbound write rủi ro, credential nhúng, sudo, chmod 777 hoặc đổi owner."
    },
    {
      "number": 5,
      "titleEn": "Require clean git",
      "titleVi": "Yêu cầu git sạch",
      "descEn": "Start only in a git repository with a clean working tree so each experiment can be committed and reverted safely.",
      "descVi": "Chỉ bắt đầu trong Git repo có working tree sạch để mỗi thử nghiệm có thể commit và revert an toàn."
    },
    {
      "number": 6,
      "titleEn": "Run atomic iteration",
      "titleVi": "Chạy vòng nguyên tử",
      "descEn": "Make one atomic change per iteration: a change describable in one sentence without “and”.",
      "descVi": "Mỗi vòng chỉ làm một thay đổi nguyên tử: mô tả được bằng một câu không cần chữ “và”."
    },
    {
      "number": 7,
      "titleEn": "Commit then verify",
      "titleVi": "Commit rồi verify",
      "descEn": "Commit the change before running Verify because git is the loop memory, then run Verify and optional Guard.",
      "descVi": "Commit thay đổi trước khi chạy Verify vì git là bộ nhớ của loop, rồi chạy Verify và Guard nếu có."
    },
    {
      "number": 8,
      "titleEn": "Keep or revert",
      "titleVi": "Giữ hoặc revert",
      "descEn": "Keep improvements that beat Min-Delta in the configured Direction and pass Guard; use git revert for regressions rather than reset.",
      "descVi": "Giữ cải thiện vượt Min-Delta theo Direction đã đặt và pass Guard; dùng git revert cho hồi quy thay vì reset."
    },
    {
      "number": 9,
      "titleEn": "Log result",
      "titleVi": "Ghi kết quả",
      "descEn": "Append every iteration to loop-results.tsv with iter, timestamp, metric, delta, kept, and description.",
      "descVi": "Ghi mọi vòng vào loop-results.tsv với iter, timestamp, metric, delta, kept và description."
    },
    {
      "number": 10,
      "titleEn": "Detect stuck",
      "titleVi": "Phát hiện kẹt",
      "descEn": "After 5 consecutive discards, shift strategy; after 10 consecutive discards, stop and report findings.",
      "descVi": "Sau 5 lần discard liên tiếp thì đổi chiến lược; sau 10 lần discard liên tiếp thì dừng và báo phát hiện."
    }
  ],
  "hardGate": {
    "type": "critical",
    "titleEn": "Mechanical metric, clean git, safe Verify, scoped files",
    "titleVi": "Cần metric máy đo, git sạch, Verify an toàn, scope rõ",
    "contentEn": "The loop refuses subjective goals, missing mechanical metrics, unsafe Verify commands, dirty/non-git workspaces, changes outside Scope, and modifications to Guard files.",
    "contentVi": "Loop từ chối mục tiêu chủ quan, thiếu metric máy đo, lệnh Verify không an toàn, workspace không phải git hoặc chưa sạch, sửa ngoài Scope và sửa file thuộc Guard."
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
      "name": "ask_user",
      "type": "tool"
    },
    {
      "name": "Verify command",
      "type": "tool"
    },
    {
      "name": "Guard command",
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
  "promptExamples": [
    {
      "labelEn": "Coverage loop",
      "labelVi": "Loop tăng coverage",
      "command": "/ak:loop\nGoal: Increase test coverage in src/utils from ~60% to 80%\nScope: src/utils/**/*.ts, tests/utils/**/*.test.ts\nVerify: npx jest tests/utils --coverage --coverageReporters=json-summary 2>/dev/null | node -e \"const d=require('./coverage-summary.json');console.log(d.total.lines.pct)\"\nGuard: npx tsc --noEmit && npx jest --passWithNoTests\nIterations: 15\nDirection: higher",
      "whenEn": "Coverage is measurable and a scoped test area can be iterated safely.",
      "whenVi": "Khi coverage đo được và phạm vi test có thể lặp an toàn.",
      "expectedEn": "Runs scoped atomic iterations, keeping only coverage-improving changes that pass Guard.",
      "expectedVi": "Chạy các vòng nguyên tử trong scope và chỉ giữ thay đổi tăng coverage đồng thời pass Guard.",
      "recommended": true
    },
    {
      "labelEn": "Bundle-size loop",
      "labelVi": "Loop giảm bundle",
      "command": "/ak:loop\nGoal: Reduce main bundle size below 200KB\nScope: src/**/*.ts, src/**/*.tsx\nVerify: npx vite build 2>/dev/null | grep \"dist/index\" | awk '{print $2}' | sed 's/kB//'\nGuard: npx tsc --noEmit\nDirection: lower\nMin-Delta: 0.5",
      "whenEn": "Lower numeric output is better and the build command can finish quickly enough.",
      "whenVi": "Khi số thấp hơn là tốt hơn và lệnh build đủ nhanh để lặp.",
      "expectedEn": "Uses Direction lower and Min-Delta to keep only meaningful bundle reductions.",
      "expectedVi": "Dùng Direction lower và Min-Delta để chỉ giữ giảm bundle có ý nghĩa."
    },
    {
      "labelEn": "ESLint error loop",
      "labelVi": "Loop giảm lỗi ESLint",
      "command": "/ak:loop\nGoal: Drive ESLint error count to zero in src/api\nScope: src/api/**/*.ts\nVerify: npx eslint src/api --format=json 2>/dev/null | node -e \"const r=require('/dev/stdin');console.log(r.reduce((a,f)=>a+f.errorCount,0))\" || echo 999\nDirection: lower\nIterations: 20",
      "whenEn": "The objective is a count of lint errors in a bounded directory.",
      "whenVi": "Khi mục tiêu là số lỗi lint trong một thư mục giới hạn.",
      "expectedEn": "Iterates until the metric improves, hits the iteration cap, or stuck detection stops the run.",
      "expectedVi": "Lặp cho đến khi metric cải thiện, chạm giới hạn vòng hoặc stuck detection dừng run."
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

import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-watzup",
  "command": "/ak:watzup",
  "kit": "marketer",
  "header": {
    "titleEn": "/ak:watzup",
    "titleVi": "/ak:watzup",
    "taglineEn": "Short evidence-backed handoff reports from branches, worktrees, unfinished plans, roadmap docs, and priority-ranked next steps.",
    "taglineVi": "Báo cáo bàn giao ngắn, có bằng chứng từ branch, worktree, plan chưa xong, roadmap và next step được xếp ưu tiên."
  },
  "hardGate": {
    "type": "warning",
    "titleEn": "Read-only status by default",
    "titleVi": "Mặc định chỉ đọc trạng thái",
    "contentEn": "This skill reports status only. It does not implement, edit, commit, checkout, merge, push, fetch, or change branches unless the user explicitly asks for fresh remote refs.",
    "contentVi": "Skill này chỉ báo cáo trạng thái. Không implement, edit, commit, checkout, merge, push, fetch hoặc đổi branch, trừ khi người dùng yêu cầu refresh remote refs rõ ràng."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Run scanner",
      "titleVi": "Chạy scanner",
      "descEn": "Start at project root with node scripts/watzup-scan.cjs --json; add --fetch only when the user asked to refresh remotes. The scanner supports --redact-paths to replace absolute paths with stable labels; it does not redact branch names, commit subjects, plan titles, or status text.",
      "descVi": "Bắt đầu ở project root bằng node scripts/watzup-scan.cjs --json; chỉ thêm --fetch khi người dùng yêu cầu refresh remote. Scanner hỗ trợ --redact-paths để thay path tuyệt đối bằng nhãn ổn định; không che branch name, commit subject, plan title hay dòng status.",
    },
    {
      "number": 2,
      "titleEn": "Read state",
      "titleVi": "Đọc trạng thái",
      "descEn": "Use scanner output for local and remote refs, registered worktrees, dirty state, detached HEAD, unfinished plans, and active roadmap milestones.",
      "descVi": "Dùng output scanner để đọc ref local/remote, worktree đã đăng ký, dirty state, detached HEAD, plan chưa xong và milestone roadmap đang active."
    },
    {
      "number": 3,
      "titleEn": "Score next steps",
      "titleVi": "Chấm điểm bước tiếp",
      "descEn": "Rank nextSteps by status, current workspace alignment, provenance, and momentum; hygiene issues always rank first.",
      "descVi": "Xếp hạng nextSteps theo status, độ khớp workspace hiện tại, nguồn dữ liệu và đà tiến độ; vấn đề vệ sinh repo luôn lên đầu."
    },
    {
      "number": 4,
      "titleEn": "Summarize work",
      "titleVi": "Tóm tắt việc",
      "descEn": "Keep only high-signal recent branches, worktrees, plan progress, checkbox counts, and roadmap items.",
      "descVi": "Chỉ giữ branch, worktree, tiến độ plan, số checkbox và roadmap item có tín hiệu cao."
    },
    {
      "number": 5,
      "titleEn": "Fallback carefully",
      "titleVi": "Fallback cẩn thận",
      "descEn": "If the scanner fails, say it failed, include the error, and use only the documented minimal read-only fallback commands.",
      "descVi": "Nếu scanner lỗi, nói rõ đã lỗi, kèm error, và chỉ dùng các lệnh fallback read-only tối thiểu đã nêu."
    },
    {
      "number": 6,
      "titleEn": "Report",
      "titleVi": "Báo cáo",
      "descEn": "Return Current State, Recent Work, In-Flight Plans, Roadmaps, 5–6 prioritized Next Steps, and Warnings.",
      "descVi": "Trả Current State, Recent Work, In-Flight Plans, Roadmaps, 5–6 Next Steps ưu tiên và Warnings."
    }
  ],
  "corePrinciplesEn": [
    "Evidence first: scanner output grounds the handoff.",
    "Priority ranking favors current workspace alignment, in-progress work, provenance, and useful momentum.",
    "Keep handoffs short; report high-signal state and concrete next actions.",
    "Never pretend fallback equals a completed full scan."
  ],
  "corePrinciplesVi": [
    "Bằng chứng trước: output scanner là nền cho báo cáo bàn giao.",
    "Xếp ưu tiên dựa trên workspace hiện tại, việc đang chạy, nguồn dữ liệu và momentum hữu ích.",
    "Bàn giao phải ngắn; chỉ báo trạng thái đáng chú ý và hành động tiếp theo cụ thể.",
    "Không giả vờ fallback là full scan đã hoàn tất."
  ],
  "skillStack": [
    {
      "name": "watzup-scan.cjs",
      "type": "tool"
    },
    {
      "name": "git status",
      "type": "tool"
    },
    {
      "name": "git worktree list",
      "type": "tool"
    },
    {
      "name": "roadmap docs",
      "type": "tool"
    }
  ],
  "invocation": {
    "syntax": "/ak:watzup [--fetch]",
  },
  "promptExamples": [
    {
      "labelEn": "Session handoff",
      "labelVi": "Bàn giao phiên",
      "command": "/ak:watzup",
      "whenEn": "Use at the end of a session or when entering a fresh worktree.",
      "whenVi": "Dùng cuối phiên hoặc khi vừa vào worktree mới.",
      "expectedEn": "Brief report with current state, in-flight plans, next steps, warnings, and confidence notes.",
      "expectedVi": "Báo cáo ngắn gồm trạng thái hiện tại, plan đang chạy, bước tiếp theo và cảnh báo.",
      "recommended": true
    },
    {
      "labelEn": "Fresh remotes",
      "labelVi": "Refresh remote",
      "command": "/ak:watzup refresh remotes before reporting",
      "whenEn": "Use only when the user explicitly requests remote refresh before status.",
      "whenVi": "Chỉ dùng khi người dùng yêu cầu refresh remote trước khi báo trạng thái.",
      "expectedEn": "Scanner path may include fetch, then reports stale-ref caveats and branch-specific next steps if any.",
      "expectedVi": "Scanner có thể kèm fetch rồi báo các lưu ý stale-ref nếu có."
    }
  ],
  "reportOutput": {
    "titleEn": "Handoff report",
    "titleVi": "Báo cáo bàn giao",
    "patternEn": "Current State → Recent Work → In-Flight Plans → Roadmaps → Next Steps → Warnings",
    "patternVi": "Current State → Recent Work → In-Flight Plans → Roadmaps → Next Steps → Warnings",
    "locationEn": "Response output",
    "locationVi": "Nội dung phản hồi",
    "descEn": "Five to six next actions with one-line rationale, plus branch/worktree/plan evidence.",
    "descVi": "Năm đến sáu hành động tiếp theo kèm rationale một dòng và bằng chứng branch/worktree/plan."
  }
};

export default data;

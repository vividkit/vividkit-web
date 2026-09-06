import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-review-pr",
  "command": "/ak:review-pr",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:review-pr — GitHub PR review",
    "titleVi": "/ak:review-pr — Rà soát PR GitHub",
    "taglineEn": "Review one or more GitHub PRs for correctness, security, breaking changes, code quality, project rules, tests, and AI-slop, with optional fix, reply, merge, advice, ultra, and REST fallback paths.",
    "taglineVi": "Review một hoặc nhiều PR GitHub về đúng sai, bảo mật, breaking change, chất lượng code, quy tắc dự án, test và AI-slop, có tùy chọn fix, reply, merge, advice, ultra và fallback REST."
  },
  "hardGate": {
    "type": "critical",
    "titleEn": "Merge only ready PRs",
    "titleVi": "Chỉ merge PR đã sẵn sàng",
    "contentEn": "`--merge` is allowed only when verdict is Approve, no fix-loop blocker remains, PR is open and mergeable, no external changes-requested review exists, and CI is passing or pending.",
    "contentVi": "`--merge` chỉ được dùng khi verdict là Approve, không còn blocker từ fix loop, PR đang open và mergeable, không có review yêu cầu sửa từ người khác, và CI đang pass hoặc pending."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Parse PR refs",
      "titleVi": "Tách danh sách PR",
      "descEn": "Strip mode flags, split bare numbers, #numbers, URLs, spaces, or commas into sequential PR_REFS.",
      "descVi": "Loại bỏ flag mode rồi tách số PR, #number, URL, khoảng trắng hoặc dấu phẩy thành danh sách PR_REFS chạy tuần tự."
    },
    {
      "number": 2,
      "titleEn": "Probe GitHub API",
      "titleVi": "Kiểm tra API GitHub",
      "descEn": "Source gh-api helpers, detect GraphQL blockage, and fall back to REST for metadata, diff, files, checks, reviews, and comments.",
      "descVi": "Nạp helper gh-api, phát hiện GraphQL bị chặn và fallback sang REST cho metadata, diff, file, check, review và comment."
    },
    {
      "number": 3,
      "titleEn": "Resolve context",
      "titleVi": "Xác định ngữ cảnh",
      "descEn": "For each PR, resolve writing language, validate PR body contract, read metadata, changed files, diff, and CI status.",
      "descVi": "Với từng PR, xác định ngôn ngữ viết, kiểm tra contract body PR, đọc metadata, file đổi, diff và trạng thái CI."
    },
    {
      "number": 4,
      "titleEn": "Review thoroughly",
      "titleVi": "Review kỹ",
      "descEn": "Read changed files in context and check correctness, security, breaking changes, project-specific compliance, tests, and anti-slop signals.",
      "descVi": "Đọc file thay đổi trong ngữ cảnh và kiểm tra logic, bảo mật, breaking change, quy tắc riêng của dự án, test và dấu hiệu anti-slop."
    },
    {
      "number": 5,
      "titleEn": "Summarize verdict",
      "titleVi": "Kết luận review",
      "descEn": "Return summary, risk level, severity-grouped findings, and verdict: Approve, Request changes, or Comment.",
      "descVi": "Trả summary, mức rủi ro, findings theo severity và verdict: Approve, Request changes hoặc Comment."
    },
    {
      "number": 6,
      "titleEn": "Run optional loops",
      "titleVi": "Chạy vòng tùy chọn",
      "descEn": "If requested, run --ultra initial verifier, --fix through ak:fix plus commit/push, --reply via adaptive review, and --advice checkpoints.",
      "descVi": "Nếu được yêu cầu, chạy --ultra cho review ban đầu, --fix qua ak:fix rồi commit/push, --reply bằng review helper thích ứng và các checkpoint --advice."
    },
    {
      "number": 7,
      "titleEn": "Merge and watch",
      "titleVi": "Merge và theo dõi",
      "descEn": "When `--merge` passes readiness, activate ak:git merge-pr and wait for target-branch CI green, blocker, or exhausted fixes before moving on.",
      "descVi": "Khi `--merge` qua cổng sẵn sàng, kích hoạt ak:git merge-pr và chờ CI nhánh đích xanh, blocker hoặc hết lượt sửa trước khi sang PR tiếp theo."
    },
    {
      "number": 8,
      "titleEn": "Report aggregate",
      "titleVi": "Báo cáo tổng hợp",
      "descEn": "After all PRs, output a per-PR table, environment mode, advisory summary, blockers, and unresolved questions.",
      "descVi": "Sau mọi PR, xuất bảng từng PR, chế độ môi trường, tóm tắt advisory, blocker và câu hỏi còn mở."
    }
  ],
  "corePrinciplesEn": [
    "Each PR completes end-to-end before the next PR starts",
    "Review severity is evidence-based: Critical, Important, Suggestion",
    "AI-slop is about maintainability damage, not accusing the author",
    "Fix, reply, and merge flags compose but never bypass gates"
  ],
  "corePrinciplesVi": [
    "Mỗi PR phải hoàn tất đầu-cuối trước khi sang PR tiếp theo",
    "Severity review dựa trên bằng chứng: Critical, Important, Suggestion",
    "AI-slop nói về hại bảo trì, không buộc tội tác giả",
    "Các flag fix, reply và merge có thể kết hợp nhưng không vượt qua cổng an toàn"
  ],
  "workflowModes": [
    {
      "flag": "default",
      "modeEn": "Review-only",
      "modeVi": "Chỉ review",
      "research": "Metadata, body, diff, files, checks",
      "redTeam": "Security findings included",
      "validation": "Local findings only"
    },
    {
      "flag": "--fix",
      "modeEn": "Fix loop",
      "modeVi": "Vòng sửa lỗi",
      "research": "Re-review after ak:fix",
      "redTeam": "Fixes Critical/Important first",
      "validation": "Commits and pushes through ak:git cp"
    },
    {
      "flag": "--reply",
      "modeEn": "Post review",
      "modeVi": "Đăng review",
      "research": "Same review body",
      "redTeam": "Same findings",
      "validation": "Uses adaptive GitHub review helper"
    },
    {
      "flag": "--merge",
      "modeEn": "Merge ready PR",
      "modeVi": "Merge PR sẵn sàng",
      "research": "Readiness metadata and checks",
      "redTeam": "No blocker findings",
      "validation": "Delegates to ak:git merge-pr"
    },
    {
      "flag": "--advice",
      "modeEn": "Advisory supervision",
      "modeVi": "Giám sát cố vấn",
      "research": "Kongming checkpoints",
      "redTeam": "Risk sanity checks",
      "validation": "Does not override gates"
    },
    {
      "flag": "--ultra",
      "modeEn": "Best-of-5 initial review",
      "modeVi": "Review ban đầu best-of-5",
      "research": "Five candidate reviews plus verifier",
      "redTeam": "Security checked by candidates",
      "validation": "Deduplicated validated findings"
    }
  ],
  "invocation": {
    "syntax": "/ak:review-pr <PR number or URL> [<PR number or URL> ...] [--fix] [--reply] [--merge] [--advice] [--ultra]",
    "arguments": [
      {
        "token": "<PR number or URL>",
        "titleEn": "PR reference",
        "titleVi": "Tham chiếu PR",
        "descEn": "GitHub pull request to review. Use a bare number, #number, or full PR URL; repeat or comma-separate refs to process multiple PRs sequentially.",
        "descVi": "Pull request GitHub cần review. Dùng số thuần, #số hoặc URL PR đầy đủ; lặp lại hoặc phân tách bằng dấu phẩy để xử lý nhiều PR tuần tự.",
        "required": true,
        "exampleCommand": "/ak:review-pr 482"
      }
    ],
    "options": [
      {
        "token": "--fix",
        "titleEn": "Fix findings",
        "titleVi": "Sửa finding",
        "descEn": "Authorizes the fix loop: repair actionable findings, verify, commit, push, then re-review. It must not include unrelated changes or bypass failed verification.",
        "descVi": "Cho phép vòng sửa: sửa finding có thể hành động, xác minh, commit, push rồi review lại. Không được đưa thay đổi không liên quan vào hoặc bỏ qua xác minh thất bại.",
        "exampleCommand": "/ak:review-pr 482 --fix"
      },
      {
        "token": "--reply",
        "titleEn": "Post review",
        "titleVi": "Đăng review",
        "descEn": "Posts the final review result to GitHub as an approve, request-changes, or comment review. It does not deduplicate earlier replies.",
        "descVi": "Đăng kết quả review cuối lên GitHub dưới dạng approve, request-changes hoặc comment review. Không khử trùng lặp các reply trước đó.",
        "exampleCommand": "/ak:review-pr 482 --reply"
      },
      {
        "token": "--merge",
        "titleEn": "Merge ready PR",
        "titleVi": "Merge PR sẵn sàng",
        "descEn": "Runs the merge stage after review, fix, and reply stages only when readiness gates pass, then watches target-branch CI. It never forces red checks, conflicts, or branch protection.",
        "descVi": "Chạy giai đoạn merge sau review, sửa và reply chỉ khi các cổng sẵn sàng đạt, rồi theo dõi CI nhánh đích. Không ép qua check đỏ, conflict hoặc branch protection.",
        "exampleCommand": "/ak:review-pr 482 --fix --reply --merge"
      },
      {
        "token": "--advice",
        "titleEn": "Advisory supervision",
        "titleVi": "Giám sát cố vấn",
        "descEn": "Adds kongming checkpoints for verdict, fix scope, review body, merge risk, and CI-green follow-up. Advice cannot override the review or merge gates.",
        "descVi": "Thêm checkpoint kongming cho verdict, phạm vi sửa, body review, rủi ro merge và bước sau CI xanh. Lời khuyên không thể ghi đè cổng review hoặc merge.",
        "exampleCommand": "/ak:review-pr 482 --advice"
      },
      {
        "token": "--ultra",
        "titleEn": "Best-of-five review",
        "titleVi": "Review best-of-five",
        "descEn": "Runs only the initial review through five read-only candidates and an evidence-checking verifier; later fix-loop re-reviews remain single-pass.",
        "descVi": "Chỉ chạy review ban đầu qua năm candidate chỉ đọc và verifier kiểm chứng bằng chứng; các lượt review lại trong fix loop vẫn là single-pass.",
        "exampleCommand": "/ak:review-pr 482 --ultra"
      }
    ]
  },
  "outputFlags": [
    {
      "flag": "--fix",
      "titleEn": "Fix loop",
      "titleVi": "Vòng sửa",
      "descEn": "Fixes actionable Critical/Important findings through ak:fix, then commits and re-reviews.",
      "descVi": "Sửa các finding Critical/Important có thể hành động qua ak:fix, rồi commit và review lại.",
      "exampleCommand": "/ak:review-pr 123 --fix"
    },
    {
      "flag": "--reply",
      "titleEn": "Post to GitHub",
      "titleVi": "Đăng lên GitHub",
      "descEn": "Posts the final review body through the adaptive GitHub review helper.",
      "descVi": "Đăng body review cuối cùng qua helper GitHub thích ứng.",
      "exampleCommand": "/ak:review-pr 123 --reply"
    },
    {
      "flag": "--merge",
      "titleEn": "Merge when ready",
      "titleVi": "Merge khi đủ điều kiện",
      "descEn": "Runs the merge stage only after all readiness gates pass.",
      "descVi": "Chỉ chạy bước merge sau khi tất cả cổng sẵn sàng pass.",
      "exampleCommand": "/ak:review-pr 123 --merge"
    },
    {
      "flag": "--advice",
      "titleEn": "Advisory checkpoints",
      "titleVi": "Checkpoint cố vấn",
      "descEn": "Adds kongming supervision at documented review, fix, reply, merge, and CI-green checkpoints.",
      "descVi": "Thêm giám sát kongming tại các checkpoint review, fix, reply, merge và CI xanh đã ghi.",
      "exampleCommand": "/ak:review-pr 123 --advice"
    },
    {
      "flag": "--ultra",
      "titleEn": "Verifier review",
      "titleVi": "Review có verifier",
      "descEn": "Runs the initial review as five candidate passes plus a verifier.",
      "descVi": "Chạy review ban đầu bằng năm lượt ứng viên và một verifier.",
      "exampleCommand": "/ak:review-pr 123 --ultra"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Review a PR locally",
      "labelVi": "Review PR cục bộ",
      "command": "/ak:review-pr 123",
      "whenEn": "Use when you need a thorough PR review by number or URL without editing, posting, or merging.",
      "whenVi": "Dùng khi cần review kỹ một PR bằng số hoặc URL mà không sửa, đăng hay merge.",
      "expectedEn": "The skill resolves language and PR context, validates the PR body, reads metadata, diff, changed files, checks, then returns summary, risk, findings by severity, and verdict.",
      "expectedVi": "Skill xác định ngôn ngữ và ngữ cảnh PR, kiểm tra body PR, đọc metadata, diff, file đổi, checks, rồi trả summary, rủi ro, findings theo severity và verdict.",
      "recommended": true
    },
    {
      "labelEn": "Fix findings and post",
      "labelVi": "Sửa finding rồi đăng",
      "command": "/ak:review-pr 123 --fix --reply",
      "whenEn": "Use when you are allowed to remediate actionable review findings and post the final review to GitHub.",
      "whenVi": "Dùng khi được phép sửa các finding review có thể hành động và đăng review cuối lên GitHub.",
      "expectedEn": "After review, actionable Critical/Important findings go through ak:fix, verified fixes are committed and pushed with ak:git cp, then only the final re-review is posted or printed locally on fallback.",
      "expectedVi": "Sau review, các finding Critical/Important có thể hành động đi qua ak:fix, bản sửa đã verify được commit và push bằng ak:git cp, rồi chỉ re-review cuối được đăng hoặc in cục bộ khi fallback."
    },
    {
      "labelEn": "Review and merge multiple PRs",
      "labelVi": "Review và merge nhiều PR",
      "command": "/ak:review-pr 123 456 --reply --merge",
      "whenEn": "Use when several PR refs should be processed sequentially with a posted review and merge attempt for each ready PR.",
      "whenVi": "Dùng khi nhiều PR ref cần được xử lý tuần tự, đăng review và thử merge cho từng PR đã sẵn sàng.",
      "expectedEn": "Each PR completes its full review, reply, merge-readiness gate, ak:git merge-pr handoff, and target-branch CI watch before the next PR starts; final output includes the per-PR table.",
      "expectedVi": "Mỗi PR hoàn tất review, reply, cổng sẵn sàng merge, bàn giao ak:git merge-pr và theo dõi CI nhánh đích trước khi sang PR tiếp theo; đầu ra cuối có bảng từng PR."
    },
    {
      "labelEn": "Ultra review with advice",
      "labelVi": "Review ultra có cố vấn",
      "command": "/ak:review-pr 789 --ultra --advice",
      "whenEn": "Use for a higher-assurance review where the initial pass should use five read-only candidates plus a verifier and kongming checkpoints.",
      "whenVi": "Dùng cho review cần độ tin cậy cao hơn, khi lượt đầu cần năm candidate chỉ đọc cộng verifier và các checkpoint kongming.",
      "expectedEn": "The initial review is built from an evidence-validated union of five candidate reviews, then advisory checkpoints can sanity-check verdicts, fix scope, reply body, merge risk, and CI-green follow-up.",
      "expectedVi": "Review ban đầu được tạo từ hợp tuyển năm candidate đã được verifier kiểm chứng bằng evidence, rồi các checkpoint cố vấn có thể kiểm tra verdict, phạm vi sửa, body reply, rủi ro merge và bước sau CI xanh."
    }
  ],
  "reportOutput": {
    "titleEn": "PR review output",
    "titleVi": "Đầu ra review PR",
    "patternEn": "Chat review plus optional GitHub review/comment; final per-PR table for multi-PR runs",
    "patternVi": "Review trong chat và tùy chọn review/comment trên GitHub; bảng từng PR ở cuối cho lượt nhiều PR",
    "descEn": "Includes summary, risk level, severity-grouped findings, verdict, environment fallback, merge or CI state, and unresolved questions.",
    "descVi": "Bao gồm summary, mức rủi ro, finding theo severity, verdict, fallback môi trường, trạng thái merge hoặc CI và câu hỏi còn mở."
  }
};

export default data;

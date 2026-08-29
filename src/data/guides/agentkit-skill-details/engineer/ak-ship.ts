import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-ship",
  "command": "/ak:ship",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:ship — Unified Ship Pipeline",
    "titleVi": "/ak:ship — Quy trình ship hợp nhất",
    "taglineEn": "Takes a completed feature branch through target detection, issue linking, merge, tests, review, versioning, changelog, journal/docs, commit, push, PR creation, optional reviewed merge, and opt-in social publishing.",
    "taglineVi": "Đưa một nhánh tính năng đã hoàn tất qua nhận diện đích, liên kết issue, merge, test, review, tăng version, changelog, journal/docs, commit, push, tạo PR, tùy chọn merge đã review và đăng social khi người dùng bật rõ ràng."
  },
  "hardGate": {
    "type": "critical",
    "titleEn": "Fail closed on ship blockers",
    "titleVi": "Gặp chặn thì dừng an toàn",
    "contentEn": "Abort or ask on target branch, unresolved conflicts, failing tests, critical review issues, major/minor version bumps, unknown modes or flags, downstream merge/CI uncertainty, private-repo social posting without explicit private opt-in, and any need to bypass branch protection or force-push.",
    "contentVi": "Phải dừng hoặc hỏi khi đang ở nhánh đích, conflict không tự xử lý được, test lỗi, review có lỗi nghiêm trọng, cần tăng major/minor, mode/cờ không rõ, trạng thái merge/CI hạ nguồn chưa chắc, repo private chưa có xác nhận đăng riêng, hoặc bất kỳ việc nào đòi bỏ qua branch protection hay force-push."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Detect mode",
      "titleVi": "Nhận diện mode",
      "descEn": "Normalize official/stable/main or beta/dev/next, let --both supersede positional mode, and ask instead of guessing on unknown tokens.",
      "descVi": "Chuẩn hóa official/stable/main hoặc beta/dev/next, để --both ưu tiên hơn mode vị trí, và hỏi thay vì đoán khi token không rõ."
    },
    {
      "number": 2,
      "titleEn": "Pre-flight branch",
      "titleVi": "Kiểm tra nhánh",
      "descEn": "Confirm the current branch is not already the target, inspect status and diff, and include uncommitted work in the shipping scope.",
      "descVi": "Xác nhận nhánh hiện tại không phải nhánh đích, xem trạng thái và diff, rồi đưa cả thay đổi chưa commit vào phạm vi ship."
    },
    {
      "number": 3,
      "titleEn": "Link issues",
      "titleVi": "Liên kết issue",
      "descEn": "Find or create related GitHub issues in a single batch and carry them into the PR body contract.",
      "descVi": "Tìm hoặc tạo issue GitHub liên quan bằng một lượt gọn, rồi đưa chúng vào hợp đồng nội dung PR."
    },
    {
      "number": 4,
      "titleEn": "Merge target",
      "titleVi": "Merge nhánh đích",
      "descEn": "Fetch and merge origin/<target>; stop with conflicts instead of hiding or force-resolving unrelated work.",
      "descVi": "Fetch rồi merge origin/<nhánh-đích>; dừng và báo conflict thay vì che giấu hoặc ép xử lý phần việc không liên quan."
    },
    {
      "number": 5,
      "titleEn": "Test and review",
      "titleVi": "Test và review",
      "descEn": "Auto-detect the runner, delegate tests and two-pass review, then stop on failures or critical findings unless the documented skip flag applies.",
      "descVi": "Tự nhận diện test runner, giao test và review hai lượt, rồi dừng khi có lỗi hoặc phát hiện nghiêm trọng trừ khi cờ bỏ qua đã được nêu rõ."
    },
    {
      "number": 6,
      "titleEn": "Version evidence",
      "titleVi": "Cập nhật bằng chứng",
      "descEn": "Auto-detect version and changelog files, bump patch automatically, and ask only for major/minor version changes.",
      "descVi": "Tự tìm file version và changelog, tự tăng patch, và chỉ hỏi khi cần tăng major/minor."
    },
    {
      "number": 7,
      "titleEn": "Journal and docs",
      "titleVi": "Journal và tài liệu",
      "descEn": "Run journal and official-mode docs updates in the background unless --skip-journal, journal.auto=false, beta mode, or --skip-docs disables them.",
      "descVi": "Chạy journal và cập nhật tài liệu cho official mode ở nền, trừ khi --skip-journal, journal.auto=false, beta mode hoặc --skip-docs đã tắt bước đó."
    },
    {
      "number": 8,
      "titleEn": "Commit, push, PR",
      "titleVi": "Commit, push, PR",
      "descEn": "Create the conventional commit, push the current branch normally, and create a PR with honest evidence sections and linked issues.",
      "descVi": "Tạo commit theo conventional commit, push nhánh hiện tại theo cách thường, rồi tạo PR có các mục bằng chứng trung thực và issue liên kết."
    },
    {
      "number": 9,
      "titleEn": "Optional landing",
      "titleVi": "Hoàn tất tùy chọn",
      "descEn": "If --merge is present, hand the PR to ak:review-pr --fix --reply --merge; if --social is present, publish only after green gates and required opt-ins.",
      "descVi": "Nếu có --merge, giao PR cho ak:review-pr --fix --reply --merge; nếu có --social, chỉ đăng sau khi các cổng xanh và các xác nhận bắt buộc đã đủ."
    }
  ],
  "corePrinciplesEn": [
    "Auto-detect project conventions instead of asking early",
    "Never skip tests unless the user passed --skip-tests",
    "Regular push only; never force-push or bypass branch protection",
    "Prefer honest Not run/Unavailable evidence over invented PR narrative"
  ],
  "corePrinciplesVi": [
    "Tự nhận diện quy ước dự án thay vì hỏi sớm",
    "Không bỏ test trừ khi người dùng truyền --skip-tests",
    "Chỉ push bình thường; không force-push hoặc vượt branch protection",
    "Ghi trung thực Not run/Unavailable thay vì bịa câu chuyện trong PR"
  ],
  "expertiseAreasEn": [
    "PR shipping",
    "mode detection",
    "release notes",
    "reviewed merge",
    "build-in-public publishing"
  ],
  "expertiseAreasVi": [
    "ship PR",
    "nhận diện mode",
    "ghi chú phát hành",
    "merge có review",
    "đăng build-in-public"
  ],
  "promptExamples": [
    {
      "labelEn": "Auto-detect ship",
      "labelVi": "Ship tự nhận diện",
      "command": "/ak:ship",
      "whenEn": "The branch is done and the skill should infer official or beta mode.",
      "whenVi": "Nhánh đã xong và skill cần tự suy ra official hay beta.",
      "expectedEn": "Runs the full ship-to-PR pipeline and returns the PR URL or exact blocker.",
      "expectedVi": "Chạy toàn bộ luồng ship đến PR và trả URL PR hoặc điểm chặn cụ thể.",
      "recommended": true
    },
    {
      "labelEn": "Beta supervised merge",
      "labelVi": "Beta có cố vấn và merge",
      "command": "/ak:ship beta --advice --merge",
      "whenEn": "Shipping toward a development branch with Kongming advice and downstream PR landing.",
      "whenVi": "Ship về nhánh phát triển với cố vấn Kongming và merge PR hạ nguồn.",
      "expectedEn": "Performs advice checkpoints, creates the beta PR, then delegates reviewed merge readiness.",
      "expectedVi": "Chạy các điểm cố vấn, tạo PR beta, rồi giao bước sẵn sàng merge có review."
    },
    {
      "labelEn": "Dual target",
      "labelVi": "Hai đích",
      "command": "/ak:ship --both --merge",
      "whenEn": "A change needs beta first and a gated stable promotion after green beta.",
      "whenVi": "Thay đổi cần đi beta trước rồi mới promote stable sau khi beta xanh.",
      "expectedEn": "Runs the beta stage, gates the stable stage, and refuses unrelated promotion work.",
      "expectedVi": "Chạy chặng beta, đặt cổng cho chặng stable, và từ chối phần promote kéo theo việc không liên quan."
    },
    {
      "labelEn": "Social dry run",
      "labelVi": "Nháp social",
      "command": "/ak:ship official --social",
      "whenEn": "You want build-in-public copy rendered after PR creation without posting APIs.",
      "whenVi": "Muốn dựng nội dung build-in-public sau khi tạo PR nhưng chưa gọi API đăng bài.",
      "expectedEn": "Creates the ship PR and renders social posts in dry-run mode.",
      "expectedVi": "Tạo PR ship và hiển thị bài social ở chế độ dry-run."
    }
  ],
  "outputFlags": [
    {
      "flag": "--both",
      "titleEn": "Dual target",
      "titleVi": "Hai đích",
      "descEn": "Ship beta first, then a gated stable stage; supersedes positional mode.",
      "descVi": "Ship beta trước, sau đó đến chặng stable có cổng; ưu tiên hơn mode vị trí.",
      "exampleCommand": "/ak:ship --both"
    },
    {
      "flag": "--advice",
      "titleEn": "Kongming advice",
      "titleVi": "Cố vấn Kongming",
      "descEn": "Adds advisory-only checkpoints to the local ship-to-PR path.",
      "descVi": "Thêm các điểm cố vấn chỉ đưa lời khuyên cho luồng ship đến PR.",
      "exampleCommand": "/ak:ship beta --advice"
    },
    {
      "flag": "--merge",
      "titleEn": "Reviewed merge",
      "titleVi": "Merge có review",
      "descEn": "After PR creation, delegates to ak:review-pr with fix, reply, merge, and CI convergence.",
      "descVi": "Sau khi tạo PR, giao cho ak:review-pr xử lý fix, reply, merge và CI xanh.",
      "exampleCommand": "/ak:ship --merge"
    },
    {
      "flag": "--skip-tests",
      "titleEn": "Skip tests",
      "titleVi": "Bỏ test",
      "descEn": "Skips the test step only when the user explicitly accepts that risk.",
      "descVi": "Chỉ bỏ bước test khi người dùng chủ động chấp nhận rủi ro đó.",
      "exampleCommand": "/ak:ship --skip-tests"
    },
    {
      "flag": "--skip-review",
      "titleEn": "Skip local review",
      "titleVi": "Bỏ review cục bộ",
      "descEn": "Skips the pre-landing review step, not the downstream review-pr merge path.",
      "descVi": "Bỏ review trước khi tạo PR, không bỏ luồng review-pr hạ nguồn khi merge.",
      "exampleCommand": "/ak:ship --skip-review"
    },
    {
      "flag": "--skip-journal",
      "titleEn": "Skip journal/social",
      "titleVi": "Bỏ journal/social",
      "descEn": "Disables journal writing and the whole social step.",
      "descVi": "Tắt ghi journal và tắt luôn toàn bộ bước social.",
      "exampleCommand": "/ak:ship --skip-journal"
    },
    {
      "flag": "--skip-docs",
      "titleEn": "Skip docs",
      "titleVi": "Bỏ tài liệu",
      "descEn": "Disables the official-mode docs update.",
      "descVi": "Tắt bước cập nhật tài liệu trong official mode.",
      "exampleCommand": "/ak:ship official --skip-docs"
    },
    {
      "flag": "--social",
      "titleEn": "Social draft",
      "titleVi": "Nháp social",
      "descEn": "Opts into build-in-public draft generation after green PR gates.",
      "descVi": "Bật tạo nháp build-in-public sau các cổng PR xanh.",
      "exampleCommand": "/ak:ship --social"
    },
    {
      "flag": "--yes-post",
      "titleEn": "Publish social",
      "titleVi": "Đăng social",
      "descEn": "Allows real social API publishing when --social is present and gates are green.",
      "descVi": "Cho phép đăng thật qua API khi có --social và các cổng đã xanh.",
      "exampleCommand": "/ak:ship --social --yes-post"
    },
    {
      "flag": "--yes-post-private",
      "titleEn": "Private repo post",
      "titleVi": "Đăng repo private",
      "descEn": "Second explicit opt-in required before posting about a private repository.",
      "descVi": "Xác nhận thứ hai bắt buộc trước khi đăng về repo private.",
      "exampleCommand": "/ak:ship --social --yes-post --yes-post-private"
    },
    {
      "flag": "--dry-run",
      "titleEn": "Dry run",
      "titleVi": "Chạy thử",
      "descEn": "Shows the planned ship actions without executing side-effecting delegation, review, or social publishing.",
      "descVi": "Hiển thị các hành động ship dự kiến mà không tạo side effect qua delegation, review hay đăng social.",
      "exampleCommand": "/ak:ship --dry-run"
    }
  ]
};

export default data;

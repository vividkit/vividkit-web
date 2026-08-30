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
      "titleEn": "Pre-flight and mode",
      "titleVi": "Tiền kiểm và mode",
      "descEn": "Check the branch, normalize official/stable/main or beta/dev/next, let --both supersede mode tokens, inspect status/diff, and include uncommitted work.",
      "descVi": "Kiểm tra nhánh, chuẩn hóa official/stable/main hoặc beta/dev/next, để --both ưu tiên hơn token mode, xem status/diff và đưa cả thay đổi chưa commit vào phạm vi."
    },
    {
      "number": 2,
      "titleEn": "Link issues",
      "titleVi": "Liên kết issue",
      "descEn": "Find or create related GitHub issues in one batch, then carry the linked issues into the structured PR body.",
      "descVi": "Tìm hoặc tạo issue GitHub liên quan bằng một lượt gọn, rồi đưa các issue đã liên kết vào PR body có cấu trúc."
    },
    {
      "number": 3,
      "titleEn": "Merge target",
      "titleVi": "Merge nhánh đích",
      "descEn": "Fetch and merge origin/<target-branch>; stop with conflicts instead of hiding or force-resolving unrelated work.",
      "descVi": "Fetch rồi merge origin/<nhánh-đích>; dừng và báo conflict thay vì che giấu hoặc ép xử lý phần việc không liên quan."
    },
    {
      "number": 4,
      "titleEn": "Run tests",
      "titleVi": "Chạy test",
      "descEn": "Auto-detect the test runner, delegate execution, and stop on failures unless the user explicitly passed --skip-tests.",
      "descVi": "Tự nhận diện test runner, giao chạy test, và dừng khi có lỗi trừ khi người dùng đã truyền rõ --skip-tests."
    },
    {
      "number": 5,
      "titleEn": "Review",
      "titleVi": "Review",
      "descEn": "Run the two-pass pre-landing review, treating critical issues as blockers while informational findings remain evidence.",
      "descVi": "Chạy review trước khi tạo PR theo hai lượt, coi vấn đề nghiêm trọng là blocker còn phát hiện thông tin là bằng chứng."
    },
    {
      "number": 6,
      "titleEn": "Version and changelog",
      "titleVi": "Version và changelog",
      "descEn": "Auto-detect version and changelog files, bump patch automatically, ask on major/minor bumps, and silently skip missing files.",
      "descVi": "Tự tìm file version và changelog, tự tăng patch, hỏi khi cần major/minor, và âm thầm bỏ qua file không tồn tại."
    },
    {
      "number": 7,
      "titleEn": "Journal, docs, plan",
      "titleVi": "Journal, tài liệu, plan",
      "descEn": "Run journal and official-mode docs updates in the background unless skipped, and finalize/link a plan when the ship is plan-backed.",
      "descVi": "Chạy journal và cập nhật tài liệu cho official mode ở nền trừ khi bị bỏ qua, và hoàn tất/liên kết plan khi lượt ship có plan."
    },
    {
      "number": 8,
      "titleEn": "Commit, push, PR",
      "titleVi": "Commit, push, PR",
      "descEn": "Create the conventional commit, push the current branch normally, and create a PR with honest evidence, linked issues, and ship mode.",
      "descVi": "Tạo commit theo conventional commit, push nhánh hiện tại theo cách thường, rồi tạo PR có bằng chứng trung thực, issue liên kết và ship mode."
    },
    {
      "number": 9,
      "titleEn": "Optional merge/social",
      "titleVi": "Merge/social tùy chọn",
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
      "whenEn": "A completed branch needs the standard PR shipping workflow.",
      "whenVi": "Một nhánh đã hoàn tất cần quy trình ship PR tiêu chuẩn.",
      "expectedEn": "Runs pre-flight mode detection, issue linking, target merge, tests, review, version/changelog updates, commit, push, and PR creation, then returns the PR URL or exact blocker.",
      "expectedVi": "Chạy tiền kiểm mode, liên kết issue, merge nhánh đích, test, review, cập nhật version/changelog, commit, push và tạo PR, rồi trả URL PR hoặc blocker cụ thể.",
      "recommended": true
    },
    {
      "labelEn": "Beta supervised merge",
      "labelVi": "Beta có cố vấn và merge",
      "command": "/ak:ship beta --advice --merge",
      "whenEn": "A completed branch should ship toward a development branch with Kongming advice and reviewed landing.",
      "whenVi": "Một nhánh đã hoàn tất cần ship về nhánh phát triển với cố vấn Kongming và merge có review.",
      "expectedEn": "Normalizes beta mode, runs required advisory checkpoints during the local ship-to-PR path, creates the PR, then delegates reviewed merge and CI convergence to ak:review-pr.",
      "expectedVi": "Chuẩn hóa beta mode, chạy các điểm cố vấn bắt buộc trong luồng ship-to-PR cục bộ, tạo PR, rồi giao merge có review và CI xanh cho ak:review-pr."
    },
    {
      "labelEn": "Dual target",
      "labelVi": "Hai đích",
      "command": "/ak:ship --both --merge",
      "whenEn": "A completed change needs beta first and a gated stable promotion after green beta.",
      "whenVi": "Một thay đổi đã hoàn tất cần đi beta trước rồi mới promote stable sau khi beta xanh.",
      "expectedEn": "Runs the beta stage first, requires the stable-stage gate before promotion, delegates requested reviewed merge, and stops if the promotion would sweep unrelated work.",
      "expectedVi": "Chạy chặng beta trước, yêu cầu cổng stable trước khi promote, giao merge có review khi được yêu cầu, và dừng nếu phần promote sẽ cuốn theo việc không liên quan."
    },
    {
      "labelEn": "Social dry run",
      "labelVi": "Nháp social",
      "command": "/ak:ship official --social",
      "whenEn": "A completed official-mode ship should also render build-in-public copy after PR creation.",
      "whenVi": "Một lượt ship official đã hoàn tất cũng cần dựng nội dung build-in-public sau khi tạo PR.",
      "expectedEn": "Creates the ship PR, composes a journal-backed build-in-public draft from PR/issue/plan context, and prints channel posts without calling publishing APIs unless --yes-post is also present.",
      "expectedVi": "Tạo PR ship, soạn nháp build-in-public có journal từ bối cảnh PR/issue/plan, và in bài cho từng kênh mà không gọi API đăng trừ khi cũng có --yes-post."
    }
  ],
  "invocation": {
    "syntax": "/ak:ship [official|stable|main|beta|dev|next] [--both] [--advice] [--merge] [--skip-tests] [--skip-review] [--skip-journal] [--skip-docs] [--social] [--yes-post] [--yes-post-private] [--dry-run]",
    "arguments": [
      {
        "token": "[official|stable|main|beta|dev|next]",
        "titleEn": "Release mode",
        "titleVi": "Mode phát hành",
        "descEn": "Optional mode token. official, stable, and main normalize to the official path and target the detected default branch; beta, dev, and next normalize to the beta path and target the detected development branch. Omit it only when branch naming can safely choose the mode.",
        "descVi": "Token mode tùy chọn. official, stable và main được chuẩn hóa thành luồng official và nhắm tới nhánh mặc định đã phát hiện; beta, dev và next được chuẩn hóa thành luồng beta và nhắm tới nhánh phát triển đã phát hiện. Chỉ bỏ token này khi tên nhánh có thể chọn mode an toàn.",
        "exampleCommand": "/ak:ship official"
      }
    ],
    "options": [
      {
        "token": "--both",
        "titleEn": "Ship both targets",
        "titleVi": "Ship cả hai đích",
        "descEn": "Runs the beta stage first, then a gated stable stage. It supersedes any positional mode token and never bypasses branch protection.",
        "descVi": "Chạy stage beta trước, rồi đến stage stable có gate. Cờ này ưu tiên hơn mọi token mode vị trí và không bao giờ bỏ qua branch protection.",
        "exampleCommand": "/ak:ship --both --merge"
      },
      {
        "token": "--advice",
        "titleEn": "Ask Kongming",
        "titleVi": "Hỏi Kongming",
        "descEn": "Adds advisory-only Kongming checkpoints to the local ship-to-PR path. Advice cannot replace tests, review, or ownership by the main agent.",
        "descVi": "Thêm các checkpoint Kongming chỉ tư vấn vào luồng ship-to-PR cục bộ. Lời khuyên không thay thế test, review hoặc quyền quyết định của agent chính.",
        "exampleCommand": "/ak:ship beta --advice"
      },
      {
        "token": "--merge",
        "titleEn": "Reviewed merge",
        "titleVi": "Merge có review",
        "descEn": "After PR creation, delegates to ak:review-pr with fix, reply, merge, and post-merge CI convergence. Without this flag, ak:ship does not merge the PR.",
        "descVi": "Sau khi tạo PR, giao cho ak:review-pr xử lý fix, reply, merge và đưa CI sau merge về xanh. Nếu thiếu cờ này, ak:ship không merge PR.",
        "exampleCommand": "/ak:ship official --merge"
      },
      {
        "token": "--skip-tests",
        "titleEn": "Skip tests",
        "titleVi": "Bỏ test",
        "descEn": "Omits the test gate only when equivalent evidence already exists; the PR must record that skip evidence honestly.",
        "descVi": "Bỏ gate test chỉ khi đã có bằng chứng tương đương; PR phải ghi trung thực bằng chứng cho việc bỏ qua.",
        "exampleCommand": "/ak:ship --skip-tests"
      },
      {
        "token": "--skip-review",
        "titleEn": "Skip local review",
        "titleVi": "Bỏ review local",
        "descEn": "Omits the pre-landing review step. It does not approve the PR and does not skip the downstream ak:review-pr path requested by --merge.",
        "descVi": "Bỏ bước review trước khi tạo PR. Cờ này không phê duyệt PR và không bỏ luồng ak:review-pr hạ nguồn khi có --merge.",
        "exampleCommand": "/ak:ship --skip-review"
      },
      {
        "token": "--skip-journal",
        "titleEn": "Skip journal and social",
        "titleVi": "Bỏ journal và social",
        "descEn": "Omits the background technical journal and suppresses the entire social step; code and PR evidence gates still apply.",
        "descVi": "Bỏ technical journal chạy nền và tắt toàn bộ bước social; các gate code và bằng chứng PR vẫn giữ nguyên.",
        "exampleCommand": "/ak:ship --skip-journal"
      },
      {
        "token": "--skip-docs",
        "titleEn": "Skip docs update",
        "titleVi": "Bỏ cập nhật docs",
        "descEn": "Omits the official-mode docs update. Beta mode skips that docs step automatically.",
        "descVi": "Bỏ cập nhật docs trong mode official. Mode beta tự động bỏ bước docs đó.",
        "exampleCommand": "/ak:ship official --skip-docs"
      },
      {
        "token": "--social",
        "titleEn": "Social draft",
        "titleVi": "Nháp social",
        "descEn": "After the required green PR gate, composes build-in-public posts from PR, issue, and plan context. Without --yes-post, it renders only and makes no API call.",
        "descVi": "Sau gate PR xanh bắt buộc, soạn bài build-in-public từ bối cảnh PR, issue và plan. Nếu thiếu --yes-post, chỉ render nội dung và không gọi API.",
        "exampleCommand": "/ak:ship --social"
      },
      {
        "token": "--yes-post",
        "titleEn": "Publish social",
        "titleVi": "Đăng social",
        "descEn": "Allows --social to publish instead of rendering only. It has no publishing effect without --social.",
        "descVi": "Cho phép --social đăng thật thay vì chỉ render. Cờ này không có tác dụng đăng nếu thiếu --social.",
        "exampleCommand": "/ak:ship --social --yes-post"
      },
      {
        "token": "--yes-post-private",
        "titleEn": "Private post opt-in",
        "titleVi": "Xác nhận đăng repo private",
        "descEn": "Second explicit opt-in required before publishing social posts about a private repository. It requires --social and --yes-post.",
        "descVi": "Xác nhận rõ lần hai trước khi đăng social về repository private. Cờ này cần --social và --yes-post.",
        "exampleCommand": "/ak:ship --social --yes-post --yes-post-private"
      },
      {
        "token": "--dry-run",
        "titleEn": "Preview only",
        "titleVi": "Chỉ xem trước",
        "descEn": "Reads pre-flight state and prints the proposed pipeline without delegation, review-merge, social publishing, mutation, or stable-stage simulation for --both.",
        "descVi": "Đọc trạng thái tiền kiểm và in pipeline dự kiến, không ủy quyền, không review-merge, không đăng social, không mutate và không mô phỏng stable stage cho --both.",
        "exampleCommand": "/ak:ship --dry-run"
      }
    ]
  },
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

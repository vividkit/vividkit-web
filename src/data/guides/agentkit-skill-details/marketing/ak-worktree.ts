import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-worktree",
  "command": "/ak:worktree",
  "kit": "marketer",
  "header": {
    "titleEn": "/ak:worktree",
    "titleVi": "/ak:worktree",
    "taglineEn": "Create, inspect, configure, and clean isolated git worktrees for feature isolation, stale cleanup, health audits, monorepos, and submodules.",
    "taglineVi": "Tạo, kiểm tra, cấu hình và dọn git worktree cô lập cho feature isolation, stale cleanup, health audit, monorepo và submodule."
  },
  "hardGate": {
    "type": "warning",
    "titleEn": "Respect branch and root safety",
    "titleVi": "Tôn trọng an toàn branch và root",
    "contentEn": "Use --no-prefix for exact pre-formed branch names; project-scope worktree.root must be relative, because committed absolute paths from untrusted clones are skipped with a warning.",
    "contentVi": "Dùng --no-prefix cho branch name đã định dạng sẵn cần giữ nguyên; worktree.root cấp project phải là đường dẫn tương đối vì absolute path trong repo lạ sẽ bị bỏ qua kèm cảnh báo."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Inspect repo",
      "titleVi": "Kiểm repo",
      "descEn": "Run the info command and parse repoType, baseBranch, projects, worktreeRoot, dirtyState, and warnings.",
      "descVi": "Chạy lệnh info và đọc repoType, baseBranch, projects, worktreeRoot, dirtyState và warnings."
    },
    {
      "number": 2,
      "titleEn": "Detect naming",
      "titleVi": "Nhận diện tên",
      "descEn": "If the request provides an exact branch with uppercase, tracker key, slashes, or says exact name, preserve it with no prefix.",
      "descVi": "Nếu yêu cầu đưa branch chính xác có chữ hoa, mã ticket, dấu slash hoặc nói dùng đúng tên, giữ nguyên bằng no prefix."
    },
    {
      "number": 3,
      "titleEn": "Prefix and slug",
      "titleVi": "Prefix và slug",
      "descEn": "Otherwise infer feat/fix/refactor/docs/test/chore/perf from the description and convert the feature to a max-50-character kebab slug.",
      "descVi": "Ngược lại suy ra feat/fix/refactor/docs/test/chore/perf từ mô tả và đổi feature thành slug kebab tối đa 50 ký tự."
    },
    {
      "number": 4,
      "titleEn": "Resolve project",
      "titleVi": "Chọn project",
      "descEn": "For monorepos without a specified project, ask the user to choose from detected projects.",
      "descVi": "Với monorepo chưa chỉ rõ project, hỏi người dùng chọn trong danh sách project đã phát hiện."
    },
    {
      "number": 5,
      "titleEn": "Create",
      "titleVi": "Tạo worktree",
      "descEn": "Run the create command in standalone or monorepo form, using base, submodule, worktree-root, json, dry-run, or no-prefix options only when needed.",
      "descVi": "Chạy lệnh create dạng standalone hoặc monorepo, chỉ dùng tùy chọn base, submodule, worktree-root, json, dry-run hoặc no-prefix khi cần."
    },
    {
      "number": 6,
      "titleEn": "Bootstrap deps",
      "titleVi": "Cài dependency",
      "descEn": "Install dependencies based on lockfiles and language manifests in the new worktree.",
      "descVi": "Cài dependency theo lockfile và manifest ngôn ngữ trong worktree mới."
    },
    {
      "number": 7,
      "titleEn": "Audit/clean",
      "titleVi": "Audit/dọn dẹp",
      "descEn": "Use list, status, prune, or remove for health checks and stale cleanup; start prune with dry-run when auditing metadata.",
      "descVi": "Dùng list, status, prune hoặc remove để health check và dọn stale; bắt đầu prune bằng dry-run khi audit metadata."
    },
    {
      "number": 8,
      "titleEn": "Report",
      "titleVi": "Báo cáo",
      "descEn": "Return created path, branch/base info, dependency action, warnings, and any health or cleanup results.",
      "descVi": "Trả path đã tạo, thông tin branch/base, thao tác dependency, warning và kết quả health/cleanup nếu có."
    }
  ],
  "corePrinciplesEn": [
    "Info first: repo type, base branch, projects, and root source drive the create command.",
    "Preserve exact branch names when the user provides one; otherwise infer a boring prefix and short slug.",
    "Dry-run stale cleanup before pruning metadata.",
    "Host-native worktree systems are separate from ak:worktree's own root preference."
  ],
  "corePrinciplesVi": [
    "Info trước: repo type, base branch, projects và root source quyết định lệnh create.",
    "Giữ nguyên branch name khi người dùng đưa tên chính xác; nếu không thì suy prefix đơn giản và slug ngắn.",
    "Dry-run trước khi prune metadata stale.",
    "Hệ worktree native của host tách biệt với preference root của ak:worktree."
  ],
  "workflowModes": [
    {
      "flag": "create",
      "modeEn": "Create isolated worktree",
      "modeVi": "Tạo worktree cô lập",
      "research": "repo info + naming",
      "redTeam": "root/base warnings",
      "validation": "worktreePath JSON",
      "cookFlag": "create [project] <feature>"
    },
    {
      "flag": "status",
      "modeEn": "Health audit",
      "modeVi": "Audit sức khỏe",
      "research": "normalized paths",
      "redTeam": "dirty/detached/divergence",
      "validation": "status JSON",
      "cookFlag": "status"
    },
    {
      "flag": "prune",
      "modeEn": "Stale cleanup",
      "modeVi": "Dọn stale",
      "research": "metadata entries",
      "redTeam": "dry-run first",
      "validation": "entries JSON",
      "cookFlag": "prune"
    }
  ],
  "skillStack": [
    {
      "name": "worktree.cjs",
      "type": "tool"
    },
    {
      "name": "git worktree",
      "type": "tool"
    },
    {
      "name": "ak config prefs",
      "type": "tool"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Feature worktree",
      "labelVi": "Worktree tính năng",
      "command": "/ak:worktree add onboarding email flow",
      "whenEn": "Use before implementation that should be isolated from the current checkout.",
      "whenVi": "Dùng trước khi implement việc cần tách khỏi checkout hiện tại.",
      "expectedEn": "New worktree path with inferred branch prefix and dependency bootstrap guidance.",
      "expectedVi": "Path worktree mới kèm prefix branch đã suy ra và hướng dẫn bootstrap dependency.",
      "recommended": true
    },
    {
      "labelEn": "Exact branch",
      "labelVi": "Branch chính xác",
      "command": "/ak:worktree ND-1377-cleanup-docs",
      "whenEn": "Use when the branch name must preserve tracker casing or slashes.",
      "whenVi": "Dùng khi tên branch phải giữ nguyên casing mã ticket hoặc slash.",
      "expectedEn": "Worktree created with preserved branch name semantics.",
      "expectedVi": "Worktree được tạo với ngữ nghĩa giữ nguyên branch name."
    }
  ],
  "reportOutput": {
    "titleEn": "Worktree result",
    "titleVi": "Kết quả worktree",
    "patternEn": "worktreePath • baseBranch • warnings • dependency action",
    "patternVi": "worktreePath • baseBranch • warnings • thao tác dependency",
    "locationEn": "Response output",
    "locationVi": "Nội dung phản hồi",
    "descEn": "JSON-backed fields make branch, path, root source, and warnings explicit.",
    "descVi": "Các field từ JSON làm rõ branch, path, nguồn root và cảnh báo."
  }
};

export default data;

import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-scout",
  "command": "/ak:scout",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:scout — Token-efficient codebase scout",
    "titleVi": "/ak:scout — Khảo sát codebase tiết kiệm token",
    "taglineEn": "Fast, token-efficient codebase scouting with native search, scoped reads, permitted Explore agents, optional OpenCode probes, and best-of-5 verifier mode.",
    "taglineVi": "Scout codebase nhanh, tiết kiệm token bằng tìm kiếm gốc, đọc hẹp, Explore agent khi được phép, probe OpenCode tùy chọn và chế độ verifier best-of-5."
  },
  "hardGate": {
    "type": "critical",
    "titleEn": "Do not force delegation",
    "titleVi": "Không ép dùng subagent",
    "contentEn": "Do not spawn subagents merely because the skill mentions Explore. If runtime policy or the user request does not permit delegation, scout in the main agent with search_files and read_file; `--ultra` hard-stops if five read-only candidates cannot run.",
    "contentVi": "Không spawn subagent chỉ vì skill nhắc Explore. Nếu runtime policy hoặc yêu cầu người dùng không cho phép delegation, hãy scout trong agent chính bằng search_files và read_file; `--ultra` phải dừng cứng nếu không chạy được năm candidate chỉ đọc."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Parse target",
      "titleVi": "Phân tích mục tiêu",
      "descEn": "Parse the user prompt for search targets, key directories, patterns, file types, lines of code, and the right subagent scale.",
      "descVi": "Phân tích yêu cầu để lấy mục tiêu tìm kiếm, thư mục chính, pattern, loại file, số dòng code và quy mô subagent phù hợp."
    },
    {
      "number": 2,
      "titleEn": "Search portably",
      "titleVi": "Tìm bằng công cụ gốc",
      "descEn": "Use search_files broadly first, then scoped read_file and small run_shell facts for local discovery.",
      "descVi": "Dùng search_files rộng trước, rồi read_file phạm vi hẹp và vài dữ kiện run_shell nhỏ để khám phá local."
    },
    {
      "number": 3,
      "titleEn": "Divide scopes",
      "titleVi": "Chia phạm vi",
      "descEn": "Split the codebase into non-overlapping logical segments only when delegation is permitted and more than two agents are worth the overhead.",
      "descVi": "Chỉ chia codebase thành các phần logic không chồng lấn khi delegation được phép và hơn hai agent đáng chi phí."
    },
    {
      "number": 4,
      "titleEn": "Register scout work",
      "titleVi": "Đăng ký việc scout",
      "descEn": "Register one concise scoped work item per agent in the live task-management surface when available; otherwise update the active plan.",
      "descVi": "Đăng ký một việc ngắn theo phạm vi cho mỗi agent trong bề mặt task-management nếu có; nếu không thì cập nhật active plan."
    },
    {
      "number": 5,
      "titleEn": "Run scouts",
      "titleVi": "Chạy scout",
      "descEn": "Load internal scouting for permitted Explore subagents, or external scouting for user-permitted OpenCode probes when native/local search is insufficient.",
      "descVi": "Nạp internal scouting cho Explore subagent được phép, hoặc external scouting cho probe OpenCode đã được người dùng cho phép khi tìm kiếm local/gốc không đủ."
    },
    {
      "number": 6,
      "titleEn": "Collect quickly",
      "titleVi": "Thu kết quả nhanh",
      "descEn": "Wait up to three minutes per agent, skip non-responders, and record timed-out scopes honestly.",
      "descVi": "Chờ tối đa ba phút mỗi agent, bỏ qua agent không phản hồi và ghi rõ phạm vi bị timeout."
    },
    {
      "number": 7,
      "titleEn": "Report findings",
      "titleVi": "Báo cáo phát hiện",
      "descEn": "Organize outputs with project-organization, then aggregate relevant files with one-line roles, relationships, timed-out scopes, and unresolved questions.",
      "descVi": "Sắp xếp đầu ra bằng project-organization, rồi gom file liên quan với vai trò một dòng, quan hệ, phạm vi timeout và câu hỏi chưa rõ."
    }
  ],
  "corePrinciplesEn": [
    "Scouting finds files and context; it does not implement the change",
    "Portable search and scoped reads come before agents",
    "Delegation must be permitted and worth the overhead; `--ultra` fails closed",
    "Reports should list relevant files, relationships, timed-out scopes, and honest gaps"
  ],
  "corePrinciplesVi": [
    "Scout để tìm file và ngữ cảnh, không phải triển khai thay đổi",
    "Tìm kiếm portable và đọc hẹp phải đi trước agent",
    "Delegation phải được phép và đáng chi phí; `--ultra` fail-closed",
    "Báo cáo cần nêu file liên quan, quan hệ, phạm vi timeout và khoảng trống thật"
  ],
  "invocation": {
    "syntax": "/ak:scout [search-target] [ext] [--ultra]",
    "arguments": [
      {
        "token": "[search-target]",
        "titleEn": "Search target",
        "titleVi": "Mục tiêu tìm kiếm",
        "descEn": "Bounded behavior, symbol, feature, configuration, relationship, directory, or file type to map. Include scope, exclusions, expected evidence, and whether delegation or external probing is allowed when that matters.",
        "descVi": "Behavior, symbol, tính năng, cấu hình, quan hệ, thư mục hoặc loại file có giới hạn cần lập bản đồ. Nêu scope, phần loại trừ, bằng chứng mong đợi và có cho phép delegation hoặc probe bên ngoài không khi điều đó quan trọng.",
        "required": true,
        "exampleCommand": "/ak:scout \"Find the editor draft persistence entry points, storage adapter, recovery UI, and focused tests. Search src/ and tests/ only.\""
      }
    ],
    "options": [
      {
        "token": "ext",
        "titleEn": "External probe",
        "titleVi": "Probe bên ngoài",
        "descEn": "Use user-permitted OpenCode probes only after native/local search is insufficient. It does not authorize sending secrets, unrelated private files, or broad unbounded scopes.",
        "descVi": "Dùng probe OpenCode đã được người dùng cho phép chỉ sau khi tìm kiếm native/local không đủ. Token này không cho phép gửi secret, file riêng tư không liên quan hoặc scope rộng không giới hạn.",
        "exampleCommand": "/ak:scout \"Find payment webhook ownership across api/ and lib/; read-only\" ext"
      },
      {
        "token": "--ultra",
        "titleEn": "Verifier scout",
        "titleVi": "Scout có verifier",
        "descEn": "Run exactly five parallel read-only candidate scout passes from the same evidence packet, then have a strongest-model verifier return only evidence-validated findings. Hard-stops if that dispatch is unavailable.",
        "descVi": "Chạy đúng năm candidate scout chỉ đọc song song từ cùng một evidence packet, rồi dùng verifier model mạnh nhất chỉ trả về phát hiện xác thực bằng bằng chứng. Dừng cứng nếu không dispatch được.",
        "exampleCommand": "/ak:scout \"Find payment webhook ownership across api/ and lib/; read-only\" --ultra"
      }
    ]
  },
  "workflowModes": [
    {
      "flag": "default",
      "modeEn": "Internal scouting",
      "modeVi": "Scout nội bộ",
      "research": "search_files, scoped read_file, then permitted Explore agents",
      "redTeam": "None",
      "validation": "Project-organization plus concise Scout Report"
    },
    {
      "flag": "ext",
      "modeEn": "External OpenCode probes",
      "modeVi": "Probe OpenCode bên ngoài",
      "research": "User-permitted OpenCode probes after native/local search falls short",
      "redTeam": "None",
      "validation": "Merged external scout summaries with named gaps"
    },
    {
      "flag": "--ultra",
      "modeEn": "Best-of-5 scout",
      "modeVi": "Scout best-of-5",
      "research": "Exactly five read-only candidate reports from one evidence packet",
      "redTeam": "Strongest-model verifier scores coverage and evidence",
      "validation": "Evidence-validated, deduplicated union of findings"
    }
  ],
  "outputFlags": [
    {
      "flag": "--ultra",
      "titleEn": "Verifier scout",
      "titleVi": "Scout có verifier",
      "descEn": "Requires exactly five parallel read-only candidate scouts plus one strongest-model verifier; hard-stops if that dispatch is unavailable.",
      "descVi": "Cần đúng năm candidate scout chỉ đọc chạy song song và một verifier model mạnh nhất; dừng cứng nếu không dispatch được.",
      "exampleCommand": "/ak:scout auth middleware --ultra"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Find feature files",
      "labelVi": "Tìm file tính năng",
      "command": "/ak:scout payment webhook handlers",
      "whenEn": "Use at the start of a multi-directory feature or bug investigation.",
      "whenVi": "Dùng khi bắt đầu điều tra bug hoặc feature trải nhiều thư mục.",
      "expectedEn": "Scout searches broadly, reads scoped files, optionally uses permitted Explore agents, and returns relevant files with roles and open questions.",
      "expectedVi": "Scout tìm kiếm rộng, đọc file theo phạm vi, có thể dùng Explore agent được phép và trả về file liên quan kèm vai trò và câu hỏi mở.",
      "recommended": true
    },
    {
      "labelEn": "External probe",
      "labelVi": "Probe bên ngoài",
      "command": "/ak:scout renderer package boundaries ext",
      "whenEn": "Use when native/local search is insufficient and user-permitted OpenCode probing is allowed.",
      "whenVi": "Dùng khi tìm kiếm local/gốc không đủ và người dùng cho phép probe OpenCode bên ngoài.",
      "expectedEn": "Scout loads the external scouting path, runs scoped OpenCode probes, then merges their summaries into one report with named gaps.",
      "expectedVi": "Scout nạp luồng external scouting, chạy probe OpenCode theo phạm vi, rồi gộp tóm tắt thành một báo cáo có nêu khoảng trống."
    },
    {
      "labelEn": "Verifier scout",
      "labelVi": "Scout có verifier",
      "command": "/ak:scout routing layer --ultra",
      "whenEn": "Use when file discovery is high-stakes and the runtime can dispatch five parallel read-only candidates.",
      "whenVi": "Dùng khi tìm file có rủi ro cao và runtime dispatch được năm candidate chỉ đọc song song.",
      "expectedEn": "Scout builds one evidence packet, runs exactly five candidate reports, and emits the verifier's validated deduplicated union of findings.",
      "expectedVi": "Scout tạo một evidence packet, chạy đúng năm candidate report và xuất tập phát hiện đã xác thực, khử trùng lặp từ verifier."
    }
  ],
  "reportOutput": {
    "titleEn": "Scout Report",
    "titleVi": "Báo cáo Scout",
    "patternEn": "Chat report or organized report path after project-organization is invoked",
    "patternVi": "Báo cáo trong chat hoặc đường dẫn đã sắp xếp sau khi gọi project-organization",
    "descEn": "Relevant files with one-line roles, relationships, unresolved questions, and timed-out scopes named instead of hidden.",
    "descVi": "File liên quan kèm vai trò một dòng, quan hệ, câu hỏi còn mở và phạm vi timeout được nêu thay vì giấu đi."
  }
};

export default data;

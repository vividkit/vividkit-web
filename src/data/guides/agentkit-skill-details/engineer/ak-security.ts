import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-security",
  "command": "/ak:security",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:security — Threat-model security audit",
    "titleVi": "/ak:security — Đánh giá bảo mật theo mô hình mối đe dọa",
    "taglineEn": "Threat-model a scope with STRIDE and OWASP, optional red-team personas, severity-ranked findings, credential masking, and iterative fixes when authorized.",
    "taglineVi": "Threat-model một phạm vi bằng STRIDE và OWASP, có persona red-team tùy chọn, findings theo severity, che credential và sửa lặp khi được phép."
  },
  "hardGate": {
    "type": "critical",
    "titleEn": "Mask credentials and stop on failed guards",
    "titleVi": "Che credential và dừng khi guard fail",
    "contentEn": "Never emit raw secrets in findings or logs. In `--fix`, stop early if verification fails instead of continuing through more fixes.",
    "contentVi": "Không bao giờ in secret thô trong finding hoặc log. Trong `--fix`, nếu guard kiểm chứng fail thì dừng sớm thay vì tiếp tục sửa lỗi khác."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Resolve scope",
      "titleVi": "Xác định phạm vi",
      "descEn": "Expand the provided glob or `full` keyword into an in-scope file list and read the relevant code before analysis.",
      "descVi": "Mở rộng glob hoặc từ khóa `full` thành danh sách file trong phạm vi và đọc code liên quan trước khi phân tích."
    },
    {
      "number": 2,
      "titleEn": "Run red-team loop when requested",
      "titleVi": "Chạy vòng red-team khi được yêu cầu",
      "descEn": "With `--red-team`, iterate through security adversary, supply-chain, insider, and infrastructure attacker personas before the standard sweep.",
      "descVi": "Với `--red-team`, lặp qua persona security adversary, supply-chain, insider và infrastructure attacker trước lượt quét chuẩn."
    },
    {
      "number": 3,
      "titleEn": "Sweep STRIDE",
      "titleVi": "Quét STRIDE",
      "descEn": "Evaluate spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege systematically.",
      "descVi": "Đánh giá có hệ thống spoofing, tampering, repudiation, information disclosure, denial of service và elevation of privilege."
    },
    {
      "number": 4,
      "titleEn": "Map OWASP",
      "titleVi": "Ánh xạ OWASP",
      "descEn": "Map validated issues to OWASP Top 10 categories and fill remaining coverage gaps with the checklist reference.",
      "descVi": "Ánh xạ issue đã xác thực vào nhóm OWASP Top 10 và lấp khoảng trống coverage bằng checklist tham chiếu."
    },
    {
      "number": 5,
      "titleEn": "Audit dependencies",
      "titleVi": "Audit dependency",
      "descEn": "Run stack-appropriate audit tooling such as npm audit, pip-audit, govulncheck, or bundle audit.",
      "descVi": "Chạy công cụ audit phù hợp stack như npm audit, pip-audit, govulncheck hoặc bundle audit."
    },
    {
      "number": 6,
      "titleEn": "Detect and mask secrets",
      "titleVi": "Tìm và che secret",
      "descEn": "Scan for API keys, passwords, tokens, and private keys, then mask credential values before any finding or log output.",
      "descVi": "Quét API key, mật khẩu, token và private key, rồi che giá trị credential trước mọi finding hoặc log output."
    },
    {
      "number": 7,
      "titleEn": "Rank findings",
      "titleVi": "Xếp hạng finding",
      "descEn": "Assign Critical, High, Medium, Low, or Info by exploitability, data breach/RCE risk, impact, and fix urgency.",
      "descVi": "Xếp Critical, High, Medium, Low hoặc Info theo khả năng khai thác, nguy cơ data breach/RCE, tác động và độ khẩn của fix."
    },
    {
      "number": 8,
      "titleEn": "Fix iteratively when authorized",
      "titleVi": "Sửa lặp khi được phép",
      "descEn": "With `--fix`, sort findings by severity, apply one targeted fix at a time, run a guard, commit, and stop if verification fails.",
      "descVi": "Với `--fix`, sắp finding theo severity, sửa từng lỗi mục tiêu, chạy guard, commit và dừng nếu kiểm chứng fail."
    }
  ],
  "corePrinciplesEn": [
    "Threat categories are systematic, not vibes",
    "Red-team mode reasons as attackers from four distinct personas",
    "Confirmed Critical and High findings drive fix priority",
    "Credential hygiene applies across every mode and persona"
  ],
  "corePrinciplesVi": [
    "Nhóm threat phải được xét có hệ thống, không dựa cảm tính",
    "Chế độ red-team suy nghĩ như attacker từ bốn persona khác nhau",
    "Finding Critical và High đã xác nhận quyết định thứ tự sửa",
    "Vệ sinh credential áp dụng cho mọi mode và persona"
  ],
  "workflowModes": [
    {
      "flag": "default",
      "modeEn": "Audit only",
      "modeVi": "Chỉ audit",
      "research": "STRIDE + OWASP + deps + secrets",
      "redTeam": "No persona loop",
      "validation": "Severity-ranked report"
    },
    {
      "flag": "--red-team",
      "modeEn": "Persona discovery",
      "modeVi": "Khám phá bằng persona",
      "research": "Four attacker personas before final sweep",
      "redTeam": "External, supply-chain, insider, infrastructure",
      "validation": "TSV log and report"
    },
    {
      "flag": "--fix",
      "modeEn": "Audit + fix",
      "modeVi": "Audit rồi sửa",
      "research": "Findings sorted Critical through Low",
      "redTeam": "No persona loop unless combined with --red-team",
      "validation": "Guard after each targeted fix; stop on failure"
    },
    {
      "flag": "--iterations N",
      "modeEn": "Bounded loop",
      "modeVi": "Vòng lặp hữu hạn",
      "research": "Caps red-team discovery or fix iterations",
      "redTeam": "Caps persona discovery when paired with --red-team",
      "validation": "Stops at N iterations"
    }
  ],
  "invocation": {
    "syntax": "/ak:security <scope glob or 'full'> [--fix] [--red-team] [--iterations N]",
    "arguments": [
      {
        "token": "<scope glob or 'full'>",
        "titleEn": "Audit scope",
        "titleVi": "Phạm vi audit",
        "descEn": "File glob, directory, or exact keyword `full` to audit. Keep it bounded to the relevant trust boundary unless a full-project review is intended.",
        "descVi": "Glob file, thư mục hoặc đúng keyword `full` cần audit. Giữ phạm vi trong ranh giới tin cậy liên quan trừ khi muốn review toàn project.",
        "required": true,
        "exampleCommand": "/ak:security src/auth/"
      }
    ],
    "options": [
      {
        "token": "--fix",
        "titleEn": "Fix findings",
        "titleVi": "Sửa finding",
        "descEn": "Authorize local targeted fixes after the audit. Each successful iteration runs a guard and creates a local commit; it does not authorize push, PR, merge, release, or deployment.",
        "descVi": "Cho phép sửa cục bộ có mục tiêu sau audit. Mỗi iteration thành công chạy guard và tạo commit local; không cho phép push, PR, merge, release hay deploy.",
        "exampleCommand": "/ak:security src/ --fix --iterations 15"
      },
      {
        "token": "--red-team",
        "titleEn": "Red-team discovery",
        "titleVi": "Khám phá red-team",
        "descEn": "Add attacker-persona discovery before the final STRIDE and OWASP sweep: external adversary, supply-chain, insider, and infrastructure perspectives.",
        "descVi": "Thêm khám phá theo persona attacker trước lượt quét STRIDE và OWASP cuối: external adversary, supply-chain, insider và infrastructure.",
        "exampleCommand": "/ak:security full --red-team"
      },
      {
        "token": "--iterations N",
        "titleEn": "Iteration cap",
        "titleVi": "Giới hạn số vòng",
        "descEn": "Cap red-team discovery or fix iterations for the selected mode. `N` is user-chosen; no default numeric cap is documented.",
        "descVi": "Giới hạn số vòng discovery red-team hoặc fix cho mode đã chọn. `N` do người dùng chọn; source không định nghĩa giới hạn số mặc định.",
        "exampleCommand": "/ak:security src/ --red-team --iterations 20"
      }
    ]
  },
  "outputFlags": [
    {
      "flag": "--fix",
      "titleEn": "Fix mode",
      "titleVi": "Chế độ sửa",
      "descEn": "Applies iterative targeted fixes after the audit.",
      "descVi": "Áp dụng vòng sửa mục tiêu sau audit.",
      "exampleCommand": "/ak:security src/ --fix --iterations 15"
    },
    {
      "flag": "--red-team",
      "titleEn": "Red-team discovery",
      "titleVi": "Khám phá red-team",
      "descEn": "Runs the four-persona attacker discovery loop.",
      "descVi": "Chạy vòng khám phá attacker với bốn persona.",
      "exampleCommand": "/ak:security full --red-team"
    },
    {
      "flag": "--iterations N",
      "titleEn": "Iteration cap",
      "titleVi": "Giới hạn số vòng",
      "descEn": "Caps red-team discovery or fix iterations.",
      "descVi": "Giới hạn số vòng khám phá red-team hoặc sửa lỗi.",
      "exampleCommand": "/ak:security src/ --red-team --iterations 20"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Scoped API audit",
      "labelVi": "Audit API theo phạm vi",
      "command": "/ak:security src/api/**/*.ts",
      "whenEn": "Use for a scoped STRIDE + OWASP pass before a release or after API data-handling changes.",
      "whenVi": "Dùng để chạy STRIDE + OWASP theo phạm vi trước release hoặc sau thay đổi xử lý dữ liệu API.",
      "expectedEn": "Expands the API glob, reads in-scope files, runs STRIDE/OWASP, dependency and secret checks, then returns a severity-ranked report with file-line evidence.",
      "expectedVi": "Mở rộng glob API, đọc file trong phạm vi, chạy STRIDE/OWASP, kiểm tra dependency và secret, rồi trả báo cáo xếp theo severity với bằng chứng file:line.",
      "recommended": true
    },
    {
      "labelEn": "Full red-team discovery",
      "labelVi": "Khám phá red-team toàn bộ",
      "command": "/ak:security full --red-team",
      "whenEn": "Use when attacker-perspective discovery is needed across the full codebase before the final STRIDE/OWASP sweep.",
      "whenVi": "Dùng khi cần khám phá theo góc nhìn attacker trên toàn codebase trước lượt quét STRIDE/OWASP cuối.",
      "expectedEn": "Runs the four-persona discovery loop, masks credential values in logged evidence, chains persona findings, then fills gaps with the standard security sweep.",
      "expectedVi": "Chạy vòng khám phá bốn persona, che giá trị credential trong bằng chứng ghi log, nối tiếp finding giữa các persona, rồi lấp khoảng trống bằng lượt quét bảo mật chuẩn."
    },
    {
      "labelEn": "Bounded red-team pass",
      "labelVi": "Red-team có giới hạn",
      "command": "/ak:security src/ --red-team --iterations 20",
      "whenEn": "Use when red-team discovery is useful but the persona loop needs a hard iteration cap.",
      "whenVi": "Dùng khi cần khám phá red-team nhưng vòng persona phải có giới hạn số lần lặp.",
      "expectedEn": "Caps persona discovery at 20 iterations, validates each finding with file-line proof and attack scenario, then reports remaining STRIDE/OWASP coverage.",
      "expectedVi": "Giới hạn khám phá persona ở 20 vòng, xác thực mỗi finding bằng bằng chứng file:line và kịch bản tấn công, rồi báo cáo coverage STRIDE/OWASP còn lại."
    },
    {
      "labelEn": "Bounded fix loop",
      "labelVi": "Vòng sửa có giới hạn",
      "command": "/ak:security src/ --fix --iterations 15",
      "whenEn": "Use when authorized to remediate audit findings but the fix loop needs a maximum iteration count.",
      "whenVi": "Dùng khi được phép sửa finding audit nhưng vòng fix cần số lần lặp tối đa.",
      "expectedEn": "Sorts findings by severity, applies up to 15 targeted fixes one at a time, runs a guard after each fix, and stops with the failure reason if verification breaks.",
      "expectedVi": "Sắp finding theo severity, áp dụng tối đa 15 sửa đổi mục tiêu từng cái một, chạy guard sau mỗi fix và dừng kèm lý do nếu kiểm chứng fail."
    }
  ],
  "reportOutput": {
    "titleEn": "Security audit report",
    "titleVi": "Báo cáo audit bảo mật",
    "patternEn": "Chat report with severity table; optional security-audit-results.tsv during red-team loops",
    "patternVi": "Báo cáo trong chat có bảng severity; có thể kèm security-audit-results.tsv khi chạy red-team",
    "descEn": "Files scanned, severity counts, STRIDE/OWASP categories, file-line evidence, impact, and fix recommendations.",
    "descVi": "Số file quét, tổng theo severity, nhóm STRIDE/OWASP, bằng chứng file:line, tác động và khuyến nghị sửa."
  }
};

export default data;

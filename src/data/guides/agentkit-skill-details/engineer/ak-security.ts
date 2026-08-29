import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-security",
  "command": "/ak:security",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:security",
    "titleVi": "/ak:security",
    "taglineEn": "Threat-model a scope with STRIDE and OWASP, optional red-team personas, severity-ranked findings, and iterative fixes for confirmed high-impact issues.",
    "taglineVi": "Threat-model một phạm vi bằng STRIDE và OWASP, có persona red-team tùy chọn, findings theo severity và vòng sửa lặp cho lỗi tác động cao đã xác nhận."
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
      "descEn": "Expand the provided glob or `full` keyword into files and read the in-scope code before analysis.",
      "descVi": "Mở rộng glob hoặc từ khóa `full` thành danh sách file và đọc code trong phạm vi trước khi phân tích."
    },
    {
      "number": 2,
      "titleEn": "Run STRIDE",
      "titleVi": "Chạy STRIDE",
      "descEn": "Evaluate spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege.",
      "descVi": "Đánh giá spoofing, tampering, repudiation, information disclosure, denial of service và elevation of privilege."
    },
    {
      "number": 3,
      "titleEn": "Map OWASP",
      "titleVi": "Ánh xạ OWASP",
      "descEn": "Check each finding against OWASP Top 10 categories and the detailed checklist reference.",
      "descVi": "Đối chiếu từng finding với nhóm OWASP Top 10 và checklist chi tiết."
    },
    {
      "number": 4,
      "titleEn": "Audit dependencies",
      "titleVi": "Audit dependency",
      "descEn": "Run stack-appropriate audit tooling such as npm audit, pip-audit, govulncheck, or bundle audit.",
      "descVi": "Chạy công cụ audit phù hợp stack như npm audit, pip-audit, govulncheck hoặc bundle audit."
    },
    {
      "number": 5,
      "titleEn": "Detect secrets",
      "titleVi": "Tìm secret",
      "descEn": "Scan for API keys, passwords, tokens, and private keys, then mask every credential before logging.",
      "descVi": "Quét API key, mật khẩu, token và private key, rồi che mọi credential trước khi ghi log."
    },
    {
      "number": 6,
      "titleEn": "Red-team if requested",
      "titleVi": "Red-team khi được yêu cầu",
      "descEn": "With `--red-team`, iterate through external hacker, supply chain, insider, and infrastructure attacker personas before the final sweep.",
      "descVi": "Với `--red-team`, lặp qua persona hacker bên ngoài, supply chain, insider và infrastructure attacker trước lượt quét cuối."
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
      "titleEn": "Fix iteratively",
      "titleVi": "Sửa lặp nếu có",
      "descEn": "With `--fix`, sort by severity, apply one targeted fix, run a guard, commit, and stop on failed verification.",
      "descVi": "Với `--fix`, sắp theo severity, sửa từng lỗi mục tiêu, chạy guard, commit và dừng nếu kiểm chứng fail."
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
      "research": "Findings sorted by severity",
      "redTeam": "Fix confirmed high-impact issues",
      "validation": "Guard after each targeted fix"
    },
    {
      "flag": "--iterations N",
      "modeEn": "Bounded loop",
      "modeVi": "Vòng lặp hữu hạn",
      "research": "Caps red-team or fix iteration count",
      "redTeam": "Caps discovery personas loop",
      "validation": "Stops at N"
    }
  ],
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
      "labelEn": "API audit",
      "labelVi": "Audit API",
      "command": "/ak:security src/api/**/*.ts",
      "whenEn": "Use for a scoped STRIDE + OWASP pass before release.",
      "whenVi": "Dùng để chạy STRIDE + OWASP theo phạm vi trước release.",
      "expectedEn": "Severity-ranked security audit report with file-line evidence.",
      "expectedVi": "Báo cáo audit bảo mật theo severity, có bằng chứng file:line.",
      "recommended": true
    },
    {
      "labelEn": "Full red-team",
      "labelVi": "Red-team toàn bộ",
      "command": "/ak:security full --red-team",
      "whenEn": "Use when attacker-perspective discovery is needed across the full codebase.",
      "whenVi": "Dùng khi cần khám phá theo góc nhìn attacker trên toàn codebase.",
      "expectedEn": "Findings from four personas plus final STRIDE/OWASP gap sweep.",
      "expectedVi": "Finding từ bốn persona và lượt quét bổ sung STRIDE/OWASP cuối."
    },
    {
      "labelEn": "Bounded fix",
      "labelVi": "Sửa có giới hạn",
      "command": "/ak:security src/ --fix --iterations 15",
      "whenEn": "Use when authorized to fix findings but the loop needs a cap.",
      "whenVi": "Dùng khi được phép sửa finding nhưng cần giới hạn số vòng.",
      "expectedEn": "Targeted fixes with verification guard or an explicit stop reason.",
      "expectedVi": "Các sửa đổi mục tiêu có guard kiểm chứng hoặc lý do dừng rõ ràng."
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

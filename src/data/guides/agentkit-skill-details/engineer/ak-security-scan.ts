import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-security-scan",
  "command": "/ak:security-scan",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:security-scan",
    "titleVi": "/ak:security-scan",
    "taglineEn": "Lightweight no-dependency security scan for secrets, dependency advisories, .env exposure, and common vulnerable code patterns.",
    "taglineVi": "Quét bảo mật nhẹ không cần dependency ngoài: secret, cảnh báo dependency, lộ .env và pattern code dễ tổn thương."
  },
  "hardGate": {
    "type": "critical",
    "titleEn": "Never reveal or execute secrets",
    "titleVi": "Không bao giờ lộ hoặc chạy secret",
    "contentEn": "Reports must redact real secret values to first 4 plus last 2 characters. Never execute discovered credentials and never modify code automatically.",
    "contentVi": "Báo cáo phải che secret thật còn 4 ký tự đầu và 2 ký tự cuối. Không bao giờ chạy credential tìm thấy và không tự động sửa code."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Detect stack",
      "titleVi": "Nhận diện stack",
      "descEn": "Check project files such as package.json, requirements.txt, pyproject.toml, go.mod, or Cargo.toml.",
      "descVi": "Kiểm tra file dự án như package.json, requirements.txt, pyproject.toml, go.mod hoặc Cargo.toml."
    },
    {
      "number": 2,
      "titleEn": "Scan secrets first",
      "titleVi": "Quét secret trước",
      "descEn": "Load secret patterns and search for API keys, private keys, connection strings, and hardcoded passwords.",
      "descVi": "Nạp pattern secret và tìm API key, private key, connection string và mật khẩu hardcode."
    },
    {
      "number": 3,
      "titleEn": "Filter false positives",
      "titleVi": "Lọc dương tính giả",
      "descEn": "Exclude examples, fixtures, docs, node_modules, and dist; verify placeholders versus real credentials.",
      "descVi": "Loại trừ example, fixture, docs, node_modules và dist; phân biệt placeholder với credential thật."
    },
    {
      "number": 4,
      "titleEn": "Run dependency audit",
      "titleVi": "Audit dependency",
      "descEn": "Use npm audit or pip audit where applicable, and record unavailable tooling instead of inventing results.",
      "descVi": "Dùng npm audit hoặc pip audit khi phù hợp và ghi rõ công cụ không có thay vì bịa kết quả."
    },
    {
      "number": 5,
      "titleEn": "Search vuln patterns",
      "titleVi": "Tìm pattern nguy hiểm",
      "descEn": "Load vulnerability patterns for SQL injection, XSS, command injection, path traversal, insecure randomness, eval, and dynamic Function.",
      "descVi": "Nạp pattern cho SQL injection, XSS, command injection, path traversal, random không an toàn, eval và Function động."
    },
    {
      "number": 6,
      "titleEn": "Read context",
      "titleVi": "Đọc ngữ cảnh",
      "descEn": "For each dangerous match, read nearby code and decide whether it is exploitable or a false positive.",
      "descVi": "Với mỗi match nguy hiểm, đọc code xung quanh và quyết định có khai thác được hay chỉ là dương tính giả."
    },
    {
      "number": 7,
      "titleEn": "Check .env exposure",
      "titleVi": "Kiểm tra lộ .env",
      "descEn": "Check tracked .env files and .gitignore coverage for environment-file patterns.",
      "descVi": "Kiểm tra file .env có bị git track không và .gitignore có pattern che file môi trường không."
    },
    {
      "number": 8,
      "titleEn": "Report findings",
      "titleVi": "Báo cáo finding",
      "descEn": "Output a chat Markdown report with severity table, findings, fixes, and immediate rotation advice for real credentials.",
      "descVi": "Xuất báo cáo Markdown trong chat có bảng severity, finding, cách sửa và khuyến nghị rotate ngay nếu có credential thật."
    }
  ],
  "corePrinciplesEn": [
    "Secret scanning always runs first",
    "Real credentials require immediate rotation, not just code changes",
    "No dependency-audit output means unavailable, not clean",
    "This is a lightweight scan, not penetration testing or compliance certification"
  ],
  "corePrinciplesVi": [
    "Quét secret luôn chạy đầu tiên",
    "Credential thật cần rotate ngay, không chỉ sửa code",
    "Không có output audit dependency nghĩa là công cụ không khả dụng, không phải sạch",
    "Đây là scan nhẹ, không phải pentest hoặc chứng nhận compliance"
  ],
  "workflowModes": [
    {
      "flag": "default / --full",
      "modeEn": "Full lightweight scan",
      "modeVi": "Scan nhẹ đầy đủ",
      "research": "Secrets, deps, patterns, .env",
      "redTeam": "OWASP-style patterns",
      "validation": "Report only"
    },
    {
      "flag": "--secrets-only",
      "modeEn": "Secrets only",
      "modeVi": "Chỉ secret",
      "research": "Secret regex patterns",
      "redTeam": "Credential exposure",
      "validation": "Report only"
    },
    {
      "flag": "--deps-only",
      "modeEn": "Dependencies only",
      "modeVi": "Chỉ dependency",
      "research": "npm audit or pip audit",
      "redTeam": "Known advisories",
      "validation": "Report only"
    }
  ],
  "outputFlags": [
    {
      "flag": "--secrets-only",
      "titleEn": "Secrets scan",
      "titleVi": "Quét secret",
      "descEn": "Limits the run to secret and credential detection.",
      "descVi": "Giới hạn lượt chạy vào tìm secret và credential.",
      "exampleCommand": "/ak:security-scan --secrets-only"
    },
    {
      "flag": "--deps-only",
      "titleEn": "Dependency audit",
      "titleVi": "Audit dependency",
      "descEn": "Limits the run to dependency vulnerabilities.",
      "descVi": "Giới hạn lượt chạy vào lỗ hổng dependency.",
      "exampleCommand": "/ak:security-scan --deps-only"
    },
    {
      "flag": "--full",
      "titleEn": "Full scan",
      "titleVi": "Scan đầy đủ",
      "descEn": "Runs the full lightweight scanner over the selected scope.",
      "descVi": "Chạy bộ scan nhẹ đầy đủ trên phạm vi đã chọn.",
      "exampleCommand": "/ak:security-scan src/api --full"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Default full scan",
      "labelVi": "Scan đầy đủ mặc định",
      "command": "/ak:security-scan",
      "whenEn": "Use when asked to security scan, check for secrets, audit security, or prepare a project for release.",
      "whenVi": "Dùng khi cần security scan, kiểm tra secret, audit bảo mật hoặc chuẩn bị release dự án.",
      "expectedEn": "Detects the project stack, scans secrets first, runs applicable dependency audits, checks vulnerable code patterns and .env exposure, then returns a Markdown report with severities and fixes.",
      "expectedVi": "Nhận diện stack dự án, quét secret trước, chạy audit dependency phù hợp, kiểm tra pattern code dễ tổn thương và lộ .env, rồi trả báo cáo Markdown có severity và cách sửa.",
      "recommended": true
    },
    {
      "labelEn": "Secrets only",
      "labelVi": "Chỉ quét secret",
      "command": "/ak:security-scan --secrets-only",
      "whenEn": "Use when the immediate risk is leaked credentials, API keys, private keys, connection strings, or hardcoded passwords.",
      "whenVi": "Dùng khi rủi ro trước mắt là credential, API key, private key, connection string hoặc mật khẩu hardcode bị lộ.",
      "expectedEn": "Searches secret-pattern references, excludes examples and build artifacts, verifies placeholders versus real credentials, redacts evidence, and recommends immediate rotation for real secrets.",
      "expectedVi": "Tìm theo reference pattern secret, loại trừ example và artifact build, phân biệt placeholder với credential thật, che bằng chứng và khuyến nghị rotate ngay secret thật."
    },
    {
      "labelEn": "Dependencies only",
      "labelVi": "Chỉ audit dependency",
      "command": "/ak:security-scan --deps-only",
      "whenEn": "Use when you only need dependency advisory coverage for a Node.js or Python project.",
      "whenVi": "Dùng khi chỉ cần kiểm tra cảnh báo dependency cho dự án Node.js hoặc Python.",
      "expectedEn": "Runs the applicable npm audit or pip audit command, treats unavailable tooling as unavailable rather than clean, and categorizes dependency findings by severity.",
      "expectedVi": "Chạy lệnh npm audit hoặc pip audit phù hợp, xem công cụ không khả dụng là không khả dụng chứ không phải sạch, và phân loại finding dependency theo severity."
    },
    {
      "labelEn": "Scoped directory",
      "labelVi": "Scan thư mục",
      "command": "/ak:security-scan src/api/",
      "whenEn": "Use for a specific high-risk boundary such as API handlers, auth code, or payment integration paths.",
      "whenVi": "Dùng cho ranh giới rủi ro cao cụ thể như API handler, code auth hoặc đường tích hợp thanh toán.",
      "expectedEn": "Limits scanning to the requested scope while still following the security-scan workflow: secrets first, dependency checks when applicable, dangerous pattern review, .env exposure check, and report-only recommendations.",
      "expectedVi": "Giới hạn scan trong phạm vi yêu cầu nhưng vẫn theo workflow security-scan: quét secret trước, kiểm tra dependency khi phù hợp, rà pattern nguy hiểm, kiểm tra lộ .env và chỉ báo cáo khuyến nghị."
    }
  ],
  "reportOutput": {
    "titleEn": "Security Scan Report",
    "titleVi": "Báo cáo Security Scan",
    "patternEn": "Chat Markdown report; cook auto mode may save to CK_REPORTS_PATH or plans/reports/security-scan-{date}.md",
    "patternVi": "Báo cáo Markdown trong chat; cook auto mode có thể lưu vào CK_REPORTS_PATH hoặc plans/reports/security-scan-{date}.md",
    "descEn": "Summary table by category and severity, concrete findings, redacted evidence, and recommendations.",
    "descVi": "Bảng tổng hợp theo nhóm và severity, finding cụ thể, bằng chứng đã che và khuyến nghị."
  }
};

export default data;

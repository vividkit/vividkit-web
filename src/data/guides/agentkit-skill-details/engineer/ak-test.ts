import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-test",
  "command": "/ak:test",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:test — Engineering Test and QA",
    "titleVi": "/ak:test — Test và QA kỹ thuật",
    "taglineEn": "Runs and designs unit, integration, e2e, UI, coverage, build, visual regression, suite-creation, suite-optimization, and deceptive-test audit workflows for engineering quality.",
    "taglineVi": "Chạy và thiết kế workflow unit, integration, e2e, UI, coverage, build, visual regression, tạo test suite, tối ưu test suite và audit test yếu/gian lận cho chất lượng kỹ thuật."
  },
  "hardGate": {
    "type": "critical",
    "titleEn": "Never ignore failing tests",
    "titleVi": "Không bao giờ bỏ qua test lỗi",
    "contentEn": "Fix root causes, not symptoms. Do not mock, cheat, comment out, or skip tests merely to pass a build; failing tests remain blockers unless the user explicitly changes the scope.",
    "contentVi": "Sửa nguyên nhân gốc, không chữa triệu chứng. Không mock giả, lách, comment out hoặc skip test chỉ để build xanh; test lỗi vẫn là blocker trừ khi người dùng đổi scope rõ ràng."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Select operation",
      "titleVi": "Chọn thao tác",
      "descEn": "With no arguments, present default, ui, create, optimize, and audit options; with context, proceed to the matching test scope.",
      "descVi": "Khi không có tham số, đưa lựa chọn default, ui, create, optimize và audit; khi có ngữ cảnh, đi thẳng vào phạm vi test phù hợp."
    },
    {
      "number": 2,
      "titleEn": "Identify scope",
      "titleVi": "Xác định phạm vi",
      "descEn": "Use recent changes, requirements, coverage thresholds, UI needs, build concerns, or CI pain to choose the workflow.",
      "descVi": "Dùng thay đổi gần đây, yêu cầu, ngưỡng coverage, nhu cầu UI, lo ngại build hoặc vấn đề CI để chọn workflow."
    },
    {
      "number": 3,
      "titleEn": "Load workflow reference",
      "titleVi": "Nạp workflow reference",
      "descEn": "Load code execution, UI testing, report format, create-suite, optimize-suite, or audit-suite guidance as appropriate.",
      "descVi": "Nạp hướng dẫn code execution, UI testing, report format, create-suite, optimize-suite hoặc audit-suite theo trường hợp."
    },
    {
      "number": 4,
      "titleEn": "Run early checks",
      "titleVi": "Chạy kiểm tra sớm",
      "descEn": "Run typecheck or analyze commands first when they catch syntax and static errors before slower suites.",
      "descVi": "Chạy typecheck hoặc analyze trước khi chúng bắt lỗi cú pháp/tĩnh nhanh hơn các suite chậm."
    },
    {
      "number": 5,
      "titleEn": "Execute tests",
      "titleVi": "Chạy test",
      "descEn": "Use the project runner for unit, integration, e2e, coverage, build, or UI/browser verification.",
      "descVi": "Dùng runner của dự án cho unit, integration, e2e, coverage, build hoặc kiểm UI/browser."
    },
    {
      "number": 6,
      "titleEn": "Analyze failures",
      "titleVi": "Phân tích lỗi",
      "descEn": "Focus on failing tests, error chains, logs, screenshots, console errors, and root causes rather than pass counts alone.",
      "descVi": "Tập trung vào test lỗi, chuỗi lỗi, log, screenshot, console error và nguyên nhân gốc thay vì chỉ đếm pass."
    },
    {
      "number": 7,
      "titleEn": "Create or improve suites",
      "titleVi": "Tạo hoặc cải thiện suite",
      "descEn": "For create, optimize, or audit, scout coverage, CI, history, and docs, then implement coverage, speed, or trust improvements.",
      "descVi": "Với create, optimize hoặc audit, scout coverage, CI, lịch sử và docs, rồi triển khai cải thiện coverage, tốc độ hoặc độ tin cậy."
    },
    {
      "number": 8,
      "titleEn": "Report QA result",
      "titleVi": "Báo kết quả QA",
      "descEn": "Produce a structured report with results, coverage, failed tests, performance/build status, recommendations, and team-mode completion state when relevant.",
      "descVi": "Tạo báo cáo có cấu trúc gồm kết quả, coverage, test lỗi, trạng thái hiệu năng/build, khuyến nghị và trạng thái hoàn tất team-mode khi liên quan."
    }
  ],
  "corePrinciplesEn": [
    "Test behavior, not plumbing",
    "Critical paths need happy-path and error coverage",
    "Tests must be deterministic, isolated, and reproducible",
    "UI QA includes screenshots, responsive checks, accessibility, forms, and console errors"
  ],
  "corePrinciplesVi": [
    "Test hành vi, không test phần dây nối vô nghĩa",
    "Luồng quan trọng cần cả happy path và lỗi",
    "Test phải deterministic, độc lập và chạy lại được",
    "QA UI gồm screenshot, responsive, accessibility, form và console error"
  ],
  "expertiseAreasEn": [
    "unit and integration",
    "e2e",
    "UI/browser testing",
    "coverage",
    "suite creation",
    "CI optimization",
    "test audit"
  ],
  "expertiseAreasVi": [
    "unit và integration",
    "e2e",
    "test UI/browser",
    "coverage",
    "tạo suite",
    "tối ưu CI",
    "audit test"
  ],
  "promptExamples": [
    {
      "labelEn": "Run scoped tests",
      "labelVi": "Chạy test theo scope",
      "command": "/ak:test checkout payment flow",
      "whenEn": "A feature or bug fix needs unit/integration/e2e validation.",
      "whenVi": "Một tính năng hoặc bug fix cần kiểm bằng unit/integration/e2e.",
      "expectedEn": "Finds the right runner, runs relevant suites, analyzes failures, and reports evidence.",
      "expectedVi": "Tìm runner phù hợp, chạy suite liên quan, phân tích lỗi và báo bằng chứng.",
      "recommended": true
    },
    {
      "labelEn": "UI test",
      "labelVi": "Test UI",
      "command": "/ak:test ui http://localhost:3000/checkout",
      "whenEn": "A live UI needs visual, responsive, accessibility, form, and console-error checks.",
      "whenVi": "Một UI đang chạy cần kiểm visual, responsive, accessibility, form và console error.",
      "expectedEn": "Uses browser-capable testing and returns a structured UI QA report.",
      "expectedVi": "Dùng kiểm thử có browser và trả báo cáo QA UI có cấu trúc."
    },
    {
      "labelEn": "Create suite",
      "labelVi": "Tạo test suite",
      "command": "/ak:test create auth module --ultra",
      "whenEn": "A feature area lacks meaningful tests and needs a coverage design.",
      "whenVi": "Một vùng tính năng thiếu test có ý nghĩa và cần thiết kế coverage.",
      "expectedEn": "Runs best-of-5 verifier analysis for suite design, then implements the selected suite once.",
      "expectedVi": "Chạy phân tích best-of-5 verifier cho thiết kế suite rồi triển khai suite được chọn một lần."
    },
    {
      "labelEn": "Optimize suite",
      "labelVi": "Tối ưu suite",
      "command": "/ak:test optimize CI suite --interview",
      "whenEn": "CI is too slow or expensive and changes need user approval.",
      "whenVi": "CI quá chậm/tốn kém và thay đổi cần người dùng duyệt.",
      "expectedEn": "Lists proposed optimizations with reasons and applies only approved change groups.",
      "expectedVi": "Liệt kê đề xuất tối ưu kèm lý do và chỉ áp dụng nhóm thay đổi đã được duyệt."
    },
    {
      "labelEn": "Audit weak tests",
      "labelVi": "Audit test yếu",
      "command": "/ak:test audit frontend tests --advice",
      "whenEn": "The suite may contain skipped, deceptive, redundant, outdated, or security-gap tests.",
      "whenVi": "Suite có thể có test bị skip, gian lận, trùng lặp, lỗi thời hoặc thiếu lỗ hổng bảo mật.",
      "expectedEn": "Uses parallel scout/audit evidence and Kongming checkpoints before repairs.",
      "expectedVi": "Dùng bằng chứng scout/audit song song và các điểm cố vấn Kongming trước khi sửa."
    }
  ],
  "outputFlags": [
    {
      "flag": "--advice",
      "titleEn": "Kongming advice",
      "titleVi": "Cố vấn Kongming",
      "descEn": "Adds advisory-only checkpoints after analysis, before suite/CI edits, and when stuck.",
      "descVi": "Thêm điểm cố vấn sau phân tích, trước khi sửa suite/CI và khi bị kẹt.",
      "exampleCommand": "/ak:test audit suite --advice"
    },
    {
      "flag": "--ultra",
      "titleEn": "Ultra verifier",
      "titleVi": "Ultra verifier",
      "descEn": "For create, optimize, or audit, runs five read-only candidates and a strongest-model verifier before implementation.",
      "descVi": "Với create, optimize hoặc audit, chạy năm ứng viên read-only và một verifier mạnh trước khi triển khai.",
      "exampleCommand": "/ak:test create billing --ultra"
    },
    {
      "flag": "--interview",
      "titleEn": "Interview changes",
      "titleVi": "Phỏng vấn thay đổi",
      "descEn": "Before applying changes, presents proposed test/CI edits by group and applies only approved groups.",
      "descVi": "Trước khi áp dụng, trình bày nhóm sửa test/CI và chỉ áp dụng nhóm được duyệt.",
      "exampleCommand": "/ak:test optimize CI --interview"
    }
  ],
  "workflowModes": [
    {
      "flag": "default",
      "modeEn": "Code tests",
      "modeVi": "Test code",
      "research": "Changed scope",
      "redTeam": "Failures/root cause",
      "validation": "Runner + coverage"
    },
    {
      "flag": "ui",
      "modeEn": "UI tests",
      "modeVi": "Test UI",
      "research": "Page state",
      "redTeam": "Console/a11y/responsive",
      "validation": "Browser evidence"
    },
    {
      "flag": "create",
      "modeEn": "Create suite",
      "modeVi": "Tạo suite",
      "research": "Coverage matrix",
      "redTeam": "Uncovered contracts",
      "validation": "New meaningful tests"
    },
    {
      "flag": "optimize",
      "modeEn": "Optimize suite",
      "modeVi": "Tối ưu suite",
      "research": "CI/history/docs",
      "redTeam": "Lost coverage risk",
      "validation": "Equal safety faster"
    },
    {
      "flag": "audit",
      "modeEn": "Audit suite",
      "modeVi": "Audit suite",
      "research": "Suite + CI",
      "redTeam": "Weak/deceptive tests",
      "validation": "Trust repairs"
    }
  ]
};

export default data;

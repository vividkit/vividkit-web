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
  "invocation": {
    "syntax": "/ak:test [context] OR /ak:test ui [url] OR /ak:test <create|optimize|audit> [scope] [--advice] [--ultra] [--interview]",
    "arguments": [
      {
        "token": "[context]",
        "titleEn": "Validation context",
        "titleVi": "Ngữ cảnh validation",
        "descEn": "Describes the change, requirement, failing area, affected module, command, coverage threshold, or time boundary that should determine the smallest useful code-test scope. Omit it to choose an operation interactively.",
        "descVi": "Mô tả thay đổi, yêu cầu, vùng lỗi, module ảnh hưởng, command, ngưỡng coverage hoặc giới hạn thời gian để xác định phạm vi test code nhỏ nhất hữu ích. Bỏ trống để chọn thao tác tương tác.",
        "required": false,
        "exampleCommand": "/ak:test \"Validate the session expiry change: run typecheck, focused session tests, affected integration tests, and coverage for the changed module.\""
      }
    ],
    "subcommands": [
      {
        "name": "ui",
        "syntax": "/ak:test ui [url]",
        "titleEn": "UI validation",
        "titleVi": "Validation UI",
        "descEn": "Runs the browser-oriented workflow for a website or app screen, including page discovery, screenshots, responsive behavior, accessibility, forms, console findings, and selected flows.",
        "descVi": "Chạy workflow thiên về browser cho website hoặc màn hình app, gồm khám phá trang, screenshot, responsive, accessibility, form, lỗi console và flow được chọn.",
        "arguments": [
          {
            "token": "[url]",
            "titleEn": "Page URL",
            "titleVi": "URL trang",
            "descEn": "Target page to inspect. Include expected state, viewport, authentication approach, and data-safety limits in the request when they matter.",
            "descVi": "Trang cần kiểm. Thêm trạng thái mong đợi, viewport, cách auth và giới hạn an toàn dữ liệu trong yêu cầu khi quan trọng.",
            "required": false,
            "exampleCommand": "/ak:test ui http://localhost:3000/settings"
          }
        ],
        "outcomeEn": "Structured UI QA evidence with tested pages and flows, screenshot paths, console findings, viewports, skipped browser checks, critical issues, and limits.",
        "outcomeVi": "Bằng chứng QA UI có cấu trúc gồm trang và flow đã test, đường dẫn screenshot, phát hiện console, viewport, browser check bị bỏ qua, vấn đề nghiêm trọng và giới hạn.",
        "exampleCommand": "/ak:test ui http://localhost:3000/settings"
      },
      {
        "name": "create",
        "syntax": "/ak:test create [scope] [--advice] [--ultra] [--interview]",
        "titleEn": "Create suite",
        "titleVi": "Tạo suite",
        "descEn": "Scouts code and docs, builds a coverage matrix, then creates or extends tests for a feature or workflow without testing irrelevant lines just to raise a percentage.",
        "descVi": "Scout code và docs, lập ma trận coverage, rồi tạo hoặc mở rộng test cho feature hay workflow mà không test dòng không liên quan chỉ để tăng phần trăm.",
        "arguments": [
          {
            "token": "[scope]",
            "titleEn": "Coverage scope",
            "titleVi": "Phạm vi coverage",
            "descEn": "Feature, workflow, critical path, existing framework, or project threshold the new suite should cover.",
            "descVi": "Feature, workflow, luồng quan trọng, framework hiện có hoặc ngưỡng project mà suite mới cần bao phủ.",
            "required": false,
            "exampleCommand": "/ak:test create \"Cover the account recovery workflow\" --interview"
          }
        ],
        "options": [
          {
            "token": "--advice",
            "titleEn": "Advisory checkpoints",
            "titleVi": "Checkpoint cố vấn",
            "descEn": "Adds Kongming advice after analysis, before suite or CI edits, and when stuck. Advice cannot bypass failing-test rules.",
            "descVi": "Thêm cố vấn Kongming sau phân tích, trước khi sửa suite hoặc CI, và khi kẹt. Advice không được vượt quy tắc test lỗi.",
            "exampleCommand": "/ak:test create billing --advice"
          },
          {
            "token": "--ultra",
            "titleEn": "Five-candidate design",
            "titleVi": "Thiết kế năm ứng viên",
            "descEn": "Runs five read-only candidates in one parallel wave and has a verifier select one suite design unchanged or reject all.",
            "descVi": "Chạy năm ứng viên read-only trong một wave song song và để verifier chọn nguyên một thiết kế suite hoặc loại tất cả.",
            "exampleCommand": "/ak:test create auth module --ultra"
          },
          {
            "token": "--interview",
            "titleEn": "Approve changes",
            "titleVi": "Duyệt thay đổi",
            "descEn": "Presents proposed test and CI change groups before applying them, then applies only approved groups.",
            "descVi": "Trình bày các nhóm sửa test và CI trước khi áp dụng, rồi chỉ áp dụng nhóm được duyệt.",
            "exampleCommand": "/ak:test create \"Cover account recovery\" --interview"
          }
        ],
        "outcomeEn": "A meaningful suite or extension tied to a coverage matrix, with evidence that critical behavior and error paths are covered.",
        "outcomeVi": "Suite hoặc phần mở rộng có ý nghĩa gắn với ma trận coverage, kèm bằng chứng rằng behavior quan trọng và đường lỗi được bao phủ.",
        "exampleCommand": "/ak:test create \"Cover the account recovery workflow\" --interview"
      },
      {
        "name": "optimize",
        "syntax": "/ak:test optimize [scope] [--advice] [--ultra] [--interview]",
        "titleEn": "Optimize suite",
        "titleVi": "Tối ưu suite",
        "descEn": "Analyzes CI, git history, code, and docs to reduce test time or cost while preserving safety-critical coverage.",
        "descVi": "Phân tích CI, lịch sử git, code và docs để giảm thời gian hoặc chi phí test mà vẫn giữ coverage quan trọng về an toàn.",
        "arguments": [
          {
            "token": "[scope]",
            "titleEn": "Optimization scope",
            "titleVi": "Phạm vi tối ưu",
            "descEn": "Slow job, CI timing evidence, safety-critical group, or allowed workflow change to optimize.",
            "descVi": "Job chậm, bằng chứng timing CI, nhóm quan trọng về an toàn hoặc thay đổi workflow được phép tối ưu.",
            "required": false,
            "exampleCommand": "/ak:test optimize \"Reduce pull-request CI time\" --advice"
          }
        ],
        "options": [
          {
            "token": "--advice",
            "titleEn": "Advisory checkpoints",
            "titleVi": "Checkpoint cố vấn",
            "descEn": "Adds Kongming advice after analysis, before suite or CI edits, and when stuck. Advice cannot approve lost coverage.",
            "descVi": "Thêm cố vấn Kongming sau phân tích, trước khi sửa suite hoặc CI, và khi kẹt. Advice không thể duyệt mất coverage.",
            "exampleCommand": "/ak:test optimize CI suite --advice"
          },
          {
            "token": "--ultra",
            "titleEn": "Five-candidate plan",
            "titleVi": "Kế hoạch năm ứng viên",
            "descEn": "Runs five read-only candidates in one parallel wave and has a verifier select one optimization plan unchanged or reject all.",
            "descVi": "Chạy năm ứng viên read-only trong một wave song song và để verifier chọn nguyên một kế hoạch tối ưu hoặc loại tất cả.",
            "exampleCommand": "/ak:test optimize CI suite --ultra"
          },
          {
            "token": "--interview",
            "titleEn": "Approve changes",
            "titleVi": "Duyệt thay đổi",
            "descEn": "Presents proposed test and CI change groups before applying them, then applies only approved groups.",
            "descVi": "Trình bày các nhóm sửa test và CI trước khi áp dụng, rồi chỉ áp dụng nhóm được duyệt.",
            "exampleCommand": "/ak:test optimize CI suite --interview"
          }
        ],
        "outcomeEn": "A faster or cheaper suite with unchanged safety guarantees, change list, and evidence for any CI workflow edits.",
        "outcomeVi": "Suite nhanh hơn hoặc rẻ hơn với bảo đảm an toàn không đổi, danh sách thay đổi và bằng chứng cho mọi sửa workflow CI.",
        "exampleCommand": "/ak:test optimize \"Reduce pull-request CI time\" --advice"
      },
      {
        "name": "audit",
        "syntax": "/ak:test audit [scope] [--advice] [--ultra] [--interview]",
        "titleEn": "Audit suite",
        "titleVi": "Audit suite",
        "descEn": "Searches the suite and CI for deceptive, disabled, unfinished, ineffective, redundant, outdated, or unsafe tests, then repairs evidence-backed findings.",
        "descVi": "Tìm trong suite và CI các test gian lận, bị tắt, chưa xong, kém hiệu quả, trùng lặp, lỗi thời hoặc không an toàn, rồi sửa finding có bằng chứng.",
        "arguments": [
          {
            "token": "[scope]",
            "titleEn": "Audit scope",
            "titleVi": "Phạm vi audit",
            "descEn": "Suite, CI area, trust concern, known skip, or security-sensitive path to inspect.",
            "descVi": "Suite, vùng CI, lo ngại độ tin cậy, skip đã biết hoặc path nhạy cảm bảo mật cần kiểm.",
            "required": false,
            "exampleCommand": "/ak:test audit \"Check skipped and ineffective authorization tests\" --ultra"
          }
        ],
        "options": [
          {
            "token": "--advice",
            "titleEn": "Advisory checkpoints",
            "titleVi": "Checkpoint cố vấn",
            "descEn": "Adds Kongming advice after findings, before repairs, and when stuck. Advice cannot replace evidence.",
            "descVi": "Thêm cố vấn Kongming sau finding, trước khi sửa, và khi kẹt. Advice không thay thế bằng chứng.",
            "exampleCommand": "/ak:test audit frontend tests --advice"
          },
          {
            "token": "--ultra",
            "titleEn": "Five-candidate audit",
            "titleVi": "Audit năm ứng viên",
            "descEn": "Runs five read-only candidates and returns the evidence-validated, deduplicated union of findings before repairs.",
            "descVi": "Chạy năm ứng viên read-only và trả union finding đã xác minh bằng bằng chứng, loại trùng trước khi sửa.",
            "exampleCommand": "/ak:test audit authorization tests --ultra"
          },
          {
            "token": "--interview",
            "titleEn": "Approve repairs",
            "titleVi": "Duyệt sửa chữa",
            "descEn": "Presents proposed test and CI repair groups before applying them, then applies only approved groups.",
            "descVi": "Trình bày các nhóm sửa test và CI trước khi áp dụng, rồi chỉ áp dụng nhóm được duyệt.",
            "exampleCommand": "/ak:test audit frontend tests --interview"
          }
        ],
        "outcomeEn": "Evidence-backed weak-test findings, deduplicated repair plan, applied approved repairs, and remaining trust or product-root-cause handoff notes.",
        "outcomeVi": "Finding test yếu có bằng chứng, kế hoạch sửa đã loại trùng, các sửa được duyệt đã áp dụng và ghi chú bàn giao về độ tin cậy hoặc nguyên nhân gốc product còn lại.",
        "exampleCommand": "/ak:test audit \"Check skipped and ineffective authorization tests\" --ultra"
      }
    ]
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
      "labelEn": "Run changed-scope tests",
      "labelVi": "Chạy test theo phạm vi đổi",
      "command": "/ak:test checkout payment flow",
      "whenEn": "Use after implementation or a bug fix when a validation suite should run for a concrete scope.",
      "whenVi": "Dùng sau khi triển khai hoặc sửa lỗi khi cần chạy suite kiểm thử cho một phạm vi cụ thể.",
      "expectedEn": "Identifies the relevant scope, runs early typecheck/analyze commands when useful, executes the matching project suites, treats failures as blockers, and returns a structured QA summary.",
      "expectedVi": "Xác định phạm vi liên quan, chạy typecheck/analyze sớm khi hữu ích, chạy suite phù hợp của dự án, xem test lỗi là blocker và trả báo cáo QA có cấu trúc.",
      "recommended": true
    },
    {
      "labelEn": "Check a live UI",
      "labelVi": "Kiểm UI đang chạy",
      "command": "/ak:test ui http://localhost:3000/checkout",
      "whenEn": "Use when a website or app screen needs visual, responsive, accessibility, form, or console-error validation.",
      "whenVi": "Dùng khi một website hoặc màn hình app cần kiểm visual, responsive, accessibility, form hoặc console error.",
      "expectedEn": "Loads the UI testing workflow, uses browser-capable tooling or project-native browser tests, captures the relevant evidence, and reports UI QA findings in the standard format.",
      "expectedVi": "Nạp workflow test UI, dùng công cụ có browser hoặc browser test gốc của dự án, thu bằng chứng liên quan và báo phát hiện QA UI theo format chuẩn."
    },
    {
      "labelEn": "Create missing coverage",
      "labelVi": "Tạo coverage còn thiếu",
      "command": "/ak:test create auth module --ultra",
      "whenEn": "Use when a feature area lacks meaningful tests and needs a designed validation suite.",
      "whenVi": "Dùng khi một vùng tính năng thiếu test có ý nghĩa và cần thiết kế suite kiểm thử.",
      "expectedEn": "Scouts the codebase and docs, builds a coverage matrix, runs the ultra best-of-5 verifier for the design, then implements the selected test suite once.",
      "expectedVi": "Scout codebase và docs, lập ma trận coverage, chạy ultra best-of-5 verifier cho thiết kế rồi triển khai suite test được chọn một lần."
    },
    {
      "labelEn": "Optimize CI testing",
      "labelVi": "Tối ưu test CI",
      "command": "/ak:test optimize CI suite --interview",
      "whenEn": "Use when test cost or runtime is high and suite/CI changes should be approved before applying.",
      "whenVi": "Dùng khi chi phí hoặc thời gian chạy test cao và thay đổi suite/CI cần được duyệt trước khi áp dụng.",
      "expectedEn": "Parallel-scouts CI/CD, git history, codebase, and docs; proposes speed or cost reductions that preserve safety; and applies only approved change groups.",
      "expectedVi": "Scout song song CI/CD, lịch sử git, codebase và docs; đề xuất giảm thời gian hoặc chi phí mà vẫn giữ an toàn; và chỉ áp dụng nhóm thay đổi đã duyệt."
    },
    {
      "labelEn": "Audit weak tests",
      "labelVi": "Audit test yếu",
      "command": "/ak:test audit frontend tests --advice",
      "whenEn": "Use when a suite may contain skipped, deceptive, redundant, outdated, unfinished, or security-gap tests.",
      "whenVi": "Dùng khi suite có thể có test bị skip, gian lận, trùng lặp, lỗi thời, chưa hoàn tất hoặc thiếu kiểm lỗ hổng bảo mật.",
      "expectedEn": "Parallel-scouts the suite and CI, gathers evidence for weak or deceptive tests, asks Kongming for advisory checkpoints, then repairs validated issues without bypassing failing-test gates.",
      "expectedVi": "Scout song song suite và CI, thu bằng chứng về test yếu hoặc gian lận, hỏi Kongming ở các điểm cố vấn rồi sửa vấn đề đã xác thực mà không lách gate test lỗi."
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

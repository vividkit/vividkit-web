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
        "descEn": "Analyzes CI, git history, code, and docs to reduce test time or cost while preserving safety-critical coverage. For repository-owned manifests it uses ak test optimize for deterministic ranked test selection; mandatory policy checks always stay.",
        "descVi": "Phân tích CI, lịch sử git, code và docs để giảm thời gian hoặc chi phí test mà vẫn giữ coverage quan trọng về an toàn. Với manifest do repo quản lý, dùng ak test optimize để chọn test theo thứ hạng một cách tất định; các check bắt buộc theo policy luôn được giữ.",
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
        "outcomeEn": "A faster or cheaper suite with unchanged safety guarantees, change list, and evidence for any CI workflow edits. Each claimed saving carries an explain-the-number verdict; an inconclusive result is not reported as a gain.",
        "outcomeVi": "Suite nhanh hơn hoặc rẻ hơn với bảo đảm an toàn không đổi, danh sách thay đổi và bằng chứng cho mọi sửa workflow CI. Mỗi mức tiết kiệm được nêu đều kèm kết luận explain-the-number; kết quả chưa kết luận được thì không được báo là cải thiện.",
        "exampleCommand": "/ak:test optimize \"Reduce pull-request CI time\" --advice"
      },
      {
        "name": "audit",
        "syntax": "/ak:test audit [scope] [--advice] [--ultra] [--interview]",
        "titleEn": "Audit suite",
        "titleVi": "Audit suite",
        "descEn": "Searches the suite and CI for deceptive, disabled, unfinished, ineffective, redundant, outdated, or unsafe tests, then reports ranked findings with proposed repairs. Audit alone does not authorize edits; repairs need separate suite-repair authority.",
        "descVi": "Tìm trong suite và CI các test gian lận, bị tắt, chưa xong, kém hiệu quả, trùng lặp, lỗi thời hoặc không an toàn, rồi báo finding đã xếp hạng kèm đề xuất sửa. Riêng audit không cho phép sửa; muốn sửa cần được cấp quyền sửa suite riêng.",
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
        "outcomeEn": "Evidence-backed weak-test findings, a deduplicated repair proposal, repairs applied only when suite repair was separately authorized, and remaining trust or product-root-cause handoff notes.",
        "outcomeVi": "Finding test yếu có bằng chứng, đề xuất sửa đã loại trùng, chỉ áp dụng sửa khi đã được cấp quyền sửa suite riêng, và ghi chú bàn giao về độ tin cậy hoặc nguyên nhân gốc product còn lại.",
        "exampleCommand": "/ak:test audit \"Check skipped and ineffective authorization tests\" --ultra"
      }
    ]
  },
  "hardGate": {
    "type": "critical",
    "titleEn": "A failed test remains failed",
    "titleVi": "Test lỗi vẫn là test lỗi",
    "contentEn": "Every observed failure is investigated. The skill does not weaken assertions or policy, add dishonest mocks, skip failures, or manipulate coverage to make a build appear green. It reports the failure and routes root-cause work to ak-debug and ak-fix.",
    "contentVi": "Mọi lỗi quan sát được đều được điều tra. Skill không nới assertion hay policy, không thêm mock gian lận, không skip lỗi và không chỉnh coverage để build trông xanh. Skill báo lỗi và chuyển việc tìm nguyên nhân gốc sang ak-debug và ak-fix."
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
      "descEn": "Resolve repository policy, the accepted contract and its authority, changed scope, and risk; name the suitable existing check and the missing evidence before adding tests or broad checks. A covered refactor may need no new tests.",
      "descVi": "Xác định policy của repo, hợp đồng hành vi đã chấp nhận và nguồn căn cứ, phạm vi thay đổi và rủi ro; nêu check có sẵn phù hợp và bằng chứng còn thiếu trước khi thêm test hoặc chạy check diện rộng. Refactor đã có test bao phủ có thể không cần test mới."
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
      "titleEn": "Start with the smallest check",
      "titleVi": "Bắt đầu từ check nhỏ nhất",
      "descEn": "Start with the smallest check that can establish the affected contract, using the repository's own commands and configured runners, then broaden to affected callers and mandatory gates.",
      "descVi": "Bắt đầu từ check nhỏ nhất đủ để xác lập hợp đồng hành vi bị ảnh hưởng, dùng đúng lệnh và runner repo đã cấu hình, rồi mở rộng sang phần gọi liên quan và các gate bắt buộc."
    },
    {
      "number": 5,
      "titleEn": "Execute tests",
      "titleVi": "Chạy test",
      "descEn": "Use the project runner for unit, integration, e2e, coverage, build, or UI/browser verification. Reuse earlier results only when their source, inputs, configuration, and environment still match; mandatory gates always run.",
      "descVi": "Dùng runner của dự án cho unit, integration, e2e, coverage, build hoặc kiểm UI/browser. Chỉ dùng lại kết quả cũ khi source, input, cấu hình và môi trường vẫn khớp; gate bắt buộc luôn được chạy."
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
      "descEn": "For create, optimize, or audit, inspect the affected coverage, CI, history, and docs. Create and optimize then implement coverage or speed improvements; audit reports findings and proposed repairs and edits only with separate suite-repair authority.",
      "descVi": "Với create, optimize hoặc audit, xem xét coverage, CI, lịch sử và docs bị ảnh hưởng. Create và optimize sau đó triển khai cải thiện coverage hoặc tốc độ; audit báo finding và đề xuất sửa, chỉ sửa khi được cấp quyền sửa suite riêng."
    },
    {
      "number": 8,
      "titleEn": "Report QA result",
      "titleVi": "Báo kết quả QA",
      "descEn": "Lead with the outcome and its limits: a short inline summary for a small run, or a compact evidence report with each contract, check, observed result, gap, mandatory gate, failure, coverage, cost, and cleanup when the scope needs it. Every measured speedup, regression, latency gate, or saving first goes through the seven-question explain-the-number check and gets one verdict (faster, slower, no measurable difference, or inconclusive) with its named limiter.",
      "descVi": "Mở đầu bằng kết quả và giới hạn của nó: tóm tắt ngắn ngay trong phản hồi cho lần chạy nhỏ, hoặc báo cáo bằng chứng gọn gồm từng hợp đồng hành vi, check, kết quả quan sát, khoảng trống, gate bắt buộc, lỗi, coverage, chi phí và việc dọn dẹp khi phạm vi cần. Mọi con số đo được về tăng tốc, suy giảm, ngưỡng độ trễ hay tiết kiệm phải qua bảy câu hỏi kiểm tra explain-the-number trước, rồi nhận đúng một kết luận (nhanh hơn, chậm hơn, không khác biệt đo được, hoặc chưa kết luận được) kèm yếu tố giới hạn đã nêu tên."
    }
  ],
  "corePrinciplesEn": [
    "Test what your system owns, scoped by risk, at the lowest reliable layer",
    "Never game the green build: no weakened assertions, skipped failures, or coverage tricks",
    "Reuse earlier results only when source, inputs, configuration, and environment still match",
    "A shorter suite or prompt is not proof of better delivery; measure time and cost before claiming a gain",
    "A measured number becomes a conclusion only after the explain-the-number check, and inconclusive is never a pass"
  ],
  "corePrinciplesVi": [
    "Test phần hệ thống của bạn sở hữu, khoanh phạm vi theo rủi ro, ở lớp thấp nhất còn đáng tin",
    "Không bao giờ làm build xanh giả: không nới assertion, không skip lỗi, không lách coverage",
    "Chỉ dùng lại kết quả cũ khi source, input, cấu hình và môi trường vẫn khớp",
    "Suite hay prompt ngắn hơn không chứng minh giao việc tốt hơn; phải đo thời gian và chi phí trước khi nói là cải thiện",
    "Một con số đo được chỉ thành kết luận sau khi qua kiểm tra explain-the-number, và chưa kết luận được thì không bao giờ tính là đạt"
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
      "commandVi": "/ak:test luồng thanh toán checkout",
      "whenEn": "Use after implementation or a bug fix when a validation suite should run for a concrete scope.",
      "whenVi": "Dùng sau khi triển khai hoặc sửa lỗi khi cần chạy suite kiểm thử cho một phạm vi cụ thể.",
      "expectedEn": "Identifies the affected contract and risk, starts with the smallest useful check, runs the matching project suites and mandatory gates, investigates every failure, and returns a short report that leads with the outcome and its limits.",
      "expectedVi": "Xác định hợp đồng hành vi và rủi ro bị ảnh hưởng, bắt đầu từ check nhỏ nhất hữu ích, chạy suite phù hợp của dự án cùng các gate bắt buộc, điều tra mọi lỗi và trả báo cáo ngắn mở đầu bằng kết quả cùng giới hạn của nó.",
      "recommended": true
    },
    {
      "labelEn": "Check a live UI",
      "labelVi": "Kiểm UI đang chạy",
      "command": "/ak:test ui http://localhost:3000/checkout",
      "commandVi": "/ak:test ui http://localhost:3000/checkout",
      "whenEn": "Use when a website or app screen needs visual, responsive, accessibility, form, or console-error validation.",
      "whenVi": "Dùng khi một website hoặc màn hình app cần kiểm visual, responsive, accessibility, form hoặc console error.",
      "expectedEn": "Loads the UI testing workflow, uses browser-capable tooling or project-native browser tests, captures the relevant evidence, and reports UI QA findings in the standard format.",
      "expectedVi": "Nạp workflow test UI, dùng công cụ có browser hoặc browser test gốc của dự án, thu bằng chứng liên quan và báo phát hiện QA UI theo format chuẩn."
    },
    {
      "labelEn": "Create missing coverage",
      "labelVi": "Tạo coverage còn thiếu",
      "command": "/ak:test create auth module --ultra",
      "commandVi": "/ak:test create auth module --ultra",
      "whenEn": "Use when a feature area lacks meaningful tests and needs a designed validation suite.",
      "whenVi": "Dùng khi một vùng tính năng thiếu test có ý nghĩa và cần thiết kế suite kiểm thử.",
      "expectedEn": "Scouts the codebase and docs, builds a coverage matrix, runs the ultra best-of-5 verifier for the design, then implements the selected test suite once.",
      "expectedVi": "Scout codebase và docs, lập ma trận coverage, chạy ultra best-of-5 verifier cho thiết kế rồi triển khai suite test được chọn một lần."
    },
    {
      "labelEn": "Optimize CI testing",
      "labelVi": "Tối ưu test CI",
      "command": "/ak:test optimize CI suite --interview",
      "commandVi": "/ak:test optimize CI suite --interview",
      "whenEn": "Use when test cost or runtime is high and suite/CI changes should be approved before applying.",
      "whenVi": "Dùng khi chi phí hoặc thời gian chạy test cao và thay đổi suite/CI cần được duyệt trước khi áp dụng.",
      "expectedEn": "Inspects the affected CI/CD workflows, history, code, and docs; proposes measured speed or cost reductions that preserve safety and mandatory gates; and applies only approved change groups.",
      "expectedVi": "Xem xét workflow CI/CD, lịch sử, code và docs bị ảnh hưởng; đề xuất giảm thời gian hoặc chi phí có đo đạc mà vẫn giữ an toàn và gate bắt buộc; và chỉ áp dụng nhóm thay đổi đã duyệt."
    },
    {
      "labelEn": "Audit weak tests",
      "labelVi": "Audit test yếu",
      "command": "/ak:test audit frontend tests --advice",
      "commandVi": "/ak:test audit frontend tests --advice",
      "whenEn": "Use when a suite may contain skipped, deceptive, redundant, outdated, unfinished, or security-gap tests.",
      "whenVi": "Dùng khi suite có thể có test bị skip, gian lận, trùng lặp, lỗi thời, chưa hoàn tất hoặc thiếu kiểm lỗ hổng bảo mật.",
      "expectedEn": "Inspects the affected suite and CI, gathers evidence for weak or deceptive tests, asks Kongming for advisory checkpoints, then reports ranked findings with proposed repairs without editing tests unless suite repair is separately authorized.",
      "expectedVi": "Xem xét suite và CI bị ảnh hưởng, thu bằng chứng về test yếu hoặc gian lận, hỏi Kongming ở các điểm cố vấn rồi báo finding đã xếp hạng kèm đề xuất sửa, không sửa test trừ khi được cấp quyền sửa suite riêng."
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
      "validation": "Ranked findings + proposed repairs"
    }
  ]
};

export default data;

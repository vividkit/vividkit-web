import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-cook',
  command: '/ak:cook',
  kit: 'engineer',
  header: {
    titleEn: '/ak:cook — Smart feature implementation',
    titleVi: '/ak:cook — Triển khai tính năng có hệ thống',
    taglineEn: 'Smart feature implementation with brainstorm contract, mandatory scout, reviewed plan, implementation, review, testing, finalize sync, and optional workflow modes.',
    taglineVi: 'Triển khai tính năng có hệ thống: chốt contract brainstorm, scout bắt buộc, plan được review, code, review, test, đồng bộ finalize và các mode tuỳ chọn.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'No implementation before plan and current context',
    titleVi: 'Không code trước khi có plan và context hiện tại',
    contentEn: 'Capture outcome, constraints, non-goals, and acceptance criteria; scout codebase unless an accepted plan already has current evidence; do not write implementation code until a reviewed plan exists.',
    contentVi: 'Phải chốt outcome, ràng buộc, non-goal và tiêu chí chấp nhận; scout codebase trừ khi plan đã duyệt có bằng chứng hiện tại; không viết code triển khai trước khi có plan đã review.',
  },
  processFlow: [
    { number: 1, titleEn: 'Contract', titleVi: 'Chốt contract', descEn: 'Capture or reuse outcome, constraints, non-goals, and observable acceptance criteria before planning.', descVi: 'Chốt hoặc tái dùng outcome, ràng buộc, non-goal và tiêu chí chấp nhận quan sát được trước khi lập plan.' },
    { number: 2, titleEn: 'Intent', titleVi: 'Nhận diện mode', descEn: 'Detect plan path, interactive, fast, parallel, auto, no-test, or code mode from flags and task shape.', descVi: 'Nhận diện plan path, interactive, fast, parallel, auto, no-test hoặc code mode từ flag và hình dạng nhiệm vụ.' },
    { number: 3, titleEn: 'Scout', titleVi: 'Scout', descEn: 'For non-plan work, scan project type, relevant files, existing patterns, docs, in-flight plans, and public contracts.', descVi: 'Với việc chưa có plan, quét loại dự án, file liên quan, pattern hiện có, docs, plan đang mở và public contract.' },
    { number: 4, titleEn: 'Research and plan', titleVi: 'Nghiên cứu và lập plan', descEn: 'Research when needed, pass the post-research review gate, then write the implementation plan before any code.', descVi: 'Nghiên cứu khi cần, qua cổng review sau nghiên cứu, rồi viết plan triển khai trước khi code.' },
    { number: 5, titleEn: 'Plan review gate', titleVi: 'Cổng review plan', descEn: 'Non-auto workflows require approval after planning; auto follows the documented review-cycle policy.', descVi: 'Workflow không auto cần duyệt sau khi lập plan; auto theo chính sách review-cycle đã ghi.' },
    { number: 6, titleEn: 'Implement', titleVi: 'Triển khai', descEn: 'Execute the accepted plan, optionally in parallel groups, preserving full requested scope unless --yagni opts into scope cuts.', descVi: 'Thực hiện plan đã duyệt, có thể chia nhóm song song, giữ đủ phạm vi đã yêu cầu trừ khi --yagni cho phép cắt scope.' },
    { number: 7, titleEn: 'Review and test', titleVi: 'Review và test', descEn: 'Run mandatory code-reviewer checks and tester/debugger work; --no-test only downgrades the test item to a surfaced risk.', descVi: 'Chạy code-reviewer bắt buộc và phần tester/debugger; --no-test chỉ hạ riêng mục test thành rủi ro phải nêu rõ.' },
    { number: 8, titleEn: 'Finalize', titleVi: 'Hoàn tất', descEn: 'Sync all plan phases through project-management, evaluate docs impact, update live task tracking, offer commit flow, and journal unless skipped.', descVi: 'Đồng bộ mọi phase trong plan bằng project-management, xét ảnh hưởng docs, cập nhật tracking, hỏi commit flow và ghi journal trừ khi được bỏ qua.' },
  ],
  corePrinciplesEn: ['Full requested scope, nothing extra; --yagni is explicit opt-in.', 'Plan before code, because simple tasks hide assumptions.', 'Scout current code before asking further questions.', 'Side effects and regressions are user decisions, not silent patches.', 'Verification evidence comes before completion claims.'],
  corePrinciplesVi: ['Làm đủ phạm vi đã yêu cầu, không thêm; --yagni là lựa chọn rõ ràng.', 'Lập plan trước khi code vì việc “đơn giản” thường giấu giả định.', 'Scout code hiện tại trước khi hỏi thêm.', 'Tác dụng phụ và hồi quy phải để người dùng quyết, không âm thầm vá.', 'Bằng chứng kiểm chứng phải có trước khi tuyên bố hoàn tất.'],
  workflowModes: [
    { flag: '--interactive', modeEn: 'Default full workflow', modeVi: 'Workflow đầy đủ mặc định', research: 'Yes', redTeam: 'Human review gates', validation: 'Tests required' },
    { flag: '--fast', modeEn: 'Skip research', modeVi: 'Bỏ nghiên cứu', research: 'No; still scout→plan→code', redTeam: 'Plan still required', validation: 'Tests required' },
    { flag: '--parallel', modeEn: 'Multi-agent execution', modeVi: 'Triển khai đa agent', research: 'Optional by plan', redTeam: 'Grouped ownership', validation: 'Tests required' },
    { flag: '--auto', modeEn: 'Auto approve steps', modeVi: 'Tự duyệt bước', research: 'Yes', redTeam: 'Review-cycle policy', validation: 'Tests required' },
    { flag: '--no-test', modeEn: 'Skip tests', modeVi: 'Bỏ test', research: 'Yes', redTeam: 'Risk surfaced', validation: 'Non-test gates remain' },
  ],
  invocation: {
    syntax: '/ak:cook [task|plan-path] [--interactive|--fast|--parallel|--auto|--no-test] [--tdd] [--advice] [--yagni] [--skip-journal]',
    arguments: [
      { token: '[task|plan-path]', titleEn: 'Task or plan path', titleVi: 'Task hoặc đường dẫn plan', descEn: 'Natural-language implementation request or approved plan file. Include outcome, constraints, non-goals, acceptance criteria, and authority boundary unless the plan already supplies them.', descVi: 'Yêu cầu triển khai bằng ngôn ngữ tự nhiên hoặc file plan đã duyệt. Nêu outcome, ràng buộc, non-goal, tiêu chí chấp nhận và ranh giới quyền hạn trừ khi plan đã có sẵn.', required: true, exampleCommand: '/ak:cook "Add POST /api/feedback with existing authentication, return 202, store no new data, add focused tests, and do not commit or deploy"' },
    ],
    options: [
      { token: '--interactive', titleEn: 'Interactive', titleVi: 'Tương tác', descEn: 'Default mode. Runs the full workflow and pauses at major review gates for approval or requested changes.', descVi: 'Mode mặc định. Chạy workflow đầy đủ và dừng ở các cổng review chính để duyệt hoặc yêu cầu chỉnh sửa.', exampleCommand: '/ak:cook "Add search" --interactive' },
      { token: '--fast', titleEn: 'Fast', titleVi: 'Nhanh', descEn: 'Skip research only. Still captures the contract, inspects the codebase, writes a plan before code, tests, and runs code review.', descVi: 'Chỉ bỏ research. Vẫn chốt contract, kiểm tra codebase, viết plan trước khi code, chạy test và code review.', exampleCommand: '/ak:cook "Add search" --fast' },
      { token: '--parallel', titleEn: 'Parallel', titleVi: 'Song song', descEn: 'Allow independent implementation phases to run concurrently when dependencies and file ownership are explicit.', descVi: 'Cho phép các phase triển khai độc lập chạy đồng thời khi dependency và ownership tệp đã rõ.', exampleCommand: '/ak:cook "Build dashboard and API" --parallel' },
      { token: '--auto', titleEn: 'Auto', titleVi: 'Tự động', descEn: 'Remove routine human pauses while keeping tests, mandatory code review, security policy, and unresolved blocker handling.', descVi: 'Bỏ các lần dừng thường lệ cho con người nhưng vẫn giữ test, code review bắt buộc, chính sách bảo mật và xử lý blocker chưa xong.', exampleCommand: '/ak:cook path/to/plan.md --auto' },
      { token: '--no-test', titleEn: 'No test', titleVi: 'Không test', descEn: 'Omit the testing stage only. Code review remains mandatory, and the final report must surface the missing test evidence.', descVi: 'Chỉ bỏ giai đoạn test. Code review vẫn bắt buộc và báo cáo cuối phải nêu rõ thiếu bằng chứng test.', exampleCommand: '/ak:cook "Update copy" --no-test' },
      { token: '--tdd', titleEn: 'Tests first', titleVi: 'Test trước', descEn: 'Add tests-first work inside relevant phases: lock current behavior before refactoring, then verify after implementation.', descVi: 'Thêm cách làm test-first trong phase phù hợp: khóa hành vi hiện tại trước khi refactor, rồi kiểm chứng sau triển khai.', exampleCommand: '/ak:cook "Refactor auth middleware" --tdd' },
      { token: '--advice', titleEn: 'Advisory supervision', titleVi: 'Giám sát cố vấn', descEn: 'Ask kongming for advice at phase completions, stuck points, and high-stakes decisions. Advice cannot edit code or approve gates.', descVi: 'Hỏi kongming tư vấn khi hoàn tất phase, khi bị kẹt và trước quyết định rủi ro cao. Lời khuyên không sửa code hay duyệt gate.', exampleCommand: '/ak:cook "Migrate billing" --advice' },
      { token: '--yagni', titleEn: 'Cut unneeded scope', titleVi: 'Cắt scope thừa', descEn: 'Opt into challenging and cutting requested work that is not needed for the stated outcome. Without it, full requested scope remains required.', descVi: 'Cho phép chất vấn và cắt phần việc đã yêu cầu nhưng không cần cho outcome đã nêu. Nếu không có cờ này, vẫn phải làm đủ scope đã yêu cầu.', exampleCommand: '/ak:cook "Build admin panel" --yagni' },
      { token: '--skip-journal', titleEn: 'Skip journal', titleVi: 'Bỏ journal', descEn: 'Skip the automatic journal entry only. Final plan sync, docs-impact check, live task tracking, and commit prompt still run.', descVi: 'Chỉ bỏ journal tự động. Đồng bộ plan cuối, kiểm tra ảnh hưởng docs, cập nhật task live và hỏi commit vẫn chạy.', exampleCommand: '/ak:cook path/to/plan.md --skip-journal' },
    ],
  },
  promptExamples: [
    { labelEn: 'Fast feature', labelVi: 'Tính năng nhanh', command: '/ak:cook "Add user authentication to the app" --fast', whenEn: 'Requirements are clear and you want research skipped but still need scout, plan, and code.', whenVi: 'Khi yêu cầu đã rõ và muốn bỏ nghiên cứu nhưng vẫn cần scout, plan và code.', expectedEn: 'Captures the brainstorm contract, runs scout, enforces plan-before-code, implements, performs review, runs tests, completes finalize sync, and journals.', expectedVi: 'Chốt contract brainstorm, chạy scout, bắt buộc plan-before-code, triển khai, review, chạy test, đồng bộ finalize và journal.', recommended: true },
    { labelEn: 'Plan execution', labelVi: 'Thực thi plan', command: '/ak:cook path/to/plan.md --auto', whenEn: 'An accepted plan exists and should be executed continuously.', whenVi: 'Khi đã có plan được chấp nhận và muốn chạy liên tục.', expectedEn: 'Reuses the brainstorm contract and current scout evidence, confirms plan-before-code, executes phases, performs review, runs tests, completes finalize sync, and journals.', expectedVi: 'Tái dùng contract brainstorm và bằng chứng scout hiện tại, xác nhận plan-before-code, chạy phase, review, chạy test, đồng bộ finalize và journal.' },
    { labelEn: 'Tests first', labelVi: 'Test trước', command: '/ak:cook "Refactor auth middleware" --tdd', whenEn: 'You want behavior locked with tests before refactoring.', whenVi: 'Khi muốn khoá hành vi bằng test trước khi refactor.', expectedEn: 'Captures the brainstorm contract, runs scout, enforces plan-before-code, writes tests first, implements, performs review, reruns tests, completes finalize sync, and journals.', expectedVi: 'Chốt contract brainstorm, chạy scout, bắt buộc plan-before-code, viết test trước, triển khai, review, chạy lại test, đồng bộ finalize và journal.' },
  ],
  outputFlags: [
    { flag: '--interactive', titleEn: 'Interactive', titleVi: 'Tương tác', descEn: 'Default full workflow with human review gates.', descVi: 'Workflow đầy đủ mặc định với các cổng duyệt của người dùng.', exampleCommand: '/ak:cook "Add search" --interactive' },
    { flag: '--fast', titleEn: 'Fast', titleVi: 'Nhanh', descEn: 'Skip research but still require scout, plan, and code.', descVi: 'Bỏ nghiên cứu nhưng vẫn bắt buộc scout, plan và code.', exampleCommand: '/ak:cook "Add search" --fast' },
    { flag: '--parallel', titleEn: 'Parallel', titleVi: 'Song song', descEn: 'Execute independent groups through multi-agent workflow.', descVi: 'Chạy các nhóm độc lập bằng workflow đa agent.', exampleCommand: '/ak:cook "Build dashboard and API" --parallel' },
    { flag: '--auto', titleEn: 'Auto', titleVi: 'Tự động', descEn: 'Auto-approve steps while keeping mandatory review-cycle rules.', descVi: 'Tự duyệt các bước nhưng vẫn giữ quy tắc review-cycle bắt buộc.', exampleCommand: '/ak:cook path/to/plan.md --auto' },
    { flag: '--no-test', titleEn: 'No test', titleVi: 'Không test', descEn: 'Skip the testing step only; surface the unverified-tests risk.', descVi: 'Chỉ bỏ bước test; phải nêu rõ rủi ro chưa kiểm chứng test.', exampleCommand: '/ak:cook "Update copy" --no-test' },
    { flag: '--tdd', titleEn: 'TDD', titleVi: 'TDD', descEn: 'Write tests for current behavior before refactoring and verify after implementation.', descVi: 'Viết test cho hành vi hiện tại trước refactor và kiểm chứng sau triển khai.', exampleCommand: '/ak:cook "Refactor auth middleware" --tdd' },
    { flag: '--advice', titleEn: 'Advisory supervision', titleVi: 'Giám sát cố vấn', descEn: 'Ask kongming for go/no-go at phase completions, stuck points, and high-stakes decisions.', descVi: 'Hỏi kongming go/no-go sau phase, khi bị kẹt và trước quyết định rủi ro cao.', exampleCommand: '/ak:cook "Migrate billing" --advice' },
    { flag: '--yagni', titleEn: 'YAGNI', titleVi: 'YAGNI', descEn: 'Opt into challenging and cutting unnecessary scope.', descVi: 'Cho phép chất vấn và cắt phần scope không cần thiết.', exampleCommand: '/ak:cook "Build admin panel" --yagni' },
    { flag: '--skip-journal', titleEn: 'Skip journal', titleVi: 'Bỏ journal', descEn: 'Skip the automatic journal step while keeping the rest of finalize mandatory.', descVi: 'Bỏ bước journal tự động nhưng giữ nguyên các phần finalize còn lại.', exampleCommand: '/ak:cook path/to/plan.md --skip-journal' },
  ],
  guardrails: [
    { thoughtEn: 'This is too simple to plan.', thoughtVi: 'Việc này quá đơn giản, khỏi cần plan.', realityEn: 'Simple tasks hide assumptions; plan takes 30 seconds.', realityVi: 'Việc đơn giản thường giấu giả định; lập plan chỉ mất khoảng 30 giây.', accent: 'red' },
    { thoughtEn: 'I will plan as I go.', thoughtVi: 'Tôi sẽ vừa làm vừa plan.', realityEn: 'That is hoping, not planning.', realityVi: 'Đó là hy vọng, không phải lập kế hoạch.', accent: 'amber' },
    { thoughtEn: 'Tests pass, we are done.', thoughtVi: 'Test pass là xong.', realityEn: 'Review, blast-radius checks, contract checks, sync, docs impact, and finalize still matter.', realityVi: 'Vẫn còn review, kiểm blast-radius, contract, đồng bộ, ảnh hưởng docs và finalize.', accent: 'purple' },
  ],
  skillStack: [{ name: 'ak:scout', type: 'skill' }, { name: 'researcher', type: 'agent' }, { name: 'planner', type: 'agent' }, { name: 'code-reviewer', type: 'agent' }, { name: 'tester', type: 'agent' }, { name: 'debugger', type: 'agent' }, { name: 'project-management', type: 'skill' }, { name: 'docs-manager', type: 'agent' }, { name: 'git-manager', type: 'agent' }, { name: 'ak:journal', type: 'skill' }],
};

export default data;

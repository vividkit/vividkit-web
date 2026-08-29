import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-cook",
  command: "/ak:cook",
  kit: 'marketer',
  header: {
    titleEn: "Structured implementation workflow",
    titleVi: "Workflow triển khai có cấu trúc",
    taglineEn: "Implements known-scope tasks or plans through brainstorm contract, intent detection, scout, research, plan, review, implementation, testing, finalization, and journal steps.",
    taglineVi: "Triển khai task hoặc plan đã rõ phạm vi qua brainstorm contract, nhận diện intent, scout, research, plan, review, implement, test, finalize và journal.",
  },
  hardGate: {
    type: "critical",
    titleEn: "Plan, scout, and side-effect gates are mandatory",
    titleVi: "Bắt buộc qua cổng plan, scout và kiểm soát side effect",
    contentEn: "The skill forbids writing implementation code until a reviewed plan exists, requires codebase scouting before planning, and says implementation is not done until side effects and public contracts are verified.",
    contentVi: "Skill cấm viết code triển khai trước khi có plan đã review, bắt buộc scout codebase trước khi lập plan, và chưa coi là xong cho đến khi kiểm chứng side effect cùng public contract.",
  },
  processFlow: [
    { number: 1, titleEn: "Capture contract", titleVi: "Chốt hợp đồng", descEn: "State outcome, constraints, non-goals, and observable acceptance criteria before planning or coding.", descVi: "Nêu rõ outcome, ràng buộc, non-goal và tiêu chí nghiệm thu quan sát được trước khi plan hoặc code." },
    { number: 2, titleEn: "Detect intent", titleVi: "Nhận diện intent", descEn: "Classify default interactive mode or requested fast, parallel, auto, no-test, or existing-plan execution.", descVi: "Phân loại mode mặc định interactive hoặc các mode fast, parallel, auto, no-test hay chạy plan có sẵn." },
    { number: 3, titleEn: "Scout codebase", titleVi: "Scout codebase", descEn: "Find project type, relevant files, conventions, docs, plans, and public contracts before detailed planning.", descVi: "Tìm loại dự án, file liên quan, convention, docs, plan và public contract trước khi lập kế hoạch chi tiết." },
    { number: 4, titleEn: "Research and plan", titleVi: "Nghiên cứu và lập plan", descEn: "Research as needed, write a plan, and pass review gates unless the selected mode changes approval behavior.", descVi: "Nghiên cứu khi cần, viết plan và đi qua cổng review trừ khi mode được chọn thay đổi cách duyệt." },
    { number: 5, titleEn: "Implement scope", titleVi: "Triển khai phạm vi", descEn: "Implement the full requested scope by default; only --yagni opts into challenging and cutting unnecessary scope.", descVi: "Mặc định triển khai đầy đủ phạm vi được yêu cầu; chỉ --yagni mới bật việc chất vấn và cắt phần không cần thiết." },
    { number: 6, titleEn: "Review and test", titleVi: "Review và test", descEn: "Run mandatory review and testing paths, with --no-test only downgrading test execution to a surfaced risk.", descVi: "Chạy các bước review và test bắt buộc; --no-test chỉ hạ việc chạy test thành rủi ro phải nêu rõ." },
    { number: 7, titleEn: "Verify side effects", titleVi: "Kiểm side effect", descEn: "Confirm acceptance criteria, related tests, business logic touchpoints, lint/type/build health, and public contracts.", descVi: "Xác nhận tiêu chí nghiệm thu, test liên quan, điểm chạm logic nghiệp vụ, lint/type/build và public contract." },
    { number: 8, titleEn: "Finalize", titleVi: "Hoàn tất", descEn: "Sync plan state, assess docs impact, update live tracking, offer commit workflow, and write journal unless skipped.", descVi: "Đồng bộ trạng thái plan, đánh giá tác động docs, cập nhật tracking, đề xuất commit và viết journal trừ khi được bỏ qua." },
  ],
  corePrinciplesEn: [
    "KISS and DRY: implement the requested scope cleanly without optional expansion.",
    "Default mode is interactive; mode flags change workflow shape, not the need for a contract and plan.",
    "Verification evidence is part of the deliverable, not an afterthought.",
  ],
  corePrinciplesVi: [
    "KISS và DRY: triển khai đúng phạm vi yêu cầu một cách gọn, không mở rộng tùy ý.",
    "Mode mặc định là interactive; flag mode chỉ đổi hình dáng workflow, không bỏ nhu cầu có contract và plan.",
    "Bằng chứng xác minh là một phần của deliverable, không phải việc thêm sau." ,
  ],
  workflowModes: [
    { flag: "--interactive", modeEn: "Full workflow", modeVi: "Workflow đầy đủ", research: "Yes", redTeam: "Human review gates", validation: "Testing required" },
    { flag: "--fast", modeEn: "Skip research", modeVi: "Bỏ research", research: "No", redTeam: "Plan still required", validation: "Testing required" },
    { flag: "--parallel", modeEn: "Multi-agent execution", modeVi: "Chạy nhiều agent", research: "Optional", redTeam: "Review gates remain", validation: "Testing required" },
    { flag: "--auto", modeEn: "Auto-approve steps", modeVi: "Tự duyệt bước", research: "Yes", redTeam: "Review-cycle rules", validation: "Testing required" },
    { flag: "--no-test", modeEn: "Skip testing step", modeVi: "Bỏ bước test", research: "Yes", redTeam: "Risk must be surfaced", validation: "Tests skipped warning" },
  ],
  composableFlagsEn: "Composable flags documented by the skill: --tdd for tests-first refactoring, --advice for kongming supervision, --yagni to cut unnecessary scope, and --skip-journal to skip the automatic journal step.",
  composableFlagsVi: "Các flag kết hợp được ghi trong skill: --tdd để làm tests-first khi refactor, --advice để có kongming giám sát, --yagni để cắt phạm vi không cần thiết, và --skip-journal để bỏ bước journal tự động.",
  promptExamples: [
    { labelEn: "Default implementation", labelVi: "Triển khai mặc định", command: "/ak:cook Add user authentication to the app", whenEn: "Use when scope is known but should go through the default interactive workflow.", whenVi: "Dùng khi phạm vi đã rõ nhưng vẫn cần workflow interactive mặc định.", expectedEn: "Brainstorm contract, scout, plan, implementation, review, test, and finalize path.", expectedVi: "Luồng brainstorm contract, scout, plan, implement, review, test và finalize.", recommended: true },
    { labelEn: "Fast path", labelVi: "Luồng nhanh", command: "/ak:cook Add user authentication to the app --fast", whenEn: "Use when the user wants to skip research but still needs scouting, planning, code, and tests.", whenVi: "Dùng khi muốn bỏ research nhưng vẫn cần scout, plan, code và test.", expectedEn: "Scout → plan → code with required validation.", expectedVi: "Scout → plan → code kèm xác minh bắt buộc." },
    { labelEn: "Execute plan", labelVi: "Chạy plan", command: "/ak:cook path/to/plan.md --auto", whenEn: "Use when an accepted plan path should be executed continuously.", whenVi: "Dùng khi một plan đã duyệt cần được chạy liên tục.", expectedEn: "Plan-file-first execution with auto-mode review-cycle behavior.", expectedVi: "Thực thi theo plan-file-first với hành vi review-cycle của auto mode." },
    { labelEn: "Tests first", labelVi: "Test trước", command: "/ak:cook Refactor auth middleware --tdd", whenEn: "Use when refactoring should preserve current behavior through tests-first work.", whenVi: "Dùng khi refactor cần giữ hành vi hiện tại bằng cách viết test trước.", expectedEn: "Tests for current behavior before refactor, then verification after implementation.", expectedVi: "Test cho hành vi hiện tại trước refactor, rồi xác minh sau khi triển khai." },
  ],
  guardrails: [
    { thoughtEn: "This is simple enough to code directly.", thoughtVi: "Việc này đơn giản, code thẳng cũng được.", realityEn: "The skill says simple tasks are where unexamined assumptions waste the most time.", realityVi: "Skill nói task đơn giản là nơi giả định chưa kiểm tra dễ gây lãng phí nhất.", accent: "red" },
    { thoughtEn: "Passing one test means it is done.", thoughtVi: "Một test pass là xong.", realityEn: "Side effects, public contracts, shared tests, and lint/type/build health are part of done.", realityVi: "Side effect, public contract, test liên quan và lint/type/build cũng thuộc định nghĩa hoàn tất.", accent: "amber" },
  ],
};

export default data;

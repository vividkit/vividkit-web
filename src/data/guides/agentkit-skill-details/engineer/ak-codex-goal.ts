import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-codex-goal',
  command: '/ak:codex-goal',
  kit: 'engineer',
  header: {
    titleEn: '/ak:codex-goal — Guide Codex /goal work',
    titleVi: '/ak:codex-goal — Dẫn dắt công việc Codex /goal',
    taglineEn: 'Guide Codex /goal work with one durable objective, explicit checkpoints, validation commands, and a verifiable stop condition.',
    taglineVi: 'Dẫn dắt Codex /goal bằng một mục tiêu bền vững, checkpoint rõ, lệnh kiểm chứng và điều kiện dừng có thể xác minh.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'A goal is not an unbounded backlog',
    titleVi: 'Goal không phải backlog vô hạn',
    contentEn: 'Use /goal only for longer mainly mechanical work with clear scope and a testable stop condition. Avoid exploratory, destructive, credential, or product-decision-heavy tasks.',
    contentVi: 'Chỉ dùng /goal cho việc dài hơn một lượt, chủ yếu cơ học, phạm vi rõ và có điều kiện dừng kiểm được. Tránh việc khám phá, phá huỷ, đụng credential hoặc cần quyết định sản phẩm liên tục.',
  },
  processFlow: [
    { number: 1, titleEn: 'Check availability', titleVi: 'Kiểm tra khả dụng', descEn: 'Confirm /goal appears in Codex slash commands; if missing, enable the documented goals feature.', descVi: 'Xác nhận /goal có trong danh sách slash command của Codex; nếu thiếu, bật feature goals theo tài liệu.' },
    { number: 2, titleEn: 'Apply use test', titleVi: 'Kiểm tra có nên dùng', descEn: 'Require longer-than-one-turn mechanical work, verifiable validation, and enough clarity for autonomous progress.', descVi: 'Yêu cầu việc dài hơn một lượt, thiên về cơ học, có kiểm chứng rõ và đủ rõ để Codex tự tiến hành.' },
    { number: 3, titleEn: 'Draft objective', titleVi: 'Soạn mục tiêu', descEn: 'Write one objective, not a mixed backlog; name the exact desired end state.', descVi: 'Viết một mục tiêu duy nhất, không biến thành backlog lẫn lộn; nêu đúng trạng thái kết thúc mong muốn.' },
    { number: 4, titleEn: 'Name inputs', titleVi: 'Nêu tài liệu đầu vào', descEn: 'Tell Codex which plan, issue, files, or docs to read first.', descVi: 'Cho Codex biết plan, issue, file hoặc tài liệu nào cần đọc trước.' },
    { number: 5, titleEn: 'Set constraints', titleVi: 'Đặt ràng buộc', descEn: 'Preserve contracts and prohibit weakening, narrowing, skipping, or deleting tests to satisfy the goal.', descVi: 'Giữ nguyên contract và cấm làm yếu, thu hẹp, bỏ qua hoặc xoá test để hoàn thành goal.' },
    { number: 6, titleEn: 'Define validation', titleVi: 'Định nghĩa kiểm chứng', descEn: 'Specify the command or explicit artifact Codex must use after each checkpoint.', descVi: 'Nêu lệnh hoặc artifact rõ ràng Codex phải dùng sau mỗi checkpoint.' },
    { number: 7, titleEn: 'Set stop condition', titleVi: 'Đặt điều kiện dừng', descEn: 'Stop when the verifiable end state is reached or when further work needs human input.', descVi: 'Dừng khi đạt trạng thái cuối có thể kiểm chứng hoặc khi bước tiếp theo cần con người quyết định.' },
    { number: 8, titleEn: 'Review final diff', titleVi: 'Review diff cuối', descEn: 'After Codex finishes, inspect the resulting diff before merging or relying on it.', descVi: 'Sau khi Codex xong, kiểm tra diff cuối trước khi merge hoặc sử dụng kết quả.' },
  ],
  corePrinciplesEn: ['Durable objective, not generic iteration.', 'Validation is part of the contract, not an afterthought.', 'Pause for ambiguity instead of inventing product decisions.', 'Official Codex documentation is the source of truth for /goal behavior.'],
  corePrinciplesVi: ['Mục tiêu bền vững, không phải vòng lặp chung chung.', 'Kiểm chứng là một phần của contract, không phải việc nghĩ sau.', 'Gặp mơ hồ thì dừng hỏi, không tự bịa quyết định sản phẩm.', 'Tài liệu chính thức của Codex là nguồn đúng cho hành vi /goal.'],
  invocation: {
    syntax: '/ak:codex-goal <objective | goal draft>',
    arguments: [
      { token: '<objective | goal draft>', titleEn: 'Objective or draft', titleVi: 'Objective hoặc bản nháp', descEn: 'Describe the long-running Codex work to turn into a bounded goal contract, or paste an existing draft for review. The Skill does not start the Codex goal for you.', descVi: 'Mô tả công việc Codex dài hạn cần biến thành goal contract có giới hạn, hoặc dán bản nháp hiện có để review. Skill không tự khởi động Codex goal cho bạn.', required: true, exampleCommand: '/ak:codex-goal "Finish the TypeScript migration, preserve behavior, keep strict mode clean, and make the focused test suite pass"',
          exampleCommandVi: '/ak:codex-goal "Hoàn thành việc di chuyển TypeScript, bảo toàn hành vi, giữ strict mode sạch, và làm cho bộ test tập trung pass"' },
    ],
  },
  promptExamples: [
    { labelEn: 'Migration goal', labelVi: 'Goal chuyển đổi', command: '/ak:codex-goal "Complete the React Query migration for the account pages; preserve public behavior and pass pnpm test account"',
      commandVi: '/ak:codex-goal "Hoàn thành migration React Query cho các trang account; giữ nguyên hành vi public và pass pnpm test account"', whenEn: 'A scoped mechanical migration needs Codex-native /goal guidance across checkpoints.', whenVi: 'Khi một migration cơ học có phạm vi rõ cần hướng dẫn /goal native của Codex qua nhiều checkpoint.', expectedEn: 'Drafts a reviewable /goal contract with one objective, read-first files, unchanged contracts, checkpoint validation, and a verifiable stop condition.', expectedVi: 'Soạn contract /goal có thể review với một objective, file cần đọc trước, contract phải giữ, validation theo checkpoint và stop condition kiểm chứng được.', recommended: true },
    { labelEn: 'Goal draft review', labelVi: 'Rà bản nháp goal', command: '/ak:codex-goal "Review this /goal draft: modernize the billing module and make it better"',
      commandVi: '/ak:codex-goal "Review bản nháp /goal này: hiện đại hóa module billing và làm cho nó tốt hơn"', whenEn: 'You already wrote a goal draft and need to catch vague scope, missing validation, or unsafe autonomy before starting it.', whenVi: 'Khi đã có bản nháp goal và cần bắt scope mơ hồ, thiếu validation hoặc quyền tự trị không an toàn trước khi bắt đầu.', expectedEn: 'Tightens the draft into one durable objective or rejects it as a poor /goal fit, with constraints, validation, and human-input stop points.', expectedVi: 'Siết bản nháp thành một objective bền vững hoặc từ chối vì không hợp /goal, kèm constraint, validation và điểm dừng để hỏi người.' },
    { labelEn: 'Suitability check', labelVi: 'Kiểm tra độ phù hợp', command: '/ak:codex-goal "Should I use /goal to refactor the checkout tests over several checkpoints?"',
      commandVi: '/ak:codex-goal "Tôi có nên dùng /goal để refactor các test checkout qua nhiều checkpoint không?"', whenEn: 'You need to decide whether a longer task is mechanical and verifiable enough for Codex Goal mode.', whenVi: 'Khi cần quyết định một việc dài hơn có đủ cơ học và kiểm chứng được để dùng Codex Goal mode hay không.', expectedEn: 'Applies the three-part use test, flags exploratory or decision-heavy risk, and either produces a bounded goal contract or recommends another workflow.', expectedVi: 'Áp dụng use test ba phần, chỉ ra rủi ro exploratory hoặc cần nhiều quyết định, rồi tạo contract có giới hạn hoặc đề xuất workflow khác.' },
  ],
  skillStack: [{ name: 'Codex /goal', type: 'tool' }, { name: 'ak:goal-warmup', type: 'skill' }, { name: 'ak-loop', type: 'skill' }, { name: 'ak-orchestrate', type: 'skill' }],
};

export default data;

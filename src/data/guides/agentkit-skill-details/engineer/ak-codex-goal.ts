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
  promptExamples: [
    { labelEn: 'Migration goal', labelVi: 'Goal chuyển đổi', command: '/ak:codex-goal Complete the React Query migration for the account pages', whenEn: 'A scoped mechanical migration needs Codex to continue across checkpoints.', whenVi: 'Khi một migration cơ học có phạm vi rõ cần Codex tiếp tục qua nhiều checkpoint.', expectedEn: 'A ready-to-paste /goal contract with read-first files, constraints, validation, and stop condition.', expectedVi: 'Một contract /goal có thể dán dùng ngay, gồm file đọc trước, ràng buộc, kiểm chứng và điều kiện dừng.', recommended: true },
    { labelEn: 'Goal draft review', labelVi: 'Rà bản nháp goal', command: '/ak:codex-goal review this goal draft before I start it', whenEn: 'You already wrote a goal and want to catch missing stop conditions or unsafe scope.', whenVi: 'Khi đã có bản nháp goal và muốn phát hiện thiếu điều kiện dừng hoặc phạm vi không an toàn.', expectedEn: 'A tightened goal or a clear rejection if the task is a poor /goal fit.', expectedVi: 'Một goal được siết chặt hoặc lời từ chối rõ nếu nhiệm vụ không hợp với /goal.' },
  ],
  skillStack: [{ name: 'Codex /goal', type: 'tool' }, { name: 'ak:goal-warmup', type: 'skill' }, { name: 'ak-loop', type: 'skill' }, { name: 'ak-orchestrate', type: 'skill' }],
};

export default data;

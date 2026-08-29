import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-plan',
  command: '/ak:plan',
  kit: 'marketer',
  header: {
    titleEn: '/ak:plan',
    titleVi: '/ak:plan',
    taglineEn: 'Marketing-kit plan creator and router for fast, hard, parallel, two-approach, validation, CI, CRO, and archive workflows — creates plans, not implementation.',
    taglineVi: 'Bộ tạo và định tuyến plan trong marketing kit cho fast, hard, parallel, two-approach, validate, CI, CRO và archive — tạo kế hoạch, không triển khai.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'PLAN ONLY — DO NOT IMPLEMENT',
    titleVi: 'CHỈ LẬP PLAN — KHÔNG IMPLEMENT',
    contentEn: 'The skill explicitly says not to start implementing. It analyzes the task, enhances the prompt, routes to the correct plan reference, activates planning, and lists unresolved questions at the end.',
    contentVi: 'Skill ghi rõ không được bắt đầu triển khai. Nó phân tích task, làm rõ prompt, định tuyến tới reference plan phù hợp, kích hoạt planning và liệt kê câu hỏi chưa giải quyết ở cuối.',
  },
  processFlow: [
    { number: 1, titleEn: 'Detect Context', titleVi: 'Nhận diện ngữ cảnh', descEn: 'Check Plan Context for an active plan path, suggested branch-matched plan, or no plan.', descVi: 'Kiểm tra Plan Context để biết có plan active, plan gợi ý theo branch hay chưa có plan.' },
    { number: 2, titleEn: 'Confirm Active Plan', titleVi: 'Xác nhận plan active', descEn: 'If an active or suggested plan exists, ask whether to continue it, activate it, or create a new one.', descVi: 'Nếu có plan active hoặc suggested, hỏi người dùng muốn tiếp tục, activate hay tạo plan mới.' },
    { number: 3, titleEn: 'Parse Subcommand', titleVi: 'Đọc subcommand', descEn: 'Read archive, ci, cro, fast, hard, parallel, two, or validate from the first argument.', descVi: 'Đọc archive, ci, cro, fast, hard, parallel, two hoặc validate từ tham số đầu tiên.' },
    { number: 4, titleEn: 'Analyze Task', titleVi: 'Phân tích task', descEn: 'Ask for missing details if needed and determine task complexity and planning depth.', descVi: 'Hỏi thêm chi tiết còn thiếu nếu cần và xác định độ phức tạp cùng độ sâu plan.' },
    { number: 5, titleEn: 'Enhance Prompt', titleVi: 'Làm rõ prompt', descEn: 'Convert the user task into a detailed instructions prompt for the selected planning workflow.', descVi: 'Chuyển task của người dùng thành prompt hướng dẫn chi tiết cho workflow planning đã chọn.' },
    { number: 6, titleEn: 'Route Reference', titleVi: 'Định tuyến reference', descEn: 'Load the corresponding references/{subcommand}.md or decide fast versus hard by complexity.', descVi: 'Nạp references/{subcommand}.md tương ứng hoặc chọn fast/hard theo độ phức tạp.' },
    { number: 7, titleEn: 'Activate Skills', titleVi: 'Kích hoạt skill', descEn: 'Analyze the skill catalog and activate planning plus any task-relevant skills.', descVi: 'Phân tích catalog skill rồi kích hoạt planning và các skill liên quan tới task.' },
    { number: 8, titleEn: 'Report Plan', titleVi: 'Báo cáo plan', descEn: 'Write a concise, high-quality plan and put unresolved questions at the end.', descVi: 'Viết plan ngắn gọn, chất lượng cao và đặt câu hỏi chưa giải quyết ở cuối.' },
  ],
  corePrinciplesEn: [
    'Owns planning and prompt enhancement, not execution.',
    'Existing plan context changes routing: active plans require confirmation before continuing.',
    'Subcommand choice controls depth: fast is no-research, hard researches, parallel decomposes, two compares approaches, validate interviews the plan.',
    'Reports sacrifice grammar for concision while preserving quality and unresolved questions.',
  ],
  corePrinciplesVi: [
    'Phụ trách lập plan và làm rõ prompt, không phụ trách thực thi.',
    'Plan context hiện có ảnh hưởng định tuyến: plan active cần xác nhận trước khi tiếp tục.',
    'Subcommand quyết định độ sâu: fast không research, hard có research, parallel chia việc, two so sánh hai hướng, validate phỏng vấn plan.',
    'Báo cáo ưu tiên súc tích hơn ngữ pháp hoàn hảo nhưng vẫn giữ chất lượng và câu hỏi còn mở.',
  ],
  workflowModes: [
    { flag: 'fast', modeEn: 'No research; analyze and create an implementation plan quickly.', modeVi: 'Không research; phân tích và tạo implementation plan nhanh.', research: 'No', redTeam: 'Light', validation: 'Plan clarity' },
    { flag: 'hard', modeEn: 'Research, analyze, and create a deeper implementation plan.', modeVi: 'Research, phân tích và tạo implementation plan sâu hơn.', research: 'Yes', redTeam: 'Assumptions', validation: 'Evidence' },
    { flag: 'parallel', modeEn: 'Create a detailed plan with phases that can execute in parallel.', modeVi: 'Tạo plan chi tiết với các phase có thể chạy song song.', research: 'As needed', redTeam: 'Dependencies', validation: 'DAG fit' },
    { flag: 'two', modeEn: 'Research and create an implementation plan with two approaches.', modeVi: 'Research và tạo implementation plan với hai phương án.', research: 'Yes', redTeam: 'Tradeoffs', validation: 'Choice criteria' },
    { flag: 'validate', modeEn: 'Validate a plan through a critical-questions interview.', modeVi: 'Kiểm chứng plan bằng phỏng vấn câu hỏi phản biện.', research: 'Plan', redTeam: 'Critical questions', validation: 'Interview' },
    { flag: 'archive', modeEn: 'Write journal entries and archive specific plans or all plans.', modeVi: 'Viết journal entry và archive một số plan hoặc toàn bộ plan.', research: 'Plan state', redTeam: 'Wrong target', validation: 'Archive path' },
    { flag: 'ci', modeEn: 'Analyze GitHub Actions logs and provide a plan to fix CI issues.', modeVi: 'Phân tích log GitHub Actions và đưa plan sửa lỗi CI.', research: 'CI logs', redTeam: 'Root cause', validation: 'Fix plan' },
    { flag: 'cro', modeEn: 'Create a conversion-rate-optimization plan for provided content.', modeVi: 'Tạo plan tối ưu tỷ lệ chuyển đổi cho content được cung cấp.', research: 'Content', redTeam: 'Conversion leaks', validation: 'CRO actions' },
  ],
  promptExamples: [
    { labelEn: 'Fast plan', labelVi: 'Plan nhanh', command: '/ak:plan fast Launch a webinar funnel for founders', whenEn: 'The work is clear and does not need research.', whenVi: 'Khi công việc rõ và không cần research.', expectedEn: 'Concise implementation plan from an enhanced task prompt.', expectedVi: 'Implementation plan súc tích từ prompt đã được làm rõ.', recommended: true },
    { labelEn: 'Hard plan', labelVi: 'Plan sâu', command: '/ak:plan hard Build a cross-channel launch system for a new SaaS product', whenEn: 'The task needs research, assumptions, and deeper analysis.', whenVi: 'Khi task cần research, giả định và phân tích sâu hơn.', expectedEn: 'Research-backed plan with open questions listed at the end.', expectedVi: 'Plan có research hỗ trợ và câu hỏi mở ở cuối.' },
    { labelEn: 'Parallel plan', labelVi: 'Plan song song', command: '/ak:plan parallel Create content, ads, landing page, and email launch assets', whenEn: 'Independent workstreams should be planned for concurrent execution.', whenVi: 'Khi nhiều luồng việc độc lập cần được lập kế hoạch để chạy đồng thời.', expectedEn: 'Plan broken into parallel-executable phases with dependencies.', expectedVi: 'Plan chia thành các phase chạy song song được, kèm dependency.' },
    { labelEn: 'Two approaches', labelVi: 'Hai phương án', command: '/ak:plan two Improve activation for a self-serve SaaS trial', whenEn: 'You want two viable approaches before choosing direction.', whenVi: 'Khi muốn có hai hướng khả thi trước khi chọn.', expectedEn: 'Two researched approaches with tradeoffs and decision criteria.', expectedVi: 'Hai phương án có research, tradeoff và tiêu chí quyết định.' },
    { labelEn: 'Validate plan', labelVi: 'Kiểm chứng plan', command: '/ak:plan validate plans/launch-plan.md', whenEn: 'A plan exists and needs critical-question review.', whenVi: 'Khi đã có plan và cần review bằng câu hỏi phản biện.', expectedEn: 'Validation interview exposing gaps and unresolved questions.', expectedVi: 'Phỏng vấn kiểm chứng làm lộ gap và câu hỏi còn mở.' },
  ],
};

export default data;

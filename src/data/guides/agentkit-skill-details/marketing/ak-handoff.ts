import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-handoff',
  command: '/ak:handoff',
  kit: 'marketer',
  header: {
    titleEn: '/ak:handoff — Portable handoff contract',
    titleVi: '/ak:handoff — Hợp đồng bàn giao',
    taglineEn: 'Creates one portable, redacted Markdown continuation contract so a fresh coding agent can resume safely without reading a transcript dump.',
    taglineVi: 'Tạo một file Markdown bàn giao đã redact để agent mới tiếp tục an toàn mà không cần đọc lại toàn bộ transcript.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'Capture only, never implement',
    titleVi: 'Chỉ ghi nhận, không triển khai',
    contentEn: 'This skill never launches runtimes, mutates code, commits, writes outside the workspace, includes raw transcripts, or exposes secrets.',
    contentVi: 'Skill này không khởi chạy runtime, không sửa mã, không commit, không ghi ngoài workspace, không đưa transcript thô và không lộ secret.',
  },
  processFlow: [
    { number: 1, titleEn: 'Parse target', titleVi: 'Đọc mục tiêu', descEn: 'Accept a bare invocation, optional task focus, output path, diff/status inclusion, or force overwrite flag.', descVi: 'Nhận lệnh trống, trọng tâm công việc tùy chọn, đường dẫn output, yêu cầu kèm diff/status hoặc cờ force overwrite.' },
    { number: 2, titleEn: 'Check focus safety', titleVi: 'Kiểm tra focus an toàn', descEn: 'Refuse if the task focus string itself appears to contain credentials or secret-looking values.', descVi: 'Từ chối nếu chuỗi trọng tâm công việc có vẻ chứa credential hoặc giá trị giống secret.' },
    { number: 3, titleEn: 'Probe workspace', titleVi: 'Đọc trạng thái workspace', descEn: 'Run bounded read-only git probes for repo, toplevel, branch, HEAD, status, and optional diff evidence.', descVi: 'Chạy các probe git chỉ đọc và có giới hạn để lấy repo, gốc repo, branch, HEAD, status và diff nếu được yêu cầu.' },
    { number: 4, titleEn: 'Choose path', titleVi: 'Chọn đường dẫn', descEn: 'Use plans/reports/handoff-YYYYMMDD-HHmm-<slug>.md, or ask for a safe project-local output path if no plans directory exists.', descVi: 'Dùng plans/reports/handoff-YYYYMMDD-HHmm-<slug>.md, hoặc hỏi đường dẫn nội bộ dự án an toàn nếu chưa có thư mục plans.' },
    { number: 5, titleEn: 'Guard collision', titleVi: 'Chặn ghi đè', descEn: 'If the target exists, refuse unless --force was explicitly passed.', descVi: 'Nếu file đích đã tồn tại, từ chối trừ khi có --force rõ ràng.' },
    { number: 6, titleEn: 'Draft schema', titleVi: 'Soạn đúng schema', descEn: 'Write the required sections: Goal, Why This Matters, Current State, Key Decisions and Why, Rejected Approaches and Traps, Verification Status, Relevant Files and Pointers, and Open Work and Dependencies.', descVi: 'Ghi đúng các mục bắt buộc: Goal, Why This Matters, Current State, Key Decisions and Why, Rejected Approaches and Traps, Verification Status, Relevant Files and Pointers, và Open Work and Dependencies.' },
    { number: 7, titleEn: 'Redact secrets', titleVi: 'Redact secret', descEn: 'Apply redaction patterns to the artifact and optional diff/status blocks before writing.', descVi: 'Áp dụng pattern redact cho artifact và phần diff/status tùy chọn trước khi ghi.' },
    { number: 8, titleEn: 'Return handoff', titleVi: 'Trả bàn giao', descEn: 'Return one concise fenced Markdown block, save the same content, and include a fresh-agent prompt that requires source verification.', descVi: 'Trả một khối Markdown fenced ngắn gọn, lưu cùng nội dung đó, và kèm prompt cho agent mới yêu cầu kiểm chứng nguồn.' },
  ],
  corePrinciplesEn: [
    'A handoff is a continuation contract, not a transcript or status report.',
    'Observed workspace facts must be distinguished from session assertions.',
    'The required sections stay present even when some facts are unresolved.',
    'Secrets and private URLs must be redacted before write and never printed inline.',
  ],
  corePrinciplesVi: [
    'Handoff là hợp đồng để tiếp tục, không phải transcript hoặc báo cáo trạng thái chung.',
    'Sự thật quan sát từ workspace phải tách khỏi lời khẳng định trong phiên.',
    'Các mục bắt buộc luôn phải có, kể cả khi một số dữ kiện chưa được giải quyết.',
    'Secret và URL riêng tư phải được redact trước khi ghi và không được in inline.',
  ],
  promptExamples: [
    { labelEn: 'Bare handoff', labelVi: 'Handoff mặc định', command: '/ak:handoff',
      commandVi: '/ak:handoff', whenEn: 'The current session needs a successor-ready continuation contract.', whenVi: 'Phiên hiện tại cần hợp đồng bàn giao để agent sau tiếp tục.', expectedEn: 'Writes an auto-named artifact under plans/reports and returns the same fenced Markdown body plus continuation instruction.', expectedVi: 'Ghi artifact tự đặt tên trong plans/reports và trả cùng nội dung Markdown fenced kèm hướng dẫn tiếp tục.', recommended: true },
    { labelEn: 'Focused handoff', labelVi: 'Handoff có trọng tâm', command: '/ak:handoff "continue the OAuth callback fix"',
      commandVi: '/ak:handoff "tiếp tục sửa OAuth callback"', whenEn: 'A specific task focus should appear in the goal and filename slug.', whenVi: 'Cần đưa một trọng tâm công việc cụ thể vào goal và slug tên file.', expectedEn: 'Creates a focused continuation contract for that task with current state, constraints, and next action.', expectedVi: 'Tạo hợp đồng tiếp tục tập trung vào việc đó với trạng thái, ràng buộc và bước kế tiếp.' },
    { labelEn: 'Include evidence', labelVi: 'Kèm bằng chứng', command: '/ak:handoff --include-diff --include-status',
      commandVi: '/ak:handoff --include-diff --include-status', whenEn: 'The successor needs bounded dirty-workspace evidence.', whenVi: 'Agent sau cần bằng chứng có giới hạn về workspace đang dở.', expectedEn: 'Adds redacted status and diff summaries with truncation markers when needed for safe continuation.', expectedVi: 'Thêm status và diff summary đã redact, kèm dấu cắt nếu quá dài.' },
    { labelEn: 'Explicit path', labelVi: 'Đường dẫn cụ thể', command: '/ak:handoff --output plans/reports/handoff-oauth-callback.md --force',
      commandVi: '/ak:handoff --output plans/reports/handoff-oauth-callback.md --force', whenEn: 'The artifact should overwrite a known handoff path intentionally.', whenVi: 'Cần cố ý ghi đè một đường dẫn handoff đã biết.', expectedEn: 'Writes the exact requested path only because --force permits overwrite of the existing handoff.', expectedVi: 'Ghi đúng đường dẫn đã yêu cầu vì --force cho phép ghi đè handoff hiện có.' },
  ],
  skillStack: [
    { name: 'git rev-parse', type: 'tool' },
    { name: 'git status --short', type: 'tool' },
    { name: 'git diff --stat', type: 'tool' },
    { name: 'references/redaction-patterns.md', type: 'tool' },
    { name: 'references/artifact-schema.md', type: 'tool' },
  ],
  guardrails: [
    { thoughtEn: 'A transcript dump is safest.', thoughtVi: 'Dán transcript là an toàn nhất.', realityEn: 'Raw transcripts are forbidden; capture only task-relevant, actionable facts.', realityVi: 'Transcript thô bị cấm; chỉ ghi dữ kiện liên quan và có thể hành động.', accent: 'red' },
    { thoughtEn: 'If --output is explicit, overwrite it.', thoughtVi: 'Có --output thì ghi đè được.', realityEn: 'Overwrite requires --force; explicit output alone never implies replacement.', realityVi: 'Ghi đè cần --force; chỉ có --output không bao giờ đồng nghĩa được thay file.', accent: 'amber' },
    { thoughtEn: 'Unknown sections can be skipped.', thoughtVi: 'Mục chưa biết có thể bỏ.', realityEn: 'All required sections must remain, marking missing evidence as unresolved instead of fabricating facts.', realityVi: 'Mọi mục bắt buộc phải còn, đánh dấu bằng chứng thiếu là chưa giải quyết thay vì bịa dữ kiện.', accent: 'blue' },
  ],
};

export default data;

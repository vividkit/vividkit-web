import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-handoff',
  command: '/ak:handoff',
  kit: 'marketer',
  header: {
    titleEn: 'Continuation Handoff',
    titleVi: 'Bàn giao tiếp tục công việc',
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
    { number: 4, titleEn: 'Choose path', titleVi: 'Chọn đường dẫn', descEn: 'Use plans/handoffs/<slug>-<YYYYMMDD-HHmm>.md, a safe explicit output path, or ask if no plans root exists.', descVi: 'Dùng plans/handoffs/<slug>-<YYYYMMDD-HHmm>.md, đường dẫn output rõ ràng an toàn, hoặc hỏi nếu chưa có gốc plans.' },
    { number: 5, titleEn: 'Guard collision', titleVi: 'Chặn ghi đè', descEn: 'If the target exists, refuse unless --force was explicitly passed.', descVi: 'Nếu file đích đã tồn tại, từ chối trừ khi có --force rõ ràng.' },
    { number: 6, titleEn: 'Draft schema', titleVi: 'Soạn đúng schema', descEn: 'Write all nine required H2 sections in order, using “Not captured in this session” when information is not trustworthy.', descVi: 'Ghi đủ chín mục H2 bắt buộc đúng thứ tự, dùng “Not captured in this session” khi thông tin không đáng tin.' },
    { number: 7, titleEn: 'Redact secrets', titleVi: 'Redact secret', descEn: 'Apply redaction patterns to the artifact and optional diff/status blocks before writing.', descVi: 'Áp dụng pattern redact cho artifact và phần diff/status tùy chọn trước khi ghi.' },
    { number: 8, titleEn: 'Return instruction', titleVi: 'Trả hướng dẫn tiếp tục', descEn: 'Print the absolute path and one copyable instruction for the next session. Do not print the artifact body.', descVi: 'In đường dẫn tuyệt đối và một câu lệnh có thể copy cho phiên sau. Không in toàn bộ nội dung artifact.' },
  ],
  corePrinciplesEn: [
    'A handoff is a continuation contract, not a transcript or status report.',
    'Observed workspace facts must be distinguished from session assertions.',
    'Nine required sections stay present even when a section has no captured facts.',
    'Secrets and private URLs must be redacted before write and never printed inline.',
  ],
  corePrinciplesVi: [
    'Handoff là hợp đồng để tiếp tục, không phải transcript hoặc báo cáo trạng thái chung.',
    'Sự thật quan sát từ workspace phải tách khỏi lời khẳng định trong phiên.',
    'Chín mục bắt buộc luôn phải có, kể cả khi mục đó chưa có dữ kiện được ghi nhận.',
    'Secret và URL riêng tư phải được redact trước khi ghi và không được in inline.',
  ],
  promptExamples: [
    { labelEn: 'Bare handoff', labelVi: 'Handoff mặc định', command: '/ak:handoff', whenEn: 'The current session needs a successor-ready continuation contract.', whenVi: 'Phiên hiện tại cần hợp đồng bàn giao để agent sau tiếp tục.', expectedEn: 'Writes an auto-named artifact under plans/handoffs and prints path plus continuation instruction.', expectedVi: 'Ghi artifact tự đặt tên trong plans/handoffs và in đường dẫn cùng hướng dẫn tiếp tục.', recommended: true },
    { labelEn: 'Focused handoff', labelVi: 'Handoff có trọng tâm', command: '/ak:handoff "continue the OAuth callback fix"', whenEn: 'A specific task focus should appear in Mission and filename slug.', whenVi: 'Cần đưa một trọng tâm công việc cụ thể vào Mission và slug tên file.', expectedEn: 'Creates a focused continuation contract for that task.', expectedVi: 'Tạo hợp đồng tiếp tục tập trung vào việc đó.' },
    { labelEn: 'Include evidence', labelVi: 'Kèm bằng chứng', command: '/ak:handoff --include-diff --include-status', whenEn: 'The successor needs bounded dirty-workspace evidence.', whenVi: 'Agent sau cần bằng chứng có giới hạn về workspace đang dở.', expectedEn: 'Adds redacted status and diff summaries with truncation markers when needed.', expectedVi: 'Thêm status và diff summary đã redact, kèm dấu cắt nếu quá dài.' },
    { labelEn: 'Explicit path', labelVi: 'Đường dẫn cụ thể', command: '/ak:handoff --output plans/handoffs/oauth-callback.md --force', whenEn: 'The artifact should overwrite a known handoff path intentionally.', whenVi: 'Cần cố ý ghi đè một đường dẫn handoff đã biết.', expectedEn: 'Writes the exact path only because --force permits overwrite.', expectedVi: 'Ghi đúng đường dẫn đó vì --force cho phép ghi đè.' },
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
    { thoughtEn: 'Unknown sections can be skipped.', thoughtVi: 'Mục chưa biết có thể bỏ.', realityEn: 'All nine sections must remain, using the exact fallback phrase when facts are missing.', realityVi: 'Cả chín mục phải còn, dùng đúng câu fallback khi thiếu dữ kiện.', accent: 'blue' },
  ],
};

export default data;

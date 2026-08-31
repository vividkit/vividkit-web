import type { SkillInfographic, SkillInvocation } from '@/data/guides/how-ck-works';

const invocation: SkillInvocation = {
  syntax: '/ak:debug [error or issue description] [--ultra]',
  arguments: [
    { token: '[error or issue description]', titleEn: 'Failure to investigate', titleVi: 'Lỗi cần điều tra', descEn: 'Exact symptom, reproduction command, expected and actual behavior, timing, environment, logs, stack trace, and authority boundary. The skill uses this evidence to prove root cause before changing code.', descVi: 'Triệu chứng chính xác, lệnh tái hiện, behavior mong đợi và thực tế, thời điểm, môi trường, log, stack trace và ranh giới quyền hạn. Skill dùng bằng chứng này để chứng minh nguyên nhân gốc trước khi sửa code.', required: true, exampleCommand: '/ak:debug "pnpm test fails in session-cache.test.ts with expected 1 write, received 2"',
          exampleCommandVi: '/ak:debug "pnpm test thất bại trong session-cache.test.ts với kỳ vọng 1 write, nhận được 2"' },
  ],
};


const data: SkillInfographic = {
  id: 'ak-debug',
  command: '/ak:debug',
  kit: 'engineer',
  header: {
    titleEn: '/ak:debug — Systematic debugging',
    titleVi: '/ak:debug — Gỡ lỗi có hệ thống',
    taglineEn: 'Systematic debugging and investigation: prove root cause, trace backward, validate layers, inspect logs/CI/databases/performance, and verify before claiming success.',
    taglineVi: 'Gỡ lỗi và điều tra có hệ thống: chứng minh nguyên nhân gốc, truy ngược, kiểm từng lớp, xem log/CI/database/hiệu năng và xác minh trước khi kết luận.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'No fixes before root cause',
    titleVi: 'Không sửa trước khi biết nguyên nhân gốc',
    contentEn: 'Random fixes waste time and create bugs. Complete root-cause investigation, eliminate rival hypotheses, fix at source, and verify with fresh evidence before claiming success.',
    contentVi: 'Sửa mò làm mất thời gian và tạo lỗi mới. Phải điều tra nguyên nhân gốc, loại giả thuyết đối thủ, sửa tại nguồn và kiểm chứng bằng bằng chứng mới trước khi nói đã xong.',
  },
  processFlow: [
    { number: 1, titleEn: 'Triage symptom', titleVi: 'Phân loại triệu chứng', descEn: 'Classify the issue as code bug, test failure, build failure, server incident, CI/CD failure, database issue, performance regression, or frontend visual problem.', descVi: 'Phân loại lỗi là bug code, test fail, build fail, sự cố server, CI/CD fail, lỗi database, suy giảm hiệu năng hoặc vấn đề giao diện.' },
    { number: 2, titleEn: 'Load method', titleVi: 'Nạp phương pháp', descEn: 'Select the relevant reference: systematic debugging, root-cause tracing, defense-in-depth, verification, system investigation, log/CI, performance, reporting, tracking, or frontend verification.', descVi: 'Chọn tài liệu phù hợp: gỡ lỗi hệ thống, truy nguyên nhân, defense-in-depth, kiểm chứng, điều tra hệ thống, log/CI, hiệu năng, báo cáo, tracking hoặc kiểm giao diện.' },
    { number: 3, titleEn: 'Gather evidence', titleVi: 'Thu bằng chứng', descEn: 'Collect reproduction steps, logs, stack traces, failing commands, database signals, latency metrics, or screenshots before changing code.', descVi: 'Thu bước tái hiện, log, stack trace, lệnh fail, tín hiệu database, metric độ trễ hoặc ảnh chụp trước khi sửa code.' },
    { number: 4, titleEn: 'Trace backward', titleVi: 'Truy ngược', descEn: 'Follow the call stack or data path to the original invalid input, state mutation, race, environment mismatch, or polluter.', descVi: 'Lần theo call stack hoặc đường dữ liệu về input sai, mutation trạng thái, race, lệch môi trường hoặc tác nhân làm bẩn ban đầu.' },
    { number: 5, titleEn: 'Test hypotheses', titleVi: 'Kiểm giả thuyết', descEn: 'Use targeted probes to confirm the root cause and eliminate plausible rivals before implementation.', descVi: 'Dùng probe có mục tiêu để xác nhận nguyên nhân gốc và loại các giả thuyết hợp lý khác trước khi triển khai sửa.' },
    { number: 6, titleEn: 'Fix at source', titleVi: 'Sửa tại nguồn', descEn: 'Patch the root condition, not the visible symptom; add entry, business-logic, environment, or instrumentation validation as needed.', descVi: 'Sửa điều kiện gốc, không vá triệu chứng; thêm validation ở entry, business logic, môi trường hoặc instrumentation khi cần.' },
    { number: 7, titleEn: 'Verify fresh', titleVi: 'Kiểm chứng mới', descEn: 'Run the exact command, reproduction, browser check, CI log query, database diagnostic, or performance measurement proving the issue is gone.', descVi: 'Chạy đúng lệnh, kịch bản tái hiện, kiểm browser, truy log CI, chẩn đoán database hoặc đo hiệu năng chứng minh lỗi đã hết.' },
    { number: 8, titleEn: 'Report evidence', titleVi: 'Báo bằng chứng', descEn: 'Summarize root cause, fix, validation layers, verification output, remaining risk, and any investigation gaps.', descVi: 'Tóm tắt nguyên nhân gốc, cách sửa, lớp validation, kết quả kiểm chứng, rủi ro còn lại và khoảng trống điều tra nếu có.' },
  ],
  corePrinciplesEn: ['Root cause before fix.', 'Fix the source, not the symptom.', 'Validate defense-in-depth after the cause is known.', 'Fresh verification evidence is required before completion claims.', 'When stuck, activate problem-solving rather than guessing.'],
  corePrinciplesVi: ['Tìm nguyên nhân gốc trước khi sửa.', 'Sửa nguồn lỗi, không vá triệu chứng.', 'Sau khi biết nguyên nhân, thêm validation nhiều lớp.', 'Phải có bằng chứng kiểm chứng mới trước khi kết luận hoàn tất.', 'Khi kẹt, dùng problem-solving thay vì đoán mò.'],
  expertiseAreasEn: ['Systematic debugging', 'Root-cause tracing', 'Defense-in-depth validation', 'CI/CD log analysis', 'Database diagnostics', 'Performance profiling', 'Frontend verification'],
  expertiseAreasVi: ['Gỡ lỗi có hệ thống', 'Truy nguyên nhân gốc', 'Validation nhiều lớp', 'Phân tích log CI/CD', 'Chẩn đoán database', 'Phân tích hiệu năng', 'Kiểm chứng frontend'],
  invocation,
  promptExamples: [
    { labelEn: 'Failing test', labelVi: 'Test đang fail', command: '/ak:debug this test fails only when the full suite runs',
      commandVi: '/ak:debug bài kiểm tra này chỉ thất bại khi chạy toàn bộ suite', whenEn: 'Use when root cause must be proven before fixing a test failure, especially with shared state, ordering, or hidden dependencies.', whenVi: 'Dùng khi phải chứng minh nguyên nhân gốc trước khi sửa test fail, nhất là với shared state, thứ tự chạy hoặc dependency ẩn.', expectedEn: 'Runs systematic debugging first, traces the polluter or original trigger when needed, eliminates rival hypotheses, then fixes at source and verifies with fresh evidence.', expectedVi: 'Chạy quy trình gỡ lỗi hệ thống trước, truy polluter hoặc trigger gốc khi cần, loại giả thuyết đối thủ, rồi sửa tại nguồn và kiểm chứng bằng bằng chứng mới.', recommended: true },
    { labelEn: 'CI failure', labelVi: 'CI đang fail', command: '/ak:debug GitHub Actions deploy job fails after migration step',
      commandVi: '/ak:debug job deploy GitHub Actions thất bại sau bước migration', whenEn: 'Use when a CI/CD or deployment failure needs log evidence, correlation across pipeline steps, and a proven root cause before changes.', whenVi: 'Dùng khi lỗi CI/CD hoặc deploy cần bằng chứng log, đối chiếu các bước pipeline và chứng minh nguyên nhân gốc trước khi sửa.', expectedEn: 'Collects the failing command, GitHub Actions logs, and relevant environment clues, identifies the root cause, proposes the source fix, and reports verification evidence.', expectedVi: 'Thu lệnh fail, log GitHub Actions và tín hiệu môi trường liên quan, xác định nguyên nhân gốc, đề xuất sửa tại nguồn và báo bằng chứng kiểm chứng.' },
    { labelEn: 'Performance regression', labelVi: 'Suy giảm hiệu năng', command: '/ak:debug checkout API latency doubled after last release',
      commandVi: '/ak:debug độ trễ API checkout tăng gấp đôi sau bản phát hành gần nhất', whenEn: 'Use when performance degradation or slow database/API behavior needs bottleneck evidence instead of guesswork.', whenVi: 'Dùng khi suy giảm hiệu năng hoặc API/database chậm cần bằng chứng nút nghẽn thay vì đoán mò.', expectedEn: 'Applies the system investigation and performance diagnostics references, gathers latency or query evidence, traces the bottleneck, and defines fresh measurements for verification.', expectedVi: 'Áp dụng tài liệu điều tra hệ thống và chẩn đoán hiệu năng, thu bằng chứng latency hoặc query, truy nút nghẽn và xác định phép đo mới để kiểm chứng.' },
    { labelEn: 'Best-of-5 diagnosis', labelVi: 'Chẩn đoán năm lượt', command: '/ak:debug production checkout latency doubled --ultra',
      commandVi: '/ak:debug production độ trễ checkout tăng gấp đôi --ultra', whenEn: 'Use when a high-stakes issue needs five independent read-only candidate diagnoses and a verifier before any fix.', whenVi: 'Dùng khi lỗi rủi ro cao cần năm chẩn đoán ứng viên chỉ đọc độc lập và một verifier trước mọi bản sửa.', expectedEn: 'Builds one immutable evidence packet, dispatches five read-only diagnoses, has a verifier select or reject the winner, then requires fresh evidence before any fix.', expectedVi: 'Tạo một gói bằng chứng bất biến, chạy năm chẩn đoán chỉ đọc, để verifier chọn hoặc bác ứng viên thắng, rồi yêu cầu bằng chứng mới trước mọi bản sửa.' },
  ],
  outputFlags: [
    { flag: '--ultra', titleEn: 'Best-of-5 diagnosis', titleVi: 'Chẩn đoán năm lượt', descEn: 'Build one evidence packet, run five read-only candidate diagnoses, then verify the winning root cause before any fix.', descVi: 'Tạo một gói bằng chứng, chạy năm chẩn đoán ứng viên chỉ đọc, rồi xác minh nguyên nhân thắng trước khi sửa.', exampleCommand: '/ak:debug intermittent payment failure --ultra',
          exampleCommandVi: '/ak:debug intermittent payment failure --ultra' },
  ],
  guardrails: [
    { thoughtEn: 'Quick fix now, investigate later.', thoughtVi: 'Sửa nhanh trước, điều tra sau.', realityEn: 'That creates new bugs and hides the real failure path.', realityVi: 'Cách đó tạo lỗi mới và che đường lỗi thật.', accent: 'red' },
    { thoughtEn: 'It is probably X.', thoughtVi: 'Chắc là do X.', realityEn: 'Hypotheses need evidence and rival elimination.', realityVi: 'Giả thuyết cần bằng chứng và phải loại các khả năng đối thủ.', accent: 'amber' },
    { thoughtEn: 'Tests pass, done.', thoughtVi: 'Test pass là xong.', realityEn: 'Read the output and verify it covers the original symptom.', realityVi: 'Phải đọc output và xác nhận nó bao phủ triệu chứng ban đầu.', accent: 'purple' },
  ],
  skillStack: [{ name: 'ak:scout', type: 'skill' }, { name: 'ak:docs-seeker', type: 'skill' }, { name: 'ak:repomix', type: 'skill' }, { name: 'ak:problem-solving', type: 'skill' }, { name: 'ak:agent-browser', type: 'skill' }, { name: 'ak:chrome-profile', type: 'skill' }, { name: 'gh CLI', type: 'tool' }, { name: 'psql', type: 'tool' }, { name: 'chrome-devtools-mcp', type: 'tool' }],
};

export default data;

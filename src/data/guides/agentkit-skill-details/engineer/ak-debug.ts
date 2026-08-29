import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-debug',
  command: '/ak:debug',
  kit: 'engineer',
  header: {
    titleEn: '/ak:debug',
    titleVi: '/ak:debug',
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
    { number: 2, titleEn: 'Load method', titleVi: 'Nạp phương pháp', descEn: 'Select the relevant reference: systematic debugging, root-cause tracing, defense-in-depth, verification, log/CI, performance, reporting, or frontend verification.', descVi: 'Chọn tài liệu phù hợp: gỡ lỗi hệ thống, truy nguyên nhân, defense-in-depth, kiểm chứng, log/CI, hiệu năng, báo cáo hoặc kiểm giao diện.' },
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
  promptExamples: [
    { labelEn: 'Failing test', labelVi: 'Test đang fail', command: '/ak:debug this test fails only when the full suite runs', whenEn: 'A bug may involve shared state, pollution, ordering, or hidden dependencies.', whenVi: 'Khi lỗi có thể do shared state, test pollution, thứ tự chạy hoặc dependency ẩn.', expectedEn: 'Evidence-driven diagnosis, polluter search if needed, source fix, and fresh verification.', expectedVi: 'Chẩn đoán theo bằng chứng, tìm polluter nếu cần, sửa tại nguồn và kiểm chứng mới.', recommended: true },
    { labelEn: 'Best-of-5 diagnosis', labelVi: 'Chẩn đoán năm lượt', command: '/ak:debug production checkout latency doubled --ultra', whenEn: 'A high-stakes diagnosis needs independent read-only hypotheses before a fix.', whenVi: 'Khi chẩn đoán rủi ro cao cần các giả thuyết chỉ đọc độc lập trước khi sửa.', expectedEn: 'Five candidate diagnoses, one verified winning root cause, then a fix plan.', expectedVi: 'Năm chẩn đoán ứng viên, một nguyên nhân thắng đã xác minh, rồi mới có kế hoạch sửa.' },
  ],
  outputFlags: [
    { flag: '--ultra', titleEn: 'Best-of-5 diagnosis', titleVi: 'Chẩn đoán năm lượt', descEn: 'Build one evidence packet, run five read-only candidate diagnoses, then verify the winning root cause before any fix.', descVi: 'Tạo một gói bằng chứng, chạy năm chẩn đoán ứng viên chỉ đọc, rồi xác minh nguyên nhân thắng trước khi sửa.', exampleCommand: '/ak:debug intermittent payment failure --ultra' },
  ],
  guardrails: [
    { thoughtEn: 'Quick fix now, investigate later.', thoughtVi: 'Sửa nhanh trước, điều tra sau.', realityEn: 'That creates new bugs and hides the real failure path.', realityVi: 'Cách đó tạo lỗi mới và che đường lỗi thật.', accent: 'red' },
    { thoughtEn: 'It is probably X.', thoughtVi: 'Chắc là do X.', realityEn: 'Hypotheses need evidence and rival elimination.', realityVi: 'Giả thuyết cần bằng chứng và phải loại các khả năng đối thủ.', accent: 'amber' },
    { thoughtEn: 'Tests pass, done.', thoughtVi: 'Test pass là xong.', realityEn: 'Read the output and verify it covers the original symptom.', realityVi: 'Phải đọc output và xác nhận nó bao phủ triệu chứng ban đầu.', accent: 'purple' },
  ],
  skillStack: [{ name: 'ak:scout', type: 'skill' }, { name: 'ak:fix', type: 'skill' }, { name: 'ak:problem-solving', type: 'skill' }, { name: 'ak:agent-browser', type: 'skill' }, { name: 'ak:chrome-profile', type: 'skill' }, { name: 'gh CLI', type: 'tool' }, { name: 'psql', type: 'tool' }],
};

export default data;

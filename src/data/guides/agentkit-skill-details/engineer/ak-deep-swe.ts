import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-deep-swe',
  command: '/ak:deep-swe',
  kit: 'engineer',
  header: {
    titleEn: '/ak:deep-swe',
    titleVi: '/ak:deep-swe',
    taglineEn: 'Run a costed external coding-agent benchmark on DeepSWE through Pier and OpenRouter, with safe setup, single-task smoke, subset/full run controls, and exact reporting.',
    taglineVi: 'Chạy benchmark coding-agent bên ngoài trên DeepSWE qua Pier và OpenRouter, có thiết lập an toàn, smoke một task, kiểm soát subset/full run và báo cáo chính xác.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'Protect keys and model spend',
    titleVi: 'Bảo vệ key và chi phí model',
    contentEn: 'Confirm uv, git, Docker, Docker daemon, and OPENROUTER_API_KEY without printing the key. Run one task before any subset, and get explicit confirmation before the full 113-task corpus.',
    contentVi: 'Kiểm tra uv, git, Docker, Docker daemon và OPENROUTER_API_KEY mà không in key. Chạy một task trước mọi subset và phải có xác nhận rõ trước corpus đầy đủ 113 task.',
  },
  processFlow: [
    { number: 1, titleEn: 'Confirm scope', titleVi: 'Chốt phạm vi', descEn: 'Use this only for a costed external DeepSWE model benchmark, not repository-local optimization.', descVi: 'Chỉ dùng cho benchmark model DeepSWE bên ngoài có chi phí, không dùng cho tối ưu metric trong repo hiện tại.' },
    { number: 2, titleEn: 'Check prerequisites', titleVi: 'Kiểm điều kiện', descEn: 'Verify uv, git, Docker, Docker daemon, Pier availability, and OpenRouter key presence without exposing secrets.', descVi: 'Kiểm uv, git, Docker, Docker daemon, Pier và sự tồn tại key OpenRouter mà không lộ bí mật.' },
    { number: 3, titleEn: 'Install runner', titleVi: 'Cài runner', descEn: 'Clone deep-swe, install datacurve-pier with uv, and inspect pier --help and pier run --help.', descVi: 'Clone deep-swe, cài datacurve-pier bằng uv, rồi đọc pier --help và pier run --help.' },
    { number: 4, titleEn: 'Verify model slug', titleVi: 'Xác minh model slug', descEn: 'Check the exact OpenRouter model slug and use the openrouter/<vendor/model> form documented by the current toolchain.', descVi: 'Xác minh đúng model slug trên OpenRouter và dùng dạng openrouter/<vendor/model> theo toolchain hiện tại.' },
    { number: 5, titleEn: 'Run one task', titleVi: 'Chạy một task', descEn: 'Start with a single deep-swe/tasks/<task-id> Pier run before any sampled subset.', descVi: 'Bắt đầu bằng một lệnh Pier cho deep-swe/tasks/<task-id> trước mọi subset lấy mẫu.' },
    { number: 6, titleEn: 'Sample subset', titleVi: 'Chạy subset', descEn: 'For deterministic samples, confirm installed flags for task count and sample seed, then run a small fixed sample.', descVi: 'Với mẫu xác định, kiểm lại flag task count và sample seed trong bản cài rồi chạy một mẫu nhỏ cố định.' },
    { number: 7, titleEn: 'Full corpus gate', titleVi: 'Cổng chạy toàn bộ', descEn: 'Before all 113 tasks, present exact command, cost exposure, and stop condition, then wait for explicit user confirmation.', descVi: 'Trước khi chạy đủ 113 task, trình bày lệnh chính xác, rủi ro chi phí và điều kiện dừng, rồi chờ xác nhận rõ của người dùng.' },
    { number: 8, titleEn: 'Inspect report', titleVi: 'Kiểm báo cáo', descEn: 'Use current Pier commands such as view, analyze, or critique when available, and report command, version, task count, model, score/reward, cost, and blockers.', descVi: 'Dùng lệnh Pier hiện có như view, analyze hoặc critique khi có, rồi báo lệnh, version, số task, model, điểm/reward, chi phí và blocker.' },
  ],
  corePrinciplesEn: ['This is an external benchmark, not local repo tuning.', 'Never echo, persist, commit, or place OPENROUTER_API_KEY in artifacts.', 'Inspect current Pier help before relying on flags.', 'One task comes before subset; explicit approval comes before full corpus.', 'Do not submit leaderboard results without a user request.'],
  corePrinciplesVi: ['Đây là benchmark bên ngoài, không phải tối ưu repo local.', 'Không bao giờ in, lưu, commit hoặc đưa OPENROUTER_API_KEY vào artifact.', 'Đọc help Pier hiện tại trước khi tin vào flag.', 'Một task trước subset; xác nhận rõ trước corpus đầy đủ.', 'Không nộp kết quả leaderboard nếu người dùng chưa yêu cầu.'],
  expertiseAreasEn: ['DeepSWE benchmark setup', 'Pier runner commands', 'OpenRouter model routing', 'Cost-aware evaluation', 'Benchmark result inspection'],
  expertiseAreasVi: ['Thiết lập benchmark DeepSWE', 'Lệnh runner Pier', 'Định tuyến model OpenRouter', 'Đánh giá có tính chi phí', 'Kiểm tra kết quả benchmark'],
  promptExamples: [
    { labelEn: 'Benchmark model', labelVi: 'Benchmark model', command: '/ak:deep-swe openai/gpt-4o-mini', whenEn: 'You want to evaluate one OpenRouter model slug on DeepSWE.', whenVi: 'Khi muốn đánh giá một model slug OpenRouter trên DeepSWE.', expectedEn: 'Prerequisite checks, single-task run first, then safe subset/full-run guidance.', expectedVi: 'Kiểm điều kiện, chạy một task trước, rồi hướng dẫn subset/full-run an toàn.', recommended: true },
    { labelEn: 'Score verification', labelVi: 'Xác minh điểm', command: '/ak:deep-swe verify the Pier job result for openai/gpt-4o-mini', whenEn: 'A benchmark result needs exact command/version/task-count reporting.', whenVi: 'Khi kết quả benchmark cần báo chính xác lệnh, version và số task.', expectedEn: 'Pier job inspection and a grounded report without leaderboard submission.', expectedVi: 'Kiểm job Pier và báo cáo có căn cứ, không tự nộp leaderboard.' },
  ],
  skillStack: [{ name: 'DeepSWE', type: 'tool' }, { name: 'datacurve-pier', type: 'tool' }, { name: 'OpenRouter', type: 'tool' }, { name: 'Docker', type: 'tool' }, { name: 'uv', type: 'tool' }],
};

export default data;

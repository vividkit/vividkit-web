import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-context-engineering',
  command: '/ak:context-engineering',
  kit: 'engineer',
  header: {
    titleEn: '/ak:context-engineering',
    titleVi: '/ak:context-engineering',
    taglineEn: 'Optimize LLM context quality, token budgets, memory, tool design, and multi-agent isolation when context limits or degradation matter.',
    taglineVi: 'Tối ưu chất lượng context, ngân sách token, bộ nhớ, thiết kế tool và cách cô lập đa agent khi giới hạn context hoặc suy giảm chất lượng trở nên quan trọng.',
  },
  processFlow: [
    { number: 1, titleEn: 'Identify pressure', titleVi: 'Nhận diện áp lực', descEn: 'Start from the symptom: usage warning, lost-in-middle failure, rising latency/cost, memory design, or agent architecture problem.', descVi: 'Bắt đầu từ triệu chứng: cảnh báo dung lượng, lỗi mất thông tin ở giữa, chi phí/độ trễ tăng, thiết kế memory hoặc kiến trúc agent.' },
    { number: 2, titleEn: 'Measure baseline', titleVi: 'Đo hiện trạng', descEn: 'Check token utilization, variance, compaction needs, cache hit rates, and runtime usage signals before optimizing.', descVi: 'Đo mức dùng token, độ dao động, nhu cầu nén, cache hit và tín hiệu runtime trước khi tối ưu.' },
    { number: 3, titleEn: 'Select reference', titleVi: 'Chọn tài liệu', descEn: 'Load only the relevant reference: fundamentals, degradation, optimization, compression, memory, multi-agent, evaluation, tool design, pipelines, or runtime awareness.', descVi: 'Chỉ nạp tài liệu liên quan: nền tảng, suy giảm, tối ưu, nén, memory, đa agent, đánh giá, thiết kế tool, pipeline hoặc nhận biết runtime.' },
    { number: 4, titleEn: 'Curate tokens', titleVi: 'Tuyển chọn token', descEn: 'Prefer high-signal context over exhaustive dumping; place critical information at the beginning or end.', descVi: 'Ưu tiên context tín hiệu cao thay vì nhồi toàn bộ; đặt thông tin quan trọng ở đầu hoặc cuối.' },
    { number: 5, titleEn: 'Use four buckets', titleVi: 'Dùng bốn nhóm', descEn: 'Write externally, select relevant material, compress while preserving meaning, and isolate work across subagents.', descVi: 'Ghi ra ngoài, chọn đúng vật liệu, nén nhưng giữ nghĩa, và cô lập việc giữa các subagent.' },
    { number: 6, titleEn: 'Trigger compaction', titleVi: 'Kích hoạt nén', descEn: 'Warn around 70% utilization and take immediate action at critical levels; target 50–70% reduction with low quality loss.', descVi: 'Cảnh báo quanh mức 70% và hành động ngay khi tới mức nguy cấp; nhắm giảm 50–70% mà mất ít chất lượng.' },
    { number: 7, titleEn: 'Validate outcome', titleVi: 'Xác minh kết quả', descEn: 'Use probe-based evaluation and task-level metrics, optimizing tokens per task rather than tokens per request.', descVi: 'Dùng đánh giá dạng probe và metric theo nhiệm vụ, tối ưu token trên mỗi nhiệm vụ thay vì trên mỗi request.' },
  ],
  corePrinciplesEn: ['Context quality beats quantity.', 'Attention is finite; beginning and end positions matter.', 'Load information just in time through progressive disclosure.', 'Partition work to prevent context degradation.', 'Measure before optimizing.'],
  corePrinciplesVi: ['Chất lượng context quan trọng hơn số lượng.', 'Sự chú ý là hữu hạn; vị trí đầu và cuối rất quan trọng.', 'Nạp thông tin đúng lúc bằng progressive disclosure.', 'Chia việc để tránh suy giảm context.', 'Đo trước khi tối ưu.'],
  expertiseAreasEn: ['Context window monitoring', 'Compression strategies', 'Memory systems', 'Multi-agent coordination', 'Tool description design', 'LLM evaluation'],
  expertiseAreasVi: ['Theo dõi context window', 'Chiến lược nén', 'Hệ thống memory', 'Điều phối đa agent', 'Thiết kế mô tả tool', 'Đánh giá LLM'],
  promptExamples: [
    { labelEn: 'Usage warning', labelVi: 'Cảnh báo dung lượng', command: '/ak:context-engineering context window is at 82%; help compact without losing critical requirements', whenEn: 'A long session is near context limits.', whenVi: 'Khi phiên dài sắp chạm giới hạn context.', expectedEn: 'A compaction and selection plan that preserves high-signal requirements.', expectedVi: 'Kế hoạch nén và chọn lọc giữ lại các yêu cầu có tín hiệu cao.', recommended: true },
    { labelEn: 'Agent architecture', labelVi: 'Kiến trúc agent', command: '/ak:context-engineering design context isolation for a multi-agent review workflow', whenEn: 'A multi-agent system needs clean work partitioning.', whenVi: 'Khi hệ thống đa agent cần chia context sạch giữa các phần việc.', expectedEn: 'Isolation, handoff, and evaluation guidance grounded in context principles.', expectedVi: 'Hướng dẫn cô lập, bàn giao và đánh giá dựa trên nguyên tắc context.' },
  ],
  specialOperations: [
    { id: 'write', titleEn: 'Write', titleVi: 'Ghi ra ngoài', descEn: 'Move durable information into scratchpads, files, or memory stores.', descVi: 'Đưa thông tin bền vững ra scratchpad, file hoặc kho memory.', color: 'blue' },
    { id: 'select', titleEn: 'Select', titleVi: 'Chọn lọc', descEn: 'Retrieve only relevant context for the current step.', descVi: 'Chỉ lấy context liên quan tới bước hiện tại.', color: 'green' },
    { id: 'compress', titleEn: 'Compress', titleVi: 'Nén', descEn: 'Summarize while preserving decisions, constraints, and evidence.', descVi: 'Tóm tắt nhưng giữ quyết định, ràng buộc và bằng chứng.', color: 'amber' },
    { id: 'isolate', titleEn: 'Isolate', titleVi: 'Cô lập', descEn: 'Split work across subagents to avoid one overloaded context.', descVi: 'Chia việc cho subagent để tránh một context bị quá tải.', color: 'purple' },
  ],
};

export default data;

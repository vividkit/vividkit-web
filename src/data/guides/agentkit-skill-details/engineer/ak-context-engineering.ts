import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-context-engineering',
  command: '/ak:context-engineering',
  kit: 'engineer',
  header: {
    titleEn: '/ak:context-engineering — Optimize LLM context quality',
    titleVi: '/ak:context-engineering — Tối ưu chất lượng context',
    taglineEn: 'Optimize LLM context quality, token budgets, memory, tool design, and multi-agent isolation when context limits or degradation matter.',
    taglineVi: 'Tối ưu chất lượng context, ngân sách token, bộ nhớ, thiết kế tool và cách cô lập đa agent khi giới hạn context hoặc suy giảm chất lượng trở nên quan trọng.',
  },
  processFlow: [
    { number: 1, titleEn: 'Identify failure', titleVi: 'Nhận diện lỗi', descEn: 'Start from the observed context problem: limit pressure, lost-in-middle behavior, poisoning, noisy context, memory gaps, or agent architecture trouble.', descVi: 'Bắt đầu từ vấn đề context quan sát được: áp lực giới hạn, lost-in-middle, poisoning, context nhiễu, thiếu memory hoặc lỗi kiến trúc agent.' },
    { number: 2, titleEn: 'Measure baseline', titleVi: 'Đo hiện trạng', descEn: 'Use available runtime awareness, supplied context, token utilization, variance, cache signals, and cost or latency evidence before optimizing.', descVi: 'Dùng runtime awareness có sẵn, context được cung cấp, mức dùng token, độ dao động, tín hiệu cache và bằng chứng chi phí hoặc độ trễ trước khi tối ưu.' },
    { number: 3, titleEn: 'Select reference', titleVi: 'Chọn tài liệu', descEn: 'Load only the relevant reference: fundamentals, degradation, optimization, compression, memory, multi-agent, evaluation, tool design, pipelines, or runtime awareness.', descVi: 'Chỉ nạp tài liệu liên quan: nền tảng, suy giảm, tối ưu, nén, memory, đa agent, đánh giá, thiết kế tool, pipeline hoặc nhận biết runtime.' },
    { number: 4, titleEn: 'Choose strategy', titleVi: 'Chọn chiến lược', descEn: 'Apply the four buckets—write, select, compress, isolate—while preserving goals, decisions, constraints, artifacts, current state, and next steps.', descVi: 'Áp dụng bốn nhóm—write, select, compress, isolate—đồng thời giữ goal, decision, constraint, artifact, current state và next step.' },
    { number: 5, titleEn: 'Act at thresholds', titleVi: 'Hành động theo ngưỡng', descEn: 'Warn around 70% context utilization, optimize around 80%, and treat 90% as critical; target 50–70% compaction with under 5% quality loss when compression is chosen.', descVi: 'Cảnh báo quanh 70% context utilization, tối ưu quanh 80%, coi 90% là critical; khi chọn nén, nhắm giảm 50–70% với dưới 5% mất chất lượng.' },
    { number: 6, titleEn: 'Validate with probes', titleVi: 'Xác minh bằng probe', descEn: 'Use probe-based evaluation and task-level metrics so factual recall, artifacts, continuation, and decision rationale survive token reduction.', descVi: 'Dùng probe evaluation và metric theo nhiệm vụ để factual recall, artifact, continuation và decision rationale vẫn sống sót sau khi giảm token.' },
  ],
  corePrinciplesEn: ['Context quality beats quantity.', 'Attention is finite; beginning and end positions matter.', 'Load information just in time through progressive disclosure.', 'Partition work to prevent context degradation.', 'Measure before optimizing.'],
  corePrinciplesVi: ['Chất lượng context quan trọng hơn số lượng.', 'Sự chú ý là hữu hạn; vị trí đầu và cuối rất quan trọng.', 'Nạp thông tin đúng lúc bằng progressive disclosure.', 'Chia việc để tránh suy giảm context.', 'Đo trước khi tối ưu.'],
  expertiseAreasEn: ['Context window monitoring', 'Compression strategies', 'Memory systems', 'Multi-agent coordination', 'Tool description design', 'LLM evaluation'],
  expertiseAreasVi: ['Theo dõi context window', 'Chiến lược nén', 'Hệ thống memory', 'Điều phối đa agent', 'Thiết kế mô tả tool', 'Đánh giá LLM'],
  promptExamples: [
    { labelEn: 'Usage warning', labelVi: 'Cảnh báo dung lượng', command: '/ak:context-engineering context window is at 82%; help compact without losing critical requirements, decisions, changed files, or next steps', whenEn: 'A long session is near context limits.', whenVi: 'Khi phiên dài sắp chạm giới hạn context.', expectedEn: 'A measured compaction plan that names the pressure, preservation contract, reduction target, and probes for checking critical facts after compression.', expectedVi: 'Kế hoạch nén có đo lường, nêu áp lực, contract cần giữ, mục tiêu giảm token và probe để kiểm tra fact quan trọng sau khi nén.', recommended: true },
    { labelEn: 'Agent architecture', labelVi: 'Kiến trúc agent', command: '/ak:context-engineering design context isolation for a multi-agent review workflow with clear handoffs and cost boundaries', whenEn: 'A multi-agent system needs clean work partitioning.', whenVi: 'Khi hệ thống đa agent cần chia context sạch giữa các phần việc.', expectedEn: 'Guidance for splitting work across agents, passing only high-signal context, avoiding role-play-only isolation, and measuring tokens per task.', expectedVi: 'Hướng dẫn chia việc giữa agent, chỉ chuyển context tín hiệu cao, tránh cô lập chỉ để role-play và đo token theo mỗi nhiệm vụ.' },
    { labelEn: 'Memory design', labelVi: 'Thiết kế memory', command: '/ak:context-engineering design a cross-session memory approach for an LLM coding assistant without storing private user data', whenEn: 'A product needs memory or retrieval without unsafe persistence.', whenVi: 'Khi sản phẩm cần memory hoặc retrieval mà không lưu trữ thiếu an toàn.', expectedEn: 'A bounded memory strategy covering what to write, what to retrieve just in time, privacy limits, and evaluation probes for future recall.', expectedVi: 'Chiến lược memory có giới hạn, gồm nội dung nên ghi, thứ cần truy xuất đúng lúc, giới hạn riêng tư và probe đánh giá recall sau này.' },
    { labelEn: 'Tool descriptions', labelVi: 'Mô tả tool', command: '/ak:context-engineering review these tool descriptions for token cost, clarity, when-to-use boundaries, inputs, and returns', whenEn: 'Tool definitions are bloated or agents choose the wrong tools.', whenVi: 'Khi mô tả tool phình to hoặc agent chọn sai tool.', expectedEn: 'A tool-design review using the four-question framework, with concrete trimming advice and checks for clearer selection boundaries.', expectedVi: 'Review thiết kế tool theo framework bốn câu hỏi, kèm đề xuất cắt gọn cụ thể và kiểm tra ranh giới chọn tool rõ hơn.' },
  ],
  specialOperations: [
    { id: 'write', titleEn: 'Write', titleVi: 'Ghi ra ngoài', descEn: 'Move durable information into scratchpads, files, or memory stores.', descVi: 'Đưa thông tin bền vững ra scratchpad, file hoặc kho memory.', color: 'blue' },
    { id: 'select', titleEn: 'Select', titleVi: 'Chọn lọc', descEn: 'Retrieve only relevant context for the current step.', descVi: 'Chỉ lấy context liên quan tới bước hiện tại.', color: 'green' },
    { id: 'compress', titleEn: 'Compress', titleVi: 'Nén', descEn: 'Summarize while preserving decisions, constraints, and evidence.', descVi: 'Tóm tắt nhưng giữ quyết định, ràng buộc và bằng chứng.', color: 'amber' },
    { id: 'isolate', titleEn: 'Isolate', titleVi: 'Cô lập', descEn: 'Split work across subagents to avoid one overloaded context.', descVi: 'Chia việc cho subagent để tránh một context bị quá tải.', color: 'purple' },
  ],
};

export default data;

import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-google-adk-python',
  command: '/ak:google-adk-python',
  kit: 'marketer',
  header: {
    titleEn: '/ak:google-adk-python — Google ADK Python agents',
    titleVi: '/ak:google-adk-python — Xây agent bằng Google ADK Python',
    taglineEn: 'Guides code-first Google ADK agents, multi-agent systems, A2A, MCP tools, workflow agents, state, memory, deployment, and evaluation.',
    taglineVi: 'Hướng dẫn xây agent Google ADK theo kiểu code-first, multi-agent, A2A, MCP tools, workflow agent, state, memory, deploy và evaluation.',
  },
  hardGate: {
    type: 'info',
    titleEn: 'Follow the ADK agent convention',
    titleVi: 'Theo convention agent của ADK',
    contentEn: 'An agent package uses __init__.py importing agent and agent.py exposing root_agent = Agent(...) or app = App(...).',
    contentVi: 'Một package agent dùng __init__.py import agent và agent.py khai báo root_agent = Agent(...) hoặc app = App(...).',
  },
  processFlow: [
    { number: 1, titleEn: 'Identify use case', titleVi: 'Xác định use case', descEn: 'Decide whether the work is a single agent, multi-agent system, A2A integration, MCP toolset, workflow, state, memory, callback, deployment, or evaluation.', descVi: 'Xác định việc cần làm là single agent, multi-agent, tích hợp A2A, MCP toolset, workflow, state, memory, callback, deploy hay evaluation.' },
    { number: 2, titleEn: 'Choose structure', titleVi: 'Chọn cấu trúc', descEn: 'Create the package convention with __init__.py and agent.py exposing root_agent or app.', descVi: 'Tạo cấu trúc package đúng convention với __init__.py và agent.py xuất root_agent hoặc app.' },
    { number: 3, titleEn: 'Select agent type', titleVi: 'Chọn loại agent', descEn: 'Use Agent or LlmAgent for dynamic reasoning, SequentialAgent for fixed pipelines, ParallelAgent for concurrency, LoopAgent for iteration, or RemoteA2aAgent for remote agents.', descVi: 'Dùng Agent hoặc LlmAgent cho suy luận động, SequentialAgent cho pipeline cố định, ParallelAgent cho song song, LoopAgent cho lặp, hoặc RemoteA2aAgent cho agent từ xa.' },
    { number: 4, titleEn: 'Wire tools', titleVi: 'Kết nối tool', descEn: 'Add Python tools, MCPToolset, LongRunningFunctionTool for human-in-loop, sub_agents, callbacks, plugins, or artifacts as needed.', descVi: 'Thêm Python tool, MCPToolset, LongRunningFunctionTool cho human-in-loop, sub_agents, callback, plugin hoặc artifact khi cần.' },
    { number: 5, titleEn: 'Manage state', titleVi: 'Quản lý trạng thái', descEn: 'Use ToolContext.state for ephemeral data, MemoryService for long-term memory, and artifacts for saved outputs.', descVi: 'Dùng ToolContext.state cho dữ liệu tạm, MemoryService cho trí nhớ dài hạn và artifact cho đầu ra cần lưu.' },
    { number: 6, titleEn: 'Run locally', titleVi: 'Chạy cục bộ', descEn: 'Use adk web for dev UI, adk run for CLI testing, or adk api_server for a production FastAPI server.', descVi: 'Dùng adk web cho dev UI, adk run để test CLI, hoặc adk api_server cho server FastAPI production.' },
    { number: 7, titleEn: 'Evaluate', titleVi: 'Đánh giá', descEn: 'Run adk eval with evalset JSON before deployment.', descVi: 'Chạy adk eval với evalset JSON trước khi deploy.' },
    { number: 8, titleEn: 'Deploy', titleVi: 'Triển khai', descEn: 'Choose Cloud Run, Vertex AI Agent Engine, or GKE using the deployment reference.', descVi: 'Chọn Cloud Run, Vertex AI Agent Engine hoặc GKE theo tài liệu deploy.' },
  ],
  corePrinciplesEn: [
    'ADK agents should be code-first so behavior is versioned and testable.',
    'Use workflow agents for predictable control flow and LlmAgent when dynamic reasoning is needed.',
    'State, memory, artifacts, callbacks, plugins, and observability are deliberate architecture choices.',
    'Evaluation with adk eval belongs before deployment, not after incidents.',
  ],
  corePrinciplesVi: [
    'Agent ADK nên code-first để hành vi được version và test được.',
    'Dùng workflow agent khi luồng chạy cần dự đoán; dùng LlmAgent khi cần suy luận động.',
    'State, memory, artifact, callback, plugin và observability là quyết định kiến trúc có chủ đích.',
    'adk eval phải chạy trước deploy, không đợi tới khi có sự cố.',
  ],
  expertiseAreasEn: ['Agent architecture', 'MCP integration', 'A2A protocol', 'Workflow agents', 'State and memory', 'Vertex deployment', 'Evaluation'],
  expertiseAreasVi: ['Kiến trúc agent', 'Tích hợp MCP', 'Giao thức A2A', 'Workflow agent', 'State và memory', 'Deploy lên Vertex', 'Evaluation'],
  promptExamples: [
    { labelEn: 'Multi-agent system', labelVi: 'Hệ multi-agent', command: '/ak:google-adk-python multi-agent support bot with MCP tools',
      commandVi: '/ak:google-adk-python bot hỗ trợ đa agent với công cụ MCP', whenEn: 'You need ADK architecture for specialized sub-agents and tools.', whenVi: 'Cần kiến trúc ADK cho nhiều sub-agent chuyên trách và tool.', expectedEn: 'Chooses agent types, package convention, MCPToolset wiring, state handling, and evaluation path for the requested app.', expectedVi: 'Chọn loại agent, convention package, cách nối MCPToolset, state và đường evaluation.', recommended: true },
    { labelEn: 'A2A integration', labelVi: 'Tích hợp A2A', command: '/ak:google-adk-python A2A remote agent integration',
      commandVi: '/ak:google-adk-python tích hợp agent từ xa A2A', whenEn: 'Remote agents should communicate through A2A protocol.', whenVi: 'Các agent từ xa cần giao tiếp qua giao thức A2A.', expectedEn: 'Loads the multi-agent and A2A reference and outlines RemoteA2aAgent usage for cross-agent coordination.', expectedVi: 'Nạp tham chiếu multi-agent và A2A rồi phác thảo cách dùng RemoteA2aAgent.' },
    { labelEn: 'Vertex deployment', labelVi: 'Deploy Vertex', command: '/ak:google-adk-python deploy agent to Vertex AI Agent Engine',
      commandVi: '/ak:google-adk-python triển khai agent lên Vertex AI Agent Engine', whenEn: 'An ADK agent is ready for managed deployment.', whenVi: 'Agent ADK đã sẵn sàng triển khai dạng managed.', expectedEn: 'Uses the deployment reference and includes evaluation checkpoints before recommending rollout to production.', expectedVi: 'Dùng tài liệu deploy và đưa các checkpoint evaluation vào trước khi khuyến nghị rollout production.' },
  ],
  skillStack: [
    { name: 'google.adk.Agent', type: 'tool' },
    { name: 'MCPToolset', type: 'tool' },
    { name: 'RemoteA2aAgent', type: 'tool' },
    { name: 'adk eval', type: 'tool' },
  ],
  specialOperations: [
    { id: 'app-pattern', titleEn: 'Production App pattern', titleVi: 'Mẫu App production', descEn: 'Use App when plugins, event compaction, artifacts, or custom lifecycle management are needed.', descVi: 'Dùng App khi cần plugin, event compaction, artifact hoặc quản lý lifecycle riêng.', color: 'blue' },
    { id: 'workflow-agents', titleEn: 'Workflow agents', titleVi: 'Workflow agent', descEn: 'Sequential, parallel, and loop agents make predictable pipelines explicit.', descVi: 'Sequential, parallel và loop agent làm pipeline có thể dự đoán trở nên rõ ràng.', color: 'emerald' },
  ],
};

export default data;

import type { SkillInfographic, SkillInvocation } from '@/data/guides/how-ck-works';

const invocation: SkillInvocation = {
  syntax: '/ak:google-adk-python [agent or feature]',
  arguments: [
    {
      token: '[agent or feature]',
      titleEn: 'ADK agent or feature',
      titleVi: 'Agent hoặc tính năng ADK',
      descEn:
        'Natural-language outcome and operating boundaries for a Google ADK Python agent: target package, agent responsibility, tools or MCP access, state or memory needs, evaluation expectations, provider limits, and whether deployment is in scope. This is not an ADK CLI subcommand or mode flag.',
      descVi:
        'Outcome và ranh giới vận hành bằng ngôn ngữ tự nhiên cho agent Google ADK Python: package đích, trách nhiệm agent, quyền truy cập tool hoặc MCP, nhu cầu state hoặc memory, kỳ vọng evaluation, giới hạn provider và deploy có nằm trong phạm vi không. Đây không phải subcommand hay mode flag của ADK CLI.',
      required: true,
      exampleCommand:
        '/ak:google-adk-python "Add a Google ADK Python support agent to this existing package. Use the installed SDK, expose read-only account tools through a filtered MCPToolset, keep approval for any write, add a small eval set and unit tests, and do not call a paid model or deploy."',
          exampleCommandVi: '/ak:google-adk-python "Thêm một agent hỗ trợ Google ADK Python vào package hiện có này. Dùng SDK đã cài, expose các tool tài khoản read-only qua MCPToolset đã lọc, giữ approval cho mọi thao tác ghi, thêm một eval set nhỏ và unit tests, và không gọi model trả phí hay deploy."',
    },
  ],
};

const data: SkillInfographic = {
  "id": "ak-google-adk-python",
  "command": "/ak:google-adk-python",
  "kit": "engineer",
  "header": {
    "titleEn": "Google ADK Python Builder",
    "titleVi": "Xây agent bằng Google ADK Python",
    "taglineEn": "Guide code-first Google ADK Python work: agents, workflow agents, A2A, MCP tools, state, memory, callbacks, plugins, evaluation, and deployment.",
    "taglineVi": "Hướng dẫn xây Google ADK Python theo code-first: agent, workflow agent, A2A, MCP tools, state, memory, callback, plugin, evaluation và deployment."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Choose target",
      "titleVi": "Chọn mục tiêu",
      "descEn": "Identify whether the user needs a single agent, multi-agent system, workflow pipeline, A2A remote agent, MCP integration, evaluation, or deployment.",
      "descVi": "Xác định user cần agent đơn, hệ nhiều agent, pipeline workflow, remote agent A2A, tích hợp MCP, evaluation hay deploy."
    },
    {
      "number": 2,
      "titleEn": "Set structure",
      "titleVi": "Đặt cấu trúc",
      "descEn": "Create the required my_agent package shape with __init__.py importing agent and agent.py exposing root_agent or app.",
      "descVi": "Tạo đúng cấu trúc package my_agent: __init__.py import agent và agent.py export root_agent hoặc app."
    },
    {
      "number": 3,
      "titleEn": "Pick pattern",
      "titleVi": "Chọn pattern",
      "descEn": "Use Agent/LlmAgent for dynamic routing, SequentialAgent for fixed order, ParallelAgent for concurrency, LoopAgent for iteration, or RemoteA2aAgent for A2A.",
      "descVi": "Dùng Agent/LlmAgent cho routing động, SequentialAgent cho thứ tự cố định, ParallelAgent cho chạy song song, LoopAgent cho lặp, hoặc RemoteA2aAgent cho A2A."
    },
    {
      "number": 4,
      "titleEn": "Wire tools",
      "titleVi": "Nối công cụ",
      "descEn": "Attach Python tools, MCPToolset, sub_agents, LongRunningFunctionTool, state, artifacts, callbacks, or plugins as required by the feature.",
      "descVi": "Gắn Python tool, MCPToolset, sub_agents, LongRunningFunctionTool, state, artifact, callback hoặc plugin theo đúng feature."
    },
    {
      "number": 5,
      "titleEn": "Use App when needed",
      "titleVi": "Dùng App khi cần",
      "descEn": "Switch from root_agent-only to App when plugins, event compaction, file artifacts, or custom lifecycle management are needed.",
      "descVi": "Chuyển từ chỉ root_agent sang App khi cần plugin, compaction event, artifact file hoặc lifecycle tùy chỉnh."
    },
    {
      "number": 6,
      "titleEn": "Exercise locally",
      "titleVi": "Chạy thử local",
      "descEn": "Use adk web for the dev UI, adk run for CLI testing, or adk api_server for FastAPI serving.",
      "descVi": "Dùng adk web cho UI dev, adk run để test CLI, hoặc adk api_server để chạy FastAPI."
    },
    {
      "number": 7,
      "titleEn": "Evaluate",
      "titleVi": "Đánh giá",
      "descEn": "Run adk eval with an evalset JSON before treating the agent as production-ready.",
      "descVi": "Chạy adk eval với evalset JSON trước khi xem agent là sẵn sàng production."
    },
    {
      "number": 8,
      "titleEn": "Deploy consciously",
      "titleVi": "Deploy có chủ đích",
      "descEn": "For production, route to Cloud Run, Vertex AI Agent Engine, or GKE guidance and keep model/provider assumptions explicit.",
      "descVi": "Khi production, đi theo hướng dẫn Cloud Run, Vertex AI Agent Engine hoặc GKE và ghi rõ giả định model/provider."
    }
  ],
  "corePrinciplesEn": [
    "ADK agents are code-first Python artifacts that should be versioned and tested.",
    "Follow the root_agent/app convention so ADK CLIs can discover the agent.",
    "Use workflow agents when control flow is predictable; use LLM agents for dynamic routing."
  ],
  "corePrinciplesVi": [
    "Agent ADK là artifact Python code-first, cần được version và test.",
    "Tuân thủ quy ước root_agent/app để CLI ADK phát hiện được agent.",
    "Dùng workflow agent khi flow dự đoán được; dùng LLM agent cho routing động."
  ],
  "expertiseAreasEn": [
    "Agent and App structure",
    "MCP tool integration",
    "A2A multi-agent systems",
    "State, memory, artifacts, callbacks, plugins",
    "ADK eval and Vertex/Cloud Run deployment"
  ],
  "expertiseAreasVi": [
    "Cấu trúc Agent và App",
    "Tích hợp MCP tool",
    "Hệ multi-agent A2A",
    "State, memory, artifact, callback, plugin",
    "ADK eval và deploy lên Vertex/Cloud Run"
  ],
  "skillStack": [
    {
      "name": "google.adk.Agent",
      "type": "tool"
    },
    {
      "name": "App",
      "type": "tool"
    },
    {
      "name": "MCPToolset",
      "type": "tool"
    },
    {
      "name": "adk web/run/api_server/eval",
      "type": "tool"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Tool-using support agent",
      "labelVi": "Agent hỗ trợ dùng tool",
      "command": "/ak:google-adk-python build a support triage agent with MCP tools, session state, and artifact output",
      "whenEn": "You are building a Google ADK agent that needs MCP tools, state, or artifact handling.",
      "whenVi": "Khi cần xây agent Google ADK có MCP tool, state hoặc xử lý artifact.",
      "expectedEn": "Defines the ADK package shape, chooses root_agent or App, wires MCPToolset and ToolContext state, and names the adk web/run/eval checks to exercise the agent.",
      "expectedVi": "Định nghĩa cấu trúc package ADK, chọn root_agent hoặc App, nối MCPToolset và ToolContext state, rồi nêu các lệnh adk web/run/eval để chạy thử agent.",
      "recommended": true
    },
    {
      "labelEn": "Workflow pipeline",
      "labelVi": "Pipeline workflow",
      "command": "/ak:google-adk-python design a SequentialAgent pipeline with a ParallelAgent research step and LoopAgent refinement",
      "whenEn": "You need workflow agents for predictable sequential, parallel, or iterative processing.",
      "whenVi": "Khi cần workflow agent cho xử lý tuần tự, song song hoặc lặp có thể dự đoán.",
      "expectedEn": "Maps the pipeline to SequentialAgent, ParallelAgent, and LoopAgent roles, explains when not to use dynamic LlmAgent routing, and keeps the agent.py export discoverable by ADK.",
      "expectedVi": "Ánh xạ pipeline vào vai trò SequentialAgent, ParallelAgent và LoopAgent, giải thích khi nào không dùng routing LlmAgent động, và giữ export agent.py để ADK phát hiện được."
    },
    {
      "labelEn": "A2A coordinator",
      "labelVi": "Coordinator A2A",
      "command": "/ak:google-adk-python design a RemoteA2aAgent coordinator for two remote domain agents",
      "whenEn": "You are connecting remote agents through the A2A protocol instead of local sub-agents.",
      "whenVi": "Khi cần nối agent từ xa qua giao thức A2A thay vì sub-agent local.",
      "expectedEn": "Explains the RemoteA2aAgent coordinator role, how it differs from local sub_agents composition, and what local CLI or deployment checks should prove the connection path.",
      "expectedVi": "Giải thích vai trò coordinator RemoteA2aAgent, điểm khác với cách ghép sub_agents local, và các bước CLI hoặc deploy cần kiểm tra để chứng minh đường kết nối."
    },
    {
      "labelEn": "Eval and Vertex deployment",
      "labelVi": "Eval và deploy Vertex",
      "command": "/ak:google-adk-python prepare my ADK agent for adk eval and Vertex AI Agent Engine deployment",
      "whenEn": "You need to harden an ADK agent with evaluation and production deployment guidance.",
      "whenVi": "Khi cần làm chắc agent ADK bằng evaluation và hướng dẫn deploy production.",
      "expectedEn": "Lays out the evalset JSON and adk eval path, confirms whether App is needed for plugins or lifecycle handling, and routes production deployment to Cloud Run, Vertex AI Agent Engine, or GKE.",
      "expectedVi": "Trình bày evalset JSON và đường chạy adk eval, xác nhận có cần App cho plugin hoặc lifecycle không, rồi định tuyến deploy production tới Cloud Run, Vertex AI Agent Engine hoặc GKE."
    }
  ],
  "invocation": invocation,
  "reportOutput": {
    "titleEn": "ADK implementation guidance",
    "titleVi": "Hướng dẫn triển khai ADK",
    "patternEn": "Recommended agent type, package structure, key APIs, CLI checks, eval/deploy path.",
    "patternVi": "Loại agent nên dùng, cấu trúc package, API chính, lệnh CLI kiểm tra và hướng eval/deploy.",
    "descEn": "The result should leave the user with an ADK-discoverable Python agent or a concrete implementation plan.",
    "descVi": "Kết quả nên giúp user có agent Python mà ADK phát hiện được hoặc một plan triển khai cụ thể."
  }
};

export default data;

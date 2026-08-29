import type { SkillInfographic } from '@/data/guides/how-ck-works';

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
      "labelEn": "MCP-enabled agent",
      "labelVi": "Agent có MCP",
      "command": "/ak:google-adk-python build a support triage agent with MCP tools and persistent session state",
      "whenEn": "You need ADK architecture and code shape for tool-using agents.",
      "whenVi": "Khi cần kiến trúc ADK và cấu trúc code cho agent dùng tool.",
      "expectedEn": "Selects Agent/App patterns, shows package shape, wires MCP tools and state, and recommends local test/eval commands.",
      "expectedVi": "Chọn pattern Agent/App, đưa cấu trúc package, nối MCP tools và state, rồi đề xuất lệnh test/eval local.",
      "recommended": true
    },
    {
      "labelEn": "A2A system",
      "labelVi": "Hệ A2A",
      "command": "/ak:google-adk-python design a RemoteA2aAgent coordinator for two remote domain agents",
      "whenEn": "You are connecting remote agents via A2A instead of local sub-agents.",
      "whenVi": "Khi cần nối agent từ xa qua A2A thay vì sub-agent local.",
      "expectedEn": "Explains the RemoteA2aAgent role, coordinator shape, and testing/deployment considerations.",
      "expectedVi": "Giải thích vai trò RemoteA2aAgent, hình dạng coordinator và lưu ý test/deploy."
    }
  ],
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

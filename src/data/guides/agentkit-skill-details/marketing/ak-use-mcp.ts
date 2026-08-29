import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-use-mcp",
  "command": "/ak:use-mcp",
  "kit": "marketer",
  "header": {
    "titleEn": "/ak:use-mcp",
    "titleVi": "/ak:use-mcp",
    "taglineEn": "Discover and execute MCP server tools through the narrowest safe path: runtime-native tools first, deterministic direct scripts when needed.",
    "taglineVi": "Khám phá và chạy MCP server tool bằng đường hẹp an toàn nhất: ưu tiên tool có sẵn trong runtime, dùng script trực tiếp khi cần."
  },
  "hardGate": {
    "type": "critical",
    "titleEn": "No silent credential/config copying",
    "titleVi": "Không tự ý sao chép credential/config",
    "contentEn": "Direct scripts may read .claude/.mcp.json, but do not copy credentials into another runtime, never copy that file into Pi, and keep mutations inside the user's requested scope.",
    "contentVi": "Script trực tiếp có thể đọc .claude/.mcp.json, nhưng không sao chép credential sang runtime khác, không bao giờ copy file đó vào Pi, và mọi thay đổi phải nằm trong phạm vi người dùng yêu cầu."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Choose path",
      "titleVi": "Chọn đường chạy",
      "descEn": "Decide between runtime-native MCP and direct scripts based on whether the active runtime already exposes the needed server or tool.",
      "descVi": "Chọn giữa MCP native trong runtime và script trực tiếp dựa trên việc runtime hiện tại đã có server/tool cần dùng hay chưa."
    },
    {
      "number": 2,
      "titleEn": "Discover native",
      "titleVi": "Tìm tool native",
      "descEn": "Inspect resources and tools visible in Claude Code, Codex, or Pi; use actual names instead of assuming shared spelling.",
      "descVi": "Kiểm tra resource và tool đang thấy trong Claude Code, Codex hoặc Pi; dùng đúng tên hiện có thay vì giả định tên giống nhau."
    },
    {
      "number": 3,
      "titleEn": "Select minimal",
      "titleVi": "Chọn tối thiểu",
      "descEn": "Pick the smallest tool that directly satisfies the task and validate required arguments before execution.",
      "descVi": "Chọn tool nhỏ nhất giải quyết trực tiếp yêu cầu và xác thực tham số bắt buộc trước khi chạy."
    },
    {
      "number": 4,
      "titleEn": "Fallback scripts",
      "titleVi": "Fallback bằng script",
      "descEn": "If the server exists only in .claude/.mcp.json or needs deterministic schemas, install scripts dependencies and use cli.ts list/call commands.",
      "descVi": "Nếu server chỉ có trong .claude/.mcp.json hoặc cần schema xác định, cài dependency cho scripts rồi dùng lệnh list/call của cli.ts."
    },
    {
      "number": 5,
      "titleEn": "Catalog",
      "titleVi": "Lập catalog",
      "descEn": "Run list-tools to persist assets/tools.json with schemas, then review it before calling unknown tools.",
      "descVi": "Chạy list-tools để lưu assets/tools.json kèm schema, rồi đọc catalog đó trước khi gọi tool chưa rõ."
    },
    {
      "number": 6,
      "titleEn": "Execute",
      "titleVi": "Thực thi",
      "descEn": "Call the selected MCP tool with validated JSON arguments, timeout handling, and lifecycle cleanup from the script client when applicable.",
      "descVi": "Gọi MCP tool đã chọn với JSON args hợp lệ, xử lý timeout và cleanup lifecycle qua script client khi áp dụng."
    },
    {
      "number": 7,
      "titleEn": "Handle limits",
      "titleVi": "Xử lý giới hạn",
      "descEn": "For Chrome cookie/profile work invoke ak:chrome-profile first; do not use mcp-builder as a fallback for consuming existing servers.",
      "descVi": "Với việc cần cookie/profile Chrome, gọi ak:chrome-profile trước; không dùng mcp-builder làm fallback để tiêu thụ server sẵn có."
    },
    {
      "number": 8,
      "titleEn": "Report",
      "titleVi": "Báo cáo",
      "descEn": "Explain which path was used, what capability was found, what was executed, and any server visibility caveat.",
      "descVi": "Nêu rõ đã dùng đường nào, tìm thấy capability gì, đã chạy gì và lưu ý nào về khả năng nhìn thấy server. "
    }
  ],
  "corePrinciplesEn": [
    "Use runtime-native MCP when visible; it has the lowest setup and context cost.",
    "Use direct scripts for deterministic tool names, schemas, and servers declared outside the active runtime.",
    "Capability discovery comes before execution.",
    "MCP consumption is not MCP server creation; mcp-builder is not a fallback."
  ],
  "corePrinciplesVi": [
    "Dùng MCP native trong runtime khi thấy được; đây là đường ít setup và ít tốn context nhất.",
    "Dùng script trực tiếp khi cần tên tool, schema rõ ràng hoặc server không đăng ký trong runtime hiện tại.",
    "Phải khám phá capability trước khi thực thi.",
    "Dùng MCP server khác với tạo server MCP; mcp-builder không phải fallback."
  ],
  "expertiseAreasEn": [
    "MCP tool discovery",
    "Schema-checked tool execution",
    "Direct script client workflows",
    "Persistent tool catalogs",
    "Runtime visibility caveats"
  ],
  "expertiseAreasVi": [
    "Khám phá MCP tool",
    "Thực thi tool có kiểm schema",
    "Workflow client script trực tiếp",
    "Catalog tool lưu lâu dài",
    "Lưu ý về khả năng nhìn thấy của runtime"
  ],
  "skillStack": [
    {
      "name": "Runtime MCP tools",
      "type": "tool"
    },
    {
      "name": "@modelcontextprotocol/sdk",
      "type": "tool"
    },
    {
      "name": "cli.ts",
      "type": "tool"
    },
    {
      "name": "assets/tools.json",
      "type": "tool"
    },
    {
      "name": "/ak:chrome-profile",
      "type": "skill"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Tool discovery",
      "labelVi": "Khám phá tool",
      "command": "/ak:use-mcp discover the available browser automation tools",
      "whenEn": "Use when you need to know what MCP capabilities are available before choosing one.",
      "whenVi": "Dùng khi cần biết capability MCP nào đang có trước khi chọn tool.",
      "expectedEn": "A minimal catalog of relevant tools and argument requirements.",
      "expectedVi": "Catalog tối thiểu các tool liên quan và yêu cầu tham số.",
      "recommended": true
    },
    {
      "labelEn": "Controlled execution",
      "labelVi": "Thực thi có kiểm soát",
      "command": "/ak:use-mcp call the notebook source list tool for this project",
      "whenEn": "Use when the task requires executing a specific MCP capability safely.",
      "whenVi": "Dùng khi tác vụ cần chạy an toàn một capability MCP cụ thể.",
      "expectedEn": "Validated MCP call path with result or visibility caveat.",
      "expectedVi": "Đường gọi MCP đã xác thực kèm kết quả hoặc lưu ý về visibility."
    }
  ],
  "specialOperations": [
    {
      "id": "runtime-native",
      "titleEn": "Runtime-native first",
      "titleVi": "Ưu tiên runtime-native",
      "descEn": "If the tool is already exposed by the active session, avoid extra client setup and call the visible capability directly.",
      "descVi": "Nếu tool đã hiện trong phiên làm việc, tránh setup client thêm và gọi trực tiếp capability đang thấy.",
      "color": "emerald"
    },
    {
      "id": "direct-scripts",
      "titleEn": "Direct scripts",
      "titleVi": "Script trực tiếp",
      "descEn": "Use the bundled client for servers only declared in .claude/.mcp.json or for reproducible scripted workflows.",
      "descVi": "Dùng client đi kèm cho server chỉ khai báo trong .claude/.mcp.json hoặc workflow script cần tái lập.",
      "color": "sky"
    }
  ]
};

export default data;

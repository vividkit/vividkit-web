import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-graphify",
  "command": "/ak:graphify",
  "kit": "engineer",
  "header": {
    "titleEn": "Graphify Knowledge Graph Builder",
    "titleVi": "Graphify dựng đồ thị tri thức",
    "taglineEn": "Turn code, docs, papers, images, audio, or video into a queryable graph with local AST extraction, local transcription, semantic extraction, reports, and MCP querying.",
    "taglineVi": "Biến code, docs, paper, image, audio hoặc video thành đồ thị truy vấn được bằng AST local, transcription local, semantic extraction, report và MCP query."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Pick target",
      "titleVi": "Chọn mục tiêu",
      "descEn": "Choose a path when architecture, cross-file relationships, god nodes, or token-efficient navigation are needed.",
      "descVi": "Chọn path khi cần hiểu kiến trúc, quan hệ cross-file, god node hoặc điều hướng tiết kiệm token."
    },
    {
      "number": 2,
      "titleEn": "Install correctly",
      "titleVi": "Cài đúng package",
      "descEn": "Use the PyPI package graphifyy if the runtime is missing; do not confuse it with unrelated graphify packages.",
      "descVi": "Dùng package PyPI graphifyy nếu runtime thiếu; đừng nhầm với các package graphify không liên quan."
    },
    {
      "number": 3,
      "titleEn": "Build graph",
      "titleVi": "Dựng đồ thị",
      "descEn": "Run graphify . or graphify /path/to/project to produce graphify-out artifacts.",
      "descVi": "Chạy graphify . hoặc graphify /path/to/project để tạo artifact trong graphify-out."
    },
    {
      "number": 4,
      "titleEn": "Read outputs",
      "titleVi": "Đọc đầu ra",
      "descEn": "Inspect graph.html for visualization, GRAPH_REPORT.md for god nodes and suggested questions, graph.json for persistent queries, and cache/ for incremental state.",
      "descVi": "Xem graph.html để trực quan hóa, GRAPH_REPORT.md để thấy god node và câu hỏi gợi ý, graph.json để truy vấn lâu dài, và cache/ cho trạng thái incremental."
    },
    {
      "number": 5,
      "titleEn": "Query via MCP",
      "titleVi": "Truy vấn qua MCP",
      "descEn": "When MCP mode is needed, serve graphify-out/graph.json with python -m graphify.serve and use query_graph, get_node, get_neighbors, or shortest_path.",
      "descVi": "Khi cần MCP, serve graphify-out/graph.json bằng python -m graphify.serve và dùng query_graph, get_node, get_neighbors hoặc shortest_path."
    },
    {
      "number": 6,
      "titleEn": "Combine with scout",
      "titleVi": "Kết hợp scout",
      "descEn": "Use Graphify for high-level structure and /ak:scout for specific file discovery.",
      "descVi": "Dùng Graphify cho cấu trúc cấp cao và /ak:scout để tìm file cụ thể."
    },
    {
      "number": 7,
      "titleEn": "Update incrementally",
      "titleVi": "Cập nhật tăng dần",
      "descEn": "Rerun after changes; SHA256 cache means only changed files are reprocessed.",
      "descVi": "Chạy lại sau thay đổi; cache SHA256 giúp chỉ xử lý file đã đổi."
    },
    {
      "number": 8,
      "titleEn": "Name privacy boundary",
      "titleVi": "Nêu ranh giới riêng tư",
      "descEn": "Report that code AST and audio/video transcription are local, while docs/images use the configured model provider for semantic extraction.",
      "descVi": "Báo rõ AST code và transcript audio/video chạy local, còn docs/images dùng provider model đã cấu hình để semantic extraction."
    }
  ],
  "hardGate": {
    "type": "info",
    "titleEn": "Privacy depends on input type",
    "titleVi": "Quyền riêng tư phụ thuộc loại input",
    "contentEn": "Code is processed locally through tree-sitter and media is transcribed locally, but docs/images may be sent to the configured model provider.",
    "contentVi": "Code được xử lý local qua tree-sitter và media được transcript local, nhưng docs/images có thể được gửi tới model provider đã cấu hình."
  },
  "corePrinciplesEn": [
    "Use graphs to navigate relationships, not to replace source-level inspection.",
    "Start with the report and visualization, then query graph.json for targeted paths.",
    "Separate extracted facts from inferred or ambiguous relationships."
  ],
  "corePrinciplesVi": [
    "Dùng đồ thị để điều hướng quan hệ, không thay thế việc kiểm tra source.",
    "Bắt đầu từ report và visualization, rồi truy vấn graph.json cho đường cụ thể.",
    "Tách facts được trích xuất khỏi quan hệ suy luận hoặc còn mơ hồ."
  ],
  "expertiseAreasEn": [
    "Architecture discovery",
    "Cross-file relationships",
    "God-node analysis",
    "MCP graph querying",
    "Token-efficient context maps"
  ],
  "expertiseAreasVi": [
    "Khám phá kiến trúc",
    "Quan hệ cross-file",
    "Phân tích god-node",
    "Truy vấn graph qua MCP",
    "Bản đồ ngữ cảnh tiết kiệm token"
  ],
  "invocation": {
    "syntax": "/ak:graphify [path] [--mcp|--report|--watch]",
    "arguments": [
      {
        "token": "[path]",
        "titleEn": "Input path",
        "titleVi": "Đường dẫn đầu vào",
        "descEn": "Folder or bounded document set to graph. Choose the smallest useful scope; the command writes graphify-out/ relative to the run location and does not automatically include unrelated secrets, build output, or archives.",
        "descVi": "Thư mục hoặc tập tài liệu có giới hạn cần dựng graph. Chọn phạm vi nhỏ nhất đủ dùng; lệnh ghi graphify-out/ tương đối với nơi chạy và không tự động đưa secret, build output hoặc archive không liên quan vào.",
        "exampleCommand": "/ak:graphify ./src --report"
      }
    ],
    "options": [
      {
        "token": "--report",
        "titleEn": "Report emphasis",
        "titleVi": "Nhấn mạnh report",
        "descEn": "Center the result on GRAPH_REPORT.md findings such as prominent nodes, surprising relationships, and suggested questions. Report claims still need source review.",
        "descVi": "Tập trung kết quả vào phát hiện trong GRAPH_REPORT.md như node nổi bật, quan hệ bất ngờ và câu hỏi gợi ý. Claim trong report vẫn cần đối chiếu source.",
        "exampleCommand": "/ak:graphify ./src --report"
      },
      {
        "token": "--watch",
        "titleEn": "Watch rebuilds",
        "titleVi": "Theo dõi rebuild",
        "descEn": "Rebuild incrementally as files change. This starts ongoing observation and repeated writes; it does not authorize a background process beyond the requested run.",
        "descVi": "Rebuild tăng dần khi file thay đổi. Tùy chọn này bắt đầu theo dõi liên tục và ghi lặp lại; không cho phép process nền ngoài lần chạy đã yêu cầu.",
        "exampleCommand": "/ak:graphify . --watch"
      },
      {
        "token": "--mcp",
        "titleEn": "MCP graph queries",
        "titleVi": "Truy vấn graph qua MCP",
        "descEn": "Prepare graphify-out/graph.json for MCP-backed query tools such as query_graph, get_node, get_neighbors, and shortest_path. Server installation and client configuration remain separate requirements.",
        "descVi": "Chuẩn bị graphify-out/graph.json cho các tool truy vấn qua MCP như query_graph, get_node, get_neighbors và shortest_path. Việc cài server và cấu hình client vẫn là yêu cầu riêng.",
        "exampleCommand": "/ak:graphify . --mcp"
      }
    ]
  },
  "outputFlags": [
    {
      "flag": "--mcp",
      "titleEn": "MCP-ready graph use",
      "titleVi": "Dùng đồ thị qua MCP",
      "descEn": "Use when the graph should be served to Claude through graph query tools.",
      "descVi": "Dùng khi cần serve đồ thị cho Claude bằng các tool truy vấn graph.",
      "exampleCommand": "/ak:graphify . --mcp"
    },
    {
      "flag": "--report",
      "titleEn": "Report-focused output",
      "titleVi": "Đầu ra tập trung vào report",
      "descEn": "Use when GRAPH_REPORT.md insights are the main deliverable.",
      "descVi": "Dùng khi insight trong GRAPH_REPORT.md là deliverable chính.",
      "exampleCommand": "/ak:graphify src --report"
    },
    {
      "flag": "--watch",
      "titleEn": "Watch rebuilds",
      "titleVi": "Theo dõi và rebuild",
      "descEn": "Auto-rebuild as files change during exploration.",
      "descVi": "Tự rebuild khi file thay đổi trong lúc khám phá.",
      "exampleCommand": "/ak:graphify . --watch"
    }
  ],
  "skillStack": [
    {
      "name": "graphifyy",
      "type": "tool"
    },
    {
      "name": "tree-sitter",
      "type": "tool"
    },
    {
      "name": "Whisper",
      "type": "tool"
    },
    {
      "name": "query_graph",
      "type": "tool"
    },
    {
      "name": "ak:scout",
      "type": "skill"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Build current graph",
      "labelVi": "Dựng graph hiện tại",
      "command": "/ak:graphify .",
      "whenEn": "You need a first architecture map of an unfamiliar repository before planning.",
      "whenVi": "Khi cần bản đồ kiến trúc đầu tiên của repo lạ trước khi lập kế hoạch.",
      "expectedEn": "Builds graphify-out/graph.html, GRAPH_REPORT.md, graph.json, and cache artifacts, then uses the report to surface god nodes, surprising connections, and useful follow-up questions.",
      "expectedVi": "Tạo graphify-out/graph.html, GRAPH_REPORT.md, graph.json và cache, rồi dùng report để nêu god node, liên kết bất ngờ và câu hỏi follow-up hữu ích.",
      "recommended": true
    },
    {
      "labelEn": "Report-focused analysis",
      "labelVi": "Phân tích tập trung vào report",
      "command": "/ak:graphify src --report",
      "whenEn": "You mainly want the GRAPH_REPORT.md summary for architecture, dependency chains, and god-node review.",
      "whenVi": "Khi chủ yếu cần tóm tắt GRAPH_REPORT.md cho kiến trúc, chuỗi phụ thuộc và rà soát god-node.",
      "expectedEn": "Runs Graphify against src and centers the answer on GRAPH_REPORT.md findings: most-connected concepts, surprising relationships, and suggested questions for source inspection.",
      "expectedVi": "Chạy Graphify trên src và tập trung câu trả lời vào phát hiện trong GRAPH_REPORT.md: khái niệm liên kết nhiều nhất, quan hệ bất ngờ và câu hỏi gợi ý để kiểm tra source."
    },
    {
      "labelEn": "Prepare MCP queries",
      "labelVi": "Chuẩn bị truy vấn MCP",
      "command": "/ak:graphify . --mcp",
      "whenEn": "You want Claude to query the generated graph across sessions through MCP graph tools.",
      "whenVi": "Khi muốn Claude truy vấn graph đã tạo qua các công cụ MCP graph giữa nhiều phiên.",
      "expectedEn": "Builds graphify-out/graph.json and prepares MCP use with python -m graphify.serve so query_graph, get_node, get_neighbors, and shortest_path can inspect relationships.",
      "expectedVi": "Tạo graphify-out/graph.json và chuẩn bị dùng MCP bằng python -m graphify.serve để query_graph, get_node, get_neighbors và shortest_path kiểm tra quan hệ."
    },
    {
      "labelEn": "Watch incremental rebuilds",
      "labelVi": "Theo dõi rebuild tăng dần",
      "command": "/ak:graphify . --watch",
      "whenEn": "You are changing files while exploring and want the graph refreshed as the project evolves.",
      "whenVi": "Khi đang sửa file trong lúc khám phá và muốn graph được làm mới theo thay đổi của dự án.",
      "expectedEn": "Runs watch mode and relies on the graphify-out/cache SHA256 hashes so rebuilds reprocess only changed files while keeping graph outputs current.",
      "expectedVi": "Chạy watch mode và dựa vào hash SHA256 trong graphify-out/cache để rebuild chỉ xử lý file đã đổi trong khi giữ graph output luôn cập nhật."
    }
  ],
  "reportOutput": {
    "titleEn": "Graphify artifacts",
    "titleVi": "Artifact Graphify",
    "patternEn": "graphify-out/graph.html, GRAPH_REPORT.md, graph.json, cache/.",
    "patternVi": "graphify-out/graph.html, GRAPH_REPORT.md, graph.json, cache/.",
    "locationEn": "graphify-out/ in the target directory.",
    "locationVi": "Thư mục graphify-out/ trong target.",
    "descEn": "Use the report for orientation, the HTML for exploration, and graph.json/MCP for repeatable queries.",
    "descVi": "Dùng report để định hướng, HTML để khám phá và graph.json/MCP cho truy vấn lặp lại được."
  }
};

export default data;

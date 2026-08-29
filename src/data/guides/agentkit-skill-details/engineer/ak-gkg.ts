import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-gkg",
  "command": "/ak:gkg",
  "kit": "engineer",
  "header": {
    "titleEn": "GKG Semantic Code Graph",
    "titleVi": "Đồ thị mã ngữ nghĩa GKG",
    "taglineEn": "Index a Git repository with GitLab Knowledge Graph, then use MCP or HTTP queries for definitions, references, impact analysis, and architecture understanding.",
    "taglineVi": "Lập chỉ mục Git repo bằng GitLab Knowledge Graph, rồi truy vấn qua MCP hoặc HTTP để tìm định nghĩa, chỗ dùng, ảnh hưởng refactor và kiến trúc."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Confirm fit",
      "titleVi": "Xác nhận đúng việc",
      "descEn": "Use GKG for semantic navigation, find-usages, go-to-definition, impact analysis, architecture diagrams, or RAG-style code understanding; use repomix instead for quick dumps or unsupported languages.",
      "descVi": "Dùng GKG khi cần điều hướng ngữ nghĩa, tìm chỗ dùng, nhảy tới định nghĩa, phân tích ảnh hưởng, vẽ kiến trúc hoặc hiểu mã kiểu RAG; dùng repomix nếu chỉ cần dump ngữ cảnh nhanh hoặc ngôn ngữ chưa phù hợp."
    },
    {
      "number": 2,
      "titleEn": "Check repository",
      "titleVi": "Kiểm tra repo",
      "descEn": "Ensure the target is an initialized Git repository and note that GKG stores indexes under ~/.gkg/.",
      "descVi": "Bảo đảm mục tiêu là Git repo đã khởi tạo và nhớ rằng GKG lưu chỉ mục trong ~/.gkg/."
    },
    {
      "number": 3,
      "titleEn": "Index code",
      "titleVi": "Lập chỉ mục mã",
      "descEn": "Run the documented GKG indexing flow such as gkg index or gkg index /path/to/project --stats before querying.",
      "descVi": "Chạy luồng lập chỉ mục đã ghi, như gkg index hoặc gkg index /path/to/project --stats, trước khi truy vấn."
    },
    {
      "number": 4,
      "titleEn": "Start query server",
      "titleVi": "Khởi động máy chủ truy vấn",
      "descEn": "Start gkg server start so MCP tools or the HTTP API at localhost:27495 can read the graph.",
      "descVi": "Khởi động gkg server start để công cụ MCP hoặc HTTP API tại localhost:27495 đọc được đồ thị."
    },
    {
      "number": 5,
      "titleEn": "Query symbols",
      "titleVi": "Truy vấn ký hiệu",
      "descEn": "Use get_references or /api/graph/search for symbol usages, definitions, and dependency paths.",
      "descVi": "Dùng get_references hoặc /api/graph/search để tìm chỗ dùng, định nghĩa và đường phụ thuộc của ký hiệu."
    },
    {
      "number": 6,
      "titleEn": "Review impact",
      "titleVi": "Rà soát ảnh hưởng",
      "descEn": "For refactors, index affected repos and inspect every call site before changing symbols.",
      "descVi": "Khi refactor, lập chỉ mục các repo liên quan và xem mọi call site trước khi đổi ký hiệu."
    },
    {
      "number": 7,
      "titleEn": "Respect limits",
      "titleVi": "Tôn trọng giới hạn",
      "descEn": "Report language-support caveats: Ruby/Java/Kotlin cross-file refs are full, while Python/TypeScript/JavaScript cross-file refs are still in progress.",
      "descVi": "Báo rõ giới hạn hỗ trợ ngôn ngữ: Ruby/Java/Kotlin có cross-file refs đầy đủ, còn Python/TypeScript/JavaScript vẫn đang hoàn thiện."
    }
  ],
  "hardGate": {
    "type": "warning",
    "titleEn": "Stop the server before re-indexing",
    "titleVi": "Dừng server trước khi lập chỉ mục lại",
    "contentEn": "The SKILL.md states that the GKG server must be stopped before re-indexing; do not refresh an index under a live server.",
    "contentVi": "SKILL.md ghi rõ phải dừng GKG server trước khi lập chỉ mục lại; đừng làm mới index khi server vẫn đang chạy."
  },
  "corePrinciplesEn": [
    "Use GKG for semantic relationships, not raw token dumps.",
    "Index before querying; queries are only as good as the current graph.",
    "Treat incomplete TS/JS/Python cross-file references as caveats in the result."
  ],
  "corePrinciplesVi": [
    "Dùng GKG cho quan hệ ngữ nghĩa, không dùng như công cụ dump token thô.",
    "Lập chỉ mục trước khi truy vấn; kết quả chỉ đáng tin bằng đồ thị hiện có.",
    "Nêu rõ caveat khi cross-file refs của TS/JS/Python chưa đầy đủ."
  ],
  "expertiseAreasEn": [
    "Go-to-definition and find-usages",
    "Refactor impact analysis",
    "Architecture and dependency graphing",
    "MCP/HTTP graph querying"
  ],
  "expertiseAreasVi": [
    "Nhảy tới định nghĩa và tìm chỗ dùng",
    "Phân tích ảnh hưởng refactor",
    "Vẽ kiến trúc và đồ thị phụ thuộc",
    "Truy vấn đồ thị qua MCP/HTTP"
  ],
  "skillStack": [
    {
      "name": "gkg index",
      "type": "tool"
    },
    {
      "name": "gkg server",
      "type": "tool"
    },
    {
      "name": "get_references",
      "type": "tool"
    },
    {
      "name": "HTTP /api/graph/search",
      "type": "tool"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Find usages",
      "labelVi": "Tìm chỗ dùng",
      "command": "/ak:gkg AuthService.createSession",
      "whenEn": "You need every reference to a function or class before editing it.",
      "whenVi": "Khi cần biết mọi nơi dùng một hàm hoặc class trước khi sửa.",
      "expectedEn": "Indexes or uses the current graph, queries references, and reports call sites plus language caveats.",
      "expectedVi": "Lập hoặc dùng đồ thị hiện tại, truy vấn references, rồi báo call site kèm caveat ngôn ngữ.",
      "recommended": true
    },
    {
      "labelEn": "Impact analysis",
      "labelVi": "Phân tích ảnh hưởng",
      "command": "/ak:gkg impact of renaming UserRepository",
      "whenEn": "A refactor may cross files or packages.",
      "whenVi": "Khi refactor có thể ảnh hưởng nhiều file hoặc package.",
      "expectedEn": "Lists affected symbols and asks you to review all call sites before refactoring.",
      "expectedVi": "Liệt kê ký hiệu bị ảnh hưởng và yêu cầu rà mọi call site trước khi refactor."
    }
  ],
  "reportOutput": {
    "titleEn": "Semantic graph findings",
    "titleVi": "Kết quả đồ thị ngữ nghĩa",
    "patternEn": "Indexed target, query used, matching symbols, references, caveats.",
    "patternVi": "Mục tiêu đã index, truy vấn đã dùng, ký hiệu khớp, references và caveat.",
    "locationEn": "GKG storage under ~/.gkg/; query server at localhost:27495 when running.",
    "locationVi": "GKG lưu dưới ~/.gkg/; server truy vấn ở localhost:27495 khi đang chạy.",
    "descEn": "The useful output is an auditable set of symbols and relationships, not a generic code summary.",
    "descVi": "Đầu ra hữu ích là tập ký hiệu và quan hệ có thể kiểm chứng, không phải tóm tắt mã chung chung."
  }
};

export default data;

import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-tech-graph",
  "command": "/ak:tech-graph",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:tech-graph — Publish-Grade SVG/PNG Diagrams",
    "titleVi": "/ak:tech-graph — Sơ đồ SVG/PNG chất lượng xuất bản",
    "taglineEn": "Generates and validates production-quality architecture, data flow, flowchart, sequence, agent/memory, UML, network, timeline, matrix, and concept diagrams across seven visual styles.",
    "taglineVi": "Sinh và kiểm tra sơ đồ chất lượng production cho kiến trúc, data flow, flowchart, sequence, agent/memory, UML, network, timeline, matrix và concept map với bảy phong cách hình ảnh."
  },
  "hardGate": {
    "type": "critical",
    "titleEn": "Validate SVG, export PNG, inspect render",
    "titleVi": "Phải validate SVG, export PNG, kiểm hình render",
    "contentEn": "Verify rsvg-convert is available before use, write complete SVG with the mandatory Python list method, validate with rsvg-convert, export the 1920px PNG, and visually self-review when image reading is available. Do not treat syntax validity as proof of visual correctness.",
    "contentVi": "Phải xác minh rsvg-convert có sẵn trước khi dùng, viết SVG đầy đủ bằng Python list method bắt buộc, validate bằng rsvg-convert, export PNG 1920px và tự review hình khi đọc được ảnh. Không xem việc đúng cú pháp là bằng chứng hình render đã đúng."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Classify diagram",
      "titleVi": "Phân loại sơ đồ",
      "descEn": "Choose architecture, data flow, flowchart, agent, memory, sequence, UML, ER, network, timeline, matrix, or concept-map layout rules.",
      "descVi": "Chọn luật layout cho kiến trúc, data flow, flowchart, agent, memory, sequence, UML, ER, network, timeline, matrix hoặc concept map."
    },
    {
      "number": 2,
      "titleEn": "Extract structure",
      "titleVi": "Rút cấu trúc",
      "descEn": "Identify layers, nodes, edges, flows, semantic groups, data types, lifelines, states, or entities from the request.",
      "descVi": "Rút ra layer, node, cạnh nối, flow, nhóm ngữ nghĩa, loại dữ liệu, lifeline, trạng thái hoặc entity từ yêu cầu."
    },
    {
      "number": 3,
      "titleEn": "Plan layout",
      "titleVi": "Lập layout",
      "descEn": "Apply diagram-specific spacing, grid, viewBox, grouping, arrow direction, and label rules before writing SVG.",
      "descVi": "Áp dụng spacing, grid, viewBox, grouping, hướng mũi tên và luật nhãn theo từng loại sơ đồ trước khi viết SVG."
    },
    {
      "number": 4,
      "titleEn": "Load style",
      "titleVi": "Nạp style",
      "descEn": "Use style 1 flat icon by default or load the requested numbered style reference for exact tokens and SVG patterns.",
      "descVi": "Mặc định dùng style 1 flat icon hoặc nạp reference style theo số người dùng yêu cầu để lấy token và mẫu SVG chính xác."
    },
    {
      "number": 5,
      "titleEn": "Map visuals",
      "titleVi": "Ánh xạ hình khối",
      "descEn": "Map users, LLMs, agents, memory, tools, APIs, queues, files, decisions, and data to the documented shape vocabulary.",
      "descVi": "Ánh xạ user, LLM, agent, memory, tool, API, queue, file, decision và data sang bộ hình khối đã quy định."
    },
    {
      "number": 6,
      "titleEn": "Check icons",
      "titleVi": "Kiểm icon",
      "descEn": "Load the icon reference when known products need recognizable symbols before SVG generation begins.",
      "descVi": "Nạp icon reference khi sản phẩm quen thuộc cần ký hiệu nhận diện trước khi bắt đầu sinh SVG."
    },
    {
      "number": 7,
      "titleEn": "Write SVG",
      "titleVi": "Viết SVG",
      "descEn": "Use the mandatory Python list method for complete SVG content; helper scripts can create templates or validate complex diagrams.",
      "descVi": "Dùng Python list method bắt buộc để ghi SVG đầy đủ; script hỗ trợ có thể tạo template hoặc validate sơ đồ phức tạp."
    },
    {
      "number": 8,
      "titleEn": "Validate SVG",
      "titleVi": "Validate SVG",
      "descEn": "Run rsvg-convert against the SVG to verify syntax and renderer compatibility before producing the final PNG.",
      "descVi": "Chạy rsvg-convert với SVG để kiểm cú pháp và khả năng render tương thích trước khi tạo PNG cuối."
    },
    {
      "number": 9,
      "titleEn": "Export PNG",
      "titleVi": "Export PNG",
      "descEn": "Render the same SVG to a 1920px PNG artifact after validation succeeds.",
      "descVi": "Render chính SVG đó thành artifact PNG 1920px sau khi validation pass."
    },
    {
      "number": 10,
      "titleEn": "Report paths",
      "titleVi": "Báo đường dẫn",
      "descEn": "Return the generated SVG and PNG file paths after export.",
      "descVi": "Trả đường dẫn tệp SVG và PNG đã tạo sau khi export."
    },
    {
      "number": 11,
      "titleEn": "Self-review render",
      "titleVi": "Tự review hình render",
      "descEn": "When image reading is available, inspect the PNG for collisions, label overlap, clipped text, clutter, and legend placement; revise and re-export if needed.",
      "descVi": "Khi đọc được ảnh, kiểm PNG để tìm va chạm, nhãn chồng nhau, chữ bị cắt, bố cục rối và vị trí legend; sửa rồi export lại nếu cần."
    }
  ],
  "corePrinciplesEn": [
    "Diagram type determines layout rules",
    "Arrow colors must carry semantic meaning",
    "Every arrow label needs a background and safe distance",
    "Syntax validation is necessary but not visual proof"
  ],
  "corePrinciplesVi": [
    "Loại sơ đồ quyết định luật layout",
    "Màu mũi tên phải mang ý nghĩa ngữ nghĩa",
    "Mỗi nhãn mũi tên cần có nền và khoảng cách an toàn",
    "Kiểm cú pháp là cần thiết nhưng chưa chứng minh hình ảnh đã đúng"
  ],
  "expertiseAreasEn": [
    "architecture diagrams",
    "agent memory diagrams",
    "UML and ER",
    "SVG validation",
    "PNG export",
    "visual self-review"
  ],
  "expertiseAreasVi": [
    "sơ đồ kiến trúc",
    "sơ đồ memory agent",
    "UML và ER",
    "kiểm SVG",
    "export PNG",
    "tự review hình ảnh"
  ],
  "promptExamples": [
    {
      "labelEn": "Evidence-backed data flow",
      "labelVi": "Data flow có bằng chứng",
      "command": "/ak:tech-graph create a data-flow diagram for auth from current docs and deployment config; show browser, gateway, auth service, session store, and audit sink; label payloads and assumptions; style 1; write ./artifacts/auth-flow.svg and PNG",
      "whenEn": "Use when a durable SVG and PNG pair should explain verified system data movement for publication.",
      "whenVi": "Dùng khi cần cặp SVG và PNG bền vững để giải thích luồng dữ liệu hệ thống đã xác minh cho mục đích xuất bản.",
      "expectedEn": "Establishes source-backed scope, classifies data-flow layout, plans semantic arrows and legend, writes SVG, validates it with rsvg-convert, exports PNG, visually reviews when possible, and reports both artifact paths.",
      "expectedVi": "Thiết lập phạm vi có bằng chứng, phân loại layout data-flow, lập mũi tên ngữ nghĩa và legend, viết SVG, validate bằng rsvg-convert, export PNG, review hình khi có thể và báo cả hai artifact path.",
      "recommended": true
    },
    {
      "labelEn": "Agent memory architecture",
      "labelVi": "Kiến trúc memory agent",
      "command": "/ak:tech-graph visualize agent memory write and read paths for a support bot with working memory, vector store, graph store, retrieval, ranking, and context assembly",
      "whenEn": "Use when memory reads, writes, retrieval, and context assembly need separate visual treatment.",
      "whenVi": "Dùng khi đường đọc, ghi, retrieve và ghép context của memory cần được thể hiện riêng.",
      "expectedEn": "Uses the memory architecture rules, separates write and read paths, labels store and retrieve operations, applies semantic arrow styles, includes a legend for multiple flow types, then validates and exports SVG plus PNG.",
      "expectedVi": "Dùng luật kiến trúc memory, tách đường ghi và đọc, gắn nhãn thao tác store và retrieve, áp dụng style mũi tên ngữ nghĩa, thêm legend cho nhiều loại flow, rồi validate và export SVG cùng PNG."
    },
    {
      "labelEn": "Sequence diagram",
      "labelVi": "Sơ đồ sequence",
      "command": "/ak:tech-graph sequence diagram for checkout authorization between browser, API gateway, payment service, provider, and ledger; include success and declined alt frames",
      "whenEn": "Use when ordered participant interactions should be shown with lifelines and message timing.",
      "whenVi": "Dùng khi cần thể hiện tương tác theo thứ tự thời gian giữa các participant bằng lifeline và message.",
      "expectedEn": "Applies sequence-diagram rules for participants, lifelines, activation boxes, messages, and alt frames, sizes the viewBox from message count, writes complete SVG, validates with rsvg-convert, exports PNG, and reports paths.",
      "expectedVi": "Áp dụng luật sequence diagram cho participant, lifeline, activation box, message và alt frame, tính viewBox theo số message, viết SVG đầy đủ, validate bằng rsvg-convert, export PNG và báo path."
    },
    {
      "labelEn": "UML class diagram",
      "labelVi": "Sơ đồ class UML",
      "command": "/ak:tech-graph create a UML class diagram for the billing domain with Customer, Subscription, Invoice, PaymentAttempt, and ProviderAdapter relationships",
      "whenEn": "Use when static classes, attributes, methods, and typed relationships need publish-grade UML notation.",
      "whenVi": "Dùng khi class tĩnh, attribute, method và relationship có kiểu cần ký pháp UML đủ chất lượng xuất bản.",
      "expectedEn": "Classifies the request as a class diagram, uses compartment boxes with UML visibility and relationship notation, lays parents and implementors consistently, writes and validates the SVG, exports PNG, and reports the deliverable paths.",
      "expectedVi": "Phân loại yêu cầu là class diagram, dùng box nhiều ngăn với visibility và ký pháp relationship UML, sắp parent và implementor nhất quán, viết và validate SVG, export PNG và báo các path bàn giao."
    }
  ]
};

export default data;

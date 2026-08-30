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
  "invocation": {
    "syntax": "/ak:tech-graph [diagram-type or system description]",
    "arguments": [
      {
        "token": "[diagram-type or system description]",
        "titleEn": "Diagram brief",
        "titleVi": "Brief sơ đồ",
        "descEn": "Names the desired diagram type or describes the system, flow, architecture, memory model, UML structure, network, timeline, matrix, or concept map to render as publish-grade SVG and PNG.",
        "descVi": "Nêu loại sơ đồ mong muốn hoặc mô tả hệ thống, luồng, kiến trúc, mô hình memory, cấu trúc UML, network, timeline, matrix hoặc concept map cần render thành SVG và PNG chất lượng xuất bản.",
        "required": false,
        "exampleCommand": "/ak:tech-graph architecture diagram for the auth service"
      }
    ]
  },
  "hardGate": {
    "type": "critical",
    "titleEn": "Validate SVG and inspect visuals",
    "titleVi": "Phải kiểm SVG và hình render",
    "contentEn": "Verify rsvg-convert before use, generate complete SVGs with the Python list method for complex work, validate with rsvg-convert, export PNG, and visually self-review when image reading is available. Do not guess that syntax-valid diagrams are visually correct.",
    "contentVi": "Phải kiểm rsvg-convert trước khi dùng, sinh SVG đầy đủ bằng phương pháp Python list cho việc phức tạp, validate bằng rsvg-convert, export PNG và tự review hình khi có thể đọc ảnh. Không đoán rằng sơ đồ đúng cú pháp là đã đúng về hình ảnh."
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
      "titleEn": "Route arrows",
      "titleVi": "Định tuyến mũi tên",
      "descEn": "Assign arrow semantics, add legends for two or more flow types, route around nodes, and use jump-over arcs for crossings.",
      "descVi": "Gán ý nghĩa cho mũi tên, thêm legend khi có từ hai loại flow, đi vòng quanh node và dùng cung nhảy khi đường giao nhau."
    },
    {
      "number": 7,
      "titleEn": "Write SVG",
      "titleVi": "Viết SVG",
      "descEn": "Use helper scripts or the mandatory Python list method, with defs, markers, embedded fonts, label backgrounds, and complete closing tags.",
      "descVi": "Dùng script hỗ trợ hoặc phương pháp Python list bắt buộc, kèm defs, marker, font nhúng, nền cho nhãn và thẻ đóng đầy đủ."
    },
    {
      "number": 8,
      "titleEn": "Validate and export",
      "titleVi": "Validate và export",
      "descEn": "Run rsvg-convert syntax validation, export a 1920px PNG, then inspect for collisions, overflow, label issues, and clutter.",
      "descVi": "Chạy rsvg-convert để kiểm cú pháp, export PNG 1920px, rồi kiểm va chạm, tràn chữ, lỗi nhãn và bố cục rối."
    },
    {
      "number": 9,
      "titleEn": "Report paths",
      "titleVi": "Báo đường dẫn",
      "descEn": "Return the SVG and PNG paths plus any visual limitations if the self-review could not be performed.",
      "descVi": "Trả đường dẫn SVG và PNG cùng hạn chế hình ảnh nếu không thể tự review được."
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
      "labelEn": "Architecture diagram",
      "labelVi": "Sơ đồ kiến trúc",
      "command": "/ak:tech-graph draw the payment service architecture",
      "whenEn": "A publish-grade system architecture diagram is needed.",
      "whenVi": "Cần sơ đồ kiến trúc hệ thống đủ chất lượng để xuất bản.",
      "expectedEn": "Classifies the layout, writes SVG, validates it, exports PNG, and reports both paths.",
      "expectedVi": "Phân loại layout, viết SVG, validate, export PNG và báo cả hai đường dẫn.",
      "recommended": true
    },
    {
      "labelEn": "Agent memory flow",
      "labelVi": "Luồng memory agent",
      "command": "/ak:tech-graph visualize agent memory write and read paths",
      "whenEn": "The diagram must separate memory writes, reads, retrieval, and context assembly.",
      "whenVi": "Sơ đồ cần tách đường ghi memory, đọc memory, retrieve và ghép context.",
      "expectedEn": "Uses memory architecture rules, semantic arrows, separated read/write paths, and a clear legend.",
      "expectedVi": "Dùng luật kiến trúc memory, mũi tên có ngữ nghĩa, tách read/write path và legend rõ ràng."
    },
    {
      "labelEn": "Sequence diagram",
      "labelVi": "Sơ đồ sequence",
      "command": "/ak:tech-graph sequence diagram for checkout authorization",
      "whenEn": "A time-ordered interaction between participants should be illustrated.",
      "whenVi": "Cần minh họa tương tác theo thời gian giữa các participant.",
      "expectedEn": "Uses lifelines, activation boxes, ordered messages, and optional loop or alt frames when needed.",
      "expectedVi": "Dùng lifeline, activation box, message có thứ tự và frame loop hoặc alt khi cần."
    }
  ]
};

export default data;

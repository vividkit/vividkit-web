import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-tech-graph",
  "command": "/ak:tech-graph",
  "kit": "marketer",
  "header": {
    "titleEn": "/ak:tech-graph",
    "titleVi": "/ak:tech-graph",
    "taglineEn": "Publish-grade SVG + PNG technical diagrams for architecture, data flow, sequence, memory, UML, topology, and concept maps.",
    "taglineVi": "Tạo sơ đồ kỹ thuật SVG + PNG đạt chuẩn xuất bản cho kiến trúc, luồng dữ liệu, sequence, memory, UML, topology và concept map."
  },
  "hardGate": {
    "type": "critical",
    "titleEn": "SVG safety gates",
    "titleVi": "Cổng an toàn SVG",
    "contentEn": "Verify rsvg-convert before use; always load the selected style reference; arrow labels need background rects; arrows must not cross component interiors; never retry the same failing command endlessly.",
    "contentVi": "Kiểm tra rsvg-convert trước khi dùng; luôn nạp style reference đã chọn; nhãn mũi tên phải có nền; mũi tên không được đâm xuyên qua component; không lặp lại mãi cùng một lệnh đang lỗi."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Classify",
      "titleVi": "Phân loại",
      "descEn": "Choose the diagram family: architecture, data flow, flowchart, sequence, agent/memory, UML, ER, topology, timeline, matrix, or concept map.",
      "descVi": "Chọn nhóm sơ đồ: architecture, data flow, flowchart, sequence, agent/memory, UML, ER, topology, timeline, matrix hoặc concept map."
    },
    {
      "number": 2,
      "titleEn": "Extract",
      "titleVi": "Trích xuất",
      "descEn": "Identify layers, nodes, edges, flows, semantic groups, data categories, and required labels from the user's system description.",
      "descVi": "Xác định layer, node, cạnh nối, luồng, nhóm ý nghĩa, loại dữ liệu và nhãn cần có từ mô tả hệ thống của người dùng."
    },
    {
      "number": 3,
      "titleEn": "Layout",
      "titleVi": "Dàn bố cục",
      "descEn": "Apply the matching layout rules: lifelines for sequence, horizontal layers for architecture, radial branches for mind maps, rows/columns for matrices.",
      "descVi": "Áp dụng luật bố cục đúng loại: lifeline cho sequence, layer ngang cho architecture, nhánh tỏa tròn cho mind map, hàng/cột cho matrix."
    },
    {
      "number": 4,
      "titleEn": "Style",
      "titleVi": "Chọn phong cách",
      "descEn": "Load style 1 by default or the requested numbered style reference; use exact colors, SVG patterns, fonts, and shape vocabulary.",
      "descVi": "Mặc định nạp style 1 hoặc style reference theo số người dùng yêu cầu; dùng đúng màu, mẫu SVG, font và hệ shape vocabulary."
    },
    {
      "number": 5,
      "titleEn": "Route",
      "titleVi": "Đi dây",
      "descEn": "Assign arrow semantics, route from component edges, add legends for 2+ arrow types, and prevent line crossings with jump-over arcs.",
      "descVi": "Gán ý nghĩa cho mũi tên, nối từ mép component, thêm legend khi có từ 2 loại mũi tên, và tránh giao cắt bằng jump-over arc."
    },
    {
      "number": 6,
      "titleEn": "Generate",
      "titleVi": "Tạo SVG",
      "descEn": "Use helper scripts for complex diagrams or the mandatory Python-list method for direct SVG generation to avoid truncation and syntax mistakes.",
      "descVi": "Dùng script hỗ trợ cho sơ đồ phức tạp hoặc phương pháp Python-list bắt buộc khi viết SVG trực tiếp để tránh mất ký tự và lỗi cú pháp."
    },
    {
      "number": 7,
      "titleEn": "Validate",
      "titleVi": "Xác thực",
      "descEn": "Run rsvg-convert syntax validation, check text fit, label backgrounds, marker references, tag balance, and route collisions.",
      "descVi": "Chạy rsvg-convert để kiểm cú pháp, kiểm chữ có vừa khung, nền nhãn, marker reference, cân bằng tag và va chạm đường nối."
    },
    {
      "number": 8,
      "titleEn": "Export",
      "titleVi": "Xuất file",
      "descEn": "Export a 1920px PNG alongside the SVG, optionally inspect the rendered image, revise visual collisions, then report both paths.",
      "descVi": "Xuất PNG 1920px kèm SVG, nếu có thể thì xem ảnh đã render, sửa các va chạm thị giác rồi báo cả hai đường dẫn."
    }
  ],
  "corePrinciplesEn": [
    "Publish-grade diagrams need both valid SVG and clean rendered geometry.",
    "Diagram type determines layout; do not reuse one generic box-and-arrow pattern.",
    "Arrow meaning, label backgrounds, and legends are part of the deliverable, not polish.",
    "Prefer helper scripts/templates for complex diagrams; use direct SVG only when control is worth it."
  ],
  "corePrinciplesVi": [
    "Sơ đồ đạt chuẩn xuất bản cần SVG hợp lệ và hình render sạch về hình học.",
    "Loại sơ đồ quyết định bố cục; không dùng một mẫu box-and-arrow chung cho mọi việc.",
    "Ý nghĩa mũi tên, nền nhãn và legend là phần bắt buộc của kết quả, không phải trang trí thêm.",
    "Ưu tiên script/template cho sơ đồ phức tạp; chỉ viết SVG trực tiếp khi cần kiểm soát chi tiết."
  ],
  "expertiseAreasEn": [
    "Architecture and deployment diagrams",
    "Agent and memory flows",
    "UML class/use-case/state/ER diagrams",
    "Sequence diagrams and process flows",
    "SVG validation and PNG export"
  ],
  "expertiseAreasVi": [
    "Sơ đồ kiến trúc và triển khai",
    "Luồng agent và memory",
    "UML class/use-case/state/ER",
    "Sequence diagram và process flow",
    "Xác thực SVG và xuất PNG"
  ],
  "skillStack": [
    {
      "name": "rsvg-convert",
      "type": "tool"
    },
    {
      "name": "generate-diagram.sh",
      "type": "tool"
    },
    {
      "name": "generate-from-template.py",
      "type": "tool"
    },
    {
      "name": "validate-svg.sh",
      "type": "tool"
    },
    {
      "name": "/ak:preview",
      "type": "skill"
    },
    {
      "name": "/ak:mermaidjs-v11",
      "type": "skill"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Architecture diagram",
      "labelVi": "Sơ đồ kiến trúc",
      "command": "/ak:tech-graph architecture diagram for a RAG pipeline",
      "whenEn": "Use for a publish-ready system architecture image.",
      "whenVi": "Dùng khi cần ảnh kiến trúc hệ thống sẵn sàng đưa vào tài liệu.",
      "expectedEn": "SVG and PNG files with layered components, routed arrows, labels, and legend.",
      "expectedVi": "File SVG và PNG có component theo layer, mũi tên đi dây rõ, nhãn và legend.",
      "recommended": true
    },
    {
      "labelEn": "Sequence diagram",
      "labelVi": "Sơ đồ sequence",
      "command": "/ak:tech-graph sequence diagram of checkout payment flow",
      "whenEn": "Use for time-ordered interactions between participants.",
      "whenVi": "Dùng cho tương tác theo trình tự thời gian giữa các bên.",
      "expectedEn": "Participant lifelines, message arrows, activation boxes, and correctly scaled height for the described interaction.",
      "expectedVi": "Có lifeline, mũi tên message, activation box và chiều cao phù hợp."
    },
    {
      "labelEn": "Concept map",
      "labelVi": "Bản đồ khái niệm",
      "command": "/ak:tech-graph concept map for agent memory types",
      "whenEn": "Use when relationships are conceptual rather than procedural.",
      "whenVi": "Dùng khi quan hệ là ý niệm thay vì quy trình.",
      "expectedEn": "Radial or branch-based SVG with clean labels, curved connections, and balanced spacing between concepts.",
      "expectedVi": "SVG dạng radial hoặc phân nhánh, nhãn dễ đọc và đường nối cong gọn."
    }
  ],
  "specialOperations": [
    {
      "id": "visual-review",
      "titleEn": "Rendered review",
      "titleVi": "Review ảnh render",
      "descEn": "If image reading is available, inspect the exported PNG because valid SVG can still have crossed arrows, overlapping boxes, or hidden labels.",
      "descVi": "Nếu đọc được ảnh, hãy xem PNG đã xuất vì SVG hợp lệ vẫn có thể bị mũi tên cắt nhau, hộp chồng nhau hoặc nhãn bị che.",
      "color": "sky"
    },
    {
      "id": "style-matrix",
      "titleEn": "Style matrix",
      "titleVi": "Ma trận style",
      "descEn": "Load the style-to-diagram matrix when a requested style may not fit the selected diagram type.",
      "descVi": "Nạp ma trận style-theo-loại-sơ-đồ khi style người dùng chọn có thể không hợp với loại sơ đồ.",
      "color": "violet"
    },
    {
      "id": "fallback-template",
      "titleEn": "Template fallback",
      "titleVi": "Fallback bằng template",
      "descEn": "For complex layouts, use generator templates with node ids so routing can snap to edges instead of center-to-center lines.",
      "descVi": "Với bố cục phức tạp, dùng template generator kèm node id để đường nối bám mép hộp thay vì nối tâm-với-tâm.",
      "color": "emerald"
    }
  ],
  "reportOutput": {
    "titleEn": "Diagram assets",
    "titleVi": "Asset sơ đồ",
    "patternEn": "derived-name.svg + derived-name.png",
    "patternVi": "derived-name.svg + derived-name.png",
    "locationEn": "Current directory or user-specified output path",
    "locationVi": "Thư mục hiện tại hoặc đường dẫn output người dùng chỉ định",
    "descEn": "Final response reports generated SVG and PNG paths after validation/export.",
    "descVi": "Phản hồi cuối báo đường dẫn SVG và PNG sau khi đã xác thực và xuất file."
  },
  "outputFlags": [
    {
      "flag": "--output /path/",
      "titleEn": "Custom artifact destination",
      "titleVi": "Đích artifact tùy chỉnh",
      "descEn": "Write the generated SVG and PNG under an approved custom path instead of the current directory.",
      "descVi": "Ghi SVG và PNG đã tạo vào path tùy chỉnh đã duyệt thay vì thư mục hiện tại.",
      "exampleCommand": "/ak:tech-graph Draw a data-flow diagram --output ./docs/diagrams/"
    }
  ]
};

export default data;

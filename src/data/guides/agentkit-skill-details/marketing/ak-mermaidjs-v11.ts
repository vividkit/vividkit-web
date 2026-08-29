import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-mermaidjs-v11",
  "command": "/ak:mermaidjs-v11",
  "kit": "marketer",
  "header": {
    "titleEn": "/ak:mermaidjs-v11",
    "titleVi": "/ak:mermaidjs-v11",
    "taglineEn": "Create Mermaid.js v11 diagrams for flows, sequences, classes, ERDs, Gantt charts, states, architecture, timelines, and user journeys.",
    "taglineVi": "Tạo diagram Mermaid.js v11 cho flow, sequence, class, ERD, Gantt, state, kiến trúc, timeline và user journey."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Choose diagram",
      "titleVi": "Chọn loại diagram",
      "descEn": "Select the diagram type: flowchart, sequenceDiagram, classDiagram, stateDiagram, erDiagram, gantt, journey, or another supported type.",
      "descVi": "Chọn loại diagram: flowchart, sequenceDiagram, classDiagram, stateDiagram, erDiagram, gantt, journey hoặc loại được hỗ trợ khác."
    },
    {
      "number": 2,
      "titleEn": "Draft structure",
      "titleVi": "Phác cấu trúc",
      "descEn": "Write the Mermaid code block with the correct diagram keyword and content.",
      "descVi": "Viết code block Mermaid với keyword diagram và nội dung đúng."
    },
    {
      "number": 3,
      "titleEn": "Configure theme",
      "titleVi": "Cấu hình theme",
      "descEn": "Add frontmatter config when theme, look, fontFamily, or securityLevel needs control.",
      "descVi": "Thêm frontmatter config khi cần kiểm soát theme, look, fontFamily hoặc securityLevel."
    },
    {
      "number": 4,
      "titleEn": "Annotate safely",
      "titleVi": "Chú thích đúng cách",
      "descEn": "Use %% for Mermaid comments and keep labels readable.",
      "descVi": "Dùng %% cho comment Mermaid và giữ label dễ đọc."
    },
    {
      "number": 5,
      "titleEn": "Convert if needed",
      "titleVi": "Xuất file nếu cần",
      "descEn": "Use mmdc to convert .mmd diagrams to SVG, PNG, or PDF when an image artifact is required.",
      "descVi": "Dùng mmdc để chuyển .mmd sang SVG, PNG hoặc PDF khi cần artifact dạng ảnh."
    },
    {
      "number": 6,
      "titleEn": "Embed if needed",
      "titleVi": "Nhúng nếu cần",
      "descEn": "Use HTML integration with mermaid.initialize for browser-rendered diagrams.",
      "descVi": "Dùng tích hợp HTML với mermaid.initialize cho diagram render trong browser."
    },
    {
      "number": 7,
      "titleEn": "Apply layout review",
      "titleVi": "Rà layout",
      "descEn": "For rendered SVG layout issues, load /ak:tech-graph and apply spacing, routing, label, and z-index guidance.",
      "descVi": "Khi SVG render bị lỗi layout, nạp /ak:tech-graph và áp dụng spacing, routing, label, z-index."
    }
  ],
  "corePrinciplesEn": [
    "Pick the diagram type before writing syntax",
    "Use Mermaid v11 declarative blocks",
    "Configuration belongs in diagram frontmatter when needed",
    "Rendered layout must be checked for collisions and unreadable labels"
  ],
  "corePrinciplesVi": [
    "Chọn loại diagram trước khi viết syntax",
    "Dùng block khai báo Mermaid v11",
    "Cấu hình đặt trong frontmatter của diagram khi cần",
    "Layout đã render phải được kiểm tra va chạm và label khó đọc"
  ],
  "expertiseAreasEn": [
    "Flowcharts",
    "Sequence diagrams",
    "Architecture diagrams",
    "ER diagrams",
    "Gantt timelines",
    "Browser and CLI rendering"
  ],
  "expertiseAreasVi": [
    "Flowchart",
    "Sequence diagram",
    "Diagram kiến trúc",
    "ER diagram",
    "Timeline Gantt",
    "Render bằng browser và CLI"
  ],
  "promptExamples": [
    {
      "labelEn": "Architecture flow",
      "labelVi": "Luồng kiến trúc",
      "command": "/ak:mermaidjs-v11 flowchart for signup, billing, and webhook handling",
      "whenEn": "You need an inline Mermaid diagram inside markdown or docs.",
      "whenVi": "Khi cần diagram Mermaid inline trong markdown hoặc docs.",
      "expectedEn": "Produces a Mermaid v11 code block with readable nodes, arrows, and labels.",
      "expectedVi": "Tạo code block Mermaid v11 với node, mũi tên và label dễ đọc.",
      "recommended": true
    },
    {
      "labelEn": "User journey",
      "labelVi": "User journey",
      "command": "/ak:mermaidjs-v11 journey map for trial onboarding",
      "whenEn": "The diagram should show user stages, actions, and experience flow.",
      "whenVi": "Khi diagram cần thể hiện giai đoạn, hành động và trải nghiệm của user.",
      "expectedEn": "Uses the journey diagram type or an appropriate flow if journey syntax is not enough.",
      "expectedVi": "Dùng loại journey hoặc flow phù hợp nếu syntax journey chưa đủ."
    }
  ],
  "skillStack": [
    {
      "name": "mmdc",
      "type": "tool"
    },
    {
      "name": "Mermaid browser runtime",
      "type": "tool"
    },
    {
      "name": "/ak:tech-graph",
      "type": "skill"
    }
  ],
  "reportOutput": {
    "titleEn": "Mermaid v11 diagram",
    "titleVi": "Diagram Mermaid v11",
    "patternEn": "```mermaid code block or exported .svg/.png/.pdf",
    "patternVi": "```mermaid code block hoặc file .svg/.png/.pdf đã export",
    "descEn": "Diagram type • declarative syntax • optional config • render/export path when needed",
    "descVi": "Loại diagram • syntax khai báo • config tùy chọn • path render/export khi cần"
  }
};

export default data;

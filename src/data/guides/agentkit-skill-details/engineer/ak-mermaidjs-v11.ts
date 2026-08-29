import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-mermaidjs-v11',
  command: '/ak:mermaidjs-v11',
  kit: 'engineer',
  header: { titleEn: '/ak:mermaidjs-v11', titleVi: '/ak:mermaidjs-v11', taglineEn: 'Create Mermaid v11 diagrams for architecture, APIs, data models, timelines, states, journeys, and project plans.', taglineVi: 'Tạo sơ đồ Mermaid v11 cho kiến trúc, API, mô hình dữ liệu, timeline, state, journey và kế hoạch dự án.' },
  processFlow: [
    { number: 1, titleEn: 'Choose diagram type', titleVi: 'Chọn loại sơ đồ', descEn: 'Map the need to flowchart, sequenceDiagram, classDiagram, stateDiagram, erDiagram, gantt, journey, or another v11 type.', descVi: 'Ghép nhu cầu với flowchart, sequenceDiagram, classDiagram, stateDiagram, erDiagram, gantt, journey hoặc loại v11 khác.' },
    { number: 2, titleEn: 'Structure syntax', titleVi: 'Dựng cú pháp', descEn: 'Start with the diagram declaration and keep content valid for that diagram family.', descVi: 'Bắt đầu bằng khai báo loại diagram và giữ nội dung đúng cú pháp của nhóm đó.' },
    { number: 3, titleEn: 'Add content', titleVi: 'Thêm nội dung', descEn: 'Encode actors, entities, states, tasks, arrows, labels, dates, or relationships with concise names.', descVi: 'Mã hóa actor, entity, state, task, mũi tên, nhãn, ngày tháng hoặc quan hệ bằng tên ngắn gọn.' },
    { number: 4, titleEn: 'Configure theme', titleVi: 'Cấu hình giao diện', descEn: 'Use frontmatter or Mermaid config for theme, look, font, and security level when needed.', descVi: 'Dùng frontmatter hoặc config Mermaid cho theme, kiểu hiển thị, font và security level khi cần.' },
    { number: 5, titleEn: 'Render or export', titleVi: 'Render hoặc xuất file', descEn: 'Embed inline in Markdown/HTML or use mmdc to export SVG, PNG, or PDF.', descVi: 'Nhúng trực tiếp trong Markdown/HTML hoặc dùng mmdc để xuất SVG, PNG hay PDF.' },
    { number: 6, titleEn: 'Validate layout', titleVi: 'Kiểm tra bố cục', descEn: 'Check labels, routing, collisions, and readability; apply tech-graph spacing guidance for publishable SVGs.', descVi: 'Kiểm tra nhãn, đường nối, va chạm và độ dễ đọc; áp dụng hướng dẫn tech-graph cho SVG cần xuất bản.' },
    { number: 7, titleEn: 'Fix syntax errors', titleVi: 'Sửa lỗi cú pháp', descEn: 'Correct common mistakes: wrong diagram declaration, invalid arrows, bad pie values, malformed XY data, or missing participants.', descVi: 'Sửa các lỗi thường gặp: khai báo diagram sai, mũi tên sai, giá trị pie không hợp lệ, dữ liệu XY lỗi hoặc thiếu participant.' },
  ],
  corePrinciplesEn: ['Pick the diagram family before writing syntax', 'Keep labels concise and render-safe', 'Use Mermaid comments and frontmatter intentionally', 'For publish-grade output, validate spacing and readability'],
  corePrinciplesVi: ['Chọn đúng họ sơ đồ trước khi viết cú pháp', 'Giữ nhãn ngắn và an toàn khi render', 'Dùng comment và frontmatter Mermaid có chủ đích', 'Với output để xuất bản, phải kiểm tra khoảng cách và độ dễ đọc'],
  expertiseAreasEn: ['Flowcharts and decision trees', 'Sequence and API flows', 'Class and ER diagrams', 'Gantt timelines', 'State machines', 'Markdown and browser embedding'],
  expertiseAreasVi: ['Flowchart và cây quyết định', 'Sequence và luồng API', 'Class diagram và ERD', 'Timeline Gantt', 'State machine', 'Nhúng trong Markdown và browser'],
  promptExamples: [
    { labelEn: 'Architecture flow', labelVi: 'Luồng kiến trúc', command: '/ak:mermaidjs-v11 flowchart for webhook ingestion pipeline', whenEn: 'Use when a process or architecture needs a Mermaid flowchart.', whenVi: 'Dùng khi cần flowchart Mermaid cho quy trình hoặc kiến trúc.', expectedEn: 'Valid Mermaid v11 flowchart syntax.', expectedVi: 'Cú pháp flowchart Mermaid v11 hợp lệ.', recommended: true },
    { labelEn: 'API sequence', labelVi: 'Sequence API', command: '/ak:mermaidjs-v11 sequence diagram for checkout and webhook confirmation', whenEn: 'Use when actor interactions or API calls matter.', whenVi: 'Dùng khi cần thể hiện tương tác actor hoặc lời gọi API.', expectedEn: 'sequenceDiagram with participants and request/response messages.', expectedVi: 'sequenceDiagram có participant và message request/response.' },
    { labelEn: 'Data model', labelVi: 'Mô hình dữ liệu', command: '/ak:mermaidjs-v11 er diagram for users orders and payments', whenEn: 'Use for entity relationships and database documentation.', whenVi: 'Dùng cho quan hệ entity và tài liệu database.', expectedEn: 'ER diagram syntax with relationships and fields.', expectedVi: 'Cú pháp ER diagram có quan hệ và field.' },
  ],
  skillStack: [{ name: 'Mermaid.js v11', type: 'tool' }, { name: 'mmdc', type: 'tool' }, { name: 'ak:tech-graph', type: 'skill' }],
  reportOutput: { titleEn: 'Diagram Output', titleVi: 'Output sơ đồ', patternEn: 'Mermaid code block or exported SVG/PNG/PDF', patternVi: 'Block Mermaid hoặc file SVG/PNG/PDF đã xuất', descEn: 'A renderable Mermaid v11 diagram with the right diagram type, valid syntax, and readable layout.', descVi: 'Sơ đồ Mermaid v11 render được, đúng loại diagram, cú pháp hợp lệ và bố cục dễ đọc.' },
};

export default data;

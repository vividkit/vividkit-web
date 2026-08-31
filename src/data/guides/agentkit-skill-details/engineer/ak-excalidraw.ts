import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-excalidraw",
  command: "/ak:excalidraw",
  kit: "engineer",
  header: {
    titleEn: "/ak:excalidraw — Editable Excalidraw diagrams",
    titleVi: "/ak:excalidraw — Sơ đồ Excalidraw chỉnh sửa được",
    taglineEn: "Create editable Excalidraw architecture, data-flow, workflow, and codebase maps through live MCP canvas or file-based rendering.",
    taglineVi: "Tạo sơ đồ Excalidraw chỉnh sửa được cho kiến trúc, luồng dữ liệu, workflow và bản đồ codebase qua MCP canvas live hoặc render bằng file.",
  },
  processFlow: [
    { number: 1, titleEn: "Detect Backend", titleVi: "Nhận diện backend", descEn: "Test MCP canvas first with the Excalidraw guide; fall back to .excalidraw JSON plus Playwright rendering when MCP is unavailable.", descVi: "Thử MCP canvas trước bằng guide Excalidraw; nếu không có thì fallback sang JSON .excalidraw và render bằng Playwright." },
    { number: 2, titleEn: "Assess Depth", titleVi: "Đánh giá độ sâu", descEn: "Decide simple conceptual versus comprehensive technical; for technical diagrams, research real specs, events, APIs, and evidence first.", descVi: "Quyết định dạng conceptual đơn giản hay kỹ thuật toàn diện; với sơ đồ kỹ thuật, nghiên cứu spec, event, API và bằng chứng thật trước." },
    { number: 3, titleEn: "Map Visual Patterns", titleVi: "Ánh xạ mẫu hình", descEn: "Translate concept behavior to visual grammar: fan-out, convergence, tree, timeline, cycle, cloud, assembly line, side-by-side, or phase break.", descVi: "Chuyển hành vi khái niệm thành ngữ pháp hình ảnh: fan-out, hội tụ, cây, timeline, vòng lặp, cloud, dây chuyền, so sánh cạnh nhau hoặc ngắt phase." },
    { number: 4, titleEn: "Plan Layout", titleVi: "Dàn bố cục", descEn: "Guide the eye left-to-right or top-to-bottom, reserve whitespace for importance, and avoid uniform card grids.", descVi: "Dẫn mắt trái-sang-phải hoặc trên-xuống-dưới, dành whitespace cho phần quan trọng và tránh lưới card đồng loạt." },
    { number: 5, titleEn: "Apply Semantics", titleVi: "Gắn ngữ nghĩa", descEn: "Use colors by role, shapes by meaning, free-floating text by default, and containers only when shape adds information.", descVi: "Dùng màu theo vai trò, hình theo ý nghĩa, mặc định dùng chữ tự do, chỉ dùng container khi hình dạng thêm thông tin." },
    { number: 6, titleEn: "Auto-Map if Asked", titleVi: "Tự vẽ repo khi được yêu cầu", descEn: "For repo diagrams, detect project/framework, discover components, map connections, verify with the user, then cap at 12 components and 20 arrows.", descVi: "Với sơ đồ repo, nhận diện project/framework, tìm component, map kết nối, xác nhận với user, rồi giới hạn 12 component và 20 mũi tên." },
    { number: 7, titleEn: "Generate Canvas", titleVi: "Tạo canvas", descEn: "Use the active MCP or file workflow with roughness 0, opacity 100, monospace fontFamily 3, and generous spacing.", descVi: "Dùng workflow MCP hoặc file đang hoạt động với roughness 0, opacity 100, fontFamily monospace 3 và khoảng cách rộng rãi." },
    { number: 8, titleEn: "Self-Critique Loop", titleVi: "Vòng tự kiểm", descEn: "Render or screenshot, audit against the vision, fix overlaps/clipping/misrouted arrows, and repeat until clean.", descVi: "Render hoặc chụp màn hình, so với ý đồ ban đầu, sửa chồng lấn/cắt chữ/mũi tên sai hướng và lặp đến khi sạch." },
    { number: 9, titleEn: "Deliver Editable Output", titleVi: "Bàn giao file chỉnh được", descEn: "Return the canvas or .excalidraw file plus PNG/SVG exports when requested and call out evidence for technical diagrams.", descVi: "Trả canvas hoặc file .excalidraw cùng PNG/SVG khi được yêu cầu và nêu bằng chứng với sơ đồ kỹ thuật." },
  ],
  corePrinciplesEn: [
    "Diagrams should argue, not merely display labeled boxes.",
    "Remove all text as a test: the structure should still communicate the concept.",
    "Default to free-floating text; containers must earn their keep.",
    "Each major concept should use a different visual pattern.",
    "Visual validation is part of the work, not a final courtesy.",
  ],
  corePrinciplesVi: [
    "Sơ đồ phải lập luận bằng hình ảnh, không chỉ bày các hộp có nhãn.",
    "Thử bỏ toàn bộ chữ: cấu trúc vẫn phải truyền được ý chính.",
    "Mặc định dùng chữ tự do; container phải có lý do tồn tại.",
    "Mỗi khái niệm lớn nên dùng một mẫu hình trực quan khác nhau.",
    "Xác minh bằng mắt là một phần công việc, không phải phép lịch sự cuối cùng.",
  ],
  expertiseAreasEn: [
    "MCP live canvas editing and file-based .excalidraw generation",
    "Architecture, workflow, data-flow, and system-design diagrams",
    "Zero-config codebase auto-diagramming",
    "Semantic color, shape, and spacing systems",
    "Visual QA for overlaps, clipping, routing, balance, and export quality",
  ],
  expertiseAreasVi: [
    "Chỉnh live canvas qua MCP và sinh file .excalidraw",
    "Sơ đồ kiến trúc, workflow, luồng dữ liệu và system design",
    "Tự vẽ sơ đồ codebase không cần cấu hình",
    "Hệ màu, hình và spacing có ngữ nghĩa",
    "QA hình ảnh cho chồng lấn, cắt chữ, hướng mũi tên, cân bằng và chất lượng export",
  ],
  workflowModes: [
    { flag: "MCP Canvas", modeEn: "Live editing", modeVi: "Chỉnh sửa live", research: "mcp-workflow", redTeam: "Max 2 self-critique iterations", validation: "Canvas screenshot", cookFlag: "preferred backend" },
    { flag: "File-based", modeEn: "JSON + render", modeVi: "JSON + render", research: "file-workflow", redTeam: "Check schema/coordinates", validation: "Rendered PNG", cookFlag: "fallback backend" },
    { flag: "Auto-diagram", modeEn: "Codebase map", modeVi: "Bản đồ codebase", research: "auto-diagram-guide", redTeam: "12 components, 20 arrows", validation: "User-verified plan before draw", cookFlag: "repo visualization" },
  ],
  invocation: {
    syntax: "/ak:excalidraw <diagram request>",
    arguments: [
      {
        token: "<diagram request>",
        titleEn: "Diagram request",
        titleVi: "Yêu cầu sơ đồ",
        descEn: "Natural-language visual outcome and evidence boundary: audience, question to answer, desired depth, output path, and whether editable source, PNG, SVG, or a live canvas is required.",
        descVi: "Outcome trực quan và ranh giới bằng chứng bằng ngôn ngữ tự nhiên: audience, câu hỏi cần trả lời, độ sâu mong muốn, đường dẫn output và cần source chỉnh sửa được, PNG, SVG hay live canvas.",
        required: true,
        exampleCommand: "/ak:excalidraw \"Inspect this repository and propose an architecture overview for a new maintainer. Confirm the components and connections before drawing, then create architecture.excalidraw and architecture.png without installing software or clearing an existing canvas.\"",
          exampleCommandVi: '/ak:excalidraw "Inspect this repository and propose an architecture overview for a new maintainer. Confirm the components and connections before drawing, then create architecture.excalidraw and architecture.png without installing software or clearing an existing canvas."',
      },
    ],
  },
  specialOperations: [
    { id: "isomorphism-test", titleEn: "Isomorphism test", titleVi: "Bài test isomorphism", descEn: "If removing the text makes the diagram meaningless, the visual structure is not doing enough work.", descVi: "Nếu bỏ chữ mà sơ đồ mất nghĩa, cấu trúc hình ảnh chưa gánh đủ thông tin.", color: "violet" },
    { id: "container-test", titleEn: "Container test", titleVi: "Bài test container", descEn: "If a boxed element could work as free-floating text, remove the box.", descVi: "Nếu phần trong hộp vẫn ổn khi chuyển thành chữ tự do, hãy bỏ hộp đó.", color: "amber" },
  ],
  skillStack: [
    { name: "Excalidraw MCP canvas", type: "tool" },
    { name: "Playwright PNG renderer", type: "tool" },
    { name: "ak:tech-graph", type: "skill" },
  ],
  promptExamples: [
    { labelEn: "Architecture canvas", labelVi: "Canvas kiến trúc", command: "/ak:excalidraw draw our queue-based ingestion architecture",
      commandVi: '/ak:excalidraw vẽ kiến trúc ingestion dựa trên queue của chúng ta', whenEn: "The user needs an editable architecture or system-design diagram, not a static editorial render.", whenVi: "Người dùng cần sơ đồ kiến trúc hoặc system design có thể chỉnh sửa, không phải bản render editorial tĩnh.", expectedEn: "Detects live MCP versus file mode, researches concrete components and events for the technical diagram, maps those facts into visual patterns, then renders and repairs the editable Excalidraw output.", expectedVi: "Phát hiện mode MCP trực tiếp hay mode tệp, nghiên cứu component và event cụ thể cho sơ đồ kỹ thuật, chuyển các fact đó thành visual pattern, rồi render và sửa output Excalidraw có thể chỉnh sửa.", recommended: true },
    { labelEn: "Auto repo map", labelVi: "Tự map repo", command: "/ak:excalidraw diagram this repo",
      commandVi: '/ak:excalidraw vẽ sơ đồ repo này', whenEn: "The request is zero-config codebase visualization.", whenVi: "Yêu cầu là trực quan hóa codebase không cần cấu hình.", expectedEn: "Detects the project/framework, discovers components and connections within the tool-call limits, asks the user to confirm the proposed map before drawing, then generates an overview capped at 12 components and 20 arrows.", expectedVi: "Nhận diện project/framework, tìm component và kết nối trong giới hạn tool-call, hỏi người dùng xác nhận bản đồ đề xuất trước khi vẽ, rồi tạo overview giới hạn 12 component và 20 mũi tên." },
    { labelEn: "Workflow export", labelVi: "Xuất workflow", command: "/ak:excalidraw visualize the onboarding workflow and export PNG/SVG",
      commandVi: '/ak:excalidraw trực quan hóa quy trình onboarding và xuất PNG/SVG', whenEn: "A workflow needs an editable diagram plus requested review/export formats.", whenVi: "Workflow cần sơ đồ có thể chỉnh sửa cùng các định dạng review/export được yêu cầu.", expectedEn: "Chooses a timeline, cycle, or phase-break structure instead of uniform cards, creates the Excalidraw source or live canvas, visually checks clipping, overlaps, spacing, and arrow routing, then returns the requested PNG/SVG exports.", expectedVi: "Chọn cấu trúc timeline, cycle hoặc phase-break thay vì card đồng dạng, tạo source Excalidraw hoặc canvas trực tiếp, kiểm tra trực quan clipping, overlap, spacing và hướng arrow, rồi trả PNG/SVG đã yêu cầu." },
  ],
};

export default data;

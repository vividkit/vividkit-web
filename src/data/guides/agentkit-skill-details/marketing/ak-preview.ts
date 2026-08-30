import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-preview',
  command: '/ak:preview',
  kit: 'marketer',
  header: {
    titleEn: '/ak:preview — Universal visual viewer',
    titleVi: '/ak:preview — Trình xem visual đa năng',
    taglineEn: 'Universal viewer and visual generator for files, diagrams, slide decks, HTML explanations, visual diffs, plan reviews, and project recaps.',
    taglineVi: 'Trình xem và tạo visual đa năng cho file, sơ đồ, slide deck, giải thích HTML, visual diff, plan review và recap dự án.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'RESOLVE MODE BEFORE GENERATING',
    titleVi: 'XÁC ĐỊNH MODE TRƯỚC KHI TẠO',
    contentEn: 'Argument resolution is ordered: --stop exits, --html sets output mode, generation flags choose generation, HTML-only review flags imply HTML, explicit paths use view mode, and unresolved references require clarification. --html --ascii is unsupported.',
    contentVi: 'Thứ tự resolve argument: --stop thoát, --html đặt output mode, generation flag chọn chế độ tạo, review flag HTML-only tự bật HTML, path rõ ràng vào view mode và reference không resolve được phải hỏi lại. --html --ascii không được hỗ trợ.',
  },
  processFlow: [
    { number: 1, titleEn: 'Choose Operation', titleVi: 'Chọn thao tác', descEn: 'With no arguments, ask the user to choose view, explain, slides, diagram, ascii, diff, plan-review, recap, or stop.', descVi: 'Nếu không có argument, hỏi người dùng chọn view, explain, slides, diagram, ascii, diff, plan-review, recap hoặc stop.' },
    { number: 2, titleEn: 'Resolve Flags', titleVi: 'Resolve flag', descEn: 'Apply priority: --stop, --html, generation flags, HTML-only flags, visual routing, then path resolution.', descVi: 'Áp dụng thứ tự: --stop, --html, generation flag, flag HTML-only, visual routing rồi resolve path.' },
    { number: 3, titleEn: 'View or Generate', titleVi: 'Xem hoặc tạo', descEn: 'Existing paths enter view mode; topics with generation flags create a new explanation, deck, diagram, or ASCII output.', descVi: 'Path tồn tại vào view mode; topic kèm generation flag tạo giải thích, deck, diagram hoặc output ASCII mới.' },
    { number: 4, titleEn: 'Load References', titleVi: 'Nạp reference', descEn: 'For HTML output, read the required design, CSS, library, slide, and responsive-nav references by mode.', descVi: 'Với output HTML, nạp reference thiết kế, CSS, thư viện, slide và responsive-nav bắt buộc theo mode.' },
    { number: 5, titleEn: 'Render Visual', titleVi: 'Render visual', descEn: 'Generate Markdown, Mermaid, ASCII, or self-contained HTML with appropriate diagram and editorial visual engines.', descVi: 'Tạo Markdown, Mermaid, ASCII hoặc HTML độc lập với engine diagram và editorial visual phù hợp.' },
    { number: 6, titleEn: 'Validate UX', titleVi: 'Kiểm tra UX', descEn: 'HTML pages must include light/dark theme toggle; Mermaid syntax should use the mermaidjs-v11 skill.', descVi: 'Trang HTML phải có nút chuyển light/dark; cú pháp Mermaid nên dùng skill mermaidjs-v11.' },
    { number: 7, titleEn: 'Open Output', titleVi: 'Mở output', descEn: 'Save to the active plan visuals folder or fallback path, then open the result directly when applicable.', descVi: 'Lưu vào thư mục visuals của plan active hoặc fallback, rồi mở kết quả trực tiếp khi phù hợp.' },
  ],
  corePrinciplesEn: [
    'Two primary input shapes: a file path for view mode, or a generation flag plus topic for new visuals.',
    '--html composes with explanation, diagram, slides, diff, plan-review, and recap modes, but not terminal-only ASCII.',
    'HTML output is self-contained with all CSS and JS inline and no server requirement.',
    'Review modes gather real diff, plan, git, and codebase context before drawing conclusions.',
  ],
  corePrinciplesVi: [
    'Có hai dạng input chính: file path để xem, hoặc generation flag kèm topic để tạo visual mới.',
    '--html kết hợp với explain, diagram, slides, diff, plan-review và recap, nhưng không kết hợp với ASCII chỉ dành cho terminal.',
    'Output HTML là file độc lập với CSS và JS inline, không cần server.',
    'Các review mode phải lấy context thật từ diff, plan, git và codebase trước khi kết luận.',
  ],
  workflowModes: [
    { flag: '[path]', modeEn: 'View a file or browse a directory.', modeVi: 'Xem một file hoặc duyệt thư mục.', research: 'Path', redTeam: 'Unresolved reference', validation: 'Viewer opens' },
    { flag: '--explain', modeEn: 'Generate a visual explanation with prose, ASCII, and Mermaid.', modeVi: 'Tạo giải thích trực quan với prose, ASCII và Mermaid.', research: 'Topic', redTeam: 'Empty topic', validation: 'Rendered explanation' },
    { flag: '--slides', modeEn: 'Generate presentation slides, one concept per slide.', modeVi: 'Tạo slide thuyết trình, mỗi slide một concept.', research: 'Topic', redTeam: 'Weak deck purpose', validation: 'Deck opens' },
    { flag: '--diagram', modeEn: 'Generate a focused architecture or concept diagram.', modeVi: 'Tạo sơ đồ kiến trúc hoặc concept tập trung.', research: 'Topic', redTeam: 'Invalid Mermaid', validation: 'Diagram renders' },
    { flag: '--ascii', modeEn: 'Generate a terminal-friendly ASCII diagram.', modeVi: 'Tạo sơ đồ ASCII thân thiện terminal.', research: 'Topic', redTeam: '--html conflict', validation: 'Readable terminal output' },
    { flag: '--diff [ref]', modeEn: 'Create a visual diff review; HTML is implied.', modeVi: 'Tạo visual diff review; HTML được tự bật.', research: 'Git diff', redTeam: 'No git repo', validation: 'Diff page' },
    { flag: '--plan-review [plan-file]', modeEn: 'Compare a plan file against the actual codebase; HTML is implied.', modeVi: 'So sánh plan file với codebase thực tế; HTML được tự bật.', research: 'Plan + files', redTeam: 'Missing plan', validation: 'Comparison page' },
    { flag: '--recap [timeframe]', modeEn: 'Create a project context snapshot over a timeframe; HTML is implied.', modeVi: 'Tạo snapshot context dự án theo khoảng thời gian; HTML được tự bật.', research: 'Git history', redTeam: 'No history', validation: 'Recap page' },
    { flag: '--stop', modeEn: 'Stop the preview server and exit.', modeVi: 'Dừng preview server rồi thoát.', research: 'Server state', redTeam: '', validation: 'Stopped' },
  ],
  outputFlags: [
    { flag: '--html', titleEn: 'Self-contained HTML', titleVi: 'HTML độc lập', descEn: 'Switch generation output to a single inline HTML file that opens directly in a browser.', descVi: 'Chuyển output tạo mới sang một file HTML inline, mở trực tiếp trong browser.', exampleCommand: '/ak:preview --html --diagram "Landing page funnel"' },
    { flag: '--no-editorial-visuals', titleEn: 'Disable editorial engines', titleVi: 'Tắt engine editorial', descEn: 'Disable both additive HTML editorial visual engines and use fallback rendering.', descVi: 'Tắt cả hai engine editorial visual bổ sung cho HTML và dùng renderer fallback.', exampleCommand: '/ak:preview --html --diagram "Launch flow" --no-editorial-visuals' },
    { flag: '--no-antv', titleEn: 'Disable AntV Infographic', titleVi: 'Tắt AntV Infographic', descEn: 'Disable only the AntV Infographic layer while leaving other eligible visual engines available.', descVi: 'Chỉ tắt lớp AntV Infographic trong khi vẫn cho phép engine visual phù hợp khác.', exampleCommand: '/ak:preview --html --recap "last week" --no-antv' },
    { flag: '--no-diagram-design', titleEn: 'Disable diagram-design', titleVi: 'Tắt diagram-design', descEn: 'Disable only the diagram-design layer and fall back to Mermaid or Chart.js where appropriate.', descVi: 'Chỉ tắt lớp diagram-design và fallback sang Mermaid hoặc Chart.js khi phù hợp.', exampleCommand: '/ak:preview --html --diagram "System map" --no-diagram-design' },
  ],
  promptExamples: [
    { labelEn: 'View file', labelVi: 'Xem file', command: '/ak:preview assets/reports/seo/launch-audit.md', whenEn: 'You want to view an existing Markdown or file output.', whenVi: 'Khi muốn xem Markdown hoặc file output đã có.', expectedEn: 'File opens in the preview viewer.', expectedVi: 'File mở trong trình preview.', recommended: true },
    { labelEn: 'Explain', labelVi: 'Giải thích', command: '/ak:preview --explain How our referral funnel works', whenEn: 'You need a visual explanation of a concept or system.', whenVi: 'Khi cần giải thích trực quan một concept hoặc hệ thống.', expectedEn: 'Markdown explanation with visual structure.', expectedVi: 'Giải thích Markdown có cấu trúc visual.' },
    { labelEn: 'HTML slides', labelVi: 'Slide HTML', command: '/ak:preview --html --slides Launch narrative for investors', whenEn: 'You need a browser-ready slide deck.', whenVi: 'Khi cần slide deck mở được ngay trên browser.', expectedEn: 'Self-contained HTML slide deck.', expectedVi: 'Slide deck HTML độc lập.' },
    { labelEn: 'Plan review', labelVi: 'Review plan', command: '/ak:preview --plan-review plans/launch-plan.md', whenEn: 'You want to compare a plan with current files.', whenVi: 'Khi muốn so sánh plan với file hiện tại.', expectedEn: 'HTML plan-vs-codebase comparison.', expectedVi: 'Trang HTML so sánh plan với codebase.' },
    { labelEn: 'Stop server', labelVi: 'Dừng server', command: '/ak:preview --stop', whenEn: 'You need to stop the running preview server.', whenVi: 'Khi cần dừng preview server đang chạy.', expectedEn: 'Preview server is stopped.', expectedVi: 'Preview server được dừng.' },
  ],
};

export default data;

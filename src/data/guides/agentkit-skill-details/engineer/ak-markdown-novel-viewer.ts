import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-markdown-novel-viewer',
  command: '/ak:markdown-novel-viewer',
  kit: 'engineer',
  header: {
    titleEn: '/ak:markdown-novel-viewer',
    titleVi: '/ak:markdown-novel-viewer',
    taglineEn: 'Serve long Markdown files and plan folders as a calm, book-like browser reader with live Mermaid, progress, navigation, and keyboard shortcuts.',
    taglineVi: 'Mở file Markdown dài và thư mục kế hoạch trong trình đọc kiểu sách, nhẹ mắt, có Mermaid trực tiếp, thanh tiến độ, điều hướng và phím tắt.',
  },
  processFlow: [
    { number: 1, titleEn: 'Install dependencies', titleVi: 'Cài phụ thuộc', descEn: 'Ensure the skill directory has npm dependencies installed: marked, highlight.js, and gray-matter.', descVi: 'Đảm bảo thư mục skill đã cài các gói npm: marked, highlight.js và gray-matter.' },
    { number: 2, titleEn: 'Choose input path', titleVi: 'Chọn đường dẫn', descEn: 'Accept any Markdown file for reader mode or any directory for the clickable browser view.', descVi: 'Nhận file Markdown để đọc hoặc thư mục để mở dạng danh sách có liên kết.' },
    { number: 3, titleEn: 'Start viewer server', titleVi: 'Khởi động máy chủ xem', descEn: 'Run the Node server with file or directory routing, using dynamic ports when the default is busy.', descVi: 'Chạy server Node theo chế độ file hoặc thư mục, tự đổi cổng khi cổng mặc định bị chiếm.' },
    { number: 4, titleEn: 'Render reading UI', titleVi: 'Render giao diện đọc', descEn: 'Convert Markdown into a warm serif reader with syntax highlighting, narrow content width, and theme toggle.', descVi: 'Chuyển Markdown thành giao diện đọc nền ấm, font dễ đọc, highlight code, chiều rộng vừa phải và đổi sáng/tối.' },
    { number: 5, titleEn: 'Enhance navigation', titleVi: 'Tăng cường điều hướng', descEn: 'For plan folders, detect plan structure and expose sidebar accordions, status badges, previous/next buttons, and mobile bottom sheet.', descVi: 'Với thư mục plan, nhận diện cấu trúc rồi hiển thị sidebar, badge trạng thái, nút trước/sau và bottom sheet trên mobile.' },
    { number: 6, titleEn: 'Render diagrams', titleVi: 'Render sơ đồ', descEn: 'Auto-render mermaid code blocks, let readers expand diagrams full width, and show parse errors with source preview.', descVi: 'Tự render block Mermaid, cho phóng rộng sơ đồ và hiển thị lỗi parse kèm đoạn nguồn để sửa.' },
    { number: 7, titleEn: 'Support reading controls', titleVi: 'Hỗ trợ thao tác đọc', descEn: 'Expose progress bar, auto-hide header, shortcuts for help, theme, sidebar, phase navigation, and modal close.', descVi: 'Có thanh tiến độ, header tự ẩn, phím tắt xem trợ giúp, đổi theme, bật sidebar, chuyển phase và đóng modal.' },
    { number: 8, titleEn: 'Troubleshoot access', titleVi: 'Xử lý truy cập', descEn: 'Report install errors, stale PID files, image-path problems, remote host binding, or Mermaid syntax fixes clearly.', descVi: 'Báo rõ lỗi cài đặt, PID cũ, đường dẫn ảnh, cấu hình host truy cập từ xa hoặc lỗi cú pháp Mermaid.' },
  ],
  corePrinciplesEn: [
    'A distraction-free reader for long-form Markdown, not a self-contained HTML generator',
    'One path works for both files and directories',
    'Mermaid failures should reveal the source and the fix path',
    'Plan navigation must stay comfortable on desktop and mobile',
  ],
  corePrinciplesVi: [
    'Đây là trình đọc Markdown tập trung, không phải bộ tạo HTML độc lập',
    'Một đường dẫn dùng được cho cả file lẫn thư mục',
    'Khi Mermaid lỗi, phải cho thấy nguồn lỗi và hướng sửa',
    'Điều hướng plan phải dễ dùng trên cả desktop và mobile',
  ],
  expertiseAreasEn: ['Long-form Markdown review', 'Plan folder navigation', 'Live Mermaid rendering', 'Responsive reader UI', 'Local HTTP file browsing'],
  expertiseAreasVi: ['Đọc Markdown dài', 'Điều hướng thư mục plan', 'Render Mermaid trực tiếp', 'Giao diện đọc responsive', 'Duyệt file qua HTTP nội bộ'],
  promptExamples: [
    { labelEn: 'Read a plan', labelVi: 'Đọc một plan', command: '/ak:markdown-novel-viewer plans/feature-auth/plan.md', whenEn: 'Use when a long plan or report is easier to review in the browser.', whenVi: 'Dùng khi plan hoặc report dài đọc trong browser sẽ dễ hơn.', expectedEn: 'The Markdown opens in a calm reader with progress and live diagrams.', expectedVi: 'Markdown mở trong trình đọc nhẹ mắt, có thanh tiến độ và sơ đồ trực tiếp.', recommended: true },
    { labelEn: 'Browse a folder', labelVi: 'Duyệt thư mục', command: '/ak:markdown-novel-viewer plans/feature-auth', whenEn: 'Use when you need to jump between plan.md and phase files.', whenVi: 'Dùng khi cần chuyển nhanh giữa plan.md và các file phase.', expectedEn: 'A directory browser with links into each document.', expectedVi: 'Một trang duyệt thư mục có liên kết vào từng tài liệu.' },
    { labelEn: 'Review documentation', labelVi: 'Review tài liệu', command: '/ak:markdown-novel-viewer docs/runbooks', whenEn: 'Use for RFCs, runbooks, specs, reports, or book-length docs.', whenVi: 'Dùng cho RFC, runbook, spec, report hoặc tài liệu dài như sách.', expectedEn: 'Folder contents are browsable and Markdown files render in reader mode.', expectedVi: 'Có thể duyệt nội dung thư mục và mở Markdown bằng chế độ đọc.' },
  ],
  skillStack: [
    { name: 'Node HTTP server', type: 'tool' },
    { name: 'marked', type: 'tool' },
    { name: 'highlight.js', type: 'tool' },
    { name: 'gray-matter', type: 'tool' },
    { name: 'Mermaid.js', type: 'tool' },
  ],
  reportOutput: { titleEn: 'Viewer Output', titleVi: 'Kết quả trình đọc', patternEn: 'Local browser URL for /view or /browse', patternVi: 'URL nội bộ cho /view hoặc /browse', locationEn: 'Default port 3456, auto-increments when busy', locationVi: 'Cổng mặc định 3456, tự tăng khi bị chiếm', descEn: 'Markdown reader, directory browser, plan navigation, live diagrams, and remote-access URL when host is bound to 0.0.0.0.', descVi: 'Trình đọc Markdown, duyệt thư mục, điều hướng plan, sơ đồ trực tiếp và URL mạng nội bộ khi bind host 0.0.0.0.' },
};

export default data;

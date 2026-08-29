import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-docs-seeker",
  command: "/ak:docs-seeker",
  kit: "engineer",
  header: {
    titleEn: "/ak:docs-seeker — Find current library docs",
    titleVi: "/ak:docs-seeker — Tìm tài liệu thư viện hiện hành",
    taglineEn: "Script-first discovery for current library, framework, API, and repository documentation through llms.txt and context7.",
    taglineVi: "Tìm tài liệu thư viện, framework, API và repository mới nhất theo hướng script-first qua llms.txt và context7.",
  },
  hardGate: {
    type: "info",
    titleEn: "SCRIPT-FIRST ROUTE",
    titleVi: "TUYẾN SCRIPT-FIRST",
    contentEn: "Always run detect-topic.js, then fetch-docs.js, then analyze-llms-txt.js when multiple URLs are returned. Do not manually construct context7 URLs first.",
    contentVi: "Luôn chạy detect-topic.js, rồi fetch-docs.js, rồi analyze-llms-txt.js khi có nhiều URL. Không tự dựng URL context7 trước.",
  },
  processFlow: [
    { number: 1, titleEn: "Read Query", titleVi: "Đọc truy vấn", descEn: "Capture the library or framework and the topic the user needs, such as an API, feature, or repository behavior.", descVi: "Xác định thư viện hoặc framework và chủ đề người dùng cần, như API, tính năng hoặc hành vi repository." },
    { number: 2, titleEn: "Detect Topic", titleVi: "Nhận diện chủ đề", descEn: "Run detect-topic.js to classify topic-specific versus general documentation and extract library plus topic.", descVi: "Chạy detect-topic.js để phân loại tài liệu theo chủ đề cụ thể hay tổng quát và trích library cùng topic." },
    { number: 3, titleEn: "Fetch Docs", titleVi: "Tải tài liệu", descEn: "Run fetch-docs.js with the original query so scripts handle context7 URL construction, fallback chains, and errors.", descVi: "Chạy fetch-docs.js với truy vấn gốc để script tự dựng URL context7, xử lý fallback và lỗi." },
    { number: 4, titleEn: "Analyze Coverage", titleVi: "Phân tích độ phủ", descEn: "When multiple llms.txt URLs return, pipe content to analyze-llms-txt.js for critical/important/supplementary categories and agent distribution.", descVi: "Khi trả về nhiều URL llms.txt, pipe nội dung vào analyze-llms-txt.js để phân loại critical/important/supplementary và đề xuất phân phối agent." },
    { number: 5, titleEn: "Load Targeted References", titleVi: "Nạp tham chiếu đúng chỗ", descEn: "Open topic-search, library-search, repo-analysis, context7-patterns, errors, or advanced guidance only when needed.", descVi: "Chỉ mở topic-search, library-search, repo-analysis, context7-patterns, errors hoặc advanced khi thật sự cần." },
    { number: 6, titleEn: "Read Primary Pages", titleVi: "Đọc trang chính", descEn: "Use returned URLs and web reading to ground answers in current documentation rather than memory.", descVi: "Dùng các URL trả về và đọc web để câu trả lời dựa trên tài liệu hiện tại thay vì trí nhớ." },
    { number: 7, titleEn: "Distribute if Broad", titleVi: "Phân phối khi rộng", descEn: "Follow the script's recommended strategy: one agent, three agents, seven agents, or phased research.", descVi: "Theo chiến lược script đề xuất: một agent, ba agent, bảy agent hoặc nghiên cứu theo phase." },
    { number: 8, titleEn: "Answer with Sources", titleVi: "Trả lời kèm nguồn", descEn: "Summarize the relevant API or feature with links, errors encountered, fallback path, and any version or edge-case notes.", descVi: "Tóm tắt API hoặc tính năng liên quan kèm link, lỗi gặp phải, đường fallback và ghi chú version hoặc edge case." },
  ],
  corePrinciplesEn: [
    "Scripts first, manual URL construction last.",
    "Zero-token scripts do classification, fetching, fallback, and distribution planning.",
    "Progressively load workflow references only when the query needs them.",
    "Current docs beat memory for APIs, features, and repository behavior.",
  ],
  corePrinciplesVi: [
    "Ưu tiên script trước, tự dựng URL chỉ là lựa chọn sau cùng.",
    "Script zero-token xử lý phân loại, tải tài liệu, fallback và kế hoạch phân phối.",
    "Chỉ nạp dần workflow reference khi truy vấn cần đến.",
    "Tài liệu hiện tại đáng tin hơn trí nhớ với API, tính năng và hành vi repository.",
  ],
  expertiseAreasEn: [
    "llms.txt and context7 documentation lookup",
    "Topic-specific versus general library search",
    "Repository documentation fallback analysis",
    "URL categorization and parallel research planning",
    "Environment-aware script execution with .env fallback order",
  ],
  expertiseAreasVi: [
    "Tra cứu tài liệu llms.txt và context7",
    "Tìm kiếm theo chủ đề cụ thể hoặc toàn bộ thư viện",
    "Phân tích fallback cho tài liệu repository",
    "Phân loại URL và lập kế hoạch nghiên cứu song song",
    "Chạy script có xét thứ tự fallback .env",
  ],
  skillStack: [
    { name: "detect-topic.js", type: "tool" },
    { name: "fetch-docs.js", type: "tool" },
    { name: "analyze-llms-txt.js", type: "tool" },
    { name: "context7.com", type: "tool" },
    { name: "llms.txt", type: "tool" },
  ],
  specialOperations: [
    { id: "topic-specific", titleEn: "Topic search", titleVi: "Tìm theo chủ đề", descEn: "For queries like a date picker in shadcn, the fast path fetches two or three focused URLs.", descVi: "Với truy vấn như date picker trong shadcn, đường nhanh tải hai hoặc ba URL tập trung.", color: "sky" },
    { id: "general-library", titleEn: "General library", titleVi: "Thư viện tổng quát", descEn: "For broad requests like Next.js docs, expect more URLs and run the analyzer to decide distribution.", descVi: "Với yêu cầu rộng như docs Next.js, thường có nhiều URL hơn và cần chạy analyzer để quyết định phân phối.", color: "violet" },
    { id: "repo-fallback", titleEn: "Repository fallback", titleVi: "Fallback repository", descEn: "When context7 coverage is weak, use the repository-analysis workflow to inspect source documentation directly.", descVi: "Khi context7 phủ kém, dùng workflow repo-analysis để kiểm tra trực tiếp tài liệu trong source." , color: "amber" },
  ],
  reportOutput: {
    titleEn: "Documentation Evidence Packet",
    titleVi: "Gói bằng chứng tài liệu",
    patternEn: "Library/topic classification + fetched URLs + analysis strategy",
    patternVi: "Phân loại thư viện/chủ đề + URL đã tải + chiến lược phân tích",
    locationEn: "In response or delegated research notes",
    locationVi: "Trong phản hồi hoặc ghi chú nghiên cứu được giao",
    descEn: "Includes detected topic, primary docs read, fallback path, URL priority, and recommended agent distribution when broad.",
    descVi: "Gồm chủ đề đã nhận diện, docs chính đã đọc, đường fallback, độ ưu tiên URL và đề xuất phân phối agent khi phạm vi rộng.",
  },
  promptExamples: [
    { labelEn: "Topic lookup", labelVi: "Tra cứu theo chủ đề", command: "/ak:docs-seeker shadcn date picker", whenEn: "You need current docs for one feature or API pattern.", whenVi: "Cần tài liệu hiện tại cho một tính năng hoặc mẫu API cụ thể.", expectedEn: "detect-topic marks it topic-specific, fetch-docs returns focused URLs, and the answer cites the relevant docs.", expectedVi: "detect-topic đánh dấu là truy vấn theo chủ đề, fetch-docs trả URL tập trung và câu trả lời trích dẫn docs liên quan.", recommended: true },
    { labelEn: "General docs", labelVi: "Docs tổng quát", command: "/ak:docs-seeker Next.js documentation", whenEn: "You need broad coverage for a library or framework.", whenVi: "Cần độ phủ rộng cho một thư viện hoặc framework.", expectedEn: "fetch-docs returns a larger set, analyzer ranks URLs, and research is distributed if needed.", expectedVi: "fetch-docs trả tập URL lớn hơn, analyzer xếp hạng URL và phân phối nghiên cứu nếu cần." },
    { labelEn: "Repository analysis", labelVi: "Phân tích repository", command: "/ak:docs-seeker GitHub repository analysis for a poorly documented library", whenEn: "llms.txt or context7 coverage is missing or insufficient.", whenVi: "llms.txt hoặc context7 thiếu hoặc không đủ thông tin.", expectedEn: "Uses repository-analysis fallback and reports direct source/documentation evidence.", expectedVi: "Dùng fallback repo-analysis và báo cáo bằng chứng trực tiếp từ source/tài liệu." },
  ],
};

export default data;

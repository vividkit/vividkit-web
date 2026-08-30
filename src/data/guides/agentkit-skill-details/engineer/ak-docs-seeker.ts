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
    contentEn: "Always run detect-topic.js, then fetch-docs.js, and analyze the fetched llms.txt content when multiple URLs need prioritization. Do not manually construct context7 URLs first.",
    contentVi: "Luôn chạy detect-topic.js, rồi fetch-docs.js, và phân tích nội dung llms.txt đã tải khi nhiều URL cần được ưu tiên hóa. Không tự dựng URL context7 trước.",
  },
  processFlow: [
    { number: 1, titleEn: "Read Query", titleVi: "Đọc truy vấn", descEn: "Capture the library or framework and the topic the user needs, such as an API, feature, or repository behavior.", descVi: "Xác định thư viện hoặc framework và chủ đề người dùng cần, như API, tính năng hoặc hành vi repository." },
    { number: 2, titleEn: "Detect Topic", titleVi: "Nhận diện chủ đề", descEn: "Run detect-topic.js to classify topic-specific versus general documentation and extract library plus topic.", descVi: "Chạy detect-topic.js để phân loại tài liệu theo chủ đề cụ thể hay tổng quát và trích library cùng topic." },
    { number: 3, titleEn: "Fetch Docs", titleVi: "Tải tài liệu", descEn: "Run fetch-docs.js with the original query so scripts handle context7 URL construction, fallback chains, and errors.", descVi: "Chạy fetch-docs.js với truy vấn gốc để script tự dựng URL context7, xử lý fallback và lỗi." },
    { number: 4, titleEn: "Analyze Coverage", titleVi: "Phân tích độ phủ", descEn: "When fetched llms.txt content contains multiple URLs, pipe the content to analyze-llms-txt.js for critical/important/supplementary categories and agent distribution.", descVi: "Khi nội dung llms.txt đã tải chứa nhiều URL, pipe nội dung vào analyze-llms-txt.js để phân loại critical/important/supplementary và đề xuất phân phối agent." },
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
    descEn: "Includes detected topic or general query, the Context7 source URL, primary docs read from the returned index, fallback path, URL priority, and recommended agent distribution when broad.",
    descVi: "Gồm topic đã nhận diện hoặc query tổng quát, URL nguồn Context7, docs chính đã đọc từ index trả về, đường fallback, độ ưu tiên URL và đề xuất phân phối agent khi phạm vi rộng.",
  },
  promptExamples: [
    { labelEn: "Topic lookup", labelVi: "Tra cứu theo chủ đề", command: "/ak:docs-seeker \"How do I use date picker in shadcn?\"", whenEn: "You need current docs for one feature, component, or API pattern.", whenVi: "Cần tài liệu hiện hành cho một tính năng, component hoặc mẫu API cụ thể.", expectedEn: "The skill classifies the query as topic-specific, fetches the Context7 topic index with automatic general fallback, reads the few relevant pages, and cites the docs that support the answer.", expectedVi: "Skill phân loại query là theo topic, fetch index Context7 theo topic với fallback tự động sang general, đọc vài trang liên quan và cite tài liệu hỗ trợ câu trả lời.", recommended: true },
    { labelEn: "General library coverage", labelVi: "Độ phủ thư viện tổng quát", command: "/ak:docs-seeker \"Documentation for Astro\"", whenEn: "You need broad library or framework coverage before choosing which pages to read.", whenVi: "Cần độ phủ rộng cho thư viện hoặc framework trước khi chọn trang cần đọc.", expectedEn: "The skill detects a general query, fetches the library llms.txt index, runs the analyzer to group URLs and suggest distribution, then synthesizes installation, concepts, APIs, and examples from primary pages.", expectedVi: "Skill nhận diện query tổng quát, fetch index llms.txt của thư viện, chạy analyzer để nhóm URL và gợi ý phân phối, rồi tổng hợp installation, concept, API và ví dụ từ trang chính." },
    { labelEn: "Repository fallback", labelVi: "Fallback repository", command: "/ak:docs-seeker \"Find current docs for github.com/pacocoursey/cmdk. If Context7 has no llms.txt, use repository analysis; cloning to /tmp/docs-analysis is allowed.\"", whenEn: "Context7 or official llms.txt coverage is missing and repository evidence is allowed.", whenVi: "Context7 hoặc llms.txt chính thức thiếu coverage và được phép dùng bằng chứng repository.", expectedEn: "The skill follows the repository-analysis fallback: find and verify the official repo, optionally clone and pack it with Repomix, extract README/docs/examples/API evidence, and label code-based claims as fallback evidence.", expectedVi: "Skill theo fallback repo-analysis: tìm và xác minh repo chính thức, tùy chọn clone và pack bằng Repomix, trích bằng chứng từ README/docs/examples/API và ghi nhãn claim dựa trên code là bằng chứng fallback." },
  ],
};

export default data;

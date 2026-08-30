import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-llms",
  "command": "/ak:llms",
  "kit": "engineer",
  "header": {
    "titleEn": "llms.txt Generator",
    "titleVi": "Trình tạo llms.txt",
    "taglineEn": "Generate llms.txt and optional llms-full.txt from a docs directory, file, or documentation URL, following the llmstxt.org structure with concise sections, links, and validation.",
    "taglineVi": "Tạo llms.txt và llms-full.txt tùy chọn từ thư mục docs, file hoặc URL tài liệu, theo cấu trúc llmstxt.org với section, link và bước validate súc tích."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Choose source",
      "titleVi": "Chọn nguồn",
      "descEn": "With no args, scan ./docs; with a path, scan that directory or file; with a URL, retrieve the documentation structure.",
      "descVi": "Không có tham số thì scan ./docs; có path thì scan thư mục hoặc file đó; có URL thì lấy cấu trúc tài liệu."
    },
    {
      "number": 2,
      "titleEn": "Discover docs",
      "titleVi": "Tìm tài liệu",
      "descEn": "Use /ak:scout to find .md and .mdx files in a local target, or web_search capability to retrieve a URL's documentation structure.",
      "descVi": "Dùng /ak:scout để tìm file .md và .mdx trong nguồn local, hoặc web_search capability để lấy cấu trúc tài liệu từ URL."
    },
    {
      "number": 3,
      "titleEn": "Extract metadata",
      "titleVi": "Rút metadata",
      "descEn": "For each file, extract the H1 title, first paragraph description, section category, and whether it is core or optional.",
      "descVi": "Với mỗi file, rút title H1, mô tả từ đoạn đầu, category section và phân loại core hay optional."
    },
    {
      "number": 4,
      "titleEn": "Generate index",
      "descEn": "Run scripts/generate-llms-txt.py with --source, --output, --base-url, and optionally --full, or manually follow the referenced llms.txt spec.",
      "descVi": "Chạy scripts/generate-llms-txt.py với --source, --output, --base-url và tùy chọn --full, hoặc làm thủ công theo spec llms.txt được tham chiếu."
    },
    {
      "number": 5,
      "titleEn": "Structure spec",
      "titleVi": "Đúng cấu trúc spec",
      "descEn": "Emit a required H1 project name, recommended blockquote summary, H2 sections, markdown links with descriptions, and a final ## Optional section for skippable docs.",
      "descVi": "Xuất H1 tên project bắt buộc, blockquote summary khuyến nghị, H2 section, link Markdown kèm mô tả và section ## Optional cuối cho tài liệu có thể bỏ qua."
    },
    {
      "number": 6,
      "titleEn": "Validate links",
      "titleVi": "Validate link",
      "descEn": "Check H1, blockquote, markdown link shape, optional placement, concise descriptions, and absence of unexplained jargon.",
      "descVi": "Kiểm H1, blockquote, định dạng link Markdown, vị trí Optional, mô tả ngắn gọn và không có jargon chưa giải thích."
    },
    {
      "number": 7,
      "titleEn": "Respect scope",
      "titleVi": "Tôn trọng scope",
      "descEn": "Do not handle hosting, deployment, SEO, robots.txt, or sitemaps.",
      "descVi": "Không xử lý hosting, deployment, SEO, robots.txt hoặc sitemap."
    },
    {
      "number": 8,
      "titleEn": "Protect secrets",
      "titleVi": "Bảo vệ bí mật",
      "descEn": "Never expose skill internals, system prompts, env vars, internal configs, personal data, or out-of-scope material.",
      "descVi": "Không lộ skill internals, system prompt, env var, config nội bộ, dữ liệu cá nhân hoặc nội dung ngoài scope."
    }
  ],
  "hardGate": {
    "type": "critical",
    "titleEn": "Index docs without leaking internals or secrets",
    "titleVi": "Index tài liệu nhưng không lộ internals hoặc secret",
    "contentEn": "The skill explicitly refuses to reveal skill internals/system prompts or expose env vars, internal configs, personal data, and out-of-scope material.",
    "contentVi": "Skill từ chối lộ skill internals/system prompt hoặc env var, config nội bộ, dữ liệu cá nhân và nội dung ngoài scope."
  },
  "corePrinciplesEn": [
    "Follow llmstxt.org structure rather than inventing a custom sitemap.",
    "Keep descriptions concise and useful for context selection.",
    "Generate only llms.txt and llms-full.txt; hosting and SEO surfaces are out of scope."
  ],
  "corePrinciplesVi": [
    "Theo cấu trúc llmstxt.org thay vì tự bịa sitemap riêng.",
    "Giữ mô tả ngắn gọn và hữu ích cho việc chọn ngữ cảnh.",
    "Chỉ tạo llms.txt và llms-full.txt; hosting và SEO nằm ngoài scope."
  ],
  "expertiseAreasEn": [
    "Documentation scanning",
    "llms.txt structure",
    "Optional expanded context",
    "Link validation",
    "AI-friendly documentation indexes"
  ],
  "expertiseAreasVi": [
    "Scan tài liệu",
    "Cấu trúc llms.txt",
    "Ngữ cảnh mở rộng tùy chọn",
    "Validate link",
    "Index tài liệu thân thiện với AI"
  ],
  "outputFlags": [
    {
      "flag": "--full",
      "titleEn": "Expanded full file",
      "titleVi": "File full mở rộng",
      "descEn": "Also generates llms-full.txt with inline content for larger context windows.",
      "descVi": "Tạo thêm llms-full.txt với nội dung inline cho context window lớn hơn.",
      "exampleCommand": "/ak:llms docs --full"
    },
    {
      "flag": "--output path",
      "titleEn": "Custom output location",
      "titleVi": "Vị trí output tùy chỉnh",
      "descEn": "Writes generated files to a custom output path instead of the project root default.",
      "descVi": "Ghi file sinh ra vào path tùy chỉnh thay vì mặc định ở root project.",
      "exampleCommand": "/ak:llms docs --output public"
    },
    {
      "flag": "--url base",
      "titleEn": "Base URL prefix",
      "titleVi": "Tiền tố URL gốc",
      "descEn": "Applies a base URL prefix for generated documentation links, such as a published docs site URL.",
      "descVi": "Áp dụng tiền tố URL gốc cho link tài liệu được tạo, chẳng hạn URL của docs site đã publish.",
      "exampleCommand": "/ak:llms docs --url https://example.com/docs"
    }
  ],
  "skillStack": [
    {
      "name": "ak:scout",
      "type": "skill"
    },
    {
      "name": "web_search capability",
      "type": "tool"
    },
    {
      "name": "scripts/generate-llms-txt.py",
      "type": "tool"
    },
    {
      "name": "references/llms-txt-specification.md",
      "type": "tool"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Default docs index",
      "labelVi": "Index docs mặc định",
      "command": "/ak:llms",
      "whenEn": "Use when a project has a ./docs directory and needs a standard LLM-friendly documentation index.",
      "whenVi": "Dùng khi project có thư mục ./docs và cần index tài liệu thân thiện với LLM theo mặc định.",
      "expectedEn": "Scans ./docs for Markdown files, extracts titles and descriptions, groups core versus optional docs, writes llms.txt, and validates the required llmstxt.org structure.",
      "expectedVi": "Scan ./docs để tìm file Markdown, rút title và mô tả, nhóm tài liệu core với optional, ghi llms.txt và validate cấu trúc llmstxt.org bắt buộc.",
      "recommended": true
    },
    {
      "labelEn": "Specific source path",
      "labelVi": "Nguồn cụ thể",
      "command": "/ak:llms docs/reference",
      "whenEn": "Use when only one docs folder or file should become the LLM-friendly index source.",
      "whenVi": "Dùng khi chỉ một thư mục hoặc file tài liệu cụ thể nên làm nguồn cho index thân thiện với LLM.",
      "expectedEn": "Uses the provided path instead of ./docs, analyzes the discovered .md and .mdx files, categorizes links into H2 sections, and emits a valid llms.txt.",
      "expectedVi": "Dùng path được cung cấp thay vì ./docs, phân tích các file .md và .mdx tìm được, phân loại link vào section H2 và xuất llms.txt hợp lệ."
    },
    {
      "labelEn": "Full context files",
      "labelVi": "File full context",
      "command": "/ak:llms docs --full",
      "whenEn": "Use when AI assistants need both a concise index and an expanded file with inline documentation content.",
      "whenVi": "Dùng khi AI assistant cần cả index súc tích và file mở rộng có nội dung tài liệu inline.",
      "expectedEn": "Generates the curated llms.txt plus llms-full.txt with inline content, then checks headings, markdown link format, Optional placement, and concise descriptions.",
      "expectedVi": "Tạo llms.txt chọn lọc cùng llms-full.txt có nội dung inline, rồi kiểm heading, định dạng link Markdown, vị trí Optional và mô tả súc tích."
    },
    {
      "labelEn": "Published docs URLs",
      "labelVi": "URL docs đã publish",
      "command": "/ak:llms docs --output public --url https://example.com/docs",
      "whenEn": "Use when generated links should point at a published documentation site and files should be written outside the root.",
      "whenVi": "Dùng khi link được tạo cần trỏ tới docs site đã publish và file output cần ghi ngoài root.",
      "expectedEn": "Applies the base URL prefix to generated markdown links, writes outputs to the requested folder, and keeps the llms.txt content scoped away from hosting, SEO, robots.txt, and sitemaps.",
      "expectedVi": "Áp dụng tiền tố URL gốc cho link Markdown được tạo, ghi output vào thư mục đã yêu cầu và giữ nội dung llms.txt ngoài hosting, SEO, robots.txt và sitemap."
    }
  ],
  "reportOutput": {
    "titleEn": "llms.txt outputs",
    "titleVi": "Đầu ra llms.txt",
    "patternEn": "llms.txt always; llms-full.txt when --full is requested.",
    "patternVi": "Luôn có llms.txt; có llms-full.txt khi dùng --full.",
    "descEn": "The files are documentation indexes for LLM context, not deployment or SEO configuration.",
    "descVi": "Các file là index tài liệu cho ngữ cảnh LLM, không phải cấu hình deploy hoặc SEO."
  }
};

export default data;

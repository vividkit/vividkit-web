import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-llms",
  "command": "/ak:llms",
  "kit": "engineer",
  "header": {
    "titleEn": "llms.txt Generator",
    "titleVi": "Trình tạo llms.txt",
    "taglineEn": "Generate LLM-friendly llms.txt and optional llms-full.txt indexes from docs or URLs, following the llmstxt.org structure with concise sections, links, and validation.",
    "taglineVi": "Tạo index llms.txt thân thiện với LLM và llms-full.txt tùy chọn từ docs hoặc URL, theo cấu trúc llmstxt.org với section, link và bước validate súc tích."
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
      "titleEn": "Scout docs",
      "titleVi": "Scout tài liệu",
      "descEn": "Use /ak:scout to find relevant .md and .mdx files in the target directory.",
      "descVi": "Dùng /ak:scout để tìm file .md và .mdx liên quan trong thư mục mục tiêu."
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
      "titleVi": "Tạo index",
      "descEn": "Run the generation script with --source, --output, --base-url, and optionally --full, or manually follow the referenced spec.",
      "descVi": "Chạy script generate với --source, --output, --base-url và tùy chọn --full, hoặc làm thủ công theo spec được tham chiếu."
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
    }
  ],
  "skillStack": [
    {
      "name": "ak:scout",
      "type": "skill"
    },
    {
      "name": "generate-llms-txt.py",
      "type": "tool"
    },
    {
      "name": "llmstxt.org spec",
      "type": "tool"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Default docs scan",
      "labelVi": "Scan docs mặc định",
      "command": "/ak:llms",
      "whenEn": "The project has a ./docs directory and needs a standard llms.txt at the default output location.",
      "whenVi": "Khi project có ./docs và cần llms.txt chuẩn ở output mặc định.",
      "expectedEn": "Scans docs, extracts titles/descriptions, generates llms.txt, and validates spec shape.",
      "expectedVi": "Scan docs, rút title/mô tả, tạo llms.txt và validate hình dạng spec.",
      "recommended": true
    },
    {
      "labelEn": "Full context index",
      "labelVi": "Index full context",
      "command": "/ak:llms docs --full",
      "whenEn": "Consumers need both a curated index and expanded inline content.",
      "whenVi": "Khi consumer cần cả index chọn lọc và nội dung inline mở rộng.",
      "expectedEn": "Generates llms.txt plus llms-full.txt and validates both according to the documented rules.",
      "expectedVi": "Tạo llms.txt cùng llms-full.txt và validate cả hai theo rule đã ghi."
    },
    {
      "labelEn": "Custom output",
      "labelVi": "Output tùy chỉnh",
      "command": "/ak:llms docs --output public",
      "whenEn": "The generated files should be placed somewhere other than the project root.",
      "whenVi": "Khi file sinh ra cần nằm ngoài root project.",
      "expectedEn": "Uses the custom output path while keeping the llms.txt structure valid.",
      "expectedVi": "Dùng output path tùy chỉnh nhưng vẫn giữ cấu trúc llms.txt hợp lệ."
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

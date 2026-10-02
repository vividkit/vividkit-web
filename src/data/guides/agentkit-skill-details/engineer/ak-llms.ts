import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-llms",
  "command": "/ak:llms",
  "kit": "engineer",
  "header": {
    "titleEn": "llms.txt Generator",
    "titleVi": "Trình tạo llms.txt",
    "taglineEn": "Generate llms.txt, optional llms-full.txt, and the per-page .md variant contract from a docs directory, file, or documentation URL, following the llmstxt.org structure with concise sections, links, and validation.",
    "taglineVi": "Tạo llms.txt, llms-full.txt tùy chọn và contract bản .md cho từng trang từ thư mục docs, file hoặc URL tài liệu, theo cấu trúc llmstxt.org với section, link và bước validate súc tích."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Choose source",
      "titleVi": "Chọn nguồn",
      "descEn": "With no args, discover documentation from the root README, site config, and navigation; with a path, scan that directory or file; with a URL, retrieve the documentation structure.",
      "descVi": "Không có tham số thì dò tài liệu từ README gốc, config site và navigation; có path thì scan thư mục hoặc file đó; có URL thì lấy cấu trúc tài liệu."
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
      "titleVi": "Sinh index",
      "descEn": "Run scripts/generate-llms-txt.py with --source, --output, --base-url, and optionally --md-links, --trailing-slash, and --full, or manually follow the referenced llms.txt spec.",
      "descVi": "Chạy scripts/generate-llms-txt.py với --source, --output, --base-url và tùy chọn --md-links, --trailing-slash, --full, hoặc làm thủ công theo spec llms.txt được tham chiếu."
    },
    {
      "number": 5,
      "titleEn": "Markdown page variants",
      "titleVi": "Bản .md cho từng trang",
      "descEn": "When the site serves them, every public page gets a Markdown twin at the page URL plus .md (index.html.md for URLs ending in /), served as text/markdown with X-Robots-Tag: noindex and linked from llms.txt via --md-links. If the site cannot serve .md URLs, link HTML URLs and report the gap.",
      "descVi": "Khi site hỗ trợ, mỗi trang public có một bản Markdown tại URL trang cộng .md (index.html.md với URL kết thúc bằng /), trả về dạng text/markdown kèm X-Robots-Tag: noindex và được llms.txt link tới qua --md-links. Nếu site không phục vụ được URL .md thì link URL HTML và báo lại chỗ thiếu."
    },
    {
      "number": 6,
      "titleEn": "Structure spec",
      "titleVi": "Đúng cấu trúc spec",
      "descEn": "Emit a required H1 project name, recommended blockquote summary, H2 sections, markdown links with descriptions, and a final ## Optional section for skippable docs.",
      "descVi": "Xuất H1 tên project bắt buộc, blockquote summary khuyến nghị, H2 section, link Markdown kèm mô tả và section ## Optional cuối cho tài liệu có thể bỏ qua."
    },
    {
      "number": 7,
      "titleEn": "Validate links",
      "titleVi": "Validate link",
      "descEn": "Check H1, blockquote, markdown link shape, optional placement, and concise descriptions; with a live site, every linked URL returns 200 and sampled .md URLs return text/markdown.",
      "descVi": "Kiểm H1, blockquote, định dạng link Markdown, vị trí Optional và mô tả súc tích; nếu có site đang chạy thì mọi URL được link phải trả 200 và các URL .md lấy mẫu phải trả text/markdown."
    },
    {
      "number": 8,
      "titleEn": "Respect scope",
      "titleVi": "Tôn trọng scope",
      "descEn": "Framework routing that serves the files, sitemaps, robots.txt, social metadata, and page actions belong to the site's framework skill (for Next.js, the SEO/GEO reference in ak:web-frameworks).",
      "descVi": "Routing của framework để phục vụ các file, sitemap, robots.txt, social metadata và nút thao tác trên trang thuộc về skill framework của site (với Next.js là phần SEO/GEO trong ak:web-frameworks)."
    },
    {
      "number": 9,
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
    "Generate llms.txt and llms-full.txt and define the .md variant contract; serving them is the framework skill's job."
  ],
  "corePrinciplesVi": [
    "Theo cấu trúc llmstxt.org thay vì tự bịa sitemap riêng.",
    "Giữ mô tả ngắn gọn và hữu ích cho việc chọn ngữ cảnh.",
    "Tạo llms.txt, llms-full.txt và định nghĩa contract bản .md; việc phục vụ các file đó là của skill framework."
  ],
  "expertiseAreasEn": [
    "Documentation scanning",
    "llms.txt structure",
    "Optional expanded context",
    "Markdown page variants",
    "Link validation",
    "AI-friendly documentation indexes"
  ],
  "expertiseAreasVi": [
    "Scan tài liệu",
    "Cấu trúc llms.txt",
    "Ngữ cảnh mở rộng tùy chọn",
    "Bản Markdown cho từng trang",
    "Validate link",
    "Index tài liệu thân thiện với AI"
  ],
  "invocation": {
    "syntax": "/ak:llms [path|url] [--full] [--md-links] [--output path] [--base-url base] [--trailing-slash]",
    "arguments": [
      {
        "token": "[path|url]",
        "titleEn": "Source path or URL",
        "titleVi": "Đường dẫn hoặc URL nguồn",
        "descEn": "Documentation source to index. Omit it to discover docs from the root README, site config, and navigation; when the source is a URL, fetch or map it before running the bundled generator because the script itself scans local directories.",
        "descVi": "Nguồn tài liệu cần lập index. Bỏ qua để dò tài liệu từ README gốc, config site và navigation; nếu nguồn là URL, cần fetch hoặc map trước khi chạy generator được bundle vì script chỉ scan directory local.",
        "exampleCommand": "/ak:llms docs/reference"
      }
    ],
    "options": [
      {
        "token": "--full",
        "titleEn": "Full artifact",
        "titleVi": "Artifact full",
        "descEn": "Also write llms-full.txt with inline documentation content. Review size and private content before publication.",
        "descVi": "Ghi thêm llms-full.txt có nội dung tài liệu inline. Review kích thước và nội dung riêng tư trước khi publish.",
        "exampleCommand": "/ak:llms docs --full"
      },
      {
        "token": "--md-links",
        "titleEn": "Link .md variants",
        "titleVi": "Link bản .md",
        "descEn": "Link each page's Markdown variant (page.md) instead of its HTML URL. Use only when the site actually serves .md variants.",
        "descVi": "Link tới bản Markdown của từng trang (page.md) thay vì URL HTML. Chỉ dùng khi site thật sự phục vụ bản .md.",
        "exampleCommand": "/ak:llms docs --md-links --base-url https://example.com/docs"
      },
      {
        "token": "--output path",
        "titleEn": "Output directory",
        "titleVi": "Thư mục output",
        "descEn": "Write llms.txt and any llms-full.txt to this directory instead of the project root. It does not publish or deploy files.",
        "descVi": "Ghi llms.txt và mọi llms-full.txt vào thư mục này thay vì root project. Flag này không publish hay deploy file.",
        "exampleCommand": "/ak:llms docs --output public"
      },
      {
        "token": "--base-url base",
        "titleEn": "Base URL",
        "titleVi": "URL gốc",
        "descEn": "Public base URL prefix for generated links; the skill and the bundled script use the same flag. Without it, links stay relative filesystem-style paths. It does not perform HTTP link checks.",
        "descVi": "Tiền tố URL public cho các link được tạo; skill và script được bundle dùng chung flag này. Không có nó thì link giữ dạng path tương đối kiểu filesystem. Flag này không kiểm HTTP link.",
        "exampleCommand": "/ak:llms docs --base-url https://example.com/docs"
      },
      {
        "token": "--trailing-slash",
        "titleEn": "Trailing-slash URLs",
        "titleVi": "URL có dấu / cuối",
        "descEn": "The site serves directory pages as guide/ (Markdown at guide/index.html.md). Default is guide and guide.md. Match the site setting so linked URLs return 200 without a redirect.",
        "descVi": "Site phục vụ trang thư mục dạng guide/ (bản Markdown ở guide/index.html.md). Mặc định là guide và guide.md. Khớp với cấu hình site để URL được link trả 200 mà không redirect.",
        "exampleCommand": "/ak:llms docs --base-url https://example.com/docs --trailing-slash"
      }
    ]
  },
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
      "flag": "--md-links",
      "titleEn": "Markdown variant links",
      "titleVi": "Link bản Markdown",
      "descEn": "Points llms.txt entries at each page's .md variant instead of its HTML page.",
      "descVi": "Cho các mục trong llms.txt trỏ tới bản .md của từng trang thay vì trang HTML.",
      "exampleCommand": "/ak:llms docs --md-links --base-url https://example.com/docs"
    },
    {
      "flag": "--base-url base",
      "titleEn": "Base URL prefix",
      "titleVi": "Tiền tố URL gốc",
      "descEn": "Applies a base URL prefix for generated documentation links, such as a published docs site URL.",
      "descVi": "Áp dụng tiền tố URL gốc cho link tài liệu được tạo, chẳng hạn URL của docs site đã publish.",
      "exampleCommand": "/ak:llms docs --base-url https://example.com/docs"
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
      "whenEn": "Use when a project needs a standard LLM-friendly index of its existing documentation.",
      "whenVi": "Dùng khi project cần index thân thiện với LLM cho bộ tài liệu đang có.",
      "expectedEn": "Discovers docs from the root README, site config, and navigation, extracts titles and descriptions, groups core versus optional docs, writes llms.txt, and validates the required llmstxt.org structure.",
      "expectedVi": "Dò tài liệu từ README gốc, config site và navigation, rút title và mô tả, nhóm tài liệu core với optional, ghi llms.txt và validate cấu trúc llmstxt.org bắt buộc.",
      "recommended": true
    },
    {
      "labelEn": "Specific source path",
      "labelVi": "Nguồn cụ thể",
      "command": "/ak:llms docs/reference",
      "whenEn": "Use when only one docs folder or file should become the LLM-friendly index source.",
      "whenVi": "Dùng khi chỉ một thư mục hoặc file tài liệu cụ thể nên làm nguồn cho index thân thiện với LLM.",
      "expectedEn": "Uses the provided path instead of discovering docs, analyzes the discovered .md and .mdx files, categorizes links into H2 sections, and emits a valid llms.txt.",
      "expectedVi": "Dùng path được cung cấp thay vì tự dò tài liệu, phân tích các file .md và .mdx tìm được, phân loại link vào section H2 và xuất llms.txt hợp lệ."
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
      "command": "/ak:llms docs --output public --base-url https://example.com/docs",
      "whenEn": "Use when generated links should point at a published documentation site and files should be written outside the root.",
      "whenVi": "Dùng khi link được tạo cần trỏ tới docs site đã publish và file output cần ghi ngoài root.",
      "expectedEn": "Applies the base URL prefix to generated markdown links, writes outputs to the requested folder, and leaves serving, sitemaps, robots.txt, and social metadata to the site's framework skill.",
      "expectedVi": "Áp dụng tiền tố URL gốc cho link Markdown được tạo, ghi output vào thư mục đã yêu cầu và để việc phục vụ file, sitemap, robots.txt và social metadata cho skill framework của site."
    },
    {
      "labelEn": "Markdown mirrors",
      "labelVi": "Bản Markdown của trang",
      "command": "/ak:llms docs --md-links --base-url https://example.com/docs --full",
      "whenEn": "Use when the site serves a .md variant of every public page and AI readers should fetch those instead of HTML.",
      "whenVi": "Dùng khi site phục vụ bản .md cho mọi trang public và AI nên đọc bản đó thay vì HTML.",
      "expectedEn": "Writes llms.txt linking each page's .md variant and llms-full.txt with a Source line per page, then checks that linked URLs return 200 and sampled .md URLs return text/markdown.",
      "expectedVi": "Ghi llms.txt link tới bản .md của từng trang và llms-full.txt có dòng Source cho mỗi trang, rồi kiểm các URL được link trả 200 và URL .md lấy mẫu trả text/markdown."
    }
  ],
  "reportOutput": {
    "titleEn": "llms.txt outputs",
    "titleVi": "Đầu ra llms.txt",
    "patternEn": "llms.txt always; llms-full.txt when --full is requested; page.md variants are served by the site, not written by the bundled script.",
    "patternVi": "Luôn có llms.txt; có llms-full.txt khi dùng --full; bản page.md do site phục vụ, không phải do script được bundle ghi ra.",
    "descEn": "The files are documentation indexes for LLM context; serving them, sitemaps, and SEO configuration belong to the site's framework skill.",
    "descVi": "Các file là index tài liệu cho ngữ cảnh LLM; việc phục vụ file, sitemap và cấu hình SEO thuộc về skill framework của site."
  }
};

export default data;

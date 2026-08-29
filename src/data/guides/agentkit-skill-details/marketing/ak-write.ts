import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-write",
  "command": "/ak:write",
  "kit": "marketer",
  "header": {
    "titleEn": "/ak:write",
    "titleVi": "/ak:write",
    "taglineEn": "Creative and conversion copywriting router for audits, SEO blogs, YouTube-to-blog, CRO, enhancement, formulas, fast drafts, good drafts, and publish-ready output.",
    "taglineVi": "Router copywriting sáng tạo và chuyển đổi cho audit, blog SEO, YouTube-to-blog, CRO, enhance, công thức copy, bản nháp nhanh, bản tốt và nội dung sẵn publish."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Parse subcommand",
      "titleVi": "Tách subcommand",
      "descEn": "Read the first argument and choose audit, blog, blog-youtube, cro, enhance, fast, formula, good, or publish.",
      "descVi": "Đọc tham số đầu tiên và chọn audit, blog, blog-youtube, cro, enhance, fast, formula, good hoặc publish."
    },
    {
      "number": 2,
      "titleEn": "Load reference",
      "titleVi": "Nạp reference",
      "descEn": "Load the corresponding references/{subcommand}.md file before writing or reviewing content.",
      "descVi": "Nạp đúng file references/{subcommand}.md trước khi viết hoặc review nội dung."
    },
    {
      "number": 3,
      "titleEn": "Map intent",
      "titleVi": "Ghép ý định",
      "descEn": "Use the remaining arguments as topic, source, content, platform, funnel stage, or desired quality bar.",
      "descVi": "Dùng phần tham số còn lại làm topic, nguồn, nội dung, nền tảng, giai đoạn funnel hoặc mức chất lượng mong muốn."
    },
    {
      "number": 4,
      "titleEn": "Draft or analyze",
      "titleVi": "Viết hoặc phân tích",
      "descEn": "Depending on the route, create original copy, analyze current copy issues, score SEO/platform quality, or diagnose conversion friction.",
      "descVi": "Tùy tuyến, tạo copy mới, phân tích lỗi copy hiện tại, chấm chất lượng SEO/nền tảng hoặc chẩn đoán ma sát chuyển đổi."
    },
    {
      "number": 5,
      "titleEn": "Optimize",
      "titleVi": "Tối ưu",
      "descEn": "Apply the selected writing standard: copywriting formulas, SEO structure, CRO improvements, creative rewrite, or publish-readiness fixes.",
      "descVi": "Áp dụng chuẩn viết đã chọn: công thức copywriting, cấu trúc SEO, cải thiện CRO, rewrite sáng tạo hoặc sửa để sẵn publish."
    },
    {
      "number": 6,
      "titleEn": "Deliver",
      "titleVi": "Bàn giao",
      "descEn": "Return the requested content or audit with clear fixes, final copy, and any route-specific publishing notes.",
      "descVi": "Trả nội dung hoặc audit theo yêu cầu với phần sửa rõ ràng, copy cuối và ghi chú publish theo tuyến."
    }
  ],
  "corePrinciplesEn": [
    "Route first; every subcommand has its own reference and quality bar.",
    "Audit and publish are quality-control routes; fast and good are creation-speed/quality routes.",
    "CRO improves conversion friction; blog routes optimize for SEO and source transformation.",
    "Formula mode uses proven copywriting frameworks such as AIDA, PAS, and BAB."
  ],
  "corePrinciplesVi": [
    "Định tuyến trước; mỗi subcommand có reference và tiêu chuẩn chất lượng riêng.",
    "Audit và publish là tuyến kiểm chất lượng; fast và good là tuyến tạo nội dung theo tốc độ/chất lượng.",
    "CRO xử lý ma sát chuyển đổi; các tuyến blog tối ưu SEO và chuyển đổi nguồn.",
    "Formula dùng framework copywriting đã kiểm chứng như AIDA, PAS và BAB."
  ],
  "workflowModes": [
    {
      "flag": "audit",
      "modeEn": "Content audit",
      "modeVi": "Audit nội dung",
      "research": "Copywriting/SEO/platform standards",
      "redTeam": "Quality gaps",
      "validation": "Audit findings",
      "cookFlag": "references/audit.md"
    },
    {
      "flag": "blog",
      "modeEn": "SEO blog",
      "modeVi": "Blog SEO",
      "research": "Topic and SEO intent",
      "redTeam": "Search-fit gaps",
      "validation": "SEO article",
      "cookFlag": "references/blog.md"
    },
    {
      "flag": "cro",
      "modeEn": "Conversion optimization",
      "modeVi": "Tối ưu chuyển đổi",
      "research": "Current content and funnel",
      "redTeam": "Conversion friction",
      "validation": "Improved copy",
      "cookFlag": "references/cro.md"
    },
    {
      "flag": "publish",
      "modeEn": "Publish-ready",
      "modeVi": "Sẵn publish",
      "research": "Content issues",
      "redTeam": "Auto-fix quality risks",
      "validation": "Final version",
      "cookFlag": "references/publish.md"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Fast copy",
      "labelVi": "Copy nhanh",
      "command": "/ak:write fast launch tweet for AI notes app",
      "whenEn": "Use for a quick creative draft.",
      "whenVi": "Dùng khi cần bản nháp sáng tạo nhanh.",
      "expectedEn": "Concise copy produced through the fast route.",
      "expectedVi": "Copy ngắn gọn được tạo theo tuyến fast.",
      "recommended": true
    },
    {
      "labelEn": "SEO blog",
      "labelVi": "Blog SEO",
      "command": "/ak:write blog MCP tools for marketing teams",
      "whenEn": "Use for SEO-optimized long-form content.",
      "whenVi": "Dùng cho nội dung dài tối ưu SEO.",
      "expectedEn": "SEO article draft following the blog reference.",
      "expectedVi": "Bản nháp bài SEO theo reference blog."
    },
    {
      "labelEn": "YouTube to blog",
      "labelVi": "YouTube thành blog",
      "command": "/ak:write blog-youtube https://youtube.com/watch?v=VIDEO_ID",
      "whenEn": "Use to turn a YouTube source into an SEO blog article.",
      "whenVi": "Dùng để chuyển nguồn YouTube thành bài blog SEO.",
      "expectedEn": "Blog article adapted from the video source.",
      "expectedVi": "Bài blog được chuyển thể từ nguồn video."
    },
    {
      "labelEn": "Publish polish",
      "labelVi": "Chỉnh sẵn publish",
      "command": "/ak:write publish landing page copy",
      "whenEn": "Use when content should be audited, fixed, and returned ready to publish.",
      "whenVi": "Dùng khi nội dung cần được audit, sửa và trả về bản sẵn đăng.",
      "expectedEn": "Final content with quality issues fixed.",
      "expectedVi": "Nội dung cuối đã sửa các lỗi chất lượng."
    }
  ],
  "reportOutput": {
    "titleEn": "Copy deliverable",
    "titleVi": "Sản phẩm copy",
    "patternEn": "Route-specific audit, draft, enhancement, formula, or publish-ready version",
    "patternVi": "Output theo tuyến: audit, bản nháp, enhance, formula hoặc bản sẵn publish",
    "locationEn": "Response output",
    "locationVi": "Nội dung phản hồi",
    "descEn": "The first argument controls the reference and expected output shape.",
    "descVi": "Tham số đầu quyết định reference và hình dạng output mong đợi."
  }
};

export default data;

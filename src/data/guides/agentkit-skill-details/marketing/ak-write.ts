import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-write",
  command: "/ak:write",
  kit: 'marketer',
  header: {
    titleEn: '/ak:write — Creative and conversion copywriting',
    titleVi: '/ak:write — Copywriting sáng tạo và chuyển đổi',
    taglineEn: "Creative and conversion copywriting router for audits, SEO blogs, YouTube-to-blog, CRO, enhancement, formulas, fast drafts, good drafts, and publish-ready output.",
    taglineVi: "Router copywriting sáng tạo và chuyển đổi cho audit, blog SEO, YouTube-to-blog, CRO, enhance, công thức copy, bản nháp nhanh, bản tốt và nội dung sẵn publish."
  },
  hardGate: {
    type: "warning",
    titleEn: "The publish route does not publish",
    titleVi: "Tuyến publish không tự đăng",
    contentEn: "The publish route is a local quality gate only. It does not authorize CMS, email, network, media-buy, account, or external publication actions.",
    contentVi: "Tuyến publish chỉ là quality gate local. Nó không cấp quyền thao tác CMS, email, network, media-buy, account hoặc publish bên ngoài."
  },
  processFlow: [
    {
      number: 1,
      titleEn: "Parse subcommand",
      titleVi: "Tách subcommand",
      descEn: "Read the first argument and choose audit, blog, blog-youtube, cro, enhance, fast, formula, good, or publish.",
      descVi: "Đọc tham số đầu tiên và chọn audit, blog, blog-youtube, cro, enhance, fast, formula, good hoặc publish."
    },
    {
      number: 2,
      titleEn: "Load reference",
      titleVi: "Nạp reference",
      descEn: "Load the corresponding references/{subcommand}.md file before writing or reviewing content.",
      descVi: "Nạp đúng file references/{subcommand}.md trước khi viết hoặc review nội dung."
    },
    {
      number: 3,
      titleEn: "Map intent",
      titleVi: "Ghép ý định",
      descEn: "Use the remaining arguments as topic, source, content, platform, funnel stage, or desired quality bar.",
      descVi: "Dùng phần tham số còn lại làm topic, nguồn, nội dung, nền tảng, giai đoạn funnel hoặc mức chất lượng mong muốn."
    },
    {
      number: 4,
      titleEn: "Draft or analyze",
      titleVi: "Viết hoặc phân tích",
      descEn: "Depending on the route, create original copy, analyze current copy issues, score SEO/platform quality, or diagnose conversion friction.",
      descVi: "Tùy tuyến, tạo copy mới, phân tích lỗi copy hiện tại, chấm chất lượng SEO/nền tảng hoặc chẩn đoán ma sát chuyển đổi."
    },
    {
      number: 5,
      titleEn: "Optimize",
      titleVi: "Tối ưu",
      descEn: "Apply the selected writing standard: copywriting formulas, SEO structure, CRO improvements, creative rewrite, or publish-readiness fixes.",
      descVi: "Áp dụng chuẩn viết đã chọn: công thức copywriting, cấu trúc SEO, cải thiện CRO, rewrite sáng tạo hoặc sửa để sẵn publish."
    },
    {
      number: 6,
      titleEn: "Deliver",
      titleVi: "Bàn giao",
      descEn: "Return the requested content or audit with clear fixes, final copy, and any route-specific publishing notes.",
      descVi: "Trả nội dung hoặc audit theo yêu cầu với phần sửa rõ ràng, copy cuối và ghi chú publish theo tuyến."
    }
  ],
  corePrinciplesEn: [
    "Route first; every subcommand has its own reference and quality bar.",
    "Audit and publish are quality-control routes; fast and good are creation-speed/quality routes.",
    "CRO improves conversion friction; blog routes optimize for SEO and source transformation.",
    "Formula mode uses proven copywriting frameworks such as AIDA, PAS, and BAB."
  ],
  corePrinciplesVi: [
    "Định tuyến trước; mỗi subcommand có reference và tiêu chuẩn chất lượng riêng.",
    "Audit và publish là tuyến kiểm chất lượng; fast và good là tuyến tạo nội dung theo tốc độ/chất lượng.",
    "CRO xử lý ma sát chuyển đổi; các tuyến blog tối ưu SEO và chuyển đổi nguồn.",
    "Formula dùng framework copywriting đã kiểm chứng như AIDA, PAS và BAB."
  ],
  workflowModes: [
    {
      flag: "audit",
      modeEn: "Content, search, platform, and brand review.",
      modeVi: "Review content, search, platform và brand.",
      research: "Copywriting/SEO/platform standards",
      redTeam: "Quality gaps",
      validation: "Audit findings",
      cookFlag: "references/audit.md"
    },
    {
      flag: "blog",
      modeEn: "SEO article with metadata and optional illustrations.",
      modeVi: "Bài SEO có metadata và illustration tùy chọn.",
      research: "Topic and SEO intent",
      redTeam: "Search-fit gaps",
      validation: "SEO article",
      cookFlag: "references/blog.md"
    },
    {
      flag: "blog-youtube",
      modeEn: "Article derived from a YouTube source.",
      modeVi: "Bài viết chuyển thể từ nguồn YouTube.",
      research: "Video metadata/captions",
      redTeam: "Source fidelity",
      validation: "Adapted article",
      cookFlag: "references/blog-youtube.md"
    },
    {
      flag: "cro",
      modeEn: "Conversion-focused analysis and revised copy.",
      modeVi: "Phân tích conversion và copy đã sửa.",
      research: "Current content and funnel",
      redTeam: "Conversion friction",
      validation: "Improved copy",
      cookFlag: "references/cro.md"
    },
    {
      flag: "enhance",
      modeEn: "Revise located copy from stated issues.",
      modeVi: "Sửa copy đã tìm thấy theo issue đã nêu.",
      research: "Located copy",
      redTeam: "Over-editing",
      validation: "Enhanced copy",
      cookFlag: "references/enhance.md"
    },
    {
      flag: "fast",
      modeEn: "Quick creative draft with a lower deliberation bar.",
      modeVi: "Bản nháp sáng tạo nhanh với mức cân nhắc thấp hơn.",
      research: "Prompt context",
      redTeam: "Generic copy",
      validation: "Fast draft",
      cookFlag: "references/fast.md"
    },
    {
      flag: "formula",
      modeEn: "Copywriting formula output such as AIDA, PAS, or BAB.",
      modeVi: "Output theo công thức copywriting như AIDA, PAS hoặc BAB.",
      research: "Formula choice",
      redTeam: "Formula mismatch",
      validation: "Formula draft",
      cookFlag: "references/formula.md"
    },
    {
      flag: "good",
      modeEn: "Higher-quality draft with stronger structure and review.",
      modeVi: "Bản nháp chất lượng cao hơn với cấu trúc và review mạnh hơn.",
      research: "Brief quality",
      redTeam: "Weak evidence",
      validation: "Good draft",
      cookFlag: "references/good.md"
    },
    {
      flag: "publish",
      modeEn: "Local publish-readiness quality gate that does not publish externally.",
      modeVi: "Quality gate sẵn publish ở local, không publish ra ngoài.",
      research: "Content issues",
      redTeam: "False publication",
      validation: "Final version",
      cookFlag: "references/publish.md"
    }
  ],
  promptExamples: [
    {
      labelEn: "Fast copy",
      labelVi: "Copy nhanh",
      command: "/ak:write fast launch tweet for AI notes app",
      commandVi: '/ak:write fast tweet ra mắt cho ứng dụng ghi chú AI',
      whenEn: "Use for a quick creative draft.",
      whenVi: "Dùng khi cần bản nháp sáng tạo nhanh.",
      expectedEn: "Concise copy produced through the fast route.",
      expectedVi: "Copy ngắn gọn được tạo theo tuyến fast.",
      recommended: true
    },
    {
      labelEn: "SEO blog",
      labelVi: "Blog SEO",
      command: "/ak:write blog MCP tools for marketing teams",
      commandVi: '/ak:write blog công cụ MCP cho đội ngũ marketing',
      whenEn: "Use for SEO-optimized long-form content.",
      whenVi: "Dùng cho nội dung dài tối ưu SEO.",
      expectedEn: "SEO article draft following the blog reference.",
      expectedVi: "Bản nháp bài SEO theo reference blog."
    },
    {
      labelEn: "YouTube to blog",
      labelVi: "YouTube thành blog",
      command: "/ak:write blog-youtube https://youtube.com/watch?v=VIDEO_ID",
      commandVi: '/ak:write blog-youtube https://youtube.com/watch?v=VIDEO_ID',
      whenEn: "Use to turn a YouTube source into an SEO blog article.",
      whenVi: "Dùng để chuyển nguồn YouTube thành bài blog SEO.",
      expectedEn: "Blog article adapted from the video source.",
      expectedVi: "Bài blog được chuyển thể từ nguồn video."
    },
    {
      labelEn: "Publish polish",
      labelVi: "Chỉnh sẵn publish",
      command: "/ak:write publish landing page copy",
      commandVi: '/ak:write xuất bản nội dung trang landing',
      whenEn: "Use when content should be audited, fixed, and returned ready to publish.",
      whenVi: "Dùng khi nội dung cần được audit, sửa và trả về bản sẵn đăng.",
      expectedEn: "Final content with quality issues fixed.",
      expectedVi: "Nội dung cuối đã sửa các lỗi chất lượng."
    }
  ],
  reportOutput: {
    titleEn: "Copy deliverable",
    titleVi: "Sản phẩm copy",
    patternEn: "formula → assets/copy/{date}-{formula}-{slug}.md; blog → assets/articles/{date}-{slug}/; blog-youtube → content/blog/",
    patternVi: "formula → assets/copy/{date}-{formula}-{slug}.md; blog → assets/articles/{date}-{slug}/; blog-youtube → content/blog/",
    locationEn: "Route-specific response output, modified source file, assets/copy/, assets/articles/, or content/blog/",
    locationVi: "Output phản hồi theo route, file nguồn đã sửa, assets/copy/, assets/articles/ hoặc content/blog/",
    descEn: "The first argument controls the reference and expected output shape; confirm the actual route path before downstream automation.",
    descVi: "Tham số đầu quyết định reference và hình dạng output; hãy xác nhận path route thực tế trước khi tự động hóa downstream."
  }
};

export default data;

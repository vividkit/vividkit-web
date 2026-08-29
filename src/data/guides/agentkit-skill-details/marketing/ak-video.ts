import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-video",
  "command": "/ak:video",
  "kit": "marketer",
  "header": {
    "titleEn": "/ak:video",
    "titleVi": "/ak:video",
    "taglineEn": "Video marketing hub for Veo 3.1 creation, production scripts, storyboards, platform specs, thumbnails, SEO, optimization, and repurposing.",
    "taglineVi": "Trung tâm video marketing cho tạo video Veo 3.1, script sản xuất, storyboard, spec nền tảng, thumbnail, SEO, tối ưu và tái sử dụng nội dung."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Parse route",
      "titleVi": "Tách tuyến",
      "descEn": "Read the first argument and route to create, script-create, or storyboard-create.",
      "descVi": "Đọc tham số đầu tiên và định tuyến sang create, script-create hoặc storyboard-create."
    },
    {
      "number": 2,
      "titleEn": "Load reference",
      "titleVi": "Nạp reference",
      "descEn": "Load the matching references/{subcommand}.md file, then keep production workflow, specs, templates, art direction, audio, SEO, and review references nearby.",
      "descVi": "Nạp đúng file references/{subcommand}.md, đồng thời giữ gần các reference về production workflow, spec, template, art direction, audio, SEO và review."
    },
    {
      "number": 3,
      "titleEn": "Frame content",
      "titleVi": "Định hình nội dung",
      "descEn": "Use the topic and video type to pick script template, platform specs, thumbnail needs, and optimization targets.",
      "descVi": "Dùng topic và loại video để chọn script template, spec nền tảng, nhu cầu thumbnail và mục tiêu tối ưu."
    },
    {
      "number": 4,
      "titleEn": "Produce core",
      "titleVi": "Tạo phần chính",
      "descEn": "Create a Veo video prompt, production-ready script, or storyboard depending on the selected route.",
      "descVi": "Tạo prompt video Veo, script sẵn cho sản xuất hoặc storyboard tùy tuyến đã chọn."
    },
    {
      "number": 5,
      "titleEn": "Use scripts",
      "titleVi": "Dùng script",
      "descEn": "When needed, generate video, create storyboard, analyze video, extract captions, or optimize for platform with the listed scripts.",
      "descVi": "Khi cần, dùng các script đã liệt kê để tạo video, tạo storyboard, phân tích video, trích caption hoặc tối ưu theo nền tảng."
    },
    {
      "number": 6,
      "titleEn": "Optimize",
      "titleVi": "Tối ưu",
      "descEn": "Apply video optimization, video SEO, platform specs, thumbnail design guidance, and quality review before handoff.",
      "descVi": "Áp dụng tối ưu video, SEO video, spec nền tảng, hướng dẫn thumbnail và quality review trước khi bàn giao."
    },
    {
      "number": 7,
      "titleEn": "Repurpose",
      "titleVi": "Tái sử dụng",
      "descEn": "Package outputs for YouTube, TikTok, Instagram, LinkedIn, or derivative marketing assets when the route requires it.",
      "descVi": "Đóng gói kết quả cho YouTube, TikTok, Instagram, LinkedIn hoặc asset marketing phái sinh khi tuyến yêu cầu."
    },
    {
      "number": 8,
      "titleEn": "Deliver",
      "titleVi": "Bàn giao",
      "descEn": "Return the selected video artifact: generation plan, script, storyboard, specs, captions, optimization notes, or asset paths.",
      "descVi": "Trả artifact video tương ứng: kế hoạch generate, script, storyboard, spec, caption, ghi chú tối ưu hoặc đường dẫn asset."
    }
  ],
  "corePrinciplesEn": [
    "Route by subcommand before creating content.",
    "Production quality combines creative direction, platform constraints, script/storyboard structure, and review.",
    "Veo generation, captions, analysis, and platform optimization are separate script-backed operations."
  ],
  "corePrinciplesVi": [
    "Định tuyến theo subcommand trước khi tạo nội dung.",
    "Chất lượng sản xuất là tổng hợp của creative direction, ràng buộc nền tảng, cấu trúc script/storyboard và review.",
    "Tạo bằng Veo, caption, phân tích và tối ưu nền tảng là các thao tác riêng có script hỗ trợ."
  ],
  "workflowModes": [
    {
      "flag": "create",
      "modeEn": "Create video",
      "modeVi": "Tạo video",
      "research": "Veo prompt and production workflow",
      "redTeam": "Generation quality review",
      "validation": "Video asset path",
      "cookFlag": "references/create.md"
    },
    {
      "flag": "script-create",
      "modeEn": "Write script",
      "modeVi": "Viết script",
      "research": "Script templates and platform specs",
      "redTeam": "SEO and retention checks",
      "validation": "Production-ready script",
      "cookFlag": "references/script-create.md"
    },
    {
      "flag": "storyboard-create",
      "modeEn": "Create storyboard",
      "modeVi": "Tạo storyboard",
      "research": "Storyboard format and art direction",
      "redTeam": "Shot-by-shot completeness",
      "validation": "Storyboard artifact",
      "cookFlag": "references/storyboard-create.md"
    }
  ],
  "skillStack": [
    {
      "name": "generate-video.cjs",
      "type": "tool"
    },
    {
      "name": "create-storyboard.cjs",
      "type": "tool"
    },
    {
      "name": "analyze-video.cjs",
      "type": "tool"
    },
    {
      "name": "extract-captions.cjs",
      "type": "tool"
    },
    {
      "name": "optimize-for-platform.cjs",
      "type": "tool"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Veo creation",
      "labelVi": "Tạo bằng Veo",
      "command": "/ak:video create product demo for an AI writing app",
      "whenEn": "Use when the requested output is an AI-generated video.",
      "whenVi": "Dùng khi output cần là video tạo bằng AI.",
      "expectedEn": "Veo 3.1 generation workflow with prompt, specs, and quality review.",
      "expectedVi": "Workflow tạo bằng Veo 3.1 gồm prompt, spec và review chất lượng.",
      "recommended": true
    },
    {
      "labelEn": "Script",
      "labelVi": "Script",
      "command": "/ak:video script-create YouTube explainer about MCP tools",
      "whenEn": "Use when a production-ready script is needed before filming or generation.",
      "whenVi": "Dùng khi cần script sẵn sản xuất trước khi quay hoặc generate.",
      "expectedEn": "Structured script using templates, platform constraints, and SEO guidance.",
      "expectedVi": "Script có cấu trúc theo template, ràng buộc nền tảng và hướng dẫn SEO."
    },
    {
      "labelEn": "Storyboard",
      "labelVi": "Storyboard",
      "command": "/ak:video storyboard-create TikTok launch teaser",
      "whenEn": "Use when visual shot planning is the deliverable.",
      "whenVi": "Dùng khi sản phẩm bàn giao là kế hoạch shot hình ảnh.",
      "expectedEn": "Storyboard with art direction and production-ready sequence.",
      "expectedVi": "Storyboard có art direction và chuỗi cảnh sẵn để sản xuất."
    }
  ],
  "reportOutput": {
    "titleEn": "Video deliverable",
    "titleVi": "Sản phẩm video",
    "patternEn": "Route-specific script, storyboard, video, caption, or optimization output",
    "patternVi": "Output theo tuyến: script, storyboard, video, caption hoặc tối ưu",
    "locationEn": "Response or generated assets",
    "locationVi": "Phản hồi hoặc asset đã tạo",
    "descEn": "Final output follows the chosen subcommand and loaded reference.",
    "descVi": "Output cuối đi theo subcommand đã chọn và reference đã nạp."
  }
};

export default data;

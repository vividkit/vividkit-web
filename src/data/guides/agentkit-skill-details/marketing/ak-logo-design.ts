import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-logo-design",
  "command": "/ak:logo-design",
  "kit": "marketer",
  "header": {
    "titleEn": "/ak:logo-design",
    "titleVi": "/ak:logo-design",
    "taglineEn": "Logo intelligence and generation workflow spanning 55+ styles, 30 palettes, 25 industry guides, Gemini Nano Banana prompts, and optional HTML preview galleries.",
    "taglineVi": "Quy trình tư vấn và tạo logo với hơn 55 style, 30 bảng màu, 25 guide ngành, prompt Gemini Nano Banana và gallery HTML preview tùy chọn."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Capture brand",
      "titleVi": "Nắm brand",
      "descEn": "Start from brand name, industry, target audience, style preference, and desired personality.",
      "descVi": "Bắt đầu từ tên brand, ngành, audience, style mong muốn và cá tính cần truyền tải."
    },
    {
      "number": 2,
      "titleEn": "Generate brief",
      "titleVi": "Tạo design brief",
      "descEn": "Run the design-brief search flow to return industry analysis, style recommendations, and color palettes.",
      "descVi": "Chạy luồng search design-brief để lấy phân tích ngành, gợi ý style và bảng màu."
    },
    {
      "number": 3,
      "titleEn": "Search domains",
      "titleVi": "Tìm theo domain",
      "descEn": "Search style, color, or industry guidance when the brief needs more specific constraints.",
      "descVi": "Tìm thêm theo style, color hoặc industry khi brief cần ràng buộc cụ thể hơn."
    },
    {
      "number": 4,
      "titleEn": "Select direction",
      "titleVi": "Chọn hướng thiết kế",
      "descEn": "Pick style and color logic from the available categories and color psychology.",
      "descVi": "Chọn style và logic màu từ danh mục có sẵn và color psychology."
    },
    {
      "number": 5,
      "titleEn": "Generate logos",
      "titleVi": "Tạo logo",
      "descEn": "Use generate.py with --brand or --prompt plus documented --style and --industry options.",
      "descVi": "Dùng generate.py với --brand hoặc --prompt kèm các option đã ghi như --style và --industry."
    },
    {
      "number": 6,
      "titleEn": "Enforce background",
      "titleVi": "Giữ nền trắng",
      "descEn": "Generate every logo image with a white background as required by the skill.",
      "descVi": "Tạo mọi ảnh logo với nền trắng đúng yêu cầu skill."
    },
    {
      "number": 7,
      "titleEn": "Fix tooling",
      "titleVi": "Sửa tool nếu lỗi",
      "descEn": "If scripts fail, fix the scripts directly rather than hiding or bypassing the failure.",
      "descVi": "Nếu script lỗi, sửa trực tiếp script thay vì che giấu hoặc né lỗi."
    },
    {
      "number": 8,
      "titleEn": "Ask preview",
      "titleVi": "Hỏi preview",
      "descEn": "After generation, ask whether to create an eye-catching HTML gallery for the generated variants.",
      "descVi": "Sau khi tạo xong, hỏi user có muốn tạo gallery HTML bắt mắt cho các biến thể không."
    },
    {
      "number": 9,
      "titleEn": "Build gallery",
      "titleVi": "Làm gallery",
      "descEn": "If approved, route to /ui-ux-pro-max for a responsive brand-matched preview with downloads.",
      "descVi": "Nếu user đồng ý, chuyển sang /ui-ux-pro-max để làm preview responsive hợp brand, có nút tải."
    }
  ],
  "hardGate": {
    "type": "warning",
    "titleEn": "White background + preview question",
    "titleVi": "Nền trắng + hỏi preview",
    "contentEn": "Always generate logo images with a white background. If scripts fail, fix the scripts directly. After generation, always ask whether the user wants an HTML preview page before creating it.",
    "contentVi": "Luôn tạo ảnh logo với nền trắng. Nếu script lỗi, sửa trực tiếp script. Sau khi tạo xong, luôn hỏi user có muốn trang HTML preview không trước khi tạo."
  },
  "corePrinciplesEn": [
    "Start with a design brief, not random logo generation",
    "Use style, color, and industry guidance together",
    "Color psychology should match category expectations",
    "Generated variants should be easy to compare"
  ],
  "corePrinciplesVi": [
    "Bắt đầu bằng design brief, không tạo logo ngẫu nhiên",
    "Kết hợp guide style, màu và ngành",
    "Color psychology phải khớp kỳ vọng của ngành",
    "Các biến thể tạo ra phải dễ so sánh"
  ],
  "expertiseAreasEn": [
    "Logo styles",
    "Color psychology",
    "Industry defaults",
    "Gemini image prompts",
    "HTML logo galleries"
  ],
  "expertiseAreasVi": [
    "Style logo",
    "Tâm lý học màu sắc",
    "Mặc định theo ngành",
    "Prompt tạo ảnh Gemini",
    "Gallery HTML cho logo"
  ],
  "promptExamples": [
    {
      "labelEn": "Brand logo",
      "labelVi": "Logo cho brand",
      "command": "/ak:logo-design GreenBean vintage",
      "whenEn": "A brand needs logo directions and generated variants.",
      "whenVi": "Khi một brand cần hướng logo và các biến thể được tạo.",
      "expectedEn": "Builds a brief, selects suitable style/color/industry guidance, generates white-background logos, then asks about preview.",
      "expectedVi": "Tạo brief, chọn guide style/màu/ngành phù hợp, tạo logo nền trắng rồi hỏi về preview.",
      "recommended": true
    },
    {
      "labelEn": "Style exploration",
      "labelVi": "Khám phá style",
      "command": "/ak:logo-design healthcare medical line art",
      "whenEn": "You need industry-specific logo recommendations before generation.",
      "whenVi": "Khi cần gợi ý logo theo ngành trước khi tạo ảnh.",
      "expectedEn": "Uses search domains for style, color, and industry guidance before choosing generation prompts.",
      "expectedVi": "Dùng search theo style, màu và ngành trước khi chọn prompt tạo ảnh."
    }
  ],
  "skillStack": [
    {
      "name": "scripts/search.py",
      "type": "tool"
    },
    {
      "name": "scripts/generate.py",
      "type": "tool"
    },
    {
      "name": "Gemini Nano Banana",
      "type": "tool"
    },
    {
      "name": "/ui-ux-pro-max",
      "type": "skill"
    }
  ],
  "reportOutput": {
    "titleEn": "Logo design brief and image variants",
    "titleVi": "Design brief logo và các biến thể ảnh",
    "patternEn": "Generated logo files plus optional HTML preview",
    "patternVi": "Các file logo đã tạo kèm HTML preview tùy chọn",
    "descEn": "Industry analysis • style rationale • palette choices • generated variants • preview decision",
    "descVi": "Phân tích ngành • lý do chọn style • lựa chọn bảng màu • biến thể đã tạo • quyết định preview"
  }
};

export default data;

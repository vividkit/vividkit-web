import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-logo-design",
  command: "/ak:logo-design",
  kit: 'marketer',
  header: {
    titleEn: '/ak:logo-design — Logo intelligence and generation',
    titleVi: '/ak:logo-design — Tư vấn và tạo logo',
    taglineEn: "Logo intelligence and generation workflow spanning 55 styles, 55 color palettes, 55 industry guides, Gemini Nano Banana prompts, and optional HTML preview galleries.",
    taglineVi: "Quy trình tư vấn và tạo logo với 55 style, 55 bảng màu, 55 guide ngành, prompt Gemini Nano Banana và gallery HTML preview tùy chọn."
  },
  processFlow: [
    {
      number: 1,
      titleEn: "Capture brand",
      titleVi: "Nắm brand",
      descEn: "Start from brand name, industry, target audience, style preference, and desired personality.",
      descVi: "Bắt đầu từ tên brand, ngành, audience, style mong muốn và cá tính cần truyền tải."
    },
    {
      number: 2,
      titleEn: "Generate brief",
      titleVi: "Tạo design brief",
      descEn: "Run the design-brief search flow to return industry analysis, style recommendations, and color palettes.",
      descVi: "Chạy luồng search design-brief để lấy phân tích ngành, gợi ý style và bảng màu."
    },
    {
      number: 3,
      titleEn: "Search domains",
      titleVi: "Tìm theo domain",
      descEn: "Search style, color, or industry guidance when the brief needs more specific constraints.",
      descVi: "Tìm thêm theo style, color hoặc industry khi brief cần ràng buộc cụ thể hơn."
    },
    {
      number: 4,
      titleEn: "Select direction",
      titleVi: "Chọn hướng thiết kế",
      descEn: "Pick style and color logic from the available categories and color psychology.",
      descVi: "Chọn style và logic màu từ danh mục có sẵn và color psychology."
    },
    {
      number: 5,
      titleEn: "Generate logos",
      titleVi: "Tạo logo",
      descEn: "Use generate.py with --brand or --prompt plus documented --style and --industry options.",
      descVi: "Dùng generate.py với --brand hoặc --prompt kèm các option đã ghi như --style và --industry."
    },
    {
      number: 6,
      titleEn: "Match background and format",
      titleVi: "Đúng nền và định dạng",
      descEn: "Use the background and output format you asked for. A white background can help the preview, but it never overrides a transparent-background request, and raster output is not vector artwork.",
      descVi: "Dùng đúng nền và định dạng file bạn yêu cầu. Nền trắng có thể giúp phần xem trước, nhưng không bao giờ thay cho yêu cầu nền trong suốt, và ảnh raster không phải file vector."
    },
    {
      number: 7,
      titleEn: "Fix tooling",
      titleVi: "Sửa tool nếu lỗi",
      descEn: "If scripts fail, fix the scripts directly rather than hiding or bypassing the failure.",
      descVi: "Nếu script lỗi, sửa trực tiếp script thay vì che giấu hoặc né lỗi."
    },
    {
      number: 8,
      titleEn: "Inspect the files",
      titleVi: "Kiểm tra file",
      descEn: "Check spelling, silhouette, legibility at small sizes, color, background or transparency, and file format against the brief; fix defects and deliver the actual logo files.",
      descVi: "Đối chiếu chính tả, hình dáng, độ dễ đọc ở cỡ nhỏ, màu, nền hoặc độ trong suốt và định dạng file với brief; sửa lỗi rồi giao đúng các file logo."
    },
    {
      number: 9,
      titleEn: "Optional comparison page",
      titleVi: "Trang so sánh tùy chọn",
      descEn: "When you ask for it, or several variants need comparing, build an HTML page that shows them side by side with an available rendering skill. It is optional, not a question the run must stop on.",
      descVi: "Khi bạn yêu cầu, hoặc khi cần so sánh nhiều biến thể, dựng một trang HTML đặt chúng cạnh nhau bằng skill dựng trang đang có. Bước này tùy chọn, không phải câu hỏi bắt buộc phải dừng lại để hỏi."
    }
  ],
  hardGate: {
    type: "warning",
    titleEn: "Generation is not trademark clearance",
    titleVi: "Tạo được logo chưa phải đã kiểm tra nhãn hiệu",
    contentEn: "A distinct-looking output may still conflict with an existing mark or contain protected material. Get qualified similarity, trademark, cultural, and jurisdictional review before adopting or registering a logo. Image generation proves neither vector quality nor trademark safety.",
    contentVi: "Một logo trông khác biệt vẫn có thể trùng với nhãn hiệu đã có hoặc chứa nội dung được bảo hộ. Hãy nhờ người có chuyên môn kiểm tra độ giống, nhãn hiệu, yếu tố văn hóa và luật từng nước trước khi dùng hoặc đăng ký logo. Tạo ảnh không chứng minh file là vector, cũng không chứng minh an toàn về nhãn hiệu."
  },
  corePrinciplesEn: [
    "Start with a design brief, not random logo generation",
    "Use style, color, and industry guidance together",
    "Color psychology should match category expectations",
    "Generated variants should be easy to compare"
  ],
  corePrinciplesVi: [
    "Bắt đầu bằng design brief, không tạo logo ngẫu nhiên",
    "Kết hợp guide style, màu và ngành",
    "Color psychology phải khớp kỳ vọng của ngành",
    "Các biến thể tạo ra phải dễ so sánh"
  ],
  expertiseAreasEn: [
    "Logo styles",
    "Color psychology",
    "Industry defaults",
    "Gemini image prompts",
    "HTML logo galleries"
  ],
  expertiseAreasVi: [
    "Style logo",
    "Tâm lý học màu sắc",
    "Mặc định theo ngành",
    "Prompt tạo ảnh Gemini",
    "Gallery HTML cho logo"
  ],
  promptExamples: [{
      labelEn: "Brand logo",
      labelVi: "Logo cho brand",
      command: "/ak:logo-design GreenBean vintage",
      commandVi: '/ak:logo-design GreenBean cổ điển',
      whenEn: "A brand needs logo directions and generated variants.",
      whenVi: "Khi một brand cần hướng logo và các biến thể được tạo.",
      expectedEn: "Builds a brief, selects suitable style, color, and industry guidance, generates vintage variants on the background you asked for, and inspects each file before delivery.",
      expectedVi: "Tạo brief, chọn hướng style, màu và ngành phù hợp, sinh các biến thể vintage trên nền bạn yêu cầu, rồi kiểm tra từng file trước khi giao.",
      recommended: true
    },
    {
      labelEn: "Style exploration",
      labelVi: "Khám phá style",
      command: "/ak:logo-design healthcare medical line art",
      commandVi: '/ak:logo-design line art y tế chăm sóc sức khỏe',
      whenEn: "You need industry-specific logo recommendations before generation.",
      whenVi: "Khi cần gợi ý logo theo ngành trước khi tạo ảnh.",
      expectedEn: "Uses search domains for style, color, and industry guidance before choosing generation prompts.",
      expectedVi: "Dùng search theo style, màu và ngành trước khi chọn prompt tạo ảnh."
    },
    { labelEn: 'Fintech wordmark', labelVi: 'Wordmark fintech', command: '/ak:logo-design wordmark for a calm fintech brand named Harbor',
      commandVi: '/ak:logo-design wordmark cho thương hiệu fintech bình yên tên Harbor', whenEn: 'A new logo needs industry, audience, personality, and style before generation.', whenVi: 'Logo mới cần ngành, audience, cá tính và style trước khi sinh.', expectedEn: 'It sets the style direction for a calm fintech wordmark and delivers checked logo files in the requested background and format for review.', expectedVi: 'Chốt hướng style cho wordmark fintech điềm tĩnh và giao các file logo đã kiểm tra, đúng nền và định dạng bạn yêu cầu, để bạn xem lại.' }
  ],
  skillStack: [
    {
      name: "scripts/search.py",
      type: "tool"
    },
    {
      name: "scripts/generate.py",
      type: "tool"
    },
    {
      name: "Gemini Nano Banana",
      type: "tool"
    }
  ],
  reportOutput: {
    titleEn: "Logo design brief and image variants",
    titleVi: "Design brief logo và các biến thể ảnh",
    patternEn: "Generated logo files plus optional HTML comparison page",
    patternVi: "Các file logo đã tạo kèm trang HTML so sánh tùy chọn",
    descEn: "Industry analysis • style rationale • palette choices • generated variants • file checks",
    descVi: "Phân tích ngành • lý do chọn style • lựa chọn bảng màu • biến thể đã tạo • kết quả kiểm tra file"
  }
};

export default data;

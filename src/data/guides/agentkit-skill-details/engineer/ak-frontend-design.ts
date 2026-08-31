import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-frontend-design",
  command: "/ak:frontend-design",
  kit: "engineer",
  header: {
    titleEn: "/ak:frontend-design — Production frontend interfaces",
    titleVi: "/ak:frontend-design — Giao diện frontend production",
    taglineEn: "Create polished, distinctive production frontend interfaces from briefs, screenshots, videos, 3D requests, and redesign goals without AI slop.",
    taglineVi: "Tạo giao diện frontend production chỉn chu, khác biệt từ brief, screenshot, video, yêu cầu 3D hoặc redesign mà không rơi vào AI slop.",
  },
  hardGate: {
    type: "critical",
    titleEn: "CRAFT RULES ARE MANDATORY",
    titleVi: "QUY TẮC CRAFT LÀ BẮT BUỘC",
    contentEn: "Follow the decision procedure, dials, non-negotiable craft rules, absolute bans, and self-review gate. If instinct conflicts with the rules, the rules win.",
    contentVi: "Phải theo decision procedure, dials, quy tắc craft không thương lượng, danh sách cấm tuyệt đối và self-review gate. Nếu bản năng mâu thuẫn với quy tắc, quy tắc thắng.",
  },
  processFlow: [
    { number: 1, titleEn: "Select Workflow", titleVi: "Chọn workflow", descEn: "Route screenshot, video, describe-only, 3D/WebGL, quick, complex, or from-scratch requests to the matching workflow.", descVi: "Định tuyến yêu cầu screenshot, video, chỉ mô tả, 3D/WebGL, nhanh, phức tạp hoặc làm từ đầu vào workflow phù hợp." },
    { number: 2, titleEn: "Declare Read", titleVi: "Tuyên bố cách đọc", descEn: "State page kind, audience, vibe language, and aesthetic direction before design defaults can fire.", descVi: "Nêu loại trang, audience, ngôn ngữ vibe và hướng thẩm mỹ trước khi default design tự bật." },
    { number: 3, titleEn: "Seed Variation", titleVi: "Seed variation", descEn: "Derive a seed from the request, pick direction, hero archetype, and component patterns, then avoid recent palette/font repeats.", descVi: "Tạo seed từ request, chọn hướng, kiểu hero và pattern component, rồi tránh lặp lại palette/font vừa dùng gần đây." },
    { number: 4, titleEn: "Write Thesis", titleVi: "Viết thesis", descEn: "Commit to one aesthetic thesis: palette, type character, layout signature, memorable element, and motif from the content.", descVi: "Chốt một thesis thẩm mỹ: palette, tính cách chữ, dấu ấn layout, điểm đáng nhớ và motif lấy từ nội dung." },
    { number: 5, titleEn: "Set Tokens", titleVi: "Đặt token", descEn: "Define colors in OKLCH, font families, type scale, spacing, radii, shadows, easing, and one escalated memorable dimension.", descVi: "Định nghĩa màu OKLCH, font, type scale, spacing, radii, shadow, easing và một chiều được đẩy mạnh để đáng nhớ." },
    { number: 6, titleEn: "Implement Surface", titleVi: "Triển khai giao diện", descEn: "Build real working UI with register-aware type, color, depth, motion, states, imagery, copy, layout, grids, and accessibility.", descVi: "Xây UI chạy thật với typography, màu, chiều sâu, motion, state, hình ảnh, copy, layout, grid và accessibility phù hợp register." },
    { number: 7, titleEn: "Run Self-Review", titleVi: "Tự review", descEn: "Mechanically count kickers, banned words, em dashes, layout repetition, spacing scale, contrast, states, motion, and viewport behavior.", descVi: "Đếm cơ học kicker, từ cấm, em dash, lặp layout, spacing scale, contrast, state, motion và hành vi viewport." },
    { number: 8, titleEn: "Verify Viewports", titleVi: "Xác minh viewport", descEn: "Check actual UI at mobile and desktop, especially 375px for no horizontal scroll and no headline overflow.", descVi: "Kiểm tra UI thật ở mobile và desktop, đặc biệt 375px để không scroll ngang và không vỡ headline." },
    { number: 9, titleEn: "Handoff", titleVi: "Bàn giao", descEn: "Report context fit, implementation safety, verified viewports, known limitations, and any approved design-guideline updates.", descVi: "Báo độ khớp context, an toàn triển khai, viewport đã kiểm, giới hạn đã biết và cập nhật design guideline nếu được duyệt." },
  ],
  corePrinciplesEn: [
    "Intentionality beats intensity: bold maximalism and refined minimalism both work.",
    "Tokens first; every value traces to a design scale.",
    "Escalate exactly one dimension to a memorable extreme and discipline the rest.",
    "Brand surfaces need distinctiveness; product surfaces need earned familiarity.",
    "Self-review failures are fixed, not rationalized.",
  ],
  corePrinciplesVi: [
    "Chủ ý quan trọng hơn độ mạnh: maximalism táo bạo hay minimalism tinh tế đều có thể đúng.",
    "Token trước; mọi giá trị phải truy về design scale.",
    "Chỉ đẩy một chiều lên cực đáng nhớ và giữ các chiều còn lại kỷ luật.",
    "Bề mặt brand cần khác biệt; bề mặt product cần sự quen thuộc đáng tin.",
    "Lỗi self-review phải sửa, không được hợp lý hóa.",
  ],
  expertiseAreasEn: [
    "Screenshot and video replication with multimodal analysis",
    "Distinctive from-scratch web art direction",
    "3D/WebGL and immersive interface routing",
    "Typography, OKLCH palettes, motion craft, imagery, interaction states, and accessibility",
    "Anti-slop review for copy, layout, surfaces, cards, hero patterns, and viewport behavior",
  ],
  expertiseAreasVi: [
    "Sao chép giao diện từ screenshot và video bằng phân tích multimodal",
    "Art direction web khác biệt khi làm từ đầu",
    "Định tuyến 3D/WebGL và giao diện immersive",
    "Typography, palette OKLCH, motion craft, hình ảnh, state tương tác và accessibility",
    "Review chống slop cho copy, layout, surface, card, hero pattern và hành vi viewport",
  ],
  workflowModes: [
    { flag: "Screenshot", modeEn: "Exact replication", modeVi: "Sao chép chính xác", research: "workflow-screenshot + ak:ai-multimodal", redTeam: "Source is contract", validation: "Compare to original", cookFlag: "screenshot input" },
    { flag: "Video", modeEn: "Animated replication", modeVi: "Sao chép có animation", research: "workflow-video", redTeam: "Motion matches source", validation: "Compare animation", cookFlag: "video input" },
    { flag: "3D/WebGL", modeEn: "Immersive", modeVi: "Immersive", research: "workflow-3d", redTeam: "Performance and controls", validation: "Actual surface run", cookFlag: "Three.js" },
    { flag: "From scratch", modeEn: "Decision procedure", modeVi: "Decision procedure", research: "aesthetic direction menu", redTeam: "Anti-slop bans", validation: "Self-review gate", cookFlag: "brief input" },
  ],
  invocation: {
    syntax: '/ak:frontend-design [design request and constraints]',
    arguments: [
      {
        token: '[design request and constraints]',
        titleEn: 'Design request',
        titleVi: 'Yêu cầu thiết kế',
        descEn: 'Natural-language brief, screenshot/video replication goal, 3D/WebGL request, quick prototype, or description-only task. Include audience, purpose, content, brand assets, framework, editable files, allowed tools, viewport targets, and approval boundaries for packages, generated assets, browser testing, and documentation updates.',
        descVi: 'Brief bằng ngôn ngữ tự nhiên, mục tiêu tái tạo screenshot/video, yêu cầu 3D/WebGL, prototype nhanh hoặc tác vụ chỉ mô tả. Nêu audience, mục đích, nội dung, brand asset, framework, file được sửa, công cụ được phép, viewport cần kiểm và ranh giới phê duyệt cho cài package, tạo asset, kiểm thử browser và cập nhật tài liệu.',
        required: true,
        exampleCommand: '/ak:frontend-design "Implement the supplied 1440 px landing-page screenshot in the existing stack. Preserve layout and brand assets, include responsive behavior at 375 px, all interaction states, reduced motion, and a visual comparison. Do not install packages, generate assets, or update design guidelines without approval."',
          exampleCommandVi: '/ak:frontend-design "Implement screenshot landing-page 1440 px được cung cấp trong stack hiện có. Giữ nguyên layout và brand assets, bao gồm responsive behavior ở 375 px, mọi interaction states, reduced motion, và visual comparison. Không install packages, generate assets, hoặc update design guidelines khi chưa được phê duyệt."',
      },
    ],
  },
  guardrails: [
    { thoughtEn: "A centered hero with three cards is safe.", thoughtVi: "Hero giữa trang với ba card là an toàn.", realityEn: "It is explicitly banned as the common AI template. Re-derive layout from the content.", realityVi: "Đó là template AI bị cấm rõ ràng. Hãy suy lại layout từ nội dung.", accent: "red" },
    { thoughtEn: "Decorations make it designed.", thoughtVi: "Thêm trang trí là có design.", realityEn: "Decoration is cheaper than design. Delete ornament unless it carries composition or meaning.", realityVi: "Trang trí rẻ hơn design. Xóa ornament nếu nó không gánh bố cục hoặc ý nghĩa.", accent: "amber" },
    { thoughtEn: "The UI looks okay at desktop.", thoughtVi: "Desktop nhìn ổn là được.", realityEn: "375px must be verified: no horizontal scroll, no overflow, and layout composes rather than shrinks.", realityVi: "Phải kiểm ở 375px: không scroll ngang, không tràn chữ, layout phải tự dàn lại chứ không chỉ thu nhỏ.", accent: "violet" },
  ],
  skillStack: [
    { name: "ak:ai-multimodal", type: "skill" },
    { name: "ui-ux-designer", type: "agent" },
    { name: "ak:media-processing", type: "skill" },
    { name: "Three.js", type: "tool" },
  ],
  promptExamples: [
    { labelEn: "From-scratch interface", labelVi: "Giao diện từ đầu", command: "/ak:frontend-design design and build a distinctive landing page for our observability product",
      commandVi: '/ak:frontend-design thiết kế và xây dựng một trang đích đặc sắc cho sản phẩm quan sát của chúng tôi', whenEn: "Invoke when visual fidelity and polished UI are primary for a new surface.", whenVi: "Dùng khi fidelity hình ảnh và UI chỉn chu là ưu tiên chính cho một bề mặt mới.", expectedEn: "Shows the Design Read, seeded variation, and aesthetic thesis, defines tokenized OKLCH/type/spacing systems, implements real code, then fixes every Self-Review Gate failure before handoff.", expectedVi: "Hiển thị Design Read, seeded variation và aesthetic thesis, định nghĩa hệ token OKLCH/type/spacing, triển khai code thật rồi sửa mọi lỗi Self-Review Gate trước khi bàn giao.", recommended: true },
    { labelEn: "Screenshot replication", labelVi: "Sao chép screenshot", command: "/ak:frontend-design recreate this screenshot as a working component",
      commandVi: '/ak:frontend-design tái tạo ảnh chụp màn hình này thành một component hoạt động', whenEn: "Use when a supplied screenshot is the visual contract to match.", whenVi: "Dùng khi screenshot được cung cấp là contract hình ảnh cần khớp.", expectedEn: "Runs the screenshot workflow: analyzes the source with ak:ai-multimodal, plans with the UI design subagent, implements a precise match, verifies against the original, and documents guidelines only if approved.", expectedVi: "Chạy workflow screenshot: phân tích nguồn bằng ak:ai-multimodal, lập kế hoạch với subagent UI design, triển khai bản khớp chính xác, xác minh đối chiếu ảnh gốc và chỉ ghi guideline nếu được duyệt." },
    { labelEn: "Video or motion match", labelVi: "Khớp video hoặc motion", command: "/ak:frontend-design recreate the interaction in this product demo video",
      commandVi: '/ak:frontend-design tái tạo tương tác trong video demo sản phẩm này', whenEn: "Use when the reference is a video and animation fidelity matters.", whenVi: "Dùng khi nguồn tham chiếu là video và fidelity animation quan trọng.", expectedEn: "Selects the video replication workflow, extracts timing and effects from the reference, implements motivated motion with reduced-motion handling, and compares the result back to the original sequence.", expectedVi: "Chọn workflow sao chép video, trích timing và hiệu ứng từ nguồn, triển khai motion có lý do kèm reduced-motion, rồi so sánh kết quả với chuỗi gốc." },
    { labelEn: "3D experience", labelVi: "Trải nghiệm 3D", command: "/ak:frontend-design build a Three.js product hero with subtle motion",
      commandVi: '/ak:frontend-design xây dựng product hero Three.js với chuyển động tinh tế', whenEn: "Use when the request calls for an immersive WebGL or Three.js-style interface.", whenVi: "Dùng khi yêu cầu cần giao diện immersive kiểu WebGL hoặc Three.js.", expectedEn: "Routes to the 3D/WebGL workflow, treats performance, controls, viewport composition, and reduced-motion as implementation constraints, then reports verified behavior and any known limitations.", expectedVi: "Đi theo workflow 3D/WebGL, coi hiệu năng, điều khiển, bố cục viewport và reduced-motion là ràng buộc triển khai, rồi báo hành vi đã xác minh và giới hạn đã biết." },
  ],
};

export default data;

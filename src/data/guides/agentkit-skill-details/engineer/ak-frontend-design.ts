import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-frontend-design",
  command: "/ak:frontend-design",
  kit: "engineer",
  header: {
    titleEn: "/ak:frontend-design",
    titleVi: "/ak:frontend-design",
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
    { name: "browser verification", type: "tool" },
  ],
  promptExamples: [
    { labelEn: "From-scratch interface", labelVi: "Giao diện từ đầu", command: "/ak:frontend-design design and build a distinctive landing page for our observability product", whenEn: "Visual polish and differentiation matter more than routine implementation.", whenVi: "Độ chỉn chu hình ảnh và khác biệt quan trọng hơn triển khai thông thường.", expectedEn: "Declares design read, seed, thesis, tokens, implements a real UI, and passes the self-review gate.", expectedVi: "Tuyên bố cách đọc, seed, thesis, token, triển khai UI thật và vượt self-review gate.", recommended: true },
    { labelEn: "Screenshot replication", labelVi: "Sao chép screenshot", command: "/ak:frontend-design recreate this screenshot as a working component", whenEn: "The supplied screenshot is the visual contract.", whenVi: "Screenshot được cung cấp là contract hình ảnh.", expectedEn: "Uses multimodal analysis, plans implementation, matches the source, verifies against it, and reports fidelity.", expectedVi: "Dùng phân tích multimodal, lập kế hoạch triển khai, khớp nguồn, xác minh đối chiếu và báo fidelity." },
    { labelEn: "3D experience", labelVi: "Trải nghiệm 3D", command: "/ak:frontend-design build a WebGL product hero with subtle motion", whenEn: "The request calls for an immersive or Three.js-style experience.", whenVi: "Yêu cầu cần trải nghiệm immersive hoặc kiểu Three.js.", expectedEn: "Routes to 3D workflow, handles motion/reduced-motion, verifies performance and viewport safety.", expectedVi: "Đi theo workflow 3D, xử lý motion/reduced-motion, xác minh hiệu năng và an toàn viewport." },
  ],
};

export default data;

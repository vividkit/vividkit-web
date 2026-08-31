import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-design',
  command: '/ak:design',
  kit: 'engineer',
  header: {
    titleEn: '/ak:design — Unified brand and visual design',
    titleVi: '/ak:design — Thiết kế nhận diện và hình ảnh',
    taglineEn: 'Unified brand and visual design skill for identity, logos, CIP, slides, banners, social photos, icons, posters, and design-system routing — not UI code patterns.',
    taglineVi: 'Skill thiết kế hình ảnh và thương hiệu thống nhất cho identity, logo, CIP, slide, banner, social photo, icon, poster và routing design-system — không dùng cho pattern code UI.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'Real brands require real assets',
    titleVi: 'Brand thật cần asset thật',
    contentEn: 'When a task names a real brand or product, load the brand-asset protocol before generating. If the logo cannot be located, stop and ask; never fabricate it.',
    contentVi: 'Khi nhiệm vụ nêu brand hoặc sản phẩm thật, phải nạp brand-asset protocol trước khi tạo. Nếu không tìm được logo, dừng và hỏi; không được bịa logo.',
  },
  processFlow: [
    { number: 1, titleEn: 'Design read', titleVi: 'Đọc brief thiết kế', descEn: 'Declare: “Reading this as: <deliverable> for <audience>, leaning <aesthetic direction>.” Ask exactly one clarifying question only if the brief is truly ambiguous.', descVi: 'Tuyên bố: “Reading this as: <deliverable> for <audience>, leaning <aesthetic direction>.” Chỉ hỏi đúng một câu nếu brief thật sự mơ hồ.' },
    { number: 2, titleEn: 'Route task', titleVi: 'Định tuyến nhiệm vụ', descEn: 'Route brand, tokens, UI styling, logo, CIP, slides, banner, social photos, icon, or poster work to the matching sub-skill/reference.', descVi: 'Đưa việc brand, token, UI styling, logo, CIP, slide, banner, social photo, icon hoặc poster sang đúng sub-skill/tài liệu.' },
    { number: 3, titleEn: 'Protect brand', titleVi: 'Bảo vệ brand', descEn: 'For real brands, locate authentic assets first; for invented brands, generate or brief a new identity intentionally.', descVi: 'Với brand thật, tìm asset xác thực trước; với brand mới, tạo hoặc brief identity mới một cách chủ đích.' },
    { number: 4, titleEn: 'Select method', titleVi: 'Chọn phương pháp', descEn: 'Use the relevant reference or script: logo search/generate, CIP search/generate/render, slides create, banner workflow, icon generator, poster search/generate, or social photo workflow.', descVi: 'Dùng reference hoặc script phù hợp: logo search/generate, CIP search/generate/render, slides create, banner workflow, icon generator, poster search/generate hoặc social photo workflow.' },
    { number: 5, titleEn: 'Shape direction', titleVi: 'Định hình hướng', descEn: 'For new, vague, or externally shipped work, run the design-workflow 4-pass sequence and expose style, palette, composition, and exclusions before expensive generation.', descVi: 'Với việc mới, mơ hồ hoặc xuất ra ngoài, chạy chuỗi 4 pass của design-workflow và làm rõ style, palette, composition cùng điều cần loại trừ trước khi generate tốn chi phí.' },
    { number: 6, titleEn: 'Produce asset', titleVi: 'Tạo asset', descEn: 'Create the requested output: white-background logos, CIP mockups, HTML slides, exact-size banner/social exports, SVG icons, or model-ready poster prompts.', descVi: 'Tạo đúng đầu ra: logo nền trắng, mockup CIP, slide HTML, banner/social đúng kích thước, icon SVG hoặc prompt poster sẵn dùng cho model.' },
    { number: 7, titleEn: 'Review craft', titleVi: 'Review tay nghề', descEn: 'Self-review with the design critique guide; if concept score is 5 or lower, fix the idea before polishing craft.', descVi: 'Tự review theo design critique guide; nếu điểm concept từ 5 trở xuống, sửa ý tưởng trước khi đánh bóng kỹ thuật.' },
    { number: 8, titleEn: 'Present and iterate', titleVi: 'Trình bày và lặp', descEn: 'Show options side-by-side, ask about HTML preview after logo generation, export screenshots when needed, and iterate from feedback.', descVi: 'Trình bày các phương án cạnh nhau, hỏi về HTML preview sau khi tạo logo, export screenshot khi cần và lặp theo feedback.' },
  ],
  corePrinciplesEn: ['Design starts with deliverable, audience, and aesthetic direction.', 'Real brand assets must be located, not fabricated.', 'Generic visuals are failure modes, not safe defaults.', 'Route UI code to UI-specific skills; this skill owns brand and visual assets.', 'Critique concept before polishing execution.'],
  corePrinciplesVi: ['Thiết kế bắt đầu từ deliverable, audience và hướng thẩm mỹ.', 'Asset brand thật phải được tìm, không bịa.', 'Visual chung chung là lỗi, không phải mặc định an toàn.', 'Code UI đưa sang skill UI; skill này phụ trách brand và asset hình ảnh.', 'Phê bình concept trước khi đánh bóng phần thi công.'],
  expertiseAreasEn: ['Brand identity', 'Design tokens and specs', 'Logo generation', 'Corporate identity programs', 'Slides and pitch decks', 'Banners and social photos', 'SVG icons', 'Poster prompt systems'],
  expertiseAreasVi: ['Brand identity', 'Design token và spec', 'Tạo logo', 'Bộ nhận diện doanh nghiệp', 'Slide và pitch deck', 'Banner và social photo', 'Icon SVG', 'Hệ prompt poster'],
  invocation: {
    syntax: '/ak:design [design-type] [context]',
    arguments: [
      { token: '[design-type]', titleEn: 'Design type', titleVi: 'Loại thiết kế', descEn: 'Visual artifact or routing target to start: brand identity, tokens, logo, CIP, slides, banner, social image, SVG icon, poster prompt, or related UI styling. Not a mode flag.', descVi: 'Artifact hình ảnh hoặc hướng định tuyến cần bắt đầu: nhận diện thương hiệu, token, logo, CIP, slide, banner, ảnh mạng xã hội, icon SVG, prompt poster hoặc UI styling liên quan. Không phải mode flag.', required: true, exampleCommand: '/ak:design logo concepts for a fintech startup named LedgerFox',
          exampleCommandVi: '/ak:design ý tưởng logo cho startup fintech tên LedgerFox' },
      { token: '[context]', titleEn: 'Brief context', titleVi: 'Context brief', descEn: 'Audience, platform or physical format, required copy, brand assets, quantity, dimensions, delivery format, and output location. For real brands, provide approved assets instead of asking the Skill to guess them.', descVi: 'Audience, nền tảng hoặc định dạng vật lý, copy bắt buộc, asset thương hiệu, số lượng, kích thước, định dạng bàn giao và nơi ghi output. Với brand thật, cung cấp asset đã duyệt thay vì yêu cầu Skill đoán.', exampleCommand: '/ak:design LinkedIn launch banner for Notion using its real brand assets',
          exampleCommandVi: '/ak:design banner ra mắt LinkedIn cho Notion sử dụng tài sản thương hiệu thật của nó' },
    ],
  },
  promptExamples: [
    { labelEn: 'Brand package', labelVi: 'Bộ thương hiệu', command: '/ak:design brand identity and logo concepts for a fintech startup named LedgerFox',
      commandVi: '/ak:design nhận diện thương hiệu và ý tưởng logo cho startup fintech tên LedgerFox', whenEn: 'You need a new visual identity and logo direction for an invented brand.', whenVi: 'Khi cần identity và hướng logo mới cho một brand giả định.', expectedEn: 'Design read, route to logo/identity work, generate white-background logo directions, critique the concept, and present options.', expectedVi: 'Đọc brief, định tuyến sang logo/identity, tạo hướng logo nền trắng, critique concept và trình bày các phương án.', recommended: true },
    { labelEn: 'Real brand banner', labelVi: 'Banner brand thật', command: '/ak:design LinkedIn launch banner for Notion using its real brand assets',
      commandVi: '/ak:design Banner ra mắt LinkedIn cho Notion sử dụng tài sản thương hiệu thật của nó', whenEn: 'A real company or product is named and assets must be authentic.', whenVi: 'Khi nêu công ty/sản phẩm thật và asset phải xác thực.', expectedEn: 'Load the brand-asset protocol first, locate authentic logo/assets, then design and export an exact-size banner with visual checks.', expectedVi: 'Nạp brand-asset protocol trước, tìm logo/asset xác thực, rồi thiết kế và export banner đúng kích thước kèm kiểm tra visual.' },
    { labelEn: 'SVG icon set', labelVi: 'Bộ icon SVG', command: '/ak:design create four SVG navigation icons for a finance dashboard using outlined style and currentColor',
      commandVi: '/ak:design tạo bốn biểu tượng điều hướng SVG cho bảng điều khiển tài chính sử dụng kiểu outlined và currentColor', whenEn: 'You need generated SVG icon text rather than application UI code.', whenVi: 'Khi cần SVG icon được generate dưới dạng text, không phải code UI ứng dụng.', expectedEn: 'Route to the built-in icon generator, create SVG XML variants, then inspect viewBox, currentColor, titles, and small-size clarity.', expectedVi: 'Định tuyến tới icon generator tích hợp, tạo biến thể SVG XML, rồi kiểm viewBox, currentColor, title và độ rõ ở size nhỏ.' },
    { labelEn: 'Poster prompt', labelVi: 'Prompt poster', command: '/ak:design poster for an AI conference with Swiss editorial style',
      commandVi: '/ak:design poster cho hội nghị AI với phong cách biên tập Thụy Sĩ', whenEn: 'You need a model-ready prompt with locked style, palette, texture, and layout direction.', whenVi: 'Khi cần prompt sẵn đưa cho model với style, palette, texture và layout rõ.', expectedEn: 'Search poster knowledge bases, build the brief, and emit a reusable model-agnostic prompt rather than claiming an image exists.', expectedVi: 'Tìm trong knowledge base poster, tạo brief và xuất prompt không phụ thuộc model thay vì tuyên bố đã có ảnh.' },
  ],
  specialOperations: [
    { id: 'logo', titleEn: 'Logo', titleVi: 'Logo', descEn: 'Search styles, colors, industries, then generate white-background logo variants.', descVi: 'Tìm style, màu, ngành rồi tạo các biến thể logo nền trắng.', color: 'blue' },
    { id: 'cip', titleEn: 'CIP', titleVi: 'CIP', descEn: 'Create mockups and render an HTML presentation for corporate identity deliverables.', descVi: 'Tạo mockup và render presentation HTML cho bộ nhận diện doanh nghiệp.', color: 'purple' },
    { id: 'banner', titleEn: 'Banner', titleVi: 'Banner', descEn: 'Design exact-size social, ads, web, or print banners with safe zones and one CTA.', descVi: 'Thiết kế banner social, ads, web hoặc print đúng kích thước, có safe zone và một CTA.', color: 'green' },
    { id: 'poster', titleEn: 'Poster', titleVi: 'Poster', descEn: 'Build model-agnostic poster prompts with locked visual axes and variation seeds.', descVi: 'Tạo prompt poster không phụ thuộc model, giữ cố định các trục thị giác và đổi seed biến thể.', color: 'amber' },
  ],
  skillStack: [{ name: 'brand', type: 'skill' }, { name: 'design-system', type: 'skill' }, { name: 'ui-styling', type: 'skill' }, { name: 'ak:frontend-design', type: 'skill' }, { name: 'ak:ui-ux-pro-max', type: 'skill' }, { name: 'ak:ai-artist', type: 'skill' }, { name: 'ak:ai-multimodal', type: 'skill' }, { name: 'ak:agent-browser', type: 'skill' }, { name: 'Gemini Nano Banana / Gemini 3.1 Pro Preview', type: 'tool' }, { name: 'browser capture', type: 'tool' }],
};

export default data;

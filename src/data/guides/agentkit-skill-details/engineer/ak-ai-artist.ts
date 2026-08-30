import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-ai-artist',
  command: '/ak:ai-artist',
  kit: 'engineer',
  header: {
    titleEn: '/ak:ai-artist — Nano Banana prompt-to-image workflow',
    titleVi: '/ak:ai-artist — Quy trình tạo ảnh bằng prompt Nano Banana',
    taglineEn:
      'Turns a visual concept into generated assets through a mandatory validation interview, 129 curated Nano Banana prompts, search/creative/wild modes, and rendering routed through ai-multimodal providers.',
    taglineVi:
      'Biến ý tưởng hình ảnh thành asset được tạo ra qua phỏng vấn kiểm chứng bắt buộc, 129 prompt Nano Banana tuyển chọn, các mode search/creative/wild và render qua provider của ai-multimodal.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Validation interview before generation',
    titleVi: 'Phải phỏng vấn kiểm chứng trước khi tạo ảnh',
    contentEn:
      'Run the style, mood, color, and intent validation interview before generating unless --skip is explicitly requested.',
    contentVi:
      'Phải hỏi kiểm chứng về phong cách, cảm xúc, màu sắc và ý định trước khi tạo ảnh, trừ khi người dùng nêu rõ --skip.',
  },
  processFlow: [
    { number: 1, titleEn: 'Validate brief', titleVi: 'Xác minh brief', descEn: 'Interview for subject, purpose, audience, style, mood, colors, text, aspect ratio, output intent, and constraints unless --skip explicitly bypasses validation.', descVi: 'Phỏng vấn để làm rõ subject, mục đích, người xem, style, mood, màu sắc, text, aspect ratio, output intent và ràng buộc trừ khi --skip được nêu rõ để bỏ qua.' },
    { number: 2, titleEn: 'Search prompt bank', titleVi: 'Tìm trong kho prompt', descEn: 'Rank the concept against the 129-prompt database covering avatars, infographics, social media, product shots, art styles, and characters.', descVi: 'Xếp hạng concept với kho 129 prompt gồm avatar, infographic, social, ảnh sản phẩm, phong cách nghệ thuật và nhân vật.' },
    { number: 3, titleEn: 'Adapt prompt', titleVi: 'Điều chỉnh prompt', descEn: 'Replace source placeholders with the concept and add negative constraints when the matched prompt does not already include them.', descVi: 'Thay placeholder của prompt nguồn bằng concept và thêm ràng buộc phủ định khi prompt khớp chưa có sẵn.' },
    { number: 4, titleEn: 'Apply mode', titleVi: 'Áp dụng mode', descEn: 'Use search for the closest curated prompt, creative to remix top matches, wild for a random artistic transform, or all for three variations.', descVi: 'Dùng search để lấy prompt tuyển chọn gần nhất, creative để phối các kết quả đầu, wild để biến tấu nghệ thuật ngẫu nhiên, hoặc all để tạo ba biến thể.' },
    { number: 5, titleEn: 'Resolve provider', titleVi: 'Chọn provider', descEn: 'Choose auto, google, or openrouter plus the requested model so rendering uses direct Google or OpenRouter-backed Google image generation.', descVi: 'Chọn auto, google hoặc openrouter cùng model được yêu cầu để render bằng Google trực tiếp hoặc image generation Google qua OpenRouter.' },
    { number: 6, titleEn: 'Render or dry-run', titleVi: 'Render hoặc dry-run', descEn: 'Generate the requested PNG output path, or use --dry-run / --verbose to inspect the assembled prompt and matched prompt details without committing to pixels.', descVi: 'Tạo PNG tại output path yêu cầu, hoặc dùng --dry-run / --verbose để kiểm tra prompt đã lắp ghép và chi tiết prompt khớp mà chưa chốt tạo pixel.' },
    { number: 7, titleEn: 'Return evidence', titleVi: 'Trả bằng chứng', descEn: 'Report final prompt evidence when requested, selected mode, provider, model, output paths, failures, and visual review notes.', descVi: 'Báo final prompt khi được yêu cầu, mode, provider, model, output path, lỗi và ghi chú review hình ảnh.' },
  ],
  corePrinciplesEn: [
    'Prompt quality starts with validation; --skip is an explicit bypass, not the default.',
    'Search mode is safest, creative mode remixes evidence, wild mode deliberately explores.',
    'Rendering is delegated through ai-multimodal providers; this skill owns prompt selection and validation.',
    'Use curated visual genres intentionally: product, infographic, social, artistic, avatar, or character.',
  ],
  corePrinciplesVi: [
    'Chất lượng prompt bắt đầu từ kiểm chứng; --skip là bỏ qua có chủ đích, không phải mặc định.',
    'Mode search an toàn nhất, creative phối từ bằng chứng, wild cố ý khám phá mạnh hơn.',
    'Phần render được giao qua provider của ai-multimodal; skill này sở hữu chọn prompt và kiểm chứng.',
    'Dùng thể loại hình ảnh có chủ đích: sản phẩm, infographic, social, nghệ thuật, avatar hoặc nhân vật.',
  ],
  workflowModes: [
    { flag: '--mode search', modeEn: 'Best prompt match', modeVi: 'Ghép prompt tốt nhất', research: 'Default mode', redTeam: 'Grounds output in curated prompt bank', validation: 'One final image from closest match' },
    { flag: '--mode creative', modeEn: 'Prompt remix', modeVi: 'Phối prompt', research: 'Uses top three matches', redTeam: 'Combines rather than wanders', validation: 'One synthesized creative image' },
    { flag: '--mode wild', modeEn: 'Experimental transform', modeVi: 'Biến tấu thử nghiệm', research: 'Random artistic transformation', redTeam: 'Higher novelty and less predictability', validation: 'One exploratory image' },
    { flag: '--mode all', modeEn: 'All variations', modeVi: 'Tất cả biến thể', research: 'Runs search, creative, and wild', redTeam: 'More cost and review surface', validation: 'Three comparison outputs' },
  ],
  promptExamples: [
    { labelEn: 'Search-mode campaign banner', labelVi: 'Banner chiến dịch mode search', command: '/ak:ai-artist "16:9 launch banner for a developer CLI, dark steel-blue terminal geometry, no logos, no people, no text" --mode search', whenEn: 'Use when you want the safest curated-prompt match and are willing to answer the validation interview.', whenVi: 'Dùng khi muốn prompt tuyển chọn phù hợp nhất và sẵn sàng trả lời phần kiểm chứng.', expectedEn: 'Runs the validation interview, ranks the concept against the curated prompt bank, adapts the closest match, renders one PNG, and reports the selected prompt/provider evidence.', expectedVi: 'Chạy validation interview, xếp hạng concept trong kho prompt tuyển chọn, điều chỉnh prompt khớp nhất, render một PNG và báo bằng chứng prompt/provider đã chọn.', recommended: true },
    { labelEn: 'Creative remix through OpenRouter', labelVi: 'Remix creative qua OpenRouter', command: '/ak:ai-artist "AI workshop hero image with collaborative agents, bright but professional, no readable text" --mode creative --provider openrouter', whenEn: 'Use when the visual should combine hints from the top prompt matches and generation should route through OpenRouter-backed Google models.', whenVi: 'Dùng khi visual cần kết hợp hint từ các prompt khớp hàng đầu và generation phải đi qua model Google qua OpenRouter.', expectedEn: 'Uses creative mode to remix elements from the top three matching prompts, keeps the Nano Banana prompt workflow, and routes rendering through the requested provider.', expectedVi: 'Dùng mode creative để remix yếu tố từ ba prompt khớp hàng đầu, giữ workflow prompt Nano Banana và render qua provider được yêu cầu.' },
    { labelEn: 'Wild style exploration', labelVi: 'Khám phá style wild', command: '/ak:ai-artist "minimal product showcase for a privacy-first hardware wallet, dramatic shadows, premium materials" --mode wild --skip', whenEn: 'Use only when the brief is already precise or the user explicitly accepts bypassing the validation interview for a more random style transform.', whenVi: 'Chỉ dùng khi brief đã rõ hoặc người dùng chấp nhận bỏ validation interview để nhận biến đổi style ngẫu nhiên hơn.', expectedEn: 'Bypasses the interview, applies one random wild transformation such as Ukiyo-e, Bento grid, cyberpunk, cinematic poster, or vintage patent, then returns the generated file path.', expectedVi: 'Bỏ phỏng vấn, áp dụng một transformation wild ngẫu nhiên như Ukiyo-e, Bento grid, cyberpunk, cinematic poster hoặc vintage patent, rồi trả đường dẫn file đã tạo.' },
    { labelEn: 'All-mode comparison set', labelVi: 'Bộ so sánh mode all', command: '/ak:ai-artist "futuristic city skyline for a product keynote, optimistic, clean, high contrast" --mode all --provider google', whenEn: 'Use when comparing the closest match, a creative remix, and a wild transform is worth three generated variations.', whenVi: 'Dùng khi đáng tạo ba biến thể để so sánh prompt khớp nhất, bản remix creative và biến đổi wild.', expectedEn: 'Runs search, creative, and wild modes for the same concept, producing three comparison outputs and reporting which mode produced each returned file path.', expectedVi: 'Chạy các mode search, creative và wild cho cùng concept, tạo ba output để so sánh và báo mode nào tạo từng đường dẫn file được trả.' },
  ],
  specialOperations: [
    { id: 'prompt-bank', titleEn: '129 curated prompts', titleVi: '129 prompt tuyển chọn', descEn: 'The prompt bank covers commercial, social, infographic, avatar, artistic, and character styles.', descVi: 'Kho prompt bao phủ phong cách thương mại, social, infographic, avatar, nghệ thuật và nhân vật.', color: 'purple' },
    { id: 'wild-styles', titleEn: 'Wild transforms', titleVi: 'Biến tấu wild', descEn: 'Ukiyo-e, Bento grid, patent document, cyberpunk, chalkboard, diorama, poster, vaporwave, and more.', descVi: 'Ukiyo-e, Bento grid, tài liệu bằng sáng chế, cyberpunk, bảng phấn, diorama, poster, vaporwave và nhiều kiểu khác.', color: 'pink' },
  ],
  composableFlagsEn: '--mode accepts search, creative, wild, or all. --provider accepts auto, google, or openrouter. -ar/--aspect-ratio, --model, -v/--verbose, and --dry-run pass through to the generation script; --skip belongs to the Skill invocation and bypasses the required validation interview.',
  composableFlagsVi: '--mode nhận search, creative, wild hoặc all. --provider nhận auto, google hoặc openrouter. -ar/--aspect-ratio, --model, -v/--verbose và --dry-run được chuyển cho generation script; --skip thuộc invocation của Skill và bỏ qua validation interview bắt buộc.',
};

export default data;

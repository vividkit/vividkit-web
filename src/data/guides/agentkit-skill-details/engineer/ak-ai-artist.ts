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
    { number: 1, titleEn: 'Capture concept', titleVi: 'Ghi nhận ý tưởng', descEn: 'Start from the concept and clarify asset purpose, audience, format, style, mood, colors, and constraints unless --skip bypasses the interview.', descVi: 'Bắt đầu từ ý tưởng và làm rõ mục đích asset, người xem, định dạng, phong cách, cảm xúc, màu sắc và ràng buộc trừ khi --skip bỏ qua phỏng vấn.' },
    { number: 2, titleEn: 'Choose mode', titleVi: 'Chọn mode', descEn: 'Use search for the closest curated prompt, creative to remix top matches, wild for a random artistic transform, or all for three variations.', descVi: 'Dùng search để lấy prompt tuyển chọn gần nhất, creative để phối các kết quả đầu, wild để biến tấu nghệ thuật ngẫu nhiên, hoặc all để tạo ba biến thể.' },
    { number: 3, titleEn: 'Pick provider', titleVi: 'Chọn provider', descEn: 'Route rendering through auto, google, or openrouter while preserving the Nano Banana prompt behavior.', descVi: 'Điều hướng render qua auto, google hoặc openrouter nhưng vẫn giữ cách xây prompt của Nano Banana.' },
    { number: 4, titleEn: 'Search prompt bank', titleVi: 'Tìm trong kho prompt', descEn: 'Match the concept against the 129-prompt database covering avatars, infographics, social media, product shots, art styles, and characters.', descVi: 'Ghép ý tưởng với kho 129 prompt gồm avatar, infographic, social, ảnh sản phẩm, phong cách nghệ thuật và nhân vật.' },
    { number: 5, titleEn: 'Generate assets', titleVi: 'Tạo asset', descEn: 'Call the generation script with output path, selected mode, provider, aspect ratio, and model choice when the workflow requires it.', descVi: 'Gọi script tạo ảnh với đường dẫn output, mode đã chọn, provider, tỷ lệ khung hình và model khi workflow cần.' },
    { number: 6, titleEn: 'Review variations', titleVi: 'Đánh giá biến thể', descEn: 'Use verbose or dry-run style review when needed to inspect matched prompts before committing to final generation.', descVi: 'Khi cần, dùng chế độ xem chi tiết hoặc dry-run để kiểm tra prompt được ghép trước khi chốt tạo ảnh cuối.' },
    { number: 7, titleEn: 'Hand off files', titleVi: 'Bàn giao file', descEn: 'Return generated paths and note the mode/provider choices so downstream project organization or campaign work can reuse the assets.', descVi: 'Trả đường dẫn ảnh và ghi lại mode/provider đã chọn để bước tổ chức dự án hoặc campaign phía sau tái dùng asset.' },
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
    { labelEn: 'Default asset', labelVi: 'Asset mặc định', command: '/ak:ai-artist "tech conference banner"', whenEn: 'Use when you want the safest curated-prompt match and are willing to answer the validation interview.', whenVi: 'Dùng khi muốn prompt tuyển chọn phù hợp nhất và sẵn sàng trả lời phần kiểm chứng.', expectedEn: 'Interviews, searches curated prompts, renders through the configured provider, and returns the output path.', expectedVi: 'Phỏng vấn, tìm prompt tuyển chọn, render qua provider đã cấu hình và trả đường dẫn ảnh.', recommended: true },
    { labelEn: 'Creative remix', labelVi: 'Phối sáng tạo', command: '/ak:ai-artist "AI workshop hero image" --mode creative --provider openrouter', whenEn: 'Use when top prompt matches should be remixed and rendering should go through OpenRouter.', whenVi: 'Dùng khi muốn phối các prompt khớp nhất và render qua OpenRouter.', expectedEn: 'Keeps the prompt workflow but routes generation through the requested provider.', expectedVi: 'Giữ workflow prompt nhưng điều hướng tạo ảnh qua provider được yêu cầu.' },
    { labelEn: 'Bypass interview', labelVi: 'Bỏ qua phỏng vấn', command: '/ak:ai-artist "minimal product showcase" --mode wild --skip', whenEn: 'Use only when the concept is already precise or the user explicitly accepts less validation.', whenVi: 'Chỉ dùng khi ý tưởng đã rất rõ hoặc người dùng chấp nhận ít kiểm chứng hơn.', expectedEn: 'Skips the mandatory interview and runs the selected experimental mode.', expectedVi: 'Bỏ phần phỏng vấn bắt buộc và chạy mode thử nghiệm đã chọn.' },
  ],
  specialOperations: [
    { id: 'prompt-bank', titleEn: '129 curated prompts', titleVi: '129 prompt tuyển chọn', descEn: 'The prompt bank covers commercial, social, infographic, avatar, artistic, and character styles.', descVi: 'Kho prompt bao phủ phong cách thương mại, social, infographic, avatar, nghệ thuật và nhân vật.', color: 'purple' },
    { id: 'wild-styles', titleEn: 'Wild transforms', titleVi: 'Biến tấu wild', descEn: 'Ukiyo-e, Bento grid, patent document, cyberpunk, chalkboard, diorama, poster, vaporwave, and more.', descVi: 'Ukiyo-e, Bento grid, tài liệu bằng sáng chế, cyberpunk, bảng phấn, diorama, poster, vaporwave và nhiều kiểu khác.', color: 'pink' },
  ],
  composableFlagsEn: '--provider accepts auto, google, or openrouter. --skip bypasses the required validation interview and should be explicit.',
  composableFlagsVi: '--provider nhận auto, google hoặc openrouter. --skip bỏ qua phần phỏng vấn kiểm chứng bắt buộc và phải là lựa chọn rõ ràng.',
};

export default data;

import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-ai-multimodal',
  command: '/ak:ai-multimodal',
  kit: 'engineer',
  header: {
    titleEn: '/ak:ai-multimodal — Multix media analysis and generation',
    titleVi: '/ak:ai-multimodal — Phân tích và tạo media bằng Multix',
    taglineEn:
      'Processes images, audio, video, and documents with the npm-latest @mrgoonie/multix CLI for Gemini vision, OCR, transcription, structured extraction, media optimization, and provider-resolved generation.',
    taglineVi:
      'Xử lý ảnh, âm thanh, video và tài liệu bằng CLI @mrgoonie/multix bản npm mới nhất cho Gemini vision, OCR, chuyển lời nói thành văn bản, trích xuất có cấu trúc, tối ưu media và tạo nội dung theo provider đã xác minh.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'Resolve live provider and model capability',
    titleVi: 'Phải xác minh provider và model hiện hành',
    contentEn:
      'Before generation, run the relevant npm-latest multix help, check the provider catalog, choose an explicit supported model, and never infer “latest”, “default”, or “recommended” from this skill.',
    contentVi:
      'Trước khi tạo nội dung, chạy help của multix bản npm mới nhất, kiểm tra catalog provider, chọn model hỗ trợ rõ ràng và không suy ra “latest”, “default” hay “recommended” từ skill này.',
  },
  processFlow: [
    { number: 1, titleEn: 'Resolve CLI', titleVi: 'Xác định CLI', descEn: 'Use npx --yes --prefer-online --package=@mrgoonie/multix@latest; do not install or call a global multix binary.', descVi: 'Dùng npx --yes --prefer-online --package=@mrgoonie/multix@latest; không cài hoặc gọi binary multix global.' },
    { number: 2, titleEn: 'Check environment', titleVi: 'Kiểm tra môi trường', descEn: 'Require Node.js 20+, provider keys from env/.env/~/.multix/.env, and multix check --verbose before blaming AgentKit.', descVi: 'Cần Node.js 20+, key provider từ env/.env/~/.multix/.env và chạy multix check --verbose trước khi quy lỗi cho AgentKit.' },
    { number: 3, titleEn: 'Select modality', titleVi: 'Chọn loại media', descEn: 'Choose analyze, transcribe, extract, doc convert, image generation, video generation, MiniMax speech/music, or media optimize based on the artifact.', descVi: 'Chọn analyze, transcribe, extract, doc convert, tạo ảnh, tạo video, MiniMax speech/music hoặc tối ưu media tùy hiện vật.' },
    { number: 4, titleEn: 'Resolve models', titleVi: 'Xác minh model', descEn: 'For generation, inspect current help and provider docs for model IDs, pricing, limits, aspect ratios, resolution, duration, and access.', descVi: 'Với tạo nội dung, xem help và tài liệu provider hiện tại để biết ID model, giá, giới hạn, tỷ lệ khung hình, độ phân giải, thời lượng và quyền truy cập.' },
    { number: 5, titleEn: 'Run command', titleVi: 'Chạy lệnh', descEn: 'Pass files, prompts, format, output path, and explicit provider/model controls; keep outputs reproducible when needed.', descVi: 'Truyền file, prompt, định dạng, đường dẫn output và điều khiển provider/model rõ ràng; giữ khả năng tái lập khi cần.' },
    { number: 6, titleEn: 'Handle limits', titleVi: 'Xử lý giới hạn', descEn: 'When files exceed verified size, duration, or output limits, split media with ffmpeg or a resolved Multix media command and combine segment results.', descVi: 'Khi file vượt giới hạn dung lượng, thời lượng hoặc output đã xác minh, chia media bằng ffmpeg hoặc lệnh Multix phù hợp rồi ghép kết quả các đoạn.' },
    { number: 7, titleEn: 'Report failures', titleVi: 'Báo lỗi đúng nguồn', descEn: 'Treat missing keys, FFmpeg, provider access, billing, quota, model support, and npm/offline issues as environment or provider blockers with redacted errors.', descVi: 'Xem thiếu key, FFmpeg, quyền provider, billing, quota, hỗ trợ model và lỗi npm/offline là blocker môi trường hoặc provider, kèm lỗi đã che dữ liệu nhạy cảm.' },
  ],
  corePrinciplesEn: [
    'The npm-latest Multix CLI owns command syntax; this skill owns orchestration and provider setup.',
    'Do not revive a parallel local backend unless an accepted ADR or explicit maintainer decision changes ownership.',
    'Provider catalogs own model IDs, limits, availability, pricing, and deprecations.',
    'Transcript outputs should be Markdown with metadata, chunk status, and timestamped lines.',
  ],
  corePrinciplesVi: [
    'CLI Multix bản npm mới nhất sở hữu cú pháp lệnh; skill này sở hữu điều phối và setup provider.',
    'Không dựng lại backend local song song trừ khi có ADR được chấp nhận hoặc quyết định rõ của maintainer.',
    'Catalog của provider sở hữu ID model, giới hạn, tình trạng khả dụng, giá và deprecation.',
    'Transcript nên xuất Markdown có metadata, trạng thái chunk và dòng có timestamp.',
  ],
  expertiseAreasEn: ['Gemini vision and OCR', 'Transcription', 'Document conversion', 'Structured extraction', 'Image/video/audio generation', 'Media optimization'],
  expertiseAreasVi: ['Gemini vision và OCR', 'Chuyển âm thanh thành văn bản', 'Chuyển tài liệu', 'Trích xuất có cấu trúc', 'Tạo ảnh/video/âm thanh', 'Tối ưu media'],
  promptExamples: [
    { labelEn: 'Analyze an image', labelVi: 'Phân tích ảnh', command: '/ak:ai-multimodal receipt.png "Extract merchant, date, total, and line items as JSON"', whenEn: 'Use for OCR, visual understanding, or structured extraction from media.', whenVi: 'Dùng cho OCR, hiểu nội dung hình ảnh hoặc trích xuất có cấu trúc từ media.', expectedEn: 'Checks Multix setup, picks the relevant analyze/extract path, and writes the requested output.', expectedVi: 'Kiểm tra setup Multix, chọn đường analyze/extract phù hợp và ghi output được yêu cầu.', recommended: true },
    { labelEn: 'Transcribe video', labelVi: 'Chép lời video', command: '/ak:ai-multimodal interview.mp4 "Generate a transcript with timestamps"', whenEn: 'Use for audio or video transcription with Markdown transcript expectations.', whenVi: 'Dùng cho chép lời âm thanh hoặc video với kỳ vọng transcript Markdown.', expectedEn: 'Uses the Gemini transcribe flow and reports provider or environment blockers truthfully.', expectedVi: 'Dùng luồng Gemini transcribe và báo đúng blocker từ provider hoặc môi trường.' },
    { labelEn: 'Generate media', labelVi: 'Tạo media', command: '/ak:ai-multimodal "Generate a 15-second product demo video"', whenEn: 'Use when generation is needed and model/provider capability must be resolved live.', whenVi: 'Dùng khi cần tạo nội dung và phải xác minh live năng lực model/provider.', expectedEn: 'Inspects current Multix help and provider catalogs before choosing explicit generation controls.', expectedVi: 'Xem help Multix và catalog provider hiện tại trước khi chọn tham số tạo nội dung rõ ràng.' },
  ],
  specialOperations: [
    { id: 'npx-latest', titleEn: 'npm-latest contract', titleVi: 'Hợp đồng npm-latest', descEn: 'Every command resolves @mrgoonie/multix@latest with prefer-online when networking is available.', descVi: 'Mỗi lệnh dùng @mrgoonie/multix@latest với prefer-online khi có mạng.', color: 'blue' },
    { id: 'provider-catalog', titleEn: 'Provider catalog check', titleVi: 'Kiểm tra catalog provider', descEn: 'Generation controls come from live provider docs, not from static memory.', descVi: 'Tham số tạo nội dung lấy từ tài liệu provider hiện hành, không lấy từ trí nhớ tĩnh.', color: 'amber' },
  ],
};

export default data;

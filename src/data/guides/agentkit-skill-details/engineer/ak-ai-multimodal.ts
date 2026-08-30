import type { SkillInfographic, SkillInvocation } from '@/data/guides/how-ck-works';

const invocation: SkillInvocation = {
  syntax: '/ak:ai-multimodal [file-path] [prompt]',
  arguments: [
    {
      token: '[file-path]',
      titleEn: 'Input file path',
      titleVi: 'Đường dẫn file đầu vào',
      descEn:
        'Optional local image, audio, video, or document to analyze, transcribe, extract from, convert, optimize, or use as context. Name every file that may be uploaded; omit when generating from a text-only brief.',
      descVi:
        'Ảnh, audio, video hoặc tài liệu local tùy chọn để phân tích, chép lời, trích xuất, chuyển đổi, tối ưu hoặc dùng làm ngữ cảnh. Nêu rõ mọi file có thể được upload; bỏ qua khi tạo nội dung chỉ từ brief văn bản.',
      exampleCommand:
        '/ak:ai-multimodal ./assets/receipt.png "Extract merchant, date, currency, total, and line items to ./artifacts/receipt.json"',
    },
    {
      token: '[prompt]',
      titleEn: 'Task prompt',
      titleVi: 'Prompt tác vụ',
      descEn:
        'Natural-language analysis, transcription, extraction, conversion, optimization, or generation request with output path, format, allowed upload, redaction, rights, and cleanup boundaries. The Skill does not pick a default provider model for generation without live checks.',
      descVi:
        'Yêu cầu bằng ngôn ngữ tự nhiên về phân tích, chép lời, trích xuất, chuyển đổi, tối ưu hoặc tạo nội dung, kèm đường dẫn output, định dạng, ranh giới upload, che dữ liệu, quyền sử dụng và cleanup. Skill không chọn model provider mặc định để tạo nội dung nếu chưa kiểm tra live.',
      required: true,
      exampleCommand:
        '/ak:ai-multimodal "Generate a 15-second product demo video to ./artifacts/demo.mp4 after resolving a currently available provider model, duration, resolution, aspect ratio, pricing, and retention"',
    },
  ],
};

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
  expertiseAreasEn: ['Gemini vision and OCR', 'Design extraction', 'Transcription', 'Document conversion', 'Structured extraction', 'Image/video/speech/music generation', 'Media optimization'],
  expertiseAreasVi: ['Gemini vision và OCR', 'Trích xuất thiết kế', 'Chuyển âm thanh thành văn bản', 'Chuyển tài liệu', 'Trích xuất có cấu trúc', 'Tạo ảnh/video/speech/music', 'Tối ưu media'],
  promptExamples: [
    { labelEn: 'Extract receipt data', labelVi: 'Trích xuất dữ liệu hóa đơn', command: '/ak:ai-multimodal ./assets/receipt.png "Extract merchant, date, currency, total, and line items to ./artifacts/receipt.json; separate unreadable fields from inferred values"', whenEn: 'Use for OCR, visual understanding, design extraction, or structured extraction from media.', whenVi: 'Dùng cho OCR, hiểu nội dung hình ảnh, trích xuất thiết kế hoặc trích xuất có cấu trúc từ media.', expectedEn: 'Verifies Multix setup, selects the Gemini analyze or extract command family, uploads only the named file, and returns schema-shaped output with uncertainty called out.', expectedVi: 'Xác minh setup Multix, chọn họ lệnh Gemini analyze hoặc extract, chỉ upload file đã nêu và trả output theo schema kèm phần không chắc chắn.', recommended: true },
    { labelEn: 'Transcribe interview video', labelVi: 'Chép lời video phỏng vấn', command: '/ak:ai-multimodal ./media/interview.mp4 "Generate a Markdown transcript with metadata, chunk status, and timestamped lines to ./artifacts/interview-transcript.md"', whenEn: 'Use for audio or video transcription when timestamps and chunk status matter.', whenVi: 'Dùng cho chép lời audio hoặc video khi timestamp và trạng thái chunk là quan trọng.', expectedEn: 'Runs the Gemini transcribe path through the npm-latest CLI, preserves timestamped Markdown evidence, and reports missing keys, FFmpeg, quota, or provider errors as blockers.', expectedVi: 'Chạy đường Gemini transcribe qua CLI npm-latest, giữ bằng chứng Markdown có timestamp và báo thiếu key, FFmpeg, quota hoặc lỗi provider như blocker.' },
    { labelEn: 'Convert a document', labelVi: 'Chuyển đổi tài liệu', command: '/ak:ai-multimodal ./docs/report.pdf "Convert this supported document to Markdown at ./artifacts/report.md and include any conversion warnings"', whenEn: 'Use when the artifact is a document that should become Markdown through Multix doc convert.', whenVi: 'Dùng khi hiện vật là document cần chuyển thành Markdown qua Multix doc convert.', expectedEn: 'Checks the npm-latest Multix document command, writes the requested Markdown file, and includes conversion warnings or unsupported-format limits instead of inventing missing content.', expectedVi: 'Kiểm tra lệnh document của Multix npm-latest, ghi file Markdown được yêu cầu và nêu warning chuyển đổi hoặc giới hạn format không hỗ trợ thay vì bịa nội dung thiếu.' },
    { labelEn: 'Generate provider-backed media', labelVi: 'Tạo media qua provider', command: '/ak:ai-multimodal "Generate a 15-second product demo video to ./artifacts/demo.mp4 after resolving a currently available provider model, duration, resolution, aspect ratio, pricing, and retention"', whenEn: 'Use when image, video, speech, or music generation needs live provider and model capability checks.', whenVi: 'Dùng khi tạo ảnh, video, speech hoặc music cần kiểm tra live năng lực provider và model.', expectedEn: 'Inspects current Multix help and provider catalogs before choosing explicit generation controls, records the selected model, and reviews the generated artifact against the brief.', expectedVi: 'Xem help Multix và catalog provider hiện tại trước khi chọn tham số tạo nội dung rõ ràng, ghi lại model đã chọn và review artifact theo brief.' },
  ],
  invocation,
  specialOperations: [
    { id: 'npx-latest', titleEn: 'npm-latest contract', titleVi: 'Hợp đồng npm-latest', descEn: 'Every command resolves @mrgoonie/multix@latest with prefer-online when networking is available.', descVi: 'Mỗi lệnh dùng @mrgoonie/multix@latest với prefer-online khi có mạng.', color: 'blue' },
    { id: 'provider-catalog', titleEn: 'Provider catalog check', titleVi: 'Kiểm tra catalog provider', descEn: 'Generation controls come from live provider docs, not from static memory.', descVi: 'Tham số tạo nội dung lấy từ tài liệu provider hiện hành, không lấy từ trí nhớ tĩnh.', color: 'amber' },
  ],
};

export default data;

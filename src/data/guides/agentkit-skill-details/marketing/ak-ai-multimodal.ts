import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-ai-multimodal",
  command: "/ak:ai-multimodal",
  kit: 'marketer',
  header: {
    titleEn: "AI Multimodal",
    titleVi: "AI đa phương thức",
    taglineEn: "Analyze, transcribe, OCR, extract, convert, and generate images, audio, video, and documents through the npm-latest Multix CLI with live provider catalogs.",
    taglineVi: "Phân tích, chép lời, OCR, trích xuất, chuyển đổi và tạo ảnh, audio, video, tài liệu qua Multix CLI bản npm-latest cùng catalog provider đang live.",
  },
  hardGate: {
    type: 'critical',
    titleEn: "Resolve real provider models",
    titleVi: "Xác minh model provider thật",
    contentEn: "The skill says never to infer a provider model as latest, default, or recommended. Run help, check current provider docs, select an explicit supported model, and report missing capability upstream.",
    contentVi: "Skill cấm suy đoán model provider là latest, default hoặc recommended. Phải chạy help, kiểm tra docs provider hiện tại, chọn model hỗ trợ rõ ràng và báo gap capability nếu thiếu.",
  },
  processFlow: [
    { number: 1, titleEn: "Check environment", titleVi: "Kiểm tra môi trường", descEn: "Require Node.js 20+, provider keys in env, project .env, or ~/.multix/.env, plus FFmpeg or provider access when the operation needs them.", descVi: "Cần Node.js 20+, key provider trong env, .env của project hoặc ~/.multix/.env, cùng FFmpeg hoặc quyền provider khi thao tác cần." },
    { number: 2, titleEn: "Warm latest CLI", titleVi: "Làm nóng CLI latest", descEn: "Use the documented npx --prefer-online @mrgoonie/multix@latest invocation so commands resolve npm's current release rather than a stale global binary.", descVi: "Dùng lệnh npx --prefer-online @mrgoonie/multix@latest như docs để lấy bản npm hiện tại, không dùng binary global cũ." },
    { number: 3, titleEn: "Verify setup", titleVi: "Xác minh setup", descEn: "Run multix check --verbose and treat missing keys, billing, quota, FFmpeg, or provider access as environment blockers.", descVi: "Chạy multix check --verbose và coi thiếu key, billing, quota, FFmpeg hoặc quyền provider là blocker môi trường." },
    { number: 4, titleEn: "Choose modality", titleVi: "Chọn loại media", descEn: "Select the stable workflow: Gemini analyze, transcribe, extract, doc convert, image generation, video generation, MiniMax speech/music, or media optimization.", descVi: "Chọn workflow phù hợp: Gemini analyze, transcribe, extract, doc convert, tạo ảnh, tạo video, MiniMax speech/music hoặc tối ưu media." },
    { number: 5, titleEn: "Resolve controls", titleVi: "Xác minh tham số", descEn: "Run the relevant command help and provider docs to confirm file limits, formats, duration, aspect ratio, resolution, pricing, retention, and model support.", descVi: "Chạy help của lệnh và đọc docs provider để xác nhận giới hạn file, format, thời lượng, aspect ratio, độ phân giải, giá, retention và model hỗ trợ." },
    { number: 6, titleEn: "Run operation", titleVi: "Chạy thao tác", descEn: "Execute Multix with explicit files or prompts and explicit output paths, using markdown for transcripts and JSON when structured extraction is requested.", descVi: "Chạy Multix với file hoặc prompt rõ ràng và output path rõ ràng; dùng markdown cho transcript và JSON khi cần trích xuất có cấu trúc." },
    { number: 7, titleEn: "Handle limits", titleVi: "Xử lý giới hạn", descEn: "When input or output exceeds verified limits, split media with ffmpeg or resolved Multix media commands, process segments, then combine results.", descVi: "Khi input hoặc output vượt giới hạn đã xác minh, chia media bằng ffmpeg hoặc lệnh Multix media phù hợp, xử lý từng đoạn rồi ghép kết quả." },
    { number: 8, titleEn: "Organize outputs", titleVi: "Sắp xếp đầu ra", descEn: "Invoke project organization when generated assets need to be grouped by project, campaign, report, or deliverable folder.", descVi: "Gọi project organization khi asset sinh ra cần gom theo project, campaign, report hoặc thư mục deliverable." },
  ],
  corePrinciplesEn: [
    "The npm-latest Multix CLI is the runtime contract for covered media operations.",
    "Provider catalogs own model IDs, availability, pricing, limits, and deprecations.",
    "Environment failures are blockers to report, not reasons to recreate a parallel backend.",
    "Resolve limits before execution and split media deliberately when needed.",
  ],
  corePrinciplesVi: [
    "Multix CLI bản npm-latest là hợp đồng runtime cho các thao tác media được cover.",
    "Catalog của provider mới là nguồn đúng cho model ID, khả dụng, giá, giới hạn và deprecation.",
    "Lỗi môi trường là blocker cần báo, không phải lý do dựng backend song song.",
    "Xác minh giới hạn trước khi chạy và chia media có chủ đích khi cần.",
  ],
  expertiseAreasEn: ["Vision analysis", "OCR and extraction", "Transcription", "Document conversion", "Image generation", "Video generation", "Audio and music generation"],
  expertiseAreasVi: ["Phân tích hình ảnh", "OCR và trích xuất", "Chép lời", "Chuyển tài liệu", "Tạo ảnh", "Tạo video", "Tạo audio và nhạc"],
  promptExamples: [
    { labelEn: "Analyze an image", labelVi: "Phân tích ảnh", command: "/ak:ai-multimodal input.png Analyze this content", whenEn: "You need vision analysis, OCR, or design extraction from an image.", whenVi: "Khi cần phân tích hình ảnh, OCR hoặc trích xuất thiết kế từ ảnh.", expectedEn: "A Multix-based analysis path with setup checks, limits, and an explicit output format.", expectedVi: "Một hướng phân tích bằng Multix có kiểm tra setup, giới hạn và định dạng output rõ ràng.", recommended: true },
    { labelEn: "Transcribe media", labelVi: "Chép lời media", command: "/ak:ai-multimodal interview.mp4 Generate a transcript with timestamps", whenEn: "A video or audio file needs timestamped transcript output.", whenVi: "Khi file video hoặc audio cần transcript có timestamp.", expectedEn: "A transcription workflow that resolves limits and produces markdown transcript structure.", expectedVi: "Workflow transcription xác minh giới hạn và tạo cấu trúc transcript markdown." },
  ],
  skillStack: [
    { name: "Multix CLI", type: 'tool' },
    { name: "Gemini", type: 'tool' },
    { name: "OpenRouter", type: 'tool' },
    { name: "MiniMax", type: 'tool' },
  ],
};

export default data;

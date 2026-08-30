import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-elevenlabs',
  command: '/ak:elevenlabs',
  kit: 'marketer',
  header: {
    titleEn: 'ElevenLabs Audio Generation',
    titleVi: 'Tạo âm thanh bằng ElevenLabs',
    taglineEn: 'Guides speech generation, authorized instant voice cloning, and sound-effect creation with ElevenLabs models and scripts; music and voice-agent topics are reference-only.',
    taglineVi: 'Hướng dẫn tạo giọng nói, clone giọng tức thời có uỷ quyền và hiệu ứng âm thanh bằng model/script ElevenLabs; nhạc và voice agent chỉ là tham chiếu.',
  },
  processFlow: [
    { number: 1, titleEn: 'Pick action', titleVi: 'Chọn thao tác', descEn: 'Read speak, clone, or sfx from the request and map it to the right ElevenLabs capability.', descVi: 'Đọc speak, clone hoặc sfx trong yêu cầu và nối với đúng năng lực của ElevenLabs.' },
    { number: 2, titleEn: 'Select model', titleVi: 'Chọn model', descEn: 'Choose Multilingual v2 for quality, Flash v2.5 for real-time latency, Turbo v2.5 for balance, or Eleven v3 for emotional range.', descVi: 'Chọn Multilingual v2 khi cần chất lượng, Flash v2.5 cho thời gian thực, Turbo v2.5 để cân bằng, hoặc Eleven v3 cho cảm xúc mạnh.' },
    { number: 3, titleEn: 'Load guide', titleVi: 'Nạp hướng dẫn', descEn: 'Use the relevant direct-action reference for text-to-speech, instant voice cloning, or sound effects; broader music and agent material is knowledge-only.', descVi: 'Dùng tài liệu tham chiếu đúng cho text-to-speech, clone giọng tức thời hoặc hiệu ứng âm thanh; phần nhạc và agent chỉ để tham khảo.' },
    { number: 4, titleEn: 'Tune voice', titleVi: 'Tinh chỉnh giọng', descEn: 'Set voice, stability, similarity, speed, pronunciation, pauses, and emotional controls for the medium.', descVi: 'Đặt voice, độ ổn định, độ giống, tốc độ, phát âm, khoảng nghỉ và cảm xúc theo kênh sử dụng.' },
    { number: 5, titleEn: 'Generate audio', titleVi: 'Tạo âm thanh', descEn: 'Run the matching SDK or script for TTS, voice management, cloning, or sound-effect generation.', descVi: 'Chạy SDK hoặc script phù hợp cho TTS, quản lý voice, nhân bản giọng hoặc tạo hiệu ứng âm thanh.' },
    { number: 6, titleEn: 'Optimize cost', titleVi: 'Tối ưu chi phí', descEn: 'Cache repeated audio and prefer Flash models when latency or credit usage matters.', descVi: 'Cache âm thanh lặp lại và ưu tiên model Flash khi cần giảm độ trễ hoặc tiết kiệm credit.' },
    { number: 7, titleEn: 'Prepare handoff', titleVi: 'Chuẩn bị bàn giao', descEn: 'Return model choice, voice settings, scripts used, generated assets, and any streaming or phone-integration notes.', descVi: 'Bàn giao model đã chọn, thiết lập voice, script đã dùng, asset tạo ra và ghi chú streaming hoặc tích hợp điện thoại nếu có.' },
  ],
  corePrinciplesEn: [
    'Voice selection matters more than model choice, then settings refine the result.',
    'Latency-sensitive speech drafts can consider Flash v2.5 with streaming, but no live voice-agent route is implied.',
    'Repeated audio should be cached instead of regenerated.',
    'Pronunciation and emotion need deliberate controls, not default output acceptance.',
  ],
  corePrinciplesVi: [
    'Chọn voice quan trọng hơn chọn model; thiết lập chỉ tinh chỉnh kết quả sau đó.',
    'Bản nháp giọng đọc cần độ trễ thấp có thể cân nhắc Flash v2.5 với streaming, nhưng không mặc định có route voice-agent trực tiếp.',
    'Âm thanh lặp lại nên được cache thay vì tạo lại.',
    'Phát âm và cảm xúc cần điều khiển có chủ đích, không nhận mặc định cho xong.',
  ],
  expertiseAreasEn: ['Text-to-speech', 'Authorized instant voice cloning', 'Sound effects', 'Consent and rights review', 'Provider cost boundaries'],
  expertiseAreasVi: ['Chuyển văn bản thành giọng nói', 'Clone giọng tức thời có uỷ quyền', 'Hiệu ứng âm thanh', 'Rà soát đồng ý và quyền sử dụng', 'Ranh giới chi phí provider'],
  promptExamples: [
    { labelEn: 'Generate speech', labelVi: 'Tạo giọng đọc', command: '/ak:elevenlabs speak "Welcome to the product tour"', whenEn: 'You need lifelike spoken audio from text.', whenVi: 'Cần biến văn bản thành giọng đọc tự nhiên.', expectedEn: 'Chooses a TTS model, voice settings, and generation path.', expectedVi: 'Chọn model TTS, thiết lập voice và cách tạo âm thanh.', recommended: true },
    { labelEn: 'Clone voice', labelVi: 'Nhân bản giọng', command: '/ak:elevenlabs clone voice-sample.wav', whenEn: 'Authorized recordings should become an instant clone in the provider account.', whenVi: 'Bản ghi đã được uỷ quyền cần tạo clone tức thời trong tài khoản provider.', expectedEn: 'Applies instant voice-cloning requirements, consent checks, and recording best practices.', expectedVi: 'Áp dụng yêu cầu clone giọng tức thời, kiểm tra đồng ý và cách chuẩn bị bản ghi.' },
    { labelEn: 'Sound effect', labelVi: 'Hiệu ứng âm thanh', command: '/ak:elevenlabs sfx "short success chime for checkout"', whenEn: 'A short generated sound effect is needed.', whenVi: 'Cần hiệu ứng âm thanh ngắn được tạo bằng mô tả.', expectedEn: 'Uses the sound-effects guidance, duration limits, and prompt structure.', expectedVi: 'Dùng hướng dẫn hiệu ứng âm thanh, giới hạn thời lượng và cấu trúc prompt.' },
  ],
  skillStack: [
    { name: 'elevenlabs-text-to-speech-generator.py', type: 'tool' },
    { name: 'elevenlabs-voice-manager.py', type: 'tool' },
    { name: 'elevenlabs-voice-cloner.py', type: 'tool' },
    { name: 'elevenlabs-sound-effects-generator.py', type: 'tool' },
  ],
  specialOperations: [
    { id: 'tts', titleEn: 'Text-to-Speech', titleVi: 'Text-to-Speech', descEn: 'Convert copy into lifelike audio with voice settings, SSML-style pauses, pronunciation, and streaming choices.', descVi: 'Chuyển lời viết thành âm thanh tự nhiên với thiết lập voice, khoảng nghỉ kiểu SSML, phát âm và lựa chọn streaming.', color: 'blue' },
    { id: 'cloning', titleEn: 'Instant voice cloning', titleVi: 'Clone giọng tức thời', descEn: 'Create authorized instant clones from clean samples; professional-cloning training is outside the helper route.', descVi: 'Tạo clone tức thời có uỷ quyền từ mẫu sạch; training clone chuyên nghiệp nằm ngoài route helper.', color: 'violet' },
    { id: 'reference-only', titleEn: 'Reference-only topics', titleVi: 'Chủ đề chỉ tham khảo', descEn: 'Use music, voice design, and conversational-agent material as planning knowledge, not as dedicated invocation routes.', descVi: 'Dùng phần nhạc, thiết kế voice và agent hội thoại như kiến thức lập kế hoạch, không phải route gọi riêng.', color: 'emerald' },
  ],
};

export default data;

import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-elevenlabs',
  command: '/ak:elevenlabs',
  kit: 'marketer',
  header: {
    titleEn: 'ElevenLabs Audio Generation',
    titleVi: 'Tạo âm thanh bằng ElevenLabs',
    taglineEn: 'Guides speech generation, voice cloning, voice design, sound effects, music, and voice-agent builds with ElevenLabs models and scripts.',
    taglineVi: 'Hướng dẫn tạo giọng nói, nhân bản giọng, thiết kế voice, hiệu ứng âm thanh, nhạc và voice agent bằng model và script ElevenLabs.',
  },
  processFlow: [
    { number: 1, titleEn: 'Pick action', titleVi: 'Chọn thao tác', descEn: 'Read speak, clone, or sfx from the request and map it to the right ElevenLabs capability.', descVi: 'Đọc speak, clone hoặc sfx trong yêu cầu và nối với đúng năng lực của ElevenLabs.' },
    { number: 2, titleEn: 'Select model', titleVi: 'Chọn model', descEn: 'Choose Multilingual v2 for quality, Flash v2.5 for real-time latency, Turbo v2.5 for balance, or Eleven v3 for emotional range.', descVi: 'Chọn Multilingual v2 khi cần chất lượng, Flash v2.5 cho thời gian thực, Turbo v2.5 để cân bằng, hoặc Eleven v3 cho cảm xúc mạnh.' },
    { number: 3, titleEn: 'Load guide', titleVi: 'Nạp hướng dẫn', descEn: 'Use the relevant reference for text-to-speech, voice cloning, voice design, sound effects, music, or conversational agents.', descVi: 'Dùng tài liệu tham chiếu đúng phần: text-to-speech, nhân bản giọng, thiết kế voice, hiệu ứng, nhạc hoặc agent hội thoại.' },
    { number: 4, titleEn: 'Tune voice', titleVi: 'Tinh chỉnh giọng', descEn: 'Set voice, stability, similarity, speed, pronunciation, pauses, and emotional controls for the medium.', descVi: 'Đặt voice, độ ổn định, độ giống, tốc độ, phát âm, khoảng nghỉ và cảm xúc theo kênh sử dụng.' },
    { number: 5, titleEn: 'Generate audio', titleVi: 'Tạo âm thanh', descEn: 'Run the matching SDK or script for TTS, voice management, cloning, or sound-effect generation.', descVi: 'Chạy SDK hoặc script phù hợp cho TTS, quản lý voice, nhân bản giọng hoặc tạo hiệu ứng âm thanh.' },
    { number: 6, titleEn: 'Optimize cost', titleVi: 'Tối ưu chi phí', descEn: 'Cache repeated audio and prefer Flash models when latency or credit usage matters.', descVi: 'Cache âm thanh lặp lại và ưu tiên model Flash khi cần giảm độ trễ hoặc tiết kiệm credit.' },
    { number: 7, titleEn: 'Prepare handoff', titleVi: 'Chuẩn bị bàn giao', descEn: 'Return model choice, voice settings, scripts used, generated assets, and any streaming or phone-integration notes.', descVi: 'Bàn giao model đã chọn, thiết lập voice, script đã dùng, asset tạo ra và ghi chú streaming hoặc tích hợp điện thoại nếu có.' },
  ],
  corePrinciplesEn: [
    'Voice selection matters more than model choice, then settings refine the result.',
    'Latency-sensitive agents should use Flash v2.5 with streaming and the global API endpoint.',
    'Repeated audio should be cached instead of regenerated.',
    'Pronunciation and emotion need deliberate controls, not default output acceptance.',
  ],
  corePrinciplesVi: [
    'Chọn voice quan trọng hơn chọn model; thiết lập chỉ tinh chỉnh kết quả sau đó.',
    'Agent cần độ trễ thấp nên dùng Flash v2.5 cùng streaming và global API endpoint.',
    'Âm thanh lặp lại nên được cache thay vì tạo lại.',
    'Phát âm và cảm xúc cần điều khiển có chủ đích, không nhận mặc định cho xong.',
  ],
  expertiseAreasEn: ['Text-to-speech', 'Voice cloning', 'Voice design', 'Sound effects and music', 'Conversational AI agents'],
  expertiseAreasVi: ['Chuyển văn bản thành giọng nói', 'Nhân bản giọng', 'Thiết kế voice', 'Hiệu ứng âm thanh và nhạc', 'Agent hội thoại bằng giọng nói'],
  promptExamples: [
    { labelEn: 'Generate speech', labelVi: 'Tạo giọng đọc', command: '/ak:elevenlabs speak "Welcome to the product tour"', whenEn: 'You need lifelike spoken audio from text.', whenVi: 'Cần biến văn bản thành giọng đọc tự nhiên.', expectedEn: 'Chooses a TTS model, voice settings, and generation path.', expectedVi: 'Chọn model TTS, thiết lập voice và cách tạo âm thanh.', recommended: true },
    { labelEn: 'Clone voice', labelVi: 'Nhân bản giọng', command: '/ak:elevenlabs clone voice-sample.wav', whenEn: 'A recorded sample should become an instant or professional clone plan.', whenVi: 'Có mẫu ghi âm và cần lập kế hoạch nhân bản giọng nhanh hoặc chuyên nghiệp.', expectedEn: 'Applies voice-cloning requirements and recording best practices.', expectedVi: 'Áp dụng yêu cầu nhân bản giọng và cách chuẩn bị bản ghi.' },
    { labelEn: 'Sound effect', labelVi: 'Hiệu ứng âm thanh', command: '/ak:elevenlabs sfx "short success chime for checkout"', whenEn: 'A short generated effect or music cue is needed.', whenVi: 'Cần hiệu ứng ngắn hoặc đoạn nhạc cue được tạo bằng mô tả.', expectedEn: 'Uses the sound-effects guidance, duration limits, and prompt structure.', expectedVi: 'Dùng hướng dẫn hiệu ứng âm thanh, giới hạn thời lượng và cấu trúc prompt.' },
  ],
  skillStack: [
    { name: 'elevenlabs-text-to-speech-generator.py', type: 'tool' },
    { name: 'elevenlabs-voice-manager.py', type: 'tool' },
    { name: 'elevenlabs-voice-cloner.py', type: 'tool' },
    { name: 'elevenlabs-sound-effects-generator.py', type: 'tool' },
  ],
  specialOperations: [
    { id: 'tts', titleEn: 'Text-to-Speech', titleVi: 'Text-to-Speech', descEn: 'Convert copy into lifelike audio with voice settings, SSML-style pauses, pronunciation, and streaming choices.', descVi: 'Chuyển lời viết thành âm thanh tự nhiên với thiết lập voice, khoảng nghỉ kiểu SSML, phát âm và lựa chọn streaming.', color: 'blue' },
    { id: 'cloning', titleEn: 'Voice cloning', titleVi: 'Nhân bản giọng', descEn: 'Plan instant clones from short samples or professional clones from longer, cleaner recordings.', descVi: 'Lập kế hoạch clone nhanh từ mẫu ngắn hoặc clone chuyên nghiệp từ bản ghi dài và sạch hơn.', color: 'violet' },
    { id: 'agents', titleEn: 'Voice agents', titleVi: 'Voice agent', descEn: 'Build conversational agents with SDK setup, WebSocket streaming, and phone integration notes.', descVi: 'Xây agent hội thoại với SDK, WebSocket streaming và ghi chú tích hợp điện thoại.', color: 'emerald' },
  ],
};

export default data;

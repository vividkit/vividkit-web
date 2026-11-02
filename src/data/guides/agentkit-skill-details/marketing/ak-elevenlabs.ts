import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-elevenlabs',
  command: '/ak:elevenlabs',
  kit: 'marketer',
  header: {
    titleEn: '/ak:elevenlabs — ElevenLabs voice production',
    titleVi: '/ak:elevenlabs — Sản xuất giọng đọc ElevenLabs',
    taglineEn: 'Writes performance-ready voice scripts, adds delivery directions without changing the words, directs multi-speaker dialogue, and generates speech, authorized instant voice clones, or sound effects through ElevenLabs; voice-agent and music material is guidance only.',
    taglineVi: 'Viết kịch bản giọng đọc sẵn để thu, thêm chỉ dẫn diễn đạt mà không đổi chữ, dàn dựng hội thoại nhiều người nói, và tạo giọng nói, clone giọng tức thời có uỷ quyền hoặc hiệu ứng âm thanh qua ElevenLabs; phần voice agent và nhạc chỉ để tham khảo.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Voice cloning changes the provider account',
    titleVi: 'Clone giọng làm thay đổi tài khoản provider',
    contentEn: 'clone uploads voice samples and creates a persistent voice in ElevenLabs. Proceed only with documented authority and informed consent for the exact intended uses, and record the returned voice ID and the owner responsible for later retention or deletion.',
    contentVi: 'clone tải mẫu giọng lên và tạo một giọng lưu lâu dài trong ElevenLabs. Chỉ làm khi có uỷ quyền bằng văn bản và sự đồng ý rõ ràng cho đúng mục đích dự định, đồng thời ghi lại voice ID trả về và người chịu trách nhiệm giữ hoặc xoá giọng đó sau này.',
  },
  processFlow: [
    { number: 1, titleEn: 'Pick action', titleVi: 'Chọn thao tác', descEn: 'Read script, enhance, speak, dialogue, clone, or sfx from the request; when no action is given, infer it (an idea becomes script, final copy with "don\'t change the words" becomes enhance, several speakers become dialogue, a ready script plus "make audio" becomes speak).', descVi: 'Đọc script, enhance, speak, dialogue, clone hoặc sfx trong yêu cầu; nếu không nêu thao tác thì tự suy ra (ý tưởng thành script, bản chốt kèm "đừng đổi chữ" thành enhance, nhiều người nói thành dialogue, kịch bản sẵn kèm "làm audio" thành speak).' },
    { number: 2, titleEn: 'Select model', titleVi: 'Chọn model', descEn: 'Choose by use case, then confirm live availability on the account: eleven_v4 for expressive voiceover, audiobooks, and dialogue files; eleven_v4_turbo for expressive realtime dialogue or agents; eleven_multilingual_v2 for very long, stable narration; Flash variants when latency comes first.', descVi: 'Chọn theo mục đích rồi xác nhận model còn dùng được trên tài khoản: eleven_v4 cho voiceover giàu cảm xúc, sách nói và file hội thoại; eleven_v4_turbo cho hội thoại hoặc agent thời gian thực; eleven_multilingual_v2 cho bài đọc rất dài cần ổn định; các bản Flash khi ưu tiên độ trễ thấp.' },
    { number: 3, titleEn: 'Write and direct', titleVi: 'Viết và dàn dựng', descEn: 'For script, enhance, and dialogue, write for the ear and add directions the target model supports; these actions produce text only and need no API key. enhance keeps every spoken word, and visual stage directions stay in production notes.', descVi: 'Với script, enhance và dialogue, viết cho tai nghe và thêm chỉ dẫn mà model đích hiểu được; các thao tác này chỉ tạo văn bản, không cần API key. enhance giữ nguyên mọi chữ được đọc, còn chỉ dẫn về hình ảnh nằm ở ghi chú sản xuất.' },
    { number: 4, titleEn: 'Tune voice', titleVi: 'Tinh chỉnh giọng', descEn: 'Match direction syntax to the model: v4 and v3 use audio tags, punctuation, and text structure, never SSML <break> tags; v2 and Flash may use <break> where supported. Eleven v4 accepts only stability and similarity settings.', descVi: 'Chọn cách chỉ dẫn theo model: v4 và v3 dùng audio tag, dấu câu và cấu trúc câu, không dùng thẻ SSML <break>; v2 và Flash có thể dùng <break> khi được hỗ trợ. Eleven v4 chỉ nhận thiết lập stability và similarity.' },
    { number: 5, titleEn: 'Generate audio', titleVi: 'Tạo âm thanh', descEn: 'Only when audio is wanted, run the matching SDK or script for TTS, voice management, cloning, or sound effects without rewriting the script. Long scripts are split at natural boundaries; multi-speaker files on v4 or v3 go through Text to Dialogue.', descVi: 'Chỉ khi cần audio mới chạy SDK hoặc script phù hợp cho TTS, quản lý voice, clone giọng hoặc hiệu ứng âm thanh, không viết lại kịch bản. Kịch bản dài được cắt ở chỗ ngắt tự nhiên; file nhiều người nói trên v4 hoặc v3 đi qua Text to Dialogue.' },
    { number: 6, titleEn: 'Optimize cost', titleVi: 'Tối ưu chi phí', descEn: 'Cache repeated audio and prefer Flash models when latency or credit usage matters.', descVi: 'Cache âm thanh lặp lại và ưu tiên model Flash khi cần giảm độ trễ hoặc tiết kiệm credit.' },
    { number: 7, titleEn: 'Prepare handoff', titleVi: 'Chuẩn bị bàn giao', descEn: 'Return the performance script and production notes for writing actions; for synthesis, inspect the saved audio (words, language, duration, format, seams, artifacts) and report model, voice settings, and output path, or a clear failure instead of a claimed file.', descVi: 'Với thao tác viết, trả về kịch bản sẵn để thu và ghi chú sản xuất; với tạo audio, nghe lại file đã lưu (chữ, ngôn ngữ, thời lượng, định dạng, chỗ nối, lỗi tiếng) rồi báo model, thiết lập voice và đường dẫn file, hoặc báo lỗi rõ ràng thay vì nói là đã có file.' },
  ],
  corePrinciplesEn: [
    'Voice selection matters more than model choice, then settings refine the result.',
    'Latency-sensitive speech can consider Flash variants, but no live voice-agent route is implied.',
    'Repeated audio should be cached instead of regenerated.',
    'Pronunciation and emotion need deliberate controls, not default output acceptance.',
  ],
  corePrinciplesVi: [
    'Chọn voice quan trọng hơn chọn model; thiết lập chỉ tinh chỉnh kết quả sau đó.',
    'Giọng đọc cần độ trễ thấp có thể cân nhắc các bản Flash, nhưng không mặc định có route voice-agent trực tiếp.',
    'Âm thanh lặp lại nên được cache thay vì tạo lại.',
    'Phát âm và cảm xúc cần điều khiển có chủ đích, không nhận mặc định cho xong.',
  ],
  expertiseAreasEn: ['Text-to-speech', 'Authorized instant voice cloning', 'Sound effects', 'Consent and rights review', 'Provider cost boundaries'],
  expertiseAreasVi: ['Chuyển văn bản thành giọng nói', 'Clone giọng tức thời có uỷ quyền', 'Hiệu ứng âm thanh', 'Rà soát đồng ý và quyền sử dụng', 'Ranh giới chi phí provider'],
  invocation: {
    syntax: '/ak:elevenlabs [action: script|enhance|speak|dialogue|clone|sfx] [text-or-file]',
    arguments: [
      { token: '[action]', titleEn: 'What to produce', titleVi: 'Cần tạo gì', descEn: 'script turns an idea or rough copy into a performance script; enhance adds delivery directions to final copy without changing words; dialogue writes a multi-speaker script, optionally synthesized; speak turns a finished script into audio; clone creates a voice from consented recordings; sfx creates a sound effect. Omit it and the Skill infers the action from the request.', descVi: 'script biến ý tưởng hoặc bản nháp thành kịch bản sẵn để thu; enhance thêm chỉ dẫn diễn đạt vào bản chốt mà không đổi chữ; dialogue viết kịch bản nhiều người nói, có thể tạo audio; speak biến kịch bản đã chốt thành audio; clone tạo giọng từ bản ghi đã được đồng ý; sfx tạo hiệu ứng âm thanh. Bỏ trống thì Skill tự suy ra thao tác từ yêu cầu.', exampleCommand: '/ak:elevenlabs script "30-second intro for our privacy feature"',
          exampleCommandVi: '/ak:elevenlabs script "Đoạn giới thiệu 30 giây cho tính năng quyền riêng tư"' },
      { token: '[text-or-file]', titleEn: 'Source text or file', titleVi: 'Văn bản hoặc file nguồn', descEn: 'The idea, copy, script, local text file, sample recordings, or sound description the action works on.', descVi: 'Ý tưởng, nội dung, kịch bản, file văn bản cục bộ, bản ghi mẫu hoặc mô tả âm thanh mà thao tác sẽ dùng.', exampleCommand: '/ak:elevenlabs speak script.txt',
          exampleCommandVi: '/ak:elevenlabs speak script.txt' },
    ],
  },
  promptExamples: [
    { labelEn: 'Generate speech', labelVi: 'Tạo giọng đọc', command: '/ak:elevenlabs speak "Welcome to the product tour"',
      commandVi: '/ak:elevenlabs speak "Chào mừng đến với tour sản phẩm"', whenEn: 'You need lifelike spoken audio from text.', whenVi: 'Cần biến văn bản thành giọng đọc tự nhiên.', expectedEn: 'Choosing a TTS model, voice settings, and generation path happens first so speech generation follows a defined path.', expectedVi: 'Việc chọn model TTS, thiết lập voice và cách tạo âm thanh được xác định trước bước tạo giọng nói.', recommended: true },
    { labelEn: 'Write a voice script', labelVi: 'Viết kịch bản giọng đọc', command: '/ak:elevenlabs script "A 30-second warm, confident intro for our privacy feature" Target eleven_v4; do not synthesize',
      commandVi: '/ak:elevenlabs script "Đoạn giới thiệu 30 giây, ấm áp và tự tin cho tính năng quyền riêng tư" Dùng eleven_v4; không tạo audio', whenEn: 'You have an idea or rough copy and need a script written for the ear before any audio is made.', whenVi: 'Bạn có ý tưởng hoặc bản nháp và cần kịch bản viết cho tai nghe trước khi tạo audio.', expectedEn: 'Returns a performance script with model-aware audio tags and performance punctuation, plus production notes on voice, risky tags, and pronunciation; nothing is sent to ElevenLabs.', expectedVi: 'Trả về kịch bản sẵn để thu với audio tag hợp model và dấu câu diễn đạt, kèm ghi chú sản xuất về voice, tag rủi ro và phát âm; không gửi gì tới ElevenLabs.' },
    { labelEn: 'Direct final copy', labelVi: 'Thêm chỉ dẫn cho bản chốt', command: '/ak:elevenlabs enhance launch-voiceover.txt — keep every word, add delivery directions for eleven_v4',
      commandVi: '/ak:elevenlabs enhance launch-voiceover.txt — giữ nguyên từng chữ, thêm chỉ dẫn diễn đạt cho eleven_v4', whenEn: 'Your copy is approved and only the delivery should change.', whenVi: 'Nội dung đã duyệt và chỉ cần đổi cách đọc.', expectedEn: 'Returns the same words with delivery directions added; stripping the tags gives back your text apart from punctuation and capitalization.', expectedVi: 'Trả về đúng các chữ cũ kèm chỉ dẫn diễn đạt; bỏ tag đi thì văn bản khớp bản gốc, chỉ khác dấu câu và chữ hoa.' },
    { labelEn: 'Multi-speaker dialogue', labelVi: 'Hội thoại nhiều người nói', command: '/ak:elevenlabs dialogue "Host and guest discuss onboarding tips, 60 seconds, friendly"',
      commandVi: '/ak:elevenlabs dialogue "Người dẫn và khách mời bàn mẹo onboarding, 60 giây, thân thiện"', whenEn: 'A scene needs several speakers with direction for each turn.', whenVi: 'Một cảnh cần nhiều người nói với chỉ dẫn cho từng lượt.', expectedEn: 'Returns a multi-speaker script with per-turn direction; audio is generated through Text to Dialogue on v4 or v3 only if you ask for it.', expectedVi: 'Trả về kịch bản nhiều người nói có chỉ dẫn từng lượt; chỉ tạo audio qua Text to Dialogue trên v4 hoặc v3 khi bạn yêu cầu.' },
    { labelEn: 'Clone voice', labelVi: 'Nhân bản giọng', command: '/ak:elevenlabs clone voice-sample.wav',
      commandVi: '/ak:elevenlabs clone voice-sample.wav', whenEn: 'Authorized recordings should become an instant clone in the provider account.', whenVi: 'Bản ghi đã được uỷ quyền cần tạo clone tức thời trong tài khoản provider.', expectedEn: 'Instant voice-cloning requirements, consent checks, and recording best practices are applied before any cloned voice proceeds.', expectedVi: 'Áp dụng yêu cầu clone giọng tức thời, kiểm tra đồng ý và cách chuẩn bị bản ghi.' },
    { labelEn: 'Sound effect', labelVi: 'Hiệu ứng âm thanh', command: '/ak:elevenlabs sfx "short success chime for checkout"',
      commandVi: '/ak:elevenlabs sfx "tiếng chuông thành công ngắn cho checkout"', whenEn: 'A short generated sound effect is needed.', whenVi: 'Cần hiệu ứng âm thanh ngắn được tạo bằng mô tả.', expectedEn: 'The sound-effects guidance, duration limits, and prompt structure are used when a sound effect is generated.', expectedVi: 'Dùng hướng dẫn hiệu ứng âm thanh, giới hạn thời lượng và cấu trúc prompt.' },
  ],
  skillStack: [
    { name: 'elevenlabs-text-to-speech-generator.py', type: 'tool' },
    { name: 'elevenlabs-voice-manager.py', type: 'tool' },
    { name: 'elevenlabs-voice-cloner.py', type: 'tool' },
    { name: 'elevenlabs-sound-effects-generator.py', type: 'tool' },
  ],
  specialOperations: [
    { id: 'tts', titleEn: 'Text-to-Speech', titleVi: 'Text-to-Speech', descEn: 'Convert a finished script into lifelike audio with model-aware directions (audio tags on v4/v3, <break> only on v2/Flash), voice settings the model supports, and pronunciation checks.', descVi: 'Chuyển kịch bản đã chốt thành âm thanh tự nhiên với chỉ dẫn theo model (audio tag trên v4/v3, <break> chỉ trên v2/Flash), thiết lập voice mà model hỗ trợ và kiểm tra phát âm.', color: 'blue' },
    { id: 'writing', titleEn: 'Script, enhance, dialogue', titleVi: 'Script, enhance, dialogue', descEn: 'Writing actions return a performance script plus optional production notes and send nothing to ElevenLabs; synthesis happens only when you ask for audio.', descVi: 'Các thao tác viết trả về kịch bản sẵn để thu cùng ghi chú sản xuất khi cần, không gửi gì tới ElevenLabs; chỉ tạo audio khi bạn yêu cầu.', color: 'amber' },
    { id: 'cloning', titleEn: 'Instant voice cloning', titleVi: 'Clone giọng tức thời', descEn: 'Create authorized instant clones from clean samples; professional-cloning training is outside the helper route.', descVi: 'Tạo clone tức thời có uỷ quyền từ mẫu sạch; training clone chuyên nghiệp nằm ngoài route helper.', color: 'violet' },
    { id: 'reference-only', titleEn: 'Reference-only topics', titleVi: 'Chủ đề chỉ tham khảo', descEn: 'Use music, voice design, and conversational-agent material as planning knowledge; no action creates or deploys a live voice agent.', descVi: 'Dùng phần nhạc, thiết kế voice và agent hội thoại như kiến thức lập kế hoạch; không thao tác nào tạo hay triển khai voice agent chạy thật.', color: 'emerald' },
  ],
};

export default data;

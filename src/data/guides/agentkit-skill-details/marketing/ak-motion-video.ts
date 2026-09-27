import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-motion-video',
  command: '/ak:motion-video',
  kit: 'marketer',
  header: {
    titleEn: '/ak:motion-video — Beat-synced motion video',
    titleVi: '/ak:motion-video — Video motion khớp beat',
    taglineEn:
      'Produce a 1920×1080, 30 fps HyperFrames motion-graphic video with AI voice-over, Vietnamese karaoke captions, SFX, and music cut to the beat, in one of about 60 named style profiles or a per-scene mix. It produces the file and never publishes it.',
    taglineVi:
      'Làm video motion graphic HyperFrames 1920×1080, 30 fps có voice-over AI, phụ đề karaoke tiếng Việt, SFX và nhạc cắt đúng beat, theo một trong khoảng 60 style profile có tên hoặc trộn theo từng cảnh. Skill chỉ xuất file, không bao giờ tự đăng.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'A video brief does not authorize provider spend',
    titleVi: 'Brief video không đồng nghĩa được phép tốn tiền provider',
    contentEn:
      'Voice, SFX, music, and alignment requests go through multix to Gemini and ElevenLabs, and regenerating scenes or music creates more requests. Approve each generation stage under your provider, quota, and billing policy. Credentials stay in multix config and are never printed or copied into project files, plans, or reports.',
    contentVi:
      'Yêu cầu voice, SFX, nhạc và alignment đi qua multix tới Gemini và ElevenLabs, và mỗi lần tạo lại cảnh hay nhạc lại phát sinh thêm request. Duyệt từng bước tạo theo chính sách provider, quota và chi phí của bạn. Credential nằm trong config của multix, không bao giờ in ra hay copy vào file project, plan hoặc report.',
  },
  processFlow: [
    { number: 1, titleEn: 'Pin the outcome', titleVi: 'Chốt kết quả', descEn: 'Record topic and sources, base style and any layers, duration, voice language (English voice-over with Vietnamese captions by default), ending, and signature. Ask only when the style or facts source is unknown.', descVi: 'Ghi lại chủ đề và nguồn, style gốc cùng các lớp trộn, thời lượng, ngôn ngữ giọng (mặc định voice-over tiếng Anh, phụ đề tiếng Việt), đoạn kết và chữ ký. Chỉ hỏi khi chưa rõ style hoặc nguồn dữ kiện.' },
    { number: 2, titleEn: 'Scaffold the project', titleVi: 'Dựng project', descEn: 'Create assets/videos/<slug>/ and a plan, then copy the template scripts, example data, hyperframes.json, and the composition skeleton. A finished edition is never overwritten; a restyle is a new directory.', descVi: 'Tạo assets/videos/<slug>/ và một plan, rồi copy script mẫu, dữ liệu ví dụ, hyperframes.json và khung composition. Không bao giờ ghi đè bản đã xong; bản đổi style là thư mục mới.' },
    { number: 3, titleEn: 'Generate and align audio', titleVi: 'Tạo và căn audio', descEn: 'Write facts and script from primary sources, then use multix for Gemini TTS voice, ElevenLabs SFX and music, and ElevenLabs forced alignment of spoken words.', descVi: 'Viết dữ kiện và kịch bản từ nguồn gốc, rồi dùng multix để tạo giọng Gemini TTS, SFX và nhạc ElevenLabs, và căn thời gian từng từ bằng forced alignment của ElevenLabs.' },
    { number: 4, titleEn: 'Fit beat and arrange music', titleVi: 'Khớp beat và xếp nhạc', descEn: 'fit-beat-grid.py reports BPM and a per-bar table; bars are spliced so drops land where the script needs them, and verify-arrangement.py checks every splice.', descVi: 'fit-beat-grid.py báo BPM và bảng theo từng ô nhịp; các ô nhịp được ghép để đoạn drop rơi đúng chỗ kịch bản cần, và verify-arrangement.py kiểm từng mối ghép.' },
    { number: 5, titleEn: 'Build timeline and composition', titleVi: 'Dựng timeline và composition', descEn: 'build-timeline renders the ducked, loudness-normalized mix; index.html follows the composition contract and resolved style, then passes hyperframes lint, check, and scene snapshot review.', descVi: 'build-timeline xuất bản mix đã duck và chuẩn hoá loudness; index.html theo composition contract và style đã resolve, rồi phải qua hyperframes lint, check và review snapshot từng cảnh.' },
    { number: 6, titleEn: 'Render, remux, encode', titleVi: 'Render, remux, encode', descEn: 'HyperFrames renders the video, the measured mix is remuxed back in, and an optional social encode produces a smaller file. Posting stays with you.', descVi: 'HyperFrames render video, bản mix đã đo được remux lại vào, và có thể encode thêm bản nhẹ cho social. Việc đăng bài do bạn tự làm.' },
  ],
  corePrinciplesEn: [
    'Scene cuts land on music beats and reveals land on spoken words; the mix is measured, not guessed.',
    'Every look is a style profile; brand names are aliases for a motion language and never bring logos, fonts, or assets.',
    'On-screen facts must trace to the primary sources collected at the start.',
    'Done means measured numbers pass, not that the render looks right.',
  ],
  corePrinciplesVi: [
    'Điểm cắt cảnh rơi đúng beat nhạc và phần hiện chữ rơi đúng lời nói; bản mix được đo, không đoán.',
    'Mỗi phong cách là một style profile; tên thương hiệu chỉ là alias cho ngôn ngữ chuyển động, không mang theo logo, font hay asset.',
    'Dữ kiện trên màn hình phải truy được về nguồn gốc đã thu thập từ đầu.',
    'Xong nghĩa là các con số đo được đều đạt, không phải bản render trông ổn.',
  ],
  invocation: {
    syntax: '/ak:motion-video [video brief]',
    arguments: [
      {
        token: '[video brief]',
        titleEn: 'Video brief',
        titleVi: 'Brief video',
        descEn: 'Natural-language request: topic and facts source, style or style mix, duration, voice language, and where to stop. It is not a fixed parser command.',
        descVi: 'Yêu cầu bằng ngôn ngữ tự nhiên: chủ đề và nguồn dữ kiện, style hoặc cách trộn style, thời lượng, ngôn ngữ giọng và điểm dừng. Đây không phải lệnh parser cố định.',
        required: false,
        exampleCommand: '/ak:motion-video "Make a 60-second release video for our v3.4 notes in the glass-keynote style, using only facts from CHANGELOG.md"',
      },
    ],
  },
  promptExamples: [
    {
      labelEn: 'Release video, one style',
      labelVi: 'Video release, một style',
      command: '/ak:motion-video "Make a 60-second release video for our v3.4 notes in the glass-keynote style. Use only facts from CHANGELOG.md, English voice-over with Vietnamese captions, and stop after the master render; do not publish"',
      commandVi: '/ak:motion-video "Làm video release 60 giây cho bản v3.4 theo style glass-keynote. Chỉ dùng dữ kiện từ CHANGELOG.md, voice-over tiếng Anh kèm phụ đề tiếng Việt, và dừng sau bản render master; không đăng"',
      whenEn: 'Use for a launch or changelog video with one named look and a clear facts source.',
      whenVi: 'Dùng cho video ra mắt hoặc changelog với một phong cách có tên và nguồn dữ kiện rõ ràng.',
      expectedEn: 'Creates a new project under assets/videos/, generates and aligns audio through multix, renders the master MP4, and reports lint, check, splice, mix, loudness, and ffprobe numbers.',
      expectedVi: 'Tạo project mới trong assets/videos/, tạo và căn audio qua multix, render MP4 master, rồi báo số liệu lint, check, mối ghép nhạc, mix, loudness và ffprobe.',
      recommended: true,
    },
    {
      labelEn: 'Mixed style per scene',
      labelVi: 'Trộn style theo cảnh',
      command: '/ak:motion-video "Apple-like base with Linear-like UI demos, blueprint diagrams, and a Nike-like finale for our feature launch"',
      commandVi: '/ak:motion-video "Nền kiểu Apple, phần demo UI kiểu Linear, sơ đồ blueprint và đoạn kết kiểu Nike cho video ra mắt tính năng"',
      whenEn: 'Use when different parts of the video need different looks on one base style.',
      whenVi: 'Dùng khi các phần của video cần phong cách khác nhau trên cùng một style gốc.',
      expectedEn: 'Resolves the mix with resolve-style.py into a per-scene table in the plan, takes each dimension from the named style, and keeps the same contract, timing, mix, and render checks.',
      expectedVi: 'Resolve cách trộn bằng resolve-style.py thành bảng theo từng cảnh trong plan, lấy mỗi yếu tố từ style được chỉ định, và giữ nguyên contract, timing, mix cùng các check render.',
    },
    {
      labelEn: 'Rework the music only',
      labelVi: 'Chỉ làm lại nhạc',
      command: '/ak:motion-video "Re-time the drops in assets/videos/v3-4-launch to the new music and render a social encode"',
      commandVi: '/ak:motion-video "Căn lại các drop trong assets/videos/v3-4-launch theo nhạc mới và render bản encode cho social"',
      whenEn: 'Use for a partial rework such as new music, re-timed drops, a re-mix, a re-render, or a social encode.',
      whenVi: 'Dùng khi làm lại một phần như đổi nhạc, căn lại drop, mix lại, render lại hoặc encode cho social.',
      expectedEn: 'Re-fits the beat grid and arrangement, reruns the timeline and remux, verifies every splice within ±2 ms, and writes a smaller social MP4 without regenerating the voice-over.',
      expectedVi: 'Khớp lại lưới beat và cách xếp nhạc, chạy lại timeline và remux, kiểm mọi mối ghép trong ±2 ms, rồi xuất bản MP4 nhẹ cho social mà không tạo lại voice-over.',
    },
  ],
  reportOutput: {
    titleEn: 'Motion video evidence',
    titleVi: 'Bằng chứng video motion',
    patternEn: 'Project path, style table, lint and check results, splice drift, music-under-speech dB, ffprobe streams, LUFS and peak, blackdetect result, render paths.',
    patternVi: 'Path project, bảng style, kết quả lint và check, độ lệch mối ghép, dB nhạc dưới giọng, stream từ ffprobe, LUFS và peak, kết quả blackdetect, path các bản render.',
    descEn: 'Done only when lint and check pass, every splice is within ±2 ms, music sits about 4–6 dB under speech, ffprobe shows 1920×1080 30 fps AAC 48 kHz stereo, and loudness is about −14 LUFS with peak at or below −1 dBFS.',
    descVi: 'Chỉ xong khi lint và check pass, mọi mối ghép trong ±2 ms, nhạc thấp hơn giọng khoảng 4–6 dB, ffprobe báo 1920×1080 30 fps AAC 48 kHz stereo, và loudness khoảng −14 LUFS với peak không quá −1 dBFS.',
  },
};

export default data;

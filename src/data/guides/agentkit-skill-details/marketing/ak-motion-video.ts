import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-motion-video',
  command: '/ak:motion-video',
  kit: 'marketer',
  header: {
    titleEn: '/ak:motion-video — Beat-synced motion video',
    titleVi: '/ak:motion-video — Video motion khớp beat',
    taglineEn:
      'Produce a 1920×1080, 30 fps HyperFrames motion-graphic video with AI voice-over, Vietnamese karaoke captions, SFX, and music cut to the beat, in one of about 70 named style profiles or a per-scene mix, with production-grade motion and fast 1:1 / 9:16 editions. It produces the files and never publishes them.',
    taglineVi:
      'Làm video motion graphic HyperFrames 1920×1080, 30 fps có voice-over AI, phụ đề karaoke tiếng Việt, SFX và nhạc cắt đúng beat, theo một trong khoảng 70 style profile có tên hoặc trộn theo từng cảnh, với chuyển động chất lượng production và bản 1:1 / 9:16 làm nhanh. Skill chỉ xuất file, không bao giờ tự đăng.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'A video brief does not authorize provider spend',
    titleVi: 'Brief video không đồng nghĩa được phép tốn tiền provider',
    contentEn:
      'Voice, SFX, music, and alignment requests go through multix to Gemini and ElevenLabs, and regenerating scenes or music creates more requests. Generated still art is an extra, optional image-generation request on top of the audio, and a style bake-off may use one generated backdrop per candidate style. Approve each generation stage under your provider, quota, and billing policy. Credentials stay in multix config and are never printed or copied into project files, plans, or reports.',
    contentVi:
      'Yêu cầu voice, SFX, nhạc và alignment đi qua multix tới Gemini và ElevenLabs, và mỗi lần tạo lại cảnh hay nhạc lại phát sinh thêm request. Ảnh tĩnh do AI tạo là request tạo ảnh bổ sung, không bắt buộc, ngoài phần audio, và một vòng so style (bake-off) có thể tạo một ảnh nền cho mỗi style ứng viên. Duyệt từng bước tạo theo chính sách provider, quota và chi phí của bạn. Credential nằm trong config của multix, không bao giờ in ra hay copy vào file project, plan hoặc report.',
  },
  processFlow: [
    { number: 1, titleEn: 'Pin the outcome', titleVi: 'Chốt kết quả', descEn: 'Run the scripts/doctor.py preflight first (shell, Python modules, ffmpeg, Node, pinned HyperFrames, UTF-8 output). Then record topic and sources, base style and any layers, duration, voice language (English voice-over with Vietnamese captions by default), ending, and a signature only if you give its text. Ask only when the style or facts source is unknown; if only the style is open, run a style bake-off instead. By default the main session owns the brief and runs the work as waves of parallel sub-sessions, with the direction brief ready before the voice-over is generated; --poor runs everything in one session.', descVi: 'Chạy preflight scripts/doctor.py trước (shell, module Python, ffmpeg, Node, HyperFrames đã ghim phiên bản, xuất UTF-8). Sau đó ghi lại chủ đề và nguồn, style gốc cùng các lớp trộn, thời lượng, ngôn ngữ giọng (mặc định voice-over tiếng Anh, phụ đề tiếng Việt), đoạn kết, và chữ ký chỉ khi bạn đưa nội dung. Chỉ hỏi khi chưa rõ style hoặc nguồn dữ kiện; nếu chỉ còn thiếu style thì chạy vòng so style (bake-off) thay vì hỏi. Mặc định session chính giữ brief và chia việc thành các đợt sub-session chạy song song, có brief định hướng trước khi tạo voice-over; --poor chạy toàn bộ trong một session.' },
    { number: 2, titleEn: 'Scaffold the project', titleVi: 'Dựng project', descEn: 'Create assets/videos/<slug>/ and a plan, then copy the template scripts, example data, hyperframes.json, and the composition skeleton. A finished edition is never overwritten; a restyle is a new directory.', descVi: 'Tạo assets/videos/<slug>/ và một plan, rồi copy script mẫu, dữ liệu ví dụ, hyperframes.json và khung composition. Không bao giờ ghi đè bản đã xong; bản đổi style là thư mục mới.' },
    { number: 3, titleEn: 'Generate and align audio', titleVi: 'Tạo và căn audio', descEn: 'Write facts and script from primary sources, pick the story arc, hook, ending, and one shot per scene, and show you the beat map once before any paid audio (skipped when you supplied the final script or the run is non-interactive). Then use multix for Gemini TTS voice, ElevenLabs SFX and music, and ElevenLabs forced alignment of spoken words.', descVi: 'Viết dữ kiện và kịch bản từ nguồn gốc, chọn mạch truyện, câu mở (hook), đoạn kết và một kiểu shot cho mỗi cảnh, rồi cho bạn xem beat map một lần trước khi tạo audio tốn phí (bỏ qua khi bạn đã đưa kịch bản cuối hoặc chạy không tương tác). Sau đó dùng multix để tạo giọng Gemini TTS, SFX và nhạc ElevenLabs, và căn thời gian từng từ bằng forced alignment của ElevenLabs.' },
    { number: 4, titleEn: 'Fit beat and arrange music', titleVi: 'Khớp beat và xếp nhạc', descEn: 'fit-beat-grid.py reports BPM and a per-bar table; bars are spliced so drops land where the script needs them, and verify-arrangement.py checks every splice.', descVi: 'fit-beat-grid.py báo BPM và bảng theo từng ô nhịp; các ô nhịp được ghép để đoạn drop rơi đúng chỗ kịch bản cần, và verify-arrangement.py kiểm từng mối ghép.' },
    { number: 5, titleEn: 'Build timeline and composition', titleVi: 'Dựng timeline và composition', descEn: 'build-timeline renders the ducked, loudness-normalized mix; index.html follows the composition contract and resolved style, then passes hyperframes lint, check, scene snapshot review, and the director\'s pass on every scene (focal point, depth, overlapping choreography, follow-through, transitions).', descVi: 'build-timeline xuất bản mix đã duck và chuẩn hoá loudness; index.html theo composition contract và style đã resolve, rồi phải qua hyperframes lint, check, review snapshot từng cảnh và director\'s pass cho mọi cảnh (điểm nhấn, chiều sâu, chuyển động chồng lớp, follow-through, chuyển cảnh).' },
    { number: 6, titleEn: 'Render, remux, encode', titleVi: 'Render, remux, encode', descEn: 'HyperFrames renders the video, the measured mix is remuxed back in, and an optional social encode produces a smaller file. Square or vertical editions come from scripts/reframe.py with data-ratio overrides, reusing the master\'s audio and timing; 9:16 shorts are scene-range clips made only after you approve the master, and ratio overrides are checked with audit-ratio-scope.py and check-bounds.mjs. Posting stays with you.', descVi: 'HyperFrames render video, bản mix đã đo được remux lại vào, và có thể encode thêm bản nhẹ cho social. Bản vuông hoặc dọc được tạo bằng scripts/reframe.py với override data-ratio, dùng lại audio và timing của bản master; short 9:16 là clip cắt theo dải cảnh, chỉ làm sau khi bạn duyệt bản master, và override theo tỉ lệ được kiểm bằng audit-ratio-scope.py và check-bounds.mjs. Việc đăng bài do bạn tự làm.' },
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
    syntax: '/ak:motion-video [brief or project] [--poor]',
    arguments: [
      {
        token: '[brief or project]',
        titleEn: 'Brief or project',
        titleVi: 'Brief hoặc project',
        descEn: 'Natural-language brief (topic and facts source, style or style mix, duration, voice language, where to stop) or an existing project to restyle, rework, or reframe. It is not a fixed parser command.',
        descVi: 'Brief bằng ngôn ngữ tự nhiên (chủ đề và nguồn dữ kiện, style hoặc cách trộn style, thời lượng, ngôn ngữ giọng, điểm dừng) hoặc một project có sẵn cần đổi style, làm lại hay đổi tỉ lệ. Đây không phải lệnh parser cố định.',
        required: false,
        exampleCommand: '/ak:motion-video "Make a 60-second release video for our v3.4 notes in the glass-keynote style, using only facts from CHANGELOG.md"',
      },
    ],
    options: [
      {
        token: '--poor',
        titleEn: 'Lean single session',
        titleVi: 'Một session tiết kiệm',
        descEn: 'One session with no sub-sessions or subagents, with lean reads, a compact brief, and one review round for the lowest token spend. It never skips a check.',
        descVi: 'Một session, không dùng sub-session hay subagent, đọc gọn, brief ngắn và một vòng review để tốn ít token nhất. Không bao giờ bỏ qua check nào.',
        exampleCommand: '/ak:motion-video "45-second changelog video in the glass-keynote style from CHANGELOG.md" --poor',
      },
      {
        token: '--from-recording',
        titleEn: 'Your own recording as the voice',
        titleVi: 'Dùng bản ghi của bạn làm giọng',
        descEn: 'Uses your talking-head or screen-share recording instead of a generated voice-over: motion graphics carry the screen and your webcam appears as a small picture-in-picture. Transcript, cut list, timeline, mix, finish, and shorts run from scripts bundled with the skill. Transcription sends the audio to ElevenLabs through multix, so it needs the same spend approval. Combines with the default mode or --poor.',
        descVi: 'Dùng bản ghi quay mặt hoặc quay màn hình của bạn thay cho voice-over tạo bằng AI: motion graphic chiếm khung hình chính, webcam của bạn hiện thành khung nhỏ picture-in-picture. Transcript, danh sách cắt, timeline, mix, hoàn thiện và short đều chạy bằng script có sẵn trong skill. Bước transcript gửi audio tới ElevenLabs qua multix nên cũng cần duyệt chi phí như tạo giọng. Kết hợp được với mode mặc định hoặc --poor.',
        exampleCommand: '/ak:motion-video "Turn the screen-share takes in raw/ into a 3-minute explainer with Vietnamese captions" --from-recording',
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
    {
      labelEn: 'Square and vertical editions',
      labelVi: 'Bản vuông và dọc',
      command: '/ak:motion-video "Make 9:16 and 1:1 editions of assets/videos/v3-4-launch for Reels and the feed"',
      commandVi: '/ak:motion-video "Làm bản 9:16 và 1:1 của assets/videos/v3-4-launch cho Reels và feed"',
      whenEn: 'Use when a finished master needs a vertical or square version without regenerating audio.',
      whenVi: 'Dùng khi bản master đã xong cần thêm bản dọc hoặc vuông mà không tạo lại audio.',
      expectedEn: 'Adds data-ratio overrides in the master, runs scripts/reframe.py for each ratio, and renders each edition after it passes the same lint, check, ffprobe frame size, loudness, and blackdetect checks.',
      expectedVi: 'Thêm override data-ratio trong bản master, chạy scripts/reframe.py cho từng tỉ lệ, và chỉ render mỗi bản sau khi qua đủ các check lint, check, kích thước khung ffprobe, loudness và blackdetect.',
    },
    {
      labelEn: 'Lean run',
      labelVi: 'Chạy tiết kiệm',
      command: '/ak:motion-video "45-second changelog video in the glass-keynote style from CHANGELOG.md" --poor',
      commandVi: '/ak:motion-video "Video changelog 45 giây theo style glass-keynote từ CHANGELOG.md" --poor',
      whenEn: 'Use when token spend matters more than splitting the work across parallel sub-sessions.',
      whenVi: 'Dùng khi chi phí token quan trọng hơn việc chia việc cho nhiều sub-session chạy song song.',
      expectedEn: 'Runs the whole pipeline in one session with a compact brief and one review round, and still reports every lint, check, splice, mix, and ffprobe number.',
      expectedVi: 'Chạy toàn bộ pipeline trong một session với brief ngắn và một vòng review, và vẫn báo đủ số liệu lint, check, mối ghép, mix và ffprobe.',
    },
    {
      labelEn: 'From your own recording',
      labelVi: 'Từ bản ghi của bạn',
      command: '/ak:motion-video "Turn the screen-share takes in raw/ into a 3-minute explainer with Vietnamese captions" --from-recording',
      commandVi: '/ak:motion-video "Biến các bản quay màn hình trong raw/ thành video giải thích 3 phút có phụ đề tiếng Việt" --from-recording',
      whenEn: 'Use when your own recorded voice should drive the video instead of a generated voice-over.',
      whenVi: 'Dùng khi giọng thu sẵn của bạn dẫn dắt video thay cho voice-over tạo bằng AI.',
      expectedEn: 'Transcribes the takes, builds a cut list that check-edl.py verifies, mixes a ducked music bed, composites your webcam picture-in-picture, and makes 9:16 shorts only after you approve the master.',
      expectedVi: 'Tạo transcript cho các bản ghi, dựng danh sách cắt được check-edl.py kiểm tra, mix nhạc nền đã duck, ghép webcam picture-in-picture, và chỉ làm short 9:16 sau khi bạn duyệt bản master.',
    },
  ],
  reportOutput: {
    titleEn: 'Motion video evidence',
    titleVi: 'Bằng chứng video motion',
    patternEn: 'Project path, style table, lint and check results, splice drift, music-under-speech dB, ffprobe streams, LUFS and peak, blackdetect result, render paths.',
    patternVi: 'Path project, bảng style, kết quả lint và check, độ lệch mối ghép, dB nhạc dưới giọng, stream từ ffprobe, LUFS và peak, kết quả blackdetect, path các bản render.',
    descEn: 'Done only when lint and check pass, every scene passed the director\'s pass, every requested 1:1 or 9:16 edition passes the same checks, every splice is within ±2 ms, music sits about 4–6 dB under speech, ffprobe shows 1920×1080 30 fps AAC 48 kHz stereo, and loudness is about −14 LUFS with peak at or below −1 dBFS; no two adjacent scenes share a camera move and no framing holds past about 8 seconds.',
    descVi: 'Chỉ xong khi lint và check pass, mọi cảnh qua director\'s pass, mỗi bản 1:1 hoặc 9:16 được yêu cầu đều qua cùng các check, mọi mối ghép trong ±2 ms, nhạc thấp hơn giọng khoảng 4–6 dB, ffprobe báo 1920×1080 30 fps AAC 48 kHz stereo, và loudness khoảng −14 LUFS với peak không quá −1 dBFS; không có hai cảnh liền nhau dùng cùng một kiểu chuyển động camera và không khung hình nào giữ quá khoảng 8 giây.',
  },
};

export default data;

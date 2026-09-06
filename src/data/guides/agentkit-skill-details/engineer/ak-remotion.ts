import type { SkillInfographic, SkillInvocation } from '@/data/guides/how-ck-works';

const invocation: SkillInvocation = {
  syntax: '/ak:remotion [video or component]',
  arguments: [
    {
      token: '[video or component]',
      titleEn: 'Video or component brief',
      titleVi: 'Brief video hoặc component',
      descEn:
        'Natural-language Remotion video, still, scene, chart, caption, media, 3D, or component task. Include composition ID, dimensions, fps, duration, assets, timing, acceptance frames, and whether final rendering is approved; the Skill has no top-level mode flags.',
      descVi:
        'Yêu cầu bằng ngôn ngữ tự nhiên cho video, still, scene, chart, caption, media, 3D hoặc component Remotion. Nêu composition ID, kích thước, fps, duration, asset, timing, frame nghiệm thu và final render đã được duyệt hay chưa; Skill không có mode flag cấp cao nhất.',
      required: true,
      exampleCommand:
        '/ak:remotion "Create a 15-second 1080x1080 product update video at 30 fps using existing brand tokens and local assets; include captions, reduced-motion-safe transitions, deterministic tests at key frames, and stop before the final render"',
          exampleCommandVi: '/ak:remotion "Create video product update 15 giây 1080x1080 ở 30 fps dùng brand tokens và local assets hiện có; bao gồm captions, transitions an toàn reduced-motion, deterministic tests tại key frames, và stop trước final render"',
    },
  ],
};

const data: SkillInfographic = {
  "id": "ak-remotion",
  "command": "/ak:remotion",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:remotion — Remotion React video",
    "titleVi": "/ak:remotion — Video React bằng Remotion",
    "taglineEn": "Use Remotion's React video rules for compositions, sequencing, animation curves, assets, captions, effects, data-driven charts, and render metadata.",
    "taglineVi": "Dùng bộ quy tắc Remotion cho video React: composition, sequencing, đường cong animation, asset, caption, effect, chart theo dữ liệu và metadata render."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Choose Remotion fit",
      "titleVi": "Chọn đúng Remotion",
      "descEn": "Use this when the video is authored as React components; prefer ak-hyperframes for plain HTML/CSS timed by data attributes.",
      "descVi": "Dùng khi video được viết bằng React component; ưu tiên ak-hyperframes nếu video là HTML/CSS thuần với thời gian trong data attribute."
    },
    {
      "number": 2,
      "titleEn": "Define composition",
      "titleVi": "Định nghĩa composition",
      "descEn": "Select composition, still, folder, props, duration, dimensions, and calculateMetadata rules as needed.",
      "descVi": "Chọn quy tắc cho composition, still, folder, props, thời lượng, kích thước và calculateMetadata khi cần."
    },
    {
      "number": 3,
      "titleEn": "Plan timeline",
      "titleVi": "Lập timeline",
      "descEn": "Use sequencing, trimming, transitions, timing, springs, interpolation, and text animation rules to place every scene.",
      "descVi": "Dùng quy tắc sequencing, trimming, transition, timing, spring, interpolation và text animation để đặt từng cảnh."
    },
    {
      "number": 4,
      "titleEn": "Wire media assets",
      "titleVi": "Gắn asset media",
      "descEn": "Load images, videos, audio, fonts, GIFs, Lottie, SRT captions, and transcript captions with the proper Remotion helpers.",
      "descVi": "Nạp ảnh, video, âm thanh, font, GIF, Lottie, caption SRT và caption từ transcript bằng helper Remotion phù hợp."
    },
    {
      "number": 5,
      "titleEn": "Measure dynamic content",
      "titleVi": "Đo nội dung động",
      "descEn": "Measure DOM nodes or text when fitting layout, captions, charts, or responsive composition elements.",
      "descVi": "Đo DOM node hoặc chữ khi cần khớp layout, caption, biểu đồ hoặc thành phần composition responsive."
    },
    {
      "number": 6,
      "titleEn": "Add advanced visuals",
      "titleVi": "Thêm hình ảnh nâng cao",
      "descEn": "Apply 3D, chart, effect-chain, wave, blur, and Tailwind rules only when the composition needs them.",
      "descVi": "Áp dụng 3D, chart, chuỗi effect, wave, blur và Tailwind chỉ khi composition cần."
    },
    {
      "number": 7,
      "titleEn": "Check render inputs",
      "titleVi": "Kiểm tra đầu vào render",
      "descEn": "Use duration, dimension, can-decode, audio/video metadata, and frame extraction rules before rendering long or user-supplied media.",
      "descVi": "Dùng quy tắc thời lượng, kích thước, can-decode, metadata audio/video và trích frame trước khi render media dài hoặc do người dùng cung cấp."
    }
  ],
  "corePrinciplesEn": [
    "React component video first; HTML-first video belongs to ak-hyperframes",
    "Timeline correctness depends on sequencing, trimming, and duration metadata",
    "Media handling is explicit: fonts, captions, audio, video, GIF, and Lottie each have rules",
    "Measure dynamic layout before trusting render-time fit"
  ],
  "corePrinciplesVi": [
    "Ưu tiên video viết bằng React component; video HTML-first thuộc ak-hyperframes",
    "Timeline đúng phụ thuộc vào sequencing, trimming và metadata thời lượng",
    "Xử lý media phải rõ ràng: font, caption, audio, video, GIF và Lottie đều có quy tắc riêng",
    "Đo layout động trước khi tin rằng lúc render sẽ vừa"
  ],
  "expertiseAreasEn": [
    "Compositions and metadata",
    "Sequences and transitions",
    "Caption display and transcription",
    "Audio/video trimming",
    "Charts and 3D in Remotion",
    "Effects and typography"
  ],
  "expertiseAreasVi": [
    "Composition và metadata",
    "Sequence và transition",
    "Hiển thị và tạo caption",
    "Cắt audio/video",
    "Chart và 3D trong Remotion",
    "Effect và typography"
  ],
  "skillStack": [
    {
      "name": "React",
      "type": "tool"
    },
    {
      "name": "Remotion",
      "type": "tool"
    },
    {
      "name": "Mediabunny",
      "type": "tool"
    },
    {
      "name": "Three.js",
      "type": "tool"
    },
    {
      "name": "React Three Fiber",
      "type": "tool"
    },
    {
      "name": "@remotion/captions",
      "type": "tool"
    }
  ],
  "invocation": invocation,
  "promptExamples": [
    {
      "labelEn": "Animated React video",
      "labelVi": "Video React có animation",
      "command": "/ak:remotion onboarding explainer with captions",
      "whenEn": "Use when a programmatic video should be authored as React components in Remotion.",
      "whenVi": "Dùng khi cần viết video lập trình bằng React component trong Remotion.",
      "expectedEn": "Rule-backed guidance for Remotion compositions, sequencing, timing curves, captions, assets, and render-ready scene structure.",
      "expectedVi": "Hướng dẫn theo rule cho Remotion composition, sequencing, đường cong timing, caption, asset và cấu trúc scene sẵn sàng render.",
      "recommended": true
    },
    {
      "labelEn": "Media metadata and trims",
      "labelVi": "Metadata và cắt media",
      "command": "/ak:remotion product demo using video clips and audio",
      "whenEn": "Use before mixing uploaded video, audio, duration metadata, decode checks, and trims.",
      "whenVi": "Dùng trước khi trộn video tải lên, audio, metadata thời lượng, kiểm tra decode và trimming.",
      "expectedEn": "Applies the audio, video, Mediabunny metadata, can-decode, frame extraction, and trimming rules so playback stays synchronized.",
      "expectedVi": "Áp dụng rule audio, video, metadata Mediabunny, can-decode, trích frame và trimming để playback luôn đồng bộ."
    },
    {
      "labelEn": "Dynamic data render",
      "labelVi": "Render theo dữ liệu động",
      "command": "/ak:remotion data-driven sales chart video",
      "whenEn": "Use when charts, dynamic props, measured text, or calculated composition metadata affect the render.",
      "whenVi": "Dùng khi chart, prop động, đo text hoặc metadata composition được tính toán ảnh hưởng tới render.",
      "expectedEn": "Combines chart, calculateMetadata, measuring-text, and DOM measurement rules to keep dynamic layouts sized and timed correctly.",
      "expectedVi": "Kết hợp rule chart, calculateMetadata, đo text và đo DOM để layout động có kích thước và timing đúng."
    },
    {
      "labelEn": "3D or effects sequence",
      "labelVi": "Sequence 3D hoặc effect",
      "command": "/ak:remotion hero video with 3D objects and blur effects",
      "whenEn": "Use when Remotion scenes need Three.js, React Three Fiber, blur, wave, effect chains, or Tailwind styling.",
      "whenVi": "Dùng khi scene Remotion cần Three.js, React Three Fiber, blur, wave, chuỗi effect hoặc styling Tailwind.",
      "expectedEn": "Uses the 3D, effects, Tailwind, animation, and transition rules to place advanced visuals on a coherent Remotion timeline.",
      "expectedVi": "Dùng rule 3D, effect, Tailwind, animation và transition để đặt visual nâng cao trên timeline Remotion mạch lạc."
    }
  ]
};

export default data;

import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-remotion",
  "command": "/ak:remotion",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:remotion",
    "titleVi": "/ak:remotion",
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
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Animated explainer",
      "labelVi": "Video giải thích có animation",
      "command": "/ak:remotion onboarding explainer with captions",
      "whenEn": "Use for React-authored video with scenes, captions, and timed motion.",
      "whenVi": "Dùng cho video viết bằng React có nhiều cảnh, caption và chuyển động theo thời gian.",
      "expectedEn": "Composition, sequencing, caption, timing, and asset guidance.",
      "expectedVi": "Hướng dẫn về composition, sequencing, caption, timing và asset.",
      "recommended": true
    },
    {
      "labelEn": "Media-heavy composition",
      "labelVi": "Composition nhiều media",
      "command": "/ak:remotion product demo using video clips and audio",
      "whenEn": "Use before mixing uploaded video, audio, duration metadata, and trimming.",
      "whenVi": "Dùng trước khi trộn video tải lên, âm thanh, metadata thời lượng và trimming.",
      "expectedEn": "Rules for decode checks, metadata, trim windows, and synchronized playback.",
      "expectedVi": "Quy tắc kiểm tra decode, metadata, khoảng cắt và phát đồng bộ."
    }
  ]
};

export default data;

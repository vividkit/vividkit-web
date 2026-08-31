import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-motion-graphics",
  command: "/ak:motion-graphics",
  kit: 'marketer',
  header: {
    titleEn: '/ak:motion-graphics — Route motion, animation, and video work',
    titleVi: '/ak:motion-graphics — Điều hướng việc motion, animation và video',
    taglineEn: "Route motion, animation, and video requests to installed in-repo skills first, propose external iart-ai packs only when needed, then verify real rendered output.",
    taglineVi: "Điều hướng yêu cầu motion, animation và video tới skill nội bộ đã cài trước, chỉ đề xuất pack iart-ai bên ngoài khi cần, rồi verify artifact render thật."
  },
  processFlow: [
    {
      number: 1,
      titleEn: "Classify intent",
      titleVi: "Phân loại intent",
      descEn: "Read the request shape: Remotion, HTML video, HyperFrames, Veo/video, shader, WebGL, ffmpeg, Mermaid, or pack-specific template.",
      descVi: "Đọc dạng yêu cầu: Remotion, HTML video, HyperFrames, Veo/video, shader, WebGL, ffmpeg, Mermaid hoặc template của pack ngoài."
    },
    {
      number: 2,
      titleEn: "Check installed",
      titleVi: "Kiểm tra đã cài",
      descEn: "Confirm the target skill is discoverable via /skills, ak skills list, or runtime catalog before routing.",
      descVi: "Xác nhận skill đích có thể discovery qua /skills, ak skills list hoặc runtime catalog trước khi route."
    },
    {
      number: 3,
      titleEn: "Prefer in-repo",
      titleVi: "Ưu tiên nội bộ",
      descEn: "Route to installed in-repo skills first: remotion, html-video, hyperframes, video, shader, threejs, media-processing, or mermaidjs-v11.",
      descVi: "Route tới skill nội bộ đã cài trước: remotion, html-video, hyperframes, video, shader, threejs, media-processing hoặc mermaidjs-v11."
    },
    {
      number: 4,
      titleEn: "Propose pack",
      titleVi: "Đề xuất pack",
      descEn: "Only if no in-repo route fits, look up references/packs.md and print the matching iart-ai install command with rationale.",
      descVi: "Chỉ khi không có route nội bộ phù hợp, tra references/packs.md và in lệnh cài iart-ai phù hợp kèm lý do."
    },
    {
      number: 5,
      titleEn: "Wait for user",
      titleVi: "Chờ user",
      descEn: "Do not install third-party packs yourself; wait for explicit user go-ahead and installation.",
      descVi: "Không tự cài pack bên thứ ba; chờ user đồng ý rõ ràng và tự cài."
    },
    {
      number: 6,
      titleEn: "Compose peers",
      titleVi: "Ghép skill liên quan",
      descEn: "Use copywriting, brand, logo-design, design-system, video, elevenlabs, thumbnails, paid-ads, or ads-management when available.",
      descVi: "Dùng copywriting, brand, logo-design, design-system, video, elevenlabs, thumbnail, paid-ads hoặc ads-management khi có."
    },
    {
      number: 7,
      titleEn: "Verify render",
      titleVi: "Verify render",
      descEn: "Run the light HTML seek-shot/contact-sheet path or heavy MP4 probe path according to artifact type.",
      descVi: "Chạy luồng nhẹ seek-shot/contact-sheet cho HTML hoặc probe MP4 cho artifact nặng tùy loại file."
    }
  ],
  hardGate: {
    type: "critical",
    titleEn: "Never auto-install packs",
    titleVi: "Không tự cài pack ngoài",
    contentEn: "External iart-ai motion packs are proposed, not auto-installed. Print the install command and wait for explicit user go-ahead; verify actual rendered artifacts before closing.",
    contentVi: "Pack motion iart-ai bên ngoài chỉ được đề xuất, không tự cài. In lệnh cài và chờ user đồng ý rõ ràng; verify artifact đã render thật trước khi chốt."
  },
  corePrinciplesEn: [
    "Installed in-repo skills win before external packs",
    "Availability must be confirmed in the live skill catalog",
    "External packs solve specific templates, not generic routing",
    "Rendered output must be probed or inspected, not assumed"
  ],
  corePrinciplesVi: [
    "Skill nội bộ đã cài được ưu tiên trước pack ngoài",
    "Phải xác nhận availability trong live skill catalog",
    "Pack ngoài giải quyết template cụ thể, không thay routing chung",
    "Artifact render phải được probe hoặc inspect, không được giả định"
  ],
  expertiseAreasEn: [
    "Motion/video request routing",
    "External pack selection",
    "Install-command proposal",
    "HTML seek-shot verification",
    "MP4 ffprobe verification",
    "Creative skill composition"
  ],
  expertiseAreasVi: [
    "Routing yêu cầu motion/video",
    "Chọn pack bên ngoài",
    "Đề xuất lệnh cài",
    "Verify HTML bằng seek-shot",
    "Verify MP4 bằng ffprobe",
    "Ghép skill creative"
  ],
  outputFlags: [
    {
      flag: "--list",
      titleEn: "List motion packs",
      titleVi: "Liệt kê pack motion",
      descEn: "Print the 15 packs, audiences, trigger phrases, and install commands.",
      descVi: "In 15 pack, audience, trigger phrase và lệnh cài.",
      exampleCommand: "/ak:motion-graphics --list",
          exampleCommandVi: '/ak:motion-graphics --list'
    },
    {
      flag: "--propose <pack>",
      titleEn: "Propose one pack",
      titleVi: "Đề xuất một pack",
      descEn: "Print the npx skills add iart-ai/<pack> command with a one-line rationale; do not execute it.",
      descVi: "In lệnh npx skills add iart-ai/<pack> kèm lý do một dòng; không chạy lệnh.",
      exampleCommand: "/ak:motion-graphics --propose tiktok-video-skills",
          exampleCommandVi: '/ak:motion-graphics --propose tiktok-video-skills'
    },
    {
      flag: "--verify <file>",
      titleEn: "Verify artifact",
      titleVi: "Verify artifact",
      descEn: "Route .mp4 to probe-mp4 or .html to seek-shot plus contact-sheet.",
      descVi: "Route .mp4 tới probe-mp4 hoặc .html tới seek-shot kèm contact-sheet.",
      exampleCommand: "/ak:motion-graphics --verify out/short.mp4",
          exampleCommandVi: '/ak:motion-graphics --verify out/short.mp4'
    }
  ],
  promptExamples: [{
      labelEn: "Route a TikTok animation",
      labelVi: "Route animation TikTok",
      command: "/ak:motion-graphics vertical TikTok hook-body-CTA product video",
      commandVi: '/ak:motion-graphics video sản phẩm TikTok dọc hook-body-CTA',
      whenEn: "You need routing to the best installed skill or a proposed external pack.",
      whenVi: "Khi cần route tới skill đã cài tốt nhất hoặc đề xuất pack ngoài.",
      expectedEn: "Checks installed skills first, then proposes tiktok-video-skills only if the in-repo route does not fit.",
      expectedVi: "Kiểm tra skill đã cài trước, rồi chỉ đề xuất tiktok-video-skills nếu route nội bộ không phù hợp.",
      recommended: true
    },
    {
      labelEn: "Verify an MP4",
      labelVi: "Verify MP4",
      command: "/ak:motion-graphics --verify out/short.mp4",
      commandVi: '/ak:motion-graphics --verify out/short.mp4',
      whenEn: "A rendered video needs real dimensions, codec, FPS, and duration validation.",
      whenVi: "Khi video đã render cần xác thực dimension, codec, FPS và duration thật.",
      expectedEn: "Runs the heavy MP4 probe helper and fails loud if the render lies.",
      expectedVi: "Chạy helper probe MP4 và fail rõ nếu render không đúng."
    },
    { labelEn: '9:16 explainer', labelVi: 'Explainer 9:16', command: '/ak:motion-graphics 15s product explainer in 9:16',
      commandVi: '/ak:motion-graphics video giải thích sản phẩm 15s ở tỷ lệ 9:16', whenEn: 'A video/motion request should be routed to the right installed tool.', whenVi: 'Một yêu cầu video/motion cần được điều hướng đúng tool đã cài.', expectedEn: 'Route (Remotion, Veo, HTML video, etc.) plus a production brief.', expectedVi: 'Route (Remotion, Veo, HTML video, ...) kèm brief sản xuất.' }
  ],
  skillStack: [
    {
      name: "ak:video",
      type: "skill"
    },
    {
      name: "ak:mermaidjs-v11",
      type: "skill"
    },
    {
      name: "ak:logo-design",
      type: "skill"
    },
    {
      name: "ak:design-system",
      type: "skill"
    },
    {
      name: "scripts/probe-mp4.sh",
      type: "tool"
    },
    {
      name: "scripts/seek-shot.sh",
      type: "tool"
    },
    {
      name: "scripts/contact-sheet.sh",
      type: "tool"
    }
  ]
};

export default data;

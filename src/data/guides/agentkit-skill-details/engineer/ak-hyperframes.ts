import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-hyperframes",
  "command": "/ak:hyperframes",
  "kit": "engineer",
  "header": {
    "titleEn": "HeyGen HyperFrames Wrapper",
    "titleVi": "Wrapper HeyGen HyperFrames",
    "taglineEn": "Wrap the pinned HeyGen HyperFrames CLI for HTML-first programmatic video: verify Node/FFmpeg, scaffold, edit timed HTML, preview, lint, render, and prove the MP4.",
    "taglineVi": "Dùng wrapper HeyGen HyperFrames CLI đã pin cho video lập trình HTML-first: kiểm Node/FFmpeg, scaffold, sửa HTML timing, preview, lint, render và chứng minh MP4."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Confirm fit",
      "titleVi": "Xác nhận đúng fit",
      "descEn": "Use HyperFrames for short 1080×1920 vertical/social videos, product-launch clips, promo loops, and HTML-authored motion graphics; route React-first, Remotion, and encode-only work elsewhere.",
      "descVi": "Dùng HyperFrames cho video dọc/social 1080×1920 ngắn, clip launch, promo loop và motion graphics viết bằng HTML; chuyển React-first, Remotion và encode-only sang nơi khác."
    },
    {
      "number": 2,
      "titleEn": "Verify deps",
      "titleVi": "Kiểm dependency",
      "descEn": "Require Node.js 22+ and FFmpeg on PATH; set HEYGEN_API_KEY only for remote rendering, then run node scripts/verify-prereqs.mjs before render work.",
      "descVi": "Cần Node.js 22+ và FFmpeg trong PATH; chỉ đặt HEYGEN_API_KEY cho remote render, rồi chạy node scripts/verify-prereqs.mjs trước khi render."
    },
    {
      "number": 3,
      "titleEn": "Pin CLI",
      "titleVi": "Pin CLI",
      "descEn": "Run every CLI step through npx -y hyperframes@0.7.99 and avoid unpinned npx -y hyperframes commands in scripts or docs.",
      "descVi": "Chạy mọi bước CLI qua npx -y hyperframes@0.7.99 và tránh lệnh npx -y hyperframes không pin trong script hoặc tài liệu."
    },
    {
      "number": 4,
      "titleEn": "Scaffold composition",
      "titleVi": "Scaffold composition",
      "descEn": "Scaffold a new composition with the pinned init command, for example npx -y hyperframes@0.7.99 init my-composition --resolution portrait.",
      "descVi": "Scaffold composition mới bằng lệnh init đã pin, ví dụ npx -y hyperframes@0.7.99 init my-composition --resolution portrait."
    },
    {
      "number": 5,
      "titleEn": "Edit HTML contract",
      "titleVi": "Sửa HTML theo contract",
      "descEn": "Author plain HTML with data-composition-id, data-start, data-duration, data-width, data-height, data-track-index, and class=\"clip\" as the timing/sizing contract.",
      "descVi": "Viết HTML thuần với data-composition-id, data-start, data-duration, data-width, data-height, data-track-index và class=\"clip\" làm contract timing/sizing."
    },
    {
      "number": 6,
      "titleEn": "Preview",
      "titleVi": "Preview",
      "descEn": "Run npx -y hyperframes@0.7.99 preview my-composition and open the printed local URL to scrub timing before spending render time.",
      "descVi": "Chạy npx -y hyperframes@0.7.99 preview my-composition và mở URL local được in ra để scrub timing trước khi tốn thời gian render."
    },
    {
      "number": 7,
      "titleEn": "Lint before render",
      "titleVi": "Lint trước render",
      "descEn": "Run npx -y hyperframes@0.7.99 lint my-composition and fix every malformed data-* timing or composition error before rendering.",
      "descVi": "Chạy npx -y hyperframes@0.7.99 lint my-composition và sửa mọi lỗi timing data-* hoặc composition trước khi render."
    },
    {
      "number": 8,
      "titleEn": "Render or cloud render",
      "titleVi": "Render hoặc cloud render",
      "descEn": "Render locally with npx -y hyperframes@0.7.99 render ... --output, or use the separate cloud render top-level command when HEYGEN_API_KEY-backed remote rendering is needed.",
      "descVi": "Render local bằng npx -y hyperframes@0.7.99 render ... --output, hoặc dùng lệnh top-level cloud render riêng khi cần remote render có HEYGEN_API_KEY."
    }
  ],
  "hardGate": {
    "type": "warning",
    "titleEn": "Lint before render; prove MP4 with ffprobe",
    "titleVi": "Lint trước render; chứng minh MP4 bằng ffprobe",
    "contentEn": "The documented loop is init → edit HTML → preview → lint → render. Fix every lint error before rendering, and do not call the render complete until ffprobe reports nonzero duration and expected dimensions.",
    "contentVi": "Loop được ghi là init → sửa HTML → preview → lint → render. Sửa mọi lỗi lint trước khi render, và chưa coi render hoàn tất nếu ffprobe chưa báo duration khác 0 và dimension đúng."
  },
  "corePrinciplesEn": [
    "HyperFrames is for HTML/CSS timed by data-* attributes, not React-first Remotion work.",
    "The composition HTML is the source of truth; class=\"clip\" and timing attributes drive visibility.",
    "Pinned npx invocations plus lint and ffprobe make fast-moving CLI behavior auditable."
  ],
  "corePrinciplesVi": [
    "HyperFrames dành cho HTML/CSS được timing bằng data-* attribute, không phải việc Remotion React-first.",
    "HTML composition là source of truth; class=\"clip\" và timing attribute điều khiển visibility.",
    "Lệnh npx đã pin cùng lint và ffprobe giúp hành vi CLI thay đổi nhanh vẫn kiểm chứng được."
  ],
  "expertiseAreasEn": [
    "HTML-first vertical/social video",
    "data-* composition timing",
    "Prerequisite verification",
    "Pinned init/preview/lint/render flow",
    "Local, cloud, lambda, and cloudrun render routing"
  ],
  "expertiseAreasVi": [
    "Video dọc/social HTML-first",
    "Timing composition bằng data-*",
    "Kiểm prerequisite",
    "Luồng init/preview/lint/render đã pin",
    "Định tuyến render local, cloud, lambda và cloudrun"
  ],
  "invocation": {
    "syntax": "/ak:hyperframes [composition or command]",
    "arguments": [
      {
        "token": "[composition or command]",
        "titleEn": "Composition brief or command",
        "titleVi": "Brief composition hoặc lệnh",
        "descEn": "Natural-language request for a HyperFrames HTML composition, scaffold, preview, lint, local render, cloud render, or troubleshooting run. Include aspect ratio, duration, assets, output path, and local/cloud boundary; it is not a fixed parser command.",
        "descVi": "Yêu cầu bằng ngôn ngữ tự nhiên cho composition HTML HyperFrames, scaffold, preview, lint, render local, render cloud hoặc gỡ lỗi. Nêu aspect ratio, duration, asset, output path và ranh giới local/cloud; đây không phải lệnh parser cố định.",
        "required": true,
        "exampleCommand": "/ak:hyperframes \"Scaffold a 6-second 1080x1920 draft product-launch loop under ./assets/videos/launch/, preview locally, lint before rendering, and render an MP4 to ./assets/videos/launch/launch.mp4 without contacting the HeyGen cloud endpoint\""
      }
    ]
  },
  "skillStack": [
    {
      "name": "npx",
      "type": "tool"
    },
    {
      "name": "hyperframes@0.7.99",
      "type": "tool"
    },
    {
      "name": "verify-prereqs.mjs",
      "type": "tool"
    },
    {
      "name": "FFmpeg",
      "type": "tool"
    },
    {
      "name": "ffprobe",
      "type": "tool"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Vertical product launch",
      "labelVi": "Launch sản phẩm dọc",
      "command": "/ak:hyperframes create a 9:16 product-launch clip as a plain HTML composition",
      "whenEn": "You need a short vertical/social video rendered from HTML/CSS.",
      "whenVi": "Khi cần video dọc/social ngắn render từ HTML/CSS.",
      "expectedEn": "Verifies Node.js and FFmpeg, scaffolds with pinned init --resolution portrait, edits data-* timed HTML, previews, lints, renders, and ffprobes the MP4.",
      "expectedVi": "Kiểm Node.js và FFmpeg, scaffold bằng init --resolution portrait đã pin, sửa HTML timing data-*, preview, lint, render và ffprobe MP4.",
      "recommended": true
    },
    {
      "labelEn": "Remote cloud render",
      "labelVi": "Render cloud remote",
      "command": "/ak:hyperframes render my-composition remotely with HeyGen cloud output to ./assets/videos/my-composition.mp4",
      "whenEn": "You have a HyperFrames HTML composition and need HEYGEN_API_KEY-backed remote rendering.",
      "whenVi": "Khi đã có composition HTML HyperFrames và cần remote render bằng HEYGEN_API_KEY.",
      "expectedEn": "Checks prerequisites and HEYGEN_API_KEY, keeps cloud render as a separate top-level command, lints first, renders with --output, and verifies the video artifact.",
      "expectedVi": "Kiểm prerequisite và HEYGEN_API_KEY, giữ cloud render là lệnh top-level riêng, lint trước, render với --output và kiểm artifact video."
    },
    {
      "labelEn": "Troubleshoot bad MP4",
      "labelVi": "Gỡ lỗi MP4 lỗi",
      "command": "/ak:hyperframes troubleshoot a blank or too-short MP4 from my-composition",
      "whenEn": "A HyperFrames render is blank, too short, or failing from malformed composition timing.",
      "whenVi": "Khi render HyperFrames bị trắng, quá ngắn hoặc lỗi do timing composition sai.",
      "expectedEn": "Runs the verifier, reruns lint, inspects data-composition-id, data-start, data-duration, and class=\"clip\", then follows the documented troubleshooting path before rerendering.",
      "expectedVi": "Chạy verifier, chạy lại lint, kiểm data-composition-id, data-start, data-duration và class=\"clip\", rồi theo troubleshooting đã ghi trước khi render lại."
    }
  ],
  "reportOutput": {
    "titleEn": "HyperFrames render summary",
    "titleVi": "Tóm tắt render HyperFrames",
    "patternEn": "Composition path, pinned command sequence, lint result, render command, MP4 output path, ffprobe duration and dimensions, local/cloud note.",
    "patternVi": "Path composition, chuỗi lệnh đã pin, kết quả lint, lệnh render, path MP4 output, duration và dimension từ ffprobe, ghi chú local/cloud.",
    "descEn": "A trustworthy result shows lint passed before render and ffprobe proved the MP4 duration and dimensions.",
    "descVi": "Kết quả đáng tin phải cho thấy lint đã pass trước render và ffprobe đã chứng minh duration/dimension của MP4."
  }
};

export default data;

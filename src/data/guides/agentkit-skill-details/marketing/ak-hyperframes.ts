import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-hyperframes",
  "command": "/ak:hyperframes",
  "kit": "marketer",
  "header": {
    "titleEn": "HeyGen HyperFrames Wrapper",
    "titleVi": "Wrapper HeyGen HyperFrames",
    "taglineEn": "Wrap the pinned HeyGen HyperFrames CLI for HTML-first programmatic video: verify Node/FFmpeg/FFprobe/Chrome, scaffold, edit timed HTML, preview, lint and check, render, and prove the MP4.",
    "taglineVi": "Dùng wrapper HeyGen HyperFrames CLI đã pin cho video lập trình HTML-first: kiểm Node/FFmpeg/FFprobe/Chrome, scaffold, sửa HTML timing, preview, lint và check, render và chứng minh MP4."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Confirm fit",
      "titleVi": "Xác nhận đúng fit",
      "descEn": "Use HyperFrames for short 1080×1920 vertical/social videos, product-launch clips, promo loops, and HTML-authored motion graphics. Use nexu-io/html-video only when that binary or a matching template catalog already exists; otherwise stay on HyperFrames. Route React-first, Remotion, and encode-only work elsewhere.",
      "descVi": "Dùng HyperFrames cho video dọc/social 1080×1920 ngắn, clip launch, promo loop và motion graphics viết bằng HTML. Chỉ dùng nexu-io/html-video khi máy đã có binary đó hoặc catalog mẫu khớp; không thì ở lại HyperFrames. Chuyển React-first, Remotion và encode-only sang nơi khác."
    },
    {
      "number": 2,
      "titleEn": "Verify deps",
      "titleVi": "Kiểm dependency",
      "descEn": "Require Node.js 22+, FFmpeg and FFprobe on PATH, and headless Chrome (hyperframes browser ensure); HeyGen credentials (HEYGEN_API_KEY or hyperframes auth login) are only for cloud rendering. Run node scripts/verify-prereqs.mjs before render work.",
      "descVi": "Cần Node.js 22+, FFmpeg và FFprobe trong PATH, và Chrome headless (hyperframes browser ensure); credential HeyGen (HEYGEN_API_KEY hoặc hyperframes auth login) chỉ dùng cho cloud render. Chạy node scripts/verify-prereqs.mjs trước khi render."
    },
    {
      "number": 3,
      "titleEn": "Pin CLI",
      "titleVi": "Pin CLI",
      "descEn": "Run every CLI step through npx -y hyperframes@0.8.77 and avoid unpinned npx -y hyperframes commands in scripts or docs.",
      "descVi": "Chạy mọi bước CLI qua npx -y hyperframes@0.8.77 và tránh lệnh npx -y hyperframes không pin trong script hoặc tài liệu."
    },
    {
      "number": 4,
      "titleEn": "Scaffold composition",
      "titleVi": "Scaffold composition",
      "descEn": "Scaffold a new composition with the pinned init command, for example npx -y hyperframes@0.8.77 init my-composition --resolution portrait --non-interactive.",
      "descVi": "Scaffold composition mới bằng lệnh init đã pin, ví dụ npx -y hyperframes@0.8.77 init my-composition --resolution portrait --non-interactive."
    },
    {
      "number": 5,
      "titleEn": "Edit HTML contract",
      "titleVi": "Sửa HTML theo contract",
      "descEn": "Author plain HTML: the root carries data-composition-id, data-start=\"0\", data-width, data-height, and usually data-duration; each timed clip carries id, data-start, and data-duration.",
      "descVi": "Viết HTML thuần: phần root có data-composition-id, data-start=\"0\", data-width, data-height và thường có data-duration; mỗi clip có timing mang id, data-start và data-duration."
    },
    {
      "number": 6,
      "titleEn": "Preview",
      "titleVi": "Preview",
      "descEn": "Run npx -y hyperframes@0.8.77 preview my-composition and open the printed local URL to scrub timing before spending render time.",
      "descVi": "Chạy npx -y hyperframes@0.8.77 preview my-composition và mở URL local được in ra để scrub timing trước khi tốn thời gian render."
    },
    {
      "number": 7,
      "titleEn": "Lint, then check",
      "titleVi": "Lint rồi check",
      "descEn": "Run npx -y hyperframes@0.8.77 lint my-composition for fast feedback, then check as the final gate: it reruns lint and audits runtime errors, failed requests, layout overlap, and contrast in a browser. Use snapshot --at to review key frames without rendering.",
      "descVi": "Chạy npx -y hyperframes@0.8.77 lint my-composition để có phản hồi nhanh, rồi check làm cổng cuối: nó chạy lại lint và kiểm lỗi runtime, request fail, layout chồng lấn và độ tương phản trong trình duyệt. Dùng snapshot --at để xem khung hình chính mà không cần render."
    },
    {
      "number": 8,
      "titleEn": "Render or cloud render",
      "titleVi": "Render hoặc cloud render",
      "descEn": "Render locally with npx -y hyperframes@0.8.77 render ... --strict --output, or use the separate cloud render top-level command (inspect first with --dry-run) when credential-backed cloud rendering is needed.",
      "descVi": "Render local bằng npx -y hyperframes@0.8.77 render ... --strict --output, hoặc dùng lệnh top-level cloud render riêng (xem trước bằng --dry-run) khi cần cloud render có credential."
    }
  ],
  "hardGate": {
    "type": "warning",
    "titleEn": "HyperFrames executes HTML, CSS, and JavaScript in Chrome",
    "titleVi": "HyperFrames chạy HTML, CSS và JavaScript trong Chrome",
    "contentEn": "Treat compositions and remote assets as code and network-capable input. Review their origin before rendering, and do not expose local secrets, authenticated pages, private files, or unrestricted network access. Pass check before render, and do not call the render complete until ffprobe reports nonzero duration and expected dimensions.",
    "contentVi": "Coi composition và asset từ xa là code có thể truy cập mạng. Kiểm nguồn gốc trước khi render, và không để lộ secret local, trang đã đăng nhập, file riêng hay quyền mạng không giới hạn. Phải pass check trước khi render, và chưa coi render hoàn tất nếu ffprobe chưa báo duration khác 0 và dimension đúng."
  },
  "corePrinciplesEn": [
    "HyperFrames is for HTML/CSS timed by data-* attributes, not React-first Remotion work.",
    "The composition HTML is the source of truth; id, data-start, and data-duration on each clip drive timing.",
    "Pinned npx invocations plus lint, check, and ffprobe make fast-moving CLI behavior auditable."
  ],
  "corePrinciplesVi": [
    "HyperFrames dành cho HTML/CSS được timing bằng data-* attribute, không phải việc Remotion React-first.",
    "HTML composition là source of truth; id, data-start và data-duration trên mỗi clip điều khiển timing.",
    "Lệnh npx đã pin cùng lint, check và ffprobe giúp hành vi CLI thay đổi nhanh vẫn kiểm chứng được."
  ],
  "expertiseAreasEn": [
    "HTML-first vertical/social video",
    "data-* composition timing",
    "Prerequisite verification",
    "Pinned init/preview/lint/check/render flow",
    "Local, cloud, lambda, and cloudrun render routing"
  ],
  "expertiseAreasVi": [
    "Video dọc/social HTML-first",
    "Timing composition bằng data-*",
    "Kiểm prerequisite",
    "Luồng init/preview/lint/check/render đã pin",
    "Định tuyến render local, cloud, lambda và cloudrun"
  ],
  "invocation": {
    "syntax": "/ak:hyperframes [composition or command]",
    "arguments": [
      {
        "token": "[composition or command]",
        "titleEn": "Composition brief or command",
        "titleVi": "Brief composition hoặc lệnh",
        "descEn": "Natural-language request for a HyperFrames HTML composition, scaffold, preview, lint/check, local render, cloud render, or troubleshooting run. Include aspect ratio, duration, assets, output path, and local/cloud boundary; it is not a fixed parser command.",
        "descVi": "Yêu cầu bằng ngôn ngữ tự nhiên cho composition HTML HyperFrames, scaffold, preview, lint/check, render local, render cloud hoặc gỡ lỗi. Nêu aspect ratio, duration, asset, output path và ranh giới local/cloud; đây không phải lệnh parser cố định.",
        "required": true,
        "exampleCommand": "/ak:hyperframes \"Scaffold a 6-second 1080x1920 draft product-launch loop under ./assets/videos/launch/, preview locally, pass lint and check before rendering, and render an MP4 to ./assets/videos/launch/launch.mp4 without contacting the HeyGen cloud endpoint\""
      }
    ]
  },
  "skillStack": [
    {
      "name": "npx",
      "type": "tool"
    },
    {
      "name": "hyperframes@0.8.77",
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
    },
    {
      "name": "Chrome",
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
      "expectedEn": "Verifies Node.js and FFmpeg, scaffolds with pinned init --resolution portrait, edits data-* timed HTML, previews, passes lint and check, renders, and ffprobes the MP4.",
      "expectedVi": "Kiểm Node.js và FFmpeg, scaffold bằng init --resolution portrait đã pin, sửa HTML timing data-*, preview, pass lint và check, render và ffprobe MP4.",
      "recommended": true
    },
    {
      "labelEn": "Remote cloud render",
      "labelVi": "Render cloud remote",
      "command": "/ak:hyperframes render my-composition remotely with HeyGen cloud output to ./assets/videos/my-composition.mp4",
      "whenEn": "You have a HyperFrames HTML composition and need cloud rendering with HeyGen credentials.",
      "whenVi": "Khi đã có composition HTML HyperFrames và cần cloud render bằng credential HeyGen.",
      "expectedEn": "Checks prerequisites and HeyGen credentials, passes check first, keeps cloud render as a separate top-level command inspected with --dry-run, then verifies the video artifact.",
      "expectedVi": "Kiểm prerequisite và credential HeyGen, pass check trước, giữ cloud render là lệnh top-level riêng được xem trước bằng --dry-run, rồi kiểm artifact video."
    },
    {
      "labelEn": "Existing html-video catalog",
      "labelVi": "Catalog html-video sẵn có",
      "command": "/ak:hyperframes render this promo from the html-video template catalog already on this machine",
      "whenEn": "A template-driven HTML-to-MP4 clip should use an html-video checkout or binary that is already installed.",
      "whenVi": "Khi clip HTML-to-MP4 theo mẫu nên dùng checkout hoặc binary html-video đã có trên máy.",
      "expectedEn": "Stays off HyperFrames only because html-video is already available, follows that reference for setup and render, and does not vendor the engine into the project.",
      "expectedVi": "Rời HyperFrames chỉ vì html-video đã có sẵn, theo reference đó để cài và render, và không nhét engine vào project."
    },
    {
      "labelEn": "Troubleshoot bad MP4",
      "labelVi": "Gỡ lỗi MP4 lỗi",
      "command": "/ak:hyperframes troubleshoot a blank or too-short MP4 from my-composition",
      "whenEn": "A HyperFrames render is blank, too short, or failing from malformed composition timing.",
      "whenVi": "Khi render HyperFrames bị trắng, quá ngắn hoặc lỗi do timing composition sai.",
      "expectedEn": "Runs the verifier, reruns check, inspects data-composition-id, data-start, data-duration, and timeline registration, then follows the documented troubleshooting path before rerendering.",
      "expectedVi": "Chạy verifier, chạy lại check, kiểm data-composition-id, data-start, data-duration và đăng ký timeline, rồi theo troubleshooting đã ghi trước khi render lại."
    }
  ],
  "reportOutput": {
    "titleEn": "HyperFrames render summary",
    "titleVi": "Tóm tắt render HyperFrames",
    "patternEn": "Composition path, pinned command sequence, lint and check results, render command, MP4 output path, ffprobe duration and dimensions, local/cloud note.",
    "patternVi": "Path composition, chuỗi lệnh đã pin, kết quả lint và check, lệnh render, path MP4 output, duration và dimension từ ffprobe, ghi chú local/cloud.",
    "descEn": "A trustworthy result shows lint and check passed before render and ffprobe proved the MP4 duration and dimensions.",
    "descVi": "Kết quả đáng tin phải cho thấy lint và check đã pass trước render và ffprobe đã chứng minh duration/dimension của MP4."
  }
};

export default data;

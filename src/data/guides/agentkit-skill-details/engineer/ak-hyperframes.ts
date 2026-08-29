import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-hyperframes",
  "command": "/ak:hyperframes",
  "kit": "engineer",
  "header": {
    "titleEn": "HeyGen HyperFrames Wrapper",
    "titleVi": "Wrapper HeyGen HyperFrames",
    "taglineEn": "Use the pinned HyperFrames CLI for HTML-first programmatic video: verify prerequisites, scaffold, edit annotated HTML, preview, lint, render, and troubleshoot.",
    "taglineVi": "Dùng HyperFrames CLI đã pin cho video lập trình HTML-first: kiểm prerequisites, scaffold, sửa HTML có annotation, preview, lint, render và xử lý lỗi."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Confirm fit",
      "titleVi": "Xác nhận đúng fit",
      "descEn": "Use HyperFrames for short vertical/social HTML compositions, product-launch clips, promo loops, and motion graphics; route React-first, Remotion, and encode-only work elsewhere.",
      "descVi": "Dùng HyperFrames cho composition HTML ngắn dọc/social, clip launch, promo loop và motion graphics; chuyển React-first, Remotion và encode-only sang nơi khác."
    },
    {
      "number": 2,
      "titleEn": "Verify deps",
      "titleVi": "Kiểm dependency",
      "descEn": "Require Node.js 22+, FFmpeg on PATH, and optionally HEYGEN_API_KEY for remote rendering; run node scripts/verify-prereqs.mjs first.",
      "descVi": "Cần Node.js 22+, FFmpeg trong PATH, và HEYGEN_API_KEY nếu render remote; chạy node scripts/verify-prereqs.mjs trước."
    },
    {
      "number": 3,
      "titleEn": "Pin CLI",
      "titleVi": "Pin CLI",
      "descEn": "Run the documented npx -y hyperframes@0.7.99 commands rather than an unpinned hyperframes package.",
      "descVi": "Chạy lệnh npx -y hyperframes@0.7.99 như tài liệu, không dùng package hyperframes không pin."
    },
    {
      "number": 4,
      "titleEn": "Scaffold composition",
      "titleVi": "Scaffold composition",
      "descEn": "Initialize a project such as hyperframes init my-composition --resolution portrait.",
      "descVi": "Khởi tạo project như hyperframes init my-composition --resolution portrait."
    },
    {
      "number": 5,
      "titleEn": "Edit HTML contract",
      "titleVi": "Sửa HTML theo contract",
      "descEn": "Author plain HTML with data-composition-id, data-start, data-width, and data-height attributes as source of truth.",
      "descVi": "Viết HTML thuần với attribute data-composition-id, data-start, data-width và data-height làm source of truth."
    },
    {
      "number": 6,
      "titleEn": "Preview",
      "titleVi": "Preview",
      "descEn": "Run hyperframes preview before render to inspect the composition in a local dev server.",
      "descVi": "Chạy hyperframes preview trước render để xem composition trong dev server local."
    },
    {
      "number": 7,
      "titleEn": "Lint before render",
      "titleVi": "Lint trước render",
      "descEn": "Always run hyperframes lint to catch malformed timing and composition attributes.",
      "descVi": "Luôn chạy hyperframes lint để bắt lỗi timing và composition attribute."
    },
    {
      "number": 8,
      "titleEn": "Render or cloud render",
      "titleVi": "Render hoặc cloud render",
      "descEn": "Render to MP4 with --output for local video, or use the separate hyperframes cloud render command when remote rendering is needed.",
      "descVi": "Render MP4 local bằng --output, hoặc dùng lệnh riêng hyperframes cloud render khi cần render remote."
    }
  ],
  "hardGate": {
    "type": "warning",
    "titleEn": "Always lint before render and keep the CLI pinned",
    "titleVi": "Luôn lint trước render và giữ CLI được pin",
    "contentEn": "The standard workflow is init → edit HTML → preview → lint → render, using hyperframes@0.7.99. The skill warns that unpinned commands and render-without-lint cause avoidable failures.",
    "contentVi": "Workflow chuẩn là init → sửa HTML → preview → lint → render, dùng hyperframes@0.7.99. Skill cảnh báo lệnh không pin và render không lint dễ gây lỗi tránh được."
  },
  "corePrinciplesEn": [
    "HyperFrames is HTML-first, not a Remotion replacement.",
    "The annotated HTML composition is the source of truth.",
    "Pinned CLI invocations make fast-moving upstream behavior auditable."
  ],
  "corePrinciplesVi": [
    "HyperFrames là HTML-first, không thay thế Remotion.",
    "Composition HTML có annotation là source of truth.",
    "Lệnh CLI được pin giúp hành vi upstream thay đổi nhanh vẫn kiểm chứng được."
  ],
  "expertiseAreasEn": [
    "Vertical/social video composition",
    "HTML timing attributes",
    "Prerequisite verification",
    "Pinned CLI render flow",
    "Local and cloud render distinction"
  ],
  "expertiseAreasVi": [
    "Composition video dọc/social",
    "Attribute timing trong HTML",
    "Kiểm prerequisites",
    "Luồng render CLI đã pin",
    "Phân biệt render local và cloud"
  ],
  "skillStack": [
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
      "name": "composition-basics.md",
      "type": "tool"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Vertical launch clip",
      "labelVi": "Clip launch dọc",
      "command": "/ak:hyperframes create a 9:16 product-launch clip as an HTML composition",
      "whenEn": "The task is a social-ready HTML-first video composition.",
      "whenVi": "Khi task là composition video HTML-first phù hợp social.",
      "expectedEn": "Verifies deps, scaffolds with the pinned CLI, edits annotated HTML, previews, lints, and renders.",
      "expectedVi": "Kiểm deps, scaffold bằng CLI đã pin, sửa HTML annotation, preview, lint và render.",
      "recommended": true
    },
    {
      "labelEn": "Troubleshoot render",
      "labelVi": "Gỡ lỗi render",
      "command": "/ak:hyperframes troubleshoot a blank render in my-composition",
      "whenEn": "A HyperFrames MP4 is blank, too short, or failing.",
      "whenVi": "Khi MP4 HyperFrames bị trắng, quá ngắn hoặc render lỗi.",
      "expectedEn": "Runs prerequisite verification, confirms lint, inspects composition attributes, and follows documented troubleshooting.",
      "expectedVi": "Chạy kiểm prerequisite, xác nhận lint, inspect attribute composition và theo troubleshooting đã ghi."
    }
  ],
  "reportOutput": {
    "titleEn": "HyperFrames render summary",
    "titleVi": "Tóm tắt render HyperFrames",
    "patternEn": "Composition path, pinned command sequence, lint result, render output, local/cloud note.",
    "patternVi": "Path composition, chuỗi lệnh đã pin, kết quả lint, output render, ghi chú local/cloud.",
    "descEn": "A trustworthy result shows the composition passed lint before render.",
    "descVi": "Kết quả đáng tin phải cho thấy composition đã lint pass trước render."
  }
};

export default data;

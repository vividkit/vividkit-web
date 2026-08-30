import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-html-video",
  "command": "/ak:html-video",
  "kit": "engineer",
  "header": {
    "titleEn": "HTML-Video Local MP4 Pipeline",
    "titleVi": "Pipeline MP4 local từ HTML",
    "taglineEn": "Create local MP4 videos from HTML/CSS/JS templates using nexu-io/html-video: diagnose setup, discover templates, create projects, customize assets, preview, render, and ffprobe the result.",
    "taglineVi": "Tạo MP4 local từ template HTML/CSS/JS bằng nexu-io/html-video: chẩn đoán setup, tìm template, tạo project, tùy chỉnh asset, preview, render và kiểm bằng ffprobe."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Route medium",
      "titleVi": "Định tuyến loại video",
      "descEn": "Use html-video for template-driven HTML videos; route React/Remotion, encoding-only, static previews, browser QA, or Chrome-profile work to the documented alternatives.",
      "descVi": "Dùng html-video cho video HTML theo template; chuyển React/Remotion, encode-only, preview tĩnh, QA browser hoặc việc cần Chrome profile sang skill thay thế đã ghi."
    },
    {
      "number": 2,
      "titleEn": "Diagnose setup",
      "titleVi": "Chẩn đoán setup",
      "descEn": "Prefer an existing html-video binary; otherwise use a source checkout without vendoring upstream into the user project, then run html_video doctor and list-engines before workflow work.",
      "descVi": "Ưu tiên binary html-video sẵn có; nếu không có thì dùng source checkout mà không vendor upstream vào project user, rồi chạy html_video doctor và list-engines trước workflow."
    },
    {
      "number": 3,
      "titleEn": "Pin brief",
      "titleVi": "Khóa brief",
      "descEn": "Before creating anything, capture audience, goal, duration, aspect ratio, assets or URLs, template preference, output path, and draft-versus-polished target.",
      "descVi": "Trước khi tạo, chốt audience, goal, duration, aspect ratio, asset hoặc URL, template mong muốn, output path và mức draft hay polished."
    },
    {
      "number": 4,
      "titleEn": "Discover template",
      "titleVi": "Tìm template",
      "descEn": "Search templates by intent and aspect, inspect the chosen template, and check whether variables are exposed.",
      "descVi": "Tìm template theo intent và aspect, inspect template được chọn và kiểm tra có biến để set hay không."
    },
    {
      "number": 5,
      "titleEn": "Create project",
      "titleVi": "Tạo project",
      "descEn": "Create or locate a project with name, intent, and aspect, then inspect project-list/project-show as needed.",
      "descVi": "Tạo hoặc tìm project với name, intent và aspect, rồi kiểm project-list/project-show khi cần."
    },
    {
      "number": 6,
      "titleEn": "Customize assets",
      "titleVi": "Tùy chỉnh asset",
      "descEn": "Set the template, add inline text and files, and use project-set-var or project-set-vars only when inspect-template exposes variables.",
      "descVi": "Set template, thêm inline text và file, và chỉ dùng project-set-var hoặc project-set-vars khi inspect-template cho thấy có biến."
    },
    {
      "number": 7,
      "titleEn": "Preview or Studio",
      "titleVi": "Preview hoặc Studio",
      "descEn": "Run project-preview and open the returned html_path; use Studio on port 3071 for interactive editing or templates with empty variable schemas.",
      "descVi": "Chạy project-preview và mở html_path trả về; dùng Studio ở port 3071 cho chỉnh sửa tương tác hoặc template không có schema biến."
    },
    {
      "number": 8,
      "titleEn": "Render and verify",
      "titleVi": "Render và kiểm chứng",
      "descEn": "Render with an explicit output path and stream progress, then use ffprobe to confirm nonzero duration and expected video dimensions.",
      "descVi": "Render với output path rõ ràng và stream progress, rồi dùng ffprobe xác nhận duration khác 0 và kích thước video đúng."
    }
  ],
  "hardGate": {
    "type": "warning",
    "titleEn": "MP4 is not complete until ffprobe passes",
    "titleVi": "MP4 chưa hoàn tất nếu ffprobe chưa đạt",
    "contentEn": "The skill’s proof requires ffprobe to report nonzero duration and expected video dimensions; do not treat a render command alone as completion.",
    "contentVi": "Bằng chứng hoàn tất cần ffprobe báo duration khác 0 và kích thước video đúng; chỉ chạy lệnh render chưa đủ để coi là xong."
  },
  "corePrinciplesEn": [
    "Run html_video diagnostics before workflow work; creation still starts with a pinned brief, not an immediate render.",
    "Inspect templates before choosing; empty variable schemas require Studio or project editing.",
    "Do not commit large generated MP4 files unless the user explicitly wants them versioned."
  ],
  "corePrinciplesVi": [
    "Chạy diagnostics html_video trước workflow; phần tạo vẫn bắt đầu bằng brief đã chốt, không render ngay.",
    "Inspect template trước khi chọn; schema biến rỗng cần Studio hoặc sửa project.",
    "Không commit MP4 lớn sinh ra trừ khi user muốn version artifact đó."
  ],
  "expertiseAreasEn": [
    "Template discovery",
    "HTML/CSS/JS video projects",
    "Studio customization",
    "Chromium/ffmpeg rendering",
    "ffprobe verification"
  ],
  "expertiseAreasVi": [
    "Tìm template",
    "Project video HTML/CSS/JS",
    "Tùy chỉnh bằng Studio",
    "Render qua Chromium/ffmpeg",
    "Kiểm chứng bằng ffprobe"
  ],
  "skillStack": [
    {
      "name": "html_video doctor",
      "type": "tool"
    },
    {
      "name": "list-engines",
      "type": "tool"
    },
    {
      "name": "search-templates / inspect-template",
      "type": "tool"
    },
    {
      "name": "project-create / project-set-template",
      "type": "tool"
    },
    {
      "name": "project-add-asset / project-set-vars",
      "type": "tool"
    },
    {
      "name": "project-preview / studio",
      "type": "tool"
    },
    {
      "name": "project-render / ffprobe",
      "type": "tool"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Template product promo",
      "labelVi": "Promo sản phẩm bằng template",
      "command": "/ak:html-video short product promo for a developer tool, 16:9, draft proof to ./assets/videos/agentkit-promo.mp4",
      "whenEn": "Use when a product or feature needs a local MP4 built from an HTML/CSS/JS template rather than a Remotion composition.",
      "whenVi": "Dùng khi sản phẩm hoặc tính năng cần MP4 local từ template HTML/CSS/JS thay vì composition Remotion.",
      "expectedEn": "Runs html_video diagnostics, pins the brief, searches and inspects templates, creates a project, previews html_path, renders to the requested MP4, then verifies duration and dimensions with ffprobe.",
      "expectedVi": "Chạy diagnostics html_video, chốt brief, tìm và inspect template, tạo project, preview html_path, render ra MP4 đã yêu cầu, rồi kiểm duration và dimensions bằng ffprobe.",
      "recommended": true
    },
    {
      "labelEn": "Explainer from URL",
      "labelVi": "Explainer từ URL",
      "command": "/ak:html-video create a 30 second explainer from https://example.com/article using a clean social clip template",
      "whenEn": "Use when a source URL should become a local HTML-first explainer or social clip rendered through Chromium and ffmpeg.",
      "whenVi": "Dùng khi một URL nguồn cần thành explainer hoặc social clip HTML-first local được render qua Chromium và ffmpeg.",
      "expectedEn": "Treats the URL as source material, selects and inspects a suitable template, organizes scratch and output paths, previews the HTML, renders an MP4, and checks the ffprobe proof.",
      "expectedVi": "Xem URL là tư liệu nguồn, chọn và inspect template phù hợp, tổ chức path scratch/output, preview HTML, render MP4 và kiểm proof ffprobe."
    },
    {
      "labelEn": "Studio customization",
      "labelVi": "Tùy chỉnh bằng Studio",
      "command": "/ak:html-video customize an existing project in Studio for a square launch teaser and export the finished MP4",
      "whenEn": "Use when template variables are missing or layout/copy needs interactive Studio tuning before rendering.",
      "whenVi": "Dùng khi template không có biến hoặc layout/copy cần tinh chỉnh tương tác trong Studio trước khi render.",
      "expectedEn": "Opens the preview or Studio flow, uses Studio for rewrite and layout tuning, exports or renders the finished project, and reports the verified MP4 path with ffprobe duration and dimensions.",
      "expectedVi": "Mở preview hoặc Studio, dùng Studio để chỉnh rewrite và layout, export hoặc render project hoàn tất, rồi báo path MP4 đã kiểm cùng duration và dimensions từ ffprobe."
    },
    {
      "labelEn": "Existing project render",
      "labelVi": "Render project sẵn có",
      "command": "/ak:html-video render project prj_123 to ./plans/launch/visuals/launch-proof.mp4 with stream progress",
      "whenEn": "Use when an html-video project already exists and the task is to render it with an explicit output path.",
      "whenVi": "Dùng khi project html-video đã tồn tại và nhiệm vụ là render với output path rõ ràng.",
      "expectedEn": "Shows or confirms the project and template, runs project-render with stream progress and the requested output path, then treats ffprobe duration and expected dimensions as the completion proof.",
      "expectedVi": "Hiển thị hoặc xác nhận project và template, chạy project-render với stream progress và output path đã yêu cầu, rồi dùng duration và dimensions đúng từ ffprobe làm proof hoàn tất."
    }
  ],
  "reportOutput": {
    "titleEn": "Rendered video proof",
    "titleVi": "Bằng chứng video đã render",
    "patternEn": "Project id/path, template, preview html_path, MP4 output path, ffprobe duration and dimensions.",
    "patternVi": "Project id/path, template, preview html_path, path MP4 output, duration và dimensions từ ffprobe.",
    "locationEn": "assets/videos/<slug>.mp4 for final simple projects; plans/<plan-slug>/visuals/ for proof artifacts; tmp/html-video/ for scratch.",
    "locationVi": "assets/videos/<slug>.mp4 cho project đơn giản; plans/<plan-slug>/visuals/ cho proof artifact; tmp/html-video/ cho scratch.",
    "descEn": "A verified MP4 path is the deliverable; temporary preview state is not the final proof.",
    "descVi": "Path MP4 đã kiểm chứng là deliverable; trạng thái preview tạm không phải proof cuối."
  }
};

export default data;

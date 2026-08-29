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
      "titleEn": "Pin brief",
      "titleVi": "Khóa brief",
      "descEn": "Before creating anything, capture audience, goal, duration, aspect ratio, assets or URLs, template preference, output path, and draft-versus-polished target.",
      "descVi": "Trước khi tạo, chốt audience, goal, duration, aspect ratio, asset hoặc URL, template mong muốn, output path và mức draft hay polished."
    },
    {
      "number": 3,
      "titleEn": "Diagnose setup",
      "titleVi": "Chẩn đoán setup",
      "descEn": "Prefer a global html-video binary; otherwise use a source checkout without vendoring upstream into the user project, then run html_video doctor and list-engines.",
      "descVi": "Ưu tiên binary html-video global; nếu không có thì dùng source checkout mà không vendor upstream vào project user, rồi chạy html_video doctor và list-engines."
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
    "contentEn": "The skill’s proof requires ffprobe to report nonzero duration and expected dimensions; do not treat a render command alone as completion.",
    "contentVi": "Bằng chứng hoàn tất cần ffprobe báo duration khác 0 và dimension đúng; chỉ chạy lệnh render chưa đủ để coi là xong."
  },
  "corePrinciplesEn": [
    "HTML-first video work starts with a pinned brief, not an immediate render.",
    "Inspect templates before choosing; empty variable schemas require Studio or project editing.",
    "Do not commit large generated MP4 files unless the user explicitly wants them versioned."
  ],
  "corePrinciplesVi": [
    "Video HTML-first bắt đầu bằng brief đã chốt, không render ngay.",
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
      "name": "search-templates",
      "type": "tool"
    },
    {
      "name": "project-preview",
      "type": "tool"
    },
    {
      "name": "studio",
      "type": "tool"
    },
    {
      "name": "ffprobe",
      "type": "tool"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Product promo brief",
      "labelVi": "Brief promo sản phẩm",
      "command": "/ak:html-video short product promo for a developer tool, 16:9, draft proof to ./assets/videos/agentkit-promo.mp4",
      "whenEn": "You need a local MP4 from an HTML-video template.",
      "whenVi": "Khi cần MP4 local từ template html-video.",
      "expectedEn": "Pins the brief, diagnoses setup, searches and inspects templates, previews, renders, and verifies the MP4.",
      "expectedVi": "Chốt brief, chẩn đoán setup, tìm/inspect template, preview, render và kiểm MP4.",
      "recommended": true
    },
    {
      "labelEn": "Use source URL",
      "labelVi": "Dùng URL nguồn",
      "command": "/ak:html-video create a 30 second explainer from https://example.com/article using a clean social clip template",
      "whenEn": "The video should summarize a source URL into a local HTML-first clip.",
      "whenVi": "Khi video cần tóm tắt URL nguồn thành clip HTML-first local.",
      "expectedEn": "Treats the URL as source material, selects a template, and keeps generated scratch/output paths organized.",
      "expectedVi": "Xem URL là tư liệu nguồn, chọn template và tổ chức path scratch/output rõ ràng."
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

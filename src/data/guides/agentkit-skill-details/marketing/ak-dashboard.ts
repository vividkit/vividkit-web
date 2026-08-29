import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-dashboard",
  command: "/ak:dashboard",
  kit: 'marketer',
  header: {
    titleEn: "Marketing Dashboard launcher",
    titleVi: "Bộ khởi chạy Marketing Dashboard",
    taglineEn: "Launches, builds, stops, and checks a Vue 3 + Hono marketing dashboard for campaigns, content, assets, and AI automation recipes.",
    taglineVi: "Khởi chạy, build, dừng và kiểm tra dashboard marketing Vue 3 + Hono cho campaign, content, asset và automation recipe bằng AI.",
  },
  processFlow: [
    { number: 1, titleEn: "Parse mode", titleVi: "Đọc mode", descEn: "Read the optional mode: dev by default, prod, build, stop, or check.", descVi: "Đọc mode tùy chọn: mặc định dev, hoặc prod, build, stop hay check." },
    { number: 2, titleEn: "Start dev", titleVi: "Chạy dev", descEn: "Launch frontend HMR and Hono API for local dashboard development.", descVi: "Khởi chạy frontend HMR và Hono API để phát triển dashboard local." },
    { number: 3, titleEn: "Build production", titleVi: "Build production", descEn: "Use build mode when production assets must be generated before serving.", descVi: "Dùng build mode khi cần tạo asset production trước khi serve." },
    { number: 4, titleEn: "Serve production", titleVi: "Serve production", descEn: "Use prod mode to serve the built Vue app from the API server.", descVi: "Dùng prod mode để server API phục vụ app Vue đã build." },
    { number: 5, titleEn: "Check health", titleVi: "Kiểm tra health", descEn: "Use check to inspect Marketing Dashboard server status and health endpoints.", descVi: "Dùng check để xem trạng thái server Marketing Dashboard và các health endpoint." },
    { number: 6, titleEn: "Use dashboard", titleVi: "Dùng dashboard", descEn: "Work with campaign board, content library, asset gallery, and automation panel recipes.", descVi: "Làm việc với campaign board, content library, asset gallery và các recipe trong automation panel." },
    { number: 7, titleEn: "Store locally", titleVi: "Lưu local", descEn: "Keep dashboard data in the local SQLite database and API key through Settings or sessionStorage.", descVi: "Giữ dữ liệu dashboard trong SQLite local và API key qua Settings hoặc sessionStorage." },
    { number: 8, titleEn: "Stop servers", titleVi: "Dừng server", descEn: "Use stop when development or production servers are no longer needed.", descVi: "Dùng stop khi không còn cần server dev hoặc production." },
  ],
  corePrinciplesEn: [
    "Use dev mode for HMR and production mode only after a build exists.",
    "Treat the dashboard as the visual operating surface for campaigns, content, assets, and recipes.",
    "Remember that data is local SQLite and API access is configured through the dashboard settings/session.",
  ],
  corePrinciplesVi: [
    "Dùng dev mode cho HMR và chỉ dùng production mode sau khi đã build.",
    "Xem dashboard như bề mặt vận hành trực quan cho campaign, content, asset và recipe.",
    "Nhớ rằng dữ liệu nằm trong SQLite local và quyền API được cấu hình qua settings/session của dashboard.",
  ],
  expertiseAreasEn: ["Vue 3 frontend", "Hono API", "Campaign board", "Content library", "Asset gallery", "Automation recipes", "SQLite local data"],
  expertiseAreasVi: ["Frontend Vue 3", "API Hono", "Campaign board", "Content library", "Asset gallery", "Automation recipe", "Dữ liệu SQLite local"],
  promptExamples: [
    { labelEn: "Start default", labelVi: "Chạy mặc định", command: "/ak:dashboard", whenEn: "Use for the default development dashboard with HMR.", whenVi: "Dùng để chạy dashboard dev mặc định có HMR.", expectedEn: "Frontend on localhost:5173 and API on localhost:3457.", expectedVi: "Frontend ở localhost:5173 và API ở localhost:3457.", recommended: true },
    { labelEn: "Build", labelVi: "Build", command: "/ak:dashboard build", whenEn: "Use before serving optimized production assets.", whenVi: "Dùng trước khi serve asset production đã tối ưu.", expectedEn: "Production build artifacts for the dashboard.", expectedVi: "Artifact build production cho dashboard." },
    { labelEn: "Production", labelVi: "Production", command: "/ak:dashboard prod", whenEn: "Use after build when the API should serve the app.", whenVi: "Dùng sau build khi API cần serve app.", expectedEn: "Application served from localhost:3457.", expectedVi: "Ứng dụng được serve từ localhost:3457." },
    { labelEn: "Check status", labelVi: "Kiểm tra trạng thái", command: "/ak:dashboard check", whenEn: "Use to inspect whether dashboard services are running.", whenVi: "Dùng để kiểm tra dashboard service có đang chạy không.", expectedEn: "Server status from the check reference.", expectedVi: "Trạng thái server từ tài liệu check." },
    { labelEn: "Stop", labelVi: "Dừng", command: "/ak:dashboard stop", whenEn: "Use when dashboard servers should be stopped.", whenVi: "Dùng khi cần dừng các server dashboard.", expectedEn: "Running dashboard servers are stopped.", expectedVi: "Các server dashboard đang chạy được dừng lại." },
  ],
  skillStack: [
    { name: "marketing-dashboard", type: "skill" },
    { name: "Vue 3", type: "tool" },
    { name: "Hono", type: "tool" },
    { name: "SQLite", type: "tool" },
  ],
};

export default data;

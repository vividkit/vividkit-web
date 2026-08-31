import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-dashboard",
  command: "/ak:dashboard",
  kit: 'marketer',
  header: {
    titleEn: '/ak:dashboard — Marketing Dashboard launcher',
    titleVi: '/ak:dashboard — Bộ khởi chạy Marketing Dashboard',
    taglineEn: "Launches, builds, stops, and checks the Vue 3 + Hono marketing-dashboard app. Current product surface is Assets, Brand, and Settings — not campaign, content, or AI automation features.",
    taglineVi: "Khởi chạy, build, dừng và kiểm tra app marketing-dashboard Vue 3 + Hono. Bề mặt hiện tại là Assets, Brand và Settings — không phải campaign, content hay AI automation.",
  },
  processFlow: [
    { number: 1, titleEn: "Parse mode", titleVi: "Đọc mode", descEn: "Read the optional mode: dev by default, prod, build, stop, or check.", descVi: "Đọc mode tùy chọn: mặc định dev, hoặc prod, build, stop hay check." },
    { number: 2, titleEn: "Start dev", titleVi: "Chạy dev", descEn: "Launch frontend HMR and Hono API for local dashboard development.", descVi: "Khởi chạy frontend HMR và Hono API để phát triển dashboard local." },
    { number: 3, titleEn: "Build production", titleVi: "Build production", descEn: "Use build mode when production assets must be generated before serving.", descVi: "Dùng build mode khi cần tạo asset production trước khi serve." },
    { number: 4, titleEn: "Serve production", titleVi: "Serve production", descEn: "Use prod mode to serve the built Vue app from the API server.", descVi: "Dùng prod mode để server API phục vụ app Vue đã build." },
    { number: 5, titleEn: "Check health", titleVi: "Kiểm tra health", descEn: "Use check to inspect Marketing Dashboard server status and health endpoints.", descVi: "Dùng check để xem trạng thái server Marketing Dashboard và các health endpoint." },
    { number: 6, titleEn: "Use dashboard", titleVi: "Dùng dashboard", descEn: "Use Assets, Brand, and Settings only. The launcher feature list is not product authority; campaign boards, content generation, automation recipes, and AI endpoints are not implemented.", descVi: "Chỉ dùng Assets, Brand và Settings. Danh sách tính năng trên launcher không phải nguồn mô tả sản phẩm; campaign board, sinh content, automation recipe và AI endpoint chưa được triển khai." },
    { number: 7, titleEn: "Store locally", titleVi: "Lưu local", descEn: "Keep dashboard data in the local SQLite database and API key through Settings or sessionStorage.", descVi: "Giữ dữ liệu dashboard trong SQLite local và API key qua Settings hoặc sessionStorage." },
    { number: 8, titleEn: "Stop servers", titleVi: "Dừng server", descEn: "Use stop when development or production servers are no longer needed.", descVi: "Dùng stop khi không còn cần server dev hoặc production." },
  ],
  corePrinciplesEn: [
    "Use dev mode for HMR and production mode only after a build exists.",
    "Current app surface is Assets, Brand, and Settings; do not describe unimplemented campaign, content, or AI features as live.",
    "Remember that data is local SQLite and API access is configured through the dashboard settings/session.",
  ],
  corePrinciplesVi: [
    "Dùng dev mode cho HMR và chỉ dùng production mode sau khi đã build.",
    "Bề mặt hiện tại là Assets, Brand và Settings; không mô tả campaign, content hay AI chưa triển khai như tính năng đang có.",
    "Nhớ rằng dữ liệu nằm trong SQLite local và quyền API được cấu hình qua settings/session của dashboard.",
  ],
  expertiseAreasEn: ["Vue 3 frontend", "Hono API", "Assets", "Brand", "Settings", "SQLite local data"],
  expertiseAreasVi: ["Frontend Vue 3", "API Hono", "Assets", "Brand", "Settings", "Dữ liệu SQLite local"],
  promptExamples: [
    { labelEn: "Start default", labelVi: "Chạy mặc định", command: "/ak:dashboard",
      commandVi: '/ak:dashboard', whenEn: "Use for the default development dashboard with HMR.", whenVi: "Dùng để chạy dashboard dev mặc định có HMR.", expectedEn: "Frontend on localhost:5173 and API on localhost:3457.", expectedVi: "Frontend ở localhost:5173 và API ở localhost:3457.", recommended: true },
    { labelEn: "Build", labelVi: "Build", command: "/ak:dashboard build",
      commandVi: '/ak:dashboard build', whenEn: "Use before serving optimized production assets.", whenVi: "Dùng trước khi serve asset production đã tối ưu.", expectedEn: "Production build artifacts for the dashboard.", expectedVi: "Artifact build production cho dashboard." },
    { labelEn: "Production", labelVi: "Production", command: "/ak:dashboard prod",
      commandVi: '/ak:dashboard prod', whenEn: "Use after build when the API should serve the app.", whenVi: "Dùng sau build khi API cần serve app.", expectedEn: "Application served from localhost:3457.", expectedVi: "Ứng dụng được serve từ localhost:3457." },
    { labelEn: "Check status", labelVi: "Kiểm tra trạng thái", command: "/ak:dashboard check",
      commandVi: '/ak:dashboard check', whenEn: "Use to inspect whether dashboard services are running.", whenVi: "Dùng để kiểm tra dashboard service có đang chạy không.", expectedEn: "Server status from the check reference.", expectedVi: "Trạng thái server từ tài liệu check." },
    { labelEn: "Stop", labelVi: "Dừng", command: "/ak:dashboard stop",
      commandVi: '/ak:dashboard stop', whenEn: "Use when dashboard servers should be stopped.", whenVi: "Dùng khi cần dừng các server dashboard.", expectedEn: "Running dashboard servers are stopped.", expectedVi: "Các server dashboard đang chạy được dừng lại." },
  ],
  skillStack: [
    { name: "marketing-dashboard", type: "skill" },
    { name: "Vue 3", type: "tool" },
    { name: "Hono", type: "tool" },
    { name: "SQLite", type: "tool" },
  ],
};

export default data;

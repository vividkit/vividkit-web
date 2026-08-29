import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-frontend-development",
  command: "/ak:frontend-development",
  kit: "engineer",
  header: {
    titleEn: "/ak:frontend-development — Modern React and TypeScript UI",
    titleVi: "/ak:frontend-development — Frontend React và TypeScript",
    taglineEn: "Modern React and TypeScript frontend implementation with Suspense, lazy loading, TanStack Query/Router, MUI v7, performance, and file organization patterns.",
    taglineVi: "Triển khai frontend React và TypeScript hiện đại với Suspense, lazy loading, TanStack Query/Router, MUI v7, hiệu năng và pattern tổ chức file.",
  },
  hardGate: {
    type: "warning",
    titleEn: "NO EARLY LOADING RETURNS",
    titleVi: "KHÔNG RETURN LOADING SỚM",
    contentEn: "Use SuspenseLoader and Suspense-based data fetching. Avoid early loading-spinner returns that cause layout shift. Use useMuiSnackbar, never react-toastify.",
    contentVi: "Dùng SuspenseLoader và data fetching dựa trên Suspense. Tránh return loading spinner sớm gây layout shift. Dùng useMuiSnackbar, không dùng react-toastify.",
  },
  processFlow: [
    { number: 1, titleEn: "Classify Work", titleVi: "Phân loại việc", descEn: "Decide whether the request is a component, page, feature, data-fetching path, route, styling task, performance pass, or TypeScript cleanup.", descVi: "Xác định yêu cầu là component, page, feature, data fetching, route, styling, tối ưu hiệu năng hay dọn TypeScript." },
    { number: 2, titleEn: "Load Topic Guide", titleVi: "Nạp guide đúng chủ đề", descEn: "Read the relevant resource: component patterns, data fetching, file organization, styling, routing, loading/error states, performance, TypeScript, common patterns, or examples.", descVi: "Đọc resource liên quan: component patterns, data fetching, tổ chức file, styling, routing, loading/error states, performance, TypeScript, common patterns hoặc ví dụ." },
    { number: 3, titleEn: "Plan Structure", titleVi: "Lập cấu trúc", descEn: "For features, create features/name with api, components, hooks, helpers, types, route, lazy components, Suspense boundaries, and public index exports.", descVi: "Với feature, tạo features/name gồm api, components, hooks, helpers, types, route, component lazy, Suspense boundary và index export công khai." },
    { number: 4, titleEn: "Build Component", titleVi: "Xây component", descEn: "Use React.FC<Props>, typed props, named const plus default export, aliases, and lazy loading for heavy components.", descVi: "Dùng React.FC<Props>, props có type, named const kèm default export, alias import và lazy loading cho component nặng." },
    { number: 5, titleEn: "Fetch with Suspense", titleVi: "Fetch bằng Suspense", descEn: "Use useSuspenseQuery, cache-first strategy, feature API service files, and route paths without an unnecessary /api prefix.", descVi: "Dùng useSuspenseQuery, chiến lược cache-first, file API service theo feature và route path không thêm tiền tố /api dư thừa." },
    { number: 6, titleEn: "Style with MUI v7", titleVi: "Style bằng MUI v7", descEn: "Use sx with SxProps<Theme>, inline styles under 100 lines, separate .styles.ts above 100 lines, and Grid size syntax.", descVi: "Dùng sx với SxProps<Theme>, style inline dưới 100 dòng, tách .styles.ts trên 100 dòng và cú pháp Grid size của MUI v7." },
    { number: 7, titleEn: "Handle States", titleVi: "Xử lý trạng thái", descEn: "Wrap content in SuspenseLoader, use useMuiSnackbar for feedback, and avoid layout-shifting loading branches.", descVi: "Bọc nội dung bằng SuspenseLoader, dùng useMuiSnackbar cho phản hồi và tránh nhánh loading làm lệch layout." },
    { number: 8, titleEn: "Optimize Carefully", titleVi: "Tối ưu có chọn lọc", descEn: "Apply useMemo, useCallback, React.memo, debounced search, and effect cleanup only where data flow or child props justify it.", descVi: "Áp dụng useMemo, useCallback, React.memo, debounce search và cleanup effect chỉ khi data flow hoặc prop truyền xuống thật sự cần." },
    { number: 9, titleEn: "Verify Contract", titleVi: "Xác minh contract", descEn: "Confirm route, rendering, loading/error behavior, types, imports, file organization, and observable user interaction.", descVi: "Xác nhận route, render, hành vi loading/error, type, import, tổ chức file và tương tác user quan sát được." },
  ],
  corePrinciplesEn: [
    "Suspense-based data fetching is the primary pattern.",
    "Feature code lives under features; components is for truly reusable pieces.",
    "MUI v7 uses Grid size, sx, and typed theme-aware styles.",
    "Strict TypeScript, type imports, and explicit boundaries prevent drift.",
    "Performance hooks must serve actual data-flow needs, not ritual optimization.",
  ],
  corePrinciplesVi: [
    "Data fetching dựa trên Suspense là pattern chính.",
    "Code theo domain nằm trong features; components chỉ dành cho phần thật sự tái sử dụng.",
    "MUI v7 dùng Grid size, sx và style có type theo theme.",
    "TypeScript strict, type import và boundary rõ giúp tránh trôi contract.",
    "Hook tối ưu hiệu năng phải phục vụ nhu cầu data-flow thật, không làm theo nghi thức.",
  ],
  expertiseAreasEn: [
    "React.FC components, lazy loading, SuspenseLoader, and component export patterns",
    "TanStack Query useSuspenseQuery and API service layers",
    "TanStack Router folder-based routes and loaders",
    "MUI v7 sx styling, Grid syntax, theme types, and style-file thresholds",
    "TypeScript strictness, forms with Zod, DataGrid wrappers, dialogs, auth, mutations, and cache invalidation",
  ],
  expertiseAreasVi: [
    "Component React.FC, lazy loading, SuspenseLoader và pattern export component",
    "TanStack Query useSuspenseQuery và tầng API service",
    "Route theo folder bằng TanStack Router và loader",
    "Style MUI v7 bằng sx, cú pháp Grid, type theme và ngưỡng tách file style",
    "TypeScript strict, form với Zod, DataGrid wrapper, dialog, auth, mutation và invalidation cache",
  ],
  workflowModes: [
    { flag: "component", modeEn: "Component", modeVi: "Component", research: "component-patterns.md", redTeam: "Props/lazy/export checks", validation: "Rendered state", cookFlag: "component/page" },
    { flag: "feature", modeEn: "Feature", modeVi: "Feature", research: "file-organization.md", redTeam: "Domain boundaries", validation: "Route + public API", cookFlag: "features/name" },
    { flag: "data fetching", modeEn: "Data", modeVi: "Dữ liệu", research: "data-fetching.md", redTeam: "Suspense/cache/API service", validation: "useSuspenseQuery behavior", cookFlag: "TanStack Query" },
    { flag: "styling", modeEn: "MUI styling", modeVi: "Style MUI", research: "styling-guide.md", redTeam: "sx/Grid/style threshold", validation: "Visual state", cookFlag: "MUI v7" },
    { flag: "performance", modeEn: "Performance", modeVi: "Hiệu năng", research: "performance.md", redTeam: "Memoization justified", validation: "Observable improvement", cookFlag: "useMemo/useCallback" },
  ],
  skillStack: [
    { name: "React", type: "tool" },
    { name: "TypeScript", type: "tool" },
    { name: "TanStack Query", type: "tool" },
    { name: "TanStack Router", type: "tool" },
    { name: "MUI v7", type: "tool" },
    { name: "SuspenseLoader", type: "tool" },
  ],
  promptExamples: [
    { labelEn: "New feature", labelVi: "Feature mới", command: "/ak:frontend-development build a users management feature", whenEn: "A feature needs domain folders, API service, route, components, hooks, and types.", whenVi: "Feature cần folder domain, API service, route, component, hook và type.", expectedEn: "Creates the feature structure, uses lazy routes and Suspense boundaries, and exports the public API.", expectedVi: "Tạo cấu trúc feature, dùng route lazy và Suspense boundary, rồi export API công khai.", recommended: true },
    { labelEn: "Data component", labelVi: "Component dữ liệu", command: "/ak:frontend-development create a Suspense data table for orders", whenEn: "A component fetches server data and needs stable loading/error behavior.", whenVi: "Component fetch dữ liệu server và cần loading/error ổn định.", expectedEn: "Uses useSuspenseQuery with a feature API service and SuspenseLoader instead of early loading returns.", expectedVi: "Dùng useSuspenseQuery với API service theo feature và SuspenseLoader thay vì return loading sớm." },
    { labelEn: "MUI styling", labelVi: "Style MUI", command: "/ak:frontend-development style the dashboard cards with MUI v7", whenEn: "The task is visual implementation inside an existing MUI stack.", whenVi: "Tác vụ là triển khai giao diện trong stack MUI hiện có.", expectedEn: "Uses sx, SxProps<Theme>, the style-file threshold, and Grid size syntax where needed.", expectedVi: "Dùng sx, SxProps<Theme>, ngưỡng tách file style và cú pháp Grid size khi cần." },
  ],
};

export default data;

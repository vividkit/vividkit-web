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
  invocation: {
    syntax: "/ak:frontend-development [component or feature]",
    arguments: [
      { token: "[component or feature]", titleEn: "Component or feature", titleVi: "Component hoặc feature", descEn: "Natural-language React/TypeScript implementation request. Include the user-visible outcome, existing component or data contracts, required states, responsive and accessibility boundaries, allowed files or dependencies, and focused verification target; the Skill defines no default stack, flags, or named modes.", descVi: "Yêu cầu triển khai React/TypeScript bằng ngôn ngữ tự nhiên. Nêu outcome người dùng thấy được, contract component hoặc dữ liệu hiện có, state bắt buộc, ranh giới responsive và accessibility, tệp hoặc dependency được phép và mục tiêu xác minh tập trung; Skill không định nghĩa stack mặc định, flag hay mode có tên.", required: true, exampleCommand: "/ak:frontend-development \"Add an order-status filter to the existing React page. Reuse its query keys, router, design tokens, and loading boundary; cover empty, error, keyboard, and mobile states; do not install packages or publish.\"" },
    ],
  },
  skillStack: [
    { name: "React", type: "tool" },
    { name: "TypeScript", type: "tool" },
    { name: "TanStack Query", type: "tool" },
    { name: "TanStack Router", type: "tool" },
    { name: "MUI v7", type: "tool" },
    { name: "SuspenseLoader", type: "tool" },
  ],
  promptExamples: [
    { labelEn: "New feature slice", labelVi: "Lát cắt feature mới", command: "/ak:frontend-development \"Build an account-settings feature with route, typed API service, feature components, hooks, helpers, types, lazy loading, and Suspense boundaries.\"", whenEn: "Use when creating a React/TypeScript feature that needs domain folders, route wiring, and a public feature API.", whenVi: "Dùng khi tạo feature React/TypeScript cần folder domain, nối route và API công khai của feature.", expectedEn: "Sets up the features/{name} structure from the Skill checklist, adds the route, lazy-loads heavy UI, wraps loading with SuspenseLoader, and exports the feature boundary.", expectedVi: "Thiết lập cấu trúc features/{name} theo checklist của Skill, thêm route, lazy-load UI nặng, bọc loading bằng SuspenseLoader và export boundary của feature.", recommended: true },
    { labelEn: "Suspense data component", labelVi: "Component dữ liệu Suspense", command: "/ak:frontend-development \"Create an orders table that fetches with TanStack Query, uses the existing apiClient service layer, and handles loading and errors without early spinner returns.\"", whenEn: "Use when a component fetches server data and must replace isLoading branches with Suspense-based behavior.", whenVi: "Dùng khi component fetch dữ liệu server và phải thay nhánh isLoading bằng hành vi dựa trên Suspense.", expectedEn: "Implements useSuspenseQuery with typed query keys and a feature API service, keeps layout stable through SuspenseLoader, and routes user feedback through useMuiSnackbar.", expectedVi: "Triển khai useSuspenseQuery với query key có type và API service theo feature, giữ layout ổn định bằng SuspenseLoader và đưa phản hồi user qua useMuiSnackbar." },
    { labelEn: "TanStack route", labelVi: "Route TanStack", command: "/ak:frontend-development \"Add a /reports route that lazy-loads the Reports page, uses createFileRoute, and returns breadcrumb data from the loader.\"", whenEn: "Use when setting up folder-based TanStack Router pages in an existing React app.", whenVi: "Dùng khi thiết lập page TanStack Router theo folder trong app React hiện có.", expectedEn: "Creates the route file in the Skill’s routes/{name}/index.tsx pattern, lazy-loads the feature page, and keeps loader metadata such as breadcrumbs explicit.", expectedVi: "Tạo file route theo pattern routes/{name}/index.tsx của Skill, lazy-load page của feature và giữ metadata loader như breadcrumb rõ ràng." },
    { labelEn: "MUI styling pass", labelVi: "Lượt style MUI", command: "/ak:frontend-development \"Refactor the dashboard cards to MUI v7 sx styles, typed SxProps<Theme>, and Grid size syntax without changing product behavior.\"", whenEn: "Use when the work is implementation inside a MUI v7 stack rather than visual concept selection.", whenVi: "Dùng khi công việc là triển khai trong stack MUI v7, không phải chọn concept thị giác.", expectedEn: "Uses the Skill’s styling guide: sx as the primary method, SxProps<Theme> for type-safe theme access, separate .styles.ts only past the size threshold, and Grid size props.", expectedVi: "Dùng styling guide của Skill: sx là phương thức chính, SxProps<Theme> để truy cập theme có type, chỉ tách .styles.ts khi vượt ngưỡng và dùng prop Grid size." },
  ],
};

export default data;

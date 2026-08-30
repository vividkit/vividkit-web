import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-react-best-practices",
  "command": "/ak:react-best-practices",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:react-best-practices",
    "titleVi": "/ak:react-best-practices",
    "taglineEn": "Apply Vercel Engineering React and Next.js performance patterns across component optimization, rendering performance, bundle analysis, and data fetching.",
    "taglineVi": "Áp dụng các mẫu tối ưu hiệu năng React và Next.js của Vercel Engineering cho component, render, phân tích bundle và data fetching."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Match the React surface",
      "titleVi": "Xác định bề mặt React",
      "descEn": "Start from the component, page, data-fetching pattern, bundle issue, or refactor target named by the user.",
      "descVi": "Bắt đầu từ component, page, mẫu data fetching, vấn đề bundle hoặc mục tiêu refactor mà người dùng nêu."
    },
    {
      "number": 2,
      "titleEn": "Prioritize by rule category",
      "titleVi": "Ưu tiên theo nhóm rule",
      "descEn": "Apply the SKILL.md priority order: waterfalls and bundle size first, then server performance, client fetching, rerenders, rendering, JavaScript, and advanced patterns.",
      "descVi": "Áp dụng thứ tự ưu tiên trong SKILL.md: waterfall và bundle trước, rồi hiệu năng server, fetch phía client, rerender, rendering, JavaScript và mẫu nâng cao."
    },
    {
      "number": 3,
      "titleEn": "Eliminate waterfalls",
      "titleVi": "Loại bỏ waterfall",
      "descEn": "Move awaits into the branches that need them, start independent promises early, use Promise.all, handle partial dependencies, and stream with Suspense boundaries.",
      "descVi": "Đưa await vào nhánh cần dùng, khởi động promise độc lập sớm, dùng Promise.all, xử lý phụ thuộc một phần và stream bằng Suspense boundary."
    },
    {
      "number": 4,
      "titleEn": "Shrink client work",
      "titleVi": "Giảm việc phía client",
      "descEn": "Avoid barrel imports, dynamically load heavy components, defer third-party code, conditionally load features, and preload on hover or focus when it improves perceived speed.",
      "descVi": "Tránh barrel import, tải động component nặng, hoãn mã bên thứ ba, tải feature có điều kiện và preload khi hover hoặc focus nếu cải thiện cảm nhận tốc độ."
    },
    {
      "number": 5,
      "titleEn": "Tighten data flow",
      "titleVi": "Siết luồng dữ liệu",
      "descEn": "Use React.cache or LRU caching for server work, parallelize server fetches, serialize less into client components, and deduplicate client requests or global listeners.",
      "descVi": "Dùng React.cache hoặc LRU cache cho việc server, song song hóa fetch server, truyền ít dữ liệu hơn vào client component và khử lặp request hoặc listener toàn cục phía client."
    },
    {
      "number": 6,
      "titleEn": "Reduce render cost",
      "titleVi": "Giảm chi phí render",
      "descEn": "Shape subscriptions, memoize expensive subtrees, stabilize callbacks, lazy-initialize state, transition non-urgent updates, and apply rendering rules such as content-visibility or static JSX hoisting.",
      "descVi": "Định hình subscription, memo hóa cây con tốn kém, ổn định callback, khởi tạo state lười, chuyển update không khẩn cấp và áp dụng rule rendering như content-visibility hoặc hoist JSX tĩnh."
    },
    {
      "number": 7,
      "titleEn": "Use rule files for examples",
      "titleVi": "Dùng rule file làm ví dụ",
      "descEn": "Pull concrete incorrect and correct code patterns from the individual rule files or the full compiled guide before recommending refactors.",
      "descVi": "Lấy mẫu code sai và đúng cụ thể từ từng rule file hoặc guide đã biên dịch đầy đủ trước khi đề xuất refactor."
    }
  ],
  "corePrinciplesEn": [
    "Follow the eight priority categories from waterfalls through advanced patterns",
    "Treat bundle size, server boundaries, and data serialization as React performance work",
    "Optimize rerenders by subscription shape and update urgency before adding memoization",
    "Ground recommendations in the individual rule files' incorrect and correct examples"
  ],
  "corePrinciplesVi": [
    "Theo tám nhóm ưu tiên từ waterfall đến các mẫu nâng cao",
    "Xem kích thước bundle, ranh giới server và serialize dữ liệu là một phần của hiệu năng React",
    "Tối ưu rerender bằng hình dạng subscription và độ khẩn cấp của update trước khi thêm memoization",
    "Neo đề xuất vào ví dụ sai và đúng trong từng rule file"
  ],
  "expertiseAreasEn": [
    "React component optimization",
    "Next.js pages and data fetching",
    "Async waterfall removal",
    "Bundle size analysis",
    "Server and client data deduplication",
    "Rendering and JavaScript hot-path performance"
  ],
  "expertiseAreasVi": [
    "Tối ưu component React",
    "Page và data fetching trong Next.js",
    "Loại bỏ async waterfall",
    "Phân tích kích thước bundle",
    "Khử lặp dữ liệu phía server và client",
    "Hiệu năng rendering và đường nóng JavaScript"
  ],
  "promptExamples": [
    {
      "labelEn": "Default component review",
      "labelVi": "Rà soát component mặc định",
      "command": "/ak:react-best-practices ProductGrid",
      "whenEn": "Use when writing, reviewing, or refactoring a React component for performance.",
      "whenVi": "Dùng khi viết, rà soát hoặc refactor một component React vì hiệu năng.",
      "expectedEn": "The skill checks the named component against the prioritized Vercel rule categories and returns concrete refactor guidance backed by rule examples.",
      "expectedVi": "Skill kiểm tra component đã nêu theo các nhóm rule Vercel được ưu tiên và trả về hướng refactor cụ thể dựa trên ví dụ trong rule.",
      "recommended": true
    },
    {
      "labelEn": "Next.js data fetching",
      "labelVi": "Data fetching trong Next.js",
      "command": "/ak:react-best-practices dashboard page data fetching",
      "whenEn": "Use for async waterfalls, server-side fetching, client request deduplication, or slow Next.js page loads.",
      "whenVi": "Dùng cho async waterfall, fetch phía server, khử lặp request phía client hoặc page Next.js tải chậm.",
      "expectedEn": "The skill prioritizes waterfall removal, server fetch parallelization, cache choices, serialization limits, and client-side SWR or listener deduplication.",
      "expectedVi": "Skill ưu tiên loại bỏ waterfall, song song hóa fetch server, chọn cache, giới hạn serialize dữ liệu và khử lặp SWR hoặc listener phía client."
    },
    {
      "labelEn": "Bundle analysis",
      "labelVi": "Phân tích bundle",
      "command": "/ak:react-best-practices checkout bundle size",
      "whenEn": "Use when a React or Next.js route ships too much JavaScript or loads heavy features too early.",
      "whenVi": "Dùng khi route React hoặc Next.js gửi quá nhiều JavaScript hoặc tải feature nặng quá sớm.",
      "expectedEn": "The skill applies bundle rules for direct imports, dynamic imports, deferred third-party scripts, conditional loading, and preloading for perceived speed.",
      "expectedVi": "Skill áp dụng rule bundle cho import trực tiếp, dynamic import, hoãn script bên thứ ba, tải có điều kiện và preload để tăng tốc độ cảm nhận."
    },
    {
      "labelEn": "Rendering hot path",
      "labelVi": "Đường nóng render",
      "command": "/ak:react-best-practices activity feed rendering performance",
      "whenEn": "Use when rerenders, hydration behavior, long lists, SVG work, or JavaScript loops make interactions feel slow.",
      "whenVi": "Dùng khi rerender, hành vi hydration, danh sách dài, xử lý SVG hoặc vòng lặp JavaScript làm tương tác chậm.",
      "expectedEn": "The skill combines rerender, rendering, JavaScript, and advanced rules to suggest subscription shaping, lazy state, transitions, content-visibility, hoisting, and loop fixes.",
      "expectedVi": "Skill kết hợp rule rerender, rendering, JavaScript và nâng cao để đề xuất chỉnh subscription, state lười, transition, content-visibility, hoist và sửa vòng lặp."
    }
  ]
};

export default data;

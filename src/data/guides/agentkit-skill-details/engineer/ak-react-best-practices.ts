import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-react-best-practices",
  "command": "/ak:react-best-practices",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:react-best-practices",
    "titleVi": "/ak:react-best-practices",
    "taglineEn": "Apply Vercel-style React and Next.js performance rules across waterfalls, bundles, server rendering, data fetching, rerenders, and JavaScript hot paths.",
    "taglineVi": "Áp dụng quy tắc hiệu năng React/Next.js kiểu Vercel cho waterfall, bundle, server rendering, data fetching, rerender và đường nóng JavaScript."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Identify pressure point",
      "titleVi": "Xác định điểm nghẽn",
      "descEn": "Map the component, page, or pattern to one of the guide's eight priority categories.",
      "descVi": "Gắn component, page hoặc pattern vào một trong tám nhóm ưu tiên của guide."
    },
    {
      "number": 2,
      "titleEn": "Kill waterfalls first",
      "titleVi": "Xử lý waterfall trước",
      "descEn": "Move awaits into branches, start independent promises early, use Promise.all, and stream with Suspense where appropriate.",
      "descVi": "Đưa await vào nhánh thật sự cần, khởi động promise độc lập sớm, dùng Promise.all và stream bằng Suspense khi phù hợp."
    },
    {
      "number": 3,
      "titleEn": "Trim client bundle",
      "titleVi": "Giảm bundle phía client",
      "descEn": "Replace barrel imports, dynamically load heavy components, and defer third-party scripts until needed.",
      "descVi": "Thay import qua barrel, tải động component nặng và hoãn script bên thứ ba đến khi cần."
    },
    {
      "number": 4,
      "titleEn": "Tighten server boundary",
      "titleVi": "Siết ranh giới server",
      "descEn": "Deduplicate server work with React.cache or LRU cache, parallelize fetching, and serialize less into client components.",
      "descVi": "Khử lặp việc server bằng React.cache hoặc LRU cache, song song hóa fetch và truyền ít dữ liệu hơn xuống client component."
    },
    {
      "number": 5,
      "titleEn": "Reduce rerenders",
      "titleVi": "Giảm rerender",
      "descEn": "Use primitive effect dependencies, memoize expensive subtrees, lazy-init state, and transition non-urgent updates.",
      "descVi": "Dùng dependency nguyên thủy cho effect, memo hóa cây con tốn kém, khởi tạo state lười và chuyển update không khẩn cấp sang transition."
    },
    {
      "number": 6,
      "titleEn": "Polish rendering and JS",
      "titleVi": "Tối ưu render và JS",
      "descEn": "Apply content-visibility, hoist static JSX, reduce SVG precision, cache repeated lookups, and combine loops only where it matters.",
      "descVi": "Áp dụng content-visibility, đưa JSX tĩnh ra ngoài, giảm độ chính xác SVG, cache lookup lặp lại và gộp vòng lặp khi thật sự có ích."
    },
    {
      "number": 7,
      "titleEn": "Verify with impact",
      "titleVi": "Kiểm chứng bằng tác động",
      "descEn": "Tie each change to performance impact: load time, bundle size, server latency, hydration stability, or interaction responsiveness.",
      "descVi": "Gắn mỗi thay đổi với tác động hiệu năng: thời gian tải, kích thước bundle, độ trễ server, ổn định hydration hoặc độ phản hồi tương tác."
    }
  ],
  "corePrinciplesEn": [
    "Critical categories come first: async waterfalls and bundle size",
    "Prefer server-side deduplication and smaller client boundaries",
    "Optimize rerenders by subscription shape, not by random memoization",
    "Use the named rule files for concrete before/after patterns"
  ],
  "corePrinciplesVi": [
    "Nhóm nghiêm trọng đi trước: async waterfall và kích thước bundle",
    "Ưu tiên khử lặp phía server và ranh giới client nhỏ hơn",
    "Tối ưu rerender bằng cách chọn dữ liệu subscribe, không memo bừa",
    "Dùng các rule file được đặt tên để lấy mẫu sai/đúng cụ thể"
  ],
  "expertiseAreasEn": [
    "Next.js data fetching",
    "React Server Components",
    "Bundle splitting",
    "SWR request deduplication",
    "Hydration and rendering performance",
    "JavaScript loop hot paths"
  ],
  "expertiseAreasVi": [
    "Data fetching trong Next.js",
    "React Server Components",
    "Tách bundle",
    "Khử lặp request bằng SWR",
    "Hiệu năng hydration và render",
    "Đường nóng vòng lặp JavaScript"
  ],
  "promptExamples": [
    {
      "labelEn": "Component optimization",
      "labelVi": "Tối ưu component",
      "command": "/ak:react-best-practices ProductGrid rerender performance",
      "whenEn": "Use when a React component rerenders or recomputes too often.",
      "whenVi": "Dùng khi component React rerender hoặc tính toán lại quá nhiều.",
      "expectedEn": "Relevant rerender, rendering, and JS rules with concrete refactor direction.",
      "expectedVi": "Các quy tắc rerender, rendering và JS phù hợp kèm hướng refactor cụ thể.",
      "recommended": true
    },
    {
      "labelEn": "Next.js performance review",
      "labelVi": "Rà hiệu năng Next.js",
      "command": "/ak:react-best-practices Next.js dashboard data fetching",
      "whenEn": "Use for async waterfalls, server/client boundaries, or slow page loads.",
      "whenVi": "Dùng cho async waterfall, ranh giới server/client hoặc page tải chậm.",
      "expectedEn": "Prioritized findings starting with waterfalls, bundle, then server/client data flow.",
      "expectedVi": "Danh sách ưu tiên bắt đầu từ waterfall, bundle rồi đến luồng dữ liệu server/client."
    }
  ]
};

export default data;

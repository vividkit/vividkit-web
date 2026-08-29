import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-shopify",
  "command": "/ak:shopify",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:shopify — Shopify Development",
    "titleVi": "/ak:shopify — Phát triển Shopify",
    "taglineEn": "Guides Shopify app, extension, theme, API, Polaris, Liquid, checkout, webhook, and billing work with Shopify CLI-centered workflows.",
    "taglineVi": "Hướng dẫn xây app, extension, theme, API, Polaris, Liquid, checkout, webhook và billing cho Shopify bằng quy trình xoay quanh Shopify CLI."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Pick surface",
      "titleVi": "Chọn bề mặt",
      "descEn": "Decide whether the user needs an app, extension, theme, or combined app plus theme extension.",
      "descVi": "Xác định người dùng cần app, extension, theme hay mô hình kết hợp app với theme extension."
    },
    {
      "number": 2,
      "titleEn": "Prepare CLI",
      "titleVi": "Chuẩn bị CLI",
      "descEn": "Install or verify Shopify CLI before creating apps, extensions, themes, or deployments.",
      "descVi": "Cài hoặc kiểm tra Shopify CLI trước khi tạo app, extension, theme hoặc deploy."
    },
    {
      "number": 3,
      "titleEn": "Initialize project",
      "titleVi": "Khởi tạo dự án",
      "descEn": "Use shopify app init or shopify theme init, then configure scopes, theme choice, and local dev context.",
      "descVi": "Dùng shopify app init hoặc shopify theme init, rồi cấu hình scope, lựa chọn theme và bối cảnh dev cục bộ."
    },
    {
      "number": 4,
      "titleEn": "Add extension point",
      "titleVi": "Thêm điểm mở rộng",
      "descEn": "Generate checkout, admin, POS, customer-account, function, or theme app extension work as needed.",
      "descVi": "Tạo phần mở rộng checkout, admin, POS, customer account, function hoặc theme app extension theo nhu cầu."
    },
    {
      "number": 5,
      "titleEn": "Implement platform patterns",
      "titleVi": "Áp dụng mẫu nền tảng",
      "descEn": "Prefer GraphQL Admin API, Polaris UI, Liquid sections, pagination, rate-limit handling, and minimal access scopes.",
      "descVi": "Ưu tiên GraphQL Admin API, Polaris UI, Liquid section, phân trang, xử lý rate limit và scope truy cập tối thiểu."
    },
    {
      "number": 6,
      "titleEn": "Secure integrations",
      "titleVi": "Bảo mật tích hợp",
      "descEn": "Keep credentials in environment variables, validate webhook signatures, use OAuth/session tokens, and verify GDPR needs.",
      "descVi": "Giữ credential trong biến môi trường, xác thực chữ ký webhook, dùng OAuth/session token và kiểm tra yêu cầu GDPR."
    },
    {
      "number": 7,
      "titleEn": "Test stores",
      "titleVi": "Kiểm thử store",
      "descEn": "Use development stores, multiple plans, mobile responsiveness, accessibility, and extension visibility checks.",
      "descVi": "Dùng development store, nhiều gói store, kiểm tra responsive trên mobile, accessibility và việc extension có hiển thị đúng."
    },
    {
      "number": 8,
      "titleEn": "Deploy safely",
      "titleVi": "Deploy an toàn",
      "descEn": "Run app deploy or theme push/publish only after local preview and version compatibility checks.",
      "descVi": "Chỉ chạy app deploy hoặc theme push/publish sau khi đã xem local preview và kiểm tra tương thích phiên bản."
    }
  ],
  "corePrinciplesEn": [
    "Build the right Shopify surface before writing code",
    "Prefer GraphQL Admin API over REST for new work",
    "Request only the scopes and fields the feature actually needs",
    "Use development stores and Partner Dashboard evidence before deployment"
  ],
  "corePrinciplesVi": [
    "Chọn đúng bề mặt Shopify trước khi viết mã",
    "Ưu tiên GraphQL Admin API thay cho REST cho phần mới",
    "Chỉ xin scope và trường dữ liệu mà tính năng thật sự cần",
    "Dùng development store và bằng chứng từ Partner Dashboard trước khi deploy"
  ],
  "expertiseAreasEn": [
    "Shopify CLI",
    "Admin GraphQL",
    "checkout extensions",
    "Liquid themes",
    "Polaris UI",
    "webhooks and billing"
  ],
  "expertiseAreasVi": [
    "Shopify CLI",
    "Admin GraphQL",
    "extension checkout",
    "theme Liquid",
    "Polaris UI",
    "webhook và billing"
  ],
  "promptExamples": [
    {
      "labelEn": "Checkout extension",
      "labelVi": "Extension checkout",
      "command": "/ak:shopify checkout_ui_extension gift message field",
      "whenEn": "A checkout customization should be built as an extension.",
      "whenVi": "Cần tùy biến checkout bằng extension.",
      "expectedEn": "Explains generation, implementation, local dev, testing, and deploy steps.",
      "expectedVi": "Nêu cách tạo, triển khai, chạy dev, kiểm thử và deploy.",
      "recommended": true
    },
    {
      "labelEn": "Merchant app",
      "labelVi": "App cho merchant",
      "command": "/ak:shopify app product sync with billing",
      "whenEn": "Building a merchant-facing app with data access and paid functionality.",
      "whenVi": "Xây app cho merchant có truy cập dữ liệu và chức năng trả phí.",
      "expectedEn": "Covers app init, access scopes, GraphQL, OAuth, billing, and webhook/security checks.",
      "expectedVi": "Bao gồm init app, access scope, GraphQL, OAuth, billing và kiểm tra webhook/bảo mật."
    },
    {
      "labelEn": "Theme work",
      "labelVi": "Làm theme",
      "command": "/ak:shopify theme product page customization",
      "whenEn": "Custom storefront design or product page changes belong in Liquid/theme work.",
      "whenVi": "Tùy biến giao diện storefront hoặc trang sản phẩm thuộc phần Liquid/theme.",
      "expectedEn": "Uses theme init/dev/pull/push patterns and Liquid performance/accessibility guidance.",
      "expectedVi": "Dùng mẫu theme init/dev/pull/push cùng hướng dẫn hiệu năng và accessibility cho Liquid."
    }
  ],
  "guardrails": [
    {
      "thoughtEn": "REST is fine for a quick feature.",
      "thoughtVi": "Dùng REST cho nhanh cũng được.",
      "realityEn": "New Shopify data work should prefer GraphQL Admin API and request only necessary fields.",
      "realityVi": "Phần dữ liệu Shopify mới nên ưu tiên GraphQL Admin API và chỉ lấy các trường cần thiết.",
      "accent": "blue"
    },
    {
      "thoughtEn": "A broad token avoids permission surprises.",
      "thoughtVi": "Xin token rộng sẽ đỡ lỗi quyền.",
      "realityEn": "The skill requires minimal access scopes, environment-stored credentials, OAuth/session tokens, and webhook signature checks.",
      "realityVi": "Skill yêu cầu scope tối thiểu, credential trong biến môi trường, OAuth/session token và xác thực chữ ký webhook.",
      "accent": "red"
    }
  ]
};

export default data;

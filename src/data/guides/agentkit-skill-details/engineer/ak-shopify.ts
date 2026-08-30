import type { SkillInfographic, SkillInvocation } from '@/data/guides/how-ck-works';

const invocation: SkillInvocation = {
  "syntax": "/ak:shopify [extension-type] [feature]",
  "arguments": [
    {
      "token": "[extension-type]",
      "titleEn": "Shopify surface",
      "titleVi": "Bề mặt Shopify",
      "descEn": "Target surface or extension type, such as app, checkout_ui_extension, admin_action, admin_block, pos_ui_extension, function, theme, or a more specific Shopify target. This chooses the workflow; it does not authorize store sync, deploy, push, or publish.",
      "descVi": "Bề mặt hoặc loại extension đích, như app, checkout_ui_extension, admin_action, admin_block, pos_ui_extension, function, theme hoặc mục tiêu Shopify cụ thể hơn. Đối số này chọn workflow; nó không cấp quyền sync store, deploy, push hoặc publish.",
      "exampleCommand": "/ak:shopify checkout_ui_extension \"Add an optional gift message to the existing app\""
    },
    {
      "token": "[feature]",
      "titleEn": "Feature brief",
      "titleVi": "Brief tính năng",
      "descEn": "Merchant or shopper outcome plus constraints: existing app or theme files, pinned CLI and API versions, store boundary, scopes, webhook, billing, privacy, data-retention needs, tests, and explicit authority for any remote mutation. Keep secrets out of the prompt.",
      "descVi": "Outcome cho merchant hoặc người mua cùng ràng buộc: file app hoặc theme hiện có, phiên bản CLI và API đã pin, ranh giới store, scope, webhook, billing, privacy, nhu cầu lưu dữ liệu, test và quyền rõ ràng cho mọi remote mutation. Không đưa secret vào prompt.",
      "required": true,
      "exampleCommand": "/ak:shopify theme \"Customize the product page in the current Liquid theme without pushing or publishing\""
    }
  ]
};

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
  "invocation": invocation,
  "promptExamples": [
    {
      "labelEn": "Checkout UI extension",
      "labelVi": "Extension Checkout UI",
      "command": "/ak:shopify checkout_ui_extension gift message field",
      "whenEn": "Customizing checkout flow with a Shopify checkout extension.",
      "whenVi": "Tùy biến luồng checkout bằng Shopify checkout extension.",
      "expectedEn": "Guides Shopify CLI extension generation, React checkout UI implementation, app dev testing, extension target checks, and app deploy.",
      "expectedVi": "Hướng dẫn tạo extension bằng Shopify CLI, triển khai React checkout UI, kiểm thử bằng app dev, kiểm tra target và app deploy.",
      "recommended": true
    },
    {
      "labelEn": "Merchant app with billing",
      "labelVi": "App merchant có billing",
      "command": "/ak:shopify app product sync with billing",
      "whenEn": "Building a merchant-facing app that accesses store data and charges for functionality.",
      "whenVi": "Xây app cho merchant cần truy cập dữ liệu store và thu phí chức năng.",
      "expectedEn": "Covers app init, access scopes in shopify.app.toml, GraphQL Admin API queries, OAuth, billing, webhooks, and credential handling.",
      "expectedVi": "Bao gồm app init, access scope trong shopify.app.toml, truy vấn GraphQL Admin API, OAuth, billing, webhook và xử lý credential."
    },
    {
      "labelEn": "Liquid theme customization",
      "labelVi": "Tùy biến theme Liquid",
      "command": "/ak:shopify theme product page customization",
      "whenEn": "Custom storefront design or product page changes belong in a Shopify theme.",
      "whenVi": "Thiết kế storefront riêng hoặc đổi trang sản phẩm thuộc về Shopify theme.",
      "expectedEn": "Uses theme init/dev/pull/push workflows, Liquid product patterns, local preview, image optimization, accessibility, and safe publish steps.",
      "expectedVi": "Dùng quy trình theme init/dev/pull/push, mẫu sản phẩm Liquid, local preview, tối ưu ảnh, accessibility và bước publish an toàn."
    },
    {
      "labelEn": "Function extension",
      "labelVi": "Extension Function",
      "command": "/ak:shopify function delivery rule",
      "whenEn": "Implementing discount, payment, delivery, or validation rules as a Shopify Function.",
      "whenVi": "Triển khai rule discount, payment, delivery hoặc validation bằng Shopify Function.",
      "expectedEn": "Selects the function extension path, runs Shopify CLI generation, keeps the app dev/deploy loop, and applies testing and troubleshooting checks.",
      "expectedVi": "Chọn hướng function extension, chạy tạo bằng Shopify CLI, giữ vòng lặp app dev/deploy và áp dụng kiểm thử cùng kiểm tra troubleshooting."
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

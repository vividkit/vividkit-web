import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-payment-integration',
  command: '/ak:payment-integration',
  kit: 'engineer',
  header: {
    titleEn: '/ak:payment-integration — Payment integrations',
    titleVi: '/ak:payment-integration — Tích hợp thanh toán',
    taglineEn:
      'Integrates checkout, subscriptions, webhooks, VietQR/QR flows, and multi-provider orders with SePay, Polar, or Stripe.',
    taglineVi:
      'Tích hợp checkout, subscription, webhook, luồng VietQR/QR và đơn hàng đa provider bằng SePay, Polar hoặc Stripe.',
  },
  processFlow: [
    { number: 1, titleEn: 'Scope payment job', titleVi: 'Xác định việc thanh toán', descEn: 'Identify whether the request is checkout, subscription billing, webhook handling, VietQR/NAPAS QR payment, or multi-provider order management.', descVi: 'Xác định yêu cầu là checkout, subscription billing, xử lý webhook, thanh toán QR VietQR/NAPAS hay quản lý đơn hàng đa provider.' },
    { number: 2, titleEn: 'Select platform', titleVi: 'Chọn nền tảng', descEn: 'Choose SePay for Vietnamese VND bank-transfer/VietQR flows, Polar for global SaaS subscriptions and automated benefits, or Stripe for enterprise, Connect, and custom checkout.', descVi: 'Chọn SePay cho luồng chuyển khoản/VietQR bằng VND tại Việt Nam, Polar cho subscription SaaS global và benefit tự động, hoặc Stripe cho enterprise, Connect và checkout tuỳ chỉnh.' },
    { number: 3, titleEn: 'Load references', titleVi: 'Nạp tài liệu tham chiếu', descEn: 'Use the matching overview, API, SDK, checkout, webhook, QR-code, subscription, benefit, Stripe llms.txt, or multi-provider order reference.', descVi: 'Dùng đúng overview, API, SDK, checkout, webhook, QR-code, subscription, benefit, Stripe llms.txt hoặc tài liệu đơn hàng đa provider.' },
    { number: 4, titleEn: 'Wire auth and products', titleVi: 'Nối auth và product', descEn: 'Follow the implementation flow by configuring provider authentication, products, pricing, currency rules, and the durable order model before checkout.', descVi: 'Theo flow triển khai: cấu hình auth provider, product, giá, quy tắc tiền tệ và model đơn hàng bền vững trước checkout.' },
    { number: 5, titleEn: 'Build checkout', titleVi: 'Xây checkout', descEn: 'Create the provider-specific checkout path: SePay QR/bank transfer, Polar checkout/subscription, or Stripe Checkout Session, Payment Element, Billing, or Connect flow.', descVi: 'Tạo luồng checkout theo provider: QR/chuyển khoản SePay, checkout/subscription Polar, hoặc Stripe Checkout Session, Payment Element, Billing hay Connect.' },
    { number: 6, titleEn: 'Handle webhooks', titleVi: 'Xử lý webhook', descEn: 'Verify webhook payloads or signatures with the provided scripts/references, make handlers idempotent, and map provider events to order transitions.', descVi: 'Xác minh payload hoặc chữ ký webhook bằng script/tài liệu có sẵn, làm handler idempotent và map event provider vào chuyển trạng thái đơn hàng.' },
    { number: 7, titleEn: 'Apply events and benefits', titleVi: 'Áp dụng event và benefit', descEn: 'Update payment, subscription, renewal, failure, and reconciliation state; for Polar, include automated GitHub or Discord benefit delivery where requested.', descVi: 'Cập nhật trạng thái thanh toán, subscription, gia hạn, lỗi và đối soát; với Polar, thêm cấp benefit GitHub hoặc Discord khi được yêu cầu.' },
    { number: 8, titleEn: 'Verify locally or in sandbox', titleVi: 'Xác minh local hoặc sandbox', descEn: 'Exercise sandbox or local webhook paths, duplicate events, retries, provider rate limits, currency rounding, and Stripe CLI testing where relevant.', descVi: 'Chạy thử sandbox hoặc webhook local, event trùng, retry, rate limit provider, làm tròn tiền tệ và Stripe CLI testing khi phù hợp.' },
  ],
  corePrinciplesEn: [
    'Provider choice follows market, currency, product model, and platform capability: SePay for Vietnam/VND, Polar for SaaS, Stripe for global infrastructure.',
    'Checkout must be backed by a durable order state, not by transient provider redirects or client-side success screens.',
    'Webhook handlers need verification, idempotency, retry tolerance, and explicit event-to-order transition mapping.',
    'Provider limits and lifecycle details matter: SePay is rate-limited, Polar owns SaaS benefits and subscriptions, and Stripe adds Billing, Connect, Payment Element, and local CLI testing concerns.',
  ],
  corePrinciplesVi: [
    'Chọn provider theo thị trường, tiền tệ, mô hình sản phẩm và năng lực nền tảng: SePay cho Việt Nam/VND, Polar cho SaaS, Stripe cho hạ tầng global.',
    'Checkout phải dựa trên trạng thái đơn hàng bền vững, không dựa vào redirect tạm thời hoặc màn hình thành công ở client.',
    'Webhook handler cần xác minh, idempotency, chịu retry và mapping rõ ràng từ event sang chuyển trạng thái đơn hàng.',
    'Giới hạn và vòng đời của provider rất quan trọng: SePay có rate limit, Polar quản subscription/benefit SaaS, còn Stripe thêm Billing, Connect, Payment Element và local CLI testing.',
  ],
  expertiseAreasEn: ['SePay VietQR and bank transfers', 'Polar subscriptions and benefits', 'Stripe Checkout, Billing, Connect, and Payment Element', 'Webhook verification and idempotency', 'Multi-provider order management'],
  expertiseAreasVi: ['VietQR và chuyển khoản ngân hàng với SePay', 'Subscription và benefit của Polar', 'Stripe Checkout, Billing, Connect và Payment Element', 'Xác minh webhook và idempotency', 'Quản lý đơn hàng đa provider'],
  promptExamples: [
    { labelEn: 'SePay VietQR checkout', labelVi: 'Checkout VietQR SePay', command: '/ak:payment-integration SePay VietQR checkout for VND orders with webhook confirmation', whenEn: 'Use for Vietnamese bank-transfer payments, VietQR/NAPAS QR flows, and VND order reconciliation.', whenVi: 'Dùng cho thanh toán chuyển khoản ngân hàng Việt Nam, luồng QR VietQR/NAPAS và đối soát đơn hàng VND.', expectedEn: 'Selects SePay references, designs the VND order and QR checkout flow, applies webhook verification/idempotency, accounts for rate limits, and defines reconciliation evidence.', expectedVi: 'Chọn tài liệu SePay, thiết kế đơn hàng VND và luồng checkout QR, áp dụng xác minh/idempotency webhook, tính đến rate limit và nêu bằng chứng đối soát.', recommended: true },
    { labelEn: 'Polar SaaS subscriptions', labelVi: 'Subscription SaaS Polar', command: '/ak:payment-integration Polar subscriptions with GitHub and Discord benefits', whenEn: 'Use for global SaaS subscriptions where checkout, subscription lifecycle, usage or pricing models, webhooks, and automated benefits are in scope.', whenVi: 'Dùng cho subscription SaaS global khi checkout, vòng đời subscription, mô hình usage hoặc pricing, webhook và benefit tự động đều nằm trong phạm vi.', expectedEn: 'Uses Polar product, checkout, subscription, webhook, benefit, SDK, and best-practice references to implement lifecycle events, automated benefit delivery, and focused webhook proof.', expectedVi: 'Dùng tài liệu Polar về product, checkout, subscription, webhook, benefit, SDK và best practice để triển khai event vòng đời, cấp benefit tự động và bằng chứng webhook tập trung.' },
    { labelEn: 'Stripe custom checkout', labelVi: 'Checkout Stripe tuỳ chỉnh', command: '/ak:payment-integration Stripe Payment Element checkout with Billing and local webhook testing', whenEn: 'Use for Stripe infrastructure work involving Checkout Sessions, Billing, Payment Element, Connect, SDKs, version upgrades, or local CLI webhook testing.', whenVi: 'Dùng cho việc hạ tầng Stripe liên quan đến Checkout Session, Billing, Payment Element, Connect, SDK, nâng version hoặc test webhook local bằng CLI.', expectedEn: 'Loads Stripe-specific references, chooses the checkout or Payment Element path, wires products and provider auth, maps webhook events to orders, and verifies with local Stripe CLI flow where applicable.', expectedVi: 'Nạp tài liệu riêng của Stripe, chọn hướng checkout hoặc Payment Element, nối product và auth provider, map webhook event vào đơn hàng và xác minh bằng luồng Stripe CLI local khi phù hợp.' },
    { labelEn: 'Multi-provider orders', labelVi: 'Đơn hàng đa provider', command: '/ak:payment-integration multi-provider orders across SePay, Polar, and Stripe', whenEn: 'Use when one product needs normalized orders, currencies, lifecycle states, and webhook handling across more than one payment provider.', whenVi: 'Dùng khi một sản phẩm cần chuẩn hoá đơn hàng, tiền tệ, trạng thái vòng đời và xử lý webhook trên nhiều provider thanh toán.', expectedEn: 'Applies the multi-provider order-management reference, defines provider selection and currency rules, normalizes order states and event handling, and records provider-specific verification steps.', expectedVi: 'Áp dụng tài liệu quản lý đơn hàng đa provider, định nghĩa quy tắc chọn provider và tiền tệ, chuẩn hoá trạng thái đơn hàng/event handling và ghi lại bước xác minh riêng từng provider.' },
  ],
  skillStack: [
    { name: 'SePay references', type: 'tool' },
    { name: 'Polar references', type: 'tool' },
    { name: 'Stripe references and llms.txt', type: 'tool' },
    { name: 'multi-provider-order-management-patterns.md', type: 'tool' },
    { name: 'sepay-webhook-verify.js', type: 'tool' },
    { name: 'polar-webhook-verify.js', type: 'tool' },
    { name: 'checkout-helper.js', type: 'tool' },
  ],
  reportOutput: {
    titleEn: 'Payment Integration Output',
    titleVi: 'Output tích hợp thanh toán',
    patternEn: 'Provider choice + checkout path + webhook/order lifecycle implementation',
    patternVi: 'Chọn provider + luồng checkout + triển khai webhook/vòng đời đơn hàng',
    descEn:
      'A complete payment-integration result should state why SePay, Polar, Stripe, or a multi-provider model was chosen; implement provider auth, products, checkout, webhook verification/idempotency, event mapping, and focused sandbox/local proof.',
    descVi:
      'Kết quả tích hợp thanh toán hoàn chỉnh cần nêu lý do chọn SePay, Polar, Stripe hoặc mô hình đa provider; triển khai auth provider, product, checkout, xác minh/idempotency webhook, mapping event và bằng chứng sandbox/local tập trung.',
  },
};

export default data;

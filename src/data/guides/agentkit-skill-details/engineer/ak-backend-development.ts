import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-backend-development',
  command: '/ak:backend-development',
  kit: 'engineer',
  header: {
    titleEn: '/ak:backend-development — Production backend builder',
    titleVi: '/ak:backend-development — Xây backend production',
    taglineEn:
      'Guides production backend work across REST, GraphQL, gRPC, auth, databases, caching, microservices, OWASP security, testing, CI/CD, Docker/Kubernetes, observability, and debugging.',
    taglineVi:
      'Dẫn dắt công việc backend production cho REST, GraphQL, gRPC, auth, database, cache, microservice, bảo mật OWASP, testing, CI/CD, Docker/Kubernetes, quan sát và debug.',
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Backend guidance does not grant production authority',
    titleVi: 'Hướng dẫn backend không tự cấp quyền production',
    contentEn:
      'The Skill can be implementation-capable when the runtime has write and process tools, but its source defines no automatic migration or deployment. Approve database, credential, provider, network, and production actions separately.',
    contentVi:
      'Skill có thể triển khai khi runtime có công cụ ghi và chạy process, nhưng nguồn của nó không định nghĩa migration hay deploy tự động. Phải phê duyệt riêng các hành động database, credential, provider, network và production.',
  },
  processFlow: [
    { number: 1, titleEn: 'Frame backend surface', titleVi: 'Định khung bề mặt backend', descEn: 'Identify whether the work is API design, auth, database, caching, microservice architecture, security, testing, deployment, or production debugging.', descVi: 'Xác định việc thuộc thiết kế API, auth, database, cache, kiến trúc microservice, bảo mật, testing, deploy hay debug production.' },
    { number: 2, titleEn: 'Select stack', titleVi: 'Chọn stack', descEn: 'Choose language, framework, database, and API style from project context and trade-offs: Node/NestJS, Python/FastAPI, Go/Gin, Rust/Axum, PostgreSQL, MongoDB, Redis, REST, GraphQL, or gRPC.', descVi: 'Chọn ngôn ngữ, framework, database và kiểu API từ bối cảnh dự án và đánh đổi: Node/NestJS, Python/FastAPI, Go/Gin, Rust/Axum, PostgreSQL, MongoDB, Redis, REST, GraphQL hoặc gRPC.' },
    { number: 3, titleEn: 'Design API and data', titleVi: 'Thiết kế API và dữ liệu', descEn: 'Define schemas, validation, error handling, database schema, indexes, connection pooling, migrations, backups, and performance tests.', descVi: 'Định nghĩa schema, validation, xử lý lỗi, schema database, index, connection pool, migration, backup và test hiệu năng.' },
    { number: 4, titleEn: 'Secure the boundary', titleVi: 'Bảo vệ ranh giới', descEn: 'Apply OWASP mitigation, parameterized queries, OAuth 2.1 + PKCE or JWT where appropriate, security headers, rate limiting, input validation, and Argon2id passwords.', descVi: 'Áp dụng giảm thiểu OWASP, query có tham số, OAuth 2.1 + PKCE hoặc JWT khi phù hợp, header bảo mật, rate limit, validate input và mật khẩu Argon2id.' },
    { number: 5, titleEn: 'Add performance path', titleVi: 'Thêm đường hiệu năng', descEn: 'Use Redis caching, indexing, CDN where applicable, load balancing, query optimization, and event or queue patterns such as Kafka when they serve the requirement.', descVi: 'Dùng Redis cache, index, CDN khi phù hợp, cân bằng tải, tối ưu query và pattern event/queue như Kafka khi chúng phục vụ yêu cầu.' },
    { number: 6, titleEn: 'Test contracts', titleVi: 'Kiểm thử hợp đồng', descEn: 'Cover unit, integration, E2E, load, migration, and microservice contract tests using the 70-20-10 testing pyramid as a guide.', descVi: 'Bao phủ unit, integration, E2E, load, migration và test contract microservice theo kim tự tháp 70-20-10.' },
    { number: 7, titleEn: 'Deploy and observe', titleVi: 'Deploy và quan sát', descEn: 'Ship with Docker, CI/CD, blue-green or canary deployment, feature flags, Prometheus/Grafana monitoring, logging, health checks, and OpenTelemetry tracing.', descVi: 'Phát hành với Docker, CI/CD, blue-green hoặc canary, feature flag, monitoring Prometheus/Grafana, logging, health check và tracing OpenTelemetry.' },
  ],
  corePrinciplesEn: [
    'Backend implementation is production work: security, data integrity, testing, and operations are part of the surface.',
    'Choose boring stack defaults from the project and requirement, not novelty.',
    'Public APIs need validation, documented errors, auth/rate limits, and contract tests.',
    'Database work is not done without migrations, indexes, backup/restore thinking, and performance evidence.',
  ],
  corePrinciplesVi: [
    'Triển khai backend là việc production: bảo mật, toàn vẹn dữ liệu, testing và vận hành đều thuộc bề mặt.',
    'Chọn mặc định stack bền và phù hợp dự án/yêu cầu, không chạy theo cái mới.',
    'API công khai cần validation, lỗi có tài liệu, auth/rate limit và test contract.',
    'Việc database chưa xong nếu thiếu migration, index, suy nghĩ backup/restore và bằng chứng hiệu năng.',
  ],
  expertiseAreasEn: ['REST/GraphQL/gRPC APIs', 'Authentication and authorization', 'Database design and migrations', 'Performance and caching', 'OWASP security', 'DevOps and observability'],
  expertiseAreasVi: ['API REST/GraphQL/gRPC', 'Xác thực và phân quyền', 'Thiết kế database và migration', 'Hiệu năng và cache', 'Bảo mật OWASP', 'DevOps và quan sát'],
  invocation: {
    syntax: '/ak:backend-development [framework] [task]',
    arguments: [
      { token: '[framework]', titleEn: 'Framework or stack', titleVi: 'Framework hoặc stack', descEn: 'Existing backend framework and version, or the stack constraints for a comparison. Omit when the project context already supplies it; the Skill does not choose a default framework.', descVi: 'Framework backend và version hiện có, hoặc constraint stack để so sánh. Bỏ qua khi context dự án đã nêu rõ; Skill không tự chọn framework mặc định.', exampleCommand: '/ak:backend-development nestjs "Add an idempotent orders webhook endpoint"',
          exampleCommandVi: '/ak:backend-development nestjs "Thêm endpoint webhook đơn hàng idempotent"' },
      { token: '[task]', titleEn: 'Backend outcome', titleVi: 'Outcome backend', descEn: 'Natural-language API, service, auth, data-access, queue, cache, or performance outcome. Include contracts, data ownership, security needs, allowed commands, migration limits, and deployment boundaries.', descVi: 'Outcome bằng ngôn ngữ tự nhiên cho API, service, auth, data access, queue, cache hoặc hiệu năng. Nêu contract, quyền sở hữu dữ liệu, yêu cầu bảo mật, lệnh được phép, giới hạn migration và ranh giới deploy.', required: true, exampleCommand: '/ak:backend-development fastapi "Build invoice export endpoints with PostgreSQL; add focused integration tests and do not deploy"',
          exampleCommandVi: '/ak:backend-development fastapi "Xây dựng các endpoint xuất hóa đơn với PostgreSQL; thêm các bài kiểm thử tích hợp tập trung và không triển khai"' },
    ],
  },
  promptExamples: [
    { labelEn: 'API implementation', labelVi: 'Triển khai API', command: '/ak:backend-development fastapi "Build invoice export endpoints with PostgreSQL"',
      commandVi: '/ak:backend-development fastapi "Xây endpoints xuất hóa đơn với PostgreSQL"', whenEn: 'Use when backend/API implementation is the main surface.', whenVi: 'Dùng khi triển khai backend/API là bề mặt chính.', expectedEn: 'Selects the relevant API-design, database, security, testing, and operations references before shaping the FastAPI endpoint contract and verification path.', expectedVi: 'Chọn các tham chiếu thiết kế API, database, bảo mật, testing và vận hành phù hợp trước khi định hình hợp đồng endpoint FastAPI và cách xác minh.', recommended: true },
    { labelEn: 'Auth backend', labelVi: 'Backend auth', command: '/ak:backend-development nestjs "Add OAuth and RBAC for admin routes"',
      commandVi: '/ak:backend-development nestjs "Thêm OAuth và RBAC cho các route admin"', whenEn: 'Use when building authentication or authorization systems in a backend service.', whenVi: 'Dùng khi xây hệ thống xác thực hoặc phân quyền trong dịch vụ backend.', expectedEn: 'Uses the authentication and security references to cover OAuth 2.1/JWT choices, RBAC route boundaries, rate limits, validation, and focused tests.', expectedVi: 'Dùng tham chiếu xác thực và bảo mật để bao phủ lựa chọn OAuth 2.1/JWT, ranh giới route RBAC, rate limit, validation và test tập trung.' },
    { labelEn: 'Database performance', labelVi: 'Hiệu năng database', command: '/ak:backend-development go "Optimize high-concurrency order lookup service"',
      commandVi: '/ak:backend-development go "Tối ưu dịch vụ tra cứu đơn hàng chịu tải đồng thời cao"', whenEn: 'Use when backend/API work depends on query optimization, caching, concurrency, or service scaling.', whenVi: 'Dùng khi công việc backend/API phụ thuộc vào tối ưu query, cache, concurrency hoặc scale dịch vụ.', expectedEn: 'Navigates the performance, database, architecture, and debugging references to choose indexing, Redis caching, pooling, load evidence, and observability tactics.', expectedVi: 'Đi qua tham chiếu hiệu năng, database, kiến trúc và debug để chọn index, Redis cache, connection pool, bằng chứng tải và cách quan sát.' },
    { labelEn: 'Stack decision', labelVi: 'Quyết định stack', command: '/ak:backend-development "Compare NestJS, FastAPI, and Go for a public REST API with PostgreSQL and Redis"',
      commandVi: '/ak:backend-development "So sánh NestJS, FastAPI và Go cho REST API công khai với PostgreSQL và Redis"', whenEn: 'Use when the backend/API surface needs a technology decision before implementation.', whenVi: 'Dùng khi bề mặt backend/API cần quyết định công nghệ trước khi triển khai.', expectedEn: 'Applies the technology selection guide and decision matrix to compare language, framework, database, API style, caching, security, and operational trade-offs.', expectedVi: 'Áp dụng hướng dẫn chọn công nghệ và ma trận quyết định để so sánh ngôn ngữ, framework, database, kiểu API, cache, bảo mật và vận hành.' },
  ],
};

export default data;

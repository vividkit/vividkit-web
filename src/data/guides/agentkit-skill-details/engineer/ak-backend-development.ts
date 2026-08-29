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
  processFlow: [
    { number: 1, titleEn: 'Frame backend surface', titleVi: 'Định khung bề mặt backend', descEn: 'Identify whether the work is API design, auth, database, caching, microservice architecture, security, testing, deployment, or production debugging.', descVi: 'Xác định việc thuộc thiết kế API, auth, database, cache, kiến trúc microservice, bảo mật, testing, deploy hay debug production.' },
    { number: 2, titleEn: 'Select stack', titleVi: 'Chọn stack', descEn: 'Choose language, framework, database, and API style from project context and trade-offs: Node/NestJS, Python/FastAPI, Go/Gin, Rust/Axum, PostgreSQL, MongoDB, Redis, REST, GraphQL, or gRPC.', descVi: 'Chọn ngôn ngữ, framework, database và kiểu API từ bối cảnh dự án và đánh đổi: Node/NestJS, Python/FastAPI, Go/Gin, Rust/Axum, PostgreSQL, MongoDB, Redis, REST, GraphQL hoặc gRPC.' },
    { number: 3, titleEn: 'Design API and data', titleVi: 'Thiết kế API và dữ liệu', descEn: 'Define schemas, validation, error handling, database schema, indexes, connection pooling, migrations, backups, and performance tests.', descVi: 'Định nghĩa schema, validation, xử lý lỗi, schema database, index, connection pool, migration, backup và test hiệu năng.' },
    { number: 4, titleEn: 'Secure the boundary', titleVi: 'Bảo vệ ranh giới', descEn: 'Apply OWASP mitigation, parameterized queries, OAuth 2.1 + PKCE or JWT where appropriate, security headers, rate limiting, input validation, and Argon2id passwords.', descVi: 'Áp dụng giảm thiểu OWASP, query có tham số, OAuth 2.1 + PKCE hoặc JWT khi phù hợp, header bảo mật, rate limit, validate input và mật khẩu Argon2id.' },
    { number: 5, titleEn: 'Add performance path', titleVi: 'Thêm đường hiệu năng', descEn: 'Use Redis caching, indexing, CDN where applicable, load balancing, query optimization, and event or queue patterns such as Kafka when they serve the requirement.', descVi: 'Dùng Redis cache, index, CDN khi phù hợp, cân bằng tải, tối ưu query và pattern event/queue như Kafka khi chúng phục vụ yêu cầu.' },
    { number: 6, titleEn: 'Test contracts', titleVi: 'Kiểm thử hợp đồng', descEn: 'Cover unit, integration, E2E, migration, load, and microservice contract tests using the 70-20-10 testing pyramid as a guide.', descVi: 'Bao phủ unit, integration, E2E, migration, load và test contract microservice theo kim tự tháp 70-20-10.' },
    { number: 7, titleEn: 'Deploy and observe', titleVi: 'Deploy và quan sát', descEn: 'Ship with Docker, CI/CD, blue-green or canary deployment, feature flags, health checks, logging, Prometheus/Grafana, and OpenTelemetry tracing.', descVi: 'Phát hành với Docker, CI/CD, blue-green hoặc canary, feature flag, health check, logging, Prometheus/Grafana và tracing OpenTelemetry.' },
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
  promptExamples: [
    { labelEn: 'API implementation', labelVi: 'Triển khai API', command: '/ak:backend-development FastAPI "Build invoice export endpoints with PostgreSQL"', whenEn: 'Use when backend/API implementation is the primary surface.', whenVi: 'Dùng khi backend/API là bề mặt chính.', expectedEn: 'Frames API, data, auth, tests, and operational needs for the chosen framework.', expectedVi: 'Định khung API, dữ liệu, auth, test và nhu cầu vận hành cho framework đã chọn.', recommended: true },
    { labelEn: 'Auth backend', labelVi: 'Backend auth', command: '/ak:backend-development NestJS "Add OAuth and RBAC for admin routes"', whenEn: 'Use for auth/authorization backend design and implementation guidance.', whenVi: 'Dùng cho thiết kế và hướng triển khai xác thực/phân quyền backend.', expectedEn: 'Applies auth reference guidance, security controls, route protection, and tests.', expectedVi: 'Áp hướng dẫn auth, kiểm soát bảo mật, bảo vệ route và test.' },
    { labelEn: 'Database performance', labelVi: 'Hiệu năng database', command: '/ak:backend-development Go "Optimize high-concurrency order lookup service"', whenEn: 'Use for backend performance work where database, concurrency, and deployment shape matter.', whenVi: 'Dùng cho việc hiệu năng backend khi database, concurrency và deploy đều quan trọng.', expectedEn: 'Chooses concurrency, caching, indexing, and observability tactics appropriate to the service.', expectedVi: 'Chọn cách xử lý concurrency, cache, index và quan sát phù hợp dịch vụ.' },
  ],
};

export default data;

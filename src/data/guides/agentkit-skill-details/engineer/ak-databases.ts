import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-databases',
  command: '/ak:databases',
  kit: 'engineer',
  header: {
    titleEn: '/ak:databases',
    titleVi: '/ak:databases',
    taglineEn: 'Unified MongoDB and PostgreSQL guidance for schema design, queries, aggregation, indexes, migrations, replication, backups, administration, and performance.',
    taglineVi: 'Hướng dẫn thống nhất cho MongoDB và PostgreSQL về thiết kế schema, query, aggregation, index, migration, replication, backup, quản trị và hiệu năng.',
  },
  processFlow: [
    { number: 1, titleEn: 'Classify work', titleVi: 'Phân loại việc', descEn: 'Determine whether the task is schema design, SQL/NoSQL query writing, aggregation, index tuning, migration, backup, replication, permissions, or production admin.', descVi: 'Xác định nhiệm vụ là thiết kế schema, viết SQL/NoSQL query, aggregation, tối ưu index, migration, backup, replication, phân quyền hay quản trị production.' },
    { number: 2, titleEn: 'Choose engine', titleVi: 'Chọn hệ CSDL', descEn: 'Route relational integrity and joins to PostgreSQL, document-oriented 1-to-few models to MongoDB, or compare trade-offs when unclear.', descVi: 'Đưa dữ liệu cần ràng buộc quan hệ và join sang PostgreSQL, mô hình document 1-vài sang MongoDB, hoặc so sánh trade-off khi chưa rõ.' },
    { number: 3, titleEn: 'Load reference', titleVi: 'Nạp tài liệu', descEn: 'Load only the needed reference: db design, MongoDB CRUD/aggregation/indexing/Atlas, or PostgreSQL queries/psql/performance/admin.', descVi: 'Chỉ nạp tài liệu cần thiết: thiết kế DB, MongoDB CRUD/aggregation/indexing/Atlas hoặc PostgreSQL queries/psql/performance/admin.' },
    { number: 4, titleEn: 'Model data', titleVi: 'Mô hình hoá dữ liệu', descEn: 'Design tables or collections around transactional or analytical use, relationships, constraints, access patterns, and growth.', descVi: 'Thiết kế bảng hoặc collection theo nhu cầu giao dịch/phân tích, quan hệ, ràng buộc, pattern truy cập và tăng trưởng dữ liệu.' },
    { number: 5, titleEn: 'Write operation', titleVi: 'Viết thao tác', descEn: 'Produce SQL, psql commands, MongoDB query language, aggregation pipelines, migrations, or maintenance commands with clear assumptions.', descVi: 'Tạo SQL, lệnh psql, MongoDB query, aggregation pipeline, migration hoặc lệnh bảo trì với giả định rõ ràng.' },
    { number: 6, titleEn: 'Tune performance', titleVi: 'Tối ưu hiệu năng', descEn: 'Use EXPLAIN ANALYZE, slow query analysis, compound indexes, frequently filtered fields, vacuum/analyze, and connection pooling as appropriate.', descVi: 'Dùng EXPLAIN ANALYZE, phân tích slow query, compound index, trường hay lọc, vacuum/analyze và connection pooling khi phù hợp.' },
    { number: 7, titleEn: 'Protect production', titleVi: 'Bảo vệ production', descEn: 'Account for authentication, TLS, backups, disaster recovery, users, permissions, replication, sharding, and operational maintenance.', descVi: 'Tính tới authentication, TLS, backup, khôi phục thảm hoạ, user, quyền, replication, sharding và bảo trì vận hành.' },
  ],
  corePrinciplesEn: ['Pick the database from data shape and access patterns.', 'PostgreSQL favors integrity, joins, constraints, and normalized models.', 'MongoDB favors document aggregates and embedded 1-to-few relationships.', 'Indexes follow real query paths, not wishful future access.', 'Production work includes backup, auth, permissions, and recovery.'],
  corePrinciplesVi: ['Chọn database theo hình dạng dữ liệu và pattern truy cập.', 'PostgreSQL mạnh về toàn vẹn, join, constraint và mô hình chuẩn hoá.', 'MongoDB hợp với aggregate dạng document và quan hệ nhúng 1-vài.', 'Index phải theo đường query thật, không theo nhu cầu tưởng tượng.', 'Việc production phải gồm backup, auth, phân quyền và khôi phục.'],
  expertiseAreasEn: ['OLTP/OLAP schema design', 'PostgreSQL queries and psql', 'MongoDB CRUD and aggregation', 'Index and query optimization', 'Migrations', 'Backup and restore', 'Replication and administration'],
  expertiseAreasVi: ['Thiết kế schema OLTP/OLAP', 'Query PostgreSQL và psql', 'CRUD và aggregation MongoDB', 'Tối ưu index và query', 'Migration', 'Backup và restore', 'Replication và quản trị'],
  promptExamples: [
    { labelEn: 'Schema design', labelVi: 'Thiết kế schema', command: '/ak:databases design a PostgreSQL schema for subscriptions, invoices, and payment attempts', whenEn: 'A relational data model needs constraints and clear table boundaries.', whenVi: 'Khi mô hình dữ liệu quan hệ cần constraint và ranh giới bảng rõ.', expectedEn: 'Tables, keys, relationships, indexes, and migration guidance.', expectedVi: 'Bảng, khoá, quan hệ, index và hướng dẫn migration.', recommended: true },
    { labelEn: 'Mongo aggregation', labelVi: 'Aggregation MongoDB', command: '/ak:databases write a MongoDB aggregation to group events by account and day', whenEn: 'You need a document aggregation pipeline.', whenVi: 'Khi cần pipeline aggregation cho dữ liệu document.', expectedEn: 'Pipeline stages with assumptions and index considerations.', expectedVi: 'Các stage pipeline kèm giả định và lưu ý index.' },
    { labelEn: 'Slow query', labelVi: 'Query chậm', command: '/ak:databases optimize this slow PostgreSQL query with EXPLAIN ANALYZE output', whenEn: 'Performance or latency is the central problem.', whenVi: 'Khi vấn đề chính là hiệu năng hoặc độ trễ.', expectedEn: 'Plan interpretation, index recommendations, and maintenance checks.', expectedVi: 'Giải thích plan, đề xuất index và kiểm tra bảo trì.' },
  ],
  skillStack: [{ name: 'PostgreSQL', type: 'tool' }, { name: 'MongoDB', type: 'tool' }, { name: 'psql CLI', type: 'tool' }, { name: 'db_migrate.py', type: 'tool' }, { name: 'db_backup.py', type: 'tool' }, { name: 'db_performance_check.py', type: 'tool' }],
};

export default data;

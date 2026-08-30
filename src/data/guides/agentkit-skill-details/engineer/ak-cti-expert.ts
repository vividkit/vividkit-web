import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-cti-expert',
  command: '/ak:cti-expert',
  kit: 'engineer',
  header: {
    titleEn: '/ak:cti-expert — Cyber threat intelligence and OSINT',
    titleVi: '/ak:cti-expert — Phân tích CTI và OSINT',
    taglineEn: 'Cyber threat intelligence and OSINT analysis for exposure reviews, recon, breach checks, forensics, cloud tenant recon, threat modeling, and structured reports.',
    taglineVi: 'Phân tích CTI và OSINT cho rà soát lộ diện, recon, kiểm tra rò rỉ, pháp chứng, recon tenant cloud, threat model và báo cáo có cấu trúc.',
  },
  hardGate: {
    type: 'critical',
    titleEn: 'Public information is not a license to harm',
    titleVi: 'Dữ liệu công khai không cho phép gây hại',
    contentEn: 'Operate strictly within publicly available information. Stalking, harassment, doxing, unauthorized access, social engineering, deception campaigns, and illegal activity are prohibited; --yolo never bypasses ethics or legal boundaries.',
    contentVi: 'Chỉ làm việc trong phạm vi thông tin công khai. Cấm stalking, quấy rối, doxing, truy cập trái phép, social engineering, chiến dịch lừa dối và mọi hoạt động vi phạm luật; --yolo không bao giờ bỏ qua ranh giới đạo đức hoặc pháp lý.',
  },
  processFlow: [
    { number: 1, titleEn: 'Acquire', titleVi: 'Thu thập', descEn: 'Collect public raw data for the bounded target with /case, /sweep, /query, username, phone, email-deep, subdomain, breach, traffic, techstack, secrets, threat-check, and target-specific techniques as applicable.', descVi: 'Thu dữ liệu công khai thô cho target đã giới hạn bằng /case, /sweep, /query, username, phone, email-deep, subdomain, breach, traffic, techstack, secrets, threat-check và kỹ thuật theo loại target khi phù hợp.' },
    { number: 2, titleEn: 'Enrich', titleVi: 'Làm giàu', descEn: 'Expand discovered identifiers with /branch, /crossref, /link-subjects, /timeline, /show-trail, signatures, and parallel AgentFlow enrichment when three or more subjects exist.', descVi: 'Mở rộng identifier tìm được bằng /branch, /crossref, /link-subjects, /timeline, /show-trail, signatures và enrichment song song qua AgentFlow khi có từ ba subject trở lên.' },
    { number: 3, titleEn: 'Assess', titleVi: 'Đánh giá', descEn: 'Score exposure and threat model findings, then run /validate, /coverage, /verify-finding, blind-spot checks, and conflict handling so contested evidence remains visible.', descVi: 'Chấm điểm exposure và threat model cho finding, rồi chạy /validate, /coverage, /verify-finding, kiểm blind spot và xử lý conflict để evidence mâu thuẫn vẫn hiển thị.' },
    { number: 4, titleEn: 'Deliver', titleVi: 'Bàn giao', descEn: 'Package cited intelligence with /report, /brief, /render, or /workspace save; /case, /report, and /brief auto-save Markdown plus DOCX, with optional HTML mirror when requested.', descVi: 'Đóng gói intelligence có citation bằng /report, /brief, /render hoặc /workspace save; /case, /report và /brief tự lưu Markdown cùng DOCX, có HTML mirror tuỳ chọn khi được yêu cầu.' },
  ],
  corePrinciplesEn: ['Use public data only and preserve legal/ethical boundaries.', 'Every claim needs a source, trust score, and confidence level.', 'Tool limitations are collection gaps, not case blockers.', 'ASCII visualizations are the default for portable reports.', 'Deliver Markdown and DOCX for reports and briefs unless the format is machine-only.'],
  corePrinciplesVi: ['Chỉ dùng dữ liệu công khai và giữ ranh giới pháp lý/đạo đức.', 'Mỗi tuyên bố cần nguồn, trust score và mức confidence.', 'Giới hạn tool là khoảng trống thu thập, không phải lý do chặn case.', 'Trực quan ASCII là mặc định để báo cáo dễ mang đi.', 'Report và brief xuất Markdown cùng DOCX trừ định dạng thuần máy.'],
  expertiseAreasEn: ['Domain and subdomain recon', 'Breach and leak checks', 'Username/email/phone OSINT', 'Image and document forensics', 'M365/Azure tenant recon', 'Exposure scoring', 'Threat modeling', 'Structured intelligence reporting'],
  expertiseAreasVi: ['Recon domain và subdomain', 'Kiểm breach và leak', 'OSINT username/email/phone', 'Pháp chứng ảnh và tài liệu', 'Recon tenant M365/Azure', 'Chấm điểm exposure', 'Threat modeling', 'Báo cáo tình báo có cấu trúc'],
  promptExamples: [
    { labelEn: 'Full case', labelVi: 'Case đầy đủ', command: '/ak:cti-expert target.com --case', whenEn: 'Run a permitted OSINT or threat-intelligence investigation on a bounded domain, organization, person, email, username, IP, or phone target.', whenVi: 'Chạy investigation OSINT hoặc threat intelligence được phép trên domain, tổ chức, người, email, username, IP hoặc số điện thoại đã giới hạn.', expectedEn: 'Runs the AEAD lifecycle: acquire applicable public data, enrich discovered subjects, assess trust/confidence and coverage, then deliver cited Markdown and DOCX reports.', expectedVi: 'Chạy vòng đời AEAD: thu dữ liệu công khai phù hợp, làm giàu subject tìm được, đánh giá trust/confidence và coverage, rồi bàn giao report Markdown cùng DOCX có citation.', recommended: true },
    { labelEn: 'Recon sweep', labelVi: 'Quét recon', command: '/ak:cti-expert @handle --sweep', whenEn: 'Collect broad public leads for one identifier before deciding which pivots deserve deeper enrichment.', whenVi: 'Thu lead công khai rộng cho một identifier trước khi quyết định pivot nào đáng làm giàu sâu hơn.', expectedEn: 'Performs a multi-vector sweep, records source and collection-method gaps, registers useful leads, and prioritizes pivots without treating matches as identity proof.', expectedVi: 'Thực hiện sweep nhiều hướng, ghi source và collection gap, đăng ký lead hữu ích và ưu tiên pivot mà không coi match là bằng chứng danh tính.' },
    { labelEn: 'Operator queries', labelVi: 'Truy vấn operator', command: '/ak:cti-expert example.com --query', whenEn: 'You need search-operator coverage for a subject before browser or fetch collection begins.', whenVi: 'Khi cần phủ search operator cho một subject trước khi bắt đầu thu thập bằng browser hoặc fetch.', expectedEn: 'Builds 12–15 advanced search queries for the subject, scoped to public sources and ready to feed Acquire while preserving uncertainty and collection limits.', expectedVi: 'Tạo 12–15 truy vấn search nâng cao cho subject, giới hạn trong nguồn công khai và sẵn sàng đưa vào Acquire trong khi giữ rõ uncertainty và giới hạn thu thập.' },
    { labelEn: 'Guided flow', labelVi: 'Luồng hướng dẫn', command: '/ak:cti-expert person --flow', whenEn: 'A first-time investigator needs a guided person, domain, email, or quick workflow with safe boundaries visible.', whenVi: 'Khi điều tra viên lần đầu cần workflow có hướng dẫn cho person, domain, email hoặc quick và thấy rõ ranh giới an toàn.', expectedEn: 'Starts the guided workflow, prompts through target-specific steps, adapts jargon by skill tier, and keeps sources, confidence, gaps, and ethics checks explicit.', expectedVi: 'Khởi động workflow hướng dẫn, đi qua các bước theo loại target, điều chỉnh thuật ngữ theo tier và làm rõ source, confidence, gap cùng kiểm tra đạo đức.' },
  ],
  outputFlags: [
    { flag: '--yolo', titleEn: 'Autonomous mode', titleVi: 'Chế độ tự động', descEn: 'Skip questions and confirmations, but keep ethics, trust scores, citations, validation, and coverage.', descVi: 'Bỏ câu hỏi và xác nhận, nhưng vẫn giữ đạo đức, trust score, trích nguồn, validate và coverage.', exampleCommand: '/ak:cti-expert target.com --case --yolo' },
    { flag: '--case', titleEn: 'Full case', titleVi: 'Case đầy đủ', descEn: 'Run the full applicable AEAD case pipeline.', descVi: 'Chạy toàn bộ pipeline AEAD phù hợp.', exampleCommand: '/ak:cti-expert target.com --case' },
    { flag: '--sweep', titleEn: 'Multi-vector sweep', titleVi: 'Quét nhiều hướng', descEn: 'Collect broad raw data for the target.', descVi: 'Thu dữ liệu thô rộng cho mục tiêu.', exampleCommand: '/ak:cti-expert @handle --sweep' },
    { flag: '--query', titleEn: 'Operator queries', titleVi: 'Truy vấn operator', descEn: 'Build advanced search-operator queries for the subject.', descVi: 'Tạo truy vấn search operator nâng cao cho subject.', exampleCommand: '/ak:cti-expert example.com --query' },
    { flag: '--flow', titleEn: 'Guided flow', titleVi: 'Luồng hướng dẫn', descEn: 'Run an interactive case workflow for the selected target type.', descVi: 'Chạy workflow điều tra tương tác theo loại mục tiêu.', exampleCommand: '/ak:cti-expert person --flow' },
    { flag: '--format html|md', titleEn: 'Report format', titleVi: 'Định dạng báo cáo', descEn: 'Choose Markdown or add a self-contained editorial HTML mirror.', descVi: 'Chọn Markdown hoặc thêm bản HTML editorial tự chứa.', exampleCommand: '/ak:cti-expert target.com --case --format html' },
    { flag: '--no-antv', titleEn: 'Disable AntV', titleVi: 'Tắt AntV', descEn: 'Disable preferred AntV chart rendering for HTML mirrors.', descVi: 'Tắt renderer biểu đồ AntV ưu tiên trong bản HTML.', exampleCommand: '/ak:cti-expert target.com --case --format html --no-antv' },
    { flag: '--no-diagram-design', titleEn: 'Disable diagram-design', titleVi: 'Tắt diagram-design', descEn: 'Disable diagram-design layouts for HTML diagrams.', descVi: 'Tắt layout diagram-design cho sơ đồ HTML.', exampleCommand: '/ak:cti-expert target.com --case --format html --no-diagram-design' },
    { flag: '--no-editorial-visuals', titleEn: 'Disable editorial visuals', titleVi: 'Tắt visual editorial', descEn: 'Disable editorial visual enhancements for HTML output.', descVi: 'Tắt phần nâng cấp visual editorial cho đầu ra HTML.', exampleCommand: '/ak:cti-expert target.com --case --format html --no-editorial-visuals' },
  ],
  reportOutput: {
    titleEn: 'CTI report package',
    titleVi: 'Gói báo cáo CTI',
    patternEn: 'OSINT-REPORT-[CASE-ID]-[YYYY-MM-DD].md + .docx; optional CTI-REPORT-[CASE-ID]-[YYYY-MM-DD].html mirror',
    patternVi: 'OSINT-REPORT-[CASE-ID]-[YYYY-MM-DD].md + .docx; tuỳ chọn bản gương CTI-REPORT-[CASE-ID]-[YYYY-MM-DD].html',
    locationEn: 'Current working directory or ./osint-reports/ when present',
    locationVi: 'Thư mục hiện tại hoặc ./osint-reports/ nếu có',
    descEn: 'Reports preserve narrative evidence, structured JSON for charts, source citations, confidence, gaps, and recommendations.',
    descVi: 'Báo cáo giữ phần diễn giải bằng chứng, JSON cấu trúc cho biểu đồ, nguồn trích dẫn, confidence, khoảng trống và khuyến nghị.',
  },
  skillStack: [{ name: 'ak:agent-browser', type: 'skill' }, { name: 'web search/fetch', type: 'tool' }, { name: 'Scrapling', type: 'tool' }, { name: 'AgentFlow DAG', type: 'tool' }, { name: 'DOCX generators', type: 'tool' }],
};

export default data;

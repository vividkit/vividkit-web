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
    { number: 1, titleEn: 'Frame case', titleVi: 'Đóng khung vụ việc', descEn: 'Identify target type and lawful purpose: exposure review, domain recon, breach check, person/username/email/phone research, cloud audit, or threat model.', descVi: 'Xác định loại mục tiêu và mục đích hợp pháp: rà soát lộ diện, domain recon, kiểm breach, nghiên cứu người/username/email/phone, audit cloud hoặc threat model.' },
    { number: 2, titleEn: 'Acquire', titleVi: 'Thu thập', descEn: 'Collect raw data with /case, /sweep, /query, username, phone, email-deep, subdomain, breach, traffic, techstack, secrets, and threat-check techniques as applicable.', descVi: 'Thu dữ liệu thô bằng /case, /sweep, /query, username, phone, email-deep, subdomain, breach, traffic, techstack, secrets và threat-check khi phù hợp.' },
    { number: 3, titleEn: 'Tag source', titleVi: 'Gắn nguồn', descEn: 'Record collection method, source URL or method, timestamp, linked subjects, trust score, source reliability, and confidence level for every finding.', descVi: 'Ghi cách thu thập, URL hoặc phương pháp nguồn, thời điểm, subject liên quan, trust score, độ tin cậy nguồn và mức confidence cho từng phát hiện.' },
    { number: 4, titleEn: 'Enrich', titleVi: 'Mở rộng', descEn: 'Branch discovered identifiers, cross-reference subjects, build timelines, link subjects, show trails, and fan out enrichment when multiple subjects exist.', descVi: 'Mở rộng identifier tìm được, đối chiếu subject, dựng timeline, nối subject, hiển thị chuỗi bằng chứng và fan-out enrichment khi có nhiều subject.' },
    { number: 5, titleEn: 'Assess', titleVi: 'Đánh giá', descEn: 'Score exposure, build threat model, detect signatures, validate findings, check coverage, verify specific findings, and preserve contested evidence.', descVi: 'Chấm điểm exposure, dựng threat model, phát hiện pattern, validate phát hiện, kiểm coverage, xác minh phát hiện cụ thể và giữ lại bằng chứng mâu thuẫn.' },
    { number: 6, titleEn: 'Visualize', titleVi: 'Trực quan hoá', descEn: 'Render ASCII-first relationship maps, timelines, risk heatmaps, network topologies, threat paths, and attack-surface diagrams unless an explicit documented format asks otherwise.', descVi: 'Tạo bản đồ quan hệ, timeline, heatmap rủi ro, topology mạng, threat path và attack surface ưu tiên ASCII trừ khi định dạng được tài liệu hoá yêu cầu khác.' },
    { number: 7, titleEn: 'Deliver', titleVi: 'Bàn giao', descEn: 'Produce report, brief, legal, journalist, IOC, JSON, CSV, or HTML mirror outputs; /report, /brief, and /case auto-save Markdown and DOCX where applicable.', descVi: 'Tạo report, brief, legal, journalist, IOC, JSON, CSV hoặc HTML mirror; /report, /brief và /case tự lưu Markdown và DOCX khi phù hợp.' },
    { number: 8, titleEn: 'Validate gaps', titleVi: 'Kiểm khoảng trống', descEn: 'Run /validate and /coverage before final delivery, and list collection gaps as limitations rather than blockers.', descVi: 'Chạy /validate và /coverage trước bàn giao cuối, và ghi khoảng trống thu thập như giới hạn phương pháp thay vì blocker.' },
  ],
  corePrinciplesEn: ['Use public data only and preserve legal/ethical boundaries.', 'Every claim needs a source, trust score, and confidence level.', 'Tool limitations are collection gaps, not case blockers.', 'ASCII visualizations are the default for portable reports.', 'Deliver Markdown and DOCX for reports and briefs unless the format is machine-only.'],
  corePrinciplesVi: ['Chỉ dùng dữ liệu công khai và giữ ranh giới pháp lý/đạo đức.', 'Mỗi tuyên bố cần nguồn, trust score và mức confidence.', 'Giới hạn tool là khoảng trống thu thập, không phải lý do chặn case.', 'Trực quan ASCII là mặc định để báo cáo dễ mang đi.', 'Report và brief xuất Markdown cùng DOCX trừ định dạng thuần máy.'],
  expertiseAreasEn: ['Domain and subdomain recon', 'Breach and leak checks', 'Username/email/phone OSINT', 'Image and document forensics', 'M365/Azure tenant recon', 'Exposure scoring', 'Threat modeling', 'Structured intelligence reporting'],
  expertiseAreasVi: ['Recon domain và subdomain', 'Kiểm breach và leak', 'OSINT username/email/phone', 'Pháp chứng ảnh và tài liệu', 'Recon tenant M365/Azure', 'Chấm điểm exposure', 'Threat modeling', 'Báo cáo tình báo có cấu trúc'],
  promptExamples: [
    { labelEn: 'Full case', labelVi: 'Case đầy đủ', command: '/ak:cti-expert target.com --case', whenEn: 'Run every applicable AEAD technique for a domain, organization, person, email, username, IP, or phone target.', whenVi: 'Chạy toàn bộ kỹ thuật AEAD phù hợp cho domain, tổ chức, người, email, username, IP hoặc số điện thoại.', expectedEn: 'Acquire→Enrich→Assess→Deliver pipeline with sourced findings and saved reports.', expectedVi: 'Pipeline Acquire→Enrich→Assess→Deliver với phát hiện có nguồn và báo cáo đã lưu.', recommended: true },
    { labelEn: 'Guided flow', labelVi: 'Luồng hướng dẫn', command: '/ak:cti-expert person --flow', whenEn: 'A first-time investigator needs a step-by-step case workflow.', whenVi: 'Khi điều tra viên lần đầu cần workflow từng bước.', expectedEn: 'Interactive guided prompts with jargon controlled by the selected tier.', expectedVi: 'Các prompt hướng dẫn tương tác, thuật ngữ được điều chỉnh theo cấp độ.' },
    { labelEn: 'Recon sweep', labelVi: 'Quét recon', command: '/ak:cti-expert @handle --sweep', whenEn: 'You need a multi-vector sweep on a specific identifier.', whenVi: 'Khi cần quét nhiều hướng trên một định danh cụ thể.', expectedEn: 'Collected leads, source tags, and prioritized pivots for enrichment.', expectedVi: 'Lead đã thu thập, tag nguồn và pivot ưu tiên cho bước enrichment.' },
    { labelEn: 'HTML mirror', labelVi: 'Bản HTML', command: '/ak:cti-expert target.com --case --format html', whenEn: 'The recipient needs a browser-native incident-response artifact in addition to report files.', whenVi: 'Khi người nhận cần artifact xem bằng trình duyệt bên cạnh file báo cáo.', expectedEn: 'Self-contained HTML mirror beside the normal Markdown/DOCX deliverables.', expectedVi: 'Bản HTML tự chứa đặt cạnh đầu ra Markdown/DOCX thông thường.' },
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

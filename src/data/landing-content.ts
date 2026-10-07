// Landing page copy for VividKit Builder (the desktop app), EN + VI.
// Product facts come from the Builder docs at vividkit.app/docs: keep claims
// in sync with them (beta scope, workflows, safety, verified runtimes).
import type { Language } from '@/i18n';

export const BUILDER_LINKS = {
  docs: { en: 'https://vividkit.app/docs/en', vi: 'https://vividkit.app/docs/vi' },
  agentkit: 'https://agentkit.best/?ref=OMG49S8R',
} as const;

export type TeammateId = 'cora' | 'ada' | 'dee' | 'ben' | 'tess' | 'ivy';

export const TEAMMATE_COLORS: Record<TeammateId, string> = {
  cora: 'var(--vk-person-1)',
  ada: 'var(--vk-person-2)',
  dee: 'var(--vk-person-3)',
  ben: 'var(--vk-person-4)',
  tess: 'var(--vk-person-5)',
  ivy: 'var(--vk-person-6)',
};

interface Teammate { id: TeammateId; name: string; role: string; does: string; optional?: boolean }
interface Step { who: TeammateId | 'you'; title: string; body: string }
interface Workflow { name: string; when: string; inBeta: boolean }
interface SafetyItem { title: string; body: string }

export interface LandingContent {
  meta: { title: string; description: string };
  nav: { how: string; team: string; safety: string; guides: string; docs: string; cta: string };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    note: string;
  };
  mock: {
    inbox: string;
    projects: string;
    team: string;
    project: string;
    issueId: string;
    issueTitle: string;
    state: string;
    stages: { name: string; sub: string; state: 'done' | 'working' | 'next' }[];
    gate: string;
    askLabel: string;
    askFrom: string;
    askText: string;
    options: string[];
    running: string;
    runTitle: string;
    log: { time: string; text: string }[];
    stop: string;
    teamStatus: Record<TeammateId, string>;
  };
  how: { eyebrow: string; title: string; lead: string; steps: Step[] };
  team: { eyebrow: string; title: string; lead: string; members: Teammate[]; optionalTag: string };
  workflows: { eyebrow: string; title: string; lead: string; items: Workflow[]; laterTag: string };
  safety: { eyebrow: string; title: string; lead: string; items: SafetyItem[]; autoTitle: string; autoBody: string; more: string };
  runtimes: { eyebrow: string; title: string; lead: string; verified: string[]; moreNote: string };
  start: {
    title: string;
    lead: string;
    needsTitle: string;
    needs: string[];
    systemsTitle: string;
    systems: { name: string; status: string; ok: boolean }[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  guides: { title: string; body: string; cta: string };
}

const en: LandingContent = {
  meta: {
    title: 'Run an AI team that builds your app',
    description:
      'A desktop app for one person and a team of AI teammates. Say what you want, confirm the Requirement, read the evidence, then Apply and Publish. Beta coming in October for Linux and Apple silicon Macs.',
  },
  nav: { how: 'How it works', team: 'Team', safety: 'Safety', guides: 'Guides', docs: 'Docs', cta: 'Coming in October' },
  hero: {
    badge: 'Beta coming in October · Linux and Apple silicon Macs',
    title: 'Run an AI team that builds your app',
    subtitle:
      'VividKit Builder is a desktop app for one person and six AI teammates. You say what you want and answer their questions. They work in a private copy and bring evidence for every criterion. A teammate saying "done" is not done: only you accept.',
    ctaPrimary: 'Coming in October',
    ctaSecondary: 'Read the docs',
    note: 'Needs Claude Code on a paid plan and an AgentKit Engineer Kit license.',
  },
  mock: {
    inbox: 'Inbox',
    projects: 'Projects',
    team: 'Team',
    project: 'Kettle & Crumb',
    issueId: 'KC-14',
    issueTitle: 'Contact button misaligned on phones',
    state: 'In progress',
    stages: [
      { name: 'Locate', sub: 'Ben · done', state: 'done' },
      { name: 'Find cause', sub: 'You confirmed', state: 'done' },
      { name: 'Fix', sub: 'Ben · Builder is fixing', state: 'working' },
      { name: 'Check', sub: 'Tess · Tester', state: 'next' },
      { name: 'Code review', sub: 'Ada · Architect', state: 'next' },
    ],
    gate: 'You review · Apply · Publish',
    askLabel: 'Needs your answer',
    askFrom: 'Ada · Architect',
    askText: 'On phones, should the button span the full width, or keep its desktop size?',
    options: ['Full width', 'Keep desktop size'],
    running: 'Running · 1',
    runTitle: 'Ben · Fix',
    log: [
      { time: '14:02', text: 'Read src/components/Contact.astro' },
      { time: '14:03', text: 'Edit styles for small screens' },
      { time: '14:04', text: 'Build the site' },
    ],
    stop: 'Stop Ben',
    teamStatus: { cora: 'Idle', ada: 'Waiting', dee: 'Idle', ben: 'Working', tess: 'Queued', ivy: 'Idle' },
  },
  how: {
    eyebrow: 'How a change travels',
    title: 'From your words to your live site',
    lead: 'You decide at each checkpoint. The team does the work in between, and every step is visible.',
    steps: [
      { who: 'cora', title: 'Tell Cora', body: 'Describe the change in plain words, like "the Contact button is misaligned on phones". Cora sorts it, picks a workflow and puts an issue in your Inbox.' },
      { who: 'ada', title: 'Confirm the Requirement', body: 'Ada asks what is unclear and writes the outcome plus a short list of criteria you can check. You confirm it, then press Start.' },
      { who: 'ben', title: 'The team works in a private copy', body: 'Teammates take turns in a Relay, each in a private copy of your project. Watch, send a message, or press Stop at any time.' },
      { who: 'tess', title: 'Review the evidence', body: 'Every criterion gets evidence: screenshots VividKit takes, check results and notes. You Accept, or Send back with a note.' },
      { who: 'you', title: 'Apply and publish', body: 'A separate trusted window shows exactly what will change in your real project. Confirm there. You can Undo an Apply and roll back a release.' },
    ],
  },
  team: {
    eyebrow: 'The team',
    title: 'Six teammates, one workspace',
    lead: 'One team serves every project. Each teammate has a fixed role and does one thing at a time. Rename them, change the picture, the runtime or the permission whenever you like.',
    optionalTag: 'Optional',
    members: [
      { id: 'cora', name: 'Cora', role: 'Coordinator', does: 'Sorts your request, picks the workflow, opens the issue.' },
      { id: 'ada', name: 'Ada', role: 'Architect', does: 'Asks questions, writes the Requirement and the plan, reviews the code.' },
      { id: 'dee', name: 'Dee', role: 'Designer', does: 'Layout and look, when the change has new screens.' },
      { id: 'ben', name: 'Ben', role: 'Builder', does: 'Sets up, builds and fixes inside the private copy.' },
      { id: 'tess', name: 'Tess', role: 'Tester', does: 'Brings evidence for every criterion, before and after.' },
      { id: 'ivy', name: 'Ivy', role: 'Investigator', does: 'Finds the cause of a bug with evidence. Reads only.', optional: true },
    ],
  },
  workflows: {
    eyebrow: 'Workflows',
    title: 'A fixed path for every kind of work',
    lead: 'Cora picks the workflow and you can change it before Start. Each one has checkpoints where nobody moves on without you.',
    laterTag: 'Later',
    items: [
      { name: 'Bug fix', when: 'Something is broken. You confirm the cause before any fix.', inBeta: true },
      { name: 'Quick fix', when: 'A one-file change. If it turns out bigger, the team stops and proposes another path.', inBeta: true },
      { name: 'New feature', when: 'Add or change something people see. You can approve the plan first.', inBeta: true },
      { name: 'New project', when: 'Start from an idea in an empty folder. You confirm the technical direction.', inBeta: true },
      { name: 'Take over a project', when: 'Bring an app you already have. A read-only scan, a report, then suggested work.', inBeta: true },
      { name: 'Investigation', when: 'Understand a problem before deciding to fix it. Ends with a report.', inBeta: false },
      { name: 'Improvement', when: 'Make something measurable better, with numbers before and after.', inBeta: false },
    ],
  },
  safety: {
    eyebrow: 'Safety',
    title: 'You stay in charge of the real project',
    lead: 'These hold even with auto mode on.',
    items: [
      { title: 'A private copy per issue', body: 'The team starts in its own copy. Secret files such as .env are left out, and keys or tokens never go into prompts, logs or evidence.' },
      { title: 'Isolated by the system', body: 'Each run is sandboxed: the team cannot write outside its copy or read your sign-ins. No isolation on the machine means no Start, unless you turn on Full access yourself.' },
      { title: 'A restore point before every run', body: 'VividKit records your main branch and the live site first, compares again after, and offers Roll back if anything changed.' },
      { title: 'Your actions need the trusted window', body: 'Apply, Undo, Publish, Roll back and Create preview only run after you confirm in a separate window.' },
      { title: 'Stop means stop', body: 'Every run has a Stop button and it never asks twice. Stop all runs is one shortcut away.' },
      { title: 'No guessed numbers', body: 'Anything VividKit does not know shows as Unknown. Old evidence is marked Stale and kept, never deleted.' },
    ],
    autoTitle: 'About auto mode',
    autoBody: 'Auto mode is on by default so the team can finish the job: if the tools on your machine allow it, teammates may push, open pull requests, merge and publish. Turn it off and they only propose.',
    more: 'Read the safety guide',
  },
  runtimes: {
    eyebrow: 'Runtimes',
    title: 'Runs on the coding agents you already use',
    lead: 'Each teammate can use a different runtime. VividKit finds the ones installed on your machine and uses your own sign-in.',
    verified: ['Claude Code', 'Codex', 'OpenCode', 'GitHub Copilot CLI', 'Cursor Agent', 'Grok', 'Oh My Pi'],
    moreNote: 'Tested end to end with a full issue. More runtimes are listed in the app and marked "Not tested yet".',
  },
  start: {
    title: 'Beta coming in October',
    lead: 'Built for founders, shop owners, freelancers and small teams. Take over an app you already have, or start one from an idea. Web apps work best in the beta.',
    needsTitle: 'You need',
    needs: [
      'Claude Code, signed in on a Pro or Max plan',
      'AgentKit with an Engineer Kit license',
      'A project in a git folder, or an empty folder for a new app',
    ],
    systemsTitle: 'Systems',
    systems: [
      { name: 'Linux x86-64', status: 'Supported (.deb, AppImage)', ok: true },
      { name: 'macOS, Apple silicon', status: 'Supported, unsigned build', ok: true },
      { name: 'macOS, Intel', status: 'No build yet', ok: false },
      { name: 'Windows', status: 'Not supported yet', ok: false },
    ],
    ctaPrimary: 'Coming in October',
    ctaSecondary: 'Install guide',
  },
  guides: {
    title: 'Learning AgentKit or ClaudeKit?',
    body: 'The guides for the command line kits stay here: commands, workflows, hooks and more.',
    cta: 'Browse the guides',
  },
};

const vi: LandingContent = {
  meta: {
    title: 'Điều hành đội AI làm ứng dụng cho bạn',
    description:
      'App máy tính để một người điều hành đội đồng đội AI. Nói điều bạn muốn, xác nhận Requirement, đọc bằng chứng, rồi Áp dụng và Xuất bản. Bản beta ra mắt tháng 10 cho Linux và Mac Apple silicon.',
  },
  nav: { how: 'Cách làm', team: 'Đội', safety: 'An toàn', guides: 'Hướng dẫn', docs: 'Tài liệu', cta: 'Ra mắt tháng 10' },
  hero: {
    badge: 'Bản beta ra mắt tháng 10 · Linux và Mac Apple silicon',
    title: 'Điều hành đội AI làm ứng dụng cho bạn',
    subtitle:
      'VividKit Builder là app máy tính cho một người và sáu đồng đội AI. Bạn nói điều mình muốn và trả lời câu hỏi. Đội làm trên bản sao riêng và mang bằng chứng cho từng tiêu chí. Đồng đội báo "xong" chưa phải là xong: chỉ bạn chấp nhận.',
    ctaPrimary: 'Ra mắt tháng 10',
    ctaSecondary: 'Đọc tài liệu',
    note: 'Cần Claude Code gói trả phí và giấy phép AgentKit Engineer Kit.',
  },
  mock: {
    inbox: 'Hộp thư',
    projects: 'Dự án',
    team: 'Đội',
    project: 'Kettle & Crumb',
    issueId: 'KC-14',
    issueTitle: 'Nút Liên hệ bị lệch trên điện thoại',
    state: 'Đang thực hiện',
    stages: [
      { name: 'Khoanh vùng', sub: 'Ben · xong', state: 'done' },
      { name: 'Tìm nguyên nhân', sub: 'Bạn đã xác nhận', state: 'done' },
      { name: 'Sửa', sub: 'Ben · Lập trình đang sửa', state: 'working' },
      { name: 'Kiểm thử', sub: 'Tess · Kiểm thử', state: 'next' },
      { name: 'Soát lại mã', sub: 'Ada · Kiến trúc sư', state: 'next' },
    ],
    gate: 'Bạn duyệt · Áp dụng · Xuất bản',
    askLabel: 'Cần bạn trả lời',
    askFrom: 'Ada · Kiến trúc sư',
    askText: 'Trên điện thoại, nút nên rộng hết màn hình hay giữ kích thước như trên máy tính?',
    options: ['Rộng hết màn hình', 'Giữ như máy tính'],
    running: 'Đang chạy · 1',
    runTitle: 'Ben · Sửa',
    log: [
      { time: '14:02', text: 'Đọc src/components/Contact.astro' },
      { time: '14:03', text: 'Sửa kiểu cho màn hình nhỏ' },
      { time: '14:04', text: 'Build site' },
    ],
    stop: 'Dừng Ben',
    teamStatus: { cora: 'Rảnh', ada: 'Đang chờ', dee: 'Rảnh', ben: 'Đang làm', tess: 'Xếp hàng', ivy: 'Rảnh' },
  },
  how: {
    eyebrow: 'Một thay đổi đi thế nào',
    title: 'Từ lời bạn nói tới site thật',
    lead: 'Bạn quyết ở từng mốc. Phần việc ở giữa do đội làm, và bước nào cũng nhìn thấy được.',
    steps: [
      { who: 'cora', title: 'Kể cho Cora', body: 'Mô tả bằng lời thường, ví dụ "nút Liên hệ trên điện thoại bị lệch". Cora phân loại, chọn quy trình và tạo issue trong Hộp thư.' },
      { who: 'ada', title: 'Xác nhận Requirement', body: 'Ada hỏi điều còn chưa rõ và viết kết quả cần đạt kèm vài tiêu chí bạn tự kiểm được. Bạn xác nhận rồi bấm Bắt đầu.' },
      { who: 'ben', title: 'Đội làm trên bản sao riêng', body: 'Các đồng đội lần lượt làm trong Relay, trên bản sao riêng của dự án. Bạn xem được, nhắn được, và bấm Dừng lúc nào cũng được.' },
      { who: 'tess', title: 'Duyệt bằng chứng', body: 'Mỗi tiêu chí có bằng chứng: ảnh VividKit chụp, kết quả kiểm tra và ghi chú. Bạn Chấp nhận, hoặc Gửi lại kèm ghi chú.' },
      { who: 'you', title: 'Áp dụng và xuất bản', body: 'Cửa sổ xác nhận tin cậy riêng hiện đúng những gì sẽ đổi trong dự án thật. Bạn xác nhận ở đó, và có thể Hoàn tác hay đổi về bản trước.' },
    ],
  },
  team: {
    eyebrow: 'Đội',
    title: 'Sáu đồng đội, một workspace',
    lead: 'Một đội dùng chung cho mọi dự án. Mỗi đồng đội có vai trò cố định và làm một việc một lúc. Bạn đổi tên, ảnh, runtime hay quyền lúc nào cũng được.',
    optionalTag: 'Tùy chọn',
    members: [
      { id: 'cora', name: 'Cora', role: 'Điều phối', does: 'Phân loại yêu cầu, chọn quy trình, tạo issue.' },
      { id: 'ada', name: 'Ada', role: 'Kiến trúc sư', does: 'Hỏi cho rõ, viết Requirement và kế hoạch, soát lại mã.' },
      { id: 'dee', name: 'Dee', role: 'Thiết kế', does: 'Bố cục và kiểu dáng khi thay đổi có màn mới.' },
      { id: 'ben', name: 'Ben', role: 'Lập trình', does: 'Khởi tạo, xây dựng và sửa lỗi trong bản sao riêng.' },
      { id: 'tess', name: 'Tess', role: 'Kiểm thử', does: 'Lấy bằng chứng cho từng tiêu chí, trước và sau.' },
      { id: 'ivy', name: 'Ivy', role: 'Điều tra lỗi', does: 'Tìm nguyên nhân lỗi có bằng chứng. Chỉ đọc.', optional: true },
    ],
  },
  workflows: {
    eyebrow: 'Quy trình',
    title: 'Mỗi loại việc một đường đi rõ ràng',
    lead: 'Cora chọn quy trình, bạn đổi được trước khi Bắt đầu. Quy trình nào cũng có mốc mà không ai đi tiếp khi chưa có bạn.',
    laterTag: 'Sau',
    items: [
      { name: 'Sửa lỗi', when: 'Có gì đó đang hỏng. Bạn xác nhận nguyên nhân trước khi sửa.', inBeta: true },
      { name: 'Sửa nhanh', when: 'Đổi trong một tệp. Lớn hơn dự kiến thì đội dừng và đề xuất quy trình khác.', inBeta: true },
      { name: 'Tính năng mới', when: 'Thêm hoặc đổi thứ người dùng nhìn thấy. Bạn có thể duyệt kế hoạch trước.', inBeta: true },
      { name: 'Dự án mới', when: 'Bắt đầu từ ý tưởng trong thư mục trống. Bạn xác nhận hướng kỹ thuật.', inBeta: true },
      { name: 'Nhận dự án có sẵn', when: 'Đưa ứng dụng bạn đã có vào. Quét chỉ đọc, báo cáo, rồi gợi ý việc.', inBeta: true },
      { name: 'Điều tra', when: 'Hiểu vấn đề trước khi quyết có sửa không. Kết thúc bằng báo cáo.', inBeta: false },
      { name: 'Cải thiện', when: 'Làm tốt hơn thứ đo được, có số đo trước và sau.', inBeta: false },
    ],
  },
  safety: {
    eyebrow: 'An toàn',
    title: 'Bạn vẫn nắm dự án thật',
    lead: 'Những điều này luôn đúng, kể cả khi bật chế độ tự động.',
    items: [
      { title: 'Mỗi issue một bản sao riêng', body: 'Đội bắt đầu trên bản sao của mình. Tệp bí mật như .env không có trong bản sao, và khoá hay token không bao giờ vào prompt, nhật ký hay bằng chứng.' },
      { title: 'Hệ điều hành rào lại', body: 'Mỗi lượt chạy nằm trong sandbox: đội không ghi được ra ngoài bản sao, không đọc được thông tin đăng nhập của bạn. Máy không có rào chắn thì không Bắt đầu, trừ khi bạn tự bật Toàn quyền.' },
      { title: 'Điểm khôi phục trước mỗi lượt chạy', body: 'VividKit ghi lại nhánh chính và bản đang chạy trên site trước, so lại sau, và cho Đổi về bản trước nếu có gì đã đổi.' },
      { title: 'Hành động của bạn qua cửa sổ tin cậy', body: 'Áp dụng, Hoàn tác, Xuất bản, Đổi về bản trước và Tạo bản xem trước chỉ chạy sau khi bạn xác nhận trong cửa sổ riêng.' },
      { title: 'Dừng là dừng', body: 'Lượt chạy nào cũng có nút Dừng và không bao giờ hỏi lại. Dừng tất cả chỉ cách một phím tắt.' },
      { title: 'Không đoán số', body: 'Điều VividKit chưa biết hiện là Chưa rõ. Bằng chứng cũ được đánh Đã cũ và giữ lại, không xoá.' },
    ],
    autoTitle: 'Về chế độ tự động',
    autoBody: 'Chế độ tự động mặc định bật để đội làm trọn việc: nếu công cụ trên máy cho phép, đồng đội được đẩy nhánh, mở PR, merge và xuất bản. Tắt đi thì đội chỉ đề xuất.',
    more: 'Đọc hướng dẫn an toàn',
  },
  runtimes: {
    eyebrow: 'Runtime',
    title: 'Chạy trên các công cụ lập trình AI bạn đang dùng',
    lead: 'Mỗi đồng đội có thể dùng một runtime khác nhau. VividKit tìm các runtime đã cài trên máy và dùng chính tài khoản bạn đã đăng nhập.',
    verified: ['Claude Code', 'Codex', 'OpenCode', 'GitHub Copilot CLI', 'Cursor Agent', 'Grok', 'Oh My Pi'],
    moreNote: 'Đã chạy thật trọn một issue. App còn liệt kê thêm runtime khác, ghi "Chưa kiểm thật".',
  },
  start: {
    title: 'Bản beta ra mắt tháng 10',
    lead: 'Dành cho người lập dự án, chủ tiệm, freelancer và team nhỏ. Nhận ứng dụng bạn đã có, hoặc bắt đầu từ ý tưởng. Ở bản beta, ứng dụng web chạy tốt nhất.',
    needsTitle: 'Bạn cần',
    needs: [
      'Claude Code, đăng nhập gói Pro hoặc Max',
      'AgentKit với giấy phép Engineer Kit',
      'Một dự án trong thư mục git, hoặc thư mục trống cho ứng dụng mới',
    ],
    systemsTitle: 'Hệ điều hành',
    systems: [
      { name: 'Linux x86-64', status: 'Hỗ trợ (.deb, AppImage)', ok: true },
      { name: 'macOS, Apple silicon', status: 'Hỗ trợ, bản chưa ký', ok: true },
      { name: 'macOS, Intel', status: 'Chưa có bản cài', ok: false },
      { name: 'Windows', status: 'Chưa hỗ trợ', ok: false },
    ],
    ctaPrimary: 'Ra mắt tháng 10',
    ctaSecondary: 'Hướng dẫn cài',
  },
  guides: {
    title: 'Đang học AgentKit hay ClaudeKit?',
    body: 'Các hướng dẫn cho bộ công cụ dòng lệnh vẫn ở đây: lệnh, quy trình, hook và nhiều hơn nữa.',
    cta: 'Xem hướng dẫn',
  },
};

export const landingContent: Record<Language, LandingContent> = { en, vi };

// Landing page copy for VividKit Builder, EN + VI. The hero, flow, safety bento and team row
// follow the vividkit.app home page (vividkit-builder apps/docs/app/[lang]/(home)/page.tsx);
// the rest introduces the product in more depth. Product facts must match the Builder docs.
// Section titles mark their key phrase with [brackets]; <Highlight> renders it in the accent gradient.
// Downloads and links to the Builder docs stay off until the beta ships: the actions read "Coming soon".
import type { Language } from '@/i18n';

export const BUILDER_LINKS = {
  agentkit: 'https://agentkit.best/?ref=OMG49S8R',
} as const;

export type FlowIcon = 'message' | 'file' | 'branch' | 'eye' | 'shield';
export type WhyIcon = 'chat' | 'evidence' | 'shield';
export type AudienceIcon = 'store' | 'rocket' | 'briefcase' | 'users';

interface Section { eyebrow: string; title: string; lead: string }

export interface LandingContent {
  meta: { title: string; description: string };
  nav: { how: string; team: string; safety: string; guides: string; cta: string };
  hero: {
    badge: string;
    title: [string, string, string];
    lead: string;
    soon: string;
    soonWhen: string;
    runsOn: string;
  };
  why: Section & { items: { icon: WhyIcon; before: string; title: string; body: string }[]; beforeLabel: string };
  audience: Section & {
    people: { icon: AudienceIcon; title: string; body: string }[];
    paths: { title: string; body: string }[];
  };
  flow: Section & { steps: [FlowIcon, string, string][] };
  team: Section;
  workflows: Section & { items: { name: string; when: string; inBeta: boolean }[]; laterTag: string };
  safety: Section & { autoTitle: string; autoBody: string };
  runtimes: Section & { verified: string[] };
  start: Section & {
    needsTitle: string;
    needs: string[];
    systemsTitle: string;
    systems: { name: string; status: string; ok: boolean }[];
  };
  faq: Section & { items: { q: string; a: string }[] };
  cta: { title: string; lead: string };
  guides: { title: string; body: string; cta: string };
}

const en: LandingContent = {
  meta: {
    title: 'Run an AI team that builds your apps',
    description:
      'VividKit Builder is a desktop app for one person to direct a team of AI teammates. Say what you want, confirm the Requirement, read the evidence, then Apply and Publish. Beta coming soon for Linux and Apple silicon Macs.',
  },
  nav: { how: 'How it works', team: 'Team', safety: 'Safety', guides: 'Guides', cta: 'Coming soon' },
  hero: {
    badge: 'Beta coming soon · Linux and Apple silicon',
    title: ['Run an ', 'AI team', ' that builds your apps'],
    lead: 'VividKit Builder is a desktop app for one person to direct a team of AI teammates. You say what you want; the team works in a private copy, VividKit collects evidence, and the work is done only when you accept it.',
    soon: 'Coming soon',
    soonWhen: 'October',
    runsOn: 'Runs on your machine with Claude Code, AgentKit, Git and Cloudflare Pages.',
  },
  why: {
    eyebrow: 'Why VividKit',
    title: 'Coding agents are powerful. Directing them should [not need a terminal].',
    lead: 'Tools like Claude Code can build real software, but they expect you to type commands, read diffs and trust a "done". VividKit puts a calm desk around them, so you manage outcomes instead of tools.',
    beforeLabel: 'Without VividKit',
    items: [
      {
        icon: 'chat',
        before: 'Prompts, flags and terminal sessions',
        title: 'You talk, the team works',
        body: 'Describe the change in plain words. Cora picks the right workflow, Ada asks what is unclear, and teammates take turns until there is something to review.',
      },
      {
        icon: 'evidence',
        before: 'An agent saying it is done',
        title: 'Evidence for every criterion',
        body: 'Each Requirement has criteria you can check. VividKit screenshots pages at phone and desktop size and records checks, so you accept what you can see.',
      },
      {
        icon: 'shield',
        before: 'An agent loose in your real folder',
        title: 'Your project stays yours',
        body: 'The team works in a private copy, behind the operating system’s isolation. A restore point comes before every run, and real changes go through a trusted window.',
      },
    ],
  },
  audience: {
    eyebrow: 'Who it is for',
    title: 'For people with [an app to build], not a team to manage',
    lead: 'You do not need to know Git or write code. You need an idea, or an app that needs work.',
    people: [
      { icon: 'rocket', title: 'Founders', body: 'Turn an idea into a working first version, one checked change at a time.' },
      { icon: 'store', title: 'Shop owners', body: 'Keep your site current: new products, fixes and pages, without waiting on a developer.' },
      { icon: 'briefcase', title: 'Freelancers', body: 'Hand routine work to the team and spend your time on the parts clients notice.' },
      { icon: 'users', title: 'Small teams', body: 'One shared AI team for every project, with a clear record of what changed and why.' },
    ],
    paths: [
      { title: 'Take over an app you have', body: 'The team scans it read-only, explains how it works, and suggests what to do next.' },
      { title: 'Start one from an idea', body: 'Ada helps you shape the first version and a technical direction before anything is built.' },
    ],
  },
  flow: {
    eyebrow: 'How it works',
    title: 'From [one sentence] to a published change',
    lead: 'You decide at each checkpoint. The team does the work in between, and every step is visible.',
    steps: [
      ['message', 'Tell Cora', 'Say what you want in plain words. Cora sorts it and opens an issue in your Inbox.'],
      ['file', 'Confirm the Requirement', 'Ada asks what is unclear and turns it into criteria you can check.'],
      ['branch', 'The team works', 'Teammates take turns in a relay, in a private copy. Watch or Stop anytime.'],
      ['eye', 'Review evidence', 'Screenshots and check results for each criterion. Accept, or send it back.'],
      ['shield', 'Apply and publish', 'Confirm the exact files in the trusted window. Undo and roll back stay possible.'],
    ],
  },
  team: {
    eyebrow: 'The team',
    title: 'Your [team], shared by every project',
    lead: 'Six teammates with fixed roles, each doing one thing at a time. Rename them, change their runtime, or add more.',
  },
  workflows: {
    eyebrow: 'Workflows',
    title: 'A [fixed path] for every kind of work',
    lead: 'Cora picks the workflow and you can change it before Start. Each one has checkpoints where nobody moves on without you.',
    laterTag: 'Later',
    items: [
      { name: 'Bug fix', when: 'Something is broken. You confirm the cause before any fix.', inBeta: true },
      { name: 'Quick fix', when: 'A one-file change. If it turns out bigger, the team stops and proposes another path.', inBeta: true },
      { name: 'New feature', when: 'Add or change something people see. You can approve the plan first.', inBeta: true },
      { name: 'New project', when: 'Start from an idea in an empty folder. You confirm the technical direction.', inBeta: true },
      { name: 'Take over a project', when: 'Bring an app you already have: a read-only scan, a report, then suggested work.', inBeta: true },
      { name: 'Investigation', when: 'Understand a problem before deciding to fix it. Ends with a report.', inBeta: false },
      { name: 'Improvement', when: 'Make something measurable better, with numbers before and after.', inBeta: false },
    ],
  },
  safety: {
    eyebrow: 'Safety',
    title: 'Built so [you stay in charge]',
    lead: 'Agents move fast. VividKit makes every step visible, reversible and yours to accept.',
    autoTitle: 'About auto mode',
    autoBody: 'Auto mode is on by default so the team can finish the job: if the tools on your machine allow it, teammates may push, open pull requests, merge and publish. VividKit still keeps a restore point and offers Roll back. Turn it off and they only propose.',
  },
  runtimes: {
    eyebrow: 'Runtimes',
    title: 'Works with the [coding agents] you already use',
    lead: 'Each teammate can run on a different runtime. VividKit finds the ones installed on your machine and uses your own sign-in.',
    verified: ['Claude Code', 'Codex', 'OpenCode', 'GitHub Copilot CLI', 'Cursor Agent', 'Grok', 'Oh My Pi'],
  },
  start: {
    eyebrow: 'Before you begin',
    title: 'What [you need]',
    lead: 'VividKit checks these for you when it starts, and tells you what is missing.',
    needsTitle: 'On your machine',
    needs: [
      'Claude Code, signed in on a Pro or Max plan',
      'AgentKit with an Engineer Kit license',
      'A project in a Git folder, or an empty folder for a new app',
    ],
    systemsTitle: 'Systems',
    systems: [
      { name: 'Linux x86-64', status: 'Supported (.deb, AppImage)', ok: true },
      { name: 'macOS, Apple silicon', status: 'Supported', ok: true },
      { name: 'macOS, Intel', status: 'Coming soon', ok: false },
      { name: 'Windows', status: 'Coming soon', ok: false },
    ],
  },
  faq: {
    eyebrow: 'Questions',
    title: 'Good to [know]',
    lead: '',
    items: [
      {
        q: 'Do I need to know how to code?',
        a: 'No. You describe what you want, answer questions, read the evidence and press Accept, Apply and Publish. Technical details stay one click away for when you want them.',
      },
      {
        q: 'Can the team break my real project?',
        a: 'The team starts in a private copy of your project. VividKit records a restore point before every run, reports any change to the real project or site afterwards, and offers Roll back. Turn auto mode off and only you can apply or publish.',
      },
      {
        q: 'Which AI does it use, and who pays for it?',
        a: 'Your own. VividKit runs the coding agents installed on your machine with your sign-in, so runs use your existing plans. Claude Code on a Pro or Max plan is required for the beta.',
      },
      {
        q: 'Is it only for websites?',
        a: 'No. VividKit tells web apps from other apps. Web apps get the most: page screenshots as evidence and publishing to Cloudflare Pages. For other apps the evidence comes from tests, builds and runs, and publishing is not available yet.',
      },
      {
        q: 'Where do my project files and notes live?',
        a: 'On your machine. Requirements, plans, reports and the changelog are written into your project folder, so you can read them without VividKit.',
      },
    ],
  },
  cta: {
    title: 'Bring an app. [Meet your team.]',
    lead: 'The beta is coming soon. When it lands, add a project and tell Cora about the first small thing to fix.',
  },
  guides: {
    title: 'Learning AgentKit or ClaudeKit?',
    body: 'The guides for the command line kits stay here: commands, workflows, hooks and more.',
    cta: 'Browse the guides',
  },
};

const vi: LandingContent = {
  meta: {
    title: 'Điều hành một đội AI làm ứng dụng cho bạn',
    description:
      'VividKit Builder là app máy tính để một người điều hành đội đồng đội AI. Nói điều bạn muốn, xác nhận Requirement, đọc bằng chứng, rồi Áp dụng và Xuất bản. Bản beta sắp ra mắt cho Linux và Mac Apple silicon.',
  },
  nav: { how: 'Cách làm', team: 'Đội', safety: 'An toàn', guides: 'Hướng dẫn', cta: 'Sắp ra mắt' },
  hero: {
    badge: 'Bản beta sắp ra mắt · Linux và Apple silicon',
    title: ['Điều hành một ', 'đội AI', ' làm ứng dụng cho bạn'],
    lead: 'VividKit Builder là app máy tính để một người điều hành đội đồng đội AI. Bạn nói điều mình muốn; đội làm trên bản sao riêng, VividKit thu bằng chứng, và việc chỉ xong khi bạn chấp nhận.',
    soon: 'Sắp ra mắt',
    soonWhen: 'tháng 10',
    runsOn: 'Chạy ngay trên máy bạn với Claude Code, AgentKit, Git và Cloudflare Pages.',
  },
  why: {
    eyebrow: 'Vì sao có VividKit',
    title: 'Agent lập trình rất mạnh. Điều hành chúng [không nên cần terminal].',
    lead: 'Những công cụ như Claude Code làm được phần mềm thật, nhưng đòi bạn gõ lệnh, đọc diff và tin vào một chữ "xong". VividKit dựng một bàn làm việc yên tĩnh quanh chúng, để bạn quản kết quả thay vì quản công cụ.',
    beforeLabel: 'Khi chưa có VividKit',
    items: [
      {
        icon: 'chat',
        before: 'Prompt, cờ lệnh và phiên terminal',
        title: 'Bạn nói, đội làm',
        body: 'Mô tả thay đổi bằng lời thường. Cora chọn đúng quy trình, Ada hỏi điều còn chưa rõ, các đồng đội lần lượt làm tới khi có thứ để bạn duyệt.',
      },
      {
        icon: 'evidence',
        before: 'Một agent tự báo là xong',
        title: 'Bằng chứng cho từng tiêu chí',
        body: 'Mỗi Requirement có tiêu chí kiểm được. VividKit chụp trang ở cỡ điện thoại và máy tính, ghi lại kết quả kiểm, để bạn chấp nhận thứ mình nhìn thấy.',
      },
      {
        icon: 'shield',
        before: 'Một agent thả rông trong thư mục thật',
        title: 'Dự án vẫn là của bạn',
        body: 'Đội làm trên bản sao riêng, sau rào chắn của hệ điều hành. Trước mỗi lượt chạy có điểm khôi phục, và thay đổi thật đi qua cửa sổ tin cậy.',
      },
    ],
  },
  audience: {
    eyebrow: 'Dành cho ai',
    title: 'Cho người có [ứng dụng cần làm], không phải có đội cần quản',
    lead: 'Bạn không cần biết Git hay viết code. Bạn cần một ý tưởng, hoặc một ứng dụng đang cần làm thêm.',
    people: [
      { icon: 'rocket', title: 'Người lập dự án', body: 'Biến ý tưởng thành bản đầu tiên chạy được, từng thay đổi một, có kiểm chứng.' },
      { icon: 'store', title: 'Chủ tiệm', body: 'Giữ site luôn mới: sản phẩm, trang và chỗ sửa, không phải chờ lập trình viên.' },
      { icon: 'briefcase', title: 'Freelancer', body: 'Giao việc lặp lại cho đội, dành thời gian cho phần khách hàng để ý.' },
      { icon: 'users', title: 'Team nhỏ', body: 'Một đội AI dùng chung cho mọi dự án, ghi rõ cái gì đã đổi và vì sao.' },
    ],
    paths: [
      { title: 'Nhận ứng dụng bạn đã có', body: 'Đội quét chỉ đọc, giải thích dự án chạy thế nào, rồi gợi ý việc nên làm tiếp.' },
      { title: 'Bắt đầu từ ý tưởng', body: 'Ada giúp bạn định hình bản đầu tiên và hướng kỹ thuật trước khi bắt tay xây.' },
    ],
  },
  flow: {
    eyebrow: 'Cách làm',
    title: 'Từ [một câu nói] tới thay đổi đã xuất bản',
    lead: 'Bạn quyết ở từng mốc. Phần việc ở giữa do đội làm, và bước nào cũng nhìn thấy được.',
    steps: [
      ['message', 'Kể cho Cora', 'Nói điều bạn muốn bằng lời thường. Cora phân loại và tạo issue trong Hộp thư.'],
      ['file', 'Xác nhận Requirement', 'Ada hỏi điều chưa rõ và biến nó thành tiêu chí kiểm được.'],
      ['branch', 'Đội bắt tay làm', 'Các đồng đội tiếp sức trên bản sao riêng. Xem hoặc Dừng lúc nào cũng được.'],
      ['eye', 'Duyệt bằng chứng', 'Ảnh chụp và kết quả kiểm theo từng tiêu chí. Chấp nhận, hoặc gửi lại.'],
      ['shield', 'Áp dụng và xuất bản', 'Xác nhận đúng từng tệp trong cửa sổ tin cậy. Vẫn hoàn tác và đổi về được.'],
    ],
  },
  team: {
    eyebrow: 'Đội',
    title: '[Đội của bạn], dùng chung cho mọi dự án',
    lead: 'Sáu đồng đội với vai trò cố định, mỗi người làm một việc một lúc. Đổi tên, đổi runtime, hoặc tuyển thêm.',
  },
  workflows: {
    eyebrow: 'Quy trình',
    title: 'Mỗi loại việc một [đường đi rõ ràng]',
    lead: 'Cora chọn quy trình, bạn đổi được trước khi Bắt đầu. Quy trình nào cũng có mốc mà không ai đi tiếp khi chưa có bạn.',
    laterTag: 'Sau',
    items: [
      { name: 'Sửa lỗi', when: 'Có gì đó đang hỏng. Bạn xác nhận nguyên nhân trước khi sửa.', inBeta: true },
      { name: 'Sửa nhanh', when: 'Đổi trong một tệp. Lớn hơn dự kiến thì đội dừng và đề xuất quy trình khác.', inBeta: true },
      { name: 'Tính năng mới', when: 'Thêm hoặc đổi thứ người dùng nhìn thấy. Bạn có thể duyệt kế hoạch trước.', inBeta: true },
      { name: 'Dự án mới', when: 'Bắt đầu từ ý tưởng trong thư mục trống. Bạn xác nhận hướng kỹ thuật.', inBeta: true },
      { name: 'Nhận dự án có sẵn', when: 'Đưa ứng dụng bạn đã có vào: quét chỉ đọc, báo cáo, rồi gợi ý việc.', inBeta: true },
      { name: 'Điều tra', when: 'Hiểu vấn đề trước khi quyết có sửa không. Kết thúc bằng báo cáo.', inBeta: false },
      { name: 'Cải thiện', when: 'Làm tốt hơn thứ đo được, có số đo trước và sau.', inBeta: false },
    ],
  },
  safety: {
    eyebrow: 'An toàn',
    title: 'Thiết kế để [bạn luôn cầm lái]',
    lead: 'Agent làm rất nhanh. VividKit làm cho mỗi bước đều thấy được, quay lại được, và chỉ xong khi bạn chấp nhận.',
    autoTitle: 'Về chế độ tự động',
    autoBody: 'Chế độ tự động mặc định bật để đội làm trọn việc: nếu công cụ trên máy cho phép, đồng đội được đẩy nhánh, mở PR, merge và xuất bản. VividKit vẫn giữ điểm khôi phục và cho Đổi về bản trước. Tắt đi thì đội chỉ đề xuất.',
  },
  runtimes: {
    eyebrow: 'Runtime',
    title: 'Dùng được với các [agent lập trình] bạn đang có',
    lead: 'Mỗi đồng đội có thể chạy trên một runtime khác nhau. VividKit tìm các runtime đã cài trên máy và dùng chính tài khoản bạn đã đăng nhập.',
    verified: ['Claude Code', 'Codex', 'OpenCode', 'GitHub Copilot CLI', 'Cursor Agent', 'Grok', 'Oh My Pi'],
  },
  start: {
    eyebrow: 'Trước khi bắt đầu',
    title: 'Bạn [cần gì]',
    lead: 'VividKit tự kiểm những thứ này khi khởi động và cho bạn biết còn thiếu gì.',
    needsTitle: 'Trên máy của bạn',
    needs: [
      'Claude Code, đăng nhập gói Pro hoặc Max',
      'AgentKit với giấy phép Engineer Kit',
      'Một dự án trong thư mục Git, hoặc thư mục trống cho ứng dụng mới',
    ],
    systemsTitle: 'Hệ điều hành',
    systems: [
      { name: 'Linux x86-64', status: 'Hỗ trợ (.deb, AppImage)', ok: true },
      { name: 'macOS, Apple silicon', status: 'Hỗ trợ', ok: true },
      { name: 'macOS, Intel', status: 'Sắp ra mắt', ok: false },
      { name: 'Windows', status: 'Sắp ra mắt', ok: false },
    ],
  },
  faq: {
    eyebrow: 'Câu hỏi',
    title: 'Điều [nên biết]',
    lead: '',
    items: [
      {
        q: 'Tôi có cần biết lập trình không?',
        a: 'Không. Bạn mô tả điều mình muốn, trả lời câu hỏi, đọc bằng chứng rồi bấm Chấp nhận, Áp dụng và Xuất bản. Chi tiết kỹ thuật vẫn ở đó khi bạn cần xem.',
      },
      {
        q: 'Đội có làm hỏng dự án thật của tôi không?',
        a: 'Đội bắt đầu trên bản sao riêng của dự án. VividKit ghi điểm khôi phục trước mỗi lượt chạy, báo nếu dự án thật hay site đã đổi, và cho Đổi về bản trước. Tắt chế độ tự động thì chỉ bạn mới áp dụng hay xuất bản được.',
      },
      {
        q: 'VividKit dùng AI nào, và ai trả tiền?',
        a: 'Của chính bạn. VividKit chạy các agent lập trình đã cài trên máy bằng tài khoản bạn đăng nhập, nên lượt chạy dùng gói bạn đang có. Bản beta cần Claude Code gói Pro hoặc Max.',
      },
      {
        q: 'Chỉ dùng cho website thôi à?',
        a: 'Không. VividKit phân biệt ứng dụng web với ứng dụng khác. Ứng dụng web được nhiều nhất: ảnh chụp trang làm bằng chứng và xuất bản lên Cloudflare Pages. Với ứng dụng khác, bằng chứng đến từ test, build và chạy thử, và chưa có xuất bản.',
      },
      {
        q: 'Tệp và ghi chú của dự án nằm ở đâu?',
        a: 'Trên máy của bạn. Requirement, kế hoạch, báo cáo và changelog được ghi vào thư mục dự án, đọc được cả khi không mở VividKit.',
      },
    ],
  },
  cta: {
    title: 'Mang ứng dụng tới. [Gặp đội của bạn.]',
    lead: 'Bản beta sắp ra mắt. Khi có bản, hãy thêm một dự án và kể cho Cora việc nhỏ đầu tiên cần sửa.',
  },
  guides: {
    title: 'Đang học AgentKit hay ClaudeKit?',
    body: 'Các hướng dẫn cho bộ công cụ dòng lệnh vẫn ở đây: lệnh, quy trình, hook và nhiều hơn nữa.',
    cta: 'Xem hướng dẫn',
  },
};

export const landingContent: Record<Language, LandingContent> = { en, vi };

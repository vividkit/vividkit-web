// Landing page copy for VividKit (the VividKit Builder desktop app), EN + VI. The hero, flow, safety
// bento and team row follow the vividkit.app home page (vividkit-builder apps/docs/app/[lang]/(home)/page.tsx);
// the rest introduces the product in more depth. Product facts must match the Builder docs
// (vividkit-builder apps/docs/content/docs/*, docs/PROGRESS.md): requirements, runtimes, safety, workflows.
// Section titles mark their key phrase with [brackets]; <Highlight> renders it in the accent gradient.
// The beta is planned, not released: no download buttons, and no mention of where downloads will live
// until the beta ships (the download host is not ready to be shown).
// Founder facts confirmed by the owner (Oct 2026): Thieu Nguyen, Founder, github.com/thieung. No legal
// entity or founding date is listed on purpose; do not add one without a document to back it.
import type { Language } from '@/i18n';

export const BUILDER_LINKS = {
  agentkit: 'https://agentkit.best/?ref=OMG49S8R',
} as const;

export const CONTACT = {
  email: 'hello@vividkit.dev',
  founderGithub: 'https://github.com/thieung',
  orgGithub: 'https://github.com/vividkit',
} as const;

export type FlowIcon = 'message' | 'file' | 'branch' | 'eye' | 'shield';
export type WhyIcon = 'chat' | 'evidence' | 'shield';
export type AudienceIcon = 'store' | 'rocket' | 'briefcase' | 'users';
export type StackIcon = 'claude' | 'kit' | 'app' | 'more';

// Product marks for the "Built on" cards; 'more' (other runtimes) keeps a generic icon.
// claude-code.svg is the Claude Code mark from @lobehub/icons-static-svg (MIT), the same file the
// Builder app uses for its runtime badge; vividkit.svg is the app icon (vividkit-builder
// apps/desktop/resources/icons/icon.svg); agentkit.webp is the AgentKit logo supplied by the owner.
export const STACK_LOGOS: Partial<Record<StackIcon, string>> = {
  claude: '/landing/logos/claude-code.svg',
  kit: '/landing/logos/agentkit.webp',
  app: '/landing/logos/vividkit.svg',
};

interface Section { eyebrow: string; title: string; lead: string }

export interface LandingContent {
  meta: { title: string; description: string };
  nav: { how: string; status: string; safety: string; about: string; guides: string; cta: string };
  hero: {
    badge: string;
    title: [string, string, string];
    lead: string;
    soon: string;
    soonWhen: string;
    noDownload: string;
    runsOn: string;
    illustration: string;
  };
  why: Section & { items: { icon: WhyIcon; before: string; title: string; body: string }[]; beforeLabel: string };
  audience: Section & {
    people: { icon: AudienceIcon; title: string; body: string }[];
    paths: { title: string; body: string }[];
  };
  flow: Section & { steps: [FlowIcon, string, string][] };
  status: Section & {
    columns: { label: string; tone: 'now' | 'beta' | 'later'; items: string[] }[];
    note: string;
  };
  stack: Section & { items: { icon: StackIcon; name: string; role: string; body: string }[]; fine: string };
  team: Section;
  workflows: Section & { items: { name: string; when: string; inBeta: boolean }[]; laterTag: string };
  safety: Section & { autoTitle: string; autoBody: string; illustration: string };
  runtimes: Section & { verified: string[]; fine: string };
  start: Section & {
    needsTitle: string;
    needs: string[];
    systemsTitle: string;
    systems: { name: string; status: string; ok: boolean }[];
  };
  faq: Section & { items: { q: string; a: string }[] };
  cta: { title: string; lead: string };
  waitlist: {
    join: string;
    name: string;
    email: string;
    role: string;
    rolePlaceholder: string;
    roles: { value: string; label: string }[];
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    successTitle: string;
    successBody: string;
    errorFallback: string;
    privacy: string;
    errors: { name: string; email: string; role: string; message: string };
  };
  about: Section & {
    founder: { name: string; role: string; body: string; github: string; photoAlt: string };
    contact: { title: string; body: string; github: string };
    independent: string;
  };
  guides: Section & { links: { label: string; path: string }[]; cta: string; fine: string };
}

const en: LandingContent = {
  meta: {
    title: 'A desktop app to run an AI team that builds your apps',
    description:
      'VividKit is a desktop app for builders. Direct AI teammates that run on Claude Code: say what you want, review the evidence, then Apply and Publish. In development; beta planned for October 2026.',
  },
  nav: { how: 'How it works', status: 'Status', safety: 'Safety', about: 'About', guides: 'Guides', cta: 'Join the waitlist' },
  hero: {
    badge: 'In development · Beta planned for October 2026',
    title: ['Run an ', 'AI team', ' that builds your apps'],
    lead: 'VividKit is a desktop app for builders who want to ship apps with AI coding agents without living in a terminal. You say what you want; teammates that run on Claude Code work in a private copy of your project, VividKit collects evidence, and the work is done only when you accept it.',
    soon: 'Beta planned',
    soonWhen: 'October 2026',
    noDownload: 'Not released yet: there is no download until the beta ships.',
    runsOn: 'Runs on your machine, with your own Claude Code sign-in and AgentKit.',
    illustration: 'Illustration of a Bug fix run, made for this page. Not a screenshot of the app.',
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
        body: 'Each Requirement has criteria you can check. For web apps, VividKit screenshots pages at phone and desktop size and records checks, so you accept what you can see.',
      },
      {
        icon: 'shield',
        before: 'An agent loose in your real folder',
        title: 'Your project stays yours',
        body: 'The team works in a private copy of your project. A restore point comes before every run, and Apply and Publish go through a separate confirmation window.',
      },
    ],
  },
  audience: {
    eyebrow: 'Who it is for',
    title: 'For builders with [an app to build], not a team to manage',
    lead: 'You do not need to know Git or write code. You need an idea, or an app that needs work. The beta starts with web apps.',
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
      ['shield', 'Apply and publish', 'Confirm the exact files in a separate window. Undo and roll back stay possible.'],
    ],
  },
  status: {
    eyebrow: 'Where it is today',
    title: 'Built and tested in-house. [Beta planned for October 2026.]',
    lead: 'VividKit is not publicly released yet. Here is what works today, what the beta is meant to include, and what comes after. The date is a plan, not a promise.',
    columns: [
      {
        label: 'Works today, in our development builds',
        tone: 'now',
        items: [
          'The full loop for web apps: tell Cora, confirm a Requirement, the team works in a private copy, review evidence, Apply, then Publish through Cloudflare Pages.',
          'Workflows: Bug fix, Quick fix, New feature, New project, Take over a project and Restructure.',
          'Nine coding-agent CLIs, each of which has run a whole issue in our own tests. Claude Code comes first.',
          'Test builds run on Linux, on an Apple silicon Mac and on Windows 11.',
        ],
      },
      {
        label: 'Planned for the beta, October 2026',
        tone: 'beta',
        items: [
          'A first public build, 0.1.0-beta.1, offered as a download.',
          'Linux (.deb and AppImage), macOS on Apple silicon and Windows x64, as unsigned builds.',
          'An email to everyone on the waitlist when it is ready.',
        ],
      },
      {
        label: 'After the beta',
        tone: 'later',
        items: [
          'Investigation and Improvement workflows.',
          'More skill packs, so AgentKit is no longer required.',
          'Publishing apps that are not websites.',
        ],
      },
    ],
    note: 'Until the beta ships there is no public download.',
  },
  stack: {
    eyebrow: 'Built on',
    title: 'What [Claude Code and AgentKit] do in VividKit',
    lead: 'VividKit is the desk around coding agents, not a model of its own. This is who does what.',
    items: [
      {
        icon: 'claude',
        name: 'Claude Code',
        role: 'Does the work · required for the beta',
        body: 'Each teammate, and Cora who sorts your requests, runs as a Claude Code session on your machine, signed in with your own Pro or Max plan.',
      },
      {
        icon: 'kit',
        name: 'AgentKit',
        role: 'Skill pack · Engineer Kit license required',
        body: 'Stages such as planning, testing and code review use AgentKit skills. AgentKit is a separate product from another team.',
      },
      {
        icon: 'app',
        name: 'VividKit',
        role: 'The desktop app',
        body: 'Keeps versioned Requirements, runs the relay in a private copy, takes the screenshots used as evidence, and puts Apply and Publish behind a confirmation window.',
      },
      {
        icon: 'more',
        name: 'Other runtimes',
        role: 'Optional',
        body: 'Codex, OpenCode and other agent CLIs can run individual teammates instead of Claude Code.',
      },
    ],
    fine: 'VividKit does not call the Claude API itself and does not resell model access: runs use your own Claude Code plan. We also use Claude Code to build VividKit. VividKit is an independent project and is not affiliated with, sponsored or endorsed by Anthropic. Claude and Claude Code are trademarks of Anthropic.',
  },
  team: {
    eyebrow: 'The team',
    title: 'Your [team], shared by every project',
    lead: 'Six teammates with fixed roles, each doing one thing at a time. Rename them, or change the runtime each one runs on.',
  },
  workflows: {
    eyebrow: 'Workflows',
    title: 'A [fixed path] for every kind of work',
    lead: 'Cora picks the workflow and you can change it before Start. Each one has checkpoints where nobody moves on without you.',
    laterTag: 'After the beta',
    items: [
      { name: 'Bug fix', when: 'Something is broken. You confirm the cause before any fix.', inBeta: true },
      { name: 'Quick fix', when: 'A one-file change. If it turns out bigger, the team stops and proposes another path.', inBeta: true },
      { name: 'New feature', when: 'Add or change something people see. You can approve the plan first.', inBeta: true },
      { name: 'New project', when: 'Start from an idea in an empty folder. You confirm the technical direction.', inBeta: true },
      { name: 'Take over a project', when: 'Bring an app you already have: a read-only scan, a report, then suggested work.', inBeta: true },
      { name: 'Restructure', when: 'Reorganise the code or move stacks while users see no difference. Tests run before and after.', inBeta: true },
      { name: 'Investigation', when: 'Understand a problem before deciding to fix it. Ends with a report.', inBeta: false },
      { name: 'Improvement', when: 'Make something measurable better, with numbers before and after.', inBeta: false },
    ],
  },
  safety: {
    eyebrow: 'Safety',
    title: 'Built so [you stay in charge]',
    lead: 'Agents move fast. VividKit makes every step visible, reversible and yours to accept.',
    autoTitle: 'About auto mode and Full access',
    autoBody: 'Both are on by default in the beta. Auto mode lets teammates push, open pull requests, merge and publish if the tools on your machine allow it; turn it off and they only propose. Full access lets every runtime run without operating-system isolation, and the app shows when it is on. Either way VividKit keeps a restore point before each run and offers Roll back.',
    illustration: 'Drawings of how each safeguard works. Not screenshots of the app.',
  },
  runtimes: {
    eyebrow: 'Runtimes',
    title: 'Works with the [coding agents] you already use',
    lead: 'Claude Code is required for the beta. Each teammate can run on a different runtime; VividKit finds the ones installed on your machine and uses your own sign-in.',
    verified: ['Claude Code', 'Codex', 'OpenCode', 'GitHub Copilot CLI', 'Cursor Agent', 'Grok', 'Oh My Pi', 'Pi', 'Antigravity'],
    fine: 'Runtimes other than Claude Code and Codex run only with Full access on.',
  },
  start: {
    eyebrow: 'Before you begin',
    title: 'What [you will need]',
    lead: 'VividKit checks these for you when it starts, and tells you what is missing.',
    needsTitle: 'On your machine',
    needs: [
      'Claude Code, signed in on a Pro or Max plan',
      'AgentKit with an Engineer Kit license',
      'A project in a Git folder, or an empty folder for a new app',
    ],
    systemsTitle: 'Systems planned for the beta',
    systems: [
      { name: 'Linux x86-64', status: 'Planned (.deb, AppImage)', ok: true },
      { name: 'macOS, Apple silicon', status: 'Planned (unsigned)', ok: true },
      { name: 'Windows 10 and 11, x64', status: 'Planned, in testing (unsigned)', ok: true },
      { name: 'macOS, Intel', status: 'No build yet', ok: false },
    ],
  },
  faq: {
    eyebrow: 'Questions',
    title: 'Good to [know]',
    lead: '',
    items: [
      {
        q: 'Can I download VividKit now?',
        a: 'Not yet. VividKit is in development and the beta is planned for October 2026. When it ships, everyone on the waitlist gets an email with the download link.',
      },
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
        q: 'Is VividKit made by Anthropic?',
        a: 'No. VividKit is an independent project built on top of Claude Code, which you install and sign in to yourself. It is not affiliated with, sponsored or endorsed by Anthropic.',
      },
      {
        q: 'Is it only for websites?',
        a: 'No, but web apps get the most: page screenshots as evidence and publishing to Cloudflare Pages. For other apps the evidence comes from tests, builds and runs, and publishing is not available yet.',
      },
      {
        q: 'Where do my project files and notes live?',
        a: 'On your machine. Requirements, plans, reports and the changelog are written into your project folder, so you can read them without VividKit.',
      },
    ],
  },
  cta: {
    title: 'Bring an app. [Meet your team.]',
    lead: 'The beta is planned for October 2026. Join the waitlist and we will email you when there is a build to download.',
  },
  waitlist: {
    join: 'Join the waitlist',
    name: 'Name',
    email: 'Email',
    role: 'You are',
    rolePlaceholder: 'Choose one',
    roles: [
      { value: 'founder', label: 'Founder' },
      { value: 'shop-owner', label: 'Shop owner' },
      { value: 'freelancer', label: 'Freelancer' },
      { value: 'small-team', label: 'Part of a small team' },
      { value: 'developer', label: 'Developer' },
      { value: 'other', label: 'Other' },
    ],
    message: 'What would you build first?',
    messagePlaceholder: 'Optional',
    submit: 'Join the waitlist',
    sending: 'Sending…',
    successTitle: 'You are on the list.',
    successBody: 'We will email you when the beta is ready to download.',
    errorFallback: 'Something went wrong. Please try again, or email hello@vividkit.dev.',
    privacy: 'We only use your email to tell you about VividKit. No spam.',
    errors: {
      name: 'Please enter at least 2 characters.',
      email: 'Please enter a valid email address.',
      role: 'Please choose one.',
      message: 'Please keep it under 500 characters.',
    },
  },
  about: {
    eyebrow: 'About',
    title: 'Who is [building VividKit]',
    lead: 'VividKit is an independent project. Reach us directly; we read every message.',
    founder: {
      name: 'Thieu Nguyen',
      role: 'Founder',
      body: 'Designs and builds the VividKit desktop app, and writes the guides on this site.',
      github: 'GitHub',
      photoAlt: 'Portrait of Thieu Nguyen, founder of VividKit',
    },
    contact: {
      title: 'Contact',
      body: 'Questions about VividKit, the beta or the guides.',
      github: 'VividKit on GitHub',
    },
    independent: 'Not affiliated with, sponsored or endorsed by Anthropic, AgentKit or ClaudeKit.',
  },
  guides: {
    eyebrow: 'Resources',
    title: 'Free [guides and best practices]',
    lead: 'Separate from the app: guides for AgentKit users and the vibe coding community, in English and Vietnamese. They also cover ClaudeKit, the kit many readers started with.',
    links: [
      { label: 'AgentKit guides', path: '/guides/agentkit' },
      { label: 'Workflows', path: '/guides/workflows' },
      { label: 'Commands', path: '/guides/commands' },
      { label: 'Permissions', path: '/guides/permissions' },
    ],
    cta: 'Browse all guides',
    fine: 'Some guides link to AgentKit with a referral code.',
  },
};

const vi: LandingContent = {
  meta: {
    title: 'App máy tính để điều hành đội AI làm ứng dụng cho bạn',
    description:
      'VividKit là ứng dụng desktop dành cho builders. Điều hành đồng đội AI chạy trên Claude Code: nói điều bạn muốn, duyệt bằng chứng, rồi Áp dụng và Xuất bản. Đang phát triển; dự kiến ra mắt beta tháng 10/2026.',
  },
  nav: { how: 'Cách làm', status: 'Tiến độ', safety: 'An toàn', about: 'Giới thiệu', guides: 'Hướng dẫn', cta: 'Đăng ký chờ' },
  hero: {
    badge: 'Đang phát triển · Dự kiến beta tháng 10/2026',
    title: ['Điều hành một ', 'đội AI', ' làm ứng dụng cho bạn'],
    lead: 'VividKit là ứng dụng desktop cho builders muốn làm ứng dụng bằng agent lập trình AI mà không phải sống trong terminal. Bạn nói điều mình muốn; các đồng đội chạy trên Claude Code làm việc trên bản sao riêng của dự án, VividKit thu bằng chứng, và việc chỉ xong khi bạn chấp nhận.',
    soon: 'Dự kiến beta',
    soonWhen: 'tháng 10/2026',
    noDownload: 'Chưa phát hành: chưa có bản tải cho tới khi beta ra mắt.',
    runsOn: 'Chạy trên máy bạn, bằng tài khoản Claude Code của chính bạn và AgentKit.',
    illustration: 'Minh hoạ một lượt Sửa lỗi, dựng riêng cho trang này. Không phải ảnh chụp màn hình app.',
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
        body: 'Mỗi Requirement có tiêu chí kiểm được. Với ứng dụng web, VividKit chụp trang ở cỡ điện thoại và máy tính, ghi lại kết quả kiểm, để bạn chấp nhận thứ mình nhìn thấy.',
      },
      {
        icon: 'shield',
        before: 'Một agent thả rông trong thư mục thật',
        title: 'Dự án vẫn là của bạn',
        body: 'Đội làm trên bản sao riêng của dự án. Trước mỗi lượt chạy có điểm khôi phục, còn Áp dụng và Xuất bản đi qua một cửa sổ xác nhận riêng.',
      },
    ],
  },
  audience: {
    eyebrow: 'Dành cho ai',
    title: 'Cho builders có [ứng dụng cần làm], không phải có đội cần quản',
    lead: 'Bạn không cần biết Git hay viết code. Bạn cần một ý tưởng, hoặc một ứng dụng đang cần làm thêm. Bản beta bắt đầu với ứng dụng web.',
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
      ['shield', 'Áp dụng và xuất bản', 'Xác nhận đúng từng tệp trong cửa sổ riêng. Vẫn hoàn tác và đổi về được.'],
    ],
  },
  status: {
    eyebrow: 'Tiến độ hiện tại',
    title: 'Đã chạy được trong nội bộ. [Dự kiến beta tháng 10/2026.]',
    lead: 'VividKit chưa phát hành công khai. Dưới đây là những gì đã chạy được, những gì bản beta dự kiến có, và những gì làm sau. Mốc thời gian là kế hoạch, không phải cam kết.',
    columns: [
      {
        label: 'Đã chạy được, trên bản dựng phát triển',
        tone: 'now',
        items: [
          'Trọn vòng cho ứng dụng web: kể cho Cora, xác nhận Requirement, đội làm trên bản sao riêng, duyệt bằng chứng, Áp dụng, rồi Xuất bản qua Cloudflare Pages.',
          'Quy trình: Sửa lỗi, Sửa nhanh, Tính năng mới, Dự án mới, Nhận dự án có sẵn và Tái cấu trúc.',
          'Chín CLI agent lập trình, mỗi cái đã chạy trọn một issue trong test của chúng tôi. Claude Code là chính.',
          'Bản dựng thử chạy trên Linux, trên Mac Apple silicon và Windows 11.',
        ],
      },
      {
        label: 'Dự kiến cho bản beta, tháng 10/2026',
        tone: 'beta',
        items: [
          'Bản công khai đầu tiên, 0.1.0-beta.1, cho tải về.',
          'Linux (.deb và AppImage), macOS Apple silicon và Windows x64, dạng chưa ký số.',
          'Email báo cho mọi người trong danh sách chờ khi sẵn sàng.',
        ],
      },
      {
        label: 'Sau bản beta',
        tone: 'later',
        items: [
          'Quy trình Điều tra và Cải thiện.',
          'Thêm bộ kỹ năng khác, để không bắt buộc AgentKit.',
          'Xuất bản ứng dụng không phải website.',
        ],
      },
    ],
    note: 'Trước khi beta ra mắt chưa có bản tải công khai.',
  },
  stack: {
    eyebrow: 'Nền tảng',
    title: '[Claude Code và AgentKit] làm gì trong VividKit',
    lead: 'VividKit là bàn làm việc quanh các agent lập trình, không phải một mô hình AI riêng. Ai làm việc gì:',
    items: [
      {
        icon: 'claude',
        name: 'Claude Code',
        role: 'Làm việc chính · bắt buộc cho bản beta',
        body: 'Mỗi đồng đội, kể cả Cora phân loại yêu cầu, chạy như một phiên Claude Code trên máy bạn, đăng nhập bằng gói Pro hoặc Max của chính bạn.',
      },
      {
        icon: 'kit',
        name: 'AgentKit',
        role: 'Bộ kỹ năng · cần giấy phép Engineer Kit',
        body: 'Các giai đoạn như lập kế hoạch, kiểm thử và soát mã dùng kỹ năng của AgentKit. AgentKit là sản phẩm riêng của một nhóm khác.',
      },
      {
        icon: 'app',
        name: 'VividKit',
        role: 'Ứng dụng desktop',
        body: 'Giữ Requirement có phiên bản, chạy relay trên bản sao riêng, chụp ảnh làm bằng chứng, và đặt Áp dụng, Xuất bản sau một cửa sổ xác nhận.',
      },
      {
        icon: 'more',
        name: 'Runtime khác',
        role: 'Tuỳ chọn',
        body: 'Codex, OpenCode và các CLI agent khác có thể chạy từng đồng đội thay cho Claude Code.',
      },
    ],
    fine: 'VividKit không tự gọi Claude API và không bán lại quyền dùng mô hình: lượt chạy dùng gói Claude Code của chính bạn. Chúng tôi cũng dùng Claude Code để xây VividKit. VividKit là dự án độc lập, không liên kết, không được Anthropic tài trợ hay xác nhận. Claude và Claude Code là thương hiệu của Anthropic.',
  },
  team: {
    eyebrow: 'Đội',
    title: '[Đội của bạn], dùng chung cho mọi dự án',
    lead: 'Sáu đồng đội với vai trò cố định, mỗi người làm một việc một lúc. Đổi tên, hoặc đổi runtime mà mỗi người chạy trên đó.',
  },
  workflows: {
    eyebrow: 'Quy trình',
    title: 'Mỗi loại việc một [đường đi rõ ràng]',
    lead: 'Cora chọn quy trình, bạn đổi được trước khi Bắt đầu. Quy trình nào cũng có mốc mà không ai đi tiếp khi chưa có bạn.',
    laterTag: 'Sau beta',
    items: [
      { name: 'Sửa lỗi', when: 'Có gì đó đang hỏng. Bạn xác nhận nguyên nhân trước khi sửa.', inBeta: true },
      { name: 'Sửa nhanh', when: 'Đổi trong một tệp. Lớn hơn dự kiến thì đội dừng và đề xuất quy trình khác.', inBeta: true },
      { name: 'Tính năng mới', when: 'Thêm hoặc đổi thứ người dùng nhìn thấy. Bạn có thể duyệt kế hoạch trước.', inBeta: true },
      { name: 'Dự án mới', when: 'Bắt đầu từ ý tưởng trong thư mục trống. Bạn xác nhận hướng kỹ thuật.', inBeta: true },
      { name: 'Nhận dự án có sẵn', when: 'Đưa ứng dụng bạn đã có vào: quét chỉ đọc, báo cáo, rồi gợi ý việc.', inBeta: true },
      { name: 'Tái cấu trúc', when: 'Sắp xếp lại mã hay đổi công nghệ mà người dùng không thấy khác. Chạy test trước và sau.', inBeta: true },
      { name: 'Điều tra', when: 'Hiểu vấn đề trước khi quyết có sửa không. Kết thúc bằng báo cáo.', inBeta: false },
      { name: 'Cải thiện', when: 'Làm tốt hơn thứ đo được, có số đo trước và sau.', inBeta: false },
    ],
  },
  safety: {
    eyebrow: 'An toàn',
    title: 'Thiết kế để [bạn luôn cầm lái]',
    lead: 'Agent làm rất nhanh. VividKit làm cho mỗi bước đều thấy được, quay lại được, và chỉ xong khi bạn chấp nhận.',
    autoTitle: 'Về chế độ tự động và Toàn quyền',
    autoBody: 'Cả hai mặc định bật trong bản beta. Chế độ tự động cho đồng đội đẩy nhánh, mở PR, merge và xuất bản nếu công cụ trên máy cho phép; tắt đi thì đội chỉ đề xuất. Toàn quyền cho mọi runtime chạy không có rào chắn của hệ điều hành, và app hiện rõ khi đang bật. Dù thế nào, VividKit vẫn giữ điểm khôi phục trước mỗi lượt chạy và cho Đổi về bản trước.',
    illustration: 'Hình vẽ minh hoạ cách từng lớp bảo vệ hoạt động. Không phải ảnh chụp màn hình app.',
  },
  runtimes: {
    eyebrow: 'Runtime',
    title: 'Dùng được với các [agent lập trình] bạn đang có',
    lead: 'Bản beta bắt buộc có Claude Code. Mỗi đồng đội có thể chạy trên một runtime khác nhau; VividKit tìm các runtime đã cài trên máy và dùng chính tài khoản bạn đã đăng nhập.',
    verified: ['Claude Code', 'Codex', 'OpenCode', 'GitHub Copilot CLI', 'Cursor Agent', 'Grok', 'Oh My Pi', 'Pi', 'Antigravity'],
    fine: 'Ngoài Claude Code và Codex, các runtime khác chỉ chạy khi bật Toàn quyền.',
  },
  start: {
    eyebrow: 'Trước khi bắt đầu',
    title: 'Bạn [sẽ cần gì]',
    lead: 'VividKit tự kiểm những thứ này khi khởi động và cho bạn biết còn thiếu gì.',
    needsTitle: 'Trên máy của bạn',
    needs: [
      'Claude Code, đăng nhập gói Pro hoặc Max',
      'AgentKit với giấy phép Engineer Kit',
      'Một dự án trong thư mục Git, hoặc thư mục trống cho ứng dụng mới',
    ],
    systemsTitle: 'Hệ điều hành dự kiến cho beta',
    systems: [
      { name: 'Linux x86-64', status: 'Dự kiến (.deb, AppImage)', ok: true },
      { name: 'macOS, Apple silicon', status: 'Dự kiến (chưa ký số)', ok: true },
      { name: 'Windows 10 và 11, x64', status: 'Dự kiến, đang thử (chưa ký số)', ok: true },
      { name: 'macOS, Intel', status: 'Chưa có bản dựng', ok: false },
    ],
  },
  faq: {
    eyebrow: 'Câu hỏi',
    title: 'Điều [nên biết]',
    lead: '',
    items: [
      {
        q: 'Tôi tải VividKit được chưa?',
        a: 'Chưa. VividKit đang phát triển và bản beta dự kiến ra mắt tháng 10/2026. Khi ra mắt, mọi người trong danh sách chờ sẽ nhận email kèm link tải.',
      },
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
        q: 'VividKit có phải do Anthropic làm không?',
        a: 'Không. VividKit là dự án độc lập, xây trên Claude Code mà bạn tự cài và tự đăng nhập. VividKit không liên kết, không được Anthropic tài trợ hay xác nhận.',
      },
      {
        q: 'Chỉ dùng cho website thôi à?',
        a: 'Không, nhưng ứng dụng web được nhiều nhất: ảnh chụp trang làm bằng chứng và xuất bản lên Cloudflare Pages. Với ứng dụng khác, bằng chứng đến từ test, build và chạy thử, và chưa có xuất bản.',
      },
      {
        q: 'Tệp và ghi chú của dự án nằm ở đâu?',
        a: 'Trên máy của bạn. Requirement, kế hoạch, báo cáo và changelog được ghi vào thư mục dự án, đọc được cả khi không mở VividKit.',
      },
    ],
  },
  cta: {
    title: 'Mang ứng dụng tới. [Gặp đội của bạn.]',
    lead: 'Bản beta dự kiến ra mắt tháng 10/2026. Đăng ký chờ, chúng tôi sẽ email cho bạn khi có bản để tải.',
  },
  waitlist: {
    join: 'Đăng ký chờ',
    name: 'Tên',
    email: 'Email',
    role: 'Bạn là',
    rolePlaceholder: 'Chọn một',
    roles: [
      { value: 'founder', label: 'Người lập dự án' },
      { value: 'shop-owner', label: 'Chủ tiệm' },
      { value: 'freelancer', label: 'Freelancer' },
      { value: 'small-team', label: 'Thành viên team nhỏ' },
      { value: 'developer', label: 'Lập trình viên' },
      { value: 'other', label: 'Khác' },
    ],
    message: 'Bạn muốn làm gì đầu tiên?',
    messagePlaceholder: 'Không bắt buộc',
    submit: 'Đăng ký chờ',
    sending: 'Đang gửi…',
    successTitle: 'Bạn đã có tên trong danh sách.',
    successBody: 'Chúng tôi sẽ email cho bạn khi bản beta sẵn sàng để tải.',
    errorFallback: 'Có lỗi xảy ra. Bạn thử lại, hoặc email hello@vividkit.dev nhé.',
    privacy: 'Email của bạn chỉ dùng để báo tin về VividKit. Không spam.',
    errors: {
      name: 'Nhập ít nhất 2 ký tự.',
      email: 'Nhập email hợp lệ.',
      role: 'Chọn một mục.',
      message: 'Viết ngắn hơn 500 ký tự.',
    },
  },
  about: {
    eyebrow: 'Giới thiệu',
    title: 'Ai đang [xây VividKit]',
    lead: 'VividKit là dự án độc lập. Bạn liên hệ trực tiếp được; chúng tôi đọc mọi tin nhắn.',
    founder: {
      name: 'Thieu Nguyen',
      role: 'Founder',
      body: 'Thiết kế và xây ứng dụng desktop VividKit, đồng thời viết các hướng dẫn trên trang này.',
      github: 'GitHub',
      photoAlt: 'Ảnh chân dung Thieu Nguyen, founder của VividKit',
    },
    contact: {
      title: 'Liên hệ',
      body: 'Câu hỏi về VividKit, bản beta hoặc các hướng dẫn.',
      github: 'VividKit trên GitHub',
    },
    independent: 'Không liên kết, không được Anthropic, AgentKit hay ClaudeKit tài trợ hay xác nhận.',
  },
  guides: {
    eyebrow: 'Tài nguyên',
    title: '[Hướng dẫn và best practices] miễn phí',
    lead: 'Tách riêng khỏi app: hướng dẫn cho người dùng AgentKit và cộng đồng vibe coding, bằng tiếng Việt và tiếng Anh. Có cả ClaudeKit, bộ công cụ mà nhiều bạn đọc đã bắt đầu từ đó.',
    links: [
      { label: 'Hướng dẫn AgentKit', path: '/guides/agentkit' },
      { label: 'Quy trình', path: '/guides/workflows' },
      { label: 'Lệnh', path: '/guides/commands' },
      { label: 'Quyền', path: '/guides/permissions' },
    ],
    cta: 'Xem tất cả hướng dẫn',
    fine: 'Một số hướng dẫn có link AgentKit kèm mã giới thiệu.',
  },
};

export const landingContent: Record<Language, LandingContent> = { en, vi };

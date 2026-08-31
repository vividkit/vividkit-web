import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-test",
  command: "/ak:test",
  kit: 'marketer',
  header: {
    titleEn: '/ak:test — Marketing UI and workflow validation',
    titleVi: '/ak:test — Kiểm UI và workflow marketing',
    taglineEn: "Marketing UI and workflow validation for websites, AgentKit commands, agents, skills, and step-by-step verification reports.",
    taglineVi: "Kiểm thử UI và workflow cho website, command, agent, skill của Marketing AgentKit, kèm báo cáo xác minh từng bước."
  },
  hardGate: {
    type: "warning",
    titleEn: "Test access is not publication or mutation authority",
    titleVi: "Quyền test không phải quyền publish hoặc mutate",
    contentEn: "Do not paste credentials into prompts or reports. Authorization to view a route does not permit form submission, messages, account changes, load, security probing, provider spend, or publishing content without separate approval.",
    contentVi: "Không dán credential vào prompt hoặc report. Quyền xem route không cho phép submit form, gửi message, đổi account, tạo load, probe security, tiêu provider credit hoặc publish content nếu chưa duyệt riêng."
  },
  processFlow: [
    {
      number: 1,
      titleEn: "Parse",
      titleVi: "Tách lệnh",
      descEn: "Read the first argument and choose either the ui or workflow testing route.",
      descVi: "Đọc tham số đầu tiên và chọn tuyến kiểm thử ui hoặc workflow."
    },
    {
      number: 2,
      titleEn: "Load reference",
      titleVi: "Nạp hướng dẫn",
      descEn: "Load references/ui.md for website UI testing or references/workflow.md for command, agent, and skill workflow checks.",
      descVi: "Nạp references/ui.md cho kiểm thử UI website hoặc references/workflow.md cho kiểm tra workflow command, agent và skill."
    },
    {
      number: 3,
      titleEn: "Define target",
      titleVi: "Xác định mục tiêu",
      descEn: "Treat the remaining arguments as an authorized website or one of the supported workflow targets: youtube, content, email, brand, or all.",
      descVi: "Dùng phần tham số còn lại làm website đã được phép hoặc một workflow target được hỗ trợ: youtube, content, email, brand hoặc all."
    },
    {
      number: 4,
      titleEn: "Generate scenarios",
      titleVi: "Tạo kịch bản",
      descEn: "For workflow coverage, use scan-components.py to scan commands, agents, and skills and generate test scenarios.",
      descVi: "Với coverage workflow, dùng scan-components.py để quét command, agent, skill và tạo kịch bản kiểm thử."
    },
    {
      number: 5,
      titleEn: "Exercise",
      titleVi: "Thực thi",
      descEn: "Run the documented route with visual, accessibility, responsive, or step-by-step manual verification as appropriate.",
      descVi: "Chạy tuyến đã nêu với kiểm tra visual, accessibility, responsive hoặc xác minh thủ công từng bước tùy trường hợp."
    },
    {
      number: 6,
      titleEn: "Report",
      titleVi: "Báo cáo",
      descEn: "Return a focused report of what was checked, what passed, what failed, and the next concrete fix.",
      descVi: "Trả báo cáo tập trung: đã kiểm gì, phần nào đạt, phần nào lỗi và bước sửa cụ thể tiếp theo."
    }
  ],
  corePrinciplesEn: [
    "This ak:test is for marketing UI/workflow validation, not engineer unit-test generation.",
    "Choose ui for websites and workflow for commands, agents, skills, or step-by-step flow checks.",
    "Verification should be observable: visual, accessibility, responsive, or manually traced workflow evidence."
  ],
  corePrinciplesVi: [
    "ak:test này dành cho kiểm thử UI/workflow marketing, không phải tạo unit test cho engineer.",
    "Chọn ui cho website và workflow cho command, agent, skill hoặc kiểm tra luồng từng bước.",
    "Xác minh phải quan sát được: bằng chứng visual, accessibility, responsive hoặc workflow đã đi từng bước."
  ],
  workflowModes: [
    {
      flag: "ui",
      modeEn: "Website UI test",
      modeVi: "Kiểm thử UI website",
      research: "Website target",
      redTeam: "Visual/a11y/responsive issues",
      validation: "UI report",
      cookFlag: "references/ui.md"
    },
    {
      flag: "workflow <youtube|content|email|brand|all>",
      modeEn: "Workflow test for the fixed Marketing workflow target set.",
      modeVi: "Kiểm thử workflow cho tập target Marketing cố định.",
      research: "Selected workflow target",
      redTeam: "Step gaps and scenario failures",
      validation: "Workflow report",
      cookFlag: "references/workflow.md"
    }
  ],
  invocation: {
    syntax: "/ak:test [ui|workflow] [--headless] [--mobile] [--auth]",
    options: [
      { token: "--headless", titleEn: "Headless UI route", titleVi: "Tuyến UI headless", descEn: "Run the UI route without a visible browser when the current test scope allows it.", descVi: "Chạy tuyến UI không hiện browser khi scope test hiện tại cho phép." },
      { token: "--mobile", titleEn: "Mobile viewport", titleVi: "Viewport mobile", descEn: "Exercise the UI route with a mobile viewport and report the actual environment tested.", descVi: "Chạy tuyến UI với viewport mobile và báo đúng môi trường đã test." },
      { token: "--auth", titleEn: "Approved auth state", titleVi: "Trạng thái auth đã duyệt", descEn: "Use only an approved protected-route state boundary without exposing cookies, tokens, or credentials.", descVi: "Chỉ dùng ranh giới state route bảo vệ đã được duyệt mà không lộ cookie, token hoặc credential." }
    ]
  },
  skillStack: [
    {
      name: "scan-components.py",
      type: "tool"
    }
  ],
  promptExamples: [
    {
      labelEn: "UI route",
      labelVi: "Tuyến UI",
      command: "/ak:test ui https://example.com",
      commandVi: '/ak:test ui https://example.com',
      whenEn: "Use when validating a website's visual, accessibility, or responsive behavior.",
      whenVi: "Dùng khi cần kiểm tra visual, accessibility hoặc responsive của website.",
      expectedEn: "A UI test report with observed pass/fail findings.",
      expectedVi: "Báo cáo kiểm thử UI có phát hiện đạt/lỗi đã quan sát.",
      recommended: true
    },
    {
      labelEn: "Workflow route",
      labelVi: "Tuyến workflow",
      command: "/ak:test workflow youtube",
      commandVi: '/ak:test workflow youtube',
      whenEn: "Use when validating one supported Marketing workflow target: youtube, content, email, brand, or all.",
      whenVi: "Dùng khi xác minh một workflow target Marketing được hỗ trợ: youtube, content, email, brand hoặc all.",
      expectedEn: "Step-by-step verification and scenario findings.",
      expectedVi: "Xác minh từng bước và các phát hiện theo kịch bản."
    },
    { labelEn: 'Email workflow', labelVi: 'Workflow email', command: '/ak:test workflow email',
      commandVi: '/ak:test workflow email', whenEn: 'The supported Marketing email workflow target needs step-by-step verification.', whenVi: 'Khi cần xác minh từng bước workflow email của Marketing Kit.', expectedEn: 'Scenario findings for the email workflow target, including gaps and pass/fail steps.', expectedVi: 'Phát hiện kịch bản cho target workflow email, gồm gap và bước đạt/lỗi.' }
  ],
  reportOutput: {
    titleEn: "Validation report",
    titleVi: "Báo cáo xác minh",
    patternEn: "Checked target • Pass/fail findings • Next fixes",
    patternVi: "Mục tiêu đã kiểm • Kết quả đạt/lỗi • Bước sửa tiếp theo",
    locationEn: "Response output",
    locationVi: "Nội dung phản hồi",
    descEn: "The skill returns practical testing evidence rather than generic advice.",
    descVi: "Skill trả bằng chứng kiểm thử hữu dụng thay vì lời khuyên chung chung."
  }
};

export default data;

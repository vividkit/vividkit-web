import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-test",
  "command": "/ak:test",
  "kit": "marketer",
  "header": {
    "titleEn": "/ak:test",
    "titleVi": "/ak:test",
    "taglineEn": "Marketing UI and workflow validation for websites, AgentKit commands, agents, skills, and step-by-step verification reports.",
    "taglineVi": "Kiểm thử UI và workflow cho website, command, agent, skill của Marketing AgentKit, kèm báo cáo xác minh từng bước."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Parse",
      "titleVi": "Tách lệnh",
      "descEn": "Read the first argument and choose either the ui or workflow testing route.",
      "descVi": "Đọc tham số đầu tiên và chọn tuyến kiểm thử ui hoặc workflow."
    },
    {
      "number": 2,
      "titleEn": "Load reference",
      "titleVi": "Nạp hướng dẫn",
      "descEn": "Load references/ui.md for website UI testing or references/workflow.md for command, agent, and skill workflow checks.",
      "descVi": "Nạp references/ui.md cho kiểm thử UI website hoặc references/workflow.md cho kiểm tra workflow command, agent và skill."
    },
    {
      "number": 3,
      "titleEn": "Define target",
      "titleVi": "Xác định mục tiêu",
      "descEn": "Treat the remaining arguments as the website, component set, command, agent, skill, or workflow to validate.",
      "descVi": "Dùng phần tham số còn lại làm website, bộ component, command, agent, skill hoặc workflow cần xác minh."
    },
    {
      "number": 4,
      "titleEn": "Generate scenarios",
      "titleVi": "Tạo kịch bản",
      "descEn": "For workflow coverage, use scan-components.py to scan commands, agents, and skills and generate test scenarios.",
      "descVi": "Với coverage workflow, dùng scan-components.py để quét command, agent, skill và tạo kịch bản kiểm thử."
    },
    {
      "number": 5,
      "titleEn": "Exercise",
      "titleVi": "Thực thi",
      "descEn": "Run the documented route with visual, accessibility, responsive, or step-by-step manual verification as appropriate.",
      "descVi": "Chạy tuyến đã nêu với kiểm tra visual, accessibility, responsive hoặc xác minh thủ công từng bước tùy trường hợp."
    },
    {
      "number": 6,
      "titleEn": "Report",
      "titleVi": "Báo cáo",
      "descEn": "Return a focused report of what was checked, what passed, what failed, and the next concrete fix.",
      "descVi": "Trả báo cáo tập trung: đã kiểm gì, phần nào đạt, phần nào lỗi và bước sửa cụ thể tiếp theo."
    }
  ],
  "corePrinciplesEn": [
    "This ak:test is for marketing UI/workflow validation, not engineer unit-test generation.",
    "Choose ui for websites and workflow for commands, agents, skills, or step-by-step flow checks.",
    "Verification should be observable: visual, accessibility, responsive, or manually traced workflow evidence."
  ],
  "corePrinciplesVi": [
    "ak:test này dành cho kiểm thử UI/workflow marketing, không phải tạo unit test cho engineer.",
    "Chọn ui cho website và workflow cho command, agent, skill hoặc kiểm tra luồng từng bước.",
    "Xác minh phải quan sát được: bằng chứng visual, accessibility, responsive hoặc workflow đã đi từng bước."
  ],
  "workflowModes": [
    {
      "flag": "ui",
      "modeEn": "Website UI test",
      "modeVi": "Kiểm thử UI website",
      "research": "Website target",
      "redTeam": "Visual/a11y/responsive issues",
      "validation": "UI report",
      "cookFlag": "references/ui.md"
    },
    {
      "flag": "workflow",
      "modeEn": "Workflow test",
      "modeVi": "Kiểm thử workflow",
      "research": "Command/agent/skill target",
      "redTeam": "Step gaps and scenario failures",
      "validation": "Workflow report",
      "cookFlag": "references/workflow.md"
    }
  ],
  "skillStack": [
    {
      "name": "scan-components.py",
      "type": "tool"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "UI route",
      "labelVi": "Tuyến UI",
      "command": "/ak:test ui https://example.com",
      "whenEn": "Use when validating a website's visual, accessibility, or responsive behavior.",
      "whenVi": "Dùng khi cần kiểm tra visual, accessibility hoặc responsive của website.",
      "expectedEn": "A UI test report with observed pass/fail findings.",
      "expectedVi": "Báo cáo kiểm thử UI có phát hiện đạt/lỗi đã quan sát.",
      "recommended": true
    },
    {
      "labelEn": "Workflow route",
      "labelVi": "Tuyến workflow",
      "command": "/ak:test workflow ak:video",
      "whenEn": "Use when validating a marketing command, agent, skill, or workflow path.",
      "whenVi": "Dùng khi xác minh command, agent, skill hoặc luồng marketing.",
      "expectedEn": "Step-by-step verification and scenario findings.",
      "expectedVi": "Xác minh từng bước và các phát hiện theo kịch bản."
    }
  ],
  "reportOutput": {
    "titleEn": "Validation report",
    "titleVi": "Báo cáo xác minh",
    "patternEn": "Checked target • Pass/fail findings • Next fixes",
    "patternVi": "Mục tiêu đã kiểm • Kết quả đạt/lỗi • Bước sửa tiếp theo",
    "locationEn": "Response output",
    "locationVi": "Nội dung phản hồi",
    "descEn": "The skill returns practical testing evidence rather than generic advice.",
    "descVi": "Skill trả bằng chứng kiểm thử hữu dụng thay vì lời khuyên chung chung."
  }
};

export default data;

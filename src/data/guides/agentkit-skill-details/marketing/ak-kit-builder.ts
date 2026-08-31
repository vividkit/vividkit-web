import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-kit-builder",
  command: "/ak:kit-builder",
  kit: 'marketer',
  header: {
    titleEn: '/ak:kit-builder — Build Marketing Kit skills and workflows',
    titleVi: '/ak:kit-builder — Xây skill và workflow Marketing Kit',
    taglineEn: "Build AgentKit Marketing skills, agents, commands, and workflows using the kit's guides, templates, decision tree, and init script.",
    taglineVi: "Xây skill, agent, command và workflow cho AgentKit Marketing bằng guide, template, decision tree và script khởi tạo của kit."
  },
  processFlow: [
    {
      number: 1,
      titleEn: "Name component",
      titleVi: "Đặt tên component",
      descEn: "Identify whether the user needs a skill, agent, command, or workflow, plus the component name.",
      descVi: "Xác định user cần skill, agent, command hay workflow, cùng tên component."
    },
    {
      number: 2,
      titleEn: "Use decision tree",
      titleVi: "Dùng cây quyết định",
      descEn: "Map reusable knowledge to skills, autonomous handlers to agents, slash actions to commands, and orchestration to workflows.",
      descVi: "Ánh xạ kiến thức tái dùng thành skill, handler tự trị thành agent, hành động slash thành command và quy trình nhiều bước thành workflow."
    },
    {
      number: 3,
      titleEn: "Load guide",
      titleVi: "Mở guide đúng loại",
      descEn: "Read the matching reference guide: skill-guide, agent-guide, command-guide, or workflow-guide.",
      descVi: "Đọc guide tương ứng: skill-guide, agent-guide, command-guide hoặc workflow-guide."
    },
    {
      number: 4,
      titleEn: "Initialize skeleton",
      titleVi: "Khởi tạo skeleton",
      descEn: "Use python scripts/init_component.py <type> <name> for supported component types.",
      descVi: "Dùng python scripts/init_component.py <type> <name> với các loại component được hỗ trợ."
    },
    {
      number: 5,
      titleEn: "Apply template",
      titleVi: "Áp template",
      descEn: "Fill the matching template path with domain-specific marketing behavior and references.",
      descVi: "Điền template tương ứng bằng hành vi marketing và tài liệu tham chiếu cụ thể."
    },
    {
      number: 6,
      titleEn: "Check best practices",
      titleVi: "Đối chiếu best practices",
      descEn: "Review best-practices and marketing-checklist so the component fits the kit structure.",
      descVi: "Đối chiếu best-practices và marketing-checklist để component khớp cấu trúc kit."
    },
    {
      number: 7,
      titleEn: "Integrate agents",
      titleVi: "Kết nối agent liên quan",
      descEn: "Use planner, researcher, or docs-manager when the component needs planning, research, or documentation ownership.",
      descVi: "Dùng planner, researcher hoặc docs-manager khi component cần lập kế hoạch, nghiên cứu hoặc quản lý docs."
    }
  ],
  corePrinciplesEn: [
    "Choose the smallest component type that matches the job",
    "Use kit templates instead of ad-hoc structure",
    "Components live in their documented locations",
    "Keep marketing automation reusable and discoverable"
  ],
  corePrinciplesVi: [
    "Chọn loại component nhỏ nhất phù hợp việc cần làm",
    "Dùng template của kit thay vì cấu trúc tự phát",
    "Đặt component đúng vị trí đã ghi",
    "Giữ automation marketing tái dùng được và dễ tìm"
  ],
  expertiseAreasEn: [
    "Skill scaffolding",
    "Specialized marketing agents",
    "User-invocable commands",
    "Workflow orchestration",
    "Kit structure onboarding"
  ],
  expertiseAreasVi: [
    "Tạo khung skill",
    "Agent marketing chuyên biệt",
    "Command cho user gọi",
    "Điều phối workflow",
    "Làm quen cấu trúc kit"
  ],
  outputFlags: [
    {
      flag: "--yagni",
      titleEn: "YAGNI component pass",
      titleVi: "Rà soát YAGNI cho component",
      descEn: "Argument-hint flag for keeping a new kit component minimal and avoiding unnecessary structure.",
      descVi: "Flag trong argument-hint để giữ component mới tối giản và tránh cấu trúc chưa cần.",
      exampleCommand: "/ak:kit-builder skill referral-scanner --yagni",
          exampleCommandVi: '/ak:kit-builder skill referral-scanner --yagni'
    }
  ],
  skillStack: [
    {
      name: "references/skill-guide.md",
      type: "tool"
    },
    {
      name: "references/agent-guide.md",
      type: "tool"
    },
    {
      name: "references/command-guide.md",
      type: "tool"
    },
    {
      name: "references/workflow-guide.md",
      type: "tool"
    },
    {
      name: "planner agent",
      type: "agent"
    },
    {
      name: "researcher agent",
      type: "agent"
    },
    {
      name: "docs-manager agent",
      type: "agent"
    }
  ],
  promptExamples: [
    {
      labelEn: "Create a skill",
      labelVi: "Tạo skill",
      command: "/ak:kit-builder skill competitor-signal",
      commandVi: '/ak:kit-builder skill competitor-signal',
      whenEn: "You need reusable marketing domain knowledge or tool guidance.",
      whenVi: "Khi cần kiến thức marketing tái dùng hoặc hướng dẫn công cụ.",
      expectedEn: "Loads the skill guide, initializes .claude/skills/{name}/SKILL.md, and fills the skill template.",
      expectedVi: "Mở skill guide, khởi tạo .claude/skills/{name}/SKILL.md và điền template skill.",
      recommended: true
    },
    {
      labelEn: "Create a workflow",
      labelVi: "Tạo workflow",
      command: "/ak:kit-builder workflow weekly-growth-review --yagni",
      commandVi: '/ak:kit-builder workflow weekly-growth-review --yagni',
      whenEn: "A repeated multi-step marketing process needs orchestration without overbuilding.",
      whenVi: "Khi một quy trình marketing lặp lại nhiều bước cần orchestration nhưng không xây quá mức.",
      expectedEn: "Uses the workflow guide and template, then checks best practices and the marketing checklist.",
      expectedVi: "Dùng workflow guide và template, rồi đối chiếu best practices cùng marketing checklist."
    },
    { labelEn: 'Create an agent', labelVi: 'Tạo agent', command: '/ak:kit-builder agent launch-copywriter',
      commandVi: '/ak:kit-builder agent launch-copywriter', whenEn: 'A marketing agent persona needs a reusable AgentKit agent file, not a one-off prompt.', whenVi: 'Khi cần file agent AgentKit tái dùng cho một persona marketing, không phải prompt một lần.', expectedEn: 'Loads the agent guide and initializes the agent template under the marketing kit layout.', expectedVi: 'Nạp agent guide và khởi tạo template agent trong layout marketing kit.' }
  ],
  reportOutput: {
    titleEn: "AgentKit component",
    titleVi: "Component AgentKit",
    patternEn: ".claude/skills/{name}/SKILL.md, .claude/agents/{name}.md, .claude/commands/{path}.md, or .claude/workflows/{name}.md",
    patternVi: ".claude/skills/{name}/SKILL.md, .claude/agents/{name}.md, .claude/commands/{path}.md hoặc .claude/workflows/{name}.md",
    descEn: "Generated component scaffold plus filled domain behavior and references",
    descVi: "Khung component được tạo cùng hành vi domain và tài liệu tham chiếu đã điền"
  }
};

export default data;

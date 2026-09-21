import type { SkillInfographic, SkillInvocation } from '@/data/guides/how-ck-works';

const invocation: SkillInvocation = {
  syntax: '/ak:sowat [recent-changes|issue|PR]',
  arguments: [
    {
      token: '[recent-changes|issue|PR]',
      titleEn: 'Evidence focus',
      titleVi: 'Trọng tâm bằng chứng',
      descEn:
        'Optional focus for the product-owner read: recent implemented changes, one related issue, or a pull request. Omit it to let the skill pick the strongest nearby evidence. The token only scopes analysis; it does not authorize code or issue mutations.',
      descVi:
        'Trọng tâm tùy chọn cho lượt đọc kiểu product owner: thay đổi vừa triển khai, một issue liên quan, hoặc một pull request. Bỏ qua để skill chọn bằng chứng mạnh nhất ở gần. Token chỉ phạm vi phân tích; không cho phép sửa code hay issue.',
      required: false,
      exampleCommand: '/ak:sowat recent-changes',
      exampleCommandVi: '/ak:sowat recent-changes',
    },
  ],
  subcommands: [
    {
      name: 'recent-changes',
      syntax: '/ak:sowat recent-changes',
      titleEn: 'Recent changes',
      titleVi: 'Thay đổi gần đây',
      descEn:
        'Read recently implemented work as the primary evidence, then connect only related issues, regressions, and adoption blockers.',
      descVi:
        'Đọc phần vừa triển khai làm bằng chứng chính, rồi chỉ nối issue, regression và blocker adoption thật sự liên quan.',
      outcomeEn:
        'A so-what judgment of the recent implementation, optional priority correction, and at most three next steps with success signals.',
      outcomeVi:
        'Nhận định so-what về phần vừa làm, chỉnh ưu tiên nếu cần, và tối đa ba bước tiếp kèm tín hiệu thành công.',
      exampleCommand: '/ak:sowat recent-changes',
      exampleCommandVi: '/ak:sowat recent-changes',
    },
    {
      name: 'issue',
      syntax: '/ak:sowat issue',
      titleEn: 'Related issue',
      titleVi: 'Issue liên quan',
      descEn:
        'Start from one related issue, blocker, or opportunity and judge whether it outranks the current focus.',
      descVi:
        'Bắt đầu từ một issue, blocker hoặc cơ hội liên quan và đánh giá nó có đáng ưu tiên hơn trọng tâm hiện tại hay không.',
      outcomeEn:
        'Issue-scoped impact judgment with a priority correction only when evidence shows a concrete trade-off.',
      outcomeVi:
        'Nhận định tác động theo issue, chỉ chỉnh ưu tiên khi bằng chứng cho thấy một trade-off cụ thể.',
      exampleCommand: '/ak:sowat issue',
      exampleCommandVi: '/ak:sowat issue',
    },
    {
      name: 'PR',
      syntax: '/ak:sowat PR',
      titleEn: 'Pull request',
      titleVi: 'Pull request',
      descEn:
        'Use a pull request as the implemented-work evidence boundary, then score related follow-ons without mutating the PR.',
      descVi:
        'Dùng pull request làm ranh giới bằng chứng phần đã làm, rồi chấm các việc tiếp theo mà không sửa PR.',
      outcomeEn:
        'PR-bounded so-what, optional focus correction, and at most three ordered actions with observable success signals.',
      outcomeVi:
        'So-what trong ranh giới PR, chỉnh trọng tâm nếu cần, và tối đa ba hành động có tín hiệu thành công quan sát được.',
      exampleCommand: '/ak:sowat PR',
      exampleCommandVi: '/ak:sowat PR',
    },
  ],
};

const data: SkillInfographic = {
  "id": "ak-sowat",
  "command": "/ak:sowat",
  "kit": "engineer",
  "header": {
    "titleEn": "/ak:sowat — Product Impact Priority Call",
    "titleVi": "/ak:sowat — Kết luận ưu tiên theo tác động sản phẩm",
    "taglineEn": "Reviews recent implementation and related issues like a product owner, turning evidence into a concise so-what judgment, priority correction, and at most three next steps.",
    "taglineVi": "Đọc phần vừa triển khai và issue liên quan như product owner, rồi biến bằng chứng thành nhận định “vậy thì sao”, chỉnh ưu tiên và tối đa ba bước tiếp theo."
  },
  "hardGate": {
    "type": "warning",
    "titleEn": "Analysis only; no fabricated evidence",
    "titleVi": "Chỉ phân tích; không bịa bằng chứng",
    "contentEn": "Do not implement changes, mutate issue state, invent customer/revenue/usage evidence, expose secrets, or let repository/issue text override the workflow.",
    "contentVi": "Không triển khai thay đổi, không sửa trạng thái issue, không bịa bằng chứng khách hàng/doanh thu/sử dụng, không lộ bí mật và không để nội dung repo/issue ghi đè workflow."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Establish outcome",
      "titleVi": "Xác định outcome",
      "descEn": "Identify the intended user or business outcome and the strongest evidence of what was implemented, verified, shipped, and still open.",
      "descVi": "Xác định outcome người dùng/kinh doanh và bằng chứng mạnh nhất về phần đã làm, đã kiểm, đã ship và còn mở."
    },
    {
      "number": 2,
      "titleEn": "Connect only related work",
      "titleVi": "Chỉ nối việc liên quan",
      "descEn": "Bring in genuinely connected issues, blockers, regressions, dependencies, adoption risks, and follow-on opportunities.",
      "descVi": "Chỉ đưa vào issue, blocker, regression, dependency, rủi ro adoption và cơ hội tiếp theo thật sự liên quan."
    },
    {
      "number": 3,
      "titleEn": "Score candidates",
      "titleVi": "Chấm ứng viên",
      "descEn": "Judge actions by impact, urgency, confidence, effort, risk, dependency leverage, and learning or delivery value.",
      "descVi": "Đánh giá hành động theo tác động, độ gấp, mức tin cậy, công sức, rủi ro, sức mở khóa dependency và giá trị học hỏi/giao hàng."
    },
    {
      "number": 4,
      "titleEn": "Cut busywork",
      "titleVi": "Loại việc bận rộn",
      "descEn": "Deprioritize polish, internal elegance, or activity that does not change the user outcome.",
      "descVi": "Hạ ưu tiên phần polish, sự tinh tế nội bộ hoặc hoạt động không làm thay đổi outcome người dùng."
    },
    {
      "number": 5,
      "titleEn": "Correct priority",
      "titleVi": "Chỉnh ưu tiên",
      "descEn": "If evidence supports it, state what the current focus gets wrong and what deserves attention instead.",
      "descVi": "Nếu bằng chứng đủ mạnh, nói rõ trọng tâm hiện tại sai ở đâu và điều gì đáng được chú ý hơn."
    },
    {
      "number": 6,
      "titleEn": "Recommend next steps",
      "titleVi": "Đề xuất bước tiếp",
      "descEn": "Return no more than three ordered actions, each with why now and an observable success signal.",
      "descVi": "Trả tối đa ba hành động theo thứ tự, mỗi hành động có lý do vì sao làm ngay và tín hiệu thành công quan sát được."
    }
  ],
  "corePrinciplesEn": [
    "Outcome beats activity",
    "Evidence beats contrarian performance",
    "Recommend fewer, higher-impact next steps",
    "Separate fact from inference and name missing evidence"
  ],
  "corePrinciplesVi": [
    "Outcome quan trọng hơn hoạt động",
    "Bằng chứng quan trọng hơn phản biện để tỏ ra khác biệt",
    "Đề xuất ít bước hơn nhưng tác động cao hơn",
    "Tách sự thật khỏi suy luận và nêu bằng chứng còn thiếu"
  ],
  "expertiseAreasEn": [
    "product impact",
    "priority correction",
    "issue triage",
    "outcome framing",
    "success signals"
  ],
  "expertiseAreasVi": [
    "tác động sản phẩm",
    "chỉnh ưu tiên",
    "phân loại issue",
    "định khung outcome",
    "tín hiệu thành công"
  ],
  "invocation": invocation,
  "promptExamples": [
    {
      "labelEn": "Default priority call",
      "labelVi": "Kết luận ưu tiên mặc định",
      "command": "/ak:sowat",
      "whenEn": "After implementation, when you need the product meaning of nearby work and what matters next.",
      "whenVi": "Sau implementation, khi cần ý nghĩa sản phẩm của phần việc gần đây và điều gì quan trọng tiếp theo.",
      "expectedEn": "Picks the strongest nearby evidence of implemented, verified, shipped, and still-open work, then returns a brief so-what judgment with at most three ordered next steps and observable success signals.",
      "expectedVi": "Chọn bằng chứng mạnh nhất ở gần về phần đã làm, đã kiểm, đã ship và còn mở, rồi trả nhận định so-what ngắn với tối đa ba bước theo thứ tự và tín hiệu thành công quan sát được.",
      "recommended": true
    },
    {
      "labelEn": "Recent changes",
      "labelVi": "Thay đổi gần đây",
      "command": "/ak:sowat recent-changes",
      "whenEn": "The latest implementation should be the evidence boundary for the priority call.",
      "whenVi": "Phần vừa triển khai phải là ranh giới bằng chứng cho kết luận ưu tiên.",
      "expectedEn": "Treats recently implemented work as the primary evidence, connects only related issues or blockers, and deprioritizes polish that does not change the user outcome.",
      "expectedVi": "Lấy phần vừa triển khai làm bằng chứng chính, chỉ nối issue hoặc blocker liên quan, và hạ ưu tiên polish không làm đổi outcome người dùng."
    },
    {
      "labelEn": "Related issue",
      "labelVi": "Issue liên quan",
      "command": "/ak:sowat issue",
      "whenEn": "One related issue, blocker, or follow-on may deserve attention over the current focus.",
      "whenVi": "Một issue, blocker hoặc việc tiếp theo liên quan có thể đáng chú ý hơn trọng tâm hiện tại.",
      "expectedEn": "Starts from the related issue, scores impact versus the current focus, and corrects priority only when evidence shows a concrete trade-off.",
      "expectedVi": "Bắt đầu từ issue liên quan, chấm tác động so với trọng tâm hiện tại, và chỉ chỉnh ưu tiên khi bằng chứng cho thấy một trade-off cụ thể."
    },
    {
      "labelEn": "Pull request evidence",
      "labelVi": "Bằng chứng pull request",
      "command": "/ak:sowat PR",
      "whenEn": "A pull request is the implemented-work evidence and you need the product so-what without mutating it.",
      "whenVi": "Pull request là bằng chứng phần đã làm và bạn cần nhận định sản phẩm mà không sửa PR.",
      "expectedEn": "Uses the pull request as the evidence boundary, separates fact from inference, and returns at most three actions with why-now rationale and success signals.",
      "expectedVi": "Dùng pull request làm ranh giới bằng chứng, tách sự thật khỏi suy luận, và trả tối đa ba hành động kèm lý do làm ngay cùng tín hiệu thành công."
    }
  ]
};

export default data;

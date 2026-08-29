import type { SkillInfographic } from '@/data/guides/how-ck-works';

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
  "promptExamples": [
    {
      "labelEn": "Post-implementation priority",
      "labelVi": "Ưu tiên sau triển khai",
      "command": "/ak:sowat after the checkout refactor and open payment issues",
      "whenEn": "You need the product meaning of recent work and what to do next.",
      "whenVi": "Cần hiểu ý nghĩa sản phẩm của phần vừa làm và nên làm gì tiếp.",
      "expectedEn": "Returns a brief so-what, optional priority correction, and up to three ordered next steps.",
      "expectedVi": "Trả nhận định ngắn, chỉnh ưu tiên nếu cần và tối đa ba bước tiếp theo.",
      "recommended": true
    },
    {
      "labelEn": "Challenge focus",
      "labelVi": "Thử thách trọng tâm",
      "command": "/ak:sowat are we focusing on the wrong thing after this release?",
      "whenEn": "The team may be polishing lower-value work while blockers remain.",
      "whenVi": "Đội có thể đang polish phần ít giá trị trong khi blocker vẫn còn.",
      "expectedEn": "Uses evidence to correct focus directly without inventing metrics.",
      "expectedVi": "Dùng bằng chứng để chỉnh trọng tâm thẳng thắn mà không bịa metric."
    }
  ]
};

export default data;

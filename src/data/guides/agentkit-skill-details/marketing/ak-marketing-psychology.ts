import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-marketing-psychology",
  command: "/ak:marketing-psychology",
  kit: 'marketer',
  header: {
    titleEn: '/ak:marketing-psychology — Behavioral-science models for marketing',
    titleVi: '/ak:marketing-psychology — Mental model hành vi cho marketing',
    taglineEn: "Pick the two or three mental models and behavioral-science mechanisms that fit the observed behavior, then turn each into an ethical intervention with a metric and a harm guardrail, across buyer behavior, persuasion, pricing, design, and growth.",
    taglineVi: "Chọn hai hoặc ba mental model và cơ chế behavioral science khớp với hành vi đang thấy, rồi biến mỗi cái thành can thiệp có đạo đức kèm chỉ số đo và giới hạn chống gây hại, cho hành vi mua, thuyết phục, pricing, design và growth."
  },
  hardGate: {
    type: 'warning',
    titleEn: 'Influence must preserve agency',
    titleVi: 'Tác động phải giữ quyền tự quyết',
    contentEn: 'No fake scarcity, fabricated authority or social proof, misleading anchors, hidden fees, obstructed cancellation, preselected paid options, coerced consent, disguised advertising, or fear-based pressure. Defaults and framing must be visible, truthful, easy to reverse, and lawful. The Skill recommends and designs tests; it does not ship copy or prices or publish claims.',
    contentVi: 'Không tạo khan hiếm giả, không bịa uy tín hay social proof, không neo giá gây hiểu lầm, không phí ẩn, không làm khó việc huỷ, không chọn sẵn tuỳ chọn trả phí, không ép đồng ý, không quảng cáo trá hình, không gây áp lực bằng nỗi sợ. Default và cách trình bày phải hiển thị rõ, đúng sự thật, dễ đảo ngược và hợp pháp. Skill chỉ đề xuất và thiết kế test; không tự đưa copy hay giá lên chạy, không công bố claim.',
  },
  processFlow: [
    {
      number: 1,
      titleEn: "Define behavior",
      titleVi: "Xác định hành vi",
      descEn: "Ask what behavior to influence, where in the journey it occurs, and what currently blocks it.",
      descVi: "Hỏi muốn ảnh hưởng hành vi nào, nó nằm ở giai đoạn nào trong journey và hiện bị chặn bởi gì."
    },
    {
      number: 2,
      titleEn: "Map journey",
      titleVi: "Gắn vào journey",
      descEn: "Locate the problem in awareness, consideration, decision, onboarding, retention, or growth.",
      descVi: "Đặt vấn đề vào awareness, consideration, decision, onboarding, retention hoặc growth."
    },
    {
      number: 3,
      titleEn: "Choose models",
      titleVi: "Chọn model",
      descEn: "Select relevant mental models instead of listing the whole library.",
      descVi: "Chọn mental model liên quan thay vì liệt kê cả thư viện."
    },
    {
      number: 4,
      titleEn: "Explain psychology",
      titleVi: "Giải thích tâm lý",
      descEn: "Explain why the model affects customer belief, motivation, ability, prompt, or perceived risk.",
      descVi: "Giải thích vì sao model tác động đến niềm tin, động lực, khả năng, prompt hoặc rủi ro cảm nhận của khách hàng."
    },
    {
      number: 5,
      titleEn: "Apply ethically",
      titleVi: "Áp dụng có đạo đức",
      descEn: "Turn the model into marketing applications without deception or fake scarcity.",
      descVi: "Biến model thành ứng dụng marketing mà không lừa dối hoặc tạo khan hiếm giả."
    },
    {
      number: 6,
      titleEn: "Design intervention",
      titleVi: "Thiết kế can thiệp",
      descEn: "Use frameworks such as BJ Fogg, EAST, COM-B, AIDA, or choice architecture to shape the tactic.",
      descVi: "Dùng BJ Fogg, EAST, COM-B, AIDA hoặc choice architecture để định hình tactic."
    },
    {
      number: 7,
      titleEn: "Suggest tests",
      titleVi: "Đề xuất test",
      descEn: "Recommend experiments when psychology is a hypothesis, especially for pricing, urgency, copy, onboarding, or trust.",
      descVi: "Đề xuất thử nghiệm khi psychology chỉ là giả thuyết, nhất là pricing, urgency, copy, onboarding hoặc trust."
    }
  ],
  corePrinciplesEn: [
    "Psychology explains behavior; it does not excuse manipulation",
    "Select models for the user's exact challenge",
    "Reduce friction before blaming customers",
    "Defaults, framing, and prompts shape action",
    "Test psychological hypotheses with real customers"
  ],
  corePrinciplesVi: [
    "Psychology giải thích hành vi, không biện minh cho thao túng",
    "Chọn model theo đúng vấn đề của user",
    "Giảm friction trước khi đổ lỗi cho khách hàng",
    "Default, framing và prompt định hình hành động",
    "Kiểm chứng giả thuyết tâm lý bằng khách hàng thật"
  ],
  expertiseAreasEn: [
    "Buyer psychology",
    "Persuasion and influence",
    "Pricing perception",
    "Choice architecture",
    "Growth loops",
    "Behavioral experiment design"
  ],
  expertiseAreasVi: [
    "Tâm lý người mua",
    "Thuyết phục và ảnh hưởng",
    "Nhận thức về giá",
    "Kiến trúc lựa chọn",
    "Growth loop",
    "Thiết kế thử nghiệm hành vi"
  ],
  promptExamples: [{
      labelEn: "Conversion psychology",
      labelVi: "Tâm lý conversion",
      command: "/ak:marketing-psychology why visitors hesitate on our pricing page",
      commandVi: '/ak:marketing-psychology tại sao khách truy cập do dự trên trang định giá của chúng ta',
      whenEn: "You need mental models behind low conversion or decision paralysis.",
      whenVi: "Khi cần mental model giải thích conversion thấp hoặc khách bị tê liệt quyết định.",
      expectedEn: "Maps blockers to models such as Hick's Law, loss aversion, anchoring, social proof, or regret aversion, then suggests ethical interventions.",
      expectedVi: "Gắn blocker với các model như Hick's Law, loss aversion, anchoring, social proof hoặc regret aversion, rồi đề xuất can thiệp có đạo đức.",
      recommended: true
    },
    {
      labelEn: "Onboarding behavior",
      labelVi: "Hành vi onboarding",
      command: "/ak:marketing-psychology activation energy in our onboarding checklist",
      commandVi: '/ak:marketing-psychology năng lượng kích hoạt trong checklist onboarding của chúng ta',
      whenEn: "The first user action is not happening despite product interest.",
      whenVi: "Khi user quan tâm nhưng không thực hiện hành động đầu tiên.",
      expectedEn: "Uses activation energy, BJ Fogg, goal-gradient, commitment, and progress cues to reduce starting friction.",
      expectedVi: "Dùng activation energy, BJ Fogg, goal-gradient, commitment và tín hiệu progress để giảm friction bắt đầu."
    },
    { labelEn: 'Trial-to-paid friction', labelVi: 'Ma sát trial sang paid', command: '/ak:marketing-psychology increase trial-to-paid on the pricing page',
      commandVi: '/ak:marketing-psychology tăng trial-to-paid trên trang định giá', whenEn: 'A conversion behavior is stuck and needs a mental-model diagnosis.', whenVi: 'Một hành vi chuyển đổi đang kẹt và cần chẩn đoán bằng mental model.', expectedEn: 'It names relevant models, current blockers, and the copy/UX changes to test in the next pass.', expectedVi: 'Model phù hợp, blocker hiện tại và thay đổi copy/UX nên test.' }
  ],
  guardrails: [
    {
      thoughtEn: "Scarcity will increase urgency.",
      thoughtVi: "Khan hiếm sẽ tăng urgency.",
      realityEn: "Only use scarcity when genuine; fake scarcity damages trust.",
      realityVi: "Chỉ dùng khan hiếm khi có thật; khan hiếm giả phá niềm tin.",
      accent: "amber"
    },
    {
      thoughtEn: "Customers are not serious.",
      thoughtVi: "Khách hàng không nghiêm túc.",
      realityEn: "Check situational friction first: confusing checkout, too many choices, weak prompts, or unclear value.",
      realityVi: "Kiểm tra friction tình huống trước: checkout rối, quá nhiều lựa chọn, prompt yếu hoặc value chưa rõ.",
      accent: "sky"
    }
  ]
};

export default data;

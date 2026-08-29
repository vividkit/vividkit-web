import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-marketing-ideas",
  "command": "/ak:marketing-ideas",
  "kit": "marketer",
  "header": {
    "titleEn": "/ak:marketing-ideas",
    "titleVi": "/ak:marketing-ideas",
    "taglineEn": "Choose 3-5 context-fit growth ideas from a 140-tactic SaaS marketing library, then explain fit, first steps, outcomes, and required resources.",
    "taglineVi": "Chọn 3-5 ý tưởng growth phù hợp bối cảnh từ thư viện 140 tactic marketing SaaS, rồi giải thích độ phù hợp, bước đầu, kết quả và nguồn lực cần."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Clarify context",
      "titleVi": "Làm rõ bối cảnh",
      "descEn": "Ask for product, target customer, stage, goal, budget, team size, past attempts, and competitors when unclear.",
      "descVi": "Hỏi product, khách hàng mục tiêu, giai đoạn, mục tiêu, ngân sách, team size, thứ đã thử và đối thủ khi chưa rõ."
    },
    {
      "number": 2,
      "titleEn": "Filter by stage",
      "titleVi": "Lọc theo giai đoạn",
      "descEn": "Match pre-launch, early-stage, growth, or scale needs to the most relevant tactics.",
      "descVi": "Ghép nhu cầu pre-launch, early-stage, growth hoặc scale với tactic phù hợp nhất."
    },
    {
      "number": 3,
      "titleEn": "Filter by resources",
      "titleVi": "Lọc theo nguồn lực",
      "descEn": "Account for free, low-budget, medium-budget, or high-budget constraints and time horizon.",
      "descVi": "Tính đến ràng buộc free, low-budget, medium-budget, high-budget và timeline."
    },
    {
      "number": 4,
      "titleEn": "Select ideas",
      "titleVi": "Chọn ý tưởng",
      "descEn": "Recommend only 3-5 ideas instead of dumping the full 140-item library.",
      "descVi": "Chỉ đề xuất 3-5 ý tưởng, không xả toàn bộ thư viện 140 mục."
    },
    {
      "number": 5,
      "titleEn": "Explain fit",
      "titleVi": "Giải thích vì sao hợp",
      "descEn": "For each idea, connect it to the user's product, audience, stage, and goal.",
      "descVi": "Với mỗi ý tưởng, nối nó với product, audience, giai đoạn và mục tiêu của user."
    },
    {
      "number": 6,
      "titleEn": "Give first steps",
      "titleVi": "Đưa bước đầu",
      "descEn": "Provide the first 2-3 implementation steps and resource needs for each selected idea.",
      "descVi": "Đưa 2-3 bước triển khai đầu và nguồn lực cần cho từng ý tưởng."
    },
    {
      "number": 7,
      "titleEn": "Set outcomes",
      "titleVi": "Đặt kỳ vọng",
      "descEn": "Describe expected outcome and what success should look like.",
      "descVi": "Mô tả kết quả kỳ vọng và hình dạng thành công."
    },
    {
      "number": 8,
      "titleEn": "Route follow-up",
      "titleVi": "Điều hướng tiếp",
      "descEn": "Route to programmatic-seo, competitor, email-sequence, free-tool-strategy, page-cro, or ab-test-setup when execution needs a specialist.",
      "descVi": "Chuyển sang programmatic-seo, competitor, email-sequence, free-tool-strategy, page-cro hoặc ab-test-setup khi triển khai cần skill chuyên biệt."
    }
  ],
  "corePrinciplesEn": [
    "Relevance beats quantity",
    "Stage, budget, team, and timeline determine fit",
    "Ideas need first steps and expected outcomes",
    "Use customer language and competitor context"
  ],
  "corePrinciplesVi": [
    "Độ phù hợp quan trọng hơn số lượng",
    "Giai đoạn, ngân sách, team và timeline quyết định độ hợp",
    "Ý tưởng cần bước đầu và kết quả kỳ vọng",
    "Dùng ngôn ngữ khách hàng và bối cảnh đối thủ"
  ],
  "expertiseAreasEn": [
    "Content and SEO tactics",
    "Free tools and engineering as marketing",
    "Paid acquisition",
    "Community and partnerships",
    "Launch promotions",
    "Product-led growth"
  ],
  "expertiseAreasVi": [
    "Tactic content và SEO",
    "Free tool và engineering as marketing",
    "Paid acquisition",
    "Community và partnership",
    "Launch promotion",
    "Product-led growth"
  ],
  "promptExamples": [
    {
      "labelEn": "SaaS growth ideas",
      "labelVi": "Ý tưởng growth SaaS",
      "command": "/ak:marketing-ideas B2B analytics SaaS for product managers",
      "whenEn": "You need a small set of realistic growth tactics tailored to product and audience.",
      "whenVi": "Khi cần một nhóm tactic growth thực tế, khớp product và audience.",
      "expectedEn": "Recommends 3-5 ideas with why they fit, how to start, expected outcome, and resources needed.",
      "expectedVi": "Đề xuất 3-5 ý tưởng kèm lý do hợp, cách bắt đầu, kết quả kỳ vọng và nguồn lực cần.",
      "recommended": true
    },
    {
      "labelEn": "Pre-launch tactics",
      "labelVi": "Tactic pre-launch",
      "command": "/ak:marketing-ideas pre-launch waitlist for AI writing tool",
      "whenEn": "A product needs awareness and early users before full launch.",
      "whenVi": "Khi product cần awareness và người dùng đầu trước full launch.",
      "expectedEn": "Prioritizes waitlist, early access, Product Hunt prep, content, or community ideas as appropriate.",
      "expectedVi": "Ưu tiên waitlist, early access, chuẩn bị Product Hunt, content hoặc community nếu phù hợp."
    }
  ],
  "reportOutput": {
    "titleEn": "Recommended marketing ideas",
    "titleVi": "Ý tưởng marketing được đề xuất",
    "patternEn": "3-5 idea recommendations",
    "patternVi": "3-5 đề xuất ý tưởng",
    "descEn": "Idea name • why it fits • first steps • expected outcome • resources needed",
    "descVi": "Tên ý tưởng • vì sao phù hợp • bước đầu • kết quả kỳ vọng • nguồn lực cần"
  }
};

export default data;

import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-coding-level',
  command: '/ak:coding-level',
  kit: 'engineer',
  header: {
    titleEn: '/ak:coding-level — Set coding experience level',
    titleVi: '/ak:coding-level — Đặt mức kinh nghiệm lập trình',
    taglineEn: 'Persist a 0–5 codingLevel preference so future supported sessions tailor explanation depth, code complexity, and response format.',
    taglineVi: 'Lưu preference codingLevel 0–5 để các session được hỗ trợ về sau điều chỉnh độ sâu giải thích, độ phức tạp code và định dạng trả lời.',
  },
  processFlow: [
    { number: 1, titleEn: 'Invoke explicitly', titleVi: 'Gọi rõ ràng', descEn: 'Run /ak:coding-level with one valid integer from 0 through 5; the Skill disables automatic model invocation.', descVi: 'Chạy /ak:coding-level với một số nguyên hợp lệ từ 0 đến 5; Skill tắt automatic model invocation.' },
    { number: 2, titleEn: 'Persist config', titleVi: 'Lưu cấu hình', descEn: 'Update codingLevel in .claude/.ck.json while preserving unrelated project configuration.', descVi: 'Cập nhật codingLevel trong .claude/.ck.json và giữ nguyên cấu hình project không liên quan.' },
    { number: 3, titleEn: 'Start supported session', titleVi: 'Mở session được hỗ trợ', descEn: 'On session start, the Engineer Hook reads the saved value and defaults to level 5 when codingLevel is absent.', descVi: 'Khi session bắt đầu, Engineer Hook đọc value đã lưu và mặc định level 5 khi thiếu codingLevel.' },
    { number: 4, titleEn: 'Inject guidance', titleVi: 'Inject hướng dẫn', descEn: 'The Hook maps the selected level to the matching communication rules and style name.', descVi: 'Hook map level đã chọn sang communication rule và tên style tương ứng.' },
    { number: 5, titleEn: 'Shape responses', titleVi: 'Điều chỉnh response', descEn: 'Lower levels add analogies, why-before-how, common mistakes, and takeaways; higher levels emphasize concise trade-offs, architecture, risk, and strategy.', descVi: 'Level thấp thêm analogy, why trước how, lỗi thường gặp và takeaways; level cao nhấn mạnh trade-off, architecture, risk và strategy ngắn gọn.' },
    { number: 6, titleEn: 'Optional output style', titleVi: 'Output style tuỳ chọn', descEn: 'Claude Code can also select coding-level-0-eli5 through coding-level-5-god; same-named user styles are preserved with a warning during routine updates.', descVi: 'Claude Code cũng có thể chọn coding-level-0-eli5 đến coding-level-5-god; style cùng tên do user viết được giữ kèm warning trong update thông thường.' },
  ],
  corePrinciplesEn: ['Match explanation depth to the reader, not the author.', 'Level 5 is the documented maximum-efficiency default.', 'The setting persists in .claude/.ck.json and is injected by supported session-start hooks.', 'Coding level changes communication style; it does not change repository rules, safety boundaries, or authorization.'],
  corePrinciplesVi: ['Điều chỉnh độ sâu giải thích theo người đọc, không theo người viết.', 'Level 5 là default hiệu quả tối đa được ghi nhận.', 'Thiết lập được lưu trong .claude/.ck.json và được session-start hook được hỗ trợ inject.', 'Coding level chỉ đổi communication style; không đổi repository rule, safety boundary hoặc quyền được phép.'],
  workflowModes: [
    { flag: '0', modeEn: 'ELI5', modeVi: 'Giải thích như người mới hoàn toàn', research: 'Analogies, no jargon', redTeam: 'Step-by-step guardrails', validation: 'Key takeaways' },
    { flag: '1', modeEn: 'Junior', modeVi: 'Junior', research: 'Concepts explained', redTeam: 'WHY before HOW', validation: 'Common mistakes' },
    { flag: '2', modeEn: 'Mid-Level', modeVi: 'Trung cấp', research: 'Design patterns', redTeam: 'System thinking', validation: 'Trade-offs' },
    { flag: '3', modeEn: 'Senior', modeVi: 'Senior', research: 'Architecture context', redTeam: 'Business trade-offs', validation: 'Concise rationale' },
    { flag: '4', modeEn: 'Tech Lead', modeVi: 'Tech Lead', research: 'Risk assessment', redTeam: 'Business impact', validation: 'Strategy' },
    { flag: '5', modeEn: 'God Mode', modeVi: 'Chuyên gia', research: 'Maximum efficiency', redTeam: 'Minimal exposition', validation: 'Direct output' },
  ],
  promptExamples: [
    { labelEn: 'Junior teaching mode', labelVi: 'Chế độ dạy junior', command: '/ak:coding-level 1', whenEn: 'Explanations feel too terse and you want WHY, common mistakes, and takeaways in later sessions.', whenVi: 'Khi giải thích quá ngắn và bạn muốn WHY, lỗi thường gặp cùng takeaways trong các session sau.', expectedEn: 'The Skill stores codingLevel: 1 in .claude/.ck.json; after a supported fresh session starts, responses should explain concepts clearly and teach why before how.', expectedVi: 'Skill lưu codingLevel: 1 trong .claude/.ck.json; sau khi mở fresh session được hỗ trợ, response nên giải thích concept rõ và dạy why trước how.', recommended: true },
    { labelEn: 'Mid-level system thinking', labelVi: 'System thinking mức mid', command: '/ak:coding-level 2', whenEn: 'You want less beginner scaffolding and more design patterns, system thinking, and explicit trade-offs.', whenVi: 'Khi muốn bớt hướng dẫn kiểu beginner và có thêm design pattern, system thinking cùng trade-off rõ ràng.', expectedEn: 'The persisted level becomes 2, so supported sessions should frame answers around patterns, testability, system effects, and practical trade-offs.', expectedVi: 'Level được lưu thành 2, nên session được hỗ trợ sẽ đặt response quanh pattern, testability, tác động hệ thống và trade-off thực tế.' },
    { labelEn: 'Tech-lead framing', labelVi: 'Góc nhìn tech lead', command: '/ak:coding-level 4', whenEn: 'You need risk assessment, business impact, strategy, dependencies, and stakeholder decisions to be foregrounded.', whenVi: 'Khi cần làm nổi bật risk assessment, business impact, strategy, dependency và stakeholder decision.', expectedEn: 'The config records codingLevel: 4; future supported responses should compress basics and emphasize risks, strategy, business impact, and coordination decisions.', expectedVi: 'Config ghi codingLevel: 4; các response được hỗ trợ về sau nên rút gọn phần cơ bản và nhấn mạnh risk, strategy, business impact cùng quyết định phối hợp.' },
    { labelEn: 'Maximum efficiency', labelVi: 'Hiệu quả tối đa', command: '/ak:coding-level 5', whenEn: 'You want the documented default expert profile with minimal exposition and direct output.', whenVi: 'Khi muốn profile expert mặc định được ghi nhận, giải thích tối thiểu và output trực tiếp.', expectedEn: 'codingLevel is persisted as 5, so supported fresh sessions should use maximum-efficiency expert output unless another instruction asks for more explanation.', expectedVi: 'codingLevel được lưu là 5, nên fresh session được hỗ trợ sẽ dùng output expert hiệu quả tối đa trừ khi instruction khác yêu cầu giải thích thêm.' },
  ],
};

export default data;

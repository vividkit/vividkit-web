import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-coding-level',
  command: '/ak:coding-level',
  kit: 'engineer',
  header: {
    titleEn: '/ak:coding-level',
    titleVi: '/ak:coding-level',
    taglineEn: 'Set coding experience level 0–5 so explanations, complexity, jargon, and output format match the user.',
    taglineVi: 'Đặt mức kinh nghiệm lập trình 0–5 để độ sâu giải thích, độ phức tạp, thuật ngữ và định dạng trả lời khớp với người dùng.',
  },
  processFlow: [
    { number: 1, titleEn: 'Choose level', titleVi: 'Chọn cấp độ', descEn: 'Pick 0–5: ELI5, Junior, Mid-Level, Senior, Tech Lead, or God Mode.', descVi: 'Chọn 0–5: ELI5, Junior, Mid-Level, Senior, Tech Lead hoặc God Mode.' },
    { number: 2, titleEn: 'Persist config', titleVi: 'Lưu cấu hình', descEn: 'Store the selected codingLevel in .claude/.ck.json.', descVi: 'Lưu codingLevel đã chọn vào .claude/.ck.json.' },
    { number: 3, titleEn: 'Auto inject', titleVi: 'Tự nạp hướng dẫn', descEn: 'Session startup automatically injects the level guidelines; no manual activation is needed afterward.', descVi: 'Khi bắt đầu phiên, hướng dẫn theo cấp độ tự được nạp; sau đó không cần kích hoạt thủ công.' },
    { number: 4, titleEn: 'Shape explanations', titleVi: 'Điều chỉnh giải thích', descEn: 'Lower levels get analogies, why-not-just-how, common mistakes, and takeaways; higher levels get efficient trade-offs and architecture context.', descVi: 'Cấp thấp nhận ví dụ ví von, giải thích vì sao, lỗi thường gặp và ý chính; cấp cao nhận trao đổi ngắn gọn về trade-off và kiến trúc.' },
    { number: 5, titleEn: 'Optional style', titleVi: 'Style tuỳ chọn', descEn: 'Use Claude Code output styles such as coding-level-1-junior or coding-level-5-god for finer display control.', descVi: 'Có thể chọn output style của Claude Code như coding-level-1-junior hoặc coding-level-5-god để tinh chỉnh cách trình bày.' },
    { number: 6, titleEn: 'Preserve custom', titleVi: 'Giữ tuỳ biến', descEn: 'Native updates preserve same-named styles the user wrote, warning instead of overwriting routine customizations.', descVi: 'Bản cập nhật native giữ lại style trùng tên do người dùng tự viết và chỉ cảnh báo, không ghi đè tuỳ biến thường ngày.' },
  ],
  corePrinciplesEn: ['Match the explanation to the reader, not the author.', 'Level 5 is maximum-efficiency default behavior.', 'The setting is persistent and automatically injected at session start.', 'Output styles are optional; codingLevel injection is the main mechanism.'],
  corePrinciplesVi: ['Điều chỉnh giải thích theo người đọc, không theo người viết.', 'Cấp 5 là chế độ mặc định hiệu quả tối đa.', 'Thiết lập được lưu bền vững và tự nạp khi bắt đầu phiên.', 'Output style là tuỳ chọn; cơ chế chính vẫn là injection theo codingLevel.'],
  workflowModes: [
    { flag: '0', modeEn: 'ELI5', modeVi: 'Giải thích như người mới hoàn toàn', research: 'Analogies, no jargon', redTeam: 'Step-by-step guardrails', validation: 'Key takeaways' },
    { flag: '1', modeEn: 'Junior', modeVi: 'Junior', research: 'Concepts explained', redTeam: 'WHY before HOW', validation: 'Common mistakes' },
    { flag: '2', modeEn: 'Mid-Level', modeVi: 'Trung cấp', research: 'Design patterns', redTeam: 'System thinking', validation: 'Trade-offs' },
    { flag: '3', modeEn: 'Senior', modeVi: 'Senior', research: 'Architecture context', redTeam: 'Business trade-offs', validation: 'Concise rationale' },
    { flag: '4', modeEn: 'Tech Lead', modeVi: 'Tech Lead', research: 'Risk assessment', redTeam: 'Business impact', validation: 'Strategy' },
    { flag: '5', modeEn: 'God Mode', modeVi: 'Chuyên gia', research: 'Maximum efficiency', redTeam: 'Minimal exposition', validation: 'Direct output' },
  ],
  promptExamples: [
    { labelEn: 'Junior explanations', labelVi: 'Giải thích cho junior', command: '/ak:coding-level 1', whenEn: 'You want concepts, WHY, common mistakes, and takeaways.', whenVi: 'Khi muốn có khái niệm, lý do, lỗi thường gặp và phần tóm ý.', expectedEn: 'codingLevel persists as 1 and future responses teach more explicitly.', expectedVi: 'codingLevel được lưu là 1 và các câu trả lời sau sẽ giải thích rõ hơn.', recommended: true },
    { labelEn: 'Maximum efficiency', labelVi: 'Hiệu quả tối đa', command: '/ak:coding-level 5', whenEn: 'You want expert, terse, default behavior.', whenVi: 'Khi muốn cách trả lời chuyên gia, ngắn gọn, mặc định.', expectedEn: 'Future sessions use concise expert-level output.', expectedVi: 'Các phiên sau dùng cách trình bày ngắn gọn ở mức chuyên gia.' },
  ],
};

export default data;

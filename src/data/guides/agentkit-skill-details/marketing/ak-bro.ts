import type { SkillInfographic } from '@/data/guides/how-ck-works';
import engineer from '../engineer/ak-bro';

const data: SkillInfographic = {
  ...engineer,
  kit: 'marketer',
  hardGate: {
    type: "critical",
    titleEn: "Simplifying does not authorize new work",
    titleVi: "Nói gọn lại không cho phép làm việc mới",
    contentEn: "The Skill does not add analysis, answer another request, run tools, change files, or perform actions mentioned in the source message. Use the workflow that owns the action and approve it separately.",
    contentVi: "Skill không thêm phân tích, không trả lời yêu cầu khác, không chạy tool, không sửa file và không thực hiện hành động được nhắc trong tin nhắn gốc. Hãy dùng đúng workflow phụ trách hành động đó và duyệt riêng."
  },
};

export default data;

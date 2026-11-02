import type { SkillInfographic } from '@/data/guides/how-ck-works';
import engineer from '../engineer/ak-brainstorm';

const data: SkillInfographic = {
  ...engineer,
  kit: 'marketer',
  hardGate: {
    type: "critical",
    titleEn: "A selected direction is not execution approval",
    titleVi: "Chọn được hướng đi chưa phải là được phép thực hiện",
    contentEn: "`ak-brainstorm` does not publish content, change a campaign or provider account, contact an audience, spend budget, deploy, or implement the chosen direction. `--advice` does not change that boundary. `--html` authorizes only the local brief described above.",
    contentVi: "`ak-brainstorm` không đăng nội dung, không đổi campaign hay tài khoản provider, không liên hệ khán giả, không chi ngân sách, không deploy và không tự triển khai hướng đã chọn. `--advice` không nới ranh giới này. `--html` chỉ cho phép tạo bản brief cục bộ như mô tả ở trên."
  },
};

export default data;

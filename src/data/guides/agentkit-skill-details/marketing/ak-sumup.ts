import type { SkillInfographic } from '@/data/guides/how-ck-works';
import engineer from '../engineer/ak-sumup';

const data: SkillInfographic = {
  ...engineer,
  kit: 'marketer',
  hardGate: {
    type: "critical",
    titleEn: "A recap does not prove release or deployment",
    titleVi: "Bản tóm tắt không chứng minh đã release hay deploy",
    contentEn: "The Skill does not implement, mutate files, publish, deploy, or replace a live status check. It must not present source changes as shipped or deployed unless current artifact or runtime evidence proves that status.",
    contentVi: "Skill không triển khai, không sửa file, không xuất bản, không deploy và không thay cho việc kiểm tra trạng thái thật. Nó không được nói thay đổi trong source là đã ship hay đã deploy, trừ khi artifact hoặc bằng chứng lúc chạy hiện tại chứng minh điều đó."
  },
};

export default data;

import type { SkillInfographic } from '@/data/guides/how-ck-works';
import engineer from '../engineer/ak-sowat';

const data: SkillInfographic = {
  ...engineer,
  kit: 'marketer',
  hardGate: {
    type: "critical",
    titleEn: "A priority call is not execution authority",
    titleVi: "Xếp ưu tiên không phải là quyền thực hiện",
    contentEn: "The Skill analyzes and recommends only. It does not implement changes, mutate issue state, assign owners, contact customers, publish content, change a live account, spend budget, or claim a release without current evidence.",
    contentVi: "Skill chỉ phân tích và đề xuất. Nó không triển khai thay đổi, không đổi trạng thái issue, không giao người phụ trách, không liên hệ khách hàng, không đăng nội dung, không đổi tài khoản đang chạy, không chi ngân sách và không khẳng định đã release khi chưa có bằng chứng hiện tại."
  },
};

export default data;

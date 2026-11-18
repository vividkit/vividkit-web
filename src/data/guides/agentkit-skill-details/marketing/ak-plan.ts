import type { SkillInfographic } from '@/data/guides/how-ck-works';
import engineer from '../engineer/ak-plan';

const data: SkillInfographic = {
  ...engineer,
  kit: 'marketer',
  hardGate: {
    type: "critical",
    titleEn: "A plan is not approval to act",
    titleVi: "Có plan chưa phải là được phép hành động",
    contentEn: "`ak-plan` may write local planning artifacts, update a validation summary, or change plan index visibility through `archive`. It does not authorize code or content edits, publishing, campaign launch, provider-account changes, audience contact, spend, commit, push, or deployment. After the handoff it stops for your choice, and a reminder or \"next step\" line is never approval to start `ak-cook`.",
    contentVi: "`ak-plan` có thể ghi file kế hoạch cục bộ, cập nhật phần tóm tắt kiểm chứng hoặc ẩn/hiện plan trong danh mục qua `archive`. Nó không cho phép sửa code hay nội dung, đăng bài, chạy campaign, đổi tài khoản provider, liên hệ khán giả, chi tiền, commit, push hay deploy. Sau bước bàn giao, nó dừng để bạn chọn, và một lời nhắc hay dòng \"bước tiếp theo\" không bao giờ là sự cho phép chạy `ak-cook`."
  },
};

export default data;

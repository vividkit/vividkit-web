import type { SkillInfographic } from '@/data/guides/how-ck-works';
import engineer from '../engineer/ak-frontend-design';

const data: SkillInfographic = {
  ...engineer,
  kit: 'marketer',
  hardGate: {
    type: "critical",
    titleEn: "A design brief can produce broad code changes",
    titleVi: "Một bản design brief có thể dẫn tới thay đổi code trên diện rộng",
    contentEn: "This Skill is an implementation workflow. It can edit frontend files and may propose assets, dependencies, browser checks, or documentation. None of that authorizes package installation, external generation, secret use, unrelated refactors, Git operations, publication, or deployment.",
    contentVi: "Skill này là workflow triển khai. Nó có thể sửa file frontend và đề xuất asset, dependency, kiểm tra trên browser hoặc tài liệu. Không điều nào trong số đó cho phép cài package, tạo nội dung bằng dịch vụ bên ngoài, dùng secret, refactor phần không liên quan, thao tác Git, xuất bản hay deploy."
  },
};

export default data;

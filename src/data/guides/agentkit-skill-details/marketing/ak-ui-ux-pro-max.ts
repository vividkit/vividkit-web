import type { SkillInfographic } from '@/data/guides/how-ck-works';
import engineer from '../engineer/ak-ui-ux-pro-max';

const data: SkillInfographic = {
  ...engineer,
  kit: 'marketer',
  hardGate: {
    type: "critical",
    titleEn: "Bundled recommendations are not current user evidence",
    titleVi: "Gợi ý có sẵn không phải bằng chứng từ người dùng hiện tại",
    contentEn: "Local search does not validate the live product, current platform guidance, font availability, browser behavior, or accessibility. Treat the result as a proposal to test. `--persist` writes files and can replace an existing Master or page override at the same path, so review the destination first.",
    contentVi: "Tìm kiếm cục bộ không kiểm chứng được sản phẩm đang chạy, hướng dẫn hiện tại của nền tảng, việc font có dùng được không, cách browser hiển thị hay khả năng tiếp cận. Hãy coi kết quả là đề xuất cần thử. `--persist` ghi file và có thể thay file Master hoặc file ghi đè của trang ở cùng đường dẫn, nên hãy xem trước nơi sẽ ghi."
  },
};

export default data;

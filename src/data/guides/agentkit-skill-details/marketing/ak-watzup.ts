import type { SkillInfographic } from '@/data/guides/how-ck-works';
import engineer from '../engineer/ak-watzup';

const data: SkillInfographic = {
  ...engineer,
  kit: 'marketer',
  hardGate: {
    type: "critical",
    titleEn: "--fetch changes refs and contacts remotes",
    titleVi: "--fetch đổi ref và kết nối tới remote",
    contentEn: "Use fresh remote refs only when the user explicitly asks. The scanner's `--fetch` option runs `git fetch --all --prune`, which uses network and credentials and can update or prune remote-tracking refs. It does not become authorized merely because a status report would be fresher.",
    contentVi: "Chỉ lấy ref mới từ remote khi người dùng yêu cầu rõ. Tùy chọn `--fetch` của scanner chạy `git fetch --all --prune`, dùng mạng và credential, và có thể cập nhật hoặc xóa bớt remote-tracking ref. Báo cáo trạng thái mới hơn không phải lý do để tự bật tùy chọn này."
  },
};

export default data;

import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: 'ak-gamification-marketing',
  command: '/ak:gamification-marketing',
  kit: 'marketer',
  header: {
    titleEn: '/ak:gamification-marketing — Gamification Marketing',
    titleVi: '/ak:gamification-marketing — Gamification cho marketing',
    taglineEn: 'Designs gamified campaigns with points, badges, leaderboards, streaks, challenges, rewards, psychology alignment, templates, and KPIs.',
    taglineVi: 'Thiết kế chiến dịch gamification bằng điểm, badge, leaderboard, streak, challenge, reward, căn chỉnh tâm lý, template và KPI.',
  },
  processFlow: [
    { number: 1, titleEn: 'Identify goal', titleVi: 'Xác định mục tiêu', descEn: 'Map acquisition, retention, engagement, conversion, or onboarding to the decision tree.', descVi: 'Ghép acquisition, retention, engagement, conversion hoặc onboarding với decision tree.' },
    { number: 2, titleEn: 'Select mechanics', titleVi: 'Chọn cơ chế game', descEn: 'Choose from points, badges, leaderboards, levels, streaks, challenges, quests, unlockables, rewards, and progress bars.', descVi: 'Chọn giữa điểm, badge, leaderboard, level, streak, challenge, quest, unlockable, reward và progress bar.' },
    { number: 3, titleEn: 'Align psychology', titleVi: 'Căn chỉnh tâm lý', descEn: 'Use the psychology frameworks to match motivation, loss aversion, social proof, progress, curiosity, or variable reward.', descVi: 'Dùng framework tâm lý để khớp động lực, loss aversion, social proof, tiến độ, tò mò hoặc phần thưởng biến thiên.' },
    { number: 4, titleEn: 'Balance ethics', titleVi: 'Cân bằng đạo đức', descEn: 'Favor long-term white-hat mechanics while using urgency or FOMO carefully and intentionally.', descVi: 'Ưu tiên cơ chế white-hat dài hạn, chỉ dùng urgency hoặc FOMO một cách thận trọng và có chủ đích.' },
    { number: 5, titleEn: 'Segment players', titleVi: 'Phân nhóm người chơi', descEn: 'Adapt the campaign for achievers, explorers, socializers, and competitive users.', descVi: 'Điều chỉnh chiến dịch cho nhóm thích thành tích, khám phá, xã hội hóa và cạnh tranh.' },
    { number: 6, titleEn: 'Design campaign', titleVi: 'Thiết kế chiến dịch', descEn: 'Load campaign templates and define rules, rewards, challenge structure, calendar, and implementation notes.', descVi: 'Nạp template chiến dịch và xác định luật chơi, phần thưởng, cấu trúc thử thách, lịch và ghi chú triển khai.' },
    { number: 7, titleEn: 'Measure KPIs', titleVi: 'Đo KPI', descEn: 'Track retention, completion, engagement, referrals, conversions, ROI, and alerts using KPI references.', descVi: 'Theo dõi retention, hoàn tất, tương tác, referral, conversion, ROI và cảnh báo bằng tài liệu KPI.' },
    { number: 8, titleEn: 'Avoid pitfalls', titleVi: 'Tránh lỗi thường gặp', descEn: 'Keep 2 to 3 core mechanics, clarify reward value, prevent leaderboard toxicity, and personalize by player type.', descVi: 'Giữ 2 đến 3 cơ chế chính, làm rõ giá trị thưởng, tránh leaderboard độc hại và cá nhân hóa theo kiểu người chơi.' },
  ],
  corePrinciplesEn: [
    'Mechanics must start from a marketing goal, not from novelty.',
    'Use 2 to 3 core mechanics first; too many mechanics dilute behavior.',
    'Reward value must be legible to the user.',
    'White-hat motivation should carry most of the campaign for long-term trust.',
  ],
  corePrinciplesVi: [
    'Cơ chế game phải bắt đầu từ mục tiêu marketing, không phải từ sự mới lạ.',
    'Ban đầu chỉ dùng 2 đến 3 cơ chế chính; quá nhiều cơ chế sẽ làm loãng hành vi.',
    'Giá trị phần thưởng phải dễ hiểu với người dùng.',
    'Động lực white-hat nên chiếm phần lớn chiến dịch để giữ niềm tin lâu dài.',
  ],
  expertiseAreasEn: ['Loyalty programs', 'Referral campaigns', 'Onboarding gamification', 'Engagement boosts', 'Email gamification', 'KPI tracking'],
  expertiseAreasVi: ['Chương trình loyalty', 'Chiến dịch referral', 'Gamification onboarding', 'Tăng tương tác', 'Gamification trong email', 'Theo dõi KPI'],
  promptExamples: [
    { labelEn: 'Retention streaks', labelVi: 'Streak giữ chân', command: '/ak:gamification-marketing streaks for retention campaign',
      commandVi: '/ak:gamification-marketing streaks cho chiến dịch giữ chân', whenEn: 'The goal is habit formation or repeat usage.', whenVi: 'Mục tiêu là tạo thói quen hoặc tăng sử dụng lặp lại.', expectedEn: 'Maps retention to streaks, tiers, loyalty points, and loss-aversion safeguards.', expectedVi: 'Ghép retention với streak, tier, điểm loyalty và hàng rào tránh lạm dụng loss aversion.', recommended: true },
    { labelEn: 'Referral leaderboard', labelVi: 'Leaderboard referral', command: '/ak:gamification-marketing referral leaderboard for acquisition',
      commandVi: '/ak:gamification-marketing bảng xếp hạng referral cho acquisition', whenEn: 'Acquisition should use referrals, dual rewards, and social proof.', whenVi: 'Acquisition cần dùng referral, thưởng hai phía và social proof.', expectedEn: 'Designs mechanics, psychology, reward rules, and toxicity safeguards.', expectedVi: 'Thiết kế cơ chế, tâm lý, luật thưởng và cách tránh cạnh tranh độc hại.' },
    { labelEn: 'Onboarding progress', labelVi: 'Tiến độ onboarding', command: '/ak:gamification-marketing onboarding progress bars and micro-badges',
      commandVi: '/ak:gamification-marketing thanh tiến trình onboarding và micro-badges', whenEn: 'New users need momentum through setup or activation.', whenVi: 'Người dùng mới cần cảm giác tiến triển qua bước setup hoặc activation.', expectedEn: 'Uses progress bars, micro-badges, unlockables, templates, and activation KPIs.', expectedVi: 'Dùng progress bar, micro-badge, unlockable, template và KPI activation.' },
  ],
  specialOperations: [
    { id: 'goal-map', titleEn: 'Goal to mechanic map', titleVi: 'Ghép mục tiêu với cơ chế', descEn: 'Acquisition, retention, engagement, conversion, and onboarding each get different mechanics.', descVi: 'Acquisition, retention, engagement, conversion và onboarding dùng các cơ chế khác nhau.', color: 'blue' },
    { id: 'psychology', titleEn: 'Psychology fit', titleVi: 'Độ khớp tâm lý', descEn: 'Connects campaign mechanics to competence, social proof, mastery, loss aversion, curiosity, and momentum.', descVi: 'Nối cơ chế chiến dịch với năng lực, social proof, mastery, loss aversion, tò mò và đà tiến triển.', color: 'violet' },
    { id: 'pitfalls', titleEn: 'Pitfall control', titleVi: 'Kiểm soát lỗi', descEn: 'Limits mechanic sprawl, unclear rewards, toxic competition, impossible challenges, and generic personalization.', descVi: 'Hạn chế lan man cơ chế, phần thưởng mơ hồ, cạnh tranh độc hại, thử thách bất khả thi và cá nhân hóa chung chung.', color: 'rose' },
  ],
  reportOutput: {
    titleEn: 'Gamification report',
    titleVi: 'Báo cáo gamification',
    patternEn: 'assets/reports/performance/{date}-gamification-analysis.md',
    patternVi: 'assets/reports/performance/{date}-gamification-analysis.md',
    descEn: 'Uses assets-organizing to place the campaign analysis, mechanics, psychology, KPI plan, and risks.',
    descVi: 'Dùng assets-organizing để lưu phân tích chiến dịch, cơ chế, tâm lý, kế hoạch KPI và rủi ro.',
  },
};

export default data;

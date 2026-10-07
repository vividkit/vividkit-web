import type { BotAvatarType } from 'bot-avatars';

export type Lang = 'en' | 'vi';

// Default team seeded by the app (02-product-spec §2); bots follow ROLE_BOT in packages/ui avatar.tsx.
export const TEAM: { name: string; color: string; bot: BotAvatarType; role: Record<Lang, string>; does: Record<Lang, string> }[] = [
  {
    name: 'Cora',
    color: 'person-1',
    bot: 'cloud',
    role: { en: 'Coordinator', vi: 'Điều phối' },
    does: {
      en: 'Sorts your request, picks a workflow, creates the issue and the first Inbox item. Does not do the work.',
      vi: 'Phân loại yêu cầu, chọn quy trình, tạo issue và mục Hộp thư đầu tiên. Không trực tiếp làm việc.',
    },
  },
  {
    name: 'Ada',
    color: 'person-2',
    bot: 'hexagon',
    role: { en: 'Architect', vi: 'Kiến trúc sư' },
    does: {
      en: 'Advice, brainstorming, Requirements, plans, project reports and code review.',
      vi: 'Tư vấn, brainstorm, Requirement, kế hoạch, báo cáo dự án và soát lại mã.',
    },
  },
  {
    name: 'Dee',
    color: 'person-3',
    bot: 'flower',
    role: { en: 'Designer', vi: 'Thiết kế' },
    does: { en: 'Layout and style.', vi: 'Bố cục và kiểu dáng.' },
  },
  {
    name: 'Ben',
    color: 'person-4',
    bot: 'droid',
    role: { en: 'Builder', vi: 'Lập trình' },
    does: { en: 'Sets things up, builds and fixes.', vi: 'Khởi tạo, xây dựng và sửa lỗi.' },
  },
  {
    name: 'Tess',
    color: 'person-5',
    bot: 'pebble',
    role: { en: 'Tester', vi: 'Kiểm thử' },
    does: {
      en: 'Evidence for every criterion, measurements before and after.',
      vi: 'Bằng chứng cho từng tiêu chí, số đo trước và sau.',
    },
  },
  {
    name: 'Ivy',
    color: 'person-6',
    bot: 'cat',
    role: { en: 'Investigator (optional)', vi: 'Điều tra lỗi (tuỳ chọn)' },
    does: { en: 'Finds causes with evidence. Read only.', vi: 'Tìm nguyên nhân có bằng chứng. Chỉ đọc.' },
  },
];

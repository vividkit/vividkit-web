import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  id: "ak-motion-design",
  command: "/ak:motion-design",
  kit: 'marketer',
  header: {
    titleEn: '/ak:motion-design — Motion design for intent and timing',
    titleVi: '/ak:motion-design — Motion design theo cảm xúc và nhịp',
    taglineEn: "Motion design advisor for emotional intent, personality, timing, easing, choreography, UI motion, marketing motion, and implementation handoff.",
    taglineVi: "Cố vấn motion design cho cảm xúc mục tiêu, personality, timing, easing, choreography, motion UI, motion marketing và handoff triển khai."
  },
  processFlow: [
    {
      number: 1,
      titleEn: "Set emotion",
      titleVi: "Chốt cảm xúc",
      descEn: "Define the emotional target: joy, calm, urgency, elegance, surprise, or another specific feeling.",
      descVi: "Chốt cảm xúc mục tiêu: vui, bình tĩnh, khẩn cấp, thanh lịch, bất ngờ hoặc cảm giác cụ thể khác."
    },
    {
      number: 2,
      titleEn: "Choose personality",
      titleVi: "Chọn personality",
      descEn: "Pick one motion archetype: Playful, Premium, Corporate, or Energetic, and apply it consistently.",
      descVi: "Chọn một archetype motion: Playful, Premium, Corporate hoặc Energetic, rồi áp dụng nhất quán."
    },
    {
      number: 3,
      titleEn: "Select properties",
      titleVi: "Chọn thuộc tính",
      descEn: "Choose primary property plus minimal secondary properties; avoid three or more unless necessary.",
      descVi: "Chọn thuộc tính chính và ít thuộc tính phụ nhất có thể; tránh từ ba thuộc tính trở lên nếu không cần."
    },
    {
      number: 4,
      titleEn: "Set timing",
      titleVi: "Đặt timing",
      descEn: "Use duration tables, distance scaling, and enter/exit rules to keep motion responsive.",
      descVi: "Dùng bảng duration, scale theo khoảng cách và rule enter/exit để motion vẫn phản hồi nhanh."
    },
    {
      number: 5,
      titleEn: "Choose easing",
      titleVi: "Chọn easing",
      descEn: "Use directional easing: ease-out for entrances, ease-in for exits, ease-in-out for on-screen motion.",
      descVi: "Dùng easing theo hướng: ease-out cho entrance, ease-in cho exit, ease-in-out cho chuyển động trên màn hình."
    },
    {
      number: 6,
      titleEn: "Layer motion",
      titleVi: "Xếp lớp motion",
      descEn: "Design primary, secondary, and ambient layers so the animation does not feel flat.",
      descVi: "Thiết kế lớp primary, secondary và ambient để animation không bị phẳng."
    },
    {
      number: 7,
      titleEn: "Choreograph scene",
      titleVi: "Dàn dựng cảnh",
      descEn: "Lead with hero elements, keep stagger under 500ms, and obey 1/3 distance and element rules.",
      descVi: "Cho hero element dẫn nhịp, giữ stagger dưới 500ms và tuân thủ rule 1/3 về khoảng cách và số element."
    },
    {
      number: 8,
      titleEn: "Adapt surface",
      titleVi: "Điều chỉnh theo surface",
      descEn: "Apply specific constraints for hero sections, CTAs, promo modals, landing pages, HTML5 ads, email previews, or scroll storytelling.",
      descVi: "Áp ràng buộc riêng cho hero section, CTA, modal promo, landing page, HTML5 ad, email preview hoặc scroll storytelling."
    },
    {
      number: 9,
      titleEn: "Route execution",
      titleVi: "Chuyển triển khai",
      descEn: "Produce a principled brief here, then route code, assets, video, brand, design-system, or audio execution to the proper peer skill.",
      descVi: "Tạo brief có nguyên lý tại đây, rồi chuyển code, asset, video, brand, design-system hoặc audio sang skill phù hợp."
    }
  ],
  hardGate: {
    type: "critical",
    titleEn: "Critical motion rules",
    titleVi: "Luật motion không được phá",
    contentEn: "Never use linear easing for spatial movement, never use opacity-only for important state changes, never exceed one-third screen travel without a keyframe, and always use primary + secondary + ambient layers.",
    contentVi: "Không dùng linear easing cho chuyển động trong không gian, không chỉ dùng opacity cho thay đổi trạng thái quan trọng, không di chuyển quá một phần ba màn hình nếu thiếu keyframe, và luôn có lớp primary + secondary + ambient."
  },
  corePrinciplesEn: [
    "Emotion drives timing, easing, and amplitude",
    "One motion personality per project",
    "Minimum properties create clearer motion",
    "Marketing motion is conversion craft, not decoration",
    "This skill advises; peers implement assets, code, or renders"
  ],
  corePrinciplesVi: [
    "Cảm xúc quyết định timing, easing và biên độ",
    "Một project dùng một motion personality",
    "Ít thuộc tính hơn tạo motion rõ hơn",
    "Motion marketing là craft tăng conversion, không phải trang trí",
    "Skill này tư vấn; skill khác triển khai asset, code hoặc render"
  ],
  expertiseAreasEn: [
    "Emotion-to-motion mapping",
    "Timing and easing tables",
    "Disney principles for UI",
    "Micro-interactions",
    "Landing-page choreography",
    "HTML5 ad motion constraints"
  ],
  expertiseAreasVi: [
    "Ánh xạ cảm xúc sang motion",
    "Bảng timing và easing",
    "Nguyên lý Disney cho UI",
    "Micro-interaction",
    "Choreography landing page",
    "Ràng buộc motion HTML5 ad"
  ],
  promptExamples: [{
      labelEn: "CTA motion brief",
      labelVi: "Brief motion cho CTA",
      command: "/ak:motion-design animated CTA feedback for premium SaaS landing page",
      commandVi: '/ak:motion-design phản hồi CTA động cho trang đích SaaS cao cấp',
      whenEn: "You need the motion decision before handing implementation to frontend-design.",
      whenVi: "Khi cần quyết định motion trước khi bàn giao triển khai cho frontend-design.",
      expectedEn: "Defines emotion, personality, timing, easing, properties, layers, and handoff notes.",
      expectedVi: "Chốt cảm xúc, personality, timing, easing, property, các lớp motion và ghi chú handoff.",
      recommended: true
    },
    {
      labelEn: "Campaign entrance",
      labelVi: "Entrance cho campaign",
      command: "/ak:motion-design hero section entrance for a high-energy launch page",
      commandVi: '/ak:motion-design hiệu ứng xuất hiện phần hero cho trang ra mắt năng lượng cao',
      whenEn: "A marketing surface needs choreography and conversion-aware motion constraints.",
      whenVi: "Khi một surface marketing cần choreography và ràng buộc motion hướng conversion.",
      expectedEn: "Maps hero, social proof, feature, and CTA timing while preserving above-the-fold CTA visibility.",
      expectedVi: "Ánh xạ timing cho hero, social proof, feature và CTA trong khi giữ CTA above-the-fold hiển thị sớm."
    },
    { labelEn: 'Urgent premium hero', labelVi: 'Hero gấp nhưng premium', command: '/ak:motion-design hero animation that feels urgent but premium',
      commandVi: '/ak:motion-design hoạt ảnh hero mang cảm giác khẩn cấp nhưng cao cấp', whenEn: 'Motion needs an emotional target and timing notes before production.', whenVi: 'Motion cần cảm xúc mục tiêu và ghi chú nhịp trước khi sản xuất.', expectedEn: "Emotion, personality, timing, and do/don't motion direction.", expectedVi: 'Cảm xúc, cá tính, nhịp và hướng motion nên/không nên.' }
  ],
  skillStack: [
    {
      name: "/ak:frontend-design",
      type: "skill"
    },
    {
      name: "/ak:banner-design",
      type: "skill"
    },
    {
      name: "/ak:video",
      type: "skill"
    },
    {
      name: "/ak:design-system",
      type: "skill"
    },
    {
      name: "/ak:elevenlabs",
      type: "skill"
    }
  ]
};

export default data;

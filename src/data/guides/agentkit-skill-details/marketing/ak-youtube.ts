import type { SkillInfographic } from '@/data/guides/how-ck-works';

const data: SkillInfographic = {
  "id": "ak-youtube",
  "command": "/ak:youtube",
  "kit": "marketer",
  "header": {
    "titleEn": "/ak:youtube",
    "titleVi": "/ak:youtube",
    "taglineEn": "Repurpose YouTube videos into SEO blogs, visual infographics, and social posts with VidCap captions, downloads, summaries, and comment analysis.",
    "taglineVi": "Tái sử dụng video YouTube thành blog SEO, infographic và bài social bằng VidCap captions, download, summary và phân tích comment."
  },
  "hardGate": {
    "type": "warning",
    "titleEn": "A source URL is not permission",
    "titleVi": "URL nguồn không phải quyền sử dụng",
    "contentEn": "Only process, download, quote, transform, or redistribute material you are allowed to use; obtain consent before reusing likeness, voice, or private information and review copyright, platform, publicity, privacy, and advertising requirements.",
    "contentVi": "Chỉ process, download, quote, transform hoặc redistribute nội dung bạn được phép dùng; xin consent trước khi dùng lại likeness, voice hoặc thông tin riêng tư và review yêu cầu copyright, platform, publicity, privacy và advertising."
  },
  "processFlow": [
    {
      "number": 1,
      "titleEn": "Parse route",
      "titleVi": "Tách tuyến",
      "descEn": "Read blog, infographic, or social from the first argument and treat the remaining argument as the YouTube URL.",
      "descVi": "Đọc blog, infographic hoặc social từ tham số đầu và dùng phần còn lại làm URL YouTube."
    },
    {
      "number": 2,
      "titleEn": "Load reference",
      "titleVi": "Nạp reference",
      "descEn": "Load references/blog.md, references/infographic.md, or references/social.md for the selected output format.",
      "descVi": "Nạp references/blog.md, references/infographic.md hoặc references/social.md theo định dạng output đã chọn."
    },
    {
      "number": 3,
      "titleEn": "Fetch source",
      "titleVi": "Lấy nguồn",
      "descEn": "Use VidCap content/media API knowledge and vidcap.py for captions, transcripts, downloads, summaries, or comment data as required.",
      "descVi": "Dùng kiến thức VidCap content/media API và vidcap.py để lấy caption, transcript, download, summary hoặc dữ liệu comment khi cần."
    },
    {
      "number": 4,
      "titleEn": "Extract insights",
      "titleVi": "Rút insight",
      "descEn": "Turn the transcript, summary, media, and comments into key claims, sections, hooks, visuals, or social angles.",
      "descVi": "Chuyển transcript, summary, media và comment thành luận điểm chính, section, hook, ý tưởng hình ảnh hoặc góc social."
    },
    {
      "number": 5,
      "titleEn": "Transform",
      "titleVi": "Chuyển thể",
      "descEn": "Create the selected deliverable: SEO blog post, visual infographic, or multi-platform social content.",
      "descVi": "Tạo sản phẩm đã chọn: bài blog SEO, infographic trực quan hoặc nội dung social đa nền tảng."
    },
    {
      "number": 6,
      "titleEn": "Package",
      "titleVi": "Đóng gói",
      "descEn": "Return the repurposed content with source context, platform fit, and any asset/API caveats.",
      "descVi": "Trả nội dung đã tái sử dụng kèm bối cảnh nguồn, độ phù hợp nền tảng và lưu ý về asset/API nếu có."
    }
  ],
  "corePrinciplesEn": [
    "The YouTube URL is the source; the subcommand defines the repurposed output.",
    "Use VidCap content/media APIs for captions, transcripts, downloads, summaries, and comments.",
    "Repurposing should preserve source meaning while changing structure for the target format."
  ],
  "corePrinciplesVi": [
    "URL YouTube là nguồn; subcommand quyết định output tái sử dụng.",
    "Dùng VidCap content/media API cho caption, transcript, download, summary và comment.",
    "Tái sử dụng phải giữ đúng ý nguồn nhưng đổi cấu trúc cho định dạng đích."
  ],
  "workflowModes": [
    {
      "flag": "blog",
      "modeEn": "Video to SEO blog",
      "modeVi": "Video thành blog SEO",
      "research": "Transcript + summary",
      "redTeam": "SEO/source fidelity",
      "validation": "Blog draft",
      "cookFlag": "references/blog.md"
    },
    {
      "flag": "infographic",
      "modeEn": "Video to infographic",
      "modeVi": "Video thành infographic",
      "research": "Key ideas + visuals",
      "redTeam": "Visual clarity",
      "validation": "Infographic content",
      "cookFlag": "references/infographic.md"
    },
    {
      "flag": "social",
      "modeEn": "Video to social",
      "modeVi": "Video thành social",
      "research": "Hooks + comments",
      "redTeam": "Platform fit",
      "validation": "Social posts",
      "cookFlag": "references/social.md"
    }
  ],
  "skillStack": [
    {
      "name": "vidcap.py",
      "type": "tool"
    },
    {
      "name": "VidCap Content API",
      "type": "tool"
    },
    {
      "name": "VidCap Media API",
      "type": "tool"
    },
    {
      "name": "test_vidcap.py",
      "type": "tool"
    }
  ],
  "promptExamples": [
    {
      "labelEn": "Blog repurpose",
      "labelVi": "Chuyển thành blog",
      "command": "/ak:youtube blog https://youtube.com/watch?v=VIDEO_ID",
      "whenEn": "Use when a video should become an SEO article.",
      "whenVi": "Dùng khi video cần chuyển thành bài SEO.",
      "expectedEn": "SEO blog post based on transcript and video summary.",
      "expectedVi": "Bài blog SEO dựa trên transcript và summary của video.",
      "recommended": true
    },
    {
      "labelEn": "Infographic",
      "labelVi": "Infographic",
      "command": "/ak:youtube infographic https://youtube.com/watch?v=VIDEO_ID",
      "whenEn": "Use when the video should become a visual summary.",
      "whenVi": "Dùng khi video cần thành tóm tắt trực quan.",
      "expectedEn": "Infographic-ready structure and visual points.",
      "expectedVi": "Cấu trúc sẵn cho infographic và các điểm hình ảnh chính."
    },
    {
      "labelEn": "Social posts",
      "labelVi": "Bài social",
      "command": "/ak:youtube social https://youtube.com/watch?v=VIDEO_ID",
      "whenEn": "Use to create multi-platform social content from one video.",
      "whenVi": "Dùng để tạo nội dung social đa nền tảng từ một video.",
      "expectedEn": "Platform-adapted social post set.",
      "expectedVi": "Bộ bài social đã điều chỉnh theo nền tảng."
    }
  ],
  "reportOutput": {
    "titleEn": "Repurposed YouTube content",
    "titleVi": "Nội dung YouTube tái sử dụng",
    "patternEn": "blog → assets/articles/{date}-{slug}.md; infographic → assets/infographic/{date}-{slug}.{html,png,json}; social → assets/posts/{platform}/{date}-{slug}.md and assets/posts/{date}-{slug}-all-platforms.md",
    "patternVi": "blog → assets/articles/{date}-{slug}.md; infographic → assets/infographic/{date}-{slug}.{html,png,json}; social → assets/posts/{platform}/{date}-{slug}.md và assets/posts/{date}-{slug}-all-platforms.md",
    "locationEn": "assets/articles/, assets/infographic/, and assets/posts/",
    "locationVi": "assets/articles/, assets/infographic/ và assets/posts/",
    "descEn": "VidCap-backed source extraction feeds the selected transformation route and its packaged output convention.",
    "descVi": "Phần trích nguồn bằng VidCap cung cấp dữ liệu cho tuyến chuyển thể đã chọn."
  }
};

export default data;

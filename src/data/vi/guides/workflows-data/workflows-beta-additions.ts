// Beta-only workflow additions (v2.14.0) - Vietnamese
// Combined with stableWorkflows in the index to form betaWorkflows

export const betaOnlyWorkflows = [
  {
    title: 'Deploy Ứng Dụng',
    level: 'Intermediate',
    duration: '~5-15 phút',
    stepCount: 1,
    bestFor: 'Deploy lên Vercel, Netlify, Railway, Fly.io, AWS, GCP và nhiều hơn',
    gradientHeader: 'from-orange-500/10 to-amber-500/10',
    hoverBorderColor: 'hover:border-orange-500/50',
    buttonColor: 'bg-orange-500 hover:bg-orange-600',
    icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
    iconColor: 'text-orange-600 dark:text-orange-400',
    steps: [
      {
        command: '/deploy [platform]',
        typeLabel: 'Auto-deploy (skill)',
        description: 'AI tự nhận diện project type và deploy lên 15+ nền tảng mà không cần cấu hình thủ công',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 1,
        isSkill: true
      }
    ],
    tip: '✨ Beta: /deploy tự nhận diện stack và xử lý biến môi trường, build steps, và cấu hình platform',
    features: [
      'Tự nhận diện project type (Next.js, Astro, Express, ...)',
      'Hỗ trợ 15+ nền tảng sẵn có',
      'Xử lý env vars và cấu hình build',
      'Vercel, Netlify, Railway, Fly.io, AWS, GCP, Azure'
    ],
    borderColor: 'border-orange-500/20'
  },
  {
    title: 'Kiểm Tra Bảo Mật',
    level: 'Intermediate',
    duration: '~10-20 phút',
    stepCount: 1,
    bestFor: 'Tìm lỗ hổng bảo mật và secret bị lộ trước khi ship',
    gradientHeader: 'from-rose-500/10 to-red-500/10',
    hoverBorderColor: 'hover:border-rose-500/50',
    buttonColor: 'bg-rose-500 hover:bg-rose-600',
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    iconColor: 'text-rose-600 dark:text-rose-400',
    steps: [
      {
        command: '/security-scan --full',
        typeLabel: 'Kiểm tra bảo mật (skill)',
        description: 'Quét sâu tìm lỗ hổng OWASP, API key bị lộ và các pattern không an toàn',
        color: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
        number: 1,
        isSkill: true
      }
    ],
    tip: '✨ Beta: /security-scan kiểm tra OWASP top 10, lộ secrets, lỗ hổng authentication và dependency',
    features: [
      'Kiểm tra lỗ hổng OWASP Top 10',
      'Phát hiện API key và secret bị lộ',
      'Lỗ hổng xác thực và phân quyền',
      'Quét dependency vulnerabilities'
    ],
    borderColor: 'border-rose-500/20'
  },
  {
    title: 'Tạo LLMs.txt',
    level: 'Beginner',
    duration: '~5-10 phút',
    stepCount: 1,
    bestFor: 'Làm cho project dễ đọc với các AI/LLM tools',
    gradientHeader: 'from-violet-500/10 to-purple-500/10',
    hoverBorderColor: 'hover:border-violet-500/50',
    buttonColor: 'bg-violet-500 hover:bg-violet-600',
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    iconColor: 'text-violet-600 dark:text-violet-400',
    steps: [
      {
        command: '/llms [path]',
        typeLabel: 'Tạo index (skill)',
        description: 'Tạo llms.txt theo chuẩn llmstxt.org — giúp AI đọc hiểu docs của bạn dễ dàng',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 1,
        isSkill: true
      }
    ],
    tip: '✨ Beta: /llms tạo llms.txt chuẩn hóa để AI tools có thể hiểu nhanh codebase của bạn',
    features: [
      'Tuân theo chuẩn llmstxt.org',
      'Tạo từ docs, README hoặc codebase',
      'Bao gồm reference files và cấu trúc',
      'Hoạt động với mọi loại project'
    ],
    borderColor: 'border-violet-500/20'
  }
];

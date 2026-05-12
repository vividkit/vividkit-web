// Marketing Kit workflows - organized by category
// All commands use /ckm: prefix (migration from /ckm: complete)

export const marketingKitWorkflows = [
  // === CONTENT & COPY ===
  {
    title: 'Write & Publish Blog Post',
    category: 'Content & Copy',
    level: 'Beginner',
    duration: '~20-30 min',
    stepCount: 4,
    bestFor: 'Creating SEO-optimized blog content from scratch',
    gradientHeader: 'from-pink-500/10 to-rose-500/10',
    hoverBorderColor: 'hover:border-pink-500/50',
    buttonColor: 'bg-pink-500 hover:bg-pink-600',
    icon: '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>',
    iconColor: 'text-pink-600 dark:text-pink-400',
    steps: [
      {
        command: '/ckm:write:good [topic]',
        typeLabel: 'Research & draft',
        description: 'AI researches topic, analyzes competitors, and drafts SEO-optimized content',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 1
      },
      {
        command: '/ckm:seo:audit',
        typeLabel: 'SEO optimization',
        description: 'Audit content for keyword density, meta tags, and search optimization',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 2
      },
      {
        command: '/ckm:write:enhance',
        typeLabel: 'Enhance & polish',
        description: 'Improve readability, add CTAs, and optimize for engagement',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 3
      },
      {
        command: '/ckm:write:publish',
        typeLabel: 'Publish content',
        description: 'Format for CMS, add images, and prepare for publication',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4
      }
    ],
    tip: 'Use /ckm:write:good for quality content; /ckm:write:fast for quick drafts',
    features: [
      'Competitor content analysis',
      'SEO keyword integration',
      'Readability optimization',
      'CMS-ready formatting'
    ],
    borderColor: 'border-pink-500/20'
  },
  {
    title: 'Create Email Sequence',
    category: 'Content & Copy',
    level: 'Intermediate',
    duration: '~30-45 min',
    stepCount: 4,
    bestFor: 'Building automated email nurture campaigns',
    gradientHeader: 'from-cyan-500/10 to-blue-500/10',
    hoverBorderColor: 'hover:border-cyan-500/50',
    buttonColor: 'bg-cyan-500 hover:bg-cyan-600',
    icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    steps: [
      {
        command: '/ckm:persona',
        typeLabel: 'Define audience',
        description: 'Create buyer persona to target messaging effectively',
        color: 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400',
        number: 1
      },
      {
        command: '/ckm:email:flow [welcome]',
        typeLabel: 'Design email flow',
        description: 'Create automated sequence with timing and triggers',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 2
      },
      {
        command: '/ck:copywriting',
        typeLabel: 'Write copy',
        description: 'Craft compelling subject lines and email body copy',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 3,
        isSkill: true
      },
      {
        command: '/ckm:email:sequence',
        typeLabel: 'Generate sequence',
        description: 'Output complete email sequence with A/B variants',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4
      }
    ],
    tip: 'Include A/B test variants for subject lines to optimize open rates',
    features: [
      'Buyer persona targeting',
      'Automated trigger setup',
      'A/B test variants',
      'ESP-ready export'
    ],
    borderColor: 'border-cyan-500/20'
  },

  // === CAMPAIGN & ANALYTICS ===
  {
    title: 'Launch Marketing Campaign',
    category: 'Campaign & Analytics',
    level: 'Advanced',
    duration: '~45-60 min',
    stepCount: 5,
    bestFor: 'Planning and executing multi-channel campaigns',
    gradientHeader: 'from-purple-500/10 to-violet-500/10',
    hoverBorderColor: 'hover:border-purple-500/50',
    buttonColor: 'bg-purple-500 hover:bg-purple-600',
    icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    iconColor: 'text-purple-600 dark:text-purple-400',
    steps: [
      {
        command: '/ckm:marketing-planning',
        typeLabel: 'Strategic planning',
        description: 'Define campaign goals, KPIs, timeline, and budget allocation',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 1,
        isSkill: true,
      },
      {
        command: '/ckm:campaign:create',
        typeLabel: 'Create campaign',
        description: 'Set up campaign structure with channels and messaging',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 2
      },
      {
        command: '/ckm:content-marketing',
        typeLabel: 'Content creation',
        description: 'Generate campaign assets across all channels',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 3,
        isSkill: true,
      },
      {
        command: '/ckm:social:schedule',
        typeLabel: 'Schedule distribution',
        description: 'Plan and schedule content across social platforms',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 4
      },
      {
        command: '/ckm:analytics',
        typeLabel: 'Set up tracking',
        description: 'Configure analytics and conversion tracking',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 5,
        isSkill: true,
      }
    ],
    tip: 'Use /ckm:campaign status to monitor performance during campaign',
    features: [
      'Multi-channel coordination',
      'Budget allocation planning',
      'Content calendar generation',
      'Performance tracking setup'
    ],
    borderColor: 'border-purple-500/20'
  },
  {
    title: 'Set Up A/B Testing',
    category: 'Campaign & Analytics',
    level: 'Intermediate',
    duration: '~20-30 min',
    stepCount: 4,
    bestFor: 'Testing variations to optimize conversion rates',
    gradientHeader: 'from-amber-500/10 to-orange-500/10',
    hoverBorderColor: 'hover:border-amber-500/50',
    buttonColor: 'bg-amber-500 hover:bg-amber-600',
    icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    iconColor: 'text-amber-600 dark:text-amber-400',
    steps: [
      {
        command: '/ckm:funnel analyze',
        typeLabel: 'Identify bottlenecks',
        description: 'Analyze current funnel to find optimization opportunities',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 1
      },
      {
        command: '/ckm:ab-test-setup',
        typeLabel: 'Design test',
        description: 'Create hypothesis, variants, and success metrics',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 2,
        isSkill: true,
      },
      {
        command: '/ckm:plan:cro',
        typeLabel: 'Implementation plan',
        description: 'Create detailed plan for test implementation',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 3
      },
      {
        command: '/ckm:analyze:report',
        typeLabel: 'Analyze results',
        description: 'Statistical analysis and recommendations',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4
      }
    ],
    tip: 'Run tests for minimum 2 weeks to get statistically significant results',
    features: [
      'Hypothesis formulation',
      'Variant design',
      'Statistical significance calc',
      'Winner implementation'
    ],
    borderColor: 'border-amber-500/20'
  },

  // === SEO & GROWTH ===
  {
    title: 'Perform SEO Audit',
    category: 'SEO & Growth',
    level: 'Beginner',
    duration: '~15-25 min',
    stepCount: 3,
    bestFor: 'Comprehensive site health and SEO analysis',
    gradientHeader: 'from-amber-500/10 to-yellow-500/10',
    hoverBorderColor: 'hover:border-amber-500/50',
    buttonColor: 'bg-amber-500 hover:bg-amber-600',
    icon: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    iconColor: 'text-amber-600 dark:text-amber-400',
    steps: [
      {
        command: '/ckm:seo:audit [url]',
        typeLabel: 'Technical audit',
        description: 'Analyze site structure, speed, mobile-friendliness, and crawlability',
        color: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
        number: 1
      },
      {
        command: '/ckm:seo:keywords [niche]',
        typeLabel: 'Keyword research',
        description: 'Discover high-value keywords and content gaps',
        color: 'bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400',
        number: 2
      },
      {
        command: '/ckm:competitor seo [url]',
        typeLabel: 'Competitor analysis',
        description: 'Analyze competitor rankings and backlink profiles',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3
      }
    ],
    tip: 'Run audits monthly to track SEO progress and catch issues early',
    features: [
      'Technical SEO checklist',
      'Keyword opportunity map',
      'Competitor gap analysis',
      'Priority action items'
    ],
    borderColor: 'border-amber-500/20'
  },
  {
    title: 'Optimize Landing Page',
    category: 'SEO & Growth',
    level: 'Intermediate',
    duration: '~25-35 min',
    stepCount: 4,
    bestFor: 'Improving conversion rates on landing pages',
    gradientHeader: 'from-emerald-500/10 to-teal-500/10',
    hoverBorderColor: 'hover:border-emerald-500/50',
    buttonColor: 'bg-emerald-500 hover:bg-emerald-600',
    icon: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    steps: [
      {
        command: '/ckm:funnel analyze [url]',
        typeLabel: 'Analyze performance',
        description: 'Review current metrics, bounce rate, and user flow',
        color: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
        number: 1
      },
      {
        command: '/ckm:form-cro [form-url]',
        typeLabel: 'Form optimization',
        description: 'Optimize form fields, CTAs, and friction points',
        color: 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400',
        number: 2,
        isSkill: true,
      },
      {
        command: '/ck:copywriting',
        typeLabel: 'Copy optimization',
        description: 'Improve headlines, value props, and persuasion elements',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 3,
        isSkill: true
      },
      {
        command: '/ckm:plan:cro',
        typeLabel: 'Create CRO plan',
        description: 'Document changes and set up tracking for improvements',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4
      }
    ],
    tip: 'Focus on one optimization at a time to accurately measure impact',
    features: [
      'Heatmap analysis',
      'Form field optimization',
      'Copy A/B variants',
      'Conversion tracking'
    ],
    borderColor: 'border-emerald-500/20'
  },

  // === DESIGN & CREATIVE ===
  {
    title: 'Create Marketing Assets',
    category: 'Design & Creative',
    level: 'Intermediate',
    duration: '~30-45 min',
    stepCount: 4,
    bestFor: 'Generating cohesive visual assets for campaigns',
    gradientHeader: 'from-teal-500/10 to-cyan-500/10',
    hoverBorderColor: 'hover:border-teal-500/50',
    buttonColor: 'bg-teal-500 hover:bg-teal-600',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    iconColor: 'text-teal-600 dark:text-teal-400',
    steps: [
      {
        command: '/ckm:brand review',
        typeLabel: 'Review brand guidelines',
        description: 'Load brand colors, fonts, and style guidelines',
        color: 'bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400',
        number: 1
      },
      {
        command: '/ckm:design-system',
        typeLabel: 'Design system',
        description: 'Generate component library aligned with brand',
        color: 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400',
        number: 2,
        isSkill: true,
      },
      {
        command: '/ckm:design banner',
        typeLabel: 'Create assets',
        description: 'Generate banners, ads, and promotional graphics',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 3,
        isSkill: true,
      },
      {
        command: '/ckm:assets-organizing',
        typeLabel: 'Organize assets',
        description: 'Structure and export assets for various platforms',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4,
        isSkill: true,
      }
    ],
    tip: 'Use /ckm:brand create to set up brand guidelines first if not exists',
    features: [
      'Brand-consistent design',
      'Multi-size exports',
      'Platform-specific formats',
      'Asset library organization'
    ],
    borderColor: 'border-teal-500/20'
  },
  {
    title: 'Design Social Graphics',
    category: 'Design & Creative',
    level: 'Beginner',
    duration: '~15-25 min',
    stepCount: 3,
    bestFor: 'Creating engaging social media visuals',
    gradientHeader: 'from-pink-500/10 to-purple-500/10',
    hoverBorderColor: 'hover:border-pink-500/50',
    buttonColor: 'bg-pink-500 hover:bg-pink-600',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    iconColor: 'text-pink-600 dark:text-pink-400',
    steps: [
      {
        command: '/ckm:design social',
        typeLabel: 'Generate graphics',
        description: 'Create platform-optimized social media graphics',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 1,
        isSkill: true,
      },
      {
        command: '/ck:copywriting',
        typeLabel: 'Write captions',
        description: 'Generate engaging captions with hashtags',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/ckm:social:schedule',
        typeLabel: 'Schedule posts',
        description: 'Plan posting schedule for optimal engagement',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3
      }
    ],
    tip: 'Each platform has optimal image sizes - /ckm:design auto-formats',
    features: [
      'Platform-specific sizing',
      'Brand consistency',
      'Caption generation',
      'Hashtag suggestions'
    ],
    borderColor: 'border-pink-500/20'
  },

  {
    title: 'Excalidraw Diagram Generation',
    category: 'Design & Creative',
    level: 'Beginner',
    duration: '~5-15 min',
    stepCount: 1,
    bestFor: 'Visualizing marketing funnels, campaign flows, and content strategies in hand-drawn style',
    gradientHeader: 'from-violet-500/10 to-indigo-500/10',
    hoverBorderColor: 'hover:border-violet-500/50',
    buttonColor: 'bg-violet-500 hover:bg-violet-600',
    icon: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/>',
    iconColor: 'text-violet-600 dark:text-violet-400',
    steps: [
      {
        command: '/excalidraw',
        typeLabel: 'Generate diagram',
        description: 'Generate hand-drawn Excalidraw diagrams — marketing funnels, campaign flows, content calendars, competitor maps',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 1,
        isSkill: true
      }
    ],
    tip: 'Auto-diagram mode can analyze your project structure and generate architecture/flow diagrams automatically',
    features: [
      'Hand-drawn style with semantic color palettes',
      'Marketing funnels, campaign flows, content maps',
      'Auto-diagram: zero-config codebase visualization',
      'File-based workflow with Playwright rendering'
    ],
    borderColor: 'border-violet-500/20'
  },

  // === STRATEGY & RESEARCH ===
  {
    title: 'Competitor Analysis',
    category: 'Strategy & Research',
    level: 'Intermediate',
    duration: '~25-35 min',
    stepCount: 4,
    bestFor: 'Understanding competitive landscape and opportunities',
    gradientHeader: 'from-blue-500/10 to-indigo-500/10',
    hoverBorderColor: 'hover:border-blue-500/50',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
    icon: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
    iconColor: 'text-blue-600 dark:text-blue-400',
    steps: [
      {
        command: '/ckm:competitor list',
        typeLabel: 'Identify competitors',
        description: 'Discover direct and indirect competitors in your space',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 1
      },
      {
        command: '/ckm:competitor analyze [url]',
        typeLabel: 'Deep analysis',
        description: 'Analyze positioning, messaging, and unique value props',
        color: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
        number: 2
      },
      {
        command: '/ckm:competitor content',
        typeLabel: 'Content audit',
        description: 'Analyze content strategy, topics, and engagement',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 3
      },
      {
        command: '/ckm:marketing-research',
        typeLabel: 'Market insights',
        description: 'Synthesize findings into actionable insights',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4,
        isSkill: true,
      }
    ],
    tip: 'Track 3-5 key competitors regularly for ongoing intelligence',
    features: [
      'Competitor mapping',
      'Positioning analysis',
      'Content gap identification',
      'Opportunity matrix'
    ],
    borderColor: 'border-blue-500/20'
  },
  {
    title: 'Define Marketing Plan',
    category: 'Strategy & Research',
    level: 'Advanced',
    duration: '~40-60 min',
    stepCount: 5,
    bestFor: 'Creating comprehensive marketing strategy',
    gradientHeader: 'from-indigo-500/10 to-purple-500/10',
    hoverBorderColor: 'hover:border-indigo-500/50',
    buttonColor: 'bg-indigo-500 hover:bg-indigo-600',
    icon: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    steps: [
      {
        command: '/ckm:persona',
        typeLabel: 'Define personas',
        description: 'Create detailed buyer personas and segments',
        color: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
        number: 1
      },
      {
        command: '/ckm:marketing-research',
        typeLabel: 'Market research',
        description: 'Analyze market trends, size, and opportunities',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 2,
        isSkill: true,
      },
      {
        command: '/ckm:funnel design',
        typeLabel: 'Design funnel',
        description: 'Map customer journey and conversion points',
        color: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
        number: 3
      },
      {
        command: '/ckm:marketing-planning',
        typeLabel: 'Strategic plan',
        description: 'Create comprehensive marketing strategy document',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 4,
        isSkill: true,
      },
      {
        command: '/ckm:dashboard',
        typeLabel: 'Set up tracking',
        description: 'Configure KPI dashboard and reporting',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 5
      }
    ],
    tip: 'Review and update marketing plan quarterly for best results',
    features: [
      'Persona development',
      'Channel strategy',
      'Budget allocation',
      'KPI framework'
    ],
    borderColor: 'border-indigo-500/20'
  },

  // === PLAYBOOK & ORCHESTRATION ===
  {
    title: 'Run Marketing Playbook',
    category: 'Playbook & Orchestration',
    level: 'Intermediate',
    duration: '~30-60 min',
    stepCount: 4,
    bestFor: 'Orchestrating end-to-end marketing campaigns with templates, goals, and smart suggestions',
    gradientHeader: 'from-violet-500/10 to-fuchsia-500/10',
    hoverBorderColor: 'hover:border-violet-500/50',
    buttonColor: 'bg-violet-500 hover:bg-violet-600',
    icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    iconColor: 'text-violet-600 dark:text-violet-400',
    steps: [
      {
        command: '/ckm:play:create --template saas-launch',
        typeLabel: 'Create playbook',
        description: 'Choose from templates: saas-launch, product-hunt-launch, content-engine, campaign-sprint',
        color: 'bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
        number: 1,
        isSkill: true,
      },
      {
        command: '/ckm:play:goals set',
        typeLabel: 'Set goals',
        description: 'Define KPIs and targets — integrates with GA4, GSC, Stripe metrics',
        color: 'bg-fuchsia-500/10 dark:bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400',
        number: 2,
        isSkill: true,
      },
      {
        command: '/ckm:play:next',
        typeLabel: 'Smart next step',
        description: 'AI suggests highest-impact action based on goal gaps and step readiness',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 3,
        isSkill: true,
      },
      {
        command: '/ckm:play:status',
        typeLabel: 'Track progress',
        description: 'Dashboard view of all steps, goals, and blockers',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4,
        isSkill: true,
      }
    ],
    tip: 'Use /ckm:play learn to capture insights after completing each step',
    features: [
      'Dependency-graph routing between steps',
      'Quality gates for human approval checkpoints',
      'Goal tracking with GA4/GSC/Stripe integration',
      'Smart suggestions based on goal gaps',
      '4 bundled templates: SaaS launch, Product Hunt, content engine, campaign sprint'
    ],
    borderColor: 'border-violet-500/20'
  },

  // === VIDEO & MEDIA ===
  {
    title: 'Design YouTube Thumbnails',
    category: 'Video & Media',
    level: 'Beginner',
    duration: '~10-20 min',
    stepCount: 3,
    bestFor: 'Creating CTR-optimized YouTube thumbnails with AI generation',
    gradientHeader: 'from-red-500/10 to-orange-500/10',
    hoverBorderColor: 'hover:border-red-500/50',
    buttonColor: 'bg-red-500 hover:bg-red-600',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    iconColor: 'text-red-600 dark:text-red-400',
    steps: [
      {
        command: '/ckm:youtube-thumbnail-design',
        typeLabel: 'Design thumbnails',
        description: 'AI generates complete thumbnails with text baked in via Gemini Pro (up to 4K)',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 1,
        isSkill: true,
      },
      {
        command: '/ck:ai-multimodal',
        typeLabel: 'Review & iterate',
        description: 'Analyze generated thumbnails and refine with feedback',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 2,
        isSkill: true
      },
      {
        command: '/ckm:assets-organizing',
        typeLabel: 'Organize exports',
        description: 'Structure thumbnails by video slug with variant naming',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3,
        isSkill: true,
      }
    ],
    tip: '17 art direction styles available: facecam, mystery, bold-text, before-after, and more',
    features: [
      '17 art direction styles with CTR impact ratings',
      'Niche-specific guides: tech, gaming, education, cooking, fitness, business',
      'Batch variant generation for A/B testing',
      'Reference face support for consistent branding',
      'Google Font support and arrow overlays'
    ],
    borderColor: 'border-red-500/20'
  },
  {
    title: 'Script & Storyboard Video',
    category: 'Video & Media',
    level: 'Intermediate',
    duration: '~25-40 min',
    stepCount: 3,
    bestFor: 'Pre-production planning for video content',
    gradientHeader: 'from-orange-500/10 to-red-500/10',
    hoverBorderColor: 'hover:border-orange-500/50',
    buttonColor: 'bg-orange-500 hover:bg-orange-600',
    icon: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>',
    iconColor: 'text-orange-600 dark:text-orange-400',
    steps: [
      {
        command: '/ckm:video:script [topic]',
        typeLabel: 'Write script',
        description: 'Generate video script with hooks, body, and CTA',
        color: 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
        number: 1
      },
      {
        command: '/ckm:video:storyboard',
        typeLabel: 'Create storyboard',
        description: 'Visual shot-by-shot breakdown with timing',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 2
      },
      {
        command: '/ckm:elevenlabs speak',
        typeLabel: 'Generate voiceover',
        description: 'Create AI voiceover from script',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 3,
        isSkill: true,
      }
    ],
    tip: 'Keep videos under 2 minutes for social media; under 10 for YouTube',
    features: [
      'Hook optimization',
      'Scene breakdown',
      'Timing guidance',
      'AI voiceover option'
    ],
    borderColor: 'border-orange-500/20'
  },
  {
    title: 'Create Video Content',
    category: 'Video & Media',
    level: 'Advanced',
    duration: '~45-60 min',
    stepCount: 4,
    bestFor: 'Full video production workflow',
    gradientHeader: 'from-red-500/10 to-pink-500/10',
    hoverBorderColor: 'hover:border-red-500/50',
    buttonColor: 'bg-red-500 hover:bg-red-600',
    icon: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>',
    iconColor: 'text-red-600 dark:text-red-400',
    steps: [
      {
        command: '/ckm:video:script',
        typeLabel: 'Script & plan',
        description: 'Create script and production plan',
        color: 'bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400',
        number: 1
      },
      {
        command: '/ckm:video:create',
        typeLabel: 'Generate video',
        description: 'Create video with AI assistance or edit guidance',
        color: 'bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400',
        number: 2
      },
      {
        command: '/ckm:youtube:social',
        typeLabel: 'Create clips',
        description: 'Generate social media clips from long-form content',
        color: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400',
        number: 3
      },
      {
        command: '/ckm:seo:keywords [video]',
        typeLabel: 'Optimize metadata',
        description: 'Create SEO titles, descriptions, and tags',
        color: 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400',
        number: 4
      }
    ],
    tip: 'Use /ckm:youtube blog to repurpose video into blog content',
    features: [
      'Full production workflow',
      'Social clip generation',
      'SEO optimization',
      'Multi-platform export'
    ],
    borderColor: 'border-red-500/20'
  }
];

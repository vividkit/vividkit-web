export interface Stat {
  value: string;
  label: string;
  color: string;
}

export interface AudienceItem {
  icon: string;
  title: string;
  description: string;
}

export interface Audience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  gradient: string;
  borderColor: string;
  items: AudienceItem[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  color: string;
  details: string[];
}

export interface BuildType {
  id: string;
  title: string;
  description: string;
  examples: string[];
  color: string;
  gradient: string;
}

export interface DesignStyle {
  name: string;
  description: string;
  color: string;
}

// Hero Content
export const uiuxHeroContent = {
  title: 'UI/UX Pro Max',
  subtitle: 'Your AI-Powered Design Intelligence System',
  description: 'Think of it as your personal design expert - instantly get professional color palettes, font pairings, UI styles, and best practices. No design degree needed, just ask and AI creates beautiful interfaces for you!'
};

// Feature Stats
export const uiuxStats: Stat[] = [
  { value: '50', label: 'UI Styles', color: 'indigo' },
  { value: '21', label: 'Color Palettes', color: 'purple' },
  { value: '50', label: 'Font Pairings', color: 'pink' },
  { value: '20', label: 'Chart Types', color: 'cyan' }
];

// Audience Sections
export const audiences: Audience[] = [
  {
    id: 'everyone',
    title: 'For Everyone',
    subtitle: 'No coding needed!',
    description: 'Perfect if you\'re building landing pages, portfolios, or want beautiful designs without technical knowledge',
    color: 'emerald',
    gradient: 'from-emerald-500/10 to-green-500/10',
    borderColor: 'border-emerald-500/30',
    items: [
      { icon: 'users', title: 'Business Owners', description: 'Create stunning websites easily' },
      { icon: 'video', title: 'Content Creators', description: 'Design beautiful landing pages' },
      { icon: 'rocket', title: 'Entrepreneurs', description: 'Launch professional products fast' }
    ]
  },
  {
    id: 'developers',
    title: 'For Developers',
    subtitle: 'Speed up your workflow!',
    description: 'Get design systems, code-ready color palettes, and stack-specific best practices instantly',
    color: 'blue',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'border-blue-500/30',
    items: [
      { icon: 'code', title: 'Frontend Devs', description: 'Skip design research, copy code' },
      { icon: 'layers', title: 'Fullstack Devs', description: 'Focus on logic, not design' },
      { icon: 'zap', title: 'Indie Hackers', description: 'Ship MVPs 10x faster' }
    ]
  },
  {
    id: 'designers',
    title: 'For Designers',
    subtitle: 'Get inspiration fast!',
    description: 'Discover curated design systems, explore trending styles, and maintain consistency across projects',
    color: 'purple',
    gradient: 'from-purple-500/10 to-pink-500/10',
    borderColor: 'border-purple-500/30',
    items: [
      { icon: 'palette', title: 'UI Designers', description: 'Find perfect color + font combos' },
      { icon: 'target', title: 'UX Designers', description: 'Access best practice guidelines' },
      { icon: 'package', title: 'Product Designers', description: 'Industry-specific recommendations' }
    ]
  }
];

// How It Works
export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Tell AI What You Want',
    description: 'Just describe your project in plain English! No technical jargon needed.',
    color: 'cyan',
    details: ['AI understands: product type, industry, style needed']
  },
  {
    number: 2,
    title: 'AI Searches Design Database',
    description: 'Behind the scenes, AI searches 8 design domains to build your perfect design system',
    color: 'blue',
    details: ['Style Guide', 'Colors', 'Typography', 'Layout', 'UX Rules', 'Accessibility']
  },
  {
    number: 3,
    title: 'Get Beautiful Code',
    description: 'AI creates complete HTML/CSS with all design choices perfectly implemented',
    color: 'indigo',
    details: ['Professional colors', 'Beautiful fonts', 'Responsive design', 'Smooth animations']
  }
];

// What You Can Build
export const buildTypes: BuildType[] = [
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'Create stunning landing pages for any business',
    examples: ['SaaS Products', 'E-commerce Stores', 'Healthcare Services', 'Beauty & Wellness'],
    color: 'pink',
    gradient: 'from-pink-500/10 to-rose-500/10'
  },
  {
    id: 'dashboards',
    title: 'Dashboards',
    description: 'Build data-rich dashboards with perfect charts',
    examples: ['Analytics Dashboards', 'Admin Panels', 'Business Intelligence', 'Monitoring Tools'],
    color: 'cyan',
    gradient: 'from-cyan-500/10 to-blue-500/10'
  },
  {
    id: 'portfolios',
    title: 'Portfolios',
    description: 'Showcase your work with beautiful portfolios',
    examples: ['Designer Portfolios', 'Developer Showcases', 'Creative Work', 'Photography Sites'],
    color: 'purple',
    gradient: 'from-purple-500/10 to-indigo-500/10'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    description: 'Design mobile apps for any platform',
    examples: ['React Native', 'Flutter', 'SwiftUI', 'Progressive Web Apps'],
    color: 'orange',
    gradient: 'from-orange-500/10 to-amber-500/10'
  }
];

// Design Styles Preview
export const designStyles: DesignStyle[] = [
  { name: 'Glassmorphism', description: 'Frosted glass effect', color: 'indigo' },
  { name: 'Minimalism', description: 'Clean & simple', color: 'purple' },
  { name: 'Aurora UI', description: 'Vibrant gradients', color: 'pink' },
  { name: 'Dark Mode', description: 'Professional darkness', color: 'cyan' },
  { name: 'Neumorphism', description: 'Soft shadows', color: 'emerald' },
  { name: 'Brutalism', description: 'Raw & bold', color: 'amber' },
  { name: 'Claymorphism', description: '3D clay effect', color: 'rose' },
  { name: '...and 43 more!', description: 'Explore all styles', color: 'blue' }
];

// Magic Phrase
export const magicPhrase = {
  syntax: 'Using ui-ux-pro-max skill, <your request>',
  example: 'Using ui-ux-pro-max skill, create a beautiful landing page for my yoga studio. I want calming, peaceful colors and elegant fonts.'
};

// Time Saved
export const timeSaved = {
  traditional: '6-8 hours',
  withSkill: '2-5 minutes'
};
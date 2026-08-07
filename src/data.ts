import {
  Users,
  Briefcase,
  HeartHandshake,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

export interface NavChild {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  /** Omit or leave empty for dropdown-only labels (no navigation). */
  href?: string;
  children?: NavChild[];
}

/** Hash links resolve to home (`/#…`); path links are standalone pages. */
export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/who-we-are',
    children: [
      { label: 'Who we are', href: '/who-we-are' },
      { label: 'Our Visionary', href: '/our-visionary' },
    ],
  },
  {
    label: 'Our Projects',
    children: [
      { label: 'TEDC', href: 'https://tedc.com.ng' },
      { label: 'Annual Business Summit', href: '/annual-business-summit' },
      { label: 'InfluenceHER Conference', href: '/influenceher' },
      { label: 'Mayokun Oreofe Initiative', href: '/mayokun-oreofe' },
      {
        label: 'Household of Faith in Celebration (HFIC)',
        href: '/hfic',
      },
    ],
  },
  { label: 'The Elim Centre', href: '/#support' },
  { label: 'Contact Us', href: '/contact' },
];

export interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const pillars: Pillar[] = [
  {
    icon: Users,
    title: 'Weekly Fellowships',
    description:
      'Spiritual growth and community prayer that anchor every entrepreneur in faith, purpose, and sisterhood.',
  },
  {
    icon: Briefcase,
    title: 'Business Training',
    description:
      'Practical entrepreneurship development and strategy — from idea to income — taught by marketplace leaders.',
  },
  {
    icon: HeartHandshake,
    title: 'Mentorship',
    description:
      'Connecting rising leaders with experienced marketplace guides who walk the journey of growth with them.',
  },
  {
    icon: TrendingUp,
    title: 'Economic Empowerment',
    description:
      'Providing resources and capital opportunities to build lasting legacy and generational wealth.',
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 200, suffix: '+', label: 'Projects Completed' },
  { value: 150, suffix: '+', label: 'Clients & Partners Impacted' },
];

export interface GivingTier {
  name: string;
  amount: string;
  description: string;
  featured?: boolean;
}

export const givingTiers: GivingTier[] = [
  {
    name: 'Seed Partner',
    amount: '$25 / month',
    description: 'Help supply training materials and fellowship resources for one woman each month.',
  },
  {
    name: 'Builder',
    amount: '$100 / month',
    description: 'Sponsor a woman through a full business-training cohort, from idea to launch.',
    featured: true,
  },
  {
    name: 'Legacy Patron',
    amount: '$500 / month',
    description: 'Fuel the Center Building Project and provide seed capital for emerging enterprises.',
  },
];

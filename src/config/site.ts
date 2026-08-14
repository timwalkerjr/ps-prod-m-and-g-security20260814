export const SITE = {
  name: 'M & G Security',
  title: 'M & G Security -- Professional Security Services Berks County, PA',
  description:
    'M & G Security provides professional security services for events, construction sites, corporate properties and more across Berks County, PA. Founded in 1997 by former law enforcement officers.',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://mandgsecurity.clientsite.agency/',
  twitterHandle: '@mgsecurity',
  phone: '(484) 824-8631',
  phoneHref: 'tel:+14848248631',
  email: 'info@mgsecurity.com',
  address: 'P.O. Box 6255, Wyomissing, PA 19610',
  addressLines: ['P.O. Box 6255', 'Wyomissing, PA 19610'],
  ctaLink: '/contact-us',
  logoSrc: "https://pagesmith-cdn.com/f57c14f2/images/3d957a88-20e5-4612-a102-248b0fcabfa4_compressed_mg-lockup_gold-head_white-text-1536.webp",
  socials: {
    twitter: '',
    github: '',
    linkedin: '',
    facebook: 'https://facebook.com',
  },
} as const;

export type SiteConfig = typeof SITE;

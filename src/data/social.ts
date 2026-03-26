export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/roman-razumieienko/?locale=en_US',
    label: 'Connect on LinkedIn',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/Razum',
    label: 'View GitHub profile',
  },
  {
    platform: 'Wellfound',
    url: 'https://wellfound.com/u/roman-razumeyenko',
    label: 'View Wellfound profile',
  },
  {
    platform: 'Xing',
    url: 'https://www.xing.com/profile/Roman_Razumieienko',
    label: 'View Xing profile',
  },
  {
    platform: 'Email',
    url: 'mailto:razumyeyenko@gmail.com',
    label: 'Send an email',
  },
];

export const email = 'razumyeyenko@gmail.com';

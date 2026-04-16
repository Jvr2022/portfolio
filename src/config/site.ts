// ─────────────────────────────────────────────────────────────
// site.ts — The only file you need to edit to make this yours.
// ─────────────────────────────────────────────────────────────

/** Personal identity shown in the hero section. */
export const identity = {
  name: 'Joshua van Rijswijk',
  title: 'Dutch Young Cybersecurity Researcher & Full-Stack Developer.',
  avatarUrl: 'https://github.com/jvr2022.png',
} as const;

/** Short bio paragraphs displayed in the About card. */
export const about: string[] = [
  'I am a security researcher and full-stack developer from the Netherlands. I specialize in Web, Android, and Open Source (OSS) hacking.',
  'My background in development allows me to analyze complex codebases and find logic flaws that automated tools miss. I focus on white-box auditing, secure code implementation, and responsible disclosure to help secure the software supply chain.',
];

/** Social / contact links. Used in the hero buttons and footer icons. */
export const socials = [
  { label: 'Email', href: 'mailto:joshuavanrijswijk@outlook.com', icon: 'email' },
  { label: 'GitHub', href: 'https://github.com/Jvr2022', icon: 'github' },
  { label: 'Bugcrowd', href: 'https://bugcrowd.com/h/Joshuavanrijswijk', icon: 'bugcrowd' },
] as const;

/** Technical skills grouped by category. */
export const techStack = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Kotlin', 'C#', 'Lua', 'HTML5', 'CSS3'],
  },
  {
    title: 'Security & Infrastructure',
    items: ['Kali Linux', 'Android Security', 'Bash', 'Wireshark', 'Metasploit', 'Linux', 'Git', 'Docker'],
  },
  {
    title: 'Frameworks & Tools',
    items: ['Node.js', 'Unity'],
  },
];

/** Organizations that acknowledged your security contributions. */
export const hallOfFame = [
  {
    name: 'LastPass',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/LastPass_logo.svg/1280px-LastPass_logo.svg.png',
    url: 'https://bugcrowd.com/lastpass',
  },
  {
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Apple_logo_with_text_%28white%29.png',
    url: 'https://security.apple.com/',
  },
  {
    name: 'PolarLearn',
    logo: 'https://i.imgur.com/dChmDfD.png',
    url: 'https://polarlearn.nl/',
  },
  {
    name: 'T-Mobile',
    logo: 'https://static.wikia.nocookie.net/logopedia/images/9/98/T-Mobile_2022.svg/revision/latest/scale-to-width-down/300?cb=20220329141156',
    url: 'https://bugcrowd.com/engagements/t-mobile',
  },
];

/** SEO & meta defaults. */
export const meta = {
  siteUrl: 'https://joshuavanrijswijk.com/',
  defaultTitle: 'Joshua van Rijswijk - Portfolio',
  homeTitle: 'Joshua van Rijswijk - Security Researcher',
  homeDescription:
    'Welcome to the portfolio of Joshua van Rijswijk (Jvr2022). Explore my cybersecurity research, tech stack, and professional exploit development experience.',
  vulnsTitle: 'Security Advisories - Joshua van Rijswijk',
  vulnsDescription:
    'A comprehensive chronological list of high-impact security vulnerabilities and CVEs identified by Joshua van Rijswijk.',
  ogImage: 'https://github.com/jvr2022.png',
  keywords:
    'cybersecurity, researcher, full-stack developer, exploit dev, CVE, Joshua van Rijswijk, node-tar, OAuth bypass, PolarLearn',
};

/** Year the portfolio was first published (used in footer copyright). */
export const startYear = 2026;

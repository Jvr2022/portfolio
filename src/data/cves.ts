export type CveSeverity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export type CveEntry = {
  id: string;
  project: string;
  severity: CveSeverity;
  score?: number;
  cvssVersion?: '3.1' | '4.0';
  cvssVector?: string;
  description: string;
  aliases?: string[];
  url: string;
  urlLabel: string;
};

export const cves: CveEntry[] = [
  {
    id: 'CVE-2026-35525',
    project: 'liquidjs',
    score: 8.2,
    severity: 'HIGH',
    cvssVersion: '4.0',
    cvssVector: 'CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:H/VI:N/VA:N/SC:N/SI:N/SA:N',
    description:
      'Root restriction bypass for partial and layout loading through symlinked templates, allowing files outside the intended template root to be read and rendered.',
    aliases: ['GHSA-56p5-8mhr-2fph'],
    url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-35525',
    urlLabel: 'Open NVD Record',
  },
  {
    id: 'CVE-2026-35610',
    project: 'PolarLearn',
    score: 8.8,
    severity: 'HIGH',
    cvssVersion: '3.1',
    cvssVector: 'CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H',
    description:
      'Server action admin bypass in account-management actions let authenticated non-admin users set arbitrary passwords for other users or delete arbitrary accounts.',
    aliases: ['GHSA-8hww-w7cc-77rj'],
    url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-35610',
    urlLabel: 'Open NVD Record',
  },
  {
    id: 'GHSA-w48f-fwg7-ww6p',
    project: '@stablelib/cbor',
    score: 8.9,
    severity: 'HIGH',
    cvssVersion: '4.0',
    cvssVector: 'CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:N/VC:N/VI:H/VA:N/SC:N/SI:H/SA:N',
    description:
      'Prototype poisoning via __proto__ map keys in CBOR decoding. Attacker-controlled keys can replace the decoded object prototype and inject inherited properties. Fixed in 2.0.4.',
    url: 'https://github.com/advisories/GHSA-w48f-fwg7-ww6p',
    urlLabel: 'Open GitHub Advisory',
  },
  {
    id: 'GHSA-5jg4-p4qw-cgfr',
    project: '@stablelib/cbor',
    score: 8.7,
    severity: 'HIGH',
    cvssVersion: '4.0',
    cvssVector: 'CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:N/VC:N/VI:N/VA:H/SC:N/SI:N/SA:N',
    description:
      'Stack exhaustion denial of service via deeply nested CBOR arrays, maps, or tags. Recursive decoding lacks a safe depth limit before version 2.0.4.',
    url: 'https://github.com/advisories/GHSA-5jg4-p4qw-cgfr',
    urlLabel: 'Open GitHub Advisory',
  },
  {
    id: 'CVE-2026-31802',
    project: 'node-tar',
    score: 8.2,
    severity: 'HIGH',
    description:
      'Path Traversal vulnerability in isaacs tar (node-tar) allowing unexpected arbitrary file overwrites via crafted drive-relative symlink targets.',
    url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-31802',
    urlLabel: 'Open NVD Record',
  },
  {
    id: 'CVE-2026-29786',
    project: 'node-tar',
    score: 8.2,
    severity: 'HIGH',
    description:
      'High-severity flaw allowing attackers to create hardlinks outside the extraction directory. Using specially crafted drive-relative links results in file overwrites.',
    url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-29786',
    urlLabel: 'Open NVD Record',
  },
  {
    id: 'CVE-2026-25885',
    project: 'PolarLearn',
    score: 10,
    severity: 'CRITICAL',
    description:
      'Critical authentication bypass in the WebSocket endpoint (wss://polarlearn.nl/api/v1/ws). Attackers can anonymously subscribe to chat groups and inject arbitrary messages.',
    url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-25885',
    urlLabel: 'Open NVD Record',
  },
  {
    id: 'CVE-2026-25547',
    project: '@isaacs/brace-expansion',
    score: 9.2,
    severity: 'CRITICAL',
    description:
      'Denial of Service (DoS) vulnerability triggered by unbounded and eager expansion of brace patterns, forcing exponential CPU/memory consumption.',
    url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-25547',
    urlLabel: 'Open NVD Record',
  },
  {
    id: 'CVE-2026-25222',
    project: 'PolarLearn',
    score: 6.3,
    severity: 'MEDIUM',
    description:
      'Timing attack in the sign-in endpoint via Argon2 hashing differences, enabling username enumeration for unauthenticated attackers.',
    url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-25222',
    urlLabel: 'Open NVD Record',
  },
  {
    id: 'CVE-2026-25221',
    project: 'PolarLearn',
    score: 2.3,
    severity: 'LOW',
    description:
      'OAuth 2.0 flow flaw failing to implement the state parameter, allowing CSRF and victim account takeover during provider login.',
    url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-25221',
    urlLabel: 'Open NVD Record',
  },
  {
    id: 'CVE-2026-25126',
    project: 'PolarLearn',
    score: 7.1,
    severity: 'HIGH',
    description:
      'Vote API business logic bypass. Missing type validation on the direction field allowed arbitrary values to register as non-upvotes.',
    url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-25126',
    urlLabel: 'Open NVD Record',
  },
  {
    id: 'CVE-2026-23745',
    project: 'node-tar',
    score: 8.2,
    severity: 'HIGH',
    description:
      'Path Traversal and arbitrary file overwrite by bypassing the extraction root using hardlinks and poisoned absolute symlinks when preservePaths is false.',
    url: 'https://nvd.nist.gov/vuln/detail/CVE-2026-23745',
    urlLabel: 'Open NVD Record',
  },
];

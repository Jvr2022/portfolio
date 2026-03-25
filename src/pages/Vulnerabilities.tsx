import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tape } from '../components/Tape';
import { Card } from '../components/Card';

export const Vulnerabilities = () => {
  const [boxState, setBoxState] = useState(false);

  const cves = [
    { id: 'CVE-2026-31802', project: 'node-tar', cvss: '8.2 HIGH', desc: 'Path Traversal vulnerability in isaacs tar (node-tar) allowing unexpected arbitrary file overwrites via crafted drive-relative symlink targets.' },
    { id: 'CVE-2026-29786', project: 'node-tar', cvss: '8.2 HIGH', desc: 'High-severity flaw allowing attackers to create hardlinks outside the extraction directory. Using specially crafted drive-relative links results in file overwrites.' },
    { id: 'CVE-2026-25885', project: 'PolarLearn', cvss: '10.0 CRITICAL', desc: 'Critical authentication bypass in the WebSocket endpoint (wss://polarlearn.nl/api/v1/ws). Attackers can anonymously subscribe to chat groups and inject arbitrary messages.' },
    { id: 'CVE-2026-25547', project: '@isaacs/brace-expansion', cvss: '9.2 CRITICAL', desc: 'Denial of Service (DoS) vulnerability triggered by unbounded and eager expansion of brace patterns, forcing exponential CPU/memory consumption.' },
    { id: 'CVE-2026-25222', project: 'PolarLearn', cvss: '6.3 MEDIUM', desc: 'Timing Attack in the sign-in endpoint (Argon2 hashing difference), enabling username enumeration for unauthenticated attackers.' },
    { id: 'CVE-2026-25221', project: 'PolarLearn', cvss: '2.3 LOW', desc: 'OAuth 2.0 flow flaw failing to implement the state parameter, allowing CSRF and victim account takeover during provider login.' },
    { id: 'CVE-2026-25126', project: 'PolarLearn', cvss: '7.1 HIGH', desc: 'Vote API business logic bypass. Missing type validation on the direction field allowed arbitrary values to register as non-upvotes.' },
    { id: 'CVE-2026-23745', project: 'node-tar', cvss: '8.2 HIGH', desc: 'Path Traversal and Arbitrary File Overwrite by bypassing extraction root using hardlinks and poisoned absolute symlinks when preservePaths is false.' }
  ];

  const getScoreColor = (cvss: string) => {
    if (cvss.includes('CRITICAL')) return '#8c2f39';    // Dark Red
    if (cvss.includes('HIGH')) return '#b27438';        // Orange/Brown
    if (cvss.includes('MEDIUM')) return '#d6a04d';      // Gold/Yellow
    return '#6b645b';                                   // Grey (LOW)
  };

  return (
    <section>
      <Helmet>
        <title>Security Advisories - Joshua van Rijswijk</title>
        <meta name="description" content="A comprehensive chronological list of high-impact security vulnerabilities and CVEs identified by Joshua van Rijswijk." />
      </Helmet>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Security Advisories</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '2.5rem' }}>
        {cves.map((cve, i) => (
          <Card key={cve.id} tiltAngle={i % 2 === 0 ? 0.3 : -0.3} delay={0.1 + (i * 0.1)} className="vuln-card">
            <Tape position={i % 2 === 0 ? 'top-center' : 'corner-tr'} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '2px dashed var(--color-border)', paddingBottom: '0.8rem', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, color: 'var(--color-text-main)', fontSize: '1.4rem' }}>{cve.id}</h3>
              <span className="cardboard-label" style={{ backgroundColor: getScoreColor(cve.cvss), margin: 0, fontWeight: 'bold' }}>
                CVSS: {cve.cvss}
              </span>
            </div>
            
            <p style={{ margin: '0 0 1rem 0', fontWeight: 'bold', fontSize: '1.1rem' }}>
              Project: <span style={{ backgroundColor: 'var(--color-bg-base)', padding: '0.2rem 0.5rem', border: '1px solid var(--color-border)', borderRadius: '2px' }}>{cve.project}</span>
            </p>
            
            <p style={{ margin: '0 0 1.5rem 0', lineHeight: 1.7, color: 'var(--color-text-muted)' }}>
              <strong>Description:</strong> {cve.desc}
            </p>
            
            <a 
              href={`https://nvd.nist.gov/vuln/detail/${cve.id}`} 
              target="_blank" 
              rel="noreferrer"
              className="btn-cardboard"
              style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}
            >
              NIST NVD Record →
            </a>
          </Card>
        ))}
      </div>

      {/* Interactive Easter Egg */}
      <div 
        onClick={() => setBoxState(true)}
        style={{
          marginTop: '6rem',
          textAlign: 'center',
          cursor: boxState ? 'default' : 'pointer',
          opacity: boxState ? 1 : 0.15,
          transition: 'all 0.5s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        className={boxState ? '' : 'hover-opacity-1'}
      >
        <style>{`
          .hover-opacity-1:hover { opacity: 0.8 !important; }
        `}</style>
        <pre style={{ fontSize: '0.8rem', lineHeight: '1.2', display: 'inline-block', textAlign: 'left', margin: 0, fontWeight: 'bold' }}>
{boxState ? `  🎉 
 /  \\ 
|0DAY|
 \\__/ ` : `  📦 
 /  \\ 
| ?? |
 \\__/ `}
        </pre>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: boxState ? 'var(--color-text-highlight)' : 'inherit', fontWeight: boxState ? 'bold' : 'normal' }}>
          {boxState ? 'You found the 0-day stash! (Just kidding)' : 'Click to open...'}
        </p>
      </div>
    </section>
  );
};

import { Link } from 'react-router-dom';
import { Card } from './Card';
import { Tape } from './Tape';

export const CveShortcut = () => {
  return (
    <section style={{ marginBottom: '3rem' }}>
      <Card tiltAngle={-0.35} delay={0.15}>
        <Tape position="corner-tr" />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ flex: '1 1 320px' }}>
            <span className="cardboard-label">Research / Advisories</span>
            <p style={{ margin: '0.5rem 0 0 0', color: 'var(--color-text-muted)' }}>
              Jump straight to my published CVEs and vulnerability writeups.
            </p>
          </div>

          <Link to="/vulns" className="btn-cardboard">
            Browse CVEs
          </Link>
        </div>
      </Card>
    </section>
  );
};

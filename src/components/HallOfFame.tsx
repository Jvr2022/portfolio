import { Card } from './Card';
import { Tape } from './Tape';
import { hallOfFame } from '../config/site';

export const HallOfFame = () => {
  return (
    <section style={{ marginTop: '3rem' }}>
      <Card tiltAngle={-0.5} delay={0.4}>
        <Tape position="corner-tr" />
        <span className="cardboard-label">Hall of Fame</span>
        <p style={{ marginTop: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
          Acknowledged for security contributions by the following organizations:
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          {hallOfFame.map(company => (
            <a 
              key={company.name} 
              href={company.url} 
              target="_blank" 
              rel="noreferrer"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', filter: 'grayscale(60%)', transition: 'filter 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
              onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(60%)'}
            >
              <img 
                src={company.logo} 
                alt={`${company.name} Security Program`} 
                loading="lazy"
                style={{ maxHeight: '45px', objectFit: 'contain' }}
              />
              <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontWeight: 'normal' }}>{company.name}</span>
            </a>
          ))}
        </div>
      </Card>
    </section>
  );
};
